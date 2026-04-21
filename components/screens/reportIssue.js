import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Constants from "expo-constants";
import {
  enqueueReport,
  getQueuedReports,
  replaceQueuedReports,
} from "../functions/reportQueue";
import app from "../../app.json";
import {
  PrimaryActionButton,
  SegmentedControl,
  SettingsRow,
  SettingsScaffold,
  SettingsSection,
  settingsPalette,
} from "../reusableComponents/settingsUI";

const ISSUE_TYPES = [
  { label: "Bug", value: "Bug", icon: "bug-outline" },
  { label: "Text", value: "Text Correction", icon: "create-outline" },
  { label: "Rite", value: "Rite Correction", icon: "book-outline" },
  { label: "Idea", value: "Suggestion", icon: "bulb-outline" },
];

const MAX_VIDEO_MS = 2 * 60 * 1000;
const MAX_VIDEO_BYTES = 40 * 1024 * 1024;
const MAX_OTHER_BYTES = 10 * 1024 * 1024;
const ATTACHMENTS_DIR = `${FileSystem.documentDirectory}report-attachments/`;

const reportApiBaseUrl = Constants.expoConfig?.extra?.reportApiBaseUrl || "";
const reportBaseUrl = reportApiBaseUrl.replace(/\/$/, "");

const formatBytes = (bytes) => {
  if (!bytes && bytes !== 0) return "unknown size";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const ensureAttachmentDir = async () => {
  const info = await FileSystem.getInfoAsync(ATTACHMENTS_DIR);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(ATTACHMENTS_DIR, { intermediates: true });
  }
};

const sanitizeFileName = (name) => name.replace(/[^a-zA-Z0-9._-]/g, "_");

const deriveFileName = (uri, fallback) => {
  if (!uri) return fallback;
  const parts = uri.split("/");
  const name = parts[parts.length - 1];
  return name || fallback;
};

const ReportField = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  keyboardType,
  autoCapitalize,
}) => (
  <View style={styles.field}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <TextInput
      style={[styles.input, multiline && styles.textArea]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={settingsPalette.muted}
      multiline={multiline}
      textAlignVertical={multiline ? "top" : "center"}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  </View>
);

const ReportIssueScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const context = route.params?.context || {};
  const [issueType, setIssueType] = useState("");
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");
  const [expected, setExpected] = useState("");
  const [actual, setActual] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorDetail, setErrorDetail] = useState("");

  const appVersion = app.expo?.version || "unknown";

  const contextRows = useMemo(() => {
    const rows = [];
    if (context?.screenName) rows.push({ label: "Screen", value: context.screenName });
    if (context?.tableTitle) rows.push({ label: "Title", value: context.tableTitle });
    return rows;
  }, [context]);

  const persistAttachment = useCallback(async (asset, fallbackName) => {
    await ensureAttachmentDir();
    const name = sanitizeFileName(
      asset.name || asset.fileName || deriveFileName(asset.uri, fallbackName)
    );
    const targetUri = `${ATTACHMENTS_DIR}${Date.now()}-${name}`;
    await FileSystem.copyAsync({ from: asset.uri, to: targetUri });
    return {
      localUri: targetUri,
      name,
      contentType: asset.mimeType || asset.contentType || "application/octet-stream",
      size: asset.size,
      kind: asset.kind,
    };
  }, []);

  const addAttachment = useCallback(
    async (asset, fallbackName) => {
      const stored = await persistAttachment(asset, fallbackName);
      setAttachments((prev) => [...prev, stored]);
    },
    [persistAttachment]
  );

  const handlePickMedia = useCallback(async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "Please allow access to your media library.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      videoMaxDuration: 120,
    });
    if (result.canceled || !result.assets?.length) return;
    const asset = result.assets[0];
    const info = await FileSystem.getInfoAsync(asset.uri);
    const size = info.size;
    const isVideo = asset.type === "video";
    const duration = asset.duration || 0;

    if (isVideo && duration > MAX_VIDEO_MS) {
      Alert.alert("Video too long", "Please select a video under 2 minutes.");
      return;
    }
    if (isVideo && size && size > MAX_VIDEO_BYTES) {
      Alert.alert("Video too large", "Please select a video under 40 MB.");
      return;
    }
    if (!isVideo && size && size > MAX_OTHER_BYTES) {
      Alert.alert("File too large", "Please select a file under 10 MB.");
      return;
    }

    await addAttachment({
      uri: asset.uri,
      name: asset.fileName,
      mimeType: asset.mimeType || (isVideo ? "video/mp4" : "image/jpeg"),
      size,
      kind: isVideo ? "video" : "image",
    });
  }, [addAttachment]);

  const handlePickDocument = useCallback(async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: [
        "text/plain",
        "text/markdown",
        "application/json",
        "text/csv",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
      copyToCacheDirectory: true,
    });
    if (result.canceled || !result.assets?.length) return;
    const asset = result.assets[0];
    const size = asset.size;
    if (size && size > MAX_OTHER_BYTES) {
      Alert.alert("File too large", "Please select a file under 10 MB.");
      return;
    }
    await addAttachment({
      uri: asset.uri,
      name: asset.name,
      mimeType: asset.mimeType || "text/plain",
      size,
      kind: "text",
    });
  }, [addAttachment]);

  const removeAttachment = useCallback(async (index) => {
    setAttachments((prev) => {
      const next = [...prev];
      const [removed] = next.splice(index, 1);
      if (removed?.localUri) {
        FileSystem.deleteAsync(removed.localUri, { idempotent: true }).catch(() => {});
      }
      return next;
    });
  }, []);

  const resetForm = useCallback(() => {
    setIssueType("");
    setSummary("");
    setDetails("");
    setExpected("");
    setActual("");
    setName("");
    setEmail("");
    setAttachments([]);
  }, []);

  const showResultAndClose = useCallback(
    (title, message) => {
      Alert.alert(title, message, [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    },
    [navigation]
  );

  const buildPayload = useCallback(
    (reportId, uploadedAttachments) => ({
      reportId,
      issueType,
      summary,
      details,
      expected,
      actual,
      reporterName: name,
      reporterEmail: email,
      context,
      appVersion,
      platform: Platform.OS,
      platformVersion: Platform.Version,
      createdAt: new Date().toISOString(),
      attachments: uploadedAttachments || [],
    }),
    [issueType, summary, details, expected, actual, name, email, context, appVersion]
  );

  const uploadAttachments = useCallback(async (reportId, items) => {
    if (!items.length) return [];
    console.log(`[report] Preparing ${items.length} upload(s) for ${reportId}`);
    const res = await fetch(`${reportBaseUrl}/reports/uploads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reportId,
        files: items.map((item) => ({
          name: item.name,
          contentType: item.contentType,
          size: item.size || 0,
        })),
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[report] Upload prep failed:", res.status, text);
      throw new Error(`Upload prep failed (${res.status}). ${text || ""}`.trim());
    }
    const data = await res.json();
    const uploads = data.uploads || [];
    for (let i = 0; i < uploads.length; i += 1) {
      const upload = uploads[i];
      const attachment = items[i];
      console.log(`[report] Uploading ${attachment.name} to S3`);
      await FileSystem.uploadAsync(upload.uploadUrl, attachment.localUri, {
        httpMethod: "PUT",
        headers: { "Content-Type": upload.contentType || attachment.contentType },
        uploadType: FileSystem.FileSystemUploadType.BINARY_CONTENT,
      });
    }
    return uploads.map((upload, index) => ({
      key: upload.key,
      name: upload.name || items[index].name,
      contentType: upload.contentType || items[index].contentType,
      size: items[index].size || 0,
      kind: items[index].kind,
    }));
  }, []);

  const submitPayload = useCallback(async (payload) => {
    console.log(`[report] Submitting report ${payload.reportId}`);
    const res = await fetch(`${reportBaseUrl}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[report] Report submit failed:", res.status, text);
      throw new Error(`Report submit failed (${res.status}). ${text || ""}`.trim());
    }
  }, []);

  const sendReport = useCallback(
    async ({ reportId, payload, attachments: queuedAttachments }) => {
      const uploaded = await uploadAttachments(reportId, queuedAttachments || []);
      const finalPayload = {
        ...payload,
        reportId,
        attachments: uploaded,
      };
      await submitPayload(finalPayload);
      return queuedAttachments || [];
    },
    [submitPayload, uploadAttachments]
  );

  const flushQueue = useCallback(async () => {
    if (!reportBaseUrl) return;
    const queue = await getQueuedReports();
    if (!queue.length) return;
    const remaining = [];
    let sentCount = 0;
    for (const queued of queue) {
      try {
        const attachmentsToDelete = await sendReport(queued);
        attachmentsToDelete.forEach((file) => {
          if (file.localUri) {
            FileSystem.deleteAsync(file.localUri, { idempotent: true }).catch(() => {});
          }
        });
        sentCount += 1;
      } catch (err) {
        remaining.push(queued);
      }
    }
    await replaceQueuedReports(remaining);
    if (sentCount > 0) {
      setStatus({ type: "success", message: `Sent ${sentCount} queued report(s).` });
    }
  }, [sendReport]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      flushQueue();
    });
    return unsubscribe;
  }, [navigation, flushQueue]);

  const handleSubmit = useCallback(async () => {
    if (!reportBaseUrl) {
      Alert.alert("Not configured", "Report service is not configured yet.");
      return;
    }
    if (!issueType) {
      Alert.alert("Missing type", "Please choose a report type.");
      return;
    }
    if (!summary && !details) {
      Alert.alert("Missing details", "Please add a summary or details.");
      return;
    }

    setSubmitting(true);
    const reportId = `rep-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const payload = buildPayload(reportId, []);
    const queuedItem = { reportId, payload, attachments };

    try {
      const attachmentsToDelete = await sendReport(queuedItem);
      attachmentsToDelete.forEach((file) => {
        if (file.localUri) {
          FileSystem.deleteAsync(file.localUri, { idempotent: true }).catch(() => {});
        }
      });
      setErrorDetail("");
      resetForm();
      setStatus({ type: "success", message: "Report sent. Thank you!" });
      showResultAndClose("Report submitted", "Thank you for the report.");
    } catch (err) {
      console.error("[report] Send failed, queueing:", err?.message || err);
      await enqueueReport(queuedItem);
      setErrorDetail(err?.message || "Unknown error");
      resetForm();
      setStatus({
        type: "info",
        message: "Report queued. It will be sent when online.",
      });
      showResultAndClose(
        "Report queued",
        "We will send your report when the device is online."
      );
    } finally {
      setSubmitting(false);
    }
  }, [
    attachments,
    buildPayload,
    issueType,
    details,
    summary,
    sendReport,
    resetForm,
    showResultAndClose,
  ]);

  return (
    <SettingsScaffold title="Report Issue" onBack={() => navigation.goBack()}>
      <SettingsSection title="Report Type">
        <View style={styles.sectionBody}>
          <SegmentedControl
            value={issueType}
            onChange={setIssueType}
            options={ISSUE_TYPES}
          />
        </View>
      </SettingsSection>

      <SettingsSection title="Context">
        {contextRows.length ? (
          contextRows.map((item) => (
            <SettingsRow key={item.label} title={item.label} subtitle={item.value} />
          ))
        ) : (
          <View style={styles.sectionBody}>
            <Text style={styles.helperText}>No context attached.</Text>
          </View>
        )}
        <View style={styles.contextFooter}>
          <Text style={styles.helperText}>App version {appVersion}</Text>
          <Text style={styles.helperText}>
            {Platform.OS} {String(Platform.Version)}
          </Text>
        </View>
      </SettingsSection>

      <SettingsSection title="Contact">
        <View style={styles.sectionBody}>
          <ReportField
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Optional"
          />
          <ReportField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Optional"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </SettingsSection>

      <SettingsSection title="Details">
        <View style={styles.sectionBody}>
          <ReportField
            label="Summary"
            value={summary}
            onChangeText={setSummary}
            placeholder="Short summary"
          />
          <ReportField
            label="Details"
            value={details}
            onChangeText={setDetails}
            placeholder="Describe what happened or what should change"
            multiline
          />
          <ReportField
            label="Expected Text/Behavior"
            value={expected}
            onChangeText={setExpected}
            placeholder="Optional"
          />
          <ReportField
            label="Actual Text/Behavior"
            value={actual}
            onChangeText={setActual}
            placeholder="Optional"
          />
        </View>
      </SettingsSection>

      <SettingsSection
        title="Attachments"
        subtitle="Images, videos under 2 minutes, or text files"
      >
        <View style={styles.sectionBody}>
          <View style={styles.attachmentActions}>
            <Pressable
              accessibilityRole="button"
              onPress={handlePickMedia}
              style={({ pressed }) => [
                styles.attachmentButton,
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name="image-outline" size={18} color={settingsPalette.primary} />
              <Text style={styles.attachmentButtonText}>Image/Video</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={handlePickDocument}
              style={({ pressed }) => [
                styles.attachmentButton,
                pressed && styles.pressed,
              ]}
            >
              <Ionicons
                name="document-text-outline"
                size={18}
                color={settingsPalette.primary}
              />
              <Text style={styles.attachmentButtonText}>Text File</Text>
            </Pressable>
          </View>
          {attachments.length ? (
            <View style={styles.attachmentList}>
              {attachments.map((file, index) => (
                <View key={`${file.name}-${index}`} style={styles.attachmentRow}>
                  <Ionicons
                    name={
                      file.kind === "video"
                        ? "videocam-outline"
                        : file.kind === "image"
                          ? "image-outline"
                          : "document-text-outline"
                    }
                    size={18}
                    color={settingsPalette.primary}
                  />
                  <View style={styles.attachmentTextWrap}>
                    <Text style={styles.attachmentName} numberOfLines={1}>
                      {file.name}
                    </Text>
                    <Text style={styles.attachmentSize}>{formatBytes(file.size)}</Text>
                  </View>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Remove ${file.name}`}
                    onPress={() => removeAttachment(index)}
                    style={({ pressed }) => [
                      styles.removeButton,
                      pressed && styles.pressed,
                    ]}
                  >
                    <Ionicons name="close" size={18} color={settingsPalette.primary} />
                  </Pressable>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </SettingsSection>

      {status?.message ? (
        <View
          style={[
            styles.statusCard,
            status.type === "success" && styles.statusSuccess,
            status.type === "info" && styles.statusInfo,
          ]}
        >
          <Text style={styles.statusText}>{status.message}</Text>
        </View>
      ) : null}
      {errorDetail ? (
        <View style={[styles.statusCard, styles.statusError]}>
          <Text style={styles.statusText}>{errorDetail}</Text>
        </View>
      ) : null}

      <PrimaryActionButton
        icon="send-outline"
        label={submitting ? "Sending..." : "Submit Report"}
        onPress={handleSubmit}
        disabled={submitting}
      />
    </SettingsScaffold>
  );
};

const styles = StyleSheet.create({
  sectionBody: {
    padding: 14,
    gap: 12,
  },
  field: {
    gap: 6,
  },
  fieldLabel: {
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  input: {
    minHeight: 46,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
    color: settingsPalette.text,
    fontSize: 15,
    fontWeight: "700",
  },
  textArea: {
    minHeight: 112,
    lineHeight: 21,
  },
  contextFooter: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  helperText: {
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "600",
  },
  attachmentActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  attachmentButton: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueSoft,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  attachmentButtonText: {
    color: settingsPalette.primary,
    fontSize: 14,
    fontWeight: "800",
  },
  attachmentList: {
    gap: 8,
  },
  attachmentRow: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  attachmentTextWrap: {
    flex: 1,
    minWidth: 0,
  },
  attachmentName: {
    color: settingsPalette.text,
    fontSize: 14,
    fontWeight: "800",
  },
  attachmentSize: {
    marginTop: 2,
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "600",
  },
  removeButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
  },
  statusCard: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  statusSuccess: {
    backgroundColor: "#E8F7ED",
    borderColor: "#A8D8B8",
  },
  statusInfo: {
    backgroundColor: settingsPalette.blueSoft,
    borderColor: settingsPalette.border,
  },
  statusError: {
    backgroundColor: "#FDECEC",
    borderColor: "#F3B5B5",
  },
  statusText: {
    color: settingsPalette.text,
    fontSize: 14,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default ReportIssueScreen;
