/** @format */

import { StyleSheet } from "react-native";
import { Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const isIpad = Platform.OS === "ios" && Platform.isPad;
const isIphone = Platform.OS === "ios" && !Platform.isPad;
const isPortrait = screenWidth < screenHeight;
const isTablet = screenWidth >= 600;
const isComputer = screenWidth >= 1000;
const languageWidth = isComputer ? "30%" : isTablet ? "45%" : "90%";
const drawerMarginLeft = isIpad ? 0 : isIphone && !isPortrait ? -20 : 0;

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
    textAlign: "left",
  },
  arabicTitle: {
    fontSize: 18,
    color: "black",
    fontFamily: "Georgia",
    textAlign: "right",
  },
  
  copticTitle: {
    fontSize: 18,
    color: "black",
    fontFamily: "ArialCoptic",
    textAlign: "left",
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
    marginLeft: drawerMarginLeft,
    paddingTop: 0,
    paddingBottom: 10,
  },

  drawerHeaderContainer: {
    marginVertica: 10,
    paddingTop: 20,
  },
  drawerHeaderText: {
    textAlign: "center",
    fontSize: isPortrait ? screenHeight * 0.03 :screenWidth * 0.03,
    fontFamily: "Georgia Bold",
    color: "#e19d09",
    textShadowColor: "grey",
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
    elevation: 5,
  },
  drawerText: {
    textAlign: "center",
    fontSize: isPortrait ? screenHeight * 0.02 : screenWidth * 0.02,
    fontFamily: "Georgia",
    color: "#FFF",
    marginVertical: 5,
    marginHorizontal: 10,
  },

  drawerLabel: {
    fontSize: isPortrait ? screenHeight * 0.025 : screenWidth * 0.025,
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
  drawerTouchableOpacity: {
    marginVertical: 5,
    marginHorizontal: "5%",
    paddingVertical: 10,
    paddingHorizontal: 0,
    backgroundColor: "transparent",
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
    flexDirection: isPortrait ? "column" : "row",
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
    alignItems: isPortrait ? "center" : "flex-start",
    alignContent: "center",
    flexWrap: "wrap",
  },
  daysContainer: {
    flex: 3,
    flexDirection: !isPortrait ? "column" : "row",
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
  searchSortContainer: {
    display: "flex",
    flexDirection: isPortrait ? "column" : "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  settingsSortButton: {
    backgroundColor: "grey",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    justifyContent: "center",
    width: isPortrait ? "90%" : null,
    alignSelf: "center",
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
    fontSize: isPortrait ? screenHeight * 0.04 : screenWidth * 0.04,
    fontWeight: "bold",
    marginBottom: "0%",
    color: "#e19d09",
    marginTop: 10,
    textAlign: "center",
  },
  settingsContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  twoColumnSettingsContainer:{
    width: "100%",
    display: "flex",
    flexDirection: isPortrait ? "column" : "row",
    justifyContent: isPortrait ? "center" : "space-between",
    alignItems: "center",
    flexWrap: "wrap",

  },
  fontSetting: {
    display: "flex",
    flexDirection: isPortrait ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: isPortrait ? "100%" : "50%",
    marginBottom: 10,
  },
  pickerWrapper: {
    width: isPortrait ? "auto" : "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
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
    fontSize: isPortrait ? screenHeight * 0.022 : screenWidth * 0.022,
    fontWeight: "bold",
    flex: 1,
    color: "black",
    marginBottom: 10,
  },

  languagesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 5,

    flexWrap: "wrap",
  },

  language: {
    width: languageWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "Flex-start",
    marginHorizontal: 10,
    marginBottom: 5,
  },

  languageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "0%",
    color: "black",
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
  titleContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    position: "relative", // Ensure children can use absolute positioning
},

  backButton: {
    position: "absolute", // Position absolutely within the container
    top: 10, // Distance from the top of the container
    left: 10, // Distance from the left of the container
    backgroundColor: "grey",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
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
    width: "100%", // Ensure it spans the full width of the screen
    display: "flex",
    flexDirection: isPortrait ? "column" : "row", // Stack buttons vertically in portrait
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    paddingHorizontal: 10, // Add some padding for better spacing
},
seasonCardsContainer: {
  marginTop: 0,
  width: "90%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: isPortrait ? "center" : "flex-start",
  alignItems: "center",
},

seasonsButtonContainer: {
    marginTop: 20,
    width: isPortrait ? "90%" : "30%",
    display: "flex",
    flexDirection: "column", // Always stack buttons vertically
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    padding: 10, // Add padding around the buttons
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

  // Bible screen styles *********************************************************
  bibleScreenContainer: {
    flex: 0, // Prevents the container from stretching to fill the screen
    flexDirection: "column",
    justifyContent: "flex-start", // Align items to the top
    alignItems: "center",
    paddingVertical: 20, // Optional padding for consistent spacing around the container
  },
  bibleSelectionContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 10, // Add spacing between the containers
  },
  bibleSellectionTitle: {
    fontSize: isPortrait ? screenHeight * 0.025 : screenWidth * 0.025,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5, // Reduce the space below the title
    textAlign: "center",
  },
  bibleSelectionButton: {
    backgroundColor: "#003060",
    borderRadius: 10,
    padding: 10,
    marginTop: 20, // Space between the last selection container and the button
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  

  // POPUP STYLES *********************************************************

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    },
  alertBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    maxHeight: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: '#ddd',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    paddingBottom: 20,
    marginTop: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 22,
  },

});


