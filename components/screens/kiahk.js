import React, { useRef, useEffect , useState, useContext } from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { getHtml } from '../../data/kiahk';
import { useDynamicStyles } from '../css/cssStyles';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { DrawerItem,  DrawerContentScrollView , createDrawerNavigator } from '@react-navigation/drawer';



const RightDrawerContent = ({ drawerItems, handleDrawerItemPress , navigation ,  props }) => {
  return (
    <DrawerContentScrollView {...props}
    >
      
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={item.id}
          label={()=> 
            <View style={styles.labelViewContainer}>
            {item.title.english ? <Text style={styles.englishTitle}>{item.title.english}</Text> : null}
            {item.title.coptic ? <Text style={styles.copticTitle}>{item.title.coptic}</Text> : null}
            </View>
          }
          onPress={() => {
            handleDrawerItemPress(item.id);
            navigation.closeDrawer();  // this line closes the drawer
          }}
          labelStyle={styles.labelStyle}
          style={styles.itemContainerStyle}
          itemStyle={styles.itemStyle}
          numberOfLines={null}
          />
      ))}
    </DrawerContentScrollView>
  );
};

const rightMenu = createDrawerNavigator();

const MainContent = ({ webviewRef , setDrawerItems}) => {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [pageOffsets, setPageOffsets] = useState([]);

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
  console.log("difference" , difference);
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



  return (
      <View style={styles.container} activeOpacity={1} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} >

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
      </View>

  );
};



const Kiahk = () => {
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

            <rightMenu.Screen name="Kiahk Psalmody">
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
    marginVertical: -5,
    marginRight: -32,
    

  },
  itemStyle: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  itemContainerStyle:{
    marginVertical: -3,
    paddingVertical: 0,
    marginLeft: 0
  }

});

export default Kiahk;
