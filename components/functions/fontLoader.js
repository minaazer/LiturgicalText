/* global require */
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'CS New Athanasius': require('../../assets/fonts/cs-new-athanasius.ttf'),
    'Athanasius': require('../../assets/fonts/athanasius.ttf'),
    'New Athanasius': require('../../assets/fonts/newath.ttf'),
    'Times New Roman': require('../../assets/fonts/times.ttf'),
    'Garamond': require('../../assets/fonts/Garamond.ttf'),
    'Garamond Bold': require('../../assets/fonts/GARABD.ttf'),
    'ArialCoptic': require('../../assets/fonts/ArialCoptic.ttf'),
    'EB Garamond': require('../../assets/fonts/EBGaramond.ttf'),
    'Gerogia': require('../../assets/fonts/gerogia.ttf'),
    'Georgia Bold': require('../../assets/fonts/gerogiab.ttf'),
    'Georgia Italic': require('../../assets/fonts/gerogiai.ttf'),
  });
}

export default loadFonts;