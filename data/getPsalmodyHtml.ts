
import psalisData from './jsons/psalmody/psalis.json';
import theotokiaData from './jsons/psalmody/theotokias.json';
import psalmodyData from './jsons/psalmody/psalmody.json';
import resolveJsonData  from '../components/functions/resolveJsonData';
import { getJsonSync } from '../components/functions/jsonCache';

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hasValue = (value) => value !== undefined && value !== null && value !== '';
const normalizeToArray = (value) => Array.isArray(value) ? value : [value];

function getPsalis(adamWatos, dayOfTheWeek, weekdayWeekend, seasons, service, data = psalisData) {
    return data.filter((psali) => {
        if (hasValue(adamWatos) && hasValue(psali.adamWatos) && psali.adamWatos !== adamWatos) return false;
        if (hasValue(dayOfTheWeek) && hasValue(psali.dayOfTheWeek) && psali.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(weekdayWeekend) && hasValue(psali.weekdayWeekend) && psali.weekdayWeekend !== weekdayWeekend) return false;
        if (hasValue(service) && hasValue(psali.service) && psali.service !== service) return false;
        if (hasValue(seasons) && hasValue(psali.seasons)) {
            const requestedSeasons = normalizeToArray(seasons);
            const psaliSeasons = normalizeToArray(psali.seasons);
            const matchesSeason = psaliSeasons.some((s) => requestedSeasons.includes(s));
            if (!matchesSeason) return false;
        }
        return true;
    });
}

function getTheotokia(adamWatos,dayOfTheWeek,aktonkAki, data = theotokiaData) {
    return data.filter((theotokia) => {
        if (hasValue(adamWatos) && hasValue(theotokia.adamWatos) && theotokia.adamWatos !== adamWatos) return false;
        if (hasValue(dayOfTheWeek) && hasValue(theotokia.dayOfTheWeek) && theotokia.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(aktonkAki?.english) && hasValue(theotokia.aktonkAki) && theotokia.aktonkAki !== aktonkAki.english) return false;
        return true;
    });
}

function getpostFirstCanticleNonSunday(postFirstCanticleNonSunday, data = theotokiaData) {
    return data.filter(
        (theotokia) =>
            hasValue(postFirstCanticleNonSunday) &&
            hasValue(theotokia.postFirstCanticleNonSunday) &&
            theotokia.postFirstCanticleNonSunday === postFirstCanticleNonSunday
    );
}

function resolveLinks (value, linkTargets = {}) {
        if (Array.isArray(value)) return value.flatMap((item) => resolveLinks(item, linkTargets));

        if (value && typeof value === 'object') {
            if ('link' in value && typeof value.link === 'string' && linkTargets[value.link]) {
                return resolveLinks(linkTargets[value.link], linkTargets);
            }

            return Object.fromEntries(
                Object.entries(value).map(([key, val]) => [key, resolveLinks(val, linkTargets)])
            );
        }

        return value;
}


const psalmody = (settings) => {
    try {

        const dayOfWeek = settings.selectedDateProperties.dayOfWeekIndex;
        if (typeof dayOfWeek !== 'number' || dayOfWeek < 0 || dayOfWeek > 6) {
            console.warn('psalmody: invalid dayOfWeekIndex; expected 0-6', dayOfWeek);
        }
        const dayOfTheWeek = daysOfTheWeek[dayOfWeek];
        const seasons = settings.selectedDateProperties.copticSeason;
        const adamWatos = settings.selectedDateProperties.adamOrWatos;
        const aktonkAki = settings.selectedDateProperties.aktonkAki;
        const weekdayWeekend = (dayOfWeek === 0 || dayOfWeek === 6) ? "weekend" : "weekday";
        const service = "Midnight Praises";

        const psalisJson = getJsonSync("psalmody/psalis.json", psalisData);
        const theotokiaJson = getJsonSync("psalmody/theotokias.json", theotokiaData);
        const psalmodyJson = getJsonSync("psalmody/psalmody.json", psalmodyData);
        const psalis = getPsalis(adamWatos, dayOfTheWeek, weekdayWeekend, seasons, service, psalisJson);
        const theotokia = getTheotokia(adamWatos,dayOfTheWeek,aktonkAki, theotokiaJson);
        const postFirstCanticleNonSunday = dayOfWeek !== 0 ? getpostFirstCanticleNonSunday(true, theotokiaJson) : '';
        const linkTargets = { psalis, theotokia, postFirstCanticleNonSunday };

        const psalmodyWithLinks = resolveLinks(psalmodyJson, linkTargets);
        const psalmodyFinalJson = resolveJsonData(settings, psalmodyWithLinks);
        

        if (!Array.isArray(psalmodyFinalJson)) {
            console.warn('psalmody data is not an array – rendering empty list');
            return [];
        }
        
        
        const tables = psalmodyFinalJson.filter(
            (item) => item && (Array.isArray(item.tbodies) || Array.isArray(item.rows))
        );
        if (tables.length !== psalmodyFinalJson.length) {
            const dropped = psalmodyFinalJson.filter(
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

export default psalmody;
