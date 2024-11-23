/** @format */

// screens/Home.js

import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/background.png";
import { ScrollView } from "react-native-gesture-handler";
import { presentationStyles } from "../css/presentationStyles";

const Songs = () => {
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
            <Text style={presentationStyles.pageHeader}>Spiritual</Text>
            <Text style={presentationStyles.pageHeader}>Songs</Text>
          </View>

          <View style={presentationStyles.hoursContainer}>
            <ScrollView>
              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
                onPress={() => navigation.navigate("AllSongs")}
              >
                <Text style={presentationStyles.pageMenu}>All Spiritual Songs</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
                onPress={() => navigation.navigate("ComfortSongs")}
              >
                <Text style={presentationStyles.pageMenu}>Comfort and Repentance</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
                onPress={() => navigation.navigate("NayroozSongs")}
              >
                <Text style={presentationStyles.pageMenu}>Coptic New Year</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
                onPress={() => navigation.navigate("ResurrectionSongs")}
              >
                <Text style={presentationStyles.pageMenu}>Resurrection</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
                onPress={() => navigation.navigate("StMarySongs")}
              >
                <Text style={presentationStyles.pageMenu}>St. Mary</Text>
              </TouchableOpacity>

          </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default Songs;
