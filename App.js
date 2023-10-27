import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { StatusBar, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from './components/navigation/RootNavigation';
import SettingsContext from './settings/settignsContext';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();


const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const [settings, setSettings] = React.useState({

    fontSize: '3',
    languages: [
      { label: 'English', value: 'English' , checked: true },
      { label: 'Arabic', value: 'Arabic' , checked: true },
      { label: 'Coptic', value: 'Coptic' , checked: true },
    ]
  });

  
  
  async function loadFonts() {
    await Font.loadAsync({
      'CS New Athanasius': require('./assets/fonts/cs-new-athanasius.ttf'),  // adjust the path as needed
      'Athanasius'  : require('./assets/fonts/athanasius.ttf'),
      'New Athanasius'  : require('./assets/fonts/newath.ttf'),
      'Times New Roman': require('./assets/fonts/times.ttf'),
      'Garamond'  : require('./assets/fonts/Garamond.ttf'),
      'Garamond Bold'  : require('./assets/fonts/GARABD.ttf'),
      'ArialCoptic' : require('./assets/fonts/ArialCoptic.ttf'),
      'NotoSansBold' : require('./assets/fonts/NotoSans-Bold.ttf'),
      'NotoSans' : require('./assets/fonts/NotoSans-Regular.ttf'),
      'NotoSansMedium' : require('./assets/fonts/NotoSans-Medium.ttf'),
      'Georgia' : require('./assets/fonts/georgia.ttf'),
      'Georgia Bold' : require('./assets/fonts/georgiab.ttf'),
    });

    //catch errors

    

    setFontLoaded(true);
  }
  
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Load fonts and other resources here
        await loadFonts();


      } catch (e) {
        console.warn(e);
      } finally {
        // Set app as ready after resources are loaded
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // Hide splash screen when app is ready
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  
  




if (!fontLoaded) {
  return null;  // or a placeholder component if you prefer
}


   

    return (
      <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <SettingsContext.Provider value={[settings, setSettings]}>
      <NavigationContainer>
        
        <StatusBar hidden />
        <RootNavigation />

      </NavigationContainer>
      </SettingsContext.Provider>
      </SafeAreaView>
      </SafeAreaProvider>
        
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop: 1,
    paddingBottom: 20,
    backgroundColor: 'black',
  },
  viewPager: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
  paddingTop: 2,  }

});

export default App;
