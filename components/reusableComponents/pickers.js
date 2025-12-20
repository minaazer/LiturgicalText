  import React, {useState} from "react";
  import { StyleSheet, Text, View , ScrollView , TouchableOpacity } from "react-native";
  import { AntDesign as Icon } from "@expo/vector-icons";
  import SelectDropdown from "react-native-select-dropdown";
  import bible from "../../data/bible/bible.json";
  import { presentationStyles } from "../css/presentationStyles";

  const FontSizePicker = ({ setSettings, settings }) => {
    const items = ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"];

    const fontSize = settings.fontSize;

    const setFontSizeHandler = (value) => {
      // change the font size property in my settings object
      setSettings({ ...settings, fontSize: value });
  }

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
          { label: 'Landscape', value: 'landscape' },
          { label: 'Portrait', value: 'portrait' },
          { label: 'Reverse Landscape', value: 'reverseLandscape' },
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

  const BibleChapterPicker = ({ navigation, defaultBook = "Genesis", defaultChapter = 1 }) => {
      const [selectedBook, setSelectedBook] = useState(defaultBook);
      const [selectedChapter, setSelectedChapter] = useState(defaultChapter);
    
      // Get chapters for the selected book
      const book = bible.find((b) => b.title === selectedBook);
      const chapters = book ? book.chapters : [];
    
      return (
        <ScrollView contentContainerStyle={presentationStyles.bibleScreenContainer}>
          {/* Select Book */}
          <View style={presentationStyles.bibleSelectionContainer}>
            <Text style={presentationStyles.bibleSellectionTitle}>Select Book</Text>
            <View style={presentationStyles.pickerWrapper}>
              <SelectDropdown
                data={bible.map((book) => ({
                  label: book.title,
                  value: book.title,
                }))}
                onSelect={(item) => {
                  setSelectedBook(item.value);
                  setSelectedChapter(1); // Reset chapter to 1 when book changes
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
                defaultButtonText={selectedBook} // Default text for unselected state
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
          <View style={presentationStyles.bibleSelectionContainer}>
            <Text style={presentationStyles.bibleSellectionTitle}>Select Chapter</Text>
            <View style={presentationStyles.pickerWrapper}>
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
                defaultButtonText={`Chapter ${selectedChapter}`} // Default text for unselected state
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
              />
            </View>
          </View>
    
          {/* Navigate Button */}
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
        </ScrollView>
      );
    };

  const styles = StyleSheet.create({
  dropdownButtonStyle: {
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
  });

  export { FontSizePicker , ScreenOrientationPicker , BibleChapterPicker };
