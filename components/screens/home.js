// screens/Home.js

import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import backgroundImage from '../../assets/background.png';
import glorificationImage from '../../assets/glorification.png';
import kiahkImage from '../../assets/kiahk.png';
import holyWeekImage from '../../assets/holyWeek.png';
import songsImage from '../../assets/songs.png';
import baptismImage from '../../assets/baptism.png';
import weddingImage from '../../assets/wedding.png';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode='repeat'>
      <View style={styles.pageContainer}>
        <Text style={styles.pageHeader}>Liturgical Books</Text>

        <View style={styles.container}>
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
            style={[styles.iconContainer, { opacity: 0.5}]}
          //onPress={() => navigation.navigate('Glorification2')}
          >
            <Image source={holyWeekImage} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconContainer, { opacity: 0.5}]}
          //onPress={() => navigation.navigate('Glorification2')}
          >
            <Image source={baptismImage} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconContainer, { opacity: 0.5}]}
          //onPress={() => navigation.navigate('Glorification2')}
          >
            <Image source={weddingImage} style={styles.iconImage} />
          </TouchableOpacity>



          <TouchableOpacity
            style={[styles.iconContainer, { opacity: 0.5}]}
          //onPress={() => navigation.navigate('Glorification2')}
          >
            <Image source={songsImage} style={styles.iconImage} />
          </TouchableOpacity>

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
    color: '#003060',
    marginVertical: 20,
    elevation: 5,
    textShadowColor: 'grey',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },

  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  iconContainer: {
    width: 150,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#ccc',
    backgroundColor: 'transparent',

  },

  iconImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    paddingBottom: 20,
  },
});

export default Home;
