import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const isPortrait = windowHeight > windowWidth;
const iconWidth = isPortrait ? windowWidth * 0.1 : windowWidth * 0.05;
const skipSize = windowWidth * 0.1;


const cross =
  '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/cross.png" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">';
const arrowUp =
  '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/arrowUp.png" alt="arrow up" style="width: 2vw; height: auto; padding-bottom:1vw; filter: sepia(100%) saturate(500%) ">';
const skip =
  `<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/skip.png" alt="arrow up" style="width: ${skipSize}px ; height: auto; padding-top:1vw; filter: sepia(100%) saturate(300%) ">`;
const candle =
  `🕯️`;

const book = 
`<img 
  src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/book.png" 
  alt="+" 
  style="
    width: ${iconWidth}; 
    height: auto; 
    filter: invert(100%) brightness(1000%) contrast(200%);
  "
>`;

const musicalNote = 
`<img 
  src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/musical_note.png" 
  alt="+" 
  style="
    width: ${iconWidth}; 
    height: auto; 
    filter: invert(100%) brightness(1000%) contrast(200%);
  "
>`;


export const iconVariables = {
    cross,
    arrowUp,
    skip,
    candle,
    book,
    musicalNote
    };