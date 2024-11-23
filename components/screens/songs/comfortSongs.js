/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import React, { useRef, useState } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { comfortSongs } from "../../../data/songs/comfortSongs";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScriptsGlorification";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../functions/renderFunctions";

// Main Function
const ComfortSongs = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = comfortSongs();
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

export default ComfortSongs;
