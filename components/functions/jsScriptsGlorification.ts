    import { arabicNumbers , extractTableTitlesAndIds , paginateTablesGlorification , sendMessage , adjustOverlay , setOverlays , clearOverlays , showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , handleSpinner , loadStoredSettings , bookNavigationButtons} from "./javaScripts";

export const htmlRenderScript = `

window.onload = function() {
  sendMessage(JSON.stringify({type: 'debug', data: 'Loading...'}));

    injectSpinner();
    showSpinner();
    // change the spinner overlay color to black

    // change body display to visible
    setTimeout(() => {
        convertArabicCaptions();
        extractTableTitlesAndIds();
        paginateTables();
        hideSpinner(); // Hide spinner after processing
    }, 25); // Adjust the delay as needed
    
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
${paginateTablesGlorification}

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

