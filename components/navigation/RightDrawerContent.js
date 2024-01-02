import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { presentationStyles } from '../css/presentationStyles';

const RightDrawerContent = ({ currentTable, drawerItems, handleDrawerItemPress, navigation, props }) => {
  
  return (
    <DrawerContentScrollView {...props}>
      {drawerItems.map((item, index) => {
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
  

export default RightDrawerContent;
