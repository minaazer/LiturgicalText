/** @format */

import React, {useEffect, useRef} from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { TapGestureHandler , State } from 'react-native-gesture-handler';

import { Dimensions, View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback , Keyboard } from "react-native";
import { presentationStyles } from "../css/presentationStyles";
import { useNavigationState } from "@react-navigation/native";
import SettingsContext from "../../settings/settingsContext";
import SettingsScreen from "../screens/settings";
import CalendarScreen from "../screens/calendar";
import SaintSettingsScreen from "../screens/saintSettings";
import GoLive from "../reusableComponents/goLive";
import CurrentSeason from "../reusableComponents/currentSeason";
import AboutScreen from "../screens/about";
import Home from "../screens/home";
import BibleScreen from "../screens/bible/bibleScreen";
import ChapterScreen from "../screens/bible/chapterScreen";
import HolyWeekNew from "../screens/holyWeekNew";
import HolyWeekDayScreen from "../screens/holyWeek/hwDayScreen";
import HolyWeekHourScreen from "../screens/holyWeek/hwHourScreen";
import Kiahk from "../screens/kiahk";
import Psalmody from "../screens/psalmody";
import KiahkDoxologies from "../screens/kiahkDoxologies";
import Doxologies from "../screens/doxologies";
import SeasonalDoxologies from "../screens/seasonalDoxologies";
import Glorification from "../screens/glorification";
import Songs from "../screens/songs";
import ComfortSongs from "../screens/songs/comfortSongs";
import NayroozSongs from "../screens/songs/nayroozSongs";
import ResurrectionSongs from "../screens/songs/resurrectionSongs";
import StMarySongs from "../screens/songs/stMarySongs";
import AllSongs from "../screens/songs/allSongs";


import HolyWeekData from "../../data/holyWeek/holyWeek.json";

const transformHolyWeekData = (holyWeekData) => {
  // Transform holy week data into a nested structure
  const children = holyWeekData.map((item) => ({
    screenName: item.service[0].replace(/\s+/g, "-"), // Unique name for the service
    label: item.service[0], // Label for the service
    component: HolyWeekDayScreen, // Main component for the service
    params: { serviceName: item.service[0] }, // Pass additional params
    children: item.hours.map((hour) => ({
      screenName: hour.linkStack ? `${item.service[0].replace(/\s+/g, "-")}-${hour.hour[0].replace(/\s+/g, "-")}` : `${item.service[0].replace(/\s+/g, "-")}-${hour.hour[0].replace(/\s+/g, "-")}`,
      label: hour.hour[0], // Label for the hour
      component: HolyWeekHourScreen,
      params: { serviceName: item.service[0], hourName: hour.hour[0] }, // Pass additional params
      linkStack: hour.linkStack ? hour.linkStack : false, // Link to the stack if specified 
    })),
  }));
  console.log(children[5].children);
  // Return the parent screen with all the transformed children
  return [
    {
      screenName: "HolyWeekNew",
      label: "Holy Pascha Week",
      component: HolyWeekNew,
      children: children, // Attach the transformed children here
    },
  ];
};




const StaticScreens = [
  {
    screenName: "Bible",
    label: "The Holy Bible",
    component: BibleScreen,
    children: [
      {
        screenName: "ChapterScreen",
        label: "Chapter",
        component: ChapterScreen
      }
    ]
  },
  {
    screenName: "Glorification",
    label: "Glorification",
    component: Glorification,
  },
  {
    screenName: "Kiahk",
    label: "Kiahk Praises",
    component: Kiahk,
    children: [{screenName: "KiahkDoxologies", label: "Kiahk Doxologies", component: KiahkDoxologies, },],
  },
  {
    screenName: "Psalmody",
    label: "Psalmody",
    component: Psalmody,
    children: [{screenName: "Doxologies", label: "Doxologies", component: Doxologies, },
    {screenName: "SeasonalDoxologies", label: "Seasonal Doxologies", component: SeasonalDoxologies, },
    ],
  },
  
  {
    screenName: "Songs",
    label: "Spiritual Songs",
    component: Songs,
    children: [
      {
        screenName: "AllSongs",
        label: "All Spiritual Songs",
        component: AllSongs,
      },
      {
        screenName: "ComfortSongs",
        label: "Comfort Songs",
        component: ComfortSongs,
      },
      {
        screenName: "NayroozSongs",
        label: "Coptic New Year Songs",
        component: NayroozSongs,
      },
      {
        screenName: "ResurrectionSongs",
        label: "Resurrection Songs",
        component: ResurrectionSongs,
      },
      {
        screenName: "StMarySongs",
        label: "St Mary Songs",
        component: StMarySongs,
      },
      
    ],
  },
];

const RouteConfig = [...StaticScreens, ...transformHolyWeekData(HolyWeekData)];


const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;
const isPortrait = screenWidth < 500;



const LeftDrawerContent = ({ navigation, currentRoute, ...props }) => {
  const drawerItemsByRoute = RouteConfig; // Access all route configurations

  const DrawerButton = ({ label, routeName, navigation }) => {
    const lastTap = useRef(0);
  
    const handleTap = (event) => {
      if (event.nativeEvent.state === State.END) {
        const now = Date.now();
        if (now - lastTap.current < 300) return;
        lastTap.current = now;
  
        navigation.closeDrawer();
        requestAnimationFrame(() => {
          navigation.navigate(routeName);
        });
      }
    };
  
    return (
      <TapGestureHandler onHandlerStateChange={handleTap} numberOfTaps={1}>
        <View style={presentationStyles.drawerTouchableOpacity}>
          <Text style={presentationStyles.drawerLabel}>{label}</Text>
        </View>
      </TapGestureHandler>
    );
  };
  

  
  const findParentAndSiblings = (
    items,
    targetRoute,
    parent = null,
    grandParent = null
  ) => {
    for (const item of items) {
      if (item.screenName === targetRoute) {
        const parentItem = parent ? { ...parent, type: "parent" } : null;
        const grandParentItem = grandParent
          ? { ...grandParent, type: "parent" }
          : null;
        const siblings = items
          .filter(
            (sibling) =>
              sibling.screenName !== targetRoute &&
              sibling !== parent &&
              sibling !== grandParent
          )
          .map((sibling) => ({ ...sibling, type: "child" }));
        return [grandParentItem, parentItem, ...siblings].filter(Boolean); // Remove any null values
      } else if (Array.isArray(item.children)) {
        const found = findParentAndSiblings(
          item.children,
          targetRoute,
          item,
          parent
        );
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
        <DrawerButton navigation= {navigation} label={item.label} routeName={item.screenName} />
       
        
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

    const [settings] = React.useContext(SettingsContext);
    const developerMode = settings.developerMode;
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <ScrollView
    keyboardShouldPersistTaps="handled"
    keyboardDismissMode="on-drag"
  
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

      <DrawerButton navigation= {navigation} label="Home" routeName="Home" />


      {dynamicDrawerItems && renderDrawerItems(dynamicDrawerItems)}
      <DrawerButton navigation= {navigation} label="Settings" routeName="Settings" />

      <DrawerButton navigation= {navigation} label="Saints Settings" routeName="SaintSettings" />
      
    
      {developerMode && (
        <DrawerButton navigation= {navigation} label="Doxologies" routeName="Doxologies" />

        
      )}
      {developerMode && (
        <DrawerButton navigation= {navigation} label="Seasonal Doxologies" routeName="SeasonalDoxologies" />
            
      )}

      <DrawerButton navigation= {navigation} label="About" routeName="About" />
    
      <View style={presentationStyles.drawerLineBreak}></View>
      <DrawerButton navigation= {navigation} label="Calendar" routeName="Calendar" />
      
      <GoLive />
      
      <View style={presentationStyles.drawerLineBreak}></View>

    </ScrollView>
    </TouchableWithoutFeedback>
  );
};

// Define the MainStackNavigator which nests all the main screens.

const createStackScreens = (route) => {

  if (!route || !route.screenName) {
    console.error("Invalid route:", route);
    return null; // Return null if route is invalid
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
      {RouteConfig.map((route) => createStackScreens(route))}
      
    </Stack.Navigator>
  );
};

const RootNavigation = () => {

  const navigation = useNavigation();
  

  // Ensure the left drawer fully opens or closes
  useEffect(() => {
    const unsubscribeOpen = navigation.addListener('drawerOpen', () => {
      // Left drawer fully opened
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
