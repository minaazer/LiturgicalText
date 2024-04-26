import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsContext from './settingsContext';

const defaultSettings = {
  fontSize: '3.5',
  languages: [
    { label: 'English', value: 'English' , checked: true },
    { label: 'Arabic', value: 'Arabic' , checked: true },
    { label: 'Coptic', value: 'Coptic' , checked: true },
    { label: 'English Phonics', value: 'English Phonics' , checked: true },
    { label: 'Arabic Phonics', value: 'Arabic Phonics' , checked: true },
    { label: 'Commentary', value: 'Commentary' , checked: true },
    
  ]
};

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  // Load settings from AsyncStorage when the app starts
  const currentVersion = 4;  // Update this number when you want to change the settings

  useEffect(() => {
    AsyncStorage.getItem('settings').then(storedData => {
      if (storedData) {
        let { version, settings } = JSON.parse(storedData);
        // If the version is not stored in the stored data, treat it as version 0
        if (version === undefined) {
          version = 0;
        }
        if (version < currentVersion) {
          // If the stored version is less than the current version, update the settings and the version number
          AsyncStorage.setItem('settings', JSON.stringify({ version: currentVersion, settings: defaultSettings }));
          setSettings(defaultSettings);
        } else {
          // If the stored version is not less than the current version, use the stored settings
          setSettings(settings);
        }
      } else {
        // If there are no stored settings, use the default settings and store them along with the current version number
        AsyncStorage.setItem('settings', JSON.stringify({ version: currentVersion, settings: defaultSettings }));
        setSettings(defaultSettings);
      }
    });
  }, []);


  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;