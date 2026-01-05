/** @format */

// @ts-check

import hwRepeatedPrayersData from "../../data/jsons/repeatedPrayers/hwRepeatedPrayers.json";
import annualRepeatedPrayersData from "../../data/jsons/repeatedPrayers/annualRepeatedPrayers.json";
import seasonalRepeatedPrayersData from "../../data/jsons/repeatedPrayers/seasonalRepeatedPrayers.json";
import seasonalPraisesData from "../../data/jsons/psalmody/seasonalPraises.json";
import repeatedAgpeyaPrayersData from "../../data/jsons/repeatedPrayers/repeatedAgpeyaPrayers.json";
import { getJsonSync } from "./jsonCache";
import {
  book,
  musicalNote,
  playPause,
} from "../../data/iconVariables.js";

/**
 * @typedef {Record<string, string | number | boolean | null | undefined>} TemplateVars
 */

/**
 * @typedef {Object} NavigationData
 * @property {string=} destination
 * @property {string=} source
 */

/**
 * A single cell in a rendered row.
 * @typedef {Object} TableCell
 * @property {string=} english
 * @property {string=} arabic
 * @property {string=} coptic
 * @property {string=} skipButton
 * @property {string | NavigationData=} [dataNavigation]
 * @property {string | number | boolean | null | undefined} [anyOtherKey]
 */

/**
 * @typedef {Object} TableRow
 * @property {string=} rowClass
 * @property {TableCell[]} cells
 * @property {boolean=} nonTraditionalPascha
 * @property {boolean=} eshlil
 * @property {boolean=} openingCurtain
 * @property {NavigationData=} dataNavigation
 */

/**
 * @typedef {Object} HtmlTable
 * @property {string=} english_title
 * @property {string=} english_caption
 * @property {string=} arabic_title
 * @property {string=} arabic_caption
 * @property {string=} coptic_title
 * @property {string=} coptic_caption
 * @property {string=} caption_class
 * @property {string=} table_class
 * @property {string=} tableClass
 * @property {string=} caption_display
 * @property {boolean=} nonTraditionalPascha
 * @property {boolean=} eshlil
 * @property {boolean=} openingCurtain
 * @property {TableRow[]=} rows
 * @property {{ rows: TableRow[] }[]=} tbodies
 * @property {string=} explanation_button
 * @property {string=} image_button
 * @property {string=} audio_file
 */

/**
 * @typedef {Object} RepeatedPrayerTable
 * @property {string} title
 * @property {string=} english_caption
 * @property {string=} coptic_caption
 * @property {string=} arabic_caption
 * @property {string=} caption_class
 * @property {boolean=} nonTraditionalPascha
 * @property {string=} class
 * @property {boolean=} eshlil
 * @property {boolean=} openingCurtain
 * @property {string=} explanation_button
 * @property {string=} image_button
 * @property {string=} audio_file
 * @property {TableRow[]} rows
 */

const getRepeatedPrayersSources = () => ({
  "Holy Week": getJsonSync(
    "repeatedPrayers/hwRepeatedPrayers.json",
    hwRepeatedPrayersData
  ),
  Annual: getJsonSync(
    "repeatedPrayers/annualRepeatedPrayers.json",
    annualRepeatedPrayersData
  ),
  Seasonal: getJsonSync(
    "repeatedPrayers/seasonalRepeatedPrayers.json",
    seasonalRepeatedPrayersData
  ),
  "Seasonal Praises": getJsonSync(
    "psalmody/seasonalPraises.json",
    seasonalPraisesData
  ),
  "Agpeya Prayers": getJsonSync(
    "repeatedPrayers/repeatedAgpeyaPrayers.json",
    repeatedAgpeyaPrayersData
  ),
});

const hasValue = (value) =>
  value !== undefined && value !== null && value !== "";
const normalizeToArray = (value) => (Array.isArray(value) ? value : [value]);
const normalizeSeasons = (value) =>
  hasValue(value)
    ? normalizeToArray(value).map((s) =>
        typeof s === "string" ? s.toLowerCase() : s
      )
    : [];
const seasonsMatch = (requestedSeasons, entrySeasons) => {
  if (!hasValue(entrySeasons)) return true; // entry applies to all seasons
  if (!hasValue(requestedSeasons)) return true; // no filter provided
  const requested = normalizeSeasons(requestedSeasons);
  if (requested.length === 0) return true; // empty filter array means no filter
  const entry = normalizeSeasons(entrySeasons);
  return entry.some((s) => requested.includes(s));
};
const maxTemplateKeyCacheEntries = 200;
const globalScope =
  typeof globalThis !== "undefined" ? /** @type {any} */ (globalThis) : {};
const isDebug = globalScope.__DEV__ === true;
const debugLog = (...args) => {
  if (isDebug) console.log(...args);
};
const debugWarn = (...args) => {
  if (isDebug) console.warn(...args);
};

/**
 * @param {{ label: string; checked?: boolean; value?: string }[]} onePageSettings
 * @returns {{ label: string; checked?: boolean; value?: string }[]}
 */
export function getExpositionOnePageSettings(onePageSettings) {
  // Find the checked value of "Exposition Responses"
  const expositionCheckedValue = onePageSettings.find(
    (item) => item.label === "Exposition Responses"
  )?.checked;

  // Update and extend the onePageSettings array
  const updatedOnePageSettings = onePageSettings.map((item) => {
    if (item.label === "Exposition Responses") {
      return {
        ...item,
        label: "Daytime Exposition Introduction",
        value: "ExpositionDaytimeIntro",
      };
    }
    return item;
  });
  // Add new records with the same checked value
  if (typeof expositionCheckedValue !== "undefined") {
    updatedOnePageSettings.push(
      {
        checked: expositionCheckedValue,
        label: "Nighttime Exposition Introduction",
        value: "ExpositionNighttimeIntro",
      },
      {
        checked: expositionCheckedValue,
        label: "Exposition Conclusion",
        value: "ExpositionConclusion",
      }
    );
  }

  return updatedOnePageSettings;
}

/**
 * @param {string | number | boolean | null | undefined} template
 * @param {TemplateVars} variables
 * @returns {string}
 */
export function processTemplate(template, variables) {
  if (typeof template !== "string")
    return template === undefined || template === null ? "" : String(template);

  /** @type {Map<string, Set<string>>} */
  const missingTemplateKeysByTemplate =
    processTemplate._missingTemplateKeysByTemplate || new Map();
  processTemplate._missingTemplateKeysByTemplate =
    missingTemplateKeysByTemplate;
  const missingTemplateKeys =
    missingTemplateKeysByTemplate.get(template) || new Set();
  missingTemplateKeysByTemplate.set(template, missingTemplateKeys);
  if (missingTemplateKeysByTemplate.size > maxTemplateKeyCacheEntries) {
    const oldestTemplate = missingTemplateKeysByTemplate.keys().next().value;
    if (oldestTemplate) {
      missingTemplateKeysByTemplate.delete(oldestTemplate);
    }
  }

  const getByPath = (obj, path) =>
    path
      .split(".")
      .reduce(
        (curr, segment) =>
          curr && typeof curr === "object" ? curr[segment] : undefined,
        obj
      );

  return template.replace(/\$\{(.*?)\}/g, (_, key) => {
    const direct = variables[key];
    if (direct !== undefined && direct !== null) return direct;
    const nested = getByPath(variables, key);
    if (nested !== undefined && nested !== null) return nested;

    if (!missingTemplateKeys.has(key)) {
      missingTemplateKeys.add(key);
      debugWarn(
        `processTemplate: missing variable for placeholder "${key}" in template "${template}"`
      );
    }

    return "";
  });
}

/** @type {Map<string, Set<string>>} */
processTemplate._missingTemplateKeysByTemplate;

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
 * @returns {TableRow[]}
 */
function filterTableRows(rows, options = {}) {
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

/**
 * @param {HtmlTable} table
 * @param {number} tableIdx
 * @param {string} tableClass
 * @param {string} tbodyClass
 * @param {TemplateVars} [variables]
 * @param {Record<string, any> | Array<Record<string, any>>} [rowFilters]
 * @param {{ paschalReadingsFull?: boolean, filterRows?: (row: TableRow) => boolean, eshlilFlag?: boolean, openingCurtainFlag?: boolean }} [rowFilterOptions]
 * @returns {string}
 */
export function renderHtmlTable(
  table,
  tableIdx,
  tableClass,
  tbodyClass,
  variables = {},
  rowFilters,
  rowFilterOptions = {}
) {
  const enTitle = table.english_title || "";
  const captionClass = table.caption_class || "";

  // If tableClass is passed, merge it with any class provided on the table object (supports both camel/snake).
  if (table.table_class) {
    tableClass = tableClass
      ? `${tableClass} ${table.table_class}`
      : table.table_class;
  }

  // If caption_display is provided, use it to set inline style on the caption.
  const captionDisplay = table.caption_display || "";
  const captionDisplayStyle = captionDisplay
    ? `style="display: ${captionDisplay}"`
    : "";

  let globalRowIdx = 0; // Keep a single counter across all tbodies

  if (!Array.isArray(table.tbodies) || table.tbodies.length === 0) {
    debugLog(`renderHtmlTable: No rows found for table "${enTitle}"`, table);
    return `<div>Error: No rows found in table "${enTitle}"</div>`;
  }

  if (
    table.nonTraditionalPascha &&
    rowFilterOptions.paschalReadingsFull === false
  ) {
    return ``;
  }

  const filteredTbodies = table.tbodies.map((tbody) => {
    const rows = Array.isArray(tbody.rows) ? tbody.rows : [];
    const filteredRows = filterTableRows(rows, {
      tableFlags: {
        eshlil: table.eshlil,
        openingCurtain: table.openingCurtain,
      },
      rowFilters,
      filterRows: rowFilterOptions.filterRows,
      paschalReadingsFull: rowFilterOptions.paschalReadingsFull,
      eshlilFlag: rowFilterOptions.eshlilFlag,
      openingCurtainFlag: rowFilterOptions.openingCurtainFlag,
    });
    return { ...tbody, rows: filteredRows };
  });

  return `
    <table id="table_${tableIdx}" title="${processTemplate(
    enTitle,
    variables
  )}" class="${tableClass}">
      ${
        table.english_title || table.english_caption
          ? `
        <caption class="caption ${captionClass}" id="caption_table_${tableIdx}" ${captionDisplayStyle}>
            ${processTemplate(
              table.english_title || table.english_caption,
              variables
            )}
            
            ${
              table.arabic_title || table.arabic_caption
                ? `<span class="arabic-caption">${processTemplate(
                    table.arabic_title || table.arabic_caption,
                    variables
                  )}</span>`
                : ""
            }
            ${
              table.coptic_title || table.coptic_caption
                ? `<span class="coptic-caption">${processTemplate(
                    table.coptic_title || table.coptic_caption,
                    variables
                  )}</span>`
                : ""
            }
            ${
              table.explanation_button
                ? `<span class="explanation-button" data-message='${processTemplate(
                    table.explanation_button,
                    variables
                  )}'>${book}</span>`
                : ""
            }
            ${
              table.image_button
                ? `<span class="image-button" data-message='${processTemplate(
                    table.image_button,
                    variables
                  )}'>${musicalNote}</span>`
                : ""
            }
            ${
              table.audio_file
                ? `<span class="audio-button" data-message='${processTemplate(
                    table.audio_file,
                    variables
                  )}'>${playPause}</span>`
                : ""
            }

        </caption>`
          : ""
      }

      ${filteredTbodies
        .map((tbody, tbodyIdx) => {
          const filteredRowsHtml = tbody.rows
            .map((row) => {
              const navAttr = row["data-navigation"]
                ? ` data-navigation='${JSON.stringify(
                    row["data-navigation"]
                  ).replace(/"/g, "&quot;")}'`
                : "";
              const rowHtml = `
                <tr id="table_${tableIdx}_row_${globalRowIdx}" class="${
                row["row-class"] || ""
              }"${navAttr}>
                  ${row.cells
                    .map((cell) => {
                      const dataNavigationValue =
                        "skipButton" in cell
                          ? `table_${tableIdx}`
                          : cell["data-navigation"]
                          ? typeof cell["data-navigation"] === "string"
                            ? processTemplate(
                                cell["data-navigation"],
                                variables
                              )
                            : JSON.stringify(cell["data-navigation"])
                          : "";
                      const dataNavigationAttr = dataNavigationValue
                        ? ` data-navigation="${dataNavigationValue.replace(
                            /"/g,
                            "&quot;"
                          )}"`
                        : "";

                      if ("skipButton" in cell) {
                        return `<td class="skipButton"${dataNavigationAttr}>${processTemplate(
                          cell.skipButton,
                          variables
                        )}</td>`;
                      }

                      const entries = Object.entries(cell).filter(
                        ([key]) =>
                          key !== "data-navigation" && key !== "dataNavigation"
                      );

                      return entries
                        .map(([lang, value], idx) => {
                          const navAttrForCell =
                            idx === 0 ? dataNavigationAttr : "";
                          const templateValue =
                            typeof value === "string" ||
                            typeof value === "number" ||
                            typeof value === "boolean"
                              ? value
                              : "";
                          return `<td class="${lang}"${navAttrForCell}>${processTemplate(
                            templateValue,
                            variables
                          )}</td>`;
                        })
                        .join("");
                    })
                    .join("")}
                </tr>
              `;
              globalRowIdx++;
              return rowHtml;
            })
            .join("");

          return `<tbody id="table_${tableIdx}_tbody_${tbodyIdx}" class="${tbodyClass}">${filteredRowsHtml}</tbody>`;
        })
        .join("")}
    </table>
  `;
}

/**
 * Filters entries by seasons/excludedSeasons and saints.
 * @param {any[]} data
 * @param {string | string[] | undefined | null} currentSeasons
 * @param {string | string[] | undefined | null} todaysSaints
 * @returns {any[]}
 */
export function filterBySeasons(data, currentSeasons, todaysSaints) {
  
  if (!Array.isArray(data)) return [];

  const selectedSeasons = normalizeSeasons(currentSeasons);
  const selectedSaints = hasValue(todaysSaints)
    ? normalizeToArray(todaysSaints)
    : [];

  return data.filter((item) => {
    if (!item || typeof item !== "object") return true;

    const itemSeasons = hasValue(item.seasons)
      ? normalizeToArray(item.seasons)
      : null;
    const itemExcludedSeasons = hasValue(item.excludedSeasons)
      ? normalizeToArray(item.excludedSeasons)
      : null;
    const itemSaints = hasValue(item.saints)
      ? normalizeToArray(item.saints)
      : null;

    if (itemSeasons && selectedSeasons.length) {
      if (!seasonsMatch(selectedSeasons, itemSeasons)) return false;
    }

    if (itemExcludedSeasons && selectedSeasons.length) {
      const hasExcluded = itemExcludedSeasons.some((s) =>
        selectedSeasons.includes(s)
      );
      if (hasExcluded) return false;
    }

    if (itemSaints && selectedSaints.length) {
      const matchesSaint = itemSaints.some((s) => selectedSaints.includes(s));
      if (!matchesSaint) return false;
    }

    return true;
  });
}

/**
 * Filters entries by daily properties (aktonkAki, adamWatos, dayOfTheWeek, weekdayWeekend).
 * @param {any[]} data
 * @param {{ aktonkAki?: { english?: string } | string | null, adamWatos?: string | null, dayOfTheWeek?: string | null, weekdayWeekend?: string | null, service?: string | null }} props
 * @returns {any[]}
 */
export function filterByDayProps(
  data,
  { aktonkAki, adamWatos, dayOfTheWeek, weekdayWeekend, service }
) {
  if (!Array.isArray(data)) return [];

  const aktonkAkiEnglish =
    typeof aktonkAki === "string" ? aktonkAki : aktonkAki?.english;

  return data.filter((item) => {
    if (!item || typeof item !== "object") return true;

    if (hasValue(item.aktonkAki)) {
      if (!hasValue(aktonkAkiEnglish) || item.aktonkAki !== aktonkAkiEnglish) {
        return false;
      }
    }

    if (hasValue(item.adamWatos)) {
      if (!hasValue(adamWatos) || item.adamWatos !== adamWatos) {
        return false;
      }
    }

    if (hasValue(item.dayOfTheWeek)) {
      if (!hasValue(dayOfTheWeek)) return false;

      const itemDays = normalizeToArray(item.dayOfTheWeek);
      const requestedDays = normalizeToArray(dayOfTheWeek);
      const matchesDay = itemDays.some((d) => requestedDays.includes(d));
      if (!matchesDay) return false;
    }

    if (hasValue(item.weekdayWeekend)) {
      if (!hasValue(weekdayWeekend) || item.weekdayWeekend !== weekdayWeekend) {
        return false;
      }
    }

    if (hasValue(item.service)) {
      if (!hasValue(service) || item.service !== service) {
        return false;
      }
    }

    return true;
  });
}

export function resolveRepeatedPrayers(data, paschalReadingsFull) {
  if (!Array.isArray(data)) return data;

  const isRepeatedPrayerPlaceholder = (obj) =>
    obj &&
    typeof obj === "object" &&
    (Object.prototype.hasOwnProperty.call(obj, "repeated_prayer_title") ||
      Object.prototype.hasOwnProperty.call(obj, "repeated_prayer_placement"));

  const replacePlaceholder = (placeholder) => {
    const resolved = fetchRepeatedPrayerData(placeholder, paschalReadingsFull);

    return Array.isArray(resolved) ? resolved : [resolved];
  };

  const resolvedTopLevel = data.flatMap((item) => {
    if (isRepeatedPrayerPlaceholder(item)) {
      return replacePlaceholder(item);
    }

    if (item && Array.isArray(item.tables)) {
      const updatedTables = item.tables.flatMap((table) => {
        if (isRepeatedPrayerPlaceholder(table)) {
          return replacePlaceholder(table);
        }
        return table;
      });
      
      return { ...item, tables: updatedTables };
    }

    return item;
  });

  return resolvedTopLevel;
}

function fetchRepeatedPrayerData(repeatedPrayerObject, paschalReadingsFull) {
  const {
    repeated_prayer_title,
    repeated_prayer_placement,
    source,
    category,
    repeated_prayer_variables,
  } = repeatedPrayerObject || {};

  const repeatedPrayersData = getRepeatedPrayersSources()[source];
  if (!repeatedPrayersData) {
    debugWarn(`Invalid repeated prayer source: "${source}"`, {
      repeated_prayer_title,
      repeated_prayer_placement,
      category,
    });
    return repeatedPrayerObject;
  }

  const categoryData = repeatedPrayersData.find(
    (entry) => entry.category === category
  );
  if (!categoryData || !Array.isArray(categoryData.tables)) {
    debugWarn(`Invalid repeated prayer category: "${category}"`, {
      repeated_prayer_title,
      repeated_prayer_placement,
      source,
    });
    return repeatedPrayerObject;
  }

  const matches = categoryData.tables.filter((table) => {
    if (repeated_prayer_title) {
      return table.title === repeated_prayer_title;
    }
    if (repeated_prayer_placement) {
      if (!table.placement) {
        return false;
      }

      if (Array.isArray(table.placement)) {
        return table.placement.includes(repeated_prayer_placement);
      }
      return table.placement === repeated_prayer_placement;
    }
    return false;
  });

  if (!matches.length) {
    debugWarn(
      `Repeated prayer table not found for category "${category}" and ` +
        (repeated_prayer_title
          ? `title "${repeated_prayer_title}"`
          : `placement "${repeated_prayer_placement}"`)
    );
    return repeatedPrayerObject;
  }

  const resolved = applyRepeatedPrayerVariables(
    matches,
    repeated_prayer_variables,
    paschalReadingsFull
  );

  return resolved.length === 1 ? resolved[0] : resolved;
}

/**
 * @param {any[]} tables
 * @param {Record<string, any>=} variables
 * @param {boolean=} paschalReadingsFull
 * @returns {any[]}
 */
function applyRepeatedPrayerVariables(tables, variables, paschalReadingsFull) {
  if (!variables || typeof variables !== "object") return tables;
  const { passToTable, ...filterVars } = variables;

  const hasNonTraditionalFlag = Object.prototype.hasOwnProperty.call(
    filterVars,
    "nonTraditionalPascha"
  );
  if (hasNonTraditionalFlag) {
    const shouldInclude =
      !!filterVars.nonTraditionalPascha === !!paschalReadingsFull;
    if (!shouldInclude) return [];
  }

  const tableMatches = (table) =>
    Object.entries(filterVars).every(([key, value]) => {
      if (!Object.prototype.hasOwnProperty.call(table, key)) return true;
      return table[key] === value;
    });

  const filteredTables = tables.filter((table) => table && tableMatches(table));

  return filteredTables.map((table) => {
    if (!Array.isArray(table.tbodies)) return table;
    const updatedTbodies = table.tbodies.map((tbody) => {
      const rows = Array.isArray(tbody.rows) ? tbody.rows : [];
      const filteredRows = filterTableRows(rows, {
        rowFilters: filterVars,
      });
      return { ...tbody, rows: filteredRows };
    });
    const tableOverrides =
      passToTable && typeof passToTable === "object" ? passToTable : {};
      
    return { ...table, ...tableOverrides, tbodies: updatedTbodies };
  });
}
