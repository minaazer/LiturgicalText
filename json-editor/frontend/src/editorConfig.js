export const emptyArray = [];

export const rowClassOptions = [
  "Intro",
  "Refrain",
  "commentary",
  "congregation",
  "intro",
  "navigationButton",
  "navigationLink",
  "north",
  "priest",
  "refrain",
  "silent-prayer",
  "south",
  "text",
];

export const tableOptionalFields = [
  "coptic_title",
  "arabic_title",
  "title",
  "nonTraditionalPascha",
  "postFirstCanticleNonSunday",
  "theotokiasIndex",
  "defaultVisibility",
  "explanation_button",
  "image_button",
  "caption_class",
  "themes",
  "seasons",
  "excludedSeasons",
  "placement",
  "saints",
  "service",
  "table_class",
  "dayOfTheWeek",
  "weekdayWeekend",
  "category",
  "aktonkAki",
];

export const tableBooleanFields = [
  "nonTraditionalPascha",
  "postFirstCanticleNonSunday",
  "theotokiasIndex",
  "defaultVisibility",
];

export const tableArrayFields = ["themes", "seasons", "excludedSeasons", "placement", "saints", "dayOfTheWeek"];

export const cellFieldOptions = ["english", "arabic", "coptic", "englishLink", "arabicLink"];

export const repeatedVarOptions = [
  "hour",
  "paschalPraise",
  "noProstrations",
  "nonTraditionalPascha",
  "firstVerse",
  "season",
  "eshlil",
];

export const baseRepeatedVarOptions = ["season", "passToTable.dayOfTheWeek"];

export const getOptionalDefaultValue = (field) => {
  if (tableBooleanFields.includes(field)) return false;
  if (tableArrayFields.includes(field)) return [];
  return "";
};

export const repeatedPrayerSources = [
  { label: "Holy Week", value: "Holy Week", categories: ["general", "prayers"] },
  { label: "Annual", value: "Annual", categories: ["hymns", "liturgical", "praises", "prayers"] },
  { label: "Seasonal", value: "Seasonal", categories: ["hymns", "parlexes"] },
  { label: "Seasonal Praises", value: "Seasonal Praises", categories: ["general"] },
  { label: "Agpeya Prayers", value: "Agpeya Prayers", categories: [] },
];

export const getCategoryOptionsForSource = (sourceValue) => {
  const entry = repeatedPrayerSources.find((s) => s.value === sourceValue);
  return entry?.categories || [];
};
