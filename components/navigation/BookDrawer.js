/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { presentationStyles } from "../css/presentationStyles";
import { Dimensions } from "react-native";
import { MainContent } from "../functions/mainContent";
import backgroundImage from "../../assets/background.png";
import { BibleChapterPicker } from "../reusableComponents/pickers";
import BibleData from "../../data/bible/bible.json";

const screenWidth = Dimensions.get("window").width;
const isPortrait = screenWidth < 500;

const getChapterVerses = (bookTitle, chapterNumber) => {
  const book = BibleData.find((b) => b.title === bookTitle);
  const chapter = book.chapters.find((c) => c.chapter === chapterNumber);
  return chapter.verses;
};

const extractBookAndChapter = (title) => {
  // Trim the title to remove any leading or trailing whitespace
  const trimmedTitle = title.trim();
  // Match the pattern using regex
  const match = trimmedTitle.match(/^Bible \/ (.+?) Chapter (\d+)$/);
  if (match) {
    return { book: match[1].trim(), chapter: parseInt(match[2], 10) };
  }
  return null;
};


const RightDrawerContent = React.forwardRef(
  ({ currentTable, drawerItems, handleDrawerItemPress, navigation, ...props }, scrollViewRef) => {
    const itemRefs = drawerItems.map(() => React.createRef());
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("original");

    const filteredItems = drawerItems.filter((item) => {
      const searchText = searchQuery.toLowerCase();
      return (
        item.title.english?.toLowerCase().includes(searchText) ||
        item.title.coptic?.toLowerCase().includes(searchText) ||
        item.title.arabic?.toLowerCase().includes(searchText)
      );
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
      if (sortOption === "english") {
        return a.title.english?.localeCompare(b.title.english);
      } else if (sortOption === "arabic") {
        return a.title.arabic?.localeCompare(b.title.arabic);
      }
      return 0;
    });

    useEffect(() => {
      const activeItemIndex = drawerItems.findIndex((item) => item.id === currentTable);
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
      <ImageBackground
        source={backgroundImage}
        style={presentationStyles.backgroundImage}
        resizeMode="repeat"
      >
        <DrawerContentScrollView
          ref={scrollViewRef}
          style={presentationStyles.bookDrawerContentScrollView}
          {...props}
        >
          <View style={presentationStyles.searchContainer}>
            <View style={presentationStyles.sortContainer}>
              <TouchableOpacity
                onPress={() => setSortOption("english")}
                style={presentationStyles.sortButton}
              >
                <Text
                  style={
                    sortOption === "english"
                      ? presentationStyles.activeSortButton
                      : presentationStyles.sortButtonText
                  }
                >
                  English Sort
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSortOption("original")}
                style={presentationStyles.sortButton}
              >
                <Text
                  style={
                    sortOption === "original"
                      ? presentationStyles.activeSortButton
                      : presentationStyles.sortButtonText
                  }
                >
                  Original
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSortOption("arabic")}
                style={presentationStyles.sortButton}
              >
                <Text
                  style={
                    sortOption === "arabic"
                      ? presentationStyles.activeSortButton
                      : presentationStyles.sortButtonText
                  }
                >
                  Arabic Sort
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={presentationStyles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {sortedItems.map((item, index) => {
            const isActive = item.id === currentTable;
            const bookChapterInfo = extractBookAndChapter(item.title.english);
            
            if (bookChapterInfo) {
              const verses = getChapterVerses(bookChapterInfo.book, bookChapterInfo.chapter);
              return (
                <View key={item.id} style={presentationStyles.itemWrapper}>
                  <BibleChapterPicker
                    navigation={navigation}
                    defaultBook={bookChapterInfo.book}
                    defaultChapter={bookChapterInfo.chapter}
                  />
                  {verses.map((verse, verseIndex) => (
                    <View key={verse.verse} style={presentationStyles.itemWrapper}>
                      <DrawerItem
                        label={() => (
                          <Text style={presentationStyles.englishTitle}>
                            {verse.verse}: {verse.text.substring(0, 50)}...
                          </Text>
                        )}
                        onPress={() => {
                          // Handle verse selection
                          handleDrawerItemPress(verse.verse, true);
                          navigation.closeDrawer();
                        }}
                        style={presentationStyles.itemContainerStyle}
                      />
                      {verseIndex !== verses.length - 1 && (
                        <View style={presentationStyles.embossedLine}></View>
                      )}
                    </View>
                  ))}
                </View>
              );
            }
            return (
              <View ref={itemRefs[index]} key={item.id} style={presentationStyles.itemWrapper}>
                <DrawerItem
                  label={() => (
                    <View style={presentationStyles.labelViewContainer}>
                      {item.title.order.map((lang) => {
                        let textStyle = isActive ? presentationStyles.activeTitle : {};
                        if (lang === "english" && item.title.english) {
                          
                          return (
                            <Text
                              key="english"
                              style={[
                                presentationStyles.englishTitle,
                                textStyle,
                                item.nonTraditionalPascha && { fontFamily: 'Georgia Italic'}
                              ]}                              
                            >
                              {item.nonTraditionalPascha ? `• ${item.title.english}` : item.title.english}
                            </Text>
                          );
                        } else if (lang === "coptic" && item.title.coptic) {
                          return (
                            <Text
                              key="coptic"
                              style={[presentationStyles.copticTitle, textStyle]}
                            >
                              {item.title.coptic}
                            </Text>
                          );
                        } else if (lang === "arabic" && item.title.arabic) {
                          return (
                            <Text
                              key="arabic"
                              style={[
                                presentationStyles.englishTitle,
                                textStyle,
                                item.nonTraditionalPascha && { fontFamily: 'Georgia Italic' }
                              ]}
                              
                            >
                              {item.title.arabic.replace(/<br>/g, "")}
                            </Text>
                          );
                        }
                        return null;
                      })}
                    </View>
                  )}
                  onPress={() => {
                    handleDrawerItemPress(item.id);
                    navigation.closeDrawer();
                  }}
                  style={presentationStyles.itemContainerStyle}
                />
                {index !== drawerItems.length - 1 && (
                  <View style={presentationStyles.embossedLine}></View>
                )}
              </View>
            );
          })}
        </DrawerContentScrollView>
      </ImageBackground>
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
}) => {
  const navigation = useNavigation();
  const scrollViewRef = React.useRef(null);

  return (
    <SafeAreaProvider>
      <drawerMenu.Navigator
        initialRouteName="MainContent"
        screenOptions={{
          headerShown: false,
          gestureDirection: "horizontal-inverted",
          drawerPosition: "right",
          drawerType: "front",
          swipeEdgeWidth: isPortrait ? screenWidth / 2 : screenWidth / 3,
          swipeMinDistance: 10,
          overlayColor: "rgba(0,0,0,0.5)",
          drawerStyle: { width: isPortrait ? screenWidth * 0.7 : screenWidth * 0.4 },
        }}
        drawerContent={(props) => (
          <RightDrawerContent
            {...props}
            ref={scrollViewRef}
            currentTable={currentTable}
            drawerItems={drawerItems}
            handleDrawerItemPress={(tableId,row) => {
              handleDrawerItemPress(tableId, webviewRef, row);
              navigation.closeDrawer();
            }}
          />
        )}
      >
        <drawerMenu.Screen name="MainContent">
          {() => (
            <MainContent
              html={html}
              webviewRef={webviewRef}
              setDrawerItems={setDrawerItems}
              setCurrentTable={setCurrentTable}
              currentTable={currentTable}
            />
          )}
        </drawerMenu.Screen>
      </drawerMenu.Navigator>
    </SafeAreaProvider>
  );
};

export default RightMenuDrawer;
