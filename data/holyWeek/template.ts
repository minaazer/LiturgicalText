import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOS11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of PALM SUNDAY","يوم أحد الشعانين");
    const paschalPraiseHtml = paschalPraise1("4","5","6","ELEVENTH","الحادية عشر","DAY of PALM SUNDAY","يوم أحد الشعانين");
    const copticGospelIntroHtml = copticGospelIntro("8");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("12");
    const expositionConclusionHtml = expositionConclusion("14");
    const daytimeLitaniesHtml = daytimeLitanies("15",false);
    const evnotiNaiNanHtml = evnotiNaiNan("16");
    const endOfServiceHymnHtml = endOfServiceHymn("17");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic"></td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic"></td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic"></td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_7" title="Coptic Psalm">
        <caption class="caption" id="caption_table_7">Coptic Psalm<br>( )
        <span class="arabic-caption">المزمور قبطي<br>( )</span></caption>

        <tr id="table_7_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_7_row_1" class="text">
            <td class="english"></td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_7_row_2" class="text">
            <td class="english"></td>
            <td class="coptic">:</td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_7_row_3" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_9" title="Coptic Gospel">
        <caption class="caption" id="caption_table_9">Coptic Gospel<br>( )
        <span class="arabic-caption">الإنجيل قبطي<br>( )</span></caption>
        <tr id="table_9_row_0" class="priest">
            <td class="english">A chapter according to St. Mathew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_9_row_1" class="text">
            <td class="coptic"></td>
        </tr>
        <tr id="table_9_row_2" class="text">
            <td class="coptic"></td>
        </tr>
        <tr id="table_9_row_3" class="text">
            <td class="coptic"></td>
        </tr>
        <tr id="table_9_row_4" class="text">
            <td class="coptic">
            <br> Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        <tr id="table_9_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅ </td>
        </tr>
        <tr id="table_9_row_6" class="congregation">
            <td class="coptic">Ⲇⲟⲝⲁⲥⲓ Ⲕⲩⲣⲓ ̀ⲉ.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}


${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};