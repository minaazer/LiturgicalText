import { Platform } from 'react-native'

const fontUrl = Platform.select({
    ios: "ArialCoptic.ttf",
    android: "file:///android_asset/fonts/ArialCoptic.ttf",
});

const fontUrl2 = Platform.select({
    ios: "./ArialCoptic.woff",
    android: "file:///android_asset/fonts/ArialCoptic.woff",
});


export const html = `<html>

<head>
    <title>Extracted Tables</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        html {
            background-color: black;
        }

        @font-face {
            font-family: "Arial Coptic";
            src: 
                url("${fontUrl}") format("woff2"),
                url("${fontUrl2}") format("woff"),
                url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/ArialCoptic.ttf") format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "EB Garamond";
            src: 
            url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/EBGaramond.woff2") format('woff2'),
            url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/EBGaramond.woff") format('woff'),
            url("https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/EBGaramond.ttf") format('truetype');
            font-weight: normal;
            font-style: normal;
        }
        table {
        page-break-before: always; /* Use for older browsers */
        break-before: page; /* Modern browsers */
        }

        /* Handle first table to avoid first-page break */
        table:first-of-type {
        page-break-before: auto;
        break-before: auto;
        }


        body {
            // overflow: hidden;
            color: white;
            font-size: 26px;

        }

        .arabic {
            text-align: right;
            direction: rtl;
            font-size: 30px;
            vertical-align: top ;
            padding-bottom: 10px;
            width:28%;
        }

        .coptic {
            font-size: 30px;
            vertical-align: top ;
            font-family: 'Arial Coptic' !important;
        }
        .english {
            font-size: 30px;
            vertical-align: top ;
            font-family: 'EB Garamond' !important;
        }

    </style>
    <script type="text/javascript">


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
    </script>
</head>

<body>
    <span class="toggle" id="toggle_table_0" data-title="Your Table Title Here" onclick="toggleTable('table_0', this)">+
        Your Table Title Here</span>
    <table id="table_0" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_0_row_0">
            <td class="english" style="border-right: 1px solid black;">Arise, O children of the Light: let us praise the
                Lord of hosts.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛ ⲑⲏⲛⲟⲩ ̀ⲉ̀ⲡϣⲱⲓ ⲛⲓϣⲏⲣⲓ ̀ⲛⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ ̀ⲛⲧⲉⲛϩⲱⲥ
                ̀ⲉⲠϭⲟⲓⲥ ̀ⲛⲧⲉ ⲛⲓϫⲟⲙ.</td>
            <td class="arabic">قوموا يا بنى النور لنسبح رب القوات.</td>
        </tr>
        <tr id="table_0_row_1">
            <td class="english" style="border-right: 1px solid black;">That He may grant us the salvation of our souls.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲟⲡⲱⲥ ̀ⲛⲧⲉϥⲉⲣ̀ϩⲙⲟⲧ ⲛⲁⲛ ̀ⲙ̀ⲡⲥⲱϯ ̀ⲛⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">لكى ينعم لنا بخلاص نفوسنا</td>
        </tr>
        <tr id="table_0_row_2">
            <td class="english" style="border-right: 1px solid black;">Whenever we stand before You in the flesh.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ̀ⲡϫⲓⲛ̀ⲑⲣⲉⲛ̀ⲟϩⲓ ̀ⲉⲣⲁⲧⲉⲛ ̀ⲙⲡⲉⲕ̀ⲙⲑⲟ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ.
            </td>
            <td class="arabic">عندما نقف أمامك جسدياً .</td>
        </tr>
        <tr id="table_0_row_3">
            <td class="english" style="border-right: 1px solid black;">Cast away from our minds the slumber of sleep.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">˙Ⲁⲗⲓⲟⲩ̀ⲓ ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲉⲛⲛⲟⲩⲥ ̀ⲙⲡⲓϩⲩⲛⲓⲙ ̀ⲛⲧⲉ ϯⲉⲃϣⲓ.
            </td>
            <td class="arabic">إنزع عن عقولنا نوم الغفلة.</td>
        </tr>
        <tr id="table_0_row_4">
            <td class="english" style="border-right: 1px solid black;">Grant us sobriety, O Lord, that we may know how to
                stand before You at times of prayer.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲟⲓ ⲛⲁⲛ Ⲡϭⲟⲓⲥ ̀ⲛⲟⲩⲙⲉⲧⲣⲉϥⲉⲣⲛⲩⲙⲫⲓⲛ : ϩⲟⲡⲱⲥ
                ̀ⲛⲧⲉⲛⲕⲁϯ ̀ⲛⲧⲉⲛ̀ⲟϩⲓ ̀ⲉⲣⲁⲧⲉⲛ ̀ⲙⲡⲉⲕ̀ⲙⲑⲟ ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛⲧⲉ ϯ̀ⲡⲣⲟⲥⲉⲩⲭⲏ.</td>
            <td class="arabic">أعطنا يا رب يقظة لكى نفهم أن نقف أمامك وقت الصلاة.</td>
        </tr>
        <tr id="table_0_row_5">
            <td class="english" style="border-right: 1px solid black;">And ascribe unto You the befitting glorification,
                and win the forgiveness of our many sins: Glory be to You, O Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ̀ⲛⲧⲉⲟⲩⲱⲣⲡ ⲛⲁⲕ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲛϯⲇⲟⲝⲟⲗⲟⲅⲓ̀ⲁ
                ̀ⲉⲧⲉⲣ̀ⲡⲣⲉⲡⲓ : ⲟⲩⲟϩ ̀ⲛⲧⲉⲛϣⲁϣⲛⲓ ̀ⲉ̀ⲡⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ ⲉⲧⲟϣ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">ونرسل لك إلى فوق التمجيد اللائق . ونفوز بغفران خطايانا الكثيرة . المجد لك يامحب البشر
            </td>
        </tr>
        <tr id="table_0_row_6">
            <td class="english" style="border-right: 1px solid black;">Behold bless the Lord, O you servants of the Lord:
                Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲏⲡⲡⲉ ⲇⲉ ̀ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲛⲓ̀ⲉⲃⲓⲁⲓⲕ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ:
                ⲇⲟ̅...</td>
            <td class="arabic">ها باركوا الرب ياعبيد الرب . المجد ..</td>
        </tr>
        <tr id="table_0_row_7">
            <td class="english" style="border-right: 1px solid black;">You who stand in the house of the Lord, in the
                courts of the house of our God: Glory be to You, O Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲏⲉⲧ̀ⲟϩⲓ ̀ⲉⲣⲁⲧⲟⲩ ϧⲉⲛ ̀ⲡⲏⲓ ̀ⲙⲠϭⲟⲓⲥ : ϧⲉⲛ ⲛⲓⲁⲩⲗⲏⲟⲩ
                ̀ⲛⲧⲉ ̀ⲡⲏⲓ ̀ⲙⲠⲉⲛⲛⲟⲩϯ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">القائمين فى بيت الرب. فى ديار بيت إلهنا . المجد ..</td>
        </tr>
        <tr id="table_0_row_8">
            <td class="english" style="border-right: 1px solid black;">By night, lift up your hands, O you saints, and
                bless the Lord: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲛⲓ̀ⲉϫⲱⲣϩ ϥⲁⲓ ̀ⲛⲧⲉⲛϫⲓϫ ̀ⲉ̀ⲡϣⲱⲓ ⲛⲏⲉⲑⲟⲩⲁⲃ
                ̀ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ : ⲇⲟ̅...</td>
            <td class="arabic">بالليالى إرفعوا أيديكم إلى فوق أيها القديسون باركوا الرب . المجد ..</td>
        </tr>
        <tr id="table_0_row_9">
            <td class="english" style="border-right: 1px solid black;">The Lord bless you from Zion, Who made heaven and
                earth: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡϭⲟⲓⲥ ⲉϥ̀ⲉ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟⲕ ̀ⲉⲃⲟⲗ ϧⲉⲛ Ⲥⲓⲱⲛ :
                ⲫⲏⲉⲧⲁϥⲑⲁⲙⲓ̀ⲟ ̀ⲛ̀ⲧⲫⲉ ⲛⲉⲙ ̀ⲡⲕⲁϩⲓ : ⲇⲟ̅...</td>
            <td class="arabic">يباركك الرب من صهيون الذى خلق السماء والأرض. المجد ..</td>
        </tr>
        <tr id="table_0_row_10">
            <td class="english" style="border-right: 1px solid black;">Let my cry come near before You, O Lord. Give me
                understanding according to Your word: Glory be to You, O Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉ ⲡⲁϯϩⲟ ϧⲱⲛⲧ ̀ⲙⲡⲉⲕ̀ⲙⲑⲟ Ⲡϭⲟⲓⲥ : ⲙⲁⲕⲁϯ ⲛⲏⲓ ⲕⲁⲧⲁ
                ⲡⲉⲕⲥⲁϫⲓ: ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">فلتدن وسيلتى قدامك يارب . كقولك فهمنى المجد..</td>
        </tr>
        <tr id="table_0_row_11">
            <td class="english" style="border-right: 1px solid black;">Let my supplication come before You. Deliver me
                according to Your word: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉ̀ⲓ ̀ⲉϧⲟⲩⲛ ̀ⲙⲡⲉⲕ̀ⲙⲑⲟ ̀ⲛϫⲉ ⲡⲁ̀ⲁⲝⲓ̀ⲱⲙⲁ : ⲕⲁⲧⲁ
                ⲡⲉⲕⲥⲁϫⲓ ⲙⲁⲧⲁⲛϧⲟⲓ : ⲇⲟ̅...</td>
            <td class="arabic">ليدخل إبتهالى أمامك . ككلمتك أحينى . المجد ..</td>
        </tr>
        <tr id="table_0_row_12">
            <td class="english" style="border-right: 1px solid black;">My lips shall utter praise, for You teach me your
                statutes: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲣⲉ ⲛⲁ̀ⲥⲫⲟⲧⲟⲩ ⲃⲉⲃⲓ ̀ⲛⲟⲩ̀ⲥⲙⲟⲩ ̀ⲉϣⲱⲡ ⲁⲕϣⲁⲛ̀ⲧⲥⲁⲃⲟⲓ
                ̀ⲉⲛⲉⲕⲙⲉⲑⲙⲏⲓ : ⲇⲟ̅...</td>
            <td class="arabic">تفيض شفتاي السبح إذا ما علمتني حقوقك . المجد ..</td>
        </tr>
        <tr id="table_0_row_13">
            <td class="english" style="border-right: 1px solid black;">My tongue shall speak of Your words, for all Your
                commandments are righteousness: Glory be to You, O Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲁⲗⲁⲥ ⲉϥ̀ⲉ̀ⲉⲣⲟⲩ̀ⲱ ϧⲉⲛ ⲛⲉⲕⲥⲁϫⲓ : ϫⲉ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ ⲧⲏⲣⲟⲩ
                ϩⲁⲛⲙⲉⲑⲙⲏⲓ ⲛⲉ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">لساني يجيب بأقوالك. لأن جميع وصاياك هي حق . المجد ..</td>
        </tr>
        <tr id="table_0_row_14">
            <td class="english" style="border-right: 1px solid black;">Let Your hand become my help, for I have chosen
                Your precepts: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲥϣⲱⲡⲓ ̀ⲛϫⲉ ⲧⲉⲕϫⲓϫ ̀ⲉ̀ⲫⲛⲁϩⲙⲉⲧ : ϫⲉ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ
                ⲁⲓⲉⲣ̀ⲉⲡⲓⲑⲩⲙⲓⲛ ̀ⲉⲣⲱⲟⲩ : ⲇⲟ̅...</td>
            <td class="arabic">لتكن يدك لتخلصنى لأنى اشتهيت وصاياك . المجد ..</td>
        </tr>
        <tr id="table_0_row_15">
            <td class="english" style="border-right: 1px solid black;">I longed for Your salvation, O Lord, and Your law
                is my delight: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓϭⲓϣϣⲱⲟⲩ ̀ⲙⲡⲉⲕⲟⲩϫⲁⲓ Ⲡϭⲟⲓⲥ : ⲟⲩⲟϩ ⲡⲉⲕⲛⲟⲙⲟⲥ ⲡⲉ
                ⲧⲁⲙⲉⲗⲉⲧⲏ : ⲇⲟ̅...</td>
            <td class="arabic">اشتقت إلى خلاصك يارب. وناموسك هو تلاوتي. المجد..</td>
        </tr>
        <tr id="table_0_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Let my soul live, and it shall praise You, and let
                Your judgments help me: Glory…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲥ̀ⲉⲱⲛϧ ̀ⲛϫⲉ ⲧⲁⲯⲩⲭⲏ ⲟⲩⲟϩ ⲉⲥ̀ⲉ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟⲕ : ⲟⲩⲟϩ
                ⲛⲉⲕϩⲁⲡ ⲉⲩ̀ⲉⲉⲣⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ: ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">تحيا نفسى وتسبحك وأحكامك تعيننى. المجد ..</td>
        </tr>
        <tr id="table_0_row_17">
            <td class="english" style="border-right: 1px solid black;">I have gone astray like a lost sheep; seek Your
                servant, for I do not forget Your commandments: Glory…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓⲥⲱⲣⲉⲙ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩ̀ⲉⲥⲱⲟⲩ ̀ⲉⲁϥⲧⲁⲕⲟ : ⲕⲱϯ ̀ⲛⲥⲁ
                ⲡⲉⲕⲃⲱⲕ ϫⲉ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ̀ⲙⲡⲓⲉⲣⲡⲟⲩⲱⲃϣ : ⲇⲟ̅...</td>
            <td class="arabic">ضللت مثل الخروف الضال فاطلب عبدك فإنى لوصاياك لم أنس . المجد</td>
        </tr>
        <tr id="table_0_row_18">
            <td class="english" style="border-right: 1px solid black;">Glory be to the Father, and the Son, and the Holy
                Spirit: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ˙Ⲩⲓ̀ⲱ ⲕⲉ ̀ⲁⲅⲓ̀ⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ : ⲇⲟ̅...
            </td>
            <td class="arabic">المجد للآب والأبن والروح القدس . المجد ..</td>
        </tr>
        <tr id="table_0_row_19">
            <td class="english" style="border-right: 1px solid black;">Now, and forever, and unto the age of all ages
                Amen: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ̀ⲓ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ
                ̀ⲁⲙⲏⲛ : ⲇⲟ̅...</td>
            <td class="arabic">الآن وكل أوان وإلى دهر الداهرين آمين. المجد ..</td>
        </tr>
        <tr id="table_0_row_20">
            <td class="english" style="border-right: 1px solid black;">Glory be to the Father, and the Son and the Holy
                Spirit, now and forever and unto all ages, Amen: Glory be to You, O Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ⲱⲟⲩ ̀ⲙⲪⲓⲱⲧ ⲛⲉⲙ ˙Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ :
                ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ̀ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ ̀ⲁⲙⲏⲛ: ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">المجد للآب والابن والروح القدس منذ الآن وإلى أبد الآبدين كلها آمين. المجد</td>
        </tr>
        <tr id="table_0_row_21">
            <td class="english" style="border-right: 1px solid black;">Glory be to You, O Good One, the Lover of mankind.
                Glory be to Your Mother, the Virgin, and all Your saints: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ⲱⲟⲩ ⲛⲁⲕ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ : ⲡⲓ̀ⲱⲟⲩ ̀ⲛⲧⲉⲕⲙⲁⲩ
                ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲁⲕ: ⲇⲟ̅...</td>
            <td class="arabic">المجد لك يا محب البشر الصالح . المجد لأمك العذراء وجميع قديسيك . المجد ..</td>
        </tr>
        <tr id="table_0_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Glory be to You, O Only-Begotten one. O Holy
                Trinity, have mercy upon us: Glory...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲟⲝⲁ ⲥⲓ ̀ⲟⲙⲟⲛⲟⲅⲉⲛⲏⲥ ̀ⲁⲅⲓ̀ⲁ ̀ Ⲧⲣⲓⲁⲥ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ
                ̀ⲏⲙⲁⲥ : ⲇⲟ̅...</td>
            <td class="arabic">المجد لك أيها الوحيد. أيها الثالوث المقدس ارحمنا . المجد ..</td>
        </tr>
        <tr id="table_0_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Let God arise and let all His enemies be
                scattered, and let all that hate His Holy Name flee from before His face: Glory be to You, O Lover of
                mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉϥⲧⲱⲛϥ ̀ⲛϫⲉ Ⲫϯ : ⲙⲁⲣⲟⲩϫⲱⲣ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ ⲛⲉϥϫⲁϫⲓ
                ⲧⲏⲣⲟⲩ : ⲙⲁⲣⲟⲩⲫⲱⲧ ̀ⲉⲃⲟⲗ ϧⲁ̀ⲧϩⲏ ̀ⲙⲡⲉϥϩⲟ ̀ⲛϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲑⲙⲟⲥϯ ̀ⲙⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ.</td>
            <td class="arabic">ليقم الله . وليتبدد جميع أعدائه . وليهرب من قدام وجهه كل مبغضي اسمه القدوس . المجد ..
            </td>
        </tr>
        <tr id="table_0_row_24">
            <td class="coptic" style="border-right: 1px solid black;">As for Your people let them be blessed, a thousand
                thousand fold, and ten thousand ten thousand fold, doing Your will.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕⲗⲁⲟⲥ ⲇⲉ ⲙⲁⲣⲉϥϣⲱⲡⲓ ϧⲉⲛ ⲡⲓ̀ⲥⲙⲟⲩ ̀ⲉϩⲁⲛⲁⲛϣⲟ ̀ⲛϣⲟ
                ⲛⲉⲙ ϩⲁⲛ̀ⲑⲃⲁ ̀ⲛ̀ⲑⲃⲁ ⲉⲩ̀ⲓⲣⲓ ̀ⲙⲡⲉⲕⲟⲩⲱϣ .</td>
            <td class="arabic">وأما شعبك فليكن بالبركة ألوف ألوف وربوات ربوات يصنعون إرادتك .</td>
        </tr>
        <tr id="table_0_row_25">
            <td class="coptic" style="border-right: 1px solid black;">O Lord, open Thy lips, and my mouth shall show
                forth Your praise.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡϭⲟⲓⲥ ⲉⲕ̀ⲉ̀ⲁⲟⲩⲱⲛ ̀ⲛⲛⲁ̀ⲥⲫⲟⲧⲟⲩ : ⲟⲩⲟϩ ̀ⲉⲣⲉ ⲣⲱⲓ ϫⲱ
                ̀ⲙⲡⲉⲕ̀ⲥⲙⲟⲩ.</td>
            <td class="arabic">يارب افتح شفتى . ولينطق فمى بتسبحتك .</td>
        </tr>
        <tr id="table_0_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Oh, sing to the LORD a new song! Sing to the LORD,
                all the earth. Sing to the LORD, bless His name; proclaim the good news of His salvation from day to
                day. Declare His glory among the nations, His wonders among all peoples. For the LORD is great and
                greatly to be praised; He is to be feared above all gods. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ ϧⲉⲛ ⲟⲩ ϩⲱⲥ ̀ⲙⲃⲉⲣⲓ: ϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ ̀ⲡⲕⲁϩⲓ
                ⲧⲏⲣϥ: ϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉϥⲣⲁⲛ:ϩⲓϣⲉⲛⲛⲟⲩϥⲓ ̀ⲙⲡⲉϥⲟⲩϫⲁⲓ ̀ⲛ̀ⲉϩⲟⲟⲩ ϧⲁ ̀ⲧϩⲓ ̀ⲛ̀ⲉϩⲟⲟⲩ: ⲥⲁϫⲓ ̀ⲙⲡⲉϥⲱⲟⲩ ϧⲉⲛ
                ⲛⲓⲉⲑⲛⲟⲥ ⲛⲉⲙⲛⲉϥ̀ϣⲫⲏⲣⲓ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ϫⲉ ⲟⲩⲛⲓϣϯ ⲡⲉ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ̀ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲉⲙⲁϣⲱ: ̀ϥⲟⲓ ̀ⲛϩⲟϯ ̀ⲉϫⲉⲛ
                ⲛⲓⲛⲟⲩϯ ⲧⲏⲣⲟⲩ: Ⲁⲗⲗⲏⲗⲟⲩⲓ̀ⲁ.</td>
            <td class="arabic">سبحوا الرب تسبيحاً جديدا: سبحى الرب أيتها الأرض كلها: سبحوا الرب وباركوا اسمه: بشروا
                بخلاصه: يوماً فيوم: وأخبروا بمجده فى الأمم: وبعجائبه فى جميع الشعوب: لأن الرب عظيم ومبارك جداً: ومخوف
                على كل الآلهة. الليلويا.</td>
        </tr>
        <tr id="table_0_row_27">
            <td class="coptic" style="border-right: 1px solid black;">O Lord, open Thy lips, and my mouth shall show
                forth Your praise.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡϭⲟⲓⲥ ⲉⲕ̀ⲉ̀ⲁⲟⲩⲱⲛ ̀ⲛⲛⲁ̀ⲥⲫⲟⲧⲟⲩ : ⲟⲩⲟϩ ̀ⲉⲣⲉ ⲣⲱⲓ ϫⲱ
                ̀ⲙⲡⲉⲕ̀ⲥⲙⲟⲩ.</td>
            <td class="arabic">يارب افتح شفتى . ولينطق فمى بتسبحتك .</td>
        </tr>
        <tr id="table_0_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Oh, sing to the LORD a new song! Sing to the LORD,
                all the earth. Sing to the LORD, bless His name; proclaim the good news of His salvation from day to
                day. Declare His glory among the nations, His wonders among all peoples. For the LORD is great and
                greatly to be praised; He is to be feared above all gods. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ ϧⲉⲛ ⲟⲩ ϩⲱⲥ ̀ⲙⲃⲉⲣⲓ: ϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ ̀ⲡⲕⲁϩⲓ
                ⲧⲏⲣϥ: ϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉϥⲣⲁⲛ:ϩⲓϣⲉⲛⲛⲟⲩϥⲓ ̀ⲙⲡⲉϥⲟⲩϫⲁⲓ ̀ⲛ̀ⲉϩⲟⲟⲩ ϧⲁ ̀ⲧϩⲓ ̀ⲛ̀ⲉϩⲟⲟⲩ: ⲥⲁϫⲓ ̀ⲙⲡⲉϥⲱⲟⲩ ϧⲉⲛ
                ⲛⲓⲉⲑⲛⲟⲥ ⲛⲉⲙⲛⲉϥ̀ϣⲫⲏⲣⲓ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ϫⲉ ⲟⲩⲛⲓϣϯ ⲡⲉ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ̀ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲉⲙⲁϣⲱ: ̀ϥⲟⲓ ̀ⲛϩⲟϯ ̀ⲉϫⲉⲛ
                ⲛⲓⲛⲟⲩϯ ⲧⲏⲣⲟⲩ: Ⲁⲗⲗⲏⲗⲟⲩⲓ̀ⲁ.</td>
            <td class="arabic">سبحوا الرب تسبيحاً جديدا: سبحى الرب أيتها الأرض كلها: سبحوا الرب وباركوا اسمه: بشروا
                بخلاصه: يوماً فيوم: وأخبروا بمجده فى الأمم: وبعجائبه فى جميع الشعوب: لأن الرب عظيم ومبارك جداً: ومخوف
                على كل الآلهة. الليلويا.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_1" data-title="Your Table Title Here" onclick="toggleTable('table_1', this)">+
        Your Table Title Here</span>
    <table id="table_1" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_1_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I will bless the Lord at all times. His praise
                shall continually be in my mouth. My soul shall make her boast in the Lord, the humble shall hear
                thereof, and be glad. O magnify the Lord with me, and let us exalt His Name together. Alleluia.</td>
            <td class="arabic">أبارك الرب فى كل حين وفى كل أوان تسبحته موجودة فى فمى. بالرب تفتخر نفسى وليسمع أهل الدعة
                ويفرحوا. عظموا الرب معى ولنرفعن اسمه معا. الليلويا.</td>
        </tr>
        <tr id="table_1_row_1">
            <td class="coptic" style="border-right: 1px solid black;">You dwell between the Cherubim, shine forth.
                Before Ephraim and Benjamin and Manasseh stir up Your strength, and come and save us. Turn us again, O
                God, and cause Your face to shine, and we shall be saved. Alleluia.</td>
            <td class="arabic">أيها الجالس على الشيروبيم اظهر امام إفرايم وبنيامين ومنسى. أنهض قوتك وهلم لخلاصنا. اللهم
                أرددنا ولينر وجهك علينا فنخلص. الليلويا.</td>
        </tr>
        <tr id="table_1_row_2">
            <td class="coptic" style="border-right: 1px solid black;">He bowed the heavens also, and came down, and
                darkness was under His feet, and He rode upon a Cherub, and did fly; yes, He did fly upon the wings of
                the wind. He made darkness His secret place: His pavilion round about Him. Alleluia.</td>
            <td class="arabic">طأطأ السماء ونزل والضباب تحت رجليه. وركب على الشاروبيم وطار. طار على أجنحة الرياح وجعل
                الظلمة له حجاباً تحوط به مظلته. الليلويا.</td>
        </tr>
        <tr id="table_1_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The wings of a dove are covered with silver, and
                her feathers with yellow gold. When the Almighty scattered kings in it, it was as white as snow in
                Salmon. Alleluia.</td>
            <td class="arabic">أجنحة حمامة مغشاة بحلى الفضة ومنكباها بصفرة الذهب. وعندما يرسم السماوى عليها ممالك
                فيبيضون مثل الثلج فى سلمون. الليلويا.</td>
        </tr>
        <tr id="table_1_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The hill of God is as the hill of Bashan, a high
                hill as the hill of Bashan. Why leap you, you high hills? This is the hill, which God desires to dwell
                in, you; the Lord will dwell in it forever. Alleluia.</td>
            <td class="arabic">جبل الله الجبل الدسم. الجبل المتجمد الجبل الدسم. ما بالكم تظنون جبالاً مجبنة الجبل الذى
                سر الله أن يسكن فيه. فإن الرب يسكن فيه الى الانقضاء. الليلويا.</td>
        </tr>
        <tr id="table_1_row_5">
            <td class="coptic" style="border-right: 1px solid black;">At Your right hand stood the queen, arrayed in
                vesture of unwoven gold, adorned in varied colors. Alleluia.</td>
            <td class="arabic">قامت الملكة عن يمينك مشتملة بلباس موشى بالذهب مزينة بأنواع كثيرة. الليلويا.</td>
        </tr>
        <tr id="table_1_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Hearken, O daughter, and see, and incline your
                ear, and forget your own people and your father's house. And the king shall greatly desire your beauty,
                for He, Himself, is your Lord. Alleluia.</td>
            <td class="arabic">اسمعى يا ابنتى وانظرى وميلى بسمعك. وانسى شعبك وكل بيت أبيك فإن الملك قد اشتهى حسنك. لأنه
                هو ربك . الليلويا.</td>
        </tr>
        <tr id="table_1_row_7">
            <td class="coptic" style="border-right: 1px solid black;">The daughters of Tyre shall worship Him with
                gifts; the rich of the people of the land shall supplicate His favor. Alleluia.</td>
            <td class="arabic">تسجد له بنات صور يتلقى وجهك بالهدايا أغنياء شعوب الارض. الليلويا.</td>
        </tr>
        <tr id="table_1_row_8">
            <td class="coptic" style="border-right: 1px solid black;">All the glory of the daughter of the king is
                within, with gold-ringed garments is she arrayed, adorned in varied colors. The virgins that follow
                after her are brought unto You. They shall be brought with gladness and rejoicing. They shall be brought
                into the temple of the King. Alleluia.</td>
            <td class="arabic">كل مجد ابنة الملك من داخل مشتملة بأذيال موشاة بالذهب. مزينة بأشكال كثيرة. يدخلن إلى الملك
                عذارى خلفها . يدخلن صاحباتها جميعاً. يدخلن بالفرح والتهليل . يدخلن إلى هيكل الملك. الليلويا.</td>
        </tr>
        <tr id="table_1_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Great is the Lord, and greatly to be praised in
                the City of our God, in the mountain of His holiness. Beautiful is its situation, the joy of the whole
                earth, in Mount Zion, on the sides of the north the city of the great King. Alleluia.</td>
            <td class="arabic">عظيم هو الرب ومبارك جداً فى مدينة إلهنا على جبله المقدس تتسع كل الأرض بالتهليل. جبال
                صهيون جوانب الشمال مدينة الملك العظيم. الليلويا.</td>
        </tr>
        <tr id="table_1_row_10">
            <td class="coptic" style="border-right: 1px solid black;">His foundation is in the holy mountains. The Lord
                loves the gates of Zion more than all the dwellings of Jacob. Glorious things are spoken of You, O City
                of God. Alleluia.</td>
            <td class="arabic">أساساته في الجبال المقدسة: الرب أحب أبواب صهيون أفضل من جميع مساكن يعقوب أعمال كريمة قيلت
                من أجلك يا مدينة الله . الليلويا.</td>
        </tr>
        <tr id="table_1_row_11">
            <td class="coptic" style="border-right: 1px solid black;">And of Zion it shall be said: This and that man
                was born in her, and the Highest Himself established her. Alleluia.</td>
            <td class="arabic">الأم صهيون تقول ان انسانا وانسانا حل فيها. وهو العلى الذى أسسها الى الأبد. الليلويا.</td>
        </tr>
        <tr id="table_1_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The angel of the Lord encamps round about them
                that fear Him, and delivers them. O taste and see that the Lord is good. Blessed is the man that trusts
                in Him. Alleluia.</td>
            <td class="arabic">ملاك الرب يحوط بكل خائفيه وينجيهم. ذوقوا وانظروا ما أطيب الرب. طوبى للرجل المتوكل عليه.
                الليلويا.</td>
        </tr>
        <tr id="table_1_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Who makes His angels spirits. His ministers a
                flaming fire. Alleluia.</td>
            <td class="arabic">الذى خلق ملائكته أرواحاً وخدامه ناراً تتقد. الليلويا.</td>
        </tr>
        <tr id="table_1_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Who makes the clouds His chariot. Who walks upon
                the wings of the wind. Alleluia.</td>
            <td class="arabic">الذى جعل مسالكه على السحاب. الماشى على أجنحة الرياح. الليلويا.</td>
        </tr>
        <tr id="table_1_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, you His angels who excel in
                strength, who do His commandments. Bless you the Lord, all His hosts, you ministers of His, who do His
                pleasure. Bless the LORD from the heavens; Bless Him in the heights. Alleluia.</td>
            <td class="arabic">باركوا الرب يا جميع ملائكته. الأشداء فى قوتهم الصانعين قوله. سبحوه يا جميع جنوده خدامه
                الصانعين إرادته باركوا الرب من السموات. باركوه في الأعالى. الليلويا.</td>
        </tr>
        <tr id="table_1_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Before the angels I will praise, I will worship
                Your holy temple. Alleluia.</td>
            <td class="arabic">أمام الملائكة أرتل لك واسجد نحو هيكلك المقدس. الليلويا.</td>
        </tr>
        <tr id="table_1_row_17">
            <td class="coptic" style="border-right: 1px solid black;">The heavens declare the glory of God and the
                firmament shows His great work. Day unto day utters speech and night unto night shows knowledge. There
                is neither speech nor language. Alleluia.</td>
            <td class="arabic">السموات تنطق بمجد الله والفلك يخبر بعمل يديه يوماً يقول كلاماً ليوم. وليلا يظهر علماً
                لليل. ليس من قول ولا من كلام. الليلويا.</td>
        </tr>
        <tr id="table_1_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Where their voice is not heard, their line is gone
                out through all the earth and their words to the end of the world. Alleluia.</td>
            <td class="arabic">الذين لم يسمع لهم صوت . خرجت أصواتهم على الأرض كلها وبلغ كلامهم الى أقطار المسكونة.
                الليلويا.</td>
        </tr>
        <tr id="table_1_row_19">
            <td class="coptic" style="border-right: 1px solid black;">The Lord gave the word: great was the company of
                those that published it. The King of armies is the Beloved. Alleluia.</td>
            <td class="arabic">الرب يعطى كلمة للمبشرين بعظم قوة. وملك القوات هو الحبيب. الليلويا.</td>
        </tr>
        <tr id="table_1_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Give thanks unto the Lord; call upon His Name;
                make known His deeds among the people; talk you of all His wondrous works. Glory you in His Holy Name.
                Alleluia.</td>
            <td class="arabic">اعترفوا للرب وادعوا باسمه. وبشروا بأعماله فى الأمم. أخبروا بجميع عجائبه. افتخروا باسمه
                القدوس. الليلويا.</td>
        </tr>
        <tr id="table_1_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Precious in the sight of the Lord is the death of
                His saints. O Lord, I am Your servant, and the son of your handmaid: You have loosed my bonds. I will
                offer to You the sacrifice of thanksgiving. I will pay my vows unto the Lord now in the presence of all
                His people, in the courts of the Lord's house, in the midst of you, O Jerusalem. Alleluia.</td>
            <td class="arabic">كريم أمام الرب موت أصفيائه. يارب أنا عبدك وابن أمتك. حللت وثاقى فلك أذبح ذبيحة التسبيح.
                وأوفى للرب نذورى فى ديار بيت إلهنا قدام جميع الشعب فى وسط أورشليم. الليلويا.</td>
        </tr>
        <tr id="table_1_row_22">
            <td class="coptic" style="border-right: 1px solid black;">God is greatly to be feared in the assembly of the
                saints. He is the God of Israel. He will give strength unto His people. Let the righteous be glad; let
                them rejoice before God. Yes, let them exceedingly rejoice before God; yes, let them exceedingly
                rejoice. Blessed be the Lord God. Alleluia.</td>
            <td class="arabic">عجيب هو الله فى قديسيه. إله اسرائيل هو يعطى قوة وعزاء لشعبه. الصديقون يفرحون ويتهللون
                أمام الله ويتنعمون بسرور مبارك الرب الإله. الليلويا.</td>
        </tr>
        <tr id="table_1_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Gird Your sword upon Your thigh, O most Mighty.
                With Your glory and Your majesty ride prosperously. Alleluia.</td>
            <td class="arabic">تقلد سيفك على فخذك أيها الجبار بحداثتك و بهائك امتد وسر واملك. الليلويا</td>
        </tr>
        <tr id="table_1_row_24">
            <td class="coptic" style="border-right: 1px solid black;">You shall tread upon the lion and adder; the young
                lion and the dragon shall You trample under feet. Because he has set His love upon Me, therefore will I
                deliver him: I will set him on high because he has known My Name. Alleluia.</td>
            <td class="arabic">تطأ الأفعى وملك الحيات. وتكسر الأسد والتنين. لإنه إياي ترجى فأخلصه. وأستره لأنه قد عرف
                اسمى. الليلويا.</td>
        </tr>
        <tr id="table_1_row_25">
            <td class="coptic" style="border-right: 1px solid black;">The salvation of the righteous is of the Lord. He
                is their strength in the time of trouble. And the Lord shall help them and save them from the wicked
                because they trust in Him. Alleluia.</td>
            <td class="arabic">خلاص الأبرار من عند الرب . وهو ناصرهم في زمن الشدائد الرب يعينهم وينقذهم من الخطاة لأنهم
                توكلوا عليه. الليلويا.</td>
        </tr>
        <tr id="table_1_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Let the righteous rejoice with joy. They cried and
                the Lord heard them and He delivered them out of all their distress. The Lord is nigh unto them that are
                of a contrite heart and He will save the humble of spirit. Alleluia.</td>
            <td class="arabic">فليفرح الأبرار بالفرح . والصديقون صرخوا إلى الرب فسمع لهم. ونجاهم من جميع شدائدهم قريب
                الرب من مستقيمي القلوب. و المتواضعى الأرواح يخلصهم. الليلويا.</td>
        </tr>
        <tr id="table_1_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Many are the afflictions of the righteous, but the
                Lord delivers him out of them all. He keeps all his bones; not one of them is broken. Alleluia.</td>
            <td class="arabic">كثيرة هى أحزان الصديقين. والرب يخلصهم من جميعها. الرب يحفظ جميع عظامهم. وواحدة منها لا
                تنكسر. الليلويا.</td>
        </tr>
        <tr id="table_1_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Light is sown for the righteous and gladness for
                the upright in heart. Rejoice in the Lord, you righteous! Give thanks at the remembrance of His
                holiness. Alleluia.</td>
            <td class="arabic">نور أشرق للصديقين. وفرح لمستقيمى القلوب. افرحوا أيها الصديقون بالرب. واعترفوا لذكر قدسه.
                الليلويا.</td>
        </tr>
        <tr id="table_1_row_29">
            <td class="coptic" style="border-right: 1px solid black;">The righteous shall flourish like the palm tree.
                He shall grow like a cedar in Lebanon. Those that are planted in the house of the Lord shall flourish in
                the courts of our God. Alleluia.</td>
            <td class="arabic">البار يعلوا مثل النخلة. ويكثر مثل أرز لبنان المغروسون في بيت الرب يزهرون في ديار بيت
                إلهنا الليلويا.</td>
        </tr>
        <tr id="table_1_row_30">
            <td class="coptic" style="border-right: 1px solid black;">The mouth of the righteous speaks wisdom and his
                tongue talks of judgment. The law of his God is in his heart; none of his steps shall slide. Alleluia.
            </td>
            <td class="arabic">فم البار يتلو الحكمة ولسانه ينطق بالحكم ناموس الله كائن في قلبه. وخطواته لا تزل.
                الليلويا.</td>
        </tr>
        <tr id="table_1_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Your saints shall speak of the glory of Your
                kingdom, and talk of Your power. He will fulfill the desire of them that fear Him. He also will hear
                their cry and will save them. The Lord preserves all them that love Him. Alleluia.</td>
            <td class="arabic">قديسوك يباركونك وينطقون بمجد ملكوتك. يصنع إرادة خائفيه ويسمع تضرعهم ويخلصهم. الرب يحفظ كل
                محبيه. الليلويا</td>
        </tr>
        <tr id="table_1_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Be glad in the Lord and rejoice, you righteous.
                Shout for joy, all you that are upright in heart. For this, shall everyone that is godly pray unto You
                in a time when You may be found. Alleluia.</td>
            <td class="arabic">افرحوا بالرب وتهللوا أيها الأبرار. افتخروا يا جميع مستقيمي القلوب فلهذا يصلى لك كل
                الأبرار في زمان مستقيم. الليلويا</td>
        </tr>
        <tr id="table_1_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Let Your tender mercies come speedily to meet us
                because we have been brought very low. Help us, O God of our salvation, for the glory of Your Name. O
                Lord, save us and forgive us our sins for the glory of Your Name. Alleluia.</td>
            <td class="arabic">فلتسبق وتدركنا سريعاً رأفتك لأننا قد تمسكنا جداً. أعنا يا لله مخلصنا. من أجل مجد اسمك يا
                رب تخلصنا. وتغفر لنا خطايانا من أجل اسمك القدوس الليلويا</td>
        </tr>
        <tr id="table_1_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Let them exalt Him in the church of His people and
                praise Him in the seat of the elders, for He has made His families like a flock of sheep, that the
                upright may see and rejoice. Alleluia.</td>
            <td class="arabic">فليرفعوه فى كنيسة شعبه. وليباركوه على منابر الشيوخ. لأنه جعل الأبوات مثل الخراف. ينظر
                المستقيمون ويفرحون. الليلويا.</td>
        </tr>
        <tr id="table_1_row_35">
            <td class="coptic" style="border-right: 1px solid black;">The Lord has sworn and will not repent. You are a
                priest forever after the order of Melchizedek. Alleluia.</td>
            <td class="arabic">أقسم الرب ولن يندم أنك أنت الكاهن إلى الأبد على طقس ملشيصادق. الليلويا.</td>
        </tr>
        <tr id="table_1_row_36">
            <td class="coptic" style="border-right: 1px solid black;">God be merciful unto us, bless us, cause His face
                to shine upon us, and have mercy upon us. Alleluia.</td>
            <td class="arabic">الله يتراءف علينا ويباركنا ويشرق وجهه علينا ويرحمنا . الليلويا.</td>
        </tr>
        <tr id="table_1_row_37">
            <td class="coptic" style="border-right: 1px solid black;">Save Your people, bless Your inheritance, shepherd
                them, and raise them up forever. Alleluia.</td>
            <td class="arabic">يا رب خلص شعبك بارك ميراثك ارعهم وارفعهم إلى الأبد. الليلويا.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_2" data-title="Your Table Title Here" onclick="toggleTable('table_2', this)">+
        Your Table Title Here</span>
    <table id="table_2" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_2_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Whoever is wise will observe these things, and
                they will understand the loving-kindness of the LORD. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲙ ⲡⲉ ⲡⲓⲥⲁⲃⲉ ⲟⲩⲟϩ ̀ⲛⲧⲉϥ̀ⲣⲉϩ ̀ⲉⲛⲁⲓ ⲟⲩⲟϩ ̀ⲛⲥⲉⲕⲁϯ
                ̀ⲉⲛⲓⲛⲁⲓ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ : Ⲁⲗⲗⲏⲗⲟⲩⲓ̀ⲁ.</td>
            <td class="arabic">من هو الحكيم فيحفظ هذه ويتفهم مراحم الرب. الليلويا.</td>
        </tr>
        <tr id="table_2_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Bless me. Lo, the repentance. Forgive me. O my
                fathers and my brethren pray for me. In love, I ask you to remember me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲙⲟⲩ ̀ⲉⲣⲟⲓ : ⲓⲥ ϯⲙⲉⲧ̀ⲁⲛⲟⲓ̀ⲁ ⲭⲱ ⲛⲏⲓ ̀ⲉⲃⲟⲗ : ⲛⲁⲓⲟϯ
                ⲛⲉⲙ ⲛⲁ̀ⲥⲛⲏⲟⲩ ̀ϣⲗⲏⲗ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲓ : ϧⲉⲛ ⲟⲩ̀ⲁⲅⲁⲡⲏ ϯϯϩⲟ ̀ⲉⲣⲱⲧⲉⲛ ̀ⲁⲣⲓⲡⲁⲙⲉⲩ̀ⲓ.</td>
            <td class="arabic">باركوا على. ها مطانية اغفروا لي يا آبائي وإخوتي صلوا علي. بالمحبة أسالكم اذكروني.</td>
        </tr>
        <tr id="table_2_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Glory to the Father and to the Son and to the Holy
                Spirit, now and ever and unto the ages of ages.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ ̀ⲁⲅⲓⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ: ⲕⲉ ⲛⲩⲛ ⲕⲉ
                ⲁ̀̀ⲓ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ:</td>
            <td class="arabic">المجد للاب والابن والروح القدس الان وكل أوان وإلي دهر الدهور</td>
        </tr>
        <tr id="table_2_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Amen. Alleluia. Lord have mercy. Lord have mercy.
                Lord have mercy.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.
                Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_3" data-title="Your Table Title Here" onclick="toggleTable('table_3', this)">+
        Your Table Title Here</span>
    <table id="table_3" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_3_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Agios O Theos
                Agios Yes-sheros
                Agios Athanatos
                Amen Alleluia</td>
            <td class="arabic">آجيوس أوثيئوسآجيوس إس شيروسأجيوس أثاناطوسآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Holy God Holy
                Mighty in His glory
                Holy is the Living God
                Amen Alleluia</td>
            <td class="arabic">قدوس الله قدوسقدوس القوي قدوسقدوس الحىّ اللهآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_2">
            <td class="coptic" style="border-right: 1px solid black;">By the help of the Mighty God
                The great Lord of lords
                I'll explain the meaning of
                Amen Alleluia</td>
            <td class="arabic">بمعونة رب قديرإله عظيم خبيرأشرح معنى تفسيرآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_3">
            <td class="coptic" style="border-right: 1px solid black;">How beautiful is its meaning
                There is none, but our God
                We praise Him high in His heaven
                Amen Alleluia</td>
            <td class="arabic">معناه ياما أحلاهليس غير الله إلهنسبحه فوق أعلى سماهآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Michael and Gabriel
                Raphael and Souriel
                All praising Him saying
                Amen Alleluia</td>
            <td class="arabic">ميخائيل وغبريالرافائيل وسورياليتلون تسابيح وأقوالآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_5">
            <td class="coptic" style="border-right: 1px solid black;">The heavenly Cherubim
                And the mighty Seraphim
                They also glorify Him
                Amen Alleluia</td>
            <td class="arabic">تسبحة الشيروبيموأيضاً السيرافيمقائلين بصوت عظيمآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Heavenly hosts of light
                And all the spiritual ranks
                Continuously praise Him
                Amen Alleluia</td>
            <td class="arabic">أجناد نورانيةوطغمات روحانيةيصيحون علانيةآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Myriads of myriads
                Ranks around the Throne
                Proclaiming before the Lord
                Amen Alleluia</td>
            <td class="arabic">ربوات ربوات وألوفمن حول العرش صفوفيقولون وهم وقوفأمين الليلويا</td>
        </tr>
        <tr id="table_3_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The four living creatures
                Around the Throne of God
                Pleading on our behalf
                Amen Alleluia</td>
            <td class="arabic">والأربعة الكائناتمن تحت العرش ثباتيتلون كل الأوقاتآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_9">
            <td class="coptic" style="border-right: 1px solid black;">The first is like a lion
                A figure without body
                Bowing to the King of Zion
                Amen Alleluia</td>
            <td class="arabic">الأول شبه أسدصورة من غير جسدوأعين بلا عددآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_10">
            <td class="coptic" style="border-right: 1px solid black;">The second is like a calf
                A sign of sacrifice
                Proclaiming unceasingly
                Amen Alleluia</td>
            <td class="arabic">الثانى شبه الثوروهو منظر من نوريصيح بلا فتورآمين الليلويا|</td>
        </tr>
        <tr id="table_3_row_11">
            <td class="coptic" style="border-right: 1px solid black;">The third is like an eagle
                Soaring in the heavens
                Pleading before the Only-Begotten
                Amen Alleluia</td>
            <td class="arabic">الثالث شبه عقابيسأل عن الطير بإيجابأمام وحيد الآبآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The fourth has a face of man
                Asking forgiveness on our behalf
                Before the Lord our God
                Amen Alleluia</td>
            <td class="arabic">الرابع شبه إنسانيسأل عنا الغفرانأمام الله الديانآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_13">
            <td class="coptic" style="border-right: 1px solid black;">A scene encountered with light
                They praise God who is seated
                Up above on His throne
                Amen Alleluia</td>
            <td class="arabic">منظر بالنور مكسىيسبحون فى ات هيمسىمن فوق أعلى الكرسىآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Scenes with diversities
                Seraphim with six wings
                Praising continuously
                Amen Alleluia</td>
            <td class="arabic">منظر بانواع شتىسيرافيم باجنحة ستةيصيحون بلا سكتةآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_15">
            <td class="coptic" style="border-right: 1px solid black;">The twenty-four elders
                Priests of the high order
                To Him they surrender
                Amen Alleluia</td>
            <td class="arabic">والأربعة والعشرون قسيسكهنة بمقام نفيسيصيحون بالتقديسآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_16">
            <td class="coptic" style="border-right: 1px solid black;">The stars and the orbits
                Praise Him throughout the way
                Up high in the heavens
                Amen Alleluia</td>
            <td class="arabic">وتسبحه الأفلاكالذين سلكوا الأسلاكمن فوق أعلى السمواتآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Lucifer has become
                Satan after his pride
                When he ceased to say
                Amen Alleluia</td>
            <td class="arabic">سطانائيل قد صارشيطانا بالاستكبارلما بطل هذا التذكارآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Pitiful is the one who hears it
                In the midst of the congregation
                And does not sing with it
                Amen Alleluia</td>
            <td class="arabic">مسكين من يسمعهافى حضرة قائلهاولايتلو معهاآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is praise
                Hymns and songs
                We cry out saying
                Amen Alleluia</td>
            <td class="arabic">الليلويا تسبيحوترتيل ومديحبها نصرخ ونصيحآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is pleasure
                And it gives satisfaction
                To utter two thousands
                Amen Alleluia</td>
            <td class="arabic">الليلويا تنزيهوقائلها يكفيهيقول ألفين بفيةآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is pleasure
                And it gives satisfaction
                To utter two thousands
                Amen Alleluia</td>
            <td class="arabic">الليلويا تنزيهوقائلها يكفيهيقول ألفين بفيةآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is joy
                And it is a sweet language
                It saves from damage
                Amen Alleluia</td>
            <td class="arabic">الليلويا بهجةوهى أحلى لهجةوقائلها ينجىآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is exaltation
                For a merciful God
                Who is generous for generations
                Amen Alleluia</td>
            <td class="arabic">الليلويا تعظيملإله رؤوف رحيمخفى الألطاف كريمآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is memorial
                For the great God of Wonders
                We praise in great numbers
                Amen Alleluia</td>
            <td class="arabic">الليلويا تذكارلإله عظيم ستاريجب له التذكارآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia is a hymn
                A praise and rejoice
                And it's the best choice
                Amen Alleluia</td>
            <td class="arabic">الليلويا ترتيلوتسبيح وتهليلوهى أفضل ما قيلآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Blessed is the Creator
                Existent before the ages
                Filling all places
                Amen Alleluia</td>
            <td class="arabic">سبحانه مكون ماكانكائن قبل الأكوانما يخلى منه مكانآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Blessed is the Mighty
                Unseen and incomprehensible
                He is adorable
                Amen Alleluia</td>
            <td class="arabic">سبحانه جل ثناهخفى لاعين تراهولامعبود سواهآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_28">
            <td class="coptic" style="border-right: 1px solid black;">He created the waters
                The fire and the earth's ground
                He made it from void
                Amen Alleluia</td>
            <td class="arabic">سبحانه خلق من الماءناراً وأرضاً صماءأوجدها من العدماآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_29">
            <td class="coptic" style="border-right: 1px solid black;">Blessed is the zealous Lord
                Merciful and forgiving
                All deeds He is covering
                Amen Alleluia</td>
            <td class="arabic">سبحانه رب غيوررؤوف رحيم غفورعلى كل فعل ستورآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_30">
            <td class="coptic" style="border-right: 1px solid black;">Purity for the righteous
                Fulfilled by Alleluia
                Let us all say together
                Amen Alleluia</td>
            <td class="arabic">بالليلويا قد صارتحقيق بر الأبرارقولوا أيها الحضارآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_31">
            <td class="coptic" style="border-right: 1px solid black;">King David prophesied
                And by it glorified
                Words which are divinely prepared
                Amen Alleluia</td>
            <td class="arabic">داود بها تنبأوبفضلها أنبأبأقوال منتسبةآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_32">
            <td class="coptic" style="border-right: 1px solid black;">In the book of the Psalms
                The hundred and fifty one psalms
                And at the end of every psalm
                Amen Alleluia</td>
            <td class="arabic">فى شرح سفر المزاميرالمائة واحد والخمسين مزموروفى آخر كل مزمورآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_33">
            <td class="coptic" style="border-right: 1px solid black;">It is prayed at all times
                To the Creator of the heavens
                And is explained in the canticles
                Amen Alleluia</td>
            <td class="arabic">تقرأ سائر الأوقاتإلى خالق السمواتوفى شرح الهوساتآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_34">
            <td class="coptic" style="border-right: 1px solid black;">A fraction for the Korban
                Hippe Evshe Neman
                In it the faith is clear
                Amen Alleluia</td>
            <td class="arabic">وقسمة للقربانهيبى إفكى نيمانوفيها شرح الإيمانآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_35">
            <td class="coptic" style="border-right: 1px solid black;">David the pure proclaimed
                Mary the Virgin Lady
                On the ten strings
                Amen Alleluia</td>
            <td class="arabic">مدح داود البارمريم سيدة الأبكارعلى العشرة الأوتارآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_36">
            <td class="coptic" style="border-right: 1px solid black;">By the organ and the harp
                The cymbals and the strings
                The timbrel and chorus
                Amen Alleluia</td>
            <td class="arabic">بالأرغن والقيثاروالصنوج والأوتاروالدف مع المزمارآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_37">
            <td class="coptic" style="border-right: 1px solid black;">He said, O daughter of Zion Your
                Lord loved you and chose you
                Listen and incline your ears
                Amen Alleluia</td>
            <td class="arabic">قال ياإبنة ربكاختارك وأحبكأصغى وانسى شعبكآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_38">
            <td class="coptic" style="border-right: 1px solid black;">For her he also said
                She is the high mountain of God
                Above all other types
                Amen Alleluia</td>
            <td class="arabic">وعنها أيضاً قالهى جبل الله العالأعلى من كل مثالآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_39">
            <td class="coptic" style="border-right: 1px solid black;">He called her Zion
                And said she is the chosen one
                From whom God will be human
                Amen Alleluia</td>
            <td class="arabic">وسماها صهيونوقال سوف يكوناله سره مكنونآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_40">
            <td class="coptic" style="border-right: 1px solid black;">Again he named her
                The Queen who is
                Embraced by light
                Amen Alleluia</td>
            <td class="arabic">وسماها بالجملةالملكة المشتملةبالنور والحلةآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_41">
            <td class="coptic" style="border-right: 1px solid black;">He called all the nations
                To clap hands and praise
                Singing hymns and praises
                Amen Alleluia</td>
            <td class="arabic">وقال جميع الأممتصفق بتراتيل وهمميتلون تسابيح بنغمآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_42">
            <td class="coptic" style="border-right: 1px solid black;">He said, "Blessed is the man
                Who is adorned with mercy
                For the poor and the down-trodden
                Amen Alleluia</td>
            <td class="arabic">وقال طوبى للإنسانالمتعطف بالإحسانعلى البائس والمهانآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_43">
            <td class="coptic" style="border-right: 1px solid black;">For God will save him
                And grant him many goods
                To satisfy him for many years."
                Amen Alleluia</td>
            <td class="arabic">فإن الرب ينجيهومن الخيرات يعطيهما يكفيه ويعافيهآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_44">
            <td class="coptic" style="border-right: 1px solid black;">Lord, we ask of You
                Keep Pope Tawadros the Great
                Our Patriarch and grant him wisdom
                Amen Alleluia</td>
            <td class="arabic">يارب إليك نسألإحفظ البابا تواضروس الأمثلبطريركنا واعطه الاقبالآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_45">
            <td class="coptic" style="border-right: 1px solid black;">Also keep in safety
                The ones who watch over us
                Our metropolitans and bishops
                Amen Alleluia</td>
            <td class="arabic">يارب طمناعلى الساهرين عنامطرانتنا واساقفتناآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_46">
            <td class="coptic" style="border-right: 1px solid black;">And keep, O Lord of lords
                All the beloved ones
                Who are present and absent
                Amen Alleluia</td>
            <td class="arabic">واحفظ يارب الأربابسائر كل الأحبابالحضار والغيابآمين الليلويا</td>
        </tr>
        <tr id="table_3_row_47">
            <td class="coptic" style="border-right: 1px solid black;">And also protect the reader
                Who said it to the audience
                And living it in abundance
                Amen Alleluia</td>
            <td class="arabic">وأحفظ قاريهاوالشارح لمعانيهاوالعامل بما فيهاآمين الليلويا</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_4" data-title="Your Table Title Here" onclick="toggleTable('table_4', this)">+
        Your Table Title Here</span>
    <table id="table_4" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_4_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Then Moses and the children of Israel sang this
                song to the Lord, and spoke saying, "Let us sing to the Lord for He has triumphed gloriously.”</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲟⲧⲉ ⲁϥϩⲱⲥ ̀ⲛϫⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲛⲉⲙ ⲛⲉⲛϣⲏⲣⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ
                ̀ⲉⲧⲁⲓ ϩⲱⲇⲏ ̀̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ⲁϥϫⲟⲥ ⲉⲑⲣⲟⲩϫⲟⲥ: ϫⲉ ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ: ϫⲉ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ ⲅⲁⲣ ⲁϥϭⲓ̀ⲱⲟⲩ.</td>
            <td class="arabic">حينئذ سبح مـوسى وبنو إسرائيل بهذة التسبحة للرب وقالوا فلنسبح للرب لانه بالمجد قد تمجد.
            </td>
        </tr>
        <tr id="table_4_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The horse and its rider, He has thrown into the
                sea. The Lord is my strength and song, and He has become my salvation.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩ̀ϩⲑⲟ ⲛⲉⲙ ⲟⲩϭⲁⲥⲓ̀ϩⲑⲟ ⲁϥⲃⲉⲣⲃⲱⲣⲟⲩ ̀ⲉ̀ⲫⲓⲟⲙ:
                ⲟⲩⲃⲟ̀ⲏⲑⲟⲥ ⲛⲉⲙ ⲟⲩⲣⲉϥϩⲱⲃⲥ ̀ⲉⲃⲟⲗ ϩⲓϫⲱⲓ ⲁϥϣⲱⲡⲓ ⲛⲏⲓ ̀ⲛⲟⲩⲥⲱⲧⲏⲣⲓⲁ.</td>
            <td class="arabic">الفرس وراكبه طرحهما في البحر. معيني وساتري صار لي خلاصاً.</td>
        </tr>
        <tr id="table_4_row_2">
            <td class="coptic" style="border-right: 1px solid black;">He is my God and I will glorify Him, my father's
                God and I will exalt Him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲓ ⲡⲉ Ⲡⲁⲛⲟⲩϯ ϯⲛⲁϯ̀ⲱⲟⲩ ⲛⲁϥ: Ⲫϯ ̀ⲙⲡⲁⲓⲱⲧ ϯⲛⲁϭⲁⲥϥ.
            </td>
            <td class="arabic">هذا هو إلهى فأمجده إله أبى فأرفعه.</td>
        </tr>
        <tr id="table_4_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The Lord is a Man of war, the Lord is His name.
                Pharaoh's chariots and his army He has cast into the sea.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡϭⲟⲓⲥ ⲡⲉⲧϧⲟⲙϧⲉⲙ ̀ⲛⲛⲓⲃⲱⲧⲥ: Ⲡϭⲟⲓⲥ ⲡⲉ ⲡⲉϥⲣⲁⲛ:
                ⲛⲓⲃⲉⲣⲉϭⲱⲟⲩⲧⲥ ̀̀ⲛⲧⲉ Ⲫⲁⲣⲁ̀ⲱ ⲛⲉⲙ ⲧⲉϥϫⲟⲙ ⲧⲏⲣⲥ ⲁϥⲃⲉⲣⲃⲱⲣⲟⲩ ̀ⲉ̀ⲫⲓⲟⲙ.</td>
            <td class="arabic">الرب مكسر الحروب الرب اسمه. مركبات فرعون وكل قوته طرحهما فى البحر.</td>
        </tr>
        <tr id="table_4_row_4">
            <td class="coptic" style="border-right: 1px solid black;">His chosen captains also drowned in the Red Sea.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲁⲛⲥⲱⲧⲡ ̀ⲛ̀ⲁⲛⲁⲃⲁⲧⲏⲥ ̀ⲛⲧⲣⲓⲥⲧⲁⲧⲏⲥ ⲁϥϫⲟⲗⲕⲟⲩ ϧⲉⲛ ̀ⲫⲓⲟⲙ
                ̀ⲛϣⲁⲣⲓ.</td>
            <td class="arabic">ركباناً منتخبين ذي ثلاث جنبات غرّقهم فى البحر الأحمر.</td>
        </tr>
        <tr id="table_4_row_5">
            <td class="coptic" style="border-right: 1px solid black;">The depths have covered them; they sank to the
                bottom like a stone.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϩⲟⲃⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲟⲩ ̀ⲛϫⲉ ⲡⲓⲙⲱⲟⲩ : ⲁⲩⲱⲙⲥ ̀ⲉ̀ϧⲣⲏⲓ
                ̀ⲉⲡⲉⲧϣⲏⲕ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩ̀ⲱⲛⲓ.</td>
            <td class="arabic">غطاهم الماء انغمسوا إلى العمق مثل الحجر</td>
        </tr>
        <tr id="table_4_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Your right hand, O Lord, has become glorious in
                power. Your right hand, O Lord, has dashed the enemy in pieces.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲕⲟⲩ̀ⲓⲛⲁⲙ Ⲡϭⲟⲓⲥ ⲁⲥϭⲓ̀ⲱⲟⲩ ϧⲉⲛ ⲟⲩϫⲟⲙ: ⲧⲉⲕϫⲓϫ
                ̀ⲛⲟⲩ̀ⲓⲛⲁⲙ Ⲡⲁⲛⲟⲩϯ ⲁⲥⲧⲁⲕⲉ ⲛⲉⲕϫⲁϫⲓ.</td>
            <td class="arabic">يمينك يا رب تمجدت بالقوة. يدك اليمنى يا إلهى أهلكت أعداءك.</td>
        </tr>
        <tr id="table_4_row_7">
            <td class="coptic" style="border-right: 1px solid black;">And in the greatness of Your excellence, You have
                overthrown those who rose against You. You sent forth Your wrath, it consumed them like stubble.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ̀ⲡ̀ⲁϣⲁⲓ ̀̀ⲛⲧⲉ ⲡⲉⲕ̀ⲱⲟⲩ ⲁⲕϧⲟⲙϧⲉⲙ ̀ⲛⲛⲏⲉⲧϯⲟⲩⲃⲏⲛ:
                ⲁⲕⲟⲩⲱⲣⲡ ̀ⲙⲡⲉⲕϫⲱⲛⲧ ⲁϥⲟⲩ̀ⲟⲙⲟⲩ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛϩⲁⲛⲣⲱⲟⲩ̀ⲓ.</td>
            <td class="arabic">بكثرة مجدك سحقت الذين يقاوموننا ارسلت غضبك فأكلهم مثل الهشيم.</td>
        </tr>
        <tr id="table_4_row_8">
            <td class="coptic" style="border-right: 1px solid black;">And with the blast of Your nostrils the waters
                were gathered together, the flood stood upright like a heap, and the depths congealed in the heart of
                the sea.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲉⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ̀ⲛⲧⲉ ⲡⲉⲕ̀ⲙⲃⲟⲛ ⲁϥ̀ⲟϩⲓ
                ̀̀ⲉⲣⲁⲧϥ ̀ⲛϫⲉ ⲡⲓⲙⲱⲟⲩ: ⲁⲩϭⲓⲥⲓ ̀ⲛϫⲉ ⲛⲓⲙⲱⲟⲩ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲥⲟⲃⲧ: ⲁⲩϭⲱⲥ ̀ⲛϫⲉ ⲛⲓϫⲟⲗ ϧⲉⲛ ̀ⲑⲙⲏϯ ̀ⲙ̀ⲫⲓⲟⲙ.</td>
            <td class="arabic">وبروح غضبك وقف الماء. وارتفعت المياه مثل السور. وجمدت الأمواج في وسط البحر.</td>
        </tr>
        <tr id="table_4_row_9">
            <td class="coptic" style="border-right: 1px solid black;">The enemy said, "I will pursue, I will overtake, I
                will divide the spoil, my desire shall be satisfied on them, I will draw my sword, and my hand shall
                destroy them.”</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϫⲟⲥ ⲅⲁⲣ ̀ⲛϫⲉ ⲡⲓϫⲁϫⲓ ϫⲉ ϯⲛⲁϭⲟϫⲓ ̀ⲛⲧⲁⲧⲁϩⲟ: ̀ⲛⲧⲁⲫⲱϣ
                ̀ⲛϩⲁⲛϣⲱⲗ: ̀ⲛⲧⲁ̀ⲧⲥⲓⲟ ̀ⲛⲧⲁⲯⲩⲭⲏ: ̀ⲛⲧⲁϧⲱⲧⲉⲃ ϧⲉⲛ ⲧⲁⲥⲏϥⲓ: ̀ⲛϫⲉ ⲧⲁϫⲓϫ ⲉⲣϭⲟⲓⲥ.</td>
            <td class="arabic">قال العدو انى اسرع فادرك. واقسم الغنائم واشبع نفسى. واقتل بسيفى ويدى تتسلط.</td>
        </tr>
        <tr id="table_4_row_10">
            <td class="coptic" style="border-right: 1px solid black;">You blew with Your wind, the sea covered them,
                they sank like lead in the mighty waters.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲟⲩⲱⲣⲡ ̀ⲙⲡⲉⲕ̀ⲡⲛⲉⲩⲙⲁ ⲁϥϩⲟⲃⲥⲟⲩ ̀ⲛϫⲉ ̀ⲫⲓⲟⲙ: ⲁⲩⲱⲙⲥ
                ̀ⲉⲡⲉⲥⲏⲧ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲧⲁⲧϩ ϧⲉⲛ ϩⲁⲛⲙⲱⲟⲩ ⲉⲩⲟϣ.</td>
            <td class="arabic">وارسلت روحك فغطاهم البحر وغطسوا إلى أسفل كالرصاص فى مياه كثيرة.</td>
        </tr>
        <tr id="table_4_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Who is like You, O Lord, among the gods? Who is
                like You, glorified in his saints, amazing in glory, performing wonders?</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲙ ⲉⲧ̀ⲟⲛⲓ ̀ⲙⲙⲟⲕ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ Ⲡϭⲟⲓⲥ: ⲛⲓⲙ ⲉⲧ̀ⲟⲛⲓ
                ̀ⲙⲙⲟⲕ: ̀ⲉⲁⲩϯ̀ⲱⲟⲩ ⲛⲁⲕ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ̀̀ⲛⲧⲁⲕ: ⲉⲩⲉⲣ̀ϣⲫⲏⲣⲓ ̀ⲙⲙⲟⲕ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ : ⲉⲕ̀ⲓⲣⲓ ̀ⲛϩⲁⲛ̀ϣⲫⲏⲣⲓ.</td>
            <td class="arabic">من يشبهك فى الالهة يارب من يشبهك. ممجداً فى قديسيك متعجباً منك بالمجد . صانعاً عجائب.
            </td>
        </tr>
        <tr id="table_4_row_12">
            <td class="coptic" style="border-right: 1px solid black;">You stretched out Your right hand, the earth
                swallowed them. You, in Your mercy, have led forth the people whom You have redeemed. You have guided
                them, in Your strength, to Your holy habitation.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲥⲟⲩⲧⲉⲛ ⲧⲉⲕⲟⲩ̀ⲓⲛⲁⲙ ̀ⲉⲃⲟⲗ ⲁϥⲟⲙⲕⲟⲩ ̀ⲛϫⲉ ̀ⲡⲕⲁϩⲓ:
                ⲁⲕϭⲓⲙⲱⲓⲧ ϧⲁϫⲱϥ ̀ⲙⲡⲉⲕⲗⲁⲟⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲫⲁⲓ ̀ⲉⲧⲁⲕⲥⲟⲧⲡϥ: ⲁⲕϯϫⲟⲙ ⲛⲁϥ ϧⲉⲛ ⲧⲉⲕⲛⲟⲙϯ: ⲉⲩⲙⲁ ̀ⲛⲉⲙⲧⲟⲛ ̀ⲉϥⲟⲩⲁⲃ ⲛⲁⲕ.
            </td>
            <td class="arabic">مددت يمينك فابتلعتهم الأرض هديت شعبك بالحقيقة هذا الذى اخترته وقويته بتعزيتك. إلى موضع
                راحة قدسك.</td>
        </tr>
        <tr id="table_4_row_13">
            <td class="coptic" style="border-right: 1px solid black;">The people will hear and be afraid; sorrow will
                take hold of the inhabitants of Palestine.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲥⲱⲧⲉⲙ ̀ⲛϫⲉ ϩⲁⲛⲉⲑⲛⲟⲥ ⲟⲩⲟϩ ⲁϥϫⲱⲛⲧ: ϩⲁⲛⲛⲁⲕϩⲓ ⲁⲩϭⲓ
                ̀ⲛⲛⲏⲉⲧϣⲟⲡ ϧⲉⲛ Ⲛⲓⲫⲩⲗⲓⲥⲧⲓⲙ.</td>
            <td class="arabic">سمعت الامم وغضبت. والمخاض أخذ سكان فلسطين.</td>
        </tr>
        <tr id="table_4_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Then the chiefs of Edom will be dismayed, the
                mighty men of Moab, trembling, will take hold of them.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲟⲧⲉ ⲁⲩⲓⲏⲥ ̀ⲙⲙⲱⲟⲩ ̀ⲛϫⲉ ⲛⲓϩⲏⲅⲉⲙⲱⲛ ̀ⲛⲧⲉ Ⲉⲇⲟⲙ:
                ⲛⲓⲁⲣⲭⲱⲛ ̀ⲛⲧⲉ Ⲛⲓⲙⲱ̀ⲁⲃⲓⲧⲏⲥ ⲟⲩ̀ⲥⲑⲉⲣⲧⲉⲣ ⲡⲉ ̀ⲉⲧⲁϥϭⲓⲧⲟⲩ.</td>
            <td class="arabic">حينئذ أسرع ولاة أدوم. ورؤساء المؤابيين أخذتهم الرعدة.</td>
        </tr>
        <tr id="table_4_row_15">
            <td class="coptic" style="border-right: 1px solid black;">All the inhabitants of Canaan will melt away; fear
                and dread will fall on them.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲃⲱⲗ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϣⲟⲡ ϧⲉⲛ Ⲭⲁⲛⲁⲁⲛ: ⲁϥ̀ⲓ
                ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲟⲩ ̀ⲛϫⲉ ⲟⲩ̀ⲥⲑⲉⲣⲧⲉⲣ ⲛⲉⲙ ⲟⲩϩⲟϯ.</td>
            <td class="arabic">ذاب كل سـكان كنعان. وأتت عليهم الرعدة والخوف.</td>
        </tr>
        <tr id="table_4_row_16">
            <td class="coptic" style="border-right: 1px solid black;">By the greatness of Your arm, they will be as
                still as a stone, till Your people pass over, O Lord, till Your people pass over whom You have
                purchased.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ̀ⲡ̀ⲁϣⲁⲓ ̀ⲛⲧⲉ ⲡⲉⲕ̀ϫⲫⲟⲓ ⲙⲁⲣⲟⲩⲉⲣ̀ⲱⲛⲓ: ϣⲁⲧⲉϥⲥⲓⲛⲓ
                ̀ⲛϫⲉ ⲡⲉⲕⲗⲁⲟⲥ Ⲡϭⲟⲓⲥ ϣⲁⲧⲉϥⲥⲓⲛⲓ ̀ⲛϫⲉ ⲡⲉⲕⲗⲁⲟⲥ ⲫⲁⲓ ̀ⲉⲧⲁⲕ̀ϫⲫⲟϥ.</td>
            <td class="arabic">بكثرة ساعدك فليصيروا كالحجر. حتى يجتاز شعبك يارب حتى يجتاز شعبك هذا الذى اقتنيته.</td>
        </tr>
        <tr id="table_4_row_17">
            <td class="coptic" style="border-right: 1px solid black;">You will bring them in, and plant them in the
                mountain of Your inheritance, in the place, O Lord, which You have made for your own dwelling.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲓⲧⲟⲩ ̀ⲉϧⲟⲩⲛ ⲧⲟϫⲟⲩ ϩⲓϫⲉⲛ ⲟⲩⲧⲱⲟⲩ ̀ⲛⲧⲉ
                ⲧⲉⲕ̀ⲕⲗⲏⲣⲟⲛⲟⲙⲓ̀ⲁ: ⲛⲉⲙ ̀ⲉϧⲟⲩⲛ ̀ⲉⲡⲉⲕⲙⲁⲛϣⲱⲡⲓ ⲉⲧⲥⲉⲃⲧⲱⲧ: ⲫⲁⲓ ̀̀ⲉⲧⲁⲕⲉⲣϩⲱⲃ ̀ⲉⲣⲟϥ Ⲡϭⲟⲓⲥ.</td>
            <td class="arabic">ادخلهم واغرسهم على جبل ميراثك وفى مسكنك المعد هذا الذى صنعته يارب.</td>
        </tr>
        <tr id="table_4_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Your sanctuary, O Lord, which Your hands have
                established, the Lord shall reign forever and ever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕⲙⲁ ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲫⲏ̀ⲉⲧⲁⲩⲥⲉⲃⲧⲱⲧϥ ̀ⲛϫⲉ ⲛⲉⲕϫⲓϫ:
                Ⲡϭⲟⲓⲥ ⲉⲕⲟⲓ ̀ⲛⲟⲩⲣⲟ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ⲓⲥϫⲉⲛ ̀ⲡ̀ⲉⲛⲉϩ ⲟⲩⲟϩ ̀ⲉⲧⲓ.</td>
            <td class="arabic">موضعك المقدس يارب الذى أعددته يداك. يارب تملك منذ الازل والآن وإلى الابد.</td>
        </tr>
        <tr id="table_4_row_19">
            <td class="coptic" style="border-right: 1px solid black;">For the horses of Pharaoh went with his chariots
                and his horsemen into the sea.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩ̀ⲓ ̀ⲉϧⲟⲩⲛ ̀ⲉ̀ⲫⲓⲟⲙ ̀ⲛϫⲉ ⲛⲓ̀ϩⲑⲱⲣ ̀ⲛⲧⲉ Ⲫⲁⲣⲁ̀ⲱ
                ⲛⲉⲙ ⲛⲉϥⲃⲉⲣⲉϭⲱⲟⲩⲧⲥ ⲛⲉⲙ ⲛⲉϥϭⲁⲥⲓ̀ϩⲑⲟ.</td>
            <td class="arabic">لانه قد دخل إلى البحر خيل فرعون ومركباته وفرسانه.</td>
        </tr>
        <tr id="table_4_row_20">
            <td class="coptic" style="border-right: 1px solid black;">And the Lord brought back the waters of the sea on
                them, but the children of Israel went on dry land in the midst of the sea.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲀⲠϭⲟⲓⲥ ⲉⲛ ⲡⲓⲙⲱⲟⲩ ̀ⲛⲧⲉ ̀ⲫⲓⲟⲙ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲟⲩ:
                ⲛⲉⲛϣⲏⲣⲓ ⲇⲉ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ ⲛⲁⲩⲙⲟϣⲓ ϧⲉⲛ ⲡⲉⲧϣⲟⲩ̀ⲱⲟⲩ ϧⲉⲛ ̀ⲑⲙⲏϯ ̀ⲙ̀ⲫⲓⲟⲙ.</td>
            <td class="arabic">والرب غمرهم بماء البحر. أما بنو اسرائيل فكانوا يمشون على اليابسة فى وسط البحر .</td>
        </tr>
        <tr id="table_4_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Then Miriam the prophetess, the sister of Aaron,
                took the timbrel in her hand, and all the women went out after her with timbrels and with praises.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲥϭⲓ ⲇⲉ ⲛⲁⲥ ̀ⲛϫⲉ Ⲙⲁⲣⲓⲁⲙ ϯ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ̀ⲧⲥⲱⲛⲓ ̀ⲛⲀ̀ⲁⲣⲱⲛ
                ̀ⲙⲡⲓⲕⲉⲙⲕⲉⲙ ϧⲉⲛ ⲛⲉⲥϫⲓϫ: ⲟⲩⲟϩ ⲁⲩ̀ⲓ ̀ⲉⲃⲟⲗ ⲥⲁⲙⲉⲛϩⲏⲥ ̀ⲛϫⲉ ⲛⲓϩⲓⲟⲙⲓ ⲧⲏⲣⲟⲩ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ϩⲁⲛϩⲱⲥ.</td>
            <td class="arabic">فاخذت مريم النبيه اخت هرون الدف بيديها. وخرج فى إثرها جميع النسوة بالدفوف والتسابيح.</td>
        </tr>
        <tr id="table_4_row_22">
            <td class="coptic" style="border-right: 1px solid black;">And Miriam answered them saying, " Let us sing to
                the Lord for He has triumphed gloriously”.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲥⲉⲣϩⲏⲧⲥ ⲇⲉ ϧⲁϫⲱⲟⲩ ̀ⲛϫⲉ Ⲙⲁⲣⲓⲁⲙ ⲉⲥϫⲱ ̀ⲙⲙⲟⲥ: ϫⲉ
                ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ: ϫⲉ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ ⲅⲁⲣ ⲁϥϭⲓ̀ⲱⲟⲩ.</td>
            <td class="arabic">وبدأت مريم فى مقدمتهن تقول فلنسبـح الرب لانه بالمجد قد تمجد.</td>
        </tr>
        <tr id="table_4_row_23">
            <td class="coptic" style="border-right: 1px solid black;">The horse and its rider He has thrown into the
                sea, "Let us sing to the Lord for He has triumphed gloriously.”</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩ̀ϩⲑⲟ ⲛⲉⲙ ⲟⲩϭⲁⲥⲓ̀ϩⲑⲟ ⲁϥⲃⲉⲣⲃⲱⲣⲟⲩ ̀ⲉ̀ⲫⲓⲟⲙ: ϫⲉ
                ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲉⲠϭⲟⲓⲥ: ϫⲉ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ ⲅⲁⲣ ⲁϥϭⲓ̀ⲱⲟⲩ .</td>
            <td class="arabic">الفرس وراكب الفرس طرحهما فى البحر فلنسبح الرب لانه بالمجد قد تمجد.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_5" data-title="Your Table Title Here" onclick="toggleTable('table_5', this)">+
        Your Table Title Here</span>
    <table id="table_5" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_5_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Hymn of 1ST Hoos</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">لبش الهوس الأول</td>
            <td class="english"></td>
        </tr>
        <tr id="table_5_row_1">
            <td class="coptic" style="border-right: 1px solid black;">With the split, the waters of the sea split, And
                the very deep, became a walkway.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">ˉQ ⲉⲛ ⲟⲩϣⲱⲧ ⲁϥϣⲱⲧ : ̀ⲛϫⲉ ⲡⲓⲙⲱⲟⲩ ̀ⲛⲧⲉ ̀ⲫⲓⲟⲙ : ⲟⲩⲟϩ
                ̀ⲫⲛⲟⲩⲛ ⲉⲧϣⲏⲕ : ⲁϥϣⲱⲡⲓ ̀ⲛⲟⲩⲙⲁ̀ⲙⲙⲟϣⲓ.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">قطعاً إنقطع ماء البحر. والعمق العميق صار مسلكاً.</td>
        </tr>
        <tr id="table_5_row_2">
            <td class="coptic" style="border-right: 1px solid black;">A hidden earth, was shone upon by the sun, And the
                untrodden road, was walked upon.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲕⲁϩⲓ ̀ⲛⲁⲑⲟⲩⲱⲛϩ : ̀ⲁ̀ⲫⲣⲏ ϣⲁⲓ ϩⲓϫⲱϥ : ⲟⲩⲙⲱⲓⲧ
                ̀ⲛⲁⲧⲥⲓⲛⲓ : ⲁⲩⲙⲟϣⲓ ϩⲓⲱⲧϥ.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">أرض غير ظاهرة أشرقت الشمس عليها وطريق غير مسلوكه مشوا عليها.</td>
        </tr>
        <tr id="table_5_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The flowing water, stood still, by a miraculous,
                act of wonder.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲙⲱⲟⲩ ⲉϥⲃⲏⲗ ̀ⲉⲃⲟⲗ : ⲁϥ̀ⲟϩⲓ ̀ⲉⲣⲁⲧϥ : ϧⲉⲛ ⲟⲩϩⲱⲃ
                ̀ⲛϣⲫⲏⲣⲓ : ̀ⲙⲡⲁⲣⲁⲇⲟⲝⲟⲛ.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">ماء منحل وقف بفعل عجيب معجز.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_6" data-title="Your Table Title Here" onclick="toggleTable('table_6', this)">+
        Your Table Title Here</span>
    <table id="table_6" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_6_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Pharaoh and his chariots, were drowned, and the
                children of Israel, crossed the sea.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲣⲁ̀ⲱ ⲛⲉⲙ ⲛⲉϥϩⲁⲣⲙⲁ : ⲁⲩⲱⲙⲥ ̀ⲉⲡⲉⲥⲏⲧ: ⲛⲉⲛϣⲏⲣⲓ
                ̀ⲛⲠⲓⲥⲣⲁⲏⲗ : ⲁⲩⲉⲣϫⲓⲛⲓⲟⲣ ̀ⲙ̀ⲫⲓⲟⲙ .</td>
            <td class="arabic">غرق فرعون ومركباته وعـبر بنو اسرئيل البحر.</td>
        </tr>
        <tr id="table_6_row_1">
            <td class="coptic" style="border-right: 1px solid black;">And in front of them, was Moses the prophet
                praising, until he brought them to, the wilderness of Sinai.</td>
            <td class="coptic" style="border-right: 1px solid black;">˙Ⲉⲛⲁⲩϩⲱⲥ ϧⲁϫⲱⲟⲩ ⲡⲉ : ̀ⲛϫⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ :
                ϣⲁ̀ⲛⲧⲉϥϭⲓⲧⲟⲩ ̀ⲉϧⲟⲩⲛ : ϩⲓ ̀ⲡϣⲁϥⲉ ̀ⲛⲤⲓⲛⲁ.</td>
            <td class="arabic">وكان موسى النبى يسبح قدامهم حتى ادخلهم بريـه سيناء.</td>
        </tr>
        <tr id="table_6_row_2">
            <td class="coptic" style="border-right: 1px solid black;">And they were praising God, with this new
                psalmody, Saying, "Let us sing to the Lord, For He has triumphed gloriously."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲛⲁⲩϩⲱⲥ ̀ⲉⲪϯ : ϧⲉⲛ ⲧⲁⲓϩⲱⲇⲉ ̀ⲙⲡⲓⲃⲉⲣⲓ : ϫⲉ ⲙⲁⲣⲉⲛϩⲱⲥ
                ̀ⲉⲠϭⲟⲓⲥ : ϫⲉ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ ⲅⲁⲣ ⲁϥϭⲓ̀ⲱⲟⲩ.</td>
            <td class="arabic">وكانوا يسبحون الله بهذه التسبحة الجديدة فلنسبح الرب لانه بالمجد قد تمجد.</td>
        </tr>
        <tr id="table_6_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Through the prayers of, Moses the Archprophet, O
                Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ ̀ⲛⲧⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲡⲓⲁⲣⲭⲏ̀ⲡⲣⲟⲫⲏⲧⲏⲥ : Ⲡϭⲟⲓⲥ
                ̀ⲁⲣⲓ̀ϩⲙⲟⲧ ⲛⲁⲛ ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ</td>
            <td class="arabic">بصلوات موسى رئيس الأنبياء يارب أنعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_6_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Through the intercessions, of the Mother of God,
                Saint Mary, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲓ̀ⲡⲣⲉⲥⲃⲓⲁ ̀ⲛⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ :
                Ⲡϭⲟⲓⲥ ̀ⲁⲣⲓ̀ϩⲙⲟⲧ ⲛⲁⲛ ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بشفـاعات والدة الاله القديسة مريم يارب انعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_6_row_5">
            <td class="coptic" style="border-right: 1px solid black;">We worship You O Christ, with Your Good Father,
                and the Holy Spirit, for You have come and saved us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲙⲟⲕ ̀ⲱⲠⲓⲬⲣⲓⲥⲧⲟⲥ ⲛⲉⲙ ⲡⲉⲕⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ:
                ⲛⲉⲙ ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ̀ⲉⲑⲟⲩⲁⲃ : ϫⲉ ⲁⲕ̀ⲓ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ.</td>
            <td class="arabic">نسجد لك أيها المسيح مع أبيك الصالح والروح القدس لانك أتيت وخلصتنا.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_7" data-title="Your Table Title Here" onclick="toggleTable('table_7', this)">+
        Your Table Title Here</span>
    <table id="table_7" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_7_row_0">
            <td class="coptic" style="border-right: 1px solid black;">The Lord said to Moses,
                Tell your people to depart
                Lift up your rod over the sea
                And they shall find an entrance</td>
            <td class="arabic">قال الرب لموسىقل لشعبك هو يرحلاضرب البحر بالعصاينفتح لك فيه مدخل.</td>
        </tr>
        <tr id="table_7_row_1">
            <td class="coptic" style="border-right: 1px solid black;">So Moses rose at night
                Hit the sea with the rod
                And Israel went on dry ground Through the midst of the sea</td>
            <td class="arabic">فقام موسي بالليلوضرب البحر بسرعةفانفتح فيه درب طويلوطريق متسعة.</td>
        </tr>
        <tr id="table_7_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The sea was divided in half
                And they departed together
                And they walked on ground
                At the bottom of the sea</td>
            <td class="arabic">فانشق البحر نصفينوعبروا جملة سويةوصاروا فيه ماشيينعلي الأرض السفلية.</td>
        </tr>
        <tr id="table_7_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The pillar of fire was a guide Throughout the way
                Before the children of Israel
                To illuminate their path</td>
            <td class="arabic">وعامود النور دليلللطريق يدل بهممن قدام آل إسرائيلوبنوره شاملهم.</td>
        </tr>
        <tr id="table_7_row_4">
            <td class="coptic" style="border-right: 1px solid black;">They walked on ground and rocks
                In the midst of the sea
                And the waters were a high wall
                On their right hand and their left</td>
            <td class="arabic">داسوا علي الباج والصخورفي وسط قاع البحروالمياه كمثل السورالعالى يمين ويسار.</td>
        </tr>
        <tr id="table_7_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Pharaoh dared and entered
                With his horses after them
                Chariots and horsemen
                Were chasing them</td>
            <td class="arabic">دخل فرعون وتجاسربخيوله في أثرهمومعه كل عساكربعبيده يطاردهم.</td>
        </tr>
        <tr id="table_7_row_6">
            <td class="coptic" style="border-right: 1px solid black;">The pillar of cloud went before them
                And separated the two camps
                And Pharaoh was in darkness
                And his servants could not see</td>
            <td class="arabic">فأتاهم عامود الغماموحجز بين الصفينفبقي فرعون في ظلاموعبيده مطموسين.</td>
        </tr>
        <tr id="table_7_row_7">
            <td class="coptic" style="border-right: 1px solid black;">The Egyptians said
                Let us flee from them
                Before the children of Israel
                For the Lord fights for them</td>
            <td class="arabic">قال المصريوننحن نهرب منهممن قدام آل إسرائيلالرب يحارب عنهم.</td>
        </tr>
        <tr id="table_7_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The Lord said to Moses
                Stretch your hand over the sea
                That the waters may come again
                Upon the Egyptians</td>
            <td class="arabic">قال الرب لموسىاضرب البحر ردهفضرب البحر بالعصارجع الماء إلي أصله.</td>
        </tr>
        <tr id="table_7_row_9">
            <td class="coptic" style="border-right: 1px solid black;">The chariots of Pharaoh
                Drowned in the midst of the sea
                And his servants died
                And the darkness blocked their sight</td>
            <td class="arabic">فانقلبت بكرات فرعونوغطسوا في وسط المياهوعبيده انطمسواوعمتهم الظلمة.</td>
        </tr>
        <tr id="table_7_row_10">
            <td class="coptic" style="border-right: 1px solid black;">A vicious storm began
                In the midst of the high sea
                The waves and tides relapsed
                And the waters shut and closed</td>
            <td class="arabic">فثار عاصف بعجاجهفي وسط البحر هاجهوانطبقت أمواجهورجع الماء إلى أصله.</td>
        </tr>
        <tr id="table_7_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Pharaoh surely drowned
                Along with all his horsemen
                None remained of them
                And settled at the bottom of the sea</td>
            <td class="arabic">غطس فرعون وغاصوعساكره الكل معاهوصاروا الجميع كالرصاصورسخوا في قاع المياه.</td>
        </tr>
        <tr id="table_7_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The sun shined at that time
                When this monster drowned
                And Israel was courageous
                Crossed the sea and walked</td>
            <td class="arabic">أشرقت الشمس تلك الساعةحين غرق ذاك الجبارواسرائيل صار في شجاعةعبر البحر وسار.</td>
        </tr>
        <tr id="table_7_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Joyfully they crossed the sea
                Walking on ground and rocks
                They almost flew like eagles
                And descended on top of the mount</td>
            <td class="arabic">جازوا البحر بسرورماشيين علي الباج والصخوروطاروا مثل النسورونزلوا علي أعلى الطور.</td>
        </tr>
        <tr id="table_7_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Then Moses praised the Lord
                Along with the children of Israel
                With all the ranks and chiefs
                Singing a joyful song</td>
            <td class="arabic">حينئذ سبح موسىوجماعة إسرائيلومعه كل الرؤساءبالتسابيح والتهليل.</td>
        </tr>
        <tr id="table_7_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Moses and the Israelites
                Spoke in one tongue saying
                Let us sing to the Lord
                For He has triumphed gloriously</td>
            <td class="arabic">وكان موسي والشعبيقولون بفم واحدتعالوا نسبح الربلأنه بالمجد تمجد.</td>
        </tr>
        <tr id="table_7_row_16">
            <td class="coptic" style="border-right: 1px solid black;">The horsemen and the chariots
                Were thrown in the Red Sea
                And Israel was saved
                From shame and humiliation</td>
            <td class="arabic">الخيل وركاب الخيلطرحهم في البحر الأحمروخلص اسرائيلمن الذلة والعار.</td>
        </tr>
        <tr id="table_7_row_17">
            <td class="coptic" style="border-right: 1px solid black;">This is the Lord my God
                I glorify His Great Name
                This is the Lord my God
                Maker of all great things</td>
            <td class="arabic">هذا هو إلهىأمجد اسمه دائمهذا هو إله آبائىصانع كل عظائم.</td>
        </tr>
        <tr id="table_7_row_18">
            <td class="coptic" style="border-right: 1px solid black;">He abolished the army by His Might
                The Lord God is honored
                Pharaoh and his horsemen
                Drowned in the sea</td>
            <td class="arabic">حطم الجيش بجبروتهالرب اسمه مكرمفرعون وقواتهآففيرفورو إإفيوم</td>
        </tr>
        <tr id="table_7_row_19">
            <td class="coptic" style="border-right: 1px solid black;">The best of his horsemen
                Drowned in the midst of the sea
                And all his warriors
                At the bottom of the sea settled</td>
            <td class="arabic">خيار فرسانه الثلاثيةفي وسط البحر غطستوعساكره الحربيةفي قاع المياه رسخت</td>
        </tr>
        <tr id="table_7_row_20">
            <td class="coptic" style="border-right: 1px solid black;">The waters covered them
                And were taken to the depths
                As you cast stones
                And the waters shut them in and closed</td>
            <td class="arabic">وغطتهم المياهوغطسوا في الأعماقمثل حجر ورماهوالبحر عليهم ضاق</td>
        </tr>
        <tr id="table_7_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Your Mighty Right Hand, O Lord
                Is glorified by Its actions
                Your Mighty Right Hand, O Lord
                Destroyed all its enemies</td>
            <td class="arabic">يمينك ياربىتمجدت بقواهايمينك يا إلهىأهلكت كل أعداها.</td>
        </tr>
        <tr id="table_7_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Who is like You, O God
                Among the other gods
                You are glorified in Your saints
                Who marvel at You</td>
            <td class="arabic">من يشبهك في الآلهةياربي من مثلكممجد في قديسيكيتعجبون منك.</td>
        </tr>
        <tr id="table_7_row_23">
            <td class="coptic" style="border-right: 1px solid black;">You have stretched Your hands
                And the sea swallowed them
                You led Your people by Your justice
                To the place of rest</td>
            <td class="arabic">بسطت يدكوالأرض ابتلعتهموبالعدل هديت شعبكإلى موضع راحتهم.</td>
        </tr>
        <tr id="table_7_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Miriam, Aaron's sister,
                Took a timbrel in her hands
                And all the women went out after her
                With timbrels and dances</td>
            <td class="arabic">فأخذت مريم أخت هارونالدف بيديهاوالنسوة معها يغنونبطبولهم حواليها.</td>
        </tr>
        <tr id="table_7_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Miriam, the prophetess,
                Sang before them and said
                And the women along with her
                Playing the cymbals and timbrel</td>
            <td class="arabic">فبدأت مريم النبيةتغني قدام وتقولوالنسوة معها سويةيدقون صنوجاً مع طبول.</td>
        </tr>
        <tr id="table_7_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Singing a joyful song
                Saying in one voice
                Let us praise the Lord
                For He triumphed gloriously</td>
            <td class="arabic">يغنون بغناء يطربويقولون بفم واحدتعالوا نسبح الربلأنه بالمجد تمجد</td>
        </tr>
        <tr id="table_7_row_27">
            <td class="coptic" style="border-right: 1px solid black;">The chariots and the horsemen
                Were drowned in the Red Sea
                What a great joy for Israel
                For their salvation from the Egyptians</td>
            <td class="arabic">الخيل وركاب الخيلطرحهم في البحر الأحمريا فرحة إسرائيلبخلاصه من الكفار.</td>
        </tr>
        <tr id="table_7_row_28">
            <td class="coptic" style="border-right: 1px solid black;">The waters of the sea split
                And the very deep became a walkway
                And Moses crossed in it
                But the enemy fell to their damnation</td>
            <td class="arabic">بالقطع انقطع ماء البحروالأعماق صارت مسلكوموسي فيها عبروالعدو سقط في مهلك.</td>
        </tr>
        <tr id="table_7_row_29">
            <td class="coptic" style="border-right: 1px solid black;">An unseen ground
                The sun shined upon it
                A path which was covered
                They walked on it</td>
            <td class="arabic">أرض غير منظورةأشرقت الشمس عليهاوطريق مستورةافموشي هيوتف.</td>
        </tr>
        <tr id="table_7_row_30">
            <td class="coptic" style="border-right: 1px solid black;">The liquid water stood
                Before Moses and Aaron
                In a marvelous way
                Miraculously</td>
            <td class="arabic">الماء السائل وقفقدام موسي وهارونبعجب لا يوصفأووه أمباراذوكسون.</td>
        </tr>
        <tr id="table_7_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Pharaoh and his horsemen drowned;
                In the bottom of the sea
                And Israel crossed away
                Through the Red Sea</td>
            <td class="arabic">فرعون ومركباته غطسواأسفل في القاع في اليموبنوا اسرائيل عبرواناف جين يور ام افيوم.</td>
        </tr>
        <tr id="table_7_row_32">
            <td class="coptic" style="border-right: 1px solid black;">And Moses praised before them
                Till they reached the harbor
                In peace and happiness
                In the wilderness of Sinai</td>
            <td class="arabic">وكان موسي يسبح قداموطلعوا من الميناإلي حين وصلوا بسلامهي ابشا في انسينا.</td>
        </tr>
        <tr id="table_7_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Be strengthened in faith
                O you who believe in Christ
                And praise the joy of the world
                Maria- Ti Parthenos</td>
            <td class="arabic">تقو بالإيمانيا من تؤمن بإيسوسوامدح بهجة الأكوانماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Begin by signing yourself
                With the sign of the Cross
                And praise at all times
                Maria- Ti Parthenos</td>
            <td class="arabic">بادر وارشم ذاتكبعلامة بى استافروسوامدح كل أوقاتكماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Repent from doing evil
                And hold on to the Law
                And praise at all times
                Maria- Ti Parthenos</td>
            <td class="arabic">تب عن فعل الزلاتوتمسك بالناموسوأمدح كل الأوقاتماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Gabriel, who was sent, came
                From the Holy Father
                He announced to the Virgin
                Maria- Ti Parthenos</td>
            <td class="arabic">جبرائيل أتي مرسولمن عند الآب القدوسبشر عذراء وبتولماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_37">
            <td class="coptic" style="border-right: 1px solid black;">When he told her, she accepted
                The tidings of the angel
                And with the Spirit of God, she conceived
                Maria-Ti Parthenos</td>
            <td class="arabic">حين بشرها قبلتبشارة بي أنجيلوسوبروح الله حملتماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_38">
            <td class="coptic" style="border-right: 1px solid black;">The salvation of the human race
                And of the entire world
                From the pure Virgin
                Maria- Ti Parthenos</td>
            <td class="arabic">خلاص البشريةوسائر بي كوسموسمن بكر نقيةماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_39">
            <td class="coptic" style="border-right: 1px solid black;">They called you many names
                You are called righteous
                O, you the holy saint
                Maria- Ti Parthenos</td>
            <td class="arabic">دعوك ذو الألبابسيموتى إيروذيكيئوساوثي إثؤابماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_40">
            <td class="coptic" style="border-right: 1px solid black;">The Lord of Glory chose you
                According to the Psalmist
                With His Holy Spirit adorned you
                Maria-Ti Parthenos</td>
            <td class="arabic">رب المجد اختارككاتا إبساجي إم بي هيمنودوسوبروح قدسه زانكماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_41">
            <td class="coptic" style="border-right: 1px solid black;">The Divine Light adorned you
                With the dwelling of my Lord
                Jesus The One from the Trinity
                Maria-Ti Parthenos</td>
            <td class="arabic">زانك نور اللاهوتبحلول باشويس إيسوسالواحد من الثالوثماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_42">
            <td class="coptic" style="border-right: 1px solid black;">They called you the censer
                Made of pure gold
                And a famous tabernacle
                Maria-Ti Parthenos</td>
            <td class="arabic">سموك تي شوريإننوب انكاثاروسوقبة مشهورةماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_43">
            <td class="coptic" style="border-right: 1px solid black;">You bore the Son of Righteousness
                In your womb, O Virgin and bride
                Who received what you have received
                Maria-Ti Parthenos</td>
            <td class="arabic">شمس البر حملتفي أحشاك يابكر عروسمن نال شبه ما نلتماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_44">
            <td class="coptic" style="border-right: 1px solid black;">Zephaniah proclaimed
                About the birth of Christ
                That He will descend as dew and rain
                Maria-Ti Parthenos</td>
            <td class="arabic">صوفونيوس خبرعن ميلاد بي إخرستوسانه ينزل كندي ومطرماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_45">
            <td class="coptic" style="border-right: 1px solid black;">The Pantocrator
                The Life-giver of all people
                You gave birth to the Son of Man
                Maria-Ti Parthenos</td>
            <td class="arabic">ضابط كل الأكوانومحيي كل النفوسحملته شبه انسانماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_46">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you, O Mother of God
                Blessed are you, O Mother of The Holy
                You are of the seed of David
                Maria- Ti Parthenos</td>
            <td class="arabic">طوباك ياأم المعبودطوباك ياأم القدوسيانسل الأب داودماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_47">
            <td class="coptic" style="border-right: 1px solid black;">From you the Divine appeared
                Christ the King of glory
                United with Humanity
                Maria- Ti Parthenos</td>
            <td class="arabic">ظهر منك اللاهوتملك المجد بى اخريستوسمتحدا بالناسوتماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_48">
            <td class="coptic" style="border-right: 1px solid black;">On you we have hoped
                And we ask you, O Mother of Jesus
                Do not forsake us
                Maria- Ti Parthenos</td>
            <td class="arabic">عليك توكلناونسألك ياأم ايسوسلا تتخلى عناماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_49">
            <td class="coptic" style="border-right: 1px solid black;">Your praise is precious and pleasant
                Above the whole world
                Your honor increased greatly
                Maria- Ti Parthenos</td>
            <td class="arabic">غلى مدحك وحليعن سائر بي كسموسوقدرك زاد وعليماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_50">
            <td class="coptic" style="border-right: 1px solid black;">You are exceedingly higher
                Than the righteous fathers
                And surpassed all measures
                Maria- Ti Parthenos</td>
            <td class="arabic">فقت الآباء والأبرارني إثمي نيم ني ذيكيئوسوعليت فوق المقدارماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_51">
            <td class="coptic" style="border-right: 1px solid black;">Everlasting and worshipped
                Unique in essence and Holy
                He chose the daughter of David Maria-Ti Parthenos</td>
            <td class="arabic">قديم أزلي معبودواحد بالذات قدوساختار ابنة داودماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_52">
            <td class="coptic" style="border-right: 1px solid black;">You are the Mother of Christ
                And to all the world
                You are truly declared
                Maria- Ti Parthenos</td>
            <td class="arabic">كوني لي يا أم ايسوسولسائر بي كوسموسعند الصوت المسموعماريا تي بارثينوس</td>
        </tr>
        <tr id="table_7_row_53">
            <td class="coptic" style="border-right: 1px solid black;">Without you who could have
                Witnessed the glory of Christ
                When He appeared In the world
                Maria- Ti Parthenos</td>
            <td class="arabic">لولاك من كان يقدريعاين مجد ايسوسبين العالم منذ ظهرماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_54">
            <td class="coptic" style="border-right: 1px solid black;">Moses desired to see Him
                The face of the Holy God
                He couldn't see a glance of His Light
                Maria- Ti Parthenos</td>
            <td class="arabic">موسي قصد أن يريوجه الرب القدوسفما طاق من نوره ثقب إبرةماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_55">
            <td class="coptic" style="border-right: 1px solid black;">We ask you to guide us
                To please the Holy Lord
                So He may lead us to the city
                Maria- Ti Parthenos</td>
            <td class="arabic">نسألك أن تهديناإلي رضا الرب القدوسليوصلنا إلي الميناماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_56">
            <td class="coptic" style="border-right: 1px solid black;">You became a pure sanctuary
                For the dwelling of my Lord Jesus
                And in your womb, you did carry
                Maria- Ti Parthenos</td>
            <td class="arabic">هيكلا طاهر صرتلحلول باشويس ايسوسوفي أحشاك حملتماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_57">
            <td class="coptic" style="border-right: 1px solid black;">He drank the milk of your paps
                The Creator of all lives
                You carried Him in your bosom
                Maria- Ti Parthenos</td>
            <td class="arabic">ورضع من لبن ثدييكمحيى كل النفوسوحملتيه بين يديكماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_58">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget, O Mary;
                The Christian people
                Before the Great God
                Maria- Ti Parthenos</td>
            <td class="arabic">لا تنسى يا مريمشعب إن ني إخريستيانوسبالميلاد الأعظمماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_59">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, help us
                Before Jesus Christ
                To lead us to the harbor
                Maria- Ti Parthenos</td>
            <td class="arabic">يا مريم أعينينانرجوك قدام إيسوسأن يوصلنا إلي الميناماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_60">
            <td class="coptic" style="border-right: 1px solid black;">Hail to the Virgin Mary
                Mother of Jesus Christ
                Through her we gain victory
                Maria- Ti Parthenos</td>
            <td class="arabic">وسلامي إلى العذراءإثماف إن إيسوس بخرستوسوبها نلنا النصرةماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_61">
            <td class="coptic" style="border-right: 1px solid black;">Hail to Saint Mary
                Ti Theotokos
                The pride of the whole world
                Maria- Ti Parthenos</td>
            <td class="arabic">وسلامي إلى مريمتى ثيؤطوكوسفخر جميع العالمماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_62">
            <td class="coptic" style="border-right: 1px solid black;">Peace be to the people;
                Who are present with us
                To be saved and redeemed
                Maria- Ti Parthenos</td>
            <td class="arabic">وسلامى إلى الحضارومن فى الجمع جلوسينجون من حر الناربصلاة تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_63">
            <td class="coptic" style="border-right: 1px solid black;">I conclude my words with
                Praising the mother of God
                Mary, the gate of Heaven
                Maria- Ti Parthenos</td>
            <td class="arabic">وأختم قولي يااخوةبمدح تى ثيؤطوكوسمريم باب السماماريا تى بارثينوس</td>
        </tr>
        <tr id="table_7_row_64">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, I’m your servant
                Baptized in the name of your Son
                You gave me a promise
                I ask you to fulfill</td>
            <td class="arabic">+ يا مريم أنا عبدكموسوم باسم ولدكوعدتيني بوعدكوبحقك توفينى</td>
        </tr>
        <tr id="table_7_row_65">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, by your prayers
                And your chaste purity
                And your virtuous life
                Put me in Paradise</td>
            <td class="arabic">يا مريم بحياتكوحسن طهارتكأنقليني بصلاتكإلي موضع يرضينى</td>
        </tr>
        <tr id="table_7_row_66">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, you are my crown
                My honor among the crowd
                Praising you among my guests
                Cools and quenches me</td>
            <td class="arabic">يا مريم تاج رأسيياعزى بين ناسىمدحك بين جلاسيكزلال ماء يروينى</td>
        </tr>
        <tr id="table_7_row_67">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, I'm carrying
                A heavy burden
                My trust in you
                To help me O, my pride</td>
            <td class="arabic">يا مريم ثقل حملىمن فوق رأسى وعلىلكن ما خاب أملي فيكياعمدة ديني</td>
        </tr>
        <tr id="table_7_row_68">
            <td class="coptic" style="border-right: 1px solid black;">I'm running out of time
                Unaware and forgetting
                While Satan is offering
                Many attractive traps</td>
            <td class="arabic">يامريم دهري فاتوأنا تائه في غفلاتوإبليس حسن لي آفاتوحلاها في عيني</td>
        </tr>
        <tr id="table_7_row_69">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, I've seen his deeds
                Attractive and very sweet
                He calls on me to the treat
                I've not lost hope yet</td>
            <td class="arabic">يا مريم رأيت شغلهكأنه شهد بعسلهوبلغ في أملهأنا ما خاب يقينى</td>
        </tr>
        <tr id="table_7_row_70">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, I am concerned
                With this heavy load
                Do not let me stray
                I want to repent and live</td>
            <td class="arabic">+ يا مريم زاد هميمن فوق رأسي وعليورجعت إلي الندمهل ندمي يحيينى</td>
        </tr>
        <tr id="table_7_row_71">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, your mystery revealed
                The hidden became declared
                The judge dwelt in your womb
                Let Him forgive me</td>
            <td class="arabic">يا مريم سرك بانوالمخفي صار معلنوسكن فيك الديانوعتق المسكين</td>
        </tr>
        <tr id="table_7_row_72">
            <td class="coptic" style="border-right: 1px solid black;">My hope is you, O Mary
                Intercede to your Holy Son
                To grant me forgiveness
                And let Jesus strengthen me</td>
            <td class="arabic">يا مريم ظني فيكشفاعة عند ابنكطول عمري أرجوكعند يسوع تقوينى</td>
        </tr>
        <tr id="table_7_row_73">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, I request of you
                To clear me of my dues
                For you are my medicine
                Your prayers cure me</td>
            <td class="arabic">يا مريم طالبونيبوفاء ثقل ديونىوأنت طب عيونىبصلاتك جيرينى</td>
        </tr>
        <tr id="table_7_row_74">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, you are an ointment
                To heal the greatest cut
                You are always favored
                For you enlightened my heart</td>
            <td class="arabic">يامريم أنت مرهميبرئ الجرح الأعظموجميلك متقدمحين نورت عيني</td>
        </tr>
        <tr id="table_7_row_75">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, I plead you to keep
                Your promise and guide me
                For the time is at hand
                To reach the harbor in peace</td>
            <td class="arabic">يا مريم أوفي الميعادجئتك مشمول برشادودنا الوقت وعادحتي نصل المينا</td>
        </tr>
        <tr id="table_7_row_76">
            <td class="coptic" style="border-right: 1px solid black;">Abraham, Isaac and Jacob
                All desired the Lord
                His covenant was from you
                A mystery now revealed</td>
            <td class="arabic">+ ابراهيم واسحقويعقوب له مشتاقأخذ منك الميثاقسر خفي صار مجهر</td>
        </tr>
        <tr id="table_7_row_77">
            <td class="coptic" style="border-right: 1px solid black;">This is my happiness
                To rejoice in fulfilling my promise
                For your praise is an enjoyment
                As a medicine which heals</td>
            <td class="arabic">هذا كان من سعدىأفرح بوفاء وعدىفإن مدحك عندىيحييني كدواء شافى</td>
        </tr>
        <tr id="table_7_row_78">
            <td class="coptic" style="border-right: 1px solid black;">The fathers and the brethren
                The pious and religious
                Save them from tribulation
                And help my abject self</td>
            <td class="arabic">والآباء والإخوةأهل الدين والتقوىخلصيهم من بلوىوأنا عبدك نجينى</td>
        </tr>
        <tr id="table_7_row_79">
            <td class="coptic" style="border-right: 1px solid black;">Our Pope the Patriarch
                A good and honest shepherd
                Grant him a long life
                For his honor pleases me</td>
            <td class="arabic">+ والأب بطريركناراعي صالح وأمينأعطيه يارب سنيندا مقامه يرضيني</td>
        </tr>
        <tr id="table_7_row_80">
            <td class="coptic" style="border-right: 1px solid black;">O Holy Trinity,
                have mercy on us.</td>
            <td class="arabic">أيها الثالوث القدوس
                أرحمنا</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_8" data-title="Your Table Title Here" onclick="toggleTable('table_8', this)">+
        Your Table Title Here</span>
    <table id="table_8" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_8_row_0">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Everyone praises You, And worships You, O Holy ...
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ ⲛⲁⲕ: ⲟⲩⲟϩ ⲥⲉⲉⲣⲃⲱⲕ ⲛⲁⲕ: ̀ⲁⲅⲓ̀ⲁ...
            </td>
            <td class="arabic">كل أحد يسبحك:
                ويتعبد لكأيها …</td>
        </tr>
        <tr id="table_8_row_2">
            <td class="coptic" style="border-right: 1px solid black;">For You are our God,
                And our Great Savior, O Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲅⲉ ⲅⲁⲣ ̀ⲛⲑⲟⲕ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲡⲓⲛⲓϣϯ: ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">لأنك أنت إلهنا : ومخلصنا العظيم أيها ...</td>
        </tr>
        <tr id="table_8_row_3">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The Master Lord , He came and saved us, O Holy …
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲉⲥⲡⲟⲩⲇⲉ ⲕⲩⲣⲓⲟⲛ : ⲁϥ̀ⲓⲁϥⲥⲱϯ ̀ⲙⲙⲟⲛ : ̀ⲁⲅⲓ̀ⲁ ...
            </td>
            <td class="arabic">السيد الرب : أتى وخلصناأيها ...</td>
        </tr>
        <tr id="table_8_row_5">
            <td class="coptic" style="border-right: 1px solid black;">For the sake of Your true judgments, Teach me Your
                justice, O Holy …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲛⲉⲕϩⲁⲡ ̀ⲙⲙⲏⲓ: ⲙⲁ̀ⲧⲥⲁⲃⲟⲓ ̀ⲉⲛⲉⲕⲙⲉⲑⲙⲏⲓ: ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">من أجل أحكامك : الحقيقية علمنى عدلك أيها ...</td>
        </tr>
        <tr id="table_8_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Many are Your mercies, Grant us Your salvation, O
                Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲍⲉⲟϣ ⲡⲉ ⲡⲉⲕⲛⲁⲓ : ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ : ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">كثيرة هى رحمتك: تعهدنا بخلاصكأيها ...</td>
        </tr>
        <tr id="table_8_row_7">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_8">
            <td class="coptic" style="border-right: 1px solid black;">I am here before You,
                I took refuge in You, O Holy …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲏⲥ ϩⲏⲡⲡⲉ ̀ⲁⲛⲟⲕ: ⲉⲓ̀ⲉⲫⲱⲧ ϩⲁⲣⲟⲕ: ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">هوذا أنا : التجأت إليكأيها ...</td>
        </tr>
        <tr id="table_8_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Yours is the power and glory, O King of glory, O
                Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓ̀ⲱⲟⲩ: ̀ⲱ ⲡⲓⲟⲩⲣⲟ ̀ⲛⲧⲉ ̀ⲡ̀ⲱⲟⲩ:
                ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">لك القوة والمجد:
                ياملك المجدأيها ...</td>
        </tr>
        <tr id="table_8_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Jesus is our hope, In our tribulations, O Holy ...
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲓⲏⲥⲟⲩⲥ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: ϧⲉⲛ ⲛⲉⲛ̀ⲑⲗⲩⲯⲓⲥ : ̀ⲁⲅⲓ̀ⲁ ...
            </td>
            <td class="arabic">يسوع هو رجاؤنا: في شدائدناأيها ...</td>
        </tr>
        <tr id="table_8_row_11">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_12">
            <td class="coptic" style="border-right: 1px solid black;">You are blessed O Son of God, Deliver us from
                temptations, O Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ : ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ:
                ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">تباركت ياابن الله: نجنا من التجارب أيها ...</td>
        </tr>
        <tr id="table_8_row_13">
            <td class="coptic" style="border-right: 1px solid black;">All nations praise You,
                O Christ the King, O Holy …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ ⲛⲁⲕ: ̀ⲱ ̀ⲡⲟⲩⲣⲟ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">كل الشعوب تسبحك: أيها الملك المسيحأيها ...</td>
        </tr>
        <tr id="table_8_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Grant us Your peace, Heal our sickness, O Holy ...
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲟⲓ ⲛⲁⲛ ̀ⲛⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲙⲁⲧⲁⲗϭⲟ ̀ⲛⲛⲉⲛϣⲱⲛⲓ : ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">أعطينا سلامك : إشف أمراضنا أيها ...</td>
        </tr>
        <tr id="table_8_row_15">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_16">
            <td class="coptic" style="border-right: 1px solid black;">You are the compassionate, And You are the
                Merciful, O Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲟⲕ ⲟⲩⲣⲉϥϣⲉⲛϩⲏⲧ: ⲟⲩⲟϩ ̀ⲛⲛⲁⲏⲧ : ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">انت المتحنن: وانت الرحومأيها ...</td>
        </tr>
        <tr id="table_8_row_17">
            <td class="coptic" style="border-right: 1px solid black;">You are blessed, We praise and bless You, O Holy
                ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲝⲙⲁⲣⲱⲟⲩⲧ ̀ⲛⲑⲟⲕ: ⲧⲉⲛϩⲱⲥ ⲛⲁⲕ ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟⲕ : ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">تباركت أنت: نسبحك ونباركك أيها ...</td>
        </tr>
        <tr id="table_8_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Truly great, Is the Just Judge, O Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲛⲓϣϯ ̀ⲛⲧⲁⲫⲙⲏⲓ: ⲡⲓⲣⲉϥϯϩⲁⲡ ̀ⲙⲙⲏⲓ:  ̀ⲁⲅⲓ̀ⲁ ...
            </td>
            <td class="arabic">عظيم بالحقيقة : الديان العادلأيها ...</td>
        </tr>
        <tr id="table_8_row_19">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ  ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Your Name is blessed, O the True Logos (Word), O
                Holy...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕⲣⲁⲛ ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ : ⲱ ⲡⲓⲗⲟⲅⲟⲥ ̀ⲛⲧⲁⲫⲙⲏⲓ : ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">اسمك مبارك: أيها الكلمة الحقيقي أيها ...</td>
        </tr>
        <tr id="table_8_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Guard us, O Christ, With Your Goodness, O Holy ...
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲱⲓⲥ ̀ⲉⲣⲟⲛ ̀ⲱ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧ̀ⲁⲅⲁⲑⲟⲥ :
                ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">أحرسنا أيها المسيح: بصلاحك أيها ...</td>
        </tr>
        <tr id="table_8_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Hearken unto the sinners, In their tribulations, O
                Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲱⲧⲉⲙ ̀ⲉⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ : ϧⲉⲛ ⲛⲟⲩ̀ⲁⲛⲁⲅⲕⲏ: ̀ⲁⲅⲓ̀ⲁ ...
            </td>
            <td class="arabic">اسمع للخطاة: فى شدائدهمأيها ...</td>
        </tr>
        <tr id="table_8_row_23">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_24">
            <td class="coptic" style="border-right: 1px solid black;">My soul and my mind, Lift them up to heaven, O
                Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲁⲯⲩⲭⲏ ⲛⲉⲙ ⲡⲁⲛⲟⲥ: ̀ⲱⲗⲟⲩ ̀ⲉⲟⲩⲣⲁⲛⲟⲥ: ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">نفسي وعقلى : إرفعهما الى السماءأيها ...</td>
        </tr>
        <tr id="table_8_row_25">
            <td class="coptic" style="border-right: 1px solid black;">O Son of our God, Grant us Your salvation, O Holy
                ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ : ⲙⲟⲓ ⲛⲁⲛ ̀ⲛⲟⲩⲥⲱϯ : ̀ⲁⲅⲓ̀ⲁ ...
            </td>
            <td class="arabic">يا ابن الله إلهنا: أعطنا خلاصاًأيها ...</td>
        </tr>
        <tr id="table_8_row_26">
            <td class="coptic" style="border-right: 1px solid black;">God the Merciful, The Long-suffering, O Holy ...
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫϯ ⲡⲓⲛⲁⲏⲧ: ⲡⲓⲣⲉϥⲱⲟⲩ̀ⲛϩⲏⲧ :  ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">الله الرحوم: طويل الآناةأيها ...</td>
        </tr>
        <tr id="table_8_row_27">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy, O Son of the Holy, O Holy ...
            </td>
            <td class="coptic" style="border-right: 1px solid black;">̀̀̀̀Ⲭⲟⲩⲁⲃ ̀ⲭⲟⲩⲁⲃ ̀ⲭⲟⲩⲁⲃ : ̀ⲡϣⲏⲣⲓ ̀ⲙⲪⲏⲉⲑⲟⲩⲁⲃ:
                ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">قدوس قدوس قدوس: يا ابن القدوسأيها ...</td>
        </tr>
        <tr id="table_8_row_29">
            <td class="coptic" style="border-right: 1px solid black;">The souls of our fathers, Give rest to them, O
                Savior, O Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲯⲩⲭⲏ ̀ⲛⲛⲉⲛⲓⲟϯ : ⲙⲁ̀ⲙⲧⲟⲛ ⲛⲱⲟⲩ ̀ⲱ ⲡⲓⲣⲉϥⲥⲱϯ : ̀ⲁⲅⲓ̀ⲁ
                ...</td>
            <td class="arabic">آباؤنا الراقدون: نيحهم أيها المخلصأيها ...</td>
        </tr>
        <tr id="table_8_row_30">
            <td class="coptic" style="border-right: 1px solid black;">O our Master remember us, In Your heavenly
                kingdom, O Holy ...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱ ⲡⲉⲛⲛⲏⲃ ̀ⲁⲣⲓⲡⲉⲛⲙⲉⲩ̀ⲓ : ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ
                ̀ⲛⲛⲁⲛⲓⲫⲏⲟⲩⲓ : ̀ⲁⲅⲓ̀ⲁ ...</td>
            <td class="arabic">ياملكنا اذكرنا: فى ملكوتك السماوىأيها ...</td>
        </tr>
        <tr id="table_8_row_31">
            <td class="coptic" style="border-right: 1px solid black;">My heart and my tongue, praise the Trinity. O Holy
                Trinity, have mercy on us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ̀ⲉϯ̀ⲧⲣⲓⲁⲥ: ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ:
                ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قلبى ولسانى يسبحان الثالوث أيها الثالوث القدوس أرحمنا</td>
        </tr>
        <tr id="table_8_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Amen. Alleluia. Lord have mercy. Lord have mercy.
                Lord have mercy.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.
                Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم.</td>
        </tr>
        <tr id="table_8_row_33">
            <td class="coptic" style="border-right: 1px solid black;">O give thanks to the Lord: for He is good,
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ ̀ⲙⲠϭⲟⲓⲥ ϫⲉ ⲟⲩ̀ⲭⲣⲏⲥⲧⲟⲥ ⲟⲩ̀ⲁⲅⲁⲑⲟⲥ ⲡⲉ
                ⲁⲗⲗⲏⲗⲟⲩⲓ̀ⲁ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">اشكروا الرب لأنـه صالح وخيّر الليلويا. لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_34">
            <td class="coptic" style="border-right: 1px solid black;">O give thanks to the God of gods, Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ ̀ⲙⲪⲛⲟⲩϯ ̀ⲛⲧⲉ ⲛⲓⲛⲟⲩϯ ⲁⲗ̅: ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">اشكروا إله الآلهة الليلويا. لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_35">
            <td class="coptic" style="border-right: 1px solid black;">O give thanks to the Lord of lords: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ ̀ⲙⲠϭⲟⲓⲥ ̀ⲛⲧⲉ ⲛⲓϭⲟⲓⲥ ⲁⲗ̅: ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">اشكروا رب الأرباب الليلويا. لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_36">
            <td class="coptic" style="border-right: 1px solid black;">To Him who alone does great wonders: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏⲉⲧ̀ⲓⲣⲓ ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲛ̀ϣⲫⲏⲣⲓ ̀ⲙⲙⲁⲩⲁⲧϥ ⲁⲗ̅ : ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">الصانع العجائب العظام وحده لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_37">
            <td class="coptic" style="border-right: 1px solid black;">To Him who by wisdom made the heavens: Alleluia,
                His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥⲑⲁⲙⲓ̀ⲟ ̀ⲛⲛⲓⲫⲏⲟⲩ̀ⲓ ϧⲉⲛ ⲟⲩⲕⲁϯ ⲁⲗ̅: ϫⲉ ⲡⲉϥⲛⲁⲓ
                ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">الذي خلق السموات بفهم الليلويا. لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_38">
            <td class="coptic" style="border-right: 1px solid black;">To Him who laid out the earth above the waters:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥⲧⲁϫⲣⲟ ̀ⲙⲡⲓⲕⲁϩⲓ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟⲩ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ
                ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الذى ثبت الأرض على المياه. الليلويا. لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_39">
            <td class="coptic" style="border-right: 1px solid black;">To Him who made great lights: Alleluia, His mercy
                endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥⲑⲁⲙⲓⲟ ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲛⲣⲉϥ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲙⲙⲁⲩⲁⲧϥ ⲁⲗ̅
                : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الذي خلق نيرين عظيمين وحده الليلويا. لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_40">
            <td class="coptic" style="border-right: 1px solid black;">The sun to rule by day: Alleluia, His mercy
                endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">˙Ⲫⲣⲏ ̀ⲉⲟⲩⲉⲣϣⲓϣⲓ ̀ⲛⲧⲉ ⲡⲓ̀ⲉϩⲟⲟⲩ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الشمس لحكم النهار. الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_41">
            <td class="coptic" style="border-right: 1px solid black;">The moon and stars to rule by night: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲓⲟϩ ⲛⲉⲙ ⲛⲓⲥⲓⲟⲩ ⲉⲩⲉⲝⲟⲩⲥⲓ̀ⲁ ̀ⲛⲧⲉ ⲡⲓ̀ⲉϫⲱⲣϩ ⲁⲗ̅ : ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">القمر والنجوم لحكم الليل الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_42">
            <td class="coptic" style="border-right: 1px solid black;">To Him who struck Egypt in their first-born:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥϣⲁⲣⲓ ̀ⲉⲛⲁⲬⲏⲙⲓ ⲛⲉⲙ ⲛⲟⲩϣⲁⲙⲓⲥⲓ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ
                ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الذى ضرب المصريين مع أبكارهم الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_43">
            <td class="coptic" style="border-right: 1px solid black;">And brought out Israel from among them: Alleluia,
                His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁϥ̀ⲓⲛⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ ⲁⲗ̅ : ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">وأخرج إسرائيل في وسطه الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_44">
            <td class="coptic" style="border-right: 1px solid black;">With a strong hand and with an outstretched arm:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ⲟⲩϫⲓϫ ⲉⲥ̀ⲁⲙⲁϩⲓ ⲛⲉⲙ ⲟⲩϣⲱⲃϣ ⲉϥϭⲟⲥⲓ ⲁⲗ̅ : ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">بيد عزيزة وذراع عالية الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_45">
            <td class="coptic" style="border-right: 1px solid black;">To Him who divided the Red Sea in two: Alleluia,
                His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥⲫⲱⲣϫ ̀ⲙ̀ⲫⲓⲟⲙ ̀ⲛϣⲁⲣⲓ ϧⲉⲛ ϩⲁⲛⲫⲱⲣϫ ⲁⲗ̅: ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الذى شق البحر الأحمر إلى أقسام الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_46">
            <td class="coptic" style="border-right: 1px solid black;">And made Israel pass through the midst of it:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁϥ̀ⲓⲛⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ ̀ⲉⲙⲏⲣ ϧⲉⲛ ⲧⲉϥⲙⲏϯ ⲁⲗ̅ : ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">وأجاز إسرائيل في وسطه الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_47">
            <td class="coptic" style="border-right: 1px solid black;">But overthrew pharaoh and his army in the Red Sea:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁϥⲃⲟⲣⲃⲉⲣ ̀ⲙⲪⲁⲣⲁ̀ⲱ ⲛⲉⲙ ⲧⲉϥϫⲟⲙ ⲧⲏⲣⲥ ̀ⲉ̀ⲫⲓⲟⲙ
                ̀ⲛϣⲁⲣⲓ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">وطرح فرعون وكل قوته في البحر الأحمر الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_48">
            <td class="coptic" style="border-right: 1px solid black;">To Him who led his people through the wilderness:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥ̀ⲓⲛⲓ ̀ⲙⲡⲉϥⲗⲁⲟⲥ ̀ⲉⲃⲟⲗ ̀ⲛ̀ϩⲣⲏⲓ ϩⲓ ̀ⲡϣⲁϥⲉ ⲁⲗ̅:
                ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">الذى أخرج شعبه إلى البـرية الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_49">
            <td class="coptic" style="border-right: 1px solid black;">To him who retrieved water from a rock: Alleluia,
                His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥ̀ⲓⲛⲓ ̀ⲛⲟⲩⲙⲱⲟⲩ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲟⲩⲡⲉⲧⲣⲁ ̀ⲛⲕⲟϩ ̀ⲛϣⲱⲧ
                ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">الذى أخرج ماء من صخرة صماء الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_50">
            <td class="coptic" style="border-right: 1px solid black;">To Him who struck down great kings: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥϣⲁⲣⲓ ̀ⲉϩⲁⲛⲛⲓϣϯ ̀ⲛⲟⲩⲣⲱⲟⲩ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الذى ضرب ملوكاً عظماء. الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_51">
            <td class="coptic" style="border-right: 1px solid black;">And slew famous kings: Alleluia, His mercy endures
                forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁϥϧⲱⲧⲉⲃ ̀ⲛϩⲁⲛⲟⲩⲣⲱⲟⲩ ⲉⲩⲟⲓ ̀ⲛ̀ϣⲫⲏⲣⲓ ⲁⲗ̅ : ϫⲉ
                ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">وقتل ملوكاً عجيبين: الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_52">
            <td class="coptic" style="border-right: 1px solid black;">Sihon the king of the Amorites: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲏⲱⲛ ̀ⲡⲟⲩⲣⲟ ̀ⲛⲧⲉ Ⲛⲓⲁⲙⲟⲣⲣⲉⲟⲥ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ
                ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">سيحون ملك الأموريين الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_53">
            <td class="coptic" style="border-right: 1px solid black;">And Og the king of Bashan: Alleluia, His mercy
                endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲉⲙ Ⲱⲅ ̀ⲡⲟⲩⲣⲟ ̀ⲛⲧⲉ ̀Ⲑⲃⲁⲥⲁⲛ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ
                ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">وعوج ملك باشان الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_54">
            <td class="coptic" style="border-right: 1px solid black;">And gave their land as a heritage: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϯ ̀ⲙⲡⲟⲩⲕⲁϩⲓ ⲉⲩ̀ⲕⲗⲏⲣⲟⲛⲟⲙⲓ̀ⲁ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">اعطى أرضهم ميراثاً: الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_55">
            <td class="coptic" style="border-right: 1px solid black;">A heritage to Israel His servant: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩ̀ⲕⲗⲏⲣⲟⲛⲟⲙⲓ̀ⲁ ̀ⲙⲡⲉϥ ⲃⲱⲕ Ⲡⲓ̀ⲥⲣⲁⲏⲗ: ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">ميراثاً لعبده إسرائيل :الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_56">
            <td class="coptic" style="border-right: 1px solid black;">The Lord who remembered us in our lowly state:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲡⲉⲛⲑⲉⲃⲓ̀ⲟ ⲁϥⲉⲣⲡⲉⲛⲙⲉⲩ̀ⲓ ̀ⲛϫⲉ Ⲡϭⲟⲓⲥ ⲁⲗ̅
                : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">في تواضعنا ذكرنا الرب الليلويا: لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_57">
            <td class="coptic" style="border-right: 1px solid black;">And rescued us from our enemies: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁϥⲥⲟⲧⲧⲉⲛ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛϫⲓϫ ̀ⲛⲧⲉ ⲛⲉⲛϫⲁϫⲓ ⲁⲗ̅ :
                ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">و خلصنا من أيدى أعدائنا الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_58">
            <td class="coptic" style="border-right: 1px solid black;">Who gives food to all flesh: Alleluia, His mercy
                endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏⲉⲧϯ ̀ϧⲣⲉ ̀ⲛⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ ⲉⲧⲟⲛϧ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ
                ϣⲁ ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">الذى يعطى طعاماً لكل جسد حي الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_59">
            <td class="coptic" style="border-right: 1px solid black;">O give thanks to the God of heaven: Alleluia, His
                mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩ̀ⲱⲛϩ ̀ⲉⲃⲟⲗ ̀ⲙⲪϯ ̀ⲛⲧⲉ ̀ⲧⲫⲉ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ
                ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">احمدوا إله السماء الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_60">
            <td class="coptic" style="border-right: 1px solid black;">O give thanks to the Lord of lords for He is good:
                Alleluia, His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ ̀ⲙⲠϭⲟⲓⲥ ̀ⲛⲧⲉ ⲛⲓϭⲟⲓⲥ ϫⲉ ⲟⲩ̀ⲭⲣⲓⲥⲧⲟⲥ
                ⲟⲩ̀ⲁⲅⲁⲑⲟⲥ ⲡⲉ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">احمدوا رب الأرباب لأنه طيب وصالح الليلويا لأن رحمته إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_61">
            <td class="coptic" style="border-right: 1px solid black;">Hymn of 2ND Hoos</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">لبش الهوس الثاني</td>
        </tr>
        <tr id="table_8_row_62">
            <td class="coptic" style="border-right: 1px solid black;">Let us give thanks: unto Christ our God: with
                David the prophet: and the psalmist.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ: ̀ⲙⲠⲓ̀ⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ : ⲛⲉⲙ
                ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ: Ⲇⲁⲩⲓⲇ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">فلنشكر المسيح إلهنا مع المرتل داود النبي.</td>
        </tr>
        <tr id="table_8_row_63">
            <td class="coptic" style="border-right: 1px solid black;">For He has made the heavens: and all its hosts:
                and established the earth: on the waters.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁϥⲑⲁⲙⲓ̀ⲟ ̀ⲛⲛⲓⲫⲏⲟⲩ̀ⲓ : ⲛⲉⲙ ⲛⲟⲩⲇⲩⲛⲁⲙⲓⲥ : ⲁϥϩⲓⲥⲉⲛϯ
                ̀ⲙⲡⲓⲕⲁϩⲓ : ̀ⲉ̀ϩⲣⲏⲓ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟⲩ .</td>
            <td class="arabic">لأنه خلق السموات وجنودها وأسس الأرض على المياه.</td>
        </tr>
        <tr id="table_8_row_64">
            <td class="coptic" style="border-right: 1px solid black;">These two great stars: the sun and the moon: He
                has made to enlighten: the firmament.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁⲓ ⲛⲓϣϯ ̀ⲙⲫⲱⲥⲧⲏⲣ : ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ : ⲁϥⲭⲁⲩ
                ⲉⲩ̀ⲉⲣⲟⲩⲱⲓⲛⲓ : ϧⲉⲛ ⲡⲓ̀ⲥⲧⲉⲣ̀ⲉⲱⲙⲁ.</td>
            <td class="arabic">هذان الكوكبان العظيمان الشمس والقمر جعلهما ينيران في الفلك.</td>
        </tr>
        <tr id="table_8_row_65">
            <td class="coptic" style="border-right: 1px solid black;">He brought forth the winds: out of His treasure
                box: he breathed unto the trees: and they blossomed.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥ̀ⲓⲛⲓ ̀ⲛϩⲁⲛⲑⲏⲟⲩ : ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲉϥ̀ⲁϩⲱⲣ : ⲁϥⲛⲓϥⲓ
                ̀ⲛⲥⲁ ⲛⲓ̀ϣϣⲏⲛ : ϣⲁ̀ⲛⲧⲟⲩⲫⲓⲣⲓ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أخرج الرياح من خباياها. نفخ في الأشجار حتى ازهرت.</td>
        </tr>
        <tr id="table_8_row_66">
            <td class="coptic" style="border-right: 1px solid black;">He caused the rain to fall: upon the face of the
                earth: and it sprouted: and gave its fruit.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϩⲱⲟⲩ ̀ⲛⲟⲩⲙⲟⲩⲛϩⲱⲟⲩ : ϩⲓϫⲉⲛ ̀ⲡϩⲟ ̀ⲙ̀ⲡⲕⲁϩⲓ :
                ϣⲁ̀ⲛⲧⲉϥⲣⲱⲧ ̀ⲉ̀ⲡϣⲱⲓ : ̀ⲛⲧⲉϥϯ ̀ⲙⲡⲉϥⲟⲩⲧⲁϩ.</td>
            <td class="arabic">أمطر مطراً على وجه الأرض حـتى انبتت وأعطت ثمرها.</td>
        </tr>
        <tr id="table_8_row_67">
            <td class="coptic" style="border-right: 1px solid black;">He brought forth water: out of a rock: and gave it
                to His people: in the wilderness.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥ̀ⲓⲛⲓ ̀ⲛⲟⲩⲙⲱⲟⲩ : ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲟⲩⲡⲉⲧⲣⲁ : ⲁϥ̀ⲧⲥⲟ
                ̀ⲙⲡⲉϥⲗⲁⲟⲥ : ̀ⲛ̀ϩⲣⲏⲓ ϩⲓ ̀ⲡϣⲁϥⲉ .</td>
            <td class="arabic">أخرج ماء من صخرة وسقى شعبه في البرية.</td>
        </tr>
        <tr id="table_8_row_68">
            <td class="coptic" style="border-right: 1px solid black;">He made man: in His image: and His likeness: that
                he may praise Him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲑⲁⲙⲓ̀ⲟ ̀ⲙⲡⲓⲣⲱⲙⲓ : ⲕⲁⲧⲁ ⲡⲉϥ̀ⲓⲛⲓ : ⲛⲉⲙ ⲧⲉϥϩⲓⲕⲱⲛ :
                ⲉⲑⲣⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ.</td>
            <td class="arabic">صنع الإنسان كشـبهه وصورته لكى يباركه.</td>
        </tr>
        <tr id="table_8_row_69">
            <td class="coptic" style="border-right: 1px solid black;">Let us praise Him: and exalt His name: and give
                thanks to Him: His mercy endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲉⲣⲟϥ : ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲡⲉϥⲣⲁⲛ : ⲧⲉⲛⲟⲩⲱⲛϩ ⲛⲁϥ
                ̀ⲉⲃⲟⲗ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ</td>
            <td class="arabic">فلنسبحه ونرفع اسمه ونشكره لأن رحمته كائنة إلى الأبد.</td>
        </tr>
        <tr id="table_8_row_70">
            <td class="coptic" style="border-right: 1px solid black;">Through the prayers: of David the psalmist: O
                Lord, grant us: the forgiveness of our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ : ̀ⲛⲧⲉ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ Ⲇⲁⲩⲓⲇ: Ⲡϭⲟⲓⲥ
                ̀ⲁⲣⲓ̀ϩⲙⲟⲧ ⲛⲁⲛ : ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلوات المرتل داود يارب أنعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_8_row_71">
            <td class="coptic" style="border-right: 1px solid black;">Through the intercessions: of the Mother of God
                Saint Mary: O Lord, grant us: the forgiveness of our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲓ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲉ ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓ̀ⲁ
                : Ⲡϭⲟⲓⲥ ̀ⲁⲣⲓ̀ϩⲙⲟⲧ ⲛⲁⲛ : ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲟⲃⲓ.</td>
            <td class="arabic">بشفـاعات والدة الاله القديسة مريم يارب انعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_8_row_72">
            <td class="coptic" style="border-right: 1px solid black;">Through the intercessions: of the whole chorus of
                angels: O Lord, grant us: the forgiveness of our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲓ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲉ ̀ⲡⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ̀ⲛⲧⲉ
                ⲛⲓⲁⲅⲅⲉⲗⲟⲥ : Ⲡϭⲟⲓⲥ ̀ⲁⲣⲓ̀ϩⲙⲟⲧ ⲛⲁⲛ : ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲟⲃⲓ.</td>
            <td class="arabic">بشفـاعات كل صفوف الملائكـة يارب انعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_8_row_73">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are You indeed: with your Good Father: and
                the Holy Spirit: for You have come and saved us.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲁⲗⲏⲑⲱⲥ : ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ : ⲛⲉⲙ
                Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ϫⲉ ⲁⲕ̀ⲓ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ.</td>
            <td class="arabic">مبارك أنت بالحقيقة مع أبيك الصالح والروح القدس لأنك أتيت وخلصتنا.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_9" data-title="Your Table Title Here" onclick="toggleTable('table_9', this)">+
        Your Table Title Here</span>
    <table id="table_9" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_9_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Let us sing with David
                And thank the graciousness of God
                For His merciful and kind
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+ فلنرتل مع داودونشكر فضل اللهلأنه رحوم وودود جى بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Thank the Lord for He is good
                Sending His rain from heaven above
                Upon the righteous and the wicked
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">إشكروا الرب فإنه صالحمرسل غيثه من أعلى سماهعلي الصالح والطالحجى بيف ناي شوب شا إينيه
            </td>
        </tr>
        <tr id="table_9_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Thank the God of gods
                For He is good and long-suffering
                To Whom is due glory and honor
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+ اشكروا إله الآلهةفإنه صالح طويل الأناةله المجد والعظمةجى بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy
                One and Only God
                Thank the Lord of lords
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">قدوس قدوس اكوابواحد لا رب سواهاشكروا رب الاربابجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The earth is filled with His glory
                As He is glorified in heaven
                Maker of all wonders
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+ ملأ الأرض بمجده له المجد في علو سماه صنع العجائب وحدهجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_5">
            <td class="coptic" style="border-right: 1px solid black;">He created the heavens
                And established it by His Word
                The stars move in their orbits
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">صور علو السمواتواسسها بكلمة فاهوالنجوم فيها سائراتجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_6">
            <td class="coptic" style="border-right: 1px solid black;">In wisdom, He created the earth
                And spread it over the waters
                He filled it with creatures
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+جبل الأرض بالحكمةوبسطها فوق وجه المياهوملأها بالخلقةجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_7">
            <td class="coptic" style="border-right: 1px solid black;">He created two great stars
                To illuminate the heavens
                The sun and the moon orbiting
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">رتب كوكبين عظيمينينيران في جو سماهالشمس والقمر سائرينجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_8">
            <td class="coptic" style="border-right: 1px solid black;">He made the sun for the day
                In its celestial sphere
                The moon and the stars for the night
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+جعل الشمس لسلطان النهارسائرة في الفلك دائرةوالقمر والنجوم لليلجي بيف ناي شوب شا إينيه
            </td>
        </tr>
        <tr id="table_9_row_9">
            <td class="coptic" style="border-right: 1px solid black;">He poured His wrath on Pharaoh
                And destroyed all His enemies
                And chose Moses and Aaron
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">سكب غضبه علي فرعونوأهلك كامل أعداهواختار موسي وهرونجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_9_row_10">
            <td class="coptic" style="border-right: 1px solid black;">He made miracles for His people
                In Egypt with Mighty hands
                And struck them with heavy plagues
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+لشعبه صنع الآيات في مصر بذراع ما أعلاهوضربهم بأشنع الضرباتجي بيف ناي شوب شا إينيه
            </td>
        </tr>
        <tr id="table_9_row_11">
            <td class="coptic" style="border-right: 1px solid black;">The Egyptians and their horsemen
                Were hit by a Mighty hand
                And saved His people from them
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">المصريون وأبكارهمضربهم بذراع ما أعلاهوخلص شعبه من وسطهمجي بيف ناي شوب شا إينيه</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_10" data-title="Your Table Title Here"
        onclick="toggleTable('table_10', this)">+ Your Table Title Here</span>
    <table id="table_10" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_10_row_0">
            <td class="coptic" style="border-right: 1px solid black;">The sea was split in half
                And Pharaoh was drowned in it
                While Israel passed through it
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic" style="border-right: 1px solid black;">+شق البحر وفلقهوطرح فرعون جواهوجاز اسرائيل
                وسطهجي بيف ناي شوب شا إينيه</td>
            <td class="english"></td>
        </tr>
        <tr id="table_10_row_1">
            <td class="coptic" style="border-right: 1px solid black;">He gave them water from the rock
                Quenched His people and drank
                In the dry wilderness
                Je pef-nay Shop Sha-eneh</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">أنبع الماء من الصخرة وروي شعبه وسقاهفي البرية القفرةجي بيف ناي شوب شا إينيه</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_11" data-title="Your Table Title Here"
        onclick="toggleTable('table_11', this)">+ Your Table Title Here</span>
    <table id="table_11" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_11_row_0">
            <td class="coptic" style="border-right: 1px solid black;">He sent them to Canaan
                And killed Sihon of the Amorites
                And Og, king of Bashan
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+ أوصلهم بلاد كنعانوقتل سيحون وفناهوعوج ملك باشانجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_1">
            <td class="coptic" style="border-right: 1px solid black;">He gave their lands to Israel
                His servant and His child
                He remembered our humble souls
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">أعطي أرضهم ميراثالإسرائيل عبده وفتاهوذكرنا في تواضعناجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_2">
            <td class="coptic" style="border-right: 1px solid black;">He saved us from our enemies
                For You comfort everyone
                Let us profess to the Lord of heaven
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+خلصنا من الأعداء المحيطينلكل حي عزاء اعترفوا لإله السماءجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Unto Him is due all honor
                And worship at His feet
                Thank Him for His graciousness
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">يجب له الإكراموالسجود عند قدماهأشكروا فضله على الدوامجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Let us proclaim the Name of Christ
                And thank Him for His grace
                Praise Him and exalt Him
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+أعترفوا لأسم المسيحواشكروا فضله ورضاهوزيدوه من التسابيحجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_5">
            <td class="coptic" style="border-right: 1px solid black;">He saved us from Satan
                And the rational Pharaoh was disgrace
                And we crossed the water of baptism
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">خلصنا من إبليسفرعون العقلي خزاهوأجازنا بحر التقديسجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_6">
            <td class="coptic" style="border-right: 1px solid black;">We're baptized in holy water,
                Freed from the bondage of tyranny
                And assure us of the promised land
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+أدخلنا بحر العمادوعتقنا من رق الطغيانووعدنا بأرض الميعادجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Christ split the sea of Hades
                And threw the devil in it
                And lifted us from it in great mystery
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">شق المسيح بحر الجحيمورمي الشيطان جواهوأخرجنا منه بسر عظيمجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_8">
            <td class="coptic" style="border-right: 1px solid black;">He resurrected us with His people
                To His heights and happiness
                And called us 'beloved '
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+وأصعدنا مع شعبهإلي محله وهناهودعانا أحبابهجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Instead of manna and quail
                He gave us His body for food
                And the gorgeous Church
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">عوض المن والسلوىاعطانا جسده غذاءوأعطانا البيعة الحلوةجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_10">
            <td class="coptic" style="border-right: 1px solid black;">He sprung water from the rock
                And we drank His blood
                And quenched our weary souls
                Je pef-nay Shop Sha-eneh</td>
            <td class="arabic">+أنبع الماء من الصخرةوأعطانا دمه شربناهوأروى نفوسنا القفرةجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_11">
            <td class="coptic" style="border-right: 1px solid black;">We reached the promised land
                And received the new promise
                Which is the Kingdom of heaven
                Je pef nay Shop Sha-eneh</td>
            <td class="arabic">وأوصلنا ارض الميعادوالوعد الجديد نلناهوهو ملكوت السمواتجي بيف ناي شوب شا إينيه</td>
        </tr>
        <tr id="table_11_row_12">
            <td class="coptic" style="border-right: 1px solid black;">All the hosts of the heaven
                And the angelic soldiers
                Cry out in beautiful voices
                Blessed O, Virgin and bride</td>
            <td class="arabic">كل الطغمات السمائيةوعساكر ني أنجيلوسيصيحون بأصوات شجيةطوباك يابكر وعروس</td>
        </tr>
        <tr id="table_11_row_13">
            <td class="coptic" style="border-right: 1px solid black;">In the tunes of the heavens
                Everyone says let us praise
                And shout in wonderful languages
                Blessed O, Virgin and bride</td>
            <td class="arabic">بالنغمات العلويةالكل يقولون مارين هوسويصيحون بلغات بهيةطوباك يابكر عروس</td>
        </tr>
        <tr id="table_11_row_14">
            <td class="coptic" style="border-right: 1px solid black;">The Father looked from heaven and did not find
                Who's like your purity in all rank
                He sent His Son to take flesh from you
                Blessed O, Virgin and bride</td>
            <td class="arabic">تطلع الآب من سماه ولم يجدمن يشبه طهرك في كل طقوسارسل ابنه تجسد منكطوباك يا بكر وعروس
            </td>
        </tr>
        <tr id="table_11_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Came with good tidings as a messenger
                Gabriel, the archangel
                Told you happily without delay
                Blessed O, Virgin and bride</td>
            <td class="arabic">جاء بالبشرى مرسولغبريال بي أرشي أنجيلوسبشرك برضى وقبولطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_16">
            <td class="coptic" style="border-right: 1px solid black;">He dwelt with His Holy Spirit in you
                And the Lord Jesus appeared from you
                You became Mother to your Creator
                Blessed O, Virgin and bride</td>
            <td class="arabic">حل بروح قدسه في احشاكوظهر منك باشويس إيسوسوصرت أماً لمن أنشاكطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_17">
            <td class="coptic" style="border-right: 1px solid black;">The salvation of Adam and his race
                And his return to Paradise
                Has appeared from an ever Virgin
                Blessed O, Virgin and bride</td>
            <td class="arabic">خلاص آدم وبنيهورجوعه إلى الفردوسظهر من بكر بتولطوباك يابكر وعروس</td>
        </tr>
        <tr id="table_11_row_18">
            <td class="coptic" style="border-right: 1px solid black;">You've been called, "Best of flowers
                The pure and golden censer
                And the holy and blessed flower"
                Blessed O, Virgin and bride</td>
            <td class="arabic">دعيت يازهرة الأطيابتى شوري إن نوب إنكا ثاروسنيم تي إهريري إثؤابطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_19">
            <td class="coptic" style="border-right: 1px solid black;">The Lord of glory chose your beauty
                As the words of the Psalmist
                The Lord of lords became your Son
                Blessed O, Virgin and bride</td>
            <td class="arabic">رب المجد اختار حسنككاتا إبساجي إم بي هيمنوذوسإله الآلهة صار إبنكطوباك يا بكر وعروس
            </td>
        </tr>
        <tr id="table_11_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Ezekiel saw in his vision
                A closed door, guarded in the East
                The High King entered by it
                Blessed O, Virgin and bride</td>
            <td class="arabic">رأى فى رؤياه حزقيالفي المشرق باباً مقفولا محروسوقد دخله الملك المتعالطوباك يا بكر
                وعروس</td>
        </tr>
        <tr id="table_11_row_21">
            <td class="coptic" style="border-right: 1px solid black;">A ladder seen by Jacob
                Surrounded by angelic hosts
                Worshipping the revered King
                Blessed O, Virgin and bride</td>
            <td class="arabic">سلم رآه الأب يعقوبوحوله طغمات ني أنجيلوسسجود للملك المرهوبطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Moses witnessed and prophesied
                And likened you to a planted vineyard
                A green bush aflame with fire
                Blessed O, Virgin and bride</td>
            <td class="arabic">شهد موسي وتنبا اجهاروشبهك بكرم مغروسعوسج أخضر في قلبه نارطوباك يابكر وعروس</td>
        </tr>
        <tr id="table_11_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Zephaniah said concerning you
                And prophesied concerning Jesus' birth
                He'll come down as rain and dew.
                Blessed O, Virgin and bride</td>
            <td class="arabic">صوفونيوس عنك خبربشهادة عن ميلاد إيسوسقال ينزل كندي ومطرطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Daniel said in his vision
                "I have seen a great Throne
                On it sat the great High King."
                Blessed O, Virgin and bride</td>
            <td class="arabic">دانيال في رؤياه قالآنوك آي ناف إأوإثرونوسوعليه جلس الملك المتعالطوباك يا بكر وعروس
            </td>
        </tr>
        <tr id="table_11_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Moses asked to peak and see
                As you saw O Mother of the Holy One
                And could not bear His Light;
                Blessed O, Virgin and bride</td>
            <td class="arabic">طلب موسي ينظر نظرةكما رأيت ياام القدوسفما طاق من نوره ثقب إبرةطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_26">
            <td class="coptic" style="border-right: 1px solid black;">He came from you and fulfilled the promise
                To Adam, by entering Paradise
                And freed his offspring from all ties
                Blessed O, Virgin and bride</td>
            <td class="arabic">ظهر منك وأوفي الميثاقلآدم بدخوله إلي الفردوسوعتق نسله من كل وثاقطوباك يا بكر وعروس
            </td>
        </tr>
        <tr id="table_11_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Precious and sweet is your praise
                As the sweetness of Paradise
                Who tasted it will not like otherwise
                Blessed O, Virgin and bride</td>
            <td class="arabic">علا مدحك وحلا نظمهكحلاوة أثمار الفردوسمن ذاقه لايسل طعمهطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_28">
            <td class="coptic" style="border-right: 1px solid black;">You are honored and privileged
                Above all the angelic ranks
                By having the Creator in your lap
                Blessed O, Virgin and bride</td>
            <td class="arabic">علا قدرك وحلا ذكركوزاد رفعة عن كل الطقوسبجلوس الخالق في حجركطوباك يابكر وعروس</td>
        </tr>
        <tr id="table_11_row_29">
            <td class="coptic" style="border-right: 1px solid black;">If one praises you all the time
                He will attain his wishes
                By receiving the Holy Lord's pleasure
                Blessed O, Virgin and bride</td>
            <td class="arabic">فاز ببلوغ آمالهوتعشم برضي الرب القدوسمن يجعل مدحك رأس مالهطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_30">
            <td class="coptic" style="border-right: 1px solid black;">All my life I wanted
                To praise you O, Ti-Parthenos
                So you will be my help when I depart
                Blessed O, Virgin and bride</td>
            <td class="arabic">قصدي طول عمري وحياتيأكون مادح تي بارثينوسلتكون عوني عند مماتيطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Who can explain the honor of Mary
                Or liken it to the moon and the sun
                She is even greater than the Throne
                Blessed O, Virgin and bride</td>
            <td class="arabic">كرامة مريم من يقدريشبهها بقمر وشموسإن قلنا الكرسي فهي أفخرطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_32">
            <td class="coptic" style="border-right: 1px solid black;">You bore the Lord of glory
                Thus, became above all the hosts
                Your rank is elevated and increased
                Blessed O, Virgin and bride</td>
            <td class="arabic">رب المجد حملتوقد فقت عن كل الطقوسوزدت قدراً وعلوتطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_11_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Without you, O Mother of Light
                Who could have seen Jesus’ glory
                Revealed so clear to the world
                Blessed O, Virgin and bride</td>
            <td class="arabic">لولاك ياأم النورمن كان يعاين مجد إيسوسويراه بين العالم مشهورطوباك يابكر وعروس</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_12" data-title="Your Table Title Here"
        onclick="toggleTable('table_12', this)">+ Your Table Title Here</span>
    <table id="table_12" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_12_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Who received, O Mary, what you're granted
                Or who resembles you O Theotokos
                Which tongue can actually explain
                Blessed O, Virgin and bride</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">من نال مانلت يامريمومن يشبهك يا أم القدوسوأي لسان يقدر يتكلمطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_12_row_1">
            <td class="coptic" style="border-right: 1px solid black;">We ask of you, O Virgin
                Remember me before my Lord Jesus
                So He may forgive my sins
                Blessed O, Virgin and bride</td>
            <td class="arabic" style="border-right: 1px solid black;">نسألك يابكر وبتولآرى باميفئى ناهرين باشويس
                إيسوسهينا إن تين كو إيفولطوباك يابكر وعروس</td>
            <td class="english"></td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_13" data-title="Your Table Title Here"
        onclick="toggleTable('table_13', this)">+ Your Table Title Here</span>
    <table id="table_13" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_13_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Your servant pleads to you
                Do not forget me, O Mother of Christ
                For I ask for your protection
                Blessed O, Virgin and bride</td>
            <td class="arabic">هوذا عبدك يترجاكفلا تنسيني يا أم بي إخرستوسلأني متوسل بحماكطوباك يابكر وعروس</td>
        </tr>
        <tr id="table_13_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The honored father, our shepherd
                Abba Tawadros Pi-archi Erevs
                With his prayers on our behalf
                Blessed O, Virgin and bride</td>
            <td class="arabic">والاب الفاضل راعيناأنبا (تواضروس) بي ارشي إيريفسبقبول صلواته تعهديناطوباك يابكر وعروس
            </td>
        </tr>
        <tr id="table_13_row_2">
            <td class="coptic" style="border-right: 1px solid black;">And his partners in the service
                Our holy fathers the bishops
                Help them O pride of the human race
                Blessed O, Virgin and bride</td>
            <td class="arabic">وشركاؤه في الخدمة الرسوليةنين يوتي إثؤاب إن إيبيسكوبوسأجيريهم يازين البشريةطوباك يا
                بكر وعروس</td>
        </tr>
        <tr id="table_13_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget all our priests
                And all the Christians
                And all the ranks of our Church
                Blessed O, Virgin and bride</td>
            <td class="arabic">لا تنسي سائر كهنتناوجميع إن ني إخريستيانوسوكل رتب بيعتناطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_13_row_4">
            <td class="coptic" style="border-right: 1px solid black;">O pride of the human race
                The pearl of all the hosts and ranks
                Help the Christian people
                Blessed O, Virgin and bride</td>
            <td class="arabic">يازين كل البشريةزينة الرتب والطقوسأجيري شعب المعموديةطوباك يا بكر وعروس</td>
        </tr>
        <tr id="table_13_row_5">
            <td class="coptic" style="border-right: 1px solid black;">And the Orthodox believers
                The chief and the workers
                All the seven ranks of the Church
                Blessed O, Virgin and bride</td>
            <td class="arabic">وأبناء البيعة الأرثوذكسيةالرئيس منهم والمرءوسشاشف إن طغما إن إككليسياطوباك يا بكر
                وعروس</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_14" data-title="Your Table Title Here"
        onclick="toggleTable('table_14', this)">+ Your Table Title Here</span>
    <table id="table_14" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_14_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_14_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_14_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_15" data-title="Your Table Title Here"
        onclick="toggleTable('table_15', this)">+ Your Table Title Here</span>
    <table id="table_15" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_15_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I open my mouth and proclaim
                And utter hidden mysteries
                Praising the mother of Light Mary Blessed is the pride of the human race</td>
            <td class="arabic">انا أفتح فمى واتكلموانطق بأسرار خفيةبكرامة ام النور مريمطوباك يازين البشرية</td>
        </tr>
        <tr id="table_15_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Because of your Son we became
                Freed from the bondage
                And from Satan’s bonds we are saved
                Blessed is the pride of the human race</td>
            <td class="arabic">بابنك يازين العالم صرنااحرارا بعد العبوديةومن أسر إبليس خلصناطوباك يازين البشرية</td>
        </tr>
        <tr id="table_15_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The sayings about you were fulfilled
                And all the prophecies and proverbs
                About the birth of Emmanuel
                Blessed is the pride of the human race</td>
            <td class="arabic">تمت عنك كل الاقوالوالشهادات النبويةإثفى إبجين ميسى إن إممانوئيلطوباك يازين البشرية
            </td>
        </tr>
        <tr id="table_15_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Gabriel came with good tidings
                About the dwelling of the Logos
                A virgin carrying her Lord
                And her virginity is sealed</td>
            <td class="arabic">جبرائيل بالبشرى ناداهابحلول الكلمة الازليبكر بتول حملت مولاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_16" data-title="Your Table Title Here"
        onclick="toggleTable('table_16', this)">+ Your Table Title Here</span>
    <table id="table_16" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_16_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_16_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_16_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_17" data-title="Your Table Title Here"
        onclick="toggleTable('table_17', this)">+ Your Table Title Here</span>
    <table id="table_17" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_17_row_0">
            <td class="coptic" style="border-right: 1px solid black;">His Holy Spirit came upon you
                And took from you the humanity
                A true human you did carry
                Blessed is the pride of the human race</td>
            <td class="arabic">حل بروح قدسه فى احشاكوأخذ منك الناسوتيةبشري كامل حملته يداكطوباك يازين البشرية</td>
        </tr>
        <tr id="table_17_row_1">
            <td class="coptic" style="border-right: 1px solid black;">He saved Adam and his children
                And cured him from the serpent's venom
                And returned his honor to him
                Blessed is the pride of the human race</td>
            <td class="arabic">خلص آدم وبنيهوابرأه من سم الحيةوالى مرتبته قد ردهطوباك يازين البشرية</td>
        </tr>
        <tr id="table_17_row_2">
            <td class="coptic" style="border-right: 1px solid black;">David your father spoke of you
                And prophesied about the birth
                “The God of gods became your Son”
                Blessed is the pride of the human race</td>
            <td class="arabic">داود أبوك قال عنكونطق بشهادات نبويةإله الآلهة صار ابنكطوباك يازين البشرية</td>
        </tr>
        <tr id="table_17_row_3">
            <td class="coptic" style="border-right: 1px solid black;">You became a Mother of your Creator
                For the salvation of mankind
                He came and dwelt in your womb
                And the seal was shut in purity</td>
            <td class="arabic">دعيت أماً لمن أنشاكلأجل خلاص البشريةاتى وسكن فى أحشاكوالخاتم مصان ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_18" data-title="Your Table Title Here"
        onclick="toggleTable('table_18', this)">+ Your Table Title Here</span>
    <table id="table_18" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_18_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_18_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_18_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_19" data-title="Your Table Title Here"
        onclick="toggleTable('table_19', this)">+ Your Table Title Here</span>
    <table id="table_19" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_19_row_0">
            <td class="coptic" style="border-right: 1px solid black;">The Lord of Glory chose your beauty
                And adorned you with Divinity
                And took from you humanity
                Blessed is the pride of the human race</td>
            <td class="arabic">رب المجد اختار حسنكوزانك باللاهوتيةواخذ طبع الناسوت منكطوباك يازين البشرية</td>
        </tr>
        <tr id="table_19_row_1">
            <td class="coptic" style="border-right: 1px solid black;">A plant sprouting without seed
                He appeared without watering
                In a pure and chosen field
                Blessed is the pride of the human race</td>
            <td class="arabic">زرع اثمر من غير بذارظهر من غير ماء وسقيةفى حقل نقى طاهر مختارطوباك يازين البشرية</td>
        </tr>
        <tr id="table_19_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The righteous fathers did call you
                A second bodily heaven
                The Almighty Lord dwelt in you
                Blessed is the pride of the human race</td>
            <td class="arabic">سماك الآباء الابرارسماء ثانية جسدانيةسكن فيك المولى الجبارطوباك يازين البشرية</td>
        </tr>
        <tr id="table_19_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Ezekiel witnessed and saw
                A sealed door in the East
                Her Lord entered and left through it
                And the door was shut in purity</td>
            <td class="arabic">شهد حزقيال ورآهابابا مختوما فى الشرقيةدخل فيه وخرج مولاهاوالباب مصان ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_20" data-title="Your Table Title Here"
        onclick="toggleTable('table_20', this)">+ Your Table Title Here</span>
    <table id="table_20" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_20_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_20_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_20_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_21" data-title="Your Table Title Here"
        onclick="toggleTable('table_21', this)">+ Your Table Title Here</span>
    <table id="table_21" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_21_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Zephaniah proclaimed saying
                About the economy of the Divine
                “He will come as rain without cloud”
                Blessed is the pride of the human race</td>
            <td class="arabic">صوفونيوس شرح بكلامعن تدبير اللاهوتيةقال ينزل كقطر بغير غمامطوباك يازين البشرية</td>
        </tr>
        <tr id="table_21_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Daniel has seen the throne
                Surrounded by luminous hosts
                Upon it sat the Holy King
                Blessed is the pride of the human race</td>
            <td class="arabic">دانيال عاين بى إثرونوسوحوله طغمات نورانيةوعليه جلس الملك القدوسطوباك يازين البشرية
            </td>
        </tr>
        <tr id="table_21_row_2">
            <td class="coptic" style="border-right: 1px solid black;">He came down bowing the heavens
                And took the flesh of the humans
                While still in His Father's bosom
                Blessed is the pride of the human race</td>
            <td class="arabic">طأطأ سماء السموات ونزل واتحد بالناسوتيةوهو فى حضن ابيه لم يزلطوباك يازين البشرية</td>
        </tr>
        <tr id="table_21_row_3">
            <td class="coptic" style="border-right: 1px solid black;">We saw wonders and miracles
                In the books of the Christian Church
                A pure virgin carried her Lord
                And her virginity is sealed</td>
            <td class="arabic">ظهرت عجائب ورأيناهافى كتب البيعة المسيحيةبكر بتول حملت مولاهاوهي عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_22" data-title="Your Table Title Here"
        onclick="toggleTable('table_22', this)">+ Your Table Title Here</span>
    <table id="table_22" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_22_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_22_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_22_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_23" data-title="Your Table Title Here"
        onclick="toggleTable('table_23', this)">+ Your Table Title Here</span>
    <table id="table_23" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_23_row_0">
            <td class="coptic" style="border-right: 1px solid black;">You are higher than all ranks
                And above the heavenly hosts
                And the ranks of the angels
                Blessed is the pride of the human race</td>
            <td class="arabic">على قدرك عن كل الطقوسوعن الطغمات العلويةوعساكر نى أنجيلوسطوباك يازين البشرية</td>
        </tr>
        <tr id="table_23_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The people’s sins He forgives
                Of every good gift He gives
                He took our form and loved it
                Blessed is the pride of the human race</td>
            <td class="arabic">غافر كل خطايا شعبهومانحهم كل عطيةتشبه بالعبد وأحبهطوباك يازين البشرية</td>
        </tr>
        <tr id="table_23_row_2">
            <td class="coptic" style="border-right: 1px solid black;">You are above all the world
                And the ranks and the soldiers
                And the righteous and just
                Blessed is the pride of the human race</td>
            <td class="arabic">فقت عن سائر بى كوسموسنيم ني طغما نيم نيستراتيانيم نى إثمى نيم نى ذيكيئوس
                طوباك يازين البشرية</td>
        </tr>
        <tr id="table_23_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Say O people 'She is blessed'
                The Lady of us all Mary
                Before Whom you gave birth to
                Through the prayers and intercessions</td>
            <td class="arabic">قولوا ياأخوة طوباهاأوتين شويس إنيب مارياأمام من حملت فى أحشاهاهيتين نى طفه نيم نى
                إبريسفيا</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_24" data-title="Your Table Title Here"
        onclick="toggleTable('table_24', this)">+ Your Table Title Here</span>
    <table id="table_24" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_24_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_24_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_24_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_25" data-title="Your Table Title Here"
        onclick="toggleTable('table_25', this)">+ Your Table Title Here</span>
    <table id="table_25" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_25_row_0">
            <td class="coptic" style="border-right: 1px solid black;">You carried the Lord of glory
                The Designer of the humanity
                You resemble the Father’s throne
                Blessed is the pride of the human race</td>
            <td class="arabic">رب المجد قد حملتمصور كل البشريةوبكرسي الآب تشبهتطوباك يازين البشرية</td>
        </tr>
        <tr id="table_25_row_1">
            <td class="coptic" style="border-right: 1px solid black;">He took from you the humanity
                Uniting it with the Divinity
                You held the One of the Trinity
                Blessed is the pride of the human race</td>
            <td class="arabic">أخذ منك طبع الناسوتمتحداً باللاهوتيةوحملت الواحد من الثالوثطوباك يازين البشرية</td>
        </tr>
        <tr id="table_25_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Who obtained what you received
                In all the generations
                Among the nations and people
                Blessed is the pride of the human race</td>
            <td class="arabic">من نال مانلت يامريمفى سائر كل البشرية وكل الشعوب وكل الاممطوباك يازين البشرية</td>
        </tr>
        <tr id="table_25_row_3">
            <td class="coptic" style="border-right: 1px solid black;">We declare “She is blessed”
                And also praise day and night
                Him Who chose her beauty
                For the dwelling of the Word</td>
            <td class="arabic">نحن الكل نقول طوباكونرتل باكر وعشيةلمن اختار حسن بهاكلحلول الكلمة الأزلى</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_26" data-title="Your Table Title Here"
        onclick="toggleTable('table_26', this)">+ Your Table Title Here</span>
    <table id="table_26" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_26_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_26_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_26_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_27" data-title="Your Table Title Here"
        onclick="toggleTable('table_27', this)">+ Your Table Title Here</span>
    <table id="table_27" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_27_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Guide me to repent, O, Mary
                And wake from the slumber of days
                Before time overtakes me
                To rise from my laziness</td>
            <td class="arabic">هيئي لى التوبة يامريمقبل ان يدنو الوقت عليّواستيقظ من غفلة الأياموانهض من بعد تواني
            </td>
        </tr>
        <tr id="table_27_row_1">
            <td class="coptic" style="border-right: 1px solid black;">And prepare myself before traveling
                To work during the journey
                Help me please, in this vain earth
                Through the prayers of our Lady</td>
            <td class="arabic">واهيئ الزاد قبل السفرواجهز للحمل مطيةّساعدينى فى أرض قفرةبصلاة سيدة البشرية</td>
        </tr>
        <tr id="table_27_row_2">
            <td class="coptic" style="border-right: 1px solid black;">For I am lame and have little effort
                And my burden is heavy
                The Time has come to leave this world
                And I have no refuge but Mary</td>
            <td class="arabic">لأنى عاجز وجهدى قليلوحملى مشطوط عليّوحان وقت السفر والرحيلوليس لي ملجأ الا هي</td>
        </tr>
        <tr id="table_27_row_3">
            <td class="coptic" style="border-right: 1px solid black;">We ask her and none other
                Every day and every night
                We hang on the tip of her dress
                And her luminous vesture garments</td>
            <td class="arabic">يامن لانترجى سواهاونسألها باكر وعشيةونتعلق فى هدب رداهاوملابسها النورانية</td>
        </tr>
        <tr id="table_27_row_4">
            <td class="coptic" style="border-right: 1px solid black;">I greet the Mother of the Light
                Mary, the help of all Christians
                Of whom salvation was revealed
                To all the people of Baptism</td>
            <td class="arabic">واقرئ سلامى لأم النورعون كل المسيحيةالتى منها الخلاص مشهورلجميع شعب المعمودية</td>
        </tr>
        <tr id="table_27_row_5">
            <td class="coptic" style="border-right: 1px solid black;">To protect us from all evil
                And the plagues of this time
                And help us all in every aspect
                We, the Christian nations</td>
            <td class="arabic">تنجينا من الشرورومن الآفات الزمنيةوتساعدنا فى كل الاموروكل الشعوب المسيحية</td>
        </tr>
        <tr id="table_27_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Everyone says “She is blessed”
                Morning and vespers we ask her
                Before Him whom she held in her womb
                To intercede for everyone</td>
            <td class="arabic">يقول الكل طوباهاويسألونها باكر وعشيةقدام من حملت فى أحشاهاتشفع فينا الكل سوية</td>
        </tr>
        <tr id="table_27_row_7">
            <td class="coptic" style="border-right: 1px solid black;">The honored father our Patriarch
                The pillar of the Christian faith
                A good shepherd confirming us
                With good plans and guidance</td>
            <td class="arabic">والأب الفاضل بطركناتاج الملة النصرانيةراعى الرعاة مثبتنابحسن سياسته للرعية</td>
        </tr>
        <tr id="table_27_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The father of fathers who inherited
                The priesthood of Melchizedek
                In true faith and firm hope
                And orthodox love</td>
            <td class="arabic">اب الآباء الحبر الوارثكهنوت ملكيصاداكيةبإيمان صحيح ورجاء ثابتومحبة ارثوذكسية</td>
        </tr>
        <tr id="table_27_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Keeping his flock from the foxes
                And all demonic snares
                Protecting them from strange things
                And all the heresies of Arius</td>
            <td class="arabic">حافظ غنمه من أنياب الديبومن كل فخاخ شيطانيةومبطل عنهم كل أمر غريب وكل بدع الاريوسية
            </td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_28" data-title="Your Table Title Here"
        onclick="toggleTable('table_28', this)">+ Your Table Title Here</span>
    <table id="table_28" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_28_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Shepherding his people with a tender voice
                With his spiritual teachings
                O Lord, Let him enjoy his priesthood
                Give him long life and calmness</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">راعي شعبة بحنان صوتهوتعاليمة الروحانيةهنيه يارب بكهنوتهبعمر فسيح وطمأنينة</td>
        </tr>
        <tr id="table_28_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The father the doer of the law
                And all the commandments
                Abba Tawadros Pi-archi-Erevs
                The pillar of the Christian faith</td>
            <td class="arabic" style="border-right: 1px solid black;">الأب العامل بالناموسوقوانين الشرطانيةأنبا
                (تواضروس) بى أرشى إيرفسعمود دين النصرانية</td>
            <td class="english"></td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_29" data-title="Your Table Title Here"
        onclick="toggleTable('table_29', this)">+ Your Table Title Here</span>
    <table id="table_29" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_29_row_0">
            <td class="coptic" style="border-right: 1px solid black;">And our honored fathers the bishops
                His partners in the Apostolic service
                Through their prayers we may become
                Sons of the eternal kingdom</td>
            <td class="arabic">والآباء الأفاضل اساقفتناشركاؤه فى الخدمةالرسوليةبقبول صلواتهم يجعلناأبناء الملكوت
                الأبدية</td>
        </tr>
        <tr id="table_29_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Confirm all of our clergy
                Hegumens and presbyters
                And keep our holy Church
                By offering acceptable gifts</td>
            <td class="arabic">وثبت سائر كهنتناقمامصة و قسوس سويةوأدم عمارة بيعتنابرفع قرابين مرضية</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_30" data-title="Your Table Title Here"
        onclick="toggleTable('table_30', this)">+ Your Table Title Here</span>
    <table id="table_30" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_30_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic" style="border-right: 1px solid black;">المرد:</td>
            <td class="english"></td>
        </tr>
        <tr id="table_30_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The burning bush seen by Moses
                The Prophet in the wilderness
                The fire inside it was aflame
                But never consumed or injured it</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">العليقة التى رآهاموسى النبى فى البريةوالنيران تشعل جواهاولم تمسسها بأذية</td>
        </tr>
        <tr id="table_30_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The same with the Theotokos Mary
                Carried the fire of Divinity
                Nine months in her holy body
                Without blemishing her virginity</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مثال ام النور طوباهاحملت جمر اللاهوتيةتسعة أشهر فى احشاهاوهى عذراء ببكورية</td>
        </tr>
        <tr id="table_30_row_3">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You had mercy on
                us, According to Your great mercy</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ : Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕⲓⲣⲓ ⲛⲉⲙⲁⲛ
                : ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ̀ⲛⲛⲁⲓ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك صنعت معناكعظيم رحمتك</td>
        </tr>
        <tr id="table_30_row_4">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You have sent
                Your Son, Until He saved us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕⲟⲩⲱⲣⲡ
                ̀̀ⲙⲡⲉⲕϣⲏⲣⲓ: ϣⲁ ̀ⲛⲧⲉⲕⲥⲱϯ ̀ⲙⲙⲟⲛ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك أرسلت ابنكحتى خلصتنا</td>
        </tr>
        <tr id="table_30_row_5">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You were
                incarnate, From Saint Mary.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕϭⲓⲥⲁⲣⲍ
                ̀ⲉⲃⲟⲗ: ϧⲉⲛ Ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك تجسدتمن القديسة مريم</td>
        </tr>
        <tr id="table_30_row_6">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You were born in
                Bethlehem. According to the prophecies.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲙⲁⲥⲕ ϧⲉⲛ
                Ⲃⲏⲑⲗⲉⲉⲙ : ⲕⲁⲧⲁ ϯ̀ⲡⲣⲟⲫⲏⲧⲓⲁ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك ولدت فى بيت لحمكالنبوة</td>
        </tr>
        <tr id="table_30_row_7">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For the shepherds,
                Behold Your glory.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲛⲁⲩ
                ⲉⲡⲉⲕⲱⲟⲩ: ̀ⲛϫⲉ ⲛⲓⲙⲁⲛⲉⲥⲱⲟⲩ.</td>
            <td class="arabic">أشكركياإله اسرائيللأن الرعاةنظروا مجدك</td>
        </tr>
        <tr id="table_30_row_8">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You revealed to
                us, Your Holy Glory.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕϣⲁⲓ ⲛⲁⲛ:
                ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲥⲁⲓ̀ⲉ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك أشرقت لناببهائك</td>
        </tr>
        <tr id="table_30_row_9">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You have
                performed, many miracles.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕ̀ⲓⲣⲓ
                ̀̀ⲛϩⲁⲛⲙⲏⲓⲛⲓ ⲛⲉⲙ ϩⲁⲛ ̀ϣⲫⲏⲣⲓ ⲉⲩⲟϣ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك صنعت آياتومعجزات كثيرة</td>
        </tr>
        <tr id="table_30_row_10">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For the Jews
                conspired, against You.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲉⲣ ⲟⲩⲥⲟϭⲛⲓ
                ⲉⲣⲟⲕ: ̀ⲛϫⲉ ⲛⲓⲓⲟⲩⲇⲁⲓ.</td>
            <td class="arabic">أشكركياإله اسرائيللأن اليهودتشاورا عليك</td>
        </tr>
        <tr id="table_30_row_11">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You were
                crucified upon the Cross, in Golgotha</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲁϣⲕ ⲉⲡⲓ
                ̀ⲥⲧⲁⲩⲣⲟⲥ: ϧⲉⲛ ϯⲅⲟⲗⲅⲟⲑⲁ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك صلبتعلى الصليب بالجلجثة</td>
        </tr>
        <tr id="table_30_row_12">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You were placed
                in the tomb, Like those who are dead.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲭⲁⲕ ϧⲉⲛ
                ⲡⲓ̀ⲙϩⲁⲩ: ⲙ̀ⲫⲣⲏϯ ̀ⲛⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك وضعت فى القبرمثل الاموات</td>
        </tr>
        <tr id="table_30_row_13">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You have risen
                from the dead, After three days.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ :   ϫⲉ ⲙⲉⲛⲉⲛⲥⲁ
                ϣⲟⲙⲧ ̀ⲛ̀ⲉϩⲟⲟⲩ:  ⲁⲕⲧⲱⲛⲕ ̀ⲉⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك قمت من الموتبعد ثلاثة أيام</td>
        </tr>
        <tr id="table_30_row_14">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You have
                descended into Hades, And the abyss.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ :   ϫⲉ ⲁⲕϣⲉⲛⲁⲕ
                ⲉⲡⲉⲥⲏⲧ ̀ⲉ̀ⲁⲙⲉⲛϯ: ̀ⲉϧⲟⲩⲛ ̀ⲉϯ̀ⲡⲣⲟⲛⲓⲁ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك نزلت الى الجحيمحيث الهاوية</td>
        </tr>
        <tr id="table_30_row_15">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You have saved
                Adam, And his entire race.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕⲛⲟϩⲉⲙ
                ̀ⲛⲀⲇⲁⲙ: ⲛⲉⲙ ⲡⲉϥⲅⲉⲛⲟⲥ ⲧⲏⲣϥ.</td>
            <td class="arabic">أشكرك ياإله اسرائيللأنك خلصت آدم وكل جنسه</td>
        </tr>
        <tr id="table_30_row_16">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You have sent,
                Your apostles.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ :   ϫⲉ ⲁⲕϩⲟⲛϩⲉⲛ
                ⲉⲧⲟⲧⲟⲩ:  ̀ⲛⲛⲉⲕ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">أشكرك ياإله اسرائيللأنك اوصيت رسلك</td>
        </tr>
        <tr id="table_30_row_17">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You ascended,
                Into the highest heavens.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ :
                ϫⲉ ⲁⲕϣⲉⲛⲁⲕ ̀ⲉ̀ϩⲣⲏⲓ:
                ̀ⲉ̀ⲡϣⲱⲓ ̀ⲉⲛⲓⲫⲏⲟⲩ̀ⲓ</td>
            <td class="arabic">أشكركياإله اسرائيللأنك صعدتالى أعلى السموات</td>
        </tr>
        <tr id="table_30_row_18">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You sat On the
                right, of the Pantocrator</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ⲁⲕϩⲉⲙⲥⲓ
                ⲥⲁⲟⲩ̀ⲓⲛⲁⲙ: ̀ⲙⲠⲓ-ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك جلستعن يمين ضابط الكل</td>
        </tr>
        <tr id="table_30_row_19">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, For You shall come,
                And judge the entire world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ :   ϫⲉ ⲉⲕ̀ⲉ̀ⲓ
                ̀ⲉϯϩⲁⲡ:  ⲉϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">أشكركياإله اسرائيللأنك ستأتىوتدين المسكونة</td>
        </tr>
        <tr id="table_30_row_20">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, Grant unto me mercy,
                And forgiveness.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ⲙⲟⲓ ⲛⲏⲓ
                ̀ⲛⲟⲩⲛⲁⲓ:  ⲛⲉⲙ ⲟⲩⲭⲱ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أشكركياإله اسرائيلاعطنى رحمةوغفرانا</td>
        </tr>
        <tr id="table_30_row_21">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, Absolve and remit,
                All our trespasses</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ⲁⲣⲓⲥⲩⲛⲭⲱⲣⲓⲛ :
                ̀ⲛⲛⲉⲛⲡⲁⲣⲁ̀ⲡⲧⲱⲙⲁ.</td>
            <td class="arabic">أشكركيا إله إسرائيلاصفح عن زلاتنا</td>
        </tr>
        <tr id="table_30_row_22">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, O God of Israel, We glorify Your
                Name, And we worship You.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ: Ⲫϯ ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ : ϫⲉ ϯϯ̀ⲱⲟⲩ
                ̀ⲙⲡⲉⲕⲣⲁⲛ ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲙⲟⲕ.</td>
            <td class="arabic">أشكركياإله اسرائيلونمجـد إســمكونسـجد لـك</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_31" data-title="Your Table Title Here"
        onclick="toggleTable('table_31', this)">+ Your Table Title Here</span>
    <table id="table_31" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_31_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I thank You, God of Jacob
                Capable and feared God
                Fulfilled all that was written
                At the gates of Zion's daughter</td>
            <td class="arabic">أشكرك يا إله يعقوبإله قادر مرهوبكمل كل المكتوبفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Matthew the apostle started
                With proverbs to say
                About the virgin’s pregnancy
                At the gates of Zion's daughter</td>
            <td class="arabic">بدأ متى الرسولبألأمثال يقولعن حَبَل البتولفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The seeker of the city of life
                Asked for the treasure of life
                And found a virgin girl
                At the gates of Zion's daughter</td>
            <td class="arabic">طالب مدينة الحياةطلب كنزاً وأتاهوجد عذراء فتاةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_3">
            <td class="coptic" style="border-right: 1px solid black;">He entered with the light of His majesty / Hid it
                inside a field
                And from it, obtained it
                At the gates of Zion's daughter</td>
            <td class="arabic">جاز بنور بهاهداخل حقل خباهومنه اقتناهفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_4">
            <td class="coptic" style="border-right: 1px solid black;">God’s Lamb became a Priest
                Servant of the sacraments
                For He is the head of all ranks
                At the gates of Zion's daughter</td>
            <td class="arabic">حمل الله قد صاركاهنا خادم الأسرارلأنه رئيس الأحبارفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Mustard also and yeast
                Both, said the evangelist
                Symbolizing the Kingdom
                At the gates of Zion’s daughter</td>
            <td class="arabic">خردل أيضًا وخميرالاثنين قال البشيرعن الملكوت يشيرفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Yeast in cream of wheat
                Trinity of the begotten Son
                Changed us in baptism
                At the gates of Zion’s daughter</td>
            <td class="arabic">خمير في سميدثالوث الابن الوحيدخمرنا يوم التعميدفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_7">
            <td class="coptic" style="border-right: 1px solid black;">A man found a treasure
                He sold all that he had
                And bought the jewel of faith
                At the gates of Zion’s daughter</td>
            <td class="arabic">دُراً قد وجده إنسانمضى وباع كل ما كانواشترى لؤلؤ الإيمانفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The creator of the world planned
                Before the world was made
                To be slaughtered for Adam’s sake
                At the gates of Zion’s daughter</td>
            <td class="arabic">رَسَم الخالق العالِممن قَبل إنشاء العالَمأن يُذبح لأجل آدمفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_9">
            <td class="coptic" style="border-right: 1px solid black;">The devil adorned his trap
                To catch Adam the man
                He caught him and Eve too
                At the gates of Zion’s daughter</td>
            <td class="arabic">زخرف فخة الشيطانليصيد آدم الإنسانصاده وحواء الاثنانفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_10">
            <td class="coptic" style="border-right: 1px solid black;">A predator thief hurried
                A monster and false prophet
                Overwhelmed the Father’s children
                At the gates of Zion’s daughter</td>
            <td class="arabic">سبق لص سلابوحش ونبي كذابطغى أولاد الآبفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Enslaved them in sin
                From a bad fruit
                They trampled the commandment
                At the gates of Zion’s daughter</td>
            <td class="arabic">سباهم بالخطيةمن ثمرة رديةداسوا الوصيةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Preceded the ancient
                Written in truth
                Charter and Deed
                At the gates of Zion’s daughter</td>
            <td class="arabic">سبقت العتيقةكُتبت بالحقيقةحُجّة وثيقةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Thorns and spines sprout for You
                Adam’s shame prepared for You
                Gave You a crown of thorns
                At the gates of Zion’s daughter</td>
            <td class="arabic">شوكا وحَسَكا تنبت لكزَلَّة آدم هيأت لكاكليل شوك صَنَعَت لكفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_14">
            <td class="coptic" style="border-right: 1px solid black;">God’s promises came true
                As was said in the Torah
                The woman’s Seed will come
                At the gates of Zion’s daughter</td>
            <td class="arabic">صدُقَت مواعيد اللهكما قالت التوراةيأتي نسل المراةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_15">
            <td class="coptic" style="border-right: 1px solid black;">A Boy and Mighty God
                Created all the plans
                And killed a giant snake
                At the gates of Zion’s daughter</td>
            <td class="arabic">صبى وإله قديرصنع كل التدابيروقتل ثعبان كبيرفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Your sayings came true
                Sanctified in all Your deeds
                Your works are proclaimed
                At the gates of Zion’s daughter</td>
            <td class="arabic">صدَقت أقوالكتتقدس في أفعالكلتُخَبَّر بأعمالكفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Adam was lost and confounded
                When he ate of the fruit
                And was lost among the trees
                At the gates of Zion’s daughter</td>
            <td class="arabic">ضل آدم أيضًا واحتارحين أكل الأثماروتاه بين الأشجارفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Gladly, the Lord called for him
                Spared him from the enemy
                And saved him with His Blood
                At the gates of Zion’s daughter</td>
            <td class="arabic">طلبه ربه برضاهو من العدو نجاهوبدمه قد فداهفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Pure, faithful, and truthful
                Fulfilled His promise
                Melchizedek sat
                At the gates of Zion’s daughter</td>
            <td class="arabic">طاهر وأمين صادقكمل وعده السابقجلس ملكيصادقفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_20">
            <td class="coptic" style="border-right: 1px solid black;">The spice appeared and exuded
                My Father and I planted
                A garden of the fruit of goodness
                At the gates of Zion’s daughter</td>
            <td class="arabic">ظهر الطِيبِ وفاحغرسْتُ أنا وأبي الفلاحبستان ثمر الصلاحفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_21">
            <td class="coptic" style="border-right: 1px solid black;">A bride, maiden and virgin
                St. Paul spoke of her
                About the church he said
                At the gates of Zion’s daughter</td>
            <td class="arabic">عروس بكر بتولخطبها بولس الرسولعن البيعة يقولفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Sheep inside the ranch
                Shepherded in the midst of town
                The gentle mother
                At the gates of Zion’s daughter</td>
            <td class="arabic">غنم داخل الضيعةترتع وسط البيعةالأم الوديعةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_23">
            <td class="coptic" style="border-right: 1px solid black;">He dispersed and gave the poor
                His righteousness at all times
                For His assembled people
                At the gates of Zion’s daughter</td>
            <td class="arabic">فرق وأعطى المساكينبره في كل حينلشعبه المجتمعينفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_24">
            <td class="coptic" style="border-right: 1px solid black;">In the mystery of the Eucharist
                Three great virtues
                Love, hope, and faith
                At the gates of Zion’s daughter</td>
            <td class="arabic">في سر القربانثلاث فضائل عظاممحبة ورجاء وإيمانفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_25">
            <td class="coptic" style="border-right: 1px solid black;">In the Temple of Solomon
                Two towering columns
                Repentance and forgiveness
                At the gates of Zion’s daughter</td>
            <td class="arabic">في هيكل سليمانعمودان رفيعا البُنيانالتوبة والغفرانفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_26">
            <td class="coptic" style="border-right: 1px solid black;">St. John the apostle said
                The Mighty Father
                Sent His Son, a witness
                At the gates of Zion’s daughter</td>
            <td class="arabic">قال يوحنا البشيرأن الآب القديرأرسل ابنه خبيرفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_27">
            <td class="coptic" style="border-right: 1px solid black;">The words of the psalm came true
                Our Lord was engulfed in light
                He ruled with joy
                At the gates of Zion’s daughter</td>
            <td class="arabic">كمُل كلام المزمورربنا اشتمل بالنوريملك بالسرورفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_28">
            <td class="coptic" style="border-right: 1px solid black;">St. Luke the great said
                It is written in the gospel
                A Man had a steward
                At the gates of Zion’s daughter</td>
            <td class="arabic">وقال لوقا الجليلمكتوب في الإنجيلانسان كان له وكيلفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_29">
            <td class="coptic" style="border-right: 1px solid black;">When he heard of his deeds
                He called and asked him to give
                An account of his stewardship
                At the gates of Zion’s daughter</td>
            <td class="arabic">لما سَمع بأعمالهطلبه أيضًا وسألهيعطى حساب أموالهفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_30">
            <td class="coptic" style="border-right: 1px solid black;">The law of Israel was first
                Then the gospel came
                The wisdom of every age
                At the gates of Zion’s daughter</td>
            <td class="arabic">بدأ ناموس اسرائيلثم رفع الإنجيلحكمة كل جيلفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_31">
            <td class="coptic" style="border-right: 1px solid black;">He fulfilled the law,
                The canons of Jacob’s sons
                And fulfilled the written words
                At the gates of Zion’s daughter</td>
            <td class="arabic">أكمل الناموس المطلوبشريعة بنى يعقوبوتمم المكتوبفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_32">
            <td class="coptic" style="border-right: 1px solid black;">He raised the brass serpent
                In the wilderness of judgment
                A symbol of the cross of Christ
                At the gates of Zion’s daughter</td>
            <td class="arabic">نصب حية النحاسفي برية القصاصرمز صليب ماسياسفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Jesus spoke on the cross
                And called His mother
                And John the beloved
                At the gates of Zion’s daughter</td>
            <td class="arabic">نطق يسوع فوق الصليبودعى أمه والحبيبيوحنا عالي النصيبفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_34">
            <td class="coptic" style="border-right: 1px solid black;">He gave him a gift
                A precious inheritance
                The mother of mankind
                At the gates of Zion’s daughter</td>
            <td class="arabic">هاداه بالعطيةوأعطاه وصيةبأم البشريةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Behold a woman clearly
                Pregnant openly
                A Son came forth from her
                At the gates of Zion’s daughter</td>
            <td class="arabic">هوذا إمرأة في الجليانحبلى باستعلانوابن منها كانفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_36">
            <td class="coptic" style="border-right: 1px solid black;">This woman escaped
                With the wings of the words of God
                The Gospel and the Torah
                At the gates of Zion’s daughter</td>
            <td class="arabic">هربت هذه المرأة بجناحي أقوال اللهالحديثة والتورارةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_37">
            <td class="coptic" style="border-right: 1px solid black;">She fled into the wilderness
                Zion the pure
                To care for the Offspring
                At the gates of Zion’s daughter</td>
            <td class="arabic">هربت في البريةصهيون النقيةلتعول الذريةفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_38">
            <td class="coptic" style="border-right: 1px solid black;">The author of this praise
                Abdelmesih the hegumen
                Offers this praise
                At the gates of Zion’s daughter</td>
            <td class="arabic">واضع هذا المديحالقمص عبد المسيحيقدم التسبيحفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_39">
            <td class="coptic" style="border-right: 1px solid black;">For I am not counted
                And estranged from Sheikh Masood1
                I offer this worship
                At the gates of Zion’s daughter
                (1) Sheikh Masood: (city in upper Egypt)</td>
            <td class="arabic">لأني لست معدودوغريب من الشيخ مسعودأقدم السجودفي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_40">
            <td class="coptic" style="border-right: 1px solid black;">O Lord keep our patriarch
                And his partners our bishops
                With their prayers, confirm us
                At the gates of Zion’s daughter</td>
            <td class="arabic">يا رب احفظ بطركناوشركاءه اساقفتناوبصلواتهما ثبتنافي أبواب ابنة صهيون</td>
        </tr>
        <tr id="table_31_row_41">
            <td class="coptic" style="border-right: 1px solid black;">O Lord keep our priests
                And also our deacons
                And the rest of our people
                At the gates of Zion’s daughter</td>
            <td class="arabic">يا رب احفظ كهنتناوأيضًا شمامستنامع كافة أمتنافي أبواب ابنة صهيون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_32" data-title="Your Table Title Here"
        onclick="toggleTable('table_32', this)">+ Your Table Title Here</span>
    <table id="table_32" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_32_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Amen. Alleluia. Lord have mercy. Lord have mercy.
                Lord have mercy.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.
                Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم.</td>
        </tr>
        <tr id="table_32_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are You, O Lord, God of our fathers, And
                exceedingly to be blessed, and exalted above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ̀ⲛⲧⲉ ⲛⲉⲛⲓⲟϯ : ̀ⲕⲉⲣϩⲟⲩ̀ⲟ
                ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ϭⲓⲥⲓ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">مبارك أنت أيها الرب إله أبائنا ومتزايد بركة ومتزايد عـلواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Blessed is the Holy Name of Your glory, And
                exceedingly to be blessed, and exalted above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲛϫⲉ ⲡⲓⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲉ ⲡⲉⲕ̀ⲱⲟⲩ :
                ̀̀̀̀̀̀̀̀̀̀̀̀̀ϥⲉⲣϩⲟⲩ̀ⲟ ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ϥⲉⲣϩⲟⲩ̀ⲟ ϭⲓⲥⲓ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">مبارك اسم مجدك القـدوس ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are You in the holy temple of Your glory,
                And exceedingly to be blessed, and exalted above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">˙Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ ̀ⲛⲧⲉ ⲡⲉⲕ̀ⲱⲟⲩ ⲉⲑⲟⲩⲁⲃ :
                ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ϭⲓⲥⲓ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">مبارك أنت فى هيكل مجدك المقدس ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are You who beholds the depths and sits
                upon the Cherubim, And exceedingly to be blessed, and exalted above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲫⲏⲉⲑⲛⲁⲩ ̀ⲉⲛⲓⲛⲟⲩⲛ ⲉϥϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ
                Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ : ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ϭⲓⲥⲓ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">مبارك أنت أيها الناظر إلى الأعماق الجالس على الشاروبيم ومتزايد بركة ومتزايد علواً إلى
                الآباد.</td>
        </tr>
        <tr id="table_32_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are You on the throne of Your Kingdom, And
                exceedingly to be blessed, and exalted above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ϩⲓϫⲉⲛ ⲡⲓ̀ⲑⲣⲟⲛⲟⲥ ̀ⲛⲧⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ :
                ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ϭⲓⲥⲓ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">مبارك أنت على عرش مُلـكك ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are You in the firmament of heaven, And
                exceedingly to be blessed, and exalted above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓ̀ⲥⲧⲉⲣⲉ̀ⲱⲙⲁ ̀ⲛⲧⲉ ̀ⲧⲫⲉ :
                ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲕⲉⲣϩⲟⲩ̀ⲟ ϭⲓⲥⲓ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">مبارك أنت فى فلـك السماء ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you works of the Lord: Praise
                Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲛⲓ̀ϩⲃⲏⲟⲩ̀ⲓ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركى الرب ياجميع أعمال الرب سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O heaven: Praise Him and exalt Him
                above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲛⲓⲫⲏⲟⲩ̀ⲓ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ
                ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركى الرب ايتها السموات سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you angels of the Lord: Praise
                Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركوا الرب يا جميع ملائكة الرب سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you waters above the heaven:
                Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲉⲧⲥⲁ ̀ⲡϣⲱⲓ ̀ⲛ̀ⲧⲫⲉ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركى الرب يا جميع المياه التي فوق السماء سبّحيـه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you powers of the Lord: Praise
                Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϫⲟⲙ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركا الرب يا جميع قوات الرب سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O sun and moon: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ
                ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركا الرب أيتها الشمس والقمر سبّحاه وزيداه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all ye stars of heaven: Praise Him
                and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲓⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ ̀ⲧⲫⲉ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب ياسائر نجوم السماء سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you rain and dew: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲟⲩⲛϩⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲱϯ: ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركى الرب أيتها الأمطار مع الأنداء سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you clouds and winds: Praise Him
                and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϭⲏⲡⲓ ⲛⲉⲙ ⲛⲓⲑⲏⲟⲩ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركي الرب أيتها السحب والرياح سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you spirits: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓ̀ⲡⲛⲉⲩⲙⲁ ⲧⲏⲣⲟⲩ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ
                ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركي الرب ياجميع الأرواح سبحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O fire and heat: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓ̀ⲭⲣⲱⲙ ⲛⲉⲙ ⲡⲓⲕⲁⲩⲙⲁ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركا الرب أيتها النار والحرارة سبّحاه وزيداه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O cold and heat: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓ̀ⲱϫⲉⲃ ⲛⲉⲙ ⲡⲓⲕⲁⲩⲥⲱⲛ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركا الرب أيها البرد والحر سبّحاه وزيداه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you dew and winds: Praise Him
                and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲓⲱϯ ⲛⲉⲙ ⲛⲓⲛⲓϥⲓ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركي الرب أيتها الأهوية والأنداء سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you night and days: Praise Him
                and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓ̀ⲉϫⲱⲣϩ ⲛⲉⲙ ⲛⲓ̀ⲉϩⲟⲟⲩ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركي الرب أيتها الليالى والأيام سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O light and darkness: Praise Him
                and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛⲉⲙ ⲡⲓⲭⲁⲕⲓ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركا الرب أيها النور والظلمة سبّحاه وزيداه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O frost and cold: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓϫⲁϥ ⲛⲉⲙ ⲡⲓ̀ⲱϫⲉⲃ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركا الرب أيها البرد والصقيع سبّحاه وزيداه علواً إلى الآباد</td>
        </tr>
        <tr id="table_32_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O snow and ice: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ϯⲡⲁⲭⲛⲏ ⲛⲉⲙ ⲡⲓⲭⲓⲱⲛ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركا الرب أيها الجليد والثلج سبّحاه وزيداه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you lightnings and clouds:
                Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲉⲧⲉⲃⲣⲏϫ ⲛⲉⲙ ⲛⲓϭⲏⲡⲓ: ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب أيتها البروق والسحب سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all the earth: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲕⲁϩⲓ ⲧⲏⲣϥ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ
                ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب أيتها الأرض كلها سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you mountains and all hills:
                Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲧⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟⲩ ⲧⲏⲣⲟⲩ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب أيتها الجبال وجميع الآكام سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you things that spring upon
                the earth: Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲧⲏⲣⲟⲩ ⲉⲧⲣⲏⲧ ϩⲓϫⲉⲛ ̀ⲡϩⲟ ̀ⲙ̀ⲡⲕⲁϩⲓ :
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">بارك الرب يا جميع ما ينبت على وجه الأرض سبّحه وزيده علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you fountains: Praise Him and
                exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲟⲩⲙⲓ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ
                ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب أيتها الينابيع سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_29">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you seas and rivers: Praise Him
                and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓ̀ⲁⲙⲁⲓⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲁⲣⲱⲟⲩ: ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركي الرب أيتها البحار والأنهار سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_30">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you whales and all that moves in
                the waters: Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲕⲏⲧⲟⲥ ⲛⲉⲙ ⲉⲛⲭⲁⲓ ⲛⲓⲃⲉⲛ ⲉⲧⲕⲓⲙ ϧⲉⲛ
                ⲛⲓⲙⲱⲟⲩ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركي الرب أيتها الحيتان وجميع ما يتحرك في المياه سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you birds of the sky: Praise
                Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϩⲁⲗⲁϯ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ ̀ⲧⲫⲉ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب يا جميع طيور السماء سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, all you wild beasts and cattle:
                Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲑⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲉⲃⲛⲱⲟⲩ̀ⲓ ⲧⲏⲣⲟⲩ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركي الرب أيتها الوحوش وكل البهائم سبّحيه وزيديه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you sons of men; worship the
                Lord: Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϣⲏⲣⲓ ̀ⲛⲧⲉ ⲛⲓⲣⲱⲙⲓ ⲟⲩⲱϣⲧ ̀ⲙⲠϭⲟⲓⲥ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب يا بنى البشر واسجدوا للرب سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O Israel: Praise Him and exalt Him
                above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ Ⲡⲓ̀ⲥⲣⲁⲏⲗ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ
                ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">بارك الرب يا اسرائيل سبّحه وزيده علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you priests of the Lord: Praise
                Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲟⲩⲏⲃ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب يا كهنة الرب سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you servants of the Lord: Praise
                Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓ̀ⲉⲃⲓⲁⲓⲕ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ ̀ⲉⲣⲟϥ
                ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب يا عبيد الرب سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_37">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you spirits and souls of the
                just: Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓ̀ⲡⲛⲉⲩⲙⲁ ⲛⲉⲙ ⲛⲓⲯⲩⲭⲏ ̀ⲛⲧⲉ ⲛⲓ̀ⲑⲙⲏⲓ :
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب ياارواح وانفس الصديقين سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_38">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you holy and humble of heart:
                Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ⲛⲏⲉⲧⲑⲉⲃⲓ̀ⲏⲟⲩⲧ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ
                : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب أيها القديسون والمتواضعو القلوب سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_39">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O Hananiah, Azariah, Mishael:
                Praise Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ̀ Ⲁⲛⲁⲛⲓⲁⲥ ̀̀Ⲁⲍⲁⲣⲓⲁⲥ Ⲙⲓⲥⲁⲏⲗ : ϩⲱⲥ
                ̀ⲉⲣⲟϥ ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب ياحنانيا وعزاريا وميصائيل سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_40">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord, O you who worship the Lord, the
                God of our fathers: Praise ye Him and exalt Him above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲏⲉⲧⲉⲣⲥⲉⲃⲉⲥⲑⲉ ̀ⲙⲠϭⲟⲓⲥ Ⲫϯ ̀ⲛⲧⲉ ⲛⲉⲛⲓⲟϯ
                : ϩⲱⲥ ̀ⲉⲣⲟϥ ⲁⲣⲓϩⲟⲩ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ .</td>
            <td class="arabic">باركوا الرب ياعابدي الرب اله آبائنا سبّحوه وزيدوه علواً إلى الآباد.</td>
        </tr>
        <tr id="table_32_row_41">
            <td class="coptic" style="border-right: 1px solid black;">O sing unto Him who was crucified, buried, and
                resurrected for us, and trampled and abolished death. Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓⲯⲁⲗⲓⲛ ̀ⲉⲫⲏ̀ⲉⲧⲁⲩⲁϣϥ : ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ:
                ⲁϥⲧⲱⲛϥ ⲁϥⲕⲱⲣϥ ̀ⲙ̀ⲫⲙⲟⲩ ⲁϥϯ ϣⲟϣϥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">رتـلوا للذي صلب عنا وقبر وقام وأبطل الموت وأهانه سبّحوه وزيدوه علواً.</td>
        </tr>
        <tr id="table_32_row_42">
            <td class="coptic" style="border-right: 1px solid black;">Take off the old man, and put on the new and
                superior one, come closer to greatness of mercy, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲃⲱϣ ̀ⲙⲡⲓⲣⲱⲙⲓ ̀ⲙⲡⲁⲗⲉⲟⲥ: ⲟⲩⲟϩ ϫⲱⲗϩ ̀ⲙⲡⲓⲃⲉⲣⲓ
                ⲉⲩ̀ⲕⲗⲉⲟⲥ: ⲟⲩⲟϩ ̀ⲉϧⲱⲛⲧ ̀ⲉⲙⲉⲅⲁ̀ⲉⲗⲉⲟⲥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">اخلعوا الإنسان العتيق والبسوا الجديد الفاخر. واقتربوا إلى عظم الرحمة سبّحوه وزيدوه علواً.
            </td>
        </tr>
        <tr id="table_32_row_43">
            <td class="coptic" style="border-right: 1px solid black;">All you Christian people, the priests and the
                deacons, glorify the Lord for He is worthy, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲅⲉⲛⲟⲥ ̀ⲛⲛⲓ̀ⲭⲣⲓⲥⲧ̀ⲓⲁⲛⲟⲥ: ⲛⲓ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲕⲉ
                ⲇⲓ̀ⲁⲕⲟⲛⲟⲥ: ⲙⲁ̀ⲱⲟⲩ ̀ⲙⲠϭⲟⲓⲥ ϫⲉ ⲟⲩϩⲓⲕⲁⲛⲟⲥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">ياجنس المسيحين القسـوس والشمامسة أعطوا مجداً للرب لانه مستوجب سبّحوه وزيدوه علواً.</td>
        </tr>
        <tr id="table_32_row_44">
            <td class="coptic" style="border-right: 1px solid black;">Come to us O three children, whom Christ our God
                has lifted, and from the devil has delivered, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲉⲩⲧⲉ ϩⲁⲣⲟⲛ ̀ⲱ ⲡⲓϣⲟⲙⲧ ̀ⲛ̀ⲁⲗⲟⲩ : ̀ⲉⲧⲁ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ
                Ⲡⲉⲛⲛⲟⲩϯ ̀ⲟⲗⲟⲩ : ⲁϥⲛⲁϩⲙⲟⲩ ̀ⲉⲃⲟⲗϩⲁ ⲡⲓⲇⲓ̀ⲁⲃⲟⲗⲟⲩ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">هلمّ إلينا أيها الثلاثة فتية الذين رفعهم المسيح إلهنا وأنقذهم من ابليس . سبّحوه وزيدوه
                علواً.</td>
        </tr>
        <tr id="table_32_row_45">
            <td class="coptic" style="border-right: 1px solid black;">For the sake of your God the Messiah, the giver of
                all good things, come unto us O Hananiah, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ Ⲡⲉⲕⲛⲟⲩϯ Ⲙⲁⲥⲓⲁⲥ ̀ⲫⲣⲉϥϯ ̀ⲛⲉⲩⲉⲣⲅⲉⲥⲓⲁⲥ: ̀ⲁⲙⲟⲩ
                ϣⲁⲣⲟⲛ Ⲁⲛⲁⲛⲓⲁⲥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">من أجل الهك ماسيا المانح الإحسان هلمّ إلينا ياحنانيا سبّحوه وزيدوه علوا.</td>
        </tr>
        <tr id="table_32_row_46">
            <td class="coptic" style="border-right: 1px solid black;">O Azariah the zealot, evening, and morning and at
                noon glorify the power of the Trinity, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲍⲏⲗⲱⲧⲉ Ⲁⲍⲁⲣⲓⲁⲥ ⲉⲥⲡⲉⲣⲁⲥ ⲕⲉ ̀ⲡⲣⲱ̀ⲓ ⲕⲉ ⲙⲉⲥⲏⲙ̀ⲃⲣⲓⲁⲥ:
                ⲙⲁ̀ⲱⲟⲩ ̀ⲛ̀ⲧϫⲟⲙ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">يا عزاريا الغيور عشية وبكرة والظهيرة أعط مجداً لقوة الثالوث. سبّحه وزده علواً.</td>
        </tr>
        <tr id="table_32_row_47">
            <td class="coptic" style="border-right: 1px solid black;">Behold Emmanuel, is now in our midst O Mishael,
                proclaim with the voice of joy, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲏⲡⲡⲉ ⲅⲁⲣ ⲓⲥ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϩⲓⲧⲉⲛ ⲙⲏϯ ̀ⲱ Ⲙⲓⲥⲁⲏⲗ: ⲗⲁⲗⲓ
                ϧⲉⲛ ⲟⲩ̀ⲥⲙⲏ ̀ⲛⲑⲉⲗⲏⲗ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">فها هوذا عمانوئيل فى وسطنا يا ميصائيل تكلم بصوت التهليل . سبّحه وزده علواً.</td>
        </tr>
        <tr id="table_32_row_48">
            <td class="coptic" style="border-right: 1px solid black;">Gather now and persevere, and proclaim with the
                priests, bless the Lord all His works, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲱⲟⲩϯ ϯⲛⲟⲩ ⲕⲁⲧⲁⲭⲓⲛ ⲧⲏⲣⲟⲩ: ⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓ̀ⲡⲣⲉⲥⲃⲩⲧⲏⲣⲟⲩ:
                ̀ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲛⲉϥ̀ϩⲃⲏⲟⲩ̀ⲓ ⲧⲏⲣⲟⲩ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">اجتمعوا وثابروا جميعاً . تكلموا مع القسوس وسبّحى الرب ياجميع أعماله سبّحوه وزيدوه علواً.
            </td>
        </tr>
        <tr id="table_32_row_49">
            <td class="coptic" style="border-right: 1px solid black;">The heavens declare the glory, of God until this
                day, O you angels whom He has made, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲓⲥ ⲛⲓⲫⲏⲟⲩ̀ⲓ ⲥⲉⲥⲁϫⲓ ̀ⲙ̀ⲡ̀ⲱⲟⲩ: ̀ⲙⲪⲛⲟⲩϯ ϣⲁ ̀ⲉϧⲟⲩⲛ
                ̀ⲙⲫⲟⲟⲩ: ̀ⲱ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ̀ⲉⲧⲁϥ̀ϫⲫⲱⲟⲩ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">ها السموات تنطق بمجد الله الى هذا اليوم . يا أيها الملائكة الذين أنشأهم سبحوه وزيدوه
                علواً</td>
        </tr>
        <tr id="table_32_row_50">
            <td class="coptic" style="border-right: 1px solid black;">Now all you powers of the Lord, bless His honored
                name, O sun and moon and all the stars, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲛⲩⲛ ⲇⲩⲛⲁⲙⲓⲥ ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ: ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉϥⲣⲁⲛ ⲧⲟⲩ
                ⲧⲓⲙⲓⲟⲩ: ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ ⲛⲉⲙ ⲛⲓⲥⲓⲟⲩ: ϩⲱⲥ ̀ ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">والآن ياقوات الرب باركوا أسمه الكريم. أيتها الشمس والقمر والنجوم. سـبّحيه وزيديه علواً.
            </td>
        </tr>
        <tr id="table_32_row_51">
            <td class="coptic" style="border-right: 1px solid black;">And also O you rain and dew, sing praises unto our
                Savior, for He is God of our fathers, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲗⲟⲓⲡⲟⲛ ⲛⲓⲙⲟⲩ̀ⲛϩⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲱϯ: ⲉⲩⲫⲏⲙⲓⲥⲁⲧⲉ
                ⲡⲉⲛⲣⲉϥⲥⲱϯ: ϫⲉ ̀ⲛⲑⲟϥ ⲡⲉ Ⲫⲛⲟⲩϯ ̀ⲛⲧⲉ ⲛⲉⲛⲓⲟϯ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">وأيضا ايتها الأمطار والأنداء امدحى مخلصنا لأنه هو اله آبائنا . سبحيه وزيديه علواً.</td>
        </tr>
        <tr id="table_32_row_52">
            <td class="coptic" style="border-right: 1px solid black;">Glorify the Lord O clouds and winds, together with
                the souls and the spirits, O you cold and fire and heat, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁ̀ⲱⲟⲩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲱ ⲛⲓϭⲏⲡⲓ ⲉⲩⲙⲁ: ⲛⲓⲑⲏⲟⲩ ⲛⲉⲙ ⲛⲓⲛⲓϥⲓ
                ⲛⲉⲙ ⲛⲓ̀ⲡⲛⲉⲩⲙⲁ: ⲡⲓϫⲁϥ ⲛⲉⲙ ⲡⲓ̀ⲭⲣⲱⲙ ⲛⲉⲙ ⲡⲓⲕⲁⲩⲙⲁ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">أعطى مجداً أيتها السحب معاً والأهوية والنفوس والأرواح والبرد والنار والحرارة. سبّحيه
                وزيده علوا.</td>
        </tr>
        <tr id="table_32_row_53">
            <td class="coptic" style="border-right: 1px solid black;">You also nights and days, light and darkness and
                lightning, glorify the Lover of Mankind, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲩⲕⲧⲉⲥ ⲕⲉ ̀ⲏⲙⲉⲣⲉ ⲣⲱ ⲡⲉ: ⲫⲱⲥⲕⲉ ̀ⲥⲕⲟⲧⲟⲥ ⲕⲉ ⲁⲥ̀ⲧⲣⲁⲡⲉ:
                ϫⲉ ⲇⲟⲝⲁⲥⲓ ⲫⲓⲗⲁⲛ̀ⲑⲣⲱⲡⲉ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">ايتها الليالى والأيام أيضاً والنور والظلمة والبروق قائلة المجد لك يا محب البشر. سبّحوه
                وزيدوه علواً.</td>
        </tr>
        <tr id="table_32_row_54">
            <td class="coptic" style="border-right: 1px solid black;">You trees and all that springs on the earth, and
                all that moves in the waters, mountains and the forests, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲝⲩⲗⲁ ⲕⲉ ⲡⲁⲛⲧⲁ ⲧⲁ ⲫⲩⲟⲙⲉⲛⲁ: ⲉⲛ ⲧⲏ ⲅⲉ ⲕⲉ ⲡⲁⲛⲧⲁ
                ⲧⲁⲕⲓⲛⲟⲩⲙⲉⲛⲁ: ϩⲓ ⲛⲓⲙⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲧⲱⲟⲩ ⲛⲉⲙ ̀ⲇⲣⲩⲙⲟⲛⲁ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">أيتها الاشجار وجميع ما ينبت فى الأرض وكل ما يتحرك في الميــاه والجبال والغياض سبّحوه
                وزيدوه علواً.</td>
        </tr>
        <tr id="table_32_row_55">
            <td class="coptic" style="border-right: 1px solid black;">Praise without ceasing, the Lord the King of the
                Kings, O you rivers and seas, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲟⲛ ̀ⲥⲙⲟⲩ ̀ⲛⲁⲧⲭⲁⲣⲱⲟⲩ: ̀ⲉⲠϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ ̀ⲛⲧⲉ
                ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲛⲓ̀ⲁⲙⲁⲓⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲁⲣⲱⲟⲩ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">وأيضاً سبّحى بغير فتور الرب ملك المــلوك أيتها البحار والأنهار. سبّحيه وزيديه علواً.</td>
        </tr>
        <tr id="table_32_row_56">
            <td class="coptic" style="border-right: 1px solid black;">And we also seeing them, let us say with all these
                things, bless the Lord all you birds, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲁⲓⲣⲏϯ ⲁⲛⲟⲛ ⲧⲉⲛⲛⲁⲩ ̀ⲉⲣⲱⲟⲩ: ⲙⲁⲣⲉⲛϫⲟⲥ ⲛⲉⲙ ⲛⲁⲓ ⲟⲛ
                ⲧⲏⲣⲟⲩ: ̀ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲛⲓϩⲁⲗⲁϯ ⲧⲏⲣⲟⲩ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">هكذا نحن إذ ننظر اليهم فلنقل مع هذه الموجودات جميعها باركي الرب يا جميع الطيور سبّحيه
                وزيديه علواً.</td>
        </tr>
        <tr id="table_32_row_57">
            <td class="coptic" style="border-right: 1px solid black;">O snow and ice, cattle and wild beasts, bless the
                Lord of Lords, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲱ ̀ⲛⲛⲓⲡⲁⲭⲛⲏ ⲛⲉⲙ ⲛⲓⲭⲓⲱⲛ: ⲕⲉ ̀ⲕⲧⲏⲛⲱⲛ ⲛⲉⲙ ⲛⲓⲑⲏⲣⲓⲟⲛ:
                ̀ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲧⲱⲛ ⲕⲩⲣⲓⲟⲛ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">أيها الجليد والثلج والبهائم والوحوش باركي رب الارباب سبّحيه وزيديه علواً.</td>
        </tr>
        <tr id="table_32_row_58">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord as befits Him, and not like the
                disobedient, all you sons of men, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲕⲁⲧⲁ ̀ⲫⲧⲱⲙⲓ: ̀ⲉⲣⲟϥ ⲕⲉ ⲟⲩ ⲙⲏ
                ⲡⲁⲣⲁⲛⲟⲙⲓ: ̀ⲱ ⲛⲓϣⲏⲣⲓ ̀ⲛⲧⲉ ⲛⲓⲣⲱⲙⲓ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">سبّحوا الرب كما يليق به وليس كالمخالفين يا أبناء البشر. سبّحوه وزيدوه علواًً.</td>
        </tr>
        <tr id="table_32_row_59">
            <td class="coptic" style="border-right: 1px solid black;">O Israel offer before him, honor and glory in a
                joyful voice, all you priests of Emmanuel, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲓⲙⲏ ⲕⲉ ⲇⲟⲝⲁ ̀ⲱ Ⲡⲓⲥⲣⲁⲏⲗ ̀ⲓⲛⲓ ⲛⲁϩⲣⲁϥ ϧⲉⲛ ⲟⲩ̀ⲥⲙⲏ
                ̀ⲛⲑⲉⲗⲏⲗ: ⲛⲓⲟⲩⲏⲃ ̀ⲛⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">مجداً وإكراماً قدم أمامه يا اسرائيل بصوت التهليل . يا كهنة عمانوئيل سبّحوه وزيدوه علواً.
            </td>
        </tr>
        <tr id="table_32_row_60">
            <td class="coptic" style="border-right: 1px solid black;">You servants of the true God, the souls of the
                righteous, and the humble and the charitable, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀̀̀̀ Ⲩⲡⲏⲣⲉⲧⲱⲛ ̀ⲙⲪⲛⲟⲩϯ ̀ⲙⲙⲏⲓ: ⲛⲉⲙ ⲛⲓⲯⲩⲭⲏ ̀ⲛⲧⲉ
                ⲛⲓ̀ⲑⲙⲏⲓ ⲛⲏⲉⲧⲑⲉⲃⲓ̀ⲏⲟⲩⲧ ̀ⲛⲣⲉϥⲙⲉⲓ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">يا خدام الله الحقيقي وأنفس الأبرار المتواضعين المحبين سبّحوه وزيدوه علواً.</td>
        </tr>
        <tr id="table_32_row_61">
            <td class="coptic" style="border-right: 1px solid black;">God my God is the one, who saved you from danger,
                O Sedrach Misach and Abdenago, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲛⲟⲩϯ Ⲡⲁⲛⲟⲩϯ ̀ⲉⲅⲱ: ⲡⲉⲧⲉⲛⲣⲉϥⲥⲱϯ ⲉⲕⲧⲟⲛ ̀ⲁⲅⲱ: Ⲥⲉⲇⲣⲁⲭ
                Ⲙⲓⲥⲁⲭ Ⲁⲃⲇⲉⲛⲁⲅⲱ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">الله إلهى أنا هو مخلصكم من الخطر ياسدراك وميساك وأبدناغو. سبّحوه وزيدوه علوا.</td>
        </tr>
        <tr id="table_32_row_62">
            <td class="coptic" style="border-right: 1px solid black;">Hurry with great haste, O you righteous of the
                Lord, and all the creatures He has made, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲱⲗⲉⲙ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲛ̀ϣⲣⲱⲓⲥ: ̀ⲱ ⲛⲏⲉⲧⲉⲣⲥⲉⲃⲉⲥⲑⲉ
                ̀ⲙⲠϭⲟⲓⲥ: ⲛⲉⲙ ⲛⲓⲫⲩⲥⲓⲥ ⲧⲏⲣⲟⲩ ⲉⲧⲁϥⲁⲓⲥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">أسرعوا بحرص عظيم يا أتقياء الرب وكل الطبائع التي صنعها سبّحوه وزيدوه علواً.</td>
        </tr>
        <tr id="table_32_row_63">
            <td class="coptic" style="border-right: 1px solid black;">Coolness and repose without ceasing, grant unto
                all of us, that we may joyfully proclaim, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲯⲩⲭⲟⲥ ⲕⲉ ̀ⲁⲛⲁⲡⲁⲩⲥⲓⲥ: ⲙⲟⲓ ⲛⲁⲛ ⲧⲏⲣⲉⲛ ⲭⲱⲣⲓⲥ ̀ⲑⲣⲁⲩⲥⲓⲥ:
                ⲉⲑⲣⲉⲛϫⲱ ϧⲉⲛ ⲟⲩ̀ⲁⲡⲟⲗⲁⲩⲥⲓⲥ : ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">برودة ونياحاً أعطنا كلنا بغير انقطاع لنقول بتمتع سبّحوه وزيدوه علوا.ً</td>
        </tr>
        <tr id="table_32_row_64">
            <td class="coptic" style="border-right: 1px solid black;">And also Your poor servant Sarkis, make him
                without condemnation, that we may join all those and say, Praise Him and exalt Him above all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲥⲁⲩⲧⲱⲥ ⲡⲉⲕⲃⲱⲕ ⲡⲓ̀ⲡⲧⲱⲭⲟⲥ: Ⲥⲁⲣⲕⲓⲥ ̀ⲁⲣⲓⲧϥ ⲉϥⲟⲓ
                ̀ⲛ̀ⲉⲛⲟⲭⲟⲥ ̀ⲉⲥⲁϫⲓ ⲛⲉⲙ ⲛⲁⲓ ϩⲱⲥ ⲙⲉⲧⲟⲭⲟⲥ: ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ̀ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">كذلك عبدك المسكين سركيس اجعله بغير دينونة. ليقول مع هؤلاء كشريك سبّحوه وزيدوه علواً.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_33" data-title="Your Table Title Here"
        onclick="toggleTable('table_33', this)">+ Your Table Title Here</span>
    <table id="table_33" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_33_row_0">
            <td class="coptic" style="border-right: 1px solid black;">God existent before the ages
                Sent His chosen Angel
                To deliver the youths from the furnace
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">الله الأزلى قبل الأدهارارسل ملاكه المختار نجى الفتية من أتون النارهوس إير"وف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Nebuchadnezzar the king made a golden image
                And told the ministers and all people
                When you hear the sound of the trumpet
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">بختنصر الملك أقام صورة من ذهبوقال للوزراء وكل الشعبإذا ما سمعتم آلات الطربهوس إيروف
                آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Immediately come out and fall down
                To worship the golden image
                Or you'll be cast in the furnace
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">تعالوا لوقتكم مسرعينولتلك الصورة ساجدينوإذا لم تسجدوا تلقون فى الآتونهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Then came forth the Chaldeans
                And worshipped before the image
                Except for the three saintly youths
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">تقدم الكلدانيونلتلك الصورة خروا ساجدينماخلا الثلاثة الفتية القديسينهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_4">
            <td class="coptic" style="border-right: 1px solid black;">O come Ananias and praise
                With the voice of salvation
                And praise your God the Messiah
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">تعال إلينا ياأنانياسورتل معنا بصوت الخلاصوسبح إلهك ماسياسهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Men came and informed the king saying
                There are three men in the city
                Who do not worship the image
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">جاء قوم وأعلموا الملك قائلينهاهنا ثلاثة رجال ساكنينلم يسجدوا للصورة بل مهملينهوس إيروف
                آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_6">
            <td class="coptic" style="border-right: 1px solid black;">The king gathered the leaders
                The authorities and all ranks
                And ordered the furnace to be hotter
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">جمع الملك رؤساء الشعبوأرباب الدولة وكل الرتبوقال لهم أوقدوا الأتون بالحطبهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_7">
            <td class="coptic" style="border-right: 1px solid black;">They bound the hands of the three youths
                And cast them in the midst of the furnace
                But to them it became as dew not heat
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">أتوا بالفتية موثقينوطرحوهم فى وسط الأتونفصار كندى اليسمينهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The angel of the Lord came unto them
                And quenched the furnace and strengthened them
                And they rejoiced when they saw Him
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">حينئذ ملاك الله جاءهمأطفأ الأتون وقواهموفرحوا به لما أتاهمهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Azarias started to praise and pray
                Faithfully without defilement
                And gave glory to the power of the Trinity
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">حينئذ صلى عزارياسصلاة قوية بغير أدناستى اوأوإن إتجوم إن تى اترياسهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Misael likewise proclaimed
                With the voice of rejoicing
                Bless the Name of Emmanuel
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">خاصة بالأكثر ميصائيلعلَّ صوته بالتهليلاسمو إإ فران إن إممانوئيلهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_11">
            <td class="coptic" style="border-right: 1px solid black;">The king was amazed and surprised
                There were only three in the furnace
                But now there are four walking freely
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">دهش الملك أيضاً واحتارأليس ثلاثة ألقوا فى النارهوذا أربعة يمشون أجهارهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The king truly saw all of them free
                Four men walking in the fire
                And praising with the voice of rejoicing
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">رأى الملك حقاً اجهارأربعة رجال يمشون فى النارويسبحون ببهجة ووقارهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_13">
            <td class="coptic" style="border-right: 1px solid black;">The king was greatly amazed
                And proclaimed saying
                The fourth looks like the Son of God
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">زاد عجباً ونطق بفاههوذا الرابع يشبه ابن الآلهةفى منظره وفى رؤياههوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Praise our God, O you people
                The angels, the thrones and the powers
                Praise the Lord God of heaven
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">سبحوه أيها الساداتالملائكة والكراسى والقواتسبحوا رب السمواتهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him and glorify Him
                In the congregations exalt Him
                And above all the elders bless Him
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">سبحوه ومجدوهفى كنائس شعبه ارفعوهعلى منابر الشيوخ باركوههوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Praise your God O Sedrak
                Abdenego and the praised Misak
                For He saved you from destruction
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">سبح إلهك ياسدراكوابدناغو والممدوح ميساكلأنه نجاكم من الهلاكهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him all you nations
                The free, the slave and the servant
                For He saved you from annihilation
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">سبحوه ياجميع الاممالأحرار والعبيد والخدملأنه أنشاكم من العدمهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_18">
            <td class="coptic" style="border-right: 1px solid black;">The fiery furnace O Ananias
                Was quenched by your God the Messiah
                O bless His honored Name
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">سعير اللهيب ياأنانياسأطفأه إلهك ماسياسإسموا إبيفران توديمياسهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_19">
            <td class="coptic" style="border-right: 1px solid black;">The youths proclaimed with rejoicing
                Bless the Lord God of Israel
                And remember Him in all generations
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">صاح الفتية بالتهليلباركوا الرب إله اسرائيلوإذكروا اسمه من جيل إلى جيلهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_20">
            <td class="coptic" style="border-right: 1px solid black;">An undefiled sacrifice was offered
                O Azarias the praised
                Praise the honored Name of God
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">تقدمة قربت بغير أدناسأيها الممدوح عزارياسإسمو إإفران توديمياسهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Emmanuel quenched the furnace
                So rejoice and praise O Misael
                And offer to your God praises
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">أخمد اللهيب عمانوئيلفسر وسبح يا ميصائيلورتل لإلهك بالتهليلهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_22">
            <td class="coptic" style="border-right: 1px solid black;">The three youths praised with glory
                And proclaimed in a joyful sound
                Holy is the Beloved Son
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">ظهر الفتية بالتمجيدورتلوا بصوت عالى شديدإفؤاب إبشيرى إم مينريتهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Seven times hotter the fire was lit
                And forty nine full breadths
                But the youths did not fear this
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">علا اللهيب فوق الأتونتسعة وأربعين ذراعاً كاملينولم يرهبه المجاهدونهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_24">
            <td class="coptic" style="border-right: 1px solid black;">The three youths overcame
                The fiery furnace
                And conquered the enemy saying
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">غلب الفتية لهيب الناروقهروا الاعداء الكفارفاستحقوا المديح والتذكارهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_25">
            <td class="coptic" style="border-right: 1px solid black;">The king proclaimed in a heard voice
                Ananias, Azarias and Misael
                The servants of the Most High God
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">فصاح الملك بصوت عالحنانيا وعزاريا وميصائيلعبيد الله القوى المتعال هوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Come out from the fiery furnace
                For your God is powerful
                The performer of wonders
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">تعالوا اخرجوا من النارلأن إلهكم ذو اقتدارصانع العجائب الكبارهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Honor and glory O Israel
                Offer before God Emmanuel
                The sound of rejoicing and praise
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">كرامة ومجداً يا اسرائيلقدم لإلهك عمانوئيلتسابيح البركة والتهليلهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Before Him all the nations worship
                And all tongues and languages
                They praise the Lord of Sabaoth (Hosts)
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">له تسجد كل الأسباطوكل الألسن واللغاتتسبح رب القواتهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_29">
            <td class="coptic" style="border-right: 1px solid black;">There is no other Lord like You
                Who is powerful and feared
                Your dominion is eternal
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">من يشبهك يارب الأربابإله قوى عزيز مهابسلطانك في كل الأحقابهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_30">
            <td class="coptic" style="border-right: 1px solid black;">The furnace became a cool mist
                Therefore the youths proclaimed
                saying, Praise you the gracious Lord
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">ندى بارد صار الأتونفصاح الفتية بصوت حنونإسمو إإبشويس تون كيريونهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Rejoice in the God of Jacob
                For He is a powerful and feared God
                And praise His Holy Name
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">هللوا لإله يعقوبوابتهجوا بالله القوى المرهوبورتلوا لإسمه المحبوبهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
        <tr id="table_33_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him also with hymns
                Bless the Lord O you three youths
                Praise the Lord at all times
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">وسبحوه أيضاً بالألحانباركوا الرب أيها الفتيانإفهوس إإفنوتى ان سيو نيفينهوس إيروف آرى
                هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_33">
            <td class="coptic" style="border-right: 1px solid black;">For the Lord our God is greatly praised
                And feared above the other gods
                By His might He delivered the youths
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">لأنه عظيم ومبارك جداومخوف على كل الآلهةبقدرته نجى الفتيةهوس إيروف آرى هوؤتشاسف</td>
        </tr>
        <tr id="table_33_row_34">
            <td class="coptic" style="border-right: 1px solid black;">To Him are due glory and worship
                Before the Creator and feared God
                The Gracious God, Bestower of Life
                ϩⲱⲥ ̀ⲉⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩ̀ⲟ ϭⲁⲥϥ.</td>
            <td class="arabic">يليق الإكرام والسجودبالإله الخالق المعبودرب الأحسان مصدر الجودهوس إيروف آرى هوؤتشاسف
            </td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_34" data-title="Your Table Title Here"
        onclick="toggleTable('table_34', this)">+ Your Table Title Here</span>
    <table id="table_34" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_34_row_0">
            <td class="coptic" style="border-right: 1px solid black;">We therefore present an offering and rational
                worship; we send unto you this day psalmodies for Your glory O our Savior; Hananiah Azariah and Mishael.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧ ⲉⲛⲉⲛ ⲟⲑⲉⲛ ⲑⲩⲥⲓⲁⲛ ⲕⲉ ⲧⲏⲛ ⲗⲟⲅⲓⲕⲏⲛ ⲗⲁⲧⲣⲓⲁⲛ :
                ̀ⲁⲛⲁⲡⲉⲙⲡⲱⲙⲉⲛ ⲥⲉⲁⲩⲧⲱ ⲥⲏⲙⲉⲣⲟⲛ ̀ⲱⲇⲁⲥ : ̀ⲡⲣⲟⲥ ⲇⲟⲝⲁ ⲥⲟⲩ ⲥⲱⲧⲏⲣ ̀ⲏⲙⲱⲛ : ̀ Ⲁⲛⲁⲛⲓⲁⲥ ̀̀Ⲁⲍⲁⲣⲓⲁⲥ ⲕⲉ Ⲙⲓⲥⲁⲏⲗ.</td>
            <td class="arabic">فمن ثم نقدم الذبيحة والعبادة العقلية . ونرسل لك في هذا اليوم التسابيح لدى مجدك يا مخلصنا.
                حنانيا وعزاريا وميصائيل.</td>
        </tr>
        <tr id="table_34_row_1">
            <td class="coptic" style="border-right: 1px solid black;">When they were raised to take glory in their
                bodies, the angel came down, stopped the fire and became cool for Hananiah Azariah and Mishael.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲣⲓⲟⲛ ⲡⲁⲓⲑⲟⲛ ̀ⲛϫⲉ ⲙⲉⲗⲓⲛ ⲛⲁⲧⲟⲩ ⲡⲉⲣⲟⲥ ⲇⲟⲝⲁ
                ̀ⲙ̀ⲡⲥⲁⲧⲉⲧⲟⲩ: ⲥⲱⲙⲁⲧⲟⲥ ⲁⲅⲅⲉⲗⲟⲥ ⲅⲁⲣ ⲥⲉⲛⲁⲥⲉⲗ ⲑⲉⲇⲉ : ⲁⲩⲧⲟⲕⲓⲑⲟⲛ ̀ⲫⲗⲓⲅⲁⲣⲧⲏⲥ : ̀ⲉⲗⲉⲩⲥⲉ̀ⲱⲛ ̀ⲏⲙⲱⲛ : ̀ Ⲁⲛⲁⲛⲓⲁⲥ ̀
                Ⲁⲍⲁⲣⲓⲁⲥ ⲕⲉ Ⲙⲓⲥⲁⲏⲗ.</td>
            <td class="arabic">لما رُفعوا ليأخذوا المجد فى أجسادهم انحدر ملاك وأطفأ اللهيب وصيره بارداً عن حنانيا
                وعزاريا وميصائيل.</td>
        </tr>
        <tr id="table_34_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Praise and Glorify God at times.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩϩⲱⲥ ⲉⲩ̀ⲥⲙⲟⲩ ̀ⲉⲪϯ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">يسبحون ويباركون الله فى كل حين.</td>
        </tr>
        <tr id="table_34_row_3">
            <td class="coptic" style="border-right: 1px solid black;">We follow You with all our hearts, and we fear
                You, and we seek Your face, O God do not forsake us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛⲟⲩⲉϩ ̀ⲛⲥⲱⲕ ϧⲉⲛ ⲡⲉⲛϩⲏⲧ ⲧⲏⲣϥ : ⲧⲉⲛⲉⲣϩⲟϯ ϧⲁⲧⲉⲕϩⲏ :
                ⲟⲩⲟϩ ⲧⲉⲛⲕⲱϯ ̀ⲛⲥⲁ ⲡⲉⲕϩⲟ : Ⲫϯ ̀ⲙⲡⲉⲣϯϣⲓⲡⲓ ⲛⲁⲛ.</td>
            <td class="arabic">نتبعــــــــك بكل قلوبنا ونخافـــــك ونطلب وجهك يا الله لا تخزنا .</td>
        </tr>
        <tr id="table_34_row_4">
            <td class="coptic" style="border-right: 1px solid black;">But rather deal with us, according to Your
                meekness, and according to Your great mercy, O Lord help us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲗⲗⲁ ̀ⲁⲣⲓⲟⲩ̀ⲓ ⲛⲉⲙⲁⲛ : ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧ̀ⲉⲡⲓⲕⲏⲥ : ⲛⲉⲙ
                ⲕⲁⲧⲁ ̀ⲡ̀ⲁϣⲁⲓ ̀ⲛⲧⲉ ⲡⲉⲕⲛⲁⲓ : Ⲡϭⲟⲓⲥ ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲛ.</td>
            <td class="arabic">بل إصنع معنا بحسب دعتــــــــك وكثرة رحمتك يارب أعنّا .</td>
        </tr>
        <tr id="table_34_row_5">
            <td class="coptic" style="border-right: 1px solid black;">May our prayers ascend unto You, O our Master,
                like burnt offerings of lambs, and fatted calves.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉ ⲧⲉⲛ̀ⲡⲣⲟⲥⲉⲩⲭⲏ ⲡⲉⲛⲛⲏⲃ : ̀ⲓ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲙⲡⲉⲕ̀ⲙⲑⲟ :
                ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛϩⲁⲛ̀ϭⲗⲓⲗ ̀ⲛⲧⲉ ϩⲁⲛⲱⲓⲗⲓ: ⲛⲉⲙ ϩⲁⲛⲙⲁⲥⲓ ⲉⲩⲕⲉⲛⲓ̀ⲱⲟⲩⲧ.</td>
            <td class="arabic">فلتصعد صلاتنا أمامك يا سيدنا مثــــل محرقات كباش وعجــــول سمان .</td>
        </tr>
        <tr id="table_34_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget the covenant, Which You have made
                with our fathers, Abraham, Isaac, and Jacob. Israel, Your Holy one.</td>
            <td class="coptic" style="border-right: 1px solid black;">˙Ⲙⲡⲉⲣⲉⲣ̀ⲡⲱⲃϣ ̀ⲛϯⲇⲓ̀ⲁⲑⲏⲕⲏ : ⲑⲏ̀ⲉⲧⲁⲕⲥⲉⲙⲛⲏⲧⲥ ⲛⲉⲙ
                ⲛⲉⲛⲓⲟϯ : Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ : Ⲡⲓ̀ⲥⲣⲁⲏⲗ ⲡⲉⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲁⲕ.</td>
            <td class="arabic">لا تنـــــــس العهد الذى قطعته مع آبائنا ابراهيم واسحق ويعقوب اسرائيل قديسك .</td>
        </tr>
        <tr id="table_34_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord all you nations; the tribes and all
                kinds of tongues. praise Him and glorify Him, above all forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ : ⲛⲓⲫⲩⲗⲏ ⲛⲓⲁⲥⲡⲓ ̀ⲛⲗⲁⲥ
                : ϩⲱⲥ ̀ⲉⲣⲟϥ ⲙⲁ̀ⲱⲟⲩ ⲛⲁϥ : ̀ⲁⲣⲓϩⲟⲓ̀ⲟ ϭⲁⲥϥ ϣⲁ ⲛⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">باركوا الرب ياجميع الشعوب والقبائل ولغات الالسن سبحوه ومجدوه وزيدوه علواً إلى الآباد .
            </td>
        </tr>
        <tr id="table_34_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O three saintly
                children, Sedrach, Misach and Abednego, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓϣⲟⲙⲧ ̀ⲛ̀ⲁⲗⲟⲩ
                ̀ⲛ̀ⲁⲅⲓⲟⲥ : Ⲥⲉⲇⲣⲁⲕ Ⲙⲓⲥⲁⲕ Ⲁⲃⲇⲉⲛⲁⲅⲱ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا من الرب عنا أيها الثلاثة فتية القديسين سدراك وميساك وابدناغو ليغفر لنا خطايانا .
            </td>
        </tr>
        <tr id="table_34_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O lady of us all, the
                Mother of God, Mary, the Mother of our Savior, That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ ⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ : ̀ⲱ ⲧⲉⲛϭⲟⲓⲥ ̀ⲛⲛⲏⲃ ⲧⲏⲣⲉⲛ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ ̀ⲑⲙⲁⲩ ̀ⲙⲠⲉⲛⲥⲱⲧⲏⲣ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعى فينا يا سيدتنا كلنا السيدة والدة الإله مريم ام مخلصنا ليغفرلنا خطايانا .</td>
        </tr>
        <tr id="table_34_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangels,
                Michael and Gabriel, That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                ⲉⲑⲟⲩⲁⲃ : Ⲙⲓⲭⲁⲏⲗ ⲛⲁⲙ Ⲅⲁⲃⲣⲓⲏⲗ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعا فينا يارئيسى الملائكة الطاهرين ميخائيل وغبريال ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_34_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangels,
                Raphael and Souriel That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                ⲉⲑⲟⲩⲁⲃ : Ⲣⲁⲫⲁⲏⲗ ⲛⲉⲙ Ⲥⲟⲩⲣⲓⲏⲗ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفعا فينا يارئيسى الملائكة الطاهرين رافائيل وسوريال ليغفر .</td>
        </tr>
        <tr id="table_34_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O holy archangels, Sedakiel, Sarathiel
                and Ananiel, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ̀ⲱ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ: Ⲥⲉⲇⲁⲕⲓⲏⲗ
                Ⲥⲁⲣⲁⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اشفعوا فينا يارؤساء الملائكة الأطهار سداكيال وسراتيال وأنانيال ليغفر ..</td>
        </tr>
        <tr id="table_34_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O Thrones, Dominions and Powers, The
                Cherubim and the Seraphim, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ⲛⲓ̀ⲑⲣⲟⲛⲟⲥ ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ : Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ
                ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أشفعى فينا أيتها الكراسى والارباب والقوات والشيروبيم والسرافيم ليغفر ..</td>
        </tr>
        <tr id="table_34_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O Four Incorporeal
                Beasts, The ministers fervent as fire, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲡⲓ̀ϥⲧⲟⲩ ̀ⲛⲍⲱⲟⲛ
                ̀ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ : ̀ⲛⲗⲓⲧⲟⲩⲣⲅⲟⲥ ̀ⲛϣⲁϩ ̀ⲛ̀ⲭⲣⲱⲙ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أشفعوا فينا أيها الأربعة الحيوانات غير المتجسدين الخدام الملتهبين ناراً ليغفر ...</td>
        </tr>
        <tr id="table_34_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O priests of the Truth, The Twenty Four
                Presbyters, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲟⲩⲏⲃ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ : ⲡⲓϫⲟⲧ̀ϥⲧⲟⲩ
                ̀ⲙ̀ⲡⲣⲉⲥⲃⲩⲧⲏⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفعوا فينا ياكهنة الحق الأربعة والعشرين قسيساً ليغفر ...</td>
        </tr>
        <tr id="table_34_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O angelic hosts, And all the heavenly
                multitudes, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲥⲧⲣⲁⲧ̀ⲓⲁ ̀ⲛⲁⲅⲅⲉⲗⲓⲕⲟⲛ : ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ
                ̀ⲛ̀ⲉⲡⲟⲩⲣⲁⲛⲓⲟⲛ :</td>
            <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر ...</td>
        </tr>
        <tr id="table_34_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, My lords and
                fathers, the patriarchs, Abraham, Isaac and Jacob, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : Ⲁⲃⲣⲁⲁⲙ ̀Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا ياسادتى الآباء البطاركة إبراهيم وإسحق ويعقوب ليغفر ...</td>
        </tr>
        <tr id="table_34_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O perfect man, The
                righteous and just Enoch, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓⲣⲱⲙⲓ ̀ⲛⲧⲉⲗⲓⲟⲥ :
                ⲡⲓ̀ⲑⲙⲏⲓ ̀ Ⲉⲛⲱⲭ ⲡⲓⲇⲓⲕⲉⲟⲥ : ̀ ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلب من الرب عنا أيها الرجل الكامل البار أخنوخ الصديق ليغفر ..</td>
        </tr>
        <tr id="table_34_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Elijah the
                Tishbite, And Elisha his disciple, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: Ⲏⲗⲓⲁⲥ ⲡⲓⲑⲉⲥⲃⲓⲧⲏⲥ: ⲛⲉⲙ
                ̀Ⲉⲗⲓⲥⲉⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا ياإيليا التسبيتى وآليشع تلميذه ليغفر ...</td>
        </tr>
        <tr id="table_34_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Moses the
                archprophet and Isaiah, and Jeremiah, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ Ⲙⲱ̀ⲩⲥⲏⲥ
                ⲡⲓⲁⲣⲭⲏ̀ⲡⲣⲟⲫⲓⲧⲏⲥ ⲛⲉⲙ Ⲏⲥⲁ̀ⲏⲁⲥ : ⲛⲉⲙ Ⲓⲉⲣⲉⲙⲓⲁⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا ياموسى رئيس الأنبياء وأشعياء وأرمياء ليغفر ...</td>
        </tr>
        <tr id="table_34_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O David the psalmist, Ezekiel and Daniel,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲇⲁⲩⲓⲇ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ : ⲛⲉⲙ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲛⲉⲙ Ⲇⲁⲛⲓⲏⲗ
                : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا يا داود المرتل وحزقيال ودانيال ليغفر ...</td>
        </tr>
        <tr id="table_34_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Joachim, Anna and Joseph the Elder, and the
                righteous Job, Joseph and Nicodemus, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲓⲱⲁⲕⲓⲙ ⲛⲉⲙ Ⲁⲛⲛⲁ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲡⲓ ̀ⲡⲣⲉⲥⲃⲏⲧⲉⲣⲟⲥ :
                ⲛⲉⲙ ⲡⲓ ̀ⲑⲙⲏⲓ Ⲓⲱⲃ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا يايواقيم وحنّة ويوسف الشيخ والصديق ايوب ويوسف ونيقوديموس ليغفر ...
            </td>
        </tr>
        <tr id="table_34_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Melchizedek and
                Aaron, and Zacharias and Simeon, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ ⲛⲉⲙ
                ̀Ⲁ̀ⲁⲣⲱⲛ : ⲛⲉⲙ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياملشيصادق وهرون وزكريا وسمعان ليغفر ...</td>
        </tr>
        <tr id="table_34_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O chorus of the prophets, And all the
                righteous and the just, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ : ⲛⲉⲙ ⲛⲓ̀ⲑⲙⲏⲓ ⲛⲉⲙ
                ⲛⲓⲇⲓⲕⲉⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياصفوف الأنبياء والأبرار والصديقين ليغفر..</td>
        </tr>
        <tr id="table_34_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O fore-runner and
                baptizer, John the Baptist, That he may…</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓ̀ⲡⲣⲟⲇⲣⲟⲙⲟⲥ
                ̀ⲙⲃⲁⲡⲧⲓⲥⲧⲏⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفع فينا أيها السابق الصابغ يوحنا المعمدان ليغفر ..</td>
        </tr>
        <tr id="table_34_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O the Hundred and Forty
                Four Thousand, and the celibate Evangelist, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲣⲓⲡ̅ : ̀ⲱ ⲡⲓϣⲉ ̀ϩⲙⲉ ̀ϥⲧⲟⲩ ̀ⲛϣⲟ : ⲛⲉⲙ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ
                ̀ⲛⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفعوا فينا ايها المئة والأربعة والأربعين الفاً والبتول الانجيلى ليغفر .</td>
        </tr>
        <tr id="table_34_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Our lords and
                fathers, the Apostles, And the rest of the Disciples, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲁϭⲟⲓⲥ ̀̀ⲛⲓⲟϯ
                ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ : ⲛⲉⲙ ̀ⲡⲥⲉⲡⲓ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياسادتى الآباء الرسل وبقية التلاميذ ليغفر ..</td>
        </tr>
        <tr id="table_34_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O blessed archdeacon, Stephen the First
                Martyr, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓⲁⲣⲭⲏⲇⲓ̀ⲁⲕⲱⲛ ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ: ̀Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓϣⲟⲣⲡ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلب من الرب عنا يارئيس الشمامسة المبارك استفانوس الشهيد الاول ليغفر ..</td>
        </tr>
        <tr id="table_34_row_29">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Beholder of God
                the Evangelist, Mark the Apostle, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲡⲓⲑⲉ̀ⲱⲣⲓⲙⲟⲥ
                ̀ⲛⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : Ⲙⲁⲣⲕⲟⲥ ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲓⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلب من الرب عنا أيها الناظر الإله الإنجيلى مرقس الرسول ليغفر ...</td>
        </tr>
        <tr id="table_34_row_30">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyr, My lord prince
                George, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ
                Ⲅⲉⲱⲣⲅⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلب من الرب عنا أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر ...</td>
        </tr>
        <tr id="table_34_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Theodore and Theodore, Leontius and
                Panicharus, That he may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ : ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ
                Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياثيؤدوروس وثيؤدوروس ولاونديوس وبانيكاروس ليغفر..</td>
        </tr>
        <tr id="table_34_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O lover of the
                father Mercurius, and Abba Mina and Abba Victor, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ
                : ⲛⲉⲙ ̀ⲁⲡⲁ Ⲙⲏⲛⲁ ⲛⲉⲙ ̀ⲁⲡⲁ Ⲃⲓⲕⲧⲱⲣ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا يافيلوباتير مرقوريوس وأبا مينا وأبا بقطر ليغفر ...</td>
        </tr>
        <tr id="table_34_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Lord Claudius and Theodore, Abba Eschyron
                and Abba Isaac, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲕⲩⲣⲓ ̀ Ⲕⲗⲁⲩⲇⲓⲟⲥ ⲛⲉⲙ Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ : ⲛⲉⲙ ̀ⲁⲡⲁ ̀
                Ⲥⲭⲩⲣⲟⲛ ⲛⲉⲙ ̀ⲁⲡⲁ ̀ Ⲓⲥⲁⲁⲕ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياسيدى اقلوديوس وثيئودوروس وأبا سخيرون وأبا اسحق ليغفر ..</td>
        </tr>
        <tr id="table_34_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Basilidis and Eusebius, Macarius and
                Philotheos, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲃⲁⲥⲓⲗⲓⲧⲏⲥ ⲛⲉⲙ Ⲉⲩⲥⲉⲃⲓⲟⲥ : ⲛⲉⲙ Ⲙⲁⲕⲁⲣⲓⲟⲥ ⲛⲉⲙ
                Ⲫⲓⲗⲟⲑⲉⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياواسيليدس وأوسابيوس ومقاريوس وفيلوثاؤس ليغفر ...</td>
        </tr>
        <tr id="table_34_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Pisoora and
                Abba Epshoi, Abba Eesi and Thekla his sister, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲡⲓⲥⲟⲩⲣⲁ ⲛⲉⲙ ̀ⲁⲡⲁ
                ̀ Ⲡϣⲱⲓ : ⲛⲉⲙ ̀ⲁⲡⲁ ̀ Ⲏⲥⲓ ⲛⲉⲙ Ⲑⲉⲕⲗⲁ ⲧⲉϥⲥⲱⲛⲓ: ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياأنبا بسوره وأبابشاى وأباايسى وتكلا اخته ليغفر ...</td>
        </tr>
        <tr id="table_34_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Justus, Apali
                and Theoklia, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲓⲟⲩⲥⲧⲟⲥ ⲛⲉⲙ
                ̀Ⲁⲡⲁⲗⲓ ⲛⲉⲙ Ⲑⲉ̀ⲟⲕⲗⲓ̀ⲁ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون يسطس وآبالى وتاوكليا ليغفر ...</td>
        </tr>
        <tr id="table_34_row_37">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Jacob the Persian, Saint Sergius and
                Saint Bachus, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲓⲁⲕⲱⲃⲟⲥ ⲡⲓϥⲉⲣⲥⲓⲥ : ⲛⲉⲙ ⲡⲓ̀ⲁⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ
                ⲛⲉⲙ Ⲃⲁⲭⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياأنبا يعقوب الفارسى والقديس سرجيوس وواخس ليغفر ...</td>
        </tr>
        <tr id="table_34_row_38">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Cosmas, his brothers and their mother, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲕⲟⲥⲙⲁ ⲛⲉⲙ ⲛⲉϥ̀ⲥⲛⲏⲟⲩ ⲛⲉⲙ ⲧⲟⲩⲙⲁⲩ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون قزمان واخوته وأمهم ليغفر ...</td>
        </tr>
        <tr id="table_34_row_39">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Cyrus and his brother John, And Barbara
                and Juliana, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲁⲡⲁ Ⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ : ⲛⲉⲙ Ⲃⲁⲣⲃⲁⲣⲁ
                ⲛⲉⲙ Ⲓⲟⲩⲗⲓ̀ⲁⲛⲏ: ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا يااباقير ويوحنا أخوه وبرباره ويوليانه ليغفر ...</td>
        </tr>
        <tr id="table_34_row_40">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Lord Apatir and
                Eraee his sister, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲕⲩⲣⲓ Ⲁⲡⲁⲧⲏⲣ ⲛⲉⲙ ̀
                Ⲏⲣⲁ̀ⲏ ⲧⲉϥⲥⲱⲛⲓ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهيدان المجاهدان السيد أبادير وإيرائى أخته ليغفر ...</td>
        </tr>
        <tr id="table_34_row_41">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Julius and those who were with him, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲓⲟⲩⲗⲓⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲛⲉⲙⲁϥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون يوليوس ومن معه ليغفر ...</td>
        </tr>
        <tr id="table_34_row_42">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Mari Pahnam and
                Sarah his sister, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ⲙⲁⲣⲓ Ⲡⲁϩⲛⲁⲙ ⲛⲉⲙ
                Ⲥⲁⲣⲣⲁ ⲧⲉϥⲥⲱⲛⲓ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهيدان المجاهدان ماربهنام وساره أخته ليغفر ...</td>
        </tr>
        <tr id="table_34_row_43">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Sarapamon the Bishop, Psati and
                Gallinikos, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ : ⲛⲉⲙ Ⲯⲁⲧⲉ ⲛⲉⲙ
                Ⲅⲁⲗⲗⲓⲛⲓⲕⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أطلبوا من الرب عنا يا انبا صرابامون الاسقف وابصادى وغلينيكوس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_44">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O victorious
                martyrs, The Forty Saints of Sebaste, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲓ̀ϩⲙⲉ ⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲉ Ⲥⲉⲃⲁⲥⲧⲉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ايها الشهداء المجاهدون الأربعون قديساً بسبسطية ليغفر ..</td>
        </tr>
        <tr id="table_34_row_45">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Piro and Athom, And John and Simeon,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲡⲓⲣⲱⲟⲩ ⲛⲉⲙ ̀ Ⲁⲑⲱⲙ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ
                Ⲥⲩⲙⲉⲱⲛ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياأنبا بيروه واتوم ويوحنا وسمعان ليغفر ...</td>
        </tr>
        <tr id="table_34_row_46">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Abba Epshoi and
                his friend Peter, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲁⲡⲁ ̀Ⲡϣⲱⲓ ⲛⲉⲙ
                ⲡⲉϥ̀ϣⲫⲏⲣ Ⲡⲉⲧⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبا من الرب عنا أيها الشهيدان المجاهدان أبا بشوى وصديقه بطرس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_47">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Eklog the
                priest, and Abba Epgol and Abba Kav, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲁⲡⲁ ̀̀̀ Ⲕⲗⲟϫ
                ⲡⲓ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ⲛⲉⲙ ̀ⲁⲡⲁ ̀̀̀ Ⲡϫⲟⲗ ⲛⲉⲙ ̀ⲁⲡⲁ Ⲕⲁⲩ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياأبا كلوج القس وابا بجول وأبا كاف ليغفر ..</td>
        </tr>
        <tr id="table_34_row_48">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba John of Heraclia, Lord Piphamon and
                Pistavros, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲁⲡⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉⲙϩⲁⲣⲁⲕⲗⲓ̀ⲁ : ⲛⲉⲙ ⲕⲩⲣⲓ̀ⲁ
                Ⲡⲓⲫⲁⲙⲱⲛ ⲛⲉⲙ Ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياأبا يوحنا الهرقلى والسيد بفام وبسطوروس ليغفر..</td>
        </tr>
        <tr id="table_34_row_49">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Isidore and Panteleon, Sophia and Euphemia,
                That He may....</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲏⲥⲏⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲧⲉⲗⲉⲟⲛ : Ⲥⲟⲫⲓ̀ⲁ ⲛⲉⲙ Ⲉⲩⲫⲟⲙⲓ̀ⲁ
                : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياايسيذوروس وبندلاون وصوفيا وإفوميه ليغفر ..</td>
        </tr>
        <tr id="table_34_row_50">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Lord Abanoub and
                Epto-lomeos, Apa-ekragon and Sousennius, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲕⲩⲣⲓ Ⲁⲡⲁⲛⲟⲩⲃ ⲛⲉⲙ
                Ⲡⲑⲟⲗⲟⲙⲉⲟⲥ : ⲛⲉⲙ Ⲁⲡⲁ̀ⲕⲣⲁⲅⲟⲛ ⲛⲉⲙ Ⲥⲟⲩⲥⲉⲛⲛⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياسيدى ابانوب وابطلماوس وابكراجون وسوسنيوس ليغفر..</td>
        </tr>
        <tr id="table_34_row_51">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O great high priest, Abba Peter seal of the
                martyrs, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲱ ⲡⲓⲛⲓϣϯ ̀ⲛⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ : ⲁⲃⲃⲁ Ⲡⲉⲧⲣⲟⲥ
                ⲓⲉⲣⲟⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲛⲧⲉϥ..</td>
            <td class="arabic">أطلبوا من الرب عنا يارئيس الكهنة العظيم انبا بطرس خاتم الشهداء ليغفر..</td>
        </tr>
        <tr id="table_34_row_52">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O new martyrs, Pistavros and Arsenius, That
                He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲱ ⲛⲓⲃⲉⲣⲓ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ ⲛⲉⲙ
                Ⲁⲣⲥⲉⲛⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا أيها الشهيدان الجديدان بسطوروس وارسانيوس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_53">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Michael the
                hegomen, And Michael the monk, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ Ⲙⲓⲭⲁⲏⲗ
                ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲉⲙ Ⲙⲓⲭⲁⲏⲗ ⲡⲓⲙⲟⲛⲁⲭⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبا من الرب عنا ياميخائيل القمص وميخائيل الراهب ليغفر ...</td>
        </tr>
        <tr id="table_34_row_54">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O chorus of the martyrs, Who suffered for
                the sake of Christ, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲉⲧⲁⲩϣⲉⲡ̀ⲙⲕⲁϩⲓ
                ⲉⲑⲃⲉ Ⲡⲭˉⲥˉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياصفوف الشهداء الذين تألموا من أجل المسيح ليغفر .</td>
        </tr>
        <tr id="table_34_row_55">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords and fathers who love their
                children, Abba Anthony and Abba Paul, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ
                ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياسيدى الابوين محبى أولادهما انطونيوس وأنبا بولا ليغفر ..</td>
        </tr>
        <tr id="table_34_row_56">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O three saints,
                Abba Macarii, And all their children, the cross-bearers, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ : ⲛⲉⲙ ⲛⲟⲩϣⲏⲣⲓ
                ̀ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الثلاثة مقارات القديسون وأولادهم لباس الصليب ليغفر ..</td>
        </tr>
        <tr id="table_34_row_57">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords and fathers the hegomens, Abba
                John and Abba Daniel, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲛϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ
                ⲛⲉⲙ ⲁⲃⲃⲁ Ⲇⲁⲛⲓⲏⲗ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا يا سيدى الأبوين القمصين أنبا يوحنا وأنبا دانيال ليغفر ..</td>
        </tr>
        <tr id="table_34_row_58">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords and fathers who love their
                children, Abba Pishoi and Abba Paul, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲛⲉⲙ
                ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا يا سيدىّ الأبوين محبى أولادهما أنبا بيشوى وأنبا بولا ليغفر ..</td>
        </tr>
        <tr id="table_34_row_59">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Our Saintly Roman
                fathers, Maximus and Dometius, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ
                ̀ⲛⲣⲱⲙⲉⲟⲥ : Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أطلبا من الرب عنا ياأبوينا القديسين الروميين مكسيموس ودوماديوس ليغفر ...</td>
        </tr>
        <tr id="table_34_row_60">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O Forty Nine Martyrs, The elders of Shiheet,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓ̀ϩⲙⲉ ⲯⲓⲧ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛⲓϧⲉⲗⲗⲟⲓ ̀ⲛⲧⲉ Ϣⲓϩⲏⲧ
                : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها التسعة والاربعون شهيداً شيوخ شيهات ليغفر ..</td>
        </tr>
        <tr id="table_34_row_61">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O strong saint, Abba Moses, And John Kame,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓϫⲱⲣⲓ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭⲁⲙⲏ
                : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبا من الرب عنا ايها القوى القديس انبا موسي ويحنس كاما ليغفر ..</td>
        </tr>
        <tr id="table_34_row_62">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Pachomious of
                the Koinonia, And Theodore his disciple, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ
                ϯⲕⲟⲓⲛⲱⲛⲓ̀ⲁ : ⲛⲉⲙ Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياانبا باخوم ابا الشركة وثيؤدورس تلميذه ليغفر ..</td>
        </tr>
        <tr id="table_34_row_63">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Shenouda the Archimandrite, And Abba
                Wisa his disciple, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ϣⲉⲛⲟϯ ⲡⲓⲁⲣⲭⲏⲙⲁⲛ̀ⲇⲣⲓⲧⲏⲥ : ⲛⲉⲙ ⲁⲃⲃⲁ Ⲃⲏⲥⲁ
                ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياانبا شنوده رئيس المتوحدين وانبا ويصا تلميذه ليغفر..</td>
        </tr>
        <tr id="table_34_row_64">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Nopher and Abba Karus, And our father
                Paphnutius, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲛⲟⲩϥⲉⲣ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲕⲁⲣⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
                Ⲡⲁ̀ⲫⲛⲟⲩⲧⲓⲟⲥ :̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا نفر وانبا كاروس وابانا بفنوتيوس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_65">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Samuel the
                confessor, and Justus and Apollo And his disciples, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ
                ⲡⲓ̀ⲟⲙⲟⲗⲟⲅⲓⲧⲏⲥ : ⲛⲉⲙ Ⲓⲟⲩⲥⲧⲟⲥ ⲛⲉⲙ ̀ Ⲁⲡⲟⲗⲗⲟ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا صموئيل المعترف ويسطس وأبوللو تلميذيه ليغفر ...</td>
        </tr>
        <tr id="table_34_row_66">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Apollo and Abba Apip, And our father
                Abba Pigimi, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ ̀ Ⲁⲡⲟⲗⲗⲟ ⲛⲉⲙ ⲁⲃⲃⲁ̀ Ⲁⲡⲓⲡ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
                ⲁⲃⲃⲁ Ⲡⲓϫⲓⲙⲓ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا ابوللو وانبا ابيب وابانا انبا بيجيمى ليغفر ...</td>
        </tr>
        <tr id="table_34_row_67">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Evkin and Abba Ehron, Abba Hor and Abba
                Phis, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲉⲩⲕⲓⲛ ⲛⲉⲙ ⲁⲃⲃⲁ ̀ Ϩⲣⲟⲛ : ⲛⲉⲙ ̀ⲁⲡⲁ Ϩⲱⲣ
                ⲛⲉⲙ ̀ⲁⲡⲁ Ⲫⲓⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا افكين وانبا إهرون واباهور وابافيس ليغفر ...</td>
        </tr>
        <tr id="table_34_row_68">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Parsoma and
                Ephrem, And John and Simeon, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲛⲉⲙ
                Ⲉⲫⲣⲉⲙ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا برسوما وافريم ويوحنا وسمعان ليغفر ...</td>
        </tr>
        <tr id="table_34_row_69">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Epiphanius and Ammonius, and Arshillidis and
                Arsenius, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲉⲡⲓⲫⲁⲛⲓⲟⲥ ⲛⲉⲙ Ⲁⲙⲙⲱⲛⲓⲟⲥ : ⲛⲉⲙ Ⲁⲣⲭⲏⲗⲗⲓⲧⲏⲥ ⲛⲉⲙ
                Ⲁⲣⲥⲉⲛⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياابيفانيوس وامونيوس وارشليدس وارسانيوس ليغفر</td>
        </tr>
        <tr id="table_34_row_70">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords, the ascetic fathers, Abba Abraam
                and George, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲛⲁⲥⲕⲏⲧⲏⲥ : ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ
                Ⲅⲉⲱⲣⲅⲏ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياسيدى الابوين الناسكين انبا أبرام وجيؤرجى ليغفر ..</td>
        </tr>
        <tr id="table_34_row_71">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Athanasius the
                Apostolic, Severus and Dioscorus, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ :̀ Ⲁⲑⲛⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ : Ⲥⲉⲩⲏⲣⲟⲥ ⲛⲉⲙ
                Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا يااثاناسيوس الرسولى وساويرس وديسقورس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_72">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Basil and Gregory, And our father Abba
                Cyril,That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲃⲁⲥⲓⲗⲓⲟⲥ ⲛⲉⲙ Ⲅⲣⲓⲅⲟⲣⲓⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ
                Ⲕⲩⲣⲓⲗⲗⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياباسيليوس واغريغوريوس . وابانا أنبا كيرلس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_73">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O three hundred and eighteen gathered at
                Nicea, For the faith, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓ ϣⲟⲙⲧ ϣⲉ ⲙⲏⲧ ̀ϣⲙⲏⲛ ̀ⲉⲧⲁⲩ ⲑⲱⲟⲩϯ ϧⲉⲛ Ⲛⲓⲕⲉ̀ⲁ
                : ⲉⲑⲃⲉ ⲡⲓⲛⲁϩϯ : ̀ⲛⲧⲉϥ…</td>
            <td class="arabic">اطلبوا من الرب عنا أيها ال٣١٨الذين اجتمعوا فى نيقيه من اجل الايمان ليغفر ..</td>
        </tr>
        <tr id="table_34_row_74">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O the one hundred
                and fifty at Constantinople, And the two hundred at Ephesus,That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓ ϣⲉ ⲧⲉⲃⲓ ̀ⲛⲧⲉ
                Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲩ- ⲡⲟⲗⲓⲥ: ⲛⲉⲙ ⲡⲓ ̀ⲥⲛⲁⲩ ϣⲉ ̀ⲛⲧⲉ ̀ Ⲉⲫⲉⲥⲟⲥ : ̀ⲛⲧⲉϥ …</td>
            <td class="arabic">اطلبوا من الرب عنا ايها ال ١٥٠ بمدينة القسطنطينية والمائتين بأفسس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_75">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Hadid and Abba John, Our great father
                Parsoma and Abba Teji, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ϩⲁⲇⲓⲇ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
                ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲛⲉⲙ Ⲁⲃⲃⲁ Ⲧⲉϫⲓ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا حديد وأنبا يوحنا وأبانا العظيم أنبا برسوما وأنبا رويس ليغفر ..
            </td>
        </tr>
        <tr id="table_34_row_76">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Abraam the hegomen, And our father Abba
                Mark, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ
                Ⲙⲁⲣⲕⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياأنبا ابرام القمص وابانا أنبا مرقس ليغفر ..</td>
        </tr>
        <tr id="table_34_row_77">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O chorus of the
                cross bearers, Perfected in the wilderness, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ
                ⲛⲓ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ : ̀ⲉⲧⲁⲩϫⲱⲕ ̀ⲉⲃⲟⲗ ϩⲓⲛⲓϣⲁϥⲉⲩ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا يامصاف لبّاس الصليب الذين كملوا فى البرارى ليغفر ..</td>
        </tr>
        <tr id="table_34_row_78">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Joseph the righteous, and Thomas of the
                Mount of Cedars, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲓⲱⲥⲏⲫ ⲡⲓⲇⲓⲕⲉⲟⲥ :
                ⲛⲉⲙ Ⲑⲱⲙⲁⲥ ⲫⲁ ⲡⲓⲧⲱⲟⲩ ̀ⲛϣⲉⲛⲥⲓϥⲓ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبوا من الرب عنا يا أنبا يوساب الصديق وتوماس صاحب جبل الأرز ليغفر ..</td>
        </tr>
        <tr id="table_34_row_79">
            <td class="coptic" style="border-right: 1px solid black;">Pray: our father St. Makrofios: and his children
                the monks: that He may …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲕⲣⲟⲃⲓⲟⲥ
                : ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ̀ⲙⲙⲟⲛⲁⲭⲟⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبوا من الرب عنا ياأبينا القديس مكروفيوس: وبنيه الرهبان. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_80">
            <td class="coptic" style="border-right: 1px solid black;">Pray: our father the ascetic saint: Abba Hermina
                the anchorite: that He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ̀ⲛⲁⲥⲕⲩⲧⲏⲥ
                : ⲁⲃⲃⲁ Ϩⲱⲣⲙⲏⲛⲁ ⲡⲓⲁⲛⲁⲭⲱⲣⲓⲧⲏⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلب من الرب عنا يا أبينا القديس الناسك : أنبا هرمينا السائح. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_81">
            <td class="coptic" style="border-right: 1px solid black;">Pray: our father the ascetic saint: Abba Badaba
                and Andrawis: that He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ̀ⲛⲁⲥⲕⲩⲧⲏⲥ
                : ⲁⲃⲃⲁ Ⲡⲓⲧⲁⲡⲉ ⲛⲉⲙ Ⲁⲛⲇⲣⲉⲁⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبا من الرب عنا ياأبينا القديس الناسك: أنبا بضابا وأندراوس. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_82">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Kastor and Abba Bishoy: our father Abba
                Pafnouti, Dawood, and Joseph: that He may …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲁⲡⲁ Ⲕⲁⲥⲧⲱⲣ ⲛⲉⲙ
                ⲁⲡⲁ Ⲡⲓϣⲱⲓ : ⲛⲉⲙ ⲁⲡⲁ Ⲡⲁⲫⲛⲟⲩϯ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبوا من الرب عنا يا أنبا قسطور وأنبا بيشوى: وأنبا بفنوتى وداود ويوساب. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_83">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O two perfect men: Joseph and Nicodemus:
                that He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲱ ⲛⲓⲣⲱⲙⲓ ̀ⲛⲧⲉⲗⲓⲟⲥ :
                Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبا من الرب عنا أيها الرجلان الكاملان: يوسف ونيقوديموس. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_84">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Elaria and Anastasia: Anasimon and Erepsima:
                that He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : Ⲁⲗⲗⲁⲣⲓⲁ ⲛⲉⲙ Ⲁⲛⲁⲥⲧⲁⲥⲓⲁ :
                ⲛⲉⲙ Ⲁⲛⲁⲥⲓⲙⲱⲛ ⲛⲉⲙ Ⲁⲣⲓⲯⲓⲙⲁ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبوا من الرب عنا إيلاريه وأنسطاسيا: وأناسيمون وأريبسيما. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_85">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O the bride of Christ: Saint Demiana: that
                He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲱ ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ
                : ϯⲁⲅⲓⲁ Ⲇⲁⲙⲓⲁⲛⲏ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبى من الرب عنا ياعروس المسيح: القديسة ديميانه. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_86">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O wise virgin ladies: the brides of Christ:
                that He may …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲛⲓⲁⲗⲟⲩ ̀ⲛⲥⲁⲃⲉ
                ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ : ⲛⲓϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبن من الرب عنا أيتها الفتيات العذارى الحكيمات: عرائس المسيح. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_87">
            <td class="coptic" style="border-right: 1px solid black;">Pray: my master King Constantine: and his mother
                Queen Helen: that He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ
                Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ : ⲛⲉⲙ Ⲏⲗⲁⲛⲏ ϯⲟⲩⲣⲱ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبا من الرب عنا يا سيدى الملك قسطنطين: وهيلانه الملكة. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_88">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O saints of this day: each by his name: that
                He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲛⲏⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲉ ⲡⲁⲓⲉϩⲟⲟⲩ
                : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">اطلبوا من الرب عنا يا قديسى هذا اليوم: كل واحد بإسمه. ليغفر ..</td>
        </tr>
        <tr id="table_34_row_89">
            <td class="coptic" style="border-right: 1px solid black;">Likewise, we magnify You, with David the Psalmist:
                You are the priest forever, according to the order of Melchizedek.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟⲕ : ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ : ϫⲉ
                ̀ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉⲛⲉϩ : ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ ̀ⲙⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ .</td>
            <td class="arabic">كذلك نعظمك : مع المرتل داود قائلين: أنت هو الكاهن الى الأبد: على طقس ملشيصاداق.</td>
        </tr>
        <tr id="table_34_row_90">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our Holy father, the patriarch Abba (…), the
                high priest, That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲁⲃⲃⲁ (...) ⲡⲓⲁⲣⲭⲓⲉⲣⲉⲩⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ .</td>
            <td class="arabic">أطلب من الرب عنا : يا أبانا القديس البطريرك : أنبا (...) رئيس الكهنة. ليغفر لنا خطايانا.
            </td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_35" data-title="Your Table Title Here"
        onclick="toggleTable('table_35', this)">+ Your Table Title Here</span>
    <table id="table_35" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_35_row_0">
            <td class="coptic" style="border-right: 1px solid black;">In the Church of the virgins
                In the pure assembly
                Living in piety
                Peniot Ava Antonios</td>
            <td class="arabic">فى كنيسة الأبكارفى مجمع الاطهارقائم بكل وقاربنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_1">
            <td class="coptic" style="border-right: 1px solid black;">You are in a glorious state
                In the habit of the eschem
                In the rite of the Seraphim
                Peniot Ava Antonios</td>
            <td class="arabic">قائم بمجد عظيممع لباس الأسكيمفى طقس السيرافيمبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_2">
            <td class="coptic" style="border-right: 1px solid black;">With spiritual prayers
                Living a godly life
                You consecrated the desert
                Peniot Ava Antonios</td>
            <td class="arabic">بصلاة روحانيةبحياة إلهيةدشنت البريةبنيوت آفا انطونيوس</td>
        </tr>
        <tr id="table_35_row_3">
            <td class="coptic" style="border-right: 1px solid black;">With struggles in prayers
                For many decades
                And tears in the metanias (prostrations)
                Peniot Ava Antonios</td>
            <td class="arabic">بجهاد فى الصلواتعشرات السنواتبدموع فى الميطانياتبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_4">
            <td class="coptic" style="border-right: 1px solid black;">In ascetic fasts
                For days at a time
                With an unfailing spirit
                Peniot Ava Antonios</td>
            <td class="arabic">بنسك فى الأصوامعلى مدى الأيامبنفس لاتنامبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_5">
            <td class="coptic" style="border-right: 1px solid black;">With meagerness in pleasures
                Concerned in godly matters
                And spiritual meditations
                Peniot Ava Antonios</td>
            <td class="arabic">بزهد فى اللذاتبهذيذ فى الإلهياتوتأمل فى الروحياتبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_6">
            <td class="coptic" style="border-right: 1px solid black;">You were given the spirit of Elijah
                And Hanna the prophetess
                And John, the son of Zacharias
                Peniot Ava Antonios</td>
            <td class="arabic">أعطيت روح إيلياوحنة النبيةويوحنا بن زكريابنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_7">
            <td class="coptic" style="border-right: 1px solid black;">The devils feared you
                Because of your upright heart
                And your constant prayers
                Peniot Ava Antonios</td>
            <td class="arabic">ارتاع الشياطينمن قلبك الأمينوصلاتك كل حينبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_8">
            <td class="coptic" style="border-right: 1px solid black;">They fought against you daily
                They tried each possible way
                Using many tricks
                Peniot Ava Antonios</td>
            <td class="arabic">حاربوك مدة طويلةبذلوا كل وسيلةبكم حيلة وحيلةبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_9">
            <td class="coptic" style="border-right: 1px solid black;">They reminded you of your sister
                In order to worry you
                So you may return to the world
                Peniot Ava Antonios</td>
            <td class="arabic">بأختك ذكروكلكيما يقلقوكبهذا ويرجعوكبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_10">
            <td class="coptic" style="border-right: 1px solid black;">They scattered gold and silver
                Before you on the mountains
                Glittering in the midst of the sand
                Peniot Ava Antonios</td>
            <td class="arabic">نثروا الذهب والمالأمامك على الجباليضوى بين الرمالبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_11">
            <td class="coptic" style="border-right: 1px solid black;">They came with chants and songs
                And images of women
                To make you fall in temptation
                Peniot Ava Antonios</td>
            <td class="arabic">أتوك بطرب وغناءوصورة النساءلتسقط فى الإغراءبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_12">
            <td class="coptic" style="border-right: 1px solid black;">They came with fierce visions
                Of lions, tigers and leopards
                And with sounds of thunder
                Peniot Ava Antonios</td>
            <td class="arabic">وأتوك بشكل أسودونمور وفهودبصياح كالرعودبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_13">
            <td class="coptic" style="border-right: 1px solid black;">They came with their malice
                So you may fear their visions
                Your humility cast them out
                Peniot Ava Antonios</td>
            <td class="arabic">جاءوك باذاهملتخاف من رؤياهمتواضعك أخزاهمبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_14">
            <td class="coptic" style="border-right: 1px solid black;">You proclaimed and said to them,
                "O you strong ones
                I will return to dust and sand
                Peniot Ava Antonios</td>
            <td class="arabic">صرخت يااقوياءلماذا هذا العناء تراب انا وهباءبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_15">
            <td class="coptic" style="border-right: 1px solid black;">I am surprised at your gathering
                In my weakness and appearance
                I am the weakest of you all."
                Peniot Ava Antonios</td>
            <td class="arabic">عجبى لتجمهركمعلى ضعفى وتظاهركمأنا أضعف من أصغركمبنيوت آفا انطونيوس</td>
        </tr>
        <tr id="table_35_row_16">
            <td class="coptic" style="border-right: 1px solid black;">O strong and high tower
                You are an example for us all
                And your humility before Satan
                Peniot Ava Antonios</td>
            <td class="arabic">يا برج عالي وحصينيامثال للمنسحقينتتواضع للشياطينبنيوت آفا انطونيوس</td>
        </tr>
        <tr id="table_35_row_17">
            <td class="coptic" style="border-right: 1px solid black;">You are a powerful example
                Throughout the generations
                O dweller of the mountains
                Peniot Ava Antonios</td>
            <td class="arabic">ياقوة ومثالعلى مدى الأجيالياساكن الجبالبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_18">
            <td class="coptic" style="border-right: 1px solid black;">You are great in struggles
                O the wise in counsels
                Pray on behalf of your children
                Peniot Ava Antonios</td>
            <td class="arabic">ياعظيم فى جهادكياحكيم فى إرشادكاشفع فى أولادكبنيوت آفا انطونيوس</td>
        </tr>
        <tr id="table_35_row_19">
            <td class="coptic" style="border-right: 1px solid black;">We have not practiced your life
                Nor acquired your likeness
                Remember us in your prayers
                Peniot Ava Antonios</td>
            <td class="arabic">لم نحيا كحياتكلم نسلك فى صفاتكفاذكرنا فى صلاتكبنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Pray for our iniquities
                And the weakness of our nature
                For we are strangers in this world
                Peniot Ava Antonios</td>
            <td class="arabic">اشفع فى مذلتناوضعف طبيعتنافى مدة غربتنابنيوت آفا أنطونيوس</td>
        </tr>
        <tr id="table_35_row_21">
            <td class="coptic" style="border-right: 1px solid black;">In the Name of God
                Our Lord Isos Pichristos
                Presenting the life of
                Maximos and Domadios</td>
            <td class="arabic">أبدأ باسم الإلهسيدنا بى اخريستوسواشرح فى شرف معنىمكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_22">
            <td class="coptic" style="border-right: 1px solid black;">They took off their crowns
                And cast them off their heads
                For the love of the Heavenly King
                Maximos and Domadios</td>
            <td class="arabic">بدأ بخلع التاجاتوطرحها عن الرؤسمحبة فى ملك السمواتمكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Praised with hymns and songs
                In the love of the Holy Lord
                Became two great soldiers
                Maximos and Domadios</td>
            <td class="arabic">صاحا بتراتيل وألحانحباً فى الرب القدوسوصارا أجناداً شجعانمكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Our father Abba Macarios
                Described the brothers as
                "The pride of monasticism"
                Maximos and Domadios</td>
            <td class="arabic">قال عنهم أبوهماأنبا مقاريوسثوب الرهبنة افتخر بهمامكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Defeated all evil
                By the Name of the Holy Lord
                And lived with joy in Paradise
                Maximos and Domadios</td>
            <td class="arabic">غلبوا كل الشياطينباسم الرب القدوسواتكئآ فى النعيم فرحينمكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Left worldly reign
                And Satan was deeply grieved
                Finally rewarded everlasting joy
                Maximos and Domadios</td>
            <td class="arabic">خلصا من مُلك العالموخزوا إبليس المنجوسونالا الفرح الدايممكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Blessed be you, our fathers
                The children of Macarios
                The stars of Shiheet
                And the light of Baramus</td>
            <td class="arabic">طوباكم ياأبهاتياأولاد مقاريوسياكواكب جبل شيهيتومصابيح دير البراموس</td>
        </tr>
        <tr id="table_35_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Just like Paradise
                You the Valley of Natroon
                The king's children dwelt in you
                Maximos and Domadios</td>
            <td class="arabic">ياوادى هبيب شبهوكالآباء بالفردوسوأولاد الملوك سكنوكمكسيموس نيم دوماديوس</td>
        </tr>
        <tr id="table_35_row_29">
            <td class="coptic" style="border-right: 1px solid black;">A great mountain you are
                Similar to Paradise
                The home of our fathers
                The monastery of Macarios</td>
            <td class="arabic">ياجبل عظيم الشأنمتشبه بالفردوسمسكن الآباء الرهبانإسقيط مقاريوس</td>
        </tr>
        <tr id="table_35_row_30">
            <td class="coptic" style="border-right: 1px solid black;">The righteous dwelt in there
                Proclaiming and singing Agios
                Watching night and day
                The children of Macarios</td>
            <td class="arabic">سكنه آباء أبرارصارخين قائلين قدوسسهارى ليل ونهارأولاد مقاريوس</td>
        </tr>
        <tr id="table_35_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Home for barbarians you were
                And shelter for the thieves
                But Macarios converted you
                To be like Paradise</td>
            <td class="arabic">يامسكن للأشرارومأوى للصوصصيرك أبو مقارمتشبهاً بالفردوس</td>
        </tr>
        <tr id="table_35_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Blessed be you Abba Makar
                Blessed be Macarios
                The father of Shiheet
                Cleanser of rusting souls</td>
            <td class="arabic">طوباك أيها البارطوباك يامقاريوسأنت لشيهيت فخارمع الآباء الرؤوس</td>
        </tr>
        <tr id="table_35_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Hail to the three Macarii
                And all the head fathers
                Dwelling in Shiheet,
                The monastery of Macarios</td>
            <td class="arabic">وسلامى للثلاثة مقاراتوكل الآباء الرؤوسالسكان بجبل شيهيتإسقيط مقاريوس</td>
        </tr>
        <tr id="table_35_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Hail to Abba Youanis
                The hegomen (protopriest)
                And to Abba Pishoy
                Pi romi ente leeos</td>
            <td class="arabic">وسلامى لأنبا يؤنسبى هيغومينوسوالأب أنبا بيشوىبى رومى إنتى ليوس</td>
        </tr>
        <tr id="table_35_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Hail to Abba Daniel
                And to Abba Isidore
                And the exceedingly honored
                Abba Arsanios</td>
            <td class="arabic">وسلامى لأنبا دانيالوالأب أنباايسيذورسوالمكرم بكل الاكرامالانبا أرسانيوس</td>
        </tr>
        <tr id="table_35_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Never forget our Pope
                When praying to the Holy lord
                And his partners our bishops
                And all the holy orders</td>
            <td class="arabic">ولاتنسوا بطركناعند الرب القدوسانبا (...) قدوتنانيم نين يوتى إن نى إيبيسكوبوس</td>
        </tr>
        <tr id="table_35_row_37">
            <td class="coptic" style="border-right: 1px solid black;">Please remember O Lord
                The ranks of monks
                And all the Christians
                Grant them Your mercies</td>
            <td class="arabic">لاتنسى ياسيدناطغمات نى موناخوسوكل مراتب ملتنابى أواى إن نى اخريستيانوس</td>
        </tr>
        <tr id="table_35_row_38">
            <td class="coptic" style="border-right: 1px solid black;">Hail to Saint Mary
                The intercessor for all people
                The great honored name
                Our guide to Paradise</td>
            <td class="arabic">وسلامى إلى مريمالشفيعة فى كل جنوسصاحبة الاسم الأعظموتوصلنا إلى الفردوس</td>
        </tr>
        <tr id="table_35_row_39">
            <td class="arabic" style="border-right: 1px solid black;">1- في صفوف المعترفين فخر المجاهدين نجم بين
                القديسينبنيوت افا صموئيل</td>
            <td class="coptic">Among the confessors
                pride of the strivers
                a star among the saints
                "Peniout Ava Samuel"(1)</td>
        </tr>
        <tr id="table_35_row_40">
            <td class="arabic" style="border-right: 1px solid black;">2- بدعوة الهية قصدت البرية في محبة ناريةبنيوت
                افا صموئيل</td>
            <td class="coptic">With a divine invitation
                You aimed for the desert
                with love full of fire
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_41">
            <td class="arabic" style="border-right: 1px solid black;">3- ملاك كله طهارةإقتادك بمهارة لإسقات انبا
                مقاربنيوت افا صموئيل</td>
            <td class="coptic">An angel full of purity
                has led you with bravery
                to the Eskiet of Abba Makarious
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_42">
            <td class="arabic" style="border-right: 1px solid black;">4- لشيخ بين الرهبانناسكاً كل الزمانقهر العدو
                الشيطانبنيوت افا صموئيل</td>
            <td class="coptic">To an elder among the monks
                an ascetic all his life
                who defeated Satan the enemy
                Our father Avva Aghason</td>
        </tr>
        <tr id="table_35_row_43">
            <td class="arabic" style="border-right: 1px solid black;">5- نصحك بالبتوليةوالمحبة النقيةوالتواضع
                بوصيةبنيوت افا صموئيل</td>
            <td class="coptic">He advised you on chastity
                and love full of purity
                and also staying lowly
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_44">
            <td class="arabic" style="border-right: 1px solid black;">6- أعطيت بنعمتهضعفين من روحهعند نياحتهبنيوت افا
                صموئيل</td>
            <td class="coptic">Through his grace, you were given
                double from his spirit
                at the time of his departure
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_45">
            <td class="arabic" style="border-right: 1px solid black;">7- زدت من اتعابكوقهرت لذاتكوحبك لالهكبنيوت افا
                صموئيل</td>
            <td class="coptic">With pain, you increased your load
                enslaving your ego
                gaining more love for your God
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_46">
            <td class="arabic" style="border-right: 1px solid black;">8- نلت ابوة انطونيوسمحبة مقاريوس وايمان
                ديسقوروسبنيوت افا صموئيل</td>
            <td class="coptic">You attained fatherhood of Antonious
                and the love of Makarious
                also the faith of Diaskourous
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_47">
            <td class="arabic" style="border-right: 1px solid black;">9- برائحتك الذكيةوعشرتك الالهيةملأت البريةبنيوت
                افا صموئيل</td>
            <td class="coptic">With your pure aroma
                and your fellowship with God
                you filled the whole desert
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_48">
            <td class="arabic" style="border-right: 1px solid black;">10-علمتهم الرهبانيةوالحياة النسكية وتعاليم
                الارثوذكسيةبنيوت افا صموئيل</td>
            <td class="coptic">You've taught them monasticism
                and life of asceticism
                and the teaching of Orthodoxy
                "Peniout Ava Samuel</td>
        </tr>
        <tr id="table_35_row_49">
            <td class="arabic" style="border-right: 1px solid black;">11-ارسل القوقس بيانمكتوب من الشيطان الي الاباء
                الرهبانبنيوت افا صموئيل</td>
            <td class="coptic">Muqauqus sent a proclamation
                written by Satan
                to all the monk fathers
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_50">
            <td class="arabic" style="border-right: 1px solid black;">12-يقول بطبيعتينوغير متحدين للرب الفادي
                الامينلإلهنا عمانوئيل</td>
            <td class="coptic">Calling for the "Two Natures"(2)
                without being unified
                pertaining to our Savior
                Our God Emmanuel</td>
        </tr>
        <tr id="table_35_row_51">
            <td class="arabic" style="border-right: 1px solid black;">13-هدد بقتل ووعيدمن يعترف بالابن الوحيدويتبع
                باباه الحبيبالانبا بينيامين</td>
            <td class="coptic">He threatened to kill all those
                who confess the "Only Begotten Son"
                and who follow the loving father
                That is Avva Benjamin</td>
        </tr>
        <tr id="table_35_row_52">
            <td class="arabic" style="border-right: 1px solid black;">14-هجم علي الصحراءالاشرار الاقوياءورفضت بشمم
                وابادةبنيوت افا صموئيل</td>
            <td class="coptic">They ambushed the desert
                the strong and evil ones
                you refused them with all your strength
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_53">
            <td class="arabic" style="border-right: 1px solid black;">15-اعترف بالمسيحاعتراف صادق صريحومزقت
                التصريحبنيوت افا صموئيل</td>
            <td class="coptic">You confessed, I believe in Christ
                a true and sincere confession
                and tore apart the proclamation
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_54">
            <td class="arabic" style="border-right: 1px solid black;">16-طبيعة نقية واحدةلاهوتية وناسوتية متحدة
                بالكليةبنيوت افا صموئيل</td>
            <td class="coptic">One nature that is pure
                Divinity and Humanity
                totally , unified
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_55">
            <td class="arabic" style="border-right: 1px solid black;">17-الكلمة صار جسداًالإله صار معنا وراينا مجده
                مجدابنيوت افا صوئيل</td>
            <td class="coptic">The Incarnated "Logos"
                our God dwelt among us
                and we saw His great glory
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_56">
            <td class="arabic" style="border-right: 1px solid black;">18-ضربوك بايدي قويةجلدوك في وحشية الايمان وديعة
                غاليةبنيوت افا صموئيل</td>
            <td class="coptic">They struck you with their strong hands
                and whipped you without mercy
                the faith is a "Precious Gift"
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_57">
            <td class="arabic" style="border-right: 1px solid black;">19-اعترف بايمان ويقينبيسوع برجك الحصينقلعوا عينك
                اليمينبمنيوت افا صموئيل</td>
            <td class="coptic">With a true faith you've confessed
                that Christ is your safe tower
                they plucked out your right eye
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_58">
            <td class="arabic" style="border-right: 1px solid black;">20-اوصيت اربعة رهبانليحفظوا الايمان اتخذوا
                القلمون مكانبنيوت افا صموئيل</td>
            <td class="coptic">Four monks you've instructed
                to hold strong, unto the faith
                they dwelt in the "Kolomoun"
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_59">
            <td class="arabic" style="border-right: 1px solid black;">21-قدسته بصلاتكودموعك ومطانياتك وصلبك
                لذاتكبنيوت افا صموئيل</td>
            <td class="coptic">You've blessed it with your prayers
                and your worshiping with tears
                crucifying your ego
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_60">
            <td class="arabic" style="border-right: 1px solid black;">22-حاول البربر المتجبرين كسر نزر البتولية صرخت
                ليسوع المسيح بنيوت افا صموئيل</td>
            <td class="coptic">The vicious Barbarians
                tried to ruin your "virginity's vow"
                you cried to Christ your helper
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_61">
            <td class="arabic" style="border-right: 1px solid black;">23-مر بك كسيحبقلب جريح كئيبشفيته بقوة
                المسيحبنيوت افا صموئيل</td>
            <td class="coptic">A lame man passed by you
                with a heart full of sorrow
                with God's power you cured him
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_62">
            <td class="arabic" style="border-right: 1px solid black;">24-صرت ينبوع شفاءلكل مرض وداءحتى البربر
                والاعداءبنيوت افا صموئيل</td>
            <td class="coptic">A spring of healing you became
                to all the sick and lame
                even the barbarian enemy
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_63">
            <td class="arabic" style="border-right: 1px solid black;">25-قائد البربر الجبارسألك ايها البار زوجتي عاقر
                محتاربنيوت افا صموئيل</td>
            <td class="coptic">Their leader said to you
                O righteous man you are
                my wife is barren
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_64">
            <td class="arabic" style="border-right: 1px solid black;">26-طلبت من الله الاببايمان غير مرتاب فوهبهما
                الانجاببنيوت افا صموئيل</td>
            <td class="coptic">You asked God the Father
                with faith that is strong and true
                He answered and gave her an offspring
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_65">
            <td class="arabic" style="border-right: 1px solid black;">27-عدت لأولادكليتعلموا جهادك وفزت بامجادكبنيوت
                افا صوئيل</td>
            <td class="coptic">To your children you returned
                and much from you they learned
                and many glories you have gained
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_66">
            <td class="arabic" style="border-right: 1px solid black;">28-اذكرنا في الصلاةامام عرش الإله ليرحمنا نحن
                الخطاةبنيوت افا صموئيل</td>
            <td class="coptic">Remember us in your prayers
                in front of the throne of God
                to forgive us the sinners
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_67">
            <td class="arabic" style="border-right: 1px solid black;">29-صلي عنا للديانيثبتنا في الايمان الي اخر
                الازمانبنيوت افا صموئيل</td>
            <td class="coptic">Pray to the justified Judge
                To confirm us in the faith
                To the end of all ages
                "Peniout Ava Samuel"</td>
        </tr>
        <tr id="table_35_row_68">
            <td class="arabic" style="border-right: 1px solid black;">30-احفظ يا رب بطركناوشركاؤه اساقفناورهبانا
                وكهنتنابصلاة الانبا صموئيل</td>
            <td class="coptic">O Lord please keep safe our Pope
                and the bishops with him
                our monks and the clergymen
                through the prayers of Abba Samuel</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_36" data-title="Your Table Title Here"
        onclick="toggleTable('table_36', this)">+ Your Table Title Here</span>
    <table id="table_36" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_36_row_0">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY OF THE VIRGIN FOR ADVENT</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_36_row_1">
            <td class="coptic" style="border-right: 1px solid black;">For when I speak about you, O cherubic throne, my
                tongue never wearies, from blessing you.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲅⲁⲣ ⲁⲓϣⲁⲛⲥⲁϫⲓ ⲉⲑⲃⲏϯ: ̀ⲱ ⲡⲓϩⲁⲣⲙⲁ ̀ⲛⲭⲉⲣⲟⲩⲃⲓⲙⲓⲕⲟⲛ:
                ⲡⲁⲗⲁⲥ ⲛⲁϧⲓⲥⲓ ⲁⲛ ̀ⲉⲛⲉϩ: ⲧⲉⲛⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ̀ⲙⲙⲟ.</td>
            <td class="arabic">لأني إذا ما تكلمت من أجلك أيتها المركبة الشاروبيمية فأن لساني لا يتعب أبداً في تطويبك.
            </td>
        </tr>
        <tr id="table_36_row_2">
            <td class="coptic" style="border-right: 1px solid black;">For indeed I will go, to the house of David, to
                acquire a voice, by which I can speak of your honor.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲟⲛⲧⲱⲥ ⲅⲁⲣ ϯⲛⲁϣⲉⲛⲏⲓ: ϣⲁ ⲛⲓ̀ⲁⲩⲗⲉⲏⲟⲩ ̀ⲛⲧⲉ ̀ⲡⲏⲓ
                ̀ⲛⲆⲁⲩⲓⲇ: ̀ⲛⲧⲁ̀ϭⲓ ̀ⲛⲟⲩ̀ⲥⲙⲏ ̀ⲉⲃⲟⲗϩⲓⲧⲟⲧϥ: ⲉⲑⲣⲓⲥⲁϫⲓ ̀ⲙⲡⲉⲧⲁⲓⲟ.</td>
            <td class="arabic">لأنني أمضي حقاً إلي ديار بيت داود لأحظي بصوت به أنطق بكرامتك.</td>
        </tr>
        <tr id="table_36_row_3">
            <td class="coptic" style="border-right: 1px solid black;">For God has stood, at the borders of Judea, and
                joyfully granted His voice, which the tribe of Judah accepted.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲁ Ⲫϯ ̀ⲟϩⲓ ̀ⲉⲣⲁⲧϥ: ϧⲉⲛ ⲛⲓⲑⲱϣ ̀ⲛⲧⲉ ϯⲒⲟⲩⲇⲉ̀ⲁ: ⲁϥϯ
                ̀ⲛⲧⲉϥ̀ⲥⲙⲏ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ̀ⲁ̀ⲧⲫⲩⲗⲏ ̀ⲛⲒⲟⲩⲇⲁ ϣⲟⲡϥ ̀ⲉⲣⲟⲥ.</td>
            <td class="arabic">لأن الله وقف في حدود اليهودية وأعطي صوته بتهليل فقبلة سبط يهوذا.</td>
        </tr>
        <tr id="table_36_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The tribe of Judah is the Virgin, who gave birth
                to our Savior, and after His birth, she remained a virgin.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲫⲩⲗⲏ ̀ⲛⲒⲟⲩⲇⲁ ⲧⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏ̀ⲉⲧⲁⲥⲙⲓⲥⲓ
                ̀ⲙⲡⲉⲛⲤⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ̀ⲑⲣⲉⲥⲙⲁⲥϥ: ⲁⲥ̀ⲟϩⲓ ⲉⲥⲟⲓ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">العذراء هي سبط يهوذا التي ولدت مخلصنا وبعد ولادته أيضاً بقيت عذراء.</td>
        </tr>
        <tr id="table_36_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Along with the voice, of Gabriel the Angel, we
                send you greetings, O Mary the Mother of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲃⲟⲗ ⲅⲁⲣ ϩⲓⲧⲉⲛ ϯⲫⲱⲛⲏ: ̀ⲛⲧⲉ Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓ̀ⲁⲅⲅⲉⲗⲟⲥ:
                ⲧⲉⲛϯ ⲛⲉ ̀ⲙⲡⲓⲭⲉⲣⲉⲧⲓⲥⲙⲟⲥ: ̀ⲱ ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">وبصوت الملاك غبريال نٌعطيك السلام يا والدة الإله مري.</td>
        </tr>
        <tr id="table_36_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you from God, hail to you from Gabriel,
                hail to you from us, we magnify you saying "Hail to you."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲫϯ: ⲭⲉⲣⲉ ⲛⲉ ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ
                Ⲅⲁⲃⲣⲓⲏⲗ: ⲭⲉⲣⲉ ⲛⲉ ̀ⲉⲃⲟⲗ ϩⲓⲧⲟⲧⲉⲛ: ϫⲉ ⲭⲉⲣⲉ ⲛⲉ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟ.</td>
            <td class="arabic">السلام لك من قبل الله السلام لك من قبل غبريال السلام لك من قبلنا نعظمك قائلين السلام لك.
            </td>
        </tr>
        <tr id="table_36_row_7">
            <td class="coptic" style="border-right: 1px solid black;">The holy angel Gabriel, announced glad tidings to
                the Virgin, and after the greeting, he strengthened her saying.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ⲁⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ Ⲅⲁⲃⲣⲓⲏⲗ: ⲁϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ
                ̀ⲛϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓ̀ⲁⲥⲡⲁⲥⲙⲟⲥ: ⲁϥⲧⲁϫⲣⲟ ̀ⲙⲙⲟⲥ ϧⲉⲛ ⲡⲉϥⲥⲁϫⲓ.</td>
            <td class="arabic">غبريال الملاك الطاهر بشر العذراء وبعد أن أهداها السلام قواها بقولة.</td>
        </tr>
        <tr id="table_36_row_8">
            <td class="coptic" style="border-right: 1px solid black;">"Do not be afraid Mary, for you have found favor
                with God, behold you shall conceive, and bring forth a Son."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲙⲡⲉⲣⲉⲣϩⲟϯ Ⲙⲁⲣⲓⲁⲙ: ̀ⲁⲣⲉϫⲓⲙⲓ ⲅⲁⲣ ̀ⲛⲟⲩ̀ϩⲙⲟⲧ:
                ϧⲁⲧⲉⲛ Ⲫϯ ϩⲏⲡⲡⲉ ⲅⲁⲣ ⲧⲉⲣⲁ̀ⲉⲣⲃⲟⲕⲓ: ⲟⲩⲟϩ ̀ⲛⲧⲉⲙⲓⲥⲓ ̀ⲛⲟⲩϢⲏⲣⲓ.</td>
            <td class="arabic">لا تخافي يا مريم لأنك قد وجدت نعمة عند الله ها ستحبلين وتلدين إبناً.</td>
        </tr>
        <tr id="table_36_row_9">
            <td class="coptic" style="border-right: 1px solid black;">"And the Lord God will give Him, the throne of His
                father David, and He will reign over the house of Jacob, forever and ever."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉϯ ⲛⲁϥ ̀ⲛϫⲉ Ⲡ̅ⲟ̅ⲥ Ⲫϯ: ̀ⲙⲡⲓ̀ⲑⲣⲟⲛⲟⲥ ̀ⲛⲧⲉ Ⲇⲁⲩⲓⲇ
                ⲡⲉϥⲓⲱⲧ: ̀ϥⲛⲁ̀ⲉⲣⲟⲩⲣⲟ ̀ⲉϫⲉⲛ ̀ⲡⲏⲓ ̀ⲛⲒⲁⲕⲱⲃ: ϣⲁ ̀ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲡⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">ويعطيه الرب الإله كرسي داود أبيه. ويملك علي بيت يعقوب إلي أبد الأبد.</td>
        </tr>
        <tr id="table_36_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Therefore at all times, we glorify you
                as Theotokos, ask the Lord on our behalf, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯ̀ⲱⲟⲩ ⲛⲉ: ϩⲱⲥ Ⲑⲉ̀ⲟⲧⲟⲕⲟⲥ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ:
                ⲙⲁϯϩⲟ ̀ⲉⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">من اجل هذا نمجدك كوالدة الاله كل حين إسألي الرب عنا ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Virgin, the right and true queen,
                hail to the pride of our race, who bore to us Emmanuel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲱ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ̀ⲙⲙⲏⲓ ̀ⲛ̀ⲁⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ
                ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲣⲉ̀ϫⲫⲟ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.
            </td>
        </tr>
        <tr id="table_36_row_12">
            <td class="coptic" style="border-right: 1px solid black;">We ask you to remember us, O our faithful
                advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲁⲣⲉⲡⲉⲛⲙⲉⲩⲓ: ̀ⲱ ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ
                ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_13">
            <td class="coptic" style="border-right: 1px solid black;">ANOTHER DOXOLOGY FOR THE VIRGIN FOR ADVENT</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_36_row_14">
            <td class="coptic" style="border-right: 1px solid black;">The adornment of the Virgin, Mary the daughter of
                king David, at the right hand of Jesus Christ, the beloved Son of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲣⲉ ̀ⲡⲥⲟⲗⲥⲉⲗ ̀ⲛϯⲠⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ ̀ⲧϣⲉⲣⲓ ̀ⲙ̀ⲡⲟⲩⲣⲟ
                Ⲇⲁⲩⲓⲇ: ⲥⲁⲟⲩⲓⲛⲁⲙ ̀ⲛⲒ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ̀ⲡϢⲏⲣⲓ ̀ⲙⲪϯ ⲡⲓⲙⲉⲛⲣⲓⲧ.</td>
            <td class="arabic">زينتك يا مريم العذراء يا أبنة الملك داود هي عن يمين يسوع المسيح إبن الله الحبيب.</td>
        </tr>
        <tr id="table_36_row_15">
            <td class="coptic" style="border-right: 1px solid black;">As king David the Psalmist, has said in the
                psalms, "Upon the right hand of the throne, did stand the queen."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲁⲧⲁ ̀ⲡⲥⲁϫⲓ ̀ⲛⲆⲁⲩⲓⲇ ̀ⲡⲟⲩⲣⲟ: ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ϧⲉⲛ
                ⲡⲓⲯⲁⲗⲙⲟⲥ: ϫⲉ ⲁⲥ̀ⲟϩⲓ ̀ⲉⲣⲁⲧⲥ ̀ⲛϫⲉ ϯⲟⲩⲣⲱ: ⲥⲁⲟⲩⲓⲛⲁⲙ ̀ⲙⲡⲓ̀ⲑⲣⲟⲛⲟⲥ.</td>
            <td class="arabic">كقول داود الملك المرتل في المزامير قامت الملكة عن يمين العرش.</td>
        </tr>
        <tr id="table_36_row_16">
            <td class="coptic" style="border-right: 1px solid black;">You are exalted more than the Cherubim, O Mother
                of the mighty God, and honored more than the Seraphim, in heaven and on earth.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉϭⲟⲥⲓ ̀ⲉⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ̀ⲱ ̀ⲑⲙⲁⲩ ̀ⲙⲪϯ ⲫⲁ ⲡⲓ̀ⲁⲙⲁϩⲓ:
                ⲧⲉⲧⲁⲓⲏⲟⲩⲧ ̀ⲉⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ϧⲉⲛ ̀ⲧⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
            <td class="arabic">أنت ارفع من الشاروبيم وأكرم من السارافيم في السماء وعلي الأرض يا أم الله ذي العزة.</td>
        </tr>
        <tr id="table_36_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you O Mary, for you have given birth
                to the true One, while remaining a virgin, and your virginity is sealed.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲟⲩⲛⲓⲁϯ ̀ⲛⲑⲟ Ⲙⲁⲣⲓⲁ: ϫⲉ ̀ⲁⲣⲉ̀ϫⲫⲟ ̀ⲙⲡⲓ̀Ⲁⲗⲏⲑⲓⲛⲟⲥ:
                ⲉⲥⲧⲟⲃ ̀ⲛϫⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ: ̀ⲉⲣⲉ̀ⲟϩⲓ ̀ⲉⲣⲉⲟⲓ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">طوباك أنتِ يا مريم لأنك ولدت (الإله) الحقيقي وبتوليتك مختومة وانت باقية عذراء.</td>
        </tr>
        <tr id="table_36_row_18">
            <td class="coptic" style="border-right: 1px solid black;">As Isaiah has said, with a voice of joy, "Behold a
                young Virgin will conceive, and give birth to Emmanuel."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲁⲧⲁ ̀ⲫⲣⲏϯ ̀ⲉⲧⲁϥϫⲟⲥ: ̀ⲛϫⲉ Ⲏⲥⲁ̀ⲏⲁⲥ ϧⲉⲛ ⲟⲩ̀ⲥⲙⲏ
                ̀ⲛⲑⲉⲗⲏⲗ: ϫⲉ ⲓⲥ ̀ⲁⲗⲟⲩ ̀ⲙⲠⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥ̀ⲉⲙⲓⲥⲓ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">كما قال أشعياء بصوت التهليل ها فتاه عذراء ستلد لنا عمانوئيل.</td>
        </tr>
        <tr id="table_36_row_19">
            <td class="coptic" style="border-right: 1px solid black;">We magnify you every day, saying with Gabriel,
                "Hail to you O full of grace, the Lord is with you."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟ ̀ⲙⲙⲏⲛⲓ ̀ⲙⲙⲏⲛⲓ: ⲉⲛϫⲱ ̀ⲙⲙⲟⲥ ⲛⲉⲙ
                Ⲅⲁⲃⲣⲓⲏⲗ: ϫⲉ ⲭⲉⲣⲉ ⲕⲉⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ̀ⲟ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁ ⲥⲟⲩ.</td>
            <td class="arabic">نعظمك كل يوم قائلين مع غبريال أفرحي يا ممتلئة نعمة الرب معكِ.</td>
        </tr>
        <tr id="table_36_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Virgin, the right and true queen,
                hail to the pride of our race, who bore to us Emmanuel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲱ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ̀ⲙⲙⲏⲓ ̀ⲛ̀ⲁⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ
                ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲣⲉ̀ϫⲫⲟ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.
            </td>
        </tr>
        <tr id="table_36_row_21">
            <td class="coptic" style="border-right: 1px solid black;">We ask you to remember us, O our
                faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ̀ⲁⲣⲉⲡⲉⲛⲙⲉⲩ̀ⲓ: ̀ⲱ ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ:
                ⲛⲁϩⲣⲉⲛ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Your greatness O Mary, the undefiled Virgin, is
                likened to the height of the palm tree, spoken of by Solomon.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲙⲉⲧⲛⲓϣϯ ̀ⲱ Ⲙⲁⲣⲓⲁ: ϯⲡⲁⲣⲑⲉⲛⲟⲥ ̀ⲛⲁⲧⲑⲱⲗⲉⲃ: ̀ⲥⲟⲛⲓ
                ̀ⲙ̀ⲡⲓϭⲓⲥⲓ ̀ⲙⲡⲓⲃⲉⲛⲓ: ̀ⲉⲧⲁ Ⲥⲟⲗⲟⲙⲱⲛ ⲥⲁϫⲓ ⲉⲑⲃⲏⲧϥ.</td>
            <td class="arabic">عظمتك يامريم العذراء الغير الدنسة تشبه علو النخلة التى تكلم عنها سليمان .</td>
        </tr>
        <tr id="table_36_row_23">
            <td class="coptic" style="border-right: 1px solid black;">You are the spring of living water, that flows
                from Lebanon, for out of you sprang unto us, the grace of the Divinity.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲛⲑⲟ ⲧⲉ ϯⲙⲟⲩⲙⲓ ̀ⲙⲙⲱⲟⲩ ̀ⲛⲱⲛϧ: ⲉⲧϧⲁϯ ̀ⲙⲡⲓⲖⲓⲃⲁⲛⲟⲥ:
                ̀ⲉⲧⲁ ⲡⲓ̀ϩⲙⲟⲧ ̀ⲛⲧⲉ ϯⲙⲉⲑⲛⲟⲩϯ: ⲃⲉⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ ̀ⲛϧⲏⲧⲥ.</td>
            <td class="arabic">أنت ينبوع ماء الحياة الفائض من لبنان التى نبعت لنا منه نعمة اللاهوت.</td>
        </tr>
        <tr id="table_36_row_24">
            <td class="coptic" style="border-right: 1px solid black;">You gave birth to Emmanuel, out of your virginal
                womb, and he has made us heirs, to the Kingdom of heaven.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ: ϧⲉⲛ ϯⲙⲉⲧⲣⲁ ̀ⲙⲡⲁⲣⲑⲉⲛⲓⲕⲓ:
                ⲁϥⲁⲓⲧⲉⲛ ̀ⲛⲕⲗⲏⲣⲟⲛⲟⲙⲟⲥ: ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ̀ⲑⲙⲉⲧⲟⲩⲣⲟ ̀ⲛⲛⲓⲫⲏⲟⲩⲓ.</td>
            <td class="arabic">ولدت لنا عمانوئيل من أحشائك البتول وصيرنا وارثين في ملكوت السموات .</td>
        </tr>
        <tr id="table_36_row_25">
            <td class="coptic" style="border-right: 1px solid black;">According to the promise, He promised to our
                father, King David the Patriarch, He came and fulfilled to us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲁⲧⲁ ⲡⲓⲱϣ ⲉⲧⲁϥⲱϣ ̀ⲙⲙⲟϥ: ̀ⲛⲧⲉ ⲡⲉⲛⲓⲱⲧ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲉⲧⲉ ⲫⲁⲓ ⲡⲉ ̀ⲡⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ: ⲁϥ̀ⲓ ⲁϥϫⲟⲕϥ  ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">كالوعد الذى وعد به أبانا رئيس الآباء الذى هو الملك داود أتى وأكمله لنا .</td>
        </tr>
        <tr id="table_36_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Virgin, the right and true Queen,
                Hail to the pride of our race, who bore to us Emmanuel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲱ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :  ϯⲟⲩⲣⲱ  ̀ⲙⲙⲏⲓ   ̀ⲛ̀ⲁⲗⲏⲑⲓⲛⲏ
                : ⲭⲉⲣⲉ ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ̀ⲁⲣⲉ̀ϫⲫⲟ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.
            </td>
        </tr>
        <tr id="table_36_row_27">
            <td class="coptic" style="border-right: 1px solid black;">We ask you to remember us, O our faithful
                advocate, before our Lord Jesus Christ that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ  ̀ⲁⲣⲓⲡⲉⲛⲙⲉⲩ̀ⲓ : ̀ⲱ ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ :
                ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ  Ⲡⲓ̀Ⲭⲣⲓⲥⲧⲟⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ  ⲛⲁⲛ  ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_28">
            <td class="arabic" style="border-right: 1px solid black;">ميخائيل رئيس السمائيين هو الأول فى الطقوس
                الملائكية يخدم أمام الرب.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲓⲭⲁⲏⲗ ̀ⲡⲁⲣⲭⲱⲛ ̀ⲛⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ̀ⲛⲑⲟϥ ⲉⲧⲟⲓ ̀ⲛϣⲟⲣⲡϧⲉⲛ
                ⲛⲓⲧⲁⲝⲓⲥ ̀ⲛⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲉϥϣⲉⲙϣⲓ ̀ⲙⲡⲉⲙⲑⲟ ̀ⲙⲡ⳪.</td>
            <td class="coptic">Michael the head of the heavenly, he is the first, among the angelic hosts, serving
                before the Lord.</td>
        </tr>
        <tr id="table_36_row_29">
            <td class="arabic" style="border-right: 1px solid black;">أن الله يرسل لنا مراحمه ورأفاته بسؤال ميخائيل رئيس
                الملائكة العظيم.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲣⲉ Ⲫϯ ⲟⲩⲱⲣⲡ ⲛⲁⲛ: ̀ⲛⲛⲉϥⲛⲁⲓ ⲛⲉⲙ ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ ϩⲓⲧⲉⲛ
                ⲛⲓϯϩⲟ ̀ⲛⲧⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲛⲓϣϯ ̀ⲛⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="coptic">Wherefore God sends unto us, His mercy and His compassion, through the supplications of
                Michael, the great archangel.</td>
        </tr>
        <tr id="table_36_row_30">
            <td class="arabic" style="border-right: 1px solid black;">وتكمل الأثمار بطلبات ميخائيل لأنه قريب إلى الله
                يسأل عنا.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲩϫⲱⲕ ⲉⲃⲟⲗ ̀ⲛϫⲉ ⲛⲓⲕⲁⲣⲡⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲉⲛⲧⲱⲃϩ ̀ⲙⲘⲓⲭⲁⲏⲗ
                ϫⲉ ̀ⲛⲑⲟϥ ⲉⲧϧⲉⲛⲧ ⲉϧⲟⲩⲛ ⲉⲪϯ: ⲉϥϯϩⲟ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ.</td>
            <td class="coptic">The harvest is perfected, through the prayers of Michael, for he is near God, asking Him
                for us.</td>
        </tr>
        <tr id="table_36_row_31">
            <td class="arabic" style="border-right: 1px solid black;">كل عطية صالحة وكل موهبة تامة إنما تهبط لنا من فوق
                من عند أبى الأنوار.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁⲛⲉⲩ: ⲛⲉⲙ ⲇⲱⲣⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϫⲏⲕ ⲉⲃⲟⲗ
                ⲉⲩⲛⲏⲟⲩ ⲛⲁⲛ ⲉⲃⲟⲗ ̀ⲙ̀ⲡϣⲱⲓ: ϩⲓⲧⲉⲛ ⲫⲓⲱⲧ ̀ⲛⲧⲉ ⲛⲓⲟⲩⲱⲓⲛⲓ.</td>
            <td class="coptic">All good honor, and every perfect gift, comes to us from on high, from the Father of
                Light.</td>
        </tr>
        <tr id="table_36_row_32">
            <td class="arabic" style="border-right: 1px solid black;">فلنسبح ونمجد ونسجد للثالوث المقدس المساوى الدائم
                إلى الأبد.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲛⲧⲉⲛϯⲱⲟⲩ: ̀ⲛⲧⲉⲛⲟⲩⲱϣⲧ ̀ⲛϯⲧⲣⲓⲁⲥ ⲉˉⲑˉⲩˉ
                ⲉⲧⲟⲓ ̀ⲛⲟⲙⲟⲟⲩⲥⲓⲟⲥ: ⲉⲑⲙⲏⲛ ̀ⲉⲃⲟⲗ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="coptic">Let us praise and glorify, and worship the Holy, and Coessential Trinity, who endures
                forever.</td>
        </tr>
        <tr id="table_36_row_33">
            <td class="arabic" style="border-right: 1px solid black;">إشفع فينا يارئيس الملائكة الطاهر ميخائيل رئيس
                السمائيين ليغفر لنا خطايانا.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ: ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉˉⲑˉⲩˉ
                Ⲙⲓⲭⲁⲏⲗ ̀ⲡⲁⲣⲭⲱⲛ ̀ⲛⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="coptic">Intercede on our behalf, O the holy archangel, Michael the head of the heavenly, that He
                may forgive us our sins.</td>
        </tr>
        <tr id="table_36_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Seven archangels, praising as they stand, before
                the Pantocrator, serving the hidden mystery.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲍ̅ ̀ⲛⲁⲣⲭⲏ ⲁⲅⲅⲉⲗⲟⲥ : ⲥⲉ̀ⲟϩⲓ ̀ⲉⲣⲁⲧⲟⲩ ⲉⲩⲉⲣϩⲩⲙⲛⲟⲥ :
                ̀ⲙⲡⲉ̀ⲙⲑⲟ ̀ⲙⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : ⲉⲩϣⲉⲙϣⲓ ̀ⲙⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲧϩⲏⲡ.</td>
            <td class="arabic">سبعة رؤساء ملائكة وقوف يسبحون أمام الضابط الكل يخدمون السر الخفى .</td>
        </tr>
        <tr id="table_36_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Michael is the first, Gabriel is the second,
                Rafael is the third, a symbol of the Trinity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲓⲭⲁⲏⲗ ⲡⲉ ⲡⲓϩⲟⲩⲓⲧ : Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲉ ⲡⲓⲙⲁϩ ̀ⲥⲛⲁⲩ: Ⲣⲁⲫⲁⲏⲗ
                ⲡⲉⲡⲓⲙⲁϩ ϣⲟⲙⲧ: ⲕⲁⲧⲁ ̀ⲡⲧⲩⲡⲟⲥ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ.</td>
            <td class="arabic">ميخائيل هو الأول. غبريال هو الثانى. رافائيل هو الثالث. كمثال الثالوث .</td>
        </tr>
        <tr id="table_36_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Suriel Sedakiel, Sarathiel and Ananiel, the great
                and holy luminaries, entreating Him for the creation.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲟⲩⲣⲓⲏⲗ Ⲥⲉⲇⲁⲕⲓⲏⲗ : Ⲥⲁⲣⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ : ⲛⲁⲓⲛⲓϣϯ
                ̀ⲛⲣⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉⲑⲟⲩⲁⲃ : ⲛⲏⲉⲧⲧⲱⲃϩ ̀ⲙⲙⲟϥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲉⲛ ⲡⲓⲥⲱⲛⲧ.</td>
            <td class="arabic">سوريال سداكيال سراتيال وآنانيال هؤلاء المنيرون العظماء الأطهار يطلبون منه عن الخليقة</td>
        </tr>
        <tr id="table_36_row_37">
            <td class="coptic" style="border-right: 1px solid black;">The Cherubim and Seraphim, the thrones,  dominions
                and powers, the four incorporeal creatures, carrying the throne of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛⲓ̀ⲑⲣⲟⲛⲟⲥ ⲛⲓⲙⲉⲧϭⲟⲓⲥ
                ⲛⲓϫⲟⲙ : ⲡⲓ̀ϥⲧⲟⲩ ̀ⲛⲍⲱⲟⲛ ̀ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ ̀ⲛⲐⲉⲟⲥ.</td>
            <td class="arabic">الشاروبيم والسارافيم الكراسي والأرباب والقوات والـ ٤ الحيوانات الغير المتجسدين الحاملون
                مركبة الله</td>
        </tr>
        <tr id="table_36_row_38">
            <td class="coptic" style="border-right: 1px solid black;">The twenty four presbyters, in the Church of the
                firstborn, praise Him without ceasing, proclaiming and saying.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓϫⲟⲧ ̀ϥⲧⲟⲩ ̀ⲙ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ϧⲉⲛ ϯⲉⲕ̀ⲕⲗⲏⲥⲓ̀ⲁ  ̀ⲛⲧⲉ
                ⲛⲓϣⲟⲣⲡ ̀ⲙⲙⲓⲥⲓ : ⲉⲩϩⲱⲥ ̀ⲉⲣⲟϥ ϧⲉⲛ ⲟⲩⲙⲉⲧ ⲁⲑⲧⲙⲟⲩⲛⲕ : ⲉⲩⲱϣ ̀ⲉⲃⲟⲗ ⲉⲩϫⲱ ̀ⲙⲙⲟⲥ.</td>
            <td class="arabic">الـ ٢٤ قسيساً في كنيسة الأبكار يسبحونه بلا فتورصارخين قائلين :</td>
        </tr>
        <tr id="table_36_row_39">
            <td class="coptic" style="border-right: 1px solid black;">Holy God, heal the sick, Holy Mighty, O Lord
                repose those who are asleep.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ : ̀ⲁⲅⲓⲟⲥ
                Ⲓⲥⲭⲩⲣⲟⲥ : ⲛⲏ̀ⲉⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡϭⲟⲓⲥ ⲙⲁ̀ⲙⲧⲟⲛ ⲛⲱⲟⲩ.</td>
            <td class="arabic">قدوس الله . المرضي إشفهم . قدوس القوى . الراقدين يارب نيحهم .</td>
        </tr>
        <tr id="table_36_row_40">
            <td class="coptic" style="border-right: 1px solid black;">Holy  Immortal, bless Your inheritance, may Your
                mercy and peace, be a fortress unto Your people.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲅⲓⲟⲥ ̀ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲥⲙⲟⲩ ̀ⲉⲧⲉⲕ̀ⲕⲗⲏⲣⲟⲛⲟⲙⲓ̀ⲁ :
                ⲙⲁⲣⲉ ⲡⲉⲕⲛⲁⲓ ⲛⲉⲙ ⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲟⲓ ̀ⲛⲥⲟⲃⲧ ̀ⲙⲡⲉⲕⲗⲁⲟⲥ.</td>
            <td class="arabic">قدوس الذى لا يموت بارك ميراثك. ولتكن رحمتك وسلامك حصناً لشعبك .</td>
        </tr>
        <tr id="table_36_row_41">
            <td class="coptic" style="border-right: 1px solid black;">Holy Holy, Holy O Lord of Hosts, heaven and earth
                are full of, Your glory and honor.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲭⲟⲩⲁⲃ ⲟⲩⲟϩ ̀ⲭⲟⲩⲁⲃ : ̀ⲭⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ : ̀ⲧⲫⲉ
                ⲛⲉⲙ ̀ⲡⲕⲁϩⲓ ⲙⲉϩ ̀ⲉⲃⲟⲗ : ϧⲉⲛ ⲡⲉⲕ̀ⲱⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓ̀ⲟ.</td>
            <td class="arabic">قدوس قدوس قدوس رب الصاباؤوت . السماء والأرض مملوئتان من مجدك وكرامتك .</td>
        </tr>
        <tr id="table_36_row_42">
            <td class="coptic" style="border-right: 1px solid black;">And when they say "Alleluia,” the heavenly
                respond saying, "Holy Amen Alleluia, Glory be to our God."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϣⲁⲛϫⲟⲥ ̀ⲙⲡⲓ ⲁⲗⲗⲏⲗⲟⲓⲁ : ϣⲁⲣⲉ ⲛⲁⲛ ⲛⲓⲫⲏⲟⲩ̀ⲓ ⲟⲩⲱϩ
                ̀ⲙⲙⲱⲟⲩ : ϫⲉ ̀ⲁⲅⲓⲟⲥ ̀ⲁⲙⲏⲛ ⲁⲗⲗⲏⲗⲟⲓⲁ  : ⲡⲓ̀ⲱⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ.</td>
            <td class="arabic">إذا ما قالوا الليلويا يتبعهم السمائيون قائلين قدوس أمين الليلويا . المجد هو لإلهنا</td>
        </tr>
        <tr id="table_36_row_43">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O angelic armies,  and
                heavenly orders, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲥⲧⲣⲁⲧⲓ̀ⲁ
                ̀ⲛⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ̀ⲛ̀ⲉⲡⲟⲣⲁⲛⲓⲟⲛ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_44">
            <td class="coptic" style="border-right: 1px solid black;">Our Lord Jesus Christ, has chosen His
                apostles, Peter and Andrew, John and James.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ : ⲁϥⲥⲱⲧⲡ ̀ⲛⲛⲉϥ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ
                : ̀ⲉⲧⲉ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲁⲛ̀ⲇⲣⲉⲁⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ.</td>
            <td class="arabic">الرب يسوع المسيح اختار رسله . وهم بطرس واندراوس. ويوحنا ويعقوب .</td>
        </tr>
        <tr id="table_36_row_45">
            <td class="coptic" style="border-right: 1px solid black;">And the rest Philip and Matthew, Bartholomew and
                Thomas, James the son of Alphaeus, and Simon the Canaanite.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲗⲟⲓⲡⲟⲛ Ⲫⲓⲗⲓⲡⲡⲟⲥ ⲛⲉⲙ Ⲙⲁⲑⲉⲟⲥ: Ⲃⲁⲣⲑⲟⲗⲟⲙⲉⲟⲥ ⲛⲉⲙ Ⲑⲱⲙⲁⲥ
                : Ⲓⲁⲕⲱⲃⲟⲥ ̀ⲛⲧⲉ Ⲁⲗⲫⲉⲟⲥ : ⲛⲉⲙ Ⲥⲓⲙⲱⲛ ⲡⲓⲕⲁⲛⲁⲛⲉⲟⲥ.</td>
            <td class="arabic">وفيلبس ومتى وبرثلماوس وتوما ويعقوب بن حلفي وسمعان القانوى .</td>
        </tr>
        <tr id="table_36_row_46">
            <td class="coptic" style="border-right: 1px solid black;">Thaddeus and Matthias, Paul Mark and Luke, and the
                rest of disciples, who followed our Savior.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲁⲇⲇⲉⲟⲥ ⲛⲉⲙ Ⲙⲁⲧⲑⲓⲁⲥ:  Ⲡⲁⲩⲗⲟⲥ ⲛⲉⲙ Ⲙⲁⲣⲕⲟⲥ ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ
                : ⲛⲉⲙ ̀ⲡⲥⲉⲡⲓ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ : ⲛⲏⲉⲧⲁⲩⲙⲟϣⲓ ̀ⲛⲥⲁ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
            <td class="arabic">وتداوس ومتياس وبولس ومرقس ولوقا . وبقية التلاميذ الذين تبعوا مخلصنا .</td>
        </tr>
        <tr id="table_36_row_47">
            <td class="coptic" style="border-right: 1px solid black;">Matthias who was chosen, in place of Judas, all of
                them and the rest, followed the Master.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲧⲑⲓⲁⲥ ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ : ̀ⲛ̀ⲧϣⲉⲃⲓ̀ⲱ ̀ⲛ Ⲓⲟⲩⲇⲁⲥ : ⲛⲉⲙ
                ̀ⲡϫⲱⲕ ̀ⲉⲃⲟⲗ ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ : ⲛⲏ̀ⲉⲧⲁⲩⲙⲟϣⲓ ̀ⲛⲥⲁ Ⲇⲉⲥⲡⲟⲧⲁ.</td>
            <td class="arabic">متياس الذى صار عِوضاً عن يهوذا . وكامل وبقية التلاميذ الذين تبعوا السيد</td>
        </tr>
        <tr id="table_36_row_48">
            <td class="coptic" style="border-right: 1px solid black;">Their voices went forth, throughout the face of
                the whole earth, and their words have reached, the ends of the world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲟⲩ̀ϧⲣⲱⲟⲩ ϣⲉⲛⲁϥ ̀ⲉⲃⲟⲗ: ϩⲓϫⲉⲛ ̀ⲡϩⲟ ̀ⲙ̀ⲡⲕⲁϩⲓ ⲧⲏⲣϥ :
                ⲟⲩⲟϩ ⲛⲟⲩⲥⲁϫⲓ ⲁⲩⲫⲟϩ : ϣⲁ ⲁⲩⲣⲏϫⲥ ̀ⲛϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">خرجت أصواتهم إلي وجه الأرض كلها . وبلغ كلامهم إلي أقطار المسكونة .</td>
        </tr>
        <tr id="table_36_row_49">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my lords and
                fathers the Apostles,  and the seventy two disciples, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀ Ⲡϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲛⲁ⳪ ̀ⲛⲓⲟϯ
                ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ⲡⲓ̀ϣⲃⲉ ̀ⲥⲛⲁⲩ  ̀ⲙⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الرسل والاثنان والسبعون تلميذاً ليغفر لنا خطايانا.
            </td>
        </tr>
        <tr id="table_36_row_50">
            <td class="coptic" style="border-right: 1px solid black;">O Mark the Apostle,  and the Evangelist,  the
                witness of the passion:  of the Only-Begotten God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲕⲟⲥ   ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ:   ⲟⲩⲟϩ   ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ:   
                ⲡⲓⲙⲉⲑⲣⲉ   ϧⲁ   ⲛⲓ̀ⲙⲕⲁⲩϩ:   ̀ⲛⲧⲉ   ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ   ̀ⲛⲛⲟⲩϯ.</td>
            <td class="arabic">يا مرقس الرسول والإنجيلى الشاهد لآلام الإله الوحيد</td>
        </tr>
        <tr id="table_36_row_51">
            <td class="coptic" style="border-right: 1px solid black;">You have come and enlightened us,  through your
                Gospel,  and taught us the Father and the Son,  and the Holy Spirit.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕ̀ⲓ   ⲁⲕⲉⲣⲟⲩⲱⲓⲛⲓ   ̀̀ⲉⲣⲟⲛ:    ϩⲓⲧⲉⲛ   
                ⲡⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ:             ⲁⲕ̀̀ⲧⲥⲁⲃⲟⲛ  ̀ⲙ̀ Ⲫⲓⲱⲧ    ⲛⲉⲙ   ̀  Ⲡϣⲏⲣⲓ :   ⲛⲉⲙ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ   ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">أتيتَ وأنرتَ لنا بإنجيلك وعلمتنا الآب والابن والروح القدس</td>
        </tr>
        <tr id="table_36_row_52">
            <td class="coptic" style="border-right: 1px solid black;">You brought us out of the darkness,  into the true
                Light, feeding us the Bread of Life,  that came down from heaven.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲉⲛⲧⲉⲛ    ̀̀ⲉⲃⲟⲗ ϧⲉⲛ     ̀ⲡⲭⲁⲕⲓ:  ̀ⲉϧⲟⲩⲛ    
                ̀ⲉⲡⲓⲟⲩⲱⲓⲛⲓ    ̀ⲙⲙⲏⲓ:   ⲁⲕⲧⲉⲙⲙⲟⲛ    ̀ⲙⲡⲓⲱⲓⲕ     ̀ⲛⲧⲉ    ̀ⲡⲱⲛ’:  ̀̀ⲉⲧⲁϥ̀̀ⲓ    ̀ⲉⲡⲉⲥⲏⲧ     ̀ⲉⲃⲟⲗϧⲉⲛ    
                ̀ⲧⲫⲉ.</td>
            <td class="arabic">وأخرجتنا من الظلمة إلى النور الحقيقى . وأطعمتنا خبز الحياة الذى نزلَ من السماء</td>
        </tr>
        <tr id="table_36_row_53">
            <td class="coptic" style="border-right: 1px solid black;">All the tribes of the earth,  were blessed through
                you,  and your words have reached,  the ends of the world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϭⲓ̀ⲥⲙⲟⲩ     ̀ⲛ̀̀ϧⲣⲏⲓ    ̀ⲛϧⲏⲧⲕ:    ̀ⲛϫⲉ   
                ⲛⲓⲫⲩⲗⲏ   ⲧⲏⲣⲟⲩ   ̀ⲛⲧⲉ   ̀ⲡⲕⲁϩⲓ:  ⲟⲩⲟϩ ⲛⲉⲕⲥⲁϫⲓ ⲁⲩⲫⲟϩ:   ϣⲁ   ⲁⲩⲣⲏϫⲥ    ̀ⲛϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">تباركَت بكَ كل قبائل الأرض . واقوالكَ بلغت الي اقطار المسكونة</td>
        </tr>
        <tr id="table_36_row_54">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O martyr,  Hail to the Evangelist, 
                Hail to the apostle,  Mark the Beholder of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ    ⲛⲁⲕ    ̀̀ⲱ    ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ:  ⲭⲉⲣⲉ
                ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲭⲉⲣⲉ   ⲡⲓ̀̀ⲁⲡⲟⲥⲧⲗⲟⲥ:   Ⲙⲁⲣⲕⲟⲥ   ⲡⲓⲑⲉ̀̀ⲱⲣⲓⲙⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للإنجيلى .السلام للرسول . مرقس ناظر الإله</td>
        </tr>
        <tr id="table_36_row_55">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf,  O Beholder of God
                and Evangelist, Mark the Apostle:  that he may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀ Ⲡϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ :    ̀ⲱ     
                ⲡⲓⲑⲉ̀ⲱⲣⲓⲙⲟⲥ    ̀̀ⲛⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ:    Ⲙⲁⲣⲕⲟⲥ     ⲡⲓ̀̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ:    ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا ناظر الإله الإنجيلى مرقس الرسول ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_56">
            <td class="coptic" style="border-right: 1px solid black;">Saint George completed, seven whole years,
                being judged daily, by seventy lawless kings.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲍˉ̅ ̀ⲛⲣⲟⲙⲡⲓ    ⲁϥϫⲟⲕⲟⲩ    ̀ⲉⲃⲟⲗ : ̀ⲛϫⲉ       
                ⲫⲏⲉⲑⲟⲩⲁⲃ   Ⲅⲉⲱⲣⲅⲓⲟⲥ  :    ̀ⲉⲣⲉ  ⲡⲓ̀ϣⲃⲉ   ̀ⲛⲟⲩⲣⲟ   ̀ⲛ̀ⲁⲛⲟⲙⲟⲥ   :    ⲉⲩϯϩⲁⲡ ̀ⲉⲣⲟϥ    ̀ⲙⲙⲏⲛⲓ.</td>
            <td class="arabic">سبع سنين أكملها القديس جيؤرجيوس. و ٧٠ ملكاً منافقين يحكمون عليه كل يوم.</td>
        </tr>
        <tr id="table_36_row_57">
            <td class="coptic" style="border-right: 1px solid black;">They could not change his mind, nor his upright
                faith, nor his great love, for Christ the King.</td>
            <td class="coptic" style="border-right: 1px solid black;">˙Ⲙⲡⲟⲩ ̀ϣⲫⲱⲛϩ ̀ⲙⲡⲉϥ ⲗⲟⲅⲓⲥⲙⲟⲥ : ⲟⲩⲇⲉ ⲡⲉϥⲛⲁϩϯ
                ⲉⲧⲥⲟⲩⲧⲱⲛ : ⲟⲩⲇⲉ ⲧⲉϥⲛⲓϣϯ ̀ⲛ̀ⲁⲅⲁⲡⲏ  : ̀ⲉϧⲟⲩⲛ ̀ⲉ̀ⲡⲟⲩⲣⲟ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">ولم يقدروا أن يميلوا أفكاره ولا إيمانه المستقيم ولا عِظم محبته فى الملك المسيح.</td>
        </tr>
        <tr id="table_36_row_58">
            <td class="coptic" style="border-right: 1px solid black;">He was singing with David saying, "All the nations
                surrounded me: but in the Name of Jesus My Lord, I took revenge on them.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁϥⲉⲣⲯⲁⲗⲓⲛ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ : ϫⲉ ⲁⲩⲕⲱϯ ̀ⲉⲣⲟⲓ ̀ⲛϫⲉ ⲛⲓⲉⲑⲛⲟⲥ
                ⲧⲏⲣⲟⲩ : ⲁⲗⲗⲁ ϧⲉⲛ ̀ⲫⲣⲁⲛ ̀ⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲁⲛⲟⲩϯ : ⲁⲓϭⲓ  ̀ⲙⲡⲁϭⲓ ̀ⲙ̀ⲡϣⲓϣ  ⲛⲉⲙⲱⲟⲩ.</td>
            <td class="arabic">وكان يرتل مع داود قائلاً أحاط بي جميع الأمم لكن باسم يسوع إلهى انتقمت منهم</td>
        </tr>
        <tr id="table_36_row_59">
            <td class="coptic" style="border-right: 1px solid black;">For great is your honor, O George my lord and
                prince, for Christ rejoices in you, in the heavenly Jerusalem.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩ ⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲉⲕⲧⲁⲓ̀ⲟ : ̀ⲱⲠⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ
                : ̀ⲉⲣⲉ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ ⲣⲁϣⲓ ⲛⲉⲙⲁⲕ ϧⲉⲛ Ⲓⲏⲣⲟⲩⲥⲁⲗⲏⲙ  ̀ⲛⲧⲉ ̀ⲧⲫⲉ.</td>
            <td class="arabic">عظيمة هي كرامتكَ يا سيدى الملك جيؤرجيوس المسيح يفرح معك فى أورشليم السمائية</td>
        </tr>
        <tr id="table_36_row_60">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O martyr, Hail to the courageous hero,
                Hail to the struggle-mantled, George my lord and prince.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ̀ⲛⲅⲉⲛⲛⲉⲟⲥ :
                ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲡⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد سيدى الملك جيؤرجيوس.</td>
        </tr>
        <tr id="table_36_row_61">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O prize-bearer
                and martyr, George my lord and prince, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀  Ⲡϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ :  ̀ⲱ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲏⲣⲟⲥ : Ⲡⲁ⳪ ̀ⲡⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا. أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_62">
            <td class="coptic" style="border-right: 1px solid black;">Philopateer Mercurius, the strong one of Christ,
                put on the helmet, and the whole armor of faith.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ :ⲡⲓⲣⲉⲙⲛϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ: ⲁϥϯϩⲓⲱⲧϥ
                ⲛϯⲡⲁⲛⲟⲡⲗⲓⲁ: ⲛⲉⲙ ⲡⲓϧⲱⲕ ⲧⲏⲣϥ ⲛⲧⲉ ⲡⲓⲛⲁϩϯ.</td>
            <td class="arabic">محب الآب مرقوريوس: القوي بالمسيح: لبس الخوذة: وكل سلاح الإيمان.</td>
        </tr>
        <tr id="table_36_row_63">
            <td class="coptic" style="border-right: 1px solid black;">And he took in his hand, the two-edged sword,
                which the angel of the Lord, placed in his right hand.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁϥϭⲓ ϧⲉⲛ ⲧⲉϥϫⲓϫ: ⲛϯⲥⲏϥⲓ ⲛⲣⲟ Ⲃ: ⲏⲏⲉⲧⲁ
                ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲧⲉ Ⲡⲟⲥ ⲧⲁϫⲣⲟⲥ: ϧⲉⲛ ⲧⲉϥϫⲓϫ ⲛⲡⲟⲩⲓⲛⲁⲙ.</td>
            <td class="arabic">وأخذ بيده السيف: ذا الحدين: الذي ثبته ملاك الرب: في يده اليمنى.</td>
        </tr>
        <tr id="table_36_row_64">
            <td class="coptic" style="border-right: 1px solid black;">He went to the war, with the strength of Christ,
                he smote the barbarians, with great wounds.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϣⲉⲛⲁϥ ⲉⲡⲓⲡⲟⲗⲉⲙⲟⲥ: ϧⲉⲛ ϯϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ: ⲁϥϣⲁⲣⲓ
                ⲉⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛⲉⲣϧⲟⲧ.</td>
            <td class="arabic">مضى إلى الحرب: بقوة المسيح: وقتل البربر: بجراحات عظيمة.</td>
        </tr>
        <tr id="table_36_row_65">
            <td class="coptic" style="border-right: 1px solid black;">He refused the earthly, and sought after the
                heavenly, and he fought in the stadium, of martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲉⲣⲛⲩⲙⲫⲓⲛ ⲉⲃⲟⲗ ϩⲁ ⲛⲁ ⲡⲕⲁϩⲓ: ⲟⲩⲟϩ ⲁϥⲕⲱϯ ⲉⲛⲁ
                ⲛⲓⲫⲏⲟⲩⲓ: ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓⲥⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲏⲣⲟⲥ.</td>
            <td class="arabic">تيقظ عن الأرضيات: وطلب السمائيات: وتشجع في: ميدان الشهادة.</td>
        </tr>
        <tr id="table_36_row_66">
            <td class="coptic" style="border-right: 1px solid black;">He embarrassed Decius, the impious emperor, with
                his great patience, through the pain of the sufferings.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϯⲓϣⲓⲡⲓ ⲛⲆⲉⲕⲓⲟⲥ: ⲡⲓⲟⲩⲣⲟ ⲛⲁⲥⲉⲃⲏⲥ: ϩⲓⲧⲉⲛ ⲧⲉϥⲛⲓϣϯ
                ⲛϩⲩⲡⲟⲙⲟⲛⲏ: ⲛⲉⲛ ⲡϧⲓⲥⲓ ⲛⲧⲉ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ.</td>
            <td class="arabic">أفضح داكيوس: الملك المنافق: بصبره العظيم: وتعب العذابات.</td>
        </tr>
        <tr id="table_36_row_67">
            <td class="coptic" style="border-right: 1px solid black;">With this he wore the unfading crown, of
                martyrdom, he celebrated with all the saints, in the land of the living.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ⲛⲁⲓ ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙⲡⲓⲭⲗⲟⲙ ⲛⲁⲧⲗⲱⲙ: ⲛⲧⲉ
                ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁϥⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏⲉⲏⲩ ⲧⲏⲡⲟⲩ: ϧⲉⲛ ⲧⲭⲱⲡⲁ ⲛⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.</td>
            <td class="arabic">وبهذا لبس إكليل الشهادة: غير المضمحل: وعيَّد مع جميع القديسين: في كورة الأحياء.</td>
        </tr>
        <tr id="table_36_row_68">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O martyr: hail to the courageous hero:
                hail to the struggle-mantled: Philopateer Mercurius.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ ⲛⲅⲉⲛⲛⲉⲟⲥ :
                ⲭⲉⲣⲉ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد: السلام للشجاع البطل: السلام للمجاهد: محب الآب مرقوريوس.</td>
        </tr>
        <tr id="table_36_row_69">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf: O struggle mantled
                martyr: Philopateer Mercurius: that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا: أيها الشهيد المجاهد: محب الآب مرقوريوس: ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_70">
            <td class="arabic" style="border-right: 1px solid black;">إذا ربح الإنسان العالم كله وخسر نفسه فما هى هذه
                الحياة الباطلة.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϣⲱⲡ ⲟⲩⲛ ̀ⲛⲧⲉ ⲡⲓⲣⲱⲙⲓ ϫⲉⲙϩⲏⲟⲩ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ
                ̀ⲛⲧⲉϥ̀ⲟⲥⲓ ̀ⲛⲧⲉϥⲯⲩⲭⲏ   ⲟⲩ ⲡⲉ ⲡⲁⲓ ⲱⲛ’’ϧ ⲛ̀ⲉⲫⲗⲏⲟⲩ.</td>
            <td class="coptic">What shall it profit a man, if he gains the whole world, and loses his soul, this would
                be the life of vanity.</td>
        </tr>
        <tr id="table_36_row_71">
            <td class="arabic" style="border-right: 1px solid black;">الفديس آبا مينا سمع الصوت الإلهى وترك عنه العالم
                كله ومجده الفاسد.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ ⲁϥⲥⲱⲧⲉⲙ ̀ⲛⲥⲁ ϯ̀ⲥⲙⲏ̀ⲛⲛⲟⲩϯ ⲁϥⲭⲱ
                ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ̀ⲛⲥⲱϥ   ⲛⲉⲙ ⲡⲉϥⲱⲟⲩ ⲉⲑⲛⲁⲧⲁⲕⲟ.</td>
            <td class="coptic">The saint Abba Mena, heard the Divine voice, and has forsaken the whole world, and its
                corrupt glory.</td>
        </tr>
        <tr id="table_36_row_72">
            <td class="arabic" style="border-right: 1px solid black;">وبذل نفسه للموت وجسده للنار وقبل عذابات عظيمة لأجل
                إبن الله الحى.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϯ ̀ⲛⲧⲉϥⲯⲏⲭⲏ ̀ⲉ̀ⲫⲙⲟⲩ : ⲛⲉⲙ ⲡⲉϥⲥⲱⲙⲁ ̀ⲉⲡⲓ̀ⲭⲣⲱⲙ:
                ⲁϥϣⲉⲡ ϩⲁⲛⲛⲓϣϯ ̀ⲙⲃⲁⲥⲁⲛⲟⲥ ⲉⲑⲃⲉ ̀ⲡϣⲏⲣⲓ ̀ⲙⲪϯ ⲉⲧⲟⲛϧ.</td>
            <td class="coptic">He gave his soul unto death, and his flesh to the fire, and received great sufferings,
                for the Son of the Living God.</td>
        </tr>
        <tr id="table_36_row_73">
            <td class="arabic" style="border-right: 1px solid black;">فلهذا رفعه مخلصنا إلى ملكوته وأعطاه الحياة التى لم
                تراها عين.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲠⲉⲛⲥⲱⲧⲏⲣ  ⲟⲗϥ ⲉϧⲟⲩⲛ ̀ⲉⲧⲉϥ ⲙⲉⲧⲟⲩⲣⲟ ⲁϥϯ
                ⲛⲁϥ ̀ⲛⲛⲓⲁⲅⲁⲑⲟⲛ   ⲛⲏⲉⲧⲉ ̀ⲙⲡⲉⲃⲁⲗ ⲛⲁⲩ ⲉⲣⲱⲟⲩ.</td>
            <td class="coptic">Therefore our Savoir, lifted him to His kingdom, and granted him the good things, which
                an eye has not seen.</td>
        </tr>
        <tr id="table_36_row_74">
            <td class="arabic" style="border-right: 1px solid black;">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام
                للابس الجهاد آبا مينا البياضي.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ̀ⲛⲅⲉⲛⲛⲉⲟⲥ :
                ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ̀ⲛⲧⲉ ⲛⲓⲫⲁⲓⲁⲧ.</td>
            <td class="coptic">Hail to you O martyr, Hail to the courageous hero, Hail to the struggle-mantled, the
                saint Abba Mena.</td>
        </tr>
        <tr id="table_36_row_75">
            <td class="arabic" style="border-right: 1px solid black;">أطلب من الرب عنا أيها الشهيد المجاهد آبا مينا
                البياضى ليغفر لنا خطايانا.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ⳪ ̀ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ ⲱ ⲡⲓⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙ⳥ ⲡⲓⲁⲅⲓⲟⲥ
                ⲁⲡⲁ Ⲙⲏⲛⲁ   ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="coptic">Pray to the Lord on our behalf: O struggle-mantled martyr, the saint Abba Mena, that He
                may forgive us our sins.</td>
        </tr>
        <tr id="table_36_row_76">
            <td class="coptic" style="border-right: 1px solid black;">Take out from your hearts, the thoughts of evil,
                and the pretentious images, that darken the mind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲃⲱⲗ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ̀ⲛⲛⲓⲙⲟⲕⲙⲉⲕ ̀ⲛⲧⲉ ϯⲭⲁⲕⲓ̀ⲁ:
                ⲛⲉⲙ ⲛⲓⲙⲉⲩ̀ⲓ ⲉⲧϣⲉⲃϣⲱⲃ: ⲉⲧ̀ⲓⲣⲓ ̀ⲙⲡⲓⲛⲟⲩⲥ ̀ⲛⲭⲁⲕⲓ.</td>
            <td class="arabic">انزعوا من قلوبكم افكار الشر و الظنون الخداعة التى تظلم العقل.</td>
        </tr>
        <tr id="table_36_row_77">
            <td class="coptic" style="border-right: 1px solid black;">Comprehend with thought, of the great miracles, of
                our blessed father, my great lord Abba Antony.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓⲛⲟⲓⲛ ϧⲉⲛ ⲟⲩϯ̀ϩⲑⲏϥ: ̀ⲛⲛⲓⲕⲁⲑⲁⲣⲧⲱⲙⲁ ⲉⲧϭⲟⲥⲓ: ̀ⲛⲧⲉ
                ⲡⲉⲛⲙⲁⲕⲁⲣⲓⲟⲥ ̀ⲛⲓⲱⲧ: ⲡⲁ⳪ ⲡⲓⲛⲓϣϯ Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ.</td>
            <td class="arabic">تفهموا بتأمل الى المعجزات العالية التي لأبينا الطوباوى سيدى العظيم انبا انطونيوس</td>
        </tr>
        <tr id="table_36_row_78">
            <td class="coptic" style="border-right: 1px solid black;">This is he who became our guide, and harbor for
                salvation, he invited us with joy, to the eternal life.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲓ ̀ⲉⲧⲁϥϣⲱⲡⲓ ⲛⲁⲛ ̀ⲛϭⲁⲩⲙⲱⲓⲧ: ̀ⲛⲗⲩⲙⲏⲛ ̀ⲛⲧⲉ
                ⲡⲓⲟⲩϫⲁⲓ: ⲁϥⲑⲱϩⲉⲙ ̀ⲙⲙⲟⲛ ϧⲉⲛ ⲟⲩ̀ⲉⲣⲟⲩⲱⲧ: ̀ⲉϧⲟⲩⲛ ̀ⲉⲡⲓⲱⲛϧ ̀ⲛ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">هذا الذى صار لنا مرشداً وميناء خلاص ودعانا بفرح الي الحياة الابدية.</td>
        </tr>
        <tr id="table_36_row_79">
            <td class="coptic" style="border-right: 1px solid black;">The incense of his virtues, delighted our souls,
                like the blossomed aroma, in the Paradise.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲓ̀ⲥⲑⲟⲓⲛⲟϥⲓ ̀ⲛⲧⲉ ⲛⲉϥⲁⲣⲉⲧⲏ: ϯ ̀ⲙ̀ⲡⲟⲩⲛⲟϥ ̀ⲛⲛⲉⲛⲯⲩⲭⲏ:
                ̀ⲙ̀ⲫⲣⲏϯ ̀ⲙⲡⲓⲁⲣⲱⲙⲁⲧⲁ: ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
            <td class="arabic">بخور فضائله اعطة فرح لنفوسنا مثل العنبر المزهر فى الفردوس.</td>
        </tr>
        <tr id="table_36_row_80">
            <td class="coptic" style="border-right: 1px solid black;">Let us truly be confirmed, in the upright faith,
                of the great Antony, proclaiming and saying.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲉⲧⲥⲟⲩⲧⲱⲛ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ:
                ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲉⲛⲱϣ ̀ⲉⲃⲟⲗ ̀ⲉⲛϫⲱ ̀ⲙⲙⲟⲥ.</td>
            <td class="arabic">فلنثبت بالحقيقة فى الايمان المستقيم الذى للعظيم انطونيوسصارخين قائلين:</td>
        </tr>
        <tr id="table_36_row_81">
            <td class="coptic" style="border-right: 1px solid black;">“I sought and I found, I asked and I was given, I
                knocked and I believed, that it will be opened to me.”</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲓⲕⲱϯ ⲟⲩⲟϩ ⲁⲓϫⲓⲙⲓ: ⲁⲓ̀ⲉⲣⲉⲧⲓⲛ ⲟⲩⲟϩ ⲁⲓϭⲓ: ⲁⲓⲕⲱⲗϩ
                ⲟⲩⲟϩ ϯⲛⲁϩϯ: ϫⲉ ⲥⲉⲛⲁ̀ⲁⲟⲩⲱⲛ ⲛⲏⲓ.</td>
            <td class="arabic">طلبت فوجدت. سألت فأخذت. قرعت و أؤمن انه سيفتح لى.</td>
        </tr>
        <tr id="table_36_row_82">
            <td class="coptic" style="border-right: 1px solid black;">Hail to our father Antony, the light of
                monasticism, hail to our father Abba Paul, the beloved of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲡⲓϧⲏⲃⲥ ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ:
                ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبينا انطونيوس مصباح الرهبنة السلام لأبينا انبا بولا حبيب المسيح.</td>
        </tr>
        <tr id="table_36_row_83">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my masters and
                fathers who loved their children, Abba Antony and Abba Paul, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀ⲡ̅ϭ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲱ ⲛⲁ⳪ ̀ⲛⲓⲟϯ
                ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلبا من الرب عنا يل سيدى الأبوين محبي أولادهما انبا انطونيوس و انبا بولا ليغفر...</td>
        </tr>
        <tr id="table_36_row_84">
            <td class="coptic" style="border-right: 1px solid black;">O you who are strong in managing the ship, O you
                the distinguished fighter, who is victorious in the wars, the luminous lamp.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲕⲩⲃⲉⲣⲛⲏⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲡⲓⲣⲉϥⲙⲓϣⲓ ̀ⲛⲕⲁⲗⲱⲥ:
                ⲡⲓⲣⲉϥϭⲣⲟ ϧⲉⲛ ⲛⲓⲃⲱⲧⲥ: ⲡⲓϧⲏⲃⲥ ⲉⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">أيها المدبر القوى لدفة السفينة: أيها المقاتل البارع: أيها الظافر فى المعارك: أيها المصباح
                المنير.</td>
        </tr>
        <tr id="table_36_row_85">
            <td class="coptic" style="border-right: 1px solid black;">The leader of Orthodoxy, is Athanasius the
                apostolic, the instructor of the eloquent sheep, That is for Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲕⲏⲣⲩⲝ ̀ⲛⲧⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: ⲡⲉ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ
                ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲣⲉϥϯ̀ⲥⲃⲱ ̀ⲛⲧⲉ ⲡⲓⲟϩⲓ: ̀ⲛⲗⲟⲅⲓⲕⲟⲛ ̀ⲛⲧⲉ ⲡⲓⲬⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">رائد الارثوذكسية: هو أثناسيوس الرسولى: و معلم القطيع الناطق: الذى للمسيح.</td>
        </tr>
        <tr id="table_36_row_86">
            <td class="coptic" style="border-right: 1px solid black;">Your truthful teachings, pierced the hearts of the
                heretics, like a double-edged sword, by the power of the Trinity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ ⲛⲉⲕⲇⲟⲅⲙⲁ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲙⲓϣⲓ ̀ⲙ̀ⲡϩⲏⲧ ̀ⲛⲛⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ:
                ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲥⲏϥⲓ ̀ⲛⲣⲟ ̅ⲃ: ϩⲓⲧⲉⲛ ̀ⲧϫⲟⲙ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ.</td>
            <td class="arabic">تعاليمك القويمة نفذت فى قلوب الهراطقة مثل سيف ذى حدين بقوة الثالوث.</td>
        </tr>
        <tr id="table_36_row_87">
            <td class="coptic" style="border-right: 1px solid black;">Every knee worshiped the Lord, and every tongue
                praised Him, The Glory of God was announced, and filled the entire universe.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲕⲱⲗϫ ̀ⲙⲡ̅ϭ̅ⲥ: ⲁ ⲗⲁⲥ ⲛⲓⲃⲉⲛ ̀ⲥⲙⲟⲩ
                ̀ⲉⲣⲟϥ: ⲁ ̀ⲡⲱⲟⲩ ⲟⲩⲱϣⲥ ̀ⲉⲃⲟⲗ: ⲁϥⲙⲟϩ ̀ⲙ̀ⲡϩⲟ ̀ⲛϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">كل ركبة جثت للرب: و كل لسان سبحه: و مجد الله ذاع: و ملأ وجه المسكونة.</td>
        </tr>
        <tr id="table_36_row_88">
            <td class="coptic" style="border-right: 1px solid black;">We therefore magnify You, along with David the
                prophet, For You are the priest forever, on the order of Melchizedek.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ
                ̀ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉⲛⲉϩ: ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ ̀ⲙⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">إننا هكذا نعظمك: مع المرتل داود:فإنك انت الكاهن الى الابد: على طقس ملكيصادق</td>
        </tr>
        <tr id="table_36_row_89">
            <td class="coptic" style="border-right: 1px solid black;">Hail to the great patriarch, our father the saint
                abba Athanasius, whose holy teachings, enlightened our minds.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲓⲛⲓϣϯ ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲉⲛⲓⲱⲧ ̀ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ
                Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ: ⲫⲏ ⲉⲧⲁ ⲛⲉϥ̀ⲥⲃⲱⲟⲩ̀ⲓ: ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲙⲡⲉⲛⲛⲟⲥ.</td>
            <td class="arabic">السلام للبطريرك العظيم: ابينا القديس الانبا اثناسيوس:يا من تعاليمه المقدسة انارت عقولنا.
            </td>
        </tr>
        <tr id="table_36_row_90">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you indeed, Our saintly father the
                patriarch, Saint Athanasius the apostolic, beloved of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">مبارك انت بالحقيقة: ايها الاب القديس البطريرك: انبا اثناسيوس الرسولى: حبيب المسيح</td>
        </tr>
        <tr id="table_36_row_91">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, our saintly father
                the patriarch, Saint Athanasius the apostolic, they He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀ⲡ̅ϭ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲕⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلب من الرب عنا: ايها الاب القديس البطريرك: انبا أثناسيوس الرسولى: ليغفر لنا خطايانا.
            </td>
        </tr>
        <tr id="table_36_row_92">
            <td class="coptic" style="border-right: 1px solid black;">Watch over us, from on high where you dwell, O
                Lady of us all, the Ever-virgin theotokos.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲱⲡⲓ ̀ⲛⲑⲟ ̀ⲉⲣⲉⲥⲟⲙⲥ ̀ⲉϫⲱⲛ : ϧⲉⲛ ⲛⲓⲙⲁ ⲉⲧϭⲟⲥⲓ
                ̀ⲉⲧⲉⲣⲉⲭⲏ ̀ⲛϧⲏⲧⲟⲩ : ̀ⲱ ⲧⲉⲛϭⲟⲓⲥ ̀ⲛⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲧⲟⲓ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">كونى أنت ناظرة علينا فى المواضع العالية التى أنت كائنة فيها. يا سيدتنا كلنا والدة الإله
                العذراء كل حين.</td>
        </tr>
        <tr id="table_36_row_93">
            <td class="coptic" style="border-right: 1px solid black;">Ask of Him whom you have born, our Good Savior, to
                take away our troubles, and grant us His peace.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁϯϩⲟ ̀ⲙⲫⲏ̀ⲉⲧⲁⲣⲉⲙⲁⲥϥ : Ⲡⲉⲛⲥⲱⲧⲏⲣ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ :
                ̀ⲛⲧⲉϥ̀ⲱⲗⲓ ̀ⲛⲛⲁⲓϧⲓⲥⲓ ̀ⲉⲃⲟⲗ ϩⲁⲣⲟⲛ : ̀ⲛⲧⲉϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ̀ⲛⲧⲉϥϩⲓⲣⲏⲛⲏ.</td>
            <td class="arabic">إسألى الذى ولدته مخلصنا الصالح أن يرفع عنا هذه الأتعاب ويقرر لنا سلامه.</td>
        </tr>
        <tr id="table_36_row_94">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Virgin, the right and true Queen,
                Hail to the pride of our race, who bore to us Emmanuel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲱ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :  ϯⲟⲩⲣⲱ  ̀ⲙⲙⲏⲓ   ̀ⲛ̀ⲁⲗⲏⲑⲓⲛⲏ
                : ⲭⲉⲣⲉ ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ̀ⲁⲣⲉ̀ϫⲫⲟ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.
            </td>
        </tr>
        <tr id="table_36_row_95">
            <td class="coptic" style="border-right: 1px solid black;">We ask you remember us, O our faithful advocate,
                before our Lord Jesus Christ, that he may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲁⲣⲓⲡⲉⲛⲙⲉⲩ̀ⲓ : ̀ⲱ ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ :
                ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_36_row_96">
            <td class="coptic" style="border-right: 1px solid black;">The sick heal them, those who have slept O Lord
                repose them, and all of our brethren in distress, help us my Lord and all of them.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ : ⲛⲏ̀ⲉⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡϭⲟⲓⲥ ⲙⲁ̀ⲙⲧⲟⲛ
                ⲛⲱⲟⲩ : ⲛⲉⲛ̀ⲥⲛⲏⲟⲩ ⲉⲧⲭⲏ ϧⲉⲛ ϩⲟϫϩⲉϫ ⲛⲓⲃⲉⲛ : Ⲡⲁϭⲟⲓⲥ ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲛ ⲛⲉⲙⲱⲟⲩ.</td>
            <td class="arabic">المرضى اشفهم الذين رقدوا يارب نيحهم . وإخوتنا الذين فى كل شدة ياربى أعنا وإياهم.</td>
        </tr>
        <tr id="table_36_row_97">
            <td class="coptic" style="border-right: 1px solid black;">May God bless us, and let us bless His Holy Name,
                and may His praise, be always on our lips.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟⲛ ̀ⲛϫⲉ Ⲫⲛⲟⲩϯ: ⲧⲉⲛⲛⲁ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉϥⲣⲁⲛ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ̀ⲉⲣⲉ ⲡⲉϥ̀ⲥⲙⲟⲩ : ⲛⲁϣⲱⲡⲓ ⲉϥⲙⲏⲛ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲣⲱⲛ</td>
            <td class="arabic">يباركنا الله ولنبارك إسمه القدوس فى كل حين تسبحته دائمة فى أفواهنا.</td>
        </tr>
        <tr id="table_36_row_98">
            <td class="coptic" style="border-right: 1px solid black;">Blessed is the Father and the Son and the Holy
                Spirit, the perfect Trinity: we worship Him and glorify Him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲛϫⲉ Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ
                ⲉⲑⲟⲩⲁⲃ: ϯ̀ⲧⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ̀ⲉⲃⲟⲗ: ⲧⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲙⲟⲥ ⲧⲉⲛϯ̀ⲱⲟⲩ ⲛⲁⲥ.</td>
            <td class="arabic">مبارك الآب والإبن والروح القدس الثالوث الكامل نسجد له ونمجده.</td>
        </tr>
        <tr id="table_36_row_99">
            <td class="coptic" style="border-right: 1px solid black;">Amen. Alleluia. Lord have mercy. Lord have mercy.
                Lord have mercy.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.
                Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم.</td>
        </tr>
        <tr id="table_36_row_100">
            <td class="coptic" style="border-right: 1px solid black;">Praise the Lord from the heavens: Alleluia. Praise
                Him in the heights.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩ̀ⲓ Ⲁ̅ⲗ̅ : ̀ⲥⲙⲟⲩ
                ̀ⲉⲣⲟϥ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">سبحوا الرب من السموات الليلويا. سبحوه فى الأعالى.</td>
        </tr>
        <tr id="table_36_row_101">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, all His angels: Alleluia. Praise Him,
                all His hosts.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ⲛⲉϥⲁⲅⲅⲉⲗⲟⲥ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅: ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ
                ⲛⲉϥⲇⲩⲛⲁⲙⲓⲥ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">سبحوه ياجميع ملائكته الليلويا. سبحوه يا جميع جنوده .</td>
        </tr>
        <tr id="table_36_row_102">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, sun and moon: Alleluia. Praise Him all
                you stars of light.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ Ⲁ̅ⲗ̅ : ̀ⲥⲙⲟⲩ ⲉⲣⲟϥ
                ⲛⲓⲥⲓⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">سبحيه ايتها الشمس والقمر الليـــلويا. سبحيه ياجميع كواكب النور.</td>
        </tr>
        <tr id="table_36_row_103">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him you heavens of heavens: Alleluia. And
                you waters above the heavens.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ⲛⲓⲫⲏⲟⲩ̀ⲓ ̀ⲛⲧⲉ ⲛⲓⲫⲏⲟⲩ̀ⲓ Ⲁ̅ⲗ̅ : ⲛⲉⲙ
                ⲛⲓⲕⲉⲙⲱⲟⲩ ⲉⲧⲥⲁ ̀ⲡϣⲱⲓ ̀ⲛⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">سبحيه يا سماء السموات الليلويا وياايتها المياه التى فوق السموات.</td>
        </tr>
        <tr id="table_36_row_104">
            <td class="coptic" style="border-right: 1px solid black;">Let them praise the Name of the Lord: Alleluia.
                For He commanded and they were created.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲟⲩ̀ⲥⲙⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲉ̀ⲫⲣⲁⲛ ̀ⲙⲠϭⲟⲓⲥ Ⲁ̅ⲗ̅ : ϫⲉ ̀ⲛⲑⲟϥ
                ⲁϥϫⲟⲥ ⲟⲩⲟϩ ⲁⲩϣⲱⲡⲓ.</td>
            <td class="arabic">لتسبح جميعها لاسم الرب الليلويا. لانه قــــال فكانت.</td>
        </tr>
        <tr id="table_36_row_105">
            <td class="coptic" style="border-right: 1px solid black;">He has ordered: And they were created, Alleluia.
                He has established them forever and ever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟϥ ⲁϥϩⲟⲛϩⲉⲛ ⲟⲩⲟϩ ⲁⲩⲥⲱⲛⲧ Ⲁ̅ⲗ̅: ⲁϥⲧⲁϩⲱⲟⲩ ̀ⲉⲣⲁⲧⲟⲩ
                ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ̀ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲡⲓ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">وأمر فخلقت الليلويا. اقامها إلى الأبد والى ابـــد الابد.</td>
        </tr>
        <tr id="table_36_row_106">
            <td class="coptic" style="border-right: 1px solid black;">He has made a decree: which shall not pass away,
                Alleluia. Praise the Lord from the earth.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁϥⲭⲱ ̀ⲛⲟⲩϩⲱⲛ ⲟⲩⲟϩ ̀ⲛⲛⲉϥⲥⲓⲛⲓ Ⲁ̅ⲗ̅ : ̀ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ
                ̀ⲉⲃⲟⲗϧⲉⲛ ̀ⲡⲭⲁϩⲓ.</td>
            <td class="arabic">وضع لها امرا فلن تتجاوزه الليلويا. سبحى الرب من الارض</td>
        </tr>
        <tr id="table_36_row_107">
            <td class="coptic" style="border-right: 1px solid black;">You great sea creatures and all the depths:
                Alleluia Fire and hail, snow and clouds, and stormy wind, fulfilling His word.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓ̀ⲇⲣⲁⲕⲱⲛ ⲛⲉⲙ ⲛⲓⲛⲟⲩⲛ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅: ⲟⲩ̀ⲭⲣⲱⲙ ⲟⲩⲁⲗ
                ⲟⲩⲭⲓⲱⲛ ⲟⲩ̀ⲭⲣⲩⲥⲧⲁⲗⲗⲟⲥ ⲟⲩ̀ⲡⲛⲉⲩⲙⲁ ̀ⲛⲥⲁⲣⲁⲑⲏⲟⲩ ⲛⲏⲉⲧ̀ⲓⲣⲓ ̀ⲙⲡⲉϥⲥⲁϫⲓ.</td>
            <td class="arabic">ايتها التنانين وجميع الاعماق الليلويا النار والبرد والثلج والجليد والريح العاصفة الصانعة
                كلمته .</td>
        </tr>
        <tr id="table_36_row_108">
            <td class="coptic" style="border-right: 1px solid black;">Mountains and all hills: Alleluia. Fruitful trees
                and all cedars.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲧⲱⲟⲩ ⲉⲧϭⲟⲥⲓ ⲛⲉⲙ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟⲩ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅: ⲛⲓ̀ϣϣⲏⲛ
                ̀ⲙϥⲁⲓⲟⲩⲧⲁϩ ⲛⲉⲙ ⲛⲓϣⲉⲛⲥⲓϥⲓ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">الجبال العالية وجميع الآكام الليلويا. الاشجار المثمرة وكل الأرز.</td>
        </tr>
        <tr id="table_36_row_109">
            <td class="coptic" style="border-right: 1px solid black;">Beasts and all cattle: Alleluia. Creeping things
                and flying birds.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲑⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲉⲃⲛⲱⲟⲩ̀ⲓ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅: ⲛⲓϭⲁⲧϥⲓ ⲛⲉⲙ
                ⲛⲓϩⲁⲗⲁϯ ⲉⲧⲟⲓ ̀ⲛⲧⲉⲛϩ.</td>
            <td class="arabic">الوحوش وكل البهائم الليلويا. الهوام وكل الطيور ذات الاجنحة.</td>
        </tr>
        <tr id="table_36_row_110">
            <td class="coptic" style="border-right: 1px solid black;">Kings of the earth and all people: Alleluia.
                Princes and all judges of the earth.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲟⲩⲣⲱⲟⲩ ̀ⲛⲧⲉ ̀ⲡⲕⲁϩⲓ ⲛⲉⲙ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅ :
                ⲛⲓⲁⲣⲭⲱⲛ ⲛⲉⲙ ⲛⲓⲣⲉϥϯϩⲁⲡ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ ̀ⲡⲕⲁϩⲓ.</td>
            <td class="arabic">ملوك الارض وكل الشعوب الليلويا. الرؤساء وكل حكام الارض.</td>
        </tr>
        <tr id="table_36_row_111">
            <td class="coptic" style="border-right: 1px solid black;">Both young men and maidens: Alleluia. Old men and
                children.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲁⲛϧⲉⲗϣⲓⲣⲓ ⲛⲉⲙ ϩⲁⲛⲡⲁⲣⲑⲉⲛⲟⲥ Ⲁ̅ⲗ̅: ϩⲁⲛϧⲉⲗⲗⲟⲓ ⲛⲉⲙ
                ϩⲁⲛ̀ⲁⲗⲱⲟⲩ̀ⲓ.</td>
            <td class="arabic">الشبان والعذارى الليلويا. الشيوخ والصبيان.</td>
        </tr>
        <tr id="table_36_row_112">
            <td class="coptic" style="border-right: 1px solid black;">Let them praise the Name of the Lord: Alleluia.
                For His Name alone is exalted.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲟⲩ̀ⲥⲙⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲉ̀ⲫⲣⲁⲛ ̀ⲙⲠϭⲟⲓⲥ Ⲁ̅ⲗ̅ : ϫⲉ ⲁϥϭⲓⲥⲓ
                ̀ⲛϫⲉ ⲡⲉϥⲣⲁⲛ ̀ⲙⲙⲁⲩⲁⲧϥ.</td>
            <td class="arabic">فليسبحوا جميعاً اسم الرب الليلويا. لانه قد تعالى اسمه وحده.</td>
        </tr>
        <tr id="table_36_row_113">
            <td class="coptic" style="border-right: 1px solid black;">His glory is above the earth and heaven: Alleluia.
                And He has exalted the horn of His people.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉϥⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ ϣⲟⲡ ϩⲓϫⲉⲛ ̀ⲡⲕⲁϩⲓ ⲛⲉⲙ ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ
                ̀ⲧⲫⲉ Ⲁ̅ⲗ̅ : ̀ϥⲛⲁϭⲓⲥⲓ ̀ⲙ̀ⲡⲧⲁⲡ ̀ⲛⲧⲉ ⲡⲉϥⲗⲁⲟⲥ.</td>
            <td class="arabic">شكره كائن على الارض وفى السماء الليلويا. ويرفع قرن شعبه.</td>
        </tr>
        <tr id="table_36_row_114">
            <td class="coptic" style="border-right: 1px solid black;">The praise of all His saints: Alleluia. The
                children of Israel, a people near unto Him.
                Alleluia,Alleluia,Alleluia</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩ̀ⲥⲙⲟⲩ ̀ⲛⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲁϥ Ⲁ̅ⲗ̅ : ⲛⲉⲛϣⲏⲣⲓ
                ̀ⲙⲠⲓⲥⲣⲁⲏⲗ ⲡⲓⲗⲁⲟⲥ ⲉⲧϧⲉⲛⲧ ̀ⲉⲣⲟϥ. Ⲁ̅ⲗ̅ Ⲁ̅ⲗ̅ Ⲁ̅ⲗ̅</td>
            <td class="arabic">سبحاً لجميع قديسيه الليلويا. بنى اسرائيل الشعب القريب اليه. الليلويا الليلويا الليلويا.
            </td>
        </tr>
        <tr id="table_36_row_115">
            <td class="coptic" style="border-right: 1px solid black;">Sing to the Lord a new song: Alleluia. And His
                praise in the congregation of the saints.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲅⲱ ̀ⲙⲠϭⲟⲓⲥ ϧⲉⲛ ⲟⲩϫⲱ ̀ⲙⲃⲉⲣⲓ Ⲁ̅ⲗ̅ : ϫⲉ ̀ⲁⲣⲉ ⲡⲉϥ̀ⲥⲙⲟⲩ
                ϧⲉⲛ ⲧⲉⲕ̀ⲕⲗⲏⲥⲓ̀ⲁ ̀ⲛⲧⲉⲛⲏⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">انشدوا للرب نشيداً جديداً الليلويا. لان تسبحته فى بيعة القديسين.</td>
        </tr>
        <tr id="table_36_row_116">
            <td class="coptic" style="border-right: 1px solid black;">Let Israel rejoice in their maker: Alleluia. Let
                the children of Zion be joyful in their King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉϥⲟⲩⲛⲟϥ ̀ⲛϫⲉ Ⲡⲓⲥⲣⲁⲏⲗ ⲉϫⲉⲛ ⲫⲏ̀ⲉⲧⲁϥⲑⲁⲙⲓⲟϥ Ⲁ̅ⲗ̅:
                ⲛⲉⲛϣⲏⲣⲓ ̀ⲛⲤⲓⲱⲛ ⲙⲁⲣⲟⲩⲑⲉⲗⲏⲗ ̀ⲉϫⲉⲛ ⲡⲟⲩⲟⲩⲣⲟ.</td>
            <td class="arabic">فليفرح إسرائيل بخالقه الليلويا. وبنوا صهيون فليتهللوا بملكهم.</td>
        </tr>
        <tr id="table_36_row_117">
            <td class="coptic" style="border-right: 1px solid black;">Let them praise His Name in the chorus: Alleluia.
                Let them sing praises unto Him with timbrel and harp.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲟⲩ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ⲟⲩⲭⲟⲣⲟⲥ Ⲁ̅ⲗ̅: ϧⲉⲛ
                ⲟⲩⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ ⲙⲁⲣⲟⲩⲉⲣⲯⲁⲗⲓⲛ ̀ⲉⲣⲟϥ.</td>
            <td class="arabic">فليسبحوا اسمه القدوس بصف الليلويا. بدف ومزمار فليرتلوا له.</td>
        </tr>
        <tr id="table_36_row_118">
            <td class="coptic" style="border-right: 1px solid black;">For the Lord takes pleasure in His people:
                Alleluia. He will raise the meek with salvation.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ Ⲡϭⲟⲓⲥ ⲛⲁϯⲙⲁϯ ̀ⲉϫⲉⲛ ⲡⲉϥⲗⲁⲟⲥ Ⲁ̅ⲗ̅ : ̀ϥⲛⲁϭⲓⲥⲓ
                ̀ⲛⲛⲓⲣⲉⲙⲣⲁⲩϣ ϧⲉⲛ ⲟⲩⲟⲩϫⲁⲓ.</td>
            <td class="arabic">لان الرب يُسر بشعبه الليلويا. يعلى الودعاء بالخلاص.</td>
        </tr>
        <tr id="table_36_row_119">
            <td class="coptic" style="border-right: 1px solid black;">Let the saints be joyful in glory: Alleluia. Let
                them sing aloud on their beds.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩ̀ⲉϣⲟⲩϣⲟⲩ ̀ⲙⲙⲱⲟⲩ ̀ⲛϫⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ Ⲁ̅ⲗ̅:
                ⲉⲩ̀ⲉⲑⲉⲗⲏⲗ ̀ⲙⲙⲱⲟⲩ ϩⲓϫⲉⲛ ⲛⲟⲩⲙⲁ̀ⲛⲉⲛⲕⲟⲧ.</td>
            <td class="arabic">يفتخر القديسون بمجد الليلويا. ويتهللون على مضاجعهم.</td>
        </tr>
        <tr id="table_36_row_120">
            <td class="coptic" style="border-right: 1px solid black;">Let the high praises of God be in their mouth:
                Alleluia. And a two edged sword in their hand.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓϭⲓⲥⲓ ̀ⲛⲧⲉ Ⲫϯ ⲉⲧⲭⲏ ϧⲉⲛ ⲧⲟⲩ̀ϣⲃⲱⲃⲓ Ⲁ̅ⲗ̅: ϩⲁⲛⲥⲏϥⲓ
                ̀ⲛⲣⲟ ̀ⲥⲛⲁⲩ ⲉⲧⲭⲏ ϧⲉⲛ ⲛⲟⲩϫⲓϫ.</td>
            <td class="arabic">تعليات الله فى حناجرهم الليلويا. وسيوف ذات حدين فى أيديهم .</td>
        </tr>
        <tr id="table_36_row_121">
            <td class="coptic" style="border-right: 1px solid black;">To execute vengeance on the nations: Alleluia. And
                punishments on the people.</td>
            <td class="coptic" style="border-right: 1px solid black;">˙ Ⲉ̀ⲡϫⲓⲛ̀ⲓⲣⲓ ̀ⲛⲟⲩϭⲓ̀ⲙ̀ⲡϣⲓϣ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ Ⲁ̅ⲗ̅: ⲛⲉⲙ
                ϩⲁⲛⲥⲟϩⲓ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ.</td>
            <td class="arabic">ليصنعوا نقمة فى الامم الليلويا. وتوبيخات فى الشعوب.</td>
        </tr>
        <tr id="table_36_row_122">
            <td class="coptic" style="border-right: 1px solid black;">To bind their kings with chains: Alleluia. And
                their nobles with fetters of iron.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲉ̀ⲡϫⲓⲛⲥⲱⲛϩ ̀ⲛϩⲁⲛⲟⲩⲣⲱⲟⲩ ϧⲉⲛ ϩⲁⲛⲡⲉⲇⲏⲥ Ⲁ̅ⲗ̅: ⲛⲉⲙ
                ⲛⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ̀ⲛⲧⲱⲟⲩ ϧⲉⲛ ϩⲁⲛⲡⲉⲇⲏⲥ ̀ⲛϫⲓϫ ̀ⲙⲃⲉⲛⲓⲡⲓ.</td>
            <td class="arabic">ليوثقوا ملوكهم بقيود الليلويا. واشرافهم باغلال للايدى من حديد.</td>
        </tr>
        <tr id="table_36_row_123">
            <td class="coptic" style="border-right: 1px solid black;">To execute on them the written judgment: Alleluia.
                This honor have all His saints.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲉ̀ⲡϫⲓⲛ̀ⲓⲣⲓ ̀ⲛϧⲏⲧⲟⲩ ̀ⲛⲟⲩϩⲁⲡ ⲉϥ̀ⲥϧⲏⲟⲩⲧ ⲁˉⲗˉ :
                ⲡⲁⲓ̀ⲱⲟⲩ ⲫⲁⲓ ⲁϥϣⲟⲡ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲁϥ.</td>
            <td class="arabic">ليصنعوا بهم حكما مكتوباً الليلويا. هذا المجد كائن فى جميع قديسيه.</td>
        </tr>
        <tr id="table_36_row_124">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia, Alleluia, Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ̅ⲗ̅ ⲁ̅ⲗ̅ ⲁ̅ ⲗ̅ .</td>
            <td class="arabic">الليلويا الليلويا الليلويا.</td>
        </tr>
        <tr id="table_36_row_125">
            <td class="coptic" style="border-right: 1px solid black;">Praise God, in all his saints. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ ̀ⲉⲪⲛⲟⲩϯ ϧⲉⲛ ⲛⲏ̀ⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲁϥ.
                Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">سبحوا الله في جميع قديسيه</td>
        </tr>
        <tr id="table_36_row_126">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God is due glory and the Praise. Praise
                the Lord our God with a joyful psalm.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ̀ⲙⲡⲉⲛⲛⲟⲩϯ ̀ⲛϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲥⲙⲟⲩ. ̀Ⲥⲙⲟⲩ
                ̀ⲉⲠϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
        </tr>
        <tr id="table_36_row_127">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, in the firmament of his power.
                Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ̀ⲛⲧⲉ ⲧⲉϥϫⲟⲙ. Ⲁ̅ⲗ̅.</td>
            <td class="arabic">سبحوه في جلد قوته الليلويا.</td>
        </tr>
        <tr id="table_36_row_128">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ...</td>
            <td class="arabic">يليق ...</td>
        </tr>
        <tr id="table_36_row_129">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, for His mighty acts. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ̀ⲉ̀ϩⲣⲏⲓ ϩⲓϫⲉⲛ ⲧⲉϥⲙⲉⲧϫⲱⲣⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.
            </td>
            <td class="arabic">سبحوه على مقدرته الليلويا.</td>
        </tr>
        <tr id="table_36_row_130">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God is due glory and the Praise. Praise
                the Lord our God with a joyful psalm.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ̀ⲙⲡⲉⲛⲛⲟⲩϯ ̀ⲛϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲥⲙⲟⲩ.
                ̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
        </tr>
        <tr id="table_36_row_131">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, according to the multitudes of His
                greatness. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ⲕⲁⲧⲁ ̀ⲡⲁϣⲁⲓ ̀ⲛⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ.
                Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">سبحوه ككثرة عظمته الليلويا.</td>
        </tr>
        <tr id="table_36_row_132">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ...</td>
            <td class="arabic">يليق ...</td>
        </tr>
        <tr id="table_36_row_133">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, with the sound of the trumpet.
                Alleluia</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ⲟⲩ̀ⲥⲙⲏ ̀ⲛⲥⲁⲗⲡⲓⲅⲅⲟⲥ. ⲀⲖ.</td>
            <td class="arabic">سبحوه بصوت البوق الليلويا.</td>
        </tr>
        <tr id="table_36_row_134">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God is due glory and the Praise. Praise
                the Lord our God with a joyful psalm.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ̀ⲙⲡⲉⲛⲛⲟⲩϯ ̀ⲛϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲥⲙⲟⲩ.
                ̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
        </tr>
        <tr id="table_36_row_135">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, with psaltery and harp. Alleluia</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ⲟⲩⲯⲁⲗ ⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲩⲑⲁⲣⲁ. ⲀⲖ</td>
            <td class="arabic">سبحوه بمزمار وقيثارة الليلويا.</td>
        </tr>
        <tr id="table_36_row_136">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ...</td>
            <td class="arabic">يليق ...</td>
        </tr>
        <tr id="table_36_row_137">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, with timbrel and chorus. Alleluia.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ϩⲁⲛⲭⲟⲣⲟⲥ. ⲀⲖ.</td>
            <td class="arabic">سبحوه بدفوف وصفوف الليلويا.</td>
        </tr>
        <tr id="table_36_row_138">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God is due glory and the Praise. Praise
                the Lord our God with a joyful psalm.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ̀ⲙⲡⲉⲛⲛⲟⲩϯ ̀ⲛϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲥⲙⲟⲩ.
                ̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
        </tr>
        <tr id="table_36_row_139">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, with strings and organs. Alleluia.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲁⲡ ⲛⲉⲙ ⲟⲩⲟⲣⲅⲁⲛⲟⲛ. ⲀⲖ.</td>
            <td class="arabic">سبحوه بأوتار وأرغن الليلويا.</td>
        </tr>
        <tr id="table_36_row_140">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ...</td>
            <td class="arabic">يليق ...</td>
        </tr>
        <tr id="table_36_row_141">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, with pleasant sounding cymbals.
                Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ̀ⲉⲛⲉⲥⲉ ⲧⲟⲩ̀ⲥⲙⲏ.
                Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">سبحوه بصنوج حسنة الصوت الليلويا.</td>
        </tr>
        <tr id="table_36_row_142">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God is due glory and the Praise. Praise
                the Lord our God with a joyful psalm.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ̀ⲙⲡⲉⲛⲛⲟⲩϯ ̀ⲛϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲥⲙⲟⲩ.
                ̀ Ⲥⲙⲟⲩ ̀ⲉⲠϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
        </tr>
        <tr id="table_36_row_143">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him, upon the cymbals of joy. Alleluia.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙ ⲃⲁⲗⲟⲛ ̀ⲛⲧⲉ ⲟⲩ̀ⲉ̀ϣⲗⲏⲗⲟⲩ̀ⲓ. ⲀⲖ
            </td>
            <td class="arabic">سبحوه بصنوج التهليل الليلويا.</td>
        </tr>
        <tr id="table_36_row_144">
            <td class="coptic" style="border-right: 1px solid black;">Unto our God …</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥ̀ⲉⲣⲁⲛⲁϥ ...</td>
            <td class="arabic">يليق ...</td>
        </tr>
        <tr id="table_36_row_145">
            <td class="coptic" style="border-right: 1px solid black;">Let everything that has breath praise the name of
                the Lord our God. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲣⲟⲩ̀ⲥⲙⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲉ̀ϥⲣⲁⲛ ̀ⲙⲠϭⲟⲓⲥ
                Ⲡⲉⲛⲛⲟⲩϯ. Ⲁ̅ⲗ̅</td>
            <td class="arabic">كل نسمة فلتسبح اسم الرب الهنا الليلويا.</td>
        </tr>
        <tr id="table_36_row_146">
            <td class="coptic" style="border-right: 1px solid black;">Glory be to The Father, and The Son, and The Holy
                Spirit. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓ̀ⲱ ⲕⲉ Ⲁⲅⲓ̀ⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ. Ⲁ̅ⲗ̅ .</td>
            <td class="arabic">المجد للآب والأبن والروح القدس الليلويا .</td>
        </tr>
        <tr id="table_36_row_147">
            <td class="coptic" style="border-right: 1px solid black;">Now and forever and unto the ages of the ages
                Amen. Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ̀ⲓ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ
                ̀ⲁⲙⲏⲛ.  Ⲁ̅ⲗ̅ .</td>
            <td class="arabic">الآن وكل أوان وإلى دهر الداهرين آمين الليلويا.</td>
        </tr>
        <tr id="table_36_row_148">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia. Alleluia. Glory to You our God.
                Alleluia.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ̅̅ⲗ̅  Ⲁ̅ⲗ̅  Ⲇⲟⲝⲁ ⲥⲓ ̀ⲟ Ⲑⲉⲟⲥ ̀ⲏⲙⲱⲛ  Ⲁ̅ⲗ.</td>
            <td class="arabic">المجد لإلهنا الليلويا.</td>
        </tr>
        <tr id="table_36_row_149">
            <td class="coptic" style="border-right: 1px solid black;">Alleluia. Alleluia. Glory be to our God. Alleluia.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ̅̅ⲗ̅ Ⲁ̅̅ⲗ̅ Ⲡⲓ̀ⲱⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ Ⲁ̅ⲗ.</td>
            <td class="arabic">المجد لإلهنا الليلويا.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_37" data-title="Your Table Title Here"
        onclick="toggleTable('table_37', this)">+ Your Table Title Here</span>
    <table id="table_37" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_37_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I praise a virgin and bride
                With her help I speak
                And cry aloud saying
                Hail to you O Mary</td>
            <td class="arabic">امدح عذراء وبتولبمعونتها اتكلمواصيح بأعلى صوت واقولالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Gabriel announced to you
                The divine birth
                He spoke and preached in joy
                Hail to you O Mary</td>
            <td class="arabic">بشرك غبريالبالميلاد الأعظمبالبشرى سر وقالالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Come now everyone
                Today to approach
                And I will praise with you
                Hail to you O Mary</td>
            <td class="arabic">تعالوا باجمعكماليوم لنتقدمواصيح أنا معكمالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The great among nations
                Who’s dwelling in darkness
                The Lord’s light shined on them
                Hail to you O Mary</td>
            <td class="arabic">جليل الأمم الشعبالجالس فى الظلاماشرق عليه نور الربالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The Lord swore to David
                In truth and did not relent
                Your Son fulfilled the oath
                Hail to you O Mary</td>
            <td class="arabic">حلف الرب لداودبالحق ولم يندموبإبنك تم الموعودلسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_5">
            <td class="coptic" style="border-right: 1px solid black;">He saved Adam and his offspring
                Form the fire of Hell
                And returned him to his grace
                Hail to you O Mary</td>
            <td class="arabic">خلص آدم وبنيهمن نار جهنمورددته إلى نعيم كان فيهالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_6">
            <td class="coptic" style="border-right: 1px solid black;">David is glad today
                He rejoiced with us when
                His psalms were fulfilled
                Hail to you O Mary</td>
            <td class="arabic">داود اليوم مسرورفرح معنا حين تمكلامه في المزمورالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_7">
            <td class="coptic" style="border-right: 1px solid black;">That chosen pregnancy
                To the prudent, a mystery
                A plant without seed
                Hail to you O Mary</td>
            <td class="arabic">ذاك الحبل المختاراعجوبة لمن يفهمكزرع بغير بذارالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Abraham, head of the patriarchs
                Rejoiced at the fulfillment
                Of the oath the Lord promised
                Hail to you O Mary</td>
            <td class="arabic">رأس الآباء إبراهيمفرح لتمام قسممن الرب له قديمالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Curse and shame were removed
                From us for He had mercy
                When He dwelt in our lady
                Hail to you O Mary</td>
            <td class="arabic">زالت اللعنة والعارعنا وقد رحمإذا حل في سيدة الأبكارالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_10">
            <td class="coptic" style="border-right: 1px solid black;">A heaven you are and an example
                To all who came before
                And all those to come
                Hail to you O Mary</td>
            <td class="arabic">سماء أنت ومثاللجميع من تقدموإلى كل الأجيالالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Isaiah witnessed in truth
                That the Son will incarnate
                And will be born of you
                Hail to you O Mary</td>
            <td class="arabic">شهد بالحق أشعياءإن الابن يتجسمويولد منك ازلياالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The star became a sign
                And guided the Magi
                To the place of Emmanuel
                Hail to you O Mary</td>
            <td class="arabic">صار النجم كالدليلللمجوس وتقدمووقف حيث عمانوئيلالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_13">
            <td class="coptic" style="border-right: 1px solid black;">They saw the light of the star
                Guiding them in the darkness
                To Herod they confirmed the news
                Hail to you O Mary</td>
            <td class="arabic">ضوء النجم نظروهوأرشدهم فى الظلامولهيرودس حققوهالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Herod, the deceiver thought
                That Christ is an earthly king
                He ordered to kill Him
                Hail to you O Mary</td>
            <td class="arabic">طلب المكار ورضىقتل المولود وزعمإنه ملك أرضيالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_15">
            <td class="coptic" style="border-right: 1px solid black;">The wise men went forth
                Offered gifts joyfully
                Myrrh, gold, and frankincense
                Hail to you O Mary</td>
            <td class="arabic">ظفر به الفرسانوكل منهم قدمالمر والذهب واللبانالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_16">
            <td class="coptic" style="border-right: 1px solid black;">My mind is confused
                My tongue can not speak
                Unable to describe you
                Hail to you O Mary</td>
            <td class="arabic">عقلي في وصفك حيرانوانا حقاً أعلمإني عاجز اللسانالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_17">
            <td class="coptic" style="border-right: 1px solid black;">My mind is pondering
                He who gave us life
                How He fled to Mount Qosqam
                Hail to you O Mary</td>
            <td class="arabic">غاب عقلي وهامفي من احيانا بعد عدمكيف هرب لجبل قسقامالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_18">
            <td class="coptic" style="border-right: 1px solid black;">They bathed Him in Matareya
                So the Balsam tree sprouted
                From it we make Myroon (Holy Oil)
                Hail to you O Mary</td>
            <td class="arabic">في المطرية حموهفطلع شجر البلسممنه الميرون صنعوهالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Prophets spoke with the Spirit
                About what was revealed
                And in the Book explained
                Hail to you O Mary</td>
            <td class="arabic">قال الآنبياء بالروحلما اوحى وألهموفى الكتاب مشروحالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_20">
            <td class="coptic" style="border-right: 1px solid black;">How many wonders
                And miracles and mysteries
                The prudent may wonder
                Hail to you O Mary</td>
            <td class="arabic">كم لك من أعاجيبومن آيات عظامتحير فيها اللبيبالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Save for the Lord God
                Who came and saved Adam
                We would still be in captivity
                Hail to you O Mary</td>
            <td class="arabic">لولا الرب الإلهلخلاص آدم تقديملدمنا في رق اعداهالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Moses received on Mount Sinai
                The mount of the red sea
                Two tablets from his Lord
                Hail to you O Mary</td>
            <td class="arabic">موسى في طور سينوجبل بحر القلزماعطاه ربه لوحينالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_23">
            <td class="coptic" style="border-right: 1px solid black;">You are like the Ten Commandments
                Written without pen
                And like the burning bush
                Hail to you O Mary</td>
            <td class="arabic">نظير العشر الكلماتكتبت بغير قلمورآك عوسج بثباتالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Your Son saved
                All nations and peoples
                And led them to the truth
                Hail to you O Mary</td>
            <td class="arabic">ها إبنك قد نجىسائر الشعوب والأمموالى الحق أهدىالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_25">
            <td class="coptic" style="border-right: 1px solid black;">The Lord revived us
                When He came and suffered
                From shame He redeemed us
                Hail to you O Mary</td>
            <td class="arabic">والرب قد احياناحين جانا وتألمومن الذل فداناالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget our Patriarch
                Grant him abundant grace
                And his partners our bishops
                Hail to you O Mary</td>
            <td class="arabic">لا تنسى بطركناوامنحيه وافر النعموشركائه أساقفتناالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_27">
            <td class="coptic" style="border-right: 1px solid black;">O Lord protect us
                We are Your people
                and Your flock, Save us
                Hail to you O Mary</td>
            <td class="arabic">يا رب نجينالأننا شعبك وغنمرعيتك ارحمناالسلام لك يا مريم</td>
        </tr>
        <tr id="table_37_row_28">
            <td class="coptic" style="border-right: 1px solid black;">And to the Lord of hosts
                We cry: Lord Have Mercy
                Shouting with a loud voice
                Hail to you O Mary</td>
            <td class="arabic">وإلى رب القواتنصرخ يا رب ارحمونصيح بأعلا الأصواتالسلام لك يا مريم</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_38" data-title="Your Table Title Here"
        onclick="toggleTable('table_38', this)">+ Your Table Title Here</span>
    <table id="table_38" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_38_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I sought after You: from the depth of my heart: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓⲕⲱϯ ̀ⲛⲥⲱⲕ : ϧⲉⲛ ̀ⲡϣⲱⲕ ̀ⲙⲡⲁϩⲏⲧ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ :
                ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">طلبتك من عمق قلبى ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Loosen for me: all the bonds of sin: My Lord Jesus
                Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲃⲱⲗ ̀ⲉⲃⲟⲗ ϩⲁⲣⲟⲓ : ̀ⲛⲛⲓ̀ⲥⲛⲁⲩϩ ̀ⲛⲧⲉ ̀ⲫⲛⲟⲃⲓ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">حلّ عنى رباطات الخطية ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Be a help to me: so that You may save me: My Lord
                Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲅⲉⲛⲧⲏⲓ ̀ⲙⲃⲟ̀ⲏⲑⲟⲥ : ⲉⲑⲣⲉⲕⲥⲱϯ ̀ⲙⲙⲟⲓ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">كن لى معيناً لكى تخلصني ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_3">
            <td class="coptic" style="border-right: 1px solid black;">May Your goodness: come speedily to me: My Lord
                Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲉⲕⲙⲉⲧ̀ⲁⲅⲁⲑⲟⲥ : ⲙⲁⲣⲉⲥⲧⲁϩⲟⲓ ̀ⲛⲭⲱⲗⲉⲙ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">صلاحك فليدركنى سريعاً: ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Overshadow me: with the shadow of Your wings: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲕⲉⲣϧⲏⲓⲃⲓ ̀ⲉϫⲱⲓ : ϧⲁ ̀ⲧϧⲏⲓⲃⲓ ̀ⲛⲧⲉ ⲛⲉⲕⲧⲉⲛϩ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">ظلـل علـّى بظل جناحـيك: ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_5">
            <td class="coptic" style="border-right: 1px solid black;">In six days You have made: all the creation: My
                Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲟⲟⲩ ⲅⲁⲣ ̀ⲛ̀ⲉϩⲟⲟⲩ : ⲁⲕⲑⲁⲙⲓ̀ⲟ ̀ⲛϯ̀ⲕⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ :
                Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">فى ستة أيام صنعت كل الخليقة ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Seven times everyday: I will praise Your Name: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ϣⲁϣϥ ̀ⲛⲥⲟⲡ ̀ⲙⲙⲏⲛⲓ : ϯⲛⲁ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉⲕⲣⲁⲛ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">سبع مرات فى اليوم أبارك اسمك ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_7">
            <td class="coptic" style="border-right: 1px solid black;">All the creation: glorifies Your Name: My Lord
                Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲏⲥ ϯ̀ⲕⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ : ⲥⲉϯ̀ⲱⲟⲩ ̀ⲙⲡⲉⲕⲣⲁⲛ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">ها كل البرية تمجد اسمك: ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Yours is the Lordship: and the Authority: My Lord
                Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧϭⲟⲓⲥ : ⲛⲉⲙ ϯ̀ⲉⲝⲟⲩⲥⲓ̀ⲁ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ :
                ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">لك الربوبية والسلطان: ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Make haste, O my God: so that You may save me: My
                Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲓⲱⲥ ̀ⲙⲙⲟⲕ Ⲡⲁⲛⲟⲩϯ : ⲉⲑⲣⲉⲕⲥⲱϯ ̀ⲙⲙⲟⲓ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">أسرع ياإلهي لتخلصنى : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Every knee: bows down before You: My Lord Jesus:
                help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲥⲉⲕⲱⲗϫ : ̀ⲙⲡⲉⲕ̀ⲙⲑⲟ ̀ⲉⲃⲟⲗ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">كل ركبة تجثو أمامك : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_11">
            <td class="coptic" style="border-right: 1px solid black;">All the diverse tongues: together bless Your Name:
                My Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲗⲁⲥ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ : ⲥⲉ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉⲕⲣⲁⲛ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">كل الألسنة معاً تبارك اسمك : ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Turn away Your face: from all of my sins: My Lord
                Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲧⲁⲥⲑⲟ ̀ⲙⲡⲉⲕϩⲟ : ⲥⲁⲃⲟⲗ ̀ⲛⲛⲁⲛⲟⲃⲓ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ :
                ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">اصرف وجهك عن خطاياي : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Blot out, O God: all my iniquities: My Lord Jesus
                Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁ̀ⲁⲛⲟⲙⲓ̀ⲁ ⲧⲏⲣⲟⲩ : Ⲫϯ ⲉⲕ̀ⲉⲥⲟⲗϫⲟⲩ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">جميع آثامى يا الله امحها : ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_14">
            <td class="coptic" style="border-right: 1px solid black;">You know my thoughts: and You search my depths: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲝⲱⲟⲩⲛ ̀ⲛⲛⲁⲙⲉⲩ̀ⲓ : ̀ⲕϧⲟⲧϧⲉⲧ ̀ⲛⲛⲁ̀ϭⲗⲱⲧ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">أنت تعرف أفكارى وتفحص كليتى: ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Create in me: a clean heart: My Lord Jesus Christ:
                help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩϩⲏⲧ ̀ⲉϥⲟⲩⲁⲃ : ⲉⲕ̀ⲉⲥⲟⲛⲧϥ ̀ⲛϧⲏⲧ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">قلباً طاهراً أخلقه فيّ: ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Your Holy Spirit: do not take away from me: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ̀ⲙⲡⲉⲣⲟⲗϥ ̀ⲉⲃⲟⲗϩⲁⲣⲟⲓ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">روحك القدوس لاتنزعه منى : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Incline Your ears: make haste and hear me: My Lord
                Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲉⲕ ⲡⲉⲕⲙⲁϣϫ ̀ⲉⲣⲟⲓ : ⲥⲱⲧⲉⲙ ̀ⲉⲣⲟⲓ ̀ⲛⲭⲱⲗⲉⲙ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">أمل سمعك إلىّ واستجب لى عاجلاً: ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Set before me a law: in the way of Your justice:
                My Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉⲙⲛⲉ ⲛⲟⲙⲟⲥ ⲛⲏⲓ : ϩⲓ ̀ⲫⲙⲱⲓⲧ ̀ⲛⲧⲉ ⲧⲉⲕⲙⲉⲑⲙⲏⲓ :
                Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">قرر لى ناموساً فى طريق عدلك: ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Your Kingdom O my God: is an eternal kingdom: My
                Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ Ⲡⲁⲛⲟⲩϯ: ⲟⲩⲙⲉⲧⲟⲩⲣⲟ ̀ⲛ̀ⲉⲛⲉϩ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">ملكوتك ياإلهى ملكوت أبدى: ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_20">
            <td class="coptic" style="border-right: 1px solid black;">You are the Son of God: I believe in You: My Lord
                Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ̀ⲛⲑⲟⲕ ⲁⲓⲛⲁϩϯ ̀ⲉⲣⲟⲕ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ :
                ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">أنت ابن الله آمنت بك : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_21">
            <td class="coptic" style="border-right: 1px solid black;">You Who carries the sins of the world: Have mercy
                upon me: My Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏⲉⲧ̀ⲱⲗⲓ ̀ⲙ̀ⲫⲛⲟⲃⲓ : ̀ⲛⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲛⲁⲓ ⲛⲏⲓ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">ياحامل خطية العالم ارحمنى : ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Forgive me the multitude: of my iniquities: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲱ ⲛⲏⲓ ̀ⲉⲃⲟⲗ ̀ⲙ̀ⲡ̀ⲁϣⲁⲓ : ̀ⲛⲧⲉ ⲛⲁ̀ⲁⲛⲟⲙⲓ̀ⲁ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">اغفر لى كثرة آثامى: ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_23">
            <td class="coptic" style="border-right: 1px solid black;">All of the souls: together bless Your Name: My
                Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ : ⲥⲉ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉⲕⲣⲁⲛ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">كل الأنفس معاً تبارك اسمك : ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Have patience with me: do not hasten to destroy
                me: My Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲱⲟⲩ̀ⲛϩⲏⲧ ⲛⲉⲙⲏⲓ : ̀ⲙⲡⲉⲣⲧⲁⲕⲟⲓ ̀ⲛⲭⲱⲗⲉⲙ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">تــأن علىّ ولاتهلكنى سريعاً : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Early in the morning: I will rise and Bless Your
                Name: My Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲓⲧⲱⲛⲧ ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛϣⲱⲣⲡ : ̀ⲛⲧⲁ̀ⲥⲙⲟⲩ ̀ⲉⲡⲉⲕⲣⲁⲛ :
                Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">أقوم وقت السحر لأبارك اسمك: ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Your yoke is sweet: and Your burden is light: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ϥϩⲟⲗϫ ̀ⲛϫⲉ ⲡⲉⲕⲛⲁϩⲃⲉϥ : ⲧⲉⲕⲉⲧⲫⲱ ̀ⲁⲥⲓ̀ⲱⲟⲩ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">حلو هو نيرك وحملك خفبف : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_27">
            <td class="coptic" style="border-right: 1px solid black;">In the accepted time: hear me: My Lord Jesus
                Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲉϥϣⲏⲡ ⲉⲕ̀ⲉⲥⲱⲧⲉⲙ ̀ⲉⲣⲟⲓ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">فى زمن مقبول استجب لى : ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Oh, how beloved: is Your Holy Name: My Lord Jesus:
                help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲱⲥ ⲟⲩϣⲟⲩⲙⲉⲛⲣⲓⲧϥ : ⲡⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ : Ⲡⲁϭⲟⲓⲥ
                Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">محبوب هو اسمك القدوس ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_29">
            <td class="coptic" style="border-right: 1px solid black;">Disperse away from me: all of the devils: My Lord
                Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲱⲣ ̀ⲉⲃⲟⲗ ϩⲁⲣⲟⲓ : ̀ⲛⲇⲓ̀ⲁⲃⲟⲗⲏ ⲛⲓⲃⲉⲛ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">فرق عنى كل الابالسة: ياربى يسوع المسيح أعنى.</td>
        </tr>
        <tr id="table_38_row_30">
            <td class="coptic" style="border-right: 1px solid black;">Sow within me: the seed of Your righteousness: My
                Lord Jesus: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϭⲟ ̀ⲛ̀ϧⲣⲏⲓ ̀ⲛϧⲏⲧ : ̀ⲙ̀ⲡⲟⲩⲧⲁϩ ̀ⲛⲧⲉ ⲧⲉⲕⲙⲉⲑⲙⲏⲓ :
                Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ.</td>
            <td class="arabic">اغرس فيّ ثمرة برك : ياربى يسوع أعنى.</td>
        </tr>
        <tr id="table_38_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Grant us Your true peace: and forgive us our sins:
                My Lord Jesus Christ: help me.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯⲛⲁⲛ ̀ⲛⲧⲉⲕϩⲓⲣⲏⲛⲏ ̀ⲙⲙⲏⲓ : ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ :
                Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ : ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲓ .</td>
            <td class="arabic">أعطنا سلامك الحقيقى وأغفر لنا خطايانا: ياربى يسوع المسيح أعني</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_39" data-title="Your Table Title Here"
        onclick="toggleTable('table_39', this)">+ Your Table Title Here</span>
    <table id="table_39" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_39_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I open my mouth with praise
                And say with a broken heart
                My Lord Jesus Christ
                Grant me a praising tongue</td>
            <td class="arabic">أفتح فاى بالتسبيحوأقول بقلب جريحياربى يسوع المسيحأعطنى لسان فصيح</td>
        </tr>
        <tr id="table_39_row_1">
            <td class="coptic" style="border-right: 1px solid black;">That I may praise Your Name
                And thank You for Your grace
                My Lord Jesus Christ
                Teach me Your statutes</td>
            <td class="arabic">لكى أسبح أسمكوأشكر فضل أنعامكياربي يسوع المسيحعلمني أحكامك</td>
        </tr>
        <tr id="table_39_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Holy is Your Name and wonderful
                And glorified in Your saints
                My Lord Jesus Christ
                Have mercy on your creation</td>
            <td class="arabic">قدوس أسمك وعجيبوممجد فى قديسيكياربى يسوع المسيحارحم صنعة يديك</td>
        </tr>
        <tr id="table_39_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Worthy and right are You
                To be praised and glorified
                My Lord Jesus Christ
                Your praise is sweet and good</td>
            <td class="arabic">مستحق ومستوجبالتسابيح و التماجيدياربي يسوع المسيحتسبيحك حلو ولذيذ</td>
        </tr>
        <tr id="table_39_row_4">
            <td class="coptic" style="border-right: 1px solid black;">I cried unto You all day
                I raised my hands to You
                My Lord Jesus Christ
                Your Name is sweet to me</td>
            <td class="arabic">صرخت بطول النهارمًديت نحوك يداىياربي يسوع المسيحأسمك حلو عندي</td>
        </tr>
        <tr id="table_39_row_5">
            <td class="coptic" style="border-right: 1px solid black;">I cast my cares on You
                O Lord, neglect me not
                My Lord Jesus Christ
                Do not forsake me</td>
            <td class="arabic">جعلت اتكالي عليكيارب لا تهملنييارب يسوع المسيحلا تتخل عنى</td>
        </tr>
        <tr id="table_39_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Your Holy Spirit
                Cast not away from me
                My Lord Jesus Christ
                With Your might help me</td>
            <td class="arabic">روحك القدوسلا تنزعه منىياربى يسوع المسيحبمعونتك أشملنى</td>
        </tr>
        <tr id="table_39_row_7">
            <td class="coptic" style="border-right: 1px solid black;">The enemy has injured me
                And has deeply wounded me
                Give me Your Body as ointment
                And Your Blood as bandage</td>
            <td class="arabic">جرحنى العدو بسهاموجرحه فى حاقأعطنى جسدك مرهمودمك لى ترياق</td>
        </tr>
        <tr id="table_39_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Seven times daily:
                Every day I praise Your Name
                My Lord Jesus Christ
                Make me of Your portion</td>
            <td class="arabic">سبع مرات كل يومكل يوم أبارك أسمكياربي يسوع المسيحاجعلني من قسمك</td>
        </tr>
        <tr id="table_39_row_9">
            <td class="coptic" style="border-right: 1px solid black;">My soul has longed for You
                As a barren land
                My Lord Jesus Christ
                In Your mercy, remember us</td>
            <td class="arabic">اشتاقت نفسى إليككالأرض العطشانةياربي يسوع المسيحبرحمتك لا تنسانا</td>
        </tr>
        <tr id="table_39_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget our Church
                Fill it with Your goodness
                My Lord Jesus Christ
                Establish it in Your laws</td>
            <td class="arabic">لا تنسى بيعتناإملأها من خيراتكياربى يسوع المسيحثبتها بشهاداتك</td>
        </tr>
        <tr id="table_39_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Your laws are sweet on my lips
                As honey is sweet in my mouth
                My Lord Jesus Christ
                Cleanse me from my sins</td>
            <td class="arabic">شهاداتك حلوة في حلقىكالشهد داخل فميياربي يسوع المسيحاغسلني من أثمي</td>
        </tr>
        <tr id="table_39_row_12">
            <td class="coptic" style="border-right: 1px solid black;">We thank the Beneficent
                And worship the Lord Jesus
                Christ the Lord of hosts
                We kneel to Him in awe</td>
            <td class="arabic">نشكر صانع الخيراتنسجد للرب يسوعالمسيح رب القواتفلنركع له بخشوع</td>
        </tr>
        <tr id="table_39_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Impart Your laws in us
                By Your words, confirm us
                My Lord Jesus Christ
                Raise the state of the church</td>
            <td class="arabic">رتب فينا أحكامكوبقولك ثبتناياربى يسوع المسيحارفع شأن مًلتنا</td>
        </tr>
        <tr id="table_39_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Raise the state of the Christians
                In all the world
                My Lord Jesus Christ
                Embrace and support them</td>
            <td class="arabic">ارفع شأن المسيحيينفى جميع المسكونةياربى يسوع المسيحاشملهم بمعونة</td>
        </tr>
        <tr id="table_39_row_15">
            <td class="coptic" style="border-right: 1px solid black;">If we live in poverty
                Your Name shall sustain us
                My Lord Jesus Christ
                Your goodness shall enrich us</td>
            <td class="arabic">وان كنا فقراء من المالاسمك هو يكفيناياربى يسوع المسيحوصلاحك ٌيغنينا</td>
        </tr>
        <tr id="table_39_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Unto You is due praise
                Unto You is due blessing
                My Lord Jesus Christ
                The Fountain of all goodness</td>
            <td class="arabic">يجب لك التسبيحينبغى لك البركاتياربى يسوع المسيحينبوع كل الخيرات</td>
        </tr>
        <tr id="table_39_row_17">
            <td class="coptic" style="border-right: 1px solid black;">O Lord save Your people
                And bless Your inheritance
                Raise their state by Your Name
                And grant them Your kingdom</td>
            <td class="arabic">يارب خلص شعبكوبارك ميراثكارفع شأنهم باسمكوورًثهم ملكوتك</td>
        </tr>
        <tr id="table_39_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Your Kingdom O my God
                Is an eternal Kingdom
                And Your Lordship O my King
                Is an everlasting Lordship</td>
            <td class="arabic">ملكوتك يا إلهىملكوت أبديةوسيادتك ياملكىسيادة أزلية</td>
        </tr>
        <tr id="table_39_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Everlasting and exalted
                And wonderful are Your deeds
                My Lord Jesus Christ
                The Master of all kingdoms</td>
            <td class="arabic">أزلية ومرتفعةوعجيبة هى أفعالكياربى يسوع المسيحسيد كل ممالك</td>
        </tr>
        <tr id="table_39_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Worldly kingdoms perish
                And all money is fleeting
                My Lord Jesus Christ
                Your Kingship is everlasting</td>
            <td class="arabic">ممالك الدنيا تزولوالمال كله فانىياربى يسوع المسيحمُلكك غير متناهى</td>
        </tr>
        <tr id="table_39_row_21">
            <td class="coptic" style="border-right: 1px solid black;">All kingdoms will perish
                And all worldly treasures
                My Lord Jesus Christ
                You’re the treasure of the poor</td>
            <td class="arabic">تتناهى كل ممالكتفنى كنوز الأمراءياربى يسوع المسيحأنت كنز الفقراء</td>
        </tr>
        <tr id="table_39_row_22">
            <td class="coptic" style="border-right: 1px solid black;">The poor make them rich
                And heal the sick
                Raise the orphans
                O Lord enrich them</td>
            <td class="arabic">فقراء شعبك اغنيهموالمرضى أشفيهموالايتام ربًيهممن فضلك أغنيهم</td>
        </tr>
        <tr id="table_39_row_23">
            <td class="coptic" style="border-right: 1px solid black;">O please enrich them
                And aid those who are in debt
                My Lord Jesus Christ
                You're the Treasure of the poor</td>
            <td class="arabic">أغنيهم من فضلكأوفِ عن المديونينياربى يسوع المسحأنت غنى المحتاجين</td>
        </tr>
        <tr id="table_39_row_24">
            <td class="coptic" style="border-right: 1px solid black;">If we're ever in need
                We have a precious Gem
                We have the precious stone
                Jesus the Precious One</td>
            <td class="arabic">ان كنا محتاجينفلنا درة ثمينةلنا الحجر الكريميسوع غالى القيمة</td>
        </tr>
        <tr id="table_39_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Precious and honored
                More than the world indeed
                His Name is Jesus Christ
                The Forgiver of all sins</td>
            <td class="arabic">غال القيمة وكريمأغلى من الدنيا تمامإسمه يسوع المسيحالغافر كل آثام</td>
        </tr>
        <tr id="table_39_row_26">
            <td class="coptic" style="border-right: 1px solid black;">The Forgiver of all sins
                Who hearkens to those who plead
                All the nations confess Him
                And the kings praise Him</td>
            <td class="arabic">غافر كل الذنوبسامع لمن يدعوهتعترف له كل الشعوبوالملوك يسبحوه</td>
        </tr>
        <tr id="table_39_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Praise Him O you nations
                Glorify Him all people
                My Lord Jesus Christ
                Grant us to do Your will</td>
            <td class="arabic">سبحوه ياكل الامممجدوه ياكل الشعوبياربى يسوع المسيحتبلغنا المطلوب</td>
        </tr>
        <tr id="table_39_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Our plea is Your Kingdom
                And Your never-ending mercy
                My Lord Jesus Christ
                Your nature is goodness</td>
            <td class="arabic">مطلوبنا ملكوتكومراحمك موجودهياربى يسوع المسيحيامن طبعه الجوده</td>
        </tr>
        <tr id="table_39_row_29">
            <td class="coptic" style="border-right: 1px solid black;">You are good and generous
                There is no other like You
                My Lord Jesus Christ
                You are all-observing</td>
            <td class="arabic">صاحب جوده وكريموليس له قط نظيرياربى يسوع المسيح أنت على الكل بصير</td>
        </tr>
        <tr id="table_39_row_30">
            <td class="coptic" style="border-right: 1px solid black;">All-observing and watching us
                according to Your plan
                My Lord Jesus Christ
                Let us only rely on You</td>
            <td class="arabic">بصير ومتطلععلينا بتدابيركيا ربى يسوع المسيحلا تحوجنا لغيرك</td>
        </tr>
        <tr id="table_39_row_31">
            <td class="coptic" style="border-right: 1px solid black;">We know no other but You
                In Your Gospel, we trust
                You are the Son of God
                Confirm us in Your faith</td>
            <td class="arabic">لا نعرف غيرك الهبإنجيلك صدقناأنت هو إبن اللهفى ايمانك ثبتنا</td>
        </tr>
        <tr id="table_39_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Confirm us in the faith
                Raise us from idleness
                My Lord Jesus Christ
                We rejoice in Your name</td>
            <td class="arabic">ثبتنا على الأيمانوانهضنا من كل مًللياربى يسوع المسيحباسمك نتهلل</td>
        </tr>
        <tr id="table_39_row_33">
            <td class="coptic" style="border-right: 1px solid black;">We rejoice with hymn
                We sing with the psaltery
                My Lord Jesus Christ
                Your praise is joy and delight</td>
            <td class="arabic">نتهلل بالالحانونرتل بالمزمورياربى يسوع المسيحتسبيحك بهجة وسرور</td>
        </tr>
        <tr id="table_39_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Our joy is in Your praise
                Our splendor is in Your glory
                My Lord Jesus Christ
                To You is due all glory</td>
            <td class="arabic">سرورنا تسابيحكبهجتنا هو مجدكياربى يسوع المسيحالعظمة لك وحدك</td>
        </tr>
        <tr id="table_39_row_35">
            <td class="coptic" style="border-right: 1px solid black;">I have sinned against You
                And have transgressed Your law
                You are justified in Your words
                And prevail when you judge</td>
            <td class="arabic">لك وحدك انا اخطيتوصنعت الشر أمامكلتصدق فى أقوالكوتغلب فى أحكامك</td>
        </tr>
        <tr id="table_39_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Your judgments are true and just
                And your mercy is never-ending
                My Lord Jesus Christ
                Have mercy on my soul</td>
            <td class="arabic">أحكامك حق وعدلومراحمك متسعةياربى يسوع المسيحارحم نفسى المتضعة</td>
        </tr>
        <tr id="table_39_row_37">
            <td class="coptic" style="border-right: 1px solid black;">I humbled myself before Your glory
                And depended on Your words
                My Lord Jesus Christ
                Cast me not on Your left-hand</td>
            <td class="arabic">اتضعت أمام مجدكوإتكلت على أقوالكياربى يسوع المسيحلا تطرحنى على شمالك</td>
        </tr>
        <tr id="table_39_row_38">
            <td class="coptic" style="border-right: 1px solid black;">On Your left-hand cast me not
                With the evil people
                I ask You to accept me
                As You accepted the tax collector</td>
            <td class="arabic">على شمالك لا توقفنىمع القوم الاشراراسألك أن تقبلنىكما قبلت العشار</td>
        </tr>
        <tr id="table_39_row_39">
            <td class="coptic" style="border-right: 1px solid black;">I cry out as the tax collector
                With a broken heart
                O Lord forgive my sins
                For Your servant is a sinner</td>
            <td class="arabic">أصرخ بصوت العشاروأنا بوجه مطاطىاللّهُم أغفر لى الاوزارفإنى عبدك خاطئ</td>
        </tr>
        <tr id="table_39_row_40">
            <td class="coptic" style="border-right: 1px solid black;">The sin is in my nature
                But Your nature is goodness
                There is no slave without sin
                Nor a Master without forgiveness</td>
            <td class="arabic">الخطية من طبعىوانت طبعك الاحسانليس عبد بلا خطيةولا سيد بلا غفران</td>
        </tr>
        <tr id="table_39_row_41">
            <td class="coptic" style="border-right: 1px solid black;">Forgiveness is of You
                And mercy comes from You
                My Lord Jesus Christ
                Guide me towards your ways</td>
            <td class="arabic">الغفران من عندكوالرحمة هى من قبلكياربى يسوع المسيحاهدينى الى سبلك</td>
        </tr>
        <tr id="table_39_row_42">
            <td class="coptic" style="border-right: 1px solid black;">Your ways are lost from me
                And life has passed me by
                I ask You to accept me
                And give me repentance</td>
            <td class="arabic">سُبُلَك تاهت عنىوالعمر فرغ منىأسألك تقبلنىوالتوبة أعطينى</td>
        </tr>
        <tr id="table_39_row_43">
            <td class="coptic" style="border-right: 1px solid black;">Give me repentance and forgiveness
                And cleanse me from my flaws
                My Lord Jesus Christ
                Forgive all my sins</td>
            <td class="arabic">أعطينى توبة وغفرانونقينى من كل عيوبىياربى يسوع المسيحاغفر لى كل ذنوبى</td>
        </tr>
        <tr id="table_39_row_44">
            <td class="coptic" style="border-right: 1px solid black;">My sins weigh upon me
                As a heavy harsh burden
                My Lord Jesus Christ
                Purify all my senses</td>
            <td class="arabic">ذنوبى ثقلت فوق راسىكحمل ثقيل قاسىياربى يسوع المسيحاشف كل حواسى</td>
        </tr>
        <tr id="table_39_row_45">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are greatly plenteous
                Your mercies O my God
                Are countless</td>
            <td class="arabic">مراحمك يا الهىهى كثيرة جدامراحمك يا الهىلا يحصى لها عددا</td>
        </tr>
        <tr id="table_39_row_46">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are more than the plants of the earth
                Your mercies O my God
                Are beyond measure</td>
            <td class="arabic">مراحمك يا الهىأكثر من نبات الأرضمراحمك يا الهىقد فاقت كل عدد</td>
        </tr>
        <tr id="table_39_row_47">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are as the rain drops
                Your mercies O my God
                Are more than the sand of the sea</td>
            <td class="arabic">مراحمك يا الهىكقطرات الأمطارمراحمك يا الهىأكثر من رمل البحار</td>
        </tr>
        <tr id="table_39_row_48">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are as water fountains
                Your mercies O my God
                Are as flowing rivers</td>
            <td class="arabic">مراحمك يا الهىكينابيع المياهمراحمك يا الهىكالأنهار الجارية</td>
        </tr>
        <tr id="table_39_row_49">
            <td class="coptic" style="border-right: 1px solid black;">Have mercy on my soul
                O Lord save me
                O Lord blot out my sins
                With Your goodness remember me</td>
            <td class="arabic">يارب ارحم نفسىيارب خلصنييارب امح إثميبصلاحك اذكرني</td>
        </tr>
        <tr id="table_39_row_50">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy,
                God the Lord of Sabaoth
                The Creator of the universe
                And its Provider</td>
            <td class="arabic">قدوس قدوس قدوسالله رب الصاباؤوتالخالق كل نفوسورازقهم بالقوت</td>
        </tr>
        <tr id="table_39_row_51">
            <td class="coptic" style="border-right: 1px solid black;">We ask You O Our King
                Preserve the life of our Patriarch
                And the bishops his companions
                Amen Alleluia</td>
            <td class="arabic">نسألك ياملكناأدم رئاسة بطركناوشركاؤه مطارنتـناامـين اللـيلويا</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_40" data-title="Your Table Title Here"
        onclick="toggleTable('table_40', this)">+ Your Table Title Here</span>
    <table id="table_40" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_40_row_0">
            <td class="coptic" style="border-right: 1px solid black;">And whenever we, gather for prayer, Let us bless
                the Name, Of my Lord Jesus.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲗⲟⲓⲡⲟⲛ ⲁⲛϣⲁⲛⲑⲱⲟⲩϯ:  ̀ⲉϯ̀ⲡⲣⲟⲥⲉⲩⲭⲏ: ⲙⲁⲣⲉⲛ̀ⲥⲙⲟⲩ
                ̀ⲉⲡⲓⲣⲁⲛ: ̀ⲛⲧⲉ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ</td>
            <td class="arabic">وايضاً أذا ما اجتمعنا للصلاة فلنبارك اسم ربى يسوع .</td>
        </tr>
        <tr id="table_40_row_1">
            <td class="coptic" style="border-right: 1px solid black;">We bless You, O my Lord Jesus. Deliver us through
                Your Name, For we have hope in You.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲧⲉⲛⲛⲁ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟⲕ: ̀ⲱ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ
                ⲡⲉⲕⲣⲁⲛ : ϫⲉ ⲁⲛⲉⲣϩⲉⲗⲡⲓⲥ ̀ⲉⲣⲟⲕ .</td>
            <td class="arabic">لاننا نباركك ياربى يسوع نجنا باسمك لأننا توكلنا عليك .</td>
        </tr>
        <tr id="table_40_row_2">
            <td class="coptic" style="border-right: 1px solid black;">That we may praise You, With Your Good Father, And
                the Holy Spirit, For You have come and saved us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲣⲉⲛϩⲱⲥ ̀ⲉⲣⲟⲕ : ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ : ⲛⲉⲙ
                Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ϫⲉ ⲁⲕ̀ⲓ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ.</td>
            <td class="arabic">لكى نسبحك مع ابيك الصالح والروح القدوس لانك أتيت وخلصتنا.</td>
        </tr>
        <tr id="table_40_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Glory be to the Father, And the Son and the Holy
                Spirit,</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓ̀ⲱ: ⲕⲉ Ⲁⲅⲓ̀ⲱ ̀ Ⲡⲛⲉⲩⲙⲁⲧⲓ.</td>
            <td class="arabic">المجد للآب والابن والروح القدس.</td>
        </tr>
        <tr id="table_40_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Now, and forever, And to the age of all ages.
                Amen.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ̀ⲓ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ
                ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">الآن وكل اوان والى دهر الداهرين آمين.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_41" data-title="Your Table Title Here"
        onclick="toggleTable('table_41', this)">+ Your Table Title Here</span>
    <table id="table_41" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_41_row_0">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 1</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الأولى من الثيؤطوكية</td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الأولى من الثيؤطوكية</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">The First Explanation</td>
            <td class="arabic">التفسير الأول</td>
        </tr>
        <tr id="table_41_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 2</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الثانية من الثيؤطوكية</td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الثانية من الثيؤطوكية</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">The Second Explanation</td>
            <td class="arabic">التفسير الثانى</td>
        </tr>
        <tr id="table_41_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 3</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الثالثة من الثيؤطوكية</td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الثالثة من الثيؤطوكية</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">The Third Explanation</td>
            <td class="arabic">التفسير الثالث</td>
        </tr>
        <tr id="table_41_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 4</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الرابعة من الثيؤطوكية</td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الرابعة من الثيؤطوكية</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">The Fourth Explanation</td>
            <td class="arabic">التفسير الرابع</td>
        </tr>
        <tr id="table_41_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 5</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الخامسة من الثيؤطوكية</td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الخامسة من الثيؤطوكية</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">The Fifth Explanation</td>
            <td class="arabic">التفسير الخامس</td>
        </tr>
        <tr id="table_41_row_5">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 6</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة السادسة من الثيؤطوكية</td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة السادسة من الثيؤطوكية</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="coptic" style="border-right: 1px solid black;">The Sixth Explanation</td>
            <td class="arabic">التفسير السادس</td>
        </tr>
        <tr id="table_41_row_6">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 7</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة السابعة من الثيؤطوكية</td>
            <td class="coptic" style="border-right: 1px solid black;">The Seventh Explanation</td>
            <td class="arabic">التفسير السابع</td>
        </tr>
        <tr id="table_41_row_7">
            <td class="coptic" style="border-right: 1px solid black;">A Hymn on Hail to you Mary</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">مديح على السلام لك يا مريم</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_41_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The Theotokia Part 8</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲍ ̅ ̀ⲛⲥⲟⲡ</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic" style="border-right: 1px solid black;">القطعة الثامنة من الثيؤطوكية</td>
            <td class="coptic" style="border-right: 1px solid black;">O M A R Y</td>
            <td class="arabic">يا م ر ي م</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_42" data-title="Your Table Title Here"
        onclick="toggleTable('table_42', this)">+ Your Table Title Here</span>
    <table id="table_42" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_42_row_0">
            <td class="coptic" style="border-right: 1px solid black;">You are called righteous, O blessed one, Among
                women, The Second Tabernacle:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉⲙⲟⲩϯ ̀ⲉⲣⲟ ⲇⲓⲕⲉⲟⲥ : ̀ⲱⲑⲏⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ : ϧⲉⲛ
                ⲛⲓϩⲓ̀ⲟⲙⲓ : ϫⲉ ϯⲙⲁϩ̀ⲥⲛⲟⲩϯ ̀ⲛ̀ⲥⲕⲏⲛⲏ.</td>
            <td class="arabic">مدعوة صديقة أيتها المباركة في النساء القبة الثانية.</td>
        </tr>
        <tr id="table_42_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Which is called, The Holy, of Holies, Wherein are
                the Tablets:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲏ̀ⲉⲧⲟⲩⲙⲟⲩϯ ̀ⲉⲣⲟⲥ : ϫⲉ ⲑⲏⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ
                ̀ⲉⲣⲉ ⲛⲓ̀ⲡⲗⲁⲝ ̀ⲛϧⲏⲧⲥ.</td>
            <td class="arabic">التى تدعى قدس الأقداس وفيها لوحا العهد.</td>
        </tr>
        <tr id="table_42_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Of the Covenant, and the Ten Commandments, which
                are Written, by The finger of God:</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲧⲉ ϯⲇⲓ̀ⲁⲑⲏⲕⲏ : ⲛⲉⲙ ⲡⲓ ⲓˉ(ⲙⲉⲧ) ̀ⲛⲥⲁϫⲓ : ⲛⲁⲓ
                ̀ⲉⲧⲁϥ̀ⲥϧⲏⲧⲟⲩ : ̀ⲛϫⲉ ⲡⲓⲧⲏⲃ ̀ⲛⲧⲉ Ⲫϯ.</td>
            <td class="arabic">والعشر كلمات هذه المكتوبة بأصبع الله.</td>
        </tr>
        <tr id="table_42_row_3">
            <td class="coptic" style="border-right: 1px solid black;">They have directed us, to the Iota, The Name of
                Salvation, Of Jesus Christ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉⲉⲣϣⲟⲣⲡ ̀ⲛⲉⲣⲥⲩⲙⲙⲉⲛⲓⲛ : ⲛⲁⲛ ̀ⲙⲡⲓⲓⲱⲧⲁ : ⲡⲓⲣⲁⲛ
                ̀ⲛⲟⲩϫⲁⲓ : ̀ⲛⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">سبقت أن دلتنا على (اليوطة) اسم الخلاص الذى ليسوع المسيح.</td>
        </tr>
        <tr id="table_42_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Who was incarnate, Of you without change, And
                became the Mediator, Of a new covenant.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲓ ̀ⲉⲧⲁϥϭⲓⲥⲁⲣⲝ ̀ⲛϧⲏϯ : ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ : ⲁϥϣⲱⲡⲓ
                ̀ⲙⲙⲉⲥⲓⲧⲏⲥ : ⲉⲩⲇⲓ̀ⲁⲑⲏⲕⲏ ̀ⲙⲃⲉⲣⲓ .</td>
            <td class="arabic">هذا الذى تجسد منك بغير تغيير . وصار وسيطاً لعهد جديد.</td>
        </tr>
        <tr id="table_42_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Through the shedding, Of His holy Blood, He
                purified the faithful, to be a justified people.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲃⲟⲗϩⲓⲧⲉⲛ ̀ⲫⲛⲟⲩϫϧ : ̀ⲛⲧⲉ ⲡⲉϥ̀ⲥⲛⲟϥ ⲉⲑⲟⲩⲁⲃ : ⲁϥⲧⲟⲩⲃⲟ
                ̀ⲛⲛⲏⲉⲑⲛⲁϩϯ : ⲉⲩⲗⲁⲟⲥ ⲉⲩ̀ⲑⲙⲁⲓⲟϥ .</td>
            <td class="arabic">من قبل رشاش دمـه المقدس طهر المؤمنين شعباً مبرراً.</td>
        </tr>
        <tr id="table_42_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك يا سيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_42_row_7">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions, With the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀  Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_42_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Who can speak of, The honor of the Tabernacle,
                Which Moses had made, On Mount Sinai.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲙ ⲡⲉⲑⲛⲁ̀ϣⲥⲁϫⲓ : ̀ⲙ̀ⲡⲧⲁⲓ̀ⲟ ̀ⲛϯ̀ⲥⲕⲏⲛⲏ : ̀ⲉⲧⲁ
                Ⲙⲱ̀ⲩⲥⲏⲥ ⲑⲁⲙⲓⲟⲥ : ϩⲓϫⲉⲛ ̀ⲡⲧⲱⲟⲩ ̀ⲛⲤⲓⲛⲁ.</td>
            <td class="arabic">من يقدر أن ينطق بكرامة القبة التى صنعها موسى على جبل سيناء .</td>
        </tr>
        <tr id="table_42_row_9">
            <td class="coptic" style="border-right: 1px solid black;">He made it with glory, As commanded by the Lord,
                and according to the pattern, shown unto him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲑⲁⲙⲓⲟⲥ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ : ⲕⲁⲧⲁ ̀ⲡⲥⲁϫⲓ ̀ⲙⲠϭⲟⲓⲥ : ⲛⲉⲙ
                ⲕⲁⲧⲁ ⲛⲓⲧⲩⲡⲟⲥ ⲧⲏⲣⲟⲩ : ̀ⲉⲧⲁⲩⲧⲁⲙⲟϥ ̀ⲉⲣⲱⲟⲩ.</td>
            <td class="arabic">صنعها بمجد كقول الرب وكجميع المثالات التى اعلنت له.</td>
        </tr>
        <tr id="table_42_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Therein Aaron, And his sons served, The example of
                the highest, in the shadow of the heavenly ones.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲏ ̀ⲉⲣⲉ ̀ Ⲁ̀ⲁⲣⲱⲛ : ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ϣⲉⲙϣⲓ ̀ⲛϧⲏⲧⲥ : ϧⲉⲛ
                ̀ⲡⲧⲩⲡⲟⲥ ̀ⲛⲧⲉ ̀ⲡϭⲓⲥⲓ : ⲛⲉⲙ ̀ⲧϧⲏⲓⲃⲓ ̀ⲛⲧⲉ ⲛⲁ ̀ⲧⲫⲉ.</td>
            <td class="arabic">تلك التى كان هرون وبنوه   يخدمون فيها بمثال العلاء وظل السمائيات.</td>
        </tr>
        <tr id="table_42_row_11">
            <td class="coptic" style="border-right: 1px solid black;">They likened it to you, O Virgin Mary, The true
                Tabernacle, Wherein dwelt God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲧⲉⲛⲑⲱⲛⲓ ̀ⲉⲣⲟⲥ : Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ϯ̀ⲥⲕⲏⲛⲏ ̀ⲙⲙⲏⲓ :
                ̀ⲉⲣⲉ Ⲫϯ ⲥⲁϧⲟⲩⲛ ̀ⲙⲙⲟⲥ .</td>
            <td class="arabic">شبهوك بها يامريم العذراء القبة الحقيقية التى فى داخلها الله.</td>
        </tr>
        <tr id="table_42_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_42_row_13">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ :  ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ :
                ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_42_row_14">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, With the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_43" data-title="Your Table Title Here"
        onclick="toggleTable('table_43', this)">+ Your Table Title Here</span>
    <table id="table_43" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_43_row_0">
            <td class="coptic" style="border-right: 1px solid black;">I start in the Name of God
                Who dwells in light
                Who spoke to Moses
                Upon Mount Tabor</td>
            <td class="arabic">أبدأ باسم اللهالساكن فى النورالذى كلم موسىمن فوق جبــل الطــــور</td>
        </tr>
        <tr id="table_43_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Saying O Moses
                Arise joyfully
                So I may show you
                a place Prophesied about</td>
            <td class="arabic">قائلاً يا موسىانهض فرحا ًمسروراًلأعلمك بما كانكمــــــا عنـــه تنبـــــأون</td>
        </tr>
        <tr id="table_43_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Arise O Moses
                And ascend to the highest mount
                There upon it build a dome
                To resemble a tabernacle</td>
            <td class="arabic">انهض يا موسىواصعد إلى اعلى الجبالوابن هناك قبةتكون لك شبة مظـــــــال</td>
        </tr>
        <tr id="table_43_row_3">
            <td class="coptic" style="border-right: 1px solid black;">And all I say to you
                Immediately write down
                This is a testimony
                For the Israelites</td>
            <td class="arabic">وجميع ما قلته لكاكتبه فى الحالهذه هى شهادةللإســــــــــــــــــــرائيليين</td>
        </tr>
        <tr id="table_43_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Hasten, O Moses
                And observe the place
                Build there a dome
                With granite stone</td>
            <td class="arabic">إسرع ياموسىانظر هذا المكانوابن فيه قبةبالحجر الصوان</td>
        </tr>
        <tr id="table_43_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Elevate its height
                Give it four corners
                Gather what is needed
                For the builders</td>
            <td class="arabic">وعلى شوارعهاواعمل لها أربعة أركانواجمع مايحتاجإليه البناؤون</td>
        </tr>
        <tr id="table_43_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Make the outside of the dome
                And widen its hallway
                Overlay it, O Moses
                With pure gold</td>
            <td class="arabic">واعمل خارج القبةفسحة كالدهليزواطليها ياموسىبالذهب الإبريز</td>
        </tr>
        <tr id="table_43_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Within and without
                Honor for consecration
                From the height to the base
                With the precious gold</td>
            <td class="arabic">داخل مع خارجكرامة للتكريسمن أعلى إلى أسفلبالذهب الموزون</td>
        </tr>
        <tr id="table_43_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Make the inside of the dome
                An altar for the showbread
                And around the altar
                Make four pillars</td>
            <td class="arabic">واعمل داخل القبةمذبح للقربانواعمل حول المذبحأربعة عمدان</td>
        </tr>
        <tr id="table_43_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Make there upon it
                Cherubs made out of gold
                With their wings spread
                Upon the cover</td>
            <td class="arabic">يكون من فوقهامن الذهب كاروبانبأجنحة مفروشةإيجين بى إيللاستيريون</td>
        </tr>
        <tr id="table_43_row_10">
            <td class="coptic" style="border-right: 1px solid black;">And in it place
                The overlaid ark of covenant
                And in it the golden vessel
                With the hidden manna</td>
            <td class="arabic">واجعل فيهاتابوت العهد المطلىوفيه القسط الذهببالمن المخفى</td>
        </tr>
        <tr id="table_43_row_11">
            <td class="coptic" style="border-right: 1px solid black;">And in it Aaron's censer
                From the pure gold
                And the tablets of the covenant
                With Aaron's rod</td>
            <td class="arabic">وفيه شورية هرونمن الذهب المصفىوفيه لوحا العهدمع عصاة هارون</td>
        </tr>
        <tr id="table_43_row_12">
            <td class="coptic" style="border-right: 1px solid black;">And in it the lampstand
                With the chosen gold
                And the golden vessel
                Burning as the ember</td>
            <td class="arabic">وفيه المنارةمن الذهب المختاروفيه المايدة ذهبتشعل كجمر النار</td>
        </tr>
        <tr id="table_43_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Decorate it, O Moses
                With various lights
                Make also in it
                Seven burning candles</td>
            <td class="arabic">وزينها ياموسىبسائر كل الأنوارواجعل فيها أيضاًسبعة سرج ينيرون</td>
        </tr>
        <tr id="table_43_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O MaryO you full of grace Who are
                engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_43_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for usOn judgment dayYour Son granted
                us salvationO daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_43_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy; a reading from the Gospel
                according to our teacher St. Luke [1: 46-50] the Evangelist. May his blessings be with us all. Amen.
            </td>
            <td class="arabic">قدوس قدوس قدوس .فصل من الإنجيل بحسب لوقا (١:٤٦ـ٥٠ ) البشير . بركاته تكون معنا . آمين.
            </td>
        </tr>
        <tr id="table_43_row_17">
            <td class="coptic" style="border-right: 1px solid black;">And Mary said, "My soul magnifies the Lord. And my
                spirit has rejoiced in God my Savior. For He has regarded the low estate of His handmaiden. For behold,
                from henceforth all generations shall call me blessed. For He that is mighty has done great things and
                Holy is His Name. And His mercy is on them that fear Him from generation to generation. And Glory be to
                God forever. Amen</td>
            <td class="arabic">فقالت مريم تعظم نفسى الرب . وتتهلل روحى بالله مخلصى لأنه نظر إلى تواضع أمته . هوذا منذ
                الآن تعطينى الطوبى. جميع الأجيال . صنع بى القوى عظائم. قدوس اسمه ورحمته إلى جيل الأجيال لخائفيه"
                والمجد لله دائماً أبدياً . آمين.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_44" data-title="Your Table Title Here"
        onclick="toggleTable('table_44', this)">+ Your Table Title Here</span>
    <table id="table_44" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_44_row_0">
            <td class="coptic" style="border-right: 1px solid black;">2
                The Ark overlaid, roundabout with gold, that was made, with wood that would not decay:</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲃˉ
                Ϯⲕⲓⲃⲱⲧⲟⲥ ⲉⲧⲟϣϫ : ̀ⲛⲛⲟⲃ ̀ⲛⲥⲁⲥⲁ ⲛⲓⲃⲉⲛ : ⲑⲏ̀ⲉⲧⲁⲩⲑⲁⲙⲓⲟⲥ : ϧⲉⲛϩⲁⲛϣⲉ ̀ⲛⲁⲧⲉⲣϩⲟⲗⲓ.</td>
            <td class="arabic">٢
                التابوت المصفح بالذهب من كل ناحية المصنوع من خشب لايسوس.</td>
        </tr>
        <tr id="table_44_row_1">
            <td class="coptic" style="border-right: 1px solid black;">It foretold the sign, of the God the Word, Who
                became man, Without separation:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲥⲉⲣϣⲟⲣⲡ ̀ⲛϯⲙⲏⲓⲛⲓ : ̀ⲙⲪϯ ⲡⲓⲗⲟⲅⲟⲥ : ⲫⲏ̀ⲉⲧⲁϥϣⲱⲡⲓ
                ̀ⲛⲣⲱⲙⲓ : ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲫⲱⲣϫ.</td>
            <td class="arabic">سبق أن دلنا على الله الكلمة.الذى صار انساناً بغير افتراق.</td>
        </tr>
        <tr id="table_44_row_2">
            <td class="coptic" style="border-right: 1px solid black;">One nature out of two, A Holy divinity,
                Co-Essential with the Father, and Incorruptible.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲁⲓ ⲡⲉ ̀ⲉⲃⲟⲗϧⲉⲛ ̀ ⲥⲛⲁⲩ : ⲟⲩⲙⲉⲑⲛⲟⲩϯ ⲉⲥⲧⲟⲩⲃⲏⲟⲩⲧ :
                ⲉⲥⲟⲓ ̀ⲛⲁⲧⲧⲁⲕⲟ : ̀ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙ ̀ Ⲫⲓⲱⲧ.</td>
            <td class="arabic">واحد من اثنين لاهوت قدوس بغير فساد مساو للآب.</td>
        </tr>
        <tr id="table_44_row_3">
            <td class="coptic" style="border-right: 1px solid black;">A Holy Humanity, Begotten without seed,
                Coessential with us, According to the Economy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲉⲙ ⲟⲩⲙⲉⲧⲣⲱⲙⲓ ⲉⲑⲟⲩⲁⲃ : ⲭⲱⲣⲓⲥ ⲥⲩⲛⲟⲩⲥⲓ̀ⲁ :
                ̀ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙⲁⲛ : ⲕⲁⲧⲁ ϯⲟⲓⲕⲟⲛⲟⲙⲓ̀ⲁ.</td>
            <td class="arabic">وناسوت طاهر بغير مباضعة مساو لنا كالتدبير.</td>
        </tr>
        <tr id="table_44_row_4">
            <td class="coptic" style="border-right: 1px solid black;">This which He Has taken, from you O undefiled, He
                made one with Him, As a hypostasis.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲁⲓ ̀ⲉⲧⲁϥϭⲓⲧⲥ ̀ⲛϧⲏϯ : ̀ⲱ ϯⲁⲧⲑⲱⲗⲉⲃ : ̀ⲉⲁϥϩⲱⲧⲡ ̀ⲉⲣⲟⲥ
                : ⲕⲁⲧⲁ ⲟⲩϩⲩⲡⲟⲥⲧⲁⲥⲓⲥ.</td>
            <td class="arabic">هذا الذى أخذه منك أيتها الغير الدنسة واتحد به كاقنوم.</td>
        </tr>
        <tr id="table_44_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_44_row_6">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions,With the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_44_row_7">
            <td class="coptic" style="border-right: 1px solid black;">All the souls together, of the children Of Israel,
                Brought offerings unto, The Tabernacle of the Lord:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ : ̀ⲛⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ : ⲁⲩ̀ⲓⲛⲓ
                ̀ⲛϩⲁⲛⲇⲱⲣⲟⲛ : ̀ⲉϯ̀ⲥⲕⲏⲛⲏ ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ.</td>
            <td class="arabic">كل الأنفس معاً من بنى إسرائيل قدموا قرابين إلى قبةالرب.</td>
        </tr>
        <tr id="table_44_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Gold and silver, And precious stone, Purple and
                scarlet, And fine linen.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲛⲟⲩⲃ ⲛⲉⲙ ⲡⲓϩⲁⲧ : ⲛⲉⲙ ⲡⲓ̀ⲱⲛⲓ̀ⲙⲙⲏⲓ : ⲛⲉⲙ ⲡⲓϣⲉⲛⲥ
                ⲉⲧⲥⲁϯ : ⲛⲉⲙ ⲡⲓϩⲩ̀ⲁⲕⲩⲛⲑⲓⲛⲟⲛ.</td>
            <td class="arabic">الذهب والفضة والحجر الكريم والحرير المغزول والأرجوان.</td>
        </tr>
        <tr id="table_44_row_9">
            <td class="coptic" style="border-right: 1px solid black;">And they made an ark, Of wood that would not
                decay, Overlaid with gold, Within and without.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲑⲁⲙⲓ̀ⲟ ̀ⲛⲟⲩⲕⲓⲃⲱⲧⲟⲥ : ϧⲉⲛ ϩⲁⲛϣⲉ ̀ⲛⲁⲧⲉⲣϩⲟⲗⲓ :
                ⲁⲩⲗⲁⲗⲱⲥ ̀ⲛⲛⲟⲃ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ.</td>
            <td class="arabic">صنعوا تابوتاً من خشب لايسوّس. وصفحوه بالذهب داخلاً وخارجاً.</td>
        </tr>
        <tr id="table_44_row_10">
            <td class="coptic" style="border-right: 1px solid black;">You too O Mary, Are clothed with the glory, Of the
                Divinity, Within and without.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉϫⲟⲗϩ ⲅⲁⲣ ϩⲱⲓ : Ⲙⲁⲣⲓ̀ⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ̀ⲙ̀ⲡ̀ⲱⲟⲩ ̀ⲛⲧⲉ
                ϯⲙⲉⲑⲛⲟⲩϯ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ.</td>
            <td class="arabic">وأنت أيضاً يامريم العذراء متسربلة بمجد اللاهوت داخلاً وخارجاً.</td>
        </tr>
        <tr id="table_44_row_11">
            <td class="coptic" style="border-right: 1px solid black;">For you have brought, Unto God your Son, Many
                people, Through your purity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲁⲣⲉ̀ⲓⲛⲓ ̀ⲉϧⲟⲩⲛ : ̀ⲛⲟⲩⲗⲁⲟⲥ ⲉϥⲟϣ : ̀ⲙⲪϯ ⲡⲉϣⲏⲣⲓ :
                ϩⲓⲧⲉⲛ ⲡⲉⲧⲟⲩⲃⲟ.</td>
            <td class="arabic">لانك قدمت شعباً كثيراً لله ابنك من قبل طهارتك.</td>
        </tr>
        <tr id="table_44_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_44_row_13">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ : ϯⲃⲁⲕⲓ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_44_row_14">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_45" data-title="Your Table Title Here"
        onclick="toggleTable('table_45', this)">+ Your Table Title Here</span>
    <table id="table_45" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_45_row_0">
            <td class="coptic" style="border-right: 1px solid black;">The Lord said to Moses
                In a loud voice to call him
                Arise and build an ark for Me
                And overlay it with gold</td>
            <td class="arabic">قال الرب لموسىبصوت عالى يناديهقم إصنع لى تابوتاًوبالذهب إطليه</td>
        </tr>
        <tr id="table_45_row_1">
            <td class="coptic" style="border-right: 1px solid black;">So therein may dwell My secrets
                And also my covenant
                From shittim wood
                And overlaid with gold</td>
            <td class="arabic">لأضع سرى فيهوأجعل عهدى فيهمن خشب لايسوسوبالذهب تطلون</td>
        </tr>
        <tr id="table_45_row_2">
            <td class="coptic" style="border-right: 1px solid black;">You were likened, O Mary
                To the overlaid ark
                And in it the golden vessel
                With the rational manna</td>
            <td class="arabic">تشبهت يامريمبتابوت العهد المطلىوفيه القسط ذهببالمن العقلى</td>
        </tr>
        <tr id="table_45_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Your praise in my tongue
                Is sweeter than honey
                We offer praise to You
                O daughter of Zion</td>
            <td class="arabic">مديحك فى فمىأحلى من العسلنقرئك كل سلامياابنة صهيون</td>
        </tr>
        <tr id="table_45_row_4">
            <td class="coptic" style="border-right: 1px solid black;">O shining star
                As a lit lamp
                You held the Son of God
                The Living Who is unseen</td>
            <td class="arabic">يانجمة تضوىكمصباح النورحملت إبن اللهالحى غير المنظور</td>
        </tr>
        <tr id="table_45_row_5">
            <td class="coptic" style="border-right: 1px solid black;">He saved Adam
                After the bondage
                And returned him and his sons
                Joyfully to Paradise</td>
            <td class="arabic">وأنقذ آدمبعد أن كان مأسوروعاد هو وبنوهإلى الفردوس وهم فرحون</td>
        </tr>
        <tr id="table_45_row_6">
            <td class="coptic" style="border-right: 1px solid black;">You enlightened the world
                After it was in darkness
                And you carried in your womb
                The Son; The Logos of God</td>
            <td class="arabic">نورت العالمبعد أن كان ظلمةوحملت فى أحشاكإبن اللة الكلمة</td>
        </tr>
        <tr id="table_45_row_7">
            <td class="coptic" style="border-right: 1px solid black;">You are the ark
                You are the wisdom
                You are our strength
                And the joy of the upright</td>
            <td class="arabic">انت هى التابوتانت هى الحكمةانت هى قوتناوفرح الصديقون</td>
        </tr>
        <tr id="table_45_row_8">
            <td class="coptic" style="border-right: 1px solid black;">In due time,
                God desired and chose you
                And sent unto you the Logos
                With the Holy Spirit in you</td>
            <td class="arabic">لما أراد اللهوشاء واختاركوأرسل إليك الكلمةبروح قدسه زانك</td>
        </tr>
        <tr id="table_45_row_9">
            <td class="coptic" style="border-right: 1px solid black;">You held in your womb
                The Lord your God
                You nourished Him with your milk
                Like the rest of the humans</td>
            <td class="arabic">وحملت فى أحشاكالرب إلهكولدتيه ورضع لبنككسائر البشريين</td>
        </tr>
        <tr id="table_45_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Ezekiel prophesied
                In a vision and said,
                “I saw an eastern door
                Closed at all sides</td>
            <td class="arabic">حزقيال تنباًفى رؤياه وقالرأيت باباً فى المشرقمقفولا بالأقفال</td>
        </tr>
        <tr id="table_45_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Therein entered and came forth
                The Most High King
                And no harm came to it
                And it was continuously sealed.”</td>
            <td class="arabic">دخل فيه وخرجالملك المتعالولم يمسه ضرروبحاله مختومين</td>
        </tr>
        <tr id="table_45_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Many witnessed of you
                In prophecies and proverbs
                He shall come forth from you
                The exalted Lord</td>
            <td class="arabic">وكم شهدوا عنكفى نبوات وأمثالسوف يظهر منكالرب المتعال</td>
        </tr>
        <tr id="table_45_row_13">
            <td class="coptic" style="border-right: 1px solid black;">He shall save His people
                At the end of days
                Your Son granted us salvation
                O censer of Aaron</td>
            <td class="arabic">ويخلص شعبهفى آخر الأجيالبابنك نلنا الغفرانياشورية هارون</td>
        </tr>
        <tr id="table_45_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O MaryO you full of grace Who are
                engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_45_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for usOn judgment dayYour Son granted
                us salvationO daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_45_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy; a reading from the Gospel
                according to our teacher St. Luke [1: 51-55] the Evangelist. May his blessings be with us all. Amen.
            </td>
            <td class="arabic">قدوس قدوس قدوس .فصل من الانجيل بحسب لوقا (١:٥١-٥٥ ) البشير . بركاته تكون معنا . آمين.
            </td>
        </tr>
        <tr id="table_45_row_17">
            <td class="coptic" style="border-right: 1px solid black;">He has shown strength with His arm; He has
                scattered the proud in the imagination of their hearts. He has put down the mighty from their thrones
                and exalted the lowly. He has filled the hungry with good things and the rich He has sent away empty. He
                has helped His servant Israel, In remembrance of His mercy, As He spoke to our fathers, To Abraham and
                to his seed forever." And Glory be to God forever. Amen</td>
            <td class="arabic">صنع قوة بذراعه. وفرق المستكبرين بفكر قلوبهم. أنزل الأقوياء عن الكراسى، ورفع المتواضعين
                أشبع الجياع من الخيرات. وأرسل الأغنياء فارغين. عضد إسرائيل فتاه‘ وذكر رحمة كما قال لآبائنا إبراهيم وزرعه
                إلى الأبد.
                والمجد لله دائماً أبدياً آمين</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_46" data-title="Your Table Title Here"
        onclick="toggleTable('table_46', this)">+ Your Table Title Here</span>
    <table id="table_46" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_46_row_0">
            <td class="coptic" style="border-right: 1px solid black;">3</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲅˉ</td>
            <td class="arabic">٣</td>
        </tr>
        <tr id="table_46_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The Mercy Seat, was overshadowed by, the forged
                Cherubim, from all sides.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ⲓⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ̀ⲉⲧⲟⲩϩⲱⲃⲥ ̀ⲙⲙⲟϥ : ϩⲓⲧⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ
                : ⲉⲩⲟⲓ ̀ⲛϩⲓⲕⲱⲛ.</td>
            <td class="arabic">الغطاء المظلل عليه بالكروبين المصورين.</td>
        </tr>
        <tr id="table_46_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Was a symbol of God the Word, Who was incarnate,
                of you without change, O undefiled.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲉⲧⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ : ̀ⲉⲧⲁϥϭⲓⲥⲁⲣⲝ ̀ⲛϧⲏϯ : ̀ⲱ ϯⲁⲧⲁϭⲛⲓ
                : ϧⲉⲛ ⲟⲩⲙⲉⲧ ⲁⲧϣⲓⲃϯ.</td>
            <td class="arabic">اى الله الكلمة الذى تجسد منك أيتها التى بلا عيب بغير تغير.</td>
        </tr>
        <tr id="table_46_row_3">
            <td class="coptic" style="border-right: 1px solid black;">He became the purification, Of our sins, And the
                forgiveness, Of our iniquities.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϣⲱⲡⲓ ̀ⲛⲧⲟⲩⲃⲟ : ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ : ⲛⲉⲙ ⲟⲩⲣⲉϥⲭⲱ ̀ⲉⲃⲟⲗ
                : ̀ⲛⲧⲉ ⲛⲉⲛ ⲁⲛⲟⲙⲓ̀̀ⲁ.</td>
            <td class="arabic">وصار تطهيراً لخطايانا وغافراً لآثامنا.</td>
        </tr>
        <tr id="table_46_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_46_row_5">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_46_row_6">
            <td class="coptic" style="border-right: 1px solid black;">The two golden Cherubim, Continually cover, with
                their wings, The Mercy Seat.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲟⲩⲃⲓⲙ ̀ ⲥⲛⲁⲩ ̀ⲛⲛⲟⲩⲃ : ⲉⲩⲟⲓ ̀ⲛϩⲓⲕⲱⲛ : ⲉⲩϩⲱⲃⲥ
                ̀ⲙⲡⲓ̀ⲓⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ϧⲉⲛ ⲛⲟⲩⲧⲉⲛϩ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">كروبا ذهب مصوران مظللان على الغطاء باجنحتهما كل حين.</td>
        </tr>
        <tr id="table_46_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Overshadowing, The place of The Holy, of the
                Holies, In the Second Tabernacle.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩⲉⲣϧⲏⲓⲃⲓ ̀ⲉ̀ϩⲣⲏⲓ : ϩⲓϫⲉⲛ ⲡⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ
                ⲛⲏⲉⲑⲟⲩⲁⲃ : ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ ̀ⲙⲙⲁϩ̀ⲥⲛⲟⲩϯ.</td>
            <td class="arabic">يظللان على موضع قدس الأقداس فى القبة الثانية .</td>
        </tr>
        <tr id="table_46_row_8">
            <td class="coptic" style="border-right: 1px solid black;">You too O Mary, Thousands of thousands, And
                myriads of myriads, Overshadow you:</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟ ϩⲱⲓ Ⲙⲁⲣⲓ̀ⲁ : ⲛⲓⲁⲛⲁⲁⲛϣⲟ ̀ⲛϣⲟ : ⲛⲉⲙ
                ⲛⲓⲁⲛⲁ̀ⲛ̀ⲑⲃⲁ ̀ⲛ̀ⲑⲃⲁ : ⲥⲉⲉⲣϧⲏⲓⲃⲓ ̀ⲉϫⲱ.</td>
            <td class="arabic">وأنت أيضاً يامريم الوف الوف وربوات ربوات يظللون عليك.</td>
        </tr>
        <tr id="table_46_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Praising their Creator, Who was in your womb, And
                took our likeness, Without sin or alteration.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩϩⲱⲥ ̀ⲉⲡⲟⲩⲣⲉϥⲥⲱⲛⲧ : ⲉϥⲭⲏ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ : ϥⲁⲓ ̀ⲉⲧⲁϥϭⲓ
                ̀ⲙⲡⲉⲛ̀ⲓⲛⲓ : ⲭⲱⲣⲓⲥ ⲛⲟⲃⲓ ϩⲓϣⲓⲃϯ.</td>
            <td class="arabic">مسبحين خالقهم وهو فى بطنك. هذا الذى أخذ شبهنا ما خلا الخطية والتغيير.</td>
        </tr>
        <tr id="table_46_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_46_row_11">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ : ϯⲃⲁⲕⲓ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_46_row_12">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_47" data-title="Your Table Title Here"
        onclick="toggleTable('table_47', this)">+ Your Table Title Here</span>
    <table id="table_47" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_47_row_0">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, you became
                An altar for forgiveness
                And on it the golden gifts
                And the showbread, which was the Body</td>
            <td class="arabic">يامريم صرتمذبح للغفرانوعليه المايدة ذهبوفيه الجسد قربان</td>
        </tr>
        <tr id="table_47_row_1">
            <td class="coptic" style="border-right: 1px solid black;">It was the Son of the Living God
                Who gives forgiveness
                To every pure person
                Who lives in the paradise of Joy</td>
            <td class="arabic">هو إبن الله الحىالمعطى الغفرانلكل نقى طاهريسكن نعيم الفردوس</td>
        </tr>
        <tr id="table_47_row_2">
            <td class="coptic" style="border-right: 1px solid black;">You are the high altar
                Who is engulfed in Light
                And Its Light shines brightly
                And fills all the earth</td>
            <td class="arabic">أنت هى المذبح العالىالمشتملة بالأنوارونوره يتلألأملأ كل الاقطار</td>
        </tr>
        <tr id="table_47_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Your light, O Mary
                Exceeds the sun and the moon
                You're higher than all ranks
                And all the hosts</td>
            <td class="arabic">وضوئك يامريمفاق كل شموس وأقمارفقت كل مراتبوسائر كل طقوس</td>
        </tr>
        <tr id="table_47_row_4">
            <td class="coptic" style="border-right: 1px solid black;">You exceeded the elders
                And the four beasts
                And also the thrones
                The principalities and the powers</td>
            <td class="arabic">فقت الرؤساءوالأربعة الحيواناتوأيضاً الكراسىوالأرباب والقوات</td>
        </tr>
        <tr id="table_47_row_5">
            <td class="coptic" style="border-right: 1px solid black;">You held the Son of God
                The Creator of all things
                The Life Giver
                To every body and soul</td>
            <td class="arabic">حملت ابن اللهخالق كل المخلوقاتمعطى كل حياةلكل جسد ونفوس</td>
        </tr>
        <tr id="table_47_row_6">
            <td class="coptic" style="border-right: 1px solid black;">O flower of incense
                The aroma of your incense spread
                O star that shines
                That shines as a lamp</td>
            <td class="arabic">يازهرة الأطياببخورك عنبر فاحيانجمة تضوىتضئ كالمصباح</td>
        </tr>
        <tr id="table_47_row_7">
            <td class="coptic" style="border-right: 1px solid black;">O you full of grace
                O you who are our joy
                Your Son granted us salvation
                And the Paradise of Joy</td>
            <td class="arabic">يامملوءة نعمةيابدء الافراحبابنك نلنا الخلاصونعيم الفردوس</td>
        </tr>
        <tr id="table_47_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Daniel prophesied
                In a vision and said
                I saw a Throne surrounded by Light
                And upon it sat the Lord of hosts</td>
            <td class="arabic">دانيال تنبأفى رؤياه بثباتقال رأيت كرسياً من نوروعليه رب القوات</td>
        </tr>
        <tr id="table_47_row_9">
            <td class="coptic" style="border-right: 1px solid black;">And around Him thousands and thousands,
                Myriads and myriads,
                While praising God,
                The Holy King.</td>
            <td class="arabic">وحوله ألوف ألوفربوات مع طغماتيسبحون اللهالملك القدوس</td>
        </tr>
        <tr id="table_47_row_10">
            <td class="coptic" style="border-right: 1px solid black;">You were likened, O Mary;
                With the Throne of God the Creator,
                You held the Son of God,
                The living and unseen.</td>
            <td class="arabic">تشبهت يامريمبكرسى الله الخالقوحملت ابن اللهالحى الناطق</td>
        </tr>
        <tr id="table_47_row_11">
            <td class="coptic" style="border-right: 1px solid black;">The fathers called you,
                The eastern door,
                Many spoke of you,
                O Virgin and bride.</td>
            <td class="arabic">سماك الآباءباب المشارقوكم وصفوا عنكيابكرة وعروس</td>
        </tr>
        <tr id="table_47_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The Lord has chosen you,
                From the root of Jesse,
                From the pure and sanctified seed,
                The house of prophesy and rulers.</td>
            <td class="arabic">الرب إختاركمن أصل يسىمن نسل نقى طاهربيت النبوة والرؤساء</td>
        </tr>
        <tr id="table_47_row_13">
            <td class="coptic" style="border-right: 1px solid black;">You held Him in your womb,
                O Virgin and bride,
                You gave birth to Him and He drank your milk,
                Like all the humans.</td>
            <td class="arabic">وحملتيه فى أحشاكيابكره وعروسولدتيه ورضع لبنكهوس رومى إنتى ليوس</td>
        </tr>
        <tr id="table_47_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O MaryO you full of grace Who are
                engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_47_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for usOn judgment dayYour Son granted
                us salvationO daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_47_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy; a reading from the Gospel
                according to our teacher St. Luke [1: 68-72] the Evangelist. May his blessings be with us all. Amen.
            </td>
            <td class="arabic">قدوس قدوس قدوس .فصل من الانجيل بحسب لوقا (١:٦٨ـ٧٢) البشير . بركاته تكون معنا . آمين.
            </td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_48" data-title="Your Table Title Here"
        onclick="toggleTable('table_48', this)">+ Your Table Title Here</span>
    <table id="table_48" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_48_row_0">
            <td class="coptic" style="border-right: 1px solid black;">4
                You are the Pot, Made of pure gold, Wherein was hidden, The True Manna:</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲇˉ
                ̀ Ⲛⲑⲟ ⲡⲉ ⲡⲓ̀ⲥⲧⲁⲙⲛⲟⲥ : ̀ⲛⲛⲟⲩⲃ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ : ̀ⲉⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ : ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲧⲉϥⲙⲏϯ.</td>
            <td class="arabic">٤
                أنت هى قسط الذهب النقى المخفى المن فى وسطه.</td>
        </tr>
        <tr id="table_48_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The Bread of Life, Which came down for us, from
                heaven, gave life Unto the world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲱⲓⲕ ̀ⲛⲧⲉ ̀ⲡⲱⲛϧ : ̀ⲉⲧⲁϥ̀ⲓ ̀ⲉⲡⲉⲥⲏⲧ : ⲛⲁⲛ ̀ⲉⲃⲟⲗϧⲉⲛ
                ̀ⲧⲫⲉ : ⲁϥϯ ̀ⲙ̀ⲡⲱⲛϧ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">خبز الحياة الذى نزل لنا من السماء وأعطى الحياة للعالم.</td>
        </tr>
        <tr id="table_48_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady, the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_48_row_3">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_48_row_4">
            <td class="coptic" style="border-right: 1px solid black;">It befits you, to be called, The golden Pot, where
                the Manna was hidden.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ϥⲧⲱⲙⲓ ⲅⲁⲣ ̀ⲉⲣⲟ : ⲉⲑⲣⲟⲩⲙⲟⲩϯ ̀ⲉⲡⲉⲣⲁⲛ : ϫⲉ
                ⲡⲓ̀ⲥⲧⲁⲙⲛⲟⲥ ̀ⲛⲛⲟⲩⲃ : ̀ⲉⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ ̀ⲛϧⲏⲧϥ .</td>
            <td class="arabic">يليق بك أن يدعى اسمك قسط الذهب المخفى فية المن .</td>
        </tr>
        <tr id="table_48_row_5">
            <td class="coptic" style="border-right: 1px solid black;">For that was kept, In the Tabernacle, As a
                testimony, to The children of Israel:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ ⲙⲉⲛ ̀ⲉⲧⲉ ̀ⲙⲙⲁⲩ : ϣⲁⲩⲭⲁϥ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ :
                ̀ⲛⲟⲩⲙⲉⲧⲙⲉⲑⲣⲉ : ̀ⲛⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">فذاك وضع فى القبة شهادة لبنى اسرائيل.</td>
        </tr>
        <tr id="table_48_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Of the good things, That the Lord God, Did unto
                them, In the wilderness of Sinai.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲛⲓⲡⲉⲑⲛⲁⲛⲉⲩ : ⲉⲧⲁϥⲁⲓⲧⲟⲩ ⲛⲉⲙⲱⲟⲩ : ̀ⲛϫⲉ Ⲡϭⲟⲓⲥ Ⲫϯ
                : ϩⲓ ̀ⲡϣⲁϥⲉ ̀ⲛⲤⲓⲛⲁ.</td>
            <td class="arabic">من أجل الخيرات التى صنعها معهم الرب الاله فى برية سيناء.</td>
        </tr>
        <tr id="table_48_row_7">
            <td class="coptic" style="border-right: 1px solid black;">You too O Mary, Have carried in your womb, The
                rational Manna, That came from the Father.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟ ϩⲱⲓ Ⲙⲁⲣⲓ̀ⲁ : ̀ⲁⲣⲉϥⲁⲓ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ ̀ⲙⲡⲓⲙⲁⲛⲛⲁ
                ̀ⲛⲛⲟ̀ⲏⲧⲟⲛ : ̀ⲉⲧⲁϥ̀ⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ̀  Ⲫⲓⲱⲧ.</td>
            <td class="arabic">وأنت أيضاً يامريم حملت فى بطنك المن العقلى الذى أتى من الآب.</td>
        </tr>
        <tr id="table_48_row_8">
            <td class="coptic" style="border-right: 1px solid black;">You bore Him without blemish. He gave unto us, His
                honored Body and Blood, And we live forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀  Ⲁⲣⲉⲙⲁⲥϥ ⲁϭⲛⲉ ⲑⲱⲗⲉⲃ : ⲁϥϯ ⲛⲁⲛ ̀ⲙⲡⲉϥⲥⲱⲙⲁ : ⲛⲉⲙ
                ⲡⲉϥ̀ⲥⲛⲟϥ  ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲁⲛⲱⲛϧ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">وولدته بغير دنس. وأعطانا جسده ودمه الكريميين فحيينا إلى الآبد .</td>
        </tr>
        <tr id="table_48_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_48_row_10">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ : ϯⲃⲁⲕⲓ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_48_row_11">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_49" data-title="Your Table Title Here"
        onclick="toggleTable('table_49', this)">+ Your Table Title Here</span>
    <table id="table_49" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_49_row_0">
            <td class="coptic" style="border-right: 1px solid black;">O precious golden vessel
                Which concealed the Manna
                It was a symbol
                Of you O Theotokos</td>
            <td class="arabic">ياقسط ذهب غالىوالمن مخفى فيهرمزاً وإشارةعليك ياوالدة الإله</td>
        </tr>
        <tr id="table_49_row_1">
            <td class="coptic" style="border-right: 1px solid black;">O the precious gem
                O you the ship of our salvation
                Blessed are you O Mary
                The daughter of Zion</td>
            <td class="arabic">ياحجر الجوهرياسفينة النجاةطوباك يامريمياإبنه صهيون</td>
        </tr>
        <tr id="table_49_row_2">
            <td class="coptic" style="border-right: 1px solid black;">O ladder of Jacob
                You held the Judge
                And He dwelt in your womb
                You gave birth to the Son of Man</td>
            <td class="arabic">ياسلم يعقوبحملت الديانوصار فى أحشاك المحجوبوولدت ابن الانسان</td>
        </tr>
        <tr id="table_49_row_3">
            <td class="coptic" style="border-right: 1px solid black;">He healed all the sick,
                And opened the eyes of the blind
                And raised the dead
                After their burial</td>
            <td class="arabic">وشفى كل المرضىوفتح أعين العميانوأقام الميتبعد أن كان مدفون</td>
        </tr>
        <tr id="table_49_row_4">
            <td class="coptic" style="border-right: 1px solid black;">You are Aaron's rod
                That blossomed
                O the dome of Moses
                That is filled with light</td>
            <td class="arabic">ياعصاة هروننورت الازهارياقبة موسىالمملوءة أنوار</td>
        </tr>
        <tr id="table_49_row_5">
            <td class="coptic" style="border-right: 1px solid black;">You are a planted vineyard
                That bears the Fruit
                Your Son granted us forgiveness
                O hidden gem</td>
            <td class="arabic">وكرمة مغروسةحاملة الأثماروبابنك نلنا الغفرانياجوهر مكنون</td>
        </tr>
        <tr id="table_49_row_6">
            <td class="coptic" style="border-right: 1px solid black;">David said in the psalm,
                While playing on his harp
                “The Lord chose Zion
                And came and dwelt in her.”</td>
            <td class="arabic">داود قال فى المزموروقال على القيثاراتالرب اختار صهيونوسكن فيها بثبات</td>
        </tr>
        <tr id="table_49_row_7">
            <td class="coptic" style="border-right: 1px solid black;">These are all symbols
                Signs that resemble you
                O Mary
                O daughter of Zion</td>
            <td class="arabic">هذا كله مثالورمزاً واشاراتعليك يامريمياابنة صهيون</td>
        </tr>
        <tr id="table_49_row_8">
            <td class="coptic" style="border-right: 1px solid black;">The Lord chose your beauty
                And God dwelt in your womb
                You gave birth to Him
                And He drank your milk</td>
            <td class="arabic">الرب اختار حسنكوسكن فيك الإلهولدتيه ورضع لبنثدييك بفيه</td>
        </tr>
        <tr id="table_49_row_9">
            <td class="coptic" style="border-right: 1px solid black;">You are greatly exalted
                You became the highest heaven
                You are above all ranks
                The righteous and the saints</td>
            <td class="arabic">ارتفعت جداًوصرت كأعلا سماهفقت كل الرؤساءوالأبرار والصديقين</td>
        </tr>
        <tr id="table_49_row_10">
            <td class="coptic" style="border-right: 1px solid black;">You're above the Cherubim
                O the pride of virgins
                And higher than the Seraphim
                Which are full of light</td>
            <td class="arabic">فقت الشاروبيمياست الأبكاروأيضاً السيرافيمالمملوءة أنوار</td>
        </tr>
        <tr id="table_49_row_11">
            <td class="coptic" style="border-right: 1px solid black;">O daughter of Joachim
                From the upright seed
                Your Son saved Adam
                After his bondage</td>
            <td class="arabic">ياإبنة يواقيممن نسل الأبرارابنك خلص آدمبعد أن كان مسجون</td>
        </tr>
        <tr id="table_49_row_12">
            <td class="coptic" style="border-right: 1px solid black;">O you full of grace,
                More pure than everyone,
                O mother of the Merciful,
                O you brighter than all light.</td>
            <td class="arabic">يامملوءة نعمةياطهر الأطهارياأم الرحمةيانور الأنوار</td>
        </tr>
        <tr id="table_49_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Your Son illuminated the darkness,
                And made us free,
                We inherited the kingdom,
                Through baptism and Holy Myron.</td>
            <td class="arabic">بابنك زالت الظلمةوقد صرنا أحراروورثنا الملكوتبعمادنا بالميرون</td>
        </tr>
        <tr id="table_49_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O MaryO you full of grace Who are
                engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_49_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for usOn judgment dayYour Son granted
                us salvationO daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_49_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy; a reading from the Gospel
                according to our teacher St. Luke [1: 73-77] the Evangelist. May his blessings be with us all. Amen.
            </td>
            <td class="arabic">قدوس قدوس قدوس .فصل من الانجيل بحسب لوقا (١:٧٣-٧٧) البشير . بركاته تكون معنا . آمين.
            </td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_50" data-title="Your Table Title Here"
        onclick="toggleTable('table_50', this)">+ Your Table Title Here</span>
    <table id="table_50" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_50_row_0">
            <td class="coptic" style="border-right: 1px solid black;">5
                You are the lampstand, Made of pure gold, Carrying, the ever-burning lamp.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲉˉ
                ̀ Ⲛⲑⲟ ⲧⲉ ϯⲗⲩⲭⲛⲓ̀ⲁ : ̀ⲛⲛⲟⲩⲃ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓⲗⲁⲙⲡⲁⲥ : ⲉⲑⲙⲟϩ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">٥
                أنت المنارة الذهب النقى الحاملة المصباح المتقد كل حين .</td>
        </tr>
        <tr id="table_50_row_1">
            <td class="coptic" style="border-right: 1px solid black;">That is the unapproachable, light of the world,
                that proceeds from, the Unapproachable light.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲉⲧⲉ ̀ⲫⲟⲩⲱⲓⲛⲓ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ : ⲡⲓⲁⲧ̀ϣϧⲱⲛⲧ ̀ⲉⲣⲟϥ : ⲡⲓ
                ̀ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲟⲩⲱⲓⲛⲓ : ̀ⲛⲁⲧ̀ϣϧⲱⲛⲧ ̀ⲉⲣⲟϥ.</td>
            <td class="arabic">الذى هو نور العالم غير المقترب اليه. الذى من النور غير المُدني منه.</td>
        </tr>
        <tr id="table_50_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The True God, out of True God, Who was incarnate,
                Of you without change.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲛⲟⲩϯ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ : ̀ⲉⲃⲟⲗϧⲉⲛ ⲟⲩⲛⲟⲩϯ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ :
                ̀ⲉⲧⲁϥϭⲓⲥⲁⲣⲝ ̀ⲛϧⲏϯ : ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ.</td>
            <td class="arabic">الاله الحق من الاله الحق . الذى تجسد منك بغير تغيير.</td>
        </tr>
        <tr id="table_50_row_3">
            <td class="coptic" style="border-right: 1px solid black;">By His coming, He gave light to us, Who were
                sitting in darkness, And in the shadow of death.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲧⲉϥⲡⲁⲣⲟⲩⲥⲓ̀ⲁ : ⲁϥ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲉⲣⲟⲛ : ϧⲁ
                ⲛⲏⲉⲧϩⲉⲙⲥⲓ ϧⲉⲛ ̀ⲡⲭⲁⲕⲓ : ⲛⲉⲙ ̀ⲧϧⲏⲓⲃⲓ ̀ⲙ̀ⲫⲙⲟⲩ.</td>
            <td class="arabic">بظهوره اضاء علينا نحن الجلوس فى الظلمة وظلال الموت.</td>
        </tr>
        <tr id="table_50_row_4">
            <td class="coptic" style="border-right: 1px solid black;">And He guided our feet, in the path of peace,
                Through the communion, Of His Holy sacraments.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲥⲟⲩⲧⲉⲛ ⲛⲉⲛϭⲁⲗⲁⲩϫ : ̀ⲉ̀ⲫⲙⲱⲓⲧ ̀ⲛⲧⲉ ϯϩⲓⲣⲏⲛⲏ : ϩⲓⲧⲉⲛ
                ϯⲕⲟⲓⲛⲱⲛⲓ̀ⲁ : ̀ⲛⲧⲉ ⲛⲉϥⲙⲩⲥⲧⲏⲣⲓⲟⲛ  ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">وقوّم أرجلنا إلى طريق السلام بشركة أسراره المقدسة.</td>
        </tr>
        <tr id="table_50_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_50_row_6">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions,With the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀  Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_50_row_7">
            <td class="coptic" style="border-right: 1px solid black;">All the ranks on high, cannot resemble you, O
                golden lampstand, that carries the True Light.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀  Ⲩⲥⲟⲥ ⲛⲓⲃⲉⲛ  ⲉⲧϧⲉⲛ ̀ⲡϭⲓⲥⲓ : ̀ⲙⲡⲟⲩ̀ϣⲧⲉⲛⲑⲱⲛⲟⲩ ̀ⲉⲣⲟ
                : ̀ⲱ ϯⲗⲩⲭⲛⲓ̀ⲁ  ̀ⲛⲛⲟⲩⲃ : ⲉⲧϥⲁⲓϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ ̀ⲙⲙⲏⲓ.</td>
            <td class="arabic">كل الرتب العلوية لم تقدر أن تشبهك أيتها المنارة الذهبية حاملة النور الحقيقي.</td>
        </tr>
        <tr id="table_50_row_8">
            <td class="coptic" style="border-right: 1px solid black;">That was made of, Pure and chosen gold, And was
                placed, in The Tabernacle.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲏⲙⲉⲛ ̀ⲉⲧⲉ ̀ⲙⲙⲁⲩ : ϣⲁⲩⲑⲁⲙⲓⲟⲥ ϧⲉⲛ ⲟⲩⲛⲟⲩⲃ : ⲉϥⲥⲱⲧⲡ
                ̀ⲛⲕⲁⲑⲁⲣⲟⲥ : ϣⲁⲩⲭⲁⲥ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ.</td>
            <td class="arabic">فتلك صًنعت من ذهب مختار نقى ووضعت فى القبة.</td>
        </tr>
        <tr id="table_50_row_9">
            <td class="coptic" style="border-right: 1px solid black;">That was managed, by the hands of men, Who brought
                oil for its lamps, By day and by night.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉⲉⲣⲕⲉⲃⲉⲣⲛⲓⲧⲏⲥ ̀ⲉⲣⲟⲥ : ϩⲓⲧⲉⲛ ϩⲁⲛϫⲓϫ ̀ⲛⲣⲱⲙⲓ :
                ⲉⲩϯⲛⲉϩ ̀ⲛⲥⲁ ⲛⲉⲥ  ⲗⲁⲙⲡⲁⲥ : ̀ⲙⲡⲓ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲉϫⲱⲣϩ.</td>
            <td class="arabic">تُدبر بايدى البشر . اذ يعطى زيت لمصابيحها نهاراً وليلاً.</td>
        </tr>
        <tr id="table_50_row_10">
            <td class="coptic" style="border-right: 1px solid black;">He Who dwelt in your womb, O Virgin Mary, gives
                light to every man, who comes into the world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏⲉⲧⲭⲏ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ : Ⲙⲁⲣⲓ̀ⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ
                ̀ⲉⲣⲱⲙⲓ ⲛⲓⲃⲉⲛ : ⲉⲑⲛⲏⲟⲩ ̀ⲉⲡⲓⲕⲟⲥⲙⲟⲥ .</td>
            <td class="arabic">والذى فى بطنك يا مريم العذراء اضاء لكل انسان آت الى العالم.</td>
        </tr>
        <tr id="table_50_row_11">
            <td class="coptic" style="border-right: 1px solid black;">For He Whom you gave birth to, Is the Sun of
                Righteousness, And He has healed us, of all our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟϥ ⲅⲁⲣ ⲡⲉ ̀ⲫⲣⲏ : ̀ⲛⲧⲉ ϯⲇⲓⲕⲉ̀ⲟⲥⲩⲛⲏ : ̀ⲁⲣⲉⲙⲁⲥϥ
                ⲁϥⲧⲁⲗϭⲟⲛ : ̀ⲉⲃⲟⲗϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">لانه هو شمس البر. ولدته وشفانا من خطايانا.</td>
        </tr>
        <tr id="table_50_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_50_row_13">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ : ϯⲃⲁⲕⲓ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_50_row_14">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_51" data-title="Your Table Title Here"
        onclick="toggleTable('table_51', this)">+ Your Table Title Here</span>
    <table id="table_51" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_51_row_0">
            <td class="coptic" style="border-right: 1px solid black;">The Lord spoke to Moses
                Upon the mount saying
                Arise, build a lampstand
                Overlay it with the chosen gold</td>
            <td class="arabic">الله كلم موسىفوق جبل الطور أجهارقم أصنع منارةمن الذهب المختار</td>
        </tr>
        <tr id="table_51_row_1">
            <td class="coptic" style="border-right: 1px solid black;">And upon it seven candles
                To shine by day and night
                From the inside of the dome
                And from the ark</td>
            <td class="arabic">وفيها سبعة سرجتنير ليل و نهارمن داخل القبةنيم تى كيفوتوس</td>
        </tr>
        <tr id="table_51_row_2">
            <td class="coptic" style="border-right: 1px solid black;">He made it according to the plan
                And built the lampstand
                Out of precious gold
                Blessed are you O chosen</td>
            <td class="arabic">فصنع موسى كما قالوصنع المنارةمن الذهب العالطوباك يامختارة</td>
        </tr>
        <tr id="table_51_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you, O Mary
                You gave meaning to the symbols
                Your light dawned upon us
                We the Christians</td>
            <td class="arabic">طوباك يامريمفسرت الامثالونورك اشرق فيناانون خانى إخريستيانوس</td>
        </tr>
        <tr id="table_51_row_4">
            <td class="coptic" style="border-right: 1px solid black;">You are the lampstand
                That is filled with light
                And its light shined
                Upon all the earth</td>
            <td class="arabic">أنت هى المنارةالمملوءة انواروشعاع نورها أشرقعلى كل الأقطار</td>
        </tr>
        <tr id="table_51_row_5">
            <td class="coptic" style="border-right: 1px solid black;">O Mary, you are higher
                Than all the upright fathers
                His Holy Spirit came upon you
                The Holy Lord</td>
            <td class="arabic">وعليت يامريمعن الآباء الأبرارحل بروح قدسهفيك الرب القدوس</td>
        </tr>
        <tr id="table_51_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Moses did see you
                Upon Mount Tabor
                A planted tree
                Engulfed in light</td>
            <td class="arabic">رآك موسىفوق جبل الطورشجرة مغروسةمحاطة بالأنوار</td>
        </tr>
        <tr id="table_51_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Through you O Mary
                We became victorious
                No one has received
                What you have been granted</td>
            <td class="arabic">بك يامريم فزنابفرح وبهجة وسرورمن نال مانلتفى سائر بى كوسموس</td>
        </tr>
        <tr id="table_51_row_8">
            <td class="coptic" style="border-right: 1px solid black;">There is no one like you
                On earth or in heaven
                The Lord favored you
                Above all the creations</td>
            <td class="arabic">ليس من يشبهكفى الأرض ولا فى السمواتوالرب فضلكعن كل المخلوقات</td>
        </tr>
        <tr id="table_51_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Many spoke of you,
                In prophesies and proverbs,
                The fathers called you,
                The fair dove.</td>
            <td class="arabic">وقد شهدوا عنكفى اسفار ونبواتسماك الآباءتى إتشرومبى إثنيسوس</td>
        </tr>
        <tr id="table_51_row_10">
            <td class="coptic" style="border-right: 1px solid black;">David your father,
                In the psalms did say,
                “The Lord choose your beauty,
                And increased you in splendor.</td>
            <td class="arabic">داود أبوكفى المزمور قد قالالرب إختار حسنكوزادك نور وجمال</td>
        </tr>
        <tr id="table_51_row_11">
            <td class="coptic" style="border-right: 1px solid black;">He dwelt in your womb,
                Nine full months,
                You gave birth to Him & He drank your milk,
                According to the angel's decree.”</td>
            <td class="arabic">وحل فى بطنكتسعة أشهر بكمالولدتيه ورضع لبنككبشارة بى أنجيلوس</td>
        </tr>
        <tr id="table_51_row_12">
            <td class="coptic" style="border-right: 1px solid black;">He likewise said,
                O mother of Man,
                A Man dwelt in her,
                The Most High King.</td>
            <td class="arabic">وقال ايضاًياأم الإنسانوإنسان حل فيهاوهو الملك الديان</td>
        </tr>
        <tr id="table_51_row_13">
            <td class="coptic" style="border-right: 1px solid black;">He Who overshadowed her,
                And sent her His Holy Spirit,
                You gave birth to the True God,
                The Creator of souls.</td>
            <td class="arabic">الذى انشأهاوأرسل لها روح قدسه ببيانووضعت الله الحقالخالق كل نفوس</td>
        </tr>
        <tr id="table_51_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O MaryO you full of grace Who are
                engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_51_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for usOn judgment dayYour Son granted
                us salvationO daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_51_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy; a reading from the Gospel
                according to our teacher St. Luke [1: 78-79] the Evangelist. May his blessings be with us all. Amen.
            </td>
            <td class="arabic">قدوس قدوس قدوس .فصل من الانجيل بحسب لوقا )١:٧٨-٧٩(البشير . بركاته تكون معنا . آمين.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_52" data-title="Your Table Title Here"
        onclick="toggleTable('table_52', this)">+ Your Table Title Here</span>
    <table id="table_52" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_52_row_0">
            <td class="coptic" style="border-right: 1px solid black;">6
                You are the censer, Made of pure gold, Carrying the blessed, and Live coal.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲋˉ
                ̀ Ⲛⲑⲟ ⲧⲉ ϯϣⲟⲩⲣⲏ : ̀ⲛⲛⲟⲩⲃ ̀ⲛⲕⲁⲑⲁⲣⲟⲥ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϫⲉⲃⲥ : ̀ⲛ̀ⲭⲣⲱⲙ ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ.</td>
            <td class="arabic">٦
                أنت هى المجمرة الذهب النقى حاملة جمر النار المباركة.</td>
        </tr>
        <tr id="table_52_row_1">
            <td class="coptic" style="border-right: 1px solid black;">That is taken, From the Altar, To purge the sins,
                and take away the iniquities.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏⲉⲧⲟⲩϭⲓ ̀ⲙⲙⲟϥ : ̀ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲙⲁ ̀ⲛⲉⲣϣⲱⲟⲩϣⲓ :
                ϣⲁϥⲧⲟⲩⲃⲟ ̀ⲛⲛⲓⲛⲟⲃⲓ: ̀ⲛⲧⲉϥ̀ⲱⲗⲓ ̀ⲛⲛⲓ̀ⲁⲛⲟⲙⲓ̀ⲁ.</td>
            <td class="arabic">الذى يؤخذ من المذبح يطهر الخطايا ويمحو الآثام.</td>
        </tr>
        <tr id="table_52_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Which is God the Word, Who was incarnate of you,
                And offered Himself as incense, to God His Father.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲉⲧⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ : ̀ⲉⲧⲁϥϭⲓⲥⲁⲣⲝ ̀ⲛϧⲏϯ : ⲁϥⲟⲗϥ
                ̀ⲉ̀ⲡϣⲱⲓ ̀ⲛⲟⲩ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ : ϣⲁ Ⲫϯ  Ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">أى الله الكلمة الذى تجسد منك ورفع ذاتة بخوراً إلى الله أبيه.</td>
        </tr>
        <tr id="table_52_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_52_row_4">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions, With the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀  Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_52_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore truly, I do not err, Whenever I call
                you, The golden censer.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲟⲧⲉ  ̀ⲁⲗⲏⲑⲱⲥ :  ̀ⲛϯϣⲱϥⲧ  ⲁⲛ  ̀ⲛ̀ϩⲗⲓ : ⲁⲓϣⲁⲛⲙⲟⲩϯ 
                ̀ⲉⲣⲟ  : ϫⲉ ϯϣⲟⲩⲣⲏ ̀ⲛⲛⲟⲩⲃ.</td>
            <td class="arabic">حينئذ بالحقيقة لا أخطيئ فى شئ إذا ما دعوتك المجمرة الذهب.</td>
        </tr>
        <tr id="table_52_row_6">
            <td class="coptic" style="border-right: 1px solid black;">For therein, Is offered, The chosen incense,
                Before the Holiest.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲏ ⲙⲉⲛ ̀ⲉⲧⲉ ̀ⲙⲙⲁⲩ : ϣⲁⲩⲧⲁⲗⲟ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲛϧⲏⲧⲥ :
                ̀ⲙⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ : ̀ⲙⲡⲉ̀ⲙⲑⲟ ̀ⲛⲛⲏⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">فتلك يًرفع فيها البخور المختار أمام الأقدس.</td>
        </tr>
        <tr id="table_52_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Wherein God takes away, The sins of the people,
                Through the burnt offerings, And the aroma of incense.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲣⲉ Ⲫϯ ̀ⲱⲗⲓ ̀ⲙⲙⲁⲩ : ̀ⲛⲛⲓⲛⲟⲃⲓ ̀ⲛⲧⲉ ⲡⲓⲗⲁⲟⲥ :
                ̀ⲉⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲓ̀ϭⲗⲓⲗ : ⲛⲉⲙ ⲡⲓ̀ⲥⲑⲟⲓ ̀ⲛⲧⲉ ⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ.</td>
            <td class="arabic">ويرفع الله هناك خطايا الشعب من قبل المحرقات ورائحةالبخور.</td>
        </tr>
        <tr id="table_52_row_8">
            <td class="coptic" style="border-right: 1px solid black;">You too O Mary, Have carried in your womb, The
                Invisible, Word Of the Father.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟ Ϩⲱⲓ Ⲙⲁⲣⲓ̀ⲁ : ̀ⲁⲣⲉϥⲁⲓ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ :
                ̀ⲙⲡⲓⲁⲧ̀ϣⲛⲁⲩ ̀ⲉⲣⲟϥ : ̀ⲛⲗⲟⲅⲟⲥ ̀ⲛⲧⲉ ̀  Ⲫⲓⲱⲧ .</td>
            <td class="arabic">وأنت يامريم حملت فى بطنك الغير منظور كلمة الآب.</td>
        </tr>
        <tr id="table_52_row_9">
            <td class="coptic" style="border-right: 1px solid black;">He who offered Himself, As an acceptable
                sacrifice, Upon the Cross, For the salvation of our race.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲓ ̀ⲉⲧⲁϥⲉⲛϥ ̀ⲉ̀ⲡϣⲱⲓ : ̀ⲛⲟⲩⲑⲩⲥⲓ̀ⲁ ⲉⲥϣⲏⲡ : ϩⲓϫⲉⲛ
                ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ : ϧⲁ ̀ⲡⲟⲩϫⲁⲓ ̀ⲙⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">هذا الذى أصعد ذاته ذبيحة مقبولة على الصليب عن خلاص جنسنا.</td>
        </tr>
        <tr id="table_52_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_52_row_11">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ : ϯⲃⲁⲕⲓ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_52_row_12">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_53" data-title="Your Table Title Here"
        onclick="toggleTable('table_53', this)">+ Your Table Title Here</span>
    <table id="table_53" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_53_row_0">
            <td class="coptic" style="border-right: 1px solid black;">You are Aaron's censer,
                Who carries the Ember,
                Its incense and aroma,
                Filled all the universe.</td>
            <td class="arabic">ياشورية هرونالحاملة جمر الناروبخورها وعنبرهاملأ كل الأقطار</td>
        </tr>
        <tr id="table_53_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Your presence O Mary,
                Has saved us from hell's fire,
                The promise was fulfilled through you,
                As was prophesied.</td>
            <td class="arabic">بوجودك يامريمفزنا من حر الناروبك تم الموعودكما عنك تنبأون</td>
        </tr>
        <tr id="table_53_row_2">
            <td class="coptic" style="border-right: 1px solid black;">You are the censer,
                In it are the ointment and incense,
                You held the Son of God,
                Light of Light.</td>
            <td class="arabic">أنت هى الشوريةفيها طيب وبخورحملت إبن اللهإله نور من نور</td>
        </tr>
        <tr id="table_53_row_3">
            <td class="coptic" style="border-right: 1px solid black;">He dwelt in your womb,
                For nine months,
                You gave birth to Him & He drank your milk,
                Like all humans.</td>
            <td class="arabic">وحل فى بطنكتسعة شهورولدتيه ورضع لبنككسائر المخلوقين</td>
        </tr>
        <tr id="table_53_row_4">
            <td class="coptic" style="border-right: 1px solid black;">You are Aaron's censer,
                In it is the incense Ember,
                O daughter of David,
                O precious stone.</td>
            <td class="arabic">ياشورية هارونفيها بخور من عنبر ياإبنة داودياحجر الجوهر</td>
        </tr>
        <tr id="table_53_row_5">
            <td class="coptic" style="border-right: 1px solid black;">You held the worshipped,
                And He appeared from you,
                He freed those in bondage,
                And trampled down Satan.</td>
            <td class="arabic">حملت المعبودوظهر منك أجهاروفك كل وثاقاتوكثر فخ الاركون</td>
        </tr>
        <tr id="table_53_row_6">
            <td class="coptic" style="border-right: 1px solid black;">You are the censer,
                The aroma of your incense spread,
                And filled all the earth,
                And through you we received joy,</td>
            <td class="arabic">انت هى الشوريةبخور طيبك فاحوملأ المسكونةوبك نلنا الأفراح</td>
        </tr>
        <tr id="table_53_row_7">
            <td class="coptic" style="border-right: 1px solid black;">We offer you praise,
                In the eve and in the morn,
                O pillar of faith,
                For the Orthodox people.</td>
            <td class="arabic">نقرئك كل سلامفى كل مساء وصباحياعمود دينالأرثوذكســــــــــييـن</td>
        </tr>
        <tr id="table_53_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Solomon spoke of you,
                In the Song of Songs,
                “My sister and my friend,
                The Lord favored her.</td>
            <td class="arabic">سليمان قال عنكفى نشيد الأنشادأختى وصديقتىواليكالرب اراد</td>
        </tr>
        <tr id="table_53_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Your sweet aroma spread,
                From the Ember and increased,
                He gave symbols of you,
                In many prophecies.</td>
            <td class="arabic">روائح طيبك فاحمن عنبر وزادوقال عنك امثالفى النبوات يشهدون</td>
        </tr>
        <tr id="table_53_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you, O Mary,
                O the mother of Jesus Christ,
                O pure sanctuary,
                And the shelter of the Holy.</td>
            <td class="arabic">طوباك يامريمأم ايسوس بى اخريستوسياهيكل طاهروحجاب للقدوس</td>
        </tr>
        <tr id="table_53_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Protect your Son's people,
                Deacons and presbyters,
                And all the lay people,
                And those gathered together.</td>
            <td class="arabic">احفظى شعب ابنكشمامسة وقسوسوجميع من فى البيعةالشعب المجتمعون</td>
        </tr>
        <tr id="table_53_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Mary,
                O sanctuary for protection,
                Your Light dawned upon us,
                And filled all the earth.</td>
            <td class="arabic">السلام لك يامريمياهيكل منصاننورك أشرق فيناوملأ كل الأكوان</td>
        </tr>
        <tr id="table_53_row_13">
            <td class="coptic" style="border-right: 1px solid black;">You held the Creator,
                The Son of God, the Judge,
                You gave birth to His Humanity,
                With the united Divinity.</td>
            <td class="arabic">وحملت الخالقابن الله الديانوولدتيه انسانباللاهوت متحدون</td>
        </tr>
        <tr id="table_53_row_14">
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_53_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O MaryO you full of grace Who are
                engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_53_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for usOn judgment dayYour Son granted
                us salvationO daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_53_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Holy, Holy, Holy; a reading from the Gospel
                according to our teacher St. Luke [2: 29-32] the Evangelist. May his blessings be with us all. Amen.
            </td>
            <td class="arabic">قدوس قدوس قدوس .فصل من الانجيل بحسب لوقا (٢:٢٩-٣٢(البشير . بركاته تكون معنا . آمين.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_54" data-title="Your Table Title Here"
        onclick="toggleTable('table_54', this)">+ Your Table Title Here</span>
    <table id="table_54" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_54_row_0">
            <td class="coptic" style="border-right: 1px solid black;">(The Gospel According to St. Luke) (CH. 2: 29-32)
            </td>
            <td class="coptic" style="border-right: 1px solid black;">( Ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ) ( ⲃˉ : ⲕˉⲑˉ )</td>
            <td class="arabic">( الأنجيل من لوقا) (٢:٢٩-٣٢(</td>
        </tr>
        <tr id="table_54_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Lord, now You are letting Your servant depart in
                peace, according to Your word: For my eyes have seen Your salvation, Which You have prepared before the
                face of all peoples; A light to bring revelation to the Gentiles, and the glory of Your people Israel.
                Glory be to God forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲛ ⲛⲟⲩ ⲡⲁⲛⲏⲃ ̀ⲭⲛⲁⲭⲁ ⲡⲉⲕⲃⲱⲕ ̀ⲉⲃⲟⲗ : ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ
                ⲕⲁⲧⲁ ⲡⲉⲕⲥⲁϫⲓ : ϫⲉ ⲁⲩⲛⲁⲩ ̀ⲛϫⲉ ⲛⲁⲃⲁⲗ ̀ⲉⲡⲉⲕⲛⲟϩⲉⲙ : ⲫⲏ̀ⲉⲧⲁⲕ ⲥⲉⲃⲧⲱⲧϥ ̀ⲙⲡⲉ ̀ⲙⲑⲟ ̀ⲛⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ. Ⲟⲩⲟⲩⲱⲓⲛⲓ
                ⲉⲩϭⲱⲣⲡ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ϩⲁⲛⲉⲑⲛⲟⲥ : ⲛⲉⲙ ⲟⲩ̀ⲱⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ Ⲡⲓⲥⲣⲁⲏⲗ .</td>
            <td class="arabic">الآن ياسيد تطلق عبدك بسلام كقولك. لأن عينىّ قد ابصرتا خلاصك الذى أعددتة قدام جميع الشعوب.
                نوراً تجلى للأمم ومجداً لشعبك اسرائيل.</td>
        </tr>
        <tr id="table_54_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary, The beautiful dove, Who gave
                birth, to God the Word for us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ     Ⲙⲁⲣⲓ̀ⲁ   :   ϯϭⲣⲟⲙⲡⲓ    ⲉⲑⲛⲉⲥⲱⲥ   
                :     ⲑⲏ̀ⲉⲧⲁⲥⲙⲓⲥⲓ      ⲛⲁⲛ  :   ̀ⲙⲪϯ    ⲡⲓⲗⲟⲅⲟⲥ  .</td>
            <td class="arabic">السلام لك يا مريم الحمامة الحسنة التي ولدت لنا الله الكلمة.</td>
        </tr>
        <tr id="table_54_row_3">
            <td class="coptic" style="border-right: 1px solid black;">You are the flower, Of incense, that has
                blossomed, from The root of Jesse.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟ   ⲧⲉ   ϯ̀ϩⲣⲏⲣⲓ   :   ̀ⲛⲧⲉ ⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ  
                :     ⲑⲏⲉⲧⲁⲥⲫⲓⲣⲓ ̀ⲉⲃⲟⲗ    :   ϧⲉⲛ     ̀ⲑⲛⲟⲩⲛⲓ    ̀ⲛⲒⲉⲥⲥⲉ  .</td>
            <td class="arabic">أنت زهرة البخور التي أينعت من أصل يسىّ.</td>
        </tr>
        <tr id="table_54_row_4">
            <td class="coptic" style="border-right: 1px solid black;">The rod of Aaron, Which blossomed, Without
                planting or watering, Is a symbol of you.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ϣⲃⲱⲧ      ̀ⲛⲧⲉ    Ⲁⲁⲣⲱⲛ     ⲉⲧⲁϥⲫⲓⲣⲓ     
                ̀ⲉⲃⲟⲗ     :   ⲭⲱⲣⲓⲥ   ϭⲟ   ⲛⲉⲙ    ̀ⲧⲥⲟ    :    ̀ϥⲟⲓ   ̀ⲛⲧⲩⲡⲟⲥ    ⲛⲉ.</td>
            <td class="arabic">عصا هرون التي أزهرت بغير غرس ولا سقى هى مثال لك.</td>
        </tr>
        <tr id="table_54_row_5">
            <td class="coptic" style="border-right: 1px solid black;">You who gave birth to Christ, Our true God,
                Without the seed of man, and Remained a virgin.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲱⲑⲏⲉⲧⲁⲥⲙⲉⲥ    Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ:       Ⲡⲉⲛⲛⲟⲩϯ ϧⲉⲛ    
                ⲟⲩⲙⲉⲑⲙⲏⲓ : ⲁϭⲛⲉ     ̀ⲥⲡⲉⲣⲙⲁ ̀ⲛⲣⲱⲙⲓ: ⲉⲥⲟⲓ  ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ  .</td>
            <td class="arabic">يامن ولدت المسيح إلهنا بالحقيقة وبغير زرع بشر وأنت عذراء.</td>
        </tr>
        <tr id="table_54_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore everyone, Magnifies you, O my lady the
                Mother of God, The ever holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ̀ⲙⲙⲟ : ⲧⲁϭⲟⲓⲥ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
        </tr>
        <tr id="table_54_row_7">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, Through
                your intercessions,With the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
        <tr id="table_54_row_8">
            <td class="coptic" style="border-right: 1px solid black;">You are called righteous, O St. Mary, The Second
                Tabernacle, belonging to the Holies.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉⲙⲟⲩϯ ̀ⲉⲣⲟ ⲇⲓⲕⲉⲟⲥ : ̀ⲱ ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓ̀ⲁ : ϫⲉ
                ϯⲙⲁϩ̀ⲥⲛⲟⲩϯ ̀ⲛ̀ⲥⲕⲏⲛⲏ : ̀ⲛⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ .</td>
            <td class="arabic">مدعوة أنت بالحقيقة أيتها القديسة مريم القبة التي للأقداس.</td>
        </tr>
        <tr id="table_54_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Wherein is placed, The rod of Aaron, And the holy
                flower, of incense.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲏⲉⲧⲟⲩⲭⲏ ̀ⲛϧⲏⲧⲥ : ̀ⲛϫⲉ ⲡⲓ̀ϣⲃⲱⲧ ̀ⲛⲧⲉ Ⲁⲁⲣⲱⲛ : ⲛⲉⲙ
                ϯ̀ϩⲣⲏⲣⲓ ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ.</td>
            <td class="arabic">تلك الموضوع فيها عصا هرون والزهرة المقدسة التى للبخور.</td>
        </tr>
        <tr id="table_54_row_10">
            <td class="coptic" style="border-right: 1px solid black;">You are clothed with purity, Within and without, O
                pure Tabernacle, the dwelling of the righteous.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉϫⲟⲗϩ ̀ⲙⲡⲓⲧⲟⲩⲃⲟ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ : ̀ⲱ ϯ̀ⲥⲕⲏⲛⲏ
                ̀ⲛⲕⲁⲑⲁⲣⲟⲥ : ̀ⲫⲙⲁ̀ⲛϣⲱⲡⲓ ̀ⲛⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
            <td class="arabic">أنت مشتملة بالطهارة من داخل ومن خارج أيتها القبة النقية مسكن الصديقين.</td>
        </tr>
        <tr id="table_54_row_11">
            <td class="coptic" style="border-right: 1px solid black;">The hosts of the high standings, And the chorus of
                the just, glorify You, and Your blessedness.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲧⲁⲅⲙⲁ ̀ⲛⲧⲉ ̀ⲡϭⲓⲥⲓ : ⲛⲉⲙ ̀ⲡⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ ⲛⲓ̀ⲑⲙⲏⲓ :
                ⲥⲉⲉⲣⲉⲩⲇⲟⲝⲁⲍⲓⲛ : ̀ⲛⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
            <td class="arabic">طغمات العلاء وصفوف الابرار يمجدون طوباويتك.</td>
        </tr>
        <tr id="table_54_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we, magnify you befittingly, With
                prophetic, Hymnology.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ̀ⲙⲙⲟ ̀ⲁⲝⲓⲱⲥ : ϧⲉⲛ
                ϩⲁⲛ̀ⲩⲙⲛⲟⲗⲟⲅⲓ̀ⲁ : ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
        </tr>
        <tr id="table_54_row_13">
            <td class="coptic" style="border-right: 1px solid black;">For they spoke of you, With great honor, O Holy
                City, Of the Great King.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ ⲉⲩⲧⲁⲓ̀ⲏⲟⲩⲧ : ϯⲃⲁⲕⲓ
                ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓⲛⲓϣϯ ̀ⲛⲟⲩⲣⲟ.</td>
            <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
        </tr>
        <tr id="table_54_row_14">
            <td class="coptic" style="border-right: 1px solid black;">We entreat and pray, That we may win mercy,
                Through your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ: ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_55" data-title="Your Table Title Here"
        onclick="toggleTable('table_55', this)">+ Your Table Title Here</span>
    <table id="table_55" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_55_row_0">
            <td class="coptic" style="border-right: 1px solid black;">You are called, O Theotokos
                The daughter of Joachim
                You became the highest heaven
                You're higher than the Cherubim</td>
            <td class="arabic">دعيت أم اللهياإبنة يواقيموصرت كأعلا سماهوفقت الكاروبيم</td>
        </tr>
        <tr id="table_55_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The Fountain of Life came forth from You
                He healed all the sick
                He returned the lost sheep
                To the Paradise of Joy</td>
            <td class="arabic">ظهر منك ينبوع الحياةوأبرأ كل سقيمورد الخروف الضالوحطم فخ الأركون</td>
        </tr>
        <tr id="table_55_row_2">
            <td class="coptic" style="border-right: 1px solid black;">You are the dome of Moses
                That is filled with Light
                You are the ark of covenant
                Containing the secrets</td>
            <td class="arabic">ياقبة موسىيامملوءة انوارياتابوت العهدوفيه كل الاسرار</td>
        </tr>
        <tr id="table_55_row_3">
            <td class="coptic" style="border-right: 1px solid black;">O the flower of incense
                Your aroma filled the earth
                O precious treasure
                O Aaron's rod</td>
            <td class="arabic">يازهرة الاطياببخورك ملأ الأقطارياكنز الجوهرياعصاة هرون</td>
        </tr>
        <tr id="table_55_row_4">
            <td class="coptic" style="border-right: 1px solid black;">O golden vessel
                In it the hidden Manna
                O pure sanctuary
                Wherein God was delighted and dwelled</td>
            <td class="arabic">ياقسط ذهب غالىوالمن مخفى فيهياهيكل طاهرأحبه الله وسكن فيه</td>
        </tr>
        <tr id="table_55_row_5">
            <td class="coptic" style="border-right: 1px solid black;">He who believes in Him
                Shall live after death
                O you pure altar
                Carrying the hidden secrets</td>
            <td class="arabic">ومن يؤمن باسمهبعد الموت يحييهيامذبح طاهرحامل السر المكنون</td>
        </tr>
        <tr id="table_55_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Mary
                O favored above all virgins
                The fathers called you,
                “The golden lampstand”</td>
            <td class="arabic">السلام لك يامريمياست العذارىسماك الآباءكنزاً ومنارة</td>
        </tr>
        <tr id="table_55_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Many spoke of you
                With symbols and proverbs
                O the aroma of Ember
                In Aaron's censer</td>
            <td class="arabic">وكم ضربوا عنكرمزاً وإشارةيا بخور العنبرفى شورية هارون</td>
        </tr>
        <tr id="table_55_row_8">
            <td class="coptic" style="border-right: 1px solid black;">O sanctuary and protection
                A dwelling place for the Trinity
                O Throne of God the Father
                The Lord of Hosts</td>
            <td class="arabic">ياهيكل وحجابمسكن للثالوثياكرسى الله الآبرب الصاباؤوت</td>
        </tr>
        <tr id="table_55_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Through you O Mary we were awarded
                The kingdom of Joy
                Blessed are you O Mary
                The sister of Solomon</td>
            <td class="arabic">بك يا مريم فزنابنعيم الملكوتطوباك يامريمإتسونى ان سولومون</td>
        </tr>
        <tr id="table_55_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget your servant
                For I am a poor sinner
                I plead for your intercessions
                On judgment day</td>
            <td class="arabic">لاتنسى عبدكلأنى خاطى ومسكينوأرجو شفاعتكفى الموقف يوم الدين</td>
        </tr>
        <tr id="table_55_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Before Christ your Son
                Be unto me a helper and provider
                So He may forgive me
                The multitude of sins</td>
            <td class="arabic">عند يسوع ابنككونى لى عوناً ومعينلكى يغفر لى ذنبىومن قد سلفون</td>
        </tr>
        <tr id="table_55_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O Mary
                O you full of grace
                Who are engulfed in light
                O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريميامملوءة نعمةيامشتملة بالانوار ياام الرحمة</td>
        </tr>
        <tr id="table_55_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for us
                On judgment day
                Your Son granted us salvation
                O daughter of Zion</td>
            <td class="arabic">إشفعى فينافى يوم الزحمةبابنك نلنا الخلاص ياإبنة صهيون</td>
        </tr>
        <tr id="table_55_row_14">
            <td class="coptic" style="border-right: 1px solid black;">NO GOSPEL</td>
            <td class="english"></td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_56" data-title="Your Table Title Here"
        onclick="toggleTable('table_56', this)">+ Your Table Title Here</span>
    <table id="table_56" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_56_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">I start my praise
                Words from my heart
                I cry out and say
                A rhythmic song</td>
            <td class="arabic">أبدأ فيك بمديح نظم بقلب صحيحوأشرح فيك وأصيح قول غالي موزون</td>
        </tr>
        <tr id="table_56_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Every needy one
                Rejoices and feels calm
                You brought all joy
                To every living soul</td>
            <td class="arabic">بمديحك يرتاحكل ذليل محتاجيابدء الأفراحلك عندي عربون</td>
        </tr>
        <tr id="table_56_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">O sweet fruit
                Apple of my eye
                No one can deny
                You are from on high</td>
            <td class="arabic">ثمرة عربونىهى طب عيونىفى مدحك لامونىكم عنى يقولون</td>
        </tr>
        <tr id="table_56_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Gabriel came
                With tidings and name
                Emmanuel became
                In your womb the same</td>
            <td class="arabic">جاءك غبريالببشائر وأقوالوسكن فيك المتعالسر خفي مكنون</td>
        </tr>
        <tr id="table_56_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">The Logos dwelt
                Able and shined
                You became heaven
                Fruitful and green</td>
            <td class="arabic">حل بكلمتهوأشرق بقدرتهصرت كسمائهياعوسج بغصون</td>
        </tr>
        <tr id="table_56_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Savior of the world
                Became in your womb
                Was born of you
                The Holy Spirit in you</td>
            <td class="arabic">مخلص العالمصارفيك قائمواستيقظ النائمومخمور بفنون</td>
        </tr>
        <tr id="table_56_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">David in the Psalms
                Said you are the bride
                Offerings and gifts
                Was given to the One</td>
            <td class="arabic">داود فى المزمورقال بنات صوربهدايا ونذورقالوا فيك بفنون</td>
        </tr>
        <tr id="table_56_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Myriads and myriads
                Around the Throne Stands
                Hosts and ranks
                Many martyrs</td>
            <td class="arabic">ربوات ثم ألوفحول العرش وقوفوطغمات وصفوفوشهداء متصلون</td>
        </tr>
        <tr id="table_56_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">You are beyond
                Above all codes
                You are purity respond
                Any questions</td>
            <td class="arabic">زدت فى الأوصافعن كل الأوصافومشيتى بعفافوسميت صهيون</td>
        </tr>
        <tr id="table_56_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Witnessed by Salome
                The Virgin from the Womb
                Gave birth to Whom
                While sealed by the One</td>
            <td class="arabic">سالومى شهدتبأن العذراء وضعت آمنت وأعتقدتوالخاتم مصون</td>
        </tr>
        <tr id="table_56_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Isaiah had said
                That, your Son, Jesus
                Was born of you
                In the right season</td>
            <td class="arabic">أشعياء قال عنكبأن يسوع ابنكوخرج من بطنكونظرناه بعيون</td>
        </tr>
        <tr id="table_56_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Zephaniah proclaimed
                That Jesus appeared
                As rain and dew
                Surrounded by numerous ranks</td>
            <td class="arabic">صوفونيوس خبربأن يسوع يظهرشبه ندي ومطرحوله صفوف لايحصون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_57" data-title="Your Table Title Here"
        onclick="toggleTable('table_57', this)">+ Your Table Title Here</span>
    <table id="table_57" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_57_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">You are blessed
                You confused them all
                By the water and Spirit
                We conquered Satan</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">طوباك ثم طوباكحيرت العلماءبوجود الروح والماءقهرنا الأركون</td>
        </tr>
        <tr id="table_57_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Many thought in you
                That this was illegal
                Till He raised
                The dead and healed the sick</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">ظنوا فيك أقوامبإن الحبل ده حرامحتى حل وأقامالأموات والمجنون</td>
        </tr>
        <tr id="table_57_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">The fathers said
                A dome in a cloud
                The dome of the Church
                Your support we search</td>
            <td class="arabic" style="border-right: 1px solid black;">شبهك الاباءقبة وسحابةووضعوا بإجابةوجميعهم فيك
                محتارون</td>
            <td class="english"></td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_58" data-title="Your Table Title Here"
        onclick="toggleTable('table_58', this)">+ Your Table Title Here</span>
    <table id="table_58" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_58_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Many before came
                Praised and did not find Him
                Many came after Him
                But the Mighty was down</td>
            <td class="arabic">غلب أقوام سبقوهمدحوا مالحقوهجاءوا بعده وجدوهبسر خفى مكنون</td>
        </tr>
        <tr id="table_58_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">My heart rejoice
                For you are my choice
                O Mary we praise
                We cry with voices</td>
            <td class="arabic">فيك رضا قلبىمن شأن طلبىيامريم حسبيتاجي وأنا دون</td>
        </tr>
        <tr id="table_58_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">You are Moses dome
                Ornamented all
                In all four corners
                With instruments and arts</td>
            <td class="arabic">قبة موسى كانزخرفها بالألوانوجعل فيها الأركان بكل آله وفنون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_59" data-title="Your Table Title Here"
        onclick="toggleTable('table_59', this)">+ Your Table Title Here</span>
    <table id="table_59" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_59_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">God has in the dome
                Many prayers and calls
                The can is the love sign
                Were the manna in it</td>
            <td class="arabic" style="border-right: 1px solid black;">لله فى القبةصلوات وطلبةوالقسط علامة المحبةالمن
                فيه مكنون</td>
            <td class="english"></td>
        </tr>
        <tr id="table_59_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">A pure censer
                Holding the aroma
                You are the Ark of covenant
                Carrying the True Word</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">مجمرة التصعيدزهرة عطر تقيدياتابوت عهد جديدبصفائح وقرون</td>
        </tr>
        <tr id="table_59_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">You carried the Light
                Like seven minarets lit
                You're Aaron's rod
                Which alone blossomed</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">نالوا نور من نورسبع سرج ينيرونوقضيب كان مذخوربأسم الأب هرون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_60" data-title="Your Table Title Here"
        onclick="toggleTable('table_60', this)">+ Your Table Title Here</span>
    <table id="table_60" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_60_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">You are the altar
                With incense offered
                Many prophesied
                And were fulfilled</td>
            <td class="arabic">هيكل بموائد وبخور وصعائدوآيات وشواهدعنك يتنبأون</td>
        </tr>
        <tr id="table_60_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">All what they said
                In the dome they found
                As your purity showed
                Her virginity sealed</td>
            <td class="arabic">وجميع ما وضعوهفي القبة وجدوهولقدسك ذكروهعذراء بكر مصون</td>
        </tr>
        <tr id="table_60_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:
                Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">We ask of you
                To ask your Son
                O blessed Mary
                To forgive us</td>
            <td class="arabic">لازم نترجاكعند الابن عساك يامريم طوباكراعينا بعيون</td>
        </tr>
        <tr id="table_60_row_3">
            <td class="coptic" style="border-right: 1px solid black;">8</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲏˉ</td>
            <td class="arabic">٨</td>
        </tr>
        <tr id="table_60_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Seven times everyday: I will praise Your name:
                with all my heart: O God of everyone.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲍ ̀ⲛⲥⲟⲡ ̀ⲙⲙⲏⲛⲓ:̀ ̀ⲉⲃⲟⲗϧⲉⲛ ⲡⲁϩⲏⲧ ⲧⲏⲣϥ: ϯⲛⲁ̀ⲥⲙⲟⲩ
                ̀ⲉⲡⲉⲕⲣⲁⲛ: Ⲡϭⲟⲓⲥ ̀ⲙⲡⲓ̀ⲉ̀ⲡⲧⲏⲣϥ.</td>
            <td class="arabic">سبع مرات كل يوم من كل قلبي أبارك أسمك يارب الكل.</td>
        </tr>
        <tr id="table_60_row_5">
            <td class="coptic" style="border-right: 1px solid black;">I remembered Your name: and I was comforted: O
                King of the ages: and God of all gods.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓⲉⲣ̀ⲫⲙⲉⲩ̀ⲓ ̀ⲙⲡⲉⲕⲣⲁⲛ: ⲟⲩⲟϩ ⲁⲓϫⲉⲙⲛⲟⲙϯ: ̀ⲡⲟⲩⲣⲟ
                ̀ⲛⲛⲓ̀ⲉⲱⲛ: Ⲫϯ ̀̀ⲛⲧⲉ ⲛⲓⲛⲟⲩϯ.</td>
            <td class="arabic">ذكرت اسمك فتعزيت ياملك الدهور وإله الآلهة.</td>
        </tr>
        <tr id="table_60_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Jesus Christ our true God: who has come: for our
                salvation: was incarnate.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲡⲓ̀ⲁⲗⲏⲑⲓⲛⲟⲥ: ⲫⲏ̀ⲉⲧⲁϥ̀ⲓ
                ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ: ⲁϥⲉⲣⲥⲱⲙⲁⲧⲓⲕⲟⲥ.</td>
            <td class="arabic">يسوع المسيح الهنا الحقيقى الذى أتى من اجل خلاصنا متجسداً.</td>
        </tr>
        <tr id="table_60_row_7">
            <td class="coptic" style="border-right: 1px solid black;">He was incarnate: of the Holy Spirit: and of Mary:
                the pure bride.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϭⲓⲥⲁⲣⲝ ̀ⲉⲃⲟⲗ: ϧⲉⲛ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲛⲉⲙ ̀ⲉⲃⲟⲗϧⲉⲛ
                Ⲙⲁⲣⲓ̀ⲁ: ϯϣⲉⲗⲉⲧ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">وتجسد من الروح القدس ومن مريم العروس الطاهرة.</td>
        </tr>
        <tr id="table_60_row_8">
            <td class="coptic" style="border-right: 1px solid black;">And changed our sorrow: and all our troubles: to
                joy for our hearts: and total rejoicing.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲫⲱⲛϩ ̀ⲙⲡⲉⲛϩⲏⲃⲓ: ⲛⲉⲙ ⲡⲉⲛϩⲟϫϩⲉϫ ⲧⲏⲣϥ: ̀ⲉⲟⲩⲣⲁϣⲓ
                ̀ⲛϩⲏⲧ: ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ ̀ⲉ̀ⲡⲧⲏⲣϥ.</td>
            <td class="arabic">وقلب حزننا وكل ضيقنا إلى فرح قلب وتهليل كلى.</td>
        </tr>
        <tr id="table_60_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Let us worship Him: and sing to: His mother Mary:
                the beautiful dove.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲙⲟϥ: ⲟⲩⲟϩ ̀ⲛⲧⲉⲛⲉⲣϩⲩⲙⲛⲟⲥ: ̀ⲛⲧⲉϥⲙⲁⲩ
                Ⲙⲁⲣⲓ̀ⲁ: ϯ̀ϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
            <td class="arabic">فلنسجد له ونرتل لأمه مريم الحمامة الحسنة.</td>
        </tr>
        <tr id="table_60_row_10">
            <td class="coptic" style="border-right: 1px solid black;">And let us all proclaim: with the voice of joy:
                saying Hail to you Mary: the Mother of Emmanuel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ̀ⲛⲧⲉⲛⲱϣ ̀ⲉⲃⲟⲗ: ϧⲉⲛ ⲟⲩ̀ⲥⲙⲏ ̀ⲛⲑⲉⲗⲏⲗ: ϫⲉ ⲭⲉⲣⲉ ⲛⲉ
                Ⲙⲁⲣⲓ̀ⲁ: ̀ⲑⲙⲁⲩ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">ونصرخ بصوت التهليل قائلين السلام لك يامريم أم عمانوئيل.</td>
        </tr>
        <tr id="table_60_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the salvation of our father
                Adam: Hail...: the Mother of the refuge: Hail...: the rejoicing of Eve: Hail...: the joy of all
                generations.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲡⲥⲱϯ ̀ⲛⲀⲇⲁⲙ ⲡⲉⲛⲓⲱⲧ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ
                ̀ⲙⲡⲓⲙⲁ̀ⲙⲫⲱⲧ: ⲭˉⲉˉ : ̀ⲡⲑⲉⲗⲏⲗ ̀ⲛⲈⲩ̀ⲁ: ⲭˉⲉˉ :
                ̀ ⲡⲟⲩⲛⲟϥ ̀ⲛⲛⲓⲅⲉⲛⲉ̀ⲁ.</td>
            <td class="arabic">السلام لك يامريم خلاص أبينا آدم. السلام.. أم الملجأ. السلام .. تهليل حواء. السلام.. فرح
                الأجيال.</td>
        </tr>
        <tr id="table_60_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the joy of Abel the just:
                Hail...: the true Virgin: Hail...: the Salvation of Noah: Hail...: the chaste and undefiled.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲫⲣⲁϣⲓ ̀ⲛⲀⲃⲉⲗ ⲡⲓ̀ⲑⲙⲏⲓ: ⲭˉⲉˉ :
                ϯⲡⲁⲣⲑⲉⲛⲟⲥ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ: ⲭˉⲉˉ : ̀ⲫⲛⲟϩⲉⲙ ̀ⲛⲚⲱ̀ⲉ: ⲭˉⲉˉ :ϯⲁⲧⲑⲱⲗⲉⲃ ̀ⲛⲥⲉⲙⲛⲉ.</td>
            <td class="arabic">السلام لك يامريم فرح هابيل البار . السلام..العذراء الحقيقية. السلام.. خلاص نوح.
                السلام..غير الدنسة الهادئة.</td>
        </tr>
        <tr id="table_60_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the grace of Abraham: Hail...:
                the unfading crown: Hail...: the Redemption of Saint Isaac: Hail...: the Mother of The Holy.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲡ̀ϩⲙⲟⲧ ̀ⲛⲀⲃⲣⲁⲁⲙ: ⲭˉⲉˉ : ⲡⲓ̀ⲭⲗⲟⲙ
                ̀ⲛⲁⲑⲗⲱⲙ: ⲭˉⲉˉ : ̀ⲡⲥⲱϯ ̀ⲛⲒⲥⲁⲁⲕ ⲡⲉⲑⲟⲩⲁⲃ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ ̀ⲙⲫⲏⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">السلام لك يامريم نعمة ابراهيم. السلام .. الاكليل غير المضمحل. السلام.. خلاص اسحق القديس.
                السلام.. أم القدوس.</td>
        </tr>
        <tr id="table_60_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the rejoicing of Jacob: Hail...:
                Myriads of Myriads: Hail...: the pride of Judah: Hail...: the mother of the Master.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲡⲑⲉⲗⲏⲗ ̀ⲛⲒⲁⲕⲱⲃ: ⲭˉⲉˉ : ϩⲁⲛ̀ⲑⲃⲁ
                ̀ⲛⲕⲱⲃ: ⲭˉⲉˉ : ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲒⲟⲩⲇⲁ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ ̀ⲙⲡⲓⲇⲉⲥⲡⲟⲧⲁ.</td>
            <td class="arabic">السلام لك يامريم تهليل يعقوب. السلام.. ربوات مضاعفة. السلام.. فخر يهوذا. السلام .. ام
                السيد.</td>
        </tr>
        <tr id="table_60_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the preaching of Moses: Hail...:
                the Mother of the Master: Hail...: the honor of Samuel: Hail...: the pride of Israel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲡϩⲓⲱⲓϣ
                ̀ⲙⲘⲱ̀ⲩⲥⲏⲥ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ ̀ⲙⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ⲭˉⲉˉ : ̀ⲡⲧⲁⲓ̀ⲟ ̀ⲛⲤⲁⲙⲟⲩⲏⲗ: ⲭˉⲉˉ ̀ⲡϣⲟⲩϣⲟⲩ
                ̀ⲙⲠⲓ̀ⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">السلام لك يامريم كرازة موسى. السلام.. والدة السيد. السلام.. كرامة صموئيل. السلام.. فخر
                اسرائيل.</td>
        </tr>
        <tr id="table_60_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the steadfastness of Job the
                just : Hail...: the precious stone: Hail...: the Mother of the Beloved: Hail...: the daughter of King
                David.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲡⲧⲁϫⲣⲟ ̀ⲛⲒⲱⲃ ⲡⲓ̀ⲑⲙⲏⲓ: ⲭˉⲉˉ :
                ⲡⲓ̀ⲱⲛⲓ ̀ⲛ̀ⲁⲛⲁⲙⲏⲓ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ ̀ⲙⲡⲓⲙⲉⲛⲣⲓⲧ: ⲭˉⲉˉ : ̀ⲧϣⲉⲣⲓ ̀ⲙ̀ⲡⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">السلام لك يامريم ثبات ايوب البار. السلام.. الحجر الكريم. السلام..أم الحبيب. السلام.. ابنة
                الملك داود.</td>
        </tr>
        <tr id="table_60_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the friend of Solomon: Hail...:
                the exaltation of the righteous: Hail...: the redemption of Isaiah: Hail...: the healing of Jeremiah.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ϯ̀ϣⲫⲉⲣⲓ ̀ⲛⲤⲟⲗⲟⲙⲱⲛ: ⲭˉⲉˉ : ̀ⲡϭⲓⲥⲓ
                ̀ⲛⲛⲓⲇⲓⲕⲉⲟⲛ: ⲭˉⲉˉ : ̀ⲡⲟⲩϫⲁⲓ ̀ⲛⲎⲥⲁⲏⲁⲥ: ⲭˉⲉˉ : ̀ⲡⲧⲁⲗϭⲟ ̀ⲛⲒⲉⲣⲉⲙⲓⲁⲥ.</td>
            <td class="arabic">السلام لك يامريم صديقة سليمان. السلام.. رفعة الصديقين . السلام.. خلاص أشعياء. السلام..
                شفاء أرميا.</td>
        </tr>
        <tr id="table_60_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the knowledge of Ezekiel:
                Hail...: the grace of Daniel: Hail...: the power of Elijah: Hail...: the grace of Elisha.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲡⲉⲙⲓ ̀ⲛⲒⲉⲍⲉⲕⲓⲏⲗ: ⲭˉⲉˉ : ⲭⲁⲣⲓⲥ ⲧⲟⲩ
                Ⲇⲁⲛⲓⲏⲗ: ⲭˉⲉˉ : ̀ⲧϫⲟⲙ ̀ⲛⲎⲗⲓⲁⲥ: ⲭˉⲉˉ : ⲡⲓ̀ϩⲙⲟⲧ ̀ⲛⲈⲗⲓⲥⲉⲟⲥ.</td>
            <td class="arabic">السلام لك يامريم علم حزقيال. السلام.. نعمة دانيال. السلام ..قوة ايليا. السلام.. نعمة
                اليشع.</td>
        </tr>
        <tr id="table_60_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: the mother of God: Hail...: the
                Mother of Jesus Christ: Hail...: the beautiful dove: Hail...: the mother of the Son of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ ̀ⲛⲒⲏⲥⲟⲩⲥ
                Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ : ⲭˉⲉˉ :ϯ̀ϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲭˉⲉˉ : ̀ⲑⲙⲁⲩ ̀ⲛⲨⲓⲟⲥ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">السلام لك يامريم والدة الاله. السلام.. أم يسوع المسيح السلام.. الحمامة الحسناء.
                السلام..أم ابن الله.</td>
        </tr>
        <tr id="table_60_row_20">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you Mary: who was witnessed by: all the
                prophets: and they said:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ: ̀ⲉⲧⲁⲩⲉⲣⲙⲉⲑⲣⲉ ⲛⲁⲥ: ̀ⲛϫⲉ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ
                ⲧⲏⲣⲟⲩ: ⲟⲩⲟϩ ⲁⲩϫⲱ ̀ⲙⲙⲟⲥ.</td>
            <td class="arabic">السلام لمريم التى شهد لها جميع الانبياء وقالوا.</td>
        </tr>
        <tr id="table_60_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Behold God the Word: was incarnate of you: in an
                indescribable: unity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲏⲡⲡⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ: ̀ⲉⲧⲁϥϭⲓⲥⲁⲣⲝ ̀ⲛϧⲏϯ: ϧⲉⲛ
                ⲟⲩⲙⲉⲧⲟⲩⲁⲓ: ̀ⲛⲁⲧⲥⲁϫⲓ ̀ⲙⲡⲉⲥⲣⲏϯ.</td>
            <td class="arabic">هوذا الله الكلمة الذى تجسد منك بوحدانية لاينطق بمثلها.</td>
        </tr>
        <tr id="table_60_row_22">
            <td class="coptic" style="border-right: 1px solid black;">You are truly exalted: more than the rod: of
                Aaron: O full of grace.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉϭⲟⲥⲓ ̀ⲁⲗⲏⲑⲱⲥ: ̀ⲉϩⲟⲧⲉ ⲡⲓ̀ϣⲃⲱⲧ: ̀ⲛⲧⲉ Ⲁ̀ⲁⲣⲱⲛ: ̀ⲱ
                ⲑⲏⲉⲑⲙⲉϩ ̀ⲛ̀ϩⲙⲟⲧ.</td>
            <td class="arabic">مرتفعة أنت بالحقيقة أكثر من عصا هرون أيتها الممتلئة نعمة.</td>
        </tr>
        <tr id="table_60_row_23">
            <td class="coptic" style="border-right: 1px solid black;">What is the rod: but Mary: for it is the symbol:
                of her virginity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϣⲡⲉ ⲡⲓ̀ϣⲃⲱⲧ: ̀ⲉⲃⲏⲗ ̀ⲉⲘⲁⲣⲓ̀ⲁ: ϫⲉ ̀ⲛⲑⲟϥ ⲡⲉ
                ̀ⲡⲧⲩⲡⲟⲥ: ̀ⲛⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓ̀ⲁ.</td>
            <td class="arabic">ماهى العصا إلا مريم لانها مثال بتوليتها.</td>
        </tr>
        <tr id="table_60_row_24">
            <td class="coptic" style="border-right: 1px solid black;">She conceived and gave birth: without a man: to
                the son of the Highest: the word Himself.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲥⲉⲣⲃⲟⲕⲓ ⲁⲥⲙⲓⲥⲓ: ⲭⲱⲣⲓⲥ ⲥⲩⲛⲟⲩⲥⲓ̀ⲁ: ̀ⲙ̀ⲡϣⲏⲣⲓ
                ̀ⲙⲫⲏⲉⲧϭⲟⲥⲓ: ⲡⲓⲗⲟⲅⲟⲥ ̀ⲛⲁⲓⲇⲓ̀ⲁ.</td>
            <td class="arabic">حبلت وولدت بغير مباضعة ابن العلى الكلمة الذاتى.</td>
        </tr>
        <tr id="table_60_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Through her prayers: and intercessions: O Lord
                open onto us: the gates of the Church.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲉⲥⲉⲩⲭⲏ: ⲛⲉⲙ ⲛⲉⲥ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ: ̀ⲁⲟⲩⲱⲛ ⲛⲁⲛ Ⲡϭⲟⲓⲥ:
                ̀ⲙ̀ⲫⲣⲟ ̀ⲛⲧⲉ ϯⲉⲕ̀ⲕⲗⲏⲥⲓ̀ⲁ</td>
            <td class="arabic">بصلواتها وشفاعاتها أفتح لنا يارب باب الكنيسة.</td>
        </tr>
        <tr id="table_60_row_26">
            <td class="coptic" style="border-right: 1px solid black;">I entreat You: O mother of God: keep the gates of
                the church: open to the faithful.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϯϩⲟ ̀ⲉⲣⲟ: ̀ⲱ ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ: ⲭⲁ ̀ⲫⲣⲟ ̀ⲛⲛⲓⲉⲕ̀ⲕⲗⲏⲥⲓ̀ⲁ:
                ⲉϥⲟⲩⲏⲛ ̀ⲛⲛⲓⲡⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">اسألك ياوالدة الاله اجعلى ابواب الكنائس مفتوحة للمؤمنين.</td>
        </tr>
        <tr id="table_60_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Let us ask her: to intercede for us: before her
                beloved: that He may forgive us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛϯϩⲟ ̀ⲉⲣⲟⲥ: ⲉⲑⲣⲉⲥⲧⲱⲃϩ ̀ⲉϫⲱⲛ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲥⲙⲉⲛⲣⲓⲧ:
                ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">فلنسألها أن تطلب عنا عند حبيبها ليغفر لنا.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_61" data-title="Your Table Title Here"
        onclick="toggleTable('table_61', this)">+ Your Table Title Here</span>
    <table id="table_61" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_61_row_0">
            <td class="coptic" style="border-right: 1px solid black;">O Mary,
                Lady of virgins,
                you attained greatness,
                from the True Light,
                You are exalted,
                by the Lord Himself,
                you bore the Creator,
                O what a great marvel!</td>
            <td class="arabic">يا م ر ى مياست الأبكارقد نلت تعظيممن نور الأنوارووهبت تعظيممن عنده قد صاروحملت
                الخالقمن ذا لا يحتار</td>
        </tr>
        <tr id="table_61_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Ya meem reh yeh meem,
                qad nelty taazeem,
                wa wohebty taazeem,
                wa Hamalty al-khaleq,</td>
            <td class="coptic">ya set el-abkar,
                men noor el-anwar,
                men endoo qad sar,
                man za la yaHtar.</td>
        </tr>
        <tr id="table_61_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Wondrous among nations,
                wisdom to rulers,
                a hidden gem,
                and the gospel spoke of you:
                They give you blessings,
                in all generations,
                O daughter of Joachim,
                exalted above the Cherubim.</td>
            <td class="arabic">قد صرت اعجوبةللرؤساء امثالدرة محجوبةوفي الانجيل قد قاليعطونك الطوبافي كل الاجياليا
                ابنة يواقيمقد فقتي الشاروبيم</td>
        </tr>
        <tr id="table_61_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Qad serty ogooba,
                dorrah maHgooba,
                yotonek el-tooba,
                ya ebnat youaqeem,</td>
            <td class="coptic">lel roasa amthal,
                wa fi el-engeel qad qal,
                fi kol al-gial,
                qad foqty el-Cheroubim.</td>
        </tr>
        <tr id="table_61_row_4">
            <td class="coptic" style="border-right: 1px solid black;">You attained what no one could,
                O Mother of the Mercy,
                and you became,
                filled with grace,
                To the Divine you became,
                a veil for the Word,
                and greatly marveled,
                were you among the scholars.</td>
            <td class="arabic">من نال ما نلتىيا ام الرحمةوانتي قد صرتيمملؤة نعمهوللاهوت صرتيحجابا للكلمةواحتار
                فيكارباب التفهيم</td>
        </tr>
        <tr id="table_61_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Man nal ma nelty,
                wa anty qaad serty,
                wa lel lahot serty,
                wa aHtar fiki,</td>
            <td class="coptic">ya om el-raHma,
                mamlooa nema,
                Hegaban lel-kalema,
                arbab al-tafheem.</td>
        </tr>
        <tr id="table_61_row_6">
            <td class="coptic" style="border-right: 1px solid black;">O tabernacle of the covenant,
                O censer of Aaron,
                O spirit of glory,
                O daughter of Zion,
                O the light of eyes,
                with you we rejoice,
                and abide in grace,
                O full of grace.</td>
            <td class="arabic">يا تابوت العهديا مجمرة هارونيا روح المجديا ابنة صهيونيا نور العيونبك نسعدونحظي
                بالنعيم يا مملؤة نعمه</td>
        </tr>
        <tr id="table_61_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Ya taboot el-ahde,
                ya roH el-magd,
                ya noor el-oyoon,
                wa naHza bel-naeem,</td>
            <td class="coptic">ya magmaret Haroun,
                ya ebnat Sehioun,
                beky nasadoo,
                ya mamloua nema.</td>
        </tr>
        <tr id="table_61_row_8">
            <td class="coptic" style="border-right: 1px solid black;">O full of grace,
                the fortifying fortress,
                the jewel of mercy,
                the aid of the poor,
                Your son has purged death,
                O the intercessor of saints,
                intercede for us,
                O Mother of Mercy.</td>
            <td class="arabic">يا مملؤة نعمه انت الحصن الحصينانت كنز الرحمةيا عون المساكينبإبنك زالت النقمةيا شفيعة
                القديسينوشفيعتنا في الزحمةيا ام الرحيم</td>
        </tr>
        <tr id="table_61_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Ya mamloua nema,
                anty kanz el-raHma,
                be-ebnek zalet el naqma,
                Wa shafietna fil-zaHma,</td>
            <td class="coptic">anty el-Hesn el-Haseen,
                ya awn al-masakeen,
                ya sahfiat el-qedisin,
                ya om el-raHim.</td>
        </tr>
        <tr id="table_61_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you,
                O Lady of virgins,
                O daughter of Joachim,
                the chosen throne,
                Righteous is your Son,
                He purged our shame,
                the glorious God,
                the Creator of ages.</td>
            <td class="arabic">نقدم لك التعظيمياست الأبكار يا ابنة يواقيميا كرسيا مختاروالمولود منك كريمازال عنا
                العارالاله العظيمخالق الادهار</td>
        </tr>
        <tr id="table_61_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Noqadem laky a-tazeem,
                ya ebnat Yowaqim,
                wel-mawlood menky karim,
                al-elah el-azeem,</td>
            <td class="coptic">ya set el-abkar,
                ya korseyan mokhtar,
                azal anna al-ar,
                khalek el ad-har.</td>
        </tr>
        <tr id="table_61_row_12">
            <td class="coptic" style="border-right: 1px solid black;">The adornment of virgins,
                the holy Mother,
                the purity of the pure,
                O light of lights,
                O jewel of grace,
                O Mother of Mercy,
                truly you are the vine,
                filled and bearing fruit.</td>
            <td class="arabic">يا زين الأبكاريا قدس الأحباريا طهر الأطهاريا نور الأنواريا كنز النعمةيا ام
                الرحمةأنت هي الكرمةالمملؤة أثمار</td>
        </tr>
        <tr id="table_61_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Ya zen el-abkar,
                ya tohr el-at-har,
                ya kanz al-nema,
                anty heya al-karma,</td>
            <td class="coptic">ya qods el-aHbar,
                ya noor el-anwar,
                ya om el-raHma,
                al-mamloua athmar.</td>
        </tr>
        <tr id="table_61_row_14">
            <td class="coptic" style="border-right: 1px solid black;">O daughter of Joachim,
                you attained greatness,
                you are Jerusalem,
                glorious and honored,
                You are Zion,
                O precious jewel;
                you released the captive,
                from the Deceiver’s hand.</td>
            <td class="arabic">يا ابنة يواقيم قد نلت التعظيم انت هي اورشليمذات المجد والفخارانت هي صهيونيا جوهرا
                مكنونفككت المسجونمن يد المكار</td>
        </tr>
        <tr id="table_61_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Ya ebnat Yowaqim,
                anty heya Orshaleem,
                anty heya Sehioun,
                fakakty el-masgoon,</td>
            <td class="coptic">qad nelty al-tazeem,
                zat al-magd wal fakhar,
                ya gawharan maknoon,
                men yad el-makar.</td>
        </tr>
        <tr id="table_61_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Your son saved Adam,
                the repentant sinner,
                humanity He set free,
                from all adversaries,
                The Lord from your childhood,
                witnessed your purity,
                and therefore has blessed you,
                before all nations.</td>
            <td class="arabic">ابنك خلص ادمالخاطئ النادموعتق العالممن كل الاضرارربك من صغركلما رأي طهركقد طيب
                ذكركفي كل الاقطار</td>
        </tr>
        <tr id="table_61_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Ebnek khalas Adam,
                we ataq el-alam,
                rabek men soghrek,
                qad tayab zekrek,</td>
            <td class="coptic">el-khaty el-nadem,
                men kol el-adrar,
                lamma raa tohrek,
                fi kol el-aqtar.</td>
        </tr>
        <tr id="table_61_row_18">
            <td class="coptic" style="border-right: 1px solid black;">He sent you Gabriel,
                the Messenger of His words,
                and greeted you saying,
                The Lord has chosen you,
                His Holy Spirit,
                filled and dwelt within you,
                blessed are you O Virgin,
                throughout all ages."</td>
            <td class="arabic">ارسل لك غبريالبمحكم الاقوالوبشرك اذ قالالله لك اختارروح قدسه ملاكوسكن في احشاكيا
                عذرا طوباكفي كل الاجيال</td>
        </tr>
        <tr id="table_61_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Arsal laky Ghabrial,
                wa basharek ez qal,
                roH qodsoh malaky,
                ya adra toobaky,</td>
            <td class="coptic">bemoHkam el aqwal,
                Allaho laky ekhtar,
                wa sakan fi aHshaky,
                fi kol el agial.</td>
        </tr>
        <tr id="table_61_row_20">
            <td class="coptic" style="border-right: 1px solid black;">The Unseen and Holy,
                was born from you,
                and was called Jesus,
                for all eyes to see,
                Moses saw the bush,
                blazing with fire,
                its branches flaming,
                yet the bush was not consumed.</td>
            <td class="arabic">ان غير المحسوسالرب القدوسمنك اتي ودعي ايسوسونظرته الابصارموسي رأي العوسجوالنار فيه
                تتأججوأغصانه تتوهجما ضرته النار</td>
        </tr>
        <tr id="table_61_row_21">
            <td class="coptic" style="border-right: 1px solid black;">An gher el-maHsoos,
                menky ata wa doaya Isoos,
                Mousa raa al-awsag,
                wa aghsanoh tatawahag,</td>
            <td class="coptic">al-rab el qodoos,
                wa nazarat-ho el-absar,
                wal-nar fihi tata-gag,
                ma darat-ho al-nar.</td>
        </tr>
        <tr id="table_61_row_22">
            <td class="coptic" style="border-right: 1px solid black;">The blazing bush,
                which Moses had seen,
                was indeed Mary,
                the adornment of virgins,
                The fire is Jesus,
                the Holy Lord,
                who gave us the Law,
                engraved in stone.</td>
            <td class="arabic">ان ما رأته العينانملتهبا بالنيرانفي العوسج والأغصانهي مريم زينة الأبكاروالنار هي
                إيسوسالرب القدوسمعطينا الناموسمكتوبا في الاحجار</td>
        </tr>
        <tr id="table_61_row_23">
            <td class="coptic" style="border-right: 1px solid black;">Ena ma raat-ho al-aynan,
                fi el-awsag wal-aghsan,
                wel-nar heya Isoos,
                motina el-namoos,</td>
            <td class="coptic">moltaheban bel-niran,
                heya Mariam zenat el-abkar,
                al-rab el-qodoos,
                maktooban fil-aHgar.</td>
        </tr>
        <tr id="table_61_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Isaiah prophesied,
                about the birth,
                of Emmanuel,
                the Almighty King,
                Ezekiel saw a door,
                through which the Lord entered,
                He sealed the door and claimed it,
                highly exalted.</td>
            <td class="arabic">في اشعيا قد قيلعن هذا التأويلتلد عمانوئيلالملك الجباروحزقيال رأي بابدخل فيه رب
                الاربابوختم الباب مهابعالي المقدار</td>
        </tr>
        <tr id="table_61_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Fi Asheya qad qeel,
                taled emanoueel,
                wa Hazqeyal raa bab,
                wa khetm el-bab mohab,</td>
            <td class="coptic">an haza el-taweel,
                al-malek el-gabar,
                dakhal feeh rab el-arbab,
                alya el-meqdar.</td>
        </tr>
        <tr id="table_61_row_26">
            <td class="coptic" style="border-right: 1px solid black;">Highly exalted are you,
                and your Son Jesus,
                when He was born of you,
                the earth was adorned,
                And also Daniel,
                prophesied and said,
                I saw the high throne,
                highly exalted.</td>
            <td class="arabic">عال هو قدركلإن يسوع ابنكلما ولد منكتزينت الاقطاروايضا دانيالتنبأ حيث قالرأيت الكرسي
                العالعالي المقدار</td>
        </tr>
        <tr id="table_61_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Alen howa qadrek,
                lamma woled mennek,
                wa aydan Danial,
                raayto el-korsy el-al,</td>
            <td class="coptic">lean yasoo ebnek,
                tazayanat el-aktar,
                tanaba Haytho qal,
                aleya el meqdar.</td>
        </tr>
        <tr id="table_61_row_28">
            <td class="coptic" style="border-right: 1px solid black;">In the firmaments high I saw,
                one like the Son of Man,
                who has dominion,
                over all the earth,
                He is the Lord of Hosts,
                around Him are the ranks,
                thousands and myriads,
                glorifying in reverence.</td>
            <td class="arabic">نظرت فوق الأركانشبه ابن الانسانوله السلطانعلي كل الأقطاروهو رب القواتومن حوله
                طغماتالوف وربواتبعظم ووقار</td>
        </tr>
        <tr id="table_61_row_29">
            <td class="coptic" style="border-right: 1px solid black;">Nazarto fok el-arkan,
                wa laho al-soltan,
                wa howa rabo el-qowat,
                oloof wa rabawat,</td>
            <td class="coptic">shebh ebn el-ensan,
                ala kol el aqtar,
                wa men Hawloh taghamat,
                be ezamen wa waqar.</td>
        </tr>
        <tr id="table_61_row_30">
            <td class="coptic" style="border-right: 1px solid black;">O daughter of Joachim,
                you are exalted above,
                the Cherubim and Seraphim,
                and all righteous fathers,
                The Lord was born from you,
                and David praises you,
                with his harp he sings,
                playing its ten strings.</td>
            <td class="arabic">ياابنة يواقيمفقت الكروبيموايضا السرافيموكل الاباء الابرارمنك جاء المولودالرب
                المعبوديمدح فيك داودبالعشرة أوتار</td>
        </tr>
        <tr id="table_61_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Ya ebnat Yowaqim,
                aydan el-serafaim,
                menky ga el-mawlood,
                yamdaH fiki Dawood,</td>
            <td class="coptic">foqt el-karoubim,
                wa kol el-aba el-abrar,
                al-rab el-mabood,
                bel-asharat awtar.</td>
        </tr>
        <tr id="table_61_row_32">
            <td class="coptic" style="border-right: 1px solid black;">The sound of the first string,
                is in honor of your name,
                the Virgin will carry,
                the Almighty King,
                And with the second string,
                David rejoices,
                chanting with hymns,
                while playing his harp.</td>
            <td class="arabic">الوتر الاولقول مبجلوالعذراء تحبلبالملك الجبارالوتر الثانيداود بالتهانيو يرتل
                بالالحانمع ضرب القيثار</td>
        </tr>
        <tr id="table_61_row_33">
            <td class="coptic" style="border-right: 1px solid black;">El-watar el-awal,
                wel-adra taHbal,
                el-watar el-thany,
                yoratel bel-alHan,</td>
            <td class="coptic">qawlon mobagal,
                bel-malek el-gabar,
                Dawood bil-tahany,
                ma darb el-qithar.</td>
        </tr>
        <tr id="table_61_row_34">
            <td class="coptic" style="border-right: 1px solid black;">And the third O daughter,
                because you were faithful,
                you were filled with light,
                and the Lord chose you,
                The fourth string is sounded,
                so that all can hear,
                of her who is praised,
                all over the world.</td>
            <td class="arabic">الثالث يا ابنةأنت مؤتمنةبالنورمشتملةوالرب لك إختارالوتر الرابعاصغ يا سامعذا قول
                شائعفي كل الاقطار</td>
        </tr>
        <tr id="table_61_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Wel-thaleth ya ibna,
                bel-noor moshtamala,
                el-watar el-rabe,
                za qawlon shae,</td>
            <td class="coptic">anty motamana,
                wal-rabo laky ekhtar,
                esghy ya same,
                fi kol el-aqtar.</td>
        </tr>
        <tr id="table_61_row_36">
            <td class="coptic" style="border-right: 1px solid black;">The fifth is a sign of hope,
                as a dove she appears,
                with Ophir gold,
                upon her shoulders,
                With the sixth he sung,
                praises I will not hide,
                but I will praise with him,
                and proclaim to all.</td>
            <td class="arabic">الخامس خبرحمامة هي تظهربالذهب الاصفرعلي منكبيها صارالسادس قال فيهقولاً ما أخفيهلكني
                أرويهواشهره أجهار</td>
        </tr>
        <tr id="table_61_row_37">
            <td class="coptic" style="border-right: 1px solid black;">Wel-khames khabar,
                bel-zahab el-asfar,
                wel-sades qal fih,
                lakeny arweeh,</td>
            <td class="coptic">Hamama heya tazhar,
                ala menkabayha sar,
                qawlan ma akhfih,
                wa osh-heraho eg-har.</td>
        </tr>
        <tr id="table_61_row_38">
            <td class="coptic" style="border-right: 1px solid black;">With the seventh string he said
                O mountain, of the High God,
                the High took flesh from you,
                without a doubt,
                And with the eighth he sang,
                to the Virgin Mary,
                the Great chose her,
                and crowned her with honor.</td>
            <td class="arabic">السابع اذ قاليا جبل الله العالتجسد منك المتعالبلا شك ولا إنكاروالثامن رنمللعذ را
                مريماختارها المعظموكللها بالفخار</td>
        </tr>
        <tr id="table_61_row_39">
            <td class="coptic" style="border-right: 1px solid black;">Wel-sabe ez qal,
                tagasad menky el-motaal,
                wel-thamen ranam,
                ekhtarha al-moazam,</td>
            <td class="coptic">ya gabal Allah el-al,
                bela shak wala enkar,
                lel-adra Mariam,
                wa kallalha bel-fakhar.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_62" data-title="Your Table Title Here"
        onclick="toggleTable('table_62', this)">+ Your Table Title Here</span>
    <table id="table_62" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_62_row_0">
            <td class="coptic" style="border-right: 1px solid black;">With the ninth string he said,
                from her will surely come,
                God her son,
                who sealed her virginity,
                With the tenth he sang,
                the Powerful God,
                in Zion he appeared,
                the dwelling of the righteous.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">التاسع قال عنهايظهر حقا منهاالإله وهو إبنهاوالبكورية في حفط ووقارالوتر العاشرالله
                القادرفي صهيون ظاهرمسكن الأبرار</td>
        </tr>
        <tr id="table_62_row_1">
            <td class="coptic" style="border-right: 1px solid black;">El-tase qal anha,
                al-Elah wa howa ebnaha,
                El-watar el-asher,
                fi Sehioun zaher,</td>
            <td class="coptic" style="border-right: 1px solid black;">yazhar Haqan menha,
                wal-bokooreya fi Hefzen wa waqar,
                Allah el-qader,
                maskan el-abrar.</td>
            <td class="english"></td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_63" data-title="Your Table Title Here"
        onclick="toggleTable('table_63', this)">+ Your Table Title Here</span>
    <table id="table_63" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_63_row_0">
            <td class="coptic" style="border-right: 1px solid black;">There isn’t in all ages,
                anyone like you O Virgin,
                for you released the chains,
                and shame of Adam,
                O Lady of the creation,
                the pride of faith,
                your servant is in need,
                drowning because of sins.</td>
            <td class="arabic">لم يوجد في الدهرمثلك أيتها البكرلأنك فككت الاسرعن آدم والعاريا سيدة الأكوانيا فخر
                الإيمانعبدك حيرانغارق في الاوزار</td>
        </tr>
        <tr id="table_63_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Lam yowgad fi el-dahr,
                leanek fakakty el-asr,
                ya sayedet el-akwan,
                ana abdek Hayran,</td>
            <td class="coptic">methlek ayatoha el-bekr,
                an Adam wal-ar,
                ya fakhr el-eiman,
                gharek fil-awzar.</td>
        </tr>
        <tr id="table_63_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for me,
                do not leave your servant,
                Ask your son to save me,
                From the fire,
                For your intercession,
                is heard and accepted,
                and He defends from the attacks,
                of the adversary.</td>
            <td class="arabic">عالي هو قدركلا تتركي عبدكقصدي من ولدكتوبة و أستغفارو العذراء تشفعفي الحضار اجمعو هي
                عنا تدفعضربات الاشرار</td>
        </tr>
        <tr id="table_63_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Alen howa qadrek,
                qasdy men waladek,
                Wel adra tashfa,
                We heia ana tadfa,</td>
            <td class="coptic">la tatroky abdek,
                Toba wa esteghfar,
                Fe elodar agma,
                darabat el-ashrar.</td>
        </tr>
        <tr id="table_63_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Arise O poor one,
                and clothe yourself in faith,
                and say Amen Amen,
                for us she intercedes,
                The persistent servant,
                Will always praise her,
                For by his side that Day,
                The Lady of virgins shall be.</td>
            <td class="arabic">قم وانهض يا مسكينوالبس ثوب اليقينوقل امين امينفهي تشفع في الحاضرينو أنا الخاطي
                المسكينمادحها في كل حينمالي يوم الدينسوي سيدة الابكار</td>
        </tr>
        <tr id="table_63_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Qom enhad ya meskeen,
                wa qol amin amin,
                wal-nazem el-meskeen,
                maloh yom el-din,</td>
            <td class="coptic">wa elbes thob el-yaqeen,
                fa heya tashfa fil-Hodar,
                madeHha fi kol Hin,
                sewa sayedet el-abkar.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_64" data-title="Your Table Title Here"
        onclick="toggleTable('table_64', this)">+ Your Table Title Here</span>
    <table id="table_64" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_64_row_0">
            <td class="coptic" style="border-right: 1px solid black;">9
                You are called: O virgin Mary: the Holy flower: of incense.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲑˉ
                Ⲁⲩⲙⲟⲩϯ ̀ⲉⲣⲟ: Ⲙⲁⲣⲓ̀ⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ϯ̀ϩⲣⲏⲣⲓ ⲉⲑⲟⲩⲁⲃ: ̀ⲛⲧⲉ ⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ.</td>
            <td class="arabic">٩
                دعيت يامريم العذراء الزهرة المقدسة التى للبخور.</td>
        </tr>
        <tr id="table_64_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Which came out: and blossomed: from the roots of
                the patriarchs: and the prophets.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲏ̀ⲉⲧⲁⲥϯⲟⲩ̀ⲱ ̀ⲉ̀ⲡϣⲱⲓ: ⲁⲥⲫⲓⲣⲓ ̀ⲉⲃⲟⲗ: ϧⲉⲛ ̀ⲑⲛⲟⲩⲛⲓ
                ̀ⲛⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲛⲉⲙ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">التى طلعت وازهرت من أصل رؤساء الآباء والأنبياء.</td>
        </tr>
        <tr id="table_64_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Like the rod: of Aaron the priest: which
                blossomed: and brought forth fruit.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙ̀ⲫⲣⲏϯ ̀ⲙⲡⲓ̀ϣⲃⲱⲧ: ̀ⲛⲧⲉ Ⲁ̀ⲁⲣⲱⲛ ⲡⲓⲟⲩⲏⲃ: ̀ⲉⲧⲁϥⲫⲓⲣⲓ
                ̀ⲉⲃⲟⲗ: ⲁϥⲟⲡⲧ ̀ⲛⲕⲁⲣⲡⲟⲥ.</td>
            <td class="arabic">مثل عصا هرون الكاهن أزهرت وأوسقت ثمراً.</td>
        </tr>
        <tr id="table_64_row_3">
            <td class="coptic" style="border-right: 1px solid black;">For you gave birth to the word: without the seed
                of man: and your virginity: was not corrupted.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲁⲣⲉ̀ϫⲫⲟ ̀ⲙⲡⲓⲗⲟⲅⲟⲥ: ⲁϭⲛⲉ ̀ⲥⲡⲉⲣⲙⲁ ̀ⲛⲣⲱⲙⲓ: ⲉⲥⲟⲓ
                ̀ⲛⲁⲧⲧⲁⲕⲟ: ̀ⲛϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓ̀ⲁ.</td>
            <td class="arabic">لانك ولدت الكلمة بغير زرع بشر وبتوليتك بغير فساد.</td>
        </tr>
        <tr id="table_64_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we glorify you: as the Mother of God:
                ask your Son: to forgive us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯ̀ⲱⲟⲩ ⲛⲉ: ϩⲱⲥ ⲑⲉ̀ⲟⲧⲟⲕⲟⲥ ⲙⲁϯϩⲟ
                ̀ⲙⲡⲉϣⲏⲣⲓ: ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">فلهذا نمجدك كوالدة الاله. اسألى ابنك ليغفر لنا.</td>
        </tr>
        <tr id="table_64_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Adam became
                After he was contrite
                Was defiant and sinful
                Won and shamed the devil</td>
            <td class="arabic">بك أصبح آدمبعد أن كان نادمكان مخالف وآثمفاز وأخزى الأركون</td>
        </tr>
        <tr id="table_64_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">O joy of Able
                Crown of Israel
                You were given honor
                From all those who praise</td>
            <td class="arabic">يا فرح هابيلوتاج إسرائيلأعطيت التهليلبجميع من يمدحون</td>
        </tr>
        <tr id="table_64_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">O grace of Abraham
                Isaac remains safe
                Jacob was a leader
                Joseph was seen with his eyes</td>
            <td class="arabic">يا نعمة إبراهيمهوذا إسحق سليميعقوب كان زعيمجاءه يوسف ورآه بعيوم</td>
        </tr>
        <tr id="table_64_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">David chanted and said
                In you explained sayings
                And also in proverbs
                Wisdom of Solomon</td>
            <td class="arabic">داود رتل وقالفيك شرح أقوالوأيضاً فى الأمثالحكمة سولومون</td>
        </tr>
        <tr id="table_64_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Your are the explained throne
                Like the arc of Noah
                A flower ‘s aroma spread
                And olive branches</td>
            <td class="arabic">أنت الكرسى المشروحشبه سفينة نوحزهرة عطر تفوحوأغصان الزيتون</td>
        </tr>
        <tr id="table_64_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Chariot of the Cherubim
                Wings of the Seraphim
                O daughter of Joachim
                Censor of Aaron</td>
            <td class="arabic">مركبة الشاروبيمأجنحة السيرافيمياإبنة يواقيمشورية مع هرون</td>
        </tr>
        <tr id="table_64_row_11">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">You’re the grace of Peter
                O wisdom of Paul
                O joy of Phillip
                Purity of the confessors</td>
            <td class="arabic">أنت نعمة بطرسيا حكمة بولسيا فرحة فيلبسطهر المعترفين</td>
        </tr>
        <tr id="table_64_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Salvation of Matthias
                Belief of Thomas
                O Holy of Holies
                The zeal of Simon</td>
            <td class="arabic">يا خلاص متياسوأمانة توماسيا قدس الأقداسأنت غيرة سيمون</td>
        </tr>
        <tr id="table_64_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Crown of martyrs
                Joy began by you
                Conquered the enemies
                And shamed the devil</td>
            <td class="arabic">إكليل الشهداءبك الفرح بدأقهرت الأعداءوأخزيت الأركون</td>
        </tr>
        <tr id="table_64_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">Mother of the Incarnate
                Seed of our father David
                You fulfilled the economy
                A fortified castle</td>
            <td class="arabic">يا أم المولودنسل الآب داودكملت المقصودأنت قلعة بحصون</td>
        </tr>
        <tr id="table_64_row_15">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">After you gave birth to Him
                On your shoulders carried Him
                A Child, you nursed Him
                How can this be</td>
            <td class="arabic">من بعد ما ولدتيهعلى كتفك حملتيهطفل وأرضعتيهكيف هذا الأمر يهون</td>
        </tr>
        <tr id="table_64_row_16">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">A hidden mystery
                From the created world
                A secret that was realized
                After it was concealed</td>
            <td class="arabic">هذا سر مكتومعن الكون المرسومسر صار مفهومبعد أن كان مكنون</td>
        </tr>
        <tr id="table_64_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">He who is enlightened
                Searches these mysteries
                This is Light of Light
                No one can surmise</td>
            <td class="arabic">من هو صاحب أفكاريفحص هذه الأسرارهذا نور من نورلا تدركه ظنون</td>
        </tr>
        <tr id="table_64_row_18">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">If I say I fathom
                Some of its meanings
                I cannot describe
                To the high and the lowly</td>
            <td class="arabic">وإن قلت إنى أحويهوبعض معانيهما أقدر أرويهللعالى والدون</td>
        </tr>
        <tr id="table_64_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:
                Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:Ⲣⲁϣⲓ ̀ⲱ Ⲙⲁⲣⲓⲁ:</td>
            <td class="coptic" style="border-right: 1px solid black;">If the witness said
                Account of your honor stands
                But with resolve
                Attained from you</td>
            <td class="arabic">وإن قال الناظروصف شرفك قائملكن بعزائممنك متصلون</td>
        </tr>
        <tr id="table_64_row_20">
            <td class="coptic" style="border-right: 1px solid black;">I praise the Virgin
                And explain and say
                O the origin
                And the hidden pearl</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">أمدح فى البتولوأشرح فيها وأقولياأصل الأصولياجوهر مكنون</td>
        </tr>
        <tr id="table_64_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Through your Son, our Lady
                Cause of salvation
                We reached the goal
                And you brought us joy</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">بأبنك ياستناخلاص جنسناوبلغنا المنىوبك صرنا فرحون</td>
        </tr>
        <tr id="table_64_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Was truly Incarnate
                From a Virgin girl
                Crucified and died
                For us at Golgotha</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">تجسد بثباتمن ست البناتصلب عنا وماتعند الاقرانيون</td>
        </tr>
        <tr id="table_64_row_23">
            <td class="coptic" style="border-right: 1px solid black;">The fruit of my pledge
                O daughter of Zion
                To love your Son
                And proclaim and say</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">ثمرة عربونىياأبنة صهيونأحب الهيوأصيح وأقول</td>
        </tr>
        <tr id="table_64_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Gabriel came
                With tidings and sayings
                You accepted His word
                In calmness and wisdom</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">جاك غبريالببشائر وأقوالوقبلت ما قالبسر خفي مكنون</td>
        </tr>
        <tr id="table_64_row_25">
            <td class="coptic" style="border-right: 1px solid black;">He dwelt by His Word
                In strength and power
                You became like heaven
                O, daughter of Zion</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">حل بكلمتهوشرح قدرتهصرت كسمائهيا إبنة صهيون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_65" data-title="Your Table Title Here"
        onclick="toggleTable('table_65', this)">+ Your Table Title Here</span>
    <table id="table_65" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_65_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic">المرد:</td>
        </tr>
        <tr id="table_65_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Your love embraced me
                O pride of nations
                Moses has seen you
                Surprise and marvel
                And the lamps are bright
                With golden crosses
                The praise of the virgin
                Increased my joy
                Praising her always
                Increased my bliss
                Moses' dome, O Mary
                O Aaron's censer</td>
            <td class="arabic">سباني حُبكيافخرَ الرتبموسى رآكِعجب من عجبوالقناديل فضة بتضويوالصلبان ذهبودا مدح
                البتول زاد قلبى فرحمدحها علطولخلاه إنشرحياقبة موسى يامريمياشورية هرون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_66" data-title="Your Table Title Here"
        onclick="toggleTable('table_66', this)">+ Your Table Title Here</span>
    <table id="table_66" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_66_row_0">
            <td class="coptic" style="border-right: 1px solid black;">He saved Adam
                After his sorrow
                And has freed the world
                We rejoice in you</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">خلص آدمبعد أن كان نادموعتق العالمونحن بك فرحون</td>
        </tr>
        <tr id="table_66_row_1">
            <td class="coptic" style="border-right: 1px solid black;">He is glorified
                And promised His Apostles
                To save His people
                From Satan's bondage</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">دائم تمجيدهوعاهد تلاميذهيخلص عبيدهمن كيد الأركون</td>
        </tr>
        <tr id="table_66_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Concerning you, David said,
                “The King rejoiced in you
                And took flesh from you
                The Lord on His Throne.”</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">داود قال عنكالملك إشتهى حسنكوتجسد منكرب العرش المكنون</td>
        </tr>
        <tr id="table_66_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Myriads and thousands
                Standing around the Throne
                Ranks and orders
                Saints and martyrs</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">ربوات وألوفحول العرش وقوفوطغمات وصفوفوشهداء متصلون</td>
        </tr>
        <tr id="table_66_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Sorrow was taken away
                And we are comforted
                Through you, O Mary
                The pride of the human race</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">زالت عنا الأحزانوصرنا فى أطمئنانبك يامريميا فخر البشريون</td>
        </tr>
        <tr id="table_66_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Salome witnessed
                That the Virgin gave birth
                She believed and confirmed
                The mystery of mysteries.</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">سالومي شهدتإن العذراء ولدتآمنت وأعتقدتبالسر المكنون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_67" data-title="Your Table Title Here"
        onclick="toggleTable('table_67', this)">+ Your Table Title Here</span>
    <table id="table_67" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_67_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic">المرد:</td>
        </tr>
        <tr id="table_67_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Your love embraced me
                O pride of nations
                Moses has seen you
                Surprise and marvel
                And the lamps are bright
                With golden crosses
                The praise of the virgin
                Increased my joy
                Praising her always
                Increased my bliss
                Moses' dome, O Mary
                O Aaron's censer</td>
            <td class="arabic">سباني حُبكيافخرَ الرتبموسى رآكِعجب من عجبوالقناديل فضة بتضويوالصلبان ذهبودا مدح
                البتول زاد قلبى فرحمدحها علطولخلاه إنشرحياقبة موسى يامريمياشورية هرون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_68" data-title="Your Table Title Here"
        onclick="toggleTable('table_68', this)">+ Your Table Title Here</span>
    <table id="table_68" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_68_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Solomon, your father,
                Praised in hymns and songs
                And Jacob saw you
                An upright ladder</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">سليمان أباكصار ينشد بفنونويعقوب رآكسلم مرتفعون</td>
        </tr>
        <tr id="table_68_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The chiefs had proclaimed
                O fruitful vine
                You are a Virgin and a bride
                As they prophesied</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">شهد عنك الرؤساءياكرمة مغروسةيابكرة وعروسةكما عنك تنبأون</td>
        </tr>
        <tr id="table_68_row_2">
            <td class="coptic" style="border-right: 1px solid black;">Zephaniah proclaimed
                That Jesus will appear
                As rain and dew
                While her Virginity is sealed</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">صوفونيوس خبربأن يسوع يظهرشبه ندي ومطروالختم حصن مصون</td>
        </tr>
        <tr id="table_68_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Eve caused Adam to stray,
                In tears, he cried
                Naked, he was exiled
                Without you they would not return</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">ضللت حواء آدموصار يبكى نادمخرج عريان عادملولاك ما رجعون</td>
        </tr>
        <tr id="table_68_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Your rank is up high
                And great is your glory
                The Lord honored you
                O Aaron's censer</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">عال هو قدركوعظيم هو مجدكوالله شرف ذكركيا شورية هرون</td>
        </tr>
        <tr id="table_68_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Many praised you
                You are the cause of all joy
                You comfort everyone
                Who is sorrowful and humble</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">غلب فيك المداحيا بدء الأفراحبمديحك يرتاحكل ذليل محزون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_69" data-title="Your Table Title Here"
        onclick="toggleTable('table_69', this)">+ Your Table Title Here</span>
    <table id="table_69" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_69_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic">المرد:</td>
        </tr>
        <tr id="table_69_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Your love embraced me
                O pride of nations
                Moses has seen you
                Surprise and marvel
                And the lamps are bright
                With golden crosses
                The praise of the virgin
                Increased my joy
                Praising her always
                Increased my bliss
                Moses' dome, O Mary
                O Aaron's censer</td>
            <td class="arabic">سباني حُبكيافخرَ الرتبموسى رآكِعجب من عجبوالقناديل فضة بتضويوالصلبان ذهبودا مدح
                البتول زاد قلبى فرحمدحها علطولخلاه إنشرحياقبة موسى يامريمياشورية هرون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_70" data-title="Your Table Title Here"
        onclick="toggleTable('table_70', this)">+ Your Table Title Here</span>
    <table id="table_70" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_70_row_0">
            <td class="coptic" style="border-right: 1px solid black;">My heart rejoices in you
                O Virgin Mary
                Ask your Son Jesus
                To protect me by His Might</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">فيك رضا قلبىيامريم طلبىيسوع إبنك حسبىبقوته أكون</td>
        </tr>
        <tr id="table_70_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Existent before the ages
                Suffered and was crucified
                He rose from His sleep
                And the Disciples preached</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">قديم أذلي دائمصلب عنا وتألماستيقظ كالنائموالتلاميذ يكرزون</td>
        </tr>
        <tr id="table_70_row_2">
            <td class="coptic" style="border-right: 1px solid black;">The righteous Apostles
                And the four Evangelists
                Preached in all nations
                The tidings and rejoice</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">كرزوا في الأقطارالرسل الأبرارونادوا باستبشارالأباء الإنجيليون</td>
        </tr>
        <tr id="table_70_row_3">
            <td class="coptic" style="border-right: 1px solid black;">Glory is due to you
                O daughter of Joachim
                You bore a great mystery
                And gave birth to the Most High</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">لك كل التعظيمياإبنة يواقيمحملت سر عظيمووضعت المكنون</td>
        </tr>
        <tr id="table_70_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Moses and Daniel
                Said many parables
                And you fit all that
                Mysteriously and more</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">موسي ودانيالضربوا عنك أمثالوقبلت ماقالبسر خفي مكنون</td>
        </tr>
        <tr id="table_70_row_5">
            <td class="coptic" style="border-right: 1px solid black;">You caused the world to shine
                O the pride of faith
                All the creatures were free
                Because of you Mary</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">نورت الأكوانيافخر الإيمانلولاك ماكانكل الخلائق يعتقون</td>
        </tr>
        <tr id="table_70_row_6">
            <td class="coptic" style="border-right: 1px solid black;">Gifts were offered in faith
                To the King of kings
                By the great Magi
                Myrrh, gold and frankincense</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">هدايا بإيمانأتوا بهم الأعيانمرا وذهباً ولبانبها المجوس حاملون</td>
        </tr>
        <tr id="table_70_row_7">
            <td class="coptic" style="border-right: 1px solid black;">They worshipped the born King
                The Lord of lords
                And Herod was terrified
                And his soldiers marveled</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">وسجدوا للمولودالرب المعبودوهيرودس صار مرعوبوجنده محتارون</td>
        </tr>
        <tr id="table_70_row_8">
            <td class="coptic" style="border-right: 1px solid black;">Do not forsake at that time
                A poor and humble sinner
                Your plead on Judgment Day
                And for all the Christians</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">لا تنسى في ذلك الحينعبداً خاطئ مسكينشفاعتك يوم الدينلشعب ابنك أجمعين</td>
        </tr>
        <tr id="table_70_row_9">
            <td class="coptic" style="border-right: 1px solid black;">We ask of Him forgiveness
                Faith and repentance
                To be in calmness
                We the believers</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="arabic">ونسأل من جوده الغفرانوتوبة مع إيمانلنصبر في اطمئناننحن المؤمنون</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_71" data-title="Your Table Title Here"
        onclick="toggleTable('table_71', this)">+ Your Table Title Here</span>
    <table id="table_71" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_71_row_0">
            <td class="coptic" style="border-right: 1px solid black;">REFRAIN:</td>
            <td class="arabic">المرد:</td>
        </tr>
        <tr id="table_71_row_1">
            <td class="coptic" style="border-right: 1px solid black;">Your love embraced me
                O pride of nations
                Moses has seen you
                Surprise and marvel
                And the lamps are bright
                With golden crosses
                The praise of the virgin
                Increased my joy
                Praising her always
                Increased my bliss
                Moses' dome, O Mary
                O Aaron's censer</td>
            <td class="arabic">سباني حُبكيافخرَ الرتبموسى رآكِعجب من عجبوالقناديل فضة بتضويوالصلبان ذهبودا مدح
                البتول زاد قلبى فرحمدحها علطولخلاه إنشرحياقبة موسى يامريمياشورية هرون</td>
        </tr>
        <tr id="table_71_row_2">
            <td class="coptic" style="border-right: 1px solid black;">O daughter of David
                The seed of the righteous
                O Jewel inflamed with
                The Mighty’s divinity</td>
            <td class="arabic">يا ابنة داود من نسل الأبرار يا جوهر موقود بلاهوت الجبار</td>
        </tr>
        <tr id="table_71_row_3">
            <td class="coptic" style="border-right: 1px solid black;">He was ever-present
                From the beginning of ages
                Appeared born of you
                With described humanity</td>
            <td class="arabic">كم من كان موجود من قدم الأدهار ظهر منك مولود بناسوت موصوف</td>
        </tr>
        <tr id="table_71_row_4">
            <td class="coptic" style="border-right: 1px solid black;">O door of grace
                And key of paradise
                O mother of the Mercy
                And mother of the Holy</td>
            <td class="arabic">يا باب النعمة ومفتاح الفردوس يا أم الرحمة ويا أم القدوس</td>
        </tr>
        <tr id="table_71_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Through the dwelling of the Word
                In your womb, Agios
                We gained mercy
                And fear left us.</td>
            <td class="arabic">بحول الكلمة في احشاك أجيوس فزنا بالرحمة وزال عنا الخوفى</td>
        </tr>
        <tr id="table_71_row_6">
            <td class="coptic" style="border-right: 1px solid black;">O Arc of the covenant
                And the tablets of the Torah
                With the fingers of the Lord of glory
                Placed within it.</td>
            <td class="arabic">يا تابوت العهد وألواح التوراة بأصبع رب المجد موضوعة جواه</td>
        </tr>
        <tr id="table_71_row_7">
            <td class="coptic" style="border-right: 1px solid black;">To Him the ranks worship
                And cry out in all tongues
                Appeared of you in flesh
                Perfect and described</td>
            <td class="arabic">له الطغمات تسجد وتصيح بكل لغات ظهر منك بجسد كامل موصوفى</td>
        </tr>
        <tr id="table_71_row_8">
            <td class="coptic" style="border-right: 1px solid black;">O hidden jewel
                O light of all lights
                With the kept secret
                In the knowledge of the Mighty</td>
            <td class="arabic">يا جوهر مكنون يا ضوء الأنوار بالسر المخزون في علم الجبار</td>
        </tr>
        <tr id="table_71_row_9">
            <td class="coptic" style="border-right: 1px solid black;">All the heavenly
                Worship Him in awe
                Humanity attained
                Seeing Him revealed</td>
            <td class="arabic">كل العلويين تسجد له بوقار فاز البشريون بنظرة مكشوفي</td>
        </tr>
        <tr id="table_71_row_10">
            <td class="coptic" style="border-right: 1px solid black;">O vessel of the Ember (aroma)
                With sweet aroma
                O tree with branches
                O joy of creation</td>
            <td class="arabic">يا حُقْ العنبر بروائح عطرية يا شجرة بأغصان يا فرح البرية</td>
        </tr>
        <tr id="table_71_row_11">
            <td class="coptic" style="border-right: 1px solid black;">The Lord appeared of you
                And you’re a maiden virgin
                You bore Him as a boy
                In perfect description</td>
            <td class="arabic">منك الرب ظهر وانت بتول عذراء ولدتيه شبه ولد كامل موصوفي</td>
        </tr>
        <tr id="table_71_row_12">
            <td class="coptic" style="border-right: 1px solid black;">O Holy chamber
                Of the Spirit of God the Judge
                O throne, on it sat
                The creator of all the world</td>
            <td class="arabic">يا خدر مقدس لروح الله الديان يا عرش وجلس عليه منشي الأكوان</td>
        </tr>
        <tr id="table_71_row_13">
            <td class="coptic" style="border-right: 1px solid black;">To Him, (they) worship and sanctify
                And cry out in all tongues,
                Ⲛⲓⲧⲁⲅⲙⲁ ̀ⲛⲛⲓⲁⲅⲅⲉⲗⲟⲥ
                Thousands and myriads</td>
            <td class="arabic">له تسجد وتقدس وتصيح بكل لسان Ⲛⲓⲧⲁⲅⲙⲁ ̀ⲛⲛⲓⲁⲅⲅⲉⲗⲟⲥربوات والوفي</td>
        </tr>
        <tr id="table_71_row_14">
            <td class="coptic" style="border-right: 1px solid black;">O full moon
                At the fullness of its form
                Your light surpassed the dawn
                At the shining of the sun</td>
            <td class="arabic">يا دوران البدر عند كمال طقسه نورك فاق الفجر بعد اشرق شمسه</td>
        </tr>
        <tr id="table_71_row_15">
            <td class="coptic" style="border-right: 1px solid black;">And Jesus raised your honor
                With the dwelling of His Holy Spirit
                In your womb, he came in triumph
                To His own people</td>
            <td class="arabic">ويسوع زادك قدر بحلول روح قدسه في احشاك اتانا بالنصر لشعبه المعروفي</td>
        </tr>
        <tr id="table_71_row_16">
            <td class="coptic" style="border-right: 1px solid black;">O vision and prophecy
                Saw it Ⲙⲱ̀ⲏⲥⲓⲥ
                A bush enflamed with fire
                No harm came upon it</td>
            <td class="arabic">يا رؤيا وأنذار عاينها Ⲙⲱ̀ⲏⲥⲓⲥعوسج في قلبه نار ولم يمسه بأس</td>
        </tr>
        <tr id="table_71_row_17">
            <td class="coptic" style="border-right: 1px solid black;">Like the adornment of all virgins
                Carried the Messiah
                Divinity as a live coal
                United with humanity</td>
            <td class="arabic">كمثل زين الأبكار حملت ماسياس لاهوت كجمر النار بالناسوت ملحوفي</td>
        </tr>
        <tr id="table_71_row_18">
            <td class="coptic" style="border-right: 1px solid black;">O fruitful plant
                With out seed or water
                In a pure field
                Filled with fruit</td>
            <td class="arabic">يازرعا زاهر من غير ماء وبذار في حقل طاهر محمل بالأثمار</td>
        </tr>
        <tr id="table_71_row_19">
            <td class="coptic" style="border-right: 1px solid black;">In your womb appeared
                Our Lord, the Almighty
                One Able God
                Merciful and Compassionate</td>
            <td class="arabic">صار في احشاك ظاهر سيدنا الجبار إله واحد قادر متحنن ورؤوفي</td>
        </tr>
        <tr id="table_71_row_20">
            <td class="coptic" style="border-right: 1px solid black;">O hidden secret
                In the light of lights
                O mount of Zion
                The Lord chose you</td>
            <td class="arabic">يا سر مكنون في نور الأنوار يا علية صهيون إليك الرب اختار</td>
        </tr>
        <tr id="table_71_row_21">
            <td class="coptic" style="border-right: 1px solid black;">Your Son released the captive
                From the deceiver’s bonds
                After he was in debt
                He became fulfilled and free</td>
            <td class="arabic">إبنك فك المسجون من قيد المكار بعد أن كان مديونصار خالص موفي</td>
        </tr>
        <tr id="table_71_row_22">
            <td class="coptic" style="border-right: 1px solid black;">O honor placed upon
                The head of the righteous
                Your name became raised
                And increased in honor</td>
            <td class="arabic">يا شرفا موضوع فوق رأس الأبرار أسمك صار مرفوع وزايد في المقدار</td>
        </tr>
        <tr id="table_71_row_23">
            <td class="coptic" style="border-right: 1px solid black;">You carried the Lord Jesus
                His light shone openly
                And released those who were
                Placed in darkness</td>
            <td class="arabic">حملتي الرب يسوع وأشرق نوره أجهار وعتق من كان في الظلمة محدوفي</td>
        </tr>
        <tr id="table_71_row_24">
            <td class="coptic" style="border-right: 1px solid black;">O truth of faith
                And knowledge of the Trinity
                Their light would not be seen
                Without your Son</td>
            <td class="arabic">يا صدق الإيمان ومعرفة الثالوث لولا أبنك ما كان ظهور نور الثالوث</td>
        </tr>
        <tr id="table_71_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Nor received forgiveness
                Or the heaves opened
                Or man restored
                To his known place</td>
            <td class="arabic">ولا نلنا الغفران ولا أنفتح الملكوت ولا رد الإنسان لمحله المعروفي</td>
        </tr>
        <tr id="table_71_row_26">
            <td class="coptic" style="border-right: 1px solid black;">O light and glory
                Came upon all sites
                Your light grew greater than
                The sun of the dawn</td>
            <td class="arabic">يا ضوء وبهاء عم على الأفاق ضوءك صار أبهي من شمس الأشراق</td>
        </tr>
        <tr id="table_71_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Your honor pleases God
                He fulfilled the promise
                To Adam and treasured it
                And removed fear from us</td>
            <td class="arabic">وأنوارك سُرَّ بها الإله وأوفي الميثاق لأدم واعتز بها وزال عنا الخوف</td>
        </tr>
        <tr id="table_71_row_28">
            <td class="coptic" style="border-right: 1px solid black;">O blessed one
                The righteous bless you
                With harmonious voices
                David praised you</td>
            <td class="arabic">يا طوبانية تطوبك الأبرار بأصوات شجية مدحك داود البار</td>
        </tr>
        <tr id="table_71_row_29">
            <td class="coptic" style="border-right: 1px solid black;">With prophetic songs
                Upon the ten strings
                Was called a father to
                The indescribable Son</td>
            <td class="arabic">باغاني نبوية على العشرة أوتار وسمي بالأبوية للابن الغير الموصوف</td>
        </tr>
        <tr id="table_71_row_30">
            <td class="coptic" style="border-right: 1px solid black;">O appearance of grace
                And the knowledge of faith
                O mother of mercy
                And key of forgiveness</td>
            <td class="arabic">يا ظهور النعمة ومعرفة الإيمان يا أم الرحمة ومفتاح الغفران</td>
        </tr>
        <tr id="table_71_row_31">
            <td class="coptic" style="border-right: 1px solid black;">Through the dwelling of the Word
                The Son of God the Judge
                We attained grace in your womb
                And fear departed from us</td>
            <td class="arabic">بحلول الكلمة ابن الله الديان في احشاك نلنا النعمة وزال عنا الخوفي</td>
        </tr>
        <tr id="table_71_row_32">
            <td class="coptic" style="border-right: 1px solid black;">O pillar of faith
                And foundation of the creed
                Without your Son there would not be
                Laws nor Canons</td>
            <td class="arabic">يا عَمَّد الإيمان وياقاعدة الدين لولا إبنك ما كانشرايع ولا قوانين</td>
        </tr>
        <tr id="table_71_row_33">
            <td class="coptic" style="border-right: 1px solid black;">You enlighten my thoughts
                May the Lord Jesus
                Forgive my sins
                And malicious deeds</td>
            <td class="arabic">تنيري أفكاري ولعل الرب إيسوس يعفي عن اوزاري وفعلي المتلوفي</td>
        </tr>
        <tr id="table_71_row_34">
            <td class="coptic" style="border-right: 1px solid black;">My hail to the virgin
                The maiden pride of virgins
                Mother of the God of might
                Jesus, Knower of the secrets</td>
            <td class="arabic">سلامي إلى العذراء البتول زين الأبكار ام إله القدرة يسوع عالم الأسرار</td>
        </tr>
        <tr id="table_71_row_35">
            <td class="coptic" style="border-right: 1px solid black;">And I hail the virgin
                In secret and openly
                She intercedes for He
                Who offers her praise</td>
            <td class="arabic">وسلامي إلي العذراء في سري والإجهار من يمدحها شطره تشفع فيه الوفي</td>
        </tr>
        <tr id="table_71_row_36">
            <td class="coptic" style="border-right: 1px solid black;">And peace to all present
                Everyone in total
                Men, women and children
                The Lord forgive them</td>
            <td class="arabic">وسلامي إلى الحضار الكل بأجمعهم رجال ونساء وصغار الرب يسامحهم</td>
        </tr>
        <tr id="table_71_row_37">
            <td class="coptic" style="border-right: 1px solid black;">The prayer of the pride of virgins
                Mary, be with them
                Saved from the fire’s captivity
                And from all fear</td>
            <td class="arabic">وصلاة زين الأبكار مريم تكون معهم ينجو من حجر النار ومن كل الخوفي</td>
        </tr>
        <tr id="table_71_row_38">
            <td class="coptic" style="border-right: 1px solid black;">Its author, the sinner
                Praising the pride of virgins
                Fearing all my sins
                And the heat of the flames of fire</td>
            <td class="arabic">وناظمها الخاطئ مادح زين الأبكار خائف من زلاتي وحر لهيب النار</td>
        </tr>
        <tr id="table_71_row_39">
            <td class="coptic" style="border-right: 1px solid black;">My goal before my death
                Repentance full of tears
                Erasing all my sins
                Relieving me from fear</td>
            <td class="arabic">قصدي قبل مماتي توبة بدموع غزار وتمحي سيئاتي واطئمن من الخوفى.</td>
        </tr>
        <tr id="table_71_row_40">
            <td class="coptic" style="border-right: 1px solid black;">For I am a poor sinner
                Drowning in my sins
                Throughout the day despised
                And lost in the thoughts</td>
            <td class="arabic">لأنى خاطئ ومسكينوغارق فى الأوزاربطول الدهر مهينوتايه فى الأفكار</td>
        </tr>
        <tr id="table_71_row_41">
            <td class="coptic" style="border-right: 1px solid black;">I have no gentle bosom
                Save the pride of virgins
                Mary the aid of the poor
                Mother of a merciful God</td>
            <td class="arabic">ولاليّ صدر حنَيّن سوى زين الأبكار مريم عون المسكين أم إله ورؤوفي</td>
        </tr>
        <tr id="table_71_row_42">
            <td class="coptic" style="border-right: 1px solid black;">O Mary my treasure
                I came to you hopeful
                Fearful of my judgment day
                And the day of the verdict</td>
            <td class="arabic">يا مريم يا ذخري انا جئتك عشمان خائف من يوم حشري ويوم نصب الميزان</td>
        </tr>
        <tr id="table_71_row_43">
            <td class="coptic" style="border-right: 1px solid black;">Before the end of my life
                Grant me faith
                And repentance pleasing to my soul
                And fear departs from me</td>
            <td class="arabic">قبل تمام عمري تجودي لي بإيمان وتوبة تشرح صدري ويزول عني الخوفي</td>
        </tr>
        <tr id="table_71_row_44">
            <td class="coptic" style="border-right: 1px solid black;">Repentance pleasing to my soul
                With tears upon my cheeks
                I do not fall to my tomb
                Till I am saved and redeemed</td>
            <td class="arabic">توبة تشرح صدري بدموع على الخد سحوم ولا أنزل قبري إلا خالص موفي</td>
        </tr>
        <tr id="table_71_row_45">
            <td class="coptic" style="border-right: 1px solid black;">Your servant came to you
                Hoping for your shelter
                Your light and honor
                My treasure and my hopes</td>
            <td class="arabic">عبدك اتاك ومتوسل بحماك نورك وبهاك يا ذخري والأمال.</td>
        </tr>
        <tr id="table_71_row_46">
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕⲃⲱⲕ Ⲅⲁⲃⲣⲓⲏⲗ
                ̀Ⲁⲛⲟⲕ ⲡⲓϩⲏⲕⲓ
                All my life I beg you
                Consumed in your love</td>
            <td class="arabic">Ⲡⲉⲕⲃⲱⲕ Ⲅⲁⲃⲣⲓⲏⲗ̀Ⲁⲛⲟⲕ ⲡⲓϩⲏⲕⲓطول عمري اترجاك وبحبك ملهوفي</td>
        </tr>
        <tr id="table_71_row_47">
            <td class="coptic" style="border-right: 1px solid black;">I conclude my words O brothers
                Praising Ϯⲡⲁⲣⲑⲉⲛⲟⲥ
                The prayers of the pride of warriors
                My Lord Ⲅⲉⲟⲣⲅⲓⲟⲥ</td>
            <td class="arabic">وأختم قولي يا أخوان بمديحϮⲡⲁⲣⲑⲉⲛⲟⲥ وصلاة فخر الشجعان سيدي Ⲅⲉⲟⲣⲅⲓⲟⲥ</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_72" data-title="Your Table Title Here"
        onclick="toggleTable('table_72', this)">+ Your Table Title Here</span>
    <table id="table_72" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_72_row_0">
            <td class="coptic" style="border-right: 1px solid black;">10
                You are more worthy, than all of the saints, to pray on our behalf, O full of grace.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲓ ˉ
                Ⲧ ⲉⲟⲓ ̀ⲛϩⲓⲕⲁⲛⲟⲥ : ̀ⲉϩⲟⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ : ⲉⲑⲣⲉⲧⲱⲃϩ ̀ⲉϫⲱⲛ : ̀ⲱ ⲑⲏⲉⲑⲙⲉϩ ̀ⲛ̀ϩⲙⲟⲧ.</td>
            <td class="arabic">١٠
                أنت مستحقة اكثر من جميع القديسين أن تطلبى عنا ايتها الممتلئة نعمة.</td>
        </tr>
        <tr id="table_72_row_1">
            <td class="coptic" style="border-right: 1px solid black;">You are exalted, more than the patriarchs, and
                honored more, than the prophets.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉϭⲟⲥⲓ ̀ⲉⲙⲁϣⲱ : ̀ⲉϩⲟⲧⲉ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲟⲩⲟϩ
                ⲧⲉⲧⲁⲓⲏⲟⲩⲧ : ̀ⲉϩⲟⲧⲉ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">أنت مرتفعة جداً أكثر من رؤساء الآباء. ومكرمة أفضل من الانبياء.</td>
        </tr>
        <tr id="table_72_row_2">
            <td class="coptic" style="border-right: 1px solid black;">And you have a seeking, more special, than the
                Cherubim, and the Seraphim.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲧⲉ ϫⲓⲛⲙⲟϣⲓ : ϧⲉⲛ ⲟⲩⲡⲁⲣⲣⲏⲥⲓ̀ⲁ: ̀ⲉϩⲟⲧⲉ
                Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ : ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ.</td>
            <td class="arabic">ولك سعي بدالة أكثر من الشاروبيم والسارافيم.</td>
        </tr>
        <tr id="table_72_row_3">
            <td class="coptic" style="border-right: 1px solid black;">For you are truly, the pride of our race, and the
                intercessor, of our souls.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟ ⲅⲁⲣ ̀ⲁⲗⲏⲑⲱⲥ : ⲡⲉ ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲙⲡⲉⲛⲅⲉⲛⲟⲥ : ⲟⲩⲟϩ
                ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ : ̀ⲛⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">لانك أنت بالحقيقة فخر جنسنا وشفيعة نفوسنا .</td>
        </tr>
        <tr id="table_72_row_4">
            <td class="coptic" style="border-right: 1px solid black;">Intercede for us, before our Savior, that He may
                keep us firm, in the upright faith.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉϫⲱⲛ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ : ϩⲟⲡⲱⲥ
                ̀ⲛⲧⲉϥⲧⲁϫⲣⲟⲛ : ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ.</td>
            <td class="arabic">اشفعى فينا أمام مخلصنا لكى يثبتنا فى الإيمان المستقيم .</td>
        </tr>
        <tr id="table_72_row_5">
            <td class="coptic" style="border-right: 1px solid black;">That He may grant us, the forgiveness of our sins,
                in order to win mercy, through your intercessions.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲧⲉϥⲉⲣ̀ϩⲙⲟⲧ ⲛⲁⲛ : ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ :
                ̀ⲛⲧⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ.</td>
            <td class="arabic">وينعم لنا بمغفرة خطايانا . لنفوز برحمة بشفاعاتك.</td>
        </tr>
        <tr id="table_72_row_6">
            <td class="coptic" style="border-right: 1px solid black;">11
                All the high names, of the incorporeal, thousands of angels, and archangels.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲓⲁ̅
                Ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲉⲧϭⲟⲥⲓ : ̀ⲛⲧⲉ ⲛⲓ̀ⲁⲥⲱⲙⲁⲧⲟⲥ : ⲛⲓ̀ⲁⲛⲁⲁⲛϣⲟ ̀ⲛⲁⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">۱۱
                كل الاسماء العالية التى لغير المتجسدين الوف الملائكة ورؤساء الملائكة.</td>
        </tr>
        <tr id="table_72_row_7">
            <td class="coptic" style="border-right: 1px solid black;">They did not attain, your high blessedness, O who
                is clothed in, the glory of the Lord of Hosts.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲙⲡⲟⲩ̀ϣⲫⲟϩ ̀ⲉ̀ⲡϭⲓⲥⲓ : ̀ⲛⲧⲉ ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ : ̀ⲱ
                ⲑⲏⲉⲧϫⲟⲗϩ ̀ⲙⲡⲓ̀ⲱⲟⲩ : ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ.</td>
            <td class="arabic">لم يبلغوا عظمة طوباوياتك أيتها المشتملة بمجد رب الجنود.</td>
        </tr>
        <tr id="table_72_row_8">
            <td class="coptic" style="border-right: 1px solid black;">You are brighter, than the sun, and more
                sparkling, than the Cherubim.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉϩⲓⲁⲕⲧⲓⲛ ̀ⲉⲃⲟⲗ : ̀ⲉϩⲟⲧⲉ ̀ⲫⲣⲏ : ⲧⲉⲟⲓ ̀ⲛⲗⲁⲙ̀ⲡⲣⲟⲥ :
                ̀ⲉϩⲟⲧⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">أنت مضيئة أكثر من الشمس ولامعة أكثر من الشاروبيم.</td>
        </tr>
        <tr id="table_72_row_9">
            <td class="coptic" style="border-right: 1px solid black;">And the Seraphim, with the six wings, which are
                joyfully, hovering over you.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛⲁ ⲡⲓⲥⲟⲟⲩ ̀ⲛⲧⲉⲛϩ : ⲥⲉⲉⲣⲣⲓⲡⲓⲍⲓⲛ
                ϧⲁϫⲱ : ϧⲉⲛ ⲟⲩ̀ⲉ̀ϣⲗⲏⲗⲟⲩ̀ⲓ.</td>
            <td class="arabic">والسارافيم ذوى الستة الأجنحة يرفرفون عليك بتهليل.</td>
        </tr>
        <tr id="table_72_row_10">
            <td class="coptic" style="border-right: 1px solid black;">12
                Your glory O Mary, is higher than heaven, you are more honored than the earth, and its inhabitants.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲓⲃ̅
                Ⲡⲉ̀ⲱⲟⲩ Ⲙⲁⲣⲓ̀ⲁ : ϭⲟⲥⲓ ̀ⲉϩⲟⲧⲉ ̀ⲧⲫⲉ : ⲧⲉⲧⲁⲓⲏⲟⲩⲧ ̀ⲉ̀ⲡⲕⲁϩⲓ : ⲛⲉⲙ ⲛⲏⲉⲧϣⲟⲡ ̀ⲛϧⲏⲧϥ.</td>
            <td class="arabic">۱۲
                مجدك يامريم أرفع من السماء وأنت أكرم من الأرض وسكانها.</td>
        </tr>
        <tr id="table_72_row_11">
            <td class="coptic" style="border-right: 1px solid black;">For you are truly, the real path, leading up, to
                the heavens.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲛⲑⲟ ⲅⲁⲣ ̀ⲁⲗⲏⲑⲱⲥ : ⲧⲉ ϯⲥⲧⲣⲁⲧⲁ ̀ⲙⲙⲏⲓ : ⲉⲧⲟⲓ
                ̀ⲙⲙⲁ̀ⲙⲙⲟϣⲓ : ̀ⲉ̀ⲡϣⲱⲓ ̀ⲉⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">لانك أنت بالحقيقة الطريق الحقيقى المؤدى إلى السموات.</td>
        </tr>
        <tr id="table_72_row_12">
            <td class="coptic" style="border-right: 1px solid black;">You are clothed, with joy and gladness, and
                girdled with power, O daughter of Zion.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲉϯϩⲓ̀ⲱϯ : ̀ⲙ̀ⲫⲣⲁϣⲓ ⲛⲉⲙ ̀ⲡⲑⲉⲗⲏⲗ : ̀ⲁⲣⲉⲙⲟⲣϯ
                ̀ⲛⲟⲩϫⲟⲙ : ̀ⲱ̀ⲧϣⲏⲣⲓ ̀ⲛⲤⲓⲱⲛ.</td>
            <td class="arabic">لبست الفرح والتهليل وتمنطقت بالقوة يا ابنة صهيون.</td>
        </tr>
        <tr id="table_72_row_13">
            <td class="coptic" style="border-right: 1px solid black;">O who was clothed, with the garments of the
                heavenly, so that you covered Adam, with the garments of grace.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲱ ⲑⲏ̀ⲉⲧⲁⲥϯϩⲓⲱⲧⲥ : ̀ⲛ̀ⲧϩⲉⲃⲥⲱ ̀ⲛⲛⲁ ⲛⲓⲫⲏⲟⲩ̀ⲓ :
                ϣⲁ̀ⲛⲧⲉⲥϩⲱⲃⲥ ̀ⲛⲀⲇⲁⲙ : ̀ⲛ̀ⲧϩⲉⲃⲥⲱ ̀ⲙⲡⲓ̀ϩⲙⲟⲧ.</td>
            <td class="arabic">يامن لبست لباس السمائيين حتى سترت آدم بلباس النعمة.</td>
        </tr>
        <tr id="table_72_row_14">
            <td class="coptic" style="border-right: 1px solid black;">And restored him, to Paradise, the place of joy,
                and the dwelling of the righteous.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲣⲉⲧⲁⲥⲑⲟϥ ̀ⲛⲕⲉⲥⲟⲡ : ̀ⲉⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ : ̀ⲡⲧⲟⲡⲟⲥ
                ̀ⲙ̀ⲡⲟⲩⲛⲟϥ : ̀ⲫⲙⲁ̀ⲛϣⲱⲡⲓ
                ̀ⲛⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
            <td class="arabic">وردته مرة أخرى إلى الفردوس موضع الفرح ومسكن الصديقين.</td>
        </tr>
        <tr id="table_72_row_15">
            <td class="coptic" style="border-right: 1px solid black;">13
                A true tabernacle, is Mary the Virgin, placed in its midst, the true testimonies.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲓⲅ̅
                Ⲟⲩ̀ⲥⲕⲏⲛⲏ ̀ⲙⲙⲏⲓ : ⲧⲉ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲉⲩⲭⲏ ϧⲉⲛ ⲧⲉⲥⲙⲏϯ : ̀ⲛϫⲉ ⲛⲓⲙⲉⲧⲙⲉⲑⲣⲉⲩ ̀ⲉⲧⲉⲛϩⲟⲧ.</td>
            <td class="arabic">١٣
                قبة حقيقية هى مريم العذراء موضوع فى وسطها الشهادات الصادقة.</td>
        </tr>
        <tr id="table_72_row_16">
            <td class="coptic" style="border-right: 1px solid black;">The undefiled Ark, overlaid roundabout with gold,
                and the Mercy Seat, of the Cherubim.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯⲕⲓⲃⲱⲧⲟⲥ ̀ⲛⲁⲧⲑⲱⲗⲉⲃ : ⲉⲧⲟϣϫ ̀ⲛⲛⲟⲩⲃ ̀ⲛⲥⲁⲥⲁ ⲛⲓⲃⲉⲛ :
                ⲛⲉⲙ ⲡⲓ̀ⲓⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ̀ ̀ⲛⲭⲉⲣⲟⲩⲃⲓⲙⲓⲕⲟⲛ.</td>
            <td class="arabic">التابوت الغير الدنس المصّفح بالذهب من كل ناحية. والغطاء الكاروبى .</td>
        </tr>
        <tr id="table_72_row_17">
            <td class="coptic" style="border-right: 1px solid black;">The golden pot, where the manna was hidden, Behold
                the Word of the Father, came and was incarnate of you.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ⲥⲧⲁⲙⲛⲟⲥ ̀ⲛⲛⲟⲩⲃ : ̀ⲉⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ ̀ⲛϧⲏⲧϥ : ⲓⲥ
                ⲡⲓⲗⲟⲅⲟⲥ ̀ⲛⲧⲉ ̀ Ⲫⲓⲱⲧ : ̀ⲓ ⲁϥϭⲓⲥⲁⲣⲝ ̀ⲛϧⲏϯ.</td>
            <td class="arabic">القسط الذهبى المخفى فيه المن هوذا كلمة الآب أتى وتجسد منك.</td>
        </tr>
        <tr id="table_72_row_18">
            <td class="coptic" style="border-right: 1px solid black;">The golden lampstand, carrying the True Light, who
                is the unapproachable, Light of the world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯⲗⲩⲭⲛⲓ̀ⲁ ̀ⲛⲛⲟⲩⲃ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ ̀ⲙⲙⲏⲓ : ̀ⲉⲧⲉ
                ̀ⲫⲟⲩⲱⲓⲛⲓ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ : ⲡⲓⲁⲧ̀ϣϧⲱⲛⲧ ̀ⲉⲣⲟϥ.</td>
            <td class="arabic">المنارة الذهبية الحاملة النور الحقيقى الذى هو نور العالم الذى لا يُدنى منه.</td>
        </tr>
        <tr id="table_72_row_19">
            <td class="coptic" style="border-right: 1px solid black;">The golden censer, carrying the live coal, and the
                chosen incense, with a rich aroma.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯϣⲟⲩⲣⲏ ̀ⲛⲛⲟⲩⲃ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϫⲉⲃⲥ ̀ⲛ̀ⲭⲣⲱⲙ : ⲛⲉⲙ
                ⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ : ̀ⲛ̀ⲁⲣⲱⲙⲁⲧⲁ.</td>
            <td class="arabic">المجمرة الذهبية الحاملة جمر النار والبخور المختار العنبرى .</td>
        </tr>
        <tr id="table_72_row_20">
            <td class="coptic" style="border-right: 1px solid black;">The rod of Aaron, that blossomed, and the holy
                flower, of incense.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ϣⲃⲱⲧ ̀ⲛⲧⲉ ̀ Ⲁ̀ⲁⲣⲱⲛ : ̀ⲉⲧⲁϥⲫⲓⲣⲓ ̀ⲉⲃⲟⲗ : ⲛⲉⲙ
                ϯ̀ϩⲣⲏⲣⲓ ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲧⲉ ⲡⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ.</td>
            <td class="arabic">عصا هارون التى أزهرت والزهرة المقدسة التى للبخور.</td>
        </tr>
        <tr id="table_72_row_21">
            <td class="coptic" style="border-right: 1px solid black;">All these together, direct us to, the miraculous
                birth, O Virgin Mary.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁⲓ ⲧⲏⲣⲟⲩ ⲉⲩⲥⲟⲡ : ⲥⲉⲉⲣⲥⲩⲙⲙⲉⲛⲓⲛ ⲛⲁⲛ : ̀ⲙⲡⲉϫⲓⲛⲙⲓⲥⲓ
                ̀ⲛ̀ϣⲫⲏⲣⲓ : ̀ⲱⲘⲁⲣⲓ̀ⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">هذه جميعها معاً تدُلنا على ولادتك العجيبة يامريم العذراء.</td>
        </tr>
        <tr id="table_72_row_22">
            <td class="coptic" style="border-right: 1px solid black;">14
                You decorated our souls, O Moses the prophet, by the honor of the Tabernacle, which you have adorned.
            </td>
            <td class="coptic" style="border-right: 1px solid black;">ⲓⲇ̅
                Ⲁⲕⲥⲟⲗⲥⲉⲗ ̀ⲛⲛⲉⲛⲯⲩⲭⲏ: ̀ⲱⲘⲱ̀ⲩⲥⲏⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ϧⲉⲛ ̀ⲡⲧⲁⲓ̀ⲟ ̀ⲛϯ̀ⲥⲕⲏⲛⲏ : ̀ⲉⲧⲁⲕⲥⲉⲗⲥⲱⲗⲥ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">١٤
                زينت نفوسنا ياموسى النبى بكرامة القبة التى زينتها.</td>
        </tr>
        <tr id="table_72_row_23">
            <td class="coptic" style="border-right: 1px solid black;">The first Tabernacle, which Moses had made, was
                the place of the forgiveness, for the children of Israel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯ̀ⲥⲕⲏⲛⲏ ̀ⲛϩⲟⲩ̀ⲓϯ : ̀ⲉⲧⲁ Ⲙⲱ̀ⲩⲥⲏⲥ ⲑⲁⲙⲓⲟⲥ :
                ̀ⲛⲟⲩⲙⲁ̀ⲛⲭⲁⲛⲟⲃⲓ ̀ⲉⲃⲟⲗ : ̀ⲛⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">القبة الأولى التى صنعها موسى موضع مغفرة خطايا بنى اسرائيل.</td>
        </tr>
        <tr id="table_72_row_24">
            <td class="coptic" style="border-right: 1px solid black;">He made it with glory, as commanded by the Lord,
                and according to the patterns, shown unto him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲑⲁⲙⲓⲟⲥ ϧⲉⲛ ⲟⲩ̀ⲱⲟⲩ : ⲕⲁⲧⲁ ̀ⲡⲥⲁϫⲓ ̀ⲙⲠϭⲟⲓⲥ : ⲛⲉⲙ
                ⲕⲁⲧⲁ ⲛⲓⲧⲩⲡⲟⲥ ⲧⲏⲣⲟⲩ : ̀ⲉⲧⲁⲩⲧⲁⲙⲟϥ ̀ⲉⲣⲱⲟⲩ.</td>
            <td class="arabic">صنعها بمجد كقول الرب وكجميع المُثل التى أعلمه بها.</td>
        </tr>
        <tr id="table_72_row_25">
            <td class="coptic" style="border-right: 1px solid black;">There was an Ark, in the Tabernacle, overlaid with
                gold, within and without.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩⲕⲓⲃⲱⲧⲟⲥ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ ⲉⲥⲗⲁⲗⲏⲟⲩⲧ ̀ⲛⲛⲟⲩⲃ :
                ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ.</td>
            <td class="arabic">كان فى القبة تابوت مصّفح بالذهب من داخل ومن خارج.</td>
        </tr>
        <tr id="table_72_row_26">
            <td class="coptic" style="border-right: 1px solid black;">There was a Mercy Seat, in the Tabernacle, and the
                golden Cherubim, overshadowed it.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩ̀ⲓⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ϩⲁⲛⲬⲉⲣⲟⲩⲃⲓⲙ
                ̀ⲛⲛⲟⲩⲃ : ⲥⲉⲉⲣϧⲏⲓⲃⲓ ̀ⲉϫⲱϥ.</td>
            <td class="arabic">كان فى القبة غطاء وكاروبا ذهب يظللان عليه.</td>
        </tr>
        <tr id="table_72_row_27">
            <td class="coptic" style="border-right: 1px solid black;">There was a golden pot, in the Tabernacle, and a
                measure of the manna, was hidden in it.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩ̀ⲥⲧⲁⲙⲛⲟⲥ ̀ⲛⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ̀ⲉⲣⲉ
                ⲟⲩϣⲓ̀ⲙⲙⲁⲛⲛⲁ ϩⲏⲡ : ̀ⲛ̀ϧⲣⲏⲓ ̀ⲛϧⲏⲧϥ.</td>
            <td class="arabic">كان فى القبة قسط ذهبى وكيل مّن مخفى فيه .</td>
        </tr>
        <tr id="table_72_row_28">
            <td class="coptic" style="border-right: 1px solid black;">There was a golden lampstand, in the Tabernacle,
                and the seven lamps, shown upon it.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩⲗⲩⲭⲛⲓ̀ⲁ ̀ⲛⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ̀ⲉⲣⲉ
                ⲡⲓϣⲁϣϥ ̀ⲛϧⲏⲃⲥ : ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲉϫⲱⲥ.</td>
            <td class="arabic">كان فى القبة منارة من ذهب وسبعة سرج تضئ عليها.</td>
        </tr>
        <tr id="table_72_row_29">
            <td class="coptic" style="border-right: 1px solid black;">There was a golden censer, in the Tabernacle, and
                the chosen aloe, was in its midst.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩϣⲟⲩⲣⲏ ̀ⲛⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ̀ⲉⲣⲉ
                ⲡⲓⲕⲩⲛⲁⲙⲱⲛⲟⲛ : ⲉⲧⲥⲱⲧⲡ ϧⲉⲛ ⲧⲉⲥⲙⲏϯ.</td>
            <td class="arabic">كان فى القبة مجمرة من ذهب والعود المختار فى وسطها.</td>
        </tr>
        <tr id="table_72_row_30">
            <td class="coptic" style="border-right: 1px solid black;">There was a flower of incense, in the Tabernacle,
                smelled by all, the house of Israel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩ̀ϩⲣⲏⲣⲓ ̀ⲛ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ :
                ⲉⲩϣⲱⲗⲉⲙ ̀ⲉⲣⲟⲥ ⲧⲏⲣⲟⲩ : ̀ⲛϫⲉ ⲛⲁ ̀ⲡⲏⲓ ̀ⲙⲠⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">كان فى القبة زهرة بخور يستنشق (رائحتها) جميع آل بيت اسرائيل.</td>
        </tr>
        <tr id="table_72_row_31">
            <td class="coptic" style="border-right: 1px solid black;">There was the rod of Aaron, in the Tabernacle,
                this which has blossomed, without planting or watering.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩ̀ϣⲃⲱⲧ ̀ⲛⲧⲉ̀ Ⲁ̀ⲁⲣⲱⲛ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ⲫⲁⲓ
                ̀ⲉⲧⲁϥⲫⲓⲣⲓ ̀ⲉⲃⲟⲗ : ⲭⲱⲣⲓⲥ ϭⲟ ⲛⲉⲙ ̀ⲧⲥⲟ.</td>
            <td class="arabic">كان فى القبة عصا هرون هذه التى أزهرت بغير غرس ولاسقى.</td>
        </tr>
        <tr id="table_72_row_32">
            <td class="coptic" style="border-right: 1px solid black;">There was a golden table, in the Tabernacle, and
                the oblation bread, was placed upon it.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩ̀ⲧⲣⲁⲡⲉⲍⲁ ̀ⲛⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ̀ⲡⲱⲓⲕ
                ̀ⲛϯ̀ⲡⲣⲟⲑⲉⲥⲓⲥ : ⲭⲏ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲥ.</td>
            <td class="arabic">كان فى القبة مائده ذهبية وخبز التقدمة موضوعا عليها.</td>
        </tr>
        <tr id="table_72_row_33">
            <td class="coptic" style="border-right: 1px solid black;">There was an archpriest, in the Tabernacle,
                offering sacrifices, on account of the people's sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟⲛ ⲟⲩⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ : ⲭⲏ ϧⲉⲛ ϯ̀ⲥⲕⲏⲛⲏ : ⲉϥⲉⲛ
                ϣⲟⲩϣⲱⲟⲩϣⲓ ̀ⲉ̀ⲡϣⲱⲓ : ̀ⲉϫⲉⲛ ⲛⲓⲛⲟⲃⲓ ̀ⲛⲧⲉ ⲡⲓⲗⲁⲟⲥ.</td>
            <td class="arabic">كان فى القبة رئيس كهنة يُصعد الذبائح عن خطايا الشعب.</td>
        </tr>
        <tr id="table_72_row_34">
            <td class="coptic" style="border-right: 1px solid black;">When the Almighty, smelled the aroma, He lifted up
                the sins, of the people.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϣⲁⲛϣⲱⲗⲉⲙ ̀ⲉⲣⲟϥ : ̀ⲛϫⲉ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : ϣⲁϥ̀ⲱⲗⲓ
                ̀ⲙⲙⲁⲩ : ̀ⲛⲛⲓⲛⲟⲃⲓ ̀ⲛⲧⲉ ⲡⲓⲗⲁⲟⲥ.</td>
            <td class="arabic">إذا اشتم رائحتها ضابط الكل يرفع هنالك خطايا الشعب.</td>
        </tr>
        <tr id="table_72_row_35">
            <td class="coptic" style="border-right: 1px solid black;">Through Mary, the daughter of Joachim, we learned
                of the true sacrifice, for the forgiveness of sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲉⲃⲟⲗϩⲓⲧⲉⲛ Ⲙⲁⲣⲓ̀ⲁ : ̀ⲧϣⲉⲣⲓ ̀ⲛⲒⲱ̀ⲁⲕⲓⲙ : ⲁⲛⲥⲟⲩⲉⲛ
                ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ ̀ⲙⲙⲏⲓ : ̀ⲛⲭⲁⲛⲟⲃⲓ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">من قبل مريم ابنة يواقيم عرفنا الذبيحة الحقيقية لمغفرة الخطايا.</td>
        </tr>
        <tr id="table_72_row_36">
            <td class="coptic" style="border-right: 1px solid black;">15
                Who can speak of, the honor of the Tabernacle, which was decorated, by the prophet.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲓⲉ̅
                Ⲛⲓⲙ ⲡⲉⲑⲛⲁ̀ϣⲥⲁϫⲓ : ̀ⲙ̀ⲡⲧⲁⲓ̀ⲟ ̀ⲛϯ̀ⲥⲕⲏⲛⲏ : ̀ⲉⲧⲁϥⲥⲉⲗⲥⲱⲗⲥ ̀ⲉⲃⲟⲗ : ̀ⲛϫⲉ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">١٥
                من يقدر أن يصف كرامة القبة التى زينها النبى .</td>
        </tr>
        <tr id="table_72_row_37">
            <td class="coptic" style="border-right: 1px solid black;">When the chosen scholars, of the Holy Books, saw
                it, they were greatly amazed.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲉⲧⲁⲩⲛⲁⲩ ̀ⲉⲣⲟⲥ : ̀ⲛϫⲉ ⲛⲓⲥⲱⲧⲡ ̀ⲛⲥⲁϧ : ̀ⲛⲧⲉ
                ⲛⲓ̀ⲅⲣⲁⲫⲏ ⲉⲑⲟⲩⲁⲃ : ⲁⲩϭⲓ̀ϣⲫⲏⲣⲓ ̀ⲉⲙⲁϣⲱ.</td>
            <td class="arabic">لما رآها المعلمون المختارون للكتب المقدسة تعجبوا جداً.</td>
        </tr>
        <tr id="table_72_row_38">
            <td class="coptic" style="border-right: 1px solid black;">They thought, with their enlightened minds, and
                explained it, through the Holy Books.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲙⲟⲕⲙⲉⲕ ̀ⲉⲃⲟⲗ : ϧⲉⲛ ⲡⲟⲩⲕⲁϯ ⲉⲧϣⲟⲙ : ⲁⲩⲉⲣⲙⲏⲛⲉⲩⲓⲛ
                ̀ⲙⲙⲟⲥ : ϧⲉⲛ ⲛⲓ̀ⲅⲣⲁⲫⲏ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">وفكروا بفهمهم السامي. وفسروها من الكتب المقدسة.</td>
        </tr>
        <tr id="table_72_row_39">
            <td class="coptic" style="border-right: 1px solid black;">They called Mary, the daughter of Joachim, the
                True tabernacle, of the Lord of Hosts.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲙⲟⲩϯ ̀ⲉⲘⲁⲣⲓ̀ⲁ : ̀ⲧϣⲉⲣⲓ ̀ⲛⲒⲱ̀ⲁⲕⲓⲙ : ϫⲉ ϯ̀ⲥⲕⲏⲛⲏ
                ̀ⲙⲙⲏⲓ : ̀ⲛⲧⲉ Ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ.</td>
            <td class="arabic">ودعوا مريم ابنة يواقيم القبة الحقيقية التى لرب الجنود.</td>
        </tr>
        <tr id="table_72_row_40">
            <td class="coptic" style="border-right: 1px solid black;">They likened the ark, to the Virgin, and its
                chosen gold, to her purity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ϯⲕⲓⲃⲱⲧⲟⲥ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲡⲉⲥⲕⲉⲛⲟⲩⲃ
                ⲉⲧⲥⲱⲧⲡ  : ϩⲓϫⲉⲛ ⲡⲉⲥⲧⲟⲩⲃⲟ.</td>
            <td class="arabic">شبهوا التابوت بالعذراء وذهبه المختار بطهارتها.</td>
        </tr>
        <tr id="table_72_row_41">
            <td class="coptic" style="border-right: 1px solid black;">They likened the mercy seat, to the Virgin, and
                the cherubim of glory, overshadowing her.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ⲡⲓ̀ⲓⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲓⲥ
                Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ ̀ⲛⲧⲉ ̀ⲡ̀ⲱⲟⲩ : ⲥⲉⲉⲣϧⲏⲓⲃⲓ ̀ⲉϫⲱⲥ.</td>
            <td class="arabic">شبهوا الغطاء بالعذراء. وكاروبا المجد يظللان عليها.</td>
        </tr>
        <tr id="table_72_row_42">
            <td class="coptic" style="border-right: 1px solid black;">They likened the golden pot, to the Virgin, and
                the measure of the manna, to our Savior.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ⲡⲓ̀ⲥⲧⲁⲙⲛⲟⲥ ̀ⲛⲛⲟⲩⲃ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲡⲉϥⲕⲉϣⲓ
                ̀ⲙⲙⲁⲛⲛⲁ : ϩⲓϫⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
            <td class="arabic">شبهوا القسط الذهبى بالعذراء وكيلة المن بمخلصنا.</td>
        </tr>
        <tr id="table_72_row_43">
            <td class="coptic" style="border-right: 1px solid black;">They likened the golden candle stand, to the
                Church, and the seven lamps, to its seven orders.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ϯⲗⲩⲭⲛⲓ̀ⲁ ̀ⲛⲛⲟⲩⲃ : ϩⲓϫⲉⲛ ϯⲉⲕ̀ⲕⲗⲏⲥⲓ̀ⲁ : ⲡⲉⲥⲕⲉ 
                ϣⲁϣϥ  ̀ⲛϧⲏⲃⲥ : ϩⲓϫⲉⲛ ⲡⲓ ϣⲁϣϥ   ̀ⲛⲧⲁⲅⲙⲁ.</td>
            <td class="arabic">شبهوا المنارة الذهبية بالكنيسة وسُرجُها السبعة بالسبع طغمات.</td>
        </tr>
        <tr id="table_72_row_44">
            <td class="coptic" style="border-right: 1px solid black;">They likened the golden censer, to the Virgin, and
                its aloes, to Emmanuel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ϯϣⲟⲩⲣⲏ ̀ⲛⲛⲟⲩⲃ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
                ⲡⲉⲥⲕⲩⲛⲁⲙⲱⲛⲟⲛ : ϩⲓϫⲉⲛ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">شبهوا المجمرة الذهبية بالعذراء . وعنبرها بعمانوئيل .</td>
        </tr>
        <tr id="table_72_row_45">
            <td class="coptic" style="border-right: 1px solid black;">They likened the flower of incense, to Mary the
                Queen, and the chosen incense, to her virginity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ϯ̀ϩⲣⲏⲣⲓ ̀ⲛ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ: ϩⲓϫⲉⲛ Ⲙⲁⲣⲓ̀ⲁ ϯⲟⲩⲣⲱ :
                ⲡⲉⲥⲕⲉ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ : ϩⲓϫⲉⲛ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓ̀ⲁ.</td>
            <td class="arabic">شبهوا زهرة البخور بمريم الملكة. وبخورها المختار ببتوليتها.</td>
        </tr>
        <tr id="table_72_row_46">
            <td class="coptic" style="border-right: 1px solid black;">They likened the rod of Aaron, to the wood of the
                cross, which my Lord was crucified upon, in order to save us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ⲡ̀ϣⲃⲱⲧ ̀ⲛⲧⲉ Ⲁ̀ⲁⲣⲱⲛ : ϩⲓϫⲉⲛ ̀ⲡϣⲉ ̀ⲛⲧⲉ
                ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ : ̀ⲉⲧⲁⲩⲉϣ Ⲡⲁϭⲟⲓⲥ ̀ⲉⲣⲟϥ : ϣⲁ̀ⲛⲧⲉϥⲥⲱϯ ̀ⲙⲙⲟⲛ.</td>
            <td class="arabic">شبهوا عصا هرون بخشبة الصليب التى صُلب ربى عليها حتى خلصنا.</td>
        </tr>
        <tr id="table_72_row_47">
            <td class="coptic" style="border-right: 1px solid black;">They likened the golden table, to the altar, and
                the oblation bread, to the body of the Lord.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ϯ̀ⲧⲣⲁⲡⲉⲍⲁ ̀ⲛⲛⲟⲩⲃ: ϩⲓϫⲉⲛ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ : ̀ⲡⲱⲓⲕ
                ̀ⲛϯ̀ⲡⲣⲟⲑⲉⲥⲓⲥ : ϩⲓϫⲉⲛ ̀ⲡⲥⲱⲙⲁ ̀ⲙⲠϭⲟⲓⲥ.</td>
            <td class="arabic">شبهوا المائدة الذهبية بالمذبح وخبز التقدمة بجسد الرب.</td>
        </tr>
        <tr id="table_72_row_48">
            <td class="coptic" style="border-right: 1px solid black;">They likened the archpriest, to our Savior, the
                true sacrifice, for the forgiveness of sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲉⲛ ⲡⲓⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ : ϩⲓϫⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ : ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ
                ̀ⲙⲙⲏⲓ : ̀ⲛⲭⲁⲛⲟⲃⲓ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">شبهوا رئيس الكهنة بمخلصنا الذبيحة الحقيقية لمغفرة الخطايا.</td>
        </tr>
        <tr id="table_72_row_49">
            <td class="coptic" style="border-right: 1px solid black;">He who offered himself, as an acceptable
                sacrifice, upon the Cross, for the salvation of our race.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲓ ̀ⲉⲧⲁϥⲉⲛϥ ̀ⲉ̀ⲡϣⲱⲓ : ̀ⲛⲟⲩⲑⲩⲥⲓ̀ⲁ ⲉⲥϣⲏⲡ : ϩⲓϫⲉⲛ
                ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ : ϧⲁ ̀ⲡⲟⲩϫⲁⲓ ̀ⲙⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">هذا الذى أصعد ذاته ذبيحة مقبولة على الصليب عن خلاص جنسنا.</td>
        </tr>
        <tr id="table_72_row_50">
            <td class="coptic" style="border-right: 1px solid black;">His Good Father, smelled Him, in the evening, on
                Golgotha.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϣⲱⲗⲉⲙ ̀ⲉⲣⲟϥ : ̀ⲛϫⲉ Ⲡⲉϥⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ : ̀ⲙ̀ⲫⲛⲁⲩ
                ̀ⲛⲧⲉ ϩⲁⲛ̀ⲁⲣⲟⲩϩⲓ : ϩⲓϫⲉⲛ Ϯⲅⲟⲗⲅⲟⲑⲁ.</td>
            <td class="arabic">فاشتمه أبوه الصالح وقت المساء على الجلجلة.</td>
        </tr>
        <tr id="table_72_row_51">
            <td class="coptic" style="border-right: 1px solid black;">He opened the gate, of Paradise, and restored
                Adam, to his authority.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲟⲩⲱⲛ ̀ⲙ̀ⲫⲣⲟ : ̀ⲙⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ : ⲁϥⲧⲁⲥⲑⲟ ̀ⲛ̀ Ⲁⲇⲁⲙ :
                ̀ⲉⲧⲉϥⲁⲣⲭⲏ ̀ⲛⲕⲉⲥⲟⲡ.</td>
            <td class="arabic">فتح باب الفردوس وردّ آدم إلى رئاسته مرة اخرى.</td>
        </tr>
        <tr id="table_72_row_52">
            <td class="coptic" style="border-right: 1px solid black;">Through Mary, the daughter of Joachim, we learned
                of the true sacrifice, for the forgiveness of sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲉⲃⲟⲗϩⲓⲧⲉⲛ Ⲙⲁⲣⲓ̀ⲁ : ̀ⲧϣⲏⲣⲓ ̀ⲛⲒⲱ̀ⲁⲕⲓⲙ : ⲁⲛⲥⲟⲩⲉⲛ
                ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ ̀ⲙⲙⲏⲓ : ̀ⲛⲭⲁⲛⲟⲃⲓ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">من قبل مريم ابنة يواقيم عرفنا الذبيحة الحقيقية لمغفرة الخطايا.</td>
        </tr>
        <tr id="table_72_row_53">
            <td class="coptic" style="border-right: 1px solid black;">And we also pray, that we may win mercy, through
                your intercessions, with the Lover of mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                ⲛⲉ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_73" data-title="Your Table Title Here"
        onclick="toggleTable('table_73', this)">+ Your Table Title Here</span>
    <table id="table_73" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_73_row_0">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are plenteous
                Your mercies O my God
                Has no boundaries</td>
            <td class="arabic">مراحمك ياإلهىكثيرة جداًمراحمك ياإلهىلاتحصى لها عددا</td>
        </tr>
        <tr id="table_73_row_1">
            <td class="coptic" style="border-right: 1px solid black;">The drops of rain
                Are counted in Your hands
                Also the sand of the sea
                Is present before Your eyes</td>
            <td class="arabic">قطرات الأمطارمعدودة بين يديكوأيضاً رمل البحار كائن قدام عينيك</td>
        </tr>
        <tr id="table_73_row_2">
            <td class="coptic" style="border-right: 1px solid black;">How much more are my sins
                My trespasses are before You
                And all that I have done
                Are present before You</td>
            <td class="arabic">كم بالأكثر خطاياىوآثامى قدامكوما صنعته يداىظاهر كله امامك</td>
        </tr>
        <tr id="table_73_row_3">
            <td class="coptic" style="border-right: 1px solid black;">The sins of my youth
                Remember it not O Lord
                Do not contemplate
                On my sins O God</td>
            <td class="arabic">خطايا صباى وجهلىيارب لاتذكرهاولا تتأمل آثامىياإلهى بل اتركها</td>
        </tr>
        <tr id="table_73_row_4">
            <td class="coptic" style="border-right: 1px solid black;">For You desire not
                The death of sinners
                But You are ever pleased
                That they return to You</td>
            <td class="arabic">فإنك لاتشاء موت الخاطىءبل تحب رجوعه إليكياإلهى اقبل طلباتىرجعت وتبت إليك</td>
        </tr>
        <tr id="table_73_row_5">
            <td class="coptic" style="border-right: 1px solid black;">The tax-collector was chosen
                The adulteress You forgave
                The thief You remembered
                Your mercy is boundless</td>
            <td class="arabic">فإن العشار اخترتهوالزانية غفرت لهاواللص يارب ذكرتهرحمتك لانهاية لها</td>
        </tr>
        <tr id="table_73_row_6">
            <td class="coptic" style="border-right: 1px solid black;">I am a sinner too
                O Lord teach me
                To offer repentance
                Like the adulteress accept me</td>
            <td class="arabic">وأنا خاطىء ايضاًيارب علمنىلكى اصنع توبةمثل الزانية اقبلنى</td>
        </tr>
        <tr id="table_73_row_7">
            <td class="coptic" style="border-right: 1px solid black;">Return us O God unto Your salvation
                For You are good and gracious
                Grant us Your salvation
                For you are our Savior</td>
            <td class="arabic">ردنا يارب الى خلاصكفإنك صالح ورحيمإصنع معنا كصلاحكلأنك قادر وكريم</td>
        </tr>
        <tr id="table_73_row_8">
            <td class="coptic" style="border-right: 1px solid black;">If You judge us in Your uprightness
                We shall have no excuse
                We await Your compassion
                And plead for Your mercy</td>
            <td class="arabic">وإن حاكمتنا بعدلكفلا نجد حجةلكن ننتظر فضلكومراحمك نترجى</td>
        </tr>
        <tr id="table_73_row_9">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are beyond all measure
                Your mercies O my God
                Are as the countless sand</td>
            <td class="arabic">مراحمك ياإلهىتعلو كل الابعادمراحمك ياإلهىكالرمل بغير عدد</td>
        </tr>
        <tr id="table_73_row_10">
            <td class="coptic" style="border-right: 1px solid black;">Your mercies O my God
                Are more than the stars in heaven
                And the plants of the earth
                The mountains and little hills</td>
            <td class="arabic">مراحمك ياإلهىأكثر من عدد النجوموأكثر من نبات الأرضوالجبال وكل النجوم</td>
        </tr>
        <tr id="table_73_row_11">
            <td class="coptic" style="border-right: 1px solid black;">O King of peace
                Grant us Your peace
                Confirm Your peace unto us
                And forgive us our sins</td>
            <td class="arabic">ياملك السلامسلامك أعطناقرر لنا سلامكوحل بروحك فينا</td>
        </tr>
        <tr id="table_73_row_12">
            <td class="coptic" style="border-right: 1px solid black;">Disperse the enemies
                Of Your Church
                Fortify her stronghold
                That she may never be shaken</td>
            <td class="arabic">فرق أعداء البيعةوحصنها بالإيمانبحصون عالية منيعةفلا تتزعزع لزمان</td>
        </tr>
        <tr id="table_73_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Emmanuel our God
                Is now in our midst
                With the Glory of His Father
                And the Holy Spirit</td>
            <td class="arabic">عمانوئيل نفسهفى وسطنا الآنبمجد أبيه وروح قدسهالآن وكل أوان</td>
        </tr>
        <tr id="table_73_row_14">
            <td class="coptic" style="border-right: 1px solid black;">May He bless us all
                And purify our hearts
                And heal the sickness
                Of our souls and bodies</td>
            <td class="arabic">فليباركنا كلناويطهر قلوبناويشفى أمراضناويخلص نفوسنا</td>
        </tr>
        <tr id="table_73_row_15">
            <td class="coptic" style="border-right: 1px solid black;">We worship the Father and the Son
                And the Holy Spirit
                Both now and forever
                And to the end of ages, Amen.</td>
            <td class="arabic">نسجد للآب والأبنوالروح القدسالآن وكل أوانوالى الأبد آمين</td>
        </tr>
        <tr id="table_73_row_16">
            <td class="arabic" style="border-right: 1px solid black;">بدء قانون الإيمان</td>
            <td class="coptic">INTRODUCTION TO THE CREED</td>
        </tr>
        <tr id="table_73_row_17">
            <td class="arabic" style="border-right: 1px solid black;">نعظمك يا أم النور الحقيقي، ونمجدك أيتها العذراء
                القديسة، والدة الإله، لأنك ولدت لنا مخلص العالم، أتى وخلص نفوسنا.</td>
            <td class="coptic">We exalt you, the Mother of the true Light. We glorify you, O Saint, the Theotokos, for
                you brought forth unto us the Savior of the whole world; He came and saved our souls.</td>
        </tr>
        <tr id="table_73_row_18">
            <td class="arabic" style="border-right: 1px solid black;">المجد لكَ يا سيدنا وملكنا المسيح، فخر الرسل، إكليل
                الشهداء تهليل الصديقين، ثبات الكنائس، غفران الخطايا.</td>
            <td class="coptic">Glory to You, our Master, our King, Christ, the pride of the apostles, the crown of the
                martyrs, the joy of the righteous, the firmness of the churches, the forgiveness of sins.</td>
        </tr>
        <tr id="table_73_row_19">
            <td class="arabic" style="border-right: 1px solid black;">نبشر بالثالوث القدوس، لاهوت واحد، نسجد له ونمجده.
                يا رب ارحم. يا رب ارحم. يا رب بارك. أمين.</td>
            <td class="coptic">We proclaim the Holy Trinity in One Godhead. We worship Him. We glorify Him. Lord have
                mercy. Lord have mercy. Lord bless. Amen.</td>
        </tr>
    </table>
    <br>
    <span class="toggle" id="toggle_table_74" data-title="Your Table Title Here"
        onclick="toggleTable('table_74', this)">+ Your Table Title Here</span>
    <table id="table_74" style="width: 100%; display: table; border-collapse: collapse;">
        <tr id="table_74_row_0">
            <td class="coptic" style="border-right: 1px solid black;">We believe in One God, God the Father, the
                Pantocrator, Creator of Heaven and earth, and of all things seen and unseen. We believe in One Lord,
                Jesus Christ, the Only-Begotten Son of God, Begotten of the Father before all ages. Light of Light, True
                God of True God; begotten, not created;</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛⲛⲁϩϯ ̀ⲉⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ: Ⲫϯ ̀Ⲫⲓⲱⲧ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲫⲏ
                ̀ⲉⲧⲁϥⲑⲁⲙⲓⲟ ̀ⲛ̀ⲧⲫⲉ ⲛⲉⲙ ̀ⲡⲕⲁϩⲓ ⲛⲏ ̀ⲉⲧⲟⲩⲛⲁⲩ ̀ⲉⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲏ ⲉⲧⲉ ̀ⲛⲥⲉⲛⲁⲩ ̀ⲉⲣⲱⲟⲩ ⲁⲛ. Ⲧⲉⲛⲛⲁϩϯ ̀ⲉⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ
                Ⲓˉⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ ̀̀̀Ⲡϣⲏⲣⲓ ̀ⲙⲪϯ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲡⲓⲙⲓⲥⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ̀Ⲫⲓⲱⲧ ϧⲁϫⲱⲟⲩ ̀ⲛⲛⲓ̀ⲉⲱⲛ ⲧⲏⲣⲟⲩ: ⲟⲩⲟⲩⲱⲓⲛⲓ
                ̀ⲉⲃⲟⲗϧⲉⲛ ⲟⲩⲟⲩⲱⲓⲛⲓ: ⲟⲩⲛⲟⲩϯ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ⲟⲩⲛⲟⲩϯ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ: ̀ⲟⲩⲙⲓⲥⲓ ⲡⲉ ⲟⲩⲑⲁⲙⲓⲟ ⲁⲛ ⲡⲉ:</td>
            <td class="arabic">نؤمن بإله واحد، الله الآب ضابط الكل، خالق السـمــاء والأرض، ما يري وما لا يري. نؤمن برب
                واحد، يسوع المسيح، ابن الله الوحيد المولود من الآب قبل كل الدهور. نور من نور، إله حق من إله حق، مولود
                غير مخلوق،</td>
        </tr>
        <tr id="table_74_row_1">
            <td class="coptic" style="border-right: 1px solid black;">of one essence with the Father by whom all things
                were made; who, for us men and for our salvation came down from heaven, and was incarnate of the Holy
                Spirit and of the Virgin Mary, and became Man. And He was crucified for us under Pontius Pilate,
                suffered and was buried;</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲟⲩ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ ⲡⲉ ⲛⲉⲙ ̀Ⲫⲓⲱⲧ ⲫⲏ ̀ⲉⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ϣⲱⲡⲓ
                ̀ⲉⲃⲟⲗ ϩⲓⲧⲟⲧϥ. Ⲫⲁⲓ ̀ⲉⲧⲉ ⲉⲑⲃⲏⲧⲉⲛ ̀ⲁⲛⲟⲛ ϧⲁ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ: ⲁϥ̀ⲓ ̀ⲉⲡⲉⲥⲏⲧ ̀ⲉⲃⲟⲗϧⲉⲛ ̀ⲧⲫⲉ ⲁϥϭⲓⲥⲁⲣⲝ
                ̀ⲉⲃⲟⲗϧⲉⲛ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ̀ⲉⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲟⲩⲟϩ ⲁϥⲉⲣⲣⲱⲙⲓ: ⲟⲩⲟϩ ⲁⲩⲉⲣ̀ⲥⲧⲁⲩⲣⲱⲛⲓⲛ ̀ⲙⲙⲟϥ ̀ⲉ̀ϩⲣⲏⲓ
                ̀ⲉϫⲱⲛ ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ: ⲁϥϣⲉⲡⲉⲙⲕⲁϩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ⲟⲩⲟϩ ⲁϥⲧⲱⲛϥ ̀ⲉⲃⲟⲗϧⲉⲛ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ</td>
            <td class="arabic">مساو للآب في الجوهر، الذى به كان كل شئ. هذا الذي من أجلنا نحن البشر، ومن أجل خلاصنا ، نزل
                من السمـاء ، وتجسد من الروح القدس ومن مريم العذراء وتأنس. وصلب عنا علي عهد بيلاطس البنطي ، تألم وقبر.
                وقام من بين الأموات</td>
        </tr>
        <tr id="table_74_row_2">
            <td class="coptic" style="border-right: 1px solid black;">and on the third day He rose from the dead
                according to the Scriptures. Ascended into heaven, He sits at the right hand of His Father; and He is
                coming again in His Glory to judge the living and the dead; whose kingdom shall have no end. Yes, we
                believe in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father;</td>
            <td class="coptic" style="border-right: 1px solid black;">ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲙⲙⲁϩ ⲅˉ (ϣⲟⲙⲧ) ⲕⲁⲧⲁ ⲛⲓ̀ⲅⲣⲁⲫⲏ.
                Ⲁϥϣⲉⲛⲁϥ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲉⲛⲓⲫⲏⲟⲩ̀ⲓ: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩ̀ⲓⲛⲁⲙ ̀ⲙⲠⲉϥⲓⲱⲧ. Ⲕⲉ ⲡⲁⲗⲓⲛ ⲉϥⲛⲏⲟⲩ ϧⲉⲛ ⲡⲉϥ̀ⲱⲟⲩ ̀ⲉϯϩⲁⲡ ̀ⲉ ⲛⲏ ⲉⲧⲟⲛϧ
                ⲛⲉⲙ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ: ⲫⲏ ̀ⲉⲧⲉ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ ⲟⲩⲁⲑⲙⲟⲩⲛⲕ ⲧⲉ. Ⲥⲉ ⲧⲉⲛⲛⲁϩϯ ̀ⲉⲠⲓ̀ⲡⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ̀ⲛⲣⲉϥϯ ̀ⲙ̀ⲡⲱⲛϧ ⲫⲏ
                ⲉⲑⲛⲏⲟⲩ ̀ⲉⲃⲟⲗ ϧⲉⲛ Ⲫⲓⲱⲧ:</td>
            <td class="arabic">في اليوم الثالث، كما في الكتب. وصعد الي السـمــوات، وجلس عن يمين أبيه. وأيضا يأتي في مجده
                ليدين الأحياء والأمــوات ، الذي ليس لملكه انقضاء. نعم نؤمـن بالروح القدس ، الرب المحيي المنبثق من الآب،
            </td>
        </tr>
        <tr id="table_74_row_3">
            <td class="coptic" style="border-right: 1px solid black;">who, with the Father and the Son, is Worshiped and
                Glorified; who spoke by the prophets. And in one Holy, Catholic and Apostolic Church. We confess one
                Baptism, for the remission of sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲥⲉⲟⲩⲱϣⲧ ̀ⲙⲙⲟϥ ⲥⲉϯ̀ⲱⲟⲩ ⲛⲁϥ ⲛⲉⲙ Ⲫⲓⲱⲧ ⲛⲉⲙ ̀Ⲡϣⲏⲣⲓ :ⲫⲏ
                ̀ⲉⲧⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ. Ⲉⲟⲩ̀ⲓ ̀ⲛ̀ⲁⲅⲓ̀ⲁ ̀ⲛⲕⲁⲑⲟⲗⲓⲕⲏ ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲓⲕⲏ ̀ⲛⲉⲕ̀ⲕⲗⲏⲥⲓⲁ. Ⲧⲉⲛⲉⲣ̀ⲟⲙⲟⲗⲟⲅⲓⲛ ̀ⲛⲟⲩⲱⲙⲥ
                ̀ⲛⲟⲩⲱⲧ ̀ⲉ̀ⲡⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲓⲛⲟⲃⲓ.</td>
            <td class="arabic">نسجد له ونمجده مع الآب والابن، الناطق في الانبيــاء. وبكنيسة واحدة مقدسة جامعة
                رسـوليـــة. ونـعـتـرف بمعمودية واحدة لمغفرة الخطايا.</td>
        </tr>
        <tr id="table_74_row_4">
            <td class="coptic" style="border-right: 1px solid black;">We look for the resurrection of the dead, and the
                life of the age to come. Amen.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛϫⲟⲩϣⲧ ̀ⲉⲃⲟⲗ ϧⲁ ̀ⲧϩⲏ ̀ⲛϯ̀ⲁⲛⲁⲥⲧⲁⲥⲓⲥ ̀ⲛⲧⲉ
                ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ: ⲛⲉⲙ ⲡⲓⲱⲛϧ ̀ⲛⲧⲉ ⲡⲓ̀ⲉⲱⲛ ⲉⲑⲛⲏⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">وننتظر قيامة الأموات ، وحياة الدهر الآتي آمين.</td>
        </tr>
        <tr id="table_74_row_5">
            <td class="coptic" style="border-right: 1px solid black;">Lord Have Mercy (3)</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ (3)</td>
            <td class="arabic">يارب إرحم(3)</td>
        </tr>
        <tr id="table_74_row_6">
            <td class="coptic" style="border-right: 1px solid black;">O God have mercy on us:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ .</td>
            <td class="arabic">ياالله ارحمنا.</td>
        </tr>
        <tr id="table_74_row_7">
            <td class="coptic" style="border-right: 1px solid black;">O God hear us:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫϯ ⲥⲱⲧⲉⲙ ̀ⲉⲣⲟⲛ .</td>
            <td class="arabic">ياالله اسمعنا.</td>
        </tr>
        <tr id="table_74_row_8">
            <td class="coptic" style="border-right: 1px solid black;">O God behold us:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫϯ ⲥⲟⲙⲥ ̀ⲉⲣⲟⲛ.</td>
            <td class="arabic">ياالله انظر الينا.</td>
        </tr>
        <tr id="table_74_row_9">
            <td class="coptic" style="border-right: 1px solid black;">O God look to us:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫϯ ϫⲟⲩϣⲧ ̀ⲉⲣⲟⲛ .</td>
            <td class="arabic">ياالله اطّلع علينا</td>
        </tr>
        <tr id="table_74_row_10">
            <td class="coptic" style="border-right: 1px solid black;">O God have compassion on us:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫϯ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
            <td class="arabic">يا الله تراءف علينا.</td>
        </tr>
        <tr id="table_74_row_11">
            <td class="coptic" style="border-right: 1px solid black;">We are Your people:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲟⲛ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ.</td>
            <td class="arabic">نحن شعبك .</td>
        </tr>
        <tr id="table_74_row_12">
            <td class="coptic" style="border-right: 1px solid black;">We are Your creation:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲟⲛ ϧⲁ ⲡⲉⲕ̀ⲡⲗⲁⲥⲙⲁ.</td>
            <td class="arabic">نحن جبلتك</td>
        </tr>
        <tr id="table_74_row_13">
            <td class="coptic" style="border-right: 1px solid black;">Deliver us from our enemies:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁϩⲙⲉⲛ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛϫⲁϫⲓ .</td>
            <td class="arabic">نجنا من أعدائنا</td>
        </tr>
        <tr id="table_74_row_14">
            <td class="coptic" style="border-right: 1px solid black;">Deliver us from inflation:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁϩⲙⲉⲛ ̀ⲉⲃⲟⲗϩⲁ ⲟⲩ̀ϩⲃⲱⲛ .</td>
            <td class="arabic">نجنا من الغلاء .</td>
        </tr>
        <tr id="table_74_row_15">
            <td class="coptic" style="border-right: 1px solid black;">We are Your servants:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲟⲛ ϧⲁ ⲛⲉⲕ̀ⲉⲃⲓⲁⲓⲕ</td>
            <td class="arabic">نحن عبيدك .</td>
        </tr>
        <tr id="table_74_row_16">
            <td class="coptic" style="border-right: 1px solid black;">You are the Son of God:</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ̀ⲛⲑⲟⲕ.</td>
            <td class="arabic">أنت ابن الله.</td>
        </tr>
        <tr id="table_74_row_17">
            <td class="coptic" style="border-right: 1px solid black;">We believe in You:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲛⲁϩϯ ̀ⲉⲣⲟⲕ .</td>
            <td class="arabic">آمنا بك.</td>
        </tr>
        <tr id="table_74_row_18">
            <td class="coptic" style="border-right: 1px solid black;">For You Have come and saved us:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁⲕ̀ⲓ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ</td>
            <td class="arabic">لانك أتيت وخلصتنا</td>
        </tr>
        <tr id="table_74_row_19">
            <td class="coptic" style="border-right: 1px solid black;">Visit us with Your salvation:</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ .</td>
            <td class="arabic">تعهدنا بخلاصك.</td>
        </tr>
        <tr id="table_74_row_20">
            <td class="coptic" style="border-right: 1px solid black;">And forgive us our sins</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">واغفر لنا خطيانا.</td>
        </tr>
        <tr id="table_74_row_21">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ARCHANGEL GABRIEL</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_22">
            <td class="coptic" style="border-right: 1px solid black;">Gabriel the Archangel, was seen by Daniel, as he
                stood upon his feet, by the shore of the river.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲁϥⲛⲁⲩ ̀ⲉⲣⲟϥ ̀ⲛϫⲉ Ⲇⲁⲛⲓⲏⲗ:
                ⲉϥⲟϩ̀ⲓ ̀ⲉⲣⲁⲧϥ ϩⲓϫⲉⲛ ⲛⲉϥⲫⲁⲧ: ϩⲓϫⲉⲛ ⲛⲉⲛ̀ⲥⲫⲟⲧⲟⲩ ̀ⲙ̀ⲫⲓⲁⲣⲟ.</td>
            <td class="arabic">غبريال الملاك رآه دانيال واقفا على قدميه على شاطىء النهر.</td>
        </tr>
        <tr id="table_74_row_23">
            <td class="coptic" style="border-right: 1px solid black;">He stretched out, his right hand to heaven, and he
                swore to the High One, who endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲥⲟⲩⲧⲉⲛ ⲧⲉϥϫⲓϫ ̀ⲉⲃⲟⲗ: ̀ⲛⲟⲩ̀ⲓⲛⲁⲙ ϣⲁ ̀ⲉ̀ϩⲣⲏⲓ
                ̀ⲉ̀ⲧⲫⲉ: ̀ⲉⲧⲁϥⲱⲣⲕ ̀ⲙⲫⲏⲉⲧ̀ϭⲟⲥⲓ: ⲫⲏ̀ⲉⲧϣⲟⲡ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">ومد يده اليمنى الى السماء وحلف بالعلى الدائم الى الأبد.</td>
        </tr>
        <tr id="table_74_row_24">
            <td class="coptic" style="border-right: 1px solid black;">Saying "From a time, and times to half a time,
                until the completion of the visions, I will show to you."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲓⲥϫⲉⲛ ⲟⲩⲥⲏⲟⲩ ϣⲁ ⲟⲩⲥⲏⲟⲩ: ϣⲁ ̀ⲧⲕⲉⲫⲁϣⲓ ̀ⲛⲧⲉ
                ⲟⲩⲥⲏⲟⲩ: ϣⲁ ̀ⲡϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲓϩⲟⲣⲁⲥⲓⲥ: ̀ⲁⲛⲟⲕ ϯⲛⲁⲧⲁⲙⲟⲕ ̀ⲉⲣⲱⲟⲩ.</td>
            <td class="arabic">قائلا من زمان الى زمان والى نصف زمان الى تمام الرؤيا أنا أخبرك بها.</td>
        </tr>
        <tr id="table_74_row_25">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangel, Gabriel
                the Announcer, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲁⲣⲭ̀ⲁⲅⲅⲉⲗⲟⲥ
                ̅ⲉ̅ⲑ̅ⲩⲓ: Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓϥⲁⲓϣⲉⲛⲛⲟϥⲓ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب الملائكة الطاهر غبريال المبشر ليغفر رئيس السمائيين ليغفر لنا خطايانا.
            </td>
        </tr>
        <tr id="table_74_row_26">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ARCHANGEL RAPHAEL</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_27">
            <td class="coptic" style="border-right: 1px solid black;">Every generation that was from, Adam to this day,
                find Raphael, a fortress for mankind.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲅⲉⲛⲉ̀ⲁ ⲛⲓⲃⲉⲛ ̀ⲉⲧⲁⲩϣⲱⲡⲓ: ⲓⲥϫⲉⲛ Ⲁⲇⲁⲙ ϣⲁ ̀ⲉϧⲟⲩⲛ
                ̀ⲉⲫⲟⲟⲩ: ⲥⲉϫⲓⲙⲓ ⲅⲁⲣ ̀ⲛⲢⲁⲫⲁⲏⲗ: ⲉϥⲟⲓ ̀ⲛⲥⲟⲃⲧ ̀ⲉϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">كل الأجيال الذين كانوا من آدم الى اليوم يجدون رافائيل حصنا للبشرية.</td>
        </tr>
        <tr id="table_74_row_28">
            <td class="coptic" style="border-right: 1px solid black;">Each one of the judges, the prophets and the just,
                and the righteous kings, were supported by him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲟⲩⲁⲓ ⲫⲟⲩⲁⲓ ̀ⲛⲧⲉ ⲛⲓ̀ⲕⲣⲓⲧⲏⲥ: ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ
                ⲛⲓ̀ⲑⲙⲏⲓ: ⲛⲉⲙ ⲛⲓⲟⲩⲣⲱⲟⲩ ̀ⲛⲇⲓⲕⲉⲱⲥ: ̀ⲛⲑⲟϥ ⲉⲧⲟⲓ ̀ⲛⲛⲁϣϯ ⲛⲱⲟⲩ.</td>
            <td class="arabic">وكل واحد من القضاة والأنبياء والأبرار والملوك والصديقين كان ناصرا لهم.</td>
        </tr>
        <tr id="table_74_row_29">
            <td class="coptic" style="border-right: 1px solid black;">He has guided, our holy fathers the Apostles,
                until they restored the world, to the knowledge of the Truth.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲉⲛⲓⲟϯ ̅ⲉ̅ⲑ̅ⲩ ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ⲛⲑⲟϥ ̀ⲉⲧⲉⲣϭⲁⲩⲙⲱⲓⲧ
                ϧⲁϫⲱⲟⲩ: ϣⲁ̀ⲛⲧⲟⲩⲧⲁⲥⲑⲟ ̀ⲛϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ: ̀ⲉϧⲟⲩⲛ ̀ⲉ̀ⲡⲥⲟⲩⲉⲛ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">وأباؤنا القديسون الرسل هو الذى أرشدهم حتى ردوا المسكونة الى معرفة الحق.</td>
        </tr>
        <tr id="table_74_row_30">
            <td class="coptic" style="border-right: 1px solid black;">He did not forsake, any of the struggling martyrs,
                of our Lord Jesus Christ, until they wore the unfading crown.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓ̀ⲁⲑⲗⲓⲧⲏⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ̀ⲛⲧⲉ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ:
                ̀ⲙⲡⲉϥ̀ⲥⲉⲛⲟⲩ ̀ⲉⲃⲟⲗ ̀ⲙ̀ⲡⲧⲏⲣϥ: ϣⲁ̀ⲛⲧⲟⲩⲉⲣⲫⲟⲣⲓⲛ ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ ̀ⲛ̀ⲁⲧⲗⲱⲙ.</td>
            <td class="arabic">والشهداء المجاهدون الذين لربنا يسوع المسيح لم يفارقهم جميعا حتى لبسوا الاكليل غير
                المضمحل.</td>
        </tr>
        <tr id="table_74_row_31">
            <td class="coptic" style="border-right: 1px solid black;">The chosen ascetics, who were lost in the
                wilderness, Raphael surrounded them, until they completed their lives.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲕⲉⲥⲱⲧⲡ ̀ⲛⲁⲥⲕⲏⲧⲏⲥ: ⲉⲧⲥⲱⲣⲉⲙ ̀ⲉⲃⲟⲗ ϩⲓ ⲛⲓϣⲁϥⲉⲩ:
                Ⲣⲁⲫⲁⲏⲗ ϩⲓⲕⲱⲧ ̀ⲉⲣⲱⲟⲩ: ϣⲁ̀ⲛⲧⲟⲩϫⲱⲕ ̀ⲙⲡⲟⲩⲃⲓⲟⲥ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">والنساك المختارون التائهون فى البرارى كان رافائيل يحيط بهم حتى أكملوا سعيهم.</td>
        </tr>
        <tr id="table_74_row_32">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore the angel of the Lord, surrounds
                everyone, who fears the face of God, he guards and delivers them.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲣⲉ ̀ⲡ̀ⲁⲅⲅⲉⲗⲟⲥ ̀ⲙⲠ̅ⲟ̅ⲥ: ϩⲓⲕⲱⲧ ̀ⲙ̀ⲡⲕⲱϯ ̀ⲛⲟⲩⲟⲛ
                ⲛⲓⲃⲉⲛ: ̀ⲉⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ϣⲁϥⲣⲱⲓⲥ ̀ⲉⲣⲱⲟⲩ ⲟⲩⲟϩ ϣⲁϥⲛⲁϩⲙⲟⲩ.</td>
            <td class="arabic">ملاك الرب يحيط بكل خائفيه يحرسهم وينجيهم.</td>
        </tr>
        <tr id="table_74_row_33">
            <td class="coptic" style="border-right: 1px solid black;">Let us glorify the Holy, and Coessential Trinity,
                so that He may keep us, away from temptations.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛϯⲱⲟ̀ⲩ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ: ̅ⲉ̅ⲑ̅ⲩ ̀ⲛ̀ⲟⲙⲟ̀ⲟⲩⲥⲓⲟⲥ: ϩⲓⲛⲁ
                ̀ⲛⲧⲉϥ̀ⲁⲣⲉϩ ̀ⲉⲣⲟⲛ: ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
            <td class="arabic">فلنمجد الثالوث القدوس المساوى لكى يحفظنا من التجارب.</td>
        </tr>
        <tr id="table_74_row_34">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangel, Raphael
                the joy of all hearts, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲁⲣⲭⲏ̀ⲁⲅⲅⲉⲗⲟⲥ
                ̅ⲉ̅ⲑ̅ⲩ: Ⲣⲁⲫⲁⲏⲗ ̀ⲡⲟⲩⲛⲟϥ ̀ⲛϩⲏⲧ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب يارئيس الملائكة الطاهر رافائيل مفرح القلوب ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_35">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ARCHANGEL SURIEL</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_36">
            <td class="coptic" style="border-right: 1px solid black;">Let us worship the Father and the Son, and the
                Holy Spirit, and honor Suriel, the fourth archangel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲪⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ: ⲛⲉⲙ ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ:
                ̀ⲛⲧⲉⲛⲧⲁⲓ̀ⲟ ̀ⲛⲤⲟⲩⲣⲓⲏⲗ: ⲡⲓⲙⲁϩ ̀ϥⲧⲟⲟⲩ ̀ⲛ̀ⲁⲣⲭⲏ̀ⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">فلنسجد للآب والابن والروح القدس ونكرم سوريال الرابع فى رؤساء الملائكة.</td>
        </tr>
        <tr id="table_74_row_37">
            <td class="coptic" style="border-right: 1px solid black;">Good is the joy of Suriel, which we ascribe to him
                in the churches, more than the joy of a bridegroom, of this passing world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁⲛⲉ ̀ⲫⲣⲁϣⲓ ̀ⲛⲤⲟⲩⲣⲓⲏⲗ: ⲉⲛ̀ⲓⲣⲓ ̀ⲙⲙⲟϥ ϧⲉⲛ
                ⲛⲓ̀ⲉⲕⲕⲗⲏⲥⲓⲁ: ̀ⲉϩⲟⲧⲉ ̀ⲫⲣⲁϣⲓ ̀ⲛⲟⲩⲡⲁⲧϣⲉⲗⲉⲧ: ̀ⲛⲧⲉ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ ⲉⲑⲛⲁⲥⲓⲛⲓ.</td>
            <td class="arabic">جيد هو فرح سوريال نصنعه فى الكنائس أكثر من فرح عرس هذا العالم الزائل.</td>
        </tr>
        <tr id="table_74_row_38">
            <td class="coptic" style="border-right: 1px solid black;">You know O my beloved, that the joy of this world
                passes, but the joy of Suriel, endures forever.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲝⲱⲟⲩⲛ ϩⲱⲕ ̀ⲱ ⲡⲁⲙⲉⲛⲣⲓⲧ: ϫⲉ ̀ⲫⲣⲁϣⲓ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ
                ̀ϥⲛⲁⲥⲓⲛⲓ: ⲟⲩⲟϩ ̀ⲫⲣⲁϣⲓ ̀ⲛⲤⲟⲩⲣⲓⲏⲗ: ̀ϥⲙⲏⲛ ̀ⲉⲃⲟⲗ ϣⲁ ̀ⲉⲛⲉϩ.</td>
            <td class="arabic">أنت أيضا تعلم أيها الحبيب أن فرح العالم يزول وأما فرح سوريال فيدوم الى الأبد.</td>
        </tr>
        <tr id="table_74_row_39">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangel, Suriel
                the trumpeter, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲓ̀ⲁⲣⲭⲏ̀ⲁⲅⲅⲉⲗⲟⲥ
                ̅ⲉ̅ⲑ̅ⲩ: Ⲥⲟⲩⲣⲓⲏⲗ ⲡⲓⲥⲁⲗⲡⲓⲥⲧⲏⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب يارئيس الملائكة الطاهر سوريال المبوق ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_40">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE FOUR CREATURES</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_41">
            <td class="coptic" style="border-right: 1px solid black;">The four incorporeal creatures, carry the throne
                of God, a face of lion and a face of a ram, a face of a man and a face of an eagle.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ϥⲧⲟⲟⲩ ̀ⲛⲍⲱⲟⲩⲛ ̀ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ: ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ
                ̀ⲛⲧⲉ Ⲫϯ: ⲟⲩϩⲟ ̀ⲙⲙⲟⲩ̀ⲓ ⲛⲉⲙ ⲟⲩϩⲟ ̀ⲙⲙⲁⲥⲓ: ⲟⲩϩⲟ ̀ⲛⲣⲱⲙⲓ ⲛⲉⲙ ⲟⲩϩⲟ ̀ⲛ̀ⲁⲏⲧⲟⲥ.</td>
            <td class="arabic">الأربعة الحيوانات غير المتجسدين الحاملين مركبة الله. وجه أسد ووجه ثور ووجه انسان ووجه
                نسر.</td>
        </tr>
        <tr id="table_74_row_42">
            <td class="coptic" style="border-right: 1px solid black;">And they are full of eyes, from their fronts to
                their backs, six wings to the one, and six wings to the other.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲟⲛ ⲉⲩⲙⲉϩ ̀ⲙⲃⲁⲗ: ϩⲓ ̀ⲧϩⲏ ⲛⲉⲙ ϩⲓ ⲫⲁϩⲟⲩ ̀ⲙⲙⲱⲟⲩ:
                ⲥⲟⲟⲩ (ⲋ) ̀ⲛⲧⲉⲛϩ ̀ⲙⲡⲓⲟⲩⲁⲓ: ⲛⲉⲙ ⲥⲟⲟⲩ (ⲋ) ̀ⲛⲧⲉⲛϩ ̀ⲙⲡⲓⲕⲉⲟⲩⲁⲓ.</td>
            <td class="arabic">وهم أيضا ممتلئون أعينا من قدام ومن خلفهم. ستة أجنحة للواحد وستة أجنحة للآخر</td>
        </tr>
        <tr id="table_74_row_43">
            <td class="coptic" style="border-right: 1px solid black;">With two they cover their faces, with two they
                cover their feet, they fly with the other two, and proclaim and say.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ̀ⲥⲛⲁⲩ ⲉⲩϩⲱⲃⲥ ̀ⲛⲛⲟⲩϩⲟ: ϧⲉⲛ ̀ⲥⲛⲁⲩ ⲉⲩϩⲱⲃⲥ
                ̀ⲛⲛⲟⲩϭⲁⲗⲁⲩϫ: ⲉⲩϩⲏⲗ ϫⲉ ϧⲉⲛ ⲡⲓⲕⲉ̀ⲥⲛⲁⲩ: ⲉⲩⲱϣ ̀ⲉⲃⲟⲗ ⲉⲩϫⲱ ̀ⲙⲙⲟⲥ.</td>
            <td class="arabic">باثنين يغطون وجوههم وباثنين يغطون أرجلهم. ويطيرون باثنين ويصرخون قائلين.</td>
        </tr>
        <tr id="table_74_row_44">
            <td class="coptic" style="border-right: 1px solid black;">"Holy and holy, holy O Lord of hosts, heaven and
                earth are full of, Your glory and Your honor."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲭⲟⲩⲁⲃ ⲟⲩⲟϩ ̀ⲭⲟⲩⲁⲃ: ̀ⲭⲟⲩⲁⲃ Ⲡ̅ⲟ̅ⲥ ⲥⲁⲃⲁⲱⲑ: ̀ⲧⲫⲉ
                ⲛⲉⲙ ̀ⲡⲕⲁϩⲓ ⲙⲉϩ ̀ⲉⲃⲟⲗ: ϧⲉⲛ ⲡⲉⲕ̀ⲱⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓ̀ⲟ.</td>
            <td class="arabic">قدوس قدوس قدوس رب الصاباؤوت. السماء والأرض مملوءتان من مجدك وكرامتك.</td>
        </tr>
        <tr id="table_74_row_45">
            <td class="coptic" style="border-right: 1px solid black;">We also praise with them, with incessant voices,
                saying "Holy holy, holy O Lord."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲧⲉⲛϩⲱⲥ ⲛⲉⲙⲱⲟⲩ: ϧⲉⲛ ϩⲁⲛ̀ⲥⲙⲏ
                ̀ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ: ϫⲉ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ: ⲁⲅⲓⲟⲥ ̀ⲱ Ⲕⲩⲣⲓⲟⲥ.</td>
            <td class="arabic">نسبح معهم بأصوات غير ساكتة قائلين قدوس قدوس قدوس أيها الرب.</td>
        </tr>
        <tr id="table_74_row_46">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O four incorporeal
                creatures, the ministers fervent as fire, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ϥⲧⲟⲟⲩ ̀ⲛⲍⲱⲟⲩⲛ
                ̀ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ: ̀ⲛⲗⲓⲧⲟⲣⲅⲟⲥ ̀ⲛϣⲁϩ ̀ⲛ̀ⲭⲣⲱⲙ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفعوا فينا أمام الرب أيها الأربعة الحيوانات غير المتجسدين الخدام الملتهبون نارا ليغفر
                لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_47">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE 24 PRESBYTERS</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_48">
            <td class="coptic" style="border-right: 1px solid black;">For great is the honor, of the incorporeal saints,
                the priests of the truth, the twenty four presbyters.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲓⲧⲁⲓ̀ⲟ: ̀ⲛⲧⲉ ⲛⲏ̅ⲉ̅ⲑ̅ⲩ ̀ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ:
                ⲛⲓⲟⲩⲏⲃ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲡⲓϫⲟⲩⲧ ̀ϥⲧⲟⲟⲩ ̀ⲙ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ.</td>
            <td class="arabic">عظيمة هى كرامة القديسين غير المتجسدين كهنة كهنة الحق الاﺮبعة ﻮﻋشرﻴﻦ قسيسا.</td>
        </tr>
        <tr id="table_74_row_49">
            <td class="coptic" style="border-right: 1px solid black;">Because they are close to God, and near to His
                throne, they praise Him unceasingly, by day and by night.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ϫⲉ ⲥⲉϧⲉⲛⲧ ̀ⲉϧⲟⲩⲛ Ⲫϯ: ⲟⲩⲟϩ ⲉⲩⲭⲏ ⲛⲁϩⲣⲉⲛ
                ⲡⲉϥ̀ⲑⲣⲟⲛⲟⲥ: ⲉⲩϩⲱⲥ ̀ⲉⲣⲟϥ ϧⲉⲛ ⲟⲩⲙⲉⲧ̀ⲁⲧⲙⲟⲩⲛⲕ: ̀ⲙⲡⲓ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲉϫⲱⲣϩ.</td>
            <td class="arabic">من أجل أنهم قريبون من الله وكائنون أمام كرسيه يسبحون بلافتور النهار والليل.</td>
        </tr>
        <tr id="table_74_row_50">
            <td class="coptic" style="border-right: 1px solid black;">They sit upon twenty four thrones, with crowns
                upon their heads, and with golden bowls in their hands, full of chosen incense.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ϫⲟⲩⲧ ̀ϥⲧⲟⲟⲩ ̀ⲛ̀ⲑⲣⲟⲛⲟⲥ: ̀ⲉⲣⲉ ϩⲁⲛ̀ⲭⲗⲟⲙ
                ϩⲓϫⲉⲛ ⲛⲟⲩ̀ⲁⲫⲏⲟⲩ̀ⲓ: ̀ⲉⲣⲉ ϩⲁⲛⲫⲩ̀ⲁⲗⲏ ̀ⲛⲛⲟⲩⲃ ϧⲉⲛ ⲛⲟⲩϫⲓϫ: ⲉⲩⲙⲉϩ ̀ⲛ̀ⲥⲑⲟⲓⲛⲟϥⲓ ⲉϥⲥⲱⲧⲡ.</td>
            <td class="arabic">جالسين على الاﺮبعة ﻮﻋشرﻴﻦ كرسيا وأكاليل على رؤوسهم. وجامات ذهب بأيديهم مملوءة بخورا
                مختارا.</td>
        </tr>
        <tr id="table_74_row_51">
            <td class="coptic" style="border-right: 1px solid black;">Which are the prayers, of the saints who lived on
                the earth, and they offer them, unto the true Lamb.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲧⲉ ⲛⲁⲓ ⲛⲉ ⲛⲓ̀ⲡⲣⲟⲥⲉⲩⲭⲏ: ̀ⲛⲧⲉ ⲛⲓ̀ⲁⲅⲓⲟⲥ ϩⲓϫⲉⲛ
                ⲡⲓⲕⲁϩⲓ: ⲉⲩ̀ⲉⲣ̀ⲡⲣⲟⲥⲕⲩⲛⲓⲛ ̀ⲙⲙⲱⲟⲩ: ̀ⲉϧⲟⲩⲛ ϣⲁ ⲡⲓϨⲓⲏⲃ ̀ⲙⲙⲏⲓ.</td>
            <td class="arabic">الذى هو صلوات القديسين الذين على الأرض. يقدمونها الى الحمل الحقيقى.</td>
        </tr>
        <tr id="table_74_row_52">
            <td class="coptic" style="border-right: 1px solid black;">And those who lived on the earth, their names will
                be revealed, they will ask the Lord for them, for they are close to God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲏ̀ⲉⲑⲛⲁ̀ⲟⲩⲱⲛϩ ̀ⲛⲛⲟⲩⲣⲁⲛ ̀ⲉⲃⲟⲗ: ̀ⲉⲧⲓ ⲉⲩϣⲱⲡ ϩⲓϫⲉⲛ
                ⲡⲓⲕⲁϩⲓ: ⲥⲉⲛⲁⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲟⲩ: ⲉⲑⲃⲉ ϫⲉ ⲥⲉϧⲉⲛⲧ ̀ⲉϧⲟⲩⲛ ̀ⲉⲪϯ.</td>
            <td class="arabic">الذين يظهرون أسماءهم وهم كائنون على الأرض يطلبون من الرب عنهم من أجل أنهم قريبون من الله.
            </td>
        </tr>
        <tr id="table_74_row_53">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, the priests of the truth,
                the twenty four presbyters, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲑⲓ ⲉϫⲱⲛ: ⲛⲓⲟⲩⲏⲃ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ:
                ⲡⲓϫⲟⲩⲧ ̀ϥⲧⲟⲟⲩ ̀ⲙ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفعوا فينا أمام الرب يا كهنة الحق الاﺮبعة ﻮﻋشرﻴﻦ قسيسا ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_54">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE 144,000</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_55">
            <td class="coptic" style="border-right: 1px solid black;">I saw an angel of light, come down from heaven,
                and in his right hand, was a golden seal.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓⲛⲁⲩ ̀ⲉⲟⲩ̀ⲁⲅⲅⲉⲗⲟⲥ ̀ⲛⲟⲩⲱⲓⲛⲓ: ̀ⲉⲧⲁϥ̀ⲓ ̀ⲉⲡⲉⲥⲏⲧ ̀ⲉⲃⲟⲗ
                ϧⲉⲛ ̀ⲧⲫⲉ: ̀ⲉⲣⲉ ⲟⲩ̀ⲥ̀ⲫⲣⲁⲅⲓⲥ ̀ⲛⲛⲟⲩⲃ: ϧⲉⲛ ⲧⲉϥϫⲓϫ ̀ⲛⲟⲩ̀ⲓⲛⲁⲙ.</td>
            <td class="arabic">رأيت ملاكا نورانيا قد نزل من السماء وختم ذهبى فى يده اليمنى.</td>
        </tr>
        <tr id="table_74_row_56">
            <td class="coptic" style="border-right: 1px solid black;">Proclaiming and saying, "Look do not harm the
                earth, until the servants of God, are sealed on their foreheads."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥⲱϣ ̀ⲉⲃⲟⲗ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ: ϫⲉ ̀ⲁⲛⲁⲩ ̀ⲙⲡⲉⲣⲧⲁⲕⲟ
                ̀ⲙⲡⲓⲕⲁϩⲓ: ϣⲁ̀ⲛⲧⲟⲩⲧⲟⲃ ̀ⲛⲛⲓ̀ⲉⲃⲓⲁⲓⲕ: ̀ⲛⲧⲉ Ⲫϯ ϩⲓ ⲧⲟⲩⲧⲉϩⲛⲓ.</td>
            <td class="arabic">صارخا قائلا انظروا ألا تهلكوا الأرض حتى يختم عبيد الله على جباههم.</td>
        </tr>
        <tr id="table_74_row_57">
            <td class="coptic" style="border-right: 1px solid black;">And I heard the number of those who were sealed,
                from the children of Israel, from Reuben to Benjamin, twelve thousand from each tribe.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓⲥⲱⲧⲉⲙ ̀ⲉⲧ̀ⲏⲡⲓ ̀ⲛⲛⲏ̀ⲉⲧⲁⲩⲧⲟⲩⲃⲟⲩ: ϧⲉⲛ ⲛⲉⲛϣⲏⲣⲓ
                ̀ⲙⲡⲒⲥⲣⲁⲏⲗ: ⲓⲥϫⲉⲛ Ⲣⲟⲩⲃⲏⲛ ϣⲁ Ⲃⲉⲛⲓⲁⲙⲓⲛ: ⲙⲏⲧ ̀ⲥⲛⲁⲩ ̀ⲛϣⲟ ⲕⲁⲧⲁ ⲫⲩⲗⲏ.</td>
            <td class="arabic">وسمعت عدد الذين ختموا من بنى اسرائيل من راؤبين الى بنيامين اثنى عشر ألفا من كل سبط.</td>
        </tr>
        <tr id="table_74_row_58">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O the One hundred and
                forty four thousand, and the celibate Evangelist, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓϣⲉ ̀ϩⲙⲉ ̀ϥⲧⲟⲟⲩ
                ̀ⲛϣⲟ: ⲛⲉⲙ ⲡⲓⲡⲁⲣⲏⲉⲛⲟⲥ ̀ⲛ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفعوا فينا أمام الرب أيها المائة ولأربعة ولأربعين ألفا والبتول الانجيلى ليغفر لنا
                خطايانا.</td>
        </tr>
        <tr id="table_74_row_59">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE JOHN THE BAPTIST-1</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_60">
            <td class="coptic" style="border-right: 1px solid black;">Among those born of women, no one is like you, you
                are great among the saints, O John the Baptist.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲙⲡⲉ ⲟⲩⲟⲛ ⲧⲱⲛϥ ϧⲉⲛ ⲛⲓϫⲓⲛⲙⲓⲥⲓ: ̀ⲛⲧⲉ ⲛⲓϩⲓⲟⲙⲓ ⲉϥⲟⲛⲓ
                ̀ⲙⲙⲟⲕ: ̀ⲛⲑⲟⲕ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲏ̅ⲉ̅ⲑ̅ⲩ ⲧⲏⲣⲟⲩ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ.</td>
            <td class="arabic">لم يقم فى مواليد النساء من يشبهك. أنت عظيم فى جميع القديسين يا يوحنا المعمدان.</td>
        </tr>
        <tr id="table_74_row_61">
            <td class="coptic" style="border-right: 1px solid black;">You are much more than a prophet, you were
                righteously exalted, you are the friend of the Bridegroom, the Lamb of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲟⲕ ⲟⲩϩⲟⲩ̀ⲟ ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ⲁⲕϭⲓⲥⲓ ϧⲉⲛ ϯⲙⲉⲑⲙⲏⲓ:
                ̀ⲛⲑⲟⲕ ⲡⲉ ̀ⲡ̀ϣⲫⲏⲣ ̀ⲙⲡⲓⲡⲁⲧϣⲉⲗⲉⲧ: ⲡⲓϩⲓⲏⲃ ̀ⲛⲧⲉ Ⲫϯ.</td>
            <td class="arabic">أنت أفضل من نبى. تعاليت فى البر. أنت هو صديق الختن حمل الله.</td>
        </tr>
        <tr id="table_74_row_62">
            <td class="coptic" style="border-right: 1px solid black;">You have witnessed to the true Light, which came
                into the world, those who believed in His Name, became children of the Light.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲉⲣⲙⲉⲑⲣⲉ ϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ: ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ ⲉⲧⲁϥ̀ⲓ
                ̀ⲉⲡⲓⲕⲟⲥⲙⲟⲥ: ⲛⲏ̀ⲉⲑⲛⲁϩϯ ̀ⲉⲡⲉϥⲣⲁⲛ: ⲁⲩϣⲱⲡⲓ ̀ⲛϣⲏⲣⲓ ̀ⲛⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">شهدت للنور الحقيقى الذى أتى الى العالم. والذين يؤمنون باسمه صاروا أبناء النور.</td>
        </tr>
        <tr id="table_74_row_63">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O forerunner and
                baptizer, John the Baptist, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲡⲣⲟⲇⲣⲟⲙⲟⲥ
                ̀ⲙⲃⲁⲡⲧⲓⲥⲧⲏⲥ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب أيها السابق الصابغ يوحنا المعمدان ليغفر خطايانا.</td>
        </tr>
        <tr id="table_74_row_64">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE JOHN THE BAPTIST-2</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_65">
            <td class="coptic" style="border-right: 1px solid black;">John has witnessed, in the four Gospels, saying I
                have baptized my Savior, in the waters of the Jordan.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲉⲣⲙⲉⲑⲣⲉ ̀ⲛϫⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ϧⲉⲛ ⲡⲓ̀ϥⲧⲟⲟⲩ
                ̀ⲛ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲟⲛ: ϫⲉ ⲁⲓϯⲱⲙⲥ ̀ⲙⲠⲁⲥⲱⲧⲏⲣ: ϧⲉⲛ ⲛⲓⲙⲱⲟⲩ ̀ⲛⲧⲉ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">شهد يوحنا فى الأناجيل الأربع أنى عمدت مخلصى فى مياه الاردن.</td>
        </tr>
        <tr id="table_74_row_66">
            <td class="coptic" style="border-right: 1px solid black;">"I saw the Holy Spirit, come down from heaven, I
                heard the voice of the Father, proclaiming and saying."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓⲛⲁⲩ ̀ⲉⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ: ⲉⲧⲁϥ̀ⲓ ⲉⲡⲉⲥⲏⲧ ̀ⲉⲃⲟⲗϧⲉⲛ
                ̀ⲧⲫⲉ: ⲁⲓⲥⲱⲧⲉⲙ ̀ⲉ̀ⲧ̀ⲥⲙⲏ ̀ⲛⲧⲉ ̀Ⲫⲓⲱⲧ: ⲉⲥⲱϣ ⲉⲃⲟⲗ ⲉⲥϫⲱ ̀ⲙⲙⲟⲥ.</td>
            <td class="arabic">ونظرت الروح القدس عندما نزل من السماء. وسمعت صوت الآب صارخا قائل.</td>
        </tr>
        <tr id="table_74_row_67">
            <td class="coptic" style="border-right: 1px solid black;">"This is My beloved Son, with whom My soul is well
                pleased, He does My will hear Him, for He is the life Giver."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁϣⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ: ̀ⲉⲧⲁ ⲧⲁⲯⲩⲭⲏ ϯⲙⲁϯ
                ̀ⲛϧⲏⲧϥ: ⲁϥⲉⲣ ⲡⲁⲟⲩⲱϣ ⲥⲱⲧⲉⲙ ̀ⲛⲥⲱϥ: ϫⲉ ̀ⲛⲑⲟϥ ⲡⲉ ⲡⲓⲣⲉϥⲧⲁⲛϧⲟ.</td>
            <td class="arabic">هذا هو ابنى حبيبى الذى سرت به نفسى وصنع مشيئتى. إسمعوا له لأنه هو المحيى.</td>
        </tr>
        <tr id="table_74_row_68">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O forerunner and
                baptizer, John the Baptist, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲡⲣⲟⲇⲣⲟⲙⲟⲥ
                ̀ⲙⲃⲁⲡⲧⲓⲥⲧⲏⲥ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب أيها السابق الصابغ يوحنا المعمدان ليغفر خطايانا.</td>
        </tr>
        <tr id="table_74_row_69">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE APOSTLES-2</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_70">
            <td class="coptic" style="border-right: 1px solid black;">The first among the Apostles, who is called Simon
                Peter, he was entrusted with the keys, of the Kingdom of heaven.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓϣⲟⲣⲡ ϧⲉⲛ ⲛⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉⲩⲙⲟⲩϯ ̀ⲉⲣⲟϥ ϫⲉ Ⲥⲓⲙⲱⲛ
                Ⲡⲉⲧⲣⲟⲥ: ̀ⲛⲑⲟϥ ⲟⲛ ⲡⲉ ⲉⲧⲁⲩⲧⲉⲛϩⲟⲩⲧϥ ̀ⲉⲛⲓϣⲟϣⲧ ̀ⲛⲧⲉ ̀ⲑⲙⲉⲧⲟⲩⲣⲟ ̀ⲛⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">الأول في الرسل، يُدعي سمعان بطرس، هو أيضاً الذي اؤتمن، ملكوت السموات.</td>
        </tr>
        <tr id="table_74_row_71">
            <td class="coptic" style="border-right: 1px solid black;">Also another one is John, he loved Him very much,
                he rested his head, on the shoulders of our Savior.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲟⲩⲁⲓ ⲟⲛ ϫⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ̀ϥⲙⲉⲓ ̀ⲙⲙⲟϥ ̀ⲉⲙⲁϣⲱ: ⲁϥⲣⲉⲧⲉⲃ
                ̀ⲙⲙⲟϥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉ̀ϫⲉⲛ: ̀ⲑⲙⲉⲥⲧⲉⲛϩⲏⲧ ̀ⲙⲡⲉⲛⲤⲱⲧⲏⲣ.</td>
            <td class="arabic">وآخر أيضاً يدعي يوحنا، كان يحبه جداً، اتكأ علي، صدر مخلصنا.</td>
        </tr>
        <tr id="table_74_row_72">
            <td class="coptic" style="border-right: 1px solid black;">And the rest of the disciples, they have honor
                also, on account of their apostleship, for they followed our Savior.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲉⲙ ̀ⲡⲥⲉⲡⲓ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲟⲩⲟⲛ ̀ⲛⲧⲱⲟⲩ ̀ⲛⲟⲩⲧⲁⲓⲟ
                ̀ⲙⲙⲁⲩ: ⲉⲑⲃⲉ ⲧⲟⲩⲙⲉⲧ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ϫⲉ ⲁⲩⲙⲟϣⲓ ̀ⲛⲥⲁ ⲡⲉⲛⲤⲱⲧⲏⲣ.</td>
            <td class="arabic">وبقية التلاميذ، لهم الكرامة، من أجل رسوليتهم، لأنهم تبعوا مخلصنا.</td>
        </tr>
        <tr id="table_74_row_73">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, my masters and
                fathers the Apostles, and the rest of the disciples, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲛⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲟϯ
                ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ̀ⲡⲥⲉⲡⲓ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲏϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلبوا من الرب عنا، يا سادتي الآباء الرسل، وبقية التلاميذ، ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_74">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. PETER & ST. PAUL</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_75">
            <td class="coptic" style="border-right: 1px solid black;">Peter the Apostle, and Paul the wise, the heads of
                the disciples, of our Lord Jesus Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲧⲣⲟⲥ ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲥⲟⲫⲟⲥ: ⲛⲓ̀ⲁⲣⲭⲏ
                ̀ⲙⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲉ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">بطرس الرسول وبولس ذوالحكمة رؤساء تلاميذ ربنا يسوع المسيح.</td>
        </tr>
        <tr id="table_74_row_76">
            <td class="coptic" style="border-right: 1px solid black;">Peter and Paul, trampled the power of Satan, and
                restored the nations, to the faith of the Trinity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ: ⲁⲩⲕⲱⲣϥ ̀ⲛ̀ⲧϫⲟⲙ ̀ⲛⲧⲉ ̀ⲡⲥⲁⲧⲁⲛⲁⲥ:
                ⲟⲩⲟϩ ⲁⲩⲧⲁⲥⲑⲟ ̀ⲛⲛⲓ̀ⲉⲑⲛⲟⲥ: ̀ⲉϧⲟⲩⲛ ̀ⲉ̀ⲫⲛⲁϩϯ ̀ⲛϮⲧⲣⲓⲁⲥ.</td>
            <td class="arabic">بطرس وبولس سحقا قوة الشيطان وردوا الأمم للأيمان بالثالوث.</td>
        </tr>
        <tr id="table_74_row_77">
            <td class="coptic" style="border-right: 1px solid black;">Peter and Paul, are the spiritual priests, they
                demolished the temples, and the worship of idols.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ: ⲇⲉ ⲟⲛ ⲛⲓⲟⲩⲏⲃ ̀ⲙ̀̅ⲡ̅ⲛ̅ⲁⲧⲓⲕⲟⲛ:
                ⲁϥϣⲟⲣϣⲉⲣ ̀ⲛⲛⲓ̀ⲉⲣⲫⲏⲟⲩ̀ⲓ: ⲛⲉⲙ ̀ⲡϣⲉⲙϣⲓ ̀ⲛⲛⲓ̀ⲓⲇⲱⲗⲟⲛ.</td>
            <td class="arabic">بطرس وبولس هما الكهنة الروحيين هدما هياكل وعبادة الأوثا.</td>
        </tr>
        <tr id="table_74_row_78">
            <td class="coptic" style="border-right: 1px solid black;">Peter and Paul, together are the workers and
                craftsmen, they restored all the nations, once more to the Creator.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ: ⲉⲩⲥⲟⲡ ⲛⲏ̀ⲉⲣⲅⲁⲧⲏⲥ ̀ⲛⲣⲉϥⲉⲣϩⲱⲃ:
                ⲁⲩⲧⲁⲥⲑⲟ ̀ⲛⲛⲓ̀ⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ: ̀ⲉⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ ̀ⲛⲕⲉⲥⲟⲡ.</td>
            <td class="arabic">بطرس وبولس معا الفاعلين العاملين ردا جميع الأمم الى الخالق دفعة أخرى.</td>
        </tr>
        <tr id="table_74_row_79">
            <td class="coptic" style="border-right: 1px solid black;">Peter and our teacher Paul, with great struggle,
                were in the stadium, of the apostles.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲥⲁϧ Ⲡⲁⲩⲗⲟⲥ: ⲁⲩϣⲱⲡⲓ ϧⲉⲛ ⲡⲓ̀ⲥⲧⲁⲇⲓⲟⲛ:
                ̀ⲛⲧⲉ ϯⲙⲉⲧ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲛⲁⲅⲱⲛ.</td>
            <td class="arabic">بطرس ومعلمنا بولس كانا فى ميدان الرسولية فى جهاد عظيم.</td>
        </tr>
        <tr id="table_74_row_80">
            <td class="coptic" style="border-right: 1px solid black;">Our father Peter completed, his struggle with
                death on the cross, in the great city of Rome, for the name of Jesus Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ ϫⲱⲕ ̀ⲉⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲙⲟⲩ ̀ⲛⲧⲉ
                ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ: ϧⲉⲛ ϯⲛⲓϣϯ ̀ⲙⲡⲟⲗⲓⲥ Ⲣⲱⲙⲉ: ⲉⲑⲃⲉ ̀ⲫⲣⲁⲛ ̀ⲛⲒ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">أبونا بطرس أكمل بموت الصليب فى مدينة روما العظمى لأجل اسم ربنا يسوع المسيح.</td>
        </tr>
        <tr id="table_74_row_81">
            <td class="coptic" style="border-right: 1px solid black;">Paul also likewise, was beheaded in that place, by
                Emperor Nero, all in one day.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲁⲩⲗⲟⲥ ⲇⲉ ⲟⲛ ̀ⲙⲡⲁⲓⲣⲏϯ: ⲁⲩ̀ⲱⲗⲓ ̀ⲛⲧⲉϥ̀ⲁⲫⲉ ̀ⲙⲙⲁⲩ:
                ̀ⲉⲃⲟⲗϩⲓⲧⲉⲛ ̀ⲡⲟⲩⲣⲟ Ⲛⲓⲣⲟⲛ: ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲛⲟⲩⲱⲧ.</td>
            <td class="arabic">وهكذا أيضا بولس نزعت رأسه هناك من قبل الملك نيرون فى يوم واحد.</td>
        </tr>
        <tr id="table_74_row_82">
            <td class="coptic" style="border-right: 1px solid black;">They received glory form Christ, the King and they
                rested with Him, in His eternal kingdom, in the everlasting life.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϣⲉⲡ ⲱⲟⲩ ϩⲁ ⲡⲟⲩⲣⲟ Ⲡ̅ⲭ̅ⲥ: ⲟⲩⲟϩ ⲁⲩ̀ⲙⲧⲟⲛ ̀ⲙⲙⲱⲟⲩ
                ⲛⲉⲙⲁϥ: ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ ̀ⲛ̀ⲉⲛⲉϩ: ⲛⲉⲙ ⲡⲓⲱⲛϧ ⲉϥⲙⲏⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">ونالا المجد من الملك المسيح واستراحا معه فى ملكوته الأبدى والحياة الدائمة.</td>
        </tr>
        <tr id="table_74_row_83">
            <td class="coptic" style="border-right: 1px solid black;">We also honor them, with David the psalmist,
                saying "Their voices went forth, onto the face of the whole world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲧⲉⲛⲧⲁⲓ̀ⲟ ̀ⲙⲙⲱⲟⲩ: ⲛⲉⲙ Ⲇⲁⲩⲓⲇ ̀ⲡⲟⲩⲣⲟ
                ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ϫⲉ ̀ⲁⲡⲟⲩ̀ϧⲣⲱⲟⲩ ϣⲉⲛⲁϥ ̀ⲉⲃⲟⲗ: ϩⲓϫⲉⲛ ̀ⲡϩⲟ ̀ⲙ̀ⲡⲕⲁϩⲓ ⲧⲏⲣⲥ.</td>
            <td class="arabic">ونحن أيضا نكرمهما مع داود الملك المرنم. أن أصواتهم خرجت الى وجه الأرض كلها.</td>
        </tr>
        <tr id="table_74_row_84">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my masters and
                fathers the Apostles, our father Peter and our teacher Paul, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲛⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲟϯ
                ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲥⲁϧ Ⲡⲁⲩⲗⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا يا سيدى الأباء الرسل أبانا بطرس ومعلمنا بولس ليغفر...</td>
        </tr>
        <tr id="table_74_row_85">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. JOHN THE EVANGELIST</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_86">
            <td class="coptic" style="border-right: 1px solid black;">John the virgin, the Son of Zebedee, a native of
                Bethsaida, from the tribe of Zebulun.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ̀ⲡϣⲏⲣⲓ ̀ⲛⲌⲉⲃⲉⲇⲉⲟⲥ: ̀ⲉⲃⲟⲗ ϧⲉⲛ
                ⲛⲓⲣⲉⲙ ̀ⲙⲂⲏⲇⲥⲁⲓⲇⲉ: ϧⲉⲛ ̀ⲧⲫⲩⲗⲏ ̀ⲛⲧⲉ Ⲍⲉⲃⲟⲗⲟⲛ.</td>
            <td class="arabic">يوحنا البتول ابن زبدى من أهل بيت صيدا من سبط زبولون.</td>
        </tr>
        <tr id="table_74_row_87">
            <td class="coptic" style="border-right: 1px solid black;">Christ has chosen him, and made him a disciple for
                Himself, and also an apostle, he loved Him very much.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲥⲱⲧⲡ ̀ⲙⲙⲟϥ ̀ⲛϫⲉ Ⲡ̅ⲭ̅ⲥ: ⲁϥ̀ⲉⲣⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲛⲁϥ: ⲟⲩⲟϩ
                ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲁϥⲙⲉⲓ ̀ⲙⲙⲟϥ ̀ⲉⲙⲁϣⲱ.</td>
            <td class="arabic">اختاره المسيح وصيره تلميذا له ورسولا وكان يحبه جدا.</td>
        </tr>
        <tr id="table_74_row_88">
            <td class="coptic" style="border-right: 1px solid black;">He also after dinner, rested upon the shoulder, of
                our Savior and said to him, "Who will betray You."</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲛⲑⲟϥ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓⲇⲏⲡⲛⲟⲛ: ⲁϥⲣⲱⲧⲉⲃ ̀ⲙⲙⲟϥ ̀ⲉ̀ϩⲣⲏⲓ
                ̀ⲉϫⲉⲛ: ̀ⲏⲙⲉⲥⲧⲉⲛϩⲏⲧ ̀ⲙⲡⲉⲛⲤⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲁϥϫⲟⲥ ⲛⲓⲙ ⲫⲏ̀ⲉⲑⲛⲁⲧⲏⲓⲕ.</td>
            <td class="arabic">وهو أيضا بعد العشاء اتكأ على صدر مخلصنا وقال من هو الذى يسلمك.</td>
        </tr>
        <tr id="table_74_row_89">
            <td class="coptic" style="border-right: 1px solid black;">Christ has spoken of you, through His holy mouth,
                "If I will that he remain till I come, what is that to you?"</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲟϥ ⲟⲛ ̀ⲉⲧⲁϥⲥⲁϫⲓ ⲉⲑⲃⲏⲧϥ: ̀ⲛϫⲉ Ⲡ̅ⲭ̅ⲥ ϧⲉⲛ ⲣⲱϥ
                ̅ⲉ̅ⲑ̅ⲩ: ϫⲉ ̀ⲉϣⲱⲡ ⲉⲓϣⲁⲛⲟⲩⲱϣ ̀ⲉⲭⲁϥ: ̀ⲉⲫⲁⲓ ϣⲁϯ̀ⲓ ̀ⲁϧⲟⲕ ̀ⲛⲥⲱⲕ.</td>
            <td class="arabic">وهو أيضا الذى تكلم من أجله المسيح بفمه الطاهر. اذا أردت أن أجعله يبقى لحين مجيئى فماذا
                لك.</td>
        </tr>
        <tr id="table_74_row_90">
            <td class="coptic" style="border-right: 1px solid black;">And after thirty years, from the Holy
                Resurrection, he wrote his Gospel, and preached to the world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲙⲉⲛⲉⲛⲥⲁ ⲙⲁⲡ ̀ⲛⲣⲟⲙⲡⲓ: ̀ⲉϯⲁⲛⲁⲥⲧⲁⲥⲓⲥ ̅ⲉ̅ⲑ̅ⲩ:
                ⲁϥ̀ⲥϧⲁⲓ ̀ⲙⲡⲉϥ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲟⲛ: ⲁϥϩⲓⲱⲓϣ ̀ⲙⲙⲟϥ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">وبعد ثلاثين سنة للقيامة المقدسة كتب انجيله. وكرز به فى العالم.</td>
        </tr>
        <tr id="table_74_row_91">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O martyr, hail to the Evangelist, hail
                to the apostle, of Christ the disciple.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓⲙⲁⲣⲧⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲭⲉⲣⲉ
                ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ ⲟⲩⲟϩ ⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic">السلام لك أيها البتول السلام للانجيلى السلام لرسول المسيح وتلميذه.</td>
        </tr>
        <tr id="table_74_row_92">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you indeed, O beloved of Christ, John
                the truly chosen one, the Son of Zebedee.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ̀ⲱ ⲡⲓⲙⲉⲛⲣⲓⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ:
                Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲥⲱⲧⲡ ̀ⲙⲙⲏⲓ: ̀ⲡϣⲏⲣⲓ ̀ⲛⲌⲉⲃⲉⲇⲉⲟⲥ.</td>
            <td class="arabic">طوباك بالحقيقة ياحبيب المسيح يوحنا المختار الحقيقى ابن زبدى.</td>
        </tr>
        <tr id="table_74_row_93">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O virgin and the
                Evangelist, John the Apostle, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ
                ̀ⲛ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها البتول الانجيلى يوحنا الرسول ليغفر...</td>
        </tr>
        <tr id="table_74_row_94">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ANY APOSTLE</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_95">
            <td class="coptic" style="border-right: 1px solid black;">Gather all and let us rejoice, in the honored
                remembrance, of the trusted disciple, (....) the Apostle.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲱⲟⲩϯ ⲧⲏⲣⲟⲩ ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ: ϧⲉⲛ ⲡⲓ̀ⲉⲣⲫⲙⲉⲩ̀ⲓ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ:
                ̀ⲛⲧⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ: (....) ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">اجتمعوا كلكم لنتهلل فى التذكار المكرم الذى للتلميذ المؤتمن(...) الرسول.</td>
        </tr>
        <tr id="table_74_row_96">
            <td class="coptic" style="border-right: 1px solid black;">For his chosen struggle, and his great and
                wonderful glory, that dwells upon the whole earth, became a guide for us.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ⲁϥϣⲱⲡⲓ ⲛⲁⲛ ̀ⲛϭⲁⲩⲙⲱⲓⲧ: ̀ⲛϫⲉ ⲡⲉϥ̀ⲁⲅⲱⲛ ⲉⲧⲥⲱⲧⲡ: ⲛⲉⲙ
                ⲡⲓⲛⲓϣϯ ̀ⲛ̀ⲱⲟⲩ ̀ⲛ̀ϣⲫⲏⲣⲓ: ̀ⲉⲧϣⲟⲡ ϩⲓϫⲉⲛ ̀ⲡⲕⲁϩⲓ ⲧⲏⲣϥ.</td>
            <td class="arabic">لأنه صار لنا هاديا بجهاده المختار ومجده العظيم العجيب الكائن على الأرض كلها.</td>
        </tr>
        <tr id="table_74_row_97">
            <td class="coptic" style="border-right: 1px solid black;">He confessed to Christ, saying "He is the Son of
                God," he preached His holy Name, to all the nations.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁϥⲉⲣ̀ⲟⲙⲟⲗⲟⲅⲓⲛ ̀ⲙⲠ̅ⲭ̅ⲥ: ϫⲉ ̀ⲛⲑⲟϥ ⲡⲉ Ⲡϣⲏⲣⲓ ̀ⲙⲪϯ:
                ⲁϥϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲉϥⲣⲁⲛ ̅ⲉ̅ⲑ̅ⲩ: ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲛⲓ̀ⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">واعترف بالمسيح أنه ابن الله. وبشر باسمه القدوس فى جميع الأمم.</td>
        </tr>
        <tr id="table_74_row_98">
            <td class="coptic" style="border-right: 1px solid black;">He completed his struggle, with great courage, he
                wore the unfading crown, of the Apostles.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲙⲡⲉϥ̀ⲁⲅⲱⲛ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲙⲙⲉⲧⲅⲉⲛⲛⲉⲟⲥ:
                ⲁϥⲉⲣⲫⲟⲣⲓⲛ ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ ̀ⲛⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">وأكمل جهاده بشجاعة عظيمة ونال الاكليل غير المضمحل الذى للرسولية.</td>
        </tr>
        <tr id="table_74_row_99">
            <td class="coptic" style="border-right: 1px solid black;">He came to the place of rest, and leaned upon
                Christ, with his apostolic friends, in the Kingdom of heaven.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϩⲱⲗ ̀ⲉⲛⲓⲙⲁ̀ⲛⲉⲙⲧⲟⲛ: ⲟⲩⲟϩ ⲁϥⲣⲱⲧⲉⲙ ⲛⲉⲙ Ⲡ̅ⲭ̅ⲥ: ⲛⲉⲙ
                ⲛⲉϥ̀ϣⲫⲏⲣ ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ̀ⲑⲙⲉⲧⲟⲩⲣⲟ ̀ⲛⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">ومضى إلى مواضع النياح واتكأ مع المسيح ورفقائه الرسل فى ملكوت السموات.</td>
        </tr>
        <tr id="table_74_row_100">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O disciple of
                Christ, (...) the Apostle, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ̀ⲛⲧⲉ
                Ⲡ̅ⲭ̅ⲥ: (...) ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا تلميذ المسيح (...) الرسول ليغفر...</td>
        </tr>
        <tr id="table_74_row_101">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. STEPHEN</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_102">
            <td class="coptic" style="border-right: 1px solid black;">The honored martyr, of our Lord Jesus Christ,
                Stephen the Saint, which means "a crown."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ̀ⲛⲧⲉ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ:
                ⲫⲏ̅ⲉ̅ⲑ̅ⲩ ̀Ⲥⲧⲉⲫⲁⲛⲟⲥ: ̀ⲉⲧⲉ ⲡⲉϥⲟⲩ̀ⲱϩⲉⲙ ⲡⲉ ⲡⲓ̀ⲭⲗⲟⲙ.</td>
            <td class="arabic">الشهيد المكرم الذي لربنا يسوع المسيح القديس استفانوس الذى تأويله الإكليل.</td>
        </tr>
        <tr id="table_74_row_103">
            <td class="coptic" style="border-right: 1px solid black;">God revealed unto him, the great mysteries, and
                his face shone, like the face of an angel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁ Ⲫϯ ϭⲱⲣⲡ ̀ⲉⲣⲟϥ: ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲙⲙⲩⲥⲧⲏⲣⲓⲟⲛ:
                ⲁϥϭⲓⲟⲩⲱⲓⲛⲓ ̀ⲛϫⲉ ⲡⲉϥϩⲟ: ̀ⲙ̀ⲫⲣⲏϯ ̀ⲙ̀ⲡϩⲟ ̀ⲛⲟⲩ̀ⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">الذي كشف له الله أسرارا عظيمة واستنار وجهه مثل وجه ملاك.</td>
        </tr>
        <tr id="table_74_row_104">
            <td class="coptic" style="border-right: 1px solid black;">He saw the heavens open, and my Lord Jesus at the
                right hand of His Father, and those who were stoning him, he prayed for their salvation.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥⲛⲁⲩ ̀ⲉⲛⲓⲫⲏⲟⲩ̀ⲓ ⲉⲩⲟⲩⲏⲛ: ⲟⲩⲟϩ ⲡⲁ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ
                ⲥⲁⲟⲩⲓⲛⲁⲙ ̀ⲙⲠⲉϥⲓⲱⲧ: ⲛⲏ̀ⲉⲧⲁⲩϩⲓ̀ⲱⲛⲓ ̀ⲉϫⲱϥ: ⲛⲁϥⲧⲱⲃϩ ̀ⲛⲥⲁ ⲡⲟⲩⲟⲩϫⲁⲓ.</td>
            <td class="arabic">الذي رأى السموات مفتوحة وربنا يسوع عن يمين أبيه. والذين يرجمونه كان يطلب عن خلاصهم.</td>
        </tr>
        <tr id="table_74_row_105">
            <td class="coptic" style="border-right: 1px solid black;">Proclaiming and saying, "O my Lord Jesus Christ,
                receive my spirit, and count not this sin against them."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥⲱϣ ⲉⲃⲟⲗ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ: ϫⲉ ⲡⲁ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ϣⲉⲡ
                ⲡⲁ̀ⲡⲛⲉⲩⲙⲁ ̀ⲉⲣⲟⲕ: ̀ⲙⲡⲉⲣⲉⲡ ⲡⲁⲓⲛⲟⲃⲓ ̀ⲉⲛⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">صارخا قائلا يا ربى يسوع المسيح اقبل روحى اليك ولا تحسب هذه الخطية علي هؤلاء النا.</td>
        </tr>
        <tr id="table_74_row_106">
            <td class="coptic" style="border-right: 1px solid black;">"For they know not, what they are doing, because
                of the blindness of their hearts, Lord do not hold this against them."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϫⲉ ̀ⲛⲥⲉⲥⲱⲟⲩⲛ ̀ⲛ̀ϩⲗⲓ ⲁⲛ: ϧⲉⲛ ⲛⲏ̀ⲉⲧⲟⲩ̀ⲓⲣⲓ ̀ⲙⲙⲱⲟⲩ:
                ̀ⲉⲑⲃⲉ ⲡⲓⲑⲱⲙ ̀ⲛⲧⲉ ⲡⲟⲩϩⲏⲧ: Ⲡ̅ⲟ̅ⲥ ̀ⲙⲡⲉⲣⲥⲟϩⲓ ̀ⲙⲙⲱⲟⲩ.</td>
            <td class="arabic">لأنهم لا يدرون ماذا يصنعون من أجل عمى قلوبهم. يا رب لا تبكتهم.</td>
        </tr>
        <tr id="table_74_row_107">
            <td class="coptic" style="border-right: 1px solid black;">He completed his mission, and he died for the
                truth, and he wore the unfading crown, of martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉϥ̀ⲇⲣⲟⲙⲟⲥ ⲁϥϫⲟⲕϥ ⲉⲃⲟⲗ: ⲟⲩⲟϩ ⲁϥⲙⲟⲩ ⲉϫⲉⲛ ϯⲙⲉⲑⲙⲏⲓ:
                ⲁϥⲉⲣⲫⲟⲣⲓⲛ ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ ̀ⲛⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">أكمل سعيه ومات على الحق ولبس اكليل الشهادة غير المضمحل.</td>
        </tr>
        <tr id="table_74_row_108">
            <td class="coptic" style="border-right: 1px solid black;">Hail O persevering one, of our Lord Jesus Christ,
                Stephen the Saint, which means "a crown."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓ̀ⲁⲑⲗⲏⲧⲏⲥ: ̀ⲛⲧⲉ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ:
                ⲫⲏ̅ⲉ̅ⲑ̅ⲩ ̀Ⲥⲧⲉⲫⲁⲛⲟⲥ: ⲉ̀ⲧⲉ ⲡⲉϥⲟⲩ̀ⲱϩⲉⲙ ⲡⲉ ⲡⲓ̀ⲭⲗⲟⲙ.</td>
            <td class="arabic">السلام لك أيها المجاهد الذى لربنا يسوع المسيح القديس استفانوس الذى تأويله الإكليل.</td>
        </tr>
        <tr id="table_74_row_109">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O blessed
                archdeacon, Stephen the first martyr, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲁⲣⲭⲏⲇⲓⲁⲕⲱⲛ
                ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ: ̀Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓϣⲟⲣⲡ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا رئيس الشمامسة المبارك استفانوس الشهيد الأول، ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_110">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. THEODORUS OF SHOTEP</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_111">
            <td class="coptic" style="border-right: 1px solid black;">Our Lord Jesus Christ, was compassionate to the
                tears, of the widow of Nain, He raised her son.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ϣⲁⲛⲁ̀ϩⲑⲏϥ ϧⲁ ⲛⲓ̀ⲉⲣⲙⲱⲟⲩ̀ⲓ:
                ̀ⲛⲧⲉ ϯ̀ⲭⲏⲣⲁ ⲉⲧ ϧⲉⲛ Ⲛⲁ̀ⲓⲛ: ⲁϥⲧⲟⲩⲛⲟⲥ ⲡⲉⲥϣⲏⲣⲓ ⲛⲁⲥ.</td>
            <td class="arabic">ربنا يسوع المسيح تحنن على دموع الارملة ببلدة نايين وأقام لها ابنها.</td>
        </tr>
        <tr id="table_74_row_112">
            <td class="coptic" style="border-right: 1px solid black;">Theodorus the general, was compassionate to the
                tears, of the widow of Eucaita, he raised her sons.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ ⲡⲓ̀ⲥⲧⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ⲁϥϣⲁⲛⲁ̀ϩⲑⲏϥ ϧⲁ
                ⲛⲓ̀ⲉⲣⲙⲱⲟⲩ̀ⲓ: ⲉⲧ ϧⲉⲛ Ⲉⲩⲭⲏⲧⲟⲥ: ⲁϥⲧⲟⲩϫⲉ ⲛⲉⲥϣⲏⲣⲓ ⲛⲁⲥ.</td>
            <td class="arabic">وثيؤدوروس الاسفهسلار تحنن على دموع الارملة التى) ببلدة أوخيطس( وخلص لها أولادها</td>
        </tr>
        <tr id="table_74_row_113">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore we sing, with David the Psalmist, saying
                "Tread upon serpents, and the power of scorpions."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣⲭⲟⲣⲉⲩⲓⲛ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ
                ̀ⲉ̀ⲕϩⲱⲙⲓ ̀ⲉϫⲉⲛ ⲟⲩϩⲟϥ: ⲛⲉⲙ ⲟⲩⲃⲁⲥⲓⲗⲓⲥⲕⲟⲥ.</td>
            <td class="arabic">فلهذا نمدح مع المرتل داود قائلين تدوس الثعبان وملك الحيات.</td>
        </tr>
        <tr id="table_74_row_114">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyr, Theodorus the general, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲓ̀ⲥ̀ⲧⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا أيها الشهيد المجاهد ثيؤدوروس الاسفهسلار ليغفر…</td>
        </tr>
        <tr id="table_74_row_115">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. THEODORUS ANATOLIUS</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_116">
            <td class="coptic" style="border-right: 1px solid black;">You are the victorious lion, in the midst of the
                wars, upon the screaming horse, O Theodorus Anatolius.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲟⲕ ⲟⲩⲙⲟⲩ̀ⲓ ⲉϥϩⲉⲗϩⲉⲙ: ϧⲉⲛ ̀ⲏⲙⲏϯ ̀ⲛⲛⲓⲡⲟⲗⲉⲙⲟⲥ:
                ̀ⲉϫⲉⲛ ⲟⲩ̀ϩⲑⲟ ⲉϥϩⲉⲙϩⲉⲙ: ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲓ̀Ⲁⲛⲁⲧⲟⲗⲉⲟⲥ.</td>
            <td class="arabic">أنت الأسد الغالب فى وسط الحروب على صهيل الفرس ياثيؤدوروس المشرقى..</td>
        </tr>
        <tr id="table_74_row_117">
            <td class="coptic" style="border-right: 1px solid black;">And when your voice came forth, the Barbarians
                fell, and your evil enemies, which are the devils feared.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁⲕϣⲁⲛϯ ̀ⲙⲡⲉⲕ̀ϧⲣⲱⲟⲩ: ϣⲁⲩϩⲉⲓ ̀ⲛⲭⲉⲛⲓ ⲃⲁⲣⲃⲁⲣⲟⲥ:
                ϣⲁⲩϣⲁⲓ ̀ⲛϫⲉ ⲛⲉⲕϫⲁϫⲓ ⲉⲧϩⲱⲟⲩ: ̀ⲉⲧⲉ ⲛⲁⲓ ⲛⲉ ⲛⲓⲇⲓⲁⲃⲟⲗⲟⲥ.</td>
            <td class="arabic">اذا ما أعطيت صوتك تسقط البرابرة وتصرع أعداءك الأشرار الذين هم الشياطين.</td>
        </tr>
        <tr id="table_74_row_118">
            <td class="coptic" style="border-right: 1px solid black;">You slaughtered the dragon, who was under the
                ladder, you completed your struggle, with unbending uprightness.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϧⲱⲧⲉⲃ ̀ⲙⲡⲓ̀ⲇⲣⲁⲕⲟⲛ: ⲉⲧⲥⲁⲡⲉⲥⲏⲧ ̀ⲛϯⲙⲟⲩⲕⲓ: ⲁⲕϫⲱⲕ
                ̀ⲉⲃⲟⲗ ̀ⲙⲡⲉⲕ̀ⲁⲅⲱⲛ: ϧⲉⲛ ⲟⲩⲥⲱⲟⲩⲧⲉⲛ ̀ⲛ̀ⲁⲧⲣⲓⲕⲓ.</td>
            <td class="arabic">قتلت التنين الكائن تحت السلم وأكملت جهادك بغير ملل.</td>
        </tr>
        <tr id="table_74_row_119">
            <td class="coptic" style="border-right: 1px solid black;">You were truly baptized for the sake, of Christ in
                the lake of fire, with your two friends, Leontius and Panikarus.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϯ ϭⲓ̀ⲱⲙⲥ ⲛⲁⲕ ⲉⲑⲃⲉ Ⲫϯ: ϧⲉⲛ ϯⲗⲩⲙⲛⲏ ̀ⲛ̀ⲭⲣⲱⲙ: ⲁⲗⲏⲑⲱⲥ
                ̀ⲛⲑⲟⲕ ⲛⲉⲙ ⲛⲉⲕ̀ϣⲫⲏⲣ ̀ⲥⲛⲟⲩϯ: Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ.</td>
            <td class="arabic">غطست فى بحيرة النار من أجل الله بالحقيقة أنت وصديقيك لاونديوس وبانيكاروس.</td>
        </tr>
        <tr id="table_74_row_120">
            <td class="coptic" style="border-right: 1px solid black;">Therefore David, joyfully honored you, saying
                "Gird your sword, upon your thigh O mighty one."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲧⲁⲓ̀ⲟ ̀ⲙⲙⲟⲕ: ̀ⲛϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ϫⲉ
                ⲙⲟⲩⲣ ̀ⲛⲧⲉⲕⲥⲏϥⲓ ̀ⲉⲡⲉⲕ̀ⲁⲗⲟϫ: ⲫⲏ̀ⲉⲧⲉ ⲟⲩⲟⲛ ̀ϣϫⲟⲙ ̀ⲙⲙⲟϥ.</td>
            <td class="arabic">لأجل هذا كرمك داود بابتهاج تقلد بسيفك على فخذك أيها الجبار.</td>
        </tr>
        <tr id="table_74_row_121">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Theodorus
                Anatolius, and Leontius and Panikarus, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: Ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲓ̀Ⲁⲛⲁⲧⲟⲗⲉⲟⲥ:
                ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلبوا عنا ياثيؤدوروس ولاونديوس وبنيكاروس ليغفر...</td>
        </tr>
        <tr id="table_74_row_122">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. SERGIUS & ST. BACCHUS</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_123">
            <td class="coptic" style="border-right: 1px solid black;">Let the holy martyrs, the great defenders, rejoice
                and be glad, Saint Sergius and Saint Bacchus.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲟⲩⲟⲩⲛⲟϥ ̀ⲛⲧⲟⲩⲑⲉⲗⲏⲗ: ̀ⲛϫⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ̅ⲉ̅ⲑ̅ⲩ:
                ⲛⲓⲣⲉϥⲙⲓϣⲓ ̀ⲛⲕⲁⲗⲱⲥ: ⲛⲓⲁⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ.</td>
            <td class="arabic">ليفرح ويتهلل الشهيدان الطاهران المجاهدان حسنا القديسان سرجيوس وواخس.</td>
        </tr>
        <tr id="table_74_row_124">
            <td class="coptic" style="border-right: 1px solid black;">For they became martyrs, and followers of Christ,
                they performed many works, of wonder and awe.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϣⲱⲡⲓ ϫⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ̀ⲛⲣⲉϥⲥⲱⲧⲉⲙ ̀ⲛⲥⲁ Ⲡ̅ⲭ̅ⲥ: ⲟⲩⲟϩ
                ⲁⲩ̀ⲓⲣⲓ ̀ⲛϩⲁⲛ̀ϩⲃⲏⲟⲩ̀ⲓ: ̀ⲙⲡⲁⲣⲁⲇⲟⲝⲟⲛ ⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">لأنهما صارا شهيدين مطيعين للمسيح وصنعا أعمالا ممجده عالية.</td>
        </tr>
        <tr id="table_74_row_125">
            <td class="coptic" style="border-right: 1px solid black;">As for them they rejoice, with Christ the Creator,
                for they shed their blood, for His blessed Name.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲱⲟⲩ ⲉⲩⲉⲑⲗⲏⲗ ̀ⲙⲙⲱⲟⲩ: ⲛⲉⲙ Ⲡ̅ⲭ̅ⲥ ⲡⲓⲣⲉϥⲑⲁⲙⲓ̀ⲟ: ϫⲉ
                ⲁⲩⲫⲱⲛ ̀ⲙⲡⲟⲩ̀ⲥⲛⲟϥ ̀ⲉⲃⲟⲗ: ϩⲓϫⲉⲛ ⲡⲉϥⲣⲁⲛ ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ.</td>
            <td class="arabic">أما هما فهللا مع المسيح الخالق. لأنهما سفكا دمهما على اسمه المبارك.</td>
        </tr>
        <tr id="table_74_row_126">
            <td class="coptic" style="border-right: 1px solid black;">Hail to Sergius and Bacchus, the strong and chosen
                heroes, of Christ the King of glory, the only-begotten God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ⲛⲓϭⲱⲓϫ ̀ⲛⲇⲏⲛⲁⲧⲟⲥ ⲉⲧⲥⲱⲧⲡ:
                ̀ⲙⲠ̅ⲭ̅ⲥ ̀ⲡⲟⲩⲣⲟ ̀ⲛⲧⲉ ̀ⲡ̀ⲱⲟⲩ: ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ̀ⲛⲛⲟⲩϯ.</td>
            <td class="arabic">السلام لسرجيوس وواخس الشجاعين القويين المختارين للمسيح ملك المجد الاله الوحيد.</td>
        </tr>
        <tr id="table_74_row_127">
            <td class="coptic" style="border-right: 1px solid black;">Rejoice O Sergius and Bacchus, the true stars, who
                became the golden lamps, of the holy Church.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲛⲟϥ ̀ⲱ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ⲛⲓⲫⲱⲥⲧⲏⲣ ̀ⲛⲁⲗⲏⲑⲓⲛⲟⲥ:
                ̀ⲉⲧⲁⲩϣⲱⲡⲓ ̀ⲛⲟⲩⲗⲩⲭⲛⲓ̀ⲁ ̀ⲛⲛⲟⲩⲃ: ̀ⲛⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">افرحا ياسرجيوس وواخس الكوكبان الحقيقيان اللذان صارا منارة ذهبية للكنيسة المقدسة.</td>
        </tr>
        <tr id="table_74_row_128">
            <td class="coptic" style="border-right: 1px solid black;">Rejoice O Sergius and Bacchus, the bright and
                sparkling ones, who enlightened our souls, with their holy bodies.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ̀ⲛⲣⲉϥ̀ⲉⲣⲟⲩⲱⲓⲛⲓ
                ̀ⲛⲗⲁⲙ̀ⲡⲣⲟⲥ: ̀ⲉⲧⲁⲩ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲛⲛⲉⲛⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲛⲟⲩⲗⲩⲙⲁⲛⲟⲛ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">افرحا ياسرجيوس وواخس المنيرين اللامعين اللذين أنارا نفوسنا بجسديهما الطاهرين.</td>
        </tr>
        <tr id="table_74_row_129">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O martyrs, of our Lord Jesus Christ,
                hail to the courageous heroes, Saints Sergius and Bacchus.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲱⲧⲉⲛ ̀ⲱ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ̀ⲛⲧⲉ Ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ
                Ⲡ̅ⲭ̅ⲥ: ⲭⲉⲣⲉ ⲛⲓϭⲱⲓϫ ̀ⲛⲅⲉⲛⲛⲉⲟⲥ: ⲛⲓ̀ⲁⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ.</td>
            <td class="arabic">السلام لكما ياشهيدى ربنا يسوع المسيح. السلام للشجاعين القويين القديسين سرجيوس وواخس.</td>
        </tr>
        <tr id="table_74_row_130">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Saint Sergius and Saint Bacchus, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲛⲓ̀ⲁⲑⲗⲟⲫⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲓ̀ⲁⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا أيها الشهيدان المجاهدان القديسان سرجيوس وواخس ليغفر...</td>
        </tr>
        <tr id="table_74_row_131">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. COSMAS & ST. DEMIAN</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_132">
            <td class="coptic" style="border-right: 1px solid black;">Five struggling brothers, the ministers of Christ,
                purity to their virginity, from their one mother.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲓⲟⲩ ̀ⲛⲥⲟⲛ ̀ⲛ̀ⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ̀ⲛⲇⲓ̀ⲁⲕⲱⲛ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ:
                ⲟⲩⲧⲟⲩⲃⲟ ϧⲉⲛ ⲧⲟⲩⲡⲁⲣⲑⲉⲛⲓ̀ⲁ: ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲧⲟⲩⲙⲁⲩ ̀ⲛⲟⲩⲱⲧ.</td>
            <td class="arabic">خمسة اخوة مجاهدين خدام المسيح أطهارا فى بتوليتهم من أم واحدة.</td>
        </tr>
        <tr id="table_74_row_133">
            <td class="coptic" style="border-right: 1px solid black;">Cosmas and Demian, Anthimus and Leontius, and also
                Arabius, they were doctors and physicians.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲧⲉ Ⲕⲟⲥⲙⲁ ⲛⲉⲙ Ⲇⲉⲙⲓⲛⲟⲥ: ⲛⲉⲙ Ⲁⲛⲑⲓⲙⲟⲥ ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ:
                ⲛⲉⲙ ⲟⲩⲠⲣⲁⲃⲓⲟⲥ ϩⲁⲛⲥⲏⲓⲛⲓ ⲛⲉ: ⲟⲩⲟϩ ̀ⲛⲥⲟⲫⲟⲥ ϧⲉⲛ ⲧⲟⲩⲡⲓⲥⲧⲏⲙⲏ.</td>
            <td class="arabic">الذين هم قزمان ودميان وأنتيموس ولاونديوس وأبرابيوس أطباء وحكماء فى صناعتهم.</td>
        </tr>
        <tr id="table_74_row_134">
            <td class="coptic" style="border-right: 1px solid black;">They healed every sickness, of the soul and the
                body, and love was in their midst, their house was open for all.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲩⲉⲣⲫⲁ̀ϧⲣⲓ ̀ⲉϣⲱⲛⲓ ⲛⲓⲃⲉⲛ: ⲛⲁ ⲛⲓ̀ⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲁ ⲛⲓⲥⲱⲙⲁ:
                ̀ⲉⲣⲉ ϯ̀ⲁⲅⲁⲡⲏ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ: ̀ⲉⲣⲉ ⲡⲟⲩ̀ⲏⲓ ̀ⲛⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">يعالجون كل الأمراض النفسية والجسدية والمحبة فى وسطهم وكان بيتهم لكل واحد.</td>
        </tr>
        <tr id="table_74_row_135">
            <td class="coptic" style="border-right: 1px solid black;">The five brothers arose, and went to the governor,
                they performed many wonders, and signs on the way.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲧⲱⲟⲩⲛⲟⲩ ̀ⲛϫⲉ ⲛⲓ̀ⲧⲓⲟⲩ ̀ⲛⲥⲟⲛ: ⲁⲩϣⲉⲛⲱⲟⲩ ϣⲁ
                ⲡⲓϩⲏⲅⲉⲙⲱⲛ: ⲁⲩ̀ⲓⲣⲓ ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲛ̀ϣⲫⲏⲣⲓ: ⲛⲉⲙ ϩⲁⲛⲙⲏⲓⲛⲓ ϩⲓ ⲡⲓⲙⲱⲓⲧ.</td>
            <td class="arabic">فقام الخمسة اخوة ومضوا الى الوالى وفى الطريق صنعوا عجائب وآيات عظيمة فى الطريق.</td>
        </tr>
        <tr id="table_74_row_136">
            <td class="coptic" style="border-right: 1px solid black;">Saint Theodota, their blessed and holy mother,
                confirmed them in the faith, in the Name of Jesus Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯ̀ⲁⲅⲓⲁ ⲑⲉ̀ⲟⲇⲟⲇⲁ: ⲧⲟⲩⲙⲁⲩ ̀ⲛ̀ⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̅ⲉ̅ⲑ̅ⲩ:
                ⲛⲁⲥⲧⲁϫⲣⲟ ̀ⲙⲙⲱⲟⲩ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ̀ⲉϫⲉⲛ ̀ⲫⲣⲁⲛ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">والقديسة ثيؤدوتا أمهم المباركة القديسة كانت تثبتهم فى الايمان على اسم يسوع المسيح.</td>
        </tr>
        <tr id="table_74_row_137">
            <td class="coptic" style="border-right: 1px solid black;">For when they all stood, before the governor, they
                gave their confession, with great fervor.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲧⲁⲩ̀ⲟϩⲓ ⲅⲁⲣ ̀ⲉⲣⲁⲧⲟⲩ: ̀ⲙⲡⲉ̀ⲙⲑⲟ ̀ⲙⲡⲓϩⲏⲅⲉⲙⲱⲛ: ⲁⲩϯ
                ̀ⲛϯ̀ⲟⲙⲟⲗⲟⲅⲓ̀ⲁ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲙⲡⲁⲣⲣⲏⲥⲓ̀ⲁ.</td>
            <td class="arabic">ولما وقفوا أمام الوالى جاهروا باعترافهم باعلان عظيم.</td>
        </tr>
        <tr id="table_74_row_138">
            <td class="coptic" style="border-right: 1px solid black;">With this they wore the unfading crowns, of
                martyrdom, they celebrated with Christ, in the land of the living.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ⲛⲁⲓ ⲁⲩⲉⲣⲫⲟⲣⲓⲛ ̀ⲛϩⲁⲛ̀ⲭⲗⲟⲙ ̀ⲛⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ
                ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲩⲉⲣϣⲁⲓ ⲛⲉⲙ Ⲡ̅ⲭ̅ⲥ: ϧⲉⲛ ̀ⲧⲭⲱⲣⲁ ̀ⲛⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.</td>
            <td class="arabic">وبهذا توشحوا باكليل الشهادة غير المضمحل وعيدوا مع المسيح فى كورة الأحياء.</td>
        </tr>
        <tr id="table_74_row_139">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Cosmas and his brothers and their mother, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲛⲓ̀ⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲕⲟⲥⲙⲁ ⲛⲉⲙ ⲛⲉϥ̀ⲥⲛⲏⲟⲩ ⲛⲉⲙ ⲧⲟⲩⲙⲁⲩ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا عنا أيها الشهداء المجاهدون قزمان وأخوته وأمهم ليغفر...</td>
        </tr>
        <tr id="table_74_row_140">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. SARAPAMON, BISHOP OF NIKIOU</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_141">
            <td class="coptic" style="border-right: 1px solid black;">O great star, the holy shepherd, Abba Sarapamon
                the Bishop, the chosen martyr.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱ ⲡⲓⲛⲓϣϯ ̀ⲙⲫⲱⲥⲧⲏⲣ: ⲡⲓⲙⲁⲛ̀ⲉⲥⲱⲟⲩ ̅ⲉ̅ⲑ̅ⲩ: ⲁⲃⲃⲁ
                Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲥⲱⲧⲡ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">أيها الكوكب العظيم والراعى القديس أنبا صرابامون الأسقف والشهيد المختار.</td>
        </tr>
        <tr id="table_74_row_142">
            <td class="coptic" style="border-right: 1px solid black;">This is he who has blossomed, from the blessed
                root, of the great Stephen, the first martyr.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥⲫⲓⲣⲓ ̀ⲉⲃⲟⲗ: ϧⲉⲛ ϯⲛⲟⲩⲛⲓ ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ: ̀ⲛⲧⲉ
                ⲡⲓⲛⲓϣϯ ̀Ⲥⲧⲉⲫⲁⲛⲟⲥ: ⲟⲩⲟϩ ⲡⲓϣⲟⲣⲡ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">هذا الذى أزهر من الأصل المبارك الذى لاسطفانوس العظيم أول الشهداء.</td>
        </tr>
        <tr id="table_74_row_143">
            <td class="coptic" style="border-right: 1px solid black;">Who became a teacher, he explained the holy
                Scriptures, through the Holy Spirit, they called him a shepherd.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲏ̀ⲉⲧⲁϥϣⲱⲡⲓ ̀ⲛⲣⲉϥ̀ⲉⲙⲓ: ⲁϥⲉⲣⲙⲉⲛⲉⲩⲓⲛ ̀ⲛⲛⲓ̀ⲅⲣⲁⲫⲏ
                ̅ⲉ̅ⲑ̅ⲩ: ϩⲓⲧⲉⲛ ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ: ⲁⲩⲑⲱϩⲉⲙ ̀ⲙⲙⲟϥ ⲡⲓⲙⲁⲛ̀ⲉⲥⲱⲟⲩ.</td>
            <td class="arabic">الذى صار عالما ومفسرا للكتب المقدسة من قبل الروح القدس فدعى راعيا.</td>
        </tr>
        <tr id="table_74_row_144">
            <td class="coptic" style="border-right: 1px solid black;">Through his confession, of Christ our Savior, he
                was worthy of the unfading crown, of martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲧⲉϥ̀ⲟⲙⲟⲗⲟⲅⲓⲁ: ̀ⲉϧⲟⲩⲛ ̀ⲉⲠ̅ⲭ̅ⲥ ⲡⲉⲛⲤⲱⲧⲏⲣ:
                ⲁϥⲉⲣⲉ̀ⲙ̀ⲡϣⲁ ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ ̀ⲛ̀ⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">وباعترافه بالمسيح مخلصنا استحق الاكليل غير المضمحل الذى للشهادة.</td>
        </tr>
        <tr id="table_74_row_145">
            <td class="coptic" style="border-right: 1px solid black;">He celebrated with the martyrs, in the Kingdom of
                heaven, he rejoiced with Christ, in the land of the living.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥ̀ⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ϧⲉⲛ ϯⲙⲉⲧⲟⲩⲣⲟ ̀ⲛⲧⲉ
                ⲛⲓⲫⲏⲟⲩ̀ⲓ: ⲁϥⲟⲩⲛⲟϥ ̀ⲙⲙⲟϥ ⲛⲉⲙ Ⲡ̅ⲭ̅ⲥ: ϧⲉⲛ ̀ⲧⲭⲱⲣⲁ ̀ⲛⲧⲉ ⲛⲏ̀ⲉⲧⲟⲛϧ.</td>
            <td class="arabic">وعيد مع الشهداء فى ملكوت السموات وفرح مع المسيح فى كورة الأحياء.</td>
        </tr>
        <tr id="table_74_row_146">
            <td class="coptic" style="border-right: 1px solid black;">Likewise we magnify you, with David the psalmist,
                You are a priest forever, according to the order of Melchizedek.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ
                ̀ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ̀ⲉⲛⲉϩ: ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ ̀ⲙⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">لذلك نرفعك مع المرنم داود قائلين انك انت هو الكاهن الى الأبد على رتبة ملشيصاداق.</td>
        </tr>
        <tr id="table_74_row_147">
            <td class="coptic" style="border-right: 1px solid black;">Through his pleasant prayers, O Christ our Savior,
                grant us Your true peace, and the forgiveness of our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲛⲉϥⲉⲩⲭⲏ ⲉⲩϣⲏⲡ: Ⲡ̅ⲭ̅ⲥ ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲙⲟⲓ ⲛⲁⲛ
                ̀ⲛⲧⲉⲕϩⲓⲣⲏⲛⲏ ̀ⲙⲙⲏⲓ: ⲛⲉⲙ ̀ⲡⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلواته المقبولة أيها المسيح الهنا مخلصنا امنحنا سلامك الحقيقى ومغفرة خطايانا.</td>
        </tr>
        <tr id="table_74_row_148">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyr, Abba Sarapamon the Bishop, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓ̀ⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲃⲃⲁ Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها الشهيد المجاهد أنبا صرابامون الأسقف ليغفر..</td>
        </tr>
        <tr id="table_74_row_149">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. ABAKIR & ST. JOHN</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_150">
            <td class="coptic" style="border-right: 1px solid black;">Abakir and his brother John, and their blessed
                sisters, the soldiers of Christ, loved Him very much.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ: ⲛⲉⲙ ⲥⲱⲛⲓ ̀ⲥⲛⲁⲩ (̅ⲃ)
                ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ: ⲛⲓⲙⲁⲧⲟⲓ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ: ⲛⲁⲩⲙⲉⲓ ̀ⲙⲙⲟϥ ̀ⲉⲙⲁϣⲱ.</td>
            <td class="arabic">أباكير ويوحنا أخوه مع أختين مباركتين جنود المسيح كانوا يحبونه جدا.</td>
        </tr>
        <tr id="table_74_row_151">
            <td class="coptic" style="border-right: 1px solid black;">Because of their trusted love, and their faith in
                Christ, they hated the whole world, its riches and all that is in it.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩⲙⲟⲥϯ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲛⲉⲙ ⲛⲉϥ̀ⲭⲣⲏⲙⲁ ⲛⲉⲙ
                ⲡⲓ̀ⲡⲧⲏⲣϥ: ⲉⲑⲃⲉ ⲧⲟⲩ̀ⲁⲅⲁⲡⲏ ̀ⲉⲧⲉⲛϩⲟⲧ: ⲛⲉⲙ ⲡⲟⲩⲛⲁϩϯ ϧⲉⲛ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">أبغضوا العالم كله ومقتنياته وكل ما فيه من أجل محبتهم الصادقة وايمانهم بالمسيح.</td>
        </tr>
        <tr id="table_74_row_152">
            <td class="coptic" style="border-right: 1px solid black;">They suffered in their bodies, many great
                afflictions, through the faith of Christ, they did not surrender to them.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϣⲉⲡ̀ⲙⲕⲁϩ ϧⲉⲛ ̀ⲛⲟⲩⲥⲱⲙⲁ: ϩⲓⲧⲉⲛ ϩⲁⲛⲛⲓϣϯ ̀ⲙⲃⲁⲥⲁⲛⲟⲥ:
                ⲉⲑⲃⲉ ̀ⲫⲛⲁϩϯ ̀ⲙⲠ̅ⲭ̅ⲥ: ̀ⲙⲙⲟⲛ ⲧⲟⲩⲭⲁⲩ̀ⲁⲣⲟⲥ ̀ⲙⲙⲱⲟⲩ.</td>
            <td class="arabic">تألموا فى أجسادهم بعذابات عظيمة من أجل الايمان بالمسيح ولم يتخلوا عنها.</td>
        </tr>
        <tr id="table_74_row_153">
            <td class="coptic" style="border-right: 1px solid black;">They received unfading crowns, of martyrdom, they
                celebrated with all the saints, in the land of the living.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϭⲓ ̀ⲛϩⲁⲛ̀ⲭⲗⲟⲙ ̀ⲛ̀ⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ:
                ⲁⲩ̀ⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏ̅ⲉ̅ⲑ̅ⲩ ⲧⲏⲣⲟⲩ: ϧⲉⲛ ̀ⲧⲭⲱⲣⲁ ̀ⲛⲧⲉ ⲛⲏ̀ⲉⲧ̀ⲱⲛϧ.</td>
            <td class="arabic">فنالوا اكاليلا غير مضمحلة التى للشهادة وعيدوا مع جميع القديسين فى كورة الأحياء.</td>
        </tr>
        <tr id="table_74_row_154">
            <td class="coptic" style="border-right: 1px solid black;">Hail to the two holy brothers, Abakir and his
                brother John, hail to the two martyrs, the spiritual physicians.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲓⲥⲟⲛ ̀ⲥⲛⲁⲩ (̅ⲃ) ̅ⲉ̅ⲑ̅ⲩ: Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ
                ⲡⲉϥⲥⲟⲛ: ⲭⲉⲣⲉ ̀ⲥⲛⲁⲫ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲓⲥⲏⲓⲛⲓ ̀ⲙ̀ⲡⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">السلام للأخوين القديسين أباكير ويوحنا أخيه السلام للشهيدين الطبيبين الروحيين.</td>
        </tr>
        <tr id="table_74_row_155">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Abakir and his brother John, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲛⲓ̀ⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا أيها الشهيدان المجاهدان أباكير ويوحنا أخوه ليغفر...</td>
        </tr>
        <tr id="table_74_row_156">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. VICTOR</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_157">
            <td class="coptic" style="border-right: 1px solid black;">Teach me where do you flee, O Victor my beloved
                son, for the muzzle is on your mouth, and the chains are on your hands.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲧⲁⲙⲟⲓ ϫⲉ ̀ⲕϣⲉ ̀ⲉⲑⲱⲛ: ̀ⲱ Ⲃⲓⲕⲧⲱⲣ ⲡⲁⲙⲉⲛⲣⲓⲧ ̀ⲛϣⲏⲣⲓ:
                ̀ⲉⲣⲉ ⲡⲓⲕⲏⲙⲟⲥ ⲭⲏ ϧⲉⲛ ⲣⲱⲕ: ̀ⲉⲣⲉ ⲛⲓⲡⲉⲇⲏⲥ ϧⲉⲛ ⲛⲉⲕϫⲓϫ.</td>
            <td class="arabic">اعلمنى الى أين تذهب. يا بقطر ابنى الحبيب واللجام فى فمك والقيود فى يديك.</td>
        </tr>
        <tr id="table_74_row_158">
            <td class="coptic" style="border-right: 1px solid black;">He said "I fled to the land, of Egypt to Armenius,
                that I may die in the Name of my Savior, and that He may forgive me my sins."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉϫⲁϥ ϫⲉ ϯϣⲉ ̀ⲉ̀ⲧⲭⲱⲣⲁ: ̀ⲛⲬⲏⲙⲓ ̀ⲉⲣⲁⲧϥ ̀ⲛⲀⲣⲙⲉⲛⲓⲟⲥ:
                ̀ⲛⲧⲁⲙⲟⲩ ̀ⲉϫⲉⲛ ̀ⲫⲣⲁⲛ ̀ⲙⲡⲁⲤⲱⲧⲏⲣ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲁⲛⲟⲃⲓ ⲛⲏⲓ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">قال أنا ذاهب الى اقليم مصر الى أرمانيوس لأموت على اسم مخلصى ليغفر لى خطاياى.</td>
        </tr>
        <tr id="table_74_row_159">
            <td class="coptic" style="border-right: 1px solid black;">"After that month, O Victor my beloved son, I am
                prepared to marry you, and give you many riches."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀ⲁⲃⲟⲧ ⲙⲉⲛⲉⲛⲥⲁ ⲫⲁⲓ: ̀ⲱ Ⲃⲓⲕⲧⲱⲣ ⲡⲁⲙⲉⲛⲣⲓⲧ ̀ⲛ̀ϣⲏⲣⲓ:
                ϯⲥⲉⲃⲧⲱⲧ ̀ⲉ̀ⲓⲣⲓ ̀ⲛⲧⲉⲕϣⲉⲗⲉⲧ: ̀ⲛⲧⲁϯ ̀ⲛϩⲁⲛⲙⲏϣ ̀ⲛ̀ⲭⲣⲏⲙⲁ ⲛⲁⲕ.</td>
            <td class="arabic">من بعد هذا الشهر يابقطر ابنى الحبيب أنا مستعدة لعمل عرسك ولأعطيك أموالا كثيرة.</td>
        </tr>
        <tr id="table_74_row_160">
            <td class="coptic" style="border-right: 1px solid black;">"My time and my wedding will come, O Martha my
                beloved mother, for the Church is my wedding, and my Savior is my bridegroom."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲁⲥⲏⲟⲩ ̀ⲁⲛⲟⲕ ⲧⲁϣⲉⲗⲉⲧ ⲭⲏ: ̀ⲱ Ⲙⲁⲣⲑⲁ ⲧⲁⲙⲉⲛⲣⲓϯ ̀ⲙⲙⲁⲩ:
                ⲧⲁϣⲉⲗⲉⲧ ⲧⲉ ϯ̀ⲉⲕⲕⲗⲏⲥⲓⲁ: ⲡⲁⲡⲁⲧϣⲉⲗⲉⲧ ⲡⲉ ⲡⲁⲥⲱⲧⲏⲣ.</td>
            <td class="arabic">ان زمانى وعرسى صائر يا مرثا أمى الحبيبة. عروسى هى الكنيسة وعريسى هو مخلصى.</td>
        </tr>
        <tr id="table_74_row_161">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O martyr, of our Lord Jesus Christ,
                hail to the courageous hero, the saint Abba Victor.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ̀ⲛⲧⲉ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ:
                ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ̀ⲛⲅⲉⲛⲛⲉⲟⲥ: ⲡⲓ̀ⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲃⲓⲕⲧⲱⲣ.</td>
            <td class="arabic">السلام لك يا شهيد ربنا يسوع المسيح السلام للشجاع القوى القديس أبا بقطر.</td>
        </tr>
        <tr id="table_74_row_162">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O saint Abba
                Victor, remember us before the Lord, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉⲅⲱⲛ: ̀ⲱ ⲡⲓ̀ⲁⲅⲓⲟⲥ ⲁⲡⲁ
                Ⲃⲓⲕⲧⲱⲣ: ̀ⲁⲣⲓⲡⲉⲛⲙⲉⲩ̀ⲓ ϧⲁ ̀ⲧϩⲏ ̀ⲙⲠ̅ⲟ̅ⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها القديس أبا بقطر اذكرنا قدام الرب ليغفر...</td>
        </tr>
        <tr id="table_74_row_163">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. MOSES THE STRONG</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_164">
            <td class="coptic" style="border-right: 1px solid black;">The first holy martyr, who was truly perfected, on
                the mountain of Shiheet, is our holy father Abba Moses.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓϣⲟⲣⲡ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ ̅ⲉ̅ⲑ̅ⲩ: ̀ⲉⲧⲁϥϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛⲕⲁⲗⲱⲥ:
                ϧⲉⲛ ⲡⲓⲧⲱⲟⲩ ̀ⲛⲧⲉ Ϣⲓϩⲏⲧ: ⲡⲉ ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ.</td>
            <td class="arabic">الشهيد الأول القديس الذى كمل حسنا فى جبل شيهات هو أبونا القديس أنبا موسى.</td>
        </tr>
        <tr id="table_74_row_165">
            <td class="coptic" style="border-right: 1px solid black;">He became a fighter, whom the demons fear, he
                stood upon the rock, a symbol of the Cross.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϣⲱⲡⲓ ⲅⲁⲣ ̀ⲛⲟⲩⲣⲉϥϯ: ⲉϥⲟⲓ ̀ⲛϩⲟϯ ⲟⲩⲃⲉ ⲛⲓⲇⲉⲙⲱⲛ:
                ⲁϥ̀ⲟϩⲓ ̀ⲉⲣⲁⲧϥ ϩⲓϫⲉⲛ ϯⲡⲉⲧⲣⲁ: ⲕⲁⲧⲁ ̀ⲡⲧⲩⲡⲟⲥ ̀ⲙⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">لأنه صار محاربا. مخوفا ضد الشياطين. ووقف على الصخرة كمثال الصليب.</td>
        </tr>
        <tr id="table_74_row_166">
            <td class="coptic" style="border-right: 1px solid black;">Through his great patience, of the pain of the
                sufferings, he wore the crown, of martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲓⲧⲉⲛ ⲧⲉϥⲛⲓϣϯ ̀ⲛϩⲩⲡⲟⲙⲟⲛⲏ: ⲛⲉⲙ ⲡⲓϧⲓⲥⲓ ⲛⲧⲉ
                ⲛⲓⲃⲁⲥⲁⲛⲟⲥ: ⲁϥⲉⲣⲫⲟⲣⲓⲛ ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">بعظم صبره وتعب العذابات لبس اكليل الشهادة.</td>
        </tr>
        <tr id="table_74_row_167">
            <td class="coptic" style="border-right: 1px solid black;">He flew in the spirit to the heights, to His place
                of rest, which the Lord has prepared, for those who love His holy Name.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϩⲱⲗ ̀ⲉ̀ⲡϭⲓⲥⲓ ϧⲉⲛ ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ: ̀ⲉϧⲟⲩⲛ
                ̀ⲉⲛⲉϥⲙⲁ̀ⲛⲉⲙⲧⲟⲛ: ̀ⲉⲧⲁϥⲥⲉⲃⲧⲱⲧⲟⲩ ̀ⲛϫⲉ Ⲡ̅ⲟ̅ⲥ: ̀ⲛⲛⲏ̀ⲉⲑⲙⲉⲓ ̀ⲙⲡⲉϥⲣⲁⲛ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">ذهب بالروح الى العلو الى مواضع النياح التى أعدها الرب لمحبى اسمه القدوس.</td>
        </tr>
        <tr id="table_74_row_168">
            <td class="coptic" style="border-right: 1px solid black;">He left for us his holy body, and his holy cell,
                that we may be perfected, in his honored remembrance.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲥⲱϫⲡ ⲛⲁⲛ ̀ⲙⲡⲉϥⲥⲱⲙⲁ: ⲛⲉⲙ ⲡⲉϥ̀ⲥⲡⲏⲗⲉⲟⲛ ̅ⲉ̅ⲑ̅ⲩ:
                ⲉⲑⲣⲉⲛϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛϧⲏⲧϥ: ̀ⲙⲡⲉϥⲉⲣ̀ⲫⲙⲉⲩ̀ⲓ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ.</td>
            <td class="arabic">وأبقى لنا جسده ومغارته المقدسة لنكمل فيها تذكاره المكرم.</td>
        </tr>
        <tr id="table_74_row_169">
            <td class="coptic" style="border-right: 1px solid black;">Proclaiming and saying, "O God of Abba Moses, and
                those who were perfected with him, have mercy upon our souls."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲛⲱϣ ̀ⲉⲃⲟⲗ ⲉⲛϫⲱ ̀ⲙⲙⲟⲥ: ϫⲉ Ⲫϯ ̀ⲛⲁⲃⲃⲁ Ⲙⲱⲥⲏ: ⲛⲉⲙ
                ⲛⲏ̀ⲉⲧⲁⲩϫⲱⲕ ̀ⲉⲃⲟⲗ ⲛⲉⲙⲁϥ: ̀ⲁⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">اذ نصرخ قائلين يا اله أنبا موسى والذين كملوا معه اصنع رحمة مع نفوسنا.</td>
        </tr>
        <tr id="table_74_row_170">
            <td class="coptic" style="border-right: 1px solid black;">That we may win the promises, which He has
                prepared for the saints, who have pleased Him since the beginning, because of their love for Him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ̀ⲛⲧⲉⲛϣⲁϣⲛⲓ ̀ⲉⲛⲓⲱϣ: ̀ⲉⲧⲁϥⲥⲉⲃⲧⲱⲧⲟⲩ ̀ⲛⲛⲏ̅ⲉ̅ⲑ̅ⲩ:
                ̀ⲉⲧⲁⲩⲣⲁⲛⲁϥ ⲓⲥϫⲉⲛ ̀ⲡ̀ⲉⲛⲉϩ: ⲉⲑⲃⲉ ⲧⲟⲩ̀ⲁⲅⲁⲡⲏ ̀ⲉϧⲟⲩⲛ ̀ⲉⲣⲟϥ.</td>
            <td class="arabic">ونفوز بالمواعيد المعدة للقديسين. الذين أرضوه منذ البدء لأجل حبهم فيه</td>
        </tr>
        <tr id="table_74_row_171">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my father Abba
                Moses, and his children the cross-bearers, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ ⲁⲃⲃⲁ
                Ⲙⲱⲥⲏ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ̀ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياسيدى الآب أنبا موسى وأولاده لباس الصليب ليغفر...</td>
        </tr>
        <tr id="table_74_row_172">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. DEMIANA</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_173">
            <td class="coptic" style="border-right: 1px solid black;">The wise celibate child, the chosen and true lady,
                the Bride of Christ, Saint Demiana.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯⲁⲗⲟⲩ ̀ⲛⲥⲁⲃⲏ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲥⲱⲧⲡ ̀ⲛⲕⲩⲣⲓ̀ⲁ ̀ⲙⲙⲏⲓ:
                ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ: ϯ̀ⲁⲅⲓⲁ Ⲇⲉⲙⲓⲁⲛⲏ.</td>
            <td class="arabic">الصبية العذراء الحكيمة المختارة البارة عروس المسيح القديسة دميانه.</td>
        </tr>
        <tr id="table_74_row_174">
            <td class="coptic" style="border-right: 1px solid black;">This is she who was filled with wisdom, from her
                childhood, she hated the earthly, and she loved virginity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲑⲁⲓ ⲓⲥϫⲉⲛ ⲧⲉⲥⲙⲉⲧ̀ⲁⲗⲟⲩ: ⲁⲥⲙⲉϩ ̀ⲉⲃⲟⲗ ϧⲉⲛ ϯⲥⲟⲫⲓⲁ:
                ⲁⲥⲙⲟⲥϯ ̀ⲛⲛⲓⲕⲟⲥⲙⲓⲕⲟⲛ: ⲁⲥⲙⲉⲛⲣⲉ ̀ⲛϯⲡⲁⲣⲑⲉⲛⲓ̀ⲁ.</td>
            <td class="arabic">هذه التى امتلأت من الحكمة منذ صباها فأبغضت العالميات وأحبت البتولية.</td>
        </tr>
        <tr id="table_74_row_175">
            <td class="coptic" style="border-right: 1px solid black;">She became the head, and a harbor of salvation,
                the mother of forty virgins, in the tower which her father built.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲥϣⲱⲡⲓ ̀ⲛϯⲁⲣⲭⲏ: ̀ⲛⲗⲩⲙⲏⲛ ̀ⲛⲧⲉ ⲡⲓⲟⲩϫⲁⲓ: ̀ⲏⲙⲁⲩ ̀ⲛϩⲙⲉ
                ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ⲡⲓⲡⲩⲣⲅⲟⲥ ̀ⲉⲧⲁ ⲡⲉⲥⲓⲱⲧ ⲕⲟⲧϥ.</td>
            <td class="arabic">صارت رئيسة وميناء للخلاص وأما للأربعين عذراء فى القصر الذى بناه لها أبوها..</td>
        </tr>
        <tr id="table_74_row_176">
            <td class="coptic" style="border-right: 1px solid black;">When he denied Christ, his loving daughter
                Demiana, restored his faith, and he received martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϫⲱⲗ ̀ⲉⲃⲟⲗ ̀ⲙⲠ̅ⲭ̅ⲥ: ⲁⲥⲧⲁⲥⲑⲟ ̀ⲙⲙⲟϥ ̀ⲛϫⲉ ⲧⲉϥϣⲉⲣⲓ:
                ̀ⲉⲧⲁⲥⲙⲉⲣⲉ ̀ⲙⲙⲟϥ ̀ⲛϫⲉ Ⲇⲉⲙⲓⲁⲛⲏ: ⲁϥϭⲓ ̀ⲛϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲓⲁ.</td>
            <td class="arabic">ولما كفر بالمسيح ردته ابنته دميانه التى أحبته فنال الشهادة.</td>
        </tr>
        <tr id="table_74_row_177">
            <td class="coptic" style="border-right: 1px solid black;">Because of this the king had sent for her, and
                ordered her to be tortured, she endured repeated sufferings, and received martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲟⲩⲱⲣⲡ ̀ⲛϫⲉ ̀ⲡⲟⲩⲣⲟ: ⲁϥⲟⲩⲁϩⲥⲁϩⲛⲓ ϧⲉⲛ
                ⲛⲉⲥϧⲓⲥⲓ: ⲁⲥϣⲉⲡ̀ⲙⲕⲁϩ ̀ⲛⲟⲩⲙⲏϣ ̀ⲛⲥⲟⲡ: ⲁⲥϭⲓ ̀ⲛϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲓⲁ.</td>
            <td class="arabic">من أجل هذا أرسل الملك أمره بتعذيبها فقبلت آلامات عدة ونالت الشهادة.</td>
        </tr>
        <tr id="table_74_row_178">
            <td class="coptic" style="border-right: 1px solid black;">The forty holy virgins, who were with her in the
                tower, received martyrdom, all in one day with her.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲉϩⲙⲉ ̅ⲉ̅ⲑ̅ⲩ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ: ̀ⲉⲛⲁⲩϣⲱⲡⲓ ⲛⲉⲙⲁⲥ ϧⲉⲛ
                ⲡⲓⲡⲩⲣⲅⲟⲥ: ⲁⲩϭⲓ ̀ⲛϯ-ⲙⲉⲧⲙⲁⲣⲧⲩⲣⲓⲁ: ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲛⲟⲩⲱⲧ ⲛⲉⲙⲁⲥ.</td>
            <td class="arabic">والأربعون عذراء الذين كانوا معها فى القصر نالوا الشهادة معها فى يوم واحد.</td>
        </tr>
        <tr id="table_74_row_179">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you O Demiana, the bride of
                Circumcision, the celibate nun, the chosen and true martyr.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱ̀ⲟⲩⲛⲓⲁϯ ̀ⲛⲑⲟ Ⲇⲉⲙⲓⲁⲛⲏ: ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ ⲡⲓⲛⲩⲙⲫⲓⲟⲥ:
                ϯⲙⲟⲛⲁⲭⲏ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲥⲱⲧⲡ ̀ⲙⲙⲏⲓ̀ ⲙⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">طوباك يادميانه عروس الختن الراهبة البتول المختارة الشهيدة الحقيقية.</td>
        </tr>
        <tr id="table_74_row_180">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O bride of Christ,
                Saint Demiana, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ:
                ϯ̀ⲁⲅⲓⲁ Ⲇⲉⲙⲓⲁⲛⲏ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبى من الرب عنا ياعروس المسيح القديسة دميانه ليغفر...</td>
        </tr>
        <tr id="table_74_row_181">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. BARBARA & ST. JULIANA</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_182">
            <td class="coptic" style="border-right: 1px solid black;">The light of the holy Trinity, has shone upon this
                virgin, Saint Barbara, the Bride of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲟⲩⲱⲓⲛⲓ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ ̅ⲉ̅ⲑ̅ⲩ: ⲁϥϣⲁⲓ ̀ⲉϫⲉⲛ
                ⲧⲁⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ϯ̀ⲁⲅⲓⲁ Ⲃⲁⲣⲃⲁⲣⲁ: ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">نور الثالوث الأقدس أشرق على هذه العذراء القديسة برباره عروس المسيح.</td>
        </tr>
        <tr id="table_74_row_183">
            <td class="coptic" style="border-right: 1px solid black;">She loved the holy Trinity, and hated her father,
                the lawless man, who cut her head with his hand.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲥⲙⲉⲛⲣⲉ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ ̅ⲉ̅ⲑ̅ⲩ: ⲟⲩⲟϩ ⲉⲑⲙⲟⲥϯ ⲅⲁⲣ
                ̀ⲙⲡⲉⲥⲓⲱⲧ: ⲡⲓⲣⲱⲙⲓ ̀ⲛ̀ⲁⲛⲟⲙⲟⲥ ̀ⲉⲧⲁϥϣⲁⲧ: ̀ⲛⲧⲉⲥ̀ⲁⲫⲉ ϧⲉⲛ ⲧⲉϥϫⲓϫ.</td>
            <td class="arabic">لأنها أحبت الثالوث الأقدس وأبغضت أباها. الرجل مخالف الناموس الذى قطع رأسها بيده.</td>
        </tr>
        <tr id="table_74_row_184">
            <td class="coptic" style="border-right: 1px solid black;">Rejoice O true bride, who has become a sanctuary,
                for the Holy Spirit, since her early childhood.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲣⲁϣⲓ ̀ⲱ ϯϣⲉⲗⲉⲧ ̀ⲙⲙⲏⲓ: ⲉⲏ̀ⲉⲧⲁⲥϣⲱⲡⲓ ̀ⲛⲟⲩ̀ⲉⲣⲫⲉⲓ: ̀ⲛⲧⲉ
                ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ: ⲓⲥϫⲉⲛ ⲧⲉⲥⲙⲉⲧⲕⲟⲩϫⲓ ̀ⲛ̀ⲁⲗⲟⲩ.</td>
            <td class="arabic">افرحى أيتها العروس الحقيقية. التى صارت هيكلا للروح القدس منذ طفوليتها.</td>
        </tr>
        <tr id="table_74_row_185">
            <td class="coptic" style="border-right: 1px solid black;">For you became a daughter, of the heavenly Father,
                and you became a daughter, of Mary the Virgin.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲣⲉϣⲱⲡⲓ ⲅⲁⲣ ̀ⲛⲑⲟ: ⲧϣⲉⲣⲓ ̀ⲙⲪⲓⲱⲧ ⲉⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩ̀ⲓ:
                ⲟⲩⲟϩ ̀ⲉⲣⲉϣⲱⲡⲓ ⲅⲁⲣ ̀ⲛⲟⲩϣⲉⲣⲓ: ̀ⲙⲘⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">لأنك صرت ابنة للآب السماوى وصرت أيضا ابنة لمريم العذراء.</td>
        </tr>
        <tr id="table_74_row_186">
            <td class="coptic" style="border-right: 1px solid black;">We honor you joyfully, O brides of Christ, Saint
                Barbara, and Saint Juliana.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲉⲛⲧⲁⲓ̀ⲟ ̀ⲙⲙⲱⲧⲉⲛ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ̀ⲱ ⲛⲓϣⲉⲗⲉⲧ ̀ⲛⲧⲉ
                Ⲡ̅ⲭ̅ⲥ: ϯ̀ⲁⲅⲓⲁ Ⲃⲁⲣⲃⲁⲣⲁ: ⲛⲉⲙ ϯ̀ⲁⲅⲓⲁ Ⲓⲱⲗⲓⲁⲛⲁ.</td>
            <td class="arabic">نكرمكما بابتهاج ياعروسا المسيح. أيتها القديسة الحقيقية بربارة والقديسة يوليانه.</td>
        </tr>
        <tr id="table_74_row_187">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O brides of
                Christ, Barbara and Juliana, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲛⲓϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ:
                Ⲃⲁⲣⲃⲁⲣⲁ ⲛⲉⲙ Ⲓⲱⲗⲓⲁⲛⲁ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا من الرب عنا ياعروسا المسيح برباره ويوليانه ليغفر...</td>
        </tr>
        <tr id="table_74_row_188">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. MARINA</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_189">
            <td class="coptic" style="border-right: 1px solid black;">The celibate daughter, greater in her strength,
                than the strong young men, she performed great miracles.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲧϣⲉⲣⲓ ⲇⲉ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲟⲓ ̀ⲛⲛⲓϣϯ ϧⲉⲛ ⲧⲉⲥϫⲟⲙ:
                ̀ⲉϩⲟⲧⲉ ⲛⲓϫⲱⲣⲓ ̀ⲛϧⲉⲗϣⲏⲣⲓ: ⲉⲥ̀ⲓⲣⲓ ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲛϫⲟⲙ.</td>
            <td class="arabic">وابنة عذراء عظيمة في قوتها أكثر من الشبان الأقوياء صانعة قوات عظيمة.</td>
        </tr>
        <tr id="table_74_row_190">
            <td class="coptic" style="border-right: 1px solid black;">This is the chosen saint, the virgin Marina, she
                overpowered Satan, and embarrassed kings.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲧⲉ ϯⲥⲱⲧⲡ ̀ⲛ̀ⲁⲅⲓⲁ: ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲛⲁ: ⲉⲥϭⲓ ̀ϭⲣⲟ
                ̀ⲙ̀ⲡⲥⲁⲧⲁⲛⲁⲥ: ⲉⲥϯϭⲓⲡⲓ ̀ⲛⲛⲓⲟⲩⲣⲱⲟⲩ.</td>
            <td class="arabic">التي هي القديسة المختارة مارينا العذراء غالبة الشيطان وخازية الملوك.</td>
        </tr>
        <tr id="table_74_row_191">
            <td class="coptic" style="border-right: 1px solid black;">For she loved Christ, from her early childhood,
                Christ gave unto her, His grace and His high strength.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲥⲙⲉⲛⲣⲉ ̀ⲙⲠ̅ⲭ̅ⲥ: ⲓⲥϫⲉⲛ ⲧⲉⲥⲙⲉⲧⲕⲟⲩϫⲓ ̀ⲛⲁⲗⲟⲩ: ⲁϥϯ ⲛⲁⲥ
                ̀ⲛϫⲉ Ⲡ̅ⲭ̅ⲥ: ⲡⲉϥ̀ϩⲙⲟⲧ ⲛⲉⲙ ⲧⲉϥϫⲟⲙ
                ⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">لأنها أحبت المسيح منذ طفوليتها وأعطاها المسيح نعمته وقوته العالية.</td>
        </tr>
        <tr id="table_74_row_192">
            <td class="coptic" style="border-right: 1px solid black;">So that she may be patient, during the many
                sufferings, she received the unfading crown, of martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲛⲧⲉⲥ ⲉⲣϩⲩⲡⲟⲙⲟⲛⲏ: ⲓⲥϫⲉⲛ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ ⲉⲧⲟϣ: ⲁⲥϭⲓ
                ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ ̀ⲛⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">لكي تصبر على العذابات الكثيرة فنالت إكليل الشهادة غير المضمحل.</td>
        </tr>
        <tr id="table_74_row_193">
            <td class="coptic" style="border-right: 1px solid black;">Adorn O virgins, who have received martyrdom, with
                Saint Marina, the bride of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲯⲟⲗⲥⲉⲗ ̀ⲱ ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲧⲁⲩϭⲓ ̀ⲛϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲉⲙ
                ϯ̀ⲁⲅⲓⲁ Ⲙⲁⲣⲓⲛⲁ: ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">تزين أيتها العذارى اللواتي نلن الشهادة مع القديسة مارينا عروس المسيح.</td>
        </tr>
        <tr id="table_74_row_194">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O bride of Christ,
                Saint Marina, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉϩⲣ̀ⲏⲓ ⲉϫⲱⲛ: ̀ⲱ ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ:
                ϯ̀ⲁⲅⲓⲁ Ⲙⲁⲣⲓⲛⲁ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبي من الرب عنا يا عروس المسيح القديسة مارينا ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_195">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. PAUL THE HERMIT</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_196">
            <td class="coptic" style="border-right: 1px solid black;">Our holy father Abba Paul, was the first in the
                wilderness, he unceasingly disciplined himself, by day and by night.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲁϥϣⲱⲡⲓ ̀ⲛϩⲟⲩⲓⲧ ϩⲓ
                ̀ⲡϣⲁϥⲉ: ⲁϥⲉⲣⲁⲥⲕⲓⲛ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲑⲙⲟⲩⲛⲕ: ̀ⲙⲡⲓ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲉϫⲱⲣϩ.</td>
            <td class="arabic">أبونا القديس أنبا بولا صار أولا فى البرية وتنسك بغير انقطاع نهاراً وليلا.</td>
        </tr>
        <tr id="table_74_row_197">
            <td class="coptic" style="border-right: 1px solid black;">He fought in the stadium, of piety and he
                received, the gift of victory, through the strength of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓ̀ⲥⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ: ⲁϥϭⲓ
                ̀ⲙⲡⲓⲃⲁⲓ ̀ⲛⲧⲉ ⲡⲓ̀ϭⲣⲟ: ϩⲓⲧⲉⲛ ̀ⲧϫⲟⲙ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">وجاهد فى ميدان العبادة ونال جائزة الغلبة بقوة المسيح.</td>
        </tr>
        <tr id="table_74_row_198">
            <td class="coptic" style="border-right: 1px solid black;">Proclaiming and saying, like the wise Paul, before
                our righteous father, the great Saint Antony.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉϥⲱϣ ̀ⲉⲃⲟⲗ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ: ̀ⲙ̀ⲫⲣⲏϯ ̀ⲙⲡⲓⲥⲟⲫⲟⲥ Ⲡⲁⲩⲗⲟⲥ:
                ̀ⲙⲡⲉ̀ⲙⲑⲟ ̀ⲙⲡⲉⲛⲓⲱⲧ ⲡⲓ̀ⲑⲙⲏⲓ: ⲡⲓⲛⲓϣϯ ̅ⲉ̅ⲑ̅ⲩ Ⲁⲛⲧⲱⲛⲓⲟⲥ.</td>
            <td class="arabic">صارخاً قائلاً مثل بولس الحكيم أمام أبينا البار العظيم القديس أنطونيوس.</td>
        </tr>
        <tr id="table_74_row_199">
            <td class="coptic" style="border-right: 1px solid black;">"I have fought, the good fight, I have finished
                the race, and I have kept the faith."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲟⲕ ⲡⲓ̀ⲁⲅⲱⲛ ⲉⲑⲛⲁⲛⲉϥ: ⲁⲓⲉⲣ̀ⲁⲅⲱⲛⲓⲍⲉⲥⲑⲉ ̀ⲙⲙⲟϥ:
                ⲡⲓ̀ⲇⲣⲟⲙⲟⲥ ⲁⲓϫⲟⲕϥ ̀ⲉⲃⲟⲗ: ⲡⲓⲛⲁϩϯ ⲁⲓ̀ⲁⲣⲉϩ ̀ⲉⲣⲟϥ.</td>
            <td class="arabic">قد جاهدت الجهاد الحسن. وأكملت السعى وحفظت الايمان.</td>
        </tr>
        <tr id="table_74_row_200">
            <td class="coptic" style="border-right: 1px solid black;">"There is laid up for me, the crown of
                righteousness, which the Lord will give me, in that day."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲁⲗⲓⲛ ̀ϥⲭⲏ ⲛⲏⲓ ̀ⲛϫⲉ ⲡⲓ̀ⲭⲗⲟⲙ: ̀ⲛⲧⲉ ϯⲇⲓⲕⲉⲟⲥⲩⲛⲏ: ⲫⲁⲓ
                ̀ⲉⲧⲉ Ⲡ̅ⲟ̅ⲥ ⲛⲁⲧⲏⲓϥ ⲛⲏⲓ: ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲉⲧⲉ ̀ⲙⲙⲁⲩ.</td>
            <td class="arabic">وأيضاً وضع لى اكليل البر هذا الذى يعطيه لى الرب فى ذلك اليوم.</td>
        </tr>
        <tr id="table_74_row_201">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O great and holy
                Abba Paul, that the Lord whom you have loved, may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓⲛⲓϣϯ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ
                Ⲡⲁⲩⲗⲉ: ϩⲓⲛⲁ ̀ⲛⲧⲉ Ⲡ̅ⲟ̅ⲥ ⲫⲏ̀ⲉⲧⲁⲕⲙⲉⲛⲣⲓⲧϥ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها القديس العظيم أنبا بولا من الرب الذى احببته لكى يغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_202">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. MACARIUS THE GREAT</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_203">
            <td class="coptic" style="border-right: 1px solid black;">Hail to the great Abba Makari, the light of
                monasticism, who became the golden lamp, shining more than the sun.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ: ⲡⲓϧⲏⲃⲥ ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ:
                ⲫⲏ̀ⲉⲧⲁϥϣⲱⲡⲓ ̀ⲛⲟⲩⲗⲩⲭⲛⲓ̀ⲁ ̀ⲛⲛⲟⲩⲃ: ⲉⲥⲉⲣⲗⲁⲙⲡⲓⲛ ̀ⲉϩⲟⲧⲉ ̀ⲫⲣⲏ.</td>
            <td class="arabic">السلام للعظيم أنبا مقار مصباح الرهبنة الذى صار منارة ذهبية تُضئ أكثر من الشمس.</td>
        </tr>
        <tr id="table_74_row_204">
            <td class="coptic" style="border-right: 1px solid black;">For your soul is enlightened, in the heavenly
                Jerusalem, and your body is shining, in your church.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲥⲉⲣⲟⲩⲱⲓⲛⲓ ⲅⲁⲣ ̀ⲛϫⲉ ⲧⲉⲕⲩⲭⲏ: ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ̀ⲛⲧⲉ
                ̀ⲧⲫⲉ: ̀ϥϯⲙⲟⲩ̀ⲉ ̀ⲛϫⲉ ⲡⲉⲕⲥⲱⲙⲁ: ϧⲉⲛ ⲑⲏ̀ⲉⲧⲉ ⲑⲱⲕ ̀ⲛⲉⲕⲕⲗⲏⲥⲓⲁ.</td>
            <td class="arabic">لأن نفسك مضيئة فى أورشليم السمائية. وجسدك لامع فى كنيستك.</td>
        </tr>
        <tr id="table_74_row_205">
            <td class="coptic" style="border-right: 1px solid black;">Yes we believe that you are with us, in soul and
                body and spirit, you became a comfort for us, and adornment of our souls.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉ ⲧⲉⲛⲛⲁϩϯ ϫⲉ ̀ⲕⲭⲏ ⲛⲉⲙⲁⲛ: ⲯⲩⲭⲏ ⲛⲉⲙ ⲥⲱⲙⲁ ⲛⲉⲙ
                ̀ⲡⲛⲉⲩⲙⲁ: ̀ⲕϣⲟⲡ ⲛⲁⲛ ̀ⲙⲡⲁⲣⲁⲕⲗⲏⲥⲓⲥ: ⲟⲩⲟϩ ̀ⲛⲥⲟⲗⲥⲉⲗ ̀ⲛⲛⲉⲛⲩⲭⲏ.</td>
            <td class="arabic">نعم نؤمن أنك كائن معنا نفساً وجسداً وروحاً. وصائر لنا معزياً ومزيناً لنفوسنا.</td>
        </tr>
        <tr id="table_74_row_206">
            <td class="coptic" style="border-right: 1px solid black;">The congregation of the monks, praise and bless
                God, for your coming unto us, O our holy father Abba Makari.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϥϩⲱⲥ ⲟⲩⲟϩ ̀ϥ̀ⲥⲙⲟⲩ ̀ⲉⲪϯ: ̀ⲛϫⲉ ⲡⲓ̀ϣⲗⲟⲗ ⲧⲏⲣϥ ̀ⲛⲧⲉ
                ⲛⲓⲙⲟⲛⲁⲭⲟⲥ: ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲉⲛ ⲡⲉⲕϫⲓⲛ̀ⲓ ϣⲁⲣⲟⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ.</td>
            <td class="arabic">كل طائفة الرهبان تسبح وتبارك الله لأجل مجبئك الينا ياأبانا القديس أنبا مقار.</td>
        </tr>
        <tr id="table_74_row_207">
            <td class="coptic" style="border-right: 1px solid black;">With this we entreat you, as sons of your prayers,
                ask the Lord on our behalf, that He may have mercy on our souls.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲑⲉⲛ ⲧⲉⲛϯϩⲟ ̀ⲉⲣⲟⲕ: ϩⲱⲥ ϣⲏⲣⲓ ̀ⲛⲧⲉ ⲛⲉⲕⲉⲩⲭⲏ: ⲙⲁϯϩⲟ
                ̀ⲉⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲛⲧⲉϥⲉⲣ̀ⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">فلهذا نسألك كابناء لك فى الصلاة إسأل الرب عنا لكى يصنع رحمة مع نفوسنا.</td>
        </tr>
        <tr id="table_74_row_208">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my master and
                father Abba Makari, and all his children the cross-bearers, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ ⲁⲃⲃⲁ
                Ⲙⲁⲕⲁⲣⲓ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ̀ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلب عنا ياسيدى الآب أنبا مقار وأولاده لابسى الصليب ليغفر...</td>
        </tr>
        <tr id="table_74_row_209">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. MACARIUS THE ALEXANDRIAN</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_210">
            <td class="coptic" style="border-right: 1px solid black;">For the dark caves, witness concerning you, when
                you dwelt in them, O Abba Makari the presbyter.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲉ̀ⲉⲣⲙⲉⲏⲣⲉ ϧⲁⲣⲟⲕ ϧⲉⲛ ⲟⲩⲙⲉⲏⲙⲏⲓ: ̀ⲛϫⲉ ⲛⲓ̀ⲥⲡⲏⲗⲉⲟⲛ
                ̀ⲛⲭⲁⲕⲓ: ̀ⲉⲧⲁⲕϣⲱⲡⲓ ̀ⲛ̀ϧⲣⲏⲓ ̀ⲛϧⲏⲧⲟⲩ: ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ.</td>
            <td class="arabic">يشهد عنك بالحقيقة المغائر المظلمة التى سكنت فيها ياأنبا مقار القس.</td>
        </tr>
        <tr id="table_74_row_211">
            <td class="coptic" style="border-right: 1px solid black;">That you were worthy, to stand before the Lord,
                for five days and five nights, your mind was lifted to heaven.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲱⲥⲧⲉ ̀ⲛⲧⲉⲕⲉⲣ̀ⲡⲉⲙ̀ⲡϣⲁ: ̀ⲛ̀ⲟϩⲓ ̀ⲉⲣⲁⲧⲕ ̀ⲙⲡⲉ̀ⲙⲑⲟ
                ̀ⲙⲠ̅ⲟ̅ⲥ: ̀ⲛ̀ⲉⲧⲓⲟⲟⲩ (̅ⲉ) ̀ⲛ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ̀ⲉⲧⲓⲟⲟⲩ ̀ⲛ̀ⲉϫⲱⲣϩ: ̀ⲉⲣⲉ ⲡⲉⲕⲛⲟⲩⲥ ⲭⲏ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">حتى أنك إستحققت أن تقف أمام الرب خمسة أيام وخمسة ليال. وعقلك فى السموات.</td>
        </tr>
        <tr id="table_74_row_212">
            <td class="coptic" style="border-right: 1px solid black;">You praised with the angels, and all the heavenly
                hosts, and the whole choir of the saints, you glorified the Trinity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲕϩⲱⲥ ⲛⲉⲙ ⲛⲓ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ̀ⲛ̀ⲉⲡⲟⲩⲣⲁⲛⲓⲟⲛ:
                ⲛⲉⲙ ̀ⲡⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ̀ⲛⲧⲉ ⲛⲏ̅ⲉ̅ⲑ̅ⲩ: ⲉⲕϯ̀ⲱⲟⲩ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ.</td>
            <td class="arabic">تسبح مع الملائكة والطغمات السمائية وكل مصاف القديسين ممجداً الثالوث.</td>
        </tr>
        <tr id="table_74_row_213">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Abba Makari the
                presbyter, and all his children the cross-bearers, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ
                ⲡⲓ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ̀ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياأنبا مقار القس وأولاده لابسى الصليب ليغفر....</td>
        </tr>
        <tr id="table_74_row_214">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. MACARIUS, BISHOP OF EDKOW</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_215">
            <td class="coptic" style="border-right: 1px solid black;">Your people whom you guided, in purity and
                righteousness, what should they call you, O Abba Makari the Bishop.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲛⲁⲙⲟⲩϯ ̀ⲉⲣⲟⲕ ϫⲉ ⲛⲓⲙ: ̀ⲛϫⲉ ⲡⲉⲕⲗⲁⲟⲥ ̀ⲉⲧⲁⲕ̀ⲁⲙⲟⲛⲓ
                ̀ⲙⲙⲟϥ: ϧⲉⲛ ⲟⲩⲧⲟⲩⲃⲟ ⲛⲉⲙ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ.</td>
            <td class="arabic">ماذا يدعوك شعبك الذى رعيته بطهارة وبر ياأنبا مقار الأسقف.</td>
        </tr>
        <tr id="table_74_row_216">
            <td class="coptic" style="border-right: 1px solid black;">If I call you an angel, or a shepherd or a martyr,
                these all you have truly accomplished, in deed and word of truth.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓϣⲁⲛϫⲟⲥ ̀ⲉⲣⲟⲕ ϫⲉ ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲓⲉ ⲙⲁⲛ̀ⲉⲥⲱⲟⲩ ⲓⲉ
                ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲁⲓ ⲁⲕϫⲟⲕⲟⲩ ̀ⲉⲃⲟⲗ ⲕⲁⲗⲱⲥ: ϧⲉⲛ ̀ⲡϩⲱⲃ ⲛⲉⲙ ̀ⲡⲥⲁϫⲓ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">ان قلت عنك انك ملاك أو راع أو شهيد فهذه اكملتها جيداً بالفعل وقول الحق.</td>
        </tr>
        <tr id="table_74_row_217">
            <td class="coptic" style="border-right: 1px solid black;">I will say of you an angel, for you have left your
                body, I will say of you a shepherd, for you gave your life for your sheep.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓϣⲁⲛϫⲟⲥ ̀ⲉⲣⲟⲕ ϫⲉ ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲕⲉ ⲅⲁⲣ ⲁⲕⲭⲱ ̀ⲙⲡⲉⲕⲥⲱⲙⲁ
                ̀ⲉ̀ϧⲣⲏⲓ: ⲁⲓϣⲁⲛϫⲟⲥ ̀ⲉⲣⲟⲕ ⲙⲁⲛ̀ⲉⲥⲱⲟⲩ: ⲁⲕϯ ̀ⲛⲧⲉⲕⲩⲭⲏ ̀ⲉϫⲉⲛ ⲛⲉⲕ̀ⲉⲥⲱⲟⲩ.</td>
            <td class="arabic">ان قلت عنك انك ملاك فقد ضحيت بجسدك وان قلت عنك انك راع فقد اسلمت نفسك عن رعيتك.</td>
        </tr>
        <tr id="table_74_row_218">
            <td class="coptic" style="border-right: 1px solid black;">I will say of you a martyr, for you delivered your
                head for Christ, He who became a martyr for us, before Pontius Pilate.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲓϣⲁⲛϫⲟⲥ ̀ⲉⲣⲟⲕ ϫⲉ ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲕϯ ̀ⲛⲧⲉⲕ̀ⲁⲫⲉ ϧⲁ
                Ⲡ̅ⲭ̅ⲥ: ⲫⲁⲓ ̀ⲉⲧⲁϥⲉⲣⲙⲁⲣⲧⲩⲣⲟⲥ ⲉⲑⲃⲏⲧⲉⲛ: ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ.</td>
            <td class="arabic">وان قلت عنك انك شهيد فقد اسلمت رأسك لاجل المسيح الذى صار فداءاً لاجلنا أمام بيلاطس
                البنطى.</td>
        </tr>
        <tr id="table_74_row_219">
            <td class="coptic" style="border-right: 1px solid black;">You completed the priesthood, you have kept the
                faith, you wore the unfading crown, of martyrdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϯⲙⲉⲧⲟⲩⲏⲃ ⲁⲕϫⲟⲕⲥ ̀ⲉⲃⲟⲗ: ⲡⲓⲛⲁϩϯ ⲁⲕ̀ⲁⲣⲉϩ ̀ⲉⲣⲟⲛ:
                ⲁⲕⲉⲣⲫⲟⲣⲓⲛ ̀ⲙⲡⲓ̀ⲭⲗⲟⲙ ̀ⲛ̀ⲁⲧⲗⲱⲙ: ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">اكملت الكهنوت وحفظت الايمان ونلت اكليل الشهادة غير المضمحل.</td>
        </tr>
        <tr id="table_74_row_220">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my master the
                ascetic father, Abba Makari the Bishop, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ
                ̀ⲛⲁⲥⲕⲏⲧⲥ: ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياسيدى الآب الناسك أنبا مقار الاسقف ليغفر...</td>
        </tr>
        <tr id="table_74_row_221">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. SHENOUDA THE ARCHIMANDRITE</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_222">
            <td class="coptic" style="border-right: 1px solid black;">You are blessed, O our holy father Abba Shenouda,
                for you became an apostle, and also a prophet.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲟⲕ ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ: ϫⲉ
                ⲁⲕϣⲱⲡⲓ ̀ⲛⲟⲩ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">أنت المطوب يا أبانا القديس أنبا شنودة. لأنك صرت رسولاً ونبياً معاً.</td>
        </tr>
        <tr id="table_74_row_223">
            <td class="coptic" style="border-right: 1px solid black;">You have set for us a law, of perfect virtues, and
                kept the written commandments, in the Gospel.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲉ ⲅⲁⲣ ⲁⲕⲥⲉⲙⲛⲉ ⲛⲟⲙⲟⲥ ⲛⲁⲛ: ̀ⲉⲛⲓ̀ⲉⲣⲉⲧⲏ ⲉⲧϫⲏⲕ ̀ⲉⲃⲟⲗ:
                ⲁⲕ̀ⲁⲣⲉϩ ̀ⲉⲛⲓⲉⲛⲧⲟⲗⲏ ⲉⲧ̀ⲥϧⲏⲟⲩⲧ: ϧⲉⲛ ⲡⲓ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲟⲛ.</td>
            <td class="arabic">لأنك وضعت لنا ناموساً للفضائل الكاملة وحفظت الوصايا المكتوبة فى الإنجيل.</td>
        </tr>
        <tr id="table_74_row_224">
            <td class="coptic" style="border-right: 1px solid black;">For the Lord will guard, those who follow them,
                His angels accompany them, in the heavenly Jerusalem.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲏ̀ⲉⲑⲛⲁⲙⲟϣⲓ ⲅⲁⲣ ̀ⲛϧⲏⲧⲟⲩ: ̀ⲁⲪϯ ̀ϥⲛⲁⲣⲱⲓⲥ ̀ⲉⲣⲱⲟⲩ:
                ⲛⲁϥ̀ⲁⲅⲅⲉⲗⲟⲥ ⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ: ϧⲉⲛ Ⲓⲁⲣⲟⲩⲥⲁⲗⲏⲙ ̀ⲛⲧⲉ ̀ⲧⲫⲉ.</td>
            <td class="arabic">والسالكون فيها يحرسهم الله. وملائكته ترافقهم إلى أورشليم السمائية.</td>
        </tr>
        <tr id="table_74_row_225">
            <td class="coptic" style="border-right: 1px solid black;">The incense of his virtues, delighted our souls,
                like the blossomed aroma, in the Paradise.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲓ̀ⲥⲑⲟⲓⲛⲟϥⲓ ̀ⲛⲧⲉ ⲛⲉϥ̀ⲉⲣⲉⲧⲏ: ϯ̀ⲙ̀ⲡⲟⲩⲛⲟϥ ̀ⲛⲛⲉⲛⲯⲩⲭⲏ:
                ̀ⲙ̀ⲫⲣⲏϯ ̀ⲙⲡⲓ̀ⲁⲣⲱⲙⲁⲧⲁ: ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
            <td class="arabic">بخور فضائله أعطى الفرح لنفوسنا مثل العنبر الفائح فى الفردوس.</td>
        </tr>
        <tr id="table_74_row_226">
            <td class="coptic" style="border-right: 1px solid black;">Truly you were greatly exalted, in the midst of
                the council, of our Orthodox fathers, in the city of Ephesus.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲗⲏⲑⲱⲥ ⲁⲕϭⲓⲥⲓ ̀ⲉⲙⲁϣⲱ: ϧⲉⲛ ̀ⲑⲙⲏϯ ̀ⲛϯⲥⲩⲛⲟⲇⲟⲥ: ̀ⲛⲧⲉ
                ⲛⲉⲛⲓⲟϯ ̀ⲛⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ϧⲉⲛ ϯⲡⲟⲗⲓⲥ Ⲉⲫⲉⲥⲟⲥ.</td>
            <td class="arabic">بالحقيقة ارتفعت جداً في وسط مجمع ابائنا الأرثوذكسيين فى مدينة أفسس.</td>
        </tr>
        <tr id="table_74_row_227">
            <td class="coptic" style="border-right: 1px solid black;">You embarrassed Nestorius, the impious patriarch,
                and you have confessed, the good confession.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϯϭⲓⲡⲓ ̀ⲛⲚⲓⲥⲧⲟⲩⲣⲓⲟⲥ: ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ̀ⲛ̀ⲁⲥⲉⲃⲏⲥ: ⲟⲩⲟϩ
                ⲁⲕⲉⲣ̀ⲟⲙⲟⲗⲟⲅⲓⲛ: ̀ⲛϯ̀ⲟⲙⲟⲗⲟⲅⲓ̀ⲁ ⲉⲑⲛⲁⲛⲉϥ.</td>
            <td class="arabic">وأخزيت نسطور البطريرك المنافق واعترفت الاعتراف الحسن.</td>
        </tr>
        <tr id="table_74_row_228">
            <td class="coptic" style="border-right: 1px solid black;">"One in essence is the Trinity, Co-essential and
                Life-giving, the Father the Son and the Holy Spirit, three names for one God."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ⲟⲩⲙⲉⲧⲟⲩⲁⲓ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ: ̀ⲛⲣⲉϥⲧⲁⲛϧⲟ ̀ⲛⲟⲩⲙⲟⲟⲩⲥⲓⲟⲥ:
                ̀ⲫⲓⲱⲧ ⲛⲉⲙ ̀ⲡϢⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ: ϣⲟⲙⲧ ̀ⲛⲣⲁⲛ ⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ.</td>
            <td class="arabic">بوحدانية (جوهر) الثالوث المحيي المساوي الآب والابن والروح القدس ثلاثة أسماء للإله الواحد.
            </td>
        </tr>
        <tr id="table_74_row_229">
            <td class="coptic" style="border-right: 1px solid black;">And you heard the loud voice, from heaven saying,
                "You are sanctified, O Shenouda the Archimandrite."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁⲕⲥⲱⲧⲉⲙ ⲉⲧ̀ⲥⲙⲏ ⲉϥⲱϣ: ̀ⲉⲃⲟⲗ ϧⲉⲛ ̀ⲧⲫⲉ ⲉϥϫⲱ
                ̀ⲙⲙⲟⲕ: ϫⲉ ⲁⲩ̀ⲉⲣ̀ⲁⲅⲓⲁⲍⲓⲛ ̀ⲙⲙⲟϥ: Ⲥⲉⲛⲟⲩⲑⲓⲟⲥ ̀ⲛⲁⲣⲭⲏⲙⲁⲛ̀ⲇⲣⲓⲧⲏⲥ.</td>
            <td class="arabic">وسمعت الصوت الصارخ من السماء قائلاً مقدس أنت يا شنودة رئيس المتوحدين.</td>
        </tr>
        <tr id="table_74_row_230">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you O righteous one, Abba Shenouda the
                Archimandrite, for you spoke with Christ, like Moses the law-giver.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲟⲩⲛⲓⲁⲧⲕ ̀ⲱ ⲡⲓⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ
                ⲡⲓ̀ⲁⲣⲭⲏⲙⲁⲛ̀ⲇⲣⲓⲧⲏⲥ: ϫⲉ ̀ⲛⲑⲟⲕ ⲁⲕⲥⲁϫⲓ ⲛⲉⲙ Ⲡ̅ⲭ̅ⲥ: ̀ⲙ̀ⲫⲣⲏϯ ̀ⲙⲘⲱⲩⲥⲏⲥ ⲡⲓⲛⲟⲙⲟⲥⲓⲧⲏⲥ.</td>
            <td class="arabic">طوباك أيها البار أنبا شنودة رئيس المتوحدين لأنك تكلمت مع المسيح مثل موسى واضع الناموس.
            </td>
        </tr>
        <tr id="table_74_row_231">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my master the
                ascetic father, Abba Shenouda the Archimandrite, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ
                ̀ⲛⲁⲥⲕⲩⲧⲏⲥ: ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓ̀ⲁⲣⲭⲏⲙⲁⲛ̀ⲇⲣⲓⲧⲏⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا سيدى الآب الناسك أنبا شنودة رئيس المتوحدين. ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_232">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. JOHN THE SHORT</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_233">
            <td class="coptic" style="border-right: 1px solid black;">For you have become a star, of light upon the
                earth, O blessed and holy one, my master and father Abba John.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϣⲱⲡⲓ ⲅⲁⲣ ̀ⲛⲟⲩⲫⲱⲥⲧⲏⲣ: ̀ⲛⲣⲉϥ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ϩⲓϫⲉⲛ
                ⲡⲓⲕⲁϩⲓ: ̀ⲱ ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ ̅ⲉ̅ⲑ̅ⲩ: ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ.</td>
            <td class="arabic">صرت كوكبا منيرا على الأرض أيها الطوباوى الطاهر سيدى الآب أنبا يؤانس.</td>
        </tr>
        <tr id="table_74_row_234">
            <td class="coptic" style="border-right: 1px solid black;">That through your humility, and angelic life, you
                made Shiheet like the stars, with your finger.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲱⲥⲧⲉ ϩⲓⲧⲉⲛ ⲡⲉⲕⲑⲉⲃⲓ̀ⲟ: ⲛⲉⲙ ⲡⲉⲕⲃⲓⲟⲥ ̀ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ:
                ⲁⲕⲉϣ Ϣⲓϩⲏⲧ ⲧⲏⲣϥ ̀ⲛⲥⲁ ⲡⲉⲕⲧⲏⲃ: ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲧⲉⲗⲧⲓⲗⲓ ̀ⲙⲙⲱⲟⲩ.</td>
            <td class="arabic">حتى أنك من قبل تواضعك وسيرتك الملائكية اعتبرت كل شيهات كنقطة ماء فى أصبعك.</td>
        </tr>
        <tr id="table_74_row_235">
            <td class="coptic" style="border-right: 1px solid black;">And you subdued your body, with many ascetic
                pains, so that you may be blameless, in the day of Judgment.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲁⲕ̀ⲱϥⲓ ̀ⲙⲡⲉⲕⲥⲱⲙⲁ: ϧⲉⲛ ϩⲁⲛⲁⲥⲕⲏⲥⲓⲥ ⲉⲩϧⲟⲥⲓ:
                ϣⲁ̀ⲛⲧⲉⲕϣⲱⲡⲓ ̀ⲛⲁⲧⲕⲩⲛⲇⲓⲛⲟⲥ: ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲛⲧⲉ ϯ̀ⲕⲣⲓⲥⲓⲥ.</td>
            <td class="arabic">وأقمت جسدك بنسك متعب لتكون بغير شدة فى يوم الدينونة.</td>
        </tr>
        <tr id="table_74_row_236">
            <td class="coptic" style="border-right: 1px solid black;">You became a harbor of salvation, you have risen
                the dead, you have exorcised the demons, and you have healed the sick.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϣⲱⲡⲓ ̀ⲛⲗⲩⲙⲏⲛ ̀ⲛⲟⲩⲟⲩϫⲁⲓ: ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ ⲁⲕⲧⲟⲩⲛⲟⲥⲟⲩ:
                ⲛⲓⲇⲉⲙⲱⲛ ⲁⲕϩⲓⲧⲟⲩ ̀ⲉⲃⲟⲗ: ⲛⲏⲉⲧϣⲱⲛⲓ ⲁⲕⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic">صرت ميناء خلاص. أقمت الأموات. وأخرجت الشياطين وشفيت المرضى.</td>
        </tr>
        <tr id="table_74_row_237">
            <td class="coptic" style="border-right: 1px solid black;">And also you were worthy, O my master and father
                Abba John, to sit with the Apostles, and judge your generation.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲟⲛ ⲁⲕⲉⲣ̀ⲡⲉⲙ̀ⲡϣⲁ: ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ:
                ̀ⲛⲧⲉⲕϩⲉⲙⲥⲓ ⲛⲉⲙ ⲛⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ⲛⲧⲉⲕϯϩⲁⲡ ̀ⲛⲧⲉⲕⲅⲉⲛⲉⲁ.</td>
            <td class="arabic">أيضا استحققت ياسيدى الآب أنبا يؤانس أن تجلس مع الرسل وتدين جيلك.</td>
        </tr>
        <tr id="table_74_row_238">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my master and
                father the hegumen, Abba John Colobos, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉⲅⲱⲛ: ̀ⲱ ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ ⲁⲃⲃⲁ
                ⲒⲱⲁⲛⲛⲎⲥ: ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ̀ⲛⲔⲟⲗⲟⲃⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياسيدى الآب القمص أنبا يؤانس القصير ليغفر...</td>
        </tr>
        <tr id="table_74_row_239">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. PISHOY & ST. PAUL OF TAMMOH</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_240">
            <td class="coptic" style="border-right: 1px solid black;">O Joseph the high priest, of the great city of
                Alexandria, the pure virgin, adorned with true humility.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲓⲱⲥⲏⲫ ⲡⲓ̀ⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ: ̀ⲛⲧⲉ ϯⲛⲓϣϯ ̀ⲙⲃⲁⲕⲓ Ⲣⲁⲕⲟϯ:
                ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲩⲧⲟⲩⲃⲏⲟⲩⲧ: ⲉⲧϫⲟⲗϩ ̀ⲙⲡⲓⲑⲉⲃⲓⲟ ̀ⲙⲙⲏⲓ.</td>
            <td class="arabic">يايوساب رئيس كهنة المدينة العظمى الاسكندرية البتول النقى الملتحف بالتواضع الحقيقى.</td>
        </tr>
        <tr id="table_74_row_241">
            <td class="coptic" style="border-right: 1px solid black;">For in the days, of your high-priesthood, this
                great grace came to us, we the undeserving.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛϩⲣⲏⲓ ϧⲉⲛ ⲛⲓ̀ⲉϩⲟⲟⲩ: ̀ⲛⲧⲉ ⲧⲉⲕⲙⲉⲧⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ:
                ̀ⲁⲡⲁⲓⲛⲓϣϯ ̀ⲛ̀ϩⲙⲟⲧ ⲧⲁϩⲟⲛ: ̀ⲁⲛⲟⲛ ϧⲁ ⲛⲓ̀ⲁⲧⲉⲙ̀ⲡϣⲁ.</td>
            <td class="arabic">فى أيام رئاستك أدركتنا هذه النعمة العظيمة نحن غير المستحقين.</td>
        </tr>
        <tr id="table_74_row_242">
            <td class="coptic" style="border-right: 1px solid black;">That is the coming of our fathers, the
                cross-bearers, Abba Pishoy and Abba Paul, the shining stars.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲧⲉ ⲡⲓϫⲓⲛ̀ⲓ ϣⲁⲣⲟⲛ: ̀ⲛⲧⲉ ⲛⲉⲛⲓⲟϯ ̀ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ:
                ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲓⲫⲱⲥⲧⲏⲣ ̀ⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">أى مجىء أبوينا لابسى الصليب الينا أنبا بيشوى وأنبا بولا الكوكبين النيرين.</td>
        </tr>
        <tr id="table_74_row_243">
            <td class="coptic" style="border-right: 1px solid black;">These who became unto us, two harbors of
                salvation, they have enlightened our souls, through their holy bodies.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁⲓ ̀ⲉⲧⲁⲩϣⲱⲡⲓ ⲛⲁⲛ: ̀ⲥⲛⲁⲩ (̅ⲃ) ̀ⲛⲗⲩⲙⲏⲛ ̀ⲛⲧⲉ
                ⲡⲓⲟⲩϫⲁⲓ: ⲁⲩ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲛⲛⲉⲛ̀ⲯⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲛⲟⲩⲗⲩⲙⲁⲛⲟⲛ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">هذين اللذين صارا لنا ميناء للخلاص وأضاءا أنفسنا بواسطة جسديهما الطاهرين.</td>
        </tr>
        <tr id="table_74_row_244">
            <td class="coptic" style="border-right: 1px solid black;">Hail to our father Abba Pishoy, the just and
                perfect man, hail to our father Abba Paul, the beloved of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ: ⲡⲓ̀ⲏⲙⲏⲓ ⲡⲓⲣⲱⲙⲓ ̀ⲛⲧⲉⲗⲓⲟⲥ:
                ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا بيشوى الرجل البار الكامل السلام لأبينا أنبا بولا حبيب المسيح.</td>
        </tr>
        <tr id="table_74_row_245">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O masters and
                fathers who loved their children, Abba Pishoy and Abba Paul, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉⲅⲱⲛ: ̀ⲱ ⲛⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲟϯ
                ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا ياسيدى الأبوين محبى أولادهما أنبا بيشوى وأنبا بولا ليغفر…</td>
        </tr>
        <tr id="table_74_row_246">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. PACHOMIUS & THEODORE HIS DISCIPLE
            </td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_247">
            <td class="coptic" style="border-right: 1px solid black;">You are blessed, O our holy father Abba Pachomius,
                you inherited the blessing, from the Lord God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲑⲟⲕ ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ:
                ⲁⲕⲉⲣ̀ⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ̀ⲙⲡⲓ̀ⲥⲙⲟⲩ: ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡ̅ⲟ̅ⲥ Ⲫϯ.</td>
            <td class="arabic">أنت طوباوى ياأبانا القديس باخوم. ورثت البركة من قبل الرب.</td>
        </tr>
        <tr id="table_74_row_248">
            <td class="coptic" style="border-right: 1px solid black;">Our holy father Pachomius, was worthy many times,
                to see the Lord, and His holy angels.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ: ⲁⲕⲉⲣ̀ⲙ̀ⲡϣⲁ ̀ⲛⲟⲩⲙⲏϣ
                ̀ⲛⲥⲟⲡ: ⲁⲕⲉⲣⲑⲉⲟⲣⲓⲛ ̀ⲙⲠ̅ⲟ̅ⲥ: ⲛⲉⲙ ⲛⲉϥ̀ⲁⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">ياأبانا القديس أنبا باخوم استحققت مرارا كثيرة أن تنظر الرب مع ملائكته القديسين.</td>
        </tr>
        <tr id="table_74_row_249">
            <td class="coptic" style="border-right: 1px solid black;">Our holy father Pachomius, you have explained the
                commandments of God, and you perfected all virtues, and pleased Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ: ⲁⲕ̀ⲉⲣⲟⲩ̀ⲁϩⲉⲙ ⲛⲓⲉⲛⲧⲟⲗⲏ
                ̀ⲛⲧⲉ Ⲫϯ: ⲁⲕϫⲱⲕ ̀ⲛⲛⲓ̀ⲁⲣⲉⲧⲏ ⲧⲏⲣⲟⲩ: ⲟⲩⲟϩ ⲁⲕⲣⲁⲛⲁ ̀ⲙⲠ̅ⲟ̅ⲥ.</td>
            <td class="arabic">ياأبانا القديس أنبا باخوم. فسرت وصايا الله وأكملت كل الفضائل وأرضيت المسيح.</td>
        </tr>
        <tr id="table_74_row_250">
            <td class="coptic" style="border-right: 1px solid black;">The adornment of the ascetics, is our holy father
                Theodore, for you became the replacement, of your father Pachomius.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲯⲟⲗⲥⲉⲗ ̀ⲛⲛⲓ̀ⲁⲥⲕⲏⲧⲏⲥ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲑⲉⲟⲇⲱⲣⲟⲥ: ϫⲉ
                ⲁⲕϣⲱⲡⲓ ̀ⲛ̀ⲧϣⲉⲃⲓⲱ: ̀ⲙⲡⲉⲕⲓⲱⲧ Ⲡⲁϧⲱⲙⲓⲟⲥ.</td>
            <td class="arabic">زينة النساك ياأبانا القديس ثيؤدوروس لأنك صرت عوضا عن أبيك باخوميوس.</td>
        </tr>
        <tr id="table_74_row_251">
            <td class="coptic" style="border-right: 1px solid black;">You directed the needs, of the brothers to piety,
                and you preached to them, with your precious word.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲭⲟϩⲕⲁϩ ̀ⲛⲛⲓ̀ⲥⲛⲏⲟⲩ: ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ:
                ⲁⲕⲉⲣⲕⲁⲑⲓⲭⲓⲛ ̀ⲙⲙⲱⲟⲩ: ϧⲉⲛ ⲡⲉⲕⲥⲁϫⲓ ⲅⲁⲣ ⲉⲧϩⲟⲗϫ.</td>
            <td class="arabic">ووجهت طلب الأخوة الى التقوى ووعظتهم بكلامك الحلو.</td>
        </tr>
        <tr id="table_74_row_252">
            <td class="coptic" style="border-right: 1px solid black;">You comforted the weak, and those of
                faint-heartedness, with perfect love, through our Lord Jesus Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϯⲛⲟⲙϯ ̀ⲛⲛⲏⲉⲧϩⲁϣ: ⲛⲉⲙ ⲛⲏ̀ⲉⲧⲟⲓ ̀ⲛⲕⲟⲩϫⲓ ̀ⲛϩⲏⲧ: ϧⲉⲛ
                ϯ̀ⲁⲅⲁⲡⲏ ⲉⲧϫⲏⲕ ̀ⲉⲃⲟⲗ: ϩⲓⲧⲉⲛ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">وقويت الضعفاء وصغيرى القلوب بالمحبة الكاملة من قبل يسوع المسيح.</td>
        </tr>
        <tr id="table_74_row_253">
            <td class="coptic" style="border-right: 1px solid black;">Hail to my masters and holy fathers, Abba
                Pachomius of the Koinonia, and Theodore his disciple, the beloved of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲟϯ ̅ⲉ̅ⲑ̅ⲩ: ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ ϯⲕⲟⲓⲛⲱⲛⲓⲁ:
                ⲛⲉⲙ ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ: ⲛⲓⲙⲉⲛⲣⲁϯ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبائنا القديسين أنبا باخوم صاحب الشركة وثيؤدوروس تلميذه محبى المسيح.</td>
        </tr>
        <tr id="table_74_row_254">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on out behalf, Abba Pachomius of
                the Koinonia, and Theodore his disciple, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉⲅⲱⲛ: ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ
                ϯⲕⲟⲓⲛⲱⲛⲓⲁ: ⲛⲉⲙ ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا ياأنبا باخوم صاحب الشركة وثيؤدوروس تلميذه ليغفر...</td>
        </tr>
        <tr id="table_74_row_255">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. MAXIMUS & ST. DOMETIUS</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_256">
            <td class="coptic" style="border-right: 1px solid black;">The stars of the truth, and the great princes, of
                our holy congregation, Maximus and Dometius.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲓⲫⲱⲥⲧⲏⲣ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲟⲩⲟϩ ⲛⲓⲛⲓϣϯ ̀ⲛ̀ⲁⲣⲭⲏⲅⲟⲥ:
                ̀ⲛⲧⲉ ⲧⲉⲛⲥⲩⲛⲟⲩⲇⲓ̀ⲁ ̅ⲉ̅ⲑ̅ⲩ: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ.</td>
            <td class="arabic">كوكبا الحق والرئيسان العظيمان اللذان لمجمعنا المقدس مكسيموس ودوماديوس.</td>
        </tr>
        <tr id="table_74_row_257">
            <td class="coptic" style="border-right: 1px solid black;">These whom the Life-giving Trinity, has gathered
                us in their name, that we me follow in their footsteps, and wear their holy images.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁⲓ ̀ⲉⲧⲁⲥⲑⲟⲩⲱⲧⲉⲛ ϧⲉⲛ ⲛⲟⲩⲣⲁⲛ: ̀ⲛϫⲉ Ϯ̀ⲧⲣⲓⲁⲥ
                ̀ⲛⲣⲉϥⲧⲁⲛϧⲟ: ⲉⲑⲣⲉⲛⲙⲟϣⲓ ̀ⲛⲥⲁ ⲛⲟⲩϣⲉⲛⲧⲁⲧⲥⲓ: ̀ⲛⲧⲉⲛⲉⲣⲫⲟⲣⲓⲛ ̀ⲙⲡⲟⲩ̀ⲥⲭⲏⲙⲁ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">هذان اللذان جمعنا باسميهما الثالوث المحيى لكى نتبع آثارهما ونلبس شكلهما المقدس.</td>
        </tr>
        <tr id="table_74_row_258">
            <td class="coptic" style="border-right: 1px solid black;">They gave us the written promises, that were in
                the Gospel, this is the love of brothers, the perfection of all virtues.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲩϯ ̀ⲉⲧⲟⲧⲉⲛ ̀ⲛⲛⲓⲱϣ: ⲉⲧ̀ⲥϧⲏⲟⲩⲧ ϧⲉⲛ ⲡⲓ̀ⲉⲩ̀ⲁⲅⲅⲉⲗⲓⲟⲛ:
                ̀ⲉⲧⲉ ⲑⲁⲓ ⲧⲉ ϯⲙⲉⲧⲙⲁⲓⲥⲟⲛ: ̀ⲡϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛⲛⲓ̀ⲁⲣⲉⲧⲏ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">وسلما لنا المواعيد المكتوبة فى الانجيل التى هى المحبة الأخوية كمال جميع الفضائل.</td>
        </tr>
        <tr id="table_74_row_259">
            <td class="coptic" style="border-right: 1px solid black;">We celebrate in their church, and we complete
                their remembrance, we glorify the Trinity, by day and by night.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲛⲉⲣϣⲁⲓ ϧⲉⲛ ⲧⲟⲩ̀ⲉⲕⲕⲗⲏⲥⲓ̀ⲁ: ⲉⲛϫⲱⲕ ̀ⲙⲡⲟⲩⲉⲣ̀ⲫⲙⲉⲩ̀ⲓ
                ̀ⲉⲃⲟⲗ: ⲉⲛϯ̀ⲱⲟⲩ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ: ̀ⲙⲡⲓ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓ̀ⲉϫⲱⲣϩ.</td>
            <td class="arabic">نعيد فى كنيستهما ونكمل تذكارهما. ونمجد الثالوث نهارا وليلا.</td>
        </tr>
        <tr id="table_74_row_260">
            <td class="coptic" style="border-right: 1px solid black;">Hail to you O righteous ones, hail to the spirit
                mantled, hail to our holy Roman fathers, Maximus and Dometius.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲛⲱⲧⲉⲛ ̀ⲱ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲭⲉⲣⲉ ⲛⲓ̅ⲡ̅ⲛ̅ⲁⲧⲟⲫⲟⲣⲟⲥ: ⲭⲉⲣⲉ
                ⲛⲉⲛⲓⲟϯ ̅ⲉ̅ⲑ̅ⲩ ̀ⲛⲢⲱⲙⲉⲟⲥ: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ.</td>
            <td class="arabic">السلام لكما أيها الصديقان السلام للابسى الروح السلام لأبوينا القديسين الروميين مكسيموس
                ودوماديوس.</td>
        </tr>
        <tr id="table_74_row_261">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, our holy Roman
                fathers, Maximus and Dometius, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲛⲉⲛⲓⲟϯ ̅ⲉ̅ⲑ̅ⲩ
                ̀ⲛⲢⲱⲙⲉⲟⲥ: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلبا عنا ياأبوينا القديسين الروميين مكسيموس ودوماديوس ليغفر...</td>
        </tr>
        <tr id="table_74_row_262">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. SAMUEL THE CONFESSOR</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_263">
            <td class="coptic" style="border-right: 1px solid black;">Hail to Abba Samuel, the great among the saints,
                who has gained great virtues, in the mountain of Shiheet.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲡⲓⲛⲓϣϯ ϧⲉⲛ ⲛⲓ̀ⲁⲅⲓⲟⲥ:
                ⲫⲏ̀ⲉⲧⲁϥ̀ⲓⲣⲓ ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲛ̀ⲁⲣ̀ⲉⲧⲏ: ϧⲉⲛ ̀ⲡⲧⲱⲟⲩ ̀ⲛⲧⲉ Ϣⲓϩⲏⲧ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل العظيم فى القديسين الذى صنع فضائل عظيمة فى جبل شيهات.</td>
        </tr>
        <tr id="table_74_row_264">
            <td class="coptic" style="border-right: 1px solid black;">Hail to our father Abba Samuel, who tore the Tome
                of Leo, he confirmed his brothers, in the Orthodox faith.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲫⲏ̀ⲉⲧⲁϥⲫⲱϧ ̀ⲙ̀ⲡⲧⲟⲙⲟⲥ
                ̀ⲛⲖⲉⲱⲛ: ⲟⲩⲟϩ ⲁϥⲧⲁϫⲣⲟ ̀ⲛⲛⲉϥ̀ⲥⲛⲏⲟⲩ: ϧⲉⲛ ⲡⲓⲛⲁϩϯ ̀ⲛⲟⲣⲑⲟⲇⲟⲝⲟⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى مزق طومس )محضر( لاوون وثبت اخوته فى الايمان الأرثوذك.</td>
        </tr>
        <tr id="table_74_row_265">
            <td class="coptic" style="border-right: 1px solid black;">Wherefore the impious one, Macius Atrianus sought
                him, he sent him to the mountain of Qualamon, with four chosen monks.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥϭⲟϫⲓ ̀ⲛⲥⲱϥ: ̀ⲛϫⲉ Ⲙⲁⲕⲓⲥ Ⲁⲧⲣⲓ̀ⲁⲛⲟⲥ
                ⲡⲓ̀ⲁⲥⲉⲃⲏⲥ: ⲟⲩⲟϩ ⲁϥ̀ⲓ ϩⲁ ̀ⲡⲧⲱⲟⲩ ̀ⲛⲔⲁⲗⲁⲙⲟⲛ: ⲛⲉⲙ ̀ϥⲧⲟⲟⲩ (̅ⲇ) ̀ⲛⲥⲱⲧⲡ ̀ⲙⲙⲟⲛⲁⲭⲟⲥ.</td>
            <td class="arabic">لأجل هذا طارده ماكيس اتريانوس المنافق. فأتى الى جبل القلمونى مع أربعة رهبان مختارين.</td>
        </tr>
        <tr id="table_74_row_266">
            <td class="coptic" style="border-right: 1px solid black;">Abba Samuel the confessor, was very patient,
                through the pains of the sufferings, and the captivity of Barbarians.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓ̀ⲟⲙⲟⲗⲟⲅⲓⲧⲏⲥ: ̀ⲛⲑⲟϥ ⲁϥⲉⲣϩⲩⲡⲟⲙⲟⲛⲓⲛ:
                ̀ⲉϫⲉⲛ ⲛⲓϧⲓⲥⲓ ̀ⲛⲧⲉ ⲡⲓⲇⲓⲱⲅⲙⲟⲥ: ⲛⲉⲙ ϯⲉⲭⲙⲁⲗⲱⲥⲓⲁ ̀ⲛⲧⲉ ⲛⲓⲂⲁⲣⲃⲁⲣⲟⲥ.</td>
            <td class="arabic">أنبا صموئيل المعترف قد صبر على أتعاب الاضطهاد وسبى البربر.</td>
        </tr>
        <tr id="table_74_row_267">
            <td class="coptic" style="border-right: 1px solid black;">Hail to our father Abba Samuel, who performed
                wonders and signs, he healed the sick, in the monastery and the city of the Barbarians.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲫⲏ̀ⲉⲧⲁϥ̀ⲓⲣⲓ ̀ⲛϩⲁⲛⲙⲏⲓⲛⲓ
                ⲛⲉⲙ ϩⲁⲛ̀ϣⲫⲏⲣⲓ: ⲟⲩⲟϩ ⲁϥⲧⲁⲗϭⲟ ̀ⲛⲛⲏ̀ⲉⲧϣⲱⲛⲓ: ϧⲉⲛ ⲡⲓⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ̀ⲏⲃⲁⲕⲓ ̀ⲛⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى صنع آيات وعجائب وشفى المرضى فى الدير ومدينة البربر.</td>
        </tr>
        <tr id="table_74_row_268">
            <td class="coptic" style="border-right: 1px solid black;">Hail to our father Abba Samuel, who became a
                merciful father, and a good teacher, for his children the monks.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: Ⲫⲏ̀ⲉⲧⲁϥϣⲱⲡⲓ ̀ⲛⲓⲱⲧ
                ̀ⲛⲛⲁⲏⲧ: ⲛⲉⲙ ⲟⲩⲣⲉϥϯ̀ⲥⲃⲱ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ: ̀ⲛⲛⲉϥϣⲏⲣⲓ ̀ⲙⲙⲟⲛⲁⲭⲟⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى صار أبا رحوما ومعلما صالحا لأبنائه الرهبان.</td>
        </tr>
        <tr id="table_74_row_269">
            <td class="coptic" style="border-right: 1px solid black;">Hail to our father Abba Samuel, who became
                exceedingly great, in heaven and on earth, before God and men.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲫⲏ̀ⲉⲧⲁϥ̀ⲉⲣⲛⲓϣϯ ̀ⲉⲙⲁϣⲱ:
                ϧⲉⲛ ̀ⲧⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϧⲁⲧⲉⲛ Ⲫϯ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى صار عظيما جدا فى السماء وعلى الأرض عند الله والناس.</td>
        </tr>
        <tr id="table_74_row_270">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O our holy father
                Abba Samuel, and all his children the monks, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ
                Ⲥⲁⲙⲟⲩⲏⲗ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ̀ⲙⲙⲟⲛⲁⲭⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا ياأبانا القديس أنبا صموئيل وأولاده الرهبان ليغفر…</td>
        </tr>
        <tr id="table_74_row_271">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. JOHN KAME</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_272">
            <td class="coptic" style="border-right: 1px solid black;">The incense of your, perfect purity has spread,
                and your eternal guidance, our father Abba John Kame.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲡⲓ̀ⲥⲑⲟⲓⲛⲟϥⲓ ϣⲱϣ ̀ⲉⲃⲟⲗ: ̀ⲛⲧⲉ ⲡⲉⲕⲧⲟⲩⲃⲟⲩ ⲉⲧϫⲏⲕ
                ̀ⲉⲃⲟⲗ: ⲛⲉⲙ ⲡⲉⲕ̀ⲁⲙⲟⲛⲓ ϣⲁ ̀ⲉⲃⲟⲗ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ Ⲭⲁⲙⲉ.</td>
            <td class="arabic">فاح بخور طهارتك الكاملة وتمسكك الى التمام. ياأبانا القديس أنبا يؤانس كاما.</td>
        </tr>
        <tr id="table_74_row_273">
            <td class="coptic" style="border-right: 1px solid black;">The elders have smelled it, and were envious of
                your chosen zeal, for through your purity, and your spotless virginity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲓⲥⲟⲫⲟⲥ ϣⲱⲗⲉⲙ ̀ⲉⲣⲟϥ: ⲁⲩⲭⲟϩ ̀ⲉⲡⲉⲕⲃⲓⲟⲥ ⲉⲧⲥⲱⲧⲡ: ϫⲉ
                ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲉⲕⲧⲟⲩⲃⲟ: ⲛⲉⲙ ⲧⲉⲕⲡⲁⲣⲑⲉⲛⲓⲁ ⲉⲧⲟⲓ ̀ⲛⲁⲧⲁϭⲛⲓ.</td>
            <td class="arabic">فاشتمه الحكماء وغارو لسيرتك المختارة. لأن من قبل طهارتك وبتوليتك التى بلا عيب.</td>
        </tr>
        <tr id="table_74_row_274">
            <td class="coptic" style="border-right: 1px solid black;">The Lord grew a vine, and it overshadowed your
                chamber, as a sign it revealed, your angelic purity.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲀⲠ̅ⲟ̅ⲥ ⲫⲓⲣⲓ ̀ⲛⲟⲩⲃⲱ ̀ⲛ̀ⲁⲗⲟⲗⲓ: ⲁⲥⲉⲣϧⲏⲓⲃⲓ
                ̀ⲉⲡⲉⲕⲙⲁ̀ⲛϣⲉⲗⲉⲧ: ⲟⲩⲙⲏⲓⲛⲓ ⲉϥⲟⲩⲱⲛϩ ⲉϥⲉⲣⲙⲉⲑⲣⲉ: ̀ⲉⲡⲉⲕⲧⲟⲩⲃⲟ ̀ⲛⲁⲅⲅⲉⲗⲓⲕⲟⲛ.</td>
            <td class="arabic">أزهر الرب كرمةً وظللت على خدرك علامة ظاهرة. تشهد لطهارتك الملائكية.</td>
        </tr>
        <tr id="table_74_row_275">
            <td class="coptic" style="border-right: 1px solid black;">Your honored fame, and that of your celibate wife,
                the bride of Christ, spread throughout the whole earth.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕ̀ⲉⲣ̀ⲫⲙⲉⲩ̀ⲓ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ: ⲛⲉⲙ ⲧⲉⲕ̀ⲥϩⲓⲙⲓ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ:
                ϯϣⲉⲗⲉⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ: ⲁϥⲥⲱⲣ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ.</td>
            <td class="arabic">تذكارك المكرم مع أمرأتك البتول عروس المسيح شاع فى كل العالم.</td>
        </tr>
        <tr id="table_74_row_276">
            <td class="coptic" style="border-right: 1px solid black;">Therefore those who seek the Lord, came unto you,
                O priest and shepherd, of the flock of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲩ̀ⲓ ϩⲁⲣⲟⲕ: ̀ⲛϫⲉ ⲛⲏⲉⲧⲕⲱϯ ̀ⲛⲥⲁ Ⲡ̅ⲟ̅ⲥ: ̀ⲱ
                ⲡⲓⲟⲩⲏⲃ ̀ⲙⲙⲁⲛ̀ⲉⲥⲱⲟⲩ: ̀ⲛⲧⲉ ⲡⲓ̀ⲟϩⲓ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">من أجل هذا أتى اليك طالبو الرب أيها الكاهن الراعى قطيع المسيح.</td>
        </tr>
        <tr id="table_74_row_277">
            <td class="coptic" style="border-right: 1px solid black;">You taught them monasticism, according to the
                angelic rites, you lifted up a pleasant sacrifice, before God the Father.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϯ̀ⲥⲃⲱ ⲛⲱⲟⲩ ̀ⲛϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ
                ̀ⲛⲛⲓ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲁⲕ̀ⲉⲛⲟⲩ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲛⲟⲩⲑⲩⲥⲓ̀ⲁ ⲉⲥϣⲏⲡ: ⲛⲁϩⲣⲉⲛ Ⲫϯ ̀Ⲫⲓⲱⲧ.</td>
            <td class="arabic">وعلمتهم الرهبنة كطقس الملائكة. وأصعدتهم ذبيحة مقبولة أمام الله الآب.</td>
        </tr>
        <tr id="table_74_row_278">
            <td class="coptic" style="border-right: 1px solid black;">You received honor and crowns, before Christ the
                King, you rejoiced with the saints, in His kingdom.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϭⲓ ̀ⲛϩⲁⲛⲧⲁⲓ̀ⲟ ⲛⲉⲙ ϩⲁⲛ̀ⲭⲗⲟⲙ: ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ̀Ⲡⲟⲩⲣⲟ
                Ⲡ̅ⲭ̅ⲥ: ⲁⲕⲟⲩⲛⲟϥ ⲛⲉⲙ ⲛⲏ̅ⲉ̅ⲑ̅ⲩ: ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">ونلت كرامات وأكاليل من قبل الملك المسيح وفرحت مع جميع القديسين فى ملكوته.</td>
        </tr>
        <tr id="table_74_row_279">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O pure virgin, our
                father Abba John Kame, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ
                ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ Ⲭⲁⲙⲉ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلب عنا أيها البتول الطاهر أبونا أنبا يؤانس كاما ليغفر...</td>
        </tr>
        <tr id="table_74_row_280">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. ROWEIS</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_281">
            <td class="coptic" style="border-right: 1px solid black;">For you truly were worthy, to be lifted up by the
                angels, to the heavenly Jerusalem, Abba Roweis the beholder of God.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲉⲙ̀ⲡϣⲁ ⲅⲁⲣ ⲁⲗⲏⲑⲱⲥ: ̀ⲉⲧⲁⲩ̀ⲱⲗⲓ ̀ⲙⲙⲟⲕ ̀ⲛϫⲉ
                ⲛⲓ̀ⲁⲅⲅⲉⲗⲟⲥ: ̀ⲉϧⲟⲩⲛ ̀ⲉⲒⲉⲣⲟⲩⲥⲁⲗⲏⲙ ̀ⲛⲧⲉ ̀ⲧⲫⲉ: ⲁⲃⲃⲁ Ⲧⲉϫⲓ ⲑⲉⲟⲫⲁⲛⲓⲟⲥ.</td>
            <td class="arabic">لأنك مستحق بالحقيقة يامن حملتك الملائكة داخل أورشليم السمائية. ياأنبا فريج ناظر الاله.
            </td>
        </tr>
        <tr id="table_74_row_282">
            <td class="coptic" style="border-right: 1px solid black;">Because of your many pains, you made to your body,
                so that your soul may be, an altar for the Holy Spirit.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲉⲑⲃⲉ ̀ⲡ̀ⲁϣⲁⲓ ̀ⲛⲧⲉⲛⲓϧⲓⲥⲓ: ̀ⲉⲧⲁⲕ̀ⲓⲣⲓ ̀ⲙⲙⲱⲟⲩ ϧⲉⲛ
                ⲡⲉⲕⲥⲱⲙⲁ: ϣⲁ̀ⲛⲧⲉⲥϣⲱⲡⲓ ̀ⲛϫⲉ ⲧⲉⲕⲯⲩⲭⲏ: ̀ⲛⲟⲩⲉⲣⲫⲉⲓ ̀ⲛⲧⲉ ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">لأجل كثرة أتعابك التى قاسيتها فى جسدك حتى صارت نفسك هيكلا للروح القدس.</td>
        </tr>
        <tr id="table_74_row_283">
            <td class="coptic" style="border-right: 1px solid black;">Your holy name has spread, throughout the lands of
                Egypt, because of the signs and wonders, the Lord performed through you.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲱⲣ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ ̅ⲉ̅ⲑ̅ⲩ: ϧⲉⲛ ⲛⲓⲑⲱϣ ̀ⲛⲧⲉ
                ⲛⲓⲭⲱⲣⲁ ̀ⲛⲬⲏⲙⲓ: ⲉⲑⲃⲉ ⲛⲓⲙⲏⲓⲛⲓ ⲛⲉⲙ ϩⲁⲛ̀ϣⲫⲏⲣⲓ: ̀ⲉⲧⲉ Ⲫϯ ⲁⲓⲧⲟⲩ ϩⲓⲧⲟⲧⲕ.</td>
            <td class="arabic">ذاع اسمك الطاهر فى حدود اقليم مصر من أجل الآيات والعجائب التى أجراها الله على يديك.</td>
        </tr>
        <tr id="table_74_row_284">
            <td class="coptic" style="border-right: 1px solid black;">Your holy footprints, have witnessed your wonders
                to us, which you performed in the land of Egypt, through the power of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲁⲧⲥⲓ ̀ⲛⲛⲉⲕϭⲁⲗⲁⲩϫ ̅ⲉ̅ⲑ̅ⲩ: ⲁⲥⲉⲣⲙⲉⲑⲣⲉ ⲛⲁⲛ ϧⲉⲛ
                ⲛⲉⲕ̀ϣⲫⲏⲣⲓ: ̀ⲉⲧⲁⲕ̀ⲓⲣⲓ ̀ⲙⲙⲱⲟⲩ ϧⲉⲛ ̀ⲧⲭⲱⲣⲁ ̀ⲛⲭⲏⲙⲓ: ϧⲉⲛ ̀ⲧϫⲟⲙ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">خطوات قدميك المقدسة تشهد لنا بعجائبك التى أجريتها فى اقليم مصر بقوة المسيح.</td>
        </tr>
        <tr id="table_74_row_285">
            <td class="coptic" style="border-right: 1px solid black;">For the light of your body, has enlightened our
                bodies, and your holy soul, prays on behalf of our souls.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲱⲓⲛⲓ ⲅⲁⲣ ̀ⲛⲧⲉ ⲡⲉⲕⲥⲱⲙⲁ: ϣⲁϥ̀ⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲛϫⲉ
                ⲛⲉⲛⲥⲱⲙⲁ: ⲟⲩⲟϩ ⲧⲉⲕⲩⲭⲏ ̅ⲉ̅ⲑ̅ⲩ: ⲉⲥⲧⲱⲃϩ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲉⲛ ⲛⲉⲛⲩⲭⲏ.</td>
            <td class="arabic">لأن نور جسدك يضىء أجسادنا ونفسك الطاهرة تطلب عن أنفسنا.</td>
        </tr>
        <tr id="table_74_row_286">
            <td class="coptic" style="border-right: 1px solid black;">Your life is a wonder, and your fighting is great,
                your glory was greatly exalted, in the midst of the ascetics.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲉⲕⲃⲓⲟⲥ ⲟⲩ̀ϣⲫⲏⲣⲓ ⲧⲉ: ⲡⲉⲕ̀ⲁⲅⲱⲛ ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡⲉⲕ̀ⲱⲟⲩ:
                ̀ϥϭⲓⲥⲓ ̀ⲉⲙⲁϣⲱ: ϧⲉⲛ ̀ⲑⲙⲏϯ ̀ⲛⲛⲓ̀ⲁⲥⲕⲏⲧⲏⲥ.</td>
            <td class="arabic">سيرة حياتك عجيبة وجهادك عظيم ومجدك مرتفع جدا فى وسط النساك.</td>
        </tr>
        <tr id="table_74_row_287">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you indeed, O our righteous holy
                father, Abba Roweis the Beholder of God, the Beloved of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ̀ⲛⲇⲓⲕⲉⲟⲥ:
                ⲁⲃⲃⲁ Ⲧⲉϫⲓ ⲑⲉⲟⲫⲁⲛⲓⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">طوباك بالحقيقة ياأبانا القديس البار أنبا فريج ناظر الاله حبيب المسيح.</td>
        </tr>
        <tr id="table_74_row_288">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O our righteous
                holy father, Abba Roweis the beholder of God, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉⲅⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                ̀ⲛⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ Ⲧⲉϫⲓ ⲑⲉⲟⲫⲁⲛⲓⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياأبانا القديس أنبا فريج ناظر الاله ليغفر..</td>
        </tr>
        <tr id="table_74_row_289">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. PARSOUMA THE NAKED</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_290">
            <td class="coptic" style="border-right: 1px solid black;">Let us gather O my beloved, with pleasure to
                honor, this righteous man, our father Abba Parsoum.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲁⲣⲉⲛⲑⲱⲟⲩϯ ̀ⲱ ⲛⲁⲙⲉⲛⲣⲁϯ: ̀ⲛⲧⲉⲛⲧⲁⲓⲟ ϧⲉⲛ ⲟⲩϯⲙⲁϯ:
                ̀ⲙⲡⲁⲓⲣⲱⲙⲓ ̀ⲛⲇⲓⲕⲉⲟⲥ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ.</td>
            <td class="arabic">فلنجتمع ياأحبائى لنكرم بسرور هذا الرجل البار أبانا القديس أنبا برسوم.</td>
        </tr>
        <tr id="table_74_row_291">
            <td class="coptic" style="border-right: 1px solid black;">This one who forsook the world, and its painful
                life, with great patience, loved Christ his Lord.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁⲓ ̀ⲉⲧⲁϥϩⲓ̀ⲡϩⲟ ̀ⲙⲡⲁⲓⲕⲟⲥⲙⲟⲥ: ⲛⲉⲙ ⲡⲉϥⲃⲓⲟⲥ ⲉⲑⲙⲉϩ
                ̀ⲛϧⲓⲥⲓ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲛϩⲩⲡⲟⲙⲟⲛⲏ: ⲁϥⲙⲉⲓ ̀ⲙⲠ̅ⲭ̅ⲥ ⲡⲉϥ̅ⲟ̅ⲥ.</td>
            <td class="arabic">هذا الذى رفض العالم وحياته المملوءة تعبا بعظم صبر وأحب المسيح ربه.</td>
        </tr>
        <tr id="table_74_row_292">
            <td class="coptic" style="border-right: 1px solid black;">His fame has spread, onto all the world, because
                of his high virtues, and his angelic purity.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁϥⲥⲱⲣ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ ⲡⲉϥⲣⲁⲛ: ϧⲉⲛ ϯⲟⲓⲕⲟⲙⲉⲛⲏ ⲧⲏⲣⲥ: ⲉⲑⲃⲉ
                ⲛⲉϥ̀ⲉⲣⲉⲧⲏ ⲉⲧϭⲟⲥⲓ: ⲛⲉⲙ ⲡⲉϥⲧⲟⲩⲃⲟ ̀ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ.</td>
            <td class="arabic">وذاع اسمه فى المسكونة كلها من أجل فضائله العالية وطهارته الملائكية.</td>
        </tr>
        <tr id="table_74_row_293">
            <td class="coptic" style="border-right: 1px solid black;">He comforted everyone, who came to him from
                everywhere, through perfect love, and long suffering.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲁϥϯⲛⲟⲙϯ ̀ⲛⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲑⲛⲏⲟⲩ ϩⲁⲣⲟϥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲙⲁⲓ
                ⲛⲓⲃⲉⲛ: ϧⲉⲛ ⲟⲩ̀ⲁⲅⲁⲡⲏ ⲉⲥϫⲏⲕ ̀ⲉⲃⲟⲗ: ⲛⲉⲙ ⲟⲩⲙⲉⲧⲣⲉϥ̀ⲱⲟⲩ̀ⲛϩⲏⲧ.</td>
            <td class="arabic">وكان يقوى كل من يأتى اليه من كل مكان بمحبة كاملة وطول أناة.</td>
        </tr>
        <tr id="table_74_row_294">
            <td class="coptic" style="border-right: 1px solid black;">Blessed are you indeed, O our holy father Abba
                Parsoum, for you fulfilled the words, of our Good Savior.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ:
                ϫⲉ ⲁⲕϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛⲛⲓⲥⲁϫⲓ: ̀ⲛⲧⲉ ⲡⲉⲛⲤⲱⲧⲏⲣ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">طوباك أنت بالحقيقة ياأبانا القديس أنبا برسوم لأنك أكملت أقوال مخلصنا الصالح.</td>
        </tr>
        <tr id="table_74_row_295">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my master the
                ascetic father, Abba Parsoum the naked, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲡⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲱⲧ
                ̀ⲛ̀ⲁⲥⲕⲏⲧⲏⲥ: ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲡⲓⲣⲉϥⲃⲏϣ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا ياسيدى الآب الناسك أنبا برسوم العريان ليغفر...</td>
        </tr>
        <tr id="table_74_row_296">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. TAKLA HAYMANOUT</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_297">
            <td class="coptic" style="border-right: 1px solid black;">The Spirit of comfort, came down from heaven, upon
                the blessed father, Saint Takla Haymanout.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̀ⲙⲠⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ̀ⲉⲧⲁϥ̀ⲓ ̀ⲉⲡⲉⲥⲏⲧ ̀ⲉⲃⲟⲗ ϧⲉⲛ
                ̀ⲧⲫⲉ: ̀ⲉϫⲉⲛ ̀ⲫⲓⲱⲧ ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲓ̀ⲁⲅⲓⲟⲥ Ⲑⲉⲕⲗⲁ Ϩⲩⲙⲁⲛⲟⲥ.</td>
            <td class="arabic">الروح المعزى لما نزل من السماء على الطوباوى القديس تكلا هيمانوت</td>
        </tr>
        <tr id="table_74_row_298">
            <td class="coptic" style="border-right: 1px solid black;">On the third day, of his blessed birth, he
                proclaimed "One is the Father, the Son and the Holy Spirit."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲙⲙⲁϩ ϣⲟⲙⲧ (̅ⲅ): ̀ⲛⲧⲉ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ
                ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ: ⲉϥⲱϣ ̀ⲉⲃⲟⲗ ϫⲉ ⲟⲩⲁⲓ ⲡⲉ: ̀Ⲫⲓⲱⲧ ⲛⲉⲙ ̀ⲡϢⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">فى اليوم الثالث لميلاده المبارك. صرخ قائلا واحد هو الآب والابن والروح القد.</td>
        </tr>
        <tr id="table_74_row_299">
            <td class="coptic" style="border-right: 1px solid black;">And from his childhood, he was filled with the
                Holy Spirit, and the angels of heaven, overshadowed him.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩⲟϩ ⲓⲥϫⲉⲛ ⲧⲉϥⲙⲉⲧ̀ⲁⲗⲟⲩ: ⲁϥⲙⲟϩ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓ̀Ⲡⲛⲉⲩⲙⲁ
                ̅ⲉ̅ⲑ̅ⲩ: ⲟⲩⲟϩ ⲛⲓ̀ⲁⲅⲉⲗⲟⲥ ̀ⲛⲧⲉ ̀ⲧⲫⲉ: ⲛⲁⲩ ⲉⲣϧⲏⲓⲃⲓ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱϥ.</td>
            <td class="arabic">ومنذ طفوليته امتلأ من الروح القدس وملائكة السماء كانت تظلل عليه.</td>
        </tr>
        <tr id="table_74_row_300">
            <td class="coptic" style="border-right: 1px solid black;">Michael the head of the heavenly, was always with
                him, as was said by, David in the Psalms.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲓⲭⲁⲏⲗ ̀ⲡⲁⲣⲭⲱⲛ ̀ⲛⲛⲁ ⲛⲓⲫⲏⲟⲩ̀ⲓ: ⲉϥⲭⲏ ⲛⲉⲙⲁϥ ̀ⲛⲥⲏⲟⲩ
                ⲛⲓⲃⲉⲛ: ⲕⲁⲧⲁ ̀ⲫ̀ⲣⲏϯ ̀ⲉⲧⲁϥϫⲟⲥ: ̀ⲛϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲡⲓⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">ميخائيل رئيس السمائيين كائن معه كل حين. كما قال داود فى المزمور.</td>
        </tr>
        <tr id="table_74_row_301">
            <td class="coptic" style="border-right: 1px solid black;">Christ was revealed to you, and He gave you the
                authority, to loosen and to bind, like the Apostles.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲀⲠ̅ⲭ̅ⲥ ⲟⲩⲱⲛϩ ⲛⲁⲕ ̀ⲉⲃⲟⲗ: ⲟⲩⲟϩ ⲁϥϯ ⲛⲁⲕ ̀ⲙⲡⲓ̀ⲉⲣϣⲓϣⲓ:
                ⲡⲓⲥⲟⲛϩ ⲛⲉⲙ ⲡⲓⲃⲱⲗ ̀ⲉⲃⲟⲗ: ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲛⲉϥ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">والمسيح ظهر لك وأعطاك سلطان الربط والحل كمثل رسله.</td>
        </tr>
        <tr id="table_74_row_302">
            <td class="coptic" style="border-right: 1px solid black;">You became an apostle, chosen by Jesus Christ, the
                Patriarch of the Ethiopians, the father of the monks.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϣⲱⲡⲓ ̀ⲛⲟⲩ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ̀ϥⲥⲱⲧⲡ ̀ⲛⲒⲉⲣⲟⲩⲥⲁⲗⲏⲙ Ⲡ̅ⲭ̅ⲥ:
                ⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ ̀ⲛⲛⲓ̀Ⲉⲑⲁϥϣ: ̀ⲫⲓⲱⲧ ̀ⲛⲧⲉ ⲛⲓⲙⲟⲛⲁⲭⲟⲥ.</td>
            <td class="arabic">وصرت رسولا مختارا ليسوع المسيح رئيس كهنة للأحباش وأبا للرهبان.</td>
        </tr>
        <tr id="table_74_row_303">
            <td class="coptic" style="border-right: 1px solid black;">Your name became sweet, on our lips and the
                Ethiopians, O God of Saint Takla, the Ethiopian have pity upon us.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ϥϩⲟⲗϫ ̀ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ ⲁϥϣⲱⲡⲓ: ϧⲉⲛ ⲛⲉⲛⲣⲱⲛ ⲛⲉⲙ
                ⲛⲓⲣⲉⲙⲈⲑⲁⲩϣ: ϫⲉ Ⲫϯ ̀ⲙⲡⲓ̀ⲁⲅⲓⲟⲥ: Ⲑⲉⲕⲗⲁ Ϩⲩⲙⲁⲛⲟⲥ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
            <td class="arabic">صار اسمك حلو فى أفواهنا وأفواه الأحباش بقولنا يااله القديس تكلا هيمانوت تراءف علينا.</td>
        </tr>
        <tr id="table_74_row_304">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Ethiopian
                Apostle, Saint Takla Haymanout, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ
                ̀ⲛⲛⲓⲣⲉⲙⲈⲑⲁⲩϣ: ⲡⲓ̀ⲁⲅⲓⲟⲥ Ⲑⲉⲕⲗⲁ Ϩⲩⲙⲁⲛⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يارسول الأحباش القديس تكلا هيمانوت ليغفر...</td>
        </tr>
        <tr id="table_74_row_305">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR THE PATRIARCHS
                ABRAHAM, ISSAC, & JACOB</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_306">
            <td class="coptic" style="border-right: 1px solid black;">Sing unto the Lord a new song, with myriads of
                psalmodies, for the remembrance of our masters, and fathers Abraham Isaac and Jacob.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϩⲱⲥ ̀ⲉⲠ̅ⲟ̅ⲥ ϧⲉⲛ ⲟⲩϩⲱⲥ ̀ⲙⲃⲉⲣⲓ: ϧⲉⲛ ϩⲁⲛⲁⲗⲙⲟⲥ ̀ⲑⲃⲁ
                ̀ⲛⲕⲱⲃ: ⲡⲓ̀ⲉⲣ̀ⲫⲙⲉⲩ̀ⲓ ̀ⲛⲛⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲟϯ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">سبحوا الرب تسبحة جديدة بربوات مزامير بتذكار سادتي الآباء ابراهيم وإسحق ويعقوب.</td>
        </tr>
        <tr id="table_74_row_307">
            <td class="coptic" style="border-right: 1px solid black;">Grant us O Lord rest, in the bosom of our
                righteous fathers, Abraham Isaac and Jacob, in Paradise with their prayers.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲟⲓ ⲛⲁⲛ Ⲡ̅ⲟ̅ⲥ ̀ⲛⲟⲩ̀ⲭⲃⲟⲃ: ϧⲉⲛ ⲕⲉⲛϥ ̀ⲛⲛⲉⲛⲓⲟϯ
                ̀ⲛⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ: ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛⲉⲙ ⲛⲟⲩⲕⲉ̀ⲡⲣⲟⲥ.</td>
            <td class="arabic">أعطنا يا رب راحة في أحضان آبائنا القديسين ابراهيم وإسحق ويعقوب في الفردوس بصلواتهم.</td>
        </tr>
        <tr id="table_74_row_308">
            <td class="coptic" style="border-right: 1px solid black;">Do not forget the covenant, which You have made
                with Abraham, and guarded him with Isaac, and raised him with Jacob.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙⲡⲉⲣⲉⲣ̀ⲡⲱⲃϣ ̀ⲛϯⲇⲓ̀ⲁⲑⲏⲕⲏ: ⲑⲏ̀ⲉⲧⲁⲕⲥⲉⲙⲛⲏⲧⲥ ⲛⲉⲙ
                Ⲁⲃⲣⲁⲁⲙ: ⲟⲩⲟϩ ⲁⲕ̀ⲁⲣⲉϩ ̀ⲉⲣⲟϥ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ: ⲟⲩⲟϩ ⲁⲕⲧⲁϩⲟϥ ̀ⲉⲣⲁⲧⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">لا تنقض العهد الذي قررته مع إبراهيم وحفظته لاسحق وأقمته مع يعقوب</td>
        </tr>
        <tr id="table_74_row_309">
            <td class="coptic" style="border-right: 1px solid black;">Bless the Lord O people, the tribes and all kinds
                of tongues, in the feast of the great and righteous, Abraham Isaac and Jacob.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲥⲙⲟⲩ ̀ⲉⲠ̅ⲟ̅ⲥ ̀ⲱ ⲛⲓⲗⲁⲟⲥ: ⲛⲓⲫⲩⲗⲏ ⲛⲉⲙ ⲛⲓⲁⲥⲡⲓ ̀ⲛⲗⲁⲥ:
                ϧⲉⲛ ̀ⲡϣⲁⲓ ̀ⲛⲧⲉ ⲛⲓⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">باركوا الرب يا أيها الشعوب والقبائل ولغات الألسن في عيد العظماء في الصديقين إبراهيم واسحق
                ويعقوب.</td>
        </tr>
        <tr id="table_74_row_310">
            <td class="coptic" style="border-right: 1px solid black;">Exalt the saints greatly, with the righteous and
                the just, grant us O God an inheritance, with Abraham Isaac and Jacob.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲉⲧⲉⲛϭⲓⲥⲓ ̀ⲉⲙⲁϣⲱ ⲛⲓ̀ⲁⲅⲓⲟⲥ: ⲛⲉⲙ ⲛⲓ̀ⲏⲙⲏⲓ ⲛⲉⲙ
                ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲙⲟⲓ ⲛⲁⲛ Ⲡ̅ⲟ̅ⲥ ̀ⲛⲟⲩⲙⲉⲣⲟⲥ: ⲛⲉⲙ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">تعاليتم جداً أيها القديسين والأبرار والصديقين. أعطنا يارب نصبياً مع إبراهيم وإسحق ويعقوب.
            </td>
        </tr>
        <tr id="table_74_row_311">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O my masters and
                righteous fathers, Abraham Isaac and Jacob, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ⲛⲁ̅ⲟ̅ⲥ ̀ⲛⲓⲟϯ
                ̀ⲛⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الصديقين إبراهيم وإسحق ويعقوب ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_312">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. SEVERUS, PATRIARCH OF ANTIOCH
            </td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_313">
            <td class="coptic" style="border-right: 1px solid black;">The confirmed leaders, the great defenders, the
                winners of the fight, the bright lamps.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲕⲉⲃⲉⲣⲛⲓⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲡⲓⲣⲉϥⲙⲓϣⲓ ̀ⲛⲕⲁⲗⲱⲥ:
                ⲡⲓⲣⲉϥ̀ϭⲣⲟ ϧⲉⲛ ⲛⲓⲃⲱⲧⲥ: ⲡⲓϧⲏⲃⲥ ̀ⲉⲧⲁϥ̀ⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">المدبر الثابت المحارب جيداً. الغالب فى الحروب السراج المنير.</td>
        </tr>
        <tr id="table_74_row_314">
            <td class="coptic" style="border-right: 1px solid black;">The pillar of Orthodoxy, is Abba Severus the
                patriarch, the teacher of the rational, flock of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓⲕⲩⲣⲓⲝ ̀ⲛⲧⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: ⲡⲉ Ⲥⲉⲩⲏⲣⲟⲥ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ:
                ⲡⲓⲣⲉϥϯ̀ⲥⲃⲱ ̀ⲛⲧⲉ ⲡⲓ̀ⲟϩⲓ: ̀ⲛⲗⲟⲅⲓⲕⲟⲛ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">المنادى بالارثوذكسية هو ساويرس البطريرك. معلم القطيع الناطق الذى للمسيح.</td>
        </tr>
        <tr id="table_74_row_315">
            <td class="coptic" style="border-right: 1px solid black;">Your upright teaching, defeated the heretics, like
                the two edged sword, through the power of Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲛⲉⲕⲇⲟⲅⲙⲁ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲙⲓϣⲓ ̀ⲙ̀ⲡϩⲏⲧ ̀ⲛⲛⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ:
                ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲥⲏϥⲓ ̀ⲛⲣⲟ̀ⲥⲛⲁⲩ (̅ⲃ): ϩⲓⲧⲉⲛ ̀ⲧϫⲟⲙ ̀ⲛϮ̀ⲧⲣⲓⲁⲥ.</td>
            <td class="arabic">اعتقاداتك المستقيمة ضربت فى قلوب الهراطقة مثل سيف ذى حدين بقوة الثالوث.</td>
        </tr>
        <tr id="table_74_row_316">
            <td class="coptic" style="border-right: 1px solid black;">Likewise we magnify You, with David the psalmist,
                You are the priest forever, according to the order of Melchizedek.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ
                ̀ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ̀ⲉⲛⲉϩ: ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ ̀ⲙⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">لذلك ترفعك مع المرتل داود قائلين أنت هو الكاهن إلى الأبد على طقس ملشيصاداق.</td>
        </tr>
        <tr id="table_74_row_317">
            <td class="coptic" style="border-right: 1px solid black;">Every knee bows to the Lord, every tongue blesses
                Him, the glory of God has spread, and filled the whole world.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲕⲱⲗϫ ̀ⲙⲠ̅ⲟ̅ⲥ: ̀ⲁⲗⲁⲥ ⲛⲓⲃⲉⲛ ̀ⲥⲙⲟⲩ ̀ⲉⲣⲟϥ:
                ̀ⲁ̀ⲡ̀ⲱⲟⲩ ̀ⲙⲪϯ ⲟⲩⲱϣⲥ ̀ⲉⲃⲟⲗ: ⲁϥⲙⲟϩ ̀ⲙ̀ⲡϩⲟ ̀ⲛϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">كل ركبة جثت للرب. وكل لسان سبحه ومجدُ الله اتسع وملأ وجه للمسكونة.</td>
        </tr>
        <tr id="table_74_row_318">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O teachers of the
                Orthodoxy, Severus and Dioscorus, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲱ ̀ⲡⲥⲁϧ ̀ⲛⲧⲉ
                ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: Ⲥⲉⲩⲏⲣⲟⲥ ⲛⲉⲙ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلبا عنا يامعلمى الأرثوذكسية ساويرس وديسقورس ليغفر...</td>
        </tr>
        <tr id="table_74_row_319">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR ST. ABRAAM, BISHOP OF FAYOUM</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_320">
            <td class="coptic" style="border-right: 1px solid black;">The shining lamp, in Fayoum and all Egypt, because
                of his signs and miracles, and his love for Christ.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲡⲓϧⲏⲃⲥ ⲉⲧ̀ⲉⲣⲟⲩⲱⲓⲛⲓ: ϧⲉⲛ ̀Ⲫⲓⲟⲙ ⲛⲉⲙ Ⲭⲏⲙⲓ ⲧⲏⲣⲥ: ⲉⲑⲃⲉ
                ⲛⲉϥ̀ϣⲫⲏⲣⲓ ⲛⲉⲙ ⲛⲉϥⲙⲏⲛⲓ: ⲛⲉⲙ ⲡⲉϥⲙⲉⲓ ̀ⲙⲠ̅ⲭ̅ⲥ.</td>
            <td class="arabic">المصباح المنير، في الفيوم وكل مصر، من أجل عجائبه وآياته، ومحبته للمسيح.</td>
        </tr>
        <tr id="table_74_row_321">
            <td class="coptic" style="border-right: 1px solid black;">He who has the expensive crown, the friend of the
                hermits, the righteous and the prophets, who follow our Master.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲫⲁ ⲡⲓ̀ⲭⲗⲟⲙ ̀ⲙⲙⲁⲣⲅⲁⲣⲓⲧⲏⲥ: ⲡⲓ̀ϣⲫⲏⲣ ̀ⲛⲛⲓ̀ⲁⲛⲁⲭⲱⲣⲓⲧⲏⲥ:
                ⲛⲉⲙ ⲛⲓ̀ⲑⲙⲏⲓ ⲛⲉⲙ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ⲫⲏ̀ⲉⲧⲁϥⲙⲟϣⲓ ⲛⲥⲁ ⲡⲉⲛⲆⲩⲥⲡⲟⲧⲏⲥ.</td>
            <td class="arabic">ذو الإكليل الجوهر، صديق السواح، والأبرار والأنبياء، الذي تبع سيدنا.</td>
        </tr>
        <tr id="table_74_row_322">
            <td class="coptic" style="border-right: 1px solid black;">Like our father Abraham, the father of Isaac and
                Jacob, you loved mercy, and completed the commandments.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙ̀ⲫⲣⲏϯ ̀ⲙⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: ̀ⲫⲓⲱⲧ ̀ⲛⲒⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ:
                ⲁⲕⲙⲉⲛⲣⲉ ϯⲙⲉⲑⲛⲁ̀ⲏⲧ: ⲟⲩⲟϩ ⲁⲕϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛⲛⲓ̀ⲉⲛⲧⲟⲗⲏ.</td>
            <td class="arabic">مثل أبونا أبرآم، أبونا إسحق ويعقوب، أنت أحببت الرحمة، وأكملت الوصايا.</td>
        </tr>
        <tr id="table_74_row_323">
            <td class="coptic" style="border-right: 1px solid black;">You witnessed the truth, and you ate with the
                poor, with great humility, you loved your sheep.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ϣⲁⲕⲉⲣⲙⲉⲑⲣⲉ ̀ⲛϯⲙⲉⲑⲙⲏⲓ: ϣⲁⲕⲟⲩⲱⲙ ⲛⲉⲙ ⲛⲓϩⲏⲕⲓ: ϧⲉⲛ
                ⲟⲩⲛⲓϣϯ ̀ⲛⲑⲉⲃⲓⲟ: ⲁⲕⲙⲉⲣⲉ ⲛⲉⲕ̀ⲉⲥⲱⲟⲩ.</td>
            <td class="arabic">تعودت الشهادة للحق، وتعودت الأكل مع الفقراء، بإتضاع عظيم، أحببت رعيتك.</td>
        </tr>
        <tr id="table_74_row_324">
            <td class="coptic" style="border-right: 1px solid black;">The lovers of worldly things, sought for new
                buildings, but you built in heaven, many heavenly buildings.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲛⲏ̀ⲉⲑⲙⲉⲓ ̀ⲛⲛⲁ ̀ⲡⲕⲁϩⲓ: ⲁⲩⲕⲱϯ ̀ⲛⲥⲁ ϩⲁⲛϫⲓⲛⲕⲱⲧ ̀ⲙⲃⲉⲣⲓ:
                ⲁⲗⲗⲁ ⲁⲕⲕⲱⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩ̀ⲓ: ̀ⲛⲛⲓϫⲓⲛⲕⲱⲧ ̀ⲛⲛⲁ ⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">محبو الأرضيات، بحثوا عن أبنية جديدة، لكنك بنيت في السماء، أبنية سمائية.</td>
        </tr>
        <tr id="table_74_row_325">
            <td class="coptic" style="border-right: 1px solid black;">How many are your miracles, you healed the sick,
                you prophesied great things, and you cast out demons.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲟⲩ̀ⲏⲣ ⲛⲉ ⲛⲉⲕ̀ϣⲫⲏⲣⲓ: ⲁⲕⲧⲁⲗϭⲟ ̀ⲛⲛⲏ̀ⲉⲧϣⲱⲛⲓ:
                ⲁⲕⲉⲣ̀ⲡⲣⲟⲥⲫⲉⲧⲉⲫⲓⲛ ̀ⲛⲛⲓ̀ϣⲫⲏⲣⲓ: ⲛⲓⲇⲉⲙⲱⲛ ⲁⲕϩⲓⲧⲟⲩ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">كم هي عجائبك، شفيت المرضي، تنبأت بالعظائم، وأخرجت الشياطين.</td>
        </tr>
        <tr id="table_74_row_326">
            <td class="coptic" style="border-right: 1px solid black;">You became a type for us, by your pure ways, by
                love and mercy, and testimony of the truth.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϣⲱⲡⲓ ⲛⲁⲛ ̀ⲛⲟⲩⲧⲩⲡⲟⲥ: ϧⲉⲛ ⲡⲉⲕϫⲓⲛⲙⲟϣⲓ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ:
                ϧⲉⲛ ϯ̀ⲁⲅⲁⲡⲏ ⲛⲉⲙ ϯⲙⲉⲑⲛⲁⲏⲧ: ⲛⲉⲙ ϯⲙⲉⲧⲙⲉⲑⲣⲉ ̀ⲛϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">صرت لنا قدوة، بسيرتك الطاهرة، بالمحبة والرحمة، والشهادة للحق.</td>
        </tr>
        <tr id="table_74_row_327">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, our holy father
                Abba Abraam, the Bishop of Fayoum, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ
                Ⲁⲃⲣⲁⲁⲙ: ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ ̀ⲛⲧⲉ ̀Ⲫⲓⲟⲙ: ̀ ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، يا أبانا القديس الأنبا أبرآم، أسقف الفيوم، ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_328">
            <td class="coptic" style="border-right: 1px solid black;">DOXOLOGY FOR OUR PATRIARCH AND BISHOPS</td>
            <td class="english" style="border-right: 1px solid black;"></td>
            <td class="english"></td>
        </tr>
        <tr id="table_74_row_329">
            <td class="coptic" style="border-right: 1px solid black;">You received the grace of Moses, the priesthood of
                Melchizedek, you received honor from our father Peter, the first of the apostles.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲕϭⲓ ̀ⲧⲭⲁⲣⲓⲥ ̀ⲙⲘⲱⲩⲏⲥ: ϯⲙⲉⲧⲟⲩⲏⲃ ̀ⲛⲧⲉ Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ:
                ⲁⲕϭⲓ ̀ⲙ̀ⲡⲧⲁⲓⲟ ̀ⲙⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ: ⲡⲓϣⲟⲣⲡ ϧⲉⲛ ⲛⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">نِلتَ نعمة موسي، وكهنوت ملشيصادق، وأخذت كرامة أبينا، بطرس الأول من الرسل.</td>
        </tr>
        <tr id="table_74_row_330">
            <td class="coptic" style="border-right: 1px solid black;">Christ lifted His right hand, on your head, He
                gave you the keys, of the Kingdom of heaven.</td>
            <td class="coptic" style="border-right: 1px solid black;">ⲀⲠ̅ⲭ̅ⲥ ⲧⲁⲗⲟ ̀ⲛⲧⲉϥϫⲓϫ: ̀ⲛⲟⲩ̀ⲓⲛⲁⲙ ̀ⲉϫⲉⲛ ⲧⲉⲕ̀ⲁⲫⲉ:
                ⲁϥⲧⲉⲛϩⲟⲩⲧⲕ ̀ⲉⲛⲓϣⲟϣⲧ: ̀ⲛⲧⲉ ̀ⲑⲙⲉⲧⲟⲩⲣⲟ ̀ⲛⲛⲓⲫⲏⲟⲩ̀ⲓ.</td>
            <td class="arabic">رفع المسيح يده اليمني، علي رأسك، وأئتمنك علي مفاتيح، ملكوت السموات.</td>
        </tr>
        <tr id="table_74_row_331">
            <td class="coptic" style="border-right: 1px solid black;">That you may govern, over the church, and that you
                may shepherd your people, in purity and righteousness.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲙ̀ⲫⲣⲏϯ ̀ⲙⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: ̀ⲫⲓⲱⲧ ̀ⲛⲒⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ:
                ⲁⲕⲙⲉⲛⲣⲉ ϯⲙⲉⲑⲛⲁ̀ⲏⲧ: ⲟⲩⲟϩ ⲁⲕϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛⲛⲓ̀ⲉⲛⲧⲟⲗⲏ.</td>
            <td class="arabic">لتصر مدبراً، علي الكنيسة، وترعي شعبك، بطهارة وبر.</td>
        </tr>
        <tr id="table_74_row_332">
            <td class="coptic" style="border-right: 1px solid black;">As Paul the Apostle, has said "Likewise, as
                Melchizedek, Christ is also."</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲕⲁⲧⲁ ̀ⲫⲣⲏϯ ̀ⲉⲧⲁϥϫⲟⲥ: ̀ⲛϫⲉ Ⲡⲁⲩⲗⲟⲥ ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ϫⲉ
                ⲕⲁⲧⲁ ̀ⲫⲣⲏϯ ̀ⲛⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ: ⲡⲁⲓⲣⲏϯ ϩⲱϥ ̀ⲙⲠ̅ⲭ̅ⲥ.</td>
            <td class="arabic">كما قال، بولس الرسول، كمثل ملشيصادق، كذلك المسيح.</td>
        </tr>
        <tr id="table_74_row_333">
            <td class="coptic" style="border-right: 1px solid black;">Likewise we glorify You, with David the Psalmist,
                You are the priest forever, according to the order of Melchizedek.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ
                ̀ⲛⲑⲟⲕ ⲡⲉ ⲡⲓ̀ⲟⲩⲏⲃ ϣⲁ ̀ⲉⲛⲉϩ: ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ ̀ⲙⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">كذلك نرفعك، مع المرتل داود قائلين، أنت هو الكاهن إلي الأبد، علي طقس ملشيصادق.</td>
        </tr>
        <tr id="table_74_row_334">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O our holy father
                the patriarch, Pope Abba Tawadros the high priest, that he may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲧⲁⲱⲁⲇⲣⲟⲥ ⲡⲓ̀ⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، يا أبينا القديس البطريرك، بابا أنبا تواضروس رئيس الكهنة، ليغفر لنا
                خطايانا.</td>
        </tr>
        <tr id="table_74_row_335">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O our saintly
                father, Abba (…) the Bishop, that He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙ̀Ⲡ̅ⲟ̅ⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                ̀ⲛⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲃⲁ (...) ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ: ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، يا أبينا القديس، أنبا (...) الأسقف، ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_336">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O lady of us all, the
                Mother of God, Mary, the Mother of our Savior, That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁ ⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ : ̀ⲱ ⲧⲉⲛϭⲟⲓⲥ ̀ⲛⲛⲏⲃ ⲧⲏⲣⲉⲛ
                ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ ̀ⲑⲙⲁⲩ ̀ⲙⲠⲉⲛⲥⲱⲧⲏⲣ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعى فينا يا سيدتنا كلنا السيدة والدة الإله مريم ام مخلصنا ليغفرلنا خطايانا .</td>
        </tr>
        <tr id="table_74_row_337">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangels,
                Michael and Gabriel, That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                ⲉⲑⲟⲩⲁⲃ : Ⲙⲓⲭⲁⲏⲗ ⲛⲁⲙ Ⲅⲁⲃⲣⲓⲏⲗ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعا فينا يارئيسى الملائكة الطاهرين ميخائيل وغبريال ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_74_row_338">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O holy archangels,
                Raphael and Souriel That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                ⲉⲑⲟⲩⲁⲃ : Ⲣⲁⲫⲁⲏⲗ ⲛⲉⲙ Ⲥⲟⲩⲣⲓⲏⲗ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفعا فينا يارئيسى الملائكة الطاهرين رافائيل وسوريال ليغفر .</td>
        </tr>
        <tr id="table_74_row_339">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O holy archangels, Sedakiel, Sarathiel
                and Ananiel, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ̀ⲱ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ: Ⲥⲉⲇⲁⲕⲓⲏⲗ
                Ⲥⲁⲣⲁⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اشفعوا فينا يارؤساء الملائكة الأطهار سداكيال وسراتيال وأنانيال ليغفر ..</td>
        </tr>
        <tr id="table_74_row_340">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O Thrones, Dominions and Powers, The
                Cherubim and the Seraphim, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ⲛⲓ̀ⲑⲣⲟⲛⲟⲥ ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ : Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ
                ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أشفعى فينا أيتها الكراسى والارباب والقوات والشيروبيم والسرافيم ليغفر ..</td>
        </tr>
        <tr id="table_74_row_341">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O Four Incorporeal
                Beasts, The ministers fervent as fire, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲡⲓ̀ϥⲧⲟⲩ ̀ⲛⲍⲱⲟⲛ
                ̀ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ : ̀ⲛⲗⲓⲧⲟⲩⲣⲅⲟⲥ ̀ⲛϣⲁϩ ̀ⲛ̀ⲭⲣⲱⲙ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أشفعوا فينا أيها الأربعة الحيوانات غير المتجسدين الخدام الملتهبين ناراً ليغفر ...</td>
        </tr>
        <tr id="table_74_row_342">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O priests of the Truth, The Twenty Four
                Presbyters, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲟⲩⲏⲃ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ : ⲡⲓϫⲟⲧ̀ϥⲧⲟⲩ
                ̀ⲙ̀ⲡⲣⲉⲥⲃⲩⲧⲏⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفعوا فينا ياكهنة الحق الأربعة والعشرين قسيساً ليغفر ...</td>
        </tr>
        <tr id="table_74_row_343">
            <td class="coptic" style="border-right: 1px solid black;">Intercede: O angelic hosts, And all the heavenly
                multitudes, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲥⲧⲣⲁⲧ̀ⲓⲁ ̀ⲛⲁⲅⲅⲉⲗⲓⲕⲟⲛ : ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ
                ̀ⲛ̀ⲉⲡⲟⲩⲣⲁⲛⲓⲟⲛ :</td>
            <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر ...</td>
        </tr>
        <tr id="table_74_row_344">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, My lords and
                fathers, the patriarchs, Abraham, Isaac and Jacob, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ
                ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : Ⲁⲃⲣⲁⲁⲙ ̀Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا ياسادتى الآباء البطاركة إبراهيم وإسحق ويعقوب ليغفر ...</td>
        </tr>
        <tr id="table_74_row_345">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O perfect man, The
                righteous and just Enoch, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓⲣⲱⲙⲓ ̀ⲛⲧⲉⲗⲓⲟⲥ :
                ⲡⲓ̀ⲑⲙⲏⲓ ̀ Ⲉⲛⲱⲭ ⲡⲓⲇⲓⲕⲉⲟⲥ : ̀ ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلب من الرب عنا أيها الرجل الكامل البار أخنوخ الصديق ليغفر ..</td>
        </tr>
        <tr id="table_74_row_346">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Elijah the
                Tishbite, And Elisha his disciple, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: Ⲏⲗⲓⲁⲥ ⲡⲓⲑⲉⲥⲃⲓⲧⲏⲥ: ⲛⲉⲙ
                ̀Ⲉⲗⲓⲥⲉⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا ياإيليا التسبيتى وآليشع تلميذه ليغفر ...</td>
        </tr>
        <tr id="table_74_row_347">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Moses the
                archprophet and Isaiah, and Jeremiah, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ Ⲙⲱ̀ⲩⲥⲏⲥ
                ⲡⲓⲁⲣⲭⲏ̀ⲡⲣⲟⲫⲓⲧⲏⲥ ⲛⲉⲙ Ⲏⲥⲁ̀ⲏⲁⲥ : ⲛⲉⲙ Ⲓⲉⲣⲉⲙⲓⲁⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا ياموسى رئيس الأنبياء وأشعياء وأرمياء ليغفر ...</td>
        </tr>
        <tr id="table_74_row_348">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O David the psalmist, Ezekiel and Daniel,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲇⲁⲩⲓⲇ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ : ⲛⲉⲙ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲛⲉⲙ Ⲇⲁⲛⲓⲏⲗ
                : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا يا داود المرتل وحزقيال ودانيال ليغفر ...</td>
        </tr>
        <tr id="table_74_row_349">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Joachim, Anna and Joseph the Elder, and the
                righteous Job, Joseph and Nicodemus, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲓⲱⲁⲕⲓⲙ ⲛⲉⲙ Ⲁⲛⲛⲁ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲡⲓ ̀ⲡⲣⲉⲥⲃⲏⲧⲉⲣⲟⲥ :
                ⲛⲉⲙ ⲡⲓ ̀ⲑⲙⲏⲓ Ⲓⲱⲃ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إطلبوا من الرب عنا يايواقيم وحنّة ويوسف الشيخ والصديق ايوب ويوسف ونيقوديموس ليغفر ...
            </td>
        </tr>
        <tr id="table_74_row_350">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Melchizedek and
                Aaron, and Zacharias and Simeon, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ ⲛⲉⲙ
                ̀Ⲁ̀ⲁⲣⲱⲛ : ⲛⲉⲙ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياملشيصادق وهرون وزكريا وسمعان ليغفر ...</td>
        </tr>
        <tr id="table_74_row_351">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O chorus of the prophets, And all the
                righteous and the just, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ : ⲛⲉⲙ ⲛⲓ̀ⲑⲙⲏⲓ ⲛⲉⲙ
                ⲛⲓⲇⲓⲕⲉⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياصفوف الأنبياء والأبرار والصديقين ليغفر..</td>
        </tr>
        <tr id="table_74_row_352">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O fore-runner and
                baptizer, John the Baptist, That he may…</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓ̀ⲡⲣⲟⲇⲣⲟⲙⲟⲥ
                ̀ⲙⲃⲁⲡⲧⲓⲥⲧⲏⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفع فينا أيها السابق الصابغ يوحنا المعمدان ليغفر ..</td>
        </tr>
        <tr id="table_74_row_353">
            <td class="coptic" style="border-right: 1px solid black;">Intercede on our behalf, O the Hundred and Forty
                Four Thousand, and the celibate Evangelist, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">̀Ⲁⲣⲓⲡ̅ : ̀ⲱ ⲡⲓϣⲉ ̀ϩⲙⲉ ̀ϥⲧⲟⲩ ̀ⲛϣⲟ : ⲛⲉⲙ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ
                ̀ⲛⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">إشفعوا فينا ايها المئة والأربعة والأربعين الفاً والبتول الانجيلى ليغفر .</td>
        </tr>
        <tr id="table_74_row_354">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Our lords and
                fathers, the Apostles, And the rest of the Disciples, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲁϭⲟⲓⲥ ̀̀ⲛⲓⲟϯ
                ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ : ⲛⲉⲙ ̀ⲡⲥⲉⲡⲓ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياسادتى الآباء الرسل وبقية التلاميذ ليغفر ..</td>
        </tr>
        <tr id="table_74_row_355">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O blessed archdeacon, Stephen the First
                Martyr, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓⲁⲣⲭⲏⲇⲓ̀ⲁⲕⲱⲛ ⲉⲧ̀ⲥⲙⲁⲣⲱⲟⲩⲧ: ̀Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓϣⲟⲣⲡ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلب من الرب عنا يارئيس الشمامسة المبارك استفانوس الشهيد الاول ليغفر ..</td>
        </tr>
        <tr id="table_74_row_356">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Beholder of God
                the Evangelist, Mark the Apostle, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲡⲓⲑⲉ̀ⲱⲣⲓⲙⲟⲥ
                ̀ⲛⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : Ⲙⲁⲣⲕⲟⲥ ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲓⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلب من الرب عنا أيها الناظر الإله الإنجيلى مرقس الرسول ليغفر ...</td>
        </tr>
        <tr id="table_74_row_357">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyr, My lord prince
                George, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ
                Ⲅⲉⲱⲣⲅⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلب من الرب عنا أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر ...</td>
        </tr>
        <tr id="table_74_row_358">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Theodore and Theodore, Leontius and
                Panicharus, That he may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ : ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ
                Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياثيؤدوروس وثيؤدوروس ولاونديوس وبانيكاروس ليغفر..</td>
        </tr>
        <tr id="table_74_row_359">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O lover of the
                father Mercurius, and Abba Mina and Abba Victor, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ
                : ⲛⲉⲙ ̀ⲁⲡⲁ Ⲙⲏⲛⲁ ⲛⲉⲙ ̀ⲁⲡⲁ Ⲃⲓⲕⲧⲱⲣ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا يافيلوباتير مرقوريوس وأبا مينا وأبا بقطر ليغفر ...</td>
        </tr>
        <tr id="table_74_row_360">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Lord Claudius and Theodore, Abba Eschyron
                and Abba Isaac, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲕⲩⲣⲓ ̀ Ⲕⲗⲁⲩⲇⲓⲟⲥ ⲛⲉⲙ Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ : ⲛⲉⲙ ̀ⲁⲡⲁ ̀
                Ⲥⲭⲩⲣⲟⲛ ⲛⲉⲙ ̀ⲁⲡⲁ ̀ Ⲓⲥⲁⲁⲕ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياسيدى اقلوديوس وثيئودوروس وأبا سخيرون وأبا اسحق ليغفر ..</td>
        </tr>
        <tr id="table_74_row_361">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Basilidis and Eusebius, Macarius and
                Philotheos, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲃⲁⲥⲓⲗⲓⲧⲏⲥ ⲛⲉⲙ Ⲉⲩⲥⲉⲃⲓⲟⲥ : ⲛⲉⲙ Ⲙⲁⲕⲁⲣⲓⲟⲥ ⲛⲉⲙ
                Ⲫⲓⲗⲟⲑⲉⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياواسيليدس وأوسابيوس ومقاريوس وفيلوثاؤس ليغفر ...</td>
        </tr>
        <tr id="table_74_row_362">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Pisoora and
                Abba Epshoi, Abba Eesi and Thekla his sister, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲡⲓⲥⲟⲩⲣⲁ ⲛⲉⲙ ̀ⲁⲡⲁ
                ̀ Ⲡϣⲱⲓ : ⲛⲉⲙ ̀ⲁⲡⲁ ̀ Ⲏⲥⲓ ⲛⲉⲙ Ⲑⲉⲕⲗⲁ ⲧⲉϥⲥⲱⲛⲓ: ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياأنبا بسوره وأبابشاى وأباايسى وتكلا اخته ليغفر ...</td>
        </tr>
        <tr id="table_74_row_363">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Justus, Apali
                and Theoklia, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲓⲟⲩⲥⲧⲟⲥ ⲛⲉⲙ
                ̀Ⲁⲡⲁⲗⲓ ⲛⲉⲙ Ⲑⲉ̀ⲟⲕⲗⲓ̀ⲁ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون يسطس وآبالى وتاوكليا ليغفر ...</td>
        </tr>
        <tr id="table_74_row_364">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Jacob the Persian, Saint Sergius and
                Saint Bachus, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲓⲁⲕⲱⲃⲟⲥ ⲡⲓϥⲉⲣⲥⲓⲥ : ⲛⲉⲙ ⲡⲓ̀ⲁⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ
                ⲛⲉⲙ Ⲃⲁⲭⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياأنبا يعقوب الفارسى والقديس سرجيوس وواخس ليغفر ...</td>
        </tr>
        <tr id="table_74_row_365">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Cosmas, his brothers and their mother, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲕⲟⲥⲙⲁ ⲛⲉⲙ ⲛⲉϥ̀ⲥⲛⲏⲟⲩ ⲛⲉⲙ ⲧⲟⲩⲙⲁⲩ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون قزمان واخوته وأمهم ليغفر ...</td>
        </tr>
        <tr id="table_74_row_366">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Cyrus and his brother John, And Barbara
                and Juliana and Demiana, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲁⲡⲁ Ⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ : ⲛⲉⲙ Ⲃⲁⲣⲃⲁⲣⲁ
                ⲛⲉⲙ Ⲓⲟⲩⲗⲓ̀ⲁⲛⲏ ⲛⲉⲙ Ⲇⲩⲙⲓ̀ⲁⲛⲏ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا يااباقير ويوحنا أخوه وبرباره ويوليانه ودميانه ليغفر ...</td>
        </tr>
        <tr id="table_74_row_367">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Lord Apatir and
                Eraee his sister, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲕⲩⲣⲓ Ⲁⲡⲁⲧⲏⲣ ⲛⲉⲙ ̀
                Ⲏⲣⲁ̀ⲏ ⲧⲉϥⲥⲱⲛⲓ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهيدان المجاهدان السيد أبادير وإيرائى أخته ليغفر ...</td>
        </tr>
        <tr id="table_74_row_368">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O struggle mantled
                martyrs, Julius and those who were with him, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲓⲟⲩⲗⲓⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲛⲉⲙⲁϥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون يوليوس ومن معه ليغفر ...</td>
        </tr>
        <tr id="table_74_row_369">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Mari Pahnam and
                Sarah his sister, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ: ⲙⲁⲣⲓ Ⲡⲁϩⲛⲁⲙ ⲛⲉⲙ
                Ⲥⲁⲣⲣⲁ ⲧⲉϥⲥⲱⲛⲓ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الشهيدان المجاهدان ماربهنام وساره أخته ليغفر ...</td>
        </tr>
        <tr id="table_74_row_370">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Sarapamon the Bishop, Psati and
                Gallinikos, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ : ⲛⲉⲙ Ⲯⲁⲧⲉ ⲛⲉⲙ
                Ⲅⲁⲗⲗⲓⲛⲓⲕⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أطلبوا من الرب عنا يا انبا صرابامون الاسقف وابصادى وغلينيكوس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_371">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O victorious
                martyrs, The Forty Saints of Sebaste, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
                ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲓ̀ϩⲙⲉ ⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲉ Ⲥⲉⲃⲁⲥⲧⲉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ايها الشهداء المجاهدون الأربعون قديساً بسبسطية ليغفر ..</td>
        </tr>
        <tr id="table_74_row_372">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Piro and Athom, And John and Simeon,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲡⲓⲣⲱⲟⲩ ⲛⲉⲙ ̀ Ⲁⲑⲱⲙ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ
                Ⲥⲩⲙⲉⲱⲛ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياأنبا بيروه واتوم ويوحنا وسمعان ليغفر ...</td>
        </tr>
        <tr id="table_74_row_373">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O struggle mantled martyrs, Abba Epshoi and
                his friend Peter, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲁⲡⲁ ̀Ⲡϣⲱⲓ ⲛⲉⲙ
                ⲡⲉϥ̀ϣⲫⲏⲣ Ⲡⲉⲧⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبا من الرب عنا أيها الشهيدان المجاهدان أبا بشوى وصديقه بطرس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_374">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Eklog the
                priest, and Abba Epgol and Abba Kav, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲁⲡⲁ ̀̀̀ Ⲕⲗⲟϫ
                ⲡⲓ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ⲛⲉⲙ ̀ⲁⲡⲁ ̀̀̀ Ⲡϫⲟⲗ ⲛⲉⲙ ̀ⲁⲡⲁ Ⲕⲁⲩ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياأبا كلوج القس وابا بجول وأبا كاف ليغفر ..</td>
        </tr>
        <tr id="table_74_row_375">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba John of Heraclia, Lord Piphamon and
                Pistavros, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲁⲡⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉⲙϩⲁⲣⲁⲕⲗⲓ̀ⲁ : ⲛⲉⲙ ⲕⲩⲣⲓ̀ⲁ
                Ⲡⲓⲫⲁⲙⲱⲛ ⲛⲉⲙ Ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياأبا يوحنا الهرقلى والسيد بفام وبسطوروس ليغفر..</td>
        </tr>
        <tr id="table_74_row_376">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Isidore and Panteleon, Sophia and Euphemia,
                That He may....</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲏⲥⲏⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲧⲉⲗⲉⲟⲛ : Ⲥⲟⲫⲓ̀ⲁ ⲛⲉⲙ Ⲉⲩⲫⲟⲙⲓ̀ⲁ
                : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياايسيذوروس وبندلاون وصوفيا وإفوميه ليغفر ..</td>
        </tr>
        <tr id="table_74_row_377">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Lord Abanoub and
                Epto-lomeos, Apa-ekragon and Sousennius, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲕⲩⲣⲓ Ⲁⲡⲁⲛⲟⲩⲃ ⲛⲉⲙ
                Ⲡⲑⲟⲗⲟⲙⲉⲟⲥ : ⲛⲉⲙ Ⲁⲡⲁ̀ⲕⲣⲁⲅⲟⲛ ⲛⲉⲙ Ⲥⲟⲩⲥⲉⲛⲛⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا ياسيدى ابانوب وابطلماوس وابكراجون وسوسنيوس ليغفر..</td>
        </tr>
        <tr id="table_74_row_378">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O great high priest, Abba Peter seal of the
                martyrs, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲱ ⲡⲓⲛⲓϣϯ ̀ⲛⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ : ⲁⲃⲃⲁ Ⲡⲉⲧⲣⲟⲥ
                ⲓⲉⲣⲟⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲛⲧⲉϥ..</td>
            <td class="arabic">أطلبوا من الرب عنا يارئيس الكهنة العظيم انبا بطرس خاتم الشهداء ليغفر..</td>
        </tr>
        <tr id="table_74_row_379">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O new martyrs, Pistavros and Arsenius, That
                He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ̀ⲱ ⲛⲓⲃⲉⲣⲓ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ ⲛⲉⲙ
                Ⲁⲣⲥⲉⲛⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبوا من الرب عنا أيها الشهيدان الجديدان بسطوروس وارسانيوس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_380">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O Michael the
                hegomen, And Michael the monk, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ Ⲙⲓⲭⲁⲏⲗ
                ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲉⲙ Ⲙⲓⲭⲁⲏⲗ ⲡⲓⲙⲟⲛⲁⲭⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبا من الرب عنا ياميخائيل القمص وميخائيل الراهب ليغفر ...</td>
        </tr>
        <tr id="table_74_row_381">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O chorus of the martyrs, Who suffered for
                the sake of Christ, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲓⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ̀ⲉⲧⲁⲩϣⲉⲡ̀ⲙⲕⲁϩⲓ
                ⲉⲑⲃⲉ Ⲡⲭˉⲥˉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياصفوف الشهداء الذين تألموا من أجل المسيح ليغفر .</td>
        </tr>
        <tr id="table_74_row_382">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords and fathers who love their
                children, Abba Anthony and Abba Paul, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ
                ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياسيدى الابوين محبى أولادهما انطونيوس وأنبا بولا ليغفر ..</td>
        </tr>
        <tr id="table_74_row_383">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O three saints,
                Abba Macarii, And all their children, the cross-bearers, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ : ⲛⲉⲙ ⲛⲟⲩϣⲏⲣⲓ
                ̀ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها الثلاثة مقارات القديسون وأولادهم لباس الصليب ليغفر ..</td>
        </tr>
        <tr id="table_74_row_384">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords and fathers the hegomens, Abba
                John and Abba Daniel, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲛϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ
                ⲛⲉⲙ ⲁⲃⲃⲁ Ⲇⲁⲛⲓⲏⲗ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا يا سيدى الأبوين القمصين أنبا يوحنا وأنبا دانيال ليغفر ..</td>
        </tr>
        <tr id="table_74_row_385">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords and fathers who love their
                children, Abba Pishoi and Abba Paul, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲛⲉⲙ
                ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا يا سيدىّ الأبوين محبى أولادهما أنبا بيشوى وأنبا بولا ليغفر ..</td>
        </tr>
        <tr id="table_74_row_386">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Our Saintly Roman
                fathers, Maximus and Dometius, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ
                ̀ⲛⲣⲱⲙⲉⲟⲥ : Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">أطلبا من الرب عنا ياأبوينا القديسين الروميين مكسيموس ودوماديوس ليغفر ...</td>
        </tr>
        <tr id="table_74_row_387">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O Forty Nine Martyrs, The elders of Shiheet,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓ̀ϩⲙⲉ ⲯⲓⲧ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛⲓϧⲉⲗⲗⲟⲓ ̀ⲛⲧⲉ Ϣⲓϩⲏⲧ
                : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا أيها التسعة والاربعون شهيداً شيوخ شيهات ليغفر ..</td>
        </tr>
        <tr id="table_74_row_388">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O strong saint, Abba Moses, And John Kame,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓϫⲱⲣⲓ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭⲁⲙⲏ
                : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">أطلبا من الرب عنا ايها القوى القديس انبا موسي ويحنس كاما ليغفر ..</td>
        </tr>
        <tr id="table_74_row_389">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Pachomious of
                the Koinonia, And Theodore his disciple, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ
                ϯⲕⲟⲓⲛⲱⲛⲓ̀ⲁ : ⲛⲉⲙ Ⲑⲉ̀ⲟⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياانبا باخوم ابا الشركة وثيؤدورس تلميذه ليغفر ..</td>
        </tr>
        <tr id="table_74_row_390">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Shenouda the Archimandrite, And Abba
                Wisa his disciple, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ϣⲉⲛⲟϯ ⲡⲓⲁⲣⲭⲏⲙⲁⲛ̀ⲇⲣⲓⲧⲏⲥ : ⲛⲉⲙ ⲁⲃⲃⲁ Ⲃⲏⲥⲁ
                ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياانبا شنوده رئيس المتوحدين وانبا ويصا تلميذه ليغفر..</td>
        </tr>
        <tr id="table_74_row_391">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Nopher and Abba Karus, And our father
                Paphnutius, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲛⲟⲩϥⲉⲣ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲕⲁⲣⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
                Ⲡⲁ̀ⲫⲛⲟⲩⲧⲓⲟⲥ :̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا نفر وانبا كاروس وابانا بفنوتيوس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_392">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Samuel the
                confessor, and Justus and Apollo And his disciples, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ
                ⲡⲓ̀ⲟⲙⲟⲗⲟⲅⲓⲧⲏⲥ : ⲛⲉⲙ Ⲓⲟⲩⲥⲧⲟⲥ ⲛⲉⲙ ̀ Ⲁⲡⲟⲗⲗⲟ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا صموئيل المعترف ويسطس وأبوللو تلميذيه ليغفر ...</td>
        </tr>
        <tr id="table_74_row_393">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Apollo and Abba Apip, And our father
                Abba Pigimi, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ ̀ Ⲁⲡⲟⲗⲗⲟ ⲛⲉⲙ ⲁⲃⲃⲁ̀ Ⲁⲡⲓⲡ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
                ⲁⲃⲃⲁ Ⲡⲓϫⲓⲙⲓ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا ابوللو وانبا ابيب وابانا انبا بيجيمى ليغفر ...</td>
        </tr>
        <tr id="table_74_row_394">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Evkin and Abba Ehron, Abba Hor and Abba
                Phis, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲉⲩⲕⲓⲛ ⲛⲉⲙ ⲁⲃⲃⲁ ̀ Ϩⲣⲟⲛ : ⲛⲉⲙ ̀ⲁⲡⲁ Ϩⲱⲣ
                ⲛⲉⲙ ̀ⲁⲡⲁ Ⲫⲓⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا افكين وانبا إهرون واباهور وابافيس ليغفر ...</td>
        </tr>
        <tr id="table_74_row_395">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Abba Parsoma and
                Ephrem, And John and Simeon, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲛⲉⲙ
                Ⲉⲫⲣⲉⲙ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا برسوما وافريم ويوحنا وسمعان ليغفر ...</td>
        </tr>
        <tr id="table_74_row_396">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Epiphanius and Ammonius, and Arshillidis and
                Arsenius, That He may…</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲉⲡⲓⲫⲁⲛⲓⲟⲥ ⲛⲉⲙ Ⲁⲙⲙⲱⲛⲓⲟⲥ : ⲛⲉⲙ Ⲁⲣⲭⲏⲗⲗⲓⲧⲏⲥ ⲛⲉⲙ
                Ⲁⲣⲥⲉⲛⲓⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياابيفانيوس وامونيوس وارشليدس وارسانيوس ليغفر</td>
        </tr>
        <tr id="table_74_row_397">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our lords, the ascetic fathers, Abba Abraam
                and George, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ ̀ⲛⲁⲥⲕⲏⲧⲏⲥ : ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ
                Ⲅⲉⲱⲣⲅⲏ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياسيدى الابوين الناسكين انبا أبرام وجيؤرجى ليغفر ..</td>
        </tr>
        <tr id="table_74_row_398">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, Athanasius the
                Apostolic, Severus and Dioscorus, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ :̀ Ⲁⲑⲛⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ : Ⲥⲉⲩⲏⲣⲟⲥ ⲛⲉⲙ
                Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا يااثاناسيوس الرسولى وساويرس وديسقورس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_399">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Basil and Gregory, And our father Abba
                Cyril,That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : Ⲃⲁⲥⲓⲗⲓⲟⲥ ⲛⲉⲙ Ⲅⲣⲓⲅⲟⲣⲓⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ
                Ⲕⲩⲣⲓⲗⲗⲟⲥ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياباسيليوس واغريغوريوس . وابانا أنبا كيرلس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_400">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O three hundred and eighteen gathered at
                Nicea, For the faith, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲓ ϣⲟⲙⲧ ϣⲉ ⲙⲏⲧ ̀ϣⲙⲏⲛ ̀ⲉⲧⲁⲩ ⲑⲱⲟⲩϯ ϧⲉⲛ Ⲛⲓⲕⲉ̀ⲁ
                : ⲉⲑⲃⲉ ⲡⲓⲛⲁϩϯ : ̀ⲛⲧⲉϥ…</td>
            <td class="arabic">اطلبوا من الرب عنا أيها ال٣١٨الذين اجتمعوا فى نيقيه من اجل الايمان ليغفر ..</td>
        </tr>
        <tr id="table_74_row_401">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O the one hundred
                and fifty at Constantinople, And the two hundred at Ephesus,That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ̀ⲱ ⲡⲓ ϣⲉ ⲧⲉⲃⲓ ̀ⲛⲧⲉ
                Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲩ- ⲡⲟⲗⲓⲥ: ⲛⲉⲙ ⲡⲓ ̀ⲥⲛⲁⲩ ϣⲉ ̀ⲛⲧⲉ ̀ Ⲉⲫⲉⲥⲟⲥ : ̀ⲛⲧⲉϥ …</td>
            <td class="arabic">اطلبوا من الرب عنا ايها ال ١٥٠ بمدينة القسطنطينية والمائتين بأفسس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_402">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Hadid and Abba John, Our great father
                Parsoma and Abba Teji, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ϩⲁⲇⲓⲇ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
                ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲛⲉⲙ Ⲁⲃⲃⲁ Ⲧⲉϫⲓ : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبوا من الرب عنا ياانبا حديد وأنبا يوحنا وأبانا العظيم أنبا برسوما وأنبا رويس ليغفر ..
            </td>
        </tr>
        <tr id="table_74_row_403">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Abba Abraam the hegomen, And our father Abba
                Mark, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ
                Ⲙⲁⲣⲕⲟⲥ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبا من الرب عنا ياأنبا ابرام القمص وابانا أنبا مرقس ليغفر ..</td>
        </tr>
        <tr id="table_74_row_404">
            <td class="coptic" style="border-right: 1px solid black;">Pray to the Lord on our behalf, O chorus of the
                cross bearers, Perfected in the wilderness, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲓⲭⲟⲣⲟⲥ ̀ⲛⲧⲉ
                ⲛⲓ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ : ̀ⲉⲧⲁⲩϫⲱⲕ ̀ⲉⲃⲟⲗ ϩⲓⲛⲓϣⲁϥⲉⲩ : ̀ⲛⲧⲉϥ ...</td>
            <td class="arabic">اطلبوا من الرب عنا يامصاف لبّاس الصليب الذين كملوا فى البرارى ليغفر ..</td>
        </tr>
        <tr id="table_74_row_405">
            <td class="coptic" style="border-right: 1px solid black;">Pray: My lord King Constantine, and his mother,
                Queen Helen, That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ : ⲛⲉⲙ ̀Ⲏⲗⲁⲛⲏ ϯⲟⲩⲣⲱ
                : ̀ⲛⲧⲉϥ...</td>
            <td class="arabic">اطلبا من الرب عنا ياسيدى الملك قسطنطين وهيلانه الملكة ليغفر ..</td>
        </tr>
        <tr id="table_74_row_406">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O wise virgin ladies, the brides of Christ,
                That He may...</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲛⲏ̀ⲁⲗⲟⲩ ̀ⲛⲥⲁⲃⲉ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ : ⲛⲓϣⲉⲗⲉⲧ ̀ⲛⲧⲉ
                Ⲡⲓ̀Ⲭⲣⲓⲥⲧⲟⲥ: ̀ⲛⲧⲉϥ…</td>
            <td class="arabic">اطلبن من الرب عنا ايتها الفتيات العذارى الحكيمات عرائس المسيح ليغفر ..</td>
        </tr>
        <tr id="table_74_row_407">
            <td class="coptic" style="border-right: 1px solid black;">Pray: O saints of this day, each one by his name,
                That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱⲃϩ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲏⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲉ ⲡⲁⲓ
                ̀ⲉϩⲟⲟⲩ : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلبوا من الرب عنا ياقديسى هذا اليوم كل واحد باسمه ليغفر ..</td>
        </tr>
        <tr id="table_74_row_408">
            <td class="coptic" style="border-right: 1px solid black;">Likewise, we magnify You, with David the Psalmist:
                You are the priest forever, according to the order of Melchizedek.</td>
            <td class="coptic" style="border-right: 1px solid black;">̀ Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ̀ⲙⲙⲟⲕ : ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ :
                ϫⲉ ̀ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ̀ⲉⲛⲉϩ : ⲕⲁⲧⲁ ̀ⲧⲧⲁⲝⲓⲥ
                ̀ⲙⲘⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">كذلك نعظمك مع المرتل داود قائلين انت هو الكاهن إلى الأبد على طقس ملشيصاداق .</td>
        </tr>
        <tr id="table_74_row_409">
            <td class="coptic" style="border-right: 1px solid black;">Pray: Our Holy father, the patriarch Abba (…), the
                high priest, That He may forgive us our sins.</td>
            <td class="coptic" style="border-right: 1px solid black;">Ⲧⲱˉ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ̀ⲙⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲁⲃⲃⲁ (...)
                ⲡⲓⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اطلب من الرب عنا ياابانا القديس البطريرك انبا (...) رئيس الكهنة ليغفر.</td>
        </tr>
    </table>
    <br>
</body>

</html>`