import React, { useContext } from 'react';
import { Text, View} from 'react-native';
import { presentationStyles } from '../css/presentationStyles';
import SettingsContext from '../../settings/settingsContext'; // Import SettingsContext

const SelectedSeason = () => {



    // Access settings and the setCurrentDate function from SettingsContext
    const [settings] = useContext(SettingsContext);

    const currentSeason = settings.selectedDateProperties && settings.selectedDateProperties.copticSeason ? settings.selectedDateProperties.copticSeason : null; // Get the current season

    return (
        <View>
            
            {currentSeason.map (season => (
                <Text style={presentationStyles.drawerText} key={season}>{season}</Text>
            ))}
        </View>

    );
};

export default SelectedSeason;
