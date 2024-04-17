import { hourIntro, paschalPraise3  , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNanGreat, endOfServiceHymn , cross, faiEtafEnf} from "../repeatedPrayers";

export const DOF9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","DAY of GOOD FRIDAY","يوم الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","7","8","NINTH","التاسعة","DAY of GOOD FRIDAY","يوم الجمعة العظيمة");
    const faiEtafEnfHtml = faiEtafEnf("11");
    const copticGospelIntroHtml = copticGospelIntro("18");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("25");
    const expositionConclusionHtml = expositionConclusion("28");
    const daytimeLitaniesHtml = daytimeLitanies("29",true);
    const evnotiNaiNanGreatHtml = evnotiNaiNanGreat("30");
    const endOfServiceHymnHtml = endOfServiceHymn("31");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">̀Ⲡϭⲟⲓⲥ ⲙⲁⲧⲁⲙⲟⲓ ⲟⲩⲟϩ ⲉⲓ̀ⲉⲙⲓ : ⲧⲟⲧⲉ ⲁⲓⲛⲁⲩ ̀ⲉⲛⲟⲩ̀ϩⲃⲏⲟⲩ̀ⲓ ̀Ⲁⲛⲟⲕ ⲇⲉ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩϩⲓⲏⲃ ̀ⲛⲁⲧⲡⲉⲧϩⲱⲟⲩ ⲉⲩ̀ⲓⲛⲓ ̀ⲙⲙⲟϥ ̀ⲉϣⲁⲧϥ ⲟⲩⲟϩ ̀ⲙⲡⲓ̀ⲉⲙⲓ̅ⲡ̅ⲛ̅ⲁ Ⲁⲩⲥⲟϭⲛⲓ ̀ⲉⲣⲟⲓ ̀ⲛⲟⲩⲥⲟϭⲛⲓ ⲉϥϩⲱⲟⲩ ⲉⲩϫⲱ̀ⲙⲙⲟⲥ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲉϥ̀ⲉ̀ⲓ ̀ⲛϫⲉ ̀Ⲡ⳪ ⲡⲁⲛⲟⲩϯ : ⲟⲩⲟϩ ⲛⲉϥⲁⲅⲅⲉⲗⲟⲥ ⲧⲏⲣⲟⲩ ⲛⲉⲙⲁϥ : ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲉⲧⲉ̀ⲙⲙⲁⲩ ̀ⲛⲛⲉϥϣⲱⲡⲓ ̀ⲛϫⲉ ⲟⲩⲟⲩⲱⲓⲛⲓ : ⲟⲩϫⲁϥ ⲛⲉⲙ ⲟⲩ̀ⲱϫⲉⲃ ⲉϥ̀ⲉϣⲱⲡⲓ ϧⲉⲛ ⲟⲩ̀ⲉϩⲟⲟⲩ ̀ⲛⲟⲩⲱⲧ : Ⲟⲩⲟϩ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲉⲧⲉ̀ⲙⲙⲁⲩ ϥⲟⲩⲟⲛϩ ̀ⲉⲃⲟⲗ ̀ⲙ̀Ⲡ⳪</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲓⲟⲩⲏⲗ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲁⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ ϧⲉⲛ ⲟⲩⲥⲁⲗⲡⲓⲅⲝ ϧⲉⲛ Ⲥⲓⲱⲛ ϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲁⲧⲱⲟⲩ ̅ⲉ̅ⲑ̅ⲩ ⲟⲩⲟϩ ⲙⲁⲣⲟⲩ̀ϣⲑⲟⲣⲧⲉⲣ ̀ⲛϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϣⲟⲡ ϩⲓϫⲉⲛ ̀ⲡⲕⲁϩⲓ ϫⲉ ⲁϥ̀ⲓ ̀ⲛϫⲉ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲛⲧⲉ Ⲡ⳪</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    <table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Jeremiah 11:18-12:13)
    <span class="arabic-caption">الأولي<br>(أرميا 11: 18 - 12: 13)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Jeremiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من أرميا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Now the Lord gave me knowledge of it, and I know it; for You showed me their doings.</td>
        <td class="arabic">وَالرَّبُّ عَرَّفَنِي فَعَرَفْتُ. حِينَئِذٍ أَرَيْتَنِي أَفْعَالَهُمْ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">But I was like a docile lamb brought to the slaughter; and I did not know that they had devised schemes against me, saying, "Let us destroy the tree with its fruit, and let us cut him off from the land of the living, that his name may be remembered no more."</td>
        <td class="arabic">وَأَنَا كَخَرُوفٍ دَاجِنٍ يُسَاقُ إِلَى الذَّبْحِ وَلَمْ أَعْلَمْ أَنَّهُمْ فَكَّرُوا عَلَيَّ أَفْكَاراً قَائِلِينَ: [لِنُهْلِكِ الشَّجَرَةَ بِثَمَرِهَا وَنَقْطَعْهُ مِنْ أَرْضِ الأَحْيَاءِ فَلاَ يُذْكَرَ بَعْدُ اسْمُهُ].</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">But, O Lord of hosts, You who judge righteously, Testing the mind and the heart, Let me see Your vengeance on them, For to You I have revealed my cause.</td>
        <td class="arabic">فَيَا رَبَّ الْجُنُودِ الْقَاضِيَ الْعَدْلَ فَاحِصَ الْكُلَى وَالْقَلْبِ دَعْنِي أَرَى انْتِقَامَكَ مِنْهُمْ لأَنِّي لَكَ كَشَفْتُ دَعْوَايَ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">"Therefore thus says the Lord concerning the men of Anathoth who seek your life, saying, 'Do not prophesy in the name of the Lord, lest you die by our hand'--</td>
        <td class="arabic">لِذَلِكَ هَكَذَا قَالَ الرَّبُّ عَنْ أَهْلِ عَنَاثُوثَ الَّذِينَ يَطْلُبُونَ نَفْسَكَ قَائِلِينَ: [لاَ تَتَنَبَّأْ بِاسْمِ الرَّبِّ فَلاَ تَمُوتَ بِيَدِنَا].</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">therefore thus says the Lord of hosts: 'Behold, I will punish them. The young men shall die by the sword, their sons and their daughters shall die by famine;</td>
        <td class="arabic">لِذَلِكَ هَكَذَا قَالَ رَبُّ الْجُنُودِ: [هَئَنَذَا أُعَاقِبُهُمْ. يَمُوتُ الشُّبَّانُ بِالسَّيْفِ وَيَمُوتُ بَنُوهُمْ وَبَنَاتُهُمْ بِالْجُوعِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">and there shall be no remnant of them, for I will bring catastrophe on the men of Anathoth, even the year of their punishment.' "</td>
        <td class="arabic">وَلاَ تَكُونُ لَهُمْ بَقِيَّةٌ لأَنِّي أَجْلِبُ شَرّاً عَلَى أَهْلِ عَنَاثُوثَ سَنَةَ عِقَابِهِمْ].</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">Righteous are You, O Lord, when I plead with You; Yet let me talk with You about Your judgments. Why does the way of the wicked prosper? Why are those happy who deal so treacherously?</td>
        <td class="arabic">أَبَرُّ أَنْتَ يَا رَبُّ مِنْ أَنْ أُخَاصِمَكَ. لَكِنْ أُكَلِّمُكَ مِنْ جِهَةِ أَحْكَامِكَ. لِمَاذَا تَنْجَحُ طَرِيقُ الأَشْرَارِ؟ اطْمَأَنَّ كُلُّ الْغَادِرِينَ غَدْراً.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">You have planted them, yes, they have taken root; They grow, yes, they bear fruit. You are near in their mouth But far from their mind.</td>
        <td class="arabic">غَرَسْتَهُمْ فَأَصَّلُوا. نَمُوا وَأَثْمَرُوا ثَمَراً. أَنْتَ قَرِيبٌ فِي فَمِهِمْ وَبَعِيدٌ مِنْ كُلاَهُمْ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">But You, O Lord, know me; You have seen me, And You have tested my heart toward You. Pull them out like sheep for the slaughter, And prepare them for the day of slaughter.</td>
        <td class="arabic">وَأَنْتَ يَا رَبُّ عَرَفْتَنِي. رَأَيْتَنِي وَاخْتَبَرْتَ قَلْبِي مِنْ جِهَتِكَ. افْرِزْهُمْ كَغَنَمٍ لِلذَّبْحِ وَخَصِّصْهُمْ لِيَوْمِ الْقَتْلِ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">How long will the land mourn, And the herbs of every field wither? The beasts and birds are consumed, For the wickedness of those who dwell there, Because they said, "He will not see our final end."</td>
        <td class="arabic">حَتَّى مَتَى تَنُوحُ الأَرْضُ وَيَيْبَسُ عُشْبُ كُلِّ الْحَقْلِ؟ مِنْ شَرِّ السَّاكِنِينَ فِيهَا فَنِيَتِ الْبَهَائِمُ وَالطُّيُورُ لأَنَّهُمْ قَالُوا: [لاَ يَرَى آخِرَتَنَا].</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">"If you have run with the footmen, and they have wearied you, Then how can you contend with horses? And if in the land of peace, In which you trusted, they wearied you, Then how will you do in the floodplain of the Jordan?</td>
        <td class="arabic">إِنْ جَرَيْتَ مَعَ الْمُشَاةِ فَأَتْعَبُوكَ فَكَيْفَ تُبَارِي الْخَيْلَ؟ وَإِنْ كُنْتَ مُنْبَطِحاً فِي أَرْضِ السَّلاَمِ فَكَيْفَ تَعْمَلُ فِي كِبْرِيَاءِ الأُرْدُنِّ؟</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">For even your brothers, the house of your father, Even they have dealt treacherously with you; Yes, they have called a multitude after you. Do not believe them, Even though they speak smooth words to you.</td>
        <td class="arabic">لأَنَّ إِخْوَتَكَ أَنْفُسَهُمْ وَبَيْتَ أَبِيكَ قَدْ غَادَرُوكَ هُمْ أَيْضاً. هُمْ أَيْضاً نَادُوا وَرَاءَكَ بِصَوْتٍ عَالٍ. لاَ تَأْتَمِنْهُمْ إِذَا كَلَّمُوكَ بِالْخَيْرِ.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">"I have forsaken My house, I have left My heritage; I have given the dearly beloved of My soul into the hand of her enemies.</td>
        <td class="arabic">[قَدْ تَرَكْتُ بَيْتِي. رَفَضْتُ مِيرَاثِي. دَفَعْتُ حَبِيبَةَ نَفْسِي لِيَدِ أَعْدَائِهَا.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">My heritage is to Me like a lion in the forest; It cries out against Me; Therefore I have hated it.</td>
        <td class="arabic">صَارَ لِي مِيرَاثِي كَأَسَدٍ فِي الْوَعْرِ. نَطَقَ عَلَيَّ بِصَوْتِهِ. مِنْ أَجْلِ ذَلِكَ أَبْغَضْتُهُ.</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">My heritage is to Me like a speckled vulture; The vultures all around are against her. Come, assemble all the beasts of the field, Bring them to devour!</td>
        <td class="arabic">جَارِحَةٌ ضَبُعٌ مِيرَاثِي لِي. الْجَوَارِحُ حَوَالَيْهِ عَلَيْهِ. هَلُمَّ اجْمَعُوا كُلَّ حَيَوَانِ الْحَقْلِ. ايتُوا بِهَا لِلأَكْلِ.</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">"Many rulers have destroyed My vineyard, They have trodden My portion underfoot; They have made My pleasant portion a desolate wilderness.</td>
        <td class="arabic">رُعَاةٌ كَثِيرُونَ أَفْسَدُوا كَرْمِي دَاسُوا نَصِيبِي. جَعَلُوا نَصِيبِي الْمُشْتَهَى بَرِّيَّةً خَرِبَةً.</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">They have made it desolate; Desolate, it mourns to Me; The whole land is made desolate, Because no one takes it to heart.</td>
        <td class="arabic">جَعَلُوهُ خَرَاباً يَنُوحُ عَلَيَّ وَهُوَ خَرِبٌ. خَرِبَتْ كُلُّ الأَرْضِ لأَنَّهُ لاَ أَحَدَ يَضَعُ فِي قَلْبِهِ.</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">The plunderers have come On all the desolate heights in the wilderness, For the sword of the Lord shall devour From one end of the land to the other end of the land; No flesh shall have peace.</td>
        <td class="arabic">عَلَى جَمِيعِ الرَّوَابِي فِي الْبَرِّيَّةِ أَتَى النَّاهِبُونَ لأَنَّ سَيْفاً لِلرَّبِّ يَأْكُلُ مِنْ أَقْصَى الأَرْضِ إِلَى أَقْصَى الأَرْضِ. لَيْسَ سَلاَمٌ لأَحَدٍ مِنَ الْبَشَرِ.</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">They have sown wheat but reaped thorns; They have put themselves to pain but do not profit. But be ashamed of your harvest Because of the fierce anger of the Lord."</td>
        <td class="arabic">زَرَعُوا حِنْطَةً وَحَصَدُوا شَوْكاً. أَعْيُوا وَلَمْ يَنْتَفِعُوا بَلْ خَزُوا مِنْ غَلاَّتِكُمْ مِنْ حُمُوِّ غَضَبِ الرَّبِّ].</td>
    </tr>
    <tr id="table_3_row_24" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Zechariah 14:5-11)
    <span class="arabic-caption">النبوة الثانية<br>(زكريا 14: 5 - 11)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Zechariah the prophet. May his blessings be with us Amen.</td>
        <td class="arabic">من زكريا النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Thus the Lord my God will come, And all the saints with You.</td>
        <td class="arabic">وَيَأْتِي الرَّبُّ إِلَهِي وَجَمِيعُ الْقِدِّيسِينَ مَعَكَ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">It shall come to pass in that day That there will be no light; The lights will diminish.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّهُ لاَ يَكُونُ نُورٌ. الدَّرَارِي تَنْقَبِضُ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">It shall be one day Which is known to the Lord-- Neither day nor night. But at evening time it shall happen That it will be light.</td>
        <td class="arabic">وَيَكُونُ يَوْمٌ وَاحِدٌ مَعْرُوفٌ لِلرَّبِّ. لاَ نَهَارَ وَلاَ لَيْلَ بَلْ يَحْدُثُ أَنَّهُ فِي وَقْتِ الْمَسَاءِ يَكُونُ نُورٌ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">And in that day it shall be That living waters shall flow from Jerusalem, Half of them toward the eastern sea And half of them toward the western sea; In both summer and winter it shall occur.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّ مِيَاهاً حَيَّةً تَخْرُجُ مِنْ أُورُشَلِيمَ نِصْفُهَا إِلَى الْبَحْرِ الشَّرْقِيِّ وَنِصْفُهَا إِلَى الْبَحْرِ الْغَرْبِيِّ. فِي الصَّيْفِ وَفِي الْخَرِيفِ تَكُونُ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">And the Lord shall be King over all the earth. In that day it shall be-- "The Lord is one," And His name one.</td>
        <td class="arabic">وَيَكُونُ الرَّبُّ مَلِكاً عَلَى كُلِّ الأَرْضِ. فِي ذَلِكَ الْيَوْمِ يَكُونُ الرَّبُّ وَحْدَهُ وَاسْمُهُ وَحْدَهُ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">All the land shall be turned into a plain from Geba to Rimmon south of Jerusalem. Jerusalem shall be raised up and inhabited in her place from Benjamin's Gate to the place of the First Gate and the Corner Gate, and from the Tower of Hananeel to the king's winepresses.</td>
        <td class="arabic">وَتَتَحَوَّلُ الأَرْضُ كُلُّهَا كَالْعَرَبَةِ مِنْ جَبْعَ إِلَى رِمُّونَ جَنُوبَ أُورُشَلِيمَ. وَتَرْتَفِعُ وَتُعْمَرُ فِي مَكَانِهَا مِنْ بَابِ بِنْيَامِينَ إِلَى مَكَانِ الْبَابِ الأَوَّلِ إِلَى بَابِ الزَّوَايَا وَمِنْ بُرْجِ حَنَنْئِيلَ إِلَى مَعَاصِرِ الْمَلِكِ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">The people shall dwell in it; And no longer shall there be utter destruction, But Jerusalem shall be safely inhabited.</td>
        <td class="arabic">فَيَسْكُنُونَ فِيهَا وَلاَ يَكُونُ بَعْدُ لَعْنٌ. فَتُعْمَرُ أُورُشَلِيمُ بِالأَمْنِ.</td>
    </tr>
    <tr id="table_4_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Joel 2:1-3,10-11)
    <span class="arabic-caption">النبوة الثالثة<br>(يوئيل 2: 1 - 3 ، 10 - 11)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Joel the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يوئيل النبي بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Blow the trumpet in Zion, And sound an alarm in My holy mountain! Let all the inhabitants of the land tremble; For the day of the Lord is coming, For it is at hand:</td>
        <td class="arabic">اِضْرِبُوا بِالْبُوقِ فِي صِهْيَوْنَ. صَوِّتُوا فِي جَبَلِ قُدْسِي. لِيَرْتَعِدْ جَمِيعُ سُكَّانِ الأَرْضِ لأَنَّ يَوْمَ الرَّبِّ قَادِمٌ لأَنَّهُ قَرِيبٌ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">A day of darkness and gloominess, A day of clouds and thick darkness, Like the morning clouds spread over the mountains. A people come, great and strong, The like of whom has never been; Nor will there ever be any such after them, Even for many successive generations.</td>
        <td class="arabic">يَوْمُ ظَلاَمٍ وَقَتَامٍ. يَوْمُ غَيْمٍ وَضَبَابٍ مِثْلَ الْفَجْرِ مُمْتَدّاً عَلَى الْجِبَالِ. شَعْبٌ كَثِيرٌ وَقَوِيٌّ لَمْ يَكُنْ نَظِيرُهُ مُنْذُ الأَزَلِ وَلاَ يَكُونُ أَيْضاً بَعْدَهُ إِلَى سِنِي دَوْرٍ فَدَوْرٍ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">A fire devours before them, And behind them a flame burns; The land is like the Garden of Eden before them, And behind them a desolate wilderness; Surely nothing shall escape them.</td>
        <td class="arabic">قُدَّامَهُ نَارٌ تَأْكُلُ وَخَلْفَهُ لَهِيبٌ يُحْرِقُ. الأَرْضُ قُدَّامَهُ كَجَنَّةِ عَدْنٍ وَخَلْفَهُ قَفْرٌ خَرِبٌ وَلاَ تَكُونُ مِنْهُ نَجَاةٌ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">The earth quakes before them, The heavens tremble; The sun and moon grow dark, And the stars diminish their brightness.</td>
        <td class="arabic">قُدَّامَهُ تَرْتَعِدُ الأَرْضُ وَتَرْجُفُ السَّمَاءُ. الشَّمْسُ وَالْقَمَرُ يُظْلِمَانِ وَالنُّجُومُ تَحْجِزُ لَمَعَانَهَا.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">The Lord gives voice before His army, For His camp is very great; For strong is the One who executes His word. For the day of the Lord is great and very terrible; Who can endure it?</td>
        <td class="arabic">وَالرَّبُّ يُعْطِي صَوْتَهُ أَمَامَ جَيْشِهِ. إِنَّ عَسْكَرَهُ كَثِيرٌ جِدّاً. فَإِنَّ صَانِعَ قَوْلِهِ قَوِيٌّ لأَنَّ يَوْمَ الرَّبِّ عَظِيمٌ وَمَخُوفٌ جِدّاً فَمَنْ يُطِيقُهُ؟</td>
    </tr>
    <tr id="table_5_row_10" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}

<div class="section" id="section_5" title="Pauline">
    <table id="table_9" title="Taishory">
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
    <table id="table_9.5" class="onePage"title="Incense Prayers">
        <tr id="table_9.5_row_0" class="text">
            <td class="english">${cross} We worship You, O Christ, and Your life-giving cross, that You were crucified on to deliver us from our sins.</td>
            <td class="arabic">${cross} نسجد لك أيها المسيح ولصليبك المحى الذى صلبت حتى خلصتنا من خطايانا.</td>
        </tr>
        <tr id="table_9.5_row_3" class="text">
            <td class="english">${cross} O my Lord Jesus Christ, who was crucified on the cross, trample down Satan under our feet.</td>
            <td class="arabic">${cross} يا ربى يسوع المسيح يا من صلبت على الصليب أسحق الشيطان تحت أقدامنا.</td>
        </tr>
        <tr id="table_9.5_row_4" class="text">
            <td class="english">${cross} Hail to the cross, that Christ our King was crucified on, to deliver us from our sins.</td>
            <td class="arabic">${cross} السلام للصليب الذي صلب عليه الملك المسيح حتى خلصنا من خطايانا. </td>
        </tr>
    </table>
    
    <table id="table_10" title="Tishori">
        <caption class="caption" id="caption_table_10"><span class="coptic-caption">Ϯϣⲟⲩⲣⲏ</span></caption>
        <tr id="table_10_row_0" class="text">
            <td class="english">The golden censer is the Virgin, and the sweet aroma is our Savior. She gave birth to Him, who saved us and forgave us our sins.</td>
            <td class="coptic">Ϯϣⲟⲩⲣⲏ ̀ⲛⲛⲟⲃ ⲧⲉ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲡⲉⲥⲁⲣⲱⲙⲁⲧⲁ ⲡⲉ ⲡⲉⲛⲥⲱⲧⲏⲣ : ⲁⲥⲙⲓⲥⲓ ̀ⲙⲙⲟϥ ⲁϥⲥⲱϯ ̀ⲙⲙⲟⲛ : ⲟⲩⲟϩ ⲁϥⲭⲁ ⲛⲉⲛⲟⲃ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">المجمرة الذهب هى العذراء، وعنبرها هو مخلصنا، ولدته وخلصنا وغفر لنا خطايانا.</td>
        </tr>
    </table>

${faiEtafEnfHtml}

    <table id="table_12" title="Pauline Introduction">
        <caption class="caption" id="caption_table_12"><span class="coptic-caption">Ⲉⲑⲃⲉ ϯ̀ⲁⲛⲁⲥⲧⲁⲥⲓⲥ</span></caption>
        <tr id="table_12_row_0" class="text">
            <td class="english">For the resurrection of the dead, those who slept and reposed in the faith of Christ, Lord repose their souls.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ϯ̀ⲁⲛⲁⲥⲧⲁⲥⲓⲥ ̀ⲛⲧⲉ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ ⲛⲏⲉⲧⲁⲩⲉⲛⲕⲟⲩⲧ ⲁⲩⲉⲙⲧⲟⲛ ̀ⲙⲙⲱⲟⲩ: ϧⲉⲛ ̀ⲫⲛⲁϩϯ ̀ⲙⲠ̅ⲭ̅ⲥ : ̀Ⲡ⳪ ⲙⲁ̀ⲙⲧⲟⲛ ̀ⲛⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic"> من أجل قيامة الأموات الذين رقدوا وتنيحوا فى الإيمان المسيح يارب نيح نفوسهم أجمعين.</td>
        </tr>
        <tr id="table_12_row_1" class="text">
            <td class="english">Paul, a servant of our Lord Jesus Christ, called to be an apostle, separated to the gospel of God.</td>
            <td class="coptic">Ⲡⲁⲩⲗⲟⲥ ̀ⲫⲃⲱⲕ ̀ⲙⲠⲉⲛ⳪ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ : ⲡⲓ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲧⲑⲁϩⲉⲙ : ⲫⲏ̀ⲉⲧⲁⲩⲑⲁϣϥ ̀ⲉⲡⲓϩⲓϣⲉⲛⲛⲟⲩϥⲓ ̀ⲛⲧⲉ Ⲫϯ.</td>
            <td class="arabic">من بولس عبد ربنا يسوع المسيح الرسول المدعوا المفرز لبشارة الله.</td>
        </tr>
        <tr id="table_12_row_2" class="text">
            <td class="english">Let this mind be in you which was also in Christ Jesus</td>
            <td class="coptic">Ⲙⲁⲣⲉϥⲙⲉⲩ̀ⲓ ̀ⲉⲫⲁⲓ ̀ⲛ̀ϧⲣⲏⲓ ϧⲉⲛ ⲑⲏⲛⲟⲩ : ̀ⲉⲧⲉ ⲫⲁⲓ ⲡⲉ ⲉⲧϧⲉⲛ Ⲡ̅ⲭ̅ⲥ Ⲓ̅ⲏ̅ⲥ.</td>
            <td class="arabic">فليكن فيكم هذا الفكر الذى فى المسيح يسوع</td>
        </tr>
        <tr id="table_12_row_3" class="text">
            <td class="english">May the Grace of God the Father be with you, Amen.</td>
            <td class="coptic">Ⲡⲓ̀ϩⲙⲟⲧ ⲅⲁⲣ ⲛⲉⲙⲱⲧⲉⲛ ⲧⲏⲣⲟⲩ ϫⲉ ⲁⲙⲏⲛ ̀ⲉⲥⲉϣⲱⲡⲓ.</td>
            <td class="arabic">نعمة الله الآب تحل على جميعنا آمين.</td>
        </tr>
        <tr id="table_12_row_4" class="text">
            <td class="english">The Grace of our Lord Jesus Christ be with your saintly spirit, my lord, the Honored father, the high priest, Papa Abba Tawadros.</td>
            <td class="coptic">Ⲡⲓ̀ϩⲙⲟⲧ ⲅⲁⲣ ̀ⲙⲠⲉⲛ⳪ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ ⲉϥ̀ⲉϣⲱⲡⲓ ⲛⲉⲙ ⲡⲉⲕ̀ⲁⲅⲓⲟⲛ ̀ⲡⲛⲉⲩⲙⲁ ⲡⲁϭⲟⲓⲥ ̀ⲛⲓⲱⲧ ̀ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ̀ⲛⲁⲣⲭⲏ̀ⲉⲣⲉⲩⲥ Ⲡⲁⲡⲁ ⲁⲃⲃⲁ  Ⲧⲁⲱⲁⲇⲣⲟⲥ :</td>
            <td class="arabic">نعمة ربنا يسوع المسيح تكون مع روحك الطاهرة ياسيدى المكرم رئيس الكهنة البابا أنبا تواضروس.</td>
        </tr>
        <tr id="table_12_row_5" class="text">
            <td class="english">May the clergy and all the people be safe in the Lord.  Amen. So be it.</td>
            <td class="coptic">Ⲙⲁⲣⲉ ⲡⲓ̀ⲕⲗⲏⲣⲟⲥ ⲛⲉⲙ ⲡⲓⲗⲁⲟⲥ ⲧⲏⲣϥ ⲟⲩϫⲁⲓ ϧⲉⲛ Ⲡ⳪: ϫⲉ ⲁⲙⲏⲛ. ⲉⲥ̀ⲉϣⲱⲡⲓ.</td>
            <td class="arabic">فليكن الاكليروس وكل الشعب معافين من الرب آمين. يكون.</td>
        </tr>
    </table>
    <table id="table_13" title="Pauline Epistle">
        <caption id="caption_table_13" class="caption">Pauline Epistle<br>(Philippians 2:4-11)
        <span class="arabic-caption">البولس<br>(فيلبى 2: 4 - 11)</span></caption>
        <tr id="table_13_row_1" class="intro">
            <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the epistle of our teacher Paul to the Philippians. May his blessings be with us. Amen.</td>
            <td class="arabic">بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. من رسالة معلمنا بولس الرسول إلى أهل فيلبى بركته تكون معنا. آمين.</td>
        </tr>
        <tr id="table_13_row_4" class="text">
            <td class="english">Let each of you look out not only for his own interests, but also for the interests of others.</td>
            <td class="arabic">لاَ تَنْظُرُوا كُلُّ وَاحِدٍ إِلَى مَا هُوَ لِنَفْسِهِ، بَلْ كُلُّ وَاحِدٍ إِلَى مَا هُوَ لآخَرِينَ أَيْضاً.</td>
        </tr>
        <tr id="table_13_row_5" class="text">
            <td class="english">Let this mind be in you which was also in Christ Jesus,</td>
            <td class="arabic">فَلْيَكُنْ فِيكُمْ هَذَا الْفِكْرُ الَّذِي فِي الْمَسِيحِ يَسُوعَ أَيْضاً:</td>
        </tr>
        <tr id="table_13_row_6" class="text">
            <td class="english">who, being in the form of God, did not consider it robbery to be equal with God,</td>
            <td class="arabic">الَّذِي إِذْ كَانَ فِي صُورَةِ اللهِ، لَمْ يَحْسِبْ خُلْسَةً أَنْ يَكُونَ مُعَادِلاً لِلَّهِ.</td>
        </tr>
        <tr id="table_13_row_7" class="text">
            <td class="english">but made Himself of no reputation, taking the form of a bondservant, and coming in the likeness of men.</td>
            <td class="arabic">لَكِنَّهُ أَخْلَى نَفْسَهُ، آخِذاً صُورَةَ عَبْدٍ، صَائِراً فِي شِبْهِ النَّاسِ.</td>
        </tr>
        <tr id="table_13_row_8" class="text">
            <td class="english">And being found in appearance as a man, He humbled Himself and became obedient to the point of death, even the death of the cross.</td>
            <td class="arabic">وَإِذْ وُجِدَ فِي الْهَيْئَةِ كَإِنْسَانٍ، وَضَعَ نَفْسَهُ وَأَطَاعَ حَتَّى الْمَوْتَ مَوْتَ الصَّلِيبِ.</td>
        </tr>
        <tr id="table_13_row_9" class="text">
            <td class="english">Therefore God also has highly exalted Him and given Him the name which is above every name,</td>
            <td class="arabic">لِذَلِكَ رَفَّعَهُ اللهُ أَيْضاً، وَأَعْطَاهُ اسْماً فَوْقَ كُلِّ اسْمٍ</td>
        </tr>
        <tr id="table_13_row_10" class="text">
            <td class="english">that at the name of Jesus every knee should bow, of those in heaven, and of those on earth, and of those under the earth,</td>
            <td class="arabic">لِكَيْ تَجْثُوَ بِاسْمِ يَسُوعَ كُلُّ رُكْبَةٍ مِمَّنْ فِي السَّمَاءِ وَمَنْ عَلَى الأَرْضِ وَمَنْ تَحْتَ الأَرْضِ،</td>
        </tr>
        <tr id="table_13_row_11" class="text">
            <td class="english">and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.</td>
            <td class="arabic">وَيَعْتَرِفَ كُلُّ لِسَانٍ أَنَّ يَسُوعَ الْمَسِيحَ هُوَ رَبٌّ لِمَجْدِ اللهِ الآبِ.</td>
        </tr>
        <tr id="table_13_row_13" class="intro">
            <td class="english">The grace of God the Father be with you all. Amen.</td>
            <td class="arabic">نعمة الله الآب تحل مع جميعكم آمين.</td>
        </tr>
    </table>
    <table id="table_14" title="9th Hour Litanies">
        <caption class="caption" id="caption_table_14">9th Hour Litanies
        <span class="arabic-caption">قطع الساعة التاسعة</span></caption>
        <tr id="table_14_row_0" class="text">
            <td class="english"><span class="role">Congregation:</span><br>O You, Who tasted death in the flesh in the ninth hour for our sake, we the sinners, put to death our carnal lusts, O Christ, our God, and deliver us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>̀Ⲱ ⲫⲏ̀ⲉⲧⲁϥϫⲉⲙϯⲡⲓ ̀ⲙ̀ⲫⲙⲟⲩ ϧⲉⲛ ̀ⲧⲥⲁⲣⲝ : ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛⲁϫⲡ ⲯⲓϯ ⲉⲑⲃⲏⲧⲉⲛ : ϧⲱⲧⲉⲃ ̀ⲛⲛⲉⲛⲗⲟⲅⲓⲥⲙⲟⲥ ̀ⲛⲥⲱⲙⲁⲧⲓⲕⲟⲛ : ̀ⲱⲠ̅ⲭ̅ⲥ ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br> يا من ذاق الموت بالجسد فى وقت الساعة التاسعة من أجلنا أمت حواسنا الجسمانية أيها المسيح إلهنا  ونجنا.</td>
        </tr>
        <tr id="table_14_row_1" class="text">
            <td class="english"><span class="role">Priest:</span><br>O You, Who tasted death in the flesh in the ninth hour for our sake, we the sinners, put to death our carnal lusts, O Christ, our God, and deliver us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:</span><br>̀Ⲱ ⲫⲏ̀ⲉⲧⲁϥϫⲉⲙϯⲡⲓ ̀ⲙ̀ⲫⲙⲟⲩ ϧⲉⲛ ̀ⲧⲥⲁⲣⲝ : ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛⲁϫⲡ ⲯⲓϯ ⲉⲑⲃⲏⲧⲉⲛ : ϧⲱⲧⲉⲃ ̀ⲛⲛⲉⲛⲗⲟⲅⲓⲥⲙⲟⲥ ̀ⲛⲥⲱⲙⲁⲧⲓⲕⲟⲛ : ̀ⲱⲠ̅ⲭ̅ⲥ ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br> يا من ذاق الموت بالجسد فى وقت الساعة التاسعة من أجلنا أمت حواسنا الجسمانية أيها المسيح إلهنا  ونجنا.</td>
        </tr>
        <tr id="table_14_row_2" class="text">
            <td class="english"><span class="role">Congregation:</span><br>O You, Who tasted death in the flesh in the ninth hour for our sake, we the sinners, put to death our carnal lusts, O Christ, our God, and deliver us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>̀Ⲱ ⲫⲏ̀ⲉⲧⲁϥϫⲉⲙϯⲡⲓ ̀ⲙ̀ⲫⲙⲟⲩ ϧⲉⲛ ̀ⲧⲥⲁⲣⲝ : ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛⲁϫⲡ ⲯⲓϯ ⲉⲑⲃⲏⲧⲉⲛ : ϧⲱⲧⲉⲃ ̀ⲛⲛⲉⲛⲗⲟⲅⲓⲥⲙⲟⲥ ̀ⲛⲥⲱⲙⲁⲧⲓⲕⲟⲛ : ̀ⲱⲠ̅ⲭ̅ⲥ ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br> يا من ذاق الموت بالجسد فى وقت الساعة التاسعة من أجلنا أمت حواسنا الجسمانية أيها المسيح إلهنا  ونجنا.</td>
        </tr>
        <tr id="table_14_row_3" class="text">
            <td class="english"><span class="role">Priest:</span><br>Let my supplication draw close before You, O Lord; according to Your word give me understanding. Let my petition come before Your presence; according to Your word revive me.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>فلتدن وسيلتى قدامك يارب كقولك فهمنى فلتدخل طلبتى إلى حضرتك كقولك أحيينى.</td>
        </tr>
        <tr id="table_14_row_4" class="text">
            <td class="english"><span class="role">Congregation:</span><br>O You, Who tasted death in the flesh in the ninth hour for our sake, we the sinners, put to death our carnal lusts, O Christ, our God, and deliver us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>̀Ⲱ ⲫⲏ̀ⲉⲧⲁϥϫⲉⲙϯⲡⲓ ̀ⲙ̀ⲫⲙⲟⲩ ϧⲉⲛ ̀ⲧⲥⲁⲣⲝ : ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛⲁϫⲡ ⲯⲓϯ ⲉⲑⲃⲏⲧⲉⲛ : ϧⲱⲧⲉⲃ ̀ⲛⲛⲉⲛⲗⲟⲅⲓⲥⲙⲟⲥ ̀ⲛⲥⲱⲙⲁⲧⲓⲕⲟⲛ : ̀ⲱⲠ̅ⲭ̅ⲥ ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br> يا من ذاق الموت بالجسد فى وقت الساعة التاسعة من أجلنا أمت حواسنا الجسمانية أيها المسيح إلهنا  ونجنا.</td>
        </tr>
        <tr id="table_14_row_5" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Glory be to the Father, the Son and the Holy Spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲇⲟⲝⲁ  Ⲡⲁⲧⲣⲓ  ⲕⲉ  Ⲩⲓ̀ⲱ  ⲕⲉ  ̀ⲁⲅⲓ̀ⲱ  Ⲡⲛ̅ⲁ̅ⲧ̅ⲓ̅.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_6" class="text">
            <td class="english"><span class="role">Priest:</span><br>O You, who commended the spirit into the hands of the Father as You hung on the cross, in the ninth hour, and guided the thief who was crucified with You into entering the Paradise, do not neglect me, O Good One, nor reject me, I, the lost one;</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>يا من أسلم الروح فى يد الآب لما علقت على الصليب وقت الساعة التاسعة وأهديت اللص المصلوب معك للدخول إلى الفردوس لا تغفل عنى أيها الصالح ولا ترذلني انا الضال</td>
        </tr>
        <tr id="table_14_row_7" class="text">
            <td class="english">but sanctify my soul and enlighten my understanding, and allow me to be a partaker of the grace of Your life‑giving mysteries; that when I taste of Your benevolences, I offer You praise without lukewarmness, longing for Your splendor above all things, O Christ our God, and deliver us.</td>
            <td class="arabic">بل قدس نفسى وأضئ فهمى وإجعلني شريكاً لنعمة أسرارك المحيية لكيما إذا ذقت من إحساناتك أقدم لك تسبحـــة بغير فتور مشتاقاً إلى بهائك أفضل من كل شئ أيها المسيح إلهنا ونجنا.</td>
        </tr>
        <tr id="table_14_row_8" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Now and forever, and unto the age of all ages, Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ ̀̀ⲓ ⲕⲉ ⲓⲉⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_9" class="text">
            <td class="english"><span class="role">Priest:</span><br>O, You, who was born of the Virgin for our sake, and endured crucifixion, O Good One, and abolished death by Your death, and manifested resurrection by Your resurrection, O God, do not turn away from those whom You have created with Your own hands, but manifest, O Good One, Your love for mankind.</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>يا من ولدت من البتول من اجلنا وإحتملت الصلب أيها الصالح وقتلت الموت بموتك وأظهرت القيامة بقيامتك لا تعرض يا الله عن  الذين جبلتهم بيديك. إظهر محبتك للبشـــر أيهـا الصالح.</td>
        </tr>
        <tr id="table_14_row_10" class="text">
            <td class="english">Accept from Your mother an intercession on our behalf. Deliver, O Savior, a humble people. Do not leave us to the end, and do not forsake us forever. Do not break Your covenant, and do not take away from us Your mercy, for the sake of Abraham, Your beloved, Isaac, Your servant, and Israel, Your st. .</td>
            <td class="arabic">إقبل من والدتك شفاعة من أجلنا ونج يا مخلص شعباً متواضعاً ولا تتركنا إلى الانقضاء ولا تسلمنا إلى التمام ولا تنقض عهدك ولا تنزع عنا رحمتك من  أجل إبراهيم حبيبك وإسحق عبدك وإسرائيل قديسك.</td>
        </tr>
        <tr id="table_14_row_12" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Now and forever, and unto the age of all ages, Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ ̀̀ⲓ ⲕⲉ ⲓⲉⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_13" class="text">
            <td class="english"><span class="role">Priest:</span><br>When the thief saw the Prince of Life hung on the cross, he said: “Had not the One crucified with us been God incarnate, the sun would not hide its rays, nor would the earth have quaked trembling. But O You, the Almighty One who endures all things, remember me, O Lord, when You come into Your kingdom.”</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>لما أبصر اللص رئيس الحياة على الصليب معلقاً قال: لولا أن المصلوب معنا إله متجسد ما كانت الشمس أخفت شعاعها ولا الأرض ماجت مرتعدة، لكن أيها القادر على كل شيء والمحتمل كل شيء اذكرني يارب إذا جئت في ملكوتك.</td>
        </tr>
        <tr id="table_14_row_14" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Glory be to the Father, the Son and the Holy Spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲇⲟⲝⲁ  Ⲡⲁⲧⲣⲓ  ⲕⲉ  Ⲩⲓ̀ⲱ  ⲕⲉ  ̀ⲁⲅⲓ̀ⲱ  Ⲡⲛ̅ⲁ̅ⲧ̅ⲓ̅.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_15" class="text">
            <td class="english"><span class="role">Priest:</span><br>O You, who accepted unto Him the confession of the thief on the cross, accept us unto You, O Good One; we who deserve the sentence of death because of our sins. We all confess our sins with him, and acknowledging Your divinity, and cry out with him saying, “Remember us, O Lord, when You come into Your Kingdom.”</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>يا من قبل إليه اعتراف اللص على الصليب اقبلنا إليك أيها الصالح نحن المستوجبين حكم الموت من أجل خطايانا نقر بخطايانا معه معترفين بألوهيتك ونصرخ معه جميعاً اذكرنا يارب متى جئت في ملكوتك.</td>
        </tr>
        <tr id="table_14_row_16" class="text">
            <td class="english"><span class="role">Congregation:</span><br>Now and forever, and unto the age of all ages, Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:</span><br>Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ ̀̀ⲓ ⲕⲉ ⲓⲉⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic"><span class="role">الشعب:</span><br>المجد للآب والابن والروح القدس</td>
        </tr>
        <tr id="table_14_row_17" class="text">
            <td class="english"><span class="role">Priest:</span><br>When the mother saw the Lamb and Shepherd, the Savior of the world, hung on the cross, she said while weeping, “The world rejoices in receiving salvation, while my heart burns as I look at Your crucifixion which You are enduring for the sake of all, my Son and my God.”</td>
            <td class="arabic"><span class="role">الكاهن:</span><br>عندما نظرت الوالدة الحمل والراعي مخلص العالم على الصليب معلقاً قالت وهى باكية أما العالم فليفرح لقبوله الخلاص وأما أحشائي فتلتهب عند نظري إلى صلبوتك الذي أنت صابر عليه من أجل الكل يا إبني وإلهى. </td>
        </tr>
    </table>

    <table id="table_16" title="The Trisagion">
        <caption class="caption" id="caption_table_16">The Trisagion<span class="arabic-caption">الثلاث تقديسات</span></caption>
        <tr id="table_16_row_0" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲟ ̀ⲥⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ̀ⲏⲙⲁⲥ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قدوس الله. قدوس القوى. قدوس الحى الذى لا يموت، الذى صلب عنا، أرحمنا.</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲟ ̀ⲥⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ̀ⲏⲙⲁⲥ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قدوس الله. قدوس القوى. قدوس الحى الذى لا يموت، الذى صلب عنا، أرحمنا.</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲟ ̀ⲥⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ̀ⲏⲙⲁⲥ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic">قدوس الله. قدوس القوى. قدوس الحى الذى لا يموت، الذى صلب عنا، أرحمنا.</td>
        </tr>        
        <tr id="table_16_row_3" class="text">
            <td class="english">Glory be to the Father and to the Son, and to the Holy Spirit, both now, and ever, and unto the ages of ages, Amen.</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓ̀ⲱ ⲕⲉ ̀ⲁⲅⲓ̀ⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ : ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ̀ⲓ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ ̀ⲁⲙⲏⲛ..</td>
            <td class="arabic">المجد للآب والإبن و الروح القدس. الآن وكل آوان والى دهر الدهور، آمين.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_6" title="Coptic Psalm & Gospel">
    <table id="table_17" title="Coptic Psalm">
        <caption class="caption" id="caption_table_17">Coptic Psalm<br>(69:1-2, 21)
        <span class="arabic-caption">المزمور قبطي<br>(69:1-2, 21)</span></caption>

        <tr id="table_17_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_17_row_1" class="text">
            <td class="english">Save me, O God! For the waters have come up to my neck.</td>
            <td class="coptic">Ⲙⲁⲧⲁⲛϧⲟⲓ Ⲫϯ ϫⲉ ̀ⲁϩⲁⲛⲙⲱⲟⲩ ϣⲉ ⲉϧⲟⲩⲛ ϣⲁⲧⲁⲯⲩⲭⲏ :</td>
            <td class="arabic">احيينى يا الله فان المياه قد بلغت إلى نفسى.</td>
        </tr>
        <tr id="table_17_row_2" class="text">
            <td class="english">I sink in deep mire,</td>
            <td class="coptic">ⲁⲓⲑⲱⲗⲥ ϧⲉⲛ ̀ⲧϩⲩⲗⲏ ̀ⲙ̀ⲫⲙⲟⲩ.</td>
            <td class="arabic">وتورطت في حمأة الموت.</td>
        </tr>
        <tr id="table_17_row_3" class="text">
            <td class="english">They also gave me gall for my food,</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲩϯ ̀ⲛⲟⲩϣⲁϣⲓ ̀ⲉⲧⲁ̀ϧⲣⲉ:</td>
            <td class="arabic">وجعلوا طعامي مرارة.</td>
        </tr>
        <tr id="table_17_row_4" class="text">
            <td class="english">And for my thirst they gave me vinegar to drink.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲁⲩ̀ⲧⲥⲱⲓ ̀ⲛⲟⲩϩⲉⲙϫ ϧⲉⲛ ⲡⲁ̀ⲓⲃⲓ</td>
            <td class="arabic">وفى عطشى سفوني خلاً.</td>
        </tr>
        <tr id="table_17_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_19" title="Coptic Gospel">
        <caption class="caption" id="caption_table_19">Coptic Gospels
        <span class="arabic-caption">الإناجيل قبطي</span></caption>
        <tr id="table_19_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_19_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_2" class="text">
            <td class="coptic">Ⲉⲧⲁ̀̀ⲫⲛⲁⲩ ⲇⲉ ̀ⲛⲁϫⲡⲯⲓϯ ϣⲱⲡⲓ : ⲁϥⲱϣ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ Ⲓⲏⲥ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲛ̀ϧⲣⲱⲟⲩ ⲉϥϫⲱ̀ⲙⲙⲟⲥ : ϫⲉ ̀Ⲉⲗⲱ̀ⲓ ̀Ⲉⲗⲱ̀ⲓ ̀ⲉⲗⲉⲙⲁ ⲥⲁⲃⲁⲭ ⲑⲁⲛⲓ : ̀ⲉⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁⲛⲟⲩϯ Ⲡⲁⲛⲟⲩϯ ⲉⲑⲃⲉ ⲟⲩ ⲁⲕⲭⲁⲧ ̀ⲛⲥⲱⲕ. ϩⲁⲛ ⲟⲩⲟⲛ ⲇⲉ ̀ⲉⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲧⲟϩⲓ ̀ⲉⲣⲁⲧⲟⲩ ̀ⲙⲙⲁⲩ : ̀ⲉⲧⲁⲩⲥⲱⲧⲉⲙ ⲛⲁⲩϫⲱ̀ⲙⲙⲟⲥ ϫⲉ ⲁϥⲙⲟⲩϯ ⲟⲩⲃⲉ ̀ⲏⲗⲓⲁⲥ<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_19_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_5" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ϧⲉⲛ ̀ⲫⲛⲁⲩ ̀ⲛⲁϫⲡⲯⲓϯ ⲁϥⲱϣ ⲉⲃⲟⲗ ̀ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲛ̀ⲥⲙⲏ : ϫⲉ ̀Ⲉⲗⲱ̀ⲓ ̀Ⲉⲗⲱ̀ⲓ ⲉⲗⲉⲙⲁ ⲥⲁⲃⲁⲭⲑⲁⲛⲓ : ̀ⲉⲧⲉ ⲡⲉϥⲟⲩ̀ⲱϩⲉⲙ ⲡⲉ ϫⲉ Ⲡⲁⲛⲟⲩϯ Ⲡⲁⲛⲟⲩϯ ⲉⲑⲃⲉⲟⲩ ⲁⲕⲭⲁⲧ ̀ⲛⲥⲱⲕ. Ⲟⲩⲟϩ ϩⲁⲛⲟⲩⲟⲛ ̀ⲛⲧⲉ ⲛⲏⲉⲧⲟϩⲓ ̀ⲉⲣⲁⲧⲟⲩ ̀ⲉⲧⲁⲩⲥⲱⲧⲉⲙ ⲛⲁⲩϫⲱ̀ⲙⲙⲟⲥ : ϫⲉ ̀ⲁⲛⲁⲩ ⲁϥⲙⲟⲩϯ ⲟⲩⲃⲉ ̀ⲏⲗⲓⲁⲥ.<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ̀ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_19_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_8" class="text">
            <td class="coptic">̀Ⲉϥⲛⲁⲙⲟⲩⲛⲕ ⲇⲉ ̀ⲛϫⲉ ̀ⲫⲣⲏ ⲁⲡⲓⲕⲁⲧⲁⲡⲉⲧⲁⲥⲙⲁ ̀ⲛⲧⲉ ⲡⲓⲉⲣⲫⲉⲓ ⲫⲱϧ ϧⲉⲛ ⲧⲉϥⲙⲏϯ : Ⲟⲩⲟϩ ̀ⲉⲧⲁϥⲙⲟⲩϯ ̀ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ̀ⲛ̀ⲥⲙⲏ : ⲡⲉϫⲁϥ ϫⲉ ⲡⲁⲓⲱⲧ ϯ̀ⲙⲡⲁ̅ⲡ̅ⲛ̅ⲁ ̀ⲛ̀ϧⲣⲏⲓ ̀ⲉⲛⲉⲕϫⲓϫ : ⲫⲁⲓ ⲇⲉ ̀ⲉⲧⲁϥϫⲟϥ ⲁϥϯ ̀ⲙⲡⲓ̅ⲡ̅ⲛ̅ⲁ :<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ̀ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_19_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_19_row_11" class="text">
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲇⲉ ̀ⲉⲧⲁϥⲛⲁⲩ ̀ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ ϫⲉ ϩⲏⲇⲏ ̀ⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ϫⲱⲕ ̀ⲉⲃⲟⲗ : ϩⲓⲛⲁ ̀ⲛⲧⲉ ϯ̀ⲅⲣⲁⲫⲏ ϫⲱⲕ ̀ⲉⲃⲟⲗ : ⲡⲉϫⲁϥ ϫⲉ ϯⲟⲃⲓ : Ⲛⲉ ⲟⲩⲟⲛ ⲟⲩⲙⲟⲩⲕⲓ ⲇⲉ ⲉϥⲙⲉϩ ̀ⲛϩⲉⲙϫ ⲉϥⲭⲏ ̀ⲉ̀ϧⲣⲏⲓ : ⲁⲩⲙⲟϩ ̀ⲛⲟⲩ̀ⲥⲫⲟⲅⲅⲟⲥ ̀ⲛϩⲉⲙϫ : ⲁⲩⲧⲁⲗⲟϥ ̀ⲉϫⲉⲛ ⲟⲩϩⲓⲥⲟⲡⲟⲥ : ⲁⲩϩⲓⲧϥ ϧⲁⲧⲉⲛⲣⲱϥ : Ⲭⲟⲧⲉ ̀ⲉⲧⲁϥϫⲉⲙϯⲡⲓ ̀ⲙⲡⲓϩⲉⲙϫ ̀ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ : ⲡⲉϫⲁϥ ϫⲉ ⲁϥϫⲱⲕ ̀ⲉⲃⲟⲗ : ⲟⲩⲟϩ ̀ⲉⲧⲁϥⲣⲉⲕ ϫⲱϥ ⲁϥϯ ̀ⲙⲡⲓ̅ⲡ̅ⲛ̅ⲁ.<br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_19_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
<table id="table_20" title="Psalm">
    <caption id="caption_table_20" class="caption">Psalm<br>(69:1-2, 21)
    <span class="arabic-caption">المزمور<br>(69: 1-2 و 21)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Save me, O God! For the waters have come up to my neck.</td>
        <td class="arabic">خَلِّصْنِي يَا اللهُ لأَنَّ الْمِيَاهَ قَدْ دَخَلَتْ إِلَى نَفْسِي.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">I sink in deep mire,</td>
        <td class="arabic">غَرِقْتُ فِي حَمْأَةٍ عَمِيقَةٍ وَلَيْسَ مَقَرٌّ. دَخَلْتُ إِلَى أَعْمَاقِ الْمِيَاهِ وَالسَّيْلُ غَمَرَنِي.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">They also gave me gall for my food, And for my thirst they gave me vinegar to drink.</td>
        <td class="arabic">وَيَجْعَلُونَ فِي طَعَامِي عَلْقَماً وَفِي عَطَشِي يَسْقُونَنِي خَلاًّ.</td>
    </tr>
    <tr id="table_20_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_21" title="Gospel">
    <caption id="caption_table_21" class="caption">Gospel<br>(Matthew 27:46-50)
    <span class="arabic-caption">الانجيل<br>(متى  27: 46-50)</span></caption>
    <tr id="table_21_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_21_row_4" class="text">
        <td class="english">And about the ninth hour Jesus cried out with a loud voice, saying, "Eli, Eli, lama sabachthani?" that is, "My God, My God, why have You forsaken Me?"</td>
        <td class="arabic">وَنَحْوَ السَّاعَةِ التَّاسِعَةِ صَرَخَ يَسُوعُ بِصَوْتٍ عَظِيمٍ قَائِلاً: «إِيلِي إِيلِي لَمَا شَبَقْتَنِي» (أَيْ: إِلَهِي إِلَهِي لِمَاذَا تَرَكْتَنِي؟)</td>
    </tr>
    <tr id="table_21_row_5" class="text">
        <td class="english">Some of those who stood there, when they heard that, said, "This Man is calling for Elijah!"</td>
        <td class="arabic">فَقَوْمٌ مِنَ الْوَاقِفِينَ هُنَاكَ لَمَّا سَمِعُوا قَالُوا: «إِنَّهُ يُنَادِي إِيلِيَّا».</td>
    </tr>
    <tr id="table_21_row_6" class="text">
        <td class="english">Immediately one of them ran and took a sponge, filled it with sour wine and put it on a reed, and offered it to Him to drink.</td>
        <td class="arabic">وَلِلْوَقْتِ رَكَضَ وَاحِدٌ مِنْهُمْ وَأَخَذَ إِسْفِنْجَةً وَمَلَأَهَا خَلاًّ وَجَعَلَهَا عَلَى قَصَبَةٍ وَسَقَاهُ.</td>
    </tr>
    <tr id="table_21_row_7" class="text">
        <td class="english">The rest said, "Let Him alone; let us see if Elijah will come to save Him."</td>
        <td class="arabic">وَأَمَّا الْبَاقُونَ فَقَالُوا: «اتْرُكْ. لِنَرَى هَلْ يَأْتِي إِيلِيَّا يُخَلِّصُهُ».</td>
    </tr>
    <tr id="table_21_row_8" class="text">
        <td class="english">And Jesus cried out again with a loud voice, and yielded up His spirit.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">فَصَرَخَ يَسُوعُ أَيْضاً بِصَوْتٍ عَظِيمٍ وَأَسْلَمَ الرُّوحَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_21_row_10" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_22" title="Psalm">
    <caption id="caption_table_22" class="caption">Psalm<br>(69:1-2, 21)
    <span class="arabic-caption">المزمور<br>(69: 1-2 و 21)</span></caption>
    <tr id="table_22_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">Save me, O God! For the waters have come up to my neck.</td>
        <td class="arabic">خَلِّصْنِي يَا اللهُ لأَنَّ الْمِيَاهَ قَدْ دَخَلَتْ إِلَى نَفْسِي.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">I sink in deep mire,</td>
        <td class="arabic">غَرِقْتُ فِي حَمْأَةٍ عَمِيقَةٍ وَلَيْسَ مَقَرٌّ. دَخَلْتُ إِلَى أَعْمَاقِ الْمِيَاهِ وَالسَّيْلُ غَمَرَنِي.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">They also gave me gall for my food, And for my thirst they gave me vinegar to drink.</td>
        <td class="arabic">وَيَجْعَلُونَ فِي طَعَامِي عَلْقَماً وَفِي عَطَشِي يَسْقُونَنِي خَلاًّ.</td>
    </tr>
    <tr id="table_22_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_8" title="Gospel">
    <caption id="caption_table_8" class="caption">Gospel<br>(Mark 15:34-37)
    <span class="arabic-caption">الانجيل<br>(مرقس 15: 34-37)</span></caption>
    <tr id="table_8_row_0" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_8_row_4" class="text">
        <td class="english">And at the ninth hour Jesus cried out with a loud voice, saying, "Eloi, Eloi, lama sabachthani?" which is translated, "My God, My God, why have You forsaken Me?"</td>
        <td class="arabic">وَفِي السَّاعَةِ التَّاسِعَةِ صَرَخَ يَسُوعُ بِصَوْتٍ عَظِيمٍ قَائِلاً: «إِلُوِي إِلُوِي لَمَا شَبَقْتَنِي؟» (اَلَّذِي تَفْسِيرُهُ: إِلَهِي إِلَهِي لِمَاذَا تَرَكْتَنِي؟)</td>
    </tr>
    <tr id="table_8_row_5" class="text">
        <td class="english">Some of those who stood by, when they heard that, said, "Look, He is calling for Elijah!"</td>
        <td class="arabic">فَقَالَ قَوْمٌ مِنَ الْحَاضِرِينَ لَمَّا سَمِعُوا: «هُوَذَا يُنَادِي إِيلِيَّا».</td>
    </tr>
    <tr id="table_8_row_6" class="text">
        <td class="english">Then someone ran and filled a sponge full of sour wine, put it on a reed, and offered it to Him to drink, saying, "Let Him alone; let us see if Elijah will come to take Him down."</td>
        <td class="arabic">فَرَكَضَ وَاحِدٌ وَمَلَأَ إِسْفِنْجَةً خَلاًّ وَجَعَلَهَا عَلَى قَصَبَةٍ وَسَقَاهُ قَائِلاً: «اتْرُكُوا. لِنَرَ هَلْ يَأْتِي إِيلِيَّا لِيُنْزِلَهُ!»</td>
    </tr>
    <tr id="table_8_row_7" class="text">
        <td class="english">And Jesus cried out with a loud voice, and breathed His last.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">فَصَرَخَ يَسُوعُ بِصَوْتٍ عَظِيمٍ وَأَسْلَمَ الرُّوحَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_8_row_9" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_23" title="Gospel">
    <caption id="caption_table_23" class="caption">Gospel<br>(Luke 23:45-46)
    <span class="arabic-caption">الانجيل<br>(لوقا 23: 45-46)</span></caption>
    <tr id="table_23_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_23_row_4" class="text">
        <td class="english">Then the sun was darkened, and the veil of the temple was torn in two.</td>
        <td class="arabic">وَأَظْلَمَتِ الشَّمْسُ وَانْشَقَّ حِجَابُ الْهَيْكَلِ مِنْ وَسَطِهِ.</td>
    </tr>
    <tr id="table_23_row_5" class="text">
        <td class="english">And when Jesus had cried out with a loud voice, He said, "Father, 'into Your hands I commit My spirit.' " Having said this, He breathed His last.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">وَنَادَى يَسُوعُ بِصَوْتٍ عَظِيمٍ: «يَا أَبَتَاهُ فِي يَدَيْكَ أَسْتَوْدِعُ رُوحِي». وَلَمَّا قَالَ هَذَا أَسْلَمَ الرُّوحَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_23_row_7" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_24" title="Gospel">
    <caption id="caption_table_24" class="caption">Gospel<br>(John 19:28-30)
    <span class="arabic-caption">الانجيل<br>(يوحنا 19: 28-30)</span></caption>
    <tr id="table_24_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_24_row_4" class="text">
        <td class="english">After this, Jesus, knowing that all things were now accomplished, that the Scripture might be fulfilled, said, "I thirst!"</td>
        <td class="arabic">بَعْدَ هَذَا رَأَى يَسُوعُ أَنَّ كُلَّ شَيْءٍ قَدْ كَمَلَ فَلِكَيْ يَتِمَّ الْكِتَابُ قَالَ: «أَنَا عَطْشَانُ».</td>
    </tr>
    <tr id="table_24_row_5" class="text">
        <td class="english">Now a vessel full of sour wine was sitting there; and they filled a sponge with sour wine, put it on hyssop, and put it to His mouth.</td>
        <td class="arabic">وَكَانَ إِنَاءٌ مَوْضُوعاً مَمْلُوّاً خَلاًّ فَمَلَأُوا إِسْفِنْجَةً مِنَ الْخَلِّ وَوَضَعُوهَا عَلَى زُوفَا وَقَدَّمُوهَا إِلَى فَمِهِ.</td>
    </tr>
    <tr id="table_24_row_6" class="text">
        <td class="english">So when Jesus had received the sour wine, He said, "It is finished!" And bowing His head, He gave up His spirit.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">فَلَمَّا أَخَذَ يَسُوعُ الْخَلَّ قَالَ: «قَدْ أُكْمِلَ». وَنَكَّسَ رَأْسَهُ وَأَسْلَمَ الرُّوحَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_24_row_8" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}

<table id="table_26" title="Exposition">
    <caption id="caption_table_26" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_26_row_1" class="intro">
        <td class="english">The exposition of the NINTH Hour of the DAY of GOOD FRIDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة التاسعة من يوم الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_26_row_4" class="text">
        <td class="english">From generation to generation, your years will not wither. Your name was before the creation of the sun.</td>
        <td class="arabic">من جيل إلى جيل سنوك لن تبلى، ومن قبل الشمس كان اسمك.</td>
    </tr>
    <tr id="table_26_row_5" class="text">
        <td class="english">I see you hung on the cross. Behold today, I see You hanging on the cross O Almighty God.</td>
        <td class="arabic">وهوذا أراك اليوم معلقاً على خشبة الصليب يا ضابط كل المسكونة.</td>
    </tr>
    <tr id="table_26_row_6" class="text">
        <td class="english">How can Your own creation do that to You,</td>
        <td class="arabic">كيف تجرأ عليك المخالفون الذين هم صنعتك أيها الفخارى؟!</td>
    </tr>
    <tr id="table_26_row_7" class="text">
        <td class="english">O You who summoned all those who are wounded and cured their wounds.</td>
        <td class="arabic">يا من جذب اليه كل المجروحين وشفى جراحهم.</td>
    </tr>
    <tr id="table_26_row_8" class="text">
        <td class="english">O You the True Physician, You were hung on the cross as a criminal by the sinful,</td>
        <td class="arabic">أيها الطبيب الحقيقى، علقوك على خشبة مثل فاعل شر، أى الشعب المملوء اثماً.</td>
    </tr>
    <tr id="table_26_row_9" class="text">
        <td class="english">who shouted with their evil voices saying, “We have no King but Caesar.”</td>
        <td class="arabic">أولئك الذين رفعوا أصواتهم الشريرة وقالوا ليس لهم ملك إلا قيصر.</td>
    </tr>
    <tr id="table_26_row_10" class="text">
        <td class="english">At the ninth hour, our Savior was crucified,</td>
        <td class="arabic">ولما كان وقت الساعة التاسعة، ومخلصنا معلق على الصليب،</td>
    </tr>
    <tr id="table_26_row_11" class="text">
        <td class="english">and he opened His mouth and shouted in Hebrew,</td>
        <td class="arabic">فتح المخلص فاه باللغة العبرانية هكذا قائلاً:</td>
    </tr>
    <tr id="table_26_row_12" class="text">
        <td class="english">“Eloi, Eloi, Lama Sabachthani? Which is translated, “My God, My God, why have You forsaken Me?”</td>
        <td class="arabic">الوى الوى لما شبقتنى،</td>
    </tr>
    <tr id="table_26_row_13" class="text">
        <td class="english">And there was great fear among those around Him.</td>
        <td class="arabic">حتى خاف جميع الذين كانوا حوله. الذى هو الهى الهى أنظر إلىّ، كما هو مكتوب فى المزمور.</td>
    </tr>
    <tr id="table_26_row_14" class="text">
        <td class="english">When the hour, which He only knew, drew near, He said, “I thirst.”</td>
        <td class="arabic">ولما قربت منه الساعة التى يعرفها هو وحده، أجاب وقال: الآن أنا عطشان.</td>
    </tr>
    <tr id="table_26_row_15" class="text">
        <td class="english">For He knew what was written regarding Him.</td>
        <td class="arabic">لأنه هو كان يعرف الذى كتب من أجله.</td>
    </tr>
    <tr id="table_26_row_16" class="text">
        <td class="english">Someone took a sponge, filled it with vinegar, put it on a rod, and gave Him to drink.</td>
        <td class="arabic">فأخذ واحد أسفنجة وملأها خلاً وجعلها على قصبة وسقاه.</td>
    </tr>
    <tr id="table_26_row_17" class="text">
        <td class="english">When He tasted the vinegar, He said, “It is finished!” Thus he fulfilled David the prophet’s prophecy in the Psalms.</td>
        <td class="arabic">فلما ذاق الخل قال: قد أكمل، كقول داود فى المزمور.</td>
    </tr>
    <tr id="table_26_row_18" class="text">
        <td class="english">Then He shouted with a great voice and gave up the Spirit.</td>
        <td class="arabic">ومن بعد الخل أمال رأسه وصاح بصوت عظيم وأسلم الروح.</td>
    </tr>
    <tr id="table_26_row_19" class="text">
        <td class="english">Who will preach the captives about the one who tasted death on their behalf and who will lead the way to paradise to prepare the way for the kingdom?</td>
        <td class="arabic">من يبشر المسبيين بالذى ذاق الموت عنهم؟! ومن الذى يسبق إلى الفردوس فيهيئ الطريق للملك؟!</td>
    </tr>
    <tr id="table_26_row_20" class="text">
        <td class="english">Rejoice today, all you righteous, prophets, and patriarchs.</td>
        <td class="arabic">افرحوا اليوم أيها الأبرار والأنبياء والبطاركة والصديقون.</td>
    </tr>
    <tr id="table_26_row_21" class="text">
        <td class="english">The first man, the head, who was freed from sadness, has been renewed in the new man who conquered death, ended its pride and broke its bitter thorn.</td>
        <td class="arabic">والإنسان الأول الرأس الذى عتق فى الحزن، قد تجدد اليوم بالإنسان الجديد الذى قتل الموت وأبطل عزته. وكسر شوكته المرة، وقطعها الله الكلمة بكليتها.</td>
    </tr>
    <tr id="table_26_row_22" class="text">
        <td class="english">God the Word, in its perfection, and went to Hell by the soul, which He took from Adam’s nature and made it one with Himself.</td>
        <td class="arabic">ومضى إلى الجحيم بالنفس التى أخذها من طبيعة آدم وجعلها واحداً معه.</td>
    </tr>
    <tr id="table_26_row_23" class="text">
        <td class="english">And the souls were in captivity; He lifted with Him according to His great mercy.</td>
        <td class="arabic">والنفوس التى كانت فى السجن أصعدها معه كعظيم رحمته.</td>
    </tr>
    <tr id="table_26_row_24" class="text">
        <td class="english">The last enemy is Satan whom He chained with shackles.</td>
        <td class="arabic">والعدو الأخير الذى هو الشيطان قيده بالقيود والسلاسل.</td>
    </tr>
    <tr id="table_26_row_25" class="text">
        <td class="english">When the evil guards and the forces of darkness saw Him, they ran away from Him because they knew His great power.</td>
        <td class="arabic">فلما رآه البوابون الأشرار والقوات الكائنة فى الظلمة، هربوا ولم يطيقوا الثبوت لأنهم عرفوا قوته وكثرة جبروته. فكسر الأبواب النحاس بسلطانه والمتاريس الحديد سحقها.</td>
    </tr>
    <tr id="table_26_row_26" class="text">
        <td class="english">Those who were in captivity cried in one voice, “Blessed is your coming to save us.”</td>
        <td class="arabic">أما المسبيون فلما رأوا الرب يسوع مخلص نفوسهم، صرخوا قائلين: حسناً جئت أيها المنقذ عبيده.</td>
    </tr>
    <tr id="table_26_row_27" class="text">
        <td class="english">He then took Adam by the hand and lifted him and his descendants with him and admitted them to paradise where there is comfort and joy.</td>
        <td class="arabic">ثم أمسك أولا بيد آدم واجتذبه واصعده وبنيه معه، وأدخلهم إلى الفردوس مسكن الفرح والراحة.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanGreatHtml}
${endOfServiceHymnHtml}
</div>

`;

};