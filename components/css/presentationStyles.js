/** @format */

import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";
import { songs } from "../../data/songs/songs";

const screenWidth = Dimensions.get("window").width;
const isTablet = screenWidth >= 600;
const isComputer = screenWidth >= 1000;
const languageWidth = isComputer ? "30%" : isTablet ? "45%" : "90%";

export const presentationStyles = StyleSheet.create({
  // Styles for bookDrawer *********************************************************
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    paddingVertical: 0,
    backgroundColor: "black",
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    zIndex: 10, // To ensure it is above the webview
  },
  webview: {
    flex: 1,
    pointerEvents: "auto",
  },
  leftControl: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "50%",
    backgroundColor: "rgba(255,255,255,0.1)", // semi-transparent
  },
  rightControl: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "50%",
    backgroundColor: "rgba(255,255,255,0.1)", // semi-transparent
  },
  englishTitle: {
    fontSize: 18,
    color: "black",
    fontFamily: "Georgia",
    textAlign: "center",
  },
  copticTitle: {
    fontSize: 18,
    color: "black",
    fontFamily: "ArialCoptic",
    textAlign: "center",
  },
  labelViewContainer: {
    marginVertical: -15,
    marginRight: -32,
  },
  itemStyle: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  itemContainerStyle: {
    marginVertical: 3.5,
    paddingVertical: 0,
    marginLeft: 0,
  },
  itemWrapper: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  embossedLine: {
    height: 5, // Adjust the height as needed
    width: "100%",
    alignSelf: "center",
    backgroundColor: "transparent",
    borderBottomWidth: 1, // Increased thickness
    borderBottomColor: "#593E2E", // Dark brown shade
    marginTop: 3, // Optional: Adds some spacing after the item
    marginBottom: 3, // Optional: Adds some spacing before the next item
  },

  activeTitle: {
    color: "#f01e2c", // Change this to your preferred color for active items
  },

  // DRAWER STYLES *********************************************************
  drawerContentScrollView: {
    backgroundColor: "#003060",
    margin: 0,
    padding:0,
    flex: 1,
  },
  bookDrawerContentScrollView: {
    margin: 0,
    padding: 0,
    flex: 1,
  },
  drawerContentContainer: {
    ...(Platform.OS === "ios" && !Platform.isPad && { marginLeft: -20 }),
    paddingTop: 0,
    paddingBottom: 10,
  },

  drawerHeaderContainer: {
    marginVertica: 10,
    paddingTop: 20,
  },
  drawerHeaderText: {
    textAlign: "center",
    fontSize: screenWidth * 0.03,
    fontFamily: "Georgia Bold",
    color: "#e19d09",
    textShadowColor: "grey",
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
    elevation: 5,
  },

  drawerLabel: {
    fontSize: screenWidth * 0.025,
    color: "white",
    fontFamily: "Georgia",
    marginVertical: -7,
    padding: 0,
  },
  drawerItem: {
    //remove the spacing between the items
    marginVertical: 0,
    marginHorizontal: "5%",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  drawerLineBreak: {
    height: 1,
    width: "90%",
    backgroundColor: "grey",
    marginHorizontal: "5%",
    marginVertical: 0,
  },

  // Holy week screens styles *********************************************************
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6EEE9",
  },

  pageHeader: {
    fontSize: 40,
    fontFamily: "Garamond Bold",
    textAlign: "center",
    color: "white",
    margin: 0,
    padding: 0,
    elevation: 5,
    textShadowColor: "grey",
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },

  pageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
    backgroundColor: "#003060",
  },

  booksContainer: {
    flex: 3.5,
    marginLeft: -20,
    justifyContent: "center",
    alignItems: "center", // adjusted from 'flex-start'
    alignContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 0,
  },

  iconContainer: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    padding: 20,
    width: "100%",
  },

  iconImage: {
    width: 120, // adjusted from 200
    height: 120, // adjusted from 200
    resizeMode: "contain",
    margin: 0,
    padding: 0,
  },

  // Day of Sunday *********************************************************

  pageMenu: {
    fontSize: 30,
    fontFamily: "Garamond Bold",
    textAlign: "center",
    color: "#003060",
    elevation: 5,
    textShadowColor: "grey",
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  pageMenuAlt: {
    fontSize: 30,
    fontFamily: "Garamond Bold",
    textAlign: "center",
    color: "#4d0000",
    elevation: 5,
    textShadowColor: "grey",
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  hoursContainer: {
    flex: 2.5,
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "center",
    flexWrap: "wrap",
  },
  daysContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
    // different types of flexWrap: "wrap", "nowrap", "wrap-reverse"
    // is there a way to wrap evenly with a fixed number of items per row?

    flexWrap: "wrap",
  },
  itemContainer: {
    marginVertical: 5,
    paddingHorizontal: 5,
    width: "50%",
  },
  songsContainer: {
    marginVertical: 5,
    paddingHorizontal: 5,
    width: "100%",
  },
  searchContainer: {
    paddingTop: 5,
    marginTop: -5,
    backgroundColor: "#003060", // Make the background visible
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // Add a border for separation
  },
  searchInput: {
    height: 40,
    borderColor: "#003060",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    backgroundColor: "#fff",
  },

  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 7,
  },
  sortButton: {
    padding: 0,
    backgroundColor: "#003060",
    borderRadius: 5,
  },
  sortButtonText: {
    fontSize: 16,
    color: "white",
  },
  activeSortButton: {
    fontSize: 16,
    color: "#e19d09", // Active sort button color
    // make it bold
    fontWeight: "bold",
  },

  // Settings screen styles *********************************************************
  settingsScreen: {
    backgroundColor: "#003060",
    flex: 1,
  },

  settingsInnerContainer: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
    borderRadius: 20,
    paddingBottom: 0,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  screenTitle: {
    fontSize: screenWidth * 0.04,
    fontWeight: "bold",
    marginBottom: "0%",
    color: "#e19d09",
    marginTop: 10,
  },
  settingsContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  twoColumnSettingsContainer:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",

  },
  fontSetting: {
    display: "flex",
    flexDirection: Platform.OS === "ios" ? "column" : "row",
    alignItems: Platform.OS === "ios" ? "flex-start" : "center",
    justifyContent: "space-between",
    width: "30%",
    marginBottom: "1%",
  },
  picker: {
    flex: 1,
    width: Platform.OS === "ios" ? "100%" : "auto",
    overflow: "hidden",
  },

  setting: {
    width: "100%",
    marginBottom: "1%",
  },

  settingTitle: {
    fontSize: screenWidth * 0.03,
    fontWeight: "bold",
    flex: 1,
    color: "black",
    marginBottom: 10,
  },

  languagesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,

    flexWrap: "wrap",
  },

  language: {
    width: languageWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

  languageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "0%",
    color: "black",
  },
  checkboxWrapper: {
    width: "30",
    height: "30",
    borderWidth: Platform.OS === "ios" ? 1 : 0, // Border width
    borderColor: 'black', // Border color
    borderRadius: 50,     // Optional: rounded corners
    padding: 0,
    margin: 3,          // Space between border and checkbox
  },

  button: {
    backgroundColor: "#003060",
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    marginTop: "0%",
    justifyContent: "center",
    width: "30%",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  /// Coptic Seasons
  seasonsContainer: {
    marginTop: 0,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },

  seasonPickerContainer: {
    marginTop: 20,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  seasonCard: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: "100%",
  },
  currentSeasonCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: "70%",
  },
  seasonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003060",
  },
  currentSeasonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003060",
    textAlign: "center",
  },
  seasonDate: {
    fontSize: 14,
    color: "#666",
  },
  seasonCopticDate: {
    fontSize: 14,
    color: "#666",
    fontWeight: "bold",
  },
  divider: {
    height: 2, // Slightly thicker than 1px for better visibility
    backgroundColor: "#003060", // Contrasting color
    marginTop: 10, // Add vertical margins for space
    width: "90%", // Ensure the divider stretches across the screen width
  },
  seasonsButtonContainer: {
    marginTop: 20,
    width: "30%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  calendarButton: {
    backgroundColor: "#003060",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    marginTop: "0%",
    justifyContent: "center",
    width: "98%",
  },

  inactiveButton: {
    backgroundColor: "#ccc",
  },
});
