import { getExpositionOnePageSettings , processTemplate , renderHtmlTable , resolveRepeatedPrayers } from "../components/functions/dataFunctions.js";

export const renderHour = (serviceName, hourName, sections = [], onePageSettings, paschalReadingsFull, variables = {}) => {
    if (!Array.isArray(sections)) {
        console.error("Invalid sections array:", sections);
        return `<div>Error: Invalid sections for ${serviceName} - ${hourName}</div>`;
    }

    let tableCounter = 2; // Initialize a global table counter
    const updatedOnePageSettings = getExpositionOnePageSettings(onePageSettings);

    sections = resolveRepeatedPrayers(sections, paschalReadingsFull);

    // Main rendering logic
    return `
        ${sections
            .map((section, sectionIdx) => {
                if (!Array.isArray(section.tables)) {
                    console.error(`Invalid tables in section: ${section.title}`, section);
                    return `<div>Error: Invalid tables in section "${section.title}"</div>`;
                }

                return `
                    <div class="section" id="section_${sectionIdx + 2}" title="${processTemplate(section.title, variables)}">
                        ${section.tables
                            .map((table) => {
                                const tableIdx = tableCounter++;

                                // Check if table should be displayed on one page
                                const onePageTable = updatedOnePageSettings.find(
                                    (item) => item.label === table.title
                                );
                                const tableClass = onePageTable && onePageTable.checked ? 'onePage' : "";


                                // Render normal table
                                return renderHtmlTable(
                                    table,
                                    tableIdx,
                                    tableClass,
                                    "",
                                    variables,
                                    undefined,
                                    { paschalReadingsFull }
                                );
                            })
                            .join("")}
                    </div>
                `;
            })
            .join("")}
    `;
};
