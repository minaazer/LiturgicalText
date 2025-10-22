import { renderHtmlTable } from "../components/functions/dataFunctions.js";

export const renderHtml  = (jsonData, pageTitle, tableClass, tbodyClass, variables) => {
    
    let tableCounter = 0; // Initialize a global table counter
    

    // Main rendering logic
    return `
        
                    <div class="section" id="section_0" title="${pageTitle}">
                        ${jsonData
                            .map((table) => {
                                const tableIdx = tableCounter++;
                                const htmlTable = renderHtmlTable(table, tableIdx, tableClass, tbodyClass, variables);
                                //console.log(htmlTable);
                                return htmlTable;
                            })
                            .join("")}
                    </div>
                `;
}
