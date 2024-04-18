import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, nighttimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const EOF11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","EVE of GOOD FRIDAY","ليلة الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","4","5","ELEVENTH","الحادية عشر","EVE of GOOD FRIDAY","ليلة الجمعة العظيمة");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("15");
    const expositionConclusionHtml = expositionConclusion("17");
    const nighttimeLitaniesHtml = nighttimeLitanies("18");
    const evnotiNaiNanHtml = evnotiNaiNan("19");
    const endOfServiceHymnHtml = endOfServiceHymn("20");



return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲛⲓϩⲓⲟ̀ⲙⲓ ⲉⲑⲛⲏⲟⲩ ϧⲉⲛ ⲟⲩⲛⲁⲩ : ⲛ̀ⲟⲩⲗⲁⲟⲥ ⲅⲁⲣ ⲁⲛ ⲡⲉ ⲉ̀ⲟⲩⲟⲛⲛ̀ⲧⲁϥ ⲙ̀ⲡⲓⲕⲁϯ : ⲉⲑⲃⲉ ⲫⲁⲓ ⲛ̀ⲛⲉϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲱⲟⲩ ⲛ̀ϫⲉ ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲱ̀ⲟⲩ :</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 27:11-28:15)
    <span class="arabic-caption">النبوة الأولي<br>(أشعياء 27: 11 - 28: 15)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">When its boughs are withered, they will be broken off; The women come and set them on fire. For it is a people of no understanding; Therefore He who made them will not have mercy on them, And He who formed them will show them no favor.</td>
        <td class="arabic">حِينَمَا تَيْبَسُ أَغْصَانُهَا تَتَكَسَّرُ فَتَأْتِي نِسَاءٌ وَتُوقِدُهَا. لأَنَّهُ لَيْسَ شَعْباً ذَا فَهْمٍ لِذَلِكَ لاَ يَرْحَمُهُ صَانِعُهُ وَلاَ يَتَرَأَّفُ عَلَيْهِ جَابِلُهُ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">And it shall come to pass in that day That the Lord will thresh, From the channel of the River to the Brook of Egypt; And you will be gathered one by one, O you children of Israel.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّ الرَّبَّ يَجْنِي مِنْ مَجْرَى النَّهْرِ إِلَى وَادِي مِصْرَ. وَأَنْتُمْ تُلْقَطُونَ وَاحِداً وَاحِداً يَا بَنِي إِسْرَائِيلَ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">So it shall be in that day: The great trumpet will be blown; They will come, who are about to perish in the land of Assyria, And they who are outcasts in the land of Egypt, And shall worship the Lord in the holy mount at Jerusalem.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّهُ يُضْرَبُ بِبُوقٍ عَظِيمٍ فَيَأْتِي التَّائِهُونَ فِي أَرْضِ أَشُّورَ وَالْمَنْفِيُّونَ فِي أَرْضِ مِصْرَ وَيَسْجُدُونَ لِلرَّبِّ فِي الْجَبَلِ الْمُقَدَّسِ فِي أُورُشَلِيمَ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Woe to the crown of pride, to the drunkards of Ephraim, Whose glorious beauty is a fading flower Which is at the head of the verdant valleys, To those who are overcome with wine!</td>
        <td class="arabic">وَيْلٌ لإِكْلِيلِ فَخْرِ سُكَارَى أَفْرَايِمَ وَلِلزَّهْرِ الذَّابِلِ جَمَالِ بَهَائِهِ الَّذِي عَلَى رَأْسِ وَادِي سَمَائِنَ الْمَضْرُوبِينَ بِالْخَمْرِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Behold, the Lord has a mighty and strong one, Like a tempest of hail and a destroying storm, Like a flood of mighty waters overflowing, Who will bring them down to the earth with His hand.</td>
        <td class="arabic">هُوَذَا شَدِيدٌ وَقَوِيٌّ لِلسَّيِّدِ كَانْهِيَالِ الْبَرَدِ كَنَوْءٍ مُهْلِكٍ كَسَيْلِ مِيَاهٍ غَزِيرَةٍ جَارِفَةٍ قَدْ أَلْقَاهُ إِلَى الأَرْضِ بِشِدَّةٍ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">The crown of pride, the drunkards of Ephraim, Will be trampled underfoot;</td>
        <td class="arabic">بِالأَرْجُلِ يُدَاسُ إِكْلِيلُ فَخْرِ سُكَارَى أَفْرَايِمَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">And the glorious beauty is a fading flower Which is at the head of the verdant valley, Like the first fruit before the summer, Which an observer sees; He eats it up while it is still in his hand.</td>
        <td class="arabic">وَيَكُونُ الزَّهْرُ الذَّابِلُ جَمَالُ بَهَائِهِ الَّذِي عَلَى رَأْسِ وَادِي السَّمَائِنِ كَبَاكُورَةِ التِّينِ قَبْلَ الصَّيْفِ الَّتِي يَرَاهَا النَّاظِرُ فَيَبْلَعُهَا وَهِيَ فِي يَدِهِ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">In that day the Lord of hosts will be For a crown of glory and a diadem of beauty To the remnant of His people,</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ يَكُونُ رَبُّ الْجُنُودِ إِكْلِيلَ جَمَالٍ وَتَاجَ بَهَاءٍ لِبَقِيَّةِ شَعْبِهِ</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">For a spirit of justice to him who sits in judgment, And for strength to those who turn back the battle at the gate.</td>
        <td class="arabic">وَرُوحَ الْقَضَاءِ لِلْجَالِسِ لِلْقَضَاءِ وَبَأْساً لِلَّذِينَ يَرُدُّونَ الْحَرْبَ إِلَى الْبَابِ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">But they also have erred through wine, And through intoxicating drink are out of the way; The priest and the prophet have erred through intoxicating drink, They are swallowed up by wine, They are out of the way through intoxicating drink; They err in vision, they stumble in judgment.</td>
        <td class="arabic">وَلَكِنَّ هَؤُلاَءِ أَيْضاً ضَلُّوا بِالْخَمْرِ وَتَاهُوا بِالْمُسْكِرِ. الْكَاهِنُ وَالنَّبِيُّ تَرَنَّحَا بِالْمُسْكِرِ. ابْتَلَعَتْهُمَا الْخَمْرُ. تَاهَا مِنَ الْمُسْكِرِ. ضَلاَّ فِي الرُّؤْيَا. قَلِقَا فِي الْقَضَاءِ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">For all tables are full of vomit and filth; No place is clean.</td>
        <td class="arabic">فَإِنَّ جَمِيعَ الْمَوَائِدِ امْتَلَأَتْ قَيْئاً وَقَذَراً. لَيْسَ مَكَانٌ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">"Whom will he teach knowledge? And whom will he make to understand the message? Those just weaned from milk? Those just drawn from the breasts?</td>
        <td class="arabic">لِمَنْ يُعَلِّمُ مَعْرِفَةً وَلِمَنْ يُفْهِمُ تَعْلِيماً؟ أَلِلْمَفْطُومِينَ عَنِ اللَّبَنِ لِلْمَفْصُولِينَ عَنِ الثُّدِيِّ؟</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">For precept must be upon precept, precept upon precept, Line upon line, line upon line, Here a little, there a little."</td>
        <td class="arabic">لأَنَّهُ أَمْرٌ عَلَى أَمْرٍ. أَمْرٌ عَلَى أَمْرٍ. فَرْضٌ عَلَى فَرْضٍ. فَرْضٌ عَلَى فَرْضٍ. هُنَا قَلِيلٌ هُنَاكَ قَلِيلٌ.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">For with stammering lips and another tongue He will speak to this people,</td>
        <td class="arabic">إِنَّهُ بِشَفَةٍ لَكْنَاءَ وَبِلِسَانٍ آخَرَ يُكَلِّمُ هَذَا الشَّعْبَ</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">To whom He said, "This is the rest with which You may cause the weary to rest," And, "This is the refreshing"; Yet they would not hear.</td>
        <td class="arabic">الَّذِينَ قَالَ لَهُمْ: «هَذِهِ هِيَ الرَّاحَةُ. أَرِيحُوا الرَّازِحَ وَهَذَا هُوَ السُّكُونُ». وَلَكِنْ لَمْ يَشَاؤُوا أَنْ يَسْمَعُوا.</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">But the word of the Lord was to them, "Precept upon precept, precept upon precept, Line upon line, line upon line, Here a little, there a little," That they might go and fall backward, and be broken And snared and caught.</td>
        <td class="arabic">فَكَانَ لَهُمْ قَوْلُ الرَّبِّ: «أَمْراً عَلَى أَمْرٍ. أَمْراً عَلَى أَمْرٍ. فَرْضاً عَلَى فَرْضٍ. فَرْضاً عَلَى فَرْضٍ. هُنَا قَلِيلاً هُنَاكَ قَلِيلاً» لِيَذْهَبُوا وَيَسْقُطُوا إِلَى الْوَرَاءِ وَيَنْكَسِرُوا وَيُصَادُوا فَيُؤْخَذُوا.</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">Therefore hear the word of the Lord, you scornful men, Who rule this people who are in Jerusalem,</td>
        <td class="arabic">لِذَلِكَ اسْمَعُوا كَلاَمَ الرَّبِّ يَا رِجَالَ الْهُزْءِ وُلاَةَ هَذَا الشَّعْبِ الَّذِي فِي أُورُشَلِيمَ.</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">Because you have said, "We have made a covenant with death, And with Sheol we are in agreement. When the overflowing scourge passes through, It will not come to us, For we have made lies our refuge, And under falsehood we have hidden ourselves."</td>
        <td class="arabic">لأَنَّكُمْ قُلْتُمْ: «قَدْ عَقَدْنَا عَهْداً مَعَ الْمَوْتِ وَصَنَعْنَا مِيثَاقاً مَعَ الْهَاوِيَةِ. السَّوْطُ الْجَارِفُ إِذَا عَبَرَ لاَ يَأْتِينَا لأَنَّنَا جَعَلْنَا الْكَذِبَ مَلْجَأَنَا وَبِالْغِشِّ اسْتَتَرْنَا».</td>
    </tr>
    <tr id="table_3_row_23" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(2:1-2, 4-5)
        <span class="arabic-caption">المزمور قبطي<br>(2:1-2, 4-5)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">Why do the nations rage, And the people plot a vain thing?</td>
            <td class="coptic">Ⲉⲑⲃⲉⲟⲩ ϩⲁⲛⲉⲑⲛⲟⲥ ⲁⲩⲱϣ ⲉⲃⲟⲗ: ⲟⲩⲟϩ ϩⲁⲛⲗⲁⲟⲥ ⲁⲩⲉⲣⲙⲉⲗⲉⲧⲁⲛ ϧⲉⲛ ϩⲁⲛ ⲡⲉⲧϣⲟⲩⲓⲧ.</td>
            <td class="arabic">لماذا ارتجت الأمم وهذت الشعوب بالأباطيل. </td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">The kings of the earth set themselves, And the rulers take counsel together, Against the Lord and against His Anointed</td>
            <td class="coptic">Ⲁⲩⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲟⲩⲟϩ ⲛⲓⲁⲣⲭⲱⲛ ⲁⲩⲑⲱⲟⲩϯ ⲉⲩⲙⲁ ⲉ̀ϯⲟⲩⲃⲉ Ⲡ̀̅ⲟ̅ⲥ ⲛⲉⲙ ⲉ̀ϯⲟⲩⲃⲉ ⲡⲉϥ̅ⲭ̅ⲥ:</td>
            <td class="arabic">قامت ملوك الأرض والرؤساء اجتمعوا معاً على الرب وعلى مسيحه.</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">He who sits in the heavens shall laugh; The Lord shall hold them in derision.</td>
            <td class="coptic">Ⲡⲉⲧϣⲟⲡ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲉϥⲉ̀ⲥⲱⲃⲓ ⲙ̀ⲙⲱⲟⲩ: ⲟⲩⲟϩ Ⲡ̀̅ⲟ̅ⲥ ⲉϥⲉⲉ̀ⲗⲕϣⲁⲓ ⲛ̀ⲥⲱⲟⲩ:</td>
            <td class="arabic">الساكن في السموات يضحك بهم والرب يمقتهم.</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">Then He shall speak to them in His wrath, And distress them in His deep displeasure.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲉϥⲉ̀ⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉϥϫⲱⲛⲧ: ⲟⲩⲟϩ ⲛ̀ϧ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉϥⲙ̀ⲃⲟⲛ ⲉϥⲉ̀ϣ̀ⲧⲉⲣⲑⲱⲣⲟ</td>
            <td class="arabic">حينئذ يكلمهم بغضبه وبرجزه يقلقهم.</td>
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
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲛⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ ⲇⲉ ⲛⲉⲙ ⲡⲓⲙⲁⲛϯϩⲁⲡⲧⲏⲣϥ ⲛⲁⲩⲕⲱϯ ⲛⲥⲁⲟⲩⲙⲉⲧⲙⲉⲑⲣⲉ ⲛⲛⲟⲩϫ ϧⲁ Ⲓⲏⲥ ϩⲓⲛⲁ ⲛⲥⲉϧⲟⲑⲃⲉϥ Ⲟⲩⲟϩ ⲙⲡⲟⲩϫⲓⲙⲓ: ⲉⲁⲩⲓ ⲛϫⲉ ⲟⲩⲙⲏϣ ⲙⲙⲉⲑⲣⲉ ⲛⲛⲟⲩϫ:<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_5" class="text">
            <td class="coptic">Ⲛⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ ⲇⲉ ⲛⲉⲙ ⲡⲓⲙⲁⲛϯϩⲁⲡ ⲧⲏⲣϥ : ⲛⲁⲩⲕⲱϯ ⲛⲥⲁ ⲟⲩⲙⲉⲧ-ⲙⲉⲑⲣⲉ ϧⲁ Ⲓⲏⲥ ⲉⲡϫⲓⲛϧⲟⲑⲃⲉϥ ⲟⲩⲟϩ ⲛⲁⲩϫⲓⲙⲓ ⲁⲛ ⲡⲉ Ⲛⲁⲣⲉ ⲟⲩⲙⲏϣ ⲅⲁⲣ ⲉⲣⲙⲉⲑⲣⲉ ⲛⲛⲟⲩϫ ϧⲁⲣⲟϥ ⲡⲉ :<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_8_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_8" class="text">
            <td class="coptic">Ⲥⲉⲧⲁⲥⲛⲁⲩ ⲉⲡⲉⲧⲣⲟⲥ ⲛϫⲉ ⲟⲩⲁⲗⲟⲩ ⲙⲃⲱⲕⲓ ⲉϥϩⲉⲙⲥⲓ ϧⲁⲧⲉⲛ ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲟⲩⲟϩ ⲉⲧⲁⲥⲥⲟⲙⲥ ⲉⲣⲟϥ ⲡⲉϫⲁⲥ: ϫⲉ ⲛⲁⲣⲉ ⲫⲁⲓ ϩⲱϥ ⲭⲏ ⲛⲉⲙⲁϥ ⲡⲉ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_8_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_11" class="text">
            <td class="coptic">Ⲛⲁϥⲙⲟϣⲓ ⲇⲉ ⲡⲉ ⲛⲥⲁ ⲓ̅ⲏ̅ⲥ ⲛϫⲉ Ⲥⲓⲙⲱⲛ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ ⲡⲓⲕⲉⲙⲁⲑⲏⲧⲏⲥ: Ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲇⲉ ⲉⲧⲉ ⲙⲙⲁⲩ ⲛⲁϥⲟⲓ ⲛⲥⲟⲩⲓⲛ ⲡⲉ ⲛⲧⲉ ⲡⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ : ⲟⲩⲟϩ ⲁϥⲓ ⲉϧⲟⲩⲛ ⲛⲉⲙ Ⲓ̅ⲏ̅ⲥ ϯⲁⲩⲗⲏ ⲛⲧⲉ ⲡⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">


<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(2:1-2, 4-5)
    <span class="arabic-caption">المزمور<br>(2: 1- 2 و  4-5)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">Why do the nations rage, And the people plot a vain thing?</td>
        <td class="arabic">لِمَاذَا ارْتَجَّتِ الأُمَمُ وَتَفَكَّرَ الشُّعُوبُ فِي الْبَاطِلِ؟</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">The kings of the earth set themselves, And the rulers take counsel together, Against the Lord and against His Anointed. Alleulia.</td>
        <td class="arabic">قَامَ مُلُوكُ الأَرْضِ وَتَآمَرَ الرُّؤَسَاءُ مَعاً عَلَى الرَّبِّ وَعَلَى مَسِيحِهِ قَائِلِينَ</td>
    </tr>
    <tr id="table_9_row_6" class="text">
        <td class="english">He who sits in the heavens shall laugh; The Lord shall hold them in derision.</td>
        <td class="arabic">اَلسَّاكِنُ فِي السَّمَاوَاتِ يَضْحَكُ. الرَّبُّ يَسْتَهْزِئُ بِهِمْ.</td>
    </tr>
    <tr id="table_9_row_7" class="text">
        <td class="english">Then He shall speak to them in His wrath, And distress them in His deep displeasure:</td>
        <td class="arabic">حِينَئِذٍ يَتَكَلَّمُ عَلَيْهِمْ بِغَضَبِهِ وَيَرْجُفُهُمْ بِغَيْظِهِ.
.</td>
    </tr>
    <tr id="table_9_row_9" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Matthew 26:59-75)
    <span class="arabic-caption">الانجيل<br>(متى 26: 59-75)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">Now the chief priests, the elders, and all the council sought false testimony against Jesus to put Him to death,</td>
        <td class="arabic">وَكَانَ رُؤَسَاءُ الْكَهَنَةِ وَالشُّيُوخُ وَالْمَجْمَعُ كُلُّهُ يَطْلُبُونَ شَهَادَةَ زُورٍ عَلَى يَسُوعَ لِكَيْ يَقْتُلُوهُ</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">but found none. Even though many false witnesses came forward, they found none. came forward</td>
        <td class="arabic">فَلَمْ يَجِدُوا. وَمَعَ أَنَّهُ جَاءَ شُهُودُ زُورٍ كَثِيرُونَ لَمْ يَجِدُوا. وَلَكِنْ أَخِيراً تَقَدَّمَ شَاهِدَا زُورٍ</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">and said, "This fellow said, 'I am able to destroy the temple of God and to build it in three days.' "</td>
        <td class="arabic">وَقَالاَ: «هَذَا قَالَ إِنِّي أَقْدِرُ أَنْ أَنْقُضَ هَيْكَلَ اللَّهِ وَفِي ثَلاَثَةِ أَيَّامٍ أَبْنِيهِ».</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">And the high priest arose and said to Him, "Do You answer nothing? What is it these men testify against You?"</td>
        <td class="arabic">فَقَامَ رَئِيسُ الْكَهَنَةِ وَقَالَ لَهُ: «أَمَا تُجِيبُ بِشَيْءٍ؟ مَاذَا يَشْهَدُ بِهِ هَذَانِ عَلَيْكَ؟»</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">But Jesus kept silent. And the high priest answered and said to Him, "I put You under oath by the living God: Tell us if You are the Christ, the Son of God!"</td>
        <td class="arabic">وَأَمَّا يَسُوعُ فَكَانَ سَاكِتاً. فَسَأَلَهُ رَئِيسُ الْكَهَنَةِ: «أَسْتَحْلِفُكَ بِاللَّهِ الْحَيِّ أَنْ تَقُولَ لَنَا: هَلْ أَنْتَ الْمَسِيحُ ابْنُ اللَّهِ؟»</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">Jesus said to him, "It is as you said. Nevertheless, I say to you, hereafter you will see the Son of Man sitting at the right hand of the Power, and coming on the clouds of heaven."</td>
        <td class="arabic">قَالَ لَهُ يَسُوعُ: «أَنْتَ قُلْتَ! وَأَيْضاً أَقُولُ لَكُمْ: مِنَ الآنَ تُبْصِرُونَ ابْنَ الإِنْسَانِ جَالِساً عَنْ يَمِينِ الْقُوَّةِ وَآتِياً عَلَى سَحَابِ السَّمَاءِ».</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">Then the high priest tore his clothes, saying, "He has spoken blasphemy! What further need do we have of witnesses? Look, now you have heard His blasphemy!</td>
        <td class="arabic">فَمَزَّقَ رَئِيسُ الْكَهَنَةِ حِينَئِذٍ ثِيَابَهُ قَائِلاً: «قَدْ جَدَّفَ! مَا حَاجَتُنَا بَعْدُ إِلَى شُهُودٍ؟ هَا قَدْ سَمِعْتُمْ تَجْدِيفَهُ!</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">What do you think?" They answered and said, "He is deserving of death."</td>
        <td class="arabic">مَاذَا تَرَوْنَ؟» فَأَجَابُوا: «إِنَّهُ مُسْتَوْجِبُ الْمَوْتِ».</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english">Then they spat in His face and beat Him; and others struck Him with the palms of their hands,</td>
        <td class="arabic">حِينَئِذٍ بَصَقُوا فِي وَجْهِهِ وَلَكَمُوهُ وَآخَرُونَ لَطَمُوهُ</td>
    </tr>
    <tr id="table_10_row_13" class="text">
        <td class="english">saying, "Prophesy to us, Christ! Who is the one who struck You?"</td>
        <td class="arabic">قَائِلِينَ: «تَنَبَّأْ لَنَا أَيُّهَا الْمَسِيحُ مَنْ ضَرَبَكَ؟».</td>
    </tr>
    <tr id="table_10_row_14" class="text">
        <td class="english">Now Peter sat outside in the courtyard. And a servant girl came to him, saying, "You also were with Jesus of Galilee."</td>
        <td class="arabic">أَمَّا بُطْرُسُ فَكَانَ جَالِساً خَارِجاً فِي الدَّارِ فَجَاءَتْ إِلَيْهِ جَارِيَةٌ قَائِلَةً: «وَأَنْتَ كُنْتَ مَعَ يَسُوعَ الْجَلِيلِيِّ».</td>
    </tr>
    <tr id="table_10_row_15" class="text">
        <td class="english">But he denied it before them all, saying, "I do not know what you are saying."</td>
        <td class="arabic">فَأَنْكَرَ قُدَّامَ الْجَمِيعِ قَائِلاً: «لَسْتُ أَدْرِي مَا تَقُولِينَ!»</td>
    </tr>
    <tr id="table_10_row_16" class="text">
        <td class="english">And when he had gone out to the gateway, another girl saw him and said to those who were there, "This fellow also was with Jesus of Nazareth."</td>
        <td class="arabic">ثُمَّ إِذْ خَرَجَ إِلَى الدِّهْلِيزِ رَأَتْهُ أُخْرَى فَقَالَتْ لِلَّذِينَ هُنَاكَ: «وَهَذَا كَانَ مَعَ يَسُوعَ النَّاصِرِيِّ!»</td>
    </tr>
    <tr id="table_10_row_17" class="text">
        <td class="english">But again he denied with an oath, "I do not know the Man!"</td>
        <td class="arabic">فَأَنْكَرَ أَيْضاً بِقَسَمٍ: «إِنِّي لَسْتُ أَعْرِفُ الرَّجُلَ!»</td>
    </tr>
    <tr id="table_10_row_18" class="text">
        <td class="english">And a little later those who stood by came up and said to Peter, "Surely you also are one of them, for your speech betrays you."</td>
        <td class="arabic">وَبَعْدَ قَلِيلٍ جَاءَ الْقِيَامُ وَقَالُوا لِبُطْرُسَ: «حَقّاً أَنْتَ أَيْضاً مِنْهُمْ فَإِنَّ لُغَتَكَ تُظْهِرُكَ!»</td>
    </tr>
    <tr id="table_10_row_19" class="text">
        <td class="english">Then he began to curse and swear, saying, "I do not know the Man!" Immediately a rooster crowed.</td>
        <td class="arabic">فَابْتَدَأَ حِينَئِذٍ يَلْعَنُ وَيَحْلِفُ: «إِنِّي لاَ أَعْرِفُ الرَّجُلَ!» وَلِلْوَقْتِ صَاحَ الدِّيكُ.</td>
    </tr>
    <tr id="table_10_row_20" class="text">
        <td class="english">And Peter remembered the word of Jesus who had said to him, "Before the rooster crows, you will deny Me three times." So he went out and wept bitterly.</td>
        <td class="arabic">فَتَذَكَّرَ بُطْرُسُ كَلاَمَ يَسُوعَ الَّذِي قَالَ لَهُ: «إِنَّكَ قَبْلَ أَنْ يَصِيحَ الدِّيكُ تُنْكِرُنِي ثَلاَثَ مَرَّاتٍ». فَخَرَجَ إِلَى خَارِجٍ وَبَكَى بُكَاءً مُرّاً.</td>
    </tr>
    <tr id="table_10_row_21" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_23" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_11" title="Psalm">
    <caption id="caption_table_11" class="caption">Psalm<br>(2:1-2, 4-5)
    <span class="arabic-caption">المزمور<br>(2: 1- 2 و  4-5)</span></caption>
    <tr id="table_11_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_11_row_4" class="text">
        <td class="english">Why do the nations rage, And the people plot a vain thing?</td>
        <td class="arabic">لِمَاذَا ارْتَجَّتِ الأُمَمُ وَتَفَكَّرَ الشُّعُوبُ فِي الْبَاطِلِ؟</td>
    </tr>
    <tr id="table_11_row_5" class="text">
        <td class="english">The kings of the earth set themselves, And the rulers take counsel together, Against the Lord and against His Anointed. Alleulia.</td>
        <td class="arabic">قَامَ مُلُوكُ الأَرْضِ وَتَآمَرَ الرُّؤَسَاءُ مَعاً عَلَى الرَّبِّ وَعَلَى مَسِيحِهِ قَائِلِينَ</td>
    </tr>
    <tr id="table_11_row_6" class="text">
        <td class="english">He who sits in the heavens shall laugh; The Lord shall hold them in derision.</td>
        <td class="arabic">اَلسَّاكِنُ فِي السَّمَاوَاتِ يَضْحَكُ. الرَّبُّ يَسْتَهْزِئُ بِهِمْ.</td>
    </tr>
    <tr id="table_11_row_7" class="text">
        <td class="english">Then He shall speak to them in His wrath, And distress them in His deep displeasure:</td>
        <td class="arabic">حِينَئِذٍ يَتَكَلَّمُ عَلَيْهِمْ بِغَضَبِهِ وَيَرْجُفُهُمْ بِغَيْظِهِ.
.</td>
    </tr>
    <tr id="table_11_row_9" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_12" title="Gospel">
    <caption id="caption_table_12" class="caption">Gospel<br>(Mark 14:55-72)
    <span class="arabic-caption">الانجيل<br>(مرقس 14: 55-72)</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Now the chief priests and all the council sought testimony against Jesus to put Him to death, but found none.</td>
        <td class="arabic">وَكَانَ رُؤَسَاءُ الْكَهَنَةِ وَالْمَجْمَعُ كُلُّهُ يَطْلُبُونَ شَهَادَةً عَلَى يَسُوعَ لِيَقْتُلُوهُ فَلَمْ يَجِدُوا</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">For many bore false witness against Him, but their testimonies did not agree.</td>
        <td class="arabic">لأَنَّ كَثِيرِينَ شَهِدُوا عَلَيْهِ زُوراً وَلَمْ تَتَّفِقْ شَهَادَاتُهُمْ.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">Then some rose up and bore false witness against Him, saying,</td>
        <td class="arabic">ثُمَّ قَامَ قَوْمٌ وَشَهِدُوا عَلَيْهِ زُوراً قَائِلِينَ:</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">"We heard Him say, 'I will destroy this temple made with hands, and within three days I will build another made without hands.' "</td>
        <td class="arabic">«نَحْنُ سَمِعْنَاهُ يَقُولُ: إِنِّي أَنْقُضُ هَذَا الْهَيْكَلَ الْمَصْنُوعَ بِالأَيَادِي وَفِي ثَلاَثَةِ أَيَّامٍ أَبْنِي آخَرَ غَيْرَ مَصْنُوعٍ بِأَيَادٍ».</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">But not even then did their testimony agree.</td>
        <td class="arabic">وَلاَ بِهَذَا كَانَتْ شَهَادَتُهُمْ تَتَّفِقُ.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">And the high priest stood up in the midst and asked Jesus, saying, "Do You answer nothing? What is it these men testify against You?"</td>
        <td class="arabic">فَقَامَ رَئِيسُ الْكَهَنَةِ فِي الْوَسَطِ وَسَأَلَ يَسُوعَ: «أَمَا تُجِيبُ بِشَيْءٍ؟ مَاذَا يَشْهَدُ بِهِ هَؤُلاَءِ عَلَيْكَ؟»</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english">But He kept silent and answered nothing. Again the high priest asked Him, saying to Him, "Are You the Christ, the Son of the Blessed?"</td>
        <td class="arabic">أَمَّا هُوَ فَكَانَ سَاكِتاً وَلَمْ يُجِبْ بِشَيْءٍ. فَسَأَلَهُ رَئِيسُ الْكَهَنَةِ أَيْضاً: «أَأَنْتَ الْمَسِيحُ ابْنُ الْمُبَارَكِ؟»</td>
    </tr>
    <tr id="table_12_row_11" class="text">
        <td class="english">Jesus said, "I am. And you will see the Son of Man sitting at the right hand of the Power, and coming with the clouds of heaven."</td>
        <td class="arabic">فَقَالَ يَسُوعُ: «أَنَا هُوَ. وَسَوْفَ تُبْصِرُونَ ابْنَ الإِنْسَانِ جَالِساً عَنْ يَمِينِ الْقُوَّةِ وَآتِياً فِي سَحَابِ السَّمَاءِ».</td>
    </tr>
    <tr id="table_12_row_12" class="text">
        <td class="english">Then the high priest tore his clothes and said, "What further need do we have of witnesses?</td>
        <td class="arabic">فَمَزَّقَ رَئِيسُ الْكَهَنَةِ ثِيَابَهُ وَقَالَ: «مَا حَاجَتُنَا بَعْدُ إِلَى شُهُودٍ؟</td>
    </tr>
    <tr id="table_12_row_13" class="text">
        <td class="english">You have heard the blasphemy! What do you think?" And they all condemned Him to be deserving of death.</td>
        <td class="arabic">قَدْ سَمِعْتُمُ التَّجَادِيفَ! مَا رَأْيُكُمْ؟» فَالْجَمِيعُ حَكَمُوا عَلَيْهِ أَنَّهُ مُسْتَوْجِبُ الْمَوْتِ.</td>
    </tr>
    <tr id="table_12_row_14" class="text">
        <td class="english">Then some began to spit on Him, and to blindfold Him, and to beat Him, and to say to Him, "Prophesy!" And the officers struck Him with the palms of their hands.</td>
        <td class="arabic">فَابْتَدَأَ قَوْمٌ يَبْصُقُونَ عَلَيْهِ وَيُغَطُّونَ وَجْهَهُ وَيَلْكُمُونَهُ وَيَقُولُونَ لَهُ: «تَنَبَّأْ». وَكَانَ الْخُدَّامُ يَلْطِمُونَهُ.</td>
    </tr>
    <tr id="table_12_row_15" class="text">
        <td class="english">Now as Peter was below in the courtyard, one of the servant girls of the high priest came.</td>
        <td class="arabic">وَبَيْنَمَا كَانَ بُطْرُسُ فِي الدَّارِ أَسْفَلَ جَاءَتْ إِحْدَى جَوَارِي رَئِيسِ الْكَهَنَةِ.</td>
    </tr>
    <tr id="table_12_row_16" class="text">
        <td class="english">And when she saw Peter warming himself, she looked at him and said, "You also were with Jesus of Nazareth."</td>
        <td class="arabic">فَلَمَّا رَأَتْ بُطْرُسَ يَسْتَدْفِئُ نَظَرَتْ إِلَيْهِ وَقَالَتْ: «وَأَنْتَ كُنْتَ مَعَ يَسُوعَ النَّاصِرِيِّ!»</td>
    </tr>
    <tr id="table_12_row_17" class="text">
        <td class="english">But he denied it, saying, "I neither know nor understand what you are saying." And he went out on the porch, and a rooster crowed.</td>
        <td class="arabic">فَأَنْكَرَ قَائِلاً: «لَسْتُ أَدْرِي وَلاَ أَفْهَمُ مَا تَقُولِينَ!» وَخَرَجَ خَارِجاً إِلَى الدِّهْلِيزِ فَصَاحَ الدِّيكُ.</td>
    </tr>
    <tr id="table_12_row_18" class="text">
        <td class="english">And the servant girl saw him again, and began to say to those who stood by, "This is one of them."</td>
        <td class="arabic">فَرَأَتْهُ الْجَارِيَةُ أَيْضاً وَابْتَدَأَتْ تَقُولُ لِلْحَاضِرِينَ: «إِنَّ هَذَا مِنْهُمْ!»</td>
    </tr>
    <tr id="table_12_row_19" class="text">
        <td class="english">But he denied it again. And a little later those who stood by said to Peter again, "Surely you are one of them; for you are a Galilean, and your speech shows it."</td>
        <td class="arabic">فَأَنْكَرَ أَيْضاً. وَبَعْدَ قَلِيلٍ أَيْضاً قَالَ الْحَاضِرُونَ لِبُطْرُسَ: «حَقّاً أَنْتَ مِنْهُمْ لأَنَّكَ جَلِيلِيٌّ أَيْضاً وَلُغَتُكَ تُشْبِهُ لُغَتَهُمْ».</td>
    </tr>
    <tr id="table_12_row_20" class="text">
        <td class="english">Then he began to curse and swear, "I do not know this Man of whom you speak!"</td>
        <td class="arabic">فَابْتَدَأَ يَلْعَنُ وَيَحْلِفُ: «إِنِّي لاَ أَعْرِفُ هَذَا الرَّجُلَ الَّذِي تَقُولُونَ عَنْهُ!»</td>
    </tr>
    <tr id="table_12_row_21" class="text">
        <td class="english">A second time the rooster crowed. Then Peter called to mind the word that Jesus had said to him, "Before the rooster crows twice, you will deny Me three times." And when he thought about it, he wept.</td>
        <td class="arabic">وَصَاحَ الدِّيكُ ثَانِيَةً فَتَذَكَّرَ بُطْرُسُ الْقَوْلَ الَّذِي قَالَهُ لَهُ يَسُوعُ: «إِنَّكَ قَبْلَ أَنْ يَصِيحَ الدِّيكُ مَرَّتَيْنِ تُنْكِرُنِي ثَلاَثَ مَرَّاتٍ». فَلَمَّا تَفَكَّرَ بِهِ بَكَى.</td>
    </tr>
    <tr id="table_12_row_22" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_12_row_24" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_13" title="Gospel">
    <caption id="caption_table_13" class="caption">Gospel<br>(Luke 22:56-65)
    <span class="arabic-caption">الانجيل<br>(لوقا 22: 56-65)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St.  Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">And a certain servant girl, seeing him as he sat by the fire, looked intently at him and said, "This man was also with Him."</td>
        <td class="arabic">فَرَأَتْهُ جَارِيَةٌ جَالِساً عِنْدَ النَّارِ فَتَفَرَّسَتْ فيهِ وَقَالَتْ: «وَهَذَا كَانَ مَعَهُ».</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">But he denied Him, saying, "Woman, I do not know Him."</td>
        <td class="arabic">فَأَنْكَرَهُ قَائِلاً: «لَسْتُ أَعْرِفُهُ يَا امْرَأَةُ!»</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">And after a little while another saw him and said, "You also are of them." But Peter said, "Man, I am not!"</td>
        <td class="arabic">وَبَعْدَ قَلِيلٍ رَآهُ آخَرُ وَقَالَ: «وَأَنْتَ مِنْهُمْ!» فَقَالَ بُطْرُسُ: «يَا إِنْسَانُ لَسْتُ أَنَا!»</td>
    </tr>
    <tr id="table_13_row_7" class="text">
        <td class="english">Then after about an hour had passed, another confidently affirmed, saying, "Surely this fellow also was with Him, for he is a Galilean."</td>
        <td class="arabic">وَلَمَّا مَضَى نَحْوُ سَاعَةٍ وَاحِدَةٍ أَكَّدَ آخَرُ قَائِلاً: «بِالْحَقِّ إِنَّ هَذَا أَيْضاً كَانَ مَعَهُ لأَنَّهُ جَلِيلِيٌّ أَيْضاً».</td>
    </tr>
    <tr id="table_13_row_8" class="text">
        <td class="english">But Peter said, "Man, I do not know what you are saying!" Immediately, while he was still speaking, the rooster crowed.</td>
        <td class="arabic">فَقَالَ بُطْرُسُ: «يَا إِنْسَانُ لَسْتُ أَعْرِفُ مَا تَقُولُ». وَفِي الْحَالِ بَيْنَمَا هُوَ يَتَكَلَّمُ صَاحَ الدِّيكُ.</td>
    </tr>
    <tr id="table_13_row_9" class="text">
        <td class="english">And the Lord turned and looked at Peter. And Peter remembered the word of the Lord, how He had said to him, "Before the rooster crows*, you will deny Me three times."</td>
        <td class="arabic">فَالْتَفَتَ الرَّبُّ وَنَظَرَ إِلَى بُطْرُسَ فَتَذَكَّرَ بُطْرُسُ كَلاَمَ الرَّبِّ كَيْفَ قَالَ لَهُ: «إِنَّكَ قَبْلَ أَنْ يَصِيحَ الدِّيكُ تُنْكِرُنِي ثَلاَثَ مَرَّاتٍ».</td>
    </tr>
    <tr id="table_13_row_10" class="text">
        <td class="english">So Peter went out and wept bitterly.</td>
        <td class="arabic">فَخَرَجَ بُطْرُسُ إِلَى خَارِجٍ وَبَكَى بُكَاءً مُرّاً.</td>
    </tr>
    <tr id="table_13_row_11" class="text">
        <td class="english">Now the men who held Jesus mocked Him and beat Him.</td>
        <td class="arabic">وَالرِّجَالُ الَّذِينَ كَانُوا ضَابِطِينَ يَسُوعَ كَانُوا يَسْتَهْزِئُونَ بِهِ وَهُمْ يَجْلِدُونَهُ</td>
    </tr>
    <tr id="table_13_row_12" class="text">
        <td class="english">And having blindfolded Him, they struck Him on the face and asked Him, saying, "Prophesy! Who is the one who struck You?"</td>
        <td class="arabic">وَغَطَّوْهُ وَكَانُوا يَضْرِبُونَ وَجْهَهُ وَيَسْأَلُونَهُ: «تَنَبَّأْ! مَنْ هُوَ الَّذِي ضَرَبَكَ؟»</td>
    </tr>
    <tr id="table_13_row_13" class="text">
        <td class="english">And many other things they blasphemously spoke against Him.</td>
        <td class="arabic">وَأَشْيَاءَ أُخَرَ كَثِيرَةً كَانُوا يَقُولُونَ عَلَيْهِ مُجَدِّفِينَ.</td>
    </tr>
    <tr id="table_13_row_14" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_13_row_16" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(John 18: 15-27)
    <span class="arabic-caption">الانجيل<br>(يوحنا 18: 15-27)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">And Simon Peter followed Jesus, and so did another disciple. Now that disciple was known to the high priest, and went with Jesus into the courtyard of the high priest.</td>
        <td class="arabic">وَكَانَ سِمْعَانُ بُطْرُسُ وَالتِّلْمِيذُ الآخَرُ يَتْبَعَانِ يَسُوعَ وَكَانَ ذَلِكَ التِّلْمِيذُ مَعْرُوفاً عِنْدَ رَئِيسِ الْكَهَنَةِ فَدَخَلَ مَعَ يَسُوعَ إِلَى دَارِ رَئِيسِ الْكَهَنَةِ.</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">But Peter stood at the door outside. Then the other disciple, who was known to the high priest, went out and spoke to her who kept the door, and brought Peter in.</td>
        <td class="arabic">وَأَمَّا بُطْرُسُ فَكَانَ وَاقِفاً عِنْدَ الْبَابِ خَارِجاً. فَخَرَجَ التِّلْمِيذُ الآخَرُ الَّذِي كَانَ مَعْرُوفاً عِنْدَ رَئِيسِ الْكَهَنَةِ وَكَلَّمَ الْبَوَّابَةَ فَأَدْخَلَ بُطْرُسَ.</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">Then the servant girl who kept the door said to Peter, "You are not also one of this Man's disciples, are you?" He said, "I am not."</td>
        <td class="arabic">فَقَالَتِ الْجَارِيَةُ الْبَوَّابَةُ لِبُطْرُسَ: «أَلَسْتَ أَنْتَ أَيْضاً مِنْ تلاَمِيذِ هَذَا الإِنْسَانِ؟» قَالَ ذَاكَ: «لَسْتُ أَنَا».</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">Now the servants and officers who had made a fire of coals stood there, for it was cold, and they warmed themselves. And Peter stood with them and warmed himself.</td>
        <td class="arabic">وَكَانَ الْعَبِيدُ وَالْخُدَّامُ وَاقِفِينَ وَهُمْ قَدْ أَضْرَمُوا جَمْراً لأَنَّهُ كَانَ بَرْدٌ وَكَانُوا يَصْطَلُونَ وَكَانَ بُطْرُسُ وَاقِفاً مَعَهُمْ يَصْطَلِي.</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">The high priest then asked Jesus about His disciples and His doctrine.</td>
        <td class="arabic">فَسَأَلَ رَئِيسُ الْكَهَنَةِ يَسُوعَ عَنْ تلاَمِيذِهِ وَعَنْ تَعْلِيمِهِ.</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">Jesus answered him, "I spoke openly to the world. I always taught in synagogues and in the temple, where the Jews always meet, and in secret I have said nothing.</td>
        <td class="arabic">أَجَابَهُ يَسُوعُ: «أَنَا كَلَّمْتُ الْعَالَمَ علاَنِيَةً. أَنَا عَلَّمْتُ كُلَّ حِينٍ فِي الْمَجْمَعِ وَفِي الْهَيْكَلِ حَيْثُ يَجْتَمِعُ الْيَهُودُ دَائِماً. وَفِي الْخَفَاءِ لَمْ أَتَكَلَّمْ بِشَيْءٍ.</td>
    </tr>
    <tr id="table_14_row_10" class="text">
        <td class="english">Why do you ask Me? Ask those who have heard Me what I said to them. Indeed they know what I said."</td>
        <td class="arabic">لِمَاذَا تَسْأَلُنِي أَنَا؟ اِسْأَلِ الَّذِينَ قَدْ سَمِعُوا مَاذَا كَلَّمْتُهُمْ. هُوَذَا هَؤُلاَءِ يَعْرِفُونَ مَاذَا قُلْتُ أَنَا».</td>
    </tr>
    <tr id="table_14_row_11" class="text">
        <td class="english">And when He had said these things, one of the officers who stood by struck Jesus with the palm of his hand, saying, "Do You answer the high priest like that?"</td>
        <td class="arabic">وَلَمَّا قَالَ هَذَا لَطَمَ يَسُوعَ وَاحِدٌ مِنَ الْخُدَّامِ كَانَ وَاقِفاً قَائِلاً: «أَهَكَذَا تُجَاوِبُ رَئِيسَ الْكَهَنَةِ؟»</td>
    </tr>
    <tr id="table_14_row_12" class="text">
        <td class="english">Jesus answered him, "If I have spoken evil, bear witness of the evil; but if well, why do you strike Me?"</td>
        <td class="arabic">أَجَابَهُ يَسُوعُ: «إِنْ كُنْتُ قَدْ تَكَلَّمْتُ رَدِيّاً فَاشْهَدْ عَلَى الرَّدِيِّ وَإِنْ حَسَناً فَلِمَاذَا تَضْرِبُنِي؟»</td>
    </tr>
    <tr id="table_14_row_13" class="text">
        <td class="english">Then Annas sent Him bound to Caiaphas the high priest.</td>
        <td class="arabic">وَكَانَ حَنَّانُ قَدْ أَرْسَلَهُ مُوثَقاً إِلَى قَيَافَا رَئِيسِ الْكَهَنَةِ.</td>
    </tr>
    <tr id="table_14_row_14" class="text">
        <td class="english">Now Simon Peter stood and warmed himself. Therefore they said to him, "You are not also one of His disciples, are you?" He denied it and said, "I am not!"</td>
        <td class="arabic">وَسِمْعَانُ بُطْرُسُ كَانَ وَاقِفاً يَصْطَلِي. فَقَالُوا لَهُ: «أَلَسْتَ أَنْتَ أَيْضاً مِنْ تلاَمِيذِهِ؟» فَأَنْكَرَ ذَاكَ وَقَالَ: «لَسْتُ أَنَا».</td>
    </tr>
    <tr id="table_14_row_15" class="text">
        <td class="english">One of the servants of the high priest, a relative of him whose ear Peter cut off, said, "Did I not see you in the garden with Him?"</td>
        <td class="arabic">قَالَ وَاحِدٌ مِنْ عَبِيدِ رَئِيسِ الْكَهَنَةِ وَهُوَ نَسِيبُ الَّذِي قَطَعَ بُطْرُسُ أُذْنَهُ: «أَمَا رَأَيْتُكَ أَنَا مَعَهُ فِي الْبُسْتَانِ؟»</td>
    </tr>
    <tr id="table_14_row_16" class="text">
        <td class="english">Peter then denied again; and immediately a rooster crowed.</td>
        <td class="arabic">فَأَنْكَرَ بُطْرُسُ أَيْضاً. وَلِلْوَقْتِ صَاحَ الدِّيكُ.</td>
    </tr>
    <tr id="table_14_row_17" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_14_row_19" class="intro">
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
        <td class="english">The exposition of the ELEVENTH Hour of the EVE of GOOD FRIDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من ليلة الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">Listen to David, the king of Jerusalem, rebuke its dwellers saying,</td>
        <td class="arabic">اسمعوا داود ملك أورشليم يبكت رجالها والسكان فيها قائلاً:</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">“Why do the nations conspire, and the peoples plot in vain?</td>
        <td class="arabic">لماذا رفعت الأمم أصواتها، وتكلمت الشعوب بالأباطيل؟</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">The kings of the earth set themselves and the rulers take counsel together against the Lord and His Christ.”</td>
        <td class="arabic">قامت ملوك الأرض، واجتمع رؤساؤها معاً. هؤلاء اجتمعوا على الرب وعلى مسيحه مخلص العالم.</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">David knew by inspiration of the Holy Spirit what would happen to Jerusalem, which became a corrupt council under the control of the high priest.</td>
        <td class="arabic">علم داود بالروح القدس ما سيكون بأورشليم التى صار مجمع باطل فى دار رئيس كهنتها.</td>
    </tr>
    <tr id="table_16_row_8" class="text">
        <td class="english">They sought a false testimony against Jesus so that they may condemn Him to death.</td>
        <td class="arabic">فانهم كانوا يطلبون شهادة زور على يسوع ليحكموا عليه بحكم الموت.</td>
    </tr>
    <tr id="table_16_row_9" class="text">
        <td class="english">Many testified against Him but their testimonies were not in accord.  But at last, two false witnesses came forward and testified that He said,</td>
        <td class="arabic">فشهد عليه رجال كثيرون فلم تتفق شهادتهم إلا رجلان جاءا أخيراً وشهدا هكذا أمام المجمع بأنه قال:</td>
    </tr>
    <tr id="table_16_row_10" class="text">
        <td class="english">“Destroy the temple and I will rebuild it in three days.” The high priest asked Him, “Why don’t You reply.</td>
        <td class="arabic">انقضوا هذا الهيكل وأنا أقيمه فى ثلاثة أيام. قال رئيس الكهنة: لم لا تجيبنى؟</td>
    </tr>
    <tr id="table_16_row_11" class="text">
        <td class="english">If You are the Son of God, tell the truth.” Jesus replied, “It is as you said.”</td>
        <td class="arabic">ان كنت أنت ابن الله فقل الحق. أنت الذى قلت انى انا ابن الله.</td>
    </tr>
    <tr id="table_16_row_12" class="text">
        <td class="english">Then the high priest rent his robe and said, “We don’t need any testimony.</td>
        <td class="arabic">فشق رئيس الكهنة ثيابه وقال: لسنا نحتاج إلى شهادة.</td>
    </tr>
    <tr id="table_16_row_13" class="text">
        <td class="english">He has uttered blasphemy and we heard it.”</td>
        <td class="arabic">قد جدف، وتجديفه سمعناه.</td>
    </tr>
    <tr id="table_16_row_14" class="text">
        <td class="english">During all this, Simon Peter was standing outside. A maid came up to him and said,</td>
        <td class="arabic">وفى هذا كله كان سمعان بطرس واقفاً يصطلى، فقال له واحد:</td>
    </tr>
    <tr id="table_16_row_15" class="text">
        <td class="english">“You also were with Jesus of Galilee,” and he denied it.</td>
        <td class="arabic">أنت تلميذ لهذا الجليلى. فقال: لا.</td>
    </tr>
    <tr id="table_16_row_16" class="text">
        <td class="english">Then another saw him and said to him, “You are also a Galilean,” Peter replied, “Not I.”</td>
        <td class="arabic">وآخر قال: أنت أيضاً رجل جليلى. فقال: لست أنا.</td>
    </tr>
    <tr id="table_16_row_17" class="text">
        <td class="english">Then the third time, another said to him, “I saw you with Him in the garden.”</td>
        <td class="arabic">وفى ثالث مرة قال له آخر: أنا رأيتك معه فى البستان.</td>
    </tr>
    <tr id="table_16_row_18" class="text">
        <td class="english">This time, Peter said, “I don’t know what you are talking about.”</td>
        <td class="arabic">فحرم نفسه وحده قائلاً: انى لا أعرف ما تقولون.</td>
    </tr>
    <tr id="table_16_row_19" class="text">
        <td class="english">When the cock crew, Peter became aware of what he had done, left and wept bitterly.</td>
        <td class="arabic">وعندما صاح الديك تيقظ بطرس وخرج إلى خارج وبكى بكاء مراً.</td>
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