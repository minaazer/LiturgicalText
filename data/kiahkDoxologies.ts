import { getDoxologyHtml } from './doxologyTexts';

export const kiahkDoxologiesHtml = () => {
    const doxologyNames = ["kiahkDoxology","kiahk2Doxology","midnightDoxology",
    "archangelMichaelDoxology","heavenlyDoxology","apostlesDoxology","stMarkDoxology",
    "stGeorgeDoxology","stPhilopatirMercoriosDoxology","stMinaDoxology","stAnthonyDoxology",
    "stAthanasiusDoxology","doxologiesConclusion"];
    const kiahkDoxologiesHtml = doxologyNames.map((doxologyName, index) => getDoxologyHtml(doxologyName, index)).join('');

    

    return `
        <div class="section" id="section_1">
            ${kiahkDoxologiesHtml}
        </div>
    `;
};
