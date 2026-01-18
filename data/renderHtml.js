/** @format */

import { renderHtmlTable } from "../components/functions/dataFunctions.js";

// Simple in-memory cache to avoid regenerating identical HTML
const renderHtmlCache = new Map();

export const renderHtml = (
  jsonData,
  pageTitle,
  tableClass,
  tbodyClass,
  variables
) => {
  let tableCounter = 0; // Initialize a global table counter
  const mergedVariables = { ...variables };

  // Build a cache key from inputs. JSON.stringify is acceptable here since HTML generation is heavier.
  const cacheKey =
    pageTitle +
    "|" +
    tableClass +
    "|" +
    tbodyClass +
    "|" +
    JSON.stringify(mergedVariables) +
    "|" +
    JSON.stringify(jsonData);

  if (renderHtmlCache.has(cacheKey)) {
    return renderHtmlCache.get(cacheKey);
  }

  const html = `
        
                    <div class="section" id="section_0" title="${pageTitle}">
                        ${jsonData
                          .map((table) => {
                            const tableIdx = tableCounter++;
                            const htmlTable = renderHtmlTable(
                              table,
                              tableIdx,
                              tableClass,
                              tbodyClass,
                              mergedVariables
                            );
                            return htmlTable;
                          })
                          .join("")}
                    </div>
                `;

  renderHtmlCache.set(cacheKey, html);
  return html;
};
