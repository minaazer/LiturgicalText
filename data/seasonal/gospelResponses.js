// import settings from settings provider
import SettingsContext from "../../settings/settingsContext";
import { useContext } from "react";

const [settings] = useContext(SettingsContext);

const gospelResponseMap = {
    'Annunciation': annunciationGospelResponse,
};

// Simulate getting the current season from the settings provider
const currentSeason = settings.season;

// Function to check if the input is an array or single string
function ensureArray(season) {
    return Array.isArray(season) ? season : [season];
}

// Function to get the gospel response based on the current seasons and table number
function getGospelResponseForSeasons(baseTableNumber) {
    let htmlOutput = '';
    const seasonsArray = ensureArray(currentSeason);

    // Iterate over each season and generate HTML for each
    seasonsArray.forEach((season, index) => {
        const gospelResponseFunction = gospelResponseMap[season];

        // Use the base table number and append a ".1", ".2", etc. for each season
        const tableNumber = `${baseTableNumber}.${index + 1}`;

        // If a function exists for the season, concatenate its result
        if (gospelResponseFunction) {
            htmlOutput += gospelResponseFunction(tableNumber);
        }
    });

    // Return the concatenated HTML or a fallback message if no responses were found
    return htmlOutput || `<p>No gospel response available for: ${seasonsArray.join(', ')}</p>`;
}


function vespersAnnualGospelResponse(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Gospel Response (Annual)">
    
    <caption id="caption_table_0" class="caption">The Gospel Response (Annual)
        <span class="coptic-caption">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ</span>
        <span class="arabic-caption">مرد الإنجيل (سنوي)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us worship our Savior, the good Lover of Mankind, for He had compassion on us, He has come and saved us.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ: Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">فلنسجد لمخلصنا، محب البشر الصالح، لأنه تراءف علينا، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Intercede on our behalf, O the Lady of us all the Theotokos, Mary the Mother of our Savior, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">إشفعي فينا أمام الرب، يا سيدتنا كلنا السيدة والدة الإله، مريم أم مخلصنا، ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Pray to the Lord on our behalf, O beholder of God the Evangelist, Abba Mark the Apostle, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، يا ناظر الإله الإنجيلي، مارمرقس الرسول، ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">For blessed be the Father and the Son, and the Holy Spirit, the perfect Trinity, we worship Him and glorify Him.</td>
            <td class="coptic">Ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲥ.</td>
            <td class="arabic">لأنه مبارك الآب والإبن، والروح القدس، الثالوث الكامل، نسجد له ونمجده.</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function annualLiturgyGospelResponse(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Annual Liturgy Gospel Response">
    
    <caption id="caption_table_0" class="caption">Annual Liturgy Gospel Response
        <span class="coptic-caption">Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ</span>
        <span class="arabic-caption">مرد انجيل القداس - سنوي</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Blessed are they in truth, the saints of this day, each one according to his name, the beloved of Christ.</td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲑⲏⲓ: ⲛⲏⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲧⲉ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ: ⲛⲓⲙⲉⲛⲣⲁϯ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">طوباهم بالحقيقة قديسو هذا اليوم، كل واحد بإسمه احباء المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Intercede on our behalf, O lady of us all, the Mother of God, Mary, the Mother of our Savior, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ̀ ⲧⲉⲛⲟ̅ⲥ̅ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعى فينا يا سيدتنا كلنا السيدة والدة الإله مريم ام مخلصنا ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Pray to the Lord on our behalf, O beholder of God the Evangelist, Abba Mark the Apostle, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ ⲛ̀ⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا ناظر الإله الانجيلي مرقس الرسول، ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Blessed be the Father and the Son and the Holy Spirit, the perfect Trinity. We worship Him and glorify Him.</td>
            <td class="coptic">Ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫⲓⲱⲧ ⲛⲉⲙ ⲡ̀Ϣⲏⲣⲓ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲥ.</td>
            <td class="arabic">مبارك الآب والابن والروح القدس، الثالوث الكامل، نسجد له ونمجده.</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function annunciationGospelResponse(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Annunciation Gospel Response">
    
    <caption id="caption_table_0" class="caption">Annunciation Gospel Response
        <span class="arabic-caption">مرد الإنجيل عيد البشارة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Alleluia (4), Jesus Christ the Son of God, was incarnate from the Virgin.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (ⲇ̅): Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">هلليلويا (4)، يسوع المسيح إبن الله، تجسد من العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد.</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

