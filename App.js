/* global require */
import 'react-native-gesture-handler';
import React, { useCallback, useEffect } from 'react';
import { StatusBar, Alert , Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from './components/navigation/RootNavigation';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SettingsProvider from './settings/settingsProvider';
import { useKeepAwake } from 'expo-keep-awake';
import { useFonts } from 'expo-font';
import VersionCheck from 'react-native-version-check';
import app from './app.json';
import Constants from 'expo-constants';




// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const App = () => {
  useKeepAwake();

  const [fontsLoaded, fontError] = useFonts({
    'CS New Athanasius': require('./assets/fonts/cs-new-athanasius.ttf'), // adjust the path as needed
    'Athanasius': require('./assets/fonts/athanasius.ttf'),
    'New Athanasius': require('./assets/fonts/newath.ttf'),
    'Times New Roman': require('./assets/fonts/times.ttf'),
    'Garamond': require('./assets/fonts/Garamond.ttf'),
    'Garamond Bold': require('./assets/fonts/GARABD.ttf'),
    'ArialCoptic': require('./assets/fonts/ArialCoptic.ttf'),
    'NotoSansBold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'NotoSans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'NotoSansMedium': require('./assets/fonts/NotoSans-Medium.ttf'),
    'Georgia': require('./assets/fonts/georgia.ttf'),
    'Georgia Bold': require('./assets/fonts/georgiab.ttf'),
  });

  
 // Check for updates
 useEffect(() => {
  checkForStoreUpdates();
}, []);

const checkForStoreUpdates = async () => {
  try {
    const currentVersion = app.expo.version || '1.0.0';


    // Proceed with the version check if not in Expo Go
    const latestVersion = await VersionCheck.getLatestVersion();

    if (latestVersion !== currentVersion) {
      Alert.alert(
        'Update Available',
        `A newer version of the app is available.\n\nCurrent version: ${currentVersion}\nLatest version: ${latestVersion}`,
        [
          {
            text: 'Update',
            onPress: async () => {
              const storeUrl = await VersionCheck.getStoreUrl();
              if (storeUrl) {
                Linking.openURL(storeUrl);
              }
            },
          },
          { text: 'Cancel', style: 'cancel' },
        ],
      );
    }
  } catch (error) {
    console.error('Error checking for app updates:', error);
  }
};
  

  // Hide the splash screen when the root view is laid out

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SettingsProvider>
      <SafeAreaProvider>
        <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1, backgroundColor: 'black' }}>
          <NavigationContainer>
            <StatusBar hidden />
            <RootNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </SettingsProvider>
  );
};

export default App;
