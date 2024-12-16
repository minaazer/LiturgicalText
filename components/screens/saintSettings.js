import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { presentationStyles } from '../css/presentationStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SaintSettingsScreen = () => {
    const [settings, , , , , setTextVisibility] = useContext(SettingsContext);
    const doxologyFunctionNames = settings.doxologyFunctionNames;

    const [sortByName, setSortByName] = useState(false); // State to track sorting order
    const [searchQuery, setSearchQuery] = useState(''); // State to track search input

    const handleVisibilityChange = (textType, textName) => {
        const currentVisibility = settings[textType].find(item => item.name === textName).visible;
        setTextVisibility(textType, textName, !currentVisibility);
    };

    const navigation = useNavigation(); // Use the useNavigation hook to access navigation functions
    const handleBackPress = () => {
        navigation.goBack();
    };

    // Toggle Sorting Order
    const toggleSortOrder = () => {
        setSortByName(prev => !prev);
    };

    // Sort Doxology Function Names
    const sortedDoxologyFunctionNames = [...doxologyFunctionNames].sort((a, b) => {
        if (sortByName) {
            return a.name.localeCompare(b.name); // Sort alphabetically by name
        }
        return 0; // Keep default order
    });

    // Filter Doxology Function Names Based on Search Query
    const filteredDoxologyFunctionNames = sortedDoxologyFunctionNames.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

                <View style={presentationStyles.searchSortContainer}>
                  <TextInput
                      style={presentationStyles.searchInput}
                      placeholder="Search Doxologies"
                      value={searchQuery}
                      onChangeText={text => setSearchQuery(text)}
                  />

                  {/* Sort Button */}
                  <TouchableOpacity style={presentationStyles.settingsSortButton} onPress={toggleSortOrder}>
                      <Text style={presentationStyles.buttonText}>
                          {sortByName ? 'Default Sort' : 'Alphabetical Sort'}
                      </Text>
                  </TouchableOpacity>
                </View>
                {/* Render doxology settings */}
                <View style={presentationStyles.languagesContainer}>
                    {filteredDoxologyFunctionNames
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
                                    text={item.name} // Display doxology name
                                />
                            </View>
                        ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default SaintSettingsScreen;
