// Cell value key dropdown (CellsEditor)
export const CELL_FIELD_OPTIONS = ["english", "arabic", "coptic", "englishLink", "arabicLink"];

// Row class dropdown (RowEditor)
export const ROW_CLASS_OPTIONS = [
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

// Table optional fields dropdown (BaseTableEditor)
export const TABLE_OPTIONAL_FIELDS = [
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
  "table_class",
  "dayOfTheWeek",
  "weekdayWeekend",
  "category",
  "aktonkAki",
  "adamWatos",
  "abstainingDays",
];

// Table boolean fields (BaseTableEditor)
export const TABLE_BOOLEAN_FIELDS = [
  "nonTraditionalPascha",
  "postFirstCanticleNonSunday",
  "theotokiasIndex",
  "defaultVisibility",
  "abstainingDays",
];

// Table array fields (BaseTableEditor)
export const TABLE_ARRAY_FIELDS = ["themes", "seasons", "excludedSeasons", "placement", "saints", "dayOfTheWeek"];

// Repeated prayer variable dropdowns (Base/HolyWeek repeated prayer variables)
export const REPEATED_VAR_OPTIONS = [
  "hour",
  "paschalPraise",
  "noProstrations",
  "nonTraditionalPascha",
  "firstVerse",
  "seasons",
  "eshlil",
];

export const BASE_REPEATED_VAR_OPTIONS = ["seasons", "passToTable.dayOfTheWeek"];

// Repeated prayer source dropdown (Base/HolyWeek repeated prayer placeholders)
export const REPEATED_PRAYER_SOURCES = [
  { label: "Holy Week", value: "Holy Week", categories: ["general", "prayers"] },
  { label: "Annual", value: "Annual", categories: ["hymns", "liturgical", "praises", "prayers"] },
  { label: "Seasonal", value: "Seasonal", categories: ["hymns", "parlexes"] },
  { label: "Seasonal Praises", value: "Seasonal Praises", categories: ["general"] },
  { label: "Agpeya Prayers", value: "Agpeya Prayers", categories: [] },
];

export const getCategoryOptionsForSource = (sourceValue) => {
  const entry = REPEATED_PRAYER_SOURCES.find((s) => s.value === sourceValue);
  return entry?.categories || [];
};

// Row-level seasons dropdown options (RowFieldsEditor multi-selects)
// Fields: seasons, excludedSeasons
export const SEASON_OPTIONS = [
  "2nd Day of Nativity",
  "2nd Day of Theophany",
  "2nd Day of the Resurrection",
  "Annual Season",
  "Apostles' Fast",
  "Assumption of the Body of St. Mary",
  "Covenant Thursday",
  "Entrance of the Lord Christ into the Land of Egypt",
  "Fast of St. Mary",
  "Fast of the Nativity (Advent)",
  "Feast Day",
  "Feast of Pentecost",
  "Feast of the Annunciation",
  "Feast of the Apostles (Peter & Paul)",
  "Feast of the Ascension",
  "Feast of the Circumcision",
  "Feast of the Cross",
  "Feast of the Lord",
  "Feast of the Nativity",
  "Feast of the Nativity (Observance)",
  "Feast of the Nativity Paramoun",
  "Feast of the Resurrection",
  "Feast of the Theophany",
  "Feast of the Theophany Paramoun",
  "Feast of the Transfiguration",
  "Feast of the Wedding at Cana of Galilee",
  "Fifth Sunday of Pentecost",
  "Fifth Sunday of the Great Fast",
  "First Monday of the Great Fast",
  "First Sunday of the Great Fast",
  "Fourth Sunday of Pentecost",
  "Fourth Sunday of the Great Fast",
  "Good Friday",
  "Great Fast",
  "Great Fast Weekdays",
  "Great Fast Weekends",
  "Holy 50 Days - After Ascension",
  "Holy 50 Days - Before Ascension",
  "Holy Week (Pascha)",
  "Hosanna Sunday",
  "Jonah's Fast",
  "Jonah's Passover",
  "Joyful 29th of the Month",
  "Joyous Saturday",
  "Kiahk",
  "Last Friday of the Great Fast",
  "Lazarus Saturday",
  "Nativity Fast - Advent",
  "Nativity Season",
  "Nayrouz (Coptic New Year)",
  "Nayrouz Festive Season",
  "Presentation of the Lord Christ in the Temple",
  "Saturday before the Great Fast",
  "Second Sunday of Pentecost",
  "Second Sunday of the Great Fast",
  "Sixth Sunday of Pentecost",
  "Sixth Sunday of the Great Fast",
  "Sunday before the Great Fast",
  "Third Sunday of Pentecost",
  "Third Sunday of the Great Fast",
  "Thomas Sunday",
];

// Row array fields that should use the seasons options list (RowFieldsEditor)
export const ROW_ARRAY_OPTIONS = {
  seasons: SEASON_OPTIONS,
  excludedSeasons: SEASON_OPTIONS,
  services: [
    "liturgy",
    "vespers",
    "matins",
    "midnightPraises",
    "vespersPraises",
    "morningDoxology",
  ],
};

// Single-value dropdowns for specific row/table fields
export const ROW_FIELD_OPTIONS = {
  adamWatos: ["Adam", "Watos"],
};

export const TABLE_FIELD_OPTIONS = {
  adamWatos: ["Adam", "Watos"],
};

// Optional table field labels (BaseTableEditor)
export const TABLE_FIELD_LABELS = {
  english_title: "English title",
  coptic_title: "Coptic title",
  arabic_title: "Arabic title",
  caption_class: "Caption class",
  table_class: "Table class",
  explanation_button: "Explanation button",
  image_button: "Image button",
  nonTraditionalPascha: "Non-traditional Pascha",
  postFirstCanticleNonSunday: "Post first canticle (non-Sunday)",
  theotokiasIndex: "Theotokias index",
  defaultVisibility: "Default visibility",
  dayOfTheWeek: "Day of the week",
  weekdayWeekend: "Weekday/weekend",
  aktonkAki: "Aktonk Aki",
  adamWatos: "Adam/Watos",
  abstainingDays: "Abstaining days",
};

// Row optional field dropdown (RowEditor -> Add row field)
export const ROW_OPTIONAL_FIELDS = [
  "seasons",
  "excludedSeasons",
  "services",
  "saints",
  "adamWatos",
  "abstainingDays",
  "nonTraditionalPascha",
  "paschalPraise",
  "noProstrations",
  "firstVerse",
  "eshlil",
  "feastsOfTheLordSeasons",
  "hour",
  "first",
  "second",
  "third",
  "file",
  "row_class",
];

// Row boolean fields (RowFieldsEditor / RowEditor defaults)
export const ROW_BOOLEAN_FIELDS = [
  "abstainingDays",
  "nonTraditionalPascha",
  "noProstrations",
  "eshlil",
  "feastsOfTheLordSeasons",
];

// Row array fields (RowFieldsEditor / RowEditor defaults)
export const ROW_ARRAY_FIELDS = ["seasons", "excludedSeasons", "services", "saints"];

// Optional row field labels (RowFieldsEditor)
export const ROW_FIELD_LABELS = {
  seasons: "Seasons",
  excludedSeasons: "Excluded seasons",
  services: "Services",
  saints: "Saints",
  adamWatos: "Adam/Watos",
  abstainingDays: "Abstaining days",
  nonTraditionalPascha: "Non-traditional Pascha",
  paschalPraise: "Paschal praise",
  noProstrations: "No prostrations",
  firstVerse: "First verse",
  eshlil: "Eshlil",
  feastsOfTheLordSeasons: "Feasts of the Lord seasons",
  hour: "Hour",
  first: "First",
  second: "Second",
  third: "Third",
  file: "File",
  "row-class": "Row class",
  row_class: "Row class",
};
