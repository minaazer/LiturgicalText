/* global require */
import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useContext , useState } from 'react';
import * as Updates from 'expo-updates'; // Import Updates for reloading
import { StatusBar, Alert , Linking , Platform, View, ScrollView, Text, TouchableOpacity } from 'react-native';
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
import * as ScreenOrientation from 'expo-screen-orientation';
import SettingsContext from './settings/settingsContext';
import changelog from './changelog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import semver from 'semver';
import { presentationStyles } from './components/css/presentationStyles';





// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const AppContent = () => {
  useKeepAwake();
  const [popupVisible, setPopupVisible] = useState(false);
  const [updates, setUpdates] = useState([]);
  const currentVersion = app.expo.version || '1.0.0';
  const [settings, , setCurrentDate] = useContext(SettingsContext); // Access settings and setCurrentDate

  const handleStateChange = () => {
    if (settings.currentDate.type === 'live') {
        setCurrentDate(new Date(), 'live');
    }
  };


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

// Reload app when orientation changes
useEffect(() => {
  const enforceAndHandleOrientationChange = async () => {
      // Determine the desired orientation lock
      let desiredOrientationLock;

      if (settings.orientation === "landscape") {
          desiredOrientationLock = ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT;
      } else if (settings.orientation === "reverseLandscape") {
          desiredOrientationLock = ScreenOrientation.OrientationLock.LANDSCAPE_LEFT;
      } else if (settings.orientation === "portrait") {
          desiredOrientationLock = ScreenOrientation.OrientationLock.PORTRAIT_UP;
      } else {
          console.warn("Unknown orientation setting:", settings.orientation);
          return; // Exit if the orientation setting is invalid
      }

      try {
          // Enforce the desired orientation lock
          await ScreenOrientation.lockAsync(desiredOrientationLock);
          console.log("Orientation enforced:", settings.orientation);

          // Add listener to handle orientation changes
          const handleOrientationChange = async ({ orientationInfo }) => {
              const { orientation } = orientationInfo;
              const isRunningInExpoGo = Constants.executionEnvironment === "storeClient";

              if (orientation !== desiredOrientationLock && !isRunningInExpoGo) {
                  console.log("Orientation mismatch detected. Reloading app...");
                  await Updates.reloadAsync();
              }
          };

          const subscription = ScreenOrientation.addOrientationChangeListener(
              handleOrientationChange
          );

          // Cleanup listener on unmount
          return () => {
              ScreenOrientation.removeOrientationChangeListener(subscription);
          };
      } catch (error) {
          console.error("Error enforcing or handling orientation:", error.message);
      }
  };

  enforceAndHandleOrientationChange();
}, [settings.orientation]);
/*
  // Enforce orientation when app starts
  useEffect(() => {
    const enforceOrientation = async () => {
      if (settings.orientation === "landscape") {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
      } else if (settings.orientation === "portrait") {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
      }
    };

    enforceOrientation();
  }, [settings.orientation]);
  
*/

  
 // Check for updates
 useEffect(() => {
  const isRunningInExpoGo = Constants.executionEnvironment === 'storeClient';
  if (!isRunningInExpoGo) {
    checkForStoreUpdates();
  }
  checkForVersionUpdates();
}, []);


const checkForStoreUpdates = async () => {
  try {
    const currentVersion = app.expo.version || '1.0.0';


    // Proceed with the version check if not in Expo Go
    const latestVersion = await VersionCheck.getLatestVersion();

    if (latestVersion && latestVersion !== currentVersion) {
      Alert.alert(
        'Update Available',
        `A newer version of the app is available.\n\nCurrent version: ${currentVersion}\nLatest version: ${latestVersion}`,
        [
          {
            text: 'Update',
            onPress: async () => {
                const storeUrl = Platform.OS === 'ios'
                  ? `https://apps.apple.com/app/id6470239938`
                  : await VersionCheck.getStoreUrl();
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
  

const checkForVersionUpdates = async () => {
  try {
    let lastSeenVersion = await AsyncStorage.getItem('lastSeenVersion');
    if (!lastSeenVersion) lastSeenVersion = '1.0.0';

    const allVersions = Object.keys(changelog).sort(semver.compare);
    const lastSeenIndex = allVersions.indexOf(lastSeenVersion);
    const newUpdates = [];

    if (lastSeenIndex !== -1) {
      for (let i = lastSeenIndex + 1; i < allVersions.length; i++) {
        const version = allVersions[i];
        newUpdates.push({
          title: `Version ${version}`,
          text: changelog[version],
        });
      }
    } else {
      for (const version of allVersions) {
        newUpdates.push({
          title: `Version ${version}`,
          text: changelog[version],
        });
      }
    }

    if (newUpdates.length > 0) {
      setUpdates(newUpdates);
      setPopupVisible(true);
      await AsyncStorage.setItem('lastSeenVersion', currentVersion);
    }
  } catch (error) {
    console.error('Error checking for version updates:', error);
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
      <SafeAreaProvider>
        <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1, backgroundColor: 'black' }}>
        <NavigationContainer onStateChange={handleStateChange}>
            <StatusBar hidden />
            <RootNavigation />
          </NavigationContainer>
          {popupVisible && (
          <View style={presentationStyles.modalOverlay}>
            <View style={presentationStyles.alertBox}>
              <TouchableOpacity onPress={() => setPopupVisible(false)} style={presentationStyles.closeButton}>
                <Text style={presentationStyles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Text style={presentationStyles.title}>{`What’s New in ${currentVersion}`}</Text>
              <ScrollView contentContainerStyle={presentationStyles.content}>
                {updates.map((section, index) => (
                  <View key={index} style={presentationStyles.section}>
                    <Text style={presentationStyles.sectionTitle}>{section.title}</Text>
                    {section.text.map((change, idx) => (
                      <View key={idx} style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: 2 }}>
                        <Text style={{ marginRight: 8 }}>{'\u2022'}</Text>
                        <Text>{change || ''}</Text>
                        </View>
                    ))}                  
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        )}
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
};

export default App;
