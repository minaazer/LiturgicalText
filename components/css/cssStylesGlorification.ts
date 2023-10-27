import { useContext, useState, useEffect } from 'react';
import SettingsContext from '../../settings/settignsContext';
import { fontTypeface } from './fontTypeface';

export const useDynamicStyles = (webviewRef) => {
    const [settings] = useContext(SettingsContext);
    const [fontSize, setFontSize] = useState(26);
    const [visibleLangues, setVisibleLangues] = useState([
        { label: 'English', value: 'English', checked: true },
        { label: 'Arabic', value: 'Arabic', checked: true },
        { label: 'Coptic', value: 'Coptic', checked: true },
    ]);

    useEffect(() => {
        if (settings.fontSize) {
            setFontSize(settings.fontSize);
            //webviewRef.current.injectJavaScript(`window.scrollTo(0, 0);`);
            webviewRef.current.injectJavaScript(`paginateTables();`);
            webviewRef.current.injectJavaScript(`clearOverlays()`);
            webviewRef.current.injectJavaScript(`adjustOverlay()`);

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
 --copticFont: 'Arial Coptic';
}


html {
 background-color: black;
}
${fontTypeface}


table {
page-break-before: always; /* Use for older browsers */
break-before: page; /* Modern browsers */
margin-top: 5px;
margin-bottom: 15px;
display: flex;
height: 100vh;
width: 100% !important;
table-layout: fixed;
border-collapse: collapse;

}

tbody {
    font-size: ${fontSize}vw;
}

tr {
 display: flex;
 flex-direction: row;
 width: '100vw' !important;
}

td {
    display: flex;
    flex-direction: column;
    
}

/* Handle first table to avoid first-page break */
table:first-of-type {
page-break-before: auto;
break-before: auto;
}


.caption {
    font-size: ${fontSize}vw;
    font-family: 'Georgia' !important;
    color:  yellow;
    width: '100%' !important;
    display: block;
    text-align: center;

}

.caption-coptic {
    font-family: var(--copticFont) !important;
}

body {
    overflow-horizontal: hidden;
 color: white;
 font-size: ${fontSize}vw;
 width: '100%' !important;
}

.north {
    color: white;
}

.south {
    color: white;
}

.arabic {
    text-align: right;
    direction: rtl !important;
    vertical-align: top ;
    padding-bottom: 10px;
    text-align: justify;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'flex'};
    flex: 3;

}

.coptic {
    vertical-align: top ;
    font-family: var(--copticFont) !important;
    border-right: 1px solid rgba(211, 211, 211, 0.3)
    ; 
    padding-right: 10px;
    padding-left: 15px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[2].checked ? 'none' : 'flex'};
    flex: 5;

}
.english {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    border-right: 1px solid rgba(252, 248, 215, 0.3); 
    text-align: justify;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
    flex: 4;
}

.enPhonics {
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    border-right: 1px solid rgba(252, 248, 215, 0.3); 
    text-align: justify;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
    flex: 1;
    color: #FDFD96 !important;
}

.arPhonics {
        text-align: right;
        direction: rtl !important;
        vertical-align: top ;
        padding-bottom: 10px;
        text-align: justify;
        padding-left: 10px;
        display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'flex'};
        flex: 1;
        color: #FDFD96 !important;
    
}
    
.refrain {
    color: lightblue;
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

