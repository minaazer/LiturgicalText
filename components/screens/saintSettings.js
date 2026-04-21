import React, { useContext, useMemo, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SettingsContext from "../../settings/settingsContext";
import {
  SegmentedControl,
  SettingsScaffold,
  SettingsSection,
  settingsPalette,
} from "../reusableComponents/settingsUI";

const saintSettingTypes = [
  { key: "doxology", label: "Doxology" },
  { key: "verseOfCymbals", label: "Verse of Cymbals" },
  { key: "intercession", label: "Intercession" },
  { key: "actsResponse", label: "Acts Response" },
  { key: "gospelResponse", label: "Gospel Response" },
  { key: "distributionPraise", label: "Distribution Praise" },
];

const typeOrder = [
  "Heavenly",
  "Apostle",
  "Martyr",
  "Female Martyr",
  "Patriarch",
  "Saint",
];

const heavenlyOrder = [
  "Archangel Michael",
  "Archangel Gabriel",
  "Archangel Raphael",
  "Archangel Suriel",
  "The Four Incorporeal Creatures",
  "St. John The Baptist",
  "The Twenty Four Presbyters",
];

const normalizeName = (value) => (value || "").toLowerCase();

const SaintSettingsScreen = () => {
  const [settings, , , , , , , setSaintSettingVisibility] =
    useContext(SettingsContext);
  const navigation = useNavigation();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const saintSettings = settings.saintSettings || [];

  const [sortMode, setSortMode] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSaintName, setActiveSaintName] = useState(null);

  const sortedSaintSettings = useMemo(() => {
    const saints = [...saintSettings];
    if (sortMode === "name") {
      saints.sort((a, b) => a.saintName.localeCompare(b.saintName));
    }
    return saints;
  }, [saintSettings, sortMode]);

  const visibleSaintSettings = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return sortedSaintSettings
      .filter((item) => item.saintName.toLowerCase().includes(query))
      .filter((saint) =>
        saintSettingTypes.some(
          (settingType) => typeof saint?.[settingType.key] === "boolean"
        )
      );
  }, [searchQuery, sortedSaintSettings]);

  const groupedSaintSettings = useMemo(() => {
    if (sortMode === "name") {
      return [
        {
          typeLabel: "All Saints",
          saints: visibleSaintSettings
            .slice()
            .sort((a, b) => a.saintName.localeCompare(b.saintName)),
        },
      ];
    }

    const typeOrderMap = new Map(typeOrder.map((label, index) => [label, index]));
    const heavenlyOrderMap = new Map(
      heavenlyOrder.map((name, index) => [normalizeName(name), index])
    );
    const groups = new Map();

    visibleSaintSettings.forEach((saint) => {
      const typeLabel = Array.isArray(saint.type)
        ? saint.type.find((type) => typeOrderMap.has(type))
        : null;
      if (!typeLabel) return;
      if (!groups.has(typeLabel)) groups.set(typeLabel, []);
      groups.get(typeLabel).push(saint);
    });

    return Array.from(groups.entries())
      .sort(
        ([a], [b]) =>
          (typeOrderMap.get(a) ?? Number.MAX_SAFE_INTEGER) -
          (typeOrderMap.get(b) ?? Number.MAX_SAFE_INTEGER)
      )
      .map(([typeLabel, saints]) => ({
        typeLabel,
        saints: saints.slice().sort((a, b) => {
          if (typeLabel === "Heavenly") {
            const aRank =
              heavenlyOrderMap.get(normalizeName(a.saintName)) ??
              Number.MAX_SAFE_INTEGER;
            const bRank =
              heavenlyOrderMap.get(normalizeName(b.saintName)) ??
              Number.MAX_SAFE_INTEGER;
            if (aRank !== bRank) return aRank - bRank;
          }
          return a.saintName.localeCompare(b.saintName);
        }),
      }));
  }, [sortMode, visibleSaintSettings]);

  const columnCount = Math.max(1, Math.floor(windowWidth / 280));
  const cardWidth = columnCount > 1 ? `${Math.floor(100 / columnCount)}%` : "100%";
  const activeSaint = useMemo(
    () => visibleSaintSettings.find((saint) => saint.saintName === activeSaintName),
    [activeSaintName, visibleSaintSettings]
  );

  const getEnabledLabels = (saint) =>
    saintSettingTypes
      .filter(
        (settingType) =>
          typeof saint?.[settingType.key] === "boolean" &&
          saint[settingType.key] === true
      )
      .map((settingType) => settingType.label);

  const closeSaintModal = () => setActiveSaintName(null);

  return (
    <SettingsScaffold
      title="Saint Settings"
      onBack={() => navigation.goBack()}
    >
      <View style={styles.toolbar}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={settingsPalette.muted} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Saints"
            placeholderTextColor={settingsPalette.muted}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCorrect={false}
            clearButtonMode="while-editing"
          />
          {searchQuery ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              onPress={() => setSearchQuery("")}
              style={({ pressed }) => [styles.clearButton, pressed && styles.pressed]}
            >
              <Ionicons
                name="close-circle"
                size={18}
                color={settingsPalette.muted}
              />
            </Pressable>
          ) : null}
        </View>
        <SegmentedControl
          compact
          value={sortMode}
          onChange={setSortMode}
          options={[
            { label: "Grouped", value: "default", icon: "layers-outline" },
            { label: "A-Z", value: "name", icon: "text-outline" },
          ]}
        />
      </View>

      {groupedSaintSettings.length ? (
        groupedSaintSettings.map(({ typeLabel, saints }) => (
          <SettingsSection
            key={typeLabel}
            title={typeLabel}
            summary={`${saints.length}`}
          >
            <View style={styles.cardGrid}>
              {saints.map((saint) => {
                const enabledLabels = getEnabledLabels(saint);
                return (
                  <Pressable
                    key={saint.saintName}
                    accessibilityRole="button"
                    onPress={() => setActiveSaintName(saint.saintName)}
                    style={({ pressed }) => [
                      styles.cardShell,
                      { width: cardWidth },
                      pressed && styles.pressed,
                    ]}
                  >
                      <View style={styles.saintCard}>
                        <View style={styles.cardTop}>
                          <Text style={styles.saintName}>{saint.saintName}</Text>
                          <Ionicons
                          name="chevron-forward"
                          size={18}
                          color={settingsPalette.muted}
                        />
                        </View>
                        {enabledLabels.length ? (
                          <Text style={styles.enabledSummary} numberOfLines={1}>
                            {enabledLabels.join(", ")}
                          </Text>
                        ) : (
                          <Text style={styles.emptyEnabled}>No active prayers</Text>
                        )}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </SettingsSection>
        ))
      ) : (
        <View style={styles.emptyState}>
          <Ionicons
            name="search-outline"
            size={24}
            color={settingsPalette.primary}
          />
          <Text style={styles.emptyStateTitle}>No saints found</Text>
          <Text style={styles.emptyStateText}>
            Try a different spelling or clear the search.
          </Text>
        </View>
      )}

      <Modal
        transparent
        visible={!!activeSaint}
        animationType="fade"
        onRequestClose={closeSaintModal}
      >
        <View style={styles.modalOverlay}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close saint settings"
            onPress={closeSaintModal}
            style={StyleSheet.absoluteFill}
          />
          <View
            style={[
              styles.modalCard,
              {
                width: Math.min(windowWidth - 28, 460),
                maxHeight: Math.min(windowHeight - 48, 620),
              },
            ]}
          >
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleBlock}>
                <Text style={styles.modalEyebrow}>Saint Settings</Text>
                <Text style={styles.modalTitle}>
                  {activeSaint?.saintName || ""}
                </Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close"
                onPress={closeSaintModal}
                style={({ pressed }) => [
                  styles.modalCloseButton,
                  pressed && styles.pressed,
                ]}
              >
                <Ionicons name="close" size={22} color={settingsPalette.primary} />
              </Pressable>
            </View>
            <View style={styles.modalList}>
              {activeSaint
                ? saintSettingTypes.map((settingType) => {
                    const settingValue = activeSaint[settingType.key];
                    if (typeof settingValue !== "boolean") return null;
                    return (
                      <View
                        key={`${activeSaint.saintName}-${settingType.key}`}
                        style={styles.modalRow}
                      >
                        <Text style={styles.modalRowText}>{settingType.label}</Text>
                        <Switch
                          value={settingValue}
                          onValueChange={(isChecked) =>
                            setSaintSettingVisibility(
                              activeSaint.saintName,
                              settingType.key,
                              isChecked
                            )
                          }
                          trackColor={{
                            false: settingsPalette.disabled,
                            true: settingsPalette.accentSoft,
                          }}
                          thumbColor={
                            settingValue ? settingsPalette.accent : "#FFFFFF"
                          }
                          ios_backgroundColor={settingsPalette.disabled}
                        />
                      </View>
                    );
                  })
                : null}
            </View>
          </View>
        </View>
      </Modal>
    </SettingsScaffold>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    gap: 10,
  },
  searchBox: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  searchInput: {
    flex: 1,
    minWidth: 0,
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "700",
    paddingVertical: 0,
  },
  clearButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 6,
  },
  cardShell: {
    padding: 4,
  },
  saintCard: {
    minHeight: 74,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  saintName: {
    flex: 1,
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 20,
  },
  enabledSummary: {
    marginTop: 5,
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "700",
  },
  emptyEnabled: {
    marginTop: 5,
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "600",
  },
  emptyState: {
    alignItems: "center",
    gap: 6,
    padding: 22,
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  emptyStateTitle: {
    color: settingsPalette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  emptyStateText: {
    color: settingsPalette.muted,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    backgroundColor: "rgba(16, 42, 67, 0.34)",
  },
  modalCard: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    backgroundColor: settingsPalette.blueWash,
    borderBottomWidth: 1,
    borderBottomColor: settingsPalette.border,
  },
  modalTitleBlock: {
    flex: 1,
    minWidth: 0,
  },
  modalEyebrow: {
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  modalTitle: {
    marginTop: 2,
    color: settingsPalette.text,
    fontSize: 18,
    fontWeight: "800",
  },
  modalCloseButton: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: settingsPalette.blueSoft,
  },
  modalList: {
    padding: 8,
  },
  modalRow: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: settingsPalette.border,
  },
  modalRowText: {
    flex: 1,
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default SaintSettingsScreen;
