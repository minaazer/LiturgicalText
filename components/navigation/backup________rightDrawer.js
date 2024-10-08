/* eslint-disable react/prop-types */
import React , { useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerContentScrollView, DrawerItem , createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { presentationStyles } from '../css/presentationStyles';
import { Dimensions } from 'react-native';
import { MainContent } from '../functions/mainContent';

const screenWidth = Dimensions.get('window').width;

const RightDrawerContent = ({ currentTable, drawerItems, handleDrawerItemPress, navigation, props }) => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the drawer items based on the search query
  const filteredItems = drawerItems.filter(item => {
    const searchText = searchQuery.toLowerCase();
    const englishText = item.title.english?.toLowerCase() || '';
    const copticText = item.title.coptic?.toLowerCase() || '';
    const arabicText = item.title.arabic?.toLowerCase() || '';

    // Check if any of the languages match the search query
    return englishText.includes(searchText) || copticText.includes(searchText) || arabicText.includes(searchText);
  });

  return (
    <DrawerContentScrollView {...props}>
      {/* Search bar */}
      <View style={presentationStyles.searchContainer}>
        <TextInput
          style={presentationStyles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Render filtered drawer items */}
      {filteredItems.map((item, index) => {
        const isActive = item.id === currentTable;

        return (
          <View style={presentationStyles.itemWrapper} key={item.id}>
            <DrawerItem
              label={() => 
                <View style={presentationStyles.labelViewContainer}>
                  {item.title.order.map((lang) => {
                    let textStyle = isActive ? presentationStyles.activeTitle : {};
                    if (lang === 'english' && item.title.english) {
                      return <Text key="english" style={[presentationStyles.englishTitle, textStyle]}>{item.title.english}</Text>;
                    } else if (lang === 'coptic' && item.title.coptic) {
                      return <Text key="coptic" style={[presentationStyles.copticTitle, textStyle]}>{item.title.coptic}</Text>;
                    } else if (lang === 'arabic' && item.title.arabic) {
                      return <Text key="arabic" style={[presentationStyles.englishTitle, textStyle]}>{item.title.arabic}</Text>;
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
                }
                
                
              } />}
            >    
            <drawerMenu.Screen name="MainContent">
            {() => <MainContent html={html} webviewRef={webviewRef} setDrawerItems={setDrawerItems} setCurrentTable={setCurrentTable}/>}
            </drawerMenu.Screen>
        </drawerMenu.Navigator>
      </SafeAreaProvider>    
      
  );
};


export default RightMenuDrawer;
