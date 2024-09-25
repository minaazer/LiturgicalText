import Home from "../screens/home";
import Kiahk from "../screens/kiahk";
import Glorification from "../screens/glorification";
import HolyWeek from "../screens/holyWeek";
import DayOfSunday from "../screens/holyWeek/days/dayOfSunday";
import { DOS9sc, DOS11sc } from "../screens/holyWeek/hours/dOS";
import EveOfMonday from "../screens/holyWeek/days/eveOfMonday";

const RouteConfig = {
  Home: {
    screenName: "Home",
    label: "Home",
    component: Home,
  },
  Glorification: {
    screenName: "Glorification",
    label: "Glorification",
    component: Glorification,
  },
  Kiahk: {
    screenName: "Kiahk",
    label: "Kiahk Praises",
    component: Kiahk,
  },
  HolyWeek: {
    screenName: "HolyWeek",
    label: "Holy Week",
    component: HolyWeek,
    children: [
      {
        screenName: "DayOfSunday",
        label: "Day of Sunday",
        component: DayOfSunday,
        children: [
          { screenName: "DOS9sc", label: "9th Hour", component:DOS9sc },
          { screenName: "DOS11sc", label: "11th Hour" , component: DOS11sc},
        ],
      },
      {
        screenName: "EveOfMonday",
        label: "Eve of Monday",
        component: EveOfMonday,
        
      },
    ],
  },
};

export default RouteConfig;
