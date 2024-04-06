import { extractTableTitlesAndIds , paginateTables , sendMessage , adjustOverlay , setOverlays , clearOverlays } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function() {
    extractTableTitlesAndIds();
    paginateTables();
    adjustOverlay();
}

/** @format */

// Handle pagination
${paginateTables}

// Handle table of contents
${extractTableTitlesAndIds}

// Handle sending message to React Native
${sendMessage}

// Handle overlay
${adjustOverlay}
${setOverlays}
${clearOverlays}

`

