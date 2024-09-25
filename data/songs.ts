/** @format */

import {
  amenAmenCome,
  beFaithfulUntoDeath,
  blessedAreYouOMary,
  shineBright,
  dontLeaveMeAlone,
  drawAPortraitOfTheVirgin,
  hailToYouOMotherOfComfort,
  hailToMary,
  howSweetAreYouOMary,
  iCanHearMySaviorCalling,
  inTheShadeOfYourProtection,
  myCopticChurch,
  myCopticChurchSoGreat,
  oBeloved,
  oMaryOurMotherTheBelovedOfUsAll,
  oMaryOurMotherYouAreTheMotherOfOurLord,
  oMotherOfLight,
  oMotherOfLightOBeautiful,
  oSeekerToMeetJesus,
  ourMotherOVirgin,
  overTheDomes,
  oVirginMary,
  oVirginMyMotherShine,
  oYouWhoReceivedTheMostHonorableGift,
  theGloryOfMary,
  trulyRisen,
  veryEarlySundayMorning,
  watchingUs,
  yourLoveOMary,
} from "./songTexts";

export const songs = () => {
  const amenAmenComeHtml = amenAmenCome("1");
  const beFaithfulUntoDeathHtml = beFaithfulUntoDeath("2");
  const blessedAreYouOMaryHtml = blessedAreYouOMary("3");
  const shineBrightHtml = shineBright("4");
  const dontLeaveMeAloneHtml = dontLeaveMeAlone("5");
  const drawAPortraitOfTheVirginHtml = drawAPortraitOfTheVirgin("6");
  const hailToYouOMotherOfComfortHtml = hailToYouOMotherOfComfort("7");
  const hailToMaryHtml = hailToMary("8");
  const howSweetAreYouOMaryHtml = howSweetAreYouOMary("9");
  const iCanHearMySaviorCallingHtml = iCanHearMySaviorCalling("10");
  const inTheShadeOfYourProtectionHtml = inTheShadeOfYourProtection("11");
  const myCopticChurchHtml = myCopticChurch("12");
  const myCopticChurchSoGreatHtml = myCopticChurchSoGreat("13");
  const oBelovedHtml = oBeloved("14");
  const oMaryOurMotherTheBelovedOfUsAllHtml = oMaryOurMotherTheBelovedOfUsAll("15");
  const oMaryOurMotherYouAreTheMotherOfOurLordHtml = oMaryOurMotherYouAreTheMotherOfOurLord("16");
  const oMotherOfLightHtml = oMotherOfLight("17");
  const oMotherOfLightOBeautifulHtml = oMotherOfLightOBeautiful("18");
  const oSeekerToMeetJesusHtml = oSeekerToMeetJesus("19");
  const ourMotherOVirginHtml = ourMotherOVirgin("20");
  const overTheDomesHtml = overTheDomes("21");
  const oVirginMaryHtml = oVirginMary("22");
  const oVirginMyMotherShineHtml = oVirginMyMotherShine("23");
  const oYouWhoReceivedTheMostHonorableGiftHtml = oYouWhoReceivedTheMostHonorableGift("24");
  const theGloryOfMaryHtml = theGloryOfMary("25");
  const trulyRisenHtml = trulyRisen("26");
  const veryEarlySundayMorningHtml = veryEarlySundayMorning("27");
  const watchingUsHtml = watchingUs("28");
  const yourLoveOMaryHtml = yourLoveOMary("29");





  return `
<div class="section" id="section_1">
    ${amenAmenComeHtml}
    ${beFaithfulUntoDeathHtml}
    ${blessedAreYouOMaryHtml}
    ${dontLeaveMeAloneHtml}
    ${drawAPortraitOfTheVirginHtml}
    ${hailToYouOMotherOfComfortHtml}
    ${hailToMaryHtml}
    ${howSweetAreYouOMaryHtml}
    ${iCanHearMySaviorCallingHtml}
    ${inTheShadeOfYourProtectionHtml}
    ${myCopticChurchHtml}
    ${myCopticChurchSoGreatHtml}
    ${oBelovedHtml}
    ${oMaryOurMotherTheBelovedOfUsAllHtml}
    ${oMaryOurMotherYouAreTheMotherOfOurLordHtml}
    ${oMotherOfLightHtml}
    ${oMotherOfLightOBeautifulHtml}
    ${oSeekerToMeetJesusHtml}
    ${ourMotherOVirginHtml}
    ${overTheDomesHtml}
    ${oVirginMaryHtml}
    ${oVirginMyMotherShineHtml}
    ${oYouWhoReceivedTheMostHonorableGiftHtml}
    ${shineBrightHtml}
    ${theGloryOfMaryHtml}
    ${trulyRisenHtml}
    ${veryEarlySundayMorningHtml}
    ${watchingUsHtml}
    ${yourLoveOMaryHtml}
</div>
`;
};
