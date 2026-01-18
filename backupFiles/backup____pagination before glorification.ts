// Pagination
const paginateTables =
`function paginateTables() {
  const viewportHeight = window.innerHeight - 2;
  let pages = [];
  let currentPage = [];
  let currentPageHeight = 0;
  let sectionsDisplayed = [];
  let pagesPerRow = [];
  pagesPerRow.push(1);
  let tableId = "table_0";

  // Query all sections in the document
  document.querySelectorAll(".section").forEach((section) => {
    //SendMessage(JSON.stringify({type: 'debug', data: '****************section id: '+ section.getAttribute("id")}));
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
        


      // query all tables in the section
      section.querySelectorAll("table").forEach((table) => {
        //SendMessage(JSON.stringify({type: 'debug', data: 'table id at beginning of table for each: '+ table.getAttribute("id")}));
        tableId = table.getAttribute("id");

        // check if the table fits in the remaining space of the current page
        if (currentPageHeight + table.clientHeight < viewportHeight) {
          currentPage.push(tableId);
          currentPageHeight += table.clientHeight;
        } else {
          // check if current page is not empty
          if (currentPage.length) {
              pages.push({
                currentPage: currentPage[0],
                pagesPerRow: pagesPerRow[pagesPerRow.length - 1],
                tableId: tableId,
                test: 'tablet too big, starting new page',
                firstVisibleElementId: tableId,
              });
              currentPage = [];
              currentPageHeight = 0;
          }




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
