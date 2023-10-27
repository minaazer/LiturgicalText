import React, { useRef, useEffect , useState, useContext } from 'react';
import { View, StyleSheet , TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { getHtml } from '../../data/glorification';
import { useDynamicStyles } from '../css/cssStylesGlorification';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { DrawerItem,  DrawerContentScrollView , createDrawerNavigator } from '@react-navigation/drawer';
import SettingsContext from '../../settings/settignsContext';



const RightDrawerContent = ({ drawerItems, handleDrawerItemPress , navigation ,  props }) => {
  return (
    <DrawerContentScrollView {...props}
    >
      
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={item.id}
          label={item.title}
          onPress={() => {
            handleDrawerItemPress(item.id);
            navigation.closeDrawer();  // this line closes the drawer
          }}
          labelStyle={{ flex: 1, fontSize: 14, color: 'black'}}
          />
      ))}
    </DrawerContentScrollView>
  );
};

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

  const handlePageTap = (event) => {
    const touchX = event.nativeEvent.pageX;
    const screenWidth = Dimensions.get('window').width;

    if (touchX < screenWidth / 2) {
      handlePrevious();
    } else if (touchX >= screenWidth / 2) {
      handleNext();
    } else {
    }
};

  const handleNext = () => {
    if (currentPage < pageOffsets.length - 1) {

        setCurrentPage(prevPage => prevPage + 1);
        const yOffset = pageOffsets[currentPage + 1];
        console.log("current page" , currentPage , ' , ' , yOffset)
        webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);
        webviewRef.current.injectJavaScript(`clearOverlays()`);
        webviewRef.current.injectJavaScript(`adjustOverlay()`);

    }
};

const handlePrevious = () => {
    if (currentPage > 0) {
      console.log("current page" , currentPage)

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
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={handlePageTap} style={{flex: 1}}>

      <WebView
        ref={webviewRef}
        //source={require('../../data/kiahk.html')}
        source= {{html: html}}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onMessage={handleMessage}
        style={styles.webview}
        userSelect="none"
        
      />
      </TouchableOpacity>

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,

    paddingVertical: 5,
    backgroundColor: 'black',
    marginBottom: 0,
  },
  webview: {
    flex: 1,
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
});

export default Glorification;
