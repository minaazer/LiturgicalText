// screens/Home.js

import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../../assets/background.png';
import glorificationImage from '../../assets/hoserof.png';
import kiahkImage from '../../assets/kiahk.png';
import holyWeekImage from '../../assets/holyWeek.png';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='repeat'>
      <View style={styles.pageContainer}>
        <Text style={styles.pageHeader}>Liturgical Books</Text>

        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.iconContainer, { backgroundColor: 'lightblue' }]}
            onPress={() => navigation.navigate('Kiahk')}
          >
            <Image source={kiahkImage} style={styles.iconImage} />
            <Text style={styles.iconText}>Kiahk</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconContainer]}
            onPress={() => navigation.navigate('Glorification')}
          >
            <Image source={glorificationImage} style={styles.iconImage} />
            <Text style={styles.iconText}>Glorification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconContainer, { opacity: 0.5, backgroundColor: '#890089' }]}
          //onPress={() => navigation.navigate('Glorification2')}
          >
            <Text style={styles.comingSoon}>Coming Soon</Text>
            <Image source={holyWeekImage} style={styles.iconImage} />
            <Text style={[styles.iconText, { color: 'white' }]}>Holy Week</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  pageContainer: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  pageHeader: {
    fontSize: 40,
    fontFamily: 'Garamond Bold',
    textAlign: 'center',
    color: 'black',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
    //flexWrap: 'wrap', // Allows for grid-like wrapping of items
  },
  iconContainer: {
    width: 180,
    height: 180,
    image: 'url(../../assets/cymbals.png)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f5d693',

    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android shadow properties
    elevation: 5,
  },

  iconText: {
    fontSize: 30,
    fontFamily: 'Garamond Bold',
    textAlign: 'center',
    color: 'white',
    // Text shadow properties
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  comingSoon: {
    fontSize: 20,
    fontFamily: 'Garamond',
    textAlign: 'center',
    color: 'white',
    // Text shadow properties
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  iconImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Home;
