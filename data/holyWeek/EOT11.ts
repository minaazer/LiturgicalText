import { hourIntro, paschalPraise1 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, nighttimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const EOT11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","EVE of TUESDAY","ليلة الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","4","5","ELEVENTH","الحادية عشر","EVE of TUESDAY","ليلة الثلاثاء");
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
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲁ̀ⲙⲱⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲕⲱϯ ⲛ̀ⲥⲁ Ⲡ̀⳪ ⲟⲩⲟϩ ⲉⲣⲉⲧⲉⲛⲉ̀ⲱⲛϧ : ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥ ϣⲧⲉⲙϣⲱⲡⲓ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲭ̀ⲣⲱⲙ ⲛ̀ϫⲉ ⲡⲏⲓ ⲛ̀Ⲓⲱⲥⲏⲫ ⲟⲩⲟϩ ⲉϥⲉ̀ⲟⲩⲟⲙϥ</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Amos 5:6-14)
    <span class="arabic-caption">النبوة الأولي<br>(عاموس 5: 6 - 14)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Amos the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من عاموس النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Seek the Lord and live, Lest He break out like fire in the house of Joseph, And devour it, With no one to quench it in Bethel--</td>
        <td class="arabic">اُطْلُبُوا الرَّبَّ فَتَحْيُوا لِئَلاَّ يَقْتَحِمَ بَيْتَ يُوسُفَ كَنَارٍ تُحْرِقُ وَلاَ يَكُونُ مَنْ يُطْفِئُهَا مِنْ بَيْتَِ إِيلَ</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">You who turn justice to wormwood, And lay righteousness to rest in the earth!"</td>
        <td class="arabic">يَا أَيُّهَا الَّذِينَ يُحَوِّلُونَ الْحَقَّ أَفْسَنْتِيناً وَيُلْقُونَ الْبِرَّ إِلَى الأَرْضِ».</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">He made the Pleiades and Orion; He turns the shadow of death into morning And makes the day dark as night; He calls for the waters of the sea And pours them out on the face of the earth; The Lord is His name.</td>
        <td class="arabic">اَلَّذِي صَنَعَ الثُّرَيَّا وَالْجَبَّارَ وَيُحَوِّلُ ظِلَّ الْمَوْتِ صُبْحاً وَيُظْلِمُ النَّهَارَ كَاللَّيْلِ. الَّذِي يَدْعُو مِيَاهَ الْبَحْرِ وَيَصُبُّهَا عَلَى وَجْهِ الأَرْضِ يَهْوَهُ اسْمُهُ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">He rains ruin upon the strong, So that fury comes upon the fortress.</td>
        <td class="arabic">الَّذِي يُفْلِحُ الْخَرِبَ عَلَى الْقَوِيِّ فَيَأْتِي الْخَرَابُ عَلَى الْحِصْنِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">They hate the one who rebukes in the gate, And they abhor the one who speaks uprightly.</td>
        <td class="arabic">إِنَّهُمْ فِي الْبَابِ يُبْغِضُونَ الْمُنْذِرَ وَيَكْرَهُونَ الْمُتَكَلِّمَ بِالصِّدْقِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Therefore, because you tread down the poor And take grain taxes from him, Though you have built houses of hewn stone, Yet you shall not dwell in them; You have planted pleasant vineyards, But you shall not drink wine from them.</td>
        <td class="arabic">لِذَلِكَ مِنْ أَجْلِ أَنَّكُمْ تَدُوسُونَ الْمِسْكِينَ وَتَأْخُذُونَ مِنْهُ هَدِيَّةَ قَمْحٍ بَنَيْتُمْ بُيُوتاً مِنْ حِجَارَةٍ مَنْحُوتَةٍ وَلاَ تَسْكُنُونَ فِيهَا وَغَرَسْتُمْ كُرُوماً شَهِيَّةً وَلاَ تَشْرَبُونَ خَمْرَهَا.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">For I know your manifold transgressions And your mighty sins: Afflicting the just and taking bribes; Diverting the poor from justice at the gate.</td>
        <td class="arabic">لأَنِّي عَلِمْتُ أَنَّ ذُنُوبَكُمْ كَثِيرَةٌ وَخَطَايَاكُمْ وَافِرَةٌ أَيُّهَا الْمُضَايِقُونَ الْبَارَّ الْآخِذُونَ الرَّشْوَةَ الصَّادُّونَ الْبَائِسِينَ فِي الْبَابِ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Therefore the prudent keep silent at that time, For it is an evil time.</td>
        <td class="arabic">لِذَلِكَ يَصْمُتُ الْعَاقِلُ فِي ذَلِكَ الزَّمَانِ لأَنَّهُ زَمَانٌ رَدِيءٌ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Seek good and not evil, That you may live; So the Lord God of hosts will be with you, As you have spoken.</td>
        <td class="arabic">اُطْلُبُوا الْخَيْرَ لاَ الشَّرَّ لِتَحْيُوا فَعَلَى هَذَا يَكُونُ الرَّبُّ إِلَهُ الْجُنُودِ مَعَكُمْ كَمَا قُلْتُمْ.</td>
    </tr>
    <tr id="table_3_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(122:4)
        <span class="arabic-caption">المزمور قبطياً<br>(121: 4)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">For from there the tribes went up,</td>
            <td class="coptic">Ⲉ̀ⲧⲁⲩϣⲉⲛⲱⲟⲩ ⲅⲁⲣ ⲉ̀ⲡ̀ϣⲱⲓ ⲙ̀ⲙⲁⲩ ⲛ̀ϫⲉ ⲛⲓⲫⲩⲗⲏ :</td>
            <td class="arabic">لأنه هناك صعدت القبائل.</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">the tribes of the Lord,</td>
            <td class="coptic">ⲛⲓⲫⲩⲗⲏ ⲛ̀ⲧⲉ Ⲡ̀⳪ :</td>
            <td class="arabic">قبائل الرب</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">as a testimony for Israel,</td>
            <td class="coptic">ⲉⲩⲙⲉⲧⲙⲉⲑⲣⲉ ⲙ̀ⲡⲒ̀̅ⲥ̅ⲗ :</td>
            <td class="arabic">شهادة لإسرائيل.</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">to give thanks unto the name of the Lord.</td>
            <td class="coptic">ⲉⲩⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀⳪:</td>
            <td class="arabic">يعترفون لاسم الرب.</td>
        </tr>
        <tr id="table_6_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_8" title="Coptic Gospel">
        <caption class="caption" id="caption_table_8">Coptic Gospel
        <span class="arabic-caption">الإنجيل قبطياً</span></caption>
        <tr id="table_8_row_0" class="priest">
            <td class="english">A chapter according to St. Mark,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار مرقس</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲉⲑⲃⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲇⲉ ⲉ̀ⲧⲉ ⲙⲙⲁⲩ ⲛⲉⲙ ϯⲟⲩⲛⲟⲩ ⲙ̀ⲙⲟⲛ ϩ̀ⲗⲓ ⲉ̀ⲙⲓ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲇⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲏⲉⲧϧⲉⲛ ⲧ̀ⲫⲉ: ⲟⲩⲇⲉ ⲡ̀ϣⲏⲣⲓ ⲉ̀ⲃⲏⲗ ⲉ̀ ⲫ̀ⲓⲱⲧ : Ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ⲣⲱⲓⲥ ⲟⲩⲟϩ ⲁ̀ⲣⲓⲡ̀ⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ⲛ̀ⲧⲉⲧⲉⲛ ⲥⲱⲟⲩⲛ ⲅⲁⲣ ⲁⲛ ϫⲉ ⲑ̀ⲛⲁⲩ ⲡⲉ ⲡⲓⲥⲏⲟⲩ : Ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲣⲱⲙⲓ ⲉ̀ⲁϥⲙⲟϣⲓ ⲉ̀ⲡϣⲉⲙⲙⲟ ⲟⲩⲟϩ ⲉ̀ⲁϥⲭⲱ ⲙ̀ⲡⲉϥⲏⲓ ⲟⲩⲟϩ ⲁϥϯ ⲛ̀ⲛⲉϥ ⲉ̀ⲃⲓⲁⲓⲕ ⲙ̀ⲡⲓⲉⲣϣⲓϣⲓ ⲫ̀ⲟⲩⲁⲓ ⲫ̀ⲟⲩⲁⲓ ⲙ̀ⲡⲉϥϩⲱⲃ ⲟⲩⲟϩ ⲁϥϩⲟⲛϩⲉⲛ ⲉ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓ ⲙ̀ⲛⲟⲩⲧ ϩⲓⲛⲁ ⲛ̀ⲧⲉϥ ⲣⲱⲓⲥ. <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(122:4)
    <span class="arabic-caption">المزمور<br>(121: 4)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">For from there the tribes went up, the tribes of the Lord, as a testimony for Israel, to give thanks unto the name of the Lord.</td>
        <td class="arabic">لانه هناك صعدت القبائل.  قبائل الرب  شهادة لاسرائيل.  يعترفون لاسم الرب.</td>
    </tr>
    <tr id="table_9_row_6" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Mark 13:32-14:2)
    <span class="arabic-caption">الانجيل<br>(مرقس 13: 32 - 14: 2)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">"But of that day and hour no one knows, not even the angels in heaven, nor the Son, but only the Father.</td>
        <td class="arabic">وَأَمَّا ذَلِكَ الْيَوْمُ وَتِلْكَ السَّاعَةُ فَلاَ يَعْلَمُ بِهِمَا أَحَدٌ وَلاَ الْمَلاَئِكَةُ الَّذِينَ فِي السَّمَاءِ وَلاَ الاِبْنُ إلاَّ الآبُ.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">Take heed, watch and pray; for you do not know when the time is.</td>
        <td class="arabic">انْظُرُوا! اسْهَرُوا وَصَلُّوا لأَنَّكُمْ لاَ تَعْلَمُونَ مَتَى يَكُونُ الْوَقْتُ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">It is like a man going to a far country, who left his house and gave authority to his servants, and to each his work, and commanded the doorkeeper to watch.</td>
        <td class="arabic">كَأَنَّمَا إِنْسَانٌ مُسَافِرٌ تَرَكَ بَيْتَهُ وَأَعْطَى عَبِيدَهُ السُّلْطَانَ وَلِكُلِّ وَاحِدٍ عَمَلَهُ وَأَوْصَى الْبَوَّابَ أَنْ يَسْهَرَ.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">Watch therefore, for you do not know when the master of the house is coming--in the evening, at midnight, at the crowing of the rooster, or in the morning--</td>
        <td class="arabic">اسْهَرُوا إِذاً لأَنَّكُمْ لاَ تَعْلَمُونَ مَتَى يَأْتِي رَبُّ الْبَيْتِ أَمَسَاءً أَمْ نِصْفَ اللَّيْلِ أَمْ صِيَاحَ الدِّيكِ أَمْ صَبَاحاً.</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">lest, coming suddenly, he find you sleeping.</td>
        <td class="arabic">لِئَلاَّ يَأْتِيَ بَغْتَةً فَيَجِدَكُمْ نِيَاماً!</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">And what I say to you, I say to all: Watch!"</td>
        <td class="arabic">وَمَا أَقُولُهُ لَكُمْ أَقُولُهُ لِلْجَمِيعِ: اسْهَرُوا».</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">After two days it was the Passover and the Feast of Unleavened Bread. And the chief priests and the scribes sought how they might take Him by trickery and put Him to death.</td>
        <td class="arabic">وَكَانَ الْفِصْحُ وَأَيَّامُ الْفَطِيرِ بَعْدَ يَوْمَيْنِ. وَكَانَ رُؤَسَاءُ الْكَهَنَةِ وَالْكَتَبَةُ يَطْلُبُونَ كَيْفَ يُمْسِكُونَهُ بِمَكْرٍ وَيَقْتُلُونَهُ</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">But they said, "Not during the feast, lest there be an uproar of the people."</td>
        <td class="arabic">وَلَكِنَّهُمْ قَالُوا: «لَيْسَ فِي الْعِيدِ لِئَلاَّ يَكُونَ شَغَبٌ فِي الشَّعْبِ».</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_10_row_14" class="intro">
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
        <td class="english">The exposition of the ELEVENTH Hour of the EVE of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من ليلة الثلاثاء من البصخة المقدسة بركتها تكون معنا، آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">You alone, the Omniscient God, have the knowledge of everything before its being;</td>
        <td class="arabic">أنت وحدك أيها المدبر، العالم بسائر الأشياء قبل كون جميعها.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">the ages, years, times, and past generations.</td>
        <td class="arabic">والأزمنة والسنون وكل الأوقات والأجيال الماضية أنت العالم بها.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">Listen to our Savior, who with His divine mouth proclaims,</td>
        <td class="arabic">اسمعوا مخلصنا يقول علانية بفمه الالهى هكذا قائلاً</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">“But of that day and that hour when the Son of Man comes no one knows, not even the angels in heaven nor the Son, but only the Father.”</td>
        <td class="arabic">عن ذلك اليوم وتلك الساعة التى يأتى فيها ابن الإنسان: أنه ليس أحد من سائر البشر ولا الملائكة يعلمهما، والابن أيضاً لا يعلمهما إلا الآب فقط العارف بكل شئ.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">Watch therefore, for you do not know the time, unless He comes suddenly and finds you asleep.</td>
        <td class="arabic">فاسهروا كل حين وصلوا فإنكم لستم تعلمون متى يكون الوقت، لئلا يأتى بغته فيجدكم نياماً.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">Be careful and watch against the hidden traps.</td>
        <td class="arabic">فاحترزوا واحفظوا ذواتكم لكى تخلصوا من الفخاخ المنصوبة.</td>
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