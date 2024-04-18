import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, nighttimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const EOW11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","EVE of WEDNESDAY","ليلة الاربعاء");
    const paschalPraiseHtml = paschalPraise3("4","4","5","ELEVENTH","الحادية عشر","EVE of WEDNESDAY","ليلة الاربعاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲥⲟⲫⲓⲁ̀ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ϯⲥⲟⲫⲓⲁ̀ ⲅⲁⲣ ⲥ̀ⲕⲓⲙ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲏⲉⲧⲕⲓⲙ ⲧⲏⲣⲟⲩ : ⲥ̀ⲫⲟϩ ⲟⲩⲟϩ ⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲧⲏⲣϥ ⲉⲑⲃⲉ ⲡⲉⲥⲧⲟⲩⲃⲟ : ⲟⲩϣⲁϩ ⲅⲁⲣ ⲧⲉ ⲛ̀ⲧⲉ ⲧ̀ϫⲟⲙ ⲙ̀Ⲫϯ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Wisdom of Solomon 7:24-30)
    <span class="arabic-caption">النبوة الأولي<br>(حكمة سليمان 7: 24 - 30)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the Wisdom of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء حكمة سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">For wisdom is more mobile than any motion;
because of her pureness she pervades and penetrates all things.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">For she is a breath of the power of God,
and a pure emanation of the glory of the Almighty;
therefore nothing defiled gains entrance into her.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">For she is a reflection of eternal light,
a spotless mirror of the working of God,
and an image of his goodness.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Though she is but one, she can do all things,
and while remaining in herself, she renews all things;
in every generation she passes into holy souls
and makes them friends of God, and prophets;</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">for God loves nothing so much as the man who lives with wisdom.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">For she is more beautiful than the sun,
and excels every constellation of the stars.
Compared with the light she is found to be superior,</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">for it is succeeded by the night,
but against wisdom evil does not prevail.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(56: 1-2)
        <span class="arabic-caption">المزمور قبطي<br>(56: 1-2)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">Be merciful to me, O God, be merciful to me!</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲏⲓ Ⲫϯ ⲟⲩⲟϩ ⲛⲁⲓⲛⲏⲓ : </td>
            <td class="arabic">ارحمني يا الله ارحمني</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">For my soul trusts in You;</td>
            <td class="coptic">Ϫⲉ ⲁⲥⲭⲁϩⲑⲏⲥ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ⲧⲁⲯⲩⲭⲏ :</td>
            <td class="arabic">فانه عليك توكلت نفسي.</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">And in the shadow of Your wings I will make my refuge,</td>
            <td class="coptic">ϯⲛⲁⲉⲣ ϩⲉⲗⲡⲓⲥ ϧⲁ ⲧ̀ϧⲏⲓⲃⲓ ⲛ̀ⲧⲉⲛⲉⲕⲧⲉⲛϩ :</td>
            <td class="arabic">وبظل جناحيك أتكل </td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">Until these calamities have passed by.</td>
            <td class="coptic">ϣⲁ ⲧⲉⲥⲥⲓⲛⲓ ⲛ̀ϫⲉ ϯⲁ̀ⲛⲟⲙⲓⲁ̀</td>
            <td class="arabic">إلى أن يعبر الاثم.</td>
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
            <td class="coptic">Ⲛⲁϥϧⲉⲛⲧ ⲇⲉ ⲡⲉ ⲛ̀ϫⲉ ⲡⲓⲡⲁⲥⲭⲁ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ : ⲟⲩⲟϩ ⲁⲩⲓ̀ ⲛ̀ϫⲉⲟⲩⲙⲏϣ ⲉ̀ϩ̀ⲣⲏⲓ ⲉⲒ̅ⲗ̅ⲏ̅ⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲭⲱⲣⲁ ϧⲁϫⲉⲛ ⲡⲓⲡⲁⲥⲭⲁ ϩⲓⲛⲁ ⲛ̀ⲧⲟⲩⲧⲟⲩⲃⲱⲟⲩ : Ⲛⲁⲩⲕⲱϯ ⲟⲩⲛ ⲡⲉ ⲛ̀ⲥⲁ Ⲓ̅ⲏ̅ⲥ ⲛ̀ϫⲉ ⲛⲓ Ⲓⲟⲩⲇⲁⲓ ⲉⲩϫⲱⲙ̀ⲙⲟⲥ ⲛ̀ⲛⲟⲩⲉⲣⲏⲟⲩ ⲉⲩⲟϩⲓ ⲉⲣⲁⲧⲟⲩ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ : ϫⲉ ⲟⲩ ⲡⲉⲧⲉⲧⲉⲛⲙⲉⲩⲓ̀ ⲉ̀ⲣⲟϥ ϫⲉ ϥⲛⲁⲓ ⲁⲛ ⲉ̀ⲡ̀ϣⲁⲓ Ⲛⲉ ⲁⲩϯ ⲉⲛⲧⲟⲗⲏ ⲇⲉ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲫⲁⲣⲓⲥⲉⲟⲥ ϩⲓⲛⲁ ⲁⲣⲉϣⲁⲛ ⲟⲩⲁⲓ ⲉ̀ⲙⲓ ϫⲉ ⲁϥⲑⲱⲛ ⲛ̀ⲧⲉϥⲧⲁⲙⲱⲟⲩ ⲉ̀ⲣⲟϥ ϩⲓⲛⲁ ⲛ̀ⲥⲉⲧⲁϩⲟϥ : <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(56:1-2)
    <span class="arabic-caption">المزمور<br>(56: 1-2)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">Be merciful to me, O God, be merciful to me! For my soul trusts in You;</td>
        <td class="arabic">ارحمنى يا الله ارحمنى فانه عليك توكلت نفسى.</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">And in the shadow of Your wings I will make my refuge, Until these calamities have passed by.</td>
        <td class="arabic">وبظل جناحيك أتكل إلى أن يعبر الاثم.</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(John 11:55-57)
    <span class="arabic-caption">الانجيل<br>(يوحنا 11: 55 – 57)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">And the Passover of the Jews was near, and many went from the country up to Jerusalem before the Passover, to purify themselves.</td>
        <td class="arabic">وَكَانَ فِصْحُ الْيَهُودِ قَرِيباً. فَصَعِدَ كَثِيرُونَ مِنَ الْكُوَرِ إِلَى أُورُشَلِيمَ قَبْلَ الْفِصْحِ لِيُطَهِّرُوا أَنْفُسَهُمْ.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">Then they sought Jesus, and spoke among themselves as they stood in the temple, "What do you think--that He will not come to the feast?"</td>
        <td class="arabic">فَكَانُوا يَطْلُبُونَ يَسُوعَ وَيَقُولُونَ فِيمَا بَيْنَهُمْ وَهُمْ وَاقِفُونَ فِي الْهَيْكَلِ: «مَاذَا تَظُنُّونَ؟ هَلْ هُوَ لاَ يَأْتِي إِلَى الْعِيدِ؟»</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">Now both the chief priests and the Pharisees had given a command, that if anyone knew where He was, he should report it, that they might seize Him.</td>
        <td class="arabic">وَكَانَ أَيْضاً رُؤَسَاءُ الْكَهَنَةِ وَالْفَرِّيسِيُّونَ قَدْ أَصْدَرُوا أَمْراً أَنَّهُ إِنْ عَرَفَ أَحَدٌ أَيْنَ هُوَ فَلْيَدُلَّ عَلَيْهِ لِكَيْ يُمْسِكُوهُ.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_9" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>


</div>


<div class="section" id="section_8" title="Exposition">

${nighttimeExpositionIntroHtml}

<table id="table_12" title="Exposition">
    <caption id="caption_table_12" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">The exposition of the ELEVENTH Hour of the EVE of WEDNESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشر من ليلة الأربعاء من البصخة المقدسة بركتها تكون معنا، آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">It was the tradition of all Jews, that as it became near the days of the Passover, the multitudes went up the mountain from the villages to Jerusalem to purify themselves.</td>
        <td class="arabic">جرت عادة لسائر اليهود أنه إذا اقترب عيد الفصح، تصعد جموع كثيرة من الذكور إلى أورشليم ليتطهروا.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">When they ascended the mountain as usual they did not see Jesus go up. They said to one another in the altar, “Maybe He will not come to the feast.”</td>
        <td class="arabic">فلما صعدوا كالعادة لم ينظروا يسوع يصعد. فقالوا لبعضهم البعض وهم فى الهيكل: العله حقاً لا يأتى إلى العيد؟</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">The chief priests and Pharisees asked the people to lead them to His location, if it were known, in order to arrest Him.</td>
        <td class="arabic">وكان المنافقون يفتكرون أفكاراً مملوءة من الخبث والرياء، لأن رؤساء الكهنة والفريسيين والشيوخ كانوا قد أوصوا أنه أن علم أحد أين هو فليدلهم عليه ليمسكوه.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">Woe for the ignorance of these wicked people, for they had made a trap for the Mighty Lord.</td>
        <td class="arabic">يا لهذا الجهل وهذه البلادة وعدم المعرفة التى لهؤلاء الأنجاس!</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">Therefore, they will be chained and dragged to hell, the place of suffering, for eternal punishment.</td>
        <td class="arabic">فانهم وضعوا فخاً لصاحب القوة الشديدة، الكلى القدرة، لأنهم مخالفون. فسيربطهم هو بسلاسل، ويسوقهم إلى الجحيم وموضع العذاب.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${nighttimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};