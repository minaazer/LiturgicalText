import { hourIntro, paschalPraise1 , copticGospelIntro, nighttimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const EOT3 = () => {
    const hourIntroHtml = hourIntro("THIRD","الثالثة","EVE of TUESDAY","ليلة الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","4","5","THIRD","الثالثة","EVE of TUESDAY","ليلة الثلاثاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲙⲁⲗⲁⲭⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">̀̀Ⲡⲗⲏⲙⲙⲁ ⲙ̀ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϫⲉⲛ ⲡ̀Ⲓ̅ⲥ̅ⲗ ϧⲉⲛ ⲧϫⲓϫ ⲙ̀ⲡⲉϥⲁⲅⲅⲉⲗⲟⲥ : ⲭⲁⲥ ⲉϫⲉⲛ ⲡⲉⲧⲉⲛϩⲏⲧ : ⲁⲓⲙⲉⲛⲣⲉ ⲑⲏⲛⲟⲩ ⲡⲉϫⲉ Ⲡ̀⳪ ⲟⲩⲟϩ ⲡⲉϫⲱⲧⲉⲛ ϫⲉ ϧⲉⲛ ⲟⲩ ⲁⲕⲙⲉⲛⲣⲓⲧⲉⲛ.</td>
        </tr>
        <tr id="table_2_row_35" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Malachi 1 :1-9)
    <span class="arabic-caption">النبوة الأولي<br>(ملاخى 1 : 1 - 9)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Malachi the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من ملاخى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">The burden of the word of the Lord to Israel by Malachi.</td>
        <td class="arabic">وَحْيُ كَلِمَةِ الرَّبِّ لإِسْرَائِيلَ عَنْ يَدِ مَلاَخِي:</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">"I have loved you," says the Lord. "Yet you say, 'In what way have You loved us?' Was not Esau Jacob's brother?" Says the Lord. "Yet Jacob I have loved;</td>
        <td class="arabic">[أَحْبَبْتُكُمْ قَالَ الرَّبُّ]. وَقُلْتُمْ: [بِمَا أَحْبَبْتَنَا؟] أَلَيْسَ عِيسُو أَخاً لِيَعْقُوبَ يَقُولُ الرَّبُّ وَأَحْبَبْتُ يَعْقُوبَ</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">But Esau I have hated, And laid waste his mountains and his heritage For the jackals of the wilderness."</td>
        <td class="arabic">وَأَبْغَضْتُ عِيسُوَ وَجَعَلْتُ جِبَالَهُ خَرَاباً وَمِيرَاثَهُ لِذِئَابِ الْبَرِّيَّةِ؟</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Even though Edom has said, "We have been impoverished, But we will return and build the desolate places," Thus says the Lord of hosts: "They may build, but I will throw down; They shall be called the Territory of Wickedness, And the people against whom the Lord will have indignation forever.</td>
        <td class="arabic">لأَنَّ أَدُومَ قَالَ قَدْ: [هُدِمْنَا فَنَعُودُ وَنَبْنِي الْخِرَبَ]. هَكَذَا قَالَ رَبُّ الْجُنُودِ: [هُمْ يَبْنُونَ وَأَنَا أَهْدِمُ. وَيَدْعُونَهُمْ تُخُومَ الشَّرِّ وَالشَّعْبَ الَّذِي غَضِبَ عَلَيْهِ الرَّبُّ إِلَى الأَبَدِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">Your eyes shall see, And you shall say, 'The Lord is magnified beyond the border of Israel.'</td>
        <td class="arabic">فَتَرَى أَعْيُنُكُمْ وَتَقُولُونَ لِيَتَعَظَّمِ الرَّبُّ مِنْ عَُِنْدِ تُخُمِ إِسْرَائِيلَ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">"A son honors his father, And a servant his master. If then I am the Father, Where is My honor? And if I am a Master, Where is My reverence? Says the Lord of hosts To you priests who despise My name. Yet you say, 'In what way have we despised Your name?'</td>
        <td class="arabic">[الاِبْنُ يُكْرِمُ أَبَاهُ وَالْعَبْدُ يُكْرِمُ سَيِّدَهُ. فَإِنْ كُنْتُ أَنَا أَباً فَأَيْنَ كَرَامَتِي؟ وَإِنْ كُنْتُ سَيِّداً فَأَيْنَ هَيْبَتِي؟ قَالَ لَكُمْ رَبُّ الْجُنُودِ أَيُّهَا الْكَهَنَةُ الْمُحْتَقِرُونَ اسْمِي. وَتَقُولُونَ: بِمَ احْتَقَرْنَا اسْمَكَ؟</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">"You offer defiled food on My altar. But say, 'In what way have we defiled You?' By saying, 'The table of the Lord is contemptible.'</td>
        <td class="arabic">تُقَرِّبُونَ خُبْزاً نَجِساً عَلَى مَذْبَحِي. وَتَقُولُونَ: بِمَ نَجَّسْنَاكَ؟ بِقَوْلِكُمْ إِنَّ مَائِدَةَ الرَّبِّ مُحْتَقَرَةٌ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">And when you offer the blind as a sacrifice, Is it not evil? And when you offer the lame and sick, Is it not evil? Offer it then to your governor! Would he be pleased with you? Would he accept you favorably?" Says the Lord of hosts.</td>
        <td class="arabic">وَإِنْ قَرَّبْتُمُ الأَعْمَى ذَبِيحَةً أَفَلَيْسَ ذَلِكَ شَرّاً؟ وَإِنْ قَرَّبْتُمُ الأَعْرَجَ وَالسَّقِيمَ أَفَلَيْسَ ذَلِكَ شَرّاً؟ قَرِّبْهُ لِوَالِيكَ أَفَيَرْضَى عَلَيْكَ أَوْ يَرْفَعُ وَجْهَكَ؟ قَالَ رَبُّ الْجُنُودِ.</td>
    </tr>
    <tr id="table_3_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_6" title="Coptic Psalm">
        <caption class="caption" id="caption_table_6">Coptic Psalm<br>(13:3, 5)
        <span class="arabic-caption">المزمور قبطياً<br>(12: 4 ، 6)</span></caption>

        <tr id="table_6_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_6_row_1" class="text">
            <td class="english">Look on me, hearken to me, O Lord my God: </td>
            <td class="coptic">Ⲥⲟⲙⲥ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ Ⲡ̀ϭⲟⲓⲥ ⲡⲁⲛⲟⲩϯ :</td>
            <td class="arabic">أنظر واستجب لي ياربي والهى</td>
        </tr>
        <tr id="table_6_row_2" class="text">
            <td class="english">lighten my eyes, lest I sleep in death;</td>
            <td class="coptic">ⲙⲁⲫ̀ⲟⲩⲱⲓⲛⲓ ⲛ̀ⲛⲁⲃⲁⲗ ⲙⲏⲡⲱⲥ ⲛ̀ⲧⲁϩⲱⲣⲡ ϧⲉⲛ ⲫ̀ⲙⲟⲩ :</td>
            <td class="arabic">أنر عيني لئلا أنام في الموت</td>
        </tr>
        <tr id="table_6_row_3" class="text">
            <td class="english">But I have hoped in Your mercy;</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲕ ⲇⲉ ⲁⲓⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲡⲉⲕⲛⲁⲓ :</td>
            <td class="arabic">أما أنا فعلى رحمتك توكلت</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">my heart shall rejoice in Your salvation.</td>
            <td class="coptic">ⲡⲁϩⲏⲧ ⲛⲁⲑⲉⲗⲏⲗ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲛⲟϩⲉⲙ</td>
            <td class="arabic">يبتهج قلبي بخلاصك.</td>
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
            <td class="english">A chapter according to St. Luke,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار لوقا</td>
        </tr>

        <tr id="table_8_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_8_row_2" class="text">
            <td class="coptic">Ⲛ̀ϩ̀ⲣⲏⲓ ⲇⲉ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ ⲁⲩⲓ̀ϩⲁⲣⲟϥ ⲛ̀ϫⲉ ϩⲁⲛⲫⲁⲣⲓⲥⲉⲟⲥ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲁϥ : ϫⲉ ⲙⲁϣⲉⲛⲁⲕ ⲉ̀ⲃⲟⲗ ⲟⲩⲟϩ ϩⲱⲗ ⲉ̀ⲃⲟⲗ ⲧⲁⲓ ϫⲉ ̀̀Ⲡⲣⲱⲇⲏⲥ ϥ̀ⲟⲩⲱϣ ⲉ̀ϧⲟⲑⲃⲉⲕ. Ⲟⲩⲟϩ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ ϫⲉ ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲁ̀ϫⲟⲥ ⲛ̀ⲧⲁⲓⲃⲁϣⲟⲣ : ϫⲉ ϩⲏⲡⲡⲉ ϯϩⲓ ⲇⲉⲙⲱⲛ ⲉ̀ⲃⲟⲗ : ⲟⲩⲟϩ ϯϫⲱⲕ ⲛ̀ϩⲁⲛⲧⲁⲗϭⲟ ⲙ̀ⲫⲟⲟⲩ ⲛⲉⲙ ⲣⲁⲥϯ ⲟⲩⲟϩ ϧⲉⲛ ⲡⲓⲙⲁϩ ϣⲟⲙⲧ ϯⲛⲁϫⲱⲕ ⲉ̀ⲃⲟⲗ. Ⲡ̀ⲗⲏⲛ ϩⲱϯ ⲉ̀ⲣⲟⲓ ⲡⲉ ⲛ̀ⲧⲁⲉⲣⲫⲟⲟⲩ ⲛⲉⲙ ⲣⲁⲥϯ ⲟⲩⲟϩ ⲡⲉⲑⲛⲏⲟⲩ ⲛ̀ⲧⲁϣⲉⲛⲏⲓ : ϫⲉ ⲛ̀ⲥ̀ⲭⲏ ⲁⲛ ⲛ̀ⲧⲉ ⲟⲩⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲧⲁⲕⲟ ⲥⲁⲃⲟⲗ ⲛ̀Ⲓ̅ⲗ̅ⲏ̅ⲙ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_9" class="caption">Psalm<br>(13:3,5)
    <span class="arabic-caption">المزمور<br>(12: 4 ، 6)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">Look on me, hearken to me, O Lord my God: 
lighten my eyes, lest I sleep in death;</td>
        <td class="arabic">أنظر واستجب لى ياربى والهى أنر عينى لئلا أنام فى الموت</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">But I have hoped in Your mercy; 
my heart shall rejoice in Your salvation.</td>
        <td class="arabic">أما أنا فعلى رحمتك توكلت يبتهج قلبى بخلاصك.</td>
    </tr>
    <tr id="table_9_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_10" title="Gospel">
    <caption id="caption_table_10" class="caption">Gospel<br>(Luke 13: 31-35)
    <span class="arabic-caption">الانجيل<br>(لوقا 13: 31 – 35)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">On that very day some Pharisees came, saying to Him, “Get out and depart from here, for Herod wants to kill You.”</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ تَقَدَّمَ بَعْضُ الْفَرِّيسِيِّينَ قَائِلِينَ لَهُ: «اخْرُجْ وَاذْهَبْ مِنْ هَهُنَا لأَنَّ هِيرُودُسَ يُرِيدُ أَنْ يَقْتُلَكَ».</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">And He said to them, “Go, tell that fox, ‘Behold, I cast out demons and perform cures today and tomorrow, and the third day I shall be perfected.’</td>
        <td class="arabic">فَقَالَ لَهُمُ: «امْضُوا وَقُولُوا لِهَذَا الثَّعْلَبِ: هَا أَنَا أُخْرِجُ شَيَاطِينَ وَأَشْفِي الْيَوْمَ وَغَداً وَفِي الْيَوْمِ الثَّالِثِ أُكَمَّلُ.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">Nevertheless I must journey today, tomorrow, and the day following; for it cannot be that a prophet should perish outside of Jerusalem.</td>
        <td class="arabic">بَلْ يَنْبَغِي أَنْ أَسِيرَ الْيَوْمَ وَغَداً وَمَا يَلِيهِ لأَنَّهُ لاَ يُمْكِنُ أَنْ يَهْلِكَ نَبِيٌّ خَارِجاً عَنْ أُورُشَلِيمَ.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">“O Jerusalem, Jerusalem, the one who kills the prophets and stones those who are sent to her! How often I wanted to gather your children together, as a hen gathers her brood under her wings, but you were not willing!</td>
        <td class="arabic">يَا أُورُشَلِيمُ يَا أُورُشَلِيمُ يَا قَاتِلَةَ الأَنْبِيَاءِ وَرَاجِمَةَ الْمُرْسَلِينَ إِلَيْهَا كَمْ مَرَّةٍ أَرَدْتُ أَنْ أَجْمَعَ أَوْلاَدَكِ كَمَا تَجْمَعُ الدَّجَاجَةُ فِرَاخَهَا تَحْتَ جَنَاحَيْهَا وَلَمْ تُرِيدُوا.</td>
    </tr>
    <tr id="table_10_row_8" class="text">
        <td class="english">See! Your house is left to you desolate; and assuredly, I say to you, you shall not see Me until the time comes when you say, ‘Blessed is He who comes in the name of the Lord!’ ”</td>
        <td class="arabic">هُوَذَا بَيْتُكُمْ يُتْرَكُ لَكُمْ خَرَاباً! وَالْحَقَّ أَقُولُ لَكُمْ: إِنَّكُمْ لاَ تَرَوْنَنِي حَتَّى يَأْتِيَ وَقْتٌ تَقُولُونَ فِيهِ: مُبَارَكٌ الآتِي بِاسْمِ الرَّبِّ».</td>
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
        <td class="english">The exposition of the THIRD Hour of the EVE of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الثالثة من ليلة الثلاثاء من البصخة المقدسة بركتها تكون معنا أمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">On this day some people came and told Him that king Herod wants to kill him saying,</td>
        <td class="arabic">فى ذلك اليوم وافاه قوم وأخبروه عن هيرودس الملك، قائلين:</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">“Teacher, flee from this place because Herod wants to kill You.”</td>
        <td class="arabic">يا معلم أخرج من ههنا فان هيرودس المارق يريد قتلك.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">Jesus said to them, “Go and tell this wicked fox that I will heal many today and tomorrow and in the coming days.</td>
        <td class="arabic">فأجاب وقال للذى قال له: امض وقل لهذا الثعلب الشرير انى أكمل شفاء كثيرين اليوم وغداً وفى اليوم الآتى.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">It is written that no prophet shall perish outside Jerusalem.</td>
        <td class="arabic">فقد كتب أنه لا يهلك نبى خارجاً عن أورشليم.</td>
    </tr>
    <tr id="table_12_row_8" class="text">
        <td class="english">O Jerusalem, Jerusalem, the one who kills the prophets and stones those that are sent to her! How often I wanted to gather your children together but you were not willing.</td>
        <td class="arabic">يا أورشليم يا أورشليم يا قاتلة الأنبياء وراجمة المرسلين كم من مرة أردت أن أجمع بنيك فلم تريدوا!!</td>
    </tr>
    <tr id="table_12_row_9" class="text">
        <td class="english">Behold, your house will be desolate forever.</td>
        <td class="arabic">هوذا أترك لكم بيتكم خراباً إلى كل الأجيال.</td>
    </tr>
    <tr id="table_12_row_10" class="text">
        <td class="english">Assuredly I say to you, you shall not see Me until you all say in one voice,</td>
        <td class="arabic">أقول لكم أيها الذين تسمعوننى أنكم لا تروننى منذ هذا اليوم، حتى تقولوا كلكم من فم واحد:</td>
    </tr>
    <tr id="table_12_row_11" class="text">
        <td class="english">‘Blessed is He who comes in the name of the Lord.’”</td>
        <td class="arabic">مبارك الآتى باسم الرب الاله.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};