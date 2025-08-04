import { renderSongTables } from "../../components/functions/dataFunctions.js";

export const renderSongs = (filteredSongs, theme, onePageSettings) => {
    

    let tableCounter = 0; // Initialize a global table counter
    
    const onePageSongs = onePageSettings.find(
        (item) => item.label === "Songs"
        )?.checked;
    const tableClass = onePageSongs ? 'onePage' : "";

    // Main rendering logic
    return `
        
                    <div class="section" id="section_0" title="${theme}">
                        ${filteredSongs
                            .map((table) => {
                                const tableIdx = tableCounter++;                                

                                return renderSongTables(table, tableIdx, tableClass, filteredSongs);
                            })
                            .join("")}
                    </div>
                `;
}
