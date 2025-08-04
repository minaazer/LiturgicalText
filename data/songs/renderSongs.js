import { renderTable } from "../../components/functions/dataFunctions.js";

export const renderSongs = (theme, onePageSettings) => {
    

    let tableCounter = 0; // Initialize a global table counter
    
    const onePageSongs = onePageSettings.find(
        (item) => item.label === "Songs"
        )?.checked;
    const tableClass = onePageSongs ? 'onePage' : "";
    console.log("onePageSongs:", tableClass);

    // Main rendering logic
    return `
        
                    <div class="section" id="section_0" title="${theme}">
                        ${songs
                            .map((table) => {
                                const tableIdx = tableCounter++;                                

                                
                                return renderSong(table, tableIdx, tableClass, paschalReadingsFull, variables);
                            })
                            .join("")}
                    </div>
                `;
            })
            .join("")}
    `;
};
