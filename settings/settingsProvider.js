/** @format */

import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SettingsContext from "./settingsContext";
import { getSelectedDateProperties } from "../components/functions/copticDate";
import { saintSettingsList as defaultSaintSettings } from "./saintSettings";



const defaultSettings = {
  fontSize: "3.5",
  languages: [
    { label: "English", value: "English", checked: true },
    { label: "Arabic", value: "Arabic", checked: true },
    { label: "Coptic", value: "Coptic", checked: true },
    { label: "English Phonics", value: "English Phonics", checked: true },
    { label: "Arabic Phonics", value: "Arabic Phonics", checked: true },
    { label: "Commentary", value: "Commentary", checked: true },
  ],
  onePage: [
    { label: "Paschal Praise", value: "PaschalPraise", checked: true },
    {
      label: "Exposition Responses",
      value: "ExpositionResponses",
      checked: true,
    },
    { label: "Coptic Gospel Intro", value: "GospelIntro", checked: true },
    {
      label: "Glorification Paragraphs",
      value: "Glorification",
      checked: true,
    },
    { label: "Songs", value: "Songs", checked: true },
  ],
  paschalReadingsFull: true, // Show full readings for Paschal Praise
  currentDate: { type: "live", date: new Date() }, // Live or custom date
  dayTransitionTime: "18:00", // Default day transition time
  selectedDateProperties: null, // To be calculated
  developerMode: false, // Add developer mode to the settings
  saintSettings: defaultSaintSettings,
  orientation: "landscape", // Default orientation
};

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const currentVersion = 21; // Update this number when you want to change the settings

  // Load settings from AsyncStorage on initialization
  useEffect(() => {
    AsyncStorage.getItem("settings")
      .then((storedData) => {
        if (storedData) {
          const { version, settings } = JSON.parse(storedData);
          const normalizeDate = (value) => {
            const date = new Date(value);
            return Number.isNaN(date.getTime()) ? new Date() : date;
          };

          if (version === currentVersion) {
            // Convert the date string back to a Date object
            if (settings.currentDate.type === "live") {
              settings.currentDate.date = new Date(); // Update to today's date
            } else if (typeof settings.currentDate.date === "string") {
              settings.currentDate.date = normalizeDate(settings.currentDate.date);
            }

            settings.selectedDateProperties = getSelectedDateProperties(
              normalizeDate(settings.currentDate.date),
              settings.dayTransitionTime
            );

            try {
              settings.saintSettings = mergeSaintSettings(
                settings.saintSettings,
                defaultSaintSettings
              );
            } catch (err) {
              console.warn("Failed to merge saint settings, using defaults", err);
              settings.saintSettings = defaultSaintSettings;
            }

            setSettings(settings); // Use stored settings
          } else {
            // Preserve user settings if they exist, otherwise fall back to defaults
            const storedDeveloperMode =
              settings?.developerMode !== undefined
                ? settings.developerMode
                : false;
            const storedDayTransitionTime =
              settings?.dayTransitionTime !== undefined
                ? settings.dayTransitionTime
                : defaultSettings.dayTransitionTime;
            const storedSaintSettings = settings?.saintSettings || [];

            initializeDefaultSettings();

            // Update the settings with the merged values and preserved user settings
            setSettings((prevSettings) => ({
              ...prevSettings,
              saintSettings: (() => {
                try {
                  return mergeSaintSettings(
                    storedSaintSettings,
                    defaultSaintSettings
                  );
                } catch (err) {
                  console.warn(
                    "Failed to merge saint settings, using defaults",
                    err
                  );
                  return defaultSaintSettings;
                }
              })(),
              developerMode: storedDeveloperMode,
              dayTransitionTime: storedDayTransitionTime,
              selectedDateProperties: getSelectedDateProperties(
                normalizeDate(settings?.currentDate?.date || new Date()),
                storedDayTransitionTime
              ),
            }));
          }
        } else {
          // No stored settings: initialize with default settings
          initializeDefaultSettings();
        }
      })
      .catch((err) =>
        console.error("Error reading settings from AsyncStorage", err)
      );
  }, []);

  const mergeSaintSettings = (existingSaintSettings, newSaintSettings) => {
    if (!Array.isArray(existingSaintSettings)) {
      return newSaintSettings;
    }

    const existingSaintsMap = new Map(
      existingSaintSettings.map((saint) => [saint.saintName, saint])
    );

    return newSaintSettings.map((defaultSaint) => {
      const existingSaint = existingSaintsMap.get(defaultSaint.saintName);
      if (!existingSaint) {
        return defaultSaint;
      }

      return mergeSaintSettingEntry(defaultSaint, existingSaint);
    });
  };

  const mergeSaintSettingEntry = (defaultSaint, existingSaint) => {
    const mergedSaint = { ...defaultSaint };
    const settingKeys = [
      "verseOfCymbals",
      "intercession",
      "actsResponse",
      "gospelResponse",
      "distributionPraise",
      "doxology",
    ];

    settingKeys.forEach((key) => {
      if (typeof defaultSaint[key] !== "boolean") {
        return;
      }

      const existingSetting = existingSaint?.[key];
      const existingVisible =
        typeof existingSetting === "boolean"
          ? existingSetting
          : existingSetting?.visible;

      mergedSaint[key] =
        typeof existingVisible === "boolean"
          ? existingVisible
          : defaultSaint[key];
    });

    return mergedSaint;
  };

  const initializeDefaultSettings = () => {
    const selectedDateProperties = getSelectedDateProperties(
      defaultSettings.currentDate.date,
      defaultSettings.dayTransitionTime
    );
    const newSettings = {
      ...defaultSettings,
      selectedDateProperties,
    };
    AsyncStorage.setItem(
      "settings",
      JSON.stringify({ version: currentVersion, settings: newSettings })
    );
    setSettings(newSettings);
  };

  // Update AsyncStorage when settings change
  useEffect(() => {
    AsyncStorage.setItem(
      "settings",
      JSON.stringify({ version: currentVersion, settings })
    );
  }, [settings]);

  // Function to update the current date (either live or custom)
  const setCurrentDate = (date, type = "live") => {
    // new date in local time
    const newDate = new Date(date);
    const selectedDateProperties = getSelectedDateProperties(
      newDate,
      settings.dayTransitionTime
    );

    setSettings((prevSettings) => ({
      ...prevSettings,
      currentDate: { date: newDate, type }, // 'live' or 'custom'
      selectedDateProperties, // Store calculated date properties
    }));
  };

  // Function to update the dayTransitionTime
  const setDayTransitionTime = (time) => {
    const selectedDateProperties = getSelectedDateProperties(
      new Date(settings.currentDate.date),
      time
    );

    setSettings((prevSettings) => ({
      ...prevSettings,
      dayTransitionTime: time,
      selectedDateProperties, // Recalculate date properties based on new transition time
    }));
  };

  // Function to toggle developer mode
  const toggleDeveloperMode = (value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      developerMode: value,
    }));
  };

  // Function to toggle the visibility of a text (e.g. Doxologies/Responses)
  const setTextVisibility = (textType, textName, visibility) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [textType]: prevSettings[textType].map((item) =>
        item.name === textName ? { ...item, visible: visibility } : item
      ),
    }));
  };
  // Function to set the orientation
  const setOrientation = (newOrientation) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      orientation: newOrientation,
    }));
  };

  const setSaintSettingVisibility = (saintName, settingKey, visibility) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      saintSettings: prevSettings.saintSettings.map((saint) => {
        if (saint.saintName !== saintName) {
          return saint;
        }

        if (typeof saint[settingKey] !== "boolean") {
          return saint;
        }

        return {
          ...saint,
          [settingKey]: visibility,
        };
      }),
    }));
  };

  return (
    <SettingsContext.Provider
      value={[
        settings,
        setSettings,
        setCurrentDate,
        setDayTransitionTime,
        toggleDeveloperMode,
        setTextVisibility,
        setOrientation,
        setSaintSettingVisibility,
      ]}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
