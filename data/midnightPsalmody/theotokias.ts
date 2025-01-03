import { cross } from "../repeatedPrayers"
import { getKiahkPraiseHtml } from "./kiahkPraises"

// Function to get the gospel response based on the current seasons and table number
function getTheotokia(basetableNumber, settings) {
    const theotokiasMap = {
        'Sunday': TheSundayTheotokia_Adam,
        'Monday': TheMondayTheotokia_Adam,
        'Tuesday': TheTuesdayTheotokia_Adam,
        'Wednesday': TheWednesdayTheotokia_Watos,
        'Thursday': TheThursdayTheotokia_Watos,
        'Friday': TheFridayTheotokia_Watos, 
        'Saturday': TheSaturdayTheotokia_Watos,   
    };

    const selectedDateProperties = settings?.selectedDateProperties;
    const aktonkAki = selectedDateProperties.aktonkAki;
    const adam = selectedDateProperties.adamOrWatos === 'adam';
    const seasons = selectedDateProperties.copticSeason;
    const kiahk = seasons.includes("Kiahk") ? true : false;
    const dayOfWeek = selectedDateProperties.dayOfWeekIndex;
    
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = weekDays[dayOfWeek];
    let htmlOutput = '';   
    if (day === 'Sunday') {
        htmlOutput = TheSundayTheotokia_Adam(basetableNumber, settings);
    } else {
        const getTheotokiaFunction = theotokiasMap[day];

        if (typeof getTheotokiaFunction !== 'function') {
            return ``;
        }

        const theotokiaIntro= adam ? AdamTheotokiaIntro(basetableNumber,aktonkAki) : WatosTheotokiaIntro(basetableNumber);
        const theotokia = getTheotokiaFunction(basetableNumber + 1);
        const defnar = adam ? DifnarIntroduction_Adam(basetableNumber + 5) : DifnarIntroduction_Watos(basetableNumber + 5);


        // Call the function and generate the HTML
        htmlOutput = theotokiaIntro + theotokia + defnar;
    }
    // Return the concatenated HTML or a fallback message if no responses were found
    return htmlOutput || `<p>No Theotokia response available for ${day}</p>`;
        
}

function getWeekdaySundayTheotokia(tableNumber,settings) {
    const seasons = settings.selectedDateProperties.copticSeason;

    const kiahk = seasons.includes("Kiahk") ? true : false;
    let htmlOutput = '';

    htmlOutput += SundayTheotokia7ShereNeMaria(tableNumber);
    htmlOutput += SundayTheotokia8Semoti(tableNumber + 0.2);
    htmlOutput += kiahk ? getKiahkPraiseHtml("seventhExplanation" , tableNumber + 0.3) : '';
    htmlOutput += kiahk ? getKiahkPraiseHtml("praiseOnShereNeMaria" , tableNumber + 0.4) : '';
    htmlOutput += SundayTheotokia9ShashfEnsop(tableNumber + 0.5);
    htmlOutput += kiahk ? getKiahkPraiseHtml("oMARY" , tableNumber + 0.6) : '';
    htmlOutput += SundayTheotokia10Avmoti(tableNumber + 0.7);
    htmlOutput += kiahk ? getKiahkPraiseHtml("rashiOMaria" , tableNumber + 0.8) : '';
    htmlOutput += kiahk ? getKiahkPraiseHtml("iPraiseTheVirgin" , tableNumber + 0.9) : '';

    return htmlOutput;
}


function AdamTheotokiaIntro(tableNumber, aktonkAki) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Intro of the Theotokia">
    
    <caption id="caption_table_${tableNumber}" class="caption">Introduction of the Adam Theotokia
        <span class="coptic-caption">Ⲗⲟⲓⲡⲟⲛ ⲁⲛϣⲁⲛⲑⲱⲟⲩϯ</span>
        <span class="arabic-caption">مقدمة الثيؤطوكية الادام</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">And whenever we, gather for prayer, let us bless the name, of my Lord Jesus.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁⲛϣⲁⲛⲑⲱⲟⲩϯ: ⲉ̀ϯⲡ̀ⲣⲟⲥⲉⲩⲭⲏ: ⲙⲁⲣⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲓⲣⲁⲛ: ⲛ̀ⲧⲉ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">وأيضاً إذا ما إجتمعنا، للصلاة، فلنبارك إسم، ربي يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">We bless You, O my Lord Jesus, deliver us through Your name, for we have hope in You.</td>
            <td class="coptic">Ϫⲉ ⲧⲉⲛⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲡⲉⲕⲣⲁⲛ: ϫⲉ ⲁⲛⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ.</td>
            <td class="arabic">لأننا نباركك، يا ربي يسوع، نجنا بإسمك، لأننا توكلنا عليك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">That we may praise You, with Your good Father, and the Holy Spirit, for You have ${aktonkAki.english} and saved us.</td>
            <td class="coptic">Ⲉⲑⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ${aktonkAki.coptic} ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ</td>
            <td class="arabic">لكي نسبحك، مع أبيك الصالح، والروح القدس، لأنك ${aktonkAki.arabic} وخلصتنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Glory be to the Father and the Son, and the Holy Spirit, now and forever and unto, the age of all ages Amen. ${cross}</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩ̀ⲓⲱ: ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ: ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ: ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ. ${cross}</td>
            <td class="arabic">المجد للآب والإبن، والروح القدوس، الآن وكل أوان، وإلى دهر الدهور آمين. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function WatosTheotokiaIntro(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Introduction to the Watos Theotokia">
    
    <caption id="caption_table_${tableNumber}" class="caption">Introduction to the Watos Theotokia
        <span class="coptic-caption">Ⲉ̀ϣⲱⲡ ⲁⲛϣⲁⲛⲉⲣⲯⲁⲗⲓⲛ</span>
        <span class="arabic-caption">مقدمة الثيؤطوكية الواطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">And whenever we sing, let us say tenderly, “O our Lord Jesus Christ, have mercy upon our souls.”</td>
            <td class="coptic">Ⲉ̀ϣⲱⲡ ⲁⲛϣⲁⲛⲉⲣⲯⲁⲗⲓⲛ: ⲙⲁⲣⲉⲛϫⲟⲥ ϧⲉⲛ ⲟⲩϩ̀ⲗⲟϫ: ϫⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">إذا ما رتلنا، فلنقل بعذوبة، "يا ربنا يسوع المسيح، إصنع رحمة مع نفوسنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Glory be to the Father and the Son, and the Holy Spirit, now and forever and unto, the age of all ages Amen. ${cross}</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩ̀ⲓⲱ: ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ: ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ: ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ. ${cross}</td>
            <td class="arabic">المجد للآب والإبن، والروح القدوس، الآن وكل أوان، وإلى دهر الدهور آمين. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheSundayTheotokia_Adam(tableNumber , settings) {
    const selectedDateProperties = settings.selectedDateProperties;
    const aktonkAki = selectedDateProperties.aktonkAki;
    const introduction = AdamTheotokiaIntro(tableNumber,aktonkAki);
    const seasons = settings.selectedDateProperties.copticSeason;
    let kiahkPraises = [];
if (seasons.includes("Kiahk")) {
    const kiahkPraiseNames = [
        { "name": "firstExplanation", "tableNumber": tableNumber + 2 },
        { "name": "secondExplanation", "tableNumber": tableNumber + 4 },
        { "name": "thirdExplanation", "tableNumber": tableNumber + 6 },
        { "name": "fourthExplanation", "tableNumber": tableNumber + 8 },
        { "name": "fifthExplanation", "tableNumber": tableNumber + 10 },
        { "name": "sixthExplanation", "tableNumber": tableNumber + 12 },
        { "name": "seventhExplanation", "tableNumber": tableNumber + 15 },
        { "name": "praiseOnShereNeMaria", "tableNumber": tableNumber + 16 },
        { "name": "oMARY", "tableNumber": tableNumber + 18 },
        { "name": "rashiOMaria", "tableNumber": tableNumber + 20 },
        { "name": "iPraiseTheVirgin", "tableNumber": tableNumber + 21 },
        { "name": "praiseOnTeoiEnHikanos", "tableNumber": tableNumber + 22 },
        { "name": "yourMerciesOMyGod", "tableNumber": tableNumber + 26 },

    ];

    // Map through kiahkPraiseNames and add the 'html' property while keeping the 'name'
    kiahkPraises = kiahkPraiseNames.map(praise => ({
        ...praise,
        html: getKiahkPraiseHtml(praise.name, praise.tableNumber) // Add an 'html' property
    }));
}

// Extract HTML values for all explanations using destructuring
const [
    { html: part1Explanation = '' } = {},
    { html: part2Explanation = '' } = {},
    { html: part3Explanation = '' } = {},
    { html: part4Explanation = '' } = {},
    { html: part5Explanation = '' } = {},
    { html: part6Explanation = '' } = {},
    { html: part7Explanation = '' } = {},
    { html: praiseOnShereNeMaria = '' } = {},
    { html: oMARY = '' } = {},
    { html: rashiOMaria = '' } = {},
    { html: iPraiseTheVirgin = '' } = {},
    { html: praiseOnTeoiEnHikanos = '' } = {},
    { html: yourMerciesOMyGod = '' } = {},
] = kiahkPraises;

    
    const part7 = SundayTheotokia7ShereNeMaria(tableNumber + 13);
    const part8 = SundayTheotokia8Semoti(tableNumber + 14);
    const part9 = SundayTheotokia9ShashfEnsop(tableNumber + 17);
    const part10 = SundayTheotokia10Avmoti(tableNumber + 19);
    const part11 = SundayTheotokia11TeoiEnHikanos(tableNumber + 23);
    const nimghar = selectedDateProperties.aktonkAki.english === "risen" ? SundayTheotokia12Nimghar(tableNumber + 24) : '';
    const difnar = DifnarIntroduction_Adam(tableNumber + 25);
    const conclusion = AdamTheotokiaConclusion(tableNumber + 27,aktonkAki);

    const html = `
    ${introduction}
<table id="table_${tableNumber + 1}" style="display: table;" title="Sunday Theotokia &ndash; Part 1">
<caption id="caption_table_${tableNumber + 1}" class="caption">Sunday Theotokia &ndash; Part 1
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء الأول</span>
</caption>
<tbody>
    <tr id="table_${tableNumber + 1}_row_0" class="north">
        <td class="english" >You are called righteous, O blessed one,
            Among women, The Second Tabernacle:</td>
        <td class="coptic" >Ⲥⲉⲙⲟⲩϯ ⲉ̀ⲣⲟ ⲇⲓⲕⲉⲟⲥ : ⲱ̀ⲑⲏⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ : ϧⲉⲛ
            ⲛⲓϩⲓⲟ̀ⲙⲓ : ϫⲉ ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲥ̀ⲕⲏⲛⲏ.</td>
        <td class="arabic">مدعوة صديقة: أيتها المباركة: في النساء: القبة الثانية.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_1" class="south">
        <td class="english" >Which is called, The Holy, of Holies,
            Wherein are the Tablets:</td>
        <td class="coptic" >Ⲑⲏⲉ̀ⲧⲟⲩⲙⲟⲩϯ ⲉ̀ⲣⲟⲥ : ϫⲉ ⲑⲏⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ
            ⲛⲏⲉⲑⲟⲩⲁⲃ ⲉ̀ⲣⲉ ⲛⲓⲡ̀ⲗⲁⲝ ⲛ̀ϧⲏⲧⲥ.</td>
        <td class="arabic">التى تدعى: قدس الأقداس: وفيها: لوحا العهد.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_2" class="north">
        <td class="english" >Of the Covenant, and the Ten
            Commandments, which are Written, by The finger of God:</td>
        <td class="coptic" >̀ Ⲛⲧⲉ ϯⲇⲓⲁ̀ⲑⲏⲕⲏ : ⲛⲉⲙ ⲡⲓ ⲓˉ(ⲙⲉⲧ) ⲛ̀ⲥⲁϫⲓ :
            ⲛⲁⲓ ⲉ̀ⲧⲁϥⲥ̀ϧⲏⲧⲟⲩ : ⲛ̀ϫⲉ ⲡⲓⲧⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ.</td>
        <td class="arabic">والعشر كلمات: هذه المكتوبة: بأصبع: الله.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_3" class="south">
        <td class="english" >They have directed us, to the Iota, The
            Name of Salvation, Of Jesus Christ:</td>
        <td class="coptic" >Ⲥⲉⲉⲣϣⲟⲣⲡ ⲛ̀ⲉⲣⲥⲩⲙⲙⲉⲛⲓⲛ : ⲛⲁⲛ ⲙ̀ⲡⲓⲓⲱⲧⲁ :
            ⲡⲓⲣⲁⲛ ⲛ̀ⲟⲩϫⲁⲓ : ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
        <td class="arabic">سبقت أن دلتنا: على (اليوطة): اسم الخلاص: الذى ليسوع المسيح.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_4" class="north">
        <td class="english" >Who was incarnate, Of you without change,
            And became the Mediator, Of a new covenant.</td>
        <td class="coptic" >Ⲫⲁⲓ ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ : ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ :
            ⲁϥϣⲱⲡⲓ ⲙ̀ⲙⲉⲥⲓⲧⲏⲥ : ⲉⲩⲇⲓⲁ̀ⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ.</td>
        <td class="arabic">هذا الذى تجسد: منك بغير تغيير. وصار وسيطاً: لعهد جديد.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_5" class="south">
        <td class="english" >Through the shedding, Of His holy Blood,
            He purified the faithful, to be a justified people.</td>
        <td class="coptic" >Ⲉⲃⲟⲗϩⲓⲧⲉⲛ ⲫ̀ⲛⲟⲩϫϧ : ⲛ̀ⲧⲉ ⲡⲉϥⲥ̀ⲛⲟϥ ⲉⲑⲟⲩⲁⲃ :
            ⲁϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲏⲉⲑⲛⲁϩϯ : ⲉⲩⲗⲁⲟⲥ ⲉⲩⲑ̀ⲙⲁⲓⲟϥ.</td>
        <td class="arabic">من قبل رشاش: دمه المقدس: طهر المؤمنين: شعباً مبرراً.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_6" class="north">
        <td class="english" >Wherefore everyone, Magnifies you, O my
            lady the Mother of God, The ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: يا سيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_7" class="south">
        <td class="english" >And we also pray, that we may win mercy,
            Through your intercessions, With the Lover of mankind.</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ
            ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_8" class="north">
        <td class="english" >Who can speak of, The honor of the
            Tabernacle, Which Moses had made, On Mount Sinai.</td>
        <td class="coptic" >Ⲛⲓⲙ ⲡⲉⲑⲛⲁϣ̀ⲥⲁϫⲓ : ⲙ̀ⲡ̀ⲧⲁⲓⲟ̀ ⲛ̀ϯⲥ̀ⲕⲏⲛⲏ :
            ⲉ̀ⲧⲁ Ⲙⲱⲩ̀ⲥⲏⲥ ⲑⲁⲙⲓⲟⲥ : ϩⲓϫⲉⲛ ⲡ̀ⲧⲱⲟⲩ ⲛ̀Ⲥⲓⲛⲁ.</td>
        <td class="arabic">من يقدر أن ينطق: بكرامة القبة: التى صنعها موسى: على جبل سيناء.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_9" class="south">
        <td class="english" >He made it with glory, As commanded by
            the Lord, and according to the pattern, shown unto him.</td>
        <td class="coptic" >Ⲁϥⲑⲁⲙⲓⲟⲥ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ : ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡϭⲟⲓⲥ
            : ⲛⲉⲙ ⲕⲁⲧⲁ ⲛⲓⲧⲩⲡⲟⲥ ⲧⲏⲣⲟⲩ : ⲉ̀ⲧⲁⲩⲧⲁⲙⲟϥ ⲉ̀ⲣⲱⲟⲩ.</td>
        <td class="arabic">صنعها بمجد: كقول الرب: وكجميع المثالات: التى اعلنت له.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_10" class="north">
        <td class="english" >Therein Aaron, And his sons served, The
            example of the highest, in the shadow of the heavenly ones.</td>
        <td class="coptic" >Ⲑⲏ ⲉ̀ⲣⲉ ̀ Ⲁⲁ̀ⲣⲱⲛ : ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ϣⲉⲙϣⲓ
            ⲛ̀ϧⲏⲧⲥ : ϧⲉⲛ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ : ⲛⲉⲙ ⲧ̀ϧⲏⲓⲃⲓ ⲛ̀ⲧⲉ ⲛⲁ ⲧ̀ⲫⲉ.</td>
        <td class="arabic">تلك التى كان هرون: وبنوه يخدمون فيها: بمثال العلاء: وظل السمائيات.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_11" class="south">
        <td class="english" >They likened it to you, O Virgin Mary,
            The true Tabernacle, Wherein dwelt God.</td>
        <td class="coptic" >Ⲁⲩⲧⲉⲛⲑⲱⲛⲓ ⲉ̀ⲣⲟⲥ : Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ϯⲥ̀ⲕⲏⲛⲏ
            ⲙ̀ⲙⲏⲓ : ⲉ̀ⲣⲉ Ⲫϯ ⲥⲁϧⲟⲩⲛ ⲙ̀ⲙⲟⲥ.</td>
        <td class="arabic">شبهوك بها: يامريم العذراء: القبة الحقيقية: التى فى داخلها الله.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_12" class="north">
        <td class="english" >Wherefore we, magnify you befittingly,
            With prophetic, Hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_13" class="south">
        <td class="english" >For they spoke of you, With great honor,
            O Holy City, Of the Great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀
            ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber + 1}_row_14" class="north">
        <td class="english" >We entreat and pray, That we may win
            mercy, Through your intercessions, With the Lover of mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>
${part1Explanation}
<table id="table_${tableNumber + 3}" style="display: table;" title="Sunday Theotokia &ndash; Part 2">
<caption id="caption_table_${tableNumber + 3}" class="caption">Sunday Theotokia &ndash; Part 2
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء الثانى</span>
</caption>
<tbody>
    <tr id="table_${tableNumber + 3}_row_0" class="south">
        <td class="english" >The Ark overlaid, roundabout with gold,
            that was made, with wood that would not decay:</td>
        <td class="coptic" >Ϯⲕⲓⲃⲱⲧⲟⲥ ⲉⲧⲟϣϫ : ⲛ̀ⲛⲟⲃ ⲛ̀ⲥⲁⲥⲁ ⲛⲓⲃⲉⲛ :
            ⲑⲏⲉ̀ⲧⲁⲩⲑⲁⲙⲓⲟⲥ : ϧⲉⲛϩⲁⲛϣⲉ ⲛ̀ⲁⲧⲉⲣϩⲟⲗⲓ.</td>
        <td class="arabic">التابوت المصفح: بالذهب من كل ناحية: المصنوع من خشب: لايسوس.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_1" class="north">
        <td class="english" >It foretold the sign, of the God the
            Word, Who became man, Without separation:</td>
        <td class="coptic" >Ⲁⲥⲉⲣϣⲟⲣⲡ ⲛ̀ϯⲙⲏⲓⲛⲓ : ⲙ̀Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ :
            ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛ̀ⲣⲱⲙⲓ : ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲫⲱⲣϫ.</td>
        <td class="arabic">سبق أن دلنا: على الله الكلمة.الذى صار انساناً: بغير افتراق.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_2" class="south">
        <td class="english" >One nature out of two, A Holy divinity,
            Co-Essential with the Father, and Incorruptible.</td>
        <td class="coptic" >Ⲟⲩⲁⲓ ⲡⲉ ⲉ̀ⲃⲟⲗϧⲉⲛ ̀ ⲥⲛⲁⲩ : ⲟⲩⲙⲉⲑⲛⲟⲩϯ
            ⲉⲥⲧⲟⲩⲃⲏⲟⲩⲧ : ⲉⲥⲟⲓ ⲛ̀ⲁⲧⲧⲁⲕⲟ : ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙ ̀ Ⲫⲓⲱⲧ.</td>
        <td class="arabic">واحد من اثنين: لاهوت قدوس: بغير فساد: مساو للآب.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_3" class="north">
        <td class="english" >A Holy Humanity, Begotten without seed,
            Coessential with us, According to the Economy.</td>
        <td class="coptic" >Ⲛⲉⲙ ⲟⲩⲙⲉⲧⲣⲱⲙⲓ ⲉⲑⲟⲩⲁⲃ : ⲭⲱⲣⲓⲥ ⲥⲩⲛⲟⲩⲥⲓⲁ̀ :
            ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙⲁⲛ : ⲕⲁⲧⲁ ϯⲟⲓⲕⲟⲛⲟⲙⲓⲁ̀.</td>
        <td class="arabic">وناسوت طاهر: بغير مباضعة: مساو لنا: كالتدبير.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_4" class="south">
        <td class="english" >This which He Has taken, from you O
            undefiled, He made one with Him, As a hypostasis.</td>
        <td class="coptic" >Ⲑⲁⲓ ⲉ̀ⲧⲁϥϭⲓⲧⲥ ⲛ̀ϧⲏϯ : ⲱ̀ ϯⲁⲧⲑⲱⲗⲉⲃ :
            ⲉ̀ⲁϥϩⲱⲧⲡ ⲉ̀ⲣⲟⲥ : ⲕⲁⲧⲁ ⲟⲩϩⲩⲡⲟⲥⲧⲁⲥⲓⲥ.</td>
        <td class="arabic">هذا الذى أخذه منك: أيتها الغير الدنسة: واتحد به: كاقنوم.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_5" class="north">
        <td class="english" >Wherefore everyone, Magnifies you, O my
            lady the Mother of God, The ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: ياسيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_6" class="south">
        <td class="english" >And we also pray, that we may win mercy,
            Through your intercessions, With the Lover of mankind.</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ :
            ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_7" class="north">
        <td class="english" >All the souls together, of the children
            Of Israel, Brought offerings unto, The Tabernacle of the Lord:</td>
        <td class="coptic" >Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ : ⲛ̀ⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ
            : ⲁⲩⲓ̀ⲛⲓ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ : ⲉ̀ϯⲥ̀ⲕⲏⲛⲏ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ.</td>
        <td class="arabic">كل الأنفس معاً: من بنى إسرائيل: قدموا قرابين: إلى قبةالرب.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_8" class="south">
        <td class="english" >Gold and silver, And precious stone,
            Purple and scarlet, And fine linen.</td>
        <td class="coptic" >Ⲡⲓⲛⲟⲩⲃ ⲛⲉⲙ ⲡⲓϩⲁⲧ : ⲛⲉⲙ ⲡⲓⲱ̀ⲛⲓⲙ̀ⲙⲏⲓ : ⲛⲉⲙ
            ⲡⲓϣⲉⲛⲥ ⲉⲧⲥⲁϯ : ⲛⲉⲙ ⲡⲓϩⲩⲁ̀ⲕⲩⲛⲑⲓⲛⲟⲛ.</td>
        <td class="arabic">الذهب والفضة: والحجر الكريم: والحرير المغزول: والأرجوان.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_9" class="north">
        <td class="english" >And they made an ark, Of wood that would
            not decay, Overlaid with gold, Within and without.</td>
        <td class="coptic" >Ⲁⲩⲑⲁⲙⲓⲟ̀ ⲛ̀ⲟⲩⲕⲓⲃⲱⲧⲟⲥ : ϧⲉⲛ ϩⲁⲛϣⲉ
            ⲛ̀ⲁⲧⲉⲣϩⲟⲗⲓ : ⲁⲩⲗⲁⲗⲱⲥ ⲛ̀ⲛⲟⲃ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ.</td>
        <td class="arabic">صنعوا تابوتاً: من خشب لايسوّس. وصفحوه بالذهب: داخلاً وخارجاً.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_10" class="south">
        <td class="english" >You too O Mary, Are clothed with the
            glory, Of the Divinity, Within and without.</td>
        <td class="coptic" >Ⲧⲉϫⲟⲗϩ ⲅⲁⲣ ϩⲱⲓ : Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
            ⲙ̀ⲡ̀ⲱ̀ⲟⲩ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲛⲟⲩϯ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ.</td>
        <td class="arabic">وأنت أيضاً يامريم العذراء: متسربلة: بمجد اللاهوت: داخلاً وخارجاً.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_11" class="north">
        <td class="english" >For you have brought, Unto God your Son,
            Many people, Through your purity.</td>
        <td class="coptic" >Ϫⲉ ⲁ̀ⲣⲉⲓ̀ⲛⲓ ⲉ̀ϧⲟⲩⲛ : ⲛ̀ⲟⲩⲗⲁⲟⲥ ⲉϥⲟϣ : ⲙ̀Ⲫϯ
            ⲡⲉϣⲏⲣⲓ : ϩⲓⲧⲉⲛ ⲡⲉⲧⲟⲩⲃⲟ.</td>
        <td class="arabic">لانك قدمت: شعباً كثيراً: لله ابنك: من قبل طهارتك.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_12" class="south">
        <td class="english" >Wherefore we, magnify you befittingly,
            With prophetic, Hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_13" class="north">
        <td class="english" >For they spoke of you, With great honor,
            O Holy City, Of the Great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ
            : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber + 3}_row_14" class="south">
        <td class="english" >We entreat and pray, That we may win
            mercy, Through your intercessions, with the Lover of mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>
${part2Explanation}
<table id="table_${tableNumber + 5}" style="display: table;" title="Sunday Theotokia &ndash; Part 3">
<caption id="caption_table_${tableNumber + 5}" class="caption">Sunday Theotokia &ndash; Part 3
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء الثالث</span>
</caption>
<tbody>
    <tr id="table_${tableNumber + 5}_row_0" class="north">
        <td class="english" >The Mercy Seat, was overshadowed by, the
            forged Cherubim, from all sides.</td>
        <td class="coptic" >Ⲡⲓⲓ̀ⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ⲉ̀ⲧⲟⲩϩⲱⲃⲥ ⲙ̀ⲙⲟϥ : ϩⲓⲧⲉⲛ
            Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ : ⲉⲩⲟⲓ ⲛ̀ϩⲓⲕⲱⲛ.</td>
        <td class="arabic">الغطاء: المظلل عليه: بالكروبين: المصورين.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_1" class="south">
        <td class="english" >Was a symbol of God the Word, Who was
            incarnate, of you without change, O undefiled.</td>
        <td class="coptic" >̀ Ⲉⲧⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ : ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ : ⲱ̀
            ϯⲁⲧⲁϭⲛⲓ : ϧⲉⲛ ⲟⲩⲙⲉⲧ ⲁⲧϣⲓⲃϯ.</td>
        <td class="arabic">اى الله الكلمة: الذى تجسد منك: أيتها التى بلا عيب: بغير تغير.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_2" class="north">
        <td class="english" >He became the purification, Of our sins,
            And the forgiveness, Of our iniquities.</td>
        <td class="coptic" >Ⲁϥϣⲱⲡⲓ ⲛ̀ⲧⲟⲩⲃⲟ : ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ : ⲛⲉⲙ
            ⲟⲩⲣⲉϥⲭⲱ ⲉ̀ⲃⲟⲗ : ⲛ̀ⲧⲉ ⲛⲉⲛ ⲁⲛⲟⲙⲓ̀ⲁ̀.</td>
        <td class="arabic">وصار تطهيراً: لخطايانا: وغافراً: لآثامنا.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_3" class="south">
        <td class="english" >Wherefore everyone, Magnifies you, O my
            lady the Mother of God, The ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: ياسيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_4" class="north">
        <td class="english" >And we also pray, that we may win mercy,
            Through your intercessions, with the Lover of mankind.</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ :
            ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_5" class="south">
        <td class="english" >The two golden Cherubim, Continually
            cover, with their wings, The Mercy Seat.</td>
        <td class="coptic" >Ⲭⲉⲣⲟⲩⲃⲓⲙ ̀ ⲥⲛⲁⲩ ⲛ̀ⲛⲟⲩⲃ : ⲉⲩⲟⲓ ⲛ̀ϩⲓⲕⲱⲛ :
            ⲉⲩϩⲱⲃⲥ ⲙ̀ⲡⲓⲓ̀ⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ϧⲉⲛ ⲛⲟⲩⲧⲉⲛϩ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">كروبا ذهب: مصوران مظللان: على الغطاء: باجنحتهما كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_6" class="north">
        <td class="english" >Overshadowing, The place of The Holy, of
            the Holies, In the Second Tabernacle.</td>
        <td class="coptic" >Ⲉⲩⲉⲣϧⲏⲓⲃⲓ ⲉ̀ϩ̀ⲣⲏⲓ : ϩⲓϫⲉⲛ ⲡⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ :
            ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ : ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ ⲙ̀ⲙⲁϩⲥ̀ⲛⲟⲩϯ.</td>
        <td class="arabic">يظللان: على موضع: قدس الأقداس: فى القبة الثانية.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_7" class="south">
        <td class="english" >You too O Mary, Thousands of thousands,
            And myriads of myriads, Overshadow you:</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ϩⲱⲓ Ⲙⲁⲣⲓⲁ̀ : ⲛⲓⲁⲛⲁⲁⲛϣⲟ ⲛ̀ϣⲟ : ⲛⲉⲙ
            ⲛⲓⲁⲛⲁⲛ̀ⲑ̀ⲃⲁ ⲛ̀ⲑ̀ⲃⲁ : ⲥⲉⲉⲣϧⲏⲓⲃⲓ ⲉ̀ϫⲱ.</td>
        <td class="arabic">وأنت أيضاً يامريم: الوف الوف وربوات: ربوات يظللون عليك.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_8" class="north">
        <td class="english" >Praising their Creator, Who was in your
            womb, And took our likeness, Without sin or alteration.</td>
        <td class="coptic" >Ⲉⲩϩⲱⲥ ⲉ̀ⲡⲟⲩⲣⲉϥⲥⲱⲛⲧ : ⲉϥⲭⲏ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ : ϥⲁⲓ
            ⲉ̀ⲧⲁϥϭⲓ ⲙ̀ⲡⲉⲛⲓ̀ⲛⲓ : ⲭⲱⲣⲓⲥ ⲛⲟⲃⲓ ϩⲓϣⲓⲃϯ.</td>
        <td class="arabic">مسبحين خالقهم: وهو فى بطنك. هذا الذى أخذ شبهنا: ما خلا الخطية والتغيير.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_9" class="south">
        <td class="english" >Wherefore we, magnify you befittingly,
            With prophetic, Hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_10" class="north">
        <td class="english" >For they spoke of you, With great honor,
            O Holy City, Of the Great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ
            : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber + 5}_row_11" class="south">
        <td class="english" >We entreat and pray, That we may win
            mercy, Through your intercessions, with the Lover of mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>
${part3Explanation}
<table id="table_${tableNumber + 7}" style="display: table;" title="Sunday Theotokia &ndash; Part 4">
<caption id="caption_table_${tableNumber + 7}" class="caption">Sunday Theotokia &ndash; Part 4
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء الرابع</span>
</caption>
<tbody>
    <tr id="table_${tableNumber + 7}_row_0" class="north">
        <td class="english" >You are the Pot, Made of pure gold,
            Wherein was hidden, The True Manna:</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ⲡⲉ ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ : ⲛ̀ⲛⲟⲩⲃ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ :
            ⲉ̀ⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ : ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲧⲉϥⲙⲏϯ.</td>
        <td class="arabic">أنت هى قسط: الذهب النقى: المخفى: المن فى وسطه.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_1" class="south">
        <td class="english" >The Bread of Life, Which came down for
            us, from heaven, gave life Unto the world.</td>
        <td class="coptic" >Ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ : ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ : ⲛⲁⲛ
            ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ : ⲁϥϯ ⲙ̀ⲡ̀ⲱⲛϧ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
        <td class="arabic">خبز الحياة: الذى نزل لنا: من السماء: وأعطى الحياة للعالم.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_2" class="north">
        <td class="english" >Wherefore everyone, Magnifies you, O my
            lady, the Mother of God, The ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: ياسيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_3" class="south">
        <td class="english" >And we also pray, that we may win mercy,
            Through your intercessions, with the Lover of mankind.</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ :
            ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_4" class="north">
        <td class="english" >It befits you, to be called, The golden
            Pot, where the Manna was hidden.</td>
        <td class="coptic" >̀ Ϥⲧⲱⲙⲓ ⲅⲁⲣ ⲉ̀ⲣⲟ : ⲉⲑⲣⲟⲩⲙⲟⲩϯ ⲉ̀ⲡⲉⲣⲁⲛ : ϫⲉ
            ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ ⲛ̀ⲛⲟⲩⲃ : ⲉ̀ⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ ⲛ̀ϧⲏⲧϥ.</td>
        <td class="arabic">يليق بك: أن يدعى اسمك: قسط الذهب: المخفى فية المن.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_5" class="south">
        <td class="english" >For that was kept, In the Tabernacle, As
            a testimony, to The children of Israel.</td>
        <td class="coptic" >Ⲫⲏ ⲙⲉⲛ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ : ϣⲁⲩⲭⲁϥ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ :
            ⲛ̀ⲟⲩⲙⲉⲧⲙⲉⲑⲣⲉ : ⲛ̀ⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
        <td class="arabic">فذاك وضع: فى القبة: شهادة: لبنى اسرائيل.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_6" class="north">
        <td class="english" >Of the good things, That the Lord God,
            Did unto them, In the wilderness of Sinai.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲛⲓⲡⲉⲑⲛⲁⲛⲉⲩ : ⲉⲧⲁϥⲁⲓⲧⲟⲩ ⲛⲉⲙⲱⲟⲩ : ⲛ̀ϫⲉ
            Ⲡϭⲟⲓⲥ Ⲫϯ : ϩⲓ ⲡ̀ϣⲁϥⲉ ⲛ̀Ⲥⲓⲛⲁ.</td>
        <td class="arabic">من أجل الخيرات: التى صنعها معهم: الرب الاله: فى برية سيناء.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_7" class="south">
        <td class="english" >You too O Mary, Have carried in your
            womb, The rational Manna, That came from the Father.</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ϩⲱⲓ Ⲙⲁⲣⲓⲁ̀ : ⲁ̀ⲣⲉϥⲁⲓ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ
            ⲙ̀ⲡⲓⲙⲁⲛⲛⲁ ⲛ̀ⲛⲟⲏ̀ⲧⲟⲛ : ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲃⲟⲗϧⲉⲛ ̀ Ⲫⲓⲱⲧ.</td>
        <td class="arabic">وأنت أيضاً يامريم: حملت فى بطنك: المن العقلى: الذى أتى من الآب.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_8" class="north">
        <td class="english" >You bore Him without blemish. He gave
            unto us, His honored Body and Blood, And we live forever.</td>
        <td class="coptic" >̀ Ⲁⲣⲉⲙⲁⲥϥ ⲁϭⲛⲉ ⲑⲱⲗⲉⲃ : ⲁϥϯ ⲛⲁⲛ
            ⲙ̀ⲡⲉϥⲥⲱⲙⲁ : ⲛⲉⲙ ⲡⲉϥⲥ̀ⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲁⲛⲱⲛϧ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
        <td class="arabic">وولدته بغير دنس: وأعطانا جسده: ودمه الكريميين: فحيينا إلى الآبد.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_9" class="south">
        <td class="english" >Wherefore we, magnify you befittingly,
            With prophetic, Hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_10" class="north">
        <td class="english" >For they spoke of you, With great honor,
            O Holy City, Of the Great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ
            : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber + 7}_row_11" class="south">
        <td class="english" >We entreat and pray, That we may win
            mercy, Through your intercessions, with the Lover of mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>
${part4Explanation}
<table id="table_${tableNumber + 9}" style="display: table;" title="Sunday Theotokia &ndash; Part 5">
<caption id="caption_table_${tableNumber + 9}" class="caption">Sunday Theotokia &ndash; Part 5
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء الخامس</span>
</caption>
<tbody>
    <tr id="table_${tableNumber + 9}_row_0" class="north">
        <td class="english" >You are the lampstand, Made of pure gold,
            Carrying, the ever-burning lamp.</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ⲧⲉ ϯⲗⲩⲭⲛⲓⲁ̀ : ⲛ̀ⲛⲟⲩⲃ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ :
            ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓⲗⲁⲙⲡⲁⲥ : ⲉⲑⲙⲟϩ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">أنت المنارة: الذهب النقى: الحاملة المصباح: المتقد كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_1" class="south">
        <td class="english" >That is the unapproachable, light of the
            world, that proceeds from, the Unapproachable light.</td>
        <td class="coptic" >Ⲉ̀ⲧⲉ ⲫ̀ⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ : ⲡⲓⲁⲧϣ̀ϧⲱⲛⲧ
            ⲉ̀ⲣⲟϥ : ⲡⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲓⲟⲩⲱⲓⲛⲓ : ⲛ̀ⲁⲧϣ̀ϧⲱⲛⲧ ⲉ̀ⲣⲟϥ.</td>
        <td class="arabic">الذى هو نور العالم: غير المقترب اليه. الذى من النور: غير المُدني منه.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_2" class="north">
        <td class="english" >The True God, out of True God, Who was
            incarnate, Of you without change.</td>
        <td class="coptic" >Ⲡⲓⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ : ⲉ̀ⲃⲟⲗϧⲉⲛ ⲟⲩⲛⲟⲩϯ
            ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ : ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ : ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ.</td>
        <td class="arabic">الاله الحق: من الاله الحق. الذى تجسد منك: بغير تغيير.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_3" class="south">
        <td class="english" >By His coming, He gave light to us, Who
            were sitting in darkness, And in the shadow of death.</td>
        <td class="coptic" >Ϩⲓⲧⲉⲛ ⲧⲉϥⲡⲁⲣⲟⲩⲥⲓⲁ̀ : ⲁϥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ :
            ϧⲁ ⲛⲏⲉⲧϩⲉⲙⲥⲓ ϧⲉⲛ ⲡ̀ⲭⲁⲕⲓ : ⲛⲉⲙ ⲧ̀ϧⲏⲓⲃⲓ ⲙ̀ⲫ̀ⲙⲟⲩ.</td>
        <td class="arabic">بظهوره: اضاء علينا: نحن الجلوس فى الظلمة: وظلال الموت.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_4" class="north">
        <td class="english" >And He guided our feet, in the path of
            peace, Through the communion, Of His Holy sacraments.</td>
        <td class="coptic" >Ⲁϥⲥⲟⲩⲧⲉⲛ ⲛⲉⲛϭⲁⲗⲁⲩϫ : ⲉ̀ⲫ̀ⲙⲱⲓⲧ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ
            : ϩⲓⲧⲉⲛ ϯⲕⲟⲓⲛⲱⲛⲓⲁ̀ : ⲛ̀ⲧⲉ ⲛⲉϥⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ.</td>
        <td class="arabic">وقوّم أرجلنا: إلى طريق السلام: بشركة: أسراره المقدسة.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_5" class="south">
        <td class="english" >Wherefore everyone, Magnifies you, O my
            lady the Mother of God, The ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: ياسيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_6" class="north">
        <td class="english" >And we also pray, that we may win mercy,
            Through your intercessions, With the Lover of mankind.</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ
            ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_7" class="south">
        <td class="english" >All the ranks on high, cannot resemble
            you, O golden lampstand, that carries the True Light.</td>
        <td class="coptic" >̀ Ⲩⲥⲟⲥ ⲛⲓⲃⲉⲛ ⲉⲧϧⲉⲛ ⲡ̀ϭⲓⲥⲓ :
            ⲙ̀ⲡⲟⲩϣ̀ⲧⲉⲛⲑⲱⲛⲟⲩ ⲉ̀ⲣⲟ : ⲱ̀ ϯⲗⲩⲭⲛⲓⲁ̀ ⲛ̀ⲛⲟⲩⲃ : ⲉⲧϥⲁⲓϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ.</td>
        <td class="arabic">كل الرتب العلوية: لم تقدر أن تشبهك: أيتها المنارة الذهبية: حاملة النور الحقيقي.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_8" class="north">
        <td class="english" >That was made of, Pure and chosen gold,
            And was placed, in The Tabernacle.</td>
        <td class="coptic" >Ⲑⲏⲙⲉⲛ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ : ϣⲁⲩⲑⲁⲙⲓⲟⲥ ϧⲉⲛ ⲟⲩⲛⲟⲩⲃ :
            ⲉϥⲥⲱⲧⲡ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ : ϣⲁⲩⲭⲁⲥ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ.</td>
        <td class="arabic">فتلك: صًنعت من ذهب: مختار نقى: ووضعت فى القبة.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_9" class="south">
        <td class="english" >That was managed, by the hands of men,
            Who brought oil for its lamps, By day and by night.</td>
        <td class="coptic" >Ⲥⲉⲉⲣⲕⲉⲃⲉⲣⲛⲓⲧⲏⲥ ⲉ̀ⲣⲟⲥ : ϩⲓⲧⲉⲛ ϩⲁⲛϫⲓϫ ⲛ̀ⲣⲱⲙⲓ
            : ⲉⲩϯⲛⲉϩ ⲛ̀ⲥⲁ ⲛⲉⲥ ⲗⲁⲙⲡⲁⲥ : ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ.</td>
        <td class="arabic">تُدبر بايدى البشر: اذ يعطى زيت: لمصابيحها: نهاراً وليلاً.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_10" class="north">
        <td class="english" >He Who dwelt in your womb, O Virgin Mary,
            gives light to every man, who comes into the world.</td>
        <td class="coptic" >Ⲫⲏⲉⲧⲭⲏ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ : Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
            ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲱⲙⲓ ⲛⲓⲃⲉⲛ : ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
        <td class="arabic">والذى فى بطنك: يا مريم العذراء: اضاء لكل انسان: آت الى العالم.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_11" class="south">
        <td class="english" >For He Whom you gave birth to, Is the Sun
            of Righteousness, And He has healed us, of all our sins.</td>
        <td class="coptic" >̀ Ⲛⲑⲟϥ ⲅⲁⲣ ⲡⲉ ⲫ̀ⲣⲏ : ⲛ̀ⲧⲉ ϯⲇⲓⲕⲉⲟ̀ⲥⲩⲛⲏ :
            ⲁ̀ⲣⲉⲙⲁⲥϥ ⲁϥⲧⲁⲗϭⲟⲛ : ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
        <td class="arabic">لانه: هو شمس البر: ولدته: وشفانا من خطايانا.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_12" class="north">
        <td class="english" >Wherefore we, magnify you befittingly,
            With prophetic, Hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_13" class="south">
        <td class="english" >For they spoke of you, With great honor,
            O Holy City, Of the Great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ
            : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber + 9}_row_14" class="north">
        <td class="english" >We entreat and pray, That we may win
            mercy, Through your intercessions, with the Lover of mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>
${part5Explanation}
<table id="table_${tableNumber + 11}" style="display: table;" title="Sunday Theotokia &ndash; Part 6">
<caption id="caption_table_${tableNumber + 11}" class="caption">Sunday Theotokia &ndash; Part 6
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء السادس</span>
</caption>
<tbody>
    <tr id="table_${tableNumber + 11}_row_0" class="south">
        <td class="english" >You are the censer, Made of pure gold,
            Carrying the blessed, and Live coal.</td>
        <td class="coptic" >Ⲛ̀ⲑⲟ ⲧⲉ ϯϣⲟⲩⲣⲏ : ⲛ̀ⲛⲟⲩⲃ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ : ⲉⲧϥⲁⲓ
            ϧⲁ ⲡⲓϫⲉⲃⲥ : ⲛ̀ⲭ̀ⲣⲱⲙ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.</td>
        <td class="arabic">أنت هى المجمرة: الذهب النقى: حاملة جمر النار: المباركة.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_1" class="north">
        <td class="english" >That is taken, From the Altar, To purge
            the sins, and take away the iniquities.</td>
        <td class="coptic" >Ⲫⲏⲉⲧⲟⲩϭⲓ ⲙ̀ⲙⲟϥ : ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ
            : ϣⲁϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲓⲛⲟⲃⲓ: ⲛ̀ⲧⲉϥⲱ̀ⲗⲓ ⲛ̀ⲛⲓⲁ̀ⲛⲟⲙⲓⲁ̀.</td>
        <td class="arabic">الذى يؤخذ: من المذبح: يطهر الخطايا: ويمحو الآثام.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_2" class="south">
        <td class="english" >Which is God the Word, Who was incarnate
            of you, And offered Himself as incense, to God His Father.</td>
        <td class="coptic" >̀ Ⲉⲧⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ : ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ :
            ⲁϥⲟⲗϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲟⲩⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ : ϣⲁ Ⲫϯ Ⲡⲉϥⲓⲱⲧ.</td>
        <td class="arabic">أى الله الكلمة: الذى تجسد منك: ورفع ذاتة بخوراً: إلى الله أبيه.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_3" class="north">
        <td class="english" >Wherefore everyone, Magnifies you, O my
            lady the Mother of God, The ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: ياسيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_4" class="south">
        <td class="english" >And we also pray, that we may win mercy,
            Through your intercessions, With the Lover of mankind.</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ
            ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_5" class="north">
        <td class="english" >Wherefore truly, I do not err, Whenever I
            call you, The golden censer.</td>
        <td class="coptic" >Ⲧⲟⲧⲉ ⲁ̀ⲗⲏⲑⲱⲥ : ⲛ̀ϯϣⲱϥⲧ
            ⲁⲛ ⲛ̀ϩ̀ⲗⲓ : ⲁⲓϣⲁⲛⲙⲟⲩϯ ⲉ̀ⲣⲟ : ϫⲉ ϯϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ.</td>
        <td class="arabic">حينئذ بالحقيقة: لا أخطيئ فى شئ: إذا ما دعوتك: المجمرة الذهب.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_6" class="south">
        <td class="english" >For therein, Is offered, The chosen
            incense, Before the Holiest.</td>
        <td class="coptic" >Ⲑⲏ ⲙⲉⲛ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ : ϣⲁⲩⲧⲁⲗⲟ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ϧⲏⲧⲥ
            : ⲙ̀ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ : ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ.</td>
        <td class="arabic">فتلك يًرفع فيها: البخور: المختار: أمام الأقدس.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_7" class="north">
        <td class="english" >Wherein God takes away,The sins of
            the people, Through the burnt offerings, And the aroma of incense.</td>
        <td class="coptic" >Ϣⲁⲣⲉ Ⲫϯ ⲱ̀ⲗⲓ ⲙ̀ⲙⲁⲩ : ⲛ̀ⲛⲓⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ
            : ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲓϭ̀ⲗⲓⲗ : ⲛⲉⲙ ⲡⲓⲥ̀ⲑⲟⲓ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ.</td>
        <td class="arabic">ويرفع الله هناك: خطايا الشعب: من قبل المحرقات: ورائحةالبخور.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_8" class="south">
        <td class="english" >You too O Mary, Have carried in your
            womb, The Invisible, Word Of the Father.</td>
        <td class="coptic" >̀ Ⲛⲑⲟ Ϩⲱⲓ Ⲙⲁⲣⲓⲁ̀ : ⲁ̀ⲣⲉϥⲁⲓ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ :
            ⲙ̀ⲡⲓⲁⲧϣ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ : ⲛ̀ⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ ̀ Ⲫⲓⲱⲧ.</td>
        <td class="arabic">وأنت يامريم: حملت فى بطنك: الغير منظور: كلمة الآب.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_9" class="north">
        <td class="english" >He who offered Himself, As an acceptable
            sacrifice, Upon the Cross, For the salvation of our race.</td>
        <td class="coptic" >Ⲫⲁⲓ ⲉ̀ⲧⲁϥⲉⲛϥ ⲉ̀ⲡ̀ϣⲱⲓ : ⲛ̀ⲟⲩⲑⲩⲥⲓⲁ̀ ⲉⲥϣⲏⲡ :
            ϩⲓϫⲉⲛ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ϧⲁ ⲡ̀ⲟⲩϫⲁⲓ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
        <td class="arabic">هذا الذى أصعد: ذاته ذبيحة مقبولة: على الصليب: عن خلاص جنسنا.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_10" class="south">
        <td class="english" >Wherefore we, magnify you befittingly,
            With prophetic, Hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_11" class="north">
        <td class="english" >For they spoke of you, With great honor,
            O Holy City, Of the Great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ
            : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber + 11}_row_12" class="south">
        <td class="english" >We entreat and pray, That we may win
            mercy, Through your intercessions, with the Lover of mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>
${part6Explanation}
${part7}
${part8}
${part7Explanation}
${praiseOnShereNeMaria}
${part9}
${oMARY}
${part10}
${rashiOMaria}
${iPraiseTheVirgin}
${praiseOnTeoiEnHikanos}
${part11}
${nimghar}
${difnar}
${yourMerciesOMyGod}
${conclusion}
`;
    return html;
}

function SundayTheotokia7ShereNeMaria(tableNumber) {
    const gospelTableNumber = tableNumber;
    tableNumber += 0.1;
    const html = `
<table id="table_${gospelTableNumber}" style="display: table;" title="Gospel">
<caption id="caption_table_${gospelTableNumber}" class="caption">Gospel
    <span class="coptic-caption">Ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ</span>
    <span class="arabic-caption">الإنجيل</span>
    </caption>
<tbody>
    <tr id="table_${gospelTableNumber}_row_0" class="north">
        <td class="english">Holy, holy, holy, a reading from the Gospel according to our teacher Saint Luke the Evangelist. May his blessings be with us all. Amen.</td>
        <td class="coptic">Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁ̀ⲅⲓⲟⲛ.</td>
        <td class="arabic">قدوس قدوس قدوس، فصل من الإنجيل لمعلمنا مار لوقا البشير. بركاته على جميعناً. آمين.</td>
    </tr>
    <tr id="table_${gospelTableNumber}_row_1" class="north">
        <td class="english">Luke 2:29-32</td>
        <td class="coptic">Ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ Ⲕⲉⲫⲁⲗⲉⲟⲛ ⲃ̅ : ⲕ̅ⲑ̅ - ⲗ̅ⲃ̅</td>
        <td class="arabic">لوقا 2: 29-32</td>
    </tr>
    <tr id="table_${gospelTableNumber}_row_2" class="north">
        <td class="english">"Lord, now You are letting Your servant depart in peace, According to Your word. For my eyes have seen Your salvation which You have prepared before the face of all peoples. A light to bring revelation to the Gentiles, and the glory of Your people Israel."</td>
        <td class="coptic">Ϯⲛⲟⲩ Ⲡⲁⲛⲏⲃ ⲭ̀ⲛⲁⲭⲁ ⲡⲉⲕⲃⲱⲕ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲕⲁⲧⲁ ⲡⲉⲕⲥⲁϫⲓ. Ϫⲉ ⲁⲩⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲁⲃⲁⲗ ⲉ̀ⲡⲉⲕⲛⲟϩⲉⲙ: ⲫⲏⲉ̀ⲧⲁⲕⲥⲉⲃⲧⲱⲧϥ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ. Ⲟⲩⲟⲩⲱⲓⲛⲓ ⲉⲩϭⲱⲣⲡ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ϩⲁⲛⲉⲑⲛⲟⲥ: ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ Ⲡⲓⲥⲣⲁⲏⲗ.</td>
        <td class="arabic">"الآن يا سيدي أطلق عبدك بسلام بحسب قولك. لأن عيني قد أبصرتا خلاصك الذي أعددته قدام جميع الشعوب. نوراً تجلى للأمم، ومجداً لشعبك إسرائيل."</td>
    </tr>
    <tr id="table_${gospelTableNumber}_row_3" class="north">
        <td class="english">Glory be to God forever. Amen.</td>
        <td class="coptic">Ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ. Ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">والمجد لله دائماً. آمين.</td>
    </tr>
</tbody>
</table>

<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; Part 7 Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀">
<caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; Part 7 <br /><span
        class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀</span>
        <span class="arabic-caption">تيوطوكيا الأحد - الجزء السابع</span>
        </caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >Hail to you Mary, the beautiful dove, who
            gave birth, to God the Word for us.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ: ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ.</td>
        <td class="arabic">السلام لك يا مريم: الحمامة الحسنة: التي ولدت: لنا الله الكلمة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="south">
        <td class="english" >You are the flower, of incense, that has
            blossomed, from the root of Jesse.</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ⲧⲉ
            ϯϩ̀ⲣⲏⲣⲓ : ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ :
            ⲑⲏⲉⲧⲁⲥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ
            ⲑ̀ⲛⲟⲩⲛⲓ ⲛ̀Ⲓⲉⲥⲥⲉ.</td>
        <td class="arabic">أنت زهرة: البخور: التي أينعت: من أصل يسىّ.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >The rod of Aaron, which blossomed,
            without planting or watering, is a symbol of you.</td>
        <td class="coptic" >Ⲡⲓϣ̀ⲃⲱⲧ
            ⲛ̀ⲧⲉ Ⲁⲁ̀ⲣⲱⲛ: ⲉⲧⲁϥⲫⲓⲣⲓ
            ⲉ̀ⲃⲟⲗ : ⲭⲱⲣⲓⲥ ϭⲟ
            ⲛⲉⲙ ⲧ̀ⲥⲟ : ϥ̀ⲟⲓ
            ⲛ̀ⲧⲩⲡⲟⲥ ⲛⲉ.</td>
        <td class="arabic">عصا هرون التي: أزهرت بغير: غرس ولا سقى: هى مثال لك.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >You who gave birth to Christ, our true
            God, without the seed of man, and remained a virgin.</td>
        <td class="coptic" >Ⲱ ⲑⲏⲉⲧⲁⲥⲙⲉⲥ
            Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲉⲛⲛⲟⲩϯ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ :
            ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
        <td class="arabic">يامن ولدت المسيح: إلهنا بالحقيقة: وبغير زرع بشر: وأنت عذراء.</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Wherefore everyone, magnifies you, o my
            lady the Mother of God, the ever holy.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
            ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
        <td class="arabic">من أجل هذا: كل واحد يعظمك: ياسيدتى والدة الاله: القديسة كل حين.</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="south">
        <td class="english" >And we also pray, that we may win mercy,
            through your intercessions, With the Lover of Mankind. ${cross}</td>
        <td class="coptic" >̀Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ :
            ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>`;

    return html;
}

function SundayTheotokia8Semoti(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Ⲥⲉⲙⲟⲩϯ">
<caption id="caption_table_${tableNumber}" class="caption">You Are Called Righteous
<span class="coptic-caption">Ⲥⲉⲙⲟⲩϯ</span>
<span class="arabic-caption">مدعوة أنت بالحقيقة</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >You are called righteous, o St. Mary, the
            Second Tabernacle, belonging to the Holies.</td>
        <td class="coptic" >Ⲥⲉⲙⲟⲩϯ ⲉ̀ⲣⲟ ⲇⲓⲕⲉⲟⲥ : ⲱ̀ ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ̀ :
            ϫⲉ ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲥ̀ⲕⲏⲛⲏ : ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ.</td>
        <td class="arabic">مدعوة أنت: بالحقيقة أيتها: القديسة مريم: القبة التي للأقداس.</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="south">
        <td class="english" >Wherein is placed, the rod of Aaron, and
            the holy flower, of incense.</td>
        <td class="coptic" >Ⲑⲏⲉⲧⲟⲩⲭⲏ ⲛ̀ϧⲏⲧⲥ : ⲛ̀ϫⲉ ⲡⲓϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ Ⲁⲁⲣⲱⲛ
            : ⲛⲉⲙ ϯϩ̀ⲣⲏⲣⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ.</td>
        <td class="arabic">تلك الموضوع فيها: عصا هرون: والزهرة المقدسة: التى للبخور.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >You are clothed with purity, within and
            without, O pure tabernacle, the dwelling of the righteous.</td>
        <td class="coptic" >Ⲧⲉϫⲟⲗϩ ⲙ̀ⲡⲓⲧⲟⲩⲃⲟ: ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ: ⲱ̀
            ϯⲥ̀ⲕⲏⲛⲏ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ: ⲫ̀ⲙⲁⲛ̀ϣⲱⲡⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
        <td class="arabic">أنت مشتملة بالطهارة: من داخل ومن خارج: أيتها القبة النقية: مسكن الصديقين.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >The hosts of the high standings, and the
            chorus of the just, glorify You, and Your blessedness.</td>
        <td class="coptic" >Ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ : ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ
            ⲛⲓⲑ̀ⲙⲏⲓ : ⲥⲉⲉⲣⲉⲩⲇⲟⲝⲁⲍⲓⲛ : ⲛ̀ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
        <td class="arabic">طغمات العلاء: وصفوف الابرار: يمجدون: طوباويتك.</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Wherefore we, magnify you befittingly,
            with prophetic, hymnology.</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ : ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
            ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀ : ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
        <td class="arabic">من أجل هذا: نعظمك باستحقاق: بتماجيد: نبوية.</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="south">
        <td class="english" >For they spoke of you, with great honor,
            O holy city, of the great King.</td>
        <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ : ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ
            : ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
        <td class="arabic">لانهم تكلموا من أجلك: بأعمال كريمة: أيتها المدينة المقدسة: التى للملك العظيم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="north">
        <td class="english" >We entreat and pray, that we may win
            mercy, through your intercessions, with the Lover of Mankind. ${cross}</td>
        <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ: ϩⲓⲧⲉⲛ
            ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">نسأل ونطلب: أن نفوز برحمة: بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>`
    return html;
}

function SundayTheotokia9ShashfEnsop(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; Part 8">
<caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; Part 8
    <span class="coptic-caption">Ⲍ ⲛ̀ⲥⲟⲡ</span>
    <span class="arabic-caption">تيوطوكيا الأحد - الجزء الثامن</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >Seven times everyday: I will praise Your
            name: with all my heart: O God of everyone.</td>
        <td class="coptic" > Ϣⲁϣϥ ⲛ̀ⲥⲟⲡ ⲙ̀ⲙⲏⲛⲓ:̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁϩⲏⲧ ⲧⲏⲣϥ:
            ϯⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉⲕⲣⲁⲛ: Ⲡϭⲟⲓⲥ ⲙ̀ⲡⲓⲉ̀ⲡ̀ⲧⲏⲣϥ.</td>
        <td class="arabic">سبع مرات كل يوم: من كل قلبي: أبارك أسمك: يارب الكل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="south">
        <td class="english" >I remembered Your name: and I was
            comforted: O King of the ages: and God of all gods.</td>
        <td class="coptic" >Ⲁⲓⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ: ⲟⲩⲟϩ ⲁⲓϫⲉⲙⲛⲟⲙϯ:
            ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: Ⲫϯ ̀ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲩϯ.</td>
        <td class="arabic">ذكرت اسمك: فتعزيت: ياملك الدهور: وإله الآلهة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >Jesus Christ our true God: who has come:
            for our salvation: was incarnate.</td>
        <td class="coptic" >Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲡⲓⲁ̀ⲗⲏⲑⲓⲛⲟⲥ:
            ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ: ⲁϥⲉⲣⲥⲱⲙⲁⲧⲓⲕⲟⲥ.</td>
        <td class="arabic">يسوع المسيح الهنا: الحقيقى: الذى أتى من اجل: خلاصنا متجسداً.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >He was incarnate: of the Holy Spirit: and
            of Mary: the pure bride.</td>
        <td class="coptic" >Ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲛⲉⲙ
            ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲙⲁⲣⲓⲁ̀: ϯϣⲉⲗⲉⲧ ⲉⲑⲟⲩⲁⲃ.</td>
        <td class="arabic">وتجسد: من الروح القدس: ومن مريم: العروس الطاهرة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >And changed our sorrow: and all our
            troubles: to joy for our hearts: and total rejoicing.</td>
        <td class="coptic" >Ⲁϥⲫⲱⲛϩ ⲙ̀ⲡⲉⲛϩⲏⲃⲓ: ⲛⲉⲙ ⲡⲉⲛϩⲟϫϩⲉϫ ⲧⲏⲣϥ:
            ⲉ̀ⲟⲩⲣⲁϣⲓ ⲛ̀ϩⲏⲧ: ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ ⲉ̀ⲡ̀ⲧⲏⲣϥ.</td>
        <td class="arabic">وقلب حزننا: وكل ضيقنا: إلى فرح قلب: وتهليل كلى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="south">
        <td class="english" >Let us worship Him: and sing to: His
            mother Mary: the beautiful dove.</td>
        <td class="coptic" >Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲉⲣϩⲩⲙⲛⲟⲥ:
            ⲛ̀ⲧⲉϥⲙⲁⲩ Ⲙⲁⲣⲓⲁ̀: ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
        <td class="arabic">فلنسجد له: ونرتل: لأمه مريم: الحمامة الحسنة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="north">
        <td class="english" >And let us all proclaim: with the voice
            of joy: saying Hail to you Mary: the Mother of Emmanuel.</td>
        <td class="coptic" >Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ϫⲉ
            ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲑ̀ⲙⲁⲩ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
        <td class="arabic">ونصرخ بصوت التهليل: قائلين: السلام لك يامريم: أم عمانوئيل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >Hail to you Mary: the salvation of our
            father Adam: Hail...: the Mother of the refuge: Hail...: the rejoicing of Eve: Hail...: the joy
            of all generations.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲥⲱϯ ⲛ̀Ⲁⲇⲁⲙ ⲡⲉⲛⲓⲱⲧ: ⲭ̅ⲉ̅ 
            : ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲙⲁⲙ̀ⲫⲱⲧ: ⲭ̅ⲉ̅  : ⲡ̀ⲑⲉⲗⲏⲗ ⲛ̀Ⲉⲩⲁ̀: ⲭ̅ⲉ̅  : ̀ ⲡⲟⲩⲛⲟϥ ⲛ̀ⲛⲓⲅⲉⲛⲉⲁ̀.</td>
        <td class="arabic">السلام لك يامريم: خلاص أبينا آدم. السلام.. أم الملجأ. السلام.. تهليل حواء.
            السلام.. فرح الأجيال.</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >Hail to you Mary: the joy of Abel the
            just: Hail...: the true Virgin: Hail...: the salvation of Noah: Hail...: the chaste and
            undefiled.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲫ̀ⲣⲁϣⲓ ⲛ̀Ⲁⲃⲉⲗ ⲡⲓⲑ̀ⲙⲏⲓ:
            ⲭ̅ⲉ̅  : ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ:  : ⲫ̀ⲛⲟϩⲉⲙ ⲛ̀Ⲛⲱⲉ̀: ⲭ̅ⲉ̅  :ϯⲁⲧⲑⲱⲗⲉⲃ ⲛ̀ⲥⲉⲙⲛⲏ.</td>
        <td class="arabic">السلام لك يامريم: فرح هابيل البار. السلام..العذراء الحقيقية. السلام.. خلاص نوح.
            السلام..غير الدنسة الهادئة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="south">
        <td class="english" >Hail to you Mary: the grace of Abraham:
            Hail...: the unfading crown: Hail...: the redemption of Saint Isaac: Hail...: the Mother of the
            Holy.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ϩ̀ⲙⲟⲧ ⲛ̀Ⲁⲃⲣⲁⲁⲙ: ⲭ̅ⲉ̅  :
            ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲑⲗⲱⲙ: ⲭ̅ⲉ̅  : ⲡ̀ⲥⲱϯ ⲛ̀Ⲓⲥⲁⲁⲕ ⲡⲉⲑⲟⲩⲁⲃ: ⲭ̅ⲉ̅  : ⲑ̀ⲙⲁⲩ ⲙ̀ⲫⲏⲉⲑⲟⲩⲁⲃ.</td>
        <td class="arabic">السلام لك يامريم: نعمة ابراهيم. السلام.. الاكليل غير المضمحل. السلام.. خلاص اسحق
            القديس. السلام.. أم القدوس.</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="north">
        <td class="english" >Hail to you Mary: the rejoicing of Jacob:
            Hail...: myriads of myriads: Hail...: the pride of Judah: Hail...: the mother of the Master.
        </td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲑⲉⲗⲏⲗ ⲛ̀Ⲓⲁⲕⲱⲃ: ⲭ̅ⲉ̅  :
            ϩⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲕⲱⲃ: ⲭ̅ⲉ̅  : ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀Ⲓⲟⲩⲇⲁ: ⲭ̅ⲉ̅  : ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲇⲉⲥⲡⲟⲧⲁ.</td>
        <td class="arabic">السلام لك يامريم: تهليل يعقوب. السلام.. ربوات مضاعفة. السلام.. فخر يهوذا. السلام..
            ام السيد.</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Hail to you Mary: the preaching of Moses:
            Hail...: the Mother of the Master: Hail...: the honor of Samuel: Hail...: the pride of Israel.
        </td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ϩⲓⲱⲓϣ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ: ⲭ̅ⲉ̅  :
            ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ⲭ̅ⲉ̅  : ⲡ̀ⲧⲁⲓⲟ̀ ⲛ̀Ⲥⲁⲙⲟⲩⲏⲗ: ⲭ̅ⲉ̅  ⲡ̀ϣⲟⲩϣⲟⲩ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ.</td>
        <td class="arabic">السلام لك يامريم: كرازة موسى. السلام.. والدة السيد. السلام.. كرامة صموئيل.
            السلام.. فخر اسرائيل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >Hail to you Mary: the steadfastness of
            Job the just : Hail...: the precious stone: Hail...: the Mother of the Beloved: Hail...: the
            daughter of King David.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲧⲁϫⲣⲟ ⲛ̀Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ:
            ⲭ̅ⲉ̅  : ⲡⲓⲱ̀ⲛⲓ ⲛ̀ⲁ̀ⲛⲁⲙⲏⲓ: ⲭ̅ⲉ̅  : ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲙⲉⲛⲣⲓⲧ: ⲭ̅ⲉ̅  : ⲧ̀ϣⲉⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ.</td>
        <td class="arabic">السلام لك يامريم: ثبات ايوب البار. السلام.. الحجر الكريم. السلام..أم الحبيب.
            السلام.. ابنة الملك داود.</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="south">
        <td class="english" >Hail to you Mary: the friend of Solomon:
            Hail...: the exaltation of the righteous: Hail...: the redemption of Isaiah: Hail...: the
            healing of Jeremiah.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ϯϣ̀ⲫⲉⲣⲓ ⲛ̀Ⲥⲟⲗⲟⲙⲱⲛ: ⲭ̅ⲉ̅  :
            ⲡ̀ϭⲓⲥⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲛ: ⲭ̅ⲉ̅  : ⲡ̀ⲟⲩϫⲁⲓ ⲛ̀Ⲏⲥⲁⲏⲁⲥ: ⲭ̅ⲉ̅  : ⲡ̀ⲧⲁⲗϭⲟ ⲛ̀Ⲓⲉⲣⲉⲙⲓⲁⲥ.</td>
        <td class="arabic">السلام لك يامريم: صديقة سليمان. السلام.. رفعة الصديقين. السلام.. خلاص أشعياء.
            السلام.. شفاء أرميا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="north">
        <td class="english" >Hail to you Mary: the knowledge of
            Ezekiel: Hail...: the grace of Daniel: Hail...: the power of Elijah: Hail...: the grace of
            Elisha.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲉⲙⲓ ⲛ̀Ⲓⲉⲍⲉⲕⲓⲏⲗ: ⲭ̅ⲉ̅  :
            ⲭⲁⲣⲓⲥ ⲧⲟⲩ Ⲇⲁⲛⲓⲏⲗ: ⲭ̅ⲉ̅  : ⲧ̀ϫⲟⲙ ⲛ̀Ⲏⲗⲓⲁⲥ: ⲭ̅ⲉ̅  : ⲡⲓϩ̀ⲙⲟⲧ ⲛ̀Ⲉⲗⲓⲥⲉⲟⲥ.</td>
        <td class="arabic">السلام لك يامريم: علم حزقيال. السلام.. نعمة دانيال. السلام..قوة ايليا. السلام..
            نعمة اليشع.</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Hail to you Mary: the Mother of God:
            Hail...: the mother of Jesus Christ: Hail...: the beautiful dove: Hail...: the mother of the Son
            of God.</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲭ̅ⲉ̅  : ⲑ̀ⲙⲁⲩ
            ⲛ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲭ̅ⲉ̅  :ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲭ̅ⲉ̅  : ⲑ̀ⲙⲁⲩ ⲛ̀Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ.</td>
        <td class="arabic">السلام لك يامريم: والدة الاله. السلام.. أم يسوع المسيح السلام.. الحمامة الحسناء.
            السلام..أم ابن الله.</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >Hail to you Mary: who was witnessed by:
            all the prophets: and they said:</td>
        <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲉ̀ⲧⲁⲩⲉⲣⲙⲉⲑⲣⲉ ⲛⲁⲥ: ⲛ̀ϫⲉ
            ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲧⲏⲣⲟⲩ: ⲟⲩⲟϩ ⲁⲩϫⲱ ⲙ̀ⲙⲟⲥ.</td>
        <td class="arabic">السلام لمريم: التى شهد لها: جميع الانبياء: وقالوا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >Behold God the Word: was incarnate of
            you: in an indescribable: unity.</td>
        <td class="coptic" >Ϩⲏⲡⲡⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ: ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ: ϧⲉⲛ
            ⲟⲩⲙⲉⲧⲟⲩⲁⲓ: ⲛ̀ⲁⲧⲥⲁϫⲓ ⲙ̀ⲡⲉⲥⲣⲏϯ.</td>
        <td class="arabic">هوذا الله الكلمة: الذى تجسد منك: بوحدانية: لاينطق بمثلها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >You are truly exalted: more than the rod:
            of Aaron: O full of grace.</td>
        <td class="coptic" >Ⲧⲉϭⲟⲥⲓ ⲁ̀ⲗⲏⲑⲱⲥ: ⲉ̀ϩⲟⲧⲉ ⲡⲓϣ̀ⲃⲱⲧ: ⲛ̀ⲧⲉ
            Ⲁⲁ̀ⲣⲱⲛ: ⲱ̀ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ.</td>
        <td class="arabic">مرتفعة أنت: بالحقيقة: أكثر من عصا هرون: أيتها الممتلئة نعمة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >What is the rod: but Mary: for it is the
            symbol: of her virginity.</td>
        <td class="coptic" >Ⲁϣⲡⲉ ⲡⲓϣ̀ⲃⲱⲧ: ⲉ̀ⲃⲏⲗ ⲉ̀Ⲙⲁⲣⲓⲁ̀: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ
            ⲡ̀ⲧⲩⲡⲟⲥ: ⲛ̀ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
        <td class="arabic">ماهى العصا: إلا مريم: لانها مثال: بتوليتها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >She conceived and gave birth: without a
            man: to the Son of the Highest: the Word Himself.</td>
        <td class="coptic" >Ⲁⲥⲉⲣⲃⲟⲕⲓ ⲁⲥⲙⲓⲥⲓ: ⲭⲱⲣⲓⲥ ⲥⲩⲛⲟⲩⲥⲓⲁ̀: ⲙ̀ⲡ̀ϣⲏⲣⲓ
            ⲙ̀ⲫⲏⲉⲧϭⲟⲥⲓ: ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲁⲓⲇⲓⲁ̀.</td>
        <td class="arabic">حبلت وولدت: بغير مباضعة: ابن العلى: الكلمة الذاتى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english" >Through her prayers: and intercessions: O
            Lord open onto us: the gates of the Church.</td>
        <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲉⲥⲉⲩⲭⲏ: ⲛⲉⲙ ⲛⲉⲥⲡ̀ⲣⲉⲥⲃⲓⲁ̀: ⲁ̀ⲟⲩⲱⲛ
            ⲛⲁⲛ Ⲡϭⲟⲓⲥ: ⲙ̀ⲫ̀ⲣⲟ ⲛ̀ⲧⲉ ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀</td>
        <td class="arabic">بصلواتها: وشفاعاتها: أفتح لنا يارب: باب الكنيسة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >I entreat You: O Mother of God: keep the
            gates of the church: open to the faithful.</td>
        <td class="coptic" >Ϯϯϩⲟ ⲉ̀ⲣⲟ: ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲭⲁ ⲫ̀ⲣⲟ
            ⲛ̀ⲛⲓⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀: ⲉϥⲟⲩⲏⲛ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ.</td>
        <td class="arabic">اسألك: ياوالدة الاله: اجعلى ابواب الكنائس: مفتوحة للمؤمنين.</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >Let us ask her: to intercede for us:
            before her beloved: that He may forgive us. ${cross}</td>
        <td class="coptic" >Ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲥ: ⲉⲑⲣⲉⲥⲧⲱⲃϩ ⲉ̀ϫⲱⲛ: ⲛⲁϩⲣⲉⲛ
            ⲡⲉⲥⲙⲉⲛⲣⲓⲧ: ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
        <td class="arabic">فلنسألها: أن تطلب عنا: عند حبيبها: ليغفر لنا. ${cross}</td>
    </tr>
</tbody>
</table>`
    return html;
}

function SundayTheotokia10Avmoti(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; Part 9">
<caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; Part 9
    <span class="coptic-caption">Ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟ</span>
    <span class="arabic-caption">ثيؤطوكية الاحد - الجزء التاسع</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >You are called: O Virgin Mary: the holy
            flower: of incense.</td>
        <td class="coptic" >Ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟ: Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ϯϩ̀ⲣⲏⲣⲓ
            ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ.</td>
        <td class="arabic">دعيت: يامريم العذراء: الزهرة المقدسة: التى للبخور.</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="south">
        <td class="english" >Which came out: and blossomed: from the
            roots of the patriarchs: and the prophets.</td>
        <td class="coptic" >Ⲑⲏⲉ̀ⲧⲁⲥϯⲟⲩⲱ̀ ⲉ̀ⲡ̀ϣⲱⲓ: ⲁⲥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ
            ⲑ̀ⲛⲟⲩⲛⲓ ⲛ̀ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
        <td class="arabic">التى طلعت: وازهرت: من أصل رؤساء: الآباء والأنبياء.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >Like the rod: of Aaron the priest: which
            blossomed: and brought forth fruit.</td>
        <td class="coptic" >Ⲙⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓϣ̀ⲃⲱⲧ: ⲛ̀ⲧⲉ Ⲁⲁ̀ⲣⲱⲛ ⲡⲓⲟⲩⲏⲃ:
            ⲉ̀ⲧⲁϥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ: ⲁϥⲟⲡⲧ ⲛ̀ⲕⲁⲣⲡⲟⲥ.</td>
        <td class="arabic">مثل عصا: هرون الكاهن: أزهرت: وأوسقت ثمراً.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >For you gave birth to the Word: without
            the seed of man: and your virginity: was not corrupted.</td>
        <td class="coptic" >Ϫⲉ ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲙ̀ⲡⲓⲗⲟⲅⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ
            ⲛ̀ⲣⲱⲙⲓ: ⲉⲥⲟⲓ ⲛ̀ⲁⲧⲧⲁⲕⲟ: ⲛ̀ϫⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
        <td class="arabic">لانك ولدت الكلمة: بغير زرع بشر: وبتوليتك بغير فساد.</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Wherefore we glorify you: as the Mother
            of God: ask your Son: to forgive us. ${cross}</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲉ: ϩⲱⲥ ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲙⲁϯϩⲟ
            ⲙ̀ⲡⲉϣⲏⲣⲓ: ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
        <td class="arabic">فلهذا نمجدك: كوالدة الاله. اسألى ابنك: ليغفر لنا. ${cross}</td>
    </tr>
</tbody>
</table>`
    return html;
}

function SundayTheotokia11TeoiEnHikanos(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; Part 10 Ⲧⲉⲟⲓⲛ̀ϩⲓⲕⲁⲛⲟⲥ">
<caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; Part 10 <br /><span
        class="coptic-caption">Ⲧⲉⲟⲓ ⲛ̀ϩⲓⲕⲁⲛⲟⲥ</span>
        <span class="arabic-caption">ثيوطوكية الأحد - الجزء العاشر</span>
    </caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >You are more worthy, than all of the
            saints, to pray on our behalf, O full of grace.</td>
        <td class="coptic" >Ⲧⲉⲟⲓ ⲛ̀ϩⲓⲕⲁⲛⲟⲥ : ⲉ̀ϩⲟⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ :
            ⲉⲑⲣⲉⲧⲱⲃϩ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ.</td>
        <td class="arabic">أنت مستحقة: اكثر من جميع القديسين: أن تطلبى عنا: ايتها الممتلئة نعمة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="south">
        <td class="english" >You are exalted, more than the
            patriarchs, and honored more, than the prophets.</td>
        <td class="coptic" >Ⲧⲉϭⲟⲥⲓ ⲉ̀ⲙⲁϣⲱ : ⲉ̀ϩⲟⲧⲉ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲟⲩⲟϩ
            ⲧⲉⲧⲁⲓⲏⲟⲩⲧ : ⲉ̀ϩⲟⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
        <td class="arabic">أنت مرتفعة جداً: أكثر من رؤساء الآباء. ومكرمة: أفضل من الانبياء.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >And you have a seeking, more special,
            than the Cherubim, and the Seraphim.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲧⲉ ϫⲓⲛⲙⲟϣⲓ : ϧⲉⲛ ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ̀: ⲉ̀ϩⲟⲧⲉ
            Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ : ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ.</td>
        <td class="arabic">ولك سعي: بدالة: أكثر من الشاروبيم: والسارافيم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >For you are truly, the pride of our race,
            and the intercessor, of our souls.</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ : ⲡⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ
            : ⲟⲩⲟϩ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ : ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ.</td>
        <td class="arabic">لانك أنت بالحقيقة: فخر جنسنا: وشفيعة: نفوسنا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Intercede for us, before our Savior, that
            He may keep us firm, in the upright faith.</td>
        <td class="coptic" > ̀Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϫⲱⲛ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ :
            ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲧⲁϫⲣⲟⲛ : ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ.</td>
        <td class="arabic">اشفعى فينا: أمام مخلصنا: لكى يثبتنا: فى الإيمان المستقيم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="south">
        <td class="english" >That He may grant us, the forgiveness of
            our sins, in order to win mercy, through your intercessions.</td>
        <td class="coptic" > ̀Ⲛⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ
            ⲛⲉⲛⲛⲟⲃⲓ : ⲛ̀ⲧⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀.</td>
        <td class="arabic">وينعم لنا: بمغفرة خطايانا. لنفوز برحمة: بشفاعاتك.</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="north">
        <td class="english" ><span class="title">11</span>All the high names, of the
            incorporeal, thousands of angels, and archangels.</td>
        <td class="coptic" ><span class="title">ⲓⲁ̅</span> Ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲉⲧϭⲟⲥⲓ : ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲥⲱⲙⲁⲧⲟⲥ :
            ⲛⲓⲁ̀ⲛⲁⲁⲛϣⲟ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.</td>
        <td class="arabic"><span class="title">۱۱</span> كل الاسماء العالية: التى لغير المتجسدين: الوف الملائكة: ورؤساء الملائكة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >They did not attain, your high
            blessedness, O who is clothed in, the glory of the Lord of Hosts.</td>
        <td class="coptic" >̀ Ⲙⲡⲟⲩϣ̀ⲫⲟϩ ⲉ̀ⲡ̀ϭⲓⲥⲓ : ⲛ̀ⲧⲉ ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ :
            ⲱ̀ ⲑⲏⲉⲧϫⲟⲗϩ ⲙ̀ⲡⲓⲱ̀ⲟⲩ : ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ.</td>
        <td class="arabic">لم يبلغوا عظمة: طوباوياتك: أيتها المشتملة بمجد: رب الجنود.</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >You are brighter, than the sun, and more
            sparkling, than the Cherubim.</td>
        <td class="coptic" >Ⲧⲉϩⲓⲁⲕⲧⲓⲛ ⲉ̀ⲃⲟⲗ : ⲉ̀ϩⲟⲧⲉ ⲫ̀ⲣⲏ : ⲧⲉⲟⲓ
            ⲛ̀ⲗⲁⲙⲡ̀ⲣⲟⲥ : ⲉ̀ϩⲟⲧⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
        <td class="arabic">أنت مضيئة: أكثر من الشمس: ولامعة أكثر: من الشاروبيم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="south">
        <td class="english" >And the Seraphim, with the six wings,
            which are joyfully, hovering over you.</td>
        <td class="coptic" >Ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛⲁ ⲡⲓⲥⲟⲟⲩ ⲛ̀ⲧⲉⲛϩ :
            ⲥⲉⲉⲣⲣⲓⲡⲓⲍⲓⲛ ϧⲁϫⲱ : ϧⲉⲛ ⲟⲩⲉ̀ϣ̀ⲗⲏⲗⲟⲩⲓ̀.</td>
        <td class="arabic">والسارافيم: ذوى الستة الأجنحة: يرفرفون: عليك بتهليل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="north">
        <td class="english" ><span class="title">12</span> Your glory O Mary, is higher than
            heaven, you are more honored than the earth, and its inhabitants.</td>
        <td class="coptic" ><span class="title">ⲓⲃ̅</span> Ⲡⲉⲱ̀ⲟⲩ Ⲙⲁⲣⲓⲁ̀ : ϭⲟⲥⲓ ⲉ̀ϩⲟⲧⲉ ⲧ̀ⲫⲉ :
            ⲧⲉⲧⲁⲓⲏⲟⲩⲧ ⲉ̀ⲡ̀ⲕⲁϩⲓ : ⲛⲉⲙ ⲛⲏⲉⲧϣⲟⲡ ⲛ̀ϧⲏⲧϥ.</td>
        <td class="arabic"><span class="title">۱۲</span> مجدك يامريم: أرفع من السماء: وأنت أكرم: من الأرض وسكانها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >For you are truly, the real path, leading
            up, to the heavens.</td>
        <td class="coptic" >̀ Ⲛⲑⲟ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ : ⲧⲉ ϯⲥⲧⲣⲁⲧⲁ ⲙ̀ⲙⲏⲓ :
            ⲉⲧⲟⲓ ⲙ̀ⲙⲁⲙ̀ⲙⲟϣⲓ : ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
        <td class="arabic">لانك أنت بالحقيقة: الطريق الحقيقى: المؤدى: إلى السموات.</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >You are clothed, with joy and gladness,
            and girdled with power, O daughter of Zion.</td>
        <td class="coptic" >̀ Ⲁⲣⲉϯϩⲓⲱ̀ϯ : ⲙ̀ⲫ̀ⲣⲁϣⲓ ⲛⲉⲙ ⲡ̀ⲑⲉⲗⲏⲗ :
            ⲁ̀ⲣⲉⲙⲟⲣϯ ⲛ̀ⲟⲩϫⲟⲙ : ⲱ̀ⲧ̀ϣⲏⲣⲓ ⲛ̀Ⲥⲓⲱⲛ.</td>
        <td class="arabic">لبست الفرح: والتهليل: وتمنطقت بالقوة: يا ابنة صهيون.</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="south">
        <td class="english" >O who was clothed, with the garments of
            the heavenly, so that you covered Adam, with the garments of grace.</td>
        <td class="coptic" > ̀Ⲱ ⲑⲏⲉ̀ⲧⲁⲥϯϩⲓⲱⲧⲥ : ⲛ̀ⲧ̀ϩⲉⲃⲥⲱ ⲛ̀ⲛⲁ
            ⲛⲓⲫⲏⲟⲩⲓ̀ : ϣⲁⲛ̀ⲧⲉⲥϩⲱⲃⲥ ⲛ̀Ⲁⲇⲁⲙ : ⲛ̀ⲧ̀ϩⲉⲃⲥⲱ ⲙ̀ⲡⲓϩ̀ⲙⲟⲧ.</td>
        <td class="arabic">يامن لبست: لباس السمائيين: حتى سترت آدم: بلباس النعمة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="north">
        <td class="english" >And restored him, to Paradise, the place
            of joy, and the dwelling of the righteous.</td>
        <td class="coptic" >Ⲁ̀ⲣⲉⲧⲁⲥⲑⲟϥ ⲛ̀ⲕⲉⲥⲟⲡ : ⲉ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ :
            ⲡ̀ⲧⲟⲡⲟⲥ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ : ⲫ̀ⲙⲁⲛ̀ϣⲱⲡⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
        <td class="arabic">وردته مرة أخرى: إلى الفردوس: موضع الفرح: ومسكن الصديقين.</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" ><span class="title">13</span> A true tabernacle, is Mary the Virgin,
            placed in its midst, the true testimonies.</td>
        <td class="coptic" ><span class="title">ⲓⲅ̅</span> Ⲟⲩⲥ̀ⲕⲏⲛⲏ ⲙ̀ⲙⲏⲓ : ⲧⲉ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
            ⲉⲩⲭⲏ ϧⲉⲛ ⲧⲉⲥⲙⲏϯ : ⲛ̀ϫⲉ ⲛⲓⲙⲉⲧⲙⲉⲑⲣⲉⲩ ⲉ̀ⲧⲉⲛϩⲟⲧ.</td>
        <td class="arabic"><span class="title">١٣</span> قبة حقيقية: هى مريم العذراء: موضوع فى وسطها: الشهادات الصادقة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >The undefiled Ark, overlaid roundabout
            with gold, and the Mercy Seat, of the Cherubim.</td>
        <td class="coptic" >Ϯⲕⲓⲃⲱⲧⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ : ⲉⲧⲟϣϫ ⲛ̀ⲛⲟⲩⲃ ⲛ̀ⲥⲁⲥⲁ
            ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲡⲓⲓ̀ⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ̀ ⲛ̀ⲭⲉⲣⲟⲩⲃⲓⲙⲓⲕⲟⲛ.</td>
        <td class="arabic">التابوت الغير الدنس: المصّفح بالذهب: من كل ناحية: والغطاء الكاروبى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="south">
        <td class="english" >The golden pot, where the manna was
            hidden, Behold the Word of the Father, came and was incarnate of you.</td>
        <td class="coptic" >Ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ ⲛ̀ⲛⲟⲩⲃ : ⲉ̀ⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ
            ⲛ̀ϧⲏⲧϥ : ⲓⲥ ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ ̀ Ⲫⲓⲱⲧ : ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ.</td>
        <td class="arabic">القسط الذهبى: المخفى فيه المن: هوذا كلمة الآب: أتى وتجسد منك.</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="north">
        <td class="english" >The golden lampstand, carrying the True
            Light, who is the unapproachable, Light of the world.</td>
        <td class="coptic" >Ϯⲗⲩⲭⲛⲓⲁ̀ ⲛ̀ⲛⲟⲩⲃ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ
            : ⲉ̀ⲧⲉ ⲫ̀ⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ : ⲡⲓⲁⲧϣ̀ϧⲱⲛⲧ ⲉ̀ⲣⲟϥ.</td>
        <td class="arabic">المنارة الذهبية: الحاملة النور الحقيقى: الذى هو نور العالم: الذى لا يُدنى منه.</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >The golden censer, carrying the live
            coal, and the chosen incense, with a rich aroma.</td>
        <td class="coptic" >Ϯϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϫⲉⲃⲥ ⲛ̀ⲭ̀ⲣⲱⲙ :
            ⲛⲉⲙ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ : ⲛ̀ⲁ̀ⲣⲱⲙⲁⲧⲁ.</td>
        <td class="arabic">المجمرة الذهبية: الحاملة جمر النار: والبخور المختار: العنبرى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >The rod of Aaron, that blossomed, and the
            holy flower, of incense.</td>
        <td class="coptic" >Ⲡⲓϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ ̀ Ⲁⲁ̀ⲣⲱⲛ : ⲉ̀ⲧⲁϥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ :
            ⲛⲉⲙ ϯϩ̀ⲣⲏⲣⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ.</td>
        <td class="arabic">عصا هارون: التى أزهرت: والزهرة المقدسة: التى للبخور.</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="south">
        <td class="english" >All these together, direct us to, the
            miraculous birth, O Virgin Mary.</td>
        <td class="coptic" >Ⲛⲁⲓ ⲧⲏⲣⲟⲩ ⲉⲩⲥⲟⲡ : ⲥⲉⲉⲣⲥⲩⲙⲙⲉⲛⲓⲛ ⲛⲁⲛ :
            ⲙ̀ⲡⲉϫⲓⲛⲙⲓⲥⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ : ⲱ̀Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
        <td class="arabic">هذه جميعها: معاً تدُلنا: على ولادتك العجيبة: يامريم العذراء.</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="north">
        <td class="english" ><span class="title">14</span> You decorated our souls, O Moses the
            prophet, by the honor of the Tabernacle, which you have adorned.</td>
        <td class="coptic" ><span class="title">ⲓⲇ̅</span> Ⲁⲕⲥⲟⲗⲥⲉⲗ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲱ̀Ⲙⲱⲩ̀ⲥⲏⲥ
            ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϧⲉⲛ ⲡ̀ⲧⲁⲓⲟ̀ ⲛ̀ϯⲥ̀ⲕⲏⲛⲏ : ⲉ̀ⲧⲁⲕⲥⲉⲗⲥⲱⲗⲥ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic"><span class="title">١٤</span> زينت نفوسنا: ياموسى النبى: بكرامة القبة: التى زينتها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >The first Tabernacle, which Moses had
            made, was the place of the forgiveness, for the children of Israel.</td>
        <td class="coptic" >Ϯⲥ̀ⲕⲏⲛⲏ ⲛ̀ϩⲟⲩⲓ̀ϯ : ⲉ̀ⲧⲁ Ⲙⲱⲩ̀ⲥⲏⲥ ⲑⲁⲙⲓⲟⲥ :
            ⲛ̀ⲟⲩⲙⲁⲛ̀ⲭⲁⲛⲟⲃⲓ ⲉ̀ⲃⲟⲗ : ⲛ̀ⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
        <td class="arabic">القبة الأولى: التى صنعها موسى: موضع مغفرة: خطايا بنى اسرائيل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >He made it with glory, as commanded by
            the Lord, and according to the patterns, shown unto him.</td>
        <td class="coptic" >Ⲁϥⲑⲁⲙⲓⲟⲥ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ : ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡϭⲟⲓⲥ
            : ⲛⲉⲙ ⲕⲁⲧⲁ ⲛⲓⲧⲩⲡⲟⲥ ⲧⲏⲣⲟⲩ : ⲉ̀ⲧⲁⲩⲧⲁⲙⲟϥ ⲉ̀ⲣⲱⲟⲩ.</td>
        <td class="arabic">صنعها بمجد: كقول الرب: وكجميع المُثل: التى أعلمه بها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="south">
        <td class="english" >There was an Ark, in the Tabernacle,
            overlaid with gold, within and without.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩⲕⲓⲃⲱⲧⲟⲥ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ ⲉⲥⲗⲁⲗⲏⲟⲩⲧ
            ⲛ̀ⲛⲟⲩⲃ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ.</td>
        <td class="arabic">كان فى القبة: تابوت مصّفح: بالذهب: من داخل ومن خارج.</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="north">
        <td class="english" >There was a Mercy Seat, in the
            Tabernacle, and the golden Cherubim, overshadowed it.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩⲓ̀ⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ :
            ϩⲁⲛⲬⲉⲣⲟⲩⲃⲓⲙ ⲛ̀ⲛⲟⲩⲃ : ⲥⲉⲉⲣϧⲏⲓⲃⲓ ⲉ̀ϫⲱϥ.</td>
        <td class="arabic">كان فى القبة: غطاء: وكاروبا ذهب: يظللان عليه.</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >There was a golden pot, in the
            Tabernacle, and a measure of the manna, was hidden in it.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩⲥ̀ⲧⲁⲙⲛⲟⲥ ⲛ̀ⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ :
            ⲉ̀ⲣⲉ ⲟⲩϣⲓⲙ̀ⲙⲁⲛⲛⲁ ϩⲏⲡ : ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧϥ.</td>
        <td class="arabic">كان فى القبة: قسط ذهبى: وكيل مّن: مخفى فيه.</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english" >There was a golden lampstand, in the
            Tabernacle, and the seven lamps, shown upon it.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩⲗⲩⲭⲛⲓⲁ̀ ⲛ̀ⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ :
            ⲉ̀ⲣⲉ ⲡⲓϣⲁϣϥ ⲛ̀ϧⲏⲃⲥ : ⲉ̀ⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ϫⲱⲥ.</td>
        <td class="arabic">كان فى القبة: منارة من ذهب: وسبعة سرج: تضئ عليها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="south">
        <td class="english" >There was a golden censer, in the
            Tabernacle, and the chosen aloe, was in its midst.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ :
            ⲉ̀ⲣⲉ ⲡⲓⲕⲩⲛⲁⲙⲱⲛⲟⲛ : ⲉⲧⲥⲱⲧⲡ ϧⲉⲛ ⲧⲉⲥⲙⲏϯ.</td>
        <td class="arabic">كان فى القبة: مجمرة من ذهب: والعود المختار: فى وسطها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="north">
        <td class="english" >There was a flower of incense, in the
            Tabernacle, smelled by all, the house of Israel.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩϩ̀ⲣⲏⲣⲓ ⲛ̀ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ : ⲭⲏ ϧⲉⲛ
            ϯⲥ̀ⲕⲏⲛⲏ : ⲉⲩϣⲱⲗⲉⲙ ⲉ̀ⲣⲟⲥ ⲧⲏⲣⲟⲩ : ⲛ̀ϫⲉ ⲛⲁ ⲡ̀ⲏⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
        <td class="arabic">كان فى القبة: زهرة بخور: يستنشق (رائحتها): جميع آل بيت اسرائيل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="south">
        <td class="english" >There was the rod of Aaron, in the
            Tabernacle, this which has blossomed, without planting or watering.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ̀ Ⲁⲁ̀ⲣⲱⲛ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ
            : ⲫⲁⲓ ⲉ̀ⲧⲁϥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ : ⲭⲱⲣⲓⲥ ϭⲟ ⲛⲉⲙ ⲧ̀ⲥⲟ.</td>
        <td class="arabic">كان فى القبة: عصا هرون: هذه التى أزهرت: بغير غرس ولاسقى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="north">
        <td class="english" >There was a golden table, in the
            Tabernacle, and the oblation bread, was placed upon it.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩⲧ̀ⲣⲁⲡⲉⲍⲁ ⲛ̀ⲛⲟⲩⲃ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ :
            ⲡ̀ⲱⲓⲕ ⲛ̀ϯⲡ̀ⲣⲟⲑⲉⲥⲓⲥ : ⲭⲏ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲥ.</td>
        <td class="arabic">كان فى القبة: مائده ذهبية: وخبز التقدمة: موضوعا عليها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_33" class="south">
        <td class="english" >There was an archpriest, in the
            Tabernacle, offering sacrifices, on account of the people's sins.</td>
        <td class="coptic" >Ⲟⲩⲟⲛ ⲟⲩⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ : ⲭⲏ ϧⲉⲛ ϯⲥ̀ⲕⲏⲛⲏ : ⲉϥⲉⲛ
            ϣⲟⲩϣⲱⲟⲩϣⲓ ⲉ̀ⲡ̀ϣⲱⲓ : ⲉ̀ϫⲉⲛ ⲛⲓⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ.</td>
        <td class="arabic">كان فى القبة: رئيس كهنة: يُصعد الذبائح: عن خطايا الشعب.</td>
    </tr>
    <tr id="table_${tableNumber}_row_34" class="north">
        <td class="english" >When the Almighty, smelled the aroma, He
            lifted up the sins, of the people.</td>
        <td class="coptic" >Ⲁϥϣⲁⲛϣⲱⲗⲉⲙ ⲉ̀ⲣⲟϥ : ⲛ̀ϫⲉ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ :
            ϣⲁϥⲱ̀ⲗⲓ ⲙ̀ⲙⲁⲩ : ⲛ̀ⲛⲓⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ.</td>
        <td class="arabic">إذا اشتم رائحتها: ضابط الكل: يرفع هنالك: خطايا الشعب.</td>
    </tr>
    <tr id="table_${tableNumber}_row_35" class="south">
        <td class="english" >Through Mary, the daughter of Joachim, we
            learned of the true sacrifice, for the forgiveness of sins.</td>
        <td class="coptic" > ̀Ⲉⲃⲟⲗϩⲓⲧⲉⲛ Ⲙⲁⲣⲓⲁ̀ : ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁ̀ⲕⲓⲙ :
            ⲁⲛⲥⲟⲩⲉⲛ ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ ⲙ̀ⲙⲏⲓ : ⲛ̀ⲭⲁⲛⲟⲃⲓ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic">من قبل مريم: ابنة يواقيم: عرفنا الذبيحة الحقيقية: لمغفرة الخطايا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_36" class="north">
        <td class="english" ><span class="title">15</span> Who can speak of, the honor of the
            Tabernacle, which was decorated, by the prophet.</td>
        <td class="coptic" ><span class="title">ⲓⲉ̅</span> Ⲛⲓⲙ ⲡⲉⲑⲛⲁϣ̀ⲥⲁϫⲓ : ⲙ̀ⲡ̀ⲧⲁⲓⲟ̀ ⲛ̀ϯⲥ̀ⲕⲏⲛⲏ
            : ⲉ̀ⲧⲁϥⲥⲉⲗⲥⲱⲗⲥ ⲉ̀ⲃⲟⲗ : ⲛ̀ϫⲉ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
        <td class="arabic"><span class="title">١٥</span> من يقدر أن يصف: كرامة القبة: التى زينها: النبى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_37" class="south">
        <td class="english" >When the chosen scholars, of the Holy
            Books, saw it, they were greatly amazed.</td>
        <td class="coptic" >̀ Ⲉⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲥ : ⲛ̀ϫⲉ ⲛⲓⲥⲱⲧⲡ ⲛ̀ⲥⲁϧ : ⲛ̀ⲧⲉ
            ⲛⲓⲅ̀ⲣⲁⲫⲏ ⲉⲑⲟⲩⲁⲃ : ⲁⲩϭⲓϣ̀ⲫⲏⲣⲓ ⲉ̀ⲙⲁϣⲱ.</td>
        <td class="arabic">لما رآها: المعلمون المختارون: للكتب المقدسة: تعجبوا جداً.</td>
    </tr>
    <tr id="table_${tableNumber}_row_38" class="north">
        <td class="english" >They thought, with their enlightened
            minds, and explained it, through the Holy Books.</td>
        <td class="coptic" >Ⲁⲩⲙⲟⲕⲙⲉⲕ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ⲡⲟⲩⲕⲁϯ ⲉⲧϣⲟⲙ :
            ⲁⲩⲉⲣⲙⲏⲛⲉⲩⲓⲛ ⲙ̀ⲙⲟⲥ : ϧⲉⲛ ⲛⲓⲅ̀ⲣⲁⲫⲏ ⲉⲑⲟⲩⲁⲃ.</td>
        <td class="arabic">وفكروا: بفهمهم السامي: وفسروها: من الكتب المقدسة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_39" class="south">
        <td class="english" >They called Mary, the daughter of
            Joachim, the True tabernacle, of the Lord of Hosts.</td>
        <td class="coptic" >Ⲁⲩⲙⲟⲩϯ ⲉ̀Ⲙⲁⲣⲓⲁ̀ : ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁ̀ⲕⲓⲙ : ϫⲉ
            ϯⲥ̀ⲕⲏⲛⲏ ⲙ̀ⲙⲏⲓ : ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ.</td>
        <td class="arabic">ودعوا مريم: ابنة يواقيم: القبة الحقيقية: التى لرب الجنود.</td>
    </tr>
    <tr id="table_${tableNumber}_row_40" class="north">
        <td class="english" >They likened the ark, to the Virgin, and
            its chosen gold, to her purity.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ϯⲕⲓⲃⲱⲧⲟⲥ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
            ⲡⲉⲥⲕⲉⲛⲟⲩⲃ ⲉⲧⲥⲱⲧⲡ : ϩⲓϫⲉⲛ ⲡⲉⲥⲧⲟⲩⲃⲟ.</td>
        <td class="arabic">شبهوا التابوت: بالعذراء: وذهبه المختار: بطهارتها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_41" class="south">
        <td class="english" >They likened the mercy seat, to the
            Virgin, and the cherubim of glory, overshadowing her.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ⲡⲓⲓ̀ⲗⲁⲥⲧⲏⲣⲓⲟⲛ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲓⲥ
            Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ : ⲥⲉⲉⲣϧⲏⲓⲃⲓ ⲉ̀ϫⲱⲥ.</td>
        <td class="arabic">شبهوا الغطاء: بالعذراء: وكاروبا المجد: يظللان عليها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_42" class="north">
        <td class="english" >They likened the golden pot, to the
            Virgin, and the measure of the manna, to our Savior.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ ⲛ̀ⲛⲟⲩⲃ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
            ⲡⲉϥⲕⲉϣⲓ ⲙ̀ⲙⲁⲛⲛⲁ : ϩⲓϫⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
        <td class="arabic">شبهوا القسط الذهبى: بالعذراء: وكيلة المن: بمخلصنا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_43" class="south">
        <td class="english" >They likened the golden candle stand, to
            the Church, and the seven lamps, to its seven orders.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ϯⲗⲩⲭⲛⲓⲁ̀ ⲛ̀ⲛⲟⲩⲃ : ϩⲓϫⲉⲛ ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ :
            ⲡⲉⲥⲕⲉ ϣⲁϣϥ ⲛ̀ϧⲏⲃⲥ : ϩⲓϫⲉⲛ ⲡⲓ ϣⲁϣϥ ⲛ̀ⲧⲁⲅⲙⲁ.</td>
        <td class="arabic">شبهوا المنارة الذهبية: بالكنيسة: وسُرجُها السبعة: بالسبع طغمات.</td>
    </tr>
    <tr id="table_${tableNumber}_row_44" class="north">
        <td class="english" >They likened the golden censer, to the
            Virgin, and its aloes, to Emmanuel.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ϯϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ : ϩⲓϫⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :
            ⲡⲉⲥⲕⲩⲛⲁⲙⲱⲛⲟⲛ : ϩⲓϫⲉⲛ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
        <td class="arabic">شبهوا المجمرة الذهبية: بالعذراء: وعنبرها: بعمانوئيل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_45" class="south">
        <td class="english" >They likened the flower of incense, to
            Mary the Queen, and the chosen incense, to her virginity.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ϯϩ̀ⲣⲏⲣⲓ ⲛ̀ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ: ϩⲓϫⲉⲛ Ⲙⲁⲣⲓⲁ̀
            ϯⲟⲩⲣⲱ : ⲡⲉⲥⲕⲉⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ : ϩⲓϫⲉⲛ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
        <td class="arabic">شبهوا زهرة البخور: بمريم الملكة: وبخورها المختار: ببتوليتها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_46" class="north">
        <td class="english" >They likened the rod of Aaron, to the
            wood of the cross, which my Lord was crucified upon, in order to save us.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ⲡϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ Ⲁⲁ̀ⲣⲱⲛ : ϩⲓϫⲉⲛ ⲡ̀ϣⲉ ⲛ̀ⲧⲉ
            ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ⲉ̀ⲧⲁⲩⲉϣ Ⲡⲁϭⲟⲓⲥ ⲉ̀ⲣⲟϥ : ϣⲁⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
        <td class="arabic">شبهوا عصا هرون: بخشبة الصليب: التى صُلب ربى عليها: حتى خلصنا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_47" class="south">
        <td class="english" >They likened the golden table, to the
            altar, and the oblation bread, to the body of the Lord.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ϯⲧ̀ⲣⲁⲡⲉⲍⲁ ⲛ̀ⲛⲟⲩⲃ: ϩⲓϫⲉⲛ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ
            : ⲡ̀ⲱⲓⲕ ⲛ̀ϯⲡ̀ⲣⲟⲑⲉⲥⲓⲥ : ϩⲓϫⲉⲛ ⲡ̀ⲥⲱⲙⲁ ⲙ̀Ⲡϭⲟⲓⲥ.</td>
        <td class="arabic">شبهوا المائدة الذهبية: بالمذبح: وخبز التقدمة: بجسد الرب.</td>
    </tr>
    <tr id="table_${tableNumber}_row_48" class="north">
        <td class="english" >They likened the archpriest, to our
            Savior, the true sacrifice, for the forgiveness of sins.</td>
        <td class="coptic" >Ⲁⲩⲉⲛ ⲡⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ : ϩⲓϫⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ :
            ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ ⲙ̀ⲙⲏⲓ : ⲛ̀ⲭⲁⲛⲟⲃⲓ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic">شبهوا رئيس الكهنة: بمخلصنا: الذبيحة الحقيقية: لمغفرة الخطايا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_49" class="south">
        <td class="english" >He who offered himself, as an acceptable
            sacrifice, upon the Cross, for the salvation of our race.</td>
        <td class="coptic" >Ⲫⲁⲓ ⲉ̀ⲧⲁϥⲉⲛϥ ⲉ̀ⲡ̀ϣⲱⲓ : ⲛ̀ⲟⲩⲑⲩⲥⲓⲁ̀ ⲉⲥϣⲏⲡ :
            ϩⲓϫⲉⲛ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ϧⲁ ⲡ̀ⲟⲩϫⲁⲓ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
        <td class="arabic">هذا الذى أصعد: ذاته ذبيحة مقبولة: على الصليب: عن خلاص جنسنا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_50" class="north">
        <td class="english" >His Good Father, smelled Him, in the
            evening, on Golgotha.</td>
        <td class="coptic" >Ⲁϥϣⲱⲗⲉⲙ ⲉ̀ⲣⲟϥ : ⲛ̀ϫⲉ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ :
            ⲙ̀ⲫ̀ⲛⲁⲩ ⲛ̀ⲧⲉ ϩⲁⲛⲁ̀ⲣⲟⲩϩⲓ : ϩⲓϫⲉⲛ Ϯⲅⲟⲗⲅⲟⲑⲁ.</td>
        <td class="arabic">فاشتمه: أبوه الصالح: وقت المساء: على الجلجلة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_51" class="south">
        <td class="english" >He opened the gate, of Paradise, and
            restored Adam, to his authority.</td>
        <td class="coptic" >Ⲁϥⲟⲩⲱⲛ ⲙ̀ⲫ̀ⲣⲟ : ⲙ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ : ⲁϥⲧⲁⲥⲑⲟ
            ⲛ̀̀ Ⲁⲇⲁⲙ : ⲉ̀ⲧⲉϥⲁⲣⲭⲏ ⲛ̀ⲕⲉⲥⲟⲡ.</td>
        <td class="arabic">فتح باب الفردوس: وردّ آدم: إلى رئاسته: مرة اخرى.</td>
    </tr>
    <tr id="table_${tableNumber}_row_52" class="north">
        <td class="english" >Through Mary, the daughter of Joachim, we
            learned of the true sacrifice, for the forgiveness of sins.</td>
        <td class="coptic" >̀ Ⲉⲃⲟⲗϩⲓⲧⲉⲛ Ⲙⲁⲣⲓⲁ̀ : ⲧ̀ϣⲏⲣⲓ ⲛ̀Ⲓⲱⲁ̀ⲕⲓⲙ :
            ⲁⲛⲥⲟⲩⲉⲛ ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ ⲙ̀ⲙⲏⲓ : ⲛ̀ⲭⲁⲛⲟⲃⲓ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic">من قبل مريم: ابنة يواقيم: عرفنا الذبيحة الحقيقية: لمغفرة الخطايا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_53" class="south">
        <td class="english" >And we also pray, that we may win mercy,
            through your intercessions, with the Lover of mankind. ${cross}</td>
        <td class="coptic" >̀ Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ :
            ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
        <td class="arabic">ونحن أيضاً: نطلب أن نفوز: برحمة بشفاعاتك: عند محب البشر. ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}

function SundayTheotokia12Nimghar(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Sixteenth Part">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Sixteenth Part
        <span class="coptic-caption">Ⲛⲓⲙ ⲅⲁⲣ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ</span>
        <span class="arabic-caption">القطعة السادسة عشر</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Who is likened unto You, O Lord among the gods, You are the true God, the Performer of miracles.</td>
            <td class="coptic">Ⲛⲓⲙ ⲅⲁⲣ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ: ⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ Ⲡ̀ϭⲟⲓⲥ: ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲉⲧⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛϣ̀ⲫⲏⲣⲓ</td>
            <td class="arabic">مَنْ في الآلهة، يشبهك يا رب، أنت هو الإله الحقيقي، الصانع العجائب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">You revealed Your power, to the people, and You saved Your people, with Your arm.</td>
            <td class="coptic">Ⲁⲕⲟⲩⲱⲛϩ ⲛ̀ⲧⲉⲕϫⲟⲙ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ: ⲁⲕⲥⲱϯ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉⲕϣⲱⲃϣ.</td>
            <td class="arabic">أظهرت قوتك، في الشعوب، وخلصت شعبك، بذراعك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You descended into Hades, and brought up, those who were captives, in that place.</td>
            <td class="coptic">Ⲁⲕϣⲉⲛⲁⲕ ⲉ̀Ⲁ̀ⲙⲉⲛϯ: ⲁⲕⲓ̀ⲛⲓ ⲉ̀ⲡ̀ϣⲱⲓ: ⲛ̀ϯⲉⲭⲙⲁⲗⲱⲥⲓⲁ: ϧⲉⲛ ⲡⲓⲙⲁ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">مضيت إلى الجحيم، وأصعدتَ، السبي من ذلك، المكان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">And granted us again, the freedom, as a good God, for You have risen and saved us.</td>
            <td class="coptic">Ⲁⲕⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲛ̀ⲕⲉⲥⲟⲡ: ⲛ̀ϯⲉ̀ⲗⲉⲩⲑⲉⲣⲓⲁ: ϩⲱⲥ Ⲛⲟⲩϯ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ ⲁⲕⲧⲱⲛⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">وأنعمت علينا، مرة أخرى بالحرية، كإله صالح، لأنك قُمت وخلصتنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The Seventeenth Part:</td>
            <td class="coptic">Ϯⲙⲁϩⲙⲏⲧϣⲁϣϥⲓ:</td>
            <td class="arabic">القطعة السابعة عشر:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Christ our God, has risen from the dead, He is the first-fruit, of those who departed.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲛ̀ⲑⲟϥ ⲡⲉ ⲧ̀ⲁ̀ⲡⲁⲣⲭⲏ: ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ.</td>
            <td class="arabic">المسيح إلهنا، قام من الأموات، وهو باكورة، الراقدين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">He appeared to Mary, Magdalene, and spoke to her, and likewise said.</td>
            <td class="coptic">Ⲁϥⲟⲩⲟⲛϩϥ ⲉ̀Ⲙⲁⲣⲓⲁ: Ϯⲙⲁⲅⲇⲁⲗⲓⲛⲏ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲁⲥ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">ظهر لمريم، المجدلية، وخاطبها، هكذا قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">"Tell My brethren, to proceed, to Galilee, and there they will see Me."</td>
            <td class="coptic">Ϫⲉ ⲙⲁⲧⲁⲙⲉ ⲛⲁⲥ̀ⲛⲏⲟⲩ: ϩⲓⲛⲁ ⲛ̀ⲧⲟⲩϣⲉⲛⲱⲟⲩ: ⲉ̀Ϯⲅⲁⲗⲓⲗⲉⲁ̀: ⲥⲉⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟⲓ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">"إعلمي إخوتي، أن يذهبوا، إلى الجليل، هناك يرونني."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">So Mary came forth, to the disciples, and told them she had seen the Lord, and that He told her so.</td>
            <td class="coptic">Ⲁⲥⲓ̀ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁ: ϣⲁ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲡⲉϫⲁⲥ ϫⲉ ⲁⲓⲛⲁⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ: ⲟⲩⲟϩ ⲛⲁⲓ ⲡⲉⲧⲁϥϫⲟⲧⲟⲩ ⲛⲁⲥ.</td>
            <td class="arabic">فجاءت مريم، إلى التلاميذ، وقالت أنها رأت الرب، وأنه قال لها هذا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">The Eighteenth Part:</td>
            <td class="coptic">Ϯⲙⲁϩⲙⲏⲧϣ̀ⲙⲏⲛⲓ:</td>
            <td class="arabic">القطعة الثامنة عشر:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Truly indeed, it was good caring, of the Saint Mary, Magdalene.</td>
            <td class="coptic">Ⲕⲁⲗⲱⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁⲥϣⲱⲡⲓ ϧⲉⲛ ⲟⲩϥⲓⲣⲱⲟⲩϣ: ⲛ̀ϫⲉ ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ: Ϯⲙⲁⲅⲇⲁⲗⲓⲛⲏ</td>
            <td class="arabic">كان بالحقيقة، إهتمام القديسة، مريم المجدلية، حسناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">She came to the grave, on one of the Sabbath days, seeking earnestly, the Resurrection of the Lord.</td>
            <td class="coptic">Ⲁⲥⲓ̀ ⲉ̀ⲡⲓⲙ̀ϩⲁⲩ: ϧⲉⲛ ⲫ̀ⲟⲩⲁⲓ ⲛ̀ⲧⲉ ⲛⲓⲥⲁⲃⲃⲁⲧⲟⲛ: ⲁⲥⲕⲱϯ ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲩⲇⲏ: ⲛ̀ⲥⲁ Ⲧ̀ⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲙ̀Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">في أحد السبوت، أتت إلى القبر، طالبة باجتهاد، قيامة الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">She saw the angel, sitting on the stone, proclaiming and saying, "He is risen He is not here."</td>
            <td class="coptic">Ⲁⲥⲛⲁⲩ ⲉ̀ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲉϥϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲡⲓⲱ̀ⲛⲓ: ⲉϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁϥⲧⲱⲛϥ ϥ̀ⲭⲏ ⲙ̀ⲡⲁⲓ ⲙⲁⲛ ⲁⲛ.</td>
            <td class="arabic">فرأت الملاك، جالساً على الحجر، صارخاً قائلاً، "قد قام ليس هو ههنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">Wherefore we glorify Him, proclaiming and saying, "Blessed are You O my Lord Jesus, for You have risen and saved us." ${cross}</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ϫⲉ ⲁⲕⲧⲱⲛⲕ ⲁⲕⲥⲱϯ. ${cross}</td>
            <td class="arabic">فلهذا نمجده، صارخين قائلين، "مبارك أنت يا ربي يسوع، لأنك قُمت وخلصتنا." ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


function TheMondayTheotokia_Adam(tableNumber) {
    const lobsh = TheMondayTheotokia_Lobsh(tableNumber + 1);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Monday Theotokia - Adam">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Monday Theotokia - Adam
        <span class="coptic-caption">Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ⲥ̀ⲛⲁⲩ - Ⲁ̀ⲇⲁⲙ ⲉ̀ⲧⲓ ⲉϥⲟⲓ</span>
        <span class="arabic-caption">ثيؤطوكية الإثنين - أدآم</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The First Part</td>
            <td class="coptic">Ϯϩⲟⲩⲓϯ</td>
            <td class="arabic">القطعة الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">While Adam was sad, God was pleased, to bring him back, to his authority.</td>
            <td class="coptic">Ⲁ̀ⲇⲁⲙ ⲉ̀ⲧⲓ ⲉϥⲟⲓ: ⲛ̀ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ: ⲁϥϯⲙⲁϯ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ: ⲉ̀ⲧⲁⲥⲑⲟϥ ⲉ̀ⲧⲉϥⲁⲣⲭⲏ.</td>
            <td class="arabic">آدم بينما، هو حزين، سُرَّ الربُّ أن يردُّه، إلى رئاسته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="refrain">
            <td class="english">The Second Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ</td>
            <td class="arabic">القطعة الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Eve who was tempted, by the serpent, was condemned, by the Lord.</td>
            <td class="coptic">Ⲉ̀ⲩⲁ ⲑⲏⲉ̀ⲧⲁϥⲉⲣϩⲁⲗ ⲙ̀ⲙⲟⲥ: ⲛ̀ϫⲉ ⲡⲓϩⲟϥ: ⲁⲥϭⲓ ⲁ̀ⲡⲟⲫⲁⲥⲓⲥ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">حواء التي، أغرتها الحية، حُكم عليها، من قِبَل الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">“For in abundance, I will greatly multiply, your sorrows, and your sighs.”</td>
            <td class="coptic">Ϫⲉ ϧⲉⲛ ⲟⲩⲁ̀ϣⲁⲓ: ϯⲛⲁⲑ̀ⲣⲟⲩⲁ̀ϣⲁⲓ: ⲛ̀ϫⲉ ⲛⲉⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ: ⲛⲉⲙ ⲛⲉϥⲓⲁϩⲟⲙ.</td>
            <td class="arabic">"إن بالكثرة، أُكثِر، أحزانِك، وتنهداتِك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Yet God felt compassionate, through his love for man, and was pleased, to free her once again.</td>
            <td class="coptic">Ⲁϥϣⲉⲛϩⲏⲧ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ: ⲁϥϯⲙⲁϯ ⲛ̀ⲕⲉⲥⲟⲡ: ⲉ̀ⲁⲓⲥ ⲛ̀ⲣⲉⲙϩⲉ.</td>
            <td class="arabic">تحنَّن الرب، من قِبَل محبته للبشر، وسُرَّ مرة أخرى، بعتقها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="refrain">
            <td class="english">The Third Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲟⲙϯ</td>
            <td class="arabic">القطعة الثالثة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Jesus Christ the Word, who came and took flesh, He dwelt in us, and we saw His glory.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲗⲟⲅⲟⲥ: ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ: ⲁϥϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲉⲛ: ⲁⲛⲛⲁⲩ ⲉ̀ⲡⲉϥⲱ̀ⲟⲩ.</td>
            <td class="arabic">يسوع المسيح الكلمة، الذي تجسد، وحلَّ فينا، ورأينا مجده.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Like the glory of the only Son, of His Father, He was pleased, to redeem us.</td>
            <td class="coptic">Ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡ̀ⲱ̀ⲟⲩ: ⲛ̀Ⲟⲩϣⲏⲣⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ: ⲛ̀ⲧⲟⲧϥ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲁϥϯⲙⲁϯ ⲉ̀ⲫ̀ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic">مثل مجد، إبن وحيد لأبيه، قد سُرَّ، أن يخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="refrain">
            <td class="english">The Fourth Part</td>
            <td class="coptic">Ϯⲙⲁϩϥ̀ⲧⲟ</td>
            <td class="arabic">القطعة الرابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">(Isaiah) has seen, the mystery, of Emmanuel, with prophetic insight.</td>
            <td class="coptic">Ⲛⲁϥⲛⲁⲩ ϧⲉⲛ ⲛⲓⲃⲁⲗ: ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ: ⲉ̀ⲡⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">كان ينظر، بأعين النبوة، إلى سر، عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Therefore Isaiah, the great prophet, cried out proclaiming, and saying.</td>
            <td class="coptic">Ⲛ̀ϫⲉ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ: ⲡⲓⲛⲓϣϯ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲱϣ ⲉ̀ⲃⲟⲗ: ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">أشعياء، النبي العظيم، فلهذا صرخ، قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">“For unto us a Child is born, unto us a Son is given, the government shall be, upon His shoulder.</td>
            <td class="coptic">Ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲟⲩⲁ̀ⲗⲟⲩ: ⲁⲩϯ ⲛⲁⲛ ⲛ̀Ⲟⲩϣⲏⲣⲓ: ⲫⲏⲉⲧⲉ̀ⲣⲉ ⲧⲉϥⲁⲣⲭⲏ: ⲭⲏ ϩⲓϫⲉⲛ ⲧⲉϥⲛⲁϩⲃⲓ.</td>
            <td class="arabic">"إنه وُلِدَ لنا ولدٌ، وأُعطينا أبناً، رئاسته، على كتفه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">The powerful God, of authority, and the Angel of, the great counsel.”</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲫⲏⲉⲧϫⲟⲣ: ⲛ̀ⲉⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲟⲩⲟϩ Ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲥⲟϭⲛⲓ.</td>
            <td class="arabic">الإله القوي، المتسلط، وملاكُ المشورة، العُظمى."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="refrain">
            <td class="english">The Fifth Part</td>
            <td class="coptic">Ϯⲙⲁϩϯ</td>
            <td class="arabic">القطعة الخامسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="north">
            <td class="english">Rejoice and be happy, O human race, for God so revealed, His love to the world.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲣⲱⲙⲓ: ϫⲉ ⲡⲁⲓⲣⲏϯ ⲁ̀ Ⲫ̀ⲛⲟⲩϯ: ⲙⲉⲛⲣⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">إفرحوا وتهللوا، يا جنس البشر، لأنه هكذا، أحب الله العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="south">
            <td class="english">That He gave, His beloved Son, for those who believe in Him, so that they may live forever.</td>
            <td class="coptic">Ϩⲱⲥⲧⲉ ⲛ̀ⲧⲉϥϯ: ⲙ̀Ⲡⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ: ϧⲁ ⲛⲏⲉⲑⲛⲁϩϯ ⲉ̀ⲣⲟϥ: ⲉⲑⲣⲟⲩⲱⲛϧ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">حتى بذل، إبنه الحبيب، عن المؤمنين به، لكي يحيوا إلى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">For He was overcome, by His compassion, and sent unto us, His almighty arm.</td>
            <td class="coptic">Ⲁⲩϭⲣⲟ ⲅⲁⲣ ⲉ̀ⲣⲟϥ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ: ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲣⲡ ⲛⲁⲛ: ⲙ̀ⲡⲉϥϫ̀ⲫⲟⲓ ⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">لأنه غُلِب، من رأفته، وأرسل لنا، ذراعه العالية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="refrain">
            <td class="english">The Sixth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥⲟ</td>
            <td class="arabic">القطعة السادسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">He who is, and who was, who has come, who is to come again.</td>
            <td class="coptic">Ⲫⲏⲉⲧϣⲟⲡ: ⲫⲏⲉ̀ⲛⲁϥϣⲟⲡ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀: ⲡⲁⲗⲓⲛ ⲟⲛ ϥ̀ⲛⲏⲟⲩ.</td>
            <td class="arabic">الكائن، الذي كان، الذي أتى، وأيضاً يأتي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">Jesus Christ the Word, who was incarnate, without alteration, became a perfect man.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲗⲟⲅⲟⲥ: ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃⲧ: ⲁϥϣⲱⲡⲓ ⲛ̀ⲣⲱⲙⲓ ⲛ̀ⲧⲉⲗⲓⲟⲥ.</td>
            <td class="arabic">يسوع المسيح الكلمة، الذي تجسد، بغير تغيير، وصار إنساناً كاملاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english">Without alteration of His being, or mingling or separation, of any kind, after the unity.</td>
            <td class="coptic">Ⲙ̀ⲡⲉϥϫⲱϣ ⲙ̀ⲡⲉϥⲑⲱϧ: ⲟⲩⲇⲉ ⲙ̀ⲡⲉϥⲫⲱⲣϫ: ⲕⲁⲧⲁ ϩ̀ⲗⲓ ⲛ̀ⲥ̀ⲙⲟⲧ: ⲙⲉⲛⲉⲛⲥⲁ ϯⲙⲉⲧⲟⲩⲁⲓ.</td>
            <td class="arabic">لم يفض ولم يختلط، ولم يفترق، بشئ من الأنواع، من بعد الإتحاد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">But He is of one nature, one hypostasis, and one person, for God the Word.</td>
            <td class="coptic">Ⲁⲗⲗⲁ ⲟⲩⲫⲩⲥⲓⲥ ⲛ̀ⲟⲩⲱⲧ: ⲟⲩϩⲩⲡⲟⲥⲧⲁⲥⲓⲥ ⲛ̀ⲟⲩⲱⲧ: ⲟⲩⲡ̀ⲣⲟⲥⲟ̀ⲡⲟⲛ ⲛ̀ⲟⲩⲱⲧ: ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">بل بطبيعة واحدة، وأُقنوم واحد، وشخص واحد، لله الكلمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="refrain">
            <td class="english">The Seventh Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲁϣϥⲓ</td>
            <td class="arabic">القطعة السابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">Hail to Bethlehem, the city of the prophets, in which was born Christ, the second Adam.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲃⲏⲑⲗⲉⲉⲙ: ⲧ̀ⲡⲟⲗⲓⲥ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲑⲏⲉ̀ⲧⲁⲩⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲛ̀ϧⲏⲧⲥ: ⲡⲓⲙⲁϩⲥ̀ⲛⲁⲩ ⲛ̀Ⲁ̀ⲇⲁⲙ.</td>
            <td class="arabic">السلام لبيت لحم، مدينة الأنبياء، التي وُلِدَ فيها المسيح، آدم الثاني.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="north">
            <td class="english">In order to bring Adam, the first man, who was made of dust, back to Paradise.</td>
            <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲧⲁⲑⲥⲟ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲡⲓϩⲟⲩⲓⲧ ⲛ̀ⲣⲱⲙⲓ: ⲡⲓⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ: ⲉ̀Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
            <td class="arabic">لكي يرد آدم، الإنسان الأول، الترابي، إلى الفردوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="south">
            <td class="english">And to absolve, the decree of death saying, “Adam you are from dust, and to dust you shall return.”</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲃⲱⲗ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲧ̀ⲁ̀ⲡⲟⲫⲁⲥⲓⲥ ⲙ̀ⲫ̀ⲙⲟⲩ: ϫⲉ Ⲁ̀ⲇⲁⲙ ⲛ̀ⲑⲟⲕ ⲟⲩⲕⲁϩⲓ: ⲭ̀ⲛⲁⲧⲁⲥⲑⲟⲕ ⲉ̀ⲡ̀ⲕⲁϩⲓ.</td>
            <td class="arabic">ويحل قضية الموت، "إنك يا آدم، أنت تراب وإلى، التراب تعود."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="north">
            <td class="english">For in the place, where sin has abounded, the grace of Christ, has abounded more.</td>
            <td class="coptic">Ⲡⲓⲙⲁ ⲅⲁⲣ ⲉ̀ⲧⲁϥⲁ̀ϣⲁⲓ: ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ⲫ̀ⲛⲟⲃⲓ: ⲁϥⲉⲣϩⲟⲩⲟ̀ ⲁ̀ϣⲁⲓ ⲛ̀ϧⲏⲧϥ: ⲛ̀ϫⲉ ⲡⲓϩ̀ⲙⲟⲧ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">لأن الموضع، الذي كثرت فيها الخطية، تفاضلت فيه، نعمة المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_34" class="south">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="refrain">
            <td class="english">The Eighth Part</td>
            <td class="coptic">Ϯⲙⲁϩϣ̀ⲙⲏⲛⲓ</td>
            <td class="arabic">القطعة الثامنة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_36" class="north">
            <td class="english">All the souls, rejoice and sing, with the angels, and praise Christ the King.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲣⲁϣⲓ: ⲟⲩⲟϩ ⲥⲉⲉⲣⲭⲱⲣⲉⲩⲓⲛ: ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀Ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">كل الأنفس، تفرح وترتل، مع الملائكة، مُسبحين الملك المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_37" class="south">
            <td class="english">Proclaiming and saying, “Glory to God in the highest, peace on earth, and goodwill toward men.”</td>
            <td class="coptic">Ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">وصارخين قائلين، "المجد لله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_38" class="north">
            <td class="english">For He has destroyed, the middle wall, and killed the enmity, with perfection.</td>
            <td class="coptic">Ϫⲉ ⲁϥⲃⲱⲗ ⲅⲁⲣ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲡⲓϫⲓⲛⲓ̀ ⲉ̀ⲑ̀ⲙⲏϯ: ⲁϥϧⲱⲧⲉⲃ ϧⲉⲛ ⲟⲩϫⲱⲕ: ⲛ̀ϯⲙⲉⲧϫⲁϫⲓ.</td>
            <td class="arabic">لأنه حلَّ، الحاجز، وقتل العداوة، بالكمال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_39" class="south">
            <td class="english">He has torn, the verdict of slavery, pronounced on Adam and Eve, and He freed them.</td>
            <td class="coptic">Ⲁϥⲫⲱϧ ⲙ̀ⲡⲓⲥ̀ϧⲓ ⲛ̀ϫⲓϫ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲃⲱⲕ: ⲛ̀ⲧⲉ Ⲁ̀ⲇⲁⲙ ⲛⲉⲙ Ⲉ̀ⲩⲁ: ⲁϥⲁⲓⲧⲟⲩ ⲛ̀ⲣⲉⲙϩⲉ.</td>
            <td class="arabic">ومزَّق كتاب، يد العبودية، التي لآدم وحواء، وحررهما.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_40" class="north">
            <td class="english">He who was born for us, in the city of David, is our Savior Jesus, as the angel said.</td>
            <td class="coptic">Ⲛ̀ϫⲉ ⲫⲏⲉ̀ⲧⲁϥⲙⲁⲥϥ ⲛⲁⲛ: ϧⲉⲛ ⲑ̀ⲃⲁⲕⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">الذي وُلِدَ لنا، في مدينة داود، مُخلِّصنا يسوع، كقول الملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_41" class="south">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_42" class="refrain">
            <td class="english">The Ninth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲯⲓϯ</td>
            <td class="arabic">القطعة التاسعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_43" class="north">
            <td class="english">God is light, He abides in light, and the angels of light, sing unto Him.</td>
            <td class="coptic">Ⲟⲩⲟⲩⲱⲓⲛⲓ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ: ⲉϥϣⲱⲡ ϧⲉⲛ ⲡⲓⲟⲩⲱⲓⲛⲓ: ϩⲁⲛⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲟⲩⲱⲓⲛⲓ: ⲉⲧⲉⲣϩⲩⲙⲛⲟⲥ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">الله هو نور، وساكن في النور، تسبحه، ملائكة النور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_44" class="south">
            <td class="english">The Light has shone, from Mary, and Elizabeth, gave birth to the forerunner.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲟⲩⲱⲓⲛⲓ ϣⲁⲓ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲙⲁⲣⲓⲁ: ⲁ̀ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ ⲙⲓⲥⲓ: ⲙ̀ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ.</td>
            <td class="arabic">النور أشرق، من مريم، وأليصابات، ولدت السابق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_45" class="north">
            <td class="english">The Holy Spirit, woke up in David, and said “Arise and sing, for the Light has shone.”</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲛⲉϩⲥⲓ ϧⲉⲛ Ⲇⲁⲩⲓⲇ: ϫⲉ ⲧⲱⲛⲕ ⲁ̀ⲣⲓⲯⲁⲗⲓⲛ: ϫⲉ ⲁ̀ Ⲡⲓⲟⲩⲱⲓⲛⲓ ϣⲁⲓ.</td>
            <td class="arabic">الرُّوح القُدُس، أيقظ داود قائلاً، "قم رتِّل لأن، النور قد أشرق."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_46" class="south">
            <td class="english">So David the psalmist, and the holy one, rose up and took his, spiritual harp.</td>
            <td class="coptic">Ⲁϥⲧⲱⲛϥ ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ: ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ⲉⲑⲟⲩⲁⲃ: ⲁϥϭⲓ ⲛ̀ⲧⲉϥⲕⲩⲑⲁⲣⲁ: ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">فقام داود، المُرتِّل القديس، وأخذ قيثارته، الروحية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_47" class="north">
            <td class="english">He went to the church, the house of the angels, he praised and chanted to, the Holy Trinity.</td>
            <td class="coptic">Ⲁϥϩⲱⲗ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲡ̀ⲏⲓ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲁϥϩⲱⲥ ⲁϥⲉⲣϩⲩⲙⲛⲟⲥ: ⲉ̀Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">ومضى إلى البيعة، بيت الملائكة، فسبَّح ورتَّل، للثالوث القدوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_48" class="south">
            <td class="english">Saying “In Your light, O Lord we will see light, let Your mercy come, to those who know You.”</td>
            <td class="coptic">Ϫⲉ ϧⲉⲛ ⲡⲉⲕⲟⲩⲱⲓⲛⲓ: Ⲡ̀ϭⲟⲓⲥ ⲉⲛⲉ̀ⲛⲁⲩ ⲉ̀ⲟⲩⲱⲓⲛⲓ: ⲙⲁⲣⲉϥⲓ̀ ⲛ̀ϫⲉ ⲡⲉⲕⲛⲁⲓ: ⲛ̀ⲛⲏⲉⲧⲥⲱⲟⲩⲛ ⲙ̀ⲙⲟⲕ.</td>
            <td class="arabic">قائلاً "بنورك، يا رب نعاين نوراً، فلتأت رحمتك، للذين يعرفونك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_49" class="north">
            <td class="english">O true Light, that shines upon, every man, that comes into the world.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲫⲏⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ: ⲉ̀ⲣⲱⲙⲓ ⲛⲓⲃⲉⲛ: ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">أيها النور الحقيقي، الذي يضئ، لكل إنسان، آتياً إلى العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_50" class="south">
            <td class="english">You have come into the world, through Your love for man, and all the creation, rejoiced at Your coming.</td>
            <td class="coptic">Ⲁⲕⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ: ⲁ̀ ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: ⲑⲉⲗⲏⲗ ϧⲁ ⲡⲉⲕϫⲓⲛⲓ̀.</td>
            <td class="arabic">أتيت إلى العالم، بمحبتك للبشر، وكل الخليقة، تهللت بمجيئك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_51" class="north">
            <td class="english">You have saved Adam, from the seduction, and delivered Eve, from the pangs of death.</td>
            <td class="coptic">Ⲁⲕⲥⲱϯ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲁ̀ⲡⲁⲧⲏ: ⲁⲕⲉⲣ Ⲉ̀ⲩⲁ ⲛ̀ⲣⲉⲙϩⲉ: ϧⲉⲛ ⲛⲓⲛⲁⲕϩⲓ ⲛ̀ⲧⲉ ⲫ̀ⲙⲟⲩ.</td>
            <td class="arabic">خلَّصت آدم، من الغواية، وعتقت حواء، من طلقات الموت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_52" class="south">
            <td class="english">You gave unto us, the Spirit of sonship, we praise and bless You, with Your angels.</td>
            <td class="coptic">Ⲁⲕϯ ⲛⲁⲛ ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ: ⲛ̀ⲧⲉ ϯⲙⲉⲧϣⲏⲣⲓ: ⲉⲛϩⲱⲥ ⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">أعطيتنا، روح البنوة، نُسبحك ونُباركك، مع ملائكتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_53" class="north">
            <td class="english">He shone in the flesh, taken from the Virgin, without the seed of man, in order to save us. ${cross}</td>
            <td class="coptic">Ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">أشرق جسدياً، من العذراء، بغير زرع بشرٍ، حتى خلصنا. ${cross}</td>
        </tr>
        </tbody>
</table>
${lobsh}

`;
 return html;
}

function TheMondayTheotokia_Lobsh(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Monday Theotokia - Lobsh">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Monday Theotokia - Lobsh
        <span class="coptic-caption">Ⲡⲓⲗⲱⲃϣ ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ⲥ̀ⲛⲁⲩ</span>
        <span class="arabic-caption">لُبش ثيؤطوكية الإثنين</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">My weak and sinful tongue, is not able, to speak of, your honor O Mary.</td>
            <td class="coptic">Ⲡⲁⲗⲁⲥ ⲅⲁⲣ ⲉⲧϫⲱϫⲉⲃ: ⲟⲩⲟϩ ⲛ̀ⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲛⲁϣ̀ϫⲉⲙϫⲟⲙ ⲁⲛⲉ̀ⲥⲁϫⲓ: ⲙ̀ⲡⲉⲧⲁⲓⲟ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">لسانى الضعيف، الخاطئ لا يقدر، أن ينطق، بكرامتِك يا مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Adam our father, the first creation, by the hands of God, the Creator.</td>
            <td class="coptic">Ⲁ̀ⲇⲁⲙ ⲅⲁⲣ ⲡⲉⲛⲓⲱⲧ: ⲡⲓϣⲟⲣⲡ ⲛ̀ⲑⲁⲙⲓⲟ: ϧⲉⲛ ⲛⲉⲛϫⲓϫ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲡⲓⲇⲏⲙⲓⲟⲩⲣⲅⲟⲥ.</td>
            <td class="arabic">لأن آدم، أبانا المخلوق، الأول بيدي، الله الخالق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Through the advice of Eve, our first mother, Adam ate from, the fruit of the tree.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲡ̀ⲥⲟϭⲛⲓ ⲛ̀Ⲉ̀ⲩⲁ: ⲧⲉⲛϣⲟⲣⲡⲓ ⲙ̀ⲙⲁⲩ: ⲁϥⲟⲩⲱⲙ ⲛ̀ϫⲉ Ⲁ̀ⲇⲁⲙ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲟⲩⲧⲁϩ ⲙ̀ⲡⲓϣ̀ϣⲏⲛ.</td>
            <td class="arabic">بمشورة حواء، أُمنا الأولى، أكل آدم من، ثمرة الشجرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">So came to our race, and all the creation, the authority of death, and corruption.</td>
            <td class="coptic">Ⲁϥⲓ̀ ϩⲓϫⲉⲛ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲛⲉⲙ ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: ⲛ̀ϫⲉ ⲡⲓⲉⲣϣⲓϣⲓ: ⲛ̀ⲧⲉ ⲫ̀ⲙⲟⲩ ⲛⲉⲙ ⲡ̀ⲧⲁⲕⲟ.</td>
            <td class="arabic">فجاء على جنسنا، وكل الخليقة، سلطان الموت، والفساد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Through Mary, the Theotokos, Adam was restored again, to his authority.</td>
            <td class="coptic">Ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲙⲁⲣⲓⲁ: Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲁⲩⲧⲁⲥⲑⲟ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲉ̀ⲧⲉϥⲁⲣⲭⲏ ⲛ̀ⲕⲉⲥⲟⲡ.</td>
            <td class="arabic">ومن قِبَل مريم، والدة الإله، أُرجع آدم إلى، رئاسته دفعةً أخرى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The two exalted kings, David and Solomon, sing unto her, and honor her.</td>
            <td class="coptic">Ⲓⲥ ⲛⲓⲟⲩⲣⲱⲟⲩ ⲉⲧϭⲟⲥⲓ: Ⲇⲁⲩⲓⲇ ⲛⲉⲙ Ⲥⲟⲗⲟⲙⲱⲛ: ⲉⲩⲉⲣϩⲩⲙⲛⲟⲥ ⲉ̀ⲣⲟⲥ: ⲉⲩϯⲧⲁⲓⲟ ⲛⲁⲥ.</td>
            <td class="arabic">ها أن الملكين العاليين، داود وسليمان، يرتلان لها، ويكرمانها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">David the prophet, spoke of her honor, and called her, “The city of God.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲥⲁϫⲓ ⲉ̀ⲡⲉⲥⲧⲁⲓⲟ: ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲟⲥ: ϫⲉ ϯⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">داود النبي، تكلم بكرامتها، ودعاها، "مدينة الله."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">And also Solomon, the Ecclesiastes, this is what he says, in the Song of Songs.</td>
            <td class="coptic">Ⲥⲟⲗⲟⲙⲱⲛ ⲇⲉ ⲟⲛ: ⲡⲓⲉⲕⲕⲗⲏⲥⲓⲁⲥⲧⲏⲥ: ϧⲉⲛ ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲛⲓϫⲱ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">وأيضاً سليمان، الجامعة، هكذا يقول في، نشيد الأناشيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">“My sister and my spouse, the perfect one, the smell of your garments, is an aroma.”</td>
            <td class="coptic">Ϫⲉ ⲧⲁⲥⲱⲛⲓ ⲧⲁϣ̀ⲫⲉⲣⲓ: ⲑⲏⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲡⲓⲥ̀ⲑⲟⲓ ⲛ̀ⲧⲉ ⲛⲉϩ̀ⲃⲱⲥ: ⲟⲩⲁ̀ⲣⲱⲙⲁⲧⲁ ⲡⲉ.</td>
            <td class="arabic">"يا أختي وخليلتي، الكاملة، رائحة ثيابك، هي عنبر."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">O all you virgins, love purity, in order to become daughters, of Saint Mary.</td>
            <td class="coptic">Ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ: ⲙⲉⲛⲣⲉ ⲡⲓⲧⲟⲩⲃⲟ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲧⲉⲛϣⲱⲡⲓ ⲛ̀ϣⲉⲣⲓ: ⲛ̀ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">يا جميع العذارى، أحببنَّ الطهارة، لكي تصرنَّ بنات، للقديسة مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">For through her, all women, find favor, before the Lord.</td>
            <td class="coptic">Ϫⲉ ⲟⲩⲏⲓ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲥ: ⲁ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓϩⲓⲟⲙⲓ: ϫⲓⲙⲓ ⲛ̀ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">لأن من قِبَلها، وجدت النساء، دالةً، أمام الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">And we too, hope to win mercy, through your intercessions, with the Lover of Mankind. ${cross}</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ: ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ: ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲛ̀ⲧⲟⲧϥ ⲙ̀Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
            <td class="arabic">ونحن أيضاً نطلب، أن نفوز برحمةٍ، بشفاعاتِك، عند محب البشر. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


function TheTuesdayTheotokia_Adam(tableNumber) {
    const lobsh = TheTuesdayTheotokia_Lobsh(tableNumber + 1);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Tuesday Theotokia - Adam">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Tuesday Theotokia - Adam
        <span class="coptic-caption">Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ϣⲟⲙⲧ</span>
        <span class="arabic-caption">ثيؤطوكية الثلاثاء - أدآم</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The First Part</td>
            <td class="coptic">Ϯϩⲟⲩⲓϯ</td>
            <td class="arabic">القطعة الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">The crown of our pride, the head of our salvation, the confirmation of our purity, is the Virgin Mary.</td>
            <td class="coptic">Ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ⲡⲉⲛϣⲟⲩϣⲟⲩ: ⲧ̀ⲁ̀ⲡⲁⲣⲭⲏ ⲙ̀ⲡⲉⲛⲥⲱϯ: ⲡ̀ⲧⲁϫⲣⲟ ⲙ̀ⲡⲉⲛⲧⲟⲩⲃⲟ: ⲡⲉ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">إكليل فخرنا، ورأس خلاصنا، وثبات طُهرنا، هي مريم العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Who for us gave birth to, God the Word, who became man, for our salvation.</td>
            <td class="coptic">Ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛ̀ⲣⲱⲙⲓ: ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ.</td>
            <td class="arabic">التي ولدت لنا، الله الكلمة، الذي صار إنساناً، لإجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">And after He became man, He is also God, therefore she gave birth to Him, while a virgin.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉϥⲉⲣⲣⲱⲙⲓ: ⲛ̀ⲑⲟϥ ⲟⲛ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ: ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲥⲙⲁⲥϥ: ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">وبعد أن صار إنساناً، هو الإله أيضاً، فلهذا ولدته، وهي عذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english">Exalted is the wonder, of her pregnancy, and her delivery, is unutterable.</td>
            <td class="coptic">Ⲥ̀ϭⲟⲥⲓ ⲛ̀ϫⲉ ϯϣ̀ⲫⲏⲣⲓ: ⲛ̀ⲧⲉ ⲡⲉⲥϫⲓⲛⲉⲣⲃⲟⲕⲓ: ⲡⲉⲥϫⲓⲛⲙⲓⲥⲓ ⲟⲛ: ⲟⲩⲁⲧⲥⲁϫⲓ ⲙ̀ⲙⲟϥ ⲡⲉ.</td>
            <td class="arabic">عالية هي الأُعجوبة، التي لحبلها، وولادتها أيضاً، لا يُنطق به.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="refrain">
            <td class="english">The Second Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ</td>
            <td class="arabic">القطعة الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Great is the glory, of your virginity, O Virgin Mary, the perfect one.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲛ̀ⲧⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ: Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">عظيم هو مجد، بتوليتِك، يا مريم العذراء، الكاملة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">You have found grace, and the Lord is with you, you are the ladder, which Jacob saw.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϫⲉⲙ ϩ̀ⲙⲟⲧ: Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ: ⲛ̀ⲑⲟ ⲧⲉ ϯⲙⲟⲕⲓ: ⲑⲏⲉ̀ⲧⲁ Ⲓⲁⲕⲱⲃ ⲛⲁⲩ ⲉ̀ⲣⲟⲥ.</td>
            <td class="arabic">وجدتِ نعمة، الربُّ مَعَكِ، أنتِ هي السلم، التي رآها يعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Set firmly on the earth, reaching to heaven, where the angels, come down upon it.</td>
            <td class="coptic">Ⲉⲥⲧⲁϫⲣⲏⲟⲩⲧ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲥϭⲟⲥⲓ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲉ̀ⲣⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲛⲏⲟⲩ ⲉ̀ⲡⲉⲥⲏⲧ ϩⲓⲱⲧⲥ.</td>
            <td class="arabic">ثابتة على الأرض، ومرتفعة إلى السماء، والملائكة، نازلون عليها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">You are the tree, which Moses has seen, flaming with fire, and was not consumed.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲡⲉ ⲡⲓϣ̀ϣⲏⲛ: ⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ: ⲉϥⲙⲟϩ ϧⲉⲛ ⲡⲓⲭ̀ⲣⲱⲙ: ⲟⲩⲟϩ ⲛⲁϥⲣⲱⲕϩ ⲁⲛ.</td>
            <td class="arabic">أنتِ هي الشجرة، التي رآها موسى، مُتَقدة بالنار، ولم تحترق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">This is the Son of God, who dwelt in your womb, the fire of His divinity, did not burn your body.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲉ̀ⲧⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ: ⲙ̀ⲡⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲣⲱⲕϩ ⲙ̀ⲡⲉⲥⲱⲙⲁ.</td>
            <td class="arabic">أي إبن الله، الذي أتى وحلَّ في بطنِك، ونار لاهوته، لم تحرق جسدِك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">You are the field, that was not planted, but you did give, the Fruit of life.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲧⲉ ϯⲕⲟⲓ: ⲙ̀ⲡⲟⲩϯϫ̀ⲣⲟϫ ⲉ̀ⲣⲟⲥ: ⲁ̀ⲣⲉⲧⲁⲟⲩⲟ̀ ⲉ̀ⲃⲟⲗ: ⲛ̀Ⲟⲩⲕⲁⲣⲡⲟⲥ ⲛ̀ⲱⲛϧ.</td>
            <td class="arabic">أنتِ هي الحقل، الذي لم يُزرَع، وأخرجتِ، ثمرة حياة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">You are the treasure, that Joseph bought, and he found the pearl, hidden in its midst.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲡⲉ ⲡⲓⲁ̀ϩⲟ: ⲉ̀ⲧⲁϥϣⲟⲡϥ ⲛ̀ϫⲉ Ⲓⲱⲥⲏⲫ: ⲁϥϫⲉⲙ ⲡⲓⲙⲁⲣⲅⲁⲣⲓⲧⲏⲥ: ⲉϥϩⲏⲡ ϧⲉⲛ ⲧⲉϥⲙⲏϯ.</td>
            <td class="arabic">أنتِ هي الكنز، الذي إشتراه يوسف، فوجد الجوهر، مخفي في وسطه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Our Savior Jesus, was found in your womb, you bore Him for the world, that He may save us.</td>
            <td class="coptic">Ⲁϥϫⲉⲙ Ⲡⲉⲛⲥⲱⲧⲏⲣ: Ⲓⲏⲥⲟⲩⲥ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ: ⲁ̀ⲣⲉϫ̀ⲫⲟϥ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">وُجد مُخلِّصنا، يسوع في بطنِك، وولدتيِه إلى العالم، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="refrain">
            <td class="english">The Third Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲟⲙϯ</td>
            <td class="arabic">القطعة الثالثة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hail to the Mother of God, the rejoicing of angels, hail to the chaste one, the preaching of the prophets.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ϯⲙⲁⲥⲛⲟⲩϯ: ⲡ̀ⲑⲉⲗⲏⲗ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲭⲉⲣⲉ ϯⲥⲉⲙⲛⲉ: ⲡ̀ϩⲓⲱⲓϣ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">السلام لوالدة الإله، تهليل الملائكة، السلام للعفيفة، كرازة الأنبياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Hail to you who has found grace, the Lord is with you, hail to you who accepted, the Joy of the world.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϭⲓ ⲛ̀ⲧⲉⲛ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲙ̀Ⲫ̀ⲣⲁϣⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">السلام للتي وجدت نعمة، الربُّ مَعَكِ، السلام للتي قَبَلت من الملاك، فرح العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="north">
            <td class="english">Hail to her who gave birth, to the Creator of all, hail to her who is worthy, to be called the Mother of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ: ⲙ̀Ⲫ̀ⲣⲉϥⲑⲁⲙⲓⲟ ⲙ̀ⲡⲓⲉ̀ⲡ̀ⲧⲏⲣϥ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙ̀ⲡ̀ϣⲁ ⲙ̀ⲙⲟⲩϯ ⲉ̀ⲣⲟⲥ: ϫⲉ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">السلام للتي وَلَدت، خالق الكل، السلام للتي إستحقت، أن تُدعى أُم المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="south">
            <td class="english">Hail to you who brought, salvation to Adam and Eve, hail to her who nursed, the Provider of everyone.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϯ: ⲙ̀ⲡ̀ⲥⲱϯ ⲛ̀Ⲁ̀ⲇⲁⲙ ⲛⲉⲙ Ⲉ̀ⲩⲁ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϯϭⲓ: ⲙ̀Ⲫ̀ⲣⲉϥϣⲁⲛϣ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">السلام للتي أعطت، الخلاص لآدم وحواء، السلام للتي أرضعت، عائل كل أحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the saint, the Mother of all the living, you are the one we pray to, intercede for us.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲟⲩⲁⲃ: Ⲑ̀ⲙⲁⲩ ⲛ̀ⲛⲏⲉⲧⲟⲛϧ ⲧⲏⲣⲟⲩ: ⲛ̀ⲑⲟ ⲡⲉ ⲉ̀ⲧⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟ: ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϫⲱⲛ.</td>
            <td class="arabic">السلام للقديسة، أُم جميع الأحياء، نطلب إليكِ، أن تشفعي فينا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="refrain">
            <td class="english">The Fourth Part</td>
            <td class="coptic">Ϯⲙⲁϩϥ̀ⲧⲟ</td>
            <td class="arabic">القطعة الرابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">If someone contemplates, about you, O holy Virgin, and Mother of God.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϣⲁⲛ ⲟⲩⲁⲓ: ϯⲛⲓⲁⲧϥ ⲙ̀ⲙⲟ: ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ: ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲥⲛⲟⲩϯ.</td>
            <td class="arabic">إذا تأملكِ أحدٌ، أيتها العذراء، القديسة، والدة الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">And about the Mystery, full of wonder, which dwelt in you, for our salvation.</td>
            <td class="coptic">Ⲛⲉⲙ Ⲡⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉⲧⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛ̀ϧⲏϯ: ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ.</td>
            <td class="arabic">والسر، العجيب، الذي صار فيكِ، لأجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english">He would keep silent, for he cannot utter, he would make us, rise up for praise.</td>
            <td class="coptic">Ϥ̀ⲛⲁⲕⲁⲣⲱϥ ⲙⲉⲛ: ⲉⲑⲃⲉ ϯⲙⲉⲧⲁⲧⲥⲁϫⲓ ⲙ̀ⲙⲟϥ: ϥ̀ⲛⲁⲧⲟⲩⲛⲟⲥⲧⲉⲛ ⲉ̀ⲡ̀ϣⲱⲓ: ⲉ̀ⲟⲩϫⲓⲛⲉⲣϩⲩⲙⲛⲟⲥ.</td>
            <td class="arabic">فأنه يصمت من أجل، ما لا يُنطَق به، ويُقيمنا، إلى التسبيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">Because of the greatness, of the wonderful, Maker of all, good things.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ϯⲙⲉⲧⲛⲓϣϯ: ⲛ̀ⲧⲉ ⲫⲏⲉⲧⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲛ̀Ⲣⲉϥⲉⲣⲡⲉⲑⲛⲁⲛⲉϥ: ⲉⲧⲟⲓ ⲛ̀ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ.</td>
            <td class="arabic">من أجل عظمة، العجيب، صانع الخيرات، المتنوعة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">For the living Word, of God the Father, came down to give the law, on Mount Sinai.</td>
            <td class="coptic">Ⲡⲓⲗⲟⲅⲟⲥ ⲅⲁⲣ ⲉⲧⲟⲛϧ: ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ: ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ϯⲛⲟⲙⲟⲥ: ϩⲓϫⲉⲛ ⲡ̀ⲧⲱⲟⲩ ⲛ̀Ⲥⲓⲛⲁ.</td>
            <td class="arabic">لأن كلمة الله، الحي الذي للآب، نزل ليعطي الناموس، على جبل سيناء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english">He covered the peak, of the mountain, with smoke and darkness, mist and storms.</td>
            <td class="coptic">Ⲁϥϩⲱⲃⲥ ⲛ̀ⲧ̀ⲁ̀ⲫⲉ: ⲡⲓⲧⲱⲟⲩ ϧⲉⲛ ⲟⲩⲭ̀ⲣⲉⲙⲧⲥ: ⲛⲉⲙ ⲟⲩⲭⲁⲕⲓ ⲛⲉⲙ ⲟⲩⲅ̀ⲛⲟⲫⲟⲥ: ⲛⲉⲙ ⲟⲩⲥⲁⲣⲁⲑⲏⲟⲩ.</td>
            <td class="arabic">غطَّى رأس الجبل، بالدخان، والظلام والضباب، والعاصف.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="north">
            <td class="english">Through the sound, of the trumpets, He was teaching the people, standing with fear.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ϯⲥ̀ⲙⲏ: ⲛ̀ⲧⲉ ϩⲁⲛⲥⲁⲗⲡⲓⲅⲅⲟⲥ: ⲛⲁϥϯⲥ̀ⲃⲱ ϧⲉⲛ ⲟⲩϩⲟϯ: ⲛ̀ⲛⲏⲉⲧⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ.</td>
            <td class="arabic">ومن جهة، صوت الأبواق، كان يُعلِم، الواقفين بمخافة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english">He also descended on you, O speaking mountain, that spoke with humility, and love of mankind.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲟⲛ ⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ: ⲉ̀ϫⲱ ϧⲁ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲣⲉⲙⲣⲁⲩϣ: ⲛⲉⲙ ⲟⲩⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">هو أيضاً نزل عليكِ، أيتها الجبل، الناطق بوداعة، ومحبة بشرية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="north">
            <td class="english">And likewise, He took flesh from you, without alteration, a speaking body.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲙ̀ⲡⲁⲓⲣⲏϯ: ⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ: ⲛ̀ⲟⲩⲥⲁⲣⲝ ⲛ̀ⲗⲟⲅⲓⲕⲏ.</td>
            <td class="arabic">وهكذا أيضاً، تجسد منكِ، بغير تغيير، بجسد ناطق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="south">
            <td class="english">Co-essential with us, and perfect, and also has, a rational soul.</td>
            <td class="coptic">Ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙⲁⲛ: ⲉⲥϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲉ̀ⲟⲩⲟⲛ ⲛ̀ⲧⲁⲥ ⲙ̀ⲙⲁⲩ: ⲛ̀ⲟⲩⲯⲩⲭⲏ ⲛ̀ⲛⲟⲏ̀ⲣⲁ.</td>
            <td class="arabic">مساويٍ لنا، كامل، وله نفس، عاقلة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_34" class="north">
            <td class="english">He remained God, as He is, and became, a perfect man.</td>
            <td class="coptic">Ⲁϥⲟ̀ϩⲓ ⲉϥⲟⲓ ⲛ̀Ⲛⲟⲩϯ: ϧⲉⲛ ⲫⲏⲉ̀ⲛⲁϥⲟⲓ ⲙ̀ⲙⲟϥ: ⲟⲩⲟϩ ⲁϥϣⲱⲡⲓ ⲛ̀ⲣⲱⲙⲓ: ⲛ̀ⲧⲉⲗⲓⲟⲥ.</td>
            <td class="arabic">بقيَ إلهاً، على حاله، وصار، إنساناً كاملاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english">So as to abolish, the iniquity of Adam, and that He may save, those who perished.</td>
            <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲃⲱⲗ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲡⲁⲣⲁⲡ̀ⲧⲱⲙⲁ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲥⲱϯ: ⲙ̀ⲫⲏⲉ̀ⲧⲁϥⲧⲁⲕⲟ.</td>
            <td class="arabic">لكي يحل، زلَّة آدم، ويُخلِّص، مَنْ قد هلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_36" class="north">
            <td class="english">And to make him, a citizen of heaven, and restore his leadership, according to His great mercy.</td>
            <td class="coptic">Ⲛ̀ⲧⲉϥⲁⲓϥ ⲙ̀ⲡⲟⲗⲓⲧⲏⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛ̀ⲧⲉϥⲧⲁⲥⲑⲟϥ ⲉ̀ⲧⲉϥⲁⲣⲭⲏ: ⲕⲁⲧⲁ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">ويُصَيِّره مدنيا، في السموات، ويردُّه إلى رئاسته، كعظيم رحمته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_37" class="south">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_38" class="refrain">
            <td class="english">The Fifth Part</td>
            <td class="coptic">Ϯⲙⲁϩϯ</td>
            <td class="arabic">القطعة الخامسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_39" class="north">
            <td class="english">The honor of the Virgin, is unutterable, for God desired her, He came and dwelt in her.</td>
            <td class="coptic">Ⲡ̀ⲧⲁⲓⲟ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲁⲧⲥⲁϫⲓ ⲙ̀ⲙⲟϥ ⲡⲉ: ϫⲉ ⲁ̀ Ⲫ̀ⲛⲟⲩϯ ⲟⲩⲁϣⲥ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">كرامة العذراء، لا يُنطق بها، لأن الله أرادها، وجاء وسكن فيها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_40" class="south">
            <td class="english">He who abides in light, that is unapproachable, dwelt in her womb, for nine months.</td>
            <td class="coptic">Ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲛ̀ⲁⲧϣ̀ϧⲱⲛⲧ ⲉ̀ⲣⲟϥ: ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲛⲉⲥⲛⲉϫⲓ: ⲙ̀ⲯⲏⲧ ⲛ̀ⲁ̀ⲃⲟⲧ.</td>
            <td class="arabic">الساكن في النور، غير المقترب إليه، حل في بطنها، تسعة شهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_41" class="north">
            <td class="english">Mary gave birth to, the Invisible, and Infinite One, and remained a virgin.</td>
            <td class="coptic">Ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: Ⲡⲓⲁⲧϯⲑⲱϣ ⲉ̀ⲣⲟϥ: ⲁ̀ Ⲙⲁⲣⲓⲁ ⲙⲁⲥϥ: ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">غير المنظور، غير المحدود، ولدته مريم، وهي عذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_42" class="south">
            <td class="english">For this is the Rock, which Daniel saw, which was cut, from a mountain.</td>
            <td class="coptic">Ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ Ⲡⲓⲱ̀ⲛⲓ: ⲫⲏⲉ̀ⲧⲁ Ⲇⲁⲛⲓⲏⲗ: ⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉ̀ⲁⲩϣⲁⲧϥ: ⲉ̀ⲃⲟⲗ ϩⲓ ⲟⲩⲧⲱⲟⲩ.</td>
            <td class="arabic">لأن هذا هو الحجر، الذي رآه دانيال، قد قُطع، من جبلٍ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_43" class="north">
            <td class="english">The hands of men, never touched Him, for He is the Word, of the Father.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲙ̀ⲡⲉϫⲓϫ ⲛ̀ⲣⲱⲙⲓ: ϭⲟϩ ⲉ̀ⲣⲟϥ ⲉ̀ⲡ̀ⲧⲏⲣϥ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲓⲗⲟⲅⲟⲥ: ⲡⲓⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">ولم تلمسه، يد إنسانٍ البتة، هو الكلمة، الذي من الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_44" class="south">
            <td class="english">He came and took flesh, from the Virgin, without the seed of man, in order to save us.</td>
            <td class="coptic">Ⲁϥⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">أتى وتجسد، من العذراء، بغير زرع بشر، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_45" class="north">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_46" class="refrain">
            <td class="english">The Sixth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥⲟ</td>
            <td class="arabic">القطعة السادسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_47" class="south">
            <td class="english">You became a branch, of purity, and a vessel, of the faith.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛ̀ⲟⲩⲕ̀ⲗⲁⲇⲟⲥ: ⲛ̀ⲧⲉ ⲡⲓⲧⲟⲩⲃⲟ: ⲟⲩⲟϩ ⲛ̀ⲕⲩⲙⲓⲗⲗⲓⲟⲛ: ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ.</td>
            <td class="arabic">صرتِ غصنا، للطهارة، وإناء، للإيمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_48" class="north">
            <td class="english">Of the orthodox, our holy fathers, O chaste Mother of God, the honored Virgin.</td>
            <td class="coptic">Ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ: ⲱ̀ ϯⲥⲉⲙⲛⲉ ⲙ̀Ⲙⲁⲥⲛⲟⲩϯ: ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">الأرثوذكسي، الذي لآبائنا القديسين، أيتها العفيفة والدة الإله، المكرمة العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_49" class="south">
            <td class="english">For you gave birth for us, God the Word, our Savior Jesus, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنك ولدتِ لنا، الله الكلمة، مُخلِّصنا يسوع، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_50" class="north">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_51" class="refrain">
            <td class="english">The Seventh Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲁϣϥⲓ</td>
            <td class="arabic">القطعة السابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_52" class="south">
            <td class="english">You are the Mother of light, the honored Mother of God, you have carried, the infinite Logos.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ Ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀Ⲙⲁⲥⲛⲟⲩϯ: ⲁ̀ⲣⲉϥⲁⲓ ϧⲁ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲡⲓⲁ̀ⲭⲱⲣⲓⲧⲟⲥ.</td>
            <td class="arabic">أنتِ يا أم النور، المكرمة والدة الإله، حملتِ الكلمة، غير المحوى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_53" class="north">
            <td class="english">After you gave birth to Him, you remained a virgin, with praises and blessings, we magnify you.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲙⲁⲥϥ: ⲁ̀ⲣⲉⲟ̀ϩⲓ ⲉ̀ⲣⲉⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ϩⲁⲛϩⲱⲥ ⲛⲉⲙ ϩⲁⲛⲥ̀ⲙⲟⲩ: ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ.</td>
            <td class="arabic">ومن بعد أن ولدتِه، بقيتِ عذراء، نعظمكِ بتسابيح، وبركات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_54" class="south">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us. ${cross}</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والرُّوح القُدُس، أتى وخلصنا. ${cross}</td>
        </tr>
        </tbody>
</table>
${lobsh}
`;
 return html;
}

function TheTuesdayTheotokia_Lobsh(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Tuesday Theotokia Lobsh">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Tuesday Theotokia Lobsh
        <span class="coptic-caption">Ⲡⲓⲗⲱⲃϣ ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ϣⲟⲙⲧ</span>
        <span class="arabic-caption">لُبش ثيؤطوكية الثلاثاء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">What bodily tongue, can describe you, O holy Virgin, and Mother of God.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ ⲁϣ ⲛ̀ⲗⲁⲥ ⲛ̀ⲥⲁⲣⲝ: ⲛⲁϣ̀ⲉⲣⲡⲓⲛⲟⲓⲛ ⲙ̀ⲙⲟ: ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ: ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲥⲛⲟⲩϯ.</td>
            <td class="arabic">أي لسان جسدي، يستطيع أن يتأملِك، أيتها العذراء القديسة، والدة الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For you became, a royal throne for the One, who is carried, by the Cherubim.</td>
            <td class="coptic">Ϫⲉ ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛ̀ⲟⲩⲑ̀ⲣⲟⲛⲟⲥ: ⲙ̀ⲃⲁⲥⲓⲗⲓⲕⲟⲛ: ⲙ̀ⲫⲏⲉ̀ⲧⲟⲩϥⲁⲓ ⲙ̀ⲙⲟϥ: ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">لأنكِ صرتِ، عرشاً ملوكياً، للمحمول، على الشاروبيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">By what means can we bless you, for you were exalted, above all the highest, and rational natures.</td>
            <td class="coptic">Ⲉⲛⲛⲁϣ̀ⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ: ⲙ̀ⲙⲟ ⲛ̀ⲁϣ ⲛ̀ⲣⲏϯ: ϫⲉ ⲁ̀ⲣⲉϭⲓⲥⲓ ⲉ̀ⲛⲓⲫⲩⲥⲓⲥ: ⲛ̀ⲛⲟⲩⲏ̀ⲣⲟⲛ ⲉⲧⲥⲁⲡ̀ϣⲱⲓ.</td>
            <td class="arabic">بأي نوع نقدر، أن نطوبِك، لأنكِ إرتفعِت عن الطبائع، العلوية العقلية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Your name is remembered, throughout all ages, O beautiful dove, and Mother of Christ.</td>
            <td class="coptic">Ⲥⲉⲉⲣⲫ̀ⲙⲉⲩⲓ ⲙ̀ⲡⲉⲣⲁⲛ: ϧⲉⲛ ⲅⲉⲛⲉⲁ̀ ⲛⲓⲃⲉⲛ: ⲱ̀ ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲟⲩⲟϩ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">يُذكر إسمِك، في كل الأجيال، أيتها الحمامة الحسنة، وأُم المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Rejoice O Mary, the handmaiden and the Mother, for the angels praise Him, who is on your arms.</td>
            <td class="coptic">Ⲟⲩⲛⲟϥ ⲙ̀ⲙⲟ Ⲙⲁⲣⲓⲁ: ϯⲃⲱⲕⲓ ⲟⲩⲟϩ Ϯⲙⲁⲩ: ϫⲉ ⲫⲏⲉⲧ ϧⲉⲛ ⲡⲉⲁ̀ⲙⲏⲣ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">إفرحي يا مريم، العبدة والأم، لأن الذي في حجرك، الملائكة تسبحه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">And the Cherubim, worthily worship Him, with the Seraphim, without ceasing.</td>
            <td class="coptic">Ⲟⲩⲟϩ Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲁⲝⲓⲱⲥ: ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩⲛⲕ.</td>
            <td class="arabic">والشاروبيم، يسجدون له بإستحقاق، والسِّرافيم، بغير فتور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">They flap their wings saying, “This is the King of glory, who carries the sin of the world, according to His great mercy.”</td>
            <td class="coptic">Ⲉⲩⲉⲣⲣⲓⲡⲓⲍⲓⲛ ϧⲉⲛ ⲛⲟⲩⲧⲉⲛϩ: ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲕⲁⲧⲁ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">يُرفرفون بأجنحتهم، قائلين "هذا هو ملك المجد، رافع خطية العالم، كعظيم رحمته."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">And we too, hope to win mercy, through your intercessions, with the Lover of Mankind. ${cross}</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ: ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ: ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲛ̀ⲧⲟⲧϥ ⲙ̀Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. ${cross}</td>
            <td class="arabic">ونحن أيضاً نطلب، أن نفوز برحمةٍ، بشفاعاتِك، عند محب البشر. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheWednesdayTheotokia_Watos(tableNumber) {
    const seventhPart = Ti_galili_a_7thPartoftheWednesdayTheotokia(tableNumber + 1);
    const lobsh = TheWednesdayTheotokia_Lobsh(tableNumber + 2);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Wednesday Theotokia - Watos">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Wednesday Theotokia - Watos
        <span class="coptic-caption">Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ϥ̀ⲧⲟⲟⲩ</span>
        <span class="arabic-caption">ثيؤطوكية الأربعاء - واطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The First Part</td>
            <td class="coptic">Ϯϩⲟⲩⲓϯ</td>
            <td class="arabic">القطعة الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">All the heavenly multitudes, declare your blessedness, for you are the Second Heaven, upon the earth.</td>
            <td class="coptic">Ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲥⲉϫⲱ ⲛ̀ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ: ϫⲉ ⲛ̀ⲑⲟ ⲧⲉ ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲙ̀ⲫⲉ: ⲉⲧϣⲟⲡ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
            <td class="arabic">كل الطغمات السمائية، ينطقون بطوباويتِك، لأنكِ أنتِ هي السماء الثانية، الكائنة على الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">The door to the East, is the Virgin Mary, the honored bridal chamber, for the pure Bridegroom.</td>
            <td class="coptic">Ϯⲡⲩⲗⲏ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ⲧⲉ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲡⲓⲙⲁ ⲛ̀ϣⲉⲗⲉⲧ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ: ⲛ̀ⲧⲉ Ⲡⲓⲛⲩⲙⲫⲓⲟⲥ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.</td>
            <td class="arabic">باب المشارق، هو مريم العذراء، الخدر الطاهر، الذي للختن النقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="refrain">
            <td class="english">The Second Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ</td>
            <td class="arabic">القطعة الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">They spoke of you with honor, O City of God, for you are the dwelling place, of all the joyful.</td>
            <td class="coptic">Ⲁⲩⲥⲁϫⲓ ⲛ̀ϩⲁⲛⲧⲁⲓⲟ ⲉⲑⲃⲏϯ: ⲱ̀ ϯⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ϫⲉ ⲛ̀ⲑⲟ ⲡⲉⲧⲉⲣⲉ ⲫ̀ⲙⲁ ⲛ̀ϣⲱⲡⲓ: ⲛ̀ⲛⲏⲉ̀ⲧⲟⲩⲛⲟϥ ⲧⲏⲣⲟⲩ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تكلموا بكرامات من أجلِك، يا مدينة الله، لأنك أنتِ مسكن، جميع الفرحين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">All the kings of the earth / walk in your light, / and the nations in your brightness, / O Mary the Mother of God.</td>
            <td class="coptic">Ⲛⲓⲟⲩⲣⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲥⲉⲙⲟϣⲓ ϧⲉⲛ ⲡⲉⲟⲩⲱⲓⲛⲓ: ⲟⲩⲟϩ ⲛⲓⲉⲑⲛⲟⲥ ϧⲉⲛ ⲡⲉⲫⲓⲣⲓ: ⲱ̀ Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">كل ملوك الأرض، يسيرون في نورك، والأمم في ضيائكِ، يا مريم أم الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Every generation calls you blessed, and we also worship Him, to whom you gave birth, and we exalt Him.</td>
            <td class="coptic">Ⲥⲉⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ⲙ̀ⲙⲟ: ⲛ̀ϫⲉ ⲛⲓⲅⲉⲛⲉⲁ̀ ⲧⲏⲣⲟⲩ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲫⲏⲉ̀ⲧⲁⲣⲉϫ̀ⲫⲟϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">تطوِّبِك جميع الأجيال، ونحن نسجد، للذي ولدتِه، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="refrain">
            <td class="english">The Third Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲟⲙϯ</td>
            <td class="arabic">القطعة الثالثة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">You are the light cloud, that has led us to, the rain of the coming, of the only-begotten God.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲧⲉ ϯϭⲏⲡⲓ ⲉⲧⲁ̀ⲥⲓⲱⲟⲩ: ⲑⲏⲉ̀ⲧⲁⲥⲉⲣⲥⲩⲙⲙⲉⲛⲓⲛ ⲛⲁⲛ: ⲙ̀ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ ⲛ̀ⲧⲉ ϯⲡⲁⲣⲟⲩⲥⲓⲁ: ⲛ̀ⲧⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ⲛⲟⲩϯ.</td>
            <td class="arabic">أنتِ هي السحابة الخفيفة، التي دلتنا على، مطر إستعلان، الإله الوحيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english">The Father created you, and the Holy Spirit came upon you, and the power of the highest, overshadowed you O Mary.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ⲉⲣⲧⲉⲭⲛⲓⲧⲏⲥ ⲉ̀ⲣⲟ: ⲁ̀ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲓ̀ ⲉ̀ϫⲱ: ⲟⲩϫⲟⲙ ⲛ̀ⲧⲉ Ⲫⲏⲉⲧϭⲟⲥⲓ: ⲉⲑⲛⲁⲉⲣϧⲏⲓⲃⲓ ⲉ̀ⲣⲟ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">الآب صنعِك، والرُّوح القُدُس حلَّ عليكِ، وقوة العلي، ظللتِك يا مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="south">
            <td class="english">For you have given birth, to the true Word, the Son of the ever-existing Father, who came and redeemed us from our sins.</td>
            <td class="coptic">Ϫⲉ ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲙ̀Ⲡⲓⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲛ̀Ⲗⲟⲅⲟⲥ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ: ⲁϥⲓ̀ ⲁϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">لأنكِ ولدِت، الكلمة الحقيقي، إبن الآب الدائم إلى الأبد، أتى وأنقذنا من خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english">The Fourth Part</td>
            <td class="coptic">Ϯⲙⲁϩϥ̀ⲧⲟ</td>
            <td class="arabic">القطعة الرابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Great is the honor, which you are worthy of O Gabriel, the messenger angel, your face beams with joy.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲅⲁⲣ ⲧⲉ ϯⲧⲓⲙⲏ: ⲉ̀ⲧⲁⲕⲉⲙⲡ̀ϣⲁ ⲙ̀ⲙⲟⲥ ⲱ̀ Ⲅⲁⲃⲣⲓⲏⲗ: ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲙ̀ϥⲁⲓϣⲉⲛⲛⲟⲩϥⲓ: ⲉ̀ⲣⲉ ⲡⲉⲕϩⲟ ϣⲟⲩⲟ̀ ⲣⲁϣⲓ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">عظيمة هي الكرامة، التي إستحققتها يا غبريال، الملاك المبشر، ووجهك يتلألأ فرحاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">For you announced to us the birth, of God who came to us, and you declared to Mary, the undefiled Virgin.</td>
            <td class="coptic">Ⲁⲕⲉⲣⲥⲩⲙⲙⲉⲛⲓⲛ ⲛⲁⲛ ⲙ̀ⲡⲓϫ̀ⲫⲟ: ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ ⲉ̀ⲧⲁϥⲓ̀ ϣⲁⲣⲟⲛ: ⲁⲕϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲙ̀Ⲙⲁⲣⲓⲁ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ.</td>
            <td class="arabic">أعلنت لنا ميلاد، الله الذي أتى إلينا، وبشرتَ مريم العذراء، غير الدنسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">Saying "Hail to you O full of grace, the Lord is with you, you have found favor, the Holy Spirit shall come upon you."</td>
            <td class="coptic">Ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ: ⲁ̀ⲣⲉϫⲓⲙⲓ ⲅⲁⲣ ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ: Ⲟⲩⲡ̀ⲛⲉⲩⲙⲁ ⲉϥⲟⲩⲁⲃ ⲉⲑⲛⲏⲟⲩ ⲉ̀ϫⲱ.</td>
            <td class="arabic">قائلاً "إفرحي يا مُمْتلئة نعمة، الربُّ مَعَكِ، لأنكِ وجدتِ نعمة، والرُّوح القُدُس يحل عليكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english">For the power of the Highest, will overshadow you Mary, you shall give birth to the Holy One, the Savior of the whole world.</td>
            <td class="coptic">Ⲟⲩϫⲟⲙ ⲛ̀ⲧⲉ Ⲫⲏⲉⲧϭⲟⲥⲓ: ⲉⲑⲛⲁⲉⲣϧⲏⲓⲃⲓ ⲉ̀ⲣⲟ Ⲙⲁⲣⲓⲁ: ⲧⲉⲣⲁⲙⲓⲥⲓ ⲙ̀Ⲫⲏⲉⲑⲟⲩⲁⲃ: Ⲡ̀ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ.</td>
            <td class="arabic">وقوة العلي، تظللكِ يا مريم، تلدين القدوس، مخلص العالم كله."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="refrain">
            <td class="english">The Fifth Part</td>
            <td class="coptic">Ϯⲙⲁϩϯ</td>
            <td class="arabic">القطعة الخامسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">A virginal feast, today inspires our tongues, to give praise to, Mary the Mother of God.</td>
            <td class="coptic">Ⲟⲩϣⲁⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ: ⲉⲧⲑⲱϩⲉⲙ ⲙ̀ⲡⲉⲛⲗⲁⲥ ⲙ̀ⲫⲟⲟⲩ: ⲉⲑⲣⲉⲛⲉⲣⲉⲩⲫⲟⲙⲓⲛ: ⲛ̀Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">عيدٌ بتولي، يدعو لساننا اليوم، لكي نمدح، والدة الإله مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">On account of Him who was born, for us in the City of David, our Savior Jesus, Christ the Lord.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛⲁⲛ: ϧⲉⲛ ⲑ̀ⲃⲁⲕⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ: ⲟⲩⲟϩ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">مِن أجل الذي وُلد لنا، في مدينة داود، مُخلِّصنا يسوع، والمسيح الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="north">
            <td class="english">Come all you nations, so we may bless her, for she has become both, Mother and Virgin.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ⲛ̀ⲧⲉⲛⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁⲥϣⲱⲡⲓ ⲙ̀ⲙⲁⲩ: ⲟⲩⲟϩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">تعالوا يا جميع الشعوب، لنغبطها، لأنها صارت أماً، وعذراء معاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="south">
            <td class="english">Hail to you O Virgin, the pure and incorrupt one, the Word of the Father, came and took flesh from you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ ⲛ̀ⲁⲧⲧⲁⲕⲟ: ⲉ̀ⲧⲁ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، النقية عديمة الفساد، التي كلمة الآب، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">Hail to the chosen vessel, which is without blemish, that is of your true, and perfect virginity.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲕⲩⲙⲓⲗⲗⲓⲟⲛ: ⲛ̀ⲁⲧⲁϭⲛⲓ ⲟⲩⲟϩ ⲉⲧⲥⲱⲧⲡ: ⲛ̀ϫⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ ⲙ̀ⲙⲏⲓ: ⲟⲩⲟϩ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">السلام للإناء، الذي بغير عيب المختار، الذي لبتوليتِك، الحقيقية الكاملة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">Hail to the rational, Paradise of Christ, who became the Second Adam, for the sake of Adam the first man.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲙ̀ⲙⲁϩⲥ̀ⲛⲁⲩ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲉⲑⲃⲉ Ⲁ̀ⲇⲁⲙ ⲡⲓϣⲟⲣⲡ ⲛ̀ⲣⲱⲙⲓ.</td>
            <td class="arabic">السلام للفردوس، الناطق للمسيح، الذي صار آدم الثاني، من أجل آدم الإنسان الأول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="north">
            <td class="english">Hail to the uniting place, of the unparted natures, that came together in one place, without ever mingling.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲉⲣⲅⲁⲥⲧⲏⲣⲓⲟⲛ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲟⲩⲁⲓ ⲛ̀ⲁⲧⲫⲱⲣϫ: ⲛ̀ⲧⲉ ⲛⲓⲫⲩⲥⲓⲥ ⲉⲧⲁⲩⲓ̀ ⲉⲩⲙⲁ ⲁⲩⲥⲟⲡ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩϫⲧ.</td>
            <td class="arabic">السلام لمعمل الإتحاد، غير المفترق الذي للطبائع، التي أتت معاً إلى موضع واحد، بغير إختلاط.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="south">
            <td class="english">Hail to the bridal chamber, decorated in every way, for the true Bridegroom, who united with humanity.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲙⲁ ⲛ̀ϣⲉⲗⲉⲧ: ⲉⲧⲥⲉⲗⲥⲱⲗ ϧⲉⲛ ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ: ⲛ̀ⲧⲉ Ⲡⲓⲛⲩⲙⲫⲓⲟⲥ ⲙ̀ⲙⲏⲓ: ⲉ̀ⲧⲁϥϩⲱⲧⲡ ⲉ̀ϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">السلام للخدر، المُزيَّن بكل نوع، الذي للختن الحقيقي، الذي إتحد بالبشرية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">Hail to the rational bush, of the nature, which the fire of His divinity, did not burn any of it.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲙ̀ⲯⲩⲭⲟⲛ: ⲙ̀ⲃⲁⲧⲟⲥ ⲛ̀ⲧⲉ ϯⲫⲩⲥⲓⲥ: ⲉⲧⲉ ⲙ̀ⲡⲉ ⲡⲓⲭⲣⲱⲙ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲣⲱⲕϩ ⲛ̀ϩ̀ⲗⲓ ⲛ̀ⲧⲁⲥ.</td>
            <td class="arabic">السلام للعليقة النفسية، التي للطبيعة، اللتي نار لاهوته، لم تحرق شيئاً منها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">Hail to the handmaiden and mother, the Virgin and the heaven, who carried in the flesh, He who sits upon the cherubim.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲃⲱⲕⲓ ⲟⲩⲟϩ Ϯⲙⲁⲩ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲟⲩⲟϩ ⲧ̀ⲫⲉ: ⲑⲏⲉ̀ⲧⲁⲥϥⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ϧⲁ ⲫⲏⲉⲧϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">السلام للعبدة والأم، العذراء والسماء، التي حَملت جسدياً، الذي على الشاروبيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="north">
            <td class="english">For this we rejoice and sing, with the holy angels, and we joyfully proclaim, "Glory to God in the Highest.”</td>
            <td class="coptic">Ϧⲉⲛ ⲛⲁⲓ ⲧⲉⲛⲣⲁϣⲓ ⲧⲉⲛⲉⲣⲯⲁⲗⲓⲛ: ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">بهذا نفرح ونرتل، مع الملائكة القديسين، بتهليل قائلين، "المجد لله في الأعالي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="south">
            <td class="english">“And on Earth peace, goodwill toward man, for He who is glorified forever, was pleased with you.</td>
            <td class="coptic">Ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ϫⲉ ⲁϥϯⲙⲁϯ ⲅⲁⲣ ⲛ̀ϧⲏϯ: ⲛ̀ϫⲉ ⲫⲏⲉ̀ⲧⲉ ⲫⲱϥ ⲡⲉ ⲡⲓⲱ̀ⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">وعلى الأرض السلام، وفي الناس المسرة، لأنه سُرَّ بكِ، الذي له المجد إلى الأبد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="north">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_34" class="refrain">
            <td class="english">The Sixth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥⲟ</td>
            <td class="arabic">القطعة السادسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english">Great is the honor of Mary, above all the saints, for she was found worthy to receive, God the Word.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡ̀ⲧⲁⲓⲟ ⲙ̀Ⲙⲁⲣⲓⲁ: ⲡⲁⲣⲁ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ: ϫⲉ ⲁⲥⲉⲙⲡ̀ϣⲁ ⲛ̀ϣⲱⲡ ⲉ̀ⲣⲟⲥ: ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">عظيمة هي كرامة مريم، أكثر من جميع القديسين، لأنها إستحقت أن تقبل إليها، الله الكلمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_36" class="north">
            <td class="english">The One feared by the angels, Mary the Virgin, has carried, in her womb.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲉⲣⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ⲁ̀ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϥⲁⲓ ϧⲁⲣⲟϥ ϧⲉⲛ ⲧⲉⲥⲛⲉϫⲓ.</td>
            <td class="arabic">مَنْ تخافه الملائكة، حملته، مريم العذراء، في بطنها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_37" class="south">
            <td class="english">She is exalted above the cherubim, more honored than the seraphim, she became a temple, for the One from the Trinity.</td>
            <td class="coptic">Ⲥ̀ϭⲟⲥⲓ ⲉ̀Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲥ̀ⲧⲁⲓⲏⲟⲩⲧ ⲉ̀Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ϫⲉ ⲁⲥϣⲱⲡⲓ ⲛ̀ⲟⲩⲉⲣⲫⲉⲓ: ⲙ̀Ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲧ̀ⲣⲓⲁⲥ.</td>
            <td class="arabic">هي أرفع من الشاروبيم، وأجَّل من السِّرافيم، لأنها صارت هيكلاً، للواحد من الثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_38" class="north">
            <td class="english">This is Jerusalem, the City of our God, and the joy of all saints, abides in her.</td>
            <td class="coptic">Ⲑⲁⲓ ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ ⲧⲉ: ⲉ̀ⲣⲉ ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ: ϣⲟⲡ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">هذه هي أورشليم، مدينة إلهنا، وفرح جميع القديسين، كائن فيها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_39" class="south">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ.</td>
        </tr>
        </tbody>
</table>
${seventhPart}
${lobsh}
`;
 return html;
}

function Ti_galili_a_7thPartoftheWednesdayTheotokia(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Ti-galili-a (7th Part of the Wednesday Theotokia)">
    
    <caption id="caption_table_${tableNumber}" class="caption">Ti-galili-a (7th Part of the Wednesday Theotokia)
        <span class="coptic-caption">Ϯⲅⲁⲗⲓⲗⲉⲁ̀ (Ϯⲙⲁϩϣⲁϣϥⲓ)</span>
        <span class="arabic-caption">لحن تي جاليلي آه - القطعة السابعة من ثيؤطوكية الأربعاء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The Seventh Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲁϣϥⲓ</td>
            <td class="arabic">القطعة السابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Galilee of the Gentiles, those who were sitting in darkness, and the shadow of death, had great light shine upon them.</td>
            <td class="coptic">Ϯⲅⲁⲗⲓⲗⲉⲁ̀ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲛⲟⲥ: ⲛⲏⲉⲧϩⲉⲙⲥⲓ ϧⲉⲛ ⲡ̀ⲭⲁⲕⲓ: ⲛⲉⲙ ⲧ̀ϧⲏⲓⲃⲓ ⲙ̀ⲫ̀ⲙⲟⲩ: ⲟⲩⲛⲓϣϯ ⲛ̀Ⲟⲩⲱⲓⲛⲓ ⲁϥϣⲁⲓ ⲛⲱⲟⲩ.</td>
            <td class="arabic">جليل الأُمم، الجالسون في الظلمة، وظلال الموت، أشرق عليهم النور العظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">God who rests, within His saints, was incarnate of the Virgin, for our salvation.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲫⲏⲉⲑⲙⲟⲧⲉⲛ ⲙ̀ⲙⲟϥ: ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁϥ: ⲁϥϭⲓⲥⲁⲣⲝ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲑⲃⲉ ⲫⲏⲉ̀ⲧⲉ ⲫⲱⲛ ⲛ̀ⲟⲩϫⲁⲓ.</td>
            <td class="arabic">الله المستريح، في قديسيه، تجسد من العذراء، لأجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">Come behold and be amazed, joyfully sing on account, of this mystery, which was revealed unto us.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲁ̀ⲛⲁⲩ ⲁ̀ⲣⲓϣ̀ⲫⲏⲣⲓ: ϩⲱⲥ ⲑⲉⲗⲏⲗ ϧⲉⲛ ⲟⲩϣ̀ⲗⲏⲗⲟⲩⲓ̀: ϩⲓϫⲉⲛ ⲡⲁⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉ̀ⲧⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">تعالوا أنظروا وتعجبوا، وسبحوا وهللوا، بإبتهاج لهذا السر، الذي ظهر لنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english">For the One without flesh was incarnate, and the Word took body, the One with no beginning began, and the eternal One became temporal.</td>
            <td class="coptic">Ϫⲉ Ⲡⲓⲁⲧⲥⲁⲣⲝ ⲁϥϭⲓⲥⲁⲣⲝ: ⲟⲩⲟϩ Ⲡⲓⲗⲟⲅⲟⲥ ⲁϥϧ̀ⲑⲁⲓ: Ⲡⲓⲁⲧⲁⲣⲭⲏ ⲁϥⲉⲣϩⲏⲧⲥ: Ⲡⲓⲁⲧⲥⲏⲟⲩ ⲁϥϣⲱⲡⲓ ϧⲁ ⲟⲩⲭ̀ⲣⲟⲛⲟⲥ.</td>
            <td class="arabic">لأن غير المُتجسد تجسَّد، والكلمة تجسَّمت، غير المبتدئ إبتدأ، وغير الزمني صار زمنياً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">The Incomprehensible has been touched, and the Unseen has been seen, and the Son of the Living God, truly became the Son of Man.</td>
            <td class="coptic">Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ ⲁⲩϫⲉⲙϫⲱⲙϥ: Ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲟϥ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲉⲧⲟⲛϧ: ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">غير المُدرك لمسوه، وغير المرئي رأوه، إبن الله الحي، صار بشرياً بالحقيقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Jesus Christ is the same yesterday, today and forever, in one hypostasis, we worship Him and glorify Him.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲛ̀ⲥⲁϥ ⲛⲉⲙ ⲫⲟⲟⲩ: ⲛ̀ⲑⲟϥ ⲛ̀ⲑⲟϥ ⲡⲉ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ: ϧⲉⲛ ⲟⲩϩⲩⲡⲟⲥⲧⲁⲥⲓⲥ ⲛ̀ⲟⲩⲱⲧ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ.</td>
            <td class="arabic">يسوع المسيح هو هو أمس، واليوم وإلى الأبد، بأُقنوم واحد، نسجد له ونمجده.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="north">
            <td class="english">The Father looked from heaven, and found no one like you, He sent His only-begotten, who came and took flesh from you.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ: ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉϥⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ. ${cross}</td>
            <td class="arabic">تطَّلع الآب من السماء، فلم يجد مَنْ يُشبهكِ، أرسل وحيده، أتى وتجسد منكِ. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheWednesdayTheotokia_Lobsh(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="The Wednesday Theotokia Lobsh">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Wednesday Theotokia Lobsh
        <span class="coptic-caption">Ⲡⲓⲗⲱⲃϣ ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ϥ̀ⲧⲟⲟⲩ</span>
        <span class="arabic-caption">لبش ثيؤطوكية الأربعاء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Ezekiel the prophet, has witnessed saying, "I saw a gate to the East, sealed with a mysterious seal.</td>
            <td class="coptic">Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥⲟⲓ ⲙ̀ⲙⲉⲑⲣⲉ: ϫⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲡⲩⲗⲏ ⲛ̀ⲥⲁ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ⲉⲥⲧⲟⲃ ϧⲉⲛ ⲟⲩⲧⲉⲃⲥ ⲛ̀ϣ̀ⲫⲏⲣⲓ.</td>
            <td class="arabic">حزقيال النبي، يشهد قائلاً، "إنني رأيت باباً ناحية المشرق، مختوماً بخاتم عجيب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">And no one else entered it, but the Lord of Powers, He entered and went out, and the gate remained sealed.”</td>
            <td class="coptic">Ⲙ̀ⲡⲉ ϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ: ⲉ̀ⲃⲏⲗ ⲉ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ: ⲁⲥⲟ̀ϩⲓ ⲉⲥϣⲟⲧⲉⲙ ⲙ̀ⲡⲉⲥⲣⲏϯ.</td>
            <td class="arabic">ولم يدخل فيه أحد، إلا رب القوات، دخل وخرج، وبقى مختوماً على حاله."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">For the gate is the Virgin, who gave birth to our Savior, and after His birth, she remained a virgin.</td>
            <td class="coptic">Ϯⲡⲩⲗⲓ ⲅⲁⲣ ⲧⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲥⲙⲁⲥϥ: ⲁⲥⲟ̀ϩⲓ ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">الباب هو العذراء، التي ولدت مُخلِّصنا، وقد بقيت عذراء، بعد ولادته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Blessed is the fruit of your womb, O who gave birth to God for the world, so as to redeem us from the hands, of the unmerciful tyrant.</td>
            <td class="coptic">Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲡⲉⲕⲁⲣⲡⲟⲥ: ⲱ̀ ⲑⲏⲉ̀ⲧⲁⲥϫ̀ⲫⲉ Ⲫ̀ⲛⲟⲩϯ ⲛⲁⲛ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛϫⲓϫ: ⲙ̀ⲡⲓⲧⲩⲣⲁⲛⲛⲟⲥ ⲛ̀ⲁⲑⲛⲁⲓ.</td>
            <td class="arabic">مباركة هي ثمرتِك، يا مَنْ ولِدت الله إلى العالم، كي ينقذنا من يدي، الظالم غير الرحوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Blessed and perfect are you, O who has found all grace, before the King of glory, our True Lord.</td>
            <td class="coptic">Ⲧⲉⲥ̀ⲙⲁⲙⲁⲧ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲱ̀ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ⲭⲁⲣⲓⲥⲙⲁ ⲛⲓⲃⲉⲛ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲡⲉⲛⲁ̀ⲗⲏⲑⲓⲛⲟⲥ ⲛ̀Ⲛⲟⲩϯ.</td>
            <td class="arabic">مباركة أنتِ وكاملة، يا مَنْ وجدِت كل نعمة، أمام ملك المجد، إلهنا الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You deserved all honor, more than anyone on earth, for the Word of the Father, came and was incarnate of you.</td>
            <td class="coptic">Ⲁ̀ⲣⲉⲉⲙⲡ̀ϣⲁ ⲛ̀ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ: ⲡⲁⲣⲁ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϫⲉ ⲁ̀ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">إستحققتِ كل كرامة، أكثر من كل مَنْ على الأرض، لأن كلمة الآب، أتى وتجسد منكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">And He walked among men, as a caring Lover of Mankind, until He saved our souls, through His holy appearance.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲙⲟϣⲓ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ: ϩⲱⲥ Ⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲣⲉϥϣⲉⲛϩⲏⲧ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲧⲉϥⲡⲁⲣⲟⲩⲥⲓⲁ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">ومشى مع الناس، كرؤوف ومحب للبشر، حتى خلَّص نفوسنا، بظهوره المقدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Let us worship our Savior, the Good Lover of Mankind, for He had compassion upon us, as He came and saved us.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ: Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">فلنسجد لمُخلِّصنا، محب البشر الصالح، لأنه ترأف علينا، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Hail to you, O Virgin, / the right and true Queen. / Hail to the pride of our race / who bore to us Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We ask you to remember us, / O our faithful advocate, / before our Lord Jesus Christ / that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">نسألِك أن تذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheThursdayTheotokia_Watos(tableNumber) {
    const lobsh = TheThursdayTheotokia_Lobsh(tableNumber + 1);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Thursday Theotokia - Watos">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Thursday Theotokia - Watos
        <span class="coptic-caption">Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ⲧ̀ⲓⲟⲟⲩ</span>
        <span class="arabic-caption">ثيؤطوكية الخميس - واطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The First Part</td>
            <td class="coptic">Ϯϩⲟⲩⲓϯ</td>
            <td class="arabic">القطعة الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">The bush which Moses, has seen in the wilderness, and the fire that was in it, did not burn its branches.</td>
            <td class="coptic">Ⲡⲓⲃⲁⲧⲟⲥ ⲉ̀ⲧⲁ Ⲙⲱⲩ̀ⲥⲏⲥ: ⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉ̀ⲃⲟⲗ ϩⲓ ⲡ̀ϣⲁϥⲉ: ⲉ̀ⲣⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲟϩ ⲛ̀ϧⲏⲧϥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲣⲱⲕϩ ⲛ̀ϫⲉ ⲛⲉϥⲕ̀ⲗⲁⲇⲟⲥ.</td>
            <td class="arabic">العليقة التي رآها، موسى في البرية، والنار مشتعلة فيها، ولم تحترق أغصانها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">This is a symbol of Mary, the undefiled Virgin, which the Word of the Father, came and took flesh from her.</td>
            <td class="coptic">Ϥ̀ⲟⲓ ⲛ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲙⲁⲣⲓⲁ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ: ⲉ̀ⲧⲁ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">هي مثال مريم، العذراء غير الدنسة، التي أتى وتجسد منها، كلمة الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">The fire of His divinity, did not burn the womb of the Virgin, and after she bore Him, she remained a virgin.</td>
            <td class="coptic">Ⲙ̀ⲡⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲣⲱⲕϩ ⲛ̀ⲑ̀ⲛⲉϫⲓ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲥⲙⲁⲥϥ: ⲁⲥⲟ̀ϩⲓ ⲁⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">ونار لاهوته، لم تحرق بطن العذراء، وأيضاً بعد ما ولدته، بقيت عذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="refrain">
            <td class="english">The Second Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ</td>
            <td class="arabic">القطعة الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">The pride of all virgins, is Mary the Mother of God, for her sake He has revoked, the first curse.</td>
            <td class="coptic">Ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ: ⲡⲉ Ⲙⲁⲣⲓⲁ Ϯⲙⲁⲥⲛⲟⲩϯ: ⲉⲑⲃⲏⲧⲥ ⲟⲛ ⲁϥⲃⲱⲗ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲡⲓⲥⲁϩⲟⲓ̀ ⲛ̀ⲁⲣⲭⲉⲟⲥ.</td>
            <td class="arabic">فخر جميع العذارى، هي مريم والدة الإله، من أجلها أيضاً، نُقضت اللعنة الأولى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Which was pronounced upon our race, through the violation, incurred by the first woman, when she ate from the fruit of the tree.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ϩⲓϫⲉⲛ ⲡⲉⲛⲅⲉⲛⲟⲥ: ϩⲓⲧⲉⲛ ϯⲡⲁⲣⲁⲃⲁⲥⲓⲥ: ⲉ̀ⲧⲁ ϯⲥ̀ϩⲓⲙⲓ ϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲥ: ⲁⲥⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲟⲩⲧⲁϩ ⲙ̀ⲡⲓϣ̀ϣⲏⲛ.</td>
            <td class="arabic">التي جاءت على جنسنا، من قِبَل المخالفة، التي وقعت فيها المرأة، لما أكلت من ثمرة الشجرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Because of Eve, the door of Paradise was closed, and through the Virgin Mary, it was opened to us once more.</td>
            <td class="coptic">Ⲉⲑⲃⲉ Ⲉ̀ⲩⲁ ⲁⲩⲙⲁϣⲑⲁⲙ: ⲙ̀ⲫ̀ⲣⲟ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ϩⲓⲧⲉⲛ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁⲩⲟⲩⲱⲛ ⲙ̀ⲙⲟϥ ⲛⲁⲛ ⲛ̀ⲕⲉⲥⲟⲡ.</td>
            <td class="arabic">من أجل حواء، أُغلق باب الفردوس، ومن قِبَل مريم العذراء، فتح لنا مرة أخرى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We have become worthy to have, the tree of life to eat from, which is the Body of God, and His true Blood.</td>
            <td class="coptic">Ⲁⲛⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲙ̀ⲡⲓϣ̀ϣⲏⲛ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ: ⲉⲑⲣⲉⲛⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲥⲱⲙⲁ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲛⲉⲙ Ⲡⲉϥⲥ̀ⲛⲟϥ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ.</td>
            <td class="arabic">إستحققنا شجرة الحياة، لنأكل منها، أي جسد الله، ودمه الحقيقيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Let us worship our Savior, the good Lover of Mankind, for He had compassion upon us, He came and saved us.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ: Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">فلنسجد لمُخلِّصنا، محب البشر الصالح، لأنه ترأف علينا، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="refrain">
            <td class="english">The Third Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲟⲙϯ</td>
            <td class="arabic">القطعة الثالثة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Which mind or which speech, or sound can attain, the unutterable expression, of Your love for mankind O God.</td>
            <td class="coptic">Ⲁϣ ⲛ̀ⲛⲟⲩⲥ ⲓⲉ ⲁϣ ⲛ̀ⲥⲁϫⲓ: ⲓⲉ ϫⲓⲛⲥⲱⲧⲉⲙ ⲉⲑⲛⲁϣ̀ϥⲁⲓ: ϧⲁ ⲡⲓⲡⲉⲗⲁⲅⲟⲥ ⲛ̀ⲁⲧⲥⲁϫⲓ ⲙ̀ⲙⲟϥ: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">أي عقل أو أي قول، أو أي سمع يقدر أن ينهض، باللجة التي لا تُوصف، التي لمحبتك للبشر يا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">The One and only Word, begotten before all ages, as the divinity without body, from the only Father.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ ⲛ̀Ⲗⲟⲅⲟⲥ: ⲉ̀ⲧⲁⲩϫ̀ⲫⲟϥ ϧⲁϫⲉⲛ ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ: ⲕⲁⲧⲁ ϯⲙⲉⲑⲛⲟⲩϯ ⲁϭⲛⲉ ⲥⲱⲙⲁ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲟⲩⲁⲓ Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">الواحد وحده الكلمة، المولود قبل كل الدهور، باللاهوت بغير جسد، من الآب وحده.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="north">
            <td class="english">And He Himself also, was born bodily, without change or alteration, from His Mother only.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲫⲁⲓ ⲟⲛ ⲙ̀ⲙⲁⲩⲁⲧϥ: ⲁⲩϫ̀ⲫⲟϥ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲁⲧⲫⲱⲛϩ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲧⲉϥⲙⲁⲩ ⲙ̀ⲙⲁⲩⲁⲧⲥ.</td>
            <td class="arabic">هو ذاته أيضاً، وُلد جسدياً، بغير تغيير ولا تحول، من أمه وحدها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="south">
            <td class="english">And also after she bore Him, she remained a virgin, and thus He has showed, that she is the Theotokos.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲥⲙⲁⲥϥ: ⲙ̀ⲡⲉϥⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ: ϧⲉⲛ ⲫⲁⲓ ⲁϥⲟⲩⲟⲛϩⲥ ⲉ̀ⲃⲟⲗ: ϫⲉ Ⲟⲩⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲧⲉ.</td>
            <td class="arabic">وأيضاً بعد أن ولدته، لم يحل بتوليتها، وبهذا أظهرها، بأنها والدة الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">O the depth of the riches, and wisdom of God, for the womb under punishment, bore children with deep pain.</td>
            <td class="coptic">Ⲱ̀ ⲡ̀ϣⲱⲕ ⲛ̀ϯⲙⲉⲧⲣⲁⲙⲁⲟ̀: ⲛⲉⲙ ϯⲥⲟⲫⲓⲁ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ϫⲉ ϯⲛⲉϫⲓ ⲉ̀ⲧⲁⲩϩⲓⲧⲥ ⲉ̀ⲡ̀ϩⲁⲡ: ⲁⲥϫ̀ⲫⲟ ⲛ̀ϩⲁⲛϣⲏⲣⲓ ϧⲉⲛ ⲟⲩⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ.</td>
            <td class="arabic">يا لَعُمْقِ غِنَى، وحكمة الله، لأن البطن الواقع تحت الحكم، وولد الأولاد بوجع القلب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">He became the source of immortality, she gave birth to Emmanuel, without the seed of man, to revoke the corruption of our race.</td>
            <td class="coptic">Ⲁⲥϣⲱⲡⲓ ⲛ̀ⲟⲩⲙⲟⲩⲙⲓ ⲛ̀ⲧⲉ ⲟⲩⲙⲉⲧⲁⲑⲙⲟⲩ: ⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ⲁϥⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡ̀ⲧⲁⲕⲟ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">صار ينبوعاً لعدم الموت، ولدِت لنا عمانوئيل، بغير زرع بشر، ونقض فساد جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="north">
            <td class="english">Let us proclaim and say unto Him, “Glory be to the Incomprehensible One, the good Lover of Man the Savior of our souls, He came and saved us.”</td>
            <td class="coptic">Ⲫⲁⲓ ⲙⲁⲣⲉⲛⲱϣ ⲟⲩⲃⲏϥ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ Ⲫ̀ⲣⲉϥⲥⲱϯ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">فلنصرخ نحوه قائلين، "المجد لك أيها الغير مُدرَك، محب البشر الصالح مخلص نفوسنا، لأنه أتى وخلصنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="refrain">
            <td class="english">The Fourth Part</td>
            <td class="coptic">Ϯⲙⲁϩϥ̀ⲧⲟ</td>
            <td class="arabic">القطعة الرابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english">O what an honor to the conception, of the virginal womb, that bore God without seed, as the angel witnessed.</td>
            <td class="coptic">Ⲱ̀ ϯⲧⲓⲙⲏ ⲛ̀ⲧⲉ ϯϫⲓⲛⲉⲣⲃⲟⲕⲓ: ⲛ̀ⲧⲉ ϯⲛⲉϫⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲏ: ⲟⲩⲟϩ ⲛ̀ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲟⲩⲁⲧϫ̀ⲣⲟϫ ⲧⲉ: ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ϫⲉ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">يا لكرامة الحبل، الذي للبطن البتولي، والوالد الإله بغير زرع، إذ شهد الملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">When he appeared to Joseph, he likewise said, “The One she will give birth to, is from the Holy Spirit.”</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲟⲩⲟⲛϩϥ ⲉ̀Ⲓⲱⲥⲏⲫ: ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲫⲏ ⲅⲁⲣ ⲉ̀ⲧⲁⲥⲛⲁⲙⲁⲥϥ: ⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲟⲩⲡ̀ⲛⲁⲩⲙⲁ ⲉϥⲟⲩⲁⲃ ⲡⲉ.</td>
            <td class="arabic">لما ظهر ليوسف، قائلاً هكذا ، "أن الذي ستلده هو، من الرُّوح القُدُس."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">For the Word of the Father, came and took flesh from her, she bore Him without change, the angel said to him.</td>
            <td class="coptic">Ⲉ̀ⲧⲓ ⲇⲉ ϫⲉ ⲛⲉ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ ⲉ̀ⲁⲥⲙⲁⲥϥ: ⲁϥⲧⲟⲩϩⲟ ⲙ̀ⲡⲁⲓⲭⲉⲧ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ</td>
            <td class="arabic">وأيضاً كلمة الآب، أتى وتجسد منها، ولدته بغير تغيير، وزاد هذا الآخر الملاك قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">“She shall give birth to a Son, and He shall be called Emmanuel, which means, God with us.”</td>
            <td class="coptic">Ϫⲉ ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛ̀Ⲟⲩϣⲏⲣⲓ: ⲉⲩⲉ̀ⲙⲟⲩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲫⲏⲉ̀ⲧⲉ ϣⲁⲩⲟⲩⲁϩⲙⲉϥ: ϫⲉ Ⲫ̀ⲛⲟⲩϯ ⲛⲉⲙⲁⲛ.</td>
            <td class="arabic">"إنها تلد إبناً، ويُدعى إسمه عمانوئيل، الذي تفسيره، الله معنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english">And you will also call, His name Jesus, for He will save His people, from their iniquities.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲉⲕⲉ̀ⲙⲟⲩϯ: ⲉ̀ⲡⲉϥⲣⲁⲛ ϫⲉ Ⲓⲏⲥⲟⲩⲥ: ⲛ̀ⲑⲟϥ ⲉⲑⲛⲁⲛⲟϩⲉⲙ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲟⲩⲁ̀ⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">وأيضاً تدعو، إسمه يسوع، وهو الذي يخلِّص شعبه، من خطاياهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">So when we become His people, He will save us with power, He will forgive us our sins, let us be confirmed in Him.</td>
            <td class="coptic">Ⲓⲥϫⲉ ⲇⲉ ⲁ̀ⲛⲟⲛ ⲡⲉ ⲡⲉϥⲗⲁⲟⲥ: ϥ̀ⲛⲁⲛⲟϩⲉⲙ ⲙ̀ⲙⲟⲛ ϧⲉⲛ ⲟⲩⲙⲉⲧϫⲱⲣⲓ: ⲉϥⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ: ⲙⲁⲣⲉⲛⲥⲟⲩⲱⲛϥ ϧⲉⲛ ⲟⲩⲧⲁϫⲣⲟ.</td>
            <td class="arabic">فإذ صرنا نحن شعبه، فهو يخلصنا بقوة، ويغفر آثامنا، فلنعرفه بثبات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">For He is God in truth, He became man without change, glory be to Him, both now and forever.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁϥⲉⲣⲣⲱⲙⲓ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ: ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">لأنه هو الله بالحقيقة، تأنس بغير تغيير، المجد يليق به، من الآن وإلى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="refrain">
            <td class="english">The Fifth Part</td>
            <td class="coptic">Ϯⲙⲁϩϯ</td>
            <td class="arabic">القطعة الخامسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="north">
            <td class="english">O what mysterious contractions, of God that are for, Mary the Theotokos, the ever-Virgin.</td>
            <td class="coptic">Ⲱ̀ ⲛⲓⲛⲁⲕϩⲓ ⲛ̀ⲛⲟⲩϯ: ⲟⲩⲟϩ ⲛ̀ϣⲟⲩⲉⲣϣ̀ⲫⲏⲣⲓ ⲙ̀ⲙⲱⲟⲩ: ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ: ⲉⲧⲟⲓ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">يا للطلقات الإلهية، العجيبة التي، لوالدة الإله مريم، العذراء كل حين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="south">
            <td class="english">For she is where, two were united, the undefiled virginity, and the true Birth.</td>
            <td class="coptic">Ⲛⲁⲓ ⲉ̀ⲧⲉ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲱⲟⲩ: ⲉ̀ⲁⲩⲓ̀ ⲉⲩⲙⲁ ⲉⲩⲥⲟⲡ: ⲛ̀ϫⲉ ⲟⲩⲡⲁⲣⲑⲉⲛⲓⲁ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ: ⲛⲉⲙ Ⲟⲩϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">هذه التي منها، إجتمع معاً، بتولية بلا دنس، وميلاد حقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="north">
            <td class="english">For marriage, did not precede birth, neither did the Birth, loosen her virginity.</td>
            <td class="coptic">Ⲟⲩ ⲅⲁⲣ ⲙ̀ⲡⲉ ⲟⲩⲅⲁⲙⲟⲥ: ⲉⲣϣⲟⲣⲡ ⲉ̀ⲡⲓϫⲓⲛⲙⲓⲥⲓ: ⲟⲩⲇⲉ ⲟⲛ ⲙ̀ⲡⲉ Ⲡⲓϫⲓⲛⲙⲓⲥⲓ: ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
            <td class="arabic">لأنه لم يسبق، الميلاد زواج، ولم يحل الميلاد، أيضاً بتوليتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_34" class="south">
            <td class="english">For He who was born is God, born without pain from the Father, and He was also born according to the flesh, without pain from the Virgin.</td>
            <td class="coptic">Ⲫⲏ ⲅⲁⲣ ⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϩⲱⲥ Ⲛⲟⲩϯ: ⲁ̀ⲡⲁⲑⲏⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ⲁⲩⲙⲁⲥϥ ⲟⲛ ⲕⲁⲧⲁ ⲥⲁⲣⲝ: ⲁ̀ⲡⲁⲑⲏⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">لأن الذي وُلد إله، بغير ألم من الآب، وُلد أيضاً حسب الجسد، بغير ألم من العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="north">
            <td class="english">One nature out of two, divinity and humanity, therefore the Magi silently, worship uttering His divinity.</td>
            <td class="coptic">Ⲟⲩⲁⲓ ⲡⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲥ̀ⲛⲁⲩ: ⲟⲩⲙⲉⲑⲛⲟⲩϯ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲣⲱⲙⲓ: ϧⲉⲛ ⲫⲁⲓ ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲅⲟⲥ: ⲉⲩⲭⲱ ⲛ̀ⲣⲱⲟⲩ ⲉⲩⲉⲣⲑⲉⲟ̀ⲗⲟⲅⲓⲛ.</td>
            <td class="arabic">هو إتحاد الإثنين، لاهوت وناسوت، ولهذا سجد له المجوس، ساكتين وناطقين بلاهوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_36" class="south">
            <td class="english">They offered Him frankincense for He is God, and gold for He is King, and myrrh as a sign, of His life-giving Death.</td>
            <td class="coptic">Ⲁⲩⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ⲟⲩⲗⲓⲃⲁⲛⲟⲥ ϩⲱⲥ Ⲛⲟⲩϯ: ⲛⲉⲙ ⲟⲩⲛⲟⲩⲃ ϩⲱⲥ Ⲟⲩⲣⲟ: ⲛⲉⲙ ⲟⲩϣⲁⲗ ⲉⲩϯⲙⲏⲓⲛⲓ: ⲉ̀Ⲡⲉϥϫⲓⲛⲙⲟⲩ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ.</td>
            <td class="arabic">قدموا له لباناً كإله، وذهباً كملك، ومُراً علامة، على موته المحيي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_37" class="north">
            <td class="english">This He accepted was for our sake, through His own will, the One and only good Lover of Mankind the Savior of our souls, He came and saved us.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲧⲁϥϣⲟⲡϥ ⲉ̀ⲣⲟϥ ⲉⲑⲃⲏⲧⲉⲛ: ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ Ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ Ⲫ̀ⲣⲉϥⲥⲱϯ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">هذا الذي قَبَله من أجلنا، بإرادته وحده، والواحد وحده محب البشر الصالح مخلص نفوسنا، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_38" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_39" class="refrain">
            <td class="english">The Sixth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥⲟ</td>
            <td class="arabic">القطعة السادسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_40" class="north">
            <td class="english">O what a great wonder, He took a rib, from Adam's side, and created a woman from it.</td>
            <td class="coptic">Ⲱ̀ ϯⲛⲓϣϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲑⲏⲉ̀ⲧⲁⲥϭⲓ ⲉ̀ϫⲱⲥ ⲛ̀ϯⲃⲏⲧ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲥ̀ⲫⲓⲣ ⲛ̀Ⲁ̀ⲇⲁⲙ: ϣⲁ ⲛ̀ⲧⲟⲩⲉⲣⲡ̀ⲗⲁⲍⲓⲛ ⲙ̀ⲙⲟⲥ ⲉⲩⲥ̀ϩⲓⲙⲓ.</td>
            <td class="arabic">يا لِعِظَم أعجوبة، أخذ الضلع من جنب، أدم وجُبلت، منه إمرأة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_41" class="south">
            <td class="english">She gave all the form of humanity, with perfection to the Lord, the Creator, the Word of the Father.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲱ̀ϣⲉⲙ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ: ⲁⲥⲧⲏⲓϥ ϧⲉⲛ ⲟⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲡⲓⲇⲓⲙⲓⲟⲩⲣⲅⲟⲥ: ⲟⲩⲟϩ ⲛ̀Ⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">كل عجينة البشرية، أعطتها بالكمال، لله الخالق، وكلمة الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_42" class="north">
            <td class="english">This is He who took flesh, from her without change, she gave birth to Him as a human, and He was called Emmanuel.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ ⲉ̀ⲁⲥⲙⲁⲥϥ: ϩⲱⲥ ⲣⲱⲙⲓ ⲁⲩⲙⲟⲩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ: ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">هذا الذي تجسد منها، بغير تغيير، ولدته كإنسان، ودُعيَّ إسمه عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_43" class="south">
            <td class="english">Let us also entreat her, as the ever-Theotokos, to intercede on our behalf, before her beloved Son.</td>
            <td class="coptic">Ⲑⲁⲓ ⲟⲛ ⲙⲁⲣⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟⲥ: ϩⲱⲥ Ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲉⲑⲣⲉⲥⲉⲣⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲥϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ.</td>
            <td class="arabic">هي أيضاً فلنطلب إليها، كوالدة الإله كل حين، أن تشفع فينا، لدى إبنها الحبيب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_44" class="north">
            <td class="english">For she is greatly honored, by all the saints and patriarchs, for she has brought to them, the One whom they were waiting for.</td>
            <td class="coptic">Ϫⲉ ⲥ̀ⲧⲁⲓⲏⲟⲩⲧ ⲅⲁⲣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ: ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ϫⲉ ⲁⲥⲓ̀ⲛⲓ ⲛⲱⲟⲩ: ⲙ̀ⲫⲏⲉ̀ⲧⲟⲩϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁϫⲱϥ</td>
            <td class="arabic">لأنها مكرمة جداً، عند جميع القديسين ورؤساء الآباء، لأنها أتت لهم بمَنْ، كانوا ينتظرونه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_45" class="south">
            <td class="english">And likewise all the prophets, who prophesied about Him, in many ways and various analogies, saying “He will come and save us.”</td>
            <td class="coptic">Ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲇⲉ ⲟⲛ ⲟ̀ⲙⲟⲓⲱⲥ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ ⲉⲑⲃⲏⲧϥ: ϧⲉⲛ ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ ⲛⲉⲙ ⲟⲩⲙⲏϣ ⲛ̀ⲥ̀ⲙⲟⲧ: ϫⲉ ϥ̀ⲛⲁⲓ̀ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">كذلك الأنبياء، الذين تنبأوا من أجله، بأنواع كثيرة وأشباه، شتى بأنه يأتي ويخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_46" class="north">
            <td class="english">And all the Apostles, for she is the Mother, of the One they preached about, all over the world.</td>
            <td class="coptic">Ⲛⲉⲙ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲩⲥⲟⲡ: ϫⲉ ⲛ̀ⲑⲟⲥ ⲡⲉ Ϯⲣⲉϥϫ̀ⲫⲉ: ⲙ̀ⲫⲏⲉ̀ⲧⲟⲩⲉⲣⲕⲩⲣⲓⲍⲓⲛ ⲙ̀ⲙⲟϥ: ϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ.</td>
            <td class="arabic">والرسل معاً، لأنها هي والدة، الذي كرزوا به، في كل المسكونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_47" class="south">
            <td class="english">The struggling martyrs, for out of her came, the Founder of the true struggle, our Lord Jesus Christ.</td>
            <td class="coptic">Ⲛⲓⲁⲑⲗⲓⲧⲏⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ϫⲉ ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ: ⲛ̀ϫⲉ ⲡⲟⲩⲁ̀ⲅⲟⲓⲛⲟⲑⲉⲧⲏⲥ ⲙ̀ⲙⲏⲓ: Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">والشهداء المجاهدين، لأنه قد خرج منها، واضع جهادهم الحقيقي، ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_48" class="north">
            <td class="english">Therefore let us glorify, the greatness of His wealth, and His infinite wisdom, pleading for His great mercy.</td>
            <td class="coptic">Ⲫⲁⲓ ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ ⲛ̀ϯⲙⲉⲧⲛⲓϣϯ: ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲣⲁⲙⲁⲟ̀ ⲉⲧⲟϣ: ⲛⲉⲙ ⲧⲉϥⲥⲟⲫⲓⲁ ⲛ̀ⲁⲧⲁⲩⲣⲏϫⲥ: ⲉⲛⲉ̀ⲣⲉⲧⲓⲛ ⲙ̀ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">هذا فلنمجد، عظمة غناه الجزيل، وحكمته التي لا تحد، سائلين رحمته العظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_49" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_50" class="refrain">
            <td class="english">The Seventh Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲁϣϥⲓ</td>
            <td class="arabic">القطعة السابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_51" class="north">
            <td class="english">The Lord has sworn in truth to David, and did not turn from it saying, “From the Fruit of your body, I will set upon your throne.”</td>
            <td class="coptic">Ⲁϥⲱⲣⲕ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ ⲛ̀Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲟⲩⲟϩ ⲛ̀ⲛⲉϥϫⲟⲗϥ ϫⲉ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲡ̀ⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ⲧⲉⲕⲛⲉϫⲓ: ϯⲛⲁⲭⲱ ϩⲓϫⲉⲛ ⲡⲉⲕⲑ̀ⲣⲟⲛⲟⲥ.</td>
            <td class="arabic">أقسم الرب لداود، بالحق ولم يحنث، "أن من ثمرة بطنك، أضع على كرسيك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_52" class="south">
            <td class="english">So when the righteous one, asked with all his heart, that Christ be born there according to the flesh, he asked earnestly.</td>
            <td class="coptic">Ⲟ̀ⲑⲉⲛ ⲉ̀ⲧⲁϥⲑⲱⲧ ⲛ̀ϩⲏⲧ: ⲛ̀ϫⲉ ⲡⲓⲑ̀ⲙⲏⲓ ϫⲉ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲟϥ: ⲥⲉⲛⲁϫ̀ⲫⲟ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲕⲁⲧⲁ ⲥⲁⲣⲝ: ⲁϥⲕⲱϯ ⲁⲕⲣⲓⲃⲱⲥ.</td>
            <td class="arabic">فلهذا لما، طلب البار قلباً، أن منه يولد المسيح حسب الجسد، طلب بإجتهاد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_53" class="north">
            <td class="english">To find a dwelling place, for the Lord God the Word, and this was completed, with a great mystery.</td>
            <td class="coptic">Ⲉ̀ϫⲓⲙⲓ ⲛ̀ⲟⲩⲙⲁ ⲛ̀ϣⲱⲡⲓ: ⲙ̀Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ: ⲟⲩⲟϩ ⲫⲁⲓ ⲁϥϫⲟⲕϥ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϣ̀ⲣⲱⲓⲥ.</td>
            <td class="arabic">أن يجِد مسكناً، للرب الإله الكلمة، وهذا أكمله، بسر عظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_54" class="south">
            <td class="english">And he instantly cried out, through the Spirit saying, “We have heard it in Ephrathah, which is Bethlehem.”</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲥⲁⲧⲟⲧϥ ⲁϥⲱϣ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁⲛⲥⲟⲑⲙⲉⲥ ϧⲉⲛ Ⲉⲫⲣⲁⲑⲁ: ⲉ̀ⲧⲉ Ⲃⲏⲑⲗⲉⲉⲙ ⲧⲉ.</td>
            <td class="arabic">وللوقت صرخ، بالروح قائلاً، "إننا قد سمعنا في إفراثة، التي هي بيت لحم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_55" class="north">
            <td class="english">The place where our God Emmanuel, has chosen to be born, according to the flesh, for our salvation.</td>
            <td class="coptic">Ⲡⲓⲙⲁ ⲉ̀ⲧⲁϥⲉⲣⲕⲁⲧⲁⲝⲓⲟⲓⲛ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: ⲉⲑⲣⲟⲩϫ̀ⲫⲟϥ ⲛ̀ϧⲏⲧϥ ⲕⲁⲧⲁ ⲥⲁⲣⲝ: ⲉⲑⲃⲉ ⲫⲏⲉ̀ⲧⲉ ⲫⲱⲛ ⲛ̀ⲟⲩϫⲁⲓ.</td>
            <td class="arabic">الموضع الذي تفضل عمانوئيل، إلهنا أن يُولد فيه، حسب الجسد، من أجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_56" class="south">
            <td class="english">As Micah the prophet, also proclaimed saying, “You also O Bethlehem, the land of Ephrathah.</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲟⲛ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲙⲓⲭⲉⲟⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϫⲉ ⲛⲉⲙ ⲛ̀ⲑⲟ ϩⲱⲓ Ⲃⲏⲑⲗⲉⲉⲙ: ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲉⲫⲣⲁⲑⲁ.</td>
            <td class="arabic">كما قال أيضاً، ميخا النبي، "وأنتِ أيضاً يا بيت لحم، أرض إفراثة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_57" class="north">
            <td class="english">Are by no means the least, among the rulers of Judah, for out of you shall come a ruler, who will shepherd My people Israel.”</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲟⲩⲕⲟⲩϫⲓ ⲁⲛ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲛⲓⲙⲉⲧϩⲏⲅⲉⲙⲱⲛ ⲛ̀ⲧⲉ Ⲓⲟⲩⲇⲁ: ⲉϥⲉ̀ⲓ̀ ⲅⲁⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ ⲛ̀ϫⲉ ⲟⲩϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ: ⲫⲏⲉⲑⲛⲁⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲡⲁⲗⲁⲟⲥ Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">لست الصغرى، بين ولايات يهوذا، لأنه منكِ يخرج مدبر، يرعى شعبي إسرائيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_58" class="south">
            <td class="english">Oh what are these symphonies, of all these prophets, who prophesied with this one Spirit, for the coming of Christ.</td>
            <td class="coptic">Ⲱ̀ ⲛⲓⲙ ⲛⲁⲓⲥⲩⲙⲫⲱⲛⲓⲁ: ⲛ̀ⲧⲉ ⲛⲁⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲩⲥⲟⲡ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ ϧⲉⲛ ⲡⲁⲓⲠ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲟⲩⲱⲧ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲓ̀ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">يا لهذه الإتفاقات، الذي لأولئك الأنبياء، الذين تنبأوا بهذا الروح الواحد، من أجل مجيئ المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_59" class="north">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والرُّوح القُدُس، منذ الآن وإلى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_60" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_61" class="refrain">
            <td class="english">The Eighth Part</td>
            <td class="coptic">Ϯⲙⲁϩϣ̀ⲙⲏⲛⲓ</td>
            <td class="arabic">القطعة الثامنة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_62" class="north">
            <td class="english">The One of the Trinity, co-essential to the Father, when He looked upon our tribulation, and our bitter slavery.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲧ̀ⲣⲓⲁⲥ: ⲡⲓⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙ Ⲫ̀ⲓⲱⲧ: ⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲡⲉⲛⲑⲉⲃⲓⲟ: ⲛⲉⲙ ⲧⲉⲛⲙⲉⲧⲃⲱⲕ ⲉⲧⲟⲓ ⲛ̀ϣⲁϣⲓ.</td>
            <td class="arabic">الواحد من الثالوث، المساوي للآب في الجوهر، لما نظر إلى مذلتنا، وعبوديتنا المرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_63" class="south">
            <td class="english">He bowed the heaven of heavens, and came to the womb of the Virgin, He became man like us, save for sin only.</td>
            <td class="coptic">Ⲁϥⲣⲉⲕ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥⲓ̀ ⲉ̀ⲑ̀ⲙⲏⲧⲣⲁ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϥⲉⲣⲣⲱⲙⲓ ⲙ̀ⲡⲉⲛⲣⲏϯ: ϣⲁⲧⲉⲛ ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ.</td>
            <td class="arabic">طأطأ سموات السموات، وأتى إلى بطن العذراء، وصار إنساناً مثلنا، ما خلا الخطية وحدها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_64" class="north">
            <td class="english">When He was born in Bethlehem, according to the prophecies, He saved and redeemed us, for we are His people.</td>
            <td class="coptic">Ⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲕⲁⲧⲁ ⲛⲓⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥⲧⲟⲩϫⲟⲛ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ: ϫⲉ ⲁ̀ⲛⲟⲛ ⲡⲉ ⲡⲉϥⲗⲁⲟⲥ.</td>
            <td class="arabic">لما وُلد في بيت لحم، كأخبار الأنبياء، أنقدنا وخلصنا، لأننا نحن شعبه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_65" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_66" class="refrain">
            <td class="english">The Ninth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲯⲓϯ</td>
            <td class="arabic">القطعة التاسعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_67" class="north">
            <td class="english">I saw a miracle that appeared in heaven, a woman is clothed with the sun, and the moon also, was under her feet.</td>
            <td class="coptic">Ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲙⲏⲓⲛⲓ ⲁϥⲟⲩⲟⲛϩϥ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲓⲥ ⲟⲩⲥ̀ϩⲓⲙⲓ ⲉⲥϫⲟⲗϩ ⲙ̀ⲫ̀ⲣⲏ: ⲛ̀ⲑⲟⲥ ⲟⲛ ⲉ̀ⲣⲉ ⲡⲓⲓⲟϩ: ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉⲥϭⲁⲗⲁⲩϫ.</td>
            <td class="arabic">رأيت آية ظهرت في السماء، إذ بإمرأة متسربلة، بالشمس والقمر أيضاً، تحت رجليها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_68" class="south">
            <td class="english">And a crown of twelve stars, upon her head, being pregnant she cried out, in pain to give birth.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ ⲟⲩⲟⲛ ⲙⲏⲧⲥ̀ⲛⲁⲩ ⲛ̀ⲥⲓⲟⲩ: ⲟⲓ ⲭ̀ⲗⲟⲙ ⲉ̀ϫⲉⲛ ⲧⲉⲥⲁ̀ⲫⲉ: ⲉⲥⲙ̀ⲃⲟⲕⲓ ⲉⲥϯⲛⲁⲕϩⲓ: ⲉⲥⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲥⲛⲁⲙⲓⲥⲓ.</td>
            <td class="arabic">وإثنا عشر كوكباً، تكلل رأسها، وهي حُبلى تتمخض، صارخة لتلد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_69" class="north">
            <td class="english">This is Mary, the new heaven on earth, the Sun of Righteousness, shines upon us from her.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲑⲁⲓ ⲧⲉ Ⲙⲁⲣⲓⲁ: ϯⲫⲉ ⲙ̀ⲃⲉⲣⲓ ⲉⲧϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉ̀ⲧⲁ Ⲡⲓⲣⲏ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ϣⲁⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">هي مريم، السماء الجديدة التي على الأرض، المشرقة لنا منها، شمس البر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_70" class="south">
            <td class="english">For the Sun that is clothing her, is our Lord Jesus Christ, and the moon under her feet, is John the Baptist.</td>
            <td class="coptic">Ⲡⲓⲣⲏ ⲅⲁⲣ ⲉ̀ⲧⲉⲥϫⲟⲗϩ ⲙ̀ⲙⲟϥ: ⲡⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲓⲟϩ ⲉⲧϧⲁ ⲛⲉⲥϭⲁⲗⲁⲩϫ: ⲡⲉ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ.</td>
            <td class="arabic">لأن الشمس المتسربلة بها، هي ربنا يسوع المسيح، والقمر الذي تحت رجليها، هو يوحنا المعمدان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_71" class="north">
            <td class="english">For the crown of twelve stars, upon her head are the twelve Apostles, who surround her, and honor her.</td>
            <td class="coptic">Ⲡⲓⲙⲏⲧⲥ̀ⲛⲁⲩ ⲅⲁⲣ ⲛ̀ⲥⲓⲟⲩ: ⲉⲧⲟⲓ ⲛ̀ⲭ̀ⲗⲟⲙ ⲉ̀ϫⲉⲛ ⲧⲉⲥⲁ̀ⲫⲉ: ⲡⲉ ⲡⲓⲙⲏⲧⲥ̀ⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉⲩⲕⲱϯ ⲉ̀ⲣⲟⲥ ⲉⲩϯⲧⲁⲓⲟ ⲛⲁⲥ.</td>
            <td class="arabic">والإثنا عشر كوكباً، المكللة رأسها، هي الإثنا عشر رسولاً، يحيطون بها ويكرمونها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_72" class="south">
            <td class="english">Therefore all you nations, let us glorify the Virgin, for she gave birth to God, and her virginity remained sealed.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
            <td class="arabic">فلهذا يا جميع الشعوب، نمجد العذراء، لأنها ولدت لنا الله، وبتوليتها مختومة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_73" class="north">
            <td class="english">He did not cease to be divine, He came and became the Son of Man, for He is the true God, who came and saved us. ${cross}</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">لم يزل إلهاً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلَّصنا. ${cross}</td>
        </tr>
        </tbody>
</table>
${lobsh}
`;
 return html;
}

function TheThursdayTheotokia_Lobsh(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Thursday Theotokia Lobsh">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Thursday Theotokia Lobsh
        <span class="coptic-caption">Ⲡⲓⲗⲱⲃϣ ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡ̀ⲧ̀ⲓⲟⲟⲩ</span>
        <span class="arabic-caption">لُبش ثيؤطوكية الخميس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">God the Invisible, who was before all ages, Moses was worthy to see, His glory upon the mountain.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲁⲧϣ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ: ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ: ⲁϥⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲛⲁⲩ ⲉ̀ⲡⲉϥⲱ̀ⲟⲩ: ⲛ̀ϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ϩⲓϫⲉⲛ ⲡⲓⲧⲱⲟⲩ.</td>
            <td class="arabic">الله الغير المنظور، قبل كل الدهور، إستحق أن يرى موسى، مجده على الجبل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For he saw the bush, and the fire in it, its branches did not burn, and its leaves were not damaged.</td>
            <td class="coptic">Ⲁϥⲛⲁⲩ ⲅⲁⲣ ⲉ̀ⲡⲓⲃⲁⲧⲟⲥ: ⲉ̀ⲣⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲟϩ ⲛ̀ϧⲏⲧϥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲣⲱⲕϩ ⲛ̀ϫⲉ ⲛⲉϥⲕ̀ⲗⲁⲇⲟⲥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲉ ⲛⲉϥϫⲱⲃⲓ ⲧⲁⲕⲟ.</td>
            <td class="arabic">لأنه رأى العليقة، والنار مشتعلة فيها، ولم تحترق أغصانها، ولم يفسد ورقها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Though the fire was aflame, the bush did not burn, that is because God was within it, and talking to the prophet.</td>
            <td class="coptic">Ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲉⲛ ⲁϥⲉⲣⲗⲁⲙⲡⲓⲛ: ϧⲉⲛ ⲡⲓⲃⲁⲧⲟⲥ ⲛⲁϥⲣⲱⲕϩ ⲁⲛ: ϫⲉ ⲉ̀ⲣⲉ Ⲫ̀ⲛⲟⲩϯ ⲥⲁϧⲟⲩⲛ ⲙ̀ⲙⲟⲥ: ⲉϥⲥⲁϫⲓ ⲛ̀ⲑⲟϥ ⲛⲉⲙ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">فالنار كانت تشتعل، في العليقة ولم تحترق، لأن الله داخلها، وهو يخاطب النبي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Saying “O Moses O Moses, O Moses the one I love, I am the God of your fathers, and there is no other besides me.</td>
            <td class="coptic">Ϫⲉ ⲱ̀ Ⲙⲱⲩ̀ⲥⲏⲥ ⲱ̀ Ⲙⲱⲩ̀ⲥⲏⲥ: ⲱ̀ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲉϯⲙⲉⲓ ⲙ̀ⲙⲟϥ: ⲁ̀ⲛⲟⲕ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲉⲕⲓⲟϯ: ⲙ̀ⲙⲟⲛ ⲕⲉ ⲟⲩⲁⲓ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">قائلاً "يا موسى يا موسى، يا موسى الذي أنا أحبه، أنا هو إله آبائك، وليس آخر سواي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Take off your sandals, which are upon your feet, for the place where you are standing, is holy ground O prophet.</td>
            <td class="coptic">Ⲃⲱⲗ ⲙ̀ⲡⲓⲑⲱⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ: ⲫⲏⲉ̀ⲧⲟⲓ ⲉ̀ⲛⲉⲕϭⲁⲗⲁⲩϫ: ϫⲉ ⲡⲓⲙⲁ ⲉ̀ⲧⲉⲕⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ ϩⲓϫⲱϥ: ⲟⲩⲕⲁϩⲓ ⲉϥⲟⲩⲁⲃ ⲡⲉ ⲱ̀ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">حِل الحذاء، الذي في رجليك، لأن الموضع الذي أنت واقف عليه، أرض مقدسة أيها النبي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Contemplate on the bush, and the fire within it, its branches did not burn, and its leaves were not damaged.”</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲛⲟⲓⲛ ⲛⲁⲕ ⲙ̀ⲡⲓⲃⲁⲧⲟⲥ: ⲉ̀ⲣⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲟϩ ⲛ̀ϧⲏⲧϥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲣⲱⲕϩ ⲛ̀ϫⲉ ⲛⲉϥⲕ̀ⲗⲁⲇⲟⲥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲉ ⲛⲉϥϫⲱⲃⲓ ⲧⲁⲕⲟ.</td>
            <td class="arabic">تأمل العليقة، والنار مشتعلة فيها، ولم تحترق أغصانها، ولم يفسد ورقها."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">This is a symbol of Mary, the undefiled virgin, from whom the Word of the Father, came and took flesh.</td>
            <td class="coptic">Ϥ̀ⲟⲓ ⲛ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲙⲁⲣⲓⲁ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ: ⲉ̀ⲧⲁ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">هي مثال لمريم، العذراء غير الدنسة، التي تجسد منها، كلمة الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Therefore we praise, with John the celibate, saying “Pure is this Bride, decorated for the Lamb.”</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣⲭⲟⲣⲉⲩⲓⲛ: ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ⲥ̀ⲟⲩⲁⲃ ⲛ̀ϫⲉ ⲧⲁⲓϣⲉⲗⲏⲧ: ⲉ̀ⲧⲁⲩⲥⲉⲗⲥⲱⲗⲥ ⲙ̀Ⲡⲓϩⲓⲏⲃ.</td>
            <td class="arabic">من أجل هذا نمدح، مع يوحنا البتول قائلين، "طاهرة هي هذه العروس، التي زُينت للحمل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">نسألِك أن تذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheFridayTheotokia_Watos(tableNumber) {
    const lobsh = TheFridayTheotokia_Lobsh(tableNumber + 1);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Friday Theotokia - Watos">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Friday Theotokia - Watos
        <span class="coptic-caption">Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲛ̀Ϯⲡⲁⲣⲁⲥ̀ⲕⲉⲩⲓ̀</span>
        <span class="arabic-caption">ثيؤطوكية الجمعة - واطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The First Part</td>
            <td class="coptic">Ϯϩⲟⲩⲓϯ</td>
            <td class="arabic">القطعة الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Blessed are you among women, and blessed is your Fruit, O Mary the Mother of God, the undefiled Virgin.</td>
            <td class="coptic">Ⲧⲉⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ϧⲉⲛ ⲛⲓϩⲓⲟⲙⲓ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲡⲉⲕⲁⲣⲡⲟⲥ: ⲱ̀ Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ.</td>
            <td class="arabic">مباركة أنتِ في النساء، ومباركة ثمرتكِ، يا مريم أم الله، العذراء غير الدنسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For the Sun of Righteousness, shone unto us from you, with healing under His wings, for He is the Creator.</td>
            <td class="coptic">Ϫⲉ ⲁϥϣⲁⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲛ̀ϫⲉ Ⲡⲓⲣⲏ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲉ̀ⲣⲉ ⲡⲓⲧⲁⲗϭⲟ ⲭⲏ ϧⲁ ⲛⲉϥⲧⲉⲛϩ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ.</td>
            <td class="arabic">لأنه قد أشرقت لنا منكِ، شمس البر، والشفاء في جناحيها، لأنه الخالق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="refrain">
            <td class="english">The Second Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ</td>
            <td class="arabic">القطعة الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You are blessed more favored than heaven, and more honored than earth, you exceed every thought, who can speak of your honor.</td>
            <td class="coptic">Ⲧⲉⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲉ̀ϩⲟⲧⲉ ⲧ̀ⲫⲉ: ⲧⲉⲧⲁⲓⲏⲟⲩⲧ ⲉ̀ϩⲟⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲧⲉⲥⲁⲡ̀ϣⲱⲓ ⲙ̀ⲙⲉⲩⲓ ⲛⲓⲃⲉⲛ: ⲛⲓⲙ ⲡⲉⲑⲛⲁϣ̀ⲥⲁϫⲓ ⲉ̀ⲡⲉⲧⲁⲓⲟ.</td>
            <td class="arabic">مباركة أنتِ أفضل من السماء، ومكرمة أفضل من الأرض، أنت فُقتِ كل فكر، مَنْ يقدر أن يصف كرامتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">No one is like you, O Mary the Virgin, the angels honor you, and the Seraphim glorify you.</td>
            <td class="coptic">Ⲙ̀ⲙⲟⲛ ⲫⲏⲉⲧⲧⲉⲛⲑⲱⲛⲧ ⲉ̀ⲣⲟ: ⲱ̀ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲥⲉⲧⲁⲓⲟ ⲙ̀ⲙⲟ: Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ ⲥⲉϯⲱ̀ⲟⲩ ⲛⲉ.</td>
            <td class="arabic">ليس من يُشبهِك، يا مريم العذراء، الملائكة تكرمِك، والسِّرافيم تُمجدِك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">For He who sits upon the Cherubim, came and was incarnate of you, and He united us with Him, through His goodness.</td>
            <td class="coptic">Ϫⲉ ⲁ̀ ⲫⲏⲉⲧϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ϣⲁ ⲛ̀ⲧⲉϥϩⲟⲧⲡⲉⲛ ⲉ̀ⲣⲟϥ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لأن الذي على الشاروبيم، أتى وتجسد منكِ، حتى إتحدنا به، من قِبَل صلاحه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="refrain">
            <td class="english">The Third Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲟⲙϯ</td>
            <td class="arabic">القطعة الثالثة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Blessed are you O Mary, and blessed is your Fruit, O Virgin Mother of God, the pride of virginity.</td>
            <td class="coptic">Ⲧⲉⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲑⲟ Ⲙⲁⲣⲓⲁ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲡⲉⲕⲁⲣⲡⲟⲥ: ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ϯⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
            <td class="arabic">مباركة أنتِ يا مريم، ومباركة ثمرتِك، أيتها العذراء أم الله، فخر البتولية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english">He who existed before all ages, came and was incarnate of you, and the Ancient of Days, came out of your womb.</td>
            <td class="coptic">Ⲫⲏⲉⲧϣⲟⲡ ϧⲁϫⲉⲛ ⲛⲓⲉ̀ⲱⲛ: ⲓ̀ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: Ⲡⲓⲁ̀ⲡⲁⲥ ⲛ̀ⲧⲉ Ⲛⲓⲉ̀ϩⲟⲟⲩ: ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲙⲏⲧⲣⲁ.</td>
            <td class="arabic">الكائن قبل الدهور، أتى وتجسد منكِ، عتيق الأيام، خرج من بطنِك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="south">
            <td class="english">He took our body, and gave us His Holy Spirit, and made us one with Him, through His goodness.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲧⲉⲛⲥⲁⲣⲝ: ⲁϥϯ ⲛⲁⲛ ⲙ̀Ⲡⲉϥⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲁϥⲁⲓⲧⲉⲛ ⲛ̀ⲟⲩⲁⲓ ⲛⲉⲙⲁϥ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">هو أخذ جسدنا، وأعطانا روحه القدوس، وجعلنا واحداً معه، من قِبَل صلاحه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english">The Fourth Part</td>
            <td class="coptic">Ϯⲙⲁϩϥ̀ⲧⲟ</td>
            <td class="arabic">القطعة الرابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Many women received honor, yet you exceeded them all, for you are the pride of virgins, O Mary the Theotokos.</td>
            <td class="coptic">Ⲁ̀ⲟⲩⲙⲏϣ ⲛ̀ⲥ̀ϩⲓⲙⲓ ϭⲓⲧⲁⲓⲟ: ⲁ̀ⲣⲉϭⲓⲥⲓ ⲛ̀ⲑⲟ ⲛ̀ϩⲟⲧⲉⲣⲱⲟⲩ ⲧⲏⲣⲟⲩ: ϫⲉ ⲛ̀ⲑⲟ ⲡⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ: Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">نساء كثيرات نلنَّ كرامات، تعاليت أنتِ أكثر من جميعهنَ، لأنكِ أنتِ فخر العذارى، يا مريم والدة الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">You are the soul's city, where the Most High lived, who sits upon the throne, of the Cherubim.</td>
            <td class="coptic">Ϯⲡⲟⲗⲓⲥ ⲙ̀ⲯⲩⲭⲟⲛ: ⲉ̀ⲧⲁ Ⲫⲏⲉⲧϭⲟⲥⲓ ϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲥ: ⲫⲏⲉⲧϩⲉⲙⲥⲓ ⲉ̀ϩ̀ⲣⲏⲓ ϩⲓϫⲉⲛ: ⲡ̀ϩⲁⲣⲙⲁ ⲛ̀Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">المدينة النفسية، التي سكن فيها العلي، الجالس على، مركبة الشاروبيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">The Seraphim glorify Him, and you held Him in your arms, He who gives food to all flesh, through His great kindness.</td>
            <td class="coptic">Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ ⲥⲉϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲁ̀ⲣⲉⲧⲁⲗⲟϥ ⲉ̀ϫⲉⲛ ⲛⲉϫ̀ⲫⲟⲓ: ⲫⲏⲉⲧϯϧ̀ⲣⲉ ⲛ̀ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧϣⲁⲛⲁϩ̀ⲑⲏϥ.</td>
            <td class="arabic">والسِّرافيم يمجدونه، حَملتِه على ذراعيكِ، المعطي طعاماً لكل ذي جسد، من قِبَل تحننه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english">He held to your breasts, and you fed Him, for He is our God, and the Savior of everyone.</td>
            <td class="coptic">Ⲁϥⲁ̀ⲙⲟⲛⲓ ⲛ̀ⲛⲉⲙ̀ⲛⲟϯ: ⲁ̀ⲣⲉϯⲉ̀ⲣⲱϯ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟϥ: ⲕⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲟⲩⲟϩ Ⲡ̀ⲥⲱⲧⲏⲣ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">مسكَ ثدييكِ، وأرضعتيه اللبن، لأنه هو إلهنا، ومخلص كل أحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">He shepherds all of us, forever and ever, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲡⲉⲑⲛⲁⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟⲛ: ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو يرعانا، إلى أبد الأبد، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="refrain">
            <td class="english">The Fifth Part</td>
            <td class="coptic">Ϯⲙⲁϩϯ</td>
            <td class="arabic">القطعة الخامسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">O Virgin Mary, the wise Mother of God, the garden of fragrance, the holy fountain of the living water.</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: Ϯⲙⲁⲥⲛⲟⲩϯ ⲛ̀ⲥⲁⲃⲏ: ⲡⲓⲕⲩⲡⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ: ϯⲙⲟⲩⲙⲓ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲡⲓⲙⲱⲟⲩ ⲛ̀ⲱⲛϧ.</td>
            <td class="arabic">أيتها العذراء مريم، والدة الإله الحكيمة، بُستان العطر، ينبوع ماء الحياة المقدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="north">
            <td class="english">The Fruit of your womb, came and saved the world, and He abolished all enmity, and established for us His peace.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲧⲉⲛⲉϫⲓ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ: ⲁϥⲃⲉⲗ ϯⲙⲉⲧϫⲁϫⲓ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲁϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉϥϩⲓⲣⲏⲛⲏ.</td>
            <td class="arabic">ثمرة بطنِك، أتى وخلَّص المسكونة، ونقض العداوة عنا، وقرر لنا سلامه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="south">
            <td class="english">Through His Cross, and His holy Resurrection, He restored man once again, to the Paradise.</td>
            <td class="coptic">Ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛⲉⲙ Ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲉⲑⲟⲩⲁⲃ: ⲁϥⲧⲁⲥⲑⲟ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲕⲉⲥⲟⲡ: ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
            <td class="arabic">من قِبَل صليبه، وقيامته المقدسة، رد الإنسان مرة أُخرى، إلى الفردوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="refrain">
            <td class="english">The Sixth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥⲟ</td>
            <td class="arabic">القطعة السادسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">O Virgin Mary, the holy Mother of God, the trusted advocate, of the human race.</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ: ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛ̀ⲧⲉ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">أيتها العذراء مريم، والده الإله القديسة، الشفيعة الأمينة، التي لجنس البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">Intercede on our behalf, before Christ whom you have born, that He may grant unto us, the forgiveness of our sins.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛⲁϩⲣⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲫⲏⲉ̀ⲧⲁⲣⲉϫ̀ⲫⲟϥ: ϩⲟⲡⲟⲥ ⲛ̀ⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">إشفعي فينا، أمام المسيح الذي ولدتِه، لكي ينعم علينا، بمغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="refrain">
            <td class="english">The Seventh Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲁϣϥⲓ</td>
            <td class="arabic">القطعة السابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="north">
            <td class="english">The Virgin Mary has proclaimed, in the altar, saying “My peace, God does know.</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ⲱϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ: ϫⲉ ⲡⲁⲁⲥⲡⲁⲥⲙⲟⲥ ⲁ̀ⲛⲟⲕ: Ⲫ̀ⲛⲟⲩϯ ⲡⲉⲧⲉ̀ⲙⲓ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">العذراء مريم، تصرخ في الهيكل، قائلة "سلامي أنا، يَعلمه الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="south">
            <td class="english">For I know nothing, other than the voice of the angel, announcing the joy, coming to me from heaven.”</td>
            <td class="coptic">Ϯⲥⲱⲟⲩⲛ ⲅⲁⲣ ⲛ̀ϩ̀ⲗⲓ ⲁⲛ: ⲉ̀ⲃⲏⲗ ⲉ̀ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲉϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲣⲁϣⲓ: ⲉϥⲛⲏⲟⲩ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ.</td>
            <td class="arabic">لأني لا أعرف شيئاً، سوى صوت الملاك، يبشرني بفرح، آتٍ إليَّ من السماء."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="north">
            <td class="english">He took what is ours, and gave us what is His, we praise and glorify Him, and exalt Him. ${cross}</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲁϥϭⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲛ: ⲁϥϯ ⲛⲁⲛ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ. ${cross}</td>
            <td class="arabic">هو أخذ الذي لنا، وأعطانا الذي له، نسبحه ونمجده، ونزيده علواً. ${cross}</td>
        </tr>
        </tbody>
</table>
${lobsh}
`;
 return html;
}

function TheFridayTheotokia_Lobsh(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Friday Theotokia Lobsh">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Friday Theotokia Lobsh
        <span class="coptic-caption">Ⲡⲓⲗⲱⲃϣ ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲛ̀Ϯⲡⲁⲣⲁⲥ̀ⲕⲉⲩⲓ̀</span>
        <span class="arabic-caption">لُبش ثيؤطوكية الجمعة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">What do I call you, O all-holy Virgin, who gave birth to the Incomprehensible, and Infinite One.</td>
            <td class="coptic">Ⲁⲓⲛⲁⲙⲟⲩϯ ⲉ̀ⲣⲟ ϫⲉ ⲛⲓⲙ: ⲱ̀ ϯⲡⲁⲛⲁ̀ⲅⲓⲁ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲥϥⲁⲓ ϧⲁ Ⲡⲓⲁⲧϣ̀ⲧⲁϩⲟϥ: ⲟⲩⲟϩ ⲛ̀Ⲁ̀ⲭⲱⲣⲓⲧⲟⲥ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">بماذا أدعوكِ، أيتها العذراء الكلية القداسة، التي حملت غير المُدرَك، وغير المحوى أيضاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Many are your praises, O who is adorned with honor, for you became a dwelling, for the wisdom of God.</td>
            <td class="coptic">Ⲥⲉⲟϣ ⲅⲁⲣ ⲛ̀ⲧⲉ ⲛⲉⲉⲩⲫⲟⲙⲓⲁ: ⲱ̀ ⲑⲏⲉⲧⲥⲉⲗⲥⲱⲗ ϧⲉⲛ ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ: ϫⲉ ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛ̀ⲟⲩⲙⲁ ⲛ̀ϣⲱⲡⲓ: ⲛ̀ϯⲥⲟⲫⲓⲁ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">تكثر مدائحِك، أيتها المزينة بكل كرامة، لأنكِ صرتِ مسكناً، لحكمة الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You are the rational net, that catches Christians, and teaches them to worship, the life-giving Trinity.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲡⲉ ϯⲱⲓⲙⲓ ⲛ̀ⲛⲟⲏ̀ⲧⲉ: ⲉⲧⲧⲁϩⲟ ⲛ̀Ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲉⲥⲧ̀ⲥⲁⲃⲟ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ϯϫⲓⲛⲱⲟⲩϣⲧ: ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ.</td>
            <td class="arabic">أنتِ هي الصنارة العقلية، التي تصطاد المسيحيين، وتعلمهم السجود، للثالوث المحيي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">You are the one who carried, the Pillar which Moses saw, who is the Son of God, who came and dwelt in your womb.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲧⲉ ⲧⲁⲣⲉϥⲁⲓ ϧⲁ Ⲡⲓⲥ̀ⲧⲩⲗⲗⲟⲥ: ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲥ ⲛ̀ϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲉ̀ⲧⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ.</td>
            <td class="arabic">أنتِ التي حملتِ العامود، الذي رآه موسى، هو إبن الله، أتى وحلَّ في بطنِك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">You became the ark, for Him who created heaven and earth, you carried Him in your womb, for nine full months.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛ̀ⲟⲩⲕⲓⲃⲱⲧⲟⲥ: ⲙ̀ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ: ⲁ̀ⲣⲉϥⲁⲓ ϧⲁⲣⲟϥ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ: ⲙ̀ⲯⲓⲧ ⲛ̀ⲁ̀ⲃⲟⲧ ⲛ̀ⲏ̀ⲡⲓ.</td>
            <td class="arabic">صرتِ تابوتاً، لخالق السماء والأرض، حملته في بطنِك، تسعة أشهر عدداً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You were also entrusted with, the fullness of heaven and earth, and you became our reason, to progress to heaven.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲟⲛ ⲧⲉ ⲉ̀ⲧⲁⲩⲧⲉⲛϩⲟⲩⲧⲥ: ⲉ̀ϯⲟⲩⲏϣⲥⲓ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ: ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲗⲱⲓϫⲓ: ⲉ̀ⲡⲓⲙⲁⲙ̀ⲙⲟϣⲓ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ.</td>
            <td class="arabic">وأنتِ أيضاً أؤتمنتِ، على سعة السماء والأرض، وصرتِ لنا سبباً، للإرتقاء إلى السماء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">You are brighter than the sun, you are the East, toward which the righteous look, with happiness and joy.</td>
            <td class="coptic">Ⲧⲉⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ϩⲟⲧⲉ ⲫ̀ⲣⲏ: ⲛ̀ⲑⲟ ⲡⲉ ⲡ̀ⲥⲁ ⲛ̀ϯⲁ̀ⲛⲁⲧⲟⲗⲏ: ⲉ̀ⲣⲉ ⲛⲓⲑ̀ⲙⲏⲓ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁϫⲱⲥ: ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ.</td>
            <td class="arabic">أنتِ مضيئة أكثر من الشمس، أنتِ هي ناحية المشرق، التي ينظرها الأبرار، بفرح وتهليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Eve was sentenced, to give birth with deep pain, while to you it was said, “Hail to you O full of grace.”</td>
            <td class="coptic">Ⲁⲩⲉⲣⲕⲁⲧⲁⲕ̀ⲣⲓⲛⲓⲛ ⲛ̀Ⲉ̀ⲩⲁ: ϫⲉ ⲧⲉⲣⲁⲙⲓⲥⲓ ϧⲉⲛ ⲟⲩⲉⲙⲕⲁϩⲛ̀ϩⲏⲧ: ⲛ̀ⲑⲟ ϩⲱⲓ ⲁ̀ⲣⲉⲥⲱⲧⲉⲙ: ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ.</td>
            <td class="arabic">حُكِم على حواء، بالولادة بوجع القلب، أما أنتِ فسمعتِ، "إفرحي يا مُمْتلئة نعمة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">You gave birth to the King for us, the Lord of all creation, He came and redeemed us from our sins, as a Good One and Lover of Man.</td>
            <td class="coptic">Ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲡ̀ⲟⲩⲣⲟ: Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: ⲁϥⲓ̀ ⲁϥⲥⲟⲧⲧⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ولدتِ لنا الملك، رب كل البرية، أتى وخلصنا من خطايانا، كصالح ومحب البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Therefore we sing, with Elizabeth your cousin saying, “Blessed are you among women, and blessed is the Fruit of your womb.”</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣⲭⲟⲣⲉⲩⲓⲛ: ⲛⲉⲙ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ ⲧⲉⲥⲉⲅⲅⲉⲛⲏⲥ: ϫⲉ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲑⲟ ϧⲉⲛ ⲛⲓϩⲓⲟⲙⲓ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲧⲉ Ⲡ̀ⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ⲧⲉⲛⲉϫⲓ.</td>
            <td class="arabic">من أجل هذا نرتل، مع أليصابات نسيبتِك قائلين، "مباركة أنتِ في النساء، ومباركة هي ثمرة بطنِك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">نسألِك أن تذكرينا، أيتهالمؤتمنةا الشفيعة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function TheSaturdayTheotokia_Watos(tableNumber) {
    const lobsh = TheSaturdayTheotokia_Lobsh(tableNumber + 1);
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Saturday Theotokia - Watos">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Saturday Theotokia - Watos
        <span class="coptic-caption">Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ</span>
        <span class="arabic-caption">ثيؤطوكية السبت - واطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="refrain">
            <td class="english">The First Part</td>
            <td class="coptic">Ϯϩⲟⲩⲓϯ</td>
            <td class="arabic">القطعة الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">O chaste and undefiled, holy in everything, who brought God for us, carried in her arms.</td>
            <td class="coptic">Ϯⲁⲧⲑⲱⲗⲉⲃ ⲛ̀ⲥⲉⲙⲛⲉ: ⲟⲩⲟϩ ⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ⲑⲏⲉ̀ⲧⲁⲥⲓ̀ⲛⲓ ⲛⲁⲛ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲉϥⲧⲁⲗⲏⲟⲩⲧ ⲉ̀ϫⲉⲛ ⲛⲉⲥϫ̀ⲫⲟⲓ.</td>
            <td class="arabic">أيتها الغير الدَّنِسة العفيفة، القديسة في كل شئ، التي قَدَّمت لنا، الله محمولاً على ذراعيها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">The whole creation rejoiced with you, proclaiming and saying, “Hail to you O full of grace, the Lord is with you.”</td>
            <td class="coptic">Ⲥ̀ⲣⲁϣⲓ ⲛⲉⲙⲉ ⲛ̀ϫⲉ ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: ⲉⲥⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">تفرح معكِ كل الخليقة، صارخة قائلة، "السلام لكِ يا مُمْتلئة نعمة، الربُّ مَعَكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="refrain">
            <td class="english">The Second Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ</td>
            <td class="arabic">القطعة الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We are blessed by your greatness, O prudent Virgin, and send unto you greetings, with Gabriel the angel.</td>
            <td class="coptic">Ⲧⲉⲛⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ⲛ̀ⲧⲉⲙⲉⲧⲛⲓϣϯ: ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲁⲃⲏ: ⲧⲉⲛϯ ⲛⲉ ⲙ̀ⲡⲓⲭⲉⲣⲉⲧⲓⲥⲙⲟⲥ: ⲛⲉⲙ Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">نُغبِطُ عظمتكِ، أيتها العذراء الحكيمة، ونُعطيكِ السلام، مع غبريال الملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">For through your Fruit, salvation came to our race, and God has reconciled with us once again, through His goodness.</td>
            <td class="coptic">Ϫⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡⲉⲕⲁⲣⲡⲟⲥ: ⲁ̀ ⲡⲓⲟⲩϫⲁⲓ ⲧⲁϩⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ Ⲫ̀ⲛⲟⲩϯ ϩⲟⲧⲡⲉⲛ ⲉ̀ⲣⲟϥ ⲛ̀ⲕⲉⲥⲟⲡ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لأن من قِبَل ثمرتِك، أدرك الخلاص جنسنا، وأصلحنا الله مرةً أخرى، من قِبَل صلاحه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="refrain">
            <td class="english">The Third Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲟⲙϯ</td>
            <td class="arabic">القطعة الثالثة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Like a bridal chamber without blemish, the Holy Spirit came upon you, and the power of the Most High, overshadowed you O Mary.</td>
            <td class="coptic">Ϩⲱⲥ ⲙⲁⲛ̀ϣⲉⲗⲉⲧ ⲛ̀ⲁⲧⲧⲁⲕⲟ: ⲁ̀ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲓ̀ ⲉ̀ϫⲱ: ⲟⲩϫⲟⲙ ⲛ̀ⲧⲉ Ⲫⲏⲉⲧϭⲟⲥⲓ: ⲉⲑⲛⲁⲉⲣϧⲏⲓⲃⲓ ⲉ̀ⲣⲟ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">كخِدرٍ بغير فسادٍ، الرُّوح القُدُس حلَّ عليكِ، وقوة العليْ، ظلَّلتِكِ يا مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">For you have given birth, to the true Logos, the Son of the ever-existing Father, who came and redeemed us from our sins.</td>
            <td class="coptic">Ϫⲉ ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲙ̀Ⲡⲓⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲛ̀Ⲗⲟⲅⲟⲥ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ: ⲁϥⲓ̀ ⲁϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">لأنكِ ولَدْتِ، الكلمة الحقيقي إبن الآب، الدائم إلى الأبد، أتى وخَلَّصنا من خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="refrain">
            <td class="english">The Fourth Part</td>
            <td class="coptic">Ϯⲙⲁϩϥ̀ⲧⲟ</td>
            <td class="arabic">القطعة الرابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">You are the offspring, and root of David, who has given birth for us according to the flesh, our Savior Jesus Christ.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲅⲁⲣ ⲡⲉ ⲡⲓⲅⲉⲛⲟⲥ: ⲛⲉⲙ ϯⲛⲟⲩⲛⲓ ⲛ̀ⲧⲉ Ⲇⲁⲩⲓⲇ: ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲥⲁⲣⲝ: ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">أنتِ هي جنس، وأصل داود، ولَدْتِ لنا جسدياً، مُخَلِّصنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">The only-begotten of the Father, before all ages, emptied Himself and took the form of a servant, from you for our salvation.</td>
            <td class="coptic">Ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ: ⲁϥϣⲟⲩⲱϥ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲓⲛⲙ̀ⲙⲟϥ ⲁϥϭⲓ ⲛ̀ⲟⲩⲙⲟⲣⲫⲏ ⲙ̀ⲃⲱⲕ ⲛ̀ϧⲏϯ: ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ.</td>
            <td class="arabic">الوحيد من الآب، قبل كل الدهور، أخلى ذاته وأخذ شكل عبد منكِ، لأجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="refrain">
            <td class="english">The Fifth Part</td>
            <td class="coptic">Ϯⲙⲁϩϯ</td>
            <td class="arabic">القطعة الخامسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">You became a second heaven, on earth O Mother of God, for out of you the Sun of Righteousness, shone upon us.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛ̀ⲟⲩⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲙ̀ⲫⲉ: ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ ⲱ̀ Ϯⲙⲁⲥⲛⲟⲩϯ: ϫⲉ ⲁϥϣⲁⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲛ̀ϫⲉ Ⲡⲓⲣⲏ ⲛ̀ⲧⲉ ϯⲇⲓⲕⲉⲟ̀ⲥⲩⲛⲏ.</td>
            <td class="arabic">صرتِ سماءً ثانيةً، على الأرض يا والدة الإله، لأنه أشرق لنا منكِ، شمس البر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">You gave birth to Him according to the prophecy, without seed or corruption, for He is the Creator, and the Word of the Father.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϫ̀ⲫⲟϥ ϩⲓⲧⲉⲛ ⲟⲩⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲁϭⲛⲉ ϫ̀ⲣⲟϫ ⲛ̀ⲁⲧⲧⲁⲕⲟ: ϩⲱⲥ Ⲇⲏⲙⲓⲟⲩⲣⲅⲟⲥ: ⲟⲩⲟϩ ⲛ̀Ⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">وَلَدْتِه كالنبوة، بغير زرعٍ ولا فسادٍ، وهو الخالق، وكلمة الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="north">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="refrain">
            <td class="english">The Sixth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲥⲟ</td>
            <td class="arabic">القطعة السادسة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english">The tabernacle which is called, the holy of holies, which contains the ark, overlaid roundabout with gold.</td>
            <td class="coptic">Ϯⲥ̀ⲕⲏⲛⲏ ⲑⲏⲉ̀ⲧⲟⲩⲙⲟⲩϯ ⲉ̀ⲣⲟⲥ: ϫⲉ ⲑⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ: ⲉ̀ⲣⲉ ϯⲕⲓⲃⲱⲧⲟⲥ ⲛ̀ϧⲏⲧⲥ: ⲉⲧⲟϣϫ ⲛ̀ⲛⲟⲩⲃ ⲛ̀ⲥⲁⲥⲁ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">القُبَّة التي تُدعَى، قُدس الأقداس، التي فيها التابوت، المُصفَّح بالذهب من كل ناحيةٍ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english">Wherein are the tablets, of the covenant, and the golden vessel, wherein the manna was hidden.</td>
            <td class="coptic">Ⲑⲏ ⲉ̀ⲣⲉ ⲛⲓⲡ̀ⲗⲁⲝ ⲛ̀ϧⲏⲧⲥ: ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ: ⲛⲉⲙ ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ ⲛ̀ⲛⲟⲩⲃ: ⲉ̀ⲣⲉ ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ ⲛ̀ϧⲏⲧϥ.</td>
            <td class="arabic">التي فيه، لوحا العهد، والقِسط الذهبي، المُخفى فيه المَنَّ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">This is a symbol of the Son of God, who came and dwelt in Mary, the undefiled Virgin, and was incarnate of her.</td>
            <td class="coptic">Ϥ̀ⲟⲓ ⲛ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲉ̀ⲧⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ϧⲉⲛ Ⲙⲁⲣⲓⲁ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ: ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">هو مِثال لإبن الله، الذي أتى وحَلَّ في مريم، العذراء غير الدنِسة، وتَجسَّد منها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">She gave birth to Him unto the world, in unity without separation, for He is the King of glory, who came and saved us.</td>
            <td class="coptic">Ⲁⲥϫ̀ⲫⲟϥ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲟⲩⲁⲓ ⲛ̀ⲁⲧⲫⲱⲣϫ: ⲁⲗⲗⲁ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">وَلَدَتهُ للعالم، بإتحاد بغير إفتراق، إذ هو ملك المجد، أتى وخَلَّصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">Paradise rejoiced, at the coming of the Lamb, the Word the Son of the ever-existing Father, who came and redeemed us from our sins.</td>
            <td class="coptic">Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲉ̀ϣ̀ⲗⲏⲗⲟⲩⲓ̀: ϫⲉ ⲁϥⲓ̀ ⲛ̀ϫⲉ Ⲡⲓϩⲓⲏⲃ: ⲛ̀Ⲗⲟⲅⲟⲥ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ: ⲁϥⲓ̀ ⲁϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">يتهلَّل الفردوس، بمجئ الحمل الكلمة، إبن الآب الدائم إلى الأبد، ليُخلِّصنا من خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="refrain">
            <td class="english">The Seventh Part</td>
            <td class="coptic">Ϯⲙⲁϩϣⲁϣϥⲓ</td>
            <td class="arabic">القطعة السابعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="south">
            <td class="english">You are called the Mother of God, the true King, and after He was born from you, miraculously you remained a virgin.</td>
            <td class="coptic">Ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟ ϫⲉ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲡⲓⲟⲩⲣⲟ ⲙ̀ⲙⲏⲓ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲙⲁⲥϥ: ⲁ̀ⲣⲉⲟ̀ϩⲓ ⲉ̀ⲣⲉⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ⲟⲩϩⲱⲃ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ.</td>
            <td class="arabic">دُعيتِ أُم الله، الملك الحقيقي، وبعد ما وَلَدْتِهِ، بَقيتِ عذراء بأمرٍ عجيبٍ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">Emmanuel whom you have born, has kept you, without corruption, and your virginity remained sealed.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲫⲏⲉ̀ⲧⲁⲣⲉϫ̀ⲫⲟϥ: ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟ: ⲉ̀ⲣⲉⲟⲓ ⲛ̀ⲁⲧⲧⲁⲕⲟ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
            <td class="arabic">عمانوئيل الذي وَلَدْتِهِ، هو حَفَظكِ، بغير فسادٍ، وبتوليتِكِ مختومة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="refrain">
            <td class="english">The Eighth Part</td>
            <td class="coptic">Ϯⲙⲁϩϣ̀ⲙⲏⲛⲓ</td>
            <td class="arabic">القطعة الثامنة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="north">
            <td class="english">You were likened to the ladder, which Jacob saw, rising up to heaven, with the awesome God standing above it.</td>
            <td class="coptic">Ⲁ̀ⲣⲉⲧⲉⲛⲑⲱⲛϯ ⲉ̀ϯⲙⲟⲩⲕⲓ: ⲑⲏⲉ̀ⲧⲁ Ⲓⲁⲕⲱⲃ ⲛⲁⲩ ⲉ̀ⲣⲟⲥ: ⲉⲥϭⲟⲥⲓ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲉ̀ⲣⲉ Ⲡ̀ϭⲟⲓⲥ ϩⲓϫⲱⲥ ϧⲉⲛ ⲟⲩϩⲟϯ.</td>
            <td class="arabic">شُبِّهتِ بالسُلَّم، الذي رآه يعقوب، مُرتفعاً إلى السماء، والرب المخوف عليه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="south">
            <td class="english">We hail the one who did accept, the Infinite One in her womb, and her virginity, was sealed from all sides.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲉⲛ: ⲱ̀ ⲑⲏⲉ̀ⲧⲁⲥϣⲱⲡ ⲉ̀ⲣⲟⲥ ⲙ̀Ⲡⲓⲁ̀ⲭⲱⲣⲓⲧⲟⲥ: ϧⲉⲛ ⲧⲉⲥⲙⲏⲧⲣⲁ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲏ: ⲟⲩⲟϩ ⲉⲥϣⲟⲧⲉⲙ ⲛ̀ⲥⲁⲥⲁ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">سلامنا إلى مَنْ قَبِلتْ، غير المُحوَى في بطنها، وبتوليتها مختومة، من كل ناحية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_34" class="north">
            <td class="english">You have become our intercessor, before God our Savior, who became incarnate of you, for our salvation.</td>
            <td class="coptic">Ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ: ⲛⲁϩⲣⲉⲛ Ⲫ̀ⲛⲟⲩϯ Ⲡⲉⲛⲣⲉϥⲥⲱϯ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ.</td>
            <td class="arabic">صرتِ لنا شفيعة، أمام الله مُخَلِّصنا، الذي تَجسَّد منكِ، لأجل خلاصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_36" class="refrain">
            <td class="english">The Ninth Part</td>
            <td class="coptic">Ϯⲙⲁϩⲯⲓϯ</td>
            <td class="arabic">القطعة التاسعة</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_37" class="north">
            <td class="english">Behold the Lord came out of you, O blessed and perfect one, to save the world which He has created, according to His many tender mercies.</td>
            <td class="coptic">Ϩⲏⲡⲡⲉ ⲓⲥ Ⲡ̀ϭⲟⲓⲥ ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲱ̀ ⲑⲏⲉⲧⲥ̀ⲙⲁⲙⲁⲧ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲉ̀ⲛⲟϩⲉⲙ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟϥ: ⲉⲑⲃⲉ ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ ⲉⲧⲟϣ.</td>
            <td class="arabic">هوذا الرب خرج منكِ، أيتها المباركة الكاملة، ليُخَلِّص العالم الذي خَلَقه، حسب كثرة رأفاته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_38" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy on us according to Your great mercy.</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">نُسبِّحهُ ونُمجِّدهُ، ونُزيدهُ علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_39" class="north">
            <td class="english">Hail to you O full of grace, hail to you who has found grace, hail to you who has given birth to Christ, the Lord is with you. ${cross}</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥϫⲉⲙ ϩ̀ⲙⲟⲧ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ. ${cross}</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، السلام لكِ يا مَنْ وجدتِ نعمة، السلام لكِ يا مَنْ ولَدْتِ المسيح، الربُّ مَعَكِ. ${cross}</td>
        </tr>
        </tbody>
</table>
${lobsh}
`;
 return html;
}

function TheSaturdayTheotokia_Lobsh(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Saturday Theotokia Lobsh - The Sherat">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Saturday Theotokia Lobsh - The Sherat
        <span class="coptic-caption">Ⲡⲓⲗⲱⲃϣ ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲙ̀Ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ</span>
        <span class="arabic-caption">لُبش ثيؤطوكية السبت - الشيرات</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The First Sherat</td>
            <td class="coptic">-</td>
            <td class="arabic">الشيرات الأولى</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to you O full of grace, the undefiled Virgin, the chosen vessel, for all the world.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ: ⲡⲓⲕⲩⲙⲓⲗⲗⲓⲟⲛ ⲉⲧⲥⲱⲧⲡ: ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ.</td>
            <td class="arabic">السلام لكِ يا مُمْتلئة نعمة، العذراء غير الدنِسة، الإناء المُختار، لكل المسكونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The unextinguished lamp, the pride of virginity, the indestructible altar, and the scepter of the faith.</td>
            <td class="coptic">Ⲡⲓⲗⲁⲙⲡⲁⲥ ⲛ̀ⲁⲧϭⲉⲛⲟ: ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ϯⲡⲁⲣⲑⲉⲛⲓⲁ: ⲡⲓⲉⲣⲫⲉⲓ ⲛ̀ⲁⲧⲃⲱⲗ ⲉ̀ⲃⲟⲗ: ⲟⲩⲟϩ ⲡⲓϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ.</td>
            <td class="arabic">المصباح غير المُطفَأ، فخر البتولية، الهيكل غير المُنْقَض، وقَضيب الإيمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Ask of Him whom you have born, our good Savior, to take away our troubles, and grant us His peace.</td>
            <td class="coptic">Ⲙⲁϯϩⲟ ⲙ̀ⲫⲏⲉ̀ⲧⲁⲣⲉⲙⲁⲥϥ: Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛ̀ⲧⲉϥⲱ̀ⲗⲓ ⲛ̀ⲛⲁⲓϧⲓⲥⲓ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲛ̀ⲧⲉϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉϥϩⲓⲣⲏⲛⲏ.</td>
            <td class="arabic">إسألي الذي وَلَدْتِهِ، مُخلِّصنا الصالح، أن يرفع عنا هذه الأتعاب، ويُقرِّر لنا سلامه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to you O full of grace, the pure lampstand, the bearer of the Lamp, the fire of the divinity.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ϯⲗⲩⲭⲛⲓⲁ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲥϥⲁⲓ ϧⲁ Ⲡⲓⲗⲁⲙⲡⲁⲥ: ⲡⲓⲭ̀ⲣⲱⲙ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲛⲟⲩϯ.</td>
            <td class="arabic">إفرحي يا مُمْتلئة نعمة، المنارة النقية، حاملة المصباح، نار اللاهوت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Rejoice O hope of salvation, for all the creation, for through you we have been freed, from the curse of Eve.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯϩⲉⲗⲡⲓⲥ ⲛ̀ⲟⲩϫⲁⲓ: ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ: ⲉⲑⲃⲏϯ ⲅⲁⲣ ⲁⲛⲉⲣⲣⲉⲙϩⲉ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲥⲁϩⲟⲩⲓ̀ ⲛ̀ⲧⲉ Ⲉ̀ⲩⲁ.</td>
            <td class="arabic">إفرحي يا رجاء خلاص، كل المسكونة، لأننا من أجلكِ، عُتقنا من لعنة حواء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Because of you also we became, a dwelling for the Holy Spirit, who came upon you, and sanctified you.</td>
            <td class="coptic">Ⲉⲑⲃⲏϯ ⲟⲛ ⲁⲛⲉⲣⲙⲁⲛ̀ϣⲱⲡⲓ: ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲫⲁⲓ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱ: ⲁϥⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟ.</td>
            <td class="arabic">ومن أجلكِ أيضاً صرنا، مسكناً للرُّوح القُدُس، الذي حَلَّ عليكِ، وقَدَّسكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Hail to the one, whom Gabriel greeted saying, “Hail to you O full of grace, the Lord is with you.”</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁ Ⲅⲁⲃⲣⲓⲏⲗ: ⲉⲣⲭⲉⲣⲉⲧⲓⲍⲓⲛ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">السلام للتي أقرأها، غبريـال السلام قائلاً، "السلام لكِ يا مُمْتلئة نعمة، الربُّ مَعَكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The joy of the Father, was in your conception, and the Coming of the Son, was in your womb.</td>
            <td class="coptic">Ⲁ̀ ⲡ̀ϯⲙⲁϯ ⲅⲁⲣ ⲙ̀Ⲫ̀ⲓⲱⲧ: ϣⲱⲡⲓ ϧⲉⲛ ⲡⲉϫⲓⲛⲉⲣⲃⲟⲕⲓ: ⲁ̀ ⲧ̀ⲡⲁⲣⲟⲩⲥⲓⲁ ⲙ̀Ⲡⲓϣⲏⲣⲓ: ϣⲱⲡⲓ ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲧⲉⲙⲏⲧⲣⲁ.</td>
            <td class="arabic">لأن مسرة الآب، كانت في حَبَلكِ، وظهور الإبن، كان في أحشائكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">The Holy Spirit, filled every part of you, your soul and your body, O Mary the Mother of God.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲙⲟϩ ⲙ̀ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ: ⲧⲉⲯⲩⲭⲏ ⲛⲉⲙ ⲡⲉⲥⲱⲙⲁ: ⲱ̀ Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">والرُّوح القُدُس، ملأَ كل موضع منكِ، نفسكِ وجسدكِ، يا مريم أُم الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Therefore we too celebrate, both a spiritual, and prophetic feast, proclaiming with King David.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣϣⲁⲓ ϩⲱⲛ: ϧⲉⲛ ⲟⲩϣⲁⲓ ⲙ̀ⲡ̅ⲛ̅ⲁ̅ⲧⲓⲕⲟⲛ: ⲟⲩⲟϩ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ ⲉⲩⲥⲟⲡ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">لأجل هذا نُعيِّد نحن أيضاً، عيداً روحِيَّاً، ونبوِيَّاً معاً، صارخين مع الملك داود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">“Arise O Lord to Your rest, You and the ark, of Your sanctuary, which is you O Mary.”</td>
            <td class="coptic">Ϫⲉ ⲧⲱⲛⲕ Ⲡ̀ϭⲟⲓⲥ ⲉ̀ⲡⲉⲕⲙ̀ⲧⲟⲛ: ⲛ̀ⲑⲟⲕ ⲛⲉⲙ ϯⲕⲓⲃⲱⲧⲟⲥ: ⲛ̀ⲧⲉ ⲡⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ: ⲉ̀ⲧⲉ ⲛ̀ⲑⲟ ⲧⲉ ⲱ̀ Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">قائلين "قُمْ يا رب، إلى راحتك، أنتَ وتابوت موضعك المقدس، الذي هو أنتِ يا مريم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">نسألكِ أن تذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">The Second Sherat</td>
            <td class="coptic">-</td>
            <td class="arabic">الشيرات الثانية</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Hail to you O full of grace, the undefiled Virgin, the tabernacle not made by hands, the treasure of righteousness.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ: ϯⲥ̀ⲕⲏⲛⲏ ⲛ̀ⲁⲑⲙⲟⲩⲛⲕ ⲛ̀ϫⲓϫ: ⲡⲓⲁ̀ϩⲟ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">السلام للمُمْتلئة نعمة، العذراء غير الدنِسة، القُبَّة غير المصنوعة بالأيدي، كنز البر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Hail to you O beautiful dove, who declared to us, the peace of God, toward mankind.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲑⲏⲉ̀ⲧⲁⲥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲛ: ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ⲑⲏⲉ̀ⲧⲁⲥϣⲱⲡⲓ ϣⲁ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">السلام للحمامة الحسنة، التي بشَّرتنا، بسلام الله، الذي صار للبشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Hail to the Mother of the Incarnated, of His own free will, and the pleasure of His Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲑ̀ⲙⲁⲩ ⲙ̀ⲫⲏⲉ̀ⲧⲁϥ-ⲉⲣⲣⲱⲙⲓ: ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">السلام لأُم المُتَأنِّس، بإرادته وحده، ومسرة أبيه، والرُّوح القُدُس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">Hail to you O golden vessel, wherein the Manna was hidden, and the almond wooden rod, with which Moses hit the rock.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲥ̀ⲧⲁⲙⲛⲟⲥ ⲛ̀ⲛⲟⲩⲃ: ⲉ̀ⲣⲉ Ⲡⲓⲙⲁⲛⲛⲁ ϩⲏⲡ ⲛ̀ϧⲏⲧϥ: ⲛⲉⲙ ⲡⲓϣ̀ⲃⲱⲧ ⲛ̀ϣⲉ ⲙ̀ⲡⲉⲩⲕⲓⲛⲱⲛ: ⲉ̀ⲧⲁ Ⲙⲱⲩ̀ⲥⲏⲥ ⲙⲉϣ ϯⲡⲉⲧⲣⲁ ⲛ̀ϧⲏⲧϥ.</td>
            <td class="arabic">السلام للقسط الذهبي، المُخفى فيه المَنَّ، وعصا الخشب اللوزي، التي ضَرَبَ بها موسى الصخرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english">Hail to you O full of grace, O the spiritual table, that gives life to everyone, who eats from it.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲕⲉ ⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ⲱ̀ ϯⲧ̀ⲣⲁⲡⲉⲍⲁ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲏ: ⲉⲧϯ ⲙ̀ⲡ̀ⲱⲛϧ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲑⲛⲁⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">السلام للمُمْتلئة نعمة، المائدة الروحية، التي تُعطي الحياة، لكل مَنْ يأكل منها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Hail to you O incorrupt vessel, of the divinity, which heals everyone, who drinks from it.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲕⲩⲙⲓⲗⲗⲓⲟⲛ: ⲛ̀ⲁⲫⲑⲁⲣⲧⲟⲛ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲛⲟⲩϯ: ⲉ̀ⲧⲉⲣⲫⲁϧⲣⲓ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲑⲛⲁⲥⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ.</td>
            <td class="arabic">السلام للإناء غير الفاسد، الذي للاهوت، المُعطي الشفاء، لكل مَنْ يشرب منه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">I begin eagerly to move, the strings of my tongue, and speak of the honor of this Virgin, together with her analogies.</td>
            <td class="coptic">Ⲁⲓⲛⲁⲉⲣϩⲏⲧⲥ ϧⲉⲛ ⲟⲩϭⲓϣϣⲱⲟⲩ: ⲛ̀ⲧⲁⲕⲓⲙ ⲙ̀ⲡ̀ⲟⲣⲅⲁⲛⲟⲛ ⲙ̀ⲡⲁⲗⲁⲥ: ⲛ̀ⲧⲁϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲛ̀ⲧⲉ ⲧⲁⲓⲠⲁⲣⲑⲉⲛⲟⲥ: ⲛⲉⲙ ⲛⲉⲥⲥⲩⲅⲅⲱⲙⲓⲟⲛ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">أبدأ بإشتياقٍ، مُحركاً أرغُن لساني، وأتحدَّث بكرامة هذه العذراء، ومدائحها معاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english">For she is our pride, our hope and confirmation, in the [Second] Coming of our God, our Lord Jesus Christ.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟⲥ ⲅⲁⲣ ⲡⲉ ⲡⲉⲛϣⲟⲩϣⲟⲩ: ⲛⲉⲙ ⲧⲉⲛϩⲉⲗⲡⲓⲥ ⲛⲉⲙ ⲡⲉⲛⲧⲁϫⲣⲟ: ϧⲉⲛ ⲧ̀ⲡⲁⲣⲟⲩⲥⲓⲁ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">لأنها فخرنا، ورجاؤنا وثباتنا، في ظهور إلهنا، ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english">We magnify you worthily, with Elizabeth your cousin saying, “Blessed are you among women, and blessed is the Fruit of your womb.”</td>
            <td class="coptic">Ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ ϧⲉⲛ ⲟⲩⲉⲙⲡ̀ϣⲁ: ⲛⲉⲙ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ ⲧⲉⲥⲩⲅⲅⲉⲛⲏⲥ: ϫⲉ ⲧⲉⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲑⲟ ϧⲉⲛ ⲛⲓϩⲓⲟⲙⲓ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲡ̀ⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ⲧⲉⲛⲉϫⲓ.</td>
            <td class="arabic">نُعظِّمُكِ بإستحقاقٍ، مع أليصابات نَسيبَتكِ قائلين، "مُباركةٌ أنتِ في النساء، ومُباركةٌ هي ثمرة بطنكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">We send unto you greeting, with Gabriel the angel saying, “Hail to you O full of grace, the Lord is with you.”</td>
            <td class="coptic">Ⲧⲉⲛϯ ⲛⲉ ⲙ̀ⲡⲓⲭⲉⲣⲉⲧⲓⲥⲙⲟⲥ: ⲛⲉⲙ Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲕⲉ ⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁ ⲥⲟⲩ.</td>
            <td class="arabic">نُعطيكِ السلام، مع غبريال الملاك قائلين، "السلام لكِ يا مُمْتلئة نعمة، الربُّ مَعَكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، وَلَدْتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">نسألكِ أن تذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function DifnarIntroduction_Adam(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Intro of the Difnar - Adam">
    
    <caption id="caption_table_${tableNumber}" class="caption">Difnar Introduction - Adam
        <span class="coptic-caption">Ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ</span>
        <span class="arabic-caption">مقدمة الدفنار - ادام</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O come let us worship, the Holy Trinity, the Father and the Son, and the Holy Spirit.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ: ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅: ⲉ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">تعالوا فلنسجد، للثالوث القدوس، الذي هو الآب والإبن، والروح القُدُس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to you O Mary, the beautiful dove, who gave birth to, God the Word for us. ${cross}</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ: ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ. ${cross}</td>
            <td class="arabic">السلام لكِ يا مريم، الحمامة الحسنة، التي ولدت لنا، الله الكلمة. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function DifnarIntroduction_Watos(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Difnar Introduction - Watos">
    
    <caption id="caption_table_${tableNumber}" class="caption">Difnar Introduction - Watos
        <span class="coptic-caption">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ</span>
        <span class="arabic-caption">مقدمة الدفنار - واطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">We worship the good Father, and His Son Jesus Christ, and the Spirit of comfort, the holy and coessential Trinity.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲉϥϣⲏⲣⲓ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲛⲉⲙ Ⲡⲓⲡ̅ⲛ̅ⲁ̅ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: Ϯⲧ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ.</td>
            <td class="arabic">نسجد للآب الصالح، ويسوع المسيح إبنه، والروح المعزي، الثالوث القدوس المساوي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">We have hope, in Saint Mary, that God will have mercy upon us, through her intercessions.</td>
            <td class="coptic">Ⲟⲩⲟⲛ ⲟⲩϩⲉⲗⲡⲓⲥ ⲛ̀ⲧⲁⲛ: ϧⲉⲛ ⲑⲏⲉ̅ⲑ̅ⲩ̅ Ⲙⲁⲣⲓⲁ: ⲉ̀ⲣⲉ Ⲫ̀ⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ: ϩⲓⲧⲉⲛ ⲛⲉⲥⲡ̀ⲣⲉⲥⲃⲓⲁ.</td>
            <td class="arabic">لنا رجاء، في القديسة مريم، أن الله يرحمنا، بشفاعاتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">All calmness, in the world, is through the prayers, of the holy Theotokos, Saint Mary the Virgin. ${cross}</td>
            <td class="coptic">Ⲟⲩⲟⲛ ⲟⲩⲙⲉⲧⲥⲉⲙⲛⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ: ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ. ${cross}</td>
            <td class="arabic">كل هدوء، في العالم، من قبل صلاة، والدة الإله الطاهرة، القديسة مريم العذراء. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function AdamTheotokiaConclusion(tableNumber, aktonkAki) {

    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Adam Theotokias Conclusion">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Adam Theotokias Conclusion
        <span class="coptic-caption">Ⲧ̀ϧⲁⲉ̀ ⲛ̀Ⲛⲓⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲛ̀Ⲁ̀ⲇⲁⲙ</span>
        <span class="arabic-caption">ختام الثيؤطوكيات الأدام</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Your mercies O my God, are countless, and exceedingly plenteous, are Your compassion.</td>
            <td class="coptic">Ⲛⲉⲕⲛⲁⲓ ⲱ̀ Ⲡⲁⲛⲟⲩϯ: ϩⲁⲛⲁⲧϭⲓⲏ̀ⲡⲓ ⲙ̀ⲙⲱⲟⲩ: ⲥⲉⲟϣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">مراحمك يا إلهي، غير محصاة، وكثيرة جداً، هي رأفاتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">All the raindrops, are counted by You, and the sand of the sea, is before Your eyes.</td>
            <td class="coptic">Ⲛⲓⲧⲉⲗⲧⲓⲗⲓ ⲙ̀ⲙⲟⲩⲛϩⲱⲟⲩ: ⲥⲉⲏⲡ ⲛ̀ⲧⲟⲧⲕ ⲧⲏⲣⲟⲩ: ⲡⲓⲕⲉϣⲱ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ: ⲥⲉⲭⲏ ⲛⲁϩⲣⲉⲛ ⲛⲉⲕⲃⲁⲗ.</td>
            <td class="arabic">قطرات المطر، محصاة عندك جميعها، ورمل البحر، كائن أمام عينيك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">How much more are, the sins of my soul, manifest before You, O my Lord.</td>
            <td class="coptic">Ⲓⲉ ⲁⲩⲏⲣ ⲙⲁⲗⲗⲟⲛ: ⲛⲓⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲧⲁⲯⲩⲭⲏ: ⲛⲁⲓ ⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ Ⲡⲁϭⲟⲓⲥ.</td>
            <td class="arabic">فكم بالحري، خطايا نفسي، هذه الظاهرة، أمامك يا ربي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The sins that I have committed, do not remember my Lord, and do not count, my iniquities.</td>
            <td class="coptic">Ⲛⲓⲛⲟⲃⲓ ⲉ̀ⲧⲁⲓⲁⲧⲟⲩ: Ⲡⲁϭⲟⲓⲥ ⲛ̀ⲛⲉⲕⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀: ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣϯϩ̀ⲑⲏⲕ: ⲉ̀ⲛⲁⲁ̀ⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">الخطايا التي صنعتها، يا ربي لا تذكرها، ولا تحسب، آثامي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">For You have chosen the publican, and the adulteress You have saved, and the right-hand thief, my Lord You have remembered.</td>
            <td class="coptic">Ϫⲉ ⲡⲓⲧⲉⲗⲱⲛⲏⲥ ⲁⲕⲥⲟⲧⲡϥ: ϯⲡⲟⲣⲛⲏ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲥ: ⲡⲓⲥⲟⲛⲓ ⲉⲧⲥⲁⲟⲩⲓ̀ⲛⲁⲙ: Ⲡⲁϭⲟⲓⲥ ⲁⲕⲉⲣⲡⲉϥⲙⲉⲩⲓ̀.</td>
            <td class="arabic">فإن العشار إخترته، والزانية خلصتها، واللص اليمين، يا سيدي ذكرته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">And I too, the sinner, teach me O my Master, to offer repentance.</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲕ ϩⲱ Ⲡⲁϭⲟⲓⲥ: ϧⲁ ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲛ̀ⲧⲁⲓ̀ⲣⲓ: ⲛ̀ⲟⲩⲙⲉⲧⲁⲛⲟⲓⲁ.</td>
            <td class="arabic">وأنا أيضاً الخاطئ، يا سيدي، علمني، أن أصنع توبة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">For You do not desire, the death of a sinner, but rather that he returns, and that his soul may live.</td>
            <td class="coptic">Ϫⲉ ⲭ̀ⲟⲩⲱϣ ⲙ̀ⲫ̀ⲙⲟⲩ ⲁⲛ: ⲙ̀ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲧⲉϥⲧⲁⲥⲑⲟϥ: ⲛ̀ⲧⲉⲥⲱⲛϧ ⲛ̀ϫⲉ ⲧⲉϥⲯⲩⲭⲏ.</td>
            <td class="arabic">لأنك لا تشاء، موت الخاطئ، مثل أن يرجع، وتحيا نفسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Restore us O God, to Your salvation, and deal with us, according to Your goodness.</td>
            <td class="coptic">Ⲙⲁⲧⲁⲥⲑⲟⲛ Ⲫ̀ⲛⲟⲩϯ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲉⲕⲟⲩϫⲁⲓ: ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ: ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">ردنا يا الله، إلى خلاصك، وعاملنا، كصلاحك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">For You are good, and merciful, let Your compassion, speedily come to us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟⲕ ⲟⲩⲁ̀ⲅⲁⲑⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏⲧ: ⲙⲁⲣⲟⲩⲧⲁϩⲟⲛ ⲛ̀ⲭⲱⲗⲉⲙ: ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">لأنك أنت صالح، ورحوم، فلتدركنا، رأفاتك سريعاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Have compassion upon us all, O Lord God our Savior, and have mercy upon us, according to Your great mercy.</td>
            <td class="coptic">Ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ ⲧⲏⲣⲉⲛ: Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">ترأف علينا كلنا، أيها الرب الإله، مخلصنا وإرحمنا، كعظيم رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Remember those, O Christ our Master, be among us, and proclaim and say.</td>
            <td class="coptic">Ⲛⲁⲓ ⲕ̀ⲓ̀ⲣⲓ ⲙ̀ⲡⲟⲩⲙⲉⲩⲓ̀: ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲕⲉ̀ϣⲱⲡⲓ ϧⲉⲛ ⲧⲉⲛⲙⲏϯ: ⲉⲕⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲕϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">هؤلاء أذكرهم، يا سيدنا المسيح، كن في وسطنا، صارخاً قائلاً:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">"My peace I, give to you, the peace of My Father, I leave with you."</td>
            <td class="coptic">Ϫⲉ ⲧⲁϩⲓⲣⲏⲛⲏ ⲁ̀ⲛⲟⲕ: ϯϯ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ: ⲧ̀ϩⲓⲣⲏⲛⲏ ⲙ̀Ⲡⲁⲓⲱⲧ: ϯⲭⲱ ⲙ̀ⲙⲟⲥ ⲛⲉⲙⲱⲧⲉⲛ.</td>
            <td class="arabic">"سلامي أنا، أعطيكم، سلام أبي، أتركه معكم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">O King of peace, grant us Your peace, render unto us Your peace, and forgive us our sins.</td>
            <td class="coptic">Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">يا ملك السلام، أعطنا سلامك، قرر لنا سلامك، وإغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">Disperse the enemies, of the Church, and fortify her that she, may not be shaken forever.</td>
            <td class="coptic">Ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ⲛ̀ⲧⲉ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲁ̀ⲣⲓⲥⲟⲃⲧ ⲉ̀ⲣⲟⲥ: ⲛ̀ⲛⲉⲥⲕⲓⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">فرِّق أعداء الكنيسة، وحصنها، فلا تتزعزع، إلى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Emmanuel our God, is now in our midst, with the glory of His Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: ϧⲉⲛ ⲧⲉⲛⲙⲏϯ ϯⲛⲟⲩ: ϧⲉⲛ ⲡ̀ⲱ̀ⲟⲩ ⲛ̀ⲧⲉ Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">عمانوئيل إلهنا، في وسطنا الآن، بمجد أبيه، والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">May He bless us all, and purify our hearts, and heal the sicknesses, of our souls and bodies.</td>
            <td class="coptic">Ⲛ̀ⲧⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲧⲏⲣⲉⲛ: ⲛ̀ⲧⲉϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛϩⲏⲧ: ⲛ̀ⲧⲉϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲓϣⲱⲛⲓ: ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ.</td>
            <td class="arabic">ليباركنا كلنا، ويطهر قلوبنا، ويشفي أمراض، نفوسنا وأجسادنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">We worship You O Christ, with Your good Father, and the Holy Spirit, for You have ${aktonkAki.english} and saved us. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ${aktonkAki.coptic} ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">نسجد لك أيها المسيح، مع إبيك الصالح، والروح القدس، لأنك ${aktonkAki.arabic} وخلصتنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function WatosTheotokiaConclusion(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Watos Theotokias Conclusion">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Watos Theotokias Conclusion
        <span class="coptic-caption">Ⲧ̀ϧⲁⲉ̀ ⲛ̀Ⲛⲓⲑⲉⲟ̀ⲧⲟⲕⲓⲁ ⲙ̀Ⲃⲁⲧⲟⲥ - Ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ</span>
        <span class="arabic-caption">ختام الثيؤطوكيات الواطس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O our Lord Jesus Christ, who carries the sin of the world, count us with Your sheep, those who are to Your right.</td>
            <td class="coptic">Ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲟⲡⲧⲉⲛ ϩⲱⲛ ⲛⲉⲙ ⲛⲉⲕϩⲓⲏⲃ: ⲛⲁⲓ ⲉⲧⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲙⲟⲕ.</td>
            <td class="arabic">يا ربنا يسوع المسيح، حامل خطية العالم، أحسبنا مع خرافك، الذين عن يمينِك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">And when You come again, in Your second fearful appearance, may we never fearfully hear, You say I do not know you.</td>
            <td class="coptic">Ⲁⲕϣⲁⲛⲓ̀ ϧⲉⲛ ⲧⲉⲕⲙⲁϩⲥ̀ⲛⲟⲩϯ: ⲙ̀ⲡⲁⲣⲟⲩⲥⲓⲁ ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ: ⲙ̀ⲡⲉⲛⲑ̀ⲣⲉⲛⲥⲱⲧⲉⲙ ϧⲉⲛ ⲟⲩⲥ̀ⲑⲉⲣⲧⲉⲣ: ϫⲉ ϯⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲧⲉⲛ ⲁⲛ.</td>
            <td class="arabic">عند ظهورِك الثاني، المخوف لا نسمع، برعدةٍ "أنَّنِي، لَستُ أعرفكم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">But rather may we be made worthy, to hear the voice full of joy, of Your tender mercies, proclaiming and saying.</td>
            <td class="coptic">Ⲁⲗⲗⲁ ⲙⲁⲣⲉⲛⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲥⲱⲧⲉⲙ: ⲉ̀ϯⲥ̀ⲙⲏ ⲉⲑⲙⲉϩ ⲛ̀ⲣⲁϣⲓ: ⲛ̀ⲧⲉ ⲛⲉⲕⲙⲉⲧϣⲁⲛⲁϩ̀ⲑⲏϥ: ⲉⲥⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">بَل نكون مُستحقين، لسماع صوتك الحنون، المُمْتلئ فرحاً، يصرخ قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">“Come unto Me, O blessed of My Father, and inherit the life, that endures forever.”</td>
            <td class="coptic">Ϫⲉ ⲁ̀ⲙⲱⲓⲛⲓ ϩⲁⲣⲟⲓ: ⲛⲏⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲧⲉ Ⲡⲁⲓⲱⲧ: ⲁ̀ⲣⲓⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲱⲛϧ: ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">"تعالوا إليَّ، يا مُبارَكي أبي، رثوا الحياة، الدائمة إلى الأبد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The martyrs will come, bearing their afflictions, and the righteous will come, bearing their virtues.</td>
            <td class="coptic">Ⲥⲉⲛⲁⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲉⲩϥⲁⲓ ϧⲁ ⲛⲟⲩⲃⲁⲥⲁⲛⲟⲥ: ⲥⲉⲛⲁⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲉⲩϥⲁⲓ ϧⲁ ⲛⲟⲩⲡⲟⲗⲏⲧⲓⲁ.</td>
            <td class="arabic">يأتي الشهداء، حاملين عذاباتهم، ويأتي الصدِّيقون، حاملين فضائلهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The Son of God shall come in His glory, and His Father’s glory, to give unto everyone, according to his deeds which he has done.</td>
            <td class="coptic">Ϥ̀ⲛⲁⲓ̀ ⲛ̀ϫⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ϧⲉⲛ ⲡⲉϥⲱ̀ⲟⲩ ⲛⲉⲙ ⲫⲁ Ⲡⲉϥⲓⲱⲧ: ϥ̀ⲛⲁϯ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ: ⲕⲁⲧⲁ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀ ⲉ̀ⲧⲁϥⲁⲓⲧⲟⲩ.</td>
            <td class="arabic">يأتي إبن الله، في مجده ومجد أبيه، ويُجازي كل واحدٍ، كأعماله التي عملها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">O Christ the Word of the Father, the only-begotten God, grant us Your peace, that is full of joy.</td>
            <td class="coptic">Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ⲛⲟⲩϯ: ⲉⲕⲉ̀ϯ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲑⲁⲓ ⲉⲑⲙⲉϩ ⲛ̀ⲣⲁϣⲓ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">أيها المسيح كلمة الآب، الإله الوحيد الجنس، أعطنا سلامك، المملوء فرحاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">As You have given, to Your saintly Apostles, likewise also say to us, “My peace I give to You.</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲕⲧⲏⲓⲥ: ⲛ̀ⲛⲉⲕⲁ̀ⲅⲓⲟⲥ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉⲕⲉ̀ϫⲟⲥ ⲛⲁⲛ ⲙ̀ⲡⲟⲩⲣⲏϯ: ϫⲉ ⲧⲁϩⲓⲣⲏⲛⲏ ϯϯ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ.</td>
            <td class="arabic">كما أعطيته، لرُسُلِكَ القديسين، قُلْ لنا مِثلهم، "إنِّي أعطيكم سلامي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">My peace which I have taken, from My Father, I leave unto you, both now and forever.”</td>
            <td class="coptic">Ⲧⲁϩⲓⲣⲏⲛⲏ ⲁ̀ⲛⲟⲕ: ⲑⲏⲉ̀ⲧⲁⲓϭⲓⲧⲥ ϩⲓⲧⲉⲛ Ⲡⲁⲓⲱⲧ: ⲁ̀ⲛⲟⲕ ϯⲭⲱ ⲙ̀ⲙⲟⲥ ⲛⲉⲙⲱⲧⲉⲛ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">سلامي أنا، الذي أخذته من أبي، أنا أتركه معكم، من الأن وإلى الأبد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">O the angel of this day, flying up with this hymn, remember us before the Lord, that He may forgive us our sins.</td>
            <td class="coptic">Ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲉⲧϩⲏⲗ ⲉ̀ⲡ̀ϭⲓⲥⲓ ⲛⲉⲙ ⲡⲁⲓϩⲩⲙⲛⲟⲥ: ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ ϧⲁ ⲧ̀ϩⲏ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">يا ملاك هذا اليوم الطائر، إلى العلو بهذه التسبحة، أُذكرنا أمام الرب، ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">The sick heal them, those who have slept O Lord repose them, and all of our brothers in distress, help us my Lord and all of them.</td>
            <td class="coptic">Ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ: ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉⲧⲭⲏ ϧⲉⲛ ϩⲟϫϩⲉϫ ⲛⲓⲃⲉⲛ: Ⲡⲁϭⲟⲓⲥ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ ⲛⲉⲙⲱⲟⲩ.</td>
            <td class="arabic">المرضى أشفهم، الذين رقدوا يا رب نَيِّحهم، وأخواتنا الذين في كل شدة، يا ربي أعنا وإيَّاهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">May God bless us, and let us bless His holy name, and may His praise continually be, always upon our mouths.</td>
            <td class="coptic">Ⲉϥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ: ⲧⲉⲛⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ: ⲛⲁϣⲱⲡⲓ ⲉϥⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲛ.</td>
            <td class="arabic">يُبارِكنا الله، ولنُبارِك إسمه القدوس، في كل حين تسبحته، دائمة في أفواهنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">For blessed is the Father, the Son and the Holy Spirit, the perfect Trinity, we worship Him and glorify Him. ${cross}</td>
            <td class="coptic">Ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲥ. ${cross}</td>
            <td class="arabic">مُبارَك الآب والإبن، والرُّوح القُدُس، الثالوث الكامل، نسجد له ونُمجِّدهُ. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function getTennav(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Hymn of the Resurrection - Tennav">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Hymn of the Resurrection - Tennav
        <span class="coptic-caption">Ⲡⲓⲃⲱϩⲉⲙ ⲛ̀ⲧⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ - Ⲧⲉⲛⲛⲁⲩ</span>
        <span class="arabic-caption">لحن القيامة - تينناف</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">We look at the Resurrection of Christ and we worship the holy Jesus Christ our Lord, who alone is without sin. We bow down to Your Cross O Christ, and we praise and glorify Your Resurrection. For You are our God, and we know none but You, and after Your name we are called. Glory be to the Father and the Son and the Holy Spirit.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁⲩ ⲉ̀Ⲧ̀ⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛϭⲟⲓⲥ: ⲫⲏⲉⲧⲟⲓ ⲛ̀ⲁⲑⲛⲟⲃⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ. Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲉⲕⲥ̀ⲧⲁⲩⲣⲟⲥ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲧⲉⲛϩⲱⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛ̀Ⲧⲉⲕⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ. Ϫⲉ ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲥⲱⲟⲩⲛ ⲛ̀ⲕⲉⲟⲩⲁⲓ ⲁⲛ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ϧⲉⲛ ⲡⲉⲕⲣⲁⲛ ⲥⲉⲙⲟⲩϯ ⲉ̀ⲣⲟⲛ. Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩ̀ⲓⲱ ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ.</td>
            <td class="arabic">ننظر إلى قيامة المسيح ونسجد للقدوس يسوع المسيح ربنا، الذي بلا خطية وحده. نسجد لصليبك أيها المسيح، نسجد ونمجد قيامتك. لأنك أنت هو إلهنا، ولا نعرف أحداً سواك، وبإسمك دعينا. المجد للآب والإبن والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Come all you believers let us bow down to the Resurrection of Christ. For behold through His Cross, joy has entered into the whole world. Let us bless the Lord continually, and glorify His Resurrection. For He was patient and destroyed death by His Death. Now and forever and unto the age of all ages, Amen.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛⲓⲡⲓⲥⲧⲟⲥ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲛ̀Ⲧ̀ⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ϫⲉ ϩⲏⲡⲡⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡⲉϥⲥ̀ⲧⲁⲩⲁⲣⲟⲥ: ⲁϥⲓ̀ ⲛ̀ϫⲉ ⲫ̀ⲣⲁϣⲓ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ. Ⲙⲁⲣⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛ̀Ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ. Ϫⲉ ⲁϥⲉⲣϩⲩⲡⲟⲙⲟⲛⲓⲛ ⲟⲩⲟϩ ⲁϥϧⲟⲙϧⲉⲙ ⲙ̀ⲫ̀ⲙⲟⲩ ϩⲓⲧⲉⲛ Ⲡⲉϥⲙⲟⲩ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ: ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">تعالوا يا جميع المؤمنين لنسجد لقيامة المسيح. لأنه من قِبَل صليبه، دخل الفرح إلى العالم كله. فلنبارك الرب كل حين، ونمجد قيامته. لأنه صبر وسحق الموت بموته. الآن وكل أوان وإلى دهر الدهور، آمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">All joy befits you O Theotokos. For through you Adam returned to Paradise. And Eve gained grace to replace her sadness. Through you she gained freedom once more, as well as eternal salvation. And we too let us glorify you, as a treasure of the Resurrection. "Hail to the sealed treasure through which we were given life. Hail to her who gave birth to Christ our God, who gave us life through His Resurrection." Blessed are You O Lord, teach me Your justice.</td>
            <td class="coptic">Ⲛⲓⲣⲁϣⲓ ⲧⲏⲣⲟⲩ ⲥⲉⲧⲱⲙⲓ ⲉ̀ⲣⲟ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ. Ϫⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟϯ ⲁⲩⲧⲁⲥⲑⲟ ⲛ̀Ⲁ̀ⲇⲁⲙ ⲉ̀Ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ. Ⲉ̀ⲁⲥϭⲓ ⲛ̀ⲟⲩⲥⲟⲗⲥⲉⲗ ⲛ̀ϫⲉ Ⲉ̀ⲩⲁ ⲉ̀ⲫ̀ⲙⲁ ⲙ̀ⲡⲉⲥⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ. Ⲉ̀ⲁⲥϭⲓ ⲛ̀ϯⲉ̀ⲗⲉⲩⲑⲉⲣⲓⲁ ⲛ̀ⲕⲉⲥⲟⲡ: ⲉⲑⲃⲏϯ ⲛⲉⲙ ⲡⲓⲟⲩϫⲁⲓ ⲛ̀ⲉ̀ⲱ̀ⲛⲓⲟⲛ. Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ ⲛⲉ: ϩⲱⲥ ⲟⲩⲁ̀ϩⲟ ⲛ̀ⲧⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ. Ϫⲉ ⲭⲉⲣⲉ ⲡⲓⲑⲩⲥⲁⲩⲣⲟⲥ ⲉⲧⲧⲟⲃ ⲉ̀ⲧⲁⲛⲉⲣⲁ̀ⲡⲟⲗⲉⲩⲓⲛ ⲙ̀ⲡⲓⲱⲛϧ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ. Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲟⲩⲟϩ ⲁϥϯ ⲛⲁⲛ ⲙ̀ⲡⲓⲱⲛϧ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ. Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲡ̀ϭⲟⲓⲥ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">كل الأفراح تليق بك يا والدة الإله. لأنه من قِبَلِك أُرجع آدم إلى الفردوس. ونالت الزينة حواء عوض حزنها. وأخذت الحرية دفعة أخرى من أجلك، والخلاص الدهري. ونحن أيضاً فلنمجدِك، ككنز القيامة. "السلام للكنز المختوم الذي إمتلأنا بالحياة من قِبَله. السلام للتي ولدت لنا المسيح إلهنا، وأعطانا الحياة من قِبَل قيامته." مبارك أنت يا رب، علمني عدلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The angelic hosts were amazed when they saw You counted among the dead. Yet You destroyed the power of death O Savior. You raised Adam with You and freed him from Hades. Blessed are You O Lord, teach me Your justice.</td>
            <td class="coptic">Ⲛⲓⲥ̀ⲧ̀ⲣⲁⲧⲓⲁ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ ⲁⲩⲧⲱⲙⲧ ϧⲉⲛ ⲡ̀ϫⲓⲛⲑ̀ⲣⲟⲩⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲉ̀ⲁⲩⲟⲡⲕ ⲛⲉⲙ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ. Ⲟⲩⲟϩ ⲁⲕϧⲟⲙϧⲉⲙ ⲛ̀ϯϫⲟⲙ ⲛ̀ⲧⲉ ⲫ̀ⲙⲟⲩ ⲱ̀ Ⲡⲓⲥⲱⲧⲏⲣ. Ⲟⲩⲟϩ ⲁⲕⲧⲟⲩⲛⲟⲥ Ⲁ̀ⲇⲁⲙ ⲛⲉⲙⲁⲕ ⲟⲩⲟϩ ⲁⲕⲁⲓϥ ⲛ̀ⲣⲉⲙϩⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲁ̀ⲙⲉⲛϯ. Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲡ̀ϭⲟⲓⲥ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">الجنود الملائكية بهتوا عندما رأوك حُسبت مع الأموات. وحطمت قوة الموت أيها المخلص. وأقمت آدم معك وأعتقته من الجحيم. مبارك أنت يا رب، علمني عدلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Why did you mix fragrant oil weeping and mourning with each other, O followers of the Lord? The luminous angel said to the women carrying the spices, "Look and be aware that the Savior has risen from the dead." Blessed are You O Lord, teach me Your justice.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲟⲩ ⲛⲓⲥⲟϫⲉⲛ ⲛⲉⲙ ⲛⲓⲛⲉϩⲡⲓ ⲛⲉⲙ ⲛⲓⲣⲓⲙⲓ ⲧⲉⲧⲉⲛⲑⲱⲧ ⲙ̀ⲙⲱⲟⲩ ⲛⲉⲙ ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ: ⲱ̀ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ. Ⲡⲉϫⲉ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲉⲧϩⲓⲉⲃⲣⲏϫ ⲉ̀ⲃⲟⲗ ϧⲁⲧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ ⲛ̀ⲛⲓϩⲓⲟⲙⲓ ⲙ̀ϥⲁⲓⲥⲟϫⲉⲛ: ⲁ̀ⲛⲁⲩ ⲇⲉ ⲛ̀ⲑⲱⲧⲉⲛ ⲟⲩⲟϩ ⲁ̀ⲣⲓⲉ̀ⲙⲓ: ϫⲉ ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ⲛ̀ϫⲉ Ⲡⲓⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ. Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲡ̀ϭⲟⲓⲥ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">لماذا الطيب والنحيب والبكاء تمزجنها مع بعضها يا تلميذات الرب. قال الملاك اللامع عند القبر للنسوة حاملات الطيب، "أنظرنَّ أنتنَّ وأعلمنَّ أنه قد نهض المخلص وقام من الأموات." مبارك أنت يا رب، علمني عدلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The women rushed very early to Your tomb, carrying fragrant oil while crying. But the angel stood before them saying, "The time of weeping is over, do not weep, but preach the Resurrection to the Apostles." Blessed are You O Lord, teach me Your justice.</td>
            <td class="coptic">Ⲛ̀ϣⲱⲣⲡ ⲉ̀ⲙⲁϣⲱ ⲁⲩⲓⲏⲥ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲡⲉⲕⲙ̀ϩⲁⲩ: ⲛ̀ϫⲉ ⲛⲓϩⲓⲟⲙⲓ ⲙ̀ϥⲁⲓⲥⲟϫⲉⲛ ⲉⲩⲛⲉϩⲡⲓ. Ⲁⲗⲗⲁ ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ϩⲓϫⲱⲟⲩ ⲛ̀ϫⲉ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ: ϫⲉ ⲡ̀ⲥⲏⲟⲩ ⲙ̀ⲡⲓⲣⲓⲙⲓ: ⲁϥϩⲉⲣⲓ ⲙ̀ⲡⲉⲣⲣⲓⲙⲓ: ⲁⲗⲗⲁ ⲁ̀ⲣⲓϩⲓⲱⲓϣ ⲛ̀Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲛ̀ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ. Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲡ̀ϭⲟⲓⲥ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">أسرعت النسوة باكراً جداً إلى قبرك، حاملات الطيب ينحنَ. لكن وقف بهنَّ الملاك قائلاً لهنَ، "إن زمن البكاء قد إنقضى، لا تبكينَّ، بل بشرنَّ بالقيامة للرسل." مبارك أنت يا رب، علمني عدلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">The women came to Your tomb carrying fragrant oil and incense O Savior. They heard the angel say to them, "Why do you seek the living among the dead." And He being God has risen from the tomb. Glory be to the Father and the Son and the Holy Spirit.</td>
            <td class="coptic">Ⲛⲓϩⲓⲟⲙⲓ ⲙ̀ϥⲁⲓⲥⲟϫⲉⲛ ⲁⲩⲓ̀ ⲉ̀ⲡⲉⲕⲙ̀ϩⲁⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲱ̀ Ⲡⲓⲥⲱⲧⲏⲣ. Ⲟⲩⲟϩ ⲁⲩⲥⲱⲧⲉⲙ ⲉ̀ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ: ϫⲉ ⲉⲑⲃⲉ ⲟⲩ ⲧⲉⲧⲉⲛⲕⲱϯ ⲛ̀ⲥⲁ ⲫⲏⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ. Ⲟⲩⲟϩ ⲛ̀ⲑⲟϥ ϩⲱⲥ Ⲛⲟⲩϯ ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ. Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩ̀ⲓⲱ ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ.</td>
            <td class="arabic">أتينَّ النسوة حاملات الطيب إلى قبرك مع البخور أيها المخلص. وسمعنَّ الملاك قائلاً لهنَّ، "لماذا تطلبنَّ الحي بين الأموات." وهو كإله قام من القبر. المجد للآب والإبن والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">We worship the Father and the Son and the Holy Spirit, one in essence. And we proclaim with the Cherubim saying, "Holy, holy, holy are You O Lord." Now and forever and unto the age of all ages, Amen.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ϯⲙⲉⲧⲟⲩⲁⲓ ⲛ̀ⲧⲉ ϯⲟⲩⲥⲓⲁ. Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲛ̀ⲑⲟⲕ Ⲡ̀ϭⲟⲓⲥ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ: ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">نسجد للآب والإبن والروح القدس، في وحدانية الجوهر. ونصرخ مع الشاروبيم قائلين، "قدوس قدوس قدوس، أنت يا رب." الآن وكل أوان وإلى دهر الدهور، آمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">We worship the Father and the Son and the Holy Spirit, one in essence. And we proclaim with the Cherubim saying, "Holy, holy, holy are You O Lord." Now and forever and unto the age of all ages, Amen.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ϯⲙⲉⲧⲟⲩⲁⲓ ⲛ̀ⲧⲉ ϯⲟⲩⲥⲓⲁ. Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲛ̀ⲑⲟⲕ Ⲡ̀ϭⲟⲓⲥ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ: ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">نسجد للآب والإبن والروح القدس، في وحدانية الجوهر. ونصرخ مع الشاروبيم قائلين، "قدوس قدوس قدوس، أنت يا رب." الآن وكل أوان وإلى دهر الدهور، آمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We worship the Father and the Son and the Holy Spirit, one in essence. And we proclaim with the Cherubim saying, "Holy, holy, holy are You O Lord." Now and forever and unto the age of all ages, Amen.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ϯⲙⲉⲧⲟⲩⲁⲓ ⲛ̀ⲧⲉ ϯⲟⲩⲥⲓⲁ. Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲛ̀ⲑⲟⲕ Ⲡ̀ϭⲟⲓⲥ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ: ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">نسجد للآب والإبن والروح القدس، في وحدانية الجوهر. ونصرخ مع الشاروبيم قائلين، "قدوس قدوس قدوس، أنت يا رب." الآن وكل أوان وإلى دهر الدهور، آمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">You gave birth O Virgin to the Giver of life, and you saved Adam from sin. You gave joy to Eve instead of sorrow, and gave us life and salvation from corruption and alteration. You became our intercessor before God our Savior, who was incarnate of you. ${cross}</td>
            <td class="coptic">Ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲙ̀Ⲫ̀ⲣⲉϥϯ ⲙ̀ⲡ̀ⲱⲛϧ: ⲟⲩⲟϩ ⲁ̀ⲣⲉⲛⲟϩⲉⲙ ⲛ̀Ⲁ̀ⲇⲁⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲫ̀ⲛⲟⲃⲓ. Ⲁ̀ⲣⲉϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀Ⲉ̀ⲩⲁ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ ⲙ̀ⲡⲉⲥⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ: ⲟⲩⲟϩ ⲁ̀ⲣⲉⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡ̀ⲱⲛϧ ⲛⲉⲙ ⲫ̀ⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲧⲁⲕⲟ ⲛⲉⲙ ⲡ̀ϣⲓⲃϯ. Ⲁ̀ⲣⲉϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲛⲁϩⲣⲉⲛ Ⲫ̀ⲛⲟⲩϯ Ⲡⲉⲛⲣⲉϥⲥⲱϯ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ. ${cross}</td>
            <td class="arabic">ولدتِ أيتها العذراء معطي الحياة، وخلصتِ آدم من الخطية. ومنحتِ حواء الفرح عوض حزنها، وأنعمتِ لنا بالحياة والخلاص من الفساد والتغير. صرتِ لنا شفيعة أمام الله مخلصنا، الذي تجسد منك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}




export {
    getTheotokia,
    getWeekdaySundayTheotokia,
    getTennav,
    AdamTheotokiaConclusion,
    WatosTheotokiaConclusion
}