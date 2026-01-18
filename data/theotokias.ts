
import theotokiaData from './jsons/psalmody/theotokias.json';
import { getJsonSync } from '../components/functions/jsonCache';
import { resolveRepeatedPrayers, filterBySeasons} from '../components/functions/dataFunctions';


type TheotokiaEntry = {
    english_title?: string;
    adamWatos?: string;
    dayOfTheWeek?: string;
    aktonkAki?: string;
    theotokiasIndex?: boolean;
    section_title?: string;
    seasonalPraises?: unknown;
    tbodies?: unknown[];
    rows?: unknown[];
    category?: string;
    repeated_prayer_placement?: string | string[];
    repeated_prayer_variables?: { passToTable?: Record<string, unknown> };
};

const hasValue = (value: unknown) => value !== undefined && value !== null && value !== '';

function getTheotokia(
    adamWatos: string | undefined,
    dayOfTheWeek: string,
    aktonkAki: { english?: string } | undefined,
    data: TheotokiaEntry[] = theotokiaData as TheotokiaEntry[]
) {
    return data.filter((theotokia: TheotokiaEntry) => {
        if (hasValue(adamWatos) && hasValue(theotokia.adamWatos) && theotokia.adamWatos !== adamWatos) return false;
        if (hasValue(dayOfTheWeek) && hasValue(theotokia.dayOfTheWeek) && theotokia.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(dayOfTheWeek) && hasValue(theotokia.repeated_prayer_variables?.passToTable?.dayOfTheWeek) && theotokia.repeated_prayer_variables?.passToTable?.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(aktonkAki?.english) && hasValue(theotokia.aktonkAki) && theotokia.aktonkAki !== aktonkAki.english) return false;
        if (theotokia.theotokiasIndex === false) return false;
        if (theotokia.repeated_prayer_variables?.passToTable?.theotokiasIndex === false) return false;
        return true;
    });
}

function getItemsByTitleIncludes(fragment, data = theotokiaData) {
    return data.filter(
        (theotokia) => theotokia.english_title && theotokia.english_title.includes(fragment) || theotokia.repeated_prayer_placement && theotokia.repeated_prayer_placement.includes(fragment)
    );
}

const getIntroduction = (data) => getItemsByTitleIncludes('Introduction to the ', data);
const getConclusion = (data) => getItemsByTitleIncludes('Conclusion', data);
const getDifnar = (data) => getItemsByTitleIncludes('Difnar', data);

const theotokiasIndex = (settings) => {
    

        const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const seasons = settings.selectedDateProperties.copticSeason;
        const adamWatos = settings.selectedDateProperties.adamOrWatos;
        const aktonkAki = settings.selectedDateProperties.aktonkAki;

        const theotokiaJson = getJsonSync(
            "psalmody/theotokias.json",
            theotokiaData
        );

        let theotokiasJson = [];
        for (const day of daysOfTheWeek) {

         theotokiasJson = [...theotokiasJson, ...getTheotokia(adamWatos,day,aktonkAki, theotokiaJson)];
        }
        
        const theotokiasWithIntrosJson = [
            ...getIntroduction(theotokiaJson),
            ...theotokiasJson,
            ...getDifnar(theotokiaJson),
            ...getConclusion(theotokiaJson),
        ];
        
        const resolvedSeasonalTables = filterBySeasons(theotokiasWithIntrosJson, seasons, []);
        const resolvedTheotokias = resolveRepeatedPrayers(resolvedSeasonalTables,null);

        

        if (!Array.isArray(resolvedTheotokias)) {
            console.warn('theotokias data is not an array – rendering empty list');
            return [];
        }
        
        
        return resolvedTheotokias;
};

export default theotokiasIndex;
