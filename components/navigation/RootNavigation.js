/** @format */

import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, View, Text } from "react-native";
import { presentationStyles } from "../css/presentationStyles";
import { useNavigationState } from "@react-navigation/native";
import SettingsScreen from "../screens/settings";
import Home from "../screens/home";
import Kiahk from "../screens/kiahk";
import Glorification from "../screens/glorification";
import HolyWeek from "../screens/holyWeek";
import DayOfSunday from "../screens/holyWeek/days/dayOfSunday";
import EveOfMonday from "../screens/holyWeek/days/eveOfMonday";
import DayOfMonday from "../screens/holyWeek/days/dayOfMonday";
import EveOfTuesday from "../screens/holyWeek/days/eveOfTuesday";
import DayOfTuesday from "../screens/holyWeek/days/dayOfTuesday";
import EveOfWednesday from "../screens/holyWeek/days/eveOfWednesday";
import DayOfWednesday from "../screens/holyWeek/days/dayOfWednesday";
import EveOfThursday from "../screens/holyWeek/days/eveOfThursday";
import DayOfThursday from "../screens/holyWeek/days/dayOfThursday";
import EveOfFriday from "../screens/holyWeek/days/eveOfFriday";
import DayOfFriday from "../screens/holyWeek/days/dayOfFriday";
import { DOS9sc, DOS11sc } from "../screens/holyWeek/hours/dOS";
import { DOTH1sc , DOTH3sc , DOTH6sc , DOTH9sc , DOTH11sc } from "../screens/holyWeek/hours/dOTh";
import { DOF1sc , DOF3sc , DOF6sc , DOFConfsc , DOF9sc , DOF11sc , DOF12sc } from "../screens/holyWeek/hours/dOF";

const RouteConfig = [
  {
    screenName: "Glorification",
    label: "Glorification",
    component: Glorification,
  },
  {
    screenName: "Kiahk",
    label: "Kiahk Praises",
    component: Kiahk,
  },
  {
    screenName: "HolyWeek",
    label: "Holy Week",
    component: HolyWeek,
    children: [
      {
        screenName: "DayOfSunday",
        label: "Day of Sunday",
        component: DayOfSunday,
        children: [
          { screenName: "DOS9sc", label: "9th Hour", component: DOS9sc },
          { screenName: "DOS11sc", label: "11th Hour", component: DOS11sc },
        ],
      },
      {
        screenName: "EveOfMonday",
        label: "Eve of Monday",
        component: EveOfMonday,
      },
      {
        screenName: "DayOfMonday",
        label: "Day of Monday",
        component: DayOfMonday,
      },
      {
        screenName: "EveOfTuesday",
        label: "Eve of Tuesday",
        component: EveOfTuesday,
      },
      {
        screenName: "DayOfTuesday",
        label: "Day of Tuesday",
        component: DayOfTuesday,
      },
      {
        screenName: "EveOfWednesday",
        label: "Eve of Wednesday",
        component: EveOfWednesday,
      },
      {
        screenName: "DayOfWednesday",
        label: "Day of Wednesday",
        component: DayOfWednesday,
      },
      {
        screenName: "EveOfThursday",
        label: "Eve of Covenant Thursday",
        component: EveOfThursday,
      },
      {
        screenName: "DayOfThursday",
        label: "Day of Covenant Thursday",
        component: DayOfThursday,
        children: [
          { screenName: "DOTH1sc", label: "1st Hour", component: DOTH1sc },
          { screenName: "DOTH3sc", label: "3rd Hour", component: DOTH3sc },
          { screenName: "DOTH6sc", label: "6th Hour", component: DOTH6sc },
          { screenName: "DOTH9sc", label: "9th Hour", component: DOTH9sc },
          { screenName: "DOTH11sc", label: "11th Hour", component: DOTH11sc },
        ],
      },
      {
        screenName: "EveOfFriday",
        label: "Eve of Good Friday",
        component: EveOfFriday,

      },
      {
        screenName: "DayOfFriday",
        label: "Day of Good Friday",
        component: DayOfFriday,
        children: [
          { screenName: "DOF1sc", label: "1st Hour", component: DOF1sc },
          { screenName: "DOF3sc", label: "3rd Hour", component: DOF3sc },
          { screenName: "DOF6sc", label: "6th Hour", component: DOF6sc },
          { screenName: "DOFConfsc", label: "Confession of the Thief", component: DOFConfsc },
          { screenName: "DOF9sc", label: "9th Hour", component: DOF9sc },
          { screenName: "DOF11sc", label: "11th Hour", component: DOF11sc },
          { screenName: "DOF12sc", label: "12th Hour", component: DOF12sc },
        ],
      }
    ],
  },
];

const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;

const LeftDrawerContent = ({ navigation, currentRoute, ...props }) => {
  const drawerItemsByRoute = RouteConfig; // Access all route configurations


  const closeDrawerAndNavigate = (routeName) => {
    navigation.navigate(routeName);
    navigation.closeDrawer();
  };

  const findParentAndSiblings = (items, targetRoute, parent = null) => {
    for (const item of items) {
      if (item.screenName === targetRoute) {
        // Include parent and its siblings, excluding the target route
        if (parent) {
          return [
            { ...parent, type: "parent" }, // Add type property to parent
            ...items
              .filter(
                (sibling) =>
                  sibling.screenName !== targetRoute && sibling !== parent
              )
              .map((sibling) => ({ ...sibling, type: "child" })), // Add type property to siblings
          ];
        } else {
          return items
            .filter((sibling) => sibling.screenName !== targetRoute)
            .map((sibling) => ({ ...sibling, type: "child" })); // Add type property to siblings
        }
      } else if (Array.isArray(item.children)) {
        const found = findParentAndSiblings(item.children, targetRoute, item);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };
  

  const renderDrawerItems = (items) => {
    const renderedItems = items.map((item, index) => (
      <React.Fragment key={index}>
        <DrawerItem
          label={item.label}
          style={presentationStyles.drawerItem}
          labelStyle={presentationStyles.drawerLabel}
          onPress={() => closeDrawerAndNavigate(item.screenName)}
        />
        {item.type === "parent" && (
          <View style={presentationStyles.drawerLineBreak}></View>
        )}
      </React.Fragment>
    ));

    // Add line break after rendering all the siblings
    renderedItems.push(
      <View
        key="lineBreakAfterSiblings"
        style={presentationStyles.drawerLineBreak}
      ></View>
    );

    return renderedItems;
  };

  // Check if drawerItemsByRoute is defined before using it
  const dynamicDrawerItems =
    drawerItemsByRoute &&
    findParentAndSiblings(drawerItemsByRoute, currentRoute);

  return (
    <DrawerContentScrollView
      style={presentationStyles.drawerContentScrollView}
      contentContainerStyle={presentationStyles.drawerContentContainer}
      {...props}
    >
      <View style={presentationStyles.drawerHeaderContainer}>
        <Text style={presentationStyles.drawerHeaderText}>
          Liturgical Books
        </Text>
      </View>

      <View style={presentationStyles.drawerLineBreak}></View>

      <DrawerItem
        label="Home"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("Home")}
      />

      {dynamicDrawerItems && renderDrawerItems(dynamicDrawerItems)}

      <DrawerItem
        label="Settings"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("Settings")}
      />
    </DrawerContentScrollView>
  );
};

// Define the MainStackNavigator which nests all the main screens.

const createStackScreens = (route) => {
  if (!route || !route.screenName) {
    console.error("Invalid route:", route);
    return null; // Return null if route is invalid
  }

  const { screenName, component, children } = route;
  const Stack = createStackNavigator();

  // Create a stack screen for the parent route
  const parentScreen = (
    <Stack.Screen
      key={screenName}
      name={screenName}
      component={component}
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

const MainStackNavigator = () => {
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

      {RouteConfig.map((route) => createStackScreens(route))}
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const state = useNavigationState((state) => state);
  const currentState = state?.routes[state.index].state;
  const currentRoute = currentState?.routes[currentState.index].name;

  return (
    <Drawer.Navigator
      initialRouteName="MainStack" // Set the initial route to MainStack
      screenOptions={{
        gestureEnabled: true,
        swipeEdgeWidth: screenWidth / 3,
        drawerType: "slide",
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
