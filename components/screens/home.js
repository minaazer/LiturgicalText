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
                onPress={() => navigation.navigate('Kiahk')}
              >
                <Image source={kiahkImage} style={styles.iconImage} />
              </TouchableOpacity>

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
            </View>

            <View style={styles.iconRow}>
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
    fontSize: screenWidth * 0.05,
    fontFamily: 'Garamond Bold',
    textAlign: 'center',
    color: '#003060',
    margin:0,
    padding: 0,
    elevation: 5,
    textShadowColor: 'grey',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  pageContainer: {
    display: "fex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: "100%",
    minHeight: screenHeight,
  },
  pageContentContainer: {
    display: "block",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  booksContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
  },

  iconContainer: {
    flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'space-evenly',
    margin: 0,
    padding: 0,
    borderColor: '#ccc',
    backgroundColor: 'transparent',

  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'space-evenly',
    alignContent: 'space-evenly',
    padding: 10,
    width: '100%',
    },

  iconImage: {
    width: screenWidth * 0.15, // adjusted from 200
    height: screenWidth * 0.15, // adjusted from 200
    resizeMode: 'contain',
    margin: 0,
    padding: 0,
  },
  
});

export default Home;
