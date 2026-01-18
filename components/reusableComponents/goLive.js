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
    const currentDateValue =
        settings.selectedDateProperties &&
        settings.selectedDateProperties.adjustedDate
            ? settings.selectedDateProperties.adjustedDate
            : new Date();
    const currentDate = new Date(currentDateValue);
    const safeDate = Number.isNaN(currentDate.getTime())
        ? new Date()
        : currentDate;
    const copticDate = settings.selectedDateProperties?.copticDate || null; // Get the current Coptic date
    const currentSeason = Array.isArray(settings.selectedDateProperties?.copticSeason)
        ? settings.selectedDateProperties.copticSeason
        : []; // Get the current season(s)
    const saintFeasts = Array.isArray(settings.selectedDateProperties?.saintFeast)
        ? settings.selectedDateProperties.saintFeast
        : []; // Get the current saint or feast(s)


    return (
        <View>    
            <Text style={presentationStyles.drawerText}>
                {new Intl.DateTimeFormat('en-US', {
                    weekday: 'long', // Full day name
                    year: 'numeric', // Full year
                    month: 'numeric', // Full month name
                    day: 'numeric', // Numeric day
                }).format(safeDate)}
            </Text>
            {copticDate ? (
                <Text style={presentationStyles.drawerText}>
                    {copticDate.copticMonthName} {copticDate.copticDay}, {copticDate.copticYear}
                </Text>
            ) : (
                <Text style={presentationStyles.drawerText}>
                    Loading Coptic date...
                </Text>
            )}
            {currentSeason.map((season) => (
                <Text style={presentationStyles.drawerText} key={season}>{season}</Text>
            ))}
            {saintFeasts.map((feast) => (
                <Text style={presentationStyles.drawerText} key={feast.feast}>{feast.feast}</Text>
            ))}

            <TouchableOpacity 
            style={[
                presentationStyles.settingsSortButton,  // Default button style
                currentDateType !== 'live' && presentationStyles.inactiveButton && { backgroundColor: '#8B0000' }, // Conditionally apply inactive style
                // Inline style for button color
                { marginBottom: 10 , width:'75%'}
            ]}
                onPress={handleSetLiveDate}
            >
                <Text style={presentationStyles.buttonText }>
                    {currentDateType === 'live' ? 'Live Calendar' : 'Set Live Calendar'}
                </Text>
            </TouchableOpacity>

        </View>

    );
};

export default GoLive;
