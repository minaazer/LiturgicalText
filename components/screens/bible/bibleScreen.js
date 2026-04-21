import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import backgroundImage from "../../../assets/background.png";
import { BibleChapterPicker } from "../../reusableComponents/pickers";
import { settingsPalette } from "../../reusableComponents/settingsUI";

const BibleScreen = ({ navigation }) => {
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
          <Text style={styles.title}>The Holy Bible</Text>
          <Text style={styles.subtitle}>
            Select translations, choose a book, and open the chapter.
          </Text>
        </View>

        <View style={styles.pickerPanel}>
          <BibleChapterPicker
            navigation={navigation}
            defaultVersion="lxx2012"
            defaultBook="Genesis"
            defaultChapter={1}
          />
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
    maxWidth: 760,
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
  pickerPanel: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderWidth: 1,
    borderColor: "rgba(214, 227, 239, 0.86)",
  },
});

export default BibleScreen;
