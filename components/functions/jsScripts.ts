import { arabicNumbers , disableScrolling , extractTableTitlesAndIds , paginateTables , sendMessage , adjustOverlay , setOverlays , clearOverlays , showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , handleSpinner, bookNavigationButtons , loadStoredSettings } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function() {
    injectSpinner();
    showSpinner();
    // change body display to visible
    setTimeout(() => {
        convertArabicCaptions();
        extractTableTitlesAndIds();
        paginateTables();
        hideSpinner(); // Hide spinner after processing

    }, 0); // Adjust the delay as needed
    
    const fileKey = '';
    const currentFileStates = {};
    const savedStates = {};

    loadStoredSettings();

    listenToButtonClicks();
    listenToBookNavigationButtons();
}

// Arabic caption numbers
${arabicNumbers}

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

// Handle black screen
${showBlackScreen}
${removeBlackScreen}

// Handle Buttons
${tableToggle}
${listenToButtonClicks}
${bookNavigationButtons}

// Handle Spinner
${handleSpinner}

// Load stored settings
${loadStoredSettings}
`