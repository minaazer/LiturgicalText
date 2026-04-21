import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backgroundImage from "../../assets/background.png";
import glorificationImage from "../../assets/glorification.png";
import bibleImage from "../../assets/bible.png";
import psalmodyImage from "../../assets/psalmody.png";
import unctionImage from "../../assets/unction.png";
import holyWeekImage from "../../assets/holyWeek.png";
import songsImage from "../../assets/songs.png";
import baptismImage from "../../assets/baptism.png";
import crowningImage from "../../assets/crowning.png";
import offertoryImage from "../../assets/offertory.png";
import SettingsContext from "../../settings/settingsContext";
import { settingsPalette } from "../reusableComponents/settingsUI";

const bookDescriptions = {
  Glorification: "Seasonal glorification prayers",
  "The Holy Bible": "Scripture readings by book",
  "Holy Pascha Week": "Holy Pascha Week prayers and readings",
  Psalmody: "Praises, psalis, and theotokias",
  "Spiritual Songs": "Songs grouped by theme",
  "Holy Matrimony": "Crowning service",
  Baptism: "Coming soon",
  Unction: "Unction prayers",
  Offertory: "Liturgy offertory prayers",
};

const Home = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [settings] = useContext(SettingsContext);
  const developerMode = settings.developerMode;
  const isCompact = width < 520;
  const iconFrameSize = isCompact ? 68 : 76;
  const iconSize = isCompact ? 60 : 66;
  const books = [
    developerMode
      ? {
          image: crowningImage,
          route: "Matrimony",
          dimmed: true,
          label: "Holy Matrimony",
        }
      : null,
    { image: glorificationImage, route: "Glorification", label: "Glorification" },
    { image: bibleImage, route: "Bible", label: "The Holy Bible" },
    { image: holyWeekImage, route: "HolyWeek", label: "Holy Pascha Week" },
    developerMode
      ? { image: baptismImage, dimmed: true, label: "Baptism" }
      : null,
    { image: psalmodyImage, route: "Psalmody", label: "Psalmody" },
    { image: songsImage, route: "Songs", label: "Spiritual Songs" },
    developerMode
      ? { image: unctionImage, route: "Unction", dimmed: true, label: "Unction" }
      : null,
    developerMode
      ? {
          image: offertoryImage,
          route: "Offertory",
          dimmed: true,
          label: "Offertory",
        }
      : null,
  ].filter(Boolean);
  const allowFourColumns = books.length >= 8;
  const columnCount =
    allowFourColumns && width >= 1180
      ? 4
      : width >= 880
        ? 3
        : width >= 620
          ? 2
          : 1;
  const cardWidth =
    columnCount > 1
      ? `${100 / columnCount}%`
      : Math.min(width - 28, isCompact ? 430 : 520);

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
          <Text style={styles.title}>Liturgical Books</Text>
          <Text style={styles.subtitle}>
            Prayers, readings, praises, and hymns for the services of the Church.
          </Text>
        </View>

        <View style={styles.iconGrid}>
          {books.map((book) => (
            <View
              key={book.label}
              style={[
                styles.cardShell,
                columnCount > 1 && { width: `${100 / columnCount}%` },
              ]}
            >
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={book.label}
                disabled={!book.route}
                onPress={() => navigation.navigate(book.route)}
                style={({ pressed }) => [
                  styles.bookCard,
                  !isCompact && styles.bookCardRoomy,
                  { width: columnCount > 1 ? "100%" : cardWidth },
                  book.dimmed && styles.dimmed,
                  pressed && book.route && styles.pressed,
                ]}
              >
                <View
                  style={[
                    styles.iconFrame,
                    { width: iconFrameSize, height: iconFrameSize },
                  ]}
                >
                  <Image
                    source={book.image}
                    style={[
                      styles.iconImage,
                      { width: iconSize, height: iconSize },
                    ]}
                  />
                </View>
                <View style={styles.bookText}>
                  <Text style={styles.bookLabel} numberOfLines={2}>
                    {book.label}
                  </Text>
                  <Text style={styles.bookDescription} numberOfLines={2}>
                    {bookDescriptions[book.label] || ""}
                  </Text>
                </View>
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
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    width: "100%",
    maxWidth: 920,
    marginBottom: 12,
    paddingHorizontal: 4,
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
    fontSize: 40,
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 4,
    maxWidth: 620,
    color: settingsPalette.muted,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 23,
  },
  iconGrid: {
    flex: 1,
    width: "100%",
    maxWidth: 980,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  cardShell: {
    alignItems: "center",
    padding: 3,
  },
  bookCard: {
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    margin: 3,
    padding: 7,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderWidth: 1,
    borderColor: "rgba(214, 227, 239, 0.82)",
  },
  bookCardRoomy: {
    minHeight: 104,
  },
  iconFrame: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "rgba(247, 250, 253, 0.9)",
    overflow: "hidden",
  },
  iconImage: {
    resizeMode: "cover",
    borderRadius: 6,
  },
  bookText: {
    flex: 1,
    minWidth: 0,
  },
  bookLabel: {
    color: settingsPalette.text,
    fontSize: 17,
    fontWeight: "800",
  },
  bookDescription: {
    marginTop: 3,
    color: settingsPalette.muted,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
  },
  dimmed: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default Home;
