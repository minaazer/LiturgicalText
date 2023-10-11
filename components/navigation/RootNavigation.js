// RootNavigation.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';

import Home from '../screens/home';
import Glorification from '../screens/glorification';
import Kiahk from '../screens/kiahk';
import Glorification2 from '../screens/glorification2';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeStack" component={Home} options={{headerShown : false}} />
      {/* Add other in-app screens if needed */}
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <Drawer.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        gestureEnabled : true  ,
        swipeEdgeWidth: screenWidth /2 
      }}
      
      >
      <Drawer.Screen name="Home" component={HomeStack} options={{headerShown : false}} />
      <Drawer.Screen name="Glorification" component={Glorification} options={{headerShown : false}}/>
      <Drawer.Screen name="Kiahk" component={Kiahk} options={{headerShown : false}}/>
      <Drawer.Screen name="Glorification2" component={Glorification2} options={{headerShown : false}}/>


    </Drawer.Navigator>
  );
};

export default RootNavigation;
