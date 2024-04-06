/** @format */

// screens/Home.js

import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/background.png";
import dayOfSundayImage from "../../assets/dayOfSunday.png";
import { ScrollView } from "react-native-gesture-handler";
import { presentationStyles } from "../css/presentationStyles";

const HolyWeek = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View style={presentationStyles.pageContainer}>
          <View style={presentationStyles.headerContainer}>
            <Text style={presentationStyles.pageHeader}>Holy</Text>
            <Text style={presentationStyles.pageHeader}>Week</Text>
          </View>

          <View style={presentationStyles.hoursContainer}>
            <ScrollView contentContainerStyle={presentationStyles.iconRow}>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("DayOfSunday")}
              >
                <Text style={presentationStyles.pageMenu}>Day of Palm Sunday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("EveOfMonday")}
              >
                <Text style={presentationStyles.pageMenu}>Eve of Monday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("DayOfMonday")}
              >
                <Text style={presentationStyles.pageMenu}>Day of Monday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("EveOfTuesday")}
              >
                <Text style={presentationStyles.pageMenu}>Eve of Tuesday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("DayOfTuesday")}
              >
                <Text style={presentationStyles.pageMenu}>Day of Tuesday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("EveOfWednesday")}
              >
                <Text style={presentationStyles.pageMenu}>Eve of Wednesday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("DayOfWednesday")}
              >
                <Text style={presentationStyles.pageMenu}>Day of Wednesday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("EveOfThursday")}
              >
                <Text style={presentationStyles.pageMenu}>Eve of Thursday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("DayOfThursday")}
              >
                <Text style={presentationStyles.pageMenu}>Covenant Thursday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("EveOfFriday")}
              >
                <Text style={presentationStyles.pageMenu}>Eve of Friday</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[presentationStyles.itemContainer]}
                onPress={() => navigation.navigate("DayOfFriday")}
              >
                <Text style={presentationStyles.pageMenu}>Good Friday</Text>
              </TouchableOpacity>
          </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default HolyWeek;
