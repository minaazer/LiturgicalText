import { extractTableTitlesAndIds , paginateTablesGlorification , sendMessage , adjustOverlayGlorification , setOverlays , clearOverlays } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function() {
    extractTableTitlesAndIds();
    paginateTables();
    adjustOverlay();
}

/** @format */

// Handle pagination
${paginateTablesGlorification}

// Handle table of contents
${extractTableTitlesAndIds}

// Handle sending message to React Native
${sendMessage}

// Handle overlay
${adjustOverlayGlorification}
${setOverlays}
${clearOverlays}

`

