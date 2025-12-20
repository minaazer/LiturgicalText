import seasonalPraisesData from '../../data/midnightPsalmody/seasonalPraises.json';
import repeatedPrayersData from '../../data/repeatedPrayers/annualRepeatedPrayers.json';
import { resolveConditionalTables, resolveRepeatedPrauersData, resolveSeasonalPraisesData } from './dataFunctions';


const resolveJsonData = (settings, jsonData) => {
    try {

        const dayOfWeek = settings.selectedDateProperties.dayOfWeekIndex;
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfTheWeek = daysOfTheWeek[dayOfWeek];
        const seasons = settings.selectedDateProperties.copticSeason;
        const adamWatos = settings.selectedDateProperties.adamOrWatos;
        const aktonkAki = settings.selectedDateProperties.aktonkAki;
        const weekdayWeekend = (dayOfWeek === 0 || dayOfWeek === 6) ? "weekend" : "weekday";
        const service = "Midnight Praises";


        const resolvedData = resolveConditionalTables(resolveRepeatedPrauersData(
            resolveSeasonalPraisesData(
                jsonData,
                seasons,
                dayOfTheWeek,adamWatos, seasonalPraisesData ),
                    repeatedPrayersData), 
                        { aktonkAki, seasons });

        

        if (!Array.isArray(resolvedData)) {
            console.warn('psalmody data is not an array – rendering empty list');
            return [];
        }
        
        
        const tables = resolvedData.filter(
            (item) => item && (Array.isArray(item.tbodies) || Array.isArray(item.rows))
        );
        if (tables.length !== resolvedData.length) {
            const dropped = resolvedData.filter(
                (item) => !(item && (Array.isArray(item.tbodies) || Array.isArray(item.rows)))
            );
            
            console.warn('Dropped non-table entries from psalmody data', dropped);
        }

        return tables;
    } catch (err) {
        console.warn('Failed to build psalmody data', err);
        return [];
    }
};

export default resolveJsonData;
