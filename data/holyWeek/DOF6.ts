import { hourIntro, paschalPraise3 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNanGreat, endOfServiceHymn , cross, candle, faiEtafEnf } from "../repeatedPrayers";

export const DOF6 = () => {
    const hourIntroHtml = hourIntro("SIXTH","السادسة","DAY of GREAT FRIDAY","يوم الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","7","8","SIXTH","السادسة","DAY of GREAT FRIDAY","يوم الجمعة العظيمة");
    const faiEtafEnfHtml = faiEtafEnf("12");
    const copticGospelIntroHtml = copticGospelIntro("18");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("26");
    const expositionConclusionHtml = expositionConclusion("28");
    const daytimeLitaniesHtml = daytimeLitanies("29",true);
    const evnotiNaiNanGreatHtml = evnotiNaiNanGreat("30");
    const endOfServiceHymnHtml = endOfServiceHymn("31");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡ̀ϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲁ̀ⲣⲓⲑⲙⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱ̀̀ⲩⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ⲡⲓⲬⲁⲛⲁⲛⲉⲟⲥ ⲡ̀ⲟⲩⲣⲟ ⲛ̀Ⲇⲁⲣⲁⲇ ⲫⲏⲉⲧϣⲟⲡ ϩⲓ ⲡ̀ϣⲁϥⲉ : ϫⲉ ⲁϥⲓ̀ ⲛ̀ϫⲉ ⲡⲓⲒ̀ⲥⲣⲁⲏⲗ ⲉ̀ⲫ̀ⲙⲱⲓⲧ ⲛ̀Ⲁⲑⲁⲣⲓⲙ : ⲟⲩⲟϩ ⲁϥⲃⲱⲧⲥ ⲉ̀ⲡ̀ⲓⲒ̀ⲥⲣⲁⲏⲗ ⲟⲩⲟϩ ⲁⲩⲱⲗⲓ ⲛ̀ⲟⲩⲉⲭⲙⲁⲗⲱⲥⲓⲁ̀ ⲛ̀ϧⲏⲧⲟⲩ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic"> Ⲙ̀ⲫⲣⲏϯ ⲛ̀ⲟⲩⲉ̀ⲥⲱⲟⲩ ⲉ̀ⲁⲩⲉⲛϥ ⲉ̀ⲡ̀ϧⲟⲗϧⲉⲗ ⲛⲉⲙ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩϩⲓⲏⲃ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲫⲏⲉⲧϧⲱⲕ ⲙ̀ⲙⲟϥ ⲉϥⲟⲓ ⲛ̀ⲁⲧⲥ̀ⲙⲏ ⲡⲁⲓⲣⲏϯ ⲛ̀ϥⲟⲩⲱⲛ ⲛ̀ⲣⲱϥ ⲁⲛ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ Ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ϩⲏⲡⲡⲉ ⲓⲥ Ⲫϯ ⲡⲁⲥⲱⲧⲏⲣ : Ⲡ̀ϭⲟⲓⲥ ⲉⲓⲉ̀ϣⲱⲡⲓ ⲉ̀ⲣⲉ ϩ̀ⲑⲏⲓ ⲭⲏⲉ̀ⲣⲟϥ : ⲟⲩⲟϩ ⲛ̀ⲛⲁⲉⲣϩⲟϯ ϫⲉ : ⲡⲁⲱⲥⲩ ⲛⲉⲙ ⲡⲁⲥ̀ⲙⲟⲩ ⲡⲉ Ⲡ̀ϭⲟⲓⲥ : ⲁϥϣⲱⲡⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲟⲩϫⲁⲓ.</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲁⲙⲱⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲟ̀ⲩⲟϩ ⲉⲥⲉ̀ϣⲡⲓ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ ⲡⲉϫⲉ Ⲡ̀ϭⲟⲓⲥ Ⲫϯ : ⲉϥⲉ̀ϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫ̀ⲣⲏ ⲙ̀ⲫ̀ⲛⲁⲩ ⲙ̀ⲙⲉⲣⲓ ⲟⲩⲟϩ ⲉϥⲉ̀ⲉⲣⲭⲁⲕⲓ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀ϫⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    <table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Numbers 21:1-9)
    <span class="arabic-caption">النبوة الأولي<br>(سفر العدد 21: 1 - 9)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Numbers of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر العدد لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">The king of Arad, the Canaanite, who dwelt in the South, heard that Israel was coming on the road to Atharim, then he fought against Israel and took some of them prisoners.</td>
        <td class="arabic">وَلمَّا سَمِعَ الكَنْعَانِيُّ مَلِكُ عَرَادَ السَّاكِنُ فِي الجَنُوبِ أَنَّ إِسْرَائِيل جَاءَ فِي طَرِيقِ أَتَارِيمَ حَارَبَ إِسْرَائِيل وَسَبَى مِنْهُمْ سَبْياً.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">So Israel made a vow to the Lord, and said, "If You will indeed deliver this people into my hand, then I will utterly destroy their cities."</td>
        <td class="arabic">فَنَذَرَ إِسْرَائِيلُ نَذْراً لِلرَّبِّ وَقَال: «إِنْ دَفَعْتَ هَؤُلاءِ القَوْمَ إِلى يَدِي أُحَرِّمُ مُدُنَهُمْ».</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">And the Lord listened to the voice of Israel and delivered up the Canaanites, and they utterly destroyed them and their cities. So the name of that place was called Hormah.</td>
        <td class="arabic">فَسَمِعَ الرَّبُّ لِقَوْلِ إِسْرَائِيل وَدَفَعَ الكَنْعَانِيِّينَ فَحَرَّمُوهُمْ وَمُدُنَهُمْ. فَدُعِيَ اسْمُ المَكَانِ «حُرْمَةَ».</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Then they journeyed from Mount Hor by the Way of the Red Sea, to go around the land of Edom; and the soul of the people became very discouraged on the way.</td>
        <td class="arabic">وَارْتَحَلُوا مِنْ جَبَلِ هُورٍ فِي طَرِيقِ بَحْرِ سُوفٍ لِيَدُورُوا بِأَرْضِ أَدُومَ فَضَاقَتْ نَفْسُ الشَّعْبِ فِي الطَّرِيقِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And the people spoke against God and against Moses: "Why have you brought us up out of Egypt to die in the wilderness? For there is no food and no water, and our soul loathes this worthless bread."</td>
        <td class="arabic">وَتَكَلمَ الشَّعْبُ عَلى اللهِ وَعَلى مُوسَى قَائِلِينَ: «لِمَاذَا أَصْعَدْتُمَانَا مِنْ مِصْرَ لِنَمُوتَ فِي البَرِّيَّةِ! لأَنَّهُ لا خُبْزَ وَلا مَاءَ وَقَدْ كَرِهَتْ أَنْفُسُنَا الطَّعَامَ السَّخِيفَ».</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">So the Lord sent fiery serpents among the people, and they bit the people; and many of the people of Israel died.</td>
        <td class="arabic">فَأَرْسَل الرَّبُّ عَلى الشَّعْبِ الحَيَّاتِ المُحْرِقَةَ فَلدَغَتِ الشَّعْبَ فَمَاتَ قَوْمٌ كَثِيرُونَ مِنْ إِسْرَائِيل.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">Therefore the people came to Moses, and said, "We have sinned, for we have spoken against the Lord and against you; pray to the Lord that He take away the serpents from us." So Moses prayed for the people.</td>
        <td class="arabic">فَأَتَى الشَّعْبُ إِلى مُوسَى وَقَالُوا: «قَدْ أَخْطَأْنَا إِذْ تَكَلمْنَا عَلى الرَّبِّ وَعَليْكَ فَصَلِّ إِلى الرَّبِّ لِيَرْفَعَ عَنَّا الحَيَّاتِ». فَصَلى مُوسَى لأَجْلِ الشَّعْبِ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Then the Lord said to Moses, "Make a fiery serpent, and set it on a pole; and it shall be that everyone who is bitten, when he looks at it, shall live."</td>
        <td class="arabic">فَقَال الرَّبُّ لِمُوسَى: «اصْنَعْ لكَ حَيَّةً مُحْرِقَةً وَضَعْهَا عَلى رَايَةٍ فَكُلُّ مَنْ لُدِغَ وَنَظَرَ إِليْهَا يَحْيَا».</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">So Moses made a bronze serpent, and put it on a pole; and so it was, if a serpent had bitten anyone, when he looked at the bronze serpent, he lived.</td>
        <td class="arabic">فَصَنَعَ مُوسَى حَيَّةً مِنْ نُحَاسٍ وَوَضَعَهَا عَلى الرَّايَةِ فَكَانَ مَتَى لدَغَتْ حَيَّةٌ إِنْسَاناً وَنَظَرَ إِلى حَيَّةِ النُّحَاسِ يَحْيَا.</td>
    </tr>
    <tr id="table_3_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 53:7-12)
    <span class="arabic-caption">النبوة الثانية<br>(أشعياء 53: 7 - 12)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">He was oppressed and He was afflicted, Yet He opened not His mouth; He was led as a lamb to the slaughter, And as a sheep before its shearers is silent, So He opened not His mouth.</td>
        <td class="arabic">ظُلِمَ أَمَّا هُوَ فَتَذَلَّلَ وَلَمْ يَفْتَحْ فَاهُ كَشَاةٍ تُسَاقُ إِلَى الذَّبْحِ وَكَنَعْجَةٍ صَامِتَةٍ أَمَامَ جَازِّيهَا فَلَمْ يَفْتَحْ فَاهُ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">He was taken from prison and from judgment, And who will declare His generation? For He was cut off from the land of the living; For the transgressions of My people He was stricken.</td>
        <td class="arabic">مِنَ الضُّغْطَةِ وَمِنَ الدَّيْنُونَةِ أُخِذَ. وَفِي جِيلِهِ مَنْ كَانَ يَظُنُّ أَنَّهُ قُطِعَ مِنْ أَرْضِ الأَحْيَاءِ أَنَّهُ ضُرِبَ مِنْ أَجْلِ ذَنْبِ شَعْبِي؟</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">And they made His grave with the wicked-- But with the rich at His death, Because He had done no violence, Nor was any deceit in His mouth.</td>
        <td class="arabic">وَجُعِلَ مَعَ الأَشْرَارِ قَبْرُهُ وَمَعَ غَنِيٍّ عِنْدَ مَوْتِهِ. عَلَى أَنَّهُ لَمْ يَعْمَلْ ظُلْماً وَلَمْ يَكُنْ فِي فَمِهِ غِشٌّ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Yet it pleased the Lord to bruise Him; He has put Him to grief. When You make His soul an offering for sin, He shall see His seed, He shall prolong His days, And the pleasure of the Lord shall prosper in His hand.</td>
        <td class="arabic">أَمَّا الرَّبُّ فَسُرَّ بِأَنْ يَسْحَقَهُ بِالْحُزْنِ. إِنْ جَعَلَ نَفْسَهُ ذَبِيحَةَ إِثْمٍ يَرَى نَسْلاً تَطُولُ أَيَّامُهُ وَمَسَرَّةُ الرَّبِّ بِيَدِهِ تَنْجَحُ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">He shall see the labor of His soul, and be satisfied. By His knowledge My righteous Servant shall justify many, For He shall bear their iniquities.</td>
        <td class="arabic">مِنْ تَعَبِ نَفْسِهِ يَرَى وَيَشْبَعُ وَعَبْدِي الْبَارُّ بِمَعْرِفَتِهِ يُبَرِّرُ كَثِيرِينَ وَآثَامُهُمْ هُوَ يَحْمِلُهَا.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Therefore I will divide Him a portion with the great, And He shall divide the spoil with the strong, Because He poured out His soul unto death, And He was numbered with the transgressors, And He bore the sin of many, And made intercession for the transgressors.</td>
        <td class="arabic">لِذَلِكَ أَقْسِمُ لَهُ بَيْنَ الأَعِزَّاءِ وَمَعَ الْعُظَمَاءِ يَقْسِمُ غَنِيمَةً مِنْ أَجْلِ أَنَّهُ سَكَبَ لِلْمَوْتِ نَفْسَهُ وَأُحْصِيَ مَعَ أَثَمَةٍ وَهُوَ حَمَلَ خَطِيَّةَ كَثِيرِينَ وَشَفَعَ فِي الْمُذْنِبِينَ.</td>
    </tr>
    <tr id="table_4_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Isaiah 12:2-13:10)
    <span class="arabic-caption">النبوة الثالثة<br>(أشعياء 12: 2 13: 10)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">Also, a reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">وأيضاً من أشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Behold, God is my salvation, I will trust and not be afraid; 'For Yah, the Lord, is my strength and song; He also has become my salvation.' "</td>
        <td class="arabic">هُوَذَا اللَّهُ خَلاَصِي فَأَطْمَئِنُّ وَلاَ أَرْتَعِبُ لأَنَّ يَاهَ يَهْوَهَ قُوَّتِي وَتَرْنِيمَتِي وَقَدْ صَارَ لِي خَلاَصاً».</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">Therefore with joy you will draw water From the wells of salvation.</td>
        <td class="arabic">فَتَسْتَقُونَ مِيَاهاً بِفَرَحٍ مِنْ يَنَابِيعِ الْخَلاَصِ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">And in that day you will say: "Praise the Lord, call upon His name; Declare His deeds among the peoples, Make mention that His name is exalted.</td>
        <td class="arabic">وَتَقُولُونَ فِي ذَلِكَ الْيَوْمِ: «احْمَدُوا الرَّبَّ. ادْعُوا بِاسْمِهِ. عَرِّفُوا بَيْنَ الشُّعُوبِ بِأَفْعَالِهِ. ذَكِّرُوا بِأَنَّ اسْمَهُ قَدْ تَعَالَى.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Sing to the Lord, For He has done excellent things; This is known in all the earth.</td>
        <td class="arabic">رَنِّمُوا لِلرَّبِّ لأَنَّهُ قَدْ صَنَعَ مُفْتَخَراً. لِيَكُنْ هَذَا مَعْرُوفاً فِي كُلِّ الأَرْضِ.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Cry out and shout, O inhabitant of Zion, For great is the Holy One of Israel in your midst!"</td>
        <td class="arabic">صَوِّتِي وَاهْتِفِي يَا سَاكِنَةَ صِهْيَوْنَ لأَنَّ قُدُّوسَ إِسْرَائِيلَ عَظِيمٌ فِي وَسَطِكِ».</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">The burden against Babylon which Isaiah the son of Amoz saw.</td>
        <td class="arabic">وَحْيٌ مِنْ جِهَةِ بَابِلَ رَآهُ إِشَعْيَاءُ بْنُ آمُوصَ:</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">"Lift up a banner on the high mountain, Raise your voice to them; Wave your hand, that they may enter the gates of the nobles.</td>
        <td class="arabic">«أَقِيمُوا رَايَةً عَلَى جَبَلٍ أَقْرَعَ. ارْفَعُوا صَوْتاً إِلَيْهِمْ. أَشِيرُوا بِالْيَدِ لِيَدْخُلُوا أَبْوَابَ الْعُتَاةِ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">I have commanded My sanctified ones; I have also called My mighty ones for My anger-- Those who rejoice in My exaltation."</td>
        <td class="arabic">أَنَا أَوْصَيْتُ مُقَدَّسِيَّ وَدَعَوْتُ أَبْطَالِي لأَجْلِ غَضَبِي مُفْتَخِرِي عَظَمَتِي».</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">The noise of a multitude in the mountains, Like that of many people! A tumultuous noise of the kingdoms of nations gathered together! The Lord of hosts musters The army for battle.</td>
        <td class="arabic">صَوْتُ جُمْهُورٍ عَلَى الْجِبَالِ شِبْهَ قَوْمٍ كَثِيرِينَ. صَوْتُ ضَجِيجِ مَمَالِكِ أُمَمٍ مُجْتَمِعَةٍ. رَبُّ الْجُنُودِ يَعْرِضُ جَيْشَ الْحَرْبِ.</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">They come from a far country, From the end of heaven-- The Lord and His weapons of indignation, To destroy the whole land.</td>
        <td class="arabic">يَأْتُونَ مِنْ أَرْضٍ بَعِيدَةٍ مِنْ أَقْصَى السَّمَاوَاتِ. الرَّبُّ وَأَدَوَاتُ سَخَطِهِ لِيُخْرِبَ كُلَّ الأَرْضِ.</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">Wail, for the day of the Lord is at hand! It will come as destruction from the Almighty.</td>
        <td class="arabic">وَلْوِلُوا لأَنَّ يَوْمَ الرَّبِّ قَرِيبٌ قَادِمٌ كَخَرَابٍ مِنَ الْقَادِرِ عَلَى كُلِّ شَيْءٍ.</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">Therefore all hands will be limp, Every man's heart will melt,</td>
        <td class="arabic">لِذَلِكَ تَرْتَخِي كُلُّ الأَيَادِي وَيَذُوبُ كُلُّ قَلْبِ إِنْسَانٍ</td>
    </tr>
    <tr id="table_5_row_16" class="text">
        <td class="english">And they will be afraid. Pangs and sorrows will take hold of them; They will be in pain as a woman in childbirth; They will be amazed at one another; Their faces will be like flames.</td>
        <td class="arabic">فَيَرْتَاعُونَ. تَأْخُذُهُمْ أَوْجَاعٌ وَمَخَاضٌ. يَتَلَوُّونَ كَوَالِدَةٍ. يَبْهَتُونَ بَعْضُهُمْ إِلَى بَعْضٍ. وُجُوهُهُمْ وُجُوهُ لَهِيبٍ.</td>
    </tr>
    <tr id="table_5_row_17" class="text">
        <td class="english">Behold, the day of the Lord comes, Cruel, with both wrath and fierce anger, To lay the land desolate; And He will destroy its sinners from it.</td>
        <td class="arabic">هُوَذَا يَوْمُ الرَّبِّ قَادِمٌ قَاسِياً بِسَخَطٍ وَحُمُوِّ غَضَبٍ لِيَجْعَلَ الأَرْضَ خَرَاباً وَيُبِيدَ مِنْهَا خُطَاتَهَا.</td>
    </tr>
    <tr id="table_5_row_18" class="text">
        <td class="english">For the stars of heaven and their constellations Will not give their light; The sun will be darkened in its going forth, And the moon will not cause its light to shine.</td>
        <td class="arabic">فَإِنَّ نُجُومَ السَّمَاوَاتِ وَجَبَابِرَتَهَا لاَ تُبْرِزُ نُورَهَا. تُظْلِمُ الشَّمْسُ عِنْدَ طُلُوعِهَا وَالْقَمَرُ لاَ يَلْمَعُ بِضُوئِهِ.</td>
    </tr>
    <tr id="table_5_row_20" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Amos 8:9-12)
    <span class="arabic-caption">النبوة الرابعة<br>(عاموس 8: 9 – 12)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from Amos the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من عاموس النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">"And it shall come to pass in that day," says the Lord God, "That I will make the sun go down at noon, And I will darken the earth in broad daylight;</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ يَقُولُ السَّيِّدُ الرَّبُّ أَنِّي أُغَيِّبُ الشَّمْسَ فِي الظُّهْرِ وَأُقْتِمُ الأَرْضَ فِي يَوْمِ نُورٍ</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">I will turn your feasts into mourning, And all your songs into lamentation; I will bring sackcloth on every waist, And baldness on every head; I will make it like mourning for an only son, And its end like a bitter day.</td>
        <td class="arabic">وَأُحَوِّلُ أَعْيَادَكُمْ نَوْحاً وَجَمِيعَ أَغَانِيكُمْ مَرَاثِيَ وَأُصْعِدُ عَلَى كُلِّ الأَحْقَاءِ مِسْحاً وَعَلَى كُلِّ رَأْسٍ قَرْعَةً وَأَجْعَلُهَا كَمَنَاحَةِ الْوَحِيدِ وَآخِرَهَا يَوْماً مُرّاً!</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">"Behold, the days are coming," says the Lord God, "That I will send a famine on the land, Not a famine of bread, Nor a thirst for water, But of hearing the words of the Lord.</td>
        <td class="arabic">«هُوَذَا أَيَّامٌ تَأْتِي يَقُولُ السَّيِّدُ الرَّبُّ أُرْسِلُ جُوعاً فِي الأَرْضِ لاَ جُوعاً لِلْخُبْزِ وَلاَ عَطَشاً لِلْمَاءِ بَلْ لاِسْتِمَاعِ كَلِمَاتِ الرَّبِّ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">They shall wander from sea to sea, And from north to east; They shall run to and fro, seeking the word of the Lord, But shall not find it.</td>
        <td class="arabic">فَيَجُولُونَ مِنْ بَحْرٍ إِلَى بَحْرٍ وَمِنَ الشِّمَالِ إِلَى الْمَشْرِقِ يَتَطَوَّحُونَ لِيَطْلُبُوا كَلِمَةَ الرَّبِّ فَلاَ يَجِدُونَهَا.</td>
    </tr>
    <tr id="table_6_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}

<div class="section" id="section_5" title="Pauline">
    <table id="table_9" title="Offering Incense Prayers">
        <caption class="caption" id="caption_table_9">Offering Incense Prayers
        <span class="arabic-caption">صلوات البخور</span></caption>
        <tr id="table_9_row_0" class="commentary">
            <td class="english">Candles are lit before the Crucifix, the priests uncover their heads, and cense three times.</td>
            <td class="arabic">توقد الشموع أمام أيقونة الصلبوت، ويكشف الكهنة رؤوسهم ويرفعوا البخور أمام الأيقونة ثلاث مرّات</td>
        </tr>
        <tr id="table_9_row_1" class="commentary">
            <td class="english">The priest says the following inaudibly while offering incense:</td>
            <td class="arabic">يصلي الكاهن الآتي باطنًا أثناء رفع البخور:</td>
        </tr>
    </table>
    <table id="table_10" class="onePage" title="Incense Prayers">
        <tr id="table_10_row_0" class="text">
            <td class="english">${cross} We worship You, O Christ, and Your life-giving cross, that You were crucified on to deliver us from our sins.</td>
            <td class="arabic">${cross} نسجد لك أيها المسيح ولصليبك المحى الذى صلبت حتى خلصتنا من خطايانا.</td>
        </tr>
        <tr id="table_10_row_3" class="text">
            <td class="english">${cross} O my Lord Jesus Christ, who was crucified on the cross, trample down Satan under our feet.</td>
            <td class="arabic">${cross} يا ربى يسوع المسيح يا من صلبت على الصليب أسحق الشيطان تحت أقدامنا.</td>
        </tr>
        <tr id="table_10_row_4" class="text">
            <td class="english">${cross} Hail to the cross, that Christ our King was crucified on, to deliver us from our sins.</td>
            <td class="arabic">${cross} السلام للصليب الذي صلب عليه الملك المسيح حتى خلصنا من خطايانا. </td>
        </tr>
    </table>
    
    <table id="table_11" title="Taishori">
        <caption class="caption" id="caption_table_11"><span class="coptic-caption">Ⲧⲁⲓϣⲟⲩⲣⲏ</span></caption>
        <tr id="table_11_row_0" class="text">
            <td class="english">This censer of pure gold, bearing the aroma, is in the hands of Aaron the priest, offering up incense on the altar.</td>
            <td class="coptic">Ⲧⲁⲓϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓⲁ̀ⲣⲱⲙⲁⲧⲁ ⲉⲧϧⲉⲛ ⲛⲉⲛϫⲓϫ ⲛ̀Ⲁⲁ̀ⲣⲱⲛ ⲡⲓⲟⲩⲏⲃ ⲉϥⲧⲁⲗⲉ ⲟⲩⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ϫⲉⲛ ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ.</td>
            <td class="arabic"> هذه المجمرة الذهب النقى الحاملة العنبر التى فى يدى هرون الكاهن، يرفع بخوراً على  المذبح.</td>
        </tr>
    </table>
    ${faiEtafEnfHtml}
    <table id="table_13" title="Pauline Introduction">
        <caption class="caption" id="caption_table_13"><span class="coptic-caption">Ϯⲉ̀ⲡⲓⲥⲧⲟⲗⲏ</span></caption>
        <tr id="table_13_row_0" class="text">
            <td class="english">The epistle of our teacher Paul, may his holy blessing be with us. Amen.</td>
            <td class="coptic">Ϯⲉ̀ⲡⲓⲥⲧⲟⲗⲏ ⲛ̀ⲧⲉ ⲡⲉⲛⲥⲁϧ Ⲡⲁⲩⲗⲟⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">رسالة معلمنا بولس بركته المقدسة تكن معنا آمين.</td>
        </tr>
        <tr id="table_13_row_1" class="text">
            <td class="english">Paul, a bondservant of Jesus Christ, called to be an apostle, separated to the Gospel of God.</td>
            <td class="coptic">Ⲡⲁⲩⲗⲟⲥ ⲫ̀ⲃⲱⲕ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲧⲑⲁϩⲉⲙ : ⲫⲏⲉ̀ⲧⲁⲩⲑⲁϣϥ ⲉ̀ⲡⲓϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛ̀ⲧⲉ Ⲫϯ.</td>
            <td class="arabic">من بولس عبد ربنا يسوع المسيح الرسول المدعوا   المفرز لبشارة الله.</td>
        </tr>
        <tr id="table_13_row_2" class="text">
            <td class="english">But God forbid that I should boast except in the cross of our Lord Jesus Christ</td>
            <td class="coptic">Ⲁⲛⲟⲕ ⲇⲉ ⲛ̀ⲛⲉⲥϣⲱⲡⲓ ⲛⲏⲓ ⲛ̀ⲧⲁϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲓ ⲉ̀ⲃⲏⲗ ϧⲉⲛ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ </td>
            <td class="arabic"> وأما من جهتى فحاشا لي أن أفتخر إلا بصليب ربنا يسوع المسيح</td>
        </tr>
        <tr id="table_13_row_3" class="text">
            <td class="english">Grace and peace be with you all, Amen.</td>
            <td class="coptic">Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ ⲛⲉⲙⲱⲧⲉⲛ ⲧⲏⲣⲟⲩ ϫⲉ ⲁ̀ⲙⲏⲛ ⲉ̀ⲥⲉϣⲱⲡⲓ.</td>
            <td class="arabic">نعمة وسلام يكون مع جميعكم آمين.</td>
        </tr>
        <tr id="table_13_row_4" class="text">
            <td class="english">The grace of our Lord Jesus Christ be with your saintly spirit, my lord, the honored father, the high priest, Papa Abba Tawadros.</td>
            <td class="coptic">Ⲡⲓϩ̀ⲙⲟⲧ ⲅⲁⲣ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉϥⲉ̀ϣⲱⲡⲓ ⲛⲉⲙ ⲡⲉⲕⲁ̀ⲅⲓⲟⲛ ⲡ̀ⲛⲉⲩⲙⲁ: ⲡⲁϭⲟⲓⲥ ⲛ̀ⲓⲱⲧ ⲉ̀ⲧⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ Ⲡⲁⲡⲁ ⲁⲃⲃⲁ  Ⲧⲁⲱⲁⲇⲣⲟⲥ :</td>
            <td class="arabic">نعمة ربنا يسوع المسيح تكون مع روحك الطاهرة ياسيدى المكرم رئيس الكهنة البابا أنبا تواضروس.</td>
        </tr>
        <tr id="table_13_row_5" class="text">
            <td class="english">May the clergy and all the people be safe in the Lord. Amen So be it.</td>
            <td class="coptic">Ⲙⲁⲣⲉ ⲡⲓⲕ̀ⲗⲏⲣⲟⲥ ⲛⲉⲙ ⲡⲓⲗⲁⲟⲥ ⲧⲏⲣϥ: ⲟⲩϫⲁⲓ ϧⲉⲛ Ⲡ̀ϭⲟⲓⲥ: ϫⲉ ⲁ̀ⲙⲏⲛ ⲉⲥⲉ̀ϣⲱⲡⲓ.</td>
            <td class="arabic">فليكن الاكليروس وكل الشعب معافين من الرب آمين. يكون.</td>
        </tr>
    </table>
    <table id="table_13.5" title="Pauline Epistle">
        <caption id="caption_table_13.5" class="caption">Pauline Epistle<br>(Galatians 6:14-18)
        <span class="arabic-caption">البولس<br>(غلاطية 6: 14 - 18)</span></caption>
        <tr id="table_13.5_row_1" class="intro">
            <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the epistle of our teacher Paul to the Galatians. May his blessing be with us. Amen.</td>
            <td class="arabic">بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. من رسالة معلمنا بولس الرسول إلى أهل غلاطية بركته تكون معنا. آمين.</td>
        </tr>
        <tr id="table_13.5_row_4" class="text">
            <td class="english">But God forbid that I should boast except in the cross of our Lord Jesus Christ, by whom the world has been crucified to me, and I to the world.</td>
            <td class="arabic">وَأَمَّا مِنْ جِهَتِي، فَحَاشَا لِي أَنْ أَفْتَخِرَ إِلاَّ بِصَلِيبِ رَبِّنَا يَسُوعَ الْمَسِيحِ، الَّذِي بِهِ قَدْ صُلِبَ الْعَالَمُ لِي وَأَنَا لِلْعَالَمِ.</td>
        </tr>
        <tr id="table_13.5_row_5" class="text">
            <td class="english">For in Christ Jesus neither circumcision nor uncircumcision avails anything, but a new creation.</td>
            <td class="arabic">لأَنَّهُ فِي الْمَسِيحِ يَسُوعَ لَيْسَ الْخِتَانُ يَنْفَعُ شَيْئاً وَلاَ الْغُرْلَةُ، بَلِ الْخَلِيقَةُ الْجَدِيدَةُ.</td>
        </tr>
        <tr id="table_13.5_row_6" class="text">
            <td class="english">And as many as walk according to this rule, peace and mercy be upon them, and upon the Israel of God.</td>
            <td class="arabic">فَكُلُّ الَّذِينَ يَسْلُكُونَ بِحَسَبِ هَذَا الْقَانُونِ عَلَيْهِمْ سَلاَمٌ وَرَحْمَةٌ، وَعَلَى إِسْرَائِيلِ اللهِ.</td>
        </tr>
        <tr id="table_13.5_row_7" class="text">
            <td class="english">From now on let no one trouble me, for I bear in my body the marks of the Lord Jesus.</td>
            <td class="arabic">فِي مَا بَعْدُ لاَ يَجْلِبُ أَحَدٌ عَلَيَّ أَتْعَاباً، لأَنِّي حَامِلٌ فِي جَسَدِي سِمَاتِ الرَّبِّ يَسُوعَ.</td>
        </tr>
        <tr id="table_13.5_row_8" class="text">
            <td class="english">Brethren, the grace of our Lord Jesus Christ be with your spirit. Amen.</td>
            <td class="arabic">نِعْمَةُ رَبِّنَا يَسُوعَ الْمَسِيحِ مَعَ رُوحِكُمْ أَيُّهَا الإِخْوَةُ. آمِينَ.</td>
        </tr>
        <tr id="table_13.5_row_10" class="intro">
            <td class="english">The grace of God the Father be with you all. Amen.</td>
            <td class="arabic">نعمة الله الآب تحل مع جميعكم آمين.</td>
        </tr>
    </table>
    <table id="table_14" title="6th Hour Litanies">
        <caption class="caption" id="caption_table_14">6th Hour Litanies
        <span class="arabic-caption">قطع الساعة السادسة</span></caption>
        <tr id="table_14_row_0" class="text">
            <td class="english"><span class="role">Congregation:</span><br>O You, Who on the sixth day and in the sixth hour was nailed to the cross, for the sin which our father Adam dared to commit in Paradise, tear the handwriting of our sins, O Christ our God, and save us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲱⲫⲏⲉⲧ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ⲥⲟⲟⲩ ϧⲉⲛ ⲫ̀ⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲥⲟⲟⲩ: ⲁⲩϯⲓϥⲧ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲉⲑⲃⲉ ⲫ̀ⲛⲟⲃⲓ ⲉ̀ⲧⲁϥⲉⲣⲧⲟⲗⲙⲁⲛ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ Ⲁⲇⲁⲙ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲫⲱϧ ⲙ̀ⲡⲓⲥ̀ϧⲓ ⲛ̀ϫⲓϫ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ: ⲱ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>يا من فى اليوم السادس وفى وقت الساعة السادسة سمرت على الصليب من أجل الخطية التى تجرأ عليها آدم فى الفردوس. مزق صك خطايانا أيها المسيح إلهنا وخلصنا.</td>
        </tr>
        <tr id="table_14_row_1" class="text">
            <td class="english"><span class="role">Priest:</span><br>O You, Who on the sixth day and in the sixth hour was nailed to the cross, for the sin which our father Adam dared to commit in Paradise, tear the handwriting of our sins, O Christ our God, and save us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:</span><br>Ⲱⲫⲏⲉⲧ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ⲥⲟⲟⲩ ϧⲉⲛ ⲫ̀ⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲥⲟⲟⲩ : ⲁⲩϯⲓϥⲧ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ⲉⲑⲃⲉ ⲫ̀ⲛⲟⲃⲓ ⲉ̀ⲧⲁϥⲉⲣⲧⲟⲗⲙⲁⲛ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ Ⲁⲇⲁⲙ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ : ⲫⲱϧ ⲙ̀ⲡⲓⲥ̀ϧⲓ ⲛ̀ϫⲓϫ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ : ⲱ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>يا من فى اليوم السادس وفى وقت الساعة السادسة سمرت على الصليب من أجل الخطية التى تجرأ عليها آدم فى الفردوس. مزق صك خطايانا أيها المسيح إلهنا وخلصنا.</td>
        </tr>
        <tr id="table_14_row_2" class="text">
            <td class="english"><span class="role">Congregation:</span><br>O You, Who on the sixth day and in the sixth hour was nailed to the cross, for the sin which our father Adam dared to commit in Paradise, tear the handwriting of our sins, O Christ our God, and save us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲱⲫⲏⲉⲧ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ⲥⲟⲟⲩ ϧⲉⲛ ⲫ̀ⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲥⲟⲟⲩ : ⲁⲩϯⲓϥⲧ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ⲉⲑⲃⲉ ⲫ̀ⲛⲟⲃⲓ ⲉ̀ⲧⲁϥⲉⲣⲧⲟⲗⲙⲁⲛ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ Ⲁⲇⲁⲙ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ : ⲫⲱϧ ⲙ̀ⲡⲓⲥ̀ϧⲓ ⲛ̀ϫⲓϫ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ : ⲱ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>يا من فى اليوم السادس وفى وقت الساعة السادسة سمرت على الصليب من أجل الخطية التى تجرأ عليها آدم فى الفردوس. مزق صك خطايانا أيها المسيح إلهنا وخلصنا.</td>
        </tr>
        <tr id="table_14_row_3" class="text">
            <td class="english"><span class="role">Priest:</span><br>I cried to the Lord and He heard me. God hear my prayer, and do not refuse my petition. Be attentive to me and hear me in the evening, in the morning, and at midday. I say my words, and He hears my voice and delivers my soul in peace.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>أنا صرخت إلى الله  و الرب سمعنى. اللهم إسمع صلاتى ولا ترفض طلبتى إلتفت إلىّ وإسمعنى. عشية وباكر ووقت الظهر، كلامى أقوله فيسمع صوتى ويخلص نفسى بسلام</td>
        </tr>
        <tr id="table_14_row_4" class="text">
            <td class="english"><span class="role">Congregation:</span><br>O You, Who on the sixth day and in the sixth hour was nailed to the cross, for the sin which our father Adam dared to commit in Paradise, tear the handwriting of our sins, O Christ our God, and save us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲱⲫⲏⲉⲧ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ⲥⲟⲟⲩ ϧⲉⲛ ⲫ̀ⲛⲁⲩ ⲛ̀ⲁϫⲡ ⲥⲟⲟⲩ : ⲁⲩϯⲓϥⲧ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ⲉⲑⲃⲉ ⲫ̀ⲛⲟⲃⲓ ⲉ̀ⲧⲁϥⲉⲣⲧⲟⲗⲙⲁⲛ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ Ⲁⲇⲁⲙ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ : ⲫⲱϧ ⲙ̀ⲡⲓⲥ̀ϧⲓ ⲛ̀ϫⲓϫ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ : ⲱ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>يا من فى اليوم السادس وفى وقت الساعة السادسة سمرت على الصليب من أجل الخطية التى تجرأ عليها آدم فى الفردوس. مزق صك خطايانا أيها المسيح إلهنا وخلصنا.</td>
        </tr>
        <tr id="table_14_row_5" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Glory be to the Father, the Son and the Holy Spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_6" class="text">
            <td class="english"><span class="role">Priest:</span><br>O Jesus Christ, our God, who was nailed to the cross in the sixth hour, and killed sin by the tree, and by Your death You made alive the dead man, whom You created with Your own hands, and had died in sin. Put to death our pains by Your healing and life‑giving passions, and by the nails with which You were nailed.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>يا يسوع المسيح إلهنا الذى سمرت على الصليب فى الساعة السادسة، وقتلت الخطية بالخشبة، وأحييت الميت بموتك، الذى هو  الإنسان الذى خلقته بيديك الذى مات بالخطية، إقتل أوجاعنا  بالامك الشافية المحيية وبالمسامير التى سمرت بها.</td>
        </tr>
        <tr id="table_14_row_7" class="text">
            <td class="english">Rescue our minds from thoughtlessness of the earthly deeds and worldly lusts, to the remembrance of Your heavenly commandments, according to Your compassion.</td>
            <td class="arabic">إنقذ عقولنا من طياشة الأعمال الهيولية والشهوات العالمية إلى تذكار أحكامك السمائية كرأفتك.</td>
        </tr>
        <tr id="table_14_row_8" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Now and forever, and unto the age of all ages, Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_9" class="text">
            <td class="english"><span class="role">Priest:</span><br>Since we have no favor, nor excuse, nor justification because of our many sins, we, through you, implore to Him who was born of you, O Theotokos, the Virgin, for abundant and acceptable is your intercession with our Savior.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>إذ ليس لنا وسيلة من أجل كثرة خطايانا فنحن بك يا والدة الإله العذراء نجد دالة عند الذى  ولدتيه. لأن كثيرة هى شفاعتك، قوية ومقبولة عند مخلصنا أيتها الأم الطاهرة.</td>
        </tr>
        <tr id="table_14_row_10" class="text">
            <td class="english">O pure mother, do not exclude us, sinners, from your intercession with Him whom you bore, for He is merciful and able to save us, because He suffered for us to deliver us.</td>
            <td class="arabic">لا ترفضى الخطاة من شفاعتك عند الذى ولدتيه، لأنه رحوم  وقادر على خلاصنا لأنه تآلم من أجلنا  لكى ينقذنا.</td>
        </tr>
        <tr id="table_14_row_11" class="text">
            <td class="english">Let your compassion speedily reach us, for we are exceedingly humbled. Help us, O God, our Savior, for the glory of Your name. O Lord, deliver us and forgive us our sins for the sake of Your holy name. </td>
            <td class="arabic">فلتسبق وتدركنا رأفتك سريعاً لأننا قد   تمسكنا جداً.  أعنا يا الله  مخلصنا من أجل مجد إسمكَ، يارب خلصنا وأغفر لنا خطايانا من أجل إسمكَ القدوس.</td>
        </tr>
        <tr id="table_14_row_12" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Now and forever, and unto the age of all ages, Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_13" class="text">
            <td class="english"><span class="role">Priest:</span><br>You wrought salvation in the midst of all the earth, O Christ our God, as You stretched Your holy hands on the cross. Therefore, all nations cry out saying, “Glory to You O Lord”.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>صنعت خلاصاً فى وسط الأرض أيها المسيح الهنا عندما بسطت يديك الطاهرتين على الصليب. فلهذا كل الأمم تصرخ قائلة: المجد لك يارب.</td>
        </tr>
        <tr id="table_14_row_14" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Glory be to the Father, the Son and the Holy Spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_15" class="text">
            <td class="english"><span class="role">Priest:</span><br>We worship Your incorruptible person, O Good One, asking for the forgiveness of our sins, O Christ our God, for of Your own will You were pleased to be lifted up onto the cross to deliver those whom You created from the bondage of the enemy. We cry out unto You and give thanks to You, for You have filled all with joy, O Savior, when You came to help the world. Lord glory be to You.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>نسجد لشخصك غير الفاسد أيها الصالح ونسأل غفران خطايانا أيها المسيح إلهنا، لأن بمشيئتك سررت أن تصعد على الصليب لتنجى الذين خلقتهم من عبودية العدو. نصرخ إليكَ ونشكرك لأنك ملأت الكل فرحاً أيها المخلص لما أتيت لتعين العالم، يارب المجد لكً. </td>
        </tr>
        <tr id="table_14_row_16" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Now and forever, and unto the age of all ages, Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_17" class="text">
            <td class="english"><span class="role">Priest:</span><br>You are she who is full of grace. O Theotokos, the virgin, we praise you, for, through the cross of your Son, Hades fell down and death was abolished. We were dead but we are raised and became worthy of eternal life, and gained the delight of the first Paradise. Therefore, we thankfully glorify the Immortal Christ our God.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br> أنت هى الممتلئة نعمة يا والدة الإله العذراء. نعظمك لأن من قبل صليب إبنك إنهبط الجحيم وبطل الموت. أمواتاً كنا فنهضنا، وإستحققنا الحياة الأبدية، ونلنا نعيم الفردوس الأول. من أجل هذا نمجد بشكر غير المائت المسيح إلهنا.</td>
        </tr>
    </table>
    <table id="table_15" title="O Only-Begotten Son">
        <caption class="caption" id="caption_table_15"><span class="coptic-caption">Ⲟ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ</span></caption>
        <tr id="table_15_row_0" class="text">
            <td class="english">O Only-Begotten Son, Eternal, and Immortal Word of God; who for our salvation willed to be incarnate of the Holy Mother of God (and ever-virgin Mary)2</td>
            <td class="coptic">Ⲟ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ Ⲩⲓⲟⲥ ⲕⲉ ⲗⲟⲅⲟⲥ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ ⲩ̀ⲡⲁⲣⲭⲱⲛ ⲕⲉ ⲕⲁⲧⲁ ⲇⲉⲝⲁⲙⲉⲛⲟⲥ : ⲇⲓⲁ̀ⲧⲏⲛ ⲏ̀ⲙⲉⲧⲉⲣⲁⲛ ⲥⲱⲧⲏⲣⲓⲁⲛ : ⲥⲁⲣⲕⲱⲑⲏⲛⲉ ⲉⲕ ⲧⲏⲥ ⲁ̀ⲅⲓⲁ̀ⲥ ⲑⲉⲟ̀ⲧⲟⲕⲟⲩ ⲕⲉ ⲁ̀ⲓ̀ ⲡⲁⲣⲑⲉⲛⲟⲩ Ⲙⲁⲣⲓⲁⲥ.</td>
            <td class="arabic">أيها الإبن الوحيد الجنس وكلمة الله الذى لا يموت : و انت الأزلى قبلت : من أجل خلاصنا : ان تتجسد من القديسة : والدة الإله (الدائمة البتولية مريم)2</td>
       </tr>
        <tr id="table_15_row_1" class="text">
            <td class="english">Who without change became Man and was crucified, O Christ God. Trampled down death by death. One of the Holy Trinity, glorified with the Father and the Holy Spirit, Save us. </td>
            <td class="coptic">Ⲁⲧⲣⲉⲡⲧⲱⲥ ⲉ̀ⲛⲁⲛⲑ̀ⲣⲱⲡⲓⲥⲁⲥ ⲟ̀ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲧⲉ Ⲭⲣⲓⲥⲧⲉ ⲟ̀Ⲑⲉⲟⲥ. Ⲑⲁⲛⲁⲧⲱ ⲑⲁⲛⲁⲧⲟⲛ ⲡⲁⲧⲏⲥⲁⲥ: ⲓⲥ ⲱⲛⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲧ̀ⲣⲓⲁ̀ⲇⲟⲥ : ⲥⲩⲛⲇⲟⲝⲁⲍⲟⲙⲉⲛⲟⲥ ⲧⲱ Ⲡⲁⲧⲣⲓ ⲕⲉ ⲧⲱ ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ : ⲥⲱⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">فبغير إستحالة : تأنست و صلبت : ايها المسيح الإله. و بالموت دست الموت. انت أحد الثالوث القدوس : الممجد : مع الآب : والروح القدس: خلصنا</td>
        </tr>
        <tr id="table_15_row_2" class="text">
            <td class="english">Holy God, who being God, for our sake, became Man without change.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: ⲟ̀ⲇⲓ ⲏ̀ⲙⲁⲥ ⲁⲛ ⲑ̀ⲣⲱⲡⲟⲥ: ⲅⲉⲅⲟⲛⲱⲥ ⲁⲧⲣⲉⲡⲧⲱⲥ ⲕⲉ ⲙⲓⲛⲁⲥ Ⲑⲉⲟⲥ.</td>
            <td class="arabic">قدوس الله الذى  : من أجلنا صرت إنساناً : بغير إستحالة : وانت الإله.</td>
        </tr>
        <tr id="table_15_row_3" class="text">
            <td class="english">Holy Mighty, who by weakness showed forth what is greater than power.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ ⲟ̀ ⲉ̀ⲛ ⲁⲥⲑⲉⲛⲓⲁ̀ ⲧⲟ ⲩ̀ⲡⲉⲣⲉⲭⲟⲛ ⲧⲏⲥ ⲓⲥⲭⲩⲣⲟⲥ ⲉ̀ⲡⲓⲇⲓⲝⲁⲙⲉⲛⲟⲥ.</td>
            <td class="arabic">قدوس القوى الذى : أظهرت بالضعف : ما هو : أعظم من القوة</td>
        </tr>
        <tr id="table_15_row_4" class="text">
            <td class="english">Holy Immortal, who was crucified for our sake, and endured death in His flesh, the Eternal and Immortal.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ ⲟ̀ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ: ⲟ̀ⲧⲟⲛ ⲇⲓⲁ̀ⲥ̀ⲧⲁⲩⲣⲟⲩ ⲑⲁⲛⲁⲧⲟⲛ ⲩ̀ⲡⲟⲙⲓⲛⲁⲥ ⲥⲁⲣⲕⲓ ⲕⲉ ⲇⲓⲝⲁⲥⲩⲱⲥ ⲕⲉ ⲉⲛ ⲑⲁⲛⲁⲧⲱ ⲅⲉⲅⲟⲛⲱⲥ ⲩ̀ⲡⲁⲣⲭⲓⲥ ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ.</td>
            <td class="arabic">قدوس الذى لا يموت : يا من صلبت من أجلنا : وصبرت على موت الصليب : وقبلته فى جسدك : وانت أزلىٌ: غير مائت</td>
        </tr>
        <tr id="table_15_row_5" class="text">
            <td class="english">O Holy Trinity, have mercy on us.</td>
            <td class="coptic">Ⲁ̀ⲅⲓⲁ̀ Ⲧⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">أيها الثالوث القدوس إرحمنا.</td>
        </tr>
    </table>

    <table id="table_16" title="The Trisagion">
        <caption class="caption" id="caption_table_16">The Trisagion<span class="arabic-caption">الثلاث تقديسات</span></caption>
        <tr id="table_16_row_0" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">قدوس الله. قدوس القوى. قدوس الحى الذى لا يموت، الذى صلب عنا، أرحمنا.</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">قدوس الله. قدوس القوى. قدوس الحى الذى لا يموت، الذى صلب عنا، أرحمنا.</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">قدوس الله. قدوس القوى. قدوس الحى الذى لا يموت، الذى صلب عنا، أرحمنا.</td>
        </tr>        
        <tr id="table_16_row_3" class="text">
            <td class="english">Glory be to the Father and to the Son, and to the Holy Spirit, both now, and ever, and unto the ages of ages, Amen. O holy Trinity, have mercy upon us.</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩ̀ⲓⲱ ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ: Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ. Ⲁ̀ⲅⲓⲁ Ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">المجد للآب والإبن و الروح القدس. الآن وكل آوان والى دهر الدهور، آمين. أيها الثالوث القدوس، إرحمنا.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_6" title="Coptic Psalm & Gospel">
    <table id="table_17" title="Coptic Psalm">
        <caption class="caption" id="caption_table_17">Coptic Psalm<br>(37: 21, 22)
        <span class="arabic-caption">المزمور قبطياً<br>(37: 21 ، 22)</span></caption>

        <tr id="table_17_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_17_row_1" class="text">
            <td class="english">I am, the beloved, rejected as a despised dead man; for they nailed my flesh. Abandon me not, O my Master and my God.</td>
            <td class="coptic">Ⲁⲩⲃⲉⲣⲃⲱⲣⲧ ⲉ̀ⲃⲟⲗ ⲁⲛⲟⲕ ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲣⲉϥⲙⲱⲟⲩⲧ ⲉϥⲟ̀ⲣⲉⲃ : ⲟⲩⲟϩ ⲁⲩϯϥⲓⲧ ⲉ̀ⲧⲁⲥⲁⲣⲝ : ⲙ̀ⲡⲉⲣⲭⲁⲧ ⲛ̀ⲥⲱⲕ Ⲡ̀ϭⲟⲓⲥ ⲡⲁⲛⲟⲩϯ</td>
            <td class="arabic">رفضونى أنا الحبيب مثل ميت مرذول. وجعلوا مساميراً فى جسدى. فلا تهملنى يا ربى والهى.</td>
        </tr>
        <tr id="table_17_row_2" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_19" title="Coptic Gospel">
        <caption class="caption" id="caption_table_19">Coptic Gospels
        <span class="arabic-caption">الأناجيل قبطياً</span></caption>
        <tr id="table_19_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁ̀ⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_19_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_2" class="text">
            <td class="coptic">Ⲧⲟⲧⲉ ⲛⲓⲙⲁⲧⲟⲓ ⲛ̀ⲧⲉ ⲡⲓϩⲩⲅⲉⲙⲱⲛ ⲁⲩⲱⲗⲓ ⲛ̀Ⲓⲏⲥⲟⲩⲥ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲡⲣⲉⲧⲱⲣⲓⲟⲛ : ⲟⲩⲟϩ ⲁⲩⲑⲱⲟⲩϯ ⲉ̀ϯⲥ̀ⲡⲏⲣⲁ ⲧⲏⲣⲥ ⲉ̀ϩ̀ⲣⲏ ⲉ̀ϫⲱϥ. Ⲟⲩⲟϩ ⲉ̀ⲧⲁⲩⲃⲁϣϥ ⲁⲩϯ ⲛ̀ⲟⲩⲭⲗⲁⲙⲓⲥ ⲛ̀ⲕⲟⲕⲕⲟⲥ ϩⲓⲱⲧϥ : Ⲟⲩⲟϩ ⲁⲩϣⲱⲛⲧ ⲛ̀ⲟⲩⲭ̀ⲗⲟⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ ϩⲁⲛⲥⲟⲩⲣⲓ ⲁⲩⲧⲏⲓϥ ⲉϫⲉⲛ ⲧⲉϥⲁ̀ⲫⲉ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁ̀ⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_19_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_5" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ϯⲉ̀ⲡⲓⲅ̀ⲣⲁⲫⲏ ⲛ̀ⲧⲉ ⲧⲉϥⲉ̀ⲧⲓⲁ̀ ⲛⲁⲥⲥ̀ϧⲏⲟⲩ ⲡⲉ ϫⲉ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ : Ⲟⲩⲟϩ ⲁⲩⲁϣ ⲕⲉⲥⲟⲛⲓ ⲥ̀ⲛⲁⲩ ⲛⲉⲙⲁϥ : ⲟⲩⲁⲓ ⲥⲁⲧⲉϥⲟⲩⲓ̀ⲛⲁⲙ ⲛⲉⲙ ⲟⲩⲁⲓ ⲥⲁⲧⲉϥϫⲁϭⲏ : ⲟⲩⲟϩ ⲁⲥϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ϯⲅ̀ⲣⲁⲫⲏ ϫⲉ ⲁⲩⲟⲡϥ ⲛⲉⲙ ⲛⲓⲁ̀ⲛⲟⲙⲟⲥ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁ̀ⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_19_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_8" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ϩⲱⲥ ⲉⲩⲓⲛⲓ ⲙ̀ⲙⲟϥ ⲉ̀ⲃⲟⲗ : ⲁⲩⲁ̀ⲙⲟⲛⲓⲛ̀ⲟⲩⲁⲓ ϫⲉ Ⲥⲓⲙⲉⲱⲛ ⲛⲉ ⲟⲩⲔⲩⲣⲓⲛⲛⲉⲟⲥ ⲡⲉ : ⲉϥⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲕⲟⲓ : ⲁⲩⲧⲁⲗⲉ ⲡⲓⲥⲧⲁⲩⲣⲟⲥ ⲉⲣⲟϥ ⲉⲑⲣⲉϥⲧⲱⲟⲩⲛ ⲙ̀ⲙⲟϥ ⲥⲁⲫⲁϩⲟⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ : Ⲛⲁϥⲙⲟϣⲓ ⲇⲉ ⲛ̀ⲥⲱϥ ⲛ̀ϫⲉ ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲏϣ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁ̀ⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_19_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_11" class="text">
            <td class="coptic">Ⲡⲓⲗⲁⲧⲟⲥ ⲇⲉ ⲉ̀ⲧⲁϥⲥⲱⲧⲉⲙ ⲉ̀ⲛⲁⲓⲥⲁϫⲓ : ⲁϥⲉⲛⲒⲏⲥⲟⲩⲥ ⲉ̀ⲃⲟⲗ ⲟⲩⲟϩ ⲁϥϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲡⲓⲃⲏⲙⲁ : ϧⲉⲛ ⲡⲓⲙⲁⲉ̀ⲧⲟⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ ⲡⲓⲗⲓⲑⲟⲥ ⲧ̀ⲣⲱⲧⲟⲛ : ⲙ̀ⲙⲉⲧϩⲉⲃⲣⲉⲟⲥ ϫⲉ Ⲅⲁⲃⲃⲁⲑⲁ : Ⲛⲉⲧ̀ⲡⲁⲣⲉⲥⲕⲉⲩⲏ ⲉ̀ⲧⲉ ⲙ̀ⲡⲓⲡⲁⲥⲭⲁ : ⲛⲉ ⲫ̀ⲛⲁⲩ ⲇⲉ ⲛ̀ⲁϫⲡ ⲥⲟⲟⲩ ⲡⲉ : ⲟⲩⲟϩ ⲛⲁϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛ̀ϫⲉ Ⲡⲓⲗⲁⲧⲟⲥ ⲛ̀ⲛⲓⲒⲟⲩⲇⲁⲓ ϫⲉ ϩⲏⲡⲡⲉ ⲓⲥ ⲡⲉⲧⲟⲩⲣⲟ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">
<table id="table_20" title="Psalm">
    <caption id="caption_table_20" class="caption">Psalm<br>(37:21-22, 21:16-18,7-8)
    <span class="arabic-caption">المزمور<br>(37: 21 ، 22 ، 21: 16 ، 17 ، 8 ، 9)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the Prophet, may his blessing be with us, Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">I am, the beloved, rejected as a despised dead man; for they nailed my flesh. Abandon me not, O my Master and my God. Alleluia</td>
        <td class="arabic">من مزامير داود النبى
رفضونى أنا الحبيب مثل ميت مرذول. وجعلوا مساميراً فى جسدى. فلا تهملنى يا ربى والهى. هلليلويا.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">They pierced My hands and My feet;</td>
        <td class="arabic">ثقبوا يدى ورجلى</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">I can count all My bones.</td>
        <td class="arabic">واحصوا كل عظامى.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">They divide My garments among them, And for My clothing they cast lots.</td>
        <td class="arabic">اقتسموا ثيابى بينهم وعلى لباسى اقترعوا.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">They shoot out the lip, they shake the head, saying,</td>
        <td class="arabic">تكلموا بشفاههم وحركوا رؤوسهم وقالوا</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">"He trusted in the Lord, let Him rescue Him; Let Him deliver Him, since He delights in Him!"</td>
        <td class="arabic">ان كان آمن واتكل على الرب. فليخلصه ولينجيه ان كان اراده.</td>
    </tr>
    <tr id="table_20_row_11" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_21" title="Gospel">
    <caption id="caption_table_21" class="caption">Gospel<br>(Matthew 27:27-45)
    <span class="arabic-caption">الانجيل<br>(متى  27:27-45)</span></caption>
    <tr id="table_21_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_21_row_4" class="text">
        <td class="english">Then the soldiers of the governor took Jesus into the Praetorium and gathered the whole garrison around Him.</td>
        <td class="arabic">فَأَخَذَ عَسْكَرُ الْوَالِي يَسُوعَ إِلَى دَارِ الْوِلاَيَةِ وَجَمَعُوا عَلَيْهِ كُلَّ الْكَتِيبَةِ</td>
    </tr>
    <tr id="table_21_row_5" class="text">
        <td class="english">And they stripped Him and put a scarlet robe on Him.</td>
        <td class="arabic">فَعَرَّوْهُ وَأَلْبَسُوهُ رِدَاءً قِرْمِزِيَّاً</td>
    </tr>
    <tr id="table_21_row_6" class="text">
        <td class="english">When they had twisted a crown of thorns, they put it on His head, and a reed in His right hand. And they bowed the knee before Him and mocked Him, saying, "Hail, King of the Jews!"</td>
        <td class="arabic">وَضَفَرُوا إِكْلِيلاً مِنْ شَوْكٍ وَوَضَعُوهُ عَلَى رَأْسِهِ وَقَصَبَةً فِي يَمِينِهِ. وَكَانُوا يَجْثُونَ قُدَّامَهُ وَيَسْتَهْزِئُونَ بِهِ قَائِلِينَ: «السَّلاَمُ يَا مَلِكَ الْيَهُودِ!</td>
    </tr>
    <tr id="table_21_row_7" class="text">
        <td class="english">Then they spat on Him, and took the reed and struck Him on the head.</td>
        <td class="arabic">وَبَصَقُوا عَلَيْهِ وَأَخَذُوا الْقَصَبَةَ وَضَرَبُوهُ عَلَى رَأْسِهِ.</td>
    </tr>
    <tr id="table_21_row_8" class="text">
        <td class="english">And when they had mocked Him, they took the robe off Him, put His own clothes on Him, and led Him away to be crucified.</td>
        <td class="arabic">وَبَعْدَ مَا اسْتَهْزَأُوا بِهِ نَزَعُوا عَنْهُ الرِّدَاءَ وَأَلْبَسُوهُ ثِيَابَهُ وَمَضَوْا بِهِ لِلصَّلْبِ.</td>
    </tr>
    <tr id="table_21_row_9" class="text">
        <td class="english">Now as they came out, they found a man of Cyrene, Simon by name. Him they compelled to bear His cross.</td>
        <td class="arabic">وَفِيمَا هُمْ خَارِجُونَ وَجَدُوا إِنْسَاناً قَيْرَوَانِيّاً اسْمُهُ سِمْعَانُ فَسَخَّرُوهُ لِيَحْمِلَ صَلِيبَهُ.</td>
    </tr>
    <tr id="table_21_row_10" class="text">
        <td class="english">And when they had come to a place called Golgotha, that is to say, Place of a Skull,</td>
        <td class="arabic">وَلَمَّا أَتَوْا إِلَى مَوْضِعٍ يُقَالُ لَهُ جُلْجُثَةُ وَهُوَ الْمُسَمَّى «مَوْضِعَ الْجُمْجُمَةِ»</td>
    </tr>
    <tr id="table_21_row_11" class="text">
        <td class="english">they gave Him sour wine mingled with gall to drink. But when He had tasted it, He would not drink.</td>
        <td class="arabic">أَعْطَوْهُ خَلاًّ مَمْزُوجاً بِمَرَارَةٍ لِيَشْرَبَ. وَلَمَّا ذَاقَ لَمْ يُرِدْ أَنْ يَشْرَبَ.</td>
    </tr>
    <tr id="table_21_row_12" class="text">
        <td class="english">Then they crucified Him, and divided His garments, casting lots,</td>
        <td class="arabic">وَلَمَّا صَلَبُوهُ اقْتَسَمُوا ثِيَابَهُ مُقْتَرِعِينَ عَلَيْهَا لِكَيْ يَتِمَّ مَا قِيلَ بِالنَّبِيِّ: «اقْتَسَمُوا ثِيَابِي بَيْنَهُمْ وَعَلَى لِبَاسِي أَلْقَوْا قُرْعَةً».</td>
    </tr>
    <tr id="table_21_row_13" class="text">
        <td class="english">Sitting down, they kept watch over Him there.</td>
        <td class="arabic">ثُمَّ جَلَسُوا يَحْرُسُونَهُ هُنَاكَ.</td>
    </tr>
    <tr id="table_21_row_14" class="text">
        <td class="english">And they put up over His head the accusation written against Him: THIS IS JESUS THE KING OF THE JEWS.</td>
        <td class="arabic">وَجَعَلُوا فَوْقَ رَأْسِهِ عِلَّتَهُ مَكْتُوبَةً: «هَذَا هُوَ يَسُوعُ مَلِكُ الْيَهُودِ».</td>
    </tr>
    <tr id="table_21_row_15" class="text">
        <td class="english">Then two robbers were crucified with Him, one on the right and another on the left.</td>
        <td class="arabic">حِينَئِذٍ صُلِبَ مَعَهُ لِصَّانِ وَاحِدٌ عَنِ الْيَمِينِ وَوَاحِدٌ عَنِ الْيَسَارِ.</td>
    </tr>
    <tr id="table_21_row_16" class="text">
        <td class="english">And those who passed by blasphemed Him, wagging their heads</td>
        <td class="arabic">وَكَانَ الْمُجْتَازُونَ يُجَدِّفُونَ عَلَيْهِ وَهُمْ يَهُزُّونَ رُؤُوسَهُمْ</td>
    </tr>
    <tr id="table_21_row_17" class="text">
        <td class="english">and saying, "You who destroy the temple and build it in three days, save Yourself! If You are the Son of God, come down from the cross."</td>
        <td class="arabic">قَائِلِينَ: «يَا نَاقِضَ الْهَيْكَلِ وَبَانِيَهُ فِي ثَلاَثَةِ أَيَّامٍ خَلِّصْ نَفْسَكَ! إِنْ كُنْتَ ابْنَ اللَّهِ فَانْزِلْ عَنِ الصَّلِيبِ!.</td>
    </tr>
    <tr id="table_21_row_18" class="text">
        <td class="english">Likewise the chief priests also, mocking with the scribes and elders, said,</td>
        <td class="arabic">وَكَذَلِكَ رُؤَسَاءُ الْكَهَنَةِ أَيْضاً وَهُمْ يَسْتَهْزِئُونَ مَعَ الْكَتَبَةِ وَالشُّيُوخِ قَالُوا:</td>
    </tr>
    <tr id="table_21_row_19" class="text">
        <td class="english">“He saved others; Himself He cannot save. If He is the King of Israel, let Him now come down from the cross, and we will believe Him.</td>
        <td class="arabic">«خَلَّصَ آخَرِينَ وَأَمَّا نَفْسُهُ فَمَا يَقْدِرُ أَنْ يُخَلِّصَهَا». إِنْ كَانَ هُوَ مَلِكَ إِسْرَائِيلَ فَلْيَنْزِلِ الآنَ عَنِ الصَّلِيبِ فَنُؤْمِنَ بِهِ!</td>
    </tr>
    <tr id="table_21_row_20" class="text">
        <td class="english">He trusted in God; let Him deliver Him now if He will have Him; for He said, 'I am the Son of God.' "</td>
        <td class="arabic">قَدِ اتَّكَلَ عَلَى اللَّهِ فَلْيُنْقِذْهُ الآنَ إِنْ أَرَادَهُ! لأَنَّهُ قَالَ: أَنَا ابْنُ اللَّهِ!.</td>
    </tr>
    <tr id="table_21_row_21" class="text">
        <td class="english">Even the robbers who were crucified with Him reviled Him with the same thing.</td>
        <td class="arabic">وَبِذَلِكَ أَيْضاً كَانَ اللِّصَّانِ اللَّذَانِ صُلِبَا مَعَهُ يُعَيِّرَانِهِ.</td>
    </tr>
    <tr id="table_21_row_22" class="text">
        <td class="english">Now from the sixth hour until the ninth hour there was darkness over all the land. ${candle} <br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">وَمِنَ السَّاعَةِ السَّادِسَةِ كَانَتْ ظُلْمَةٌ عَلَى كُلِّ الأَرْضِ إِلَى السَّاعَةِ التَّاسِعَةِ. ${candle} <br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_21_row_24" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_22" title="Psalm">
    <caption id="caption_table_22" class="caption">Psalm<br>(37:21-22, 21:16-18,7-8)
    <span class="arabic-caption">المزمور<br>(37: 21 ، 22 ، 21: 16 ، 17 ، 8 ، 9)</span></caption>
    <tr id="table_22_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the Prophet, may his blessing be with us, Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">I am, the beloved, rejected as a despised dead man; for they nailed my flesh. Abandon me not, O my Master and my God. Alleluia</td>
        <td class="arabic">من مزامير داود النبى
رفضونى أنا الحبيب مثل ميت مرذول. وجعلوا مساميراً فى جسدى. فلا تهملنى يا ربى والهى. هلليلويا.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">They pierced My hands and My feet;</td>
        <td class="arabic">ثقبوا يدى ورجلى</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">I can count all My bones.</td>
        <td class="arabic">واحصوا كل عظامى.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">They divide My garments among them, And for My clothing they cast lots.</td>
        <td class="arabic">اقتسموا ثيابى بينهم وعلى لباسى اقترعوا.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">They shoot out the lip, they shake the head, saying,</td>
        <td class="arabic">تكلموا بشفاههم وحركوا رؤوسهم وقالوا</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">"He trusted in the Lord, let Him rescue Him; Let Him deliver Him, since He delights in Him!"</td>
        <td class="arabic">ان كان آمن واتكل على الرب. فليخلصه ولينجيه ان كان اراده.</td>
    </tr>
    <tr id="table_22_row_11" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_23" title="Gospel">
    <caption id="caption_table_23" class="caption">Gospel<br>(Mark 15:26-33)
    <span class="arabic-caption">الانجيل<br>(مرقس 15: 26-33)</span></caption>
    <tr id="table_23_row_0" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_23_row_4" class="text">
        <td class="english">And the inscription of His accusation was written above: THE KING OF THE JEWS.</td>
        <td class="arabic">وَكَانَ عُنْوَانُ عِلَّتِهِ مَكْتُوباً «مَلِكُ الْيَهُودِ».</td>
    </tr>
    <tr id="table_23_row_5" class="text">
        <td class="english">With Him they also crucified two robbers, one on His right and the other on His left.</td>
        <td class="arabic">وَصَلَبُوا مَعَهُ لِصَّيْنِ وَاحِداً عَنْ يَمِينِهِ وَآخَرَ عَنْ يَسَارِهِ.</td>
    </tr>
    <tr id="table_23_row_6" class="text">
        <td class="english">So the Scripture was fulfilled which says, “And He was numbered with the transgressors.”</td>
        <td class="arabic">فَتَمَّ الْكِتَابُ الْقَائِلُ: «وَأُحْصِيَ مَعَ أَثَمَةٍ».</td>
    </tr>
    <tr id="table_23_row_7" class="text">
        <td class="english">And those who passed by blasphemed Him, wagging their heads and saying, "Aha! You who destroy the temple and build it in three days,</td>
        <td class="arabic">وَكَانَ الْمُجْتَازُونَ يُجَدِّفُونَ عَلَيْهِ وَهُمْ يَهُزُّونَ رُؤُوسَهُمْ قَائِلِينَ: «آهِ يَا نَاقِضَ الْهَيْكَلِ وَبَانِيَهُ فِي ثَلاَثَةِ أَيَّامٍ!</td>
    </tr>
    <tr id="table_23_row_8" class="text">
        <td class="english">save Yourself, and come down from the cross!"</td>
        <td class="arabic">خَلِّصْ نَفْسَكَ وَانْزِلْ عَنِ الصَّلِيبِ!</td>
    </tr>
    <tr id="table_23_row_9" class="text">
        <td class="english">Likewise the chief priests also, mocking among themselves with the scribes, said, "He saved others; Himself He cannot save.</td>
        <td class="arabic">وَكَذَلِكَ رُؤَسَاءُ الْكَهَنَةِ وَهُمْ مُسْتَهْزِئُونَ فِيمَا بَيْنَهُمْ مَعَ الْكَتَبَةِ قَالُوا: «خَلَّصَ آخَرِينَ وَأَمَّا نَفْسُهُ فَمَا يَقْدِرُ أَنْ يُخَلِّصَهَا.</td>
    </tr>
    <tr id="table_23_row_10" class="text">
        <td class="english">Let the Christ, the King of Israel, descend now from the cross, that we may see and believe.” Even those who were crucified with Him reviled Him.</td>
        <td class="arabic">لِيَنْزِلِ الآنَ الْمَسِيحُ مَلِكُ إِسْرَائِيلَ عَنِ الصَّلِيبِ لِنَرَى وَنُؤْمِنَ». وَاللَّذَانِ صُلِبَا مَعَهُ كَانَا يُعَيِّرَانِهِ.</td>
    </tr>
    <tr id="table_23_row_11" class="text">
        <td class="english">Now when the sixth hour had come, there was darkness over the whole land until the ninth hour.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">وَلَمَّا كَانَتِ السَّاعَةُ السَّادِسَةُ كَانَتْ ظُلْمَةٌ عَلَى الأَرْضِ كُلِّهَا إِلَى السَّاعَةِ التَّاسِعَةِ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_23_row_13" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_24" title="Gospel">
    <caption id="caption_table_24" class="caption">Gospel<br>(Luke 23:26-44)
    <span class="arabic-caption">الانجيل<br>(لوقا 23: 26 - 44)</span></caption>
    <tr id="table_24_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_24_row_4" class="text">
        <td class="english">Now as they led Him away, they laid hold of a certain man, Simon a Cyrenian, who was coming from the country, and on him they laid the cross that he might bear it after Jesus.</td>
        <td class="arabic">وَلَمَّا مَضَوْا بِهِ أَمْسَكُوا سِمْعَانَ رَجُلاً قَيْرَوَانِيّاً كَانَ آتِياً مِنَ الْحَقْلِ وَوَضَعُوا عَلَيْهِ الصَّلِيبَ لِيَحْمِلَهُ خَلْفَ يَسُوعَ.</td>
    </tr>
    <tr id="table_24_row_5" class="text">
        <td class="english">And a great multitude of the people followed Him, and women who also mourned and lamented Him.</td>
        <td class="arabic">وَتَبِعَهُ جُمْهُورٌ كَثِيرٌ مِنَ الشَّعْبِ وَالنِّسَاءِ اللَّوَاتِي كُنَّ يَلْطِمْنَ أَيْضاً وَيَنُحْنَ عَلَيْهِ.</td>
    </tr>
    <tr id="table_24_row_6" class="text">
        <td class="english">But Jesus, turning to them, said, "Daughters of Jerusalem, do not weep for Me, but weep for yourselves and for your children.</td>
        <td class="arabic">فَالْتَفَتَ إِلَيْهِنَّ يَسُوعُ وَقَالَ: «يَا بَنَاتِ أُورُشَلِيمَ لاَ تَبْكِينَ عَلَيَّ بَلِ ابْكِينَ عَلَى أَنْفُسِكُنَّ وَعَلَى أَوْلاَدِكُنَّ</td>
    </tr>
    <tr id="table_24_row_7" class="text">
        <td class="english">For indeed the days are coming in which they will say, 'Blessed are the barren, wombs that never bore, and breasts which never nursed!'</td>
        <td class="arabic">لأَنَّهُ هُوَذَا أَيَّامٌ تَأْتِي يَقُولُونَ فِيهَا: طُوبَى لِلْعَوَاقِرِ وَالْبُطُونِ الَّتِي لَمْ تَلِدْ وَالثُّدِيِّ الَّتِي لَمْ تُرْضِعْ.</td>
    </tr>
    <tr id="table_24_row_8" class="text">
        <td class="english">Then they will begin 'to say to the mountains, "Fall on us!" and to the hills, "Cover us!" '</td>
        <td class="arabic">حِينَئِذٍ يَبْتَدِئُونَ يَقُولُونَ لِلْجِبَالِ: اسْقُطِي عَلَيْنَا وَلِلآكَامِ: غَطِّينَا.</td>
    </tr>
    <tr id="table_24_row_9" class="text">
        <td class="english">For if they do these things in the green wood, what will be done in the dry?"</td>
        <td class="arabic">لأَنَّهُ إِنْ كَانُوا بِالْعُودِ الرَّطْبِ يَفْعَلُونَ هَذَا فَمَاذَا يَكُونُ بِالْيَابِسِ؟».</td>
    </tr>
    <tr id="table_24_row_10" class="text">
        <td class="english">There were also two others, criminals, led with Him to be put to death.</td>
        <td class="arabic">وَجَاءُوا أَيْضاً بِاثْنَيْنِ آخَرَيْنِ مُذْنِبَيْنِ لِيُقْتَلاَ مَعَهُ.</td>
    </tr>
    <tr id="table_24_row_11" class="text">
        <td class="english">And when they had come to the place called Calvary, there they crucified Him, and the criminals, one on the right hand and the other on the left.</td>
        <td class="arabic">وَلَمَّا مَضَوْا بِهِ إِلَى الْمَوْضِعِ الَّذِي يُدْعَى «جُمْجُمَةَ» صَلَبُوهُ هُنَاكَ مَعَ الْمُذْنِبَيْنِ وَاحِداً عَنْ يَمِينِهِ وَالآخَرَ عَنْ يَسَارِهِ.</td>
    </tr>
    <tr id="table_24_row_12" class="text">
        <td class="english">Then Jesus said, "Father, forgive them, for they do not know what they do." And they divided His garments and cast lots.</td>
        <td class="arabic">فَقَالَ يَسُوعُ: «يَا أَبَتَاهُ اغْفِرْ لَهُمْ لأَنَّهُمْ لاَ يَعْلَمُونَ مَاذَا يَفْعَلُونَ». وَإِذِ اقْتَسَمُوا ثِيَابَهُ اقْتَرَعُوا عَلَيْهَا.</td>
    </tr>
    <tr id="table_24_row_13" class="text">
        <td class="english">And the people stood looking on. But even the rulers with them sneered, saying, "He saved others; let Him save Himself if He is the Christ, the chosen of God."</td>
        <td class="arabic">وَكَانَ الشَّعْبُ وَاقِفِينَ يَنْظُرُونَ وَالرُّؤَسَاءُ أَيْضاً مَعَهُمْ يَسْخَرُونَ بِهِ قَائِلِينَ: «خَلَّصَ آخَرِينَ فَلْيُخَلِّصْ نَفْسَهُ إِنْ كَانَ هُوَ الْمَسِيحَ مُخْتَارَ اللهِ».</td>
    </tr>
    <tr id="table_24_row_14" class="text">
        <td class="english">The soldiers also mocked Him, coming and offering Him sour wine,</td>
        <td class="arabic">وَالْجُنْدُ أَيْضاً اسْتَهْزَأُوا بِهِ وَهُمْ يَأْتُونَ وَيُقَدِّمُونَ لَهُ خَلاًّ</td>
    </tr>
    <tr id="table_24_row_15" class="text">
        <td class="english">and saying, "If You are the King of the Jews, save Yourself."</td>
        <td class="arabic">قَائِلِينَ: «إِنْ كُنْتَ أَنْتَ مَلِكَ الْيَهُودِ فَخَلِّصْ نَفْسَكَ».</td>
    </tr>
    <tr id="table_24_row_16" class="text">
        <td class="english">And an inscription also was written over Him in letters of Greek, Latin, and Hebrew: THIS IS THE KING OF THE JEWS.</td>
        <td class="arabic">وَكَانَ عُنْوَانٌ مَكْتُوبٌ فَوْقَهُ بِأَحْرُفٍ يُونَانِيَّةٍ وَرُومَانِيَّةٍ وَعِبْرَانِيَّةٍ: «هَذَا هُوَ مَلِكُ الْيَهُودِ».</td>
    </tr>
    <tr id="table_24_row_17" class="text">
        <td class="english">Then one of the criminals who were hanged blasphemed Him, saying, "If You are the Christ, save Yourself and us."</td>
        <td class="arabic">وَكَانَ وَاحِدٌ مِنَ الْمُذْنِبَيْنِ الْمُعَلَّقَيْنِ يُجَدِّفُ عَلَيْهِ قَائِلاً: «إِنْ كُنْتَ أَنْتَ الْمَسِيحَ فَخَلِّصْ نَفْسَكَ وَإِيَّانَا!</td>
    </tr>
    <tr id="table_24_row_18" class="text">
        <td class="english">But the other, answering, rebuked him, saying, "Do you not even fear God, seeing you are under the same condemnation?</td>
        <td class="arabic">فَانْتَهَرَهُ الآخَرُ قَائِلاً: «أَوَلاَ أَنْتَ تَخَافُ اللهَ إِذْ أَنْتَ تَحْتَ هَذَا الْحُكْمِ بِعَيْنِهِ؟</td>
    </tr>
    <tr id="table_24_row_19" class="text">
        <td class="english">And we indeed justly, for we receive the due reward of our deeds; but this Man has done nothing wrong."</td>
        <td class="arabic">أَمَّا نَحْنُ فَبِعَدْلٍ لأَنَّنَا نَنَالُ اسْتِحْقَاقَ مَا فَعَلْنَا وَأَمَّا هَذَا فَلَمْ يَفْعَلْ شَيْئاً لَيْسَ فِي مَحَلِّهِ».</td>
    </tr>
    <tr id="table_24_row_20" class="text">
        <td class="english">Then he said to Jesus, "Lord, remember me when You come into Your kingdom."</td>
        <td class="arabic">ثُمَّ قَالَ لِيَسُوعَ: «اذْكُرْنِي يَا رَبُّ مَتَى جِئْتَ فِي مَلَكُوتِكَ».</td>
    </tr>
    <tr id="table_24_row_21" class="text">
        <td class="english">And Jesus said to him, "Assuredly, I say to you, today you will be with Me in Paradise."</td>
        <td class="arabic">فَقَالَ لَهُ يَسُوعُ: «الْحَقَّ أَقُولُ لَكَ: إِنَّكَ الْيَوْمَ تَكُونُ مَعِي فِي الْفِرْدَوْسِ».</td>
    </tr>
    <tr id="table_24_row_22" class="text">
        <td class="english">Now it was about the sixth hour, and there was darkness over all the earth until the ninth hour.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">وَكَانَ نَحْوُ السَّاعَةِ السَّادِسَةِ فَكَانَتْ ظُلْمَةٌ عَلَى الأَرْضِ كُلِّهَا إِلَى السَّاعَةِ التَّاسِعَةِ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_24_row_24" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_25" title="Gospel">
    <caption id="caption_table_25" class="caption">Gospel<br>(John 19:13-27)
    <span class="arabic-caption">الانجيل<br>(يوحنا 19: 13 - 27)</span></caption>
    <tr id="table_25_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_25_row_4" class="text">
        <td class="english">When Pilate therefore heard that saying, he brought Jesus out and sat down in the judgment seat in a place that is called The Pavement, but in Hebrew, Gabbatha.</td>
        <td class="arabic">فَلَمَّا سَمِعَ بِيلاَطُسُ هَذَا الْقَوْلَ أَخْرَجَ يَسُوعَ وَجَلَسَ عَلَى كُرْسِيِّ الْوِلاَيَةِ فِي مَوْضِعٍ يُقَالُ لَهُ «الْبلاَطُ» وَبِالْعِبْرَانِيَّةِ «جَبَّاثَا».</td>
    </tr>
    <tr id="table_25_row_5" class="text">
        <td class="english">Now it was the Preparation Day of the Passover, and about the sixth hour. And he said to the Jews, "Behold your King!"</td>
        <td class="arabic">وَكَانَ اسْتِعْدَادُ الْفِصْحِ وَنَحْوُ السَّاعَةِ السَّادِسَةِ. فَقَالَ لِلْيَهُودِ: «هُوَذَا مَلِكُكُمْ».</td>
    </tr>
    <tr id="table_25_row_6" class="text">
        <td class="english">But they cried out, "Away with Him, away with Him! Crucify Him!" Pilate said to them, "Shall I crucify your King?" The chief priests answered, "We have no king but Caesar!"</td>
        <td class="arabic">فَصَرَخُوا: «خُذْهُ! خُذْهُ اصْلِبْهُ!» قَالَ لَهُمْ بِيلاَطُسُ: «أَأَصْلِبُ مَلِكَكُمْ؟» أَجَابَ رُؤَسَاءُ الْكَهَنَةِ: «لَيْسَ لَنَا مَلِكٌ إِلاَّ قَيْصَرُ».</td>
    </tr>
    <tr id="table_25_row_7" class="text">
        <td class="english">Then he delivered Him to them to be crucified. So they took Jesus and led Him away.</td>
        <td class="arabic">فَحِينَئِذٍ أَسْلَمَهُ إِلَيْهِمْ لِيُصْلَبَ. فَأَخَذُوا يَسُوعَ وَمَضَوْا بِهِ.</td>
    </tr>
    <tr id="table_25_row_8" class="text">
        <td class="english">And He, bearing His cross, went out to a place called the Place of a Skull, which is called in Hebrew, Golgotha,</td>
        <td class="arabic">فَخَرَجَ وَهُوَ حَامِلٌ صَلِيبَهُ إِلَى الْمَوْضِعِ الَّذِي يُقَالُ لَهُ «مَوْضِعُ الْجُمْجُمَةِ» وَيُقَالُ لَهُ بِالْعِبْرَانِيَّةِ «جُلْجُثَةُ»</td>
    </tr>
    <tr id="table_25_row_9" class="text">
        <td class="english">where they crucified Him, and two others with Him, one on either side, and Jesus in the center.</td>
        <td class="arabic">حَيْثُ صَلَبُوهُ وَصَلَبُوا اثْنَيْنِ آخَرَيْنِ مَعَهُ مِنْ هُنَا وَمِنْ هُنَا وَيَسُوعُ فِي الْوَسْطِ.</td>
    </tr>
    <tr id="table_25_row_10" class="text">
        <td class="english">Now Pilate wrote a title and put it on the cross. And the writing was: JESUS OF NAZARETH, THE KING OF THE JEWS.</td>
        <td class="arabic">وَكَتَبَ بِيلاَطُسُ عُنْوَاناً وَوَضَعَهُ عَلَى الصَّلِيبِ. وَكَانَ مَكْتُوباً: «يَسُوعُ النَّاصِرِيُّ مَلِكُ الْيَهُودِ».</td>
    </tr>
    <tr id="table_25_row_11" class="text">
        <td class="english">Then many of the Jews read this title, for the place where Jesus was crucified was near the city; and it was written in Hebrew, Greek, and Latin.</td>
        <td class="arabic">فَقَرَأَ هَذَا الْعُنْوَانَ كَثِيرُونَ مِنَ الْيَهُودِ لأَنَّ الْمَكَانَ الَّذِي صُلِبَ فِيهِ يَسُوعُ كَانَ قَرِيباً مِنَ الْمَدِينَةِ. وَكَانَ مَكْتُوباً بِالْعِبْرَانِيَّةِ وَالْيُونَانِيَّةِ وَاللَّاتِينِيَّةِ.</td>
    </tr>
    <tr id="table_25_row_12" class="text">
        <td class="english">Therefore the chief priests of the Jews said to Pilate, "Do not write, 'The King of the Jews,' but, 'He said, "I am the King of the Jews." ' "</td>
        <td class="arabic">فَقَالَ رُؤَسَاءُ كَهَنَةِ الْيَهُودِ لِبِيلاَطُسَ: «لاَ تَكْتُبْ: مَلِكُ الْيَهُودِ بَلْ: إِنَّ ذَاكَ قَالَ أَنَا مَلِكُ الْيَهُودِ».</td>
    </tr>
    <tr id="table_25_row_13" class="text">
        <td class="english">Pilate answered, "What I have written, I have written."</td>
        <td class="arabic">أَجَابَ بِيلاَطُسُ: «مَا كَتَبْتُ قَدْ كَتَبْتُ».</td>
    </tr>
    <tr id="table_25_row_14" class="text">
        <td class="english">Then the soldiers, when they had crucified Jesus, took His garments and made four parts, to each soldier a part, and also the tunic. Now the tunic was without seam, woven from the top in one piece.</td>
        <td class="arabic">ثُمَّ إِنَّ الْعَسْكَرَ لَمَّا كَانُوا قَدْ صَلَبُوا يَسُوعَ أَخَذُوا ثِيَابَهُ وَجَعَلُوهَا أَرْبَعَةَ أَقْسَامٍ لِكُلِّ عَسْكَرِيٍّ قِسْماً. وَأَخَذُوا الْقَمِيصَ أَيْضاً. وَكَانَ الْقَمِيصُ بِغَيْرِ خِيَاطَةٍ مَنْسُوجاً كُلُّهُ مِنْ فَوْقُ.</td>
    </tr>
    <tr id="table_25_row_15" class="text">
        <td class="english">They said therefore among themselves, "Let us not tear it, but cast lots for it, whose it shall be," that the Scripture might be fulfilled which says: "They divided My garments among them, And for My clothing they cast lots." Therefore the soldiers did these things.</td>
        <td class="arabic">فَقَالَ بَعْضُهُمْ لِبَعْضٍ: «لاَ نَشُقُّهُ بَلْ نَقْتَرِعُ عَلَيْهِ لِمَنْ يَكُونُ». لِيَتِمَّ الْكِتَابُ الْقَائِلُ: «اقْتَسَمُوا ثِيَابِي بَيْنَهُمْ وَعَلَى لِبَاسِي أَلْقَوْا قُرْعَةً». هَذَا فَعَلَهُ الْعَسْكَرُ.</td>
    </tr>
    <tr id="table_25_row_16" class="text">
        <td class="english">Now there stood by the cross of Jesus His mother, and His mother's sister, Mary the wife of Clopas, and Mary Magdalene.</td>
        <td class="arabic">وَكَانَتْ وَاقِفَاتٍ عِنْدَ صَلِيبِ يَسُوعَ أُمُّهُ وَأُخْتُ أُمِّهِ مَرْيَمُ زَوْجَةُ كِلُوبَا وَمَرْيَمُ الْمَجْدَلِيَّةُ.</td>
    </tr>
    <tr id="table_25_row_17" class="text">
        <td class="english">When Jesus therefore saw His mother, and the disciple whom He loved standing by, He said to His mother, "Woman, behold your son!"</td>
        <td class="arabic">فَلَمَّا رَأَى يَسُوعُ أُمَّهُ وَالتِّلْمِيذَ الَّذِي كَانَ يُحِبُّهُ وَاقِفاً قَالَ لِأُمِّهِ: «يَا امْرَأَةُ هُوَذَا ابْنُكِ».</td>
    </tr>
    <tr id="table_25_row_18" class="text">
        <td class="english">Then He said to the disciple, "Behold your mother!" And from that hour that disciple took her to his own home.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">ثُمَّ قَالَ لِلتِّلْمِيذِ: «هُوَذَا أُمُّكَ». وَمِنْ تِلْكَ السَّاعَةِ أَخَذَهَا التِّلْمِيذُ إِلَى خَاصَّتِهِ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_25_row_20" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>
</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}

<table id="table_27" title="Exposition">
    <caption id="caption_table_27" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_27_row_1" class="intro">
        <td class="english">The exposition of the SIXTH Hour of the DAY of GREAT FRIDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة السادسة من يوم الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_27_row_4" class="text">
        <td class="english">O you dwellers of Jerusalem, come and see this sight.</td>
        <td class="arabic">يا جميع السكان بأورشليم، تعالوا أنظروا هذا المنظر،</td>
    </tr>
    <tr id="table_27_row_5" class="text">
        <td class="english">They crucified Jesus the Son of David on a cross.</td>
        <td class="arabic">فانهم علقوا يسوع بن داود على خشبة الصليب.</td>
    </tr>
    <tr id="table_27_row_6" class="text">
        <td class="english">They dressed Him in a scarlet robe like the kings, and placed a crown of thorns on His head.</td>
        <td class="arabic">والبسوه ثوباً أحمر من لباس الملوك والرؤساء. ووضعوا اكليل شوك على رأسه.</td>
    </tr>
    <tr id="table_27_row_7" class="text">
        <td class="english">He adorned the heavens with the stars and the earth with flowers.</td>
        <td class="arabic">مزين السموات بحسن النجوم، مؤسس الأرض بروح فيه،</td>
    </tr>
    <tr id="table_27_row_8" class="text">
        <td class="english">They placed a reed in His right hand as a wise man and a teacher.</td>
        <td class="arabic">ومزينها بحسن الأزهار، جعلوا فى يمينه قصبة حكيم معلم كاتب.</td>
    </tr>
    <tr id="table_27_row_9" class="text">
        <td class="english">They carried a cross behind Him as a conqueror.</td>
        <td class="arabic">وجعلوا صليبه خلفه كملك غالب فى الحرب.
فلما النسوة الآتيات إلى عيد الفصح، انتحبن وبكين على ما كان،</td>
    </tr>
    <tr id="table_27_row_10" class="text">
        <td class="english">The women who came to Jerusalem for the Passover wept and wailed when they saw Him.</td>
        <td class="arabic">فالتفت اليهن وكلمهن هكذا قائلاً: يا كل بنات أورشليم لا تبكين علىّ بل على ذواتكن، لأجل الشدائد العظيمة التى تدرككن،</td>
    </tr>
    <tr id="table_27_row_11" class="text">
        <td class="english">He turned to them and said, “Daughters of Jerusalem, do not weep for Me. Rather, weep for yourselves because of the great tribulation that will fall on you.</td>
        <td class="arabic">والاضطراب الكثير بعد زمن قليل. وستأتى عليكن أيام تطوبن فيها البطون العواقر التى لم تحبل،</td>
    </tr>
    <tr id="table_27_row_12" class="text">
        <td class="english">There will be days when you envy the barren who never gave birth, nursed, nor raised a child.</td>
        <td class="arabic">ولم تلد، ولم ترضع، ولم تربّ.</td>
    </tr>
    <tr id="table_27_row_13" class="text">
        <td class="english">They will ask the mountains to fall on them, and the hills to cover them.</td>
        <td class="arabic">وسيقولون للجبال أن تقع عليهم والآكام أن تغطيهم،</td>
    </tr>
    <tr id="table_27_row_14" class="text">
        <td class="english">For if they do this when the wood is green what will happen when it is dry.</td>
        <td class="arabic">فان كانوا يفعلون هذا بالعود الرطب فماذا يصنعون باليابس؟.</td>
    </tr>
    <tr id="table_27_row_15" class="text">
        <td class="english">When they came to the place called Golgotha, they set the cross, and crucified Him.</td>
        <td class="arabic">ولما أتوا به إلى الاقرانيون الذى يدعى الجلجلة، أقاموا خشبة الصليب وصلبوه عليها كالتدبير.</td>
    </tr>
    <tr id="table_27_row_16" class="text">
        <td class="english">They crucified with Him two criminals, one on His right and one on His left,</td>
        <td class="arabic">وكان هناك فاعلا شر صلبوهما معه. واحد عن اليمين والآخر عن اليسار.</td>
    </tr>
    <tr id="table_27_row_17" class="text">
        <td class="english">so that the prophesy of the prophet may be fulfilled that said, “He was numbered with the transgressors.”</td>
        <td class="arabic">لكى يكمل قول النبى أنه أحصى مع المنافقين وجهال الناس.</td>
    </tr>
    <tr id="table_27_row_18" class="text">
        <td class="english">The soldiers took His clothes and cast lots to divide His garments.</td>
        <td class="arabic">ثم أخذ الجند ثيابه واقترعوا عليها واقتسموها أربعة أجزاء.</td>
    </tr>
    <tr id="table_27_row_19" class="text">
        <td class="english">They inscribed on the cross over His head, in Hebrew, Greek, and Roman, “This is the king of the Jews.”</td>
        <td class="arabic">وكتبوا السبب فوق رأسه كأمر رئيس الكهنة. كتبوا بالعبرانية وباليونانية وبالرومانية: أن هذا هو ملك اليهود</td>
    </tr>
    <tr id="table_27_row_20" class="text">
        <td class="english">The people stood by, watching, and mocked Him saying, “He saved others, let Him save Himself if He is the Christ, the chosen of God.”</td>
        <td class="arabic">وكان جميع الشعب قائماً والرؤساء والقادة وكانوا يهزأون به بغير حياء، ويحركون رؤوسهم ويقولون: خلص آخرين، فليخلص نفسه ان كان هو المسيح ابن المبارك.</td>
    </tr>
    <tr id="table_27_row_21" class="text">
        <td class="english">The soldiers also mocked him saying, “If you are the king of the Jews, save Yourself and come down off the cross.”</td>
        <td class="arabic">وأيضاً الجند كانوا يهزأون به ويجدفون عليه بلا فتور قائلين: ان كنت أنت ملك اليهود أنزل عن الصليب.</td>
    </tr>
    <tr id="table_27_row_22" class="text">
        <td class="english">The thief on His left said to Him in front of everyone, “If you are the Christ save Yourself and us.”</td>
        <td class="arabic">وكان واحد من فاعلى الشر اللذين صلبا معه يفترى عليه أمام الجميع قائلاً: ان كنت أنت المسيح فخلص نفسك وخلصنا من هذا العار الذى نحن فيه.</td>
    </tr>
    <tr id="table_27_row_23" class="text">
        <td class="english">The other thief rebuked him saying, “Do you not even fear God, seeing you are under the same condemnation?</td>
        <td class="arabic">فانتهره الآخر قائلاً: أما تخاف أنت من الله؟‍!</td>
    </tr>
    <tr id="table_27_row_24" class="text">
        <td class="english">And we indeed justly, for we received the due reward of our deeds; but this Man has done nothing wrong.”</td>
        <td class="arabic">نحن من أجل آثامنا طرحنا إلى هذا الحكم وهذه العقوبة التى نحن فيها، أما هذا فلم يفعل شيئاً مثلنا، فانه بغير شر ولا ظلم.</td>
    </tr>
    <tr id="table_27_row_25" class="text">
        <td class="english">Then he said to Jesus, “Lord, remember me when You come into Your Kingdom.”</td>
        <td class="arabic">وفتح فاه وابتدأ يقول: اذكرنى يا رب متى جئت فى ملكوتك.</td>
    </tr>
    <tr id="table_27_row_26" class="text">
        <td class="english">The Lord of Glory and Lover of mankind replied saying, “Today you will be with me in Paradise.”</td>
        <td class="arabic">فاستجاب له رب المجد وخاطبه كمحب للبشر قائلاً: أقول لك أنك اليوم تكون معى فى فردوس النعيم.</td>
    </tr>
    <tr id="table_27_row_27" class="text">
        <td class="english">There were women standing by the cross of our Savior, His mother, His mother’s sister, Mary, the wife of Clopas and Mary Magdalene.</td>
        <td class="arabic">وكانت نسوة واقفات عند صليب مخلصنا، أمه وأخت أمه ومريم التى لكلوبا والمجدلية.</td>
    </tr>
    <tr id="table_27_row_28" class="text">
        <td class="english">When Jesus saw His mother and the disciple whom He loved standing near, He said to His mother, “Woman, behold your son!”</td>
        <td class="arabic">فلما رأى يسوع أمه والتلميذ الآخر الذى كان يسوع يحبه، أشار إليها قائلاً: يا امرأة هذا ابنك.</td>
    </tr>
    <tr id="table_27_row_29" class="text">
        <td class="english">Then He said to the disciple, “Behold your mother,” and from that hour the disciple took her to his own home as the Lord had said.</td>
        <td class="arabic">وقال للآخر: هذه أمك. ومن تلك الساعة أخذها التلميذ إلى بيته كقول الرب.</td>
    </tr>
    <tr id="table_27_row_30" class="text">
        <td class="english">And from the sixth hour to ninth hour there was darkness on the whole earth.</td>
        <td class="arabic">ومن الساعة السادسة إلى الساعة التاسعة كانت ظلمة على الأرض كلها.</td>
    </tr>
    <tr id="table_27_row_31" class="text">
        <td class="english">O Lord who adorned the earth with flowers, they dressed You with a scarlet robe.</td>
        <td class="arabic">يا من زينت الأرض بكثرة الأزهار، البسوك ثوباً أحمر.</td>
    </tr>
    <tr id="table_27_row_32" class="text">
        <td class="english">O who adorned the skies with the stars, they put a crown of thorns on Your head.</td>
        <td class="arabic">والسماء بكثرة النجوم، وضعوا عليك اكليلا من شوك.</td>
    </tr>
    <tr id="table_27_row_33" class="text">
        <td class="english">You whose mighty hand holds heaven and earth, they put a reed in Your hand.</td>
        <td class="arabic">يا من السماء والأرض فى قبضتك، وضعوا فى يدك قصبة،</td>
    </tr>
    <tr id="table_27_row_34" class="text">
        <td class="english">You who hanged earth with one word of Your mouth, were hanged on the cross.</td>
        <td class="arabic">يا من علقت الأرض كلها بكلمة من فيك، وصلبت من أجل خطايانا،</td>
    </tr>
    <tr id="table_27_row_35" class="text">
        <td class="english">O Lord, You were crucified for our sins and trampled the power of death by Your cross. </td>
        <td class="arabic">وأبطلت عز الموت يا سيدنا بصليبك يا ذا القدرة المنيعة. </td>
    </tr>
</table>
${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanGreatHtml}
${endOfServiceHymnHtml}
</div>

<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOFConfsc" class="navigationButton">
        <td class="englishButton">Confession of the Thief</td>
        <td class="arabicButton">أمانة اللص</td>
    </tr>
</table>
</div>
`;

};