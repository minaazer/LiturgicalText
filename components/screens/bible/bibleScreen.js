/** @format */

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { presentationStyles } from "../../css/presentationStyles";
import backgroundImage from "../../../assets/background.png";
import { BibleSelection } from "../../reusableComponents/bibleSelection";

const BibleScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <View style={presentationStyles.pageContainer}>
          <View style={presentationStyles.headerContainer}>
            <Text style={presentationStyles.pageHeader}>The Holy Bible</Text>
          </View>
          <View style={styles.container}>
            <Text
              style={[presentationStyles.languageTitle, { alignSelf: "center" }]}
            >
              Old Testament: LXX 2012 US English Septuagint Translation
            </Text>
            <Text
              style={[presentationStyles.languageTitle, { alignSelf: "center" }]}
            >
              New Testament: NKJV Translation
            </Text>
            <BibleSelection
              navigation={navigation}
              defaultBook="Genesis"
              defaultChapter={1}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 16,
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
});

export default BibleScreen;
