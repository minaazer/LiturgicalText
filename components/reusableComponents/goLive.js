import React, {useContext } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import SettingsContext from '../../settings/settingsContext'; // Import SettingsContext

const GoLive = () => {



    // Access settings and the setCurrentDate function from SettingsContext
    const [settings, , setCurrentDate] = useContext(SettingsContext);
    const currentDateType = settings.currentDate && settings.currentDate.type ? settings.currentDate.type : "live"; // Check if it's 'live' or 'custom'

    // Function to go back to live date
    const handleSetLiveDate = () => {
        setCurrentDate(new Date(), 'live'); // Reset to live (current) date
    };
    const currentDate = settings.currentDate && settings.currentDate.date ? settings.currentDate.date : new Date(); // Get the current date


    return (
        <View>
            <TouchableOpacity 
            style={[
                presentationStyles.settingsSortButton,  // Default button style
                currentDateType !== 'live' && presentationStyles.inactiveButton && { backgroundColor: '#8B0000' }, // Conditionally apply inactive style
                // Inline style for button color
                { marginTop: 20}
            ]}
                onPress={handleSetLiveDate}
            >
                <Text style={presentationStyles.buttonText }>
                    {currentDateType === 'live' ? 'Live Calendar' : 'Set Live Calendar'}
                </Text>
            </TouchableOpacity>
            <Text style={presentationStyles.drawerText}>
            {new Intl.DateTimeFormat('en-US', {
                    weekday: 'long', // Full day name
                    year: 'numeric', // Full year
                    month: 'numeric', // Full month name
                    day: 'numeric', // Numeric day
                }).format(new Date(currentDate))}
            </Text>
        </View>

    );
};

export default GoLive;
