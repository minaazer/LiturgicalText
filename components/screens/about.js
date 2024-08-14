
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity , Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import app from '../../app.json';  // Import your app.json file



const screenWidth = Dimensions.get('window').width;

const AboutScreen = () => {
    const navigation = useNavigation();  // Use the useNavigation hook to access navigation functions


    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.settingsScreen}>
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>

                <Text style={styles.title}>About</Text>

                <View style={styles.aboutContainer}>
                    <Text style={styles.paragraph}>Version: {app.expo.version}</Text>
                    <Text style={styles.paragraph}>Developed by: St. Mary Coptic Orthodox Church</Text>
                    <Text style={styles.paragraph}></Text>
                </View>
                
                <View style={styles.aboutContainer}>

                    <View style={styles.aboutSection}>
                    <Text style={styles.paragraph}>Liturgical Books is a mobile application supported on Android 4.4+ and iOS 8.0+ devices (iPhone and iPad). </Text>
                    <Text style={styles.paragraph}></Text>
                    <Text style={styles.paragraph}>It is developed and maintained by St. Mary Coptic Orthodox Church in East Brunswick, NJ with the blessing of H.G. Bishop Gabriel - New Jersey Papal Exarch.</Text>

                        

                    </View>

                    <View style={styles.sources}>

                        <Text style={styles.settingTitle}>Holy Week Sources</Text>

                        <Text style={styles.languageTitle}>Commentary: دلال اسبوع الآلام وقرارات المجمع المقدس</Text>
                        <Text style={styles.languageTitle}>Coptic Text: Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ</Text>
                        <Text style={styles.languageTitle}>Arabic Biblical Readings: Smith Van Dyke</Text>
                        <Text style={styles.languageTitle}>English Biblical Readings: New King James Version</Text>
                        <Text style={styles.languageTitle}>Homilies: Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ</Text>
                        <Text style={styles.languageTitle}>Expositions: Holy Pascha Book - St. Mark Coptic Church in Jersey City, NJ</Text>


                            

                    
                    </View>
                    
                    <TouchableOpacity style={styles.button} onPress={handleBackPress}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    settingsScreen: {
        backgroundColor: '#003060',
        flex: 1,
    },
    scrollView: {
        

    },

    container: {
        //flex: 1,
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
        marginBottom: '0%',
        color: '#e19d09',
        marginTop: 15,


    },

    aboutContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    aboutSection: {
        display: 'flex',
        flexDirection: Platform.OS === 'ios' ? "column" : 'column',
        alignItems: Platform.OS === 'ios' ? "flex-start" : 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: '1%',
    },
    picker: {
        flex: 1,
        width: Platform.OS === 'ios' ? "100%" : "auto",
        overflow: "hidden",
        
    },

    sources: {
        width: '100%',
        marginBottom: '1%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

    },

    settingTitle: {
        fontSize: screenWidth * 0.03,
        fontWeight: 'bold',
        flex: 1,
        color: 'black',
        marginBottom: 10
    },

    languagesContainer: {
        width: '100%',
        flexDirection: Platform.OS === 'ios' ? 'column' : 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        flexWrap: 'wrap',
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
        marginBottom: '0%',
        color: 'black',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '0%',
        color: 'black',
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
    }

});

export default AboutScreen;
