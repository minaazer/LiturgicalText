import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingsContext from "../../settings/settingsContext";
import { settingsPalette } from "./settingsUI";

const GoLive = ({ onOpenCalendar }) => {
  const [settings, , setCurrentDate] = useContext(SettingsContext);
  const currentDateType =
    settings.currentDate && settings.currentDate.type
      ? settings.currentDate.type
      : "live";

  const handleSetLiveDate = () => {
    setCurrentDate(new Date(), "live");
  };

  const currentDateValue =
    settings.selectedDateProperties && settings.selectedDateProperties.adjustedDate
      ? settings.selectedDateProperties.adjustedDate
      : new Date();
  const currentDate = new Date(currentDateValue);
  const safeDate = Number.isNaN(currentDate.getTime()) ? new Date() : currentDate;
  const copticDate = settings.selectedDateProperties?.copticDate || null;
  const currentSeason = Array.isArray(settings.selectedDateProperties?.copticSeason)
    ? settings.selectedDateProperties.copticSeason
    : [];
  const saintFeasts = Array.isArray(settings.selectedDateProperties?.saintFeast)
    ? settings.selectedDateProperties.saintFeast
    : [];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Open calendar"
      onPress={onOpenCalendar}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.header}>
        <Ionicons name="calendar-outline" size={18} color={settingsPalette.primary} />
        <Text style={styles.headerText}>Calendar</Text>
        <Ionicons
          name="chevron-forward"
          size={16}
          color={settingsPalette.muted}
          style={styles.headerChevron}
        />
      </View>
      <Text style={styles.gregorianText}>
        {new Intl.DateTimeFormat("en-US", {
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }).format(safeDate)}
      </Text>
      <Text style={styles.copticText}>
        {copticDate
          ? `${copticDate.copticMonthName} ${copticDate.copticDay}, ${copticDate.copticYear}`
          : "Loading Coptic date..."}
      </Text>
      {currentSeason.length ? (
        <View style={styles.detailGroup}>
          <Text style={styles.detailLabel}>Seasons</Text>
          {currentSeason.map((season) => (
            <View style={styles.detailLine} key={season}>
              <View style={styles.seasonDot} />
              <Text style={styles.detailText} numberOfLines={2}>
                {season}
              </Text>
            </View>
          ))}
        </View>
      ) : null}
      {saintFeasts.length ? (
        <View style={styles.detailGroup}>
          <Text style={styles.detailLabel}>Saint Feasts</Text>
          {saintFeasts.map((feast) => (
            <View style={styles.detailLine} key={feast.feast}>
              <View style={styles.feastDot} />
              <Text style={styles.detailText} numberOfLines={2}>
                {feast.feast}
              </Text>
            </View>
          ))}
        </View>
      ) : null}

      <Pressable
        accessibilityRole="button"
        onPress={handleSetLiveDate}
        disabled={currentDateType === "live"}
        onStartShouldSetResponder={() => true}
        style={({ pressed }) => [
          styles.button,
          currentDateType === "live" && styles.buttonDisabled,
          pressed && currentDateType !== "live" && styles.pressed,
        ]}
      >
        <Ionicons
          name={currentDateType === "live" ? "radio-outline" : "refresh-outline"}
          size={16}
          color="#FFFFFF"
        />
        <Text style={styles.buttonText}>
          {currentDateType === "live" ? "Live Calendar" : "Go Live"}
        </Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 6,
    marginTop: 4,
    padding: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  headerText: {
    color: settingsPalette.primary,
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  headerChevron: {
    marginLeft: "auto",
  },
  gregorianText: {
    color: settingsPalette.text,
    fontSize: 15,
    fontWeight: "800",
  },
  copticText: {
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "700",
  },
  detailGroup: {
    gap: 4,
    marginTop: 5,
    paddingTop: 7,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: settingsPalette.border,
  },
  detailLabel: {
    color: settingsPalette.primary,
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  detailLine: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 7,
  },
  seasonDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 6,
    backgroundColor: settingsPalette.accent,
  },
  feastDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 6,
    backgroundColor: settingsPalette.primary,
  },
  detailText: {
    flex: 1,
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  button: {
    minHeight: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: settingsPalette.primary,
  },
  buttonDisabled: {
    opacity: 0.55,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default GoLive;
