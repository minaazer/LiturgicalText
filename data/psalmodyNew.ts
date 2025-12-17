import { cross , book } from './repeatedPrayers';
import { getWeekdaySundayTheotokia , getTennav , AdamTheotokiaConclusion, WatosTheotokiaConclusion } from './midnightPsalmody/theotokias';
import { getPsali } from './midnightPsalmody/psalis';
import { getKiahkPraiseHtml } from './midnightPsalmody/kiahkPraises';
import { annualCommemoration , annualFourthCanticle , theMorningDoxology ,
    creedInro , creed , holyHolyHoly , psalmodyConclusion , nekNai
 } from './midnightPsalmody/annual';
import { getSeasonalDailyPsali } from './midnightPsalmody/seasonalDailyPsalis';
import { getSeasonalExposition } from './midnightPsalmody/seasonalExpositions';
import { getSeasonalGreatOde } from './midnightPsalmody/seasonalGreatOde';
import psalisData from './midnightPsalmody/psalis.json';
import theotokiaData from './midnightPsalmody/theotokias.json';
import psalmodyData from './midnightPsalmody/psalmody.json';
import seasonalPraisesData from './midnightPsalmody/seasonalPraises.json';
import repeatedPrayersData from './repeatedPrayers/annualRepeatedPrayers.json';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

function getPsalis(adamWatos, dayOfTheWeek, weekdayWeekend, seasons, service) {
    const hasValue = (value) => value !== undefined && value !== null && value !== '';
    const normalizeToArray = (value) => Array.isArray(value) ? value : [value];

    return psalisData.filter((psali) => {
        if (hasValue(adamWatos) && hasValue(psali.adamWatos) && psali.adamWatos !== adamWatos) return false;
        if (hasValue(dayOfTheWeek) && hasValue(psali.dayOfTheWeek) && psali.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(weekdayWeekend) && hasValue(psali.weekdayWeekend) && psali.weekdayWeekend !== weekdayWeekend) return false;
        if (hasValue(service) && hasValue(psali.service) && psali.service !== service) return false;
        if (hasValue(seasons) && hasValue(psali.season)) {
            const requestedSeasons = normalizeToArray(seasons);
            const psaliSeasons = normalizeToArray(psali.season);
            const matchesSeason = psaliSeasons.some((s) => requestedSeasons.includes(s));
            if (!matchesSeason) return false;
        }
        return true;
    });
}

function getTheotokia(adamWatos,dayOfTheWeek,aktonkAki) {
    const hasValue = (value) => value !== undefined && value !== null && value !== '';

    return theotokiaData.filter((theotokia) => {
        if (hasValue(adamWatos) && hasValue(theotokia.adamWatos) && theotokia.adamWatos !== adamWatos) return false;
        if (hasValue(dayOfTheWeek) && hasValue(theotokia.dayOfTheWeek) && theotokia.dayOfTheWeek !== dayOfTheWeek) return false;
        if (hasValue(aktonkAki.english) && hasValue(theotokia.aktonkAki) && theotokia.aktonkAki !== aktonkAki.english) return false;
        return true;
    });
}

function getpostFirstCanticleNonSunday(postFirstCanticleNonSunday) {
    const hasValue = (value) => value !== undefined && value !== null && value !== '';

    return theotokiaData.filter((theotokia) => {
        if (hasValue(postFirstCanticleNonSunday) && hasValue(theotokia.postFirstCanticleNonSunday) && theotokia.postFirstCanticleNonSunday === postFirstCanticleNonSunday) return true;
        return false;

    });
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

function resolveSeasonalData(data, seasons, dayOfTheWeek, adamWatos) {
    if (!Array.isArray(data)) return [];

    const hasValue = (value) => value !== undefined && value !== null && value !== '';
    const normalizeToArray = (value) => Array.isArray(value) ? value : [value];
    const seasonsMatch = (requestedSeasons, entrySeasons) => {
        if (!hasValue(entrySeasons)) return true; // entry applies to all seasons
        if (!hasValue(requestedSeasons)) return true; // no filter provided
        const requested = normalizeToArray(requestedSeasons);
        const entry = normalizeToArray(entrySeasons);
        return entry.some((s) => requested.includes(s));
    };

    const dayOfTheWeekMatch = (currentDayOfTheWeek, expectedDayOfTheWeek) => {
        if (!hasValue(expectedDayOfTheWeek)) return true;
        return currentDayOfTheWeek === expectedDayOfTheWeek;
    };

    const adamWatosMatch = (currentAdamWatos, expectedAdamWatos) => {
        if (!hasValue(expectedAdamWatos)) return true;
        return currentAdamWatos === expectedAdamWatos;
    }

    return data.flatMap((item) => {
        if (item && item.seasonalPraises && item.section_title) {
            // First make sure this placeholder itself applies to the current day.
            if (!item.postFirstCanticleNonSunday || dayOfTheWeek === 'Sunday') {
                
                if (item.dayOfTheWeek && !dayOfTheWeekMatch(dayOfTheWeek, item.dayOfTheWeek)) {
                    return [];
                }
             }

            const placement = item.section_title;
            const replacements = seasonalPraisesData.filter((entry) => {
                const placementMatch = Array.isArray(entry.placement) && entry.placement.includes(placement);
                const seasonMatch = seasonsMatch(seasons, entry.season);
                // Entries may optionally specify a day-of-week as well.
                const dayMatch = dayOfTheWeekMatch(dayOfTheWeek, entry.dayOfTheWeek);
                const adamWatosMatchResult = adamWatosMatch(adamWatos, entry.adamWatos);
                return placementMatch && seasonMatch && dayMatch && adamWatosMatchResult;
            });
            return replacements;
        }
        return item;
    });
}

function resolveConditionalTables(data, { aktonkAki, seasons }) {
    if (!Array.isArray(data)) return [];

    const hasValue = (value) => value !== undefined && value !== null && value !== '';
    const normalizeToArray = (value) => Array.isArray(value) ? value : [value];

    const aktonkAkiEnglish = aktonkAki?.english;
    const selectedSeasons = hasValue(seasons) ? normalizeToArray(seasons) : [];

    return data.filter((item) => {
        if (!item || typeof item !== 'object') return true;

        // Include only if aktonkAki matches when specified on the item.
        if (hasValue(item.aktonkAki)) {
            if (!hasValue(aktonkAkiEnglish) || item.aktonkAki !== aktonkAkiEnglish) {
                return false;
            }
        }

        // Exclude kiahk=false items when the current seasons include Kiahk.
        if (item.kiahk === false) {
            if (selectedSeasons.includes('Kiahk')) return false;
        }

        // Respect explicit season targeting on the item.
        if (hasValue(item.season)) {
            const itemSeasons = normalizeToArray(item.season);
            const matchesSeason = itemSeasons.some((s) => selectedSeasons.includes(s));
            if (!matchesSeason) return false;
        }

        return true;
    });
}

function resolveRepeatedPrauersData(data) {
    if (!Array.isArray(data)) return [];
    if (!Array.isArray(repeatedPrayersData)) return [];

    return data.flatMap((item) => {
        if (item && item.category && item.repeated_prayer_title && item.source && item.source === "Annual") {
            const category = item.category;
            const repeated_prayer_title = item.repeated_prayer_title;

            const categoryEntry = repeatedPrayersData.find((entry) => entry.category === category);
            if (!categoryEntry || !Array.isArray(categoryEntry.tables)) {
                console.warn(`Repeated prayer category not found or invalid: ${category}`);
                return item;
            }

            const replacements = categoryEntry.tables.filter(
                (table) => table.title === repeated_prayer_title
            );
            if (!replacements.length) {
                console.warn(`Repeated prayer table not found for category "${category}" and title "${repeated_prayer_title}"`);
                return item;
            }

            return replacements;
        }
        return item;
    });
}


const psalmody = (settings) => {
    try {

        const dayOfWeek = settings.selectedDateProperties.dayOfWeekIndex;
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfTheWeek = daysOfTheWeek[dayOfWeek];
        const seasons = settings.selectedDateProperties.copticSeason;
        const adamWatos = settings.selectedDateProperties.adamOrWatos;
        const aktonkAki = settings.selectedDateProperties.aktonkAki;
        const weekdayWeekend = (dayOfWeek === 0 || dayOfWeek === 6) ? "weekend" : "weekday";
        const service = "Midnight Praises";

        const psalis = getPsalis(adamWatos, dayOfTheWeek, weekdayWeekend, seasons, service);
        const theotokia = getTheotokia(adamWatos,dayOfTheWeek,aktonkAki);
        const postFirstCanticleNonSunday = dayOfWeek !== 0 ? getpostFirstCanticleNonSunday(true) : '';
        const linkTargets = { psalis, theotokia, postFirstCanticleNonSunday };

        const psalmodyWithLinks = resolveLinks(psalmodyData, linkTargets);
        const psalmodyJson = resolveSeasonalData(
            psalmodyWithLinks,
            seasons,
            dayOfTheWeek,adamWatos
        );


        const psalmodyWithRepeatedPrayers = resolveRepeatedPrauersData(psalmodyJson);
        const psalmodyFinalJson = resolveConditionalTables(psalmodyWithRepeatedPrayers, { aktonkAki, seasons });

        /*
        const preview = psalmodyFinalJson.map((item, idx) => {
            if (item && typeof item === 'object' && !Array.isArray(item)) {
                const { tbodies, rows, ...rest } = item;
                const tbodiesCount = Array.isArray(tbodies) ? tbodies.length : undefined;
                const rowsCount = Array.isArray(rows) ? rows.length : undefined;
                return { index: idx, tbodiesCount, rowsCount, ...rest };
            }
            return { index: idx, value: item };
        });
        console.log('psalmody resolved preview (top-level only)', preview);*/

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
