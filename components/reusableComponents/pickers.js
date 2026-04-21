/** @format */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign as Icon, Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { bibleVersions, getVersionById } from "../../data/bibleVersions";
import { settingsPalette } from "./settingsUI";

const FontSizePicker = ({ setSettings, settings }) => {
  const labels = [
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
  const anchorFontSize = 3.5;
  const fontScaleFactor = 0.75;
  const items = labels.map((label) => {
    const numericLabel = parseFloat(label);
    const scaledValue =
      anchorFontSize + (numericLabel - anchorFontSize) * fontScaleFactor;
    return {
      label,
      value: scaledValue.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1"),
    };
  });

  const fontSize = settings.fontSize;
  const selectedFontOption =
    items.find((item) => item.value === fontSize) ||
    items.reduce((closest, item) => {
      const currentDelta = Math.abs(parseFloat(item.value) - parseFloat(fontSize));
      const closestDelta = Math.abs(
        parseFloat(closest.value) - parseFloat(fontSize)
      );
      return currentDelta < closestDelta ? item : closest;
    }, items[0]);

  const setFontSizeHandler = (value) => {
    // change the font size property in my settings object
    setSettings({ ...settings, fontSize: value });
  };

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem) => setFontSizeHandler(selectedItem.value)}
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem?.label || selectedFontOption?.label || `Font Size: ${settings.fontSize}`}
          </Text>
          <Icon
            name={isOpened ? "caretup" : "caretdown"}
            style={styles.dropdownButtonArrowStyle}
          />
        </View>
      )}
      defaultValue={selectedFontOption}
      defaultButtonText={`Font Size: ${selectedFontOption?.label || fontSize}`}
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
  const selectedOrientation =
    items.find((item) => item.value === orientation) || items[0];

  return (
    <SelectDropdown
      data={items}
      onSelect={(selectedItem) => setOrientation(selectedItem.value)} // Use selected item's value
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem?.label || selectedOrientation.label}
          </Text>
          <Icon
            name={isOpened ? "caretup" : "caretdown"} // Correct icon names
            style={styles.dropdownButtonArrowStyle}
          />
        </View>
      )}
      defaultValue={selectedOrientation}
      defaultButtonText={selectedOrientation.label}
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
  const versionDisplay = {
    lxx2012: { title: "English", detail: "LXX / NKJV" },
    arabic: { title: "Arabic", detail: "Smith & Van Dyck" },
    coptic: { title: "Coptic", detail: "OT + NT" },
  };
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
    <View style={styles.biblePicker}>
      <View style={styles.bibleSection}>
        <View style={styles.bibleSectionHeader}>
          <View style={styles.bibleSectionIcon}>
            <Ionicons
              name="language-outline"
              size={17}
              color={settingsPalette.primary}
            />
          </View>
          <Text style={styles.bibleSectionTitle}>Versions</Text>
        </View>
        <View style={styles.translationPicker}>
          {bibleVersions.map((v) => {
            const isSelected = selectedVersionIds.includes(v.id);
            const display = versionDisplay[v.id] || {
              title: v.label,
              detail: "",
            };
            return (
              <TouchableOpacity
                key={v.id}
                style={[
                  styles.translationOption,
                  isSelected && styles.translationOptionSelected,
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
                <View style={styles.translationText}>
                  <Text
                    style={[
                      styles.translationTitle,
                      isSelected && styles.translationTitleSelected,
                    ]}
                  >
                    {display.title}
                  </Text>
                  {display.detail ? (
                    <Text
                      style={[
                        styles.translationDetail,
                        isSelected && styles.translationDetailSelected,
                      ]}
                    >
                      {display.detail}
                    </Text>
                  ) : null}
                </View>
                <View
                  style={[
                    styles.translationCheck,
                    isSelected && styles.translationCheckSelected,
                  ]}
                >
                  {isSelected ? (
                    <Ionicons name="checkmark" size={14} color="#FFFFFF" />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.bibleSection}>
        <View style={styles.bibleSectionHeader}>
          <View style={styles.bibleSectionIcon}>
            <Ionicons
              name="book-outline"
              size={17}
              color={settingsPalette.primary}
            />
          </View>
          <Text style={styles.bibleSectionTitle}>Book</Text>
        </View>
        <View style={styles.fullWidthWrapper}>
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

      <View style={styles.bibleSection}>
        <View style={styles.bibleSectionHeader}>
          <View style={styles.bibleSectionIcon}>
            <Ionicons
              name="reader-outline"
              size={17}
              color={settingsPalette.primary}
            />
          </View>
          <Text style={styles.bibleSectionTitle}>Chapter</Text>
        </View>
        <View style={styles.fullWidthWrapper}>
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

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChapterScreen", {
            bookTitle: selectedBook,
            chapterNumber: selectedChapter,
            versionId: primaryVersionId,
            versionIds: selectedVersionIds,
            drawerLabel: `${selectedBook} ${selectedChapter}`,
          })
        }
        style={styles.bibleOpenButton}
        disabled={!selectedBook || !chapters.length}
      >
        <Text style={styles.bibleOpenButtonText}>View Chapter</Text>
        <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    minWidth: 100,
    minHeight: 44,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: settingsPalette.border,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignSelf: "stretch",
  },

  dropdownButtonTxtStyle: {
    fontSize: 16,
    fontWeight: "800",
    color: settingsPalette.text,
    textAlign: "left",
    flexShrink: 1,
  },
  dropdownButtonArrowStyle: {
    fontSize: 18,
    paddingLeft: 8,
    color: settingsPalette.primary,
  },
  dropdownMenuStyle: {
    backgroundColor: settingsPalette.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: settingsPalette.border,
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
    backgroundColor: "#FFFFFF",
  },
  dropdownItemSelectedStyle: {
    backgroundColor: settingsPalette.blueSoft,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: settingsPalette.text,
    textAlign: "center",
  },
  biblePicker: {
    width: "100%",
    gap: 10,
  },
  bibleSection: {
    width: "100%",
    gap: 8,
  },
  bibleSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bibleSectionIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  bibleSectionTitle: {
    flex: 1,
    color: settingsPalette.text,
    fontSize: 16,
    fontWeight: "800",
  },
  translationPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    width: "100%",
    alignSelf: "stretch",
  },
  translationOption: {
    minHeight: 48,
    minWidth: 128,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: settingsPalette.border,
    backgroundColor: "#FFFFFF",
  },
  translationOptionSelected: {
    backgroundColor: "#FFFFFF",
    borderColor: "#BDD7EF",
  },
  translationText: {
    flex: 1,
    minWidth: 0,
  },
  translationTitle: {
    color: settingsPalette.text,
    fontSize: 14,
    fontWeight: "800",
  },
  translationTitleSelected: {
    color: settingsPalette.text,
  },
  translationDetail: {
    marginTop: 1,
    color: settingsPalette.muted,
    fontSize: 11,
    fontWeight: "700",
  },
  translationDetailSelected: {
    color: settingsPalette.muted,
  },
  translationCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: settingsPalette.border,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  translationCheckSelected: {
    borderColor: settingsPalette.primary,
    backgroundColor: settingsPalette.primary,
  },
  fullWidthWrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },
  bibleOpenButton: {
    minHeight: 44,
    marginTop: 2,
    borderRadius: 8,
    backgroundColor: settingsPalette.text,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },
  bibleOpenButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});

export { FontSizePicker, ScreenOrientationPicker, BibleChapterPicker };
