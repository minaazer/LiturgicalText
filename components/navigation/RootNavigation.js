import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

import Home from '../screens/home';
//import Glorification from '../screens/glorification';
import Kiahk from '../screens/kiahk';
import Glorification from '../screens/glorification2';
import SettingsScreen from '../screens/settings';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;


function LeftDrawerContent(props) {
  return (
    <DrawerContentScrollView
      // drawerType={"slide"}
      style={styles.drawerContentScrollView}
      contentContainerStyle={styles.drawerContentContainer}
      {...props}
    >
      <View style={styles.drawerHeaderContainer}>
        <Text style={styles.drawerHeaderText}>Liturgical Books</Text>
      </View>
      {/* Normal Drawer Items go here */}
      <DrawerItem label="Home" style={styles.drawerItem} labelStyle={styles.drawerLabel} onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Glorification" style={styles.drawerItem} labelStyle={styles.drawerLabel} onPress={() => props.navigation.navigate('Glorification')} />
      <DrawerItem label="Kiahk" style={styles.drawerItem} labelStyle={styles.drawerLabel} onPress={() => props.navigation.navigate('Kiahk')} />

      <SettingsScreen style={styles.settingsScreen} />
    </DrawerContentScrollView>
  );
}
// Define the MainStackNavigator which nests all the main screens.
const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Glorification" component={Glorification} options={{ headerShown: false }} />
      <Stack.Screen name="Kiahk" component={Kiahk} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MainStack" // Set the initial route to MainStack
      screenOptions={{
        gestureEnabled: true,
        swipeEdgeWidth: screenWidth / 2,
        drawerType: 'front',
      }}
      drawerContent={props => <LeftDrawerContent {...props} />}

    >
      <Drawer.Screen name="MainStack" component={MainStackNavigator} options={{ headerShown: false, title: 'Home' }} />
    </Drawer.Navigator>
  );
};

export default RootNavigation;
const styles = StyleSheet.create({
  drawerContentScrollView: {
    backgroundColor: '#003060',
    margin: 0,
    padding: 0,
    flex: 1,

  },
  drawerContentContainer: {

    margin: 0,
    paddingTop: 0,
    paddingBottom: 10,

  },

  drawerHeaderContainer: {
    marginTop: 10,


  },
  drawerHeaderText: {
    textAlign: 'center',
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    color: '#e19d09',
    textShadowColor: 'grey',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },

  },

  drawerLabel: {
    fontSize: screenWidth * 0.035,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: -5,
    padding: 0,



  },
  drawerItem: {
    //remove the spacing between the items
    marginVertical: 0,
    marginHorizontal: '5%',
    paddingVertical: 0,
    paddingHorizontal: 0,


  },
  settingsScreen: {
    shadowColor: 'black',
  },
});

