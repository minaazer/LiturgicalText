
import React, { useContext , useEffect , useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, useWindowDimensions, Alert } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { useNavigation } from '@react-navigation/native';
import { gregorianToCoptic } from '../functions/copticDate';
import { presentationStyles } from '../css/presentationStyles';
import { FontSizePicker , ScreenOrientationPicker } from '../reusableComponents/pickers';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { refreshJsonCache } from '../functions/jsonCache';





const SettingsScreen = () => {
    const [settings,setSettings , , , , , setOrientation] = useContext(SettingsContext);
    const navigation = useNavigation();  // Use the useNavigation hook to access navigation functions
    const [copticDate, setCopticDate] = useState(null);
    const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;
    const isCompactPortrait = isPortrait && width < 450;
    const isTwoColumnSettings = width >= 600;
    const optionItemStyle = isTwoColumnSettings
        ? { width: "50%", marginHorizontal: 0, paddingHorizontal: 6 }
        : null;
    const [cacheRefreshing, setCacheRefreshing] = useState(false);
    useEffect(() => {
        const today = new Date();  // Get the current date
        const coptic = gregorianToCoptic(today);  // Convert to Coptic date
        setCopticDate(coptic);  // Set the state with the Coptic date

    }, []);


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

    const setPaschalReadingsFullHandler = (checked) => {
        setSettings(prev => ({
          ...prev,
          paschalReadingsFull: checked
        }));
      };

    const setDisplayModeHandler = (checked) => {
        setSettings(prev => ({
            ...prev,
            displayMode: checked ? "scroll" : "slideshow",
        }));
    };

    const handleRefreshCache = async () => {
        if (cacheRefreshing) return;
        setCacheRefreshing(true);
        const remoteBaseUrl = 'https://d18kyprs8j73gp.cloudfront.net';
        const warmupPaths = [
            "psalmody/psalis.json",
            "psalmody/psalmody.json",
            "psalmody/theotokias.json",
            "psalmody/seasonalPraises.json",
            "psalmody/doxologies.json",
            "repeatedPrayers/hwRepeatedPrayers.json",
            "repeatedPrayers/annualRepeatedPrayers.json",
            "repeatedPrayers/seasonalRepeatedPrayers.json",
            "repeatedPrayers/repeatedAgpeyaPrayers.json",
            "repeatedPrayers/actsResponses.json",
            "repeatedPrayers/gospelResponses.json",
            "repeatedPrayers/intercessions.json",
            "repeatedPrayers/versesOfCymbals.json",
            "repeatedPrayers/distributionPraises.json",
        ];
        try {
            await refreshJsonCache({ remoteBaseUrl, warmupPaths, forceManifest: true });
            Alert.alert("Content refreshed", "Manifest and cached files have been updated.");
        } catch (err) {
            Alert.alert("Refresh failed", err?.message || "Unable to refresh content.");
        } finally {
            setCacheRefreshing(false);
        }
    };
      

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
                    <View
                        style={[
                            presentationStyles.twoColumnSettingsContainer,
                            {
                                flexDirection: isCompactPortrait ? "column" : "row",
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                                width: isCompactPortrait ? "85%" : "100%",
                            },
                        ]}
                    >
                    <View
                        style={[
                            presentationStyles.fontSetting,
                            {
                                width: isCompactPortrait ? "100%" : "45%",
                                alignSelf: "center",
                                marginHorizontal: isCompactPortrait ? 0 : 10,
                            },
                        ]}
                    >
                        <Text style={presentationStyles.settingTitle}>Font Size</Text>
                        <View style={presentationStyles.pickerWrapper}>
                            <FontSizePicker setSettings={setSettings} settings={settings} />
                        </View>
                    </View>
                    <View
                        style={[
                            presentationStyles.fontSetting,
                            {
                                width: isCompactPortrait ? "100%" : "45%",
                                alignSelf: "center",
                                marginHorizontal: isCompactPortrait ? 0 : 10,
                            },
                        ]}
                    >
                        <Text style={presentationStyles.settingTitle}>Screen Orientation</Text>
                        <View style={presentationStyles.pickerWrapper}>
                            <ScreenOrientationPicker setOrientation={setOrientation} orientation={settings.orientation} />
                            
                        </View>
                    </View>
                    </View>



                    <View style={presentationStyles.setting}>

                        <Text style={presentationStyles.settingTitle}>Display mode</Text>

                        <View style={presentationStyles.languagesContainer}>

                                <View style={presentationStyles.language}>
                                    <BouncyCheckbox
                                        isChecked={settings.displayMode === "scroll"} // Control the checked state
                                        onPress={(isChecked) => setDisplayModeHandler(isChecked)} // Update state on press
                                        fillColor="#e19d09" // Checked state color
                                        unfillColor="#FFFFFF" // Unchecked state background color
                                        iconStyle={{ borderColor: 'black' }} // Border color when unchecked
                                        text={"Scroll mode (disable slideshow paging)"} // Display the label text
                                        textStyle={{
                                            textDecorationLine: 'none', // Remove strikethrough
                                            color: 'black', // Optional: Set text color
                                            fontSize: 16, // Optional: Adjust text size
                                        }}
                                    />

                                </View>


                        </View>
                    
                    </View>
                    <View style={presentationStyles.setting}>

                        <Text style={presentationStyles.settingTitle}>Display Languages</Text>

                        <View style={[presentationStyles.languagesContainer, { flexDirection: "row", flexWrap: "wrap" }]}>

                            {settings.languages && settings.languages.map((language, index) => (
                                <View key={index} style={[presentationStyles.language, optionItemStyle]}>
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

                        <Text style={presentationStyles.settingTitle}>One Page Settings</Text>

                        <View style={[presentationStyles.languagesContainer, { flexDirection: "row", flexWrap: "wrap" }]}>

                            {settings.onePage && settings.onePage.map((item, index) => (
                                <View key={index} style={[presentationStyles.language, optionItemStyle]}>
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
                    <View style={presentationStyles.setting}>

                        <Text style={presentationStyles.settingTitle}>Paschal Rites</Text>

                        <View style={presentationStyles.languagesContainer}>

                            
                                <View style={presentationStyles.language}>
                                    <BouncyCheckbox
                                        isChecked={settings.paschalReadingsFull} // Control the checked state
                                        onPress={(isChecked) => setPaschalReadingsFullHandler(isChecked)} // Update state on press
                                        fillColor="#e19d09" // Checked state color
                                        unfillColor="#FFFFFF" // Unchecked state background color
                                        iconStyle={{ borderColor: 'black' }} // Border color when unchecked
                                        text={"Complete Paschal Readings - Benisweif Coptic Pascha Katameros (Contains additional readings not found in Hanging Church Edition)"} // Display the label text
                                        textStyle={{
                                            textDecorationLine: 'none', // Remove strikethrough
                                            color: 'black', // Optional: Set text color
                                            fontSize: 16, // Optional: Adjust text size
                                        }}
                                    />

                                </View>
                            

                        </View>
                    
                    </View>
                </View>
                <TouchableOpacity
                  style={[
                    presentationStyles.reportSubmitButton,
                    {
                      alignSelf: "center",
                      width: isCompactPortrait ? "80%" : "60%",
                      marginTop: 20,
                      marginBottom: 30,
                      opacity: cacheRefreshing ? 0.6 : 1,
                    },
                  ]}
                  onPress={handleRefreshCache}
                  disabled={cacheRefreshing}
                >
                  <Text style={presentationStyles.reportSubmitButtonText}>
                    {cacheRefreshing
                      ? "Refreshing content..."
                      : "Refresh content (manifest & cache)"}
                  </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default SettingsScreen;

