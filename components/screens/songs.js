import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import backgroundImage from "../../assets/background.png";
import songsData from "../../data/jsons/songs.json";
import { getJson } from "../functions/jsonCache";
import { settingsPalette } from "../reusableComponents/settingsUI";

const Songs = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [songsJson, setSongsJson] = useState(songsData);
  const columnCount = width >= 1180 ? 3 : width >= 760 ? 2 : 1;

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
    new Set(songsJson.flatMap((song) => song.themes || [])),
  ).sort();

  const songCount = new Set(
    songsJson.map((song) => song.english_title || "").filter(Boolean),
  ).size;
  const menuItems = [
    {
      label: "All Spiritual Songs",
      route: "All-Spiritual-Songs",
      theme: "",
      description: `${songCount} songs`,
      icon: "musical-notes-outline",
    },
    ...themes.map((theme) => {
      const count = songsJson.filter((song) =>
        (song.themes || []).includes(theme),
      ).length;
      return {
        label: theme,
        route: theme.replace(/\s+/g, "-"),
        theme,
        description: `${count} songs`,
        icon: "musical-note-outline",
      };
    }),
  ];

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="repeat"
    >
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Coptic Orthodox Church</Text>
          <Text style={styles.title}>Spiritual Songs</Text>
          <Text style={styles.subtitle}>
            Browse songs together or by theme.
          </Text>
        </View>

        <View style={styles.grid}>
          {menuItems.map((item) => (
            <View
              key={item.label}
              style={[
                styles.cardShell,
                columnCount > 1 && { width: `${100 / columnCount}%` },
              ]}
            >
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={item.label}
                onPress={() =>
                  navigation.navigate(item.route, {
                    theme: item.theme,
                    drawerLabel: item.label,
                  })
                }
                style={({ pressed }) => [
                  styles.songCard,
                  item.theme === "" && styles.allSongsCard,
                  pressed && styles.pressed,
                ]}
              >
                <View style={styles.songIcon}>
                  <Ionicons
                    name={item.icon}
                    size={19}
                    color={settingsPalette.primary}
                  />
                </View>
                <View style={styles.songText}>
                  <Text style={styles.songTitle} numberOfLines={2}>
                    {item.label}
                  </Text>
                  <Text style={styles.songDescription}>{item.description}</Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={settingsPalette.muted}
                />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    width: "100%",
    maxWidth: 980,
    alignSelf: "center",
    padding: 16,
    paddingBottom: 30,
    gap: 14,
  },
  header: {
    paddingHorizontal: 2,
  },
  eyebrow: {
    color: settingsPalette.primary,
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  title: {
    marginTop: 4,
    color: settingsPalette.primary,
    fontFamily: "Garamond Bold",
    fontSize: 42,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 4,
    color: settingsPalette.muted,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 23,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -4,
  },
  cardShell: {
    width: "100%",
    padding: 4,
  },
  songCard: {
    minHeight: 66,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderWidth: 1,
    borderColor: "rgba(214, 227, 239, 0.86)",
  },
  allSongsCard: {
    backgroundColor: "rgba(227, 238, 248, 0.9)",
  },
  songIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  songText: {
    flex: 1,
    minWidth: 0,
  },
  songTitle: {
    color: settingsPalette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  songDescription: {
    marginTop: 2,
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default Songs;
