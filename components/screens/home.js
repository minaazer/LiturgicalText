// screens/Home.js

import React from 'react';
import { ImageBackground , View, Text, StyleSheet, TouchableOpacity , Image } from 'react-native';
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
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Glorification')}
      >
        <Image source={glorificationImage} style={styles.iconImage} />
        <Text style={styles.iconText}>Glorification</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.iconContainer , {backgroundColor: 'lightblue'}]}
        onPress={() => navigation.navigate('Kiahk')}
      >
        <Image source={kiahkImage} style={styles.iconImage} />
        <Text style={styles.iconText}>Kiahk</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.iconContainer , {backgroundColor: '#890089'}]}
        onPress={() => navigation.navigate('Glorification2')}
      >
        <Image source={holyWeekImage} style={styles.iconImage} />
        <Text style={[styles.iconText , {color : 'white'}]}>Holy Week</Text>
      </TouchableOpacity>
      
    
    </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: 'column',

  },
  pageHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Garamond Bold',
    textAlign: 'center',
    color: 'black',
    marginVertical: 20,
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  
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
    fontWeight: 'bold',
    fontFamily: 'Garamond Bold',
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
