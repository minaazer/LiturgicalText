
import React, { useContext , useEffect , useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { gregorianToCoptic } from '../functions/copticDate';
import { presentationStyles } from '../css/presentationStyles';


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

                <Text style={presentationStyles.screenTitle}>Settings</Text>
                {copticDate ? (
                    <Text>
                        Coptic Date: {copticDate.copticMonthName} {copticDate.copticDay}, {copticDate.copticYear}
                    </Text>
                ) : (
                    <Text>Loading Coptic Date...</Text>
                )}

                <View style={presentationStyles.settingsContainer}>
                    <View style={presentationStyles.twoColumnSettingsContainer}>
                    <View style={presentationStyles.fontSetting}>
                        <Text style={presentationStyles.settingTitle}>Font Size</Text>
                        <Picker
                            selectedValue={settings.fontSize}
                            mode= 'dropdown'
                            style={presentationStyles.picker}
                            onValueChange={(itemValue, itemIndex) => setFontSizeHandler(itemValue)}
                            dropdownIconColor={'black'}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="1.5" />
                            <Picker.Item label="3" value="2" />
                            <Picker.Item label="4" value="2.5" />
                            <Picker.Item label="5" value="3" />
                            <Picker.Item label="6" value="3.5" />
                            <Picker.Item label="7" value="4" />
                            <Picker.Item label="8" value="4.5" />
                            <Picker.Item label="9" value="5" />
                            <Picker.Item label="10" value="5.5" />
                            <Picker.Item label="11" value="6" />
                            <Picker.Item label="12" value="6.5" />

                        </Picker>
                    </View>
                    <View style={presentationStyles.fontSetting}>
                        <Text style={presentationStyles.settingTitle}>Screen Orientation</Text>

                        <Picker
                    style={presentationStyles.picker}
                    selectedValue={settings.orientation}
                    onValueChange={(value) => setOrientation(value)}
                    >
                    <Picker.Item label="Landscape" value="landscape" />
                    <Picker.Item label="Portrait" value="portrait" />
                    </Picker>

                    </View>
                    </View>



                    <View style={presentationStyles.setting}>

                        <Text style={presentationStyles.settingTitle}>Display</Text>

                        <View style={presentationStyles.languagesContainer}>

                            {settings.languages && settings.languages.map((language, index) => (
                                <View key={index} style={presentationStyles.language}>
                                    <Text style={presentationStyles.languageTitle}>{language.label}</Text>
                                    <Checkbox
                                        status={language.checked ? 'checked' : 'unchecked'}
                                        onPress={() => setLanguagesHandler(index, !language.checked)}
                                        color={'#e19d09'}
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
                                    <Text style={presentationStyles.languageTitle}>{item.label}</Text>
                                    <Checkbox
                                        status={item.checked ? 'checked' : 'unchecked'}
                                        onPress={() => setOnePageHandler(index, !item.checked)}
                                        color={'#e19d09'}
                                    />
                                </View>
                            ))}

                        </View>
                    
                    </View>
                    <TouchableOpacity style={presentationStyles.button} onPress={handleBackPress}>
                            <Text style={presentationStyles.buttonText}>Apply Changes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default SettingsScreen;
