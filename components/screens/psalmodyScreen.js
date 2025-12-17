/** @format */

import React, { useRef, useState, useContext } from "react";
import RightMenuDrawer from "../navigation/BookDrawer";
import { useDynamicStyles } from "../css/cssStyles";
import { htmlRenderScript } from "../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../functions/renderFunctions";
import { renderHtml } from "../../data/renderHtml.js";
import { iconVariables } from "../../data/repeatedPrayers/iconVariables";
import SettingsContext from "../../settings/settingsContext";
import psalmody from "../../data/psalmodyNew.ts";


const PsalmodyScreen = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [settings] = useContext(SettingsContext);
  const webviewRef = useRef(null);
  const aktonkAki = settings.selectedDateProperties.aktonkAki;

  const dynamicStyles = useDynamicStyles(webviewRef);
  const pageTitle = "Psalmody";
  const jsonData = psalmody(settings);
  const variables = { ...iconVariables, aktonkAki };
  

  const body = renderHtml(
    jsonData,
    pageTitle,
    "",
    "",
    variables
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

export default PsalmodyScreen;
