// Table of contents
const extractTableTitlesAndIds = 
`function extractTableTitlesAndIds() {
    try {
        var tables = document.querySelectorAll('table');
        var titlesAndIds = [];
  
        tables.forEach((table, index) => {
            const caption = table.querySelector('caption');
  
            var title = { english: '', coptic: '', arabic: '', order: [] };  // Initialize English and Coptic as empty strings
            if (caption) {
                Array.from(caption.childNodes).forEach(node => {
                    if (node.nodeType === 3 && node.nodeValue.trim() !== '') {  // Text node for English
                        title.english += node.nodeValue.trim() + ' ';  // Concatenate English text nodes
                        if (!title.order.includes('english')) title.order.push('english');  // Only push 'english' once
                    } else if (node.nodeType === 1 && node.classList.contains('coptic-caption')) {  // Element node for Coptic
                        title.coptic += node.innerText.trim() + ' ';  // Concatenate Coptic text nodes
                        if (!title.order.includes('coptic')) title.order.push('coptic');  // Only push 'coptic' once
                    } else if (node.nodeType === 1 && node.classList.contains('arabic-caption')) {  // Element node for arabic
                      // Concatenate Coptic text nodes, removing any <br> tags
                      title.arabic += node.innerHTML.replace(/<br>/g, ' ').trim() + ' ';  
                      if (!title.order.includes('arabic')) title.order.push('arabic');
                  }
                  
                });
            }
  
            var id = table.getAttribute('id') || 'generated-id-' + index;
            table.id = id; // Ensure every table has an ID
            //check if title is not empty
            if (title.english.trim() !== '' || title.coptic.trim() !== '' || title.arabic.trim() !== '') {
              titlesAndIds.push({ title, id });            
            }  // Only push if there is a title
        });
  
        sendMessage(JSON.stringify({ type: 'TABLES_INFO', data: titlesAndIds }));
    } catch (error) {
        sendMessage(JSON.stringify({ type: 'error', message: error.message }));
    }
  }`;

// Send message to React Native
  const sendMessage =
`let messageQueue = [];
let isSendingMessage = false;

  function sendMessage(message) {
    if (isSendingMessage) {
      messageQueue.push(message);

    } else {
      isSendingMessage = true;
      window.ReactNativeWebView.postMessage(message);
    }
}
  
  // This function is called when an acknowledgment is received
  function onMessageAcknowledged() {

    isSendingMessage = false;
    if (messageQueue.length) {
      sendMessage(messageQueue.shift());
    }
  }
  
  window.addEventListener('message', function(event) {
    let data;
    try {
      data = JSON.parse(event.data);

    } catch (error) {
      return;  // not a valid JSON message
    }
  
    if (data && data.type === 'ACKNOWLEDGED') {

      onMessageAcknowledged();
    }
  });
`

// Pagination
const paginateTables =
`function paginateTables() {
    const viewportHeight = window.innerHeight-5;
    let pages = [];
    let currentPage = [];
    let currentPageHeight = 0;
    let pagesPerRow = [];
    pagesPerRow.push(1);
    let tableId = "table_0";
  
    document.querySelectorAll(".section").forEach((section) => {
  
      const sectionId = section.getAttribute("id");
      // check if the section height is greater than the viewport height
      let sectionInnerHeight = section
        ? section.getBoundingClientRect().height
        : 0;
      let sectionBorderHeight = section
        ? section.offsetHeight - section.clientHeight
        : 0;
      let sectionStyle = section ? window.getComputedStyle(section) : null;
      let sectionMarginTop = sectionStyle ? parseInt(sectionStyle.marginTop) : 0;
      let sectionMarginBottom = sectionStyle
        ? parseInt(sectionStyle.marginBottom)
        : 0;
      const sectionHeight = section
        ? sectionInnerHeight +
          sectionBorderHeight +
          sectionMarginTop +
          sectionMarginBottom
        : 0;
  
      if (currentPageHeight + sectionHeight < viewportHeight) {
        currentPage.push(sectionId);
        currentPageHeight += sectionHeight;
      } else if (sectionHeight < viewportHeight) {
        pages.push({
          currentPage: currentPage[0],
          pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
          tableId: tableId,
        });
        currentPage = [sectionId];
        currentPageHeight = sectionHeight;

      } else {
  
  
        // query all tables in the section
        section.querySelectorAll("table").forEach((table) => {
          tableId = table.getAttribute("id");
          // Check if the table has a caption and get its height
          const caption = table.querySelector("caption");
          let captionInnerHeight = caption
            ? caption.getBoundingClientRect().height
            : 0;
          let captionBorderHeight = caption
            ? caption.offsetHeight - caption.clientHeight
            : 0;
          let captionStyle = caption ? window.getComputedStyle(caption) : null;
          let captionMarginTop = captionStyle
            ? parseInt(captionStyle.marginTop)
            : 0;
          let captionMarginBottom = captionStyle
            ? parseInt(captionStyle.marginBottom)
            : 0;
          const captionHeight = caption
            ? captionInnerHeight +
              captionBorderHeight +
              captionMarginTop +
              captionMarginBottom
            : 0;
  
          // check if table is class = onePage
          const tableClass = table.getAttribute("class");
          if (tableClass && tableClass === "onePage") {
            
            
            if (table.clientHeight >= viewportHeight) {
              let tableCurrentHeight = table.clientHeight;
            
              function adjustRowFontSize(minFontSize, maxFontSize, threshold) {
                if (maxFontSize - minFontSize <= threshold) {
                  return;
                }
              
                let midFontSize = (minFontSize + maxFontSize) / 2;
              
                // Change the font size of each row
                for (let row of table.rows) {
                  row.style.fontSize = midFontSize + 'px';
                }              
                  tableCurrentHeight = table.clientHeight;
                  if (tableCurrentHeight >= (viewportHeight-5)) {
                    adjustRowFontSize(minFontSize, midFontSize, threshold);
                  } else {
                    adjustRowFontSize(midFontSize, maxFontSize, threshold);
                  } 
              }
              
              let minFontSize = 1; // Smallest readable font size
              let maxFontSize = parseFloat(window.getComputedStyle(table.rows[0], null).getPropertyValue('font-size')); // Get the font size of the first row
              let threshold = 1;
              adjustRowFontSize(minFontSize, maxFontSize, threshold);
              
            }
            pages.push({
              currentPage: currentPage[0],
              pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
              tableId: tableId,
            });

            currentPage = [tableId];
            currentPageHeight = viewportHeight;
            pagesPerRow.push(1);
            return;
            

          }
  
          let remainder = 0;
          // If adding the caption causes the page to exceed viewport height, start a new page
          if (caption && captionHeight) {
            pages.push({
              currentPage: currentPage[0],
              pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
              tableId: tableId,
            });
            currentPage = [caption.id];
            currentPageHeight = captionHeight; // Start the new page with the caption's height
            pagesPerRow.push(1);
          }
  
          table.querySelectorAll("tr").forEach((row) => {
            let rowInnerHeight = row ? row.getBoundingClientRect().height : 0;
            let rowBorderHeight = row ? row.offsetHeight - row.clientHeight : 0;
            let rowStyle = row ? window.getComputedStyle(row) : null;
            let rowMarginTop = rowStyle ? parseInt(rowStyle.marginTop) : 0;
            let rowMarginBottom = rowStyle ? parseInt(rowStyle.marginBottom) : 0;
            let rowPaddingBottom = rowStyle
              ? parseInt(rowStyle.paddingBottom)
              : 0;
  
            const rowHeight = row
              ? rowInnerHeight + rowBorderHeight + rowMarginTop + rowMarginBottom
              : 0;
            
            if (pagesPerRow[pagesPerRow.length - 1] > 1) {
              if (remainder > 0 && rowHeight + remainder <= viewportHeight) {
                remainder += rowHeight;
                currentPage.push(row.id);
              } else {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                });
  
                if (rowHeight >= viewportHeight) {
                  pagesPerRow.push(
                    Math.ceil(
                      (rowHeight - rowPaddingBottom) / (viewportHeight + 1)
                    )
                  );
  
                  fullPages = Math.floor(rowHeight / viewportHeight);
                  remainder = rowHeight - fullPages * viewportHeight; // Calculate the height remaining after all full pages.
                  currentPage = [row.id];
                  currentPageHeight = remainder;
                } else {
                  remainder = 0;
                  pagesPerRow.push(1);
                  currentPage = [row.id];
                  currentPageHeight = rowHeight;
                }
              }
            } else {
              if (currentPageHeight + rowHeight <= viewportHeight) {
                currentPage.push(row.id);
                currentPageHeight += rowHeight;
              } else if (
                caption &&
                currentPage[0] &&
                currentPage.length === 1 &&
                currentPage[0] === caption.id &&
                currentPageHeight + rowHeight >= viewportHeight
              ) {
                pagesPerRow.push(
                  Math.ceil(
                    (currentPageHeight + rowHeight - rowPaddingBottom) /
                      (viewportHeight + 1)
                  )
                );
                fullPages = Math.floor(
                  (rowHeight - rowPaddingBottom + captionHeight) /
                    (viewportHeight + 1)
                );
                remainder =
                  rowHeight + captionHeight - fullPages * viewportHeight; // Calculate the height remaining after all full pages.
                currentPage.push(row.id);
                currentPageHeight = remainder;
              } else if (rowHeight - rowPaddingBottom >= viewportHeight + 1) {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                });
                pagesPerRow.push(
                  Math.ceil((rowHeight - rowPaddingBottom) / (viewportHeight + 1))
                );
  
                fullPages = Math.floor(
                  (rowHeight - rowPaddingBottom) / (viewportHeight + 1)
                );
                remainder = rowHeight - fullPages * viewportHeight; // Calculate the height remaining after all full pages.
                currentPage = [row.id];
                currentPageHeight = remainder;
              } else {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                });
                currentPage = [row.id];
                currentPageHeight = rowHeight;
              }
            }
          });
          
  
        });
  
      }
  
      if (currentPage.length) {
        
        pages.push({
          currentPage: currentPage[0], pagesPerRow: pagesPerRow[pagesPerRow.length-1], tableId: tableId});
        currentPage = [];
        currentPageHeight = 0;
      }
    });
  
    // Convert pages data to an array of Y-offsets for React Native to consume.
    let yOffsetPages = [];
    pages.forEach((page) => {
      const element = document.getElementById(page.currentPage);
      const pagesinRow = page.pagesPerRow;
      const tableId = page.tableId;
      if (element) {
        let yOffset = element.getBoundingClientRect().top + window.scrollY;
  
        if (pagesinRow > 1) {
          let increment = 0;
  
          // If the row spans more than one viewport, add additional offsets
          for (let i = 0; i < pagesinRow; i++) {
            increment = yOffset + i * viewportHeight; // Increase by the height of the viewport for each subsequent page
  
            yOffsetPages.push({ yOffset: increment, tableId: tableId });
          }
        } else {
          yOffsetPages.push({ yOffset: yOffset, tableId: tableId });
        }
      }
    });
  
  
    sendMessage(JSON.stringify({type: 'PAGINATION_DATA', data: yOffsetPages}));
  }
  `
// Pagination glorification
const paginateTablesGlorification =
`function paginateTables() {
  const viewportHeight = window.innerHeight;
  let pages = [];
  let currentPage = [];
  let currentPageHeight = 0;
  let tableId = "table_0";

  document.querySelectorAll('table').forEach(table => {
    tableId = table.id;

  
    // Check if the table has a caption and get its height
    const caption = table.querySelector('caption');
    let captionHeight = caption ? caption.getBoundingClientRect().height : 0;
      // If adding the caption causes the page to exceed viewport height, start a new page
      if (caption && captionHeight) {
        pages.push({
          currentPage: currentPage[0],
          pagesPerRow: 1,
          tableId: tableId,
        });
        currentPage = [caption.id];
        currentPageHeight = captionHeight; // Start the new page with the caption's height

      }

      table.querySelectorAll('tbody').forEach(tbody => {
          let  tbodyHeight = tbody.clientHeight;
          let tbodyIdComponents = tbody.id.split("_");
          let tbodyId = tbodyIdComponents[3];



          function adjustRowFontSize(minFontSize, maxFontSize, threshold) {
            if (maxFontSize - minFontSize <= threshold) {
              return;
            }
          
            let midFontSize = (minFontSize + maxFontSize) / 2;
            let newFontSize = midFontSize + 'px';
          
            // Change the font size of tbody and possibly caption
            if (tbodyId == 0 && caption) {
              caption.style.fontSize = newFontSize;
            }
            tbody.style.fontSize = newFontSize;
          
            // Update heights
            tbodyHeight = tbody.clientHeight;

            if (caption) {
              captionHeight = caption.clientHeight;
            }
          
            let tbodyCurrentHeight = tbodyId == 0 ? tbodyHeight + captionHeight : tbodyHeight;
          
            if (tbodyCurrentHeight > viewportHeight) {
              adjustRowFontSize(minFontSize, midFontSize, threshold);
            } else {
              adjustRowFontSize(midFontSize, maxFontSize, threshold);
            }
          }
      
          let minFontSize = 1; // Smallest readable font size
          let maxFontSize = parseFloat(window.getComputedStyle(tbody, null).getPropertyValue('font-size')); // Get the font size of the first row
          let threshold = 1;


          adjustRowFontSize(minFontSize, maxFontSize, threshold);
      
          if (currentPageHeight + tbodyHeight <= viewportHeight) {
                currentPage.push(tbody.id);
                currentPageHeight += tbodyHeight;

            
              

            } else {

              pages.push({
                currentPage: currentPage[0],
                pagesPerRow: 1,
                tableId: tableId,
              });
              currentPage = [tbody.id];

                currentPageHeight = tbodyHeight;
            }
          
      });

      if (currentPage.length) {
        pages.push({
          currentPage: currentPage[0],
          pagesPerRow: 1,
          tableId: tableId,
        });
        currentPage = [];
        currentPageHeight = 0;
      }
  });


  // Convert pages data to an array of Y-offsets for React Native to consume.
  let yOffsetPages = [];
  pages.forEach(page => {
      const element = document.getElementById(page.currentPage);
      const pagesinRow = page.pagesPerRow;
      const tableId = page.tableId;
      if (element) {
          let yOffset = element.getBoundingClientRect().top + window.scrollY;
  
          yOffsetPages.push({ yOffset: yOffset, tableId: tableId });
          }
      
  });
  
      
  sendMessage(JSON.stringify({ type: 'PAGINATION_DATA', data: yOffsetPages }));
}`

// Overlay functions
const adjustOverlay =
`function adjustOverlay() {
  clearOverlays();
  //var rows = Array.from(document.getElementsByTagName('tr'));
  var rows = Array.from(document.querySelectorAll('tr, caption'));
  var overlayVisible = false;
  var firstVisibleRow = null;
  var firstVisibleRowTable = null;
  var firstVisibleRowPreviousTable = -1;
  var firstVisibleRowCaptionHeight = null;
  var firstVisibleRowHeight = null;
  var startRow = null;
  var lastStartRow = null;
  var currentTable = null;
  var lastCaption = 0;

  for (let i = 0; i < rows.length; i++) {
    let rowTagName = rows[i].tagName.toLowerCase();
      if (rowTagName === 'caption') {
        lastCaption = i;
      } else {

    clearOverlays();
      var rowIdComponents = rows[i].id.split("_");
      var tableId = 'table_' + rowIdComponents[1];

      let rowRect = rows[i].getBoundingClientRect();
      let rowBorderHeight = rows[i].offsetHeight - rows[i].clientHeight;
      let rowStyle = window.getComputedStyle(rows[i]);
      let rowMarginBottom = parseInt(rowStyle.marginBottom);
      let bottomRowRect = rowRect.bottom + rowBorderHeight + rowMarginBottom;

      let firstVisibleRowHeight = null;
      // If row starts before the top and ends after the bottom, clear overlay
      if (rowRect.top < 0 && bottomRowRect > window.innerHeight) {
          //sendMessage(JSON.stringify({type: '1st if', data: 'row starts before ends after'}));
          clearOverlays();
          overlayVisible = null;
          break;
      }
      // Check if the row is the first visible row
      if (rowRect.top >= 0 || (rowRect.top < 0 && bottomRowRect > 1)) {
          if (!firstVisibleRow) {
              firstVisibleRow = rows[i];
              let idComponents = rows[i].id.split("_");
              const parentTableIdComponents = rows[i].parentNode.parentNode.id.split("_");
              firstVisibleRowTable = parentTableIdComponents[1];
              if (i>0) {
                  let idComponents2 = rows[i].parentNode.parentNode.id.split("_");
                  firstVisibleRowPreviousTable = idComponents2[1];
                  //sendMessage(JSON.stringify({type: '2nd if row prevtable', data: firstVisibleRowPreviousTable}));
              }
              firstVisibleRowHeight = bottomRowRect - rowRect.top;  

              
              currentTable = parentTableIdComponents[0] + "_" + parentTableIdComponents[1];
              //sendMessage(JSON.stringify({type: 'firstVisibleRow', data: 'table_' + firstVisibleRowTable + '_row_' + idComponents[3]}));

          }
      }

      // Check if the first visible row is longer than the viewport
      if (firstVisibleRow && firstVisibleRowHeight > window.innerHeight && bottomRowRect > window.innerHeight) {
          //sendMessage(JSON.stringify({type: '3rd if', data: '1st visible row is longer than viewport'}));
          // If the first visible row is longer than the viewport, skip creating the overlay and break
          clearOverlays();
          overlayVisible = null;

          break;
      }
     
      

      // check if firstvisible row is from the next table and longer than the viewport when added to caption
      if (firstVisibleRow && firstVisibleRowPreviousTable && firstVisibleRowHeight
          && firstVisibleRowTable !== firstVisibleRowPreviousTable 
          && rowRect.top > 0  && bottomRowRect > window.innerHeight) {
          //sendMessage(JSON.stringify({type: '4th if', data: '1st visible row is from next table'}));
          // If the first visible row is longer than the viewport, skip creating the overlay and break
          clearOverlays();
          overlayVisible = null;
          firstVisibleRow = null;
          firstVisibleRowTable = null;
          firstVisibleRowPreviousTable = null;
          firstVisibleRowCaptionHeight = null;
          break;
          
      }

      // check if the row is from the next table
      
      if (rowRect.top > 0 && bottomRowRect > window.innerHeight && currentTable !== tableId) {
          //sendMessage(JSON.stringify({type: '5th if', data: 'row is from next table'}));
          let rowIdComponents = rows[i].id.split("_");
          let tableId = rowIdComponents[1];
          let rowId = rowIdComponents[3];
          //sendMessage(JSON.stringify({type: 'TABLE_CHANGED', data: tableId}));
          let caption = document.getElementById('caption_table_' + tableId);

         
          setOverlayOnTable(tableId);
          overlayVisible = true;

          break;
        }

        // Check if the row is partially visible
        if (rowRect.top < window.innerHeight && bottomRowRect >= window.innerHeight) {
          if (i === lastCaption+1) {
            clearOverlays();
          } else {
            //sendMessage(JSON.stringify({type: '6th if', data: 'row is partially visible'}));
            // Get the tableId and rowId from the first partially visible row
            let rowIdComponents = rows[i].id.split("_");
            let tableId = rowIdComponents[1];
            let rowId = rowIdComponents[3];
            // Pass both tableId and rowId to the setOverlayOnRow function
            setOverlayOnRow(tableId, rowId);
            
            overlayVisible = true;
            break;
          }
        }
      }
  }
  if (!overlayVisible) {
      // If no partially visible row is found or the first visible row is longer than the viewport, hide the overlay
      clearOverlays();
  }
}`

const adjustOverlayGlorification =
`function adjustOverlay() {
  clearOverlays();
  var tbodys = Array.from(document.querySelectorAll('tbody[id^="table_"]'));
  var overlayVisible = false;
  var firstVisibletbody = null;
  var firstVisibletbodyTable = null;
  var firstVisibletbodyPreviousTable = -1;
  var firstVisibletbodyCaptionHeight = null;
  var firstVisibletbodyHeight = null;
  var starttbody = null;
  var lastStarttbody = null;
  var currentTable = null;


  for (let i = 0; i < tbodys.length; i++) {
      var tbodyIdComponents = tbodys[i].id.split("_");
      var tableId = 'table_' + tbodyIdComponents[1];

      let tbodyRect = tbodys[i].getBoundingClientRect();

     
      // If tbody starts before the top and ends after the bottom, clear overlay
      if (tbodyRect.top < 0 && tbodyRect.bottom > window.innerHeight) {
          //sendMessage(JSON.stringify({type: '1st if', data: 'tbody starts before ends after'}));
          clearOverlays();
          overlayVisible = null;
          break;
      }
      
      // Check if the tbody is the first visible tbody
      if (tbodyRect.top >= 0 || (tbodyRect.top < 0 && tbodyRect.bottom > 1)) {
          if (!firstVisibletbody) {
              //sendMessage(JSON.stringify({type: '2nd if', data: 'setting 1st visible tbody'}));
              //sendMessage(JSON.stringify({type: '2nd if tbody id', data: tbodys[i].id}));
              firstVisibletbody = tbodys[i];
              let idComponents = tbodys[i].id.split("_");
              firstVisibletbodyTable = idComponents[1];
              if (i>0) {
                  let idComponents2 = tbodys[i-1].id.split("_");
                  firstVisibletbodyPreviousTable = idComponents2[1];
              }
              firstVisibletbodyHeight = tbodys[i].clientHeight;
              var currentFSize = parseFloat(window.getComputedStyle(tbodys[i], null).getPropertyValue('font-size')); 
              //sendMessage(JSON.stringify({type: '2nd if tbody height', data: firstVisibletbodyHeight}));
              //sendMessage(JSON.stringify({type: '2nd if tbody window height', data: window.innerHeight}));
              //sendMessage(JSON.stringify({type: '2nd if tbody font size', data: tbodyRect.top}));
              
              currentTable = tableId;

          }
      }



      // Check if the first visible tbody is longer than the viewport
      if (firstVisibletbody && firstVisibletbodyHeight > window.innerHeight && tbodyRect.bottom > window.innerHeight) {
          //sendMessage(JSON.stringify({type: '3rd if', data: '1st visible tbody is longer than viewport'}));
          //sendMessage(JSON.stringify({type: '3rd if tbody id', data: tbodys[i].id}));
          //sendMessage(JSON.stringify({type: '3rd if tbody bottom', data: tbodyRect.bottom}));
          // If the first visible tbody is longer than the viewport, skip creating the overlay and break
          clearOverlays();
          overlayVisible = null;

          break;
      }
   


      // check if firstvisible tbody is from the next table and longer than the viewport when added to caption
      if (firstVisibletbody && firstVisibletbodyPreviousTable && firstVisibletbodyHeight
          && firstVisibletbodyTable !== firstVisibletbodyPreviousTable 
          && tbodyRect.bottom > window.innerHeight
          && tbodys[i].id === firstVisibletbody.id
          && tbodyRect.top > 0) {

          //sendMessage(JSON.stringify({type: '4th if', data: '1st visible tbody is from next table and longer than viewport'}));
          // If the first visible tbody is longer than the viewport, skip creating the overlay and break
          clearOverlays();
          overlayVisible = null;
          firstVisibletbody = null;
          firstVisibletbodyTable = null;
          firstVisibletbodyPreviousTable = null;
          firstVisibletbodyCaptionHeight = null;
          break;
      }


      

      // check if the tbody is from the next table
      
      if (tbodyRect.top > 0 && tbodyRect.bottom > window.innerHeight && currentTable !== tableId) {
          //sendMessage(JSON.stringify({type: '5th if', data: 'tbody is from next table'}));
          let tbodyIdComponents = tbodys[i].id.split("_");
          let tableId = tbodyIdComponents[1];
          let tbodyId = tbodyIdComponents[3];
          //sendMessage(JSON.stringify({type: 'TABLE_CHANGED', data: tableId}));
          let caption = document.getElementById('caption_table_' + tableId);

          if (caption) {
              

              // Assuming you have a method setOverlayOnCaption or you use the same setOverlayOntbody
              setOverlayOnCaption(tableId, caption.id);
          }
      
          setOverlayOntbody(tableId, tbodyId);
          overlayVisible = true;

          break;
      }

      // Check if the tbody is partially visible
      if (tbodyRect.top < window.innerHeight && tbodyRect.bottom > window.innerHeight) {
          //sendMessage(JSON.stringify({type: '6th if', data: tbodys[i].id}));
          //sendMessage(JSON.stringify({type: '6th if tbody bottom', data: tbodyRect.bottom}));
          //sendMessage(JSON.stringify({type: '6th if tbody innerheight', data: window.innerHeight}));

          // Get the tableId and tbodyId from the first partially visible tbody
          let tbodyIdComponents = tbodys[i].id.split("_");
          let tableId = tbodyIdComponents[1];
          let tbodyId = tbodyIdComponents[3];
          // Pass both tableId and tbodyId to the setOverlayOntbody function
          setOverlayOntbody(tableId, tbodyId);
          overlayVisible = true;
          break;
      }
  }
  if (!overlayVisible) {
      // If no partially visible tbody is found or the first visible tbody is longer than the viewport, hide the overlay
      clearOverlays();
  }
}`

const setOverlays = 
`// Apply overlay to a table
function setOverlayOnTable(tableId) {
    var table = document.getElementById('table_' + tableId);
    if (table) {
      table.style.visibility = 'hidden'; // To hide
    }
}
// Apply overlay to a tbody
function setOverlayOntbody(tableId, tbodyId) {
    var tbody = document.getElementById('table_' + tableId + '_tbody_' + tbodyId);
    if (tbody) {
      tbody.style.visibility = 'hidden'; // To hide
    }
}

// Apply overlay to a caption
function setOverlayOnCaption(tableId, captionId) {
    var caption = document.getElementById('caption_table_' + tableId);
    if (caption) {
      caption.style.visibility = 'hidden'; // To hide
    }
}

// Apply overlay to a row
function setOverlayOnRow(tableId, rowId) {
    var row = document.getElementById('table_' + tableId + '_row_' + rowId);
    if (row) {
      row.style.visibility = 'hidden'; // To hide
    }
}
`
const clearOverlays =
`function clearOverlays() {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
      tables[i].style.removeProperty('visibility');
  }

  var tbodys = document.getElementsByTagName('tbody');
  for (var i = 0; i < tbodys.length; i++) {
      tbodys[i].style.removeProperty('visibility');
  }
  
  var captions = document.getElementsByTagName('caption');
  for (var i = 0; i < captions.length; i++) {
      captions[i].style.removeProperty('visibility');
  }

  var rows = document.getElementsByTagName('tr');
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.removeProperty('visibility');
  }
  
    var overlays = document.querySelectorAll('div[id^="overlay_"]');
    overlays.forEach((overlay) => {
        overlay.parentNode.removeChild(overlay);
    });
}`

export { extractTableTitlesAndIds , sendMessage , setOverlays , clearOverlays, adjustOverlay , adjustOverlayGlorification , paginateTables , paginateTablesGlorification };