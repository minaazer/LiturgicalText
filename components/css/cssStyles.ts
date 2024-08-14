import { useContext, useState, useEffect } from 'react';
import SettingsContext from '../../settings/settingsContext';
import { fontTypeface } from './fontTypeface';

export const useDynamicStyles = (webviewRef) => {
    const [settings] = useContext(SettingsContext);
    const [fontSize, setFontSize] = useState(3.5);
    const [titleFontSize, setTitleFontSize] = useState(4);
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
            setFontSize(settings.fontSize);
            setTitleFontSize(parseFloat(settings.fontSize) + 0.5);
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


html {
 background-color: black;
 margin-top: 0px;
 padding-top: 0px;
 padding-top: 0px;
 margin-right: 20px;
}
${fontTypeface}


table {
page-break-before: always; /* Use for older browsers */
break-before: page; /* Modern browsers */
margin-top: 0px;
margin-bottom: 0px;
padding-top: 0px;
display: table;
width: 100% !important;
table-layout: fixed;
border-collapse: separate;

font-size: ${fontSize}vw;
}

tbody {
    font-size: ${fontSize}vw;
}

tr {
 display: flex;
 flex-direction: row;
 width: '100vw' !important;
 padding-bottom: 10px;
}

td {
    display: flex;
    flex-direction: column;
}

/* Apply padding to the 1st of 1 column */
table tr td:first-child:last-child {
    padding-right: 5px;
    padding-left: 5px;
}

/* Apply padding to the 1st of more than 1 column */
table tr td:first-child:not(:last-child) {
    padding-right: 0;
    padding-left: 5px;
  }

/* Apply padding to the 2nd of 3 columns */
table tr td:nth-child(2):nth-last-child(2) {
    padding-left: 35px;
    padding-right: 35px;
}

/* Apply padding to the 3rd of 3 columns */
table tr td:nth-child(3):nth-last-child(1) {
    padding-left: 0;
    padding-right: 5px;
}

/* Apply padding to the 2nd of 2 columns */
table tr td:nth-child(2):last-child {
    padding-left: 35px;
    padding-right: 5px;
}


/* Handle first table to avoid first-page break */
table:first-of-type {
page-break-before: auto;
break-before: auto;
}

.bold {
    font-weight: bold !important;
    font-family: 'EB Garamond' !important;
    color: red !important;
}


.caption {
    font-size: ${titleFontSize}vw;
    font-family: 'EB Garamond' !important;
    color: white !important;
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding-bottom: 10px;
    font-weight: bold;

}

.coptic-caption {
    font-family: 'FreeSerif Avva Shenouda';
}
.coptic-caption:lang(en) {
    font-family: 'Georgia' !important;
  }
.arabic-caption {
    direction: rtl !important;
    line-height: 1.4;
}


.title {
    text-align: center !important;
    color: #FDFD96 !important;
    display: flex !important;
    align-items: center !important; // vertical align
    font-size: ${fontSize}vw !important;

}

.navigationButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${fontSize}vw;
    color: white !important;
    background-color: #614051 !important;
    font-weight: bold;
    padding: 3px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid white;
}

.arabicButton {
    flex: 2; /* 40% width */
    text-align: center;
    direction: rtl;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'flex'};
}

.englishButton {
    flex: 3; /* 60% width */
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: center;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
}


h1 {
    font-size: ${fontSize}vw !important;
    text-align: center !important;
}

body {
 overflow-horizontal: hidden;
 touch-action: none;
 color: white;
 font-size: ${fontSize}vw;
 width: 100% !important;
 margin-top: 0px;
 padding-top: 0px;
 margin-bottom: 500px;
}

div {
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;   
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

.arabic {
    text-align: right;
    direction: rtl !important; 
    unicode-bidi: embed; /* Ensure proper rendering of Arabic text */
    vertical-align: top ;
    padding-bottom: 10px;
    text-align: justify;
    text-justify: newspaper;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    flex: 3;
    line-height: 1.4;

}

.arabic1 {
    
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-left: 20px;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    flex: 3.5;
    line-height: 1.4;

}

.arRef {
    text-align: center !important;
    direction: rtl !important;    
    vertical-align: top ;
    padding-bottom: 10px;

    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    flex: 3;
}

.coptic {    
    vertical-align: top ;
    font-family: 'FreeSerif Avva Shenouda' !important;
    padding-right: 10px;
    padding-left: 15px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[2].checked ? 'none' : 'inline'};
    flex: 5;
    line-height: 1.5;
}

.copticReadings {
    
    vertical-align: top ;
    font-family: 'FreeSerif Avva Shenouda' !important;
    padding-right: 10px;
    padding-left: 15px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[2].checked ? 'none' : 'inline'};
    flex: 5;
}

.english {  
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
    flex: 3.5;
}

.engRef {  
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: center !important;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
    flex: 4;
}

.enPhonics {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
    flex: 4;
    color: #FDFD96 !important;
}
.enPhonicsSongs {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
    flex: 4;
}
.enPhonics1 {
    
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
    display: ${settings.languages && !visibleLangues[3].checked ? 'none' : 'flex'};
    flex: 4.5;
    color: #FDFD96 !important;
}

.arPhonics {
        text-align: right;
        direction: rtl !important;        
        vertical-align: top ;
        padding-bottom: 10px;
        text-align: justify;
        padding-left: 10px;
        display: ${settings.languages && !visibleLangues[4].checked ? 'none' : 'flex'};
        flex: 4;
        color: #FDFD96 !important;
    
}


.lineBreak {
 text-align: center;
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
}`;

    return cssStyles;
};

