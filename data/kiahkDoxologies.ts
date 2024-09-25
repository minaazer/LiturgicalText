import {
    kiahkDoxology,
    kiahk2Doxology,
    midnightDoxology,
    archangelMichaelDoxology,
    heavenlyDoxology,
    apostlesDoxology,
    stMarkDoxology,
    stGeorgeDoxology,
    stPhilopatirMercoriosDoxology,
    stMinaDoxology,
    stAnthonyDoxology,
    stAthanasiusDoxology,
    doxologiesConclusion   
} from './doxologies';

export const kiahkDoxologiesHtml = () => {
    
    const kiahkDoxologyHtml = kiahkDoxology("1");
    const kiahk2DoxologyHtml = kiahk2Doxology("2");
    const midnightDoxologyHtml = midnightDoxology("3");
    const archangelMichaelDoxologyHtml = archangelMichaelDoxology("4");
    const heavenlyDoxologyHtml = heavenlyDoxology("5");
    const apostlesDoxologyHtml = apostlesDoxology("6");
    const stMarkDoxologyHtml = stMarkDoxology("7");
    const stGeorgeDoxologyHtml = stGeorgeDoxology("8");
    const stPhilopatirMercoriosDoxologyHtml = stPhilopatirMercoriosDoxology("9");
    const stMinaDoxologyHtml = stMinaDoxology("10");
    const stAnthonyDoxologyHtml = stAnthonyDoxology("11");
    const stAthanasiusDoxologyHtml = stAthanasiusDoxology("12");
    const doxologiesConclusionHtml = doxologiesConclusion("13");

    return `
        <div class="section" id="section_1">
            ${kiahkDoxologyHtml}
            ${kiahk2DoxologyHtml}
            ${midnightDoxologyHtml}
            ${archangelMichaelDoxologyHtml}
            ${heavenlyDoxologyHtml}
            ${apostlesDoxologyHtml}
            ${stMarkDoxologyHtml}
            ${stGeorgeDoxologyHtml}
            ${stPhilopatirMercoriosDoxologyHtml}
            ${stMinaDoxologyHtml}
            ${stAnthonyDoxologyHtml}
            ${stAthanasiusDoxologyHtml}
            ${doxologiesConclusionHtml}
        </div>
    `;
};
