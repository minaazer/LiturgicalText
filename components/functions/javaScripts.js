// Initialize
const initialize =`
async function initialize() {
    // Inject spinner and show loading indicator
        injectSpinner();
        showSpinner();

        // Custom ready flag to track initialization
        try {
            // Perform operations in sequence
            await convertArabicCaptions();
            await loadStoredSettings(currentFileStates);
            await extractTableTitlesAndIds();

            if (!window._scrollMode) {
                await waitForInitialLayout();
                await paginateTables();
                // Extra pass for small portrait screens (e.g., large psalmody JSON) to re-measure after everything settles
                const isSmallPortrait =
                  window.innerWidth > 0 &&
                  window.innerHeight > window.innerWidth &&
                  window.innerWidth < 520;
                if (isSmallPortrait && !window._postFontRepaginated) {
                  window._postFontRepaginated = true;
                  setTimeout(() => {
                    try {
                      if (typeof paginateTables.clearFontCache === 'function') {
                        paginateTables.clearFontCache();
                      }
                      if (typeof paginateTables.clearPaginationCache === 'function') {
                        paginateTables.clearPaginationCache();
                      }
                      paginateTables();
                    } catch (_e) {
                      // ignore
                    }
                  }, 150);
                }
            }


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
            window._lastPaginateHeight = window.innerHeight;

            // Debounced re-pagination on meaningful height changes only (helps avoid flicker on drawer slide)
            if (!window._scrollMode && !window._debouncedPaginateResize) {
                let resizeTimeout = null;
                let lastHeight = window.innerHeight;
                window._debouncedPaginateResize = () => {
                    if (resizeTimeout) {
                        clearTimeout(resizeTimeout);
                    }
                    resizeTimeout = setTimeout(() => {
                        if (window._suspendPaginate) {
                            return;
                        }
                        const newHeight = window.innerHeight;
                        if (Math.abs(newHeight - lastHeight) > 1) { // ignore width-only changes and sub-pixel jitter
                            lastHeight = newHeight;
                            window._lastPaginateHeight = newHeight;
                            paginateTables();
                        }
                    }, 150); // wait for drawer animation/resize to settle
                };
                window.addEventListener("resize", window._debouncedPaginateResize);
            }
        }

}

function waitForInitialLayout() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve();

    return Promise.all([fontsReady]).then(() => {
        return new Promise((resolve) => {
            const settleDelay = isIOS ? 120 : 60;
            requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(resolve, settleDelay)));
        });
    });
}`;

//
const dynamicTableClasses = `
function applyDynamicTableClasses() {
    console.log('Applying dynamic table classes');

    // Apply classes to all rows and cells dynamically
    document.querySelectorAll('table tr').forEach(function (row) {
        var columnCount = row.children.length; // Count the number of columns

        // Add specific classes to each cell based on its position and the column count
        row.querySelectorAll('td').forEach(function (cell, index) {
            cell.classList.add('column-' + (index + 1) + '-' + columnCount); // Add a class based on position and total columns
        });
    });

    // Optional: Verification step
    var sampleCount = document.querySelectorAll('td.column-1-3').length;
    console.log('Total cells with class "column-1-3": ' + sampleCount);
}
`;

// touchNavigation
const handleTouchNavigation = `
function handleTouchNavigation(event) {
  let isTouching = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let buttonClicked = false;
  const isScrollMode = () => window._scrollMode === true;

  // Shared logic for handling element interactions
  function handleInteraction(pageX, pageY) {
    const targetElement = document.elementFromPoint(pageX, pageY);
    if (targetElement) {
      let currentElement = targetElement;

      while (currentElement) {
        if (currentElement.classList.contains("explanation-button")) {
          listenToPopupButtonClicks(currentElement);
          buttonClicked = true;
          return; // Stop further processing
        }
        
        if (currentElement.classList.contains("image-button")) {
          listenToImagePopupButtonClicks(currentElement);
          buttonClicked = true;
          return; // Stop further processing
        }
        
        if (currentElement.classList.contains("audio-button")) {
          listenToAudioPopupButtonClicks(currentElement);
          buttonClicked = true;
          return; // Stop further processing
        }

       if (
          currentElement.classList.contains("caption") &&
          pageX <= 150 &&
          Math.abs(touchStartY - pageY) < 15 // no vertical drag
        ) {
          listenToTableCaption(currentElement);
          buttonClicked = true;
          return;
        }


        if (
          currentElement.classList.contains("navigationButton") ||
          currentElement.classList.contains("navigationLink")
        ) {
          listenToButtonClick(currentElement);
          buttonClicked = true;
          return; // Stop further processing
        }

        if (currentElement.classList.contains("skipButton")) {
          listenToBookNavigationButtons(currentElement);
          buttonClicked = true;
          return; // Stop further processing
        }


        currentElement = currentElement.parentElement; // Traverse up the DOM tree
      }
    }
  }

  // Touchstart and Mousedown: Start interaction
  function startInteraction(event) {
    if (!isScrollMode()) {
      event.preventDefault();
    }
    isTouching = true;
    buttonClicked = false;

    let pageX, pageY;
    if (event.type === "touchstart") {
      pageX = event.touches[0].pageX;
      pageY = event.touches[0].pageY - window.scrollY; // Account for scroll position
    } else if (event.type === "mousedown") {
      pageX = event.pageX;
      pageY = event.pageY - window.scrollY;
    }

    touchStartX = pageX;
    touchStartY = pageY;

    if (!isScrollMode()) {
      handleInteraction(pageX, pageY); // Handle element interaction
    }
  }

  // Touchmove and Mousemove: Handle move interactions
  function moveInteraction(event) {
    if (!isTouching) return;
    if (!isScrollMode()) {
      event.preventDefault();
    }

    let pageX, pageY;
    if (event.type === "touchmove") {
      pageX = event.touches[0].pageX;
      pageY = event.touches[0].pageY - window.scrollY;
    } else if (event.type === "mousemove") {
      pageX = event.pageX;
      pageY = event.pageY - window.scrollY;
    }
  }

  // Touchend and Mouseup: End interaction
  function endInteraction(event) {
    if (!isScrollMode()) {
      event.preventDefault();
    }
    isTouching = false;

    let pageX, pageY;
    if (event.type === "touchend" || event.type === "mouseup") {
      if (event.type === "touchend") {
        pageX = event.changedTouches[0].pageX;
        pageY = event.changedTouches[0].pageY - window.scrollY;
      } else if (event.type === "mouseup") {
        pageX = event.pageX;
        pageY = event.pageY - window.scrollY;
      }

      const deltaX = pageX - touchStartX;
      const deltaY = pageY - touchStartY;

      // Horizontal swipe detection
      if (Math.abs(deltaX) > 30 && Math.abs(deltaY) < 30) {
        if (deltaX > 0) {
          // Right swipe
          postMessageToReactNative("LEFT_SWIPE", deltaX);
        } else {
          // Left swipe
          postMessageToReactNative("RIGHT_SWIPE", deltaX);
        }
      } else if (!buttonClicked && Math.abs(deltaX) < 30 && Math.abs(deltaY) < 30) {
        if (isScrollMode()) {
          handleInteraction(pageX, pageY);
        } else {
          // No swipe, register a simple touch/click action
          postMessageToReactNative("TOUCH_END", pageX);
        }
      }
    }
  }

  // Touchcancel: Handle touch cancellation
  function cancelInteraction(event) {
    isTouching = false;
  }

  // Keyboard interaction
  function handleKeyPress(event) {
    if (isScrollMode()) return;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
      case "Enter":
      case " ":
        // Handle "Next" action
        postMessageToReactNative("HANDLE_NEXT", null);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        // Handle "Previous" action
        postMessageToReactNative("HANDLE_PREVIOUS", null);
        break;
      default:
        break;
    }
  }

  // Prevent all responses to mouse wheel actions
  document.addEventListener(
    "wheel",
    function (event) {
      if (isScrollMode()) return;
      event.preventDefault(); // Block default scrolling behavior
    },
    { passive: false }
  );

  // Event Listeners for Touch
  document.addEventListener("touchstart", startInteraction, { passive: false });
  document.addEventListener("touchmove", moveInteraction, { passive: false });
  document.addEventListener("touchend", endInteraction, { passive: false });
  document.addEventListener("touchcancel", cancelInteraction);

  // Event Listeners for Mouse
  document.addEventListener("mousedown", startInteraction);
  document.addEventListener("mousemove", moveInteraction);
  document.addEventListener("mouseup", endInteraction);

  // Event Listener for Keyboard
  document.addEventListener("keydown", handleKeyPress);

  // Helper function to post messages to React Native WebView
  function postMessageToReactNative(type, data) {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: type, data: data }));
    } else {
      console.debug("ReactNativeWebView is not available");
    }
  }
}
`;

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
                const nonTraditionalPascha = table.getAttribute('nonTraditionalPascha') || false;
                const tableClass = table.getAttribute('class') || '';
                const tableId = table.getAttribute('id') || 'generated-id-' + index;
                table.id = tableId; // Ensure every table has an ID

                // Collect metadata for caching
                const tbodiesMeta = Array.from(table.querySelectorAll('tbody')).map((tb) => ({
                    id: tb.id,
                    desiredFontSize: window.getComputedStyle(tb, null).getPropertyValue('font-size'),
                }));
                if (!window.tableMetadata) {
                    window.tableMetadata = {};
                }
                window.tableMetadata[tableId] = {
                    captionId: caption ? caption.id : null,
                    hasCaption: !!caption,
                    tbodies: tbodiesMeta,
                    tableClass,
                    nonTraditionalPascha,
                };

                if (tableClass.includes('notIndexed')) {
                    return; // Skip this table
                }

                const title = { english: '', coptic: '', arabic: '', order: [] }; // Initialize English, Coptic, and Arabic as empty strings
                if (caption) {
                    const textContainer = caption.querySelector('.caption-texts');
                    if (textContainer) {
                        const en = textContainer.querySelector('.english-caption');
                        const ar = textContainer.querySelector('.arabic-caption');
                        const co = textContainer.querySelector('.coptic-caption');
                        if (en && en.textContent.trim() !== '') {
                            title.english = en.textContent.trim();
                            title.order.push('english');
                        }
                        if (ar && ar.textContent.trim() !== '') {
                            title.arabic = ar.textContent.replace(/<br>/g, ' ').trim();
                            title.order.push('arabic');
                        }
                        if (co && co.textContent.trim() !== '') {
                            title.coptic = co.textContent.trim();
                            title.order.push('coptic');
                        }
                    } else {
                        Array.from(caption.childNodes).forEach((node) => {
                            if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
                                title.english += node.nodeValue.trim() + ' ';
                                if (!title.order.includes('english')) title.order.push('english');
                            } else if (node.nodeType === 1 && node.classList.contains('coptic-caption')) {
                                title.coptic += node.innerText.trim() + ' ';
                                if (!title.order.includes('coptic')) title.order.push('coptic');
                            } else if (node.nodeType === 1 && node.classList.contains('arabic-caption')) {
                                title.arabic += node.innerHTML.replace(/<br>/g, ' ').trim() + ' ';
                                if (!title.order.includes('arabic')) title.order.push('arabic');
                            }
                        });
                    }
                }

                // Only push if there is a title
                if (
                    title.english.trim() !== '' ||
                    title.coptic.trim() !== '' ||
                    title.arabic.trim() !== ''
                ) {
                    titlesAndIds.push({ title, id: tableId, nonTraditionalPascha });
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
    if (window._scrollMode) {
      sendMessage(JSON.stringify({ type: 'PAGINATION_DATA', data: [] }));
      return Promise.resolve([]);
    }
    if (paginateTables._pending) {
      return paginateTables._pending;
    }

    paginateTables._pending = new Promise((resolve, reject) => {
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
  paginateTables._fontSizeCache = paginateTables._fontSizeCache || {};
  paginateTables._paginationCache = paginateTables._paginationCache || {};
  paginateTables.clearFontCache = function() {
    paginateTables._fontSizeCache = {};
  };
  paginateTables.clearPaginationCache = function() {
    paginateTables._paginationCache = {};
  };

  // Build a layout signature to reuse pagination when layout is unchanged
  const tables = Array.from(document.querySelectorAll('table'));
  const layoutSignature = tables.map((table, index) => {
    const tid = table.getAttribute('id') || 'generated-id-' + index;
    const meta = (window.tableMetadata && window.tableMetadata[tid]) || null;
    const tbodiesMeta = meta
      ? meta.tbodies
      : Array.from(table.querySelectorAll('tbody')).map((tb) => ({
          id: tb.id,
          desiredFontSize: window.getComputedStyle(tb, null).getPropertyValue('font-size'),
        }));
    const tbodySig = tbodiesMeta.map((tb) => tb.id + ":" + tb.desiredFontSize).join(',');
    const captionSig = meta ? (meta.hasCaption ? '1' : '0') : (table.querySelector('caption') ? '1' : '0');
    const classSig = table.getAttribute('class') || '';
    return tid + "#" + classSig + "#" + captionSig + "#" + tbodySig;
  }).join('||');

  const paginationCacheKey = viewportHeight + "|" + layoutSignature;
  const cachedPagination = paginateTables._paginationCache[paginationCacheKey];
  if (cachedPagination) {
    sendMessage(JSON.stringify({ type: 'PAGINATION_DATA', data: cachedPagination }));
    if (cachedPagination.length > 0 && cachedPagination[0].firstVisibleElementId) {
      adjustOverlay(cachedPagination[0].firstVisibleElementId);
    }
    resolve(cachedPagination);
    return;
  }

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

          const firstRow = table.querySelector("tr");
          let firstRowHeight = 0;
          if (firstRow) {
            let rowInnerHeight = firstRow.getBoundingClientRect().height;
            let rowBorderHeight = firstRow.offsetHeight - firstRow.clientHeight;
            let rowStyle = window.getComputedStyle(firstRow);
            let rowMarginTop = rowStyle ? parseInt(rowStyle.marginTop) : 0;
            let rowMarginBottom = rowStyle ? parseInt(rowStyle.marginBottom) : 0;
            firstRowHeight =
              rowInnerHeight + rowBorderHeight + rowMarginTop + rowMarginBottom;
          }

          const lastPageElementId = currentPage.length
            ? currentPage[currentPage.length - 1]
            : null;
          const lastPageElement = lastPageElementId
            ? document.getElementById(lastPageElementId)
            : null;
          const lastIsHeaderTable =
            lastPageElement &&
            ((lastPageElement.classList &&
              lastPageElement.classList.contains("header-table")) ||
              (lastPageElement.tagName &&
                lastPageElement.tagName.toLowerCase() === "table" &&
                lastPageElement.querySelector("caption.header-table")));
          const treatHeaderAsCaption = lastIsHeaderTable && currentPage.length > 0;
          const treatNoCaptionAsContinuation = !caption && currentPage.length > 0;
          const allowCarryover = treatHeaderAsCaption || treatNoCaptionAsContinuation;

          // check if current page is not empty
          if (currentPage.length && !allowCarryover) {
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

          ////// check if table is class = onePage
          const tableClass = table.getAttribute("class");
          const isOnePage = table.classList.contains("onePage");
          
          if (isOnePage && (table.clientHeight + currentPageHeight) >= viewportHeight) {
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
            if (!treatHeaderAsCaption && currentPageHeight + captionHeight > viewportHeight) {
              lastPageFirstVisibleElement = pages[pages.length - 1]?.firstVisibleElementId;
              if (lastPageFirstVisibleElement !== tableId && currentPage[0]) {
                pages.push({
                  currentPage: currentPage[0],
                  pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                  tableId: tableId,
                  test: 'caption',
                  firstVisibleElementId: tableId,
                });
              }
              currentPage = [];
              currentPageHeight = 0;
          }
            if (currentPage.length === 0) {
              currentPage = [caption.id];
              currentPageHeight = captionHeight; // Start the new page with the caption's height
              pagesPerRow.push(1);
            } else {
              currentPage.push(caption.id);
              currentPageHeight += captionHeight;
            }
          }

/////// Check if the table has a tbody with scaling-container class
          if (table.querySelector("tbody.scaling-container")) {
            const isOnePage = table.classList.contains("onePage");
          //sendMessage(JSON.stringify({type: 'debug', data: 'scaling container'}));
            const captionHeightCache = new Map();
            const tbodyHeightCache = new Map();
            // Reset pagination accumulators for this scaling table
            remainder = 0;
            pagesPerRow = [1];
            if (caption && captionHeight) {
              // Start the table on the caption; do not push a page unless there was prior content
              currentPage = [caption.id];
              currentPageHeight = captionHeight;
            } else {
              currentPage = [];
              currentPageHeight = 0;
            }
            const meta = (window.tableMetadata && window.tableMetadata[tableId]) || null;
            const tbodies = meta
              ? meta.tbodies.map((tb) => document.getElementById(tb.id)).filter(Boolean)
              : Array.from(table.querySelectorAll("tbody"));
            const tbodySignature = meta
              ? meta.tbodies.map((tb) => tb.id).join("|")
              : tbodies.map((tb) => tb.id).join("|");
            const desiredSignature = meta
              ? meta.tbodies.map((tb) => tb.desiredFontSize).join("|")
              : tbodies
                .map((tb) => window.getComputedStyle(tb, null).getPropertyValue("font-size"))
                .join("|");
            const cacheKey = tableId + "|" + viewportHeight + "|" + tbodySignature + "|" + desiredSignature;
            const cachedSizes = paginateTables._fontSizeCache[cacheKey];
            const fontSizesForCache = {};
            const shouldUseCache = !!cachedSizes;

            // Apply cached font sizes upfront if available to avoid recalculating
            if (shouldUseCache) {
              tbodies.forEach((tbody, index) => {
                const cachedSize = cachedSizes.fontSizes ? cachedSizes.fontSizes[tbody.id] : null;
                if (cachedSize) {
                  tbody.style.fontSize = cachedSize;
                  if (isOnePage && index === 0 && caption && cachedSizes.captionSize) {
                    caption.style.fontSize = cachedSizes.captionSize;
                  }
                }
              });
            }

            tbodies.forEach((tbody, index) => {
              let captionHeightLocal = captionHeightCache.has(tableId)
                ? captionHeightCache.get(tableId)
                : (caption ? (caption.clientHeight || 0) : 0);
              let tbodyHeight = tbodyHeightCache.has(tbody.id)
                ? tbodyHeightCache.get(tbody.id)
                : tbody.clientHeight;
              const isFirstBody = index === 0 && caption;
              const captionBaseSize = caption
                ? parseFloat(window.getComputedStyle(caption, null).getPropertyValue("font-size"))
                : null;
              const tbodyBaseSize = parseFloat(
                window.getComputedStyle(tbody, null).getPropertyValue("font-size")
              );
              const captionDelta =
                captionBaseSize != null && tbodyBaseSize
                  ? captionBaseSize - tbodyBaseSize
                  : null;

              // Early exit if the desired CSS size already fits
              const initialHeight = isFirstBody ? tbodyHeight + captionHeightLocal : tbodyHeight;

              // Adjust tbody height using an iterative binary search
              function adjustRowFontSize(maxFontSize) {
                const minFontSize = 1; // Smallest readable font size
                let low = minFontSize;
                let high = maxFontSize;
                let lastGoodSize = minFontSize;
                let appliedCaptionSize = null;
                const maxIterations = 8; // Bounded iterations to limit reflows

                for (let i = 0; i < maxIterations; i++) {
                  if (high - low <= 0.5) {
                    break;
                  }
                  const mid = (low + high) / 2;
                  const newFontSize = mid + "px";

                  if (isOnePage && isFirstBody) {
                    if (captionDelta != null) {
                      const capSize = Math.max(1, mid + captionDelta);
                      appliedCaptionSize = capSize + "px";
                      caption.style.fontSize = appliedCaptionSize;
                    } else if (captionBaseSize && tbodyBaseSize) {
                      const scale = mid / tbodyBaseSize;
                      appliedCaptionSize = captionBaseSize * scale + "px";
                      caption.style.fontSize = appliedCaptionSize;
                    } else {
                      appliedCaptionSize = newFontSize;
                      caption.style.fontSize = appliedCaptionSize;
                    }
                  }
                  tbody.style.fontSize = newFontSize;

                  tbodyHeight = tbody.clientHeight;
                  if (caption) {
                    captionHeightLocal = caption.clientHeight ? caption.clientHeight : 0;
                    captionHeightCache.set(tableId, captionHeightLocal);
                  }
                  const tbodyCurrentHeight = isFirstBody ? tbodyHeight + (captionHeightLocal || 0) : tbodyHeight;

                  if (tbodyCurrentHeight > viewportHeight) {
                    high = mid;
                  } else {
                    lastGoodSize = mid;
                    low = mid;
                  }
                }

                // Apply the largest size that fit
                const finalSize = lastGoodSize + "px";
                if (isOnePage && isFirstBody) {
                  if (captionDelta != null) {
                    const capSizeFinal = Math.max(1, lastGoodSize + captionDelta);
                    appliedCaptionSize = capSizeFinal + "px";
                    caption.style.fontSize = appliedCaptionSize;
                  } else if (captionBaseSize && tbodyBaseSize) {
                    const scaleFinal = lastGoodSize / tbodyBaseSize;
                    appliedCaptionSize = captionBaseSize * scaleFinal + "px";
                    caption.style.fontSize = appliedCaptionSize;
                  } else {
                    appliedCaptionSize = finalSize;
                    caption.style.fontSize = appliedCaptionSize;
                  }
                }
                tbody.style.fontSize = finalSize;

                // Final height measurements
                tbodyHeight = tbody.clientHeight;
                if (caption) {
                  captionHeightLocal = caption.clientHeight ? caption.clientHeight : 0;
                  captionHeightCache.set(tableId, captionHeightLocal);
                }
                tbodyHeightCache.set(tbody.id, tbodyHeight);

                return finalSize;
              }

              const maxFontSize = parseFloat(window.getComputedStyle(tbody, null).getPropertyValue('font-size')); // Desired CSS size
              const needsResize = initialHeight > viewportHeight && !(shouldUseCache && cachedSizes.fontSizes && cachedSizes.fontSizes[tbody.id]);

              let appliedSize = shouldUseCache && cachedSizes.fontSizes ? cachedSizes.fontSizes[tbody.id] : null;
              if (needsResize) {
                appliedSize = adjustRowFontSize(maxFontSize);
              }

              // Refresh height values after potential resizing
              tbodyHeight = tbody.clientHeight;
              tbodyHeightCache.set(tbody.id, tbodyHeight);
              if (isFirstBody) {
                captionHeightLocal = caption ? caption.clientHeight : 0;
                captionHeightCache.set(tableId, captionHeightLocal);
                currentPageHeight = captionHeightLocal;
              }

              // Ensure caption stays in sync with tbody size (even if no resize occurred)
              if (isFirstBody && caption && (captionDelta != null || appliedSize || tbodyBaseSize)) {
                const bodySizeNum = appliedSize
                  ? parseFloat(appliedSize)
                  : parseFloat(tbody.style.fontSize) || tbodyBaseSize;
                if (bodySizeNum) {
                  const capSizeNum =
                    captionDelta != null ? Math.max(1, bodySizeNum + captionDelta) : bodySizeNum;
                  const capSizeStr = capSizeNum + "px";
                  caption.style.fontSize = capSizeStr;
                }
              }

              // Track sizes for cache
              if (!appliedSize) {
                appliedSize = tbody.style.fontSize || (maxFontSize + "px");
              }
              fontSizesForCache[tbody.id] = appliedSize;
              if (index === 0 && caption) {
                const appliedCaption =
                  caption.style.fontSize ||
                  (function () {
                    const bodySizeNum = appliedSize ? parseFloat(appliedSize) : tbodyBaseSize;
                    if (!bodySizeNum) return null;
                    if (captionDelta != null) {
                      return Math.max(1, bodySizeNum + captionDelta) + "px";
                    }
                    return bodySizeNum + "px";
                  })() ||
                  appliedSize;
                fontSizesForCache._captionSize = appliedCaption;
              }

              // Check if the tbody fits in the remaining space of the current page
              if ((isFirstBody && caption && tbodyHeight <= viewportHeight) ||
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



            // Populate cache after sizing
            if (!shouldUseCache) {
              paginateTables._fontSizeCache[cacheKey] = {
                fontSizes: fontSizesForCache,
                captionSize: fontSizesForCache._captionSize,
              };
            }
          } else {
           
///// Query all rows in the table

          const rowOverlapPx = 20; // small overlap to avoid cutting a line between pages
          table.querySelectorAll("tr").forEach((row) => {
            let rowInnerHeight = row ? row.getBoundingClientRect().height : 0;
            let rowBorderHeight = row ? row.offsetHeight - row.clientHeight : 0;
            let rowStyle = row ? window.getComputedStyle(row) : null;
            let rowMarginTop = rowStyle ? parseInt(rowStyle.marginTop) : 0;
            let rowMarginBottom = rowStyle ? parseInt(rowStyle.marginBottom) : 0;
            let rowPaddingBottom = rowStyle ? parseInt(rowStyle.paddingBottom) : 0;
            const rowHeight = row ? rowInnerHeight + rowBorderHeight + rowMarginTop + rowMarginBottom : 0;
            const effectiveViewport = Math.max(0, viewportHeight - rowOverlapPx);

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
                  const sliceHeight = Math.max(1, effectiveViewport);
                  pagesPerRow.push(Math.ceil((rowHeight - rowPaddingBottom) / sliceHeight));
                  fullPages = Math.floor(rowHeight / sliceHeight);
                  remainder = rowHeight - fullPages * sliceHeight + rowOverlapPx; // small overlap to avoid cutting a line
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
                const sliceHeight = Math.max(1, effectiveViewport);
                pagesPerRow.push(Math.ceil((currentPageHeight + rowHeight - rowPaddingBottom) / sliceHeight));
                fullPages = Math.floor((rowHeight - rowPaddingBottom + captionHeight) / sliceHeight);
                remainder = rowHeight + captionHeight - fullPages * sliceHeight + rowOverlapPx; // overlap to avoid cutting a line
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

                const sliceHeight = Math.max(1, effectiveViewport);
                pagesPerRow.push(Math.ceil((rowHeight - rowPaddingBottom) / sliceHeight));

                fullPages = Math.floor((rowHeight - rowPaddingBottom) / sliceHeight);
                remainder = rowHeight - fullPages * sliceHeight + rowOverlapPx; // overlap to avoid cutting a line
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

        // Start by finding the next sibling of the given element
        let nextElement = element.nextElementSibling;
        const visitedElements = new Set();
        
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
        
        return nextElement;
      }




      // Get the element at the top of the screen by ID
      let element = document.getElementById(currentPage[0]);

      // Get element class type (e.g., row, table, section)
      let elementType = element.tagName ? element.tagName.toLowerCase().trim() : "";
      
      // Declare variables in a broader scope
      let nextElementInClass;
      let nextElementInClassId;
      
      if ( elementType === "tr" || elementType === "caption") {
        // Find the closest table ancestor
        let parentTable = element.closest('table');
        let parentTableClass = parentTable.getAttribute("class");
        
        
        if (parentTable) {
          // Use the function to find the next sibling or the parent's next sibling
          nextElementInClass = findNextElementOrParentSibling(parentTable);
          nextElementInClassId = nextElementInClass ? nextElementInClass.id : "";
          // check if the elementHeight + remainderPageHeight is less than viewport height
          
          while (nextElementInClass && currentPage.includes(nextElementInClass.id)) {    
            const classAttribute = nextElementInClass.getAttribute("class");
            nextElementInClassClass = classAttribute ? classAttribute.toLowerCase() : "";
            if (nextElementInClass === "section") {
              sectionsDisplayed.push(nextElementInClass.id);
            }              
            const previousElement = nextElementInClass;
            
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
      // Safely log the next element's ID
        if (currentPage[0]) {
          pages.push({
            currentPage: currentPage[0],
            pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
            tableId: tableId,
            test: 'remainder for element',
            firstVisibleElementId: nextElementInClassId,
          });
          pagesPerRow.push(1);
        }
        currentPage = [];
        currentPageHeight = 0;
    }
  });

  // Convert pages data to an array of Y-offsets for React Native to consume.
  const rowOverlapPx = 20;
  const filteredPages = [];
  pages.forEach((page) => {
    if (!page || !page.currentPage) {
      sendMessage(
        JSON.stringify({
          type: 'debug',
          data:
            'paginateTables: dropping page with no currentPage table=' +
            (page && page.tableId ? page.tableId : ''),
        })
      );
      return;
    }
    const fid = page.firstVisibleElementId || page.currentPage;
    const exists =
      document.getElementById(fid) || document.getElementById(page.currentPage);
    if (!exists) {
      sendMessage(
        JSON.stringify({
          type: 'debug',
          data:
            'paginateTables: dropping page with missing element table=' +
            (page && page.tableId ? page.tableId : '') +
            ' fid=' +
            fid,
        })
      );
      return;
    }
    filteredPages.push(page);
  });

  let yOffsetPages = [];
  filteredPages.forEach((page) => {
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
          increment = yOffset + i * (viewportHeight - rowOverlapPx); // Increase by the effective page height for each subsequent page

          yOffsetPages.push({ yOffset: increment, tableId: tableId, firstVisibleElementId: firstVisibleElementId });
        }
      } else {

        yOffsetPages.push({ yOffset: yOffset, tableId: tableId, firstVisibleElementId: firstVisibleElementId });

      }
    }
  });
  // Cache pagination result for reuse when layout is unchanged
  paginateTables._paginationCache[paginationCacheKey] = yOffsetPages;

  // Debug pagination payload (kept for future troubleshooting)
  // try {
  //   const debugSummary = {
  //     type: 'debug',
  //     data: {
  //       paginationSummary: {
  //         filteredPagesCount: filteredPages.length,
  //         yOffsetCount: yOffsetPages.length,
  //         firstOffsets: yOffsetPages.slice(0, 10).map((entry, idx) =>
  //           [
  //             idx,
  //             entry.tableId,
  //             entry.firstVisibleElementId,
  //             Math.round(entry.yOffset),
  //           ].join('|')
  //         ),
  //         lastOffsets: yOffsetPages.slice(-10).map((entry, idx) =>
  //           [
  //             yOffsetPages.length - 10 + idx,
  //             entry.tableId,
  //             entry.firstVisibleElementId,
  //             Math.round(entry.yOffset),
  //           ].join('|')
  //         ),
  //         tableCounts: (() => {
  //           const counts = {};
  //           yOffsetPages.forEach((p) => {
  //             const key = p.tableId || 'unknown';
  //             counts[key] = (counts[key] || 0) + 1;
  //           });
  //           return Object.keys(counts)
  //             .slice(0, 12)
  //             .map((k) => {
  //               const tableEl = document.getElementById(k);
  //               const titleAttr = tableEl ? tableEl.getAttribute('title') : '';
  //               const captionEl = tableEl ? tableEl.querySelector('.caption') : null;
  //               const fallback = captionEl && captionEl.textContent ? captionEl.textContent.trim() : '';
  //               const title = titleAttr || fallback;
  //               return k + ':' + counts[k] + (title ? ':' + title : '');
  //             });
  //         })(),
  //         allOffsets: yOffsetPages.map((entry, idx) =>
  //           [
  //             idx,
  //             entry.tableId,
  //             entry.firstVisibleElementId,
  //             Math.round(entry.yOffset),
  //           ].join('|')
  //         ),
  //       },
  //     },
  //   };
  //   sendMessage(JSON.stringify(debugSummary));
  // } catch (e) {
  //   // ignore logging errors
  // }
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

    paginateTables._pending.finally(() => {
      paginateTables._pending = null;
    });

    return paginateTables._pending;
} `


/* Pagination glorification
const paginateTablesGlorification =
`function paginateTables() {
  const viewportHeight = window.innerHeight;
  let pages = [];
  let currentPage = [];
  let currentPageHeight = 0;
  let tableId = "table_0";

  document.querySelectorAll('table').forEach(table => {
    // Flush any pending page state from the previous table to avoid carryover (can revert if it causes regression)
    const prevTableId = tableId;
    if (currentPage.length) {
      pages.push({
        currentPage: currentPage[0],
        pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
        tableId: prevTableId,
        firstVisibleElementId: currentPage[0],
        test: 'flush-prev-table',
      });
    }
    currentPage = [];
    currentPageHeight = 0;
    pagesPerRow = [1];
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
          const isOnePage = table.classList.contains("onePage");
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
            if (isOnePage && tbodyId == 0 && caption) {
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
}`*/

// Overlay functions
const adjustOverlay =
`function adjustOverlay(elementId) {
  if (window._scrollMode) {
    return;
  }
  // Early exit if nothing to do
  if (!elementId && !window._lastOverlayElementId) {
    return;
  }

  // Use last element if none provided
  var targetId = elementId || window._lastOverlayElementId;
  var element = document.getElementById(targetId);

  // If target is the same and already hidden, bail out
  if (window._lastOverlayElementId === targetId && element && element.style.visibility === 'hidden') {
    return;
  }

  window._lastOverlayElementId = targetId;
  
  // check if element is a caption
  if (element && element.classList.contains('caption')) {
    //find the table id
    var captionIdComponents = element.id.split("_");
    var tableId = captionIdComponents[2];
    parentElement = document.getElementById('table_' + tableId);

    parentElement.style.visibility = 'hidden';
    } else if (element && element.classList.contains('section')) {
     element.style.visibility = 'hidden';
     // get next section
      var nextElement = element.nextElementSibling;
      if (nextElement) {
        nextElement.style.visibility = 'hidden';
      }
  
    } else {
  // set element to invisible
  element.style.visibility = 'hidden';
  }

}`

const adjustOverlayGlorification =
`function adjustOverlay() {
  // If overlay already cleared for current scroll, skip
  if (window._lastGlorificationOverlay && window._lastGlorificationOverlay.scrollY === window.scrollY) {
    return;
  }
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
      window._lastGlorificationOverlay = { scrollY: window.scrollY };
      return;
  }
  window._lastGlorificationOverlay = { scrollY: window.scrollY };
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
  function listenToTableCaption(captionElement) {
    const tableId = captionElement.id.replace('caption_', '');
    const table = document.getElementById(tableId);

    if (table) {
      const stableId = table.getAttribute('data-table-id') || tableId;
      showSpinner();
      document.getElementById('spinner-overlay').style.backgroundColor = 'rgba(20,20,20,0.8)';

      const tableBodies = table.getElementsByTagName('tbody');

      if (tableBodies.length === 0) {
        hideSpinner();
        return;
      }

      if (tableBodies.length > 0) {
        Array.from(tableBodies).forEach(tbody => {
          const isHidden = tbody.style.display === 'none';
          tbody.style.display = isHidden ? 'table-row-group' : 'none';
          captionElement.classList.toggle('table-invisible', !isHidden); // Use the passed captionElement
          table.classList.toggle('table-invisible', !isHidden);
          currentFileStates[stableId] = isHidden;
          savedStates[fileKey] = currentFileStates;
          sendMessage(JSON.stringify({ type: 'setStoredItem', data: { key: 'tableStates', value: savedStates } }));

          if (table.classList.contains('continued') || table.classList.contains('continuedUpOne')) {
            let nextTableId;  
            if (table.classList.contains('continued')) {
              nextTableId = tableId + '.5';
            } else if (table.classList.contains('continuedUpOne')) {
              let parts = tableId.split("_"); // Split at "_"
              let number = parseInt(parts[1], 10) + 1; 
              nextTableId = "table_"+ number;
            }

            const nextTable = document.getElementById(nextTableId);
            if (nextTable) {
              const nextStableId = nextTable.getAttribute('data-table-id') || nextTableId;
              nextTable.classList.toggle('table-invisible', !isHidden);
              const nextTableBodies = nextTable.getElementsByTagName('tbody');
              Array.from(nextTableBodies).forEach(nextTbody => {
                nextTbody.style.display = isHidden ? 'table-row-group' : 'none';
              });
              currentFileStates[nextStableId] = isHidden;
              savedStates[fileKey] = currentFileStates;
              sendMessage(JSON.stringify({ type: 'setStoredItem', data: { key: 'tableStates', value: savedStates } }));
            }
          }
        });

        setTimeout(() => {
          if (!window._scrollMode) {
            if (paginateTables && typeof paginateTables.clearFontCache === 'function') {
              paginateTables.clearFontCache();
            }
            if (paginateTables && typeof paginateTables.clearPaginationCache === 'function') {
              paginateTables.clearPaginationCache();
            }
            paginateTables();
          }
          sendMessage(JSON.stringify({ type: 'TABLE_TOGGLE', data: tableId }));
          hideSpinner();
        }, 100);
      }
    }
  }


`;

const loadStoredSettings = `
async function loadStoredSettings(currentFileStates) {
    return new Promise((resolve, reject) => {
        try {
            const tables = document.querySelectorAll('table');
            const hasOwn = Object.prototype.hasOwnProperty;
            let shouldPersist = false;

            tables.forEach(table => {
                if (!table) return;
                const caption = table.querySelector('caption');
                const hasHiddenCaption =
                    caption && caption.classList.contains('hidden-caption');
                const hasCaption = !!caption;
                const hasNavLink = !!table.querySelector('tr.navigationLink');
                const tableBodies = table.getElementsByTagName('tbody');
                if (hasHiddenCaption || hasNavLink || !hasCaption) {
                    table.classList.remove('table-invisible');
                    if (caption) {
                        caption.classList.remove('table-invisible');
                    }
                    Array.from(tableBodies).forEach(tbody => {
                        tbody.style.display = 'table-row-group';
                    });
                    return;
                }

                const stableId = table.getAttribute('data-table-id') || table.id;
                let isVisible;
                if (hasOwn.call(currentFileStates, stableId)) {
                    isVisible = currentFileStates[stableId];
                }

                if (typeof isVisible === 'boolean') {
                    table.classList.toggle('table-invisible', !isVisible);
                    if (caption) {
                        caption.classList.toggle('table-invisible', !isVisible);
                    }
                }
                if (table.classList.contains('table-invisible')) {
                    Array.from(tableBodies).forEach(tbody => {
                        tbody.style.display = 'none';
                    });
                } else {
                    Array.from(tableBodies).forEach(tbody => {
                        tbody.style.display = 'table-row-group';
                    });
                }
            });

            if (shouldPersist) {
                savedStates[fileKey] = currentFileStates;
                sendMessage(JSON.stringify({ type: 'setStoredItem', data: { key: 'tableStates', value: savedStates } }));
            }

            
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
  function listenToButtonClick(buttonElement) { // Takes the element directly
    const buttonId = buttonElement.dataset.navigation;
    sendMessage(JSON.stringify({ type: 'NAVIGATION', data: buttonId }));
  }
`;

const listenToPopupButtonClicks = `
function listenToPopupButtonClicks(buttonElement) { 
  const buttonId = buttonElement.dataset.message; // Get the 'message' attribute

  try {
    sendMessage(JSON.stringify({ type: 'POPUP', data: buttonId }));
  } catch (error) {
    console.error("Invalid JSON format in data-message:", error);
  }
}

function listenToImagePopupButtonClicks(buttonElement) { 
  const buttonId = buttonElement.dataset.message; // Get the 'message' attribute

  try {
    sendMessage(JSON.stringify({ type: 'IMAGEPOPUP', data: buttonId }));
  } catch (error) {
    console.error("Invalid JSON format in data-message:", error);
  }
}

function listenToAudioPopupButtonClicks(buttonElement) {
  const buttonId = buttonElement.dataset.message; // Get the 'message' attribute

  try {
    sendMessage(JSON.stringify({ type: 'AUDIOPOPUP', data: buttonId }));
  } catch (error) {
    console.error("Invalid JSON format in data-message:", error);
  }
}

`;

const bookNavigationButtons = `
function listenToBookNavigationButtons(element) {
      const tableId = element.dataset.navigation; // Get current tableId from data attribute

      const currentTable = document.getElementById(tableId); // Get the current table by its id
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
  initialize , dynamicTableClasses , handleTouchNavigation , arabicNumbers , disableScrolling , extractTableTitlesAndIds , 
  sendMessage , setOverlays , clearOverlays, adjustOverlay , adjustOverlayGlorification , paginateTables , 
 showBlackScreen , removeBlackScreen , tableToggle , listenToButtonClicks , listenToPopupButtonClicks ,
  handleSpinner , bookNavigationButtons , loadStoredSettings};
