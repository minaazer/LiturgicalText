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

const DayOfThursday = () => {
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
            <Text style={presentationStyles.pageHeader}>Covenant</Text>
            <Text style={presentationStyles.pageHeader}>Thursday</Text>
          </View>

          <View style={presentationStyles.hoursContainer}>
          <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOTH1sc")}
            >
              <Text style={presentationStyles.pageMenu}>First Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOTH3sc")}
            >
              <Text style={presentationStyles.pageMenu}>Third Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOTH6sc")}
            >
              <Text style={presentationStyles.pageMenu}>Sixth Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOTH9sc")}
            >
              <Text style={presentationStyles.pageMenu}>Ninth Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DOTH11sc")}
            >
              <Text style={presentationStyles.pageMenu}>Eleventh Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[presentationStyles.itemContainer]}
              onPress={() => navigation.navigate("DaytimeLitaniessc")}
            >
              <Text style={presentationStyles.pageMenu}>Daytime Litanies</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DayOfThursday;
