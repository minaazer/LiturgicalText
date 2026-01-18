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
  setFirstTable,
  setPopupVisible,
  setPopupData,
  explanationsData,
  setImagePopupVisible,
  setImageUri,
  imagesData,
  togglePopupAudio,
  stopPopupAudio,
  setIsAudioPaused,
  setCurrentAudioTitle,
  setAudioPopupVisible,
  displayMode
) => {
  try {
    const message = JSON.parse(event.nativeEvent.data);
    const isScrollMode = displayMode === "scroll";

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
      if (isScrollMode) {
        injectScript(`window.scrollTo(0, ${yOffset});`);
        return;
      }
      injectScript(`clearOverlays();`);
      injectScript(`adjustOverlay('${nextVisibleElementId}');`);
      injectScript(`window.scrollTo(0, ${yOffset});`);
    };

    const showOverlay = () => {
      if (isScrollMode) return;
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
      if (isScrollMode) return;
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
        if (!Array.isArray(message.data) || message.data.length === 0) {
          setDrawerItems([]);
          return;
        }
        setDrawerItems(message.data)
        setFirstTable(message.data[0].id);
      },
      POPUP: () => {
        try {
            if (!message.data) {
                console.error("No message content found in POPUP data.");
                return;
            }
    
            const hymnTitle = message.data; // The title of the hymn is sent.
            const explanation = explanationsData.find(exp => exp.title === hymnTitle);
            

            if (explanation) {
              setPopupData(explanation);
              setPopupVisible(true);
              setImagePopupVisible(false);
            } else {
              console.error("Explanation not found for title:", hymnTitle)
            }

            setPopupVisible(true);
        } catch (error) {
            console.error("Failed to handle POPUP message:", error, message.data);
        }
      },
      IMAGEPOPUP: () => {
        try {
            
            if (!message.data) {
                console.error("No message content found in POPUP data.");
                return;
            }
    
            const hymnTitle = message.data; // The title of the hymn is sent.
            const image = imagesData.find(exp => exp.title === hymnTitle);
            

            if (image) {
              setImageUri(image.uri);
              setPopupData(null);
              setPopupVisible(false);
              setImagePopupVisible(true);
            } else {
              console.error("Explanation not found for title:", hymnTitle)
            }

            setPopupVisible(true);
        } catch (error) {
            console.error("Failed to handle POPUP message:", error, message.data);
        }
      },
      AUDIOPOPUP: () => {
        try {
            
            if (!message.data) {
                console.error("No message content found in POPUP data.");
                return;
            }
    
            const fileName = message.data; // The title of the hymn is sent.
            

            if (fileName) {
                stopPopupAudio();
                togglePopupAudio(fileName, setIsAudioPaused);
                setCurrentAudioTitle(fileName);
                setAudioPopupVisible(true);
            } else {
              console.error("Explanation not found for title:", fileName)
            }

        } catch (error) {
            console.error("Failed to handle POPUP message:", error, message.data);
        }
      },
      PAGINATION_DATA: () => setPageOffsets(message.data),
      LOADING: () => {
        setLoading(message.data);
      },
      NAVIGATION: () => {
        console.log('Message data:', message);
        const parsedData = typeof message.data === 'string' ? JSON.parse(message.data) : message.data;
        console.log('Parsed data:', parsedData);
        if (parsedData.destination) {
          console.log ('Parsed data destination:', parsedData.serviceName, parsedData.hourName);
            // Correctly navigate to the destination and pass `source` as a parameter
            navigation.navigate(parsedData.destination , { source: parsedData.source });
        } else if ('screen' in parsedData) {
          console.log ('Parsed data screen:', parsedData.serviceName, parsedData.hourName, parsedData.screen);
          //navigation.navigate(parsedData.screen, { serviceName: parsedData.serviceName, hourName: parsedData.hourName });
          navigation.navigate(`${parsedData.serviceName.replace(/\s+/g, "-")}-${parsedData.hourName.replace(/\s+/g, "-")}`, {
            serviceName: parsedData.serviceName,
            hourName: parsedData.hourName,
        })
        } else {
            navigation.navigate(message.data);
        }
      },
    
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
        const payload = message.data;
        const tableYOffset =
          typeof payload === "number" ? payload : payload?.yOffset;
        const targetTableId =
          typeof payload === "object" ? payload?.tableId : null;
        if (typeof tableYOffset !== "number") {
          return;
        }

        if (isScrollMode) {
          scrollToYOffset(tableYOffset);
          if (targetTableId) {
            setCurrentTable(targetTableId);
          }
          return;
        }

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
      // HANDLE VERSE NAVIGATION
      ROW_NAVIGATION: () => {
        const rowYOffset = message.data;
        if (isScrollMode) {
          scrollToYOffset(rowYOffset);
          return;
        }
        const pageIndex = pageOffsets.findIndex(
          (offset) => offset.yOffset > rowYOffset
        );
        const rowIndex = pageIndex === -1 ? pageOffsets.length - 1 : pageIndex - 1;
        setCurrentPage(rowIndex);
        setCurrentTable(pageOffsets[rowIndex].tableId);

        const yOffset = pageOffsets[rowIndex].yOffset;
        const nextVisibleElementId = pageOffsets[rowIndex].firstVisibleElementId;
        console.log("nextVisibleElementId", nextVisibleElementId);
        injectScript(`clearOverlays();`);
        injectScript(`adjustOverlay('${nextVisibleElementId}');`);
        injectScript(`window.scrollTo(0, ${yOffset});`);
      },
      CURRENT_PAGE_YOFFSET: () => {
        const yOffset = message.data;
        if (isScrollMode) {
          return;
        }
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
  webviewRef,
  isScrollMode = false
) => {
  if (isScrollMode) return;
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
  webviewRef,
  isScrollMode = false
) => {
  if (isScrollMode) return;
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

export const handleDrawerItemPress = (tableId, webviewRef, row) => {
  if (row) {
    const verseRowId = `table_0_row_${tableId}`; // The ID of the verse row
    const verseYOffset = `
          var goToElement = document.getElementById('${verseRowId}');
          var yOffset = goToElement ? goToElement.getBoundingClientRect().top + window.scrollY : 0;
          sendMessage(JSON.stringify({ type: 'ROW_NAVIGATION', data: yOffset }));
    `;
    webviewRef.current.injectJavaScript(verseYOffset);
  } else {
    const captionId = `caption_${tableId}`;
    const scrollToTableScript = `
          var goToCaptionElement = document.getElementById('${captionId}');
          var captionDisplay = goToCaptionElement ? goToCaptionElement.style.display : 'none';
          goToCaptionElement = goToCaptionElement && captionDisplay !== 'none' ? goToCaptionElement : null;
          var goToTableElement = goToCaptionElement || document.getElementById('${tableId}');
          var tableYOffset = goToTableElement ? goToTableElement.getBoundingClientRect().top + window.scrollY : 0;

          if (window._scrollMode) {
            window.scrollTo(0, tableYOffset);
          }
          sendMessage(JSON.stringify({ type: 'TABLE_NAVIGATION', data: { yOffset: tableYOffset, tableId: '${tableId}' } }));
      `;
    webviewRef.current.injectJavaScript(scrollToTableScript);
  }
};

// getHtml
export const getHtml = (dynamicStyles, body, script, rtl = false) => {
  const html = `
    
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <style>
    ${dynamicStyles}
    ${rtl ? "body { direction: rtl; text-align: right; }" : ""}
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
