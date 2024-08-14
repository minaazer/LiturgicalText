import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOTH9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const paschalPraiseHtml = paschalPraise2("5","8","9","NINTH","التاسعة","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const copticGospelIntroHtml = copticGospelIntro("11");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("15");
    const expositionConclusionHtml = expositionConclusion("17");
    const daytimeLitaniesHtml = daytimeLitanies("18",true);
    const evnotiNaiNanHtml = evnotiNaiNan("19");
    const endOfServiceHymnHtml = endOfServiceHymn("20");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲄⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁⲥϣⲱⲡⲓ ⲇⲉ ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓⲥⲁϫⲓ ⲛⲁⲣⲉ Ⲫϯ ϭⲱⲛⲧ ⲛ̀Ⲁⲃⲣⲁⲁⲙ ⲡⲉ ⲟⲩⲟϩ ⲡⲉϫⲁϥ ⲛⲁϥ : ϫⲉ Ⲁⲃⲣⲁⲁⲙ Ⲁⲃⲣⲁⲁⲙ : ⲛ̀ⲑⲟϥ ⲇⲉ ⲡⲉϫⲁϥ ϫⲉ ϩⲏⲡⲡⲉ ⲁ̀ⲛⲟⲕ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲏ̀ⲥⲁⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲟⲩ̅ⲡ̅ⲛ̅ⲁ ⲛ̀ⲧⲉ Ⲡ̀⳪ ⲉⲧⲭⲏ ϩⲓϫⲱⲓ : Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲑⲁϩⲥⲧ ⲉ̀ϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛ̀ⲛⲓϩⲏⲕⲓ ⲁϥⲟⲩⲟⲣⲡⲧ ⲉ̀ⲧⲁⲗϭⲟ ⲛ̀ⲛⲏⲉⲧϧⲟⲙϧⲉⲙ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲅⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲁⲡⲓⲟⲩⲣⲟ ⲇⲉⲛ̀ⲥⲟⲇⲟⲙⲁ ⲉⲓ̀ⲉ̀ⲃⲟⲗ ⲉ̀ⲧⲱⲙⲧ ⲉⲀⲃⲣⲁⲁⲙ ⲙⲉⲛⲉⲛⲥⲁ ⲉⲧⲣⲉϥⲕⲟⲧϥ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲓϭⲟϫϭⲉϫ ⲛ̀ⲭⲟⲇⲟⲗⲟⲅⲟⲙⲟⲣ ⲛⲉⲙ ⲛⲓⲟⲩⲣⲱⲟⲩ ⲉⲑⲛⲉⲙⲁϥ ⲉ̀ϧⲣⲏⲓ ϧⲉⲛ ⲡⲓⲁ ⲛ ⲥⲁⲩⲏ ⲑⲁⲓ ⲧⲉ ⲧⲥⲱϣⲓ ⲙ̀ⲡⲓⲟⲩⲣⲟ ⲁ ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ ⲡ̀ⲟⲩⲣⲟ ⲛ̀Ⲥⲁⲗⲏⲙ ⲉⲓⲛⲓ ⲉ̀ⲃⲟⲗ ϩⲉⲛⲱⲓⲕ ⲛⲉⲙ ⲟⲩⲏⲣⲡ ⲛⲉϥ ⲟ ⲇⲉ ⲛ̀ⲟⲩⲏⲃ ⲡⲉ ⲙ̀Ⲫϯ ⲉⲧϭⲟⲥⲓ.</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲃ ⲡⲓⲆⲓⲕⲉⲟⲥ : ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ϥ̀ⲟⲛϧ ⲛ̀ϫⲉ Ⲡ̀⳪ ⲫⲏⲉ̀ⲧⲁϥ ϯϩⲁⲡ ⲉⲣⲟⲓ ⲙ̀ⲡⲁⲓⲣⲏϯ : ⲛⲉⲙ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲫⲏⲉ̀ⲧⲁϥϯⲙ̀ⲕⲁϩ ⲛ̀ⲧⲁⲯⲩⲭⲏ : ϫⲉ ϩⲟⲥ ⲟⲛ ⲉ̀ⲣⲉ ⲡⲁⲛⲓϥⲓ ϣⲟⲡ ⲛ̀ϧⲏⲧ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    

    <table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Genesis 22:1-19)
    <span class="arabic-caption">النبوة الأولي<br>(سفر التكوين 22: 1 - 19)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Now it came to pass after these things that God tested Abraham, and said to him, "Abraham!" And he said, "Here I am."</td>
        <td class="arabic">وَحَدَثَ بَعْدَ هَذِهِ الامُورِ انَّ اللهَ امْتَحَنَ ابْرَاهِيمَ فَقَالَ لَهُ: «يَا ابْرَاهِيمُ». فَقَالَ: «هَئَنَذَا».</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Then He said, "Take now your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains of which I shall tell you."</td>
        <td class="arabic">فَقَالَ: «خُذِ ابْنَكَ وَحِيدَكَ الَّذِي تُحِبُّهُ اسْحَاقَ وَاذْهَبْ الَى ارْضِ الْمُرِيَّا وَاصْعِدْهُ هُنَاكَ مُحْرَقَةً عَلَى احَدِ الْجِبَالِ الَّذِي اقُولُ لَكَ».</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">So Abraham rose early in the morning and saddled his donkey, and took two of his young men with him, and Isaac his son; and he split the wood for the burnt offering, and arose and went to the place of which God had told him.</td>
        <td class="arabic">فَبَكَّرَ ابْرَاهِيمُ صَبَاحا وَشَدَّ عَلَى حِمَارِهِ وَاخَذَ اثْنَيْنِ مِنْ غِلْمَانِهِ مَعَهُ وَاسْحَاقَ ابْنَهُ وَشَقَّقَ حَطَبا لِمُحْرَقَةٍ وَقَامَ وَذَهَبَ الَى الْمَوْضِعِ الَّذِي قَالَ لَهُ اللهُ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Then on the third day Abraham lifted his eyes and saw the place afar off.</td>
        <td class="arabic">وَفِي الْيَوْمِ الثَّالِثِ رَفَعَ ابْرَاهِيمُ عَيْنَيْهِ وَابْصَرَ الْمَوْضِعَ مِنْ بَعِيدٍ</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And Abraham said to his young men, "Stay here with the donkey; the lad and I will go yonder and worship, and we will come back to you."</td>
        <td class="arabic">فَقَالَ ابْرَاهِيمُ لِغُلامَيْهِ: «اجْلِسَا انْتُمَا هَهُنَا مَعَ الْحِمَارِ وَامَّا انَا وَالْغُلامُ فَنَذْهَبُ الَى هُنَاكَ وَنَسْجُدُ ثُمَّ نَرْجِعُ الَيْكُمَا».</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">So Abraham took the wood of the burnt offering and laid it on Isaac his son; and he took the fire in his hand, and a knife, and the two of them went together.</td>
        <td class="arabic">فَاخَذَ ابْرَاهِيمُ حَطَبَ الْمُحْرَقَةِ وَوَضَعَهُ عَلَى اسْحَاقَ ابْنِهِ وَاخَذَ بِيَدِهِ النَّارَ وَالسِّكِّينَ. فَذَهَبَا كِلاهُمَا مَعا.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">But Isaac spoke to Abraham his father and said, "My father!" And he said, "Here I am, my son." Then he said, "Look, the fire and the wood, but where is the lamb for a burnt offering?"</td>
        <td class="arabic">وَقَالَ اسْحَاقُ لابْرَاهِيمَ ابِيهِ: «يَا ابِي». فَقَالَ: «هَئَنَذَا يَا ابْنِي». فَقَالَ: «هُوَذَا النَّارُ وَالْحَطَبُ وَلَكِنْ ايْنَ الْخَرُوفُ لِلْمُحْرَقَةِ؟»</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">And Abraham said, "My son, God will provide for Himself the lamb for a burnt offering." So the two of them went together.</td>
        <td class="arabic">فَقَالَ ابْرَاهِيمُ: «اللهُ يَرَى لَهُ الْخَرُوفَ لِلْمُحْرَقَةِ يَا ابْنِي». فَذَهَبَا كِلاهُمَا مَعا.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Then they came to the place of which God had told him. And Abraham built an altar there and placed the wood in order; and he bound Isaac his son and laid him on the altar, upon the wood.</td>
        <td class="arabic">فَلَمَّا اتَيَا الَى الْمَوْضِعِ الَّذِي قَالَ لَهُ اللهُ بَنَى هُنَاكَ ابْرَاهِيمُ الْمَذْبَحَ وَرَتَّبَ الْحَطَبَ وَرَبَطَ اسْحَاقَ ابْنَهُ وَوَضَعَهُ عَلَى الْمَذْبَحِ فَوْقَ الْحَطَبِ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">And Abraham stretched out his hand and took the knife to slay his son.</td>
        <td class="arabic">ثُمَّ مَدَّ ابْرَاهِيمُ يَدَهُ وَاخَذَ السِّكِّينَ لِيَذْبَحَ ابْنَهُ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">But the Angel of the Lord called to him from heaven and said, "Abraham, Abraham!" So he said, "Here I am."</td>
        <td class="arabic">فَنَادَاهُ مَلاكُ الرَّبِّ مِنَ السَّمَاءِ وَقَالَ: «ابْرَاهِيمُ ابْرَاهِيمُ». فَقَالَ: «هَئَنَذَا»</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">And He said, "Do not lay your hand on the lad, or do anything to him; for now I know that you fear God, since you have not withheld your son, your only son, from Me."</td>
        <td class="arabic">فَقَالَ: «لا تَمُدَّ يَدَكَ الَى الْغُلامِ وَلا تَفْعَلْ بِهِ شَيْئا لانِّي الْانَ عَلِمْتُ انَّكَ خَائِفٌ اللهَ فَلَمْ تُمْسِكِ ابْنَكَ وَحِيدَكَ عَنِّي».</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">Then Abraham lifted his eyes and looked, and there behind him was a ram caught in a thicket by its horns. So Abraham went and took the ram, and offered it up for a burnt offering instead of his son.</td>
        <td class="arabic">فَرَفَعَ ابْرَاهِيمُ عَيْنَيْهِ وَنَظَرَ وَاذَا كَبْشٌ وَرَاءَهُ مُمْسَكا فِي الْغَابَةِ بِقَرْنَيْهِ فَذَهَبَ ابْرَاهِيمُ وَاخَذَ الْكَبْشَ وَاصْعَدَهُ مُحْرَقَةً عِوَضا عَنِ ابْنِهِ.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">And Abraham called the name of the place, The-Lord-Will-Provide; as it is said to this day, "In the Mount of The Lord it shall be provided."</td>
        <td class="arabic">فَدَعَا ابْرَاهِيمُ اسْمَ ذَلِكَ الْمَوْضِعِ «يَهْوَهْ يِرْاهْ». حَتَّى انَّهُ يُقَالُ الْيَوْمَ: «فِي جَبَلِ الرَّبِّ يُرَى».</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">Then the Angel of the Lord called to Abraham a second time out of heaven,</td>
        <td class="arabic">وَنَادَى مَلاكُ الرَّبِّ ابْرَاهِيمَ ثَانِيَةً مِنَ السَّمَاءِ</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">and said: "By Myself I have sworn, says the Lord, because you have done this thing, and have not withheld your son, your only son--</td>
        <td class="arabic">وَقَالَ: «بِذَاتِي اقْسَمْتُ يَقُولُ الرَّبُّ انِّي مِنْ اجْلِ انَّكَ فَعَلْتَ هَذَا الامْرَ وَلَمْ تُمْسِكِ ابْنَكَ وَحِيدَكَ</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">blessing I will bless you, and multiplying I will multiply your descendants as the stars of the heaven and as the sand which is on the seashore; and your descendants shall possess the gate of their enemies.</td>
        <td class="arabic">ابَارِكُكَ مُبَارَكَةً وَاكَثِّرُ نَسْلَكَ تَكْثِيرا كَنُجُومِ السَّمَاءِ وَكَالرَّمْلِ الَّذِي عَلَى شَاطِئِ الْبَحْرِ وَيَرِثُ نَسْلُكَ بَابَ اعْدَائِهِ</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">In your seed all the nations of the earth shall be blessed, because you have obeyed My voice."</td>
        <td class="arabic">وَيَتَبَارَكُ فِي نَسْلِكَ جَمِيعُ امَمِ الارْضِ مِنْ اجْلِ انَّكَ سَمِعْتَ لِقَوْلِي».</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">So Abraham returned to his young men, and they rose and went together to Beersheba; and Abraham dwelt at Beersheba.</td>
        <td class="arabic">ثُمَّ رَجَعَ ابْرَاهِيمُ الَى غُلامَيْهِ فَقَامُوا وَذَهَبُوا مَعا الَى بِئْرِ سَبْعٍ. وَسَكَنَ ابْرَاهِيمُ فِي بِئْرِ سَبْعٍ.</td>
    </tr>
    <tr id="table_3_row_24" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 61:1-6)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 61: 1 - 6)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">"The Spirit of the Lord God is upon Me, Because the Lord has anointed Me To preach good tidings to the poor; He has sent Me to heal the brokenhearted, To proclaim liberty to the captives, And the opening of the prison to those who are bound;</td>
        <td class="arabic">رُوحُ السَّيِّدِ الرَّبِّ عَلَيَّ لأَنَّ الرَّبَّ مَسَحَنِي لأُبَشِّرَ الْمَسَاكِينَ أَرْسَلَنِي لأَعْصِبَ مُنْكَسِرِي الْقَلْبِ لأُنَادِيَ لِلْمَسْبِيِّينَ بِالْعِتْقِ وَلِلْمَأْسُورِينَ بِالإِطْلاَقِ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">To proclaim the acceptable year of the Lord, And the day of vengeance of our God; To comfort all who mourn,</td>
        <td class="arabic">لأُنَادِيَ بِسَنَةٍ مَقْبُولَةٍ لِلرَّبِّ وَبِيَوْمِ انْتِقَامٍ لإِلَهِنَا. لأُعَزِّيَ كُلَّ النَّائِحِينَ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">To console those who mourn in Zion, To give them beauty for ashes, The oil of joy for mourning, The garment of praise for the spirit of heaviness; That they may be called trees of righteousness, The planting of the Lord, that He may be glorified."</td>
        <td class="arabic">لأَجْعَلَ لِنَائِحِي صِهْيَوْنَ لأُعْطِيَهُمْ جَمَالاً عِوَضاً عَنِ الرَّمَادِ وَدُهْنَ فَرَحٍ عِوَضاً عَنِ النَّوْحِ وَرِدَاءَ تَسْبِيحٍ عِوَضاً عَنِ الرُّوحِ الْيَائِسَةِ فَيُدْعَوْنَ أَشْجَارَ الْبِرِّ غَرْسَ الرَّبِّ لِلتَّمْجِيدِ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">And they shall rebuild the old ruins, They shall raise up the former desolations, And they shall repair the ruined cities, The desolations of many generations.</td>
        <td class="arabic">وَيَبْنُونَ الْخِرَبَ الْقَدِيمَةَ. يُقِيمُونَ الْمُوحِشَاتِ الأُوَلَ. وَيُجَدِّدُونَ الْمُدُنَ الْخَرِبَةَ مُوحِشَاتِ دَوْرٍ فَدَوْرٍ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">Strangers shall stand and feed your flocks, And the sons of the foreigner Shall be your plowmen and your vinedressers.</td>
        <td class="arabic">وَيَقِفُ الأَجَانِبُ وَيَرْعُونَ غَنَمَكُمْ وَيَكُونُ بَنُو الْغَرِيبِ حَرَّاثِيكُمْ وَكَرَّامِيكُمْ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">But you shall be named the priests of the Lord, They shall call you the servants of our God. You shall eat the riches of the Gentiles, And in their glory you shall boast.</td>
        <td class="arabic">أَمَّا أَنْتُمْ فَتُدْعَوْنَ كَهَنَةَ الرَّبِّ تُسَمُّونَ خُدَّامَ إِلَهِنَا. تَأْكُلُونَ ثَرْوَةَ الأُمَمِ وَعَلَى مَجْدِهِمْ تَتَأَمَّرُونَ.</td>
    </tr>
    <tr id="table_4_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Genesis 14:17-20)
    <span class="arabic-caption">النبوة الثالثة<br>(سفر التكوين 14: 17 – 20)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">And the king of Sodom went out to meet him at the Valley of Shaveh (that is, the King's Valley), after his return from the defeat of Chedorlaomer and the kings who were with him.</td>
        <td class="arabic">فَخَرَجَ مَلِكُ سَدُومَ لِاسْتِقْبَالِهِ بَعْدَ رُجُوعِهِ مِنْ كَسْرَةِ كَدَرْلَعَوْمَرَ وَالْمُلُوكِ الَّذِينَ مَعَهُ الَى عُمْقِ شَوَى (الَّذِي هُوَ عُمْقُ الْمَلِكِ).</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">Then Melchizedek king of Salem brought out bread and wine; he was the priest of God Most High.</td>
        <td class="arabic">وَمَلْكِي صَادِقُ مَلِكُ شَالِيمَ اخْرَجَ خُبْزا وَخَمْرا. وَكَانَ كَاهِنا لِلَّهِ الْعَلِيِّ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">And he blessed him and said: "Blessed be Abram of God Most High, Possessor of heaven and earth;</td>
        <td class="arabic">وَبَارَكَهُ وَقَالَ: «مُبَارَكٌ ابْرَامُ مِنَ اللهِ الْعَلِيِّ مَالِكِ السَّمَاوَاتِ وَالارْضِ</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">And blessed be God Most High, Who has delivered your enemies into your hand." And he gave him a tithe of all.</td>
        <td class="arabic">وَمُبَارَكٌ اللهُ الْعَلِيُّ الَّذِي اسْلَمَ اعْدَاءَكَ فِي يَدِكَ». فَاعْطَاهُ عُشْرا مِنْ كُلِّ شَيْءٍ.</td>
    </tr>
    <tr id="table_5_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Job 27:2-28:13)
    <span class="arabic-caption">النبوة الرابعة<br>(أيوب 27: 2 28: 13)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from the book of Job may his blessings be with us Amen.</td>
        <td class="arabic">من أيوب الصديق بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">"As God lives, who has taken away my justice, And the Almighty, who has made my soul bitter,</td>
        <td class="arabic">[حَيٌّ هُوَ اللهُ الَّذِي نَزَعَ حَقِّي وَالْقَدِيرُ الَّذِي أَمَرَّ نَفْسِي</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">As long as my breath is in me, And the breath of God in my nostrils,</td>
        <td class="arabic">إِنَّهُ مَا دَامَتْ نَسَمَتِي فِيَّ وَنَفْخَةُ اللهِ فِي أَنْفِي</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">My lips will not speak wickedness, Nor my tongue utter deceit.</td>
        <td class="arabic">لَنْ تَتَكَلَّمَ شَفَتَايَ إِثْماً وَلاَ يَلْفِظَ لِسَانِي بِغِشٍّ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">Far be it from me That I should say you are right; Till I die I will not put away my integrity from me.</td>
        <td class="arabic">حَاشَا لِي أَنْ أُبَرِّرَكُمْ! حَتَّى أُسْلِمَ الرُّوحَ لاَ أَعْزِلُ كَمَالِي عَنِّي.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">My righteousness I hold fast, and will not let it go; My heart shall not reproach me as long as I live.</td>
        <td class="arabic">تَمَسَّكْتُ بِبِرِّي وَلاَ أَرْخِيهِ. قَلْبِي لاَ يُعَيِّرُ يَوْماً مِنْ أَيَّامِي.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">"May my enemy be like the wicked, And he who rises up against me like the unrighteous.</td>
        <td class="arabic">لِيَكُنْ عَدُوِّي كَالشِّرِّيرِ وَمُعَانِدِي كَفَاعِلِ الشَّرِّ.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">For what is the hope of the hypocrite, Though he may gain much, If God takes away his life?</td>
        <td class="arabic">لأَنَّهُ مَا هُوَ رَجَاءُ الْفَاجِرِ عِنْدَمَا يَقْطَعُهُ عِنْدَمَا يَسْلِبُ اللهُ نَفْسَهُ؟</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">Will God hear his cry When trouble comes upon him?</td>
        <td class="arabic">أَفَيَسْمَعُ اللهُ صُرَاخَهُ إِذَا جَاءَ عَلَيْهِ ضِيقٌ؟</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">Will he delight himself in the Almighty? Will he always call on God?</td>
        <td class="arabic">أَمْ يَتَلَذَّذُ بِالْقَدِيرِ؟ هَلْ يَدْعُو اللهَ فِي كُلِّ حِينٍ؟</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">"I will teach you about the hand of God; What is with the Almighty I will not conceal.</td>
        <td class="arabic">[إِنِّي أُعَلِّمُكُمْ بِيَدِ اللهِ. لاَ أَكْتُمُ مَا هُوَ عِنْدَ الْقَدِيرِ.</td>
    </tr>
    <tr id="table_6_row_14" class="text">
        <td class="english">Surely all of you have seen it; Why then do you behave with complete nonsense?</td>
        <td class="arabic">هَا أَنْتُمْ كُلُّكُمْ قَدْ رَأَيْتُمْ فَلِمَاذَا تَتَبَطَّلُونَ تَبَطُّلاً قَائِلِينَ:</td>
    </tr>
    <tr id="table_6_row_15" class="text">
        <td class="english">"This is the portion of a wicked man with God, And the heritage of oppressors, received from the Almighty:</td>
        <td class="arabic">هَذَا نَصِيبُ الإِنْسَانِ الشِّرِّيرِ مِنْ عِنْدِ اللهِ وَمِيرَاثُ الْعُتَاةِ الَّذِي يَنَالُونَهُ مِنَ الْقَدِيرِ.</td>
    </tr>
    <tr id="table_6_row_16" class="text">
        <td class="english">If his children are multiplied, it is for the sword; And his offspring shall not be satisfied with bread.</td>
        <td class="arabic">إِنْ كَثُرَ بَنُوهُ فَلِلسَّيْفِ وَذُرِّيَّتُهُ لاَ تَشْبَعُ خُبْزاً.</td>
    </tr>
    <tr id="table_6_row_17" class="text">
        <td class="english">Those who survive him shall be buried in death, And their widows shall not weep,</td>
        <td class="arabic">بَقِيَّتُهُ تُدْفَنُ بِالْوَبَاءِ وَأَرَامِلُهُ لاَ تَبْكِي.</td>
    </tr>
    <tr id="table_6_row_18" class="text">
        <td class="english">Though he heaps up silver like dust, And piles up clothing like clay--</td>
        <td class="arabic">إِنْ كَنَزَ فِضَّةً كَالتُّرَابِ وَأَعَدَّ مَلاَبِسَ كَالطِّينِ</td>
    </tr>
    <tr id="table_6_row_19" class="text">
        <td class="english">He may pile it up, but the just will wear it, And the innocent will divide the silver.</td>
        <td class="arabic">فَهُوَ يُعِدُّ وَالْبَارُّ يَلْبِسُهُ وَالْبَرِئُ يَقْسِمُ الْفِضَّةَ.</td>
    </tr>
    <tr id="table_6_row_20" class="text">
        <td class="english">He builds his house like a moth, Like a booth which a watchman makes.</td>
        <td class="arabic">يَبْنِي بَيْتَهُ كَالْعُثِّ أَوْ كَمِظَلَّةٍ صَنَعَهَا الْحَارِسُ.</td>
    </tr>
    <tr id="table_6_row_21" class="text">
        <td class="english">The rich man will lie down, But not be gathered up; He opens his eyes, And he is no more.</td>
        <td class="arabic">يَضْطَجِعُ غَنِيّاً وَلَكِنَّهُ لاَ يُضَمُّ. يَفْتَحُ عَيْنَيْهِ وَلاَ يَكُونُ.</td>
    </tr>
    <tr id="table_6_row_22" class="text">
        <td class="english">Terrors overtake him like a flood; A tempest steals him away in the night.</td>
        <td class="arabic">الأَهْوَالُ تُدْرِكُهُ كَالْمِيَاهِ. لَيْلاً تَخْتَطِفُهُ الزَّوْبَعَةُ</td>
    </tr>
    <tr id="table_6_row_23" class="text">
        <td class="english">The east wind carries him away, and he is gone; It sweeps him out of his place.</td>
        <td class="arabic">تَحْمِلُهُ الشَّرْقِيَّةُ فَيَذْهَبُ وَتَجْرُفُهُ مِنْ مَكَانِهِ.</td>
    </tr>
    <tr id="table_6_row_24" class="text">
        <td class="english">It hurls against him and does not spare; He flees desperately from its power.</td>
        <td class="arabic">يُلْقِي اللهُ عَلَيْهِ وَلاَ يُشْفِقُ. مِنْ يَدِهِ يَهْرُبُ هَرْباً.</td>
    </tr>
    <tr id="table_6_row_25" class="text">
        <td class="english">Men shall clap their hands at him, And shall hiss him out of his place.</td>
        <td class="arabic">يَصْفِقُونَ عَلَيْهِ بِأَيْدِيهِمْ وَيَصْفِرُونَ عَلَيْهِ مِنْ مَكَانِه.</td>
    </tr>
    <tr id="table_6_row_26" class="text">
        <td class="english">"Surely there is a mine for silver, And a place where gold is refined.</td>
        <td class="arabic">[لأَنَّهُ يُوجَدُ لِلْفِضَّةِ مَعْدَنٌ وَمَوْضِعٌ لِلذَّهَبِ حَيْثُ يُمَحِّصُونَهُ.</td>
    </tr>
    <tr id="table_6_row_27" class="text">
        <td class="english">Iron is taken from the earth, And copper is smelted from ore.</td>
        <td class="arabic">الْحَدِيدُ يُسْتَخْرَجُ مِنَ التُّرَابِ وَالْحَجَرُ يَسْكُبُ نُحَاساً.</td>
    </tr>
    <tr id="table_6_row_28" class="text">
        <td class="english">Man puts an end to darkness, And searches every recess For ore in the darkness and the shadow of death.</td>
        <td class="arabic">قَدْ جَعَلَ لِلظُّلْمَةِ نِهَايَةً وَإِلَى كُلِّ طَرَفٍ هُوَ يَفْحَصُ. حَجَرَ الظُّلْمَةِ وَظِلَّ الْمَوْتِ.</td>
    </tr>
    <tr id="table_6_row_29" class="text">
        <td class="english">He breaks open a shaft away from people; In places forgotten by feet They hang far away from men; They swing to and fro.</td>
        <td class="arabic">حَفَرَ مَنْجَماً بَعِيداً عَنِ السُّكَّانِ. بِلاَ مَوْطِئٍ لِلْقَدَمِ. مُتَدَلِّينَ بَعِيدِينَ مِنَ النَّاسِ يَتَدَلْدَلُونَ.</td>
    </tr>
    <tr id="table_6_row_30" class="text">
        <td class="english">As for the earth, from it comes bread, But underneath it is turned up as by fire;</td>
        <td class="arabic">أَرْضٌ يَخْرُجُ مِنْهَا الْخُبْزُ أَسْفَلُهَا يَنْقَلِبُ كَمَا بِالنَّارِ.</td>
    </tr>
    <tr id="table_6_row_31" class="text">
        <td class="english">Its stones are the source of sapphires, And it contains gold dust.</td>
        <td class="arabic">حِجَارَتُهَا هِيَ مَوْضِعُ الْيَاقُوتِ الأَزْرَقِ وَفِيهَا تُرَابُ الذَّهَبِ.</td>
    </tr>
    <tr id="table_6_row_32" class="text">
        <td class="english">That path no bird knows, Nor has the falcon's eye seen it.</td>
        <td class="arabic">سَبِيلٌ لَمْ يَعْرِفْهُ كَاسِرٌ وَلَمْ تُبْصِرْهُ عَيْنُ بَاشِقٍ</td>
    </tr>
    <tr id="table_6_row_33" class="text">
        <td class="english">The proud lions have not trodden it, Nor has the fierce lion passed over it.</td>
        <td class="arabic">وَلَمْ تَدُسْهُ أَجْرَاءُ السَّبْعِ وَلَمْ يَسْلُكْهُ الأَسَدُ.</td>
    </tr>
    <tr id="table_6_row_34" class="text">
        <td class="english">He puts his hand on the flint; He overturns the mountains at the roots.</td>
        <td class="arabic">إِلَى الصَّوَّانِ يَمُدُّ يَدَهُ. يَقْلِبُ الْجِبَالَ مِنْ أُصُولِهَا.</td>
    </tr>
    <tr id="table_6_row_35" class="text">
        <td class="english">He cuts out channels in the rocks, And his eye sees every precious thing.</td>
        <td class="arabic">يَنْقُرُ فِي الصُّخُورِ سَرَباً وَعَيْنُهُ تَرَى كُلَّ ثَمِينٍ.</td>
    </tr>
    <tr id="table_6_row_36" class="text">
        <td class="english">He dams up the streams from trickling; What is hidden he brings forth to light.</td>
        <td class="arabic">يَمْنَعُ رَشْحَ الأَنْهَارِ وَأَبْرَزَ الْخَفِيَّاتِ إِلَى النُّورِ.</td>
    </tr>
    <tr id="table_6_row_37" class="text">
        <td class="english">"But where can wisdom be found? And where is the place of understanding?</td>
        <td class="arabic">[أَمَّا الْحِكْمَةُ فَمِنْ أَيْنَ تُوجَدُ وَأَيْنَ هُوَ مَكَانُ الْفَهْمِ؟</td>
    </tr>
    <tr id="table_6_row_38" class="text">
        <td class="english">Man does not know its value, Nor is it found in the land of the living.</td>
        <td class="arabic">لاَ يَعْرِفُ الإِنْسَانُ قِيمَتَهَا وَلاَ تُوجَدُ فِي أَرْضِ الأَحْيَاءِ.</td>
    </tr>
    <tr id="table_6_row_40" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_7" title="Homily">
    <caption id="caption_table_7" class="caption">Homily<br>(Abba Shenouda the Archimandrite)
    <span class="arabic-caption">العظة<br>(أنبا شنودة رئيس المتوحدين)</span></caption>
    <tr id="table_7_row_1" class="intro">
        <td class="english">A homily of our holy father Abba Shenouda the Archimandrite. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لأبينا القديس أنبا شنودة رئيس المتوحدين بركته تكون معنا آمين.</td>
    </tr>
    <tr id="table_7_row_4" class="text">
        <td class="english">There may be works that we think are right while they are evil in God’s sight.</td>
        <td class="arabic">قد توجد أعمال نخالها أنها صالحة ولكنها رديئة عند الله.</td>
    </tr>
    <tr id="table_7_row_5" class="text">
        <td class="english">That is we do keep evil amongst us, and therefore sinning in the holy places.</td>
        <td class="arabic">وذلك اننا نتغاضى عن بعضنا بعضاً فنخطئ فى المواضع المقدسة.</td>
    </tr>
    <tr id="table_7_row_6" class="text">
        <td class="english">For God did not plant fruitful and unfruitful trees in paradise.</td>
        <td class="arabic">لان الرب لم يغرس فى الفردوس الاشجار الصالحة والغير الصالحة بل غرسه من الاشجار الصالحة فقط. ولم يغرس فيه اشجاراً غير مثمره أو رديئة الثمر.</td>
    </tr>
    <tr id="table_7_row_7" class="text">
        <td class="english">Those whom He had put in paradise were driven out when they disobeyed Him.</td>
        <td class="arabic">وليس هذا فقط. بل والناس أنفسهم الذين جعلهم هناك عندما خالفوا لم يحتملهم بل أخرجهم منه.</td>
    </tr>
    <tr id="table_7_row_8" class="text">
        <td class="english">Dear brethren, from this, know that God’s places should not be full of faithful believers and unfaithful ones.</td>
        <td class="arabic">فمن هذا اعلموا ايها الاخوة الاحباء انه لا يجب أن تُملأ مساكن الله المقدسة من الناس الاشرار والصالحين.</td>
    </tr>
    <tr id="table_7_row_9" class="text">
        <td class="english">The world is full of sinners, the unjust, the saints, and the unclean; those that sin, He does not leave but takes away.</td>
        <td class="arabic">كما فى العالم المملوء من الخطاة والظالمين والقديسين والانجاس ولكن الذين يخطئون لا يتركهم فيها بل يخرجهم</td>
    </tr>
    <tr id="table_7_row_10" class="text">
        <td class="english">I know that the entire earth is of the Lord, but if this is His house along with the earth, then those who live in it shall live with Him.</td>
        <td class="arabic">أنا أعرف أن الأرض كلها هى للرب فان كان هكذا بيته وكذا الأرض كلها فالذين يسكنون فيها يحيون به</td>
    </tr>
    <tr id="table_7_row_11" class="text">
        <td class="english">For this, we should fear Him and keep His commandments.</td>
        <td class="arabic">لهذا يجب علينا أن نخافه ونحفظ وصاياه</td>
    </tr>
    <tr id="table_7_row_12" class="text">
        <td class="english">If once we fall in one of these, let us cry and mourn before Him</td>
        <td class="arabic">فاذا ما سقطنا فى واحدة منها فلنبك وننتحب أمامه</td>
    </tr>
    <tr id="table_7_row_13" class="text">
        <td class="english">that when he sees us as the woman who washed His feet with her tears,</td>
        <td class="arabic">حتى إذا ما رأى تنهد وشوق انفسنا مثل المرأة التى بلت قدميه بدموعها</td>
    </tr>
    <tr id="table_7_row_14" class="text">
        <td class="english">He may call to us saying, “your sins are forgiven, your faith has healed you, go in peace.”</td>
        <td class="arabic">نكون حقاً مستحقين صوته الحلو القائل مغفورة لكِ خطاياكِ اذهبِ بسلام إيمانك قد خلصكِ</td>
    </tr>
    <tr id="table_7_row_15" class="text">
        <td class="english">My brethren, you have seen that faith leads to salvation.</td>
        <td class="arabic">وقد رأيتم يا اخوتى ان الايمان يعمل الخلاص ويعلن شوقه فيه</td>
    </tr>
    <tr id="table_7_row_16" class="text">
        <td class="english">Those who do not have the desire to keep God’s commandment and do not have fervor in filling their mind with the Spirit;</td>
        <td class="arabic">فاذن كل من ليس له شوق فى حفظ وصايا الله وغيرة فى اقتداء العقلاء بالروح</td>
    </tr>
    <tr id="table_7_row_17" class="text">
        <td class="english">those whom he witnessed before but yet did not know the truth; those with no faith shall fall in every awful deed and shall destroy their souls.</td>
        <td class="arabic">الذين شهد لهم أنهم عرفوا الحق وقبلوا نصيحته بأعمالهم، والذين ليس لهم إيمان يسقطون فى كل عمل ردئ ويهلكون النفس</td>
    </tr>
    <tr id="table_7_row_18" class="text">
        <td class="english">As it is written that the wise hear advice but the foolish shall fall on their faces.</td>
        <td class="arabic">كما هو مكتوب أن الرجل العاقل يقبل النصيحة ويعمل والجاهل يسقط على وجهه:</td>
    </tr>
    <tr id="table_7_row_20" class="intro">
        <td class="english">We conclude the homily of our Holy Father Abba Shenouda the Archimandrite, who enlightened our minds and our hearts. In the name of the Father, the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا القديس الأنبا شنوده رئيس المتوحدين الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
    </tr>
</table>


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_10" title="Coptic Psalm">
        <caption class="caption" id="caption_table_10">Coptic Psalm<br>(23:1-2)
        <span class="arabic-caption">المزمور قبطياً<br>(22: 1)</span></caption>

        <tr id="table_10_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_10_row_1" class="text">
            <td class="english">The LORD is my shepherd;</td>
            <td class="coptic">Ⲡ̀ϭⲟⲓⲥ ⲡⲉⲑⲛⲁ ̀ⲁⲙⲟⲛⲓ ⲙ̀ⲙⲟⲓ :</td>
            <td class="arabic">الرب يرعاني</td>
        </tr>
        <tr id="table_10_row_2" class="text">
            <td class="english">I shall not want.</td>
            <td class="coptic">ⲛ̀ⲛⲉϥⲑ̀ⲣⲓ ⲉⲣϧⲁⲉ̀ ⲛ̀ϩ̀ⲗⲓ:</td>
            <td class="arabic">فلا يعوزني شيء</td>
        </tr>
        <tr id="table_10_row_3" class="text">
            <td class="english">He makes me to lie down in green pastures;</td>
            <td class="coptic">ⲁϥⲑ̀ⲣⲓϣⲱⲡⲓ ϧⲉⲛ ⲟⲩⲙⲁ ⲉϥⲟⲩⲉⲧⲟⲩⲱⲧ:</td>
            <td class="arabic">في مكان خضرة أسكنني.</td>
        </tr>
        <tr id="table_10_row_4" class="text">
            <td class="english">He leads me beside the still waters.</td>
            <td class="coptic">ⲁϥϣⲁⲛⲟⲩϣⲧ ϩⲓϫⲉⲛ ⲫ̀ⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲉⲙⲧⲟⲛ</td>
            <td class="arabic">على ماء الراحة رباني.</td>
        </tr>
        <tr id="table_10_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_12" title="Coptic Gospel">
        <caption class="caption" id="caption_table_12">Coptic Gospel<br>(Matthew 26: 17 - 19)
        <span class="arabic-caption">الإنجيل قبطياً<br>(متى 26: 17 - 19)</span></caption>
        <tr id="table_12_row_0" class="priest">
            <td class="english">A chapter according to St. Mathew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>
        <tr id="table_12_row_1" class="intro">
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ ⲉ̀.</td>
        </tr>
        <tr id="table_12_row_2" class="text">
            <td class="coptic">Ⲛϩ̀ⲣⲏⲓ ⲇⲉ ϧⲉⲛ ⲡⲓϩ̀ⲟⲟⲩ ⲛ̀ϩⲟⲩⲓⲧ ⲛ̀ⲧⲉ ⲛⲓⲁⲧⲕⲱⲃ : ⲁⲩⲓ̀ ϩⲁ Ⲓⲏⲥⲟⲩⲥ ⲛ̀ϫⲉ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ ⲁⲕⲟⲩⲱϣ ⲉ̀ⲥⲉⲃⲧⲉ ⲡⲓⲡⲁⲥⲭⲁ ⲛⲁⲕ ⲑⲱⲛ ⲉ̀ⲟⲩⲙⲟϥ : Ⲛ̀ⲑⲟϥ ⲇⲉ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ : ϫⲉ ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲉ̀ⲧⲁⲓⲃⲁⲕⲓ ϩⲁ ⲡⲁⲫ̀ⲙⲁⲛ ⲛ̀ⲣⲱⲙⲓ ⲟⲩⲟϩ ⲁ̀ϫⲟⲥ ⲛⲁϥ: ϫⲉ ⲡⲉϫⲉ ⲡⲓⲣⲉϥϯⲥ̀ⲃⲱ ϫⲉ ⲡⲁⲥⲏⲟⲩ ⲁϥϧⲱⲛⲧ : ⲁⲓⲛⲁⲓ̀ⲣⲓ ⲙ̀ⲡⲁⲡⲁⲥⲭⲁ ϧⲁⲧⲟⲧⲕ ⲛⲉⲙ ⲛⲁⲙⲁⲑⲏⲧⲏⲥ. Ⲟⲩⲟϩ ⲁⲩⲓ̀ⲣⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁ Ⲓⲏⲥⲟⲩⲥ ϫⲟⲥ ⲛⲱⲟⲩ ⲟⲩⲟϩ ⲁⲩⲥⲉⲃⲧⲉ ⲡⲓⲡⲁⲥⲭⲁ.
            <br> Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_12_row_3" class="congregation">
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ ⲉ̀.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_13" title="Psalm">
    <caption id="caption_table_13" class="caption">Psalm<br>(23:1-2)
    <span class="arabic-caption">المزمور<br>(22: 1)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">From the Psalms of David the Prophet, may his blessing be with us, Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">The Lord is my shepherd; I shall not want.</td>
        <td class="arabic">اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">He makes me to lie down in green pastures; He leads me beside the still waters.</td>
        <td class="arabic">فِي مَرَاعٍ خُضْرٍ يُرْبِضُنِي. إِلَى مِيَاهِ الرَّاحَةِ يُورِدُنِي.</td>
    </tr>
    <tr id="table_13_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(Matthew 26:17-19)
    <span class="arabic-caption">الانجيل<br>(متى 26: 17 - 19)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">Now on the first day of the Feast of the Unleavened Bread the disciples came to Jesus, saying to Him, "Where do You want us to prepare for You to eat the Passover?"</td>
        <td class="arabic">وَفِي أَوَّلِ أَيَّامِ الْفَطِيرِ تَقَدَّمَ التَّلاَمِيذُ إِلَى يَسُوعَ قَائِلِينَ: «أَيْنَ تُرِيدُ أَنْ نُعِدَّ لَكَ لِتَأْكُلَ الْفِصْحَ؟»</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">And He said, "Go into the city to a certain man, and say to him, 'The Teacher says, "My time is at hand; I will keep the Passover at your house with My disciples." ' "</td>
        <td class="arabic">فَقَالَ: «اذْهَبُوا إِلَى الْمَدِينَةِ إِلَى فُلاَنٍ وَقُولُوا لَهُ: الْمُعَلِّمُ يَقُولُ إِنَّ وَقْتِي قَرِيبٌ. عِنْدَكَ أَصْنَعُ الْفِصْحَ مَعَ تَلاَمِيذِي».</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">So the disciples did as Jesus had directed them; and they prepared the Passover.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">فَفَعَلَ التَّلاَمِيذُ كَمَا أَمَرَهُمْ يَسُوعُ وَأَعَدُّوا الْفِصْحَ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_14_row_8" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}

<table id="table_16" title="Exposition">
    <caption id="caption_table_16" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_16_row_1" class="intro">
        <td class="english">The exposition of the NINTH Hour of COVENANT THURSDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة التاسعة من يوم خميس العهد من البصخة المقدسة بركتها تكون معنا آمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">When Abraham rose above all people in the Lord’s eyes, the Lord spoke to him and said,</td>
        <td class="arabic">فلما ازداد ابراهيم رفعة أمام الرب أكثر من جميع الناس. وظهر له الرب وخاطبه هكذا قائلاً:</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">“Abraham, Abraham whom I love, obey My words and do My will.</td>
        <td class="arabic">يا ابراهيم يا ابراهيم الذى أحبه، اسمع كلامى وافعل ارادتى.</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">Take your beloved son Isaac and offer him to Me as a sacrifice on a mountain.”</td>
        <td class="arabic">خذ اسحق ابنك حبيبك وقدمه لى محرقة على أحد الجبال.</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">Abraham did as the Lord commanded. He took his beloved son, two of his servants, a donkey, and went forth.</td>
        <td class="arabic">فقام ابراهيم كقول الرب، وأخذ ابنه حبيبه، وغلامين من عبيده وأسرج دابته، وهكذا سار.</td>
    </tr>
    <tr id="table_16_row_8" class="text">
        <td class="english">When he saw the mountain, he left the two servants and the donkey with them and said,</td>
        <td class="arabic">فلما رأى الجبل من بُعد ترك الغلامين والدابة معهما. وقال:</td>
    </tr>
    <tr id="table_16_row_9" class="text">
        <td class="english">“I shall go there with my son to worship and come back.”</td>
        <td class="arabic">أنا وابنى ننطلق إلى هناك لنسجد ثم نعود اليكما.</td>
    </tr>
    <tr id="table_16_row_10" class="text">
        <td class="english">He gave the firewood to his only son and took with him the knife and the fire.</td>
        <td class="arabic">وحمل الحطب على وحيده، والسكين والنار وكانا مع ابراهيم.</td>
    </tr>
    <tr id="table_16_row_11" class="text">
        <td class="english">They went up the mountain to the place that the Lord Almighty designated.</td>
        <td class="arabic">وصعد الاثنان على الجبل المقدس، الموضع الذى أعلمه به الضابط الكل،</td>
    </tr>
    <tr id="table_16_row_12" class="text">
        <td class="english">Then Isaac said to his father Abraham, “Here is the fire where is the lamb?”</td>
        <td class="arabic">فقال اسحق لأبيه ابراهيم: هوذا الحطب، فأين هو الحمل؟</td>
    </tr>
    <tr id="table_16_row_13" class="text">
        <td class="english">Abraham said to him, “My son, the Lord will provide a lamb to be sacrificed as an offering.”</td>
        <td class="arabic">فقال: يا ابنى، الله يعد للذبح حملاً مقبولاً يرضيه.</td>
    </tr>
    <tr id="table_16_row_14" class="text">
        <td class="english">Then he gathered stones, built an altar, and stacked the firewood on the altar.</td>
        <td class="arabic">ثم جمع حجارة وبنى مذبحاً، وجعل الحطب عليه</td>
    </tr>
    <tr id="table_16_row_15" class="text">
        <td class="english">Before he lit it, he tied Isaac’s hands and feet and put him on the wood.</td>
        <td class="arabic">قبل أن يوقد النار. وشد يدى الصبى وساقيه وجعله على الحطب. فقال الصبى: ها أنذا اليوم قربانك يا أبتاه الذى تصنعه.</td>
    </tr>
    <tr id="table_16_row_16" class="text">
        <td class="english">When Abraham reached out and took the knife to fulfill God’s command,</td>
        <td class="arabic">فمد يده وأخذ السكين لكى يكمّل القضية.</td>
    </tr>
    <tr id="table_16_row_17" class="text">
        <td class="english">he heard the voice of the Lord saying, “Abraham, do not lay your hand on your son,</td>
        <td class="arabic">وإذا بصوت من الرب نحو ابراهيم هكذا قائلاً: امسك يدك ولا تصنع به شراً،</td>
    </tr>
    <tr id="table_16_row_18" class="text">
        <td class="english">for now I know that you fear God, since you have not withheld your only son from Me. Isaac, your beloved son, shall grow and multiply.</td>
        <td class="arabic">فقد عرفت محبتك لى. بالنمو ينمو وبالكثرة يكثر اسحق ابنك الحبيب.</td>
    </tr>
    <tr id="table_16_row_19" class="text">
        <td class="english">As you did not hesitate to offer your first born, I shall bless you and your descendants.</td>
        <td class="arabic">وكما أنك لم تشفق على ابنك بكرك، أنا سأباركك وزرعك معاً.</td>
    </tr>
    <tr id="table_16_row_20" class="text">
        <td class="english">Your sons shall be like the stars of heaven and will be as numerous as the sand of sea.”</td>
        <td class="arabic">وبنوك يكونون مثل النجوم، ويكثر عددهم مثل الرمل.</td>
    </tr>
    <tr id="table_16_row_21" class="text">
        <td class="english">Abraham looked behind him and saw a ram tied with its horns to a bush.</td>
        <td class="arabic">ثم التفت ابراهيم فنظر خروفاً مربوطاً بقرنيه فى شجرة غاب،</td>
    </tr>
    <tr id="table_16_row_22" class="text">
        <td class="english">He loosened Isaac and offered the ram instead of him.</td>
        <td class="arabic">فحل اسحق من وثاقه وذبح الخروف عوضاً عنه وبارك</td>
    </tr>
    <tr id="table_16_row_23" class="text">
        <td class="english">The Lord Almighty blessed Abraham because he was pleased with all his deeds.</td>
        <td class="arabic">الرب ضابط الكل ابراهيم لأنه وجده مرضياً له فى سائر أعماله.</td>
    </tr>
    <tr id="table_16_row_24" class="text">
        <td class="english">Abraham returned and went back with the two servants and his son.</td>
        <td class="arabic">وهكذا رجع الشيخ وأخذ الغلامين وابنه ومضوا.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>
<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOTH11sc" class="navigationButton">
        <td class="englishButton">The ELEVENTH Hour of the DAY of COVENANT THURSDAY</td>
        <td class="arabicButton">الساعة الحادية عشر من يوم خميس العهد</td>
    </tr>
    <tr id="table_50_row_1" data-navigation="DaytimeLitaniessc" class="navigationButton">
        <td class="englishButton">Daytime Litanies</td>
        <td class="arabicButton">طلبات النهار</td>
    </tr>
</table>
</div>

`;

};