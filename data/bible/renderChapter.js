export const renderChapter = (bookTitle, chapter, verses) => {
    return `
      <div class="section" id="section_0" title="${bookTitle}">
        <table id="table_0" title="${bookTitle} Chapter ${chapter}">
          <caption class="caption" id="caption_table_0">Bible / ${bookTitle} Chapter ${chapter}</caption>
          <tbody>
            ${verses
              .map(
                (verse, idx) =>
                  `<tr id="table_0_row_${idx}" class="text">
                     <td class="english"><span class="verseNumber">${verse.verse}</span> ${verse.text}</td>
                   </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  };
  