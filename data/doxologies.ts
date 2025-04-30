import { getDoxologyHtml } from './doxologyTexts';
import { getSeasonalDoxologyHtml, seasonalDoxologyFunctionNames } from './seasonal/seasonalDoxologyTexts';
import { getAdamDoxologiesConclusion } from './midnightPsalmody/annual';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export const doxologiesHtml = (settings , source) => {
    // Deep copy of doxologyFunctionNames to avoid modifying the original array
    const doxologyFunctionNames = settings.doxologyFunctionNames.map(doxology => ({ ...doxology }));
    console.log('source', source);
    const adam = settings.selectedDateProperties.adamOrWatos === "Adam";
    const adamDoxologiesConclusion = source === "midnightPraises" && adam ? getAdamDoxologiesConclusion(100) : '';
    // Get the selected date properties
    const copticSeason = settings.selectedDateProperties.copticSeason;
    const saintFeasts = settings.selectedDateProperties.saintFeast;

    // Get the introductory doxology
    const introductionHtml = (source === "vespers" || source === "matins") ? getDoxologyHtml('doxologiesInro', 0) : '';

    // Deep copy of seasonalDoxologyFunctionNames
    const matchingSeasonsFunctionNames = seasonalDoxologyFunctionNames.map(doxology => ({ ...doxology }));

    // Update visibility of matching seasons

    copticSeason.forEach(season => {
        const matchedSeason = matchingSeasonsFunctionNames.find(
            (doxology) => doxology.name === season
        );
        if (matchedSeason) {
            matchedSeason.visible = true;
        }
    });

    // Filter and generate HTML for seasonal doxologies
    const visibleSeasonalDoxologies = matchingSeasonsFunctionNames
        .filter(doxology => doxology.visible)
        .map(doxology => doxology.functions)
        .flat();
    
    const seasonalDoxologiesHtml = visibleSeasonalDoxologies
        .map((doxologyName, index) => getSeasonalDoxologyHtml(doxologyName, index + 1))
        .join('');
    
    // Filter and generate HTML for regular doxologies
    // Logic to modify visibility based on `copticSeason`
    if (copticSeason.includes('Kiahk')) {
        // Find the Archangel Gabriel Kiahk doxology and set it to visible
        const kiahkDoxology = doxologyFunctionNames.find(doxology => doxology.name === 'Archangel Gabriel Kiahk');
        if (kiahkDoxology) {
            kiahkDoxology.visible = true;
        }

        // Combine Archangel Gabriel and St Mary doxologies
        const doxologiesToHide = [
            'Archangel Gabriel',
            'St Mary Doxology for Vespers',
            'St Mary Doxology for Midnight Praises',
            'St Mary Doxology for Matins',
        ];

        doxologiesToHide.forEach((doxologyName) => {
            const doxology = doxologyFunctionNames.find(item => item.name === doxologyName);
            if (doxology) {
                doxology.visible = false; // Set to not visible
            }
        });        
    } 

    if (saintFeasts.some(feast => feast.saintName)) {
        // Make doxologies matching the saintName in saintFeasts visible
        saintFeasts.forEach(feast => {
            if (feast.saintName) {
                const matchingDoxology = doxologyFunctionNames.find(doxology => doxology.name === feast.saintName);
                if (matchingDoxology) {
                    matchingDoxology.visible = true; // Set to visible
                }
            }
        });
    }

    // Filter and process visible doxologies
    const visibleDoxologies = doxologyFunctionNames
        .filter(doxology => doxology.visible)
        .map(doxology => doxology.functions)
        .flat();

    const doxologiesHtml = visibleDoxologies
        .map((doxologyName, index) => getDoxologyHtml(doxologyName, index + 30))
        .join('');

    const stMaryDoxologyHtml = source === "midnightPraises" ? getDoxologyHtml('midnightDoxology', 20) : 
        (source === "vespers" ? getDoxologyHtml('vespersDoxology', 20) : 
        getDoxologyHtml('matinsDoxology', 20));

    // Combine all parts into the final HTML
    return `
        <div class="section" id="section_1">
            ${introductionHtml}
            ${seasonalDoxologiesHtml}
            ${stMaryDoxologyHtml}
            ${doxologiesHtml}
            ${adamDoxologiesConclusion}
        </div>
    `;
};
