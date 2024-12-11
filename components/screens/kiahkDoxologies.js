/* eslint-disable react/prop-types */
import React, { useRef,  useState } from 'react';
import RightMenuDrawer from '../navigation/BookDrawer';
import { kiahkDoxologiesHtml } from '../../data/kiahkDoxologies';
import { useDynamicStyles } from '../css/cssStyles';
import { htmlRenderScript } from '../functions/jsScripts';
import { getHtml , handleDrawerItemPress } from '../functions/renderFunctions'
import SettingsContext from '../../settings/settingsContext';


// Main Function
const KiahkDoxologies = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState('');
  const webviewRef = useRef(null);
  const [settings] = React.useContext(SettingsContext);


  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = kiahkDoxologiesHtml(settings);
  const script = htmlRenderScript;
  const html = getHtml(dynamicStyles, body , script);


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

export default KiahkDoxologies;
