
/**
 * @param {TableRow[]} rows
 * @param {{
 *   filterRows?: (row: TableRow) => boolean,
 *   rowFilters?: Record<string, any> | Array<Record<string, any>>,
 *   eshlilFlag?: boolean,
 *   openingCurtainFlag?: boolean,
 *   paschalReadingsFull?: boolean,
 *   tableFlags?: { eshlil?: boolean, openingCurtain?: boolean }
 * }} [options]
 */
export function filterTableRows(rows, options = {}) {
  const filterRows = options.filterRows || (() => true);
  const tableFlags = options.tableFlags;
  const rowFilters = options.rowFilters;
  const rowFilterEntries = Array.isArray(rowFilters)
    ? rowFilters.flatMap((entry) =>
        entry && typeof entry === "object" ? Object.entries(entry) : []
      )
    : rowFilters && typeof rowFilters === "object"
    ? Object.entries(rowFilters)
    : [];

  return rows.filter((row) => {
    if (!filterRows(row)) return false;
    if (
      rowFilterEntries.length &&
      rowFilterEntries.some(
        ([key, value]) => row[key] !== undefined && row[key] !== value
      )
    ) {
      return false;
    }
    if (options.eshlilFlag === false && row.eshlil === true) return false;
    if (options.openingCurtainFlag === false && row.openingCurtain === true)
      return false;
    if (tableFlags?.eshlil === false && row.eshlil === true) return false;
    if (tableFlags?.openingCurtain === false && row.openingCurtain === true)
      return false;
    if (
      options.paschalReadingsFull === false &&
      row.nonTraditionalPascha === true
    )
      return false;
    return true;
  });
}

export function resolveRepeatedPrauersData(data, repeatedPrayersData) {
  if (!Array.isArray(data)) return [];
  if (!Array.isArray(repeatedPrayersData)) return [];

  // Flags on placeholders that should be forwarded to injected repeated-prayer tables.
  // Extend this list to support additional opt-in flags.
  const passThroughFlags = ["eshlil", "openingCurtain"];

  return data.flatMap((item) => {
    if (
      item &&
      item.category &&
      item.repeated_prayer_title &&
      item.source &&
      item.source === "Annual"
    ) {
      const category = item.category;
      const repeated_prayer_title = item.repeated_prayer_title;

      const categoryEntry = repeatedPrayersData.find(
        (entry) => entry.category === category
      );
      if (!categoryEntry || !Array.isArray(categoryEntry.tables)) {
        console.warn(
          `Repeated prayer category not found or invalid: ${category}`
        );
        return item;
      }

      const replacements = categoryEntry.tables.filter(
        (table) => table.title === repeated_prayer_title
      );
      if (!replacements.length) {
        console.warn(
          `Repeated prayer table not found for category "${category}" and title "${repeated_prayer_title}"`
        );
        return item;
      }

      const replacementsWithFlags = replacements.map((table) => {
        const updated = { ...table };
        passThroughFlags.forEach((flag) => {
          if (Object.prototype.hasOwnProperty.call(item, flag)) {
            updated[flag] = item[flag];
          }
        });
        return updated;
      });

      return replacementsWithFlags;
    }
    return item;
  });
}

export function resolveSeasonalPraisesData(
  data,
  seasons,
  dayOfTheWeek,
  adamWatos,
  seasonalPraisesData
) {
  if (!Array.isArray(data)) return [];

  const hasValue = (value) =>
    value !== undefined && value !== null && value !== "";
  const normalizeToArray = (value) => (Array.isArray(value) ? value : [value]);
  const seasonsMatch = (requestedSeasons, entrySeasons) => {
    if (!hasValue(entrySeasons)) return true; // entry applies to all seasons
    if (!hasValue(requestedSeasons)) return true; // no filter provided
    const requested = normalizeToArray(requestedSeasons);
    const entry = normalizeToArray(entrySeasons);
    return entry.some((s) => requested.includes(s));
  };

  const dayOfTheWeekMatch = (currentDayOfTheWeek, expectedDayOfTheWeek) => {
    if (!hasValue(expectedDayOfTheWeek)) return true;
    return currentDayOfTheWeek === expectedDayOfTheWeek;
  };

  const adamWatosMatch = (currentAdamWatos, expectedAdamWatos) => {
    if (!hasValue(expectedAdamWatos)) return true;
    return currentAdamWatos === expectedAdamWatos;
  };

  return data.flatMap((item) => {
    if (item && item.seasonalPraises && item.section_title) {
      // First make sure this placeholder itself applies to the current day.
      if (!item.postFirstCanticleNonSunday || dayOfTheWeek === "Sunday") {
        if (
          item.dayOfTheWeek &&
          !dayOfTheWeekMatch(dayOfTheWeek, item.dayOfTheWeek)
        ) {
          return [];
        }
      }

      const placement = item.section_title;
      const replacements = seasonalPraisesData.filter((entry) => {
        const placementMatch =
          Array.isArray(entry.placement) && entry.placement.includes(placement);
        const seasonMatch = seasonsMatch(seasons, entry.season);
        // Entries may optionally specify a day-of-week as well.
        const dayMatch = dayOfTheWeekMatch(dayOfTheWeek, entry.dayOfTheWeek);
        const adamWatosMatchResult = adamWatosMatch(adamWatos, entry.adamWatos);
        return (
          placementMatch && seasonMatch && dayMatch && adamWatosMatchResult
        );
      });
      return replacements;
    }
    return item;
  });
}

export function resolveConditionalTables(data, { aktonkAki, seasons }) {
  
  if (!Array.isArray(data)) return [];

  const hasValue = (value) =>
    value !== undefined && value !== null && value !== "";
  const normalizeToArray = (value) => (Array.isArray(value) ? value : [value]);

  const aktonkAkiEnglish = aktonkAki?.english;
  const selectedSeasons = hasValue(seasons) ? normalizeToArray(seasons) : [];

  return data.filter((item) => {
    if (!item || typeof item !== "object") return true;

      // Include only if aktonkAki matches when specified on the item.
      if (hasValue(item.aktonkAki)) {
        if (!hasValue(aktonkAkiEnglish) || item.aktonkAki !== aktonkAkiEnglish) {
          console.log("resolveConditionalTables drop (aktonkAki)", {
            title: item.english_title || item.title,
            itemAktonkAki: item.aktonkAki,
            currentAktonkAki: aktonkAkiEnglish,
          });
          return false;
        }
      }

      // Exclude kiahk=false items when the current seasons include Kiahk.
      if (item.kiahk === false) {
        if (selectedSeasons.includes("Kiahk")) {
          console.log("resolveConditionalTables drop (kiahk=false in Kiahk)", {
            title: item.english_title || item.title,
          });
          return false;
        }
      }

      // Respect explicit season targeting on the item.
      if (hasValue(item.seasons)) {
        const itemSeasons = normalizeToArray(item.seasons);
        const matchesSeason = itemSeasons.some((s) =>
          selectedSeasons.includes(s)
        );
        if (!matchesSeason) {
          console.log("resolveConditionalTables drop (season mismatch)", {
            title: item.english_title || item.title,
            itemSeasons,
            selectedSeasons,
          });
          return false;
        }
      }

      return true;
    });
  }

/** @returns {any[]} */
export function resolveSeasonalAndAnnualHymns(data, seasons, adamWatos) {
if (!Array.isArray(data)) return [];

const hasValue = (value) =>
    value !== undefined && value !== null && value !== "";
const normalizeToArray = (value) => (Array.isArray(value) ? value : [value]);
const seasonsMatch = (requestedSeasons, entrySeasons) => {
    if (!hasValue(entrySeasons)) return true; // entry applies to all seasons
    if (!hasValue(requestedSeasons)) return true; // no filter provided
    const requested = normalizeToArray(requestedSeasons);
    const entry = normalizeToArray(entrySeasons);
    return entry.some((s) => requested.includes(s));
};

const adamWatosMatch = (currentAdamWatos, expectedAdamWatos) => {
    if (!hasValue(expectedAdamWatos)) return true;
    return currentAdamWatos === expectedAdamWatos;
};

return /** @type {any[]} */ (
    data.flatMap((item) => {
    const wantsSeasonal = item && item.seasonalHymns;
    const wantsAnnual = item && item.annualHymns;
    if (item && item.placement && (wantsSeasonal || wantsAnnual)) {
        const placement = item.placement;

        // Select the appropriate data sources based on the flags.
        const placementTables = /** @type {any[]} */ (
        [
            ...(wantsSeasonal ? seasonalRepeatedPrayersData : []),
            ...(wantsAnnual ? annualRepeatedPrayersData : []),
        ]
            .flatMap((entry) =>
            Array.isArray(entry.tables) ? entry.tables : []
            )
            .filter(
            (table) =>
                Array.isArray(table.placement) && table.placement.length
            )
        );

        /** @type {any[]} */
        const replacements = placementTables.filter((entry) => {
        const placementMatch =
            Array.isArray(entry.placement) &&
            entry.placement.includes(placement);
        const seasonMatch = seasonsMatch(seasons, entry.seasons);
        const adamWatosMatchResult = adamWatosMatch(
            adamWatos,
            entry.adamWatos
        );
        return placementMatch && seasonMatch && adamWatosMatchResult;
        });
        return /** @type {any} */ (replacements);
    }
    return item;
    })
);
}