/** @format */

export const handleMessage = (
  event,
  setDrawerItems,
  pageOffsets,
  setPageOffsets,
  setCurrentPage,
  setCurrentTable,
  webviewRef,
  navigation,
  localStorage
) => {
  try {
    const message = JSON.parse(event.nativeEvent.data);
    webviewRef.current.injectJavaScript(
      `window.postMessage(JSON.stringify({ type: 'ACKNOWLEDGED' }));`
    );

    if (message.type === "TABLES_INFO") {
      setDrawerItems(message.data);
    } else if (message.type === "PAGINATION_DATA") {
      setPageOffsets(message.data);
    } else if (message.type === "NAVIGATION") {
      navigation.navigate(message.data);
    } else if (message.type === "TABLE_NAVIGATION") {
      const tableYOffset = message.data;
      // Find the y-offset that is less than or equal to the tableYOffset
      const pageIndex = pageOffsets.reduce((highestIndex, offset, index) => {
        // Check if current offset is less than or equal to tableYOffset
        if (offset.yOffset <= tableYOffset + 3) {
          // If highestIndex is -1 or the current offset is greater than the one at highestIndex, update highestIndex
          if (
            highestIndex === -1 ||
            offset.yOffset > pageOffsets[highestIndex].yOffset
          ) {
            return index;
          }
        }
        return highestIndex;
      }, -1);

      setCurrentPage(pageIndex);
      setCurrentTable(pageOffsets[pageIndex].tableId);

      const yOffset = pageOffsets[pageIndex].yOffset;
      const nextVisibleElementId = pageOffsets[pageIndex].firstVisibleElementId;
      webviewRef.current.injectJavaScript(
        `adjustOverlay('${nextVisibleElementId}');`
      );

      // Inject JavaScript to display a black screen overlay
      webviewRef.current.injectJavaScript(`
          (function() {
              const existingOverlay = document.getElementById('blackScreenOverlay');
              if (!existingOverlay) {
                  const overlay = document.createElement('div');
                  overlay.id = 'blackScreenOverlay';
                  overlay.style.position = 'fixed';
                  overlay.style.top = 0;
                  overlay.style.left = 0;
                  overlay.style.width = '100%';
                  overlay.style.height = '100%';
                  overlay.style.backgroundColor = 'black';
                  overlay.style.zIndex = 9999;
                  document.body.appendChild(overlay);
              }
          })();
      `);

      // Add a delay before executing the scroll and overlay removal
      setTimeout(() => {
        // Scroll to the new position
        webviewRef.current.injectJavaScript(`clearOverlays();`);
        webviewRef.current.injectJavaScript(
          `adjustOverlay('${nextVisibleElementId}');`
        );
        webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);

        // Inject JavaScript to remove the black screen overlay after the scroll
        webviewRef.current.injectJavaScript(`
              (function() {
                  const overlay = document.getElementById('blackScreenOverlay');
                  if (overlay) {
                      overlay.remove();
                  }
              })();
          `);
      }, 25); // Delay the scroll and removal of the overlay by 500 milliseconds
    }
    //set current page after right menu navigation
    else if (message.type === "CURRENT_PAGE_YOFFSET") {
      const yOffset = message.data;
      const pageIndex = pageOffsets.findIndex(
        (offset) => offset.yOffset >= yOffset
      );
      var currentPage = pageIndex;
      if (pageOffsets[pageIndex].yOffset === yOffset) {
        setCurrentPage(pageIndex);
        setCurrentTable(pageOffsets[pageIndex].tableId);
      } else if (pageOffsets[pageIndex].yOffset > yOffset) {
        setCurrentPage(pageIndex);
        setCurrentTable(pageOffsets[pageIndex].tableId);
      } else {
        setCurrentPage(pageIndex + 1);
        currentPage = pageIndex + 1;
        setCurrentTable(pageOffsets[pageIndex].tableId);
      }
      const nextVisibleElementId =
        pageOffsets[currentPage].firstVisibleElementId;
      webviewRef.current.injectJavaScript(
        `adjustOverlay('${nextVisibleElementId}');`
      );
    } else if (message.type === "TABLE_TOGGLE") {
      handleDrawerItemPress(message.data, webviewRef);
    } else if (message.type === "setStoredItem") {
      try {
        localStorage.setItem(message.data.key, message.data.value);
      } catch (error) {
        console.error("Error setting item:", error);
      }

      
    } else {
      console.log("message:", message.type, message.data);
    }

    // After processing, send an acknowledgment back to WebView
  } catch (error) {
    console.error("Failed to parse message from WebView:", error);
  }
};

// handleNext
export const handleNext = (
  currentPage,
  setCurrentPage,
  pageOffsets,
  setCurrentTable,
  webviewRef
) => {
  if (currentPage < pageOffsets.length - 1) {
    // Update the current page and table
    setCurrentPage((prevPage) => prevPage + 1);
    setCurrentTable(pageOffsets[currentPage + 1].tableId);

    const yOffset = pageOffsets[currentPage + 1].yOffset;
    const nextVisibleElementId =
      pageOffsets[currentPage + 1].firstVisibleElementId;

    webviewRef.current.injectJavaScript(`showBlackScreen();`);
    // Add a delay before executing the scroll and overlay removal
    setTimeout(() => {
      // Scroll to the new position
      webviewRef.current.injectJavaScript(`clearOverlays();`);
      webviewRef.current.injectJavaScript(
        `adjustOverlay('${nextVisibleElementId}');`
      );
      webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);

      // Inject JavaScript to remove the black screen overlay after the scroll
      webviewRef.current.injectJavaScript(`removeBlackScreen();`);
    }, 25); // Delay the scroll and removal of the overlay by 500 milliseconds
  }
};

// handlePrevious
export const handlePrevious = (
  currentPage,
  setCurrentPage,
  pageOffsets,
  setCurrentTable,
  webviewRef
) => {
  if (currentPage > 0) {
    // Update the current page and table
    setCurrentPage((prevPage) => prevPage - 1);

    // Safely set the previous table if available
    if (pageOffsets[currentPage - 2]) {
      setCurrentTable(pageOffsets[currentPage - 2].tableId);
    }

    const yOffset = pageOffsets[currentPage - 1].yOffset;
    const nextVisibleElementId =
    pageOffsets[currentPage - 1].firstVisibleElementId;

    // Inject JavaScript to display a black screen overlay
    webviewRef.current.injectJavaScript(`showBlackScreen();`);

    // Add a delay before executing the scroll and overlay removal
    setTimeout(() => {
      // Scroll to the previous position
      webviewRef.current.injectJavaScript(`clearOverlays();`);
      webviewRef.current.injectJavaScript(`adjustOverlay('${nextVisibleElementId}');`);
      webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);

      // Inject JavaScript to remove the black screen overlay after the scroll
      webviewRef.current.injectJavaScript(`removeBlackScreen();`);
    }, 25); // Delay the scroll and removal of the overlay by 500 milliseconds
  }
};

// handleDrawerItemPress
export const handleDrawerItemPress = (tableId, webviewRef) => {
  const scrollToTableScript = `
        var goToTableElement = document.getElementById('${tableId}');
        var tableYOffset = goToTableElement ? goToTableElement.getBoundingClientRect().top + window.scrollY : 0;

        sendMessage(JSON.stringify({ type: 'TABLE_NAVIGATION', data: tableYOffset }));

      
    `;
  webviewRef.current.injectJavaScript(scrollToTableScript);
};

// getHtml
export const getHtml = (dynamicStyles, body, script) => {
  const html = `
    
    <html>
    <head>
    <title>Day of Palm Sunday</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <style>
    ${dynamicStyles}
    </style>
    <script type="text/javascript">
    ${script}
    </script>
    </head>
    
    <body>
    ${body}
    </body>
    </html>`;
  return html;
};
