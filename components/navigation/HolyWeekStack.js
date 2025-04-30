import HolyWeekNew from "../screens/holyWeekNew";
import HolyWeekDayScreen from "../screens/holyWeek/hwDayScreen";
import HolyWeekHourScreen from "../screens/holyWeek/hwHourScreen";


export function transformHolyWeekData (holyWeekData) {
  // Transform holy week data into a nested structure
  const children = holyWeekData.map((item) => ({
    screenName: item.service[0].replace(/\s+/g, "-"), // Unique name for the service
    label: item.service[0], // Label for the service
    component: HolyWeekDayScreen, // Main component for the service
    params: { serviceName: item.service[0] }, // Pass additional params
    children: item.hours.map((hour) => ({
      screenName: hour.linkStack ? `${item.service[0].replace(/\s+/g, "-")}-${hour.hour[0].replace(/\s+/g, "-")}` : `${item.service[0].replace(/\s+/g, "-")}-${hour.hour[0].replace(/\s+/g, "-")}`,
      label: hour.hour[0], // Label for the hour
      component: HolyWeekHourScreen,
      params: { serviceName: item.service[0], hourName: hour.hour[0] }, // Pass additional params
      linkStack: hour.linkStack ? hour.linkStack : false, // Link to the stack if specified 
    })),
  }));
  console.log(children[5].children);
  // Return the parent screen with all the transformed children
  return [
    {
      screenName: "HolyWeekNew",
      label: "Holy Pascha Week - New",
      component: HolyWeekNew,
      children: children, // Attach the transformed children here
    },
  ];
}
