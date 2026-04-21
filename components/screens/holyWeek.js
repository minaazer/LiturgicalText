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
import backgroundImage from "../../assets/background.png";
import HolyWeekData from "../../data/jsons/holyWeek.json";
import { getJson } from "../functions/jsonCache";
import { settingsPalette } from "../reusableComponents/settingsUI";

const HolyWeek = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [holyWeekJson, setHolyWeekJson] = useState(HolyWeekData);
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

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="repeat"
    >
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Coptic Orthodox Church</Text>
          <Text style={styles.title}>Holy Pascha Week</Text>
          <Text style={styles.subtitle}>
            Follow the services and hours of Holy Pascha Week.
          </Text>
        </View>

        <View style={styles.grid}>
          {holyWeekJson.map((item) => {
            const serviceName = item.service[0];
            const isDay = serviceName.startsWith("DAY");
            return (
              <View
                key={serviceName}
                style={[
                  styles.cardShell,
                  columnCount > 1 && { width: `${100 / columnCount}%` },
                ]}
              >
                <Pressable
                  accessibilityRole="button"
                  onPress={() =>
                    navigation.navigate(serviceName.replace(/\s+/g, "-"), {
                      serviceName,
                      drawerLabel: serviceName,
                    })
                  }
                  style={({ pressed }) => [
                    styles.serviceCard,
                    isDay && styles.dayCard,
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={styles.serviceIcon}>
                    <Ionicons
                      name={isDay ? "sunny-outline" : "moon-outline"}
                      size={19}
                      color={settingsPalette.primary}
                    />
                  </View>
                  <Text style={styles.serviceTitle}>{serviceName}</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color={settingsPalette.muted}
                  />
                </Pressable>
              </View>
            );
          })}
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
    padding: 16,
    paddingBottom: 30,
    gap: 14,
  },
  header: {
    paddingHorizontal: 2,
  },
  eyebrow: {
    color: settingsPalette.primary,
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  title: {
    marginTop: 4,
    color: settingsPalette.primary,
    fontFamily: "Garamond Bold",
    fontSize: 42,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 4,
    color: settingsPalette.muted,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 23,
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
  serviceCard: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderWidth: 1,
    borderColor: "rgba(214, 227, 239, 0.86)",
  },
  dayCard: {
    backgroundColor: "rgba(227, 238, 248, 0.9)",
  },
  serviceIcon: {
    width: 34,
    height: 34,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  serviceTitle: {
    flex: 1,
    minWidth: 0,
    color: settingsPalette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default HolyWeek;
