import { arabicNumbers , disableScrolling , extractTableTitlesAndIds , paginateTables , sendMessage , adjustOverlay , setOverlays , clearOverlays } from "./javaScripts";

export const htmlRenderScript = `

window.onload = function() {
    convertArabicCaptions();
    extractTableTitlesAndIds();
    paginateTables();
    adjustOverlay();
    listenToButtonClicks();
}
function listenToButtonClicks() {
    // Get all elements with class .navigationButton
    const navigationButtons = document.querySelectorAll('.navigationButton');

    // Loop through each navigation button
    navigationButtons.forEach(button => {
        // Attach click event listener to each button
        button.addEventListener('click', function() {
            const buttonId = this.dataset.navigation;
            sendMessage(JSON.stringify({ type: 'NAVIGATION', data: buttonId }));
        });
    });
};


/** @format */
// Arabic caption numbers
${arabicNumbers}

// Disable Scrolling

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

