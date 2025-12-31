/** @format */

// screens/Home.js

import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/background.png";
import { presentationStyles } from "../css/presentationStyles";
import HolyWeekData from "../../data/jsons/holyWeek.json";

const HolyWeek = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const isCompactPortrait = isPortrait && width < 450;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View style={{ flex: 1, width: "100%", alignItems: "stretch" }}>
          <View
            style={
              isCompactPortrait
                ? presentationStyles.headerLinksStacked
                : presentationStyles.headerLinksRow
            }
          >
            <View
              style={[
                presentationStyles.sideHeaderContainer,
                {
                  flex: isCompactPortrait ? 0 : 1,
                  width: isCompactPortrait ? "100%" : undefined,
                },
              ]}
            >
              {isCompactPortrait ? (
                <Text style={presentationStyles.pageHeader}>Holy Pascha Week</Text>
              ) : (
                <>
                  <Text style={presentationStyles.pageHeader}>Holy</Text>
                  <Text style={presentationStyles.pageHeader}>Pascha</Text>
                  <Text style={presentationStyles.pageHeader}>Week</Text>
                </>
              )}
            </View>

            <View
              style={[
                presentationStyles.sideContentContainer,
                {
                  flex: isCompactPortrait ? 1 : 3,
                  justifyContent: isCompactPortrait ? "flex-start" : "center",
                },
              ]}
            >
              <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={[
                  presentationStyles.iconRow,
                  { flexGrow: 1, justifyContent: "center" },
                ]}
              >
                {HolyWeekData.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={presentationStyles.itemContainer}
                    onPress={() =>
                      navigation.navigate(
                        `${item.service[0].replace(/\s+/g, "-")}`,
                        { serviceName: item.service[0] }
                      )
                    }
                  >
                    <Text
                      style={
                        item.service[0].startsWith("DAY")
                          ? presentationStyles.pageMenuAlt
                          : presentationStyles.pageMenu
                      }
                    >
                      {item.service[0]}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HolyWeek;
