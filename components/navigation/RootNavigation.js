/** @format */

import React from "react";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard, Dimensions
} from "react-native";
import { presentationStyles } from "../css/presentationStyles";
import SettingsContext from "../../settings/settingsContext";
import SettingsScreen from "../screens/settings";
import CalendarScreen from "../screens/calendar";
import SaintSettingsScreen from "../screens/saintSettings";
import GoLive from "../reusableComponents/goLive";
import AboutScreen from "../screens/about";
import Home from "../screens/home";
import BibleScreen from "../screens/bible/bibleScreen";
import ChapterScreen from "../screens/bible/chapterScreen";
import HolyWeek from "../screens/holyWeek";
import HolyWeekDayScreen from "../screens/holyWeek/hwDayScreen";
import HolyWeekHourScreen from "../screens/holyWeek/hwHourScreen";
import Kiahk from "../screens/kiahk";
import Psalmody from "../screens/psalmody";
import KiahkDoxologies from "../screens/kiahkDoxologies";
import Doxologies from "../screens/doxologies";
import SeasonalDoxologies from "../screens/seasonalDoxologies";
import Glorification from "../screens/glorification";
import GlorificationScreen from "../screens/glorificationScreen";
import PsalmodyScreen from "../screens/psalmodyScreen";
import Songs from "../screens/songs";
import SongsScreen from "../screens/songs/songsScreen";
import HolyWeekData from "../../data/holyWeek/holyWeek.json";
import SongsData from "../../data/jsons/songs.json";
import { useNavigationState } from "@react-navigation/native";


const screenWidth = Dimensions.get('window').width;

const transformHolyWeekData = (holyWeekData) => {
  const children = holyWeekData.map((item) => ({
    screenName: item.service[0].replace(/\s+/g, "-"),
    label: item.service[0],
    component: HolyWeekDayScreen,
    params: { serviceName: item.service[0] },
    children: item.hours.map((hour) => ({
      screenName: hour.linkStack
        ? `${item.service[0].replace(/\s+/g, "-")}-${hour.hour[0].replace(
            /\s+/g,
            "-"
          )}`
        : `${item.service[0].replace(/\s+/g, "-")}-${hour.hour[0].replace(
            /\s+/g,
            "-"
          )}`,
      label: hour.hour[0],
      component: HolyWeekHourScreen,
      params: { serviceName: item.service[0], hourName: hour.hour[0] },
      linkStack: hour.linkStack ? hour.linkStack : false,
    })),
  }));
  return [
    {
      screenName: "HolyWeek",
      label: "Holy Pascha Week",
      component: HolyWeek,
      children: children,
    },
  ];
};

const transformSongsData = (SongsData) => {
  const themeMap = {};
  SongsData.forEach((song) => {
    song.themes.forEach((theme) => {
      if (!themeMap[theme]) {
        themeMap[theme] = [];
      }
      themeMap[theme].push(song);
    });
  });

  const children = Object.entries(themeMap).map(([theme]) => ({
    screenName: theme.replace(/\s+/g, "-"),
    label: theme,
    component: SongsScreen,
    params: { theme },
  }));

  const allSongsScreen = {
    screenName: "All-Spiritual-Songs",
    label: "All Spiritual Songs",
    component: SongsScreen,
    params: { theme: "" },
  };
  return [
    {
      screenName: "Songs",
      label: "Spiritual Songs",
      component: Songs,
      children: [allSongsScreen, ...children],
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
        component: ChapterScreen,
      },
    ],
  },
  {
    screenName: "Glorification",
    label: "Glorification",
    component: GlorificationScreen,
  },
  {
    screenName: "Kiahk",
    label: "Kiahk Praises",
    component: Kiahk,
    children: [
      {
        screenName: "KiahkDoxologies",
        label: "Kiahk Doxologies",
        component: KiahkDoxologies,
      },
    ],
  },
  {
    screenName: "Psalmody",
    label: "Psalmody",
    component: PsalmodyScreen,
    children: [
      { screenName: "Doxologies", label: "Doxologies", component: Doxologies },
      {
        screenName: "SeasonalDoxologies",
        label: "Seasonal Doxologies",
        component: SeasonalDoxologies,
      },
    ],
  },
];

const RouteConfig = [...StaticScreens, ...transformHolyWeekData(HolyWeekData), ...transformSongsData(SongsData)];

const Drawer = createDrawerNavigator();

const LeftDrawerContent = ({ navigation, ...props }) => {
  const drawerItemsByRoute = RouteConfig;
  const state = useNavigationState((state) => state);
  const currentState = state?.routes[state.index].state;
  const currentRoute = currentState?.routes[currentState.index]?.name || "Home";

  const DrawerButton = ({ label, routeName, navigation }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log(`Navigating to: ${routeName}`);
          navigation.closeDrawer();
          navigation.navigate("MainStack", { screen: routeName });
        }}
      >
        <View style={presentationStyles.drawerTouchableOpacity}>
          <Text style={presentationStyles.drawerLabel}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
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
        return [grandParentItem, parentItem, ...siblings].filter(Boolean);
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
        <DrawerButton
          navigation={navigation}
          label={item.label}
          routeName={item.screenName}
        />
        {item.type === "parent" && (
          <View style={presentationStyles.drawerLineBreak}></View>
        )}
      </React.Fragment>
    ));

    renderedItems.push(
      <View
        key="lineBreakAfterSiblings"
        style={presentationStyles.drawerLineBreak}
      ></View>
    );

    return renderedItems;
  };

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

        <DrawerButton navigation={navigation} label="Home" routeName="Home" />

        {dynamicDrawerItems && renderDrawerItems(dynamicDrawerItems)}
        <DrawerButton
          navigation={navigation}
          label="Settings"
          routeName="Settings"
        />

        <DrawerButton
          navigation={navigation}
          label="Saints Settings"
          routeName="SaintSettings"
        />

        {developerMode && (
          <DrawerButton
            navigation={navigation}
            label="Doxologies"
            routeName="Doxologies"
          />
        )}
        {developerMode && (
          <DrawerButton
            navigation={navigation}
            label="Seasonal Doxologies"
            routeName="SeasonalDoxologies"
          />
        )}

        <DrawerButton navigation={navigation} label="About" routeName="About" />

        <View style={presentationStyles.drawerLineBreak}></View>
        <DrawerButton
          navigation={navigation}
          label="Calendar"
          routeName="Calendar"
        />

        <GoLive />

        <View style={presentationStyles.drawerLineBreak}></View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const createStackScreens = (route) => {
  if (!route || !route.screenName) {
    console.error("Invalid route:", route);
    return null;
  }

  const { screenName, component, children, linkStack, params } = route;
  const Stack = createStackNavigator();

  if (linkStack) {
    return null;
  }

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
    const childScreens = children.map(createStackScreens).filter(Boolean);
    return [parentScreen, ...childScreens];
  } else {
    return [parentScreen];
  }
};

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
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
  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        gestureEnabled: true, // Disable to prevent gesture handler warnings with Reanimated v4
        swipeEdgeWidth: screenWidth * 0.2,
        drawerType: "front",
        drawerPosition: "left", // Explicitly set to left
        overlayColor: "rgba(0,0,0,0.5)",
      }}
      drawerContent={(props) => (
        <LeftDrawerContent {...props} />
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