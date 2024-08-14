import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOM1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","DAY of MONDAY","يوم الإثنين");
    const paschalPraiseHtml = paschalPraise1("4","14","15","FIRST","الأولى","DAY of MONDAY","يوم الإثنين");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲧ̀ⲁⲣⲭⲏ ⲛ̀ϯⲅⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ϧⲉⲛ ⲟⲩⲁⲣⲭⲏ ̀̀ⲁⲫϯ ⲑⲁⲙⲓⲟ ⲛ̀ⲧⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ : ⲡ̀ⲕⲁϩⲓ ⲇⲉ ⲛⲉ ⲟⲩⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲡⲉ ⲟⲩⲟϩ ⲛ̀ⲁⲧⲥⲟⲃϯ. ⲟⲩⲟϩ ⲟⲩⲭⲁⲕⲓ ⲛⲁϥⲭⲏ ϩⲓϫⲉⲛ ⲫ̀ⲛⲟⲩⲛ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲉⲓ̀̀ⲉϯⲱ̀ⲟⲩ ⲙ̀ⲫⲏⲉ̀ⲧⲁⲩⲙⲉⲛⲣⲓⲧϥ ϧⲉⲛ ⲟⲩϫⲱ ⲛ̀ⲧⲉ ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ ⲡⲁⲓ ⲓⲁϩⲁ̀ⲗⲟⲗⲓ : Ⲟⲩⲙⲁ ⲛ̀ⲁ̀ⲗⲟⲗⲓ ⲁϥϣⲱⲡⲓ ⲙ̀ⲡⲓⲙⲉⲛⲣⲓⲧ ϧⲉⲛ ⲟⲩϩⲱⲡ ϧⲉⲛ ⲟⲩⲙⲁ ⲉϥⲕⲉⲛⲓⲱ̀ⲟⲩⲧ :</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲓⲏⲥⲟⲩ ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲧⲥⲟⲫⲓⲁ̀ ⲧⲏⲣⲥ ⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡ̀⳪ : ⲟⲩⲟϩ ⲥ̀ϣⲟⲡ ⲛⲉⲙⲁϥ ϣⲁ ⲉ̀ⲛⲉϩ : ⲛⲓⲙ ⲉⲑⲛⲁϣⲱⲡ ⲙ̀ⲡⲓϣⲱ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ ⲛⲉⲙ ⲛⲓⲧⲉⲗⲧⲓⲗⲓ ⲙ̀ⲙⲟⲩⲛϩⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ :</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>

    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Genesis 1:1-2:3)
    <span class="arabic-caption">النبوة الأولي<br>(تكوين 1: 1 - 2: 3)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">In the beginning God created the heavens and the earth.</td>
        <td class="arabic">فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالارْضَ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters.</td>
        <td class="arabic">وَكَانَتِ الارْضُ خَرِبَةً وَخَالِيَةً وَعَلَى وَجْهِ الْغَمْرِ ظُلْمَةٌ وَرُوحُ اللهِ يَرِفُّ عَلَى وَجْهِ الْمِيَاهِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Then God said, "Let there be light"; and there was light.</td>
        <td class="arabic">وَقَالَ اللهُ: «لِيَكُنْ نُورٌ» فَكَانَ نُورٌ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">And God saw the light, that it was good; and God divided the light from the darkness.</td>
        <td class="arabic">وَرَاى اللهُ النُّورَ انَّهُ حَسَنٌ. وَفَصَلَ اللهُ بَيْنَ النُّورِ وَالظُّلْمَةِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">God called the light Day, and the darkness He called Night. So the evening and the morning were the first day.</td>
        <td class="arabic">وَدَعَا اللهُ النُّورَ نَهَارا وَالظُّلْمَةُ دَعَاهَا لَيْلا. وَكَانَ مَسَاءٌ وَكَانَ صَبَاحٌ يَوْما وَاحِدا.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Then God said, "Let there be a firmament in the midst of the waters, and let it divide the waters from the waters."</td>
        <td class="arabic">وَقَالَ اللهُ: «لِيَكُنْ جَلَدٌ فِي وَسَطِ الْمِيَاهِ. وَلْيَكُنْ فَاصِلا بَيْنَ مِيَاهٍ وَمِيَاهٍ».</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">Thus God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament; and it was so.</td>
        <td class="arabic">فَعَمِلَ اللهُ الْجَلَدَ وَفَصَلَ بَيْنَ الْمِيَاهِ الَّتِي تَحْتَ الْجَلَدِ وَالْمِيَاهِ الَّتِي فَوْقَ الْجَلَدِ. وَكَانَ كَذَلِكَ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">And God called the firmament Heaven. So the evening and the morning were the second day.</td>
        <td class="arabic">وَدَعَا اللهُ الْجَلَدَ سَمَاءً. وَكَانَ مَسَاءٌ وَكَانَ صَبَاحٌ يَوْما ثَانِيا.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Then God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear"; and it was so.</td>
        <td class="arabic">وَقَالَ اللهُ: «لِتَجْتَمِعِ الْمِيَاهُ تَحْتَ السَّمَاءِ الَى مَكَانٍ وَاحِدٍ وَلْتَظْهَرِ الْيَابِسَةُ». وَكَانَ كَذَلِكَ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">And God called the dry land Earth, and the gathering together of the waters He called Seas. And God saw that it was good.</td>
        <td class="arabic">وَدَعَا اللهُ الْيَابِسَةَ ارْضا وَمُجْتَمَعَ الْمِيَاهِ دَعَاهُ بِحَارا. وَرَاى اللهُ ذَلِكَ انَّهُ حَسَنٌ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">Then God said, "Let the earth bring forth grass, the herb that yields seed, and the fruit tree that yields fruit according to its kind, whose seed is in itself, on the earth"; and it was so.</td>
        <td class="arabic">وَقَالَ اللهُ: «لِتُنْبِتِ الارْضُ عُشْبا وَبَقْلا يُبْزِرُ بِزْرا وَشَجَرا ذَا ثَمَرٍ يَعْمَلُ ثَمَرا كَجِنْسِهِ بِزْرُهُ فِيهِ عَلَى الارْضِ». وَكَانَ كَذَلِكَ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">And the earth brought forth grass, the herb that yields seed according to its kind, and the tree that yields fruit, whose seed is in itself according to its kind. And God saw that it was good.</td>
        <td class="arabic">فَاخْرَجَتِ الارْضُ عُشْبا وَبَقْلا يُبْزِرُ بِزْرا كَجِنْسِهِ وَشَجَرا يَعْمَلُ ثَمَرا بِزْرُهُ فِيهِ كَجِنْسِهِ. وَرَاى اللهُ ذَلِكَ انَّهُ حَسَنٌ.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">So the evening and the morning were the third day.</td>
        <td class="arabic">وَكَانَ مَسَاءٌ وَكَانَ صَبَاحٌ يَوْما ثَالِثا.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">Then God said, "Let there be lights in the firmament of the heavens to divide the day from the night; and let them be for signs and seasons, and for days and years;</td>
        <td class="arabic">وَقَالَ اللهُ: «لِتَكُنْ انْوَارٌ فِي جَلَدِ السَّمَاءِ لِتَفْصِلَ بَيْنَ النَّهَارِ وَاللَّيْلِ وَتَكُونَ لايَاتٍ وَاوْقَاتٍ وَايَّامٍ وَسِنِينٍ.</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">and let them be for lights in the firmament of the heavens to give light on the earth"; and it was so.</td>
        <td class="arabic">وَتَكُونَ انْوَارا فِي جَلَدِ السَّمَاءِ لِتُنِيرَ عَلَى الارْضِ». وَكَانَ كَذَلِكَ.</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">Then God made two great lights: the greater light to rule the day, and the lesser light to rule the night. He made the stars also.</td>
        <td class="arabic">فَعَمِلَ اللهُ النُّورَيْنِ الْعَظِيمَيْنِ: النُّورَ الاكْبَرَ لِحُكْمِ النَّهَارِ وَالنُّورَ الاصْغَرَ لِحُكْمِ اللَّيْلِ وَالنُّجُومَ.</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">God set them in the firmament of the heavens to give light on the earth,</td>
        <td class="arabic">وَجَعَلَهَا اللهُ فِي جَلَدِ السَّمَاءِ لِتُنِيرَ عَلَى الارْضِ</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">and to rule over the day and over the night, and to divide the light from the darkness. And God saw that it was good.</td>
        <td class="arabic">وَلِتَحْكُمَ عَلَى النَّهَارِ وَاللَّيْلِ وَلِتَفْصِلَ بَيْنَ النُّورِ وَالظُّلْمَةِ. وَرَاى اللهُ ذَلِكَ انَّهُ حَسَنٌ.</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">So the evening and the morning were the fourth day.</td>
        <td class="arabic">وَكَانَ مَسَاءٌ وَكَانَ صَبَاحٌ يَوْما رَابِعا.</td>
    </tr>
    <tr id="table_3_row_23" class="text">
        <td class="english">Then God said, "Let the waters abound with an abundance of living creatures, and let birds fly above the earth across the face of the firmament of the heavens."</td>
        <td class="arabic">وَقَالَ اللهُ: «لِتَفِضِ الْمِيَاهُ زَحَّافَاتٍ ذَاتَ نَفْسٍ حَيَّةٍ وَلْيَطِرْ طَيْرٌ فَوْقَ الارْضِ عَلَى وَجْهِ جَلَدِ السَّمَاءِ».</td>
    </tr>
    <tr id="table_3_row_24" class="text">
        <td class="english">So God created great sea creatures and every living thing that moves, with which the waters abounded, according to their kind, and every winged bird according to its kind. And God saw that it was good.</td>
        <td class="arabic">فَخَلَقَ اللهُ التَّنَانِينَ الْعِظَامَ وَكُلَّ نَفْسٍ حَيَّةٍ تَدِبُّ الَّتِي فَاضَتْ بِهَا الْمِيَاهُ كَاجْنَاسِهَا وَكُلَّ طَائِرٍ ذِي جَنَاحٍ كَجِنْسِهِ. وَرَاى اللهُ ذَلِكَ انَّهُ حَسَنٌ.</td>
    </tr>
    <tr id="table_3_row_25" class="text">
        <td class="english">And God blessed them, saying, "Be fruitful and multiply, and fill the waters in the seas, and let birds multiply on the earth."</td>
        <td class="arabic">وَبَارَكَهَا اللهُ قَائِلا: «اثْمِرِي وَاكْثُرِي وَامْلاي الْمِيَاهَ فِي الْبِحَارِ. وَلْيَكْثُرِ الطَّيْرُ عَلَى الارْضِ».</td>
    </tr>
    <tr id="table_3_row_26" class="text">
        <td class="english">So the evening and the morning were the fifth day.</td>
        <td class="arabic">وَكَانَ مَسَاءٌ وَكَانَ صَبَاحٌ يَوْما خَامِسا.</td>
    </tr>
    <tr id="table_3_row_27" class="text">
        <td class="english">Then God said, "Let the earth bring forth the living creature according to its kind: cattle and creeping thing and beast of the earth, each according to its kind"; and it was so.</td>
        <td class="arabic">وَقَالَ اللهُ: «لِتُخْرِجِ الارْضُ ذَوَاتِ انْفُسٍ حَيَّةٍ كَجِنْسِهَا: بَهَائِمَ وَدَبَّابَاتٍ وَوُحُوشَ ارْضٍ كَاجْنَاسِهَا». وَكَانَ كَذَلِكَ.</td>
    </tr>
    <tr id="table_3_row_28" class="text">
        <td class="english">And God made the beast of the earth according to its kind, cattle according to its kind, and everything that creeps on the earth according to its kind. And God saw that it was good.</td>
        <td class="arabic">فَعَمِلَ اللهُ وُحُوشَ الارْضِ كَاجْنَاسِهَا وَالْبَهَائِمَ كَاجْنَاسِهَا وَجَمِيعَ دَبَّابَاتِ الارْضِ كَاجْنَاسِهَا. وَرَاى اللهُ ذَلِكَ انَّهُ حَسَنٌ.</td>
    </tr>
    <tr id="table_3_row_29" class="text">
        <td class="english">Then God said, "Let Us make man in Our image, according to Our likeness; let them have dominion over the fish of the sea, over the birds of the air, and over the cattle, over all the earth and over every creeping thing that creeps on the earth."</td>
        <td class="arabic">وَقَالَ اللهُ: «نَعْمَلُ الانْسَانَ عَلَى صُورَتِنَا كَشَبَهِنَا فَيَتَسَلَّطُونَ عَلَى سَمَكِ الْبَحْرِ وَعَلَى طَيْرِ السَّمَاءِ وَعَلَى الْبَهَائِمِ وَعَلَى كُلِّ الارْضِ وَعَلَى جَمِيعِ الدَّبَّابَاتِ الَّتِي تَدِبُّ عَلَى الارْضِ».</td>
    </tr>
    <tr id="table_3_row_30" class="text">
        <td class="english">So God created man in His own image; in the image of God He created him; male and female He created them.</td>
        <td class="arabic">فَخَلَقَ اللهُ الانْسَانَ عَلَى صُورَتِهِ. عَلَى صُورَةِ اللهِ خَلَقَهُ. ذَكَرا وَانْثَى خَلَقَهُمْ.</td>
    </tr>
    <tr id="table_3_row_31" class="text">
        <td class="english">Then God blessed them, and God said to them, "Be fruitful and multiply; fill the earth and subdue it; have dominion over the fish of the sea, over the birds of the air, and over every living thing that moves on the earth."</td>
        <td class="arabic">وَبَارَكَهُمُ اللهُ وَقَالَ لَهُمْ: «اثْمِرُوا وَاكْثُرُوا وَامْلاوا الارْضَ وَاخْضِعُوهَا وَتَسَلَّطُوا عَلَى سَمَكِ الْبَحْرِ وَعَلَى طَيْرِ السَّمَاءِ وَعَلَى كُلِّ حَيَوَانٍ يَدِبُّ عَلَى الارْضِ».</td>
    </tr>
    <tr id="table_3_row_32" class="text">
        <td class="english">And God said, "See, I have given you every herb that yields seed which is on the face of all the earth, and every tree whose fruit yields seed; to you it shall be for food.</td>
        <td class="arabic">وَقَالَ اللهُ: «انِّي قَدْ اعْطَيْتُكُمْ كُلَّ بَقْلٍ يُبْزِرُ بِزْرا عَلَى وَجْهِ كُلِّ الارْضِ وَكُلَّ شَجَرٍ فِيهِ ثَمَرُ شَجَرٍ يُبْزِرُ بِزْرا لَكُمْ يَكُونُ طَعَاما.</td>
    </tr>
    <tr id="table_3_row_33" class="text">
        <td class="english">Also, to every beast of the earth, to every bird of the air, and to everything that creeps on the earth, in which there is life, I have given every green herb for food"; and it was so.</td>
        <td class="arabic">وَلِكُلِّ حَيَوَانِ الارْضِ وَكُلِّ طَيْرِ السَّمَاءِ وَكُلِّ دَبَّابَةٍ عَلَى الارْضِ فِيهَا نَفْسٌ حَيَّةٌ اعْطَيْتُ كُلَّ عُشْبٍ اخْضَرَ طَعَاما». وَكَانَ كَذَلِكَ.</td>
    </tr>
    <tr id="table_3_row_34" class="text">
        <td class="english">Then God saw everything that He had made, and indeed it was very good. So the evening and the morning were the sixth day.</td>
        <td class="arabic">وَرَاى اللهُ كُلَّ مَا عَمِلَهُ فَاذَا هُوَ حَسَنٌ جِدّا. وَكَانَ مَسَاءٌ وَكَانَ صَبَاحٌ يَوْما سَادِسا.</td>
    </tr>
    <tr id="table_3_row_35" class="text">
        <td class="english">Thus the heavens and the earth, and all the host of them, were finished.</td>
        <td class="arabic">فَاكْمِلَتِ السَّمَاوَاتُ وَالارْضُ وَكُلُّ جُنْدِهَا.</td>
    </tr>
    <tr id="table_3_row_36" class="text">
        <td class="english">And on the seventh day God ended His work which He had done, and He rested on the seventh day from all His work which He had done.</td>
        <td class="arabic">وَفَرَغَ اللهُ فِي الْيَوْمِ السَّابِعِ مِنْ عَمَلِهِ الَّذِي عَمِلَ. فَاسْتَرَاحَ فِي الْيَوْمِ السَّابِعِ مِنْ جَمِيعِ عَمَلِهِ الَّذِي عَمِلَ.</td>
    </tr>
    <tr id="table_3_row_37" class="text">
        <td class="english">Then God blessed the seventh day and sanctified it, because in it He rested from all His work which God had created and made.</td>
        <td class="arabic">وَبَارَكَ اللهُ الْيَوْمَ السَّابِعَ وَقَدَّسَهُ لانَّهُ فِيهِ اسْتَرَاحَ مِنْ جَمِيعِ عَمَلِهِ الَّذِي عَمِلَ اللهُ خَالِقا.</td>
    </tr>
    <tr id="table_3_row_39" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 5:1-9)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 5: 1 – 9)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Now let me sing to my Well-beloved A song of my Beloved regarding His vineyard: My Well-beloved has a vineyard On a very fruitful hill.</td>
        <td class="arabic">لأُنْشِدَنَّ عَنْ حَبِيبِي نَشِيدَ مُحِبِّي لِكَرْمِهِ. كَانَ لِحَبِيبِي كَرْمٌ عَلَى أَكَمَةٍ خَصِبَةٍ</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">He dug it up and cleared out its stones, And planted it with the choicest vine. He built a tower in its midst, And also made a winepress in it; So He expected it to bring forth good grapes, But it brought forth wild grapes.</td>
        <td class="arabic">فَنَقَبَهُ وَنَقَّى حِجَارَتَهُ وَغَرَسَهُ كَرْمَ سَوْرَقَ وَبَنَى بُرْجاً فِي وَسَطِهِ وَنَقَرَ فِيهِ أَيْضاً مِعْصَرَةً فَانْتَظَرَ أَنْ يَصْنَعَ عِنَباً فَصَنَعَ عِنَباً رَدِيئاً.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">"And now, O inhabitants of Jerusalem and men of Judah, Judge, please, between Me and My vineyard.</td>
        <td class="arabic">«وَالآنَ يَا سُكَّانَ أُورُشَلِيمَ وَرِجَالَ يَهُوذَا احْكُمُوا بَيْنِي وَبَيْنَ كَرْمِي.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">What more could have been done to My vineyard That I have not done in it? Why then, when I expected it to bring forth good grapes, Did it bring forth wild grapes?</td>
        <td class="arabic">مَاذَا يُصْنَعُ أَيْضاً لِكَرْمِي وَأَنَا لَمْ أَصْنَعْهُ لَهُ؟ لِمَاذَا إِذِ انْتَظَرْتُ أَنْ يَصْنَعَ عِنَباً صَنَعَ عِنَباً رَدِيئاً؟</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">And now, please let Me tell you what I will do to My vineyard: I will take away its hedge, and it shall be burned; And break down its wall, and it shall be trampled down.</td>
        <td class="arabic">فَالآنَ أُعَرِّفُكُمْ مَاذَا أَصْنَعُ بِكَرْمِي. أَنْزِعُ سِيَاجَهُ فَيَصِيرُ لِلرَّعْيِ. أَهْدِمُ جُدْرَانَهُ فَيَصِيرُ لِلدَّوْسِ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">I will lay it waste; It shall not be pruned or dug, But there shall come up briers and thorns. I will also command the clouds That they rain no rain on it."</td>
        <td class="arabic">وَأَجْعَلُهُ خَرَاباً لاَ يُقْضَبُ وَلاَ يُنْقَبُ فَيَطْلَعُ شَوْكٌ وَحَسَكٌ. وَأُوصِي الْغَيْمَ أَنْ لاَ يُمْطِرَ عَلَيْهِ مَطَراً».</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">For the vineyard of the Lord of hosts is the house of Israel, And the men of Judah are His pleasant plant. He looked for justice, but behold, oppression; For righteousness, but behold, a cry for help.</td>
        <td class="arabic">إِنَّ كَرْمَ رَبِّ الْجُنُودِ هُوَ بَيْتُ إِسْرَائِيلَ وَغَرْسَ لَذَّتِهِ رِجَالُ يَهُوذَا. فَانْتَظَرَ حَقّاً فَإِذَا سَفْكُ دَمٍ وَعَدْلاً فَإِذَا صُرَاخٌ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">Woe to those who join house to house; They add field to field, Till there is no place Where they may dwell alone in the midst of the land!</td>
        <td class="arabic">وَيْلٌ لِلَّذِينَ يَصِلُونَ بَيْتاً بِبَيْتٍ وَيَقْرِنُونَ حَقْلاً بِحَقْلٍ حَتَّى لَمْ يَبْقَ مَوْضِعٌ. فَصِرْتُمْ تَسْكُنُونَ وَحْدَكُمْ فِي وَسَطِ الأَرْضِ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">In my hearing the Lord of hosts said, "Truly, many houses shall be desolate, Great and beautiful ones, without inhabitant.</td>
        <td class="arabic">فِي أُذُنَيَّ قَالَ رَبُّ الْجُنُودِ: «أَلاَ إِنَّ بُيُوتاً كَثِيرَةً تَصِيرُ خَرَاباً. بُيُوتاً كَبِيرَةً وَحَسَنَةً بِلاَ سَاكِنٍ.</td>
    </tr>
    <tr id="table_4_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>


<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Sirach 1:1-19)
    <span class="arabic-caption">النبوة الثالثة<br>(يشوع ابن سيراخ 1: 1 – 19)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Joshua, the son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يشوع بن سيراخ النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">All wisdom comes from the Lord and is with him forever.</td>
        <td class="arabic">كُلُّ حِكمةٍ هيَ مِنَ الرّبٌ
وتَبقَى معَهُ إلى الأَبَدِ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">The sand of the sea, the drops of rain, and the days of eternity—who can count them?</td>
        <td class="arabic">مَنْ يَعُدُّ رملَ البِحَارِ،
مَنْ يَعُدُّ قَطَراتِ المطَرِ وأيّامَ الدَّهرِ؟</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">The height of heaven, the breadth of the earth, the abyss, and wisdom—who can search them out?</td>
        <td class="arabic">ومَنْ يَقيسُ اَرتِفَاعَ السَّمَاءِ
واَتِّسَاعَ الأَرضِ وعُمقَ البِحارِ؟</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Wisdom was created before all things,
and prudent understanding from eternity.</td>
        <td class="arabic">قَبلَ كُلٌ شيءٍ تكوَّنَتِ الحِكمةُ
ومِنْ أقدمِ الدُّهورِ الفِطْنةُ والفَهْمُ.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">The root of wisdom—to whom has it been revealed? Her clever devices—who knows them?</td>
        <td class="arabic">لِمَنِ اَنكَشَفَ أصلُ الحِكمةِ؟
ومَنْ تَبـيَّنَ صَوابَ أمرِها؟</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">There is One who is wise, greatly to be feared, sitting upon his throne.</td>
        <td class="arabic">واحِدٌ هوَ الحكيمُ المَهيبُ،
الرّبُّ الجالِسُ على عرشِهِ،</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">The Lord himself created wisdom;
he saw her and apportioned her,
he poured her out upon all his works.</td>
        <td class="arabic">أوجَدَها تأمَّلَها وقَدَرها
على كُلٌ أعمالِهِ</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">She dwells with all flesh according to his gift, and he supplied her to those who love him.</td>
        <td class="arabic">وعلى البشَرِ أفاضَها،
وبِكثرَةٍ على الـذينَ يُحِبُّونَهُ.</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">The fear of the Lord is glory and exultation,
and gladness and a crown of rejoicing.</td>
        <td class="arabic">مَخافةُ الرّبٌ شرَفٌ ومَجدٌ،
فرَحٌ وإكليلُ اَبتِهاجِ.</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">The fear of the Lord delights the heart,
and gives gladness and joy and long life.</td>
        <td class="arabic">مَخافةُ الرّبٌ تَسُرُّ القلبَ،
تُطيلُ العُمرَ تُفرِحُهُ وتُسعِدُهُ.</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">With him who fears the Lord it will go well at the end; on the day of his death he will be blessed.</td>
        <td class="arabic">مَنْ يخافُ الرّبَ تَطيبُ آخِرتُهُ
وفي يومِ موتِهِ ينالُ البَركةَ.</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">To fear the Lord is the beginning of wisdom;she is created with the faithful in the womb.</td>
        <td class="arabic">رأْسُ الحِكْمةِ مَخافةُ الرّبٌ.
نشَأَت معَ المُؤْمنينَ في الرَّحِمِ،</td>
    </tr>
    <tr id="table_5_row_16" class="text">
        <td class="english">She made among men an eternal foundation, and among their descendants she will be trusted.</td>
        <td class="arabic">ومنَ القِدَمِ أقامَتْ بَينَ النَّاسِ،
وأمينَةً ستَبقى لِذُرِّيَّتِهِم.</td>
    </tr>
    <tr id="table_5_row_17" class="text">
        <td class="english">To fear the Lord is wisdom's full measure;
she satisfies men with her fruits;</td>
        <td class="arabic">كمالُ الحِكْمةِ مَخافةُ الرّبٌ،
بِثِمارِها تُشْبِـعُ بَني البشَرِ،</td>
    </tr>
    <tr id="table_5_row_18" class="text">
        <td class="english">she fills their whole house with desirable goods, and their storehouses with her produce.</td>
        <td class="arabic">بِما يَشْتَهونَ تَملأُ بُيوتَهُم
وبِغَلاَتِها مَخازِنَهُم،</td>
    </tr>
    <tr id="table_5_row_19" class="text">
        <td class="english">The fear of the Lord is the crown of wisdom,
making peace and perfect health to flourish.</td>
        <td class="arabic">تاجُ الحِكمةِ مَخافةُ الرّبٌ،
وبِها السَّلامُ والشِّفاءُ التَّامُّ.</td>
    </tr>
    <tr id="table_5_row_20" class="text">
        <td class="english">He saw her and apportioned her;
he rained down knowledge and discerning comprehension, and he exalted the glory of those who held her fast.</td>
        <td class="arabic">الحِكمةُ تَسكُبُ المَعرِفةَ والفَهمَ
وتُعْلي مَجدَ الـذينَ يَملِكونَها.</td>
    </tr>
    <tr id="table_5_row_22" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="Homily">
    <caption id="caption_table_6" class="caption">Homily<br>(Abba Shenouda the Archimandrite)
    <span class="arabic-caption">العظة<br>(أنبا شنودة رئيس المتوحدين)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A homily of our holy father Abba Shenouda the Archimandrite. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لأبينا القديس أنبا شنودة رئيس المتوحدين بركته تكون معنا آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">Brethren, if we want to escape God’s punishment and find mercy in his eyes,</td>
        <td class="arabic">يا اخوة، إن كنا نريد الآن أن نفلت من يدى عقاب الله. ونجد رحمة أمامه.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">let us sit every evening alone by ourselves</td>
        <td class="arabic">فلنجلس بالعشاء كل يوم منفردين وحدنا عند كمال النهار.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">and search our souls for what we presented to our guardian angel to offer to the Lord.</td>
        <td class="arabic">ونفتش ذواتنا عما قدمناه للملاك الذى يخدمنا (الملازم لنا) ليصعده إلى الرب.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">Again, as the night goes by and a new day dawns and light prevails, let us search ourselves to know what we presented to our companion angel to offer to the Lord.</td>
        <td class="arabic">وأيضاً إذا انقضى الليل وطلع النهار (وأشرق النور) نفتش ذواتنا وحدنا ونعلم ما الذى قدمناه للملاك الموكل بنا ليصعده إلى الله.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">Let it be beyond doubt that everyone of us, male or female, young or old,</td>
        <td class="arabic">ولا نشك البتة لان كل إنسان ذكراً كان أو أنثى صغيراً أو كبيراً.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">who was baptized in the name of the Father, the Son and the Holy Spirit has been assigned to a designated angel until the day of his death</td>
        <td class="arabic">قد اعتمد باسم الآب والابن والروح القدس قد جعل الله له ملاكاً موكلاً به إلى يوم وفاته.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">to report to him every day what his assigned individual has done by day or by night.</td>
        <td class="arabic">وليصعد إليه كل يوم أعمال الإنسان الموكل به (الليلية والنهارية)</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">Not that God is unaware of what we have done. Heaven forbid! He is more knowledgeable about it.</td>
        <td class="arabic">ليس لان الله غير عارف بأعمالنا. حاشا. بل هو عارف بها أكثر.</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">As it is written, the eyes of the Lord are watching all the time everywhere on those who commit evil and on those who do good.</td>
        <td class="arabic">كما هو مكتوب أن عينى الرب ناظرة كل حين فى كل مكان على صانعى الشر وفاعلى الخير</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">Rather the angels are servants installed by the Creator of the universe for those who will inherit salvation.</td>
        <td class="arabic">انما الملائكة هم خدام قد أقامهم خالق الكل. من أجل المزمعين لوراثة الخلاص.</td>
    </tr>
    <tr id="table_6_row_15" class="intro">
        <td class="english">We conclude the homily of our holy father Abba Shenouda, the Archimandrite who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا شنودة رئيس المتوحدين الذى أنار عقولنا وعيون قلوبنا باسم الآب والابن والروح القدس الاله الواحد آمين.</td>
    </tr>
</table>


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(72:18-19)
        <span class="arabic-caption">المزمور قبطياً<br>(71: 18)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Blessed be the Lord God, the God of Israel,</td>
            <td class="coptic">Ϥⲥⲙⲁⲣⲱⲟⲩⲧ ⲛϫⲉ ⲡ̅ⲟⲥ ⲫϯ ⲙⲡⲒ̅ⲥ̅ⲗ:</td>
            <td class="arabic">مبارك الرب إله اسرائيل</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Who alone does wondrous things!</td>
            <td class="coptic">ⲫⲏⲉⲧⲓⲣⲓ ⲛϩⲁⲛϣⲫⲏⲣⲓ ⲙⲙⲁⲩⲁⲧϥ:</td>
            <td class="arabic">الصانع العجائب وحده.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">And blessed be His glorious name</td>
            <td class="coptic"> ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛϫⲉ ⲡⲓⲣⲁⲛ ⲉ̅ⲑ̅ⲩ ⲛⲧⲉ ⲡⲉϥⲱⲟⲩ ϣⲁⲉⲛⲉϩ :</td>
            <td class="arabic">مبارك اسم مجده القدوس</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">forever!</td>
            <td class="coptic">ⲉⲥⲉ̀ϣⲱⲡⲓ ⲉⲥⲉ̀ϣⲱⲡⲓ</td>
            <td class="arabic">إلى الابد يكون .</td>
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
            <td class="coptic">Ⲟⲩⲟϩ ⲉ̀ⲡⲉϥⲣⲁⲥϯ ⲉ̀ⲧⲁⲩⲓ̀ ⲉⲃⲟⲗ ϧⲉⲛ ⲉ̀Ⲃⲏⲑⲁ̀ⲛⲓⲁ̀ ⲁϥϩ̀ⲕⲟ : Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲟⲩⲃⲱ ⲛ̀ⲕⲉⲛⲧⲉ ϩⲓⲫⲟⲩⲉⲓ ⲉ̀ⲟⲩⲟⲛ ϩⲁⲛϫⲱⲃⲓ ϩⲓⲱⲧⲥ ⲁϥⲓ̀ ⲇⲉ ϩⲁⲣⲁ ⲁϥⲛⲁϫⲉⲙ ϩ̀ⲗⲓ ϩⲓⲱⲧⲥ ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϫⲱⲥ ⲙ̀ⲡⲉϥϫⲉⲙ ϩ̀ⲗⲓ ⲉ̀ⲃⲏⲗ ⲉ̀ϩⲁⲛϫⲱⲃⲓ : ⲛⲉ ⲡ̀ⲥⲏⲟⲩ ⲅⲁⲣ ⲛ̀ⲕⲉⲛⲧⲉ ⲁⲛ ⲡⲉ : Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲉ̀ⲣⲟⲩⲱ̀ ⲛ̀ϫⲉ Ⲓ̅ⲏ̅ⲥ ⲡⲉϫⲁϥ ⲛⲁⲥ ϫⲉ ⲛ̀ⲛⲉϩ̀ⲗⲓ ϫⲉ ⲟⲩⲉⲙ ⲟⲩⲧⲁϩ ϩⲓⲱ̀ϯ ϣⲁⲉ̀ⲛⲉϩ ⲟⲩⲟϩ ⲛⲁⲩⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ. Ⲟⲩⲟϩ ⲁⲩⲓ̀ ⲉ̀Ⲓ̀̅ⲗ̅ⲏ̅ⲙ ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲛ̀ϫⲉ Ⲓ̅ⲏ̅ⲥ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ ⲁϥⲉⲣϩⲏⲧⲥ ⲛ̀ϩⲓⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲧⲏⲣⲟⲩ ⲉⲧϯ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲛⲏⲉⲧϣⲱⲡ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(72:18-19)
    <span class="arabic-caption">المزمور<br>(71: 18)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Blessed be the Lord God, the God of Israel, Who alone does wondrous things!</td>
        <td class="arabic">مبارك اسم مجده القدوس إلى الابد يكون .</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">And blessed be His glorious name forever!</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Mark 11:12-24)
    <span class="arabic-caption">الانجيل<br>(مرقس 11: 12 – 24)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Now the next day, when they had come out from Bethany, He was hungry.</td>
        <td class="arabic">وَفِي الْغَدِ لَمَّا خَرَجُوا مِنْ بَيْتِ عَنْيَا جَاعَ</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">And seeing from afar a fig tree having leaves, He went to see if perhaps He would find something on it. When He came to it, He found nothing but leaves, for it was not the season for figs.</td>
        <td class="arabic">فَنَظَرَ شَجَرَةَ تِينٍ مِنْ بَعِيدٍ عَلَيْهَا وَرَقٌ وَجَاءَ لَعَلَّهُ يَجِدُ فِيهَا شَيْئاً. فَلَمَّا جَاءَ إِلَيْهَا لَمْ يَجِدْ شَيْئاً إلاَّ وَرَقاً لأَنَّهُ لَمْ يَكُنْ وَقْتَ التِّينِ.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">In response Jesus said to it, "Let no one eat fruit from you ever again." And His disciples heard it.</td>
        <td class="arabic">فَقَالَ يَسُوعُ لَهَا: «لاَ يَأْكُلْ أَحَدٌ مِنْكِ ثَمَراً بَعْدُ إِلَى الأَبَدِ». وَكَانَ تَلاَمِيذُهُ يَسْمَعُونَ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">So they came to Jerusalem. Then Jesus went into the temple and began to drive out those who bought and sold in the temple, and overturned the tables of the money changers and the seats of those who sold doves.</td>
        <td class="arabic">وَجَاءُوا إِلَى أُورُشَلِيمَ. وَلَمَّا دَخَلَ يَسُوعُ الْهَيْكَلَ ابْتَدَأَ يُخْرِجُ الَّذِينَ كَانُوا يَبِيعُونَ وَيَشْتَرُونَ فِي الْهَيْكَلِ وَقَلَّبَ مَوَائِدَ الصَّيَارِفَةِ وَكَرَاسِيَّ بَاعَةِ الْحَمَامِ.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">And He would not allow anyone to carry wares through the temple.</td>
        <td class="arabic">وَلَمْ يَدَعْ أَحَداً يَجْتَازُ الْهَيْكَلَ بِمَتَاعٍ.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">Then He taught, saying to them, "Is it not written, 'My house shall be called a house of prayer for all nations'? But you have made it a 'den of thieves.'"</td>
        <td class="arabic">وَكَانَ يُعَلِّمُ قَائِلاً لَهُمْ: «أَلَيْسَ مَكْتُوباً: بَيْتِي بَيْتَ صَلاَةٍ يُدْعَى لِجَمِيعِ الأُمَمِ؟ وَأَنْتُمْ جَعَلْتُمُوهُ مَغَارَةَ لُصُوصٍ».</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">And the scribes and chief priests heard it and sought how they might destroy Him; for they feared Him, because all the people were astonished at His teaching.</td>
        <td class="arabic">وَسَمِعَ الْكَتَبَةُ وَرُؤَسَاءُ الْكَهَنَةِ فَطَلَبُوا كَيْفَ يُهْلِكُونَهُ لأَنَّهُمْ خَافُوهُ إِذْ بُهِتَ الْجَمْعُ كُلُّهُ مِنْ تَعْلِيمِهِ.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">When evening had come, He went out of the city.</td>
        <td class="arabic">وَلَمَّا صَارَ الْمَسَاءُ خَرَجَ إِلَى خَارِجِ الْمَدِينَةِ.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Now in the morning, as they passed by, they saw the fig tree dried up from the roots.</td>
        <td class="arabic">وَفِي الصَّبَاحِ إِذْ كَانُوا مُجْتَازِينَ رَأَوُا التِّينَةَ قَدْ يَبِسَتْ مِنَ الأُصُولِ</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">And Peter, remembering, said to Him, "Rabbi, look! The fig tree which You cursed has withered away."</td>
        <td class="arabic">فَتَذَكَّرَ بُطْرُسُ وَقَالَ لَهُ: «يَا سَيِّدِي انْظُرْ التِّينَةُ الَّتِي لَعَنْتَهَا قَدْ يَبِسَتْ!»</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">So Jesus answered and said to them, "Have faith in God.</td>
        <td class="arabic">فَأَجَابَ يَسُوعُ: «لِيَكُنْ لَكُمْ إِيمَانٌ بِاللَّهِ.</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">For assuredly, I say to you, whoever says to this mountain, 'Be removed and be cast into the sea,' and does not doubt in his heart, but believes that those things he says will be done, he will have whatever he says.</td>
        <td class="arabic">لأَنِّي الْحَقَّ أَقُولُ لَكُمْ: إِنَّ مَنْ قَالَ لِهَذَا الْجَبَلِ انْتَقِلْ وَانْطَرِحْ فِي لْبَحْرِ وَلاَ يَشُكُّ فِي قَلْبِهِ بَلْ يُؤْمِنُ أَنَّ مَا يَقُولُهُ يَكُونُ فَمَهْمَا قَالَ يَكُونُ لَهُ.</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english">Therefore I say to you, whatever things you ask when you pray, believe that you receive them, and you will have them.</td>
        <td class="arabic">لِذَلِكَ أَقُولُ لَكُمْ: كُلُّ مَا تَطْلُبُونَهُ حِينَمَا تُصَلُّونَ فَآمِنُوا أَنْ تَنَالُوهُ فَيَكُونَ لَكُمْ.</td>
    </tr>
    <tr id="table_20_row_17" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_19" class="intro">
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
        <td class="english">The exposition of the FIRST Hour of the DAY of MONDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من يوم الاثنين من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">In the beginning, God created the heavens and the earth and adorned them with His spirit.</td>
        <td class="arabic">فى البدء خلق الله السماء والأرض. وزينهما هكذا بروح فيه،</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">He covered darkness and unveiled the light, and distinguished between them with new names.</td>
        <td class="arabic">وبدد الظلمة واخرج النور، وفرق بينهما بأسماء جديدة،</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">He called the light day and the darkness night. He created all these in the same day with wisdom and prudence.</td>
        <td class="arabic">ودعا النور نهاراً ودعا الظلمة ليلاً.  وفى ذلك اليوم خلق هذه جميعها بحكمة وفهم رفيع.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">On the second day, God created the firmament and separated the waters from the waters.</td>
        <td class="arabic">وفى اليوم الثانى خلق الله جلد السماء، وفصل بين مياه ومياه،</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">God established the water above the firmament and called it heaven.</td>
        <td class="arabic">وبعد هذا ثبت الله الماء العلوى وأسماه سماء.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">On the third day, He gathered the water and made the land appear over it. And He created various kinds of grass, plants, and fruitful trees</td>
        <td class="arabic">وفى اليوم الثالث جمع المياه وثبت الأرض فوق المياه، وخلق أنواع الشجر ومزروعات الحقل والعشب المزروع المثمر،</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">On the fourth day, God created the sun, the moon, and the multitude of stars.</td>
        <td class="arabic">وفى اليوم الرابع خلق الشمس والقمر وكثرة النجوم،</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">On the fifth day, God created the birds, the whales, the farm animals.</td>
        <td class="arabic">وفى اليوم الخامس خلق الهواء والطيور والحيتان الكبار وحيوانات الحقل.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">On the sixth day, God created Adam, the first man, and a companion for him from his own flesh.</td>
        <td class="arabic">وفى اليوم السادس خلق الله الكائن الحى العظيم الإنسان الأول، مع معينة له من جسده،</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">He designated them male and female and gave them dominion over all the creatures He created.</td>
        <td class="arabic">ذكراً وانثى كالتدبير. هذان جعلهما متسلطين على جميع أعماله التى خلقها الخالق.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">God rested on the seventh day from all the work He completed. These are the designs of the Creator and the Founder of all creation.</td>
        <td class="arabic">واستراح فى اليوم السابع لأن فيه أكمل جميع أعماله. هذا هو تدبير الخالق ومؤسس كل الموجودات.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOM3sc" class="navigationButton">
        <td class="englishButton">The THIRD Hour of the DAY of MONDAY</td>
        <td class="arabicButton">الساعة الثالثة من يوم الإثنين</td>
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