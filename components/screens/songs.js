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
import songsData from "../../data/songs/songs.json";

const Songs = () => {
  const navigation = useNavigation();
const themes = Array.from(
  new Set(
    songsData.flatMap(song => song.themes || [])
  )
).sort();



  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View style={presentationStyles.daysContainer}>
          <View style={presentationStyles.headerContainer}>
            <Text style={presentationStyles.pageHeader}>Spiritual</Text>
            <Text style={presentationStyles.pageHeader}>Songs</Text>
          </View>

          <View style={presentationStyles.daysContainer}>
            <ScrollView contentContainerStyle={presentationStyles.iconRow}>
              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
                //onPress={() => navigation.navigate("AllSongs")}
                onPress={() => navigation.navigate("SongsScreen", { theme: "Comfort and Repentance" })}
              >
                <Text style={presentationStyles.pageMenu}>All Spiritual Songs</Text>
              </TouchableOpacity>
              {themes.map((theme, index) => (
                <TouchableOpacity
                  key={index}
                  style={[presentationStyles.songsContainer]}
                  onPress={() => navigation.navigate("SongsScreen", { theme })}
                >
                  <Text style={presentationStyles.pageMenu}>{theme}</Text>
                </TouchableOpacity>
              ))}
              
              
              

          </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


export default Songs;
