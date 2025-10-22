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
import songsData from "../../data/jsons/songs.json";

const Songs = () => {
  const navigation = useNavigation();
const themes = Array.from(
  new Set(
    songsData.flatMap(song => song.themes || [])
  )
).sort();

const seenTitles = new Set();

const SongsList = songsData
  .filter(song => {
    const title = song.english_title || "";
    if (seenTitles.has(title)) return false;
    seenTitles.add(title);
    return true;
  })
  .map(song => ({
    title: song.english_title || "",
    themes: song.themes || []
  }))
  .sort((a, b) => a.title.localeCompare(b.title));


const logString = SongsList
  .map(song => `${song.title} (${song.themes.join(', ')})`)
  .join('\n');

console.log(logString);

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
                onPress={() => navigation.navigate("All-Spiritual-Songs", { theme: "" })}
              >
                <Text style={presentationStyles.pageMenu}>All Spiritual Songs</Text>
              </TouchableOpacity>
              {themes.map((theme, index) => (
                <TouchableOpacity
                  key={index}
                  style={[presentationStyles.songsContainer]}
                  onPress={() => navigation.navigate(theme.replace(/\s+/g, "-"), { theme })}
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
