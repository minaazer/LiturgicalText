import { getExpositionOnePageSettings , processTemplate , renderTable , renderRepeatedPrayer } from "../../components/functions/dataFunctions.js";

export const renderHour = (serviceName, hourName, sections = [], onePageSettings, paschalReadingsFull, variables = {}) => {
    if (!Array.isArray(sections)) {
        console.error("Invalid sections array:", sections);
        return `<div>Error: Invalid sections for ${serviceName} - ${hourName}</div>`;
    }

    let tableCounter = 2; // Initialize a global table counter
    const updatedOnePageSettings = getExpositionOnePageSettings(onePageSettings);

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
                                    (item) => item.label === table.title || item.label === table.repeated_prayer_title
                                );
                                const tableClass = onePageTable && onePageTable.checked ? 'onePage' : "";

                                // Handle repeated prayers
                                if (table.repeated_prayer_title) {
                                    return renderRepeatedPrayer(table, tableIdx, variables, tableClass, paschalReadingsFull);
                                }

                                // Render normal table
                                return renderTable(table, tableIdx, tableClass, paschalReadingsFull, variables);
                            })
                            .join("")}
                    </div>
                `;
            })
            .join("")}
    `;
};
