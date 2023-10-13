
import { Platform } from 'react-native';

const fontUrl = Platform.select({
    ios: "ArialCoptic.ttf",
    android: "file:///android_asset/fonts/ArialCoptic.ttf",
});

const fontUrl2 = Platform.select({
    ios: "./ArialCoptic.woff",
    android: "file:///android_asset/fonts/ArialCoptic.woff",
});


export const cssStyles = `
html {
    background-color: black;
}

@font-face {
    font-family: "Arial Coptic";
    src: 
        url("${fontUrl}") format("woff2"),
        url("${fontUrl2}") format("woff"),
        url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/ArialCoptic.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: "EB Garamond";
    src: 
    url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/EBGaramond.woff2") format('woff2'),
    url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/EBGaramond.woff") format('woff'),
    url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/EBGaramond.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
}

table {
page-break-before: always; /* Use for older browsers */
break-before: page; /* Modern browsers */
margin-top: 15px;
margin-bottom: 15px;
}

/* Handle first table to avoid first-page break */
table:first-of-type {
page-break-before: auto;
break-before: auto;
}
span {
    font-size: 30px;
    font-family: 'EB Garamond' !important;
    color: yellow;
}

body {
    // overflow: hidden;
    color: white;
    font-size: 26px;

}


.arabic {
    text-align: right;
    direction: rtl;
    font-size: 30px;
    vertical-align: top ;
    padding-bottom: 10px;
    width:26%;
}

.coptic {
    font-size: 30px;
    vertical-align: top ;
    font-family: 'Arial Coptic' !important;
}
.english {
    font-size: 30px;
    vertical-align: top ;
    font-family: 'EB Garamond' !important;
    padding-right: 10px;
    
}
`;