/* global __DEV__ */
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SettingsContext from "../../settings/settingsContext";
import app from "../../app.json";
import {
  InfoCard,
  SettingsRow,
  SettingsScaffold,
  SettingsSection,
  ToggleRow,
  settingsPalette,
} from "../reusableComponents/settingsUI";

const holyWeekSources = [
  {
    label: "Commentary",
    value: "دلال اسبوع الآلام وقرارات المجمع المقدس",
  },
  {
    label: "Coptic Text",
    value: "Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ",
  },
  { label: "Arabic Biblical Readings", value: "Smith Van Dyke" },
  { label: "English Biblical Readings", value: "New King James Version" },
  {
    label: "Homilies",
    value: "Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ",
  },
  {
    label: "Expositions",
    value: "Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ",
  },
];

const resources = [
  { label: "tasbeha.org", value: "https://tasbeha.org/" },
  { label: "st-takla.org", value: "https://st-takla.org/" },
  { label: "Coptic Reader APP", value: "SUS" },
];

const AboutScreen = () => {
  const [settings, , , , toggleDeveloperMode, , , , setForceLocalJson] =
    useContext(SettingsContext);
  const navigation = useNavigation();
  const developerMode = settings.developerMode;
  const forceLocalJson = settings.forceLocalJson;
  const [tapCount, setTapCount] = useState(0);
  const tapTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    };
  }, []);

  const resetTapCount = () => {
    setTapCount(0);
    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
      tapTimeoutRef.current = null;
    }
  };

  const handleVersionTap = () => {
    if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);

    const nextTapCount = tapCount + 1;
    setTapCount(nextTapCount);
    tapTimeoutRef.current = setTimeout(resetTapCount, 10000);

    if (nextTapCount === 10) {
      const newDeveloperMode = !developerMode;
      toggleDeveloperMode(newDeveloperMode);
      Alert.alert(
        "Developer Mode",
        newDeveloperMode ? "Developer mode enabled" : "Developer mode disabled"
      );
      resetTapCount();
    }
  };

  const handleForceLocalJsonToggle = () => {
    const nextValue = !forceLocalJson;
    setForceLocalJson(nextValue);
    Alert.alert(
      "Local JSON Mode",
      nextValue
        ? "Using local bundled JSON files. Cached online files are ignored."
        : "Using cached online JSON files."
    );
  };

  const openResource = (value) => {
    if (!value.startsWith("http")) return;
    Linking.openURL(value);
  };

  return (
    <SettingsScaffold title="About" onBack={() => navigation.goBack()}>
      <InfoCard
        icon="book-outline"
        title="Liturgical Books"
        value={`Version ${app.expo.version}`}
        detail="St. Mary Coptic Orthodox Church"
        onPress={handleVersionTap}
      />

      <SettingsSection title="Application">
        <View style={styles.contactCard}>
          <View style={styles.contactHeader}>
            <View style={styles.contactIcon}>
              <Ionicons
                name="business-outline"
                size={19}
                color={settingsPalette.primary}
              />
            </View>
            <View style={styles.contactTitleBlock}>
              <Text style={styles.contactLabel}>Developed by</Text>
              <Text style={styles.contactTitle}>
                St. Mary Coptic Orthodox Church
              </Text>
            </View>
          </View>
          <View style={styles.contactDetailBlock}>
            <Ionicons
              name="location-outline"
              size={17}
              color={settingsPalette.muted}
            />
            <Text style={styles.contactDetail}>
              433 Riva Ave.{"\n"}East Brunswick, NJ 08816
            </Text>
          </View>
          <View style={styles.contactDetailBlock}>
            <Ionicons
              name="mail-outline"
              size={17}
              color={settingsPalette.muted}
            />
            <Pressable
              accessibilityRole="link"
              onPress={() =>
                Linking.openURL("mailto:LiturgicalBooks@saint-mary.net")
              }
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Text style={styles.emailText}>LiturgicalBooks@saint-mary.net</Text>
            </Pressable>
          </View>
        </View>
      </SettingsSection>

      <SettingsSection title="About This App">
        <View style={styles.copyBlock}>
          <Text style={styles.paragraph}>
            Liturgical Books is a mobile application supported on Android and iOS
            devices.
          </Text>
          <Text style={styles.paragraph}>
            It is developed and maintained by St. Mary Coptic Orthodox Church in
            East Brunswick, NJ with the blessing of H.G. Bishop Gabriel - New
            Jersey Papal Exarch.
          </Text>
        </View>
      </SettingsSection>

      {developerMode ? (
        <SettingsSection title="Developer">
          <SettingsRow
            icon="code-slash-outline"
            title="App Environment"
            subtitle={__DEV__ ? "Development" : "Production"}
          />
          <SettingsRow
            icon="phone-portrait-outline"
            title="Platform"
            subtitle={Platform.OS}
          />
          <ToggleRow
            icon="file-tray-full-outline"
            title="Local JSON"
            subtitle={
              forceLocalJson
                ? "Using bundled JSON files"
                : "Using cached online JSON files"
            }
            value={!!forceLocalJson}
            onValueChange={handleForceLocalJsonToggle}
          />
        </SettingsSection>
      ) : null}

      <SettingsSection title="Holy Pascha Week Sources">
        <View style={styles.sourceList}>
          {holyWeekSources.map((source) => (
            <View key={source.label} style={styles.sourceItem}>
              <Text style={styles.sourceLabel}>{source.label}</Text>
              <Text style={styles.sourceValue}>{source.value}</Text>
            </View>
          ))}
        </View>
      </SettingsSection>

      <SettingsSection title="Other Resources Used">
        <View style={styles.sourceList}>
          {resources.map((resource) => {
            const isLink = resource.value.startsWith("http");
            return (
              <Pressable
                key={resource.label}
                accessibilityRole={isLink ? "link" : "text"}
                disabled={!isLink}
                onPress={() => openResource(resource.value)}
                style={({ pressed }) => [
                  styles.resourceItem,
                  pressed && styles.pressed,
                ]}
              >
                <View style={styles.resourceText}>
                  <Text style={styles.sourceLabel}>{resource.label}</Text>
                  <Text style={styles.sourceValue}>{resource.value}</Text>
                </View>
                {isLink ? (
                  <Ionicons
                    name="open-outline"
                    size={18}
                    color={settingsPalette.primary}
                  />
                ) : null}
              </Pressable>
            );
          })}
        </View>
      </SettingsSection>
    </SettingsScaffold>
  );
};

const styles = StyleSheet.create({
  copyBlock: {
    padding: 14,
    gap: 10,
  },
  contactCard: {
    padding: 14,
    gap: 12,
  },
  contactHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contactIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  contactTitleBlock: {
    flex: 1,
    minWidth: 0,
  },
  contactLabel: {
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  contactTitle: {
    marginTop: 2,
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "800",
  },
  contactDetailBlock: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9,
    paddingLeft: 2,
  },
  contactDetail: {
    flex: 1,
    color: settingsPalette.muted,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
  emailText: {
    color: settingsPalette.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  paragraph: {
    color: settingsPalette.text,
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 22,
  },
  sourceList: {
    padding: 10,
    gap: 8,
  },
  sourceItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  resourceItem: {
    minHeight: 62,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  resourceText: {
    flex: 1,
    minWidth: 0,
  },
  sourceLabel: {
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  sourceValue: {
    marginTop: 3,
    color: settingsPalette.text,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default AboutScreen;
