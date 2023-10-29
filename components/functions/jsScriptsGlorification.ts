export const htmlRenderScript = `

window.onload = function() {
    extractTableTitlesAndIds();
    paginateTables();
    clearOverlays();
    adjustOverlay();
}

function paginateTables() {

    const viewportHeight = window.innerHeight;
    let pages = [];
    let currentPage = [];
    let currentPageHeight = 0;


    document.querySelectorAll('tbody').forEach(tbody => {
      const viewerHeight = window.innerHeight;
      const tbodyIdComponents = tbody.id.split("_");
      const tbodyId = tbodyIdComponents[3];
      const tableId = tbodyIdComponents[1];
      const curCaptionId = 'caption_table_' + tableId;
      const curCaption = document.getElementById(curCaptionId);
      const curCaptionHeight = curCaption ? curCaption.getBoundingClientRect().height : 0;

      if (tbodyId == 0 && curCaptionHeight) {
        // While the tbody height exceeds the viewport, reduce the font size
        while ((tbody.clientHeight + curCaptionHeight) >= viewerHeight) {
            // Get the current font size
            const currentSize = parseFloat(window.getComputedStyle(tbody, null).getPropertyValue('font-size'));
  
            // Set the font size to a reduced value (for example, reduce by 0.5 each iteration)
            tbody.style.fontSize = (currentSize - 2) + 'px';
        }
  
      } else {
      // While the tbody height exceeds the viewport, reduce the font size
      while (tbody.clientHeight >= viewerHeight) {
          // Get the current font size
          const currentSize = parseFloat(window.getComputedStyle(tbody, null).getPropertyValue('font-size'));

          // Set the font size to a reduced value (for example, reduce by 0.5 each iteration)
          tbody.style.fontSize = (currentSize - 2) + 'px';
      }
    }
    });

    document.querySelectorAll('table').forEach(table => {


    
      // Check if the table has a caption and get its height
      const caption = table.querySelector('caption');
      const captionHeight = caption ? caption.getBoundingClientRect().height : 0;
        // If adding the caption causes the page to exceed viewport height, start a new page
        if (caption && captionHeight) {
          pages.push({currentPage: currentPage[0]});
          currentPage = [caption.id];
          currentPageHeight = captionHeight; // Start the new page with the caption's height

        }

        table.querySelectorAll('tbody').forEach(row => {
            const rowHeight = row.getBoundingClientRect().height;
            

          
              if (currentPageHeight + rowHeight <= viewportHeight) {
                  currentPage.push(row.id);
                  currentPageHeight += rowHeight;

              
                

              } else {

                pages.push({currentPage: currentPage[0]});
                currentPage = [row.id];

                  currentPageHeight = rowHeight;
              }
            
        });

        if (currentPage.length) {
          pages.push({currentPage: currentPage[0]});
          currentPage = [];
          currentPageHeight = 0;
        }
    });


    // Convert pages data to an array of Y-offsets for React Native to consume.
    let yOffsetPages = [];
    pages.forEach(page => {
        const element = document.getElementById(page.currentPage);
    
        if (element) {
            let yOffset = element.getBoundingClientRect().top + window.scrollY;
    
                yOffsetPages.push(yOffset);
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

          var title = { english: '', coptic: '', order: [] };  // Initialize English and Coptic as empty strings
          if (caption) {
              Array.from(caption.childNodes).forEach(node => {
                  if (node.nodeType === 3 && node.nodeValue.trim() !== '') {  // Text node for English
                      title.english += node.nodeValue.trim() + ' ';  // Concatenate English text nodes
                      if (!title.order.includes('english')) title.order.push('english');  // Only push 'english' once
                  } else if (node.nodeType === 1 && node.classList.contains('coptic-caption')) {  // Element node for Coptic
                      title.coptic += node.innerText.trim() + ' ';  // Concatenate Coptic text nodes
                      if (!title.order.includes('coptic')) title.order.push('coptic');  // Only push 'coptic' once
                  }
              });
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


// Apply overlay to a tbody
function setOverlayOntbody(tableId, rowId) {
    var row = document.getElementById('table_' + tableId + '_tbody_' + rowId);

    if (row) {

        var tds = row.querySelectorAll('td');
        tds.forEach((td, index) => {
            var tdRect = td.getBoundingClientRect();
            var overlay = document.createElement('div');
            overlay.id = 'overlay_' + tableId + '_tbody_' + rowId + '_td_' + index;
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
            var toggleElement = document.getElementById('caption_table_' + tableId);
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

