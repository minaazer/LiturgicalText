import React, { useRef, useEffect , useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import { WebView } from 'react-native-webview';
import { getHtml } from '../../data/glorification';
import { useDynamicStyles } from '../css/cssStylesGlorification';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsContext from '../../settings/settignsContext';
import RightDrawerContent from '../navigation/RightDrawerContent';




const rightMenu = createDrawerNavigator();

const MainContent = ({ webviewRef , setDrawerItems}) => {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [pageOffsets, setPageOffsets] = useState([]);
  const [settings, setSettings] = useContext(SettingsContext);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const html = getHtml(dynamicStyles);


  
  const handleMessage = (event) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      webviewRef.current.injectJavaScript(`window.postMessage(JSON.stringify({ type: 'ACKNOWLEDGED' }));`);

      if (message.type === 'TABLES_INFO') {
        setDrawerItems(message.data);
      }
      else if (message.type === 'PAGINATION_DATA') {
        setPageOffsets(message.data);
      }
      //set current page after right menu navigation
      else if (message.type === 'CURRENT_PAGE_YOFFSET') {
        const yOffset = message.data;
        const pageIndex = pageOffsets.findIndex(offset => ((offset >= yOffset)));
        if (pageOffsets[pageIndex] === yOffset) {
        setCurrentPage(pageIndex);
        } else {
          setCurrentPage(pageIndex -1);
        }
      }
      else{
        console.log("message:", message.type , message.data);
      }

        // After processing, send an acknowledgment back to WebView

    } catch (error) {
      console.error('Failed to parse message from WebView:', error);
    }

  };

  let initialTouchX;

  const handleTouchStart = (event) => {
      initialTouchX = event.nativeEvent.pageX;
  };
  
  const handleTouchEnd = (event) => {
      const touchX = event.nativeEvent.pageX;
      const screenWidth = Dimensions.get('window').width;
  
      const difference = Math.abs(touchX - initialTouchX);
      if (difference < 30) {  // Adjust this threshold as necessary
          if (touchX < screenWidth / 2) {
              handlePrevious();
          } else if (touchX >= screenWidth / 2) {
              handleNext();
          }
      }
  
      initialTouchX = null;
  };
  


  const handleNext = () => {
    if (currentPage < pageOffsets.length - 1) {

        setCurrentPage(prevPage => prevPage + 1);
        const yOffset = pageOffsets[currentPage + 1];
        webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);
        webviewRef.current.injectJavaScript(`clearOverlays()`);
        webviewRef.current.injectJavaScript(`adjustOverlay()`);

    }
};

const handlePrevious = () => {
    if (currentPage > 0) {

        setCurrentPage(prevPage => prevPage - 1);
        const yOffset = pageOffsets[currentPage - 1];
        webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);
        webviewRef.current.injectJavaScript(`clearOverlays()`);
        webviewRef.current.injectJavaScript(`adjustOverlay()`);

    }
};

useEffect(() => {
  webviewRef.current.reload();
  setCurrentPage(0);
}, [settings]);


  return (
    <View style={presentationStyles.container} activeOpacity={1} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}  >

      <WebView
        ref={webviewRef}
        //source={require('../../data/kiahk.html')}
        source= {{html: html}}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onMessage={handleMessage}
        style={presentationStyles.webview}
        userSelect="none"
        
      />

    </View>
  );
};



const Glorification = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const webviewRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;



  const handleDrawerItemPress = (tableId) => {
    const scrollToTableScript = `
      var goToTableElement = document.getElementById('${tableId}');
      var yOffset = goToTableElement ? goToTableElement.getBoundingClientRect().top + window.scrollY : 0;
      goToTableElement.scrollIntoView();
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CURRENT_PAGE_YOFFSET', data: yOffset }));


      clearOverlays();
      adjustOverlay();
    `;
    webviewRef.current.injectJavaScript(scrollToTableScript);
  };

  return (
  <SafeAreaProvider>
        <rightMenu.Navigator 
        initialRouteName='MainContent'
        drawerType='slide'
        screenOptions={{
          headerShown: false, // Hide the default header
          gestureDirection: 'horizontal-inverted', // For RTL swipe gesture
          drawerPosition: 'right',
          swipeEdgeWidth: screenWidth /2 ,
          overlayColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
         }}
         drawerContent={props => 
            <RightDrawerContent 
              {...props}
              drawerItems={drawerItems} 
              handleDrawerItemPress={handleDrawerItemPress} />}
        >

            <rightMenu.Screen name="Glorification Menu">
              {() => <MainContent webviewRef={webviewRef} setDrawerItems={setDrawerItems} />}
            </rightMenu.Screen>

          </rightMenu.Navigator>
  </SafeAreaProvider>
);
        };


        
export default Glorification;
