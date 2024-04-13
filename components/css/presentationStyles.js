import {StyleSheet} from 'react-native';
import { Dimensions , Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const presentationStyles = StyleSheet.create({

  // Styles for bookDrawer *********************************************************
    container: {
      flex: 1,
      marginTop: 0,
      marginBottom: 0,
      paddingVertical: 0,
      backgroundColor: 'black',
    },
    webview: {
      flex: 1,
      pointerEvents: 'none',
    },
    leftControl: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '50%',
      backgroundColor: 'rgba(255,255,255,0.1)', // semi-transparent
    },
    rightControl: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '50%',
      backgroundColor: 'rgba(255,255,255,0.1)', // semi-transparent
    },
    englishTitle: {
      fontSize: 18,
      color: 'black',
      fontFamily: 'Georgia',
      textAlign: 'center',
    },
    copticTitle: {
      fontSize: 18,
      color: 'black',
      fontFamily: 'ArialCoptic',
      textAlign: 'center',

    },
    labelViewContainer: {
      marginVertical: -15,
      marginRight: -32,
      
    },
    itemStyle: {
      marginVertical: 0,
      paddingVertical: 0,
    },
    itemContainerStyle:{
      marginVertical: 3.5,
      paddingVertical: 0,
      marginLeft: 0
    },
    itemWrapper: {
      flex: 1,
      padding:0,
      margin:0,
    },
    embossedLine: {
      height: 5, // Adjust the height as needed
      width: '100%',
      alignSelf: 'center',
      backgroundColor: 'transparent',
      borderBottomWidth: 1, // Increased thickness
      borderBottomColor: '#593E2E',  // Dark brown shade
      marginTop: 3, // Optional: Adds some spacing after the item
      marginBottom: 3, // Optional: Adds some spacing before the next item
    },
    
    activeTitle: {
      color: '#f01e2c', // Change this to your preferred color for active items
    },







// DRAWER STYLES *********************************************************
    drawerContentScrollView: {
      backgroundColor: '#003060',
      margin: 0,
      padding: 0,
      flex: 1,
  
    },
    bookDrawerContentScrollView: {
      margin: 0,
      padding: 0,
      flex: 1,
    },
    drawerContentContainer: {
  
      ...(Platform.OS === 'ios' && !Platform.isPad && { marginLeft: -40 }),
      paddingTop: 0,
      paddingBottom: 10,
  
    },
  
    drawerHeaderContainer: {
      marginVertica: 10,
      paddingTop: 20
  
  
    },
    drawerHeaderText: {
      textAlign: 'center',
      fontSize: screenWidth * 0.03,
      fontFamily: 'Georgia Bold',
      color: '#e19d09',
      textShadowColor: 'grey',
      textShadowRadius: 5,
      textShadowOffset: { width: 1, height: 1 },
      elevation: 5,
  
    },
  
    drawerLabel: {
      fontSize: screenWidth * 0.025,
      color: 'white',
      fontFamily: 'Georgia',
      marginVertical: -7,
      padding: 0,
  
  
    },
    drawerItem: {
      //remove the spacing between the items
      marginVertical: 0,
      marginHorizontal: '5%',
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    drawerLineBreak: {
      height: 1,
      width: '90%',
      backgroundColor: 'grey',
      marginHorizontal: '5%',
      marginVertical: 0,
    },
    settingsScreen: {
      shadowColor: 'black',
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
      flex: 3,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
      flexWrap: "wrap",
    },
    itemContainer: {
      marginVertical: 5,
      paddingHorizontal: 5,
      width: "50%",
    },


  });

  