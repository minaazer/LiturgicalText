/** @format */

// screens/Home.js

import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/background.png";
import { ScrollView } from "react-native";
import { presentationStyles } from "../css/presentationStyles";
import songsData from "../../data/jsons/songs.json";
import { getJson } from "../functions/jsonCache";

const Songs = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const isCompactPortrait = isPortrait && width < 450;
  const [songsJson, setSongsJson] = useState(songsData);

  useEffect(() => {
    let isMounted = true;
    getJson("songs.json", songsData).then((data) => {
      if (isMounted && data) {
        setSongsJson(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

const themes = Array.from(
  new Set(
    songsJson.flatMap(song => song.themes || [])
  )
).sort();

const seenTitles = new Set();

const SongsList = songsJson
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
              <Text style={presentationStyles.pageHeader}>Spiritual Songs</Text>
            ) : (
              <>
                <Text style={presentationStyles.pageHeader}>Spiritual</Text>
                <Text style={presentationStyles.pageHeader}>Songs</Text>
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
              contentContainerStyle={[
                presentationStyles.iconRow,
                { flexGrow: 1, justifyContent: "center" },
              ]}
            >
              <TouchableOpacity
                style={[presentationStyles.songsContainer]}
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
