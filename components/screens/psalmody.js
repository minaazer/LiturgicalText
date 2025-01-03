/* eslint-disable react/prop-types */
import React, { useRef,  useState , useContext } from 'react';
import RightMenuDrawer from '../navigation/BookDrawer';
import { psalmody } from '../../data/psalmody';
import { useDynamicStyles } from '../css/cssStyles';
import { htmlRenderScript } from '../functions/jsScripts';
import { getHtml , handleDrawerItemPress } from '../functions/renderFunctions'
import SettingsContext from '../../settings/settingsContext';


// Main Function
const Psalmody = () => {
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState('');
  const [ settings ] = useContext(SettingsContext);
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);
  const body = psalmody(settings);
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

export default Psalmody;
