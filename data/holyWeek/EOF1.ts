import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const EOF1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","EVE of Great Friday","ليلة الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","4","5","FIRST","الأولى","EVE of Great Friday","ليلة الجمعة العظيمة");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("15");
    const expositionConclusionHtml = expositionConclusion("17");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗ ϧⲉⲛ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ϩⲏⲡⲡⲉ ⲁⲛⲟⲕ ϯⲛⲁⲟⲩⲱⲣⲡ ϣⲁⲣⲱⲧⲉⲛ ⲛ̀ϩⲁⲛϩⲟϥ ⲛ̀ⲣⲉϥϧⲱⲧⲉⲃ : ⲛⲁⲓ ⲉ̀ⲧⲉ ⲙ̀ⲙⲟⲛ ϣ̀ϫⲟⲙ ⲉ̀ⲙⲟⲩϯ ⲉ̀ⲣⲱⲟⲩ : ⲟⲩⲟϩ ⲥⲉⲛⲁϭⲓⲗⲁⲯⲓⲛ ⲙ̀ⲙⲟⲧⲉⲛ ⲡⲉϫⲉ Ⲡ̀⳪ ⲙ̀ⲙⲟⲛ ⲧⲁⲗϭⲟ ⲛⲁⲧⲁϩⲉⲑⲏⲛⲟⲩ</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Jeremiah 8:17-9:6)
    <span class="arabic-caption">النبوة الأولي<br>(ارميا ٨ : ١٧- ٩ : ٦)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Jeremiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من أرميا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">"For behold, I will send serpents among you, Vipers which cannot be charmed, And they shall bite you," says the Lord.</td>
        <td class="arabic">لأَنِّي هَئَنَذَا مُرْسِلٌ عَلَيْكُمْ حَيَّاتٍ أَفَاعِيَ لاَ تُرْقَى فَتَلْدَغُكُمْ يَقُولُ الرَّبُّ].</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">I would comfort myself in sorrow; My heart is faint in me.</td>
        <td class="arabic">مَنْ مُفَرِّجٌ عَنِّي الْحُزْنَ؟ قَلْبِي فِيَّ سَقِيمٌ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Listen! The voice, The cry of the daughter of my people From a far country: "Is not the Lord in Zion? Is not her King in her?" "Why have they provoked Me to anger With their carved images-- With foreign idols?"</td>
        <td class="arabic">هُوَذَا صَوْتُ اسْتِغَاثَةِ بِنْتِ شَعْبِي مِنْ أَرْضٍ بَعِيدَةٍ. أَلَعَلَّ الرَّبَّ لَيْسَ فِي صِهْيَوْنَ أَوْ مَلِكَهَا لَيْسَ فِيهَا؟ لِمَاذَا أَغَاظُونِي بِمَنْحُوتَاتِهِمْ بِأَبَاطِيلَ غَرِيبَةٍ؟</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">"The harvest is past, The summer is ended, And we are not saved!"</td>
        <td class="arabic">مَضَى الْحَصَادُ انْتَهَى الصَّيْفُ وَنَحْنُ لَمْ نَخْلُصْ!</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">For the hurt of the daughter of my people I am hurt. I am mourning; Astonishment has taken hold of me.</td>
        <td class="arabic">مِنْ أَجْلِ سَحْقِ بِنْتِ شَعْبِي انْسَحَقْتُ. حَزِنْتُ. أَخَذَتْنِي دَهْشَةٌ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Is there no balm in Gilead, Is there no physician there? Why then is there no recovery For the health of the daughter of my people?</td>
        <td class="arabic">أَلَيْسَ بَلَسَانٌ فِي جِلْعَادَ أَمْ لَيْسَ هُنَاكَ طَبِيبٌ؟ فَلِمَاذَا لَمْ تُعْصَبْ بِنْتُ شَعْبِي؟</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">Oh, that my head were waters, And my eyes a fountain of tears, That I might weep day and night For the slain of the daughter of my people!</td>
        <td class="arabic">يَا لَيْتَ رَأْسِي مَاءٌ وَعَيْنَيَّ يَنْبُوعُ دُمُوعٍ فَأَبْكِيَ نَهَاراً وَلَيْلاً قَتْلَى بِنْتِ شَعْبِي.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Oh, that I had in the wilderness A lodging place for travelers; That I might leave my people, And go from them! For they are all adulterers, An assembly of treacherous men.</td>
        <td class="arabic">يَا لَيْتَ لِي فِي الْبَرِّيَّةِ مَبِيتَ مُسَافِرِينَ فَأَتْرُكَ شَعْبِي وَأَنْطَلِقَ مِنْ عِنْدِهِمْ لأَنَّهُمْ جَمِيعاً زُنَاةٌ جَمَاعَةُ خَائِنِينَ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">"And like their bow they have bent their tongues for lies. They are not valiant for the truth on the earth. For they proceed from evil to evil, And they do not know Me," says the Lord.</td>
        <td class="arabic">يَمُدُّونَ أَلْسِنَتَهُمْ كَقِسِيِّهِمْ لِلْكَذِبِ. لاَ لِلْحَقِّ قَوُوا فِي الأَرْضِ. لأَنَّهُمْ خَرَجُوا مِنْ شَرٍّ إِلَى شَرٍّ وَإِيَّايَ لَمْ يَعْرِفُوا يَقُولُ الرَّبُّ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">"Everyone take heed to his neighbor, And do not trust any brother; For every brother will utterly supplant, And every neighbor will walk with slanderers.</td>
        <td class="arabic">اِحْتَرِزُوا كُلُّ وَاحِدٍ مِنْ صَاحِبِهِ وَعَلَى كُلِّ أَخٍ لاَ تَتَّكِلُوا لأَنَّ كُلَّ أَخٍ يَعْقِبُ عَقِباً وَكُلَّ صَاحِبٍ يَسْعَى فِي الْوِشَايَةِ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">Everyone will deceive his neighbor, And will not speak the truth; They have taught their tongue to speak lies; They weary themselves to commit iniquity.</td>
        <td class="arabic">وَيَخْتِلُ الإِنْسَانُ صَاحِبَهُ وَلاَ يَتَكَلَّمُونَ بِالْحَقِّ. عَلَّمُوا أَلْسِنَتَهُمُ التَّكَلُّمَ بِالْكَذِبِ وَتَعِبُوا فِي الاِفْتِرَاءِ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">Your dwelling place is in the midst of deceit; Through deceit they refuse to know Me," says the Lord.</td>
        <td class="arabic">مَسْكَنُكَ فِي وَسَطِ الْمَكْرِ. بِالْمَكْرِ أَبُوا أَنْ يَعْرِفُونِي يَقُولُ الرَّبُّ.</td>
    </tr>
    <tr id="table_3_row_17" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(102:1,8)
        <span class="arabic-caption">المزمور قبطياً<br>(102: 1 و 8)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">Hear my prayer, O Lord,</td>
            <td class="coptic">Ⲡϭⲟⲓⲥ ⲥⲱⲧⲉⲙ ⲉ̀ⲧⲁⲡ̀ⲣⲟⲥ ⲉⲩⲭⲏ:</td>
            <td class="arabic">يا رب أستمع صلاتي</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">And let my cry come to You.</td>
            <td class="coptic">ⲙⲁⲣⲉ ⲡⲁϧ̀ⲣⲱⲟⲩ ⲓ̀ ⲉ̀ⲡ̀ϣⲱⲓ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ.</td>
            <td class="arabic">وليصعد أمامك صراخي.</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">My enemies reproach me all day long,</td>
            <td class="coptic">Ⲙⲡⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣϥ ⲛⲁⲩϯϣⲱϣ ⲛⲏⲓ ⲛ̀ϫⲉ ⲛⲁϫⲁϫⲓ:</td>
            <td class="arabic">النهار كله كان يعيرني</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">Those who deride me swear an oath against me.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲛⲏⲉⲧϣⲟⲩϣⲟⲩ ⲉ̀ϫⲱⲓ ⲛⲁⲩⲱⲣⲕ ⲉ̀ϩ̀ⲣⲁⲓ ⲡⲉ.</td>
            <td class="arabic">أعدائي والذين يمدحونني كانوا يتحالفون على.</td>
        </tr>
        <tr id="table_6_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_8" title="Coptic Gospel">
        <caption class="caption" id="caption_table_8">Coptic Gospels
        <span class="arabic-caption">الأناجيل قبطياً</span></caption>
        <tr id="table_8_row_0" class="priest">
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ̀ⲁⲅⲓⲟ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲛⲁϣⲏⲣⲓ ⲉ̀ⲧⲓ ⲕⲉⲕⲟⲩϫⲓ ⲛ̀ⲥⲏⲟⲩ ϯⲭⲏ ⲛⲉⲙⲱⲧⲉⲛ: ⲟⲩⲟϩ ⲧⲉⲧⲉⲛⲛⲁⲕⲱϯ ⲛ̀ⲥⲱⲓ: ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲓϫⲟⲥ ⲛ̀ⲛⲓⲒⲟⲩⲇⲁⲓ ϫⲉ ⲫ̀ⲙⲁ ⲁ̀ⲛⲟⲕ ⲉ̀ϯⲛⲁϣⲉⲛⲏⲓ ⲉ̀ⲣⲟϥ ⲛ̀ⲑⲱⲧⲉⲛ ⲧⲉⲧⲉⲛⲛⲁϣ̀ⲓ ⲉ̀ⲣⲟϥ ⲁⲛ : ⲟⲩⲟϩ ϯⲛⲟⲩ ϩⲱⲧⲉⲛ ϯϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_3" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ̀ⲁⲅⲓⲟ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_5" class="text">
            <td class="coptic">Ⲉϣⲱⲡ ⲇⲉ ⲁϥϣⲁⲛⲓ ⲛϫⲉ ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ: ⲫⲏⲉⲧⲉ ⲡⲁⲓⲱⲧ ⲛⲁⲟⲩⲟⲣⲡϥ ϧⲉⲛ ⲡⲁⲣⲁⲛ: ⲛⲑⲟϥ ⲉⲑⲛⲁⲧⲥⲁⲃⲉ ⲑⲏⲛⲟⲩ ⲉϩⲱⲃ ⲛⲓⲃⲉⲛ : ⲟⲩⲟϩ ϥⲛⲁϯ ⲙⲫⲙⲉⲩⲓ ⲛⲱⲧⲉⲛ ⲉϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉⲧⲁⲓϫⲟⲧⲟⲩ ⲛⲱⲧⲉⲛ:<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_6" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_8_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_8" class="text">
            <td class="coptic">Ⲉϣⲱⲡ ⲇⲉ ⲁϥϣⲁⲛⲓ̀ ⲛ̀ϫⲉ ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ ⲫⲏⲁ̀ⲛⲟⲕ ⲉ̀ϯⲛⲁⲟⲩⲟⲣⲡϥ ⲛⲱⲧⲉⲛ ⲉ̀ⲃⲟⲗϩⲓⲧⲟⲧϥ ⲙ̀ⲡⲁⲓⲱⲧ : Ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ ⲫⲏ ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗϩⲁ ⲫ̀ⲓⲱⲧ: ⲛ̀ⲑⲟϥ ⲉⲑⲛⲁⲉⲣⲙⲉⲑⲣⲉ ⲉⲑⲃⲏⲧ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_8_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_11" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲉⲧⲁϥⲥⲁϫⲓ ⲙⲙⲱⲟⲩ ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ : ⲟⲩⲟϩ ⲉⲧⲁϥϥⲁⲓ ⲛⲛⲉϥⲃⲁⲗ ⲉⲡϣⲱⲓ ⲉⲧⲫⲉ : ⲡⲉϫⲁϥ ϫⲉ ⲡⲁⲓⲱⲧⲁⲥⲓ ⲛϫⲉ ϯⲟⲩⲛⲟⲩ ⲙⲁⲱⲟⲩ ⲙⲡⲉⲕϣⲏⲣⲓ ϩⲓⲛⲁ ⲛⲧⲉ ⲡⲉⲕϣⲏⲣⲓ ϯⲱⲟⲩ ⲛⲁⲕ Ⲙⲫⲣⲏϯ ⲉⲧⲁⲕϯⲉⲣϣⲓϣⲓ ⲛⲁϥ ⲉϫⲉⲛ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ:<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(102:1,8)
    <span class="arabic-caption">المزمور<br>(١٠٢ : ١,٨)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the Prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبي بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">Hear my prayer, O Lord, And let my cry come to You.</td>
        <td class="arabic">يَا رَبُّ اسْتَمِعْ صَلاَتِي وَلْيَدْخُلْ إِلَيْكَ صُرَاخِي.</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">My enemies reproach me all day long, Those who deride me swear an oath against me.</td>
        <td class="arabic">الْيَوْمَ كُلَّهُ عَيَّرَنِي أَعْدَائِيَ. الْحَنِقُونَ عَلَيَّ حَلَفُوا عَلَيَّ.</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(John 13:33-14:25)
    <span class="arabic-caption">الانجيل<br>(يوحنا ١٣ : ٣٣- ١٤ : ٢٥)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وارحمنا واجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">Little children, I shall be with you a little while longer. You will seek Me; and as I said to the Jews, 'Where I am going, you cannot come,' so now I say to you.</td>
        <td class="arabic">يَا أَوْلاَدِي أَنَا مَعَكُمْ زَمَاناً قَلِيلاً بَعْدُ. سَتَطْلُبُونَنِي وَكَمَا قُلْتُ لِلْيَهُودِ: حَيْثُ أَذْهَبُ أَنَا لاَ تَقْدِرُونَ أَنْتُمْ أَنْ تَأْتُوا أَقُولُ لَكُمْ أَنْتُمُ الآنَ.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">A new commandment I give to you, that you love one another; as I have loved you, that you also love one another.</td>
        <td class="arabic">وَصِيَّةً جَدِيدَةً أَنَا أُعْطِيكُمْ: أَنْ تُحِبُّوا بَعْضُكُمْ بَعْضاً. كَمَا أَحْبَبْتُكُمْ أَنَا تُحِبُّونَ أَنْتُمْ أَيْضاً بَعْضُكُمْ بَعْضاً.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">" By this all will know that you are My disciples, if you have love for one another."</td>
        <td class="arabic">بِهَذَا يَعْرِفُ الْجَمِيعُ أَنَّكُمْ تلاَمِيذِي: إِنْ كَانَ لَكُمْ حُبٌّ بَعْضاً لِبَعْضٍ».</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">Simon Peter said to Him, "Lord, where are You going?" Jesus answered him, "Where I am going you cannot follow Me now, but you shall follow Me afterward."</td>
        <td class="arabic">قَالَ لَهُ سِمْعَانُ بُطْرُسُ: «يَا سَيِّدُ إِلَى أَيْنَ تَذْهَبُ؟» أَجَابَهُ يَسُوعُ: «حَيْثُ أَذْهَبُ لاَ تَقْدِرُ الآنَ أَنْ تَتْبَعَنِي وَلَكِنَّكَ سَتَتْبَعُنِي أَخِيراً».</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">Peter said to Him, "Lord, why can I not follow You now? I will lay down my life for Your sake."</td>
        <td class="arabic">قَالَ لَهُ بُطْرُسُ: «يَا سَيِّدُ لِمَاذَا لاَ أَقْدِرُ أَنْ أَتْبَعَكَ الآنَ؟ إِنِّي أَضَعُ نَفْسِي عَنْكَ».</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">Jesus answered him, "Will you lay down your life for My sake? Most assuredly, I say to you, the rooster shall not crow till you have denied Me three times.</td>
        <td class="arabic">أَجَابَهُ يَسُوعُ: «أَتَضَعُ نَفْسَكَ عَنِّي؟ اَلْحَقَّ الْحَقَّ أَقُولُ لَكَ: لاَ يَصِيحُ الدِّيكُ حَتَّى تُنْكِرَنِي ثلاَثَ مَرَّاتٍ».</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">"Let not your heart be troubled; you believe in God, believe also in Me.</td>
        <td class="arabic">«لاَ تَضْطَرِبْ قُلُوبُكُمْ. أَنْتُمْ تُؤْمِنُونَ بِاللَّهِ فَآمِنُوا بِي.</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english"> In My Father’s house are many mansions; if it were not so, I would have told you. I go to prepare a place for you.</td>
        <td class="arabic">فِي بَيْتِ أَبِي مَنَازِلُ كَثِيرَةٌ وَإِلاَّ فَإِنِّي كُنْتُ قَدْ قُلْتُ لَكُمْ. أَنَا أَمْضِي لِأُعِدَّ لَكُمْ مَكَاناً</td>
    </tr>
    <tr id="table_10_row_12" class="text">
        <td class="english">And if I go and prepare a place for you, I will come again and receive you to Myself; that where I am, there you may be also.</td>
        <td class="arabic">وَإِنْ مَضَيْتُ وَأَعْدَدْتُ لَكُمْ مَكَاناً آتِي أَيْضاً وَآخُذُكُمْ إِلَيَّ حَتَّى حَيْثُ أَكُونُ أَنَا تَكُونُونَ أَنْتُمْ أَيْضاً</td>
    </tr>
    <tr id="table_10_row_13" class="text">
        <td class="english">And where I go you know, and the way you know."</td>
        <td class="arabic">وَتَعْلَمُونَ حَيْثُ أَنَا أَذْهَبُ وَتَعْلَمُونَ الطَّرِيقَ».</td>
    </tr>
    <tr id="table_10_row_14" class="text">
        <td class="english">Thomas said to Him, "Lord, we do not know where You are going, and how can we know the way?"</td>
        <td class="arabic">قَالَ لَهُ تُومَا: «يَا سَيِّدُ لَسْنَا نَعْلَمُ أَيْنَ تَذْهَبُ فَكَيْفَ نَقْدِرُ أَنْ نَعْرِفَ الطَّرِيقَ؟»</td>
    </tr>
    <tr id="table_10_row_15" class="text">
        <td class="english">Jesus said to him, "I am the way, the truth, and the life. No one comes to the Father except through Me.</td>
        <td class="arabic">قَالَ لَهُ يَسُوعُ: «أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ. لَيْسَ أَحَدٌ يَأْتِي إِلَى الآبِ إِلاَّ بِي.</td>
    </tr>
    <tr id="table_10_row_16" class="text">
        <td class="english">"If you had known Me, you would have known My Father also; and from now on you know Him and have seen Him."</td>
        <td class="arabic">لَوْ كُنْتُمْ قَدْ عَرَفْتُمُونِي لَعَرَفْتُمْ أَبِي أَيْضاً. وَمِنَ الآنَ تَعْرِفُونَهُ وَقَدْ رَأَيْتُمُوهُ».</td>
    </tr>
    <tr id="table_10_row_17" class="text">
        <td class="english">Philip said to Him, "Lord, show us the Father, and it is sufficient for us."</td>
        <td class="arabic">قَالَ لَهُ فِيلُبُّسُ: «يَا سَيِّدُ أَرِنَا الآبَ وَكَفَانَا».</td>
    </tr>
    <tr id="table_10_row_18" class="text">
        <td class="english">Jesus said to him, "Have I been with you so long, and yet you have not known Me, Philip? He who has seen Me has seen the Father; so how can you say, 'Show us the Father'?</td>
        <td class="arabic">قَالَ لَهُ يَسُوعُ: «أَنَا مَعَكُمْ زَمَاناً هَذِهِ مُدَّتُهُ وَلَمْ تَعْرِفْنِي يَا فِيلُبُّسُ! اَلَّذِي رَآنِي فَقَدْ رَأَى الآبَ فَكَيْفَ تَقُولُ أَنْتَ أَرِنَا الآبَ؟</td>
    </tr>
    <tr id="table_10_row_19" class="text">
        <td class="english">Do you not believe that I am in the Father, and the Father in Me? The words that I speak to you I do not speak on My own authority; but the Father who dwells in Me does the works.</td>
        <td class="arabic">أَلَسْتَ تُؤْمِنُ أَنِّي أَنَا فِي الآبِ وَالآبَ فِيَّ؟ الْكلاَمُ الَّذِي أُكَلِّمُكُمْ بِهِ لَسْتُ أَتَكَلَّمُ بِهِ مِنْ نَفْسِي لَكِنَّ الآبَ الْحَالَّ فِيَّ هُوَ يَعْمَلُ الأَعْمَالَ.</td>
    </tr>
    <tr id="table_10_row_20" class="text">
        <td class="english">Believe Me that I am in the Father and the Father in Me, or else believe Me for the sake of the works themselves.</td>
        <td class="arabic">صَدِّقُونِي أَنِّي فِي الآبِ وَالآبَ فِيَّ وَإِلاَّ فَصَدِّقُونِي لِسَبَبِ الأَعْمَالِ نَفْسِهَا.</td>
    </tr>
    <tr id="table_10_row_21" class="text">
        <td class="english">"Most assuredly, I say to you, he who believes in Me, the works that I do he will do also; and greater works than these he will do, because I go to My Father.</td>
        <td class="arabic">اَلْحَقَّ الْحَقَّ أَقُولُ لَكُمْ: مَنْ يُؤْمِنُ بِي فَالأَعْمَالُ الَّتِي أَنَا أَعْمَلُهَا يَعْمَلُهَا هُوَ أَيْضاً وَيَعْمَلُ أَعْظَمَ مِنْهَا لأَنِّي مَاضٍ إِلَى أَبِي.</td>
    </tr>
    <tr id="table_10_row_22" class="text">
        <td class="english">And whatever you ask in My name, that I will do, that the Father may be glorified in the Son.</td>
        <td class="arabic">وَمَهْمَا سَأَلْتُمْ بِاسْمِي فَذَلِكَ أَفْعَلُهُ لِيَتَمَجَّدَ الآبُ بِالاِبْنِ.</td>
    </tr>
    <tr id="table_10_row_23" class="text">
        <td class="english">If you ask anything in My name, I will do it.</td>
        <td class="arabic">إِنْ سَأَلْتُمْ شَيْئاً بِاسْمِي فَإِنِّي أَفْعَلُهُ.</td>
    </tr>
    <tr id="table_10_row_24" class="text">
        <td class="english">"If you love Me, keep My commandments.</td>
        <td class="arabic">«إِنْ كُنْتُمْ تُحِبُّونَنِي فَاحْفَظُوا وَصَايَايَ</td>
    </tr>
    <tr id="table_10_row_25" class="text">
        <td class="english">And I will pray the Father, and He will give you another Helper, that He may abide with you forever--</td>
        <td class="arabic">وَأَنَا أَطْلُبُ مِنَ الآبِ فَيُعْطِيكُمْ مُعَزِّياً آخَرَ لِيَمْكُثَ مَعَكُمْ إِلَى الأَبَدِ</td>
    </tr>
    <tr id="table_10_row_26" class="text">
        <td class="english">the Spirit of truth, whom the world cannot receive, because it neither sees Him nor knows Him; but you know Him, for He dwells with you and will be in you.</td>
        <td class="arabic">رُوحُ الْحَقِّ الَّذِي لاَ يَسْتَطِيعُ الْعَالَمُ أَنْ يَقْبَلَهُ لأَنَّهُ لاَ يَرَاهُ وَلاَ يَعْرِفُهُ وَأَمَّا أَنْتُمْ فَتَعْرِفُونَهُ لأَنَّهُ مَاكِثٌ مَعَكُمْ وَيَكُونُ فِيكُمْ.</td>
    </tr>
    <tr id="table_10_row_27" class="text">
        <td class="english">I will not leave you orphans; I will come to you.</td>
        <td class="arabic">لاَ أَتْرُكُكُمْ يَتَامَى. إِنِّي آتِي إِلَيْكُمْ.</td>
    </tr>
    <tr id="table_10_row_28" class="text">
        <td class="english">"A little while longer and the world will see Me no more, but you will see Me. Because I live, you will live also.</td>
        <td class="arabic">بَعْدَ قَلِيلٍ لاَ يَرَانِي الْعَالَمُ أَيْضاً وَأَمَّا أَنْتُمْ فَتَرَوْنَنِي. إِنِّي أَنَا حَيٌّ فَأَنْتُمْ سَتَحْيَوْنَ.</td>
    </tr>
    <tr id="table_10_row_29" class="text">
        <td class="english">At that day you will know that I am in My Father, and you in Me, and I in you.</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ تَعْلَمُونَ أَنِّي أَنَا فِي أَبِي وَأَنْتُمْ فِيَّ وَأَنَا فِيكُمْ.</td>
    </tr>
    <tr id="table_10_row_30" class="text">
        <td class="english">He who has My commandments and keeps them, it is he who loves Me. And he who loves Me will be loved by My Father, and I will love him and manifest Myself to him."</td>
        <td class="arabic">اَلَّذِي عِنْدَهُ وَصَايَايَ وَيَحْفَظُهَا فَهُوَ الَّذِي يُحِبُّنِي وَالَّذِي يُحِبُّنِي يُحِبُّهُ أَبِي وَأَنَا أُحِبُّهُ وَأُظْهِرُ لَهُ ذَاتِي».</td>
    </tr>
    <tr id="table_10_row_31" class="text">
        <td class="english">Judas (not Iscariot) said to Him, "Lord, how is it that You will manifest Yourself to us, and not to the world?"</td>
        <td class="arabic">قَالَ لَهُ يَهُوذَا لَيْسَ الإِسْخَرْيُوطِيَّ: «يَا سَيِّدُ مَاذَا حَدَثَ حَتَّى إِنَّكَ مُزْمِعٌ أَنْ تُظْهِرَ ذَاتَكَ لَنَا وَلَيْسَ لِلْعَالَمِ؟»</td>
    </tr>
    <tr id="table_10_row_32" class="text">
        <td class="english">Jesus answered and said to him, "If anyone loves Me, he will keep My word; and My Father will love him, and We will come to him and make Our home with him.</td>
        <td class="arabic">أَجَابَ يَسُوعُ: «إِنْ أَحَبَّنِي أَحَدٌ يَحْفَظْ كلاَمِي وَيُحِبُّهُ أَبِي وَإِلَيْهِ نَأْتِي وَعِنْدَهُ نَصْنَعُ مَنْزِلاً.</td>
    </tr>
    <tr id="table_10_row_33" class="text">
        <td class="english">He who does not love Me does not keep My words; and the word which you hear is not Mine but the Father's who sent Me.</td>
        <td class="arabic">اَلَّذِي لاَ يُحِبُّنِي لاَ يَحْفَظُ كلاَمِي. وَالْكلاَمُ الَّذِي تَسْمَعُونَهُ لَيْسَ لِي بَلْ لِلآبِ الَّذِي أَرْسَلَنِي.</td>
    </tr>
    <tr id="table_10_row_34" class="text">
        <td class="english">"These things I have spoken to you while being present with you.</td>
        <td class="arabic">بِهَذَا كَلَّمْتُكُمْ وَأَنَا عِنْدَكُمْ.</td>
    </tr>
    <tr id="table_10_row_35" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">اسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_37" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_11" title="Psalm">
    <caption id="caption_table_11" class="caption">Psalm<br>(102:1,8)
    <span class="arabic-caption">المزمور<br>(١٠٢ : ١,٨)</span></caption>
    <tr id="table_11_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the Prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبي بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_11_row_4" class="text">
        <td class="english">Hear my prayer, O Lord, And let my cry come to You.</td>
        <td class="arabic">يَا رَبُّ اسْتَمِعْ صَلاَتِي وَلْيَدْخُلْ إِلَيْكَ صُرَاخِي.</td>
    </tr>
    <tr id="table_11_row_5" class="text">
        <td class="english">My enemies reproach me all day long, Those who deride me swear an oath against me.</td>
        <td class="arabic">الْيَوْمَ كُلَّهُ عَيَّرَنِي أَعْدَائِيَ. الْحَنِقُونَ عَلَيَّ حَلَفُوا عَلَيَّ.</td>
    </tr>
    <tr id="table_11_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_12" title="Gospel">
    <caption id="caption_table_12" class="caption">Gospel<br>(John 14:26-15:25)
    <span class="arabic-caption">الانجيل<br>(يوحنا ١٤ : ٢٦- ١٥ : ٢٥)</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وارحمنا واجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">But the Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all things that I said to you.</td>
        <td class="arabic">وَأَمَّا الْمُعَزِّي الرُّوحُ الْقُدُسُ الَّذِي سَيُرْسِلُهُ الآبُ بِاسْمِي فَهُوَ يُعَلِّمُكُمْ كُلَّ شَيْءٍ وَيُذَكِّرُكُمْ بِكُلِّ مَا قُلْتُهُ لَكُمْ.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.</td>
        <td class="arabic">«سلاَماً أَتْرُكُ لَكُمْ. سلاَمِي أُعْطِيكُمْ. لَيْسَ كَمَا يُعْطِي الْعَالَمُ أُعْطِيكُمْ أَنَا. لاَ تَضْطَرِبْ قُلُوبُكُمْ وَلاَ تَرْهَبْ.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">You have heard Me say to you, 'I am going away and coming back to you.' If you loved Me, you would rejoice because I said, 'I am going to the Father,' for My Father is greater than I.</td>
        <td class="arabic">سَمِعْتُمْ أَنِّي قُلْتُ لَكُمْ أَنَا أَذْهَبُ ثُمَّ آتِي إِلَيْكُمْ. لَوْ كُنْتُمْ تُحِبُّونَنِي لَكُنْتُمْ تَفْرَحُونَ لأَنِّي قُلْتُ أَمْضِي إِلَى الآبِ لأَنَّ أَبِي أَعْظَمُ مِنِّي.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">And now I have told you before it comes, that when it does come to pass, you may believe.</td>
        <td class="arabic">وَقُلْتُ لَكُمُ الآنَ قَبْلَ أَنْ يَكُونَ حَتَّى مَتَى كَانَ تُؤْمِنُونَ.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">I will no longer talk much with you, for the ruler of this world is coming, and he has nothing in Me.</td>
        <td class="arabic">لاَ أَتَكَلَّمُ أَيْضاً مَعَكُمْ كَثِيراً لأَنَّ رَئِيسَ هَذَا الْعَالَمِ يَأْتِي وَلَيْسَ لَهُ فِيَّ شَيْءٌ.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">But that the world may know that I love the Father, and as the Father gave Me commandment, so I do. Arise, let us go from here.</td>
        <td class="arabic">وَلَكِنْ لِيَفْهَمَ الْعَالَمُ أَنِّي أُحِبُّ الآبَ وَكَمَا أَوْصَانِي الآبُ هَكَذَا أَفْعَلُ. قُومُوا نَنْطَلِقْ مِنْ هَهُنَا».</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english">"I am the true vine, and My Father is the vinedresser.</td>
        <td class="arabic">«أَنَا الْكَرْمَةُ الْحَقِيقِيَّةُ وَأَبِي الْكَرَّامُ.</td>
    </tr>
    <tr id="table_12_row_11" class="text">
        <td class="english">Every branch in Me that does not bear fruit He takes away; and every branch that bears fruit He prunes, that it may bear more fruit.</td>
        <td class="arabic">كُلُّ غُصْنٍ فِيَّ لاَ يَأْتِي بِثَمَرٍ يَنْزِعُهُ وَكُلُّ مَا يَأْتِي بِثَمَرٍ يُنَقِّيهِ لِيَأْتِيَ بِثَمَرٍ أَكْثَرَ.</td>
    </tr>
    <tr id="table_12_row_12" class="text">
        <td class="english">You are already clean because of the word which I have spoken to you.</td>
        <td class="arabic">أَنْتُمُ الآنَ أَنْقِيَاءُ لِسَبَبِ الْكلاَمِ الَّذِي كَلَّمْتُكُمْ بِهِ.</td>
    </tr>
    <tr id="table_12_row_13" class="text">
        <td class="english">Abide in Me, and I in you. As the branch cannot bear fruit of itself, unless it abides in the vine, neither can you, unless you abide in Me.</td>
        <td class="arabic">اُثْبُتُوا فِيَّ وَأَنَا فِيكُمْ. كَمَا أَنَّ الْغُصْنَ لاَ يَقْدِرُ أَنْ يَأْتِيَ بِثَمَرٍ مِنْ ذَاتِهِ إِنْ لَمْ يَثْبُتْ فِي الْكَرْمَةِ كَذَلِكَ أَنْتُمْ أَيْضاً إِنْ لَمْ تَثْبُتُوا فِيَّ.</td>
    </tr>
    <tr id="table_12_row_14" class="text">
        <td class="english">I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit; for without Me you can do nothing.</td>
        <td class="arabic">أَنَا الْكَرْمَةُ وَأَنْتُمُ الأَغْصَانُ. الَّذِي يَثْبُتُ فِيَّ وَأَنَا فِيهِ هَذَا يَأْتِي بِثَمَرٍ كَثِيرٍ لأَنَّكُمْ بِدُونِي لاَ تَقْدِرُونَ أَنْ تَفْعَلُوا شَيْئاً.</td>
    </tr>
    <tr id="table_12_row_15" class="text">
        <td class="english">If anyone does not abide in Me, he is cast out as a branch and is withered; and they gather them and throw them into the fire, and they are burned.</td>
        <td class="arabic">إِنْ كَانَ أَحَدٌ لاَ يَثْبُتُ فِيَّ يُطْرَحُ خَارِجاً كَالْغُصْنِ فَيَجِفُّ وَيَجْمَعُونَهُ وَيَطْرَحُونَهُ فِي النَّارِ فَيَحْتَرِقُ.</td>
    </tr>
    <tr id="table_12_row_16" class="text">
        <td class="english">If you abide in Me, and My words abide in you, you will ask what you desire, and it shall be done for you.</td>
        <td class="arabic">إِنْ ثَبَتُّمْ فِيَّ وَثَبَتَ كلاَمِي فِيكُمْ تَطْلُبُونَ مَا تُرِيدُونَ فَيَكُونُ لَكُمْ.</td>
    </tr>
    <tr id="table_12_row_17" class="text">
        <td class="english">By this My Father is glorified, that you bear much fruit; so you will be My disciples.</td>
        <td class="arabic">بِهَذَا يَتَمَجَّدُ أَبِي أَنْ تَأْتُوا بِثَمَرٍ كَثِيرٍ فَتَكُونُونَ تلاَمِيذِي.</td>
    </tr>
    <tr id="table_12_row_18" class="text">
        <td class="english">"As the Father loved Me, I also have loved you; abide in My love.</td>
        <td class="arabic">كَمَا أَحَبَّنِي الآبُ كَذَلِكَ أَحْبَبْتُكُمْ أَنَا. اُثْبُتُوا فِي مَحَبَّتِي.</td>
    </tr>
    <tr id="table_12_row_19" class="text">
        <td class="english">If you keep My commandments, you will abide in My love, just as I have kept My Father's commandments and abide in His love.</td>
        <td class="arabic">إِنْ حَفِظْتُمْ وَصَايَايَ تَثْبُتُونَ فِي مَحَبَّتِي كَمَا أَنِّي أَنَا قَدْ حَفِظْتُ وَصَايَا أَبِي وَأَثْبُتُ فِي مَحَبَّتِهِ.</td>
    </tr>
    <tr id="table_12_row_20" class="text">
        <td class="english">These things I have spoken to you, that My joy may remain in you, and that your joy may be full.</td>
        <td class="arabic">كَلَّمْتُكُمْ بِهَذَا لِكَيْ يَثْبُتَ فَرَحِي فِيكُمْ وَيُكْمَلَ فَرَحُكُمْ.</td>
    </tr>
    <tr id="table_12_row_21" class="text">
        <td class="english">This is My commandment, that you love one another as I have loved you.</td>
        <td class="arabic">«هَذِهِ هِيَ وَصِيَّتِي أَنْ تُحِبُّوا بَعْضُكُمْ بَعْضاً كَمَا أَحْبَبْتُكُمْ.</td>
    </tr>
    <tr id="table_12_row_22" class="text">
        <td class="english">Greater love has no one than this, than to lay down one's life for his friends.</td>
        <td class="arabic">لَيْسَ لأَحَدٍ حُبٌّ أَعْظَمُ مِنْ هَذَا أَنْ يَضَعَ أَحَدٌ نَفْسَهُ لأَجْلِ أَحِبَّائِهِ.</td>
    </tr>
    <tr id="table_12_row_23" class="text">
        <td class="english">You are My friends if you do whatever I command you.</td>
        <td class="arabic">أَنْتُمْ أَحِبَّائِي إِنْ فَعَلْتُمْ مَا أُوصِيكُمْ بِهِ.</td>
    </tr>
    <tr id="table_12_row_24" class="text">
        <td class="english">No longer do I call you servants, for a servant does not know what his master is doing; but I have called you friends, for all things that I heard from My Father I have made known to you.</td>
        <td class="arabic">لاَ أَعُودُ أُسَمِّيكُمْ عَبِيداً لأَنَّ الْعَبْدَ لاَ يَعْلَمُ مَا يَعْمَلُ سَيِّدُهُ لَكِنِّي قَدْ سَمَّيْتُكُمْ أَحِبَّاءَ لأَنِّي أَعْلَمْتُكُمْ بِكُلِّ مَا سَمِعْتُهُ مِنْ أَبِي.</td>
    </tr>
    <tr id="table_12_row_25" class="text">
        <td class="english">You did not choose Me, but I chose you and appointed you that you should go and bear fruit, and that your fruit should remain, that whatever you ask the Father in My name He may give you.</td>
        <td class="arabic">لَيْسَ أَنْتُمُ اخْتَرْتُمُونِي بَلْ أَنَا اخْتَرْتُكُمْ وَأَقَمْتُكُمْ لِتَذْهَبُوا وَتَأْتُوا بِثَمَرٍ وَيَدُومَ ثَمَرُكُمْ لِكَيْ يُعْطِيَكُمُ الآبُ كُلَّ مَا طَلَبْتُمْ بِاسْمِي.</td>
    </tr>
    <tr id="table_12_row_26" class="text">
        <td class="english">These things I command you, that you love one another.</td>
        <td class="arabic">بِهَذَا أُوصِيكُمْ حَتَّى تُحِبُّوا بَعْضُكُمْ بَعْضاً.</td>
    </tr>
    <tr id="table_12_row_27" class="text">
        <td class="english">"If the world hates you, you know that it hated Me before it hated you.</td>
        <td class="arabic">«إِنْ كَانَ الْعَالَمُ يُبْغِضُكُمْ فَاعْلَمُوا أَنَّهُ قَدْ أَبْغَضَنِي قَبْلَكُمْ.</td>
    </tr>
    <tr id="table_12_row_28" class="text">
        <td class="english">If you were of the world, the world would love its own. Yet because you are not of the world, but I chose you out of the world, therefore the world hates you.</td>
        <td class="arabic">لَوْ كُنْتُمْ مِنَ الْعَالَمِ لَكَانَ الْعَالَمُ يُحِبُّ خَاصَّتَهُ. وَلَكِنْ لأَنَّكُمْ لَسْتُمْ مِنَ الْعَالَمِ بَلْ أَنَا اخْتَرْتُكُمْ مِنَ الْعَالَمِ لِذَلِكَ يُبْغِضُكُمُ الْعَالَمُ.</td>
    </tr>
    <tr id="table_12_row_29" class="text">
        <td class="english">Remember the word that I said to you, 'A servant is not greater than his master.' If they persecuted Me, they will also persecute you. If they kept My word, they will keep yours also.</td>
        <td class="arabic">اُذْكُرُوا الْكلاَمَ الَّذِي قُلْتُهُ لَكُمْ: لَيْسَ عَبْدٌ أَعْظَمَ مِنْ سَيِّدِهِ. إِنْ كَانُوا قَدِ اضْطَهَدُونِي فَسَيَضْطَهِدُونَكُمْ وَإِنْ كَانُوا قَدْ حَفِظُوا كلاَمِي فَسَيَحْفَظُونَ كلاَمَكُمْ.</td>
    </tr>
    <tr id="table_12_row_30" class="text">
        <td class="english">But all these things they will do to you for My name's sake, because they do not know Him who sent Me.</td>
        <td class="arabic">لَكِنَّهُمْ إِنَّمَا يَفْعَلُونَ بِكُمْ هَذَا كُلَّهُ مِنْ أَجْلِ اسْمِي لأَنَّهُمْ لاَ يَعْرِفُونَ الَّذِي أَرْسَلَنِي.</td>
    </tr>
    <tr id="table_12_row_31" class="text">
        <td class="english">If I had not come and spoken to them, they would have no sin, but now they have no excuse for their sin.</td>
        <td class="arabic">لَوْ لَمْ أَكُنْ قَدْ جِئْتُ وَكَلَّمْتُهُمْ لَمْ تَكُنْ لَهُمْ خَطِيَّةٌ وَأَمَّا الآنَ فَلَيْسَ لَهُمْ عُذْرٌ فِي خَطِيَّتِهِمْ.</td>
    </tr>
    <tr id="table_12_row_32" class="text">
        <td class="english">He who hates Me hates My Father also.</td>
        <td class="arabic">اَلَّذِي يُبْغِضُنِي يُبْغِضُ أَبِي أَيْضاً.</td>
    </tr>
    <tr id="table_12_row_33" class="text">
        <td class="english">If I had not done among them the works which no one else did, they would have no sin; but now they have seen and also hated both Me and My Father.</td>
        <td class="arabic">لَوْ لَمْ أَكُنْ قَدْ عَمِلْتُ بَيْنَهُمْ أَعْمَالاً لَمْ يَعْمَلْهَا أَحَدٌ غَيْرِي لَمْ تَكُنْ لَهُمْ خَطِيَّةٌ وَأَمَّا الآنَ فَقَدْ رَأَوْا وَأَبْغَضُونِي أَنَا وَأَبِي.</td>
    </tr>
    <tr id="table_12_row_34" class="text">
        <td class="english">But this happened that the word might be fulfilled which is written in their law, 'They hated Me without a cause.'</td>
        <td class="arabic">لَكِنْ لِكَيْ تَتِمَّ الْكَلِمَةُ الْمَكْتُوبَةُ فِي نَامُوسِهِمْ: إِنَّهُمْ أَبْغَضُونِي بِلاَ سَبَبٍ.</td>
    </tr>
    <tr id="table_12_row_35" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">اسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_12_row_37" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_13" title="Gospel">
    <caption id="caption_table_13" class="caption">Gospel<br>(John 15:26-16:33)
    <span class="arabic-caption">الانجيل<br>(يوحنا ١٥ : ٢٦- ١٦ : ٣٣)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">A chapter according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">"But when the Helper comes, whom I shall send to you from the Father, the Spirit of truth who proceeds from the Father, He will testify of Me.</td>
        <td class="arabic">«وَمَتَى جَاءَ الْمُعَزِّي الَّذِي سَأُرْسِلُهُ أَنَا إِلَيْكُمْ مِنَ الآبِ رُوحُ الْحَقِّ الَّذِي مِنْ عِنْدِ الآبِ يَنْبَثِقُ فَهُوَ يَشْهَدُ لِي.</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">And you also will bear witness, because you have been with Me from the beginning.</td>
        <td class="arabic">وَتَشْهَدُونَ أَنْتُمْ أَيْضاً لأَنَّكُمْ مَعِي مِنَ الاِبْتِدَاءِ».</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">"These things I have spoken to you, that you should not be made to stumble.</td>
        <td class="arabic">«قَدْ كَلَّمْتُكُمْ بِهَذَا لِكَيْ لاَ تَعْثُرُوا.</td>
    </tr>
    <tr id="table_13_row_7" class="text">
        <td class="english">They will put you out of the synagogues; yes, the time is coming that whoever kills you will think that he offers God service.</td>
        <td class="arabic">سَيُخْرِجُونَكُمْ مِنَ الْمَجَامِعِ بَلْ تَأْتِي سَاعَةٌ فِيهَا يَظُنُّ كُلُّ مَنْ يَقْتُلُكُمْ أَنَّهُ يُقَدِّمُ خِدْمَةً لِلَّهِ.</td>
    </tr>
    <tr id="table_13_row_8" class="text">
        <td class="english">And these things they will do to you because they have not known the Father nor Me.</td>
        <td class="arabic">وَسَيَفْعَلُونَ هَذَا بِكُمْ لأَنَّهُمْ لَمْ يَعْرِفُوا الآبَ وَلاَ عَرَفُونِي.</td>
    </tr>
    <tr id="table_13_row_9" class="text">
        <td class="english">But these things I have told you, that when the time comes, you may remember that I told you of them. And these things I did not say to you at the beginning, because I was with you.</td>
        <td class="arabic">لَكِنِّي قَدْ كَلَّمْتُكُمْ بِهَذَا حَتَّى إِذَا جَاءَتِ السَّاعَةُ تَذْكُرُونَ أَنِّي أَنَا قُلْتُهُ لَكُمْ. وَلَمْ أَقُلْ لَكُمْ مِنَ الْبِدَايَةِ لأَنِّي كُنْتُ مَعَكُمْ.</td>
    </tr>
    <tr id="table_13_row_10" class="text">
        <td class="english">"But now I go away to Him who sent Me, and none of you asks Me, 'Where are You going?'</td>
        <td class="arabic">وَأَمَّا الآنَ فَأَنَا مَاضٍ إِلَى الَّذِي أَرْسَلَنِي وَلَيْسَ أَحَدٌ مِنْكُمْ يَسْأَلُنِي أَيْنَ تَمْضِي.</td>
    </tr>
    <tr id="table_13_row_11" class="text">
        <td class="english">But because I have said these things to you, sorrow has filled your heart.</td>
        <td class="arabic">لَكِنْ لأَنِّي قُلْتُ لَكُمْ هَذَا قَدْ مَلَأَ الْحُزْنُ قُلُوبَكُمْ.</td>
    </tr>
    <tr id="table_13_row_12" class="text">
        <td class="english">Nevertheless I tell you the truth. It is to your advantage that I go away; for if I do not go away, the Helper will not come to you; but if I depart, I will send Him to you.</td>
        <td class="arabic">لَكِنِّي أَقُولُ لَكُمُ الْحَقَّ إِنَّهُ خَيْرٌ لَكُمْ أَنْ أَنْطَلِقَ لأَنَّهُ إِنْ لَمْ أَنْطَلِقْ لاَ يَأْتِيكُمُ الْمُعَزِّي وَلَكِنْ إِنْ ذَهَبْتُ أُرْسِلُهُ إِلَيْكُمْ.</td>
    </tr>
    <tr id="table_13_row_13" class="text">
        <td class="english">And when He has come, He will convict the world of sin, and of righteousness, and of judgment:</td>
        <td class="arabic">وَمَتَى جَاءَ ذَاكَ يُبَكِّتُ الْعَالَمَ عَلَى خَطِيَّةٍ وَعَلَى بِرٍّ وَعَلَى دَيْنُونَةٍ.</td>
    </tr>
    <tr id="table_13_row_14" class="text">
        <td class="english">of sin, because they do not believe in Me;</td>
        <td class="arabic">أَمَّا عَلَى خَطِيَّةٍ فَلأَنَّهُمْ لاَ يُؤْمِنُونَ بِي.</td>
    </tr>
    <tr id="table_13_row_15" class="text">
        <td class="english">of righteousness, because I go to My Father and you see Me no more;</td>
        <td class="arabic">وَأَمَّا عَلَى بِرٍّ فَلأَنِّي ذَاهِبٌ إِلَى أَبِي وَلاَ تَرَوْنَنِي أَيْضاً.</td>
    </tr>
    <tr id="table_13_row_16" class="text">
        <td class="english">of judgment, because the ruler of this world is judged.</td>
        <td class="arabic">وَأَمَّا عَلَى دَيْنُونَةٍ فَلأَنَّ رَئِيسَ هَذَا الْعَالَمِ قَدْ دِينَ.</td>
    </tr>
    <tr id="table_13_row_17" class="text">
        <td class="english">I still have many things to say to you, but you cannot bear them now.</td>
        <td class="arabic">«إِنَّ لِي أُمُوراً كَثِيرَةً أَيْضاً لأَقُولَ لَكُمْ وَلَكِنْ لاَ تَسْتَطِيعُونَ أَنْ تَحْتَمِلُوا الآنَ.</td>
    </tr>
    <tr id="table_13_row_18" class="text">
        <td class="english">However, when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come.</td>
        <td class="arabic">وَأَمَّا مَتَى جَاءَ ذَاكَ رُوحُ الْحَقِّ فَهُوَ يُرْشِدُكُمْ إِلَى جَمِيعِ الْحَقِّ لأَنَّهُ لاَ يَتَكَلَّمُ مِنْ نَفْسِهِ بَلْ كُلُّ مَا يَسْمَعُ يَتَكَلَّمُ بِهِ وَيُخْبِرُكُمْ بِأُمُورٍ آتِيَةٍ.</td>
    </tr>
    <tr id="table_13_row_19" class="text">
        <td class="english">He will glorify Me, for He will take of what is Mine and declare it to you.</td>
        <td class="arabic">ذَاكَ يُمَجِّدُنِي لأَنَّهُ يَأْخُذُ مِمَّا لِي وَيُخْبِرُكُمْ.</td>
    </tr>
    <tr id="table_13_row_20" class="text">
        <td class="english">All things that the Father has are Mine. Therefore I said that He will take of Mine and declare it to you.</td>
        <td class="arabic">كُلُّ مَا لِلآبِ هُوَ لِي. لِهَذَا قُلْتُ إِنَّهُ يَأْخُذُ مِمَّا لِي وَيُخْبِرُكُمْ.</td>
    </tr>
    <tr id="table_13_row_21" class="text">
        <td class="english">"A little while, and you will not see Me; and again a little while, and you will see Me, because I go to the Father."</td>
        <td class="arabic">بَعْدَ قَلِيلٍ لاَ تُبْصِرُونَنِي ثُمَّ بَعْدَ قَلِيلٍ أَيْضاً تَرَوْنَنِي لأَنِّي ذَاهِبٌ إِلَى الآبِ».</td>
    </tr>
    <tr id="table_13_row_22" class="text">
        <td class="english">Then some of His disciples said among themselves, "What is this that He says to us, 'A little while, and you will not see Me; and again a little while, and you will see Me'; and, 'because I go to the Father'?"</td>
        <td class="arabic">فَقَالَ قَوْمٌ مِنْ تلاَمِيذِهِ بَعْضُهُمْ لِبَعْضٍ: «مَا هُوَ هَذَا الَّذِي يَقُولُهُ لَنَا: بَعْدَ قَلِيلٍ لاَ تُبْصِرُونَنِي ثُمَّ بَعْدَ قَلِيلٍ أَيْضاً تَرَوْنَنِي وَلأَنِّي ذَاهِبٌ إِلَى الآبِ؟».</td>
    </tr>
    <tr id="table_13_row_23" class="text">
        <td class="english">They said therefore, "What is this that He says, 'A little while'? We do not know what He is saying."</td>
        <td class="arabic">فَتَسَاءَلُوا: «مَا هُوَ هَذَا الْقَلِيلُ الَّذِي يَقُولُ عَنْهُ؟ لَسْنَا نَعْلَمُ بِمَاذَا يَتَكَلَّمُ».</td>
    </tr>
    <tr id="table_13_row_24" class="text">
        <td class="english">Now Jesus knew that they desired to ask Him, and He said to them, "Are you inquiring among yourselves about what I said, 'A little while, and you will not see Me; and again a little while, and you will see Me'?</td>
        <td class="arabic">فَعَلِمَ يَسُوعُ أَنَّهُمْ كَانُوا يُرِيدُونَ أَنْ يَسْأَلُوهُ فَقَالَ لَهُمْ: «أَعَنْ هَذَا تَتَسَاءَلُونَ فِيمَا بَيْنَكُمْ لأَنِّي قُلْتُ: بَعْدَ قَلِيلٍ لاَ تُبْصِرُونَنِي ثُمَّ بَعْدَ قَلِيلٍ أَيْضاً تَرَوْنَنِي</td>
    </tr>
    <tr id="table_13_row_25" class="text">
        <td class="english">Most assuredly, I say to you that you will weep and lament, but the world will rejoice; and you will be sorrowful, but your sorrow will be turned into joy.</td>
        <td class="arabic">اَلْحَقَّ الْحَقَّ أَقُولُ لَكُمْ: إِنَّكُمْ سَتَبْكُونَ وَتَنُوحُونَ وَالْعَالَمُ يَفْرَحُ. أَنْتُمْ سَتَحْزَنُونَ وَلَكِنَّ حُزْنَكُمْ يَتَحَوَّلُ إِلَى فَرَحٍ.</td>
    </tr>
    <tr id="table_13_row_26" class="text">
        <td class="english">A woman, when she is in labor, has sorrow because her hour has come; but as soon as she has given birth to the child, she no longer remembers the anguish, for joy that a human being has been born into the world.</td>
        <td class="arabic">اَلْمَرْأَةُ وَهِيَ تَلِدُ تَحْزَنُ لأَنَّ سَاعَتَهَا قَدْ جَاءَتْ وَلَكِنْ مَتَى وَلَدَتِ الطِّفْلَ لاَ تَعُودُ تَذْكُرُ الشِّدَّةَ لِسَبَبِ الْفَرَحِ لأَنَّهُ قَدْ وُلِدَ إِنْسَانٌ فِي الْعَالَمِ.</td>
    </tr>
    <tr id="table_13_row_27" class="text">
        <td class="english">Therefore you now have sorrow; but I will see you again and your heart will rejoice, and your joy no one will take from you.</td>
        <td class="arabic">فَأَنْتُمْ كَذَلِكَ عِنْدَكُمُ الآنَ حُزْنٌ. وَلَكِنِّي سَأَرَاكُمْ أَيْضاً فَتَفْرَحُ قُلُوبُكُمْ وَلاَ يَنْزِعُ أَحَدٌ فَرَحَكُمْ مِنْكُمْ.</td>
    </tr>
    <tr id="table_13_row_28" class="text">
        <td class="english">And in that day you will ask Me nothing. Most assuredly, I say to you, whatever you ask the Father in My name He will give you.</td>
        <td class="arabic">وَفِي ذَلِكَ الْيَوْمِ لاَ تَسْأَلُونَنِي شَيْئاً. اَلْحَقَّ الْحَقَّ أَقُولُ لَكُمْ: إِنَّ كُلَّ مَا طَلَبْتُمْ مِنَ الآبِ بِاسْمِي يُعْطِيكُمْ.</td>
    </tr>
    <tr id="table_13_row_29" class="text">
        <td class="english">Until now you have asked nothing in My name. Ask, and you will receive, that your joy may be full.</td>
        <td class="arabic">إِلَى الآنَ لَمْ تَطْلُبُوا شَيْئاً بِاسْمِي. اُطْلُبُوا تَأْخُذُوا لِيَكُونَ فَرَحُكُمْ كَامِلاً.</td>
    </tr>
    <tr id="table_13_row_30" class="text">
        <td class="english">"These things I have spoken to you in figurative language; but the time is coming when I will no longer speak to you in figurative language, but I will tell you plainly about the Father.</td>
        <td class="arabic">«قَدْ كَلَّمْتُكُمْ بِهَذَا بِأَمْثَالٍ وَلَكِنْ تَأْتِي سَاعَةٌ حِينَ لاَ أُكَلِّمُكُمْ أَيْضاً بِأَمْثَالٍ بَلْ أُخْبِرُكُمْ عَنِ الآبِ علاَنِيَةً.</td>
    </tr>
    <tr id="table_13_row_31" class="text">
        <td class="english">In that day you will ask in My name, and I do not say to you that I shall pray the Father for you;</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ تَطْلُبُونَ بِاسْمِي. وَلَسْتُ أَقُولُ لَكُمْ إِنِّي أَنَا أَسْأَلُ الآبَ مِنْ أَجْلِكُمْ</td>
    </tr>
    <tr id="table_13_row_32" class="text">
        <td class="english">for the Father Himself loves you, because you have loved Me, and have believed that I came forth from God.</td>
        <td class="arabic">لأَنَّ الآبَ نَفْسَهُ يُحِبُّكُمْ لأَنَّكُمْ قَدْ أَحْبَبْتُمُونِي وَآمَنْتُمْ أَنِّي مِنْ عِنْدِ اللَّهِ خَرَجْتُ.</td>
    </tr>
    <tr id="table_13_row_33" class="text">
        <td class="english">I came forth from the Father and have come into the world. Again, I leave the world and go to the Father."</td>
        <td class="arabic">خَرَجْتُ مِنْ عِنْدِ الآبِ وَقَدْ أَتَيْتُ إِلَى الْعَالَمِ وَأَيْضاً أَتْرُكُ الْعَالَمَ وَأَذْهَبُ إِلَى الآبِ».</td>
    </tr>
    <tr id="table_13_row_34" class="text">
        <td class="english">His disciples said to Him, "See, now You are speaking plainly, and using no figure of speech!</td>
        <td class="arabic">قَالَ لَهُ تلاَمِيذُهُ: «هُوَذَا الآنَ تَتَكَلَّمُ علاَنِيَةً وَلَسْتَ تَقُولُ مَثَلاً وَاحِداً!</td>
    </tr>
    <tr id="table_13_row_35" class="text">
        <td class="english">Now we are sure that You know all things, and have no need that anyone should question You. By this we believe that You came forth from God."</td>
        <td class="arabic">اَلآنَ نَعْلَمُ أَنَّكَ عَالِمٌ بِكُلِّ شَيْءٍ وَلَسْتَ تَحْتَاجُ أَنْ يَسْأَلَكَ أَحَدٌ. لِهَذَا نُؤْمِنُ أَنَّكَ مِنَ اللَّهِ خَرَجْتَ».</td>
    </tr>
    <tr id="table_13_row_36" class="text">
        <td class="english">Jesus answered them, "Do you now believe?</td>
        <td class="arabic">أَجَابَهُمْ يَسُوعُ: «أَلآنَ تُؤْمِنُونَ؟</td>
    </tr>
    <tr id="table_13_row_37" class="text">
        <td class="english">Indeed the hour is coming, yes, has now come, that you will be scattered, each to his own, and will leave Me alone. And yet I am not alone, because the Father is with Me.</td>
        <td class="arabic">هُوَذَا تَأْتِي سَاعَةٌ وَقَدْ أَتَتِ الآنَ تَتَفَرَّقُونَ فِيهَا كُلُّ وَاحِدٍ إِلَى خَاصَّتِهِ وَتَتْرُكُونَنِي وَحْدِي. وَأَنَا لَسْتُ وَحْدِي لأَنَّ الآبَ مَعِي.</td>
    </tr>
    <tr id="table_13_row_38" class="text">
        <td class="english">These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world."</td>
        <td class="arabic">قَدْ كَلَّمْتُكُمْ بِهَذَا لِيَكُونَ لَكُمْ فِيَّ سلاَمٌ. فِي الْعَالَمِ سَيَكُونُ لَكُمْ ضِيقٌ وَلَكِنْ ثِقُوا: أَنَا قَدْ غَلَبْتُ الْعَالَمَ».</td>
    </tr>
    <tr id="table_13_row_39" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">اسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_13_row_41" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(John 17:1-26)
    <span class="arabic-caption">الانجيل<br>(يوحنا ١٧ : ١-٢٦)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">A chapter according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">Jesus spoke these words, lifted up His eyes to heaven, and said: "Father, the hour has come. Glorify Your Son, that Your Son also may glorify You,</td>
        <td class="arabic">تَكَلَّمَ يَسُوعُ بِهَذَا وَرَفَعَ عَيْنَيْهِ نَحْوَ السَّمَاءِ وَقَالَ: «أَيُّهَا الآبُ قَدْ أَتَتِ السَّاعَةُ. مَجِّدِ ابْنَكَ لِيُمَجِّدَكَ ابْنُكَ أَيْضاً</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">as You have given Him authority over all flesh, that He should give eternal life to as many as You have given Him.</td>
        <td class="arabic">إِذْ أَعْطَيْتَهُ سُلْطَاناً عَلَى كُلِّ جَسَدٍ لِيُعْطِيَ حَيَاةً أَبَدِيَّةً لِكُلِّ مَنْ أَعْطَيْتَهُ.</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.</td>
        <td class="arabic">وَهَذِهِ هِيَ الْحَيَاةُ الأَبَدِيَّةُ: أَنْ يَعْرِفُوكَ أَنْتَ الإِلَهَ الْحَقِيقِيَّ وَحْدَكَ وَيَسُوعَ الْمَسِيحَ الَّذِي أَرْسَلْتَهُ.</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">I have glorified You on the earth. I have finished the work which You have given Me to do.</td>
        <td class="arabic">أَنَا مَجَّدْتُكَ عَلَى الأَرْضِ. الْعَمَلَ الَّذِي أَعْطَيْتَنِي لأَعْمَلَ قَدْ أَكْمَلْتُهُ.</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">And now, O Father, glorify Me together with Yourself, with the glory which I had with You before the world was.</td>
        <td class="arabic">وَالآنَ مَجِّدْنِي أَنْتَ أَيُّهَا الآبُ عِنْدَ ذَاتِكَ بِالْمَجْدِ الَّذِي كَانَ لِي عِنْدَكَ قَبْلَ كَوْنِ الْعَالَمِ.</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">"I have manifested Your name to the men whom You have given Me out of the world. They were Yours, You gave them to Me, and they have kept Your word.</td>
        <td class="arabic">«أَنَا أَظْهَرْتُ اسْمَكَ لِلنَّاسِ الَّذِينَ أَعْطَيْتَنِي مِنَ الْعَالَمِ. كَانُوا لَكَ وَأَعْطَيْتَهُمْ لِي وَقَدْ حَفِظُوا كلاَمَكَ.</td>
    </tr>
    <tr id="table_14_row_10" class="text">
        <td class="english">Now they have known that all things which You have given Me are from You.</td>
        <td class="arabic">وَالآنَ عَلِمُوا أَنَّ كُلَّ مَا أَعْطَيْتَنِي هُوَ مِنْ عِنْدِكَ</td>
    </tr>
    <tr id="table_14_row_11" class="text">
        <td class="english">For I have given to them the words which You have given Me; and they have received them, and have known surely that I came forth from You; and they have believed that You sent Me.</td>
        <td class="arabic">لأَنَّ الْكلاَمَ الَّذِي أَعْطَيْتَنِي قَدْ أَعْطَيْتُهُمْ وَهُمْ قَبِلُوا وَعَلِمُوا يَقِيناً أَنِّي خَرَجْتُ مِنْ عِنْدِكَ وَآمَنُوا أَنَّكَ أَنْتَ أَرْسَلْتَنِي.</td>
    </tr>
    <tr id="table_14_row_12" class="text">
        <td class="english">I pray for them. I do not pray for the world but for those whom You have given Me, for they are Yours.</td>
        <td class="arabic">مِنْ أَجْلِهِمْ أَنَا أَسْأَلُ. لَسْتُ أَسْأَلُ مِنْ أَجْلِ الْعَالَمِ بَلْ مِنْ أَجْلِ الَّذِينَ أَعْطَيْتَنِي لأَنَّهُمْ لَكَ.</td>
    </tr>
    <tr id="table_14_row_13" class="text">
        <td class="english">And all Mine are Yours, and Yours are Mine, and I am glorified in them.</td>
        <td class="arabic">وَكُلُّ مَا هُوَ لِي فَهُوَ لَكَ وَمَا هُوَ لَكَ فَهُوَ لِي وَأَنَا مُمَجَّدٌ فِيهِمْ.</td>
    </tr>
    <tr id="table_14_row_14" class="text">
        <td class="english">Now I am no longer in the world, but these are in the world, and I come to You. Holy Father, keep through Your name those whom You have given Me, that they may be one as We are.</td>
        <td class="arabic">وَلَسْتُ أَنَا بَعْدُ فِي الْعَالَمِ وَأَمَّا هَؤُلاَءِ فَهُمْ فِي الْعَالَمِ وَأَنَا آتِي إِلَيْكَ. أَيُّهَا الآبُ الْقُدُّوسُ احْفَظْهُمْ فِي اسْمِكَ. الَّذِينَ أَعْطَيْتَنِي لِيَكُونُوا وَاحِداً كَمَا نَحْنُ.</td>
    </tr>
    <tr id="table_14_row_15" class="text">
        <td class="english">While I was with them in the world, and none of them is lost except the son of perdition, that the Scripture might be fulfilled.</td>
        <td class="arabic">حِينَ كُنْتُ مَعَهُمْ فِي الْعَالَمِ كُنْتُ أَحْفَظُهُمْ فِي اسْمِكَ. الَّذِينَ أَعْطَيْتَنِي حَفِظْتُهُمْ وَلَمْ يَهْلِكْ مِنْهُمْ أَحَدٌ إِلاَّ ابْنُ الْهلاَكِ لِيَتِمَّ الْكِتَابُ.</td>
    </tr>
    <tr id="table_14_row_16" class="text">
        <td class="english">But now I come to You, and these things I speak in the world, that they may have My joy fulfilled in themselves.</td>
        <td class="arabic">أَمَّا الآنَ فَإِنِّي آتِي إِلَيْكَ. وَأَتَكَلَّمُ بِهَذَا فِي الْعَالَمِ لِيَكُونَ لَهُمْ فَرَحِي كَامِلاً فِيهِمْ.</td>
    </tr>
    <tr id="table_14_row_17" class="text">
        <td class="english">I have given them Your word; and the world has hated them because they are not of the world, just as I am not of the world.</td>
        <td class="arabic">أَنَا قَدْ أَعْطَيْتُهُمْ كلاَمَكَ وَالْعَالَمُ أَبْغَضَهُمْ لأَنَّهُمْ لَيْسُوا مِنَ الْعَالَمِ كَمَا أَنِّي أَنَا لَسْتُ مِنَ الْعَالَمِ</td>
    </tr>
    <tr id="table_14_row_18" class="text">
        <td class="english">I do not pray that You should take them out of the world, but that You should keep them from the evil one.</td>
        <td class="arabic">لَسْتُ أَسْأَلُ أَنْ تَأْخُذَهُمْ مِنَ الْعَالَمِ بَلْ أَنْ تَحْفَظَهُمْ مِنَ الشِّرِّيرِ.</td>
    </tr>
    <tr id="table_14_row_19" class="text">
        <td class="english">They are not of the world, just as I am not of the world.</td>
        <td class="arabic">لَيْسُوا مِنَ الْعَالَمِ كَمَا أَنِّي أَنَا لَسْتُ مِنَ الْعَالَمِ.</td>
    </tr>
    <tr id="table_14_row_20" class="text">
        <td class="english">Sanctify them by Your truth. Your word is truth.</td>
        <td class="arabic">قَدِّسْهُمْ فِي حَقِّكَ. كلاَمُكَ هُوَ حَقٌّ.</td>
    </tr>
    <tr id="table_14_row_21" class="text">
        <td class="english">As You sent Me into the world, I also have sent them into the world.</td>
        <td class="arabic">كَمَا أَرْسَلْتَنِي إِلَى الْعَالَمِ أَرْسَلْتُهُمْ أَنَا إِلَى الْعَالَمِ</td>
    </tr>
    <tr id="table_14_row_22" class="text">
        <td class="english">And for their sakes I sanctify Myself, that they also may be sanctified by the truth.</td>
        <td class="arabic">وَلأَجْلِهِمْ أُقَدِّسُ أَنَا ذَاتِي لِيَكُونُوا هُمْ أَيْضاً مُقَدَّسِينَ فِي الْحَقِّ.</td>
    </tr>
    <tr id="table_14_row_23" class="text">
        <td class="english">"I do not pray for these alone, but also for those who will believe in Me through their word;</td>
        <td class="arabic">«وَلَسْتُ أَسْأَلُ مِنْ أَجْلِ هَؤُلاَءِ فَقَطْ بَلْ أَيْضاً مِنْ أَجْلِ الَّذِينَ يُؤْمِنُونَ بِي بِكلاَمِهِمْ</td>
    </tr>
    <tr id="table_14_row_24" class="text">
        <td class="english">that they all may be one, as You, Father, are in Me, and I in You; that they also may be one in Us, that the world may believe that You sent Me.</td>
        <td class="arabic">لِيَكُونَ الْجَمِيعُ وَاحِداً كَمَا أَنَّكَ أَنْتَ أَيُّهَا الآبُ فِيَّ وَأَنَا فِيكَ لِيَكُونُوا هُمْ أَيْضاً وَاحِداً فِينَا لِيُؤْمِنَ الْعَالَمُ أَنَّكَ أَرْسَلْتَنِي.</td>
    </tr>
    <tr id="table_14_row_25" class="text">
        <td class="english">And the glory which You gave Me I have given them, that they may be one just as We are one:</td>
        <td class="arabic">وَأَنَا قَدْ أَعْطَيْتُهُمُ الْمَجْدَ الَّذِي أَعْطَيْتَنِي لِيَكُونُوا وَاحِداً كَمَا أَنَّنَا نَحْنُ وَاحِدٌ.</td>
    </tr>
    <tr id="table_14_row_26" class="text">
        <td class="english">I in them, and You in Me; that they may be made perfect in one, and that the world may know that You have sent Me, and have loved them as You have loved Me.</td>
        <td class="arabic">أَنَا فِيهِمْ وَأَنْتَ فِيَّ لِيَكُونُوا مُكَمَّلِينَ إِلَى وَاحِدٍ وَلِيَعْلَمَ الْعَالَمُ أَنَّكَ أَرْسَلْتَنِي وَأَحْبَبْتَهُمْ كَمَا أَحْبَبْتَنِي.</td>
    </tr>
    <tr id="table_14_row_27" class="text">
        <td class="english">Father, I desire that they also whom You gave Me may be with Me where I am, that they may behold My glory which You have given Me; for You loved Me before the foundation of the world.</td>
        <td class="arabic">أَيُّهَا الآبُ أُرِيدُ أَنَّ هَؤُلاَءِ الَّذِينَ أَعْطَيْتَنِي يَكُونُونَ مَعِي حَيْثُ أَكُونُ أَنَا لِيَنْظُرُوا مَجْدِي الَّذِي أَعْطَيْتَنِي لأَنَّكَ أَحْبَبْتَنِي قَبْلَ إِنْشَاءِ الْعَالَمِ.</td>
    </tr>
    <tr id="table_14_row_28" class="text">
        <td class="english">O righteous Father! The world has not known You, but I have known You; and these have known that You sent Me.</td>
        <td class="arabic">أَيُّهَا الآبُ الْبَارُّ إِنَّ الْعَالَمَ لَمْ يَعْرِفْكَ أَمَّا أَنَا فَعَرَفْتُكَ وَهَؤُلاَءِ عَرَفُوا أَنَّكَ أَنْتَ أَرْسَلْتَنِي.</td>
    </tr>
    <tr id="table_14_row_29" class="text">
        <td class="english">And I have declared to them Your name, and will declare it, that the love with which You loved Me may be in them, and I in them."</td>
        <td class="arabic">وَعَرَّفْتُهُمُ اسْمَكَ وَسَأُعَرِّفُهُمْ لِيَكُونَ فِيهِمُ الْحُبُّ الَّذِي أَحْبَبْتَنِي بِهِ وَأَكُونَ أَنَا فِيهِمْ».</td>
    </tr>
    <tr id="table_14_row_30" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">اسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_14_row_32" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">

${nighttimeExpositionIntroHtml}

<table id="table_16" title="Exposition">
    <caption id="caption_table_16" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_16_row_1" class="intro">
        <td class="english">The exposition of the FIRST Hour of the EVE of Great Friday of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من ليلة الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">And when He said this, Our Lord Jesus Christ raised His eyes towards His Father and said:</td>
        <td class="arabic">ما قال ربنا يسوع هذا رفع عينيه إلى فوق نحو ابيه، وقال:</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">Father, the hour has come. Glorify Your Son in the world.</td>
        <td class="arabic">يا أبتاه قد أتت الساعة. مجد ابنك فى العالم.</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">I glorified You Father when I have fulfilled Your will.</td>
        <td class="arabic">أنا مجدتك يا أبتاه على الأرض لما أكملت ما يرضيك.</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">And what You gave Me Father, I gave to them because I selected them from the world.</td>
        <td class="arabic">الذى أعطيتنى يا أبتاه أعطيتهم اياه لأنى أنا اخترتهم من العالم.</td>
    </tr>
    <tr id="table_16_row_8" class="text">
        <td class="english">And they accepted My word and knew that I came from You.</td>
        <td class="arabic">وهم هكذا قبلوا كلامى وعلموا أنى خرجت من عندك.</td>
    </tr>
    <tr id="table_16_row_9" class="text">
        <td class="english">I ask You for their sake and for the sake of all those who believe in Me through their word.</td>
        <td class="arabic">أطلب اليك من أجلهم، ومن أجل كل الذين يؤمنون بى بكلامهم.</td>
    </tr>
    <tr id="table_16_row_10" class="text">
        <td class="english">I have chosen them from the world and I am coming to You and will leave them in the world.</td>
        <td class="arabic">فإنى اخترتهم من العالم، وأنا آت اليك وأتركهم فى العالم.</td>
    </tr>
    <tr id="table_16_row_11" class="text">
        <td class="english">When I was with them, I taught them and delivered Your words to them.</td>
        <td class="arabic">وعندما كنت معهم كنت أحفظهم وسلمت اليهم كلامك.</td>
    </tr>
    <tr id="table_16_row_12" class="text">
        <td class="english">Father the world did not know You and I knew You.</td>
        <td class="arabic">يا أبتاه، العالم لم يعرفك وأنا أعرفك.</td>
    </tr>
    <tr id="table_16_row_13" class="text">
        <td class="english">Those who are with Me knew that You sent Me, that is why I taught them Your name O Father.</td>
        <td class="arabic">وهؤلاء الذين معى علموا أنك أرسلتنى، لذلك أعلمتهم بأسمك يا أبى.</td>
    </tr>
    <tr id="table_16_row_14" class="text">
        <td class="english">The love You lavished on Me O Father, let it be always on them so that they may proclaim Your grace among the nations for I shall be in them.</td>
        <td class="arabic">المحبة التى أحببتنى بها يا أبتاه فلتكن دائمة فيهم جميعاً، ليخبروا الأمم بنعمتك فإنى أنا أيضاً أكون فيهم يا أبى.</td>
    </tr>
    <tr id="table_16_row_15" class="text">
        <td class="english">Those are the commandments that our Savior gave to His disciples, whom He chose and sent to the world, to harvest for Him a big crop.</td>
        <td class="arabic">هذه هى الوصايا التى قررها مخلصنا مع تلاميذه، هؤلاء الذين اختارهم وأرسلهم إلى العالم ليأتوا له بأثمار كثيرة.</td>
    </tr>
    <tr id="table_16_row_16" class="text">
        <td class="english">These are the galaxies whose light filled the earth.</td>
        <td class="arabic">هؤلاء كواكب المسكونة الذين ملأ نورهم كل العالم.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};