import { hourIntro, paschalPraise1 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const EOT9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","EVE of TUESDAY","ليلة الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","4","5","NINTH","التاسعة","EVE of TUESDAY","ليلة الثلاثاء");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("11");
    const expositionConclusionHtml = expositionConclusion("13");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲱ̀ⲥⲓⲉ̀ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲥⲓϯ ⲛⲱⲧⲉⲛ ⲛ̀ⲟⲩⲙⲉⲑⲙⲏⲓ : ϭⲱⲗ ⲛ̀ⲟⲩⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ : ⲁ̀ⲣⲓⲟⲩⲱⲓⲛⲓ ⲛⲱⲧⲉⲛ ⲛ̀ⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲉ ⲡ̀ⲉ̀ⲙⲓ : ⲕⲱϯ ⲛ̀ⲥⲁ Ⲡ̀⳪ ϣⲁⲧⲟⲩⲓ̀ ⲛⲱⲧⲉⲛ ⲛ̀ϫⲉ ⲛⲓⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Hosea 10:12-11:2)
    <span class="arabic-caption">النبوة الأولي<br>(هوشع 10: 12 - 11: 2)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Hosea the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من هوشع النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Sow for yourselves righteousness; Reap in mercy; Break up your fallow ground, For it is time to seek the Lord, Till He comes and rains righteousness on you.</td>
        <td class="arabic">«اِزْرَعُوا لأَنْفُسِكُمْ بِالْبِرِّ. احْصُدُوا بِحَسَبِ الصَّلاَحِ. احْرُثُوا لأَنْفُسِكُمْ حَرْثاً فَإِنَّهُ وَقْتٌ لِطَلَبِ الرَّبِّ حَتَّى يَأْتِيَ وَيُعَلِّمَكُمُ الْبِرَّ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">You have plowed wickedness; You have reaped iniquity. You have eaten the fruit of lies, Because you trusted in your own way, In the multitude of your mighty men.</td>
        <td class="arabic">قَدْ حَرَثْتُمُ النِّفَاقَ حَصَدْتُمُ الإِثْمَ أَكَلْتُمْ ثَمَرَ الْكَذِبِ. لأَنَّكَ وَثَقْتَ بِطَرِيقِكَ بِكَثْرَةِ أَبْطَالِكَ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Therefore tumult shall arise among your people, And all your fortresses shall be plundered As Shalman plundered Beth Arbel in the day of battle-- A mother dashed in pieces upon her children.</td>
        <td class="arabic">يَقُومُ ضَجِيجٌ فِي شُعُوبِكَ وَتُخْرَبُ جَمِيعُ حُصُونِكَ كَإِخْرَابِ شَلْمَانَ بَيْتَ أَرَبْئِيلَ فِي يَوْمِ الْحَرْبِ. الأُمُّ مَعَ الأَوْلاَدِ حُطِّمَتْ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Thus it shall be done to you, O Bethel, Because of your great wickedness. At dawn the king of Israel Shall be cut off utterly.</td>
        <td class="arabic">هَكَذَا تَصْنَعُ بِكُمْ بَيْتُ إِيلَ مِنْ أَجْلِ رَدَاءَةِ شَرِّكُمْ. فِي الصُّبْحِ يَهْلِكُ مَلِكُ إِسْرَائِيلَ هَلاَكاً».</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">"When Israel was a child, I loved him, And out of Egypt I called My son.</td>
        <td class="arabic">«لَمَّا كَانَ إِسْرَائِيلُ غُلاَماً أَحْبَبْتُهُ وَمِنْ مِصْرَ دَعَوْتُ ابْنِي.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">As they called them, They sacrificed to the Baals, And burned incense to carved images.</td>
        <td class="arabic">كُلَّ مَا دَعُوهُمْ ذَهَبُوا مِنْ أَمَامِهِمْ يَذْبَحُونَ لِلْبَعْلِيمِ وَيُبَخِّرُونَ لِلتَّمَاثِيلِ الْمَنْحُوتَةِ.</td>
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
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(33:10-11)
        <span class="arabic-caption">المزمور قبطي<br>(33:10-11)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">The Lord brings the counsel of the nations to nothing;</td>
            <td class="coptic">Ⲡ̀ϭⲟⲓⲥ ⲛⲁϫⲉⲣ ⲛⲓⲥⲟϭⲛⲓ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲛⲟⲥ ⲉ̀ⲃⲟⲗ :</td>
            <td class="arabic">الرب يشتت آراء الامم</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">He makes the plans of the peoples of no effect.</td>
            <td class="coptic">ⲟⲩⲟϩ ϥ̀ⲛⲁϣⲱϣϥ ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ ϩⲁⲛⲗⲁⲟⲥ : ⲟⲩⲟϩ ϥ̀ⲛⲁϣⲱϣϥ ⲙ̀ⲡⲓⲥⲟϭⲛⲓ ⲛ̀ⲧⲉ ⲛⲓⲁⲣⲭⲱⲛ:</td>
            <td class="arabic">ويرذل أفكار الشعوب ويرفض مؤامرة الرؤساء</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">The counsel of the Lord stands forever,</td>
            <td class="coptic">ⲡ̀ⲥⲟϭⲛⲓ ⲇⲉ ⲛ̀ⲑⲟϥ ⲙ̀Ⲡ̀⳪ ϣⲟⲡ ϣⲁⲉ̀ⲛⲉϩ :</td>
            <td class="arabic">وأما مشورة الرب فكائنة إلى الابد </td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">The plans of His heart to all generations.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ ⲡⲉϥϩⲏⲧ ⲓⲥϫⲉⲛ ϫⲱⲟⲩ ϣⲁϫⲱⲟⲩ</td>
            <td class="arabic">وأفكار قلبه من جيل إلى جيل.</td>
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
            <td class="english">A chapter according to St. Luke,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار لوقا</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲉϥⲥⲁϫⲓ ⲇⲉ ⲁϥϯ ϩⲟⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲟⲩⲫⲁⲣⲓⲥⲉⲟⲥ ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲟⲩⲱⲙ ϧⲁⲧⲟⲧϥ ⲟⲩⲟϩ ⲉ̀ⲧⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲁϥⲣⲱⲧⲉⲃ. Ⲡⲓⲫⲁⲣⲓⲥⲉⲟⲥ ⲇⲉ ⲉ̀ⲧⲁϥⲛⲁⲩ ⲁϥⲉⲣ ϣ̀ⲫⲏⲣⲓ ϫⲉ ⲙ̀ⲡⲉϥϭⲓⲱⲙⲥ ⲛ̀ϣⲟⲣⲡ ϧⲁϫⲉⲛ ⲡⲓⲟⲩⲱⲙ. Ⲡⲉϫⲁϥ ⲇⲉ ⲛⲁϥ ⲛ̀ϫⲉ Ⲡ̀⳪ ϫⲉ ϯⲛⲟⲩ ⲛ̀ⲑⲱⲧⲉⲛ ϧⲁⲛⲓⲫⲁⲣⲓⲥⲉⲟⲥ ⲧⲉⲧⲉⲛⲧⲟⲩⲃⲟ ⲥⲁⲃⲟⲗ ⲙ̀ⲡⲓⲁ̀ⲫⲟⲧ ⲛⲉⲙ ⲡⲓⲃⲓⲛⲁϫ : ⲥⲁϧⲟⲩⲛ ⲇⲉ ⲙ̀ⲙⲱⲟⲩ ⲙⲉϩ ⲛ̀ϩⲱⲗⲉⲙ ⲛⲉⲙ ⲡⲟⲛⲏⲣⲓⲁ̀. Ⲛⲓⲁⲧϩⲏⲧ ⲙⲏ ⲫⲏ ⲁⲛ ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲉ̀ ⲥⲁⲃⲟⲗ ⲛ̀ⲑⲟϥ ⲟⲛ ⲁϥⲑⲁⲙⲓⲉ̀ ⲥⲁϧⲟⲩⲛ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_9" class="caption">Psalm<br>(33:10-11)
    <span class="arabic-caption">المزمور<br>(33: 10 - 11)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">The Lord brings the counsel of the nations to nothing; He makes the plans of the peoples of no effect.</td>
        <td class="arabic">الرب يشتت آراء الامم  ويرذل أفكار الشعوب ويرفض مؤامرة الرؤساء</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">The counsel of the Lord stands forever, The plans of His heart to all generations.</td>
        <td class="arabic">وأما مشورة الرب فكائنة إلى الابد وأفكار قلبه من جيل إلى جيل.</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Luke 11:37-52)
    <span class="arabic-caption">الانجيل<br>(لوقا 11: 37 – 52)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">And as He spoke, a certain Pharisee asked Him to dine with him. So He went in and sat down to eat.</td>
        <td class="arabic">وَفِيمَا هُوَ يَتَكَلَّمُ سَأَلَهُ فَرِّيسِيٌّ أَنْ يَتَغَدَّى عِنْدَهُ فَدَخَلَ وَاتَّكَأَ.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">When the Pharisee saw it, he marveled that He had not first washed before dinner.</td>
        <td class="arabic">وَأَمَّا الْفَرِّيسِيُّ فَلَمَّا رَأَى ذَلِكَ تَعَجَّبَ أَنَّهُ لَمْ يَغْتَسِلْ أَوَّلاً قَبْلَ الْغَدَاءِ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">" Then the Lord said to him, "Now you Pharisees make the outside of the cup and dish clean, but your inward part is full of greed and wickedness.</td>
        <td class="arabic">فَقَالَ لَهُ الرَّبُّ: «أَنْتُمُ الآنَ أَيُّهَا الْفَرِّيسِيُّونَ تُنَقُّونَ خَارِجَ الْكَأْسِ وَالْقَصْعَةِ وَأَمَّا بَاطِنُكُمْ فَمَمْلُوءٌ اخْتِطَافاً وَخُبْثاً.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">Foolish ones! Did not He who made the outside make the inside also?</td>
        <td class="arabic">يَا أَغْبِيَاءُ أَلَيْسَ الَّذِي صَنَعَ الْخَارِجَ صَنَعَ الدَّاخِلَ أَيْضاً؟</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">But rather give alms of such things as you have; then indeed all things are clean to you.</td>
        <td class="arabic">بَلْ أَعْطُوا مَا عِنْدَكُمْ صَدَقَةً فَهُوَذَا كُلُّ شَيْءٍ يَكُونُ نَقِيّاً لَكُمْ.</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">But woe to you Pharisees! For you tithe mint and rue and all manner of herbs, and pass by justice and the love of God. These you ought to have done, without leaving the others undone.</td>
        <td class="arabic">وَلَكِنْ وَيْلٌ لَكُمْ أَيُّهَا الْفَرِّيسِيُّونَ لأَنَّكُمْ تُعَشِّرُونَ النَّعْنَعَ وَالسَّذَابَ وَكُلَّ بَقْلٍ وَتَتَجَاوَزُونَ عَنِ الْحَقِّ وَمَحَبَّةِ اللهِ. كَانَ يَنْبَغِي أَنْ تَعْمَلُوا هَذِهِ وَلاَ تَتْرُكُوا تِلْكَ!</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">Woe to you Pharisees! For you love the best seats in the synagogues and greetings in the marketplaces.</td>
        <td class="arabic">وَيْلٌ لَكُمْ أَيُّهَا الْفَرِّيسِيُّونَ لأَنَّكُمْ تُحِبُّونَ الْمَجْلِسَ الأَوَّلَ فِي الْمَجَامِعِ وَالتَّحِيَّاتِ فِي الأَسْوَاقِ.</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">" Woe to you, scribes and Pharisees, hypocrites!</td>
        <td class="arabic">وَيْلٌ لَكُمْ أَيُّهَا الْكَتَبَةُ وَالْفَرِّيسِيُّونَ الْمُرَاؤُونَ لأَنَّكُمْ مِثْلُ الْقُبُورِ الْمُخْتَفِيَةِ وَالَّذِينَ يَمْشُونَ عَلَيْهَا لاَ يَعْلَمُونَ!».</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english">Then one of the lawyers answered and said to Him, "Teacher, by saying these things You reproach us also."</td>
        <td class="arabic">فَقَالَ لَهُ وَاحِدٌ مِنَ النَّامُوسِيِّينَ: «يَا مُعَلِّمُ حِينَ تَقُولُ هَذَا تَشْتِمُنَا نَحْنُ أَيْضاً».</td>
    </tr>
    <tr id="table_10_row_13" class="text">
        <td class="english">And He said, "Woe to you also, lawyers! For you load men with burdens hard to bear, and you yourselves do not touch the burdens with one of your fingers.</td>
        <td class="arabic">فَقَالَ: «وَوَيْلٌ لَكُمْ أَنْتُمْ أَيُّهَا النَّامُوسِيُّونَ لأَنَّكُمْ تُحَمِّلُونَ النَّاسَ أَحْمَالاً عَسِرَةَ الْحَمْلِ وَأَنْتُمْ لاَ تَمَسُّونَ الأَحْمَالَ بِإِحْدَى أَصَابِعِكُمْ.</td>
    </tr>
    <tr id="table_10_row_14" class="text">
        <td class="english">Woe to you! For you build the tombs of the prophets, and your fathers killed them.</td>
        <td class="arabic">وَيْلٌ لَكُمْ لأَنَّكُمْ تَبْنُونَ قُبُورَ الأَنْبِيَاءِ وَآبَاؤُكُمْ قَتَلُوهُمْ.</td>
    </tr>
    <tr id="table_10_row_15" class="text">
        <td class="english">In fact, you bear witness that you approve the deeds of your fathers; for they indeed killed them, and you build their tombs.</td>
        <td class="arabic">إِذاً تَشْهَدُونَ وَتَرْضَوْنَ بِأَعْمَالِ آبَائِكُمْ لأَنَّهُمْ هُمْ قَتَلُوهُمْ وَأَنْتُمْ تَبْنُونَ قُبُورَهُمْ.</td>
    </tr>
    <tr id="table_10_row_16" class="text">
        <td class="english">Therefore the wisdom of God also said, 'I will send them prophets and apostles, and some of them they will kill and persecute,'</td>
        <td class="arabic">لِذَلِكَ أَيْضاً قَالَتْ حِكْمَةُ اللهِ: إِنِّي أُرْسِلُ إِلَيْهِمْ أَنْبِيَاءَ وَرُسُلاً فَيَقْتُلُونَ مِنْهُمْ وَيَطْرُدُونَ -</td>
    </tr>
    <tr id="table_10_row_17" class="text">
        <td class="english">that the blood of all the prophets which was shed from the foundation of the world may be required of this generation,</td>
        <td class="arabic">لِكَيْ يُطْلَبَ مِنْ هَذَا الْجِيلِ دَمُ جَمِيعِ الأَنْبِيَاءِ الْمُهْرَقُ مُنْذُ إِنْشَاءِ الْعَالَمِ</td>
    </tr>
    <tr id="table_10_row_18" class="text">
        <td class="english">from the blood of Abel to the blood of Zechariah who perished between the altar and the temple. Yes, I say to you, it shall be required of this generation.</td>
        <td class="arabic">مِنْ دَمِ هَابِيلَ إِلَى دَمِ زَكَرِيَّا الَّذِي أُهْلِكَ بَيْنَ الْمَذْبَحِ وَالْبَيْتِ. نَعَمْ أَقُولُ لَكُمْ: إِنَّهُ يُطْلَبُ مِنْ هَذَا الْجِيلِ!</td>
    </tr>
    <tr id="table_10_row_19" class="text">
        <td class="english">Woe to you lawyers! For you have taken away the key of knowledge. You did not enter in yourselves, and those who were entering in you hindered."</td>
        <td class="arabic">وَيْلٌ لَكُمْ أَيُّهَا النَّامُوسِيُّونَ لأَنَّكُمْ أَخَذْتُمْ مِفْتَاحَ الْمَعْرِفَةِ. مَا دَخَلْتُمْ أَنْتُمْ وَالدَّاخِلُونَ مَنَعْتُمُوهُمْ».</td>
    </tr>
    <tr id="table_10_row_20" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_22" class="intro">
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
        <td class="english">The exposition of the NINTH Hour of the EVE of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة التاسعة من ليلة الثلاثاء من البصخة المقدسة بركتها  تكون معنا، آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Listen to the compassionate and patient One, who has great mercy when He teaches us to be clean not only in our bodies but also in our hearts.</td>
        <td class="arabic">اسمعوا الرؤوف الرحوم الكثير الرحمة المتأنى، كيف يوصينا أن نكون أطهاراً، ليس فى أجسادنا فقط بل وفى قلوبنا أيضاً.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">The Pharisee who invited Jesus to dinner was puzzled at Him when He ate the bread without washing His hands.</td>
        <td class="arabic">فلما تعجب منه ذلك الفريسى الذى سأله أن يأكل عنده لما رآه يأكل الخبز بغير طهر ولا غسل يد</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">The Omniscient teacher said to him, “You Pharisees cleanse the outside of the cup but inside you are full of immorality, plunder, and injustices.”</td>
        <td class="arabic">تكلم معه المعلم العارف بكل الأشياء قبل كونها قائلاً: أنتم يا معشر الفريسيين تطهرون خارج الكأس والطاس، أما داخلكم فانه مملوء دعارة واختطافاً وظلماً.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">Give alms and just judgment and everything will be clean to you.</td>
        <td class="arabic">اعطوا صدقة وحكم عدل، وكل شئ يتطهر لكم.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">Therefore, let us be kind to God’s creations.</td>
        <td class="arabic">فلنكن نحن رحومين على كل إنسان خلقه الله</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">In that we may purify ourselves, bodies, and souls, of all the filth of sins.</td>
        <td class="arabic">وعند ذلك نطهر نفوسنا وأجسادنا وأرواحنا من كل دنس الخطية.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};