import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOT9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","DAY of TUESDAY","يوم الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","14","15","NINTH","التاسعة","DAY of TUESDAY","يوم الثلاثاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡ̀ⲅⲱⲙ ⲛ̀ϯϫⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲉⲧⲁϥⲛⲁⲩ ⲇⲉ ⲛ̀ϫⲉ Ⲡ̀⳪ Ⲫϯ ϫⲉ ⲁⲩⲁ̀ϣⲁⲓ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲕⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ : ⲟⲩⲟϩ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉϥⲣⲁⲕⲓ ϧⲉⲛ ⲡⲉϥϩⲏⲧ ⲉ̀ⲙⲁϣⲱ ⲉ̀ϫⲉⲛ ⲡⲓⲡⲉⲧϩⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ </td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  ⲛⲓⲡⲁⲣⲟⲓⲙⲓⲁ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲁ̀ϯⲥⲟⲫⲓⲁ̀ ⲛ̀ⲟⲩⲏⲓ : ⲟⲩⲟϩ ⲁⲥⲧⲁϫⲣⲟ ⲛ̀ϣⲁϣϥ ⲛ̀ⲥ̀ⲧⲩⲗⲗⲟⲥ ϧⲁⲣⲟϥ : Ⲁⲥϧⲟⲗϧⲉⲗ ⲛ̀ⲛⲉⲥϣⲱⲧ : ⲁⲥⲑⲱⲧ ⲙ̀ⲡⲉⲥⲏⲣⲡ ϧⲉⲛⲟⲩⲙⲟⲕⲓ : ⲟⲩⲟϩ ⲁⲥⲥⲟⲃϯ ⲛ̀ⲧⲉⲥⲧ̀ⲣⲁⲡⲉⲍⲁ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲏ̀ⲥⲁⲏ̀ⲁⲥ  ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲙⲁϣⲉⲛⲁⲕ ⲉ̀ⲡ̀ϣⲱⲓ Ⲭⲓϫⲉⲛ ⲟⲩⲧⲱⲟⲩ ⲉϥϭⲟⲥⲓ ⲫⲏⲉⲧϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛ̀Ⲥⲓⲱⲛ ϭⲓⲥⲓ ⲛ̀ⲧⲉⲕⲥ̀ⲙⲏ ϧⲉⲛ ⲟⲩϫⲟⲙ ⲫⲏⲉⲧϩⲓⲱⲓϣ ⲛ̀Ⲓ̅ⲗ̅ⲏ̅ⲙ</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲇⲁⲛⲓⲏⲗ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲁⲛⲟⲕ Ⲇⲁⲛⲓⲏⲗ : ⲁⲓⲛⲁⲩ ϧⲉⲛ ⲧ̀ϩⲟⲣⲁⲥⲓⲥ ⲙ̀ⲡⲓⲉ̀ϫⲱⲣϩ : ⲛⲁⲓ ⲛⲁⲩ ⲡⲉ ϣⲁⲛ̀ⲧⲟⲩⲭⲱ ⲛ̀ϩⲁⲛⲑ̀ⲣⲟⲛⲟⲥ : ⲟⲩⲟϩ ⲡⲓⲁ̀ⲡⲁⲥ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲛⲁϥϩⲉⲙⲥⲓ ⲡⲉ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_15" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  ⲛⲓⲡⲁⲣⲟⲓⲙⲓⲁ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_16" class="text">
            <td class="coptic">Ⲛⲉⲛϫⲱⲣⲓ ⲟⲩⲟϩ ⲥⲉ ⲥ̀ⲙⲟⲩ ⲉⲣⲟⲥ ϧⲉⲛ ⲙ̀ⲙⲁⲛⲃⲱⲕ ⲉ̀ϧⲟⲩⲛ ϫⲉ ϯⲡⲁⲣⲁⲕⲁⲗⲓ ⲙ̀ⲙⲱⲧⲉⲛ ⲱ̀ ⲛⲓⲣⲱⲙⲓ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Genesis 6:5-9:7)
    <span class="arabic-caption">النبوة الأولي<br>(تكوين ص 6: 5 - 7:9)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Then the Lord saw that the wickedness of man was great in the earth, and that every intent of the thoughts of his heart was only evil continually.</td>
        <td class="arabic">وَرَاى الرَّبُّ انَّ شَرَّ الانْسَانِ قَدْ كَثُرَ فِي الارْضِ وَانَّ كُلَّ تَصَوُّرِ افْكَارِ قَلْبِهِ انَّمَا هُوَ شِرِّيرٌ كُلَّ يَوْمٍ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">And the Lord was sorry that He had made man on the earth, and He was grieved in His heart.</td>
        <td class="arabic">فَحَزِنَ الرَّبُّ انَّهُ عَمِلَ الانْسَانَ فِي الارْضِ وَتَاسَّفَ فِي قَلْبِهِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">So the Lord said, "I will destroy man whom I have created from the face of the earth, both man and beast, creeping thing and birds of the air, for I am sorry that I have made them."</td>
        <td class="arabic">فَقَالَ الرَّبُّ: «امْحُو عَنْ وَجْهِ الارْضِ الانْسَانَ الَّذِي خَلَقْتُهُ: الانْسَانَ مَعَ بَهَائِمَ وَدَبَّابَاتٍ وَطُيُورِ السَّمَاءِ. لانِّي حَزِنْتُ انِّي عَمِلْتُهُمْ».</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">But Noah found grace in the eyes of the Lord.</td>
        <td class="arabic">وَامَّا نُوحٌ فَوَجَدَ نِعْمَةً فِي عَيْنَيِ الرَّبِّ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">This is the genealogy of Noah. Noah was a just man, perfect in his generations. Noah walked with God.</td>
        <td class="arabic">هَذِهِ مَوَالِيدُ نُوحٍ: كَانَ نُوحٌ رَجُلا بَارّا كَامِلا فِي اجْيَالِهِ. وَسَارَ نُوحٌ مَعَ اللهِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">And Noah begot three sons: Shem, Ham, and Japheth.</td>
        <td class="arabic">وَوَلَدَ نُوحٌ ثَلاثَةَ بَنِينَ: سَاما وَحَاما وَيَافَثَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">The earth also was corrupt before God, and the earth was filled with violence.</td>
        <td class="arabic">وَفَسَدَتِ الارْضُ امَامَ اللهِ وَامْتَلَاتِ الارْضُ ظُلْما.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">So God looked upon the earth, and indeed it was corrupt; for all flesh had corrupted their way on the earth.</td>
        <td class="arabic">وَرَاى اللهُ الارْضَ فَاذَا هِيَ قَدْ فَسَدَتْ اذْ كَانَ كُلُّ بَشَرٍ قَدْ افْسَدَ طَرِيقَهُ عَلَى الارْضِ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">And God said to Noah, "The end of all flesh has come before Me, for the earth is filled with violence through them; and behold, I will destroy them with the earth.</td>
        <td class="arabic">فَقَالَ اللهُ لِنُوحٍ: «نِهَايَةُ كُلِّ بَشَرٍ قَدْ اتَتْ امَامِي لانَّ الارْضَ امْتَلَاتْ ظُلْما مِنْهُمْ. فَهَا انَا مُهْلِكُهُمْ مَعَ الارْضِ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">"Make yourself an ark of gopherwood; make rooms in the ark, and cover it inside and outside with pitch.</td>
        <td class="arabic">اصْنَعْ لِنَفْسِكَ فُلْكا مِنْ خَشَبِ جُفْرٍ. تَجْعَلُ الْفُلْكَ مَسَاكِنَ وَتَطْلِيهِ مِنْ دَاخِلٍ وَمِنْ خَارِجٍ بِالْقَارِ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">And this is how you shall make it: The length of the ark shall be three hundred cubits, its width fifty cubits, and its height thirty cubits.</td>
        <td class="arabic">وَهَكَذَا تَصْنَعُهُ: ثَلاثَ مِئَةِ ذِرَاعٍ يَكُونُ طُولُ الْفُلْكِ وَخَمْسِينَ ذِرَاعا عَرْضُهُ وَثَلاثِينَ ذِرَاعا ارْتِفَاعُهُ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">You shall make a window for the ark, and you shall finish it to a cubit from above; and set the door of the ark in its side. You shall make it with lower, second, and third decks.</td>
        <td class="arabic">وَتَصْنَعُ كَوّا لِلْفُلْكِ وَتُكَمِّلُهُ الَى حَدِّ ذِرَاعٍ مِنْ فَوْقُ. وَتَضَعُ بَابَ الْفُلْكِ فِي جَانِبِهِ. مَسَاكِنَ سُفْلِيَّةً وَمُتَوَسِّطَةً وَعُلْوِيَّةً تَجْعَلُهُ.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">And behold, I Myself am bringing floodwaters on the earth, to destroy from under heaven all flesh in which is the breath of life; everything that is on the earth shall die.</td>
        <td class="arabic">فَهَا انَا اتٍ بِطُوفَانِ الْمَاءِ عَلَى الارْضِ لِاهْلِكَ كُلَّ جَسَدٍ فِيهِ رُوحُ حَيَاةٍ مِنْ تَحْتِ السَّمَاءِ. كُلُّ مَا فِي الارْضِ يَمُوتُ.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">But I will establish My covenant with you; and you shall go into the ark--you, your sons, your wife, and your sons' wives with you.</td>
        <td class="arabic">وَلَكِنْ اقِيمُ عَهْدِي مَعَكَ فَتَدْخُلُ الْفُلْكَ انْتَ وَبَنُوكَ وَامْرَاتُكَ وَنِسَاءُ بَنِيكَ مَعَكَ.</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">And of every living thing of all flesh you shall bring two of every sort into the ark, to keep them alive with you; they shall be male and female.</td>
        <td class="arabic">وَمِنْ كُلِّ حَيٍّ مِنْ كُلِّ ذِي جَسَدٍ اثْنَيْنِ مِنْ كُلٍّ تُدْخِلُ الَى الْفُلْكِ لِاسْتِبْقَائِهَا مَعَكَ. تَكُونُ ذَكَرا وَانْثَى.</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">Of the birds after their kind, of animals after their kind, and of every creeping thing of the earth after its kind, two of every kind will come to you to keep them alive.</td>
        <td class="arabic">مِنَ الطُّيُورِ كَاجْنَاسِهَا وَمِنَ الْبَهَائِمَ كَاجْنَاسِهَا وَمِنْ كُلِّ دَبابَاتِ الارْضِ كَاجْنَاسِهِ. اثْنَيْنِ مِنْ كُلٍّ تُدْخِلُ الَيْكَ لِاسْتِبْقَائِهَا.</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">And you shall take for yourself of all food that is eaten, and you shall gather it to yourself; and it shall be food for you and for them."</td>
        <td class="arabic">وَانْتَ فَخُذْ لِنَفْسِكَ مِنْ كُلِّ طَعَامٍ يُؤْكَلُ وَاجْمَعْهُ عِنْدَكَ فَيَكُونَ لَكَ وَلَهَا طَعَاما».</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">Thus Noah did; according to all that God commanded him, so he did.</td>
        <td class="arabic">فَفَعَلَ نُوحٌ حَسَبَ كُلِّ مَا امَرَهُ بِهِ اللهُ. هَكَذَا فَعَلَ.</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">Then the Lord said to Noah, "Come into the ark, you and all your household, because I have seen that you are righteous before Me in this generation.</td>
        <td class="arabic">وَقَالَ الرَّبُّ لِنُوحٍ: «ادْخُلْ انْتَ وَجَمِيعُ بَيْتِكَ الَى الْفُلْكِ لانِّي ايَّاكَ رَايْتُ بَارّا لَدَيَّ فِي هَذَا الْجِيلِ.</td>
    </tr>
    <tr id="table_3_row_23" class="text">
        <td class="english">You shall take with you seven each of every clean animal, a male and his female; two each of animals that are unclean, a male and his female;</td>
        <td class="arabic">مِنْ جَمِيعِ الْبَهَائِمِ الطَّاهِرَةِ تَاخُذُ مَعَكَ سَبْعَةً سَبْعَةً ذَكَرا وَانْثَى. وَمِنَ الْبَهَائِمِ الَّتِي لَيْسَتْ بِطَاهِرَةٍ اثْنَيْنِ: ذَكَرا وَانْثَى.</td>
    </tr>
    <tr id="table_3_row_24" class="text">
        <td class="english">also seven each of birds of the air, male and female, to keep the species alive on the face of all the earth.</td>
        <td class="arabic">وَمِنْ طُيُورِ السَّمَاءِ ايْضا سَبْعَةً سَبْعَةً: ذَكَرا وَانْثَى. لِاسْتِبْقَاءِ نَسْلٍ عَلَى وَجْهِ كُلِّ الارْضِ.</td>
    </tr>
    <tr id="table_3_row_25" class="text">
        <td class="english">For after seven more days I will cause it to rain on the earth forty days and forty nights, and I will destroy from the face of the earth all living things that I have made."</td>
        <td class="arabic">لانِّي بَعْدَ سَبْعَةِ ايَّامٍ ايْضا امْطِرُ عَلَى الارْضِ ارْبَعِينَ يَوْما وَارْبَعِينَ لَيْلَةً. وَامْحُو عَنْ وَجْهِ الارْضِ كُلَّ قَائِمٍ عَمِلْتُهُ».</td>
    </tr>
    <tr id="table_3_row_26" class="text">
        <td class="english">And Noah did according to all that the Lord commanded him.</td>
        <td class="arabic">فَفَعَلَ نُوحٌ حَسَبَ كُلِّ مَا امَرَهُ بِهِ الرَّبُّ.</td>
    </tr>
    <tr id="table_3_row_27" class="text">
        <td class="english">Noah was six hundred years old when the floodwaters were on the earth.</td>
        <td class="arabic">وَلَمَّا كَانَ نُوحٌ ابْنَ سِتِّ مِئَةِ سَنَةٍ صَارَ طُوفَانُ الْمَاءِ عَلَى الارْضِ</td>
    </tr>
    <tr id="table_3_row_28" class="text">
        <td class="english">So Noah, with his sons, his wife, and his sons' wives, went into the ark because of the waters of the flood.</td>
        <td class="arabic">فَدَخَلَ نُوحٌ وَبَنُوهُ وَامْرَاتُهُ وَنِسَاءُ بَنِيهِ مَعَهُ الَى الْفُلْكِ مِنْ وَجْهِ مِيَاهِ الطُّوفَانِ.</td>
    </tr>
    <tr id="table_3_row_29" class="text">
        <td class="english">Of clean animals, of animals that are unclean, of birds, and of everything that creeps on the earth,</td>
        <td class="arabic">وَمِنَ الْبَهَائِمِ الطَّاهِرَةِ وَالْبَهَائِمِ الَّتِي لَيْسَتْ بِطَاهِرَةٍ وَمِنَ الطُّيُورِ وَكُلِّ مَا يَدِبُّ عَلَى الارْضِ:</td>
    </tr>
    <tr id="table_3_row_30" class="text">
        <td class="english">two by two they went into the ark to Noah, male and female, as God had commanded Noah.</td>
        <td class="arabic">دَخَلَ اثْنَانِ اثْنَانِ الَى نُوحٍ الَى الْفُلْكِ ذَكَرا وَانْثَى. كَمَا امَرَ اللهُ نُوحا.</td>
    </tr>
    <tr id="table_3_row_31" class="text">
        <td class="english">And it came to pass after seven days that the waters of the flood were on the earth.</td>
        <td class="arabic">وَحَدَثَ بَعْدَ السَّبْعَةِ الايَّامِ انَّ مِيَاهَ الطُّوفَانِ صَارَتْ عَلَى الارْضِ.</td>
    </tr>
    <tr id="table_3_row_32" class="text">
        <td class="english">In the six hundredth year of Noah's life, in the second month, the seventeenth day of the month, on that day all the fountains of the great deep were broken up, and the windows of heaven were opened.</td>
        <td class="arabic">فِي سَنَةِ سِتِّ مِئَةٍ مِنْ حَيَاةِ نُوحٍ فِي الشَّهْرِ الثَّانِي فِي الْيَوْمِ السَّابِعَ عَشَرَ مِنَ الشَّهْرِ انْفَجَرَتْ كُلُّ يَنَابِيعِ الْغَمْرِ الْعَظِيمِ وَانْفَتَحَتْ طَاقَاتُ السَّمَاءِ.</td>
    </tr>
    <tr id="table_3_row_33" class="text">
        <td class="english">And the rain was on the earth forty days and forty nights.</td>
        <td class="arabic">وَكَانَ الْمَطَرُ عَلَى الارْضِ ارْبَعِينَ يَوْما وَارْبَعِينَ لَيْلَةً.</td>
    </tr>
    <tr id="table_3_row_34" class="text">
        <td class="english">On the very same day Noah and Noah's sons, Shem, Ham, and Japheth, and Noah's wife and the three wives of his sons with them, entered the ark--</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ عَيْنِهِ دَخَلَ نُوحٌ وَسَامٌ وَحَامٌ وَيَافَثُ بَنُو نُوحٍ وَامْرَاةُ نُوحٍ وَثَلاثُ نِسَاءِ بَنِيهِ مَعَهُمْ الَى الْفُلْكِ.</td>
    </tr>
    <tr id="table_3_row_35" class="text">
        <td class="english">they and every beast after its kind, all cattle after their kind, every creeping thing that creeps on the earth after its kind, and every bird after its kind, every bird of every sort.</td>
        <td class="arabic">هُمْ وَكُلُّ الْوُحُوشِ كَاجْنَاسِهَا وَكُلُّ الْبَهَائِمِ كَاجْنَاسِهَا وَكُلُّ الدَبَّابَاتِ الَّتِي تَدُبُّ عَلَى الارْضِ كَاجْنَاسِهَا وَكُلُّ الطُّيُورِ كَاجْنَاسِهَا: كُلُّ عُصْفُورٍ كُلُّ ذِي جَنَاحٍ.</td>
    </tr>
    <tr id="table_3_row_36" class="text">
        <td class="english">And they went into the ark to Noah, two by two, of all flesh in which is the breath of life.</td>
        <td class="arabic">وَدَخَلَتْ الَى نُوحٍ الَى الْفُلْكِ اثْنَيْنِ اثْنَيْنِ مِنْ كُلِّ جَسَدٍ فِيهِ رُوحُ حَيَاةٍ.</td>
    </tr>
    <tr id="table_3_row_37" class="text">
        <td class="english">So those that entered, male and female of all flesh, went in as God had commanded him; and the Lord shut him in.</td>
        <td class="arabic">وَالدَّاخِلاتُ دَخَلَتْ ذَكَرا وَانْثَى مِنْ كُلِّ ذِي جَسَدٍ كَمَا امَرَهُ اللهُ. وَاغْلَقَ الرَّبُّ عَلَيْهِ.</td>
    </tr>
    <tr id="table_3_row_38" class="text">
        <td class="english">Now the flood was on the earth forty days. The waters increased and lifted up the ark, and it rose high above the earth.</td>
        <td class="arabic">وَكَانَ الطُّوفَانُ ارْبَعِينَ يَوْما عَلَى الارْضِ. وَتَكَاثَرَتِ الْمِيَاهُ وَرَفَعَتِ الْفُلْكَ فَارْتَفَعَ عَنِ الارْضِ.</td>
    </tr>
    <tr id="table_3_row_39" class="text">
        <td class="english">The waters prevailed and greatly increased on the earth, and the ark moved about on the surface of the waters.</td>
        <td class="arabic">وَتَعَاظَمَتِ الْمِيَاهُ وَتَكَاثَرَتْ جِدّا عَلَى الارْضِ فَكَانَ الْفُلْكُ يَسِيرُ عَلَى وَجْهِ الْمِيَاهِ.</td>
    </tr>
    <tr id="table_3_row_40" class="text">
        <td class="english">And the waters prevailed exceedingly on the earth, and all the high hills under the whole heaven were covered.</td>
        <td class="arabic">وَتَعَاظَمَتِ الْمِيَاهُ كَثِيرا جِدّا عَلَى الارْضِ فَتَغَطَّتْ جَمِيعُ الْجِبَالِ الشَّامِخَةِ الَّتِي تَحْتَ كُلِّ السَّمَاءِ.</td>
    </tr>
    <tr id="table_3_row_41" class="text">
        <td class="english">The waters prevailed fifteen cubits upward, and the mountains were covered.</td>
        <td class="arabic">خَمْسَ عَشَرَةَ ذِرَاعا فِي الِارْتِفَاعِ تَعَاظَمَتِ الْمِيَاهُ فَتَغَطَّتِ الْجِبَالُ.</td>
    </tr>
    <tr id="table_3_row_42" class="text">
        <td class="english">And all flesh died that moved on the earth: birds and cattle and beasts and every creeping thing that creeps on the earth, and every man.</td>
        <td class="arabic">فَمَاتَ كُلُّ ذِي جَسَدٍ كَانَ يَدِبُّ عَلَى الارْضِ مِنَ الطُّيُورِ وَالْبَهَائِمِ وَالْوُحُوشِ وَكُلُّ الزَّحَّافَاتِ الَّتِي كَانَتْ تَزْحَفُ عَلَى الارْضِ وَجَمِيعُ النَّاسِ.</td>
    </tr>
    <tr id="table_3_row_43" class="text">
        <td class="english">All in whose nostrils was the breath of the spirit of life, all that was on the dry land, died.</td>
        <td class="arabic">كُلُّ مَا فِي انْفِهِ نَسَمَةُ رُوحِ حَيَاةٍ مِنْ كُلِّ مَا فِي الْيَابِسَةِ مَاتَ.</td>
    </tr>
    <tr id="table_3_row_44" class="text">
        <td class="english">So He destroyed all living things which were on the face of the ground: both man and cattle, creeping thing and bird of the air. They were destroyed from the earth. Only Noah and those who were with him in the ark remained alive.</td>
        <td class="arabic">فَمَحَا اللهُ كُلَّ قَائِمٍ كَانَ عَلَى وَجْهِ الارْضِ: النَّاسَ وَالْبَهَائِمَ وَالدَّبَّابَاتَ وَطُيُورَ السَّمَاءِ فَانْمَحَتْ مِنَ الارْضِ. وَتَبَقَّى نُوحٌ وَالَّذِينَ مَعَهُ فِي الْفُلْكِ فَقَطْ.</td>
    </tr>
    <tr id="table_3_row_45" class="text">
        <td class="english">And the waters prevailed on the earth one hundred and fifty days.</td>
        <td class="arabic">وَتَعَاظَمَتِ الْمِيَاهُ عَلَى الارْضِ مِئَةً وَخَمْسِينَ يَوْما.</td>
    </tr>
    <tr id="table_3_row_46" class="text">
        <td class="english">Then God remembered Noah, and every living thing, and all the animals that were with him in the ark. And God made a wind to pass over the earth, and the waters subsided.</td>
        <td class="arabic">ثُمَّ ذَكَرَ اللهُ نُوحا وَكُلَّ الْوُحُوشِ وَكُلَّ الْبَهَائِمِ الَّتِي مَعَهُ فِي الْفُلْكِ. وَاجَازَ اللهُ رِيحا عَلَى الارْضِ فَهَدَاتِ الْمِيَاهُ.</td>
    </tr>
    <tr id="table_3_row_47" class="text">
        <td class="english">The fountains of the deep and the windows of heaven were also stopped, and the rain from heaven was restrained.</td>
        <td class="arabic">وَانْسَدَّتْ يَنَابِيعُ الْغَمْرِ وَطَاقَاتُ السَّمَاءِ فَامْتَنَعَ الْمَطَرُ مِنَ السَّمَاءِ.</td>
    </tr>
    <tr id="table_3_row_48" class="text">
        <td class="english">And the waters receded continually from the earth. At the end of the hundred and fifty days the waters decreased.</td>
        <td class="arabic">وَرَجَعَتِ الْمِيَاهُ عَنِ الارْضِ رُجُوعا مُتَوَالِيا. وَبَعْدَ مِئَةٍ وَخَمْسِينَ يَوْما نَقَصَتِ الْمِيَاهُ</td>
    </tr>
    <tr id="table_3_row_49" class="text">
        <td class="english">Then the ark rested in the seventh month, the seventeenth day of the month, on the mountains of Ararat.</td>
        <td class="arabic">وَاسْتَقَرَّ الْفُلْكُ فِي الشَّهْرِ السَّابِعِ فِي الْيَوْمِ السَّابِعَ عَشَرَ مِنَ الشَّهْرِ عَلَى جِبَالِ ارَارَاطَ.</td>
    </tr>
    <tr id="table_3_row_50" class="text">
        <td class="english">And the waters decreased continually until the tenth month. In the tenth month, on the first day of the month, the tops of the mountains were seen.</td>
        <td class="arabic">وَكَانَتِ الْمِيَاهُ تَنْقُصُ نَقْصا مُتَوَالِيا الَى الشَّهْرِ الْعَاشِرِ. وَفِي الْعَاشِرِ فِي اوَّلِ الشَّهْرِ ظَهَرَتْ رُؤُوسُ الْجِبَالِ.</td>
    </tr>
    <tr id="table_3_row_51" class="text">
        <td class="english">So it came to pass, at the end of forty days, that Noah opened the window of the ark which he had made.</td>
        <td class="arabic">وَحَدَثَ مِنْ بَعْدِ ارْبَعِينَ يَوْما انَّ نُوحا فَتَحَ طَاقَةَ الْفُلْكِ الَّتِي كَانَ قَدْ عَمِلَهَا</td>
    </tr>
    <tr id="table_3_row_52" class="text">
        <td class="english">Then he sent out a raven, which kept going to and fro until the waters had dried up from the earth.</td>
        <td class="arabic">وَارْسَلَ الْغُرَابَ فَخَرَجَ مُتَرَدِّدا حَتَّى نَشِفَتِ الْمِيَاهُ عَنِ الارْضِ.</td>
    </tr>
    <tr id="table_3_row_53" class="text">
        <td class="english">He also sent out from himself a dove, to see if the waters had receded from the face of the ground.</td>
        <td class="arabic">ثُمَّ ارْسَلَ الْحَمَامَةَ مِنْ عِنْدِهِ لِيَرَى هَلْ قَلَّتِ الْمِيَاهُ عَنْ وَجْهِ الارْضِ</td>
    </tr>
    <tr id="table_3_row_54" class="text">
        <td class="english">But the dove found no resting place for the sole of her foot, and she returned into the ark to him, for the waters were on the face of the whole earth. So he put out his hand and took her, and drew her into the ark to himself.</td>
        <td class="arabic">فَلَمْ تَجِدِ الْحَمَامَةُ مَقَرّا لِرِجْلِهَا فَرَجَعَتْ الَيْهِ الَى الْفُلْكِ لانَّ مِيَاها كَانَتْ عَلَى وَجْهِ كُلِّ الارْضِ. فَمَدَّ يَدَهُ وَاخَذَهَا وَادْخَلَهَا عِنْدَهُ الَى الْفُلْكِ.</td>
    </tr>
    <tr id="table_3_row_55" class="text">
        <td class="english">And he waited yet another seven days, and again he sent the dove out from the ark.</td>
        <td class="arabic">فَلَبِثَ ايْضا سَبْعَةَ ايَّامٍ اخَرَ وَعَادَ فَارْسَلَ الْحَمَامَةَ مِنَ الْفُلْكِ</td>
    </tr>
    <tr id="table_3_row_56" class="text">
        <td class="english">Then the dove came to him in the evening, and behold, a freshly plucked olive leaf was in her mouth; and Noah knew that the waters had receded from the earth.</td>
        <td class="arabic">فَاتَتْ الَيْهِ الْحَمَامَةُ عِنْدَ الْمَسَاءِ وَاذَا وَرَقَةُ زَيْتُونٍ خَضْرَاءُ فِي فَمِهَا. فَعَلِمَ نُوحٌ انَّ الْمِيَاهَ قَدْ قَلَّتْ عَنِ الارْضِ.</td>
    </tr>
    <tr id="table_3_row_57" class="text">
        <td class="english">So he waited yet another seven days and sent out the dove, which did not return again to him anymore.</td>
        <td class="arabic">فَلَبِثَ ايْضا سَبْعَةَ ايَّامٍ اخَرَ وَارْسَلَ الْحَمَامَةَ فَلَمْ تَعُدْ تَرْجِعُ الَيْهِ ايْضا.</td>
    </tr>
    <tr id="table_3_row_58" class="text">
        <td class="english">And it came to pass in the six hundred and first year, in the first month, the first day of the month, that the waters were dried up from the earth; and Noah removed the covering of the ark and looked, and indeed the surface of the ground was dry.</td>
        <td class="arabic">وَكَانَ فِي السَّنَةِ الْوَاحِدَةِ وَالسِّتِّ مِئَةٍ فِي الشَّهْرِ الاوَّلِ فِي اوَّلِ الشَّهْرِ انَّ الْمِيَاهَ نَشِفَتْ عَنِ الارْضِ. فَكَشَفَ نُوحٌ الْغِطَاءَ عَنِ الْفُلْكِ وَنَظَرَ فَاذَا وَجْهُ الارْضِ قَدْ نَشِفَ.</td>
    </tr>
    <tr id="table_3_row_59" class="text">
        <td class="english">And in the second month, on the twenty-seventh day of the month, the earth was dried.</td>
        <td class="arabic">وَفِي الشَّهْرِ الثَّانِي فِي الْيَوْمِ السَّابِعِ وَالْعِشْرِينَ مِنَ الشَّهْرِ جَفَّتِ الارْضُ.</td>
    </tr>
    <tr id="table_3_row_60" class="text">
        <td class="english">Then God spoke to Noah, saying,</td>
        <td class="arabic">وَامَرَ اللهُ نُوحا:</td>
    </tr>
    <tr id="table_3_row_61" class="text">
        <td class="english">"Go out of the ark, you and your wife, and your sons and your sons' wives with you.</td>
        <td class="arabic">«اخْرُجْ مِنَ الْفُلْكِ انْتَ وَامْرَاتُكَ وَبَنُوكَ وَنِسَاءُ بَنِيكَ مَعَكَ.</td>
    </tr>
    <tr id="table_3_row_62" class="text">
        <td class="english">Bring out with you every living thing of all flesh that is with you: birds and cattle and every creeping thing that creeps on the earth, so that they may abound on the earth, and be fruitful and multiply on the earth."</td>
        <td class="arabic">وَكُلَّ الْحَيَوَانَاتِ الَّتِي مَعَكَ مِنْ كُلِّ ذِي جَسَدٍ: الطُّيُورِ وَالْبَهَائِمِ وَكُلَّ الدَّبَّابَاتِ الَّتِي تَدُبُّ عَلَى الارْضِ اخْرِجْهَا مَعَكَ. وَلْتَتَوَالَدْ فِي الارْضِ وَتُثْمِرْ وَتَكْثُرْ عَلَى الارْضِ».</td>
    </tr>
    <tr id="table_3_row_63" class="text">
        <td class="english">So Noah went out, and his sons and his wife and his sons' wives with him.</td>
        <td class="arabic">فَخَرَجَ نُوحٌ وَبَنُوهُ وَامْرَاتُهُ وَنِسَاءُ بَنِيهِ مَعَهُ.</td>
    </tr>
    <tr id="table_3_row_64" class="text">
        <td class="english">Every animal, every creeping thing, every bird, and whatever creeps on the earth, according to their families, went out of the ark.</td>
        <td class="arabic">وَكُلُّ الْحَيَوَانَاتِ وَكُلُّ الطُّيُورِ كُلُّ مَا يَدِبُّ عَلَى الارْضِ كَانْوَاعِهَا خَرَجَتْ مِنَ الْفُلْكِ.</td>
    </tr>
    <tr id="table_3_row_65" class="text">
        <td class="english">Then Noah built an altar to the Lord, and took of every clean animal and of every clean bird, and offered burnt offerings on the altar.</td>
        <td class="arabic">وَبَنَى نُوحٌ مَذْبَحا لِلرَّبِّ. وَاخَذَ مِنْ كُلِّ الْبَهَائِمِ الطَّاهِرَةِ وَمِنْ كُلِّ الطُّيُورِ الطَّاهِرَةِ وَاصْعَدَ مُحْرَقَاتٍ عَلَى الْمَذْبَحِ</td>
    </tr>
    <tr id="table_3_row_66" class="text">
        <td class="english">And the Lord smelled a soothing aroma. Then the Lord said in His heart, "I will never again curse the ground for man's sake, although the imagination of man's heart is evil from his youth; nor will I again destroy every living thing as I have done.</td>
        <td class="arabic">فَتَنَسَّمَ الرَّبُّ رَائِحَةَ الرِّضَا. وَقَالَ الرَّبُّ فِي قَلْبِهِ: «لا اعُودُ الْعَنُ الارْضَ ايْضا مِنْ اجْلِ الانْسَانِ لانَّ تَصَوُّرَ قَلْبِ الانْسَانِ شِرِّيرٌ مُنْذُ حَدَاثَتِهِ. وَلا اعُودُ ايْضا امِيتُ كُلَّ حَيٍّ كَمَا فَعَلْتُ.</td>
    </tr>
    <tr id="table_3_row_67" class="text">
        <td class="english">"While the earth remains, Seedtime and harvest, Cold and heat, Winter and summer, And day and night Shall not cease."</td>
        <td class="arabic">مُدَّةَ كُلِّ ايَّامِ الارْضِ زَرْعٌ وَحَصَادٌ وَبَرْدٌ وَحَرٌّ وَصَيْفٌ وَشِتَاءٌ وَنَهَارٌ وَلَيْلٌ لا تَزَالُ».</td>
    </tr>
    <tr id="table_3_row_68" class="text">
        <td class="english">So God blessed Noah and his sons, and said to them: "Be fruitful and multiply, and fill the earth.*</td>
        <td class="arabic">وَبَارَكَ اللهُ نُوحا وَبَنِيهِ وَقَالَ لَهُمْ: «اثْمِرُوا وَاكْثُرُوا وَامْلَاوا الارْضَ.</td>
    </tr>
    <tr id="table_3_row_69" class="text">
        <td class="english">And the fear of you and the dread of you shall be on every beast of the earth, on every bird of the air, on all that move on the earth, and on all the fish of the sea. They are given into your hand.</td>
        <td class="arabic">وَلْتَكُنْ خَشْيَتُكُمْ وَرَهْبَتُكُمْ عَلَى كُلِّ حَيَوَانَاتِ الارْضِ وَكُلِّ طُيُورِ السَّمَاءِ مَعَ كُلِّ مَا يَدِبُّ عَلَى الارْضِ وَكُلِّ اسْمَاكِ الْبَحْرِ. قَدْ دُفِعَتْ الَى ايْدِيكُمْ.</td>
    </tr>
    <tr id="table_3_row_70" class="text">
        <td class="english">Every moving thing that lives shall be food for you. I have given you all things, even as the green herbs.</td>
        <td class="arabic">كُلُّ دَابَّةٍ حَيَّةٍ تَكُونُ لَكُمْ طَعَاما. كَالْعُشْبِ الاخْضَرِ دَفَعْتُ الَيْكُمُ الْجَمِيعَ.</td>
    </tr>
    <tr id="table_3_row_71" class="text">
        <td class="english">But you shall not eat flesh with its life, that is, its blood.</td>
        <td class="arabic">غَيْرَ انَّ لَحْما بِحَيَاتِهِ دَمِهِ لا تَاكُلُوهُ.</td>
    </tr>
    <tr id="table_3_row_72" class="text">
        <td class="english">Surely for your lifeblood I will demand a reckoning; from the hand of every beast I will require it, and from the hand of man. From the hand of every man's brother I will require the life of man.</td>
        <td class="arabic">وَاطْلُبُ انَا دَمَكُمْ لانْفُسِكُمْ فَقَطْ. مِنْ يَدِ كُلِّ حَيَوَانٍ اطْلُبُهُ. وَمِنْ يَدِ الانْسَانِ اطْلُبُ نَفْسَ الانْسَانِ مِنْ يَدِ الانْسَانِ اخِيهِ.</td>
    </tr>
    <tr id="table_3_row_73" class="text">
        <td class="english">"Whoever sheds man's blood, By man his blood shall be shed; For in the image of God He made man.</td>
        <td class="arabic">سَافِكُ دَمِ الانْسَانِ بِالانْسَانِ يُسْفَكُ دَمُهُ. لانَّ اللهَ عَلَى صُورَتِهِ عَمِلَ الانْسَانَ.</td>
    </tr>
    <tr id="table_3_row_74" class="text">
        <td class="english">And as for you, be fruitful and multiply; Bring forth abundantly in the earth And multiply in it."</td>
        <td class="arabic">فَاثْمِرُوا انْتُمْ وَاكْثُرُوا وَتَوَالَدُوا فِي الارْضِ وَتَكَاثَرُوا فِيهَا».</td>
    </tr>
    <tr id="table_3_row_76" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Proverbs 9:1-11)
    <span class="arabic-caption">النبوة الثانية<br>(امثال سليمان 9: 1 – 11)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء امثال سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Wisdom has built her house, She has hewn out her seven pillars;</td>
        <td class="arabic">اَلْحِكْمَةُ بَنَتْ بَيْتَهَا. نَحَتَتْ أَعْمِدَتَهَا السَّبْعَةَ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">She has slaughtered her meat, She has mixed her wine, She has also furnished her table.</td>
        <td class="arabic">ذَبَحَتْ ذَبْحَهَا. مَزَجَتْ خَمْرَهَا. أَيْضاً رَتَّبَتْ مَائِدَتَهَا.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">She has sent out her maidens, She cries out from the highest places of the city,</td>
        <td class="arabic">أَرْسَلَتْ جَوَارِيَهَا تُنَادِي عَلَى ظُهُورِ أَعَالِي الْمَدِينَةِ:</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">"Whoever is simple, let him turn in here!" As for him who lacks understanding, she says to him,</td>
        <td class="arabic">«مَنْ هُوَ جَاهِلٌ فَلِْيَمِلْ إِلَى هُنَا». وَالنَّاقِصُ الْفَهْمِ قَالَتْ لَهُ:</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">"Come, eat of my bread And drink of the wine I have mixed.</td>
        <td class="arabic">«هَلُمُّوا كُلُوا مِنْ طَعَامِي وَاشْرَبُوا مِنَ الْخَمْرِ الَّتِي مَزَجْتُهَا.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Forsake foolishness and live, And go in the way of understanding.</td>
        <td class="arabic">اُتْرُكُوا الْجَهَالاَتِ فَتَحْيُوا وَسِيرُوا فِي طَرِيقِ الْفَهْمِ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">"He who corrects a scoffer gets shame for himself, And he who rebukes a wicked man only harms himself.</td>
        <td class="arabic">«مَنْ يُوَبِّخُ مُسْتَهْزِئاً يَكْسَبُ لِنَفْسِهِ هَوَاناً وَمَنْ يُنْذِرُ شِرِّيراً يَكْسَبُ عَيْباً.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">Do not correct a scoffer, lest he hate you; Rebuke a wise man, and he will love you.</td>
        <td class="arabic">لاَ تُوَبِّخْ مُسْتَهْزِئاً لِئَلاَّ يُبْغِضَكَ. وَبِّخْ حَكِيماً فَيُحِبَّكَ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">Give instruction to a wise man, and he will be still wiser; Teach a just man, and he will increase in learning.</td>
        <td class="arabic">أَعْطِ حَكِيماً فَيَكُونَ أَوْفَرَ حِكْمَةً. عَلِّمْ صِدِّيقاً فَيَزْدَادَ عِلْماً.</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">"The fear of the Lord is the beginning of wisdom, And the knowledge of the Holy One is understanding.</td>
        <td class="arabic">بَدْءُ الْحِكْمَةِ مَخَافَةُ الرَّبِّ وَمَعْرِفَةُ الْقُدُّوسِ فَهْمٌ.</td>
    </tr>
    <tr id="table_4_row_14" class="text">
        <td class="english">For by me your days will be multiplied, And years of life will be added to you.</td>
        <td class="arabic">لأَنَّهُ بِي تَكْثُرُ أَيَّامُكَ وَتَزْدَادُ لَكَ سِنُو حَيَاةٍ.</td>
    </tr>
    <tr id="table_4_row_16" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Isaiah 40:9-31)
    <span class="arabic-caption">النبوة الثالثة<br>(اشعياء 40: 9 - 31)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">O Zion, You who bring good tidings, Get up into the high mountain; O Jerusalem, You who bring good tidings, Lift up your voice with strength, Lift it up, be not afraid; Say to the cities of Judah, "Behold your God!"</td>
        <td class="arabic">عَلَى جَبَلٍ عَالٍ اصْعَدِي يَا مُبَشِّرَةَ صِهْيَوْنَ. ارْفَعِي صَوْتَكِ بِقُوَّةٍ يَا مُبَشِّرَةَ أُورُشَلِيمَ. ارْفَعِي لاَ تَخَافِي. قُولِي لِمُدُنِ يَهُوذَا: «هُوَذَا إِلَهُكِ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">Behold, the Lord God shall come with a strong hand, And His arm shall rule for Him; Behold, His reward is with Him, And His work before Him.</td>
        <td class="arabic">هُوَذَا السَّيِّدُ الرَّبُّ بِقُوَّةٍ يَأْتِي وَذِرَاعُهُ تَحْكُمُ لَهُ. هُوَذَا أُجْرَتُهُ مَعَهُ وَعُمْلَتُهُ قُدَّامَهُ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">He will feed His flock like a shepherd; He will gather the lambs with His arm, And carry them in His bosom, And gently lead those who are with young.</td>
        <td class="arabic">كَرَاعٍ يَرْعَى قَطِيعَهُ. بِذِرَاعِهِ يَجْمَعُ الْحُمْلاَنَ وَفِي حِضْنِهِ يَحْمِلُهَا وَيَقُودُ الْمُرْضِعَاتِ».</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Who has measured the waters in the hollow of His hand, Measured heaven with a span And calculated the dust of the earth in a measure? Weighed the mountains in scales And the hills in a balance?</td>
        <td class="arabic">مَنْ كَالَ بِكَفِّهِ الْمِيَاهَ وَقَاسَ السَّمَاوَاتِ بِالشِّبْرِ وَكَالَ بِالْكَيْلِ تُرَابَ الأَرْضِ وَوَزَنَ الْجِبَالَ بِالْقَبَّانِ وَالآكَامَ بِالْمِيزَانِ؟</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Who has directed the Spirit of the Lord, Or as His counselor has taught Him?</td>
        <td class="arabic">مَنْ قَاسَ رُوحَ الرَّبِّ وَمَنْ مُشِيرُهُ يُعَلِّمُهُ؟</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">With whom did He take counsel, and who instructed Him, And taught Him in the path of justice? Who taught Him knowledge, And showed Him the way of understanding?</td>
        <td class="arabic">مَنِ اسْتَشَارَهُ فَأَفْهَمَهُ وَعَلَّمَهُ فِي طَرِيقِ الْحَقِّ وَعَلَّمَهُ مَعْرِفَةً وَعَرَّفَهُ سَبِيلَ الْفَهْمِ.؟</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">Behold, the nations are as a drop in a bucket, And are counted as the small dust on the scales; Look, He lifts up the isles as a very little thing.</td>
        <td class="arabic">هُوَذَا الأُمَمُ كَنُقْطَةٍ مِنْ دَلْوٍ وَكَغُبَارِ الْمِيزَانِ تُحْسَبُ. هُوَذَا الْجَزَائِرُ يَرْفَعُهَا كَدُقَّةٍ!</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">And Lebanon is not sufficient to burn, Nor its beasts sufficient for a burnt offering.</td>
        <td class="arabic">وَلُبْنَانُ لَيْسَ كَافِياً لِلإِيقَادِ وَحَيَوَانُهُ لَيْسَ كَافِياً لِمُحْرَقَةٍ.</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">All nations before Him are as nothing, And they are counted by Him less than nothing and worthless.</td>
        <td class="arabic">كُلُّ الأُمَمِ كَلاَ شَيْءٍ قُدَّامَهُ. مِنَ الْعَدَمِ وَالْبَاطِلِ تُحْسَبُ عَُِنْدَهُ.</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">To whom then will you liken God? Or what likeness will you compare to Him?</td>
        <td class="arabic">فَبِمَنْ تُشَبِّهُونَ اللَّهَ وَأَيَّ شَبَهٍ تُعَادِلُونَ بِهِ؟</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">The workman molds an image, The goldsmith overspreads it with gold, And the silversmith casts silver chains.</td>
        <td class="arabic">اَلصَّنَمُ يَسْبِكُهُ الصَّانِعُ وَالصَّائِغُ يُغَشِّيهِ بِذَهَبٍ وَيَصُوغُ سَلاَسِلَ فِضَّةٍ.</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">Whoever is too impoverished for such a contribution Chooses a tree that will not rot; He seeks for himself a skillful workman To prepare a carved image that will not totter.</td>
        <td class="arabic">الْفَقِيرُ عَنِ التَّقْدِمَةِ يَنْتَخِبُ خَشَباً لاَ يُسَوِّسُ يَطْلُبُ لَهُ صَانِعاً مَاهِراً لِيَنْصُبَ صَنَماً لاَ يَتَزَعْزَعُ!</td>
    </tr>
    <tr id="table_5_row_16" class="text">
        <td class="english">Have you not known? Have you not heard? Has it not been told you from the beginning? Have you not understood from the foundations of the earth?</td>
        <td class="arabic">أَلاَ تَعْلَمُونَ؟ أَلاَ تَسْمَعُونَ؟ أَلَمْ تُخْبَرُوا مِنَ الْبَدَاءَةِ؟ أَلَمْ تَفْهَمُوا مِنْ أَسَاسَاتِ الأَرْضِ؟</td>
    </tr>
    <tr id="table_5_row_17" class="text">
        <td class="english">It is He who sits above the circle of the earth, And its inhabitants are like grasshoppers, Who stretches out the heavens like a curtain, And spreads them out like a tent to dwell in.</td>
        <td class="arabic">الْجَالِسُ عَلَى كُرَةِ الأَرْضِ وَسُكَّانُهَا كَالْجُنْدُبِ. الَّذِي يَنْشُرُ السَّمَاوَاتِ كَسَرَادِقَ وَيَبْسُطُهَا كَخَيْمَةٍ لِلسَّكَنِ.</td>
    </tr>
    <tr id="table_5_row_18" class="text">
        <td class="english">He brings the princes to nothing; He makes the judges of the earth useless.</td>
        <td class="arabic">الَّذِي يَجْعَلُ الْعُظَمَاءَ لاَ شَيْئاً وَيُصَيِّرُ قُضَاةَ الأَرْضِ كَالْبَاطِلِ.</td>
    </tr>
    <tr id="table_5_row_19" class="text">
        <td class="english">Scarcely shall they be planted, Scarcely shall they be sown, Scarcely shall their stock take root in the earth, When He will also blow on them, And they will wither, And the whirlwind will take them away like stubble.</td>
        <td class="arabic">لَمْ يُغْرَسُوا بَلْ لَمْ يُزْرَعُوا وَلَمْ يَتَأَصَّلْ فِي الأَرْضِ سَاقُهُمْ. فَنَفَخَ أَيْضاً عَلَيْهِمْ فَجَفُّوا وَالْعَاصِفُ كَالْعَصْفِ يَحْمِلُهُمْ.</td>
    </tr>
    <tr id="table_5_row_20" class="text">
        <td class="english">"To whom then will you liken Me, Or to whom shall I be equal?" says the Holy One.</td>
        <td class="arabic">فَبِمَنْ تُشَبِّهُونَنِي فَأُسَاوِيهِ؟ يَقُولُ الْقُدُّوسُ.</td>
    </tr>
    <tr id="table_5_row_21" class="text">
        <td class="english">Lift up your eyes on high, And see who has created these things, Who brings out their host by number; He calls them all by name, By the greatness of His might And the strength of His power; Not one is missing.</td>
        <td class="arabic">ارْفَعُوا إِلَى الْعَلاَءِ عُيُونَكُمْ وَانْظُرُوا مَنْ خَلَقَ هَذِهِ؟ مَنِ الَّذِي يُخْرِجُ بِعَدَدٍ جُنْدَهَا يَدْعُو كُلَّهَا بِأَسْمَاءٍ؟ لِكَثْرَةِ الْقُوَّةِ وَكَوْنِهِ شَدِيدَ الْقُدْرَةِ لاَ يُفْقَدُ أَحَدٌ.</td>
    </tr>
    <tr id="table_5_row_22" class="text">
        <td class="english">Why do you say, O Jacob, And speak, O Israel: "My way is hidden from the Lord, And my just claim is passed over by my God"?</td>
        <td class="arabic">لِمَاذَا تَقُولُ يَا يَعْقُوبُ وَتَتَكَلَّمُ يَا إِسْرَائِيلُ: «قَدِ اخْتَفَتْ طَرِيقِي عَنِ الرَّبِّ وَفَاتَ حَقِّي إِلَهِي»؟</td>
    </tr>
    <tr id="table_5_row_23" class="text">
        <td class="english">Have you not known? Have you not heard? The everlasting God, the Lord, The Creator of the ends of the earth, Neither faints nor is weary. His understanding is unsearchable.</td>
        <td class="arabic">أَمَا عَرَفْتَ أَمْ لَمْ تَسْمَعْ؟ إِلَهُ الدَّهْرِ الرَّبُّ خَالِقُ أَطْرَافِ الأَرْضِ لاَ يَكِلُّ وَلاَ يَعْيَا. لَيْسَ عَنْ فَهْمِهِ فَحْصٌ.</td>
    </tr>
    <tr id="table_5_row_24" class="text">
        <td class="english">He gives power to the weak, And to those who have no might He increases strength.</td>
        <td class="arabic">يُعْطِي الْمُعْيِيَ قُدْرَةً وَلِعَدِيمِ الْقُوَّةِ يُكَثِّرُ شِدَّةً.</td>
    </tr>
    <tr id="table_5_row_25" class="text">
        <td class="english">Even the youths shall faint and be weary, And the young men shall utterly fall,</td>
        <td class="arabic">اَلْغِلْمَانُ يُعْيُونَ وَيَتْعَبُونَ وَالْفِتْيَانُ يَتَعَثَّرُونَ تَعَثُّراً.</td>
    </tr>
    <tr id="table_5_row_26" class="text">
        <td class="english">But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.</td>
        <td class="arabic">وَأَمَّا مُنْتَظِرُو الرَّبِّ فَيُجَدِّدُونَ قُوَّةً. يَرْفَعُونَ أَجْنِحَةً كَالنُّسُورِ. يَرْكُضُونَ وَلاَ يَتْعَبُونَ يَمْشُونَ وَلاَ يُعْيُونَ.</td>
    </tr>
    <tr id="table_5_row_28" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Daniel 7:9-15)
    <span class="arabic-caption">النبوة الرابعة<br>(دانيال 7: 9 – 15)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from Daniel the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من دانيال النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">"I watched till thrones were put in place, And the Ancient of Days was seated; His garment was white as snow, And the hair of His head was like pure wool. His throne was a fiery flame, Its wheels a burning fire;</td>
        <td class="arabic">كُنْتُ أَرَى أَنَّهُ وُضِعَتْ عُرُوشٌ وَجَلَسَ الْقَدِيمُ الأَيَّامِ. لِبَاسُهُ أَبْيَضُ كَالثَّلْجِ وَشَعْرُ رَأْسِهِ كَالصُّوفِ النَّقِيِّ وَعَرْشُهُ لَهِيبُ نَارٍ وَبَكَرَاتُهُ نَارٌ مُتَّقِدَةٌ.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">A fiery stream issued And came forth from before Him. A thousand thousands ministered to Him; Ten thousand times ten thousand stood before Him. The court was seated, And the books were opened.</td>
        <td class="arabic">نَهْرُ نَارٍ جَرَى وَخَرَجَ مِنْ قُدَّامِهِ. أُلُوفُ أُلُوفٍ تَخْدِمُهُ وَرَبَوَاتُ رَبَوَاتٍ وُقُوفٌ قُدَّامَهُ. فَجَلَسَ الدِّينُ وَفُتِحَتِ الأَسْفَارُ.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">"I watched then because of the sound of the pompous words which the horn was speaking; I watched till the beast was slain, and its body destroyed and given to the burning flame.</td>
        <td class="arabic">كُنْتُ أَنْظُرُ حِينَئِذٍ مِنْ أَجْلِ صَوْتِ الْكَلِمَاتِ الْعَظِيمَةِ الَّتِي تَكَلَّمَ بِهَا الْقَرْنُ. كُنْتُ أَرَى إِلَى أَنْ قُتِلَ الْحَيَوَانُ وَهَلَكَ جِسْمُهُ وَدُفِعَ لِوَقِيدِ النَّارِ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">As for the rest of the beasts, they had their dominion taken away, yet their lives were prolonged for a season and a time.</td>
        <td class="arabic">أَمَّا بَاقِي الْحَيَوَانَاتِ فَنُزِعَ عَنْهُمْ سُلْطَانُهُمْ وَلَكِنْ أُعْطُوا طُولَ حَيَاةٍ إِلَى زَمَانٍ وَوَقْتٍ.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">"I was watching in the night visions, And behold, One like the Son of Man, Coming with the clouds of heaven! He came to the Ancient of Days, And they brought Him near before Him.</td>
        <td class="arabic">[كُنْتُ أَرَى فِي رُؤَى اللَّيْلِ وَإِذَا مَعَ سُحُبِ السَّمَاءِ مِثْلُ ابْنِ إِنْسَانٍ أَتَى وَجَاءَ إِلَى الْقَدِيمِ الأَيَّامِ فَقَرَّبُوهُ قُدَّامَهُ.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">Then to Him was given dominion and glory and a kingdom, That all peoples, nations, and languages should serve Him. His dominion is an everlasting dominion, Which shall not pass away, And His kingdom the one Which shall not be destroyed.</td>
        <td class="arabic">فَأُعْطِيَ سُلْطَاناً وَمَجْداً وَمَلَكُوتاً لِتَتَعَبَّدَ لَهُ كُلُّ الشُّعُوبِ وَالأُمَمِ وَالأَلْسِنَةِ. سُلْطَانُهُ سُلْطَانٌ أَبَدِيٌّ مَا لَنْ يَزُولَ وَمَلَكُوتُهُ مَا لاَ يَنْقَرِضُ.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">"I, Daniel, was grieved in my spirit within my body, and the visions of my head troubled me.</td>
        <td class="arabic">[أَمَّا أَنَا دَانِيآلَ فَحَزِنَتْ رُوحِي فِي وَسَطِ جِسْمِي وَأَفْزَعَتْنِي رُؤَى رَأْسِي.</td>
    </tr>
    <tr id="table_6_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_7" title="5th Prophecy">
    <caption id="caption_table_7" class="caption">5th Prophecy<br>(Proverbs 8:1-8,11,12)
    <span class="arabic-caption">النبوة الخامسة<br>(أمثال سليمان 8: 1 – 8 و11 و 12)</span></caption>
    <tr id="table_7_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء امثال سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_7_row_4" class="text">
        <td class="english">Does not wisdom cry out, And understanding lift up her voice?</td>
        <td class="arabic">أَلَعَلَّ الْحِكْمَةَ لاَ تُنَادِي وَالْفَهْمَ أَلاَ يُعْطِي صَوْتَهُ؟</td>
    </tr>
    <tr id="table_7_row_5" class="text">
        <td class="english">She takes her stand on the top of the high hill, Beside the way, where the paths meet.</td>
        <td class="arabic">عِنْدَ رُؤُوسِ الشَّوَاهِقِ عِنْدَ الطَّرِيقِ بَيْنَ الْمَسَالِكِ تَقِفُ.</td>
    </tr>
    <tr id="table_7_row_6" class="text">
        <td class="english">She cries out by the gates, at the entry of the city, At the entrance of the doors:</td>
        <td class="arabic">بِجَانِبِ الأَبْوَابِ عِنْدَ ثَغْرِ الْمَدِينَةِ عِنْدَ مَدْخَلِ الأَبْوَابِ تُصَرِّحُ:</td>
    </tr>
    <tr id="table_7_row_7" class="text">
        <td class="english">"To you, O men, I call, And my voice is to the sons of men.</td>
        <td class="arabic">«لَكُمْ أَيُّهَا النَّاسُ أُنَادِي وَصَوْتِي إِلَى بَنِي آدَمَ.</td>
    </tr>
    <tr id="table_7_row_8" class="text">
        <td class="english">O you simple ones, understand prudence, And you fools, be of an understanding heart.</td>
        <td class="arabic">أَيُّهَا الْحَمْقَى تَعَلَّمُوا ذَكَاءً وَيَا جُهَّالُ تَعَلَّمُوا فَهْماً.</td>
    </tr>
    <tr id="table_7_row_9" class="text">
        <td class="english">Listen, for I will speak of excellent things, And from the opening of my lips will come right things;</td>
        <td class="arabic">اِسْمَعُوا فَإِنِّي أَتَكَلَّمُ بِأُمُورٍ شَرِيفَةٍ وَافْتِتَاحُ شَفَتَيَّ اسْتِقَامَةٌ.</td>
    </tr>
    <tr id="table_7_row_10" class="text">
        <td class="english">For my mouth will speak truth; Wickedness is an abomination to my lips.</td>
        <td class="arabic">لأَنَّ حَنَكِي يَلْهَجُ بِالصِّدْقِ وَمَكْرَهَةُ شَفَتَيَّ الْكَذِبُ.</td>
    </tr>
    <tr id="table_7_row_11" class="text">
        <td class="english">All the words of my mouth are with righteousness; Nothing crooked or perverse is in them.</td>
        <td class="arabic">كُلُّ كَلِمَاتِ فَمِي بِالْحَقِّ. لَيْسَ فِيهَا عَوَجٌ وَلاَ الْتِوَاءٌ.</td>
    </tr>
    <tr id="table_7_row_12" class="text">
        <td class="english">For wisdom is better than rubies, And all the things one may desire cannot be compared with her.</td>
        <td class="arabic">لأَنَّ الْحِكْمَةَ خَيْرٌ مِنَ اللّآلِئِ وَكُلُّ الْجَوَاهِرِ لاَ تُسَاوِيهَا.</td>
    </tr>
    <tr id="table_7_row_13" class="text">
        <td class="english">"I, wisdom, dwell with prudence, And find out knowledge and discretion.</td>
        <td class="arabic">«أَنَا الْحِكْمَةُ أَسْكُنُ الذَّكَاءَ وَأَجِدُ مَعْرِفَةَ التَّدَابِيرِ.</td>
    </tr>
    <tr id="table_7_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_8" title="Homily">
    <caption id="caption_table_8" class="caption">Homily<br>(Abba Shenouda the Archimandrite)
    <span class="arabic-caption">العظة<br>(أنبا شنودة رئيس المتوحدين)</span></caption>
    <tr id="table_8_row_1" class="intro">
        <td class="english">A homily of our holy father Abba Shenouda the Archimandrite. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لأبينا القديس أنبا شنودة رئيس المتوحدين بركته تكون معنا آمين.</td>
    </tr>
    <tr id="table_8_row_4" class="text">
        <td class="english">My brethren, let us do the will of God as long as we have time to do works for the Lord.</td>
        <td class="arabic">فلنصنع ارادة الله يا اخوتى مادام لنا وقت ان نعمل فيه اعمال الرب.</td>
    </tr>
    <tr id="table_8_row_5" class="text">
        <td class="english">Remember that death does not linger and we are destined to leave this world.</td>
        <td class="arabic">تذكروا أن الموت لا يتأخر ومصيرنا ان نترك العالم.</td>
    </tr>
    <tr id="table_8_row_6" class="text">
        <td class="english">Where are those that were before us?</td>
        <td class="arabic">اين جميع الذين كانوا قبلنا</td>
    </tr>
    <tr id="table_8_row_7" class="text">
        <td class="english">They are all laying in tombs. Let us be fruitful to be worthy of the grace of God which He bestowed upon us,</td>
        <td class="arabic">هوذا كلهم الآن يرقدون فى القبور فلنصنع اثماراً تليق بنعمة الله التى اعطاها لنا</td>
    </tr>
    <tr id="table_8_row_8" class="text">
        <td class="english">as well as to christians, to be likened to Jesus Christ, the true light for we are human.</td>
        <td class="arabic">وعلينا نحن وكل المسيحيين أن نتشبه بيسوع المسيح النور الحقيقى لاننا نحن بشر.</td>
    </tr>
    <tr id="table_8_row_9" class="text">
        <td class="english">He is the master and we are His slaves. He is the shepherd and we are His sheep under His guidance.</td>
        <td class="arabic">هو السيد ونحن عبيده هو الراعى ونحن غنم تحت يده</td>
    </tr>
    <tr id="table_8_row_10" class="text">
        <td class="english">He is born of the Father but we are His creation. Light of light, He died for us; we who are sinners.</td>
        <td class="arabic">هو مولود من الاب ولكن نحن خليقته نور من نور مات عنا نحن الخطاة</td>
    </tr>
    <tr id="table_8_row_11" class="text">
        <td class="english">He gave Himself up for us on the wood of the cross to grant us His kingdom.</td>
        <td class="arabic">واسلم ذاته عنا على خشبة الصليب لينعم لنا بملكوته،</td>
    </tr>
    <tr id="table_8_row_12" class="text">
        <td class="english">Slaves were to die for their master but the master accepted the shame and died for His slaves.</td>
        <td class="arabic">ما كان العبيد ملتزمين أن يموتوا عن سيدهم اما السيد فقد استهان بالخزى ومات عن عبيده</td>
    </tr>
    <tr id="table_8_row_13" class="text">
        <td class="english">That as He died, they die also with Him and as He is alive, they live with Him.</td>
        <td class="arabic">كى  حسبما مات هو هم يموتون معه وكما هو حى فهم أيضاً يحيون.</td>
    </tr>
    <tr id="table_8_row_15" class="intro">
        <td class="english">We conclude the homily of our Holy Father Abba Shenouda, the Archimandrite who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا شنودة رئيس المتوحدين الذى أنار عقولنا وعيون قلوبنا باسم الآب والابن والروح القدس الاله الواحد آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(24:1-2)
        <span class="arabic-caption">المزمور قبطي<br>(24:1-2)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">To You, O Lord, have I lifted up my soul. O my God,</td>
            <td class="coptic">Ⲁⲓϥⲁⲓ ⲛ̀ⲧⲁⲯⲩⲭⲏ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡ̀⳪ ⲡⲁⲛⲟⲩϯ : </td>
            <td class="arabic">اليك يارب رفعت نفسي </td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">I have trusted in You; let me not be confounded forever, </td>
            <td class="coptic">ⲁⲓⲭⲁϩ̀ⲑⲏⲓ ⲉ̀ⲣⲟⲕ ⲛ̀ⲛⲉⲕ ⲑ̀ⲣⲓϭⲓϣⲓⲡⲓ ϣⲁ ⲉ̀ⲛⲉϩ:</td>
            <td class="arabic">إلهي عليك توكلت فلا تخزني إلى الابد.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">neither let my enemies laugh me to scorn; </td>
            <td class="coptic">ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲛⲑ̀ⲣⲟⲩⲥⲱⲃⲓ ⲛ̀ⲥⲱⲓ ⲛ̀ϫⲉ ⲛⲁϫⲁϫⲓ : </td>
            <td class="arabic">ولا تُضحك بى أعدائي.</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">let them be ashamed that transgress without cause. </td>
            <td class="coptic">Ⲙⲁⲣⲟⲩϭⲓϣⲓⲡⲓ ⲛ̀ⲑⲱⲟⲩ ⲛ̀ϫⲉ ⲛⲏⲉⲧⲓ̀ⲣⲓ ⲛ̀ϯⲁ̀ⲛⲟⲙⲓⲁ̀ ϧⲉⲛ ⲡⲉⲧϣⲟⲩⲓⲧ</td>
            <td class="arabic">فليخز الذين يصنعون الاثم باطلاً.</td>
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
            <td class="coptic">Ⲉϥϩⲉⲙⲥⲓ ⲇⲉ ϩⲓϫⲉⲛ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲧⲉ ⲛⲓϫⲱⲓⲧ : ⲁⲩⲓ̀ ϩⲁⲣⲟϥ ⲛ̀ϫⲉ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ ⲥⲁⲡ̀ⲥⲁ ⲙ̀ⲙⲁⲩⲁ̀ⲧⲟⲩ ⲉⲩϫⲱⲙ̀ⲙⲟⲥ ϫⲉ ⲁϫⲟⲥ ⲛⲁⲛ ϫⲉ ⲁ̀ⲣⲉ ⲛⲁⲓ ⲛⲁϣⲱⲡⲓ ⲛ̀ⲑ̀ⲛⲁⲩ : ⲟⲩⲟϩ ⲁϣ ⲡⲉ ⲡⲓⲙⲏⲓⲛⲓ ⲛ̀ⲧⲉ ⲡⲉⲕϫⲓⲛⲓ̀ ⲛⲉⲙ ⲧ̀ϧⲁⲉ̀ ⲛ̀ⲧⲉ ⲡⲁⲓ ⲉ̀ⲛⲉϩ : Ⲟⲩⲟϩ ⲁϥⲉ̀ⲣⲟⲩⲱ̀ ⲛ̀ϫⲉ Ⲓ̅ⲏ̅ⲥ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ : ϫⲉ ⲁ̀ⲛⲁⲩ ⲙ̀ⲡⲉⲣⲭⲁⲥ ⲛ̀ⲧⲉ ⲟⲩⲁⲓ ⲥⲉⲣⲉⲙ ⲑⲏⲛⲟⲩ : Ⲉⲣⲉ ⲟⲩⲙⲏϣ ⲅⲁⲣ ⲓ̀ ϧⲉⲛ ⲡⲁⲣⲁⲛ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ ⲁ̀ⲛⲟⲕ ⲡⲉ Ⲡ̅ⲭ̅ⲥ : ⲟⲩⲟϩ ⲉⲩⲉ̀ⲥⲉⲣⲉⲙ ⲟⲩⲙⲏϣ Ⲉ̀ⲣⲉⲧⲉⲛⲉ̀ⲥⲱⲧⲉⲙ ⲇⲉ ⲛ̀ϩⲁⲛⲃⲱⲧⲟⲥ ⲛⲉⲙ ϩⲁⲛⲥ̀ⲙⲏ ⲙ̀ⲃⲱⲧⲟⲥ : ⲁ̀ⲛⲁⲩ ⲙ̀ⲡⲉⲣϣ̀ⲑⲟⲣⲧⲉⲣ ϩⲱϯ ⲅⲁⲣ ⲡⲉ ⲛ̀ⲧⲟⲩϣⲱⲡⲓ.<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(25:1-3)
    <span class="arabic-caption">المزمور<br>(25: 1 - 3)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">To You, O Lord, have I lifted up my soul.</td>
        <td class="arabic">الهى عليك توكلت فلا تخزنى إلى الابد.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">O my God, I have trusted in You; let me not be confounded forever,</td>
        <td class="arabic">أَيْضاً كُلُّ مُنْتَظِرِيكَ لاَ يَخْزَوْا.

 لِيَخْزَ الْغَادِرُونَ بِلاَ سَبَبٍ.</td>
    </tr>
    <tr id="table_19_row_6" class="text">
        <td class="english">neither let my enemies laugh me to scorn; 

let them be ashamed that transgress without cause.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_19_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Matthew 24:3-35)
    <span class="arabic-caption">الانجيل<br>(متى 24: 3 – 35)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Now as He sat on the Mount of Olives, the disciples came to Him privately, saying, "Tell us, when will these things be? And what will be the sign of Your coming, and of the end of the age?"</td>
        <td class="arabic">وَفِيمَا هُوَ جَالِسٌ عَلَى جَبَلِ الزَّيْتُونِ تَقَدَّمَ إِلَيْهِ التَّلاَمِيذُ عَلَى انْفِرَادٍ قَائِلِينَ: «قُلْ لَنَا مَتَى يَكُونُ هَذَا وَمَا هِيَ عَلاَمَةُ مَجِيئِكَ وَانْقِضَاءِ الدَّهْرِ؟»</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">And Jesus answered and said to them: "Take heed that no one deceives you.</td>
        <td class="arabic">فَأَجَابَ يَسُوعُ: «انْظُرُوا لاَ يُضِلَّكُمْ أَحَدٌ.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">For many will come in My name, saying, 'I am the Christ,' and will deceive many.</td>
        <td class="arabic">فَإِنَّ كَثِيرِينَ سَيَأْتُونَ بِاسْمِي قَائِلِينَ: أَنَا هُوَ الْمَسِيحُ وَيُضِلُّونَ كَثِيرِينَ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">And you will hear of wars and rumors of wars. See that you are not troubled; for all these things must come to pass, but the end is not yet.</td>
        <td class="arabic">وسوف تسمعون بحروب واخبار حروب . انظروا لا ترتاعوا . لأنه لا بد ان تكون هذه كلها . ولكن ليس المنتهى بعد</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">For nation will rise against nation, and kingdom against kingdom. And there will be famines, pestilences, and earthquakes in various places.</td>
        <td class="arabic">لأَنَّهُ تَقُومُ أُمَّةٌ عَلَى أُمَّةٍ وَمَمْلَكَةٌ عَلَى مَمْلَكَةٍ، وَتَكُونُ مَجَاعَاتٌ وَأَوْبِئَةٌ وَزَلاَزِلُ فِي أَمَاكِنَ</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">All these are the beginning of sorrows.</td>
        <td class="arabic">وَلَكِنَّ هَذِهِ كُلَّهَا مُبْتَدَأُ الأَوْجَاعِ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">Then they will deliver you up to tribulation and kill you, and you will be hated by all nations for My name's sake.</td>
        <td class="arabic">حِينَئِذٍ يُسَلِّمُونَكُمْ إِلَى ضِيقٍ وَيَقْتُلُونَكُمْ وَتَكُونُونَ مُبْغَضِينَ مِنْ جَمِيعِ الأُمَمِ لأَجْلِ اسْمِي.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">And then many will be offended, will betray one another, and will hate one another.</td>
        <td class="arabic">وَحِينَئِذٍ يَعْثُرُ كَثِيرُونَ وَيُسَلِّمُونَ بَعْضُهُمْ بَعْضاً وَيُبْغِضُونَ بَعْضُهُمْ بَعْضاً.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Then many false prophets will rise up and deceive many.</td>
        <td class="arabic">وَيَقُومُ أَنْبِيَاءُ كَذَبَةٌ كَثِيرُونَ وَيُضِلُّونَ كَثِيرِينَ.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">And because lawlessness will abound, the love of many will grow cold.</td>
        <td class="arabic">وَلِكَثْرَةِ الإِثْمِ تَبْرُدُ مَحَبَّةُ الْكَثِيرِينَ.</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">But he who endures to the end shall be saved.</td>
        <td class="arabic">وَلَكِنِ الَّذِي يَصْبِرُ إِلَى الْمُنْتَهَى فَهَذَا يَخْلُصُ.</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come.</td>
        <td class="arabic">وَيُكْرَزُ بِبِشَارَةِ الْمَلَكُوتِ هَذِهِ فِي كُلِّ الْمَسْكُونَةِ شَهَادَةً لِجَمِيعِ الأُمَمِ. ثُمَّ يَأْتِي الْمُنْتَهَى.</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english">"Therefore when you see the 'abomination of desolation,' spoken of by Daniel the prophet, standing in the holy place" (whoever reads, let him understand),</td>
        <td class="arabic">«فَمَتَى نَظَرْتُمْ «رِجْسَةَ الْخَرَابِ» الَّتِي قَالَ عَنْهَا دَانِيآلُ النَّبِيُّ قَائِمَةً فِي الْمَكَانِ الْمُقَدَّسِ - لِيَفْهَمِ الْقَارِئُ -</td>
    </tr>
    <tr id="table_20_row_17" class="text">
        <td class="english">then let those who are in Judea flee to the mountains.</td>
        <td class="arabic">فَحِينَئِذٍ لِيَهْرُبِ الَّذِينَ فِي الْيَهُودِيَّةِ إِلَى الْجِبَالِ</td>
    </tr>
    <tr id="table_20_row_18" class="text">
        <td class="english">Let him who is on the housetop not go down to take anything out of his house.</td>
        <td class="arabic">وَالَّذِي عَلَى السَّطْحِ فَلاَ يَنْزِلْ لِيَأْخُذَ مِنْ بَيْتِهِ شَيْئاً</td>
    </tr>
    <tr id="table_20_row_19" class="text">
        <td class="english">And let him who is in the field not go back to get his clothes.</td>
        <td class="arabic">وَالَّذِي فِي الْحَقْلِ فَلاَ يَرْجِعْ إِلَى وَرَائِهِ لِيَأْخُذَ ثِيَابَهُ.</td>
    </tr>
    <tr id="table_20_row_20" class="text">
        <td class="english">But woe to those who are pregnant and to those who are nursing babies in those days!</td>
        <td class="arabic">وَوَيْلٌ لِلْحَبَالَى وَالْمُرْضِعَاتِ فِي تِلْكَ الأَيَّامِ!</td>
    </tr>
    <tr id="table_20_row_21" class="text">
        <td class="english">And pray that your flight may not be in winter or on the Sabbath.</td>
        <td class="arabic">وَصَلُّوا لِكَيْ لاَ يَكُونَ هَرَبُكُمْ فِي شِتَاءٍ وَلاَ فِي سَبْتٍ</td>
    </tr>
    <tr id="table_20_row_22" class="text">
        <td class="english">For then there will be great tribulation, such as has not been since the beginning of the world until this time, no, nor ever shall be.</td>
        <td class="arabic">لأَنَّهُ يَكُونُ حِينَئِذٍ ضِيقٌ عَظِيمٌ لَمْ يَكُنْ مِثْلُهُ مُنْذُ ابْتِدَاءِ الْعَالَمِ إِلَى الآنَ وَلَنْ يَكُونَ.</td>
    </tr>
    <tr id="table_20_row_23" class="text">
        <td class="english">And unless those days were shortened, no flesh would be saved; but for the elect's sake those days will be shortened.</td>
        <td class="arabic">وَلَوْ لَمْ تُقَصَّرْ تِلْكَ الأَيَّامُ لَمْ يَخْلُصْ جَسَدٌ. وَلَكِنْ لأَجْلِ الْمُخْتَارِينَ تُقَصَّرُ تِلْكَ الأَيَّامُ.</td>
    </tr>
    <tr id="table_20_row_24" class="text">
        <td class="english">Then if anyone says to you, 'Look, here is the Christ!' or 'There!' do not believe it.</td>
        <td class="arabic">حِينَئِذٍ إِنْ قَالَ لَكُمْ أَحَدٌ: هُوَذَا الْمَسِيحُ هُنَا أَوْ هُنَاكَ فَلاَ تُصَدِّقُوا.</td>
    </tr>
    <tr id="table_20_row_25" class="text">
        <td class="english">For false christs and false prophets will rise and show great signs and wonders to deceive, if possible, even the elect.</td>
        <td class="arabic">لأَنَّهُ سَيَقُومُ مُسَحَاءُ كَذَبَةٌ وَأَنْبِيَاءُ كَذَبَةٌ وَيُعْطُونَ آيَاتٍ عَظِيمَةً وَعَجَائِبَ حَتَّى يُضِلُّوا لَوْ أَمْكَنَ الْمُخْتَارِينَ أَيْضاً.</td>
    </tr>
    <tr id="table_20_row_26" class="text">
        <td class="english">See, I have told you beforehand.</td>
        <td class="arabic">هَا أَنَا قَدْ سَبَقْتُ وَأَخْبَرْتُكُمْ.</td>
    </tr>
    <tr id="table_20_row_27" class="text">
        <td class="english">Therefore if they say to you, 'Look, He is in the desert!' do not go out; or 'Look, He is in the inner rooms!' do not believe it.</td>
        <td class="arabic">فَإِنْ قَالُوا لَكُمْ: هَا هُوَ فِي الْبَرِّيَّةِ فَلاَ تَخْرُجُوا! هَا هُوَ فِي الْمَخَادِعِ فَلاَ تُصَدِّقُوا!</td>
    </tr>
    <tr id="table_20_row_28" class="text">
        <td class="english">For as the lightning comes from the east and flashes to the west, so also will the coming of the Son of Man be.</td>
        <td class="arabic">لأَنَّهُ كَمَا أَنَّ الْبَرْقَ يَخْرُجُ مِنَ الْمَشَارِقِ وَيَظْهَرُ إِلَى الْمَغَارِبِ هَكَذَا يَكُونُ أَيْضاً مَجِيءُ ابْنِ الإِنْسَانِ.</td>
    </tr>
    <tr id="table_20_row_29" class="text">
        <td class="english">For wherever the carcass is, there the eagles will be gathered together.</td>
        <td class="arabic">لأَنَّهُ حَيْثُمَا تَكُنِ الْجُثَّةُ فَهُنَاكَ تَجْتَمِعُ النُّسُورُ.</td>
    </tr>
    <tr id="table_20_row_30" class="text">
        <td class="english">"Immediately after the tribulation of those days the sun will be darkened, and the moon will not give its light; the stars will fall from heaven, and the powers of the heavens will be shaken.</td>
        <td class="arabic">«وَلِلْوَقْتِ بَعْدَ ضِيقِ تِلْكَ الأَيَّامِ تُظْلِمُ الشَّمْسُ وَالْقَمَرُ لاَ يُعْطِي ضَوْءَهُ وَالنُّجُومُ تَسْقُطُ مِنَ السَّمَاءِ وَقُوَّاتُ السَّمَاوَاتِ تَتَزَعْزَعُ.</td>
    </tr>
    <tr id="table_20_row_31" class="text">
        <td class="english">Then the sign of the Son of Man will appear in heaven, and then all the tribes of the earth will mourn, and they will see the Son of Man coming on the clouds of heaven with power and great glory.</td>
        <td class="arabic">وَحِينَئِذٍ تَظْهَرُ عَلاَمَةُ ابْنِ الإِنْسَانِ فِي السَّمَاءِ. وَحِينَئِذٍ تَنُوحُ جَمِيعُ قَبَائِلِ الأَرْضِ وَيُبْصِرُونَ ابْنَ الإِنْسَانِ آتِياً عَلَى سَحَابِ السَّمَاءِ بِقُوَّةٍ وَمَجْدٍ كَثِيرٍ.</td>
    </tr>
    <tr id="table_20_row_32" class="text">
        <td class="english">And He will send His angels with a great sound of a trumpet, and they will gather together His elect from the four winds, from one end of heaven to the other.</td>
        <td class="arabic">فَيُرْسِلُ مَلاَئِكَتَهُ بِبُوقٍ عَظِيمِ الصَّوْتِ فَيَجْمَعُونَ مُخْتَارِيهِ مِنَ الأَرْبَعِ الرِّيَاحِ مِنْ أَقْصَاءِ السَّمَاوَاتِ إِلَى أَقْصَائِهَا.</td>
    </tr>
    <tr id="table_20_row_33" class="text">
        <td class="english">"Now learn this parable from the fig tree: When its branch has already become tender and puts forth leaves, you know that summer is near.</td>
        <td class="arabic">فَمِنْ شَجَرَةِ التِّينِ تَعَلَّمُوا الْمَثَلَ: مَتَى صَارَ غُصْنُهَا رَخْصاً وَأَخْرَجَتْ أَوْرَاقَهَا تَعْلَمُونَ أَنَّ الصَّيْفَ قَرِيبٌ.</td>
    </tr>
    <tr id="table_20_row_34" class="text">
        <td class="english">So you also, when you see all these things, know that it is near--at the doors!</td>
        <td class="arabic">هَكَذَا أَنْتُمْ أَيْضاً مَتَى رَأَيْتُمْ هَذَا كُلَّهُ فَاعْلَمُوا أَنَّهُ قَرِيبٌ عَلَى الأَبْوَابِ.</td>
    </tr>
    <tr id="table_20_row_35" class="text">
        <td class="english">Assuredly, I say to you, this generation will by no means pass away till all these things take place.</td>
        <td class="arabic">اَلْحَقَّ أَقُولُ لَكُمْ: لاَ يَمْضِي هَذَا الْجِيلُ حَتَّى يَكُونَ هَذَا كُلُّهُ.</td>
    </tr>
    <tr id="table_20_row_36" class="text">
        <td class="english">Heaven and earth will pass away, but My words will by no means pass away.</td>
        <td class="arabic">اَلسَّمَاءُ وَالأَرْضُ تَزُولاَنِ وَلَكِنَّ كَلاَمِي لاَ يَزُولُ.</td>
    </tr>
    <tr id="table_20_row_38" class="intro">
        <td class="english">Bow down before the Holy Gospel.
Glory be to God forever.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس. 
والمجد لله دائماً.</td>
    </tr>
</table>


</div>


<div class="section" id="section_8" title="Exposition">

${daytimeExpositionIntroHtml}

<table id="table_22" title="Exposition">
    <caption id="caption_table_22" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_22_row_1" class="intro">
        <td class="english">The exposition of The NINTH Hour of the DAY of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من يوم الاثنين من البصخة المقدسة بركتها علينا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">Come all you people of Jerusalem to the Mount of Olives to see Jesus of Nazareth,</td>
        <td class="arabic">يا جميع سكان أورشليم، تعالوا لنمضى إلى جبل الزيتون لننظر يسوع الناصرى</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">the Son of David and the Word of the Father, sitting there surrounded by his inquiring disciples.</td>
        <td class="arabic">ابن داود كلمة الآب جالساً هناك، وتلاميذه محيطون به يسألونه.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">They spoke to Him concerning the temple, the great stones with which it was built, and how it was well decorated.</td>
        <td class="arabic">فأعلموه أولاً عن بناء الهيكل، وحجارته العظيمة، وكمال زينته.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">Our Merciful Savior, who guides those who trust him and reassures their hearts about the future, replied peacefully and knowledgeably saying,</td>
        <td class="arabic">فأجاب مخلصنا الكثير الرحمة مرشد كل أحد يتوكل عليه،  بهدوء ومعرفة، يثبت قلوبهم على ما سوف يكون:</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">“Do not let anyone mislead you about any matter when you face temptations.</td>
        <td class="arabic">أنظروا لا يضلكم أحد فى شئ إذا وقعتم فى التجارب.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">For nation shall rise against nation, and kingdom against kingdom.</td>
        <td class="arabic">فسوف تقوم أمة على أمة، ومملكة على مملكة.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">There will be earthquakes and troubles in diverse places, there will be great afflictions and calamities on earth.</td>
        <td class="arabic">وتكون زلازل وأوبئة فى أماكن. وتكون الشدائد والضوائق على الأرض.</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">Know that you will be hated and killed by all nations for the sake of His name.</td>
        <td class="arabic">واعلموا أنهم سوف يقتلونكم، والأمم يبغضونكم.  هذا يفعلونه بكم من أجل اسمى.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">Persevere so that you may be saved.</td>
        <td class="arabic">فأصبروا أنتم لكى تخلصوا.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};