
export const htmlRenderScript = `



var startX, startY;
window.startingRows = window.startingRows || [];
var largeRowScrollPosition = 0;
var lastVisibleRow = 0;
window.onload = function() {
    adjustOverlay();
}

/*function createOverlay(height, top) {
    var overlay = document.getElementById('overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
    }
    overlay.style.height = height + 'px';
    overlay.style.top = top + 'px'; // Set the top value for the overlay
    overlay.style.position = 'fixed';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'block'; // Ensure it is visible
}

function hideOverlay() {
    var overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'none'; // Hide the overlay
    }
}
*/
document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
}, false);
document.addEventListener('touchend', function(e) {
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;
    // First, always check for a plus sign tap.
    if (checkForPlusSignClick(endX, endY)) {
        // Plus sign was tapped, do nothing else.
        return;
    }
    // It is a tap, not a swipe.
    if (Math.abs(startX - endX) < 10 && Math.abs(startY - endY) < 10) {
        if (endX < window.innerWidth / 2) {
            // Left side tapped
            scrollToPreviousRow();
        } else if (endX > window.innerWidth / 2) {
            // Right side tapped
            scrollToNextRow();
        }
    }
}, false);

function checkForPlusSignClick(x, y) {
    var plusSigns = document.querySelectorAll('.toggle');
    var wasPlusSignClicked = false;
    plusSigns.forEach(function(plusSign) {
        var boundingBox = plusSign.getBoundingClientRect();
        if (x >= boundingBox.left && x <= boundingBox.right && y >= boundingBox.top && y <= boundingBox
            .bottom) {
            toggleTable(plusSign.dataset.tableId);
            wasPlusSignClicked = true;
        }
    });
    return wasPlusSignClicked;
}

function scrollToNextRow() {
    clearOverlays();
    var rows = Array.from(document.querySelectorAll('tr[id^="table_"]'));
    if (rows.length === 0) {
        return; // Exit function if there are no rows
    }
    let firstPartiallyVisibleRow = null;
    let rowRect = null; // Initialize rowRect outside of the loop
    for (let i = 0; i < rows.length; i++) {
        let rowRect = rows[i].getBoundingClientRect(); // Update rowRect within the loop
       
        // Initialize it outside of your function as zero or null
        if (i === startingRows[startingRows.length - 1] && rowRect.bottom > window.innerHeight) {
            // This check determines if you are on a row that doesn't fit on the screen
            window.ReactNativeWebView.postMessage(JSON.stringify({key: 'Large Row DETECTED:  :', value: largeRowScrollPosition})); // Send the rowRect.bottom value to React Native
            clearOverlays();
                // Get a reference to your scroll container
                let rowIdComponents = rows[i].id.split("_");
                let tableId = 'table_' + rowIdComponents[1];

                window.scrollBy(0, window.innerHeight);
                let rowRect = rows[i].getBoundingClientRect(); // Update rowRect within the loop
                if (rowRect.bottom > window.innerHeight) {
                    clearOverlays();
                } else
                {      
                   // handle the cutoff row 
                    window.startingRows.push(i); // Push the current row index to the startingRows array

                    adjustOverlay();
                
                }
                return;

        }
        // For other cases (not the large first row)
        if (rowRect.top < window.innerHeight && rowRect.bottom > window.innerHeight) {
            firstPartiallyVisibleRow = i;
            break;
        }
    }
    if (firstPartiallyVisibleRow !== null) {
        window.startingRows.push(firstPartiallyVisibleRow);
        lastVisibleRow = firstPartiallyVisibleRow;
        rows[firstPartiallyVisibleRow].scrollIntoView(true);
        let rowRect = rows[firstPartiallyVisibleRow].getBoundingClientRect(); // Update rowRect within the loop
        if (rowRect.bottom > window.innerHeight) {
            clearOverlays();
        } else
        {                
            adjustOverlay();
        
        }
    }
}
function adjustOverlay() {
    clearOverlays();
    var rows = Array.from(document.querySelectorAll('tr[id^="table_"]'));
    var overlayVisible = false;
    for (let i = 0; i < rows.length; i++) {
        let rowRect = rows[i].getBoundingClientRect();
        // Check if the row is partially visible
        if (rowRect.top < window.innerHeight && rowRect.bottom > window.innerHeight) {
            //var dynamicHeight = window.innerHeight - rowRect.top; // This should cover the space from the row top to viewport bottom
            //createOverlay(dynamicHeight, rowRect.top);
            // Get the tableId and rowId from the first partially visible row
            let rowIdComponents = rows[i].id.split("_");
            window.ReactNativeWebView.postMessage(JSON.stringify({
                key: 'ADJUST rowIdComponents in:  :',
                value: rowIdComponents
            }));
            let tableId = rowIdComponents[1];
    
            let rowId = rowIdComponents[3];
        

            // Pass both tableId and rowId to the setOverlayOnRow function
            setOverlayOnRow(tableId, rowId);
            overlayVisible = true;
            break;
        }
    }
    if (!overlayVisible) {
        // If no partially visible row is found, hide the overlay
        hideOverlay();
    }
}

function setOverlayOnRow(tableId, rowId) {
    window.ReactNativeWebView.postMessage(JSON.stringify([{key: 'SETOVERLAY TableId:  :', value: tableId},{ key: 'RowId:  :', value: rowId}]));
    var row = document.getElementById('table_' + tableId + '_row_' + rowId);
    window.ReactNativeWebView.postMessage(JSON.stringify({key: 'row:  :', value: row}));
    if (row) {

        var tds = row.querySelectorAll('td');
        tds.forEach((td, index) => {
            var tdRect = td.getBoundingClientRect();
            var overlay = document.createElement('div');
            overlay.id = 'overlay_' + tableId + '_row_' + rowId + '_td_' + index;
            overlay.style.position = 'absolute';
            overlay.style.top = (window.scrollY + tdRect.top) + 'px';
            overlay.style.left = tdRect.left + 'px';
            overlay.style.width = tdRect.width + 'px';
            overlay.style.height = tdRect.height + 'px';
            overlay.style.backgroundColor = 'black'; // Adjust as needed
            document.body.appendChild(overlay);
        });
            

    }
}

function clearOverlays() {
    var overlays = document.querySelectorAll('div[id^="overlay_"]');
    overlays.forEach((overlay) => {
        overlay.parentNode.removeChild(overlay);
    });
}


function scrollToPreviousRow() {
    largeRowScrollPosition = 0;
    var rows = Array.from(document.querySelectorAll('tr[id^="table_"]'));
    window.startingRows.pop();
    var lastStartRow = window.startingRows[window.startingRows.length - 1];
    if (typeof lastStartRow !== 'undefined') {
        rows[lastStartRow].scrollIntoView(true);
    } else {
        // If the lastStartRow is undefined, find the table title associated with the first row
        var firstRow = document.querySelector('tr[id$="row_0"]'); // select the first row
        if (firstRow) {
            // Get the table id from the first row id
            var tableId = firstRow.id.split('_')[1];
            // Construct the toggle id
            var toggleId = "toggle_table_" + tableId;
            var tableTitle = document.getElementById(toggleId);
            if (tableTitle) {
                tableTitle.scrollIntoView(true);
            } else {
                // Fallback: if no title found, scroll to the first row
                firstRow.scrollIntoView(true);
            }
        }
    }
    adjustOverlay();
}

function toggleTable(tableId, toggleElement) {
    var table = document.getElementById(tableId);
    var title = toggleElement.getAttribute('data-title'); // Getting the title from data-attribute
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; // or use 'block' or whatever default you prefer
        toggleElement.textContent = "- " + title; // Update the text content with the title
    } else {
        table.style.display = "none";
        toggleElement.textContent = "+ " + title; // Update the text content with the title
    }
}
`

