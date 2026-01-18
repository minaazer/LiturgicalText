/* global __DEV__ */
import React, { useState, useRef, useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SettingsContext from '../../settings/settingsContext'; // Import SettingsContext
import app from '../../app.json';  // Import your app.json file

const screenWidth = Dimensions.get('window').width;

const AboutScreen = () => {
    const [settings, , , , toggleDeveloperMode, , , , setForceLocalJson] = useContext(SettingsContext); // Destructure the values from the array
    const developerMode = settings.developerMode; // Get developer mode from settings
    const forceLocalJson = settings.forceLocalJson; // Use local JSON instead of cached online files
    const [tapCount, setTapCount] = useState(0);
    const tapTimeoutRef = useRef(null); // Reference to track timeout
    const navigation = useNavigation();  // Use the useNavigation hook to access navigation functions

    const handleBackPress = () => {
        navigation.goBack();
    };

    const resetTapCount = () => {
        setTapCount(0);
        if (tapTimeoutRef.current) {
            clearTimeout(tapTimeoutRef.current);
        }
    };

    const handleVersionTap = () => {
        if (tapTimeoutRef.current) {
            clearTimeout(tapTimeoutRef.current); // Clear the previous timeout if tapped again
        }

        setTapCount((prev) => prev + 1);

        tapTimeoutRef.current = setTimeout(() => {
            resetTapCount(); // Reset tap count after 10 seconds
        }, 10000);

        if (tapCount + 1 === 10) {
            const newDeveloperMode = !developerMode;
            toggleDeveloperMode(newDeveloperMode); // Update in settings provider
            Alert.alert(
                'Developer Mode',
                newDeveloperMode ? 'Developer mode enabled' : 'Developer mode disabled'
            );
            resetTapCount(); // Reset the tap count after enabling/disabling
        }
    };

    const handleForceLocalJsonToggle = () => {
        const nextValue = !forceLocalJson;
        setForceLocalJson(nextValue);
        Alert.alert(
            'Local JSON Mode',
            nextValue
                ? 'Using local bundled JSON files. Cached online files are ignored.'
                : 'Using cached online JSON files.'
        );
    };

    return (
        <View style={styles.settingsScreen}>
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
                <Text style={styles.title}>About</Text>

                <View style={styles.aboutContainer}>
                    {/* Tap on version number 10 times to enable/disable developer mode */}
                    <TouchableOpacity onPress={handleVersionTap}>
                        <Text style={styles.paragraph}>Version: {app.expo.version}</Text>
                    </TouchableOpacity>

                    <Text style={styles.paragraph}>Developed by: St. Mary Coptic Orthodox Church</Text>
                    <Text style={styles.paragraph}></Text>
                </View>
                
                <View style={styles.aboutContainer}>
                    <View style={styles.aboutSection}>
                        <Text style={styles.paragraph}>
                            Liturgical Books is a mobile application supported on Android 4.4+ and iOS 8.0+ devices (iPhone and iPad).
                        </Text>
                        <Text style={styles.paragraph}></Text>
                        <Text style={styles.paragraph}>
                            It is developed and maintained by St. Mary Coptic Orthodox Church in East Brunswick, NJ with the blessing of H.G. Bishop Gabriel - New Jersey Papal Exarch.
                        </Text>
                    </View>

                    {/* Show additional information only if developer mode is enabled */}
                    {developerMode && (
                        <View style={styles.developerInfo}>
                            <Text style={styles.settingTitle}>Developer Information</Text>
                            <Text style={styles.paragraph}>App Environment: {__DEV__ ? 'Development' : 'Production'}</Text>
                            <Text style={styles.paragraph}>Platform: {Platform.OS}</Text>
                            {/* Add any other developer-specific info you want here */}
                            <TouchableOpacity style={styles.developerButton} onPress={handleForceLocalJsonToggle}>
                                <Text style={styles.buttonText}>
                                    Local JSON: {forceLocalJson ? 'On' : 'Off'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <View style={styles.sources}>
                        <View style={styles.divider} />
                        <Text style={styles.settingTitle}>Holy Week Sources</Text>
                        <Text style={styles.languageTitle}>Commentary: دلال اسبوع الآلام وقرارات المجمع المقدس</Text>
                        <Text style={styles.languageTitle}>Coptic Text: Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ</Text>
                        <Text style={styles.languageTitle}>Arabic Biblical Readings: Smith Van Dyke</Text>
                        <Text style={styles.languageTitle}>English Biblical Readings: New King James Version</Text>
                        <Text style={styles.languageTitle}>Homilies: Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ</Text>
                        <Text style={styles.languageTitle}>Expositions: Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ</Text>
                    
                    </View>
                    <View style={styles.sources}>
                        <View style={styles.divider} />
                        <Text style={styles.settingTitle}>Other Resources Used</Text>
                        <Text style={styles.languageTitle}>https://tasbeha.org/</Text>
                        <Text style={styles.languageTitle}>https://st-takla.org/</Text>
                        <Text style={styles.languageTitle}>Coptic Reader APP - SUS</Text>
                        <View style={styles.divider} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleBackPress}>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    settingsScreen: {
        backgroundColor: '#003060',
        flex: 1,
    },
    scrollView: {},
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        borderRadius: 20,
        paddingBottom: 0,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: screenWidth * 0.04,
        fontWeight: 'bold',
        color: '#e19d09',
        marginTop: 15,
    },
    aboutContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    aboutSection: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: '1%',
    },
    sources: {
        width: '100%',
        marginBottom: '1%',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    settingTitle: {
        fontSize: screenWidth * 0.03,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    languageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    developerInfo: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    developerButton: {
        backgroundColor: '#003060',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#003060',
        borderRadius: 20,
        padding: 10,
        marginBottom: 15,
        marginTop: '0%',
        justifyContent: 'center',
        width: '30%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AboutScreen;
