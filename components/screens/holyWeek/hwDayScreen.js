/** @format */

import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import backgroundImage from "../../../assets/background.png";
import HolyWeekData from "../../../data/jsons/holyWeek.json";
import { getJson } from "../../functions/jsonCache";
import { settingsPalette } from "../../reusableComponents/settingsUI";

const HolyWeekDayScreen = ({ route }) => {
  const serviceName = route.params.serviceName;
  const [holyWeekJson, setHolyWeekJson] = useState(HolyWeekData);
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const columnCount = width >= 880 ? 2 : 1;

  useEffect(() => {
    let isMounted = true;
    getJson("holyWeek.json", HolyWeekData).then((data) => {
      if (isMounted && data) {
        setHolyWeekJson(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const serviceData = holyWeekJson.find((item) => item.service[0] === serviceName);
  const serviceHours = serviceData?.hours || [];

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="repeat"
    >
      <View style={styles.header}>
          <Text style={styles.eyebrow}>Holy Pascha Week</Text>
        <Text style={styles.title}>{serviceName}</Text>
      </View>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {serviceHours.map((item) => {
            const hourName = item.hour[0];
            const routeName = `${serviceName.replace(/\s+/g, "-")}-${hourName.replace(
              /\s+/g,
              "-"
            )}`;
            return (
              <View
                key={hourName}
                style={[
                  styles.cardShell,
                  columnCount > 1 && { width: `${100 / columnCount}%` },
                ]}
              >
                <Pressable
                  accessibilityRole="button"
                  onPress={() =>
                    navigation.navigate(routeName, {
                      serviceName,
                      hourName,
                      drawerLabel: hourName,
                    })
                  }
                  style={({ pressed }) => [styles.hourCard, pressed && styles.pressed]}
                >
                  <View style={styles.hourMarker}>
                    <Ionicons
                      name="time-outline"
                      size={21}
                      color="#FFFFFF"
                    />
                  </View>
                  <View style={styles.hourTextBlock}>
                    <Text style={styles.hourEyebrow}>Hour</Text>
                    <Text style={styles.hourTitle}>{hourName}</Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color={settingsPalette.muted}
                  />
                </Pressable>
              </View>
            );
          })}
          {serviceHours.length === 0 ? (
            <Text style={styles.loadingText}>Loading...</Text>
          ) : null}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    width: "100%",
    maxWidth: 940,
    alignSelf: "center",
    padding: 12,
    paddingBottom: 30,
    gap: 14,
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: settingsPalette.primary,
  },
  eyebrow: {
    color: "#DCEBFA",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  title: {
    marginTop: 4,
    color: "#FFFFFF",
    fontFamily: "Garamond Bold",
    fontSize: 38,
    fontWeight: "800",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  cardShell: {
    width: "100%",
    padding: 4,
  },
  hourCard: {
    minHeight: 62,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 7,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderWidth: 1,
    borderColor: "rgba(214, 227, 239, 0.86)",
  },
  hourMarker: {
    width: 38,
    height: 38,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.primary,
  },
  hourTextBlock: {
    flex: 1,
    minWidth: 0,
  },
  hourEyebrow: {
    color: settingsPalette.muted,
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  hourTitle: {
    marginTop: 1,
    color: settingsPalette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  loadingText: {
    padding: 16,
    color: settingsPalette.muted,
    fontSize: 16,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default HolyWeekDayScreen;
