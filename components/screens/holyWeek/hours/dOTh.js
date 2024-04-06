/** @format */

import React, { useRef, useState } from "react";
import RightMenuDrawer from "../../../navigation/BookDrawer";
import { DOTH1 } from "../../../../data/holyWeek/DOTH1";
import { useDynamicStyles } from "../../../css/cssStyles";
import { htmlRenderScript } from "../../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../../functions/renderFunctions";

// Main Function


const DOTH1sc = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = DOTH1();
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

export { DOTH1sc  };
