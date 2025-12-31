export const renderChapter = (bookTitle, chapterNumber, sections = []) => {
  const normalizedSections =
    sections && sections.length
      ? sections
      : [{ label: "Default", verses: [], languageClass: "english", rtl: false }];

  const columnWidth = (100 / normalizedSections.length).toFixed(2);
  const baseVerses = normalizedSections[0]?.verses || [];

  const headerRow =
    normalizedSections.length > 1
      ? `<tr class="text">
          ${normalizedSections
            .map(
              (section) =>
                `<th class="${section.languageClass}" style="width:${columnWidth}%;text-align:center;">${section.label}</th>`
            )
            .join("")}
        </tr>`
      : "";

  const rows = baseVerses
    .map((verse, idx) => {
      const verseNumber = verse?.verse ?? idx + 1;
      const cells = normalizedSections
        .map((section) => {
          const match =
            (section.verses || []).find((v) => v.verse === verseNumber) ||
            section.verses?.[idx] ||
            {};
          const text = match.text || "";
          const direction = section.rtl ? "rtl" : "ltr";
          return `<td class="${section.languageClass}" style="width:${columnWidth}%;direction:${direction};">
                    <span class="verseNumber">${verseNumber}</span> ${text}
                  </td>`;
        })
        .join("");
      return `<tr id="table_0_row_${verseNumber}" class="text">${cells}</tr>`;
    })
    .join("");

  return `
    <div class="section" id="section_0" title="${bookTitle}">
      <table id="table_0" title="${bookTitle} Chapter ${chapterNumber}">
        <caption class="caption" id="caption_table_0">${bookTitle} Chapter ${chapterNumber}</caption>
        <tbody>
          ${headerRow}
          ${rows}
        </tbody>
      </table>
    </div>
  `;
};
