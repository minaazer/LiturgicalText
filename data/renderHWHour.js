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
    const renderedSections = sections
        .map((section, sectionIdx) => {
            if (!Array.isArray(section.tables)) {
                console.error(`Invalid tables in section: ${section.title}`, section);
                return `<div>Error: Invalid tables in section "${section.title}"</div>`;
            }

            const renderedTables = section.tables
                .map((table) => {
                    // Check if table should be displayed on one page
                    const onePageTable = updatedOnePageSettings.find(
                        (item) => item.label === table.title
                    );
                    const tableClass = "";
                    const tbodyClass = onePageTable && onePageTable.checked ? "scaling-container" : "";
                    const tableIdx = tableCounter;
                    const html = renderHtmlTable(
                        table,
                        tableIdx,
                        tableClass,
                        tbodyClass,
                        variables,
                        undefined,
                        { paschalReadingsFull }
                    );

                    // If the render returns empty (e.g., nonTraditionalPascha skipped), drop it.
                    if (!html || html.trim() === "") return "";

                    // Only increment the global counter for tables that actually render.
                    tableCounter += 1;
                    return html;
                })
                .filter((html) => html && html.trim() !== "")
                .join("");

            // Omit sections that end up with no rendered tables (e.g., all were filtered out).
            if (!renderedTables || renderedTables.trim() === "") return "";

            return `
                    <div class="section" id="section_${sectionIdx}" title="${processTemplate(section.title, variables)}">
                        ${renderedTables}
                    </div>
                `;
        })
        .filter((sectionHtml) => sectionHtml && sectionHtml.trim() !== "")
        .join("");

    return `
        ${renderedSections}
    `;
};
