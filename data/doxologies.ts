import { getDoxologyHtml } from './doxologyTexts';
import { getSeasonalDoxologyHtml, seasonalDoxologyFunctionNames } from './seasonal/seasonalDoxologyTexts';

export const doxologiesHtml = (settings) => {
    
    
    // Get the selected date properties
    const copticSeason = settings.selectedDateProperties.copticSeason;

    // Get the introductory doxology
    // if Kiahk is in copticSeason, then do not show the intro
    // const introductionHtml =  getDoxologyHtml('intro', 0);
    const introductionHtml =  '';


    // Update visibility of matching seasons
    const matchingSeasonsFunctionNames = seasonalDoxologyFunctionNames;

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
    const doxologyFunctionNames = settings.doxologyFunctionNames;
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


    // Filter and process visible doxologies
    const visibleDoxologies = doxologyFunctionNames
        .filter(doxology => doxology.visible)
        .map(doxology => doxology.functions)
        .flat();

    const doxologiesHtml = visibleDoxologies
        .map((doxologyName, index) => getDoxologyHtml(doxologyName, index + 20))
        .join('');

    // Combine all parts into the final HTML
    return `
        <div class="section" id="section_1">
            ${introductionHtml}
            ${seasonalDoxologiesHtml}
            ${doxologiesHtml}
        </div>
    `;
};
