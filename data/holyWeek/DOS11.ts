import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOS11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of PALM SUNDAY","يوم أحد الشعانين");
    const paschalPraiseHtml = paschalPraise1("4","5","6","ELEVENTH","الحادية عشر","DAY of PALM SUNDAY","يوم أحد الشعانين");
    const copticGospelIntroHtml = copticGospelIntro("8");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("12");
    const expositionConclusionHtml = expositionConclusion("14");
    const daytimeLitaniesHtml = daytimeLitanies("15",false);
    const evnotiNaiNanHtml = evnotiNaiNan("16");
    const endOfServiceHymnHtml = endOfServiceHymn("17");

return `
${hourIntroHtml}
<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
        <caption class="caption" id="caption_table_2">Coptic Prophecies
        <span class="arabic-caption">النبوات قبطي</span></caption>

        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀Ⲏⲥⲁ̀ⲏⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲥⲱⲧⲉⲙ ̀ⲉⲣⲟⲓ Ⲓⲁⲕⲱⲃ ⲟⲩⲟϩ ̀ⲡ̅Ⲓ̅ⲥ̅ⲗ ̀ⲉϯⲙⲟⲩϯ ̀ⲉⲣⲟϥ ̀ⲁⲛⲟⲕ ⲡⲉ ⲡⲓϣⲟⲣⲡ ⲟⲩⲟϩ ̀ⲁⲛⲟⲕ ⲟⲛ ⲡⲉ ⲡⲓϣⲁ̀ⲉⲛⲉϩ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲛⲁⲟⲩⲙ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲟⲩⲛⲟⲩϯ ̀ⲛⲣⲉϥⲭⲟϩ ⲟⲩⲟϩ ̀ⲛⲣⲉϥϭⲓ ̀ⲙⲡϣⲓϣ ⲡⲉ ̀Ⲡ⳪</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    <table id="table_3" title="1st Prophecy">
        <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 48:12-22)
            <span class="arabic-caption">النبوة الأولي<br>(أشعياء 12:48-22)</span></caption>
        <tr id="table_3_row_1" class="intro">
            <td class="english">A reading from Isaiah the Prophet may his blessings be with us Amen.</td>
            <td class="arabic">من اشعياء النبي بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_3_row_4" class="text">
            <td class="english">"Listen to Me, O Jacob, And Israel, My called: I am He, I am the First, I am also the Last.</td>
            <td class="arabic">«اِسْمَعْ لِي يَا يَعْقُوبُ. وَإِسْرَائِيلُ الَّذِي دَعَوْتُهُ. أَنَا هُوَ. أَنَا الأَوَّلُ وَأَنَا الآخِرُ</td>
        </tr>
        <tr id="table_3_row_5" class="text">
            <td class="english">Indeed My hand has laid the foundation of the earth, And My right hand has stretched out the heavens; When I call to them, They stand up together.</td>
            <td class="arabic">وَيَدِي أَسَّسَتِ الأَرْضَ وَيَمِينِي نَشَرَتِ السَّمَاوَاتِ. أَنَا أَدْعُوهُنَّ فَيَقِفْنَ مَعاً.</td>
        </tr>
        <tr id="table_3_row_6" class="text">
            <td class="english">"All of you, assemble yourselves, and hear! Who among them has declared these things? The Lord loves him; He shall do His pleasure on Babylon, And His arm shall be against the Chaldeans.</td>
            <td class="arabic">اِجْتَمِعُوا كُلُّكُمْ وَاسْمَعُوا. مَنْ مِنْهُمْ أَخْبَرَ بِهَذِهِ؟ قَدْ أَحَبَّهُ الرَّبُّ. يَصْنَعُ مَسَرَّتَهُ بِبَابِلَ وَيَكُونُ ذِرَاعُهُ عَلَى الْكِلْدَانِيِّينَ.</td>
        </tr>
        <tr id="table_3_row_7" class="text">
            <td class="english">I, even I, have spoken; Yes, I have called him, I have brought him, and his way will prosper.</td>
            <td class="arabic">أَنَا أَنَا تَكَلَّمْتُ وَدَعَوْتُهُ. أَتَيْتُ بِهِ فَيَنْجَحُ طَرِيقُهُ.</td>
        </tr>
        <tr id="table_3_row_8" class="text">
            <td class="english">"Come near to Me, hear this: I have not spoken in secret from the beginning; From the time that it was, I was there. And now the Lord God and His Spirit Have sent Me."</td>
            <td class="arabic">تَقَدَّمُوا إِلَيَّ. اسْمَعُوا هَذَا. لَمْ أَتَكَلَّمْ مِنَ الْبَدْءِ فِي الْخَفَاءِ. مُنْذُ وُجُودِهِ أَنَا هُنَاكَ وَالآنَ السَّيِّدُ الرَّبُّ أَرْسَلَنِي وَرُوحُهُ.</td>
        </tr>
        <tr id="table_3_row_9" class="text">
            <td class="english">Thus says the Lord, your Redeemer, The Holy One of Israel: "I am the Lord your God, Who teaches you to profit, Who leads you by the way you should go.</td>
            <td class="arabic">«هَكَذَا يَقُولُ الرَّبُّ فَادِيكَ قُدُّوسُ إِسْرَائِيلَ: أَنَا الرَّبُّ إِلَهُكَ مُعَلِّمُكَ لِتَنْتَفِعَ وَأُمَشِّيكَ فِي طَرِيقٍ تَسْلُكُ فِيهِ.</td>
        </tr>
        <tr id="table_3_row_10" class="text">
            <td class="english">Oh, that you had heeded My commandments! Then your peace would have been like a river, And your righteousness like the waves of the sea.</td>
            <td class="arabic">لَيْتَكَ أَصْغَيْتَ لِوَصَايَايَ فَكَانَ كَنَهْرٍ سَلاَمُكَ وَبِرُّكَ كَلُجَجِ الْبَحْرِ.</td>
        </tr>
        <tr id="table_3_row_11" class="text">
            <td class="english">Your descendants also would have been like the sand, And the offspring of your body like the grains of sand; His name would not have been cut off Nor destroyed from before Me."</td>
            <td class="arabic">وَكَانَ كَالرَّمْلِ نَسْلُكَ وَذُرِّيَّةُ أَحْشَائِكَ كَأَحْشَائِهِ. لاَ يَنْقَطِعُ وَلاَ يُبَادُ اسْمُهُ مِنْ أَمَامِي.</td>
        </tr>
        <tr id="table_3_row_12" class="text">
            <td class="english">Go forth from Babylon! Flee from the Chaldeans! With a voice of singing, Declare, proclaim this, Utter it to the end of the earth; Say, "The Lord has redeemed His servant Jacob!"</td>
            <td class="arabic">«اُخْرُجُوا مِنْ بَابِلَ اهْرُبُوا مِنْ أَرْضِ الْكِلْدَانِيِّينَ. بِصَوْتِ التَّرَنُّمِ أَخْبِرُوا. نَادُوا بِهَذَا. شَيِّعُوهُ إِلَى أَقْصَى الأَرْضِ. قُولُوا: قَدْ فَدَى الرَّبُّ عَبْدَهُ يَعْقُوبَ.</td>
        </tr>
        <tr id="table_3_row_13" class="text">
            <td class="english">And they did not thirst When He led them through the deserts; He caused the waters to flow from the rock for them; He also split the rock, and the waters gushed out.</td>
            <td class="arabic">وَلَمْ يَعْطَشُوا فِي الْقِفَارِ الَّتِي سَيَّرَهُمْ فِيهَا. أَجْرَى لَهُمْ مِنَ الصَّخْرِ مَاءً وَشَقَّ الصَّخْرَ فَفَاضَتِ الْمِيَاهُ.</td>
        </tr>
        <tr id="table_3_row_14" class="text">
            <td class="english">"There is no peace," says the Lord, "for the wicked."</td>
            <td class="arabic">لاَ سَلاَمَ قَالَ الرَّبُّ لِلأَشْرَارِ».</td>
        </tr>
        <tr id="table_3_row_16" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_4" title="2nd Prophecy">
        <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Nahum 1:2-8)
            <span class="arabic-caption">النبوة الثانية<br>(ناحوم 2:1-8)</span></caption>
        <tr id="table_4_row_1" class="intro">
            <td class="english">A reading from the Nahum the Prophet may his blessings be with us Amen.</td>
            <td class="arabic">من ناحوم النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_4_row_4" class="text">
            <td class="english">God is jealous, and the Lord avenges; The Lord avenges and is furious. The Lord will take vengeance on His adversaries, And He reserves wrath for His enemies;</td>
            <td class="arabic">اَلرَّبُّ إِلَهٌ غَيُورٌ وَمُنْتَقِمٌ. الرَّبُّ مُنْتَقِمٌ وَذُو سَخَطٍ. الرَّبُّ مُنْتَقِمٌ مِن مُبْغِضِيهِ وَحَافِظٌ غَضَبَهُ علَى أَعْدَائِهِ.</td>
        </tr>
        <tr id="table_4_row_5" class="text">
            <td class="english">The Lord is slow to anger and great in power, And will not at all acquit the wicked. The Lord has His way In the whirlwind and in the storm, And the clouds are the dust of His feet.</td>
            <td class="arabic">الرَّبُّ بَطِيءُ الْغَضَبِ وَعَظِيمُ الْقُدْرَةِ وَلَكِنَّهُ لاَ يُبَرِّئُ الْبَتَّةَ. الرَّبُّ فِي الزَّوْبَعَةِ وَفِي الْعَاصِفِ طَرِيقُهُ وَالسَّحَابُ غُبَارُ رِجْلَيْهِ.</td>
        </tr>
        <tr id="table_4_row_6" class="text">
            <td class="english">He rebukes the sea and makes it dry, And dries up all the rivers. Bashan and Carmel wither, And the flower of Lebanon wilts.</td>
            <td class="arabic">يَنْتَهِرُ الْبَحْرَ فَيُنَشِّفُهُ وَيُجَفِّفُ جَمِيعَ الأَنْهَارِ. يَذْبُلُ بَاشَانُ وَالْكَرْمَلُ وَزَهْرُ لُبْنَانَ يَذْبُلُ.</td>
        </tr>
        <tr id="table_4_row_7" class="text">
            <td class="english">The mountains quake before Him, The hills melt, And the earth heaves at His presence, Yes, the world and all who dwell in it.</td>
            <td class="arabic">اَلْجِبَالُ تَرْجُفُ مِنْهُ وَالتِّلاَلُ تَذُوبُ وَالأَرْضُ تُرْفَعُ مِنْ وَجْهِهِ وَالْعَالَمُ وَكُلُّ السَّاكِنِينَ فِيهِ.</td>
        </tr>
        <tr id="table_4_row_8" class="text">
            <td class="english">Who can stand before His indignation? And who can endure the fierceness of His anger? His fury is poured out like fire, And the rocks are thrown down by Him.</td>
            <td class="arabic">مَنْ يَقِفُ أَمَامَ سَخَطِهِ وَمَنْ يَقُومُ فِي حُمُوِّ غَضَبِهِ؟ غَيْظُهُ يَنْسَكِبُ كَالنَّارِ وَالصُّخُورُ تَنْهَدِمُ مِنْهُ.</td>
        </tr>
        <tr id="table_4_row_9" class="text">
            <td class="english">The Lord is good, A stronghold in the day of trouble; And He knows those who trust in Him.</td>
            <td class="arabic">صَالِحٌ هُوَ الرَّبُّ. حِصْنٌ فِي يَوْمِ الضَّيقِ وَهُوَ يَعْرِفُ الْمُتَوَكِّلِينَ عَلَيْهِ.</td>
        </tr>
        <tr id="table_4_row_10" class="text">
            <td class="english">But with an overflowing flood He will make an utter end of its place, And darkness will pursue His enemies.</td>
            <td class="arabic">وَلكِنْ بِطُوفَانٍ عَابِرٍ يَصْنَعُ هَلاَكاً تَامّاً لِمَوْضِعِهَا وَأَعْدَاؤُهُ يَتْبَعُهُمْ ظَلاَمٌ.</td>
        </tr>
        <tr id="table_4_row_12" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>
</div>

${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_7" title="Coptic Psalm">
        <caption class="caption" id="caption_table_7">Coptic Psalm<br>(22:22-23)
        <span class="arabic-caption">المزمور قبطي<br>(22:22-23)</span></caption>
        </caption>

        <tr id="table_7_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_7_row_1" class="text">
            <td class="english">I will declare Your name to My brethren; In the midst of the assembly I will praise You.  You who fear the Lord, praise Him!</td>
            <td class="coptic">̀Ⲉⲓ̀ⲥⲁϫⲓ ̀ⲙⲡⲉⲕⲣⲁⲛ ϧⲁⲧⲟⲧⲟⲩ ̀ⲛⲛⲁ̀ⲥⲛⲏⲟⲩ : ⲉⲓⲉ̀ⲥⲙⲟⲩ ⲉⲣⲟⲕ ϧⲉⲛ ⲑⲙⲏϯ ̀ⲛϯⲉⲕ̀ⲕⲗⲏⲥⲓⲁ ⲛⲏⲉⲧⲉⲣⲟϩϯ ϧⲁ̀ⲧϩⲏ ̀ⲙⲠ⳪ ̀ⲥⲙⲟⲩ ⲉⲣⲟϥ.</td>
            <td class="arabic">أُخْبِرْ بِاسْمِكَ إِخْوَتِي. فِي وَسَطِ الْجَمَاعَةِ أُسَبِّحُكَ. يَا خَائِفِي الرَّبِّ سَبِّحُوهُ.</td>
        </tr>
        <tr id="table_7_row_2" class="text">
            <td class="english">All you descendants of Jacob, glorify Him, And fear Him, all you offspring of Israel!</td>
            <td class="coptic">ⲙⲁ̀ⲱⲟⲩ ⲛⲁϥ ̀ⲡϫⲣⲟϫ ⲧⲏⲣϥ ̀ⲛⲓⲁⲕⲱⲃ : ⲙⲁⲣⲉϥⲉⲣϩⲟϯ ϧⲁⲧⲉϥϩⲏ ̀ⲛϫⲉ ⲡⲓϫⲣⲟϫ ⲧⲏⲣϥ ̀ⲙⲡ̀Ⲓ̅ⲥ̅ⲗ :</td>
            <td class="arabic">مَجِّدُوهُ يَا مَعْشَرَ ذُرِّيَّةِ يَعْقُوبَ. وَاخْشُوهُ يَا زَرْعَ إِسْرَائِيلَ جَمِيعاً.</td>
        </tr>
        <tr id="table_7_row_3" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_9" title="Coptic Gospel">
        <caption class="caption" id="caption_table_9">Coptic Gospel<br>(Matthew 20:20-28)
        <span class="arabic-caption">الأنجيل قبطي<br>(متى 20: 20-28)</span></caption>
        <tr id="table_9_row_0" class="priest">
            <td class="english">A chapter according to St. Mathew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>
        <tr id="table_9_row_1" class="text">
            <td class="coptic">Ⲧⲟⲧⲉ ⲁⲥ̀ⲓ ϩⲁⲣⲟϥ ̀ⲛϫⲉ ̀ⲑⲙⲁⲩ ̀ⲛⲛⲉⲛϣⲏⲣⲓ ̀ⲛⲍⲉⲃⲉⲇⲉⲟⲥ ⲛⲉⲙ ⲛⲉⲥϣⲏⲣⲓ ⲉⲥⲟⲩⲱϣⲧ ̀ⲙⲙⲟϥ ⲟⲩⲟϩ ⲉⲥⲉⲣⲉⲧⲓⲛ ̀ⲙⲙⲟϥ ̀ⲛⲟⲩϩⲱⲃ. </td>
        </tr>
        <tr id="table_9_row_2" class="text">
            <td class="coptic"> ̀Ⲛⲑⲟϥ ⲇⲉ ⲡⲉϫⲁϥ ⲛⲁⲥ ϫⲉ ⲟⲩ ⲡⲉ ⲉⲧⲉⲟⲩⲁϣϥ ⲡⲉϫⲁⲥ ⲛⲁϥ ϫⲉ ̀ⲁϫⲟⲥ ϩⲓⲛⲁ ̀ⲛⲧⲉ ⲛⲁϣⲏⲣⲓ ̀ⲥⲛⲁⲩ ̀ⲛⲧⲉ ⲟⲩⲁⲓ ̀ⲙⲙⲱⲟⲩ ϩⲉⲙⲥⲓ ⲥⲁⲧⲉⲕⲟⲩ̀ⲓⲛⲁⲙ ⲛⲉⲙ ⲟⲩⲁⲓ ⲥⲁⲧⲉⲕϫⲁϭⲏ ̀ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ : </td>
        </tr>
        <tr id="table_9_row_3" class="text">
            <td class="coptic">Ⲁϥⲉⲣⲟⲩ̀ⲱ ̀ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ ⲡⲉϫⲁϥ ϫⲉ ̀ⲛⲧⲉⲧⲉⲛ̀ⲉⲙⲓ ⲁⲛ ϫⲉ ̀ⲁⲣⲉⲧⲉⲛⲉⲣⲉⲧⲓⲛ ⲉⲑⲃⲉⲟⲩ ⲟⲩⲟⲛ ϣϫⲟⲙ ̀ⲙⲙⲱⲧⲉⲛ ̀ⲉⲟⲉ ⲡⲓ̀ⲁⲫⲟⲧ ⲉϯⲛⲁⲥⲟϥ ⲟⲩⲟϩ ⲡⲓⲱⲙⲥ ⲉϯⲛⲁⲱⲙⲥ ̀ⲙⲙⲟϥ ⲉⲣⲉⲧⲉⲛⲉⲙⲥ ⲑⲏⲛⲟⲩ ⲡⲉϫⲱⲟⲩ : </td>
        </tr>
        <tr id="table_9_row_4" class="text">
            <td class="coptic">ⲛⲁϥ ϫⲉ ⲟⲩⲟⲛ ϣϫⲟⲙ ̀ⲙⲙⲟⲛ. <br> Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        <tr id="table_9_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅ </td>
        </tr>
        <tr id="table_9_row_6" class="congregation">
            <td class="coptic">Ⲇⲟⲝⲁⲥⲓ Ⲕⲩⲣⲓ ̀ⲉ.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
    <table id="table_10" title="Psalm">
        <caption id="caption_table_10" class="caption">Psalm<br>(22:22-23)
        <span class="arabic-caption">المزمور<br>(22:22-23)</span></caption>
        <tr id="table_10_row_1" class="intro">
            <td class="english">From the Psalms of our teacher David the Prophet. May his blessing be with us. Amen.</td>
            <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_10_row_4" class="text">
            <td class="english">I will declare Your name to My brethren; In the midst of the assembly I will praise You.</td>
            <td class="arabic">أُخْبِرْ بِاسْمِكَ إِخْوَتِي. فِي وَسَطِ الْجَمَاعَةِ أُسَبِّحُكَ.</td>
        </tr>
        <tr id="table_10_row_5" class="text">
            <td class="english">You who fear the Lord, praise Him! All you descendants of Jacob, glorify Him, And fear Him, all you offspring of Israel!</td>
            <td class="arabic">يَا خَائِفِي الرَّبِّ سَبِّحُوهُ. مَجِّدُوهُ يَا مَعْشَرَ ذُرِّيَّةِ يَعْقُوبَ. وَاخْشُوهُ يَا زَرْعَ إِسْرَائِيلَ جَمِيعاً.</td>
        </tr>
        <tr id="table_10_row_7" class="intro">
            <td class="english">Alleluia.</td>
            <td class="arabic">هلليلويا.</td>
        </tr>
    </table>

    <table id="table_11" title="Gospel">
        <caption id="caption_table_11" class="caption">Gospel<br>(Matthew 20:20-28)
        <span class="arabic-caption">الانجيل<br>(متى 20:20-28)</span></caption>
        <tr id="table_11_row_1" class="intro">
            <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to St. Matthew. May his blessings be with us. Amen.</td>
            <td class="arabic">اللهم تراءف علينا وارحمنا واجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين</td>
        </tr>
        <tr id="table_11_row_4" class="text">
            <td class="english">Then the mother of Zebedee's sons came to Him with her sons, kneeling down and asking something from Him.</td>
            <td class="arabic">حِينَئِذٍ تَقَدَّمَتْ إِلَيْهِ أُمُّ ابْنَيْ زَبْدِي مَعَ ابْنَيْهَا وَسَجَدَتْ وَطَلَبَتْ مِنْهُ شَيْئاً.</td>
        </tr>
        <tr id="table_11_row_5" class="text">
            <td class="english">And He said to her, "What do you wish?" She said to Him, "Grant that these two sons of mine may sit, one on Your right hand and the other on the left, in Your kingdom."</td>
            <td class="arabic">فَقَالَ لَهَا: «مَاذَا تُرِيدِينَ؟» قَالَتْ لَهُ: «قُلْ أَنْ يَجْلِسَ ابْنَايَ هَذَانِ وَاحِدٌ عَنْ يَمِينِكَ وَالآخَرُ عَنِ الْيَسَارِ فِي مَلَكُوتِكَ».</td>
        </tr>
        <tr id="table_11_row_6" class="text">
            <td class="english">But Jesus answered and said, "You do not know what you ask. Are you able to drink the cup that I am about to drink, and be baptized with the baptism that I am baptized with?" They said to Him, "We are able."</td>
            <td class="arabic">فَأَجَابَ يَسُوعُ: «لَسْتُمَا تَعْلَمَانِ مَا تَطْلُبَانِ. أَتَسْتَطِيعَانِ أَنْ تَشْرَبَا الْكَأْسَ الَّتِي سَوْفَ أَشْرَبُهَا أَنَا وَأَنْ تَصْطَبِغَا بِالصِّبْغَةِ الَّتِي أَصْطَبِغُ بِهَا أَنَا؟» قَالاَ لَهُ: «نَسْتَطِيعُ».</td>
        </tr>
        <tr id="table_11_row_7" class="text">
            <td class="english">So He said to them, "You will indeed drink My cup, and be baptized with the baptism that I am baptized with; but to sit on My right hand and on My left is not Mine to give, but it is for those for whom it is prepared by My Father."</td>
            <td class="arabic">فَقَالَ لَهُمَا: «أَمَّا كَأْسِي فَتَشْرَبَانِهَا وَبِالصِّبْغَةِ الَّتِي أَصْطَبِغُ بِهَا أَنَا تَصْطَبِغَانِ. وَأَمَّا الْجُلُوسُ عَنْ يَمِينِي وَعَنْ يَسَارِي فَلَيْسَ لِي أَنْ أُعْطِيَهُ إِلاَّ لِلَّذِينَ أُعِدَّ لَهُمْ مِنْ أَبِي».</td>
        </tr>
        <tr id="table_11_row_8" class="text">
            <td class="english">And when the ten heard it, they were greatly displeased with the two brothers.</td>
            <td class="arabic">فَلَمَّا سَمِعَ الْعَشَرَةُ اغْتَاظُوا مِنْ أَجْلِ الأَخَوَيْنِ.</td>
        </tr>
        <tr id="table_11_row_9" class="text">
            <td class="english">But Jesus called them to Himself and said, "You know that the rulers of the Gentiles lord it over them, and those who are great exercise authority over them.</td>
            <td class="arabic">فَدَعَاهُمْ يَسُوعُ وَقَالَ: «أَنْتُمْ تَعْلَمُونَ أَنَّ رُؤَسَاءَ الأُمَمِ يَسُودُونَهُمْ وَالْعُظَمَاءَ يَتَسَلَّطُونَ عَلَيْهِمْ.</td>
        </tr>
        <tr id="table_11_row_10" class="text">
            <td class="english">Yet it shall not be so among you; but whoever desires to become great among you, let him be your servant.</td>
            <td class="arabic">فَلاَ يَكُونُ هَكَذَا فِيكُمْ. بَلْ مَنْ أَرَادَ أَنْ يَكُونَ فِيكُمْ عَظِيماً فَلْيَكُنْ لَكُمْ خَادِماً</td>
        </tr>
        <tr id="table_11_row_11" class="text">
            <td class="english">And whoever desires to be first among you, let him be your slave--</td>
            <td class="arabic">وَمَنْ أَرَادَ أَنْ يَكُونَ فِيكُمْ أَوَّلاً فَلْيَكُنْ لَكُمْ عَبْداً</td>
        </tr>
        <tr id="table_11_row_12" class="text">
            <td class="english">just as the Son of Man did not come to be served, but to serve, and to give His life a ransom for many."<br>Bow down before the Holy Gospel.</td>
            <td class="arabic">كَمَا أَنَّ ابْنَ الإِنْسَانِ لَمْ يَأْتِ لِيُخْدَمَ بَلْ لِيَخْدِمَ وَلِيَبْذِلَ نَفْسَهُ فِدْيَةً عَنْ كَثِيرِينَ».<br>أسجدوا للإنجيل المقدس.</td>
        </tr>
        <tr id="table_11_row_14" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="arabic">والمجد لله دائماً.</td>
        </tr>
    </table>

</div>

<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}

<table id="table_13" title="The Exposition">
    <caption id="caption_table_13" class="caption">The Exposition
<span class="arabic-caption">الطرح</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">The Exposition of The ELEVENTH Hour of the DAY of PALM SUNDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشر من يوم أحد الشعانين من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">In the minds of the antagonizing Jews, our Lord and Savior Jesus Christ was surrounded by people, troops, soldiers and warriors, similar to the kings of this world.</td>
        <td class="arabic">الأفكار التى كانت لليهود المخالفين بخصوص مخلصنا وملكنا المسيح أنه مثل ملوك الأرض. والجموع الكثيرة والجنود والمحاربون يحيطون به مثل الملوك.</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">These were the thoughts of the mother of John and Jacob, sons of Zebedee.</td>
        <td class="arabic">هكذا ظنت أم يوحنا ويعقوب إبنى زبدى.</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">She came to our Savior while He was surrounded by the people and His disciples.</td>
        <td class="arabic">فكرت هكذا وأتت إلى مخلصنا أمام الجمع مع تلاميذه</td>
    </tr>
    <tr id="table_13_row_7" class="text">
        <td class="english">She worshipped Him with her sons and said, “Grant that my two sons may sit, one on Your right hand, and the other on Your left, in Your kingdom.”</td>
        <td class="arabic">وسجدت له مع ابنيها، وسألته وطلبت منه هكذا قائلة: "قل كلمة أن يجلس ابناى الاثنان معك فى ملكوتك، واحد عن يمينك والآخر عن يسارك فى مجد مملكتك".</td>
    </tr>
    <tr id="table_13_row_8" class="text">
        <td class="english">Hear then what the merciful and most compassionate Lord, who desires salvation for the whole world, said,</td>
        <td class="arabic">اسمعوا الرؤوف الكثير الرحمة الذى يريد حياة جميع العالم قال:</td>
    </tr>
    <tr id="table_13_row_9" class="text">
        <td class="english">“Are you able to drink of the cup that I shall drink of and be baptized with the baptism that I am baptized with?” They said to Him, “We are able.”</td>
        <td class="arabic">" أتقدران أن تشربا الكأس التى أتيت لأجلها لكى أشربها، والصبغة التى اصطبغها؟". فقالا: "نقدر أن نصنع هذا".</td>
    </tr>
    <tr id="table_13_row_10" class="text">
        <td class="english">He answered them, “You will indeed be able to, but to sit at My right hand and at My left is not Mine to give.   It shall be given to those chosen by My omnipresent Father.”</td>
        <td class="arabic">"فلعلكما حقاً تقدران. فأما الجلوس فليس لى أن أعطيه لكما، لكنه لابى المالئ كل موضع،</td>
    </tr>
    <tr id="table_13_row_11" class="text">
        <td class="english">The two brothers were quiet when they heard these words and departed because of the magnitude of His glory.</td>
        <td class="arabic">وهو الذى يعطيه لأصفيائه". فلما سمع الأخوان هذا سكتا ومضيا من أجل عظم مجده.</td>
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