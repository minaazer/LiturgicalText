/** @format */

import React, {useEffect} from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, View, Text } from "react-native";
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
import {
  DOTH1sc,
  DOTH3sc,
  DOTH6sc,
  DOTH9sc,
  DOTH11sc,
} from "../screens/holyWeek/hours/dOTh";
import {
  DOF1sc,
  DOF3sc,
  DOF6sc,
  DOFConfsc,
  DOF9sc,
  DOF11sc,
  DOF12sc,
} from "../screens/holyWeek/hours/dOF";
import {
  EOF1sc,
  EOF3sc,
  EOF6sc,
  EOF9sc,
  EOF11sc,
} from "../screens/holyWeek/hours/eOF";
import {
  EOTH1sc,
  EOTH3sc,
  EOTH6sc,
  EOTH9sc,
  EOTH11sc,
} from "../screens/holyWeek/hours/eOTH";
import {
  EOT1sc,
  EOT3sc,
  EOT6sc,
  EOT9sc,
  EOT11sc,
} from "../screens/holyWeek/hours/eOT";
import {
  EOW1sc,
  EOW3sc,
  EOW6sc,
  EOW9sc,
  EOW11sc,
} from "../screens/holyWeek/hours/eOW";
import {
  DOM1sc,
  DOM3sc,
  DOM6sc,
  DOM9sc,
  DOM11sc,
} from "../screens/holyWeek/hours/dOM";
import {
  DOT1sc,
  DOT3sc,
  DOT6sc,
  DOT9sc,
  DOT11sc,
} from "../screens/holyWeek/hours/dOT";
import {
  EOM1sc,
  EOM3sc,
  EOM6sc,
  EOM9sc,
  EOM11sc,
} from "../screens/holyWeek/hours/eOM";
import {
  DOW1sc,
  DOW3sc,
  DOW6sc,
  DOW9sc,
  DOW11sc,
} from "../screens/holyWeek/hours/dOW";
import {
  DaytimeLitaniessc,
  NighttimeLitaniessc,
} from "../screens/holyWeek/hours/litanies";

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
          {
            screenName: "DaytimeLitaniessc",
            label: "Daytime Litanies",
            component: DaytimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "EveOfMonday",
        label: "Eve of Monday",
        component: EveOfMonday,
        children: [
          { screenName: "EOM1sc", label: "1st Hour", component: EOM1sc },
          { screenName: "EOM3sc", label: "3rd Hour", component: EOM3sc },
          { screenName: "EOM6sc", label: "6th Hour", component: EOM6sc },
          { screenName: "EOM9sc", label: "9th Hour", component: EOM9sc },
          { screenName: "EOM11sc", label: "11th Hour", component: EOM11sc },
          {
            screenName: "NighttimeLitaniessc",
            label: "Nighttime Litanies",
            component: NighttimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "DayOfMonday",
        label: "Day of Monday",
        component: DayOfMonday,
        children: [
          { screenName: "DOM1sc", label: "1st Hour", component: DOM1sc },
          { screenName: "DOM3sc", label: "3rd Hour", component: DOM3sc },
          { screenName: "DOM6sc", label: "6th Hour", component: DOM6sc },
          { screenName: "DOM9sc", label: "9th Hour", component: DOM9sc },
          { screenName: "DOM11sc", label: "11th Hour", component: DOM11sc },
          {
            screenName: "DaytimeLitaniessc",
            label: "Daytime Litanies",
            component: DaytimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "EveOfTuesday",
        label: "Eve of Tuesday",
        component: EveOfTuesday,
        children: [
          { screenName: "EOT1sc", label: "1st Hour", component: EOT1sc },
          { screenName: "EOT3sc", label: "3rd Hour", component: EOT3sc },
          { screenName: "EOT6sc", label: "6th Hour", component: EOT6sc },
          { screenName: "EOT9sc", label: "9th Hour", component: EOT9sc },
          { screenName: "EOT11sc", label: "11th Hour", component: EOT11sc },
          {
            screenName: "NighttimeLitaniessc",
            label: "Nighttime Litanies",
            component: NighttimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "DayOfTuesday",
        label: "Day of Tuesday",
        component: DayOfTuesday,
        children: [
          { screenName: "DOT1sc", label: "1st Hour", component: DOT1sc },
          { screenName: "DOT3sc", label: "3rd Hour", component: DOT3sc },
          { screenName: "DOT6sc", label: "6th Hour", component: DOT6sc },
          { screenName: "DOT9sc", label: "9th Hour", component: DOT9sc },
          { screenName: "DOT11sc", label: "11th Hour", component: DOT11sc },
          {
            screenName: "DaytimeLitaniessc",
            label: "Daytime Litanies",
            component: DaytimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "EveOfWednesday",
        label: "Eve of Wednesday",
        component: EveOfWednesday,
        children: [
          { screenName: "EOW1sc", label: "1st Hour", component: EOW1sc },
          { screenName: "EOW3sc", label: "3rd Hour", component: EOW3sc },
          { screenName: "EOW6sc", label: "6th Hour", component: EOW6sc },
          { screenName: "EOW9sc", label: "9th Hour", component: EOW9sc },
          { screenName: "EOW11sc", label: "11th Hour", component: EOW11sc },
          {
            screenName: "NighttimeLitaniessc",
            label: "Nighttime Litanies",
            component: NighttimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "DayOfWednesday",
        label: "Day of Wednesday",
        component: DayOfWednesday,
        children: [
          { screenName: "DOW1sc", label: "1st Hour", component: DOW1sc },
          { screenName: "DOW3sc", label: "3rd Hour", component: DOW3sc },
          { screenName: "DOW6sc", label: "6th Hour", component: DOW6sc },
          { screenName: "DOW9sc", label: "9th Hour", component: DOW9sc },
          { screenName: "DOW11sc", label: "11th Hour", component: DOW11sc },
          {
            screenName: "DaytimeLitaniessc",
            label: "Daytime Litanies",
            component: DaytimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "EveOfThursday",
        label: "Eve of Covenant Thursday",
        component: EveOfThursday,
        children: [
          { screenName: "EOTH1sc", label: "1st Hour", component: EOTH1sc },
          { screenName: "EOTH3sc", label: "3rd Hour", component: EOTH3sc },
          { screenName: "EOTH6sc", label: "6th Hour", component: EOTH6sc },
          { screenName: "EOTH9sc", label: "9th Hour", component: EOTH9sc },
          { screenName: "EOTH11sc", label: "11th Hour", component: EOTH11sc },
          {
            screenName: "NighttimeLitaniessc",
            label: "Nighttime Litanies",
            component: NighttimeLitaniessc,
            linkStack: true,
          },
        ],
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
          {
            screenName: "DaytimeLitaniessc",
            label: "Daytime Litanies",
            component: DaytimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "EveOfFriday",
        label: "Eve of Good Friday",
        component: EveOfFriday,
        children: [
          { screenName: "EOF1sc", label: "1st Hour", component: EOF1sc },
          { screenName: "EOF3sc", label: "3rd Hour", component: EOF3sc },
          { screenName: "EOF6sc", label: "6th Hour", component: EOF6sc },
          { screenName: "EOF9sc", label: "9th Hour", component: EOF9sc },
          { screenName: "EOF11sc", label: "11th Hour", component: EOF11sc },
          {
            screenName: "NighttimeLitaniessc",
            label: "Nighttime Litanies",
            component: NighttimeLitaniessc,
            linkStack: true,
          },
        ],
      },
      {
        screenName: "DayOfFriday",
        label: "Day of Good Friday",
        component: DayOfFriday,
        children: [
          { screenName: "DOF1sc", label: "1st Hour", component: DOF1sc },
          { screenName: "DOF3sc", label: "3rd Hour", component: DOF3sc },
          { screenName: "DOF6sc", label: "6th Hour", component: DOF6sc },
          {
            screenName: "DOFConfsc",
            label: "Confession of the Thief",
            component: DOFConfsc,
          },
          { screenName: "DOF9sc", label: "9th Hour", component: DOF9sc },
          { screenName: "DOF11sc", label: "11th Hour", component: DOF11sc },
          { screenName: "DOF12sc", label: "12th Hour", component: DOF12sc },
        ],
      },
      {
        screenName: "DaytimeLitaniessc",
        label: "Daytime Litanies",
        component: DaytimeLitaniessc,
      },
      {
        screenName: "NighttimeLitaniessc",
        label: "Nighttime Litanies",
        component: NighttimeLitaniessc,
      },
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

const Drawer = createDrawerNavigator();
const screenWidth = Dimensions.get("window").width;

const LeftDrawerContent = ({ navigation, currentRoute, ...props }) => {
  const drawerItemsByRoute = RouteConfig; // Access all route configurations

  const closeDrawerAndNavigate = (routeName) => {
    navigation.navigate(routeName);
    navigation.closeDrawer();
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

    const [settings] = React.useContext(SettingsContext);
    const developerMode = settings.developerMode;
  
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
      <DrawerItem
        label="Calendar"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("Calendar")}
      />
      
            <DrawerItem
        label="Saints Settings"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("SaintSettings")}
      />
    
      {developerMode && (
        <DrawerItem
        label="Doxologies"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("Doxologies")}
      />
      )}
      {developerMode && (
            <DrawerItem
        label="Seasonal Doxologies"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("SeasonalDoxologies")}
      />
      )}
      <DrawerItem
        label="About"
        style={presentationStyles.drawerItem}
        labelStyle={presentationStyles.drawerLabel}
        onPress={() => closeDrawerAndNavigate("About")}
      />
      <View style={presentationStyles.drawerLineBreak}></View>

      <GoLive />

      <CurrentSeason />

      <View style={presentationStyles.drawerLineBreak}></View>

    </DrawerContentScrollView>
  );
};

// Define the MainStackNavigator which nests all the main screens.

const createStackScreens = (route) => {
  if (!route || !route.screenName) {
    console.error("Invalid route:", route);
    return null; // Return null if route is invalid
  }

  const { screenName, component, children, linkStack } = route;
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
        swipeEdgeWidth: screenWidth / 3,
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
