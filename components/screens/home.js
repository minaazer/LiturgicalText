// screens/Home.js

import React, { useContext } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Platform, Image , Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../../assets/background.png';
import glorificationImage from '../../assets/glorification.png';
import kiahkImage from '../../assets/kiahk.png';
import psalmody from '../../assets/psalmody.png';
import holyWeekImage from '../../assets/holyWeek.png';
import songsImage from '../../assets/songs.png';
import baptismImage from '../../assets/baptism.png';
import weddingImage from '../../assets/wedding.png';
import { ScrollView } from 'react-native-gesture-handler';
import SettingsContext from '../../settings/settingsContext'; // Import SettingsContext




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const isPortrait = screenHeight > screenWidth;


const Home = () => {
  const navigation = useNavigation();
  const [settings] = useContext(SettingsContext); // Get the settings from the context
  const developerMode = settings.developerMode; // Get the developerMode setting
 

  
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='repeat'>
      <View style={styles.pageContentContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.pageHeader}>Liturgical Books</Text>
        </View>

        <View style={styles.booksContainer}>
          <View style={styles.iconRow}>

              

              <TouchableOpacity
                style={[styles.iconContainer]}
                onPress={() => navigation.navigate('Glorification')}
              >
                <Image source={glorificationImage} style={styles.iconImage} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.iconContainer]}
                onPress={() => navigation.navigate('HolyWeek')}
              >
                <Image source={holyWeekImage} style={styles.iconImage} />
              </TouchableOpacity>
            
            {developerMode ? (
              <TouchableOpacity
                style={[styles.iconContainer, { opacity: 0.5}]}
              >
                <Image source={baptismImage} style={styles.iconImage} />
              </TouchableOpacity>
              ) : null }
              {developerMode ? (
              <TouchableOpacity
                style={[styles.iconContainer, { opacity: 0.5}]}
              >
                <Image source={weddingImage} style={styles.iconImage} />
              </TouchableOpacity>
              ) : null }

              <TouchableOpacity
                style={[styles.iconContainer]}
                onPress={() => navigation.navigate('Psalmody')}
              >
                <Image source={psalmody} style={styles.iconImage} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.iconContainer]}
              onPress={() => navigation.navigate('Songs')}
              >
                <Image source={songsImage} style={styles.iconImage} />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  pageHeader: {
    fontSize: isPortrait ? screenHeight * 0.05 : screenWidth * 0.05,
    fontFamily: 'Garamond Bold',
    textAlign: 'center',
    color: '#003060',
    margin: 0,
    padding: 0,
    elevation: 5,
    textShadowColor: 'grey',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: screenHeight,
  },
  pageContentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  booksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5, // Space between icons
    borderColor: '#ccc',
    backgroundColor: 'transparent',
  },
  iconRow: {
    flexDirection: 'row', // Row layout
    justifyContent: 'space-evenly', // Evenly spaced items
    flexWrap: 'wrap', // Allow wrapping
    paddingVertical: 10,
    width: '100%',
  },
  iconImage: {
    width: isPortrait ? screenHeight * 0.15 : screenWidth * 0.15, // Adjust dynamically
    height: isPortrait ? screenHeight * 0.15 : screenWidth * 0.15,
    resizeMode: 'contain',
  },
});

export default Home;
