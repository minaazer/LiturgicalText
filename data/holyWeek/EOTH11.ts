import { hourIntro, paschalPraise3 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, nighttimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const EOTH11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","EVE of COVENANT THURSDAY","ليلة خميس العهد");
    const paschalPraiseHtml = paschalPraise3("4","4","5","ELEVENTH","الحادية عشر","EVE of COVENANT THURSDAY","ليلة خميس العهد");
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
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲥⲟⲫⲓ̀ⲁ ̀ⲛⲧⲉ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ ⲉϥϫⲱ ̀ⲙⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲛⲉ̀ⲉⲧⲉϥ ϫⲱ ̀ⲙⲙⲱⲟⲩ ̀ⲛϫⲉ ̀Ⲡ⳪ ϫⲉ ⲙⲏ ⲫⲏ̀ⲉϣⲁϥϩⲉⲓ ⲙⲏ ̀ϥⲛⲁⲧⲱⲛϥ ⲁⲛ ϫⲉ : ⲓⲉ ⲫⲏⲉⲧⲁϥⲧⲁⲥⲑⲟ ̀ⲉⲃⲟⲗ ⲙⲏ ̀ⲙⲡⲁϥⲧⲁⲥⲑⲟ ̀ⲉϧⲟⲩⲛ ϫⲉ : ⲉⲑⲃⲉⲟⲩ ⲁϥⲧⲁⲥⲑⲟ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ ⲡⲁⲓⲗⲁⲟⲥ ϧⲉⲛ ⲟⲩⲧⲁⲥⲑⲟ ̀ⲉⲃⲟⲗ ̀ⲛⲁⲧϣⲓⲡⲓ</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Jeremiah 8:4-9)
    <span class="arabic-caption">النبوة الأولي<br>(أرميا 8: 4 – 9)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Jeremiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من أرميا النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">"'Thus says the Lord: "Will they fall and not rise? Will one turn away and not return?</td>
        <td class="arabic">فَلِمَاذَا ارْتَدَّ هَذَا الشَّعْبُ فِي أُورُشَلِيمَ ارْتِدَاداً دَائِماً؟ تَمَسَّكُوا بِالْمَكْرِ. أَبُوا أَنْ يَرْجِعُوا.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Why has this people slidden back, Jerusalem, in a perpetual backsliding? They hold fast to deceit, They refuse to return.</td>
        <td class="arabic">صَغَيْتُ وَسَمِعْتُ. بِغَيْرِ الْمُسْتَقِيمِ يَتَكَلَّمُونَ. لَيْسَ أَحَدٌ يَتُوبُ عَنْ شَرِّهِ قَائِلاً: مَاذَا عَمِلْتُ؟ كُلُّ وَاحِدٍ رَجَعَ إِلَى مَسْرَاهُ كَفَرَسٍ ثَائِرٍ فِي الْحَرْبِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">I listened and heard, But they do not speak aright. No man repented of his wickedness, Saying, 'What have I done?' Everyone turned to his own course, As the horse rushes into the battle.</td>
        <td class="arabic">بَلِ اللَّقْلَقُ فِي السَّمَاوَاتِ يَعْرِفُ مِيعَادَهُ وَالْيَمَامَةُ وَالسُّنُوْنَةُ الْمُزَقْزِقَةُ حَفِظَتَا وَقْتَ مَجِيئِهِمَا. أَمَّا شَعْبِي فَلَمْ يَعْرِفْ قَضَاءَ الرَّبِّ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">"Even the stork in the heavens Knows her appointed times; And the turtledove, the swift, and the swallow Observe the time of their coming. But My people do not know the judgment of the Lord.</td>
        <td class="arabic">كَيْفَ تَقُولُونَ: نَحْنُ حُكَمَاءُ وَشَرِيعَةُ الرَّبِّ مَعَنَا؟ حَقّاً إِنَّهُ إِلَى الْكَذِبِ حَوَّلَهَا قَلَمُ الْكَتَبَةِ الْكَاذِبُ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">"How can you say, 'We are wise, And the law of the Lord is with us'? Look, the false pen of the scribe certainly works falsehood.</td>
        <td class="arabic">خَزِيَ الْحُكَمَاءُ. ارْتَاعُوا وَأُخِذُوا. هَا قَدْ رَفَضُوا كَلِمَةَ الرَّبِّ فَأَيَّةُ حِكْمَةٍ لَهُمْ؟</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">The wise men are ashamed, They are dismayed and taken. Behold, they have rejected the word of the Lord; So what wisdom do they have?</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_3_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(62:7,2)
        <span class="arabic-caption">المزمور قبطي<br>(62:7,2)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">In God is my salvation and my glory;</td>
            <td class="coptic">Ⲡⲁⲟⲩϫⲁⲓ ⲛⲉⲙ ⲡⲁ̀ⲱⲟⲩ ⲁⲩϧⲉⲛ ⲡⲁⲛⲟⲩϯ :</td>
            <td class="arabic">خلاصي ومجدي بإلهى.</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">And my refuge, is in God.</td>
            <td class="coptic">Ⲫϯ ̀ⲛⲧⲉ ⲧⲁⲃⲟⲏⲑⲓⲁ ⲟⲩⲟϩ ⲧⲁϩⲉⲗⲡⲓⲥ ⲁⲥϧⲉⲛ Ⲫϯ :</td>
            <td class="arabic">إله معونتي. رجائي هو بالله.</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">He is my defense;</td>
            <td class="coptic">ⲕⲉ ⲅⲁⲣ ̀ⲛⲑⲟϥ ⲡⲉ ⲡⲁⲛⲟⲩϯ ⲡⲁⲥⲱⲧⲏⲣ :</td>
            <td class="arabic">لأنه إلهي ومخلصي.</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">I shall not be greatly moved.</td>
            <td class="coptic">ⲡⲁⲣⲉϥϣⲟⲡⲧ ̀ⲉⲣⲟϥ ̀ⲛⲛⲁⲕⲓⲙ ̀ⲛϩⲟⲩ̀ⲟ</td>
            <td class="arabic">ناصري فلا أتزعزع أبداً.</td>
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
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲓ̅ⲏ̅ⲥ ⲇⲉ ⲁϥⲱϣ ̀ⲉⲃⲟⲗ ⲟⲩⲟϩ ⲡⲉϫⲁϥ : ϫⲉ ⲫⲏⲉⲟⲛⲁϩϯ ̀ⲉⲣⲟⲓ ⲁϥⲛⲁϩϯ ̀ⲉⲣⲟⲓ ⲁⲛ : ⲁⲗⲗⲁ ⲁϥⲛⲁϩϯ ̀ⲉⲫⲏ̀ⲉⲧⲁϥⲧⲁⲟⲩⲟⲓ. Ⲟⲩⲟϩ ⲫⲏⲉⲑⲛⲁⲩ ̀ⲉⲣⲟⲓ ⲁϥⲛⲁⲩ ̀ⲉⲫⲏ̀ⲉⲧⲁϥⲧⲁⲟⲩⲟⲓ. ̀Ⲁⲛⲟⲕ ⲁⲓ̀ⲓ ⲉⲩⲟⲩⲱⲓⲛⲓ ̀ⲙⲡⲓⲕⲟⲥⲙⲟⲥ <br>... Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_9" class="caption">Psalm<br>(62:7,2)
    <span class="arabic-caption">المزمور<br>(62: 7 و 2)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of David the Prophet, may his blessing be with us, Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">In God is my salvation and my glory;
 And my refuge, is in God.</td>
        <td class="arabic">خلاصى ومجدى بالهى.
إله معونتى. رجائى هو بالله.</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">He is my defense; 
I shall not be greatly moved.</td>
        <td class="arabic">لانه الهى ومخلصى.
 ناصرى فلا أتزعزع أبداً.</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(John 12:44-50)
    <span class="arabic-caption">الانجيل<br>(يوحنا ١٢ : ٤٤-٥٠)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St.  John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">Then Jesus cried out and said, "He who believes in Me, believes not in Me but in Him who sent Me.</td>
        <td class="arabic">فَنَادَى يَسُوعُ: «الَّذِي يُؤْمِنُ بِي لَيْسَ يُؤْمِنُ بِي بَلْ بِالَّذِي أَرْسَلَنِي.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">And he who sees Me sees Him who sent Me.</td>
        <td class="arabic">وَالَّذِي يَرَانِي يَرَى الَّذِي أَرْسَلَنِي.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">I have come as a light into the world, that whoever believes in Me should not abide in darkness.</td>
        <td class="arabic">أَنَا قَدْ جِئْتُ نُوراً إِلَى الْعَالَمِ حَتَّى كُلُّ مَنْ يُؤْمِنُ بِي لاَ يَمْكُثُ فِي الظُّلْمَةِ.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">And if anyone hears My words and does not believe, I do not judge him; for I did not come to judge the world but to save the world.</td>
        <td class="arabic">وَإِنْ سَمِعَ أَحَدٌ كلاَمِي وَلَمْ يُؤْمِنْ فَأَنَا لاَ أَدِينُهُ لأَنِّي لَمْ آتِ لأَدِينَ الْعَالَمَ بَلْ لِأُخَلِّصَ الْعَالَمَ.</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">He who rejects Me, and does not receive My words, has that which judges him--the word that I have spoken will judge him in the last day.</td>
        <td class="arabic">مَنْ رَذَلَنِي وَلَمْ يَقْبَلْ كلاَمِي فَلَهُ مَنْ يَدِينُهُ. اَلْكلاَمُ الَّذِي تَكَلَّمْتُ بِهِ هُوَ يَدِينُهُ فِي الْيَوْمِ الأَخِيرِ</td>
    </tr>
    <tr id="table_10_row_9" class="text">
        <td class="english">For I have not spoken on My own authority; but the Father who sent Me gave Me a command, what I should say and what I should speak.</td>
        <td class="arabic">لأَنِّي لَمْ أَتَكَلَّمْ مِنْ نَفْسِي لَكِنَّ الآبَ الَّذِي أَرْسَلَنِي هُوَ أَعْطَانِي وَصِيَّةً: مَاذَا أَقُولُ وَبِمَاذَا أَتَكَلَّمُ.</td>
    </tr>
    <tr id="table_10_row_10" class="text">
        <td class="english">And I know that His command is everlasting life. Therefore, whatever I speak, just as the Father has told Me, so I speak."</td>
        <td class="arabic">وَأَنَا أَعْلَمُ أَنَّ وَصِيَّتَهُ هِيَ حَيَاةٌ أَبَدِيَّةٌ. فَمَا أَتَكَلَّمُ أَنَا بِهِ فَكَمَا قَالَ لِي الآبُ هَكَذَا أَتَكَلَّمُ».</td>
    </tr>
    <tr id="table_10_row_11" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_10_row_13" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">

${nighttimeExpositionIntroHtml}

<table id="table_12" title="Exposition">
    <caption id="caption_table_12" class="caption">Exposition<br>()
    <span class="arabic-caption">الطرح<br>()</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">The exposition of the ELEVENTH Hour of the EVE of COVENANT THURSDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من ليلة الخميس العهد من البصخة المقدسة بركتها  تكون معنا أمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">Our Savior the Son of the living God said, “I am the Light of the world.</td>
        <td class="arabic">قال المخلص ابن الله الحى: أنا هو نور العالم بأسره.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">He who believes in Me and accepts My word will not be in the darkness.</td>
        <td class="arabic">من يؤمن بى ويقبل كلامى لا يمكن أن يلبث فى الظلام.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">He who denies Me and does not listen nor obey My words, I will not judge Him, but the words I said shall judge him.</td>
        <td class="arabic">ومن يجحدنى ولم يرد أن يسمع لقولى ولم يطعه فأنا لا أدينه،</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">What I have said is not from Me but from the Father who sent Me. 


He gave Me the commandment of what to say and what to tell.”</td>
        <td class="arabic">لكن القول الذى قلته أنا هو يدينه. فان القول الذى نطقت به ليس هو لى بل للآب الذى أرسلنى.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">We believe that You are the truly the Word of God the Father</td>
        <td class="arabic">وهو أعطانى الوصية بماذا أقول وبماذا أنطق.</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">and that You have power over all and nothing is impossible with You.</td>
        <td class="arabic">نحن نؤمن أنك أنت بالحقيقة كلمة الله الآب الصالح.</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english"></td>
        <td class="arabic">وأن لك القدرة على كل شئ وليس شئ يعسر عليك.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${nighttimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};