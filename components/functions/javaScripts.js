// Arabic numbers
const arabicNumbers =
`    // Function to replace English digits with Arabic
function convertDigitsToArabic(text) {
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  
  // Split text by line breaks
  const lines = text.split('<br>');

  // Convert digits in each line
  const convertedLines = lines.map(line => {
    let convertedLine = '';
    for (let i = 0; i < line.length; i++) {
      const char = line.charAt(i);
      const digitIndex = englishDigits.indexOf(char);
      if (digitIndex !== -1) {
        convertedLine += arabicDigits[digitIndex];
      } else {
        convertedLine += char; // Keep non-digit characters as they are
      }
    }
    return convertedLine;
  });

  // Join lines back together with preserved line breaks
  const convertedText = convertedLines.join('<br>');

  return convertedText;
}

function convertArabicCaptions() {
  // Find all elements with class 'arabic-caption' and convert their text content
  const elements = document.querySelectorAll('.arabic-caption');
  elements.forEach(element => {
    element.innerHTML = convertDigitsToArabic(element.innerHTML);
  });
}
`;

// Disable Scrolling
const disableScrolling = 
`    function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchmove', preventDefault, { passive: false });
  document.addEventListener('mousewheel', preventDefault, { passive: false });
}`;

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
  const viewportHeight = window.innerHeight - 2;
  let pages = [];
  let tableNumbers = [];
  let currentPage = [];
  let currentPageHeight = 0;
  let sectionsDisplayed = [];
  let pagesPerRow = [];
  pagesPerRow.push(1);
  let tableId = "table_0";

  // Query all sections in the document
  //sendMessage(JSON.stringify({type: 'debug', data: 'in paginateTables'}));
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

        if (sectionsDisplayed.length && sectionsDisplayed.includes(sectionId)) {

        //SendMessage(JSON.stringify({type: 'debug', data: 'section displayed: '+ sectionId}));       
        } else if (((currentPageHeight !== 0 && pages.length > 0) || pages.length === 0 ) && currentPageHeight + sectionHeight < viewportHeight) {
          currentPage.push(sectionId);
          currentPageHeight += sectionHeight;
          //SendMessage(JSON.stringify({type: 'debug', data: 'currentpageheight + section sectionHeight < viewportHeight: '+ sectionId}));
          return;
        } else if (currentPage.length && sectionHeight < viewportHeight) {
         //SendMessage(JSON.stringify({type: 'debug', data: 'section sectionHeight < viewportHeight: '+ sectionId}));
          pages.push({
            currentPage: currentPage[0],
            pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
            tableId: tableId,
            test: 'section sectionHeight < viewportHeight',
            firstVisibleElementId: sectionId,
          });
          currentPage = [sectionId];
          currentPageHeight = sectionHeight;

        } else if (sectionHeight < viewportHeight) {
          //SendMessage(JSON.stringify({type: 'debug', data: 'last else if section sectionHeight < viewportHeight: '+ sectionId}));
          currentPage = [sectionId];
          currentPageHeight = sectionHeight;

          
        } else {
         //SendMessage(JSON.stringify({type: 'debug', data: 'else: '+ sectionId}));
          if (currentPage.length) {
            currentPageClass = document.getElementById(currentPage[0]).getAttribute("class");
            if (currentPageClass === "section") {
              pages.push({
                currentPage: currentPage[0],
                pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                tableId: tableId,
                firstVisibleElementId: sectionId,
                test: 'section',
              });
            }
        } 
          currentPage = [];
          currentPageHeight = 0;
        


//////// query all tables in the section
      section.querySelectorAll("table").forEach((table) => {
        //SendMessage(JSON.stringify({type: 'debug', data: 'table id at beginning of table for each: '+ table.getAttribute("id")}));
        tableId = table.getAttribute("id");
        tableNumbers.push(tableId);

        // check if the table fits in the remaining space of the current page
        if (currentPageHeight + table.clientHeight < viewportHeight) {
          currentPage.push(tableId);
          currentPageHeight += table.clientHeight;
        } else {
          // check if current page is not empty
          if (currentPage.length) {
          // get previous table
          let previousTable;
          if (tableNumbers.length > 2) {
            previousTable = tableNumbers[tableNumbers.length - 2];
          } else {
            previousTable = tableId;
          }
              pages.push({
                currentPage: currentPage[0],
                pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                tableId: previousTable,
                test: 'tablet too big, starting new page',
                firstVisibleElementId: tableId,
              });
              currentPage = [];
              currentPageHeight = 0;
          }




////// Check if the table has a caption and get its height
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
          let captionHeight = caption
            ? captionInnerHeight +
            captionBorderHeight +
            captionMarginTop +
            captionMarginBottom
            : 0;

          ////// check if table is class = onePage
          const tableClass = table.getAttribute("class");

          if (tableClass && tableClass === "onePage" && (table.clientHeight + currentPageHeight) >= viewportHeight) {
            // check if current page height play table height > viewport height
            if (currentPage.length) {
              currentPageType = document.getElementById(currentPage[0]).tagName.toLowerCase();
              lastPage = pages[pages.length - 1].currentPage;
              lastPageClass = document.getElementById(currentPage[0]).getAttribute("class");
              if ((currentPageType !== "table" || (lastPageClass === "onePage" && currentPage.length === 1)) && currentPage[0] !== lastPage) {
              
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                  test: 'onePage',
                  firstVisibleElementId: tableId,
                });
              }
            }
            currentPage = [tableId];
            pagesPerRow.push(1);

            // check if table height is greater than viewport height
            if (table.clientHeight >= viewportHeight) {
            
              currentPageHeight = viewportHeight;
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
                if (tableCurrentHeight >= (viewportHeight)) {
                  adjustRowFontSize(minFontSize, midFontSize, threshold);
                } else {
                  adjustRowFontSize(midFontSize, maxFontSize, threshold);
                }
              }

              let minFontSize = 1; // Smallest readable font size
              let maxFontSize = parseFloat(window.getComputedStyle(table.rows[0], null).getPropertyValue('font-size')); // Get the font size of the first row
              let threshold = 0.1;
              adjustRowFontSize(minFontSize, maxFontSize, threshold);


            } else {
              currentPageHeight = table.clientHeight;
            }

            return;

          }

          // Initial remainder for pages per row calculations
          let remainder = 0;
          
          // If adding the caption causes the page to exceed viewport height, start a new page
          if (caption && captionHeight) {
            if (currentPageHeight + captionHeight > viewportHeight) {
              lastPageFirstVisibleElement = pages[pages.length - 1].firstVisibleElementId;
              if (lastPageFirstVisibleElement !== tableId) {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                  test: 'caption',
                  firstVisibleElementId: tableId,
                });
              }
            }
            currentPage = [caption.id];
            currentPageHeight = captionHeight; // Start the new page with the caption's height
            pagesPerRow.push(1);
          }

/////// Check if the table has a tbody with scaling-container class
          if (table.querySelector("tbody.scaling-container")) {
          //sendMessage(JSON.stringify({type: 'debug', data: 'scaling container'}));
            // Query all tbodies in the table
            table.querySelectorAll("tbody").forEach((tbody) => {
              //sendMessage(JSON.stringify({type: 'debug', data: 'scaling container tbody: ' + tbody.id}));
              let  tbodyHeight = tbody.clientHeight;
              let tbodyIdComponents = tbody.id.split("_");
              let tbodyId = tbodyIdComponents[3];


            /// Adjust tbody height
              function adjustRowFontSize(minFontSize, maxFontSize, threshold) {
                //sendMessage(JSON.stringify({type: 'debug', data: 'in adjustRowFontSize' + tbody.id}));
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
                //sendMessage(JSON.stringify({type: 'debug', data: 'tbody height: ' + tbodyHeight}));
                if (caption) {
                  //sendMessage(JSON.stringify({type: 'debug', data: 'caption height: '}));
                  captionHeight = caption.clientHeight ? caption.clientHeight : 0;
                  //sendMessage(JSON.stringify({type: 'debug', data: 'caption height: ' + captionHeight}));
                }
                //sendMessage(JSON.stringify({type: 'debug', data: 'caption height: ' + captionHeight}));
                let tbodyCurrentHeight = tbodyId == 0 ? tbodyHeight + captionHeight : tbodyHeight;
                
                //sendMessage(JSON.stringify({type: 'debug', data: 'tbodyCurrentHeight: ' + tbodyCurrentHeight}));
                if (tbodyCurrentHeight >= viewportHeight) {
                  //sendMessage(JSON.stringify({type: 'debug', data: 'in adjustRowFontSize >= viewportHeight' + tbody.id}));
                  adjustRowFontSize(minFontSize, midFontSize, threshold);
                } else {
                 //sendMessage(JSON.stringify({type: 'debug', data: 'in adjustRowFontSize < viewportHeight' + tbody.id}));
                  adjustRowFontSize(midFontSize, maxFontSize, threshold);
                }
              }
          
              let minFontSize = 1; // Smallest readable font size
              let maxFontSize = parseFloat(window.getComputedStyle(tbody, null).getPropertyValue('font-size')); // Get the font size of the first row
              let threshold = 1;



              adjustRowFontSize(minFontSize, maxFontSize, threshold);


              tbodyHeight = tbody.clientHeight;
              if (tbodyId == 0 && caption) {
                captionHeight = caption.clientHeight;
                currentPageHeight = captionHeight;
              }

              // Check if the tbody fits in the remaining space of the current page
              if ((tbodyId == 0 && caption && tbodyHeight <= viewportHeight) ||
                  (currentPageHeight + tbodyHeight <= viewportHeight))
                {
                    currentPage.push(tbody.id);
                    currentPageHeight += tbodyHeight;
                } else {

                  pages.push({
                    currentPage: currentPage[0],
                    pagesPerRow: 1,
                    firstVisibleElementId: tbody.id,
                    tableId: tableId,
                  });
                  currentPage = [tbody.id];
                  currentPageHeight = tbodyHeight;
                }
              
          });



          } else {
           
///// Query all rows in the table

          table.querySelectorAll("tr").forEach((row) => {
            let rowInnerHeight = row ? row.getBoundingClientRect().height : 0;
            let rowBorderHeight = row ? row.offsetHeight - row.clientHeight : 0;
            let rowStyle = row ? window.getComputedStyle(row) : null;
            let rowMarginTop = rowStyle ? parseInt(rowStyle.marginTop) : 0;
            let rowMarginBottom = rowStyle ? parseInt(rowStyle.marginBottom) : 0;
            let rowPaddingBottom = rowStyle ? parseInt(rowStyle.paddingBottom) : 0;
            const rowHeight = row ? rowInnerHeight + rowBorderHeight + rowMarginTop + rowMarginBottom : 0;

            // Check if the previous row was a multi page row
            if (pagesPerRow[pagesPerRow.length - 1] > 1) {
              // Check if the row fits in the remaining space of the current page
              if (remainder > 0 && rowHeight + remainder <= viewportHeight) {
                remainder += rowHeight;
                currentPage.push(row.id);
              } else {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                  firstVisibleElementId: row.id,
                });

                // Check if the row height is greater than the viewport height
                if (rowHeight >= viewportHeight) {
                  pagesPerRow.push(Math.ceil((rowHeight - rowPaddingBottom) / (viewportHeight + 1)));
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
              } else if (caption && currentPage[0] && currentPage.length === 1 && currentPage[0] === caption.id && currentPageHeight + rowHeight >= viewportHeight) {
                pagesPerRow.push(Math.ceil((currentPageHeight + rowHeight - rowPaddingBottom) / (viewportHeight + 1)));
                fullPages = Math.floor((rowHeight - rowPaddingBottom + captionHeight) /(viewportHeight + 1));
                remainder = rowHeight + captionHeight - fullPages * viewportHeight; // Calculate the height remaining after all full pages.
                currentPage.push(row.id);
                currentPageHeight = remainder;
              } else if (rowHeight - rowPaddingBottom >= viewportHeight + 1) {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                  test: 'row too big (-row padding)',
                  firstVisibleElementId: row.id,
                });

                pagesPerRow.push(Math.ceil((rowHeight - rowPaddingBottom) / (viewportHeight + 1)));

                fullPages = Math.floor((rowHeight - rowPaddingBottom) / (viewportHeight + 1));
                remainder = rowHeight - fullPages * viewportHeight; // Calculate the height remaining after all full pages.
                currentPage = [row.id];
                currentPageHeight = remainder;
              } else {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                  test: 'else',
                  firstVisibleElementId: row.id,
                });
                currentPage = [row.id];
                currentPageHeight = rowHeight;
              }
            }
          });


      
        }
      }
      });

      }

/////////////////// remaining parts
    if (currentPage.length) {


    function findNextElementOrParentSibling(element) {

        //sendMessage(JSON.stringify({type: 'debug', data: 'Element id at beginning of FUNCTION: '+ element.id}));
        // Start by finding the next sibling of the given element
        let nextElement = element.nextElementSibling;
        const visitedElements = new Set();
        if (nextElement) {
        //sendMessage(JSON.stringify({type: 'debug', data: 'NEXT element at beginning of FUNCTION: '+ nextElement.id}));
        } else {
         //sendMessage(JSON.stringify({type: 'debug', data: 'NO NEXT element at beginning of FUNCTION: '+ element.id}));
        }
        // If no next sibling is found, move to the parent and find its next sibling
        while (!nextElement && element.parentElement) {
          // Add the current element to the set of visited elements
          visitedElements.add(element);

          element = element.parentElement;
          nextElement = element.nextElementSibling;

          if (nextElement) {
            //sendMessage(JSON.stringify({type: 'debug', data: '****next element in WHILE in FUNCTION: '+ nextElement.id + ' parent element: '+ element.id}));
            } else {
            //sendMessage(JSON.stringify({type: 'debug', data: '****NO next element in WHILE in FUNCTION'+ ' parent element: '+ element.id}));
            }

          // Check if the current element has already been visited
          if (visitedElements.has(element)) {
            //sendMessage(JSON.stringify({type: 'debug', data: '****element already visited: '+ element.id}));
            break;
          }
        }
        if (nextElement) {
          //sendMessage(JSON.stringify({type: 'debug', data: 'RETURNING next element at end of FUNCTION: '+ nextElement.id}));
          } else {
          //sendMessage(JSON.stringify({type: 'debug', data: 'NO next element at end of FUNCTION ' + ' parent element: '+ element.id}));
          }
        return nextElement;
      }




      // Get the element at the top of the screen by ID
      let element = document.getElementById(currentPage[0]);

      // Get element class type (e.g., row, table, section)
      let elementType = element.tagName ? element.tagName.toLowerCase().trim() : "";
      //sendMessage(JSON.stringify({type: 'debug', data: 'Element type: '+ elementType + ' element id: '+ element.id}));
      // Declare variables in a broader scope
      let nextElementInClass;
      let nextElementInClassId;
      //let remainderPageHeight = viewportHeight;
      //sendMessage(JSON.stringify({type: 'debug', data: 'Element type Before IF: '+ elementType + ' element id: '+ element.id}));

      if ( elementType === "tr" || elementType === "caption") {
        //sendMessage(JSON.stringify({type: 'debug', data: 'IN tr caption IF element id: '+ element.id + ' element type: '+ elementType}));

        // Find the closest table ancestor
        let parentTable = element.closest('table');
        let parentTableClass = parentTable.getAttribute("class");
        
        //if (parentTable && parentTableClass === "onePage") {
          //remainderPageHeight -= parentTable.clientHeight;
        //} else {
          //remainderPageHeight -= currentPageHeight;  
        //}
          //sendMessage(JSON.stringify({type: 'debug', data: 'currentPage: '+ JSON.stringify(currentPage) }));

        if (parentTable) {
          // Use the function to find the next sibling or the parent's next sibling
          nextElementInClass = findNextElementOrParentSibling(parentTable);
          nextElementInClassId = nextElementInClass ? nextElementInClass.id : "";
          //sendMessage(JSON.stringify({type: 'debug', data: 'Next element id before height while: '+ nextElementInClassId + ' remainderPageHeight: '+ remainderPageHeight}));
          //sendMessage(JSON.stringify({type: 'debug', data: 'current page height: '+ currentPageHeight}));
          // check if the elementHeight + remainderPageHeight is less than viewport height
          
          while (nextElementInClass && currentPage.includes(nextElementInClass.id)) {

            //sendMessage(JSON.stringify({type: 'debug', data: 'Next element id in height while: '+ nextElementInClassId}));
            
            //remainderPageHeight -= nextElementInClass.clientHeight;
            
            const classAttribute = nextElementInClass.getAttribute("class");
            nextElementInClassClass = classAttribute ? classAttribute.toLowerCase() : "";
            //sendMessage(JSON.stringify({type: 'debug', data: 'next element class CLASS in while: '+ nextElementInClassClass}));
            if (nextElementInClass === "section") {
              sectionsDisplayed.push(nextElementInClass.id);
            }
              
            //sendMessage(JSON.stringify({type: 'debug', data: 'next element id in while: AFTER IF:  '+ nextElementInClassId}));
            const previousElement = nextElementInClass;
            
            //sendMessage(JSON.stringify({type: 'debug', data: 'previous element id: '+ previousElement.id + ' next element id: '+ nextElementInClassId}));
            
            nextElementInClass = findNextElementOrParentSibling(nextElementInClass);
              
              // Break the loop if the next element is the same as the previous one
              if (nextElementInClass === previousElement) {
                  break;
              }

              nextElementInClassId = nextElementInClass ? nextElementInClass.id : "";
        }




        }
      } else {

        // For non-table elements, find the next sibling directly
        nextElementInClass = findNextElementOrParentSibling(element);
        nextElementInClassId = nextElementInClass ? nextElementInClass.id : "";

      }
      if (nextElementInClass) {
        //sendMessage(JSON.stringify({type: 'debug', data: 'END next element id: '+ nextElementInClassId}));
      } else {
        //sendMessage(JSON.stringify({type: 'debug', data: 'END NO next element'}));
      }
      // Safely log the next element's ID
      //sendMessage(JSON.stringify({type: 'debug', data: 'end of remainder for element id: '+ element.id}));
      pages.push({
        currentPage: currentPage[0],
        pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
        tableId: tableId,
        test: 'remainder',
        firstVisibleElementId: nextElementInClassId,
      });
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
    const firstVisibleElementId = page.firstVisibleElementId;
    if (element) {
      let yOffset = element.getBoundingClientRect().top + window.scrollY;

      if (pagesinRow > 1) {
        let increment = 0;

        // If the row spans more than one viewport, add additional offsets
        for (let i = 0; i < pagesinRow; i++) {
          increment = yOffset + i * viewportHeight; // Increase by the height of the viewport for each subsequent page

          yOffsetPages.push({ yOffset: increment, tableId: tableId, firstVisibleElementId: firstVisibleElementId });
        }
      } else {

        yOffsetPages.push({ yOffset: yOffset, tableId: tableId, firstVisibleElementId: firstVisibleElementId });

      }
    }
  });

  //sendMessage(JSON.stringify({ type: 'debug', data: pages }));
  sendMessage(JSON.stringify({ type: 'PAGINATION_DATA', data: yOffsetPages }));
  adjustOverlay(yOffsetPages[0].firstVisibleElementId);

} `


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
            
          
            if (tbodyCurrentHeight >= viewportHeight) {
              adjustRowFontSize(minFontSize, midFontSize, threshold);
            } else {
              adjustRowFontSize(midFontSize, maxFontSize, threshold);
            }
          }
      
          let minFontSize = 1; // Smallest readable font size
          let maxFontSize = parseFloat(window.getComputedStyle(tbody, null).getPropertyValue('font-size')); // Get the font size of the first row
          let threshold = 1;



          adjustRowFontSize(minFontSize, maxFontSize, threshold);


          tbodyHeight = tbody.clientHeight;
          if (tbodyId == 0 && caption) {
            captionHeight = caption.clientHeight;
            currentPageHeight = captionHeight;
          }

          // Check if the tbody fits in the remaining space of the current page
          if ((tbodyId == 0 && caption && tbodyHeight <= viewportHeight) ||
              (currentPageHeight + tbodyHeight <= viewportHeight))
           {
                currentPage.push(tbody.id);
                currentPageHeight += tbodyHeight;
                //sendMessage(JSON.stringify({type: 'debug', data: 'current page height' + currentPage[0]}));

            
              

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
`function adjustOverlay(elementId) {
  var element = document.getElementById(elementId);
  // check if element is a caption
  if (element && element.classList.contains('caption')) {
    //find the table id
    var captionIdComponents = element.id.split("_");
    var tableId = captionIdComponents[2];
    parentElement = document.getElementById('table_' + tableId);

    parentElement.style.visibility = 'hidden';

  } else {
  // set element to invisible
  element.style.visibility = 'hidden';
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
var sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.removeProperty('visibility');
});
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

export { arabicNumbers , disableScrolling , extractTableTitlesAndIds , sendMessage , setOverlays , clearOverlays, adjustOverlay , adjustOverlayGlorification , paginateTables , paginateTablesGlorification };