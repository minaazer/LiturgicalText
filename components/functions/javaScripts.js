// Initialize
const initialize =`
async function initialize() {
    // Inject spinner and show loading indicator
        injectSpinner();
        showSpinner();

        // Custom ready flag to track initialization
        let isInitialized = false;
        try {
            // Perform operations in sequence
            await convertArabicCaptions();
            await loadStoredSettings(currentFileStates);
            await extractTableTitlesAndIds();
            await paginateTables();


        } catch (error) {
            debugMessage('Error during setup:'+ error);
        } finally {
            // Mark as initialized
            isInitialized = true;

            hideSpinner(); // Ensure spinner is hidden even if there's an error
        }

        // Wait for initialization before enabling interactions
        if (isInitialized) {
            sendMessage(JSON.stringify({ type: 'LOADING', data: false }));

            listenToButtonClicks();
            listenToBookNavigationButtons();


        }
}`;

// touchNavigation
const handleTouchNavigation = `
function handleTouchNavigation(event) {
    // Safely handle touchstart event
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 0) {
            const pageX = event.touches[0].pageX;
            // Post message to React Native
            if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'TOUCH_START', data: pageX }));
            } else {
                debugMessage('ReactNativeWebView is not available');
            }
        }
    });

    // Safely handle touchend event
    document.addEventListener('touchend', function (event) {
        if (event.changedTouches.length > 0) {
            const pageX = event.changedTouches[0].pageX;

            // Post message to React Native
            if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'TOUCH_END', data: pageX }));
            } else {
                debugMessage('ReactNativeWebView is not available');
            }
        }
    });
}`;


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

async function convertArabicCaptions() {
    return new Promise((resolve, reject) => {
        try {
            // Find all elements with class 'arabic-caption' and convert their text content
            const elements = document.querySelectorAll('.arabic-caption');
            elements.forEach(element => {
                element.innerHTML = convertDigitsToArabic(element.innerHTML);
            });

            // Resolve the Promise after the operation is complete
            resolve();
        } catch (error) {
            // Reject the Promise if an error occurs
            reject(error);
        }
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
`async function extractTableTitlesAndIds() {
    return new Promise((resolve, reject) => {
        try {
            const tables = document.querySelectorAll('table');
            const titlesAndIds = [];

            tables.forEach((table, index) => {
                const caption = table.querySelector('caption');

                const title = { english: '', coptic: '', arabic: '', order: [] }; // Initialize English, Coptic, and Arabic as empty strings
                if (caption) {
                    Array.from(caption.childNodes).forEach((node) => {
                        if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
                            // Text node for English
                            title.english += node.nodeValue.trim() + ' '; // Concatenate English text nodes
                            if (!title.order.includes('english')) title.order.push('english'); // Only push 'english' once
                        } else if (node.nodeType === 1 && node.classList.contains('coptic-caption')) {
                            // Element node for Coptic
                            title.coptic += node.innerText.trim() + ' '; // Concatenate Coptic text nodes
                            if (!title.order.includes('coptic')) title.order.push('coptic'); // Only push 'coptic' once
                        } else if (node.nodeType === 1 && node.classList.contains('arabic-caption')) {
                            // Element node for Arabic
                            title.arabic += node.innerHTML.replace(/<br>/g, ' ').trim() + ' '; // Concatenate Arabic text nodes
                            if (!title.order.includes('arabic')) title.order.push('arabic');
                        }
                    });
                }

                const id = table.getAttribute('id') || 'generated-id-' + index;
                table.id = id; // Ensure every table has an ID

                // Only push if there is a title
                if (
                    title.english.trim() !== '' ||
                    title.coptic.trim() !== '' ||
                    title.arabic.trim() !== ''
                ) {
                    titlesAndIds.push({ title, id });
                }
            });

            // Send the data and resolve the Promise
            sendMessage(JSON.stringify({ type: 'TABLES_INFO', data: titlesAndIds }));
            resolve(titlesAndIds);
        } catch (error) {
            // Handle errors by rejecting the Promise
            sendMessage(JSON.stringify({ type: 'error', message: error.message }));
            reject(error);
        }
    });
}
`;

// Send message to React Native
  const sendMessage =
`
function debugMessage(log, retryCount = 5) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: 'DEBUG', data: log })
        );
    } else if (retryCount > 0) {
        setTimeout(() => {
            debugMessage(log, retryCount - 1);
        }, 100); // Retry after 100ms
    } else {
        console.error("ReactNativeWebView.postMessage is not available.");
    }
}



let messageQueue = [];
let isSendingMessage = false;

function sendMessage(message, retryCount = 5) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        if (isSendingMessage) {
            messageQueue.push(message);
        } else {
            isSendingMessage = true;
            window.ReactNativeWebView.postMessage(message);
        }
    } else if (retryCount > 0) {
        setTimeout(() => {
            sendMessage(message, retryCount - 1);
        }, 100); // Retry after 100ms
    } else {
        console.error("ReactNativeWebView.postMessage is not available.");
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
    return new Promise((resolve, reject) => {
        try {

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

  sendMessage(JSON.stringify({ type: 'PAGINATION_DATA', data: yOffsetPages }));
// Adjust overlay with the first visible element
            if (yOffsetPages.length > 0) {
                adjustOverlay(yOffsetPages[0].firstVisibleElementId);
            }

            // Resolve the promise once everything is done
            resolve(yOffsetPages);
        } catch (error) {
            // Reject the promise in case of an error
            reject(error);
        }
    });

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
const clearOverlays =`function clearOverlays() {
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


const showBlackScreen =`
window.showBlackScreen = function() {
    console.log('showBlackScreen called'); // Debugging: check if the function is triggered
    const existingOverlay = document.getElementById('blackScreenOverlay');
    if (!existingOverlay) {
        const overlay = document.createElement('div');
        overlay.id = 'blackScreenOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';  // Ensure it spans the full viewport width
        overlay.style.height = '100vh'; // Ensure it spans the full viewport height
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)'; // Ensure the black background is opaque
        overlay.style.zIndex = 9999; // Ensure high z-index
        overlay.style.pointerEvents = 'none'; // Make sure it doesn't block interactions
        document.body.appendChild(overlay);
    }
};

`

const removeBlackScreen = `

// Define the removeBlackScreen function to remove the black screen overlay
window.removeBlackScreen = function() {
  const overlay = document.getElementById('blackScreenOverlay');
  if (overlay) {
      overlay.remove();
  }
};`


const tableToggle =
 `
function listenToTableCaptions() {
    const tableCaptions = document.querySelectorAll('.caption');

    tableCaptions.forEach(caption => {
        caption.addEventListener('click', function() {
            const tableId = this.id.replace('caption_', '');
            const table = document.getElementById(tableId);
            
            if (table) {
                showSpinner(); // Show spinner before processing
                document.getElementById('spinner-overlay').style.removeProperty('background-color');
                document.getElementById('spinner-overlay').style.backgroundColor = 'rgba(20,20,20,0.8)'; // Semi-transparent spinner overlay

                const tableBodies = table.getElementsByTagName('tbody'); // Faster than querySelectorAll

                if (tableBodies.length > 0) {
                    Array.from(tableBodies).forEach(tbody => {
                        const isHidden = tbody.style.display === 'none';

                        // Toggle the display
                        tbody.style.display = isHidden ? 'table-row-group' : 'none';
                        this.classList.toggle('table-invisible', !isHidden);
                        // Update state
                        currentFileStates[tableId] = isHidden;
                        savedStates[fileKey] = currentFileStates;
                        sendMessage(JSON.stringify({ type: 'setStoredItem', data: { key: 'tableStates', value: savedStates } }));

                        // Check if the table has the "continued" class
                        if (table.classList.contains('continued')) {
                            // Calculate the next table ID
                            const nextTableId = tableId + '.5'; // No special handling needed here for $
                            const nextTable = document.getElementById(nextTableId);

                            if (nextTable) {
                                const nextTableBodies = nextTable.getElementsByTagName('tbody');
                                Array.from(nextTableBodies).forEach(nextTbody => {
                                    nextTbody.style.display = isHidden ? 'table-row-group' : 'none';
                                });

                                // Update state for the next table
                                currentFileStates[nextTableId] = isHidden;
                                savedStates[fileKey] = currentFileStates;
                                sendMessage(JSON.stringify({ type: 'setStoredItem', data: { key: 'tableStates', value: savedStates } }));
                            }
                        }
                    });

                    // Re-paginate after the toggle
                    setTimeout(() => {
                        paginateTables(); // Simulate pagination with timeout (if needed)
                        sendMessage(JSON.stringify({ type: 'TABLE_TOGGLE', data: tableId })); // Navigate to the table
                        hideSpinner(); // Hide spinner after processing
                    }, 100); // Adjust the delay as needed
                }
            }
        });
    });
}


`;

const loadStoredSettings = `
async function loadStoredSettings(currentFileStates) {
    return new Promise((resolve, reject) => {
        try {
            const tableCaptions = document.querySelectorAll('.caption');

            // Apply the saved state on page load
            Object.entries(currentFileStates).forEach(([tableId, isVisible]) => {
                const table = document.getElementById(tableId);
                if (table) {
                    const tableBodies = table.getElementsByTagName('tbody');
                    Array.from(tableBodies).forEach(tbody => {
                        tbody.style.display = isVisible ? 'table-row-group' : 'none';
                        const caption = document.getElementById('caption_' + tableId);
                        caption?.classList.toggle('table-invisible', !isVisible);
                    });
                }
            });

            // Resolve the promise after the operation is complete
            resolve();
        } catch (error) {
            // Reject the promise if an error occurs
            debugMessage('Error loading stored settings: ' + error);
            reject(error);
        }
    });
}
`;

const listenToButtonClicks = `
function listenToButtonClicks() {
  // Get all elements with class .navigationButton and .navigationLink
  const navigationButtons = document.querySelectorAll('.navigationButton, .navigationLink');
  

  // Loop through each navigation button
  navigationButtons.forEach(button => {
      // Attach click event listener to each button
      button.addEventListener('click', function() {
          const buttonId = this.dataset.navigation;
          sendMessage(JSON.stringify({ type: 'NAVIGATION', data: buttonId }));
      });
  });
};
`;

const bookNavigationButtons = `
function listenToBookNavigationButtons() {
  // Get all elements with class .skipButton
  const bookNavigationButtons = document.querySelectorAll('.skipButton');

  // Loop through each navigation button
  bookNavigationButtons.forEach(button => {
    // Attach click event listener to each button
    button.addEventListener('click', function () {
      debugMessage('Button clicked: ' + this.dataset.navigation);
      const tableId = this.dataset.navigation; // Get current tableId from data attribute
      const currentTable = document.getElementById(tableId); // Get the current table by its id
      debugMessage('Current table: ' + currentTable.id);
      if (currentTable) {
        // Find the parent <div> that contains the current table
        const currentDiv = currentTable.closest('div');

        // Try to find the next table in the same div
        let nextTable = currentTable.nextElementSibling;

        // If there's no next table in the same div, move to the next div
        while (nextTable && nextTable.tagName !== 'TABLE') {
          nextTable = nextTable.nextElementSibling;
        }

        // If no next table is found in the current div
        if (!nextTable) {
          // Move to the next div that contains tables
          let nextDiv = currentDiv.nextElementSibling;

          // If the next div is found, check for a table inside it
          if (nextDiv) {
            nextTable = nextDiv.querySelector('table'); // Get the first table in the next div
          }
        }

        // If we found the next table, get its ID and do something with it
        if (nextTable) {
          const nextTableId = nextTable.id; // Get the id of the next table
          sendMessage(JSON.stringify({ type: 'TABLE_TOGGLE', data: nextTableId })); // Navigate to the next table
        } else {
          sendMessage(JSON.stringify({ type: 'debug', data: 'No next table found' }));
        }
      }
    });
  });
}
`;

// Handle Spinner
const handleSpinner = `
// Inject Spinner and Overlay into the DOM
function injectSpinner() {
    const overlayDiv = document.createElement('div');
    overlayDiv.id = 'spinner-overlay';
    overlayDiv.style.zIndex = '9998'; // Make sure it's behind the spinner

    const spinnerDiv = document.createElement('div');
    spinnerDiv.id = 'spinner';
    spinnerDiv.style.zIndex = '9999'; // Ensure it's above the overlay

    const loaderDiv = document.createElement('div');
    loaderDiv.classList.add('loader'); // The class that controls spinner appearance

    spinnerDiv.appendChild(loaderDiv);
    document.body.appendChild(overlayDiv);
    document.body.appendChild(spinnerDiv);
}

// Show the spinner and overlay
function showSpinner() {
    document.getElementById('spinner-overlay').style.display = 'block';
    document.getElementById('spinner').style.display = 'block';
}

// Hide the spinner and overlay
function hideSpinner() {
    document.getElementById('spinner-overlay').style.display = 'none';
    document.getElementById('spinner').style.display = 'none';
}
`;

export { 
  initialize , handleTouchNavigation , arabicNumbers , disableScrolling , extractTableTitlesAndIds , 
  sendMessage , setOverlays , clearOverlays, adjustOverlay , adjustOverlayGlorification , paginateTables , 
  paginateTablesGlorification , showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , 
  handleSpinner , bookNavigationButtons , loadStoredSettings};