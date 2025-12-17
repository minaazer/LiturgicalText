/** @format */

import hwRepeatedPrayersData from "../../data/repeatedPrayers/hwRepeatedPrayers.json";
import annualRepeatedPrayersData from "../../data/repeatedPrayers/annualRepeatedPrayers.json";
import { book , musicalNote, playPause } from "../../data/repeatedPrayers";


export function getRepeatedPrayers(source, category) {
  // Mapping the sources to their corresponding data
  const repeatedPrayersSources = {
    "Holy Week": hwRepeatedPrayersData,
    Annual: annualRepeatedPrayersData,
  };

  // Validate the source and retrieve its data
  const repeatedPrayersData = repeatedPrayersSources[source];
  if (!repeatedPrayersData) {
    console.log(`Invalid source: "${source}"`);
    return `<div>Error: Invalid source "${source}"</div>`;
  }

  // Find the requested category within the source data
  const categoryData = repeatedPrayersData.find(
    (item) => item.category === category
  );

  if (!categoryData || !Array.isArray(categoryData.tables)) {
    console.log(`Invalid or missing tables for category: "${category}"`);
    return `<div>Error: Invalid or missing tables for category "${category}"</div>`;
  }

  // Return the relevant prayers
  return categoryData.tables;
}

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


export function processTemplate(template, variables) {
  if (typeof template !== "string") return template;

  const missingTemplateKeys = processTemplate._missingTemplateKeys || new Set();
  processTemplate._missingTemplateKeys = missingTemplateKeys;

  const getByPath = (obj, path) =>
    path.split(".").reduce(
      (curr, segment) => (curr && typeof curr === "object" ? curr[segment] : undefined),
      obj
    );

  return template.replace(/\$\{(.*?)\}/g, (_, key) => {
    const direct = variables[key];
    if (direct !== undefined && direct !== null) return direct;
    const nested = getByPath(variables, key);
    if (nested !== undefined && nested !== null) return nested;

    if (!missingTemplateKeys.has(key)) {
      missingTemplateKeys.add(key);
      console.warn(`processTemplate: missing variable for placeholder "${key}" in template "${template}"`);
    }

    return "";
  });
}

export function renderRepeatedPrayer(table, tableIdx, variables, tableClass, paschalReadingsFull) {
  if (table.nonTraditionalPascha && !paschalReadingsFull) {
    return ``;
  }
  const prayers = getRepeatedPrayers(table.source, table.category);
  if (typeof prayers === "string") {
    return prayers; // Error message
  }

  const repeatedPrayer = prayers.find(
    (prayer) => prayer.title === table.repeated_prayer_title
  );
  // Add the flag before any conditional returns
  if (table.nonTraditionalPascha && repeatedPrayer) {
    repeatedPrayer.nonTraditionalPascha = true;
  }
 
  if (!repeatedPrayer || !Array.isArray(repeatedPrayer.rows)) {
    console.log(
      "Repeated prayer title not found or invalid:",
      table.repeated_prayer_title
    );
    return `
                <table id="table_${tableIdx}" title="${processTemplate(
      table.repeated_prayer_title,
      variables
    )}">
                    <caption class="caption" id="caption_table_${tableIdx}">
                        ${processTemplate(
                          table.repeated_prayer_title,
                          variables
                        )}
                    </caption>
                    <tbody>
                        <tr><td class="error">Error: Repeated prayer not found or invalid for "${
                          table.repeated_prayer_title
                        }"</td></tr>
                    </tbody>
                </table>
            `;
  }

  const conditions = table.repeated_prayer_variables || {};
  return renderTable(repeatedPrayer, tableIdx, tableClass,paschalReadingsFull, variables, (row) => {
    // Exclude rows that meet the conditions
    return !Object.entries(conditions).some(([key, value]) => {
      return row[key] !== undefined && row[key] !== value;
    });
  });
}

// Helper: Render a single table
export function renderTable(
  table,
  tableIdx,
  tableClass,
  paschalReadingsFull,
  variables,
  filterRows = () => true
) {
  if (!Array.isArray(table.rows)) {
    console.log(`Invalid rows in table: ${table.title}`, table);
    return `<div>Error: Invalid rows in table "${table.title}"</div>`;
  }
  let additionalTableClass = "";
  if (table.class) {
    additionalTableClass = table.class;
  }
  tableClass = tableClass ? `${tableClass} ${additionalTableClass}` : additionalTableClass;
  if (table.nonTraditionalPascha && !paschalReadingsFull) {
    return ``;
  }

  let captionClass = table.caption_class ? `${table.caption_class}` : "";

  let nonTraditionalPascha = table.nonTraditionalPascha ? "nonTraditionalPascha = true" : "";
 
  return `
                <table id="table_${tableIdx}" ${nonTraditionalPascha} title="${processTemplate(
    table.title,
    variables
  )}" class="${tableClass.trim()}">
                    ${
                      table.english_caption
                        ? `
                        <caption class="caption ${captionClass}" id="caption_table_${tableIdx}">
                            ${processTemplate(table.english_caption, variables)}
                            ${
                              table.coptic_caption
                                ? `<span class="coptic-caption">${processTemplate(
                                    table.coptic_caption,
                                    variables
                                  )}</span>`
                                : ""
                            }
                            ${
                              table.arabic_caption
                                ? `<span class="arabic-caption">${processTemplate(
                                    table.arabic_caption,
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
                    <tbody>
                        ${table.rows
                          .filter(filterRows)
                          .map((row, rowIdx) => {
                            
                            if (row.nonTraditionalPascha && !paschalReadingsFull) {
                              return ``;
                            }
                            return `
                              <tr id="table_${tableIdx}_row_${rowIdx}" class="${row["row-class"] || ""}"
                                  ${(row["row-class"] === "navigationButton" || row["row-class"] === "navigationLink")  && row["data-navigation"]
                                    ? `data-navigation="${JSON.stringify(row["data-navigation"]).replace(/"/g, '&quot;')}"`
                                    : ""}
                              >

                                    ${row.cells
                                      .map((cell) =>
                                        Object.entries(cell)
                                          .map(
                                            ([key, value]) =>
                                              `<td class="${key}">${processTemplate(
                                                value,
                                                variables
                                              )}</td>`
                                          )
                                          .join("")
                                      )
                                      .join("")}
                                </tr>
                            `
                        })
                          .join("")}
                    </tbody>
                </table>
            `;
}

export function renderSongTables(table, tableIdx, tableClass = "", variables = {}) {
  const songTitle = table.english_title || `Song ${tableIdx + 1}`;
  const captionClass = table.caption_class || "";

  let globalRowIdx = 0; // Keep a single counter across all tbodies

  return `
    <table id="table_${tableIdx}" title="${processTemplate(songTitle, variables)}">
      ${
        table.english_title
          ? `
        <caption class="caption ${captionClass}" id="caption_table_${tableIdx}">
            ${processTemplate(table.english_title, variables)}
            
            ${
              table.arabic_title
                ? `<span class="arabic-caption">${processTemplate(
                    table.arabic_title,
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

      ${table.tbodies
        .map((tbody, tbodyIdx) => {
          const rowsHtml = tbody.rows
            .map((row) => {
              const rowHtml = `
                <tr id="song_${tableIdx}_row_${globalRowIdx}" class="${row["row-class"] || ""}">
                  ${row.cells
                    .map(cell =>
                      Object.entries(cell)
                        .map(
                          ([lang, value]) =>
                            `<td class="${lang}">${processTemplate(value, variables)}</td>`
                        )
                        .join("")
                    )
                    .join("")}
                </tr>
              `;
              globalRowIdx++;
              return rowHtml;
            })
            .join("");

          return `<tbody id="table_${tableIdx}_tbody_${tbodyIdx}" class="${tableClass}">${rowsHtml}</tbody>`;
        })
        .join("")}
    </table>
  `;
}

export function renderHtmlTable(table, tableIdx, tableClass, tbodyClass, variables = {}) {
  const enTitle = table.english_title || `Song ${tableIdx + 1}`;
  const captionClass = table.caption_class || "";
  // If tableClass is passed, merge it with any class provided on the table object (supports both camel/snake).
  const tableClassFromData = table.table_class || table.tableClass || "";
  if (tableClassFromData) {
    tableClass = tableClass ? `${tableClass} ${tableClassFromData}` : tableClassFromData;
  }
  const captionDisplay = table.caption_display || "";
  const captionDisplayStyle = captionDisplay ? `style="display: ${captionDisplay}"` : "";
  let globalRowIdx = 0; // Keep a single counter across all tbodies

  // Some data sources provide rows directly instead of wrapping them in tbodies.
  const tbodiesToRender =
    Array.isArray(table.tbodies) && table.tbodies.length
      ? table.tbodies
      : Array.isArray(table.rows)
        ? [{ rows: table.rows }]
        : [];

  if (!tbodiesToRender.length) {
    console.log(`renderHtmlTable: No rows found for table "${enTitle}"`, table);
    return `<div>Error: No rows found in table "${enTitle}"</div>`;
  }

  return `
    <table id="table_${tableIdx}" title="${processTemplate(enTitle, variables)}" class="${tableClass}">
      ${
        table.english_title
          ? `
        <caption class="caption ${captionClass}" id="caption_table_${tableIdx}" ${captionDisplayStyle}>
            ${processTemplate(table.english_title, variables)}
            
            ${
              table.arabic_title
                ? `<span class="arabic-caption">${processTemplate(
                    table.arabic_title,
                    variables
                  )}</span>`
                : ""
            }
            ${
              table.coptic_title
                ? `<span class="coptic-caption">${processTemplate(
                    table.coptic_title,
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

      ${tbodiesToRender
        .map((tbody, tbodyIdx) => {
          const rows = Array.isArray(tbody.rows) ? tbody.rows : [];
          const rowsHtml = rows
            .map((row) => {
              const navAttr =
                row["data-navigation"] &&
                row["data-navigation"].destination &&
                row["data-navigation"].source
                  ? ` data-navigation='${JSON.stringify({
                      destination: row["data-navigation"].destination,
                      source: row["data-navigation"].source,
                    }).replace(/"/g, "&quot;")}'`
                  : "";
              const rowHtml = `
                <tr id="table_${tableIdx}_row_${globalRowIdx}" class="${row["row-class"] || ""}"${navAttr}>
                  ${row.cells
                    .map((cell) => {
                      const dataNavigationValue = "skipButton" in cell
                        ? `table_${tableIdx}`
                        : cell["data-navigation"]
                          ? processTemplate(cell["data-navigation"], variables)
                          : "";
                      const dataNavigationAttr = dataNavigationValue
                        ? ` data-navigation="${dataNavigationValue.replace(/"/g, "&quot;")}"`
                        : "";

                      if ("skipButton" in cell) {
                        return `<td class="skipButton"${dataNavigationAttr}>${processTemplate(
                          cell.skipButton,
                          variables
                        )}</td>`;
                      }

                      const entries = Object.entries(cell).filter(
                        ([key]) => key !== "data-navigation"
                      );

                      return entries
                        .map(([lang, value], idx) => {
                          const navAttrForCell = idx === 0 ? dataNavigationAttr : "";
                          return `<td class="${lang}"${navAttrForCell}>${processTemplate(
                            value,
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

          return `<tbody id="table_${tableIdx}_tbody_${tbodyIdx}" class="${tbodyClass}">${rowsHtml}</tbody>`;
        })
        .join("")}
    </table>
  `;
}
