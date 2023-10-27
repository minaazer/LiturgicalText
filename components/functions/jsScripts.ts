export const htmlRenderScript = `

window.onload = function() {
    extractTableTitlesAndIds();
    paginateTables();
    adjustOverlay();
}

function paginateTables() {

    const viewportHeight = window.innerHeight;
    let pages = [];
    let currentPage = [];
    let currentPageHeight = 0;
    let pagesPerRow = [];
    pagesPerRow.push(1);
    
    document.querySelectorAll('table').forEach(table => {
      // Check if the table has a caption and get its height
      const caption = table.querySelector('caption');
      const captionHeight = caption ? caption.getBoundingClientRect().height : 0;
      let remainder = 0;
        // If adding the caption causes the page to exceed viewport height, start a new page
        if (caption && captionHeight) {
          pages.push({currentPage: currentPage[0], pagesPerRow: pagesPerRow[pagesPerRow.length-1]});
          currentPage = [caption.id];
          currentPageHeight = captionHeight; // Start the new page with the caption's height
          pagesPerRow.push(1);

        }

        table.querySelectorAll('tr').forEach(row => {
            const rowHeight = row.getBoundingClientRect().height;
            if (pagesPerRow[pagesPerRow.length-1] > 1) {
              if (remainder > 0 && rowHeight + remainder <= viewportHeight) {
                remainder += rowHeight;
                currentPage.push(row.id);
              } else {

                remainder = 0;
                pages.push({currentPage: currentPage[0], pagesPerRow: pagesPerRow[pagesPerRow.length-1]});
                pagesPerRow.push(1);
                currentPage = [row.id];
              } 
            } else {


          
              if (currentPageHeight + rowHeight <= viewportHeight) {
                  currentPage.push(row.id);
                  currentPageHeight += rowHeight;

              } else if (caption && currentPage[0] && currentPage.length === 1 && currentPage[0] === caption.id && ((currentPageHeight + rowHeight) > viewportHeight)) {
                  
                  pagesPerRow.push (Math.ceil(rowHeight / (viewportHeight)));
                  fullPages = Math.floor((rowHeight + captionHeight) / (viewportHeight));
                  remainder = rowHeight + captionHeight - (fullPages * viewportHeight); // Calculate the height remaining after all full pages.
                  currentPage.push(row.id);
                  currentPageHeight = remainder;

              } else if ( rowHeight >= viewportHeight) {
                pages.push({currentPage: currentPage[0], pagesPerRow: pagesPerRow[pagesPerRow.length-1]});
                pagesPerRow.push (Math.ceil(rowHeight / (viewportHeight)));
                fullPages = Math.floor(rowHeight / (viewportHeight));
                remainder = rowHeight - (fullPages * viewportHeight); // Calculate the height remaining after all full pages.
                currentPage = [row.id];
                currentPageHeight = remainder;
                

              } else {

                pages.push({currentPage: currentPage[0], pagesPerRow: pagesPerRow[pagesPerRow.length-1]});
                currentPage = [row.id];

                  currentPageHeight = rowHeight;
              }
            }
        });

        if (currentPage.length) {
          pages.push({currentPage: currentPage[0], pagesPerRow: pagesPerRow[pagesPerRow.length-1]});
          currentPage = [];
          currentPageHeight = 0;
        }
    });


    // Convert pages data to an array of Y-offsets for React Native to consume.
    let yOffsetPages = [];
    pages.forEach(page => {
        const element = document.getElementById(page.currentPage);
        const pagesinRow = page.pagesPerRow;
    
        if (element) {
            let yOffset = element.getBoundingClientRect().top + window.scrollY;
    
            if (pagesinRow > 1) {
                let increment = 0;

                // If the row spans more than one viewport, add additional offsets
                for (let i = 0; i < pagesinRow; i++) {

                    increment = yOffset + (i * viewportHeight); // Increase by the height of the viewport for each subsequent page

                    yOffsetPages.push(increment);
                }
            } else {
                yOffsetPages.push(yOffset);
            }
        }
    });
    
        
    //sendMessage(JSON.stringify({type: 'debug', data: pages}));

    window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'PAGINATION_DATA', data: yOffsetPages }));
}






function extractTableTitlesAndIds() {
  try {
      var tables = document.querySelectorAll('table');
      var titlesAndIds = [];

      tables.forEach((table, index) => {
          const caption = table.querySelector('caption');

          var title = { english: null, coptic: null };
          if (caption) {
              const englishTextNode = Array.from(caption.childNodes).find(node => node.nodeType === 3 && node.nodeValue.trim() !== '');
              title.english = englishTextNode ? englishTextNode.nodeValue.trim() : '';
              const copticSpan = caption.querySelector('.coptic-caption');
              title.coptic = copticSpan ? copticSpan.innerText.trim() : '';
          }

          var id = table.getAttribute('id') || 'generated-id-' + index;
          table.id = id; // Ensure every table has an ID
          titlesAndIds.push({ title, id });
      });

      sendMessage(JSON.stringify({ type: 'TABLES_INFO', data: titlesAndIds }));
  } catch (error) {
      sendMessage(JSON.stringify({ type: 'error', message: error.message }));
  }
}






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
  

  
// Handle swipe gestures
var largeRowScrollPosition = 0; // Initialize the largeRowScrollPosition variable
var lastVisibleRow = 0; // Initialize the lastVisibleRow variable
var currentTable = 'table_0'; // Initialize the currentTable variable

let messageQueue = [];
let isSendingMessage = false;




// Handle overlay

function adjustOverlay() {
    clearOverlays();
    var rows = Array.from(document.querySelectorAll('tr[id^="table_"]'));
    var overlayVisible = false;
    var firstVisibleRow = null;
    var firstVisibleRowTable = null;
    var firstVisibleRowPreviousTable = -1;
    var firstVisibleRowCaptionHeight = null;
    var firstVisibleRowHeight = null;
    var startRow = null;
    var lastStartRow = null;
    var currentTable = null;

    for (let i = 0; i < rows.length; i++) {
        var rowIdComponents = rows[i].id.split("_");
        var tableId = 'table_' + rowIdComponents[1];

        let rowRect = rows[i].getBoundingClientRect();
        let firstVisibleRowHeight = null;
        
        // If row starts before the top and ends after the bottom, clear overlay
        if (rowRect.top < 0 && rowRect.bottom > window.innerHeight) {
            sendMessage(JSON.stringify({type: '1st if', data: 'row starts before ends after'}));
            clearOverlays();
            overlayVisible = null;
            break;
        }
        
        // Check if the row is the first visible row
        if (rowRect.top >= 0 || (rowRect.top < 0 && rowRect.bottom > 1)) {
            if (!firstVisibleRow) {
                sendMessage(JSON.stringify({type: '2nd if', data: 'setting 1st visible row'}));
                sendMessage(JSON.stringify({type: '2nd if row id', data: rows[i].id}));
                firstVisibleRow = rows[i];
                let idComponents = rows[i].id.split("_");
                firstVisibleRowTable = idComponents[1];
                if (i>0) {
                    let idComponents2 = rows[i-1].id.split("_");
                    firstVisibleRowPreviousTable = idComponents2[1];
                    sendMessage(JSON.stringify({type: '2nd if row prevtable', data: firstVisibleRowPreviousTable}));
                }
                firstVisibleRowHeight = rowRect.bottom - rowRect.top;  
                //sendMessage(JSON.stringify({type: '2nd if row height', data: firstVisibleRowHeight}));
                //sendMessage(JSON.stringify({type: '2nd if row height', data: window.innerHeight}));
                //sendMessage(JSON.stringify({type: '2nd if row height', data:  document.getElementById('caption_table_' + firstVisibleRowTable).getBoundingClientRect().height}));

                
                currentTable = tableId;

            }
        }

        // Check if the first visible row is longer than the viewport
        if (firstVisibleRow && firstVisibleRowHeight > window.innerHeight && rowRect.bottom > window.innerHeight) {
            sendMessage(JSON.stringify({type: '3rd if', data: '1st visible row is longer than viewport'}));
            sendMessage(JSON.stringify({type: '3rd if row id', data: rows[i].id}));
            sendMessage(JSON.stringify({type: '3rd if row bottom', data: rowRect.bottom}));
            // If the first visible row is longer than the viewport, skip creating the overlay and break
            clearOverlays();
            overlayVisible = null;

            break;
        }
       
        

        // check if firstvisible row is from the next table and longer than the viewport when added to caption
        if (firstVisibleRow && firstVisibleRowPreviousTable && firstVisibleRowHeight
            && firstVisibleRowTable !== firstVisibleRowPreviousTable 
            && rowRect.top > 0  && rowRect.bottom > window.innerHeight) {
            sendMessage(JSON.stringify({type: '4th if', data: '1st visible row is from next table'}));
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
        
        if (rowRect.top > 0 && rowRect.bottom > window.innerHeight && currentTable !== tableId) {
            sendMessage(JSON.stringify({type: '5th if', data: 'row is from next table'}));
            let rowIdComponents = rows[i].id.split("_");
            let tableId = rowIdComponents[1];
            let rowId = rowIdComponents[3];
            sendMessage(JSON.stringify({type: 'TABLE_CHANGED', data: tableId}));
            let caption = document.getElementById('caption_table_' + tableId);

           
            setOverlayOnTable(tableId);
            overlayVisible = true;

            break;
          }

          // Check if the row is partially visible
          if (rowRect.top < window.innerHeight && rowRect.bottom > window.innerHeight) {
              sendMessage(JSON.stringify({type: '6th if', data: 'row is partially visible'}));
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
    if (!overlayVisible) {
        // If no partially visible row is found or the first visible row is longer than the viewport, hide the overlay
        clearOverlays();
    }
}


// Apply overlay to a caption
function setOverlayOnCaption(tableId, captionId) {
    var caption = document.getElementById('caption_table_' + tableId);
    if (caption) {
        var captionRect = caption.getBoundingClientRect();
        var overlay = document.createElement('div');
        overlay.id = 'overlay_' + tableId + '_caption';
        overlay.style.position = 'absolute';
        overlay.style.top = (window.scrollY + captionRect.top) + 'px';
        overlay.style.left = captionRect.left + 'px';
        overlay.style.width = captionRect.width + 'px';
        overlay.style.height = captionRect.height + 'px';
        overlay.style.backgroundColor = 'black'; // Adjust as needed
        document.body.appendChild(overlay);
    }
}

// Apply overlay to a table
function setOverlayOnTable(tableId) {
    var table = document.getElementById('table_' + tableId);
    if (table) {
        var tableRect = table.getBoundingClientRect();
        var overlay = document.createElement('div');
        overlay.id = 'overlay_' + tableId;
        overlay.style.position = 'absolute';
        overlay.style.top = (window.scrollY + tableRect.top) + 'px';
        overlay.style.left = tableRect.left + 'px';
        overlay.style.width = '100%';
        overlay.style.height = tableRect.height + 'px';
        overlay.style.backgroundColor = 'black'; // Adjust as needed
        document.body.appendChild(overlay);
    }
}

// Apply overlay to a row
function setOverlayOnRow(tableId, rowId) {
    var row = document.getElementById('table_' + tableId + '_row_' + rowId);

    if (row) {

        var tds = row.querySelectorAll('td');
        tds.forEach((td, index) => {
            var tdRect = td.getBoundingClientRect();
            var overlay = document.createElement('div');
            overlay.id = 'overlay_' + tableId + '_row_' + rowId + '_td_' + index;
            overlay.style.position = 'absolute';
            overlay.style.top = (window.scrollY + tdRect.top) + 'px';
            overlay.style.left = tdRect.left + 'px';
            overlay.style.width = '100%';
            overlay.style.height = tdRect.height + 'px';
            overlay.style.backgroundColor = 'black'; // Adjust as needed
            document.body.appendChild(overlay);
        });
        if (rowId == 0){
            // overlay the toggle element
            var toggleElement = document.getElementById('toggle_table_' + tableId);
            var toggleRect = toggleElement.getBoundingClientRect();
            var overlay = document.createElement('div');

            overlay.id = 'overlay_toggle_' + tableId;
            overlay.style.position = 'absolute';
            overlay.style.top = (window.scrollY + toggleRect.top) + 'px';
            overlay.style.left = toggleRect.left + 'px';
            overlay.style.width = '100%';
            overlay.style.height = toggleRect.height + 'px';
            overlay.style.backgroundColor = 'black'; // Adjust as needed
            document.body.appendChild(overlay); //
        }
            

    }
}

// Remove all overlays
function clearOverlays() {
    var overlays = document.querySelectorAll('div[id^="overlay_"]');
    overlays.forEach((overlay) => {
        overlay.parentNode.removeChild(overlay);
    });
}

true;

`

