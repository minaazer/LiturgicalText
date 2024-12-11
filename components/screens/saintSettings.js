import React, { useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { presentationStyles } from '../css/presentationStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


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
          <View style={presentationStyles.titleContainer}>
                    <TouchableOpacity style={presentationStyles.backButton} onPress={handleBackPress}>
                                <Text style={presentationStyles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={presentationStyles.screenTitle}>Saint Settings</Text>
                    <Text style={presentationStyles.settingTitle}>Doxologies</Text>

                </View>
    
            {/* Render doxology settings */}

            <View style={presentationStyles.languagesContainer}>
              {doxologyFunctionNames
                .filter(item => item.toggle === true) // Only include items where toggle is true
                .map(item => (
                    <View key={item.name} style={presentationStyles.language}>
                        <BouncyCheckbox
                          isChecked={item.visible} // Control the checked state
                          onPress={(isChecked) => handleVisibilityChange('doxologyFunctionNames', item.name, isChecked)} // Update state on press
                          fillColor="#e19d09" // Checked state color
                          unfillColor="#FFFFFF" // Unchecked state background color
                          iconStyle={{ borderColor: 'black' }} // Border color when unchecked
                          textStyle={{
                            textDecorationLine: 'none', // Remove strikethrough
                            color: 'black', // Optional: Set text color
                            fontSize: 16, // Optional: Adjust text size
                        }}
                          text={item.name} // No text needed for this checkbox
                      />
                    </View>
                ))
                }

            </View>
        </ScrollView>
    </View>
);
}

export default SaintSettingsScreen;