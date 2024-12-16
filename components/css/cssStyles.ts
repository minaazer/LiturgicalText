import { useContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import SettingsContext from '../../settings/settingsContext';
import { fontTypeface } from './fontTypeface';

export const useDynamicStyles = (webviewRef) => {
    const { width, height } = Dimensions.get("window");
    const calculatedWidth = width - 10; // Adjust for padding
    const columnPadding = width > 900 ? 35 : 20; // Adjust for padding
    const isPortrait = height >= width; // Determine orientation
    const fontSizeUnit = isPortrait ? 'vh' : 'vw';
    const [settings] = useContext(SettingsContext);
    const [fontSize, setFontSize] = useState('3.5 wv'); 
    const [titleFontSize, setTitleFontSize] = useState('4 wv');
    const [toggleFontSize, setToggleFontSize] = useState('3 wv');
    const [linkFontSize, setLinkFontSize] = useState('3 wv');
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
            setTitleFontSize((parseFloat(settings.fontSize) + 0.5) + fontSizeUnit);
            setLinkFontSize((parseFloat(settings.fontSize) + 2) + fontSizeUnit);
            setToggleFontSize((parseFloat(settings.fontSize) - 1) + fontSizeUnit);
            webviewRef.current.injectJavaScript(`paginateTables();`);
            webviewRef.current.injectJavaScript(`clearOverlays()`);
            webviewRef.current.injectJavaScript(`adjustOverlay();`);
            webviewRef.current.reload();
        }
        if (settings.languages) {
            
            setVisibleLangues(settings.languages);
        }
    }, [settings.fontSize, settings.languages]);

    const cssStyles = `
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
}

${fontTypeface}

html {
 background-color: black;
 margin: 0;
 padding: 0;
 width: 99%;
 touch-action: none;
 overflow-x: hidden;
 pointer-events: auto;
 }



body {
 overflow: hidden;
 touch-action: none;
 color: white;
 font-size: ${fontSize};
 width: 100% !important;
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
width: ${calculatedWidth}px !important;
border-collapse: collapse;
font-size: ${fontSize};
border-width: 0px;
touch-action: none;

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
    width: ${calculatedWidth}px !important;
    overflow-wrap: break-word; /* Prevent text overflow */
    overflow-x: hidden;
    padding: 0 0 10px 0; /* Add padding to the bottom of each row */
    border-width: 0px;
    touch-action: none;


}

td {
    display: flex;
    flex-direction: column;
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
    flex: 0 1 30%; /* 30% width */
    padding-right: ${columnPadding}px;
}

/* Second column of a 3-column row */
td.column-2-3 {
    flex: 0 1 40%; /* 30% width */
    padding-right: ${columnPadding}px;

}

/* Third column of a 3-column row */
td.column-3-3 {
    flex: 0 1 30%; /* 30% width */
    padding-right: 3px;
}

/* First column of a 2-column row */
td.column-1-2 {
    flex: 0 1 60%; /* 30% width */
    padding-right: ${columnPadding}px;
}

/* Second column of a 2-column row */
td.column-2-2 {
    flex: 0 1 40%; /* 30% width */
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
    text-align: right;
    direction: rtl !important; 
    unicode-bidi: embed; /* Ensure proper rendering of Arabic text */
    vertical-align: top ;
    text-align: justify;
    text-justify: newspaper;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    line-height: 1.4;

}

.arabic1 {
    
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    line-height: 1.4;

}

.arRef {
    text-align: center !important;
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
    line-height: 1.5;
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
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
}

.engRef {  
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: center !important;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
}

.enPhonics {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
    color: #FDFD96 !important;
}
.enPhonicsSongs {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
}
.enPhonics1 {
    
    vertical-align: top ;
    font-family: 'Georgia' !important;
    text-align: left;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
    color: #FDFD96 !important;
}

.arPhonics {
        text-align: right;
        direction: rtl !important;        
        vertical-align: top ;
        text-align: justify;
        display: ${settings.languages && !visibleLangues[4].checked ? 'none' : 'flex'};
        color: #FDFD96 !important;
    
}



.bold {
    font-weight: bold !important;
    font-family: 'EB Garamond' !important;
    color: red !important;
}


.caption {
    font-size: ${titleFontSize};
    font-family: 'EB Garamond' !important;
    color: white !important;
    display: flex;
    justify-content: space-between; /* Center the text after padding */
    align-items: center;
    text-align: center;
    padding-left: 40px; /* Ensure enough space for the icon on the left */
    padding-bottom: 10px;
    font-weight: bold;
    position: relative; /* Necessary for absolute positioning of the icon */
    cursor: pointer;
    pointer-events: auto;
}

.caption.table-invisible {
    color: grey !important;
}

.caption::before {
    content: "\\f056"; /* Font Awesome Unicode for plus icon */
    font-family: "Font Awesome 5 Free"; /* Font Awesome font family */
    font-size: ${toggleFontSize};
    position: absolute; /* Ensure icon is positioned absolutely */
    left: 0; /* Align icon to the leftmost side of the screen */
    top: 50%; /* Vertically center the icon */
    transform: translateY(-50%); /* Adjust to vertically center the icon */
}

.caption.table-invisible::before {
    content: "\\f055"; /* Font Awesome Unicode for minus icon */
    font-family: "Font Awesome 5 Free"; /* Font Awesome font family */
    font-weight: 900;
    font-size: ${toggleFontSize};
    position: absolute; /* Ensure icon is positioned absolutely */
    left: 0; /* Align icon to the leftmost side of the screen */
    top: 50%; /* Vertically center the icon */
    transform: translateY(-50%); /* Adjust to vertically center the icon */
}

.coptic-caption {
    font-family: 'FreeSerif Avva Shenouda';
    direction: ltr !important;
    text-align: left !important;
}
.coptic-caption:lang(en) {
    font-family: 'Georgia' !important;
  }
.arabic-caption {
    direction: rtl !important;
    line-height: 1.4;
}
.arabic-text {
    direction: rtl !important;
    line-height: 1;
}


.title {
    text-align: center !important;
    color: #FDFD96 !important;
    display: flex !important;
    align-items: center !important; // vertical align
    font-size: ${fontSize} !important;

}

.navigationButton {
    display: flex;
    width: 95% !important;
    align-items: center;
    font-size: ${fontSize};
    color: white !important;
    background-color: #614051 !important;
    font-weight: bold !important;
    padding: 3px !important;
    margin: 10px !important;
    border-radius: 10px !important;
    border: 1px solid white;
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
    display: block;
    justify-content: space-between;
    align-items: center;
    font-size: ${linkFontSize};
    color: darkRed !important;
    background-color: 'black' !important;
    font-weight: bold;
    padding: 3px;
    margin: 10px;
    border-radius: 10px;
    text-decoration: underline;
    cursor: pointer;
    pointer-events: auto; 
}

.arabicLink {
    flex: 2; /* 40% width */
    text-align: center;
    direction: rtl;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'flex'};

}

.englishLink {
    flex: 3; /* 60% width */
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: center;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
}




.north {
    color: white;
}

.south {
    color: #a1caf1;
}
.text {
    color: white;
}
.intro {
    color: #FDFD96 !important;
}

.reference{
    color: #CBC3E3 !important;
    justify-content: center !important;
    align-items: center !important;
}
.refrain {
    color: #FDFD96 !important;
}
.commentary {
    color: #C3B1E1 !important;
    display: ${settings.languages && !visibleLangues[5].checked ? 'none' : 'flex'};


}
.priest {
    color: #a1caf1 !important;
}

.role {
    color: #f01e2c !important;
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

`;

    return cssStyles;
};

