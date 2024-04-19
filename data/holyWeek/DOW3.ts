import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion,  cross} from "../repeatedPrayers";

export const DOW3 = () => {
    const hourIntroHtml = hourIntro("THIRD","الثالثة","DAY of WEDNESDAY","يوم الاربعاء");
    const paschalPraiseHtml = paschalPraise2("4","14","15","THIRD","الثالثة","DAY of WEDNESDAY","يوم الاربعاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱ̀̀ⲩⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">ϧⲉⲛ ̀̀ⲡϫⲓⲛⲑ̀ⲣⲉ ⲫⲁⲣⲁⲱ̀ ⲭⲱ ⲙ̀ⲡⲓⲗⲁⲟⲥ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉϥϭⲓⲙⲱⲓⲧ ϧⲁϫⲱⲟⲩ ⲛ̀ϫⲉ Ⲫϯ ⲉ̀ⲫ̀ⲙⲱⲓⲧ ⲙ̀Ⲫⲩⲗⲓⲥⲧⲓⲛ : ϫⲉ ⲛⲁϥϧⲉⲛⲧ ⲡⲉ : ⲉ̀ⲁϥϫⲟⲥ ⲅⲁⲣ ⲛ̀ϫⲉ Ⲡ̀⳪ </td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲏⲥⲟⲩ ⲛ̀ⲧⲉ Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲫⲏⲉⲧ ϯⲥⲃⲱ ⲅⲁⲣⲛ̀ⲟⲩⲥⲟϫϥ̀ⲟⲓ ⲙ̀ⲫⲣⲏϯ ⲙ̀ⲫⲏⲉⲧⲧⲉⲙ ⲫⲉⲗϫ ⲉ̀ⲫⲉⲗϫ : ⲛⲉⲙ ⲙ̀ⲫ̀ⲣⲏϯ ⲙⲫⲉⲧⲧⲟⲩⲛⲟⲥ ⲫⲏⲉⲧⲉⲛⲕⲟⲧ ϧⲉⲛ ⲟⲩϩⲩⲛⲓⲙ ⲉϥϩⲟⲣϣ : ⲫⲏⲉⲧⲥⲁϫⲓ ⲛⲉⲙ ⲟⲩⲥⲟϫ ϥ̀ⲟⲓ ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲫⲏⲉⲧⲥⲁϫⲓ ⲛⲉⲙ ⲟⲩⲁⲓ ⲉϥϩⲩⲛⲓⲙ : ⲟⲩⲟϩ ⲧ̀ϧⲁⲉ ϣⲁϥϫⲟⲥ ϫⲉ ⲟⲩ ⲡⲉⲧϣⲟⲡ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲉϣⲱⲡⲓ ⲇⲉ ⲁϥϣⲁⲛⲥⲉⲩϩ ϩⲁⲧ ⲉϧⲟⲩⲛ ⲛ̀ⲑⲉ ⲛ̀ⲟⲩⲕⲁϩ ⲟⲩⲟϩ ⲛⲉϥⲥⲉⲃⲧⲉ ⲛⲟⲩⲃ ⲛⲑⲉ ⲟⲩⲟⲙⲓ ⲛⲁⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲇⲓⲕⲉⲟⲥ ⲛⲉⲧⲛⲁϭⲓⲧⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲣⲉⲙⲙ̀ⲙⲉ ⲉⲑⲛⲁⲉⲣⲟⲥ ⲉ̀ⲛⲉϥⲭⲣⲏⲙⲁ ⲉⲣⲉ ⲡⲉϥⲏⲓ ⲇⲉ ⲛⲁⲉⲣⲑⲉ ⲛ̀ⲟⲩϫⲟⲗⲉⲥ ⲟⲩⲟϩ ⲛ̀ⲑⲉ ⲛ̀ⲟⲩϩⲁⲗⲟⲩⲥ</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲛⲓⲡⲁⲣⲟⲙⲓⲁ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲡⲁϣⲏⲣⲓ ⲁⲣⲉϩ ⲛ̀ⲛⲁⲉⲛⲧⲟⲗⲏ̀ ⲛ̀ⲛⲉⲕⲉⲣⲡⲟⲩ ⲱⲃϣ ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣⲟⲃϣ ⲕⲉⲡⲥⲁϫⲓ ⲛⲧⲁⲧⲁⲡⲣⲟ ⲙ̀ⲡⲉⲣⲭⲁϥ ⲛ̀ⲥⲱⲕ ⲧⲁⲣⲉϥϣⲟⲡⲕ ⲉ̀ⲣⲟϥ ⲙⲉⲛⲣⲓⲧϥ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉⲣⲟⲕ ⲙⲁϫⲫⲟϥ ⲉⲑⲣⲉϥϭⲁ̀ⲥⲕ ⲙⲁⲧⲁⲓⲟϥϫⲉ ⲉϥ ⲉ̀ϣⲟⲡⲕ ϥⲛⲁϯ ⲅⲁⲣ ⲛ̀ⲟⲩⲭⲗⲟⲙ ⲛ̀ϩⲙⲟⲧ ⲉ̀ϫⲉⲛ ⲛ̀ⲧⲉⲕⲁ̀ⲫⲉ ⲛϥⲉⲣⲛⲁϣϯ ⲉ̀ⲣⲟⲕ ϧⲉⲛ ⲟⲩⲭⲗⲟⲙ ⲛ̀ⲧ̀ⲣⲟⲩⲫⲏ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Exodus 13:17-22)
    <span class="arabic-caption">النبوة الأولي<br>(خروج 13: 17 - 22)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Then it came to pass, when Pharaoh had let the people go, that God did not lead them by way of the land of the Philistines, although that was near; for God said, "Lest perhaps the people change their minds when they see war, and return to Egypt."</td>
        <td class="arabic">وَكَانَ لَمَّا اطْلَقَ فِرْعَوْنُ الشَّعْبَ انَّ اللهَ لَمْ يَهْدِهِمْ فِي طَرِيقِ ارْضِ الْفَلَسْطِينِيِّينَ مَعَ انَّهَا قَرِيبَةٌ لانَّ اللهَ قَالَ: «لِئَلا يَنْدَمَ الشَّعْبُ اذَا رَاوا حَرْبا وَيَرْجِعُوا الَى مِصْرَ».</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">So God led the people around by way of the wilderness of the Red Sea. And the children of Israel went up in orderly ranks out of the land of Egypt.</td>
        <td class="arabic">فَادَارَ اللهُ الشَّعْبَ فِي طَرِيقِ بَرِّيَّةِ بَحْرِ سُوفٍ. وَصَعِدَ بَنُو اسْرَائِيلَ مُتَجَهِّزِينَ مِنْ ارْضِ مِصْرَ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">And Moses took the bones of Joseph with him, for he had placed the children of Israel under solemn oath, saying, "God will surely visit you, and you shall carry up my bones from here with you."</td>
        <td class="arabic">وَاخَذَ مُوسَى عِظَامَ يُوسُفَ مَعَهُ لانَّهُ كَانَ قَدِ اسْتَحْلَفَ بَنِي اسْرَائِيلَ بِحَلْفٍ قَائِلا: «انَّ اللهَ سَيَفْتَقِدُكُمْ فَتُصْعِدُونَ عِظَامِي مِنْ هُنَا مَعَكُمْ»</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">So they took their journey from Succoth and camped in Etham at the edge of the wilderness.</td>
        <td class="arabic">وَارْتَحَلُوا مِنْ سُكُّوتَ وَنَزَلُوا فِي ايثَامَ فِي طَرَفِ الْبَرِّيَّةِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And the Lord went before them by day in a pillar of cloud to lead the way, and by night in a pillar of fire to give them light, so as to go by day and night.</td>
        <td class="arabic">وَكَانَ الرَّبُّ يَسِيرُ امَامَهُمْ نَهَارا فِي عَمُودِ سَحَابٍ لِيَهْدِيَهُمْ فِي الطَّرِيقِ وَلَيْلا فِي عَمُودِ نَارٍ لِيُضِيءَ لَهُمْ - لِكَيْ يَمْشُوا نَهَارا وَلَيْلا.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">He did not take away the pillar of cloud by day or the pillar of fire by night from before the people.</td>
        <td class="arabic">لَمْ يَبْرَحْ عَمُودُ السَّحَابِ نَهَارا وَعَمُودُ النَّارِ لَيْلا مِنْ امَامِ الشَّعْبِ.</td>
    </tr>
    <tr id="table_3_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Sirach 22:7-18)
    <span class="arabic-caption">النبوة الثانية<br>(يشوع ابن سيراخ 22: 7 - 18)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Joshua, the son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يشوع بن سيراخ النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">He who teaches a fool is like one who glues potsherds together,
or who rouses a sleeper from deep slumber.</td>
        <td class="arabic">مَنْ يُعَلِّمُ الأَحمَقَ فكمَنْ يَجبُرُ إناءً مِنْ خَزَفٍ،
 أو كمَنْ يُوقِظُ مُستَغْرِقًا في نَومِهِ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">He who tells a story to a fool tells it to a drowsy man;
and at the end he will say, “What is it?”</td>
        <td class="arabic">مَنْ يُكَلِّمُ الأَحمَقَ فكمَنْ يُكَلِّمُ ناعِسًا،
فإذا اَنتهَى الكلامُ، سألَ الأَحمَقُ: ماذا؟</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">Weep for the dead, for he lacks the light;
and weep for the fool, for he lacks intelligence;
weep less bitterly for the dead, for he has attained rest;
but the life of the fool is worse than death.</td>
        <td class="arabic">على المَيتِ يَبكي الإِنسانُ، لأَنَّهُ فَقَدَ النُّورَ،
على المَيتِ يُقَلِّلُ الإِنسانُ البُكاءَ، لأِنَّهُ في راحةٍ.
أمَّا حَياةُ الأَحمَقِ فأشْقَى مِنَ الموتِ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Mourning for the dead lasts seven days,
but for a fool or an ungodly man it lasts all his life.</td>
        <td class="arabic">النَّوحُ على المَيْتِ سبْعَةَ أيّامِ،
والنَّوحُ على الأَحمَقِ والشِّرِّيرِ كُلَ الأَيّامِ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">Do not talk much with a foolish man,
and do not visit an unintelligent man;
guard yourself from him to escape trouble,
and you will not be soiled when he shakes himself off;
avoid him and you will find rest,
and you will never be wearied by his madness.</td>
        <td class="arabic">لا تُكثِرِ الكلامَ معَ الجاهِلِ،
ولا تُقارِبِ الغَبـيَّ.
خُذْ حَذَرَكَ مِنهُ لِئلاَ يُؤْذِيَكَ،
ويُلَوِّثَ سُمعَتَكَ.
إبتَعِدْ عَنهُ فتَجِدَ راحَتَكَ،
ولا تَعودَ تُزعِجُكَ حَماقَتُهُ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">What is heavier than lead?
And what is its name except “Fool”?</td>
        <td class="arabic">أيُّ شيءٍ أثقَلُ مِنَ الرَّصاصِ؟
لا شيءَ سِوى الأَحمَقِ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">Sand, salt, and a piece of iron
are easier to bear than a stupid man.</td>
        <td class="arabic">الرَّمْلُ والمِلْحُ والحَديدُ
أخَفُّ حِمْلا مِنَ الإِنسانِ الجاهِلِ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">A wooden beam firmly bonded into a building
will not be torn loose by an earthquake;
so the mind firmly fixed on a reasonable counsel
will not be afraid in a crisis.</td>
        <td class="arabic">جِسْرُ الخشَبِ المَربوطُ في البِناءِ
لا تَقدِرُ على تَفكيكِهِ الزَّلزَلَةُ.
كذلِكَ المُعتَمِدُ على حُسْنِ التَّفكيرِ
لا يَشعُرُ بِالخَوفِ زَمَنَ الضِّيقِ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">A mind settled on an intelligent thought
is like the stucco decoration on the wall of a colonnade.</td>
        <td class="arabic">المُرتكِزُ على تَفْكيرٍ صَحيحِ،
كدِهانٍ لِلزِّينَةِ على حائِطٍ مَصْقولٍ.</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">Fences set on a high place
will not stand firm against the wind;
so a timid heart with a fool's purpose
will not stand firm against any fear.</td>
        <td class="arabic">السِّياجُ المَنْصوبُ في مكانٍ عالٍ
وقلبٌ تُخيفُهُ أفكارٌ حَمقَاءُ
لا يَثبتُ أمامَ الأَهوالِ.</td>
    </tr>
    <tr id="table_4_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Job 27:16-20)
    <span class="arabic-caption">النبوة الثالثة<br>(أيوب 27: 16 - 20)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Job the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من أيوب الصديق بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Though he heaps up silver like dust, And piles up clothing like clay--</td>
        <td class="arabic">إِنْ كَنَزَ فِضَّةً كَالتُّرَابِ وَأَعَدَّ مَلاَبِسَ كَالطِّينِ</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">He may pile it up, but the just will wear it, And the innocent will divide the silver.</td>
        <td class="arabic">فَهُوَ يُعِدُّ وَالْبَارُّ يَلْبِسُهُ وَالْبَرِئُ يَقْسِمُ الْفِضَّةَ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">He builds his house like a moth, Like a booth which a watchman makes.</td>
        <td class="arabic">يَبْنِي بَيْتَهُ كَالْعُثِّ أَوْ كَمِظَلَّةٍ صَنَعَهَا الْحَارِسُ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">The rich man will lie down, But not be gathered up; He opens his eyes, And he is no more.</td>
        <td class="arabic">يَضْطَجِعُ غَنِيّاً وَلَكِنَّهُ لاَ يُضَمُّ. يَفْتَحُ عَيْنَيْهِ وَلاَ يَكُونُ.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Terrors overtake him like a flood; A tempest steals him away in the night.</td>
        <td class="arabic">الأَهْوَالُ تُدْرِكُهُ كَالْمِيَاهِ. لَيْلاً تَخْتَطِفُهُ الزَّوْبَعَةُ.</td>
    </tr>
    <tr id="table_5_row_10" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Proverbs 4:4-27 & 5:1-4)
    <span class="arabic-caption">النبوة الرابعة<br>(أمثال سليمان 4: 4-27 و 5: 1 - 4)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the Prophet may his blessings be with us Amen.</td>
        <td class="arabic">أمثال سليمان النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">He also taught me, and said to me: "Let your heart retain my words; Keep my commands, and live.</td>
        <td class="arabic">وَكَانَ يُرِينِي وَيَقُولُ لِي: «لِيَضْبِطْ قَلْبُكَ كَلاَمِي. احْفَظْ وَصَايَايَ فَتَحْيَا.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">Get wisdom! Get understanding! Do not forget, nor turn away from the words of my mouth.</td>
        <td class="arabic">اِقْتَنِ الْحِكْمَةَ. اقْتَنِ الْفَهْمَ. لاَ تَنْسَ وَلاَ تُعْرِضْ عَنْ كَلِمَاتِ فَمِي.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">Do not forsake her, and she will preserve you; Love her, and she will keep you.</td>
        <td class="arabic">لاَ تَتْرُكْهَا فَتَحْفَظَكَ. أَحْبِبْهَا فَتَصُونَكَ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">Wisdom is the principal thing; Therefore get wisdom. And in all your getting, get understanding.</td>
        <td class="arabic">الْحِكْمَةُ هِيَ الرَّأْسُ فَاقْتَنِ الْحِكْمَةَ وَبِكُلِّ مُقْتَنَاكَ اقْتَنِ الْفَهْمَ.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">Exalt her, and she will promote you; She will bring you honor, when you embrace her.</td>
        <td class="arabic">ارْفَعْهَا فَتُعَلِّيَكَ. تُمَجِّدُكَ إِذَا اعْتَنَقْتَهَا.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">She will place on your head an ornament of grace; A crown of glory she will deliver to you."</td>
        <td class="arabic">تُعْطِي رَأْسَكَ إِكْلِيلَ نِعْمَةٍ. تَاجَ جَمَالٍ تَمْنَحُكَ».</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">Hear, my son, and receive my sayings, And the years of your life will be many.</td>
        <td class="arabic">اِسْمَعْ يَا ابْنِي وَاقْبَلْ أَقْوَالِي فَتَكْثُرَ سِنُو حَيَاتِكَ.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">I have taught you in the way of wisdom; I have led you in right paths.</td>
        <td class="arabic">أَرَيْتُكَ طَرِيقَ الْحِكْمَةِ. هَدَيْتُكَ سُبُلَ الاِسْتِقَامَةِ.</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">When you walk, your steps will not be hindered, And when you run, you will not stumble.</td>
        <td class="arabic">إِذَا سِرْتَ فَلاَ تَضِيقُ خَطَوَاتُكَ وَإِذَا سَعَيْتَ فَلاَ تَعْثُرُ.</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">Take firm hold of instruction, do not let go; Keep her, for she is your life.</td>
        <td class="arabic">تَمَسَّكْ بِالأَدَبِ. لاَ تَرْخِهِ. احْفَظْهُ فَإِنَّهُ هُوَ حَيَاتُكَ.</td>
    </tr>
    <tr id="table_6_row_14" class="text">
        <td class="english">Do not enter the path of the wicked, And do not walk in the way of evil.</td>
        <td class="arabic">لاَ تَدْخُلْ فِي سَبِيلِ الأَشْرَارِ وَلاَ تَسِرْ فِي طَرِيقِ الأَثَمَةِ.</td>
    </tr>
    <tr id="table_6_row_15" class="text">
        <td class="english">Avoid it, do not travel on it; Turn away from it and pass on.</td>
        <td class="arabic">تَنَكَّبْ عَنْهُ. لاَ تَمُرَّ بِهِ. حِدْ عَنْهُ وَاعْبُرْ</td>
    </tr>
    <tr id="table_6_row_16" class="text">
        <td class="english">For they do not sleep unless they have done evil; And their sleep is taken away unless they make someone fall.</td>
        <td class="arabic">لأَنَّهُمْ لاَ يَنَامُونَ إِنْ لَمْ يَفْعَلُوا سُوءاً وَيُنْزَعُ نَوْمُهُمْ إِنْ لَمْ يُسْقِطُوا أَحَداً.</td>
    </tr>
    <tr id="table_6_row_17" class="text">
        <td class="english">For they eat the bread of wickedness, And drink the wine of violence.</td>
        <td class="arabic">لأَنَّهُمْ يَطْعَمُونَ خُبْزَ الشَّرِّ وَيَشْرَبُونَ خَمْرَ الظُّلْمِ.</td>
    </tr>
    <tr id="table_6_row_18" class="text">
        <td class="english">But the path of the just is like the shining sun, That shines ever brighter unto the perfect day.</td>
        <td class="arabic">أَمَّا سَبِيلُ الصِّدِّيقِينَ فَكَنُورٍ مُشْرِقٍ يَتَزَايَدُ وَيُنِيرُ إِلَى النَّهَارِ الْكَامِلِ.</td>
    </tr>
    <tr id="table_6_row_19" class="text">
        <td class="english">The way of the wicked is like darkness; They do not know what makes them stumble.</td>
        <td class="arabic">أَمَّا طَرِيقُ الأَشْرَارِ فَكَالظَّلاَمِ. لاَ يَعْلَمُونَ مَا يَعْثُرُونَ بِهِ.</td>
    </tr>
    <tr id="table_6_row_20" class="text">
        <td class="english">My son, give attention to my words; Incline your ear to my sayings.</td>
        <td class="arabic">يَا ابْنِي أَصْغِ إِلَى كَلاَمِي. أَمِلْ أُذْنَكَ إِلَى أَقْوَالِي.</td>
    </tr>
    <tr id="table_6_row_21" class="text">
        <td class="english">Do not let them depart from your eyes; Keep them in the midst of your heart;</td>
        <td class="arabic">لاَ تَبْرَحْ عَنْ عَيْنَيْكَ. احْفَظْهَا فِي وَسَطِ قَلْبِكَ.</td>
    </tr>
    <tr id="table_6_row_22" class="text">
        <td class="english">For they are life to those who find them, And health to all their flesh.</td>
        <td class="arabic">لأَنَّهَا هِيَ حَيَاةٌ لِلَّذِينَ يَجِدُونَهَا وَدَوَاءٌ لِكُلِّ الْجَسَدِ.</td>
    </tr>
    <tr id="table_6_row_23" class="text">
        <td class="english">Keep your heart with all diligence, For out of it spring the issues of life.</td>
        <td class="arabic">فَوْقَ كُلِّ تَحَفُّظٍ احْفَظْ قَلْبَكَ لأَنَّ مِنْهُ مَخَارِجَ الْحَيَاةِ.</td>
    </tr>
    <tr id="table_6_row_24" class="text">
        <td class="english">Put away from you a deceitful mouth, And put perverse lips far from you.</td>
        <td class="arabic">انْزِعْ عَنْكَ الْتِوَاءَ الْفَمِ وَأَبْعِدْ عَنْكَ انْحِرَافَ الشَّفَتَيْنِ.</td>
    </tr>
    <tr id="table_6_row_25" class="text">
        <td class="english">Let your eyes look straight ahead, And your eyelids look right before you.</td>
        <td class="arabic">لِتَنْظُرْ عَيْنَاكَ إِلَى قُدَّامِكَ وَأَجْفَانُكَ إِلَى أَمَامِكَ مُسْتَقِيماً.</td>
    </tr>
    <tr id="table_6_row_26" class="text">
        <td class="english">Ponder the path of your feet, And let all your ways be established.</td>
        <td class="arabic">مَهِّدْ سَبِيلَ رِجْلِكَ فَتَثْبُتَ كُلُّ طُرُقِكَ.</td>
    </tr>
    <tr id="table_6_row_27" class="text">
        <td class="english">Do not turn to the right or the left; Remove your foot from evil.</td>
        <td class="arabic">لاَ تَمِلْ يَمْنَةً وَلاَ يَسْرَةً. بَاعِدْ رِجْلَكَ عَنِ الشَّرِّ.</td>
    </tr>
    <tr id="table_6_row_28" class="text">
        <td class="english">My son, pay attention to my wisdom; Lend your ear to my understanding,</td>
        <td class="arabic">يَا ابْنِي أَصْغِ إِلَى حِكْمَتِي. أَمِلْ أُذْنَكَ إِلَى فَهْمِي</td>
    </tr>
    <tr id="table_6_row_29" class="text">
        <td class="english">That you may preserve discretion, And your lips may keep knowledge.</td>
        <td class="arabic">لِحِفْظِ التَّدَابِيرِ وَلِتَحْفَظَ شَفَتَاكَ مَعْرِفَةً.</td>
    </tr>
    <tr id="table_6_row_30" class="text">
        <td class="english">For the lips of an immoral woman drip honey, And her mouth is smoother than oil;</td>
        <td class="arabic">لأَنَّ شَفَتَيِ الْمَرْأَةِ الأَجْنَبِيَّةِ تَقْطُرَانِ عَسَلاً وَحَنَكُهَا أَنْعَمُ مِنَ الزَّيْتِ.</td>
    </tr>
    <tr id="table_6_row_31" class="text">
        <td class="english">But in the end she is bitter as wormwood, Sharp as a two-edged sword.</td>
        <td class="arabic">لَكِنَّ عَاقِبَتَهَا مُرَّةٌ كَالأَفْسَنْتِينِ. حَادَّةٌ كَسَيْفٍ ذِي حَدَّيْنِ.</td>
    </tr>
    <tr id="table_6_row_33" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>
</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(41:6, 1)
        <span class="arabic-caption">المزمور قبطي<br>(41:6, 1)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">And if he comes to see me, he speaks lies;</td>
            <td class="coptic">Ⲛⲁϥⲛⲏⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲡⲉ ⲉ̀ⲛⲁⲩ ⲛⲁϥⲥⲁϫⲓ ⲛ̀ⲟⲩⲙⲉⲧ ⲉ̀ⲫ̀ⲗⲏⲟⲩ : </td>
            <td class="arabic">كان يدخل لينظر فكان يتكلم باطلاً. </td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">His heart gathers iniquity to itself; When he goes out, he tells it.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲡⲉϥϩⲏⲧ ⲁϥⲑⲱⲟⲩϯ ⲛⲁϥ ⲛ̀ⲟⲩⲁⲛⲟⲙⲓⲁ̀. </td>
            <td class="arabic">وقلبه جمع له اثماً.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Blessed is he who considers the poor; </td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁⲧϥ ⲙ̀ⲫⲏⲉⲑⲛⲁⲕⲁϯ ⲉ̀ϫⲉⲛ ⲟⲩϩⲏⲕⲓ ⲛⲉⲙ ⲟⲩϫⲱⲃ : </td>
            <td class="arabic">طوبى لمن يتفهم فى أمر المسكين والضعيف. </td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">The Lord will deliver him in time of trouble.</td>
            <td class="coptic">ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉⲧϩⲱⲟⲩ ⲉϥⲉ̀ⲛⲁϩⲙⲉϥ ⲛ̀ϫⲉ Ⲡ̀⳪</td>
            <td class="arabic">فى يوم السوء ينجيه الرب.</td>
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
            <td class="english">A chapter according to St. Luke,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار لوقا</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ<̀/td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲛⲁϥϧⲉⲛⲧ ⲇⲉ ⲡⲉ ⲛ̀ϫⲉ ⲡ̀ϣⲁⲓ ⲛ̀ⲧⲉ ⲛⲓⲁⲧϣⲉⲙⲏⲣ ⲫⲏⲉ̀ⲧⲟⲩ ⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ ⲡⲓⲡⲁⲥⲭⲁ : Ⲟⲩⲟϩ ⲛⲁⲩⲕⲱϯ ⲡⲉ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲥⲁϧ ϫⲉ ⲁⲩⲛⲁⲧⲁⲕⲟϥ ⲛ̀ⲁϣ ⲛ̀ⲣⲏϯ ⲛⲁⲩⲉⲣϩⲟϯ ⲅⲁⲣ ⲡⲉ ϧⲁⲧ̀ϩⲏ ⲙ̀ⲡⲓⲗⲁⲟⲥ : Ⲁ̀ ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ ⲇⲉ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡ̀ϩⲏⲧ ⲛ̀Ⲓⲟⲩⲇⲁⲥ ⲫⲏⲉ̀ⲧⲟⲩ ⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ ⲡⲓⲓⲥⲕⲁⲣⲓⲱⲧⲏⲥ ⲉⲟⲩⲁⲓ ⲡⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲙⲏⲧ ⲥⲛⲁⲩ. Ⲟⲩⲟϩ ⲁϥϣⲉⲛⲁϥ ⲁϥⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲥⲁⲧⲏⲅⲟⲩⲥ ⲉⲑⲃⲉ ⲡⲓⲣⲏϯ ⲉ̀ⲧⲉϥⲛⲁⲧⲏⲓϥ ⲉ̀ⲧⲟⲧⲟⲩ .<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(41:6,1)
    <span class="arabic-caption">المزمور<br>(41: 6 و 1)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">And if he comes to see me, he speaks lies; 

His heart gathers iniquity to itself; When he goes out, he tells it.</td>
        <td class="arabic">كان يدخل لينظر فكان يتكلم باطلاً. 

وقلبه جمع له اثماً. 

 ١طوبى لمن يتفهم فى أمر المسكين والضعيف. 

فى يوم السوء ينجيه الرب.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">Blessed is he who considers the poor; 

The Lord will deliver him in time of trouble.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Luke 22:1-6)
    <span class="arabic-caption">الانجيل<br>(لوقا 22: 1 - 6)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Now the Feast of Unleavened Bread drew near, which is called Passover.</td>
        <td class="arabic">وَقَرُبَ عِيدُ الْفَطِيرِ الَّذِي يُقَالُ لَهُ الْفِصْحُ.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">And the chief priests and the scribes sought how they might kill Him, for they feared the people.</td>
        <td class="arabic">وَكَانَ رُؤَسَاءُ الْكَهَنَةِ وَالْكَتَبَةُ يَطْلُبُونَ كَيْفَ يَقْتُلُونَهُ لأَنَّهُمْ خَافُوا الشَّعْبَ.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Then Satan entered Judas, surnamed Iscariot, who was numbered among the twelve.</td>
        <td class="arabic">فَدَخَلَ الشَّيْطَانُ فِي يَهُوذَا الَّذِي يُدْعَى الإِسْخَرْيُوطِيَّ وَهُوَ مِنْ جُمْلَةِ الاِثْنَيْ عَشَرَ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">So he went his way and conferred with the chief priests and captains, how he might betray Him to them.</td>
        <td class="arabic">فَمَضَى وَتَكَلَّمَ مَعَ رُؤَسَاءِ الْكَهَنَةِ وَقُوَّادِ الْجُنْدِ كَيْفَ يُسَلِّمُهُ إِلَيْهِمْ.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">And they were glad, and agreed to give him money.</td>
        <td class="arabic">فَفَرِحُوا وَعَاهَدُوهُ أَنْ يُعْطُوهُ فِضَّةً.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">So he promised and sought opportunity to betray Him to them in the absence of the multitude.</td>
        <td class="arabic">فَوَاعَدَهُمْ. وَكَانَ يَطْلُبُ فُرْصَةً لِيُسَلِّمَهُ إِلَيْهِمْ خِلْواً مِنْ جَمْعٍ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_20_row_12" class="intro">
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
        <td class="english">The exposition of the THIRD Hour of the DAY of WEDNESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الثالثة من يوم الأربعاء من البصخة المقدسة بركتها  تكون معنا أمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">When the feast of the unleavened bread, which is the Passover of the Jews was near, the scribes and the chief priests sought a way to kill Jesus.</td>
        <td class="arabic">ولما قرب عيد الفطير الذى هو فصح اليهود، كان الكتبة ورؤساء الكهنة يطلبون كيف يهلكون يسوع.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">However, they did not know what to do because they feared the public.</td>
        <td class="arabic">ولم يعلموا ماذا يصنعون، لأنهم كانوا يخافون من الجمع.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">But Satan found himself a place in the heart of his companion Judas Iscariot who was counted among the disciples but was Satan as the Lord called him.</td>
        <td class="arabic">فوجد الشيطان له مسكناً فى قلب رفيقه يهوذا الاسخريوطى وكان هذا محسوباً فى عداد التلاميذ، وكان شيطاناً كقول الرب.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">He went to the chief priests and the Sadducees to make a deal to deliver Jesus to them.</td>
        <td class="arabic">فمضى وخاطب رؤساء الكهنة والصدوقيين ليسلمه إليهم.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">The unclean disciple discussed with those who conspired with him how to deliver to them the Savior of the World.</td>
        <td class="arabic">فتكلم النجس مع أصحابه أن يسلم اليهم مخلص العالم.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">They were glad and paid him silver so that he may deliver Him to them in absence of the people.</td>
        <td class="arabic">ففرح الأنجاس الممتلئون غشاً فرحاً عظيماً. وقرروا معه أن يعطوه فضة حتى يسلمه اليهم خلواً من الجمع.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};