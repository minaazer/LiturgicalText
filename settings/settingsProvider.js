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
    
  ],
  onePage: [
    { label: 'Paschal Praise', value: 'PaschalPraise', checked: true },
    { label: 'Exposition Responses', value: 'ExpositionResponses', checked: true },
    { label: 'Gospel Coptic Intro', value: 'GospelIntro', checked: true },
    { label: 'Glorification Paragraphs', value: 'Glorification', checked: true },
    { label: 'Songs', value: 'Songs', checked: true },
  ]
};

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const currentVersion = 8;  // Update this number when you want to change the settings

  useEffect(() => {
    AsyncStorage.getItem('settings').then(storedData => {
      if (storedData) {
        const { version, settings } = JSON.parse(storedData);
        if (version === currentVersion) {
          setSettings(settings); // Use stored settings
        } else {
          // Handle version update or initialize settings
          AsyncStorage.setItem('settings', JSON.stringify({ version: currentVersion, settings: defaultSettings }));
          setSettings(defaultSettings); // Use default settings
        }
      } else {
        // No stored settings, initialize with default settings
        AsyncStorage.setItem('settings', JSON.stringify({ version: currentVersion, settings: defaultSettings }));
        setSettings(defaultSettings);
      }
    });
  }, []);

  // Update AsyncStorage when settings change
  useEffect(() => {
    AsyncStorage.setItem('settings', JSON.stringify({ version: currentVersion, settings }));
  }, [settings]);

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
};


export default SettingsProvider;