
import psalisData from './jsons/psalmody/psalis.json';
import theotokiaData from './jsons/psalmody/theotokias.json';
import psalmodyData from './jsons/psalmody/psalmody.json';
import resolveJsonData  from '../components/functions/resolveJsonData';
import { getJsonSync } from '../components/functions/jsonCache';

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hasValue = (value) => value !== undefined && value !== null && value !== '';
const normalizeToArray = (value) => Array.isArray(value) ? value : [value];
const isTable = (value) =>
    value &&
    typeof value === 'object' &&
    (Array.isArray(value.tbodies) || Array.isArray(value.rows));

const addPassToTables = (target, passToTable) => {
    if (!passToTable || typeof passToTable !== 'object') return target;

    if (Array.isArray(target)) {
        return target.map((item) => addPassToTables(item, passToTable));
    }

    if (isTable(target)) {
        const { tbodies, rows, ...rest } = target;
        const merged = { ...rest, ...passToTable };
        if (tbodies !== undefined) merged.tbodies = addPassToTables(tbodies, passToTable);
        if (rows !== undefined) merged.rows = addPassToTables(rows, passToTable);
        
        return merged;
    }

    if (target && typeof target === 'object') {
        return Object.fromEntries(Object.entries(target).map(([key, val]) => [key, addPassToTables(val, passToTable)]));
    }

    return target;
};

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
  if (!hasValue(postFirstCanticleNonSunday)) return [];

  return data
    .filter((theotokia) => {
      const directValue = theotokia.postFirstCanticleNonSunday;
      const nestedValue =
        theotokia.repeated_prayer_variables?.passToTable?.postFirstCanticleNonSunday;
      const directMatch =
        hasValue(directValue) && directValue === postFirstCanticleNonSunday;
      const nestedMatch =
        hasValue(nestedValue) && nestedValue === postFirstCanticleNonSunday;
      return directMatch || nestedMatch;
    })
    .map(({ dayOfTheWeek, repeated_prayer_variables, ...rest }) => {
      if (!repeated_prayer_variables?.passToTable) {
        return rest;
      }
      const { dayOfTheWeek: nestedDayOfTheWeek, ...passToTableRest } =
        repeated_prayer_variables.passToTable;
      return {
        ...rest,
        repeated_prayer_variables: {
          ...repeated_prayer_variables,
          passToTable: passToTableRest,
        },
      };
    });
}


function resolveLinks (value, linkTargets = {}) {
        if (Array.isArray(value)) return value.flatMap((item) => resolveLinks(item, linkTargets));

        if (value && typeof value === 'object') {
            if ('link' in value && typeof value.link === 'string' && linkTargets[value.link]) {
                const resolvedLink = resolveLinks(linkTargets[value.link], linkTargets);
                const merged = addPassToTables(resolvedLink, value.passToTable);
                return merged;
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
        const weekdayWeekend = settings.selectedDateProperties.weekdayWeekend;
        const service = "Midnight Praises";
        const psalisJson = getJsonSync("psalmody/psalis.json", psalisData);
        const theotokiaJson = getJsonSync("psalmody/theotokias.json", theotokiaData);
        const psalmodyJson = getJsonSync("psalmody/psalmody.json", psalmodyData);
        const psalis = getPsalis(adamWatos, dayOfTheWeek, weekdayWeekend, seasons, service, psalisJson);
        const theotokia = getTheotokia(adamWatos,dayOfTheWeek,aktonkAki, theotokiaJson);
        const postFirstCanticleNonSunday = dayOfWeek !== 0 ? getpostFirstCanticleNonSunday(true, theotokiaJson) : '';
        const linkTargets = { psalis, theotokia, postFirstCanticleNonSunday };
        //console.log('Link targets for psalmody:', psalmodyJson);
        const psalmodyWithLinks = resolveLinks(psalmodyJson, linkTargets);
        //console.log('Psalmody with links resolved:', psalmodyWithLinks);
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
            
            //console.warn('Dropped non-table entries from psalmody data', dropped);
        }

        return tables;
    } catch (err) {
        console.warn('Failed to build psalmody data', err);
        return [];
    }
};

export default psalmody;
