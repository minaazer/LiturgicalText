import { hourIntro, paschalPraise3 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOF1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","DAY of GOOD FRIDAY","يوم الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","17","18","FIRST","الأولى","DAY of GOOD FRIDAY","يوم الجمعة العظيمة");
    const copticGospelIntroHtml = copticGospelIntro("20");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("28");
    const expositionConclusionHtml = expositionConclusion("30");
    const daytimeLitaniesHtml = daytimeLitanies("31",true);
    const evnotiNaiNanHtml = evnotiNaiNan("32");
    const endOfServiceHymnHtml = endOfServiceHymn("33");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲇⲉⲩⲧⲉⲣⲟⲛⲟⲙⲓⲟⲛ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲡⲉϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲛ̀ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡⲓⲒⲥ̅ⲗ : ϫⲉ ϯⲉⲣⲙⲉⲑⲣⲉ ⲛⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟⲩ ⲛ̀ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ : ϫⲉ ϧⲉⲛ ⲟⲩⲧⲁⲕⲟ ⲉ̀ⲣⲉⲧⲉⲛⲉ̀ⲧⲁⲕⲟ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲧ̀ⲫⲉ ⲟⲩⲟϩ ϭⲓⲥ̀ⲙⲏ ̀̀ⲡⲕⲁϩⲓ : ϫⲉ Ⲡ̀⳪ ⲡⲉⲧⲁϥⲥⲁϫⲓ : ϩⲁⲛϣⲏⲣⲓ ⲁⲓϫ̀ⲫⲱⲟⲩ ⲟⲩⲟϩ ⲁⲓϭⲁ̀ⲥⲟⲩ </td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲛⲉ ⲉⲧⲉⲣⲉ Ⲡ⳪ ϫⲱ ⲙ̀ⲙⲱⲟⲩ ϫⲉ ⲃⲱⲕ ⲉ̀ϧⲟⲩⲛ ϩⲁ ⲡⲉⲧⲣⲁ ⲛ̀ⲧⲉⲧⲉⲛϩⲏⲡ ⲧⲏⲩⲧⲉⲛ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲉ̀ⲃⲟⲗ</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲡ̀ⲕⲁϩⲓ ⲡ̀ⲕⲁϩⲓ ⲥⲱⲧⲉⲙ ⲉ̀ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡ⳪ : Ⲥ̀ϧⲁⲓ ⲙ̀ⲡⲓⲣⲱⲙⲓ ϫⲉ ⲟⲩⲣⲱⲙⲓ ⲡⲉ ⲁⲩϩⲓⲧϥ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_15" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_16" class="text">
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲁϥϫⲟⲥ ⲛ̀ϫⲉ ⲓⲉⲣⲉⲙⲓⲁⲥ ⲛ̀Ⲗⲁϥⲁϧϣⲟⲩⲣ ϫⲉ ⲉ̀ⲣⲉⲧⲉⲛ ⲉ̀ϣⲱⲡⲓ ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲛⲉⲙ ⲛⲉⲧⲉⲛⲓⲟϯ ⲧⲉⲧⲉⲛϯ ⲉ̀ϩ̀ⲣⲉⲛ ϯⲙⲉⲑⲙⲏⲓ</td>
        </tr>
        <tr id="table_2_row_17" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_18" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_19" class="text">
            <td class="coptic">Ⲉⲓⲥ ϩⲏⲡⲡⲉ ⲇⲉ Ⲡ̀⳪ ⲛⲁⲧⲁⲕⲟ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲟⲩⲟϩ ϥ̀ⲛⲁⲁⲓⲥ ⲛ̀ϫⲁⲓ̀ⲉ ⲟⲩⲟϩ ⲉϥⲛⲁϭⲱ̀ⲗⲡ ⲉ̀ⲃⲟⲗ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_21" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲥⲟⲫⲓⲁ̀ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ  ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_22" class="text">
            <td class="coptic">Ⲉϥⲉ̀ϫⲟⲣϫϥ ⲛ̀ⲟⲩⲭ̀ⲣⲱⲙ ⲉⲑⲃⲉ ϫⲉ ⲙ̀ⲡⲉϥϯ ϩ̀ⲗⲟϫ ⲉ̀ⲡⲉⲛϩⲏⲧ</td>
        </tr>
        <tr id="table_2_row_23" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_24" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲃ ⲡⲓⲑⲙⲏⲓ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_25" class="text">
            <td class="coptic">Ⲁϥⲡⲱϣⲥ ⲛⲉⲛⲣⲉϥϯϩⲁⲡ ⲙ̀ⲡ̀ⲕⲁϩⲓ ⲡⲉⲧⲑⲉⲙⲥⲱ ⲛ̀ⲛⲓⲟⲩⲣⲱⲟⲩ ⲉϫⲉⲛ ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ ⲡⲉⲧϫⲟⲟⲩ ⲛ̀ⲛⲓⲟⲩⲏⲃ</td>
        </tr>
        <tr id="table_2_row_26" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_27" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_28" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲩⲉ̀ⲙⲓ ⲛ̀ϫⲉ ⲛⲓⲭⲁⲛⲁⲛⲉⲟⲥ ⲛⲓⲉⲥⲱⲟⲩ ⲉ̀ⲧⲟⲩⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ϫⲉ ⲟⲩⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡ̀⳪ ⲡⲉ.</td>
        </tr>
        <tr id="table_2_row_29" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_30" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲙⲓⲭⲉⲟⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_31" class="text">
            <td class="coptic">Ⲡ̀ⲱⲟⲩ ⲛ̀ⲧϣⲉⲣⲓ ⲛ̀ⲥⲓⲱⲛ Ⲭⲉⲉⲕⲉ ϫⲱ ⲛ̀ⲧⲉϣⲉϥϫⲱ ⲉ̀ϫⲉⲛ ⲛⲟⲩϣⲏⲣⲓ ⲉⲧϫⲏⲛ ⲧⲁϣⲟ ⲛ̀ⲧⲟⲩⲙⲉⲧⲭⲏⲣⲁ.</td>
        </tr>
        <tr id="table_2_row_32" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_33" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲉⲃⲟⲗϧⲉⲛ Ⲙⲓⲭⲉⲟⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_34" class="text">
            <td class="coptic">Ⲟⲩⲟⲓ ⲛ̀ⲧⲁⲯⲩⲭⲏ ϫⲉ ⲁϥⲙⲟⲩⲛⲕ ⲛ̀ϫⲉ ⲡⲓⲣⲉϥⲉⲣϩⲟϯ ⲉ̀ⲃⲟⲗ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    
    <table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Deuteronomy 8:19-9:24)
    <span class="arabic-caption">النبوة الأولي<br>(سفر التثنية 8: 19 - 9: 24)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Deuteronomy of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر التثنية لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">I testify against you this day that you shall surely perish.</td>
        <td class="arabic">أُشْهِدُ عَليْكُمُ اليَوْمَ أَنَّكُمْ تَبِيدُونَ لا مَحَالةَ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">As the nations which the Lord destroys before you, so you shall perish, because you would not be obedient to the voice of the Lord your God.</td>
        <td class="arabic">كَالشُّعُوبِ الذِينَ يُبِيدُهُمُ الرَّبُّ مِنْ أَمَامِكُمْ كَذَلِكَ تَبِيدُونَ لأَجْلِ أَنَّكُمْ لمْ تَسْمَعُوا لِقَوْلِ الرَّبِّ إِلهِكُمْ».</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">"Hear, O Israel: You are to cross over the Jordan today, and go in to dispossess nations greater and mightier than yourself, cities great and fortified up to heaven,</td>
        <td class="arabic">«إِسْمَعْ يَا إِسْرَائِيلُ أَنْتَ اليَوْمَ عَابِرٌ الأُرْدُنَّ لِتَدْخُل وَتَمْتَلِكَ شُعُوباً أَكْبَرَ وَأَعْظَمَ مِنْكَ وَمُدُناً عَظِيمَةً وَمُحَصَّنَةً إِلى السَّمَاءِ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">a people great and tall, the descendants of the Anakim, whom you know, and of whom you heard it said, 'Who can stand before the descendants of Anak?'</td>
        <td class="arabic">قَوْماً عِظَاماً وَطِوَالاً بَنِي عَنَاقٍَ الذِينَ عَرَفْتَهُمْ وَسَمِعْتَ: مَنْ يَقِفُ فِي وَجْهِ بَنِي عَنَاقٍَ؟</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Therefore understand today that the Lord your God is He who goes over before you as a consuming fire. He will destroy them and bring them down before you; so you shall drive them out and destroy them quickly, as the Lord has said to you.</td>
        <td class="arabic">فَاعْلمِ اليَوْمَ أَنَّ الرَّبَّ إِلهَكَ هُوَ العَابِرُ أَمَامَكَ نَاراً آكِلةً. هُوَ يُبِيدُهُمْ وَيُذِلُّهُمْ أَمَامَكَ فَتَطْرُدُهُمْ وَتُهْلِكُهُمْ سَرِيعاً كَمَا كَلمَكَ الرَّبُّ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Do not think in your heart, after the Lord your God has cast them out before you, saying, 'Because of my righteousness the Lord has brought me in to possess this land'; but it is because of the wickedness of these nations that the Lord is driving them out from before you.</td>
        <td class="arabic">لا تَقُل فِي قَلبِكَ حِينَ يَنْفِيهِمِ الرَّبُّ إِلهُكَ مِنْ أَمَامِكَ: لأَجْلِ بِرِّي أَدْخَلنِي الرَّبُّ لأَمْتَلِكَ هَذِهِ الأَرْضَ. وَلأَجْلِ إِثْمِ هَؤُلاءِ الشُّعُوبِ يَطْرُدُهُمُ الرَّبُّ مِنْ أَمَامِكَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">It is not because of your righteousness or the uprightness of your heart that you go in to possess their land, but because of the wickedness of these nations that the Lord your God drives them out from before you, and that He may fulfill the word which the Lord swore to your fathers, to Abraham, Isaac, and Jacob.</td>
        <td class="arabic">ليْسَ لأَجْلِ بِرِّكَ وَعَدَالةِ قَلبِكَ تَدْخُلُ لِتَمْتَلِكَ أَرْضَهُمْ بَل لأَجْلِ إِثْمِ أُولئِكَ الشُّعُوبِ يَطْرُدُهُمُ الرَّبُّ إِلهُكَ مِنْ أَمَامِكَ وَلِيَفِيَ بِالكَلامِ الذِي أَقْسَمَ الرَّبُّ عَليْهِ لآِبَائِكَ إِبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Therefore understand that the Lord your God is not giving you this good land to possess because of your righteousness, for you are a stiff-necked people.</td>
        <td class="arabic">فَاعْلمْ أَنَّهُ ليْسَ لأَجْلِ بِرِّكَ يُعْطِيكَ الرَّبُّ إِلهُكَ هَذِهِ الأَرْضَ الجَيِّدَةَ لِتَمْتَلِكَهَا لأَنَّكَ شَعْبٌ صُلبُ الرَّقَبَةِ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">"Remember. Do not forget how you provoked the Lord your God to wrath in the wilderness. From the day that you departed from the land of Egypt until you came to this place, you have been rebellious against the Lord.</td>
        <td class="arabic">«اُذْكُرْ. لا تَنْسَ كَيْفَ أَسْخَطْتَ الرَّبَّ إِلهَكَ فِي البَرِّيَّةِ. مِنَ اليَوْمِ الذِي خَرَجْتَ فِيهِ مِنْ أَرْضِ مِصْرَ حَتَّى أَتَيْتُمْ إِلى هَذَا المَكَانِ كُنْتُمْ تُقَاوِمُونَ الرَّبَّ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">Also in Horeb you provoked the Lord to wrath, so that the Lord was angry enough with you to have destroyed you.</td>
        <td class="arabic">حَتَّى فِي حُورِيبَ أَسْخَطْتُمُ الرَّبَّ فَغَضِبَ الرَّبُّ عَليْكُمْ لِيُبِيدَكُمْ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">When I went up into the mountain to receive the tablets of stone, the tablets of the covenant which the Lord made with you, then I stayed on the mountain forty days and forty nights. I neither ate bread nor drank water.</td>
        <td class="arabic">حِينَ صَعِدْتُ إِلى الجَبَلِ لآِخُذَ لوْحَيِ الحَجَرِ لوْحَيِ العَهْدِ الذِي قَطَعَهُ الرَّبُّ مَعَكُمْ أَقَمْتُ فِي الجَبَلِ أَرْبَعِينَ نَهَاراً وَأَرْبَعِينَ ليْلةً لا آكُلُ خُبْزاً وَلا أَشْرَبُ مَاءً.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">Then the Lord delivered to me two tablets of stone written with the finger of God, and on them were all the words which the Lord had spoken to you on the mountain from the midst of the fire in the day of the assembly.</td>
        <td class="arabic">وَأَعْطَانِيَ الرَّبُّ لوْحَيِ الحَجَرِ المَكْتُوبَيْنِ بِإِصْبِعِ اللهِ وَعَليْهِمَا مِثْلُ جَمِيعِ الكَلِمَاتِ التِي كَلمَكُمْ بِهَا الرَّبُّ فِي الجَبَلِ مِنْ وَسَطِ النَّارِ فِي يَوْمِ الاِجْتِمَاعِ.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">And it came to pass, at the end of forty days and forty nights, that the Lord gave me the two tablets of stone, the tablets of the covenant.</td>
        <td class="arabic">وَفِي نِهَايَةِ الأَرْبَعِينَ نَهَاراً وَالأَرْبَعِينَ ليْلةً لمَّا أَعْطَانِيَ الرَّبُّ لوْحَيِ الحَجَرِ لوْحَيِ العَهْدِ</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">Then the Lord said to me, 'Arise, go down quickly from here, for your people whom you brought out of Egypt have acted corruptly; they have quickly turned aside from the way which I commanded them; they have made themselves a molded image.'</td>
        <td class="arabic">قَال الرَّبُّ لِي: قُمِ انْزِل عَاجِلاً مِنْ هُنَا لأَنَّهُ قَدْ فَسَدَ شَعْبُكَ الذِي أَخْرَجْتَهُ مِنْ مِصْرَ. زَاغُوا سَرِيعاً عَنِ الطَّرِيقِ التِي أَوْصَيْتُهُمْ. صَنَعُوا لأَنْفُسِهِمْ تِمْثَالاً مَسْبُوكاً.</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">"Furthermore the Lord spoke to me, saying, 'I have seen this people, and indeed they are a stiff-necked people.</td>
        <td class="arabic">وَقَال الرَّبُّ لِي: رَأَيْتُ هَذَا الشَّعْبَ وَإِذَا هُوَ شَعْبٌ صُلبُ الرَّقَبَةِ.</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">Let Me alone, that I may destroy them and blot out their name from under heaven; and I will make of you a nation mightier and greater than they.'</td>
        <td class="arabic">أُتْرُكْنِي فَأُبِيدَهُمْ وَأَمْحُوَ اسْمَهُمْ مِنْ تَحْتِ السَّمَاءِ وَأَجْعَلكَ شَعْباً أَعْظَمَ وَأَكْثَرَ مِنْهُمْ.</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">So I turned and came down from the mountain, and the mountain burned with fire; and the two tablets of the covenant were in my two hands.</td>
        <td class="arabic">فَانْصَرَفْتُ وَنَزَلتُ مِنَ الجَبَلِ وَالجَبَلُ يَشْتَعِلُ بِالنَّارِ وَلوْحَا العَهْدِ فِي يَدَيَّ.</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">And I looked, and behold, you had sinned against the Lord your God--had made for yourselves a molded calf! You had turned aside quickly from the way which the Lord had commanded you.</td>
        <td class="arabic">«فَنَظَرْتُ وَإِذَا أَنْتُمْ قَدْ أَخْطَأْتُمْ إِلى الرَّبِّ إِلهِكُمْ وَصَنَعْتُمْ لأَنْفُسِكُمْ عِجْلاً مَسْبُوكاً وَزُغْتُمْ سَرِيعاً عَنِ الطَّرِيقِ التِي أَوْصَاكُمْ بِهَا الرَّبُّ.</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">Then I took the two tablets and threw them out of my two hands and broke them before your eyes.</td>
        <td class="arabic">فَأَخَذْتُ اللوْحَيْنِ وَطَرَحْتُهُمَا مِنْ يَدَيَّ وَكَسَّرْتُهُمَا أَمَامَ أَعْيُنِكُمْ.</td>
    </tr>
    <tr id="table_3_row_23" class="text">
        <td class="english">And I fell down before the Lord, as at the first, forty days and forty nights; I neither ate bread nor drank water, because of all your sin which you committed in doing wickedly in the sight of the Lord, to provoke Him to anger.</td>
        <td class="arabic">ثُمَّ سَقَطْتُ أَمَامَ الرَّبِّ كَالأَوَّلِ أَرْبَعِينَ نَهَاراً وَأَرْبَعِينَ ليْلةً لا آكُلُ خُبْزاً وَلا أَشْرَبُ مَاءً مِنْ أَجْلِ كُلِّ خَطَايَاكُمُ التِي أَخْطَأْتُمْ بِهَا بِعَمَلِكُمُ الشَّرَّ أَمَامَ الرَّبِّ لِإِغَاظَتِهِ.</td>
    </tr>
    <tr id="table_3_row_24" class="text">
        <td class="english">For I was afraid of the anger and hot displeasure with which the Lord was angry with you, to destroy you. But the Lord listened to me at that time also.</td>
        <td class="arabic">لأَنِّي فَزِعْتُ مِنَ الغَضَبِ وَالغَيْظِ الذِي سَخِطَهُ الرَّبُّ عَليْكُمْ لِيُبِيدَكُمْ. فَسَمِعَ لِيَ الرَّبُّ تِلكَ المَرَّةَ أَيْضاً.</td>
    </tr>
    <tr id="table_3_row_25" class="text">
        <td class="english">And the Lord was very angry with Aaron and would have destroyed him; so I prayed for Aaron also at the same time.</td>
        <td class="arabic">وَعَلى هَارُونَ غَضِبَ الرَّبُّ جِدّاً لِيُبِيدَهُ. فَصَليْتُ أَيْضاً مِنْ أَجْلِ هَارُونَ فِي ذَلِكَ الوَقْتِ.</td>
    </tr>
    <tr id="table_3_row_26" class="text">
        <td class="english">Then I took your sin, the calf which you had made, and burned it with fire and crushed it and ground it very small, until it was as fine as dust; and I threw its dust into the brook that descended from the mountain.</td>
        <td class="arabic">وَأَمَّا خَطِيَّتُكُمُ العِجْلُ الذِي صَنَعْتُمُوهُ فَأَخَذْتُهُ وَأَحْرَقْتُهُ بِالنَّارِ وَرَضَضْتُهُ وَطَحَنْتُهُ جَيِّداً حَتَّى نَعِمَ كَالغُبَارِ. ثُمَّ طَرَحْتُ غُبَارَهُ فِي النَّهْرِ المُنْحَدِرِ مِنَ الجَبَلِ.</td>
    </tr>
    <tr id="table_3_row_27" class="text">
        <td class="english">"Also at Taberah and Massah and Kibroth Hattaavah you provoked the Lord to wrath.</td>
        <td class="arabic">«وَفِي تَبْعِيرَةَ وَمَسَّةَ وَقَبَرُوتَ هَتَّأَوَةَ أَسْخَطْتُمُ الرَّبَّ.</td>
    </tr>
    <tr id="table_3_row_28" class="text">
        <td class="english">Likewise, when the Lord sent you from Kadesh Barnea, saying, 'Go up and possess the land which I have given you,' then you rebelled against the commandment of the Lord your God, and you did not believe Him nor obey His voice.</td>
        <td class="arabic">وَحِينَ أَرْسَلكُمُ الرَّبُّ مِنْ قَادِشَ بَرْنِيعَ قَائِلاً: اصْعَدُوا امْتَلِكُوا الأَرْضَ التِي أَعْطَيْتُكُمْ عَصَيْتُمْ قَوْل الرَّبِّ إِلهِكُمْ وَلمْ تُصَدِّقُوهُ وَلمْ تَسْمَعُوا لِقَوْلِهِ.</td>
    </tr>
    <tr id="table_3_row_29" class="text">
        <td class="english">You have been rebellious against the Lord from the day that I knew you.</td>
        <td class="arabic">قَدْ كُنْتُمْ تَعْصُونَ الرَّبَّ مُنْذُ يَوْمَ عَرَفْتُكُمْ.</td>
    </tr>
    <tr id="table_3_row_31" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 1:2-9)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 1: 2 – 9)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Hear, O heavens, and give ear, O earth! For the Lord has spoken: " I have nourished and brought up children, And they have rebelled against Me;</td>
        <td class="arabic">اِسْمَعِي أَيَّتُهَا السَّمَاوَاتُ وَأَصْغِي أَيَّتُهَا الأَرْضُ لأَنَّ الرَّبَّ يَتَكَلَّمُ: «رَبَّيْتُ بَنِينَ وَنَشَّأْتُهُمْ أَمَّا هُمْ فَعَصُوا عَلَيَّ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">The ox knows its owner And the donkey its master's crib; But Israel does not know, My people do not consider."</td>
        <td class="arabic">اَلثَّوْرُ يَعْرِفُ قَانِيهِ وَالْحِمَارُ مِعْلَفَ صَاحِبِهِ أَمَّا إِسْرَائِيلُ فَلاَ يَعْرِفُ. شَعْبِي لاَ يَفْهَمُ».</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">Alas, sinful nation, A people laden with iniquity, A brood of evildoers, Children who are corrupters! They have forsaken the Lord, They have provoked to anger The Holy One of Israel, They have turned away backward.</td>
        <td class="arabic">وَيْلٌ لِلأُمَّةِ الْخَاطِئَةِ الشَّعْبِ الثَّقِيلِ الإِثْمِ نَسْلِ فَاعِلِي الشَّرِّ أَوْلاَدِ مُفْسِدِينَ! تَرَكُوا الرَّبَّ اسْتَهَانُوا بِقُدُّوسِ إِسْرَائِيلَ ارْتَدُّوا إِلَى وَرَاءٍ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Why should you be stricken again? You will revolt more and more. The whole head is sick, And the whole heart faints.</td>
        <td class="arabic">عَلَى مَ تُضْرَبُونَ بَعْدُ؟ تَزْدَادُونَ زَيَغَاناً! كُلُّ الرَّأْسِ مَرِيضٌ وَكُلُّ الْقَلْبِ سَقِيمٌ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">From the sole of the foot even to the head, There is no soundness in it, But wounds and bruises and putrefying sores; They have not been closed or bound up, Or soothed with ointment.</td>
        <td class="arabic">مِنْ أَسْفَلِ الْقَدَمِ إِلَى الرَّأْسِ لَيْسَ فِيهِ صِحَّةٌ بَلْ جُرْحٌ وَأَحْبَاطٌ وَضَرْبَةٌ طَرِيَّةٌ لَمْ تُعْصَرْ وَلَمْ تُعْصَبْ وَلَمْ تُلَيَّنْ بِالزَّيْتِ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Your country is desolate, Your cities are burned with fire; Strangers devour your land in your presence; And it is desolate, as overthrown by strangers.</td>
        <td class="arabic">بِلاَدُكُمْ خَرِبَةٌ. مُدُنُكُمْ مُحْرَقَةٌ بِالنَّارِ. أَرْضُكُمْ تَأْكُلُهَا غُرَبَاءُ قُدَّامَكُمْ وَهِيَ خَرِبَةٌ كَانْقِلاَبِ الْغُرَبَاءِ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">So the daughter of Zion is left as a booth in a vineyard, As a hut in a garden of cucumbers, As a besieged city.</td>
        <td class="arabic">فَبَقِيَتِ ابْنَةُ صِهْيَوْنَ كَمِظَلَّةٍ فِي كَرْمٍ كَخَيْمَةٍ فِي مَقْثَأَةٍ كَمَدِينَةٍ مُحَاصَرَةٍ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">Unless the Lord of hosts Had left to us a very small remnant, We would have become like Sodom, We would have been made like Gomorrah.</td>
        <td class="arabic">لَوْلاَ أَنَّ رَبَّ الْجُنُودِ أَبْقَى لَنَا بَقِيَّةً صَغِيرَةً لَصِرْنَا مِثْلَ سَدُومَ وَشَابَهْنَا عَمُورَةَ.</td>
    </tr>
    <tr id="table_4_row_13" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Isaiah 2:10-21)
    <span class="arabic-caption">النبوة الثالثة<br>(اشعياء 2: 10 - 21)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">Also, a reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">و أيضا من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Enter into the rock, and hide in the dust, From the terror of the Lord And the glory of His majesty.</td>
        <td class="arabic">اُدْخُلْ إِلَى الصَّخْرَةِ وَاخْتَبِئْ فِي التُّرَابِ مِنْ أَمَامِ هَيْبَةِ الرَّبِّ وَمِنْ بَهَاءِ عَظَمَتِهِ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">The lofty looks of man shall be humbled, The haughtiness of men shall be bowed down, And the Lord alone shall be exalted in that day.</td>
        <td class="arabic">تُوضَعُ عَيْنَا تَشَامُخِ الإِنْسَانِ وَتُخْفَضُ رِفْعَةُ النَّاسِ وَيَسْمُو الرَّبُّ وَحْدَهُ فِي ذَلِكَ الْيَوْمِ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">For the day of the Lord of hosts Shall come upon everything proud and lofty, Upon everything lifted up-- And it shall be brought low--</td>
        <td class="arabic">فَإِنَّ لِرَبِّ الْجُنُودِ يَوْماً عَلَى كُلِّ مُتَعَظِّمٍ وَعَالٍ وَعَلَى كُلِّ مُرْتَفِعٍ فَيُوضَعُ</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Upon all the cedars of Lebanon that are high and lifted up, And upon all the oaks of Bashan;</td>
        <td class="arabic">وَعَلَى كُلِّ أَرْزِ لُبْنَانَ الْعَالِي الْمُرْتَفِعِ وَعَلَى كُلِّ بَلُّوطِ بَاشَانَ</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Upon all the high mountains, And upon all the hills that are lifted up;</td>
        <td class="arabic">وَعَلَى كُلِّ الْجِبَالِ الْعَالِيَةِ وَعَلَى كُلِّ التِّلاَلِ الْمُرْتَفِعَةِ</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">Upon every high tower, And upon every fortified wall;</td>
        <td class="arabic">وَعَلَى كُلِّ بُرْجٍ عَالٍ وَعَلَى كُلِّ سُورٍ مَنِيعٍ</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">Upon all the ships of Tarshish, And upon all the beautiful sloops.</td>
        <td class="arabic">وَعَلَى كُلِّ سُفُنِ تَرْشِيشَ وَعَلَى كُلِّ الأَعْلاَمِ الْبَهِجَةِ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">The loftiness of man shall be bowed down, And the haughtiness of men shall be brought low; The Lord alone will be exalted in that day,</td>
        <td class="arabic">فَيُخْفَضُ تَشَامُخُ الإِنْسَانِ وَتُوضَعُ رِفْعَةُ النَّاسِ وَيَسْمُو الرَّبُّ وَحْدَهُ فِي ذَلِكَ الْيَوْمِ.</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">But the idols He shall utterly abolish.</td>
        <td class="arabic">وَتَزُولُ الأَوْثَانُ بِتَمَامِهَا.</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">They shall go into the holes of the rocks, And into the caves of the earth, From the terror of the Lord And the glory of His majesty, When He arises to shake the earth mightily.</td>
        <td class="arabic">وَيَدْخُلُونَ فِي مَغَايِرِ الصُّخُورِ وَفِي حَفَائِرِ التُّرَابِ مِنْ أَمَامِ هَيْبَةِ الرَّبِّ وَمِنْ بَهَاءِ عَظَمَتِهِ عِنْدَ قِيَامِهِ لِيُرْعِبَ الأَرْضَ.</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">In that day a man will cast away his idols of silver And his idols of gold, Which they made, each for himself to worship, To the moles and bats,</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ يَطْرَحُ الإِنْسَانُ أَوْثَانَهُ الْفَضِّيَّةَ وَأَوْثَانَهُ الذَّهَبِيَّةَ الَّتِي عَمِلُوهَا لَهُ لِلسُّجُودِ لِلْجُرْذَانِ وَالْخَفَافِيشِ</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">To go into the clefts of the rocks, And into the crags of the rugged rocks, From the terror of the Lord And the glory of His majesty, When He arises to shake the earth mightily.</td>
        <td class="arabic">لِيَدْخُلَ فِي نُقَرِ الصُّخُورِ وَفِي شُقُوقِ الْمَعَاقِلِ مِنْ أَمَامِ هَيْبَةِ الرَّبِّ وَمِنْ بَهَاءِ عَظَمَتِهِ عِنْدَ قِيَامِهِ لِيُرْعِبَ الأَرْضَ.</td>
    </tr>
    <tr id="table_5_row_17" class="intro">
        <td class="english">Glory be to the Holy Trinity our God unto the age of all ages, Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th  Prophecy">
    <caption id="caption_table_6" class="caption">4th  Prophecy<br>(Jeremiah 22:29-23:6)
    <span class="arabic-caption">النبوة الرابعة<br>(أرميا 22: 29 - 23: 6)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from Jeremiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من أرميا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">O earth, O earth, Hear the word of the Lord!</td>
        <td class="arabic">يَا أَرْضُ، يَا أَرْضُ اسْمَعِي كَلِمَةَ الرَّبِّ!</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">Thus says the Lord: 'Write this man down as childless, A man who shall not prosper in his days; For none of his descendants shall prosper, Sitting on the throne of David, And ruling anymore in Judah.' "</td>
        <td class="arabic">هَكَذَا قَالَ الرَّبُّ: [اكْتُبُوا هَذَا الرَّجُلَ عَقِيماً رَجُلاً لاَ يَنْجَحُ فِي أَيَّامِهِ لأَنَّهُ لاَ يَنْجَحُ مِنْ نَسْلِهِ أَحَدٌ جَالِساً عَلَى كُرْسِيِّ دَاوُدَ وَحَاكِماً بَعْدُ فِي يَهُوذَا].</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">"Woe to the shepherds who destroy and scatter the sheep of My pasture!" says the Lord.</td>
        <td class="arabic">وَيْلٌ لِلرُّعَاةِ الَّذِينَ يُهْلِكُونَ وَيُبَدِّدُونَ غَنَمَ رَعِيَّتِي يَقُولُ الرَّبُّ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">Therefore thus says the Lord God of Israel against the shepherds who feed My people: "You have scattered My flock, driven them away, and not attended to them. Behold, I will attend to you for the evil of your doings," says the Lord.</td>
        <td class="arabic">لِذَلِكَ هَكَذَا قَالَ الرَّبُّ إِلَهُ إِسْرَائِيلَ عَنِ الرُّعَاةِ الَّذِينَ يَرْعُونَ شَعْبِي: [أَنْتُمْ بَدَّدْتُمْ غَنَمِي وَطَرَدْتُمُوهَا وَلَمْ تَتَعَهَّدُوهَا. هَئَنَذَا أُعَاقِبُكُمْ عَلَى شَرِّ أَعْمَالِكُمْ يَقُولُ الرَّبُّ.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">"But I will gather the remnant of My flock out of all countries where I have driven them, and bring them back to their folds; and they shall be fruitful and increase.</td>
        <td class="arabic">وَأَنَا أَجْمَعُ بَقِيَّةَ غَنَمِي مِنْ جَمِيعِ الأَرَاضِي الَّتِي طَرَدْتُهَا إِلَيْهَا وَأَرُدُّهَا إِلَى مَرَابِضِهَا فَتُثْمِرُ وَتَكْثُرُ.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">I will set up shepherds over them who will feed them; and they shall fear no more, nor be dismayed, nor shall they be lacking," says the Lord.</td>
        <td class="arabic">وَأُقِيمُ عَلَيْهَا رُعَاةً يَرْعُونَهَا فَلاَ تَخَافُ بَعْدُ وَلاَ تَرْتَعِدُ وَلاَ تُفْقَدُ يَقُولُ الرَّبُّ].</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">"Behold, the days are coming," says the Lord, "That I will raise to David a Branch of righteousness; A King shall reign and prosper, And execute judgment and righteousness in the earth.</td>
        <td class="arabic">[هَا أَيَّامٌ تَأْتِي يَقُولُ الرَّبُّ وَأُقِيمُ لِدَاوُدَ غُصْنَ بِرٍّ فَيَمْلِكُ مَلِكٌ وَيَنْجَحُ وَيُجْرِي حَقّاً وَعَدْلاً فِي الأَرْضِ.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">In His days Judah will be saved, And Israel will dwell safely.</td>
        <td class="arabic">فِي أَيَّامِهِ يُخَلَّصُ يَهُوذَا وَيَسْكُنُ إِسْرَائِيلُ آمِناً وَهَذَا هُوَ اسْمُهُ الَّذِي يَدْعُونَهُ بِهِ: الرَّبُّ بِرُّنَا.</td>
    </tr>
    <tr id="table_6_row_13" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_7" title="5th Prophecy">
    <caption id="caption_table_7" class="caption">5th Prophecy<br>(Jeremiah)
    <span class="arabic-caption">النبوة الخامسة<br>(أرميا)</span></caption>
    <tr id="table_7_row_1" class="intro">
        <td class="english">Also, a reading from Jeremiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">و أيضا من أرميا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_7_row_4" class="text">
        <td class="english">And Jeremiah said to Pashur,</td>
        <td class="arabic">ثم قال ارميا لفشحور.</td>
    </tr>
    <tr id="table_7_row_5" class="text">
        <td class="english">“You were resisting the truth for sometime with your father and your children who did sin worse than you.</td>
        <td class="arabic">انكم كنتم زماناً مع ابائكم مقاومين للحق وأولادكم الذين يأتون بعدكم هؤلاء الذين يصنعون خطية أشر منكم.</td>
    </tr>
    <tr id="table_7_row_6" class="text">
        <td class="english">For they set a price to him who has no price, and grieved him who heals sickness and forgives sins.</td>
        <td class="arabic">لأنهم يثمنون الذى ليس له ثمن. ويؤلمون الذى يشفى الامراض ويغفر الذنوب.</td>
    </tr>
    <tr id="table_7_row_7" class="text">
        <td class="english">They took the price upon which the sons of Israel agreed, thirty pieces of silver.</td>
        <td class="arabic">ويأخذون الثلاثين من الفضة الثمن الذى شارط عليه بنى اسرائيل.</td>
    </tr>
    <tr id="table_7_row_8" class="text">
        <td class="english">And gave it to the potter’s house.</td>
        <td class="arabic">ويدفعونها فى حقل الفاخورى.</td>
    </tr>
    <tr id="table_7_row_9" class="text">
        <td class="english">As the Lord commanded me, so I say.</td>
        <td class="arabic">كما أمرنى الرب. وهكذا أقول.</td>
    </tr>
    <tr id="table_7_row_10" class="text">
        <td class="english">The judgment of perdition will be upon them and their children forever,</td>
        <td class="arabic">ستأتى عليهم دينونة الهلاك إلى الابد وعلى اولادهم.</td>
    </tr>
    <tr id="table_7_row_11" class="text">
        <td class="english">for they judged innocent blood.</td>
        <td class="arabic">لانهم القوا دماً زكياً فى الحكم.</td>
    </tr>
    <tr id="table_7_row_13" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_8" title="6th Prophecy">
    <caption id="caption_table_8" class="caption">6th Prophecy<br>(Isaiah 24:1-13)
    <span class="arabic-caption">النبوة السادسة<br>(اشعياء 24: 1 - 13)</span></caption>
    <tr id="table_8_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_8_row_4" class="text">
        <td class="english">Behold, the Lord makes the earth empty and makes it waste, Distorts its surface And scatters abroad its inhabitants.</td>
        <td class="arabic">هُوَذَا الرَّبُّ يُخْلِي الأَرْضَ وَيُفْرِغُهَا وَيَقْلِبُ وَجْهَهَا وَيُبَدِّدُ سُكَّانَهَا.</td>
    </tr>
    <tr id="table_8_row_5" class="text">
        <td class="english">And it shall be: As with the people, so with the priest; As with the servant, so with his master; As with the maid, so with her mistress; As with the buyer, so with the seller; As with the lender, so with the borrower; As with the creditor, so with the debtor.</td>
        <td class="arabic">وَكَمَا يَكُونُ الشَّعْبُ هَكَذَا الْكَاهِنُ. كَمَا الْعَبْدُ هَكَذَا سَيِّدُهُ. كَمَا الأَمَةُ هَكَذَا سَيِّدَتُهَا. كَمَا الشَّارِي هَكَذَا الْبَائِعُ. كَمَا الْمُقْرِضُ هَكَذَا الْمُقْتَرِضُ. وَكَمَا الدَّائِنُ هَكَذَا الْمَدْيُونُ.</td>
    </tr>
    <tr id="table_8_row_6" class="text">
        <td class="english">The land shall be entirely emptied and utterly plundered, For the Lord has spoken this word.</td>
        <td class="arabic">تُفْرَغُ الأَرْضُ إِفْرَاغاً وَتُنْهَبُ نَهْباً لأَنَّ الرَّبَّ قَدْ تَكَلَّمَ بِهَذَا الْقَوْلِ.</td>
    </tr>
    <tr id="table_8_row_7" class="text">
        <td class="english">The earth mourns and fades away, The world languishes and fades away; The haughty people of the earth languish.</td>
        <td class="arabic">نَاحَتْ ذَبُلَتِ الأَرْضُ. حَزِنَتْ ذَبُلَتِ الْمَسْكُونَةُ. حَزِنَ مُرْتَفِعُو شَعْبِ الأَرْضِ.</td>
    </tr>
    <tr id="table_8_row_8" class="text">
        <td class="english">The earth is also defiled under its inhabitants, Because they have transgressed the laws, Changed the ordinance, Broken the everlasting covenant.</td>
        <td class="arabic">وَالأَرْضُ تَدَنَّسَتْ تَحْتَ سُكَّانِهَا لأَنَّهُمْ تَعَدُّوا الشَّرَائِعَ غَيَّرُوا الْفَرِيضَةَ نَكَثُوا الْعَهْدَ الأَبَدِيَّ.</td>
    </tr>
    <tr id="table_8_row_9" class="text">
        <td class="english">Therefore the curse has devoured the earth, And those who dwell in it are desolate. Therefore the inhabitants of the earth are burned, And few men are left.</td>
        <td class="arabic">لِذَلِكَ لَعْنَةٌ أَكَلَتِ الأَرْضَ وَعُوقِبَ السَّاكِنُونَ فِيهَا. لِذَلِكَ احْتَرَقَ سُكَّانُ الأَرْضِ وَبَقِيَ أُنَاسٌ قَلاَئِلُ.</td>
    </tr>
    <tr id="table_8_row_10" class="text">
        <td class="english">The new wine fails, the vine languishes, All the merry-hearted sigh.</td>
        <td class="arabic">نَاحَ الْمِسْطَارُ. ذَبُلَتِ الْكَرْمَةُ. أَنَّ كُلُّ مَسْرُورِي الْقُلُوبِ.</td>
    </tr>
    <tr id="table_8_row_11" class="text">
        <td class="english">The mirth of the tambourine ceases, The noise of the jubilant ends, The joy of the harp ceases.</td>
        <td class="arabic">بَطَلَ فَرَحُ الدُّفُوفِ. انْقَطَعَ ضَجِيجُ الْمُبْتَهِجِينَ. بَطَلَ فَرَحُ الْعُودِ.</td>
    </tr>
    <tr id="table_8_row_12" class="text">
        <td class="english">They shall not drink wine with a song; Strong drink is bitter to those who drink it.</td>
        <td class="arabic">لاَ يَشْرَبُونَ خَمْراً بِالْغِنَاءِ. يَكُونُ الْمُسْكِرُ مُرّاً لِشَارِبِيهِ.</td>
    </tr>
    <tr id="table_8_row_13" class="text">
        <td class="english">The city of confusion is broken down; Every house is shut up, so that none may go in.</td>
        <td class="arabic">دُمِّرَتْ قَرْيَةُ الْخَرَابِ. أُغْلِقَ كُلُّ بَيْتٍ عَنِ الدُّخُولِ.</td>
    </tr>
    <tr id="table_8_row_14" class="text">
        <td class="english">There is a cry for wine in the streets, All joy is darkened, The mirth of the land is gone.</td>
        <td class="arabic">صُرَاخٌ عَلَى الْخَمْرِ فِي الأَزِقَّةِ. غَرَبَ كُلُّ فَرَحٍ. انْتَفَى سُرُورُ الأَرْضِ.</td>
    </tr>
    <tr id="table_8_row_15" class="text">
        <td class="english">In the city desolation is left, And the gate is stricken with destruction.</td>
        <td class="arabic">اَلْبَاقِي فِي الْمَدِينَةِ خَرَابٌ وَضُرِبَ الْبَابُ رَدْماً.</td>
    </tr>
    <tr id="table_8_row_16" class="text">
        <td class="english">When it shall be thus in the midst of the land among the people, It shall be like the shaking of an olive tree.</td>
        <td class="arabic">إِنَّهُ هَكَذَا يَكُونُ فِي وَسَطِ الأَرْضِ بَيْنَ الشُّعُوبِ كَنُفَاضَةِ زَيْتُونَةٍ كَالْخُصَاصَةِ إِذِ انْتَهَى الْقِطَافُ.</td>
    </tr>
    <tr id="table_8_row_18" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_9" title="7th Prophecy">
    <caption id="caption_table_9" class="caption">7th Prophecy<br>(Wisdom of Solomon 2:12-22)
    <span class="arabic-caption">النبوة  السابعة<br>(حكمة سليمان 2: 12 – 22)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">A reading from the Wisdom of Solomon the prophet. May his blessings be with us. Amen</td>
        <td class="arabic">بدء حكمة سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">“Let us lie in wait for the righteous man,
because he is inconvenient to us and opposes our actions; he reproaches us for sins against the law, and accuses us of sins against our training.</td>
        <td class="arabic">فَلنَتَحَيَّنِ الفُرصَةَ لِلانقِضاضِ على الأتقِـياءِ لأَنَّهُم يُضايِقونَنا ويُقاوِمونَ أعمالَنا ويَتَّهِمونَنا بِمُخالفةِ أحكامِ الشَّريعةِ ويَفضَحونَ خُروجَنا على الأعرافِ والتَّقاليدِ.</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">He professes to have knowledge of God, and calls himself a child of the Lord.</td>
        <td class="arabic">يَدَّعونَ مَعرِفةَ الله ويُسَمُّونَ أنفُسَهُم أبناءَ الرّبٌ.</td>
    </tr>
    <tr id="table_9_row_6" class="text">
        <td class="english">He became to us a reproof of our thoughts;</td>
        <td class="arabic">كُلُّ هَمِّهِم تَفنيدُ آرائِنا بل مَنظَرُهُم يُثيرُ اَشمِئزازَنا</td>
    </tr>
    <tr id="table_9_row_7" class="text">
        <td class="english">the very sight of him is a burden to us, because his manner of life is unlike that of others, and his ways are strange.</td>
        <td class="arabic">لأَنَّ سُلوكَهُم غريبٌ في الحياةِ يُخالِفُ سُلوكَ الآخرينَ.</td>
    </tr>
    <tr id="table_9_row_8" class="text">
        <td class="english">We are considered by him as something base, and he avoids our ways as unclean; he calls the last end of the righteous happy, and boasts that God is his father.</td>
        <td class="arabic">يَحسِبونَنا زائِفينَ، فَيَتَجَنَّبونَ سُلوكَنا كأنَّنا أنجاسٌ، يُبَشِّرونَ أنَّ نِهايةَ الصَّالِحينَ مُباركَةٌ، ويتَباهَونَ بِأنَّهُم أبناءُ الله.</td>
    </tr>
    <tr id="table_9_row_9" class="text">
        <td class="english">Let us see if his words are true, and let us test what will happen at the end of his life;</td>
        <td class="arabic">فلنَنتَظِرْ لِنَرى هل أقوالُهُم هذِهِ حَقٌّ وكيفَ تكونُ علَيهِ نِهايَتُهُم في الحياةِ.</td>
    </tr>
    <tr id="table_9_row_10" class="text">
        <td class="english">for if the righteous man is God's son, he will help him, and will deliver him from the hand of his adversaries.</td>
        <td class="arabic">فإنْ كانَ الأتقِـياءُ أبناءَ الله، أفلا يُعينُهُم ويُنقِذُهُم مِنْ أيدي خُصومِهِم؟</td>
    </tr>
    <tr id="table_9_row_11" class="text">
        <td class="english">Let us test him with insult and torture, that we may find out how gentle he is,
and make trial of his forbearance.</td>
        <td class="arabic">فلنَمْتَحِنْهُم بِالإهانَةِ والتَّعذيبِ لِنَعرِفَ مدَى وداعَتِهِم ونَختَبِرَ صَبرَهُم.</td>
    </tr>
    <tr id="table_9_row_12" class="text">
        <td class="english">Let us condemn him to a shameful death, for, according to what he says, he will be protected.”</td>
        <td class="arabic">ولنَحكُمْ علَيهِم بِالموتِ في العارِ لِنرَى إذا كانَ الله يَرُدُّ عَنهُم.</td>
    </tr>
    <tr id="table_9_row_13" class="text">
        <td class="english">Thus they reasoned, but they were led astray, for their wickedness blinded them,</td>
        <td class="arabic">هذا ما يَتَوَهَّمونَهُ لكِنَّهُم يَخدَعونَ أنفُسَهُم لأِنَّ الشَّرَ أعمَى بَصائِرَهُم.</td>
    </tr>
    <tr id="table_9_row_14" class="text">
        <td class="english">and they did not know the secret purposes of God, nor hope for the wages of holiness, nor discern the prize for blameless souls.</td>
        <td class="arabic">هُمْ لا يَعرِفونَ أسرارَ الله، ولا يَرجونَ لِلقَداسَةِ جَزاءً ولا لِطَهارَةِ النُّفوسِ أملا بِثَوابٍ.</td>
    </tr>
    <tr id="table_9_row_16" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_10" title="8th Prophecy">
    <caption id="caption_table_10" class="caption">8th Prophecy<br>(Job 12:17-13:1)
    <span class="arabic-caption">النبوة  الثامنة<br>(أيوب 12: 17 - 13: 1)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">A reading from Job the rightous. May his blessings be with us. Amen.</td>
        <td class="arabic">من أيوب الصديق بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">He leads counselors away plundered, And makes fools of the judges.</td>
        <td class="arabic">يَذْهَبُ بِالْمُشِيرِينَ أَسْرَى وَيُحَمِّقُ الْقُضَاةَ.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">He loosens the bonds of kings, And binds their waist with a belt.</td>
        <td class="arabic">يَحُلُّ مَنَاطِقَ الْمُلُوكِ وَيَشُدُّ أَحْقَاءَهُمْ بِوِثَاقٍ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">He leads princes away plundered, And overthrows the mighty.</td>
        <td class="arabic">يَذْهَبُ بِالْكَهَنَةِ أَسْرَى وَيَقْلِبُ الأَقْوِيَاءَ.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">He deprives the trusted ones of speech, And takes away the discernment of the elders.</td>
        <td class="arabic">يَقْطَعُ كَلاَمَ الأُمَنَاءِ وَيَنْزِعُ ذَوْقَ الشُّيُوخِ.</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">He pours contempt on princes, And disarms the mighty.</td>
        <td class="arabic">يُلْقِي هَوَاناً عَلَى الشُّرَفَاءِ وَيُرْخِي مِنْطَقَةَ الأَشِدَّاءِ.</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">He uncovers deep things out of darkness, And brings the shadow of death to light.</td>
        <td class="arabic">يَكْشِفُ الْعَمَائِقَ مِنَ الظَّلاَمِ وَيُخْرِجُ ظِلَّ الْمَوْتِ إِلَى النُّورِ.</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">He makes nations great, and destroys them; He enlarges nations, and guides them.</td>
        <td class="arabic">يُكَثِّرُ الأُمَمَ ثُمَّ يُبِيدُهَا. يُوَسِّعُ لِلأُمَمِ ثُمَّ يُشَتِّتُها.</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">He takes away the understanding of the chiefs of the people of the earth, And makes them wander in a pathless wilderness.</td>
        <td class="arabic">يَنْزِعُ عُقُولَ رُؤَسَاءِ شَعْبِ الأَرْضِ وَيُضِلُّهُمْ فِي تِيهٍ بِلاَ طَرِيقٍ.</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english">They grope in the dark without light, And He makes them stagger like a drunken man.</td>
        <td class="arabic">يَتَلَمَّسُونَ فِي الظَّلاَمِ وَلَيْسَ نُورٌ وَيُرَنِّحُهُمْ مِثْلَ السَّكْرَانِ.</td>
    </tr>
    <tr id="table_10_row_13" class="text">
        <td class="english">"Behold, my eye has seen all this, My ear has heard and understood it.</td>
        <td class="arabic">[هَذَا كُلُّهُ رَأَتْهُ عَيْنِي. سَمِعَتْهُ أُذُنِي وَفَطِنَتْ بِهِ.</td>
    </tr>
    <tr id="table_10_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_11" title="9th Prophecy">
    <caption id="caption_table_11" class="caption">9th Prophecy<br>(Zechariah 11: 11-14)
    <span class="arabic-caption">النبوة  التاسعة<br>(زكريا 11: 11 - 14)</span></caption>
    <tr id="table_11_row_1" class="intro">
        <td class="english">A reading from Zechariah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من زكريا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_11_row_4" class="text">
        <td class="english">So it was broken on that day. Thus the poor of the flock, who were watching me, knew that it was the word of the Lord.</td>
        <td class="arabic">فَنُقِضَ فِي ذَلِكَ الْيَوْمِ. وَهَكَذَا عَلِمَ أَذَلُّ الْغَنَمِ الْمُنْتَظِرُونَ لِي أَنَّهَا كَلِمَةُ الرَّبِّ.</td>
    </tr>
    <tr id="table_11_row_5" class="text">
        <td class="english">Then I said to them, "If it is agreeable to you, give me my wages; and if not, refrain." So they weighed out for my wages thirty pieces of silver.</td>
        <td class="arabic">فَقُلْتُ لَهُمْ: [إِنْ حَسُنَ فِي أَعْيُنِكُمْ فَأَعْطُونِي أُجْرَتِي وَإِلاَّ فَامْتَنِعُوا]. فَوَزَنُوا أُجْرَتِي ثَلاَثِينَ مِنَ الْفِضَّةِ.</td>
    </tr>
    <tr id="table_11_row_6" class="text">
        <td class="english">And the Lord said to me, "Throw it to the potter"--that princely price they set on me. So I took the thirty pieces of silver and threw them into the house of the Lord for the potter.</td>
        <td class="arabic">فَقَالَ لِي الرَّبُّ: [أَلْقِهَا إِلَى الْفَخَّارِيِّ الثَّمَنَ الْكَرِيمَ الَّذِي ثَمَّنُونِي بِهِ]. فَأَخَذْتُ الثَّلاَثِينَ مِنَ الْفِضَّةِ وَأَلْقَيْتُهَا إِلَى الْفَخَّارِيِّ فِي بَيْتِ الرَّبِّ.</td>
    </tr>
    <tr id="table_11_row_7" class="text">
        <td class="english">Then I cut in two my other staff, Bonds, that I might break the brotherhood between Judah and Israel.</td>
        <td class="arabic">ثُمَّ قَصَفْتُ عَصَايَ الأُخْرَى [حِبَالاً] لأَنْقُضَ الإِخَاءَ بَيْنَ يَهُوذَا وَإِسْرَائِيلَ.</td>
    </tr>
    <tr id="table_11_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_12" title="10th Prophecy">
    <caption id="caption_table_12" class="caption">10th Prophecy<br>(Micah 1:16-2:3)
    <span class="arabic-caption">النبوة العاشرة<br>(ميخا 1: 16 - 2: 3)</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">A reading from Micah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من ميخا النبي بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Make yourself bald and cut off your hair, Because of your precious children; Enlarge your baldness like an eagle, For they shall go from you into captivity.</td>
        <td class="arabic">كُونِي قَرْعَاءَ وَجُزِّي مِنْ أَجْلِ بَنِي تَنَعُّمِكِ. وَسِّعِي قَرْعَتَكِ كَالنَّسْرِ لأَنَّهُمْ قَدِ انْتَفُوا عَنْكِ.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">Woe to those who devise iniquity, And work out evil on their beds! At morning light they practice it, Because it is in the power of their hand.</td>
        <td class="arabic">وَيْلٌ لِلْمُفْتَكِرِينَ بِالْبُطْلِ وَالصَّانِعِينَ الشَّرَّ عَلَى مَضَاجِعِهِمْ. فِي نُورِ الصَّبَاحِ يَفْعَلُونَهُ لأَنَّهُ فِي قُدْرَةِ يَدِهِمْ.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">They covet fields and take them by violence, Also houses, and seize them. So they oppress a man and his house, A man and his inheritance.</td>
        <td class="arabic">فَإِنَّهُمْ يَشْتَهُونَ الْحُقُولَ وَيَغْتَصِبُونَهَا وَالْبُيُوتَ وَيَأْخُذُونَهَا وَيَظْلِمُونَ الرَّجُلَ وَبَيْتَهُ وَالإِنْسَانَ وَمِيرَاثَهُ.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">Therefore thus says the Lord: "Behold, against this family I am devising disaster, From which you cannot remove your necks; Nor shall you walk haughtily, For this is an evil time.</td>
        <td class="arabic">لِذَلِكَ هَكَذَا قَالَ الرَّبُّ: «هَئَنَذَا أَفْتَكِرُ عَلَى هَذِهِ الْعَشِيرَةِ بِشَرٍّ لاَ تُزِيلُونَ مِنْهُ أَعْنَاقَكُمْ وَلاَ تَسْلُكُونَ بِالتَّشَامُخِ لأَنَّهُ زَمَانٌ رَدِيءٌ.</td>
    </tr>
    <tr id="table_12_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_13" title="11th Prophecy">
    <caption id="caption_table_13" class="caption">11th Prophecy<br>(Micah 7: 1-8)
    <span class="arabic-caption">النبوة  الحادية عشرة<br>(ميخا 7: 1 - 8)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">Also, a reading from Micah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">و أيضا من ميخا النبي بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">Woe is me! For I am like those who gather summer fruits, Like those who glean vintage grapes; There is no cluster to eat Of the first-ripe fruit which my soul desires.</td>
        <td class="arabic">وَيْلٌ لِي لأَنِّي صِرْتُ كَجَنَى الصَّيْفِ كَخُصَاصَةِ الْقِطَافِ. لاَ عُنْقُودَ لِلأَكْلِ وَلاَ بَاكُورَةَ تِينَةٍ اشْتَهَتْهَا نَفْسِي.</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">The faithful man has perished from the earth, And there is no one upright among men. They all lie in wait for blood; Every man hunts his brother with a net.</td>
        <td class="arabic">قَدْ بَادَ التَّقِيُّ مِنَ الأَرْضِ وَلَيْسَ مُسْتَقِيمٌ بَيْنَ النَّاسِ. جَمِيعُهُمْ يَكْمُنُونَ لِلدِّمَاءِ يَصْطَادُونَ بَعْضُهُمْ بَعْضاً بِشَبَكَةٍ.</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">That they may successfully do evil with both hands-- The prince asks for gifts, The judge seeks a bribe, And the great man utters his evil desire; So they scheme together.</td>
        <td class="arabic">اَلْيَدَانِ إِلَى الشَّرِّ مُجْتَهِدَتَانِ. الرَّئِيسُ وَالْقَاضِي طَالِبٌ بِالْهَدِيَّةِ وَالْكَبِيرُ مُتَكَلِّمٌ بِهَوَى نَفْسِهِ فَيُعَكِّشُونَهَا.</td>
    </tr>
    <tr id="table_13_row_7" class="text">
        <td class="english">The best of them is like a brier; The most upright is sharper than a thorn hedge; The day of your watchman and your punishment comes; Now shall be their perplexity.</td>
        <td class="arabic">أَحْسَنُهُمْ مِثْلُ الْعَوْسَجِ وَأَعْدَلُهُمْ مِنْ سِيَاجِ الشَّوْكِ! يَوْمَ مُرَاقِبِيكَ عِقَابُكَ قَدْ جَاءَ. الآنَ يَكُونُ ارْتِبَاكُهُمْ.</td>
    </tr>
    <tr id="table_13_row_8" class="text">
        <td class="english">Do not trust in a friend; Do not put your confidence in a companion; Guard the doors of your mouth From her who lies in your bosom.</td>
        <td class="arabic">لاَ تَأْتَمِنُوا صَاحِباً. لاَ تَثِقُوا بِصَدِيقٍ. احْفَظْ أَبْوَابَ فَمِكَ عَنِ الْمُضْطَجِعَةِ فِي حِضْنِكَ.</td>
    </tr>
    <tr id="table_13_row_9" class="text">
        <td class="english">For son dishonors father, Daughter rises against her mother, Daughter-in-law against her mother-in-law; A man's enemies are the men of his own household.</td>
        <td class="arabic">لأَنَّ الاِبْنَ مُسْتَهِينٌ بِالأَبِ وَالْبِنْتَ قَائِمَةٌ عَلَى أُمِّهَا وَالْكَنَّةَ عَلَى حَمَاتِهَا وَأَعْدَاءُ الإِنْسَانِ أَهْلُ بَيْتِهِ.</td>
    </tr>
    <tr id="table_13_row_10" class="text">
        <td class="english">Therefore I will look to the Lord; I will wait for the God of my salvation; My God will hear me.</td>
        <td class="arabic">وَلَكِنَّنِي أُرَاقِبُ الرَّبَّ أَصْبِرُ لإِلَهِ خَلاَصِي. يَسْمَعُنِي إِلَهِي.</td>
    </tr>
    <tr id="table_13_row_11" class="text">
        <td class="english">Do not rejoice over me, my enemy; When I fall, I will arise; When I sit in darkness, The Lord will be a light to me.</td>
        <td class="arabic">لاَ تَشْمَتِي بِي يَا عَدُوَّتِي. إِذَا سَقَطْتُ أَقُومُ. إِذَا جَلَسْتُ فِي الظُّلْمَةِ فَالرَّبُّ نُورٌ لِي.</td>
    </tr>
    <tr id="table_13_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>


<table id="table_14" title="Homily">
    <caption id="caption_table_14" class="caption">Homily<br>(Abba John Chrysostom)
    <span class="arabic-caption">العظة<br>(انبا يوحنا فم الذهب)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">A homily of our holy father Abba John Chrysostom. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭ̀ⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ: ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لابينا القديس انبا يوحنا فم الذهب بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">Beloved brethren, what can we say about the transgression of Judas who has delivered his Master.</td>
        <td class="arabic">ماذا نقول أيها الاخوة الاحباء عن معصية يهوذا الذى أسلم سيده.</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">It was said that one of the twelve, who is Judas Iscariot went to the chief priests and said to them;</td>
        <td class="arabic">قيل أن واحداً من الاثنى عشر. الذى هو يهوذا الاسخريوطى. مضى إلى رؤساء الكهنة وقال لهم.</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">“How much do you want to pay and I will deliver Him to you?</td>
        <td class="arabic">ماذا تريدون أن تعطونى وانا اسلمه اليكم</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">They bargained to pay him thirty pieces of silver.” What great foolishness;</td>
        <td class="arabic">فساوموه على ثلاثين من الفضة يا لهذا الجهل العظيم.</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">rather, what a great infatuation with silver, which is the source of all evil.</td>
        <td class="arabic">وبالاحرى يا لهذه المحبة العظيمة للفضة التى هى أصل لكل الشرور.</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">For when he desired it, he sold his good teacher and righteous master,</td>
        <td class="arabic">لان هذا لما اشتهاه باع معلمه الصالح وسيده البار.</td>
    </tr>
    <tr id="table_14_row_10" class="text">
        <td class="english">thus, bringing destruction upon himself.</td>
        <td class="arabic">فطوح بنفسه فى هوة الهلاك.</td>
    </tr>
    <tr id="table_14_row_11" class="text">
        <td class="english">How awful is the love of money. It invited every evil and is worse than Satan’s manipulation.</td>
        <td class="arabic">لانه كم هو ردئ حب المال. فهو مجلبة لكل شر وأردأ من حيل الشياطين.</td>
    </tr>
    <tr id="table_14_row_12" class="text">
        <td class="english">If the love of money possesses someone, it renders him captivated by it.</td>
        <td class="arabic">فالنفوس التى يتسلط عليها يجعل أصحابها يجنون ولعاً بها.</td>
    </tr>
    <tr id="table_14_row_13" class="text">
        <td class="english">They can no longer fathom themselves nor others.</td>
        <td class="arabic">فلا يعرفون ذواتهم بل ويتعامون عن معرفة الاخرين.</td>
    </tr>
    <tr id="table_14_row_14" class="text">
        <td class="english">They will reject nature’s laws and become anxious at heart.</td>
        <td class="arabic">ويرفضون ناموس الطبيعة. ويكون قلبهم فزعاً حائراً.</td>
    </tr>
    <tr id="table_14_row_15" class="text">
        <td class="english">See how many blessings the love of silver took away from Judas,</td>
        <td class="arabic">انظروا كم من النعم نزعتها محبة الفضة من نفس يهوذا.</td>
    </tr>
    <tr id="table_14_row_16" class="text">
        <td class="english">yet Christ was talking to them openly about the comforts of the kingdom of heaven and the horrors of hell.</td>
        <td class="arabic">لان سيدنا يسوع المسيح كان يخاطبهم علانية. عن هول الجحيم ونعيم ملكوت السموات.</td>
    </tr>
    <tr id="table_14_row_17" class="text">
        <td class="english">Everyone of them knew how terrible it would be, the sufferings of sinners would be.</td>
        <td class="arabic">ويعرف كل واحد مقدار عذاب الخطاة.</td>
    </tr>
    <tr id="table_14_row_18" class="text">
        <td class="english">Christ also honored all those who strived for their soul’s salvation.</td>
        <td class="arabic">ويكرم كل المجاهدين لخلاص نفوسهم.</td>
    </tr>
    <tr id="table_14_row_20" class="intro">
        <td class="english">We conclude the homily of our holy father Abba John Chrysostom, who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭ̀ⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا يوحنا فم الذهب الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
    </tr>
</table>

<table id="table_15" title="Tenouosht">
    <caption id="caption_table_15" class="caption"><span class="coptic-caption">Ⲧⲉⲛⲟⲩⲱ̀ϣⲧ</span></caption>
    <tr id="table_15_row_1" class="text">
        <td class="english">We worship You O Christ with Your good Father and the Holy Spirit for You were crucified and saved us.</td>
        <td class="coptic">Ⲧⲉⲛⲟⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡ̅ⲭ̅ⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲁⲩⲁϣⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
        <td class="arabic">نسجد لكَ أيها المسيح مع أبيك الصالح والروح القدس لأنكَ صلبت وخلصتنا</td>
    </tr>
</table>

<table id="table_16" title="Pauline Epistle">
    <caption id="caption_table_16" class="caption">Pauline Epistle<br>(1 Corinthians 1:23-2:5)
    <span class="arabic-caption">البولس<br>(كورنثوس الأولى 1: 23 - 2: 5)</span></caption>
    <tr id="table_16_row_1" class="intro">
        <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the first epistle of our teacher Paul to the Corinthians. May his blessing be with us. Amen.</td>
        <td class="arabic">من رسالة معلمنا بولس الرسول الاولى إلى كورنثوس الأولى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">But we preach Christ crucified, to the Jews a stumbling block and to the Greeks foolishness,</td>
        <td class="arabic">وَلَكِنَّنَا نَحْنُ نَكْرِزُ بِالْمَسِيحِ مَصْلُوباً: لِلْيَهُودِ عَثْرَةً وَلِلْيُونَانِيِّينَ جَهَالَةً!</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">but to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God.</td>
        <td class="arabic">وَأَمَّا لِلْمَدْعُوِّينَ: يَهُوداً وَيُونَانِيِّينَ فَبِالْمَسِيحِ قُوَّةِ اللهِ وَحِكْمَةِ اللهِ.</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">Because the foolishness of God is wiser than men, and the weakness of God is stronger than men.</td>
        <td class="arabic">لأَنَّ جَهَالَةَ اللهِ أَحْكَمُ مِنَ النَّاسِ! وَضَعْفَ اللهِ أَقْوَى مِنَ النَّاسِ!</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">For you see your calling, brethren, that not many wise according to the flesh, not many mighty, not many noble, are called.</td>
        <td class="arabic">فَانْظُرُوا دَعْوَتَكُمْ أَيُّهَا الإِخْوَةُ أَنْ لَيْسَ كَثِيرُونَ حُكَمَاءُ حَسَبَ الْجَسَدِ. لَيْسَ كَثِيرُونَ أَقْوِيَاءُ. لَيْسَ كَثِيرُونَ شُرَفَاءُ.</td>
    </tr>
    <tr id="table_16_row_8" class="text">
        <td class="english">But God has chosen the foolish things of the world to put to shame the wise, and God has chosen the weak things of the world to put to shame the things which are mighty;</td>
        <td class="arabic">بَلِ اخْتَارَ اللهُ جُهَّالَ الْعَالَمِ لِيُخْزِيَ الْحُكَمَاءَ وَاخْتَارَ اللهُ ضُعَفَاءَ الْعَالَمِ لِيُخْزِيَ الأَقْوِيَاءَ</td>
    </tr>
    <tr id="table_16_row_9" class="text">
        <td class="english">and the base things of the world and the things which are despised God has chosen, and the things which are not, to bring to nothing the things that are,</td>
        <td class="arabic">وَاخْتَارَ اللهُ أَدْنِيَاءَ الْعَالَمِ وَالْمُزْدَرَى وَغَيْرَ الْمَوْجُودِ لِيُبْطِلَ الْمَوْجُودَ</td>
    </tr>
    <tr id="table_16_row_10" class="text">
        <td class="english">that no flesh should glory in His presence.</td>
        <td class="arabic">لِكَيْ لاَ يَفْتَخِرَ كُلُّ ذِي جَسَدٍ أَمَامَهُ.</td>
    </tr>
    <tr id="table_16_row_11" class="text">
        <td class="english">But of Him you are in Christ Jesus, who became for us wisdom from God--and righteousness and sanctification and redemption--</td>
        <td class="arabic">وَمِنْهُ أَنْتُمْ بِالْمَسِيحِ يَسُوعَ الَّذِي صَارَ لَنَا حِكْمَةً مِنَ اللهِ وَبِرّاً وَقَدَاسَةً وَفِدَاءً.</td>
    </tr>
    <tr id="table_16_row_12" class="text">
        <td class="english">that, as it is written, "He who glories, let him glory in the Lord."</td>
        <td class="arabic">حَتَّى كَمَا هُوَ مَكْتُوبٌ: «مَنِ افْتَخَرَ فَلْيَفْتَخِرْ بِالرَّبِّ».</td>
    </tr>
    <tr id="table_16_row_13" class="text">
        <td class="english">And I, brethren, when I came to you, did not come with excellence of speech or of wisdom declaring to you the testimony of God.</td>
        <td class="arabic">وَأَنَا لَمَّا أَتَيْتُ إِلَيْكُمْ أَيُّهَا الإِخْوَةُ أَتَيْتُ لَيْسَ بِسُمُوِّ الْكَلاَمِ أَوِ الْحِكْمَةِ مُنَادِياً لَكُمْ بِشَهَادَةِ اللهِ</td>
    </tr>
    <tr id="table_16_row_14" class="text">
        <td class="english">For I determined not to know anything among you except Jesus Christ and Him crucified.</td>
        <td class="arabic">لأَنِّي لَمْ أَعْزِمْ أَنْ أَعْرِفَ شَيْئاً بَيْنَكُمْ إِلاَّ يَسُوعَ الْمَسِيحَ وَإِيَّاهُ مَصْلُوباً.</td>
    </tr>
    <tr id="table_16_row_15" class="text">
        <td class="english">I was with you in weakness, in fear, and in much trembling.</td>
        <td class="arabic">وَأَنَا كُنْتُ عِنْدَكُمْ فِي ضُعْفٍ وَخَوْفٍ وَرِعْدَةٍ كَثِيرَةٍ.</td>
    </tr>
    <tr id="table_16_row_16" class="text">
        <td class="english">And my speech and my preaching were not with persuasive words of human wisdom, but in demonstration of the Spirit and of power,</td>
        <td class="arabic">وَكَلاَمِي وَكِرَازَتِي لَمْ يَكُونَا بِكَلاَمِ الْحِكْمَةِ الإِنْسَانِيَّةِ الْمُقْنِعِ بَلْ بِبُرْهَانِ الرُّوحِ وَالْقُوَّةِ</td>
    </tr>
    <tr id="table_16_row_17" class="text">
        <td class="english">that your faith should not be in the wisdom of men but in the power of God.</td>
        <td class="arabic">لِكَيْ لاَ يَكُونَ إِيمَانُكُمْ بِحِكْمَةِ النَّاسِ بَلْ بِقُوَّةِ اللهِ.</td>
    </tr>
    <tr id="table_16_row_19" class="intro">
        <td class="english">The grace of God the Father be with you all. Amen.</td>
        <td class="arabic">نعمة الله الآب تحل مع جميعكم آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_19" title="Coptic Psalm">
        <caption class="caption" id="caption_table_19">Coptic Psalm<br>(27:12, 35:11-12, 16)
        <span class="arabic-caption">المزمور قبطي<br>(27: 12 و 35: 11 - 12 و 16)</span></caption>

        <tr id="table_19_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_19_row_1" class="text">
            <td class="english">For false witnesses have risen against me,</td>
            <td class="coptic">Ϫⲉ ⲁⲩⲧⲱⲟⲩⲛⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲓ ⲛ̀ϫⲉ ϩⲁⲛⲙⲉⲧⲙⲉⲑⲣⲉⲩ ⲛ̀ⲣⲉϥϭⲓ ⲛ̀ϫⲟⲛⲥ:</td>
            <td class="arabic">لأنه قام على شهود زور:</td>
        </tr>
        <tr id="table_19_row_2" class="text">
            <td class="english">And such as breathe out violence.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲁ̀ϯⲙⲉⲧϭⲓ ⲛ̀ϫⲟⲛⲥ ϫⲉ ⲙⲉⲑⲛⲟⲩϫ ⲉ̀ⲣⲟⲥ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲥ:</td>
            <td class="arabic">وكذب الظلم لذاته.</td>
        </tr>
        <tr id="table_19_row_3" class="text">
            <td class="english">Fierce witnesses rise up; They ask me things that I do not know.</td>
            <td class="coptic">Ⲁⲩⲧⲱⲟⲩⲛⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ ⲛ̀ϫⲉ ϩⲁⲛⲙⲉⲑⲣⲉⲩ ⲛ̀ⲟϫⲓ : ⲛⲁⲩϣⲓⲛⲓ ⲙ̀ⲙⲟⲓ ⲉ̀ⲛⲏⲉ̀ⲧⲉ ⲛ̀ϯⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲟⲩ ⲁⲛ:</td>
            <td class="arabic">قام على شهود جور وعما لا أعلم سألونى.</td>
        </tr>
        <tr id="table_19_row_4" class="text">
            <td class="english">They reward me evil for good; They gnashed at me with their teeth.</td>
            <td class="coptic">Ⲁⲩϯⲛⲏⲓ ⲛ̀ϩⲁⲛ ⲡⲉⲧϩⲱⲟⲩ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ϩⲁⲛ ⲡⲉⲑⲛⲁⲛⲉⲩ : ⲉ̀ⲁⲩϧ̀ⲣⲁϫⲣⲉϫ ⲛ̀ⲛⲟⲩⲛⲁϫϩⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ</td>
            <td class="arabic">جازونى بدل الخير شراً صارين على بأسنانهم</td>
        </tr>
        <tr id="table_19_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_21" title="Coptic Gospel">
        <caption class="caption" id="caption_table_21">Coptic Gospels
        <span class="arabic-caption">الإناجيل قبطي</span></caption>
        <tr id="table_21_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_21_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_21_row_2" class="text">
            <td class="coptic">Ⲉ̀ⲧⲁ ⲧⲟⲟⲩⲓ̀ ⲇⲉ ϣⲱⲡⲓ ⲁⲩⲉⲣⲟⲩⲥⲟϭⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ϧⲁ Ⲓ̅ⲏ̅ⲥ : ϩⲱⲥⲧⲉ ⲛ̀ⲥⲉ ϧⲟⲑⲃⲉϥ : Ⲟⲩⲟϩ ⲉ̀ⲧⲁⲩⲥⲟⲛϩϥ ⲁⲩⲟⲗϥ ⲟⲩⲟϩ ⲁⲩⲧⲏⲓϥ ⲙ̀Ⲡⲓⲗⲁⲧⲟⲥ ⲡⲓϩⲏⲅⲉⲙⲱⲛ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_21_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_21_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_21_row_5" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲥⲁⲧⲟⲧⲟⲩ ⲁⲩⲥⲟϭⲛⲓ ⲛⲟⲩⲥⲟϭⲛⲓ ⲛϣⲱⲣⲡ ⲛϫⲉ ⲛⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲡⲣⲉⲥⲃ⳪ⲧⲉⲣⲟⲥ ⲛⲉⲙ ⲛⲓⲥⲁϧ ⲛⲉⲙ ⲡⲓⲙⲁⲛ ϯϩⲁⲡ ⲧⲏⲣϥ : ⲉ̀ⲁⲩⲥⲱⲛϩ ⲛ̀Ⲓ̅ⲏ̅ⲥ ⲁⲩϭⲓⲧϥ ⲁⲩⲧⲏⲓϥ ⲉ̀Ⲡⲓⲗⲁⲧⲟⲥ <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_21_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_21_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_21_row_8" class="text">
            <td class="coptic">Ⲟ̀ⲩⲟϩ ⲉ̀ⲧⲁ ⲡⲓϩ̀ⲟⲟⲩ ϣⲱⲡⲓ ⲁⲩⲑⲱⲟⲩϯ ⲛ̀ϫⲉ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ : ⲛⲉⲙ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲥⲁϧ : ⲟⲩⲟϩ ⲁⲩⲉⲛϥ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲟⲩⲙⲁⲛ̀ϯϩⲁⲡ : Ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲓⲥϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡ̅ⲭ̅ⲥ ⲁ̀ϫⲟⲥ ⲛⲁⲛ ⲡⲉϫⲁϥϫⲉ ⲛⲱⲟⲩ ϫⲉ ⲁⲓϣⲁⲛϫⲟⲥ ⲛⲱⲧⲉⲛ ⲧⲉⲧⲉⲛⲛⲁⲛⲁϩϯ ⲁⲛ <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_21_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_21_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_21_row_11" class="text">
            <td class="coptic">Ⲁⲩ̀̀ⲓⲛⲓ ⲟⲩⲛ ⲛ̀ⲓⲏⲥⲟⲩⲥ ⲉ̀ⲃⲟⲗ ϩⲁ Ⲕⲁⲓⲁ̀ⲫⲁ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲡ̀ⲣⲉⲧⲱⲣⲓⲟⲛ : ⲛⲉ ϣⲱⲣⲡ ⲇⲉ ⲡⲉ : ⲟⲩⲟϩ ⲛ̀ⲑⲱⲟⲩ ⲙ̀ⲡⲟⲩⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲡ̀ⲣⲉⲧⲱⲣⲓⲟⲛ : ϩⲓⲛⲁ ϫⲉ ⲛ̀ⲛⲟⲩⲥⲱϥ ϣⲁⲧⲟⲩⲟⲩⲱⲙ ⲙ̀ⲡⲓⲡⲁⲥⲭⲁ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_21_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
    <table id="table_22" title="Psalm">
        <caption id="caption_table_22" class="caption">Psalm<br>(27:12, 35:11-12, 16)
        <span class="arabic-caption">المزمور<br>(27: 12 و 35: 11 - 12 و 16)</span></caption>
        <tr id="table_22_row_1" class="intro">
            <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
            <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_22_row_4" class="text">
            <td class="english">For false witnesses have risen against me, And such as breathe out violence.</td>
            <td class="arabic">لأنه قام على شهود زور: وكذب الظلم لذاته.</td>
        </tr>
        <tr id="table_22_row_5" class="text">
            <td class="english">Fierce witnesses rise up; They ask me things that I do not know.</td>
            <td class="arabic">قام على شهود جور وعما لا أعلم سألوني.</td>
        </tr>
        <tr id="table_22_row_6" class="text">
            <td class="english">They reward me evil for good;</td>
            <td class="arabic">جازونى بدل الخير شراً</td>
        </tr>
        <tr id="table_22_row_7" class="text">
            <td class="english">They gnashed at me with their teeth.</td>
            <td class="arabic">صارين على بأسنانهم.</td>
        </tr>
        <tr id="table_22_row_9" class="intro">
            <td class="english">Alleluia.</td>
            <td class="arabic">هلليلويا.</td>
        </tr>
    </table>

    <table id="table_23" title="Gospel">
        <caption id="caption_table_23" class="caption">Gospel<br>(Matthew 27:1-14)
        <span class="arabic-caption">الانجيل<br>(متى 27: 1 - 14)</span></caption>
        <tr id="table_23_row_1" class="intro">
            <td class="english">May God have mercy and compassion upon us and make us worthy to hear Your Holy Gospel. A chapter according to St. Matthew the evangelist. May his blessings be with us, Amen.</td>
            <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
        </tr>
        <tr id="table_23_row_4" class="text">
            <td class="english">When morning came, all the chief priests and elders of the people plotted against Jesus to put Him to death.</td>
            <td class="arabic">وَلَمَّا كَانَ الصَّبَاحُ تَشَاوَرَ جَمِيعُ رُؤَسَاءِ الْكَهَنَةِ وَشُيُوخُ الشَّعْبِ عَلَى يَسُوعَ حَتَّى يَقْتُلُوهُ</td>
        </tr>
        <tr id="table_23_row_5" class="text">
            <td class="english">And when they had bound Him, they led Him away and delivered Him to Pontius Pilate the governor.</td>
            <td class="arabic">فَأَوْثَقُوهُ وَمَضَوْا بِهِ وَدَفَعُوهُ إِلَى بِيلاَطُسَ الْبُنْطِيِّ الْوَالِي.</td>
        </tr>
        <tr id="table_23_row_6" class="text">
            <td class="english">Then Judas, His betrayer, seeing that He had been condemned, was remorseful and brought back the thirty pieces of silver to the chief priests and elders,</td>
            <td class="arabic">حِينَئِذٍ لَمَّا رَأَى يَهُوذَا الَّذِي أَسْلَمَهُ أَنَّهُ قَدْ دِينَ نَدِمَ وَرَدَّ الثَّلاَثِينَ مِنَ الْفِضَّةِ إِلَى رُؤَسَاءِ الْكَهَنَةِ وَالشُّيُوخِ</td>
        </tr>
        <tr id="table_23_row_7" class="text">
            <td class="english">saying, "I have sinned by betraying innocent blood." And they said, "What is that to us? You see to it!"</td>
            <td class="arabic">قَائِلاً: «قَدْ أَخْطَأْتُ إِذْ سَلَّمْتُ دَماً بَرِيئاً». فَقَالُوا: «مَاذَا عَلَيْنَا؟ أَنْتَ أَبْصِرْ!»</td>
        </tr>
        <tr id="table_23_row_8" class="text">
            <td class="english">Then he threw down the pieces of silver in the temple and departed, and went and hanged himself.</td>
            <td class="arabic">فَطَرَحَ الْفِضَّةَ فِي الْهَيْكَلِ وَانْصَرَفَ ثُمَّ مَضَى وَخَنَقَ نَفْسَهُ.</td>
        </tr>
        <tr id="table_23_row_9" class="text">
            <td class="english">But the chief priests took the silver pieces and said, "It is not lawful to put them into the treasury, because they are the price of blood."</td>
            <td class="arabic">فَأَخَذَ رُؤَسَاءُ الْكَهَنَةِ الْفِضَّةَ وَقَالُوا: «لاَ يَحِلُّ أَنْ نُلْقِيَهَا فِي الْخِزَانَةِ لأَنَّهَا ثَمَنُ دَمٍ».</td>
        </tr>
        <tr id="table_23_row_10" class="text">
            <td class="english">And they consulted together and bought with them the potter's field, to bury strangers in.</td>
            <td class="arabic">فَتَشَاوَرُوا وَاشْتَرَوْا بِهَا حَقْلَ الْفَخَّارِيِّ مَقْبَرَةً لِلْغُرَبَاءِ.</td>
        </tr>
        <tr id="table_23_row_11" class="text">
            <td class="english">Therefore that field has been called the Field of Blood to this day.</td>
            <td class="arabic">لِهَذَا سُمِّيَ ذَلِكَ الْحَقْلُ «حَقْلَ الدَّمِ» إِلَى هَذَا الْيَوْمِ.</td>
        </tr>
        <tr id="table_23_row_12" class="text">
            <td class="english">Then was fulfilled what was spoken by Jeremiah the prophet, saying, "And they took the thirty pieces of silver, the value of Him who was priced, whom they of the children of Israel priced,</td>
            <td class="arabic">حِينَئِذٍ تَمَّ مَا قِيلَ بِإِرْمِيَا النَّبِيِّ: «وَأَخَذُوا الثَّلاَثِينَ مِنَ الْفِضَّةِ ثَمَنَ الْمُثَمَّنِ الَّذِي ثَمَّنُوهُ مِنْ بَنِي إِسْرَائِيلَ</td>
        </tr>
        <tr id="table_23_row_13" class="text">
            <td class="english">and gave them for the potter's field, as the Lord directed me."</td>
            <td class="arabic">وَأَعْطَوْهَا عَنْ حَقْلِ الْفَخَّارِيِّ كَمَا أَمَرَنِي الرَّبُّ».</td>
        </tr>
        <tr id="table_23_row_14" class="text">
            <td class="english">Now Jesus stood before the governor. And the governor asked Him, saying, "Are You the King of the Jews?" So Jesus said to him, "It is as you say."</td>
            <td class="arabic">فَوَقَفَ يَسُوعُ أَمَامَ الْوَالِي. فَسَأَلَهُ الْوَالِي: «أَأَنْتَ مَلِكُ الْيَهُودِ؟» فَقَالَ لَهُ يَسُوعُ: «أَنْتَ تَقُولُ».</td>
        </tr>
        <tr id="table_23_row_15" class="text">
            <td class="english">And while He was being accused by the chief priests and elders, He answered nothing.</td>
            <td class="arabic">وَبَيْنَمَا كَانَ رُؤَسَاءُ الْكَهَنَةِ وَالشُّيُوخُ يَشْتَكُونَ عَلَيْهِ لَمْ يُجِبْ بِشَيْءٍ.</td>
        </tr>
        <tr id="table_23_row_16" class="text">
            <td class="english">Then Pilate said to Him, "Do You not hear how many things they testify against You?"</td>
            <td class="arabic">فَقَالَ لَهُ بِيلاَطُسُ: «أَمَا تَسْمَعُ كَمْ يَشْهَدُونَ عَلَيْكَ؟»</td>
        </tr>
        <tr id="table_23_row_17" class="text">
            <td class="english">But He answered him not one word, so that the governor marveled greatly.<br>Bow down before the Holy Gospel.</td>
            <td class="arabic">فَلَمْ يُجِبْهُ وَلاَ عَنْ كَلِمَةٍ وَاحِدَةٍ حَتَّى تَعَجَّبَ الْوَالِي جِدّاً.<br>أسجدوا للإنجيل المقدس.</td>
        </tr>
        <tr id="table_23_row_19" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="arabic">والمجد لله دائماً.</td>
        </tr>
    </table>

    <table id="table_24" title="Psalm">
        <caption id="caption_table_24" class="caption">Psalm<br>(Psalm 27:12, 35:11-12, 16)
        <span class="arabic-caption">المزمور<br>(المزمور 27: 12 و 35: 11 - 12 و 16)</span></caption>
        <tr id="table_24_row_1" class="intro">
            <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
            <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_22_row_4" class="text">
            <td class="english">For false witnesses have risen against me, And such as breathe out violence.</td>
            <td class="arabic">لأنه قام على شهود زور: وكذب الظلم لذاته.</td>
        </tr>
        <tr id="table_22_row_5" class="text">
            <td class="english">Fierce witnesses rise up; They ask me things that I do not know.</td>
            <td class="arabic">قام على شهود جور وعما لا أعلم سألوني.</td>
        </tr>
        <tr id="table_22_row_6" class="text">
            <td class="english">They reward me evil for good;</td>
            <td class="arabic">جازونى بدل الخير شراً</td>
        </tr>
        <tr id="table_22_row_7" class="text">
            <td class="english">They gnashed at me with their teeth.</td>
            <td class="arabic">صارين على بأسنانهم.</td>
        </tr>
        <tr id="table_22_row_9" class="intro">
            <td class="english">Alleluia.</td>
            <td class="arabic">هلليلويا.</td>
        </tr>
    </table>

    <table id="table_25" title="Gospel">
        <caption id="caption_table_25" class="caption">Gospel<br>(Mark 15:1-5)
        <span class="arabic-caption">الانجيل<br>(مرقس 15: 1-5)</span></caption>
        <tr id="table_25_row_1" class="intro">
            <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Mark the evangelist. May his blessings be with us. Amen.</td>
            <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين.</td>
        </tr>
        <tr id="table_25_row_4" class="text">
            <td class="english">Immediately, in the morning, the chief priests held a consultation with the elders and scribes and the whole council; and they bound Jesus, led Him away, and delivered Him to Pilate.</td>
            <td class="arabic">وَلِلْوَقْتِ فِي الصَّبَاحِ تَشَاوَرَ رُؤَسَاءُ الْكَهَنَةِ وَاشُّيُوخُ وَالْكَتَبَةُ وَالْمَجْمَعُ كُلُّهُ فَأَوْثَقُوا يَسُوعَ وَمَضَوْا بِهِ وَأَسْلَمُوهُ إِلَى بِيلاَطُسَ.</td>
        </tr>
        <tr id="table_25_row_5" class="text">
            <td class="english">Then Pilate asked Him, "Are You the King of the Jews?" He answered and said to him, "It is as you say."</td>
            <td class="arabic">فَسَأَلَهُ بِيلاَطُسُ: «أَأَنْتَ مَلِكُ الْيَهُودِ؟» فَأَجَابَ: «أَنْتَ تَقُولُ».</td>
        </tr>
        <tr id="table_25_row_6" class="text">
            <td class="english">And the chief priests accused Him of many things, but He answered nothing.</td>
            <td class="arabic">وَكَانَ رُؤَسَاءُ الْكَهَنَةِ يَشْتَكُونَ عَلَيْهِ كَثِيراً.</td>
        </tr>
        <tr id="table_25_row_7" class="text">
            <td class="english">Then Pilate asked Him again, saying, "Do You answer nothing? See how many things they testify against You!"</td>
            <td class="arabic">فَسَأَلَهُ بِيلاَطُسُ أَيْضاً: «أَمَا تُجِيبُ بِشَيْءٍ؟ انْظُرْ كَمْ يَشْهَدُونَ عَلَيْكَ!»</td>
        </tr>
        <tr id="table_25_row_8" class="text">
            <td class="english">But Jesus still answered nothing, so that Pilate marveled.<br>Bow down before the Holy Gospel.</td>
            <td class="arabic">فَلَمْ يُجِبْ يَسُوعُ أَيْضاً بِشَيْءٍ حَتَّى تَعَجَّبَ بِيلاَطُسُ.<br>أسجدوا للإنجيل المقدس.</td>
        </tr>
        <tr id="table_25_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="arabic">والمجد لله دائماً.</td>
        </tr>
    </table>

    <table id="table_26" title="Gospel">
        <caption id="caption_table_26" class="caption">Gospel<br>(Luke 22:66-23:12)
        <span class="arabic-caption">الانجيل<br>(لوقا 22: 66 - 23: 12)</span></caption>
        <tr id="table_26_row_1" class="intro">
            <td class="english">A chapter from the Gospel according to our teacher St. Luke the evangelist. May his blessings be with us. Amen.</td>
            <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين</td>
        </tr>
        <tr id="table_26_row_4" class="text">
            <td class="english">As soon as it was day, the elders of the people, both chief priests and scribes, came together and led Him into their council, saying,</td>
            <td class="arabic">وَلَمَّا كَانَ النَّهَارُ اجْتَمَعَتْ مَشْيَخَةُ الشَّعْبِ: رُؤَسَاءُ الْكَهَنَةِ وَالْكَتَبَةُ وَأَصْعَدُوهُ إِلَى مَجْمَعِهِمْ</td>
        </tr>
        <tr id="table_26_row_5" class="text">
            <td class="english">"If You are the Christ, tell us." But He said to them, "If I tell you, you will by no means believe.</td>
            <td class="arabic">قَائِلِينَ: «إِنْ كُنْتَ أَنْتَ الْمسِيحَ فَقُلْ لَنَا». فَقَالَ لَهُمْ: «إِنْ قُلْتُ لَكُمْ لاَ تُصَدِّقُونَ</td>
        </tr>
        <tr id="table_26_row_6" class="text">
            <td class="english">And if I also ask you, you will by no means answer Me or let Me go.</td>
            <td class="arabic">وَإِنْ سَأَلْتُ لاَ تُجِيبُونَنِي وَلاَ تُطْلِقُونَنِي.</td>
        </tr>
        <tr id="table_26_row_7" class="text">
            <td class="english">Hereafter the Son of Man will sit on the right hand of the power of God."</td>
            <td class="arabic">مُنْذُ الآنَ يَكُونُ ابْنُ الإِنْسَانِ جَالِساً عَنْ يَمِينِ قُوَّةِ اللهِ».</td>
        </tr>
        <tr id="table_26_row_8" class="text">
            <td class="english">Then they all said, "Are You then the Son of God?" So He said to them, "You rightly say that I am."</td>
            <td class="arabic">فَقَالَ الْجَمِيعُ: «أَفَأَنْتَ ابْنُ اللهِ؟» فَقَالَ لَهُمْ: «أَنْتُمْ تَقُولُونَ إِنِّي أَنَا هُوَ».</td>
        </tr>
        <tr id="table_26_row_9" class="text">
            <td class="english">And they said, "What further testimony do we need? For we have heard it ourselves from His own mouth."</td>
            <td class="arabic">فَقَالُوا: «مَا حَاجَتُنَا بَعْدُ إِلَى شَهَادَةٍ؟ لأَنَّنَا نَحْنُ سَمِعْنَا مِنْ فَمِهِ».</td>
        </tr>
        <tr id="table_26_row_10" class="text">
            <td class="english">Then the whole multitude of them arose and led Him to Pilate.</td>
            <td class="arabic">فَقَامَ كُلُّ جُمْهُورِهِمْ وَجَاءُوا بِهِ إِلَى بِيلاَطُسَ</td>
        </tr>
        <tr id="table_26_row_11" class="text">
            <td class="english">And they began to accuse Him, saying, "We found this fellow perverting the nation, and forbidding to pay taxes to Caesar, saying that He Himself is Christ, a King."</td>
            <td class="arabic">وَابْتَدَأُوا يَشْتَكُونَ عَلَيْهِ قَائِلِينَ: «إِنَّنَا وَجَدْنَا هَذَا يُفْسِدُ الأُمَّةَ وَيَمْنَعُ أَنْ تُعْطَى جِزْيَةٌ لِقَيْصَرَ قَائِلاً: إِنَّهُ هُوَ مَسِيحٌ مَلِكٌ».</td>
        </tr>
        <tr id="table_26_row_12" class="text">
            <td class="english">Then Pilate asked Him, saying, "Are You the King of the Jews?" He answered him and said, "It is as you say."</td>
            <td class="arabic">فَسَأَلَهُ بِيلاَطُسُ: «أَنْتَ مَلِكُ الْيَهُودِ؟» فَأَجَابَهُ: «أَنْتَ تَقُولُ».</td>
        </tr>
        <tr id="table_26_row_13" class="text">
            <td class="english">So Pilate said to the chief priests and the crowd, "I find no fault in this Man."</td>
            <td class="arabic">فَقَالَ بِيلاَطُسُ لِرُؤَسَاءِ الْكَهَنَةِ وَالْجُمُوعِ: «إِنِّي لاَ أَجِدُ عِلَّةً فِي هَذَا الإِنْسَانِ».</td>
        </tr>
        <tr id="table_26_row_14" class="text">
            <td class="english">But they were the more fierce, saying, "He stirs up the people, teaching throughout all Judea, beginning from Galilee to this place."</td>
            <td class="arabic">فَكَانُوا يُشَدِّدُونَ قَائِلِينَ: «إِنَّهُ يُهَيِّجُ الشَّعْبَ وَهُوَ يُعَلِّمُ فِي كُلِّ الْيَهُودِيَّةِ مُبْتَدِئاً مِنَ الْجَلِيلِ إِلَى هُنَا».</td>
        </tr>
        <tr id="table_26_row_15" class="text">
            <td class="english">When Pilate heard of Galilee, he asked if the Man were a Galilean.</td>
            <td class="arabic">فَلَمَّا سَمِعَ بِيلاَطُسُ ذِكْرَ الْجَلِيلِ سَأَلَ: «هَلِ الرَّجُلُ جَلِيلِيٌّ؟»</td>
        </tr>
        <tr id="table_26_row_16" class="text">
            <td class="english">And as soon as he knew that He belonged to Herod's jurisdiction, he sent Him to Herod, who was also in Jerusalem at that time.</td>
            <td class="arabic">وَحِينَ عَلِمَ أَنَّهُ مِنْ سَلْطَنَةِ هِيرُودُسَ أَرْسَلَهُ إِلَى هِيرُودُسَ إِذْ كَانَ هُوَ أَيْضاً تِلْكَ الأَيَّامَ فِي أُورُشَلِيمَ.</td>
        </tr>
        <tr id="table_26_row_17" class="text">
            <td class="english">Now when Herod saw Jesus, he was exceedingly glad; for he had desired for a long time to see Him, because he had heard many things about Him, and he hoped to see some miracle done by Him.</td>
            <td class="arabic">وَأَمَّا هِيرُودُسُ فَلَمَّا رَأَى يَسُوعَ فَرِحَ جِدّاً لأَنَّهُ كَانَ يُرِيدُ مِنْ زَمَانٍ طَوِيلٍ أَنْ يَرَاهُ لِسَمَاعِهِ عَنْهُ أَشْيَاءَ كَثِيرَةً وَتَرَجَّى أَنْ يَرَاهُ يَصْنَعُ آيَةً.</td>
        </tr>
        <tr id="table_26_row_18" class="text">
            <td class="english">Then he questioned Him with many words, but He answered him nothing.</td>
            <td class="arabic">وَسَأَلَهُ بِكَلاَمٍ كَثِيرٍ فَلَمْ يُجِبْهُ بِشَيْءٍ.</td>
        </tr>
        <tr id="table_26_row_19" class="text">
            <td class="english">And the chief priests and scribes stood and vehemently accused Him.</td>
            <td class="arabic">وَوَقَفَ رُؤَسَاءُ الْكَهَنَةِ وَالْكَتَبَةُ يَشْتَكُونَ عَلَيْهِ بِاشْتِدَادٍ</td>
        </tr>
        <tr id="table_26_row_20" class="text">
            <td class="english">Then Herod, with his men of war, treated Him with contempt and mocked Him, arrayed Him in a gorgeous robe, and sent Him back to Pilate.</td>
            <td class="arabic">فَاحْتَقَرَهُ هِيرُودُسُ مَعَ عَسْكَرِهِ وَاسْتَهْزَأَ بِهِ وَأَلْبَسَهُ لِبَاساً لاَمِعاً وَرَدَّهُ إِلَى بِيلاَطُسَ.</td>
        </tr>
        <tr id="table_26_row_21" class="text">
            <td class="english">That very day Pilate and Herod became friends with each other, for previously they had been at enmity with each other.<br>Bow down before the Holy Gospel.</td>
            <td class="arabic">فَصَارَ بِيلاَطُسُ وَهِيرُودُسُ صَدِيقَيْنِ مَعَ بَعْضِهِمَا فِي ذَلِكَ الْيَوْمِ لأَنَّهُمَا كَانَا مِنْ قَبْلُ فِي عَدَاوَةٍ بَيْنَهُمَا.<br>أسجدوا للإنجيل المقدس.</td>
        </tr>
        <tr id="table_26_row_23" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="arabic">والمجد لله دائماً.</td>
        </tr>
    </table>

    <table id="table_27" title="Gospel">
        <caption id="caption_table_27" class="caption">Gospel<br>(John 18:28-40)
        <span class="arabic-caption">الانجيل<br>(يوحنا 18: 28 - 40)</span></caption>
        <tr id="table_27_row_1" class="intro">
            <td class="english">A chapter from the Gospel according to our teacher St. John the evangelist. May his blessings be with us. Amen.</td>
            <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
        </tr>
        <tr id="table_27_row_4" class="text">
            <td class="english">Then they led Jesus from Caiaphas to the Praetorium, and it was early morning. But they themselves did not go into the Praetorium, lest they should be defiled, but that they might eat the Passover.</td>
            <td class="arabic">ثُمَّ جَاءُوا بِيَسُوعَ مِنْ عِنْدِ قَيَافَا إِلَى دَارِ الْوِلاَيَةِ وَكَانَ صُبْحٌ. وَلَمْ يَدْخُلُوا هُمْ إِلَى دَارِ الْوِلاَيَةِ لِكَيْ لاَ يَتَنَجَّسُوا فَيَأْكُلُونَ الْفِصْحَ.</td>
        </tr>
        <tr id="table_27_row_5" class="text">
            <td class="english">Pilate then went out to them and said, "What accusation do you bring against this Man?"</td>
            <td class="arabic">فَخَرَجَ بِيلاَطُسُ إِلَيْهِمْ وَقَالَ: «أَيَّةَ شِكَايَةٍ تُقَدِّمُونَ عَلَى هَذَا الإِنْسَانِ؟»</td>
        </tr>
        <tr id="table_27_row_6" class="text">
            <td class="english">They answered and said to him, "If He were not an evildoer, we would not have delivered Him up to you."</td>
            <td class="arabic">أَجَابُوا: «لَوْ لَمْ يَكُنْ فَاعِلَ شَرٍّ لَمَا كُنَّا قَدْ سَلَّمْنَاهُ إِلَيْكَ!»</td>
        </tr>
        <tr id="table_27_row_7" class="text">
            <td class="english">Then Pilate said to them, "You take Him and judge Him according to your law." Therefore the Jews said to him, "It is not lawful for us to put anyone to death,"</td>
            <td class="arabic">فَقَالَ لَهُمْ بِيلاَطُسُ: «خُذُوهُ أَنْتُمْ وَاحْكُمُوا عَلَيْهِ حَسَبَ نَامُوسِكُمْ». فَقَالَ لَهُ الْيَهُودُ: «لاَ يَجُوزُ لَنَا أَنْ نَقْتُلَ أَحَداً».</td>
        </tr>
        <tr id="table_27_row_8" class="text">
            <td class="english">that the saying of Jesus might be fulfilled which He spoke, signifying by what death He would die.</td>
            <td class="arabic">لِيَتِمَّ قَوْلُ يَسُوعَ الَّذِي قَالَهُ مُشِيراً إِلَى أَيَّةِ مِيتَةٍ كَانَ مُزْمِعاً أَنْ يَمُوتَ.</td>
        </tr>
        <tr id="table_27_row_9" class="text">
            <td class="english">Then Pilate entered the Praetorium again, called Jesus, and said to Him, "Are You the King of the Jews?"</td>
            <td class="arabic">ثُمَّ دَخَلَ بِيلاَطُسُ أَيْضاً إِلَى دَارِ الْوِلاَيَةِ وَدَعَا يَسُوعَ وَقَالَ لَهُ: «أَأَنْتَ مَلِكُ الْيَهُودِ؟»</td>
        </tr>
        <tr id="table_27_row_10" class="text">
            <td class="english">Jesus answered him, "Are you speaking for yourself about this, or did others tell you this concerning Me?"</td>
            <td class="arabic">أَجَابَهُ يَسُوعُ: «أَمِنْ ذَاتِكَ تَقُولُ هَذَا أَمْ آخَرُونَ قَالُوا لَكَ عَنِّي؟»</td>
        </tr>
        <tr id="table_27_row_11" class="text">
            <td class="english">Pilate answered, "Am I a Jew? Your own nation and the chief priests have delivered You to me. What have You done?"</td>
            <td class="arabic">أَجَابَهُ بِيلاَطُسُ: «أَلَعَلِّي أَنَا يَهُودِيٌّ؟ أُمَّتُكَ وَرُؤَسَاءُ الْكَهَنَةِ أَسْلَمُوكَ إِلَيَّ. مَاذَا فَعَلْتَ؟»</td>
        </tr>
        <tr id="table_27_row_12" class="text">
            <td class="english">Jesus answered, "My kingdom is not of this world. If My kingdom were of this world, My servants would fight, so that I should not be delivered to the Jews; but now My kingdom is not from here."</td>
            <td class="arabic">أَجَابَ يَسُوعُ: «مَمْلَكَتِي لَيْسَتْ مِنْ هَذَا الْعَالَمِ. لَوْ كَانَتْ مَمْلَكَتِي مِنْ هَذَا الْعَالَمِ لَكَانَ خُدَّامِي يُجَاهِدُونَ لِكَيْ لاَ أُسَلَّمَ إِلَى الْيَهُودِ. وَلَكِنِ الآنَ لَيْسَتْ مَمْلَكَتِي مِنْ هُنَا».</td>
        </tr>
        <tr id="table_27_row_13" class="text">
            <td class="english">Pilate therefore said to Him, "Are You a king then?" Jesus answered, "You say rightly that I am a king. For this cause I was   born, and for this cause I have come into the world, that I should bear witness to the truth. Everyone who is of the truth hears My voice."</td>
            <td class="arabic">فَقَالَ لَهُ بِيلاَطُسُ: «أَفَأَنْتَ إِذاً مَلِكٌ؟» أَجَابَ يَسُوعُ: «أَنْتَ تَقُولُ إِنِّي مَلِكٌ. لِهَذَا قَدْ وُلِدْتُ أَنَا وَلِهَذَا قَدْ أَتَيْتُ إِلَى الْعَالَمِ لأَشْهَدَ لِلْحَقِّ. كُلُّ مَنْ هُوَ مِنَ الْحَقِّ يَسْمَعُ صَوْتِي».</td>
        </tr>
        <tr id="table_27_row_14" class="text">
            <td class="english">Pilate said to Him, "What is truth?" And when he had said this, he went out again to the Jews, and said to them, "I find no fault in Him at all.</td>
            <td class="arabic">قَالَ لَهُ بِيلاَطُسُ: «مَا هُوَ الْحَقُّ؟». وَلَمَّا قَالَ هَذَا خَرَجَ أَيْضاً إِلَى الْيَهُودِ وَقَالَ لَهُمْ: «أَنَا لَسْتُ أَجِدُ فِيهِ عِلَّةً وَاحِدَةً.</td>
        </tr>
        <tr id="table_27_row_15" class="text">
            <td class="english">"But you have a custom that I should release someone to you at the Passover. Do you therefore want me to release to you the King of the Jews?"</td>
            <td class="arabic">وَلَكُمْ عَادَةٌ أَنْ أُطْلِقَ لَكُمْ وَاحِداً فِي الْفِصْحِ. أَفَتُرِيدُونَ أَنْ أُطْلِقَ لَكُمْ مَلِكَ الْيَهُودِ؟».</td>
        </tr>
        <tr id="table_27_row_16" class="text">
            <td class="english">Then they all cried again, saying, "Not this Man, but Barabbas!" Now Barabbas was a robber.<br>Bow down before the Holy Gospel.</td>
            <td class="arabic">فَصَرَخُوا أَيْضاً جَمِيعُهُمْ: «لَيْسَ هَذَا بَلْ بَارَابَاسَ». وَكَانَ بَارَابَاسُ لِصّاً.<br>أسجدوا للإنجيل المقدس.</td>
        </tr>
        <tr id="table_27_row_18" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="arabic">والمجد لله دائماً.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}
<table id="table_29" title="Exposition">
    <caption id="caption_table_29" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_29_row_1" class="intro">
        <td class="english">The exposition of the FIRST Hour of the DAY of GOOD FRIDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من يوم الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_29_row_4" class="text">
        <td class="english">Early on Friday, the chief priests convened together and condemned the Savior so that they may deliver Him to Pilate to kill Him.</td>
        <td class="arabic">باكر يوم الجمعة، اجتمع رؤساء الكهنة معاً، وأصدروا الحكم على المخلص لكى يسلموه إلى بيلاطس ليقتله.</td>
    </tr>
    <tr id="table_29_row_5" class="text">
        <td class="english">When he saw this, Judas regretted what he did</td>
        <td class="arabic">أما يهوذا فلما نظر ما كان ندم على ما فعله.</td>
    </tr>
    <tr id="table_29_row_6" class="text">
        <td class="english">and returned the silver to the chief priests saying, “I have sinned in betraying innocent blood.”</td>
        <td class="arabic">وأعاد الفضة إلى رؤساء الكهنة قائلاً: انى القيت للحكم دماً زكياً.</td>
    </tr>
    <tr id="table_29_row_7" class="text">
        <td class="english">He went and hung himself adding to his transgressions.</td>
        <td class="arabic">فمضى وخنق نفسه وحده، وأكمل اثماً على اثم.</td>
    </tr>
    <tr id="table_29_row_8" class="text">
        <td class="english">The chief priests took the silver and bought with it a potter’s field to bury strangers in.  This was done so that it may be fulfilled what had been spoken by the prophet Jeremiah.</td>
        <td class="arabic">فأخذ رؤساء الكهنة الفضة وابتاعوا بها حقل الفخارى. لكى يكمل ما قيل من أجل الثلاثين من الفضة ثمن الزكى.</td>
    </tr>
    <tr id="table_29_row_9" class="text">
        <td class="english">Then they stood Jesus before Pilate, who asked Him, “Are you a king?”</td>
        <td class="arabic">وأقاموا يسوع أمام بيلاطس. فسأله: أأنت ملك؟</td>
    </tr>
    <tr id="table_29_row_10" class="text">
        <td class="english">Jesus replied, “You have said so.”</td>
        <td class="arabic">ـ أنت قلت أم آخر أخبرك؟. أنا أتيت يا بيلاطس لأجل الحق.</td>
    </tr>
    <tr id="table_29_row_11" class="text">
        <td class="english">They accused Him but He made no answer.</td>
        <td class="arabic">وأشتكى عليه كثيرون، فلم يجب المبارك بشئ.</td>
    </tr>
    <tr id="table_29_row_12" class="text">
        <td class="english">“Do you hear all these testimonies?” Pilate asked. He did not open His mouth to utter a word.</td>
        <td class="arabic">ـ أما تسمع هذه الشهادات الكثيرة؟ فلم يفتح فمه ليقول كلمة.</td>
    </tr>
    <tr id="table_29_row_13" class="text">
        <td class="english">The governor wondered greatly at His calmness and silence.</td>
        <td class="arabic">فتعجب الوالى جداً من أجل صمته وهدوئه.</td>
    </tr>
    <tr id="table_29_row_14" class="text">
        <td class="english">How can the Lamb who came to take away the sins of the world open His mouth?</td>
        <td class="arabic">كيف يفتح الحمل فاه، وهو الذى أتى ليحمل خطايا العالم؟</td>
    </tr>
    <tr id="table_29_row_15" class="text">
        <td class="english">This was to fulfill Isaiah’s prophecy, which said, “He never opened His mouth like a lamb that is led to the slaughterhouse.”</td>
        <td class="arabic">لقد شهد اشعياء من أجله قائلاً: ان مداينته قد ارتفعت مثل الخروف.</td>
    </tr>
    <tr id="table_29_row_16" class="text">
        <td class="english">Today the prophecy has been fulfilled in Jerusalem in the midst of Israel.</td>
        <td class="arabic">قد كملت اليوم هذه النبوة فى أورشليم، فى وسط اسرائيل.</td>
    </tr>
    <tr id="table_29_row_17" class="text">
        <td class="english">O Jerusalem, today your son will cry for you, O killer of prophets.</td>
        <td class="arabic">يبكى عليك بنوك اليوم يا أورشليم، يا قاتلة الأنبياء.</td>
    </tr>
    <tr id="table_29_row_18" class="text">
        <td class="english">He is not a prophet but God, and His blood redeems sins.</td>
        <td class="arabic">هذا ليس بنبى لكنه اله، ودمه يمحو الآثام.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};