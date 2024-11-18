import { getDoxologyHtml  } from './doxologyTexts';
import { getSeasonalDoxologyHtml , seasonalDoxologyFunctionNames } from './seasonal/seasonalDoxologyTexts';

export const doxologiesHtml = (settings) => {
    // Get the introductory doxology
    const introductionHtml = getDoxologyHtml('doxologiesInro', 0);
    
    // Get the selected date properties
    const copticSeason = settings.selectedDateProperties.copticSeason;

    // Update visibility of matching seasons
    const matchingSeasonsFunctionNames = seasonalDoxologyFunctionNames
    copticSeason.forEach(season => {
        matchingSeasonsFunctionNames.find(
            (doxology) => doxology.name === season
        );
        if (matchingSeasonsFunctionNames) {
            matchingSeasonsFunctionNames.visible = true;
        }
    });
    const visibleSeasonalDoxologies = matchingSeasonsFunctionNames
        .filter(doxology => doxology.visible)
        .map(doxology => doxology.functions)
        .flat();
    
        const seasonalDoxologiesHtml = visibleSeasonalDoxologies
        .map((doxologyName, index) => getSeasonalDoxologyHtml(doxologyName, index+1))
        .join('');
    
    // Now you can filter or display only the visible doxologies
    const doxologyFunctionNames = settings.doxologyFunctionNames;
    const visibleDoxologies = doxologyFunctionNames
        .filter(doxology => doxology.visible)
        .map(doxology => doxology.functions)
        .flat();
        
    const doxologiesHtml = visibleDoxologies
    .map((doxologyName, index) => getDoxologyHtml(doxologyName, index+20))
    .join('');

    return `
        <div class="section" id="section_1">
            ${introductionHtml}
            ${seasonalDoxologiesHtml}
            ${doxologiesHtml}
        </div>
    `;
};
