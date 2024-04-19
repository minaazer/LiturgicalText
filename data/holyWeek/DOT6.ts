import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOT6 = () => {
    const hourIntroHtml = hourIntro("SIXTH","السادسة","DAY of TUESDAY","يوم الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","14","15","SIXTH","السادسة","DAY of TUESDAY","يوم الثلاثاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲍⲉⲕⲓⲉⲗ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲛⲉ ⲛⲏⲉ̀ⲧⲉϥϫⲱ ⲙⲙⲱⲟⲩ ⲛ̀ϫⲉ Ⲁ̀ⲇⲱⲛⲁⲓ Ⲡ̀⳪ ϫⲉ ϩⲏⲡⲡⲉ ⲁ̀ⲛⲟⲕ ⲟⲩⲃⲏⲕ ⲟⲩⲟϩ ϯⲛⲁⲑⲱⲕⲉⲙ ⲛ̀ⲧⲁⲥⲏϥⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲥⲕⲱϩⲓ ⲟⲩⲟϩ ϯⲛⲁϥⲱϯ ⲛ̀ⲟⲩⲣⲉϥϭⲓⲛ̀ϫⲟⲛⲥ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏ̀ⲧⲕ ⲛⲉⲙ ⲟⲩⲁ̀ⲛⲟⲙⲟⲥ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲓⲏⲥⲟⲩ ⲛ̀ⲧⲉ Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: </td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲙⲁϩ̀ⲑⲏⲕ ⲉ̀ⲡⲓⲥⲏⲟⲩ ⲛ̀ⲧⲉⲕⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲕ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ : ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣϭⲓϣⲓⲡⲓ ⲉⲑⲃⲉ ⲧⲉⲕⲙⲉⲧⲁⲧⲥ̀ⲃⲱ : ⲟⲩⲟⲛ ⲟⲩϣⲱⲓⲡⲓ ⲅⲁⲣ ⲉ̀ϣⲁϥⲓ̀ⲛⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ .</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  ̀̀Ⲏⲥⲁⲏ̀ⲁⲥ  ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: </td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ϯϩⲟⲣⲁⲥⲓⲥ ⲉⲧⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲥ ⲛ̀ϫⲉ Ⲏⲥⲁⲏⲁⲥ ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲁⲙⲱⲥ : ⲑⲏⲉⲧⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲥ ϧⲁ Ϯⲓⲟⲩⲇⲉⲁ̀ ⲛⲉⲙ ϧⲁ Ⲓ̅ⲗ̅ⲏ̅ⲙ ϧⲉⲛ ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲛ̀Ⲟⲥⲓⲁⲥ ⲛⲉⲙ Ⲓⲱⲁⲑⲁⲙ ⲛⲉⲙ Ⲁⲭⲁⲥ ⲛⲉⲙ Ⲉⲍⲉⲕⲓⲁⲥ ⲛⲏⲉⲧⲁⲩⲉⲣⲟⲩⲣⲟ ϧⲉⲛ Ϯⲓⲟⲩⲇⲉⲁ̀</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Ezekiel 21:3-13)
    <span class="arabic-caption">النبوة الأولي<br>(حزقيال 21: 3 - 13)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Ezekiel the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من حزقيال النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">And say to the land of Israel, 'Thus says the Lord: "Behold, I am against you, and I will draw My sword out of its sheath and cut off both righteous and wicked from you.</td>
        <td class="arabic">وَقُلْ لأَرْضِ إِسْرَائِيلَ: هَكَذَا قَالَ الرَّبُّ: هَئَنَذَا عَلَيْكِ, وَأَسْتَلُّ سَيْفِي مِنْ غِمْدِهِ فَأَقْطَعُ مِنْكِ الصِّدِّيقَ وَالشِّرِّيرَ</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Because I will cut off both righteous and wicked from you, therefore My sword shall go out of its sheath against all flesh from south to north,</td>
        <td class="arabic">مِنْ حَيْثُ أَنِّي أَقْطَعُ مِنْكِ الصِّدِّيقَ وَالشِّرِّيرَ, فَلِذَلِكَ يَخْرُجُ سَيْفِي مِنْ غِمْدِهِ عَلَى كُلِّ بَشَرٍ مِنَ الْجَنُوبِ إِلَى الشِّمَالِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">that all flesh may know that I, the Lord, have drawn My sword out of its sheath; it shall not return anymore." '</td>
        <td class="arabic">فَيَعْلَمُ كُلُّ بَشَرٍ أَنِّي أَنَا الرَّبُّ, سَلَلْتُ سَيْفِي مِنْ غِمْدِهِ. لاَ يَرْجِعُ أَيْضاً.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Sigh therefore, son of man, with a breaking heart, and sigh with bitterness before their eyes.</td>
        <td class="arabic">أَمَّا أَنْتَ يَا ابْنَ آدَمَ فَتَنَهَّدْ بِانْكِسَارِ الْحَقَوَيْنِ, وَبِمَرَارَةٍ تَنَهَّدْ أَمَامَ عُيُونِهِمْ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And it shall be when they say to you, 'Why are you sighing?' that you shall answer, 'Because of the news; when it comes, every heart will melt, all hands will be feeble, every spirit will faint, and all knees will be weak as water. Behold, it is coming and shall be brought to pass,' says the Lord God."</td>
        <td class="arabic">وَيَكُونُ إِذَا سَأَلُوكَ: عَلَى مَ تَتَنَهَّدُ؟ أَنَّكَ تَقُولُ: عَلَى الْخَبَرِ, لأَنَّهُ جَاءٍ فَيَذُوبُ كُلُّ قَلْبٍ, وَتَرْتَخِي كُلُّ الأَيْدِي وَتَيْأَسُ كُلُّ رُوحٍ, وَكُلُّ الرُّكَبِ تَصِيرُ كَالْمَاءِ, هَا هِيَ آتِيَةٌ وَتَكُونُ, يَقُولُ السَّيِّدُ الرَّبُّ].</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Again the word of the Lord came to me, saying,</td>
        <td class="arabic">وَكَانَ إِلَيَّ كَلاَمُ الرَّبِّ:</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">"Son of man, prophesy and say, 'Thus says the Lord!' Say: 'A sword, a sword is sharpened And also polished!</td>
        <td class="arabic">[يَا ابْنَ آدَمَ, تَنَبَّأْ وَقُلْ: هَكَذَا قَالَ الرَّبُّ: سَيْفٌ سَيْفٌ حُدِّدَ وَصُقِلَ أَيْضاً.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Sharpened to make a dreadful slaughter, Polished to flash like lightning! Should we then make mirth? It despises the scepter of My Son, As it does all wood.</td>
        <td class="arabic">قَدْ حُدِّدَ لِيَذْبَحَ ذَبْحاً. قَدْ صُقِلَ لِيَبْرُقَ. فَهَلْ نَبْتَهِجُ؟ عَصَا ابْنِي تَزْدَرِي بِكُلِّ عُودٍ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">And He has given it to be polished, That it may be handled; This sword is sharpened, and it is polished To be given into the hand of the slayer.'</td>
        <td class="arabic">وَقَدْ أَعْطَاهُ لِيُصْقَلَ لِيُمْسَكَ بِالْكَفِّ. هَذَا السَّيْفُ قَدْ حُدِّدَ وَهُوَ مَصْقُولٌ لِيُسَلَّمَ لِيَدِ الْقَاتِلِ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">"Cry and wail, son of man; For it will be against My people, Against all the princes of Israel. Terrors including the sword will be against My people; Therefore strike your thigh.</td>
        <td class="arabic">اصْرُخْ وَوَلْوِلْ يَا ابْنَ آدَمَ, لأَنَّهُ يَكُونُ عَلَى شَعْبِي وَعَلَى كُلِّ رُؤَسَاءِ إِسْرَائِيلَ. أَهْوَالٌ بِسَبَبِ السَّيْفِ تَكُونُ عَلَى شَعْبِي. لِذَلِكَ اصْفِقْ عَلَى فَخْذِكَ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">"Because it is a testing, And what if the sword despises even the scepter? The scepter shall be no more," says the Lord God.</td>
        <td class="arabic">لأَنَّهُ امْتِحَانٌ. وَمَاذَا إِنْ لَمْ تَكُنْ أَيْضاً الْعَصَا الْمُزْدَرِيَةُ يَقُولُ السَّيِّدُ الرَّبُّ؟</td>
    </tr>
    <tr id="table_3_row_16" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Sirach 4:20-5:2)
    <span class="arabic-caption">النبوة الثانية<br>(يشوع بن سيراخ 4: 20 - 5: 2)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Joshua, the son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يشوع بن سيراخ النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Observe the right time, and beware of evil;
and do not bring shame on yourself.</td>
        <td class="arabic">إغتَنِمِ الفُرصَةَ وحاذِرِ الشَّرَ، يا اَبْني
وبِنَفْسِكَ لا تخْجَلْ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">For there is a shame which brings sin, and there is a shame which is glory and favor.</td>
        <td class="arabic">مِنَ الخَجَلِ ما يَجلِبَ الخَطيئةَ،
ومِنهُ ما هوَ شَرَفٌ وَنِعْمةٌ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">Do not show partiality, to your own harm, or deference, to your downfall.</td>
        <td class="arabic">لا تُسايِرْ أحَدًا لِئلاَ تَضُرَ نفْسَكَ
ولا تَدَعْ حَياءَكَ يُسَبِّبُ فَشَلَكَ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Do not refrain from speaking at the crucial time, and do not hide your wisdom.</td>
        <td class="arabic">لا تسْكُتْ حينَ يَنفَعُ الكلامُ
وحِكمَتُكَ لا تَحجُبْها.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">For wisdom is known through speech, and education through the words of the tongue.</td>
        <td class="arabic">فالحِكمَةُ تَبـينُ بِالكلامِ،
وبِنُطقِ اللِّسانِ يَبـينُ التَّأْدِيبُ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Never speak against the truth, but be mindful of your ignorance.</td>
        <td class="arabic">لا تَتكَلَّمْ خِلافًا لِلحَقٌ،
بلِ اَسْكُت خَجَلا مِنْ جَهالَتِكَ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">Do not be ashamed to confess your sins, and do not try to stop the current of a river.</td>
        <td class="arabic">لا تخجَلْ أنْ تَعتَرِفَ بِأخْطائِكَ،
ولا تُغالِبْ مَجْرى النَّهْرِ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">Do not subject yourself to a foolish fellow, nor show partiality to a ruler.</td>
        <td class="arabic">لا تُسَلِّطِ الأَحمَقَ علَيكَ،
ولا تُسايِرِ الرَّجُلَ المَقْتَدِرَ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">Strive even to death for the truth and the Lord God will fight for you.</td>
        <td class="arabic">دافِـعْ عَنِ الحَقٌ حتـى الموتِ،
والرّبُّ الإلَهُ يُقاتِلُ معَكَ.</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">Do not be reckless in your speech, or sluggish and remiss in your deeds.</td>
        <td class="arabic">لا تكُنْ مُتَسَرِّعًا في كلامِكَ،
ولا كَسولا بَطيئًا في عَمَلِكَ.</td>
    </tr>
    <tr id="table_4_row_14" class="text">
        <td class="english">Do not be like a lion in your home,
nor be a faultfinder with your servants.</td>
        <td class="arabic">لا تكُنْ أسدًا في بَيتِكَ،
ولا مُتَعَجرِفًا بَينَ خَدَمِكَ.</td>
    </tr>
    <tr id="table_4_row_15" class="text">
        <td class="english">Let not your hand be extended to receive, but withdrawn when it is time to repay.</td>
        <td class="arabic">لا تَفتَحْ كَفَّكَ لِلأَخذِ،
وتُغلِقْها عِندَ العَطاءِ.</td>
    </tr>
    <tr id="table_4_row_16" class="text">
        <td class="english">Do not set your heart on your wealth,
nor say, “I have enough.”</td>
        <td class="arabic">لاَ تَعتَمِدْ على أموالِكَ،
ولا تقُلْ: «أكتَفي».</td>
    </tr>
    <tr id="table_4_row_17" class="text">
        <td class="english">Do not follow your inclination and strength, walking according to the desires of your heart.</td>
        <td class="arabic">لا تَتبَعْ مُيولَكَ ورَغائِبَكَ
وفي شهَواتِكَ لا تَسلُكْ.</td>
    </tr>
    <tr id="table_4_row_19" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Isaiah 1:1-9)
    <span class="arabic-caption">النبوة الثالثة<br>(أشعياء 1 : 1 - 9)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">The vision of Isaiah the son of Amoz, which he saw concerning Judah and Jerusalem in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah.</td>
        <td class="arabic">رُؤْيَا إِشَعْيَاءَ بْنِ آمُوصَ الَّتِي رَآهَا عَلَى يَهُوذَا وَأُورُشَلِيمَ فِي أَيَّامِ عُزِّيَّا وَيُوثَامَ وَآحَازَ وَحَزَقِيَّا مُلُوكِ يَهُوذَا:</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">Hear, O heavens, and give ear, O earth! For the Lord has spoken: " I have nourished and brought up children, And they have rebelled against Me;</td>
        <td class="arabic">اِسْمَعِي أَيَّتُهَا السَّمَاوَاتُ وَأَصْغِي أَيَّتُهَا الأَرْضُ لأَنَّ الرَّبَّ يَتَكَلَّمُ: «رَبَّيْتُ بَنِينَ وَنَشَّأْتُهُمْ أَمَّا هُمْ فَعَصُوا عَلَيَّ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">The ox knows its owner And the donkey its master's crib; But Israel does not know, My people do not consider."</td>
        <td class="arabic">اَلثَّوْرُ يَعْرِفُ قَانِيهِ وَالْحِمَارُ مِعْلَفَ صَاحِبِهِ أَمَّا إِسْرَائِيلُ فَلاَ يَعْرِفُ. شَعْبِي لاَ يَفْهَمُ».</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Alas, sinful nation, A people laden with iniquity, A brood of evildoers, Children who are corrupters! They have forsaken the Lord, They have provoked to anger The Holy One of Israel, They have turned away backward.</td>
        <td class="arabic">وَيْلٌ لِلأُمَّةِ الْخَاطِئَةِ الشَّعْبِ الثَّقِيلِ الإِثْمِ نَسْلِ فَاعِلِي الشَّرِّ أَوْلاَدِ مُفْسِدِينَ! تَرَكُوا الرَّبَّ اسْتَهَانُوا بِقُدُّوسِ إِسْرَائِيلَ ارْتَدُّوا إِلَى وَرَاءٍ.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Why should you be stricken again? You will revolt more and more. The whole head is sick, And the whole heart faints.</td>
        <td class="arabic">عَلَى مَ تُضْرَبُونَ بَعْدُ؟ تَزْدَادُونَ زَيَغَاناً! كُلُّ الرَّأْسِ مَرِيضٌ وَكُلُّ الْقَلْبِ سَقِيمٌ.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">From the sole of the foot even to the head, There is no soundness in it, But wounds and bruises and putrefying sores; They have not been closed or bound up, Or soothed with ointment.</td>
        <td class="arabic">مِنْ أَسْفَلِ الْقَدَمِ إِلَى الرَّأْسِ لَيْسَ فِيهِ صِحَّةٌ بَلْ جُرْحٌ وَأَحْبَاطٌ وَضَرْبَةٌ طَرِيَّةٌ لَمْ تُعْصَرْ وَلَمْ تُعْصَبْ وَلَمْ تُلَيَّنْ بِالزَّيْتِ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">Your country is desolate, Your cities are burned with fire; Strangers devour your land in your presence; And it is desolate, as overthrown by strangers.</td>
        <td class="arabic">بِلاَدُكُمْ خَرِبَةٌ. مُدُنُكُمْ مُحْرَقَةٌ بِالنَّارِ. أَرْضُكُمْ تَأْكُلُهَا غُرَبَاءُ قُدَّامَكُمْ وَهِيَ خَرِبَةٌ كَانْقِلاَبِ الْغُرَبَاءِ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">So the daughter of Zion is left as a booth in a vineyard, As a hut in a garden of cucumbers, As a besieged city.</td>
        <td class="arabic">فَبَقِيَتِ ابْنَةُ صِهْيَوْنَ كَمِظَلَّةٍ فِي كَرْمٍ كَخَيْمَةٍ فِي مَقْثَأَةٍ كَمَدِينَةٍ مُحَاصَرَةٍ.</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">Unless the Lord of hosts Had left to us a very small remnant, We would have become like Sodom, We would have been made like Gomorrah.</td>
        <td class="arabic">لَوْلاَ أَنَّ رَبَّ الْجُنُودِ أَبْقَى لَنَا بَقِيَّةً صَغِيرَةً لَصِرْنَا مِثْلَ سَدُومَ وَشَابَهْنَا عَمُورَةَ.</td>
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
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(18:48,17)
        <span class="arabic-caption">المزمور قبطي<br>(18:48,17)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">My deliverer from angry enemies; </td>
            <td class="coptic">Ⲡⲁⲣⲉϥ ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲁϫⲁϫⲓ ⲛ̀ⲣⲉϥϫⲱⲛⲧ :</td>
            <td class="arabic">منقذي من أعدائي الراجزين </td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">You shall set me on high above them that rise up against me; </td>
            <td class="coptic">ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲧⲱⲟⲩⲛ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ ⲉⲕⲉ̀ϭⲟⲥⲓ :</td>
            <td class="arabic">ومن الذين يقومون على ترفعني.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">You shall deliver me from the unrighteous man. </td>
            <td class="coptic">Ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗϩⲁ ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲟϫⲓ ⲉϥⲉ̀ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲁϫⲁϫⲓ ⲉⲧϫⲟⲣ:</td>
            <td class="arabic">ومن الرجل الظالم تنجيني </td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">He will deliver me from my mighty enemies, and from them that hate me. </td>
            <td class="coptic">ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲙⲟⲥϯ ⲙ̀ⲙⲟⲓ</td>
            <td class="arabic">يخلصني من أعدائي الاشداء ومن أيدي الذين يبغضونني.</td>
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
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ<̀/td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲟⲛ ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ⲛ̀ϫⲉ Ⲓ̅ⲏ̅ⲥ ⲉϥϫⲱⲙ̀ⲙⲟⲥ : ϫⲉ ⲁ̀ⲛⲟⲕ ⲡⲉ ⲫ̀ⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ : ⲫⲏⲉⲑⲛⲁⲙⲟϣⲓ ⲛ̀ⲥⲱⲓ ⲛ̀ⲛⲉϥⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲭⲁⲕⲓ : ⲁⲗⲗⲁ ⲉϥⲉ̀ϭⲓ ⲙ̀ⲫ̀ⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ : Ⲡⲉϫⲉ ⲛⲓⲫⲁⲣⲓⲥⲉⲟⲥ ⲛⲁϥ ϫⲉ ⲛ̀ⲑⲟⲕ ⲙ̀ⲙⲁⲩⲁⲧⲕ ⲉ̀ⲧⲉⲣ ⲙⲉⲑⲣⲉ ϧⲁⲣⲟⲕ: ⲧⲉⲕⲙⲉⲧⲙⲉⲑⲣⲉ ⲟⲩⲙⲏⲓ ⲁⲛ ⲧⲉ Ⲁϥⲉ̀ⲣⲟⲩⲱ̀ ⲛ̀ϫⲉ Ⲓ̅ⲏ̅ⲥ ⲟⲩⲟϩ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ : ϫⲉ ⲕⲁⲛ ⲉ̀ϣⲱⲡ ⲁ̀ⲛⲟⲕ ⲁⲓϣⲁⲛ ⲉⲣⲙⲉⲑⲣⲉ ϧⲁⲣⲟⲓ ⲧⲁⲙⲉⲧⲙⲉⲑⲣⲉ ⲟⲩⲙⲏⲓ ⲧⲉ : ϫⲉ ϯⲉ̀ⲙⲓ ϫⲉ ⲉ̀ⲧⲁⲓⲓ̀ ⲉ̀ⲃⲟⲗⲑⲱⲛ ⲓⲉ ⲉⲓⲛⲁϣⲉⲛⲏⲓ ⲉ̀ⲑⲱⲛ : ⲛ̀ⲑⲱⲧⲉⲛ ⲇⲉ ⲧⲉⲧⲉⲛⲉ̀ⲙⲓ ⲁⲛ ϫⲉ ⲉ̀ⲧⲁⲓⲓ̀ ⲉ̀ⲃⲟⲗⲑⲱⲛ ⲓⲉ ⲉⲓⲛⲁϣⲉⲛⲏⲓ ⲉ̀ⲑⲱⲛ.<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(18:48,17)
    <span class="arabic-caption">المزمور<br>(18: 48 و 17)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">My deliverer from angry enemies; 

You shall set me on high above them that rise up against me; 

You shall deliver me from the unrighteous man.</td>
        <td class="arabic">منقذى من أعدائى الراجزين 

ومن الذين يقومون على ترفعنى.

ومن الرجل الظالم تنجينى 

 ١٧يخلصنى من أعدائى الاشداء ومن أيدى الذين يبغضوننى.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">He will deliver me from my mighty enemies, and from them that hate me.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(John 8:12-20)
    <span class="arabic-caption">الانجيل<br>(يوحنا 8: 12 – 20)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Then Jesus spoke to them again, saying, "I am the light of the world. He who follows Me shall not walk in darkness, but have the light of life."</td>
        <td class="arabic">ثُمَّ كَلَّمَهُمْ يَسُوعُ أَيْضاً قَائِلاً: «أَنَا هُوَ نُورُ الْعَالَمِ. مَنْ يَتْبَعْنِي فلاَ يَمْشِي فِي الظُّلْمَةِ بَلْ يَكُونُ لَهُ نُورُ الْحَيَاةِ».</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">The Pharisees therefore said to Him, "You bear witness of Yourself; Your witness is not true."</td>
        <td class="arabic">فَقَالَ لَهُ الْفَرِّيسِيُّونَ: «أَنْتَ تَشْهَدُ لِنَفْسِكَ. شَهَادَتُكَ لَيْسَتْ حَقّاً».</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Jesus answered and said to them, "Even if I bear witness of Myself, My witness is true, for I know where I came from and where I am going; but you do not know where I come from and where I am going.</td>
        <td class="arabic">أَجَابَ يَسُوعُ: «وَإِنْ كُنْتُ أَشْهَدُ لِنَفْسِي فَشَهَادَتِي حَقٌّ لأَنِّي أَعْلَمُ مِنْ أَيْنَ أَتَيْتُ وَإِلَى أَيْنَ أَذْهَبُ. وَأَمَّا أَنْتُمْ فلاَ تَعْلَمُونَ مِنْ أَيْنَ آتِي وَلاَ إِلَى أَيْنَ أَذْهَبُ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">You judge according to the flesh; I judge no one.</td>
        <td class="arabic">أَنْتُمْ حَسَبَ الْجَسَدِ تَدِينُونَ أَمَّا أَنَا فَلَسْتُ أَدِينُ أَحَداً.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">And yet if I do judge, My judgment is true; for I am not alone, but I am with the Father who sent Me.</td>
        <td class="arabic">وَإِنْ كُنْتُ أَنَا أَدِينُ فَدَيْنُونَتِي حَقٌّ لأَنِّي لَسْتُ وَحْدِي بَلْ أَنَا وَالآبُ الَّذِي أَرْسَلَنِي.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">It is also written in your law that the testimony of two men is true.</td>
        <td class="arabic">وَأَيْضاً فِي نَامُوسِكُمْ مَكْتُوبٌ: أَنَّ شَهَادَةَ رَجُلَيْنِ حَقٌّ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">I am One who bears witness of Myself, and the Father who sent Me bears witness of Me."</td>
        <td class="arabic">أَنَا هُوَ الشَّاهِدُ لِنَفْسِي وَيَشْهَدُ لِي الآبُ الَّذِي أَرْسَلَنِي».</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">Then they said to Him, "Where is Your Father?" Jesus answered, "You know neither Me nor My Father. If you had known Me, you would have known My Father also."</td>
        <td class="arabic">فَقَالُوا لَهُ: «أَيْنَ هُوَ أَبُوكَ؟» أَجَابَ يَسُوعُ: «لَسْتُمْ تَعْرِفُونَنِي أَنَا وَلاَ أَبِي. لَوْ عَرَفْتُمُونِي لَعَرَفْتُمْ أَبِي أَيْضاً».</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">These words Jesus spoke in the treasury, as He taught in the temple; and no one laid hands on Him, for His hour had not yet come.</td>
        <td class="arabic">هَذَا الْكلاَمُ قَالَهُ يَسُوعُ فِي الْخِزَانَةِ وَهُوَ يُعَلِّمُ فِي الْهَيْكَلِ. وَلَمْ يُمْسِكْهُ أَحَدٌ لأَنَّ سَاعَتَهُ لَمْ تَكُنْ قَدْ جَاءَتْ بَعْدُ.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
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
        <td class="english">The exposition of the SIXTH Hour of the DAY of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة السادسة من يوم الثلاثاء من البصخة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">The True God who came to the world says, “I am the Light of the world” and what He says is true.</td>
        <td class="arabic">الاله الحقيقى الذى أتى إلى العالم يقول، وقوله الحق من فمه غير الكاذب، اننى أنا نور العالم.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">He who follows Me shall not walk in the darkness, but will have the Light of life which will lead him to the way of the truth.</td>
        <td class="arabic">ومن يتبعنى لن يمشى فى الظلام بل يجد نور الحياة يهديه إلى طريق الحق.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">Jesus, You are verily the Light of the Father and the person from His essence,</td>
        <td class="arabic">أنت هو بالحقيقة نور الآب، والشخص الذى من جوهره</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">whose glory shines brightly over the creation unto eternity.</td>
        <td class="arabic">الذى يشرق مجده بلمعان عظيم على المسكونة،  فى آخر الدهور</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">He drew us, the Gentiles, to know the true Light and enlightened us with the light of His divinity,</td>
        <td class="arabic">جذبنا معاً نحن معشر الشعوب الغريبة إلى معرفة الحق باسمه. وأضاء علينا بنور لاهوته،</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">we who are sitting in the darkness and shadow of death.</td>
        <td class="arabic">نحن الجلُوس فى الظلمة وظلال الموت.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">But the Jews who are His chosen ones, who rejected Him, were thrown into the darkness of hell forever</td>
        <td class="arabic">أما اليهود المُخالفون الذين هم خاصته فألقاهم فى ظلمة الجحيم إلى الأبد،</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">because they refused His words and condemned Him to death.</td>
        <td class="arabic">لأنهم رفضوا أقواله ولم يقبلوه، وحكموا عليه بحكم الموت.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">Let us glorify His Holy name and praise Him forever.</td>
        <td class="arabic">فلنعظم نحن اسمه القدوس ونمجده بغير فتور.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};