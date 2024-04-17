import { hourIntro, paschalPraise3 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNanGreat, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOF11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of GOOD FRIDAY","يوم الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","8","9","ELEVENTH","الحادية عشر","DAY of GOOD FRIDAY","يوم الجمعة العظيمة");
    const copticGospelIntroHtml = copticGospelIntro("11");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("19");
    const expositionConclusionHtml = expositionConclusion("21");
    const daytimeLitaniesHtml = daytimeLitanies("22",true);
    const evnotiNaiNanGreatHtml = evnotiNaiNanGreat("23");
    const endOfServiceHymnHtml = endOfServiceHymn("24");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ̀ⲛⲧⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲡⲉϫⲉ ̀Ⲡ⳪ ̀ⲙⲘⲱ̀ⲩⲥⲏⲥ ⲛⲉⲙ ̀̀Ⲁⲁⲣⲱⲛ ϧⲉⲛ ⲡⲕⲁϩⲓ ̀ⲛⲬⲏⲙⲓ ⲉϥϫⲱ̀ⲙⲙⲟⲥ Ϫⲉ ⲡⲁⲓ̀ⲁⲃⲟⲧ ⲫⲁⲓ ̀ⲧⲁⲣⲭⲏ ̀ⲛⲛⲓ̀ⲁⲃⲟⲧ ̀ⲛⲧⲉ ϯⲣⲟⲙⲡⲓ : Ⲥⲁϫⲓ ⲛⲉⲙ ϯⲥⲩⲛⲁⲅⲱⲏ ⲧⲏⲣⲥ ̀ⲛⲧⲉ ⲛⲉⲛϣⲏⲣⲓ ̀ⲙ̀ⲡⲒ̅ⲥ̅ⲗ ⲉⲕϫⲱ̀ⲙⲙⲟⲥ : ϫⲉ ̀ⲛ̀ϧⲣⲏⲓ ϧⲉⲛⲥⲟⲩ ⲙⲏⲧ ̀ⲙⲡⲓ̀ⲁⲃⲟⲧ </td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲗⲉⲩⲓⲧⲓⲕⲟⲛ ̀ⲛⲧⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">̀Ⲉ̀ϩⲣⲏⲓ ϧⲉⲛ ⲡⲓⲁⲃⲟⲧ ̀ⲛϣⲟⲣⲡ ̀ⲛⲥⲟⲩ ̅ⲓ̅ⲇ ̀ⲙⲡⲓⲁⲃⲟⲧ ϫⲓⲛ ⲡⲛⲁⲩ ̀ⲛⲣⲟⲩϩⲓ ⲙⲡⲓⲡⲁⲥⲭⲁ ̀ⲙⲠ⳪ ⲟⲩⲟϩ ϧⲉⲛ ⲥⲟⲩ ⲓⲉ ̀ⲙⲡⲓ̀ⲁⲃⲟⲧ ̀ⲛⲟⲩⲱⲧ ̀ⲡϣⲁ ⲡⲉ ̀ⲛⲛⲁⲑⲁⲃ ̀ⲙⲠ⳪.</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    
    <table id="table_3" title="1st Prophecy">
        <caption id="caption_table_3" class="caption">1st Prophecy<br>(Exodus 12:1-14)
        <span class="arabic-caption">النبوة الأولي<br>(سفر الخروج 12: 1 - 14)</span></caption>
        <tr id="table_3_row_1" class="intro">
            <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_3_row_4" class="text">
            <td class="english">Now the Lord spoke to Moses and Aaron in the land of Egypt, saying,</td>
            <td class="arabic">وَقَالَ الرَّبُّ لِمُوسَى وَهَارُونَ فِي ارْضِ مِصْرَ:</td>
        </tr>
        <tr id="table_3_row_5" class="text">
            <td class="english">"This month shall be your beginning of months; it shall be the first month of the year to you.</td>
            <td class="arabic">«هَذَا الشَّهْرُ يَكُونُ لَكُمْ رَاسَ الشُّهُورِ. هُوَ لَكُمْ اوَّلُ شُهُورِ السَّنَةِ.</td>
        </tr>
        <tr id="table_3_row_6" class="text">
            <td class="english">Speak to all the congregation of Israel, saying: 'On the tenth day of this month every man shall take for himself a lamb, according to the house of his father, a lamb for a household.</td>
            <td class="arabic">كَلِّمَا كُلَّ جَمَاعَةِ اسْرَائِيلَ قَائِلَيْنِ فِي الْعَاشِرِ مِنْ هَذَا الشَّهْرِ يَاخُذُونَ لَهُمْ كُلُّ وَاحِدٍ شَاةً بِحَسَبِ بُيُوتِ الابَاءِ. شَاةً لِلْبَيْتِ.</td>
        </tr>
        <tr id="table_3_row_7" class="text">
            <td class="english">And if the household is too small for the lamb, let him and his neighbor next to his house take it according to the number of the persons; according to each man's need you shall make your count for the lamb.</td>
            <td class="arabic">وَانْ كَانَ الْبَيْتُ صَغِيرا عَنْ انْ يَكُونَ كُفْوا لِشَاةٍ يَاخُذُ هُوَ وَجَارُهُ الْقَرِيبُ مِنْ بَيْتِهِ بِحَسَبِ عَدَدِ النُّفُوسِ. كُلُّ وَاحِدٍ عَلَى حَسَبِ اكْلِهِ تَحْسِبُونَ لِلشَّاةِ.</td>
        </tr>
        <tr id="table_3_row_8" class="text">
            <td class="english">Your lamb shall be without blemish, a male of the first year. You may take it from the sheep or from the goats.</td>
            <td class="arabic">تَكُونُ لَكُمْ شَاةً صَحِيحَةً ذَكَرا ابْنَ سَنَةٍ تَاخُذُونَهُ مِنَ الْخِرْفَانِ اوْ مِنَ الْمَوَاعِزِ.</td>
        </tr>
        <tr id="table_3_row_9" class="text">
            <td class="english">Now you shall keep it until the fourteenth day of the same month. Then the whole assembly of the congregation of Israel shall kill it at twilight.</td>
            <td class="arabic">وَيَكُونُ عِنْدَكُمْ تَحْتَ الْحِفْظِ الَى الْيَوْمِ الرَّابِعَ عَشَرَ مِنْ هَذَا الشَّهْرِ. ثُمَّ يَذْبَحُهُ كُلُّ جُمْهُورِ جَمَاعَةِ اسْرَائِيلَ فِي الْعَشِيَّةِ.</td>
        </tr>
        <tr id="table_3_row_10" class="text">
            <td class="english">And they shall take some of the blood and put it on the two doorposts and on the lintel of the houses where they eat it.</td>
            <td class="arabic">وَيَاخُذُونَ مِنَ الدَّمِ وَيَجْعَلُونَهُ عَلَى الْقَائِمَتَيْنِ وَالْعَتَبَةِ الْعُلْيَا فِي الْبُيُوتِ الَّتِي يَاكُلُونَهُ فِيهَا.</td>
        </tr>
        <tr id="table_3_row_11" class="text">
            <td class="english">Then they shall eat the flesh on that night; roasted in fire, with unleavened bread and with bitter herbs they shall eat it.</td>
            <td class="arabic">وَيَاكُلُونَ اللَّحْمَ تِلْكَ اللَّيْلَةَ مَشْوِيّا بِالنَّارِ مَعَ فَطِيرٍ. عَلَى اعْشَابٍ مُرَّةٍ يَاكُلُونَهُ.</td>
        </tr>
        <tr id="table_3_row_12" class="text">
            <td class="english">Do not eat it raw, nor boiled at all with water, but roasted in fire--its head with its legs and its entrails.</td>
            <td class="arabic">لا تَاكُلُوا مِنْهُ نَيْئا اوْ طَبِيخا مَطْبُوخا بِالْمَاءِ بَلْ مَشْوِيّا بِالنَّارِ. رَاسَهُ مَعَ اكَارِعِهِ وَجَوْفِهِ.</td>
        </tr>
        <tr id="table_3_row_13" class="text">
            <td class="english">You shall let none of it remain until morning, and what remains of it until morning you shall burn with fire.</td>
            <td class="arabic">وَلا تُبْقُوا مِنْهُ الَى الصَّبَاحِ. وَالْبَاقِي مِنْهُ الَى الصَّبَاحِ تُحْرِقُونَهُ بِالنَّارِ.</td>
        </tr>
        <tr id="table_3_row_14" class="text">
            <td class="english">And thus you shall eat it: with a belt on your waist, your sandals on your feet, and your staff in your hand. So you shall eat it in haste. It is the Lord's Passover.</td>
            <td class="arabic">وَهَكَذَا تَاكُلُونَهُ: احْقَاؤُكُمْ مَشْدُودَةٌ وَاحْذِيَتُكُمْ فِي ارْجُلِكُمْ وَعِصِيُّكُمْ فِي ايْدِيكُمْ. وَتَاكُلُونَهُ بِعَجَلَةٍ. هُوَ فِصْحٌ لِلرَّبِّ.</td>
        </tr>
        <tr id="table_3_row_15" class="text">
            <td class="english">For I will pass through the land of Egypt on that night, and will strike all the firstborn in the land of Egypt, both man and beast; and against all the gods of Egypt I will execute judgment: I am the Lord.</td>
            <td class="arabic">فَانِّي اجْتَازُ فِي ارْضِ مِصْرَ هَذِهِ اللَّيْلَةَ وَاضْرِبُ كُلَّ بِكْرٍ فِي ارْضِ مِصْرَ مِنَ النَّاسِ وَالْبَهَائِمِ. وَاصْنَعُ احْكَاما بِكُلِّ الِهَةِ الْمِصْرِيِّينَ. انَا الرَّبُّ.</td>
        </tr>
        <tr id="table_3_row_16" class="text">
            <td class="english">Now the blood shall be a sign for you on the houses where you are. And when I see the blood, I will pass over you; and the plague shall not be on you to destroy you when I strike the land of Egypt.</td>
            <td class="arabic">وَيَكُونُ لَكُمُ الدَّمُ عَلامَةً عَلَى الْبُيُوتِ الَّتِي انْتُمْ فِيهَا فَارَى الدَّمَ وَاعْبُرُ عَنْكُمْ فَلا يَكُونُ عَلَيْكُمْ ضَرْبَةٌ لِلْهَلاكِ حِينَ اضْرِبُ ارْضَ مِصْرَ.</td>
        </tr>
        <tr id="table_3_row_17" class="text">
            <td class="english">So this day shall be to you a memorial; and you shall keep it as a feast to the Lord throughout your generations.</td>
            <td class="arabic">وَيَكُونُ لَكُمْ هَذَا الْيَوْمُ تَذْكَارا فَتُعَيِّدُونَهُ عِيدا لِلرَّبِّ. فِي اجْيَالِكُمْ تُعَيِّدُونَهُ فَرِيضَةً ابَدِيَّةً.</td>
        </tr>
        <tr id="table_3_row_19" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_4" title="2nd Prophecy">
        <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Leviticus 23:5-15)
        <span class="arabic-caption">النبوة الثانية<br>(سفر اللاويين 23: 5 - 15)</span></caption>
        <tr id="table_4_row_1" class="intro">
            <td class="english">A reading from the book of Leviticus of Moses the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من زكريا النبى بركته المقدسة تكون معنا، آمين.</td>
        </tr>
        <tr id="table_4_row_4" class="text">
            <td class="english">On the fourteenth day of the first month at twilight is the Lord's Passover.</td>
            <td class="arabic">فِي الشَّهْرِ الاوَّلِ فِي الرَّابِعَ عَشَرَ مِنَ الشَّهْرِ بَيْنَ الْعِشَاءَيْنِ فِصْحٌ لِلرَّبِّ.</td>
        </tr>
        <tr id="table_4_row_5" class="text">
            <td class="english">And on the fifteenth day of the same month is the Feast of Unleavened Bread to the Lord; seven days you must eat unleavened bread.</td>
            <td class="arabic">وَفِي الْيَوْمِ الْخَامِسَ عَشَرَ مِنْ هَذَا الشَّهْرِ عِيدُ الْفَطِيرِ لِلرَّبِّ. سَبْعَةَ ايَّامٍ تَاكُلُونَ فَطِيرا.</td>
        </tr>
        <tr id="table_4_row_6" class="text">
            <td class="english">On the first day you shall have a holy convocation; you shall do no customary work on it.</td>
            <td class="arabic">فِي الْيَوْمِ الاوَّلِ يَكُونُ لَكُمْ مَحْفَلٌ مُقَدَّسٌ. عَمَلا مَا مِنَ الشُّغْلِ لا تَعْمَلُوا.</td>
        </tr>
        <tr id="table_4_row_7" class="text">
            <td class="english">But you shall offer an offering made by fire to the Lord for seven days. The seventh day shall be a holy convocation; you shall do no customary work on it.' "</td>
            <td class="arabic">وَسَبْعَةَ ايَّامٍ تُقَرِّبُونَ وَقُودا لِلرَّبِّ. فِي الْيَوْمِ السَّابِعِ يَكُونُ مَحْفَلٌ مُقَدَّسٌ. عَمَلا مَا مِنَ الشُّغْلِ لا تَعْمَلُوا».</td>
        </tr>
        <tr id="table_4_row_8" class="text">
            <td class="english">And the Lord spoke to Moses, saying,</td>
            <td class="arabic">وقَالَ الرَّبُّ لِمُوسَى:</td>
        </tr>
        <tr id="table_4_row_9" class="text">
            <td class="english">"Speak to the children of Israel, and say to them: 'When you come into the land which I give to you, and reap its harvest, then you shall bring a sheaf of the firstfruits of your harvest to the priest.</td>
            <td class="arabic">«قُلْ لِبَنِي اسْرَائِيلَ: مَتَى جِئْتُمْ الَى الارْضِ الَّتِي انَا اعْطِيكُمْ وَحَصَدْتُمْ حَصِيدَهَا تَاتُونَ بِحُزْمَةِ اوَّلِ حَصِيدِكُمْ الَى الْكَاهِنِ.</td>
        </tr>
        <tr id="table_4_row_10" class="text">
            <td class="english">He shall wave the sheaf before the Lord, to be accepted on your behalf; on the day after the Sabbath the priest shall wave it.</td>
            <td class="arabic">فَيُرَدِّدُ الْحُزْمَةَ امَامَ الرَّبِّ لِلرِّضَا عَنْكُمْ. فِي غَدِ السَّبْتِ يُرَدِّدُهَا الْكَاهِنُ.</td>
        </tr>
        <tr id="table_4_row_11" class="text">
            <td class="english">And you shall offer on that day, when you wave the sheaf, a male lamb of the first year, without blemish, as a burnt offering to the Lord.</td>
            <td class="arabic">وَتَعْمَلُونَ يَوْمَ تَرْدِيدِكُمُ الْحُزْمَةَ خَرُوفا صَحِيحا حَوْلِيّا مُحْرَقَةً لِلرَّبِّ.</td>
        </tr>
        <tr id="table_4_row_13" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>   


    <table id="table_5" title="Homily">
        <caption id="caption_table_5" class="caption">Homily<br>(Abba Athanasius the Apostolic)
        <span class="arabic-caption">العظة<br>(الأنبا أثناسيوس الرسولي)</span></caption>
        <tr id="table_5_row_1" class="intro">
            <td class="english">A homily of our holy father Abba Athanasius the Apostolic. May his blessings be with us. Amen.</td>
            <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ̀ⲛⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ̀ⲉⲣⲉ ⲡⲉϥ̀ⲥⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">عظة لأبينا القديس الأنبا أثناسيوس الرسولي بركته تكون معنا آمين.</td>
        </tr>
        <tr id="table_5_row_4" class="text">
            <td class="english">It is so written in the scriptures; if our souls are following the law of God, the powers of darkness will not overpower us,</td>
            <td class="arabic">مكتوب فى الكتب هكذا أن نفوسنا إذا كانت مرتبطة بناموس الله فلن تقوى علينا قوات الظلمة.</td>
        </tr>
        <tr id="table_5_row_5" class="text">
            <td class="english">but if we drift away from God they will prevail on us.</td>
            <td class="arabic">واذا ابتعدنا عن الله فهى تتسلط علينا.</td>
        </tr>
        <tr id="table_5_row_6" class="text">
            <td class="english">Brethren, who want to be salvaged, teach yourselves to float in the depth of God’s richness and wisdom.</td>
            <td class="arabic">فأنت أيها الإنسان الذى تريد أن تخلص علم ذاتك أن تسبح فى لجة غنى وحكمة الله.</td>
        </tr>
        <tr id="table_5_row_7" class="text">
            <td class="english">Spread your arms in the likeness of the Cross to cross the great sea of this life and reach to God.</td>
            <td class="arabic">ابسط يديك على مثال الصليب لتعبر البحر العظيم. الذى هو هذا الدهر وتمضى إلى الله. فأما الشكوك المانعة من السباحة.</td>
        </tr>
        <tr id="table_5_row_8" class="text">
            <td class="english">The hindering doubts are for those who live away from the commands of the universal  church.</td>
            <td class="arabic">فهى الذين يسلكون خارجاً عن أوامر الكنيسة</td>
        </tr>
        <tr id="table_5_row_9" class="text">
            <td class="english">I mean disbelief, adultery, evil report and love of money that is the root of all evils, but the sign of the Cross is spread over all the creation.</td>
            <td class="arabic">الجامعة أعنى عدم الايمان الزنا النميمة محبة الفضة التى هى أصل لكل الشرور أما علامة الصليب فهى مبسوطة على كل الخليقة</td>
        </tr>
        <tr id="table_5_row_10" class="text">
            <td class="english">If the sun does not emit its rays it cannot glow, neither would the moon light.</td>
            <td class="arabic">الشمس إذا لم تبسط شعاعها لا تستطيع أن تضئ والقمر إذ لم يبسط قرنية لا ينير.</td>
        </tr>
        <tr id="table_5_row_11" class="text">
            <td class="english">The birds in the sky, if they do not spread their wings they cannot fly,</td>
            <td class="arabic">وكذلك طيور السماء أيضاً إذ لم تبسط أجنحتها لا تستطيع الطيران.</td>
        </tr>
        <tr id="table_5_row_12" class="text">
            <td class="english">neither can the ships leave port if they do not spread their sails.</td>
            <td class="arabic">والسفن أيضاً إن لم تفرش قلوعها لا يمكنها أن تقلع.</td>
        </tr>
        <tr id="table_5_row_13" class="text">
            <td class="english">Behold, Moses the Archprophet spread his arms and defeated Amalec,</td>
            <td class="arabic">هوذا موسى رئيس الانبياء لما بسط يديه قهر عماليق.</td>
        </tr>
        <tr id="table_5_row_14" class="text">
            <td class="english">Daniel was saved from the lion’s den, Jonah from the fish’s belly</td>
            <td class="arabic">ودانيال نجا من جب الاسد. ويونان من بطن الحوت.</td>
        </tr>
        <tr id="table_5_row_15" class="text">
            <td class="english">and Takla when they threw her to the lions she was saved by the likeness of the cross;</td>
            <td class="arabic">وتكله عندما القوها للسباع تخلصت بمثال الصليب.</td>
        </tr>
        <tr id="table_5_row_16" class="text">
            <td class="english">also Susanna from the hands of the two old men,</td>
            <td class="arabic">وسوسنة من يدى الشيخين</td>
        </tr>
        <tr id="table_5_row_17" class="text">
            <td class="english">Judith from Holofernes and the three young men from the burning fiery furnace.</td>
            <td class="arabic">ويهوديت من يد الوفرنيس. والثلاثة فتية القديسون من أتون النار المتقدة.</td>
        </tr>
        <tr id="table_5_row_18" class="text">
            <td class="english">All those were saved by the likeness of the Cross.</td>
            <td class="arabic">هؤلاء كلهم خلصوا بمثال الصليب</td>
        </tr>
        <tr id="table_5_row_19" class="text">
            <td class="english">It was also said, let your port be in one place, the Church;</td>
            <td class="arabic">وقيل أيضاً ليكن مستقرك فى موضع واحد الذى هو البيعة</td>
        </tr>
        <tr id="table_5_row_20" class="text">
            <td class="english">to be nourished by the words of the books by the divine bread and the blood of Christ.</td>
            <td class="arabic">لتتعزى بكلام الكتب. ومن الخبز السمائى. ومن دم المسيح وتتعزى كل حين من كلام الكتب.</td>
        </tr>
        <tr id="table_5_row_22" class="intro">
            <td class="english">We conclude the homily of our holy father Abba Athanasius the Apostolic, who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ̀ⲥ̀ⲫⲣⲁϫⲓⲍⲓⲛ ̀ⲛϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ̀ⲛⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ⲫⲏ̀ⲉⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲙⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ̀ⲛⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ̀ⲫⲣⲁⲛ ̀ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ ̀Ⲡϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">فلنختم موعظة أبينا القديس  الأنبا أثناسيوس الرسولي الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
        </tr>
    </table>


    <table id="table_6" title="Tenouosht">
        <caption id="caption_table_6" class="caption"><span class="coptic-caption">Ⲧⲉⲛⲟⲩ̀ⲱϣⲧ</span></caption>
        <tr id="table_6_row_1" class="intro">
            <td class="english">We worship you O Christ with your good Father and the Holy Spirit for You were crucified and saved us.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩ̀ⲱϣⲧ ̀ⲙⲙⲟⲕ ̀ⲱ Ⲡ̅ⲭ̅ⲥ ⲛⲉⲙ ⲡⲉⲕⲓⲱⲧ ̀ⲛⲁⲅⲁⲑⲟⲥ ⲛⲉⲙ ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ ϫⲉ ⲁⲩⲁϣⲕ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic">نسجد لكَ أيها المسيح مع أبيك الصالح والروح القدس لأنكَ صلبت وخلصتنا</td>
        </tr>
    </table>

    <table id="table_7" title="Pauline Epistle">
        <caption id="caption_table_7" class="caption">Pauline Epistle<br>(Galatians 3:1-6)
        <span class="arabic-caption">العظة<br>(غلاطية 3: 1 - 6)</span></caption>
        <tr id="table_7_row_1" class="intro">
            <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the epistle of our teacher Paul to the Galatians. May his blessing be with us. Amen.</td>
            <td class="arabic">بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. من رسالة معلمنا بولس الرسول إلى أهل غلاطية بركته تكون معنا. آمين.</td>
        </tr>
        <tr id="table_7_row_4" class="text">
            <td class="english">O [you] before whose eyes Jesus Christ was clearly portrayed among you as crucified?</td>
            <td class="arabic">أَيُّهَا الْغَلاَطِيُّونَ الأَغْبِيَاءُ، مَنْ رَقَاكُمْ حَتَّى لاَ تُذْعِنُوا لِلْحَقِّ؟ أَنْتُمُ الَّذِينَ أَمَامَ عُيُونِكُمْ قَدْ رُسِمَ يَسُوعُ الْمَسِيحُ بَيْنَكُمْ مَصْلُوباً!</td>
        </tr>
        <tr id="table_7_row_5" class="text">
            <td class="english">This only I want to learn from you: Did you receive the Spirit by the works of the law, or by the hearing of faith?</td>
            <td class="arabic">أُرِيدُ أَنْ أَتَعَلَّمَ مِنْكُمْ هَذَا فَقَطْ: أَبِأَعْمَالِ النَّامُوسِ أَخَذْتُمُ الرُّوحَ أَمْ بِخَبَرِ الإِيمَانِ؟</td>
        </tr>
        <tr id="table_7_row_6" class="text">
            <td class="english">Are you so foolish? Having begun in the Spirit, are you now being made perfect by the flesh?</td>
            <td class="arabic">أَهَكَذَا أَنْتُمْ أَغْبِيَاءُ! أَبَعْدَمَا ابْتَدَأْتُمْ بِالرُّوحِ تُكَمَّلُونَ الآنَ بِالْجَسَدِ؟</td>
        </tr>
        <tr id="table_7_row_7" class="text">
            <td class="english">Have you suffered so many things in vain--if indeed it was in vain?</td>
            <td class="arabic">أَهَذَا الْمِقْدَارَ احْتَمَلْتُمْ عَبَثاً؟ إِنْ كَانَ عَبَثاً!</td>
        </tr>
        <tr id="table_7_row_8" class="text">
            <td class="english">Therefore He who supplies the Spirit to you and works miracles among you, does He do it by the works of the law, or by the hearing of faith?--</td>
            <td class="arabic">فَالَّذِي يَمْنَحُكُمُ الرُّوحَ، وَيَعْمَلُ قُوَّاتٍ فِيكُمْ، أَبِأَعْمَالِ النَّامُوسِ أَمْ بِخَبَرِ الإِيمَانِ؟</td>
        </tr>
        <tr id="table_7_row_9" class="text">
            <td class="english">just as Abraham "believed God, and it was accounted to him for righteousness."</td>
            <td class="arabic">كَمَا «آمَنَ إِبْرَاهِيمُ بِاللهِ فَحُسِبَ لَهُ بِرّاً».</td>
        </tr>
        <tr id="table_7_row_11" class="intro">
            <td class="english">The grace of God the Father be with you all. Amen.</td>
            <td class="arabic">نعمة الله الآب تحل مع جميعكم آمين.</td>
        </tr>
    </table>
</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_10" title="Coptic Psalm">
        <caption class="caption" id="caption_table_10">Coptic Psalm<br>(27:12, 35:11-12, 16)
        <span class="arabic-caption">المزمور قبطي<br>(27: 12 و 35: 11 - 12 و 16)</span></caption>

        <tr id="table_10_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_10_row_1" class="text">
            <td class="english">I spread out my hands to You;</td>
            <td class="coptic">Ⲁⲓⲫⲱⲣϣ ̀ⲛⲛⲁϫⲓϫ ̀ⲉ̀ⲡϣⲱⲓ ϩⲁⲣⲟⲕ :</td>
            <td class="arabic">بَسَطْتُ إِلَيْكَ يَدَيَّ. نَفْسِي نَحْوَكَ كَأَرْضٍ يَابِسَةٍ. </td>
        </tr>
        <tr id="table_10_row_2" class="text">
            <td class="english">Answer me speedily, O Lord; My spirit fails! Do not hide Your face from me, Lest I be like those who go down into the pit.</td>
            <td class="coptic">ⲥⲱⲧⲉⲙ ⲉⲣⲟⲓ ̀ⲛⲭⲱⲗⲉⲙ ̀Ⲡ⳪ ϫⲉ ⲁϥⲙⲟⲩⲛⲕ ̀ⲛϫⲉ ⲡⲁ̀ⲡⲛⲉⲩⲙⲁ : ̀ⲙⲡⲉⲣⲧⲁⲥⲑⲟ ̀ⲙⲡⲉⲕϩⲟ ⲥⲁⲃⲟⲗ ̀ⲙⲙⲟⲓ ⲟⲩⲟϩ ̀ⲛⲧⲁⲉⲣ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲛⲏⲉⲑⲛⲁ ̀ⲉ̀ϧⲣⲏⲓ ̀ⲉ̀ⲫⲗⲁⲕⲕⲟⲥ </td>
            <td class="arabic">أَسْرِعْ أَجِبْنِي يَا رَبُّ. فَنِيَتْ رُوحِي. لاَ تَحْجُبْ وَجْهَكَ عَنِّي فَأُشْبِهَ الْهَابِطِينَ فِي الْجُبِّ.</td>
        </tr>
        <tr id="table_10_row_3" class="text">
            <td class="english">Into Your hand I commit my spirit; You have redeemed me, O Lord God of truth.</td>
            <td class="coptic">Ⲉⲓ̀ⲉⲭⲱ ̀ⲙⲡⲁ ̀ⲡⲛⲉⲩⲙⲁ ϧⲉⲛ ⲛⲉⲕϫⲓϫ : ⲁⲕⲥⲟⲧⲧ ̀Ⲡ⳪ Ⲫϯ ̀ⲛⲧⲉ ϯⲙⲉⲑⲙⲏⲓ :</td>
            <td class="arabic">فِي يَدِكَ أَسْتَوْدِعُ رُوحِي. فَدَيْتَنِي يَا رَبُّ إِلَهَ الْحَقِّ.</td>
        </tr>
        </tr>
        <tr id="table_10_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_12" title="Coptic Gospel">
        <caption class="caption" id="caption_table_12">Coptic Gospels
        <span class="arabic-caption">الإناجيل قبطي</span></caption>
        <tr id="table_12_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_12_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_12_row_2" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲓⲥ ⲡⲓⲕⲁⲧⲁⲡⲉⲧⲁⲥⲙⲁ ̀ⲛⲧⲉ ⲡⲓⲉⲣⲫⲉⲓ ⲁϥ ⲫⲱϫⲓ ⲓⲥ ϫⲉⲛ ̀ⲡϣⲱⲓ ̀ⲉⲡⲉⲥⲏⲧ ⲁϥ ⲉⲣ̀ⲥⲛⲁⲩ : ⲟⲩⲟϩ ⲡⲓⲕⲁϩⲓ ⲁϥⲙⲟⲛⲙⲉⲛ : ⲛⲓⲡⲉⲧⲣⲁ ⲁⲩⲫⲱϫⲓ. Ⲟⲩⲟϩ ⲛⲓ̀ⲙϩⲁⲩ ⲁⲩⲟⲩⲱⲛ : ⲟⲩⲟϩ ⲟⲩⲙⲏϣ ̀ⲛⲥⲱⲙⲁ ̀ⲛⲧⲉ ⲛⲏ ̀ⲉⲑⲟⲩⲁⲃ ⲛⲏ̀ⲉⲧⲁⲩⲉⲛⲕⲟⲧ ⲁⲩⲧⲱⲟⲩⲛⲟⲩ <br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_12_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_12_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_12_row_5" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲡⲓⲕⲁⲧⲁⲡⲉⲧⲁⲥⲙⲁ ̀ⲛⲧⲉ ⲡⲓⲉⲣⲫⲉⲓ ⲁϥⲫⲱϧ ϧⲉⲛ ̀ⲥⲛⲁⲩ : ⲓⲥϫⲉⲛ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲉ̀ϧⲣⲏⲓ.̀Ⲉⲧⲁⲛⲁⲩ ⲇⲉ ̀ⲛϫⲉ ⲡⲓ̀ⲉⲕⲁⲧⲟⲛⲧⲁⲣⲭⲟⲥ ⲫⲏⲉⲧⲟϩⲓ ̀ⲉⲣⲁⲧϥ ̀ⲙⲡⲉϥ̀ⲙⲑⲟ ϫⲉ ⲁϥϯ ̀ⲙⲡⲓ̅ⲡ̅ⲛ̅ⲁ : ⲡⲉϫⲁϥ ϫⲉ : ̀ⲁⲗⲏⲑⲱⲥ ⲡⲁⲓ ⲣⲱⲙⲓ ⲛⲉ ̀ⲡϣⲏⲣⲓ ̀ⲙⲪϯ ⲡⲉ.<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_12_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ̀ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_12_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_12_row_8" class="text">
            <td class="coptic">̀̀Ⲉⲧⲁϥⲛⲁⲩ ⲇⲉ ̀ⲛϫⲉ ⲡⲓ̀ⲉⲕⲁⲧⲟⲛⲧⲁⲣⲭⲟⲥ ̀ⲉⲫⲏ̀ⲉⲧⲁϥϣⲱⲡⲓ ⲁϥϯ̀ⲱⲟⲩ ̀ⲙⲪϯ ⲉϥϫⲱ̀ⲙⲙⲟⲥ : ϫⲉ ⲟⲛⲧⲱⲥ ⲛⲉⲟⲩ̀ⲑⲙⲏⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ : Ⲟⲩⲟϩ ⲛⲓⲙⲏϣ ⲧⲏⲣⲟⲩ ̀ⲉⲧⲁⲩ̀ⲓ ̀ⲉϫⲉⲛ ⲧⲁⲓ ⲑⲉⲟⲣⲓ̀ⲁ ̀ⲉⲧⲁⲩⲛⲁⲩ ̀ⲉⲛⲏ̀ⲉⲧⲁⲩϣⲱⲡⲓ : ⲁⲩⲧⲁⲥⲑⲟⲉⲩⲕⲱⲗϩ ϧⲉⲛ ⲧⲟⲩⲙⲉⲥⲧⲉⲛϩⲏⲧ<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_12_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ̀ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_12_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_12_row_11" class="text">
            <td class="coptic">Ⲛⲓⲟⲩⲇⲁⲓ ⲟⲩⲛ̀ⲉⲡⲓⲇⲏ ⲛⲉ̀ⲧⲡⲁⲣⲁⲥⲕⲉⲩⲏ ⲇⲉ : ϩⲓⲛⲁ ̀ⲛⲧⲟⲩ̀ϣⲧⲉⲙ ⲟϩⲓ ̀ⲛϫⲉ ⲛⲓⲥⲱⲙⲁ ϩⲓϫⲉⲛ ⲡⲓⲏ ̀ⲙ̀ⲡⲥⲁⲃⲃⲁⲧⲟⲛ : ⲛⲉⲟⲩⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡ̀ⲉϩⲟⲟⲩ ̀ⲙ̀ⲡⲥⲁⲃⲃⲁⲧⲟⲛ ̀ⲉⲧⲉ̀ⲙⲙⲁⲩ : ⲁⲩϯϩⲟ ̀ⲉⲠⲓⲗⲁⲧⲟⲥ ϩⲓⲛⲁ ̀ⲛⲧⲟⲩⲕⲱϣ ̀ⲛⲛⲟⲩⲕⲉⲗⲓ ⲟⲩⲟϩ ̀ⲛⲧⲟⲩⲟⲗⲟⲩ.<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_12_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
<table id="table_13" title="Psalm">
    <caption id="caption_table_13" class="caption">Psalm<br>(143:6-7, 31:5)
    <span class="arabic-caption">المزمور<br>(143: 6-7 و 31: 5)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">I spread out my hands to You;</td>
        <td class="arabic">بَسَطْتُ إِلَيْكَ يَدَيَّ. نَفْسِي نَحْوَكَ كَأَرْضٍ يَابِسَةٍ.</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">Answer me speedily, O Lord; My spirit fails! Do not hide Your face from me, Lest I be like those who go down into the pit. Alleluia.</td>
        <td class="arabic">أَسْرِعْ أَجِبْنِي يَا رَبُّ. فَنِيَتْ رُوحِي. لاَ تَحْجُبْ وَجْهَكَ عَنِّي فَأُشْبِهَ الْهَابِطِينَ فِي الْجُبِّ.  هلليلويا.</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">Into Your hand I commit my spirit; You have redeemed me, O Lord God of truth.</td>
        <td class="arabic">فِي يَدِكَ أَسْتَوْدِعُ رُوحِي. فَدَيْتَنِي يَا رَبُّ إِلَهَ الْحَقِّ.</td>
    </tr>
    <tr id="table_13_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(Matthew 27:51-56)
    <span class="arabic-caption">الانجيل<br>(متى  27: 51-56)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Matthew the evangelist. May his blessings be with us, Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">Then, behold, the veil of the temple was torn in two from top to bottom; and the earth quaked, and the rocks were split,</td>
        <td class="arabic">وَإِذَا حِجَابُ الْهَيْكَلِ قَدِ انْشَقَّ إِلَى اثْنَيْنِ مِنْ فَوْقُ إِلَى أَسْفَلُ. وَالأَرْضُ تَزَلْزَلَتْ وَالصُّخُورُ تَشَقَّقَتْ</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">and the graves were opened; and many bodies of the saints who had fallen asleep were raised;</td>
        <td class="arabic">وَالْقُبُورُ تَفَتَّحَتْ وَقَامَ كَثِيرٌ مِنْ أَجْسَادِ الْقِدِّيسِينَ الرَّاقِدِينَ</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">and coming out of the graves after His resurrection, they went into the holy city and appeared to many.</td>
        <td class="arabic">وَخَرَجُوا مِنَ الْقُبُورِ بَعْدَ قِيَامَتِهِ وَدَخَلُوا الْمَدِينَةَ الْمُقَدَّسَةَ وَظَهَرُوا لِكَثِيرِينَ.</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">So when the centurion and those with him, who were guarding Jesus, saw the earthquake and the things that had happened, they feared greatly, saying, "Truly this was the Son of God!"</td>
        <td class="arabic">وَأَمَّا قَائِدُ الْمِئَةِ وَالَّذِينَ مَعَهُ يَحْرُسُونَ يَسُوعَ فَلَمَّا رَأَوُا الزَّلْزَلَةَ وَمَا كَانَ خَافُوا جِدّاً وَقَالُوا: «حَقّاً كَانَ هَذَا ابْنَ اللَّهِ».</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">And many women who followed Jesus from Galilee, ministering to Him, were there looking on from afar,</td>
        <td class="arabic">وَكَانَتْ هُنَاكَ نِسَاءٌ كَثِيرَاتٌ يَنْظُرْنَ مِنْ بَعِيدٍ وَهُنَّ كُنَّ قَدْ تَبِعْنَ يَسُوعَ مِنَ الْجَلِيلِ يَخْدِمْنَهُ</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">among whom were Mary Magdalene, Mary the mother of James and Joses, and the mother of Zebedee's sons.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">وَبَيْنَهُنَّ مَرْيَمُ الْمَجْدَلِيَّةُ وَمَرْيَمُ أُمُّ يَعْقُوبَ وَيُوسِي وَأُمُّ ابْنَيْ زَبْدِي.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_14_row_11" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_15" title="Psalm">
    <caption id="caption_table_15" class="caption">Psalm<br>(143:6-7, 31:5)
    <span class="arabic-caption">المزمور<br>(143: 6-7 و 31: 5)</span></caption>
    <tr id="table_15_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_15_row_4" class="text">
        <td class="english">I spread out my hands to You;</td>
        <td class="arabic">بَسَطْتُ إِلَيْكَ يَدَيَّ. نَفْسِي نَحْوَكَ كَأَرْضٍ يَابِسَةٍ. .</td>
    </tr>
    <tr id="table_15_row_5" class="text">
        <td class="english">Answer me speedily, O Lord; My spirit fails! Do not hide Your face from me, Lest I be like those who go down into the pit. Alleluia.</td>
        <td class="arabic">أَسْرِعْ أَجِبْنِي يَا رَبُّ. فَنِيَتْ رُوحِي. لاَ تَحْجُبْ وَجْهَكَ عَنِّي فَأُشْبِهَ الْهَابِطِينَ فِي الْجُبِّ.  هلليلويا.</td>
    </tr>
    <tr id="table_15_row_6" class="text">
        <td class="english">Into Your hand I commit my spirit; You have redeemed me, O Lord God of truth.</td>
        <td class="arabic">فِي يَدِكَ أَسْتَوْدِعُ رُوحِي. فَدَيْتَنِي يَا رَبُّ إِلَهَ الْحَقِّ.</td>
    </tr>
    <tr id="table_15_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_16" title="Gospel">
    <caption id="caption_table_16" class="caption">Gospel<br>(Mark 15:38-41)
    <span class="arabic-caption">الانجيل<br>(مرقس 15: 38 - 41)</span></caption>
    <tr id="table_16_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">Then the veil of the temple was torn in two from top to bottom.</td>
        <td class="arabic">وَانْشَقَّ حِجَابُ الْهَيْكَلِ إِلَى اثْنَيْنِ مِنْ فَوْقُ إِلَى أَسْفَلُ.</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">So when the centurion, who stood opposite Him, saw that He cried out like this and breathed His last, he said, "Truly this Man was the Son of God!"</td>
        <td class="arabic">وَلَمَّا رَأَى قَائِدُ الْمِئَةِ الْوَاقِفُ مُقَابِلَهُ أَنَّهُ صَرَخَ هَكَذَا وَأَسْلَمَ الرُّوحَ قَالَ: «حَقّاً كَانَ هَذَا الإِنْسَانُ ابْنَ اللَّهِ!»</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">There were also women looking on from afar, among whom were Mary Magdalene, Mary the mother of James the Less and of Joses, and Salome,</td>
        <td class="arabic">وَكَانَتْ أَيْضاً نِسَاءٌ يَنْظُرْنَ مِنْ بَعِيدٍ بَيْنَهُنَّ مَرْيَمُ الْمَجْدَلِيَّةُ وَمَرْيَمُ أُمُّ يَعْقُوبَ الصَّغِيرِ وَيُوسِي وَسَالُومَةُ</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">who also followed Him and ministered to Him when He was in Galilee, and many other women who came up with Him to Jerusalem.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">اللَّوَاتِي أَيْضاً تَبِعْنَهُ وَخَدَمْنَهُ حِينَ كَانَ فِي الْجَلِيلِ. وَأُخَرُ كَثِيرَاتٌ اللَّوَاتِي صَعِدْنَ مَعَهُ إِلَى أُورُشَلِيمَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_16_row_9" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_17" title="Gospel">
    <caption id="caption_table_17" class="caption">Gospel<br>(Luke 23:47-49)
    <span class="arabic-caption">الانجيل<br>(لوقا 23: 47-49)</span></caption>
    <tr id="table_17_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_17_row_4" class="text">
        <td class="english">So when the centurion saw what had happened, he glorified God, saying, "Certainly this was a righteous Man!"</td>
        <td class="arabic">فَلَمَّا رَأَى قَائِدُ الْمِئَةِ مَا كَانَ مَجَّدَ اللهَ قَائِلاً: «بِالْحَقِيقَةِ كَانَ هَذَا الإِنْسَانُ بَارّاً!»</td>
    </tr>
    <tr id="table_17_row_5" class="text">
        <td class="english">And the whole crowd who came together to that sight, seeing what had been done, beat their breasts and returned.</td>
        <td class="arabic">وَكُلُّ الْجُمُوعِ الَّذِينَ كَانُوا مُجْتَمِعِينَ لِهَذَا الْمَنْظَرِ لَمَّا أَبْصَرُوا مَا كَانَ رَجَعُوا وَهُمْ يَقْرَعُونَ صُدُورَهُمْ.</td>
    </tr>
    <tr id="table_17_row_6" class="text">
        <td class="english">But all His acquaintances, and the women who followed Him from Galilee, stood at a distance, watching these things.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">وَكَانَ جَمِيعُ مَعَارِفِهِ وَنِسَاءٌ كُنَّ قَدْ تَبِعْنَهُ مِنَ الْجَلِيلِ وَاقِفِينَ مِنْ بَعِيدٍ يَنْظُرُونَ ذَلِكَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_17_row_8" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_18" title="Gospel">
    <caption id="caption_table_18" class="caption">Gospel<br>(John 19:31-37)
    <span class="arabic-caption">الانجيل<br>(يوحنا 19: 31-37)</span></caption>
    <tr id="table_18_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_18_row_4" class="text">
        <td class="english">Therefore, because it was the Preparation Day, that the bodies should not remain on the cross on the Sabbath (for that Sabbath was a high day), the Jews asked Pilate that their legs might be broken, and that they might be taken away.</td>
        <td class="arabic">ثُمَّ إِذْ كَانَ اسْتِعْدَادٌ فَلِكَيْ لاَ تَبْقَى الأَجْسَادُ عَلَى الصَّلِيبِ فِي السَّبْتِ لأَنَّ يَوْمَ ذَلِكَ السَّبْتِ كَانَ عَظِيماً سَأَلَ الْيَهُودُ بِيلاَطُسَ أَنْ تُكْسَرَ سِيقَانُهُمْ وَيُرْفَعُوا.</td>
    </tr>
    <tr id="table_18_row_5" class="text">
        <td class="english">Then the soldiers came and broke the legs of the first and of the other who was crucified with Him.</td>
        <td class="arabic">فَأَتَى الْعَسْكَرُ وَكَسَرُوا سَاقَيِ الأَوَّلِ وَالآخَرِ الْمَصْلُوبَيْنِ مَعَهُ.</td>
    </tr>
    <tr id="table_18_row_6" class="text">
        <td class="english">But when they came to Jesus and saw that He was already dead, they did not break His legs.</td>
        <td class="arabic">وَأَمَّا يَسُوعُ فَلَمَّا جَاءُوا إِلَيْهِ لَمْ يَكْسِرُوا سَاقَيْهِ لأَنَّهُمْ رَأَوْهُ قَدْ مَاتَ.</td>
    </tr>
    <tr id="table_18_row_7" class="text">
        <td class="english">But one of the soldiers pierced His side with a spear, and immediately blood and water came out.</td>
        <td class="arabic">لَكِنَّ وَاحِداً مِنَ الْعَسْكَرِ طَعَنَ جَنْبَهُ بِحَرْبَةٍ وَلِلْوَقْتِ خَرَجَ دَمٌ وَمَاءٌ.</td>
    </tr>
    <tr id="table_18_row_8" class="text">
        <td class="english">And he who has seen has testified, and his testimony is true; and he knows that he is telling the truth, so that you may believe.</td>
        <td class="arabic">وَالَّذِي عَايَنَ شَهِدَ وَشَهَادَتُهُ حَقٌّ وَهُوَ يَعْلَمُ أَنَّهُ يَقُولُ الْحَقَّ لِتُؤْمِنُوا أَنْتُمْ.</td>
    </tr>
    <tr id="table_18_row_9" class="text">
        <td class="english">For these things were done that the Scripture should be fulfilled, "Not one of His bones shall be broken."</td>
        <td class="arabic">لأَنَّ هَذَا كَانَ لِيَتِمَّ الْكِتَابُ الْقَائِلُ: «عَظْمٌ لاَ يُكْسَرُ مِنْهُ».</td>
    </tr>
    <tr id="table_18_row_10" class="text">
        <td class="english">And again another Scripture says, "They shall look on Him whom they pierced."<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">وَأَيْضاً يَقُولُ كِتَابٌ آخَرُ: «سَيَنْظُرُونَ إِلَى الَّذِي طَعَنُوهُ».<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_18_row_12" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>
</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}
<table id="table_20" title="Exposition">
    <caption id="caption_table_20" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">The exposition of the ELEVENTH Hour of the DAY of Good Friday of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة التاسعة من يوم الجمعة العظيمة من البصخة المقدسة بركتها علينا. آمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">O Israel, the captive of his sins, look at how the Gentile centurion confessed the divinity of the crucified.</td>
        <td class="arabic">يا اسرائيل المسكين المسبى الذى غطت آثامه السماء، أنظر قائد المائة، الإنسان الغريب الجنس، كيف اعترف بالمصلوب!</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">Not only him but also all those around exclaimed with him saying, “Truly this was the Son of God.”</td>
        <td class="arabic">وليس هو فقط، بل والذين معه صرخوا جميعهم قائلين: ان هذا هو ابن الله.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Also the thief of the right knew His power and asked for His mercy when he saw the veil of the altar was torn in two,</td>
        <td class="arabic">كذلك اللص الذى صلب معه عرف قوته وطلب رحمته، لما نظر حجاب الهيكل انشق من فوق إلى أسفل وصار اثنين.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">the sun eclipsed and the moon became as red as blood.</td>
        <td class="arabic">ورأى الشمس قد أخفت شعاعها وأظلمت هكذا فى وسط النهار. والقمر أيضاً ستر وجهه وصار دماً من أجل خالقه.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">The powers of heaven and multitudes of the stars fell to the earth,</td>
        <td class="arabic">وقوات السموات وكثرة النجوم سقطت من السماء فى ذلك اليوم.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">the earth quaked, the rocks split, the tombs opened,</td>
        <td class="arabic">والأرض تزلزلت، والصخور تشققت، والقبور تفتحت،</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">the dead resurrected and went into town and many recognized them.</td>
        <td class="arabic">والأموات قاموا، ودخلوا إلى المدينة ظاهرين، وعرفهم كثيرون من الناس.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">When they saw that, they acknowledged the power of the crucified.</td>
        <td class="arabic">فلما نظر أولئك عرفوا قوة المصلوب على الصليب.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">But Israel was blinded; it could not see nor could comprehend.</td>
        <td class="arabic">أما اسرائيل فانطمست عيناه ولم ينظر ولم يفهم.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">Because of the Sabbath, the bodies should not be left on wood.</td>
        <td class="arabic">ومن أجل أنه فى يوم الجمعة لا يجب أن تبقى الأجساد على الخشب،</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">Thus, they asked the governor to break their knees so that they would die. They broke those of the two thieves but the Savior was already dead.</td>
        <td class="arabic">سألوا الوالى أن يكسروا ركبهم لكى يموتوا فكسروا ركب اللصين،</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">One of the soldiers put a spear through his right side and out of His side came blood and water simultaneously.</td>
        <td class="arabic">وأما المخلص فوجدوه قد مات فأسرع واحد من الجند وطعنه فى جنبه الأيمن، فجرى منه ماء ودم مرة واحدة أمام الجميع.</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english">The truthful witness saw that and his testimony is true.</td>
        <td class="arabic">والشاهد الصادق رأى هذا وشهادته هى حق،</td>
    </tr>
    <tr id="table_20_row_17" class="text">
        <td class="english">Thus, the prophecies were fulfilled that not one bone of His will be broken.</td>
        <td class="arabic">وهو أيضاً يعلم أنه قال الحق، من أجل هذا كتب كما رأى. وكمل عليه قول الناموس أنه لم يكسر له عظم،</td>
    </tr>
    <tr id="table_20_row_18" class="text">
        <td class="english">It is also written, “Then they will look on Me whom they pierced.”</td>
        <td class="arabic">وأيضاً قال: سينظرون إلى من طعنوه. فهو يدينهم أمام أعينهم.</td>
    </tr>
    <tr id="table_20_row_19" class="text">
        <td class="english">The centurion believed what the Jews rejected that Jesus saved the world through His passion.</td>
        <td class="arabic">ومضى قائد المائة إلى بيته متعجباً ممجداً لله، من أجل ما كان يذهل العقول ولم يفهمه اسرائيل.</td>
    </tr>
    <tr id="table_20_row_20" class="text">
        <td class="english">With His suffering, Jesus, the Savior, granted the world eternal salvation.</td>
        <td class="arabic">أن المخلص يسوع بآلامه المحيية خلص العالم خلاصاً أبدياً.</td>
    </tr>
</table>
${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanGreatHtml}
${endOfServiceHymnHtml}
</div>

`;

};