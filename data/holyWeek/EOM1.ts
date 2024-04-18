import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, nighttimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const EOM1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","EVE of MONDAY","ليلة الإثنين");
    const paschalPraiseHtml = paschalPraise3("4","4","5","FIRST","الأولى","EVE of MONDAY","ليلة الإثنين");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("11");
    const expositionConclusionHtml = expositionConclusion("13");
    const nighttimeLitaniesHtml = nighttimeLitanies("14");
    const evnotiNaiNanHtml = evnotiNaiNan("15");
    const endOfServiceHymnHtml = endOfServiceHymn("16");



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
            <td class="coptic"></td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(102:1,8)
        <span class="arabic-caption">المزمور قبطي<br>(102: 1 و 8)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english"></td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english"></td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english"></td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english"></td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_6_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_8" title="Coptic Gospel">
        <caption class="caption" id="caption_table_8">Coptic Gospels
        <span class="arabic-caption">الإناجيل قبطي</span></caption>
        <tr id="table_8_row_0" class="priest">
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic"><br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">



</div>


<div class="section" id="section_8" title="Exposition">

${nighttimeExpositionIntroHtml}



${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${nighttimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};