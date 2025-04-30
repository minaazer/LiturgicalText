import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/settings";
import CalendarScreen from "../screens/calendar";
import SaintSettingsScreen from "../screens/saintSettings";
import AboutScreen from "../screens/about";
import Home from "../screens/home";
import {RouteConfig} from "./RouteConfig"; // Import your route configuration




const createStackScreens = (route) => {

  

  if (!route || !route.screenName || !route.component) {
    console.error("Invalid route in createStackScreens:", route);
    return null;
  }
  

  const { screenName, component, children, linkStack, params } = route;
  const Stack = createStackNavigator();

  if (linkStack) {
    return null;
  }

  // Create a stack screen for the parent route
  const parentScreen = (
    <Stack.Screen
      key={screenName}
      name={screenName}
      component={component}
      initialParams={params}
      options={{ headerShown: false }}
    />
  );

  if (children) {
    // Map through the children and create stack screens for each child
    const childScreens = children.map(createStackScreens).filter(Boolean); // Filter out any null values
    // Return the parent stack screen along with child stack screens
    return [parentScreen, ...childScreens];
  } else {
    // Return only the parent stack screen for routes without children
    return [parentScreen];
  }
};

export const MainStackNavigator = () => {


  

  const Stack = createStackNavigator(); // Define Stack navigator outside the function
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false, gestureDirection: "horizontal" }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SaintSettings"
        component={SaintSettingsScreen}
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
    {RouteConfig.flatMap((route) => createStackScreens(route))}

      
    </Stack.Navigator>
  );
};