/** @format */

import React, { useRef, useState, useContext, useEffect } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../functions/renderFunctions";
import { renderHour } from "../../../data/renderHWHour";
import holyWeekData from "../../../data/jsons/holyWeek.json";
import { loadIconVariables, iconVariablesFallback } from "../../../data/iconVariables";
import SettingsContext from "../../../settings/settingsContext";
import { getJson } from "../../functions/jsonCache";

const HolyWeekHourScreen = ({ route }) => {
  const { serviceName, hourName } = route.params; // Assume these are passed via navigation
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [holyWeekJson, setHolyWeekJson] = useState(holyWeekData);
  const [settings] = useContext(SettingsContext);
  const [icons, setIcons] = useState(iconVariablesFallback);
  const paschalReadingsFull = settings.paschalReadingsFull;
  const onePageSettings = settings.onePage;
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);

  useEffect(() => {
    let isMounted = true;
    getJson("holyWeek.json", holyWeekData).then((data) => {
      if (isMounted && data) {
        setHolyWeekJson(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    loadIconVariables().then((vars) => mounted && vars && setIcons(vars));
    return () => { mounted = false; };
  }, []);

  // Assuming `jsonData` is the parsed JSON object.
  const serviceData = holyWeekJson.find(
    (service) => service.service[0] === serviceName
  );
  const hourData = serviceData?.hours?.find((hour) => hour.hour[0] === hourName);

  if (!serviceData || !hourData) {
    return (
      <RightMenuDrawer
        currentTable={currentTable}
        drawerItems={drawerItems}
        handleDrawerItemPress={handleDrawerItemPress}
        webviewRef={webviewRef}
        setDrawerItems={setDrawerItems}
        setCurrentTable={setCurrentTable}
        html="<div>Loading...</div>"
      />
    );
  }

  const serviceNameArabic = serviceData.service[1];
  const hourNameArabic = hourData.hour[1];

  const variables = {
    eService: serviceName,
    aService: serviceNameArabic,
    eHour: hourName,
    aHour: hourNameArabic,
    ...icons,
  };

  const body = renderHour(
    serviceName,
    hourName,
    hourData.sections,
    onePageSettings,
    paschalReadingsFull,
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

export default HolyWeekHourScreen;
