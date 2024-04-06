/* eslint-disable react/prop-types */
import React , {useEffect } from 'react';
import { View, Text , ImageBackground} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItem , createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { presentationStyles } from '../css/presentationStyles';
import { Dimensions } from 'react-native';
import { MainContent } from '../functions/mainContent';
import backgroundImage from "../../assets/background.png";

const screenWidth = Dimensions.get('window').width;

const RightDrawerContent = ({ currentTable, drawerItems,  handleDrawerItemPress, navigation, props }) => {
  // Create a ref for the ScrollView and each drawer item
const scrollViewRef = React.createRef();
const itemRefs = drawerItems.map(() => React.createRef());

// Inside your component
useEffect(() => {
  const activeItemIndex = drawerItems.findIndex(item => item.id === currentTable);
  const activeItemRef = itemRefs[activeItemIndex];

  if (activeItemRef && activeItemRef.current && scrollViewRef && scrollViewRef.current) {
    activeItemRef.current.measureLayout(
      scrollViewRef.current.getScrollableNode(),
      (x, y) => {
        if (scrollViewRef && scrollViewRef.current && currentTable && y) {
          scrollViewRef.current.scrollTo({ x: 0, y: y, animated: false });
        }
      },
      error => console.error(error)
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
    {...props}>
      {drawerItems.map((item, index) => {

        const isActive = item.id === currentTable;
        return (
          <View 
              ref={itemRefs[index]} 
              style={presentationStyles.itemWrapper} 
              key={item.id} 
              
          >
            <DrawerItem
              label={() => 
                <View style={presentationStyles.labelViewContainer}>
                  {item.title.order.map((lang) => {
                    // add an irem reference to indicate if the item is active
                    let textStyle = isActive ? presentationStyles.activeTitle : {};
                    if (lang === 'english' && item.title.english) {
                      return <Text key="english" style={[presentationStyles.englishTitle, textStyle]}>{item.title.english}</Text>;
                    } else if (lang === 'coptic' && item.title.coptic) {
                      return <Text key="coptic" style={[presentationStyles.copticTitle, textStyle]}>{item.title.coptic}</Text>;
                    } else if (lang === 'arabic' && item.title.arabic) {
                      return <Text key="arabic" style={[presentationStyles.englishTitle, textStyle]}>{item.title.arabic.replace(/<br>/g, '')}</Text>;
                    }
                    return null;
                  })}
                </View>
              }
              onPress={() => {
                handleDrawerItemPress(item.id);
                navigation.closeDrawer();
              
              }}
              labelStyle={presentationStyles.labelStyle}
              style={presentationStyles.itemContainerStyle}
              itemStyle={presentationStyles.itemStyle}
              numberOfLines={null}
            />
            {index !== drawerItems.length - 1 && <View style={presentationStyles.embossedLine}></View>}
          </View>
        );
      })}
    </DrawerContentScrollView>
    </ImageBackground>
  );
};
  
const drawerMenu = createDrawerNavigator();

const RightMenuDrawer = ({ html , currentTable, setCurrentTable , drawerItems, setDrawerItems , handleDrawerItemPress, webviewRef }) => {
  const navigation = useNavigation();
  return (

    <SafeAreaProvider>

      <drawerMenu.Navigator
        initialRouteName='MainContent'
        screenOptions={{
          headerShown: false, // Hide the default header
          gestureDirection: 'horizontal-inverted', // For RTL swipe gesture
          drawerPosition: 'right',
          drawerType: 'slide', 
          swipeEdgeWidth: screenWidth /3 ,
          overlayColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
          drawerStyle: {width: screenWidth *.4}
        }}
        drawerContent={props => 
            <RightDrawerContent 
              {...props}
              currentTable={currentTable}
              drawerItems={drawerItems} 
              handleDrawerItemPress={
                (tableId) => {
                  handleDrawerItemPress(tableId, webviewRef);
                  navigation.closeDrawer();
                } } />
        }
        >    
          <drawerMenu.Screen name="MainContent">
            {() => <MainContent html={html} webviewRef={webviewRef} setDrawerItems={setDrawerItems} setCurrentTable={setCurrentTable}/>}
          </drawerMenu.Screen>
      </drawerMenu.Navigator>
      </SafeAreaProvider>    
      
  );
};


export default RightMenuDrawer;
