/** @format */

import React, { useRef, useState } from "react";
import RightMenuDrawer from "../../../navigation/BookDrawer";
import { EOTH1 } from "../../../../data/holyWeek/EOTH1";
import { EOTH3 } from "../../../../data/holyWeek/EOTH3";
import { EOTH6 } from "../../../../data/holyWeek/EOTH6";
import { EOTH9 } from "../../../../data/holyWeek/EOTH9";
import { EOTH11 } from "../../../../data/holyWeek/EOTH11";
import { useDynamicStyles } from "../../../css/cssStyles";
import { htmlRenderScript } from "../../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../../functions/renderFunctions";

// Main Function

const EOTH1sc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = EOTH1();
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

const EOTH3sc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = EOTH3();
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


const EOTH6sc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = EOTH6();
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




const EOTH9sc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = EOTH9();
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

const EOTH11sc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = EOTH11();
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



export { EOTH1sc , EOTH3sc , EOTH6sc ,  EOTH9sc , EOTH11sc };
