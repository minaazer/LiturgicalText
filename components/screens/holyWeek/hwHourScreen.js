/** @format */

import React, { useRef, useState, useContext } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../functions/renderFunctions";
import { renderHour } from "../../../data/renderHWHour";
import holyWeekData from "../../../data/jsons/holyWeek.json";
import { iconVariables } from "../../../data/iconVariables";
import SettingsContext from "../../../settings/settingsContext";

const HolyWeekHourScreen = ({ route }) => {
  const { serviceName, hourName } = route.params; // Assume these are passed via navigation
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const [settings] = useContext(SettingsContext);
  const paschalReadingsFull = settings.paschalReadingsFull;
  const onePageSettings = settings.onePage;
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);

  // Assuming `jsonData` is the parsed JSON object.
  const serviceData = holyWeekData.find(
    (service) => service.service[0] === serviceName
  );
  const hourData = serviceData.hours.find((hour) => hour.hour[0] === hourName);

  const serviceNameArabic = serviceData.service[1];
  const hourNameArabic = hourData.hour[1];

  const variables = {
    eService: serviceName,
    aService: serviceNameArabic,
    eHour: hourName,
    aHour: hourNameArabic,
    ...iconVariables,
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
