import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  DatePickerModalContent,
  en,
  registerTranslation,
} from "react-native-paper-dates";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  gregorianToCoptic,
  getCopticSeasons,
  getSelectedDateProperties,
} from "../functions/copticDate";
import SettingsContext from "../../settings/settingsContext";
import {
  SegmentedControl,
  SettingsRow,
  SettingsScaffold,
  SettingsSection,
  settingsPalette,
} from "../reusableComponents/settingsUI";

registerTranslation("en", en);

const CalendarScreen = () => {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const [settings, , setCurrentDate, setDayTransitionTime] =
    useContext(SettingsContext);
  const developerMode = settings.developerMode;
  const currentDate =
    settings.currentDate && settings.currentDate.date
      ? settings.currentDate.date
      : new Date();
  const currentDateType =
    settings.currentDate && settings.currentDate.type
      ? settings.currentDate.type
      : "live";
  const selectedDateProperties = settings.selectedDateProperties;

  const [copticDate, setCopticDate] = useState(null);
  const [copticSeasons, setCopticSeasons] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickerDate, setPickerDate] = useState(currentDate || new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  useEffect(() => {
    if (!settings.dayTransitionTime) {
      setDayTransitionTime("18:00");
    }
  }, [settings.dayTransitionTime, setDayTransitionTime]);

  useEffect(() => {
    if (currentDate) {
      const coptic =
        selectedDateProperties && selectedDateProperties.copticDate
          ? selectedDateProperties.copticDate
          : gregorianToCoptic(currentDate);
      setCopticDate(coptic);
      setCopticSeasons(getCopticSeasons(currentDate.getFullYear()));
      setPickerDate(currentDate);
    }
  }, [currentDate, selectedDateProperties]);

  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = (time24 || "18:00").split(":");
    let period = "AM";
    let hour = parseInt(hours, 10);

    if (hour >= 12) {
      period = "PM";
      if (hour > 12) hour -= 12;
    }
    if (hour === 0) hour = 12;

    return `${String(hour).padStart(2, "0")}:${minutes} ${period}`;
  };

  const formatWithWeekday = (dateObj) => {
    if (!dateObj) return "";
    return dateObj.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatLongDate = (dateObj) => {
    if (!dateObj) return "";
    return dateObj.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleTimeChange = (event, nextTime) => {
    if (event.type === "set" && nextTime) {
      setShowTimePicker(Platform.OS === "ios");
      const hours = nextTime.getHours();
      const minutes = nextTime.getMinutes();
      const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

      setDayTransitionTime(timeString);
      setSelectedTime(nextTime);
    } else {
      setShowTimePicker(false);
    }
  };

  const getTransitionTimeDate = () => {
    const [hours = "18", minutes = "00"] = (
      settings.dayTransitionTime || "18:00"
    ).split(":");
    const transitionDate = new Date();
    transitionDate.setHours(
      Number.parseInt(hours, 10) || 0,
      Number.parseInt(minutes, 10) || 0,
      0,
      0
    );
    return transitionDate;
  };

  const openTimePicker = () => {
    setSelectedTime(getTransitionTimeDate());
    setShowTimePicker(true);
  };

  const commitSelectedDate = (date) => {
    if (!date) return;

    const normalizedDate = new Date(date);
    const commitDate = getCommitDateFromCalendarDate(normalizedDate);

    setPickerDate(commitDate);
    setCurrentDate(commitDate, "custom");
    setShowDatePicker(false);
  };

  const getCommitDateFromCalendarDate = (date) =>
    new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        9,
        0,
        0,
        0
      )
    );

  const handlePickerDateChange = ({ date }) => {
    if (date) setPickerDate(date);
  };

  const handleDateConfirm = ({ date }) => {
    commitSelectedDate(date);
  };

  const handleDateDismiss = () => {
    setShowDatePicker(false);
    setPickerDate(currentDate || new Date());
  };

  const handleSetLiveDate = () => {
    setCurrentDate(new Date(), "live");
  };

  const handleDateModeChange = (mode) => {
    if (mode === "live") {
      handleSetLiveDate();
      return;
    }
    setShowDatePicker(true);
  };

  const formatSeasonDate = (season) => {
    const formatDate = (date) => {
      const d = new Date(date);
      const month = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      const year = d.getUTCFullYear();
      return `${month}/${day}/${year}`;
    };

    if (season.date) return formatDate(season.date);
    if (season.start && season.end) {
      return `${formatDate(season.start)} - ${formatDate(season.end)}`;
    }
    return "";
  };

  const getCopticDate = (season) => {
    if (season.date) {
      const startDate = gregorianToCoptic(new Date(season.date));
      return `${startDate.copticMonthName} ${startDate.copticDay}, ${startDate.copticYear}`;
    }
    if (season.start && season.end) {
      const startDate = gregorianToCoptic(new Date(season.start));
      const endDate = gregorianToCoptic(new Date(season.end));
      return `${startDate.copticMonthName} ${startDate.copticDay}, ${startDate.copticYear} - ${endDate.copticMonthName} ${endDate.copticDay}, ${endDate.copticYear}`;
    }
    return "";
  };

  const copticDateText = copticDate
    ? `${copticDate.copticMonthName} ${copticDate.copticDay}, ${copticDate.copticYear}`
    : "Loading Coptic date...";
  const selectedSeasonValues = Array.isArray(selectedDateProperties?.copticSeason)
    ? selectedDateProperties.copticSeason
    : selectedDateProperties?.copticSeason
      ? [selectedDateProperties.copticSeason]
      : [];
  const compactDatePickerHeight = Math.min(dimensions.height - 32, 680);
  const compactDatePickerWidth = Math.min(dimensions.width - 28, 430);
  const pickerPreview = useMemo(() => {
    const previewDate = pickerDate || currentDate || new Date();
    const commitDate = getCommitDateFromCalendarDate(new Date(previewDate));
    const previewProperties = getSelectedDateProperties(
      commitDate,
      settings.dayTransitionTime || "18:00"
    );
    const previewCoptic = previewProperties?.copticDate;
    const previewSeasons = Array.isArray(previewProperties?.copticSeason)
      ? previewProperties.copticSeason
      : previewProperties?.copticSeason
        ? [previewProperties.copticSeason]
        : [];

    return {
      gregorian: formatLongDate(commitDate),
      coptic: previewCoptic
        ? `${previewCoptic.copticMonthName} ${previewCoptic.copticDay}, ${previewCoptic.copticYear}`
        : "",
      seasons: previewSeasons,
    };
  }, [currentDate, pickerDate, settings.dayTransitionTime]);

  return (
    <SettingsScaffold title="Calendar" onBack={() => navigation.goBack()}>
      <View style={styles.selectedDateCard}>
        <View style={styles.selectedDateHeader}>
          <View style={styles.selectedDateIcon}>
            <Ionicons
              name={currentDateType === "live" ? "radio-outline" : "calendar-outline"}
              size={21}
              color={settingsPalette.primary}
            />
          </View>
          <View style={styles.selectedDateText}>
            <Text style={styles.selectedDateEyebrow}>
              {currentDateType === "live" ? "Live date" : "Selected date"}
            </Text>
            <Text style={styles.selectedDateValue}>{copticDateText}</Text>
            <Text style={styles.selectedDateDetail}>{formatWithWeekday(currentDate)}</Text>
          </View>
        </View>
        <View style={styles.currentSeason}>
          {selectedSeasonValues.length ? (
            <View style={styles.prioritySeasonBlock}>
              <View style={styles.primarySeasonBadge}>
                <View style={styles.primarySeasonTextWrap}>
                  <Text style={styles.primarySeasonLabel}>Current Seasons</Text>
                  <View style={styles.primarySeasonList}>
                    {selectedSeasonValues.map((season) => (
                      <View key={season} style={styles.primarySeasonLine}>
                        <View style={styles.primarySeasonDot} />
                        <Text style={styles.primarySeasonLineText}>{season}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.emptyText}>Please select a date.</Text>
          )}
          {developerMode && selectedDateProperties ? (
            <View style={styles.developerPanel}>
              <Text style={styles.developerText}>
                {selectedDateProperties.adamOrWatos} |{" "}
                {selectedDateProperties.aktonkAki?.english} -{" "}
                {selectedDateProperties.aktonkAki?.coptic} -{" "}
                {selectedDateProperties.aktonkAki?.arabic}
              </Text>
              {selectedDateProperties?.saintFeast?.length ? (
                selectedDateProperties.saintFeast.map((feast, index) => (
                  <Text style={styles.developerText} key={`${feast.feast}-${index}`}>
                    {feast.feast}
                  </Text>
                ))
              ) : (
                <Text style={styles.developerText}>No Saint Feast</Text>
              )}
            </View>
          ) : null}
        </View>
      </View>

      <SettingsSection title="Date Controls">
        <SettingsRow
          icon="calendar-outline"
          title="Date Mode"
          subtitle={
            currentDateType === "live"
              ? "Using today's live date"
              : formatWithWeekday(currentDate)
          }
          stacked
        >
          <SegmentedControl
            compact
            value={currentDateType === "live" ? "live" : "custom"}
            onChange={handleDateModeChange}
            options={[
              {
                label: currentDateType === "live" ? "Live" : "Go Live",
                value: "live",
                icon: "radio-outline",
              },
              {
                label:
                  currentDateType === "live"
                    ? "Pick Date"
                    : formatWithWeekday(currentDate),
                value: "custom",
                icon: "calendar-outline",
              },
            ]}
          />
        </SettingsRow>
        <SettingsRow
          icon="time-outline"
          title="Day Transition Time"
          subtitle={convertTo12HourFormat(settings.dayTransitionTime)}
        >
          <Pressable
            accessibilityRole="button"
            onPress={openTimePicker}
            style={({ pressed }) => [styles.inlineButton, pressed && styles.pressed]}
          >
            <Text style={styles.inlineButtonText}>Change</Text>
          </Pressable>
        </SettingsRow>
      </SettingsSection>

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "clock"}
          minuteInterval={15}
          onChange={handleTimeChange}
        />
      )}

      <Modal
        visible={showDatePicker}
        transparent
        animationType="fade"
        onRequestClose={handleDateDismiss}
        supportedOrientations={[
          "portrait",
          "portrait-upside-down",
          "landscape",
          "landscape-left",
          "landscape-right",
        ]}
      >
        <View style={styles.datePickerOverlay}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close date picker"
            onPress={handleDateDismiss}
            style={StyleSheet.absoluteFill}
          />
          <View
            style={[
              styles.datePickerCard,
              {
                width: compactDatePickerWidth,
                height: compactDatePickerHeight,
              },
            ]}
          >
            <View style={styles.datePickerPreview}>
              <Text style={styles.datePickerPreviewLabel}>Selected date</Text>
              <Text style={styles.datePickerPreviewTitle}>
                {pickerPreview.gregorian}
              </Text>
              <Text style={styles.datePickerPreviewDetail}>
                {pickerPreview.coptic}
              </Text>
              {pickerPreview.seasons.length ? (
                <View style={styles.datePickerPreviewSeasons}>
                  {pickerPreview.seasons.slice(0, 3).map((season) => (
                    <View key={season} style={styles.previewSeasonPill}>
                      <Text style={styles.previewSeasonPillText}>{season}</Text>
                    </View>
                  ))}
                </View>
              ) : null}
            </View>
            <DatePickerModalContent
              locale="en"
              mode="single"
              date={pickerDate || currentDate || new Date()}
              onChange={handlePickerDateChange}
              onConfirm={handleDateConfirm}
              onDismiss={handleDateDismiss}
              label="Pick a Date"
              saveLabel="Select"
              uppercase={false}
              startYear={1900}
              endYear={2200}
              disableSafeTop
              disableStatusBar
            />
          </View>
        </View>
      </Modal>

      {copticSeasons && copticSeasons.length > 0 ? (
        <SettingsSection title={`Coptic Seasons for ${currentDate?.getFullYear()}`}>
          <View style={styles.seasonList}>
            {copticSeasons.map((season, index) =>
              season.visible ? (
                <Pressable
                  key={`${season.season}-${index}`}
                  accessibilityRole="button"
                  onPress={() =>
                    commitSelectedDate(season.date ? season.date : season.start)
                  }
                  style={({ pressed }) => [
                    styles.seasonCard,
                    pressed && styles.pressed,
                  ]}
                >
                  <Text style={styles.seasonTitle}>{season.season}</Text>
                  <View style={styles.seasonMeta}>
                    <Text style={styles.seasonDate}>{formatSeasonDate(season)}</Text>
                    <Text style={styles.seasonDivider}>|</Text>
                    <Text style={styles.seasonDate}>{getCopticDate(season)}</Text>
                  </View>
                </Pressable>
              ) : null
            )}
          </View>
        </SettingsSection>
      ) : null}
    </SettingsScaffold>
  );
};

const styles = StyleSheet.create({
  selectedDateCard: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  selectedDateHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: settingsPalette.border,
  },
  selectedDateIcon: {
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  selectedDateText: {
    flex: 1,
    minWidth: 0,
  },
  selectedDateEyebrow: {
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "700",
  },
  selectedDateValue: {
    marginTop: 2,
    color: settingsPalette.text,
    fontSize: 18,
    fontWeight: "800",
  },
  selectedDateDetail: {
    marginTop: 2,
    color: settingsPalette.muted,
    fontSize: 14,
    fontWeight: "600",
  },
  inlineButton: {
    minHeight: 36,
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueSoft,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  inlineButtonText: {
    color: settingsPalette.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  datePickerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "rgba(16, 42, 67, 0.34)",
  },
  datePickerCard: {
    maxHeight: 680,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  datePickerPreview: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    backgroundColor: settingsPalette.blueWash,
    borderBottomWidth: 1,
    borderBottomColor: settingsPalette.border,
  },
  datePickerPreviewLabel: {
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  datePickerPreviewTitle: {
    marginTop: 2,
    color: settingsPalette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  datePickerPreviewDetail: {
    marginTop: 2,
    color: settingsPalette.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  datePickerPreviewSeasons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
  previewSeasonPill: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: settingsPalette.accentSoft,
    borderWidth: 1,
    borderColor: "#E7C672",
  },
  previewSeasonPillText: {
    color: settingsPalette.primary,
    fontSize: 12,
    fontWeight: "700",
  },
  currentSeason: {
    width: "100%",
    gap: 8,
    paddingTop: 12,
  },
  prioritySeasonBlock: {
    gap: 7,
  },
  primarySeasonBadge: {
    minHeight: 58,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: settingsPalette.primary,
    borderWidth: 1,
    borderColor: settingsPalette.primary,
  },
  primarySeasonTextWrap: {
    minWidth: 0,
  },
  primarySeasonLabel: {
    color: "#DCEBFA",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  primarySeasonList: {
    gap: 5,
    marginTop: 7,
  },
  primarySeasonLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  primarySeasonDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: settingsPalette.accent,
  },
  primarySeasonLineText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  emptyText: {
    color: settingsPalette.muted,
    fontSize: 15,
  },
  developerPanel: {
    width: "100%",
    marginTop: 6,
    padding: 10,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  developerText: {
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "600",
  },
  seasonList: {
    padding: 10,
    gap: 8,
  },
  seasonCard: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueWash,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  seasonTitle: {
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "700",
  },
  seasonMeta: {
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  seasonDate: {
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "600",
  },
  seasonDivider: {
    color: settingsPalette.border,
    fontSize: 13,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default CalendarScreen;
