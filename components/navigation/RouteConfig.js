import HolyWeekData from "../../data/holyWeek/holyWeek.json";
import { transformHolyWeekData } from "./HolyWeekStack";
import BibleScreen from "../screens/bible/bibleScreen";
import ChapterScreen from "../screens/bible/chapterScreen";
import Kiahk from "../screens/kiahk";
import Psalmody from "../screens/psalmody";
import KiahkDoxologies from "../screens/kiahkDoxologies";
import Doxologies from "../screens/doxologies";
import SeasonalDoxologies from "../screens/seasonalDoxologies";
import Glorification from "../screens/glorification";
import Songs from "../screens/songs";
import ComfortSongs from "../screens/songs/comfortSongs";
import NayroozSongs from "../screens/songs/nayroozSongs";
import ResurrectionSongs from "../screens/songs/resurrectionSongs";
import StMarySongs from "../screens/songs/stMarySongs";
import AllSongs from "../screens/songs/allSongs";




export const StaticScreens = [
  {
    screenName: "Bible",
    label: "The Holy Bible",
    component: BibleScreen,
    children: [
      {
        screenName: "ChapterScreen",
        label: "Chapter",
        component: ChapterScreen
      }
    ]
  },
  {
    screenName: "Glorification",
    label: "Glorification",
    component: Glorification,
  },
  {
    screenName: "Kiahk",
    label: "Kiahk Praises",
    component: Kiahk,
    children: [{screenName: "KiahkDoxologies", label: "Kiahk Doxologies", component: KiahkDoxologies, },],
  },
  {
    screenName: "Psalmody",
    label: "Psalmody",
    component: Psalmody,
    children: [{screenName: "Doxologies", label: "Doxologies", component: Doxologies, },
    {screenName: "SeasonalDoxologies", label: "Seasonal Doxologies", component: SeasonalDoxologies, },
    ],
  },
  {
    screenName: "Songs",
    label: "Spiritual Songs",
    component: Songs,
    children: [
      {
        screenName: "AllSongs",
        label: "All Spiritual Songs",
        component: AllSongs,
      },
      {
        screenName: "ComfortSongs",
        label: "Comfort Songs",
        component: ComfortSongs,
      },
      {
        screenName: "NayroozSongs",
        label: "Coptic New Year Songs",
        component: NayroozSongs,
      },
      {
        screenName: "ResurrectionSongs",
        label: "Resurrection Songs",
        component: ResurrectionSongs,
      },
      {
        screenName: "StMarySongs",
        label: "St Mary Songs",
        component: StMarySongs,
      },
      
    ],
  },
];

export const RouteConfig = [...StaticScreens, ...transformHolyWeekData(HolyWeekData)];

function logRouteComponents(routes, level = 0) {
  routes.forEach((route) => {
    const indent = " ".repeat(level * 2);
    console.log(`${indent}- ${route.screenName}: ${!!route.component}`);
    if (route.children) {
      logRouteComponents(route.children, level + 1);
    }
  });
}

logRouteComponents(RouteConfig);

