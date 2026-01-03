
import theotokiaData from './jsons/psalmody/theotokias.json';
import seasonalPraisesData from './jsons/psalmody/seasonalPraises.json';
import { getJsonSync } from '../components/functions/jsonCache';

const hasValue = (value) => value !== undefined && value !== null && value !== '';

function getTheotokia(adamWatos,dayOfTheWeek,aktonkAki, data = theotokiaData) {
    return data.filter((theotokia) => {
        if (hasValue(adamWatos) && hasValue(theotokia.adamWatos) && theotokia.adamWatos !== adamWatos) return false;
        if (hasValue(dayOfTheWeek) && hasValue(theotokia.dayOfTheWeek) && theotokia.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(aktonkAki?.english) && hasValue(theotokia.aktonkAki) && theotokia.aktonkAki !== aktonkAki.english) return false;
        if (theotokia.theotokiasIndex === false) return false;
        return true;
    });
}

function getItemsByTitleIncludes(fragment, data = theotokiaData) {
    return data.filter(
        (theotokia) => theotokia.english_title && theotokia.english_title.includes(fragment)
    );
}

const getIntroduction = (data) => getItemsByTitleIncludes('Introduction to the ', data);
const getConclusion = (data) => getItemsByTitleIncludes('Conclusion', data);
const getDifnar = (data) => getItemsByTitleIncludes('Difnar', data);

function resolveSeasonalData(data, seasons, adamWatos, seasonalData = seasonalPraisesData) {
    if (!Array.isArray(data)) return [];

    const normalizeToArray = (value) => Array.isArray(value) ? value : [value];
    const seasonsMatch = (requestedSeasons, entrySeasons) => {
        if (!hasValue(entrySeasons)) return true; // entry applies to all seasons
        if (!hasValue(requestedSeasons)) return true; // no filter provided
        const requested = normalizeToArray(requestedSeasons);
        const entry = normalizeToArray(entrySeasons);
        return entry.some((s) => requested.includes(s));
    };

    
    const adamWatosMatch = (currentAdamWatos, expectedAdamWatos) => {
        if (!hasValue(expectedAdamWatos)) return true;
        return currentAdamWatos === expectedAdamWatos;
    }

    return data.flatMap((item) => {
        if (item && item.seasonalPraises && item.section_title) {
            

            const placement = item.section_title;
            const replacements = seasonalData.filter((entry) => {
                const placementMatch = Array.isArray(entry.placement) && entry.placement.includes(placement);
                const seasonMatch = seasonsMatch(seasons, entry.seasons);
                // Entries may optionally specify a day-of-week as well.
                const adamWatosMatchResult = adamWatosMatch(adamWatos, entry.adamWatos);
                return placementMatch && seasonMatch && adamWatosMatchResult;
            });
            return replacements;
        }
        return item;
    });
}



const theotokiasIndex = (settings) => {
    try {

        const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const seasons = settings.selectedDateProperties.copticSeason;
        const adamWatos = settings.selectedDateProperties.adamOrWatos;
        const aktonkAki = settings.selectedDateProperties.aktonkAki;

        const theotokiaJson = getJsonSync(
            "psalmody/theotokias.json",
            theotokiaData
        );
        const seasonalJson = getJsonSync(
            "psalmody/seasonalPraises.json",
            seasonalPraisesData
        );

        let theotokiasJson = [];
        for (const day of daysOfTheWeek) {

         theotokiasJson = [...theotokiasJson, ...getTheotokia(adamWatos,day,aktonkAki, theotokiaJson)];
        }

        theotokiasJson = [
            ...getIntroduction(theotokiaJson),
            ...theotokiasJson,
            ...getDifnar(theotokiaJson),
            ...getConclusion(theotokiaJson),
        ];
        theotokiasJson = resolveSeasonalData(
            theotokiasJson,
            seasons,
            adamWatos,
            seasonalJson
        );



        

        if (!Array.isArray(theotokiasJson)) {
            console.warn('theotokias data is not an array – rendering empty list');
            return [];
        }
        
        
        const tables = theotokiasJson.filter(
            (item) => item && (Array.isArray(item.tbodies) || Array.isArray(item.rows))
        );
        if (tables.length !== theotokiasJson.length) {
            const dropped = theotokiasJson.filter(
                (item) => !(item && (Array.isArray(item.tbodies) || Array.isArray(item.rows)))
            );
            
            console.warn('Dropped non-table entries from theotokias data', dropped);
        }

        return tables;
    } catch (err) {
        console.warn('Failed to build theotokias data', err);
        return [];
    }
};

export default theotokiasIndex;
