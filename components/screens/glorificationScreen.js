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
import glorificationData from "../../data/jsons/glorification.json";
import { iconVariables } from "../../data/repeatedPrayers/iconVariables";
import SettingsContext from "../../settings/settingsContext";

const GlorificationScreen = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [settings] = useContext(SettingsContext);
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const pageTitle = "Glorification";
  const jsonData = glorificationData;
  const variables = {
        iconVariables
    };
  
    // Check if the glorification section should be rendered in one page
    const onePageSettings = settings.onePage.find(
        (item) => item.value === "Glorification"
    )?.checked;
    const tableClass =  "";
    const tbodyClass = onePageSettings ? 'scaling-container' : "";

  const body = renderHtml(
    jsonData,
    pageTitle,
    tableClass,
    tbodyClass,
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

export default GlorificationScreen;
