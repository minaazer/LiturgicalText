import { resolveRepeatedPrayers, filterBySeasons , filterByDayProps } from './dataFunctions';


const resolveJsonData = (settings, jsonData) => {
    try {
        const selectedDateProperties = settings?.selectedDateProperties || {};
        const dayOfWeek = selectedDateProperties.dayOfWeekIndex ?? 0;
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfTheWeek = daysOfTheWeek[dayOfWeek];
        const currentSeasons = selectedDateProperties.copticSeason || [];
        const todaysSaints = selectedDateProperties.saintFeast || [];
        const adamWatos = selectedDateProperties.adamOrWatos;
        const aktonkAki = selectedDateProperties.aktonkAki;
        const weekdayWeekend = (dayOfWeek === 0 || dayOfWeek === 6) ? "weekend" : "weekday";
        const service = "Midnight Praises";

        const resolvedPlaceHoldersData = resolveRepeatedPrayers(jsonData, null);
        //console.log('Resolved Placeholders Data:', resolvedPlaceHoldersData);
        const resolvedSeasonalandSaintsData = filterBySeasons(resolvedPlaceHoldersData, currentSeasons, todaysSaints);
        const resolvedData = filterByDayProps (resolvedSeasonalandSaintsData, { aktonkAki, adamWatos, dayOfTheWeek, weekdayWeekend , service });
        
        

        

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
