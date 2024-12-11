import { getDoxologyHtml } from './doxologyTexts';
import { getSeasonalDoxologyHtml, seasonalDoxologyFunctionNames } from './seasonal/seasonalDoxologyTexts';

export const kiahkDoxologiesHtml = (settings) => {

    const introductionHtml = getDoxologyHtml('doxologiesInro', 0);

    // Update visibility of matching seasons
    const matchingSeasonsFunctionNames = seasonalDoxologyFunctionNames;
    const copticSeason = ["Kiahk"];
    
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
    
    const kiahkDoxologiesHtml = visibleSeasonalDoxologies
        .map((doxologyName, index) => getSeasonalDoxologyHtml(doxologyName, index + 1))
        .join('');

        // Filter and generate HTML for regular doxologies
        const doxologyFunctionNames = settings.doxologyFunctionNames;
        const visibleDoxologies = doxologyFunctionNames
            .filter(doxology => doxology.visible)
            .map(doxology => doxology.functions)
            .flat();
        
        const doxologiesHtml = visibleDoxologies
            .map((doxologyName, index) => getDoxologyHtml(doxologyName, index + 20))
            .join('');
    
    

    return `
        <div class="section" id="section_1">
        ${introductionHtml}
        ${kiahkDoxologiesHtml}
        ${doxologiesHtml}        </div>
    `;
};
