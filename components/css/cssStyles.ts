import { useContext, useState, useEffect } from 'react';
import SettingsContext from '../../settings/settignsContext';
import { fontTypeface } from './fontTypeface';

export const useDynamicStyles = (webviewRef) => {
    const [settings] = useContext(SettingsContext);
    const [fontSize, setFontSize] = useState(3.5);
    const [titleFontSize, setTitleFontSize] = useState(4);
    const [visibleLangues, setVisibleLangues] = useState([
        { label: 'English', value: 'English' , checked: true },
        { label: 'Arabic', value: 'Arabic' , checked: true },
        { label: 'Coptic', value: 'Coptic' , checked: true },
      ]);

    useEffect(() => {
        if (settings.fontSize) {
            setFontSize(settings.fontSize);
            setTitleFontSize(parseFloat(settings.fontSize) + 1);
            console.log('titleFontSize', titleFontSize);
            console.log('settings.fontSize', settings.fontSize);
            //webviewRef.current.injectJavaScript(`window.scrollTo(0, 0);`);
            webviewRef.current.injectJavaScript(`paginateTables();`);
            webviewRef.current.injectJavaScript(`clearOverlays()`);
            webviewRef.current.injectJavaScript(`adjustOverlay()`);
        
        }

        if (settings.languages) {
            
            setVisibleLangues(settings.languages);
        }
    }, [settings.fontSize , settings.languages]);

    const cssStyles = `
* {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old version of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
}

:root {
 --fontSize: 26px;

}


html {
 background-color: black;
 marginTop: 0px;
 paddingTop: 0px;
}

${fontTypeface}


table {
page-break-before: always; /* Use for older browsers */
break-before: page; /* Modern browsers */
margin-top: 0px;
margin-bottom: 0px;
paddingTop: 0px;
display: flex;
width: 100% !important;
table-layout: fixed;
border-collapse: collapse;

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

/* Handle first table to avoid first-page break */
table:first-of-type {
page-break-before: auto;
break-before: auto;
}


.caption {
    font-size: ${titleFontSize}vw;
    font-family: 'EB Garamond' !important;
    color: #99d24e !important;
    display: block;
    text-align: center;

}
.coptic-caption {
    font-family: 'Arial Coptic' !important;
    direction: rtl !important;

}
.title {
    text-align: center !important;
    color: #FDFD96 !important;
    display: block !important;
}

body {
 overflow-horizontal: hidden;
 color: white;
 touch-action: none;
 font-size: ${fontSize}vw;
 marginTop: 0px;
 paddingTop: 0px;
 margin-bottom: 500px;
}

.north {
    color: white;
}

.south {
    color: rgba(173, 216, 230);
}

.arabic {
    text-align: right;
    direction: rtl !important;
    font-size: ${fontSize}vw;
    vertical-align: top ;
    padding-bottom: 10px;
    text-align: justify;
    text-justify: newspaper;
    padding-left: 10px;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    flex: 3;

}


.arabic1 {
    font-size: ${fontSize}vw;
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-left: 20px;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'inline'};
    flex: 3.5;
}

.coptic {
    font-size: ${fontSize}vw;
    vertical-align: top ;
    font-family: 'Arial Coptic' !important;
    padding-right: 10px;
    padding-left: 15px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[2].checked ? 'none' : 'inline'};
    flex: 5;

}
.english {
    font-size: ${fontSize}vw;
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'inline'};
    flex: 4;
}



.enPhonics {
    font-size: ${fontSize}vw;
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-right: 10px;
    text-align: justify;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
    flex: 4;
    color: #FDFD96 !important;
}
.enPhonics1 {
    font-size: ${fontSize}vw;
    vertical-align: top ;
    font-family: 'Georgia' !important;
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
    display: ${settings.languages && !visibleLangues[0].checked ? 'none' : 'flex'};
    flex: 4.5;
    color: #FDFD96 !important;
}

.arPhonics {
        text-align: right;
        direction: rtl !important;
        font-size: ${fontSize}vw;
        vertical-align: top ;
        padding-bottom: 10px;
        text-align: justify;
        padding-left: 10px;
        display: ${settings.languages && !visibleLangues[1].checked ? 'none' : 'flex'};
        flex: 1;
        color: #FDFD96 !important;
    
}

.lineBreak {
 text-align: center;
}
.refrain {
    color: #FDFD96 !important;
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

