

export const handleMessage = (event, setDrawerItems, pageOffsets, setPageOffsets, setCurrentPage, setCurrentTable, webviewRef) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      webviewRef.current.injectJavaScript(`window.postMessage(JSON.stringify({ type: 'ACKNOWLEDGED' }));`);

      if (message.type === 'TABLES_INFO') {
        setDrawerItems(message.data);
      }
      else if (message.type === 'PAGINATION_DATA') {
        setPageOffsets(message.data);
        //console.log("pageOffsets:", pageOffsets);
      }
      //set current page after right menu navigation
      else if (message.type === 'CURRENT_PAGE_YOFFSET') {
        const yOffset = message.data;
        const pageIndex = pageOffsets.findIndex(offset => ((offset.yOffset >= yOffset)));
        if (pageOffsets[pageIndex].yOffset === yOffset) {
        setCurrentPage(pageIndex);
        setCurrentTable(pageOffsets[pageIndex].tableId);
        } else if (pageOffsets[pageIndex].yOffset > yOffset){
          setCurrentPage(pageIndex);
          setCurrentTable(pageOffsets[pageIndex].tableId);
        }
        else {
          setCurrentPage(pageIndex+1);
          setCurrentTable(pageOffsets[pageIndex].tableId);
        }
      }
      else{
        console.log("message:", message.type , message.data);
      }

        // After processing, send an acknowledgment back to WebView

    } catch (error) {
      console.error('Failed to parse message from WebView:', error);
    }

  };

// handleNext
export const handleNext = (currentPage, setCurrentPage , pageOffsets, setCurrentTable, webviewRef) => {
    
    if (currentPage < pageOffsets.length - 1) {
        console.log("currentPage in if:", currentPage);
        setCurrentPage(prevPage => prevPage + 1);
        setCurrentTable(pageOffsets[currentPage + 1].tableId);
        const yOffset = pageOffsets[currentPage + 1].yOffset;
        webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);
        webviewRef.current.injectJavaScript(`adjustOverlay()`);

    }
};

// handlePrevious
export const handlePrevious = (currentPage, setCurrentPage , pageOffsets, setCurrentTable, webviewRef) => {
    if (currentPage > 0) {

        setCurrentPage(prevPage => prevPage - 1);        
          if(pageOffsets[currentPage-2]){
            setCurrentTable(pageOffsets[currentPage-2].tableId);
          }
        const yOffset = pageOffsets[currentPage - 1].yOffset;
        webviewRef.current.injectJavaScript(`window.scrollTo(0, ${yOffset});`);
        webviewRef.current.injectJavaScript(`clearOverlays()`);
        webviewRef.current.injectJavaScript(`adjustOverlay()`);

    }
};

// handleDrawerItemPress
export const handleDrawerItemPress = (tableId , webviewRef) => {
    const scrollToTableScript = `
      var goToTableElement = document.getElementById('${tableId}');
      var yOffset = goToTableElement ? goToTableElement.getBoundingClientRect().top + window.scrollY : 0;
      goToTableElement.scrollIntoView();
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'CURRENT_PAGE_YOFFSET', data: yOffset }));


      clearOverlays();
      adjustOverlay();
    `;
    webviewRef.current.injectJavaScript(scrollToTableScript);
  };

  // getHtml
  export const getHtml = (dynamicStyles , body , script) => {

    const html =`
    
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

    

