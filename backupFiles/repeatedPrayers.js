/** @format */
import { useContext, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import SettingsContext from "../../settings/settingsContext";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const isPortrait = windowHeight > windowWidth;
const iconWidth = isPortrait ? windowWidth * 0.1 : windowWidth * 0.05;
const skipSize = windowWidth * 0.2;

const userSettings = (value, settingsKey) => {
  const [settings] = useContext(SettingsContext);
  const [settingsData, setSettingsData] = useState([]);

  useEffect(() => {
    if (settings[settingsKey]) {
      setSettingsData(settings[settingsKey]);
    }
  }, [settings, settingsKey]);

  // Find the item with the provided value in the settingsData array
  const item = settingsData.find((item) => item.value === value);

  // If the item is found, return its checked property; otherwise, return false
  return item ? item.checked : false;
};

function hourIntro(eHour, aHour, eDay, aDay, commentary) {
  let commentaryHtml = "";
  if (commentary) {
    commentaryHtml = `
        <tr id="table_1_row_1" class="commentary">
            ${commentary}
        </tr>
        `;
  }
  let html = `
        <div class="section" id="section_1" title="Introduction">
            <table id="table_1" title="Introduction of the ${eHour} Hour of the ${eDay}">
                <caption class="caption" id="caption_table_1">The ${eHour} Hour of the ${eDay}<br><span class="arabic-caption">Ø§Ù„Ø³Ø§Ø¹Ø© ${aHour} Ù…Ù† ${aDay}</span></caption>
<tbody>
                ${commentaryHtml}
                <tr id="table_1_row_2" class="text">
                    <td class="english"><span class="role">Priest:</span><br>In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                    <td class="coptic"><span class="role">â² â²“â²Ÿâ²©â²â²ƒ:</span><br>Ï¦â²‰â²› â²«Ì€â²£â²â²› â²™Ì€â²ªâ²“â²±â²§ â²›â²‰â²™ â² Ï£â²â²£â²“ â²›â²‰â²™ â² â²“â²¡Ì€â²›â²‰â²©â²™â² â²‰Ì€â²‘â²Ÿâ²©â²â²ƒ â²Ÿâ²©â²›â²Ÿâ²©Ï¯ â²›Ì€â²Ÿâ²©â²±â²§: â²€â²™â²â²›.</td>
                    <td class="arabic"><span class="role">Ø§Ù„ÙƒØ§Ù‡Ù†:</span><br>Ø¨Ø§Ø³Ù… Ø§Ù„Ø£Ø¨ ÙˆØ§Ù„Ø¥Ø¨Ù† ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ù‡ ÙˆØ§Ø­Ø¯ØŒ Ø§Ù…ÙŠÙ†.</td>
                <tr id="table_1_row_3" class="text">
                    <td class="english">The prophecies of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                    <td class="arabic">Ù†Ø¨ÙˆØ§Øª Ø§Ù„Ø³Ø§Ø¹Ø© ${aHour} Ù…Ù† ${aDay} Ù…Ù† Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø¨Ø±ÙƒØ§ØªÙ‡Ø§ ØªÙƒÙˆÙ† Ù…Ø¹Ù†Ø§ØŒ Ø§Ù…ÙŠÙ†.</td>
                </tr>
                
            </tbody>
</table>
        </div>\n`;
  return html;
}

function paschalPraise1(
  sectionNumber,
  tableNumber1,
  tableNumber2,
  eHour,
  aHour,
  eDay,
  aDay
) {
  const isOnePageChecked = userSettings("PaschalPraise", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }

  let html = `
  <div class="section" id="section_${sectionNumber}">
    <table id="table_${tableNumber1}" title="Paschal Praise">
        <caption class="caption" id="caption_table_${tableNumber1}">Paschal Praise</caption>
        <tbody>
            <tr id="table_${tableNumber1}_row_0" class="priest">
                <td class="english">Lord have mercy upon us. Alleluia.</td>
                <td class="coptic">â² Ï­â²Ÿâ²“â²¥ â²›â²â²“ â²›â²â²›: â²€â²—â²—â²â²—â²Ÿâ²©â²“â².</td>
                <td class="arabic">ÙŠØ§ Ø±Ø¨ Ø§Ø±Ø­Ù…Ù†Ø§. Ø§Ù„Ù„ÙŠÙ„ÙˆÙŠØ§.</td>
            </tr>
            <tr id="table_${tableNumber1}_row_1" class="priest">
                <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                <td class="coptic">Ï¦â²‰â²› â²«Ì€â²£â²â²› â²™Ì€â²ªâ²“â²±â²§ â²›â²‰â²™ â² Ï£â²â²£â²“ â²›â²‰â²™ â² â²“â²¡Ì€â²›â²‰â²©â²™â² â²‰Ì€â²‘â²Ÿâ²©â²â²ƒ â²Ÿâ²©â²›â²Ÿâ²©Ï¯ â²›Ì€â²Ÿâ²©â²±â²§ â²Ì€â²™â²â²›.</td>
                <td class="arabic">Ø¨Ø§Ø³Ù… Ø§Ù„Ø£Ø¨ Ùˆ Ø§Ù„Ø§Ø¨Ù† Ùˆ Ø§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ù‡ ÙˆØ§Ø­Ø¯ØŒ Ø£Ù…ÙŠÙ†.</td>
            </tr>
            <tr id="table_${tableNumber1}_row_2" class="priest">
                <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, Both now and
                    ever and unto the ages of ages. Amen.</td>
                <td class="coptic">â²†â²Ÿâ²â² â² â²â²§â²£â²“ â²•â²‰ â²¨â²“â²± â²•â²‰ â²€â²…â²“â²± â² â²›â²‰â²©â²™â²â²§â²“: â²”â²‰ â²›â²©â²› â²•â²‰ â²â²“Ì€ â²•â²‰ â²“â²¥ â²§â²Ÿâ²©â²¥ â²‰Ì€â²±Ì€â²›â²â²¥ â²§â²±â²› â²‰Ì€â²±Ì€â²›â²±â²›:
                    â²Ì€â²™â²â²›.</td>
                <td class="arabic">Ø§Ù„Ù…Ø¬Ø¯ Ù„Ù„Ø£Ø¨ ÙˆØ§Ù„Ø¥Ø¨Ù† ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ø£Ù† ÙˆÙƒÙ„ Ø£ÙˆØ§Ù† ÙˆØ§Ù„Ù‰ Ø¯Ù‡Ø± Ø§Ù„Ø¯Ù‡ÙˆØ± ÙƒÙ„Ù‡Ø§ØŒ Ø£Ù…ÙŠÙ†.</td>
            </tr>
            <tr id="table_${tableNumber1}_row_3" class="priest">
                <td class="english">The doxology of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings
                    be with us. Amen.</td>
                <td class="arabic">ØªØ³Ø¨Ø­Ø© Ø§Ù„Ø³Ø§Ø¹Ø© ${aHour} Ù…Ù† ${aDay} Ù…Ù† Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø¨Ø±ÙƒØ§ØªÙ‡Ø§ ØªÙƒÙˆÙ† Ù…Ø¹Ù†Ø§ØŒ Ø£Ù…ÙŠÙ†.
                </td>
            </tr>
            <tr id="table_${tableNumber1}_row_4" class="priest">
                <td class="english">O Lord make us worthy to pray thankfully saying: Our Fatherâ€¦</td>
                <td class="coptic">â²€â²£â²“â²§â²‰â²› â²›Ì€â²‰â²™â²¡Ì€Ï£â² â²›Ì€Ï«â²Ÿâ²¥ Ï§â²‰â²› â²Ÿâ²©Ï£â²‰â²¡Ï©Ì€â²™â²Ÿâ²§: Ïªâ²‰ â² â²‰â²›â²“â²±â²§ ...</td>
                <td class="arabic">Ø§Ù„Ù„Ù‡ÙÙ…ÙŽ Ø§Ø¬Ø¹Ù„Ù†Ø§ Ù…Ø³ØªØ­Ù‚ÙŠÙ† Ø§Ù† Ù†Ù‚ÙˆÙ„ Ø¨Ø´ÙƒØ±: Ø£Ø¨Ø§Ù†Ø§ Ø§Ù„Ø°ÙŠ...</td>
            </tr>
        </tbody>
    </table>
    <table id="table_${tableNumber2}" ${tableClass} title="Paschal Praise">
        <caption class="caption" id="caption_table_${tableNumber2}"></caption>
        <tr id="table_${tableNumber2}_row_0" class="text">
            <td class="english">Lord have mercy.</td>
            <td class="coptic">â²”â²©â²£â²“â²‰ â²‰â²—â²‰â²Ì€â²¥â²Ÿâ²›.</td>
            <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù….</td>
        </tr>
        <tr id="table_${tableNumber2}_row_1" class="text">
            <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen;
                Emmanuel our God and King.</td>
            <td class="coptic">â²â²±â²• â²§â²‰ Ï¯Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²“â²±Ì€â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²¥Ì€â²™â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²Ì€â²™â²Ï©â²“ Ï£â² â²‰Ì€â²›â²‰Ï© â²Ì€â²™â²â²›: â²ˆâ²™â²™â²â²›â²Ÿâ²©â²â²— â²¡â²‰â²›â²›â²Ÿâ²©Ï¯
                â²¡â²‰â²›â²Ÿâ²©â²£â²Ÿ .</td>
            <td class="arabic">Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù…ÙŽØ¬Ø¯Ù ÙˆÙŽØ§Ù„Ø¨ÙŽØ±ÙŽÙƒÙŽØ©Ù ÙˆÙŽØ§Ù„Ø¹ÙØ²ÙŽÙ‘Ø©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ø£ÙŽØ¨ÙŽØ¯ÙØŒ Ø¢Ù…ÙÙŠÙ†ÙŽ. Ø¹ÙŽÙ…ÙŽØ§Ù†ÙÙˆØ¦ÙÙŠÙ„Ù
                Ø¥ÙÙ„ÙŽÙ‡ÙÙ†ÙŽØ§ ÙˆÙŽÙ…ÙŽÙ„ÙÙƒÙÙ†ÙŽØ§.</td>
        </tr>
        <tr id="table_${tableNumber2}_row_2" class="text">
            <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen; My
                Lord Jesus Christ.</td>
            <td class="coptic">â²â²±â²• â²§â²‰ Ï¯Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²“â²±Ì€â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²¥Ì€â²™â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²Ì€â²™â²Ï©â²“ Ï£â² â²‰Ì€â²›â²‰Ï© â²Ì€â²™â²â²›: â² â²Ï­â²Ÿâ²“â²¥ â²’â²â²¥â²Ÿâ²©â²¥
                â² â²“â²­Ì€â²£â²“â²¥â²§â²Ÿâ²¥:</td>
            <td class="arabic">Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù…ÙŽØ¬Ø¯Ù ÙˆÙŽØ§Ù„Ø¨ÙŽØ±ÙŽÙƒÙŽØ©Ù ÙˆÙŽØ§Ù„Ø¹ÙØ²ÙŽÙ‘Ø©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ø£ÙŽØ¨ÙŽØ¯ÙØŒ Ø¢Ù…ÙÙŠÙ†ÙŽ. ÙŠÙŽØ§ Ø±ÙŽØ¨ÙÙ‘ÙŠ
                ÙŠÙŽØ³ÙÙˆØ¹ÙŽ Ø§Ù„Ù…ÙŽØ³ÙÙŠØ­Ù.</td>
        </tr>
        <tr id="table_${tableNumber2}_row_3" class="text">
            <td class="english">For Thine â€¦</td>
            <td class="coptic">â²â²±â²• ...</td>
            <td class="arabic">Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ...</td>
        </tr>
        </tbody>
    </table>
</div>\n`;
  return html;
}

function paschalPraise2(
  sectionNumber,
  tableNumber1,
  tableNumber2,
  eHour,
  aHour,
  eDay,
  aDay
) {
  const isOnePageChecked = userSettings("PaschalPraise", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }

  let html = `
          <div class="section" id="section_${sectionNumber}">
              <table id="table_${tableNumber1}" title="Paschal Praise">
                  <caption class="caption" id="caption_table_${tableNumber1}">Paschal Praise</caption>
                  <tbody>
                  <tr id="table_${tableNumber1}_row_0" class="priest">
                      <td class="english">Lord have mercy upon us. Alleluia.</td>
                      <td class="coptic">â² Ï­â²Ÿâ²“â²¥ â²›â²â²“ â²›â²â²›: â²€â²—â²—â²â²—â²Ÿâ²©â²“â².</td>
                      <td class="arabic">ÙŠØ§ Ø±Ø¨ Ø§Ø±Ø­Ù…Ù†Ø§. Ø§Ù„Ù„ÙŠÙ„ÙˆÙŠØ§.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_1" class="priest">
                      <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                      <td class="coptic">Ï¦â²‰â²› â²«Ì€â²£â²â²› â²™Ì€â²ªâ²“â²±â²§ â²›â²‰â²™ â² Ï£â²â²£â²“ â²›â²‰â²™ â² â²“â²¡Ì€â²›â²‰â²©â²™â² â²‰Ì€â²‘â²Ÿâ²©â²â²ƒ â²Ÿâ²©â²›â²Ÿâ²©Ï¯ â²›Ì€â²Ÿâ²©â²±â²§ â²Ì€â²™â²â²›.</td>
                      <td class="arabic">Ø¨Ø§Ø³Ù… Ø§Ù„Ø£Ø¨ Ùˆ Ø§Ù„Ø§Ø¨Ù† Ùˆ Ø§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ù‡ ÙˆØ§Ø­Ø¯ØŒ Ø£Ù…ÙŠÙ†.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_2" class="priest">
                      <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, Both now and
                          ever and unto the ages of ages. Amen.</td>
                      <td class="coptic">â²†â²Ÿâ²â² â² â²â²§â²£â²“ â²•â²‰ â²¨â²“â²± â²•â²‰ â²€â²…â²“â²± â² â²›â²‰â²©â²™â²â²§â²“: â²”â²‰ â²›â²©â²› â²•â²‰ â²â²“Ì€ â²•â²‰ â²“â²¥ â²§â²Ÿâ²©â²¥ â²‰Ì€â²±Ì€â²›â²â²¥ â²§â²±â²› â²‰Ì€â²±Ì€â²›â²±â²›:
                          â²Ì€â²™â²â²›.</td>
                      <td class="arabic">Ø§Ù„Ù…Ø¬Ø¯ Ù„Ù„Ø£Ø¨ ÙˆØ§Ù„Ø¥Ø¨Ù† ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ø£Ù† ÙˆÙƒÙ„ Ø£ÙˆØ§Ù† ÙˆØ§Ù„Ù‰ Ø¯Ù‡Ø± Ø§Ù„Ø¯Ù‡ÙˆØ± ÙƒÙ„Ù‡Ø§ØŒ Ø£Ù…ÙŠÙ†.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_3" class="priest">
                      <td class="english">The doxology of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                      <td class="arabic">ØªØ³Ø¨Ø­Ø© Ø§Ù„Ø³Ø§Ø¹Ø© ${aHour} Ù…Ù† ${aDay} Ù…Ù† Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø¨Ø±ÙƒØ§ØªÙ‡Ø§ ØªÙƒÙˆÙ† Ù…Ø¹Ù†Ø§ØŒ Ø£Ù…ÙŠÙ†.
                      </td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_4" class="priest">
                      <td class="english">O Lord make us worthy to pray thankfully saying: Our Fatherâ€¦</td>
                      <td class="coptic">â²€â²£â²“â²§â²‰â²› â²›Ì€â²‰â²™â²¡Ì€Ï£â² â²›Ì€Ï«â²Ÿâ²¥ Ï§â²‰â²› â²Ÿâ²©Ï£â²‰â²¡Ï©Ì€â²™â²Ÿâ²§: Ïªâ²‰ â² â²‰â²›â²“â²±â²§ ...</td>
                      <td class="arabic">Ø§Ù„Ù„Ù‡ÙÙ…ÙŽ Ø§Ø¬Ø¹Ù„Ù†Ø§ Ù…Ø³ØªØ­Ù‚ÙŠÙ† Ø§Ù† Ù†Ù‚ÙˆÙ„ Ø¨Ø´ÙƒØ±: Ø£Ø¨Ø§Ù†Ø§ Ø§Ù„Ø°ÙŠ...</td>
                  </tr>
              </tbody>
            </table>
              <table id="table_${tableNumber2}" ${tableClass} title="Paschal Praise">
                <caption class="caption" id="caption_table_${tableNumber2}"></caption>

              <tbody>
                <tr id="table_${tableNumber2}_row_0" class="text">  
                      <td class="english">Lord have mercy.</td>
                      <td class="coptic">â²”â²©â²£â²“â²‰ â²‰â²—â²‰â²Ì€â²¥â²Ÿâ²›.</td>
                      <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù….</td>
                  </tr>      
                <tr id="table_${tableNumber2}_row_1" class="text">
                      <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen;
                          Emmanuel our God and King.</td>
                      <td class="coptic">â²â²±â²• â²§â²‰ Ï¯Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²“â²±Ì€â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²¥Ì€â²™â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²Ì€â²™â²Ï©â²“ Ï£â² â²‰Ì€â²›â²‰Ï© â²Ì€â²™â²â²›: â²ˆâ²™â²™â²â²›â²Ÿâ²©â²â²— â²¡â²‰â²›â²›â²Ÿâ²©Ï¯
                          â²¡â²‰â²›â²Ÿâ²©â²£â²Ÿ .</td>
                          <td class="arabic">Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù…ÙŽØ¬Ø¯Ù ÙˆÙŽØ§Ù„Ø¨ÙŽØ±ÙŽÙƒÙŽØ©Ù ÙˆÙŽØ§Ù„Ø¹ÙØ²ÙŽÙ‘Ø©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ø£ÙŽØ¨ÙŽØ¯ÙØŒ Ø¢Ù…ÙÙŠÙ†ÙŽ. Ø¹ÙŽÙ…ÙŽØ§Ù†ÙÙˆØ¦ÙÙŠÙ„Ù Ø¥ÙÙ„ÙŽÙ‡ÙÙ†ÙŽØ§ ÙˆÙŽÙ…ÙŽÙ„ÙÙƒÙÙ†ÙŽØ§.</td>
                        </tr>
                  <tr id="table_${tableNumber2}_row_2" class="text">
                      <td class="english">For Thine is the power, the glory, the blessing,  the majesty forever. Amen;  My Lord Jesus Christ. My Good Savior.</td>
                      <td class="coptic">â²â²±â²• â²§â²‰ Ï¯Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²“â²±Ì€â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²¥Ì€â²™â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²Ì€â²™â²Ï©â²“ Ï£â² â²‰Ì€â²›â²‰Ï©  â²Ì€â²™â²â²›: â² â²Ï­â²Ÿâ²“â²¥ â²’â²â²¥â²Ÿâ²©â²¥ â² â²“â²­Ì€â²£â²“â²¥â²§â²Ÿâ²¥: â² â²â²¥â²±â²§â²â²£ â²›Ì€â²Ì€â²…â²â²‘â²Ÿâ²¥.</td>
                      <td class="arabic">Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù…ÙŽØ¬Ø¯Ù ÙˆÙŽØ§Ù„Ø¨ÙŽØ±ÙŽÙƒÙŽØ©Ù ÙˆÙŽØ§Ù„Ø¹ÙØ²ÙŽÙ‘Ø©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ø£ÙŽØ¨ÙŽØ¯ÙØŒ Ø¢Ù…ÙÙŠÙ†ÙŽ. ÙŠÙŽØ§ Ø±ÙŽØ¨ÙÙ‘ÙŠ ÙŠÙŽØ³ÙÙˆØ¹ÙŽ Ø§Ù„Ù…ÙŽØ³ÙÙŠØ­ÙØŒ Ù…ÙØ®ÙŽÙ„ÙÙ‘ØµÙÙŠ Ø§Ù„ØµÙŽÙ‘Ø§Ù„ÙØ­Ù.</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_3" class="text">
                      <td class="english">For Thine â€¦</td>
                      <td class="coptic">â²â²±â²• ...</td>
                      <td class="arabic">Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ...</td>
                  </tr>
              </tbody>
            </table>
          </div>\n`;
  return html;
}

function paschalPraise3(
  sectionNumber,
  tableNumber1,
  tableNumber2,
  eHour,
  aHour,
  eDay,
  aDay
) {
  const isOnePageChecked = userSettings("PaschalPraise", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }

  let html = `
          <div class="section" id="section_${sectionNumber}">
              <table id="table_${tableNumber1}" title="Paschal Praise">
                  <caption class="caption" id="caption_table_${tableNumber1}">Paschal Praise</caption>
                  <tbody>
                  <tr id="table_${tableNumber1}_row_0" class="priest">
                      <td class="english">Lord have mercy upon us. Alleluia.</td>
                      <td class="coptic">â² Ï­â²Ÿâ²“â²¥ â²›â²â²“ â²›â²â²›: â²€â²—â²—â²â²—â²Ÿâ²©â²“â².</td>
                      <td class="arabic">ÙŠØ§ Ø±Ø¨ Ø§Ø±Ø­Ù…Ù†Ø§. Ø§Ù„Ù„ÙŠÙ„ÙˆÙŠØ§.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_1" class="priest">
                      <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                      <td class="coptic">Ï¦â²‰â²› â²«Ì€â²£â²â²› â²™Ì€â²ªâ²“â²±â²§ â²›â²‰â²™ â² Ï£â²â²£â²“ â²›â²‰â²™ â² â²“â²¡Ì€â²›â²‰â²©â²™â² â²‰Ì€â²‘â²Ÿâ²©â²â²ƒ â²Ÿâ²©â²›â²Ÿâ²©Ï¯ â²›Ì€â²Ÿâ²©â²±â²§ â²Ì€â²™â²â²›.</td>
                      <td class="arabic">Ø¨Ø§Ø³Ù… Ø§Ù„Ø£Ø¨ Ùˆ Ø§Ù„Ø§Ø¨Ù† Ùˆ Ø§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ù‡ ÙˆØ§Ø­Ø¯ØŒ Ø£Ù…ÙŠÙ†.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_2" class="priest">
                      <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, Both now and
                          ever and unto the ages of ages. Amen.</td>
                      <td class="coptic">â²†â²Ÿâ²â² â² â²â²§â²£â²“ â²•â²‰ â²¨â²“â²± â²•â²‰ â²€â²…â²“â²± â² â²›â²‰â²©â²™â²â²§â²“: â²”â²‰ â²›â²©â²› â²•â²‰ â²â²“Ì€ â²•â²‰ â²“â²¥ â²§â²Ÿâ²©â²¥ â²‰Ì€â²±Ì€â²›â²â²¥ â²§â²±â²› â²‰Ì€â²±Ì€â²›â²±â²›:
                          â²Ì€â²™â²â²›.</td>
                      <td class="arabic">Ø§Ù„Ù…Ø¬Ø¯ Ù„Ù„Ø£Ø¨ ÙˆØ§Ù„Ø¥Ø¨Ù† ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ø£Ù† ÙˆÙƒÙ„ Ø£ÙˆØ§Ù† ÙˆØ§Ù„Ù‰ Ø¯Ù‡Ø± Ø§Ù„Ø¯Ù‡ÙˆØ± ÙƒÙ„Ù‡Ø§ØŒ Ø£Ù…ÙŠÙ†.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_3" class="priest">
                      <td class="english">The doxology of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                      <td class="arabic">ØªØ³Ø¨Ø­Ø© Ø§Ù„Ø³Ø§Ø¹Ø© ${aHour} Ù…Ù† ${aDay} Ù…Ù† Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø¨Ø±ÙƒØ§ØªÙ‡Ø§ ØªÙƒÙˆÙ† Ù…Ø¹Ù†Ø§ØŒ Ø£Ù…ÙŠÙ†.
                      </td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_4" class="priest">
                      <td class="english">O Lord make us worthy to pray thankfully saying: Our Fatherâ€¦</td>
                      <td class="coptic">â²€â²£â²“â²§â²‰â²› â²›Ì€â²‰â²™â²¡Ì€Ï£â² â²›Ì€Ï«â²Ÿâ²¥ Ï§â²‰â²› â²Ÿâ²©Ï£â²‰â²¡Ï©Ì€â²™â²Ÿâ²§: Ïªâ²‰ â² â²‰â²›â²“â²±â²§ ...</td>
                      <td class="arabic">Ø§Ù„Ù„Ù‡ÙÙ…ÙŽ Ø§Ø¬Ø¹Ù„Ù†Ø§ Ù…Ø³ØªØ­Ù‚ÙŠÙ† Ø§Ù† Ù†Ù‚ÙˆÙ„ Ø¨Ø´ÙƒØ±: Ø£Ø¨Ø§Ù†Ø§ Ø§Ù„Ø°ÙŠ...</td>
                  </tr>
                  </tbody>
                </table>

              <table id="table_${tableNumber2}" ${tableClass} title="Paschal Praise">
                <caption class="caption" id="caption_table_${tableNumber2}"></caption>

                <tbody>  
                <tr id="table_${tableNumber2}_row_0" class="text">  
                      <td class="english">Lord have mercy.</td>
                      <td class="coptic">â²”â²©â²£â²“â²‰ â²‰â²—â²‰â²Ì€â²¥â²Ÿâ²›.</td>
                      <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù….</td>
                  </tr>  
                  <tr id="table_${tableNumber2}_row_1" class="text">
                      <td class="english"><i>For Thine is the power, the glory, the blessing, the majesty forever. Amen;</i> Emmanuel our God and King.</td>
                      <td class="coptic"><i>â²â²±â²• â²§â²‰ Ï¯Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²“â²±Ì€â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²¥Ì€â²™â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²Ì€â²™â²Ï©â²“ Ï£â² â²‰Ì€â²›â²‰Ï© â²Ì€â²™â²â²›:</i> â²ˆâ²™â²™â²â²›â²Ÿâ²©â²â²— â²¡â²‰â²›â²›â²Ÿâ²©Ï¯ â²¡â²‰â²›â²Ÿâ²©â²£â²Ÿ.</td>
                      <td class="arabic"><i>Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù…ÙŽØ¬Ø¯Ù ÙˆÙŽØ§Ù„Ø¨ÙŽØ±ÙŽÙƒÙŽØ©Ù ÙˆÙŽØ§Ù„Ø¹ÙØ²ÙŽÙ‘Ø©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ø£ÙŽØ¨ÙŽØ¯ÙØŒ Ø¢Ù…ÙÙŠÙ†ÙŽ.</i> Ø¹ÙŽÙ…ÙŽØ§Ù†ÙÙˆØ¦ÙÙŠÙ„Ù Ø¥ÙÙ„ÙŽÙ‡ÙÙ†ÙŽØ§ ÙˆÙŽÙ…ÙŽÙ„ÙÙƒÙÙ†ÙŽØ§.</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_2" class="text">
                      <td class="english"><i>For Thine ... </i>My Lord Jesus Christ. My Good Savior. The Lord is my strength, and my praise, Thou became to me a sacred salvation.</td>
                      <td class="coptic"><i>â²â²±â²•... </i>â² â²Ï­â²Ÿâ²“â²¥ â²’â²â²¥â²Ÿâ²©â²¥ â² â²“â²­Ì€â²£â²“â²¥â²§â²Ÿâ²¥: â² â²â²¥â²±â²§â²â²£ â²›Ì€â²Ì€â²…â²â²‘â²Ÿâ²¥. â²§â²Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²â²¥Ì€â²™â²Ÿâ²© â²¡â²‰ Ë™â² Ï­â²Ÿâ²“â²¥: â²Ï¥Ï£â²±â²¡â²“ â²›â²â²“ â²‰â²©â²¥â²±â²§â²â²£â²“â²Ì€ â²‰Ï¥â²Ÿâ²©â²â²ƒ</td>
                      <td class="arabic"><i>Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù... </i>ÙŠÙŽØ§ Ø±ÙŽØ¨ÙÙ‘ÙŠ ÙŠÙŽØ³ÙÙˆØ¹ÙŽ Ø§Ù„Ù…ÙŽØ³ÙÙŠØ­ÙØŒ Ù…ÙØ®ÙŽÙ„ÙÙ‘ØµÙÙŠ Ø§Ù„ØµÙŽÙ‘Ø§Ù„ÙØ­Ù. Ù‚ÙÙˆÙŽÙ‘ØªÙÙŠ ÙˆÙŽØªÙŽØ³Ù’Ø¨ÙÙŠØ­ÙŽØªÙÙŠ Ù‡ÙÙˆÙŽ Ø§Ù„Ø±ÙŽÙ‘Ø¨ÙÙ‘ØŒ ÙˆÙŽÙ‚ÙŽØ¯Ù’ ØµÙŽØ§Ø±ÙŽ Ù„ÙÙŠ Ø®ÙŽÙ„ÙŽØ§ØµÙ‹Ø§ Ù…ÙÙ‚ÙŽØ¯ÙŽÙ‘Ø³Ù‹Ø§.</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_3" class="text">
                      <td class="english"><i>For Thine â€¦</i></td>
                      <td class="coptic"><i>â²â²±â²• ...</i></td>
                      <td class="arabic"><i>Ù„ÙŽÙƒÙŽ Ø§Ù„Ù‚ÙÙˆÙŽÙ‘Ø©Ù ...</i></td>
                  </tr>
                  </tbody>
                </table>
          </div>\n`;
  return html;
}

function copticGospelIntro(tableNumber) {
  const isOnePageChecked = userSettings("GospelIntro", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }

  let html = `
    <table id="table_${tableNumber}" ${tableClass} title="We Beseech">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">â²”â²‰ â²©â²¡â²‰â²£â²§â²Ÿâ²©</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="text">
            <td class="english">We beseech our Lord and God</td>
            <td class="coptic">â²”â²‰ â²©Ì€â²¡â²‰â²£â²§â²Ÿâ²© â²•â²â²§â² â²â²“â²± â²‘â²â²›â²‰ â²Ì€â²™â²â²¥:</td>
            <td class="arabic">Ù†ØªÙˆØ³Ù„ Ù…Ù† Ø±Ø¨Ù†Ø§ ÙˆØ¥Ù„Ù‡Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="text">
            <td class="english">That we may be worthy</td>
            <td class="coptic">â²§â²â²¥ â²â²•â²£â²Ÿ â²Ì€â²¥â²‰â²±â²¥ â²§â²Ÿâ²© â²Ì€â²…â²“â²Ÿâ²© â²‰â²©â²â²…â²…â²‰â²—â²“â²Ÿâ²©: </td>
            <td class="arabic">Ù„ÙƒÙ‰ Ù†ÙƒÙˆÙ† Ù…Ø³ØªØ­Ù‚ÙŠÙ†</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="text">
            <td class="english">To hear the Holy Gospel.</td>
            <td class="coptic">â²•â²©â²£â²“â²Ÿâ²› â²•â²‰ â²§â²Ÿâ²› â²‘â²‰â²Ÿâ²› â²Ì€â²™â²±â²›:</td>
            <td class="arabic">Ù„Ø³Ù…Ø§Ø¹ Ø§Ù„Ø¥Ù†Ø¬ÙŠÙ„ Ø§Ù„Ù…Ù‚Ø¯Ø³.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="text">
            <td class="english">In wisdom, let us attend to the Holy Gospel.</td>
            <td class="coptic">â²“Ì€â²•â²‰â²§â²‰â²©â²¥â²±â²™â²‰â²› â²¥â²Ÿâ²«â²“â²Ì€ â²Ÿâ²£â²‘â²“ â²Ì€â²•â²Ÿâ²©â²¥â²±â²™â²‰â²› â²§â²Ÿâ²© â²Ì€â²…â²“â²Ÿâ²© â²‰â²©â²â²…â²…â²‰â²—â²“â²Ÿâ²©.</td>
            <td class="arabic">Ø§ØµØºÙˆØ§ ÙˆØ§Ù†ØµØªÙˆØ§ Ø¨Ø­ÙƒÙ…Ø© Ù„Ù„Ø¥Ù†Ø¬ÙŠÙ„ Ø§Ù„Ù…Ù‚Ø¯Ø³.</td>
        </tr>
    </tbody>
</table>`;
  return html;
}

function daytimeExpositionIntro(tableNumber) {
  const isOnePageChecked = userSettings("ExpositionResponses", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }
  let html = `
    <table id="table_${tableNumber}" ${tableClass} title="Daytime Exposition Introduction">
        <caption class="caption" id="caption_table_${tableNumber}">Exposition Introduction
        <span class="arabic-caption">Ù…Ù‚Ø¯Ù…Ø© Ø§Ù„Ø·Ø±Ø­</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">In the name of the Trinity,</td>
            <td class="coptic">Ï¦â²‰â²› â²«Ì€â²£â²â²› â²›Ì€Ï¯â²§Ì€â²£â²“â²â²¥:</td>
            <td class="arabic">Ø¨Ø§Ø³Ù… Ø§Ù„Ø«Ø§Ù„ÙˆØ«</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">One in Essence,</td>
            <td class="coptic">â²›Ì€â²ŸÌ€â²©â²™â²Ÿâ²Ÿâ²©â²¥â²“â²Ÿâ²¥:</td>
            <td class="arabic">Ø§Ù„Ù…Ø³Ø§ÙˆÙŠ</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="priest">
            <td class="english">The Father and the Son,</td>
            <td class="coptic">Ì€Ì€â²ªâ²“â²±â²§ â²›â²‰â²™ â² Ì€Ï£Ì€â²â²£â²“: </td>
            <td class="arabic">Ø§Ù„Ø¢Ø¨ ÙˆØ§Ù„Ø§Ø¨Ù†</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">And the Holy Spirit.</td>
            <td class="coptic">â²›â²‰â²™ â²¡â²“â² Ì€â²›â²‰â²©â²™â² â²‰â²‘â²Ÿâ²©â²â²ƒ.</td>
            <td class="arabic">ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="priest">
            <td class="english">O true Light,</td>
            <td class="coptic">â² â²“â²Ÿâ²©â²±â²“â²›â²“ â²›Ì€â²§â²  â²«Ì€â²™â²â²“ :</td>
            <td class="arabic">Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù†ÙˆØ± Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">Who enlightens,</td>
            <td class="coptic">â²«â² â²‰â²§â²‰â²£â²Ÿâ²©â²±â²“â²›â²“ :</td>
            <td class="arabic">Ø§Ù„Ø°Ù‰ ÙŠØ¶Ø¦</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="priest">
            <td class="english">Every man,</td>
            <td class="coptic">â²‰Ì€â²£â²±â²™â²“ â²›â²“â²ƒâ²‰â²› :</td>
            <td class="arabic">Ù„ÙƒÙ„ Ø¥Ù†Ø³Ø§Ù†</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="congregation">
            <td class="english">That comes into the world.</td>
            <td class="coptic">â²‰Ì€â²‘â²›â²â²Ÿâ²© â²‰Ì€ â²¡â²“â²•â²Ÿâ²¥â²™â²Ÿâ²¥.</td>
            <td class="arabic">Ø¢ØªÙ Ø¥Ù„Ù‰ Ø§Ù„Ø¹Ø§Ù„Ù….</td>
        </tr>
    </tbody>
</table>\n`;
  return html;
}

function nighttimeExpositionIntro(tableNumber) {
  const isOnePageChecked = userSettings("ExpositionResponses", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }
  let html = `
      <table id="table_${tableNumber}" ${tableClass} title="Nighttime Exposition Introduction">
          <caption class="caption" id="caption_table_${tableNumber}">Exposition Introduction
          <span class="arabic-caption">Ù…Ù‚Ø¯Ù…Ø© Ø§Ù„Ø·Ø±Ø­</span></caption>
<tbody>
          <tr id="table_${tableNumber}_row_0" class="priest">
              <td class="english">In the name of the Trinity,</td>
              <td class="coptic">Ï¦â²‰â²› â²«Ì€â²£â²â²› â²›Ì€Ï¯â²§Ì€â²£â²“â²â²¥ :</td>
              <td class="arabic">Ø¨Ø§Ø³Ù… Ø§Ù„Ø«Ø§Ù„ÙˆØ«</td>
          </tr>
          <tr id="table_${tableNumber}_row_1" class="congregation">
              <td class="english">One in Essence,</td>
              <td class="coptic">â²›Ì€â²ŸÌ€â²©â²™â²Ÿâ²Ÿâ²©â²¥â²“â²Ÿâ²¥ :</td>
              <td class="arabic">Ø§Ù„Ù…Ø³Ø§ÙˆÙŠ</td>
          </tr>
          <tr id="table_${tableNumber}_row_2" class="priest">
              <td class="english">The Father and the Son</td>
              <td class="coptic"> Ì€ â²ªâ²“â²±â²§ â²›â²‰â²™  Ì€ â² Ï£â²â²£â²“: </td>
              <td class="arabic">Ø§Ù„Ø¢Ø¨ ÙˆØ§Ù„Ø§Ø¨Ù†</td>
          </tr>
          <tr id="table_${tableNumber}_row_3" class="congregation">
              <td class="english">And the Holy Spirit</td>
              <td class="coptic">â²›â²‰â²™ â²¡â²“â² Ì€â²›â²‰â²©â²™â² â²‰â²‘â²Ÿâ²©â²â²ƒ.</td>
              <td class="arabic">ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³</td>
          </tr>
          <tr id="table_${tableNumber}_row_4" class="priest">
              <td class="english">Hail thee O Mary;</td>
              <td class="coptic">â²¬â²‰â²£â²‰ â²›â²‰ â²˜â²â²£â²“â²:</td>
              <td class="arabic">Ø§Ù„Ø³Ù„Ø§Ù… Ù„Ùƒ ÙŠØ§ Ù…Ø±ÙŠÙ…</td>
          </tr>
          <tr id="table_${tableNumber}_row_5" class="congregation">
              <td class="english">The pure dove;</td>
              <td class="coptic">Ï¯ Ï­Ì€â²£â²Ÿâ²™â²¡â²“ â²‰â²‘â²›â²‰â²¥â²±â²¥:</td>
              <td class="arabic">Ø§Ù„Ø­Ù…Ø§Ù…Ø© Ø§Ù„Ø­Ø³Ù†Ø©</td>
          </tr>
          <tr id="table_${tableNumber}_row_6" class="priest">
              <td class="english">Who has born for us; </td>
              <td class="coptic">â²‘Ì€â²â²‰â²§Ì€â²â²¥â²™â²“â²¥â²“ â²›â²â²›:</td>
              <td class="arabic">Ø§Ù„ØªÙŠ ÙˆÙ„Ø¯Øª Ù„Ù†Ø§</td>
          </tr>
          <tr id="table_${tableNumber}_row_7" class="congregation">
              <td class="english">God  the Logos.</td>
              <td class="coptic">â²™Ì€â²ªÌ€â²›â²Ÿâ²©Ï¯ â²¡â²“â²—â²Ÿâ²…â²Ÿâ²¥.</td>
              <td class="arabic">Ø§Ù„Ù„Ù‡ Ø§Ù„ÙƒÙ„Ù…Ø©</td>
          </tr>
      </tbody>
</table>\n`;
  return html;
}

function expositionConclusion(tableNumber) {
  const isOnePageChecked = userSettings("ExpositionResponses", "onePage"); // Example usage
  let tableClass = "";
  if (isOnePageChecked) {
    tableClass = 'class= "onePage"';
  }
  let html = `
    <table id="table_${tableNumber}" ${tableClass} title="Daytime Exposition Conclusion">
        <caption class="caption" id="caption_table_${tableNumber}">Exposition Conclusion
        <span class="arabic-caption">Ø®ØªØ§Ù… Ø§Ù„Ø·Ø±Ø­</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">Christ our Savior,</td>
            <td class="coptic">â² â²“â²­â²£â²“â²¥â²§â²Ÿâ²¥ â²¡â²‰â²›â²¥â²±â²§â²â²£ </td>
            <td class="arabic">Ø§Ù„Ù…Ø³ÙŠØ­ Ù…Ø®Ù„ØµÙ†Ø§</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">Has come and has borne suffering,</td>
            <td class="coptic">â²Ì€Ï¥ â²“Ì€ â²Ï¥Ï£â²‰â²¡ â²™Ì€â²•â²Ï©:</td>
            <td class="arabic">Ø¬Ø§Ø¡ ÙˆØªØ£Ù„Ù…</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="priest">
            <td class="english">That through His Passion,</td>
            <td class="coptic">Ï©â²“â²›â² Ï§â²‰â²› â²›â²‰Ï¥â²™Ì€â²•â²â²©Ï©:</td>
            <td class="arabic">Ù„ÙƒÙ‰ Ø¨Ø£Ù„Ø¢Ù…Ù‡</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">He may save us.</td>
            <td class="coptic">â²›Ì€â²§â²‰Ï¥â²¥â²±Ï¯ â²™Ì€â²™â²Ÿâ²›.</td>
            <td class="arabic">ÙŠØ®Ù„ØµÙ†Ø§</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="priest">
            <td class="english">Let us glorify Him,</td>
            <td class="coptic">â²˜â²â²£â²‰â²› Ï¯â²±â²Ÿâ²© â²›â²Ï¥ :</td>
            <td class="arabic">ÙÙ„Ù†Ù…Ø¬Ø¯Ù‡</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">And exalt His Name,</td>
            <td class="coptic">â²§â²‰â²›Ï­â²“â²¥â²“ â²™Ì€â²¡â²‰Ï¥â²£â²â²› :</td>
            <td class="arabic">ÙˆÙ†Ø±ÙØ¹ Ø§Ø³Ù…Ù‡</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="priest">
            <td class="english">For He has done us mercy,</td>
            <td class="coptic">Ï«Ì€â²‰ â²Ï¥â²‰â²£â²Ÿâ²©â²›â²â²“ â²›â²‰â²™â²â²› :</td>
            <td class="arabic">Ù„Ø£Ù†Ù‡ ØµÙ†Ø¹ Ù…Ø¹Ù†Ø§ Ø±Ø­Ù…Ø©.</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="congregation">
            <td class="english">According to His great mercy.</td>
            <td class="coptic">â²•â²â²§â² â²¡â²‰Ï¥â²›â²“Ï£Ï¯ â²›Ì€â²›â²â²“.</td>
            <td class="arabic">ÙƒØ¹Ø¸ÙŠÙ… Ø±Ø­Ù…ØªÙ‡.</td>
        </tr>
    </tbody>
</table>\n`;
  return html;
}

function daytimeLitanies(tableNumber, prostrations) {
  let prostrationsVariable;
  if (prostrations) {
    prostrationsVariable = `
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">We bend our knees</td>
            <td class="coptic">â²”Ì€â²—â²“â²›â²±â²™â²‰â²› â²§â²â²…â²Ÿâ²›â²â²§â²</td>
            <td class="arabic">Ù†Ø­Ù†Ù‰ Ø±ÙƒØ¨Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">Have mercy upon us O God the Pantocrator.</td>
            <td class="coptic">â²šâ²â²“ â²›â²â²› â²ªÌ€â²›â²Ÿâ²©Ï¯ â²ªÌ€â²“â²±â²§ â²¡â²“â² â²â²›â²§â²Ÿâ²•â²£â²â²§â²±â²£</td>
            <td class="arabic">Ø¥Ø±Ø­Ù…Ù†Ø§ ÙŠØ§ Ø§Ù„Ù„Ù‡ Ø§Ù„Ø¢Ø¨ Ø¶Ø§Ø¨Ø· Ø§Ù„ÙƒÙ„ </td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="priest">
            <td class="english">We stand up and bend our knees</td>
            <td class="coptic">â²€â²›â²â²¥â²§â²±â²™â²‰â²› â²•Ì€â²—â²“â²›â²±â²™â²‰â²› â²§â²â²…â²Ÿâ²›â²â²§â²</td>
            <td class="arabic">Ù†Ù‚Ù Ø«Ù… Ù†Ø­Ù†Ù‰ Ø±ÙƒØ¨Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">Have mercy upon us O God our Savior</td>
            <td class="coptic">â²šâ²â²“ â²›â²â²› Ë™â²ªâ²›â²Ÿâ²©Ï¯ â² â²‰â²›â²¥â²±â²§â²â²£</td>
            <td class="arabic">Ø¥Ø±Ø­Ù…Ù†Ø§ ÙŠØ§ Ø§Ù„Ù„Ù‡ Ù…Ø®Ù„ØµÙ†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="priest">
            <td class="english">Then we stand up, and bend our knees</td>
            <td class="coptic">â²”â²‰ â²â²›â²â²¥â²§â²±â²™â²‰â²› â²•Ì€â²—â²“â²›â²±â²™â²‰â²› â²§â²â²…â²Ÿâ²›â²â²§â²</td>
            <td class="arabic">Ø«Ù… Ù†Ù‚Ù ÙˆÙ†Ø­Ù†Ù‰ Ø±ÙƒØ¨Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">Have mercy upon us O God and have mercy.</td>
            <td class="coptic">â²šâ²â²“ â²›â²â²›  Ë™â²ªâ²›â²Ÿâ²©Ï¯ â²Ÿâ²©â²ŸÏ© â²›â²â²“ â²›â²â²›</td>
            <td class="arabic">Ø¥Ø±Ø­Ù…Ù†Ø§ ÙŠØ§ Ø§Ù„Ù„Ù‡ Ø«Ù… Ø¥Ø±Ø­Ù…Ù†Ø§.</td>
        </tr>
        `;
  } else {
    prostrationsVariable = `
        <tr id="table_${tableNumber}_row_0" class="intro">
            <td class="english">Prayed without prostrations.</td>
            <td class="arabic">ØªØµÙ„ÙŠ Ø¨Ø¯ÙˆÙ† Ù…ÙŠØ·Ø§Ù†ÙŠØ§Øª</td>
        </tr>`;
  }
  let html = `
    <table id="table_${tableNumber}" title="Daytime Litanies">
        <caption class="caption" id="caption_table_${tableNumber}">Daytime Litanies
        <span class="arabic-caption">Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØµØ¨Ø§Ø­</span></caption>
<tbody>
        ${prostrationsVariable}
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english"<strong>1)</strong> Let us pray that God may have mercy and compassion on us, hear us, help us, and accept the prayers and supplications of His saints for that which is good on our behalf at all times, and forgive us our sins. ${cross}</td>
            <td class="coptic">â²¦â²±â²ƒÏ© Ï©â²“â²›â² â²›Ì€â²§â²‰ â²ªâ²›â²Ÿâ²©Ï¯ â²›â²â²“ â²›â²â²›: â²›Ì€â²§â²‰Ï¥Ï£â²‰â²›Ï©â²â²§ Ï§â²â²£â²Ÿâ²›: â²›Ì€â²§â²‰Ï¥â²¥â²±â²§â²‰â²™ â²‰Ì€â²£â²Ÿâ²›: â²›Ì€â²§â²‰Ï¥â²‰â²£â²ƒâ²Ÿâ²Ì€â²‘â²“â²› â²‰Ì€â²£â²Ÿâ²›: â²›Ì€â²§â²‰Ï¥Ï­â²“    â²›Ì€â²›â²“Ï¯Ï©â²Ÿ â²›â²‰â²™ â²›â²“â²§â²±â²ƒÏ© â²›Ì€â²§â²‰ â²›â²â²‰â²‘â²Ÿâ²©â²â²ƒ  â²›Ì€â²§â²Ï¥ â²›Ì€â²§â²Ÿâ²§â²Ÿâ²© â²‰Ì€Ï©Ì€â²£â²â²“ â²‰Ì€Ï«â²±â²› â²‰Ì€â²¡â²“â²Ì€â²…â²â²‘â²Ÿâ²›  â²›Ì€â²¥â²â²Ÿâ²© â²›â²“â²ƒâ²‰â²›: â²›Ì€â²§â²‰Ï¥ â²­â² â²›â²‰â²›â²›â²Ÿâ²ƒâ²“  â²›â²â²›  â²‰Ì€â²ƒâ²Ÿâ²—.  ${cross}</td>
            <td class="arabic"<strong>Ù¡)</strong> Ø§Ø·Ù„Ø¨ÙˆØ§ Ù„ÙƒÙ‰ ÙŠØ±Ø­Ù…Ù†Ø§ Ø§Ù„Ù„Ù‡ ÙˆÙŠØªØ±Ø§Ø¡Ù Ø¹Ù„ÙŠÙ†Ø§ ÙˆÙŠØ³Ù…Ø¹Ù†Ø§ ÙˆÙŠØ¹ÙŠÙ†Ù†Ø§ ÙˆÙŠÙ‚Ø¨Ù„ Ø³Ø¤Ø§Ù„Ø§Øª ÙˆØ·Ù„Ø¨Ø§Øª Ù‚Ø¯ÙŠØ³Ù‡ Ù…Ù†Ù‡Ù… Ø¨Ø§Ù„ØµÙ„Ø§Ø­ Ø¹Ù†Ø§  ÙÙ‰ ÙƒÙ„ Ø­ÙŠÙ†. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english"<strong>2)</strong> Let us pray for the peace of the One Holy catholic and Apostolic church, and God's salvation and comfort in all places, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¢)</strong> Ø§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø³Ù„Ø§Ù…Ø© Ø§Ù„ÙˆØ§Ø­Ø¯Ø© Ø§Ù„ÙˆØ­ÙŠØ¯Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø§Ù„Ø¬Ø§Ù…Ø¹Ø© Ø§Ù„Ø±Ø³ÙˆÙ„ÙŠØ© Ø§Ù„ÙƒÙ†ÙŠØ³Ø©. ÙˆØ®Ù„Ø§Øµ Ø§Ù„Ù„Ù‡ ÙÙ‰ Ø§Ù„Ø´Ø¹ÙˆØ¨ ÙˆØ§Ù„Ø·Ù…Ø£Ù†ÙŠÙ†Ø© Ø¨ÙƒÙ„ Ù…ÙˆØ¶Ø¹.  ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english"<span class="bold">3)</span> Let us pray for our fathers and brethren who are sick with any sickness, whether in this place or in any place, that the Lord our God may grant us, with them health and healing, and forgive us our sins. ${cross}</td>
            <td class="arabic"<span class="bold">Ù£)</span> Ø§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø£Ø¨Ø§Ø¦Ù†Ø§ ÙˆØ£Ø®ÙˆØªÙ†Ø§ Ø§Ù„Ù…Ø±Ø¶Ù‰ Ø¨ÙƒÙ„ Ø§Ù„Ø£Ù…Ø±Ø§Ø¶ ÙÙ‰ Ù‡Ø°Ø§ Ø§Ù„Ù…ÙˆØ¶Ø¹ ÙˆÙƒÙ„ Ù…ÙƒØ§Ù† Ù„ÙƒÙ‰ ÙŠÙ†Ø¹Ù… Ù„Ù†Ø§ Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆØ¥ÙŠØ§Ù‡Ù… Ø¨Ø§Ù„Ø¹Ø§ÙÙŠØ© ÙˆØ§Ù„Ø´ÙØ§Ø¡. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english"<strong>4)</strong> Let us pray and ask for our fathers and brethren who are traveling, and those who intend to travel in all places, may God aid their ways; whether by seas, rivers, lakes, roads, or other means, may the Lord our God guide them, bring them back in safety, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¤)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø£Ø¨Ø§Ø¦Ù†Ø§ ÙˆØ£Ø®ÙˆØ§ØªÙ†Ø§ Ø§Ù„Ù…Ø³Ø§ÙØ±ÙŠÙ† ÙˆØ§Ù„Ø°ÙŠÙ† Ø£Ø¶Ù…Ø±ÙˆØ§ Ø§Ù„Ø³ÙØ± Ø¨ÙƒÙ„ Ù…ÙƒØ§Ù† Ù„ÙŠØ³Ù‡Ù„ Ø·Ø±Ù‚Ù‡Ù… Ø¬Ù…ÙŠØ¹Ø§Ù‹ Ø¥Ù† ÙƒØ§Ù†ÙˆØ§ ÙÙ‰ Ø§Ù„Ø¨Ø­Ø§Ø± Ø£ÙˆØ§Ù„Ø£Ù†Ù‡Ø§Ø± Ø£ÙˆØ§Ù„ÙŠÙ†Ø§Ø¨ÙŠØ¹ Ø£ÙˆØ§Ù„Ø·Ø±Ù‚ Ø§Ù„Ù…Ø³Ù„ÙˆÙƒØ© ÙˆØ§Ù„Ø°ÙŠÙ† Ø¬Ø¹Ù„ÙˆØ§ Ø³ÙØ±Ù‡Ù… Ø¨ÙƒÙ„ Ù†ÙˆØ¹ Ù„ÙƒÙ‰ ÙŠØ±Ø´Ø¯Ù‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠØ±Ø¬Ø¹Ù‡Ù… Ø¥Ù„Ù‰ Ù…Ø³Ø§ÙƒÙ†Ù‡Ù… Ø¨Ø³Ù„Ø§Ù… ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english"<strong>5)</strong> Let us pray and ask for the air of heaven, the fruits of the earth, all the trees and vineyards and all fruit bearing trees in the universe, that Christ our God may bless them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¥)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø£Ù‡ÙˆÙŠØ© Ø§Ù„Ø³Ù…Ø§Ø¡ ÙˆØ«Ù…Ø±Ø§Øª Ø§Ù„Ø£Ø±Ø¶ ÙˆÙƒÙ„ Ø§Ù„Ø£Ø´Ø¬Ø§Ø± ÙˆØ§Ù„ÙƒØ±ÙˆÙ… ÙˆÙƒÙ„ Ø´Ø¬Ø±Ø© Ù…Ø«Ù…Ø±Ø© ÙÙ‰ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø³ÙƒÙˆÙ†Ø© Ù„ÙƒÙ‰ ÙŠØ¨Ø§Ø±ÙƒÙ‡Ø§ Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠÙƒÙ…Ù„Ù‡Ø§ Ø¨Ø³Ù„Ø§Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english"<strong>6)</strong> Let us pray and ask that God may grant us mercy before the sovereign rulers, incline their hearts with goodness towards us at all times, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¦)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ù„ÙƒÙ‰ ÙŠØ¹Ø·ÙŠÙ†Ø§ Ø§Ù„Ù„Ù‡ Ø±Ø­Ù…Ø© ÙˆØ±Ø£ÙØ© Ø£Ù…Ø§Ù… Ø§Ù„Ø³Ù„Ø§Ø·ÙŠÙ† Ø§Ù„Ø£Ø¹Ø²Ø§Ø¡ ÙˆÙŠØ¹Ø·Ù Ù‚Ù„ÙˆØ¨ Ø§Ù„Ù…ØªÙˆÙ„ÙŠÙ† Ø¹Ù„ÙŠÙ†Ø§ Ø¨Ø§Ù„ØµÙ„Ø§Ø­ ÙÙ‰ ÙƒÙ„ Ø­ÙŠÙ†. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english"<strong>7)</strong> Let us pray and ask for our fathers and brethren who have slept and reposed in the faith of Christ since the beginning, our holy fathers, the Patriarchs, our fathers the Metropolitans, our fathers the Bishops, our fathers the Hegumens, our fathers the priests, our brethren the deacons, our fathers the monks, and our brethren the laymen, </td>
            <td class="arabic"<strong>Ù§)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø¢Ø¨Ø§Ø¦Ù†Ø§ ÙˆØ§Ø®ÙˆØ§ØªÙ†Ø§ Ø§Ù„Ø°ÙŠÙ† Ø±Ù‚Ø¯ÙˆØ§ ÙˆØªÙ†ÙŠØ­ÙˆØ§ ÙÙ‰ Ø§Ù„Ø¥ÙŠÙ…Ø§Ù† Ø¨Ø§Ù„Ù…Ø³ÙŠØ­ Ù…Ù†Ø° Ø§Ù„Ø¨Ø¯Ø¡ Ø¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ø¨Ø·Ø§Ø±ÙƒØ© ÙˆØ¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ù…Ø·Ø§Ø±Ù†Ø© ÙˆØ¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ø£Ø³Ø§Ù‚ÙØ© ÙˆØ¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ù‚Ù…Ø§Ù…ØµØ© ÙˆØ¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ù‚Ø³ÙˆØ³ ÙˆØ§Ø®ÙˆØ§ØªÙ†Ø§ Ø§Ù„Ø´Ù…Ø§Ù…Ø³Ø© ÙˆØ¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ø±Ù‡Ø¨Ø§Ù† ÙˆØ§Ø®ÙˆØ§ØªÙ†Ø§ Ø§Ù„Ø¹Ù„Ù…Ø§Ù†ÙŠÙŠÙ† </td>
        </tr>
        <tr id="table_${tableNumber}_row_12.5" class="north">
            <td class="english">and for the repose of all the  departed Christians; that Christ our God may repose their souls, and forgive us our sins. ${cross}</td>
            <td class="arabic">ÙˆØ¹Ù† ÙƒÙ„ Ø§Ù„Ø°ÙŠÙ† ØªÙ†ÙŠØ­ÙˆØ§ Ù…Ù† Ø§Ù„Ù…Ø³ÙŠØ­ÙŠÙ† Ù„ÙƒÙ‰ ÙŠÙ†ÙŠØ­ Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ Ù†ÙÙˆØ³Ù‡Ù… Ø£Ø¬Ù…Ø¹ÙŠÙ†. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english"<strong>8)</strong> Let us pray and ask for those who attend to the offerings and oblations, the wine, the oil, the incense, the coverings of the altar, the books of prayers, and the vessels of the altar, that Christ our God may reward them in the heavenly Jerusalem, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¨)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø§Ù„Ù…Ù‡ØªÙ…ÙŠÙ† Ø¨Ø§Ù„ØµØ¹Ø§Ø¦Ø¯ ÙˆØ§Ù„Ù‚Ø±Ø§Ø¨ÙŠÙ† ÙˆØ§Ù„Ø®Ù…Ø± ÙˆØ§Ù„Ø²ÙŠØª ÙˆØ§Ù„Ø¨Ø®ÙˆØ± ÙˆØ§Ù„Ø³ØªÙˆØ± ÙˆÙƒØªØ¨ Ø§Ù„Ù‚Ø±Ø§Ø¡Ø© ÙˆÙƒÙ„ Ø£ÙˆØ§Ù†Ù‰ Ø§Ù„Ù…Ø°Ø¨Ø­ Ù„ÙƒÙ‰ ÙŠØ¹ÙˆØ¶Ù‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ Ø¹Ù† Ø£ØªØ¹Ø§Ø¨Ù‡Ù… ÙÙ‰ Ø£ÙˆØ±Ø´Ù„ÙŠÙ… Ø§Ù„Ø³Ù…Ø§Ø¦ÙŠØ©. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english"<strong>9)</strong> Let us pray and ask for the catechumens, that the Lord our God may bless them, enlighten their hearts, and confirm them in the Orthodox faith until their last breath, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù©)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ù…ÙˆØ¹Ø¸Ù‰ Ø´Ø¹Ø¨Ù†Ø§ Ù„ÙƒÙ‰ ÙŠØ¨Ø§Ø±ÙƒÙ‡Ù… Ø§Ù„Ø±Ø¨ ÙˆÙŠÙØªØ­ Ø¹ÙŠÙˆÙ† Ù‚Ù„ÙˆØ¨Ù‡Ù… ÙˆÙŠØ«Ø¨ØªÙ‡Ù… Ø¹Ù„Ù‰ Ø§Ù„Ø¥ÙŠÙ…Ø§Ù† Ø§Ù„Ø£Ø±Ø«ÙˆØ°ÙƒØ³Ù‰ Ø¥Ù„Ù‰ Ø§Ù„Ù†ÙØ³ Ø§Ù„Ø£Ø®ÙŠØ±. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english"<strong>10)</strong> Let us pray and ask for this holy Church, and all Orthodox Churches, the desert monasteries, the elders dwelling therein, and for the peace of the whole world, that the Lord may protect us and them from all evil, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù )</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³ÙƒÙ† ÙˆÙƒÙ„ Ù…Ø³Ø§ÙƒÙ† ÙˆØ¯ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø´Ø¹ÙˆØ¨ Ø§Ù„Ø£Ø±Ø«ÙˆØ°ÙˆÙƒØ³ÙŠÙŠÙ† ÙÙ‰ Ø§Ù„Ø¨Ø±Ø§Ø±Ù‰ ÙˆØ§Ù„Ø´ÙŠÙˆØ® Ø§Ù„Ø³ÙƒØ§Ù† ÙÙŠÙ‡Ø§ ÙˆØ¹Ù† Ø·Ù…Ø£Ù†ÙŠÙ†Ø© ÙƒÙ„ Ø§Ù„Ø¹Ø§Ù„Ù… Ù…Ø¹Ø§Ù‹. Ù„ÙƒÙ‰ ÙŠØ­ÙØ¸Ù†Ø§ Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆØ¥ÙŠØ§Ù‡Ù… Ù…Ù† ÙƒÙ„ Ø³ÙˆØ¡ ÙˆÙ…Ù† ÙƒÙ„ Ø´Ø±. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english"<strong>11)</strong> Let us pray and ask for the life and standing of our venerable father, the Patriarch Pope Abba Tawadros II that the Lord may preserve his life, and confirm him in his see for many years and peaceful times, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù¡)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø­ÙŠØ§Ø© ÙˆÙ‚ÙŠØ§Ù… Ø£Ø¨ÙŠÙ†Ø§ Ø§Ù„Ù…ÙƒØ±Ù… Ø±Ø¦ÙŠØ³ Ø§Ù„Ø£Ø³Ø§Ù‚ÙØ© Ø§Ù„Ø¢Ø¨ Ø§Ù„Ø¨Ø·Ø±ÙŠØ±Ùƒ Ø§Ù„Ø¨Ø§Ø¨Ø§ Ø£Ù†Ø¨Ø§ ØªÙˆØ§Ø¶Ø±ÙˆØ³ Ø§Ù„Ø«Ø§Ù†Ù‰ Ù„ÙƒÙ‰ ÙŠØ­ÙØ¸ Ø§Ù„Ø±Ø¨ Ù„Ù†Ø§ Ø­ÙŠØ§ØªÙ‡ ÙˆÙŠØ«Ø¨ØªÙ‡ Ø¹Ù„Ù‰ ÙƒØ±Ø³ÙŠÙ‡ Ø³Ù†ÙŠÙ† ÙƒØ«ÙŠØ±Ø© ÙˆØ£Ø²Ù…Ù†Ø© Ø³Ù„Ø§Ù…ÙŠØ© Ù‡Ø§Ø¯Ø¦Ø© Ù…Ø¯ÙŠØ¯Ø©. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§.  ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english"<strong>12)</strong> Let us pray and ask for our Orthodox fathers, the Metropolitans and the Bishops in every place, the hegumens, the priests, the deacons, and all the orders of the Church, that Christ our Lord may keep them and strengthen them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù¢)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ù…Ø·Ø§Ø±Ù†Ø© ÙˆØ§Ù„Ø£Ø³Ø§Ù‚ÙØ© Ø§Ù„Ø£Ø±Ø«ÙˆØ°ÙˆÙƒØ³ÙŠÙŠÙ† Ø¨ÙƒÙ„ Ù…ÙƒØ§Ù† ÙˆØ§Ù„Ù‚Ù…Ø§Ù…ØµØ© ÙˆØ§Ù„Ù‚Ø³ÙˆØ³ ÙˆØ§Ù„Ø´Ù…Ø§Ù…Ø³Ø© ÙˆÙƒÙ„ Ø·ØºÙ…Ø§Øª Ø§Ù„ÙƒÙ†ÙŠØ³Ø© Ù„ÙƒÙ‰ ÙŠØ­ÙØ¸Ù‡Ù… Ø§Ù„Ù…Ø³ÙŠØ­ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠÙ‚ÙˆÙŠÙ‡Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english"<strong>13)</strong> Let us pray and ask for this gathering and all Orthodox gatherings; that the Lord our God may bless and fulfill them in peace, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù£)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø¥Ø¬ØªÙ…Ø§Ø¹Ù†Ø§ Ù‡Ø°Ø§ ÙˆÙƒÙ„ Ø¥Ø¬ØªÙ…Ø§Ø¹ Ø§Ù„Ø´Ø¹ÙˆØ¨ Ø§Ù„Ø£Ø±Ø«ÙˆØ°ÙˆÙƒØ³ÙŠÙŠÙ† Ù„ÙƒÙ‰ ÙŠØ¨Ø§Ø±ÙƒÙ‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠÙƒÙ…Ù„Ù‡Ù… Ø¨Ø³Ù„Ø§Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english"<strong>14)</strong> Let us pray and ask for all the hierarchies of the Holy Church, and all the orders of the clergy; that the Lord our God may bless and strengthen them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù¤)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† ØªØ¯Ø¨ÙŠØ± Ø§Ù„Ø¨ÙŠØ¹Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© ÙˆÙƒÙ„ Ø±ØªØ¨ Ø§Ù„ÙƒÙ‡Ù†ÙˆØª Ù„ÙƒÙ‰ ÙŠØ¨Ø§Ø±ÙƒÙ‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠÙ‚ÙˆÙŠÙ‡Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english"<strong>15)</strong> Let us pray and ask for those who labor and toil in the Holy Church and with the Orthodox people, that the Lord our God may have mercy on them, and forgive us our sins ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù¥)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† ÙƒÙ„ Ù†ÙØ³ Ù„Ù‡Ø§ ØªØ¹Ø¨ ÙÙ‰ Ø§Ù„ÙƒÙ†ÙŠØ³Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© ÙˆÙ…Ø¹ Ø§Ù„Ø´Ø¹Ø¨ Ø§Ù„Ø£Ø±Ø«ÙˆØ°ÙˆÙƒØ³Ù‰ Ù„ÙƒÙ‰ ÙŠØµÙ†Ø¹ Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ Ù…Ø¹Ù‡Ù… Ø±Ø­Ù…Ø©. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english"<strong>16)</strong> Let us pray and ask for all Christ-loving rulers who asked us to remember them in our prayers, that the Lord our God may bless and remember them in His mercy and grant them favor before powerful rulers, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù¦)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ù…Ø­Ø¨Ù‰ Ø§Ù„Ù…Ø³ÙŠØ­ Ø§Ù„Ø±Ø¤Ø³Ø§Ø¡ Ø§Ù„Ø°ÙŠÙ† Ø£Ù…Ø±ÙˆÙ†Ø§ Ø£Ù† Ù†Ø°ÙƒØ±Ù‡Ù… Ø¨Ø§Ø³Ù…Ø§Ø¦Ù‡Ù… Ù„ÙƒÙ‰ ÙŠØ¨Ø§Ø±ÙƒÙ‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠØ°ÙƒØ±Ù‡Ù… Ø¨Ø§Ù„Ø±Ø­Ù…Ø© ÙˆÙŠØ¹Ø·ÙŠÙ‡Ù… Ø§Ù„Ù†Ø¹Ù…Ø© Ø£Ù…Ø§Ù… Ø§Ù„Ø³Ù„Ø§Ø·ÙŠÙ† Ø§Ù„Ø£Ø¹Ø²Ø§Ø¡. ÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english"<strong>17)</strong> Let us pray and ask for the poor, the weak, the farmers, and all those who are in adversities of any kind, that the Lord our God be merciful with us and them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù§)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø§Ù„Ù…Ø³Ø§ÙƒÙŠÙ† ÙˆØ§Ù„ÙÙ„Ø§Ø­ÙŠÙ† ÙˆØ§Ù„Ø¶Ø¹ÙØ§Ø¡ ÙˆØ¹Ù† ÙƒÙ„ Ù†ÙØ³ Ù…ØªØ¶Ø§ÙŠÙ‚Ø© Ø¨ÙƒÙ„ Ù†ÙˆØ¹ Ù„ÙƒÙ‰ ÙŠØªØ±Ø§Ø¡Ù Ø¹Ù„ÙŠÙ†Ø§ Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆØ¥ÙŠØ§Ù‡Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english"<strong>18)</strong> Let us pray and ask for those who are in the distress of jails, prisons, captivity, or exile, and for those bound by devils, that the Lord our God may free them from their hardships, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù¨)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† ÙƒÙ„ Ø§Ù„Ù…ØªØ¶Ø§ÙŠÙ‚ÙŠÙ† Ø§Ù„Ø°ÙŠÙ† ÙÙ‰ Ø§Ù„Ø³Ø¬ÙˆÙ† ÙˆÙÙ‰ Ø§Ù„Ù…Ø·Ø§Ø¨Ù‚ ÙˆØ§Ù„Ø°ÙŠÙ† ÙÙ‰ Ø§Ù„Ù†ÙÙ‰ Ø£Ùˆ ÙÙ‰ Ø§Ù„Ø³Ø¨Ù‰ ÙˆØ§Ù„Ù…Ø±Ø¨ÙˆØ·ÙŠÙ† Ù…Ù† Ø¬Ù‡Ø© Ø±Ø¨Ø§Ø·Ø§Øª Ø§Ù„Ø´ÙŠØ§Ø·ÙŠÙ† Ù„ÙƒÙ‰ ÙŠØ¹ØªÙ‚Ù‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ Ù…Ù† Ù…ØªØ§Ø¹Ø¨Ù‡Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english"<strong>19)</strong> Let us pray and ask for all the souls assembled with us this day, in this place, seeking forgiveness for their souls, that the Lord's kindness may encompass us and them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¡Ù©)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† ÙƒÙ„ Ø§Ù„Ù†ÙÙˆØ³ Ø§Ù„Ù…Ø¬ØªÙ…Ø¹Ø© Ù…Ø¹Ù†Ø§ Ø§Ù„ÙŠÙˆÙ… ÙÙ‰ Ù‡Ø°Ø§ Ø§Ù„Ù…ÙˆØ¶Ø¹ ÙŠØ·Ù„Ø¨ÙˆÙ† Ø§Ù„Ø±Ø­Ù…Ø© Ù„Ù†ÙÙˆØ³Ù‡Ù… Ù„ÙƒÙ‰ ØªØ¯Ø±ÙƒÙ†Ø§ Ù…Ø±Ø§Ø­Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ ÙˆØ¥ÙŠØ§Ù‡Ù…. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>   
        </tr>
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english"<strong>20)</strong> Let us pray and ask for those who asked us to remember them in our prayers, that the Lord our God may remember them according to His goodness at all times, and forgive our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¢Ù )</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ø§Ù„Ø°ÙŠÙ† Ø£ÙˆØµÙˆÙ†Ø§ Ø£Ù† Ù†Ø°ÙƒØ±Ù‡Ù… ÙƒÙ„ ÙˆØ§Ø­Ø¯ Ùˆ ÙˆØ§Ø­Ø¯ Ø¨Ø¥Ø³Ù…Ù‡ Ù„ÙƒÙ‰ ÙŠØ°ÙƒØ±Ù‡Ù… Ø§Ù„Ø±Ø¨ Ø¥Ù„Ù‡Ù†Ø§ Ø¨Ø§Ù„ØµÙ„Ø§Ø­ ÙÙ‰ ÙƒÙ„ Ø­ÙŠÙ†. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english"<strong>21)</strong> Let us pray and ask for the rising of the waters of the rivers this year, that Christ our God may bless and raise them according to their measure, give joy to the face of the earth, support us, save man and animal, and spare the world from death, scarcity, plagues, devastation, the sword of the enemies, </td>
            <td class="arabic"<strong>Ù¢Ù¡)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† ØµØ¹ÙˆØ¯ Ù…ÙŠØ§Ù‡ Ø§Ù„Ø£Ù†Ù‡Ø§Ø± ÙÙ‰ Ù‡Ø°Ù‡ Ø§Ù„Ø³Ù†Ø© Ù„ÙƒÙ‰ ÙŠØ¨Ø§Ø±ÙƒÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­ Ø¥Ù„Ù‡Ù†Ø§ ÙˆÙŠØµØ¹Ø¯Ù‡Ø§ ÙƒÙ…Ù‚Ø¯Ø§Ø±Ù‡Ø§ ÙˆÙŠÙØ±Ø­ ÙˆØ¬Ù‡ Ø§Ù„Ø£Ø±Ø¶ Ø¨Ø§Ù„Ù†ÙŠÙ„ ÙˆÙŠØ¹ÙˆÙ„Ù†Ø§ Ù†Ø­Ù† Ø§Ù„Ø¨Ø´Ø± ÙˆÙŠØ¹Ø·Ù‰ Ø§Ù„Ù†Ø¬Ø§Ø© Ù„Ø´Ø¹Ø¨Ù‡ ÙˆØ§Ù„Ø¨Ù‡Ø§Ø¦Ù… ÙˆÙŠØ±ÙØ¹ Ø¹Ù† Ø§Ù„Ø¹Ø§Ù„Ù… Ø§Ù„Ù…ÙˆØª ÙˆØ§Ù„ØºÙ„Ø§Ø¡ ÙˆØ§Ù„ÙˆØ¨Ø§Ø¡ ÙˆØ§Ù„ÙÙ†Ø§Ø¡ ÙˆØ§Ù„Ø¬Ù„Ø§Ø¡ ÙˆØ³ÙŠÙ Ø§Ù„Ø£Ø¹Ø¯Ø§Ø¡ </td>
        </tr>
        <tr id="table_${tableNumber}_row_26.5" class="north">
            <td class="english">and that he may grant peace and tranquility for our Holy Orthodox Church, and raise the state of the Orthodox Christians in the whole world now, and forever, and forgive us our sins. ${cross}</td>
            <td class="arabic">ÙˆÙŠØ¬Ø¹Ù„ Ø§Ù„Ù‡Ø¯ÙˆØ¡ ÙˆØ§Ù„Ø³Ù„Ø§Ù… ÙˆØ§Ù„Ø·Ù…Ø£Ù†ÙŠÙ†Ø© ÙÙ‰ Ø§Ù„Ø¨ÙŠØ¹Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© ÙˆÙŠØ±ÙØ¹ Ø´Ø£Ù† Ø§Ù„Ù…Ø³ÙŠØ­ÙŠÙŠÙ† ÙÙ‰ ÙƒÙ„ Ù…ÙƒØ§Ù† ÙˆÙÙ‰ ÙƒÙ„ Ø§Ù„Ù…Ø³ÙƒÙˆÙ†Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù†ÙØ³ Ø§Ù„Ø£Ø®ÙŠØ±. ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english"<strong>22)</strong> Let us pray and ask for this Holy Week of Pascha of our Good Savior, that He may complete it for us in peace and bring us the joy of His Holy Resurrection in safety, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>Ù¢Ù¢)</strong> ØµÙ„ÙˆØ§ ÙˆØ§Ø·Ù„Ø¨ÙˆØ§ Ø¹Ù† Ù‡Ø°Ù‡ Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø§Ù„ØªÙ‰ Ù„Ù…Ø®Ù„ØµÙ†Ø§ Ø§Ù„ØµØ§Ù„Ø­ Ù„ÙƒÙ‰ ÙŠÙƒÙ…Ù„Ù‡Ø§ Ù„Ù†Ø§ Ø¨Ø³Ù„Ø§Ù… ÙˆÙŠØ±ÙŠÙ†Ø§ Ø¨Ù‡Ø¬Ø© Ù‚ÙŠØ§Ù…ØªÙ‡ Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© ÙˆÙ†Ø­Ù† Ø¬Ù…ÙŠØ¹Ø§Ù‹ Ø³Ø§Ù„Ù…ÙŠÙ†.ÙˆÙŠØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. ${cross}</td>
        </tr>        
    </tbody>
</table>`;
  return html;
}

function nighttimeLitanies(tableNumber) {
  let html = `
        <table id="table_${tableNumber}" title="Nighttime Litanies">
            <caption class="caption" id="caption_table_${tableNumber}">Nighttime Litanies
            <span class="arabic-caption">Ø·Ù„Ø¨Ø§Øª Ø§Ù„Ù…Ø³Ø§Ø¡</span></caption>
<tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english"><strong>1) </strong>We ask and entreat You O Lord, God the Father the Pantocrator, and the Holy Only Begotten Son, the Creator and the Master of all, and the Holy Spirit the Life- Giver, the Holy Trinity before whom kneels down every knee in heaven and on earth. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡) </strong>Ù†Ø³Ø£Ù„ Ùˆ Ù†ØªØ¶Ø±Ø¹ Ø¥Ù„ÙŠÙƒ Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø³ÙŠØ¯ Ø§Ù„Ù„Ù‡ Ø§Ù„Ø¢Ø¨ Ø¶Ø§Ø¨Ø· Ø§Ù„ÙƒÙ„ ÙˆØ§Ù„Ø¥Ø¨Ù† Ø§Ù„ÙˆØ­ÙŠØ¯ Ø§Ù„Ù‚Ø¯ÙˆØ³ ØŒ Ø®Ø§Ù„Ù‚ Ø§Ù„ÙƒÙ„ Ùˆ Ù…Ø¯Ø¨Ø±Ù‡Ù… ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ Ø§Ù„Ù…Ø­ÙŠÙ‰ Ø§Ù„Ø«Ø§Ù„ÙˆØ« Ø§Ù„Ù…Ù‚Ø¯Ø³ Ø§Ù„Ø°Ù‰ ØªØ¬Ø«ÙˆØ§ Ù„Ù‡ ÙƒÙ„ Ø±ÙƒØ¨Ø© Ù…Ø§ ÙÙ‰ Ø§Ù„Ø³Ù…ÙˆØ§Øª Ùˆ Ù…Ø§ ÙÙ‰ Ø§Ù„Ø£Ø±Ø¶. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english"><strong>2) </strong>We pray for the heavenly peace, harmony of all churches in the world, the monasteries, all the holy assemblies, their dwellers and their keepers. O God, have compassion on Your creation and save it from all evil. We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic"><strong>Ù¢) </strong>Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¹Ø§Ù„ÙŠØ© ÙˆØªØ¢Ù„Ù Ø³Ø§Ø¦Ø± Ø§Ù„Ø¨ÙŠØ¹ Ø§Ù„ØªÙ‰ ÙÙ‰ Ø§Ù„Ø¹Ø§Ù„Ù… Ùˆ Ø§Ù„Ø£Ø¯ÙŠØ±Ø© ÙˆØ§Ù„Ù…Ø¬Ø§Ù…Ø¹ Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ùˆ Ø§Ù„Ø³ÙƒØ§Ù† ÙÙŠÙ‡Ø§ ÙˆØ§Ù„Ù‚ÙŠØ§Ù… Ø¨Ø£Ø­ÙˆØ§Ù„Ù‡Ø§ : ÙŠØ§ Ø§Ù„Ù„Ù‡ ØªØ­Ù†Ù† Ø¹Ù„Ù‰ Ø®Ù„ÙŠÙ‚ØªÙƒ Ùˆ Ù†Ø¬Ù‡Ø§ Ù…Ù† ÙƒÙ„ Ø³ÙˆØ¡. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english"><strong>3) </strong>Who through His power, arranged the life of man before his creation and made for him all things with His wisdom and adorned the skies with stars, the earth with vegetation, trees, and vineyards, and the valleys with pastures and flowers.</td>
                <td class="arabic"><strong>Ù£) </strong>ÙŠØ§ Ù…Ù† Ø¨Ù‚Ø¯Ø±ØªÙ‡ Ø¯Ø¨Ø± Ø­ÙŠØ§Ø© Ø§Ù„Ø¥Ù†Ø³Ø§Ù† Ù‚Ø¨Ù„ Ø®Ù„Ù‚ØªÙ‡ Ùˆ ØµÙ†Ø¹ Ù„Ù‡ Ø§Ù„Ù…ÙˆØ¬ÙˆØ¯Ø§Øª Ø¨Ø­ÙƒÙ…ØªÙ‡ ÙˆØ²ÙŠÙ† Ø§Ù„Ø³Ù…Ø§Ø¡ Ø¨Ø§Ù„Ù†Ø¬ÙˆÙ… ÙˆØ§Ù„Ø£Ø±Ø¶ Ø¨Ø§Ù„Ù†Ø¨Ø§ØªØ§Øª ÙˆØ§Ù„Ø£Ø´Ø¬Ø§Ø± ÙˆØ§Ù„ÙƒØ±ÙˆÙ… ÙˆØ§Ù„Ø£ÙˆØ¯ÙŠØ©ØŒ</td>
            </tr>
            <tr id="table_${tableNumber}_row_2.5" class="north">
                <td class="english">Now, O our King, accept the prayers of Your servants who place themselves in Your hands saying, We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">Ø£Ù†Øª Ø§Ù„Ø¢Ù† ÙŠØ§ Ù…Ù„ÙƒÙ†Ø§ Ø£Ù‚Ø¨Ù„ Ø·Ù„Ø¨Ø§Øª Ø¹Ø¨ÙŠØ¯Ùƒ Ø§Ù„ÙˆØ§Ù‚ÙÙŠÙ† Ø¨ÙŠÙ† ÙŠØ¯ÙŠÙƒ Ø§Ù„Ù‚Ø§Ø¦Ù„ÙŠÙ† Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english"><strong>4) </strong>O Great and Holy God who created man in Your image and likeness and gave him a living and a reasoning soul, have mercy O Lord, on Your creation which You have created and have compassion on it and grant us Your mercy from the height of Your holiness and from Your dwelling. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¤) </strong>ÙŠØ§ Ø§Ù„Ù„Ù‡ Ø§Ù„Ø¹Ø¸ÙŠÙ… Ø§Ù„Ù‚Ø¯ÙˆØ³ Ø§Ù„Ø°Ù‰ Ø®Ù„Ù‚ Ø§Ù„Ø¥Ù†Ø³Ø§Ù† Ø¹Ù„Ù‰ ØµÙˆØ±ØªÙ‡ ÙˆÙ…Ø«Ø§Ù„Ù‡ Ùˆ Ø¬Ø¹Ù„ ÙÙŠÙ‡ Ù†ÙØ³Ø§Ù‹ Ø­ÙŠØ© Ø¹Ø§Ù‚Ù„Ø© Ù†Ø§Ø·Ù‚Ø© . Ø£Ø±Ø­Ù… ÙŠØ§Ø±Ø¨ Ø¬Ø¨Ù„ØªÙƒ Ø§Ù„ØªÙ‰ Ø®Ù„Ù‚ØªÙ‡Ø§ Ùˆ ØªØ­Ù†Ù† Ø¹Ù„ÙŠÙ‡Ø§ ÙˆØ£Ø±Ø³Ù„ Ø¹Ù„ÙŠÙ†Ø§ Ø±Ø­Ù…ØªÙƒ Ù…Ù† Ø¹Ù„Ùˆ Ù‚Ø¯ÙˆØ³Ùƒ ÙˆÙ…Ø³ÙƒÙ†Ùƒ Ø§Ù„Ù…Ø³ØªØ¹Ø¯ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english"><strong>5) </strong>O You, who saved Your servant Noah, the righteous, his children, their wives and the clean and unclean animals from the flood in order to renew the earth once again. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¥) </strong>ÙŠØ§ Ù…Ù† Ø®Ù„ØµØª Ø¹Ø¨Ø¯Ùƒ Ù†ÙˆØ­Ø§Ù‹ Ø§Ù„Ø¨Ø§Ø± ÙˆÙ†Ø¬ÙŠØªÙ‡ Ù…Ù† Ø§Ù„Ø·ÙˆÙØ§Ù† Ù‡Ùˆ Ùˆ Ø¨Ù†ÙŠÙ‡ ÙˆÙ†Ø³Ø§Ø¡Ù‡Ù… Ùˆ Ø£ÙŠØ¶Ø§Ù‹ Ø§Ù„Ø­ÙŠÙˆØ§Ù†Ø§Øª Ø§Ù„Ø·Ø§Ù‡Ø±Ø© ÙˆØ§Ù„ØºÙŠØ± Ø§Ù„Ø·Ø§Ù‡Ø±Ø© Ù„Ø£Ø¬Ù„ ØªØ¬Ø¯ÙŠØ¯ Ø§Ù„Ø£Ø±Ø¶ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english"><strong>6) </strong>O You, the Creator and Provider of all, deliver Your people from the flood of the sea of this passing world, and prevent them along with animals from harm. Give all the birds their provisions, for You provide for the beasts and the young ravens their food in due season. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¦) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø¨Ø§Ø±Ù‰ Ø±Ø§Ø²Ù‚ Ø§Ù„Ù€ÙƒÙ„. Ù†Ø¬ Ø´Ø¹Ø¨Ùƒ Ù…Ù† Ø·ÙˆÙØ§Ù† Ø¨Ø­Ø± Ø§Ù„Ø¹Ø§Ù„Ù… Ø§Ù„Ø²Ø§Ø¦Ù„ Ùˆ Ø£Ø±ÙØ¹ Ø¹Ù†Ù‡Ù… ÙƒÙ„ Ù…ÙƒØ±ÙˆÙ‡. Ùˆ ÙƒÙ„ Ø§Ù„Ø­ÙŠÙˆØ§Ù†Ø§Øª Ø£ÙŠØ¶Ø§Ù‹ Ùˆ Ø³Ø§Ø¦Ø± Ø§Ù„Ø·ÙŠÙˆØ± Ø£Ø¹Ø·Ù‡Ø§ Ù‚ÙˆØªÙ‡Ø§ Ù„Ø£Ù†Ùƒ ØªØ¹Ø·Ù‰ Ù„Ù„Ø¨Ù‡Ø§Ø¦Ù… Ø±Ø²Ù‚Ø§Ù‹ Ùˆ Ù„ÙØ±Ø§Ø® Ø§Ù„ØºØ±Ø¨Ø§Ù† Ù‚ÙˆØªØ§Ù‹. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english"><strong>7) </strong>O You, who was received as a guest by Your servant Abraham the head of the Patriarchs, sat at his table, and blessed his offspring. O our King, accept the prayers of Your servants and Your priests standing before You.</td>
                <td class="arabic"><strong>Ù§) </strong>ÙŠØ§ Ù…Ù† Ø¶ÙŠÙ Ø¹Ù†Ø¯ Ø¹Ø¨Ø¯Ù‡ Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø±Ø¦ÙŠØ³ Ø§Ù„Ø¢Ø¨Ø§Ø¡ ÙˆØ£ØªÙƒØ£ Ø¹Ù„Ù‰ Ù…Ø§Ø¦Ø¯ØªÙ‡ Ùˆ Ø¨Ø§Ø±Ùƒ ÙÙ‰ Ø²Ø±Ø¹Ù‡ Ø£Ù†Øª Ø§Ù„Ø¢Ù† ÙŠØ§ Ù…Ù„ÙƒÙ†Ø§ Ø£Ù‚Ø¨Ù„ Ø·Ù„Ø¨Ø© Ø¹Ø¨ÙŠØ¯Ùƒ Ùˆ ÙƒÙ‡Ù†ØªÙƒ Ø§Ù„ÙˆØ§Ù‚ÙÙŠÙ† Ø¨ÙŠÙ† ÙŠØ¯ÙŠÙƒ</td>
            </tr>
            <tr id="table_${tableNumber}_row_6.5" class="north">
                <td class="english">Have mercy on the world, and save Your people from all hardship, dwell in them, and be in their midst. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">ÙˆØªØ±Ø§Ø¡Ù Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ø§Ù„Ù… ÙˆØ®Ù„Øµ Ø´Ø¹Ø¨Ùƒ Ù…Ù† ÙƒÙ„ Ø´Ø¯Ø© Ùˆ Ø­Ù„ ÙÙŠÙ‡Ù… Ùˆ Ø³Ø± Ø¨ÙŠÙ†Ù‡Ù… Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english"><strong>8) </strong>We ask You, O Lord, to guard us from all evil and have compassion on Your creation and all Your people, for the eyes of everyone wait upon you, for You give them their food in due season. O You who gives food to all flesh, the help of the helpless and the hope of the hopeless; We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic"><strong>Ù¨) </strong>Ù†Ø·Ù„Ø¨ Ø¥Ù„ÙŠÙƒ ÙŠØ§Ø±Ø¨ Ù„ÙƒÙ‰ ØªØ­Ø±Ø³Ù†Ø§ Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø´Ø±ÙˆØ± . Ùˆ ØªØ±Ø§Ø¡Ù Ø¹Ù„Ù‰ Ø®Ù„ÙŠÙ‚ØªÙƒ Ùˆ Ø¬Ù…ÙŠØ¹ Ø´Ø¹Ø¨Ùƒ Ù„Ø£Ù† Ø£Ø¹ÙŠÙ† Ø§Ù„ÙƒÙ„ ØªØªØ±Ø¬Ø§Ùƒ ÙˆØ£Ø¹Ø·Ù‡Ù… Ø·Ø¹Ø§Ù…Ù‡Ù… ÙÙ‰ Ø­ÙŠÙ†Ù‡. Ø§Ù„Ù…ØºØ°Ù‰ ÙƒÙ„ Ø°Ù‰ Ø¬Ø³Ø¯ . ÙŠØ§ Ø¹ÙˆÙ† Ù…Ù† Ù„Ø§ Ø¹ÙˆÙ† Ù„Ù‡ . ÙŠØ§ Ø±Ø¬Ø§Ø¡ Ù…Ù† Ù„Ø§ Ø±Ø¬Ø§Ø¡ Ù„Ù‡ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english"><strong>9) </strong>O You, who looks to the humble with watchful eyes of protection, who saved Joseph from his masterâ€™s wife, set him King over Egypt and all its ways, and spared him the days of hardship. Then, his brothers and father came, knelt down before him and took from him wheat for the nourishment of their children and their cattle.</td>
                <td class="arabic"><strong>Ù©) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù†Ø§Ø¸Ø± Ø¥Ù„Ù‰ Ø§Ù„Ù…ØªÙˆØ§Ø¶Ø¹ÙŠÙ† Ø¨Ø¹ÙŠÙ† Ø¹Ù†Ø§ÙŠØªÙƒ Ø§Ù„ØªÙ‰ Ù„Ø§ ØªØºÙÙ„ ÙˆØ®Ù„ØµØª ÙŠÙˆØ³Ù Ù…Ù† Ø¥Ù…Ø±Ø£Ø© Ø³ÙŠØ¯Ø© ÙˆØ¬Ø¹Ù„ØªÙ‡ Ù…Ù„ÙƒØ§Ù‹ Ø¹Ù„Ù‰ Ù…ØµØ± ÙˆØ£Ø­ÙˆØ§Ù„Ù‡Ø§ Ùˆ Ø£Ø¬Ø²Øª Ø¹Ù„ÙŠÙ‡ Ø£ÙŠØ§Ù… Ø§Ù„Ø´Ø¯Ø© . ÙØ£ØªÙ‰ Ø¥Ù„ÙŠÙ‡ Ø£Ø®ÙˆØ§ØªÙ‡ ÙˆØ£Ø¨ÙˆÙ‡ ÙŠØ¹Ù‚ÙˆØ¨ ÙˆØ³Ø¬Ø¯ÙˆØ§ Ø¨ÙŠÙ† ÙŠØ¯ÙŠÙ‡ ÙˆØ£Ø®Ø°ÙˆØ§ Ù…Ù†Ù‡ Ø­Ù†Ø·Ø© Ù„Ù‚ÙˆØª Ø¨Ù†ÙŠÙ‡Ù… ÙˆÙ…ÙˆØ§Ø´ÙŠÙ‡Ù….</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="english">Likewise we bow down with our heads and kneel before You, O our Creator, and provider, and we thank You for everything, concerning everything, and in everything. We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic">Ù†Ø­Ù† Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø£ÙŠØ¶Ø§Ù‹ Ù†Ø®Ø¶Ø¹ Ù„Ùƒ Ø¨Ø±Ø¤ÙˆØ³Ù†Ø§ ÙˆÙ†Ø³Ø¬Ø¯ Ù…Ø§ Ø¨ÙŠÙ† ÙŠØ¯ÙŠÙƒ Ùˆ Ù†Ø´ÙƒØ±Ùƒ ÙŠØ§ Ø®Ø§Ù„Ù‚Ù†Ø§ ÙˆØ±Ø§Ø²Ù‚Ù†Ø§ Ø¹Ù„Ù‰ Ù‡Ø°Ø§ Ø§Ù„Ø­Ø§Ù„ ÙˆÙÙ‰ ÙƒÙ„ Ø­Ø§Ù„ ÙˆÙ…Ù† Ø£Ø¬Ù„ Ø³Ø§Ø¦Ø± Ø§Ù„Ø£Ø­ÙˆØ§Ù„ ÙˆÙ†Ø¬Ù†Ø§ ÙŠØ§ Ø§Ù„Ù„Ù‡ Ù…Ù† ÙƒÙ„ Ø´Ø¯Ø© Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english"><strong>10) </strong>O God, the Word of the Father, who works through the Law, the prophets, and the Old Testament, and perfects them. Save Your people from all tribulations and govern their lives according to Your good will. Save us from famines and afflictions. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡Ù ) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø¥Ù„Ù‡ ÙƒÙ„Ù…Ø© Ø§Ù„Ø¢Ø¨ Ø§Ù„Ù€ÙØ§Ø¹Ù„ ÙÙ‰ Ø§Ù„Ù†Ø§Ù…ÙˆØ³ ÙˆØ§Ù„Ø£Ù†Ø¨ÙŠØ§Ø¡ ÙˆØ§Ù„Ø¹Ù‡Ø¯ Ø§Ù„Ù‚Ø¯ÙŠÙ… ÙˆÙ…ÙƒÙ…Ù„Ù‡Ù… Ø®Ù„Øµ Ø´Ø¹Ø¨Ùƒ Ù…Ù† ÙƒÙ„ Ø¶ÙŠÙ‚Ø© ÙˆØ¯Ø¨Ù€Ø± Ø­Ù€ÙŠØ§ØªÙ‡Ù… ÙƒØ­Ø³Ø¨ Ø¥Ø±Ø§Ø¯ØªÙƒ Ø§Ù„ØµØ§Ù„Ø­Ø© Ùˆ Ø£Ø±ÙØ¹ Ø¹Ù†Ø§ ÙƒÙ„ Ø§Ù„Ù‚Ø­Ø· Ùˆ Ø§Ù„Ø¨Ù„ÙŠØ©. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="north">
                <td class="english"><strong>11) </strong>O You, who supported the people of Israel for forty years in the desert of Sinai; having no houses or storehouses, now O my master, protect Your people, support them and bless their homes with the heavenly blessing. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡Ù¡) </strong>ÙŠØ§ Ù…Ù† Ø¹Ø§Ù„ Ø§Ù„Ø´Ø¹Ø¨ Ø§Ù„Ø¥Ø³Ø±Ø§Ø¦ÙŠÙ„Ù‰ Ø£Ø±Ø¨Ø¹ÙŠÙ† Ø³Ù†Ø© ÙÙ‰ Ø·ÙˆØ± Ø³ÙŠÙ†Ø§Ø¡ Ùˆ Ù„Ù… ÙŠÙƒÙ† Ù„Ù‡Ù… Ø¨ÙŠÙˆØª ÙˆÙ„Ø§ Ù…Ø®Ø§Ø²Ù† . Ø£Ù†Øª ÙŠØ§ Ø³ÙŠØ¯Ù‰ Ø£Ø­ÙØ¸ Ø´Ø¹Ø¨Ùƒ Ùˆ Ø¹Ù„Ù‡Ù… Ùˆ Ø¨Ø§Ø±Ùƒ ÙÙ‰ Ù…Ù†Ø§Ø²Ù„Ù‡Ù… Ùˆ Ù…Ø®Ø§Ø²Ù†Ù‡Ù… Ø¨Ø§Ù„Ø¨Ø±ÙƒØ§Øª Ø§Ù„Ø³Ù…Ø§Ø¦ÙŠØ©. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english"><strong>12) </strong>O You, who accepted the prayer of Elijah the Tishbite, when the sky rained and the earth gave fruit, and blessed the barrel of flour and the cruse of oil in the house of the widow. Accept the prayers of Your people through the prayers of Your holy saints and pure prophets. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡Ù¢) </strong>ÙŠØ§ Ù…Ù† Ù‚Ø¨Ù„Øª Ø·Ù€Ù„Ø¨Ø© Ø¥ÙŠÙ„ÙŠØ§ Ø§Ù„ØªØ³Ø¨ÙŠØªÙ‰ Ø¹Ù†Ø¯Ù…Ø§ Ø£Ù…Ø·ÙŽØ±ÙŽØª Ø§Ù„Ø³Ù…ÙˆØ§Øª Ùˆ Ø£Ù†Ø¨ÙŽØªÙŽØª Ø§Ù„Ø£Ø±Ø¶ ÙˆØ¨Ø§Ø±ÙƒØª ÙÙ‰ ÙƒÙŠÙ„Ø© Ø§Ù„Ø¯Ù‚ÙŠÙ‚ ÙˆÙ‚Ø³Ù€Ø· Ø§Ù„Ø²ÙŠØª ÙÙ‰ Ø¨ÙŠØª Ø§Ù„Ø£Ø±Ù…Ù„Ø© . Ø£Ù‚Ù€Ø¨Ù„ Ø·Ù„Ø¨Ø© Ø´Ø¹Ø¨Ùƒ Ø¨ØµÙ„ÙˆØ§Øª Ù‚Ø¯ÙŠØ³ÙŠÙƒ Ùˆ Ø£Ù†Ø¨ÙŠØ§Ø¦Ùƒ Ø§Ù„Ø£Ø·Ù‡Ø§Ø±. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english"><strong>13) </strong>O God, with eyes full of mercy, have compassion on the world and bless their crops and their storehouses, even the little that they have. Bring up the waters of the rivers according to their measure, and grant moderation to the winds.</td>
                <td class="arabic"><strong>Ù¡Ù£) </strong>ÙŠØ§ Ø§Ù„Ù„Ù‡ ØªØ±Ø§Ø¡Ù Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ø§Ù„Ù… Ø¨Ø¹ÙŠÙ† Ø§Ù„Ø±Ø­Ù…Ø© Ùˆ Ø§Ù„Ø±Ø£ÙØ© Ùˆ Ø¨Ø§Ø±Ùƒ ÙÙ‰ ÙƒÙŠÙ„ ØºÙ„Ø§ØªÙ‡Ù… Ùˆ Ù…Ø®Ø§Ø²Ù†Ù‡Ù… ÙˆÙÙ‰ Ø§Ù„Ù‚Ù„ÙŠÙ„ Ø§Ù„Ø°Ù‰ Ø¹Ù†Ø¯Ù‡Ù… ÙˆØ£ØµØ¹Ø¯ Ù…ÙŠØ§Ù‡ Ø§Ù„Ø£Ù†Ù‡Ø§Ø± ÙƒÙ…Ù‚Ø¯Ø§Ø±Ù‡Ø§ ÙˆÙ‡Ø¨ Ø£Ø¹ØªØ¯Ø§Ù„Ø§ Ù„Ù„Ø£Ù‡ÙˆÙŠØ© ØŒ</td>
            </tr>
            <tr id="table_${tableNumber}_row_13.5" class="north">
                <td class="english">Bless the Nile of Egypt this year and every year. Give joy to the face of the earth and sustain us. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">Ùˆ Ù†ÙŠÙ„ Ù…ØµØ± Ø¨Ø§Ø±ÙƒÙ‡ ÙÙ‰ Ù‡Ø°Ø§ Ø§Ù„Ø¹Ø§Ù… ÙˆÙƒÙ„ Ø¹Ø§Ù… Ùˆ ÙØ±Ø­ ÙˆØ¬Ù‡ Ø§Ù„Ø£Ø±Ø¶ ÙˆØ¹Ù„Ù†Ø§ Ù†Ø­Ù† Ø§Ù„Ø¨Ø´Ø± Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english"><strong>14) </strong>O You, who accepted the repentance of the Ninevites, when they fasted together, and received the confession of the right-hand thief upon the cross. Likewise, make us worthy to please You and to gain Your compassion, crying out and saying, "Remember us, O Lord, when You come into Your kingdom."</td>
                <td class="arabic"><strong>Ù¡Ù¤) </strong>ÙŠØ§ Ù…Ù† Ù‚Ø¨Ù„Øª ØªÙˆØ¨Ø© Ø£Ù‡Ù„ Ù†ÙŠÙ†ÙˆÙ‰ Ø¹Ù†Ø¯Ù…Ø§ ØµØ§Ù… Ø§Ù„Ø¬Ù…ÙŠØ¹ . ÙˆÙ‚Ø¨Ù„Øª Ø¥Ù„ÙŠÙƒ Ø£Ø¹ØªØ±Ø§Ù Ø§Ù„Ù„Øµ Ø§Ù„ÙŠÙ…ÙŠÙ† Ø¹Ù„Ù‰ Ø§Ù„ØµÙ„ÙŠØ¨ Ù‡ÙƒØ°Ø§ Ù†Ø­Ù† Ø£Ø¬Ø¹Ù„Ù†Ø§ Ù…Ø³ØªØ­Ù‚ÙŠÙ† Ù„Ø±Ø¶Ø§Ùƒ ÙˆØªØ­Ù†Ù†Ùƒ Ù„Ù†Ø¯Ø¹ÙˆÙƒ Ù‚Ø§Ø¦Ù„ÙŠÙ† Ø£Ø°ÙƒØ±Ù†Ø§ ÙŠØ§Ø±Ø¨ Ø¥Ø°Ø§ Ø¬Ø¦Øª ÙÙ‰ Ù…Ù„ÙƒÙˆØªÙƒ.</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">Accept the repentance of Your servants, their confessions, their fasting, their prayers and their offerings, which are offered on Your Holy altars as sweet incense and have mercy on them. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">ÙˆØ£Ù‚Ø¨Ù„ ØªÙˆØ¨Ø© Ø¹Ø¨ÙŠØ¯Ùƒ Ùˆ ØµÙˆÙ…Ù‡Ù… ÙˆØµÙ„ÙˆØ§ØªÙ‡Ù… Ùˆ Ù‚Ø±Ø§Ø¨ÙŠÙ†Ù‡Ù… Ø§Ù„Ù…Ø±ÙÙˆØ¹Ø© Ø¹Ù„Ù‰ Ù…Ø°Ø§Ø¨Ø­Ùƒ Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø¨Ø®ÙˆØ±Ø§Ù‹ Ø·ÙŠØ¨Ø§Ù‹ ÙˆØ£Ø±Ø­Ù…Ù‡Ù… Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english"><strong>15) </strong>O You the Mighty Provider, the Chastiser, the Healer and Physician of spirits and bodies, who tested his servant Job, healed him from his calamity and recompensed him with more than what he had,</td>
                <td class="arabic"><strong>Ù¡Ù¥) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø¯Ø¨Ø± Ø§Ù„Ù‚ÙˆÙ‰ Ø§Ù„Ù…Ø¤Ø¯Ø¨ Ø§Ù„Ø´Ø§ÙÙ‰ Ø·Ø¨ÙŠØ¨ Ø§Ù„Ø£Ø±ÙˆØ§Ø­ ÙˆØ§Ù„Ø£Ø¬Ø³Ø§Ø¯ Ø§Ù„Ø°Ù‰ Ø£Ù…ØªØ­Ù† Ø¹Ø¨Ø¯Ù‡ Ø£ÙŠÙˆØ¨ Ùˆ Ø´ÙØ§Ù‡ Ù…Ù† Ø¨Ù„Ø§ÙŠØ§Ù‡ ÙˆØ±Ø¯ Ø¹Ù„ÙŠÙ‡ Ù…Ø§ ÙÙ‚Ø¯ Ù…Ù†Ù‡ Ø£Ø²ÙŠØ¯ Ù…Ù…Ø§ ÙƒØ§Ù†.</td>
            </tr>
            <tr id="table_${tableNumber}_row_16.5" class="north">
                <td class="english">have mercy on Your people and save them from all calamities, tribulations, temptations, and hardships, O You Who gives victory to those who trust in You. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">Ø£Ø±Ø­Ù… Ø´Ø¹Ø¨Ùƒ Ùˆ Ø®Ù„ØµÙ‡ Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¨Ù„Ø§ÙŠØ§ Ùˆ Ø§Ù„Ù…Ø­Ù† ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø¨ Ùˆ Ø§Ù„Ø´Ø¯Ø§Ø¦Ø¯ . ÙŠØ§ Ù†Ø§ØµØ± Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…ØªÙˆÙƒÙ„ÙŠÙ† Ø¹Ù„ÙŠÙƒ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="south"> 
                <td class="english"><strong>16) </strong>O Christ our God, the Word of the Father, who sanctified His holy disciples, washed their feet and made them pillars of faith and leaders of the believers, who through them satisfied the yearning souls, and taught them to pray saying, "Our Father who art in the heaven... Lead us not into temptation, but deliver us from evil." We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡Ù¦) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­ Ø¥Ù„Ù‡Ù†Ø§ ÙƒÙ„Ù…Ø© Ø§Ù„Ø¢Ø¨ Ø§Ù„Ø°Ù‰ Ø¹Ø§Ù‡Ø¯ ØªÙ„Ø§Ù…ÙŠØ°Ù‡ Ø§Ù„Ø£Ø·Ù‡Ø§Ø± ÙˆØºØ³Ù„ Ø£Ù‚Ø¯Ø§Ù…Ù‡Ù… Ùˆ Ø¬Ø¹Ù„Ù‡Ù… Ø£Ø¦Ù…Ø© Ù„Ù„Ù…Ø¤Ù…Ù†ÙŠÙ† Ùˆ Ù…Ù†Ø§Ø±Ø§Ù‹ Ù„Ù„Ø¯ÙŠÙ† ÙˆØ£Ø´Ø¨Ø¹ Ø¨Ù‡Ù… Ø§Ù„Ù†ÙÙˆØ³ Ø§Ù„Ø¬Ø§Ø¦Ø¹Ø© Ùˆ Ø¹Ù„Ù…Ù‡Ù… Ø§Ù„ØµÙ„Ø§Ø© Ù‚Ø§Ø¦Ù„ÙŠÙ† : Ø£Ø¨Ø§Ù†Ø§ Ø§Ù„Ø°Ù‰ ÙÙ‰ Ø§Ù„Ø³Ù…ÙˆØ§Øª Ù„Ø§ ØªØ¯Ø®Ù„Ù†Ø§ Ø§Ù„ØªØ¬Ø§Ø±Ø¨ Ù„ÙƒÙ† Ù†Ø¬Ù†Ø§ Ù…Ù† Ø§Ù„Ø´Ø±ÙŠØ± Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north"> 
                <td class="english"><strong>17) </strong>O miracle and wonder maker, who fed the thousands with the five loaves, raised the dead, and blessed the wedding of Cana of Galilee. Now, O Master, bless the bread, oil, plants, beehives, trades, and all the works of Your servants. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡Ù§) </strong>ÙŠØ§ ØµØ§Ù†Ø¹ Ø§Ù„Ø¹Ø¬Ø§Ø¦Ø¨ Ùˆ Ø§Ù„Ù…Ø¹Ø¬Ø²Ø§Øª ÙˆÙ…Ù† Ø£Ø´Ø¨Ø¹ Ø§Ù„Ø£Ù„ÙˆÙ Ù…Ù† Ø§Ù„Ø®Ù…Ø³ Ø®Ø¨Ø²Ø§Øª Ùˆ Ø£Ù‚Ø§Ù… Ø§Ù„Ø£Ù…ÙˆØ§Øª Ùˆ Ø¨Ø§Ø±Ùƒ ÙÙ‰ Ø§Ù„Ø¹Ø±Ø³ Ø¨Ù‚Ø§Ù†Ø§ Ø§Ù„Ø¬Ù„ÙŠÙ„ Ø§Ù„Ø¢Ù† Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø³ÙŠØ¯ Ø¨Ø§Ø±Ùƒ Ù„Ø¹Ø¨ÙŠØ¯Ùƒ ÙÙ‰ Ø®Ø¨Ø²Ù‡Ù… ÙˆØ²ÙŠØªÙ‡Ù… Ùˆ Ø²Ø±Ø¹Ù‡Ù… Ùˆ Ù†Ø­Ù„Ù‡Ù… ÙˆÙÙ‰ Ù…ØªØ§Ø¬Ø±Ù‡Ù… ÙˆØµÙ†Ø§Ø¦Ø¹Ù‡Ù… ÙˆÙ…Ø¨Ø§Ø´Ø±Ø§ØªÙ‡Ù… Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english"><strong>18) </strong>O Lord, save Your people and protect them with the life-giving sign of Your cross. Raise the state of the Christians all over the world, and soften the hearts of their rulers towards them.</td>
                <td class="arabic"><strong>Ù¡Ù¨) </strong>ÙŠØ§Ø±Ø¨ Ø®Ù„Øµ Ø´Ø¹Ø¨Ùƒ Ùˆ Ø­ÙˆØ· Ø¨Ù‡Ù… Ù…Ù† ÙƒÙ„ Ù†Ø§Ø­ÙŠØ© Ø¨Ø£Ø´Ø§Ø±Ø© ØµÙ„ÙŠØ¨Ùƒ Ø§Ù„Ù…Ø­Ù‰ ÙˆØ£Ø±ÙØ¹ Ø´Ø£Ù† Ø§Ù„Ù…Ø³ÙŠØ­ÙŠÙŠÙ† ÙÙ‰ Ø§Ù„Ù…Ø³ÙƒÙˆÙ†Ø© ÙƒÙ„Ù‡Ø§ ÙˆØ­Ù†Ù† Ø¹Ù„ÙŠÙ‡Ù… Ù‚Ù„ÙˆØ¨ Ø§Ù„Ù…ØªÙˆÙ„ÙŠÙ† Ø¹Ù„ÙŠÙ‡Ù… </td>
            </tr>
            <tr id="table_${tableNumber}_row_19.5" class="south">
                <td class="english">Fill their hearts with compassion towards our brethren, the poor, and the needy, and keep every evil thing far from them. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">ÙˆØ¹Ø·Ù Ù‚Ù„ÙˆØ¨Ù‡Ù… Ø¹Ù„Ù‰ Ø£Ø®ÙˆØªÙ†Ø§ Ø§Ù„Ù…Ø³Ø§ÙƒÙŠÙ† ÙˆØ§Ù„Ù…Ø¹ÙˆØ²ÙŠÙ† Ø¨Ø§Ù„Ø¥Ø­Ø³Ø§Ù† ÙˆØ£Ø¨Ø¹Ø¯ Ø¹Ù†Ù‡Ù… ÙƒÙ„ Ù…ÙƒØ±ÙˆÙ‡ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english"><strong>19) </strong>O You, who entrusted us with Your Holy covenant, Your Body and Blood on the altar daily through the descent of Your Holy Spirit on the bread and wine, and commanded us, saying, "Do this in remembrance of Me." We ask you, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¡Ù©) </strong>ÙŠØ§Ø±Ø¨ ÙŠØ§ Ù…Ù† ØªØ±Ùƒ Ù„Ù†Ø§ Ø¹Ù‡Ø¯Ù‡ Ø§Ù„Ù…Ù‚Ø¯Ø³  Ø¬Ø³Ø¯Ù‡ Ùˆ Ø¯Ù…Ù‡ Ø­Ø§Ø¶Ø±Ø§Ù‹ Ø¹Ù†Ø¯Ù†Ø§ ÙƒÙ„ ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø°Ø¨Ø­ Ø®Ø¨Ø²Ø§Ù‹ Ùˆ Ø®Ù…Ø±Ø§Ù‹ Ø¨Ø­Ù„ÙˆÙ„ Ø±ÙˆØ­ Ù‚Ø¯Ø³Ù‡ Ùˆ Ø£ÙˆØµØ§Ù†Ø§ Ù‚Ø§Ø¦Ù„Ø§Ù‹ Ù‡Ø°Ø§ Ø£ØµÙ†Ø¹ÙˆÙ‡ Ù„Ø°ÙƒØ±Ù‰ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english"><strong>20) </strong>O Christ our God, have mercy on Your people and the successors of Your Apostles. Give blessing to the fruit of the earth, and gladness to the heart of man through abundance of fruits and blessings. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¢Ù ) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­ Ø¥Ù„Ù‡Ù†Ø§ Ø£Ø±Ø­Ù… Ø´Ø¹Ø¨Ùƒ ÙˆØ®Ù„ÙŠÙØ© Ø±Ø³Ù„Ùƒ ÙˆØ£Ø¹Ø· Ø¨Ø±ÙƒØ© Ù„Ø«Ù…Ø±Ø§Øª Ø§Ù„Ø£Ø±Ø¶ ÙˆØ£Ø¨Ù‡Ø¬ Ù‚Ù„Ø¨ Ø§Ù„Ø¥Ù†Ø³Ø§Ù† Ø¨ÙƒØ«Ø±Ø© Ø«Ù…Ø±Ø§Øª Ø§Ù„Ù‚Ù…Ø­ Ùˆ Ø§Ù„Ø®Ù…Ø± ÙˆØ§Ù„Ø²ÙŠØª Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english"><strong>21) </strong>O Begotten of the Father, who was incarnate of the blessed Virgin, Saint Mary, in the fullness of time, who said to His holy disciples, "Go and make disciples of all the nations baptizing them, teaching them to observe all things that I have commanded you,</td>
                <td class="arabic"><strong>Ù¢Ù¡) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…ÙˆÙ„ÙˆØ¯ Ù…Ù† Ø§Ù„Ø¢Ø¨ Ø§Ù„Ø°Ù‰ ØªØ¬Ø³Ø¯ Ù…Ù† Ø§Ù„Ø¨ÙƒØ± Ø§Ù„Ø¨ØªÙˆÙ„ Ø§Ù„Ø¹Ø°Ø±Ø§Ø¡ Ù…Ø±ØªÙ…Ø±ÙŠÙ… ÙÙ‰ Ø¢Ø®Ø± Ø§Ù„Ø£ÙŠØ§Ù… Ø§Ù„Ø°Ù‰ Ù‚Ø§Ù„ Ù„ØªÙ„Ø§Ù…ÙŠØ°Ù‡ Ø§Ù„Ù€Ù‚Ø¯ÙŠØ³ÙŠÙ† Ø£Ù…Ø¶ÙˆØ§ Ùˆ ØªÙ„Ù…Ø°ÙˆØ§ ÙƒÙ„ Ø§Ù„Ø£Ù…Ù… Ùˆ Ø¹Ù…Ø¯ÙˆÙ‡Ù… ÙˆØ¹Ù„Ù…ÙˆÙ‡Ù… Ø¬Ù…ÙŠØ¹ Ù…Ø§ Ø£ÙˆØµÙŠØªÙƒÙ… Ø¨Ù‡.</td>
            </tr>
            <tr id="table_${tableNumber}_row_22.5" class="north">
                <td class="english">I am with you always even unto the end of the age," be also with Your people who cry out to You saying: We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"> Ù‡Ùˆ Ø°Ø§ Ø£Ù†Ø§ Ù…Ø¹ÙƒÙ… ÙƒÙ„ Ø§Ù„Ø£ÙŠØ§Ù… ÙˆØ¥Ù„Ù‰ Ø£Ù†Ù‚Ø¶Ø§Ø¡ Ø§Ù„Ø¹Ø§Ù„Ù…. ÙƒÙ† Ø£ÙŠØ¶Ø§Ù‹ Ù…Ø¹ Ø´Ø¹Ø¨Ùƒ Ø§Ù„ØµØ§Ø±Ø®ÙŠÙ† Ø¥Ù„ÙŠÙƒ Ù‚Ø§Ø¦Ù„ÙŠÙ† Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english"><strong>22) </strong>O Forgiver of sins and Giver of gifts, forgive the sins of Your people and cleanse them from all uncleanliness. Wash them from all deceit and keep them from bearing false witness and all envy and slander.</td>
                <td class="arabic"><strong>Ù¢Ù¢) </strong>ÙŠØ§ ØºØ§ÙØ± Ø§Ù„Ø®Ø·Ø§ÙŠØ§ Ùˆ Ù…Ø§Ù†Ø­ Ø§Ù„Ø¹Ø·Ø§ÙŠØ§ Ø£ØºÙØ± Ø®Ø·Ø§ÙŠØ§ Ø´Ø¹Ø¨Ùƒ ÙˆØ·Ù‡Ø±Ù‡Ù… Ù…Ù† ÙƒÙ„ Ø¯Ù†Ø³ ÙˆØ£ØºØ³Ù„Ù‡Ù… Ù…Ù† ÙƒÙ„ ØºØ´ Ø£Ø¨Ø¹Ø¯ Ø¹Ù†Ù‡Ù… Ø§Ù„ÙŠÙ…ÙŠÙ† Ø§Ù„Ø­Ø§Ù†Ø´Ø© ÙˆÙƒÙ„ Ø­Ø³Ø¯ ÙˆÙƒÙ„ Ù†Ù…ÙŠÙ…Ø©</td>
            </tr>
            <tr id="table_${tableNumber}_row_23.5" class="south">
                <td class="english">Take away from their hearts all evil thought, suspicion, unbelief, pride, and hardness of heart. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">ÙˆØ£Ù†Ø²Ø§Ø¹ Ù…Ù† Ù‚Ù„ÙˆØ¨Ù‡Ù… Ø§Ù„ÙÙƒØ± Ø§Ù„Ø±Ø¯Ø¦ ÙˆØ§Ù„ÙˆØ³ÙˆØ§Ø³ ÙˆÙƒÙ„ Ø§Ù„Ø´ÙƒÙˆÙƒ ÙˆØ§Ù„ÙƒØ¨Ø±ÙŠØ§Ø¡ ÙˆÙƒÙ„ Ù‚Ø³Ø§ÙˆØ© Ùˆ ØªØ¬Ø¨Ø± Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north"> 
                <td class="english"><strong>23) </strong>You are the fortification of our salvation, O Theotokos, the invincible fortress, take away the council of the adversaries, and turn the afflictions of Your servants into joy. Defend our cities, fight for the Orthodox kings and rulers, and intercede for the peace of the world and the churches. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¢Ù£) </strong>Ø£Ù†ØªÙ Ù‡Ù‰ Ø³ÙˆØ± Ø®Ù„Ø§ØµÙ†Ø§ ÙŠØ§ ÙˆØ§Ù„Ø¯Ø© Ø§Ù„Ø¥Ù„Ù‡ Ø§Ù„Ø­ØµÙ† Ø§Ù„Ù…Ù†ÙŠØ¹ Ø§Ù„ØºÙŠØ± Ø§Ù„ÙˆØ§Ù‚Ø¹ Ø¥Ù„ÙŠÙƒ Ù†Ø³Ø£Ù„: Ù…Ø´ÙˆØ±Ø© Ø§Ù„Ù…Ø¹Ø§Ù†Ø¯ÙŠÙ† Ù„Ù†Ø§ Ø£Ø¨Ø·Ù„Ù‰  ÙˆØ­Ø²Ù† Ø¹Ø¨ÙŠØ¯Ùƒ Ø¥Ù„Ù‰ ÙØ±Ø­ Ø±Ø¯Ù‰ ÙˆÙ„Ù…Ø¯ÙŠÙ†ØªÙ†Ø§ ØµÙˆÙ†Ù‰ ÙˆØ¹Ù† Ø§Ù„Ù…Ù„ÙˆÙƒ Ø§Ù„Ø£Ø±Ø«ÙˆØ°ÙƒØ³ÙŠÙŠÙ† Ø­Ø§Ø±Ø¨Ù‰ ÙˆØ¹Ù† Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¹Ø§Ù„Ù… Ùˆ Ø§Ù„Ø¨ÙŠØ¹ Ø£Ø´ÙØ¹Ù‰ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="south">
                <td class="english"><strong>24) </strong>O God of mercy and compassion, Lord of all consolations, do not be wrathful with us. Do not rebuke us for our evil deeds nor for the multitude of our sins. Do not be angry with us nor let Your anger endure forever.</td>
                <td class="arabic"><strong>Ù¢Ù¤) </strong>ÙŠØ§ Ø¥Ù„Ù‡ Ø§Ù„Ø±Ø­Ù…Ø© Ùˆ Ø§Ù„Ø±Ø¢ÙØ© Ùˆ Ø±Ø¨ ÙƒÙ„ Ø¹Ø²Ø§Ø¡ Ù„Ø§ ØªØ³Ø®Ø· Ø¹Ù„ÙŠÙ†Ø§ ÙˆÙ„Ø§ ØªØ¤Ø§Ø®Ø°Ù†Ø§ Ø¨Ø³ÙˆØ¡ Ø£Ø¹Ù…Ø§Ù„Ù†Ø§ ÙˆÙ„Ø§ Ø¨ÙƒØ«Ø±Ø© Ø®Ø·Ø§ÙŠØ§Ù†Ø§ ÙˆÙ„Ø§ ØªØºØ¶Ø¨ Ø¹Ù„ÙŠÙ†Ø§ ÙˆÙ„Ø§ ÙŠØ¯ÙˆÙ… ØºØ¶Ø¨Ùƒ Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¨Ø¯.</td>
            </tr>
            <tr id="table_${tableNumber}_row_25.5" class="south">
                <td class="english">Hear, O God of Jacob, and look down, O God our helper. Protect the world from death, scarcity, plagues, devastation, the sword of enemies, earthquakes, horror, and all fearsome events. We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic">Ø£Ù†ØµØª ÙŠØ§ Ø¥Ù„Ù‡ ÙŠØ¹Ù‚ÙˆØ¨ ÙˆØ£Ù†Ø¸Ø± ÙŠØ§ Ø¥Ù„Ù‡ Ø¹ÙˆÙ†Ù†Ø§ ÙˆØ£Ø±ÙØ¹ Ø¹Ù† Ø§Ù„Ø¹Ø§Ù„Ù… Ø§Ù„Ù…ÙˆØª ÙˆØ§Ù„ØºÙ„Ø§Ø¡ ÙˆØ§Ù„ÙˆØ¨Ø§Ø¡ ÙˆØ§Ù„Ø¬Ù„Ø§Ø¡ Ùˆ Ø³ÙŠÙ Ø§Ù„Ø£Ø¹Ø¯Ø§Ø¡ ÙˆØ§Ù„Ø²Ù„Ø§Ø²Ù„ ÙˆØ§Ù„Ø£Ù‡ÙˆØ§Ù„ ÙˆÙƒÙ„ Ø£Ù…Ø± Ù…Ø®ÙŠÙ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english"><strong>25) </strong>For the sake of our protection under Your mighty Holy hand, O God, we ask You to keep for us the life of our honored father, our Patriarch Pope Abba Tawadros the second, and to confirm him upon his throne for many years and quiet and peaceful times. We ask You, O Lord, hear and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¢Ù¥) </strong>Ù…Ù† Ø£Ø¬Ù„ Ø­ÙØ¸Ù†Ø§ ØªØ­Øª Ø§Ù„ÙŠØ¯ Ø§Ù„Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø§Ù„ØªÙ‰ Ù„Ùƒ ÙŠØ§ Ø§Ù„Ù„Ù‡ Ù†Ø·Ù„Ø¨ Ø¥Ù„ÙŠÙƒ Ø£Ù† ØªØ¨Ù‚Ù‰ Ù„Ù†Ø§ ÙˆØ¹Ù„ÙŠÙ†Ø§ Ø­ÙŠØ§Ø© Ø§Ù„Ø¢Ø¨ Ø§Ù„Ù…ÙƒØ±Ù… Ø§Ù„Ø¨Ø§Ø¨Ø§ Ø§Ù„Ø¨Ø·Ø±ÙŠØ±Ùƒ Ø£Ù†Ø¨Ø§ ØªÙˆØ§Ø¶Ø±ÙˆØ³ Ø§Ù„Ø«Ø§Ù†Ù‰ ÙˆØ£Ù† ØªØ­ÙØ¸ Ù„Ù†Ø§ Ø­ÙŠØ§ØªÙ‡ ÙˆØ«Ø¨ØªÙ‡ Ø¹Ù„Ù‰ ÙƒØ±Ø³ÙŠÙ‡ Ø³Ù†ÙŠÙ† Ø¹Ø¯ÙŠØ¯Ø© ÙˆØ£Ø²Ù…Ù†Ø© Ø³Ù„Ø§Ù…ÙŠØ© Ù‡Ø§Ø¯Ø¦Ø© Ù…Ø¯ÙŠØ¯Ø©. Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="south">
                <td class="english"><strong>26) </strong>O Christ our God, we ask of Your goodness and Your great mercy to keep for us the life of our fathers: the metropolitans, the bishops, and all the leaders of the flock. Confirm the sheep of Your flock,</td>
                <td class="arabic"><strong>Ù¢Ù¦) </strong>Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­ Ø¥Ù„Ù‡Ù†Ø§ Ù†Ø·Ù„Ø¨ Ù…Ù† Ø¬ÙˆØ¯Ùƒ ÙˆÙ…Ø±Ø§Ø­Ù…Ùƒ Ø§Ù„Ø¹Ø§Ù„ÙŠØ© Ø£Ù† ØªØ¨Ù‚Ù‰ Ù„Ù†Ø§ ÙˆØ¹Ù„ÙŠÙ†Ø§ Ø­ÙŠØ§Ø© Ø¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ù…Ø·Ø§Ø±Ù†Ø© ÙˆØ§Ù„Ø£Ø³Ø§Ù‚ÙØ© Ùˆ ÙƒÙ„ Ø§Ù„Ø±Ø¤Ø³Ø§Ø¡ ÙˆØ§Ù„Ø±Ø¹Ø§Ø© Ø£Ø­ÙØ¸Ù‡Ù… ÙˆØºÙ†Ù… Ø±Ø¹ÙŠØªÙ‡Ù… Ø«Ø¨ØªÙ‡Ù….</td>
            </tr>
            <tr id="table_${tableNumber}_row_27.5" class="south">
                <td class="english">give protection to the priests, purity to the deacons, strength to the elders, understanding to the youth, chastity to the virgins, asceticism to the monks and nuns, purity to the married, and protection for women. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">Ø£Ø¹Ø· Ø­ÙØ¸Ø§Ù‹ Ù„Ù„ÙƒÙ‡Ù†Ø© Ø·Ù‡Ø§Ø±Ø© Ù„Ù„Ø´Ù…Ø§Ù…Ø³Ø©ØŒ Ù‚ÙˆØ© Ø§Ù„Ù…Ø´Ø§ÙŠØ®ØŒ ÙÙ‡Ù…Ø§Ù‹ Ù„Ù„Ø£Ø·ÙØ§Ù„ØŒ Ø¹ÙØ© Ù„Ù„Ø£Ø¨ÙƒØ§Ø±ØŒ Ù†Ø³ÙƒØ§Ù‹ Ù„Ù„Ø±Ù‡Ø¨Ø§Ù† Ùˆ Ø§Ù„Ø±Ø§Ù‡Ø¨Ø§Øª Ù†Ù‚Ø§ÙˆØ© Ù„Ù„Ù…ØªØ²ÙˆØ¬ÙŠÙ† ØµÙˆÙ†Ø§Ù‹ Ù„Ù„Ù†Ø³Ø§Ø¡ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english"><strong>27) </strong>Also, we ask for the safe return of the travelers and the lost, the support for the widows and orphans; abundance for the poor, those who are in debt, pay their debts and forgive them; and those who are in prisons and distress, give them release. Heal the sick and repose the departed. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>Ù¢Ù§) </strong>ÙˆØ£ÙŠØ¶Ø§Ù‹ Ø§Ù„Ø¶Ø§Ù„ÙŠÙ† ÙˆØ§Ù„Ù…Ø³Ø§ÙØ±ÙŠÙ† Ø±Ø¯Ù‡Ù…ØŒ ÙˆØ§Ù„Ø£Ø±Ø§Ù…Ù„ ÙˆØ§Ù„Ø£ÙŠØªØ§Ù… Ø¹Ù„Ù‡Ù… ÙˆØ§Ù„Ø¬ÙŠØ§Ø¹ ÙˆØ§Ù„Ø¹Ø·Ø§Ø´ Ø£Ø´Ø¨Ø¹Ù‡Ù… ÙˆØ§Ù„Ø°ÙŠÙ† Ø¹Ù„ÙŠÙ‡Ù… Ø¯ÙŠÙ† Ø£ÙˆÙ Ø¹Ù†Ù‡Ù… Ùˆ Ø³Ø§Ù…Ø­Ù‡Ù…ØŒ ÙˆØ§Ù„Ù…Ø­Ø¨ÙˆØ³ÙŠÙ† ÙˆØ§Ù„Ø°ÙŠÙ† ÙÙ‰ Ø§Ù„Ø´Ø¯Ø§Ø¦Ø¯ Ø£ÙØ±Ø¬ Ø¹Ù†Ù‡Ù…ØŒ Ùˆ Ø§Ù„Ù…Ø±Ø¶ÙŠ ÙˆØ§Ù„Ù…Ø·Ø±ÙˆØ­ÙŠÙ† Ø£Ø´ÙÙ‡Ù… . ÙˆØ§Ù„Ø±Ø§Ù‚Ø¯ÙŠÙ† Ù†ÙŠØ­Ù‡Ù… Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english"><strong>28) </strong>O God of our saintly fathers, do not neglect those whom You have created with Your Holy hands. O You, who showed His love to mankind, accept from Your Mother intercession on our behalf and save us.</td>
                <td class="arabic"><strong>Ù¢Ù¨) </strong>ÙŠØ§ Ø¥Ù„Ù‡ Ø¢Ø¨Ø§Ø¦Ù†Ø§ Ø§Ù„Ù‚Ø¯ÙŠØ³ÙŠÙ† Ù„Ø§ ØªØªØ®Ù„ Ø¹Ù†Ø§ ÙˆÙ„Ø§ ØªØ®ÙŠØ¨ Ø§Ù„Ø°ÙŠÙ† Ø®Ù„Ù‚ØªÙ‡Ù… Ø¨ÙŠØ¯Ùƒ Ø§Ù„Ø·Ø§Ù‡Ø±Ø© ÙˆØ£Ø¸Ù‡Ø±Øª Ø­Ø¨Ùƒ Ù„Ù„Ø¨Ø´Ø±ÙŠØ© . Ø£ÙŠÙ‡Ø§ Ø§Ù„Ø±Ø­ÙˆÙ… Ø£Ù‚Ø¨Ù„ Ù…Ù† ÙˆØ§Ù„Ø¯ØªÙƒ Ø´ÙØ§Ø¹Ø© Ù…Ù† Ø£Ø¬Ù„Ù†Ø§ ÙˆØ®Ù„ØµÙ†Ø§</td>
            </tr>
            <tr id="table_${tableNumber}_row_29.5" class="south">
                <td class="english">O You, the Savior of the humble, forsake us not, neither renounce us, unto the end, for the sake of Your Holy Name, do not break Your covenant with us, nor deprive us of Your mercy for the sake of Your beloved Abraham, Your servant Isaac and Your saint Jacob. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic">ÙŠØ§ Ù…Ø®Ù„Øµ Ø´Ø¹Ø¨Ø§Ù‹ Ù…ØªÙˆØ§Ø¶Ø¹Ø§Ù‹ Ù„Ø§ ØªØºÙÙ„ Ø¹Ù†Ø§ Ø¥Ù„Ù‰ Ø§Ù„ØºØ§ÙŠØ© ÙˆÙ„Ø§ ØªØ³Ù„Ù…Ù†Ø§ Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ù†Ù‚Ø¶Ø§Ø¡ Ù…Ù† Ø£Ø¬Ù„ Ø£Ø³Ù…Ùƒ Ø§Ù„Ù‚Ø¯ÙˆØ³ Ù„Ø§ ØªÙ†Ù‚Ø¶ Ø¹Ù‡Ø¯Ùƒ ÙˆÙ„Ø§ ØªØ¨Ø¹Ø¯ Ø¹Ù†Ø§ Ø±Ø­Ù…ØªÙƒ Ù…Ù† Ø£Ø¬Ù„ Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø­Ø¨ÙŠØ¨Ùƒ Ùˆ Ø£Ø³Ø­Ù‚ Ø¹Ø¨Ø¯Ùƒ ÙˆÙŠØ¹Ù‚ÙˆØ¨ Ø¥Ø³Ø±Ø§Ø¦ÙŠÙ„ Ù‚Ø¯ÙŠØ³Ùƒ Ù†Ø³Ø£Ù„Ùƒ ÙŠØ§Ø±Ø¨ Ø¥Ø³Ù…Ø¹Ù†Ø§ ÙˆØ¥Ø±Ø­Ù…Ù†Ø§.  ${cross}</td>
            </tr>
        </tbody>
</table>`;
  return html;
}

function evnotiNaiNan(tableNumber) {
  let html = `
    <table id="table_${tableNumber}" title="Evnoti Nai Nan">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">Ë™â²ªâ²›â²Ÿâ²©Ï¯ â²›â²â²“ â²›â²â²›</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">God, have mercy upon us, settle your mercy upon us, show us mercy in Your Kingdom.</td>
            <td class="coptic">â²ªÌ€â²›â²Ÿâ²©Ï¯ â²›â²â²“ â²›â²â²›: â²‘â²‰Ï£â²Ÿâ²©â²›â²â²“ â²‰â²£â²Ÿâ²›: â²â²£â²“â²Ÿâ²©â²›â²â²“ â²›â²‰â²™â²â²›: Ï§â²‰â²› â²§â²‰â²•â²™â²‰â²§â²Ÿâ²©â²£â²Ÿ.</td>
            <td class="arabic">Ø§Ù„Ù„Ù‡Ù… Ø§Ø±Ø­Ù…Ù†Ø§ . Ù‚Ø±Ø± Ù„Ù†Ø§ Ø±Ø­Ù…Ø© . Ø§ØµÙ†Ø¹ Ù…Ø¹Ù†Ø§ Ø±Ø­Ù…Ø© ÙÙ‰ Ù…Ù„ÙƒÙˆØªÙƒ.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">Lord have mercy (12)</td>
            <td class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› (12)</td>
            <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… (12)</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">O King of peace, grant us Your peace, establish for us Your peace, and forgive us our sins.</td>
            <td class="coptic">â² Ì€â²Ÿâ²©â²£â²Ÿ â²›Ì€â²§â²‰ Ï¯Ï©â²“â²£â²â²›â²: â²™â²Ÿâ²“ â²›â²â²› â²›Ì€â²§â²‰â²•Ï©â²“â²£â²â²›â²: â²¥â²‰â²™â²›â²“ â²›â²â²› â²›Ì€â²§â²‰â²•Ï©â²“â²£â²â²›â²: â²­â² â²›â²‰â²›â²›â²Ÿâ²ƒâ²“ â²›â²â²› â²‰Ì€â²ƒâ²Ÿâ²—.</td>
            <td class="arabic">ÙŠØ§ Ù…Ù„Ùƒ Ø§Ù„Ø³Ù„Ø§Ù…:  Ø¥Ø¹Ø·Ù†Ø§ Ø³Ù„Ø§Ù…Ùƒ: Ù‚Ø±Ø± Ù„Ù†Ø§ Ø³Ù„Ø§Ù…Ùƒ:  ÙˆØ¥ØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">Lord have mercy (6)</td>
            <td class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› (6)</td>
            <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english">Disperse the enemies, of the church, and fortify her, that she may not be shaken forever.</td>
            <td class="coptic">Ïªâ²±â²£ â²‰Ì€â²ƒâ²Ÿâ²— â²›Ì€â²›â²“Ï«â²Ï«â²“:  â²›Ì€â²§â²‰ Ï¯â²‰â²•â²•â²—â²â²¥â²“â²:  â²â²£â²“â²¥â²Ÿâ²ƒâ²§ â²‰Ì€â²£â²Ÿâ²¥: â²›Ì€â²›â²‰â²¥â²•â²“â²™ Ï£â² â²‰Ì€â²›â²‰Ï©.</td>
            <td class="arabic">ÙØ±Ù‚ Ø£Ø¹Ø¯Ø§Ø¡ Ø§Ù„ÙƒÙ†ÙŠØ³Ø©: ÙˆØ­ØµÙ†Ù‡Ø§ ÙÙ„Ø§ ØªØªØ²Ø¹Ø²Ø¹ Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¨Ø¯.</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">Lord have mercy (6)</td>
            <td class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› (6)</td>
            <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Emmanuel our God, is now in our midst, with the glory of His Father, and the Holy Spirit.</td>
            <td class="coptic">â²ˆâ²™â²™â²â²›â²Ÿâ²©â²â²— â²¡â²‰â²›â²›â²Ÿâ²©Ï¯: Ï§â²‰â²› â²§â²‰â²›â²™â²Ï¯ Ï¯â²›â²Ÿâ²©:  Ï§â²‰â²› â²¡Ì€â²±â²Ÿâ²© â²›Ì€â²§â²‰ â²¡â²‰Ï¥â²“â²±â²§:  â²›â²‰â²™ â²¡â²“â²¡Ì…â²›Ì…â² â²‰â²‘Ì…â²©Ì….</td>
            <td class="arabic">Ø¹Ù…Ø§Ù†ÙˆØ¦ÙŠÙ„ Ø¥Ù„Ù‡Ù†Ø§: ÙÙ‰ ÙˆØ³Ø·Ù†Ø§ Ø§Ù„Ø¢Ù†: Ø¨Ù…Ø¬Ø¯ Ø£Ø¨ÙŠÙ‡: ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ .</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="congregation">
            <td class="english">Lord have mercy (6)</td>
            <td class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› (6)</td>
            <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="south">
            <td class="english">May He bless us all, and purify our hearts, and heal the sicknesses, of our souls and bodies.</td>
            <td class="coptic">â²šÌ€â²§â²‰Ï¥â²¥Ì€â²™â²Ÿâ²© â²‰Ì€â²£â²Ÿâ²› â²§â²â²£â²‰â²›: â²›Ì€â²§â²‰Ï¥â²§â²Ÿâ²©â²ƒâ²Ÿ â²›Ì€â²›â²‰â²›Ï©â²â²§: â²›Ì€â²§â²‰Ï¥â²§â²â²—Ï­â²Ÿ â²›Ì€â²›â²“Ï£â²±â²›â²“: â²›Ì€â²§â²‰ â²›â²‰â²›â²¯â²©â²­â² â²›â²‰â²™ â²›â²‰â²›â²¥â²±â²™â².</td>
            <td class="arabic">Ù„ÙŠØ¨Ø§Ø±ÙƒÙ†Ø§ ÙƒÙ„Ù†Ø§: ÙˆÙŠØ·Ù‡Ø± Ù‚Ù„ÙˆØ¨Ù†Ø§: ÙˆÙŠØ´ÙÙ‰ Ø£Ù…Ø±Ø§Ø¶: Ù†ÙÙˆØ³Ù†Ø§ ÙˆØ£Ø¬Ø³Ø§Ø¯Ù†Ø§</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="congregation">
            <td class="english">Lord have mercy (6)</td>
            <td class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› (6)</td>
            <td class="arabic">ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">We worship You O  Christ, with Your Good Father, and the Holy Spirit, for You were crucified and saved us.</td>
            <td class="coptic">â²¦â²‰â²›â²Ÿâ²©â²±Ï£â²§ â²™Ì€â²™â²Ÿâ²• â²±Ì€ â² â²“â²­â²£â²“â²¥â²§â²Ÿâ²¥: â²›â²‰â²™ â² â²‰â²•â²“â²±â²§ â²›Ì€â²â²…â²â²‘â²Ÿâ²¥: â²›â²‰â²™ â² â²“â²¡â²›â²‰â²©â²™â² â²‰â²‘â²Ÿâ²©â²â²ƒ: Ï«â²‰ â²â²©â²Ï£â²• â²â²•â²¥â²±Ï¯ â²™Ì€â²™â²Ÿâ²›.</td>
            <td class="arabic">Ù†Ø³Ø¬Ø¯ Ù„Ùƒ Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­ :Ù…Ø¹ Ø£Ø¨ÙŠÙƒ Ø§Ù„ØµØ§Ù„Ø­: ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ : Ù„Ø£Ù†Ùƒ ØµÙ„Ø¨Øª ÙˆØ®Ù„ØµØªÙ†Ø§</td>
        </tr> 

    </tbody>
</table>`;
  return html;
}

function evnotiNaiNanGreat(tableNumber) {
  let html = `
    <table id="table_${tableNumber}" title="Evnoti Nai Nan">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">Ë™â²ªâ²›â²Ÿâ²©Ï¯ â²›â²â²“ â²›â²â²›</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="commentary">
            <td class="english">The priest chants <span class="coptic">â²ªâ²›â²Ÿâ²©Ï¯ â²›â²â²“ â²›â²â²›</span> (Melismatic Tune) then the congregation chants <span class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²›</span> (Melismatic Tune 12 Times) then the conclusion.</td>
            <td class="arabic">ÙŠÙ‚ÙˆÙ„ Ø§Ù„ÙƒØ§Ù‡Ù† <span class="coptic">â²ªâ²›â²Ÿâ²©Ï¯ â²›â²â²“ â²›â²â²›</span> (Ø¨Ø§Ù„ÙƒØ¨ÙŠØ±) Ø«Ù… ÙŠØ±Ø¯Ø¯ Ø§Ù„Ø´Ø¹Ø¨ <span class="coptic">â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²›</span> (12 Ù…Ø±Ø© Ø¨Ø§Ù„Ù„Ø­Ù† Ø§Ù„ÙƒØ¨ÙŠØ±) Ø«Ù… Ø§Ù„Ø®ØªØ§Ù….</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="priest">
            <td class="english">O God, have mercy upon us, settle Your mercy upon us, have compassion upon us.</td>
            <td class="coptic">â²ªÏ¯ â²›â²â²“ â²›â²â²›: â²‘â²‰Ï£ â²Ÿâ²©â²›â²â²“ â²‰Ì€â²£â²Ÿâ²›: Ï£â²‰â²›Ï©â²â²§ Ï§â²â²£â²Ÿâ²›.</td>
            <td class="arabic">Ø§Ù„Ù„Ù‡Ù… Ø¥Ø±Ø­Ù…Ù†Ø§ Ù‚Ø±Ø± Ù„Ù†Ø§ Ø±Ø­Ù…Ø© ØªØ±Ø§Ø¡Ù Ø¹Ù„ÙŠÙ†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="congregation">
            <td class="english">Amen.</td>
            <td class="coptic">â²€â²™â²â²›.</td>
            <td class="arabic">Ø¢Ù…ÙŠÙ†.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="priest">
            <td class="english">Hear us</td>
            <td class="coptic">â²¥â²±â²§â²‰â²™ â²‰Ì€â²£â²Ÿâ²›</td>
            <td class="arabic">ÙˆØ§Ø³Ù…Ø¹Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="congregation">
            <td class="english">Amen.</td>
            <td class="coptic">â²€â²™â²â²›.</td>
            <td class="arabic">Ø¢Ù…ÙŠÙ†.</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="priest">
            <td class="english">Bless us, keep us, and help us</td>
            <td class="coptic">â²¥Ì€â²™â²Ÿâ²© â²‰Ì€â²£â²Ÿâ²›: â²Ì€â²£â²‰Ï© â²‰Ì€â²£â²Ÿâ²›: â²Ì€â²£â²“â²ƒâ²Ÿâ²Ì€â²‘â²“â²› â²‰Ì€â²£â²Ÿâ²›.</td>
            <td class="arabic">ÙˆØ¨Ø§Ø±ÙƒÙ†Ø§ ÙˆØ§Ø­ÙØ¸Ù†Ø§ ÙˆØ£Ø¹Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="congregation">
            <td class="english">Amen.</td>
            <td class="coptic">â²€â²™â²â²›.</td>
            <td class="arabic">Ø¢Ù…ÙŠÙ†.</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="priest">
            <td class="english">Take away Your anger from us, visit us with Your salvation, and forgive us our sins.</td>
            <td class="coptic">â²°â²—â²“ â²™Ì€â²¡â²‰â²•Ï«â²±â²›â²§ â²‰Ì€â²ƒâ²Ÿâ²—Ï©â²â²£â²Ÿâ²›: Ï«â²‰â²™â²¡â²‰â²›Ï­â²“â²›â²“ â²‘â²‰â²› â²¡â²‰â²•â²Ÿâ²©Ï«â²â²“: â²Ÿâ²©â²Ÿâ² â²­â² â²›â²‰â²›â²›â²Ÿâ²ƒâ²“ â²›â²â²› â²‰Ì€â²ƒâ²Ÿâ²—.</td>
            <td class="arabic">ÙˆØ§Ø±ÙØ¹ ØºØ¶Ø¨Ùƒ Ø¹Ù†Ø§ ÙˆØ§ÙØªÙ‚Ø¯Ù†Ø§ Ø¨Ø®Ù„Ø§ØµÙƒ ÙˆØ§ØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="congregation">
            <td class="english">Amen. Lord have mercy (12)</td>
            <td class="coptic">â²€Ì€â²™â²â²›. â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› (12)</td>
            <td class="arabic">Ø£Ù…ÙŠÙ†. ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… (12)</td>
        </tr>
    </tbody>
</table>`;
  return html;
}

function endOfServiceHymn(tableNumber) {
  let html = `
        <table id="table_${tableNumber}" title="Conclusion Hymn">
            <caption class="caption" id="caption_table_${tableNumber}">Conclusion Hymn
            <span class="arabic-caption">Ù„Ø­Ù† Ø®ØªØ§Ù… Ø§Ù„Ø®Ø¯Ù…Ø©</span></caption>
<tbody>
            <tr id="table_${tableNumber}_row_0" class="congregation">
                <td class="english">Amen, Alleluia, glory be to the Father and to the Son and to the Holy Spirit,</td>
                <td class="coptic">â²€â²™â²â²› â²â²—â²—â²â²—â²Ÿâ²©â²“â² â²‡â²Ÿâ²â² â²¡â²â²§â²£â²“ â²•â²‰ â²¨â²“â²±Ì€ â²•Ì€â²‰ â²Ì€â²…â²“â²±Ì€ â² â²›â²‰â²©â²™â²â²§â²“:</td>
                <td class="arabic">Ø¢Ù…ÙŠÙ† Ø§Ù„Ù„ÙŠÙ„ÙˆÙŠØ§ Ø§Ù„Ù…Ø¬Ø¯ Ù„Ù„Ø¢Ø¨ Ùˆ Ø§Ù„Ø§Ø¨Ù† ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³ØŒ</td>
            </tr>
            <tr id="table_${tableNumber}_row_0.5" class="congregation">
                <td class="english">both now and ever and unto the ages of ages. Amen.</td>
                <td class="coptic">â²”â²‰ â²›â²©â²› â²•â²‰ â²Ì€â²“Ì€ â²•â²‰ â²“â²¥ â²§â²Ÿâ²©â²¥ â²‰Ì€â²±Ì€â²›â²â²¥ â²§â²±â²› â²‰Ì€â²±Ì€â²›â²±â²›: â²â²™â²â²›.</td>
                <td class="arabic">Ø§Ù„Ø¢Ù† Ùˆ ÙƒÙ„ Ø§ÙˆØ§Ù† ÙˆØ§Ù„Ù‰ Ø¯Ù‡Ø± Ø§Ù„Ø¯Ø§Ù‡Ø±ÙŠÙ†ØŒ Ø¢Ù…ÙŠÙ†.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="congregation">
                <td class="english">We cry out saying, our Lord Jesus Christ,</td>
                <td class="coptic">â²¦â²‰â²›â²±Ï£ â²‰Ì€â²ƒâ²Ÿâ²— â²‰â²›Ï«â²± â²™Ì€â²™â²Ÿâ²¥  Ï«â²‰ â²±Ì€â² â²‰â²›â³ª â²’â²Ì…â²¥Ì… â² â²­Ì…â²¥Ì….</td>
                <td class="arabic">Ù†ØµØ±Ø® Ù‚Ø§Ø¦Ù„ÙŠÙ† ÙŠØ§ Ø±Ø¨Ù†Ø§ ÙŠØ³ÙˆØ¹ Ø§Ù„Ù…Ø³ÙŠØ­</td>
            </tr>
            <tr id="table_${tableNumber}_row_1.5" class="congregation">
                <td class="english">Who was crucified on the cross, trample down Satan under our feet.</td>
                <td class="coptic">â²ªâ²â²‰â²§â²â²©â²Ï£Ï¥ â²‰Ì€â²¡â²“â²¥â²§â²â²©â²£â²Ÿâ²¥  â²‰â²•â²‰Ì€Ï§â²Ÿâ²™Ï§â²‰â²™ â²™Ì€â²¡Ì€â²¥â²â²§â²â²›â²â²¥ â²¥â²â²¡â²‰â²¥â²â²§ â²›Ì€â²›â²‰â²›Ï­â²â²—â²â²©Ï«:</td>
                <td class="arabic">Ø§Ù„Ø°Ù‰ ØµÙ„Ø¨ Ø¹Ù„Ù‰ Ø§Ù„ØµÙ„ÙŠØ¨ØŒ Ø¥Ø³Ø­Ù‚ Ø§Ù„Ø´ÙŠØ·Ø§Ù† ØªØ­Øª Ø£Ù‚Ø¯Ø§Ù…Ù†Ø§</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="congregation">
                <td class="english">Save us and have mercy. Lord have mercy. Lord have mercy. Lord bless. Amen. </td>
                <td class="coptic">â²¥â²±Ï¯ â²™Ì€â²™â²Ÿâ²› â²Ÿâ²©â²ŸÏ© â²›â²â²“ â²›â²â²›  â²”â²©â²£â²“â²‰Ì€ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› â²•â²©â²£â²“â²‰ â²‰Ì€â²—â²‰â²Ì€â²¥â²Ÿâ²› â²”â²©â²£â²“â²‰Ì€ â²‰â²©â²—â²Ÿâ²…â²â²¥â²Ÿâ²› â²â²™â²â²›.</td>
                <td class="arabic">Ø®Ù„ØµÙ†Ø§ ÙˆØ§Ø±Ø­Ù…Ù†Ø§. ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù… ØŒ ÙŠØ§Ø±Ø¨ Ø§Ø±Ø­Ù…ØŒ ÙŠØ§Ø±Ø¨ Ø¨Ø§Ø±Ùƒ Ø¢Ù…ÙŠÙ†</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="congregation">
                <td class="english">Give the blessing, give the blessing, we prostrate, absolve us, and give the blessing.</td>
                <td class="coptic">â²¥Ì€â²™â²Ÿâ²© â²‰Ì€â²£â²Ÿâ²“ â²¥â²™â²Ÿâ²© â²‰Ì€â²£â²Ÿâ²“  â²“â²¥ Ï¯â²™â²‰â²§â²â²›â²Ÿâ²“Ì€â²  â²­â²± â²›â²â²“ â²‰Ì€â²ƒâ²Ÿâ²— Ï«â²± â²™Ì€â²¡â²“â²¥Ì€â²™â²Ÿâ²©.</td>
                <td class="arabic">Ø¨Ø§Ø±ÙƒÙˆØ§ Ø¹Ù„Ù‰Ù‘ Ø¨Ø§Ø±ÙƒÙˆØ§ Ø¹Ù„Ù‰Ù‘ Ù‡Ø§ Ø§Ù„Ù…ÙŠØ·Ø§Ù†ÙŠØ© Ø§ØºÙØ±ÙˆØ§ Ù„Ù‰ .ÙÙ„ØªÙ‚Ù„ Ø§Ù„Ø¨Ø±ÙƒØ©.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="priest">
                <td class="english">May Jesus Christ, our true God who through His own goodwill accepted sufferings, and was crucified on the cross for our sakes, </td>
                <td class="arabic">ÙŠØ³ÙˆØ¹ Ø§Ù„Ù…Ø³ÙŠØ­ Ø¥Ù„Ù‡Ù†Ø§ Ø§Ù„Ø­Ù‚ÙŠÙ‚Ù‰ Ø§Ù„Ø°Ù‰ Ù‚Ø¨Ù„ Ø§Ù„Ø¢Ù„Ø§Ù… Ø¨Ø¥Ø±Ø§Ø¯ØªÙ‡  ÙˆØµÙ„Ø¨ Ø¹Ù„Ù‰ Ø§Ù„ØµÙ„ÙŠØ¨ Ù…Ù† Ø£Ø¬Ù„Ù†Ø§. </td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="priest">
                <td class="english">bless us with all spiritual blessings, and support us, and complete for us the Holy week of Pascha, and bring forth upon us the joy of His Holy Resurrection for many years and peaceful times. </td>
                <td class="arabic">ÙŠØ¨Ø§Ø±ÙƒÙ†Ø§ Ø¨ÙƒÙ„ Ø¨Ø±ÙƒØ© Ø±ÙˆØ­ÙŠØ© ÙˆÙŠØ¹ÙŠÙ†Ù†Ø§ ÙˆÙŠÙƒÙ…Ù„ Ù„Ù†Ø§ Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© ÙˆÙŠØ±ÙŠÙ†Ø§ ÙØ±Ø­ Ù‚ÙŠØ§Ù…ØªÙ‡ Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø³Ù†ÙŠÙ† ÙƒØ«ÙŠØ±Ø© ÙˆØ£Ø²Ù…Ù†Ø© Ø³Ø§Ù„Ù…Ø©.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="priest">
                <td class="english">Through the never-ending intercessions of the holy, Theotokos Saint Mary, and all the choirs of angels and archangels;</td>
                <td class="arabic">Ø¨Ø§Ù„Ø³Ø¤Ù„Ø§Øª ÙˆØ§Ù„Ø·Ù„Ø¨Ø§Øª Ø§Ù„ØªÙ‰ ØªØµÙ†Ø¹Ù‡Ø§ Ø¹Ù†Ø§ ÙƒÙ„ Ø­ÙŠÙ† Ø³ÙŠØ¯ØªÙ†Ø§ ÙˆÙ…Ù„ÙƒØªÙ†Ø§ ÙƒÙ„Ù†Ø§ ÙˆØ§Ù„Ø¯Ø© Ø§Ù„Ø¥Ù„Ù‡ Ø§Ù„Ù‚Ø¯ÙŠØ³Ø© Ù…Ø±ÙŠÙ… ÙˆÙƒÙ„ ØµÙÙˆÙ Ø§Ù„Ù…Ù„Ø§Ø¦ÙƒØ© ÙˆØ±Ø¤Ø³Ø§Ø¡ Ø§Ù„Ù…Ù„Ø§Ø¦ÙƒØ©</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="priest">
                <td class="english">through the prayers of the Patriarchs, the prophets, the Apostles, the martyrs, the righteous and holy ones, the cross-bearers, the ascetics, the confessors and anchorites;</td>
                <td class="arabic">ÙˆØµÙ„ÙˆØ§Øª Ø±Ø¤Ø³Ø§Ø¡ Ø§Ù„Ø£Ø¨Ø§Ø¡ ÙˆØ§Ù„Ø£Ù†Ø¨ÙŠØ§Ø¡ ÙˆØ§Ù„Ø±Ø³Ù„ ÙˆØ§Ù„Ø´Ù‡Ø¯Ø§Ø¡ ÙˆÙ…ØµØ§Ù Ù„Ø¨Ø§Ø³ Ø§Ù„ØµÙ„ÙŠØ¨ ÙˆØ§Ù„Ø£Ø¨Ø±Ø§Ø± ÙˆØ§Ù„ØµØ¯ÙŠÙ‚ÙŠÙ† ÙˆÙ…Ù„Ø§Ùƒ Ù‡Ø°Ø§ Ø§Ù„ÙŠÙˆÙ… Ø§Ù„Ù…Ø¨Ø§Ø±Ùƒ ØŒ </td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="priest">
                <td class="english">and the blessing of the holy week of Pascha of our Good Savior; </td>
                <td class="arabic">ÙˆØ¨Ø±ÙƒØ© Ø§Ù„Ø¨ØµØ®Ø© Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© Ø§Ù„ØªÙ‰ Ù„Ù…Ø®Ù„ØµÙ†Ø§ Ø§Ù„ØµØ§Ù„Ø­.</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="priest">
                <td class="english">their holy blessings, their benediction, their power, their gift, their love, and their help be with us all forever. Amen.</td>
                <td class="arabic">Ø¨Ø±ÙƒØªÙ‡Ù… Ø§Ù„Ù…Ù‚Ø¯Ø³Ø© ÙˆÙ†Ø¹Ù…ØªÙ‡Ù… ÙˆÙ‚ÙˆØªÙ‡Ù… ÙˆÙ‡Ø¨ØªÙ‡Ù… ÙˆÙ…Ø­Ø¨ØªÙ‡Ù… ÙˆÙ…Ø¹ÙˆÙ†ØªÙ‡Ù… ØªÙƒÙˆÙ† Ù…Ø¹Ù†Ø§ ÙƒÙ„Ù†Ø§ Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¨Ø¯. Ø¢Ù…ÙŠÙ†.</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="priest">
                <td class="english">Christ our God</td>
                <td class="coptic">â² â²“â²­Ì€â²£â²“â²¥â²§â²Ÿâ²¥ â² â²‰â²›â²›â²Ÿâ²©Ï¯</td>
                <td class="arabic">Ø§Ù„Ù…Ø³ÙŠØ­ Ø§Ù„Ù‡Ù†Ø§</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="congregation">
                <td class="english">Amen. So be it.</td>
                <td class="coptic">â²€â²™â²â²› â²‰â²¥â²‰Ï£â²±â²¡â²“</td>
                <td class="arabic">Ø¢Ù…ÙŠÙ† ÙŠÙƒÙˆÙ†</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="priest">
                <td class="english">O King of peace, grant us Your peace, establish for us Your peace, and forgive us our sins. For Yours is the power, the glory, the blessing, and the majesty, forever. Amen.</td>
                <td class="coptic">â² Ì€â²Ÿâ²©â²£â²Ÿ â²›Ì€â²§â²‰ Ï¯Ï©â²“â²£â²â²›â²: â²™â²Ÿâ²“ â²›â²â²› â²›Ì€â²§â²‰â²•Ï©â²“â²£â²â²›â²: â²¥â²‰â²™â²›â²“ â²›â²â²› â²›Ì€â²§â²‰â²•Ï©â²“â²£â²â²›â²: â²­â² â²›â²‰â²›â²›â²Ÿâ²ƒâ²“ â²›â²â²› â²‰Ì€â²ƒâ²Ÿâ²—. Ïªâ²‰ â²‘â²±â²• â²§â²‰ Ï¯Ï«â²Ÿâ²™ â²›â²‰â²™ â²¡â²“â²±Ì€â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²¥Ì€â²™â²Ÿâ²© â²›â²‰â²™ â²¡â²“â²Ì€â²™â²Ï©â²“ Ï£â² â²‰Ì€â²›â²‰Ï©: â²Ì€â²™â²â²›.</td>
                <td class="arabic">ÙŠØ§ Ù…Ù„Ùƒ Ø§Ù„Ø³Ù„Ø§Ù… Ø¥Ø¹Ø·Ù†Ø§ Ø³Ù„Ø§Ù…Ùƒ Ù‚Ø±Ø± Ù„Ù†Ø§ Ø³Ù„Ø§Ù…Ùƒ. ÙˆØ¥ØºÙØ± Ù„Ù†Ø§ Ø®Ø·Ø§ÙŠØ§Ù†Ø§. Ù„Ø§Ù† Ù„Ùƒ Ø§Ù„Ù‚ÙˆØ© ÙˆØ§Ù„Ù…Ø¬Ø¯ ÙˆØ§Ù„Ø¨Ø±ÙƒØ© ÙˆØ§Ù„Ø¹Ø²Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¨Ø¯</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="priest">
                <td class="english">Make us, O Lord, worthy to pray thankfully:</td>
                <td class="coptic">â²€â²£â²“â²§â²‰â²› â²›Ì€â²‰â²™â²¡Ì€Ï£â² â²›Ì€Ï«â²Ÿâ²¥ Ï§â²‰â²› â²Ÿâ²©Ï£â²‰â²¡Ï©Ì€â²™â²Ÿâ²§:</td>
                <td class="arabic">Ø§Ù„Ù„Ù‡Ù… Ø§Ø¬Ø¹Ù„Ù†Ø§ Ù…Ø³ØªØ­Ù‚ÙŠÙ† Ø§Ù† Ù†Ù‚ÙˆÙ„ Ø¨Ø´ÙƒØ±:</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="congregation">
                <td class="english">Our Father who art in heaven...</td>
                <td class="coptic">Ïªâ²‰ â²¡â²‰â²›â²“â²±â²§ â²‰â²§ Ï§â²‰â²› â²›â²“â²«â²â²Ÿâ²©â²“Ì€:...</td>
                <td class="arabic">Ø£Ø¨Ø§Ù†Ø§ Ø§Ù„Ø°Ù‰ ÙÙ‰ Ø§Ù„Ø³Ù…Ø§ÙˆØ§Øª...</td>
            </tr>

        </tbody>
</table>\n`;
  return html;
}

function faiEtafEnf(tableNumber) {
  let html = `
    <table id="table_${tableNumber}" title="Fai Etef Enf">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">â²ªâ²â²“ â²‰Ì€â²§â²Ï¥â²‰â²›Ï¥</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="text">
            <td class="english">This is He who offered Himself up, as an acceptable sacrifice, on the Cross for the salvation of our race.</td>
            <td class="coptic">â²ªâ²â²“ â²‰Ì€â²§â²Ï¥â²‰â²›Ï¥ â²‰Ì€â²¡Ì€Ï£â²±â²“ : â²›Ì€â²Ÿâ²©â²‘â²©â²¥â²“Ì€â² â²‰â²¥Ï£â²â²¡: Ï©â²“Ï«â²‰â²› â²¡â²“â²¥Ì€â²§â²â²©â²£â²Ÿâ²¥ : Ï§â² â²¡Ì€â²Ÿâ²©Ï«â²â²“ â²™Ì€â²¡â²‰â²›â²…â²‰â²›â²Ÿâ²¥.</td>
            <td class="arabic">Ù‡Ø°Ø§ Ø§Ù„Ø°ÙŠ Ø£ØµØ¹Ø¯ Ø°Ø§ØªÙ‡ Ø°Ø¨ÙŠØ­Ø© Ù…Ù‚Ø¨ÙˆÙ„Ø© Ø¹Ù„Ù‰ Ø§Ù„ØµÙ„ÙŠØ¨ Ø¹Ù† Ø®Ù„Ø§Øµ Ø¬Ù†Ø³Ù†Ø§.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="text">
            <td class="english">His good Father inhaled His sweet aroma in the evening on Golgotha.</td>
            <td class="coptic">â²€Ï¥Ï£â²±â²—â²‰â²™ â²‰Ì€â²£â²ŸÏ¥ : â²›Ì€Ï«â²‰ â²¡â²‰Ï¥â²“â²±â²§ â²›Ì€â²Ì€â²…â²â²‘â²Ÿâ²¥: â²™Ì€â²«Ì€â²›â²â²© â²›Ì€â²§â²‰ Ï©â²â²›â²Ì€â²£â²Ÿâ²©Ï©â²“ Ï©â²“Ï«â²‰â²› Ï¯â²…â²Ÿâ²—â²…â²Ÿâ²‘â².</td>
            <td class="arabic"> ÙØ§Ø´ØªÙ…Ù‡ Ø£Ø¨ÙˆÙ‡ Ø§Ù„ØµØ§Ù„Ø­ ÙˆÙ‚Øª Ø§Ù„Ù…Ø³Ø§Ø¡ Ø¹Ù„Ù‰ Ø§Ù„Ø¬Ù„Ø¬Ø«Ø©.</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="text">
            <td class="english">We worship You O Christ: with Your good Father: and the Holy Spirit: for You were crucified and saved us. </td>
            <td class="coptic">â²¦â²‰â²›â²Ÿâ²©â²±Ì€Ï£â²§ â²™Ì€â²™â²Ÿâ²• â²±Ì€ â² Ì…â²­Ì…â²¥: â²›â²‰â²™ â² â²‰â²•â²“â²±â²§ â²›Ì€â²â²…â²â²‘â²Ÿâ²¥: â²›â²‰â²™ â² â²“â²¡Ì€â²›â²‰â²©â²™â² â²‰â²‘â²Ÿâ²©â²â²ƒ: Ï«â²‰ â²â²©â²Ï£â²• â²â²•â²¥â²±Ï¯ â²™Ì€â²™â²Ÿâ²› â²›â²â²“ â²›â²â²›.</td>
            <td class="arabic">Ù†Ø³Ø¬Ø¯ Ù„ÙƒÙŽ Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­: Ù…Ø¹ Ø£Ø¨ÙŠÙƒ Ø§Ù„ØµØ§Ù„Ø­: ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³: Ù„Ø£Ù†ÙƒÙŽ ØµÙ„Ø¨Øª ÙˆØ®Ù„ØµØªÙ†Ø§.</td>
        </tr>
    </tbody>
</table>
`;
  return html;
}

function tenouosht(tableNumber) {
  let html = `
    <table id="table_${tableNumber}" title="Tenouosht">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">â²¦â²‰â²›â²Ÿâ²©â²±Ì€Ï£â²§</span></caption>
<tbody>
        <tr id="table_${tableNumber}_row_0" class="text">
            <td class="english">We worship You O Christ: with Your good Father: and the Holy Spirit: for You were crucified and saved us. </td>
            <td class="coptic">â²¦â²‰â²›â²Ÿâ²©â²±Ì€Ï£â²§ â²™Ì€â²™â²Ÿâ²• â²±Ì€ â² Ì…â²­Ì…â²¥: â²›â²‰â²™ â² â²‰â²•â²“â²±â²§ â²›Ì€â²â²…â²â²‘â²Ÿâ²¥: â²›â²‰â²™ â² â²“â²¡Ì€â²›â²‰â²©â²™â² â²‰â²‘â²Ÿâ²©â²â²ƒ: Ï«â²‰ â²â²©â²Ï£â²• â²â²•â²¥â²±Ï¯ â²™Ì€â²™â²Ÿâ²› â²›â²â²“ â²›â²â²›.</td>
            <td class="arabic">Ù†Ø³Ø¬Ø¯ Ù„ÙƒÙŽ Ø£ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø³ÙŠØ­: Ù…Ø¹ Ø£Ø¨ÙŠÙƒ Ø§Ù„ØµØ§Ù„Ø­: ÙˆØ§Ù„Ø±ÙˆØ­ Ø§Ù„Ù‚Ø¯Ø³: Ù„Ø£Ù†ÙƒÙŽ ØµÙ„Ø¨Øª ÙˆØ®Ù„ØµØªÙ†Ø§.</td>
        </tr>
    </tbody>
</table>
`;
  return html;
}

const cross =
  '<img src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/cross.png" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">';
const arrowUp =
  '<img src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/arrowUp.png" alt="arrow up" style="width: 2vw; height: auto; padding-bottom:1vw; filter: sepia(100%) saturate(500%) ">';
const skip = `<img src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/skip.png" alt="arrow up" style="width: ${skipSize}px ; height: auto; padding-top:1vw; filter: sepia(100%) saturate(300%) ">`;
const candle =
  '<img src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/candle.png" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">';

const book = `<img 
  src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/book.png" 
  alt="+" 
  style="
    width: ${iconWidth}; 
    height: auto; 
    filter: invert(100%) brightness(1000%) contrast(200%);
  "
>`;
const musicalNote = `<img 
  src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/musical_note.png" 
  alt="+" 
  style="
    width: ${iconWidth}; 
    height: auto; 
    filter: invert(100%) brightness(1000%) contrast(200%);
  "
>`;

const playPause = `<img 
  src="https://liturgicalbooks-json.s3.us-east-2.amazonaws.com/assets/images/hazzat/play_pause.png" 
  alt="+" 
  style="
    width: ${iconWidth}; 
    height: auto; 
    filter: invert(100%) brightness(1000%) contrast(200%);
  "
>`;

export {
  hourIntro,
  paschalPraise1,
  paschalPraise2,
  paschalPraise3,
  copticGospelIntro,
  daytimeExpositionIntro,
  nighttimeExpositionIntro,
  expositionConclusion,
  daytimeLitanies,
  nighttimeLitanies,
  evnotiNaiNan,
  evnotiNaiNanGreat,
  endOfServiceHymn,
  faiEtafEnf,
  tenouosht,
  cross,
  candle,
  arrowUp,
  skip,
  book,
  musicalNote,
  playPause,
};

// Path: data/holyWeek/repeatedPrayers.js
