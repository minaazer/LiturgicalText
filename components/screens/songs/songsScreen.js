/** @format */

import React, { useRef, useState, useContext } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../functions/renderFunctions";
import { renderSongs } from "../../../data/songs/renderSongs";
import songsData from "../../../data/songs/songs.json";
import { iconVariables } from "../../../data/repeatedPrayers/iconVariables";
import SettingsContext from "../../../settings/settingsContext";

const SongsScreen = ({ route }) => {
  const { theme } = route.params; // Assume these are passed via navigation
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [settings] = useContext(SettingsContext);
  const onePageSettings = settings.onePage;
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);

  // Assuming `jsonData` is the parsed JSON object.
    const filteredSongs = !theme
    ? songsData
    : songsData.filter(
        (song) => song.themes && song.themes.includes(theme)
        );

        

  const body = renderSongs(
    filteredSongs,
    theme,
    onePageSettings
  );

  // Generate HTML dynamically
  const script = htmlRenderScript;
  const html = getHtml(dynamicStyles, body, script);

  return (
    <RightMenuDrawer
      currentTable={currentTable}
      drawerItems={drawerItems}
      handleDrawerItemPress={handleDrawerItemPress}
      webviewRef={webviewRef}
      setDrawerItems={setDrawerItems}
      setCurrentTable={setCurrentTable}
      html={html}
    />
  );
};

export default SongsScreen;
