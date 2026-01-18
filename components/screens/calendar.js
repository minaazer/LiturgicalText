import React, { useEffect, useState, useContext } from 'react';
import { Text, View, ScrollView, TouchableOpacity , Platform , Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Date Picker
import { useNavigation } from '@react-navigation/native';
import { gregorianToCoptic, getCopticSeasons } from '../functions/copticDate';
import { presentationStyles } from '../css/presentationStyles';
import SettingsContext from '../../settings/settingsContext'; // Import SettingsContext

const CalendarScreen = () => {
    const navigation = useNavigation();
    const [copticDate, setCopticDate] = useState(null);
    const [copticSeasons, setCopticSeasons] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false); // Control date picker visibility
    const [pickerDate, setPickerDate] = useState(currentDate || new Date()); // Track date in picker for preview
    const [showTimePicker, setShowTimePicker] = useState(false); // Time picker for dayTransitionTime
    const [selectedTime, setSelectedTime] = useState(new Date()); // Store the selected time



    // Access settings and the setCurrentDate function from SettingsContext
    const [settings, setSettings , setCurrentDate , setDayTransitionTime] = useContext(SettingsContext);
    const developerMode = settings.developerMode; // Get developer mode from settings
    const currentDate = settings.currentDate && settings.currentDate.date ? settings.currentDate.date : new Date();
    const currentDateType = settings.currentDate && settings.currentDate.type ? settings.currentDate.type : "live"; // Check if it's 'live' or 'custom'
    const selectedDateProperties = settings.selectedDateProperties; // Get the selected date properties

    // Initialize the day transition time at 18:00 if not already set
    useEffect(() => {
        if (!settings.dayTransitionTime) {
            setDayTransitionTime('18:00');
        }
    }, [settings.dayTransitionTime, setDayTransitionTime]);
     
    const convertTo12HourFormat = (time24) => {
        const [hours, minutes] = time24.split(':');
        let period = 'AM';
        let hour = parseInt(hours, 10);
    
        if (hour >= 12) {
            period = 'PM';
            if (hour > 12) {
                hour -= 12;
            }
        }
    
        if (hour === 0) {
            hour = 12; // Midnight is 12 AM
        }
    
        return `${String(hour).padStart(2, '0')}:${minutes} ${period}`;
    };
    
    // Function to open the time picker for day transition time
    const handleOpenTimePicker = () => {
        setShowTimePicker(true);
    };

    // Function to handle time selection from the time picker
    const handleTimeChange = (event, selectedTime) => {
        if (event.type === "set" && selectedTime) {
            setShowTimePicker(Platform.OS === 'ios'); // Keep picker open on iOS
            const hours = selectedTime.getHours();
            const minutes = selectedTime.getMinutes();

            const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

            setDayTransitionTime(timeString); // Update day transition time in settings
            setSelectedTime(selectedTime); // Save the selected time
        } else {
            setShowTimePicker(false); // Close the picker if canceled
        }
    };

    // Function to initialize the season for the current date
    useEffect(() => {
        if (currentDate) {
            const coptic = selectedDateProperties && selectedDateProperties.copticDate ? selectedDateProperties.copticDate : gregorianToCoptic(currentDate);
            setCopticDate(coptic);

            const currentGregorianYear = currentDate.getFullYear();
            const seasons = getCopticSeasons(currentGregorianYear);
            setCopticSeasons(seasons);

        }
    }, [currentDate , selectedDateProperties]); // Trigger when currentDate changes


    // Track picker change; apply immediately when selected
    const handleDateChange = (event, date) => {
        if (event?.type === "dismissed") {
            setShowDatePicker(false);
            setPickerDate(currentDate || new Date());
            return;
        }
        if (!date) return;

        const isSeasonSelection = !event;
        if (isSeasonSelection) {
            const commitDate = new Date(date);
            setPickerDate(commitDate);
            setCurrentDate(commitDate, "custom");
            setShowDatePicker(false);
            return;
        }

        const normalizedDate = new Date(
            date.getTime() - date.getTimezoneOffset() * 60000
        );
        setPickerDate(normalizedDate);
        const commitDate = new Date(normalizedDate);
        commitDate.setUTCHours(9, 0, 0, 0);
        setCurrentDate(commitDate, "custom");
        setShowDatePicker(false);
    };

    // Function to go back to live date
    const handleSetLiveDate = () => {
        setCurrentDate(new Date(), 'live'); // Reset to live (current) date
    };

    const formatSeasonDate = (season) => {
        const formatDate = (date) => {
            const d = new Date(date);
            const month = String(d.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth() returns month index starting from 0
            const day = String(d.getUTCDate()).padStart(2, '0');
            const year = d.getUTCFullYear();
            return `${month}/${day}/${year}`;
        };
        
        if (season.date) {
            return formatDate(season.date); // Single date season
        } else if (season.start && season.end) {
            const startDate = formatDate(season.start);
            const endDate = formatDate(season.end);
            return `${startDate} - ${endDate}`; // Date range season
        }
        return '';
    };

    const getCopticDate = (season) => {
        if (season.date) {
            const startDate = gregorianToCoptic(new Date(season.date));
            return `${startDate.copticMonthName} ${startDate.copticDay}, ${startDate.copticYear}`;
        } else if (season.start && season.end) {
            const startDate = gregorianToCoptic(new Date(season.start));
            const endDate = gregorianToCoptic(new Date(season.end));
            return `${startDate.copticMonthName} ${startDate.copticDay}, ${startDate.copticYear} - ${endDate.copticMonthName} ${endDate.copticDay}, ${endDate.copticYear}`;
        }
        return '';
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const formatWithWeekday = (dateObj) => {
        if (!dateObj) return '';
        return dateObj.toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <View style={presentationStyles.settingsScreen}>
            <ScrollView contentContainerStyle={presentationStyles.settingsInnerContainer}>
                <View style={presentationStyles.titleContainer}>
                    <TouchableOpacity style={presentationStyles.backButton} onPress={handleBackPress}>
                                <Text style={presentationStyles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <Text style={presentationStyles.screenTitle}>Calendar</Text>
                </View>

                
                
                {/* Buttons to show the Date Picker and go live */}
                
                <View style={presentationStyles.seasonsContainer}>
                    <View style={presentationStyles.seasonsButtonContainer}>

                        {/* Button to Go Live */}
                        <TouchableOpacity 
                            style={[
                                presentationStyles.calendarButton,
                                currentDateType !== 'live' && presentationStyles.inactiveButton // Conditionally apply inactive style
                            ]}
                            onPress={handleSetLiveDate}
                        >
                            <Text style={presentationStyles.buttonText}>
                                {currentDateType === 'live' ? 'Live' : 'Go Live'}
                            </Text>
                        </TouchableOpacity>

                        {/* Button to reset to live date */}
                        <TouchableOpacity 
                            style={[
                                presentationStyles.calendarButton,
                                currentDateType === 'live' && presentationStyles.inactiveButton // Conditionally apply inactive style
                            ]}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={presentationStyles.buttonText}>
                                {currentDate && currentDateType !== 'live'
                                    ? formatWithWeekday(currentDate)
                                    : 'Pick a Date'}
                            </Text>
                        </TouchableOpacity>
                        {/* Button to open modal to change day transition time */}
                        <TouchableOpacity 
                            style={presentationStyles.calendarButton}
                            onPress={handleOpenTimePicker}
                        >
                            <Text style={presentationStyles.buttonText}>Daytime Transition</Text>
                            <Text style={presentationStyles.buttonText}>{convertTo12HourFormat(settings.dayTransitionTime)}</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                    {selectedDateProperties ? (
                        <View style={presentationStyles.currentSeasonCard}>
                            {copticDate ? (
                            <Text style={presentationStyles.currentSeasonTitle}>
                                Selected Coptic Date: {copticDate.copticMonthName} {copticDate.copticDay}, {copticDate.copticYear} ({formatWithWeekday(currentDate)})
                            </Text>
                            ) : (
                                <Text>Loading Coptic Date...</Text>
                            )}
                            {Array.isArray(selectedDateProperties.copticSeason) ? (
                                // Map over array if there are multiple seasons
                                selectedDateProperties.copticSeason.map((s, index) => (
                                    <Text key={index} style={presentationStyles.currentSeasonTitle}>
                                        {s}
                                    </Text>
                                ))
                            ) : (
                                // Display single season
                                <Text style={presentationStyles.currentSeasonTitle}> {selectedDateProperties.copticSeason}</Text>
                            )}
                            {developerMode ? (
                            <View>
                                <Text style={presentationStyles.currentSeasonTitle}>{selectedDateProperties.adamOrWatos} | {selectedDateProperties.aktonkAki.english} - {selectedDateProperties.aktonkAki.coptic} - {selectedDateProperties.aktonkAki.arabic}</Text>
                                <View style={presentationStyles.currentSeasonTitle}>
                                {selectedDateProperties?.saintFeast && selectedDateProperties.saintFeast.length > 0 
                                    ? selectedDateProperties.saintFeast.map((feast, index) => (
                                        <Text style={presentationStyles.currentSeasonTitle} key={index}>{feast.feast}</Text>
                                    ))
                                    : <Text style={presentationStyles.currentSeasonTitle}>"No Saint Feast"</Text>}
                                </View>
                            </View>
                            ) : null}
                        </View>
                    ) : (
                        <View style={presentationStyles.currentSeasonCard}>
                            <Text style={presentationStyles.currentSeasonTitle}>Please Select Date</Text>
                        </View>
                    )}


                </View>

                <View style={presentationStyles.divider}></View>
                
                {/* Time Picker for Day Transition Time */}
                {showTimePicker && (
                    <DateTimePicker
                        value={selectedTime}
                        mode="time"
                        display={Platform.OS === 'ios' ? 'spinner' : 'clock'}
                        onChange={handleTimeChange}
                    />
                )}
                
                {/* Display DateTimePicker only when showDatePicker is true */}
                {showDatePicker && (
                    <DateTimePicker
                        value={pickerDate || currentDate || new Date()} // Default to current date from settings
                        mode="date"
                        display={Platform.OS === 'ios' ? 'inline' : 'spinner'} // Use spinner for iOS
                        onChange={handleDateChange}
                    />
                )}

                {/* Coptic Seasons List */}
                {copticSeasons && copticSeasons.length > 0 && (
                    <View style={{alignItems: "center"}}>
                        <View style={presentationStyles.settingsInnerContainer}>
                            <Text style={presentationStyles.screenTitle}>Coptic Seasons for {currentDate?.getFullYear()}</Text>
                        </View>
                        <View style={presentationStyles.seasonCardsContainer}>
                            {copticSeasons.map((season, index) => (
                                season.visible && (  // Only render if season.visible is true
                                <TouchableOpacity 
                                    key={index} 
                                    style={presentationStyles.seasonCard}
                                    onPress={() => handleDateChange(null, season.date ? season.date : season.start)} // Set the selected date
                                >
                                    <Text style={presentationStyles.seasonTitle}>{season.season}</Text>
                                    
                                    {/* Container to place both dates on the same line */}
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                        <Text style={presentationStyles.seasonDate}>{formatSeasonDate(season)}</Text>
                                        <Text style={presentationStyles.seasonDate}>  |  </Text>
                                        <Text style={presentationStyles.seasonDate}>{getCopticDate(season)}</Text>
                                    </View>
                                </TouchableOpacity>
                                )
                            ))}
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default CalendarScreen;
