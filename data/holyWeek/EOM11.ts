import { hourIntro, paschalPraise1 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, nighttimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const EOM11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","EVE of MONDAY","ليلة الإثنين");
    const paschalPraiseHtml = paschalPraise1("4","4","5","ELEVENTH","الحادية عشر","EVE of MONDAY","ليلة الإثنين");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("11");
    const expositionConclusionHtml = expositionConclusion("13");
    const nighttimeLitaniesHtml = nighttimeLitanies("14");
    const evnotiNaiNanHtml = evnotiNaiNan("15");
    const endOfServiceHymnHtml = endOfServiceHymn("16");



return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲙⲓⲭⲉⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲡ⳪ ⲇⲉ ⲉϥⲉ̀ϭⲓⲙⲱⲓⲧ ⲛⲱⲟⲩ ⲟⲩⲟϩ ⲉϥⲉϫⲟⲥ ϫⲉ ⲥⲱⲧⲉⲙ ⲉ̀ⲛⲁⲓ ⲛⲓ ⲁⲣⲭⲱⲛ ⲧⲉ ⲡ̀ⲏⲓ ⲛ̀Ⲓⲁⲕⲱⲃ ⲛⲉⲙ ⲛⲓⲥⲟⲧⲡ ⲛⲧⲉ ⲡ̀ⲏⲓ ⲙ̀ⲡⲒ̀̅ⲥ̅ⲗ ⲙ̀ⲏⲫⲱⲧⲉⲛ ⲁⲛ ⲡⲉ ⲉ̀ⲉ̀ⲙⲓ ⲉ̀ⲡⲓϩⲁⲡ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Micah 3:1-4)
    <span class="arabic-caption">النبوة الأولي<br>(ميخا 3: 1 - 4)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Micah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من ميخا النبي بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">And I said: "Hear now, O heads of Jacob, And you rulers of the house of Israel: Is it not for you to know justice?</td>
        <td class="arabic">وَقُلْتُ: «اسْمَعُوا يَا رُؤَسَاءَ يَعْقُوبَ وَقُضَاةَ بَيْتِ إِسْرَائِيلَ. أَلَيْسَ لَكُمْ أَنْ تَعْرِفُوا الْحَقَّ؟</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">You who hate good and love evil; Who strip the skin from My people, And the flesh from their bones;</td>
        <td class="arabic">الْمُبْغِضِينَ الْخَيْرَ وَالْمُحِبِّينَ الشَّرَّ النَّازِعِينَ جُلُودَهُمْ عَنْهُمْ وَلَحْمَهُمْ عَنْ عِظَامِهِمْ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Who also eat the flesh of My people, Flay their skin from them, Break their bones, And chop them in pieces Like meat for the pot, Like flesh in the caldron."</td>
        <td class="arabic">وَالَّذِينَ يَأْكُلُونَ لَحْمَ شَعْبِي وَيَكْشُطُونَ جِلْدَهُمْ عَنْهُمْ وَيُهَشِّمُونَ عِظَامَهُمْ وَيُشَقِّقُونَ كَمَا فِي الْقِدْرِ وَكَاللَّحْمِ فِي وَسَطِ الْمِقْلَى».</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Then they will cry to the Lord, But He will not hear them; He will even hide His face from them at that time, Because they have been evil in their deeds.</td>
        <td class="arabic">حِينَئِذٍ يَصْرُخُونَ إِلَى الرَّبِّ فَلاَ يُجِيبُهُمْ بَلْ يَسْتُرُ وَجْهَهُ عَنْهُمْ فِي ذَلِكَ الْوَقْتِ كَمَا أَسَاءُوا أَعْمَالَهُمْ.</td>
    </tr>
    <tr id="table_3_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(18:17-18)
        <span class="arabic-caption">المزمور قبطياً<br>(17: 16 ، 17)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">He delivered me from my strong enemy,</td>
            <td class="coptic">Ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲁϫⲁϫⲓ ⲉⲧϫⲟⲣ :</td>
            <td class="arabic">نَجِّينِي مِنْ أَعْدَائِي الْأَقْوِيَاءِ ،</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">From those who hated me,</td>
            <td class="coptic">ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲙⲟⲥϯ ⲙ̀ⲙⲟⲓ.</td>
            <td class="arabic">وَمِنْ أَيْدِي الَّذِينَ يُبْغِضُونَنِي،</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">For they were too strong for me.</td>
            <td class="coptic">Ϫⲉ ⲁⲩⲧⲁϫⲣⲟ ⲉ̀ϩⲟⲧⲉⲣⲟⲓ :</td>
            <td class="arabic">لأنَّهُمْ تَقَوَّوْا عَلَيَّ أَكْثَرَ مِنِّي ،</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">They confronted me in the day of my calamity.</td>
            <td class="coptic">ⲁⲩⲉⲣϣⲟⲣⲡ ⲉ̀ⲣⲟⲓ ϧⲉⲛ ⲡ̀ⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲡⲁⲧ̀ϩⲉⲙⲕⲟ :</td>
            <td class="arabic">بَادَرُونِي فِي يَوْمِ ضِيقِي</td>
        </tr>
        <tr id="table_6_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_8" title="Coptic Gospel">
        <caption class="caption" id="caption_table_8">Coptic Gospel
        <span class="arabic-caption">الإنجيل قبطياً</span></caption>
        <tr id="table_8_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲧⲟⲧⲉ ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ϩⲁ Ⲓ̅ⲏ̅ⲥ ⲥⲁ ⲡ̀ⲥⲁ ⲙ̀ⲙⲁⲩⲁⲧⲟⲩ ⲟⲩⲟϩ ⲡⲉϫⲱⲟⲩ ⲛⲁϥ ϫⲉ ⲉⲑⲃⲉⲟⲩ ⲁ̀ⲛⲟⲛ ⲙ̀ⲡⲉⲛϣ̀ϫⲉⲙϫⲟⲙ ⲉ̀ϩⲓⲧϥ ⲉ̀ⲃⲟⲗ : Ⲛ̀ⲑⲟϥ ⲇⲉ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ ϫⲉ ⲉⲑⲃⲉ ⲡⲉⲧⲉⲛⲕⲟⲩϫⲓ ⲛ̀ⲛⲁϩϯ ⲁ̀ⲙⲏⲛ ⲅⲁⲣ ϯϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ  ϫⲉ ⲉ̀ϣⲱⲡ ⲉ̀ⲟⲩⲟⲛ ⲧⲉⲧⲉⲛ ⲛⲁϩϯ ⲙ̀ⲙⲁⲩ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲛⲁⲫⲣⲓ ⲛ̀ϣⲉⲗⲧⲁⲙ ⲉ̀ⲣⲉⲧⲉⲛ ⲉ̀ϫⲟⲥ ⲙ̀ⲡⲁⲓ ⲧⲱⲟⲩ ϫⲉ ⲟⲩⲱ̀ⲧⲉⲃ ⲉ̀ⲃⲟⲗ ⲧⲁⲓ ⲉ̀ⲙ̀ⲛⲏ ⲟⲩⲟϩ ⲉϥⲉ̀ⲟⲩⲱ̀ⲧⲉⲃ ⲟⲩⲟϩ ⲛ̀ⲛⲉϩ̀ⲗⲓ ⲉ̀ⲣⲁⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉⲛⲑⲏⲛⲟⲩ : Ⲟⲩⲟϩ ⲡⲁⲓⲅⲉⲛⲟⲥ ⲙ̀ⲡⲁϥⲓ̀ ⲉ̀ⲃⲟⲗϧⲉⲛ ϩⲗⲓ ⲉ̀ⲃⲏⲗ ⲛ̀ⲟⲩⲡ̀ⲣⲟⲥⲉⲩⲭⲏ ⲛⲉⲙ ⲟⲩⲛⲏⲥⲧⲓⲁ̀. <br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(18:17-18)
    <span class="arabic-caption">المزمور<br>(17: 16 ، 17)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">He delivered me from my strong enemy, From those who hated me, For they were too strong for me.</td>
        <td class="arabic">نَجِّينِي مِنْ أَعْدَائِي الْأَقْوِيَاءِ ، وَمِنْ أَيْدِي الَّذِينَ يُبْغِضُونَنِي، لأنَّهُمْ تَقَوَّوْا عَلَيَّ أَكْثَرَ مِنِّي ،</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">They confronted me in the day of my calamity.</td>
        <td class="arabic">بَادَرُونِي فِي يَوْمِ ضِيقِي</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Matthew 17:19-23)
    <span class="arabic-caption">الانجيل<br>(متى ١٧ : ١٩-٢٣)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">Then the disciples came to Jesus privately and said, "Why could we not cast it out?"</td>
        <td class="arabic">ثُمَّ تَقَدَّمَ التَّلاَمِيذُ إِلَى يَسُوعَ عَلَى انْفِرَادٍ وَقَالُوا: «لِمَاذَا لَمْ نَقْدِرْ نَحْنُ أَنْ نُخْرِجَهُ؟»</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">So Jesus said to them, "Because of your unbelief; for assuredly, I say to you, if you have faith as a mustard seed, you will say to this mountain, 'Move from here to there,' and it will move; and nothing will be impossible for you.</td>
        <td class="arabic">فَقَالَ لَهُمْ يَسُوعُ: «لِعَدَمِ إِيمَانِكُمْ. فَالْحَقَّ أَقُولُ لَكُمْ: لَوْ كَانَ لَكُمْ إِيمَانٌ مِثْلُ حَبَّةِ خَرْدَلٍ لَكُنْتُمْ تَقُولُونَ لِهَذَا الْجَبَلِ: انْتَقِلْ مِنْ هُنَا إِلَى هُنَاكَ فَيَنْتَقِلُ وَلاَ يَكُونُ شَيْءٌ غَيْرَ مُمْكِنٍ لَدَيْكُمْ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">However, this kind does not go out except by prayer and fasting."</td>
        <td class="arabic">وَأَمَّا هَذَا الْجِنْسُ فَلاَ يَخْرُجُ إِلاَّ بِالصَّلاَةِ وَالصَّوْمِ».</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">Now while they were staying in Galilee, Jesus said to them, "The Son of Man is about to be betrayed into the hands of men,</td>
        <td class="arabic">وَفِيمَا هُمْ يَتَرَدَّدُونَ فِي الْجَلِيلِ قَالَ لَهُمْ يَسُوعُ: «ابْنُ الإِنْسَانِ سَوْفَ يُسَلَّمُ إِلَى أَيْدِي النَّاسِ</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">and they will kill Him, and the third day He will be raised up." And they were exceedingly sorrowful."</td>
        <td class="arabic">فَيَقْتُلُونَهُ وَفِي الْيَوْمِ الثَّالِثِ يَقُومُ». فَحَزِنُوا جِدّاً.</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">اسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_11" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">

${nighttimeExpositionIntroHtml}

<table id="table_12" title="Exposition">
    <caption id="caption_table_12" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">The exposition of the ELEVENTH Hour of the EVE of MONDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من ليلة الاثنين من البصخة المقدسة بركتها تكون معنا. آمين</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Listen to the Merciful and Beneficent who is full of goodness and compassion.</td>
        <td class="arabic">أ سمعوا الرؤوف الصانع الخيرات ذا الصلاح</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">He praises prayer and honors fasting because they are the foundation of all virtues.</td>
        <td class="arabic">والتحنن يُمجِّد الصلاة ويكرِّم الصوم، لأنهما أساس سائر الفضائل.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">When His disciples asked Him, “Why could we not cast the demon?” He said to them, “Because of your little faith, the demon would not come out.</td>
        <td class="arabic">فإن تلاميذه عندما سألوه قائلين: "لماذا لم نقدر نحن أن نخرج الشيطان؟"، قال لهم: "لأجل عدم إيمانكم امتنع الشيطان أن يخرج"</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">For truly I say to you, if you have faith, you will say to this mountain ‘Move from here to there,’ it will move, and nothing will be impossible for you” for everything is possible for the believer.</td>
        <td class="arabic">ثم قال الرب: "أقول لكم: لو كان لكم إيمان لكنتم تقولون لهذا الجبل انتقل إلى هنا فلوقته سريعاً كان يسمع لكم ولا يعسر عليكم شئ، فان كل شئ مستطاع للمؤمن".</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">Let us cherish a great hope and a true faith free of doubt. Let us be zealous in charity that surpasses everything for He who loves believes all things.</td>
        <td class="arabic">فلنقتن لنا رجاء عظيماً، وايماناً حقيقياً بغير شك ولننم في المحبة التي تفوق كل شئ، فإن الذي يحب يصدق كل شئ.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">Therefore, let us love fasting and pray constantly so that we may gain His promises.</td>
        <td class="arabic">ولنواظب على الصلاة، ونحب الصوم لكي نفوز بمواعيده.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${nighttimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>
<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOM1sc" class="navigationButton">
        <td class="englishButton">The FIRST Hour of the EVE of MONDAY</td>
        <td class="arabicButton">الساعة الأولى من يوم الإثنين</td>
    </tr>
</table>
</div>
`;

};