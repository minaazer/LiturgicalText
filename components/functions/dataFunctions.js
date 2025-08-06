/** @format */

import hwRepeatedPrayersData from "../../data/repeatedPrayers/hwRepeatedPrayers.json";
import annualRepeatedPrayersData from "../../data/repeatedPrayers/annualRepeatedPrayers.json";
import { book , musicalNote } from "../../data/repeatedPrayers";


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
  return template.replace(/\$\{(.*?)\}/g, (_, key) => variables[key] || "");
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
