/** @format */

// screens/Home.js

import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/background.png";
import { presentationStyles } from "../css/presentationStyles";
import HolyWeekData from "../../data/holyWeek/holyWeek.json";

const HolyWeek = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View style={presentationStyles.pageContainer}>
          <View style={presentationStyles.headerContainer}>
            <Text style={presentationStyles.pageHeader}>Holy</Text>
            <Text style={presentationStyles.pageHeader}>Pascha</Text>
            <Text style={presentationStyles.pageHeader}>Week</Text>
          </View>

          <View style={presentationStyles.daysContainer}>
            <ScrollView contentContainerStyle={presentationStyles.iconRow}>
              {HolyWeekData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={presentationStyles.itemContainer}
                  onPress={() => navigation.navigate(`${item.service[0].replace(/\s+/g, "-")}` , { serviceName: item.service[0] })}
                >
                  <Text style={item.service[0].startsWith("DAY") ? presentationStyles.pageMenuAlt : presentationStyles.pageMenu}>
                    {item.service[0]}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HolyWeek;
