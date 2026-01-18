/** @format */

import React from "react";
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from "react-native";
import { presentationStyles } from "../../css/presentationStyles";
import backgroundImage from "../../../assets/background.png";
import { BibleChapterPicker } from "../../reusableComponents/pickers";

const BibleScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const isCompactPortrait = isPortrait && width < 450;

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
              <Text style={presentationStyles.pageHeader}>The Holy Bible</Text>
            ) : (
              <>
                <Text style={presentationStyles.pageHeader}>The Holy</Text>
                <Text style={presentationStyles.pageHeader}>Bible</Text>
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
          <View style={[styles.container, {alignItems: "center"}]}>
            <Text
              style={[presentationStyles.languageTitle, { alignSelf: "center" }]}
            >
              Select a Bible version, book, and chapter
            </Text>
            <BibleChapterPicker
              navigation={navigation}
              defaultVersion="lxx2012"
              defaultBook="Genesis"
              defaultChapter={1}
            />
          </View>
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
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
});

export default BibleScreen;
