/* global require */
import { Dimensions } from "react-native";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

const windowWidth = Dimensions.get("window").width;
const iconWidth = windowWidth < 400 ? windowWidth * 0.08 : windowWidth * 0.05;
const skipSize = iconWidth * 1.5;

const iconModules = {
  cross: require("../assets/png/cross.png"),
  arrowUp: require("../assets/png/arrowUp.png"),
  skip: require("../assets/png/skip.png"),
  candle: require("../assets/png/candle.png"),
  book: require("../assets/png/book.png"),
  musicalNote: require("../assets/png/musical_note.png"),
  playPause: require("../assets/png/play_pause.png"),
};

const iconVariablesFallback = {
  cross: "",
  arrowUp: "",
  skip: "",
  candle: "",
  book: "",
  musicalNote: "",
  playPause: "",
};

let cachedIcons = null;
let cachedPromise = null;

async function toDataUri(assetModule, format = "png") {
  const asset = Asset.fromModule(assetModule);
  if (!asset.localUri) {
    try {
      await asset.downloadAsync();
    } catch {
      // ignore download errors
    }
  }
  const uri = asset.localUri || asset.uri;
  if (!uri) return "";
  try {
    const base64 = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return `data:image/${format};base64,${base64}`;
  } catch {
    return uri; // fallback to uri if base64 fails
  }
}

function buildIconStrings(uris) {
  return {
    cross: `<img src="${uris.cross}" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">`,
    arrowUp: `<img src="${uris.arrowUp}" alt="arrow up" style="width: 2vw; height: auto; padding-bottom:1vw; filter: sepia(100%) saturate(500%) ">`,
    skip: `<img src="${uris.skip}" alt="arrow up" style="width: ${skipSize}px ; height: auto; padding-top:1vw; filter: sepia(100%) saturate(300%) ">`,
    candle: `<img src="${uris.candle}" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">`,
    book: `<img 
      src="${uris.book}" 
      alt="+" 
      style="
        width: ${iconWidth}; 
        height: auto; 
        filter: invert(100%) brightness(1000%) contrast(200%);
      "
    >`,
    musicalNote: `<img 
      src="${uris.musicalNote}" 
      alt="+" 
      style="
        width: ${iconWidth}; 
        height: auto; 
        filter: invert(100%) brightness(1000%) contrast(200%);
      "
    >`,
    playPause: `<img 
      src="${uris.playPause}" 
      alt="+" 
      style="
        width: ${iconWidth}; 
        height: auto; 
        filter: invert(100%) brightness(1000%) contrast(200%);
      "
    >`,
  };
}

export async function loadIconVariables() {
  if (cachedIcons) return cachedIcons;
  if (cachedPromise) return cachedPromise;

  cachedPromise = (async () => {
    const entries = await Promise.all(
      Object.entries(iconModules).map(async ([key, mod]) => {
        const uri = await toDataUri(mod, "png");
        return [key, uri];
      })
    );
    const uriMap = Object.fromEntries(entries);
    cachedIcons = buildIconStrings({ ...iconVariablesFallback, ...uriMap });
    return cachedIcons;
  })();

  return cachedPromise;
}

export { iconVariablesFallback };
