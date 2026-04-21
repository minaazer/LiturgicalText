import { useContext, useState, useEffect, useMemo } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { buildFontTypefaceCss, defaultFontTypeface } from './fontTypeface';

export const useDynamicStyles = (webviewRef) => {
    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    const safeAreaWidth = width - (insets.left + insets.right); // Account for safe area insets
    const isPortrait = height >= width; // Determine orientation
    const calculatedWidth = `${safeAreaWidth-15}px`;
    const columnPadding = width > 900 ? 35 : 20; // Adjust for padding
    const fontSizeUnit = isPortrait ? 'vh' : 'vw';
    const [settings] = useContext(SettingsContext);
    const [fontSize, setFontSize] = useState('3.5 vw'); 
    const [titleFontSize, setTitleFontSize] = useState('4 vw');
    const [toggleFontSize, setToggleFontSize] = useState('3 vw');
    const [linkFontSize, setLinkFontSize] = useState('3 vw');
    const [fontFaceCss, setFontFaceCss] = useState(defaultFontTypeface);
    const isScrollMode = settings?.displayMode === "scroll";
    const touchAction = isScrollMode ? "pan-y" : "none";
    const bodyOverflow = isScrollMode ? "auto" : "hidden";
    const [visibleLangues, setVisibleLangues] = useState([
        { label: 'English', value: 'English' , checked: true },
        { label: 'Arabic', value: 'Arabic' , checked: true },
        { label: 'Coptic', value: 'Coptic' , checked: true },
        { label: 'English Phonics', value: 'English Phonics' , checked: true },
        { label: 'Arabic Phonics', value: 'Arabic Phonics' , checked: true },
        { label: 'Commentary', value: 'Commentary' , checked: true},
      ]);

    useEffect(() => {
        if (settings.fontSize) {
            setFontSize(settings.fontSize + fontSizeUnit);
            setTitleFontSize((parseFloat(settings.fontSize) + 1) + fontSizeUnit);
            setLinkFontSize((parseFloat(settings.fontSize) + 1) + fontSizeUnit);
            setToggleFontSize((parseFloat(settings.fontSize) - 1) + fontSizeUnit);
            const webview = webviewRef?.current;
            if (webview?.injectJavaScript) {
                // Clear caches and repaginate after font change; small delay on iOS for layout to settle
                const repaginate = `
                    if (!window._scrollMode) {
                        if (paginateTables && typeof paginateTables.clearFontCache === 'function') { paginateTables.clearFontCache(); }
                        if (paginateTables && typeof paginateTables.clearPaginationCache === 'function') { paginateTables.clearPaginationCache(); }
                        window._suspendPaginate = false;
                        paginateTables();
                        clearOverlays();
                        adjustOverlay();
                    }
                `;
                const delay = Platform.OS === 'ios' ? 150 : 50;
                setTimeout(() => webview.injectJavaScript(repaginate), delay);
            }
        }
        if (settings.languages) {
            
            setVisibleLangues(settings.languages);
        }
    }, [settings.fontSize, settings.languages]);

    useEffect(() => {
        let isMounted = true;
        buildFontTypefaceCss()
            .then((css) => {
                if (isMounted) {
                    const cssText = css || '';
                    setFontFaceCss(cssText || defaultFontTypeface);
                }
            })
            .catch((err) => {
                console.warn('fontFaceCss error', err);
                if (isMounted) setFontFaceCss(defaultFontTypeface);
            });
        return () => {
            isMounted = false;
        };
    }, []);

    const cssStyles = useMemo(() => `
* {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
}

 :root {
 --fontSize: 26px;
 --copticFont: 'FreeSerif Avva Shenouda';
 --projection-bg: black;
 --projection-text: white;
 --projection-blue: #B9DCFF;
 --projection-gold: #D8D48A;
 --projection-title: #FDFD96;
 --projection-red: #FF7777;
 --projection-phonetic: #FFB99B;
 --projection-purple: #DDD6F3;
 --projection-instruction: #D6C6FF;
 --projection-muted: #C7C7C7;
 --projection-role: #5DF01E;
 --projection-control-gold-wash: rgba(216, 212, 138, 0.08);
 --projection-control-gold-border: rgba(216, 212, 138, 0.34);
}

${fontFaceCss}

 html {
  background-color: var(--projection-bg);
  margin: 0;
  padding: 0;
  width: 99%;
  touch-action: ${touchAction};
  overflow-x: hidden;
  overscroll-behavior-x: none;
  pointer-events: auto;
  }



 body {
  overflow: ${bodyOverflow};
  overflow-x: hidden;
  touch-action: ${touchAction};
  overscroll-behavior-x: none;
  color: var(--projection-text);
  font-size: ${fontSize};
 width: ${calculatedWidth} !important;
 margin-top: 0px;
 padding-top: 0px;
 margin-bottom: 1000px;
 pointer-events: box-none;
}

h1 {
    font-size: ${fontSize} !important;
    text-align: center !important;
}

div {
    margin: 0;
    padding: 0;

}

table {
page-break-before: always; /* Use for older browsers */
break-before: page; /* Modern browsers */
margin: 0;
padding: 0;
display: table;
layout: fixed;
width: ${calculatedWidth} !important;
border-collapse: collapse;
font-size: ${fontSize};
border-width: 0px;
touch-action: ${touchAction};

}


/* Handle first table to avoid first-page break */
table:first-of-type {
page-break-before: auto;
break-before: auto;
}

tbody {
    font-size: ${fontSize};
    border-width: 0px;

}

tr {
    display: flex; /* Ensure rows behave like traditional table rows */
    flex-direction: row;
    align-items: flex-start;
    width: ${calculatedWidth} !important;
    overflow-wrap: break-word; /* Prevent text overflow */
    overflow-x: hidden;
    padding: 0 0 10px 0; /* Add padding to the bottom of each row */
    border-width: 0px;
    touch-action: ${touchAction};


}

td {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    overflow-wrap: break-word; /* Prevent text overflow */
    word-wrap: break-word !important;
    white-space: normal !important; /* Allow text wrapping */
    vertical-align: top;
    overflow-wrap: break-word; /* Prevent text overflow */
    overflow-x: hidden;
    border-width: 0px;
    pointer-events: none;

}

/* First column of a 3-column row */
td.column-1-3 {
    flex: 0 1 35%; /* 30% width */
    padding-right: ${columnPadding}px;
}

/* Second column of a 3-column row */
td.column-2-3 {
    flex: 0 1 38%; /* 30% width */
    padding-right: ${columnPadding}px;

}

/* Third column of a 3-column row */
td.column-3-3 {
    flex: 0 1 27%; /* 30% width */
    padding-right: 3px;
}

/* First column of a 2-column row */
td.column-1-2 {
    flex: 0 1 55%; /* 30% width */
    padding-right: ${columnPadding}px;
}

/* Second column of a 2-column row */
td.column-2-2 {
    flex: 0 1 45%; /* 30% width */
    padding-right: 3px;
    pointer-events: none;

}

/* Full-width single column */
td.column-1-1 {
    width: 100%;
    margin-right: 7px;
}

@media screen and (max-width: 400px) {
    
    td.column-1-3,
    td.column-2-3,
    td.column-1-2 {
        padding-right: 10;
    }
    td.column-1-1 {
        padding-right: 0;
    }
   
}


.arabic {
    font-family: 'Noto Naskh Arabic' !important;
    direction: rtl !important; 
    unicode-bidi: embed; /* Ensure proper rendering of Arabic text */
    vertical-align: top ;
    text-align: justify;
    text-justify: auto;
    width: 100% !important;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    line-height: 1.4 !important;

}

.arabic1 {
    
    vertical-align: top ;
    font-family: 'Noto Naskh Arabic' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    line-height: 1.4 !important;

}

.arRef {
    text-align: center !important;
    font-family: 'Noto Naskh Arabic' !important;
    direction: rtl !important;    
    vertical-align: top ;
    padding-bottom: 10px;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
}

.coptic {    
    vertical-align: top ;
    font-family: 'FreeSerif Avva Shenouda' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[2].checked ? 'none' : 'inline'};
    line-height: 1.4;
}

.copticReadings {
    
    vertical-align: top ;
    font-family: 'FreeSerif Avva Shenouda' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[2].checked ? 'none' : 'inline'};
}

.english {  
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: justify;
    line-height: 1.3 !important;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
}

.engRef {  
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: center !important;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
}

.enPhonics, .enPhonicsDual {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
    color: var(--projection-phonetic) !important;
}
.enPhonicsDual {
    flex: 0 1 60% !important;
}

.enPhonicsSongs, .enPhonics1 {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
}


.arPhonics {
    font-family: 'Noto Naskh Arabic' !important;
    text-align: right;
    direction: rtl !important;        
    vertical-align: top ;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[4].checked ? 'none' : 'flex'};
    color: var(--projection-phonetic) !important;
}



.bold {
    font-weight: bold !important;
    font-family: 'EB Garamond' !important;
    color: var(--projection-red) !important;
}


.caption {
    font-size: ${titleFontSize};
    font-family: 'EB Garamond' !important;
    color: var(--projection-text) !important;
    display: grid;
    grid-template-columns: auto 1fr auto; /* toggle | text | actions */
    align-items: center;
    gap: 10px;
    text-align: left;
    padding: 8px 12px 10px 0px;
    font-weight: bold;
    cursor: pointer;
    pointer-events: auto;
    line-height: 1.1 !important;
    width: 100%;
    box-sizing: border-box;
    min-height: 44px;
}

.caption-toggle {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 0.72em;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.4em;
    justify-self: center;
    text-align: center;
    color: var(--projection-text) !important;
}

.caption-toggle::before {
    content: "\\f056";
}

.caption-texts {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1 1 auto;
    min-width: 0;
    text-align: center;
    overflow-wrap: break-word;
    word-break: normal;
    align-items: center;
    width: 100%;
}

.caption-texts span {
    display: block;
    width: 100%;
    text-align: center;
    white-space: normal;
    flex-shrink: 0;
    align-items: center;
}

.caption-separator {
    color: grey;
    font-weight: normal;
    font-family: 'EB Garamond' !important;
    padding: 0 4px;
    display: inline-block;
    margin: 0 4px;
}

.caption:not(.header-table) {
    text-align: left;
}

.caption:not(.header-table) .caption-texts {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 0;
    row-gap: 4px;
    align-items: flex-start;
}

.caption:not(.header-table) .caption-texts span {
    display: inline-flex;
    width: auto;
    max-width: 100%;
    text-align: left;
}

.caption:not(.header-table) .caption-separator {
    align-self: center;
}

.caption:not(.header-table) .coptic-caption {
    text-align: left !important;
}

.caption.caption-two-lang-en-ar:not(.header-table) .caption-texts {
    display: grid;
    grid-template-columns: minmax(0, 55%) minmax(0, 45%);
    column-gap: 14px;
    row-gap: 0;
    align-items: start;
    width: 100%;
}

.caption.caption-two-lang-en-ar:not(.header-table) .caption-texts .english-caption {
    display: block;
    width: 100%;
    text-align: left;
    justify-self: start;
}

.caption.caption-two-lang-en-ar:not(.header-table) .caption-texts .arabic-caption {
    display: block;
    width: 100%;
    text-align: right;
    justify-self: end;
}

.caption.caption-two-lang-en-ar:not(.header-table) .caption-separator {
    display: none;
}

.caption.caption-three-lang:not(.header-table) .caption-texts {
    display: grid;
    grid-template-columns: minmax(0, 35%) minmax(0, 38%) minmax(0, 27%);
    column-gap: 14px;
    row-gap: 0;
    align-items: start;
    width: 100%;
}

.caption.caption-three-lang:not(.header-table) .caption-texts .english-caption {
    display: block;
    width: 100%;
    text-align: left;
    justify-self: start;
}

.caption.caption-three-lang:not(.header-table) .caption-texts .coptic-caption {
    display: block;
    width: 100%;
    text-align: center !important;
    justify-self: center;
}

.caption.caption-three-lang:not(.header-table) .caption-texts .arabic-caption {
    display: block;
    width: 100%;
    text-align: right;
    justify-self: end;
}

.caption.caption-three-lang:not(.header-table) .caption-separator {
    display: none;
}

@media (max-width: 520px) {
    .caption.caption-three-lang:not(.header-table) .caption-texts {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        align-items: stretch;
        width: 100%;
    }

    .caption.caption-three-lang:not(.header-table) .caption-texts .english-caption,
    .caption.caption-three-lang:not(.header-table) .caption-texts .coptic-caption,
    .caption.caption-three-lang:not(.header-table) .caption-texts .arabic-caption {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    .caption.caption-three-lang:not(.header-table) .caption-texts .english-caption {
        text-align: left;
    }

    .caption.caption-three-lang:not(.header-table) .caption-texts .coptic-caption {
        text-align: left !important;
    }

    .caption.caption-three-lang:not(.header-table) .caption-texts .arabic-caption {
        text-align: left;
    }
}

.caption.header-table .caption-texts {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 28px;
    row-gap: 4px;
    width: auto;
    justify-self: center;
    padding-bottom: 4px;
    border: 0 !important;
    box-shadow: none !important;
    text-decoration: none !important;
}

.caption.header-table .caption-texts span {
    display: inline-flex;
    width: auto;
    border: 0 !important;
    box-shadow: none !important;
    text-decoration: none !important;
}

.caption.header-table .caption-separator {
    display: none;
}

.caption-actions {
    justify-self: end;
    display: inline-flex;
    align-items: center;
    gap: 0.42em;
}
.caption-actions:empty {
    display: none;
}

.caption.silent-prayer {
    color: var(--projection-muted) !important;
}

table.silent-prayer {
    color: var(--projection-muted) !important;
}

table.silent-prayer * {
    color: var(--projection-muted) !important;
}

.caption.header-table {
    color: var(--projection-title) !important;
    grid-template-columns: 1fr auto;
    border: 0 !important;
    box-shadow: none !important;
    text-decoration: none !important;
}

.caption.header-table .caption-toggle {
    display: none;
}

.audio-button,
.explanation-button,
.image-button {
    position: static;
    cursor: pointer;
    pointer-events: auto;
    z-index: 2;
    display: inline-block;
    min-width: 1em;
    flex: 0 0 auto;
    line-height: 1;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 0.72em;
    color: var(--projection-gold) !important;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.audio-button::before,
.explanation-button::before,
.image-button::before {
    display: inline-block;
    line-height: 1;
}

.explanation-button::before {
    content: "\\f518";
}

.image-button::before {
    content: "\\f001";
}

.audio-button::before {
    content: "\\f144";
}

.caption.table-invisible .caption-toggle::before {
    content: "\\f055";
}
.caption.table-invisible .caption-toggle {
    color: var(--projection-text) !important;
}
.coptic-caption {
    font-family: 'FreeSerif Avva Shenouda';
    direction: ltr !important;
    text-align: center !important;
}
.coptic-caption:lang(en) {
    font-family: 'Georgia' !important;
  }
.arabic-caption {
    font-family: 'Noto Naskh Arabic' !important;
    direction: rtl !important;
}

.hidden-caption {
    color: var(--projection-bg) !important;
    pointer-events: none !important;
    font-size: 0 !important;
    line-height: 0 !important;
    display: grid !important;
    visibility: hidden !important;
    padding: 0 !important;
    margin: 0 !important;
    min-height: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
}

.arabic-text {
    font-family: 'Noto Naskh Arabic' !important;
    direction: rtl !important;
    line-height: 1;
}




.title {
    text-align: center !important;
    color: var(--projection-title) !important;
    display: flex !important;
    line-height: 1 !important;
    align-items: center !important; // vertical align
    font-size: ${fontSize} !important;

}

.navigationButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    font-size: ${fontSize};
    font-family: 'EB Garamond' !important;
    color: var(--projection-gold) !important;
    background: var(--projection-control-gold-wash) !important;
    font-weight: 700 !important;
    padding: 8px 12px !important;
    margin: 8px 0 !important;
    border-radius: 6px !important;
    border: 1px solid var(--projection-control-gold-border) !important;
    box-shadow: none !important;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    pointer-events: auto;

}

.arabicButton {
    text-align: center;
    direction: rtl;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'table-cell'};
}

.englishButton {
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: center;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'table-cell'};
}

.navigationLink {
    display: flex;
    flex-direction: column;
    font-size: ${linkFontSize};
    color: var(--projection-red) !important;
    background-color: var(--projection-bg) !important;
    font-weight: bold !important;
    text-decoration: underline;
    cursor: pointer;
    pointer-events: auto;
     
}

.arabicLink {
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'flex'};
    padding-right: 10px;
    width: 100%;
    align-items: center;
}

.englishLink {
    font-family: 'Georgia' !important;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
    width: 100%;
    align-items: center;
}



.papalAddition {
    color: var(--projection-blue);
}
.north {
    color: var(--projection-text);
}

.south {
    color: var(--projection-blue);
}
.text {
    color: var(--projection-text);
}
.intro {
    color: var(--projection-gold) !important;
}

.reference{
    color: var(--projection-purple) !important;
    justify-content: center !important;
    align-items: center !important;
}
.refrain {
    color: var(--projection-gold) !important;
}
.commentary {
    color: var(--projection-purple) !important;
    display: ${settings.languages && !visibleLangues[5].checked ? 'none' : 'flex'};


}
.instruction {
    color: var(--projection-instruction) !important;
    display: ${settings.languages && !visibleLangues[5].checked ? 'none' : 'flex'};


}
.priest {
    color: var(--projection-blue) !important;
}

.role {
    color: var(--projection-role) !important;
    padding-bottom: 0px !important;
    margin-bottom: 0px !important;
}

.skipButton {
 text-align: center;
 align-items: center;
 justify-content: center;
 pointer-events: auto;
 cursor: pointer;
}


#drawer {
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 width: 300px;
 background-color: #fff;
 box-shadow: -2px 0 2px rgba(0, 0, 0, 0.2);
 transform: translateX(100%);
 transition: transform 0.3s ease-in-out;
}

#drawer.open {
 transform: translateX(0);
}

#drawer-toggle {
 position: absolute;
 top: 10px;
 right: 10px;
}
 

/* Spinner CSS */
#spinner {
    display: none; /* Hidden by default */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999; /* Ensure the spinner is above the overlay */
}

#spinner-overlay {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8); /* 90% transparent black */
    backdrop-filter: blur(15px); /* Apply blur to the background */
    z-index: 9998; /* Ensure it's behind the spinner */
}

.transparent-black {
    background-color: rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(15px); /* Apply blur to the background */

}



.loader {
    border: 5px solid '#f0f0f0'; /* Light grey */
    border-top: 5px solid #003060; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

`, [
        insets.left,
        insets.right,
        width,
        height,
        calculatedWidth,
        columnPadding,
        fontSize,
        titleFontSize,
        toggleFontSize,
        linkFontSize,
        fontFaceCss,
        touchAction,
        bodyOverflow,
        visibleLangues,
        settings.languages,
    ]);

    return cssStyles;
};



