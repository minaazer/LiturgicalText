/** @format */

import React, {useEffect} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { MainStackNavigator } from "./MainStackNavigator";
import {LeftDrawerContent} from "./LeftDrawerContent";



const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;
const isPortrait = screenWidth < 500;



const RootNavigation = () => {

  const navigation = useNavigation();
  

  // Ensure the left drawer fully opens or closes
  useEffect(() => {
    const unsubscribeOpen = navigation.addListener('drawerOpen', () => {
      console.log('Left drawer fully opened');
    });

    const unsubscribeClose = navigation.addListener('drawerClose', () => {
      // Left drawer fully closed
    });

    return () => {
      unsubscribeOpen();
      unsubscribeClose();
    };
  }, [navigation]);


  const state = useNavigationState((state) => state);
  const currentState = state?.routes[state.index].state;
  const currentRoute = currentState?.routes[currentState.index].name;

  return (
    <Drawer.Navigator
      initialRouteName="MainStack" // Set the initial route to MainStack
      screenOptions={{
        gestureEnabled: true,
        swipeEdgeWidth: isPortrait ? screenWidth / 2 : screenWidth / 3,
        swipeMinDistance: 10,
        drawerType: "front",
 
        overlayColor: "rgba(0,0,0,0.5)", // Semi-transparent overlay
      }}
      drawerContent={(props) => (
        <LeftDrawerContent {...props} currentRoute={currentRoute} />
      )}
    >
      <Drawer.Screen
        name="MainStack"
        component={MainStackNavigator}
        options={{ headerShown: false, title: "Home" }}
      />
    </Drawer.Navigator>
  );
};

export default RootNavigation;
