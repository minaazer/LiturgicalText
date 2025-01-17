/* eslint-disable react/prop-types */
import React, { useRef,  useState, useContext } from 'react';
import RightMenuDrawer from '../navigation/BookDrawer';
import { doxologiesHtml } from '../../data/doxologies';
import { useDynamicStyles } from '../css/cssStyles';
import { htmlRenderScript } from '../functions/jsScripts';
import { getHtml , handleDrawerItemPress } from '../functions/renderFunctions'
import SettingsContext from '../../settings/settingsContext';


// Main Function
const Doxologies = ({ route }) => {
  const { source } = route.params || {};

  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState('');
  const webviewRef = useRef(null);
  const [settings] = React.useContext(SettingsContext);
  
  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = doxologiesHtml(settings, source);
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

export default Doxologies;
