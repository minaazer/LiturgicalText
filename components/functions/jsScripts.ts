import { arabicNumbers , extractTableTitlesAndIds , paginateTables , sendMessage , adjustOverlay , setOverlays , clearOverlays , showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , handleSpinner, bookNavigationButtons , loadStoredSettings } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function () {
    (async function main() {
        debugMessage('Setup started...');

        let fileKey = '';
        let currentFileStates = {};
        let savedStates = {};


        // Inject spinner and show loading indicator
        injectSpinner();
        showSpinner();

        // Custom ready flag to track initialization
        let isInitialized = false;
        try {
            // Perform operations in sequence
            await convertArabicCaptions();
            await loadStoredSettings();
            await extractTableTitlesAndIds();
            await paginateTables();

            // Mark as initialized
            isInitialized = true;

            debugMessage('Setup completed successfully.');
        } catch (error) {
            debugMessage('Error during setup:'+ error);
        } finally {
            hideSpinner(); // Ensure spinner is hidden even if there's an error
        }

        // Wait for initialization before enabling interactions
        if (isInitialized) {
            sendMessage(JSON.stringify({ type: 'LOADING', data: false }));

            listenToButtonClicks();
            listenToBookNavigationButtons();


        }
    })();
};


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