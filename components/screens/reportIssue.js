import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Constants from "expo-constants";
import { presentationStyles } from "../css/presentationStyles";
import {
  enqueueReport,
  getQueuedReports,
  replaceQueuedReports,
} from "../functions/reportQueue";
import app from "../../app.json";

const ISSUE_TYPES = [
  "Bug",
  "Text Correction",
  "Rite Correction",
  "Suggestion",
];

const MAX_VIDEO_MS = 2 * 60 * 1000;
const MAX_VIDEO_BYTES = 40 * 1024 * 1024;
const MAX_OTHER_BYTES = 10 * 1024 * 1024;
const ATTACHMENTS_DIR = `${FileSystem.documentDirectory}report-attachments/`;

const reportApiBaseUrl =
  Constants.expoConfig?.extra?.reportApiBaseUrl || "";
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

  const contextLabel = useMemo(() => {
    const parts = [];
    if (context?.screenName) parts.push(`Screen: ${context.screenName}`);
    if (context?.tableTitle) parts.push(`Title: ${context.tableTitle}`);
    return parts.length ? parts.join(" | ") : "No context attached.";
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
    <View style={presentationStyles.settingsScreen}>
      <ScrollView
        contentContainerStyle={presentationStyles.settingsInnerContainer}
        style={presentationStyles.scrollView}
      >
        <View style={presentationStyles.titleContainer}>
          <TouchableOpacity
            style={presentationStyles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={presentationStyles.buttonText}>Back</Text>
          </TouchableOpacity>
          <Text style={presentationStyles.screenTitle}>Report Issue</Text>
        </View>

        <Text style={presentationStyles.reportContextText}>{contextLabel}</Text>
        <Text style={presentationStyles.reportHelperText}>
          Attachments: images, videos (max 2 min / 40 MB), or text files (max 10 MB).
        </Text>

        <View style={presentationStyles.reportSection}>
          <Text style={presentationStyles.reportLabel}>Type</Text>
          <View style={presentationStyles.reportTypeRow}>
            {ISSUE_TYPES.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  presentationStyles.reportTypeButton,
                  issueType === type && presentationStyles.reportTypeButtonActive,
                ]}
                onPress={() => setIssueType(type)}
              >
                <Text
                  style={[
                    presentationStyles.reportTypeButtonText,
                    issueType === type &&
                      presentationStyles.reportTypeButtonTextActive,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={presentationStyles.reportSection}>
          <Text style={presentationStyles.reportLabel}>Name (optional)</Text>
          <TextInput
            style={presentationStyles.reportInput}
            value={name}
            onChangeText={setName}
            placeholder="Your name"
          />
          <Text style={presentationStyles.reportLabel}>Email (optional)</Text>
          <TextInput
            style={presentationStyles.reportInput}
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={presentationStyles.reportSection}>
          <Text style={presentationStyles.reportLabel}>Summary</Text>
          <TextInput
            style={presentationStyles.reportInput}
            value={summary}
            onChangeText={setSummary}
            placeholder="Short summary"
          />
          <Text style={presentationStyles.reportLabel}>Details</Text>
          <TextInput
            style={presentationStyles.reportTextArea}
            value={details}
            onChangeText={setDetails}
            placeholder="Describe what happened or what should change"
            multiline
          />
          <Text style={presentationStyles.reportLabel}>Expected Text/Behavior (optional)</Text>
          <TextInput
            style={presentationStyles.reportInput}
            value={expected}
            onChangeText={setExpected}
            placeholder="What you expected"
          />
          <Text style={presentationStyles.reportLabel}>Actual Text/Behavior (optional)</Text>
          <TextInput
            style={presentationStyles.reportInput}
            value={actual}
            onChangeText={setActual}
            placeholder="What actually happened"
          />
        </View>

        <View style={presentationStyles.reportSection}>
          <Text style={presentationStyles.reportLabel}>Attachments</Text>
          <View style={presentationStyles.reportActionRow}>
            <TouchableOpacity
              style={presentationStyles.reportButton}
              onPress={handlePickMedia}
            >
              <Text style={presentationStyles.reportButtonText}>Add Image/Video of Issue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={presentationStyles.reportButtonSecondary}
              onPress={handlePickDocument}
            >
              <Text style={presentationStyles.reportButtonText}>Add Text File</Text>
            </TouchableOpacity>
          </View>
          {attachments.map((file, index) => (
            <View key={`${file.name}-${index}`} style={presentationStyles.attachmentRow}>
              <Text style={presentationStyles.attachmentText}>
                {file.name} ({formatBytes(file.size)})
              </Text>
              <TouchableOpacity onPress={() => removeAttachment(index)}>
                <Text style={presentationStyles.attachmentRemove}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {status?.message && (
          <Text
            style={[
              presentationStyles.reportStatusText,
              status.type === "success" && presentationStyles.reportStatusSuccess,
              status.type === "info" && presentationStyles.reportStatusInfo,
            ]}
          >
            {status.message}
          </Text>
        )}
        {errorDetail ? (
          <Text style={presentationStyles.reportStatusError}>{errorDetail}</Text>
        ) : null}

        <TouchableOpacity
          style={presentationStyles.reportSubmitButton}
          onPress={handleSubmit}
          disabled={submitting}
        >
          <Text style={presentationStyles.reportSubmitButtonText}>
            {submitting ? "Sending..." : "Submit Report"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ReportIssueScreen;
