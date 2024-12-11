import React, { useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Checkbox } from 'react-native-paper';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { presentationStyles } from '../css/presentationStyles';

const SaintSettingsScreen = () => {
    const [settings, , , , , setTextVisibility] = useContext(SettingsContext);
    const doxologyFunctionNames = settings.doxologyFunctionNames;
    


    const handleVisibilityChange = (textType, textName) => {
      const currentVisibility = settings[textType].find(item => item.name === textName).visible;
      setTextVisibility(textType, textName, !currentVisibility);
    };

    const navigation = useNavigation();  // Use the useNavigation hook to access navigation functions
    const handleBackPress = () => {
        navigation.goBack();
    };

    
    return (
        <View style={presentationStyles.settingsScreen}>
          <ScrollView contentContainerStyle={presentationStyles.settingsInnerContainer} style={presentationStyles.scrollView}>
            <Text style={presentationStyles.screenTitle}>Saints Settings</Text>
    
            {/* Render doxology settings */}
            <Text style={presentationStyles.settingTitle}>Doxologies</Text>

            <View style={presentationStyles.languagesContainer}>
              {doxologyFunctionNames
                .filter(item => item.toggle === true) // Only include items where toggle is true
                .map(item => (
                    <View key={item.name} style={presentationStyles.language}>
                        <Text style={presentationStyles.languageTitle}>{item.name}</Text> 

                        <View style={presentationStyles.checkboxWrapper}>  
                          <Checkbox
                          status={item.visible ? 'checked' : 'unchecked'}
                          onPress={() => handleVisibilityChange('doxologyFunctionNames', item.name)}
                          color={'#e19d09'} // Set color for iOS
                          height={Platform.OS === 'ios' ? 30 : 0} // Set height for iOS
                          width={Platform.OS === 'ios' ? 30 : 0} // Set width for iOS
                          />
                      </View>
                    </View>
                ))
                }

            </View>
            <TouchableOpacity style={presentationStyles.button} onPress={handleBackPress}>
                    <Text style={presentationStyles.buttonText}>Apply Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
);
}

export default SaintSettingsScreen;