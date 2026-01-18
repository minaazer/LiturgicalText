/** @format */

import React, { useRef, useState, useContext, useEffect } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScripts";
import { getHtml, handleDrawerItemPress } from "../../functions/renderFunctions";
import { renderHtml } from "../../../data/renderHtml.js";
import { loadIconVariables, iconVariablesFallback } from "../../../data/iconVariables";
import SettingsContext from "../../../settings/settingsContext";
import offertoryData from "../../../data/jsons/liturgy/offertory.json";
import resolveJsonData from "../../functions/resolveJsonData";
import { getJson } from "../../functions/jsonCache";

const OffertoryScreen = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [offertoryJson, setOffertoryJson] = useState(offertoryData);
  const [settings] = useContext(SettingsContext);
  const [icons, setIcons] = useState(iconVariablesFallback);
  const webviewRef = useRef(null);
  const aktonkAki = settings.selectedDateProperties.aktonkAki;

  useEffect(() => {
    let isMounted = true;
    getJson("offertory.json", offertoryData).then((data) => {
      if (isMounted && data) {
        setOffertoryJson(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    loadIconVariables().then((vars) => mounted && vars && setIcons(vars));
    return () => {
      mounted = false;
    };
  }, []);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const pageTitle = "Offertory";
  const jsonData = resolveJsonData(settings, offertoryJson);  
  const variables = { ...icons, aktonkAki };

  const body = renderHtml(jsonData, pageTitle, "", "", variables);

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

export default OffertoryScreen;
