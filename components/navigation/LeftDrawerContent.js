import React from "react";
import {
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { presentationStyles } from "../css/presentationStyles";
import RouteConfig from "./RouteConfig";
import SettingsContext from "../../settings/settingsContext";
import GoLive from "../reusableComponents/goLive";

export const LeftDrawerContent = ({ navigation, currentRoute, ...props }) => {
  const drawerItemsByRoute = RouteConfig;

  const closeDrawerAndNavigate = (routeName) => {
    navigation.navigate(routeName);
    navigation.closeDrawer();
  };

  const findParentAndSiblings = (items, targetRoute, parent = null, grandParent = null) => {
    for (const item of items) {
      if (item.screenName === targetRoute) {
        const parentItem = parent ? { ...parent, type: "parent" } : null;
        const grandParentItem = grandParent ? { ...grandParent, type: "parent" } : null;
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
        const found = findParentAndSiblings(item.children, targetRoute, item, parent);
        if (found) return found;
      }
    }
    return null;
  };

  const renderDrawerItems = (items) => {
    const renderedItems = items.map((item, index) => (
      <React.Fragment key={index}>
        <TouchableOpacity
          style={presentationStyles.drawerTouchableOpacity}
          onPressOut={() => closeDrawerAndNavigate(item.screenName)}
        >
          <Text style={presentationStyles.drawerLabel}>{item.label}</Text>
        </TouchableOpacity>
        {item.type === "parent" && (
          <View style={presentationStyles.drawerLineBreak}></View>
        )}
      </React.Fragment>
    ));

    renderedItems.push(
      <View key="lineBreakAfterSiblings" style={presentationStyles.drawerLineBreak}></View>
    );

    return renderedItems;
  };

  const dynamicDrawerItems = drawerItemsByRoute &&
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

      {/* Static Links */}
      <TouchableOpacity
        style={presentationStyles.drawerTouchableOpacity}
        onPressOut={() => closeDrawerAndNavigate("Home")}
      >
        <Text style={presentationStyles.drawerLabel}>Home</Text>
      </TouchableOpacity>

      {dynamicDrawerItems && renderDrawerItems(dynamicDrawerItems)}

      <TouchableOpacity
        style={presentationStyles.drawerTouchableOpacity}
        onPressOut={() => closeDrawerAndNavigate("Settings")}
      >
        <Text style={presentationStyles.drawerLabel}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={presentationStyles.drawerTouchableOpacity}
        onPressOut={() => closeDrawerAndNavigate("SaintSettings")}
      >
        <Text style={presentationStyles.drawerLabel}>Saints Settings</Text>
      </TouchableOpacity>

      {developerMode && (
        <TouchableOpacity
          style={presentationStyles.drawerTouchableOpacity}
          onPressOut={() => closeDrawerAndNavigate("Doxologies")}
        >
          <Text style={presentationStyles.drawerLabel}>Doxologies</Text>
        </TouchableOpacity>
      )}

      {developerMode && (
        <TouchableOpacity
          style={presentationStyles.drawerTouchableOpacity}
          onPressOut={() => closeDrawerAndNavigate("SeasonalDoxologies")}
        >
          <Text style={presentationStyles.drawerLabel}>Seasonal Doxologies</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={presentationStyles.drawerTouchableOpacity}
        onPressOut={() => closeDrawerAndNavigate("About")}
      >
        <Text style={presentationStyles.drawerLabel}>About</Text>
      </TouchableOpacity>

      <View style={presentationStyles.drawerLineBreak}></View>

      <TouchableOpacity
        style={presentationStyles.drawerTouchableOpacity}
        onPressOut={() => closeDrawerAndNavigate("Calendar")}
      >
        <Text style={presentationStyles.drawerLabel}>Calendar</Text>
      </TouchableOpacity>

      <GoLive />

      <View style={presentationStyles.drawerLineBreak}></View>
    </DrawerContentScrollView>
  );
};
