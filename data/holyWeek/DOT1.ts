import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOT1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","DAY of TUESDAY","يوم الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","14","15","FIRST","الأولى","DAY of TUESDAY","يوم الثلاثاء");
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
            <td class="coptic">Ⲛ̀ϩ̀ⲣⲏⲓ ⲇⲉ ϧⲉⲛ ⲡⲓⲁⲃⲟⲧ ⲙ̀ⲙⲁϩ ϣⲟⲙⲧ ⲛ̀ⲧⲉ ⲡ̀ϫⲓⲛⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡ̀Ⲓⲥⲣⲁⲏⲗ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀ⲭⲏⲙⲓ : ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ : ⲁⲩⲓ̀ ⲉϩ̀ⲣⲏⲓ ⲉ̀ⲡ̀ϣⲁϥⲉ ⲛ̀Ⲥⲓⲛⲁ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ϯⲉⲙⲓ ϫⲉ ⲡⲁⲥⲟϩⲓⲟⲩ ⲉ̀ⲃⲟⲗϩⲓⲧⲟⲧϥ ⲡⲉ : ⲟⲩⲟϩ ⲧⲉϥϫⲓϫ ⲁⲥϩ̀ⲣⲟϣ ⲉ̀ϫⲉⲛ ⲡⲁϥⲓⲁ̀ϩⲟⲙ : ⲛⲓⲙ ⲅⲁⲣ ⲉⲑⲛⲁⲉ̀ⲙⲓ ϫⲉ ϯⲛⲁϫⲉⲙϥ : ⲟⲩⲟϩ ϫⲉ ⲁⲩϯⲛⲉⲙ ⲏⲓ ϣⲁ ⲡ̀ϫⲱⲕ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀̀̀̀̀̀Ⲱⲥⲓⲉ̀ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡ⳪ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡ̀Ⲓⲥⲣⲁⲏⲗ : ϫⲉ ⲡⲓϩⲁⲡ ⲙ̀Ⲡ̀⳪ ⲟⲩⲃⲉ ⲛⲏⲉⲧϣⲟⲡ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ : ϫⲉ ⲟⲩⲏⲓ ⲙ̀ⲙⲟⲛ ⲙⲉⲑⲙⲏⲓ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Exodus 19:1-9)
    <span class="arabic-caption">النبوة الأولي<br>(خروج 19: 1 - 9)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">In the third month after the children of Israel had gone out of the land of Egypt, on the same day, they came to the Wilderness of Sinai.</td>
        <td class="arabic">فِي الشَّهْرِ الثَّالِثِ بَعْدَ خُرُوجِ بَنِي اسْرَائِيلَ مِنْ ارْضِ مِصْرَ فِي ذَلِكَ الْيَوْمِ جَاءُوا الَى بَرِّيَّةِ سِينَاءَ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">For they had departed from Rephidim, had come to the Wilderness of Sinai, and camped in the wilderness. So Israel camped there before the mountain.</td>
        <td class="arabic">ارْتَحَلُوا مِنْ رَفِيدِيمَ وَجَاءُوا الَى بَرِّيَّةِ سِينَاءَ فَنَزَلُوا فِي الْبَرِّيَّةِ. هُنَاكَ نَزَلَ اسْرَائِيلُ مُقَابِلَ الْجَبَلِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">And Moses went up to God, and the Lord called to him from the mountain, saying, "Thus you shall say to the house of Jacob, and tell the children of Israel:</td>
        <td class="arabic">وَامَّا مُوسَى فَصَعِدَ الَى اللهِ. فَنَادَاهُ الرَّبُّ مِنَ الْجَبَلِ: «هَكَذَا تَقُولُ لِبَيْتِ يَعْقُوبَ وَتُخْبِرُ بَنِي اسْرَائِيلَ:</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">'You have seen what I did to the Egyptians, and how I bore you on eagles' wings and brought you to Myself.</td>
        <td class="arabic">انْتُمْ رَايْتُمْ مَا صَنَعْتُ بِالْمِصْرِيِّينَ. وَانَا حَمَلْتُكُمْ عَلَى اجْنِحَةِ النُّسُورِ وَجِئْتُ بِكُمْ الَيَّ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Now therefore, if you will indeed obey My voice and keep My covenant, then you shall be a special treasure to Me above all people; for all the earth is Mine.</td>
        <td class="arabic">فَالانَ انْ سَمِعْتُمْ لِصَوْتِي وَحَفِظْتُمْ عَهْدِي تَكُونُونَ لِي خَاصَّةً مِنْ بَيْنِ جَمِيعِ الشُّعُوبِ. فَانَّ لِي كُلَّ الارْضِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">And you shall be to Me a kingdom of priests and a holy nation.' These are the words which you shall speak to the children of Israel."</td>
        <td class="arabic">وَانْتُمْ تَكُونُونَ لِي مَمْلَكَةَ كَهَنَةٍ وَامَّةً مُقَدَّسَةً. هَذِهِ هِيَ الْكَلِمَاتُ الَّتِي تُكَلِّمُ بِهَا بَنِي اسْرَائِيلَ».</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">So Moses came and called for the elders of the people, and laid before them all these words which the Lord commanded him.</td>
        <td class="arabic">فَجَاءَ مُوسَى وَدَعَا شُيُوخَ الشَّعْبِ وَوَضَعَ قُدَّامَهُمْ كُلَّ هَذِهِ الْكَلِمَاتِ الَّتِي اوْصَاهُ بِهَا الرَّبُّ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Then all the people answered together and said, "All that the Lord has spoken we will do." So Moses brought back the words of the people to the Lord.</td>
        <td class="arabic">فَاجَابَ جَمِيعُ الشَّعْبِ مَعا: «كُلُّ مَا تَكَلَّمَ بِهِ الرَّبُّ نَفْعَلُ». فَرَدَّ مُوسَى كَلامَ الشَّعْبِ الَى الرَّبِّ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">And the Lord said to Moses, "Behold, I come to you in the thick cloud, that the people may hear when I speak with you, and believe you forever." So Moses told the words of the people to the Lord.</td>
        <td class="arabic">فَقَالَ الرَّبُّ لِمُوسَى: «هَا انَا اتٍ الَيْكَ فِي ظَلامِ السَّحَابِ لِيَسْمَعَ الشَّعْبُ حِينَمَا اتَكَلَّمُ مَعَكَ فَيُؤْمِنُوا بِكَ ايْضا الَى الابَدِ». وَاخْبَرَ مُوسَى الرَّبَّ بِكَلامِ الشَّعْبِ.</td>
    </tr>
    <tr id="table_3_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Job 23:2-24:25)
    <span class="arabic-caption">النبوة الثانية<br>(أيوب 2:23 - 25:24)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Job the righteous. May his blessings be with us. Amen.</td>
        <td class="arabic">من أيوب الصديق بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">"Even today my complaint is bitter; My hand is listless because of my groaning.</td>
        <td class="arabic">[الْيَوْمَ أَيْضاً شَكْوَايَ تَمَرُّدٌ. ضَرْبَتِي أَثْقَلُ مِنْ تَنَهُّدِي.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">Oh, that I knew where I might find Him, That I might come to His seat!</td>
        <td class="arabic">مَنْ يُعْطِينِي أَنْ أَجِدَهُ فَآتِيَ إِلَى كُرْسِيِّهِ!</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">I would present my case before Him, And fill my mouth with arguments.</td>
        <td class="arabic">أُحْسِنُ الدَّعْوَى أَمَامَهُ وَأَمْلَأُ فَمِي حُجَجاً.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">I would know the words which He would answer me, And understand what He would say to me.</td>
        <td class="arabic">فَأَعْرِفُ الأَقْوَالَ الَّتِي بِهَا يُجِيبُنِي وَأَفْهَمُ مَا يَقُولُهُ لِي.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">Would He contend with me in His great power? No! But He would take note of me.</td>
        <td class="arabic">أَبِكَثْرَةِ قُوَّةٍ يُخَاصِمُنِي؟ كَلاَّ! وَلَكِنَّهُ كَانَ يَنْتَبِهُ إِلَيَّ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">There the upright could reason with Him, And I would be delivered forever from my Judge.</td>
        <td class="arabic">هُنَالِكَ كَانَ يُحَاجُّهُ الْمُسْتَقِيمُ وَكُنْتُ أَنْجُو إِلَى الأَبَدِ مِنْ قَاضِيَّ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">"Look, I go forward, but He is not there, And backward, but I cannot perceive Him;</td>
        <td class="arabic">هَئَنَذَا أَذْهَبُ شَرْقاً فَلَيْسَ هُوَ هُنَاكَ وَغَرْباً فَلاَ أَشْعُرُ بِهِ</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">When He works on the left hand, I cannot behold Him; When He turns to the right hand, I cannot see Him.</td>
        <td class="arabic">شِمَالاً حَيْثُ عَمَلُهُ فَلاَ أَنْظُرُهُ. يَتَعَطَّفُ الْجَنُوبَ فَلاَ أَرَاهُ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">But He knows the way that I take; When He has tested me, I shall come forth as gold.</td>
        <td class="arabic">[لأَنَّهُ يَعْرِفُ طَرِيقِي. إِذَا جَرَّبَنِي أَخْرُجُ كَالذَّهَبِ.</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">My foot has held fast to His steps; I have kept His way and not turned aside.</td>
        <td class="arabic">بِخَطَوَاتِهِ اسْتَمْسَكَتْ رِجْلِي. حَفِظْتُ طَرِيقَهُ وَلَمْ أَحِدْ.</td>
    </tr>
    <tr id="table_4_row_14" class="text">
        <td class="english">I have not departed from the commandment of His lips; I have treasured the words of His mouth more than my necessary food.</td>
        <td class="arabic">مِنْ وَصِيَّةِ شَفَتَيْهِ لَمْ أَبْرَحْ. أَكْثَرَ مِنْ فَرِيضَتِي ذَخَرْتُ كَلاَمَ فَمِهِ.</td>
    </tr>
    <tr id="table_4_row_15" class="text">
        <td class="english">"But He is unique, and who can make Him change? And whatever His soul desires, that He does.</td>
        <td class="arabic">أَمَّا هُوَ فَوَحْدَهُ فَمَنْ يَرُدُّهُ؟ وَنَفْسُهُ تَشْتَهِي فَيَفْعَلُ.</td>
    </tr>
    <tr id="table_4_row_16" class="text">
        <td class="english">For He performs what is appointed for me, And many such things are with Him.</td>
        <td class="arabic">لأَنَّهُ يُتَمِّمُ الْمَفْرُوضَ عَلَيَّ وَكَثِيرٌ مِثْلُ هَذِهِ عِنْدَهُ.</td>
    </tr>
    <tr id="table_4_row_17" class="text">
        <td class="english">Therefore I am terrified at His presence; When I consider this, I am afraid of Him.</td>
        <td class="arabic">مِنْ أَجْلِ ذَلِكَ أَرْتَاعُ قُدَّامَهُ. أَتَأَمَّلُ فَأَرْتَعِبُ مِنْهُ.</td>
    </tr>
    <tr id="table_4_row_18" class="text">
        <td class="english">For God made my heart weak, And the Almighty terrifies me;</td>
        <td class="arabic">لأَنَّ اللهَ قَدْ أَضْعَفَ قَلْبِي وَالْقَدِيرَ رَوَّعَنِي.</td>
    </tr>
    <tr id="table_4_row_19" class="text">
        <td class="english">Because I was not cut off from the presence of darkness, And He did not hide deep darkness from my face.</td>
        <td class="arabic">لأَنِّي لَمْ أُقْطَعْ قَبْلَ الظَّلاَمِ وَمِنْ وَجْهِي لَمْ يُغَطِّ الدُّجَى.</td>
    </tr>
    <tr id="table_4_row_20" class="text">
        <td class="english">"Since times are not hidden from the Almighty, Why do those who know Him see not His days?</td>
        <td class="arabic">[لِمَاذَا إِذْ لَمْ تَخْتَبِئِ الأَزْمِنَةُ مِنَ الْقَدِيرِ لاَ يَرَى عَارِفُوهُ يَوْمَهُ؟</td>
    </tr>
    <tr id="table_4_row_21" class="text">
        <td class="english">"Some remove landmarks; They seize flocks violently and feed on them;</td>
        <td class="arabic">يَنْقُلُونَ التُّخُومَ. يَغْتَصِبُونَ قَطِيعاً وَيَرْعَوْنَهُ.</td>
    </tr>
    <tr id="table_4_row_22" class="text">
        <td class="english">They drive away the donkey of the fatherless; They take the widow's ox as a pledge.</td>
        <td class="arabic">يَسْتَاقُونَ حِمَارَ الْيَتَامَى وَيَرْتَهِنُونَ ثَوْرَ الأَرْمَلَةِ.</td>
    </tr>
    <tr id="table_4_row_23" class="text">
        <td class="english">They push the needy off the road; All the poor of the land are forced to hide.</td>
        <td class="arabic">يَصُدُّونَ الْفُقَرَاءَ عَنِ الطَّرِيقِ. مَسَاكِينُ الأَرْضِ يَخْتَبِئُونَ جَمِيعاً.</td>
    </tr>
    <tr id="table_4_row_24" class="text">
        <td class="english">Indeed, like wild donkeys in the desert, They go out to their work, searching for food. The wilderness yields food for them and for their children.</td>
        <td class="arabic">هَا هُمْ كَالْفَرَاءِ فِي الْقَفْرِ يَخْرُجُونَ إِلَى عَمَلِهِمْ يُبَكِّرُونَ لِلطَّعَامِ. الْبَادِيَةُ لَهُمْ خُبْزٌ لأَوْلاَدِهِمْ.</td>
    </tr>
    <tr id="table_4_row_25" class="text">
        <td class="english">They gather their fodder in the field And glean in the vineyard of the wicked.</td>
        <td class="arabic">فِي الْحَقْلِ يَحْصُدُونَ عَلَفَهُمْ وَيُعَلِّلُونَ كَرْمَ الشِّرِّيرِ.</td>
    </tr>
    <tr id="table_4_row_26" class="text">
        <td class="english">They spend the night naked, without clothing, And have no covering in the cold.</td>
        <td class="arabic">يَبِيتُونَ عُرَاةً بِلاَ لِبْسٍ وَلَيْسَ لَهُمْ كِسْوَةٌ فِي الْبَرْدِ.</td>
    </tr>
    <tr id="table_4_row_27" class="text">
        <td class="english">They are wet with the showers of the mountains, And huddle around the rock for want of shelter.</td>
        <td class="arabic">يَبْتَلُّونَ مِنْ مَطَرِ الْجِبَالِ وَلِعَدَمِ الْمَلْجَإِ يَعْتَنِقُونَ الصَّخْرَ.</td>
    </tr>
    <tr id="table_4_row_28" class="text">
        <td class="english">"Some snatch the fatherless from the breast, And take a pledge from the poor.</td>
        <td class="arabic">[يَخْطُفُونَ الْيَتِيمَ عَنِ الثُّدِيِّ وَمِنَ الْمَسَاكِينِ يَرْتَهِنُونَ.</td>
    </tr>
    <tr id="table_4_row_29" class="text">
        <td class="english">They cause the poor to go naked, without clothing; And they take away the sheaves from the hungry.</td>
        <td class="arabic">عُرَاةً يَذْهَبُونَ بِلاَ لِبْسٍ وَجَائِعِينَ يَحْمِلُونَ حُزَماً.</td>
    </tr>
    <tr id="table_4_row_30" class="text">
        <td class="english">They press out oil within their walls, And tread winepresses, yet suffer thirst.</td>
        <td class="arabic">يَعْصُرُونَ الزَّيْتَ دَاخِلَ أَسْوَارِهِمْ. يَدُوسُونَ الْمَعَاصِرَ وَيَعْطَشُونَ.</td>
    </tr>
    <tr id="table_4_row_31" class="text">
        <td class="english">The dying groan in the city, And the souls of the wounded cry out; Yet God does not charge them with wrong.</td>
        <td class="arabic">مِنَ الْوَجَعِ أُنَاسٌ يَئِنُّونَ وَنَفْسُ الْجَرْحَى تَسْتَغِيثُ وَاللهُ لاَ يَنْتَبِهُ إِلَى الظُّلْمِ.</td>
    </tr>
    <tr id="table_4_row_32" class="text">
        <td class="english">"There are those who rebel against the light; They do not know its ways Nor abide in its paths.</td>
        <td class="arabic">[أُولَئِكَ يَكُونُونَ بَيْنَ الْمُتَمَرِّدِينَ عَلَى النُّورِ. لاَ يَعْرِفُونَ طُرُقَهُ وَلاَ يَلْبَثُونَ فِي سُبُلِهِ.</td>
    </tr>
    <tr id="table_4_row_33" class="text">
        <td class="english">The murderer rises with the light; He kills the poor and needy; And in the night he is like a thief.</td>
        <td class="arabic">مَعَ النُّورِ يَقُومُ الْقَاتِلُ. يَقْتُلُ الْمِسْكِينَ وَالْفَقِيرَ وَفِي اللَّيْلِ يَكُونُ كَاللِّصِّ.</td>
    </tr>
    <tr id="table_4_row_34" class="text">
        <td class="english">The eye of the adulterer waits for the twilight, Saying, 'No eye will see me'; And he disguises his face.</td>
        <td class="arabic">وَعَيْنُ الزَّانِي تُلاَحِظُ الْعِشَاءَ. يَقُولُ: لاَ تُرَاقِبُنِي عَيْنٌ. فَيَجْعَلُ سِتْراً عَلَى وَجْهِهِ.</td>
    </tr>
    <tr id="table_4_row_35" class="text">
        <td class="english">In the dark they break into houses Which they marked for themselves in the daytime; They do not know the light.</td>
        <td class="arabic">يَنْقُبُونَ الْبُيُوتَ فِي الظَّلاَمِ. فِي النَّهَارِ يُغْلِقُونَ عَلَى أَنْفُسِهِمْ. لاَ يَعْرِفُونَ النُّورَ.</td>
    </tr>
    <tr id="table_4_row_36" class="text">
        <td class="english">For the morning is the same to them as the shadow of death; If someone recognizes them, They are in the terrors of the shadow of death.</td>
        <td class="arabic">لأَنَّهُ سَوَاءٌ عَلَيْهِمُ الصَّبَاحُ وَظِلُّ الْمَوْتِ. لأَنَّهُمْ يَعْلَمُونَ أَهْوَالَ ظِلِّ الْمَوْتِ.</td>
    </tr>
    <tr id="table_4_row_37" class="text">
        <td class="english">"They should be swift on the face of the waters, Their portion should be cursed in the earth, So that no one would turn into the way of their vineyards.</td>
        <td class="arabic">خَفِيفٌ هُوَ عَلَى وَجْهِ الْمِيَاهِ. مَلْعُونٌ نَصِيبُهُمْ فِي الأَرْضِ. لاَ يَتَوَجَّهُ إِلَى طَرِيقِ الْكُرُومِ.</td>
    </tr>
    <tr id="table_4_row_38" class="text">
        <td class="english">As drought and heat consume the snow waters, So the grave consumes those who have sinned.</td>
        <td class="arabic">الْقَحْطُ وَالْقَيْظُ يَذْهَبَانِ بِمِيَاهِ الثَّلْجِ كَذَا الْهَاوِيَةُ بِالَّذِينَ أَخْطَأُوا.</td>
    </tr>
    <tr id="table_4_row_39" class="text">
        <td class="english">The womb should forget him, The worm should feed sweetly on him; He should be remembered no more, And wickedness should be broken like a tree.</td>
        <td class="arabic">تَنْسَاهُ الرَّحِمُ يَسْتَحْلِيهِ الدُّودُ. لاَ يُذْكَرُ بَعْدُ وَيَنْكَسِرُ الأَثِيمُ كَشَجَرَةٍ.</td>
    </tr>
    <tr id="table_4_row_40" class="text">
        <td class="english">For he preys on the barren who do not bear, And does no good for the widow.</td>
        <td class="arabic">يُسِيءُ إِلَى الْعَاقِرِ الَّتِي لَمْ تَلِدْ وَلاَ يُحْسِنُ إِلَى الأَرْمَلَةِ.</td>
    </tr>
    <tr id="table_4_row_41" class="text">
        <td class="english">"But God draws the mighty away with His power; He rises up, but no man is sure of life.</td>
        <td class="arabic">يُمْسِكُ الأَعِزَّاءَ بِقُوَّتِهِ. يَقُومُ فَلاَ يَأْمَنُ أَحَدٌ بِحَيَاتِهِ.</td>
    </tr>
    <tr id="table_4_row_42" class="text">
        <td class="english">He gives them security, and they rely on it; Yet His eyes are on their ways.</td>
        <td class="arabic">يُعْطِيهِ طُمَأْنِينَةً فَيَتَوَكَّلُ وَلَكِنْ عَيْنَاهُ عَلَى طُرُقِهِمْ.</td>
    </tr>
    <tr id="table_4_row_43" class="text">
        <td class="english">They are exalted for a little while, Then they are gone. They are brought low; They are taken out of the way like all others; They dry out like the heads of grain.</td>
        <td class="arabic">يَتَرَفَّعُونَ قَلِيلاً ثُمَّ لاَ يَكُونُونَ وَيُحَطُّونَ. كَالْكُلِّ يُجْمَعُونَ وَكَرَأْسِ السُّنْبُلَةِ يُقْطَعُونَ.</td>
    </tr>
    <tr id="table_4_row_44" class="text">
        <td class="english">"Now if it is not so, who will prove me a liar, And make my speech worth nothing?"</td>
        <td class="arabic">وَإِنْ لَمْ يَكُنْ كَذَا فَمَنْ يُكَذِّبُنِي وَيَجْعَلُ كَلاَمِي لاَ شَيْئاً؟].</td>
    </tr>
    <tr id="table_4_row_46" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Hosea 4:1-8)
    <span class="arabic-caption">النبوة الثالثة<br>(هوشع 4: 1 - 8)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Hosea the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من هوشع النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Hear the word of the Lord, You children of Israel, For the Lord brings a charge against the inhabitants of the land: "There is no truth or mercy Or knowledge of God in the land.</td>
        <td class="arabic">اِسْمَعُوا قَوْلَ الرَّبِّ يَا بَنِي إِسْرَائِيلَ: «إِنَّ لِلرَّبِّ مُحَاكَمَةً مَعَ سُكَّانِ الأَرْضِ لأَنَّهُ لاَ أَمَانَةَ وَلاَ إِحْسَانَ وَلاَ مَعْرِفَةَ اللَّهِ فِي الأَرْضِ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">By swearing and lying, Killing and stealing and committing adultery, They break all restraint, With bloodshed upon bloodshed.</td>
        <td class="arabic">لَعْنٌ وَكَذِبٌ وَقَتْلٌ وَسِرْقَةٌ وَفِسْقٌ. يَعْتَنِفُونَ وَدِمَاءٌ تَلْحَقُ دِمَاءً.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">Therefore the land will mourn; And everyone who dwells there will waste away With the beasts of the field And the birds of the air; Even the fish of the sea will be taken away.</td>
        <td class="arabic">لِذَلِكَ تَنُوحُ الأَرْضُ وَيَذْبُلُ كُلُّ مَنْ يَسْكُنُ فِيهَا مَعَ حَيَوَانِ الْبَرِّيَّةِ وَطُيُورِ السَّمَاءِ وَأَسْمَاكِ الْبَحْرِ أَيْضاً تَنْتَزِعُ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">"Now let no man contend, or rebuke another; For your people are like those who contend with the priest.</td>
        <td class="arabic">«وَلَكِنْ لاَ يُحَاكِمْ أَحَدٌ وَلاَ يُعَاتِبْ أَحَدٌ. وَشَعْبُكَ كَمَنْ يُخَاصِمُ كَاهِناً.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Therefore you shall stumble in the day; The prophet also shall stumble with you in the night; And I will destroy your mother.</td>
        <td class="arabic">فَتَتَعَثَّرُ فِي النَّهَارِ وَيَتَعَثَّرُ أَيْضاً النَّبِيُّ مَعَكَ فِي اللَّيْلِ وَأَنَا أَخْرِبُ أُمَّكَ.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">My people are destroyed for lack of knowledge. Because you have rejected knowledge, I also will reject you from being priest for Me; Because you have forgotten the law of your God, I also will forget your children.</td>
        <td class="arabic">قَدْ هَلَكَ شَعْبِي مِنْ عَدَمِ الْمَعْرِفَةِ. لأَنَّكَ أَنْتَ رَفَضْتَ الْمَعْرِفَةَ أَرْفُضُكَ أَنَا حَتَّى لاَ تَكْهَنَ لِي. وَلأَنَّكَ نَسِيتَ شَرِيعَةَ إِلَهِكَ أَنْسَى أَنَا أَيْضاً بَنِيكَ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">"The more they increased, The more they sinned against Me; I will change into shame.</td>
        <td class="arabic">عَلَى حَسْبَمَا كَثُرُوا هَكَذَا أَخْطَأُوا إِلَيَّ فَأُبْدِلُ كَرَامَتَهُمْ بِهَوَانٍ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">They eat up the sin of My people; They set their heart on their iniquity.</td>
        <td class="arabic">يَأْكُلُونَ خَطِيَّةَ شَعْبِي وَإِلَى إِثْمِهِمْ يَحْمِلُونَ نُفُوسَهُمْ.</td>
    </tr>
    <tr id="table_5_row_13" class="intro">
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
        <td class="english">Let me inform you about two matters.</td>
        <td class="arabic">أنا أخبركم بأمرين.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">Those for whom the heavens rejoiced for because of their repentance on earth;</td>
        <td class="arabic">أن كل الذين فرح بهم فى السماء لاجل توبتهم على الأرض.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">they will not suffer sadness or pain in the place they are destined to inherit.</td>
        <td class="arabic">سوف لا يرون حزناً ولا ألماً فى ذلك المكان</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">As for those whom the heavens did not rejoice for because they did not atone for their sins and did not repent for their inequities on earth,</td>
        <td class="arabic">وأما الذين لم يفرح بهم فى السماء لاجل الارتداد من توبتهم على الأرض</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">they will find neither joy nor comfort in that place.</td>
        <td class="arabic">فسوف لا يرون فرحاً ولا نياحاً فى ذلك الموضع.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">Because those who revel in pleasures and delights will enjoy neither happiness nor comfort in Heaven.</td>
        <td class="arabic">لان الذين سيصنعون فرحهم على الأرض. سوف لا يرون فرحاً ولا نياحاً من الآن.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">Have You not heard his saying Blessed are those who mourn because they shall be comforted.</td>
        <td class="arabic">أما سمعتم طوبى للحزانى فانهم يتعزون.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">Also those who do not rejoice on earth shall rejoice in heavens</td>
        <td class="arabic">وكذلك الاخرون الذين لا يفرحون على الأرض يفرحون أيضاً فى السموات</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">or have not you read, “Woe to you who laugh now for you shall weep and mourn.</td>
        <td class="arabic">أما سمعتم الويل لكم أيها الضاحكون الآن فإنكم ستبكون وتحزنون.</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">“Isn’t this the time when the meek is vested with power.</td>
        <td class="arabic">أليس هذا هو الزمان الذى فيه يلبس الضعفاء القوة.</td>
    </tr>
    <tr id="table_6_row_14" class="text">
        <td class="english">And he who is not strong will say ‘I am strong’ when he yields his heart to the Written Word. </td>
        <td class="arabic">والذى ليس بقوى يقول أنا قوى عندما يعطى قلبه للقول المكتوب.</td>
    </tr>
    <tr id="table_6_row_15" class="text">
        <td class="english">As the prophet says, “Many are those whose repeated adultery has weakened their bodies,</td>
        <td class="arabic">وكقول النبى. كثيرون هم الذين ضعفت اجسادهم.</td>
    </tr>
    <tr id="table_6_row_16" class="text">
        <td class="english">and they shall be weakened at heart as well.”</td>
        <td class="arabic">من كثرة زناهم سيضعفون أيضاً فى قلوبهم</td>
    </tr>
    <tr id="table_6_row_17" class="text">
        <td class="english">As the Book says about those, “They will be devastated by their own profanity.” As for those who struggle with courage it was said about them,</td>
        <td class="arabic">كما يقول الكتاب عن هؤلاء هكذا. انه يتحطم بنجاسة نفسه. وأما المجاهدون بشجاعة فقد قيل عنهم.</td>
    </tr>
    <tr id="table_6_row_18" class="text">
        <td class="english">“Hasten and straighten yourself to be a companion of God who preaches the Word of Truth.”</td>
        <td class="arabic">اسرع وقوم ذاتك صفياً لله. فاعلا لا يخزى. يقطع كلمة الحق.</td>
    </tr>
    <tr id="table_6_row_19" class="intro">
        <td class="english">We conclude the homily of our holy father Abba Shenouda, the Archimandrite who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا شنودة رئيس المتوحدين الذى أنار عقولنا وعيون قلوبنا باسم الآب والابن والروح القدس الاله الواحد آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(120:2, 6, 7)
        <span class="arabic-caption">المزمور قبطياً<br>(119: 2 ، 5)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Deliver my soul, O Lord, from lying lips</td>
            <td class="coptic">Ⲡ̀ϭⲟⲓⲥ ⲉⲕⲉ̀ⲛⲟϩⲉⲙ ⲛ̀ⲧⲁⲯⲩⲭⲏ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϩⲁⲛⲥ̀ⲫⲟⲧⲟⲩ ⲛ̀ⲟϫⲓ :</td>
            <td class="arabic">يارب تنجى نفسي من الشفاه الظالمة</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">And from a deceitful tongue.</td>
            <td class="coptic">ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲟⲩⲗⲁⲥ ⲛ̀ⲭ̀ⲣⲟϥ.</td>
            <td class="arabic">ومن اللسان الغاش.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">My soul has dwelt too long With one who hates peace.</td>
            <td class="coptic">Ⲛⲁⲓⲟⲓ ⲛ̀ϩⲓⲣⲏⲛⲏⲕⲟⲥ ⲡⲉ ⲛⲉⲙ ⲛⲏⲉⲑⲙⲟⲥϯ ⲛ̀ϯϩⲓⲣⲏⲛⲏ :</td>
            <td class="arabic">ومع مبغضي السلام كنت مسالماً.</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">I am for peace; But when I speak, they are for war.</td>
            <td class="coptic">ⲉ̀ϣⲱⲡ ⲁⲓϣⲁⲛⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ϣⲁⲩⲃⲱⲧⲥ ⲉ̀ⲣⲟⲓ ⲛ̀ϫⲓⲛϫⲏ:</td>
            <td class="arabic">وحين كنت أكلمهم كانوا يقاتلونني مجاناً.</td>
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
            <td class="coptic">Ⲡⲁⲗⲓⲛⲟⲛ ⲡⲉϫⲉ Ⲓⲏⲥⲟⲩⲥ ⲛⲱⲟⲩ ϫⲉ ⲁ̀ⲛⲟⲕ ϯⲛⲁϣⲉⲛⲏⲓ ⲟⲩⲟϩ ⲧⲉⲧⲉⲛⲛⲁⲕⲱϯ ⲛ̀ⲥⲱⲓ ⲟⲩⲟϩ ⲧⲉⲧⲉⲛⲛⲁϫⲉⲙⲧ ⲁⲛ ⲟⲩⲟϩ ⲧⲉⲧⲉⲛⲛⲁⲙⲟⲩ ϧⲉⲛ ⲛⲉⲧⲉⲛ ⲛⲟⲃⲓ ϫⲉ ⲡⲓⲙⲁ ⲁ̀ⲛⲟⲕ ⲉ̀ϯⲛⲁϣⲉⲛⲏⲓ ⲉ̀ⲣⲟϥ ⲙ̀ⲙⲟⲛ ϣ̀ϫⲟⲙ ⲙ̀ⲙⲱⲧⲉⲛ ⲉ̀ⲓ̀ ⲉ̀ⲣⲟϥ. Ⲛⲁⲩϫⲱ ⲟⲩⲛ ⲙ̀ⲙⲟⲥ ⲡⲉ ⲛ̀ϫⲉ ⲛⲓⲓⲟⲩⲇⲁⲓ ϫⲉ ⲙⲏⲧⲓ ⲁϥⲛⲁϧⲟⲑⲃⲉϥ ⲙ̀ⲙⲁⲩⲁⲧϥ : ϫⲉ ϥ̀ϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲡⲓⲙⲁ ⲁ̀ⲛⲟⲕ ⲉ̀ϯⲛⲁϣⲉⲛⲏⲓ ⲉ̀ⲣⲟϥ ⲛ̀ⲑⲱⲧⲉⲛ ⲛ̀ⲧⲉⲧⲉⲛⲛⲁϣ̀ⲓ̀ ⲉ̀ⲣⲟϥ ⲁⲛ. Ⲟⲩⲟϩ ⲛⲁⲩϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ ⲡⲉ ϫⲉ ⲛ̀ⲑⲱⲧⲉⲛ ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲏⲉ̀ⲧⲉ ⲛ̀ϧ̀ⲣⲏⲓ ⲁ̀ⲛⲟⲕ ⲇⲉ ⲁ̀ⲛⲟⲕ ⲟⲩ ⲉ̀ⲃⲟⲗ ⲙⲡ̀ϣⲱⲓ:<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(120:2, 6, 7)
    <span class="arabic-caption">المزمور<br>(119: 2 ، 5)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Deliver my soul, O Lord, from lying lips and from a deceitful tongue.</td>
        <td class="arabic">يارَبُّ تُنَجِّي نفسِي مِنْ الشَّفَاءِ الظَّالِمة ، ومِنْ اللِّسَانِ الغَاشِ،</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">My soul has dwelt too long With one who hates peace.</td>
        <td class="arabic">وَمَعَ مُبْغِضِي السَّلَامِ كُنْتُ صَاحِبَ سلام.</td>
    </tr>
    <tr id="table_19_row_6" class="text">
        <td class="english">I am for peace; But when I speak, they are for war.</td>
        <td class="arabic">وحِينَ كُنْتُ أُكَلِّمُهُمُ كانوا يُقاتِلُونَني مَجَّاناً.</td>
    </tr>
    <tr id="table_19_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(John 8:21-29)
    <span class="arabic-caption">الانجيل<br>(يوحنا 8: 21 - 29)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Then Jesus said to them again, "I am going away, and you will seek Me, and will die in your sin. Where I go you cannot come."</td>
        <td class="arabic">قَالَ لَهُمْ يَسُوعُ أَيْضاً: «أَنَا أَمْضِي وَسَتَطْلُبُونَنِي وَتَمُوتُونَ فِي خَطِيَّتِكُمْ. حَيْثُ أَمْضِي أَنَا لاَ تَقْدِرُونَ أَنْتُمْ أَنْ تَأْتُوا»</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">So the Jews said, "Will He kill Himself, because He says, 'Where I go you cannot come'?"</td>
        <td class="arabic">فَقَالَ الْيَهُودُ: «أَلَعَلَّهُ يَقْتُلُ نَفْسَهُ حَتَّى يَقُولُ: حَيْثُ أَمْضِي أَنَا لاَ تَقْدِرُونَ أَنْتُمْ أَنْ تَأْتُوا؟»</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">And He said to them, "You are from beneath; I am from above. You are of this world; I am not of this world.</td>
        <td class="arabic">فَقَالَ لَهُمْ: « أَنْتُمْ مِنْ أَسْفَلُ أَمَّا أَنَا فَمِنْ فَوْقُ. أَنْتُمْ مِنْ هَذَا الْعَالَمِ أَمَّا أَنَا فَلَسْتُ مِنْ هَذَا الْعَالَمِ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">Therefore I said to you that you will die in your sins; for if you do not believe that I am He, you will die in your sins."</td>
        <td class="arabic">فَقُلْتُ لَكُمْ إِنَّكُمْ تَمُوتُونَ فِي خَطَايَاكُمْ لأَنَّكُمْ إِنْ لَمْ تُؤْمِنُوا أَنِّي أَنَا هُوَ تَمُوتُونَ فِي خَطَايَاكُمْ».</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">Then they said to Him, "Who are You?" And Jesus said to them, "Just what I have been saying to you from the beginning.</td>
        <td class="arabic">فَقَالُوا لَهُ: «مَنْ أَنْتَ؟» فَقَالَ لَهُمْ يَسُوعُ: «أَنَا مِنَ الْبَدْءِ مَا أُكَلِّمُكُمْ أَيْضاً بِهِ.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">I have many things to say and to judge concerning you, but He who sent Me is true; and I speak to the world those things which I heard from Him."</td>
        <td class="arabic">إِنَّ لِي أَشْيَاءَ كَثِيرَةً أَتَكَلَّمُ وَأَحْكُمُ بِهَا مِنْ نَحْوِكُمْ لَكِنَّ الَّذِي أَرْسَلَنِي هُوَ حَقٌّ. وَأَنَا مَا سَمِعْتُهُ مِنْهُ فَهَذَا أَقُولُهُ لِلْعَالَمِ».</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">They did not understand that He spoke to them of the Father.</td>
        <td class="arabic">وَلَمْ يَفْهَمُوا أَنَّهُ كَانَ يَقُولُ لَهُمْ عَنِ الآبِ.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">Then Jesus said to them, "When you lift up the Son of Man, then you will know that I am He, and that I do nothing of Myself; but as My Father taught Me, I speak these things.</td>
        <td class="arabic">فَقَالَ لَهُمْ يَسُوعُ: «مَتَى رَفَعْتُمُ ابْنَ الإِنْسَانِ فَحِينَئِذٍ تَفْهَمُونَ أَنِّي أَنَا هُوَ وَلَسْتُ أَفْعَلُ شَيْئاً مِنْ نَفْسِي بَلْ أَتَكَلَّمُ بِهَذَا كَمَا عَلَّمَنِي أَبِي.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">" And He who sent Me is with Me. The Father has not left Me alone, for I always do those things that please Him."</td>
        <td class="arabic">وَالَّذِي أَرْسَلَنِي هُوَ مَعِي وَلَمْ يَتْرُكْنِي الآبُ وَحْدِي لأَنِّي فِي كُلِّ حِينٍ أَفْعَلُ مَا يُرْضِيهِ».</td>
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
        <td class="english">The exposition of the FIRST Hour of the DAY of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من يوم الثلاثاء من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">And Israel came to Mount Rafazin after three months in the wilderness.</td>
        <td class="arabic">جاء اسرائيل إلى جبل رافازين من بعد ثلاثة أشهر وهو فى البرية،</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">Then the Israelites came out of Egypt and Mount Sinai to this place.</td>
        <td class="arabic">وخرج بنو اسرائيل من مصر وجبل سيناء، إلى ذلك المكان فجاء</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">Moses came and stood in the presence of God; He called and spoke to him saying:</td>
        <td class="arabic">موسى ووقف قدام الله فناداه وتكلم معه قائلاً:</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">This is what you tell the house of Israel, and report to the sons of Israel.</td>
        <td class="arabic">هذا ما تقوله لبيت يعقوب، وتخبر به بنى إسرائيل:</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">You have seen the many deeds I have inflicted on the Egyptians and how I carried you with my soaring power as if you were on the wings of eagles.</td>
        <td class="arabic">انكم قد رأيتم أعمالى الكثيرة التى صنعتها أنا بالمصريين، وكيف حملتكم أنا بقوتى العالية كأنكم على أجنحة النسور.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">Keep my laws and commandments, pay heed to my words and carry out My will,</td>
        <td class="arabic">فاحفظوا ناموسى ووصاياى وانصتوا لكلامى واصنعوا ارادتى،</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">for I have chosen you from among the nations, for I have the earth and the sea as well.</td>
        <td class="arabic">فاننى اخترتكم من بين جميع الأمم. لأن لى الأرض كلها والبحر معاً.</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">You will be my kingdom, a chosen people and a holy nation.</td>
        <td class="arabic">لتصيروا لى مملكة، وشعباً مختاراً، وأمة مطهرة.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">And Moses came back and told the people all what God has said.</td>
        <td class="arabic">فجاء موسى وأخبر الشعب بجميع هذا الكلام الذى قاله الرب.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">The public cheered in one voice saying: Whatever God wills, we will observe.</td>
        <td class="arabic">فصرخ جميع الشعب بصوت واحد قائلين: كل ما يأمر به الله نحفظه.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">Moses then told the Omniscient One that the people adhered to His orders.</td>
        <td class="arabic">فقام موسى وخبر العارف أن الشعب سمع أوامره.</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">But Israel turned back, Jacob retreated, and the sons of Israel strayed away.</td>
        <td class="arabic">ثم عاد إسرائيل، ورجع يعقوب إلى خلف،  وحاد بنو إسرائيل،</td>
    </tr>
    <tr id="table_22_row_16" class="text">
        <td class="english">God’s commandments became as if they were not, and His instructions were ignored. therefore God delivered them into the hands of hateful enemies</td>
        <td class="arabic">وصارت وصاياه كلا شئ، وأوامره عادت باطلة فلذلك أسلمهم إلى أعداء مبغضين.</td>
    </tr>
    <tr id="table_22_row_17" class="text">
        <td class="english">and subjugated them to strangers once again. He humiliated them before the nations, and they lived in eternal shame and disgrace.</td>
        <td class="arabic">واستعبدوا للغرباء مرة أخرى ونكس رؤوسهم أمام الأمم. وصاروا فى فضيحة وخزى أبدى.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

</div>
<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOT3sc" class="navigationButton">
        <td class="englishButton">The THIRD Hour of the DAY of TUESDAY</td>
        <td class="arabicButton">الساعة الثالثة من يوم الثلاثاء</td>
    </tr>
    <tr id="table_50_row_1" data-navigation="DaytimeLitaniessc" class="navigationButton">
        <td class="englishButton">Daytime Litanies</td>
        <td class="arabicButton">طلبات النهار</td>
    </tr>
</table>
</div>

`;

};