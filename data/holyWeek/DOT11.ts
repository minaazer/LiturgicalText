import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOT11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of TUESDAY","يوم الثلاثاء");
    const paschalPraiseHtml = paschalPraise2("4","14","15","ELEVENTH","الحادية عشر","DAY of TUESDAY","يوم الثلاثاء");
    const copticGospelIntroHtml = copticGospelIntro("17");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("21");
    const expositionConclusionHtml = expositionConclusion("23");
    const daytimeLitaniesHtml = daytimeLitanies("24");
    const evnotiNaiNanHtml = evnotiNaiNan("25");
    const endOfServiceHymnHtml = endOfServiceHymn("26");



return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲉⲥⲉ̀ϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ ⲉ̀ϫⲉⲛ ⲧⲱⲟⲩ ⲛⲓⲃⲉⲛ ⲉⲧϭⲟⲥⲓ : ⲛⲉⲙ ⲉ̀ϫⲉⲛ ⲕⲁⲗⲁⲙⲫⲟ ⲛⲓⲃⲉⲛ ⲉⲧϩ̀ⲗⲟⲩⲗⲱⲟⲩ : ⲛ̀ϫⲉ ⲟⲩⲙⲱⲟⲩ ⲉϥⲥⲱⲕ ⲙⲡⲓⲉ̀ϩⲟⲟⲩ ⲉⲧⲉ ⲙⲙⲁⲩ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲛⲓⲡⲁⲣⲟⲙⲓⲁ̀ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ  ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ :ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲡⲁϣⲏⲣⲓ ⲁ̀ⲣⲉϩ ⲉ̀ⲛⲓⲛⲟⲙⲟⲥ ⲛ̀ⲧⲉ ⲡⲉⲕⲓⲱⲧ : ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣⲭⲱⲛ̀ⲥⲱⲕ ⲛ̀ⲛⲓⲥⲟϭⲛⲓ ⲛⲧⲉ ⲧⲉⲕⲙⲁⲩ : ⲙⲟⲣⲟⲩ ⲉ̀ⲧⲉⲕⲯⲩⲭⲏ ϧⲉⲛ ⲟⲩⲧⲁϫⲣⲟ : ⲛ̀ⲧⲉⲕⲁⲓⲧⲟⲩ ⲛ̀ⲟⲩⲭⲗⲁⲗ ⲉ̀ⲡⲉⲕⲙⲟϯ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">


<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 30: 25-30)
    <span class="arabic-caption">النبوة الأولي<br>(اشعياء 30: 25 - 30)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">There will be on every high mountain And on every high hill Rivers and streams of waters, In the day of the great slaughter, When the towers fall.</td>
        <td class="arabic">وَيَكُونُ عَلَى كُلِّ جَبَلٍ عَالٍ وَعَلَى كُلِّ أَكَمَةٍ مُرْتَفِعَةٍ سَوَاقٍ وَمَجَارِي مِيَاهٍ فِي يَوْمِ الْمَقْتَلَةِ الْعَظِيمَةِ حِينَمَا تَسْقُطُ الأَبْرَاجُ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Moreover the light of the moon will be as the light of the sun, And the light of the sun will be sevenfold, As the light of seven days, In the day that the Lord binds up the bruise of His people And heals the stroke of their wound.</td>
        <td class="arabic">وَيَكُونُ نُورُ الْقَمَرِ كَنُورِ الشَّمْسِ وَنُورُ الشَّمْسِ يَكُونُ سَبْعَةَ أَضْعَافٍ كَنُورِ سَبْعَةِ أَيَّامٍ فِي يَوْمٍ يَجْبُرُ الرَّبُّ كَسْرَ شَعْبِهِ وَيَشْفِي رَضَّ ضَرْبِهِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Behold, the name of the Lord comes from afar, Burning with His anger, And His burden is heavy; His lips are full of indignation, And His tongue like a devouring fire.</td>
        <td class="arabic">هُوَذَا اسْمُ الرَّبِّ يَأْتِي مِنْ بَعِيدٍ. غَضَبُهُ مُشْتَعِلٌ وَالْحَرِيقُ عَظِيمٌ. شَفَتَاهُ مُمْتَلِئَتَانِ سَخَطاً وَلِسَانُهُ كَنَارٍ آكِلَةٍ</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">His breath is like an overflowing stream, Which reaches up to the neck, To sift the nations with the sieve of futility; And there shall be a bridle in the jaws of the people, Causing them to err.</td>
        <td class="arabic">وَنَفْخَتُهُ كَنَهْرٍ غَامِرٍ يَبْلُغُ إِلَى الرَّقَبَةِ. لِغَرْبَلَةِ الأُمَمِ بِغُرْبَالِ السُّوءِ وَعَلَى فُكُوكِ الشُّعُوبِ رَسَنٌ مُضِلٌّ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">You shall have a song As in the night when a holy festival is kept, And gladness of heart as when one goes with a flute, To come into the mountain of the Lord, To the Mighty One of Israel.</td>
        <td class="arabic">تَكُونُ لَكُمْ أُغْنِيَةٌ كَلَيْلَةِ تَقْدِيسِ عِيدٍ وَفَرَحُ قَلْبٍ كَالسَّائِرِ بِالنَّايِ لِيَأْتِيَ إِلَى جَبَلِ الرَّبِّ إِلَى صَخْرِ إِسْرَائِيلَ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">The Lord will cause His glorious voice to be heard, And show the descent of His arm, With the indignation of His anger And the flame of a devouring fire, With scattering, tempest, and hailstones.</td>
        <td class="arabic">وَيُسَمِّعُ الرَّبُّ جَلاَلَ صَوْتِهِ وَيُرِي نُزُولَ ذِرَاعِهِ بِهَيَجَانِ غَضَبٍ وَلَهِيبِ نَارٍ آكِلَةٍ نَوْءٍ وَسَيْلٍ وَحِجَارَةِ بَرَدٍ.</td>
    </tr>
    <tr id="table_3_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Proverbs 6:24-7:4)
    <span class="arabic-caption">النبوة الثانية<br>(أمثال سليمان 6: 24 - 4:7)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء امثال سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">My son, keep your father's command, And do not forsake the law of your mother.</td>
        <td class="arabic">يَا ابْنِي احْفَظْ وَصَايَا أَبِيكَ وَلاَ تَتْرُكْ شَرِيعَةَ أُمِّكَ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">Bind them continually upon your heart; Tie them around your neck.</td>
        <td class="arabic">اُرْبُطْهَا عَلَى قَلْبِكَ دَائِماً. قَلِّدْ بِهَا عُنُقَكَ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">When you roam, they will lead you; When you sleep, they will keep you; And when you awake, they will speak with you.</td>
        <td class="arabic">إِذَا ذَهَبْتَ تَهْدِيكَ. إِذَا نِمْتَ تَحْرُسُكَ وَإِذَا اسْتَيْقَظْتَ فَهِيَ تُحَدِّثُكَ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">For the commandment is a lamp, And the law a light; Reproofs of instruction are the way of life,</td>
        <td class="arabic">لأَنَّ الْوَصِيَّةَ مِصْبَاحٌ وَالشَّرِيعَةَ نُورٌ وَتَوْبِيخَاتِ الأَدَبِ طَرِيقُ الْحَيَاةِ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">To keep you from the evil woman, From the flattering tongue of a seductress.</td>
        <td class="arabic">لِحِفْظِكَ مِنَ الْمَرْأَةِ الشِّرِّيرَةِ مِنْ مَلَقِ لِسَانِ الأَجْنَبِيَّةِ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Do not lust after her beauty in your heart, Nor let her allure you with her eyelids.</td>
        <td class="arabic">لاَ تَشْتَهِيَنَّ جَمَالَهَا بِقَلْبِكَ وَلاَ تَأْخُذْكَ بِهُدُبِهَا.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">For by means of a harlot A man is reduced to a crust of bread; And an adulteress will prey upon his precious life.</td>
        <td class="arabic">لأَنَّهُ بِسَبَبِ امْرَأَةٍ زَانِيَةٍ يَفْتَقِرُ الْمَرْءُ إِلَى رَغِيفِ خُبْزٍ وَامْرَأَةُ رَجُلٍ آخَرَ تَقْتَنِصُ النَّفْسَ الْكَرِيمَةَ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">Can a man take fire to his bosom, And his clothes not be burned?</td>
        <td class="arabic">أَيَأْخُذُ إِنْسَانٌ نَاراً فِي حِضْنِهِ وَلاَ تَحْتَرِقُ ثِيَابُهُ؟</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">Can one walk on hot coals, And his feet not be seared?</td>
        <td class="arabic">أَوَ يَمْشِي إِنْسَانٌ عَلَى الْجَمْرِ وَلاَ تَكْتَوِي رِجْلاَهُ؟</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">So is he who goes in to his neighbor's wife; Whoever touches her shall not be innocent.</td>
        <td class="arabic">هَكَذَا مَنْ يَدْخُلُ عَلَى امْرَأَةِ صَاحِبِهِ. كُلُّ مَنْ يَمَسُّهَا لاَ يَكُونُ بَرِيئاً.</td>
    </tr>
    <tr id="table_4_row_14" class="text">
        <td class="english">People do not despise a thief If he steals to satisfy himself when he is starving.</td>
        <td class="arabic">لاَ يَسْتَخِفُّونَ بِالسَّارِقِ وَلَوْ سَرِقَ لِيُشْبِعَ نَفْسَهُ وَهُوَ جَوْعَانٌ.</td>
    </tr>
    <tr id="table_4_row_15" class="text">
        <td class="english">Yet when he is found, he must restore sevenfold; He may have to give up all the substance of his house.</td>
        <td class="arabic">إِنْ وُجِدَ يَرُدُّ سَبْعَةَ أَضْعَافٍ وَيُعْطِي كُلَّ قِنْيَةِ بَيْتِهِ.</td>
    </tr>
    <tr id="table_4_row_16" class="text">
        <td class="english">Whoever commits adultery with a woman lacks understanding; He who does so destroys his own soul.</td>
        <td class="arabic">أَمَّا الزَّانِي بِامْرَأَةٍ فَعَدِيمُ الْعَقْلِ. الْمُهْلِكُ نَفْسَهُ هُوَ يَفْعَلُهُ.</td>
    </tr>
    <tr id="table_4_row_17" class="text">
        <td class="english">Wounds and dishonor he will get, And his reproach will not be wiped away.</td>
        <td class="arabic">ضَرْباً وَخِزْياً يَجِدُ وَعَارُهُ لاَ يُمْحَى.</td>
    </tr>
    <tr id="table_4_row_18" class="text">
        <td class="english">For jealousy is a husband's fury; Therefore he will not spare in the day of vengeance.</td>
        <td class="arabic">لأَنَّ الْغَيْرَةَ هِيَ حَمِيَّةُ الرَّجُلِ فَلاَ يُشْفِقُ فِي يَوْمِ الاِنْتِقَامِ.</td>
    </tr>
    <tr id="table_4_row_19" class="text">
        <td class="english">He will accept no recompense, Nor will he be appeased though you give many gifts.</td>
        <td class="arabic">لاَ يَنْظُرُ إِلَى فِدْيَةٍ مَا وَلاَ يَرْضَى وَلَوْ أَكْثَرْتَ الرَّشْوَةَ.</td>
    </tr>
    <tr id="table_4_row_20" class="text">
        <td class="english">My son, keep my words, And treasure my commands within you.</td>
        <td class="arabic">يَا ابْنِي احْفَظْ كَلاَمِي وَاذْخَرْ وَصَايَايَ عِنْدَكَ.</td>
    </tr>
    <tr id="table_4_row_21" class="text">
        <td class="english">Keep my commands and live, And my law as the apple of your eye.</td>
        <td class="arabic">احْفَظْ وَصَايَايَ فَتَحْيَا وَشَرِيعَتِي كَحَدَقَةِ عَيْنِكَ.</td>
    </tr>
    <tr id="table_4_row_22" class="text">
        <td class="english">Bind them on your fingers; Write them on the tablet of your heart.</td>
        <td class="arabic">اُرْبُطْهَا عَلَى أَصَابِعِكَ. اكْتُبْهَا عَلَى لَوْحِ قَلْبِكَ.</td>
    </tr>
    <tr id="table_4_row_23" class="text">
        <td class="english">Say to wisdom, "You are my sister," And call understanding your nearest kin.</td>
        <td class="arabic">قُلْ لِلْحِكْمَةِ: «أَنْتِ أُخْتِي» وَادْعُ الْفَهْمَ ذَا قَرَابَةٍ.</td>
    </tr>
    <tr id="table_4_row_25" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="Homily">
    <caption id="caption_table_6" class="caption">Homily<br>(Abba John Chrysostom)
    <span class="arabic-caption">العظة<br>(انبا يوحنا فم الذهب)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A homily of our holy father Abba John Chrysostom. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑⲩ Ⲁⲃⲃⲁ Ⲓ̅ⲱ̅ⲁ ⲡⲓⲭⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ: ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لابينا القديس انبا يوحنا فم الذهب بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">I want to remind you with what I repeatedly reiterated to you concerning our communion with the Holy sacraments which is of Christ.</td>
        <td class="arabic">أريد أن أذكركم أيها الاخوة بما أقوله لكم مرات عديدة وقت تناولنا من أسرار المسيح المقدسة.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">I see you in a state of extreme looseness, permissiveness, and an alarming audacity and lamentable recklessness. I weep over my condition and ask myself;</td>
        <td class="arabic">إذا رأيتكم فى تراخ عظيم وعدم مخافة تستوجب النوح فإنى أبكى لنفسى وأقول فى فكرى.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">Do these people really know for whom do they stand? Or do these people realize the power of this sacrament? At this thought I become angry reluctantly.</td>
        <td class="arabic">ألعل هؤلاء عارفون لمن هم قيام أو قوة هذا السر: وهكذا أغضب بغير إرادتى.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">If I could go away, I would have left your community out of distraughtness.</td>
        <td class="arabic">وانى كنت أريد أن أخرج من وسطكم من ضيقة نفسى</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">If I scold one of you, he disregards my words and resents the reprimand as if I were unfair to him.</td>
        <td class="arabic">وإذا وبخت أحداً منكم لا يكترث لقولى. بل يتذمر على كأننى قد ظلمته.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">I am amazed that you do not get angry at those who violate you and plunder your possessions as much as you are angry at me; I who am keen over your salvation.</td>
        <td class="arabic">ياللعجب العظيم أن الذين يظلمونكم ويسلبون أمتعتكم لا تغضبون عليهم كغضبكم على أنا الذى أريد خلاصكم</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">I dread the thought that God’s wrath may be inflicted upon you because of your disregard of this great sacrament.</td>
        <td class="arabic">أنا خائف ومرتعد حين علمت بعقاب الله الذى سيحل بكم بسبب تهاونكم بهذا السر العظيم.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">Do you really know who is He you want to partake of?</td>
        <td class="arabic">ألعلكم تعلمون من هو هذا الذى تريدون أن تتناولوا منه.</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">This is the Holy Body of God the Word, and His blood that He offered for our salvation.</td>
        <td class="arabic">هو الجسد المقدس الذى لله الكلمة. ودمه الذى بذله عن خلاصنا.</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">Anyone who partakes in it undeservingly will suffer abominable punishment.</td>
        <td class="arabic">هذا إذا تناول أحد منه بغير استحقاق. يكون له عقوبة ومحقا.</td>
    </tr>
    <tr id="table_6_row_15" class="intro">
        <td class="english">We conclude the homily of our holy father Abba John Chrysostom, who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲓ̅ⲱ̅ⲁ ⲡⲓⲭⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ : ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ : ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا يوحنا فم الذهب الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
    </tr>
</table>
</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(44:9 / 40:1)
        <span class="arabic-caption">المزمور قبطي<br>(44:9 / 40:1)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Your Throne, O God, is forever and ever; Alleluia.</td>
            <td class="coptic">Ⲡⲉⲕⲑ̀ⲣⲟⲛⲟⲥ Ⲫϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ : ̅ⲁ̅ⲗ.</td>
            <td class="arabic">كرسيك يا الله إلى دهر الدهور. الليلويا.</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">The scepter of Your Kingdom is the scepter of righteousness.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲡⲓϣ̀ⲃⲱⲧ ⲙ̀ⲡ̀ⲥⲱⲟⲩⲧⲉⲛ ⲡⲉ ⲡ̀ϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ :</td>
            <td class="arabic">قضيب الاستقامة هو قضيب ملكك.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Blessed is the man who thinks on the poor and needy; </td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧϥ ⲙ̀ⲫⲏⲉⲑⲛⲁⲕⲁϯ ⲉ̀ϫⲉⲛ ⲟⲩϩⲏⲕⲓ ⲛⲉⲙ ⲟⲩϫⲱⲃ :</td>
            <td class="arabic">طوبى للذي يتفهم في أمر المسكين والفقير.</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">The Lord shall deliver him in an evil day.</td>
            <td class="coptic">ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉⲧϩⲱⲟⲩ ⲉϥⲉ̀ⲛⲁϩⲙⲉϥ ⲛ̀ϫⲉ Ⲡ̀⳪</td>
            <td class="arabic">في اليوم السوء ينجيه الرب:</td>
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
            <td class="arabic">فصل من إنجيل معلمنا مار ﻣﺘﻰ</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ<̀/td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲛ̀ⲟⲩⲣⲱⲙⲓ ⲉϥⲛⲁϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲉⲙⲙⲟ ⲁϥⲙⲟⲩϯ ⲉ̀ⲛⲉϥⲉ̀ⲃⲓⲁⲓⲕ ⲟⲩⲟϩ ⲁϥϯ ⲙ̀ⲡⲉⲧⲉⲛⲧⲁϥ ⲉ̀ⲧⲟⲧⲟⲩ : Ⲟⲩⲁⲓ ⲙⲉⲛ ⲁϥϯⲛⲁϥ ⲛ̀ⲧ̀ⲓⲟⲩ ⲛ̀ϫⲓⲛϭⲱ̀ⲣ : ⲕⲉ ⲟⲩⲁⲓ ⲇⲉ ⲁϥϯⲛⲁϥ ⲛ̀ⲥ̀ⲛⲁⲩ ⲕⲉ ⲟⲩⲁⲓ ⲇⲉ ⲁϥϯⲛⲁϥ ⲛ̀ⲟⲩⲁⲓ : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲧⲉϥϫⲟⲙ ⲟⲩⲟϩ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲉⲙⲙⲟ : ⲁϥϣⲉⲛⲁϥ ⲇⲉ ⲛ̀ϫⲉ ⲫⲏⲉ̀ⲧⲁϥϭⲓ ⲙ̀ⲡⲓⲧ̀ⲓⲟⲩ ⲛ̀ϫⲓⲛϭⲱⲣ ⲁϥⲉⲣϩⲱⲃ ⲛ̀ϧⲏⲧⲟⲩ ⲟⲩⲟϩ ⲁϥϫ̀ⲫⲉ ⲕⲉ ⲧ̀ⲓⲟⲩ : ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲫⲏⲉ̀ⲧⲁϥϭⲓ ⲙ̀ⲡⲓⲥ̀ⲛⲁⲩ ⲁϥϫⲫⲉ ⲕⲉ ⲥ̀ⲛⲁⲩ.<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(45:6 & 41:1)
    <span class="arabic-caption">المزمور<br>(45: 6  و 41: 1)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Your Throne, O God, is forever 
and ever; 

the scepter of Your Kingdom is the scepter of righteousness.</td>
        <td class="arabic">كرسيك يا الله إلى دهر الدهور. 

قضيب الاستقامة هو قضيب ملكك.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">Blessed is the man who thinks on the poor and needy; 

the Lord shall deliver him in an evil day.</td>
        <td class="arabic">طوبى للذى يتفهم فى أمر المسكين والفقير. 

فى اليوم السوء ينجيه الرب.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Matthew 25:14-26:2)
    <span class="arabic-caption">الانجيل<br>(متى 25: 14- 26: 2)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">"For the kingdom of heaven is like a man traveling to a far country, who called his own servants and delivered his goods to them.</td>
        <td class="arabic">«وَكَأَنَّمَا إِنْسَانٌ مُسَافِرٌ دَعَا عَبِيدَهُ وَسَلَّمَهُمْ أَمْوَالَهُ</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">And to one he gave five talents, to another two, and to another one, to each according to his own ability; and immediately he went on a journey.</td>
        <td class="arabic">فَأَعْطَى وَاحِداً خَمْسَ وَزَنَاتٍ وَآخَرَ وَزْنَتَيْنِ وَآخَرَ وَزْنَةً - كُلَّ وَاحِدٍ عَلَى قَدْرِ طَاقَتِهِ. وَسَافَرَ لِلْوَقْتِ.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Then he who had received the five talents went and traded with them, and made another five talents.</td>
        <td class="arabic">فَمَضَى الَّذِي أَخَذَ الْخَمْسَ* وَزَنَاتٍ وَتَاجَرَ بِهَا فَرَبِحَ خَمْسَ وَزَنَاتٍ أُخَرَ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">And likewise he who had received two gained two more also.</td>
        <td class="arabic">وَهَكَذَا الَّذِي أَخَذَ الْوَزْنَتَيْنِ رَبِحَ أَيْضاً وَزْنَتَيْنِ أُخْرَيَيْنِ.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">But he who had received one went and dug in the ground, and hid his lord's money.</td>
        <td class="arabic">وَأَمَّا الَّذِي أَخَذَ الْوَزْنَةَ فَمَضَى وَحَفَرَ فِي الأَرْضِ وَأَخْفَى فِضَّةَ سَيِّدِهِ.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">After a long time the lord of those servants came and settled accounts with them.</td>
        <td class="arabic">وَبَعْدَ زَمَانٍ طَوِيلٍ أَتَى سَيِّدُ أُولَئِكَ الْعَبِيدِ وَحَاسَبَهُمْ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">So he who had received five talents came and brought five other talents, saying, 'Lord, you delivered to me five talents; look, I have gained five more talents besides them.'</td>
        <td class="arabic">فَجَاءَ الَّذِي أَخَذَ الْخَمْسَ وَزَنَاتٍ وَقَدَّمَ خَمْسَ وَزَنَاتٍ أُخَرَ قَائِلاً: يَا سَيِّدُ خَمْسَ وَزَنَاتٍ سَلَّمْتَنِي. هُوَذَا خَمْسُ وَزَنَاتٍ أُخَرُ رَبِحْتُهَا فَوْقَهَا.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">His lord said to him, 'Well done, good and faithful servant; you were faithful over a few things, I will make you ruler over many things. Enter into the joy of your lord.'</td>
        <td class="arabic">فَقَالَ لَهُ سَيِّدُهُ: نِعِمَّا أَيُّهَا الْعَبْدُ الصَّالِحُ وَالأَمِينُ. كُنْتَ أَمِيناً فِي الْقَلِيلِ فَأُقِيمُكَ عَلَى الْكَثِيرِ. ادْخُلْ إِلَى فَرَحِ سَيِّدِكَ.</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">He also who had received two talents came and said, 'Lord, you delivered to me two talents; look, I have gained two more talents besides them.'</td>
        <td class="arabic">ثُمَّ جَاءَ الَّذِي أَخَذَ الْوَزْنَتَيْنِ وَقَالَ: يَا سَيِّدُ وَزْنَتَيْنِ سَلَّمْتَنِي. هُوَذَا وَزْنَتَانِ أُخْرَيَانِ رَبِحْتُهُمَا فَوْقَهُمَا.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">His lord said to him, 'Well done, good and faithful servant; you have been faithful over a few things, I will make you ruler over many things. Enter into the joy of your lord.'</td>
        <td class="arabic">قَالَ لَهُ سَيِّدُهُ: نِعِمَّا أَيُّهَا الْعَبْدُ الصَّالِحُ الأَمِينُ. كُنْتَ أَمِيناً فِي الْقَلِيلِ فَأُقِيمُكَ عَلَى الْكَثِيرِ. ادْخُلْ إِلَى فَرَحِ سَيِّدِكَ.</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">Then he who had received the one talent came and said, 'Lord, I knew you to be a hard man, reaping where you have not sown, and gathering where you have not scattered seed.</td>
        <td class="arabic">ثُمَّ جَاءَ أَيْضاً الَّذِي أَخَذَ الْوَزْنَةَ الْوَاحِدَةَ وَقَالَ: يَا سَيِّدُ عَرَفْتُ أَنَّكَ إِنْسَانٌ قَاسٍ تَحْصُدُ حَيْثُ لَمْ تَزْرَعْ وَتَجْمَعُ مِنْ حَيْثُ لَمْ تَبْذُرْ.</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">And I was afraid, and went and hid your talent in the ground. Look, there you have what is yours.'</td>
        <td class="arabic">فَخِفْتُ وَمَضَيْتُ وَأَخْفَيْتُ وَزْنَتَكَ فِي الأَرْضِ. هُوَذَا الَّذِي لَكَ.</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english">But his lord answered and said to him, 'You wicked and lazy servant, you knew that I reap where I have not sown, and gather where I have not scattered seed.</td>
        <td class="arabic">فَأَجَابَ سَيِّدُهُ: أَيُّهَا الْعَبْدُ الشِّرِّيرُ وَالْكَسْلاَنُ عَرَفْتَ أَنِّي أَحْصُدُ حَيْثُ لَمْ أَزْرَعْ وَأَجْمَعُ مِنْ حَيْثُ لَمْ أَبْذُرْ</td>
    </tr>
    <tr id="table_20_row_17" class="text">
        <td class="english">So you ought to have deposited my money with the bankers, and at my coming I would have received back my own with interest.</td>
        <td class="arabic">فَكَانَ يَنْبَغِي أَنْ تَضَعَ فِضَّتِي عِنْدَ الصَّيَارِفَةِ فَعِنْدَ مَجِيئِي كُنْتُ آخُذُ الَّذِي لِي مَعَ رِباً.</td>
    </tr>
    <tr id="table_20_row_18" class="text">
        <td class="english">Therefore take the talent from him, and give it to him who has ten talents.</td>
        <td class="arabic">فَخُذُوا مِنْهُ الْوَزْنَةَ وَأَعْطُوهَا لِلَّذِي لَهُ الْعَشْرُ وَزَنَاتٍ.</td>
    </tr>
    <tr id="table_20_row_19" class="text">
        <td class="english">For to everyone who has, more will be given, and he will have abundance; but from him who does not have, even what he has will be taken away.</td>
        <td class="arabic">لأَنَّ كُلَّ مَنْ لَهُ يُعْطَى فَيَزْدَادُ وَمَنْ لَيْسَ لَهُ فَالَّذِي عِنْدَهُ يُؤْخَذُ مِنْهُ.</td>
    </tr>
    <tr id="table_20_row_20" class="text">
        <td class="english">And cast the unprofitable servant into the outer darkness. There will be weeping and gnashing of teeth.'</td>
        <td class="arabic">وَالْعَبْدُ الْبَطَّالُ اطْرَحُوهُ إِلَى الظُّلْمَةِ الْخَارِجِيَّةِ هُنَاكَ يَكُونُ الْبُكَاءُ وَصَرِيرُ الأَسْنَانِ.</td>
    </tr>
    <tr id="table_20_row_21" class="text">
        <td class="english">"When the Son of Man comes in His glory, and all the holy angels with Him, then He will sit on the throne of His glory.</td>
        <td class="arabic">«وَمَتَى جَاءَ ابْنُ الإِنْسَانِ فِي مَجْدِهِ وَجَمِيعُ الْمَلاَئِكَةِ الْقِدِّيسِينَ مَعَهُ فَحِينَئِذٍ يَجْلِسُ عَلَى كُرْسِيِّ مَجْدِهِ.</td>
    </tr>
    <tr id="table_20_row_22" class="text">
        <td class="english">All the nations will be gathered before Him, and He will separate them one from another, as a shepherd divides his sheep from the goats.</td>
        <td class="arabic">وَيَجْتَمِعُ أَمَامَهُ جَمِيعُ الشُّعُوبِ فَيُمَيِّزُ بَعْضَهُمْ مِنْ بَعْضٍ كَمَا يُمَيِّزُ الرَّاعِي الْخِرَافَ مِنَ الْجِدَاءِ</td>
    </tr>
    <tr id="table_20_row_23" class="text">
        <td class="english">And He will set the sheep on His right hand, but the goats on the left.</td>
        <td class="arabic">فَيُقِيمُ الْخِرَافَ عَنْ يَمِينِهِ وَالْجِدَاءَ عَنِ الْيَسَارِ.</td>
    </tr>
    <tr id="table_20_row_24" class="text">
        <td class="english">Then the King will say to those on His right hand, 'Come, you blessed of My Father, inherit the kingdom prepared for you from the foundation of the world:</td>
        <td class="arabic">ثُمَّ يَقُولُ الْمَلِكُ لِلَّذِينَ عَنْ يَمِينِهِ: تَعَالَوْا يَا مُبَارَكِي أَبِي رِثُوا الْمَلَكُوتَ الْمُعَدَّ لَكُمْ مُنْذُ تَأْسِيسِ الْعَالَمِ.</td>
    </tr>
    <tr id="table_20_row_25" class="text">
        <td class="english">for I was hungry and you gave Me food; I was thirsty and you gave Me drink; I was a stranger and you took Me in;</td>
        <td class="arabic">لأَنِّي جُعْتُ فَأَطْعَمْتُمُونِي. عَطِشْتُ فَسَقَيْتُمُونِي. كُنْتُ غَرِيباً فَآوَيْتُمُونِي.</td>
    </tr>
    <tr id="table_20_row_26" class="text">
        <td class="english">I was naked and you clothed Me; I was sick and you visited Me; I was in prison and you came to Me.'</td>
        <td class="arabic">عُرْيَاناً فَكَسَوْتُمُونِي. مَرِيضاً فَزُرْتُمُونِي. مَحْبُوساً فَأَتَيْتُمْ إِلَيَّ.</td>
    </tr>
    <tr id="table_20_row_27" class="text">
        <td class="english">Then the righteous will answer Him, saying, 'Lord, when did we see You hungry and feed You, or thirsty and give You drink?</td>
        <td class="arabic">فَيُجِيبُهُ الأَبْرَارُ حِينَئِذٍ: يَارَبُّ مَتَى رَأَيْنَاكَ جَائِعاً فَأَطْعَمْنَاكَ أَوْ عَطْشَاناً فَسَقَيْنَاكَ؟</td>
    </tr>
    <tr id="table_20_row_28" class="text">
        <td class="english">When did we see You a stranger and take You in, or naked and clothe You?</td>
        <td class="arabic">وَمَتَى رَأَيْنَاكَ غَرِيباً فَآوَيْنَاكَ أَوْ عُرْيَاناً فَكَسَوْنَاكَ؟</td>
    </tr>
    <tr id="table_20_row_29" class="text">
        <td class="english">Or when did we see You sick, or in prison, and come to You?'</td>
        <td class="arabic">وَمَتَى رَأَيْنَاكَ مَرِيضاً أَوْ مَحْبُوساً فَأَتَيْنَا إِلَيْكَ؟</td>
    </tr>
    <tr id="table_20_row_30" class="text">
        <td class="english">And the King will answer and say to them, 'Assuredly, I say to you, inasmuch as you did it to one of the least of these My brethren, you did it to Me.'</td>
        <td class="arabic">فَيُجِيبُ الْمَلِكُ: الْحَقَّ أَقُولُ لَكُمْ: بِمَا أَنَّكُمْ فَعَلْتُمُوهُ بِأَحَدِ إِخْوَتِي هَؤُلاَءِ الأَصَاغِرِ فَبِي فَعَلْتُمْ.</td>
    </tr>
    <tr id="table_20_row_31" class="text">
        <td class="english">Then He will also say to those on the left hand, 'Depart from Me, you cursed, into the everlasting fire prepared for the devil and his angels:</td>
        <td class="arabic">«ثُمَّ يَقُولُ أَيْضاً لِلَّذِينَ عَنِ الْيَسَارِ: اذْهَبُوا عَنِّي يَا مَلاَعِينُ إِلَى النَّارِ الأَبَدِيَّةِ الْمُعَدَّةِ لِإِبْلِيسَ وَمَلاَئِكَتِهِ</td>
    </tr>
    <tr id="table_20_row_32" class="text">
        <td class="english">for I was hungry and you gave Me no food; I was thirsty and you gave Me no drink;</td>
        <td class="arabic">لأَنِّي جُعْتُ فَلَمْ تُطْعِمُونِي. عَطِشْتُ فَلَمْ تَسْقُونِي.</td>
    </tr>
    <tr id="table_20_row_33" class="text">
        <td class="english">I was a stranger and you did not take Me in, naked and you did not clothe Me, sick and in prison and you did not visit Me.'</td>
        <td class="arabic">كُنْتُ غَرِيباً فَلَمْ تَأْوُونِي. عُرْيَاناً فَلَمْ تَكْسُونِي. مَرِيضاً وَمَحْبُوساً فَلَمْ تَزُورُونِي.</td>
    </tr>
    <tr id="table_20_row_34" class="text">
        <td class="english">Then they also will answer Him, saying, 'Lord, when did we see You hungry or thirsty or a stranger or naked or sick or in prison, and did not minister to You?'</td>
        <td class="arabic">حِينَئِذٍ يُجِيبُونَهُ هُمْ أَيْضاً: يَارَبُّ مَتَى رَأَيْنَاكَ جَائِعاً أَوْ عَطْشَاناً أَوْ غَرِيباً أَوْ عُرْيَاناً أَوْ مَرِيضاً أَوْ مَحْبُوساً وَلَمْ نَخْدِمْكَ؟</td>
    </tr>
    <tr id="table_20_row_35" class="text">
        <td class="english">Then He will answer them, saying, 'Assuredly, I say to you, inasmuch as you did not do it to one of the least of these, you did not do it to Me.'</td>
        <td class="arabic">فَيُجِيبُهُمْ: الْحَقَّ أَقُولُ لَكُمْ: بِمَا أَنَّكُمْ لَمْ تَفْعَلُوهُ بِأَحَدِ هَؤُلاَءِ الأَصَاغِرِ فَبِي لَمْ تَفْعَلُوا.</td>
    </tr>
    <tr id="table_20_row_36" class="text">
        <td class="english">And these will go away into everlasting punishment, but the righteous into eternal life."</td>
        <td class="arabic">فَيَمْضِي هَؤُلاَءِ إِلَى عَذَابٍ أَبَدِيٍّ وَالأَبْرَارُ إِلَى حَيَاةٍ أَبَدِيَّةٍ».</td>
    </tr>
    <tr id="table_20_row_37" class="text">
        <td class="english">Now it came to pass, when Jesus had finished all these sayings, that He said to His disciples,</td>
        <td class="arabic">وَلَمَّا أَكْمَلَ يَسُوعُ هَذِهِ الأَقْوَالَ كُلَّهَا قَالَ لِتَلاَمِيذِهِ:</td>
    </tr>
    <tr id="table_20_row_38" class="text">
        <td class="english">"You know that after two days is the Passover, and the Son of Man will be delivered up to be crucified."</td>
        <td class="arabic">«تَعْلَمُونَ أَنَّهُ بَعْدَ يَوْمَيْنِ يَكُونُ الْفِصْحُ وَابْنُ الإِنْسَانِ يُسَلَّمُ لِيُصْلَبَ».</td>
    </tr>
    <tr id="table_20_row_39" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_20_row_41" class="intro">
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
        <td class="english">The exposition of the ELEVENTH Hour of the DAY of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من يوم الثلاثاء من البصخة المقدسة بركتها علينا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">Against You only have I sinned and done this evil in Your sight. I have become lazy in following your commandments. Forgive me My Lord and God.</td>
        <td class="arabic">لك وحدك أخطأت أيها الرب ضابط الكل. فأغفر لى يا ربى والهى.  صنعت الشر بجسارة وتكاسلت فى أوامرك أيها الرب.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">You come in the power of Your glory with hosts of angels around You. You sit on the throne of Your kingdom O Righteous Judge.</td>
        <td class="arabic">متى جئت بقوة مجدك، يحيط بك ملائكتك، فتجلس أنت أيها الديان العادل على كرسى ملكك.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">All the nations from all four corners of the earth assemble in front of You.</td>
        <td class="arabic">وتجتمع اليك جميع الأمم من الأربع رياح زوايا الأرض</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">Yet with Your one word, You will separate them to Your right and left.</td>
        <td class="arabic">ويفترقون بعضهم عن بعض يميناً وشمالاً بكلمة واحدة.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">The sheep on Your right and the goats on Your left.</td>
        <td class="arabic">وتقف الخراف عن يمينك والجداء عن يسارك،</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">Those on Your right will rejoice with You along with those virtuous who sought to please You and observed Your commandments and fulfilled them all.</td>
        <td class="arabic">فيفرح معك الذين عن يمينك، الأبرار الذين صنعوا مرضاتك، المتمسكون بأوامرك وحفظوها وصنعوها جميعاً،</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">Those who fed You in Your hunger and gave You a drink in Your thirst.</td>
        <td class="arabic">الذين أطعموك فى جوعك، وسقوك أيضاً فى عطشك،</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">Those who hosted You in their homes when You were a stranger and clothed You when You were naked.</td>
        <td class="arabic">وفى غربتك آووك فى بيوتهم، وفى عريك ستروك،</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">Those who visited You when You were in prison and served You when You were in Your sickness.</td>
        <td class="arabic">وعندما كنت فى السجن جاءوا لزيارتك، وفى مرضك خدموك.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">Then they will rejoice in their good deeds and receive their rewards.</td>
        <td class="arabic">حينئذ يفرحون بأعمالهم الحسنة، ويأخذون أجرهم دون الجداء.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">The righteous will inherit eternal life and the goats shall be punished.</td>
        <td class="arabic">فيمضى الأبرار إلى الحياة الدائمة، والجداء إلى العذاب.</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">Listen you foolish and understand you lost, mercy is fulfilled in judgment.</td>
        <td class="arabic">اسمعوا أيها الجهال، وافهموا أيها الضالين: أن الرحمة تفتخر فى الحكم.</td>
    </tr>
    <tr id="table_22_row_16" class="text">
        <td class="english">Have mercy before the time of judgment comes.</td>
        <td class="arabic">فاصنعوا الرحمة قبل أن تأتى عليكم دينونة الديان.</td>
    </tr>
    <tr id="table_22_row_17" class="text">
        <td class="english">After our Savior concluded his speech he told His disciples that Passover will come after two days,</td>
        <td class="arabic">فلما فرغ مخلصنا من كلامه أخبر التلاميذ أصفياءه أنه بعد يومين يكون الفصح.</td>
    </tr>
    <tr id="table_22_row_18" class="text">
        <td class="english">and that the son of man will fulfill the prophecies of the prophets that he is the sacrificial lamb.</td>
        <td class="arabic">فاسمعوا يا اخوتى الذين أصطفيتهم أن ابن الإنسان سيكمل عليه المكتوب فى سفر الأنبياء،  لكى يكون خروفاً للذبح،  وفصحاً كاملاً إلى كمال الدهور.</td>
    </tr>
    <tr id="table_22_row_19" class="text">
        <td class="english">Christ our Lord, verily You have been the unblemished lamb sacrificed for the sake of mankind.</td>
        <td class="arabic">فبالحقيقة صرت أيها المسيح الهنا حملاً بلا عيب عن حياة العالم،</td>
    </tr>
    <tr id="table_22_row_20" class="text">
        <td class="english">You are the lamb of God the Father who carries the sins of the world.</td>
        <td class="arabic">الذى هو حمل الله الآب حامل خطية العالم بأسره.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};