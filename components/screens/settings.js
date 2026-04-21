import React, { useContext, useEffect, useState } from "react";
import { Alert, View, useWindowDimensions } from "react-native";
import SettingsContext from "../../settings/settingsContext";
import { useNavigation } from "@react-navigation/native";
import { gregorianToCoptic } from "../functions/copticDate";
import { FontSizePicker, ScreenOrientationPicker } from "../reusableComponents/pickers";
import { refreshJsonCache } from "../functions/jsonCache";
import {
  InfoCard,
  PrimaryActionButton,
  SegmentedControl,
  SettingsRow,
  SettingsScaffold,
  SettingsSection,
  ToggleRow,
} from "../reusableComponents/settingsUI";

const SettingsScreen = () => {
  const [settings, setSettings, , , , , setOrientation] =
    useContext(SettingsContext);
  const navigation = useNavigation();
  const [copticDate, setCopticDate] = useState(null);
  const [cacheRefreshing, setCacheRefreshing] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({
    languages: true,
    onePage: true,
  });
  const { width } = useWindowDimensions();
  const isWide = width >= 760;
  const isCompact = width < 520;

  useEffect(() => {
    const today = new Date();
    setCopticDate(gregorianToCoptic(today));
  }, []);

  const setLanguagesHandler = (value, checked) => {
    setSettings({
      ...settings,
      languages: settings.languages.map((lang, index) =>
        index === value ? { ...lang, checked } : lang
      ),
    });
  };

  const setOnePageHandler = (value, checked) => {
    setSettings({
      ...settings,
      onePage: settings.onePage.map((item, index) =>
        index === value ? { ...item, checked } : item
      ),
    });
  };

  const setPaschalReadingsFullHandler = (checked) => {
    setSettings((prev) => ({
      ...prev,
      paschalReadingsFull: checked,
    }));
  };

  const setDisplayModeHandler = (value) => {
    setSettings((prev) => ({
      ...prev,
      displayMode: value,
    }));
  };

  const handleRefreshCache = async () => {
    if (cacheRefreshing) return;
    setCacheRefreshing(true);
    const remoteBaseUrl = "https://d18kyprs8j73gp.cloudfront.net";
    const warmupPaths = [
      "psalmody/psalis.json",
      "psalmody/psalmody.json",
      "psalmody/theotokias.json",
      "psalmody/seasonalPraises.json",
      "psalmody/doxologies.json",
      "repeatedPrayers/hwRepeatedPrayers.json",
      "repeatedPrayers/annualRepeatedPrayers.json",
      "repeatedPrayers/seasonalRepeatedPrayers.json",
      "repeatedPrayers/repeatedAgpeyaPrayers.json",
      "repeatedPrayers/actsResponses.json",
      "repeatedPrayers/gospelResponses.json",
      "repeatedPrayers/intercessions.json",
      "repeatedPrayers/versesOfCymbals.json",
      "repeatedPrayers/distributionPraises.json",
    ];
    try {
      await refreshJsonCache({ remoteBaseUrl, warmupPaths, forceManifest: true });
      Alert.alert("Content refreshed", "Manifest and cached files have been updated.");
    } catch (err) {
      Alert.alert("Refresh failed", err?.message || "Unable to refresh content.");
    } finally {
      setCacheRefreshing(false);
    }
  };

  const copticDateText = copticDate
    ? `${copticDate.copticMonthName} ${copticDate.copticDay}, ${copticDate.copticYear}`
    : "Loading Coptic date...";
  const toggleSection = (key) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const enabledLanguageLabels =
    settings.languages?.filter((language) => language.checked).map((language) => language.label) ||
    [];
  const enabledOnePageCount =
    settings.onePage?.filter((item) => item.checked).length || 0;

  return (
    <SettingsScaffold title="Settings" onBack={() => navigation.goBack()}>
      <InfoCard
        icon="calendar-outline"
        title="Today in the Coptic calendar"
        value={copticDateText}
        detail="Used for seasonal prayers, readings, and display rules."
      />

      <SettingsSection
        title="Reading"
      >
        <View style={{ flexDirection: isWide ? "row" : "column" }}>
          <SettingsRow
            icon="text-outline"
            title="Text size"
            style={isWide ? { flex: 1 } : null}
          >
            <FontSizePicker setSettings={setSettings} settings={settings} />
          </SettingsRow>
          <SettingsRow
            icon="phone-landscape-outline"
            title="Orientation"
            style={isWide ? { flex: 1 } : null}
          >
            <ScreenOrientationPicker
              setOrientation={setOrientation}
              orientation={settings.orientation}
            />
          </SettingsRow>
        </View>
        <SettingsRow
          icon="albums-outline"
          title="Display mode"
          stacked={isCompact}
        >
          <SegmentedControl
            value={settings.displayMode || "slideshow"}
            onChange={setDisplayModeHandler}
            compact={isCompact}
            options={[
              { label: "Slides", value: "slideshow", icon: "copy-outline" },
              { label: "Scroll", value: "scroll", icon: "swap-vertical-outline" },
            ]}
          />
        </SettingsRow>
      </SettingsSection>

      <SettingsSection
        title="Languages Displayed"
        collapsible
        collapsed={collapsedSections.languages}
        onToggle={() => toggleSection("languages")}
        summary={
          enabledLanguageLabels.length
            ? enabledLanguageLabels.join(", ")
            : "None enabled"
        }
      >
        <View>
          {settings.languages?.map((language, index) => (
            <ToggleRow
              key={language.label || index}
              icon="language-outline"
              title={language.label}
              value={!!language.checked}
              onValueChange={(isChecked) => setLanguagesHandler(index, isChecked)}
            />
          ))}
        </View>
      </SettingsSection>

      <SettingsSection
        title="One Page Preferences"
        collapsible
        collapsed={collapsedSections.onePage}
        onToggle={() => toggleSection("onePage")}
        summary={`${enabledOnePageCount} enabled`}
      >
        <View>
          {settings.onePage?.map((item, index) => (
            <ToggleRow
              key={item.label || index}
              icon="document-text-outline"
              title={item.label}
              value={!!item.checked}
              onValueChange={(isChecked) => setOnePageHandler(index, isChecked)}
            />
          ))}
        </View>
      </SettingsSection>

      <SettingsSection title="Paschal Rites">
        <ToggleRow
          icon="book-outline"
          title="Complete Paschal readings"
          subtitle="Beni Suef Coptic Pascha Katameros"
          value={!!settings.paschalReadingsFull}
          onValueChange={setPaschalReadingsFullHandler}
          stacked={isCompact}
        />
      </SettingsSection>

      <SettingsSection
        title="Content"
      >
        <View style={{ padding: 14 }}>
          <PrimaryActionButton
            icon="refresh-outline"
            label={
              cacheRefreshing
                ? "Refreshing content..."
                : "Refresh Content Manifest and Cache"
            }
            onPress={handleRefreshCache}
            disabled={cacheRefreshing}
          />
        </View>
      </SettingsSection>
    </SettingsScaffold>
  );
};

export default SettingsScreen;
