import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const EOT6 = () => {
    const hourIntroHtml = hourIntro("SIXTH","السادسة","EVE of TUESDAY","ليلة الثلاثاء");
    const paschalPraiseHtml = paschalPraise3("4","4","5","SIXTH","السادسة","EVE of TUESDAY","ليلة الثلاثاء");
    const copticGospelIntroHtml = copticGospelIntro("7");
    const nighttimeExpositionIntroHtml = nighttimeExpositionIntro("11");
    const expositionConclusionHtml = expositionConclusion("13");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀Ⲱⲥⲓ̀ⲉ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic"> ̀Ⲛⲑⲟⲕ ⲇⲉ ̀ⲡ̀Ⲓ̅ⲥ̅ⲗ ̀ⲙⲡⲉⲣⲉⲣⲁⲧ ̀ⲉⲙⲓ : ⲟⲩⲟϩ Ⲓⲟⲩⲇⲁ ⲙⲡⲉⲣϣⲉ ̀ⲉϧⲟⲩⲛ ̀ⲉⲅⲁⲗⲅⲁⲇⲁ : ⲟⲩⲟϩ ̀ⲙⲡⲉⲣϣⲉⲛⲱⲧⲉⲛ ̀ⲉ̀ϩⲣⲏⲓ ⲉ̀ⲡϭⲓ̀ⲛϫⲟⲛⲥ : ⲟⲩⲟϩ ̀ⲙⲡⲉⲣⲱⲣⲕ ̀ⲙⲠ⳪ ⲉⲧⲟⲛϧ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(91:2-3)
        <span class="arabic-caption">المزمور قبطي<br>(91:2-3)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">You are my helper and my refuge; my God;</td>
            <td class="coptic">Ⲡⲁⲙⲁ ̀ⲙⲫⲱϯ ⲡⲁⲛⲟⲩϯ ϯⲛⲁⲉⲣϩⲉⲗⲡⲓⲥ ̀ⲉⲣⲟϥ :</td>
            <td class="arabic">ملجأي إلهي . </td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">I will trust in Him.</td>
            <td class="coptic">ϫⲉ ̀ⲛⲑⲟϥ ⲉϥ̀ⲉⲛⲁϩⲙⲉⲧ :</td>
            <td class="arabic">فأتكل عليه</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">For He shall deliver you from the snare of the fowler,</td>
            <td class="coptic">ⲉⲃⲟⲗϩⲁ ⲡⲓⲫⲁϣ ̀ⲛⲧⲉ ⲡⲓⲣⲉϥϫⲱⲣϫ :</td>
            <td class="arabic">لأنه ينجيني من فخ الصياد</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">and from every troublesome matter.</td>
            <td class="coptic">ⲛⲉⲙ ̀ⲉⲃⲟⲗ ϩⲁ ⲟⲩⲥⲁϫⲓ ̀ⲛⲣⲉϥ ̀ϣⲑⲟⲣⲧⲉⲣ</td>
            <td class="arabic">ومن كلمة مقلقة.</td>
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
        <span class="arabic-caption">الإناجيل قبطي</span></caption>
        <tr id="table_8_row_0" class="priest">
            <td class="english">A chapter according to St. Luke,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار لوقا</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲙⲁϩⲑⲏⲧⲉⲛ ⲇⲉ ̀ⲉⲣⲱⲧⲉⲛ ⲙⲏⲡⲟⲧⲉ ⲛⲧⲟⲩ̀ϩⲣⲟϣ ̀ⲛϫⲉ ⲛⲉⲧⲉⲛϩⲏⲧ ϧⲉⲛ ⲟⲩϭⲓⲙⲏ ⲛⲉⲙ ⲟⲩⲑⲓϧⲓ ⲛⲉⲙ ϩⲁⲛⲣⲱⲟⲩϣ ̀ⲙⲃⲓ̀ⲱⲧⲓⲕⲟⲛ ⲟⲩⲟϩ ̀ⲛⲟⲩϩⲟϯ ϧⲉⲛ ⲟⲩϩⲟϯ ̀ⲛⲧⲉϥⲓ ̀ⲉϫⲉⲛ ⲑⲏⲛⲟⲩ ̀ⲛϫⲉ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲉⲧⲉ̀ⲙⲙⲁⲩ. ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲫⲁϣ ⲉϥ̀ⲉ̀ⲓ ⲅⲁⲣ ̀ⲉϫⲉⲛ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ̀ⲡϩⲟ ̀ⲙ̀ⲡⲕⲁϩⲓ ⲧⲏⲣϥ : Ⲣⲱⲓⲥ ⲟⲩⲛ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ̀ⲉⲣⲉⲧⲉⲛⲧⲱⲃϩ ϩⲓⲛⲁ ̀ⲛⲧⲉⲧⲉⲛ ̀ϣϫⲉⲙϫⲟⲙ ̀ⲉⲉⲣ ⲥⲁⲃⲟⲗ ̀ⲉⲛⲁⲓ ⲧⲏⲣⲟⲩ ⲉⲑⲛⲁϣⲱⲡⲓ : ⲟⲩⲟϩ ̀ⲛⲧⲉⲧⲉⲛⲟϩⲓ ̀ⲑⲏⲛⲟⲩ ̀ⲙⲡⲉ̀ⲙⲑⲟ ̀ⲙ̀ⲡϣⲏⲣⲓ ̀ⲙ̀ⲫⲣⲱⲙⲓ. Ⲛⲁϥ̀ⲓⲣⲓ ⲇⲉ ̀ⲙⲡⲓ̀ⲉϩⲟⲟⲩ ⲉϥϯ̀ⲥⲃⲱ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ <br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_8_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">

<table id="table_9" title="Psalm">
    <caption id="caption_table_9" class="caption">Psalm<br>(91:2-3)
    <span class="arabic-caption">المزمور<br>(91: 2 - 3)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">You are my helper and my refuge; 
my God; I will trust in Him.</td>
        <td class="arabic">لانه ينجينى من فخ الصياد ومن كلمة مقلقة.</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">For He shall deliver you from the snare of the fowler, 
and from every troublesome matter.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Luke 21: 34-38)
    <span class="arabic-caption">الانجيل<br>(لوقا 21: 34 – 38)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">"But take heed to yourselves, lest your hearts be weighed down with carousing, drunkenness, and cares of this life, and that Day come on you unexpectedly.</td>
        <td class="arabic">فَاحْتَرِزُوا لأَنْفُسِكُمْ لِئَلاَّ تَثْقُلَ قُلُوبُكُمْ فِي خُمَارٍ وَسُكْرٍ وَهُمُومِ الْحَيَاةِ فَيُصَادِفَكُمْ ذَلِكَ الْيَوْمُ بَغْتَةً.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">For it will come as a snare on all those who dwell on the face of the whole earth.</td>
        <td class="arabic">لأَنَّهُ كَالْفَخِّ يَأْتِي عَلَى جَمِيعِ الْجَالِسِينَ عَلَى وَجْهِ كُلِّ الأَرْضِ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">Watch therefore, and pray always that you may be counted worthy to escape all these things that will come to pass, and to stand before the Son of Man."</td>
        <td class="arabic">اِسْهَرُوا إِذاً وَتَضَرَّعُوا فِي كُلِّ حِينٍ لِكَيْ تُحْسَبُوا أَهْلاً لِلنَّجَاةِ مِنْ جَمِيعِ هَذَا الْمُزْمِعِ أَنْ يَكُونَ وَتَقِفُوا قُدَّامَ ابْنِ الإِنْسَانِ».</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">And in the daytime He was teaching in the temple, but at night He went out and stayed on the mountain called Olivet.</td>
        <td class="arabic">وَكَانَ فِي النَّهَارِ يُعَلِّمُ فِي الْهَيْكَلِ وَفِي اللَّيْلِ يَخْرُجُ وَيَبِيتُ فِي الْجَبَلِ الَّذِي يُدْعَى جَبَلَ الزَّيْتُونِ.</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">Then early in the morning all the people came to Him in the temple to hear Him.</td>
        <td class="arabic">وَكَانَ كُلُّ الشَّعْبِ يُبَكِّرُونَ إِلَيْهِ فِي الْهَيْكَلِ لِيَسْمَعُوهُ.</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
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
        <td class="english">The Exposition of the SIXTH Hour of the Eve of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة السادسة من ليلة الثلاثاء من البصخة المقدسة بركتها  تكون معنا، آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">As an attending physician, Jesus was treating us without charge.</td>
        <td class="arabic">مثل طبيب مداو كان المسيح الهنا يداوى مجاناً قائلاً:</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">He reminds us that gluttony burdens the heart and weakens the body.</td>
        <td class="arabic">أن زيادة الأكل تثقل القلوب وتضعف القوة من الجسد،</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">Likewise, consumption in worldly concerns could bring on us vicious passions.  It can cause us to stray away from the fear of God.</td>
        <td class="arabic">والاهتمام الدنيوى أيضاً يجلب على الإنسان شروراً كثيرة ويحيد بالإنسان عن مخافة الله</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">The wicked Satan can overwhelm us and drive us away from the path of salvation.</td>
        <td class="arabic">فيخنقه الشرير وينحرف به عن طريق الخلاص،</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">It may also diminish the awareness of our soul’s salvation and subject us to the dominion of death just as the prey falls in the trap.</td>
        <td class="arabic">ومعرفة خلاص نفسه. ويوقعه فى سلطان الموت، مثل الفخ الذى يخطف الفريسة.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">Be alert and present fruits worthy of  righteousness and atonement so that you may stand in front of our Judge and Savior Jesus.</td>
        <td class="arabic">اسهروا أنتم أيضاً واصنعوا ثمرة تليق بالبر والتوبة، لكى تكونوا قائمين أمام الديان يسوع المخلص.</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english">He was teaching the public in the temple. By night, He rested on the Mount of Olives.</td>
        <td class="arabic">كان يعلم الجموع فى الهيكل، وفى الليل كان يستريح.</td>
    </tr>
    <tr id="table_12_row_11" class="text">
        <td class="english">By day, He went down to Jerusalem where people gathered early to listen to His teachings that are full of righteousness.</td>
        <td class="arabic">وكانت راحته فى جبل الزيتون، وفى النهار كان يأتى إلى أورشليم، وكان جميع الشعب يبكرون اليه ليسمعوا تعاليمه المفعمة صلاحاً.</td>
    </tr>
    <tr id="table_12_row_12" class="text">
        <td class="english">Those who heard him, hurried to drink from the spring of His sweet water.</td>
        <td class="arabic">والذين سمعوا كانوا يسبقون إلى ينبوعه ويشربون منه الماء الحلو.</td>
    </tr>
    <tr id="table_12_row_13" class="text">
        <td class="english">As The Book testifies to His coming, “He is the healthy, nourishing food for those who believe in Him.”</td>
        <td class="arabic">كما قال الكتاب الشاهد بمجيئه أنه الطعام غير الفاسد، المغذى كل الذين يؤمنون به.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};