/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainContent } from "../functions/mainContent";
import { BibleChapterPicker } from "../reusableComponents/pickers";
import { getVersionById } from "../../data/bibleVersions";
import { settingsPalette } from "../reusableComponents/settingsUI";

const screenWidth = Dimensions.get("window").width;
const isPortrait = screenWidth < 500;

const formatDrawerScreenTitle = (value) => {
  if (!value) return "";
  return String(value)
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: settingsPalette.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 90,
    gap: 10,
  },
  header: {
    marginHorizontal: -12,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: settingsPalette.primary,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
    lineHeight: 24,
  },
  searchBox: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  searchInput: {
    flex: 1,
    minWidth: 0,
    color: settingsPalette.text,
    fontSize: 15,
    fontWeight: "700",
    paddingVertical: 0,
  },
  clearButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  sortControl: {
    flexDirection: "row",
    gap: 6,
    padding: 4,
    borderRadius: 8,
    backgroundColor: settingsPalette.blueSoft,
  },
  sortOption: {
    flex: 1,
    minHeight: 34,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  sortOptionSelected: {
    backgroundColor: settingsPalette.primary,
  },
  sortOptionText: {
    color: settingsPalette.primary,
    fontSize: 13,
    fontWeight: "800",
  },
  sortOptionTextSelected: {
    color: "#FFFFFF",
  },
  bibleBlock: {
    gap: 8,
  },
  biblePickerToggle: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: settingsPalette.panel,
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  biblePickerToggleIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: settingsPalette.blueSoft,
  },
  biblePickerToggleText: {
    flex: 1,
    minWidth: 0,
  },
  biblePickerToggleTitle: {
    color: settingsPalette.text,
    fontSize: 14,
    fontWeight: "800",
  },
  biblePickerToggleSubtitle: {
    marginTop: 1,
    color: settingsPalette.muted,
    fontSize: 12,
    fontWeight: "700",
  },
  biblePickerPanel: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderWidth: 1,
    borderColor: settingsPalette.border,
  },
  verseWrapper: {
    gap: 6,
  },
  verseItem: {
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 6,
    backgroundColor: settingsPalette.blueWash,
  },
  verseText: {
    color: settingsPalette.text,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 19,
  },
  itemWrapper: {
    gap: 6,
  },
  sectionItem: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 6,
    paddingVertical: 9,
    borderRadius: 0,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(214, 227, 239, 0.86)",
  },
  sectionItemActive: {
    backgroundColor: settingsPalette.blueSoft,
    borderRadius: 6,
    borderBottomColor: "#BDD7EF",
  },
  labelViewContainer: {
    flex: 1,
    minWidth: 0,
    gap: 2,
  },
  englishTitle: {
    color: settingsPalette.text,
    fontFamily: "Georgia",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    textAlign: "left",
  },
  arabicTitle: {
    color: settingsPalette.text,
    fontFamily: "Georgia",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    textAlign: "right",
  },
  copticTitle: {
    color: settingsPalette.text,
    fontFamily: "ArialCoptic",
    fontSize: 17,
    lineHeight: 23,
    textAlign: "center",
  },
  activeTitle: {
    color: settingsPalette.primary,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    backgroundColor: settingsPalette.background,
    borderTopWidth: 1,
    borderTopColor: settingsPalette.border,
  },
  reportButton: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: settingsPalette.primary,
  },
  reportButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

const extractBookAndChapter = (title) => {
  const trimmedTitle = title.trim();
  // Match either "Bible / Book Chapter N" or "Book Chapter|إصحاح N"
  const match = trimmedTitle.match(
    /^(?:Bible \/ )?(.+?) (?:Chapter|إصحاح) (\d+)$/
  );
  if (match) {
    return { book: match[1].trim(), chapter: parseInt(match[2], 10) };
  }
  return null;
};

const getDrawerTitleLanguageOrder = (title = {}) => {
  if (title.coptic) {
    return ["english", "coptic", "arabic"].filter((lang) => title[lang]);
  }
  return Array.isArray(title.order)
    ? title.order.filter((lang) => title[lang])
    : ["english", "arabic"].filter((lang) => title[lang]);
};

const RightDrawerContent = React.forwardRef(
  (
    {
      currentTable,
      drawerItems,
      handleDrawerItemPress,
      navigation,
      versionId = "lxx2012",
      drawerTitle,
      ...props
    },
    scrollViewRef
  ) => {
    const itemRefs = useMemo(
      () => drawerItems.map(() => React.createRef()),
      [drawerItems]
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("original");
    const [isBiblePickerOpen, setIsBiblePickerOpen] = useState(false);
    const version = getVersionById(versionId);
    const books = version?.data?.books || [];
    const getChapterVerses = (bookTitle, chapterNumber) => {
      const book = books.find((b) => b.title === bookTitle);
      const chapter = book?.chapters.find((c) => c.chapter === chapterNumber);
      return chapter?.verses || [];
    };

    const filteredItems = useMemo(() => {
      const searchText = searchQuery.toLowerCase();
      return drawerItems.filter((item) => {
        return (
          item.title.english?.toLowerCase().includes(searchText) ||
          item.title.coptic?.toLowerCase().includes(searchText) ||
          item.title.arabic?.toLowerCase().includes(searchText)
        );
      });
    }, [drawerItems, searchQuery]);

    const sortedItems = useMemo(() => {
      const itemsCopy = [...filteredItems];
      if (sortOption === "english") {
        return itemsCopy.sort((a, b) =>
          a.title.english?.localeCompare(b.title.english)
        );
      } else if (sortOption === "arabic") {
        return itemsCopy.sort((a, b) =>
          a.title.arabic?.localeCompare(b.title.arabic)
        );
      }
      return itemsCopy;
    }, [filteredItems, sortOption]);

    const currentItem = useMemo(
      () => drawerItems.find((item) => item.id === currentTable),
      [drawerItems, currentTable]
    );
    const currentTitle =
      currentItem?.title?.english ||
      currentItem?.title?.arabic ||
      currentItem?.title?.coptic ||
      currentItem?.id ||
      "";
    const parentState = navigation.getParent()?.getState?.();
    const currentScreenName =
      parentState?.routes?.[parentState.index || 0]?.name || "";

    useEffect(() => {
      const activeItemIndex = drawerItems.findIndex(
        (item) => item.id === currentTable
      );
      const activeItemRef = itemRefs[activeItemIndex];

      if (activeItemRef && activeItemRef.current && scrollViewRef?.current) {
        activeItemRef.current.measureLayout(
          scrollViewRef.current,
          (x, y) => {
            scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
          },
          (error) => console.error("measureLayout error:", error)
        );
      }
    }, [drawerItems, currentTable, itemRefs]);

    return (
        <View style={styles.drawerContainer}>
          <DrawerContentScrollView
            ref={scrollViewRef}
            style={styles.scroll}
            contentContainerStyle={styles.content}
            {...props}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                {drawerTitle ||
                  formatDrawerScreenTitle(currentScreenName) ||
                  currentTitle ||
                  "Contents"}
              </Text>
            </View>

            <View style={styles.searchBox}>
              <Ionicons name="search-outline" size={18} color={settingsPalette.muted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor={settingsPalette.muted}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCorrect={false}
              />
              {searchQuery ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Clear search"
                  onPress={() => setSearchQuery("")}
                  style={({ pressed }) => [
                    styles.clearButton,
                    pressed && styles.pressed,
                  ]}
                >
                  <Ionicons
                    name="close-circle"
                    size={18}
                    color={settingsPalette.muted}
                  />
                </Pressable>
              ) : null}
            </View>

            <View style={styles.sortControl}>
              {[
                { label: "English", value: "english" },
                { label: "Original", value: "original" },
                { label: "Arabic", value: "arabic" },
              ].map((option) => {
                const selected = sortOption === option.value;
                return (
                  <Pressable
                    key={option.value}
                    accessibilityRole="button"
                    accessibilityState={{ selected }}
                    onPress={() => setSortOption(option.value)}
                    style={({ pressed }) => [
                      styles.sortOption,
                      selected && styles.sortOptionSelected,
                      pressed && styles.pressed,
                    ]}
                  >
                    <Text
                      style={[
                        styles.sortOptionText,
                        selected && styles.sortOptionTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
          </View>

            {sortedItems.map((item, index) => {
            const isActive = item.id === currentTable;
            const bookChapterInfo = extractBookAndChapter(item.title.english);

            if (bookChapterInfo) {
              const verses = getChapterVerses(
                bookChapterInfo.book,
                bookChapterInfo.chapter
              );
              return (
                <View key={item.id} style={styles.bibleBlock}>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ expanded: isBiblePickerOpen }}
                    onPress={() => setIsBiblePickerOpen((current) => !current)}
                    style={({ pressed }) => [
                      styles.biblePickerToggle,
                      pressed && styles.pressed,
                    ]}
                  >
                    <View style={styles.biblePickerToggleIcon}>
                      <Ionicons
                        name="book-outline"
                        size={17}
                        color={settingsPalette.primary}
                      />
                    </View>
                    <View style={styles.biblePickerToggleText}>
                      <Text style={styles.biblePickerToggleTitle}>
                        Bible Selection
                      </Text>
                      <Text
                        style={styles.biblePickerToggleSubtitle}
                        numberOfLines={1}
                      >
                        Translations, book, and chapter
                      </Text>
                    </View>
                    <Ionicons
                      name={
                        isBiblePickerOpen
                          ? "chevron-up"
                          : "chevron-down"
                      }
                      size={18}
                      color={settingsPalette.muted}
                    />
                  </Pressable>

                  {isBiblePickerOpen ? (
                    <View style={styles.biblePickerPanel}>
                      <BibleChapterPicker
                        navigation={navigation}
                        defaultVersion={versionId}
                        defaultBook={bookChapterInfo.book}
                        defaultChapter={bookChapterInfo.chapter}
                      />
                    </View>
                  ) : null}
                  {verses.map((verse) => (
                    <View
                      key={verse.verse}
                      style={styles.verseWrapper}
                    >
                      <Pressable
                        accessibilityRole="button"
                        onPress={() => {
                          handleDrawerItemPress(verse.verse, true);
                          navigation.closeDrawer();
                        }}
                        style={({ pressed }) => [
                          styles.verseItem,
                          pressed && styles.pressed,
                        ]}
                      >
                      <Text style={styles.verseText}>
                        {verse.verse}: {verse.text.substring(0, 50)}...
                      </Text>
                    </Pressable>
                    </View>
                  ))}
                </View>
              );
            }
            return (
              <View
                ref={itemRefs[index]}
                key={item.id}
                style={styles.itemWrapper}
              >
                <Pressable
                  accessibilityRole="button"
                  onPress={() => {
                    handleDrawerItemPress(item.id);
                    navigation.closeDrawer();
                  }}
                  style={({ pressed }) => [
                    styles.sectionItem,
                    isActive && styles.sectionItemActive,
                    pressed && styles.pressed,
                  ]}
                >
                    <View style={styles.labelViewContainer}>
                      {getDrawerTitleLanguageOrder(item.title).map((lang) => {
                        let textStyle = isActive
                          ? styles.activeTitle
                          : {};
                        if (lang === "english" && item.title.english) {
                          return (
                            <Text
                              key="english"
                              style={[
                                styles.englishTitle,
                                textStyle,
                                item.nonTraditionalPascha && {
                                  fontFamily: "Georgia Italic",
                                },
                              ]}
                            >
                              {item.nonTraditionalPascha
                                ? `• ${item.title.english}`
                                : item.title.english}
                            </Text>
                          );
                        } else if (lang === "coptic" && item.title.coptic) {
                          return (
                            <Text
                              key="coptic"
                              style={[
                                styles.copticTitle,
                                textStyle,
                              ]}
                            >
                              {item.title.coptic}
                            </Text>
                          );
                        } else if (lang === "arabic" && item.title.arabic) {
                          return (
                            <Text
                              key="arabic"
                              style={[
                                styles.arabicTitle,
                                textStyle,
                                item.nonTraditionalPascha && {
                                  fontFamily: "Georgia Italic",
                                },
                              ]}
                            >
                              {item.title.arabic.replace(/<br>/g, "")}
                            </Text>
                          );
                        }
                        return null;
                      })}
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color={isActive ? settingsPalette.primary : settingsPalette.muted}
                    />
                </Pressable>
              </View>
            );
            })}
          </DrawerContentScrollView>
          <View style={styles.footer}>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.reportButton,
                pressed && styles.pressed,
              ]}
              onPress={() => {
                const parentNav = navigation.getParent();
                if (parentNav?.navigate) {
                  parentNav.navigate("ReportIssue", {
                    context: {
                      screenName: currentScreenName,
                      tableId: currentTable,
                      tableTitle: currentTitle,
                    },
                  });
                }
                navigation.closeDrawer();
              }}
            >
              <Ionicons name="flag-outline" size={17} color="#FFFFFF" />
              <Text style={styles.reportButtonText}>Report Section Fix/Update</Text>
            </Pressable>
          </View>
        </View>
    );
  }
);

const drawerMenu = createDrawerNavigator();

const RightMenuDrawer = ({
  html,
  currentTable,
  setCurrentTable,
  drawerItems,
  setDrawerItems,
  handleDrawerItemPress,
  webviewRef,
  versionId = "lxx2012",
  drawerTitle,
}) => {
  const navigation = useNavigation();
  const scrollViewRef = React.useRef(null);

  return (
    <SafeAreaProvider>
      <drawerMenu.Navigator
        initialRouteName="MainContent"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false, // Disable to prevent gesture handler warnings with Reanimated v4
          drawerPosition: "right",
          drawerType: "front",
          overlayColor: "rgba(0,0,0,0.5)",
          unmountOnBlur: false,
          sceneContainerStyle: { backgroundColor: "transparent" },
          drawerStyle: {
            width: isPortrait ? screenWidth * 0.7 : screenWidth * 0.4,
            backgroundColor: settingsPalette.background,
          },
        }}
        detachInactiveScreens={false}
        drawerContent={(props) => (
          <RightDrawerContent
            {...props}
            ref={scrollViewRef}
            currentTable={currentTable}
            drawerItems={drawerItems}
            handleDrawerItemPress={(tableId, row) => {
              handleDrawerItemPress(tableId, webviewRef, row);
              navigation.closeDrawer();
            }}
            versionId={versionId}
            drawerTitle={drawerTitle}
          />
        )}
      >
        <drawerMenu.Screen name="MainContent">
          {({ navigation: rightDrawerNavigation }) => (
            <MainContent
              html={html}
              webviewRef={webviewRef}
              setDrawerItems={setDrawerItems}
              setCurrentTable={setCurrentTable}
              currentTable={currentTable}
              openRightDrawer={() => {
                rightDrawerNavigation.openDrawer();
              }}
            />
          )}
        </drawerMenu.Screen>
      </drawerMenu.Navigator>
    </SafeAreaProvider>
  );
};

export default RightMenuDrawer;
