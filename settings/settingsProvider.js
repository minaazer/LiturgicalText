/** @format */

import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SettingsContext from "./settingsContext";
import { getSelectedDateProperties } from "../components/functions/copticDate";
import { doxologyFunctionNames as defaultDoxologyFunctionNames } from "../data/doxologyTexts";

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
    { label: "Gospel Coptic Intro", value: "GospelIntro", checked: true },
    {
      label: "Glorification Paragraphs",
      value: "Glorification",
      checked: true,
    },
    { label: "Songs", value: "Songs", checked: true },
  ],
  currentDate: { type: "live", date: new Date() }, // Live or custom date
  dayTransitionTime: "18:00", // Default day transition time
  selectedDateProperties: null, // To be calculated
  developerMode: false, // Add developer mode to the settings
  doxologyFunctionNames: defaultDoxologyFunctionNames,
  orientation: "landscape", // Default orientation
};

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const currentVersion = 14; // Update this number when you want to change the settings

  // Load settings from AsyncStorage on initialization
  useEffect(() => {
    AsyncStorage.getItem("settings").then((storedData) => {
      if (storedData) {
        const { version, settings } = JSON.parse(storedData);

        if (version === currentVersion) {
          // Convert the date string back to a Date object
          if (settings.currentDate.type === "live") {
            settings.currentDate.date = new Date(); // Update to today's date
          } else if (typeof settings.currentDate.date === "string") {
            settings.currentDate.date = new Date(settings.currentDate.date);
          }

          if (!settings.selectedDateProperties) {
            const selectedDateProperties = getSelectedDateProperties(
              settings.currentDate.date,
              settings.dayTransitionTime
            );
            settings.selectedDateProperties = selectedDateProperties;
          }

          // Merge new doxology entries while keeping user preferences
          const mergedDoxologies = mergeDoxologyFunctionNames(
            settings.doxologyFunctionNames, 
            defaultDoxologyFunctionNames
          );
          

          settings.doxologyFunctionNames = mergedDoxologies;

          setSettings(settings); // Use stored settings
        } else {
          // Preserve user settings if they exist, otherwise fall back to defaults
          const storedDoxologySettings = 
          version < 13 || settings?.doxologyFunctionNames === undefined
            ? defaultDoxologyFunctionNames
            : settings.doxologyFunctionNames;

          const storedDeveloperMode =
            settings?.developerMode !== undefined
              ? settings.developerMode
              : false;
          const storedDayTransitionTime =
            settings?.dayTransitionTime !== undefined
              ? settings.dayTransitionTime
              : defaultSettings.dayTransitionTime;

          initializeDefaultSettings();

          // Merge new doxology entries while keeping user preferences
          const mergedDoxologies = mergeDoxologyFunctionNames(
            storedDoxologySettings,
            defaultDoxologyFunctionNames
          );

          // Update the settings with the merged values and preserved user settings
          setSettings((prevSettings) => ({
            ...prevSettings,
            doxologyFunctionNames: mergedDoxologies,
            developerMode: storedDeveloperMode,
            dayTransitionTime: storedDayTransitionTime,
          }));
        }
      } else {
        // No stored settings: initialize with default settings
        initializeDefaultSettings();
      }
    });
  }, []);

  const mergeDoxologyFunctionNames = (existingDoxologies, newDoxologies) => {
    const merged = newDoxologies.map((newDoxology) => {
      const existingDoxology = existingDoxologies.find(
        (item) => item.name === newDoxology.name
      );
      return existingDoxology
        ? { ...newDoxology, visible: existingDoxology.visible }
        : newDoxology;
    });
    return merged;
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
      ]}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
