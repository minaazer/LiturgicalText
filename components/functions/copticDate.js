/** @format */

import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry.js";
import { copticSaintFeasts } from "./synexarium.js";

// Helper function to determine if a year is a leap year (in the Julian/Gregorian sense)
function isGregorianLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function gregorianToCoptic(gregorianDate) {
  const gregorianYear = gregorianDate.getFullYear();
  const gregorianMonth = gregorianDate.getMonth();
  const gregorianDay = gregorianDate.getDate();

  // Coptic New Year starts on September 11 (or September 12 in the year before a Gregorian leap year)
  const isNextYearLeap = isGregorianLeapYear(gregorianYear + 1);
  const copticNewYearDay = isNextYearLeap ? 12 : 11;

  // Coptic New Year in the current Gregorian year
  const copticNewYearDate = new Date(gregorianYear, 8, copticNewYearDay); // September 11 or 12

  let copticYear;
  let diffInDays = Math.floor(
    (gregorianDate - copticNewYearDate) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays >= 0) {
    // Date is after the Coptic New Year
    copticYear = gregorianYear - 283;
  } else {
    // Date is before the Coptic New Year, so it's part of the previous Coptic year
    const prevCopticNewYearDate = new Date(
      gregorianYear - 1,
      8,
      isGregorianLeapYear(gregorianYear) ? 12 : 11
    );
    diffInDays = Math.floor(
      (gregorianDate - prevCopticNewYearDate) / (1000 * 60 * 60 * 24)
    );
    copticYear = gregorianYear - 284;
  }

  // Calculate the Coptic month and day
  let copticMonthIndex, copticDay;
  if (diffInDays >= 360) {
    // We're in the 13th month (Nasie)
    copticMonthIndex = 12; // Nasie (13th month)
    copticDay = diffInDays - 360 + 1;
  } else {
    // Normal months (1-12)
    copticMonthIndex = Math.floor(diffInDays / 30);
    copticDay = (diffInDays % 30) + 1;
  }

  // Get the Coptic month name from the array
  const copticMonthName = copticMonths[copticMonthIndex];

  // Return the Coptic date
  return {
    copticDay: copticDay,
    copticMonthName: copticMonthName,
    copticYear: copticYear,
  };
}

function copticToGregorian(copticDate) {
  const copticYear = copticDate.copticYear;
  const copticMonth = copticMonths.indexOf(copticDate.copticMonthName); // Index of the Coptic month (0-12)
  const copticDay = copticDate.copticDay;

  // Determine the correct Gregorian year
  let gregorianYear = copticYear + 283;

  // Check if the next Gregorian year is a leap year (affects Nasie and Coptic New Year date)
  const nextYearLeap = isGregorianLeapYear(gregorianYear + 1);

  // Coptic New Year falls on September 11, or 12 if the next Gregorian year is a leap year
  const copticNewYearDay = nextYearLeap ? 12 : 11;
  const copticNewYearDate = new Date(gregorianYear, 8, copticNewYearDay);

  // Calculate how many days have passed since the Coptic New Year
  let daysSinceNewYear = copticMonth * 30 + (copticDay - 1);

  // Handle Nasie (13th month, index 12): 5 or 6 days depending on the leap year
  if (copticMonth === 12) {
    // Nasie
    if (copticDay > (nextYearLeap ? 6 : 5)) {
      throw new Error(
        `Invalid day in Nasie. Max is ${nextYearLeap ? 6 : 5} days.`
      );
    }
    daysSinceNewYear = 12 * 30 + (copticDay - 1); // Nasie is after the 12th month (12 * 30 days)
  }

  // Add the number of days since the Coptic New Year to the Coptic New Year date
  const gregorianDate = new Date(
    copticNewYearDate.getTime() + daysSinceNewYear * 24 * 60 * 60 * 1000
  );

  return gregorianDate;
}

// Coptic months array
const copticMonths = [
  "Tout", // 1st month
  "Baba", // 2nd month
  "Hator", // 3rd month
  "Kiahk", // 4th month
  "Tobe", // 5th month
  "Meshir", // 6th month
  "Paremhotep", // 7th month
  "Parmoute", // 8th month
  "Pashons", // 9th month
  "Paona", // 10th month
  "Epip", // 11th month
  "Mesore", // 12th month
  "Nasie", // 13th month (short, 5-6 days)
];
const fixedFeastsCopticDates = [
  {
    date: "Tout 1",
    season: "Nayrouz (Coptic New Year)",
    priority: 2,
    visible: true,
  },
  {
    start: "Tout 2",
    end: "Tout 16",
    season: "Nayrouz Festive Season",
    priority: 2,
    visible: false,
  },
  {
    start: "Tout 17",
    end: "Tout 19",
    season: "Feast of the Cross",
    priority: 2,
    visible: true,
  },
  {
    date: "Tout 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    date: "Baba 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    start: "Hator 16",
    end: "Kiahk 28",
    season: "Fast of the Nativity (Advent)",
    priority: 3,
    visible: false,
  },
  {
    start: "Hator 16",
    end: "Kiahk 28",
    season: "Fast of the Nativity (Advent)",
    priority: 3,
    nextYear: true,
    visible: true,
  },
  {
    date: "Hator 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    start: "Kiahk 1",
    end: "Kiahk 28",
    season: "Kiahk",
    priority: 3,
    visible: false,
  },
  {
    start: "Kiahk 1",
    end: "Kiahk 29",
    season: "Kiahk",
    priority: 3,
    nextYear: true,
    visible: true,
  },
  {
    date: "Kiahk 29",
    season: "Feast of the Nativity",
    priority: 1,
    nextYear: true,
    visible: true,
  },
  {
    date: "Kiahk 29",
    season: "Feast of the Nativity",
    priority: 1,
    visible: true,
  },
  {
    date: "Kiahk 30",
    season: "2nd Day of Nativity",
    priority: 2,
    visible: true,
  },
  {
    start: "Kiahk 30",
    end: "Tobe 5",
    season: "Nativity Season",
    priority: 2,
    visible: false,
  },
  {
    date: "Tobe 6",
    season: "Feast of the Circumcision",
    priority: 2,
    visible: true,
  },
  {
    date: "Tobe 11",
    season: "Feast of the Theophany",
    priority: 1,
    visible: true,
  },
  {
    date: "Tobe 12",
    season: "2nd Day of Theophany",
    priority: 2,
    visible: true,
  },
  {
    date: "Tobe 13",
    season: "Feast of the Wedding at Cana of Galilee",
    priority: 2,
    visible: true,
  },
  {
    date: "Tobe 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    start: "Meshir 8",
    season: "Presentation of the Lord Christ in the Temple",
    priority: 2,
    visible: true,
  },
  {
    date: "Meshir 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    date: "Paremhotep 10",
    season: "Feast of the Cross",
    priority: 2,
    visible: true,
  },
  {
    date: "Paremhotep 29",
    season: "Feast of the Annunciation",
    priority: 2,
    visible: true,
  },
  {
    date: "Parmoute 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    date: "Pashons 24",
    season: "Entrance of the Lord Christ into the Land of Egypt",
    priority: 2,
    visible: true,
  },
  {
    date: "Pashons 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    date: "Paona 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    date: "Epip 5",
    season: "Feast of the Apostles (Peter & Paul)",
    priority: 2,
    visible: true,
  },
  {
    date: "Epip 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
  {
    date: "Mesore 13",
    season: "Feast of the Transfiguration",
    priority: 2,
    visible: true,
  },
  {
    start: "Mesore 1",
    end: "Mesore 15",
    season: "Fast of St. Mary",
    priority: 3,
    visible: true,
  },
  {
    date: "Mesore 16",
    season: "Assumption of the Body of St. Mary",
    priority: 2,
    visible: true,
  },
  {
    date: "Mesore 29",
    season: "Joyful 29th of the Month",
    priority: 2,
    visible: true,
  },
];
function getCopticYear(copticMonthName, copticDay, gregorianYear) {
  // Determine the Coptic date of December 31st of the Gregorian year
  const gregorianDate = new Date(gregorianYear, 11, 31);
  const lastCopticDateOfYear = gregorianToCoptic(gregorianDate);
  // Determine if the Coptic date is between the Coptic New Year and the end of the year
  if (
    copticMonthName === copticMonths[0] ||
    copticMonthName === copticMonths[1] ||
    (copticMonthName === copticMonths[2] &&
      lastCopticDateOfYear.copticDay <= copticDay)
  ) {
    return gregorianYear - 283;
  } else {
    return gregorianYear - 284;
  }
}

function getFixedFeastDates(gregorianYear) {
  const fixedFeastsGregorianDates = [];

  function calculateParamon(gregorianDate, feastName, nextYear) {
    function getUTCDateDay(gregorianDate) {
      // Create a new date explicitly in UTC by passing year, month, and day
      const utcDate = new Date(
        Date.UTC(
          gregorianDate.getUTCFullYear(),
          gregorianDate.getUTCMonth(),
          gregorianDate.getUTCDate()
        )
      );
      return utcDate.getUTCDay(); // Get the day in UTC, 0 = Sunday, 6 = Saturday
    }

    const dayOfWeek = getUTCDateDay(gregorianDate);

    let paramonStart, paramonEnd, paramon;

    if (dayOfWeek === 0) {
      // Feast falls on Sunday, Paramon is on Saturday (one day)
      paramonStart = new Date(gregorianDate);
      paramonStart.setDate(gregorianDate.getDate() - 2);
      // paramonend = day after paramonstart
      paramonEnd = new Date(gregorianDate);
      paramonEnd.setDate(gregorianDate.getDate() - 1);
      paramon = {
        season: `${feastName} Paramoun`,
        start: paramonStart,
        end: paramonEnd,
        priority: 2,
        visible: true,
        nextYear: nextYear || false,
      };
    } else if (dayOfWeek === 1) {
      // Feast falls on Monday, Paramon is on Sunday (one day)
      paramonStart = new Date(gregorianDate);
      paramonStart.setDate(gregorianDate.getDate() - 3);
      paramonEnd = new Date(gregorianDate);
      paramonEnd.setDate(gregorianDate.getDate() - 1);
      paramon = {
        season: `${feastName} Paramoun`,
        start: paramonStart,
        end: paramonEnd,
        priority: 2,
        visible: true,
        nextYear: nextYear || false,
      };
    } else {
      // Paramon is on the day before the feast
      paramonStart = new Date(gregorianDate);
      paramonStart.setDate(gregorianDate.getDate() - 1);
      paramonEnd = paramonStart;
      paramon = {
        season: `${feastName} Paramoun`,
        date: paramonStart,
        priority: 2,
        visible: true,
        nextYear: nextYear || false,
      };
    }

    return paramon;
  }

  // Loop through each feast in fixedFeastsCopticDates
  fixedFeastsCopticDates.forEach((feast) => {
    if (feast.date) {
      // Handle feasts with a specific single date
      const [copticMonthName, copticDay] = feast.date.split(" ");
      const copticDate = {
        copticYear: getCopticYear(
          copticMonthName,
          parseInt(copticDay),
          feast.nextYear ? gregorianYear + 1 : gregorianYear
        ),
        copticMonthName,
        copticDay: parseInt(copticDay),
      };
      let gregorianDate = copticToGregorian(copticDate);

      // Special case for Paramon and leap year adjustment for Nativity and Theophany
      if (
        feast.season === "Feast of the Nativity" ||
        feast.season === "Feast of the Theophany"
      ) {
        // Check if Nativity needs adjustment based on Coptic leap year
        if (feast.season === "Feast of the Nativity") {
          const isLeap = isGregorianLeapYear(
            feast.nextYear ? gregorianYear + 1 : gregorianYear
          );
          // Adjust Nativity by 1 day for leap year
          if (isLeap) {
            gregorianDate = copticToGregorian({
              copticYear: copticDate.copticYear,
              copticMonthName: "Kiahk",
              copticDay: 28,
            });
            // Calculate 2nd Day of Nativity
            const secondDayNativity = new Date(gregorianDate);
            secondDayNativity.setDate(gregorianDate.getDate() + 1);
            fixedFeastsGregorianDates.push({
              season: "Feast of the Nativity (Observance)",
              date: secondDayNativity,
              priority: feast.priority,
              nextYear: feast.nextYear || false,
              visible: feast.visible,
            });
          }
        }

        const paramon = calculateParamon(
          gregorianDate,
          feast.season,
          feast.nextYear
        );
        fixedFeastsGregorianDates.push(paramon);
      }

      fixedFeastsGregorianDates.push({
        season: feast.season,
        date: gregorianDate,
        priority: feast.priority,
        visible: feast.visible,
        nextYear: feast.nextYear || false,
      });
    } else if (feast.start && feast.end) {
      // Handle feasts with a date range
      const [startMonthName, startDay] = feast.start.split(" ");
      const [endMonthName, endDay] = feast.end.split(" ");
      const adjustedGregorianYear = feast.nextYear
        ? gregorianYear + 1
        : gregorianYear;

      // Get the start and end Gregorian dates
      const copticStartDate = {
        copticYear: getCopticYear(
          startMonthName,
          parseInt(startDay),
          adjustedGregorianYear
        ),
        copticMonthName: startMonthName,
        copticDay: parseInt(startDay),
      };
      const copticEndDate = {
        copticYear: getCopticYear(
          endMonthName,
          parseInt(endDay),
          adjustedGregorianYear
        ),
        copticMonthName: endMonthName,
        copticDay: parseInt(endDay),
      };

      const gregorianStartDate = copticToGregorian(copticStartDate);
      const gregorianEndDate = copticToGregorian(copticEndDate);
      fixedFeastsGregorianDates.push({
        season: feast.season,
        start: gregorianStartDate,
        end: gregorianEndDate,
        priority: feast.priority,
        nextYear: feast.nextYear || false,
        visible: feast.visible,
      });
    }
  });

  // adjust kiahk end date to be the day before nativity paramon
  const kiahk = fixedFeastsGregorianDates.find(
    (feast) => feast.season === "Kiahk" && feast.end && !feast.nextYear
  );
  const nativityParamon = fixedFeastsGregorianDates.find(
    (feast) =>
      feast.season === "Feast of the Nativity Paramoun" &&
      feast.start &&
      !feast.nextYear
  );
  if (kiahk && nativityParamon) {
    kiahk.end = new Date(nativityParamon.start.getTime() - 86400000); // Subtract one day
    if ((kiahk.end - kiahk.start) / 86400000 < 24) {
      kiahk.start = new Date(kiahk.end.getTime() - 25 * 86400000); // Subtract 21 days
    }
  }

  const kiahkNextYear = fixedFeastsGregorianDates.find(
    (feast) => feast.season === "Kiahk" && feast.end && feast.nextYear
  );
  const nativityParamonNextYear = fixedFeastsGregorianDates.find(
    (feast) =>
      feast.season === "Feast of the Nativity Paramoun" &&
      feast.start &&
      feast.nextYear
  );
  if (kiahkNextYear && nativityParamonNextYear) {
    kiahkNextYear.end = new Date(
      nativityParamonNextYear.start.getTime() - 86400000
    ); // Subtract one day
    if ((kiahkNextYear.end - kiahkNextYear.start) / 86400000 < 24) {
      kiahkNextYear.start = new Date(
        kiahkNextYear.end.getTime() - 25 * 86400000
      ); // Subtract 21 days
    }
  }

  return fixedFeastsGregorianDates;
}

function getSaintFeasts(gregorianYear) {
  const saintFeastsGregorianDates = [];

  // Loop through each saint feast in copticSaintFeasts
  copticSaintFeasts.forEach((feast) => {
    if (feast.date) {
      // Handle saint feasts with a specific single date
      const [copticMonthName, copticDay] = feast.date.split(" ");
      const copticDate = {
        copticYear: getCopticYear(
          copticMonthName,
          parseInt(copticDay),
          gregorianYear
        ),
        copticMonthName,
        copticDay: parseInt(copticDay),
      };
      const gregorianDate = copticToGregorian(copticDate);

      saintFeastsGregorianDates.push({
        feast: feast.feast,
        date: gregorianDate,
        priority: feast.priority,
      });
    }
  });

  return saintFeastsGregorianDates;
}

function getJulianEaster(gregorianYear) {
  const a = gregorianYear % 4;
  const b = gregorianYear % 7;
  const c = gregorianYear % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;

  // Adjust for the Julian calendar difference (currently 13 days behind Gregorian calendar)
  const easterJulian = new Date(gregorianYear, month - 1, day + 13);

  return easterJulian;
}

// Function to calculate movable feasts
function getDynamicFeastDates(gregorianYear) {
  const easterDate = getJulianEaster(gregorianYear);
  const oneDay = 1000 * 60 * 60 * 24;

  const saturdayBeforeLent = new Date(easterDate.getTime() - 57 * oneDay);
  const sundayBeforeLent = new Date(easterDate.getTime() - 56 * oneDay);
  const lentStart = new Date(easterDate.getTime() - 55 * oneDay);
  const firstSundayOfLent = new Date(easterDate.getTime() - 49 * oneDay);
  const secondSundayOfLent = new Date(easterDate.getTime() - 42 * oneDay);
  const thirdSundayOfLent = new Date(easterDate.getTime() - 35 * oneDay);
  const fourthSundayOfLent = new Date(easterDate.getTime() - 28 * oneDay);
  const fifthSundayOfLent = new Date(easterDate.getTime() - 21 * oneDay);
  const sixthSundayOfLent = new Date(easterDate.getTime() - 14 * oneDay);
  const lentEnd = new Date(easterDate.getTime() - 9 * oneDay);
  const lazerusSaturday = new Date(easterDate.getTime() - 8 * oneDay);
  const palmSunday = new Date(easterDate.getTime() - 7 * oneDay);
  const holyWeekStart = new Date(easterDate.getTime() - 6 * oneDay);
  const covenantThursday = new Date(easterDate.getTime() - 3 * oneDay);
  const goodFriday = new Date(easterDate.getTime() - 2 * oneDay);
  const brightSaturday = new Date(easterDate.getTime() - oneDay);
  const easterMonday = new Date(easterDate.getTime() + 1 * oneDay);
  const thomasSunday = new Date(easterDate.getTime() + 7 * oneDay);
  const secondSundayOfPentacost = new Date(easterDate.getTime() + 14 * oneDay);
  const thirdSundayOfPentacost = new Date(easterDate.getTime() + 21 * oneDay);
  const fourthSundayOfPentacost = new Date(easterDate.getTime() + 28 * oneDay);
  const fifthSundayOfPentacost = new Date(easterDate.getTime() + 35 * oneDay);
  const sixthSundayOfPentacost = new Date(easterDate.getTime() + 42 * oneDay);
  const resurrectionEnd = new Date(easterDate.getTime() + 38 * oneDay);
  const ascension = new Date(easterDate.getTime() + 39 * oneDay);
  const ascensionSeasonStart = new Date(easterDate.getTime() + 40 * oneDay);
  const ascensionSeasonEnd = new Date(easterDate.getTime() + 48 * oneDay);
  const pentecost = new Date(easterDate.getTime() + 49 * oneDay);
  const apostlesFastStart = new Date(easterDate.getTime() + 50 * oneDay);
  const apostlesFastEnd = copticToGregorian({
    copticDay: 4,
    copticMonthName: "Epip",
    copticYear: gregorianYear - 284,
  });
  const jonahFastStart = new Date(lentStart.getTime() - 14 * oneDay);
  const jonahFastEnd = new Date(jonahFastStart.getTime() + 2 * oneDay);
  const jonahFeast = new Date(jonahFastStart.getTime() + 3 * oneDay);

  const dynamicFeasts = [
    {
      start: jonahFastStart,
      end: jonahFastEnd,
      season: "Jonah's Fast",
      priority: 2,
      visible: true,
    },
    {
      date: jonahFeast,
      season: "Jonah's Passover",
      priority: 2,
      visible: true,
    },
    {
      date: saturdayBeforeLent,
      season: "Saturday before the Great Fast",
      priority: 2,
      visible: true,
    },
    {
      date: sundayBeforeLent,
      season: "Sunday before the Great Fast",
      priority: 2,
      visible: true,
    },
    {
      start: lentStart,
      end: lentEnd,
      season: "Great Fast",
      priority: 2,
      visible: true,
    },
    {
      date: lentStart,
      season: "First Monday of the Great Fast",
      priority: 2,
      visible: false,
    },
    {
      date: firstSundayOfLent,
      season: "First Sunday of the Great Fast",
      priority: 1,
      visible: false,
    },
    {
      date: secondSundayOfLent,
      season: "Second Sunday of the Great Fast",
      priority: 1,
      visible: false,
    },
    {
      date: thirdSundayOfLent,
      season: "Third Sunday of the Great Fast",
      priority: 1,
      visible: false,
    },
    {
      date: fourthSundayOfLent,
      season: "Fourth Sunday of the Great Fast",
      priority: 1,
      visible: false,
    },
    {
      date: fifthSundayOfLent,
      season: "Fifth Sunday of the Great Fast",
      priority: 1,
      visible: false,
    },
    {
      date: sixthSundayOfLent,
      season: "Sixth Sunday of the Great Fast",
      priority: 1,
      visible: false,
    },
    {
      date: lentEnd,
      season: "Last Friday of the Great Fast",
      priority: 1,
      visible: true,
    },
    {
      date: lazerusSaturday,
      season: "Lazarus Saturday",
      priority: 1,
      visible: true,
    },
    { date: palmSunday, season: "Hosanna Sunday", priority: 1, visible: true },
    {
      start: holyWeekStart,
      end: brightSaturday,
      season: "Holy Week (Pascha)",
      priority: 1,
      visible: true,
    },
    {
      date: covenantThursday,
      season: "Covenant Thursday",
      priority: 1,
      visible: true,
    },
    { date: goodFriday, season: "Good Friday", priority: 1, visible: true },
    {
      date: brightSaturday,
      season: "Joyous Saturday",
      priority: 1,
      visible: true,
    },
    {
      date: easterDate,
      season: "Feast of the Resurrection",
      priority: 1,
      visible: true,
    },
    {
      start: easterMonday,
      end: resurrectionEnd,
      season: "Holy 50 Days - Before Ascension",
      priority: 1,
      visible: false,
    },
    {
      date: easterMonday,
      season: "2nd Day of the Resurrection",
      priority: 1,
      visible: true,
    },
    { date: thomasSunday, season: "Thomas Sunday", priority: 1, visible: true },
    {
      date: secondSundayOfPentacost,
      season: "Second Sunday of Pentecost",
      priority: 1,
      visible: false,
    },
    {
      date: thirdSundayOfPentacost,
      season: "Third Sunday of Pentecost",
      priority: 1,
      visible: false,
    },
    {
      date: fourthSundayOfPentacost,
      season: "Fourth Sunday of Pentecost",
      priority: 1,
      visible: false,
    },
    {
      date: fifthSundayOfPentacost,
      season: "Fifth Sunday of Pentecost",
      priority: 1,
      visible: false,
    },
    {
      date: ascension,
      season: "Feast of the Ascension",
      priority: 1,
      visible: true,
    },
    {
      date: sixthSundayOfPentacost,
      season: "Sixth Sunday of Pentecost",
      priority: 1,
      visible: false,
    },
    {
      start: ascensionSeasonStart,
      end: ascensionSeasonEnd,
      season: "Holy 50 Days - After Ascension",
      priority: 1,
      visible: false,
    },
    {
      date: pentecost,
      season: "Feast of Pentecost",
      priority: 1,
      visible: true,
    },
    {
      start: apostlesFastStart,
      end: apostlesFastEnd,
      season: "Apostles' Fast",
      priority: 2,
      visible: true,
    },
  ];

  return dynamicFeasts;
}

// Get the fixed and movable Coptic seasons and feasts
function getCopticSeasons(gregorianYear) {
  const dynamicFeasts = getDynamicFeastDates(gregorianYear);
  const fixedFeasts = getFixedFeastDates(gregorianYear);
  const copticSeasons = [...dynamicFeasts, ...fixedFeasts];

  copticSeasons.sort((a, b) => {
    const dateA = a.date || a.start;
    const dateB = b.date || b.start;
    return new Date(dateA) - new Date(dateB);
  });

  return copticSeasons;
}

// Get the date factoring in the day transition time (e.g., 12:00 PM)
function getAdjustedDate(gregorianDate, dayTransitionTime) {
  const [transitionHour, transitionMinute] = dayTransitionTime
    .split(":")
    .map(Number);
  // Check if the current time of gregorianDate is after the dayTransitionTime
  const hoursOffset = gregorianDate.getTimezoneOffset() / 60;

  const currentHours = gregorianDate.getHours() + hoursOffset;
  const currentMinutes = gregorianDate.getMinutes();

  // Reset the hours to start at midnight (local time)
  const adjustedDate = new Date(gregorianDate);
  adjustedDate.setHours(0, 0, 0, 0);

  if (
    currentHours > transitionHour ||
    (currentHours === transitionHour && currentMinutes >= transitionMinute)
  ) {
    // If it's after the transition time, treat the date as the next day
    adjustedDate.setDate(gregorianDate.getDate() + 1);
  }

  return adjustedDate;
}

// Utility function to compare dates and match the season
function findCopticSeason(gregorianDateAdjusted, copticSeasons) {
  // Get the hours and minutes of the transition time
  let matchingSeasons = [];

  // Iterate through the copticSeasons array to find all matching seasons
  for (let season of copticSeasons) {
    if (season.start && season.end) {
      // If the season has a range (start and end date), check if the input date is within the range
      const startDate = new Date(season.start);
      const endDate = new Date(season.end);

      // Normalize start and end dates to UTC
      if (
        compareDatesInUTC(gregorianDateAdjusted, startDate) >= 0 &&
        compareDatesInUTC(gregorianDateAdjusted, endDate) <= 0
      ) {
        matchingSeasons.push(season); // Add the matching season to the list
      }
    } else if (season.date) {
      // If the season has a single date, check if it matches the input date
      const seasonDate = new Date(season.date);

      // Compare dates using UTC components
      if (compareDatesInUTC(gregorianDateAdjusted, seasonDate) === 0) {
        matchingSeasons.push(season); // Add the matching season to the list
      }
    }
  }

  // Find the lowest priority among the matching seasons (lower number = higher priority)
  let highestPriority = Math.min(
    ...matchingSeasons.map((season) => season.priority),
    Infinity
  );

  // Filter the matching seasons to include only those with the lowest priority
  let highestPrioritySeasons = matchingSeasons.filter(
    (season) => season.priority === highestPriority
  );

  // Return the highest priority season(s) as an array
  if (highestPrioritySeasons.length > 0) {
    return highestPrioritySeasons.map((season) => season.season); // Always return an array of seasons
  }

  // If no matching seasons, return a default message in an array
  return ["Annual Season"];
}

function findSaintFeast(copticDate) {
  let matchingFeasts = [];
  const copticMonthDay = `${copticDate.copticMonthName} ${copticDate.copticDay}`;

  for (let feast of copticSaintFeasts) {
    if (feast.date === copticMonthDay) {
      matchingFeasts.push(feast);
    }
  }

  return matchingFeasts;
}

// Helper function to compare two dates using UTC (ignoring time zone)
function compareDatesInUTC(date1, date2) {
  const year1 = date1.getUTCFullYear();
  const month1 = date1.getUTCMonth();
  const day1 = date1.getUTCDate();

  const year2 = date2.getUTCFullYear();
  const month2 = date2.getUTCMonth();
  const day2 = date2.getUTCDate();

  if (year1 !== year2) {
    return year1 - year2;
  } else if (month1 !== month2) {
    return month1 - month2;
  } else {
    return day1 - day2;
  }
}

function getAktonkAki(today, copticSeasons) {
  let aktonkAki = {
    arabic: "",
    coptic: "",
    english: "",
  };
  // Find the second Sunday of Hator for the current Coptic year

  // Create a table of date ranges for specific periods
  const avmask = {
    start: getSeasonDate("Feast of the Nativity", copticSeasons, false, "date"),
    end: getSeasonDate(
      "Feast of the Circumcision",
      copticSeasons,
      false,
      "date"
    ),
  };

  const akoms = {
    start: getSeasonDate(
      "Feast of the Theophany",
      copticSeasons,
      false,
      "date"
    ),
    end: getSeasonDate("2nd Day of Theophany", copticSeasons, false, "date"),
  };
  akoms.end.setDate(akoms.end.getDate() + 1); // Add 1 day to the end of the Theophany

  const avashk = {
    cross1: getSeasonDate("Feast of the Cross", copticSeasons, false, "date"),
    cross3start: getSeasonDate(
      "Feast of the Cross",
      copticSeasons,
      false,
      "start"
    ),
    cross3end: getSeasonDate("Feast of the Cross", copticSeasons, false, "end"),
    paschaStart: getSeasonDate(
      "Feast of the Cross",
      copticSeasons,
      false,
      "start"
    ),
    paschaEnd: getSeasonDate("Holy Week (Pascha)", copticSeasons, false, "end"),
  };

  // Aktonk is from the Feast of the Resurrection to the Feast of Pentecost
  const aktonk = {
    start: getSeasonDate(
      "Feast of the Resurrection",
      copticSeasons,
      false,
      "date"
    ),
    end: getSeasonDate("Feast of Pentecost", copticSeasons, false, "date"),
    sundayEnd: getSeasonDate(
      "Fast of the Nativity - Advent",
      copticSeasons,
      true,
      "start"
    ),
  };

  // Check if today is between the Resurrection and Pentecost
  if (today >= aktonk.start && today <= aktonk.end) {
    aktonkAki.arabic = "قمت";
    aktonkAki.coptic = "ⲁⲕⲧⲟⲛⲕ";
    aktonkAki.english = "risen";
  }
  // Check if today is a Sunday after Pentecost but before the second Sunday of Hator
  else if (isSunday(today) && today > aktonk.end && today < aktonk.sundayEnd) {
    aktonkAki.arabic = "قمت";
    aktonkAki.coptic = "ⲁⲕⲧⲟⲛⲕ";
    aktonkAki.english = "risen";
  }
  // Other periods (avmask, akoms, avashk)
  else if (today >= avmask.start && today <= avmask.end) {
    aktonkAki.arabic = "ولدت";
    aktonkAki.coptic = "ⲁⲩⲙⲁⲥⲕ";
    aktonkAki.english = "born";
  } else if (today >= akoms.start && today <= akoms.end) {
    aktonkAki = "Akoms";
  } else if (
    (today >= avashk.cross3start && today <= avashk.cross3end) ||
    (today >= avashk.paschaStart && today <= avashk.paschaEnd) ||
    today === avashk.cross1
  ) {
    aktonkAki.arabic = "صلبت";
    aktonkAki.coptic = "ⲁⲩⲁϣⲕ";
    aktonkAki.english = "crucified";
  } else {
    aktonkAki.arabic = "أتيت";
    aktonkAki.coptic = "ⲁⲕⲓ̀";
    aktonkAki.english = "come";
  }

  return aktonkAki;
}

// Helper function to find the start or end date for a specific season
function getSeasonDate(seasonName, copticSeasons, nextYear, type) {
  // Filter the seasons to match the season name and nextYear value
  const filteredSeasons = copticSeasons.filter((s) => {
    if (s.season !== seasonName) return false;

    // Check nextYear value
    if (nextYear === true) {
      return s.nextYear === true;
    } else if (nextYear === false) {
      return s.nextYear === false || typeof s.nextYear === "undefined";
    }

    return false;
  });

  // Iterate through the filtered seasons to find one with the desired type
  for (let season of filteredSeasons) {
    if (type === "start" && season.start) {
      return new Date(season.start);
    } else if (type === "end" && season.end) {
      return new Date(season.end);
    } else if (type === "date" && season.date) {
      return new Date(season.date);
    }
  }

  // If no matching season with the required type is found, return null
  return null;
}

// Helper function to check if today is a Sunday
function isSunday(date) {
  return date.getDay() === 0; // Sunday is represented by 0 in JavaScript's Date object
}

// function to determine abstaining day
function getAbstainingDay(copticSeason, weekdayWeekend, dayOfWeekIndex) {
  const seasons = Array.isArray(copticSeason)
    ? copticSeason
    : copticSeason
    ? [copticSeason]
    : [];

  if (seasons.some((season) => String(season).includes("Joyous Saturday"))) {
    return true; // Abstaining on Joyous Saturday
  }
  else if (weekdayWeekend === 'weekend') { 
    return false; // No abstaining on weekends
  } 
  else {
    const excludedSeasons = [
      "Holy 50 Days - Before Ascension",
      "Holy 50 Days - After Ascension",
    ];
    const isExcludedSeason = seasons.some((season) =>
      excludedSeasons.includes(season)
    );
    const isWedOrFri = dayOfWeekIndex === 3 || dayOfWeekIndex === 5;
    if (isWedOrFri && !isExcludedSeason) {
      return true;
    }

    const abstainingSeasons = [
    "Great Fast",
    "Feast of the Nativity Paramoun",
    "Feast of the Theophany Paramoun",
    "Nativity Fast - Advent",
    "Apostles' Fast",
  ];
  return seasons.some((season) => abstainingSeasons.includes(season));
}
}

function enrichCopticSeasons(copticSeason, weekdayWeekend) {
  const seasons = Array.isArray(copticSeason)
    ? copticSeason
    : copticSeason
    ? [copticSeason]
    : [];
  const seasonSet = new Set(seasons);

  if (seasonSet.has("Great Fast")) {
    seasonSet.add(
      weekdayWeekend === "weekend"
        ? "Great Fast Weekends"
        : "Great Fast Weekdays"
    );
  }

  const feastDays = [
    "Feast of the Nativity",
    "2nd Day of Nativity",
    "Nativity Season",
    "Feast of the Circumcision",
    "Feast of the Theophany",
    "2nd Day of Theophany",
    "Feast of the Wedding at Cana of Galilee",
    "Joyful 29th of the Month",
    "Feast of the Cross",
    "Hosanna Sunday",
    "Feast of the Annunciation",
    "Feast of the Resurrection",
    "Holy 50 Days - Before Ascension",
    "Holy 50 Days - After Ascension",
    "Feast of the Ascension",
    "Feast of Pentecost",
    "Entrance of the Lord Christ into the Land of Egypt",
    "Feast of the Transfiguration",
    "Nayrouz (Coptic New Year)",
    "Nayrouz Festive Season",
  ];
  if (seasons.some((season) => feastDays.includes(season))) {
    seasonSet.add("Feast Day");
  }

  const feastsOfTheLord = [
    "Feast of the Nativity",
    "2nd Day of Nativity",
    "Nativity Season",
    "Feast of the Circumcision",
    "Feast of the Theophany",
    "2nd Day of Theophany",
    "Feast of the Wedding at Cana of Galilee",
    "Joyful 29th of the Month",
    "Hosanna Sunday",
    "Feast of the Annunciation",
    "Feast of the Resurrection",
    "Holy 50 Days - Before Ascension",
    "Holy 50 Days - After Ascension",
    "Feast of the Ascension",
    "Feast of Pentecost",
    "Entrance of the Lord Christ into the Land of Egypt",
    "Feast of the Transfiguration",
  ];
  if (seasons.some((season) => feastsOfTheLord.includes(season))) {
    seasonSet.add("Feast of the Lord");
  }

  return Array.from(seasonSet);
}

// function to get selectedDate properties
function getSelectedDateProperties(selectedDate, dayTransitionTime) {
  // get the date in the current time zone
  const utcDate = new Date(selectedDate);
  const gregorianDate = new Date(
    utcDate.getTime() - utcDate.getTimezoneOffset() * 60000
  ); // Convert to local time\
  const adjustedDate = getAdjustedDate(gregorianDate, dayTransitionTime);
  const copticDate = gregorianToCoptic(adjustedDate);
  const copticSeasons = getCopticSeasons(adjustedDate.getFullYear());
  let copticSeason = findCopticSeason(adjustedDate, copticSeasons);
  const saintFeast = findSaintFeast(copticDate);
  const dayOfWeek = adjustedDate.getDay();
  const isAdam = dayOfWeek >= 0 && dayOfWeek <= 2;
  const adamOrWatos = isAdam ? "Adam" : "Watos";
  const aktonkAki = getAktonkAki(adjustedDate, copticSeasons, copticDate);
  const dayOfWeekIndex = adjustedDate.getDay();
  const weekdayWeekend = dayOfWeekIndex === 0 || dayOfWeekIndex === 6 ? 'weekend' : 'weekday';
  copticSeason = enrichCopticSeasons(copticSeason, weekdayWeekend);
  const abstainingDay = getAbstainingDay(
    copticSeason,
    weekdayWeekend,
    dayOfWeekIndex
  );
  console.log("Abstaining Day:", abstainingDay);
  console.log("Coptic Season:", copticSeason);

  return {
    gregorianDate,
    copticDate,
    copticSeason,
    adamOrWatos,
    saintFeast,
    dayOfWeekIndex,
    aktonkAki,
    adjustedDate,
    weekdayWeekend,
    abstainingDay,
  };
}

// Example usage:

export {
  gregorianToCoptic,
  copticToGregorian,
  getCopticSeasons,
  findCopticSeason,
  getFixedFeastDates,
  getDynamicFeastDates,
  getJulianEaster,
  getAdjustedDate,
  getSelectedDateProperties,
};
