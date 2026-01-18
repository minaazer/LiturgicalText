/** @format */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { bibleVersions, getVersionById } from "../../data/bibleVersions";
import { presentationStyles } from "../css/presentationStyles";

const FontSizePicker = ({ setSettings, settings }) => {
  const items = [
    "1",
    "1.5",
    "2",
    "2.5",
    "3",
    "3.5",
    "4",
    "4.5",
    "5",
    "5.5",
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
  ];

  const fontSize = settings.fontSize;

  const setFontSizeHandler = (value) => {
    // change the font size property in my settings object
    setSettings({ ...settings, fontSize: value });
  };

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem) => setFontSizeHandler(selectedItem)} // Simplified handler
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem || `Font Size: ${settings.fontSize}`}
          </Text>
          <Icon
            name={isOpened ? "caretup" : "caretdown"}
            style={styles.dropdownButtonArrowStyle}
          />
        </View>
      )}
      defaultButtonText={`Font Size: ${fontSize}`} // Default text for unselected state
      renderItem={(item, index, isSelected) => (
        <View
          style={[
            styles.dropdownItemStyle,
            isSelected && styles.dropdownItemSelectedStyle,
          ]}
        >
          <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
        </View>
      )}
      buttonStyle={styles.dropdownButtonStyle}
      buttonTextStyle={styles.dropdownButtonTxtStyle}
      dropdownStyle={styles.dropdownMenuStyle}
      showsVerticalScrollIndicator={false}
      accessibilityLabel="Font Size Picker"
    />
  );
};

const ScreenOrientationPicker = ({ setOrientation, orientation }) => {
  const items = [
    { label: "Landscape", value: "landscape" },
    { label: "Portrait", value: "portrait" },
    { label: "Reverse Landscape", value: "reverseLandscape" },
  ];

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem) => setOrientation(selectedItem.value)} // Use selected item's value
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem?.label || `Orientation: ${orientation}`}
          </Text>
          <Icon
            name={isOpened ? "caretup" : "caretdown"} // Correct icon names
            style={styles.dropdownButtonArrowStyle}
          />
        </View>
      )}
      defaultButtonText={`Orientation: ${orientation}`} // Default text for unselected state
      renderItem={(item, index, isSelected) => (
        <View
          style={[
            styles.dropdownItemStyle,
            isSelected && styles.dropdownItemSelectedStyle,
          ]}
        >
          <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
        </View>
      )}
      buttonStyle={styles.dropdownButtonStyle}
      buttonTextStyle={styles.dropdownButtonTxtStyle}
      dropdownStyle={styles.dropdownMenuStyle}
      showsVerticalScrollIndicator={false}
      accessibilityLabel="Orientation Picker"
    />
  );
};

const BibleChapterPicker = ({
  navigation,
  defaultVersion = "lxx2012",
  defaultBook = "Genesis",
  defaultChapter = 1,
}) => {
  const [selectedVersionIds, setSelectedVersionIds] = useState([
    defaultVersion,
  ]);
  const primaryVersionId = selectedVersionIds[0] || defaultVersion;
  const version = getVersionById(primaryVersionId);
  const books = version?.data?.books || [];

  const initialBook =
    books.find((b) => b.title === defaultBook)?.title || books[0]?.title || "";
  const [selectedBook, setSelectedBook] = useState(initialBook);
  const [selectedChapter, setSelectedChapter] = useState(defaultChapter);

  useEffect(() => {
    const newBooks = version?.data?.books || [];
    const fallbackBook = newBooks[0]?.title || "";
    const nextBook = newBooks.find((b) => b.title === selectedBook)
      ? selectedBook
      : fallbackBook;
    setSelectedBook(nextBook);
    setSelectedChapter(1);
  }, [primaryVersionId]);

  const book = books.find((b) => b.title === selectedBook);
  const chapters = book ? book.chapters : [];

  useEffect(() => {
    if (
      !chapters.find((c) => c.chapter === selectedChapter) &&
      chapters.length
    ) {
      setSelectedChapter(chapters[0].chapter);
    }
  }, [selectedBook]);

  return (
    <ScrollView
      contentContainerStyle={[
        presentationStyles.bibleScreenContainer,
        styles.fullWidthContent,
      ]}
    >
      {/* Select Versions */}
      <View
        style={[presentationStyles.bibleSelectionContainer, styles.sectionWide]}
      >
        <Text style={presentationStyles.bibleSellectionTitle}>
          Select Versions
        </Text>
        <View style={styles.multiSelectContainer}>
          {bibleVersions.map((v) => {
            const isSelected = selectedVersionIds.includes(v.id);
            return (
              <TouchableOpacity
                key={v.id}
                style={[
                  styles.checkboxRow,
                  isSelected && styles.checkboxRowSelected,
                ]}
                onPress={() =>
                  setSelectedVersionIds((prev) => {
                    if (prev.includes(v.id)) {
                      if (prev.length === 1) return prev; // keep at least one
                      const filtered = prev.filter((id) => id !== v.id);
                      return filtered.length ? filtered : [defaultVersion];
                    }
                    return [...prev, v.id];
                  })
                }
                accessibilityLabel={`Toggle ${v.label}`}
              >
                <View
                  style={[
                    styles.checkbox,
                    isSelected && styles.checkboxChecked,
                  ]}
                >
                  {isSelected && <View style={styles.checkboxInner} />}
                </View>
                <Text style={styles.checkboxLabel}>{v.label}</Text>
                {primaryVersionId === v.id && (
                  <Text style={styles.primaryBadge}>Primary</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Select Book */}
      <View
        style={[presentationStyles.bibleSelectionContainer, styles.sectionWide]}
      >
        <Text style={presentationStyles.bibleSellectionTitle}>Select Book</Text>
        <View
          style={[presentationStyles.pickerWrapper, styles.fullWidthWrapper]}
        >
          <SelectDropdown
            data={books.map((b) => ({ label: b.title, value: b.title }))}
            onSelect={(item) => {
              setSelectedBook(item.value);
              setSelectedChapter(1);
            }}
            renderButton={(selectedItem, isOpened) => (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selectedItem?.label || selectedBook}
                </Text>
                <Icon
                  name={isOpened ? "caretup" : "caretdown"}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            )}
            defaultButtonText={selectedBook || "Select Book"}
            renderItem={(item, index, isSelected) => (
              <View
                style={[
                  styles.dropdownItemStyle,
                  isSelected && styles.dropdownItemSelectedStyle,
                ]}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
              </View>
            )}
            buttonStyle={styles.dropdownButtonStyle}
            buttonTextStyle={styles.dropdownButtonTxtStyle}
            dropdownStyle={styles.dropdownMenuStyle}
            showsVerticalScrollIndicator={false}
            accessibilityLabel="Book Picker"
          />
        </View>
      </View>

      {/* Select Chapter */}
      <View
        style={[presentationStyles.bibleSelectionContainer, styles.sectionWide]}
      >
        <Text style={presentationStyles.bibleSellectionTitle}>
          Select Chapter
        </Text>
        <View
          style={[presentationStyles.pickerWrapper, styles.fullWidthWrapper]}
        >
          <SelectDropdown
            data={chapters.map((chapter) => ({
              label: `Chapter ${chapter.chapter}`,
              value: chapter.chapter,
            }))}
            onSelect={(item) => setSelectedChapter(item.value)}
            renderButton={(selectedItem, isOpened) => (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {selectedItem?.label || `Chapter ${selectedChapter}`}
                </Text>
                <Icon
                  name={isOpened ? "caretup" : "caretdown"}
                  style={styles.dropdownButtonArrowStyle}
                />
              </View>
            )}
            defaultButtonText={
              chapters.length ? `Chapter ${selectedChapter}` : "No chapters"
            }
            renderItem={(item, index, isSelected) => (
              <View
                style={[
                  styles.dropdownItemStyle,
                  isSelected && styles.dropdownItemSelectedStyle,
                ]}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
              </View>
            )}
            buttonStyle={styles.dropdownButtonStyle}
            buttonTextStyle={styles.dropdownButtonTxtStyle}
            dropdownStyle={styles.dropdownMenuStyle}
            showsVerticalScrollIndicator={false}
            accessibilityLabel="Chapter Picker"
            disabled={!chapters.length}
          />
        </View>
      </View>

      {/* Navigate Button */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChapterScreen", {
            bookTitle: selectedBook,
            chapterNumber: selectedChapter,
            versionId: primaryVersionId,
            versionIds: selectedVersionIds,
          })
        }
        style={presentationStyles.bibleSelectionButton}
        disabled={!selectedBook || !chapters.length}
      >
        <Text style={presentationStyles.buttonText}>Go to Chapter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    minWidth: 100, // Ensures the button has a reasonable minimum size
    height: 40,
    backgroundColor: "lightgrey",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Spreads text and chevron evenly
    paddingHorizontal: 12,
    alignSelf: "flex-start", // Adjusts width based on content
  },

  dropdownButtonTxtStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#151E26",
    textAlign: "left",
    flexShrink: 1, // Prevents text from overflowing and forces resizing
  },
  dropdownButtonArrowStyle: {
    fontSize: 18,
    paddingLeft: 8,
    color: "#151E26",
  },
  dropdownMenuStyle: {
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "#FFF",
  },
  dropdownItemSelectedStyle: {
    backgroundColor: "#D2D9DF",
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
    color: "#151E26",
    textAlign: "center",
  },
  multiSelectContainer: {
    gap: 8,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    marginBottom: 8,
    width: "100%",
  },
  checkboxRowSelected: {
    backgroundColor: "#E0E7FF",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#4B5563",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    borderColor: "#6366F1",
    backgroundColor: "#C7D2FE",
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: "#312E81",
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  primaryBadge: {
    fontSize: 12,
    color: "#4338CA",
    fontWeight: "600",
  },
  multiSelectContainer: {
    gap: 8,
    width: "100%",
    alignSelf: "stretch",
  },
  sectionWide: {
    width: "100%",
    alignSelf: "center",
  },
  fullWidthWrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },
  fullWidthContent: {
    width: "100%",
    alignItems: "stretch",
  },
});

export { FontSizePicker, ScreenOrientationPicker, BibleChapterPicker };
