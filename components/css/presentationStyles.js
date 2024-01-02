import {StyleSheet} from 'react-native';

export const presentationStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      marginBottom: 0,
  
      paddingVertical: 0,
      backgroundColor: 'black',
      marginBottom: 0,
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
      fontFamily: 'NotoSansMedium',
    },
    copticTitle: {
      fontSize: 18,
      color: 'black',
      fontFamily: 'ArialCoptic',
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
      height: 1, // Adjust the height as needed
      width: '80%',
      alignSelf: 'center',
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',  // Light shade
      borderTopWidth: 1,
      borderTopColor: '#eee',  // Dark shade
      marginTop: 0, // Optional: Adds some spacing after the item
      marginBottom: 0, // Optional: Adds some spacing before the next item
      
    },
    activeTitle: {
      color: '#f1592a', // Change this to your preferred color for active items
    }
  
  });
  