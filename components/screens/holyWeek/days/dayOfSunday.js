/** @format */
import React from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../../../assets/background.png";
import { presentationStyles } from "../../../css/presentationStyles";

const DayOfSunday = () => {
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
            <Text style={presentationStyles.pageHeader}>Day of</Text>
            <Text style={presentationStyles.pageHeader}>Palm Sunday</Text>
          </View>

          <View style={presentationStyles.hoursContainer}>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS9sc")}
            >
              <Text style={presentationStyles.pageMenu}>9th Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS11sc")}
            >
              <Text style={presentationStyles.pageMenu}>11th Hour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DayOfSunday;
