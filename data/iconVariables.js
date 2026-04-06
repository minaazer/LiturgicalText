/* global require */
import { Dimensions } from "react-native";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

const windowWidth = Dimensions.get("window").width;
const iconWidth = windowWidth < 400 ? windowWidth * 0.08 : windowWidth * 0.05;
const skipSize = iconWidth * 1.5;

const iconModules = {
  cross: { module: require("../assets/png/cross.png"), format: "png" },
  arrowUp: { module: require("../assets/png/arrowUp.png"), format: "png" },
  skip: { module: require("../assets/png/skip.png"), format: "png" },
  candle: { module: require("../assets/png/candle.png"), format: "png" },
  book: { module: require("../assets/png/book.png"), format: "png" },
  musicalNote: { module: require("../assets/png/musical_note.png"), format: "png" },
  playPause: { module: require("../assets/png/play_pause.png"), format: "png" },
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
    book: ``,
    musicalNote: ``,
    playPause: ``,
  };
}

export async function loadIconVariables() {
  if (cachedIcons) return cachedIcons;
  if (cachedPromise) return cachedPromise;

  cachedPromise = (async () => {
    const entries = await Promise.all(
      Object.entries(iconModules).map(async ([key, entry]) => {
        const uri = await toDataUri(entry.module, entry.format);
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
