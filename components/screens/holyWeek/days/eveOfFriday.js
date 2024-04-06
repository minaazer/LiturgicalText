/** @format */
import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../../../assets/background.png";
import { presentationStyles } from "../../../css/presentationStyles";

const EveOfFriday = () => {
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
            <Text style={presentationStyles.pageHeader}>Eve of</Text>
            <Text style={presentationStyles.pageHeader}>Friday</Text>
          </View>

          <View style={presentationStyles.hoursContainer}>
          <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS9sc")}
            >
              <Text style={presentationStyles.pageMenu}>First Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS9sc")}
            >
              <Text style={presentationStyles.pageMenu}>Third Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS9sc")}
            >
              <Text style={presentationStyles.pageMenu}>Sixth Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS9sc")}
            >
              <Text style={presentationStyles.pageMenu}>Ninth Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOS9sc")}
            >
              <Text style={presentationStyles.pageMenu}>Eleventh Hour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EveOfFriday;
