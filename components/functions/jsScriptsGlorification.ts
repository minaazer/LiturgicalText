    import { arabicNumbers , extractTableTitlesAndIds , paginateTables , sendMessage , adjustOverlay , setOverlays , clearOverlays , showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , handleSpinner } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function() {
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

    listenToButtonClicks();
    listenToTableCaptions();
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

// Handle Spinner
${handleSpinner}
`

