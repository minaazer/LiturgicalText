import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const EOF6 = () => {
    const hourIntroHtml = hourIntro("SIXTH","السادسة","EVE of GOOD FRIDAY","ليلة الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","4","5","SIXTH","السادسة","EVE of GOOD FRIDAY","ليلة الجمعة العظيمة");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("15");
    const expositionConclusionHtml = expositionConclusion("17");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ̀ⲁⲟⲩⲥⲁϫⲓ ̀ⲛⲧⲉ ̀Ⲡ⳪ ϣⲱⲡⲓ ϩⲁⲣⲟⲓ ⲉϥϫⲱⲙⲙⲟⲥ : ϫⲉ ̀ⲡϣⲏⲣⲓ ̀ⲙ̀ⲫⲣⲱⲙⲓ ̀ⲁϫⲟⲥ ⲛⲁⲥ : ϫⲉ ̀ⲛⲑⲟ ⲡⲉ ⲡⲓⲕⲁϩⲓ ̀ⲉⲧⲉ ̀ⲙⲉϥϭⲓⲙⲱⲟⲩ</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Ezekiel 22:23-28)
    <span class="arabic-caption">النبوة الأولي<br>(حزقيال 22: 23 - 28)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Ezekiel the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من حزقيال النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">And the word of the Lord came to me, saying,</td>
        <td class="arabic">وَكَانَ إِلَيَّ كَلاَمُ الرَّبِّ:</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">"Son of man, say to her: 'You are a land that is not cleansed or rained on in the day of indignation.'</td>
        <td class="arabic">[يَا ابْنَ آدَمَ, قُلْ لَهَا: أَنْتِ الأَرْضُ الَّتِي لَمْ تَطْهُرْ. لَمْ يُمْطَرْ عَلَيْهَا فِي يَوْمِ الْغَضَبِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">The conspiracy of her prophets in her midst is like a roaring lion tearing the prey; they have devoured people; they have taken treasure and precious things; they have made many widows in her midst.</td>
        <td class="arabic">فِتْنَةُ أَنْبِيَائِهَا فِي وَسَطِهَا كَأَسَدٍ مُزَمْجِرٍ يَخْطُفُ الْفَرِيسَةَ. أَكَلُوا نُفُوساً. أَخَذُوا الْكَنْزَ وَالنَّفِيسَ. أَكْثَرُوا أَرَامِلَهَا فِي وَسَطِهَا.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Her priests have violated My law and profaned My holy things; they have not distinguished between the holy and unholy, nor have they made known the difference between the unclean and the clean; and they have hidden their eyes from My Sabbaths, so that I am profaned among them.</td>
        <td class="arabic">كَهَنَتُهَا خَالَفُوا شَرِيعَتِي وَنَجَّسُوا أَقْدَاسِي. لَمْ يُمَيِّزُوا بَيْنَ الْمُقَدَّسِ وَالْمُحَلَّلِ, وَلَمْ يَعْلَمُوا الْفَرْقَ بَيْنَ النَّجِسِ وَالطَّاهِرِ, وَحَجَبُوا عُيُونَهُمْ عَنْ سُبُوتِي فَتَدَنَّسْتُ فِي وَسَطِهِمْ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Her princes in her midst are like wolves tearing the prey, to shed blood, to destroy people, and to get dishonest gain.</td>
        <td class="arabic">رُؤَسَاؤُهَا فِي وَسَطِهَا كَذِئَابٍ خَاطِفَةٍ خَطْفاً لِسَفْكِ الدَّمِ, لإِهْلاَكِ النُّفُوسِ لاِكْتِسَابِ كَسْبٍ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Her prophets plastered them with untempered mortar, seeing false visions, and divining lies for them, saying, 'Thus says the Lord God,' when the Lord had not spoken.</td>
        <td class="arabic">وَأَنْبِيَاؤُهَا قَدْ طَيَّنُوا لَهُمْ بِالطُّفَالِ, رَائِينَ بَاطِلاً وَعَارِفِينَ لَهُمْ كَذِباً, قَائِلِينَ: هَكَذَا قَالَ السَّيِّدُ الرَّبُّ وَالرَّبُّ لَمْ يَتَكَلَّمْ!</td>
    </tr>
    <tr id="table_3_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(59:1, 69:20)
        <span class="arabic-caption">المزمور قبطي<br>(59:1, 69:20)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">Deliver me from my enemies, O my God;</td>
            <td class="coptic">Ⲛⲁⲙϩⲉⲧ Ⲫϯ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲟⲧⲟⲩ ̀ⲛⲛⲁϫⲁϫⲓ:</td>
            <td class="arabic">خلصني من أعدائي يا الله </td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">Defend me from those who rise up against me.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲥⲟⲧⲧ ̀ⲉⲃⲟⲇ ̀ⲛⲧⲟⲧⲟⲩ ̀ⲛⲛⲏⲉⲧⲧⲱⲟⲩⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲓ.</td>
            <td class="arabic">ومن الذين يقومون على أنقذني،</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">I looked for someone to take pity, but there was none;</td>
            <td class="coptic">Ⲁⲓ̀ⲟϩⲓ ̀ⲙⲫⲏⲉⲑⲛⲁⲉⲣ ̀ⲙⲕⲁϩ ̀ⲛϩⲏⲧ ⲛⲉⲙⲏⲓ ⲟⲩⲟϩ ⲛⲁϥϣⲟⲡ ⲁⲛ ⲡⲉ:</td>
            <td class="arabic">وانتظرت من يحزن معي فلم يوجد،</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">And for comforters, but I found none.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲫⲏ̀ⲉⲑⲛⲁϯ ⲛⲟⲙϯ ⲛⲏⲓ ⲟⲩⲟϩ ̀ⲙⲡⲓϫⲉⲙϥ:</td>
            <td class="arabic">ومن يعزيني فلم أصب.</td>
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
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲧⲟⲧⲉ ⲁϥⲓ ⲛⲉⲙⲱⲟⲩ ⲛϫⲉ ⲓ̅ⲏ̅ⲥ ⲉⲟⲩⲓⲟϩⲓ ⲉⲩⲙⲟⲩϯ ⲉⲣⲟϥ ϫⲉ Ⲅⲏⲑⲥⲉⲙⲁⲛⲓ: ⲟⲩⲟϩ ⲡⲉϫⲁϥ ⲛⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ ϫⲉ ϩⲉⲙⲥⲓ ⲙⲡⲁⲓⲙⲁ ϣⲁϯϣⲉⲛⲏⲓ ϣⲁⲙⲛⲁⲓ ⲛⲧⲁⲧⲱⲃϩ Ⲟⲩⲟϩ ⲁϥⲱⲗⲓ ⲙⲠⲉⲧⲣⲟⲥ ⲛⲉⲙⲁϥ ⲛⲉⲙ ⲛⲉⲛϣⲏⲣⲓ ⲛⲌⲉⲃⲉⲇⲉⲟⲥ: ⲟⲩⲟϩ ⲁϥⲉⲣϩⲏⲧⲥ ⲛⲉⲣⲙⲕⲁϩⲛϩⲏⲧ ⲛⲉⲙ ⲉⲉⲣϣⲗⲁϩ ⲛϩⲏⲧ<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_5" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲩⲓ ⲉⲟⲩⲓⲟϩⲓ ⲉⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲅⲏⲑⲥⲉⲙⲁⲛⲓ : ⲟⲩⲟϩ ⲡⲉϫⲁϥ ⲛⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ ϫⲉ ϩⲉⲙⲥⲓ ϩⲁⲙⲛⲁⲓ ϩⲱⲥ ϯⲉⲣⲡⲣⲟⲥ ⲉⲩⲭⲉⲥⲑⲉ Ⲟⲩⲟϩ ⲁϥⲱⲗⲓ ⲛⲉⲙⲁϥ ⲙⲠⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ: ⲟⲩⲟϩ ⲁϥⲉⲣϩⲏⲧⲥ ⲛϣⲑⲟⲣⲧⲉⲣ ⲛⲉⲙⲉⲉⲣⲙⲕⲁϩⲛϩⲏⲧ<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ̀ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_8_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_8" class="text">
            <td class="coptic">Ⲉⲧⲁϥⲓ ⲇⲉ ⲉⲡⲓⲙⲁ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ: ϫⲉ ⲧⲱⲃϩ ϫⲉ ⲛⲛⲉⲧⲉⲛϣⲉ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ Ⲛⲑⲟϥ ⲇⲉ ⲁϥⲟⲩⲱϯ ⲉⲃⲟⲗ ⲙⲙⲱⲟⲩ ⲛⲁⲩ ⲫⲟⲩⲱϣ ⲛϩⲓⲟⲩⲓ ⲛⲟⲩⲱⲛⲓ ⲉⲃⲟⲗ: ⲟⲩⲟϩ ⲉⲧⲁϥϩⲓⲧϥ ⲉϫⲉⲛ ⲛⲉϥⲕⲉⲗⲓ ⲁϥⲧⲱⲃϩ <br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ̀ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_8_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_11" class="text">
            <td class="coptic">Ⲓⲟⲩⲇⲁⲥ ⲟⲩⲛ ⲉⲧⲁϥϭⲓ ⲙⲡⲓⲙⲏϣ ⲛⲉⲙ ⲛⲓϩⲩⲡⲉⲣⲉⲧⲏⲥ ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲫⲁⲣⲓⲥⲉⲟⲥ: ⲁϥⲓ ⲉⲙⲁⲩ ⲛⲉⲙ ϩⲁⲛⲫⲁⲛⲟⲥ ⲛⲉⲙ ϩⲁⲛⲗⲁⲙⲡⲁⲥ ⲛⲉⲙ ϩⲁⲛϩⲟⲡⲗⲟⲛ<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">


<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(59:1, 69:20)
    <span class="arabic-caption">المزمور<br>(59: 1 و 69: 20)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">Deliver me from my enemies, O my God; Defend me from those who rise up against me.</td>
        <td class="arabic">أَنْقِذْنِي مِنْ أَعْدَائِي يَا إِلَهِي. مِنْ مُقَاوِمِيَّ احْمِنِي.</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">I looked for someone to take pity, but there was none; And for comforters, but I found none.</td>
        <td class="arabic">الْعَارُ قَدْ كَسَرَ قَلْبِي فَمَرِضْتُ. انْتَظَرْتُ رِقَّةً فَلَمْ تَكُنْ وَمُعَزِّينَ فَلَمْ أَجِدْ.</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Matthew 26:36-46)
    <span class="arabic-caption">الانجيل<br>(متى 26: 36 - 46)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">Then Jesus came with them to a place called Gethsemane, and said to the disciples, "Sit here while I go and pray over there."</td>
        <td class="arabic">حِينَئِذٍ جَاءَ مَعَهُمْ يَسُوعُ إِلَى ضَيْعَةٍ يُقَالُ لَهَا جَثْسَيْمَانِي فَقَالَ لِلتَّلاَمِيذِ: «اجْلِسُوا هَهُنَا حَتَّى أَمْضِيَ وَأُصَلِّيَ هُنَاكَ».</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">And He took with Him Peter and the two sons of Zebedee, and He began to be sorrowful and deeply distressed.</td>
        <td class="arabic">ثُمَّ أَخَذَ مَعَهُ بُطْرُسَ وَابْنَيْ زَبْدِي وَابْتَدَأَ يَحْزَنُ وَيَكْتَئِبُ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">Then He said to them, "My soul is exceedingly sorrowful, even to death. Stay here and watch with Me."</td>
        <td class="arabic">فَقَالَ لَهُمْ: «نَفْسِي حَزِينَةٌ جِدّاً حَتَّى الْمَوْتِ. امْكُثُوا هَهُنَا وَاسْهَرُوا مَعِي».</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">He went a little farther and fell on His face, and prayed, saying, "O My Father, if it is possible, let this cup pass from Me; nevertheless, not as I will, but as You will."</td>
        <td class="arabic">ثُمَّ تَقَدَّمَ قَلِيلاً وَخَرَّ عَلَى وَجْهِهِ وَكَانَ يُصَلِّي قَائِلاً: «يَا أَبَتَاهُ إِنْ أَمْكَنَ فَلْتَعْبُرْ عَنِّي هَذِهِ الْكَأْسُ وَلَكِنْ لَيْسَ كَمَا أُرِيدُ أَنَا بَلْ كَمَا تُرِيدُ أَنْتَ».</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">Then He came to the disciples and found them asleep, and said to Peter, "What? Could you not watch with Me one hour?</td>
        <td class="arabic">ثُمَّ جَاءَ إِلَى التَّلاَمِيذِ فَوَجَدَهُمْ نِيَاماً فَقَالَ لِبُطْرُسَ: «أَهَكَذَا مَا قَدَرْتُمْ أَنْ تَسْهَرُوا مَعِي سَاعَةً وَاحِدَةً؟</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">Watch and pray, lest you enter into temptation. The spirit indeed is willing, but the flesh is weak."</td>
        <td class="arabic">اسْهَرُوا وَصَلُّوا لِئَلَّا تَدْخُلُوا فِي تَجْرِبَةٍ. أَمَّا الرُّوحُ فَنَشِيطٌ وَأَمَّا الْجَسَدُ فَضَعِيفٌ».</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">Again, a second time, He went away and prayed, saying, "O My Father, if this cup cannot pass away from Me unless I drink it, Your will be done."</td>
        <td class="arabic">فَمَضَى أَيْضاً ثَانِيَةً وَصَلَّى قَائِلاً: «يَا أَبَتَاهُ إِنْ لَمْ يُمْكِنْ أَنْ تَعْبُرَ عَنِّي هَذِهِ الْكَأْسُ إِلاَّ أَنْ أَشْرَبَهَا فَلْتَكُنْ مَشِيئَتُكَ».</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">And He came and found them asleep again, for their eyes were heavy.</td>
        <td class="arabic">ثُمَّ جَاءَ فَوَجَدَهُمْ أَيْضاً نِيَاماً إِذْ كَانَتْ أَعْيُنُهُمْ ثَقِيلَةً.</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english">So He left them, went away again, and prayed the third time, saying the same words.</td>
        <td class="arabic">فَتَرَكَهُمْ وَمَضَى أَيْضاً وَصَلَّى ثَالِثَةً قَائِلاً ذَلِكَ الْكَلاَمَ بِعَيْنِهِ.</td>
    </tr>
    <tr id="table_10_row_13" class="text">
        <td class="english">Then He came to His disciples and said to them, "Are you still sleeping and resting? Behold, the hour is at hand, and the Son of Man is being betrayed into the hands of sinners.</td>
        <td class="arabic">ثُمَّ جَاءَ إِلَى تَلاَمِيذِهِ وَقَالَ لَهُمْ: «نَامُوا الآنَ وَاسْتَرِيحُوا. هُوَذَا السَّاعَةُ قَدِ اقْتَرَبَتْ وَابْنُ الإِنْسَانِ يُسَلَّمُ إِلَى أَيْدِي الْخُطَاةِ.</td>
    </tr>
    <tr id="table_10_row_14" class="text">
        <td class="english">Rise, let us be going. See, My betrayer is at hand."</td>
        <td class="arabic">قُومُوا نَنْطَلِقْ. هُوَذَا الَّذِي يُسَلِّمُنِي قَدِ اقْتَرَبَ».</td>
    </tr>
    <tr id="table_10_row_15" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_17" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_11" title="Psalm">
    <caption id="caption_table_11" class="caption">Psalm<br>(59:1, 69:20)
    <span class="arabic-caption">المزمور<br>(59: 1 و 69: 20)</span></caption>
    <tr id="table_11_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_11_row_4" class="text">
        <td class="english">Deliver me from my enemies, O my God; Defend me from those who rise up against me.</td>
        <td class="arabic">أَنْقِذْنِي مِنْ أَعْدَائِي يَا إِلَهِي. مِنْ مُقَاوِمِيَّ احْمِنِي.</td>
    </tr>
    <tr id="table_11_row_5" class="text">
        <td class="english">I looked for someone to take pity, but there was none; And for comforters, but I found none.</td>
        <td class="arabic">الْعَارُ قَدْ كَسَرَ قَلْبِي فَمَرِضْتُ. انْتَظَرْتُ رِقَّةً فَلَمْ تَكُنْ وَمُعَزِّينَ فَلَمْ أَجِدْ.</td>
    </tr>
    <tr id="table_11_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_12" title="Gospel">
    <caption id="caption_table_12" class="caption">Gospel<br>(Mark 14:32-42)
    <span class="arabic-caption">الانجيل<br>(مرقس 14: 32 – 42)</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Then they came to a place which was named Gethsemane; and He said to His disciples, "Sit here while I pray."</td>
        <td class="arabic">وَجَاءُوا إِلَى ضَيْعَةٍ اسْمُهَا جَثْسَيْمَانِي فَقَالَ لِتَلاَمِيذِهِ: «اجْلِسُوا هَهُنَا حَتَّى أُصَلِّيَ».</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">And He took Peter, James, and John with Him, and He began to be troubled and deeply distressed.</td>
        <td class="arabic">ثُمَّ أَخَذَ مَعَهُ بُطْرُسَ وَيَعْقُوبَ وَيُوحَنَّا وَابْتَدَأَ يَدْهَشُ وَيَكْتَئِبُ.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">Then He said to them, "My soul is exceedingly sorrowful, even to death. Stay here and watch."</td>
        <td class="arabic">فَقَالَ لَهُمْ: «نَفْسِي حَزِينَةٌ جِدّاً حَتَّى الْمَوْتِ! امْكُثُوا هُنَا وَاسْهَرُوا».</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">He went a little farther, and fell on the ground, and prayed that if it were possible, the hour might pass from Him.</td>
        <td class="arabic">ثُمَّ تَقَدَّمَ قَلِيلاً وَخَرَّ عَلَى الأَرْضِ وَكَانَ يُصَلِّي لِكَيْ تَعْبُرَ عَنْهُ السَّاعَةُ إِنْ أَمْكَنَ.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">And He said, "Abba, Father, all things are possible for You. Take this cup away from Me; nevertheless, not what I will, but what You will."</td>
        <td class="arabic">وَقَالَ: «يَا أَبَا الآبُ كُلُّ شَيْءٍ مُسْتَطَاعٌ لَكَ فَأَجِزْ عَنِّي هَذِهِ الْكَأْسَ. وَلَكِنْ لِيَكُنْ لاَ مَا أُرِيدُ أَنَا بَلْ مَا تُرِيدُ أَنْتَ».</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">Then He came and found them sleeping, and said to Peter, "Simon, are you sleeping? Could you not watch one hour?</td>
        <td class="arabic">ثُمَّ جَاءَ وَوَجَدَهُمْ نِيَاماً فَقَالَ لِبُطْرُسَ: «يَا سِمْعَانُ أَنْتَ نَائِمٌ! أَمَا قَدَرْتَ أَنْ تَسْهَرَ سَاعَةً وَاحِدَةً؟</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english">Watch and pray, lest you enter into temptation. The spirit indeed is willing, but the flesh is weak."</td>
        <td class="arabic">اِسْهَرُوا وَصَلُّوا لِئَلاَّ تَدْخُلُوا فِي تَجْرِبَةٍ. أَمَّا الرُّوحُ فَنَشِيطٌ وَأَمَّا الْجَسَدُ فَضَعِيفٌ».</td>
    </tr>
    <tr id="table_12_row_11" class="text">
        <td class="english">Again He went away and prayed, and spoke the same words.</td>
        <td class="arabic">وَمَضَى أَيْضاً وَصَلَّى قَائِلاً ذَلِكَ الْكَلاَمَ بِعَيْنِهِ.</td>
    </tr>
    <tr id="table_12_row_12" class="text">
        <td class="english">And when He returned, He found them asleep again, for their eyes were heavy; and they did not know what to answer Him.</td>
        <td class="arabic">ثُمَّ رَجَعَ وَوَجَدَهُمْ أَيْضاً نِيَاماً إِذْ كَانَتْ أَعْيُنُهُمْ ثَقِيلَةً فَلَمْ يَعْلَمُوا بِمَاذَا يُجِيبُونَهُ.</td>
    </tr>
    <tr id="table_12_row_13" class="text">
        <td class="english">Then He came the third time and said to them, "Are you still sleeping and resting? It is enough! The hour has come; behold, the Son of Man is being betrayed into the hands of sinners.</td>
        <td class="arabic">ثُمَّ جَاءَ ثَالِثَةً وَقَالَ لَهُمْ: «نَامُوا الآنَ وَاسْتَرِيحُوا! يَكْفِي! قَدْ أَتَتِ السَّاعَةُ! هُوَذَا ابْنُ الإِنْسَانِ يُسَلَّمُ إِلَى أَيْدِي الْخُطَاةِ.</td>
    </tr>
    <tr id="table_12_row_14" class="text">
        <td class="english">Rise, let us be going. See, My betrayer is at hand."</td>
        <td class="arabic">قُومُوا لِنَذْهَبَ. هُوَذَا الَّذِي يُسَلِّمُنِي قَدِ اقْتَرَبَ».</td>
    </tr>
    <tr id="table_12_row_15" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_12_row_17" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_13" title="Gospel">
    <caption id="caption_table_13" class="caption">Gospel<br>(Luke 22:40-46)
    <span class="arabic-caption">الانجيل<br>(لوقا 22: 40 - 46)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St.  Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">When He came to the place, He said to them, "Pray that you may not enter into temptation."</td>
        <td class="arabic">وَلَمَّا صَارَ إِلَى الْمَكَانِ قَالَ لَهُمْ: «صَلُّوا لِكَيْ لاَ تَدْخُلُوا فِي تَجْرِبَةٍ».</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">And He was withdrawn from them about a stone's throw, and He knelt down and prayed,</td>
        <td class="arabic">وَانْفَصَلَ عَنْهُمْ نَحْوَ رَمْيَةِ حَجَرٍ وَجَثَا عَلَى رُكْبَتَيْهِ وَصَلَّى</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">saying, "Father, if it is Your will, take this cup away from Me; nevertheless not My will, but Yours, be done."</td>
        <td class="arabic">قَائِلاً: «يَا أَبَتَاهُ إِنْ شِئْتَ أَنْ تُجِيزَ عَنِّي هَذِهِ الْكَأْسَ. وَلَكِنْ لِتَكُنْ لاَ إِرَادَتِي بَلْ إِرَادَتُكَ».</td>
    </tr>
    <tr id="table_13_row_7" class="text">
        <td class="english">Then an angel appeared to Him from heaven, strengthening Him.</td>
        <td class="arabic">وَظَهَرَ لَهُ مَلاَكٌ مِنَ السَّمَاءِ يُقَوِّيهِ.</td>
    </tr>
    <tr id="table_13_row_8" class="text">
        <td class="english">And being in agony, He prayed more earnestly. Then His sweat became like great drops of blood falling down to the ground.</td>
        <td class="arabic">وَإِذْ كَانَ فِي جِهَادٍ كَانَ يُصَلِّي بِأَشَدِّ لَجَاجَةٍ وَصَارَ عَرَقُهُ كَقَطَرَاتِ دَمٍ نَازِلَةٍ عَلَى الأَرْضِ.</td>
    </tr>
    <tr id="table_13_row_9" class="text">
        <td class="english">When He rose up from prayer, and had come to His disciples, He found them sleeping from sorrow.</td>
        <td class="arabic">ثُمَّ قَامَ مِنَ الصَّلاَةِ وَجَاءَ إِلَى تَلاَمِيذِهِ فَوَجَدَهُمْ نِيَاماً مِنَ الْحُزْنِ.</td>
    </tr>
    <tr id="table_13_row_10" class="text">
        <td class="english">Then He said to them, "Why do you sleep? Rise and pray, lest you enter into temptation."</td>
        <td class="arabic">فَقَالَ لَهُمْ: «لِمَاذَا أَنْتُمْ نِيَامٌ؟ قُومُوا وَصَلُّوا لِئَلاَّ تَدْخُلُوا فِي تَجْرِبَةٍ».</td>
    </tr>
    <tr id="table_13_row_11" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_13_row_13" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(John 18:3-9)
    <span class="arabic-caption">الانجيل<br>(يوحنا 18: 3 - 9)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">Then Judas, having received a detachment of troops, and officers from the chief priests and Pharisees, came there with lanterns, torches, and weapons.</td>
        <td class="arabic">فَأَخَذَ يَهُوذَا الْجُنْدَ وَخُدَّاماً مِنْ عِنْدِ رُؤَسَاءِ الْكَهَنَةِ وَالْفَرِّيسِيِّينَ وَجَاءَ إِلَى هُنَاكَ بِمَشَاعِلَ وَمَصَابِيحَ وَسِلاَحٍ.</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">Jesus therefore, knowing all things that would come upon Him, went forward and said to them, "Whom are you seeking?"</td>
        <td class="arabic">فَخَرَجَ يَسُوعُ وَهُوَ عَالِمٌ بِكُلِّ مَا يَأْتِي عَلَيْهِ وَقَالَ لَهُمْ: «مَنْ تَطْلُبُونَ؟»</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">They answered Him, "Jesus of Nazareth." Jesus said to them, "I am He." And Judas, who betrayed Him, also stood with them.</td>
        <td class="arabic">أَجَابُوهُ: «يَسُوعَ النَّاصِرِيَّ». قَالَ لَهُمْ: «أَنَا هُوَ». وَكَانَ يَهُوذَا مُسَلِّمُهُ أَيْضاً وَاقِفاً مَعَهُمْ.</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">Now when He said to them, "I am He," they drew back and fell to the ground.</td>
        <td class="arabic">فَلَمَّا قَالَ لَهُمْ: «إِنِّي أَنَا هُوَ» رَجَعُوا إِلَى الْوَرَاءِ وَسَقَطُوا عَلَى الأَرْضِ.</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">Then He asked them again, "Whom are you seeking?" And they said, "Jesus of Nazareth."</td>
        <td class="arabic">فَسَأَلَهُمْ أَيْضاً: «مَنْ تَطْلُبُونَ؟» فَقَالُوا: «يَسُوعَ النَّاصِرِيَّ».</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">Jesus answered, "I have told you that I am He. Therefore, if you seek Me, let these go their way,"</td>
        <td class="arabic">أَجَابَ: «قَدْ قُلْتُ لَكُمْ إِنِّي أَنَا هُوَ. فَإِنْ كُنْتُمْ تَطْلُبُونَنِي فَدَعُوا هَؤُلاَءِ يَذْهَبُونَ».</td>
    </tr>
    <tr id="table_14_row_10" class="text">
        <td class="english">that the saying might be fulfilled which He spoke, "Of those whom You gave Me I have lost none."</td>
        <td class="arabic">لِيَتِمَّ الْقَوْلُ الَّذِي قَالَهُ: «إِنَّ الَّذِينَ أَعْطَيْتَنِي لَمْ أُهْلِكْ مِنْهُمْ أَحَداً».</td>
    </tr>
    <tr id="table_14_row_11" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_14_row_13" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>


</div>


<div class="section" id="section_8" title="Exposition">

${nighttimeExpositionIntroHtml}

<table id="table_16" title="Exposition">
    <caption id="caption_table_16" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_16_row_1" class="intro">
        <td class="english">The exposition of the SIXTH Hour of the EVE of Good Friday of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة السادسة من ليلة الجمعة  العظيمة من البصخة المقدسة بركتها  تكون معنا أمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">Our Savior departed from the Mount of Olives and went to Gethsemane with His disciples.</td>
        <td class="arabic">ترك مخلصنا يسوع جبل الزيتون وأتى إلى الجثسمانية مع الرسل</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">Then He told His disciples to wait there and took Peter together with the two brothers, the sons of Zebedee.</td>
        <td class="arabic">وهكذا قال لتلاميذه: اجلسوا ههنا حتى أمضى لأصلى. وأخذ بطرس مع الآخرين الطاهرين ابنى زبدى،</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">Then He started to pray for the sufferings that He would endure. He said to them, “My soul is exceedingly sorrowful, even to death.</td>
        <td class="arabic">وبدأ يقول فى صلاته من أجل آلامه التى سينالها. وهكذا قال لخواصه: اسهروا معى فى الصلاة.</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">Stay here and watch with Me.” He went a little farther and fell on His face and prayed saying,</td>
        <td class="arabic">وابتعد قليلاً وخر على وجهه وصلى قائلاً بحزن قلب:</td>
    </tr>
    <tr id="table_16_row_8" class="text">
        <td class="english">“O My Father, if it is possible, let this cup pass from Me, nevertheless, not as I will but as You will.”</td>
        <td class="arabic">يا أبتاه ان كان يمكن أن تعبر عنى هذه الكأس، ولكن ليست ارادتى بل ارادتك.</td>
    </tr>
    <tr id="table_16_row_9" class="text">
        <td class="english">Then He came back to His disciples and found them asleep in great sadness.</td>
        <td class="arabic">ثم عاد وجاء إلى تلاميذه فوجدهم نياماً بحزن عظيم.</td>
    </tr>
    <tr id="table_16_row_10" class="text">
        <td class="english">He awoke Peter and said to His disciples, “Could you not watch with Me for one hour?</td>
        <td class="arabic">فأيقظ بطرس وقال ألا يجب عليك أن تسهر معى ساعة واحدة؟</td>
    </tr>
    <tr id="table_16_row_11" class="text">
        <td class="english">Watch and pray lest you enter into temptation.”</td>
        <td class="arabic">صلوا بلا فتور لكى لا تدخلوا فى تجربة.</td>
    </tr>
    <tr id="table_16_row_12" class="text">
        <td class="english">The second time, He prayed again that if it is at all possible to let the cup pass from Him.</td>
        <td class="arabic">والمرة الثانية صلى هكذا من أجل الكأس لكى تعبر عنه.</td>
    </tr>
    <tr id="table_16_row_13" class="text">
        <td class="english">In the third time, He prayed again. Then He came to His disciples and said to them,</td>
        <td class="arabic">والمرة الثالثة صلى هكذا بهذا الكلام الذى قاله.</td>
    </tr>
    <tr id="table_16_row_14" class="text">
        <td class="english">“Are you still sleeping and resting? Behold the hour is at hand and the Son of Man is being betrayed into the hands of sinners.</td>
        <td class="arabic">قوموا اسهروا معى واتركوا النوم فقد اقترب الذى يسلمنى.</td>
    </tr>
    <tr id="table_16_row_15" class="text">
        <td class="english">Rise, let us be going. See, My betrayer is at hand. Woe to you Judas, more than anyone else, because your sins have multiplied as those of your parents.</td>
        <td class="arabic">الويل لك يا يهوذا أكثر من جميع الناس، فان خطاياك تضاعفت وخطايا والديك.</td>
    </tr>
    <tr id="table_16_row_16" class="text">
        <td class="english">You have rejected the blessing and loved damnation. It will be with you until the age of ages.</td>
        <td class="arabic">جحدت البركة وأحببت اللعنة، فحلت عليك إلى آخر الدهور.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};