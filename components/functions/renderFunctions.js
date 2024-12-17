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
  localStorage,
  setLoading,
  setFirstTable
) => {
  try {
    const message = JSON.parse(event.nativeEvent.data);

    if (message.type === 'READY') {
      console.log('WebView is ready.');
    }
    // Acknowledge message receipt
    webviewRef.current.injectJavaScript(
      `window.postMessage(JSON.stringify({ type: 'ACKNOWLEDGED', originalType: '${message.type}' }));`
    );

    // Helper functions for common tasks
    const injectScript = (script) => {
      webviewRef.current.injectJavaScript(script);
    };

    const scrollToYOffset = (yOffset, nextVisibleElementId) => {
      injectScript(`clearOverlays();`);
      injectScript(`adjustOverlay('${nextVisibleElementId}');`);
      injectScript(`window.scrollTo(0, ${yOffset});`);
    };

    const showOverlay = () => {
      injectScript(`
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
    };

    const removeOverlay = () => {
      injectScript(`
        (function() {
          const overlay = document.getElementById('blackScreenOverlay');
          if (overlay) {
              overlay.remove();
          }
        })();
      `);
    };

    // Message handlers
    const handlers = {
      TABLES_INFO: () => {
        setDrawerItems(message.data)
        setFirstTable(message.data[0].id);
      },
      PAGINATION_DATA: () => setPageOffsets(message.data),
      LOADING: () => {
        setLoading(message.data);
      },
      NAVIGATION: () => navigation.navigate(message.data),
      // OPEN RIGHT DRAWER
      RIGHT_SWIPE: () => { 
        navigation.openDrawer() 
      },
      // OPEN LEFT DRAWER
      LEFT_SWIPE: () => {
        navigation.getParent().openDrawer()
      },
      // HANDLE NEXT
      TABLE_NAVIGATION: () => {
        const tableYOffset = message.data;

        // Find the closest yOffset index
        const pageIndex = pageOffsets.reduce((highestIndex, offset, index) => {
          if (offset.yOffset <= tableYOffset + 3) {
            if (
              highestIndex === -1 ||
              offset.yOffset > pageOffsets[highestIndex].yOffset
            ) {
              return index;
            }
          }
          return highestIndex;
        }, -1);

        if (pageIndex === -1) {
          console.warn("No valid pageIndex found for TABLE_NAVIGATION.");
          return;
        }

        setCurrentPage(pageIndex);
        setCurrentTable(pageOffsets[pageIndex].tableId);

        const yOffset = pageOffsets[pageIndex].yOffset;
        const nextVisibleElementId = pageOffsets[pageIndex].firstVisibleElementId;

        // Show overlay and scroll
        showOverlay();
        setTimeout(() => {
          scrollToYOffset(yOffset, nextVisibleElementId);
          removeOverlay();
        }, 25);
      },
      CURRENT_PAGE_YOFFSET: () => {
        const yOffset = message.data;
        const pageIndex = pageOffsets.findIndex(
          (offset) => offset.yOffset >= yOffset
        );

        if (pageIndex === -1) {
          console.warn("No valid pageIndex found for CURRENT_PAGE_YOFFSET.");
          return;
        }

        setCurrentPage(pageIndex);
        setCurrentTable(pageOffsets[pageIndex].tableId);

        const nextVisibleElementId = pageOffsets[pageIndex].firstVisibleElementId;
        injectScript(`adjustOverlay('${nextVisibleElementId}');`);
      },
      TABLE_TOGGLE: () => {
        handleDrawerItemPress(message.data, webviewRef);
      },
      setStoredItem: () => {
        try {
          localStorage.setItem(message.data.key, message.data.value);
        } catch (error) {
          console.error("Error setting item:", error);
        }
      },
    };

    // Execute the appropriate handler
    if (handlers[message.type]) {
      handlers[message.type]();
    } else {
      console.log("Unhandled message:", message.type, message.data);
    }
  } catch (error) {
    console.error("Failed to parse message from WebView:", error, event.nativeEvent.data);
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
  const captionId = `caption_${tableId}`;
  const scrollToTableScript = `
        var goToCaptionElement = document.getElementById('${captionId}');
        var goToTableElement = goToCaptionElement || document.getElementById('${tableId}');
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
