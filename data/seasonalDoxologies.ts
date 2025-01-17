import { getSeasonalDoxologyHtml , seasonalDoxologyFunctionNames} from './seasonal/seasonalDoxologyTexts';

export const seasonalDoxologiesHtml = (settings) => {

    

    const visibleDoxologies = seasonalDoxologyFunctionNames
    .map(doxology => doxology.functions)
    .flat();

    const doxologiesHtml = visibleDoxologies
    .map((doxologyName, index) => getSeasonalDoxologyHtml(doxologyName, index))
    .join('');

    return `
        <div class="section" id="section_1">
            ${doxologiesHtml}
        </div>
    `;
};
