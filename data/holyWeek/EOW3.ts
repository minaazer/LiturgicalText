import { hourIntro, paschalPraise2 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion,  cross} from "../repeatedPrayers";

export const EOW3 = () => {
    const hourIntroHtml = hourIntro("THIRD","الثالثة","EVE of WEDNESDAY","ليلة الاربعاء");
    const paschalPraiseHtml = paschalPraise2("4","4","5","THIRD","الثالثة","EVE of WEDNESDAY","ليلة الاربعاء");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("11");
    const expositionConclusionHtml = expositionConclusion("13");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲁⲙⲟⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲟⲩⲟⲓ ⲛ̀ⲛⲏⲉⲧⲉⲣ ⲉ̀ⲡⲓⲑⲩⲙⲓⲛ ⲉ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ Ⲡ̀⳪ : ⲉ̀ⲣⲟⲩ ⲛⲱⲧⲉⲛ ⲉ̀ⲡⲁⲓ. ⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ Ⲡ̀⳪ : ⲟⲩⲟϩ ⲡⲁⲓ ⲉ̀ϩⲟⲟⲩ ⲛ̀ⲟⲩⲭⲁⲕⲓ ⲟⲩⲟϩ ⲛ̀ⲟⲩⲱⲓⲛⲓ ⲁⲛ ⲡⲉ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Amos 5:18-27)
    <span class="arabic-caption">النبوة الأولي<br>(عاموس 18:5 – 27)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Amos the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من عاموس النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Woe to you who desire the day of the Lord! For what good is the day of the Lord to you? It will be darkness, and not light.</td>
        <td class="arabic">«وَيْلٌ لِلَّذِينَ يَشْتَهُونَ يَوْمَ الرَّبِّ. لِمَاذَا لَكُمْ يَوْمُ الرَّبِّ هُوَ ظَلاَمٌ لاَ نُورٌ؟</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">It will be as though a man fled from a lion, And a bear met him! Or as though he went into the house, Leaned his hand on the wall, And a serpent bit him!</td>
        <td class="arabic">كَمَا إِذَا هَرَبَ إِنْسَانٌ مِنْ أَمَامِ الأَسَدِ فَصَادَفَهُ الدُّبُّ أَوْ دَخَلَ الْبَيْتَ وَوَضَعَ يَدَهُ عَلَى الْحَائِطِ فَلَدَغَتْهُ الْحَيَّةُ!</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Is not the day of the Lord darkness, and not light? Is it not very dark, with no brightness in it?</td>
        <td class="arabic">أَلَيْسَ يَوْمُ الرَّبِّ ظَلاَماً لاَ نُوراً وَقَتَاماً وَلاَ نُورَ لَهُ؟</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">"I hate, I despise your feast days, And I do not savor your sacred assemblies.</td>
        <td class="arabic">«بَغَضْتُ كَرِهْتُ أَعْيَادَكُمْ وَلَسْتُ أَلْتَذُّ بِاعْتِكَافَاتِكُمْ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Though you offer Me burnt offerings and your grain offerings, I will not accept them, Nor will I regard your fattened peace offerings.</td>
        <td class="arabic">إِنِّي إِذَا قَدَّمْتُمْ لِي مُحْرَقَاتِكُمْ وَتَقْدِمَاتِكُمْ لاَ أَرْتَضِي وَذَبَائِحَ السَّلاَمَةِ مِنْ مُسَمَّنَاتِكُمْ لاَ أَلْتَفِتُ إِلَيْهَا.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Take away from Me the noise of your songs, For I will not hear the melody of your stringed instruments.</td>
        <td class="arabic">أَبْعِدْ عَنِّي ضَجَّةَ أَغَانِيكَ وَنَغْمَةَ رَبَابِكَ لاَ أَسْمَعُ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">But let justice run down like water, And righteousness like a mighty stream.</td>
        <td class="arabic">وَلْيَجْرِ الْحَقُّ كَالْمِيَاهِ وَالْبِرُّ كَنَهْرٍ دَائِمٍ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">"Did you offer Me sacrifices and offerings In the wilderness forty years, O house of Israel?</td>
        <td class="arabic">«هَلْ قَدَّمْتُمْ لِي ذَبَائِحَ وَتَقْدِمَاتٍ فِي الْبَرِّيَّةِ أَرْبَعِينَ سَنَةً يَا بَيْتَ إِسْرَائِيلَ؟</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">You also carried Sikkuth your idols, The star of your gods, Which you made for yourselves.</td>
        <td class="arabic">بَلْ حَمَلْتُمْ خَيْمَةَ مَلْكُومِكُمْ وَتِمْثَالَ أَصْنَامِكُمْ نَجْمَ إِلَهِكُمُ الَّذِي صَنَعْتُمْ لِنُفُوسِكُمْ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">Therefore I will send you into captivity beyond Damascus," Says the Lord, whose name is the God of hosts.</td>
        <td class="arabic">فَأَسْبِيكُمْ إِلَى مَا وَرَاءَ دِمَشْقَ قَالَ الرَّبُّ إِلَهُ الْجُنُودِ اسْمُهُ».</td>
    </tr>
    <tr id="table_3_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(65:4,5)
        <span class="arabic-caption">المزمور قبطياً<br>(64: 4 ، 5)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">Blessed is the man You choose, And cause to approach You,</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁⲧϥ ⲙ̀ⲫⲏⲉ̀ⲧⲁⲕⲥⲟⲧⲡϥ ⲟⲩⲟϩ ⲁⲕϣⲟⲡϥ ⲉ̀ⲣⲟⲕ :</td>
            <td class="arabic">طوبى لمن اخترته وقبلته</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">That he may dwell in Your courts.</td>
            <td class="coptic">ⲉϥⲉ̀ϣⲱⲡⲓ ϧⲉⲛ ⲛⲉⲕⲁⲩⲗⲏⲟⲩ ϣⲁⲉ̀ⲛⲉϩ. </td>
            <td class="arabic">ليسكن في ديارك إلى الابد.</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">We shall be satisfied with the goodness of Your house, </td>
            <td class="coptic">Ϥ̀ⲟⲩⲁⲃ ⲛ̀ϫⲉ ⲡⲉⲕⲉⲣⲫⲉⲓ : </td>
            <td class="arabic">قدوس هو هيكلك </td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">of Your holy temple.</td>
            <td class="coptic">ⲟⲩⲟϩ ϥⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ</td>
            <td class="arabic">وعجيب بالبر.</td>
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
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲉⲑⲃⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲇⲉ ⲉⲧⲉ ⲙ̀ⲙⲁⲩ ⲛⲉⲙ ϯⲥⲩⲛⲟⲩ : ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲉ̀ⲙⲓ ⲉ̀ⲣⲱⲟⲩ : ⲟⲩⲇⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲉ̀ⲃⲏⲗ ⲉ̀ⲫ̀ⲓⲱⲧ ⲙ̀ⲙⲁⲩⲁⲧϥ : ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲛ̀ⲛⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ Ⲛⲱⲉ̀ : ⲡⲁⲓⲣⲏϯ ⲉⲑⲛⲁϣⲱⲡⲓ ϧⲉⲛ ⲧ̀ⲡⲁⲣⲟⲩⲥⲓⲁ̀ ⲙ̀ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲫ̀ⲣⲱⲙⲓ. ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲉ̀ⲛⲁⲩϣⲟⲡ ϧⲉⲛ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲉⲧϧⲁϫⲱϥ ⲙ̀ⲡⲓⲕⲁⲧⲁⲕ̀ⲗⲩⲥⲙⲟⲥ ⲉⲩⲟⲩⲱⲙ ⲟⲩⲟϩ ⲉⲩⲥⲱ : ⲉⲩϭⲓⲥ̀ϩⲓⲙⲓ ⲟⲩⲟϩ ⲉⲩϭⲓϩⲁⲓ : ϣⲁ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲁ Ⲛⲱⲉ̀ ϣⲉⲛⲁϥ ⲉ̀ϧⲟⲩⲛ ⲉ̀ϯⲕⲩⲃⲱⲧⲟⲥ ⲙ̀ⲙⲟϥ. Ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲉ̀ⲙⲓ ϣⲁⲧⲉϥⲓ̀ ⲛ̀ϫⲉ ⲡⲓⲕⲁⲧⲁ ⲕ̀ⲗⲩⲥⲙⲟⲥ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲉⲗ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲡⲁⲓⲣⲏϯ ⲉⲑⲛⲁϣⲱⲡⲓ ϧⲉⲛ ⲡ̀ϫⲓⲛⲓ̀ ⲙ̀ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲫ̀ⲣⲱⲙⲓ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(65:4,5)
    <span class="arabic-caption">المزمور<br>(64: 4 ، 5)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">Blessed is the man You choose, And cause to approach You, That he may dwell in Your courts. We shall be satisfied with the goodness of Your house, of Your holy temple.</td>
        <td class="arabic">طوبى لمن اخترته  وقبلته ليسكن فى ديارك إلى الابد. قدوس هو هيكلك وعجيب بالبر.</td>
    </tr>
    <tr id="table_9_row_6" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Matthew 24:36-51)
    <span class="arabic-caption">الانجيل<br>(متى 24 :36-51)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">"But of that day and hour no one knows, not even the angels of heaven, but My Father only.</td>
        <td class="arabic">وَأَمَّا ذَلِكَ الْيَوْمُ وَتِلْكَ السَّاعَةُ فَلاَ يَعْلَمُ بِهِمَا أَحَدٌ وَلاَ مَلاَئِكَةُ السَّمَاوَاتِ إِلاَّ أَبِي وَحْدَهُ.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">But as the days of Noah were, so also will the coming of the Son of Man be.</td>
        <td class="arabic">وَكَمَا كَانَتْ أَيَّامُ نُوحٍ كَذَلِكَ يَكُونُ أَيْضاً مَجِيءُ ابْنِ الإِنْسَانِ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">For as in the days before the flood, they were eating and drinking, marrying and giving in marriage, until the day that Noah entered the ark,</td>
        <td class="arabic">لأَنَّهُ كَمَا كَانُوا فِي الأَيَّامِ الَّتِي قَبْلَ الطُّوفَانِ يَأْكُلُونَ وَيَشْرَبُونَ وَيَتَزَوَّجُونَ وَيُزَوِّجُونَ إِلَى الْيَوْمِ الَّذِي دَخَلَ فِيهِ نُوحٌ الْفُلْكَ</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">and did not know until the flood came and took them all away, so also will the coming of the Son of Man be.</td>
        <td class="arabic">وَلَمْ يَعْلَمُوا حَتَّى جَاءَ الطُّوفَانُ وَأَخَذَ الْجَمِيعَ كَذَلِكَ يَكُونُ أَيْضاً مَجِيءُ ابْنِ الإِنْسَانِ.</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">Then two men will be in the field: one will be taken and the other left.</td>
        <td class="arabic">حِينَئِذٍ يَكُونُ اثْنَانِ فِي الْحَقْلِ يُؤْخَذُ الْوَاحِدُ وَيُتْرَكُ الآخَرُ.</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">Two women will be grinding at the mill: one will be taken and the other left.</td>
        <td class="arabic">اثْنَتَانِ تَطْحَنَانِ عَلَى الرَّحَى تُؤْخَذُ الْوَاحِدَةُ وَتُتْرَكُ الأُخْرَى.</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">Watch therefore, for you do not know what hour your Lord is coming.</td>
        <td class="arabic">«اِسْهَرُوا إِذاً لأَنَّكُمْ لاَ تَعْلَمُونَ فِي أَيَّةِ سَاعَةٍ يَأْتِي رَبُّكُمْ.</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">But know this, that if the master of the house had known what hour the thief would come, he would have watched and not allowed his house to be broken into.</td>
        <td class="arabic">وَاعْلَمُوا هَذَا أَنَّهُ لَوْ عَرَفَ رَبُّ الْبَيْتِ فِي أَيِّ هَزِيعٍ يَأْتِي السَّارِقُ لَسَهِرَ وَلَمْ يَدَعْ بَيْتَهُ يُنْقَبُ.</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english">Therefore you also be ready, for the Son of Man is coming at an hour you do not expect.</td>
        <td class="arabic">لِذَلِكَ كُونُوا أَنْتُمْ أَيْضاً مُسْتَعِدِّينَ لأَنَّهُ فِي سَاعَةٍ لاَ تَظُنُّونَ يَأْتِي ابْنُ الإِنْسَانِ.</td>
    </tr>
    <tr id="table_10_row_13" class="text">
        <td class="english">"Who then is a faithful and wise servant, whom his master made ruler over his household, to give them food in due season?</td>
        <td class="arabic">فَمَنْ هُوَ الْعَبْدُ الأَمِينُ الْحَكِيمُ الَّذِي أَقَامَهُ سَيِّدُهُ عَلَى خَدَمِهِ لِيُعْطِيَهُمُ الطَّعَامَ فِي حِينِهِ؟</td>
    </tr>
    <tr id="table_10_row_14" class="text">
        <td class="english">Blessed is that servant whom his master, when he comes, will find so doing.</td>
        <td class="arabic">طُوبَى لِذَلِكَ الْعَبْدِ الَّذِي إِذَا جَاءَ سَيِّدُهُ يَجِدُهُ يَفْعَلُ هَكَذَا!</td>
    </tr>
    <tr id="table_10_row_15" class="text">
        <td class="english">Assuredly, I say to you that he will make him ruler over all his goods.</td>
        <td class="arabic">اَلْحَقَّ أَقُولُ لَكُمْ إِنَّهُ يُقِيمُهُ عَلَى جَمِيعِ أَمْوَالِهِ.</td>
    </tr>
    <tr id="table_10_row_16" class="text">
        <td class="english">But if that evil servant says in his heart, 'My master is delaying his coming,'</td>
        <td class="arabic">وَلَكِنْ إِنْ قَالَ ذَلِكَ الْعَبْدُ الرَّدِيُّ فِي قَلْبِهِ: سَيِّدِي يُبْطِئُ قُدُومَهُ.</td>
    </tr>
    <tr id="table_10_row_17" class="text">
        <td class="english">and begins to beat his fellow servants, and to eat and drink with the drunkards,</td>
        <td class="arabic">فَيَبْتَدِئُ يَضْرِبُ الْعَبِيدَ رُفَقَاءَهُ وَيَأْكُلُ وَيَشْرَبُ مَعَ السُّكَارَى.</td>
    </tr>
    <tr id="table_10_row_18" class="text">
        <td class="english">the master of that servant will come on a day when he is not looking for him and at an hour that he is not aware of,</td>
        <td class="arabic">يَأْتِي سَيِّدُ ذَلِكَ الْعَبْدِ فِي يَوْمٍ لاَ يَنْتَظِرُهُ وَفِي سَاعَةٍ لاَ يَعْرِفُهَا</td>
    </tr>
    <tr id="table_10_row_19" class="text">
        <td class="english">and will cut him in two and appoint him his portion with the hypocrites. There shall be weeping and gnashing of teeth.</td>
        <td class="arabic">فَيُقَطِّعُهُ وَيَجْعَلُ نَصِيبَهُ مَعَ الْمُرَائِينَ. هُنَاكَ يَكُونُ الْبُكَاءُ وَصَرِيرُ الأَسْنَانِ».</td>
    </tr>
    <tr id="table_10_row_20" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_10_row_22" class="intro">
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
        <td class="english">The exposition of the THIRD Hour of the EVE of WEDNESDAY of Holy Pascha. May its blessings be with us all. Amen.</td>
        <td class="arabic">طرح الساعة الثالثة من ليلة الأربعاء من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Contemplate, you who exalt the Lord, the kindness of Christ our God.</td>
        <td class="arabic">تأملوا يا عابدى الاله إلى تحنن المسيح الهنا،</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">Observe how he calls his chosen, prudent and honest servants, who fulfill his will.</td>
        <td class="arabic">كيف يدعو أصفياءه الصانعين ارادته عبيداً حكماء وأمناء!</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">In particular, those who preserve his commandments, look forward to their awards, and remain awake and alert, so that they may receive the promised rewards.</td>
        <td class="arabic">أى الذين يحفظون وصاياه، المتوقعين أجراً صالحاً،  الساهرين المتيقظين لكى ينالوا المواعيد.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">As the Bible asserts, that servant, whose master makes a surprise visit and finds him awake, is blessed.</td>
        <td class="arabic">كما قال فى الإنجيل أن ذلك العبد مغبوط، أى الذى يأتى سيده بغتة فيجده يفعل هكذا.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">Verily I say, he will commission his servant to take care of his property.</td>
        <td class="arabic">أقول إنه يقيمه وكيلاً على جميع أمواله.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">As for whom he finds neglecting his duties, his master will one day make a surprise visit, cast him out, and make his lot with the hypocrites in the place of darkness and suffering.</td>
        <td class="arabic">فاما ذلك الذى يجده متغافلاً، ويهمل يوماً بعد يوم، فيجئ سيده فى ساعة لا يعرفها فيشقه من وسطه ويجعل نصيبه مع المرائين فى الظلمة وموضع العذاب.</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english">Let us awake and be alert in anticipation of the day of the Lord, so that we may rejoice with him in his dwelling and receive his clemencies and mercies.</td>
        <td class="arabic">فلنتيقظ من غفلتنا وننتظر يوم الرب، لنفرح معه فى دياره، ونفوز بمراحمه ورأفاته.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};