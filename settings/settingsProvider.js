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
    { label: 'Coptic Readings', value: 'Coptic Readings' , checked: true },
  ]
};

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  // Load settings from AsyncStorage when the app starts
  useEffect(() => {
    AsyncStorage.getItem('settings').then(storedSettings => {
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    });
  }, []);

  // Save settings to AsyncStorage whenever they change
  useEffect(() => {
    AsyncStorage.setItem('settings', JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;