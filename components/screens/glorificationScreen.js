/** @format */

import React, { useRef, useState, useContext, useMemo, useEffect } from "react";
import RightMenuDrawer from "../navigation/BookDrawer";
import { useDynamicStyles } from "../css/cssStyles";
import { htmlRenderScript } from "../functions/jsScripts";
import { getHtml, handleDrawerItemPress } from "../functions/renderFunctions";
import { renderHtml } from "../../data/renderHtml.js";
import glorificationData from "../../data/jsons/glorification.json";
import { iconVariables } from "../../data/iconVariables";
import SettingsContext from "../../settings/settingsContext";
import { getJson } from "../functions/jsonCache";

const GlorificationScreen = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [glorificationJson, setGlorificationJson] = useState(glorificationData);
  const [settings] = useContext(SettingsContext);
  const webviewRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    getJson("glorification.json", glorificationData).then((data) => {
      if (isMounted && data) {
        setGlorificationJson(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const pageTitle = "Glorification";
  const jsonData = glorificationJson;
  const variables = {
    iconVariables,
  };

  // Check if the glorification section should be rendered in one page
  const onePageSettings = settings.onePage.find(
    (item) => item.value === "Glorification"
  )?.checked;
  const tableClass = "";
  const tbodyClass = onePageSettings ? "scaling-container" : "";
  const body = useMemo(
    () => renderHtml(jsonData, pageTitle, tableClass, tbodyClass, variables),
    [jsonData, pageTitle, tableClass, tbodyClass, variables]
  );

  // Generate HTML dynamically (memoized so drawer open/close doesn't remount WebView)
  const script = htmlRenderScript;
  const html = useMemo(
    () => getHtml(dynamicStyles, body, script),
    [dynamicStyles, body, script]
  );

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
