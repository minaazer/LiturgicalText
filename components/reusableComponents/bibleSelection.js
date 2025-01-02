/** @format */

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import bible from "../../data/bible/bible.json";
import {
  presentationStyles,
  pickerSelectStyles,
} from "../css/presentationStyles";
import { Ionicons } from "@expo/vector-icons";

export const BibleSelection = ({ navigation, defaultBook = "Genesis", defaultChapter = 1 }) => {
  const [selectedBook, setSelectedBook] = useState(defaultBook);
  const [selectedChapter, setSelectedChapter] = useState(defaultChapter);

  // Get chapters for the selected book
  const book = bible.find((b) => b.title === selectedBook);
  const chapters = book ? book.chapters : [];

  return (
    <View style={presentationStyles.bibleScreenContainer}>
      <View style={presentationStyles.bibleSelectionContainer}>
        <Text style={presentationStyles.bibleSellectionTitle}>Select Book</Text>
        <View style={presentationStyles.pickerWrapper}>
          <RNPickerSelect
            onValueChange={(value) => {
              setSelectedBook(value);
              setSelectedChapter(1); // Reset chapter to 1 when book changes
            }}
            items={bible.map((book) => ({
              label: book.title,
              value: book.title,
            }))}
            value={selectedBook}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => <Ionicons name="caret-down-outline" color="grey" />}
          />
        </View>
      </View>
      <View style={presentationStyles.bibleSelectionContainer}>
        <Text style={presentationStyles.bibleSellectionTitle}>Select Chapter</Text>
        <View style={presentationStyles.pickerWrapper}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedChapter(value)}
            items={chapters.map((chapter) => ({
              label: `Chapter ${chapter.chapter}`,
              value: chapter.chapter,
            }))}
            value={selectedChapter}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            Icon={() => <Ionicons name="caret-down-outline" color="grey" />}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChapterScreen", {
            bookTitle: selectedBook,
            chapterNumber: selectedChapter,
          })
        }
        style={presentationStyles.bibleSelectionButton}
      >
        <Text style={presentationStyles.buttonText}>Go to Chapter</Text>
      </TouchableOpacity>
    </View>
  );
};
