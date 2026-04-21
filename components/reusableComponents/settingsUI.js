import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const palette = {
  background: "#EEF5FB",
  panel: "#FFFFFF",
  text: "#102A43",
  muted: "#5E7388",
  border: "#D6E3EF",
  primary: "#003060",
  accent: "#C88A12",
  accentSoft: "#FFF3D4",
  blueSoft: "#E3EEF8",
  blueWash: "#F7FAFD",
  disabled: "#C9D6E2",
};

const SettingsScaffold = ({ title, onBack, children }) => (
  <SafeAreaView style={styles.screen} edges={["left", "right"]}>
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        onPress={onBack}
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
      >
        <Ionicons name="chevron-back" size={24} color={palette.primary} />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSpacer} />
    </View>
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="always"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </SafeAreaView>
);

const InfoCard = ({ icon, title, value, detail, onPress }) => {
  const Container = onPress ? Pressable : View;
  const containerStyle = onPress
    ? ({ pressed }) => [styles.infoCard, pressed && styles.pressed]
    : styles.infoCard;

  return (
    <Container
      accessibilityRole={onPress ? "button" : undefined}
      onPress={onPress}
      style={containerStyle}
    >
      {icon ? (
        <View style={styles.infoIcon}>
          <Ionicons name={icon} size={20} color={palette.accent} />
        </View>
      ) : null}
      <View style={styles.infoText}>
        {title ? <Text style={styles.infoTitle}>{title}</Text> : null}
        {value ? <Text style={styles.infoValue}>{value}</Text> : null}
        {detail ? <Text style={styles.infoDetail}>{detail}</Text> : null}
      </View>
    </Container>
  );
};

const SettingsSection = ({
  title,
  subtitle,
  children,
  collapsible = false,
  collapsed = false,
  onToggle,
  summary,
}) => (
  <View style={styles.section}>
    <Pressable
      disabled={!collapsible}
      onPress={onToggle}
      style={({ pressed }) => [
        styles.sectionHeader,
        collapsible && styles.sectionHeaderPressable,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.sectionHeaderText}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
      </View>
      {summary ? (
        <View style={styles.sectionSummaryBadge}>
          <Text style={styles.sectionSummary}>{summary}</Text>
        </View>
      ) : null}
      {collapsible ? (
        <Ionicons
          name={collapsed ? "chevron-down" : "chevron-up"}
          size={20}
          color={palette.primary}
        />
      ) : null}
    </Pressable>
    {!collapsed ? <View style={styles.sectionPanel}>{children}</View> : null}
  </View>
);

const SettingsRow = ({ icon, title, subtitle, children, style, stacked = false }) => (
  <View style={[styles.row, stacked && styles.rowStacked, style]}>
    <View style={styles.rowMain}>
      {icon ? (
        <View style={styles.rowIcon}>
          <Ionicons name={icon} size={19} color={palette.primary} />
        </View>
      ) : null}
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>
    </View>
    {children ? (
      <View style={[styles.rowControl, stacked && styles.rowControlStacked]}>
        {children}
      </View>
    ) : null}
  </View>
);

const SegmentedControl = ({ options, value, onChange, compact = false }) => (
  <View style={[styles.segmented, compact && styles.segmentedCompact]}>
    {options.map((option) => {
      const selected = option.value === value;
      return (
        <Pressable
          key={option.value}
          accessibilityRole="button"
          accessibilityState={{ selected }}
          onPress={() => onChange(option.value)}
          style={({ pressed }) => [
            styles.segment,
            selected && styles.segmentSelected,
            pressed && styles.pressed,
          ]}
        >
          {option.icon ? (
            <Ionicons
              name={option.icon}
              size={16}
              color={selected ? "#FFFFFF" : palette.primary}
            />
          ) : null}
          <Text style={[styles.segmentText, selected && styles.segmentTextSelected]}>
            {option.label}
          </Text>
        </Pressable>
      );
    })}
  </View>
);

const ChoiceGrid = ({ children }) => <View style={styles.choiceGrid}>{children}</View>;

const ChoiceChip = ({ label, selected, onPress }) => (
  <Pressable
    accessibilityRole="button"
    accessibilityState={{ selected }}
    onPress={onPress}
    style={({ pressed }) => [
      styles.choiceChip,
      selected && styles.choiceChipSelected,
      pressed && styles.pressed,
    ]}
  >
    <Ionicons
      name={selected ? "checkmark-circle" : "ellipse-outline"}
      size={18}
      color={selected ? palette.primary : palette.muted}
    />
    <Text style={[styles.choiceText, selected && styles.choiceTextSelected]}>
      {label}
    </Text>
  </Pressable>
);

const ToggleRow = ({ icon, title, subtitle, value, onValueChange, stacked }) => (
  <SettingsRow icon={icon} title={title} subtitle={subtitle} stacked={stacked}>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: palette.disabled, true: palette.accentSoft }}
      thumbColor={value ? palette.accent : "#FFFFFF"}
      ios_backgroundColor={palette.disabled}
    />
  </SettingsRow>
);

const PrimaryActionButton = ({ icon, label, onPress, disabled }) => (
  <Pressable
    accessibilityRole="button"
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.primaryButton,
      disabled && styles.primaryButtonDisabled,
      pressed && !disabled && styles.pressed,
    ]}
  >
    {icon ? <Ionicons name={icon} size={18} color="#FFFFFF" /> : null}
    <Text style={styles.primaryButtonText}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.background,
  },
  header: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.border,
    backgroundColor: palette.panel,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "700",
    color: palette.text,
  },
  headerSpacer: {
    width: 44,
  },
  scroll: {
    flex: 1,
  },
  content: {
    width: "100%",
    maxWidth: 920,
    alignSelf: "center",
    padding: 16,
    paddingBottom: 32,
    gap: 14,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    backgroundColor: palette.panel,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.border,
  },
  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.blueSoft,
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 13,
    color: palette.muted,
    fontWeight: "600",
  },
  infoValue: {
    marginTop: 2,
    fontSize: 18,
    color: palette.text,
    fontWeight: "700",
  },
  infoDetail: {
    marginTop: 2,
    fontSize: 14,
    color: palette.muted,
  },
  section: {
    gap: 8,
  },
  sectionHeader: {
    paddingHorizontal: 2,
    minHeight: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionHeaderPressable: {
    borderRadius: 8,
    paddingVertical: 2,
  },
  sectionHeaderText: {
    flex: 1,
    minWidth: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: palette.text,
  },
  sectionSubtitle: {
    marginTop: 2,
    fontSize: 14,
    color: palette.muted,
  },
  sectionSummary: {
    color: palette.primary,
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
  },
  sectionSummaryBadge: {
    maxWidth: "46%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: palette.blueSoft,
    borderWidth: 1,
    borderColor: palette.border,
  },
  sectionPanel: {
    backgroundColor: palette.panel,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.border,
    overflow: "hidden",
  },
  row: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.border,
  },
  rowStacked: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 10,
  },
  rowMain: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.blueSoft,
  },
  rowText: {
    flex: 1,
    minWidth: 0,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.text,
  },
  rowSubtitle: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 18,
    color: palette.muted,
  },
  rowControl: {
    minWidth: 120,
    maxWidth: "48%",
    alignItems: "flex-end",
  },
  rowControlStacked: {
    width: "100%",
    maxWidth: "100%",
    alignItems: "flex-end",
  },
  segmented: {
    flexDirection: "row",
    gap: 6,
    padding: 4,
    borderRadius: 8,
    backgroundColor: palette.blueSoft,
    alignSelf: "flex-start",
  },
  segmentedCompact: {
    width: "auto",
    alignSelf: "flex-end",
  },
  segment: {
    minHeight: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: 7,
  },
  segmentSelected: {
    backgroundColor: palette.primary,
  },
  segmentText: {
    fontSize: 14,
    fontWeight: "700",
    color: palette.primary,
  },
  segmentTextSelected: {
    color: "#FFFFFF",
  },
  choiceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    padding: 14,
  },
  choiceChip: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: palette.blueWash,
  },
  choiceChipSelected: {
    borderColor: palette.accent,
    backgroundColor: palette.accentSoft,
  },
  choiceText: {
    fontSize: 15,
    fontWeight: "600",
    color: palette.text,
  },
  choiceTextSelected: {
    color: palette.primary,
  },
  primaryButton: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: palette.primary,
  },
  primaryButtonDisabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export {
  ChoiceChip,
  ChoiceGrid,
  InfoCard,
  PrimaryActionButton,
  SegmentedControl,
  SettingsRow,
  SettingsScaffold,
  SettingsSection,
  ToggleRow,
  palette as settingsPalette,
};
