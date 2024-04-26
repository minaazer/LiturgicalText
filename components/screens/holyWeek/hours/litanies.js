/** @format */

import React, { useRef, useState } from "react";
import RightMenuDrawer from "../../../navigation/BookDrawer";
import { DaytimeLitanies } from "../../../../data/holyWeek/daytimeLitanies";
import { NighttimeLitanies } from "../../../../data/holyWeek/nighttimeLitanies";
import { useDynamicStyles } from "../../../css/cssStyles";
import { htmlRenderScript } from "../../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../../functions/renderFunctions";

// Main Function

const DaytimeLitaniessc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = DaytimeLitanies();
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


const NighttimeLitaniessc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = NighttimeLitanies();
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



export { DaytimeLitaniessc, NighttimeLitaniessc};
