
import React, { useContext , useEffect , useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { gregorianToCoptic } from '../functions/copticDate';
import { presentationStyles , pickerSelectStyles } from '../css/presentationStyles';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';





const SettingsScreen = () => {
    const [settings,setSettings , , , , , setOrientation] = useContext(SettingsContext);
    const navigation = useNavigation();  // Use the useNavigation hook to access navigation functions
    const [copticDate, setCopticDate] = useState(null);

    useEffect(() => {
        const today = new Date();  // Get the current date
        const coptic = gregorianToCoptic(today);  // Convert to Coptic date
        setCopticDate(coptic);  // Set the state with the Coptic date

    }, []);

    const setFontSizeHandler = (value) => {
        // change the font size property in my settings object
        setSettings({ ...settings, fontSize: value });
    }

    const setLanguagesHandler = (value, checked) => {

        const updatedSettings = {
            ...settings,
            languages: settings.languages.map((lang, index) => {
                if (index === value) {
                    return {
                        ...lang,
                        checked: checked
                    };
                }
                return lang;
            })
        };

        setSettings(updatedSettings);
    }

    const setOnePageHandler = (value, checked) => {

        const updatedSettings = {
            ...settings,
            onePage: settings.onePage.map((item, index) => {
                if (index === value) {
                    return {
                        ...item,
                        checked: checked
                    };
                }
                return item;
            })
        };

        setSettings(updatedSettings);
    }


    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <View style={presentationStyles.settingsScreen}>
            <ScrollView contentContainerStyle={presentationStyles.settingsInnerContainer} style={presentationStyles.scrollView}>
            <View style={presentationStyles.titleContainer}>
                    <TouchableOpacity style={presentationStyles.backButton} onPress={handleBackPress}>
                                <Text style={presentationStyles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={presentationStyles.screenTitle}>Settings</Text>
                    </View>

                {copticDate ? (
                    <Text style={presentationStyles.settingTitle}>
                        Coptic Date: {copticDate.copticMonthName} {copticDate.copticDay}, {copticDate.copticYear}
                    </Text>
                ) : (
                    <Text>Loading Coptic Date...</Text>
                )}

                <View style={presentationStyles.settingsContainer}>
                    <View style={presentationStyles.twoColumnSettingsContainer}>
                    <View style={presentationStyles.fontSetting}>
                        <Text style={presentationStyles.settingTitle}>Font Size</Text>
                        <View style={presentationStyles.pickerWrapper}>
                            <RNPickerSelect
                                onValueChange={(value) => setFontSizeHandler(value)}
                                items={[
                                    { label: '1', value: '1' },
                                    { label: '2', value: '1.5' },
                                    { label: '3', value: '2' },
                                    { label: '4', value: '2.5' },
                                    { label: '5', value: '3' },
                                    { label: '6', value: '3.5' },
                                    { label: '7', value: '4' },
                                    { label: '8', value: '4.5' },
                                    { label: '9', value: '5' },
                                    { label: '10', value: '5.5' },
                                    { label: '11', value: '6' },
                                    { label: '12', value: '6.5' },
                                ]}
                                value={settings.fontSize}
                                useNativeAndroidPickerStyle = {false}
                                
                                style={pickerSelectStyles}
                                Icon={() => (
                                    <Ionicons
                                        name="caret-down-outline"
                                        color="grey"
                                    />
                                ) }

                            />
                        </View>
                    </View>
                    <View style={presentationStyles.fontSetting}>
                        <Text style={presentationStyles.settingTitle}>Screen Orientation</Text>
                        <View style={presentationStyles.pickerWrapper}>
                            <RNPickerSelect
                                onValueChange={(value) => setOrientation(value)}
                                items={[
                                    { label: 'Landscape', value: 'landscape' },
                                    { label: 'Portrait', value: 'portrait' },
                                    { label: 'Reverse Landscape', value: 'reverseLandscape' },
                                ]}
                                value={settings.orientation}
                                useNativeAndroidPickerStyle = {false}
                                style={pickerSelectStyles}
                                Icon={() => (
                                    <Ionicons name="caret-down-outline" color="grey" 
                                     />
                                ) }
                                
                            />
                        </View>
                    </View>
                    </View>



                    <View style={presentationStyles.setting}>

                        <Text style={presentationStyles.settingTitle}>Display</Text>

                        <View style={presentationStyles.languagesContainer}>

                            {settings.languages && settings.languages.map((language, index) => (
                                <View key={index} style={presentationStyles.language}>
                                    <BouncyCheckbox
                                        isChecked={language.checked} // Control the checked state
                                        onPress={(isChecked) => setLanguagesHandler(index, isChecked)} // Update state on press
                                        fillColor="#e19d09" // Checked state color
                                        unfillColor="#FFFFFF" // Unchecked state background color
                                        iconStyle={{ borderColor: 'black' }} // Border color when unchecked
                                        text={language.label} // Display the label text
                                        textStyle={{
                                            textDecorationLine: 'none', // Remove strikethrough
                                            color: 'black', // Optional: Set text color
                                            fontSize: 16, // Optional: Adjust text size
                                        }}
                                    />
                                </View>
                            ))}

                        </View>
                    
                    </View>
                    <View style={presentationStyles.setting}>

                        <Text style={presentationStyles.settingTitle}>Display on one page</Text>

                        <View style={presentationStyles.languagesContainer}>

                            {settings.onePage && settings.onePage.map((item, index) => (
                                <View key={index} style={presentationStyles.language}>
                                    <BouncyCheckbox
                                        isChecked={item.checked} // Control the checked state
                                        onPress={(isChecked) => setOnePageHandler(index, isChecked)} // Update state on press
                                        fillColor="#e19d09" // Checked state color
                                        unfillColor="#FFFFFF" // Unchecked state background color
                                        iconStyle={{ borderColor: 'black' }} // Border color when unchecked
                                        text={item.label} // Display the label text
                                        textStyle={{
                                            textDecorationLine: 'none', // Remove strikethrough
                                            color: 'black', // Optional: Set text color
                                            fontSize: 16, // Optional: Adjust text size
                                        }}
                                    />

                                </View>
                            ))}

                        </View>
                    
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SettingsScreen;

