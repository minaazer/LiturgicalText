import { initialize , disableScrolling ,  dynamicTableClasses , handleTouchNavigation , arabicNumbers , extractTableTitlesAndIds , paginateTables , sendMessage , adjustOverlay , setOverlays , clearOverlays , showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , listenToPopupButtonClicks , handleSpinner, bookNavigationButtons , loadStoredSettings } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function () {
    let fileKey = '';
    let currentFileStates = {};
    let savedStates = {};
    let isInitialized = false;



    applyDynamicTableClasses();

    handleTouchNavigation();

};


// Initialize
${initialize}



// Dynamic Table Classes
${dynamicTableClasses}

// Handle Touch Navigation
${handleTouchNavigation}

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
${listenToPopupButtonClicks}
${bookNavigationButtons}

// Handle Spinner
${handleSpinner}

// Load stored settings
${loadStoredSettings}
`