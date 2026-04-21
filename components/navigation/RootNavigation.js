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
  Keyboard,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingsContext from "../../settings/settingsContext";
import SettingsScreen from "../screens/settings";
import CalendarScreen from "../screens/calendar";
import SaintSettingsScreen from "../screens/saintSettings";
import GoLive from "../reusableComponents/goLive";
import AboutScreen from "../screens/about";
import ReportIssueScreen from "../screens/reportIssue";
import Home from "../screens/home";
import BibleScreen from "../screens/bible/bibleScreen";
import ChapterScreen from "../screens/bible/chapterScreen";
import HolyWeek from "../screens/holyWeek";
import OffertoryScreen from "../screens/liturgy/offertoryScreen";
import HolyWeekDayScreen from "../screens/holyWeek/hwDayScreen";
import HolyWeekHourScreen from "../screens/holyWeek/hwHourScreen";
import Doxologies from "../screens/doxologies";
import GlorificationScreen from "../screens/glorificationScreen";
import PsalmodyScreen from "../screens/psalmodyScreen";
import TheotokiasIndexScreen from "../screens/theotokias";
import MatrimonyScreen from "../screens/matrimonyScreen";
import UnctionScreen from "../screens/unctionScreen";
import Songs from "../screens/songs";
import SongsScreen from "../screens/songs/songsScreen";
import HolyWeekData from "../../data/jsons/holyWeek.json";
import SongsData from "../../data/jsons/songs.json";
import { useNavigationState } from "@react-navigation/native";
import { getJson } from "../functions/jsonCache";
import { settingsPalette } from "../reusableComponents/settingsUI";


const screenWidth = Dimensions.get('window').width;

const drawerIconByRoute = {
  Home: "home-outline",
  Settings: "settings-outline",
  ReportIssue: "flag-outline",
  SaintSettings: "people-outline",
  About: "information-circle-outline",
  Calendar: "calendar-outline",
  Doxologies: "musical-notes-outline",
  Theotokias: "library-outline",
  HolyWeek: "book-outline",
  Psalmody: "bookmarks-outline",
  Bible: "book-outline",
  Matrimony: "heart-outline",
  Unction: "medical-outline",
  Songs: "musical-note-outline",
};

const DEV_ONLY_DRAWER_ROUTES = new Set([
  "Doxologies",
  "Theotokias",
  "Matrimony",
  "Unction",
  "Offertory",
]);

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
    screenName: "Offertory",
    label: "Offertory",
    component: OffertoryScreen,
  },
  {
    screenName: "Glorification",
    label: "Glorification",
    component: GlorificationScreen,
  },
  {
    screenName: "Psalmody",
    label: "Psalmody",
    component: PsalmodyScreen,
    children: [
      { screenName: "Doxologies", label: "Doxologies", component: Doxologies },
      { screenName: "Theotokias", label: "Theotokias Index", component: TheotokiasIndexScreen },
    ],
  },
  {
    screenName: "Matrimony",
    label: "Holy Matrimony",
    component: MatrimonyScreen,
  },
  {
    screenName: "Unction",
    label: "Unction of the Sick",
    component: UnctionScreen,
  },

];

const Drawer = createDrawerNavigator();

const DrawerButton = React.memo(({
  label,
  routeName,
  navigation,
  active,
  showIcon = false,
}) => {
  const handlePress = React.useCallback(() => {
    
    navigation.closeDrawer();
    navigation.navigate("MainStack", { screen: routeName });
  }, [navigation, routeName]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={handlePress}
      style={({ pressed }) => [
        drawerStyles.item,
        !showIcon && drawerStyles.itemNoIcon,
        active && drawerStyles.itemActive,
        pressed && drawerStyles.pressed,
      ]}
    >
      {showIcon ? (
        <View style={[drawerStyles.itemIcon, active && drawerStyles.itemIconActive]}>
        <Ionicons
          name={drawerIconByRoute[routeName] || "ellipse-outline"}
          size={18}
          color={active ? "#FFFFFF" : settingsPalette.primary}
        />
        </View>
      ) : null}
      <Text
        style={[drawerStyles.itemLabel, active && drawerStyles.itemLabelActive]}
        numberOfLines={2}
      >
        {label}
      </Text>
    </Pressable>
  );
});

const findParentAndSiblings = (items, targetRoute, parent = null, grandParent = null) => {
  for (const item of items) {
    if (item.screenName === targetRoute) {
      const parentItem = parent ? { ...parent, type: "parent" } : null;
      const grandParentItem = grandParent ? { ...grandParent, type: "parent" } : null;
      const currentItem = { ...item, type: "current" };
      const siblings = items
        .filter(
          (sibling) =>
            sibling.screenName !== targetRoute &&
            sibling !== parent &&
            sibling !== grandParent
        )
        .map((sibling) => ({ ...sibling, type: "child" }));
      return [grandParentItem, parentItem, currentItem, ...siblings].filter(Boolean);
    } else if (Array.isArray(item.children)) {
      const found = findParentAndSiblings(item.children, targetRoute, item, parent);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

const findRouteTrail = (items, targetRoute, trail = []) => {
  for (const item of items) {
    const nextTrail = [...trail, item];
    if (item.screenName === targetRoute) {
      return nextTrail;
    }

    if (Array.isArray(item.children)) {
      const found = findRouteTrail(item.children, targetRoute, nextTrail);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

const getFocusedRouteChain = (state) => {
  let current = state;
  const chain = [];

  while (current?.routes && typeof current.index === "number") {
    const route = current.routes[current.index];
    if (!route) {
      break;
    }
    chain.push(route);
    current = route.state;
  }

  return chain;
};

const WRAPPER_ROUTE_NAMES = new Set(["MainStack", "MainContent"]);

const drawerStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: settingsPalette.background,
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 22,
    gap: 4,
  },
  header: {
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginHorizontal: -12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: settingsPalette.primary,
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  headerTextBlock: {
    flex: 1,
    minWidth: 0,
  },
  headerEyebrow: {
    color: "#DCEBFA",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  headerTitle: {
    marginTop: 2,
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
  },
  item: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  itemNoIcon: {
    minHeight: 42,
    paddingLeft: 12,
  },
  itemActive: {
    backgroundColor: settingsPalette.blueSoft,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  itemIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  itemIconActive: {
    backgroundColor: settingsPalette.primary,
  },
  itemLabel: {
    flex: 1,
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "800",
  },
  itemLabelActive: {
    color: settingsPalette.primary,
  },
  divider: {
    height: 1,
    marginVertical: 8,
    backgroundColor: settingsPalette.border,
  },
  pressed: {
    opacity: 0.75,
  },
});

const LeftDrawerContent = React.memo(({ navigation, routeConfig, ...props }) => {
  const drawerItemsByRoute = routeConfig;
  const state = useNavigationState((state) => state);
  const focusedRouteChain = getFocusedRouteChain(state);
  const currentRouteState = focusedRouteChain[focusedRouteChain.length - 1];
  const nearestContentRouteState = [...focusedRouteChain]
    .reverse()
    .find((route) => route?.name && !WRAPPER_ROUTE_NAMES.has(route.name));
  const currentRoute =
    nearestContentRouteState?.name || currentRouteState?.name || "Home";
  const contextRouteState = [...focusedRouteChain]
    .reverse()
    .find((route) => route?.params?.drawerContextRouteName);
  const drawerContextRouteName =
    contextRouteState?.params?.drawerContextRouteName || currentRoute;
  const isLinkedScreenContext = drawerContextRouteName !== currentRoute;
  const isDrawerRouteActive = React.useCallback(
    (routeName) =>
      currentRoute === routeName || drawerContextRouteName === routeName,
    [currentRoute, drawerContextRouteName]
  );

  const dynamicDrawerItems = React.useMemo(
    () => {
      if (!drawerItemsByRoute) {
        return null;
      }

      if (isLinkedScreenContext) {
        const trail = findRouteTrail(drawerItemsByRoute, drawerContextRouteName);
        if (!trail) {
          return null;
        }

        return trail.slice(-2).map((item) => ({ ...item, type: "parent" }));
      }

      return findParentAndSiblings(drawerItemsByRoute, drawerContextRouteName);
    },
    [drawerItemsByRoute, drawerContextRouteName, isLinkedScreenContext]
  );

  const renderDrawerItems = (items) => {
    const visibleItems = developerMode
      ? items
      : items.filter((item) => !DEV_ONLY_DRAWER_ROUTES.has(item.screenName));

    if (!visibleItems.length) {
      return null;
    }

    const renderedItems = visibleItems.map((item, index) => (
      <React.Fragment key={index}>
        <DrawerButton
          navigation={navigation}
          label={item.label}
          routeName={item.screenName}
          active={isDrawerRouteActive(item.screenName)}
          showIcon={false}
        />
        {item.type === "parent" && (
          <View style={drawerStyles.divider}></View>
        )}
      </React.Fragment>
    ));

    renderedItems.push(
      <View
        key="lineBreakAfterSiblings"
        style={drawerStyles.divider}
      ></View>
    );

    return renderedItems;
  };

  const [settings] = React.useContext(SettingsContext);
  const developerMode = settings.developerMode;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={drawerStyles.scroll}
        contentContainerStyle={drawerStyles.content}
        {...props}
      >
        <View style={drawerStyles.header}>
          <View style={drawerStyles.headerIcon}>
            <Ionicons name="book-outline" size={24} color="#FFFFFF" />
          </View>
          <View style={drawerStyles.headerTextBlock}>
            <Text style={drawerStyles.headerEyebrow}>St. Mary</Text>
            <Text style={drawerStyles.headerTitle}>Liturgical Books</Text>
          </View>
        </View>

        <DrawerButton
          navigation={navigation}
          label="Home"
          routeName="Home"
          active={isDrawerRouteActive("Home")}
          showIcon
        />

        {/*dynamic drawer items*/}
        {dynamicDrawerItems && renderDrawerItems(dynamicDrawerItems)}
        
        {/*developer drawer items*/}
        {developerMode && (
          <View style={drawerStyles.divider}></View>
        )}
        {developerMode && (
          <DrawerButton
            navigation={navigation}
            label="Doxologies"
            routeName="Doxologies"
            active={isDrawerRouteActive("Doxologies")}
            showIcon={false}
          />
        )}
        
        {
          developerMode && (
          <DrawerButton
            navigation={navigation}
            label="Theotokias Index"
            routeName="Theotokias"
            active={isDrawerRouteActive("Theotokias")}
            showIcon={false}
          />
        )
        }
        <View style={drawerStyles.divider}></View>
        <DrawerButton
          navigation={navigation}
          label="Settings"
          routeName="Settings"
          active={isDrawerRouteActive("Settings")}
          showIcon
        />
        <DrawerButton
          navigation={navigation}
          label="Report Issue"
          routeName="ReportIssue"
          active={isDrawerRouteActive("ReportIssue")}
          showIcon
        />

        <DrawerButton
          navigation={navigation}
          label="Saints Settings"
          routeName="SaintSettings"
          active={isDrawerRouteActive("SaintSettings")}
          showIcon
        />

        <DrawerButton
          navigation={navigation}
          label="About"
          routeName="About"
          active={isDrawerRouteActive("About")}
          showIcon
        />

        <View style={drawerStyles.divider}></View>
        <DrawerButton
          navigation={navigation}
          label="Calendar"
          routeName="Calendar"
          active={isDrawerRouteActive("Calendar")}
          showIcon
        />

        <GoLive
          onOpenCalendar={() => {
            navigation.closeDrawer();
            navigation.navigate("MainStack", { screen: "Calendar" });
          }}
        />

        <View style={drawerStyles.divider}></View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
});

const createStackScreens = (route) => {
  if (!route || !route.screenName) {
    console.error("Invalid route:", route);
    return null;
  }

  const { screenName, label, component, children, linkStack, params } = route;
  const Stack = createStackNavigator();

  if (linkStack) {
    return null;
  }

  const parentScreen = (
    <Stack.Screen
      key={screenName}
      name={screenName}
      component={component}
      initialParams={{ ...params, drawerLabel: label || screenName }}
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

const MainStackNavigator = ({ routeConfig }) => {
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
      <Stack.Screen
        name="ReportIssue"
        component={ReportIssueScreen}
        options={{ headerShown: false }}
      />
      {routeConfig.map((route) => createStackScreens(route))}
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const [holyWeekJson, setHolyWeekJson] = React.useState(HolyWeekData);
  const [songsJson, setSongsJson] = React.useState(SongsData);

  React.useEffect(() => {
    let isMounted = true;
    getJson("holyWeek.json", HolyWeekData).then((data) => {
      if (isMounted && data) {
        setHolyWeekJson(data);
      }
    });
    getJson("songs.json", SongsData).then((data) => {
      if (isMounted && data) {
        setSongsJson(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const routeConfig = React.useMemo(
    () => [
      ...StaticScreens,
      ...transformHolyWeekData(holyWeekJson),
      ...transformSongsData(songsJson),
    ],
    [holyWeekJson, songsJson]
  );

  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        gestureEnabled: false,
        swipeEdgeWidth: screenWidth * 0.2,
        drawerType: "front",
        drawerPosition: "left", // Explicitly set to left
        overlayColor: "rgba(0,0,0,0.5)",
        unmountOnBlur: false,
        freezeOnBlur: true,
      }}
      detachInactiveScreens={false}
      drawerContent={(props) => (
        <LeftDrawerContent {...props} routeConfig={routeConfig} />
      )}
    >
      <Drawer.Screen
        name="MainStack"
        options={{ headerShown: false, title: "Home" }}
      >
        {() => <MainStackNavigator routeConfig={routeConfig} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default RootNavigation;
