/* global require */
import 'react-native-gesture-handler';
import React, {  useCallback } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from './components/navigation/RootNavigation';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SettingsProvider from './settings/settingsProvider';
import { useKeepAwake } from 'expo-keep-awake';
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();


const App = () => {
  useKeepAwake();



  const [fontsLoaded, fontError] = useFonts({
    'CS New Athanasius': require('./assets/fonts/cs-new-athanasius.ttf'),  // adjust the path as needed
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
