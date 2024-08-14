import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOM3 = () => {
    const hourIntroHtml = hourIntro("THIRD","الثالثة","DAY of MONDAY","يوم الإثنين");
    const paschalPraiseHtml = paschalPraise1("4","14","15","THIRD","الثالثة","DAY of MONDAY","يوم الإثنين");
    const copticGospelIntroHtml = copticGospelIntro("17");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("21");
    const expositionConclusionHtml = expositionConclusion("23");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀̀Ⲏⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟⲓ ⲛ̀ⲛⲏⲉⲧϫⲱ ⲙ̀ⲙⲟⲥ : Ϫⲉ ⲛⲁⲛⲉ ⲡⲓⲡⲉⲧϩⲱⲟⲩ : ⲟⲩⲟϩ ϥ̀ϩⲱⲟⲩ ⲛ̀ϫⲉ ⲡⲓⲡⲉⲑⲛⲁⲛⲉϥ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic"> Ⲛ̀ⲓⲙ ⲡⲉ ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲥⲁⲃⲉ ⲙⲁⲣⲉϥⲉ̀ⲙⲓ ⲉ̀ⲫⲁⲓ : ⲟⲩⲟϩ ⲫⲏⲉⲧⲉ ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉⲣⲱϥ ⲙ̀Ⲡ⳪ ⲭⲏ ⲛⲁϩⲣⲁϥ ⲙⲁⲣⲉϥ ⲧⲁⲙⲉ ⲑⲏⲛⲟⲩ.</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>

    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 5:20-30)
    <span class="arabic-caption">النبوة الأولي<br>(اشعياء 5: 20 - 30)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Woe to those who call evil good, and good evil; Who put darkness for light, and light for darkness; Who put bitter for sweet, and sweet for bitter!</td>
        <td class="arabic">وَيْلٌ لِلْقَائِلِينَ لِلشَّرِّ خَيْراً وَلِلْخَيْرِ شَرّاً الْجَاعِلِينَ الظَّلاَمَ نُوراً وَالنُّورَ ظَلاَماً الْجَاعِلِينَ الْمُرَّ حُلْواً وَالْحُلْوَ مُرّاً.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Woe to those who are wise in their own eyes, And prudent in their own sight!</td>
        <td class="arabic">وَيْلٌ لِلْحُكَمَاءِ فِي أَعْيُنِ أَنْفُسِهِمْ وَالْفُهَمَاءِ عِنْدَ ذَوَاتِهِمْ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Woe to men mighty at drinking wine, Woe to men valiant for mixing intoxicating drink,</td>
        <td class="arabic">وَيْلٌ لِلأَبْطَالِ عَلَى شُرْبِ الْخَمْرِ وَلِذَوِي الْقُدْرَةِ عَلَى مَزْجِ الْمُسْكِرِ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Who justify the wicked for a bribe, And take away justice from the righteous man!</td>
        <td class="arabic">الَّذِينَ يُبَرِّرُونَ الشِّرِّيرَ مِنْ أَجْلِ الرَّشْوَةِ. وَأَمَّا حَقُّ الصِّدِّيقِينَ فَيَنْزِعُونَهُ مِنْهُمْ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Therefore, as the fire devours the stubble, And the flame consumes the chaff, So their root will be as rottenness, And their blossom will ascend like dust; Because they have rejected the law of the Lord of hosts, And despised the word of the Holy One of Israel.</td>
        <td class="arabic">لِذَلِكَ كَمَا يَأْكُلُ لَهِيبُ النَّارِ الْقَشَّ وَيَهْبِطُ الْحَشِيشُ الْمُلْتَهِبُ يَكُونُ أَصْلُهُمْ كَالْعُفُونَةِ وَيَصْعَدُ زَهْرُهُمْ كَالْغُبَارِ لأَنَّهُمْ رَذَلُوا شَرِيعَةَ رَبِّ الْجُنُودِ وَاسْتَهَانُوا بِكَلاَمِ قُدُّوسِ إِسْرَائِيلَ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Therefore the anger of the Lord is aroused against His people; He has stretched out His hand against them And stricken them, And the hills trembled. Their carcasses were as refuse in the midst of the streets. For all this His anger is not turned away, But His hand is stretched out still.</td>
        <td class="arabic">مِنْ أَجْلِ ذَلِكَ حَمِيَ غَضَبُ الرَّبِّ عَلَى شَعْبِهِ وَمَدَّ يَدَهُ عَلَيْهِ وَضَرَبَهُ حَتَّى ارْتَعَدَتِ الْجِبَالُ وَصَارَتْ جُثَثُهُمْ كَالزِّبْلِ فِي الأَزِقَّةِ. مَعَ كُلِّ هَذَا لَمْ يَرْتَدَّ غَضَبُهُ بَلْ يَدُهُ مَمْدُودَةٌ بَعْدُ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">He will lift up a banner to the nations from afar, And will whistle to them from the end of the earth; Surely they shall come with speed, swiftly.</td>
        <td class="arabic">فَيَرْفَعُ رَايَةً لِلأُمَمِ مِنْ بَعِيدٍ وَيَصْفِرُ لَهُمْ مِنْ أَقْصَى الأَرْضِ فَإِذَا هُمْ بِالْعَجَلَةِ يَأْتُونَ سَرِيعاً.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">No one will be weary or stumble among them, No one will slumber or sleep; Nor will the belt on their loins be loosed, Nor the strap of their sandals be broken;</td>
        <td class="arabic">لَيْسَ فِيهِمْ رَازِحٌ وَلاَ عَاثِرٌ. لاَ يَنْعَسُونَ وَلاَ يَنَامُونَ وَلاَ تَنْحَلُّ حُزُمُ أَحْقَائِهِمْ وَلاَ تَنْقَطِعُ سُيُورُ أَحْذِيَتِهِمُِ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Whose arrows are sharp, And all their bows bent; Their horses' hooves will seem like flint, And their wheels like a whirlwind.</td>
        <td class="arabic">الَّذِينَ سِهَامُهُمْ مَسْنُونَةٌ وَجَمِيعُ قِسِيِّهِمْ مَمْدُودَةٌ. حَوَافِرُ خَيْلِهِمْ تُحْسَبُ كَالصَّوَّانِ وَبَكَرَاتُهُمْ كَالزَّوْبَعَةِ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">Their roaring will be like a lion, They will roar like young lions; Yes, they will roar And lay hold of the prey; They will carry it away safely, And no one will deliver.</td>
        <td class="arabic">لَهُمْ زَمْجَرَةٌ كَاللَّبْوَةِ وَيُزَمْجِرُونَ كَالشِّبْلِ وَيَهِرُّونَ وَيُمْسِكُونَ الْفَرِيسَةَ وَيَسْتَخْلِصُونَهَا وَلاَ مُنْقِذَ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">In that day they will roar against them Like the roaring of the sea. And if one looks to the land, Behold, darkness and sorrow; And the light is darkened by the clouds.</td>
        <td class="arabic">يَهِرُّونَ عَلَيْهِمْ فِي ذَلِكَ الْيَوْمِ كَهَدِيرِ الْبَحْرِ. فَإِنْ نُظِرَ إِلَى الأَرْضِ فَهُوَذَا ظَلاَمُ الضِّيقِ وَالنُّورُ قَدْ أَظْلَمَ بِسُحُبِهَا.</td>
    </tr>
    <tr id="table_3_row_16" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Jeremiah 9:12-19)
    <span class="arabic-caption">النبوة الثانية<br>(أرميا 9: 12 – 19)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Jeremiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من أرميا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Who is the wise man who may understand this? And who is he to whom the mouth of the Lord has spoken, that he may declare it? Why does the land perish and burn up like a wilderness, so that no one can pass through?</td>
        <td class="arabic">مَنْ هُوَ الإِنْسَانُ الْحَكِيمُ الَّذِي يَفْهَمُ هَذِهِ وَالَّذِي كَلَّمَهُ فَمُ الرَّبِّ فَيُخْبِرُ بِهَا؟ لِمَاذَا بَادَتِ الأَرْضُ وَاحْتَرَقَتْ كَبَرِّيَّةٍ بِلاَ عَابِرٍ؟</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">And the Lord said, "Because they have forsaken My law which I set before them, and have not obeyed My voice, nor walked according to it,</td>
        <td class="arabic">فَقَالَ الرَّبُّ: [عَلَى تَرْكِهِمْ شَرِيعَتِي الَّتِي جَعَلْتُهَا أَمَامَهُمْ وَلَمْ يَسْمَعُوا لِصَوْتِي وَلَمْ يَسْلُكُوا بِهَا.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">but they have walked according to the dictates of their own hearts and after the Baals, which their fathers taught them,"</td>
        <td class="arabic">بَلْ سَلَكُوا وَرَاءَ عِنَادِ قُلُوبِهِمْ وَوَرَاءَ الْبَعْلِيمِ الَّتِي عَلَّمَهُمْ إِيَّاهَا آبَاؤُهُمْ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">therefore thus says the Lord of hosts, the God of Israel: "Behold, I will feed them, this people, with wormwood, and give them water of gall to drink.</td>
        <td class="arabic">لِذَلِكَ هَكَذَا قَالَ رَبُّ الْجُنُودِ إِلَهُ إِسْرَائِيلَ: هَئَنَذَا أُطْعِمُ هَذَا الشَّعْبَ أَفْسَنْتِيناً وَأَسْقِيهِمْ مَاءَ الْعَلْقَمِ</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">I will scatter them also among the Gentiles, whom neither they nor their fathers have known. And I will send a sword after them until I have consumed them."</td>
        <td class="arabic">وَأُبَدِّدُهُمْ فِي أُمَمٍ لَمْ يَعْرِفُوهَا هُمْ وَلاَ آبَاؤُهُمْ وَأُطْلِقُ وَرَاءَهُمُ السَّيْفَ حَتَّى أُفْنِيَهُمْ].</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Thus says the Lord of hosts: "Consider and call for the mourning women, That they may come; And send for skillful wailing women, That they may come.</td>
        <td class="arabic">هَكَذَا قَالَ رَبُّ الْجُنُودِ: [تَأَمَّلُوا وَادْعُوا النَّادِبَاتِ فَيَأْتِينَ وَأَرْسِلُوا إِلَى الْحَكِيمَاتِ فَيُقْبِلْنَ</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">Let them make haste And take up a wailing for us, That our eyes may run with tears, And our eyelids gush with water.</td>
        <td class="arabic">وَيُسْرِعْنَ وَيَرْفَعْنَ عَلَيْنَا مَرْثَاةً فَتَذْرِفَ أَعْيُنُنَا دُمُوعاً وَتَفِيضَ أَجْفَانُنَا مَاءً.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">For a voice of wailing is heard from Zion.</td>
        <td class="arabic">لأَنَّ صَوْتَ رِثَايَةٍ سُمِعَ مِنْ صِهْيَوْنَ.</td>
    </tr>
    <tr id="table_4_row_13" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(122:1-2)
        <span class="arabic-caption">المزمور قبطياً<br>(121: 1 ، 2)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">I was glad when they said to me,</td>
            <td class="coptic">Ⲁⲓⲟⲩⲛⲟϥ ⲉ̀ϫⲉⲛ ⲛⲏⲉ̀ⲧⲁⲩϫⲟⲥ ⲛⲏⲓ :</td>
            <td class="arabic">فرحت بالقائلين لي</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Let us go into the house of the Lord.</td>
            <td class="coptic">ϫⲉⲧⲉⲛⲛⲁ ϣⲉⲛⲁⲛ ⲉ̀ⲡ̀ⲏⲓ ⲙ̀Ⲡ̀⳪.</td>
            <td class="arabic">إلى بيت الرب نذهب.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Our feet have been standing</td>
            <td class="coptic">Ⲛⲉⲛϭⲁⲗⲁⲩϫ ⲁⲩⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ :</td>
            <td class="arabic">وقفت أرجلنا</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">within your gates, O Jerusalem!</td>
            <td class="coptic">ϧⲉⲛ ⲛⲓⲁⲩⲗⲏⲟⲩ ⲛ̀ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ</td>
            <td class="arabic">في ديار أورشليم.</td>
        </tr>
        <tr id="table_16_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_18" title="Coptic Gospel">
        <caption class="caption" id="caption_table_18">Coptic Gospel
        <span class="arabic-caption">الإنجيل قبطياً</span></caption>
        <tr id="table_18_row_0" class="priest">
            <td class="english">A chapter according to St. Mark,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار مرقس</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲓ̀ ⲛ̀ϫⲉ ⲓⲏⲥⲟⲩⲥ ⲉ̀ Ⲓ̅ⲗ̅ⲏ̅ⲙ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲥⲟⲙⲥ ⲉ̀ⲡ̀ⲧⲏⲣϥ : ⲟⲩⲟϩ ⲉ̀ⲧⲁⲣⲟⲩϩⲓ ϩⲏⲇⲏ ϣⲱⲡⲓ ⲛ̀ⲧⲉ ϯⲟⲩⲛⲟⲩ ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲉ̀Ⲃⲏⲑⲁ̀ⲛⲓⲁ̀ ⲛⲉⲙ ⲡⲓⲙⲏⲧ ⲥ̀ⲛⲁⲩ : Ⲟⲩⲟϩ ⲉ̀ⲡⲉϥⲣⲁⲥϯ ⲉ̀ⲧⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲃⲏⲑⲁ̀ⲛⲓⲁ̀ ⲁϥϩ̀ⲕⲟ : Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲟⲩⲃⲱ ⲛ̀ⲕⲉⲛⲧⲉ ϩⲓⲫⲟⲩⲉⲓ ⲉ̀ⲟⲩⲟⲛ ϩⲁⲛϫⲱⲃⲓ ϩⲓⲱⲧⲥ ⲁϥⲓ̀ ⲇⲉ ϩⲁⲣⲁ ⲁϥⲛⲁϫⲉⲙ ϩ̀ⲗⲓ ϩⲓⲱⲧⲥ ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϫⲱⲥ ⲙ̀ⲡⲉϥϫⲉⲙ ϩⲗⲓ ⲉ̀ⲃⲏⲗ ⲉ̀ ϩⲁⲛϫⲱⲃⲓ : ⲛⲉ ⲡ̀ⲥⲏⲟⲩ ⲅⲁⲣ ⲛ̀ⲕⲉⲛⲧⲉ ⲁⲛ ⲡⲉ. Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲉ̀ⲣⲟⲩⲱ ⲡⲉϫⲁϥ ⲛⲁⲥ ϫⲉ ⲛ̀ⲛⲉϩ̀ⲗⲓ ϫⲉ ⲟⲩⲉⲙ ⲟⲩⲧⲁϩ ϩⲓⲱϯ ϣⲁⲉ̀ⲛⲉϩ <br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_18_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_19" title="Psalm">
    <caption id="caption_table_19" class="caption">Psalm<br>(122:1-2)
    <span class="arabic-caption">المزمور<br>(121: 1 ، 2)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">I was glad when they said to me, "Let us go into the house of the Lord."</td>
        <td class="arabic">فرحت بالقائلين لى إلى بيت الرب نذهب.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">Our feet have been standing within your gates, O Jerusalem!</td>
        <td class="arabic">وقفت أرجلنا فى ديار أورشليم.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Mark 11:11-19)
    <span class="arabic-caption">الانجيل<br>(مرقس 11: 11 - 19)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">And Jesus went into Jerusalem and into the temple. So when He had looked around at all things, as the hour was already late, He went out to Bethany with the twelve.</td>
        <td class="arabic">فَدَخَلَ يَسُوعُ أُورُشَلِيمَ وَالْهَيْكَلَ وَلَمَّا نَظَرَ حَوْلَهُ إِلَى كُلِّ شَيْءٍ إِذْ كَانَ الْوَقْتُ قَدْ أَمْسَى خَرَجَ إِلَى بَيْتِ عَنْيَا مَعَ الاِثْنَيْ عَشَرَ.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">Now the next day, when they had come out from Bethany, He was hungry.</td>
        <td class="arabic">وَفِي الْغَدِ لَمَّا خَرَجُوا مِنْ بَيْتِ عَنْيَا جَاعَ</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">And seeing from afar a fig tree having leaves, He went to see if perhaps He would find something on it. When He came to it, He found nothing but leaves, for it was not the season for figs.</td>
        <td class="arabic">فَنَظَرَ شَجَرَةَ تِينٍ مِنْ بَعِيدٍ عَلَيْهَا وَرَقٌ وَجَاءَ لَعَلَّهُ يَجِدُ فِيهَا شَيْئاً. فَلَمَّا جَاءَ إِلَيْهَا لَمْ يَجِدْ شَيْئاً إلاَّ وَرَقاً لأَنَّهُ لَمْ يَكُنْ وَقْتَ التِّينِ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">In response Jesus said to it, "Let no one eat fruit from you ever again." And His disciples heard it.</td>
        <td class="arabic">فَقَالَ يَسُوعُ لَهَا: «لاَ يَأْكُلْ أَحَدٌ مِنْكِ ثَمَراً بَعْدُ إِلَى الأَبَدِ». وَكَانَ تَلاَمِيذُهُ يَسْمَعُونَ.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">So they came to Jerusalem. Then Jesus went into the temple and began to drive out those who bought and sold in the temple, and overturned the tables of the money changers and the seats of those who sold doves.</td>
        <td class="arabic">وَجَاءُوا إِلَى أُورُشَلِيمَ. وَلَمَّا دَخَلَ يَسُوعُ الْهَيْكَلَ ابْتَدَأَ يُخْرِجُ الَّذِينَ كَانُوا يَبِيعُونَ وَيَشْتَرُونَ فِي الْهَيْكَلِ وَقَلَّبَ مَوَائِدَ الصَّيَارِفَةِ وَكَرَاسِيَّ بَاعَةِ الْحَمَامِ.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">And He would not allow anyone to carry wares through the temple.</td>
        <td class="arabic">وَلَمْ يَدَعْ أَحَداً يَجْتَازُ الْهَيْكَلَ بِمَتَاعٍ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">Then He taught, saying to them, "Is it not written, 'My house shall be called a house of prayer for all nations'? But you have made it a 'den of thieves.'"</td>
        <td class="arabic">وَكَانَ يُعَلِّمُ قَائِلاً لَهُمْ: «أَلَيْسَ مَكْتُوباً: بَيْتِي بَيْتَ صَلاَةٍ يُدْعَى لِجَمِيعِ الأُمَمِ؟ وَأَنْتُمْ جَعَلْتُمُوهُ مَغَارَةَ لُصُوصٍ».</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">And the scribes and chief priests heard it and sought how they might destroy Him; for they feared Him, because all the people were astonished at His teaching.</td>
        <td class="arabic">وَسَمِعَ الْكَتَبَةُ وَرُؤَسَاءُ الْكَهَنَةِ فَطَلَبُوا كَيْفَ يُهْلِكُونَهُ لأَنَّهُمْ خَافُوهُ إِذْ بُهِتَ الْجَمْعُ كُلُّهُ مِنْ تَعْلِيمِهِ.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">When evening had come, He went out of the city.</td>
        <td class="arabic">وَلَمَّا صَارَ الْمَسَاءُ خَرَجَ إِلَى خَارِجِ الْمَدِينَةِ.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_15" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">

${daytimeExpositionIntroHtml}

<table id="table_22" title="Exposition">
    <caption id="caption_table_22" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_22_row_1" class="intro">
        <td class="english">The exposition of the THIRD Hour of the DAY of MONDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الثالثة من يوم الاثنين من البصخة المقدسة بركتها علينا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">On the evening of Hosanna Sunday, our Lord and Savior Jesus Christ went with His disciples outside the city.</td>
        <td class="arabic">فى عشية يوم الشعانين أتى المسيح الهنا يسوع المخلص خارج المدينة مع تلاميذه،</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">He felt hungry and said, “I want something to eat.” He saw a fig tree from a distance and sought some of its fruits.</td>
        <td class="arabic">فجاع وقال: اطلب طعاماً. فرأى شجرة تين من بعيد، وأتى إليها يطلب ثمراً فيها،</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">He found it fruitless. He condemned the tree and it dried from its roots.</td>
        <td class="arabic">فوجد ورقاً بغير ثمر، فلعنها فيبست من أصلها.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">The disciples were taken by the incident and said to the Lord, “the fig tree has withered away.”</td>
        <td class="arabic">فتعجب جميع تلاميذه، وقالوا للرب: أن شجرة التين يبست.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">Keep faith in your hearts and you shall be granted your requests.</td>
        <td class="arabic">ضعوا الايمان فى قلوبكم وكل شئ يخضع لكم.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">Do not be surprised that by one single word, the fig tree dried from its roots up.</td>
        <td class="arabic">ولا تتعجبوا من شجرة التين هذه انها بكلمة واحدة يبست من أصلها،</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">If you have faith in your hearts, you can move mountains.</td>
        <td class="arabic">فاذا كان فى قلوبكم ايمان لنقلتم هذا الجبل من مكانه.</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">Come all you ignorant and see what happened to the fig tree.</td>
        <td class="arabic">تعالوا وانظروا أيها الناس الجهال ما كان من شجرة التين هذه،</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">Present the Lord with good fruits to save yourselves from the evil.</td>
        <td class="arabic">واصنعوا ثمراً صالحاً للرب لكى تخلصوا من الشرير.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">Repent all you who slumber so that you may receive forgiveness.</td>
        <td class="arabic">واصنعوا توبة أيها الكسالى، لكى تنالوا الغفران.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">Clean your faces with tears because tears wipe out sins.</td>
        <td class="arabic">واغسلوا وجوهكم بدموع غزيرة، فان الدموع تمحو الآثام.</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">Light your lamps with virtues so that their light may shine upon you in the Day of Judgment.</td>
        <td class="arabic">واوقدوا مصابيحكم بالفضائل، لتضئ عليكم فى الحكم.</td>
    </tr>
    <tr id="table_22_row_16" class="text">
        <td class="english">Share the suffering with your brother and remember how the Lord suffered for our salvation.</td>
        <td class="arabic">تألم عن أخيك وأنظر الرب كيف تألم عنا حتى خلصنا.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOM6sc" class="navigationButton">
        <td class="englishButton">The SIXTH Hour of the DAY of MONDAY</td>
        <td class="arabicButton">الساعة السادسة من يوم الإثنين</td>
    </tr>
    <tr id="table_50_row_1" data-navigation="DaytimeLitaniessc" class="navigationButton">
        <td class="englishButton">Daytime Litanies</td>
        <td class="arabicButton">طلبات النهار</td>
    </tr>
</table>
</div>
</div>

`;

};