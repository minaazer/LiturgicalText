// screens/Home.js

import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image , Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../../assets/background.png';
import glorificationImage from '../../assets/glorification.png';
import kiahkImage from '../../assets/kiahk.png';
import holyWeekImage from '../../assets/holyWeek.png';
import songsImage from '../../assets/songs.png';
import baptismImage from '../../assets/baptism.png';
import weddingImage from '../../assets/wedding.png';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.pageContainer}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='repeat'>
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.pageHeader}>Liturgical</Text>
            <Text style={styles.pageHeader}>Books</Text>
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
              <TouchableOpacity
                style={[styles.iconContainer, { opacity: 0.5}]}
              >
                <Image source={baptismImage} style={styles.iconImage} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.iconContainer, { opacity: 0.5}]}
              >
                <Image source={weddingImage} style={styles.iconImage} />
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
    </View>
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
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  headerContainer: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  booksContainer: {
    flex: 2.5,
    marginLeft: -20,
    justifyContent: 'center',
    alignItems: 'center', // adjusted from 'flex-start'
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: 0,
  },

  iconContainer: {
    flex:1,
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
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
    width: screenWidth * 0.16, // adjusted from 200
    height: screenWidth * 0.16, // adjusted from 200
    resizeMode: 'contain',
    margin: 0,
    padding: 0,
  },
  
});

export default Home;
