
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
import SettingsContext from '../../settings/settignsContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // or another icon library


const screenWidth = Dimensions.get('window').width;

const SettingsScreen = () => {
    const [settings, setSettings] = useContext(SettingsContext);
    const navigation = useNavigation();  // Use the useNavigation hook to access navigation functions



    const setFontSizeHandler = (value) => {
        // change the font size property in my settings object
        setSettings({ ...settings, fontSize: value });
    }

    const setLanguagesHandler = (value, checked) => {
        console.log(checked, value);

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


    const handleBackPress = () => {
        navigation.goBack();
    }


    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.title}>Settings</Text>

                <View style={styles.settingsContainer}>

                    <View style={styles.fontSetting}>
                        <Text style={styles.settingTitle}>Font Size</Text>
                        <Picker
                            selectedValue={settings.fontSize}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setFontSizeHandler(itemValue)}
                            dropdownIconColor={'white'}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />

                        </Picker>

                    </View>

                    <View style={styles.setting}>

                        <Text style={styles.settingTitle}>Languages</Text>

                        <View style={styles.languagesContainer}>

                            {settings.languages && settings.languages.map((language, index) => (
                                <View key={index} style={styles.language}>
                                    <Text style={styles.languageTitle}>{language.label}</Text>
                                    <Checkbox
                                        status={language.checked ? 'checked' : 'unchecked'}
                                        onPress={() => setLanguagesHandler(index, !language.checked)}
                                        color={'#e19d09'}
                                    />
                                </View>
                            ))}

                        </View>

                    </View>

                </View>

            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        borderRadius: 20,
        paddingBottom: 10,
        marginHorizontal: 20,
        backgroundColor: 'rgba(195, 224, 229, 0.3)',
        marginTop: 10,

    },

    title: {
        fontSize: screenWidth * 0.04,
        fontWeight: 'bold',
        marginBottom: '0%',
        color: '#e19d09',


    },

    settingsContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    fontSetting: {
        display: 'flex',
        flexDirection: Platform.OS === 'ios' ? "column" : 'row',
        alignItems: Platform.OS === 'ios' ? "flex-start" : 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '1%',
    },
    setting: {
        width: '100%',
        marginBottom: '5%',
    },

    settingTitle: {
        fontSize: screenWidth * 0.03,
        fontWeight: 'bold',
        flex: 1,
        color: 'white',
        marginBottom: 10
    },

    languagesContainer: {
        width: '100%',
        flexDirection: Platform.OS === 'ios' ? 'column' : 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },


    language: {
        width: Platform.OS === 'ios' ? '100%' : '30%',
        display: "flex",
        flexDirection: Platform.OS !== 'ios' ? 'column' : "row",
        alignItems: 'center',
        justifyContent: Platform.OS === 'ios' ? "flex-start" : 'center',
    },

    languageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '5%',
        color: 'white',
    },

    picker: {
        flex: 1,
        width: Platform.OS === 'ios' ? "100%" : "auto",
        overflow: "hidden"
    },

});

export default SettingsScreen;
