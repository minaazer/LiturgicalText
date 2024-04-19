import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOM9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","DAY of MONDAY","يوم الإثنين");
    const paschalPraiseHtml = paschalPraise1("4","14","15","NINTH","التاسعة","DAY of MONDAY","يوم الإثنين");
    const copticGospelIntroHtml = copticGospelIntro("17");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("21");
    const expositionConclusionHtml = expositionConclusion("23");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲅⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲁ̀Ⲡ̀̅ⲟ̅ⲥ Ⲫϯ ϭⲓ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲉⲧⲁϥⲑⲁⲙⲓⲟϥ ⲟⲩⲟϩ ⲁϥⲭⲁϥ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲛⲟϥ ⲉⲑⲣⲉϥⲉⲣϩⲱⲃ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟϥ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲡⲉϫⲉ Ⲫϯ ϫⲉ ⲙⲁϯϩⲟ ⲙⲁϯϩⲟ ⲉ̀ⲡⲁⲗⲁⲟⲥ ⲛⲓⲟⲩⲏⲃ ⲥⲁϫⲓ ⲉ̀ⲡϩⲏ ⲧⲛ̀Ⲓ̀̅ⲗ̅ⲏ̅ⲙ ⲙⲁϯϩⲟ ⲉ̀ⲣⲟⲥ ϫⲉ ⲁϥⲁ̀ϣⲁⲓ ⲛ̀ϫⲉ ⲡⲉⲥⲑⲉⲃⲓⲟ </td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  ⲛⲓⲡⲁⲣⲟⲓⲙⲓⲁ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ) </td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲙⲡⲁⲣⲟⲓⲙⲓⲁ ⲛ̀ⲥⲟⲗⲟⲙⲱⲛ ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ. Ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲣⲟ ϧⲉⲛ ⲡⲒⲥⲣⲁⲏⲗ. </td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>

    </table>
</div>


<div class="section" id="section_3" title="Prophecies">


<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Genesis 2:15-3:24)
    <span class="arabic-caption">النبوة الأولي<br>(تكوين 2: 15- 3: 24)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Then the Lord God took the man and put him in the garden of Eden to tend and keep it.</td>
        <td class="arabic">وَاخَذَ الرَّبُّ الالَهُ ادَمَ وَوَضَعَهُ فِي جَنَّةِ عَدْنٍ لِيَعْمَلَهَا وَيَحْفَظَهَا.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">And the Lord God commanded the man, saying, "Of every tree of the garden you may freely eat;</td>
        <td class="arabic">وَاوْصَى الرَّبُّ الالَهُ ادَمَ قَائِلا: «مِنْ جَمِيعِ شَجَرِ الْجَنَّةِ تَاكُلُ اكْلا</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die."</td>
        <td class="arabic">وَامَّا شَجَرَةُ مَعْرِفَةِ الْخَيْرِ وَالشَّرِّ فَلا تَاكُلْ مِنْهَا لانَّكَ يَوْمَ تَاكُلُ مِنْهَا مَوْتا تَمُوتُ».</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">And the Lord God said, "It is not good that man should be alone; I will make him a helper comparable to him."</td>
        <td class="arabic">وَقَالَ الرَّبُّ الالَهُ: «لَيْسَ جَيِّدا انْ يَكُونَ ادَمُ وَحْدَهُ فَاصْنَعَ لَهُ مُعِينا نَظِيرَهُ».</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Out of the ground the Lord God formed every beast of the field and every bird of the air, and brought them to Adam to see what he would call them. And whatever Adam called each living creature, that was its name.</td>
        <td class="arabic">وَجَبَلَ الرَّبُّ الالَهُ مِنَ الارْضِ كُلَّ حَيَوَانَاتِ الْبَرِّيَّةِ وَكُلَّ طُيُورِ السَّمَاءِ فَاحْضَرَهَا الَى ادَمَ لِيَرَى مَاذَا يَدْعُوهَا وَكُلُّ مَا دَعَا بِهِ ادَمُ ذَاتَ نَفْسٍ حَيَّةٍ فَهُوَ اسْمُهَا.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">So Adam gave names to all cattle, to the birds of the air, and to every beast of the field. But for Adam there was not found a helper comparable to him.</td>
        <td class="arabic">فَدَعَا ادَمُ بِاسْمَاءٍ جَمِيعَ الْبَهَائِمِ وَطُيُورَ السَّمَاءِ وَجَمِيعَ حَيَوَانَاتِ الْبَرِّيَّةِ. وَامَّا لِنَفْسِهِ فَلَمْ يَجِدْ مُعِينا نَظِيرَهُ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">And the Lord God caused a deep sleep to fall on Adam, and he slept; and He took one of his ribs, and closed up the flesh in its place.</td>
        <td class="arabic">فَاوْقَعَ الرَّبُّ الالَهُ سُبَاتا عَلَى ادَمَ فَنَامَ فَاخَذَ وَاحِدَةً مِنْ اضْلاعِهِ وَمَلَا مَكَانَهَا لَحْما.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Then the rib which the Lord God had taken from man He made into a woman, and He brought her to the man.</td>
        <td class="arabic">وَبَنَى الرَّبُّ الالَهُ الضِّلْعَ الَّتِي اخَذَهَا مِنْ ادَمَ امْرَاةً وَاحْضَرَهَا الَى ادَمَ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">And Adam said: "This is now bone of my bones And flesh of my flesh; She shall be called Woman, Because she was taken out of Man."</td>
        <td class="arabic">فَقَالَ ادَمُ: «هَذِهِ الْانَ عَظْمٌ مِنْ عِظَامِي وَلَحْمٌ مِنْ لَحْمِي. هَذِهِ تُدْعَى امْرَاةً لانَّهَا مِنِ امْرِءٍ اخِذَتْ».</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh.</td>
        <td class="arabic">لِذَلِكَ يَتْرُكُ الرَّجُلُ ابَاهُ وَامَّهُ وَيَلْتَصِقُ بِامْرَاتِهِ وَيَكُونَانِ جَسَدا وَاحِدا.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">And they were both naked, the man and his wife, and were not ashamed.</td>
        <td class="arabic">وَكَانَا كِلاهُمَا عُرْيَانَيْنِ ادَمُ وَامْرَاتُهُ وَهُمَا لا يَخْجَلانِ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">Now the serpent was more cunning than any beast of the field which the Lord God had made. And he said to the woman, "Has God indeed said, 'You shall not eat of every tree of the garden'?"</td>
        <td class="arabic">وَكَانَتِ الْحَيَّةُ احْيَلَ جَمِيعِ حَيَوَانَاتِ الْبَرِّيَّةِ الَّتِي عَمِلَهَا الرَّبُّ الالَهُ فَقَالَتْ لِلْمَرْاةِ: «احَقّا قَالَ اللهُ لا تَاكُلا مِنْ كُلِّ شَجَرِ الْجَنَّةِ؟»</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">And the woman said to the serpent, "We may eat the fruit of the trees of the garden;</td>
        <td class="arabic">فَقَالَتِ الْمَرْاةُ لِلْحَيَّةِ: «مِنْ ثَمَرِ شَجَرِ الْجَنَّةِ نَاكُلُ</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">but of the fruit of the tree which is in the midst of the garden, God has said, 'You shall not eat it, nor shall you touch it, lest you die.' "</td>
        <td class="arabic">وَامَّا ثَمَرُ الشَّجَرَةِ الَّتِي فِي وَسَطِ الْجَنَّةِ فَقَالَ اللهُ: لا تَاكُلا مِنْهُ وَلا تَمَسَّاهُ لِئَلَّا تَمُوتَا».</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">Then the serpent said to the woman, "You will not surely die.</td>
        <td class="arabic">فَقَالَتِ الْحَيَّةُ لِلْمَرْاةِ: «لَنْ تَمُوتَا!</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">For God knows that in the day you eat of it your eyes will be opened, and you will be like God, knowing good and evil."</td>
        <td class="arabic">بَلِ اللهُ عَالِمٌ انَّهُ يَوْمَ تَاكُلانِ مِنْهُ تَنْفَتِحُ اعْيُنُكُمَا وَتَكُونَانِ كَاللهِ عَارِفَيْنِ الْخَيْرَ وَالشَّرَّ».</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">So when the woman saw that the tree was good for food, that it was pleasant to the eyes, and a tree desirable to make one wise, she took of its fruit and ate. She also gave to her husband with her, and he ate.</td>
        <td class="arabic">فَرَاتِ الْمَرْاةُ انَّ الشَّجَرَةَ جَيِّدَةٌ لِلاكْلِ وَانَّهَا بَهِجَةٌ لِلْعُيُونِ وَانَّ الشَّجَرَةَ شَهِيَّةٌ لِلنَّظَرِ. فَاخَذَتْ مِنْ ثَمَرِهَا وَاكَلَتْ وَاعْطَتْ رَجُلَهَا ايْضا مَعَهَا فَاكَلَ.</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">Then the eyes of both of them were opened, and they knew that they were naked; and they sewed fig leaves together and made themselves coverings.</td>
        <td class="arabic">فَانْفَتَحَتْ اعْيُنُهُمَا وَعَلِمَا انَّهُمَا عُرْيَانَانِ. فَخَاطَا اوْرَاقَ تِينٍ وَصَنَعَا لانْفُسِهِمَا مَازِرَ.</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">And they heard the sound of the Lord God walking in the garden in the cool of the day, and Adam and his wife hid themselves from the presence of the Lord God among the trees of the garden.</td>
        <td class="arabic">وَسَمِعَا صَوْتَ الرَّبِّ الالَهِ مَاشِيا فِي الْجَنَّةِ عِنْدَ هُبُوبِ رِيحِ النَّهَارِ فَاخْتَبَا ادَمُ وَامْرَاتُهُ مِنْ وَجْهِ الرَّبِّ الالَهِ فِي وَسَطِ شَجَرِ الْجَنَّةِ.</td>
    </tr>
    <tr id="table_3_row_23" class="text">
        <td class="english">Then the Lord God called to Adam and said to him, "Where are you?"</td>
        <td class="arabic">فَنَادَى الرَّبُّ الالَهُ ادَمَ: «ايْنَ انْتَ؟».</td>
    </tr>
    <tr id="table_3_row_24" class="text">
        <td class="english">So he said, "I heard Your voice in the garden, and I was afraid because I was naked; and I hid myself."</td>
        <td class="arabic">فَقَالَ: «سَمِعْتُ صَوْتَكَ فِي الْجَنَّةِ فَخَشِيتُ لانِّي عُرْيَانٌ فَاخْتَبَاتُ».</td>
    </tr>
    <tr id="table_3_row_25" class="text">
        <td class="english">And He said, "Who told you that you were naked? Have you eaten from the tree of which I commanded you that you should not eat?"</td>
        <td class="arabic">فَقَالَ: «مَنْ اعْلَمَكَ انَّكَ عُرْيَانٌ؟ هَلْ اكَلْتَ مِنَ الشَّجَرَةِ الَّتِي اوْصَيْتُكَ انْ لا تَاكُلَ مِنْهَا؟»</td>
    </tr>
    <tr id="table_3_row_26" class="text">
        <td class="english">Then the man said, "The woman whom You gave to be with me, she gave me of the tree, and I ate."</td>
        <td class="arabic">فَقَالَ ادَمُ: «الْمَرْاةُ الَّتِي جَعَلْتَهَا مَعِي هِيَ اعْطَتْنِي مِنَ الشَّجَرَةِ فَاكَلْتُ».</td>
    </tr>
    <tr id="table_3_row_27" class="text">
        <td class="english">And the Lord God said to the woman, "What is this you have done?" The woman said, "The serpent deceived me, and I ate."</td>
        <td class="arabic">فَقَالَ الرَّبُّ الالَهُ لِلْمَرْاةِ: «مَا هَذَا الَّذِي فَعَلْتِ؟» فَقَالَتِ الْمَرْاةُ: «الْحَيَّةُ غَرَّتْنِي فَاكَلْتُ».</td>
    </tr>
    <tr id="table_3_row_28" class="text">
        <td class="english">So the Lord God said to the serpent: "Because you have done this, You are cursed more than all cattle, And more than every beast of the field; On your belly you shall go, And you shall eat dust All the days of your life.</td>
        <td class="arabic">فَقَالَ الرَّبُّ الالَهُ لِلْحَيَّةِ: «لانَّكِ فَعَلْتِ هَذَا مَلْعُونَةٌ انْتِ مِنْ جَمِيعِ الْبَهَائِمِ وَمِنْ جَمِيعِ وُحُوشِ الْبَرِّيَّةِ. عَلَى بَطْنِكِ تَسْعِينَ وَتُرَابا تَاكُلِينَ كُلَّ ايَّامِ حَيَاتِكِ.</td>
    </tr>
    <tr id="table_3_row_29" class="text">
        <td class="english">And I will put enmity Between you and the woman, And between your seed and her Seed; He shall bruise your head, And you shall bruise His heel."</td>
        <td class="arabic">وَاضَعُ عَدَاوَةً بَيْنَكِ وَبَيْنَ الْمَرْاةِ وَبَيْنَ نَسْلِكِ وَنَسْلِهَا. هُوَ يَسْحَقُ رَاسَكِ وَانْتِ تَسْحَقِينَ عَقِبَهُ».</td>
    </tr>
    <tr id="table_3_row_30" class="text">
        <td class="english">To the woman He said: "I will greatly multiply your sorrow and your conception; In pain you shall bring forth children; Your desire shall be for your husband, And he shall rule over you."</td>
        <td class="arabic">وَقَالَ لِلْمَرْاةِ: «تَكْثِيرا اكَثِّرُ اتْعَابَ حَبَلِكِ. بِالْوَجَعِ تَلِدِينَ اوْلادا. وَالَى رَجُلِكِ يَكُونُ اشْتِيَاقُكِ وَهُوَ يَسُودُ عَلَيْكِ».</td>
    </tr>
    <tr id="table_3_row_31" class="text">
        <td class="english">Then to Adam He said, "Because you have heeded the voice of your wife, and have eaten from the tree of which I commanded you, saying, 'You shall not eat of it': "Cursed is the ground for your sake; In toil you shall eat of it All the days of your life.</td>
        <td class="arabic">وَقَالَ لِادَمَ: «لانَّكَ سَمِعْتَ لِقَوْلِ امْرَاتِكَ وَاكَلْتَ مِنَ الشَّجَرَةِ الَّتِي اوْصَيْتُكَ قَائِلا: لا تَاكُلْ مِنْهَا مَلْعُونَةٌ الارْضُ بِسَبَبِكَ. بِالتَّعَبِ تَاكُلُ مِنْهَا كُلَّ ايَّامِ حَيَاتِكَ.</td>
    </tr>
    <tr id="table_3_row_32" class="text">
        <td class="english">Both thorns and thistles it shall bring forth for you, And you shall eat the herb of the field.</td>
        <td class="arabic">وَشَوْكا وَحَسَكا تُنْبِتُ لَكَ وَتَاكُلُ عُشْبَ الْحَقْلِ.</td>
    </tr>
    <tr id="table_3_row_33" class="text">
        <td class="english">In the sweat of your face you shall eat bread Till you return to the ground, For out of it you were taken; For dust you are, And to dust you shall return."</td>
        <td class="arabic">بِعَرَقِ وَجْهِكَ تَاكُلُ خُبْزا حَتَّى تَعُودَ الَى الارْضِ الَّتِي اخِذْتَ مِنْهَا. لانَّكَ تُرَابٌ وَالَى تُرَابٍ تَعُودُ».</td>
    </tr>
    <tr id="table_3_row_34" class="text">
        <td class="english">And Adam called his wife's name Eve, because she was the mother of all living.</td>
        <td class="arabic">وَدَعَا ادَمُ اسْمَ امْرَاتِهِ «حَوَّاءَ» لانَّهَا امُّ كُلِّ حَيٍّ.</td>
    </tr>
    <tr id="table_3_row_35" class="text">
        <td class="english">Also for Adam and his wife the Lord God made tunics of skin, and clothed them.</td>
        <td class="arabic">وَصَنَعَ الرَّبُّ الالَهُ لِادَمَ وَامْرَاتِهِ اقْمِصَةً مِنْ جِلْدٍ وَالْبَسَهُمَا.</td>
    </tr>
    <tr id="table_3_row_36" class="text">
        <td class="english">Then the Lord God said, "Behold, the man has become like one of Us, to know good and evil. And now, lest he put out his hand and take also of the tree of life, and eat, and live forever"--</td>
        <td class="arabic">وَقَالَ الرَّبُّ الالَهُ: «هُوَذَا الانْسَانُ قَدْ صَارَ كَوَاحِدٍ مِنَّا عَارِفا الْخَيْرَ وَالشَّرَّ. وَالْانَ لَعَلَّهُ يَمُدُّ يَدَهُ وَيَاخُذُ مِنْ شَجَرَةِ الْحَيَاةِ ايْضا وَيَاكُلُ وَيَحْيَا الَى الابَدِ».</td>
    </tr>
    <tr id="table_3_row_37" class="text">
        <td class="english">therefore the Lord God sent him out of the garden of Eden to till the ground from which he was taken.</td>
        <td class="arabic">فَاخْرَجَهُ الرَّبُّ الالَهُ مِنْ جَنَّةِ عَدْنٍ لِيَعْمَلَ الارْضَ الَّتِي اخِذَ مِنْهَا.</td>
    </tr>
    <tr id="table_3_row_38" class="text">
        <td class="english">So He drove out the man; and He placed cherubim at the east of the garden of Eden, and a flaming sword which turned every way, to guard the way to the tree of life.</td>
        <td class="arabic">فَطَرَدَ الانْسَانَ وَاقَامَ شَرْقِيَّ جَنَّةِ عَدْنٍ الْكَرُوبِيمَ وَلَهِيبَ سَيْفٍ مُتَقَلِّبٍ لِحِرَاسَةِ طَرِيقِ شَجَرَةِ الْحَيَاةِ.</td>
    </tr>
    <tr id="table_3_row_40" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 40:1-5)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 40: 1 - 5)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">"Comfort, yes, comfort My people!" Says your God.</td>
        <td class="arabic">عَزُّوا عَزُّوا شَعْبِي يَقُولُ إِلَهُكُمْ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">"Speak comfort to Jerusalem, and cry out to her, That her warfare is ended, That her iniquity is pardoned; For she has received from the Lord's hand Double for all her sins."</td>
        <td class="arabic">طَيِّبُوا قَلْبَ أُورُشَلِيمَ وَنَادُوهَا بِأَنَّ جِهَادَهَا قَدْ كَمِلَ أَنَّ إِثْمَهَا قَدْ عُفِيَ عَنْهُ أَنَّهَا قَدْ قَبِلَتْ مِنْ يَدِ الرَّبِّ ضِعْفَيْنِ عَنْ كُلِّ خَطَايَاهَا.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">The voice of one crying in the wilderness: "Prepare the way of the Lord; Make straight in the desert A highway for our God.</td>
        <td class="arabic">صَوْتُ صَارِخٍ فِي الْبَرِّيَّةِ: أَعِدُّوا طَرِيقَ الرَّبِّ. قَوِّمُوا فِي الْقَفْرِ سَبِيلاً لإِلَهِنَا.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Every valley shall be exalted And every mountain and hill brought low; The crooked places shall be made straight And the rough places smooth;</td>
        <td class="arabic">كُلُّ وَطَاءٍ يَرْتَفِعُ وَكُلُّ جَبَلٍ وَأَكَمَةٍ يَنْخَفِضُ وَيَصِيرُ الْمُعَوَّجُ مُسْتَقِيماً وَالْعَرَاقِيبُ سَهْلاً.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">The glory of the Lord shall be revealed, And all flesh shall see it together; For the mouth of the Lord has spoken."</td>
        <td class="arabic">فَيُعْلَنُ مَجْدُ الرَّبِّ وَيَرَاهُ كُلُّ بَشَرٍ جَمِيعاً لأَنَّ فَمَ الرَّبِّ تَكَلَّمَ.</td>
    </tr>
    <tr id="table_4_row_10" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Proverbs 1:1-9)
    <span class="arabic-caption">النبوة الثالثة<br>(يشوع ابن سيراخ 1: 1 – 14)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء امثال سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">The proverbs of Solomon the son of David, king of Israel:</td>
        <td class="arabic">أَمْثَالُ سُلَيْمَانَ بْنِ دَاوُدَ مَلِكِ إِسْرَائِيلَ:</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">To know wisdom and instruction, To perceive the words of understanding,</td>
        <td class="arabic">لِمَعْرِفَةِ حِكْمَةٍ وَأَدَبٍ لإِدْرَاكِ أَقْوَالِ الْفَهْمِ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">To receive the instruction of wisdom, Justice, judgment, and equity;</td>
        <td class="arabic">لِقُبُولِ تَأْدِيبِ الْمَعْرِفَةِ وَالْعَدْلِ وَالْحَقِّ وَالاِسْتِقَامَةِ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">To give prudence to the simple, To the young man knowledge and discretion--</td>
        <td class="arabic">لِتُعْطِيَ الْجُهَّالَ ذَكَاءً وَالشَّابَّ مَعْرِفَةً وَتَدَبُّراً.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">A wise man will hear and increase learning, And a man of understanding will attain wise counsel,</td>
        <td class="arabic">يَسْمَعُهَا الْحَكِيمُ فَيَزْدَادُ عِلْماً وَالْفَهِيمُ يَكْتَسِبُ تَدْبِيراً.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">To understand a proverb and an enigma, The words of the wise and their riddles.</td>
        <td class="arabic">لِفَهْمِ الْمَثَلِ وَاللُّغْزِ أَقْوَالِ الْحُكَمَاءِ وَغَوَامِضِهِمْ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">The fear of the Lord is the beginning of knowledge, But fools despise wisdom and instruction.</td>
        <td class="arabic">مَخَافَةُ الرَّبِّ رَأْسُ الْمَعْرِفَةِ. أَمَّا الْجَاهِلُونَ فَيَحْتَقِرُونَ الْحِكْمَةَ وَالأَدَبَ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">My son, hear the instruction of your father, And do not forsake the law of your mother;</td>
        <td class="arabic">اِسْمَعْ يَا ابْنِي تَأْدِيبَ أَبِيكَ وَلاَ تَرْفُضْ شَرِيعَةَ أُمِّكَ</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">For they will be a graceful ornament on your head, And chains about your neck.</td>
        <td class="arabic">لأَنَّهُمَا إِكْلِيلُ نِعْمَةٍ لِرَأْسِكَ وَقَلاَئِدُ لِعُنُقِك.</td>
    </tr>
    <tr id="table_5_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>
</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(65:5,4)
        <span class="arabic-caption">المزمور قبطي<br>(65:5,4)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">You will answer us, O God of our salvation, </td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉⲣⲟⲛ ⲫϯ ⲡⲉⲛⲥⲱⲧⲏⲣ: </td>
            <td class="arabic">استجب لنا يا الله مخلصنا</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">You who are the confidence of all the ends of the earth, </td>
            <td class="coptic">ϯϩⲉⲗⲡⲓⲥ ⲛⲧⲉ ⲁⲩⲣⲏϫϥ ⲙⲡⲕⲁϩⲓ ⲧⲏⲣϥ</td>
            <td class="arabic">يا رجاء جميع اقطار الأرض: </td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Blessed is the man You choose, And cause to approach You, </td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧϥ ⲛⲫⲏⲉⲧⲁⲕⲥⲟⲧⲡϥ ⲟⲩⲟϩ ⲁⲕϣⲟⲡϥ ⲉⲣⲟⲕ: </td>
            <td class="arabic">طوبى لمن اخترته وقبلته</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">That he may dwell in Your courts.</td>
            <td class="coptic">ⲉϥⲉϣⲱⲡⲓ ϧⲉⲛ ⲛⲉⲕⲁⲩⲗⲏⲟⲩ ϣⲁⲉⲛⲉϩ:</td>
            <td class="arabic">ليسكن في ديارك إلى الابد. </td>
        </tr>
        <tr id="table_16_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_18" title="Coptic Gospel">
        <caption class="caption" id="caption_table_18">Coptic Gospels
        <span class="arabic-caption">الإناجيل قبطي</span></caption>
        <tr id="table_18_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ<̀/td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲉⲧⲁϥⲓ ⲉϧⲟⲩⲛ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ ⲁⲩⲓ̀ ϩⲁⲣⲟϥ ⲉϥϯⲥⲃⲱ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲏⲣⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ⲉⲩϫⲱⲙ̀ⲙⲟⲥ : ϫⲉ ⲁⲕⲓ̀ⲣⲓ ⲛ̀ⲛⲁⲓ ϧⲉⲛ ⲁϣ ⲛ̀ⲉⲣϣⲓϣⲓ : ⲟⲩⲟϩ ⲛⲓⲙ ⲡⲉⲧⲁϥϯ ⲙ̀ⲡⲁⲓ ⲉⲣϣⲓϣⲓ ⲛⲁⲕ. Ⲁϥⲉ̀ⲣⲟⲩⲱ̀ ⲇⲉ ⲛ̀ϫⲉ Ⲓ̅ⲏ̅ⲥ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ : ϫⲉ ϯⲛⲁϣⲉⲛⲑⲏⲛⲟⲩ ϩⲱ ⲉ̀ⲟⲩ ⲥⲁϫⲓ : ⲉ̀ϣⲱⲡ ⲁ̀ⲣⲉⲧⲉⲛϣⲁⲛⲧⲁⲙⲟⲓ ⲉ̀ⲣⲟϥ : ⲁ̀ⲛⲟⲕ ϩⲱ ϯⲛⲁⲧⲁⲙⲱⲧⲉⲛ ϫⲉ ⲁⲓⲓ̀ⲣⲓ ⲛⲛⲁⲓϧⲉⲛ ⲁϣ ⲛ̀ⲉⲣϣⲓϣⲓ. <br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_18_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ<̀/td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">

<table id="table_19" title="Psalm">
    <caption id="caption_table_19" class="caption">Psalm<br>(Psalm 65:5,4)
    <span class="arabic-caption">المزمور<br>(مزمور 65: 5 و4)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">You will answer us, O God of our salvation, You who are the confidence of all the ends of the earth,</td>
        <td class="arabic">استجب لنا يا الله مخلصنا يا رجاء جميع اقطار الأرض:</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">Blessed is the man You choose, And cause to approach You, That he may dwell in Your courts.</td>
        <td class="arabic">طوبى لمن اخترته وقبلته ليسكن فى ديارك إلى الابد.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Matthew 21:23-27)
    <span class="arabic-caption">الانجيل<br>(متى 21: 23 - 27)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Now when He came into the temple, the chief priests and the elders of the people confronted Him as He was teaching, and said, "By what authority are You doing these things? And who gave You this authority?"</td>
        <td class="arabic">وَلَمَّا جَاءَ إِلَى الْهَيْكَلِ تَقَدَّمَ إِلَيْهِ رُؤَسَاءُ الْكَهَنَةِ وَشُيُوخُ الشَّعْبِ وَهُوَ يُعَلِّمُ قَائِلِينَ: «بِأَيِّ سُلْطَانٍ تَفْعَلُ هَذَا وَمَنْ أَعْطَاكَ هَذَا السُّلْطَانَ؟»</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">But Jesus answered and said to them, "I also will ask you one thing, which if you tell Me, I likewise will tell you by what authority I do these things:</td>
        <td class="arabic">فَأَجَابَ يَسُوعُ: «وَأَنَا أَيْضاً أَسْأَلُكُمْ كَلِمَةً وَاحِدَةً فَإِنْ قُلْتُمْ لِي عَنْهَا أَقُولُ لَكُمْ أَنَا أَيْضاً بِأَيِّ سُلْطَانٍ أَفْعَلُ هَذَا:</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">The baptism of John--where was it from? From heaven or from men?" And they reasoned among themselves, saying, "If we say, 'From heaven,' He will say to us, 'Why then did you not believe him?'</td>
        <td class="arabic">مَعْمُودِيَّةُ يُوحَنَّا مِنْ أَيْنَ كَانَتْ؟ مِنَ السَّمَاءِ أَمْ مِنَ النَّاسِ؟» فَفَكَّرُوا فِي أَنْفُسِهِمْ قَائِلِينَ: «إِنْ قُلْنَا مِنَ السَّمَاءِ يَقُولُ لَنَا: فَلِمَاذَا لَمْ تُؤْمِنُوا بِهِ؟</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">But if we say, 'From men,' we fear the multitude, for all count John as a prophet."</td>
        <td class="arabic">وَإِنْ قُلْنَا: مِنَ النَّاسِ نَخَافُ مِنَ الشَّعْبِ لأَنَّ يُوحَنَّا عِنْدَ الْجَمِيعِ مِثْلُ نَبِيٍّ».</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">So they answered Jesus and said, "We do not know." And He said to them, "Neither will I tell you by what authority I do these things.”</td>
        <td class="arabic">فَأَجَابُوا يَسُوعَ: «لاَ نَعْلَمُ». فَقَالَ لَهُمْ هُوَ أَيْضاً: «وَلاَ أَنَا أَقُولُ لَكُمْ بِأَيِّ سُلْطَانٍ أَفْعَلُ هَذَا».</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_20_row_11" class="intro">
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
        <td class="english">The exposition of the NINTH Hour of the DAY of MONDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة التاسعة من يوم الاثنين من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">With Your flawless hands O Lord, You created, adorned and illuminated me like crimson.</td>
        <td class="arabic">بيديك اللتين بلا عيب يا رب خلقتنى، وزينتنى مضيئاً كثوب مزين.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">You bestowed on me the comforts of paradise and the fruits of the trees.</td>
        <td class="arabic">ووهبت لى نعيم الفردوس، وثمار الأشجار أعطيتها لى انعاماً.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">You granted me authority over all creation under heaven.</td>
        <td class="arabic">منحتنى عزة سلطانك على كل الخليقة التى تحت السماء.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">You did not deprive me of respect but rather put all things under me.</td>
        <td class="arabic">وجعلت سائر الأشياء دونى، جنس الحيوانات والوحوش ولم تعوزنى شيئاً من الكرامة وجعلت كل شئ يخضع لى.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">You gave me one commandment and I disobeyed You O my Lord and God.</td>
        <td class="arabic">وأوصيتنى وصية فخالفتها يا ربى والهى.</td>
    </tr>
    <tr id="table_22_row_9" class="intro">
        <td class="english">I ask of You O good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">When I saw that You were alone O Adam, when everything else was paired,</td>
        <td class="arabic">رأيتك يا آدم كائناً وحدك وكل شئ غير مفرد،</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">I created from your bones someone modeled after you, who looks like you,</td>
        <td class="arabic">فجلبت لك واحدة من عظامك كشبهك ومثالك،</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">and found it inappropriate to have you alone by yourself.</td>
        <td class="arabic">وقلت لا يحسن أن تكون وحدك.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">I was concerned about you and gave you power over her and all creation.</td>
        <td class="arabic">فاهتممت بك وفعلت لك هذا، وسلطتك عليها وعلى جميع المسكونة كى تكون تحت سلطانك.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">You obeyed her and disregarded My instruction. You rejected My words and commandment.</td>
        <td class="arabic">ولكنك أطعتها وتركت أوامرى ورفضت قولى ووصاياى.</td>
    </tr>
    <tr id="table_22_row_15" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy and remember me O Lord.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_16" class="text">
        <td class="english">From dust I was created and like the herbs of the field You gave me the prowess of Your power and diminished my humility.</td>
        <td class="arabic">اذكرنى يا رب، اننى تراب، ومثل العُشب الذى فى الحقل. أعطيتنى يا ربى عزة قوتك، فتناقصت حقارتى.</td>
    </tr>
    <tr id="table_22_row_17" class="text">
        <td class="english">One tree I commanded you not to touch! Why did you disobey My commandment?</td>
        <td class="arabic">شجرة واحدة أوصيتنى عنها، فكيف صرت مخالفاً لوصيتك؟</td>
    </tr>
    <tr id="table_22_row_18" class="text">
        <td class="english">You implicated the woman who I did not command as I did with you. You obeyed her, rejected My words, and then hid among the trees so that I do not see you.</td>
        <td class="arabic">واستظلمت المرأة، هذه التى لم توصها مثلى، فأطعتها ورفضت كلامك، واختفيت فى الشجر كى لا أراك؟!</td>
    </tr>
    <tr id="table_22_row_19" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">المرد: أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_20" class="text">
        <td class="english">You desired divinity and wanted to be a creator like your Lord.</td>
        <td class="arabic">فكرت (يا آدم) فى العلويات، أعنى الالوهة، وانك تصير خالقاً مثل سيدك،</td>
    </tr>
    <tr id="table_22_row_21" class="text">
        <td class="english">From the fruits of the tree you distinguished between the good and the evil to become a god.</td>
        <td class="arabic">وبثمرة الشجرة علمت الخير والشر لتصير الها.</td>
    </tr>
    <tr id="table_22_row_22" class="text">
        <td class="english">Adam, where is the glory that was bestowed on you?</td>
        <td class="arabic">يا آدم أين هو المجد الذى كان لك؟</td>
    </tr>
    <tr id="table_22_row_23" class="text">
        <td class="english">You lost the clothes I dressed you with.</td>
        <td class="arabic">تعريت من الحلة التى البستك اياها،</td>
    </tr>
    <tr id="table_22_row_24" class="text">
        <td class="english">With leaves of trees you covered your own nakedness.</td>
        <td class="arabic">وأخذت الورق من الشجرة وسترت عورتك من وجهى.</td>
    </tr>
    <tr id="table_22_row_25" class="text">
        <td class="english">I created you and knew you before your creation.</td>
        <td class="arabic">أعلمتك أننى خلقتك وعرفتك قبل أن تكون.</td>
    </tr>
    <tr id="table_22_row_26" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_27" class="text">
        <td class="english">From the beginning I informed you and instructed you with my commandments.</td>
        <td class="arabic">سبقت فأخبرتك من أول الأمر. سلمت اليك وصاياى.</td>
    </tr>
    <tr id="table_22_row_28" class="text">
        <td class="english">“Of every tree of the garden you may freely eat;</td>
        <td class="arabic">وهكذا أعلمتك عن هذه الشجرة من دون جميع الشجر الذى فى الفردوس،</td>
    </tr>
    <tr id="table_22_row_29" class="text">
        <td class="english">but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.”</td>
        <td class="arabic">هذه التى فى ثمرتها مرارة الموت، وأنك إن أكلت منها فموتاً تموت.</td>
    </tr>
    <tr id="table_22_row_30" class="text">
        <td class="english">I did not leave you ignorant but rather cautioned you.</td>
        <td class="arabic">وأنا لم أدعك جاهلاً، بل أعلمتك قبل أن يكون هذا،</td>
    </tr>
    <tr id="table_22_row_31" class="text">
        <td class="english">“You have heeded the voice of your wife,” and therefore you will be punished.</td>
        <td class="arabic">فأملت سمعك وأطعت المرأة. لذلك سأجلب عليك العقوبة.</td>
    </tr>
    <tr id="table_22_row_32" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_33" class="text">
        <td class="english">O Adam from dust you are and to dust you shall return to cleanse you from your transgressions.</td>
        <td class="arabic">يا آدم أنت تراب، وسأردك إلى التراب جزاء الأعمال التى تجاسرت عليها.</td>
    </tr>
    <tr id="table_22_row_34" class="text">
        <td class="english">And Eve, why did you do this and disobey My commandments?</td>
        <td class="arabic">وأنت يا حواء لماذا صنعت هكذا وخالفت وصاياى؟  ليس ملاك تكلم معك، ولا طائر من الجو، بل وحش، ثعبان بطبيعته، فسمعت منه مشورته.</td>
    </tr>
    <tr id="table_22_row_35" class="text">
        <td class="english">Many shall be your sorrows and your weeping will be great.</td>
        <td class="arabic">فكثيرة هى الأحزان التى تكون لك، والتنهد والنوح العظيمان.</td>
    </tr>
    <tr id="table_22_row_36" class="text">
        <td class="english">I will create enmity between you and the serpent and between your seed and his.</td>
        <td class="arabic">وسأقيم عداوة بينك وبين الحية، وبين نسلك ونسلها إلى انقضاء الدهور،</td>
    </tr>
    <tr id="table_22_row_37" class="text">
        <td class="english">“Your seed shall bruise his head and he shall bruise your heel.”</td>
        <td class="arabic">فهى ترصد عقب نسلك، ونسلك يسحق رأسها.</td>
    </tr>
    <tr id="table_22_row_38" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_39" class="text">
        <td class="english">The Savior then summoned the serpent and cursed him and his nature saying,</td>
        <td class="arabic">ثم دعا المخلص الحية ولعنها مع طبيعتها، وقال:</td>
    </tr>
    <tr id="table_22_row_40" class="text">
        <td class="english">“Because you have done this, you are cursed more than all cattle, and more than every beast of the field; and on your belly you shall go,</td>
        <td class="arabic">ملعونة أنت من بين جميع الوحوش، وعلى بطنك تسعين،</td>
    </tr>
    <tr id="table_22_row_41" class="text">
        <td class="english">and you shall eat dust all the days of your life.”</td>
        <td class="arabic">وتراب الأرض يكون لك طعاماً، من أجل أنك صرت عثرة.</td>
    </tr>
    <tr id="table_22_row_42" class="text">
        <td class="english">The enemy dwelt in you and you became a shelter for the evil.</td>
        <td class="arabic">فوجد العدو مسكناً فيك، وصرت بيتاً للشرير.</td>
    </tr>
    <tr id="table_22_row_43" class="text">
        <td class="english">Because man listened to you, cursed shall be the whole earth with him.</td>
        <td class="arabic">ومن أجل أن الرجل أمال سمعه اليك، فالأرض كلها ملعونة معه.</td>
    </tr>
    <tr id="table_22_row_44" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_45" class="text">
        <td class="english">As for Adam, the first to dwell in paradise, He told him,</td>
        <td class="arabic">وأما الرجل الذى هو آدم، أول من سكن فى الفردوس، فقال له:</td>
    </tr>
    <tr id="table_22_row_46" class="text">
        <td class="english">“Because you listened to your wife, I cursed the earth.</td>
        <td class="arabic">من أجل أنك سمعت لامرأتك، لعنت الأرض بأعمالك.</td>
    </tr>
    <tr id="table_22_row_47" class="text">
        <td class="english">Your heart shall be saddened and the earth will grow for you thorns and thistles.”</td>
        <td class="arabic">وتعيش يا آدم حزين القلب، والأرض تنبت لك حسكاً وشوكاً.</td>
    </tr>
    <tr id="table_22_row_48" class="text">
        <td class="english">Then He told Eve, “In pain you shall bring forth children;</td>
        <td class="arabic">ثم قال لحواء: ستلدين البنين بالأحزان والتنهد.</td>
    </tr>
    <tr id="table_22_row_49" class="text">
        <td class="english">your desire shall be for your husband, and he shall rule over you.”</td>
        <td class="arabic">وتشتاقين إلى بعلك، وهو يتسلط عليك.</td>
    </tr>
    <tr id="table_22_row_50" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_51" class="text">
        <td class="english">Then God said, “Behold Adam became as one of Us, knowing good and evil.</td>
        <td class="arabic">ثم قال الرب: هوذا آدم قد صار كواحد منا يعرف الخير والشر،</td>
    </tr>
    <tr id="table_22_row_52" class="text">
        <td class="english">I shall not leave him in paradise in case he should reach for the tree of life and eat of it.”</td>
        <td class="arabic">فلا أتركه فى الفردوس لئلا يمد يمينه ويأكل من شجرة الحياة.</td>
    </tr>
    <tr id="table_22_row_53" class="text">
        <td class="english">He expelled Adam and Eve from the paradise and assigned cherubim carrying swords of fire to guard its gate.</td>
        <td class="arabic">فأخرج آدم وامرأته معه من فردوس النعيم، وجعل كاروبيم وسيف نار لحراسة باب الفردوس.</td>
    </tr>
    <tr id="table_22_row_54" class="intro">
        <td class="english">I ask of You O Good One to have mercy upon me according to Your great mercy.</td>
        <td class="arabic">أسألك أيها الصالح أن تصنع معى رحمة كعظيم رحمتك.</td>
    </tr>
    <tr id="table_22_row_55" class="text">
        <td class="english">Where do I go from Your Spirit and where do I escape from Your face?</td>
        <td class="arabic">إلى أين أذهب من روحك؟ وإلى أين أهرب من وجهك؟</td>
    </tr>
    <tr id="table_22_row_56" class="text">
        <td class="english">If I ascended to the heights of heaven or descended to the lowest places, I find You there.</td>
        <td class="arabic">ان صعدت إلى أعلى السموات، أو إلى الأماكن السفلية أجدك هناك.</td>
    </tr>
    <tr id="table_22_row_57" class="text">
        <td class="english">Then, Adam went to a lower place across from the gate of paradise to till the land and eat of its fruits.</td>
        <td class="arabic">فمضى آدم إلى مكان أسفل أمام باب الفردوس،</td>
    </tr>
    <tr id="table_22_row_58" class="text">
        <td class="english">He was in the grasp of the deceiver at that place.</td>
        <td class="arabic">ليحرث فى الأرض ويأكل ثمرتها لأنه سقط فى خدعة المضل.</td>
    </tr>
    <tr id="table_22_row_59" class="text">
        <td class="english">Adam and Eve and their sons were condemned to the servitude of slavery forever, because he followed his whim.</td>
        <td class="arabic">وكتب على آدم وحواء كتاب رق العبودية، لأنه اتبع هواه هو وبنوه كلهم إلى كمال الدهور.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>


`;

};