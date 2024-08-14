import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion,  cross} from "../repeatedPrayers";

export const DOW1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","DAY of WEDNESDAY","يوم الاربعاء");
    const paschalPraiseHtml = paschalPraise2("4","14","15","FIRST","الأولى","DAY of WEDNESDAY","يوم الاربعاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲥⲧⲱⲛⲥ ⲛ̀ϫⲉ ϯⲥⲩⲛⲁⲅⲱⲅⲏ ⲧⲏⲣⲥ ⲛ̀ⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡ̀Ⲓⲥⲣⲁⲏⲗ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡ̀ϣⲁϥⲉ ⲛ̀Ⲥⲓⲛⲁ ⲕⲁⲧⲁ ⲛⲟⲩⲡⲁⲣⲉⲙⲃⲟⲗⲏ ⲉⲃⲟⲗϩⲓⲧⲉⲛ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡ̀⳪.  </td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲛⲓⲡⲁⲣⲟⲙⲓⲁ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ϣⲱⲡⲓ ⲉ̀ⲣⲉ ϩ̀ⲑⲏⲕ ⲭⲏ ⲉ̀ⲫϯ ϧⲉⲛ ⲡⲉⲕϩⲏⲧ ⲧⲏⲣϥ : ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣϭⲓⲥⲓ ⲙⲙⲟⲕ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲧⲉⲕⲥⲟⲫⲓⲁ̀ : Ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲉⲕⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ϩⲓⲛⲁ ⲛ̀ⲧⲟⲩⲥⲟⲩⲧⲱⲛ ⲛ̀ϫⲉ ⲛⲉⲕⲙⲱⲓⲧ ⲟⲩⲟϩ ⲛ̀ⲧⲟⲩϣⲧⲉⲙϭⲓϭⲣⲟⲡ ⲛ̀ϫⲉ ⲛⲉⲕϭⲁⲗⲁⲩϫ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲱⲥⲓⲉ̀ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥϣⲉⲛⲁϥ ⲛ̀ϫⲉ ⲉⲫⲣⲉⲙ ⲛⲉⲙ ϩⲁⲛⲁⲥⲥⲩⲣⲟⲥ ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲣⲡ ⲛ̀ϩⲁⲛⲡ̀ⲣⲉⲥⲃⲩⲥ ϩⲁ ⲡ̀ⲟⲩⲣⲟ ⲛ̀Ⲓⲁⲣⲓⲙ : ⲟⲩⲟϩ ⲛ̀ⲑⲟϥ ⲙ̀ⲡⲉϥϣϫⲉⲙϫⲟⲙ ⲛ̀ⲧⲟⲩϫⲉ ⲑⲏⲛⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲛⲉϥⲙⲟⲩⲛⲕ ⲛ̀ϫⲉ ⲡⲉⲙⲕⲁϩ ⲛ̀ϩⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑⲏⲛⲟⲩ </td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲏⲥⲟⲩ ⲛ̀ⲧⲉ Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲧⲁⲣⲭⲏ ⲛ̀ϯⲥⲟⲫⲓⲁ̀ ⲡⲉ ⲉⲣϩⲟϯ ⲙ̀Ⲡ̀⳪ ⲟⲩⲟϩ ⲁⲩⲥⲱⲛⲧ ⲛⲉⲙ ⲙ̀ⲡⲓⲥⲧⲟⲥ ϧⲉⲛ ⲧⲟⲧⲉ. </td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Exodus 17:1-7)
    <span class="arabic-caption">النبوة الأولي<br>(خروج 17: 1 - 7)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Then all the congregation of the children of Israel set out on their journey from the Wilderness of Sin, according to the commandment of the Lord, and camped in Rephidim; but there was no water for the people to drink.</td>
        <td class="arabic">ثُمَّ ارْتَحَلَ كُلُّ جَمَاعَةِ بَنِي اسْرَائِيلَ مِنْ بَرِّيَّةِ سِينٍ بِحَسَبِ مَرَاحِلِهِمْ عَلَى مُوجِبِ امْرِ الرَّبِّ وَنَزَلُوا فِي رَفِيدِيمَ. وَلَمْ يَكُنْ مَاءٌ لِيَشْرَبَ الشَّعْبُ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Therefore the people contended with Moses, and said, "Give us water, that we may drink." And Moses said to them, "Why do you contend with me? Why do you tempt the Lord?"</td>
        <td class="arabic">فَخَاصَمَ الشَّعْبُ مُوسَى وَقَالُوا: «اعْطُونَا مَاءً لِنَشْرَبَ!» فَقَالَ لَهُمْ مُوسَى: «لِمَاذَا تُخَاصِمُونَنِي؟ لِمَاذَا تُجَرِّبُونَ الرَّبَّ؟»</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">And the people thirsted there for water, and the people complained against Moses, and said, "Why is it you have brought us up out of Egypt, to kill us and our children and our livestock with thirst?"</td>
        <td class="arabic">وَعَطِشَ هُنَاكَ الشَّعْبُ الَى الْمَاءِ وَتَذَمَّرَ الشَّعْبُ عَلَى مُوسَى وَقَالُوا: «لِمَاذَا اصْعَدْتَنَا مِنْ مِصْرَ لِتُمِيتَنَا وَاوْلادَنَا وَمَوَاشِيَنَا بِالْعَطَشِ؟»</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">So Moses cried out to the Lord, saying, "What shall I do with this people? They are almost ready to stone me!"</td>
        <td class="arabic">فَصَرَخَ مُوسَى الَى الرَّبِّ: «مَاذَا افْعَلُ بِهَذَا الشَّعْبِ؟ بَعْدَ قَلِيلٍ يَرْجُمُونَنِي!»</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And the Lord said to Moses, "Go on before the people, and take with you some of the elders of Israel. Also take in your hand your rod with which you struck the river, and go.</td>
        <td class="arabic">فَقَالَ الرَّبُّ لِمُوسَى: «مُرَّ قُدَّامَ الشَّعْبِ وَخُذْ مَعَكَ مِنْ شُيُوخِ اسْرَائِيلَ. وَعَصَاكَ الَّتِي ضَرَبْتَ بِهَا النَّهْرَ خُذْهَا فِي يَدِكَ وَاذْهَبْ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Behold, I will stand before you there on the rock in Horeb; and you shall strike the rock, and water will come out of it, that the people may drink." And Moses did so in the sight of the elders of Israel.</td>
        <td class="arabic">هَا انَا اقِفُ امَامَكَ هُنَاكَ عَلَى الصَّخْرَةِ فِي حُورِيبَ فَتَضْرِبُ الصَّخْرَةَ فَيَخْرُجُ مِنْهَا مَاءٌ لِيَشْرَبَ الشَّعْبُ». فَفَعَلَ مُوسَى هَكَذَا امَامَ عُيُونِ شُيُوخِ اسْرَائِيلَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">So he called the name of the place Massah because of the contention of the children of Israel, and because they tempted the Lord, saying, "Is the Lord among us or not?"</td>
        <td class="arabic">وَدَعَا اسْمَ الْمَوْضِعِ «مَسَّةَ وَمَرِيبَةَ» مِنْ اجْلِ مُخَاصَمَةِ بَنِي اسْرَائِيلَ وَمِنْ اجْلِ تَجْرِبَتِهِمْ لِلرَّبِّ قَائِلِينَ: «افِي وَسَطِنَا الرَّبُّ امْ لا؟».</td>
    </tr>
    <tr id="table_3_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Proverbs 3:5-14)
    <span class="arabic-caption">النبوة الثانية<br>(أمثال سليمان 3: 5 - 14)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من امثال سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Trust in the Lord with all your heart, And lean not on your own understanding;</td>
        <td class="arabic">تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">In all your ways acknowledge Him, And He shall direct your paths.</td>
        <td class="arabic">فِي كُلِّ طُرُقِكَ اعْرِفْهُ وَهُوَ يُقَوِّمُ سُبُلَكَ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">Do not be wise in your own eyes; Fear the Lord and depart from evil.</td>
        <td class="arabic">لاَ تَكُنْ حَكِيماً فِي عَيْنَيْ نَفْسِكَ. اتَّقِ الرَّبَّ وَابْعُدْ عَنِ الشَّرِّ</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">It will be health to your flesh, to your bones.</td>
        <td class="arabic">فَيَكُونَ شِفَاءً لِسُرَّتِكَ وَسَقَاءً لِعِظَامِكَ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">Honor the Lord with your possessions, And with the firstfruits of all your increase;</td>
        <td class="arabic">أَكْرِمِ الرَّبَّ مِنْ مَالِكَ وَمِنْ كُلِّ بَاكُورَاتِ غَلَّتِكَ</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">So your barns will be filled with plenty, And your vats will overflow with new wine.</td>
        <td class="arabic">فَتَمْتَلِئَ خَزَائِنُكَ شِبَعاً وَتَفِيضَ مَعَاصِرُكَ مِسْطَاراً.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">My son, do not despise the chastening of the Lord, Nor detest His correction;</td>
        <td class="arabic">يَا ابْنِي لاَ تَحْتَقِرْ تَأْدِيبَ الرَّبِّ وَلاَ تَكْرَهْ تَوْبِيخَهُ</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">For whom the Lord loves He corrects, Just as a father the son in whom he delights.</td>
        <td class="arabic">لأَنَّ الَّذِي يُحِبُّهُ الرَّبُّ يُؤَدِّبُهُ وَكَأَبٍ بِابْنٍ يُسَرُّ بِهِ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">Happy is the man who finds wisdom, And the man who gains understanding;</td>
        <td class="arabic">طُوبَى لِلإِنْسَانِ الَّذِي يَجِدُ الْحِكْمَةَ وَلِلرَّجُلِ الَّذِي يَنَالُ الْفَهْمَ</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">For her proceeds are better than the profits of silver, And her gain than fine gold.</td>
        <td class="arabic">لأَنَّ تِجَارَتَهَا خَيْرٌ مِنْ تِجَارَةِ الْفِضَّةِ وَرِبْحَهَا خَيْرٌ مِنَ الذَّهَبِ الْخَالِصِ.</td>
    </tr>
    <tr id="table_4_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Hosea 5:13-6:3)
    <span class="arabic-caption">النبوة الثالثة<br>(هوشع 5: 13 - 6: 3)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Hosea the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من هوشع النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">"When Ephraim saw his sickness, And Judah saw his wound, Then Ephraim went to Assyria And sent to King Jareb; Yet he cannot cure you, Nor heal you of your wound.</td>
        <td class="arabic">«وَرَأَى أَفْرَايِمُ مَرَضَهُ وَيَهُوذَا جُرْحَهُ فَمَضَى أَفْرَايِمُ إِلَى أَشُّورَ وَأَرْسَلَ إِلَى مَلِكٍ عَدُوٍّّ. وَلَكِنَّهُ لاَ يَسْتَطِيعُ أَنْ يَشْفِيَكُمْ وَلاَ أَنْ يُزِيلَ مِنْكُمُ الْجُرْحَ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">For I will be like a lion to Ephraim, And like a young lion to the house of Judah. I, even I, will tear them and go away; I will take them away, and no one shall rescue.</td>
        <td class="arabic">لأَنِّي لأَفْرَايِمَ كَالأَسَدِ وَلِبَيْتِ يَهُوذَا كَشِبْلِ الأَسَدِ. فَإِنِّي أَنَا أَفْتَرِسُ وَأَمْضِي وَآخُذُ وَلاَ مُنْقِذٌ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">I will return again to My place Till they acknowledge their offense. Then they will seek My face; In their affliction they will earnestly seek Me."</td>
        <td class="arabic">أَذْهَبُ وَأَرْجِعُ إِلَى مَكَانِي حَتَّى يُجَازَوْا وَيَطْلُبُوا وَجْهِي. فِي ضِيقِهِمْ يُبَكِّرُونَ إِلَيَّ».</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Come, and let us return to the Lord; For He has torn, but He will heal us; He has stricken, but He will bind us up.</td>
        <td class="arabic">هَلُمَّ نَرْجِعُ إِلَى الرَّبِّ لأَنَّهُ هُوَ افْتَرَسَ فَيَشْفِينَا ضَرَبَ فَيَجْبِرُنَا.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">After two days He will revive us; On the third day He will raise us up, That we may live in His sight.</td>
        <td class="arabic">يُحْيِينَا بَعْدَ يَوْمَيْنِ. فِي الْيَوْمِ الثَّالِثِ يُقِيمُنَا فَنَحْيَا أَمَامَهُ.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">Let us know, Let us pursue the knowledge of the Lord. His going forth is established as the morning; He will come to us like the rain, Like the latter and former rain to the earth.</td>
        <td class="arabic">لِنَعْرِفْ فَلْنَتَتَبَّعْ لِنَعْرِفَ الرَّبَّ. خُرُوجُهُ يَقِينٌ كَالْفَجْرِ. يَأْتِي إِلَيْنَا كَالْمَطَرِ. كَمَطَرٍ مُتَأَخِّرٍ يَسْقِي الأَرْضَ.</td>
    </tr>
    <tr id="table_5_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Ecclesiasticus 1:18 - 2:1, 2:5,7,10,12,14-15, 3:12,17,26,28)
    <span class="arabic-caption">النبوة الرابعة<br>(مقتطفات من يشوع بن سيراخ 1: 18 - 2:1 و2: 5 و7 و 10 و 12 و 14-15 و 3: 12 و 17 و 26 و 28)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from Joshua, the son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يشوع بن سيراخ النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">The fear of the Lord is the crown of wisdom, making peace and perfect health to flourish.</td>
        <td class="arabic">رأس الحكمة مخافة الرب انها خلقت في الرحم مع المؤمنين.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">He rained down knowledge and discerning comprehension, and he exalted the glory of those who held her fast.</td>
        <td class="arabic">انها تفيض الفهم والمعرفة والفطنة. وتعلى مجد الذين يملكونها.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">Unrighteous anger cannot be justified,
for a man's anger tips the scale to his ruin.</td>
        <td class="arabic">الغضوب لا يمكن أن يبرر لان ميل غضبه يسقطه.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">A patient man will endure until the right moment, and then joy will burst forth for him.</td>
        <td class="arabic">طويل الاناة يصبر إلى حين ويخفى كلامه إلى حين</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">He will hide his words until the right moment, and the lips of many will tell of his good sense.</td>
        <td class="arabic">وشفاه كثيرة تحدث بفهمه.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">In the treasuries of wisdom are wise sayings, but godliness is an abomination to a sinner.</td>
        <td class="arabic">فى ذخائر الحكمة أمثال المعرفة.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">If you desire wisdom, keep the commandments, and the Lord will supply it for you.</td>
        <td class="arabic">إذا رغبت فى الحكمة احفظ الوصايا والرب يهبها لك.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">Do not disobey the fear of the Lord;
do not approach him with a divided mind.</td>
        <td class="arabic">لا تعصى مخافة الرب ولا تتقدم إليه بقلبين.</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">Be not a hypocrite in men's sight,
and keep watch over your lips.</td>
        <td class="arabic">كن محترساً لشفتيك</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">Do not exalt yourself lest you fall,
and thus bring dishonor upon yourself.
The Lord will reveal your secrets.</td>
        <td class="arabic">لا ترتفع لئلا تسقط فتجلب على نفسك هواناً ويكشف الرب خفاياك.</td>
    </tr>
    <tr id="table_6_row_14" class="text">
        <td class="english">My son, if you come forward to serve the Lord, prepare yourself for temptation.</td>
        <td class="arabic">يا ابنى إذا أقبلت إلى خدمة الرب فهئ نفسك للتجارب.</td>
    </tr>
    <tr id="table_6_row_15" class="text">
        <td class="english">For gold is tested in the fire,
and acceptable men in the furnace of humiliation.</td>
        <td class="arabic">فإن الذهب يمحص فى النار والمرضيين من الناس يمحصون فى أتون التواضع.</td>
    </tr>
    <tr id="table_6_row_16" class="text">
        <td class="english">You who fear the Lord, wait for his mercy;
and turn not aside, lest you fall.</td>
        <td class="arabic">أيها المتقون الرب انتظروا رحمته ولا تحيدوا لئلا تسقطوا.</td>
    </tr>
    <tr id="table_6_row_17" class="text">
        <td class="english">Consider the ancient generations and see:
who ever trusted in the Lord and was put to shame? Or who ever persevered in the fear of the Lord and was forsaken? Or who ever called upon him and was overlooked?</td>
        <td class="arabic">انظروا إلى الاجيال القديمة وتأملوا. من آمن بالرب فخزى أو من ثبت فى وصاياه فتركه أو من صرخ إليه فأهمله قط.</td>
    </tr>
    <tr id="table_6_row_18" class="text">
        <td class="english">Woe to timid hearts and to slack hands,
and to the sinner who walks along two ways!</td>
        <td class="arabic">ويل لكل قلب هياب وللأيدى المتراخية وللخاطئ الذى يمشى فى طريقين.</td>
    </tr>
    <tr id="table_6_row_19" class="text">
        <td class="english">Woe to you who have lost your endurance! What will you do when the Lord punishes you?</td>
        <td class="arabic">ويل لكم أيها الذين تركوا الصبر فماذا تصنعون عندما يفتقدكم الرب.</td>
    </tr>
    <tr id="table_6_row_20" class="text">
        <td class="english">Those who fear the Lord will not disobey his words, and those who love him will keep his ways.</td>
        <td class="arabic">أن المتقين الرب لا يخالفون كلماته وأبراره يمتلئون من شرائعه.</td>
    </tr>
    <tr id="table_6_row_21" class="text">
        <td class="english">O son, help your father in his old age,
and do not grieve him as long as he lives;</td>
        <td class="arabic">يا ابنى أعن أباك فى شيخوخته.</td>
    </tr>
    <tr id="table_6_row_22" class="text">
        <td class="english">My son, perform your tasks in meekness;
then you will be loved by those whom God accepts.</td>
        <td class="arabic">يا ابنى أكمل أعمالك بوداعة.</td>
    </tr>
    <tr id="table_6_row_23" class="text">
        <td class="english">A stubborn mind will be afflicted at the end, and whoever loves danger will perish by it.</td>
        <td class="arabic">لان أوهامهم تقتلهم. الذى يحب الخطر يسقط فيه.  القلب القاسى يتعب فى آخرته. والخاطئ يزيد خطية على خطية.</td>
    </tr>
    <tr id="table_6_row_24" class="text">
        <td class="english">The affliction of the proud has no healing.</td>
        <td class="arabic">ألم المتكبر لا شفاء له.</td>
    </tr>
    <tr id="table_6_row_25" class="text">
        <td class="english">The mind of the intelligent man will ponder a parable.</td>
        <td class="arabic">وقلب العاقل يتأمل فى المثل.</td>
    </tr>
    <tr id="table_6_row_26" class="text">
        <td class="english">Water extinguishes a blazing fire:
so almsgiving atones for sin.</td>
        <td class="arabic">الماء يطفئ النار الملتهبة والصدقة تغفر كل خطية:</td>
    </tr>
    <tr id="table_6_row_28" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_7" title="Homily">
    <caption id="caption_table_7" class="caption">Homily<br>(Abba Shenouda the Archimandrite)
    <span class="arabic-caption">العظة<br>(أنبا شنودة رئيس المتوحدين)</span></caption>
    <tr id="table_7_row_1" class="intro">
        <td class="english">A homily of our Holy Father Abba Shenouda the Archimandrite may his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لأبينا القديس أنبا شنودة رئيس المتوحدين بركته المقدسة تكون معنا آمين.</td>
    </tr>
    <tr id="table_7_row_4" class="text">
        <td class="english">I tell you this and confirm it.</td>
        <td class="arabic">أقول هذا الكلام ولا أتركه. وهو هذا.</td>
    </tr>
    <tr id="table_7_row_5" class="text">
        <td class="english">Do not imagine that after cutting the wheat from the chaff that the sinners will have relief.</td>
        <td class="arabic">ولا تظنوا انه بعد عزل التبن من الحنطة يحصل الخطاة على راحة.</td>
    </tr>
    <tr id="table_7_row_6" class="text">
        <td class="english">I say to you that according to the testimony of the Books. As for the angels and archangels they will remain silent.</td>
        <td class="arabic">وأقول لكم كشهادة الكتب أما الملائكة أو رؤساء الملائكة فانهم يصمتون جميعاً.</td>
    </tr>
    <tr id="table_7_row_7" class="text">
        <td class="english">So also will the saints be.</td>
        <td class="arabic">وكذلك القديسون أيضاً يصمتون جميعاً.</td>
    </tr>
    <tr id="table_7_row_8" class="text">
        <td class="english">And the judgment for God will be decisive and final in the day where they pick out the evil doers from among the righteous;</td>
        <td class="arabic">ويكون حكم الله قولاً تاماً فاصلاً فى اليوم الذى يفرز فيه الاشرار من بين الصديقين.</td>
    </tr>
    <tr id="table_7_row_9" class="text">
        <td class="english">the time when the sinners are thrown in to the hearth of burning fire.</td>
        <td class="arabic">وقت أن يلقى الخطاة فى أتون النار المتقدة.</td>
    </tr>
    <tr id="table_7_row_10" class="text">
        <td class="english">Does God need a counselor or a companion to advise him like us?</td>
        <td class="arabic">هل الله كالبشر حتى يجعل له مشيراً أو جليساً ليسأله.</td>
    </tr>
    <tr id="table_7_row_11" class="text">
        <td class="english">What can God forget that someone else may remember?</td>
        <td class="arabic">ما هو الذى ينساه الله لكى يجيب به آخر.</td>
    </tr>
    <tr id="table_7_row_12" class="text">
        <td class="english">Or can ask God about anything else other than these words. That it may be said in one voice:</td>
        <td class="arabic">أو يسأله عن كلمة إلا هذا القول فقط. أن يقال من فم واحد.</td>
    </tr>
    <tr id="table_7_row_13" class="text">
        <td class="english">“Your rules are just O Lord who rewards everyone according to his deeds.”</td>
        <td class="arabic">يا ديان الحق. أحكامك عادلة أيها المعطى كل واحد حسب أعماله.</td>
    </tr>
    <tr id="table_7_row_14" class="text">
        <td class="english">It is not us who would remind God of these things. It is rather He, the Father of all mercies, who remembers.</td>
        <td class="arabic">وليس نحن الذين نذكرك بهذا لانك أنت الذى من عندك كل الرأفات.</td>
    </tr>
    <tr id="table_7_row_16" class="intro">
        <td class="english">We conclude the homily of our Holy Father Abba Shenouda, the Archimandrite who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا شنودة رئيس المتوحدين الذى أنار عقولنا وعيون قلوبنا باسم الآب والابن والروح القدس الاله الواحد آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(51:4, 33:10)
        <span class="arabic-caption">المزمور قبطياً<br>(50: 4 ، 32: 10)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">That You may be found just when You speak, </td>
            <td class="coptic">Ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉⲕⲙⲁⲓ ϧⲉⲛ ⲛⲉⲕⲥⲁϫⲓ : </td>
            <td class="arabic">لكيما تبرر فى أقوالك </td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">And blameless when You judge.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲛ̀ⲧⲉⲕ ϭ̀ⲣⲟ ⲉⲕⲛⲁⲓϩⲁⲡ.</td>
            <td class="arabic">وتغلب إذا حوكمت.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">The Lord brings the counsel of the nations to nothing; </td>
            <td class="coptic">Ⲡ̀⳪ ⲛⲁϫⲉⲣ ⲛⲓⲥⲟϭⲛⲓ ⲛ̀ⲧⲉ ⲛⲓⲉⲑⲛⲟⲥ ⲉ̀ⲃⲟⲗ :</td>
            <td class="arabic">الرب يفرق مؤامرة الامم </td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">He makes the plans of the peoples of no effect.</td>
            <td class="coptic">ⲟⲩⲟϩ ϥ̀ⲛⲁϣⲟϣϥ ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ ϩⲁⲛⲗⲁⲟⲥ</td>
            <td class="arabic">ويرذل أفكار الشعوب.</td>
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
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ϩⲁⲛⲟⲩⲟⲛ ⲇⲉ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲟⲩ ⲁⲩϣⲉⲛⲱⲟⲩ ϩⲁ ⲛⲓⲫⲁⲣⲓⲥⲉⲟⲥ ⲁⲩⲧⲁⲙⲱⲟⲩ ⲉ̀ⲫⲏⲉ̀ⲧⲁϥⲁⲓⲧⲟⲩ ⲛ̀ϫⲉ Ⲓⲏⲥⲟⲩⲥ : Ⲁⲩⲑⲱⲟⲩϯ ⲟⲩⲛ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲫⲁⲣⲓⲥⲉⲟⲥ ⲛ̀ⲟⲩⲑⲱⲟⲩⲧⲥ : ⲟⲩⲟϩ ⲛⲁⲩϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲟⲩ ⲡⲉⲧⲉⲛⲛⲁⲁⲓϥ ⲛⲁϣⲉ ⲛⲓⲙⲏⲓⲛⲓ ⲛ̀ⲧⲉ ⲡⲁⲓⲣⲱⲙⲓ ⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ : Ⲟⲩⲟϩ ⲉ̀ϣⲱⲡ ⲁⲛϣⲁⲛⲭⲁϥ ⲙ̀ⲡⲁⲓⲣⲏϯ ⲥⲉⲛⲁⲛⲁϩϯ ⲉ̀ⲣⲟϥ ⲧⲏⲣⲟⲩ : ⲟⲩⲟϩ ⲥⲉⲛⲁⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲣⲱⲙⲉⲟⲥ ⲥⲉⲛⲁⲱⲗⲓ ⲙ̀ⲡⲉⲛⲧⲟⲡⲟⲥ ⲛⲉⲙ ⲡⲉⲛϣ̀ⲗⲟⲗ. Ⲁϥⲉ̀ⲣⲟⲩⲱ̀ ⲇⲉ ⲛ̀ϫⲉ ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲕⲁⲓⲁ̀ⲫⲁ ϥⲟⲓ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ .<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(51:4 and 33:10)
    <span class="arabic-caption">المزمور<br>(50: 4 ، 32: 10)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">That You may be found just when You speak, And blameless when You judge.</td>
        <td class="arabic">لكيما تبرر فى أقوالك وتغلب إذا حوكمت.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">The Lord brings the counsel of the nations to nothing; He makes the plans of the peoples of no effect.</td>
        <td class="arabic"> الرب يفرق مؤامرة الامم ويرذل أفكار الشعوب.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(John 11:46-57)
    <span class="arabic-caption">الانجيل<br>(يوحنا 11: 46 - 57)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">But some of them went away to the Pharisees and told them the things Jesus did.</td>
        <td class="arabic">وَأَمَّا قَوْمٌ مِنْهُمْ فَمَضَوْا إِلَى الْفَرِّيسِيِّينَ وَقَالُوا لَهُمْ عَمَّا فَعَلَ يَسُوعُ.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">Then the chief priests and the Pharisees gathered a council and said, "What shall we do? For this Man works many signs.</td>
        <td class="arabic">فَجَمَعَ رُؤَسَاءُ الْكَهَنَةِ وَالْفَرِّيسِيُّونَ مَجْمَعاً وَقَالُوا: «مَاذَا نَصْنَعُ؟ فَإِنَّ هَذَا الإِنْسَانَ يَعْمَلُ آيَاتٍ كَثِيرَةً.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">If we let Him alone like this, everyone will believe in Him, and the Romans will come and take away both our place and nation."</td>
        <td class="arabic">إِنْ تَرَكْنَاهُ هَكَذَا يُؤْمِنُ الْجَمِيعُ بِهِ فَيَأْتِي الرُّومَانِيُّونَ وَيَأْخُذُونَ مَوْضِعَنَا وَأُمَّتَنَا».</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">And one of them, Caiaphas, being high priest that year, said to them, "You know nothing at all,</td>
        <td class="arabic">فَقَالَ لَهُمْ وَاحِدٌ مِنْهُمْ وَهُوَ قَيَافَا كَانَ رَئِيساً لِلْكَهَنَةِ فِي تِلْكَ السَّنَةِ: «أَنْتُمْ لَسْتُمْ تَعْرِفُونَ شَيْئاً</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">nor do you consider that it is expedient for us that one man should die for the people, and not that the whole nation should perish."</td>
        <td class="arabic">ولاَ تُفَكِّرُونَ أَنَّهُ خَيْرٌ لَنَا أَنْ يَمُوتَ إِنْسَانٌ وَاحِدٌ عَنِ الشَّعْبِ وَلاَ تَهْلِكَ الأُمَّةُ كُلُّهَا».</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">Now this he did not say on his own authority; but being high priest that year he prophesied that Jesus would die for the nation,</td>
        <td class="arabic">وَلَمْ يَقُلْ هَذَا مِنْ نَفْسِهِ بَلْ إِذْ كَانَ رَئِيساً لِلْكَهَنَةِ فِي تِلْكَ السَّنَةِ تَنَبَّأَ أَنَّ يَسُوعَ مُزْمِعٌ أَنْ يَمُوتَ عَنِ الأُمَّةِ</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">and not for that nation only, but also that He would gather together in one the children of God who were scattered abroad.</td>
        <td class="arabic">وَلَيْسَ عَنِ الأُمَّةِ فَقَطْ بَلْ لِيَجْمَعَ أَبْنَاءَ اللَّهِ الْمُتَفَرِّقِينَ إِلَى وَاحِدٍ.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">Then, from that day on, they plotted to put Him to death.</td>
        <td class="arabic">فَمِنْ ذَلِكَ الْيَوْمِ تَشَاوَرُوا لِيَقْتُلُوهُ.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Therefore Jesus no longer walked openly among the Jews, but went from there into the country near the wilderness, to a city called Ephraim, and there remained with His disciples.</td>
        <td class="arabic">فَلَمْ يَكُنْ يَسُوعُ أَيْضاً يَمْشِي بَيْنَ الْيَهُودِ علاَنِيَةً بَلْ مَضَى مِنْ هُنَاكَ إِلَى الْكُورَةِ الْقَرِيبَةِ مِنَ الْبَرِّيَّةِ إِلَى مَدِينَةٍ يُقَالُ لَهَا أَفْرَايِمُ وَمَكَثَ هُنَاكَ مَعَ تلاَمِيذِهِ.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">And the Passover of the Jews was near, and many went from the country up to Jerusalem before the Passover, to purify themselves.</td>
        <td class="arabic">وَكَانَ فِصْحُ الْيَهُودِ قَرِيباً. فَصَعِدَ كَثِيرُونَ مِنَ الْكُوَرِ إِلَى أُورُشَلِيمَ قَبْلَ الْفِصْحِ لِيُطَهِّرُوا أَنْفُسَهُمْ.</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">Then they sought Jesus, and spoke among themselves as they stood in the temple, "What do you think--that He will not come to the feast?"</td>
        <td class="arabic">فَكَانُوا يَطْلُبُونَ يَسُوعَ وَيَقُولُونَ فِيمَا بَيْنَهُمْ وَهُمْ وَاقِفُونَ فِي الْهَيْكَلِ: «مَاذَا تَظُنُّونَ؟ هَلْ هُوَ لاَ يَأْتِي إِلَى الْعِيدِ؟»</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">Now both the chief priests and the Pharisees had given a command, that if anyone knew where He was, he should report it, that they might seize Him.</td>
        <td class="arabic">وَكَانَ أَيْضاً رُؤَسَاءُ الْكَهَنَةِ وَالْفَرِّيسِيُّونَ قَدْ أَصْدَرُوا أَمْراً أَنَّهُ إِنْ عَرَفَ أَحَدٌ أَيْنَ هُوَ فَلْيَدُلَّ عَلَيْهِ لِكَيْ يُمْسِكُوهُ.</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_18" class="intro">
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
        <td class="english">The exposition of the FIRST Hour of the DAY of WEDNESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من يوم الأربعاء من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">The Pharisees gathered together and said one unto one another, “What can we do?</td>
        <td class="arabic">اجتمع الفريسيون وخاطب بعضهم بعضاً قائلين: ما الذى نصنع؟</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">This man is performing many miracles and supernatural acts.</td>
        <td class="arabic">فان هذا الرجل يصنع آيات كثيرة وعجائب غزيرة!</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">If we leave him alone, all the people will believe in him and then the Romans will replace us.”</td>
        <td class="arabic">وان تركناه فسيؤمن به الكل، ويأتى الرومانيون ويأخذون موضعنا.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">One of them who is Caiaphas, the chief priest of the Jews said, “ It is necessary for you that one man should die for the people and that the whole nation should not perish.”</td>
        <td class="arabic">فقال أحدهم الذى هو قيافا رئيس كهنة اليهود: إنه يجب أن يموت رجل واحد عن الشعب دون الأمة كلها.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">And from then on they conspired to kill Jesus.</td>
        <td class="arabic">ومن تلك الساعة تشاوروا على يسوع مشورة رديئة ليقتلوه.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">Jesus went to a place in the wilderness and stayed there with his disciples.</td>
        <td class="arabic">فمضى يسوع إلى كورة فى البرية، وأقام هناك مع تلاميذه.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">And it was about the time of the feast of the Jews who sought to kill Him.</td>
        <td class="arabic">وكان قد قرب عيد اليهود، وكانوا يطلبونه لكى يقتلوه.</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">Truly it was a fulfillment of Isaiah's prophecy, “Wail on a nation full of evil, a brood of evildoers; children who are corrupt.</td>
        <td class="arabic">بالحقيقة كمل عليهم ما قاله اشعياء النبى: الويل للأمة المملوءة اثماً، الزرع الفاسد، الأبناء المخالفين.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">For the ox knows its owner and the donkey its master, but Israel does not know that I am his creator.</td>
        <td class="arabic">من أجل أن الثور عرف مذوده والحمار عرف قانيه، أما اسرائيل فلم يعرفنى، ولم يعلم أننى خالقه.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">Therefore, they shall be with their descendents in Hell.</td>
        <td class="arabic">من أجل ذلك يخلدون هم وأبناؤهم فى الجحيم، بيتهم إلى الأبد.</td>
    </tr>
</table>
${expositionConclusionHtml}

</div>
<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOW3sc" class="navigationButton">
        <td class="englishButton">The THIRD Hour of the DAY of WEDNESDAY</td>
        <td class="arabicButton">الساعة الأولى من يوم الأربعاء</td>
    </tr>
    <tr id="table_50_row_1" data-navigation="DaytimeLitaniessc" class="navigationButton">
        <td class="englishButton">Daytime Litanies</td>
        <td class="arabicButton">طلبات النهار</td>
    </tr>
</table>
</div>


`;

};