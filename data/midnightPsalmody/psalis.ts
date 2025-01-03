import { cross, book } from "../repeatedPrayers"

// Function to get the psali response based on the current seasons and table number
function getPsali(basetableNumber, vespers , settings) {
    const psalisMap = {
        "Sunday": TheFirstSundayPsali,
        "Monday": TheMondayPsali,
        "Tuesday": TheTuesdayPsali,
        "Wednesday": TheWednesdayPsali,
        "Thursday": TheThursdayPsali,
        "Friday": TheFridayPsali,
        "Saturday": TheSaturdayPsali,
        "PsaliWatosForStMary_Tout21 - Watos":PsaliWatosForStMary_Tout21,
        "Feast of the Annunciation - Adam": PsaliAdamForAnnunciation,
        "Great Fast - Adam - Weekdays": PsaliAdamForWeekdaysOfGreatFast,
        "Great Fast - Watos - Weekdays": PsaliWatosForWeekdaysOfGreatFast,
        "Hosanna Sunday - Adam" : PsaliAdamforHosannaSunday,
        "Hosanna Sunday - Watos" : PsaliWatosforHosannaSunday,
        "2nd Day of the Resurrection - Vespers" : AdamPsali_2ndDayOfTheResurrection_Vespers,
        "2nd Day of the Resurrection - Midnight" : AdamPsali_2ndDayOfTheResurrection_Midnight,
        "Holy 50 Days - Before Ascension - Adam" : AdamPsali_BetweenResurrectionAndAscension,
        "Holy 50 Days - Before Ascension - Watos" : WatosPsali_BetweenResurrectionAndAscension,
        "Holy 50 Days - After Ascension - Adam" : AdamPsali_BetweenAscensionAndPentecost,
        "Holy 50 Days - After Ascension - Watos" : WatosPsali_BetweenAscensionAndPentecost,
        "Feast of the Ascension - Watos" : WatosPsaliForAscension,
        "Feast of Pentecost - Adam" : AdamPsaliForPentecost,
        "Feast of Pentecost - Watos" : WatosPsaliForPentecost,
        "Entrance of the Lord Christ into the Land of Egypt - Adam" : PsaliAdamForChristEntryToEgypt,
        "Entrance of the Lord Christ into the Land of Egypt - Watos" : PsaliWatosForChristEntryToEgypt,
        "Feast of the Circumcision - Adam" : PsaliAdamForCircumcisionAndEntryIntoTheTemple,
        "Feast of the Circumcision - Watos" : PsaliWatosForCircumcisionAndEntryIntoTheTemple,
        "Entrance of the Lord Christ into the Temple - Adam" : PsaliAdamForCircumcisionAndEntryIntoTheTemple,
        "Entrance of the Lord Christ into the Temple - Watos" : PsaliWatosForCircumcisionAndEntryIntoTheTemple,
        "Thomas Sunday - Adam" : PsaliAdamForThomasSunday,
        "Thomas Sunday - Watos" : PsaliWatosForThomasSunday,
        "Feast of the Transfiguration - Adam" : PsaliAdamForTransfiguration,
        "Feast of the Transfiguration - Watos" : PsaliWatosForTransfiguration,
        "Feast of the Wedding at Cana of Galilee - Watos" : PsaliWatosForTheWeddingAtCanaOfGalilee,
        "Nayrouz (Coptic New Year) - Adam" : PsaliAdamForTheCopticNewYear,
        "Nayrouz (Coptic New Year) - Watos" : PsaliWatosForTheCopticNewYear,
        "Feast of the Cross - Adam" : PsaliAdamForTheCross,
        "Feast of the Cross - Watos" : PsaliWatosForTheCross,
    };
    
    
    
    // Function to check if the input is an array or single string
    function ensureArray(season) {
        return Array.isArray(season) ? season : [season];
    }

 
    // Simulate getting the current season from the settings provider
    const selectedDateProperties = settings.selectedDateProperties;
    const currentSeason = selectedDateProperties.copticSeason;

    let htmlOutput = '';
    const dayOfWeek = selectedDateProperties.dayOfWeekIndex ?? 0; // Default to Sunday if undefined
    const adamOrWatos = selectedDateProperties.adamOrWatos;
    const seasonsArray = ensureArray(currentSeason);
    // Iterate over each season and generate HTML for each
    seasonsArray.forEach((season, index) => {
        // concatenate season and adamOrWatos to get the key
        let seasonName;
        if (season === "2nd Day of the Resurrection") {
            seasonName = vespers ? `${season} - Vespers` : `${season} - Midnight`; 
        } else if (season === "Great Fast") {
            if (dayOfWeek >= 1 && dayOfWeek <= 6) {
                seasonName = `${season} - ${adamOrWatos} - Weekdays`;
            } else {
                seasonName = `${season} - ${adamOrWatos} - Weekends`;
            }

        } else {
            seasonName = `${season} - ${adamOrWatos}`;
        }

        const getHtmlFunction = psalisMap[seasonName];

        // Use the base table number and append a ".1", ".2", etc. for each season
        const tableNumber = `${basetableNumber}.${index + 1}`;

        // If a function exists for the season, concatenate its result
        if (getHtmlFunction) {
            htmlOutput += getHtmlFunction(tableNumber);
        }



    });

    // Find the day of the week using the index value in dayOfWeek
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = weekdays[dayOfWeek];
    const getPsaliForDay = psalisMap[day];
    const weekdayTableNumber = `${basetableNumber}.${seasonsArray.length + 2}`;
    if (typeof getPsaliForDay === 'function') {
        htmlOutput += getPsaliForDay(weekdayTableNumber);
    } else {
        console.warn(`No psali found for day: ${day}`);
    }
    

    // Return the concatenated HTML or a fallback message if no responses were found
    return htmlOutput || `<p>No psali response available for: ${seasonsArray.join(', ')}</p>`;
}


function TheFirstSundayPsali(tableNumber) {
    const [tableNumberBase, tableNumberSuffix] = tableNumber.split('.');
    const nextTableNumber = `${tableNumberBase}.${parseInt(tableNumberSuffix, 10) + 1}`;
    const secondSundayPsali = TheSecondSundayPsali(nextTableNumber);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The First Sunday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The First Sunday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀Ϩⲟⲩⲓϯ ⲛ̀ⲧⲉ Ϯⲕⲩⲣⲓⲁⲕⲏ</span>
        <span class="arabic-caption">إبصالية الأحد الأول</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I believe wherefore I spoke, with great strength, about Your great mercy, O Lord of powers.</td>
            <td class="coptic">Ⲁⲓⲛⲁϩϯ ⲉⲑⲃⲉ ⲫⲁⲓ: ⲁⲓⲥⲁϫⲓ ϧⲉⲛ ⲟⲩϫⲟⲙ: ⲉⲑⲃⲉ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ: Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ.</td>
            <td class="arabic">آمنت لذلك، تكلمت بقوة، من أجل عِظَم رحمتك، يا رب القوات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Help me my Lord, Jesus the Compassionate, to glorify my Lady, Your Mother the bride.</td>
            <td class="coptic">Ⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ Ⲡⲁϭⲟⲓⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲣⲉϥϣⲉⲛϩⲏⲧ: ⲉⲑⲣⲓϯⲱ̀ⲟⲩ ⲛ̀ⲧⲁϭⲟⲓⲥ: Ⲧⲉⲕⲙⲁⲩ ⲛ̀ϣⲉⲗⲉⲧ.</td>
            <td class="arabic">أعنَّي يا ربي، يسوع الرءوف، لأُمجد سيدتي، أُمك العروس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly, this Virgin, who is full of honor, was greatly exalted.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ: ⲁⲥϭⲓⲥⲓ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲧⲁⲓⲠⲁⲣⲑⲉⲛⲟⲥ: ⲉⲑⲙⲉϩ ⲛ̀ⲧⲁⲓⲟ.</td>
            <td class="arabic">لأنها بالحقيقة، قد تعالت جداً، هذه العذراء، الممتلئة كرامة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David spoke of her saying, "The Lord has chosen Zion, He came and dwelt in her, in order to save us."</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁϥⲥⲁϫⲓ ⲉⲑⲃⲏⲧⲥ: ϫⲉ ⲁ̀Ⲡ̀ϭⲟⲓⲥ ⲥⲱⲧⲡ ⲛ̀Ⲥⲓⲱⲛ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">داود تكلم من أجلها، قائلاً "الرب إختار صهيون، وأتى وحل فيها، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">This is Mary, who brought unto us, the eternal, freedom.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲑⲁⲓ ⲧⲉ Ⲙⲁⲣⲓⲁ: ⲉ̀ⲧⲁⲥⲓ̀ⲛⲓ ϣⲁⲣⲟⲛ: ⲛ̀ϯⲉ̀ⲗⲉⲑⲩⲣⲓⲁ: ⲛ̀ⲉ̀ⲱ̀ⲛⲓⲟⲛ.</td>
            <td class="arabic">أي مريم، التي جلبت، إلينا الحرية، الأبدية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Zachariah has said, "The golden lampstand, which was made, with golden hands."</td>
            <td class="coptic">Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲁϥϫⲟⲥ: ϫⲉ ϯⲗⲩⲭⲛⲓⲁ ⲛ̀ⲛⲟⲩⲃ: ⲑⲏⲉ̀ⲧⲁⲩⲑⲁⲙⲓⲟⲥ: ϧⲉⲛ ϩⲁⲛϫⲓϫ ⲛ̀ⲛⲟⲩⲃ.</td>
            <td class="arabic">زكريا قال، "أنها المنارة الذهب، المصنوعة، بأياد ذهبية."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Isaiah said to us, with a joyful voice, that "She will give birth to, Emmanuel for us."</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲁϥϫⲟⲥ ⲛⲁⲛ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ϫⲉ ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛⲁⲛ: ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">أشعياء قال لنا، بصوت التهليل، أنها "تلد لنا، عمانوئيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is Jerusalem, the city of our God, the throne of all ranks, of the Cherubim.</td>
            <td class="coptic">Ⲑⲁⲓ ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ: ⲡ̀ϩⲁⲣⲙⲁ ⲛ̀Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲉⲧⲟⲓ ⲛ̀ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ.</td>
            <td class="arabic">هذه هي أورشليم، مدينة إلهنا، مركبة الشاروبيم، ذات الأنواع الكثيرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Ezekiel has witnessed, and revealed this to us, saying "I saw a door, to the east.</td>
            <td class="coptic">Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲁⲩⲉⲣⲙⲉⲑⲣⲉ: ⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲙ̀ⲫⲁⲓ: ϫⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲡⲩⲗⲏ: ⲛ̀ⲥⲁ ⲛⲓⲙⲁⲛϣⲁⲓ.</td>
            <td class="arabic">حزقيال شهد، وأظهر لنا هذا، قائلاً "أني رأيت باباً، ناحية المشارق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">The Lord the Savior, entered into it, and it remained, thoroughly shut as before."</td>
            <td class="coptic">Ⲕⲩⲣⲓⲟⲥ Ⲡⲓⲣⲉϥⲛⲟϩⲉⲙ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ϣⲁⲣⲟⲥ: ⲁⲥⲟ̀ϩⲓ ⲉⲥϣⲟⲧⲉⲙ: ⲙ̀ⲡⲉⲥⲣⲏϯ ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">الرب المخلص، دخل فيه، وبقى مغلقاً، جيداً بحاله."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">All the nations sing, with different tongues, to the Theotokos, the Mother of the Messiah.</td>
            <td class="coptic">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ: ⲛⲉⲙ ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲗⲁⲥ: ⲉ̀Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲙⲁⲥⲓⲁⲥ.</td>
            <td class="arabic">كل الشعوب يسبحون، مع لغات الألسن، لوالدة الإله، أُم ماسيا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Mary the chaste, the joy of the righteous, and truly she is the joy, of the faithful.</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁ ϯⲥⲉⲙⲛⲉ: ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲫ̀ⲣⲁϣⲓ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">مريم العفيفة، بهجة الصديقين، وبالحقيقة، فرح المؤمنين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">You are the tabernacle, and the ark, which Moses has made, with great honor.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲧⲉ ϯⲥ̀ⲕⲏⲛⲏ: ⲉ̀ⲧⲁ Ⲙⲱⲩ̀ⲥⲏⲥ ⲑⲁⲙⲓⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲧⲓⲙⲏ: ⲟⲩⲟϩ ⲛ̀ϯⲕⲓⲃⲱⲧⲟⲥ.</td>
            <td class="arabic">أنتِ هي القبة، التي صنعها موسى، بعِظَم كرامة، والتابوت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Beyond all the thoughts, of the heavens, is this mysterious matter, of the mercy seat.</td>
            <td class="coptic">Ⲝⲁⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲙⲉⲩⲓ̀: ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲛ̀ϫⲉ ⲡⲁⲓϩⲱⲃ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲛ̀ⲧⲉ ⲡⲓⲓ̀ⲗⲁⲥⲧⲏⲣⲓⲟⲛ.</td>
            <td class="arabic">مُتعال عن الأفكار، السمائية، هذا الأمر العجيب، الذي للغطاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Great is the glory, of your virginity, O full of glory, O Saint Mary.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲛ̀ⲧⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ: ⲱ̀ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">عظيم هو مجد، بتوليتِك، أيتها الممتلئة مجداً، القديسة مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The honored vessel, and the lampstand, the pure censer, full of blessings.</td>
            <td class="coptic">Ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ: ⲟⲩⲟϩ ϯⲗⲩⲭⲛⲓⲁ: ϯϣⲟⲩⲣⲏ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ: ⲉⲑⲙⲉϩ ⲛ̀ⲉⲩⲗⲟⲅⲓⲁ.</td>
            <td class="arabic">القسط المُكرم، والمنارة، والمجمرة النقية، المملوءة بركة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">All the high names, of the incorporeal, did not reach the height, of your blessedness.</td>
            <td class="coptic">Ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲉⲧϭⲟⲥⲓ: ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ⲙ̀ⲡⲟⲩϣ̀ⲫⲟϩ ⲉ̀ⲡ̀ϭⲓⲥⲓ: ⲛ̀ⲧⲉ ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
            <td class="arabic">كل الأسماء العالية، التي لغير المتجسدين، لم يبلغوا إلى، عُلوَ طوباويتِك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">You resemble the rod, of Aaron, which blossomed and budded, and produced its fruit.</td>
            <td class="coptic">Ⲥⲉⲧⲉⲛⲑⲱⲛϯ ⲉ̀ⲡⲓϣ̀ⲃⲱⲧ: ⲛ̀ⲧⲉ Ⲁ̀ⲁ̀ⲣⲱⲛ: ⲉ̀ⲧⲁϥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ ⲁϥⲣⲱⲧ: ⲟⲩⲟϩ ⲁϥϯⲕⲁⲣⲡⲟⲛ.</td>
            <td class="arabic">شُبِّهتِ بعصا، هرون التي، أزهرت ونبتت، وأعطت ثمرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">You are exalted, more than the Cherubim, and honored more, than the Seraphim.</td>
            <td class="coptic">Ⲧⲉϭⲟⲥⲓ ⲉ̀ⲙⲁϣⲱ: ⲉ̀ϩⲟⲧⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲧⲉⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ϩⲟⲩⲟ̀: ⲉ̀Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ.</td>
            <td class="arabic">مُرتفعة أنت جداً، أكثر من الشاروبيم، ومكرمة أكثر، من السيرافيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God our God, you gave birth to, we glorify Him as God, and also worship Him.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ: ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ ϩⲱⲥ Ⲛⲟⲩϯ: ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">إبن الله إلهنا، ولدتِه، نمجده كإله، ونسجد له.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">He who abides in light, whom no one can approach, showed us His miracles, and you fed Him.</td>
            <td class="coptic">Ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲛ̀ⲁⲧϣ̀ϧⲱⲛⲧ ⲉ̀ⲣⲟϥ: ⲁϥⲟⲩⲱⲛϩ ⲛ̀ⲛⲉϥⲙⲏⲓⲛⲓ: ⲁ̀ⲣⲉϯ ⲉ̀ⲣⲱϯ ⲉ̀ⲣⲱϥ.</td>
            <td class="arabic">الساكن في النور، الذي لا يُدنى منه، أظهر آياته، وأرضعتِه اللبن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to you Mary, the beautiful dove, full of wisdom, the Mother of Jesus Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ: ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲉⲑⲙⲉϩ ⲛ̀ⲥⲟⲫⲓⲁ: Ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">السلام لك يا مريم، الحمامة الحسنة، الممتلئة حكمة، أُم يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">For the rest of our days, we will praise you, O full of glory, and clothed with purity.</td>
            <td class="coptic">Ⲯⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲉ̀ϩⲟⲟⲩ: ⲧⲉⲛⲉⲣⲉⲩⲫⲟⲙⲓⲛ ⲙ̀ⲙⲟ: ⲱ̀ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲧⲉϫⲟⲗϩ ⲙ̀ⲡⲓⲧⲟⲩⲃⲟ.</td>
            <td class="arabic">بقية أيامنا، نمدحِك، أيتها الممتلئة مجداً، أنتِ مشتملة بالطهارة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Be patient O Lover of Man, with Your servant, and forgive us our sins, and accept us. ${cross}</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛ̀ϩⲏⲧ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲃⲱⲕ: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ: ⲟⲩⲟϩ ϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ. ${cross}</td>
            <td class="arabic">تأن يا محب البشر، على عبدك، وإغفر لنا خطايانا، وإقبلنا إليك. ${cross}</td>
        </tr>
        </tbody>
</table>
${secondSundayPsali}
`;
 return html;
}

function TheSecondSundayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Second Sunday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Second Sunday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲙ̀Ⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ Ϯⲕⲩⲣⲓⲁⲕⲏ</span>
        <span class="arabic-caption">إبصالية الأحد الثانية</span>
    <span class="explanation-button" data-message='The Sunday Psali \"I sought after you\"'>${book}</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I sought after You, from the depths of my heart, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲁⲓⲕⲱϯ ⲛ̀ⲥⲱⲕ: ϧⲉⲛ ⲡ̀ϣⲱⲕ ⲙ̀ⲡⲁϩⲏⲧ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">طلبتك، من عمق قلبي، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Loosen for me, all the bonds of sin, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ: ⲛ̀ⲛⲓⲥ̀ⲛⲁⲩϩ ⲛ̀ⲧⲉ ⲫ̀ⲛⲟⲃⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">حل عني، رباطات الخطية، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Be a help to me, so that You may save me, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲅⲉⲛⲧⲏⲓ ⲙ̀ⲃⲟⲏ̀ⲑⲟⲥ: ⲉⲑⲣⲉⲕⲥⲱϯ ⲙ̀ⲙⲟⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">كن لي معيناً، لكي تخلصني، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">May Your goodness, come speedily to me, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲇⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲙⲁⲣⲉⲥⲧⲁϩⲟⲓ ⲛ̀ⲭⲱⲗⲉⲙ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">صلاحك، فليدركني سريعاً، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Overshadow me, with the shadow of Your wings, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲉⲕⲉⲣϧⲏⲓⲃⲓ ⲉ̀ϫⲱⲓ: ϧⲁ ⲧ̀ϧⲏⲓⲃⲓ ⲛ̀ⲧⲉ ⲛⲉⲕⲧⲉⲛϩ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">ظلِّل عليَّ، بظِل جناحيك، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">In six days You have made, all the creation, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲥⲟⲟⲩ (ⲋ) ⲅⲁⲣ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲁⲕⲑⲁⲙⲓⲟ ⲛ̀ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">في ستة أيام، صنعت كل الخليقة، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Seven times everyday, I will praise Your name, my Lord Jesus, help me.</td>
            <td class="coptic">Ϣⲁϣϥ ⲛ̀ⲥⲟⲡ ⲙ̀ⲙⲏⲛⲓ: ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">سبع مرات في اليوم، أبارك إسمك، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">All the creation, glorifies Your name, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲏⲥ ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: ⲥⲉϯⲱ̀ⲟⲩ ⲙ̀ⲡⲉⲕⲣⲁⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">ها كل البرية، تمجد إسمك، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Yours is the lordship, and the authority, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧϭⲟⲓⲥ: ⲛⲉⲙ ϯⲉⲝⲟⲩⲥⲓⲁ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">لك الربوبية، والسلطان، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Make haste O my God, so that You may save me, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲓⲱⲥ ⲙ̀ⲙⲟⲕ Ⲡⲁⲛⲟⲩϯ: ⲉⲑⲣⲉⲕⲥⲱϯ ⲙ̀ⲙⲟⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">أسرع يا إلهي، لتخلصني، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Every knee, bows down before You, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲥⲉⲕⲱⲗϫ: ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ⲉ̀ⲃⲟⲗ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">كل ركبة، تجثو أمامك، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">All the diverse tongues, together bless Your name, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲗⲁⲥ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ: ⲥⲉⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">كل الألسنة معاً، تبارك إسمك، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Turn away Your face, from all of my sins, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲙⲁⲧⲁⲥⲑⲟ ⲙ̀ⲡⲉⲕϩⲟ: ⲥⲁⲃⲟⲗ ⲛ̀ⲛⲁⲛⲟⲃⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">إصرف وجهك، عن خطاياي، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blot out O God, all my iniquities, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲛⲁⲁ̀ⲛⲟⲙⲓⲁ ⲧⲏⲣⲟⲩ: Ⲫ̀ⲛⲟⲩϯ ⲉⲕⲉ̀ⲥⲱⲗϫⲟⲩ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">جميع آثامي، يا الله إمحها، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">You know my thoughts, and You search my depths, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲝ̀ⲟⲩⲱⲛ ⲛ̀ⲛⲁⲙⲉⲩⲓ̀: ⲕ̀ϧⲟⲧϧⲉⲧ ⲛ̀ⲛⲁϭⲗⲱⲧ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ</td>
            <td class="arabic">أنت تعرف أفكاري، وتفحص كليتي، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Create in me, a clean heart, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲟⲩϩⲏⲧ ⲉϥⲟⲩⲁⲃ: ⲉⲕⲉ̀ⲥⲟⲛⲧϥ ⲛ̀ϧⲏⲧ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">قلباً طاهراً أخلقه فيَّ، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Your Holy Spirit, do not take away from me, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲙ̀ⲡⲉⲣⲟⲗϥ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">روحك القدوس، لا تنزعه منِّي، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Incline Your ears, make haste and hear me, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲣⲉⲕⲡⲉⲕⲙⲁϣϫ ⲉ̀ⲣⲟⲓ: ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ ⲛ̀ⲭⲱⲗⲉⲙ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">أمِّل سمعك إليَّ، وإستجب لي عاجلاً، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Set before me a law, in the way of Your justice, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲥⲉⲙⲛⲉ ⲛⲟⲙⲟⲥ ⲛⲏⲓ: ϩⲓ ⲫ̀ⲙⲱⲓⲧ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲑⲙⲏⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">قرِّر ليَّ ناموساً، في طريق عدلك، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Your kingdom O my God, is an eternal kingdom, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ Ⲡⲁⲛⲟⲩϯ: ⲟⲩⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲛⲉϩ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">ملكوتك يا إلهي، ملكوت أبدي، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">You are the Son of God, I believe in You, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲛ̀ⲑⲟⲕ: ⲁⲓⲛⲁϩϯ ⲉ̀ⲣⲟⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">أنت إبن الله، آمنت بك، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">You who carries the sins of the world, have mercy upon me, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ: ⲛ̀ⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲛⲁⲓ ⲛⲏⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">يا حامل خطية، العالم إرحمني، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Forgive me the multitude, of my iniquities, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡ̀ⲁ̀ϣⲁⲓ: ⲛ̀ⲧⲉ ⲛⲁⲁ̀ⲛⲟⲙⲓⲁ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">إغفر ليَّ، كثرة آثامي، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">All of the souls, together bless Your name, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ: ⲥⲉⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">كل الأنفس معاً، تبارك إسمك، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">Have patience with me, do not hasten to destroy me, my Lord Jesus, help me.</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛ̀ϩⲏⲧ ⲛⲉⲙⲏⲓ: ⲙ̀ⲡⲉⲣⲧⲁⲕⲟⲓ ⲛ̀ⲭⲱⲗⲉⲙ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">تأنَّ عليَّ، ولا تهلكني سريعاً، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">Early in the morning, I will rise and bless Your name, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ϣⲁⲓⲧⲱⲛⲧ ⲙ̀ⲫ̀ⲛⲁⲩ ⲛ̀ϣⲱⲣⲡ: ⲛ̀ⲧⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">أقوم وقت السحر، لأبارك إسمك، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">Your yoke is sweet, and Your burden is light, my Lord Jesus, help me.</td>
            <td class="coptic">Ϥ̀ϩⲟⲗϫ ⲛ̀ϫⲉ ⲡⲉⲕⲛⲁϩⲃⲉϥ: ⲧⲉⲕⲉⲧⲫⲱ ⲁⲓⲥⲓⲱ̀ⲟⲩ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">حلوٌ هو نيرك، وحملك خفيف، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">In the accepted time, hear me, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲉϥϣⲏⲡ: ⲉⲕⲉ̀ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">في زمن مقبول، إستجب ليَّ، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">O how beloved, is Your holy name, my Lord Jesus, help me.</td>
            <td class="coptic">Ϩⲱⲥ ⲟⲩϣⲟⲩⲙⲉⲛⲣⲓⲧϥ: ⲡⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">محبوب هو، إسمك القدوس، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">Disperse away from me, all of the devils, my Lord Jesus Christ, help me.</td>
            <td class="coptic">Ϫⲱⲣ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ: ⲛ̀ⲇⲓⲁⲃⲟⲗⲏ ⲛⲓⲃⲉⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">فرِّق عنِّي، كل الأبالسة، يا ربي يسوع المسيح، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">Sow within me, the seed of Your righteousness, my Lord Jesus, help me.</td>
            <td class="coptic">Ϭⲟ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧ: ⲙ̀ⲡ̀ⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲑⲙⲏⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">إغرس فيَّ، ثمرة بِرَك، يا ربي يسوع، أعنِّي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english">Grant us Your true peace, and forgive us our sins, my Lord Jesus Christ, help me. ${cross}</td>
            <td class="coptic">Ϯⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ ⲙ̀ⲙⲏⲓ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ. ${cross}</td>
            <td class="arabic">أعطنا سلامك الحقيقي، وإغفر لنا خطايانا، يا ربي يسوع المسيح، أعنِّي. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheMondayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Monday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Monday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲛⲁⲩ - Ⲁ̀ ⲛⲓⲁ̀ⲛⲁⲛϣⲟ ⲛ̀ϣⲟ</span>
        <span class="arabic-caption">إبصالية الإثنين</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Thousands and thousands, and myriads of myriads, praise and glorify, my Lord Jesus.</td>
            <td class="coptic">Ⲁ̀ ⲛⲓⲁ̀ⲛⲁⲛϣⲟ ⲛ̀ϣⲟ: ⲛⲉⲙ ⲛⲓⲁ̀ⲛⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲑ̀ⲃⲁ: ⲥⲉϩⲱⲥ ⲥⲉϯⲱ̀ⲟⲩ: ⲙ̀Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">ألوفٌ ألوفٍ، وربواتٌ ربواتٍ، يسبحون ويمجدون، ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone who says, “My Lord Jesus,” is likened to a sword, casting down the enemy.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁϫⲟⲥ: ϫⲉ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲟⲩⲟⲛ ⲟⲩⲥⲏϥⲓ ⲛ̀ⲧⲟⲧϥ: ⲉⲥⲣⲱϧⲧ ⲙ̀ⲡⲓϫⲁϫⲓ.</td>
            <td class="arabic">كل مَنْ يقول، "يا ربي يسوع،" كمَنْ بيده سيف، يصرع العدو.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly, You were exalted, in heaven, and on earth.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ: ⲁⲕϭⲓⲥⲓ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
            <td class="arabic">لأنك بالحقيقة، قد تعاليت جداً، في السموات، وعلى الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">All the righteous people, who have pleased God, meditated upon, the whole law.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲟⲥ ⲅⲁⲣ ⲛⲓⲃⲉⲛ: ⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲥⲉⲉⲣⲙⲉⲗⲉⲧⲁⲛ: ϧⲉⲛ ⲡⲓⲛⲟⲙⲟⲥ ⲧⲏⲣϥ.</td>
            <td class="arabic">كل الصديقين، الذين أرضوا الله، يدرسون، الناموس كله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And God is always, present before them, and His holy name is always in their mouths.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ Ⲫ̀ⲛⲟⲩϯ ⲭⲏ: ⲙ̀ⲡⲟⲩⲙ̀ⲑⲟ ⲉ̀ⲃⲟⲗ: ⲉ̀ⲣⲉ ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">والله كائن، أمامهم، وإسمه القدوس، في أفواههم كل حين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Exceedingly great, are Your compassions, O fair Judge, O my Lord Jesus.</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ: Ⲡⲓⲣⲉϥϯϩⲁⲡ ⲙ̀ⲙⲏⲓ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">كثيرة جداً، هي رأفاتك، أيها الحاكم العادل، يا ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">God is Emmanuel, the true Food, the immortal, Tree of life.</td>
            <td class="coptic">Ⲏⲗ ⲡⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: Ϯⲧ̀ⲣⲟⲫⲏ ⲙ̀ⲙⲏⲓ: Ⲡⲓϣ̀ϣⲏⲛ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ: ⲫⲁ ϯⲙⲉⲧⲁⲑⲙⲟⲩ.</td>
            <td class="arabic">الله هو عمانوئيل، الطعام الحقيقي، شجرة الحياة، العديمة الموت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Gather all, of my senses, to praise and glorify, my Lord Jesus.</td>
            <td class="coptic">Ⲑⲱⲟⲩϯ ⲉ̀ϧⲟⲩⲛ ϩⲁⲣⲟⲓ: ⲛⲁⲗⲟⲅⲓⲥⲙⲟⲥ ⲧⲏⲣⲟⲩ: ⲛ̀ⲧⲁϩⲱⲥ ⲛ̀ⲧⲁϯⲱ̀ⲟⲩ: ⲙ̀Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">تجمَّعي فيَّ، يا كل حواسي، لأُسبح وأُمجد، ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus is my Lord, Jesus is my God, Jesus is the hope, of Christians.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ ⲡⲉ Ⲡⲁϭⲟⲓⲥ: Ⲓⲏⲥⲟⲩⲥ ⲡⲉ Ⲡⲁⲛⲟⲩϯ: Ⲓⲏⲥⲟⲩⲥ ⲡⲉ ⲧ̀ϩⲉⲗⲡⲓⲥ: ⲛ̀Ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
            <td class="arabic">يسوع هو ربي، يسوع هو إلهي، يسوع هو رجاء، المسيحيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">In every small thing, we remember and glorify, Your holy name, O my Lord Jesus.</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲕⲟⲩϫⲓ ⲕⲟⲩϫⲓ: ⲧⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲡⲉⲕⲙⲉⲩⲓ: ⲧⲉⲛϯⲱ̀ⲟⲩ ⲙ̀ⲡⲉⲕⲣⲁⲛ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">في القليل القليل، نذكرك، ونُمجد أسمك، يا ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">All bad defects, let us cast away, and let us purify our hearts, in the name of my Lord.</td>
            <td class="coptic">Ⲗⲱⲓϫⲓ ⲛⲓⲃⲉⲛ ⲉⲧϩⲱⲟⲩ: ⲙⲁⲣⲉⲛⲭⲁⲩ ⲛ̀ⲥⲱⲛ: ⲙⲁⲣⲉⲛⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛϩⲏⲧ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">كل العلل الرديئة، فلنتركها عنا، ولنطهر قلوبنا، بإسم الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Let the name of the Lord, abide within us, so that He may shine upon, our inner being.</td>
            <td class="coptic">Ⲙⲁⲣⲉ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ϣⲱⲡⲓ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ: ⲛ̀ⲧⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ: ϧⲉⲛ ⲡⲉⲛⲣⲱⲙⲓ ⲉⲧⲥⲁϧⲟⲩⲛ.</td>
            <td class="arabic">فليكن إسم الرب، فينا، ليضئ علينا، في إنساننا الداخلي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Who is likened unto You, O Lord among the gods, You are the true God, the Performer of miracles.</td>
            <td class="coptic">Ⲛⲓⲙ ⲅⲁⲣ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ: ⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ Ⲡ̀ϭⲟⲓⲥ: ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲉⲧⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛϣ̀ⲫⲏⲣⲓ</td>
            <td class="arabic">مَنْ في الآلهة، يُشبهك يا رب، أنت هو الإله الحقيقي، الصانع العجائب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You indeed, with Your good Father, and the Holy Spirit, O my Lord Jesus.</td>
            <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">مُبارَك أنت بالحقيقة، يا ربي يسوع، مع أبيك الصالح، والرُّوح القُدُس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">An aroma, that is very expensive, is Your holy name, O my Lord Jesus.</td>
            <td class="coptic">Ⲟⲩⲁ̀ⲣⲱⲙⲁⲧⲁ: ⲉ̀ⲛⲁϣⲉⲛⲥⲟⲩⲉⲛϥ: ⲡⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">عنبر، كثير الثمن، هو إسمك القدوس، يا ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The true Lamb, of God the Father, have mercy on us, in Your kingdom.</td>
            <td class="coptic">Ⲡⲓϩⲓⲏⲃ ⲙ̀ⲙⲏⲓ: ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ: ⲁ̀ⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">أيها الحمَل الحقيقي، الذي لله الآب، إصنع معنا رحمة، في ملكوتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">For the mouth of Your Father, has given witness for You, saying “You are My Son, and today I gave birth to You.”</td>
            <td class="coptic">Ⲣⲱϥ ⲅⲁⲣ ⲙ̀Ⲡⲉⲕⲓⲱⲧ: ⲉⲧⲟⲓ ⲙ̀ⲙⲉⲑⲣⲉ ϧⲁⲣⲟⲕ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡⲁϣⲏⲣⲓ: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ ⲙ̀ⲫⲟⲟⲩ.</td>
            <td class="arabic">لأن فم أبيك، يشهد لك، "أنك أنت هو إبني، وأنا اليوم ولدتك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">You are surrounded, by the Cherubim, and the Seraphim, and they can not see You.</td>
            <td class="coptic">Ⲥⲉⲧⲱⲟⲩⲛⲟⲩ ϩⲁⲣⲟⲕ: ⲛ̀ϫⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ⲥⲉϣ̀ⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲁⲛ.</td>
            <td class="arabic">يقوم حولك، الشاروبيم، والسِّرافيم، ولا يستطيعون أن ينظروك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We look at You every day, upon the altar, and we partake of Your Body, and Your honored Blood.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲙ̀ⲙⲏⲛⲓ: ϩⲓϫⲉⲛ ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ: ⲧⲉⲛϭⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲉⲕⲥⲱⲙⲁ: ⲛⲉⲙ Ⲡⲉⲕⲥ̀ⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ.</td>
            <td class="arabic">ونحن ننظرك كل يوم، على المذبح، ونتناول من جسدك، ودمك الكريمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">All the blessings, of the law, do not have anything, that resembles You.</td>
            <td class="coptic">Ⲩⲙⲛⲟⲗⲟⲅⲓⲁ ⲛⲓⲃⲉⲛ: ⲉⲧ ϧⲉⲛ ⲡⲓⲛⲟⲙⲟⲥ ⲧⲏⲣϥ: ⲙ̀ⲙⲟⲛ ϩ̀ⲗⲓ ⲛ̀ϧⲏⲧⲟⲩ: ϥ̀ⲧⲉⲛⲑⲱⲛⲧ ⲉ̀ⲣⲟⲕ.</td>
            <td class="arabic">بركات، الناموس، ليس فيها شئ، يُشبهك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">This is the true stone, that is of great price, which the merchant sold, all that he had and bought it.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲏⲓ: ⲉⲑⲛⲁϣⲉⲛⲥⲟⲩⲉⲛϥ: ⲉ̀ⲧⲁ ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲉ̀ϣⲱⲧ: ϯⲙ̀ⲡⲉⲧⲉ ⲛ̀ⲧⲁϥ ⲁϥϣⲟⲡϥ.</td>
            <td class="arabic">هذا هو الحجر الحقيقي، الكثير الثمن، الذي باع الرجل التاجر، كل ماله واشتراه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Leave now for us, this stone, to shine upon us, in our inner being.</td>
            <td class="coptic">Ⲭⲱ ⲛⲁⲛ ϩⲱⲛ ϯⲛⲟⲩ: ⲙ̀ⲡⲁⲓⲱ̀ⲛⲓ ⲫⲁⲓ: ⲛ̀ⲧⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ: ϧⲉⲛ ⲡⲉⲛⲣⲱⲙⲓ ⲉⲧⲥⲁϧⲟⲩⲛ.</td>
            <td class="arabic">أُترك لنا نحن أيضاً، الآن هذا الحجر، ليضئ علينا، في إنساننا الداخلي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The adornment of our souls, and the joy of our hearts, is Your holy name, O my Lord Jesus.</td>
            <td class="coptic">Ⲯⲟⲗⲥⲉⲗ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲡ̀ⲉⲣⲟⲩⲱⲧ ⲛ̀ⲛⲉⲛϩⲏⲧ: ⲡⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">زينة نفوسنا، وفرح قلوبنا، هو إسمك القدوس، يا ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O the Kind One, and the Merciful, plenteous in mercies, O my Lord Jesus.</td>
            <td class="coptic">Ⲱ̀ Ⲡⲓϣⲁⲛⲁϩ̀ⲑⲏϥ: ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏⲧ: ⲫⲁ ⲡⲓⲙⲏϣ ⲛ̀ⲛⲁⲓ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">أيها المتحنن، الرؤوف، الكثير الرحمة، يا ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">The Cherubim clap, with their wings, and praise and glorify, my Lord Jesus.</td>
            <td class="coptic">Ϣⲁⲩϭⲁⲕ ⲛ̀ⲛⲟⲩⲧⲉⲛϩ: ⲛ̀ϫⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ϣⲁⲩϩⲱⲥ ϣⲁⲩϯⲱ̀ⲟⲩ: ⲙ̀Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">الشاروبيم، يُصفقون بأجنحتهم، ويُسبحون ويُمجدون، ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">The sun and moon, shall disappear in time, but You are the same, and Your years will never end.</td>
            <td class="coptic">Ϥ̀ⲛⲁϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫ̀ⲣⲏ: ⲛⲉⲙ ⲡⲓⲓⲟϩ ϧⲉⲛ ⲡⲟⲩⲥⲏⲟⲩ: ⲛ̀ⲑⲟⲕ ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ: ⲛⲉⲕⲣⲟⲙⲡⲓ ⲙ̀ⲡⲁⲩⲙⲟⲩⲛⲕ.</td>
            <td class="arabic">تغيب الشمس والقمر، في زمانهما، وأنت هو أنت، وسنوك لن تفنى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">By the care, of Your goodness, You bound the heavens, and You came down to us.</td>
            <td class="coptic">Ϧⲉⲛ ⲟⲩⲙⲉⲧϥⲁⲓⲣⲱⲟⲩϣ: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲁⲕⲣⲓⲕⲓ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁⲕⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ϣⲁⲣⲟⲛ.</td>
            <td class="arabic">بأهتمام، صلاحك، طأطأت السموات، ونزلت إلينا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">As a true physician, and a healer, You have healed all, our sicknesses.</td>
            <td class="coptic">Ϩⲱⲥ ⲥⲏⲓⲛⲓ ⲙ̀ⲙⲏⲓ: ⲟⲩⲟϩ ⲛⲓⲣⲉϥϯⲫⲁϧⲣⲓ: ⲁⲕⲉⲣⲑⲉⲣⲁⲡⲉⲩⲓⲛ: ⲛ̀ⲛⲉⲛϣⲱⲛⲓ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">كمثل طبيب حقيقي، ومُشفٍ، داويت جميع، أمراضنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">Behold us, O my Lord Jesus, with the kind eye, of Your goodness.</td>
            <td class="coptic">Ϫⲟⲩϣⲧ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ϧⲉⲛ ⲟⲩⲃⲁⲗ ⲛ̀ⲛⲁⲏⲧ: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">أنظر إلينا، يا ربي يسوع، بعين التحنن، التي لصلاحك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">Implant in us, an upright heart, that we may bless You, O my Lord Jesus.</td>
            <td class="coptic">Ϭⲟ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ: ⲛ̀ⲟⲩϩⲏⲧ ⲉϥⲥⲟⲩⲧⲱⲛ: ⲉⲑⲣⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">وأغرس فينا، قلباً مستقيماً، لكي نباركك، يا ربي يسوع.</td>
        </tr>
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english">I entreat You, O my Lord Jesus, to have mercy upon us, in Your kingdom. ${cross}</td>
            <td class="coptic">Ϯϯϩⲟ ⲉ̀ⲣⲟⲕ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁ̀ⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ. ${cross}</td>
            <td class="arabic">أبتهل إليك، يا ربي يسوع، أن ترحمنا، في ملكوتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheTuesdayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Tuesday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Tuesday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀ⲧⲉ Ⲡⲓϣⲟⲙⲧ - Ⲁ̀ⲙⲟⲩ ϣⲁⲣⲟⲛ ⲙ̀ⲫⲟⲟⲩ</span>
        <span class="arabic-caption">إبصالية الثلاثاء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Come to us today, O Christ our Master, shine upon us, with Your exalted divinity.</td>
            <td class="coptic">Ⲁ̀ⲙⲟⲩ ϣⲁⲣⲟⲛ ⲙ̀ⲫⲟⲟⲩ: ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲑⲛⲟⲩϯ ⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">تعال إلينا اليوم، يا سيدنا المسيح، وأضئ علينا، بلاهوتك العالي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Send to us, this great grace, of Your Holy Spirit, the Paraclete.</td>
            <td class="coptic">Ⲟⲩⲱⲣⲡ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲙ̀ⲡⲁⲓⲛⲓϣϯ ⲛ̀ϩ̀ⲙⲟⲧ: ⲛ̀ⲧⲉ Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">أرسل لنا هذه، النعمة العظيمة، التي لروحك، القدوس المُعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">So that I may speak, with great honor, about Your holy, and blessed name.</td>
            <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲁⲥⲁϫⲓ: ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ ⲛ̀ⲧⲁⲓⲟ: ⲉⲑⲃⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲟⲩⲟϩ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.</td>
            <td class="arabic">لكى أنطق، بكرامة يسيرة، من أجل إسمك، القدوس المبارك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">This is He who was glorified, by the mouths of, Your righteous saints, who lived upon the earth.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲧⲁϥϭⲓⲱ̀ⲟⲩ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲓⲑ̀ⲙⲏⲓ: ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ: ⲉⲧϣⲟⲡ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
            <td class="arabic">هذا الذي تمجد، في أفواه، قديسيك الأبرار، سكان الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">By those wandering people, in the barren mountains, threatened by hunger and thirst, frost and cold.</td>
            <td class="coptic">Ⲛⲁⲓ ⲉⲧⲥⲱⲣⲉⲙ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲛⲓⲧⲱⲟⲩ ⲛ̀ϣⲁϥⲉ: ϧⲉⲛ ⲟⲩϩ̀ⲕⲟ ⲛⲉⲙ ⲟⲩⲓ̀ⲃⲓ: ϧⲉⲛ ⲟⲩϫⲁϥ ⲛⲉⲙ ⲟⲩⲱ̀ϫⲉⲃ.</td>
            <td class="arabic">هؤلاء التائهين، في الجبال المقفرة، بالجوع والعطش، والبرد والصقيع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">They were needy and suffering, and afflicted, according to, Paul the apostle.</td>
            <td class="coptic">Ⲉⲩⲉⲣϧⲁⲉ̀ ⲉⲩϩⲉϫϩⲱϫ: ⲟⲩⲟϩ ⲉⲩϭⲓⲙ̀ⲕⲁϩ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡⲁⲩⲗⲟⲥ: ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">مُعوَزين، مُتضايقين، مُتألِّمين كقول، بولس الرسول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">But Your holy name, O my Lord Jesus, upheld and delivered them, in all their sufferings.</td>
            <td class="coptic">Ⲁⲗⲗⲁ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲉⲧϣⲟⲡ ⲛⲱⲟⲩ ⲛ̀ⲛⲁϣϯ: ϧⲉⲛ ⲛⲟⲩϩⲟϫϩⲉϫ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">لكن أسمك القدوس، يا ربي يسوع، يكون لهم ناصراً، في جميع ضيقاتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Your holy name, O my Lord Jesus, saved them from all, their afflictions.</td>
            <td class="coptic">Ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲉⲑⲛⲟϩⲉⲙ ⲙ̀ⲙⲱⲟⲩ: ϧⲉⲛ ⲛⲟⲩⲑ̀ⲗⲓⲯⲓⲥ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">إسمك القدوس، يا ربي يسوع، هو ينجيهم، من جميع شدائدهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">For them it was, a living food, which filled their souls, and their bodies too.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲉⲧϣⲟⲡ ⲛⲱⲟⲩ: ⲛ̀ⲟⲩⲧ̀ⲣⲟⲫⲏ ⲛ̀ⲱⲛϧ: ⲉⲥϣⲁⲛϣ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ: ⲛⲉⲙ ⲛⲟⲩⲥⲱⲙⲁ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">هو يكون لهم، طعام حياة، تقتات به نفوسهم، وأجسادهم معاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">For them it was, a fountain of living water, sweeter than honey, in their mouths.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲉⲧϣⲟⲡ ⲛⲱⲟⲩ: ⲛ̀ⲟⲩⲙⲟⲩⲙⲓ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ⲱⲛϧ: ⲉⲥϩⲟⲗϫ ϧⲉⲛ ⲧⲟⲩϣ̀ⲃⲱⲃⲓ: ⲉ̀ϩⲟⲧⲉ ⲡⲓⲉ̀ⲃⲓⲱ.</td>
            <td class="arabic">هو يكون لهم، ينبوع ماء حياة، حلواً في حناجرهم، أكثر من العسل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">When they call upon it, their hearts rejoiced, and their bodies, blossomed.</td>
            <td class="coptic">Ⲁⲩϣⲁⲛⲫⲓⲣⲓ ⲉ̀ⲣⲟϥ: ϣⲁⲣⲉ ⲡⲟⲩϩⲏⲧ ⲟⲩⲛⲟϥ: ⲛ̀ⲧⲉⲥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲧⲟⲩⲕⲉⲥⲁⲣⲝ.</td>
            <td class="arabic">إذا أخبروا به، تفرح قلوبهم، وتزهر، أجسادهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">When they uttered it, their minds were enlightened, and their hearts ascended, to the heights. ${cross}</td>
            <td class="coptic">Ⲁⲩϣⲁⲛⲥⲁϫⲓ ⲉ̀ⲣⲟϥ: ϣⲁⲣⲉ ⲡⲟⲩⲛⲟⲩⲥ ϭⲓⲟⲩⲱⲓⲛⲓ: ⲛ̀ⲧⲉϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϭⲓⲥⲓ: ⲛ̀ϫⲉ ⲡⲟⲩⲕⲉϩⲏⲧ. ${cross}</td>
            <td class="arabic">إذ نطقوا به، تستنير عقولهم، وترتفع إلى، العلاء قلوبهم. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheWednesdayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Wednesday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Wednesday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀ⲧⲉ Ⲡⲓϥ̀ⲧⲟⲟⲩ - Ⲙⲁⲣⲟⲩⲟⲩⲛⲟϥ ⲛ̀ⲧⲟⲩⲑⲉⲗⲏⲗ</span>
        <span class="arabic-caption">إبصالية الأربعاء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let them rejoice and be happy, those who seek the Lord, who are constantly, calling upon His holy name.</td>
            <td class="coptic">Ⲙⲁⲣⲟⲩⲟⲩⲛⲟϥ ⲛ̀ⲧⲟⲩⲑⲉⲗⲏⲗ: ⲛ̀ϫⲉ ⲛⲏⲉⲧⲕⲱϯ ⲛ̀ⲥⲁ Ⲡ̀ϭⲟⲓⲥ: ⲛⲏⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ϧⲉⲛ ⲑ̀ⲙⲉⲗⲉⲧⲏ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">فليفرح ويتهلل، طالبوا الرب الملازمون، كل حين في تلاوة، إسمه القدوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">These are the trees, that David the psalmist spoke about, for they are planted by the rivers of water, bringing forth perfect fruit.</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲉ ⲛⲓϣ̀ϣⲏⲛ ⲉ̀ⲧⲁϥⲥⲁϫⲓ ⲉⲑⲃⲏⲧⲟⲩ: ⲛ̀ϫⲉ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ⲇⲉ ⲉⲩⲣⲏⲧ ϧⲁⲧⲉⲛ ⲛⲓϥⲟⲓ ⲙ̀ⲙⲱⲟⲩ: ⲉⲩϯⲕⲁⲣⲡⲟⲥ ⲉϥϫⲏⲕ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">هؤلاء هم الأشجار التي، تكلم من أجلها المُرتِّل داود، أنها نابتة عند مجاري المياه، تعطي ثمرة كاملة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">The river of water is our Savior, Jesus Christ our Lord, and the souls of those who abide, in Him will live forever.</td>
            <td class="coptic">Ϯϥⲟⲓ ⲙ̀ⲙⲱⲟⲩ ⲡⲉ Ⲡⲉⲛⲥⲱⲧⲏⲣ: Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲏⲉⲑⲛⲁϣⲱⲡⲓ ⲉⲩⲙⲏⲛ ⲉ̀ⲣⲟϥ: ⲥⲉⲛⲁⲱⲛϧ ⲛ̀ϫⲉ ⲧⲟⲩⲯⲩⲭⲏ.</td>
            <td class="arabic">مجرى الماء هو مُخلِّصنا، ربنا يسوع المسيح، والملازمون له، تحيا نفوسهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">They teach us in the holy books, the breaths of God, to be merciful to the creation, which He has created.</td>
            <td class="coptic">Ⲥⲉϯⲥ̀ⲃⲱ ⲛⲁⲛ ϧⲉⲛ ⲛⲓⲅ̀ⲣⲁⲫⲏ ⲉⲑⲟⲩⲁⲃ: ⲛⲓⲛⲓϥⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ⲉⲑⲣⲉⲛϣⲱⲡⲓ ⲉⲛⲟⲓ ⲛ̀ⲛⲁⲏⲧ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲥⲱⲛⲧ ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟϥ.</td>
            <td class="arabic">يعلموننا في الكتب المقدسة، أنفاس الله، أن نكون رحومين، على الخليقة التي خلقها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And also “Love, will never fail,” as said by the wise, Paul the Apostle.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ϫⲉ ϯⲁ̀ⲅⲁⲡⲏ: ⲙ̀ⲡⲁⲥϩⲉⲓ ⲉ̀ⲃⲟⲗ ⲉ̀ⲛⲉϩ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲥⲟⲫⲟⲥ: Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">وأيضاً "أن المحبة، لا تسقط أبداً،" كقول الحكيم، بولس الرسول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">The love that, the holy apostle speaks of, is the name of salvation, of our Lord Jesus Christ.</td>
            <td class="coptic">Ϯⲁ̀ⲅⲁⲡⲏ ⲉ̀ⲧⲁϥⲥⲁϫⲓ ⲉⲑⲃⲏⲧⲥ: ⲛ̀ϫⲉ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ: ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">المحبة التي تكلم من أجلها، الرسول القديس، أي إسم الخلاص، الذي لربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">When we love the name of salvation, of our Lord Jesus Christ, and have mercy upon each other, we fulfill all the law.</td>
            <td class="coptic">Ⲉ̀ϣⲱⲡ ⲁⲛϣⲁⲛⲙⲉⲛⲣⲉ ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ: ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉⲛⲉⲣ ⲡⲓⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲉ̀ⲣⲏⲟⲩ: ϣⲁⲛϫⲱⲕ ⲙ̀ⲡⲓⲛⲟⲙⲟⲥ ⲧⲏⲣϥ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">إذا ما أحببنا إسم الخلاص، الذي لربنا يسوع المسيح، وصنعنا الرحمة بعضنا مع بعض، نُكمل كل الناموس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Through mercy, Abraham was pleased, to host God, and His holy angels.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ϯⲙⲉⲑⲛⲁⲏⲧ: ⲁϥϯⲙⲁϯ ⲛ̀ϫⲉ Ⲁⲃⲣⲁⲁⲙ: ⲉⲑⲣⲉ Ⲫ̀ⲛⲟⲩϯ ϫⲱⲓⲗⲓ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲉϥⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">من قِبَل الرحمة، سُرَّ إبراهيم، أن يضيف الله، مع ملائكته المقدسين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Through mercy, the righteous Lot was saved, from the tribulations, that came upon Sodom.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ϯⲙⲉⲑⲛⲁⲏⲧ: ⲁϥⲛⲟϩⲉⲙ ⲛ̀ϫⲉ Ⲗⲱⲧ ⲡⲓⲑ̀ⲙⲏⲓ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲕⲩⲛⲇⲓⲛⲟⲥ ⲉⲑⲛⲁϣⲧ: ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ Ⲥⲟⲇⲟⲙⲁ.</td>
            <td class="arabic">من قِبَل الرحمة، خَلُصَ لوط البار، من الشدة الصعبة، التي أتت على سدوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Through mercy, Cornelius was worthy, to be baptized, at the hands of our father Peter.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ϯⲙⲉⲑⲛⲁⲏⲧ: ⲁϥⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲉ Ⲕⲟⲣⲛⲏⲗⲓⲟⲥ: ⲉⲑⲣⲉϥϭⲓ ⲙ̀ⲡⲓⲃⲁⲡⲧⲓⲥⲙⲁ: ϧⲉⲛ ⲛⲉⲛϫⲓϫ ⲙ̀ⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ.</td>
            <td class="arabic">من قِبَل الرحمة، إستحق كرنيليوس، أن ينال الصبغة، من يدي أبينا بطرس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">If we are needy, for the money of this world, and we have nothing, to offer as alms.</td>
            <td class="coptic">Ⲓⲥϫⲉ ⲅⲁⲣ ⲧⲉⲛⲟⲓ ⲛ̀ϧⲁⲉ̀: ϧⲉⲛ ⲛⲓⲭ̀ⲣⲏⲙⲁ ⲛ̀ⲧⲉ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ: ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲁⲛ ⲛ̀ϩ̀ⲗⲓ ⲙ̀ⲙⲁⲩ: ⲉⲑⲣⲉⲛⲧⲏⲓⲧⲟⲩ ⲙ̀ⲙⲉⲑⲛⲁⲏⲧ.</td>
            <td class="arabic">فإن كنا معوزين، من أموال هذا العالم، وليس لنا شئ، لكي نعطيه صدقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Yet we truly have, the precious pearl of great price, which is the sweet name full of glory, of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲟⲩⲟⲛ ⲛ̀ⲧⲁⲛ ⲙ̀ⲡⲓⲁ̀ⲛⲁⲙⲏⲓ: ⲡⲓⲙⲁⲣⲅⲁⲣⲓⲧⲏⲥ ⲉⲑⲛⲁϣⲉⲛⲥⲟⲩⲉⲛϥ: ⲡⲓⲣⲁⲛ ⲉⲧϩⲟⲗϫ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">فلنا الجوهرة اللؤلؤة، الكثيرة الثمن، الإسم الحلو المملوء مجداً، الذي لربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">When we continue to keep Him, in our inner being, He will make us rich, that we can give to others.</td>
            <td class="coptic">Ⲉ̀ϣⲱⲡ ⲁⲛϣⲁⲛⲙⲟⲩⲛ ⲉ̀ⲣⲟϥ: ϧⲉⲛ ⲡⲉⲛⲣⲱⲙⲓ ⲉⲧⲥⲁϧⲟⲩⲛ: ϥ̀ⲛⲁⲁⲓⲧⲉⲛ ⲛ̀ⲣⲁⲙⲁⲟ̀: ϣⲁ ⲛ̀ⲧⲉⲛϯ ⲛ̀ϩⲁⲛⲕⲉⲭⲱⲟⲩⲛⲓ.</td>
            <td class="arabic">إذا ما لازمناه، في إنساننا الداخلي، فهو يجعلنا أغنياء، حتى نعطي آخرين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">We do not ask for, the wealth of this world, but for the salvation of our souls, by calling upon His holy name. ${cross}</td>
            <td class="coptic">Ⲛⲓⲭ̀ⲣⲏⲙⲁ ⲁⲛ ⲛ̀ⲧⲉ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ: ⲉⲑⲛⲁⲥⲓⲛⲓ ⲉ̀ⲧⲉⲛⲕⲱϯ ⲛ̀ⲥⲱⲟⲩ: ⲁⲗⲗⲁ ⲫ̀ⲛⲟϩⲉⲙ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ: ϧⲉⲛ ⲑ̀ⲙⲉⲗⲉⲧⲏ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. ${cross}</td>
            <td class="arabic">ليست أموال هذا العالم، الزائل التي نطلبها، بل خلاص نفوسنا، بتلاوة إسمه القدوس. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheThursdayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Thursday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Thursday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀ⲧⲉ Ⲡⲓⲧ̀ⲓⲟⲟⲩ - Ⲗⲟⲓⲡⲟⲛ ⲅⲁⲣ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ</span>
        <span class="arabic-caption">إبصالية الخميس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Once more O my beloved, let us keep away, the evil inclinations of our hearts, that lead us to sin.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲅⲁⲣ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ: ⲙⲁⲣⲉⲛϩⲓⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲛ̀ⲛⲉⲛⲟⲩⲱϣ ⲛ̀ϩⲏⲧ ⲉⲧϩⲱⲟⲩ: ⲉⲧⲥⲱⲕ ⲙ̀ⲙⲟⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲫ̀ⲛⲟⲃⲓ.</td>
            <td class="arabic">وأيضاً يا أحبائي، فلنطرح عنا، ميول قلوبنا الرديئة، التي تجذبنا إلى الخطية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Let us incessantly, bless the name of salvation, that is for our Lord Jesus Christ, proclaiming and saying:</td>
            <td class="coptic">Ⲛ̀ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ: ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲉⲧⲁⲑⲙⲟⲩⲛⲕ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">ولنبارك إسم الخلاص، الذي لربنا يسوع المسيح، بدون إنقطاع، صارخين قائلين:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">O my Lord Jesus Christ, the Begotten of the Father, before all ages, have mercy upon us according to Your great mercy.</td>
            <td class="coptic">Ϫⲉ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">يا ربي يسوع المسيح، المولود من الآب، قبل كل الدهور، إرحمنا كعظيم رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">O my Lord Jesus Christ, who was born of the Virgin, in Bethlehem of Judea, save us and have mercy upon us.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ Ϯⲓⲟⲩⲇⲉⲁ̀: ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الذي ولدته العذراء، في بيت لحم اليهودية، خلِّصنا وإرحمنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">O my Lord Jesus Christ, who was baptized in the Jordan, purify our souls, from the defilement of sin.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲱⲙⲥ ϧⲉⲛ Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ: ⲉⲕⲉ̀ⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡ̀ⲑⲱⲗⲉⲃ ⲛ̀ⲧⲉ ⲫ̀ⲛⲟⲃⲓ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الذي إعتمد في الأردن، طَهِّر نفوسنا، من دنس الخطية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">O my Lord Jesus Christ, who fasted on our behalf, forty days and forty nights, save us and have mercy upon us.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛ̀ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϫⲱⲣϩ: ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الذي صام عنا، أربعين يوماً وأربعين ليلة، خلِّصنا وإرحمنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">O my Lord Jesus Christ, who was crucified upon the Cross, crush Satan down, under our feet.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲉⲕⲉ̀ϧⲟⲙϧⲉⲙ ⲙ̀Ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ: ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉⲛϭⲁⲗⲁⲩϫ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الذي صُلب على الصليب، إسحق الشيطان، تحت أقدامنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">O my Lord Jesus Christ, who was placed in the tomb, trample down for us, the sting of death.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲭⲁϥ ϧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ: ⲉⲕⲉ̀ϧⲟⲙϧⲉⲙ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ: ⲛ̀ϯⲥⲟⲩⲣⲓ ⲛ̀ⲧⲉ ⲫ̀ⲙⲟⲩ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الذي وُضع في القبر، إسحق عنا، شوكة الموت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">O my Lord Jesus Christ, who rose from the dead, and ascended to the heavens, raise us with Your power.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉⲕⲉ̀ⲧⲟⲩⲛⲟⲥⲧⲉⲛ ϧⲉⲛ ⲧⲉⲕϫⲟⲙ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الذي قام من بين الأموات، وصعد إلى السموات، أقِمنا بقوتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">O my Lord Jesus Christ, who will come in His Second Appearance, deal with us lovingly, as we stand before Your fearful throne.</td>
            <td class="coptic">Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉⲑⲛⲏⲟⲩ ϧⲉⲛ Ⲧⲉϥⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲙ̀Ⲡⲁⲣⲟⲩⲥⲓⲁ: ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛ̀ⲁ̀ⲅⲁⲡⲏ ⲛⲉⲙⲁⲛ: ϧⲉⲛ ⲡⲉⲕⲃⲏⲙⲁ ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ.</td>
            <td class="arabic">يا ربي يسوع المسيح، الآتي في ظهوره الثاني، إصنع معنا محبة، في منبرك المخوف.</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">For by Your own will, and the pleasure of Your Father, and the Holy Spirit, You came and saved us. ${cross}</td>
            <td class="coptic">Ϫⲉ ϧⲉⲛ ⲡⲉⲕⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉⲕⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁⲕⲓ̀ ⲟⲩⲟϩ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">لأنك بإرادتك وحدك، ومسرة أبيك، والرُّوح القُدُس، أتيت وخلَّصتنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheFridayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Friday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Friday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀ⲧⲉ Ϯⲡⲁⲣⲁⲥ̀ⲕⲉⲩⲓ̀ - Ⲁ̀ⲗⲏⲑⲟⲥ ⲅⲁⲣ ⲁⲓϯ ⲙ̀ⲡⲁⲟⲩⲓ̀</span>
        <span class="arabic-caption">إبصالية الجمعة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">For truly I approached, a great Prince, which is the name of salvation, of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲁ̀ⲗⲏⲑⲟⲥ ⲅⲁⲣ ⲁⲓϯ ⲙ̀ⲡⲁⲟⲩⲓ̀: ⲉ̀ⲟⲩⲛⲓϣϯ ⲛ̀ⲕⲉⲫⲁⲗⲉⲟⲛ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩⲅⲁⲓ: ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">بالحقيقة قد تقدمت، إلى رأس عظيم، هو إسم الخلاص الذي، لربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Our Lord Jesus Christ, gave a sign to His servants, who do fear him, to escape from the face of the bows.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϯⲛ̀ⲟⲩⲙⲏⲓⲛⲓ ⲛ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ: ⲛⲏⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲉⲑⲣⲟⲩⲫⲱⲧ ⲉ̀ⲃⲟⲗ ϧⲁ ⲧ̀ϩⲏ ⲙ̀ⲡ̀ϩⲟ ⲛ̀ⲟⲩⲫⲓⲧ.</td>
            <td class="arabic">ربنا يسوع المسيح، أعطى علامة لعبيده، الذين يخافونه، لكي يهربوا من وجه القوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Our Lord Jesus Christ, gave a sign to His servants, who do fear Him, to shut the mouths of the lions.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϯⲛ̀ⲟⲩⲙⲏⲓⲛⲓ ⲛ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ: ⲛⲏⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲉⲑⲣⲟⲩⲑⲱⲙ ⲛ̀ⲣⲱⲟⲩ ⲛ̀ⲛⲓⲙⲟⲩⲓ̀.</td>
            <td class="arabic">ربنا يسوع المسيح، أعطى علامة لعبيده، الذين يخافونه، لكي يسدوا أفواه الأسود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Our Lord Jesus Christ, gave a sign to His servants, who do fear Him, to put out the power of the fire.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϯⲛ̀ⲟⲩⲙⲏⲓⲛⲓ ⲛ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ: ⲛⲏⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲉⲑⲣⲟⲩⲱ̀ϣⲉⲙ ⲛ̀ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ ⲡⲓⲭ̀ⲣⲱⲙ.</td>
            <td class="arabic">ربنا يسوع المسيح، أعطى علامة لعبيده، الذين يخافونه، لكي يطفئوا قوة النار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Our Lord Jesus Christ, gave a sign to His servants, who do fear Him, to cast out the devils.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϯⲛ̀ⲟⲩⲙⲏⲓⲛⲓ ⲛ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ: ⲛⲏⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲉⲑⲣⲟⲩϩⲓⲟⲩⲓ̀ ⲛ̀ⲛⲓⲇⲉⲙⲱⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">ربنا يسوع المسيح، أعطى علامة لعبيده، الذين يخافونه، لكي يُخرجوا الشياطين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Our Lord Jesus Christ, gave a sign to His servants, who do fear Him, to prevail over their enemies.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϯⲛ̀ⲟⲩⲙⲏⲓⲛⲓ ⲛ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ: ⲛⲏⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲉⲑⲣⲟⲩⲉⲣϭⲟⲓⲥ ⲉ̀ϫⲉⲛ ⲛⲟⲩϫⲁϫⲓ.</td>
            <td class="arabic">ربنا يسوع المسيح، أعطى علامة لعبيده، الذين يخافونه، لكي يتسلطوا على أعدائهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Our Lord Jesus Christ, gave a sign to His servants, who do fear Him, to heal every sickness.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϯⲛ̀ⲟⲩⲙⲏⲓⲛⲓ ⲛ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ: ⲛⲏⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲉⲑⲣⲟⲩⲧⲁⲗϭⲟ ⲛ̀ϣⲱⲛⲓ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">ربنا يسوع المسيح، أعطى علامة لعبيده، الذين يخافونه، أن يشفوا كل مرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Therefore let us glorify, our Lord Jesus Christ, and His good Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ: ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">من أجل هذا نمجد، ربنا يسوع المسيح، مع أبيه الصالح، والرُّوح القُدُس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">This is the name of salvation, of our Lord Jesus Christ, and His life-giving Cross, which He was crucified upon.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ: ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ.</td>
            <td class="arabic">وهذا هو إسم الخلاص، الذي لربنا يسوع المسيح، وصليبه المحيي، الذي صُلب عليه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Blessed is the man who forsakes this life, and its vain pleasures, that are full of suffering, that kill the soul.</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁⲧϥ ⲙ̀ⲡⲓⲣⲱⲙⲓ: ⲉⲑⲛⲁⲭⲱ ⲛ̀ⲥⲱϥ ⲙ̀ⲡⲁⲓⲃⲓⲟⲥ: ⲛⲉⲙ ⲛⲉϥⲣⲱⲟⲩϣ ⲉⲑⲙⲉϩ ⲛ̀ϧⲓⲥⲓ: ⲛⲁⲓ ⲉⲧϧⲱⲧⲉⲃ ⲛ̀ϯⲯⲩⲭⲏ.</td>
            <td class="arabic">طوبى للإنسان الذي، يترك عنه هذا العمر، وإهتماماته المملؤة تعباً، القاتلة للنفس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">And he who carries his Cross day after day, and keeps his mind and heart, on the name of salvation, of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϥⲁⲓ ⲙ̀Ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛ̀ⲉ̀ϩⲟⲟⲩ ϧⲁ ⲧ̀ϩⲏ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲛ̀ⲧⲉϥⲧⲱⲙⲓ ⲙ̀ⲡⲉϥⲛⲟⲩⲥ ⲛⲉⲙ ⲡⲉϥϩⲏⲧ: ⲉ̀ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">ويحمل صليبه يوماً فيوماً، ويلصق عقله وقلبه، بإسم الخلاص، الذي لربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Our hearts are happy, and our tongues rejoice, whenever we sing to the name, of salvation of our Lord Jesus Christ. ${cross}</td>
            <td class="coptic">Ϣⲁϥⲟⲩⲛⲟϥ ⲛ̀ϫⲉ ⲡⲉⲛϩⲏⲧ: ϣⲁϥⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ ⲡⲉⲛⲗⲁⲥ: ⲉ̀ϣⲱⲡ ⲁⲛϣⲁⲛⲉⲣⲙⲉⲗⲉⲧⲁⲛ: ⲉ̀ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. ${cross}</td>
            <td class="arabic">يفرح قلبنا، ويتهلل لساننا، إذا ما تلونا إسم الخلاص، الذي لربنا يسوع المسيح. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


function TheSaturdayPsali(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Saturday Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Saturday Psali
        <span class="coptic-caption">Ϯⲯⲁⲗⲓ ⲛ̀ⲧⲉ Ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ - Ⲁϥϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ</span>
        <span class="arabic-caption">إبصالية السبت</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Remembering Your holy name, brings joy to souls, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲁϥϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲛ̀ϫⲉ ⲡ̀ⲉⲣⲫ̀ⲙⲉⲩⲓ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">أعطى فرحاً لنفوسنا، ذِكر إسمك القدوس، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone blesses You, the heavenly and the earthly, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲁ ⲡ̀ⲕⲁϩⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">يباركك كل أحد، السمائيون والأرضيون، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For You alone are worthy, to be blessed, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ ⲙ̀ⲙⲁⲩⲁⲧⲕ: ⲕ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لأنك أنت وحدك، مستحق أن نباركك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Truly You are worthy, of the glory and the honor, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲱⲥ ⲕⲉ ⲁⲝⲓⲱⲥ: ⲕ̀ⲉⲙⲡ̀ϣⲁ ⲙ̀ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">حقاً وإستحقاقاً، أنت مستحق المجد والكرامة، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">All the tribes of the earth, praise Your holy name, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲉⲩⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲛ̀ϫⲉ ⲛⲓⲫⲩⲗⲏ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">تسبح إسمك القدوس، كل قبائل الأرض، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Six stone jars, You have changed into choice wine, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲥⲟⲟⲩ (ⲋ) ⲛ̀ϩⲩⲇⲣⲓⲁ ⲙ̀ⲙⲱⲟⲩ: ⲁⲕⲁⲓⲧⲟⲩ ⲛ̀ⲏⲣⲡ ⲉϥⲥⲱⲧⲡ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">ست أجران ماء، حولتها خمراً مختاراً، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Seven times everyday, I will praise Your holy name, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϣⲁϣϥ ⲛ̀ⲥⲟⲡ ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ: ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">سبع مرات في اليوم، أبارك إسمك القدوس، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">With delight we praise You, all of us Your people, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲏ̀ⲇⲉⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲁ̀ⲛⲟⲛ ⲧⲏⲣⲉⲛ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">بلذة نبارك، نحن كلنا شعبك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The beauty of Your holy name, is on the mouths of Your saints, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲑ̀ⲙⲉⲧⲥⲁⲓⲉ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">بهاء إسمك القدوس، في أفواه قديسيك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">From morning to evening every day, I will praise Your holy name, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲓⲥϫⲉⲛ ϣⲱⲣⲡ ϣⲁ ⲣⲟⲩϩⲓ ⲙ̀ⲙⲏⲛⲓ: ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">من باكر إلى المساء كل يوم، أبارك إسمك القدوس، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">With every breath that I take, I will praise Your holy name, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲕⲁⲧⲁ ϣⲉⲛⲛⲓϥⲓ ⲛⲓⲃⲉⲛ ⲉ̀ϯⲛⲁⲧⲏⲧⲟⲩ: ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كل نفس أتنسمه، أسبح إسمك القدوس، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">All the causes of sin, remove from our souls, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲗⲱⲓϫⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲫ̀ⲛⲟⲃⲓ: ϩⲓⲧⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛⲯⲩⲭⲏ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كل أسباب الخطية، إنزعها من أنفسنا، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">All the thoughts of the enemy, may they be cast away from me, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲙⲉⲩⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲡⲓϫⲁϫⲓ: ⲙⲁⲣⲟⲩⲟⲩⲉⲓ ⲥⲁⲃⲟⲗ ⲙ̀ⲙⲟⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كل أفكار العدو، فلتبعد عني، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Every breath praises You, as said by the prophet, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ ⲥⲉⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كل نسمة تباركك، كقول النبي، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">You are above all principalities, You are the King of kings, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲝⲁⲡ̀ϣⲱⲓ ⲅⲁⲣ ⲛ̀ⲁⲣⲭⲏ ⲛⲓⲃⲉⲛ: ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">أنت فوق كل رئاسة، أنت هو ملك الملوك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Yours is the glory with Your Father, and the Holy Spirit, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لك المجد مع أبيك، والرُّوح القُدُس، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Your name is blessed and sweet, in the mouths of Your saints, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲡⲉⲕⲣⲁⲛ ϩⲟⲗϫ ⲟⲩⲟϩ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">إسمك حلو ومبارك، في أفواه قديسيك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">My mouth praises You, and my tongue glorifies You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲣⲱⲓ ⲅⲁⲣ ⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ⲡⲁⲗⲁⲥ ⲛⲁϯⲱ̀ⲟⲩ ⲛⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">فمي يسبحك، ولساني يمجدك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Yes indeed we praise You, yes indeed we glorify You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲥⲉ ⲟⲛⲧⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲥⲉ ⲟⲛⲧⲱⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">نعم حقاً نسبحك، نعم حقاً نمجدك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">We will never get weary, nor cease to praise You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁϧⲓⲥⲓ ⲁⲛ ⲉ̀ⲛⲉϩ: ⲧⲉⲛⲛⲁⲕⲏⲛ ⲁⲛ ⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لا نتعب أبداً، ولا نكف عن تسبيحك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">All the praises of blessings, we send up unto You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲩⲙⲛⲟⲗⲟⲅⲓⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲥ̀ⲙⲟⲩ: ⲧⲉⲛⲟⲩⲱⲣⲡ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كل تماجيد البركة، نرسلها إليك إلى فوق، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Yours is the glory, the honor and thanksgiving, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: ⲛⲉⲙ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لك المجد والكرامة، والشكر، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Holy O Lord and holy, You are holy indeed O my God, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ Ⲡ̀ϭⲟⲓⲥ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲭ̀ⲟⲩⲁⲃ Ⲡⲁⲛⲟⲩϯ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">قدوس أنت يا رب وقدوس، قدوس أنت بالحقيقة، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Every soul praises You, every knee bows to You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲥⲉⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲥⲉ ⲕⲱⲗϫ ⲛⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كل نفس تباركك، وكل ركبة تجثو لك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">O name full of glory, O name full of blessings, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ⲱ̀ ⲡⲓⲣⲁⲛ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲱ̀ ⲡⲓⲣⲁⲛ ⲉⲑⲙⲉϩ ⲛ̀ⲥ̀ⲙⲟⲩ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">أيها الإسم المملوء مجداً، أيها الإسم المملوء بركة، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">Forever and ever, we will not cease to praise You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ: ⲧⲉⲛⲛⲁⲕⲏⲛ ⲁⲛ ⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لا نكف عن تسبيحك، إلى أبد الأبد، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">Yours is the blessings, the glory and the honor, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϥ̀ⲉⲛⲧⲁⲕ ⲙ̀ⲙⲁⲩ ⲛ̀ϫⲉ ⲡⲓⲥ̀ⲙⲟⲩ: ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لك البركة، والمجد والكرامة، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">With blessings we bless You, with glory we glorify You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϧⲉⲛ ⲟⲩⲥ̀ⲙⲟⲩ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">بالبركة نباركك، بالمجد نمجدك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">As long as we live we will praise You, as long as we are here we will glorify You, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϩⲟⲥ ⲉⲛⲟⲛϧ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ϩⲟⲥ ⲉⲛϣⲟⲡ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">ما دمنا أحياء نسبحك، ما دمنا موجودين نمجدك، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">The perfection of all blessings, is in Your holy name, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲥ̀ⲙⲟⲩ ⲛⲓⲃⲉⲛ: ⲥⲉⲭⲏ ϧⲉⲛ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">كمال كل بركة، كائن في إسمك القدوس، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">Receive our prayers, we who are sinners, O my Lord Jesus Christ, my good Savior.</td>
            <td class="coptic">Ϭⲓ ⲛ̀ⲛⲉⲛϯϩⲟ ⲛ̀ⲧⲟⲧⲉⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">إقبل توسلاتنا، منا نحن الخطاة، يا ربي يسوع المسيح، مخلصي الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english">Grant us Your true peace, and forgive us our sins, O my Lord Jesus Christ, my good Savior. ${cross}</td>
            <td class="coptic">Ϯⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ ⲙ̀ⲙⲏⲓ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ. ${cross}</td>
            <td class="arabic">أعطنا سلامك الحقيقي، وإغفر لنا خطايانا، يا ربي يسوع المسيح، مخلصي الصالح. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForStMary_Tout21(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for St. Mary – Tout 21st">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for St. Mary – Tout 21st and the Annual Praise
        <span class="coptic-caption">Ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲛⲓⲥⲁϧ</span>
        <span class="arabic-caption">إبصالية واطس للعذراء مريم – 21 توت والتسبحة السنوية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I heard the teachers of the Church, the fountains of wisdom, speak of the honor of the saint, the holy Virgin Mary.</td>
            <td class="coptic">Ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲛⲓⲥⲁϧ ⲛ̀ⲧⲉ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲛⲓⲣⲉϥⲃⲉⲃⲓ ⲛ̀ⲧⲉ ϯⲥⲟⲫⲓⲁ: ⲉⲩϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲛ̀ϯⲡⲁⲛⲁ̀ⲅⲓⲁ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">إني سمِعت مُعلمي الكنيسة، ينابيع الحكمة، ينطقون بكرامة القديسة، العذراء الطاهرة مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Basil the wise spoke with, honor about you saying, “My heart was afraid and amazed, because of Him who took flesh from you.”</td>
            <td class="coptic">Ⲃⲁⲥⲓⲗⲓⲟⲥ ⲡⲓⲣⲉⲙⲛ̀ⲕⲁϯ: ⲁϥϫⲱ ⲛ̀ϩⲁⲛⲧⲁⲓⲟ ⲉⲑⲃⲏϯ: ϫⲉ ⲁ̀ ⲡⲁϩⲏⲧ ⲓⲱⲣⲉⲙ ϧⲉⲛ ⲟⲩϩⲟϯ: ⲉⲑⲃⲉ ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">باسيليوس ذو الفهم، نطق بكرامتك قائلاً، "قلبي خائف مُتحير، من أجل الذي تجسد منكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Gregory the Theologian, Gregory the Wonderworker, Gregory the Armenian, spoke of your blessedness.</td>
            <td class="coptic">Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ ⲡⲓⲑⲉⲟ̀ⲗⲟⲅⲟⲥ: Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ ⲡⲓⲑⲁⲩⲙⲁⲧⲟⲩⲣⲅⲟⲥ: Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ ⲡⲓⲁⲣⲙⲉⲛⲓⲟⲥ: ⲁⲩϫⲱ ⲛ̀ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
            <td class="arabic">غريغوريوس الناطق بالإلهيات، وغريغوريوس صانع العجائب، وغريغوريوس الأرمني، تحدثوا بطوباويتِكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">King David the hymnist, the great and divine-mantled, spoke of her splendor, in the book of Psalms.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲑⲉⲟ̀ⲫⲟⲣⲟⲥ: ⲁϥⲥⲁϫⲓ ⲛ̀ⲧⲉⲥⲙⲉⲧⲗⲁⲙⲡ̀ⲣⲟⲥ: ϧⲉⲛ ⲡ̀ϫⲱⲙ ⲛ̀ⲧⲉ ⲛⲓⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">داود الملك المرتل، العظيم اللاهوتي، نطق ببهائها، في سفر المزامير.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">“The queen did stand, upon Your right hand O King,” and He witnessed her royalty, by speaking these words.</td>
            <td class="coptic">Ⲉⲥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲥ ⲛ̀ϫⲉ ϯⲟⲩⲣⲱ: ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲙⲟⲕ Ⲡ̀ⲟⲩⲣⲟ: ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ⲧⲉⲥⲙⲉⲧⲟⲩⲣⲟ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲁⲓⲥⲁϫⲓ ⲣⲱ.</td>
            <td class="arabic">"قامت الملكة، عن يمينك أيها الملك،" وشهد بمُلكِها، بهذه الكلمة عينها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Zachariah and Simeon, and king Solomon, and the apostle Philemon, spoke of our lady.</td>
            <td class="coptic">Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ: ⲛⲉⲙ ⲡⲓⲟⲩⲣⲟ Ⲥⲟⲗⲟⲙⲱⲛ: ⲛⲉⲙ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ Ⲫⲓⲗⲓⲙⲱⲛ: ⲁⲩϫⲱ ⲛ̀ⲇⲉⲥⲡⲓⲛⲏⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">زكريا وسمعان، والملك سليمان، والرسول فيليمون، قالوا أنها سيدتنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Elijah the tishbite, and Elisha his disciple, and the choir of the prophets saying, “She is the Mother of the Master.”</td>
            <td class="coptic">Ⲏⲗⲓⲁⲥ ⲡⲓⲑⲉⲥⲃⲓⲧⲏⲥ: ⲛⲉⲙ Ⲉ̀ⲗⲓⲥⲉⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϫⲉ ⲛ̀ⲑⲟⲥ ⲡⲉ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ.</td>
            <td class="arabic">إيليا التشبيتي، وإليشع تلميذه، ومصاف الأنبياء، قالوا "إنها هي أم السيد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Thomas the Apostle, also called Didymus, has witnessed her, at the time of her assumption.</td>
            <td class="coptic">Ⲑⲱⲙⲁⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉ̀ⲧⲟⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲇⲓⲇⲩⲙⲟⲥ: ⲛ̀ⲑⲟϥ ⲁϥⲉⲣⲙⲉⲑⲣⲉ ϧⲁⲣⲟⲥ: ⲫ̀ⲛⲁⲩ ⲉ̀ⲧⲁⲩⲱ̀ⲗⲓ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">توما الرسول، الذي يدعى التوآم، شهد عنها، وقتما حملها الملائكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold also Emmanuel, sent to her Gabriel, the angel of joy, the carrier of our prayers.</td>
            <td class="coptic">Ⲓⲥ ϩⲏⲡⲡⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲁϥⲟⲩⲱⲣⲡ ϣⲁⲣⲟⲥ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲑⲉⲗⲏⲗ: ⲡⲓⲣⲉϥⲱ̀ⲗⲓ ⲛ̀ⲛⲉⲛϣ̀ⲗⲏⲗ.</td>
            <td class="arabic">هوذا عمانوئيل، أرسل إليها غبرائيل، ملاك التهليل، الرافع صلواتنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">For he came to her, and greeted her, proclaiming the Birth of Christ, whom she gave birth while a virgin.</td>
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ϣⲁⲣⲟⲥ: ⲁϥⲉⲣⲭⲉⲣⲉⲧⲓⲍⲓⲛ ⲙ̀ⲙⲟⲥ: ⲙ̀Ⲡⲓϫ̀ⲫⲟ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ</td>
            <td class="arabic">فدخل إليها وأقرأها، السلام بميلاد المسيح، الذي ولدته، وهي عذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Every nation and tribe, and those who are in every place, glorify you with every blessing, as the ever-Theotokos.</td>
            <td class="coptic">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲫⲩⲗⲏ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲛⲏⲉⲧⲭⲏ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ⲥⲉϯⲱ̀ⲟⲩ ⲛⲉ ϧⲉⲛ ⲥ̀ⲙⲟⲩ ⲛⲓⲃⲉⲛ: ϩⲱⲥ Ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">كل الشعوب وكل القبائل، والقاطنين في كل مكان، يمجدونكِ بكل البركات، يا والدة الإله كل حين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Mary the daughter of Joachim, who is exalted above the Cherubim, and the chariot of the Seraphim, in all unshakable places</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁ̀ⲕⲓⲙ: ⲑⲏⲉⲧⲥⲁⲡ̀ϣⲱⲓ ⲛ̀Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲛⲉⲙ ⲡ̀ϩⲁⲣⲙⲁ ⲛ̀Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ϧⲉⲛ ⲛⲓⲙⲁ ⲉⲧⲟⲓ ⲛ̀ⲁⲧⲕⲓⲙ.</td>
            <td class="arabic">مريم إبنة يواقيم، التي إرتفعت على الشاروبيم، ومركبة السِّرافيم، في المواضع غير المُتزعزعة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The teachers of the Church, explained with eagerness, and spoke of Mary’s honor, with many hymns.</td>
            <td class="coptic">Ⲛⲓⲥⲁϧ ⲛ̀ⲧⲉ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲥⲉϧⲟⲧϧⲉⲧ ϧⲉⲛ ⲟⲩⲕ̀ⲣⲓⲃⲓⲁ: ⲁⲩϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀Ⲙⲁⲣⲓⲁ: ϧⲉⲛ ϩⲁⲛⲙⲏϣ ⲛ̀ⲉⲩⲫⲟⲙⲓⲁ.</td>
            <td class="arabic">معلمو الكنيسة، فحصوا بإجتهاد، ونطقوا بكرامة مريم، بمدائح كثيرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Foremost the believers, glorify her saying, “Hail to the beautiful dove, the Mother of God the Word.”</td>
            <td class="coptic">Ⲝⲉⲣⲓⲧⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲥⲉϯⲱ̀ⲟⲩ ⲛⲁⲥ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">والمؤمنون بالأكثر، يمجدونها قائلين، "السلام للحمامة الحسنة، ام الله الكلمة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Pride and splendor, glory and hymns, befit the Theotokos, the pure tabernacle.</td>
            <td class="coptic">Ⲟⲩϣⲟⲩϣⲟⲩ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲗⲁⲙⲡ̀ⲣⲟⲥ: ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩϩⲩⲙⲛⲟⲥ: ⲥⲉⲧⲱⲙⲓ ⲉ̀Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ϯⲥ̀ⲕⲏⲛⲏ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.</td>
            <td class="arabic">فخر ومديح، ومجد وتسبيح، تليق بوالدة الإله، القبة النقية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Your glory is above heaven, and earth and all therein, you are above all thoughts, your name adorned our works.</td>
            <td class="coptic">Ⲡⲉⲱ̀ⲟⲩ ⲥⲁⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲡ̀ⲕⲁϩⲓ ⲇⲉ ⲛⲉⲙ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀: ⲧⲉⲥⲁⲡ̀ϣⲱⲓ ⲅⲁⲣ ⲉ̀ⲛⲓⲙⲉⲩⲓ: ⲡⲉⲣⲁⲛ ⲁϥⲥⲟⲗⲥⲉⲗ ⲛ̀ⲛⲉⲛϩ̀ⲃⲏⲟⲩⲓ̀.</td>
            <td class="arabic">مجد فوق السموات، والأرض وكل ما فيها، لأنكِ تعاليتِ على الأفكار، وإسمِك زيَّن أعمالنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Truly we exalt you, for no one is like you, the Son of God dwelt in you, and He saved us.</td>
            <td class="coptic">Ⲣⲏⲧⲟⲥ ⲁ̀ⲛⲟⲛ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ: ⲙ̀ⲙⲟⲛ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲥⲁϧⲟⲩⲛ ⲙ̀ⲙⲟ: ⲟⲩⲟϩ ⲛ̀ⲑⲟϥ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">حقاً نحن نعظمكِ، ليس مَن يشبهكِ، إبن الله حل فيكِ، وهو خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hear the honor of the Virgin, which was spoken of before time, she is praying for our race, at the right hand of the throne.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲡ̀ⲧⲁⲓⲟ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏⲧⲥ ⲓⲥϫⲉⲛ ⲭ̀ⲣⲟⲛⲟⲥ: ϫⲉ ⲛ̀ⲑⲟⲥ ⲡⲉ ⲉ̀ⲧⲉⲥⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ.</td>
            <td class="arabic">تأملوا كرامة العذراء، اذ تكلموا من أجلها منذ الأزمان، أنها عن يمين الكرسي، تطلب عن جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We magnify you with Elizabeth, with our lips and our hearts, “Remember us O Merciful One, for the sake of Your Mother the bride.”</td>
            <td class="coptic">Ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ ⲛⲉⲙ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ: ϧⲉⲛ ⲛⲉⲛⲥ̀ⲫⲟⲧⲟⲩ ⲛⲉⲙ ⲛⲉⲛϩⲏⲧ: ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ ⲱ̀ Ⲡⲓⲛⲁⲏⲧ: ⲉⲑⲃⲉ Ⲧⲉⲕⲙⲁⲩ ⲛ̀ϣⲉⲗⲉⲧ.</td>
            <td class="arabic">نعظمكِ مع أليصابات، بشفاهنا وقلوبنا، اذكرنا أيها الرحوم، من أجل والدتك العروس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Behold the heavenly hosts, and the choir of angels, praise you spiritually, O rational sanctuary.</td>
            <td class="coptic">Ⲩⲥ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ⲱ̀ ⲡⲓⲉⲣⲫⲉⲓ ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ.</td>
            <td class="arabic">هوذا الطغمات السمائية، والصفوف الملائكية، يسبحونكِ روحياً، أيتها الهيكل الناطق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Every tribe of the believers, who believe in Jesus Christ, exalt her with honor, because of her blessedness.</td>
            <td class="coptic">Ⲫⲩⲗⲏ ⲛⲓⲃⲉⲛ ⲙ̀ⲡⲓⲥⲧⲟⲥ: ⲉ̀ⲧⲁⲩⲛⲁϩϯ ⲉ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϧⲉⲛ ϩⲁⲛⲧⲁⲓⲟ ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟⲥ: ⲉⲑⲃⲉ ⲛⲉⲥⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
            <td class="arabic">كل قبائل المؤمنين، الذين آمنوا بيسوع المسيح، يعظمونها بكرامات، من أجل طوباويتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the true bride, who is above the sanctuaries, truly the Mother of God, because of her true purity.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯϣⲉⲗⲉⲧ ⲙ̀ⲙⲏⲓ: ⲑⲏⲉⲧⲥⲁⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲉⲣⲫⲏⲟⲩⲓ̀: Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲉⲑⲃⲉ ⲡⲉⲥⲧⲟⲩⲃⲟ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">السلام للعروس الحقيقية، التي عَلَت عن الهياكل، أم الله بالحقيقة، من أجل طهارتها الحقيقية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The brightness of her virginity, was revealed in the churches, through her intercessions, we shall find favor.</td>
            <td class="coptic">Ⲯⲁⲓ ⲛ̀ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ: ⲁϥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲛⲉⲥⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲧⲉⲛⲛⲁϫⲓⲙⲓ ⲛ̀ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ.</td>
            <td class="arabic">ظهر في الكنائس، بهاء بتوليتها، من قِبَل شفاعتها، نَجِد دالة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O our Lord Jesus Christ, because of Your Mother the Virgin, remember the poor, and count us with Your faithful. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ Ⲧⲉⲕⲙⲁⲩ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ ⲙ̀ⲡⲓⲉ̀ⲗⲁⲭⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ ⲟⲡⲧⲉⲛ ϩⲱⲛ ⲛⲉⲙ ⲛⲉⲕⲡⲓⲥⲧⲟⲥ. ${cross}</td>
            <td class="arabic">يا ربنا يسوع المسيح، من أجل والدتك العذراء، اذكر الحقير ونحن أيضاً، إحسبنا مع مؤمنيك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}





// Coptic New Year
function PsaliAdamForTheCopticNewYear(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for the Coptic New Year">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for the Coptic New Year
        <span class="coptic-caption">Ϯⲛⲁⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ</span>
        <span class="arabic-caption">إبصالية ادام (رأس السنة القبطية - النيروز)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I will worship You, / O my Lord Jesus Christ. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϯⲛⲁⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">أسجد لك، يا ربي يسوع المسيح، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Lead me O Lord, / I the poor. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϭⲓⲙⲱⲓⲧ ⲛⲏⲓ ⲁ̀ⲛⲟⲕ: ϧⲁ ⲡⲓⲉ̀ⲗⲁⲭⲓⲥⲧⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">أهديني، أنا الحقير، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Behold us / in Your goodness. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϫⲟⲩϣⲧ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲛ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">إطلع علينا، بصلاحك، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Behold, I will declare / Your glory with my tongue. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϩⲏⲡⲡⲉ ϯⲛⲁⲥⲁϫⲓ: ⲉⲑⲃⲉ ⲡⲉⲕⲱ̀ⲟⲩ ϧⲉⲛ ⲡⲁⲗⲁⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">هأنذا إنطق بلساني، من أجل مجدك، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Destroy in me, / the thoughts full of evil. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϧⲱⲧⲉⲃ ⲛ̀ⲛⲁⲙⲉⲩⲓ: ⲉⲑⲙⲉϩ ⲛ̀ⲕⲁⲕⲱⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">إقتل أفكاري، المملوءة شراً، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">You are worthy of blessing, / glory and praise. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϥ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲉ ⲡⲓⲥ̀ⲙⲟⲩ: ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓϩⲱⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">تليق بك البركة، والمجد والتسبيح، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Be a comfort for me / in my thoughts. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ϣⲱⲡⲓ ⲛⲏⲓ ⲛ̀ⲛⲟⲙϯ: ϧⲉⲛ ⲛⲁⲗⲟⲅⲓⲥⲙⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">كن لي معزياً، في حواسي، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Take away from us, / the pain of sins. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲱ̀ⲗⲓ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲛ̀ⲛⲓⲛⲟⲃⲓ ⲙ̀ⲡⲁⲑⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">إنزع عنا، آلام الخطايا، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The comfort of our spirits / and the joy of our tongue. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲯⲟⲗⲥⲉⲗ ⲛ̀ⲛⲉⲛⲡ̀ⲛⲉⲩⲙⲁ: ⲡ̀ⲉⲣⲟⲩⲟⲧ ⲙ̀ⲡⲉⲛⲗⲁⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">عزاء أرواحنا، وفرح لساننا، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Holy, holy, holy, / Your all-holy Spirit. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲛⲁ̀ⲅⲓⲁⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">قدوس قدوس قدوس، روحك الكلي القدوس، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">O God the Merciful / and the Good One. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲛⲁⲏⲧ: ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">يا الله الرحوم، والصالح، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">For the sake of Your mercy, / O God of my salvation. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲩ̀ⲡⲉⲣ ⲙ̀ⲡⲉⲕⲛⲁⲓ: Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲡⲁⲟⲩϫⲁⲓ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">من أجل رحمتك، يا إله خلاصي، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Make us worthy, O our Master, / of Your kingdom. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ Ⲡⲉⲛⲛⲏⲃ: ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲙ̀ⲙⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">أجعلنا مستحقين، ملكوتك يا سيدنا، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Hear our prayer / O Christ our King. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲡⲉⲛϣ̀ⲗⲏⲗ: Ⲡⲉⲛⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">يا ملكنا المسيح، إسمع صلاتنا، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Guard us O Lord / from the Devil. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ Ⲡ̀ϭⲟⲓⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲓⲇⲓⲁⲃⲟⲗⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">احرسنا يا رب، من إبليس، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Your name is blessed / on the mouths of the believers. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲡⲉⲕⲣⲁⲛ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">إسمك مبارك، في أفواه المؤمنين، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Glory to Your divinity, / which is unspeakable. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ⲧⲉⲕⲙⲉⲑⲛⲟⲩϯ: ϯⲁⲧⲥⲁϫⲓ ⲙ̀ⲙⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">المجد للاهوتك، الذي لا يُنطق به، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">You O Lord know / my weakness. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲝⲱⲟⲩⲛ ⲛ̀ⲑⲟⲕ Ⲡ̀ϭⲟⲓⲥ: ⲛ̀ⲧⲁⲙⲉⲧⲁⲥⲑⲉⲛⲏⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">أنت يا رب، تعرف ضعفي، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">In Your mercy, O Creator, / have mercy on me. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲏⲓ ϧⲉⲛ ⲡⲉⲕⲛⲁⲓ: ⲱ̀ Ⲡⲓⲇⲏⲙⲓⲟⲩⲣⲅⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">إرحمني برحمتك، أيها الخالق، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Lead us not / into temptation. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ ⲁ̀ⲛⲟⲛ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">لا تدخلنا نحن، في تجربة، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Truly, every tongue / praises Your name. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲗⲁⲥ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ: ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲛ̀ⲁ̀ⲗⲏⲑⲱⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">كل لسان يسبح، إسمك بالحقيقة، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Let Your help / come speedily to me. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲧⲉⲕⲃⲟⲏ̀ⲑⲓⲁ: ⲧⲁϩⲟⲓ ϧⲉⲛ ⲟⲩⲓⲏⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">إدركني سريعاً، بمعونتك، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Jesus is my hope; / Jesus is my help. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ ⲡⲉ ⲧⲁϩⲉⲗⲡⲓⲥ: Ⲓⲏⲥⲟⲩⲥ ⲡⲉ ⲡⲁⲃⲟⲏ̀ⲑⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">يسوع هو رجائي، يسوع هو معيني، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Yours is the power / to the end of time. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲑⲱⲕ ⲡⲉ ⲡⲓⲁ̀ⲙⲁϩⲓ: ϣⲁ ⲡ̀ϫⲱⲕ ⲛ̀ⲛⲓⲭ̀ⲣⲟⲛⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">لك العزة، إلى كمال الأزمنة، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">Behold, I will bless You, / O Son of God. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲱ̀ Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">هأنذا أباركك، يا إبن الله، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">Plenteous are Your mercies, / O Eternal One. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲛⲉⲕⲛⲁⲓ: ⲱ̀ Ⲡⲓⲁⲓⲇⲓⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">مراحمك كثيرة، أيها الذاتي، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">Behold, the honor / befits God. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ ⲡⲓⲧⲁⲓⲟ: ⲉⲣⲡ̀ⲉⲣⲡⲓ ⲛ̀Ⲑⲉⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">الكرامة، تليق بالله، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">O Master have mercy on me, / O Eternal One. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ ⲛⲁⲓ ⲛⲏⲓ: ⲱ̀ Ⲡⲓⲁⲓⲇⲓⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">يا سيد إرحمني، أيها الذاتي، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">For You are, O Lord, / the King of the righteous. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ Ⲡ̀ϭⲟⲓⲥ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">لأنك أنت يا رب، ملك الصديقين، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">For every help / comes from God. / Glory to You, alleluia. / Glory be to God.</td>
            <td class="coptic">Ⲃⲟⲏ̀ⲑⲓⲁ ⲅⲁⲣ ⲛⲓⲃⲉⲛ: ⲥⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲑⲉⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">لأن كل معونة، هي من قِبَل الله، المجد لك هلليلويا، المجد لك يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">I love Your face; / make us all perfect. / Glory to You, alleluia. / Glory be to God. ${cross}</td>
            <td class="coptic">Ⲁⲓⲙⲉⲛⲣⲉ ⲡⲉⲕϩⲟ: ϫⲟⲕⲧⲉⲛ ⲉ̀ⲃⲟⲗ ⲕⲁⲗⲱⲥ: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁ̅ⲗ̅: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ. ${cross}</td>
            <td class="arabic">أحببت وجهك، كمِّلنا حسناً، المجد لك هلليلويا، المجد لك يا الله. ${cross}</td>
        </tr>
        
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForTheCopticNewYear(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for the Coptic New Year">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for the Coptic New Year
        <span class="coptic-caption">Ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛϯⲱ̀ⲟⲩ</span>
        <span class="arabic-caption">إبصالية واطس (رأس السنة القبطية - النيروز)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Come all let us glorify / the King of the ages, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛϯⲱ̀ⲟⲩ: ⲙ̀Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">تعالوا جميعاً، لنُمجد ملك الدهور، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">O my Lord loosen for us / the bonds of the demons, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲃⲟⲗⲟⲩ Ⲡⲁϭⲟⲓⲥ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲛ̀ⲛⲓⲥ̀ⲛⲁⲩϩ ⲛ̀ⲧⲉ ⲛⲓⲇⲉⲙⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">يا رب حل عنا، رباطات الشياطين، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For Your strength is a great weapon / empowering our weakness, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲧⲉⲕϫⲟⲙ ⲛ̀ⲧⲉⲛⲙⲉⲧϫⲱⲃ: ⲟⲩⲛⲓϣϯ ⲡⲉ ⲛ̀ϩⲟⲡⲗⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">لأن قوتك لضعفنا، هي سلاح عظيم، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Right and meet / generation after generation, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲟⲥ ⲕⲉ ⲁⲝⲓⲱⲥ: ⲅⲉⲛⲉⲁ̀ ⲕⲉ ⲅⲉⲛⲉⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">عادل ومستحق، إلى جيل الأجيال، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Wash me, O Lord / with Your hyssop, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲉⲕⲉ̀ⲛⲟⲩϫϧ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: Ⲡ̀ϭⲟⲓⲥ ⲙ̀ⲡⲉⲕϣⲉⲛϩⲩⲥⲱⲡⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">تنضح علينا، يا رب بزوفك، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Shape within our souls, / the beauty of Your image, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲍⲱⲅ̀ⲣⲁⲫⲓⲛ ϧⲉⲛ ⲛⲉⲛⲯⲩⲭⲏ: ⲛ̀ⲑ̀ⲙⲉⲧⲥⲁⲓⲉ ⲛ̀ⲧⲉ ⲧⲉⲕϩⲓⲕⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">صوَّر في أنفسنا، جمال صورتك، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Every hymn of praise / befits God, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲏ̀ⲭⲟⲥ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓϫⲓⲛϩⲱⲥ: ⲥⲉ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛ̀Ⲑⲉⲟⲥ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كل ألحان التسابيح، تليق بالله، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Draw the sword of Your strength, / arise and help us, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲑⲱⲕⲉⲙ ⲛ̀ϯⲥⲏϥⲓ ⲛ̀ⲧⲉⲕϫⲟⲙ: ⲧⲱⲛⲕ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">إستل سيف قوتك، قم أعنا، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ the King of glory / and the King of the ages, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲟⲩⲟϩ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">يسوع المسيح ملك المجد، وملك الدهور، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Lord have mercy, / Lord forgive us, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ: Ⲕⲩⲣⲓⲉ ⲁ̀ⲣⲓⲥⲩⲛⲭⲱⲣⲓⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">يا رب إرحم، يا رب إغفر، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Every tongue blesses God / with heavenly joy, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲗⲁⲥ ⲛⲓⲃⲉⲛ ⲥ̀ⲙⲟⲩ ⲉ̀Ⲫ̀ⲛⲟⲩϯ: ϧⲉⲛ ⲑ̀ⲗⲁⲗⲓⲁ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كل الألسن تبارك الله، بتهليل سمائي، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Wash me and I will be / whiter than snow, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲙⲁⲧⲟⲩⲃⲟⲓ ⲉⲓⲉ̀ⲟⲩⲃⲁϣ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲭⲓⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">طهرني فأبيَّض، مثل الثلج، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">You are God to whom befits / the song in Zion, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ϥ̀ⲉⲣϣⲁⲩ ⲛⲁⲕ: ⲛ̀ϫⲉ ⲡⲓϫⲱ ϧⲉⲛ Ⲥⲓⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">أنت هو الله يجب لك، النشيد في صهيون، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You, O Lover of Mankind / because of Your miraculous works, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲉⲑⲃⲉ ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">مبارك أنت يا محب البشر، من أجل أعمالك المعجزة، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Confess to the Lord our God, / the Lord of lords, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ: Ⲕⲩⲣⲓⲉ ⲧⲱⲛ ⲕⲩⲣⲓⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">إعترفوا للرب إلهنا، رب الأرباب، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Glory be to our God / to the end of the ages, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ϣⲁ ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">المجد هو لإلهنا، إلى كمال الدهور، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">All those who do good / deserve every joy, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كل فرح لجميع، مَنْ يصنع الخير، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Bless the Lord, all you nations / with a spiritual song, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ Ⲡ̀ϭⲟⲓⲥ ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ: ϧⲉⲛ ⲟⲩϩⲱⲇⲏ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">باركوا الرب يا جميع الأمم، بتسبحة روحية، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We entreat and pray to You, / do not forsake us / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ: ⲙ̀ⲡⲉⲣⲟⲩⲉⲓ ⲥⲁⲃⲟⲗ ⲙ̀ⲙⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">نسأل ونطلب منك، أن لا تبعد عنا، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">That we may bless Your greatness / day after day, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲩ̀ⲛⲁ ⲛ̀ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲉⲕⲙⲉⲧⲛⲓϣϯ: ⲥⲏⲙⲉⲣⲟⲛ ⲕⲉ ⲥⲏⲙⲉⲣⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">لكي نبارك عظمتك، يوماً فيوماً، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Every human nature praises You, / O Lover of Mankind, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲫⲩⲥⲓⲥ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ: ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟⲕ Ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كل طبائع البشرية، تسبحك يا محب البشر، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy O Lord and holy, / meet and right, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ Ⲡ̀ϭⲟⲓⲥ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">قدوس أنت يا رب وقدوس، مستحق وعادل، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The growth of works, / let it be done in order, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲯⲩⲫⲱⲥⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϩⲱⲃ: ⲙⲁⲣⲉⲥϣⲱⲡⲓ ⲛ̀ⲟⲩⲧⲱⲅⲙⲟⲥ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">إنتعاش الأعمال، فليكن بترتيب ونظام، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O good Shepherd / guide us with Your mercy, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ⲱ̀ Ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϧⲉⲛ ⲡⲉⲕⲛⲁⲓ ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">أيها الراعي الصالح، برحمتك ارعنا، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">Remove from our souls, / the thoughts of doubt, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ϣⲱⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛⲯⲩⲭⲏ: ⲛ̀ⲛⲓⲙⲉⲩⲓ ⲛ̀ⲧⲉ ⲛⲓⲥ̀ⲕⲁⲛⲇⲁⲗⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">إقطع من أنفسنا، إفكار الشكوك، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">Honored before the Lord / is the death of the righteous, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ϥ̀ⲧⲁⲓⲏ̀ⲟⲩⲧ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ⲛ̀ϫⲉ ⲫ̀ⲙⲟⲩ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كريم أمام الرب، موت الأبرار، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">In Your strength, You destroyed / the heads of the dragons, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ϧⲉⲛ ⲧⲉⲕϫⲟⲙ ⲛ̀ⲑⲟⲕ ⲁⲕⲗⲉⲥ: ⲛⲓⲁ̀ⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲓⲇ̀ⲣⲁⲕⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">بقوتك أنت سحقت، رؤوس التنانين، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">You have created everything / in great mystery, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ϩⲱⲃ ⲅⲁⲣ ⲛⲓⲃⲉⲛ ⲁⲕⲑⲁⲙⲓⲱⲟⲩ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كل الأشياء صنعتها، بسر عظيم، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">Perfect us in the holy, / and trinitarian faith, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ϫⲟⲕⲧⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧ̀ⲣⲓⲁⲧⲓⲕⲟⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">كمِّلنا في الإيمان، المقدس المثلث، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">Lead me in Your uprightness / through the Spirit of authority, / for glory be to our God; / glory to You, O our God.</td>
            <td class="coptic">Ϭⲓⲙⲱⲓⲧ ⲛⲏⲓ ⲉ̀ⲡⲉⲕⲥⲟⲩⲧⲱⲛ: ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ϩⲏⲅⲉⲙⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">أهدني إلى إستقامتك، بالروح المدبر، لأن المجد هو لإلهنا، المجد لك يا إلهنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_30" class="south"></tr>
            <td class="english">I will praise the name of the Lord / as long as I am here and forever, / for glory be to our God; / glory to You, O our God. ${cross}</td>
            <td class="coptic">Ϯⲛⲁϩⲱⲥ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ϩⲱⲥ ϯϣⲟⲡ ϣⲁ ⲛⲓⲉ̀ⲱⲛ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ ⲏ̀ⲙⲱⲛ. ${cross}</td>
            <td class="arabic">اُسبح إسم الرب، ما دُمت موجوداً إلى الدهور، لأن المجد هو لإلهنا، المجد لك يا إلهنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Feast of the Cross
function PsaliAdamForTheCross(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for the Cross">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for the Cross
        <span class="coptic-caption">Ⲁ̀ⲗⲏⲑⲱⲥ ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲣⲟⲕ</span>
        <span class="arabic-caption">إبصالية ادام (الصليب)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Truly we believe in You, / O Jesus Christ, / the Savior, the Son of God, / and in Your Cross.</td>
            <td class="coptic">Ⲁ̀ⲗⲏⲑⲱⲥ ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲣⲟⲕ: ⲱ̀ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡ̀ⲥⲱⲧⲏⲣ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲛⲉⲙ Ⲡⲉⲕⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">بالحقيقة نؤمن بك، يا يسوع المسيح، المخلص إبن الله، وبصليبك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Every glory and honor / is due unto the Cross / of the King of glory, / the confirmation of the believers.</td>
            <td class="coptic">Ⲃⲟⲛ ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲡ̀ⲧⲁϫⲣⲟ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">كل مجد وكرامة، تليق بصليب، ملك المجد، ثبات المؤمنين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For Queen Helen / rose up / and diligently sought / the victorious Cross.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁⲥⲧⲱⲛⲥ ⲛ̀ϫⲉ: Ⲏ̀ⲗⲁⲛⲏ ϯⲟⲩⲣⲟ: ⲁⲥⲕⲱϯ ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲇⲏ: ⲛ̀ⲥⲁ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲓⲣⲉϥϭⲣⲟ.</td>
            <td class="arabic">لأن هيلانة الملكة، قامت، وطلبت بإجتهاد، الصليب الغالب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David spoke about / the honor of the Cross, / saying well / “The Lord reigned on a tree.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲉϥϫⲱ: ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϫⲉ Ⲡ̀ϭⲟⲓⲥ ⲉⲣⲟⲩⲣⲟ: ⲉ̀ⲃⲟⲗ ϩⲓⲟⲩϣⲉ ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">لأن داود ينطق، بكرامة الصليب، يقول حسناً، "الرب مَلَكَ على خشبة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Emmanuel / our true God, / gave us salvation / through the Cross.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲓⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲟⲩⲥⲱϯ: ⲉⲑⲃⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">عمانوئيل إلهنا، الحقيقي، أعطانا الخلاص، من أجل الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">All the seven ranks / of the orthodox, / continually cling / to the sign of the Cross.</td>
            <td class="coptic">Ϣⲁϣϥ ⲛ̀ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ: ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲉⲩⲧⲟⲙⲓ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲉ̀ⲫ̀ⲙⲏⲓⲛⲓ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">كل السبع طغمات، الأرثوذكسيين، يلتصقون كل حين، بعلامة الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">And we the believers / celebrate it befittingly, / proclaiming and saying, / “Hail to the Cross.”</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲁ̀ⲛⲟⲛ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲧⲉⲛⲉⲣϣⲁⲓ ⲛⲁϥ ⲕⲁⲗⲱⲥ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">هوذا نحن المؤمنين، نُعيِّد له حسناً، ونصرخ قائلين، "السلام للصليب."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Yours is the power and glory / and the blessing, O Christ, / the King of kings, / the Son of God.</td>
            <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ: ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: Ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲑⲉⲟⲥ.</td>
            <td class="arabic">لك القوة والمجد، والبركة أيها المسيح، ملك الملوك، إبن الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ our God, / the King of the ages, / was crucified for our salvation / on the mountain of Kranion.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲁⲩⲁϣϥ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ: ϧⲉⲛ ⲡ̀ⲧⲱⲟⲩ ⲛ̀Ⲕ̀ⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">يسوع المسيح إلهنا، ملك الدهور، صُلب من أجل خلاصنا، في جبل الإقرانيون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Emperor Constantine / saw the Cross / of the King of glory / in the midst of the heavens.</td>
            <td class="coptic">Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ ⲡⲓⲟⲩⲣⲟ: ⲁϥⲛⲁⲩ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲙ̀Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀ⲟⲩⲣⲁⲛⲟⲥ.</td>
            <td class="arabic">قسطنطين الملك، رأى صليب، ملك المجد، في وسط السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">The believing people / rejoice with gladness / on the feast of the Cross / of Emmanuel.</td>
            <td class="coptic">Ⲗⲁⲟⲥ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲉⲩⲣⲁϣⲓ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">الشعوب المؤمنين، يفرحون بتهليل، في عيد صليب، عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Give us your peace / to see Jerusalem, / and the city of Zion, / and the land of Bethlehem.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲉ̀Ⲓⲉⲣⲟⲥⲁⲗⲏⲙ: ⲛⲉⲙ Ⲥⲓⲱⲛ ϯⲃⲁⲕⲓ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙ̀Ⲃⲏⲑⲗⲉⲉⲙ.</td>
            <td class="arabic">إعطنا سلامك، لنرى أورشليم، ومدينة صهيون، وأرض بيت لحم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">And the Resurrection, / and the mountain of Kranion, / and the Ascension, / and the caves.</td>
            <td class="coptic">Ⲛⲉⲙ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲛⲉⲙ ⲡⲓⲧⲱⲟⲩ ⲛ̀Ⲕ̀ⲣⲁⲛⲓⲟⲛ: ⲛⲉⲙ Ϯⲁ̀ⲛⲁⲗⲩⲙⲯⲓⲥ: ⲛⲉⲙ ⲛⲓⲥ̀ⲡⲏⲗⲉⲟⲛ.</td>
            <td class="arabic">والقيامة، وجبل الإقرانيون، والصعود (إلى العلاء)، والمغائر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">And foremost, / the tomb of Christ, / full of glory, / and the land of the Jordan.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲛ̀ϩⲟⲩⲟ̀: ⲡⲓⲙ̀ϩⲁⲩ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙ̀Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">وأيضاً بالأكثر، قبر المسيح، المملوء مجداً، وأرض الأردن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Great is the honor / of the sign of the Cross / of our King, / Jesus Christ our Lord.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡ̀ⲧⲁⲓⲟ: ⲙ̀ⲡ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲟⲩⲣⲟ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛϭⲟⲓⲥ.</td>
            <td class="arabic">عظيمة هي كرامة، علامة الصليب، الذي لملكنا يسوع، المسيح ربنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Cross is our confirmation. / The Cross is our hope. / The Cross is our victory / in our tribulations.</td>
            <td class="coptic">Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲡⲉⲛⲧⲁϫⲣⲟ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲡⲉⲛⲣⲉϥϭⲣⲟ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲩⲯⲓⲥ.</td>
            <td class="arabic">الصليب هو ثباتنا، الصليب هو رجاؤنا، الصليب هو ناصرنا، في شدائدنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice and be glad, / O believers / of Emmanuel, / on the feast of the Cross.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">إفرحوا وتهللوا، يا جنس المؤمنين، بعمانوئيل، في عيد الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praise the Lord our God, / with a good psalm, / and likewise say, / “Hail to the Cross.”</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ: ⲟⲩⲟϩ ⲁ̀ϫⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲭⲉⲣⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">سبحوا الرب إلهنا، لأن المزمور حسن، وقولوا هكذا، "السلام للصليب."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">“We shall not boast / except in the Cross,” / as goes the saying of the righteous, / Paul the Apostle.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲛ ⲁⲛ: ⲉ̀ⲃⲟⲗ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲇⲓⲕⲉⲟⲥ: Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">"لا نفتخر، إلَّا بالصليب،" كقول الصديق، بولس الرسول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">O Son of God have mercy; / let us see Jerusalem, / and the mountain of Kranion, / and the land of Bethlehem.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲛⲁⲓ ⲛⲁⲛ: ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲉ̀Ⲓⲉⲣⲟⲥⲁⲗⲏⲙ: ⲛⲉⲙ ⲡⲓⲧⲱⲟⲩ ⲛ̀Ⲕ̀ⲣⲁⲛⲓⲟⲛ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙ̀Ⲃⲏⲑⲗⲉⲉⲙ.</td>
            <td class="arabic">يا إبن الله إرحمنا، وأرينا أورشليم، وجبل الإقرانيون، وأرض بيت لحم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">O You who carries / the sin of the world, / save us from our sins, / through the Cross.</td>
            <td class="coptic">Ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ: ⲛ̀ⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ: ⲉⲑⲃⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">يا حامل خطية، العالم، إنقذنا من خطايانا، من أجل الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Cross. / Hail to the city of Zion. / Hail to the Jordan, / and the place of the cave.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲭⲉⲣⲉ ϯⲃⲁⲕⲓ ⲛ̀Ⲥⲓⲱⲛ: ⲭⲉⲣⲉ Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ: ⲛⲉⲙ ⲡⲓⲙⲁ ⲛ̀ⲥ̀ⲡⲏⲗⲉⲟⲛ.</td>
            <td class="arabic">السلام للصليب، السلام لمدينة صهيون، السلام للاُردن، وموضع المغارة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The souls of our fathers, / repose them, O Christ, / for the sake of the Mother of God, / Mary the Virgin.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛ̀ⲛⲉⲛⲓⲟϯ: ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ Ϯⲙⲁⲥⲛⲟⲩϯ: Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">أنفس آبائنا، نيحهم أيها المسيح، من أجل والدة الإله، مريم العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O You who was born / from the Virgin, / and was crucified in the flesh, / deliver us from temptation. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲁⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ϧⲉⲛ ⲧ̀ⲥⲁⲣⲝ ⲁⲩⲁϣϥ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ. ${cross}</td>
            <td class="arabic">يا مَنْ وُلِدَ، من العذراء، وصُلِبَ بالجسد، نجنا من التجارب. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForTheCross(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for the Cross">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for the Cross
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ</span>
        <span class="arabic-caption">إبصالية واطس (الصليب)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Sing, O believers, / the beloved of Jesus Christ, / to honor the Cross, / the holy and immortal wood.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲙ̀ⲙⲁⲓⲛⲟⲩϯ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ⲧⲁⲓⲟ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓϣⲉ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ.</td>
            <td class="arabic">رتلوا أيها المؤمنون، محبي الإله يسوع المسيح، من أجل كرامة الصليب، الخشبة المقدسة غير المائتة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Today, there is joy / in heaven and on earth, / for the life-giving Cross / of Christ, the King of heaven.</td>
            <td class="coptic">Ⲃⲟⲛ ⲟⲩⲣⲁϣⲓ ϣⲱⲡⲓ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲑⲃⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
            <td class="arabic">أي فرح صائر اليوم، في السماء وعلى الأرض، من أجل الصليب المحيي، الذي للمسيح ملك السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For, Helen arose and departed / to the Lord’s city Jerusalem, / to search diligently / for the holy wood of the Cross.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁⲥⲧⲱⲛⲥ ⲛ̀ϫⲉ Ⲏ̀ⲗⲁⲛⲏ: ⲁⲥϣⲉⲛⲁⲥ ⲉ̀ϯⲡⲟⲗⲓⲥ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲉⲥⲕⲱϯ ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲇⲏ: ⲡⲓϣⲉ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">لأن هيلانة قامت، وذهبت إلى مدينة الرب، أورشليم طالبة بإجتهاد، خشبة الصليب المقدسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the hymnist said / in his book of Psalms, / “The Lord reigned on a tree” / that is the sign of the Cross.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ⲡⲉϫⲉ: ϧⲉⲛ ⲡ̀ϫⲱⲙ ⲙ̀ⲡⲉϥⲯⲁⲗⲙⲟⲥ: ϫⲉ ⲁ̀ Ⲡ̀ϭⲟⲓⲥ ⲉⲣⲟⲩⲣⲟ ⲉ̀ⲃⲟⲗ ϩⲓⲟⲩϣⲉ: ⲉ̀ⲧⲉ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">داود المرتل قال، في كتاب مزموره، "الرب ملَكَ على خشبة،" التي هي مثال الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Through His Cross, / He returned to Paradise / Adam, Eve, and all the righteous, / and our forefathers.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲁⲩⲧⲁⲥⲑⲟ ⲉ̀Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲛ̀Ⲁ̀ⲇⲁⲙ ⲛⲉⲙ Ⲉ̀ⲩⲁ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁⲣⲭⲉⲟⲥ.</td>
            <td class="arabic">من قِبَل صليبه، ردَّ إلى الفردوس، آدم وحواء وكل الصديقين، وآبائنا الأولين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Many are Your compassions, / O our good Savior, / for You are a merciful God; / You gave us the sign of the Cross.</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ: ⲱ̀ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ ⲛ̀ⲑⲟⲕ Ⲟⲩⲛⲟⲩϯ ⲛ̀ⲛⲁⲏⲧ: ⲁⲕϯ ⲛⲁⲛ ⲙ̀ⲡ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">كثيرة هي رأفاتك، يا مخلصنا الصالح، لأنك أنت إله رحيم، أعطيتنا مثال الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold, we the Christians, / take pride in the Cross, / for through its sign, / we became free.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲧⲉⲛϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲛ ⲉⲑⲃⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϫⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲉϥⲧⲩⲡⲟⲥ: ⲁⲛϣⲱⲡⲓ ⲛ̀ⲉ̀ⲗⲉⲩⲑⲉⲣⲟⲥ.</td>
            <td class="arabic">هوذا نحن المسيحيين، نفتخر بالصليب، لأن من قِبَل علامته، صرنا أحراراً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">To You belongs power and praise, / O good Lover of Mankind, / who was crucified upon the Cross / and expelled tyranny.</td>
            <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲥ: ⲱ̀ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥϭⲟϫⲓ ⲛ̀ⲥⲁⲡⲓ ⲧⲩⲣⲁⲛⲛⲟⲥ.</td>
            <td class="arabic">لك القوة والترتيل، يا محب البشر الصالح، الذي صُلب على الصليب، الذي طرد الجبار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ is our hope. / Jesus Christ is our help. / Jesus Christ is the Only-begotten, / who was crucified upon the Cross.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲉⲧⲉⲛϩⲉⲗⲡⲓⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲉ ⲡⲉⲛⲃⲟⲏ̀ⲑⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀ⲡ̀ϣⲉ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">يسوع المسيح هو رجاؤنا، يسوع المسيح هو معيننا، يسوع المسيح الوحيد الجنس، الذي صُلِبَ على خشبة الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Christ-loving Constantine, / saw the sign of the Cross / in the firmament of heaven, / and believed in Jesus Christ.</td>
            <td class="coptic">Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ ⲙ̀ⲙⲁⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁϥⲛⲁⲩ ⲉ̀ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϧⲉⲛ ⲡⲓⲥ̀ⲧⲉⲣⲉⲱ̀ⲙⲁ ⲛ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲟⲩⲟϩ ⲁϥⲛⲁϩϯ ⲉ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">قسطنطين محب المسيح، رأى علامة الصليب، في جَلَد السموات، وآمن بيسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover, he made the sign, / and conquered in battles / with his good soldiers / through the power of the sign of the Cross.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁϥⲓ̀ⲣⲓ ⲙ̀ⲡⲉϥⲧⲩⲡⲟⲥ: ⲟⲩⲟϩ ⲁϥϭⲣⲟ ϧⲉⲛ ⲛⲓⲡⲟⲗⲉⲙⲟⲥ: ⲛⲉⲙ ⲡⲉϥⲥ̀ⲧ̀ⲣⲁⲧⲉⲩⲙⲁ ⲛ̀ⲕⲁⲗⲱⲥ: ϧⲉⲛ ⲧ̀ϫⲟⲙ ⲙ̀ⲫ̀ⲙⲏⲓⲛⲓ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">وأيضاً صنع رسمه، فغلب في الحروب، بعساكره حسناً، بقوة علامة الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Grant us, O Lord, Your peace / in the Church of Your people, / and heal our sicknesses, / and confirm us through Your Cross.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲁⲛ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ϧⲉⲛ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲟⲩⲟϩ ⲙⲁⲧⲁⲗϭⲟ ⲛ̀ⲛⲉⲛϣⲱⲛⲓ: ⲟⲩⲟϩ ⲙⲁⲧⲁϫⲣⲟⲛ ϧⲉⲛ Ⲡⲉⲕⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">اعطنا يا رب سلامتك، في كنيسة شعبك، وأشف أمراضنا، وثبتنا بصليبك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Have mercy and hear us, / O who was crucified upon the Cross. / Take Your wrath away from us, / and save us from temptations.</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲁⲛ ⲟⲩⲟϩ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ: ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲱ̀ⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲡⲁⲣⲁⲥⲙⲟⲥ.</td>
            <td class="arabic">إرحمنا واسمعنا، يا الذي صُلِبَ على الصليب، إرفع غضبك عنا، وخلصنا من التجارب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">You are blessed, O Christ our Master, / who was born of the Virgin, / and was raised upon the Cross / to save our race.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ⲱ̀ⲗⲓ ⲉ̀ϫⲉⲛ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">تباركت يا سيدنا المسيح، الذي وَلدتَهُ العذراء، ورُفِع على الصليب، لأجل خلاص جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">We glorify You with thanksgiving, / O our true God, / for You granted us Your grace / through the sign of the Cross.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: ⲱ̀ Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ϫⲉ ⲁⲕϯ ⲛⲁⲛ ⲙ̀ⲡⲉⲕϩ̀ⲙⲟⲧ: ⲙ̀ⲡ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲡⲉⲕⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">نمجدك بشكر، يا إلهنا الحقيقي، لأنك أعطيتنا نعمتك، بعلامة صليبك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Cross is our hope. / The Cross is our confirmation / in our struggles and sufferings. / The Cross is our purification.</td>
            <td class="coptic">Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲡⲉⲛⲧⲁϫⲣⲟ: ϧⲉⲛ ⲛⲉⲛϩⲟϫϩⲉϫ ⲛⲉⲙ ⲛⲉⲛⲑ̀ⲗⲩⲯⲓⲥ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲡⲉⲛⲧⲟⲩⲃⲟ.</td>
            <td class="arabic">الصليب هو رجاؤنا، الصليب هو ثباتنا، في شدائدنا وضيقاتنا، الصليب هو طهارتنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Deliver us from our enemies / through the Cross unto the end, / and disperse the enemies / of the Church, O Master.</td>
            <td class="coptic">Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛϫⲁϫⲓ: ⲉⲑⲃⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ: ⲟⲩⲟϩ ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ⲱ̀ Ⲡⲓⲛⲏⲃ ⲛ̀ⲧⲉ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ.</td>
            <td class="arabic">احرسنا من أعدائنا، من أجل الصليب إلى الإنقضاء، وفرِّق أعداء، الكنيسة يا سيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praise the Lord with hymns / and songs, saying, / “Hail to the pride of the believers, / the Cross of Jesus Christ.”</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ Ⲡ̀ϭⲟⲓⲥ ϧⲉⲛ ϩⲁⲛϩⲩⲙⲛⲟⲥ: ⲛⲉⲙ ϩⲁⲛϩⲱⲇⲏ ⲉ̀ⲣⲉⲧⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">سبحوا الرب بألحان، وتراتيل قائلين، "السلام لفخر المؤمنين، صليب يسوع المسيح."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We ask and entreat / that You bless the waters, / the fruits, the plants / of the earth, and the rain.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ: ⲉⲑⲃⲉ ⲛⲓⲙⲱⲟⲩ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ: ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛⲉⲙ ⲛⲓⲟⲩⲧⲁϩ: ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ ⲛⲓⲙⲟⲩⲛϩⲱⲟⲩ.</td>
            <td class="arabic">نسأل ونطلب، من أجل المياه باركها، والزروع وأثمار، الأرض والأمطار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">O Son of God, our God, / save us from temptations, / for the sake of Your Mother, the Theotokos, / and the power of the Cross.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϩⲁ ⲛⲓⲡⲁⲣⲁⲥⲙⲟⲥ: ⲉⲑⲃⲉ Ⲧⲉⲕⲙⲁⲩ ⲙ̀Ⲙⲁⲥⲛⲟⲩϯ: ⲛⲉⲙ ⲧ̀ϫⲟⲙ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">يا إبن الله إلهنا، خلِّصنا من التجارب، من أجل أُمك والدة الإله، وقوة الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">O You who carries the sin of the world, / who was raised upon the Cross / to save our race, / we the Christians.</td>
            <td class="coptic">Ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲉ̀ⲧⲁⲩⲟⲗϥ ⲥⲁⲡ̀ϣⲱⲓ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
            <td class="arabic">يا حامل خطية العالم، الذي رُفع على الصليب، من أجل خلاص جنسنا، نحن معشر المسيحيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Cross. / Hail to the city of the Only-begotten. / Hail to the tomb of Christ. / Hail to the place of the Resurrection.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲭⲉⲣⲉ ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲭⲉⲣⲉ ⲡⲓⲙ̀ϩⲁⲩ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲭⲉⲣⲉ ⲫ̀ⲙⲁ ⲛ̀Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ.</td>
            <td class="arabic">السلام لكَ أيها الصليب، السلام لمدينة الوحيد الجنس، السلام لقبر المسيح، السلام لموضع القيامة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The salvation of the world / is the Cross of Christ. / Remember me for the sake of the Virgin / in Your kingdom, O Son of God.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲛ̀ⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲡⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ ⲉⲑⲃⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ ⲱ̀ Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">خلاص العالم، هو صليب المسيح، اُذكرني من أجل العذراء، في ملكوتك يا إبن الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O You who was crucified upon the Cross, / save us from the hands of the tyrant, / and forgive us, we Your people, / through the prayers of the Theotokos. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϩⲁ ⲛⲉⲛϫⲓϫ ⲙ̀ⲡⲓⲧⲩⲣⲁⲛⲛⲟⲥ: ⲟⲩⲟϩ ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲁ̀ⲛⲟⲛ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ. ${cross}</td>
            <td class="arabic">يا الذي صُلِبَ على الصليب، خلصِّنا من أيدي الجبار، واغفر لنا نحن شعبك، بشفاعة والدة الإله. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Annunciation
function PsaliAdamForAnnunciation(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for Annunciation">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for Annunciation
        <span class="coptic-caption">Ⲁⲓⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ</span>
        <span class="arabic-caption">إبصالية أدام (البشارة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I hoped in You, O Jesus Christ the Son of God, I sinned forgive me, for the sake of the Mother of God.</td>
            <td class="coptic">Ⲁⲓⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ⲱ̀ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ: ⲁⲓⲉⲣⲛⲟⲃⲓ ⲉ̀ⲣⲟⲕ: ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲉⲑⲃⲉ ϯⲙⲁⲥⲛⲟⲩϯ.</td>
            <td class="arabic">توكلت عليك يا يسوع المسيح ابن الله أخطأت إليك اغفر لي من أجل والدة الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Loosen from me, the works of my sins, hide not Your face from me, O Christ the Lover of man.</td>
            <td class="coptic">Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ: ⲛ̀ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲁⲛⲟⲃⲓ: ⲙ̀ⲡ̀ⲉⲣϩⲓ ⲡ̀ϩⲟ ⲙ̀ⲙⲟⲓ: ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">حل عني أعمال خطاياي لا تصرف وجهك عني أيها المسيح محب البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For You have truly come, to the womb of the Virgin, You are the Head, and the Creator.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ ⲁⲕⲓ̀: ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ ⲛ̀ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡ̀ⲁⲣⲭⲏ: ⲟⲩⲟϩ ⲡⲓⲇⲏⲙⲓⲟⲩⲣⲅⲟⲥ.</td>
            <td class="arabic">لأنك أتيت الي بطن العذراء وأنت الرئيس والخالق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Truly Luke has taught, us with joy, concerning the mystery, of Emmanuel.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲟⲥ ⲁϥⲧⲁⲙⲟⲛ: Ⲗⲟⲩⲕⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ⲉⲑⲃⲉ ⲡⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">حقاً أخبرنا لوقا بالتهليل بسر عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Therefore he spoke, of the Servant, Gabriel the Messenger, to the Virgin.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲥⲁϫⲓ: ⲉⲑⲃⲉ ⲡⲓⲗⲩⲧⲟⲩⲣⲅⲟⲥ: Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓϥⲁⲓϣⲉⲛⲛⲟⲩϥⲓ: ⲉ̀ϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">لذلك قال عن غبريال خادم الأقداس المبشر للعذراء</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Truly he spoke, with her and said, "Hail to you O full of grace, O pure one."</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲱⲥ ⲁϥⲥⲁϫⲓ: ⲛⲉⲙⲁⲥ ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲕⲉⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ⲱ̀ ⲕⲁⲑⲁⲣⲟⲥ.</td>
            <td class="arabic">قد تكلم معها قائلاً السلام لك أيتها الممتلئة نعمة النقية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">"Behold you will conceive, and give birth to a son, the Son of the Highest, the Mighty Jesus."</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲧⲉⲣⲁⲉⲣⲃⲟⲕⲓ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲙⲓⲥⲓ ⲛ̀ⲟⲩϣⲏⲣⲓ: ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲫⲏⲉⲧϭⲟⲥⲓ: Ⲓⲏ̅ⲥ̅ ⲡⲉ ⲡⲓⲁ̀ⲙⲁϩⲓ.</td>
            <td class="arabic">هوذا العبدة ولدت الابن ابن العلي يسوع له العزة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Yours is the power and blessing, O Christ the Eternal One, who has shone today, in the womb of Mary.</td>
            <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ: ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲡⲓⲁⲓⲇⲓⲁ̀: ⲫⲏⲉⲧⲁϥϣⲁⲓ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ Ⲙⲁⲣⲓⲁ̀.</td>
            <td class="arabic">لك القوة والبركة أيها المسيح الذاتي الذي أشرق اليوم في بطن العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus the Lover of man, has shone in the flesh, according to the Messenger, Gabriel the Angel.</td>
            <td class="coptic">Ⲓⲏ̅ⲥ̅ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲟⲥ: ⲕⲁⲧⲁ ⲡⲓϩⲓϣⲉⲛⲛⲟⲩϥⲓ: ⲛ̀ⲧⲉ Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">يسوع محب البشر أشرق جسدياً كبشرى غبريال الملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Truly He became, the Son of Man, You are the True God, the King of Heaven and Earth.</td>
            <td class="coptic">Ⲕⲁⲗⲱⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁϥϣⲱⲡⲓ ⲛ̀ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲫϯ ⲙ̀ⲙⲏⲓ: ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡⲓⲕⲁϩⲓ.</td>
            <td class="arabic">حسناً بالحقيقة صار ابن بشر هو الإله الحقيقى ملك السماء والأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Proclaim O prophets, with the righteous, that Christ the Master, came into the world.</td>
            <td class="coptic">Ⲗⲁⲗⲓ ⲱ̀ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">قولوا أيها الأنبياء والصديقون لأن المسيح السيد أتي إلي العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Let us be proud today, with Abraham the Great, and all his sons, and the race of Adam.</td>
            <td class="coptic">Ⲙⲁⲣⲉϥϣⲟⲩϣⲟⲩ ⲙ̀ⲫⲟⲟⲩ: ⲡⲓⲛⲓϣϯ Ⲁⲃⲣⲁⲁⲙ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀Ⲁⲇⲁⲙ.</td>
            <td class="arabic">فليفتخر اليوم إبراهيم العظيم وكل أبنائه وجنس آدم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">"Have mercy and hear us, O Only-Begotten One, O King of the ages, save us from our troubles."</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲁⲛ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ: ⲱ̀ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲱ̀ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲩⲯⲓⲥ.</td>
            <td class="arabic">ارحمنا واسمعنا أيها الوحيد الجنس ملك الدهور نجنا من شدائدنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You O King, the Lamb of God, the King of all kings, who came for our salvation.</td>
            <td class="coptic">Ⲝⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ ⲡⲉⲛⲟⲩⲣⲟ: ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ: ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲫⲏⲉⲧⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ.</td>
            <td class="arabic">مبارك أنت يا ملكنا حمل الله ملك الملوك الذي جاء لأجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">The mystery, of God the Word, appeared to us, through the Virgin.</td>
            <td class="coptic">Ⲟⲩⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲙ̀Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ: ⲁϥⲟⲩⲱⲛϩ ⲉ̀ⲣⲟⲛ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">سر الله الكلمة ظهر لنا من العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">One from the, Holy Trinity, today was incarnate, from the Saint.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ: Ϯⲧ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅: ⲁϥϭⲓⲥⲁⲣⲝ ⲙ̀ⲫⲟⲟⲩ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑⲏⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">الواحد من الثالوث المقدس تجسد اليوم من القديسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Our mouths are filled with joy, for the Lord has come to us, and our bitter slavery, has been abolished from us.</td>
            <td class="coptic">Ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: Ⲡⲟ̅ⲥ̅ ⲁϥⲓ̀ ϣⲁⲣⲟⲛ: ⲧⲉⲛⲙⲉⲧⲃⲱⲕ ⲉⲥⲉⲛϣⲁϣⲛⲓ: ⲁⲥⲃⲱⲗ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲛ.</td>
            <td class="arabic">فمنا امتلأ فرحاً الرب جاء إلينا وعبوديتنا المرة انحلت عنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Listen and have mercy, upon us O Good One, be with us, for You are our help.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ⲱ̀ ⲡⲓⲁⲅⲁⲑⲟⲥ: ⲉⲕⲉ̀ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲉⲛⲃⲟⲏ̀ⲑⲟⲥ.</td>
            <td class="arabic">اسمعنا وارحمنا أيها الصالح كن معنا أنت معيننا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">O Merciful One of the sweet Name, we worship You, with a humble heart, and bowed knees.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ ⲡⲓⲛⲁⲏⲧ: ⲫⲁ ⲡⲓⲣⲁⲛ ⲉⲧϩⲟⲗϫ: ϧⲉⲛ ⲟⲩⲑⲉⲃⲓⲟ ⲛ̀ϩⲏⲧ: ⲛⲉⲙ ⲟⲩⲕⲉⲗⲓ ⲉⲧⲕⲟⲗϫ.</td>
            <td class="arabic">نسجد لك أيها الرحوم ذو الاسم الحلو بتواضع قلب وركب منحنية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">O Son of God have mercy, upon me the sinner, so I may be saved, for I committed many sins.</td>
            <td class="coptic">Ⲩⲥ̅ Ⲑⲥ̅ ⲛⲁⲓ ⲛⲏⲓ: ⲁⲛⲟⲕ ϧⲁ ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲛ̀ⲧⲁⲙⲉⲧⲟⲩϫⲁⲓ: ϫⲉ ⲁⲓϫⲱⲕ ⲛ̀ⲛⲓⲛⲟⲃⲓ.</td>
            <td class="arabic">يا ابن الله ارحمني أنا الخاطئ اعطني الخلاص لأني أكملت الخطايا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God the Lover of man, the long-suffering, who became man, according to His compassion.</td>
            <td class="coptic">Ⲫϯ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲡⲓⲣⲉϥⲱⲟⲩⲛ̀ϩⲏⲧ: ⲫⲏⲉⲧⲁϥϣⲱⲡⲓ ⲛ̀ⲣⲱⲙⲓ: ⲉⲑⲃⲉ ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">الله محب البشر طويل الروح الذي صار إنساناً من أجل رأفاته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Forgive me my iniquities, through the intercessions, of Your mother Mary, the great Saint.</td>
            <td class="coptic">Ⲭⲱ ⲛⲁⲛ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ: ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲁⲩ Ⲙⲁⲣⲓⲁ̀: ϯⲛⲓϣϯ ⲙ̀ⲡⲁⲛⲁ̀ⲅⲓⲁ.</td>
            <td class="arabic">اغفر آثامنا بشفاعة أمك الكلية القداسة العظيمة مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Every soul praises, God the Creator, and ascribes the hymns, to Him who is with honor.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩϩⲱⲥ: ⲉ̀Ⲫϯ ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ: ⲟⲩⲟϩ ⲉⲩⲟⲩⲱⲣⲡ ⲙ̀ⲡⲓϩⲩⲙⲛⲟⲥ: ⲙ̀ⲫⲁ ⲡⲓⲧⲁⲓⲟ.</td>
            <td class="arabic">كل الأنفس تسبح الله الخالق وترسل التسبيح لصاحب الكرامة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Be patient with us, hear our prayers, O Lord guard us, from the snares. ${cross}</td>
            <td class="coptic">Ⲱⲟⲩⲛ̀ϩⲏⲧ ⲉ̀ϫⲱⲛ: ⲥⲱⲧⲉⲙ ⲛ̀ⲛⲉⲛⲉⲩⲭⲏ: Ⲡⲟ̅ⲥ̅ ⲁⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲉ̀ⲃⲟⲗϩⲁ ⲉⲧⲭⲏ. ${cross}</td>
            <td class="arabic">تأنَّى علينا وإسمع صلواتنا يا رب إحفظنا من الفخ المنصوب. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}
// Add second/third/fourth psalis for annunciation

//Nativity ****************

//Theophany ****************

// Great Fast
function PsaliAdamForWeekdaysOfGreatFast(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali For the Weekdays of Great Fast">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali For the Weekdays of Great Fast
        <span class="coptic-caption">Ⲁⲓⲱϣ ⲛ̀ⲧⲁⲥ̀ⲙⲏⲓ</span>
        <span class="arabic-caption">إبصالية أدام لأيام الأسبوع في الصوم الكبير</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I cried with my voice, to You O my God, because of fasting, grant me salvation.</td>
            <td class="coptic">Ⲁⲓⲱϣ ⲛ̀ⲧⲁⲥ̀ⲙⲏⲓ: ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡⲁⲛⲟⲩϯ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲥⲱϯ.</td>
            <td class="arabic">بصوتي صرخت، إليك يا إلهي، فمن أجل الصوم، أعطني خلاصاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Help my weakness, O Savior, because of fasting, clean our dirt.</td>
            <td class="coptic">Ⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲧⲁⲙⲉⲧϫⲱⲃ: ⲱ̀ Ⲡⲓⲣⲉϥⲛⲟϩⲉⲙ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲉⲕⲉⲓⲱⲓ ⲛ̀ⲛⲉⲛϭⲱϧⲉⲙ.</td>
            <td class="arabic">أعن ضعفي، أيها المخلص، من أجل الصوم، أغسل أقذارنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For our forefathers, have taught us, that because of fasting, they gained salvation.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁⲩⲧⲁⲙⲟⲛ: ⲛ̀ϫⲉ ⲛⲉⲛϣⲟⲣⲡ ⲛ̀ⲓⲟϯ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩϣⲁϣⲛⲓ ⲉ̀ⲡⲓⲥⲱϯ.</td>
            <td class="arabic">لأن آبائنا الأولين، أعلمونا أنه، من أجل الصوم، قد فازوا بالخلاص.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David Jesse’s son, in his kingdom, because of fasting, he received victory.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲫⲁ Ⲓⲉⲥⲥⲉ: ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥϭⲓ ⲙ̀ⲡⲓϭⲣⲟ.</td>
            <td class="arabic">داود إبن يسَّى، في ملكه، ومن أجل الصوم، نال الغلبة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The serpent deceived, Eve and Adam, and because of fasting, the Lord had compassion on them.</td>
            <td class="coptic">Ⲉ̀ⲩⲁ ⲛⲉⲙ Ⲁ̀ⲇⲁⲙ: ⲁ̀ ⲡⲓϩⲟϥ ⲉⲣϩⲁⲗ ⲙ̀ⲙⲱⲟⲩ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁ̀ Ⲡ̀ϭⲟⲓⲥ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲱⲟⲩ.</td>
            <td class="arabic">حواء وآدم، أطغتهما الحية، ومن أجل الصوم، تحنن الرب عليهما.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Truly Enoch’s mind, was enlightened, and because of fasting, he was taken to heaven.</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲱⲥ Ⲉ̀ⲛⲱⲭ: ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲛ̀ϫⲉ ⲡⲉϥⲛⲟⲩⲥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲟⲗϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ.</td>
            <td class="arabic">حقاً إستنار، عقل أخنوخ، ومن أجل الصوم، رُفِع إلى السماء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Elijah in his prayer, asked and received, and because of fasting, he stopped the rain.</td>
            <td class="coptic">Ⲏ̀ⲗⲓⲁⲥ ϧⲉⲛ ⲡⲉϥϣ̀ⲗⲏⲗ: ⲁϥⲧⲱⲃϩ ⲟⲩⲟϩ ⲁϥϭⲓ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲙ̀ⲡⲉϥⲭⲁ ⲟⲩⲙⲟⲩⲛϩⲱⲟⲩ ⲉ̀ⲓ̀.</td>
            <td class="arabic">إيليا في صلاته، طلب فأخذ، ومن أجل الصوم، لم يدع مطراً يأتي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Abraham’s sacrifice, the Lord accepted, and because of fasting, he hosted God.</td>
            <td class="coptic">Ⲑⲩⲥⲓⲁ ⲛ̀Ⲁⲃⲣⲁⲁⲙ: ⲁ̀ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡⲥ ⲉ̀ⲣⲟϥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁ̀ Ⲫ̀ⲛⲟⲩϯ ϫⲱⲓⲗⲓ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">ذبيحة إبراهيم، قبلها الرب، ومن أجل الصوم، قد ضاف الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Isaac the beloved, was offered to the slaughter, and because of fasting, he was joyfully saved.</td>
            <td class="coptic">Ⲓ̀ⲥⲁⲁⲕ ⲡⲓⲙⲉⲛⲣⲓⲧ: ⲁⲩⲉⲛϥ ⲉ̀ⲡ̀ϧⲟⲗϧⲉⲗ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ.</td>
            <td class="arabic">إسحق الحبيب، قُدم إلى الذبح، ومن أجل الصوم، خَلُصَ بتهليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also Jacob, his eyes were darkened, and because of fasting, he saw the ladder.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ Ⲓⲁⲕⲱⲃ: ⲛⲉϥⲃⲁⲗ ⲁⲩⲉⲣⲭⲁⲕⲓ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲛⲁⲩ ⲉ̀ϯⲙⲟⲩⲕⲓ.</td>
            <td class="arabic">ويعقوب أيضاً، أظلمت عيناه، ومن أجل الصوم، نظر السُلَّم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover Joseph, was sold to men, and because of fasting, he reigned over Egypt.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲅⲁⲣ Ⲓⲱⲥⲏⲫ: ⲁⲩⲧⲏⲓϥ ⲛ̀ϩⲁⲛⲣⲱⲙⲓ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲉⲣⲟⲩⲣⲟ ⲉ̀ϫⲉⲛ Ⲭⲏⲙⲓ.</td>
            <td class="arabic">ويوسف أيضاً، بِيعَ لأُناس، ومن أجل الصوم، مَلَكَ على مصر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Moses the prophet, spoke with God, and because of fasting, he received the two tablets.</td>
            <td class="coptic">Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲩⲥ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙ Ⲫ̀ⲛⲟⲩϯ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥϭⲓ ⲛ̀ϯⲡ̀ⲗⲁⲝ ⲥ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">موسى النبي، تكلم مع الله، ومن أجل الصوم، أخذ اللوحين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Noah the righteous, before the flood, because of fasting, he made the ark.</td>
            <td class="coptic">Ⲛⲱⲉ̀ ⲡⲓⲇⲓⲕⲉⲟⲥ: ϧⲁ ⲡⲓⲕⲁⲧⲁⲕⲗⲩⲥⲙⲟⲥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲓ̀ⲣⲓ ⲛ̀ϯⲕⲓⲃⲱⲧⲟⲥ.</td>
            <td class="arabic">الصديق نوح، قبل الطوفان، من أجل الصوم، صنع الفلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Suddenly the men, of Nineveh, because of fasting, the Lord heard their voices.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲛⲓⲣⲱⲙⲓ: ⲛ̀ⲧⲉ Ⲛⲓⲛⲉⲩⲏ̀: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁ̀ Ⲡ̀ϭⲟⲓⲥ ⲥⲱⲧⲉⲙ ⲉ̀ⲧⲟⲩⲥ̀ⲙⲏ.</td>
            <td class="arabic">رجال نينوى، بغتةً، من أجل الصوم، سمع الرب صوتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">And Lot in the fire, through his deeds, and because of fasting, was saved with his daughters.</td>
            <td class="coptic">Ⲟⲩⲟϩ Ⲗⲱⲧ ϧⲉⲛ ⲡⲓⲭ̀ⲣⲱⲙ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲟⲩϫⲁⲓ ⲛⲉⲙ ⲛⲉϥϣⲉⲣⲓ.</td>
            <td class="arabic">نجا لوط من النار، بأعماله، ومن أجل الصوم، خَلُصَ مع إبنتيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">And likewise Jonah, in the whale’s belly, because of fasting, he came out safely.</td>
            <td class="coptic">Ⲡⲁⲓⲣⲏϯ Ⲓⲱⲛⲁ: ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ ⲙ̀ⲡⲓⲕⲏⲧⲟⲥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">يونان النبي، في بطن الحوت، من أجل الصوم، خرج سالماً حسناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">The lions’ mouths, could not approach Daniel, and because of fasting, they were subdued through his prayer.</td>
            <td class="coptic">Ⲣⲱⲟⲩ ⲛ̀ⲛⲓⲙⲟⲩⲓ̀: ⲙ̀ⲡⲟⲩϣ̀ϧⲱⲛⲧ ⲉ̀Ⲇⲁⲛⲓⲏⲗ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩϭⲛⲉϫⲱⲟⲩ ϧⲉⲛ ⲡⲉϥϣ̀ⲗⲏⲗ.</td>
            <td class="arabic">أفواه الأُسود، لم تقترب من دانيال، ومن أجل الصوم، خضعت بصلاته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Samuel the anointer, of the kings, because of fasting, his days increased.</td>
            <td class="coptic">Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓⲣⲉϥⲑⲱϩⲥ: ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲁⲓⲁⲓ ⲛ̀ϫⲉ ⲛⲉϥⲉ̀ϩⲟⲟⲩ.</td>
            <td class="arabic">صموئيل، ماسح الملوك، من أجل الصوم، طالت أيامه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">And the three children, of Babylon, because of fasting, they quenched the fire.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲡⲓϣⲟⲙⲧ ⲛ̀ⲁ̀ⲗⲟⲩ: ⲛ̀ⲧⲉ Ⲑ̀ⲃⲁⲃⲩⲗⲱⲛ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲱ̀ϣⲉⲙ ⲙ̀ⲡⲓⲭ̀ⲣⲱⲙ.</td>
            <td class="arabic">والثلاثة فتية، في بابل، من أجل الصوم، أطفأوا النار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">My masters and fathers, the Apostles, because of fasting, they restored the nations.</td>
            <td class="coptic">Ⲩⲥ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ: ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲧⲁⲥⲑⲟ ⲛ̀ⲛⲓⲉⲑⲛⲟⲥ.</td>
            <td class="arabic">ها سادتي، الآباء الرسل، من أجل الصوم، رَدُّوا الأمم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God of all gods, Jesus the Judge, because of fasting, confirmed the strugglers.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲩϯ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲕ̀ⲣⲓⲧⲏⲥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲧⲁϫⲣⲟ ⲛ̀ⲛⲓⲁⲑⲗⲏⲧⲏⲥ.</td>
            <td class="arabic">إله الآلهة، يسوع الديان، من أجل الصوم، ثَبَّت المجاهدين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Coolness and rest, and repose, because of fasting, will come on Judgment [Day].</td>
            <td class="coptic">Ⲭ̀ⲃⲟⲃ ⲛⲉⲙ ⲟⲩⲙ̀ⲧⲟⲛ: ⲛⲉⲙ ⲟⲩⲁ̀ⲛⲁⲡⲁⲩⲥⲓⲥ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲛⲁϣⲱⲡⲓ ϧⲉⲛ ϯⲕ̀ⲣⲓⲥⲓⲥ.</td>
            <td class="arabic">برودة وراحة، ونياحاً، من أجل الصوم، تكون في الدينونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The Savior taught us, in His Gospel, that because of fasting, we can cast out demons.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲁϥⲧ̀ⲥⲁⲃⲟⲛ: ϧⲉⲛ ⲡⲉϥⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲛ̀ⲧⲉⲛϩⲓⲟⲩⲓ̀ ⲛ̀ⲛⲓⲇⲉⲙⲱⲛ.</td>
            <td class="arabic">عَلَّمنا المخلص، في إنجيله، من أجل الصوم، نُخرج الشياطين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O Kind One, to the sinners, because of fasting, forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲓϣⲁⲛⲁϩ̀ⲑⲏϥ: ⲉ̀ϫⲉⲛ ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲉⲑⲃⲉ ϯⲛⲏⲥⲧⲓⲁ: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ. ${cross}</td>
            <td class="arabic">أيها المتحنن، على الخطاة، من أجل الصوم، إغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForWeekdaysOfGreatFast(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos For the Weekdays of Great Fast">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos For the Weekdays of Great Fast
        <span class="coptic-caption">Ⲁ̀ⲙⲱⲓⲛⲓ ⲛ̀ⲧⲉⲛⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ</span>
        <span class="arabic-caption">إبصالية واطس لأيام الأسبوع في الصوم الكبير</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Come let us fast, perfect fasts, through prayer and fasting, the Lord will forgive us.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲛ̀ⲧⲉⲛⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ: ⲛ̀ϩⲁⲛⲛⲏⲥⲧⲓⲁ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">تعالوا لنصوم، أصواماً كاملة، لأن بالصلاة والصوم، يغفر لنا الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">The filth of our hearts, let us purify with love, through prayer and fasting, and befitting deeds.</td>
            <td class="coptic">Ⲃⲟⲛ ⲟⲩϭⲱϧⲉⲙ ⲛ̀ⲛⲉⲛϩⲏⲧ: ⲙⲁⲣⲉⲛⲧⲟⲩⲃⲟϥ ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲉⲣⲡ̀ⲣⲉⲡⲓ.</td>
            <td class="arabic">دَنَس قلوبنا، فلنطهره بالمحبة، بواسطة الصلاة والصوم، والأعمال اللائقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For the Lord taught us, in His Gospel, through prayer and fasting, we can cast out demons.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ Ⲡ̀ϭⲟⲓⲥ ⲁϥϯⲥ̀ⲃⲱ ⲛⲁⲛ: ϧⲉⲛ ⲡⲉϥⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲛ̀ⲧⲉⲛϭⲟϫⲓ ⲛ̀ⲥⲁ ⲛⲓⲇⲉⲙⲱⲛ.</td>
            <td class="arabic">فإن الرب علَّمنا، في إنجيله، أنه بالصلاة والصوم، نطرد الشياطين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The Master praised, those who fasted to Him, with prayer and fasting, and with undefiled thoughts.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ ⲁϥⲉⲣⲉⲩⲫⲟⲙⲓⲛ: ⲛ̀ⲛⲏⲉ̀ⲧⲁⲩⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ ϩⲁⲣⲟϥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ϧⲉⲛ ⲟⲩⲙⲉⲩⲓ ⲛ̀ⲁⲧⲥⲱϥ.</td>
            <td class="arabic">مَدَحَ السيد، الذين صاموا له، بالصلاة والصوم، بفكر غير نَجِس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Our fathers repented, with purity and righteousness, through prayer and fasting, they became worthy of the kingdom.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ ⲛⲉⲛⲓⲟϯ ⲉⲣⲙⲉⲧⲁⲛⲟⲓⲛ: ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲛⲉⲙ ⲟⲩⲧⲟⲩⲃⲟ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϯⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">تاب آباؤنا، ببر وطهارة، وبالصلاة والصوم، إستحقوا الملكوت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Eve and our father Adam, wept for the sake of Paradise, through prayer and fasting, the Lover of Mankind restored them.</td>
            <td class="coptic">Ⲍⲱⲏ̀ ⲛⲉⲙ Ⲁ̀ⲇⲁⲙ ⲡⲉⲛⲓⲱⲧ: ⲉⲑⲃⲉ Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲁⲩⲣⲓⲙⲓ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲧⲁⲥⲑⲱⲟⲩ ⲛ̀ϫⲉ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">حواء وأبونا آدم، بكى لأجل الفردوس، وبالصلاة والصوم، ردهما محب البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Elijah shut the heaven, for three years and six months, through prayer and fasting, the clouds did not rain.</td>
            <td class="coptic">Ⲏ̀ⲗⲓⲁⲥ ⲁϥϣ̀ⲑⲁⲙ ⲛ̀ⲧ̀ⲫⲉ: ⲛ̀ⲥⲟⲟⲩ ⲛ̀ⲁ̀ⲃⲟⲧ ⲛⲉⲙ ϣⲟⲙϯ ⲛ̀ⲣⲟⲙⲡⲓ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩϩⲱⲟⲩ ⲛ̀ϫⲉ ⲛⲓϭⲏⲡⲓ.</td>
            <td class="arabic">إيليا أغلق السماء، ثلاث سنين وستة أشهر، بالصلاة والصوم، فلم تمطر السحب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Father Abraham’s sacrifice, God the Master accepted, through prayer and fasting, He made him a patriarch.</td>
            <td class="coptic">Ⲑⲩⲥⲓⲁ ⲙ̀ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: ⲁϥϣⲟⲡⲥ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲟⲩⲟϩ ⲁϥⲁⲓϥ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ.</td>
            <td class="arabic">ذبيحة أبينا إبراهيم، قبلها الله السيد، بالصلاة والصوم، وجعله رئيس آباء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Isaac was bound by his father, to offer him as an acceptable sacrifice, through prayer and fasting, a ram replaced him.</td>
            <td class="coptic">Ⲓ̀ⲥⲁⲁⲕ ⲁϥⲥⲟⲛϩϥ ⲛ̀ϫⲉ ⲡⲉϥⲓⲱⲧ: ⲉⲑⲣⲉϥⲉⲛϥ ⲛ̀ⲟⲩⲑⲩⲥⲓⲁ ⲉⲥϣⲏⲡ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩϯϣⲉⲃⲓⲱ ⲛⲁϥ ⲙ̀ⲡⲓϩⲓⲏⲃ.</td>
            <td class="arabic">إسحق رَبَطه أبوه، لكي يقدمه ذبيحة مقبولة، وبالصلاة والصوم، عُوِّض بالكبش.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also Jacob Israel, because of his truthful intentions, and through prayer and fasting, he took his father’s blessing.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ Ⲓⲁⲕⲱⲃ Ⲡⲓⲥⲣⲁⲏⲗ: ⲉⲑⲃⲉ ⲛⲉϥⲙⲉⲩⲓ ⲉ̀ⲧⲉⲛϩⲟⲧ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥϭⲓ ⲛ̀ⲟⲩⲥ̀ⲙⲟⲩ ϧⲉⲛ ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">وأيضاً يعقوب إسرائيل، من أجل نواياه الصادقة (البريئة)، بالصلاة والصوم، نال بركة من أبيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">The righteous Lot was worthy, to have the angels come to him, through prayer and fasting, he was saved from trouble.</td>
            <td class="coptic">Ⲗⲱⲧ ⲡⲓⲑ̀ⲙⲏⲓ ⲁϥⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ: ⲉⲑⲣⲟⲩⲓ̀ ϣⲁⲣⲟϥ ⲛ̀ϫⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲕⲩⲛⲇⲓⲛⲟⲥ.</td>
            <td class="arabic">لوط البار إستحق، أن يأتى إليه الملاكان، وبالصلاة والصوم، خَلُص من الشدة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Moses took the two tablets, and placed them in the tabernacle, and through prayer and fasting, he struck the sea into two parts.</td>
            <td class="coptic">Ⲙⲱⲩ̀ⲥⲏⲥ ⲁϥϭⲓ ⲛ̀ϯⲡ̀ⲗⲁⲝ ⲥ̀ⲛⲟⲩϯ: ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ ⲟⲩⲟϩ ⲁϥⲭⲁⲩ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥϣⲁⲣⲓ ⲉ̀ⲫ̀ⲓⲟⲙ ⲁϥⲉⲣⲥ̀ⲛⲁⲩ.</td>
            <td class="arabic">موسى أخذ اللوحين، ووضعهما في القبة، وبالصلاة والصوم، ضرب البحر فصار شطرين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">God directed Noah the just, to build the ark, through prayer and fasting, he was saved from the flood.</td>
            <td class="coptic">Ⲛⲱⲉ̀ ⲡⲓⲑ̀ⲙⲏⲓ ⲁϥϭⲱⲣⲉⲙ ⲛⲁϥ: ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ϯⲕⲓⲃⲱⲧⲟⲥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲕⲁⲧⲁⲕⲗⲩⲥⲙⲟⲥ.</td>
            <td class="arabic">نوح البار أشار، إليه الله بالفُلك، وبالصلاة والصوم، خَلُص من الطوفان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">God refrained His anger, from the Ninevites, through prayer and fasting, He forgave their evil deeds.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲛⲓⲣⲉⲙⲚⲓⲛⲉⲩⲏ̀: ⲁ̀ Ⲫ̀ⲛⲟⲩϯ ⲧⲁⲥⲑⲟ ⲙ̀ⲡⲉϥϫⲱⲛⲧ ⲉ̀ϫⲱⲟⲩ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲭⲁ ⲛⲟⲩϩ̀ⲃⲏⲟⲩⲓ̀ ⲛⲱⲟⲩ ⲉⲧϩⲱⲟⲩ.</td>
            <td class="arabic">رَدَّ الله غضبه بغتةً، عن أهل نينوى، بالصلاة والصوم، ترك لهم أعمالهم الشريرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Truly Jonah was in the belly, of the whale for three days, through prayer and fasting, he was thrown forth on dry land.</td>
            <td class="coptic">Ⲟⲛⲧⲱⲥ Ⲓⲱⲛⲁ ⲛⲁϥⲭⲏ ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ: ⲙ̀ⲡⲓⲕⲏⲧⲟⲥ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲥⲓϯ ⲙ̀ⲙⲟϥ ⲉ̀ⲡⲉⲧϣⲟⲩⲱ̀ⲟⲩ.</td>
            <td class="arabic">حقاً يونان كان، في بطن الحوت ثلاثة أيام، وبالصلاة والصوم، قذفه إلى اليابسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The three saintly children, rejected the king’s decree, through prayer and fasting, they quenched the furnace fire.</td>
            <td class="coptic">Ⲡⲓϣⲟⲙⲧ ⲛ̀ⲁ̀ⲗⲟⲩ ⲛ̀ⲁ̀ⲅⲓⲟⲥ: ⲁⲩϩⲓⲡ̀ϩⲟ ⲙ̀ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡ̀ⲟⲩⲣⲟ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲱ̀ϣⲉⲙ ⲙ̀ⲡ̀ϣ̀ⲁϩ ⲛ̀ⲧⲉ ϯϩ̀ⲣⲱ.</td>
            <td class="arabic">الثلاثة فتية القديسون، رفضوا كلام الملك، وبالصلاة والصوم، أطفأوا لهيب الأتون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">The lions’ mouths in the den, licked the feet of Daniel, and through prayer and fasting, he became great in Israel.</td>
            <td class="coptic">Ⲣⲱⲟⲩ ⲛ̀ⲛⲓⲙⲟⲩⲓ̀ ϧⲉⲛ ⲫ̀ⲗⲁⲕⲕⲟⲥ: ⲁⲩⲗⲱϫϩ ⲛ̀ⲛⲓⲫⲁⲧ ⲛ̀Ⲇⲁⲛⲓⲏⲗ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁϥⲉⲣⲟⲩⲛⲓϣϯ ϧⲉⲛ Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">أفواه الأسود في الجب، لحست قدميْ دانيال، وبالصلاة والصوم، صار عظيماً في إسرائيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Samuel the anointer of kings, his parents offered him to the Lord’s house, through prayer and fasting, he was called the anointer.</td>
            <td class="coptic">Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓⲣⲉϥⲑⲱϩⲥ ⲛ̀ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲁ̀ ⲛⲉϥⲓⲟϯ ⲧⲏⲓϥ ⲉ̀ⲡ̀ⲏⲓ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ ⲡⲓⲣⲉϥⲑⲱϩⲥ.</td>
            <td class="arabic">صموئيل ماسح الملوك، قدَّمه أبواه إلى بيت الرب، وبالصلاة والصوم، دُعِيَ الماسح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Truly Joseph the chaste, was saved from the adulteress, through prayer and fasting, he ruled over Egypt.</td>
            <td class="coptic">Ⲧⲁⲫ̀ⲙⲏⲓ Ⲓⲱⲥⲏⲫ ⲡⲓⲥⲟⲫⲣⲟⲛ: ⲁϥⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ϯⲡⲟⲣⲛⲏ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲭⲁϥ ⲛ̀ⲁⲣⲭⲱⲛ ⲉ̀ϫⲉⲛ Ⲭⲏⲙⲓ.</td>
            <td class="arabic">حقاً يوسف العفيف، خَلُصَ من الزانية، وبالصلاة والصوم، جُعِل رئيساً على مصر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Behold the twelve apostles, preached in the blessed name, through prayer and fasting, they raised the dead.</td>
            <td class="coptic">Ⲩⲥ ⲡⲓⲙⲉⲧⲥ̀ⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩⲧⲟⲩⲛⲟⲥ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">ها الإثنا عشر رسولاً، كرزوا بالإسم المبارك، وبالصلاة والصوم، أقاموا الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">David of the harp, was given the gift of prophecy, and through prayer and fasting, a kingdom came to him.</td>
            <td class="coptic">Ⲫⲁ ϯⲕⲩⲑⲁⲣⲁ ⲡⲉ Ⲇⲁⲩⲓⲇ: ϯⲡ̀ⲣⲟⲫⲏⲧⲓⲁ ⲁⲩⲧⲏⲓⲥ ⲛⲁϥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁ̀ ϯⲙⲉⲧⲟⲩⲣⲟ ϣⲱⲡⲓ ⲛⲁϥ.</td>
            <td class="arabic">داود ذو القيثار، أُعطيت له النبوة، وبالصلاة والصوم، صارت له المملكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Every exalted grace, was received by the ascetics, through prayer and fasting, and also godliness.</td>
            <td class="coptic">Ⲭⲁⲣⲓⲥⲙⲁ ⲛⲓⲃⲉⲛ ⲉⲧϭⲟⲥⲓ: ⲁⲥⲧⲁϩⲟ ⲛ̀ⲛⲓⲁⲥⲕⲏⲧⲏⲥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ϯⲕⲉⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ.</td>
            <td class="arabic">كل النِعَم العالية، أدركت النُسَّاك، بالصلاة والصوم، والتَقوى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Every soul that has pleased, the Lord God through their deeds, through prayer and fasting, gained the heavenly kingdom.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ: ⲙ̀Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲁⲩϣⲁϣⲛⲓ ⲉ̀ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
            <td class="arabic">كل النفوس التي أرضت، الرب الإله بالأعمال، بالصلاة والصوم، فازت بملكوت السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Therefore let us praise Him, and glorify Him, through prayer and fasting, and worship before Him. ${cross}</td>
            <td class="coptic">Ⲱ̀ⲑⲉⲛ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ϯⲡ̀ⲣⲟⲥⲕⲩⲛⲏⲥⲓⲥ ⲛⲁϩⲣⲁϥ. ${cross}</td>
            <td class="arabic">لهذا فلنسبحه، ونمجده، بالصلاة والصوم، والسجود أمامه. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}



//Hosanna Sunday
function PsaliAdamforHosannaSunday(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for Hosanna Sunday">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for Hosanna Sunday
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ</span>
        <span class="arabic-caption">إبصالية ادام (أحد الشعانين)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Blow the horn today, with the trumpet, and sing on the feast, of the Son of God.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ: ⲙ̀ⲫⲟⲟⲩ ϧⲉⲛ ⲟⲩⲥⲁⲗⲡⲓⲅⲅⲟⲥ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">بَوِّقُوا اليوم، بالبوق، ورتلوا في عيد، إبن الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Remove from your hearts, deception and pain, for the Merciful Lord, has saved our race.</td>
            <td class="coptic">Ⲃⲱⲗⲟⲩ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ⲛ̀ⲛⲓⲭ̀ⲣⲟϥ ⲛⲉⲙ ⲛⲓⲡⲁⲑⲟⲥ: ϫⲉ ⲁ̀ Ⲡ̀ϭⲟⲓⲥ Ⲡⲓⲛⲁⲏⲧ: ⲁϥⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">حِلُّوا من قلوبكم، الغش والآلام، لأن الرب الرحوم، خَلَّصَ جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He who created, the chariot of the Cherubim, rode on a donkey, in the midst of Jerusalem.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ: ⲙ̀ⲡ̀ϩⲁⲣⲙⲁ ⲛ̀Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲁϥⲧⲁⲗⲟϥ ⲉ̀ⲟⲩⲉ̀ⲱ̀: ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
            <td class="arabic">لأن الذي خلق، مركبة الشاروبيم، ركب آتان، في وسط أورُشَليم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the hymnist, spoke saying, “Offer to the Lord, O sons of God.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ⲁϥⲥⲁϫⲓ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ⲛ̀ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">داود المرتل، تكلم هكذا قائلاً، "قَدِّموا للرب، يا أبناء الله."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Out of the mouths of infants, You have prepared praise,” hosanna in the highest, O King of glory.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ: ⲛ̀ⲑⲟⲕ ⲁⲕⲥⲉⲃⲧⲉ ⲡⲓⲥ̀ⲙⲟⲩ: ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲱ̀ Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡⲓⲱ̀ⲟⲩ.</td>
            <td class="arabic">من أفواه الصغار، أنت أعددت سُبْحاً،" أوصنا في الأعالي، يا ملك المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Plenteous are , Your compassions, and exalted are Your works, O Christ the Merciful.</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ: ⲉⲧⲟϣ ⲛⲏⲉ̀ⲧⲁⲕⲁⲓⲧⲟⲩ: ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲛⲁⲏⲧ.</td>
            <td class="arabic">رأفاتك، كثيرة جداً، ومتزايدة أعمالك، أيها المسيح الرحوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Lazarus the just, died and was buried, and Jesus Christ the Word, raised him with His power.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲡⲓⲑ̀ⲙⲏⲓ Ⲗⲁⲍⲁⲣⲟⲥ: ⲁϥⲙⲟⲩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲗⲟⲅⲟⲥ: ϧⲉⲛ ⲧⲉϥϫⲟⲙ ⲁϥⲧⲟⲩⲛⲟⲥϥ.</td>
            <td class="arabic">هوذا لعازر البار، مات وقُبِر، ويسوع المسيح الكلمة، أقامه بقوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Yours is the power, the glory and thanksgiving, hosanna to the Son of David, to the end of time.</td>
            <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ: ⲛⲉⲙ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ: ⲱ̀ⲥⲁⲛⲛⲁ ⲧⲱ Ⲩ̀ⲓⲱ Ⲇⲁⲩⲓⲇ: ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ.</td>
            <td class="arabic">لك القوة والمجد، والشكر، أوصنا لإبن داود، إلى الإنقضاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jerusalem the city, of our Savior Jesus, resembles heaven, the dwelling of the righteous.</td>
            <td class="coptic">Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲧ̀ⲡⲟⲗⲓⲥ: ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ: ⲉⲥⲟ̀ⲛⲓ ⲛ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲫ̀ⲙⲁ ⲛ̀ϣⲱⲡⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
            <td class="arabic">أورُشَليم مدينة، مخلصنا يسوع، تُشْبِه السماء، مسكن الصديقين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">The Mount of Kranion, the place where You were crucified, give us O King, the glory to observe.</td>
            <td class="coptic">Ⲕ̀ⲣⲁⲛⲓⲟⲛ ⲡⲓⲧⲱⲟⲩ: ⲡⲓⲙⲁ ⲉ̀ⲧⲁⲩⲁϣⲕ ⲛ̀ϧⲏⲧϥ: ⲙⲟⲓ ⲛⲁⲛ ⲱ̀ Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">جبل الإقرانيون، الموضع الذي صُلِبْتَ فيه، أعطنا يا ملك المجد، أن نراه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover the Resurrection, of our Savior the Christ, and the land of the Jordan, and the baptism of John.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙ̀Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ: ⲛⲉⲙ ⲡⲓⲙⲁ ⲛ̀ⲱⲙⲥ ⲛ̀ⲧⲉ Ⲓⲱⲁⲛⲛⲏⲥ.</td>
            <td class="arabic">وأيضاً القيامة، التي لمخلصنا المسيح، وأرض الأردن، ومعمودية يوحنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">And the place of the tomb, full of grace, in that place, forgive us our trespasses.</td>
            <td class="coptic">Ⲙⲁⲗⲓⲥⲧⲁ ⲡⲓⲙ̀ϩⲁⲩ: ⲉⲑⲙⲉϩ ⲛ̀ⲭⲁⲣⲓⲥⲙⲁ: ϧⲉⲛ ⲡⲓⲙⲁ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ: ⲭⲱ ⲛⲁⲛ ⲛ̀ⲛⲉⲛⲡⲁⲣⲁⲡ̀ⲧⲱⲙⲁ.</td>
            <td class="arabic">وبالأحرى القبر، المملوء نعمة، في ذلك الموضع، إغفر لنا زلاتنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">For who among the gods, is likened to Emmanuel, hosanna to our God, the King of Israel.</td>
            <td class="coptic">Ⲛⲓⲙ ⲅⲁⲣ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ: ⲉϥⲟ̀ⲛⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲱ̀ⲥⲁⲛⲛⲁ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ: Ⲃⲁⲥⲓⲗⲓⲧⲟⲩ Ⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">مَنْ في الآلهة، يشبه عمانوئيل، أوصنا لإلهنا، ملك إسرائيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You O Christ, O only-begotten Son, hosanna to God, in the highest.</td>
            <td class="coptic">Ⲝ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲱ̀ⲥⲁⲛⲛⲁ ⲟ̀ Ⲑⲉⲟⲥ: ⲛ̀ⲧⲓⲥ ⲩⲯⲓⲥⲧⲓⲥ.</td>
            <td class="arabic">تباركت أنت أيها المسيح، الإبن الوحيد الجنس، أوصنا الإله، في الأعالي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Great is the feast, of Hosanna, of the Lord Adonai, holy O God.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡ̀ϣⲁⲓ: ⲙ̀ⲡⲓⲉⲩⲗⲟⲅⲓⲙⲉⲛⲟⲥ: ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ Ⲁ̀ⲇⲱⲛⲁⲓ: ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">عظيمٌ هو، عيد الشعانين، قدوس الله، الرب أدوناي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The unapproachable Light, appeared in the world, let us praise Him saying, “Holy O Mighty.”</td>
            <td class="coptic">Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲁⲧϣ̀ⲧⲁϩⲟϥ: ⲁϥⲟⲩⲟⲛϩϥ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ.</td>
            <td class="arabic">النور الغير المُدْرَك، ظهر في العالم، فلنسبحه قائلين، "قدوس القوي."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice O believers, on the feast of Jesus Christ, and praise Him well saying, “Holy O Immortal.”</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲕⲁⲗⲱⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ.</td>
            <td class="arabic">إفرحوا أيها المؤمنون، في عيد يسوع المسيح، ورتلوا حسناً قائلين، "قدوس الذي لا يموت."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praise the Lord our God, for the psalm is good, in this great day, of Hosanna.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ: ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲡⲓⲛⲓϣϯ: ⲛ̀ⲧⲉ ⲡⲓⲉⲩⲗⲟⲅⲓⲙⲉⲛⲟⲥ.</td>
            <td class="arabic">سبحوا الرب إلهنا، لأن المزمور جيد، في اليوم العظيم، الذي للشعانين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We praise Christ the King, with the high ranks, O Son of God, hosanna in the highest.</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀Ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ: ⲱ̀ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ: ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">نسبح للملك المسيح، مع الطغمات العلوية، يا إبن الله، أوصنا في الأعالي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Behold the young children, praise Emmanuel saying, “Salvation is fitting, to the King of Israel.”</td>
            <td class="coptic">Ⲩⲥ ⲛⲓⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲗⲱⲟⲩⲓ̀: ⲉⲩϩⲱⲥ ⲉ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϫⲱ ⲱ̀ⲥⲁⲛⲛⲁ ⲉⲣⲡ̀ⲣⲉⲡⲓ: ⲙ̀Ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">هوذا الأطفال الصغار، يسبحون عمانوئيل، قائلين "يليق الخلاص، بملك إسرائيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">O compassionate God, have mercy O Good One, for the sake of Your Mother the bride, the Virgin Mary.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲣⲉϥϣⲉⲛϩⲏⲧ: ⲛⲁⲓ ⲛⲁⲛ ⲱ̀ Ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ⲉⲑⲃⲉ Ⲧⲉⲕⲙⲁⲩ ϯϣⲉⲗⲏⲧ: Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">أيها الإله الرؤوف، إرحمنا أيها الصالح، من أجل والدتك العروس، مريم العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Kranion, hail to the city of the Lord, hail to the tomb, and the Resurrection.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲡⲓⲕ̀ⲣⲁⲛⲓⲟⲛ: ⲭⲉⲣⲉ ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ⲭⲉⲣⲉ ⲡⲓⲙ̀ϩⲁⲩ ⲇⲉⲟⲛ: ⲛⲉⲙ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ.</td>
            <td class="arabic">السلام للإقرانيون، السلام لمدينة الرب، وأيضاً السلام للقبر، والقيامة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Repose the souls, in Paradise, give us and them, a share O Christ.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲙⲁⲉⲙⲧⲟⲛ ⲛⲱⲟⲩ: ϧⲉⲛ Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲟⲩⲟϩ ⲙⲟⲓ ⲛⲁⲛ ⲛⲉⲙⲱⲟⲩ: ⲛ̀ⲟⲩⲙⲉⲣⲟⲥ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">الأنفس نَيِّحها، في الفردوس، وأعطنا وإياها، نصيباً أيها المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Remember me O Master, in Your kingdom, and forgive me my sins, and have mercy on Your people. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛⲛⲏⲃ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ: ⲟⲩⲟϩ ⲭⲱ ⲛⲏⲓ ⲛ̀ⲛⲁⲛⲟⲃⲓ ⲉ̀ⲃⲟⲗ: ⲛⲉⲙ ⲡⲉⲕⲗⲁⲟⲥ ⲛⲁⲓ ⲛⲱⲟⲩ. ${cross}</td>
            <td class="arabic">أذكرني أيها السيد، في ملكوتك، وإغفر لي خطاياي، وشعبك إرحمه. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosforHosannaSunday(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for Hosanna Sunday">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for Hosanna Sunday
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ ϧⲉⲛ ⲟⲩⲥⲟⲩⲁⲓ</span>
        <span class="arabic-caption">إبصالية واطس (أحد الشعانين)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Blow at the new moon, with the sound trumpet, on your feast day, for God command it.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ ϧⲉⲛ ⲟⲩⲥⲟⲩⲁⲓ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ: ϧⲉⲛ ⲟⲩⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲛⲉⲧⲉⲛϣⲁⲓ: ϫⲉ ⲟⲩⲁϩⲥⲁϩⲛⲓ ⲛ̀Ⲑⲉⲟⲥ.</td>
            <td class="arabic">بَوِّقُوا في رأس الشهر، بصوت البوق، وفي يوم أعيادكم، لأنه أمر الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Loosen from your hearts, the evil thoughts, envy and ignorance, and every guile and malice.</td>
            <td class="coptic">Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ ϯⲕⲁⲕⲓⲁ: ⲛⲉⲙ ⲡⲓⲫ̀ⲑⲟⲛⲟⲥ ⲛⲉⲙ ϯⲙⲉⲧⲁⲧϩⲏⲧ: ⲛⲉⲙ ⲭ̀ⲣⲟϥ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲡⲁⲛⲟⲣⲅⲓⲁ.</td>
            <td class="arabic">حِلُّوا من قلوبكم، أفكار الظلم، والحسد والجهل، وكل غش ومكيدة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">O you believers, celebrate an angelic feast, with psalms and praises, and spiritual songs.</td>
            <td class="coptic">Ⲅⲉⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲁⲩⲓⲥ ⲁ̀ⲣⲓϣⲁⲓ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ϧⲉⲛ ϩⲁⲛⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ϩⲁⲛϩⲱⲥ: ⲛⲉⲙ ϩⲁⲛϩⲱⲇⲏ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">يا جميع أجناس المؤمنين، عيِّدوا ملائكياً، بمزامير وتسابيح، وترانيم روحية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">[Songs of] David saying, “Blessed is He who comes in the name, of the good Lord, from now and to the end of time.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇⲓⲕⲟⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ: ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ Ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ϣⲁ ⲡ̀ϧⲁⲉ̀ ⲛ̀ⲛⲓⲥⲏⲟⲩ.</td>
            <td class="arabic">داودية قائلين، "مبارك الآتي بإسم، الرب الصالح منذ الآن، وإلى آخر الأزمنة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Let the fields rejoice, and everyone on them, for Coming of Christ our God, according to the prophetic voices.</td>
            <td class="coptic">Ⲉⲩⲉ̀ⲣⲁϣⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲉϣϣⲟϯ: ⲛⲉⲙ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲉ ⲛ̀ϧⲏⲧⲟⲩ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲓ̀ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">لتفرح البقاع، وكل ما فيها، من أجل مجئ المسيح إلهنا، كقول الأنبياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">The pure Zechariah, by the Holy Spirit, likewise he said, “Rejoice O daughter of Zion.</td>
            <td class="coptic">Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓⲕⲁⲑⲁⲣⲟⲥ: ϧⲉⲛ Ⲟⲩⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀Ⲁ̀ⲅⲓⲟⲛ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲛⲟϥ ⲙ̀ⲙⲟ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲥⲓⲱⲛ.</td>
            <td class="arabic">زكريا الطاهر قال، بالروح القدس، هكذا "إفرحي، يا إبنة صهيون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold your King is coming, in glory and honor, and with good hymns, riding on a donkey.”</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲓⲥ Ⲡⲉⲟⲩⲣⲟ ⲉϥⲛⲏⲟⲩ: ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ⲛⲉⲙ ϩⲁⲛϩⲩⲙⲛⲟⲥ ⲉ̀ⲛⲁⲛⲉⲩ: ⲉϥⲧⲁⲗⲏⲟⲩⲧ ⲉ̀ⲟⲩⲉ̀ⲱ̀.</td>
            <td class="arabic">هوذا ملكك يأتيكِ، بمجد وكرامة، وتسبيح حسن، راكباً على آتان."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Isaiah the worshiper of God, spoke with the divine voice, with a good and clever tongue, “Tell the cities of Judah.</td>
            <td class="coptic">Ⲑⲉⲟⲥⲉ̀ⲃⲏⲥ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ: ⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲟⲩⲑⲉⲟ̀ⲣⲓⲁ: ϧⲉⲛ ⲟⲩⲗⲁⲥ ⲉϥϣⲉⲡϣⲟⲡ ⲉⲩⲗⲁⲗⲱⲥ: ϫⲉ ⲁ̀ϫⲟⲥ ⲛ̀ⲛⲓⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲓⲟⲩⲇⲁ.</td>
            <td class="arabic">تكلم أشعياء عابد الله، بالمنطق الإلهي، بلسان ماهر حسن النطق، "قولوا لمدن يهوذا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold your majestic Lord, comes like a shepherd, who shepherds his flock, and comforts them.”</td>
            <td class="coptic">Ⲓⲥ Ⲡⲉⲧⲉⲛϭⲟⲓⲥ ⲫⲏⲉⲧⲁ̀ⲙⲁϩⲓ: ⲉϥⲛⲏⲟⲩ ϩⲱⲥ ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲛ̀ⲧⲏϥⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲡⲉϥⲟ̀ϩⲓ: ⲛ̀ⲉ̀ⲥⲱⲟⲩ ϥ̀ⲛⲁϯⲛⲟⲙϯ ⲛⲱⲟⲩ.</td>
            <td class="arabic">ها هو ربكم العزيز، يأتي كمثل راعي، يرعى قطيع غنمه، وسيعزِّيهم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also our father Jacob said, “The authority will not leave Judah, until the Coming of Him who has, the power of many tongues.”</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲉⲛⲓⲱⲧ Ⲓⲁⲕⲱⲃ ⲡⲉϫⲁϥ: ⲛ̀ⲛⲉⲁⲣⲭⲱⲛ ⲙⲟⲩⲛⲕ ϧⲉⲛ Ⲓⲟⲩⲇⲁⲥ: ϣⲁ ⲧⲉϥⲓ̀ ⲛ̀ϫⲉ ⲫⲏⲉ̀ⲧⲉ ϯϫⲟⲙ ⲛⲁϥ: ⲉ̀ⲧⲉ ⲛⲟⲩϥ ⲛ̀ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲗⲁⲥ.</td>
            <td class="arabic">وقال أيضاً أبونا يعقوب، "لا تفنى الرئاسة من يهوذا، حتى يأتي الذي له، لغات الألسن."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Every nation and the tribes, wait upon Him, to tie His colt, to the vine in joy.</td>
            <td class="coptic">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲛⲓⲫⲩⲗⲏ: ⲉⲩⲉ̀ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁϫⲱϥ: ⲛ̀ⲧⲉϥⲙⲟⲩⲣ ϧⲉⲛ ϯⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ: ⲙ̀ⲡⲉϥⲥⲏϫ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ.</td>
            <td class="arabic">كل الشعوب والقبائل، له تنتظر، يربط في الكرمة، جحشه بفرح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Let us all say with, Jeremiah the good prophet, “This is our God, none other can choose but Him.”</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛϫⲟⲥ ⲧⲏⲣⲉⲛ ⲙ̀ⲡⲁⲓⲣⲏϯ: ⲛⲉⲙ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲉⲑⲛⲁⲛⲉϥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲛ̀ⲛⲉⲛⲱⲡ ⲛ̀ⲕⲉⲟⲩⲁⲓ ⲛ̀ⲥⲱⲧⲡ ⲛⲉⲙⲁϥ.</td>
            <td class="arabic">فلنقل كلنا هكذا، مع أرميا النبي الفاضل، "هذا هو إلهنا، لا نحسب آخر أن يختار معه."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">He found every way, of knowledge and granted it, to Jacob with understanding, and to Israel as they deserve.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϫⲓⲙⲓ ⲙ̀ⲙⲱⲓⲧ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉ ϯⲉ̀ⲡⲓⲥⲧⲓⲙⲏ: ⲁϥⲧⲏⲓⲥ ⲛ̀Ⲓⲁⲕⲱⲃ ϧⲉⲛ ⲟⲩⲥⲱⲟⲩⲧⲉⲛ: ⲛⲉⲙ Ⲡⲓⲥⲣⲁⲏⲗ ⲕⲁⲧⲁ ⲫ̀ⲧⲟⲙⲓ.</td>
            <td class="arabic">هو وجد كل طريق، المعرفة وأعطاها، ليعقوب بإستقامة، وإسرائيل كما يليق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Suddenly thereafter, He appeared on earth, and participated in walking, with the people of the earth.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ: ⲁϥⲟⲩⲱⲛϩϥ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲁϥⲉⲣϣ̀ⲫⲏⲣ ⲙ̀ⲙⲟϣⲓ ⲥⲁⲙ̀ⲛⲁⲓ: ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ ⲛ̀ⲣⲉⲙⲛ̀ⲕⲁϩⲓ.</td>
            <td class="arabic">وبغتةً بعد هذا، ظهر على الأرض، وإشترك في المشيْ مع، الناس التُرابيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">A wonder full of glory, He who sits upon the Cherubim, on this day, entered Jerusalem.</td>
            <td class="coptic">Ⲟⲩϣ̀ⲫⲏⲣⲓ ⲉϥⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲁϥⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
            <td class="arabic">عجباً مُمتلئ مجداً، أن الجالس فوق الشاروبيم، في مثل هذا اليوم، دخل أورُشَليم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The King and the Creator, the Unseen One, was seen riding a donkey, and the children before Him.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲣⲉϥⲑⲁⲙⲓⲟ: Ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲉϥⲧⲁⲗⲏⲟⲩⲧ ⲉ̀ⲟⲩⲉ̀ⲱ̀: ⲉ̀ⲣⲉ ⲛⲓⲁ̀ⲗⲱⲟⲩⲓ̀ ϧⲁϫⲱϥ.</td>
            <td class="arabic">الملك الخالق، الغير المرئي، رأوه راكب آتان، والأطفال قدامه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Chanting fervently, in good voices, praising His greatness, without silence.</td>
            <td class="coptic">Ⲣⲏⲧⲟⲥ ⲉⲩⲉⲣⲯⲁⲗⲓⲛ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲏ ⲉⲩⲫⲉⲣⲓⲱ̀ⲟⲩ: ⲟⲩⲟϩ ⲉⲩⲉⲣⲭⲱⲣⲉⲩⲓⲛ: ⲛ̀ⲧⲉϥⲙⲉⲑⲛⲓϣϯ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ.</td>
            <td class="arabic">يرتلون جهراً، بأصوات حسنة، ويمدحون عظمته، بغير سكوت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praising diligently saying, “This is Emmanuel, hosanna in the highest, this is the King of Israel.”</td>
            <td class="coptic">Ⲥⲉⲉⲣϩⲱⲥ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲛⲉϩⲥⲓ: ⲉⲩϫⲱ ⲫⲁⲓ ⲡⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϫⲉ ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">ويسبحون بتيقظ قائلين، "هذا هو عمانوئيل، أوصنا في الأعالي، هذا هو ملك إسرائيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Then He perfected the sayings, of David the spirit-mantled, “Out of the mouths of nursing infants, You have prepared praise.”</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡ̀ⲥⲁϫⲓ: ⲛ̀Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁⲧⲟⲫⲟⲣⲟⲥ: ϫⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ: ⲛ̀ⲁ̀ⲗⲱⲟⲩⲓ̀ ⲁⲕⲥⲉⲃⲧⲉ ⲡⲓⲥ̀ⲙⲟⲩ.</td>
            <td class="arabic">حينذ كمَّل قول، داود اللابس الروح، "من أفواه الأطفال الصغار، أعددت سبحاً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Therefore the Hebrews took, palms and olives and their garments, and spread them before Him, on the road.</td>
            <td class="coptic">Ⲩ̀ⲡⲉⲣⲟⲩⲧⲟⲥ Ⲛⲓϩⲉⲃⲣⲉⲟⲥ: ⲁⲩϭⲓ ⲛ̀ϩⲁⲛⲃⲁⲓ ⲛⲉⲙ ϩⲁⲛϫⲱⲓⲧ: ⲟⲩⲟϩ ⲁⲩⲫⲟⲣϣⲟⲩ ⲛⲉⲙ ⲛⲟⲩϩ̀ⲃⲱⲥ: ⲙ̀ⲡⲉϥⲙ̀ⲑⲟ ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ.</td>
            <td class="arabic">من أجل هذا أخذ العبرانيون، سعفاً وزيتوناً، وفرشوها مع ثيابهم، أمامه في الطريق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">On which He walked upon, saying “This is truly, He who is anticipated, as the Sun of righteousness.”</td>
            <td class="coptic">Ⲫⲏⲉⲑⲙⲟϣⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ: ϫⲉ ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲫⲏⲉ̀ⲧⲟⲩⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟϥ: ⲛ̀ϫⲉ Ⲡⲓⲣⲏ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">الذي يسير فيها، قائلين "هذا هو بالحقيقة، المُرتَجى، شمس البر."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy holy, we praise You as the believers, with the children a hundred fold, and worship Your divinity.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ϧⲁ ⲛⲏⲉⲑⲛⲁϩϯ: ⲛⲉⲙ ⲛⲓⲁ̀ⲗⲱⲟⲩⲓ̀ ϩⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲕⲱⲃ: ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲉ̀ⲧⲉⲕⲙⲉⲑⲛⲟⲩϯ.</td>
            <td class="arabic">قدوس قدوس قدوس، نسبحك نحن المؤمنون، مع الأطفال ربوات أضعاف، ونسجد للاهوتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Savior of the world, the beloved Son of God, we proclaim saying, “Hosanna to the Son of David.”</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲙⲉⲛⲣⲓⲧ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲱ̀ⲥⲁⲛⲛⲁ Ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">يا مخلص العالم، إبن الله الحبيب، صارخين قائلين، "أوصنا يا إبن داود."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Hosanna in the highest, grant us grace and mercy, on Judgment Day and have mercy on us, according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲱ̀ⲥⲁⲛⲛⲁ ⲛ̀ⲧⲓⲥ ⲩⲯⲓⲥⲧⲓⲥ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ ⲛⲉⲙ ⲟⲩⲛⲁⲓ: ϧⲉⲛ Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲕ̀ⲣⲓⲥⲓⲥ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">أوصنا في العُلا، إمنحنا نعمة ورحمة، في يوم الدينونة، وإرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Resurrection

function AdamPsali_2ndDayOfTheResurrection_Vespers(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali (2nd Day of the Resurrection)">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali (2nd Day of the Resurrection)
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ</span>
        <span class="arabic-caption">إبصالية أدام (ثاني يوم القيامة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us sing today, with a voice of joy, for the King of glory, Jesus Christ rose.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">رتلوا اليوم، بصوت الفرح، لأن ملك المجد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone praises, with an incessant voice, for God the Word, Jesus Christ rose.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱⲥ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">كُل واحد يُسبح، بصوت غير ساكت، لأن الله الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He is our God, come let us worship Him, the Lamb of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: Ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">لأنه هو إلهنا، حمل الله، هلموا نسجد له لأن، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The Master died in the flesh, and was buried, and on the third day, Jesus Christ rose.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ ⲁϥⲙⲟⲩ: ϧⲉⲛ ⲧ̀ⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ϧⲉⲛ ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السيد مات، بالجسد ودُفن، وفي اليوم الثالث، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Emmanuel the Word, let us praise Him, with the angels, Jesus Christ rose.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲓⲗⲟⲅⲟⲥ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">فلنسبحه، مع الملائكة، عمانوئيل الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">All the seven orders, worship Him, proclaiming continually, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲍ̅ (ϣⲁϣϥ) ⲛ̀ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">كل الطغمات السبع، تسجد له، صارخة كل حين، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold our father Adam, rejoiced and was glad, with our father Abraham, Jesus Christ rose.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲡⲉⲛⲓⲱⲧ Ⲁ̀ⲇⲁⲙ: ⲁϥⲣⲁϣⲓ ⲟⲩⲟϩ ⲁϥⲟⲩⲛⲟϥ: ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هوذا أبونا آدم، فرح وتهلل، مع أبينا إبراهيم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O prophets, for the Incomprehensible One, our Lord the Master, Jesus Christ rose.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲙ̀ⲫⲟⲟⲩ ϫⲉ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: Ⲡⲉⲛⲛⲟⲩϯ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللوا اليوم أيها الأنبياء، لأن السيد، غير المُدرك إلهنا، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold the Apostles, saw and rejoiced, they preached to the world, Jesus Christ rose.</td>
            <td class="coptic">Ⲓⲥ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩⲛⲁⲩ ⲟⲩⲟϩ ⲁⲩⲟⲩⲛⲟϥ: ⲁⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">ها أن الرسل، رأوا وفرحوا، وكرزوا في العالم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Those who were carrying the spices, the angel appeared to them, saying “He is not here,” Jesus Christ rose.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲛⲓϥⲁⲓⲥⲟϫⲉⲛ: ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲱⲟⲩ ⲁϥⲟⲩⲟⲛϩϥ: ϫⲉ ϥ̀ⲭⲏ ⲙ̀ⲡⲁⲓⲙⲁ ⲁⲛ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">أيضاً حاملات الطيب، ظهر لهنَّ الملاك، قائلاً "ليس هو هنا،" يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Rejoice O Virgin, Mary the Mother of joy, for truly your Son, Jesus Christ rose.</td>
            <td class="coptic">Ⲗⲉⲗⲓ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ: ϫⲉ Ⲡⲉϣⲏⲣⲓ ⲁ̀ⲗⲏⲑⲱⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللي أيتها العذراء، مريم أم الفرح، لأن إبنك بالحقيقة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Today let us rejoice, and be glad, because the King of kings, Jesus Christ rose.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">فلنتهلل اليوم، ونفرح، لأن ملك الملوك، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The Invisible One, saved our forefather, the Savior of the world, Jesus Christ rose.</td>
            <td class="coptic">Ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁⲣⲭⲉⲟⲥ: ⲁϥⲛⲁϩⲙⲟⲩ ⲛ̀ϫⲉ ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: Ⲡ̀ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">آباءن الأولون، خلَّصهم غير المنظور، مخلِّص العالم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You who died, and abolished death, and saved our race, Jesus Christ rose.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥⲙⲟⲩ: ⲟⲩⲟϩ ⲉ̀ⲫ̀ⲙⲟⲩ ⲁϥⲕⲱⲣϥ: ⲛⲉⲙ ⲡⲉⲛⲅⲉⲛⲟⲥ ⲁϥⲛⲁϩⲙⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تباركت يا مَنْ قد مات، وأبطل الموت، وخلَّص جنسنا، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">He has saved His people, with His arm, from the Devil, Jesus Christ rose.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉϥϣⲱⲃϣ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲓⲇⲓⲁⲃⲟⲗⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">وخلَّص شعبه، من إبليس، بذراعه، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Lamb of God, died and abolished, death as God, Jesus Christ rose.</td>
            <td class="coptic">Ⲡⲓϩⲏⲓⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ⲁϥⲙⲟⲩ ⲟⲩⲟϩ ⲁϥⲕⲱⲣϥ: ⲉ̀ⲫ̀ⲙⲟⲩ ϩⲱⲥ ⲛⲟⲩϯ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">حمل الله، مات وأبطل، الموت كإله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Our mouths are full of joy, for the Invisible One, of the high council, Jesus Christ rose.</td>
            <td class="coptic">Ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ϫⲉ Ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲫⲁ ⲡⲓⲥⲟϭⲛⲓ ⲉⲧϭⲟⲥⲓ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">أمتلأ فمنا فرحاً، لأن الغير المرئي، ذا المشورة العظمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praise the Lord our God, our incomprehensible Master, and say likewise, Jesus Christ rose.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: ⲟⲩⲟϩ ϫⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">سبحوا الرب إلهنا، وسيدنا الغير المدرَك، وقولوا هكذا، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">The true hymnist, David the highly honored, cries out saying, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲧ̀ⲁⲫ̀ⲙⲏⲓ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: Ⲇⲁⲩⲓⲇ ⲡⲓϣⲟⲩⲧⲁⲓⲟϥ: ⲉϥⲱϣ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">المرتل الحقيقي، داود الجزيل الكرامة، يصرخ قائلاً، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God our God, on the Cross was crucified, and died as God, Jesus Christ rose.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲁⲩⲁϣϥ: ⲟⲩⲟϩ ⲁⲩⲙⲟⲩ ϩⲱⲥ ⲛⲟⲩϯ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">إبن الله إلهنا، صُلب على الصليب، وإتصر كإله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">This is the day, the Lord has made, let us rejoice today, Jesus Christ rose.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁ Ⲡ̀ϭⲟⲓⲥ ⲑⲁⲙⲓⲟϥ: ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هذا هو اليوم، الذي صنعه الرب، فلنتهلل اليوم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Cross, on which my Lord was crucified, hail to the Resurrection, Jesus Christ rose.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲉ̀ⲧⲁⲩⲉϣ Ⲡⲁϭⲟⲓⲥ ⲉ̀ⲣⲟϥ: ⲭⲉⲣⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السلام للصليب، الذي صُلب عليه الرب، السلام للقيامة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Repose the souls, O who has risen, and save Your people, Jesus Christ rose.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ: ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥⲧⲱⲛϥ: ⲟⲩⲟϩ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ⲛⲁⲓ ⲛⲱⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">الأنفس نيحها، يا مَنْ قام، إرحم شعبك، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O who was incarnate, and was crucified in the His flesh, protect Your people, Jesus Christ rose. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ: ⲟⲩⲟϩ ϧⲉⲛ ⲡⲉϥⲥⲱⲙⲁ ⲁⲩⲁϣϥ: ⲁ̀ⲣⲉϩ ⲉ̀ⲡⲉⲕⲗⲁⲟⲥ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ. ${cross}</td>
            <td class="arabic">يا مَنْ تجسد، وصُلب بالجسد، احفظ شعبك، يسوع المسيح قام. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


function AdamPsali_2ndDayOfTheResurrection_Midnight(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali (2nd Day of the Resurrection)">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali (2nd Day of the Resurrection)
        <span class="coptic-caption">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ</span>
        <span class="arabic-caption">إبصالية أدام (ثاني يوم القيامة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us sing today, with a voice of joy, for the King of glory, Jesus Christ rose.</td>
            <td class="coptic">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">رتلوا اليوم، بصوت الفرح، لأن ملك المجد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone praises, with an incessant voice, for God the Word, Jesus Christ rose.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱⲥ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">كُل واحد يُسبح، بصوت غير ساكت، لأن الله الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He is our God, come let us worship Him, the Lamb of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: Ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">لأنه هو إلهنا، حمل الله، هلموا نسجد له لأن، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The Master died in the flesh, and was buried, and on the third day, Jesus Christ rose.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ ⲁϥⲙⲟⲩ: ϧⲉⲛ ⲧ̀ⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ϧⲉⲛ ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السيد مات، بالجسد ودُفن، وفي اليوم الثالث، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Emmanuel the Word, let us praise Him, with the angels, Jesus Christ rose.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲓⲗⲟⲅⲟⲥ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">فلنسبحه، مع الملائكة، عمانوئيل الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">All the seven orders, worship Him, proclaiming continually, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲍ̅ (ϣⲁϣϥ) ⲛ̀ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">كل الطغمات السبع، تسجد له، صارخة كل حين، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold our father Adam, rejoiced and was glad, with our father Abraham, Jesus Christ rose.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲡⲉⲛⲓⲱⲧ Ⲁ̀ⲇⲁⲙ: ⲁϥⲣⲁϣⲓ ⲟⲩⲟϩ ⲁϥⲟⲩⲛⲟϥ: ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هوذا أبونا آدم، فرح وتهلل، مع أبينا إبراهيم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O prophets, for the Incomprehensible One, our Lord the Master, Jesus Christ rose.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲙ̀ⲫⲟⲟⲩ ϫⲉ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: Ⲡⲉⲛⲛⲟⲩϯ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللوا اليوم أيها الأنبياء، لأن السيد، غير المُدرك إلهنا، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold the Apostles, saw and rejoiced, they preached to the world, Jesus Christ rose.</td>
            <td class="coptic">Ⲓⲥ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩⲛⲁⲩ ⲟⲩⲟϩ ⲁⲩⲟⲩⲛⲟϥ: ⲁⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">ها أن الرسل، رأوا وفرحوا، وكرزوا في العالم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Those who were carrying the spices, the angel appeared to them, saying “He is not here,” Jesus Christ rose.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲛⲓϥⲁⲓⲥⲟϫⲉⲛ: ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲱⲟⲩ ⲁϥⲟⲩⲟⲛϩϥ: ϫⲉ ϥ̀ⲭⲏ ⲙ̀ⲡⲁⲓⲙⲁ ⲁⲛ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">أيضاً حاملات الطيب، ظهر لهنَّ الملاك، قائلاً "ليس هو هنا،" يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Rejoice O Virgin, Mary the Mother of joy, for truly your Son, Jesus Christ rose.</td>
            <td class="coptic">Ⲗⲉⲗⲓ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ: ϫⲉ Ⲡⲉϣⲏⲣⲓ ⲁ̀ⲗⲏⲑⲱⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللي أيتها العذراء، مريم أم الفرح، لأن إبنك بالحقيقة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Today let us rejoice, and be glad, because the King of kings, Jesus Christ rose.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">فلنتهلل اليوم، ونفرح، لأن ملك الملوك، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Luke the wise, and John His beloved, truly have preached, Jesus Christ rose.</td>
            <td class="coptic">Ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ ⲡⲓⲥⲟⲫⲟⲥ: ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲙⲉⲛⲣⲓⲧ: ⲁⲩϩⲓⲱⲓϣ ⲛ̀ⲕⲁⲗⲱⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">لوقا الحكيم، ويوحنا حبيبه، يبشرون جيداً، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You O Christ, the unquenchable Light, come let us praise Him, Jesus Christ rose.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲁⲧϣ̀ϧⲉⲧϧⲱⲧϥ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">مبارك أنت أيها المسيح، النور غير المفحوص، هلموا فلنُسبحه، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">He has saved His people, with His arm, from the Devil, Jesus Christ rose.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉϥϣⲱⲃϣ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲓⲇⲓⲁⲃⲟⲗⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">وخلَّص شعبه، من إبليس، بذراعه، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The true Lamb, let us praise Him, our true God, Jesus Christ rose.</td>
            <td class="coptic">Ⲡⲓϩⲓⲏⲃ ⲙ̀ⲙⲏⲓ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">بالحقيقة نسبح، إلهنا، الحمل الحقيقي، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Guard us O our God, from malice, O our Master the Son of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ ⲱ̀ Ⲡⲉⲛⲛⲟⲩϯ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲭ̀ⲣⲟϥ: Ⲡⲉⲛⲛⲏⲃ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">إحرسنا يا إلهنا، من الغش، يا سيدنا إبن الله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Zion and Jerusalem, rejoice today, with the land of Naphtali, Jesus Christ rose.</td>
            <td class="coptic">Ⲥⲓⲱⲛ ⲛⲉⲙ Ⲓⲉⲣⲟⲥⲁⲗⲏⲙ: ⲙ̀ⲫⲟⲟⲩ ⲉⲩⲉ̀ⲟⲩⲛⲟϥ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲉⲫⲑⲁⲗⲓⲙ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">صهيون وأورُشَليم، اليوم تفرحان، مع أرض نفتاليم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We praise and bless Him, and serve Him, and worship Him, Jesus Christ rose.</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲧⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟϥ: ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">نُسبحه ونُباركه، ونخدمه، ونسجد له، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God our King, died and was buried, and after three days, Jesus Christ rose.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲟⲩⲣⲟ: ⲁϥⲙⲟⲩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ⲙⲉⲛⲉⲛⲥⲁ ϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">إبن الله ملكنا، مات ودُفن، وبعد ثلاثة أيام، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">This is the day, the Lord has made, let us rejoice today, Jesus Christ rose.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁ Ⲡ̀ϭⲟⲓⲥ ⲑⲁⲙⲓⲟϥ: ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هذا هو اليوم، الذي صنعه الرب، فلنتهلل اليوم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Resurrection, and the tomb and the blood, which the only-begotten shed, Jesus Christ rose.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲛⲉⲙ ⲡⲓⲙ̀ϩⲁⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ: ⲉ̀ⲧⲁϥⲫⲟⲛϥ ⲛ̀ϫⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السلام للقيامة، والقبر والدم، الذي سفكه الوحيد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Repose all the souls, in the dwelling of joy, for the sake of Your Mother the Queen, Jesus Christ rose.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ: ϧⲉⲛ ⲫ̀ⲙⲁ ⲛ̀ϣⲱⲡⲓ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲛⲟϥ: ⲉⲑⲃⲉ Ⲧⲉⲕⲙⲁⲩ ϯⲟⲩⲣⲱ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">النفوس نيحها، في مسكن الفرح، من أجل امك الملكة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O who has suffered, and trampled death have mercy, upon us O King of the ages, Jesus Christ rose. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥϭⲓⲙ̀ⲕⲁϩ: ⲟⲩⲟϩ ⲡⲓⲙⲟⲩ ⲁϥⲕⲟⲣϥ: ⲛⲁⲓ ⲛⲁⲛ ⲱ̀ Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲛⲉϩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ. ${cross}</td>
            <td class="arabic">يا مَنْ تألم، وأبطل الموت، إرحمنا يا ملك الدهور، يسوع المسيح قام. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function AdamPsali_BetweenResurrectionAndAscension(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali (Between Resurrection and Ascension)">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali (Between Resurrection and Ascension)
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ</span>
        <span class="arabic-caption">إبصالية أدام (من القيامة الى الصعود)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us sing today, with a voice of joy, for the King of glory, Jesus Christ rose.</td>
            <td class="coptic">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">رتلوا اليوم، بصوت الفرح، لأن ملك المجد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone praises, with an incessant voice, for God the Word, Jesus Christ rose.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱⲥ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">كُل واحد يُسبح، بصوت غير ساكت، لأن الله الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He is our God, come let us worship Him, the Lamb of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: Ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">لأنه هو إلهنا، حمل الله، هلموا نسجد له لأن، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The Master died in the flesh, and was buried, and on the third day, Jesus Christ rose.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ ⲁϥⲙⲟⲩ: ϧⲉⲛ ⲧ̀ⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ϧⲉⲛ ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السيد مات، بالجسد ودُفن، وفي اليوم الثالث، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Emmanuel the Word, let us praise Him, with the angels, Jesus Christ rose.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲓⲗⲟⲅⲟⲥ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">فلنسبحه، مع الملائكة، عمانوئيل الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">All the seven orders, worship Him, proclaiming continually, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲍ̅ (ϣⲁϣϥ) ⲛ̀ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">كل الطغمات السبع، تسجد له، صارخة كل حين، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold our father Adam, rejoiced and was glad, with our father Abraham, Jesus Christ rose.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲡⲉⲛⲓⲱⲧ Ⲁ̀ⲇⲁⲙ: ⲁϥⲣⲁϣⲓ ⲟⲩⲟϩ ⲁϥⲟⲩⲛⲟϥ: ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هوذا أبونا آدم، فرح وتهلل، مع أبينا إبراهيم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O prophets, for the Incomprehensible One, our Lord the Master, Jesus Christ rose.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲙ̀ⲫⲟⲟⲩ ϫⲉ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: Ⲡⲉⲛⲛⲟⲩϯ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللوا اليوم أيها الأنبياء، لأن السيد، غير المُدرك إلهنا، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold the Apostles, saw and rejoiced, they preached to the world, Jesus Christ rose.</td>
            <td class="coptic">Ⲓⲥ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩⲛⲁⲩ ⲟⲩⲟϩ ⲁⲩⲟⲩⲛⲟϥ: ⲁⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">ها أن الرسل، رأوا وفرحوا، وكرزوا في العالم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Those who were carrying the spices, the angel appeared to them, saying “He is not here,” Jesus Christ rose.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲛⲓϥⲁⲓⲥⲟϫⲉⲛ: ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲱⲟⲩ ⲁϥⲟⲩⲟⲛϩϥ: ϫⲉ ϥ̀ⲭⲏ ⲙ̀ⲡⲁⲓⲙⲁ ⲁⲛ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">أيضاً حاملات الطيب، ظهر لهنَّ الملاك، قائلاً "ليس هو هنا،" يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Rejoice O Virgin, Mary the Mother of joy, for truly your Son, Jesus Christ rose.</td>
            <td class="coptic">Ⲗⲉⲗⲓ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ: ϫⲉ Ⲡⲉϣⲏⲣⲓ ⲁ̀ⲗⲏⲑⲱⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللي أيتها العذراء، مريم أم الفرح، لأن إبنك بالحقيقة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Today let us rejoice, and be glad, because the King of kings, Jesus Christ rose.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">فلنتهلل اليوم، ونفرح، لأن ملك الملوك، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Luke the wise, and John His beloved, truly have preached, Jesus Christ rose.</td>
            <td class="coptic">Ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ ⲡⲓⲥⲟⲫⲟⲥ: ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲙⲉⲛⲣⲓⲧ: ⲁⲩϩⲓⲱⲓϣ ⲛ̀ⲕⲁⲗⲱⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">لوقا الحكيم، ويوحنا حبيبه، يبشرون جيداً، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You O Christ, the unquenchable Light, come let us praise Him, Jesus Christ rose.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲁⲧϣ̀ϧⲉⲧϧⲱⲧϥ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">مبارك أنت أيها المسيح، النور غير المفحوص، هلموا فلنُسبحه، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">He has saved His people, with His arm, from the Devil, Jesus Christ rose.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉϥϣⲱⲃϣ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲓⲇⲓⲁⲃⲟⲗⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">وخلَّص شعبه، من إبليس، بذراعه، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The true Lamb, let us praise Him, our true God, Jesus Christ rose.</td>
            <td class="coptic">Ⲡⲓϩⲓⲏⲃ ⲙ̀ⲙⲏⲓ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">بالحقيقة نسبح، إلهنا، الحمل الحقيقي، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Guard us O our God, from malice, O our Master the Son of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ ⲱ̀ Ⲡⲉⲛⲛⲟⲩϯ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲭ̀ⲣⲟϥ: Ⲡⲉⲛⲛⲏⲃ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">إحرسنا يا إلهنا، من الغش، يا سيدنا إبن الله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Zion and Jerusalem, rejoice today, with the land of Naphtali, Jesus Christ rose.</td>
            <td class="coptic">Ⲥⲓⲱⲛ ⲛⲉⲙ Ⲓⲉⲣⲟⲥⲁⲗⲏⲙ: ⲙ̀ⲫⲟⲟⲩ ⲉⲩⲉ̀ⲟⲩⲛⲟϥ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲉⲫⲑⲁⲗⲓⲙ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">صهيون وأورُشَليم، اليوم تفرحان، مع أرض نفتاليم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We praise and bless Him, and serve Him, and worship Him, Jesus Christ rose.</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲧⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟϥ: ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">نُسبحه ونُباركه، ونخدمه، ونسجد له، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God our King, died and was buried, and after three days, Jesus Christ rose.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲟⲩⲣⲟ: ⲁϥⲙⲟⲩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ⲙⲉⲛⲉⲛⲥⲁ ϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">إبن الله ملكنا، مات ودُفن، وبعد ثلاثة أيام، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">This is the day, the Lord has made, let us rejoice today, Jesus Christ rose.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁ Ⲡ̀ϭⲟⲓⲥ ⲑⲁⲙⲓⲟϥ: ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هذا هو اليوم، الذي صنعه الرب، فلنتهلل اليوم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Resurrection, and the tomb and the blood, which the only-begotten shed, Jesus Christ rose.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲛⲉⲙ ⲡⲓⲙ̀ϩⲁⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ: ⲉ̀ⲧⲁϥⲫⲟⲛϥ ⲛ̀ϫⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السلام للقيامة، والقبر والدم، الذي سفكه الوحيد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Repose all the souls, in the dwelling of joy, for the sake of Your Mother the Queen, Jesus Christ rose.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ: ϧⲉⲛ ⲫ̀ⲙⲁ ⲛ̀ϣⲱⲡⲓ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲛⲟϥ: ⲉⲑⲃⲉ Ⲧⲉⲕⲙⲁⲩ ϯⲟⲩⲣⲱ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">النفوس نيحها، في مسكن الفرح، من أجل امك الملكة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O who has suffered, and trampled death have mercy, upon us O King of the ages, Jesus Christ rose. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥϭⲓⲙ̀ⲕⲁϩ: ⲟⲩⲟϩ ⲡⲓⲙⲟⲩ ⲁϥⲕⲟⲣϥ: ⲛⲁⲓ ⲛⲁⲛ ⲱ̀ Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲛⲉϩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ. ${cross}</td>
            <td class="arabic">يا مَنْ تألم، وأبطل الموت، إرحمنا يا ملك الدهور، يسوع المسيح قام. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function WatosPsali_BetweenResurrectionAndAscension(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Watos Psali (Between Resurrection and Ascension)">
    
    <caption id="caption_table_${tableNumber}" class="caption">Watos Psali (Between Resurrection and Ascension)
        <span class="coptic-caption">Ⲁ̀ⲗⲏⲑⲱⲥ ⲧⲉⲛⲛⲁϩϯ ⲁ̀ⲛⲟⲛ</span>
        <span class="arabic-caption">إبصالية واطس (من القيامة الى الصعود)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Truly we believe, we the orthodox people, that the King of the ages, Christ is risen from the dead.</td>
            <td class="coptic">Ⲁ̀ⲗⲏⲑⲱⲥ ⲧⲉⲛⲛⲁϩϯ ⲁ̀ⲛⲟⲛ: ⲡⲓϣ̀ⲗⲟⲗ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲛ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱⲛ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">حقاً نؤمن، نحن الشعب الأرثوذوكسي، أن ملك الدهور، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">All joy and happiness, God gave unto us, for our King Emmanuel, Christ is risen from the dead.</td>
            <td class="coptic">Ⲃⲟⲛ ⲟⲩⲣⲁϣⲓ ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ ⲁϥⲧⲏⲓⲧⲟⲩ ⲛⲁⲛ: ϫⲉ Ⲡⲉⲛⲟⲩⲣⲟ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">فرحاً وتهليلاً، أعطاهما لنا الله، لأن ملكنا عمانوئيل، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Every race in mankind, follow upright paths, for the Word the Lover of Man, Christ is risen from the dead.</td>
            <td class="coptic">Ⲅⲉⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ: ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ ⲥⲉⲥⲟⲩⲧⲱⲛ: ϫⲉ Ⲡⲓⲗⲟⲅⲟⲥ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">كل جنس البشر، جميع طرقهم مستقيمة، لأن الكلمة مُحب البشر، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the King of Israel, said with the psaltery, God has joyfully risen, Christ is risen from the dead.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ: ⲁϥϫⲟⲥ ϧⲉⲛ ⲡⲓⲯⲁⲗⲧⲏⲣⲓⲟⲛ: ϫⲉ ⲁϥⲧⲱⲛϥ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">داود ملك إسرائيل، قال في المزمور، قد قام الله بتهليل، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">For the sake of the holy Resurrection, sing praise and rejoice, preach to the nations, for Christ is risen from the dead.</td>
            <td class="coptic">Ⲉⲑⲃⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲉⲑⲟⲩⲁⲃ: ϩⲱⲥ ⲑⲉⲗⲏⲗ ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ: ϩⲓϣⲉⲛⲛⲟⲩϥⲓ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ ⲉⲩⲥⲟⲡ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">من أجل القيامة المقدسة، سبحوا وهللوا ورتلوا، وبشروا معاً في الامم، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Seven angelic orders, praise Him spiritually, for the salvation of the world, Christ is risen from the dead.</td>
            <td class="coptic">Ⲍ̅ (ϣⲁϣϥ) ⲛ̀ⲧⲁⲅⲙⲁ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟϥ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ⲉⲑⲃⲉ ⲫ̀ⲛⲟϩⲉⲙ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">سبع طغمات الملائكة، تُسبحه روحياً، من أجل خلاص العالم، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">God is the Son of God, praise Him with music, for He has saved our race, Christ is risen from the dead.</td>
            <td class="coptic">Ⲏⲗ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲙ̀ⲙⲟⲥⲓⲕⲟⲛ: ϫⲉ ⲛ̀ⲑⲟϥ ⲁϥⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">إيل هو إبن الله، نُسبحه بالموسيقى، لأنه خلَّص جنسنا، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O race of Adam, with spiritual joy, for the Creator of Adam, Christ is risen from the dead.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀Ⲁ̀ⲇⲁⲙ: ϧⲉⲛ ⲟⲩⲣⲁϣⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ϫⲉ Ⲡⲓⲣⲉϥⲥⲱⲛⲧ ⲛ̀Ⲁ̀ⲇⲁⲙ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">تهلل يا جنس آدم، بفرح روحي، لأن خالق آدم، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">All the creation together, rejoices in this mystery, for the Son of the Holy, Christ is risen from the dead.</td>
            <td class="coptic">Ⲓⲥ ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ ⲉⲩⲥⲟⲡ: ⲣⲁϣⲓ ⲉⲑⲃⲉ ⲡⲁⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ϫⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫⲏⲉⲑⲟⲩⲁⲃ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">ها البرية تفرح معاً، من أجل هذا السر، لأن إبن القدوس، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Our Lord Jesus Christ, the Son of God the Word, we praise Him saying, “Christ is risen from the dead.”</td>
            <td class="coptic">Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">نُسبح الرب، يسوع المسيح، إبن الله الكلمة قائلين، "المسيح قام من بين الأموات."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Then He was placed in the tomb, according to the prophetic sayings, and on the third day, Christ is risen from the dead.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁⲩⲭⲁϥ ϧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ: ⲕⲁⲧⲁ ⲛⲓⲥ̀ⲙⲏ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ: ϧⲉⲛ ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">وُضع أيضاً في القبر، حسب الأخبار النبوية، وفي اليوم الثالث، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Let us understand, the Gospel O people, which has said “The Immortal, Christ is risen from the dead.”</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲕⲁϯ ⲱ̀ ⲛⲓⲗⲁⲟⲥ: ⲉ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲫⲏⲉ̀ⲧⲁϥϫⲟⲥ ϫⲉ Ⲡⲓⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">فلنفهم الإنجيل، أيها الشعوب، الذي قال أن غير المائت، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">All the heavenly orders, and the rational natures, were amazed at Your works, Christ is risen from the dead.</td>
            <td class="coptic">Ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛⲓⲫⲩⲥⲓⲥ ⲛ̀ⲛⲟⲏ̀ⲣⲟⲛ: ⲁⲩⲉⲣϣ̀ⲫⲏⲣⲓ ϧⲉⲛ ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">كل الطغمات السمائية، والطبائع العقلية، تعجبت من أعمالك، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Exalted are Your works, and Your mysterious judgments, for You are the King of heaven, Christ is risen from the dead.</td>
            <td class="coptic">Ⲝⲉⲣⲉⲧⲱⲛ ⲛⲉ ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀: ⲛⲉⲕϩⲁⲡ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">وبالأكثر أعمالك، وأحكامك المعجزة، لأنك أنت هو ملك السموات، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">A name of pride is Your name, O Son of God the Lover of Man, we believe without doubt, Christ is risen from the dead.</td>
            <td class="coptic">Ⲟⲩⲣⲁⲛ ⲛ̀ϣⲟⲩϣⲟⲩ ⲡⲉ ⲡⲉⲕⲣⲁⲛ: Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲟⲛ: ⲧⲉⲛⲛⲁϩϯ ⲁϭⲛⲉ ⲥ̀ⲕⲁⲛⲇⲁⲗⲟⲛ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">إسم الإفتخار هو إسمك، يا إبن الله محب البشر، نؤمن بغير شك، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">One from the Trinity, the eternal Word, the Son of the true God, Christ is risen from the dead.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲧ̀ⲣⲓⲁⲥ: Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲁⲓⲇⲓⲟⲛ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲁ̀ⲗⲏⲑⲱⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">الواحد من الثالوث، الكلمة الذاتي، إبن الله الحقيقي، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Our mouths are filled with joy, and immeasurable happiness, for the Physician of the sick, Christ is risen from the dead.</td>
            <td class="coptic">Ⲣⲱⲛ ⲅⲁⲣ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ⲛⲉⲙ ⲟⲩⲟⲩⲛⲟϥ ⲛ̀ⲁⲧⲙⲉⲧⲣⲟⲛ: ϫⲉ Ⲡⲓⲥⲏⲓⲛⲓ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">فمنا إمتلأ فرحاً، وسروراً لا يُقاس، لأن طبيب المرضى، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hear me O my beloved, who have received the testament, for the Resurrection of the Son of God, Christ is risen from the dead.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ: ⲛⲏⲉ̀ⲧⲁⲩϭⲓ ⲙ̀ⲡⲓⲡⲁⲣⲁⲃⲓⲟⲛ: ⲉⲑⲃⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲙ̀Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">إسمعوا يا أحبائي، الذين أخذوا الوصية، من أجل قيامة إبن الله، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We believe without doubt, of this mysterious matter, that the only-begotten Son, Christ is risen from the dead.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁϩϯ ⲁϭⲛⲉ ⲥⲁⲛⲓⲥ: ϧⲉⲛ ⲡⲁⲓϩⲱⲃ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ϫⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">نؤمن بغير شك، بهذا الأمر السري، أن الإبن الوحيد، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Behold all the prophets, prophesied also, for the King of all kings, Christ is risen from the dead.</td>
            <td class="coptic">Ⲩⲡⲡⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲧⲏⲣⲟⲩ: ⲁⲩⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ ⲇⲉ ⲟⲛ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ ⲧⲏⲣⲟⲩ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">هوذا جميع الأنبياء، تنبأوا أيضاً، أن ملك جميع الملوك، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God of the prophets, and the righteous and the just, He is the Master, Christ is risen from the dead.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲛ: ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">إله الأنبياء، والأبرار والصديقين، هو السيد، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy O Lord and holy, holy now and unto the ages, You are the Son of the Holy, Christ is risen from the dead.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ Ⲡ̀ϭⲟⲓⲥ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲭ̀ⲟⲩⲁⲃ ϯⲛⲟⲩ ϣⲁ ⲛⲓⲉ̀ⲱⲛ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫⲏⲉⲑⲟⲩⲁⲃ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">قدوس أيها الرب وقدوس، قدوس الآن وإلى الدهور، لأنك أنت إبن القدوس، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The Savior of the whole world, our true God, we believe with all our hearts, Christ is risen from the dead.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ: ⲧⲉⲛⲛⲁϩϯ ϧⲉⲛ ⲡⲉⲛϩⲏⲧ ⲧⲏⲣϥ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ.</td>
            <td class="arabic">نؤمن بكل قلوبنا، بأن إلهنا الحقيقي، مخلِّص العالم كله، المسيح قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O who was before the ages, the Creator of all ages, we praise You forever, Christ is risen from the dead. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉⲧϣⲟⲡ ϧⲁϫⲉⲛ ⲛⲓⲉ̀ⲛⲉϩ: Ⲡⲓⲣⲉϥⲥⲱⲛⲧ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ: Ⲡⲭ̅ⲥ̅ ⲁ̀ⲛⲉⲥⲧⲏ ⲉⲕ ⲛⲉⲕⲣⲱⲛ. ${cross}</td>
            <td class="arabic">أيها الكائن قبل الآباد، وخالق الدهور، نُسبحك إلى الآباد، المسيح قام من بين الأموات. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function AdamPsali_BetweenAscensionAndPentecost(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali (Between Ascension and Pentecost)
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲕⲁⲗⲱⲥ</span>
        <span class="arabic-caption">إبصالية أدام (من الصعود الى العنصرة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Sing justly, with doxologies, to Jesus Christ, who is of authority.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲕⲁⲗⲱⲥ: ϧⲉⲛ ϩⲁⲛⲇⲟⲝⲟⲗⲟⲅⲓⲁ: ⲛ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲁ ϯⲉⲝⲟⲩⲥⲓⲁ.</td>
            <td class="arabic">رتلوا حسناً، بتماجيد، ليسوع المسيح، ذي السلطان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone praises, the Incomprehensible, and the Invisible, our Savior Jesus.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉ ϩⲱⲥ: ⲉ̀Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ: Ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">الجميع يسبحون، الغير المُدرَك، مخلِّصنا يسوع، الغير المرئي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly indeed, on this day, the King of glory, ascended into the heavens.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲇⲓⲕⲉⲟⲛ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲛ̀ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
            <td class="arabic">لأنه حقاً، في مِثل هذا اليوم، صعد إلى السماء، ملك المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">For David has said, with the voice of the trumpet, “Sing to Christ, with hymns.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲁϥϫⲟⲥ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ: ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲉ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϧⲉⲛ ϩⲁⲛϩⲩⲙⲛⲟⲥ.</td>
            <td class="arabic">قال داود، بصوت البوق، "رتلوا للمسيح، بتسابيح."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Because of the mysteries, the King of the ages, has performed, He also spoke to them.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲛⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉ̀ⲧⲁϥⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ: ⲛ̀ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ.</td>
            <td class="arabic">من أجل الأسرار، التي صنعها، ملك الدهور، تكلم أيضاً معهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">The Only-Begotten, said many things, to His Apostles, after the Resurrection.</td>
            <td class="coptic">Ⲍⲉⲱϣ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙ ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲙⲉⲛⲉⲛⲥⲁ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">كثيراً ما تكلم، الإبن الوحيد الجنس، مع رسله، بعد القيامة قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold “Do you have, anything to eat,” they gave to Him, and He took and ate.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ϫⲉ ⲟⲩⲟⲛ: ⲧⲉⲧⲉⲛ ⲉⲛⲭⲁⲓ ⲛ̀ⲟⲩⲱⲙ: ⲁⲩϯ ⲛⲁϥ ⲇⲉ ⲟⲛ: ⲟⲩⲟϩ ⲁϥϭⲓ ⲁϥⲟⲩⲱⲙ.</td>
            <td class="arabic">"هل يوجد عندكم، شئ يؤكل،" فأعطوه أيضاً، وأخذ وأكل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">They gathered and gave Him, broiled fish, and honeycomb, and He took and ate.</td>
            <td class="coptic">Ⲑⲱⲟⲩϯ ⲁⲩϯ ⲛⲁϥ: ⲛ̀ⲟⲩⲧⲉⲃⲧ ⲉϥϫⲉϥϫⲱϥ: ⲛⲉⲙ ⲟⲩⲛⲏⲛⲓ: ⲉ̀ⲧⲁϥϭⲓ ⲁϥⲟⲩⲱⲙ.</td>
            <td class="arabic">إجتمعوا وأعطوه، سمكاً مشوياً، وشهداً، فأخذ وأكل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus with His authority, blessed His Apostles, and was taken by a cloud, and ascended into the heavens.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ ϧⲉⲛ ⲡⲉϥⲉⲣϣⲓϣⲓ: ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲥϣⲟⲡϥ ⲛ̀ϫⲉ ⲟⲩϭⲏⲡⲓ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ.</td>
            <td class="arabic">يسوع بسلطانه، بارك رسله، وأخذته سحابة، وصعد إلى السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Jesus the true Lord, the King of heaven, the true Light, ascended to heaven.</td>
            <td class="coptic">Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ ⲙ̀ⲙⲏⲓ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲧ̀ⲫⲉ.</td>
            <td class="arabic">الرب يسوع الحقيقي، ملك السماء، النور الحقيقي، صعد إلى السماء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Luke has said, in the gospel, and Matthew has said, with Mark also.</td>
            <td class="coptic">Ⲗⲟⲩⲕⲁⲥ ⲁϥϫⲟⲥ: ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲛⲉⲙ Ⲙⲁⲧⲑⲉⲟⲥ ⲁϥϫⲟⲥ: ⲛⲉⲙ Ⲙⲁⲣⲕⲟⲥ ⲇⲉ ⲟⲛ.</td>
            <td class="arabic">قال لوقا، في الإنجيل، مع متَّى، ومرقس أيضاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">“No one has ascended, up into heaven, except the One who came, down from heaven.”</td>
            <td class="coptic">Ⲙ̀ⲡⲉ ϩ̀ⲗⲓ ϣⲉⲛⲁϥ: ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲉ̀ⲃⲏⲗ ⲉ̀ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ.</td>
            <td class="arabic">"ليس أحد، صعد إلى السماء، إلا الذي نزل، من السماء."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">“That is the Son of Man, who dwells in heaven, Jesus the Governor,” John has witnessed.</td>
            <td class="coptic">Ⲛ̀ϫⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲣⲱⲙⲓ: ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲧ̀ⲫⲉ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲣⲉϥⲉⲣϩⲉⲙⲓ: Ⲓⲱⲁⲛⲛⲏⲥ ⲁϥⲉⲣⲙⲉⲑⲣⲉ.</td>
            <td class="arabic">"إبن البشر، الساكن في السماء، يسوع المُدبر،" وشهد يوحنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You indeed, O Christ our Master, upon the throne, of Your glory justly.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϩⲓϫⲉⲛ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ: ⲛ̀ⲧⲉ ⲡⲉⲕⲱ̀ⲟⲩ ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">مبارك أنت بالحقيقة، أيها السيد المسيح، على كرسي، مجدك حسناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">And He has taught, His Apostles, until the day, wherein He ordered them.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲧ̀ⲥⲁⲃⲱⲟⲩ: ϣⲁ ⲡⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁϥϩⲟⲛϩⲉⲛ ⲉ̀ⲧⲟⲧⲟⲩ: ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">وعلَّم، رسله، إلى اليوم، الذي أمرهم فيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Christ our King, after His Resurrection, appeared to them, and He ate with them.</td>
            <td class="coptic">Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲟⲩⲣⲟ: ⲙⲉⲛⲉⲛⲥⲁ Ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲁϥⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲱⲟⲩ: ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲙ ⲛⲉⲙⲱⲟⲩ.</td>
            <td class="arabic">المسيح ملكنا، بعد قيامته، ظهر لهم، وأكل معهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice O believers, in the feast of the Only-Begotten, who created the heavens, and all their hosts.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲙ̀ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲛⲉⲙ ⲛⲟⲩⲇⲩⲛⲁⲙⲓⲥ.</td>
            <td class="arabic">إفرحوا أيها المؤمنون، في عيد الوحيد الجنس، الذي خلق، السموات وجندها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praise the Lover of Man, the King of the ages, who created man, in His likeness.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲁϥⲑⲁⲙⲓⲟ ⲙ̀ⲡⲓⲣⲱⲙⲓ: ⲕⲁⲧⲁ ⲧⲉϥϩⲩⲕⲱⲛ.</td>
            <td class="arabic">سبحوا محب البشر، ملك الدهور، الذي خلق، الإنسان كصورته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We pray to You, with an upright heart, and ascribe unto You, spiritual praise.</td>
            <td class="coptic">Ⲧⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ: ϧⲉⲛ ⲟⲩϩⲏⲧ ⲉϥⲥⲟⲩⲧⲱⲛ: ⲧⲉⲛⲟⲩⲱⲣⲡ ⲛⲁⲕ: ⲛ̀ϩⲱⲥ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">نطلب منك، بقلب مستقيم، ونرسل إليك، تسابيح روحية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">O Son of God, guard us from inflation, and death and earthquakes, and from persecutions.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲛⲓϩ̀ⲃⲱⲛ: ⲛⲉⲙ ⲟⲩⲙⲟⲩ ⲛⲉⲙ ⲟⲩⲙⲟⲛⲙⲉⲛ: ⲛⲉⲙ ⲛⲓⲇⲓⲱⲅⲙⲟⲥ.</td>
            <td class="arabic">يا إبن الله، أحفظنا من الغلاء، والموت والزلازل، والإضطهادات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">This is the day, the Lord has made, let us rejoice, and be glad therein.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁ Ⲡ̀ϭⲟⲓⲥ ⲑⲁⲙⲓⲟϥ: ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲙⲟⲛ ⲛ̀ϧⲏⲧϥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲟⲩⲛⲟϥ.</td>
            <td class="arabic">هذا هو اليوم، الذي صنعه الرب، فلنتهلل، ونفرح فيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the Resurrection, O Jerusalem and Zion, and the mountain of the Ascension, and the mountain of Kranion.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲱ̀ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛⲉⲙ Ⲥⲓⲱⲛ: ⲛⲉⲙ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲁ̀ⲛⲁⲗⲩⲯⲓⲥ: ⲛⲉⲙ ⲡⲓⲧⲱⲟⲩ ⲛ̀Ⲕ̀ⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">السلام للقيامة، يا أورُشَليم وصهيون، وجبل الصعود، وجبل الإقرانيون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Savior of the world, at Your Coming, save Your people, and bless Your inheritance.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϧⲉⲛ Ⲧⲉⲕⲡⲁⲣⲟⲩⲥⲓⲁ: ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">يا مخلِّص العالم، في ظهورك، خلِّص شعبك، وبارك ميراثك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O our Lord Jesus Christ, have compassion upon Your people, guard them in truth, in the Paradise. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ⲁ̀ⲗⲏⲑⲱⲥ: ϧⲉⲛ Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ. ${cross}</td>
            <td class="arabic">يا ربنا يسوع ، تحنن على شعبك، وأحفظهم بالحقيقة، في الفردوس. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function WatosPsali_BetweenAscensionAndPentecost(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Watos Psali (Between Ascension and Pentecost)">
    
    <caption id="caption_table_${tableNumber}" class="caption">Watos Psali (Between Ascension and Pentecost)
        <span class="coptic-caption">Ⲁ̀ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲙⲟϩ ⲛ̀ⲣⲁϣⲓ</span>
        <span class="arabic-caption">إبصالية واطس (من الصعود الى العنصرة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The world was filled with joy, and the heavens with gladness, and glorifying with might, to the name of Emmanuel.</td>
            <td class="coptic">Ⲁ̀ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ⲁ̀ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲙⲟϩ ⲛ̀ⲑⲉⲗⲏⲗ: ⲁϥϭⲓⲱ̀ⲟⲩ ϧⲉⲛ ⲡⲓⲁ̀ⲙⲁϩⲓ: ⲛ̀ϫⲉ ⲫ̀ⲣⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">أمتلأ العالم فرحاً، والسموات تهليلاً، وتمجيداً بالعز، لإسم عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Let everyone praise Him, glorify and exalt Him, for the Incomprehensible ascended, to the place He came from.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ϩⲱⲥ ⲙⲁⲱ̀ⲟⲩ ⲛⲁϥ: ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϫⲉ ⲁϥϣⲉⲛⲁϥ ⲛ̀ϫⲉ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: ⲉ̀ⲡⲓⲙⲁ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ.</td>
            <td class="arabic">سبحوه جميعاً، ومجدوه وزيدوه رفعة، لأن الغير المدرَكْ قد صعد، إلى الموضع الذي أتى منه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For the heavens and the earth, chant to Him together, for the earthly beings, became higher than all the creatures.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲡⲓⲕⲁϩⲓ: ⲥⲉⲉⲣϩⲩⲙⲛⲟⲥ ⲛⲉⲙ ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ: ⲉⲑⲃⲉ ϫⲉ ⲁ̀ ⲛⲓⲣⲉⲙⲛ̀ⲕⲁϩⲓ: ⲉⲣⲥⲁ ⲡ̀ϣⲱⲓ ⲛ̀ⲛⲓⲥⲱⲛⲧ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">لأن السموات والأرض، تسبح معاً، من أجل أن الأرضيين، صاروا فوق جميع المخلوقات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Everything written in the Law, of Moses was fulfilled, and the Psalms to perfect, the prophetic sayings about Him.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲟⲛ ⲛ̀ϫⲉ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ⲉⲧⲥ̀ϧⲏⲟⲩⲧ ϩⲓⲫ̀ⲛⲟⲙⲟⲥ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ: ⲛⲉⲙ ⲛⲓⲯⲁⲗⲙⲟⲥ ⲉⲑⲃⲏⲧϥ: ⲛ̀ⲧⲟⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">صَدَقَتْ كل الأشياء، المكتوبة عنه في ناموس موسى، والمزامير من أجله، لتكمل أقوال الأنبياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, but He is God the Lover of Man, who came for our salvation.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله محب البشر، الذي أتى لأجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Many times He said, Adonai Jesus Christ the Eternal, “Do you have here, anything to eat,”</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ Ⲁ̀ⲇⲱⲛⲁⲓ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲁⲓⲇⲓⲁ: ϫⲉ ⲟⲩⲟⲛⲧⲉⲧⲉⲛ ⲉⲛⲭⲁⲓ: ⲛ̀ⲟⲩⲱⲙ ⲙ̀ⲡⲁⲓⲙⲁ.</td>
            <td class="arabic">كثيراً قال لهم أدوناي، يسوع المسيح الذاتي، "هل يوجد عندكم، شئ يُؤْكل ههنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold the Apostles gave Him, broiled fish and honeycomb, and when He took it, He ate before them.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲁⲩϯ ⲛⲁϥ: ⲛ̀ⲟⲩⲧⲉⲃⲧ ⲉϥϫⲉϥϫⲱϥ: ⲛⲉⲙ ⲟⲩⲛⲏⲛⲓ ⲟⲩⲟϩ ⲉ̀ⲧⲁϥϭⲓ: ⲙ̀ⲡⲟⲩⲙ̀ⲑⲟ ⲁϥⲟⲩⲱⲙ.</td>
            <td class="arabic">هوذا الرسل أعطوه، سمكاً مشوياً وشهداً، ولما أخذ، أكل قدامهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Yours is the power and honor, O Jesus the eternal Logos, we proclaim to Him saying, “Glory to You O good Lover of Man.”</td>
            <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: ⲱ̀ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲁⲓⲇⲓⲟⲥ: ⲫⲁⲓ ⲙⲁⲣⲉⲛⲱϣ ⲟⲩⲃⲏϥ ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ: Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لك القوة والكرامة، يا يسوع الكلمة الذاتي، هذا نصرخ نحوه قائلين، "المجد لك يا محب البشر الصالح."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The One who dwells in the highest, said these things to them, He is the Holy of holies our King, His name is the Most High Lord.</td>
            <td class="coptic">Ⲓⲥ ⲛⲁⲓ ⲛⲉ ⲛⲏⲉ̀ⲧⲁϥϫⲱ ⲙ̀ⲙⲱⲟⲩ: ⲛ̀ϫⲉ ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: Ⲫⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ Ⲡⲉⲛⲟⲩⲣⲟ: ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲡ̀ϭⲟⲓⲥ ⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">هذا هو ما قاله، الساكن في الأعالي، قدوس القديسين ملكنا، إسمه هو الرب العالي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">According to the saying, of David in his prophecy, “Jesus ascended to the highest, and led captivity captive.”</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥⲥⲁϫⲓ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲧⲉϥⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: Ⲓⲏⲥⲟⲩⲥ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϭⲓⲥⲓ: ⲁϥⲉⲣⲉⲭⲙⲁⲗⲱⲧⲉⲩⲓⲛ ⲛ̀ⲟⲩⲉⲭⲙⲁⲗⲱⲥⲓⲁ.</td>
            <td class="arabic">كما قال داود، في نبوته، "يسوع صعد إلى العُلاء، وسَبَى سبياً".</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover “He gave honors to mankind, O kingdoms of the earth, praise and sing to God, for He saved Adam the first man.”</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁϥϯ ⲛ̀ϩⲁⲛⲧⲁⲓⲟ ⲛ̀ⲛⲓⲣⲱⲙⲓ: ⲛⲓⲙⲉⲧⲟⲩⲣⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ϩⲱⲥ ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲉ̀Ⲫ̀ⲛⲟⲩϯ: ϫⲉ ⲁϥⲥⲱϯ ⲛ̀Ⲁ̀ⲇⲁⲙ ⲡⲓϣⲟⲣⲡ ⲛ̀ⲣⲱⲙⲓ.</td>
            <td class="arabic">وأيضاً "أعطى الناس كرامات، يا جميع ممالك الأرض، سبحوا ورتلوا لله، لأنه خلَّص آدم الإنسان الأول."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">After forty days, He appeared to them and spoke, about the kingdom of God, and ate with them.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ϩ̀ⲙⲉ (ⲙ̅) ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲁϥⲟⲩⲱⲛϩ ⲙ̀ⲙⲟϥ ⲉ̀ⲣⲱⲟⲩ: ⲟⲩⲟϩ ⲁϥⲥⲁϫⲓ ⲉⲑⲃⲉ ϯⲙⲉⲧⲟⲩⲣⲟ: ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲙ ⲛⲉⲙⲱⲟⲩ.</td>
            <td class="arabic">وبعد أربعين يوماً، ظهر لهم وتكلم، من أجل ملكوت الله، وأكل معهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Those whom Jesus chose, He taught them of the day, when they shall preach to all the Gentiles, before He ascended into the heavens.</td>
            <td class="coptic">Ⲛⲏⲉ̀ⲧⲁ Ⲓⲏⲥⲟⲩⲥ ⲥⲟⲧⲡⲟⲩ: ⲉ̀ⲧⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ ⲟⲩⲟϩ ⲁϥⲧ̀ⲥⲁⲃⲱⲟⲩ: ϣⲁ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲁϥϩⲟⲛϩⲉⲛ ⲉ̀ⲧⲟⲧⲟⲩ: ⲉ̀ϩⲓⲱⲓϣ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">الذين إختارهم يسوع، لما صعد إلى السماء وعلمهم، إلى اليوم الذي أمرهم فيه، أن يكرزوا في جميع الأمم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Many times the King of the powers, commanded His Apostles, to not leave Jerusalem, but wait for the Father’s time justly.</td>
            <td class="coptic">Ⲝⲉⲣⲓⲧⲱⲥ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ: ⲛⲁϥϩⲟⲛϩⲉⲛ ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉ̀ϣ̀ⲧⲉⲙⲫⲱⲣϫ ⲥⲁⲃⲟⲗ ⲛ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲁⲗⲗⲁ ⲉ̀ⲟ̀ϩⲓ ⲙ̀ⲡⲓⲱϣ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">كثيراً ملك القوات، كان يأمر رسله، أن لا يبرحوا من أورُشَليم، بل ينتظرون مَوْعِدِ الآب حسناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Thereafter they walked in the world, to preach the Gospel, praising and proclaiming, “Christ ascended into the heavens.”</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲩⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲉⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲉⲩϩⲱⲥ ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ.</td>
            <td class="arabic">ومَشُوا في العالم، يكرزوا بالإنجيل، يسبحون ويهتفون قائلين، "أن المسيح صعد إلى السماء."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">“The Lord said to my Lord, ‘Sit at My right hand, until I make Your enemies, the footstool of Your feet quickly.”</td>
            <td class="coptic">Ⲡⲁⲓⲣⲏϯ ⲡⲉ ϫⲉ Ⲡ̀ϭⲟⲓⲥ ⲙ̀Ⲡⲁϭⲟⲓⲥ: ϫⲉ ϩⲉⲙⲥⲓ ⲥⲁⲧⲁⲟⲩⲓ̀ⲛⲁⲙ: ϣⲁ ϯⲭⲱ ⲛ̀ⲛⲉⲕϫⲁϫⲓ ⲕⲁⲗⲱⲥ: ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉⲕϭⲁⲗⲁⲩϫ ⲛ̀ⲭⲱⲗⲉⲙ.</td>
            <td class="arabic">"هكذا قال الرب لربي، إجلس عن يميني، حتى أضع أعدائك حسناً، تحت قدميك سريعاً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">This is our God, we consider none other, for He is our Savior, and none other but Him.</td>
            <td class="coptic">Ⲣⲏⲧⲱⲥ ⲫⲁⲓ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲟⲩⲟϩ ⲛ̀ⲛⲉⲛϣⲉⲡ ⲕⲉ ⲟⲩⲁⲓ ⲉ̀ⲱⲛ ⲛⲉⲙⲁϥ: ⲕⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲣⲉϥⲥⲱϯ: ⲙ̀ⲙⲟⲛ ⲕⲉ ⲟⲩⲁⲓ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">جهراً هذا هو إلهنا، ولا نَحْسِب آخر معه، لأنه هو مخلِّصنا، وليس آخر سواه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Foremost hear this and learn, that the Lord appeared on earth, and walked among man, while still being God.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲫⲁⲓ ⲛ̀ϣⲟⲣⲡ ⲁ̀ⲣⲓⲉ̀ⲙⲓ: ϫⲉ Ⲡ̀ϭⲟⲓⲥ ⲁϥⲟⲩⲟⲛϩϥ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲁϥⲉⲣϣ̀ⲫⲏⲣ ⲙ̀ⲙⲟϣⲓ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ: ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">إسمعوا هذا أولاً وإعلموا، أن الرب ظهر على الأرض، وإشترك في المَشيْ مع الناس، الذي لم يزل إلهاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We believe as the believers, in Your Ascension into the heavens, and Your sitting at the Father’s right justly, O Jesus the wonder Worker.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁϩϯ ⲁ̀ⲛⲟⲛ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲉ̀Ⲡⲉⲕϫⲓⲛϣⲉ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛⲉⲙ ⲡⲉⲕϫⲓⲛϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲕⲁⲗⲱⲥ: ⲱ̀ Ⲓⲏⲥⲟⲩⲥ ⲫⲏⲉⲧⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛϣ̀ⲫⲏⲣⲓ.</td>
            <td class="arabic">نؤمن نحن المؤمنين، بصعودك إلى السموات، وجلوسك عن يمين الآب حسناً، يا يسوع الصانع العجائب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Keep us O Son of God, from the traps of the demons, take away Your anger from us, O King of the ages.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲛⲓⲫⲁϣ ⲛ̀ⲧⲉ ⲛⲓⲇⲉⲙⲱⲛ: ⲱ̀ⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲱ̀ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱ̀ⲛ.</td>
            <td class="arabic">يا إبن الله إحفظنا، من فخاخ الشياطين، وإرفع غـضبك عنا، يا ملك الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">He who sits in the heavens, remember us in Your mercy, and forgive us our since, those which we have done in the beginning.</td>
            <td class="coptic">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ϧⲉⲛ ⲡⲉⲕⲛⲁⲓ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲟⲩⲟϩ ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ: ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ⲓⲥϫⲉⲛ ϩⲏ.</td>
            <td class="arabic">أيها الجالس في السموات، أذكرنا برحمتك، وإغفر خطايانا، التي صنعناها من البدء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hasten O believers, let us worship the Only-Begotten, on the true day, that is the feast of the Ascension.</td>
            <td class="coptic">Ⲭⲱⲗⲉⲙ ⲙ̀ⲙⲱⲧⲉⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡ̀ϣⲁⲓ ⲛ̀Ϯⲁ̀ⲛⲁⲗⲩⲯⲓⲥ.</td>
            <td class="arabic">أسرعوا أيها المؤمنون، لنسجد للوحيد الجنس، في اليوم الحقيقي، الذي هو عيد الصعود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Jesus the Savior of the world, rose from the dead, He ascended into the heavens, and sat at His Father’s right.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ Ⲓⲏⲥⲟⲩⲥ: ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">يسوع مخلِّص العالم، قام من بين الأموات، وصعد إلى السماء، وجلس عن يمين أبيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O our Lord Jesus Christ, remember our fathers the bishops, the monks and the deacons, and all Your faithful people. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ ⲛ̀ⲛⲉⲛⲓⲟϯ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲛⲉⲙ ⲛⲓⲙⲟⲛⲁⲭⲟⲥ ⲛⲉⲙ ⲛⲓⲇⲓⲁⲕⲱⲛⲟⲥ: ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ⲙ̀ⲡⲓⲥⲧⲟⲥ. ${cross}</td>
            <td class="arabic">يا ربنا يسوع المسيح، أذكر آبائنا الأساقفة، والرهبان والشمامسة، وسائر شعبك المؤمنين. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Ascension
function WatosPsaliForAscension(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Watos Psali For Ascension">
    
    <caption id="caption_table_${tableNumber}" class="caption">Watos Psali For Ascension
        <span class="coptic-caption">Ⲁⲓⲛⲁϩⲱⲥ ⲉ̀ⲣⲟⲕ Ⲡ̀ϭⲟⲓⲥ ϧⲉⲛ ⲟⲩⲛⲁⲓ</span>
        <span class="arabic-caption">إبصالية واطس (الصعود)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I will praise You O Lord, with mercy peace and truth, for You are the Savior, and the true Judge.</td>
            <td class="coptic">Ⲁⲓⲛⲁϩⲱⲥ ⲉ̀ⲣⲟⲕ Ⲡ̀ϭⲟⲓⲥ ϧⲉⲛ ⲟⲩⲛⲁⲓ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ⲛⲉⲙ ⲟⲩⲙⲉⲑⲙⲏⲓ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡⲓⲣⲉϥⲥⲱϯ: ⲟⲩⲟϩ Ⲡⲓⲣⲉϥϯϩⲁⲡ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">أسبحك يا رب برحمة، وسلامة وحق، لأنك أنت هو المخلِّص، والديان الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">All the eyes of my understanding, speak of Your wonders, for You have ministered salvation, and revealed Your works.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲡⲁⲕⲁϯ: ⲥⲉⲥⲁϫⲓ ϧⲉⲛ ⲛⲉⲕϣ̀ⲫⲏⲣⲓ: ϫⲉ ⲁⲕⲓ̀ⲣⲓ ⲛ̀ⲟⲩⲥⲱϯ: ⲁⲕⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀.</td>
            <td class="arabic">كل أعْيُن فهمي، تنطق بعجائبك، لأنك صنعت خلاصاً، وأظهرت أعمالك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Every race in mankind, praise Your Resurrection, and Your Ascension into the heavens, and believe without doubt.</td>
            <td class="coptic">Ⲅⲉⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲛ̀ⲛⲓⲣⲱⲙⲓ: ⲉⲩϩⲱⲥ ⲉ̀Ⲧⲉⲕⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: ⲛⲉⲙ Ⲡⲉⲕϫⲓⲛϣⲉ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉⲩⲛⲁϩϯ ⲁϭⲛⲉ ⲥⲁⲛⲓⲥ.</td>
            <td class="arabic">كل أجناس البشر، تسبح قيامتك، وصعودك إلى السموات، وتؤمن بغير شك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the King of Jerusalem, spoke long ago and said, “He was lifted upon the Cherubim, and He flew upon the wind.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲛ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ ⲓⲥϫⲉⲛ ⲟⲩⲥⲏⲟⲩ: ϫⲉ ⲁϥⲟⲗϥ ⲉ̀ϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲁϥϩⲁⲗⲁⲓ ⲉ̀ϫⲉⲛ ⲛⲓⲑⲏⲟⲩ.</td>
            <td class="arabic">داود ملك أورُشَليم، قال منذ زمان، "أنه ركب على الشاروبيم، وطار على الرياح."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Rejoice in the Lord, you principalities and dominions, you thrones and authorities, and powers saying “Alleluia.”</td>
            <td class="coptic">Ⲉ̀ϣ̀ⲗⲏⲗⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ⲛⲓⲁⲣⲭⲏ ⲛⲉⲙ ⲛⲓⲉⲝⲟⲩⲥⲓⲁ: ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛⲉⲙ ⲛⲓⲙⲉⲧϭⲟⲓⲥ: ⲛⲓϫⲟⲙ ϫⲉ ϧⲉⲛ ⲟⲩⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">هلِّلي للرب أيتها الرئاسات، والسلطات والكراسي، والسيادات والقوات، قائلة "هلليلويا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Yes truly indeed, He ascended into the heavens, He led captivity captive, and gave honors to mankind.</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲟⲥ ϧⲉⲛ ⲟⲩⲁ̀ⲗⲏⲑⲓⲁ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥⲉⲣⲉⲭⲙⲁⲗⲱⲧⲉⲩⲓⲛ ⲛ̀ϩⲁⲛⲉⲭⲙⲁⲗⲱⲥⲓⲁ: ⲁϥϯ ⲛ̀ϩⲁⲛⲧⲁⲓⲟ ⲛ̀ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">نعم حقاً بالحقيقة، صعد إلى السموات، وسَبَى سَبْياً، وأعطى للناس كرامات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">And we also praise You, with the unseen orders, and we worship You, with the seen.</td>
            <td class="coptic">Ⲏ̀ⲇⲉⲟⲛ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲁⲑⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲟⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ.</td>
            <td class="arabic">وأيضاً نباركك، مع الطغمات غير المرئية، ونسجد لك، مع المرئيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice in God with voices, of truth and mercy, for He ascended into the heaven, of heavens toward the east.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲏ: ⲛ̀ⲧⲉ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲛⲉⲙ ⲟⲩⲛⲁⲓ: ϫⲉ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲥⲁ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ.</td>
            <td class="arabic">هلِّلوا لله بأصوات، الحق والرحمة، لأنه صعد إلى سماء السموات، ناحية المشارق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">John the theologian, said in his gospel, “I saw Christ the King, ascend into the heavens.”</td>
            <td class="coptic">Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲑⲉⲟ̀ⲗⲟⲅⲟⲥ: ⲁϥϫⲟⲥ ϧⲉⲛ ⲡⲉϥⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ϫⲉ ⲁⲓⲛⲁⲩ Ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ.</td>
            <td class="arabic">يوحنا الناطق بالإلهيات، قال في أنجيله، "أني رأيت الملك المسيح، صَعِدً إلى السموات."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also our father Peter, taught us out of his mouth, “He has ascended into the heavens, and the angels worshiped Him.”</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ: ⲁϥⲧⲁⲙⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱϥ: ϫⲉ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲁ̀ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">وأيضاً أبونا بطرس، أعلمنا من فمه، "أنه صعد إلى السموات، وسجدت له الملائكة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Luke the true physician, wrote in the book of the Acts, “This is Jesus who has truly, ascended up to His rank.”</td>
            <td class="coptic">Ⲗⲟⲩⲕⲁⲥ ⲡⲓⲥⲏⲓⲛⲓ ⲙ̀ⲙⲏⲓ: ⲁϥⲥ̀ϧⲁⲓ ϧⲉⲛ ⲛⲓⲡ̀ⲣⲁⲝⲓⲥ: ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ϣⲁ ⲧⲉϥⲧⲁⲝⲓⲥ.</td>
            <td class="arabic">لوقا الطبيب الحقيقي، كتب في الأعمال، "أن هذا هو يسوع بالحقيقة، صعد إلى فوق إلى رتبته."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Mark the Beholder of God, likewise has revealed unto us, saying “He has truly ascended, and sat at the right hand of His Father.”</td>
            <td class="coptic">Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ: ⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲙ̀ⲡⲁⲓⲥ̀ⲙⲟⲧ: ϫⲉ ⲁϥϣⲉⲛⲁϥ ⲁ̀ⲗⲏⲑⲱⲥ: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">مرقس الناظر الإله، أظهر لنا هذا الشبه، قائلاً "صعد بالحقيقة، وجلس عن يمين أبيه."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">All the powers of the heavens, came and worshiped Him, the heavenly and the earthly, praised Him with blessings.</td>
            <td class="coptic">Ⲛⲓϫⲟⲙ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁⲩϩⲓⲧⲟⲩ ⲉ̀ϧ̀ⲣⲏⲓ ⲁⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲁ ⲡ̀ⲕⲁϩⲓ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲟⲩ ⲁⲩϩⲱⲥ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">كل قوات السموات، خرُّوا وسجدوا له، السمائيون والأرضيون، سبحوه بالبركات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You O King, who is just with His creation, He who is of authority and victory, the Judge on the judgment.</td>
            <td class="coptic">Ⲝⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲓⲟⲩⲣⲟ: ⲡⲓⲑ̀ⲙⲏⲓ ϧⲉⲛ ⲧⲉϥⲕ̀ⲧⲏⲥⲓⲥ: ⲫⲁ ⲡⲓⲉⲣϣⲓϣⲓ ⲛⲉⲙ ⲡⲓϭⲣⲟ: Ⲡⲓⲣⲉϥϯϩⲁⲡ ϧⲉⲛ ϯⲕ̀ⲣⲓⲥⲓⲥ.</td>
            <td class="arabic">مبارك أيها الملك، في خليقته، صاحب السلطان والغلبة، القاضي في الدينونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Glory to You with thanksgiving, O true God, for You sent Your grace, upon Your Apostles.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: ⲱ̀ Ⲡⲓⲛⲟⲩϯ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ϫⲉ ⲁⲕⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉⲕϩ̀ⲙⲟⲧ: ⲉ̀ϫⲉⲛ ⲛⲉⲕⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">لك المجد بالشكر، أيها الإله الحقيقي، لأنك أرسلت نعمتك، على رسلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Spirit of comfort, like tongues of fire, in the upper room of Zion, filled them with His strength.</td>
            <td class="coptic">Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛⲗⲁⲥ ⲛ̀ⲭ̀ⲣⲱⲙ: ϧⲉⲛ ϯⲃⲁϩⲙⲓ ⲛ̀ⲧⲉ Ⲥⲓⲱⲛ: ⲁϥⲙⲁϩⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉϥϫⲟⲙ.</td>
            <td class="arabic">الروح المعزي، مثل ألسنه نار، في عُلِّيَة صهيون، ملأهم من قوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">They knew every name, every tribe and every tongue, they spoke of the hidden things, through the power of the Trinity.</td>
            <td class="coptic">Ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲁⲩⲉ̀ⲙⲓ ⲉ̀ⲣⲱⲟⲩ: ⲛⲓⲫⲩⲗⲏ ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲗⲁⲥ: ⲛⲏⲉⲧϩⲏⲧ ⲁⲩⲥⲁϫⲓ ⲙ̀ⲙⲱⲟⲩ: ϩⲓⲧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ.</td>
            <td class="arabic">عرفوا كل الأسماء، والقبائل ولغات الألسن، وتكلموا بالخفيات، من قِبَل قوة الثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hear the word of Joel, the honored prophet, of the house of Israel, concerning this blessed day.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲡ̀ⲥⲁϫⲓ ⲛ̀Ⲓⲟⲩⲏⲗ: ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ: ⲛ̀ⲧⲉ ⲛⲁ ⲡ̀ⲏⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ: ⲉ̀ϫⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.</td>
            <td class="arabic">إسمعوا قول يوئيل، النبي المكرم، الذي لآل بيت إسرائيل، عن هذا اليوم المبارك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">“In the end of days, I will pour My Spirit, upon every flesh I have created, I will reveal miracles.”</td>
            <td class="coptic">Ⲧ̀ϧⲁⲉ̀ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ϩⲟⲟⲩ: ϯⲛⲁϫⲱϣ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡⲁⲡ̀ⲛⲉⲩⲙⲁ: ⲉ̀ϫⲉⲛ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲓⲑⲁⲙⲓⲟ: ⲉⲓⲉ̀ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲧⲱⲙⲁ.</td>
            <td class="arabic">"في أخر الأيام، أسكب من روحي، على كل جسد خَلَقتهُ، وأظْهِرَ المعجزات."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Every hymn of praise, we ascribe unto You, as said by the divine-mantled, David the holy prophet.</td>
            <td class="coptic">Ⲩⲙⲛⲟⲗⲟⲅⲓⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲥ̀ⲙⲟⲩ: ⲧⲉⲛⲟⲩⲱⲣⲡ ⲙ̀ⲙⲱⲟⲩ ϩⲁⲣⲟⲕ ⲉⲩⲥⲟⲡ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲑⲉⲟ̀ⲫⲟⲣⲟⲥ: Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">كل تماجيد البركة، نرسلها إليك معاً، كقول اللابس الإله، داود النبي الطاهر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">“O You who sits on the Cherubim, reveal Yourself before Ephraim, and Manasseh and Benjamin, raise Your strength and come for our salvation.”</td>
            <td class="coptic">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲟⲩⲟⲛϩⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀Ⲉⲫⲣⲉⲙ: ⲛⲉⲙ Ⲙⲁⲛⲁⲥⲥⲏ ⲛⲉⲙ Ⲃⲉⲛⲓⲁⲙⲓⲛ: ⲙⲁⲧⲟⲩⲛⲟⲥ ⲛ̀ⲧⲉⲕϫⲟⲙ ⲁ̀ⲙⲟⲩ ⲉ̀ⲫ̀ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic">"أيها الجالس على الشاروبيم، أظهر أمام إفرايم، ومَنَسَّى وبنيامين، أقم قوتك وهَلُمَّ لخلاصنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy holy, O heavenly King, with Your Holy Spirit, the Treasure of good things.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ⲱ̀ Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲛⲉⲙ Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: Ⲡⲓⲑⲩⲥⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ.</td>
            <td class="arabic">قدوس قدوس قدوس، أيها الملك السماوي، مع روحك القدوس، كنز الخيرات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Savior of everyone, and Giver of life, come and dwell within us, O Son of the living God.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲟⲩⲟϩ Ⲫ̀ⲣⲉϥϯ ⲙ̀ⲡ̀ⲱⲛϧ: ⲁ̀ⲙⲟⲩ ϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲉⲛ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲉⲧⲟⲛϧ.</td>
            <td class="arabic">يا مخلِّص الجميع، ومعطي الحياة، هَلُمَّ وحل فينا، يا إبن الله الحي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Be patient with Your servant, O only-begotten God, he who has sinned against You, grant him salvation. ${cross}</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛ̀ϩⲏⲧ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲃⲱⲕ: ⲱ̀ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ⲛⲟⲩϯ: ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲛⲟⲃⲓ ⲉ̀ⲣⲟⲕ: ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁϥ ⲙ̀ⲡⲓⲥⲱϯ. ${cross}</td>
            <td class="arabic">تأنَّى على عبدك، أيها الإله الوحيد الجنس، الذي أخطأ إليك، أنعم له بالخلاص. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Pentecost
function AdamPsaliForPentecost(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali For Pentecost">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali For Pentecost
        <span class="coptic-caption">Ⲁ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ</span>
        <span class="arabic-caption">إبصالية أدام (العنصرة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Christ our God, the King of the ages, the Head of our salvation, sent the Paraclete.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱⲛ: ⲧ̀ⲁ̀ⲡⲁⲣⲭⲏ ⲙ̀ⲡⲉⲛⲥⲱϯ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">المسيح إلهنا، ملك الدهور، ورئيس خلاصنا، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone glorifies You, O heavenly King, and offer glory before You, the Spirit of comfort.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉϯⲱ̀ⲟⲩ ⲛⲁⲕ: ⲱ̀ Ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲥⲉϯⲱ̀ⲟⲩ ⲛⲁϩⲣⲁⲕ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">الكل يمجدونك، أيها الملك السمائي، ويمجدون أمامك، الروح المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly He appeared, to the Apostles, in the upper-room of Zion, and sent the Paraclete.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϧⲉⲛ ⲑ̀ⲃⲁϩⲙⲓ ⲛ̀ⲧⲉ Ⲥⲓⲱⲛ: ⲁϥⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲱⲟⲩ ⲁ̀ⲗⲏⲑⲱⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">لأن الرسل، في علية صهيون، ظهر لهم حقاً، وأرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Truly He spoke to them, about the mysteries, which He performed, and sent the Paraclete.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲱⲥ ⲁϥϫⲟⲥ ⲛⲱⲟⲩ: ⲉⲑⲃⲉ ⲛⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉ̀ⲧⲁϥⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">حقاً قال لهم، من أجل الأسرار، التي صنعها، وأرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Upon the Apostles, who have preached to us, proclaiming and saying, He sent the Paraclete.</td>
            <td class="coptic">Ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩϩⲓⲱⲓϣ ⲙ̀ⲙⲟⲛ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">على الرسل، فبشرونا، صارخين قائلين، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Exceedingly, the gospels have taught, in the name of our King, He sent the Paraclete.</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲁⲩϯⲥ̀ⲃⲱ: ⲛ̀ϫⲉ ⲛⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ϫⲉ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡⲉⲛⲟⲩⲣⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">كثيراً علَّمت، الأناجيل، بإسم ملكنا، وأرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold the Apostles, have taught us, they baptized the Gentiles, He sent the Paraclete.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩϯⲥ̀ⲃⲱ ⲙ̀ⲙⲟⲛ: ⲁⲩϯⲱⲙⲥ ⲛ̀ⲛⲓⲉⲑⲛⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">هوذا الرسل، علمونا، وعمدوا الأمم، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O prophets, and you righteous ones, for the Master, has sent the Paraclete.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲛ: ϫⲉ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">وتهللوا أيها الأنبياء، مع الصديقين، لأن السيد، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ, ascended into the heavens, and upon the Apostles, He sent the Paraclete.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲟⲩⲣⲁⲛⲟⲛ: ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">يسوع المسيح، صعد إلى السماء، وعلى الرسل، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">For whenever I speak, of Your mysteries, my heart rejoices, He sent the Paraclete.</td>
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ⲁⲓϣⲁⲛⲥⲁϫⲓ: ⲉⲑⲃⲉ ⲛⲉⲕⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲡⲁϩⲏⲧ ⲉϥⲉ̀ⲣⲁϣⲓ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">لأني إذا تكلمت، من أجل أسرارك، يفرح قلبي، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Rejoice O believers, let us celebrate spiritually, with the Apostles, He sent the Paraclete.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲙⲁⲣⲉⲛⲉⲣϣⲁⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ⲛⲉⲙ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">تهللوا أيها المؤمنون، ولنعيد روحياً، مع الرسل، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Let us praise justly, Christ who created us, my Lord Jesus Christ, sent the Paraclete.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲕⲁⲗⲱⲥ: ⲉ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">فلنسبح حسناً، المسيح الذي خلقنا، ربنا يسوع المسيح، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The prophets, and the righteous, spoke concerning the Messiah, He sent the Paraclete.</td>
            <td class="coptic">Ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲛ: ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲉ Ⲙⲁⲥⲓⲁⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">الأنبياء مع الصديقين، نطقوا، من أجل المسيا، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You indeed, we ask You to save us, we Your faithful people, He sent the Paraclete.</td>
            <td class="coptic">Ⲝⲥ̀ⲁⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲧⲉⲛϯϩⲟ ⲛⲁϩⲙⲉⲛ ⲁ̀ⲛⲟⲛ: ⲡⲉ ⲡⲉⲕⲗⲁⲟⲥ ⲙ̀ⲡⲓⲥⲧⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">مبارك أنت بالحقيقة، نسألك خلَّصنا، نحن شعبك المؤمن، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Glory be to You, with Your holy Father, You are exceedingly blessed, O Spirit of comfort.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲓⲟⲛ: ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">المجد لك، مع أبيك القدوس، أنت متزايد بركة، أيها الروح المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Christ our Master, the Treasure of good things, and the Holy Spirit, He sent the Paraclete.</td>
            <td class="coptic">Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲏⲃ: Ⲡⲓⲑⲩⲥⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">المسيح ملكنا، كنز الصلاح، والروح القدس، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice O believers, with a spiritual feast, for Jesus Christ, has sent the Paraclete.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛ̀ⲟⲩϣⲁⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ϫⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">إفرحوا أيها المؤمنون، عيداً روحياً، لأن يسوع المسيح، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Yea we ask You, to cleanse us, with Your hyssop, He sent the Paraclete.</td>
            <td class="coptic">Ⲥⲉ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ: ⲉⲕⲉ̀ⲛⲟⲩϫϧ ⲉ̀ϫⲱⲛ: ⲙ̀ⲡⲉⲕϣⲉⲛϩⲩⲥⲱⲡⲟⲛ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">نعم نسألك، تنضح علينا، بزوفك، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Purify and wash us, and also make us, whiter than snow, He sent the Paraclete.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲉⲕⲉ̀ⲧⲟⲩⲃⲟⲛ: ⲉⲕⲉ̀ⲣⲱϧⲓ ⲙ̀ⲙⲟⲛ ⲇⲉ ⲟⲛ: ⲉⲛⲉ̀ⲟⲩⲃⲁϣ ⲉ̀ϩⲟⲧⲉ ⲟⲩⲭⲓⲱⲛ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">فحينئذ تنقينا، وتغسلنا أيضاً، وتبيضنا أفضل من الثلج، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">O Son of God have mercy, be compassionate with us, according to Your great mercy, He sent the Paraclete.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲛⲁⲓ ⲛⲁⲛ: ⲉⲕⲉ̀ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">يا إبن الله إرحمنا، وتراءف علينا، كعظيم رحمتك، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">The light of Your authority, has enlightened us, O Jesus the Lover of Man, He sent the Paraclete.</td>
            <td class="coptic">Ⲫ̀ⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲕⲉⲣϣⲓϣⲓ: ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">نور سلطانك، أضاء لنا، يا يسوع محب البشر، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy holy, meet and right, with Your holy Father, He sent the Paraclete.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">قدوس قدوس قدوس، مستحق وعادل، مع أبيك القدوس، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The rest of our race, guard them truly, O my Lord, He sent the Paraclete.</td>
            <td class="coptic">Ⲯⲉⲡⲓ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ϧⲉⲛ ⲟⲩⲁ̀ⲗⲏⲑⲓⲛⲟⲛ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ Ⲡⲁϭⲟⲓⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">بقية جنسنا، بالحقيقة إحفظهم يا رب، أرسل المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O Christ our Master, remember the blessed, our father Abba (Tawadros), the archbishop. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ ⲙ̀ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ (Ⲑⲉⲟ̀ⲇⲟⲣⲟⲥ): ⲡⲓⲁⲣⲭⲏⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ. ${cross}</td>
            <td class="arabic">يا سيدنا المسيح، اذكر أبينا الطوباوي، أنبا (تواضروس)، رئيس الأساقفة. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


function WatosPsaliForPentecost(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Watos Psali For Pentecost">
    
    <caption id="caption_table_${tableNumber}" class="caption">Watos Psali For Pentecost
        <span class="coptic-caption">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ</span>
        <span class="arabic-caption">إبصالية واطس (العنصرة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Our Lord Jesus Christ, our true God, appeared to His Apostles, truly after His Resurrection.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲁϥⲟⲩⲱⲛϩ ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲙⲉⲛⲉⲛⲥⲁ Ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲁ̀ⲗⲏⲑⲱⲥ.</td>
            <td class="arabic">ربنا يسوع المسيح، إلهنا الحقيقي، ظهر لرسله، بعد قيامته حقاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">And He breathed in their faces, and said to them, “O My brothers receive, the Holy Spirit today.”</td>
            <td class="coptic">Ⲃⲟⲛⲟⲩ ⲁϥⲛⲓϥⲓ ⲉ̀ϧⲟⲩⲛ: ϧⲉⲛ ⲛⲟⲩϩⲟ ⲟⲩⲟϩ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ: ϫⲉ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϭⲓ ⲛⲱⲧⲉⲛ ⲇⲉ ⲟⲛ: ⲛ̀Ⲟⲩⲡ̀ⲛⲉⲩⲙⲁ Ⲉϥⲟⲩⲁⲃ ⲙ̀ⲫⲟⲟⲩ.</td>
            <td class="arabic">وأيضاً نفخ في وجوههم، وقال لهم، "يا إخوتي إقبلوا أيضاً، الروح القدس اليوم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He truly said to them, “Whose sins you forgive they are forgiven, and those you retain, they are retained.”</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ: ⲛⲏⲉ̀ⲧⲁⲛⲭⲁ ⲛⲟⲩⲛⲟⲃⲓ ⲛⲱⲟⲩ ⲉ̀ⲃⲟⲗ: ⲥⲉⲭⲏ ⲛⲱⲟⲩ ⲉ̀ⲃⲟⲗ ⲟⲩⲟϩ ⲛⲏⲉ̀ⲧⲉⲧⲉⲛⲛⲁⲧⲁϩⲛⲟ: ⲙ̀ⲙⲱⲟⲩ ⲉⲩⲉ̀ⲧⲁϩⲛⲟ ⲙ̀ⲙⲱⲟⲩ.</td>
            <td class="arabic">ولأنه قال لهم، "مَنْ غفرتم لهم خطاياهم، غُفِرت لهم ومَن أمسكتموها، عليهم اُمسِكت."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Truly when the feast, of the Pentecost was completed, He sent the Spirit of truth, and He descended upon them.</td>
            <td class="coptic">Ⲇⲓⲕⲉⲱⲥ ⲉ̀ⲧⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲡ̀ϣⲁⲓ ⲛ̀ⲧⲉ Ϯⲡⲉⲛⲧⲏⲕⲟⲥⲧⲏ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ϫⲱⲟⲩ.</td>
            <td class="arabic">حقاً لما كمل، عيد الخمسين، أرسل روح الحق، فهبط عليهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">They walked from power to power, and He truly appeared to them, like tongues of fire the Spirit of comfort, was divided upon them.</td>
            <td class="coptic">Ⲉⲩⲙⲟϣⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩϫⲟⲙ ⲉ̀ⲟⲩϫⲟⲙ: ⲟⲩⲟϩ ⲁϥⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲱⲟⲩ ⲁ̀ⲗⲏⲑⲱⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛⲗⲁⲥ ⲛ̀ⲭ̀ⲣⲱⲙ ⲉⲩⲫⲏϣ: ⲉ̀ϫⲱⲟⲩ ⲛ̀ϫⲉ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ.</td>
            <td class="arabic">وساروا من قوة إلى قوة، وظهر لهم حقاً، الروح المعزي مثل ألسنة نار، منقسمة عليهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Exceedingly we also say, according to the holy Scriptures, “Truly after His Ascension, He sent the Holy Spirit.”</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛϫⲟⲥ: ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲩϫⲟⲧⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲅ̀ⲣⲁⲫⲏ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲙⲉⲛⲉⲛⲥⲁ Ⲧⲉϥⲁ̀ⲛⲁⲗⲩⲯⲓⲥ ⲁ̀ⲗⲏⲑⲱⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">وكثيراً نحن أيضاً نقول، كما قالت الكتب المقدسة، "أنه حقاً بعد صعوده، أرسل الروح القدس."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold He came upon our fathers the Apostles, when they were in the upper room of Zion, waiting for the power, which the Lord will send to them.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲁϥⲓ̀ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲑⲱⲟⲩ ⲉⲩϣⲟⲡ ϧⲉⲛ ⲑ̀ⲃⲁϩⲙⲓ ⲛ̀ⲧⲉ Ⲥⲓⲱⲛ: ⲉⲩϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁ ⲧ̀ϩⲏ ⲛ̀ϯϫⲟⲙ: ⲉ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ ⲛⲁⲟⲩⲟⲣⲡⲥ ⲛⲱⲟⲩ ⲅⲁⲣ ⲇⲉ ⲟⲛ.</td>
            <td class="arabic">هوذا أتى على آبائنا الرسل، وهم بعُلِّية صهيون، ينتظرون القوة التي يُرسِلها، لهم الرب أيضاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O believers with the Apostles, and celebrate a spiritual feast, truly in the feast of the Pentecost, for He sent the Spirit of comfort.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ ⲛⲉⲙ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲉⲣϣⲁⲓ ϧⲉⲛ ⲟⲩϣⲁⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀Ϯⲡⲉⲛⲧⲏⲕⲟⲥⲧⲏ ⲁ̀ⲗⲏⲑⲱⲥ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">تهللوا أيها المؤمنون مع الرسل، ولنعيد عيداً روحياً، في عيد البنطيقُسْطي حقاً، لأنه أرسل الروح المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold the Spirit of wisdom, the Spirit of understanding, the Spirit of power, is the Holy Spirit the comfort.</td>
            <td class="coptic">Ⲓⲥ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ϯⲥⲟⲫⲓⲁ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ⲡⲓⲕⲁϯ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ϯϫⲟⲙ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ ⲡⲉ.</td>
            <td class="arabic">ها روح الحكمة، روح الفهم، روح القوة، هو الروح القدس المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">They also spoke in heavenly tongues, and the joy of the angels, they confessed the eternal Christ, and the glory of His Resurrection justly.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲁⲩⲥⲁϫⲓ ϧⲉⲛ ϯⲁⲥⲡⲓ ⲛ̀ⲛⲁ ⲧ̀ⲫⲉ: ⲛⲉⲙ ⲑ̀ⲗⲁⲗⲓⲁ ⲛ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲁⲩⲟⲩⲱⲛϩ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲁⲓⲇⲓⲁ: ⲟⲩⲟϩ ⲡ̀ⲱ̀ⲟⲩ ⲛ̀Ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">وأيضاً نطقوا بلغات السمائيين، وتهليل الملائكة، وإعترفوا بالمسيح الذاتي، ومجد قيامته حسناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover He sent the Spirit of comfort, who proceeds from the Father, He descended upon the Apostles, and they performed great grace.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲫⲏⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ⲁϥⲓ̀ ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ϩ̀ⲙⲟⲧ.</td>
            <td class="arabic">وأيضاً أرسل الروح المعزي، المنبثق من الآب، فحلَّ على الرسل، وصنعوا نِعَماً عظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Today with power among the people, the Spirit sent out, the seventy into the world, they preached to the nations.</td>
            <td class="coptic">Ⲙ̀ⲫⲟⲟⲩ ⲛⲉⲙ ϩⲁⲛϫⲟⲙ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲁϥⲟⲩⲱⲣⲡ ⲕⲁⲗⲱⲥ: ⲛⲉⲙ ⲡⲓϣ̀ⲃⲉ (ⲟ̅) ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲁⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ.</td>
            <td class="arabic">اليوم وقوات في الشعوب، أرسلَ الروح حسناً، مع السبعين في العالم، وكرزوا في الأمم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The Apostles said to us, “Grow in the name, of the Lord our God,” we have truly been raised and uplifted.</td>
            <td class="coptic">Ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲁⲩϫⲟⲥ ⲛⲁⲛ ⲁ̀ⲛⲟⲛ: ⲧⲉⲛⲁⲓⲁⲓ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: Ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲛⲟⲛ ⲁⲛⲧⲱⲟⲩⲛ: ⲟⲩⲟϩ ⲁⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ⲁ̀ⲗⲏⲑⲱⲥ.</td>
            <td class="arabic">الرسل قالوا لنا نحن، أن ننموا بإسم الرب إلهنا، نحن قُمنا، ووقفنا حقاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Foremost Joel has testified, “It will come to pass afterwards, I will pour out My Spirit, to everybody in truth.</td>
            <td class="coptic">Ⲝⲉⲣⲏⲧⲱⲥ Ⲓⲱⲏⲗ ⲁϥⲉⲣⲙⲉⲑⲣⲉ: ⲟⲩⲟϩ ⲉⲥⲉ̀ϣⲱⲡⲓ ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ: ⲟⲩⲟϩ ϯⲛⲁⲫⲱⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲁⲡ̀ⲛⲉⲩⲙⲁ: ⲉ̀ϫⲉⲛ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">وبالأكثر شهد يوئيل، "وسيكون بعد هذه، أني أفيض من روحي، على كل جسد بالحقيقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">“And your sons and your daughters, will also prophesy, your old men will dream, likewise your young men.”</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲉⲩⲉ̀ⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ ⲇⲉ ⲟⲛ: ⲛ̀ϫⲉ ⲛⲉⲧⲉⲛϣⲏⲣⲓ ⲛⲉⲙ ⲛⲉⲧⲉⲛϣⲉⲣⲓ: ⲟⲩⲟϩ ⲛⲉⲧⲉⲛϧⲉⲗⲗⲟⲓ ϧⲉⲛ ϩⲁⲛⲣⲁⲥⲟⲩⲓ̀ ⲟⲛ: ⲉⲩⲉ̀ⲉⲣⲣⲁⲥⲟⲩⲓ̀ ⲟⲩⲟϩ ⲛⲉⲧⲉⲛϧⲉⲗϣⲓⲣⲓ.</td>
            <td class="arabic">فيتنبأ أيضاً، بنوكم وبناتكم، ويحلم شيوخكم أحلاماً، وأيضاً يرى شبانكم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">They will also see visions, for I shall pour out My Spirit, on My brothers the Apostles, and wonders from heaven.</td>
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲉⲩⲉ̀ⲛⲁⲩ ⲉ̀ϩⲁⲛϩⲟⲣⲁⲥⲓⲥ ⲁ̀ⲗⲏⲑⲱⲥ: ⲕⲉ ⲅⲁⲣ ϯⲛⲁⲫⲱⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ: ⲉ̀ϫⲉⲛ ⲛⲁⲥ̀ⲛⲏⲟⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲉⲓⲉ̀ϯ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ϧⲉⲛ ⲧ̀ⲫⲉ.</td>
            <td class="arabic">وأيضاً ينظرون رُؤَى بالحقيقة، لأني أسكب من روحي، على إخوتي الرسل، وأعطي عجائبي في السماء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Let us praise Him openly, let us glorify Him saying, “O King of the ages the Incomprehensible, purify our tongues and minds.”</td>
            <td class="coptic">Ⲣⲏⲧⲱⲥ ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: ⲙⲁⲧⲟⲩⲃⲟ ⲙ̀ⲡⲉⲛⲗⲁⲥ ⲛⲉⲙ ⲡⲉⲛⲛⲟⲩⲥ.</td>
            <td class="arabic">فلنسبح جهراً ونمجده، ونصرخ قائلين، "يا ملك الدهور الغير المُدرَك، طهِّر لساننا وعقلنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Yea O our Master be with us, purify our inner being, make us all worthy of, the grace of the Spirit of comfort.</td>
            <td class="coptic">Ⲥⲉ Ⲡⲉⲛⲛⲏⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ⲙⲁⲧⲟⲩⲃⲟ ⲙ̀ⲡⲉⲛⲣⲱⲙⲓ ⲉⲧⲥⲁϧⲟⲩⲛ: ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲧⲏⲣⲉⲛ: ⲙ̀ⲡⲓϩ̀ⲙⲟⲧ ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">نعم يا سيدنا كُن معنا، طهِّر إنساننا الداخلي، وإجعلنا مستحقين كلنا، لنعمة الروح المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We worship the good Father, and His Son Jesus Christ, and the Spirit of comfort, the holy and co-essential Trinity.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲉϥϣⲏⲣⲓ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ.</td>
            <td class="arabic">نسجد للآب الصالح، مع إبنه يسوع المسيح، والروح المعزي، الثالوث الأقدس المساوي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God, ascended into the heavens, and sent the holy Paraclete, and granted us life.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲁ̀ⲛⲉⲗⲑⲱⲛ: ⲓⲥ ⲟⲩⲣⲁⲛⲟⲥ ⲁⲝⲓⲧⲟⲛ: Ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ ⲁ̀ⲅⲓⲟⲛ ⲍⲱⲏⲛ: ⲭⲁⲣⲓⲥⲁⲙⲉⲛⲟⲥ ⲏ̀ⲙⲱⲛ.</td>
            <td class="arabic">إبن الله، صعد إلى السماء، وأرسل البارقليط القدوس، وأنعم لنا بالحياة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">O You who does wonders, Jesus Christ the Governor, grant us a new heart, and a new body and spirit.</td>
            <td class="coptic">Ⲫⲏⲉⲧⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛϣ̀ⲫⲏⲣⲓ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲣⲉϥⲉⲣϩⲉⲙⲓ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲟⲩϩⲏⲧ ⲙ̀ⲃⲉⲣⲓ: ⲛⲉⲙ ⲟⲩⲥⲱⲙⲁ ⲛⲉⲙ ⲟⲩⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲃⲉⲣⲓ.</td>
            <td class="arabic">الصانع العجائب، يسوع المسيح المُدبِّر، أعطَنا قلباً جديداً، وجسداً وروحاً جديداً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Daniel spoke about the fourth person, in the fire who resembled, the Son of God Jesus Christ, the King of glory.</td>
            <td class="coptic">Ⲭⲱ Ⲇⲁⲛⲓⲏⲗ ⲟⲩⲟϩ ⲁϥⲥⲁϫⲓ: ϧⲉⲛ ⲡⲓⲥ̀ⲙⲟⲧ ⲡⲓⲙⲁϩϥ̀ⲧⲟⲟⲩ: ⲉϥⲟ̀ⲛⲓ ⲛ̀Ⲟⲩϣⲏⲣⲓ ⲛ̀Ⲛⲟⲩϯ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
            <td class="arabic">وضع دانيال وتكلم، في الشبه الرابع قال، أنه يشبه إبن الإله، يسوع المسيح ملك المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The Savior of the world, gave us a new commandment, “Love one another, as I have done with you.”</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲁϥϯ ⲛⲁⲛ: ⲛ̀ⲟⲩⲉⲛⲧⲟⲗⲏ ⲙ̀ⲃⲉⲣⲓ ⲁⲓϯ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲛⲉⲧⲉⲛⲉ̀ⲣⲏⲟⲩ: ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲓⲭⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ.</td>
            <td class="arabic">مُخلِّص العالم أعطانا، وصية جديدة، "أعطيتها لكم لكي تحبوا، بعضكم بعضاً كما تركت لكم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O our Lord Jesus Christ, preserve the life of the righteous, our father Abba (Tawadros) the high priest, confirm him on his throne. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲉϩ ⲉ̀ⲡ̀ⲱⲛϧ ⲙ̀ⲡⲓⲇⲓⲕⲉⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ (Ⲑⲉⲟ̀ⲇⲟⲣⲟⲥ) ⲡⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ: ⲙⲁⲧⲁϫⲣⲟϥ ϩⲓϫⲉⲛ ⲡⲉϥⲑ̀ⲣⲟⲛⲟⲥ. ${cross}</td>
            <td class="arabic">يا ربنا يسوع المسيح، إحفظ حياة أبينا الصديق، أنبا (تواضروس) رئيس الكهنة، ثبته على كرسيه. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

/* Minor Feasts */

// Christ’s Entry to Egypt
function PsaliAdamForChristEntryToEgypt(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for Christ’s Entry to Egypt">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for Christ’s Entry to Egypt
        <span class="coptic-caption">Ⲁⲧⲁⲯⲩⲭⲏ ϭⲓϣϣⲱⲟⲩ</span>
        <span class="arabic-caption">إبصالية ادام (دخول المسيح ارض مصر)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">My soul desired, Your salvation, that I may declare Your glory, and Your great mercy.</td>
            <td class="coptic">Ⲁⲧⲁⲯⲩⲭⲏ ϭⲓϣϣⲱⲟⲩ: ⲛ̀ⲥⲁ ⲡⲉⲕⲟⲩϫⲁⲓ: ⲉⲑⲣⲓⲥⲁϫⲓ ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ: ⲛⲉⲙ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">اشتاقت نفسي إلى خلاصك لكي أنطق بمجدك ورحمتك العظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Send me Your help, teach me Your precepts, grant me wisdom, O true God.</td>
            <td class="coptic">Ⲃⲱⲣⲡ ⲛⲏⲓ ⲛ̀ⲧⲉⲕⲃⲟⲏ̀ⲑⲓⲁ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲏⲓ: ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲛⲟⲩⲥⲟⲫⲓⲁ: ⲱ̀ ⲡⲓⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ.</td>
            <td class="arabic">أرسل لي معونتك علمني حقوقك أعطنى حكمة يا الله الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly mysterious, O Creator, are Your great works, and Your humility.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ϯⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲱ̀ ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ: ⲉⲑⲃⲉ ⲛⲉⲕϩ̀ⲃⲏⲟⲩⲓ̀: ⲛⲉⲙ ⲛⲉⲕⲑⲉⲃⲓⲟ̀.</td>
            <td class="arabic">لأني متعجب أيها الخالق من أجل أعماك وتواضعك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Christ the Master, was born from Mary, He saved the race, of Adam and Eve.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ Ⲡⲭ̅ⲥ̅: ⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁ: ⲁϥⲥⲱϯ ⲙ̀ⲡ̀ⲅⲉⲛⲟⲥ: ⲛ̀Ⲁⲇⲁⲙ ⲛⲉⲙ Ⲉⲩⲁ.</td>
            <td class="arabic">السيد المسيح ولدته مريم. خلَّص جنس آدم وحواء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He was in Bethlehem, in a manger, He is the Savior, the King of all ages.</td>
            <td class="coptic">Ⲉϥⲭⲏ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ϧⲉⲛ ⲡⲓⲥ̀ⲡⲉⲗⲉⲟⲛ: ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲉϥⲛⲟϩⲉⲙ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉⲱⲛ.</td>
            <td class="arabic">الكائن في بيت لحم في المغارة هو المخلَّص ملك الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">He who is the Refuge, He who is the Judge, truly fled from, the face of Herod.</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲟⲥ ⲁϥⲫⲱⲧ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡ̀ϩⲟ ⲛ̀Ⲏⲣⲱⲇⲏⲥ: ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲙⲁⲙ̀ⲫⲱⲧ: ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲭ̀ⲣⲏⲧⲏⲥ.</td>
            <td class="arabic">نعم حقاً هرب من وجه هيرودس وهو الملجأ وهو الديان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold He has taught us, not to return, evil with evil, till the end of our days.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲁϥⲧ̀ⲥⲁⲃⲟⲛ: ⲉ̀ϣ̀ⲧⲉⲙϯ ⲛ̀ⲟⲩⲡⲉⲧϩⲱⲟⲩ: ϧⲁ ⲟⲩⲡⲟⲩⲛⲏⲣⲟⲛ: ϣⲁ ⲡ̀ϫⲱⲕ ⲛ̀ⲛⲉⲛⲉ̀ϩⲟⲟⲩ.</td>
            <td class="arabic">ها هو يعلمنا الأنجازي شريراً بشرَّ كل أيامنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">The right hand of the Lord, the Word of the Father, the unlimited power, in the bosom of His Father.</td>
            <td class="coptic">Ⲑⲁⲟⲩⲓⲛⲁⲙ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲡⲓⲖⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫⲓⲱⲧ: ϯϫⲟⲙ ⲛ̀ⲁⲧⲁⲩⲣⲏϫⲥ: ⲉⲧ ϧⲉⲛ ⲕⲉⲛϥ ⲙ̀Ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">يمين الرب كلمة الآب القوة المٌطْلَقة الذي في حضن أبيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ, our true God, who came and was incarnate, for our salvation.</td>
            <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲛⲟⲩϯ: ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲉ̀ⲧⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ: ⲁϥⲉⲣⲥⲱⲙⲁⲧⲓⲕⲟⲥ.</td>
            <td class="arabic">يسوع المسيح إلهنا الحقيقي الذي جاء لأجل خلاصنا وتجسد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">For truly in that day, He came to the Egyptians, walking with them, like a man.</td>
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲁϥⲓ̀ ϣⲁ ⲛⲓⲣⲉⲙⲛ̀Ⲭⲏⲙⲓ: ⲉϥⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲣⲱⲙⲓ.</td>
            <td class="arabic">لنه في هذا اليوم آتي إلى المصريين ومشي معهم مثل إنسان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Behold the word, of the prophet came to pass, when he spoke, concerning the Master.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉⲧⲁϥϫⲟϥ ⲉ̀ⲃⲟⲗ: ⲉⲑⲃⲉ ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ.</td>
            <td class="arabic">وأيضاً تم كلام النبي الذي قاله من أجل السيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Mary the saint, the light cloud, carried the holy One, today in Egypt.</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁ ⲑⲏⲉ̅ⲑ̅ⲩ̅: ϯϭⲏⲡⲓ ⲉⲧⲁⲥⲓⲱ̀ⲟⲩ: ⲁⲥⲱ̀ⲗⲓ ⲙ̀ⲫⲏⲉ̅ⲑ̅ⲩ̅: ϣⲁ Ⲭⲏⲙⲓ ⲭ̀ⲙⲫⲟⲟⲩ.</td>
            <td class="arabic">مريم القديسة السحابة الخفيفة. حملت القدوس إلى مصر يوماً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The idols have fallen, and their demons fled, from the true God, the Son of the Father.</td>
            <td class="coptic">Ⲛⲓⲓ̀ⲇⲱⲗⲟⲛ ⲁⲩϩⲉⲓ: ⲛⲉⲙ ⲛⲟⲩⲇⲉⲙⲱⲛ ⲁⲩⲫⲱⲧ: ϧⲁ ⲧ̀ϩⲏ ⲙ̀Ⲫϯ ⲙ̀ⲙⲏⲓ: ⲡ̀Ϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫⲓⲱⲧ.</td>
            <td class="arabic">الأوثان سقطت وشياطينهم هربت من أمام الله الحقيقي ابن الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Therefore He went, into a cave, in His eternal, and great wisdom.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲁϥϣⲉ: ⲉ̀ϧⲟⲩⲛ ⲡⲓⲥ̀ⲡⲉⲗⲉⲟⲛ: ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲥⲁⲃⲉ: ⲛ̀ⲉ̀ⲟⲩⲛⲓⲱⲛ.</td>
            <td class="arabic">وكذلك دخل إلى المغارة بحكمته الأبدية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">And likewise He also, walked in a house, Jesus put healing, in a deep well.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲁϥⲙⲟϣⲓ: ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲟⲩⲏ̀ⲓ: Ⲓⲏ̅ⲥ̅ ⲁϥⲭⲱ ⲙ̀ⲡ̀ⲫⲁϧⲣⲓ: ϧⲉⲛ ϯϣⲱϯ.</td>
            <td class="arabic">وهو أيضاً سار وسكن في بيت يسوع وضع الشفاء في البئر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Likewise He went, to Ashmounin, He dispersed the enemies, in that place.</td>
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲟⲛ ⲁϥⲙⲟϣⲓ: ϣⲁ Ϣⲙⲟⲩⲛ ⲥ̀ⲛⲁⲩ: ⲁϥϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ϧⲉⲛ ⲡⲓⲙⲁ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">كما أيضاً سار إلى الأشمونين وشتت الأعداء في ذلك المكان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice and be happy, O land of Egypt, in Emmanuel, the King of all creation.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲭⲏⲙⲓ: ϧⲉⲛ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲡ̀ⲟⲩⲣⲟ ⲛ̀ϯⲕ̀ⲧⲏⲥⲓⲥ.</td>
            <td class="arabic">أفرحي وتهللي يا ارض مصر بعمانوئيل ملك الخليقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Salome and Mary, and Joseph the righteous, they praise with eagerness, before the precious One.</td>
            <td class="coptic">Ⲥⲁⲗⲟⲙⲁ ⲛⲉⲙ Ⲙⲁⲣⲓⲁ: ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲡⲓⲑ̀ⲙⲏⲓ: ⲛⲁⲩϩⲱⲥ ϧⲉⲛ ⲟⲩⲁⲕⲣⲓⲃⲓⲁ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲓⲁ̀ⲛⲁⲙⲏⲓ.</td>
            <td class="arabic">سالومي مع مريم ويوسف البار كانوا يسبحون باجتهاد أمام الجوهرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Therefore truly, with new songs, they sang to Him, when they saw the wonders.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲁⲗⲏⲑⲱⲥ: ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ⲣⲓⲧⲱⲥ: ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲛⲓϣ̀ⲫⲏⲣⲓ.</td>
            <td class="arabic">حينئذ سبحوا بتسبحة جديدة جهراً لما رأوا العجائب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God our Lord, who appeared to Abraham, came into our midst, on mount Coskam.</td>
            <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲡⲉⲛⲛⲟⲩϯ: ⲉ̀ⲧⲁϥⲟⲩⲱⲛϩ ⲛ̀Ⲁⲃⲣⲁⲁⲙ: ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲧⲉⲛⲭⲙⲏϯ: ϧⲉⲛ ⲡ̀ⲧⲱⲟⲩ ⲛ̀Ⲕⲟⲥⲕⲁⲙ.</td>
            <td class="arabic">ابن الله إلهنا الذي أظهر ذاته لإبراهيم. حلّ في وسطنا في جبل قسقام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God the Creator, who spoke to Moses, with humility, came into Egypt.</td>
            <td class="coptic">Ⲫϯ ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ: ⲉ̀ⲧⲁϥⲥⲁϫⲓ ⲛⲉⲙ Ⲙⲱⲩⲥⲏⲥ: ϧⲉⲛ ⲟⲩⲑⲉⲃⲓⲟ: ⲁϥⲓ̀ ϣⲁ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲭⲏⲙⲓ.</td>
            <td class="arabic">الله الخالق الذي تكلم مع موسي. بتواضع أتي إلى الصعيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy, in Your economy, O You holy One, glory to You Alleluia.</td>
            <td class="coptic">Ⲭⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ϧⲉⲛ ⲧⲉⲕⲟⲓⲕⲟⲛⲁⲙⲓⲁ̀: ⲱ̀ ⲫⲏⲉ̅ⲑ̅ⲩ̅: ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ̀.</td>
            <td class="arabic">قدوس قدوس قدوس في تدبيرك أيها القدوس المجد لكَ هلليلويا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Savior of the world, God the Lover of man, have mercy on Your people, heal their sicknesses.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲫϯ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ: ⲙⲁⲧⲁⲗϭⲱⲟⲩ ⲛ̀ⲛⲟⲩϣⲱⲛⲓ.</td>
            <td class="arabic">يا مخلص العالم يا الله محب البشر أرحم شعبك وأشفي أمراضهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Be patient with me, I who am weak, grant me mercy, in the day of Judgment. ${cross}</td>
            <td class="coptic">Ⲱⲟⲩⲛ̀ϩⲏⲧ ⲉ̀ϫⲱⲓ: ⲁⲛⲟⲕ ⲡⲓⲁⲥⲑⲉⲛⲏⲥ: ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲛⲁⲓ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲕ̀ⲣⲓⲥⲏⲥ. ${cross}</td>
            <td class="arabic">تأنَّى علىّ أنا الضعيف وأعطني رحمة في يوم الدينونة. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForChristEntryToEgypt(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for Christ’s Entry to Egypt">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for Christ’s Entry to Egypt
        <span class="coptic-caption">Ⲁⲗⲏⲑⲱⲥ ⲅⲁⲣ ⲁⲓϯ ⲙ̀ⲡⲁⲟⲩⲟⲓ</span>
        <span class="arabic-caption">إبصالية واطس (دخول المسيح ارض مصر)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Truly I approached, a great prince, which is the name of salvation, of Christ the King of the ages.</td>
            <td class="coptic">Ⲁⲗⲏⲑⲱⲥ ⲅⲁⲣ ⲁⲓϯ ⲙ̀ⲡⲁⲟ̀ⲩⲟⲓ: ⲉ̀ⲟⲩⲛⲓϣϯ ⲛ̀ⲕⲉⲫⲁⲗⲉⲟⲛ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ: ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
            <td class="arabic">بالحقيقة قد تقدمت إلى رأس عظيم هو اسم الخلاص الذي للمسيح ملك الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone rejoices today, in heaven and on earth, for the King of kings, has appeared on earth.</td>
            <td class="coptic">Ⲃⲟⲛ ⲟⲩⲣⲁϣⲓ ϣⲱⲡⲓ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϫⲉ ⲁ̀Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
            <td class="arabic">كل فرح كائن اليوم في السماء وعلى الأرض لأن ملك الملوك قد ظهر على الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly in that day, He walked like all men, and in His great mercy, He came down to the land of Egypt.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲫⲁⲓ: ⲁϥⲙⲟϣⲓ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲣⲱⲙⲓ: ⲟⲩⲟϩ ϧⲉⲛ ⲡⲉϥⲛⲓϣⲧ ⲛ̀ⲛⲁⲓ: ⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ϣⲁ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲭⲏⲙⲓ.</td>
            <td class="arabic">لأن في هذا اليوم مشى كإنسان وبرحمته العظيمة نزل إلى أرض مصر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the Psalmist spoke, and glorified His majesty, saying "Let the heavens rejoice, and let the earth be glad."</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ⲁϥⲥⲁϫⲓ: ⲁϥϯⲱ̀ⲟⲩ ⲙ̀ⲡⲉϥⲁ̀ⲙⲁϩⲓ: ϫⲉ ⲙⲁⲣⲟⲩⲟ̀ⲩⲛⲟϥ ⲛ̀ϫⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲙⲁⲣⲉϥⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ ⲡ̀ⲕⲁϩⲓ.</td>
            <td class="arabic">داود المرتل تكلم ومجَّد عزَّته قائلاً فلتفرح السموات ولتتهلل الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The valleys rejoice, with everything therein, because of the coming of Christ, as said by the prophets.</td>
            <td class="coptic">Ⲥⲉⲣⲁϣⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲉϣϣⲟϯ: ⲛⲉⲙ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲉ ⲛ̀ϧⲏⲧⲟⲩ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲓ̀ ⲙ̀Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲛⲟⲩϯ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">ولتبتهج الوديان وكل ما فيها من أجل مجئ المسيح إلهنا كقول الأنبياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Yes truly indeed, Matthew the Apostle, told us in the Gospel, likewise saying.</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲟⲥ ⲅⲁⲣ ⲁϥⲧⲁⲙⲟⲛ: ⲛ̀ⲧⲉ Ⲙⲁⲧⲑⲉⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϧⲉⲛ ⲡⲓⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲟⲛ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉ̀ϥϫⲱ ⲙ̀ⲙⲭⲟⲥ.</td>
            <td class="arabic">نعم حقاً قد أعلمنا متى الرسول في الإنجيل هكذا قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">"Behold an angel, spoke to Joseph saying, 'Arise take Jesus Christ, and go to Egypt quickly.'"</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲓⲥ ⲟⲩⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲁϥϫⲟⲥ ⲛ̀Ⲓⲱⲥⲏⲫ: ϫⲉ ⲧⲱⲛⲕ ϭⲓ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲙⲁϣⲉⲛⲁⲕ ϣⲁ Ⲭⲏⲙⲓ ⲛ̀ⲭⲱⲗⲉⲙ.</td>
            <td class="arabic">هوذا ملاك قال ليوسف في بيت لحم قم خذ يسوع المسيح وأذهب إلى مصر سريعاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is the mysterious prophecy, which appeared and has shone, "Out of the land of Egypt, I have called my Son."</td>
            <td class="coptic">Ⲑⲁⲓ ⲧⲉ ϯⲡ̀ⲣⲟⲫⲏⲧⲓⲁ̀ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲉⲧⲥⲁⲟ̀ⲩⲱⲛϩ ⲟⲩⲟϩ ⲁⲥⲫⲓⲣⲓ: ϫⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲭⲏⲙⲓ: ⲁⲛⲟⲕ ⲁⲓⲙⲟⲩϯ ⲙ̀ⲡⲁϣⲏⲣⲓ.</td>
            <td class="arabic">هذه هي النبوة التي ظهرت وتحققت أن من أرض مصر دعوت أبني.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">In haste and wisdom, in strength Joseph arose, he took his Lord, and Mary and Salome.</td>
            <td class="coptic">Ⲓⲱⲥⲏⲫ ϧⲉⲛ ⲟⲩϣ̀ⲣⲱⲓⲥ: ⲛⲉⲙ ⲟⲩϫⲟⲙ ⲛⲉⲙ ⲟⲩⲥⲟⲫⲓⲁ̀: ⲁϥⲧⲱⲛϥ ⲁϥϭⲓ ⲙ̀ⲡⲉϥⲟ̅ⲥ̅: ⲛⲉⲙ Ⲙⲁⲣⲓⲁ ⲛⲉⲙ Ⲥⲁⲗⲟⲩⲙⲁ.</td>
            <td class="arabic">فقام يوسف البار بحرص وقوة وحكمة وأخذ ربه وسالومي ومريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">For truly they came, down with patience, to the land of Egypt, to flee from the face of Herod.</td>
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ⲁⲩⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ: ϣⲁ ⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲣⲉϥⲱ̀ⲟⲩⲛ̀ϩⲏⲧ: ⲉ̀ⲃⲟⲗϩⲁ ⲡ̀ϩⲟ ⲛ̀Ⲏⲣⲱⲇⲏⲥ.</td>
            <td class="arabic">ونزلوا إلى كورة مصر بسرعة وطول أناة من وجه هيرودس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">And also the demons fled, with all their evil hosts, and the idols were destroyed, before the King of glory.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁⲩⲫⲱⲧ ⲛ̀ϫⲉ ⲛⲓⲇⲉⲙⲱⲛ: ⲛⲉⲙ ⲛⲟⲩⲇⲩⲛⲁⲙⲓⲥ ⲉⲧϩⲱⲟⲩ: ⲁⲩⲕⲱϣ ⲛ̀ϫⲉ ⲛⲓⲓ̀ⲇⲱⲗⲟⲛ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱⲟⲩ.</td>
            <td class="arabic">وهكذا هربت الشياطين وقواتها الشريرة وتحطمت الأصنام أمام ملك المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">And afterwards the seas, and rivers praise Him, and the hills and the mountains, worship Him.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛ̀ϫⲉ ⲛⲓⲁ̀ⲙⲁⲓⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲁⲣⲱⲟⲩ: ⲟⲩⲟϩ ⲉⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲧⲱⲟⲩ.</td>
            <td class="arabic">ومن بعد هذا. سبحته البحار والأنهار وأيضاً سجدت له الآكام والجبال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">All trees and cedars, and rain and dew, praise God who has come, for our salvation.</td>
            <td class="coptic">Ⲛⲓϣ̀ϣⲏⲛ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲓⲁϩϣ̀ϣⲏⲛ: ⲛⲉⲙ ⲛⲓⲙⲟⲛϩⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲱϯ: ⲉⲩϩⲱⲥ ⲉ̀Ⲫϯ ⲫⲏⲉ̀ⲑⲙⲏⲛ: ⲉ̀ⲧⲁϥⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ.</td>
            <td class="arabic">كل أشجار الغابات والأمطار والأندية تسبح الله الدائم الذي جاء لخلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You indeed, with Your good Father, and the Spirit of comfort, the co-essential Trinity.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲑⲟⲕ ⲁⲗⲏⲑⲱⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ϮⲦ̀ⲣⲓⲁⲥ ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ.</td>
            <td class="arabic">مبارك أنت بالحقيقة مع أبيك الصالح والروح المٌعَزَّى الثالوث المقدس المساوى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">A mystery full of glory, He who created the heavens, walked like all men, on that day.</td>
            <td class="coptic">Ⲟⲩϣ̀ⲫⲏⲣⲓ ⲉϥⲙⲉϩ ⲛ̀ⲱⲟⲩ: ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲁϥⲙⲟϣⲓ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲣⲱⲙⲓ.</td>
            <td class="arabic">أعجوبة مملوءة مجداً أن الذي خلق السموات . في مثل هذا اليوم مشى كإنسان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The King of all ages, took flesh and became man, He came to the cave, which is in Egypt.</td>
            <td class="coptic">Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱⲛ: ⲁϥϭⲓⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁϥⲉⲣⲣⲟⲙⲓ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲧⲁⲓⲥ̀ⲡⲉⲗⲉⲟⲛ: ⲑⲏⲉ̀ⲧⲭⲏ ϧⲉⲛ ⲑ̀ⲃⲁⲕⲓ ⲛ̀Ⲭⲏⲙⲓ.</td>
            <td class="arabic">ملك الدهور تجسد وتأنس ودخل تلك المغارة الكائنة بمدينة مصر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">All the names of the incorporeal, praise Him without doubt, with an incessant voice, saying "Glory to You O only-begotten One."</td>
            <td class="coptic">Ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲁⲥⲱⲙⲁⲧⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁϭⲛⲉ ⲥⲁⲛⲓⲥ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ.</td>
            <td class="arabic">كل أسماء غير المتجسدين يسبحونه بغير شك بأصوات لا تسكت قائلين المجد لك يا وحيد الجنس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hear me O my beloved, in the land of Pagem, He left His blessing in the well, with healing and delight.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲙ̀Ⲡⲉⲙϫⲉ: ⲁϥⲭⲱ ⲙ̀ⲡⲉϥⲥ̀ⲙⲟⲩ ϧⲉⲛ ϯϣⲱϯ: ⲛⲉⲙ ⲡⲓⲧⲁⲗϭⲟ ⲛⲉⲙ ϯϩⲟⲗϫ.</td>
            <td class="arabic">استمعوا لي يا أحبائي أنه في كورة البهنسا ترك بركته في البئر مع الشفاء والحلاوة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Then He came to Ashmounin, He dispersed the idols, and in that city, He performed miracles.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲁϥⲓ̀ ϣⲁ Ϣⲙⲟⲩⲛ ⲥ̀ⲛⲁⲩ: ⲁϥϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲓ̀ⲇⲱⲗⲟⲛ: ⲟⲩⲟϩ ϧⲉⲛ ϯⲃⲁⲕⲓ ⲙ̀ⲙⲁⲩ: ⲁϥⲓⲣⲓ̀ ⲛ̀ϩⲁⲛϫⲟⲙ.</td>
            <td class="arabic">حينئذ جاءوا إلى الأشمونين . وبدّد أوثانها وفي تلك المدينة صنع عجائب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">And also with joy, they walked to the mountain of Coskam, they stayed for many months, He blessed it with His right hand.</td>
            <td class="coptic">Ⲩⲇⲉⲟⲛ ϧⲉⲛ ⲟⲩⲉ̀ⲣⲟⲩⲱⲧ: ⲁⲩⲙⲟϣⲓ ϣⲁ ⲡ̀ⲧⲱⲟⲩ Ⲕⲟⲥⲕⲁⲙ: ⲁⲩϣⲱⲡⲓ ⲛ̀ϧⲏⲧϥ ⲛ̀ϩⲁⲛⲁⲃⲟⲧ: ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲧⲉϥⲟⲩⲓ̀ⲛⲁⲙ.</td>
            <td class="arabic">وأيضاً بفرح ساروا إلى جبل قسقام ومكثوا فيه شهوراً وباركه بيمينه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Your is the glory and the honor, and the thanksgiving, O King and Creator, in Your great economy.</td>
            <td class="coptic">Ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓ̀ⲟ: ⲛⲉⲙ ϯⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ̀: ⲱ̀ ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲣⲉϥⲑⲁⲙⲓⲟ: ϧⲉⲛ ⲧⲉⲕⲛⲓϣϯ ⲛ̀ⲟⲓⲕⲟⲛⲟⲙⲓⲁ̀.</td>
            <td class="arabic">لك المجد والأكرام والشكر أيها الملك الخالق عنايتك الإلهية العظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy are You O Lover of man, for You has visited in Your mercy, You took flesh and became man, and gave us salvation.</td>
            <td class="coptic">Ⲭⲟⲩⲁⲃ ⲛ̀ⲑⲟⲕ ⲱ̀ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ϫⲉ ⲁⲕϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲛⲁⲓ: ⲁⲕϭⲓⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁⲕⲉⲣⲣⲱⲙⲓ: ⲁⲕϯ ⲛⲁⲛ ⲙ̀ⲡⲓⲟⲩϫⲁⲓ.</td>
            <td class="arabic">قدوس أنت يا محب البشر لأنك افتقدتنا برحمتك. تجسدت وتأنست وأعطيتنا الخلاص.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Savior have mercy on Your people, through the prayers and intercessions, of Your mother the Virgin, the true Saint Mary.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲛⲁⲓ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲁⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲁⲅⲓⲁ̀ ⲙ̀ⲙⲏⲓ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">أيها المخلص أرحم شعبك بطلبات وشفاعات أمك العذراء القديسة الحقيقية مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Be patient with Your servant, forgive me my iniquities, so I may praise You, saying "Glory to You Alleluia." ${cross}</td>
            <td class="coptic">Ⲱⲟⲩⲛ̀ϩⲏⲧ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲃⲱⲕ: ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲁⲛⲟⲙⲓⲁ̀: ϩⲓⲛⲁ ⲛ̀ⲧⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲁⲕ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ. ${cross}</td>
            <td class="arabic">تأني على عبدك اغفر آثامي لكي أسبحك قائلاً المجد لك هلليلويا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Christ’s Entry to the Temple & Circumcision
function PsaliAdamForCircumcisionAndEntryIntoTheTemple(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for Circumcision and Entry into the Temple">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for Circumcision and Entry into the Temple
        <span class="coptic-caption">Ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅</span>
        <span class="arabic-caption">إبصالية ادام (الختان و دخول المسيح الهيكل)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Present to the Lord, glory and honor, present to the Lord, praises of victory.</td>
            <td class="coptic">Ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛ̀ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ̀: ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛ̀ϩⲁⲛϩⲩⲙⲛⲟⲥ ⲙ̀ⲡⲓϭ̀ⲣⲟ.</td>
            <td class="arabic">قدموا للرب، مجداً وكرامة، قدموا للرب، تسابيح الغلبة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Send up unto Him always, silent lambs and new songs, and blood offerings.</td>
            <td class="coptic">Ⲃⲱⲣⲡ ⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲙ̀ⲙⲏⲛⲓ: ⲛ̀ϩⲁⲛϩⲓⲏⲃ ⲛ̀ⲁⲧⲭⲁⲣⲟϥ: ⲛⲉⲙ ϩⲁⲛϫⲱⲙ ⲫⲉⲣⲓ: ⲛⲉⲙ ϩⲁⲛⲑⲩⲥⲓⲁ̀ ⲛ̀ⲁⲧⲥ̀ⲛⲟϥ.</td>
            <td class="arabic">ارسلوا له إلي فوق دائماً، حملاناً غير ساكتة، وأناشيد جديدة، وذبائح دموية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He created us, when we were nothing, He purified and taught us, the ways of heaven.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁϥⲑⲁⲙⲓⲟⲛ: ⲟⲩⲟϩ ⲁ̀ⲛⲟⲛ ⲁⲛ ⲡⲉ: ⲁϥⲧⲟⲩⲃⲟⲛ ⲁϥⲧ̀ⲥⲁⲃⲟⲛ: ⲉ̀ⲛⲓⲙⲱⲓⲧ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ.</td>
            <td class="arabic">لأنه خلقنا، وإذ نحن لن نكن، وطهرنا وعلمنا، طرق السماء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David says in truth, at all times, blessed are those who dwell, in Your house.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲉϥϫⲟⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲱ̀ⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲧϣⲟⲡ ϧⲉⲛ ⲡⲉⲕⲏⲓ.</td>
            <td class="arabic">يقول داود، في كل حين بالحقيقة، طوبي لجميع الساكنين، في بيتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">I will enter, to the Alter of God, at all times, and offer oblations.</td>
            <td class="coptic">Ⲉⲓ̀ⲉ̀ⲓ̀ ⲉ̀ϧⲟⲩⲛ: ϣⲁ ⲡⲓⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ: ⲛ̀ⲧⲉ Ⲫϯ ϧⲉⲛ ⲟⲩⲙⲟⲩⲛ: ⲉⲓⲉ̀ϣⲱⲧ ⲛ̀ϩⲁⲛϣⲱⲟⲩϣⲓ.</td>
            <td class="arabic">أدخل إلي، مذبح الله، دائماً، وأذبح الذبائح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">For truly it's wondrous, that Christ the lover of men, accepted circumcision, like the humans.</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲱⲥ ϧⲉⲛ ⲟⲩϣ̀ⲫⲏⲣⲓ: ⲁ̀Ⲡⲭ̅ⲥ̅ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ϣⲱⲡ ⲉ̀ⲣⲟϥ ⲙ̀ⲡⲓⲥⲉⲃⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">فعجباً بالحقيقة، أن المسيح محب البشر، قبل الختان، مثل البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">For Saint Luke, spoke of that, for the Messiah, and wrote and said.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲅⲁⲣ Ⲗⲟⲩⲕⲁⲥ: ⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲫⲁⲓ: ⲉⲑⲃⲉ Ⲙⲁⲥⲓⲁⲥ: ⲟⲩⲟϩ ⲁϥⲥ̀ϧⲁⲓ.</td>
            <td class="arabic">لأن لوقا، تكلم بهذا، من أجل ماسيّا، وكتب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">When the week was finished, His name was called, Jesus according, to the saying of the angel.</td>
            <td class="coptic">Ⲑⲉⲃⲇⲱⲙⲁⲥ ⲉ̀ⲧⲁⲥⲕⲏⲛ: ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ: ϫⲉ Ⲓⲏ̅ⲥ̅ ⲡⲉ ⲡⲉϥⲣⲁⲛ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">ولما كمل الإسبوع، دُعي إسمه، يسوع، كقول الملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Joseph and Salome, and Mariam His mother, when they finished, the forty days.</td>
            <td class="coptic">Ⲓⲱⲥⲏϥ ⲛⲉⲙ Ⲥⲁⲗⲱⲙⲏ: ⲛⲉⲙ Ⲙⲁⲣⲓⲁ̀ ⲧⲉϥⲙⲁⲩ: ⲉ̀ⲧⲁⲩϫⲱⲕ ⲙ̀ⲡⲓⲙ̅: ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">يوسف وسالومي، ومريم أمه، لما أكملوا، تلك الأربعين يوماً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also they went, to the house of prayers, to offer for themselves, the choice offerings.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲁⲩϣⲉⲛⲱⲟⲩ: ⲉ̀ⲡ̀ⲏⲓ ⲛ̀ϯⲡ̀ⲣⲟⲥⲉⲩⲭⲏ: ⲉⲑⲣⲟⲩⲓ̀ⲛⲓ ⲉ̀ϫⲱⲟⲩ: ⲛ̀ϩⲁⲛⲥⲱⲧⲡ ⲛ̀ⲉⲩⲭⲏ.</td>
            <td class="arabic">وأيضاً ذهبوا، إلي بيت الصلاة، ليقدموا عنهما، تقدمات مختارة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">They also have found, Simon the priest, standing and serving, through his priesthood.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲅⲁⲣ ⲁⲩϫⲓⲙⲓ: ⲛ̀Ⲥⲓⲙⲱⲛ ⲡⲓⲟⲩⲏⲃ: ⲉϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ⲉϥϣⲉⲙϣⲓ: ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲏⲃ.</td>
            <td class="arabic">وأيضاً وجدوا، سمعان الكاهن، واقفاً يخدم، في كهنوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">So he did not hesitate, but took the risk, and carried Him quickly, on his arms.</td>
            <td class="coptic">Ⲙ̀ⲡⲉϥⲉⲣⲁ̀ⲙⲉⲗⲏⲥ: ⲁⲗⲗⲁ ⲁϥϯ ⲙ̀ⲡⲉϥⲟⲩⲟⲓ: ⲁϥⲟⲗϥ ϧⲉⲛ ⲟⲩⲓⲏⲥ: ⲉ̀ϫⲉⲛ ⲛⲉϥϫ̀ⲫⲟⲓ.</td>
            <td class="arabic">فلم يتهاون، بل بادر، وحمله بسرعة، علي ذراعيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">And he said now O Lord, let your servant go, for You have kept me, to see You.</td>
            <td class="coptic">Ⲛⲁϥ ϫⲟⲥ ϫⲉ ⲡⲁⲟ̅ⲥ̅: ϯⲛⲟⲩ ⲭ̀ⲛⲁⲭⲁ ⲡⲉⲕⲃⲱⲕ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲕⲣⲱⲓⲥ: ⲉ̀ⲣⲟⲓ ⲉⲑⲣⲏⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ.</td>
            <td class="arabic">وكان يقول الآن، يا سيدي إطلق عبدك، لأنك حفظتني، لكي أراك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">And suddenly, Anna the prophetess, the meek woman, came and confessed.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲁⲥⲓ̀: ⲛ̀ϫⲉ Ⲁⲛⲛⲁ ϯⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϯⲥⲉⲙⲛⲉ ⲛ̀ⲥ̀ϩⲓⲙⲓ: ⲁⲥⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ.</td>
            <td class="arabic">وبغتة، جاءت حنة النبية، المرأة العفيفة، واعترفت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">And she spoke about Him, in front of everyone, for all the people, waited for Him at all times.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲛⲁⲥ ⲥⲁϫⲓ ⲉⲑⲃⲏⲧϥ: ϧⲁⲧⲉⲛ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲟⲩⲟϩ ⲡⲓⲗⲁⲟⲥ ⲧⲏⲣϥ: ⲛⲁⲩϫⲟⲩϣⲧ ⲉ̀ⲣⲟϥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">وكانت تتكلم من أجله، أمام الجميع، واذ كان كل الشعب، ينتظرة كل حين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Our Master the lover of men, Christ our King, accepted circumcision, to complete the Law.</td>
            <td class="coptic">Ⲡⲉⲛⲛⲏⲃ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲡⲉⲛⲟⲩⲣⲟ Ⲡⲭ̅ⲥ̅: ⲁϥϣⲱⲡ ⲉ̀ⲣⲟϥ ⲙ̀ⲡⲓⲥⲉⲃⲓ: ⲉⲑⲣⲉϥϫⲱⲕ ⲙ̀ⲡⲓⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">سيدنا محب البشر، ملكنا المسيح، قبل الختان، ليكمل الناموس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice and be glad, o you sons of men, for Emmanuel, have carried our sins.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲣⲱⲙⲓ: ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲁϥⲱ̀ⲗⲓ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">افرحوا وتهللوا، يا جنس البشر، لأن عمانوئيل، حمل خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Yes in truth, He confirmed His Incarnation, and fulfilled our humbleness, by His circumcision.</td>
            <td class="coptic">Ⲥⲉ ⲟⲛⲧⲱⲥ ⲁϥⲧⲁϫⲣⲟ: ⲙ̀ⲡⲉϥϫⲓⲛ ⲉⲣⲣⲱⲙⲓ: ⲁϥϫⲱⲕ ⲙ̀ⲡⲉⲛⲑⲉⲃⲓⲟ̀: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉϥⲥⲉⲃⲓ.</td>
            <td class="arabic">نعم الحقيقة، ثبَّت تأنسه، وأكمل توضعنا، بإختتانه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Therefore He taught us, the ways of salvation, and He has saved us, according to His great mercy.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲁϥⲧ̀ⲥⲁⲃⲟⲛ: ⲉ̀ϩⲁⲛⲙⲱⲓⲧ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ: ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ: ⲕⲁⲧⲁ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">حينئذ علمنا، طرق الخلاص، وخلصنا، كعظيم رحمته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">He in the Son of God, in truth, and she gave birth to Him, Saint Mary the Virgin.</td>
            <td class="coptic">Ⲩⲥ̅ Ⲑⲥ̅ ⲛ̀ⲑⲟϥ: ϧⲉⲛ ⲟⲩⲁ̀ⲗⲏⲑⲓⲁ̀: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ ⲑⲏⲉ̅ⲑ̅ⲩ̅ Ⲙⲁⲣⲓⲁ̀.</td>
            <td class="arabic">هو ابن الله، بالحقيقة، قد ولدته، القديسة مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">He who is carried, by the invisible hosts, was carried by, Simon the priest.</td>
            <td class="coptic">Ⲫⲏ ⲉ̀ⲧⲟⲩϥⲁⲓ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ ⲛⲓⲧⲁⲝⲓⲥ ⲉⲧϩⲏⲡ: ⲁϥⲱ̀ⲗⲓ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ Ⲥⲓⲙⲱⲛ ⲡⲓⲟⲩⲏⲃ.</td>
            <td class="arabic">الذي تحمله، الرتب الخفية، قد حمله، سمعان الكاهن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy O You O Christ, in Your precepts, and unlimited is, Your power and wisdom.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲱ̀ Ⲡⲭ̅ⲥ̅: ϧⲉⲛ ⲧⲉϥⲟⲓⲕⲟⲛⲟⲙⲓⲁ̀: ⲟⲩⲁⲧϣ̀ϯϣⲓ ⲉ̀ⲣⲟⲥ: ⲧⲉ ⲧⲉⲕϫⲱⲙ ⲛⲉⲙ ⲧⲉⲕⲥⲟⲫⲓⲁ̀.</td>
            <td class="arabic">قدوس أيها المسيح، في تدبيرك، وغير محدودة، هي قوتك وحكمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">And the rest of Your people, heal their sicknesses, and those who departed, O Lord remember them.</td>
            <td class="coptic">Ⲯⲉⲡⲓ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ: ⲙⲁⲧⲁⲗϭⲟ ⲛ̀ⲛⲟⲩϣⲱⲛⲓ: ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡⲟ̅ⲥ̅: ⲁ̀ⲣⲓⲡⲟⲩⲙⲉⲩⲓ̀.</td>
            <td class="arabic">وسائر شعبك، اشف أمراضهم، والدين رقدوا، يا رب أذكرهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Likewise I Your servant, the sinner, I entreat You, to forgive me my sins. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲥⲁⲩⲧⲟⲥ ⲡⲉⲕⲃⲱⲕ: ⲁ̀ⲛⲟⲕ ϧⲁ ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ϯϯϩⲟ ⲉ̀ⲣⲟⲕ: ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲁⲛⲟⲃⲓ. ${cross}</td>
            <td class="arabic">كذلك أنا عبدك، الخاطئ، أتوسل إليك أن تغفر لي خطاياي. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForCircumcisionAndEntryIntoTheTemple(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for Circumcision and Entry into the Temple">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for Circumcision and Entry into the Temple
        <span class="coptic-caption">Ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅</span>
        <span class="arabic-caption">إبصالية واطس (الختان و دخول المسيح الهيكل)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Present to the Lord, O blessed sons of God, present to the Lord, lambs and fat calves.</td>
            <td class="coptic">Ⲁⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛ̀ⲛⲓϣⲏⲣⲓ: ⲛ̀ⲧⲉ Ⲫϯ ⲉ̀ⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛ̀ϩⲁⲛⲱⲓⲗⲓ: ⲛⲉⲙ ϩⲁⲛⲙⲁⲥⲓ ⲉⲩⲕⲉⲛⲓⲱⲟⲩⲧ.</td>
            <td class="arabic">قدموا للرب أبناء اللـه المباركين قدموا للـرب الكـباش والعجول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Send up unto Him the honor, the glory of His holy name, serve God righteously, and worship Him in courts of His holiness.</td>
            <td class="coptic">Ⲃⲱⲣⲡ ⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲙ̀ⲡⲓⲧⲁⲓⲟ̀: ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉ̅ⲑ̅ⲩ̅: ⲁ̀ⲣⲓ ⲃⲱⲕ ⲙ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩⲥ̀ⲃⲱ: ⲟⲩⲟϩ ⲟⲩⲱϣⲧ ϧⲉⲛ ⲛⲉϥⲁⲩⲗⲏⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">أرسلوا له إلي فوق الكرامة والمجد لاسمه القدوس اعبدوا الرب بأدب واسجدوا في ديار قدسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For the offerings are sent to Him, come into His holy courts, raise on His alter, the calves and the lambs.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲉⲩϥⲁⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛ ϣⲟⲩϣⲱⲟⲩϣⲓ: ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲉϥⲁⲩⲗⲏⲟⲩ ⲉ̅ⲑ̅ⲩ̅: ⲓ̀ⲛⲓ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ϫⲉⲛ ⲡⲉϥⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ: ⲛ̀ϩⲁⲛⲃⲁⲣⲏⲓⲧ ⲛⲉⲙ ϩⲁⲛϩⲓⲏⲃ.</td>
            <td class="arabic">لأن له ترفع الذبائـح أدخلوا إلي ديـار قدسه واصعدوا علي مذبـحه التيـوس والحملان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the true chanter, says in great care, I was glad when they said to me, let us go into the house of the Lord.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ⲙ̀ⲙⲏⲓ: ⲉϥϫⲟⲥ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϣ̀ⲣⲱⲓⲥ: ϫⲉ ⲁⲓⲟⲩⲛⲟϥ ⲉ̀ϫⲉⲛ ⲛⲏⲉ̀ⲧⲁⲩϫⲟⲥ ⲛⲏⲓ: ϫⲉ ⲧⲉⲛⲛⲁϣⲉⲛⲁⲛ ⲉ̀ⲡ̀ⲏⲓ ⲙ̀Ⲡⲟ̅ⲥ̅.</td>
            <td class="arabic">داود المرتل الحقيقي يقول بحرص عظيم فرحت بالقائـلين لي إلي بيت الرب نذهب أدخل إلي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Come into, the Alter of God, with good praises, and with bloodless oblations.</td>
            <td class="coptic">Ⲉⲓⲉ̀ⲓ̀ ⲉ̀ϧⲟⲩⲛ ϣⲁ ⲡⲓⲙⲁ: ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ ⲛ̀ⲧⲉ Ⲫϯ: ϧⲉⲛ ϩⲁⲛϩⲩⲙⲛⲟⲥ ⲉ̀ⲛⲁⲛⲉⲩ: ⲛⲉⲙ ϩⲁⲛ ⲑⲩⲥⲓⲁ̀ ⲛ̀ⲁⲧⲥ̀ⲛⲟϥ.</td>
            <td class="arabic">أدخل إلي مـذبح اللـه بتسابيح جيدة وذبائـح غير دموية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">For truly the Maker of the law, who created Adam, became under the Law, when He was born of Mariam.</td>
            <td class="coptic">Ⲍⲉⲟⲛⲧⲱⲥ ⲡⲉⲧⲥⲉⲙⲛⲉ ⲛⲟⲙⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥ ⲑⲁⲙⲓⲟ̀ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲁϥϣⲱⲡⲓ ϧⲁ ⲡⲓⲛⲟⲙⲟⲥ: ⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁⲙ.</td>
            <td class="arabic">فبالحـقيقـة واضع النموس الذي خلق آدم صـار تـحت الناموس لمـا ولدتـه مريم</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">When it was eight full days, after his mysterious birth, He completed the Law, and entered the house of circumcision.</td>
            <td class="coptic">Ⲏ̅ ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲁⲩⲙⲟϩ ⲉ̀ⲃⲟⲗ: ⲙⲉⲛⲉⲛⲥⲁ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲁϥϫⲱⲕ ⲙ̀ⲡⲓⲛⲟⲙⲟⲥ ⲉ̀ⲃⲟⲗ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡ̀ⲏⲓ ⲙ̀ⲡⲓⲥⲉⲃⲓ.</td>
            <td class="arabic">ولما كملت ثـمانيـة أيام بـعد ميلاده العـجيب أكـمل النماوس ودخل بيت الخـتان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">The only begotten God, took our shape in everything, but the sin alone, and He is the Lord of hosts.</td>
            <td class="coptic">Ⲑⲥ̅ ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ: ⲁϥⲓ̀ⲛⲓ ⲙ̀ⲙⲟⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ϣⲁⲧⲉⲛ ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ: ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲟ̅ⲥ̅ ⲛ̀ⲧⲉ ⲛⲟⲙϯ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">الأله الواحيد وحده أشبهنا في كل شيء مـا خلا الخطيـئة وحدها وهو رب كل غزاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">And was called Jesus Christ, according to the saying of the angel, before He emptied Himself, in the womb of the Virgin.</td>
            <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲙ̀ⲡⲁⲧⲟⲩⲉⲣⲃⲟⲕⲓ ⲙ̀ⲙⲟϥ: ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ ⲛ̀ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">ودُعي يسوع المسيح كقول الملاك قبل أن حُبل به في بطن العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also quickly, when she finished her days, according to the Law of Moses, she washed and was purified.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲟⲛ ϧⲉⲛ ⲟⲩⲓⲏⲥ: ⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲛⲟⲩⲉ̀ϩⲟⲟⲩ: ⲕⲁⲧⲁ ⲫ̀ⲛⲟⲙⲟⲥ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ: ⲁⲩϫⲱⲕⲉⲙ ⲟⲩⲟϩ ⲁⲩⲧⲟⲩⲃⲱⲟⲩ.</td>
            <td class="arabic">وأيضاً بسرعة لمـا كملت أيـامهمـا كناموس مـوسى اغتسلا وطهرا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">And also with a broken spirit, going to Jerusalem, to fulfill what's written, with an unfortified heart.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ϧⲉⲛ ⲟⲩⲡ̅ⲛ̅ⲁ̅ ⲉϥⲧⲉⲛⲛⲏⲟⲩⲧ: ⲁⲩϣⲉⲛⲱⲟⲩ ⲟⲛ ⲉ̀Ⲓⲗ̅ⲏ̅ⲙ̅: ⲉ̀ⲓ̀ⲣⲓ ⲙ̀ⲫⲏⲉⲧⲥ̀ϧⲏⲟⲩⲧ: ⲉ̀ⲣⲉ ⲛⲟⲩϩⲏⲧ ⲟⲓ ⲛ̀ⲁⲧⲕⲓⲙ.</td>
            <td class="arabic">وأيضاً بروح منسحق ذهبـا إلي أورشليم ليصنعا المكتوب بقلب غير متزعزع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">And after that Simon, have carried Him on his hands, and by that he opened his mouth, and blessed the Lord of the ages.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲁϥⲱ̀ⲗⲓ ⲙ̀ⲙⲟϥ: ⲉ̀ϫⲉⲛ ⲛⲉϥϫⲓϫ ⲛ̀ϫⲉ Ⲥⲓⲙⲱⲛ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲁϥⲟⲩⲱⲛ ⲛ̀ⲣⲱϥ: ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀Ⲫϯ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
            <td class="arabic">وبعد هذا حـمله سـمعان علي يديه وهكذا فاه وبارك إله الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">My eyes have seen Your salvation, now O Lord let Your servant, depart in peace quickly, according to Your saying.</td>
            <td class="coptic">Ⲛⲁⲃⲁⲗ ⲁⲩⲛⲁⲩ ⲉ̀ⲡⲉⲕⲛⲟϩⲉⲙ: ϯⲛⲟⲩ ⲡⲁⲛⲏⲃ ⲭ̀ⲛⲁⲭⲁ ⲡⲉⲕⲃⲱⲕ: ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲛ̀ⲭⲱⲗⲉⲙ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲣⲱⲕ.</td>
            <td class="arabic">عيناي قـد أبصرتا خـلاصك الآن يا سيد أطلق عـبدك بسلام عاجلاً كقول فيك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">And she came with rejoicing, Anna the prophetess, the daughter of Phanuel, and had confessed.</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ⲁⲥⲓ̀ ⲛ̀ϫⲉ ϯⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: Ⲁⲛⲛⲁ ⲧ̀ϣⲉⲣⲓ ⲙ̀Ⲫⲁⲛⲟⲩⲏⲗ: ⲟⲩⲟϩ ⲁⲥⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ.</td>
            <td class="arabic">وبغـتة أنت بتهليل حنـة النبيـة بنت فنوئـيل واعترفت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">To You is due the glory and the honor, O You the meek in His power, the Lord the Creator, the old man by His right.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ ⲛⲉⲙⲟⲩ ⲧⲁⲓⲟ̀: ⲱ̀ ⲡⲓⲁⲡⲗⲟⲩⲥ ϧⲉⲛ ⲧⲉϥⲟⲩⲥⲓⲁ̀: ⲡⲓⲛⲟⲩϯ ⲛ̀ⲣⲉϥⲑⲁⲙⲓⲟ̀: ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲡⲁⲥ ϧⲛ ⲡⲉϥⲟⲩⲓ̀ⲛⲁⲙ.</td>
            <td class="arabic">لك المـجد والكرامة أيها البسيط في جوهره الإله الخالق الإنسان العتيق بيمينه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Your name is sweat and blessed, in the mouths of Your saints, we worship You with Your Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲡⲉⲕⲣⲁⲛ ϩⲟⲗϫ ⲟⲩⲟϩ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲏⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲧⲁⲕ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲛⲉⲙ ⲡⲉⲕⲓⲱⲧ: ⲛⲉⲙ ⲡⲓⲡ̅ⲛ̅ⲁ̅ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">إسـمك حلو ومبارك في أفـواه قديسيك نسجد لك مع أبيك والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Behold everyone, praise and witness to Him, the shepherds and the wise men, and the orders of the angels.</td>
            <td class="coptic">Ⲣⲱⲓⲥ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ⲉⲩⲉⲣⲙⲉⲑⲣⲉ ⲛⲁϥ ⲁ̀ⲗⲏⲑⲱⲥ: ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲙⲁⲅⲟⲥ: ⲛⲉⲙ ⲡ̀ⲭⲱⲣⲟⲥ ⲛ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">تأملـوا الـجميـع يسبحونه ويشهدون له الرعـاة والـمجوس وصفوف الملـئكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Simon and Anna the prophetess, the voice of the Father, and John the Baptist, and Zechariah his father.</td>
            <td class="coptic">Ⲥⲓⲙⲱⲛ ⲛⲉⲙ Ⲁⲛⲛⲁ ϯⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲛⲉⲙ Ⲓⲱ̅ⲁ̅ ⲡⲓⲃⲁⲡⲧⲓⲥⲧⲏⲥ: ⲛⲉⲙ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">سـمعـان وحـنة النبية وصوت الآب ويوحـنا المعمـدان وزكريـا أبـوه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Therefore David rejoiced, with authority, therefore they present, bulls on Your alter.</td>
            <td class="coptic">Ⲧⲟⲧⲉ Ⲇⲁ̅ⲇ̅ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ: ⲉϥⲥⲁϫⲓ ϧⲉⲛ ⲟⲩⲉⲣϣⲓϣⲓ: ⲧⲟⲧⲉ ⲉⲩⲉ̀ⲓ̀ⲛⲓ ⲛ̀ϩⲁⲛⲙⲁⲥⲓ: ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ.</td>
            <td class="arabic">حينئـذ داود يقول بسلطان فارحاً حينئذ يقدمون على مذبحك العجول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God Emmanuel, He is the true sacrifice, and the oblation and burnt offering, placed in the Alter.</td>
            <td class="coptic">Ⲩⲥ̅ Ⲑⲥ̅ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲡⲉ ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ ⲙ̀ⲙⲉⲑⲙⲏⲓ: ⲟⲩⲁ̀ⲛⲁⲫⲟⲣⲁ ⲛⲉⲙⲟⲩ ϭ̀ⲗⲏⲗ: ⲉ̀ⲧⲁⲩⲭⲁϥ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ.</td>
            <td class="arabic">ابن اللـه عمـانوئيل هو الذبيحة بالحقيقة والقربان والمـحرقـة موضوعاً في الهيكل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Who was raised, on the wood of the cross, with His will alone, for the purification of the world.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁⲩⲉⲛϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲙ̀ⲙⲟϥ: ϩⲓϫⲉⲛ ⲡⲓϣⲉ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ: ⲉⲑⲃⲉ ⲡ̀ⲧⲟⲩⲃⲟ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">الذي رُفع علي خشبة الصليب بـإرادتـه وحده مـن أجل تطهيـر العالـم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy O You truly, who fulfilled the humanity, and He is God in truth, in the perfection of his wondrous Divinity.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲛ̀ⲑⲟⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥ ϫⲉⲕ ϯⲙⲉⲧⲣⲱⲙⲓ: ⲟⲩⲟϩ ⲛ̀ⲑⲟϥ ⲟⲩⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ϧⲉⲛ ⲡ̀ϫⲱⲕ ⲛ̀ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ.</td>
            <td class="arabic">قدوس أنت بالحقيقة يا من اكمل الأنسانية وهو اللـه حقاً في كـمال لاهـوتـه العجيب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">All the souls of Your people, give them rest and coolness, in the bosoms of the first fathers, Abraham Isaac and Jacob</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲙ̀ⲧⲟⲛ ⲛⲉⲙ ⲟⲩⲭ̀ⲃⲟⲃ: ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲧⲟ ⲡⲁⲧⲣⲟⲥ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">كل أنفس شعبك أعطها راحة وبرودة في أحضان الآبء الأولين إبـراهيـم واسحق ويعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O name full of Glory, O name full of blessing, deliver us from the evil one, from the prince of the death. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲡⲓⲣⲁⲛ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲱ̀ ⲡⲓⲣⲁⲛ ⲉⲑⲙⲉϩ ⲛ̀ⲥ̀ⲙⲟⲩ: ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ: ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁ ⲡ̀ⲉⲣϣⲓϣⲓ ⲛ̀ⲧⲉ ⲫ̀ⲙⲟⲩ. ${cross}</td>
            <td class="arabic">أيـها الأسم المملوء مـجداً أيـها الأسم المملوء بركة نـجني من الشـرير ومن سلطان الموت. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Thomas Sunday
function PsaliAdamForThomasSunday(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for Thomas Sunday">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for Thomas Sunday
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ</span>
        <span class="arabic-caption">إبصالية ادام (أحد توما)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us sing today, with an unceasing voice, for the King of glory, Jesus Christ rose.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱϥ: ϫⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">رتلوا اليوم، بصوت لا يسكت، لأن ملك المجد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Loosen from your hearts, thoughts and deceit, for the merciful Lord, Jesus Christ rose.</td>
            <td class="coptic">Ⲃⲱⲗⲟⲩ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛⲉⲙ ⲛⲓⲭ̀ⲣⲱϥ: ϫⲉ Ⲡ̀ϭⲟⲓⲥ Ⲡⲓⲛⲁⲏⲧ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">حلِّوا من قلوبكم، الأفكار والغش، لأن الرب الرحيم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He is our God, let us praise and bless Him, and glorify Him as God, Jesus Christ rose.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲧⲉⲛϩⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ ϩⲱⲥ Ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">لأنه هو إلهنا، فلنسبحه ونباركه، ونمجده كإله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David the just testified, the highly honored one, “Lift up your gates,” Jesus Christ rose.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁϥⲉⲣⲙⲉⲑⲣⲉ: ⲡⲓⲑ̀ⲙⲏⲓ ⲡⲓϣⲟⲩⲧⲁⲓⲟϥ: ϫⲉ ϥⲁⲓ ⲛ̀ⲛⲉⲧⲉⲛⲡⲩⲗⲏ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">شهد داود البار، الجزيل الكرامة، قائلاً "إرفعوا أبوابكم،" يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Emmanuel our God, come let us worship Him, and also say, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲙⲁⲣⲉⲛϫⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">عمانوئيل إلهنا، تعالوا فلنسجد له، ونقول هكذا، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Seven angels, rejoiced with gladness, saying “God the Logos, Jesus Christ rose.”</td>
            <td class="coptic">Ⲍ̅ (ϣⲁϣϥ) ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲁⲩⲑⲉⲗⲏⲗ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">السبع الملائكة، تهللت بإبتهاج قائلة، "أن الله الكلمة، يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold the prophets, witnessed to Him, for our Lord the Master, Jesus Christ rose.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲉⲑⲃⲏⲧϥ: ϫⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هوذا الأنبياء شهدوا، من أجله، أن ربنا السيد، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice of believers, today with gladness, we proclaim openly, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲙ̀ⲫⲟⲟⲩ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲣⲏⲧⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تهللوا أيها المؤمنون، اليوم بفرح، فلنصرخ جهراً، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold the Apostles, who followed Him, testified justly, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲓⲥ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲏⲉ̀ⲧⲁⲩⲙⲟϣⲓ ϧⲁϫⲟϥ: ⲁⲩⲉⲣⲙⲉⲑⲣⲉ ⲕⲁⲗⲱⲥ: ϫⲉ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هوذا الرسل، الذين تبعوه، شهدوا حسناً، "ان يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And also the Virgin, Mary was glad, for her Son our Lord, Jesus Christ rose.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ ⲁⲥⲟⲩⲛⲟϥ: ϫⲉ Ⲡⲉⲥϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">وأيضاً العذراء، مريم تفرح، لأن إبنها ربنا، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover the women carrying, the spices were glad, for God the Lover of Man, Jesus Christ rose.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲛⲓϩⲓⲟⲙⲓ: ⲙ̀ϥⲁⲓⲥⲟϫⲉⲛ ⲁⲩⲟⲩⲛⲟϥ: ϫⲉ ⲛ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">وأيضاً فرحن النسوة، حاملات الطيب، لأن الله محب البشر، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Michael spoke to them, and said in gladness, “He is not here,” Jesus Christ rose.</td>
            <td class="coptic">Ⲙⲓⲭⲁⲏⲗ ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲧⲉⲛ: ⲙ̀ⲡⲁⲓⲣⲏϯ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ϫⲉ ⲉϥⲭⲏ ⲙ̀ⲡⲁⲓⲙⲁ ⲁⲛ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">تكلم ميخائيل، معكنَّ هكذا بفرح، قائلاً "ليس هو ها هنا،" يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The evangelists, taught us in gladness, “The Lord and Master, Jesus Christ rose.”</td>
            <td class="coptic">Ⲛⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲁⲩⲧⲁⲙⲟⲛ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ϫⲉ Ⲡ̀ϭⲟⲓⲥ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">الإنجيليون، أعلمونا بفرح، أن السيد الرب، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Blessed are You in truth, for You have abolished death, O come let us say, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲟⲥ: ⲟⲩⲟϩ ⲫ̀ⲙⲟⲩ ⲁⲕⲕⲱⲣϥ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛϫⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">مبارك أنت بالحقيقة، لأنك أبطلت الموت، تعالوا فلنقل، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Glory to You O God, come let us worship Him, and glorify Him as God, Jesus Christ rose.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ ⲛ̀Ⲫ̀ⲛⲟⲩϯ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ ϩⲱⲥ Ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">المجد لك يا الله، تعالوا فلنسجد له، ونمجده كإله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The King of kings, the Creator, let us serve Him, Jesus Christ rose.</td>
            <td class="coptic">Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲙⲁⲣⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟϥ: Ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">ملك الملوك، الخالق، فلنخدمه، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice O believers, with joy and gladness, for God the Logos, Jesus Christ rose.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ ⲟⲩⲛⲟϥ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ. Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">أفرحوا أيها المؤمنون، بتهليل وإبتهاج، لأن الله الكلمة، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praise the Lord our God, for the psalm is good, and the Lamb of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ: ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ: ϫⲉ Ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">سبحوا الرب إلهنا، لأن المزمور جيد، لأن حمل الله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We speak of His divinity, and we serve Him, let us say likewise, “Jesus Christ rose.”</td>
            <td class="coptic">Ⲧⲉⲛⲥⲁϫⲓ ϧⲉⲛ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲧⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟϥ: ⲙⲁⲣⲉⲛϫⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">ننطق بلاهوته، ونخدمه، قائلين هكذا، "يسوع المسيح قام."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God our God, we worship Him, for He came to save us, Jesus Christ rose.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ϫⲉ ⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">إبن الله إلهنا، فلنسجد له، لأنه جاء لأجل خلاصنا، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">This is the day, the Lord has made, let us rejoice today, Jesus Christ rose.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁ Ⲡ̀ϭⲟⲓⲥ ⲑⲁⲙⲓⲟϥ: ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫⲟⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">هذا هو اليوم، الذي صنعه الرب، فلنتهلل اليوم، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy holy, O You who rose, the Son of the Holy, Jesus Christ rose.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥⲧⲱⲛϥ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫⲏⲉⲑⲟⲩⲁⲃ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">قدوس قدوس قدوس، يا مَنْ قامَ، إبن القدوس، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The souls of our fathers, were saved with gladness, for our Master the Son of God, Jesus Christ rose.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛ̀ⲛⲉⲛⲓⲟϯ: ⲁⲩⲛⲁϩⲙⲟⲩ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ϫⲉ Ⲡⲉⲛⲛⲏⲃ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ.</td>
            <td class="arabic">أنفس أبائنا، خَلَصوا بفرح، لأن سيدنا إبن الله، يسوع المسيح قام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O You who suffered, and abolished death, save us from our sufferings, Jesus Christ rose. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥϭⲓⲙ̀ⲕⲁϩ: ⲟⲩⲟϩ ⲫ̀ⲙⲟⲩ ⲁϥⲕⲱⲣϥ: ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛⲙ̀ⲕⲁⲩϩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ. ${cross}</td>
            <td class="arabic">يا مَنْ تألم، وأبطل الموت، خلَّصنا من آلامنا، يسوع المسيح قام. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForThomasSunday(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for Thomas Sunday">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for Thomas Sunday
        <span class="coptic-caption">Ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ</span>
        <span class="arabic-caption">إبصالية واطس (أحد توما)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">God stood, with power and might, in the assembly of gods, to judge the mighty ones.</td>
            <td class="coptic">Ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ: ϧⲉⲛ ⲟⲩϫⲟⲙ ⲛⲉⲙ ⲟⲩⲙⲉⲧϫⲱⲣⲓ: ϧⲉⲛ ⲧ̀ⲥⲩⲛⲁⲅⲱⲅⲏ ⲛ̀ⲧⲉ ϩⲁⲛⲛⲟⲩϯ: ⲛ̀ⲧⲉϥϯϩⲁⲡ ⲉ̀ϩⲁⲛϫⲱⲣⲓ.</td>
            <td class="arabic">قام الله، بقوة وإقتدار، في مجمع الآلهة، ليدين الأقوياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Every eye of the prophets, observed Him closely, with the just and the patriarchs, that He may raise them to the joy.</td>
            <td class="coptic">Ⲃⲁⲗ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲁⲩ ϫⲟⲩϣⲧ ϧⲉⲛ ⲟⲩⲙⲉⲓ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲉⲑⲣⲉϥⲟ̀ⲗⲟⲩ ⲉ̀ⲡⲓⲟⲩⲛⲟϥ.</td>
            <td class="arabic">كل أعين الأنبياء، كانت تراقبه، مع الأبرار ورؤساء الآباء، لكي يحملهم إلى النعيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For He is our Savior, He saved those who pleased Him, from the fearsome Hades, and lifted them to the highest.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲣⲉϥⲥⲱϯ: ⲁϥⲛⲟϩⲉⲙ ⲛ̀ⲛⲏⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲁ̀ⲙⲉⲛϯ ⲉⲧϩⲟϯ: ⲁϥⲟ̀ⲗⲟⲩ ⲉ̀ⲡ̀ϭⲓⲥⲓ ⲛⲉⲙⲁϥ.</td>
            <td class="arabic">لأنه هو مخلِّصنا، خلَّص الذين أرضوه، من الجحيم المخيف، وحملهم معه إلى العُلاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David spoke of this, in the Book of Psalms, “The Lord declared His salvation, before the Gentiles.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲫⲁⲓ: ϧⲉⲛ ⲡ̀ϫⲱⲙ ⲛ̀ⲧⲉ ⲛⲓⲯⲁⲗⲙⲟⲥ: ϫⲉ ⲁ̀ Ⲡ̀ϭⲟⲓⲥ ⲁϥⲟⲩⲱⲛϩ ⲙ̀ⲡⲉϥⲟⲩϫⲁⲓ: ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲉⲑⲛⲟⲥ.</td>
            <td class="arabic">قال داود بهذا، في سفر المزامير، "أن الرب قد أعلن، خلاصه قدام الأمم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The Lord said “Now, I rise and perform salvation, I will appear and guard, the lost sheep.”</td>
            <td class="coptic">Ⲉⲓⲛⲁⲧⲱⲛⲧ ϯⲛⲟⲩ ⲡⲉϫⲉ Ⲡ̀ϭⲟⲓⲥ: ⲟⲩⲟϩ ⲉⲓⲉ̀ⲓ̀ⲣⲓ ⲙ̀ⲫ̀ⲛⲟϩⲉⲙ: ⲉⲓⲉ̀ⲟⲩⲟⲛϩⲧ ⲟⲩⲟϩ ⲛ̀ⲧⲁⲣⲱⲓⲥ: ⲉ̀ⲛⲓⲉ̀ⲥⲱⲟⲩ ⲉ̀ⲧⲁⲩⲥⲱⲣⲉⲙ.</td>
            <td class="arabic">قال الرب "الآن، أقوم وأصنع الخلاص، وأظهر وأحرص، الخراف الضالة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Zechariah spoke with eagerness, and blessed knowledge, in his prophecy, “He rose from the dead.”</td>
            <td class="coptic">Ⲍⲁⲭⲁⲣⲓⲁⲥ ϧⲉⲛ ⲟⲩⲁⲕⲣⲓⲃⲓⲁ: ⲛⲉⲙ ⲛⲟⲏ̀ⲙⲁ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲁϥϫⲟⲥ ϧⲉⲛ ⲧⲉϥⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ϫⲉ ϥ̀ⲛⲁⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">زكريا بإجتهاد، ومعرفة مباركة، نطق في نبوته، "أنه قام من بين الأموات."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Also Isaiah’s tongue, moved and he spoke, “Be enlightened O Jerusalem, for God had mercy on His people.</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲇⲉ ⲟⲛ ⲁⲩⲕⲓⲙ: ⲙ̀ⲡⲉϥⲗⲁⲟⲥ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ϭⲓⲟⲩⲱⲓⲛⲓ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ϫⲉ ⲁ̀ Ⲫ̀ⲛⲟⲩϯ ⲛⲁⲓ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ.</td>
            <td class="arabic">وتحرك أيضاً أشعياء، بلسانه وقال، "إستنيرى يا أورُشَليم، لأن الله رَحَمَ شعبه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">“And rejoice in the God of majesty,” also Habakkuk has said, “He rose and trembled the earth, the nations were dissolved.”</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ϧⲉⲛ Ⲫ̀ⲛⲟⲩϯ ⲫⲁ ⲡⲓⲁ̀ⲙⲁϩⲓ: ⲛⲉⲙ Ⲁⲃⲃⲁⲕⲟⲩⲕ ⲫⲏⲉ̀ⲧⲁϥϫⲟⲥ: ϫⲉ ⲁϥⲧⲱⲛϥ ⲁϥⲕⲓⲙ ⲛ̀ϫⲉ ⲡ̀ⲕⲁϩⲓ: ⲁⲩⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ϩⲁⲛⲉⲑⲛⲟⲥ.</td>
            <td class="arabic">وتهللي بالله ذي العزة،" وقال حبقوق، "أنه قام فتحركت الأرض، وذابت الأمم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jeremiah testified saying, “I looked and I rose, I proclaimed Your news, and my sleep was sweet.”</td>
            <td class="coptic">Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲁϥⲉⲣⲙⲉⲑⲣⲉ: ϫⲉ ⲁⲓⲛⲁⲩ ⲟⲩⲟϩ ⲁⲓⲧⲱⲛⲧ: ⲁⲓⲱϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲕⲥ̀ⲙⲏ: ⲡⲁϩⲓⲛⲓⲙ ⲁϥϩ̀ⲗⲟϫ ⲉ̀ⲧⲟⲧ.</td>
            <td class="arabic">وشهد أرمياء وقال، "أنا نظرت وقمت، وصِحْتُ بخبرك، ونومي صار لي حلواً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Also Solomon said, “The Just One will rise, who is called Truth, and the Son of the true God.”</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲉϫⲉ Ⲥⲟⲗⲟⲙⲱⲛ: ϫⲉ ⲉϥⲉ̀ⲧⲱⲛϥ ⲛ̀ϫⲉ ⲡⲓⲑ̀ⲙⲏⲓ: ⲉ̀ⲧⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲡⲓⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">وأيضاً قال سليمان، "سيقوم البار، المُسَّمى الحق، وإبن الله الحق."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Every nation that rejected Him, became lost and foolish, but those who believed in Him, lived in delight.</td>
            <td class="coptic">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϣⲱϣ ⲙ̀ⲙⲟϥ: ⲁⲩⲥⲱⲣⲉⲙ ⲁⲩⲉⲣⲥⲟϫ: ⲛⲏ ⲇⲉ ⲉ̀ⲧⲁⲩⲛⲁϩϯ ⲉ̀ⲣⲟϥ: ⲁⲩϣⲱⲡⲓ ϧⲉⲛ ⲟⲩϩ̀ⲗⲟϫ.</td>
            <td class="arabic">كل الشعوب الذين رفضوه، ضلوا وحمقوا، أما الذين آمنوا به، فصاروا في عذوبة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Moses spoke in words, “I live forever, I will scatter the enemies, forever and ever.”</td>
            <td class="coptic">Ⲙⲱⲩ̀ⲥⲏⲥ ⲁϥϫⲟⲥ ϧⲉⲛ ⲡⲉϥⲥⲁϫⲓ: ϫⲉ ϯⲱⲛϧ ⲁ̀ⲛⲟⲕ ϣⲁ ⲉ̀ⲛⲉϩ: ⲉⲓⲉ̀ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">قال موسى في كلامه، "حي أنا إلى الأبد، سأُفرق الأعداء، إلى أبد الأبد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">All these [sayings] were of old, spoken in prophecies, and the people of those generations, testified in truth.</td>
            <td class="coptic">Ⲛⲁⲓ ⲧⲏⲣⲟⲩ ⲛⲁ ϯⲡⲁⲗⲉⲁ̀: ⲁⲩϫⲱ ⲛ̀ⲛⲁⲓⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲟⲩⲟϩ ⲛⲓⲣⲉⲙⲛⲁⲓⲅⲉⲛⲉⲁ̀: ⲁⲩⲉⲣⲙⲉⲑⲣⲉ ⲁ̀ⲗⲏⲑⲓⲁ.</td>
            <td class="arabic">هذه جميعها كانت في العتيقة، ونطقت بهذه النبوات، وأهل تلك الأجيال، شهدت حقاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Foremost the Disciples, Christ the Master appeared, in their midst and said, “Do not be afraid.</td>
            <td class="coptic">Ⲝⲉⲣⲓⲧⲱⲥ ⲟⲛ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲁϥⲟⲩⲱⲛϩ ⲛⲱⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ: ⲛ̀ϫⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ⲟⲩⲟϩ ⲁϥϫⲟⲥ ⲛⲱⲟⲩ ϫⲉ ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ.</td>
            <td class="arabic">وبالأكثر التلاميذ، ظهر لهم في وسطهم، السيد المسيح، وقال لهم "لا تخافوا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">“Peace be to you, O My friends and brothers, behold I am with you, from now and to the end of time.”</td>
            <td class="coptic">Ⲟⲩϩⲓⲣⲏⲛⲏ ⲙⲁⲣⲉⲥϣⲱⲡⲓ ⲛⲱⲧⲉⲛ: ⲱ̀ ⲛⲁϣ̀ⲫⲉⲣⲓ ⲛⲉⲙ ⲛⲁⲥ̀ⲛⲏⲟⲩ: ϩⲏⲡⲡⲉ ⲁ̀ⲛⲟⲕ ϯⲭⲏ ⲛⲉⲙⲱⲧⲉⲛ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ⲡ̀ϧⲁⲉ̀ ⲛ̀ⲛⲓⲥⲏⲟⲩ.</td>
            <td class="arabic">سلام فليكن لكم، يا أصدقائي وأخوتي، هوذا أنا كائن معكم، من الآن وإلى آخر الأزمنة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Likewise Thomas, after the eight days, He bowed down to Him, when he saw the nail marks.</td>
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲟⲛ ⲡ̀ⲕⲉ Ⲑⲱⲙⲁⲥ: ⲙⲉⲛⲉⲛⲥⲁ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲛⲓⲧⲩⲡⲟⲥ: ⲛ̀ⲛⲓⲓϥⲧ ⲁϥⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">وأيضاً توما الآخر، من بعد ثمانية أيام، لما نظر إلى آثار، المسامير سجد له.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Two men were in the field, He appeared to them in another form, the guards and the soldiers, looked without stopping.</td>
            <td class="coptic">Ⲣⲱⲙⲓ ⲥ̀ⲛⲁⲩ ⲛⲁⲩⲭⲏ ϧⲉⲛ ⲧ̀ⲕⲟⲓ: ϧⲉⲛ ⲕⲉⲙⲟⲣⲫⲏ ⲁϥⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲱⲟⲩ: ⲛⲓⲕⲟⲥⲧⲱⲇⲓⲁ ⲛⲉⲙ ⲛⲓⲙⲁⲧⲟⲓ: ⲉ̀ⲧⲁϥⲛⲁⲩ ⲙ̀ⲡⲟⲩⲭⲁⲣⲱⲟⲩ.</td>
            <td class="arabic">رجلان كانا في الحقل، ظهر لهما في شكل آخر، والحراس والجنود، لما نظروا لم يسكتوا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Yea the angel in truth, spoke to the women, “He rose like He said, go inform His men.”</td>
            <td class="coptic">Ⲥⲉ ⲟⲛⲧⲱⲥ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓϩⲓⲟⲙⲓ: ϫⲉ ⲁϥⲧⲱⲛϥ ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ϧⲉⲛ ⲫⲁⲓ ⲙⲁⲧⲁⲙⲉ ⲛⲉϥⲁ̀ⲗⲱⲟⲩⲓ̀.</td>
            <td class="arabic">نعم حقاً تكلم، الملاك مع النسوة، "أنه قام كما قال، أعلِمنَ بهذا فتيانه."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Then our mouths are filled with joy, and our tongue with gladness, for Emmanuel loosened, our bitter bondage.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ⲟⲩⲟϩ ⲡⲉⲛⲗⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ⲧⲉⲛⲙⲉⲧⲃⲱⲕ ⲉⲥⲉⲛϣⲁϣⲓ: ⲁϥⲃⲱⲗⲥ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">حينئذ إمتلأ فمنا فرحاً، ولساننا تهليلاً، وعبوديتنا المرة، حلَّها عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The blessed Son of God, suffered and was not angered, He rose from the dead, on the third day.</td>
            <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟⲥ ⲫⲏⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲁϥϣⲉⲡⲙ̀ⲕⲁϩ ⲟⲩⲟϩ ⲙ̀ⲡⲉϥϫⲱⲛⲧ: ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩϣⲟⲙⲧ.</td>
            <td class="arabic">إبن الله المبارك، تألم ولم يغضب، وقام من بين الأموات، في اليوم الثالث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God the Master was crucified, is now among the rocks, and after He was buried, He appeared to the Magdalene.</td>
            <td class="coptic">Ⲫ̀ⲛⲏⲃ Ⲫ̀ⲛⲟⲩϯ ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ: ϩⲏⲡⲡⲉ ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀ϯϣ̀ⲛⲏ: ⲟⲩⲟϩ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲟⲩⲕⲟⲥϥ: ⲁϥⲟⲩⲱⲛϩ ⲉ̀Ⲙⲁⲅⲇⲁⲗⲓⲛⲏ.</td>
            <td class="arabic">السيد الإله الذي صُلب، ها هو في وسط شبكة الحكم، وبعد ما قُبِرَ، ظهر للمجدلية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy and holy, O who rose from the tomb, You are worthy of every honor, from the mouths of the saints.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲫⲏⲉ̀ⲧⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ: ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ ⲛⲁⲕ ϥ̀ⲉⲣϣⲁⲩ.</td>
            <td class="arabic">قدوس قدوس وقدوس، الذي قام من القبر، ومن أفواه القديسين، يستحق إكرام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Every bound soul, in the lower parts of Hades, You loosened with Your power, O compassionate God.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲧⲥⲱⲛϩ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ Ⲁ̀ⲙⲉⲛϯ ⲉⲧⲥⲁⲡⲉⲥⲏⲧ: ϧⲉⲛ ⲧⲉⲕϫⲟⲙ ⲁⲕⲃⲱⲗⲟⲩ ⲉ̀ⲃⲟⲗ: ⲱ̀ Ⲡⲓⲛⲟⲩϯ ⲛ̀ⲣⲉϥϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">كل الأنفس المربوطة، في الجحيم السفلي، حلَّتها بقوتك، أيها الإله الرؤوف.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Foremost we the weak, forgive us our iniquities, make worthy to say, “Glory to You alleluia.” ${cross}</td>
            <td class="coptic">Ⲱ̀ⲑⲉⲛ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲉ̀ⲗⲁⲭⲓⲥⲧⲟⲥ: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲧⲉⲛⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ. ${cross}</td>
            <td class="arabic">وبالأحرى نحن الحقيرون، إغفر لنا آثامنا، وإجعلنا مستحقين أن نقول، "المجد لك هلليلويا." ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Transfiguration
function PsaliAdamForTransfiguration(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Adam for Transfiguration">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Adam for Transfiguration
        <span class="coptic-caption">Ⲁ̀ Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ⲣⲟⲩⲣⲟ</span>
        <span class="arabic-caption">إبصالية ادام (التجلي)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The Lord reigns, let the earth rejoice, the Lord of the kingdom, is the God of Israel.</td>
            <td class="coptic">Ⲁ̀ Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ⲣⲟⲩⲣⲟ: ⲙⲁⲣⲉ ⲡ̀ⲕⲁϩⲓ ⲑⲉⲗⲏⲗ: ⲫⲁ ϯⲙⲉⲧⲟⲩⲣⲟ: Ⲫ̀ϯ ⲙ̀ⲡⲒⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">الرب قد ملك، فلتبتهج الأرض، صاحب الملكوت، هو إله إسرائيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Truly everyone, who has witnessed, to His great glory, praise and sing.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲩϩⲱⲥ: ⲉⲧⲁⲩⲉⲣⲙⲉⲑⲣⲉ: ⲉ̀ⲡⲉϥⲱ̀ⲟⲩ ⲣⲏⲧⲟⲥ: ⲟⲩⲟϩ ⲉⲩⲉⲣⲯⲁⲗⲓⲛ.</td>
            <td class="arabic">الذين، شهدوا، مجده بالحقيقة، ويرتلون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Three strong men, from the disciples, saw upon Tabor, the glory of Christ.</td>
            <td class="coptic">Ⲅ̅ (Ϣⲟⲙⲧ) ⲛ̀ⲣⲱⲙⲓ ⲉⲩϫⲟⲣ: ϧⲉⲛ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩⲛⲁⲩ ϩⲓϫⲉⲛ Ⲑⲁⲃⲱⲣ: ⲉ̀ⲡ̀ⲱ̀ⲟⲩ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">ثلاثة رجال أقوياء، في الرسل، رأوا على تابور، مجد المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David has said, through the words of his mouth, "Many great clouds, seek after Him."</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲁϥϫⲟⲥ: ϧⲉⲛ ⲡⲓⲥⲁϫⲓ ⲛ̀ⲣⲱϥ: ϫⲉ ⲟⲩϭⲏⲡⲓ ⲛⲉⲙ ⲟⲩⲅ̀ⲛⲟⲫⲟⲥ: ⲉⲩⲕⲱϯ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">داود قال، بكلام فمه، سحاب وضباب، يحيط به.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Righteousness, and goodness, and upright justice, befit His throne.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲛⲉⲙ ⲟⲩⲙⲉⲧⲭ̀ⲣⲏⲥⲧⲟⲥ: ⲛⲉⲙ ⲟⲩϩⲁⲡ ⲛ̀ⲥⲱⲟⲩⲧⲉⲛ: ⲙ̀ⲡⲉϥⲑ̀ⲣⲟⲛⲟⲥ.</td>
            <td class="arabic">براً، وصلاحاً، وحكماً مستقيماً، لعرشه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">For truly He covered, the peek of the mountain, with clouds and mist, and with storms.</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲟⲥ ⲁϥϩⲱⲃⲥ: ⲛ̀ⲧ̀ⲁ̀ⲫⲉ ⲙ̀ⲡⲓⲧⲱⲟⲩ: ϧⲉⲛ ⲟⲩϭⲏⲡⲓ ⲛⲉⲙ ⲟⲩⲭ̀ⲣⲉⲙⲧⲥ: ⲛⲉⲙ ⲟⲩⲥⲁⲣⲁⲑⲏⲟⲩ.</td>
            <td class="arabic">حقاً غطى، رأس الجبل، بسحاب ودخان، وعواصف.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">God is our refuge, and the Judge, in the glory of His Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲏⲗ ⲡⲉ ⲡⲉⲛⲙⲁⲙ̀ⲫⲱⲧ: ⲟⲩⲟϩ ⲡⲓⲢⲉϥϯϩⲁⲡ: ϧⲉⲛ ⲡ̀ⲱ̀ⲟⲩ ⲛ̀ⲧⲉ Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">الله هو ملجأنا، وهو الحاكم، بمجد أبيه، والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">God who has the power, over all authority, transfigured on Tabor, O three disciples.</td>
            <td class="coptic">Ⲑⲉⲟⲥ ⲫⲏⲉⲧϫⲟⲣ: ⲉ̀ⲛⲓⲉⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲁϥⲟⲩⲱⲛϩ ϩⲓϫⲉⲛ Ⲑⲁⲃⲱⲣ: ⲙ̀ⲡⲓϣⲟⲙⲧ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic">الله القوي، علي المتسلطين، تجلى على تابور، للثلاثة تلاميذ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Behold also, His clothes shone, whiter than snow, and brighter than lightning.</td>
            <td class="coptic">Ⲓⲥ ϩⲏⲡⲉ ⲇⲉⲟⲛ: ⲛⲉϥϩ̀ⲃⲱⲥ ⲁⲩϩⲓⲉⲃⲣⲏϫ: ⲉ̀ϩⲟⲧⲉ ⲟⲩⲭⲓⲱⲛ: ⲛⲉⲙ ⲟⲩⲥⲉⲧⲉⲃⲣⲏϫ.</td>
            <td class="arabic">ها هوذا أيضاً، ملابسه أبرقت، أكثر من الثلج، والبرق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">And He also brought, Moses the prophet, the performer of miracles, and Elijah the tishbite.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲁϥⲓ̀ⲛⲓ: ⲙ̀Ⲙⲱⲩⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲫⲏⲉⲧⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲙⲏⲓⲛⲓ: ⲛⲉⲙ Ⲏⲗⲓⲁⲥ ⲡⲓⲑⲉⲥⲃⲓⲧⲏⲥ.</td>
            <td class="arabic">وأيضاً أحضر، موسى النبي، صانع العجائب، وإيليا التسبيتي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">And the disciples, recognized what they saw, in front of them, and they witnessed to it.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁⲩⲥⲱⲟⲩⲛ: ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲟⲩⲟϩ ⲁⲩⲉⲣⲙⲉⲑⲣⲉ.</td>
            <td class="arabic">وأيضاً عرف، التلاميذ، الذين نظروهم، وشهدها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Moses said to Him, for the house of Israel, and Elijah talked to him, for Ahab and Jezebel.</td>
            <td class="coptic">Ⲙⲱⲩ̀ⲥⲏⲥ ⲁϥϫⲟⲥ ⲛⲁϥ: ⲉⲑⲃⲉ ⲡ̀ⲏⲓ ⲙ̀ⲡⲒⲥⲣⲁⲏⲗ: Ⲏⲗⲓⲁⲥ ⲁϥⲧⲁⲙⲟϥ: ⲉⲑⲃⲉ Ⲁ̀ⲭⲁⲡ ⲛⲉⲙ Ⲏⲍⲁⲃⲉⲗ.</td>
            <td class="arabic">موسى قال له، من أجل بيت إسرائيل، وإيليا أخبره، عن أخاب وإيزابل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The disciples were amazed, in their hearts, they could not observe, the Master.</td>
            <td class="coptic">Ⲛⲁⲩⲧⲱⲙⲧ ϧⲉⲛ ⲛⲟⲩϩⲏⲧ: ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲙ̀ⲡⲟⲩϣ̀ϯⲛⲁⲓⲧ: ϧⲉⲛ ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ.</td>
            <td class="arabic">كان التلاميذ، متحيرين في قلوبهم، ولم يستطيعوا، أن يتأملوا في السيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">You are above all thoughts, O voice which said, "This is My Son, hear Him."</td>
            <td class="coptic">Ⲝⲁⲡ̀ϣⲱⲓ ⲛ̀ⲛⲓⲙⲉⲩⲓ̀: ⲱ̀ ⲡⲓϧ̀ⲣⲱⲟⲩ ⲉ̀ⲧⲁⲩϫⲱϥ: ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁϣⲏⲣⲓ: ⲟⲩⲟϩ ⲥⲱⲧⲉⲙ Ⲛ̀ⲥⲱϥ.</td>
            <td class="arabic">أنت تعلو على الأقطار، أيها الصوت الذي قيل، هذا هو إبني، له إسمعوا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">A light has shone, upon the peeks of the mountains, Jesus the Merciful, the God of glory.</td>
            <td class="coptic">Ⲟⲩⲟⲩⲱⲓⲛⲓ ⲁϥϣⲁⲓ: ⲉ̀ϫⲉⲛ ϯⲁ̀ⲫⲉ ⲛ̀ⲛⲓⲧⲱⲟⲩ: Ⲓⲏ̅ⲥ̅ ⲡⲓⲢⲉϥⲛⲁⲓ: Ⲫ̀ⲧ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
            <td class="arabic">أشرق نور، على رؤوس الجبال، يسوع الرحوم، إله المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">He was manifested, in humility, and He has revealed, His kingdom.</td>
            <td class="coptic">Ⲡⲉⲧⲁϥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲡⲓⲑⲉⲃⲓⲟ: ⲁϥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">الذي ظهر، في التواضع، وأظهر، ملكوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">All the high names, of the incorporeal, said "Glory be to You, holy O God."</td>
            <td class="coptic">Ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲉⲧϭⲟⲥⲓ: ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ⲁⲩϫⲟⲥ ϫⲉ ⲇⲟⲝⲁⲥⲓ: ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">كل الأسماء العالية، التي لغير المتجسدين، قالوا المجد، لك يا رب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Adorn us, O Nathan from your mouth, for Tabor and Hermon, rejoice in you.</td>
            <td class="coptic">Ⲥⲟⲗⲥⲉⲗ ⲙ̀ⲙⲟⲛ ⲁ̀ⲛⲟⲛ: Ⲛⲁⲑⲁⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲣⲱⲕ: ϫⲉ Ⲑⲁⲃⲱⲣ ⲛⲉⲙ Ⲁⲣⲙⲟⲩⲛ: ⲉⲩⲉ̀ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲟⲕ.</td>
            <td class="arabic">زيِّنا نحن، يا ناثان من فمك، لأن تابور وحرمون، يتهللان بك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Your right hand is glorious, let Your hand be exalted, in justice and glory, Your throne is magnified.</td>
            <td class="coptic">Ⲧⲉⲕⲟⲩⲓ̀ⲛⲁⲙ ⲁⲥϭⲓⲱ̀ⲟⲩ: ⲧⲉⲕϫⲓϫ ⲙⲁⲣⲉⲥϭⲓⲥⲓ: ϧⲉⲛ ⲟⲩϩⲁⲡ ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ: ⲡⲉⲕⲑ̀ⲣⲟⲛⲟⲥ ⲁϥϭⲓⲥⲓ.</td>
            <td class="arabic">يمينك تمجدت، فلترتفع يدك، بحكم ومجد، عرشك إرتفع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">All blessing, and praise befit You, now and at all times, till the end of the ages.</td>
            <td class="coptic">Ⲩⲙⲛⲟⲗⲟⲅⲓⲁ ⲛⲓⲃⲉⲛ: ⲉⲩⲉⲣϣⲁⲩ ⲛⲁⲕ ⲛⲉⲙ ⲡⲓϩⲱⲥ: ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ϣⲁ ⲡ̀ϫⲱⲕ ⲛ̀ⲛⲓⲭ̀ⲣⲟⲛⲟⲥ.</td>
            <td class="arabic">كل بركة، تليق بك مع التسبيح، الآن وكل أوان، إلى كمال الدهر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">He who was and is, who came to us, who shall come again, to judge us.</td>
            <td class="coptic">Ⲫⲏⲉⲧϣⲟⲡ ⲫⲏⲉ̀ⲛⲁϥϣⲟⲡ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ϣⲁⲣⲟⲛ: ⲡⲁⲗⲓⲛ ⲟⲛ ϥ̀ⲛⲏⲟⲩ ⲛ̀ⲕⲉⲥⲟⲡ: ⲉ̀ϯϩⲁⲡ ⲉ̀ⲣⲟⲛ.</td>
            <td class="arabic">الكائن الذي كان، الذي أتى إلينا، وأيضاً يأتي ثانية، ليُحاكمنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy and holy, holy is the Messiah, on the mouths of the saints, Moses and Elijah.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲭ̀ⲟⲩⲁⲃ Ⲙⲁⲥⲓⲁⲥ: ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ⲛⲏⲉ̅ⲑ̅ⲩ̅: Ⲙⲱⲩ̀ⲥⲏⲥ ⲛⲉⲙ Ⲏⲗⲓⲁⲥ.</td>
            <td class="arabic">قدوس قدوس، قدوس ماسياس، في أفواه القديسين، موسى وإيليا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The rest of our days, complete in peace, O God of glory, and the King of peace.</td>
            <td class="coptic">Ⲯⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲉ̀ϩⲟⲟⲩ: ϫⲱⲕⲟⲩ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ: Ⲫ̀ϯ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ.</td>
            <td class="arabic">بقية أيامنا، أكملوها بسلام، يا إله المجد، يا ملك السلام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Be patient O my Master, with Your servant, count him with Your sheep, that were accepted to You. ${cross}</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛ̀ϩⲏⲧ ⲡⲁⲚⲏⲃ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲃⲱⲕ: ⲟⲡϥ ⲛⲉⲙ ⲛⲉⲕϩⲓⲏⲃ: ⲉ̀ⲧⲁⲕϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ. ${cross}</td>
            <td class="arabic">تأن يا سيدي، على عبدك، أحسبه مع خرافك، التي قبلتها إليك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function PsaliWatosForTransfiguration(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for Transfiguration">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for Transfiguration
        <span class="coptic-caption">Ⲁⲓϥⲁⲓ ⲛ̀ⲛⲁⲃⲁⲗ ⲉ̀ϫⲉⲛ ⲛⲓⲧⲱⲟⲩ</span>
        <span class="arabic-caption">إبصالية واطس (التجلي)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I lifted up my eyes, to the mountains, to seek help today, from the God of authority.</td>
            <td class="coptic">Ⲁⲓϥⲁⲓ ⲛ̀ⲛⲁⲃⲁⲗ ⲉ̀ϫⲉⲛ ⲛⲓⲧⲱⲟⲩ: ⲉ̀ⲕⲱϯ ⲛ̀ⲥⲁϯⲃⲟⲏ̀ⲑⲓⲁ: ⲙ̀ⲫⲟⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ: ⲫⲁ ϯⲉⲝⲟⲩⲥⲓⲁ.</td>
            <td class="arabic">رفعت عيني إلى الجبال، باحثاً عن المعونة، اليوم من عند، صاحب السلطان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone is amazed, and their hearts wonder, when they see His works, and His great mercy.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲩⲉⲣϣ̀ⲫⲏⲣⲓ: ⲟⲩⲟϩ ⲉⲩⲧⲟⲙⲧ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ: ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀: ⲛⲉⲙ ⲧⲉϥⲛⲓϣϯ ⲙ̀ⲙⲉⲑⲛⲁⲏⲧ.</td>
            <td class="arabic">الكل يتعجبون، ويندهشون بقلوبهم، عند ما رأوا أعماله، وعِظُم رحمته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For God who has the power, over all authority, was transfigured upon Tabor, before His disciples.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ Ⲫ̀ϯ ⲫⲏⲉⲧϫⲟⲣ: ⲉ̀ϫⲉⲛ ⲛⲓⲉⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲁϥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ϩⲓϫⲉⲛ Ⲑⲁⲃⲱⲣ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic">لأن الله القوي، على المتسلطين، تجلى على طابور، أمام تلاميذه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">King David the psalmist, spoke and began saying, "His lightnings enlightened, all the world."</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲟⲩⲟϩ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ⲁϥⲥⲁϫⲓ ⲟⲩⲟϩ ⲁϥⲉⲣϩⲏⲧⲥ: ϫⲉ ⲛⲉϥⲥⲉⲧⲉⲃⲣⲏϫ ⲁⲩⲉⲣⲟⲩⲱⲓⲛⲓ: ⲉ̀ϯⲟⲓⲕⲟⲙⲉⲛⲏ ⲧⲏⲣⲥ.</td>
            <td class="arabic">داود الملك والمرتل، تكلم وإبتدأ قائلاً، بروقه أضاءت، على المسكونة كلها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He said with his voice, "The firmament was ripped asunder, and the mountains were shaken, and hills were moved."</td>
            <td class="coptic">Ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϧⲉⲛ ⲡⲉϥϧ̀ⲣⲱⲟⲩ: ϫⲉ ⲁϥⲟⲩⲱⲛϩ ⲛ̀ϫⲉ ⲡⲓⲧⲁϫⲣⲟ: ⲟⲩⲟϩ ⲁⲩⲙⲟⲛⲙⲉⲛ ⲛ̀ϫⲉ ⲡⲓⲧⲱⲟⲩ: ⲟⲩⲟϩ ⲁⲩⲕⲓⲙ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟⲩ.</td>
            <td class="arabic">قائلاً بصوته، انفتح الجلد، وتزلزلت الجبال، وتحركت التلال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">For truly Habakkuk the prophet, proclaimed and said, "The mountains were scattered asunder, and the nations were dissolved."</td>
            <td class="coptic">Ⲍⲉ ⲟⲛⲧⲟⲥ Ⲁⲃⲕⲟⲩⲕ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲛⲓⲧⲱⲟⲩ ⲁⲩⲉⲣϧⲟⲙϧⲉⲙ: ⲁⲩⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ϩⲁⲛⲉⲑⲛⲟⲥ.</td>
            <td class="arabic">حقاً حبقوق النبي، صرخ قائلاً، أن الجبال إنسحقت، والأمم إنحلت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Isaiah as it befits him, said through his voice, "The house of God will be, on the peeks of the mountains."</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲕⲁⲧⲁ ⲉⲣⲡ̀ⲣⲉⲡⲓ: ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ ϧⲉⲛ ⲡⲉϥϧ̀ⲣⲱⲟⲩ: ϫⲉ ⲡ̀ⲏⲓ ⲙ̀Ⲫ̀ϯ ϥ̀ⲛⲁϣⲱⲡⲓ: ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲓⲧⲱⲟⲩ.</td>
            <td class="arabic">أشعياء كما يليق، قال بصوته، أن بيت الله سيكون، على رؤوس الجبال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Tabor and Hermon together, rejoice in Your name, O Lord God who exists, as said by Nathan.</td>
            <td class="coptic">Ⲑⲁⲃⲱⲣ ⲛⲉⲙ Ⲁⲣⲙⲟⲩⲛ ⲉⲩⲥⲟⲡ: ⲉⲩⲑⲉⲗⲏⲗ ϧⲉⲛ ⲡⲉⲕⲣⲁⲛ: Ⲡ̀ⲟ̅ⲥ̅ Ⲫ̀ϯ ⲫⲏⲈ̀ⲧϣⲟⲡ: ⲡⲁⲓⲣⲏϯ ⲁϥϫⲟⲥ ⲛ̀ϫⲉ Ⲛⲁⲑⲁⲛ.</td>
            <td class="arabic">تابور وحرمون معاً، بإسمك يتهللان، أيها الرب الإله الكائن، هكذا يقول ناثان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ the King of glory, took Peter and James, He ascended up the mountain, with John the celibate.</td>
            <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲡ̀ⲱ̀ⲟⲩ: ⲁϥϭⲓ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ: ⲁϥϣⲉⲛⲁϥ ⲥⲁⲡ̀ϣⲱⲓ ⲙ̀ⲡⲓⲧⲱⲟⲩ: ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">يسوع المسيح ملك المجد، أخذ بطرس ويعقوب، صعد على الجبل، مع يوحنا البتول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Likewise He also brought to them, Moses and Elijah, and a cloud covered them, they spoke with the Messiah.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ⲟⲛ ⲁϥⲓ̀ⲛⲓ ⲛⲱⲟⲩ: ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ ⲛⲉⲙ Ⲏⲗⲓⲁⲥ: ⲟⲩⲟϩ ⲟⲩϭⲏⲡⲓ ⲁⲥϩⲱⲃⲥ ⲉ̀ⲣⲱⲟⲩ: ⲁⲩⲉⲣϩⲏⲧⲥ ⲛ̀ⲥⲁϫⲓ ⲛⲉⲙ Ⲙⲁⲥⲓⲁⲥ.</td>
            <td class="arabic">وأيضاً أحضر لهم، موسى وإيليا، وسحابه ظللتهم، وابتدأ يتكلمان مع ماسياس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">And also they witnessed, that they saw His clothes, brighter than sun, His face shined.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲅⲁⲣ ⲁⲩⲉⲣⲙⲉⲑⲣⲉ: ϫⲉ ⲁⲩⲛⲁⲩ ⲉ̀ⲛⲉϥϩ̀ⲃⲱⲥ: ⲉⲧⲁⲩϩⲓⲁⲕⲧⲓⲛ ⲉ̀ϩⲟⲧⲉ ⲫ̀ⲣⲏ: ⲁ̀ⲡⲉϥϩⲟ ⲟⲓ ⲛ̀ⲗⲁⲙⲡ̀ⲣⲟⲥ.</td>
            <td class="arabic">وأيضاً شهدوا، لأنهم رأوا ملابسه، أبرقت أكثر من الشمس، ووجهه مضئ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">And after these things the disciples, stood before the Lord, when they saw the prophets, they said in haste.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲁ̀ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅: ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲟⲩⲟϩ ⲛⲁⲩⲥⲁϫⲓ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϣ̀ⲣⲱⲓⲥ.</td>
            <td class="arabic">بعد ذلك وقف تلاميذه، أمام الرب، الذين رأوا النبيين، يتكلمان بيقظ عظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">It is good for us O Master, to put three tabernacles in this place, one for You and one for Moses, and one for Elijah.</td>
            <td class="coptic">Ⲛⲁⲛⲉⲥ ⲛⲁⲛ ⲱ̀ ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ: ⲉ̀ϭⲓ ⲙ̀ⲡⲁⲓⲙⲁ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲥ̀ⲕⲩⲛⲏ: ⲟⲩⲓ̀ ⲛⲁⲕ ⲟⲩⲓ̀ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ: ⲟⲩⲓ̀ ⲛ̀Ⲏⲗⲓⲁⲥ ϧⲉⲛ ⲟⲩⲧⲓⲙⲏ.</td>
            <td class="arabic">حسناً لنا أيها السيد، أن نأخذ في هذا المكان ثلاث مظال، واحدة لك ولموسى واحدة، ولإيليا واحدة بكرامة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Therefore they heard first, the word concerning Him, "This is My beloved Son, in whom I am well pleased."</td>
            <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ϧⲉⲛ ⲡⲓϩⲟⲩⲓⲧ: ⲁⲩⲥⲱⲧⲉⲙ ⲉ̀ⲡⲓⲥⲁϫⲓ ⲉⲑⲃⲏⲧϥ: ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁϣⲏⲣⲓ Ⲡⲁⲙⲉⲛⲣⲓⲧ: ⲫⲏⲉⲧⲁⲓϯⲙⲁϯ ⲛ̀ϧⲏⲧϥ.</td>
            <td class="arabic">فجأة سمعوا أولاً، الكلمة من أجله، هذا هو إبني الحبيب، الذي به سررت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Glory and honor to You, in Your hidden mysteries, for You appeared in Your humility, for You are God the Judge.</td>
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛⲁⲕ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ϧⲉⲛ ⲛⲉⲕⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲩϩⲏⲡ: ϫⲉ ⲁⲕⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲕⲑⲉⲃⲓⲟ: ⲟⲩⲟϩ Ⲛ̀ⲑⲟⲕ Ⲫ̀ϯ ⲡⲓⲢⲉϥϯϩⲁⲡ.</td>
            <td class="arabic">مجداً وإكراماً لك، في أسرارك الخفية، لأنك ظهرت بتواضعك، وأنت الله الحاكم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Lord God the Eternal, of the living and the dead, the Creator of the ages, is Jesus Christ the blessed One.</td>
            <td class="coptic">Ⲡ̀ⲟ̅ⲥ̅ Ⲫ̀ϯ ⲡⲓϢⲁⲉ̀ⲛⲉϩ: ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ: ⲡⲓⲢⲉϥⲑⲁⲙⲓⲟ ⲛ̀ⲛⲓⲉ̀ⲛⲉϩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲫⲏⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.</td>
            <td class="arabic">الرب الإله الأبدي، على الأحياء والأموات، خالق الدهور، يسوع المسيح المبارك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Truly the disciples, saw Him and prostrated, and they worshiped Him, for He is the true Judge.</td>
            <td class="coptic">Ⲣⲏⲧⲟⲥ ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲁⲩϩⲓⲧⲟⲩ ⲁⲩⲟⲩⲱϣⲧ: ⲙ̀ⲙⲟϥ ϫⲉ Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲢⲉϥϯϩⲁⲡ.</td>
            <td class="arabic">حقاً لما رآه، التلاميذ، خروا وسجدوا له، قائلين أنك هو الحاكم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Yes indeed He ordered them, not to speak of the vision, and afterward He filled them, with all grace.</td>
            <td class="coptic">Ⲥⲉ ⲟⲛⲧⲟⲥ ⲁϥϩⲟⲛϩⲉⲛ ⲉ̀ⲧⲟⲧⲟⲩ: ⲉ̀ϣ̀ⲧⲉⲙⲥⲁϫⲓ ⲙ̀ⲡⲓϩⲟⲣⲁⲙⲁ: ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲟⲛ ⲁϥⲙⲁϩⲟⲩ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲓⲭⲁⲣⲓⲥⲙⲁ.</td>
            <td class="arabic">حقاً أمرهم، أن لا يتكلموا، بالرؤيا، وبعد ذلك ملأهم بالنعم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Then He opened their minds, to know that He is the only-begotten, He came and became the Son of man, He will judge in retribution.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲁϥⲟⲩⲱⲛ ⲛ̀ⲛⲟⲩⲉ̀ⲙⲓ: ϫⲉ Ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲉϥⲛⲁϯϩⲁⲡ ϧⲉⲛ ϯⲕ̀ⲣⲓⲥⲓⲥ.</td>
            <td class="arabic">حينئذ فتح إداركهم، أنه هو الوحيد الجنس، جاء وصار إبن بشر، وسيحكم في الدينونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Son of God who is full of glory, revealed His kingdom, for He is the God of glory, and the Lord the Creator.</td>
            <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲫⲏⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲁϥⲟⲩⲱⲛϩ ⲛ̀ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ: ϫⲉ Ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ϯ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: Ⲡ̀ⲟ̅ⲥ̅ ⲡⲓⲢⲉϥⲑⲁⲙⲓⲟ.</td>
            <td class="arabic">إبن الله المملوء مجداً، أظهر ملكوته، لأنه هو إله المجد، والرب الخالق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Moses and Elijah, were worthy to see, the unseen ones, before all ages.</td>
            <td class="coptic">Ⲫⲏⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲅⲉⲛⲉⲁ̀: ⲁⲩⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲛ̀ϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲛⲉⲙ Ⲏⲗⲓⲁⲥ.</td>
            <td class="arabic">الغير المنظور، قبل الدهور، إستحق أن يراه، موسى وإيليا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy holy holy, is Jesus Christ the Teacher, through the mouth of Moses the saint, and Elijah the Tishbite.</td>
            <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲦⲉⲭⲛⲓⲧⲏⲥ: ϧⲉⲛ ⲣⲱϥ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲉⲑⲟⲩⲁⲃ: ⲛⲉⲙ Ⲏⲗⲓⲁⲥ ⲡⲓⲑⲉⲥⲃⲓⲧⲏⲥ.</td>
            <td class="arabic">قدوس قدوس قدوس، يسوع المسيح المُعلِم، لفم موسى القديس، وإيليا التسبيتي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">The rest of Your people, in every place, guard them O good One, both now and at all times.</td>
            <td class="coptic">Ⲯⲉⲡⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ⲱ̀ ⲡⲓⲀ̀ⲅⲁⲑⲟⲥ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">بقية شعبك، في كل مكان، إحفظها أيها الصالح، من الآن وكل أوان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O who appeared to His disciples, upon Mount Tabor, grant me a watchful mind, and save me from temptations. ${cross}</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉⲧⲁϥⲟⲩⲱⲛϩ ⲛ̀ⲛⲁϥⲙⲁⲑⲏⲧⲏⲥ: ϩⲓϫⲉⲛ ⲡⲓⲧⲱⲟⲩ ⲛ̀Ⲑⲁⲃⲱⲣ: ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲛⲟⲩⲥ ⲉϥⲣⲱⲓⲥ: ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ. ${cross}</td>
            <td class="arabic">يا الذي تجلى لتلاميذه، على جبل تابور، إمنحني عقلاً ساهراً، نجني من التجارب. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

// Wedding of Cana of Galilee
  /// Add Adam psali
function PsaliWatosForTheWeddingAtCanaOfGalilee(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Psali Watos for the Wedding at Cana of Galilee">
    
    <caption id="caption_table_${tableNumber}" class="caption">Psali Watos for the Wedding at Cana of Galilee
        <span class="coptic-caption">Ⲁⲓⲱϣ ⲛ̀ⲧⲁⲥ̀ⲙⲏ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ</span>
        <span class="arabic-caption">إبصالية واطس (عرس قانا الجليل)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I cried with voice to You, entreating with all my heart, give comfort to Your servant, and save the son handmaiden.</td>
            <td class="coptic">Ⲁⲓⲱϣ ⲛ̀ⲧⲁⲥ̀ⲙⲏ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ: ϧⲉⲛ ⲡⲁϩⲏⲧ ⲧⲏⲣϥ ⲁⲓⲕⲱϯ ⲛ̀ⲥⲱⲕ: ⲙⲁⲡ̀ⲁ̀ⲙⲁϩⲓ ⲙ̀ⲡⲉⲕⲃⲱⲕ: ⲛⲟϩⲉⲙ ⲡ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉⲕⲃⲱⲕⲓ.</td>
            <td class="arabic">صرخت بصوتي إليك ومن كل قلبي طلبتك أعط عزاً لعبدك وخلص ابن أمتـَك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone looks up to You, O lover of mankind, and also all the animals, for You give them their food.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ: ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲱ̀ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲉ̀ⲧⲓ ⲇⲉ ⲛⲉⲙ ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀: ϫⲉ ⲛ̀ⲑⲟⲕ ⲉⲑⲛⲁϯⲛ̀ⲧⲟⲩ ϧ̀ⲣⲉⲛⲱⲟⲩ.</td>
            <td class="arabic">كل البشرية تتطلع إليك يا محب البشر وكذلك الحيوانات لأنك أنت الذي تعطيهم طعامهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For You are our hope, on Judgment day, our helper in our tribulations, that have hit us.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ ⲡⲉⲧⲉⲛϩⲉⲗⲡⲓⲥ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲕ̀ⲣⲓⲥⲓⲥ: ⲡⲉⲛⲃⲟⲏ̀ⲑⲟⲥ ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲩⲯⲓⲥ: ⲉ̀ⲧⲁⲩϫⲉⲙⲧⲉⲛ ⲉ̀ⲙⲁϣⲱ.</td>
            <td class="arabic">لأنك أنت هو رجاؤنا في يوم الدينونة معيننا في شدائدنا التي أصابتنا جداً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">O Master Jesus Christ, the One in truth, with Your Good Father, and the Spirit the Paraclete.</td>
            <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡⲓⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲁ̀ⲗⲏⲑⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲡ̅ⲛ̅ⲁ̅ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ.</td>
            <td class="arabic">أيها السيد يسوع المسيح المساوي بالحقيقـة مع أبيك الصالح والروح المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The heavens witness, to His wonders and powers, praise the Lord with a new song, praise the Lord all the earth.</td>
            <td class="coptic">Ⲉⲩⲟⲩⲱⲛϩ ⲛ̀ⲛⲉϥϣ̀ⲫⲏⲣⲓ: ⲛ̀ϫⲉ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲧⲉϥⲙⲉⲧϫⲱⲣⲓ: ϩⲱⲥ ⲉ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ϩⲱⲥ ⲉ̀Ⲡⲟ̅ⲥ̅ ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ.</td>
            <td class="arabic">السموات تعترف بعجائبه وقدرته سبحوا الرب تسبحة جديدة سبحوا الرب يا كل الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Six jars of water, You have changed into chosen wine, with great glory, in Cana of Galilee.</td>
            <td class="coptic">Ⲥⲟⲟⲩ (ⲋ) ⲛ̀ϩⲩⲇⲣⲓⲁ̀ ⲙ̀ⲙⲱⲟⲩ: ⲟⲩⲏⲣⲡ ⲉⲧⲥⲱⲧⲡ ⲁⲕⲟⲩⲱ̀ⲧⲉⲃ ⲙ̀ⲙⲱⲟⲩ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲱ̀ⲟⲩ: ϧⲉⲛ Ⲕⲁⲛⲁ ⲛ̀ⲧⲉ ϯⲄⲁⲗⲓⲗⲉⲁ̀.</td>
            <td class="arabic">ستة أجران ماء حولتها خمراً مختاراً بعظم مجدك في قانا الجليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">For many are Your hosts, that You have made with Your power, for You have heard the whining of, those that are chained.</td>
            <td class="coptic">Ⲍⲉⲟϣ ⲅⲁⲣ ⲛⲉ ⲛⲓϫⲟⲙ: ⲛⲏⲉ̀ⲧⲁⲕⲁⲓⲧⲟⲩ ϧⲉⲛ ⲧⲉⲕϫⲟⲙ: ϫⲉ ⲁ̀ⲕⲥⲱⲧⲉⲙ ⲉ̀ⲡⲓϥⲓⲁ̀ϩⲟⲙ: ⲛ̀ⲧⲉ ⲛⲏⲉⲧϩⲱⲟⲩⲓ̀ ⲙ̀ⲡⲉⲇⲏⲥ.</td>
            <td class="arabic">لأنها كثيرة هي القوات التي صنعتها بقوتك لأنك سمعت تنهد المطروحين في القيود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Isaiah and Elijah, Moses and Jeremiah, have called You the Messiah, which means the Christ.</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲛⲉⲙ Ⲏ̀ⲗⲓⲁⲥ: ⲛⲉⲙ Ⲙⲱⲩ̀ⲥⲏⲥ ⲛⲉⲙ Ⲓⲉⲣⲉⲙⲓⲁⲥ: ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟⲕ ϫⲉ Ⲙⲁⲥⲓⲁⲥ: ⲫⲏⲉ̀ϣⲁⲩ ⲟⲩⲁϩ ⲙⲉϥϫⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">أشعياء وإيليـا وموسي وأرميا دعوك ماسيا الذي تفسيره المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Gather now all you people, the sons of the Orthodox, to praise Christ, the Son of God in truth.</td>
            <td class="coptic">Ⲑⲱⲟⲩϯ ⲧⲏⲣⲟⲩ ⲱ̀ ⲛⲓⲗⲁⲟⲥ: ⲛⲓϣⲏⲣⲓ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">اجتمعوا يا جميع الشعوب أبناء الأرثوذكسيـين لنسبح المسيح أبن اللـه بالحقيقـة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Since the ages and forever, You are the King of the ages, be with us till the end of days, for Yours is the glory.</td>
            <td class="coptic">Ⲓⲥϫⲉⲛ ⲡ̀ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ: ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ: ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁⲕ.</td>
            <td class="arabic">منذ الدهور وإلي الأبد أنت هو ملك الدهور كن معنا إلي الآباد لأن بك يليق المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">According to Your mercy have mercy on me, with Your knowledge teach me, have mercy on me O God and have mercy, for my soul have entreated You.</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲡⲉⲕⲛⲁⲓ Ⲡⲟ̅ⲥ̅ ⲛⲁⲓ ⲛⲏⲓ: ϧⲉⲛ ⲡⲉⲕⲉⲙⲓ ⲙⲁⲥ̀ⲃⲱⲛⲏⲓ: ⲛⲁⲓ ⲛⲏⲓ Ⲫϯ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲏⲓ: ϫⲉ ⲁⲥⲭⲁ ϩ̀ⲑⲏⲥ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ⲧⲁⲯⲩⲭⲏ.</td>
            <td class="arabic">كرحمتك يا رب ارحمني وبمعرفتك علمني ارحمني يا اللـه ثم ارحمني لأن نفسي التجأت إليك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">All the peoples speak of, Your great humbleness, for Your commandments, and are sweater than honey.</td>
            <td class="coptic">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲉⲩⲉⲣⲟⲩⲱ̀: ϧⲉⲛ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲑⲉⲃⲓⲟ̀: ⲥⲉϩⲟⲗϫ ϩ̀ⲟⲧⲉ ⲡⲓⲉ̀ⲃⲓⲱ̀: ⲛⲉⲙ ⲡⲓⲛⲏⲛⲓ ⲛ̀ϫⲉ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ.</td>
            <td class="arabic">كل الشعوب تحدث بتواضعك العظيم لأن وصاياك أحلي من العسل والشهـد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Let my heart rejoice by Your name, O merciful for You are, the God of compassion, and many are Your mercies O righteous One.</td>
            <td class="coptic">Ⲙⲁⲣⲉϥⲟⲩⲛⲟϥ ⲛ̀ϫⲉ ⲡⲁϩⲏⲧ: ϧⲁⲧ̀ϩⲏ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲱ̀ ⲡⲓⲛⲁⲏⲧ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲣⲉϥϣⲉⲛϩⲏⲧ: ⲛⲁϣⲉ ⲡⲉⲕⲛⲁⲓ ⲱ̀ⲡⲓⲑ̀ⲙⲏⲓ.</td>
            <td class="arabic">فليفرح قلبي باسمك أيها الرحوم لأنك إله متحنن وكثيرة هي رحمتك أيها البار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">All the nations that You have made, worship Your glory, O my Lord Jesus comfort them, for You are our helper.</td>
            <td class="coptic">Ⲛⲏⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ ⲉ̀ⲧⲁⲕⲑⲁⲙⲓⲱ̀ⲟⲩ: ⲉⲩⲉ̀ⲟⲩⲱϣⲧ ⲛⲁϩⲣⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ: Ⲡⲁⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ⲙⲁⲛⲟⲙϯ ⲛⲱⲟⲩ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲉⲛⲃⲟⲏ̀ⲑⲟⲥ.</td>
            <td class="arabic">كل الأمم التي صنعتها تسجد أمام مجدك يا ربي يسوع عـزَّهم لأنك عوننا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Blessed are You O Jesus Christ, with Your Good Father, and the Spirit the Paraclete, that is One with you.</td>
            <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲡ̅ⲛ̅ⲁ̅ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ: ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙⲁⲕ.</td>
            <td class="arabic">تباركت يا يسوع المسيح مع أبيك الصالح والروح المعزي المساوي معك .</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">For Yours is the power, the many glorifications, let us say Amen Alleluia, for glory of due to our Lord.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲉⲥⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁⲕ ⲛ̀ϫⲉ ϯⲝⲟⲩⲥⲓⲁ̀: ⲛⲉⲙ ϩⲁⲛⲙⲏϣ ⲛ̀ⲇⲟⲝⲟⲗⲟⲅⲓⲁ̀: ⲙⲁⲣⲉⲛϫⲟⲥ ϫⲉ ⲁ̀ⲙⲏⲛ ⲁ̅ⲗ̅: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ.</td>
            <td class="arabic">ويليق بك السلطان والتماجيد الكثيرة فلنقـل آمين هلليلويا لأن المجد لإلهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Give salvation to Your people, and Your church, and bless Your inheritance, and shepherd them until the end.</td>
            <td class="coptic">Ⲡⲉⲕⲗⲁⲟⲥ ⲛⲉⲙ ⲧⲉⲕⲉⲕⲕⲗⲏⲥⲓⲁ̀: ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲥⲱⲧⲏⲣⲓⲁ̀: ⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀: ⲟⲩⲟϩ ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟⲩ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ̀.</td>
            <td class="arabic">أعطِ خلاصاً لشعبك وكنيستك بارك ميراثك وأرعهم إلي الإنقضاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hear us and keep us, bless us and have compassion on us, overshadow us with, the shadow of Your wings.</td>
            <td class="coptic">(Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ ⲧⲏⲣⲉⲛ ⲡⲉⲛⲛⲏⲃ: ⲉ̀ⲃⲟⲗϩⲁ ⲛⲓⲙⲉⲩⲓ̀ ⲧⲏⲣⲟⲩ ⲉⲧϩⲱⲟⲩ ⲉⲧϩⲏⲡ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲡⲉⲛϩⲓⲏⲃ: ⲛ̀Ⲗⲟⲅⲟⲥ ⲛ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫⲓⲱⲧ.)</td>
            <td class="arabic">أسمعنا واحفزنا باركنا وترأف علينا وظللنا تحت ستر جناحيك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We ask of Your kindness, O the only-begotten Son, for we are weak, give us live through Your mercy.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲉⲕⲉⲣϧⲏⲓⲃⲓ ̀ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ϧⲁ ϯⲥ̀ⲕⲉⲡⲏ ⲛ̀ⲧⲉ ⲛⲉⲕⲧⲉⲛϩ.</td>
            <td class="arabic">نطلب من لطفك أيها الإبن الوحيد الجنس لأننا ضعفاء أحينا من أجل رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">O Son of God, Jesus Christ have mercy upon, Your people and my poor self, for I am poor and weak.</td>
            <td class="coptic">Ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲉ̀ⲡⲓⲕⲏⲥ: ⲱ̀ ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ϫⲉ ⲁ̀ⲛⲟⲛ ⲉⲛⲟⲓ ⲛ̀ⲁⲥⲑⲉⲛⲏⲥ: ⲙⲁⲧⲁⲛϧⲟⲛ ⲉⲑⲃⲉ ⲡⲉⲕⲛⲁⲓ.</td>
            <td class="arabic">يا ابن اللـه يسوع المسيح اصنع رحمة مع شعبك وحقارتي لأني مسكين وضعيف.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Deliver us O Lord by Your name, hear us and have mercy on us, comfort us by Your will, and those who slept remember them.</td>
            <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲁ̀ⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲡⲉⲕⲗⲁⲟⲥ: ⲛⲉⲙ ⲧⲁⲙⲉⲧⲉ̀ⲗⲁⲭⲓⲥⲧⲟⲥ: ϫⲉ ⲁ̀ⲛⲟⲕ ⲟⲩϩⲏⲕⲓ ⲟⲩⲟϩ ⲟⲩϫⲱⲃ.</td>
            <td class="arabic">نجنا يا اللـه باسمك وأسمعنا وأرحمنا وعزنا بإرادتك والذين رقدوا اذكرهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Forgive me for I am a sinner, and teach me Your ways, attend O Lord to my tears, and the sick heal them.</td>
            <td class="coptic">Ⲫϯ ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲡⲉⲕⲣⲁⲛ: ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ϧⲉⲛ ⲡⲉⲕⲟⲩⲱϣ ⲙⲁⲛⲟⲙϯ ⲛⲁⲛ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ ⲁ̀ⲣⲓⲡⲟⲩⲙⲉⲩⲓ̀.</td>
            <td class="arabic">أغفر لي فإني خاطئ وعلمني طرقك أنصت يا اللـه إلي دموعي والمرضي اشفهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Savior of the world, Jesus the King of peace, I praise You at all times, and at all times praise Your holy name.</td>
            <td class="coptic">Ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ϫⲉ ⲁ̀ⲛⲟⲕ ⲟⲩⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙⲁⲥ̀ⲃⲱⲛⲏⲓ ⲉ̀ⲛⲉⲕⲙⲓⲧⲱⲟⲩⲓ̀: ϭⲓ ⲥ̀ⲙⲏ Ⲫϯ ⲉ̀ⲛⲁⲉⲣⲙⲱⲟⲩⲓ̀: ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic">يا مخلص المسكونة يسوع ملك السلام أباركك دائماً ودائماً أبارك اسمك القدوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O King of all the kings, O great Shepherd, O name full of Glory, keep the leaders (kings) of the earth.</td>
            <td class="coptic">Ⲯⲱⲧⲏⲣ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ: Ⲓⲏⲥ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ: ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲙ̀ⲙⲏⲛⲓ: ⲙ̀ⲙⲏⲛⲓ ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">يا ملك الملوك أيها الراعي العظيم أيها الاسم المملوء مجداً احفظ رؤساء (ملوك) الأرض.</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="coptic">Ⲱ̀ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲙ̀ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲱ̀ ⲡⲓⲣⲁⲛ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲛⲓⲟⲩⲣⲱⲟⲩ (ⲛⲓⲁⲣⲭⲏ) ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ. ${cross}</td>
        </tr>
        
        </tbody>
</table>`;
 return html;
}

/* Other Occasions */







export { getPsali }