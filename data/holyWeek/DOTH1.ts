import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOTH1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const paschalPraiseHtml = paschalPraise2("5","8","9","FIRST","الأولى","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const copticGospelIntroHtml = copticGospelIntro("40");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("44");
    const expositionConclusionHtml = expositionConclusion("46");
    const daytimeLitaniesHtml = daytimeLitanies("47",true);
    const evnotiNaiNanHtml = evnotiNaiNan("48");
    const endOfServiceHymnHtml = endOfServiceHymn("49");



return `

${hourIntroHtml}



<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
        <caption class="caption" id="caption_table_2">Coptic Prophecies
        <span class="arabic-caption">النبوات قبطي</span></caption>

        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ̀ⲛⲧⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁϥ̀ⲓ ⲇⲉ ̀ⲛϫⲉ ⲡⲓ̀ⲁⲙⲁⲗⲡⲕ ⲟⲩⲟϩ ⲁϥⲃⲱⲧⲥ ̀ⲉⲡ̀Ⲓ̅ⲥ̅ⲗ ϧⲉⲛ Ⲣⲁⲫⲁⲍⲓⲛ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ̀ⲛⲧⲉ Ⲙⲱ̀ⲩⲥⲏⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ:</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic"></td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀Ⲏⲥⲁⲓⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲱϣ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲟⲩϫⲟⲙ ̀ⲛⲕⲧ̅ⲙϯⲥⲟ ϭⲓⲥⲓ ⲛⲧⲉⲕ̀ⲥⲙⲏ ̀ⲛⲑⲉ ̀ⲛⲟⲩⲥⲁⲗⲡⲓⲅⲝ ⲛⲕϫⲱ ̀ⲉⲡⲁⲗⲁⲟⲥ ̀ⲛⲛⲟⲩⲛⲟⲃⲓ ⲟⲩⲟϩ ̀ⲡⲏⲓ ̀ⲛⲓⲁⲕⲱⲃ ̀ⲛⲛⲟⲩⲁⲛⲟⲙⲓⲁ ϫⲉ ̀ⲁⲛⲟⲕ ⲥⲉϣⲓⲛⲓ ̀ⲛⲥⲱⲓ ̀ⲛⲟⲩϩⲟⲟⲩ ⲟⲩⲟϩ ⲥⲉ̀ⲉⲡⲓⲑⲩⲙⲉⲓ ̀ⲉⲥⲟⲩⲛ ⲛⲁϩ̀ⲓⲟⲩ̀ⲓ ̀ⲛⲑⲉ ̀ⲛⲟⲩⲗⲁⲟⲥ ⲉϥⲉ̀ⲓⲣⲓ ̀ⲛⲟⲩⲇⲓⲕⲁ̀ⲓⲟⲥⲩⲛⲏ.</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲛⲉ ⲛⲏⲉⲧⲁ ̀Ⲡ⳪ ϫⲱ ̀ⲙⲙⲱⲟⲩ ϫⲉ ⲧⲉⲯⲩⲭⲏ ⲉⲑⲛⲁⲉⲣⲛⲟⲃⲓ ̀ⲛⲧⲟⲥ ⲧⲉⲧⲛⲁⲙⲟⲩ ̀ⲙ̀ⲡϣⲏⲣⲓ ⲛⲁϭⲓ ⲁⲛ ̀ⲙ̀ⲡϭⲓ̀ⲛϫⲟⲛⲥ ̀ⲙⲡⲉϥⲓⲱⲧ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ: ̀ⲁⲙⲏⲛ.</td>
        </tr>

    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    
    <table id="table_3" title="1st Prophecy">
        <caption id="caption_table_3" class="caption">1st Prophecy<br>(Exodus 17:8-16)
    <span class="arabic-caption">النبوة الأولي<br>(سفر الخروج 17: 8-16)</span></caption>
        <tr id="table_3_row_1" class="intro">
            <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_3_row_4" class="text">
            <td class="english">Now Amalek came and fought with Israel in Rephidim.</td>
            <td class="arabic">وَاتَى عَمَالِيقُ وَحَارَبَ اسْرَائِيلَ فِي رَفِيدِيمَ.</td>
        </tr>
        <tr id="table_3_row_5" class="text">
            <td class="english">And Moses said to Joshua, "Choose us some men and go out, fight with Amalek. Tomorrow I will stand on the top of the hill with the rod of God in my hand."</td>
            <td class="arabic">فَقَالَ مُوسَى لِيَشُوعَ: «انْتَخِبْ لَنَا رِجَالا وَاخْرُجْ حَارِبْ عَمَالِيقَ. وَغَدا اقِفُ انَا عَلَى رَاسِ التَّلَّةِ وَعَصَا اللهِ فِي يَدِي».</td>
        </tr>
        <tr id="table_3_row_6" class="text">
            <td class="english">So Joshua did as Moses said to him, and fought with Amalek. And Moses, Aaron, and Hur went up to the top of the hill.</td>
            <td class="arabic">فَفَعَلَ يَشُوعُ كَمَا قَالَ لَهُ مُوسَى لِيُحَارِبَ عَمَالِيقَ. وَامَّا مُوسَى وَهَارُونُ وَحُورُ فَصَعِدُوا عَلَى رَاسِ التَّلَّةِ.</td>
        </tr>
        <tr id="table_3_row_7" class="text">
            <td class="english">And so it was, when Moses held up his hand, that Israel prevailed; and when he let down his hand, Amalek prevailed.</td>
            <td class="arabic">وَكَانَ اذَا رَفَعَ مُوسَى يَدَهُ انَّ اسْرَائِيلَ يَغْلِبُ وَاذَا خَفَضَ يَدَهُ انَّ عَمَالِيقَ يَغْلِبُ.</td>
        </tr>
        <tr id="table_3_row_8" class="text">
            <td class="english">But Moses' hands became heavy; so they took a stone and put it under him, and he sat on it. And Aaron and Hur supported his hands, one on one side, and the other on the other side; and his hands were steady until the going down of the sun.</td>
            <td class="arabic">فَلَمَّا صَارَتْ يَدَا مُوسَى ثَقِيلَتَيْنِ اخَذَا حَجَرا وَوَضَعَاهُ تَحْتَهُ فَجَلَسَ عَلَيْهِ. وَدَعَمَ هَارُونُ وَحُورُ يَدَيْهِ الْوَاحِدُ مِنْ هُنَا وَالاخَرُ مِنْ هُنَاكَ. فَكَانَتْ يَدَاهُ ثَابِتَتَيْنِ الَى غُرُوبِ الشَّمْسِ.</td>
        </tr>
        <tr id="table_3_row_9" class="text">
            <td class="english">So Joshua defeated Amalek and his people with the edge of the sword.</td>
            <td class="arabic">فَهَزَمَ يَشُوعُ عَمَالِيقَ وَقَوْمَهُ بِحَدِّ السَّيْفِ.</td>
        </tr>
        <tr id="table_3_row_10" class="text">
            <td class="english">Then the Lord said to Moses, "Write this for a memorial in the book and recount it in the hearing of Joshua, that I will utterly blot out the remembrance of Amalek from under heaven."</td>
            <td class="arabic">فَقَالَ الرَّبُّ لِمُوسَى: «اكْتُبْ هَذَا تِذْكَارا فِي الْكِتَابِ وَضَعْهُ فِي مَسَامِعِ يَشُوعَ. فَانِّي سَوْفَ امْحُو ذِكْرَ عَمَالِيقَ مِنْ تَحْتِ السَّمَاءِ».</td>
        </tr>
        <tr id="table_3_row_11" class="text">
            <td class="english">And Moses built an altar and called its name, The-Lord-Is-My-Banner;</td>
            <td class="arabic">فَبَنَى مُوسَى مَذْبَحا وَدَعَا اسْمَهُ «يَهْوَهْ نِسِّي».</td>
        </tr>
        <tr id="table_3_row_12" class="text">
            <td class="english">for he said, "Because the Lord has sworn: the Lord will have war with Amalek from generation to generation."</td>
            <td class="arabic">وَقَالَ: «انَّ الْيَدَ عَلَى كُرْسِيِّ الرَّبِّ. لِلرَّبِّ حَرْبٌ مَعَ عَمَالِيقَ مِنْ دَوْرٍ الَى دَوْرٍ».</td>
        </tr>
        <tr id="table_3_row_14" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_4" title="2nd Prophecy">
        <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Exodus 15:22-16:3)
    <span class="arabic-caption">النبوة الثانية<br>(سفر الخروج 15: 22 - 16: 3)</span></caption>
        <tr id="table_4_row_1" class="intro">
            <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_4_row_4" class="text">
            <td class="english">So Moses brought Israel from the Red Sea; then they went out into the Wilderness of Shur. And they went three days in the wilderness and found no water.</td>
            <td class="arabic">ثُمَّ ارْتَحَلَ مُوسَى بِاسْرَائِيلَ مِنْ بَحْرِ سُوفَ وَخَرَجُوا الَى بَرِّيَّةِ شُورٍ. فَسَارُوا ثَلاثَةَ ايَّامٍ فِي الْبَرِّيَّةِ وَلَمْ يَجِدُوا مَاءً</td>
        </tr>
        <tr id="table_4_row_5" class="text">
            <td class="english">Now when they came to Marah, they could not drink the waters of Marah, for they were bitter. Therefore the name of it was called Marah.</td>
            <td class="arabic">فَجَاءُوا الَى مَارَّةَ. وَلَمْ يَقْدِرُوا انْ يَشْرَبُوا مَاءً مِنْ مَارَّةَ لانَّهُ مُرٌّ. لِذَلِكَ دُعِيَ اسْمُهَا «مَارَّةَ».</td>
        </tr>
        <tr id="table_4_row_6" class="text">
            <td class="english">And the people complained against Moses, saying, "What shall we drink?"</td>
            <td class="arabic">فَتَذَمَّرَ الشَّعْبُ عَلَى مُوسَى قَائِلِينَ: «مَاذَا نَشْرَبُ؟»</td>
        </tr>
        <tr id="table_4_row_7" class="text">
            <td class="english">So he cried out to the Lord, and the Lord showed him a tree. When he cast it into the waters, the waters were made sweet. There He made a statute and an ordinance for them. And there He tested them,</td>
            <td class="arabic">فَصَرَخَ الَى الرَّبِّ. فَارَاهُ الرَّبُّ شَجَرَةً فَطَرَحَهَا فِي الْمَاءِ فَصَارَ الْمَاءُ عَذْبا. هُنَاكَ وَضَعَ لَهُ فَرِيضَةً وَحُكْما وَهُنَاكَ امْتَحَنَهُ.</td>
        </tr>
        <tr id="table_4_row_8" class="text">
            <td class="english">and said, "If you diligently heed the voice of the Lord your God and do what is right in His sight, give ear to His commandments and keep all His statutes, I will put none of the diseases on you which I have brought on the Egyptians. For I am the Lord who heals you."</td>
            <td class="arabic">فَقَالَ: «انْ كُنْتَ تَسْمَعُ لِصَوْتِ الرَّبِّ الَهِكَ وَتَصْنَعُ الْحَقَّ فِي عَيْنَيْهِ وَتَصْغَى الَى وَصَايَاهُ وَتَحْفَظُ جَمِيعَ فَرَائِضِهِ فَمَرَضا مَا مِمَّا وَضَعْتُهُ عَلَى الْمِصْرِيِّينَ لا اضَعُ عَلَيْكَ. فَانِّي انَا الرَّبُّ شَافِيكَ».</td>
        </tr>
        <tr id="table_4_row_9" class="text">
            <td class="english">Then they came to Elim, where there were twelve wells of water and seventy palm trees; so they camped there by the waters.</td>
            <td class="arabic">ثُمَّ جَاءُوا الَى ايلِيمَ وَهُنَاكَ اثْنَتَا عَشْرَةَ عَيْنَ مَاءٍ وَسَبْعُونَ نَخْلَةً. فَنَزَلُوا هُنَاكَ عِنْدَ الْمَاءِ.</td>
        </tr>
        <tr id="table_4_row_10" class="text">
            <td class="english">And they journeyed from Elim, and all the congregation of the children of Israel came to the Wilderness of Sin, which is between Elim and Sinai, on the fifteenth day of the second month after they departed from the land of Egypt.</td>
            <td class="arabic">ثُمَّ ارْتَحَلُوا مِنْ ايلِيمَ. وَاتَى كُلُّ جَمَاعَةِ بَنِي اسْرَائِيلَ الَى بَرِّيَّةِ سِينٍ (الَّتِي بَيْنَ ايلِيمَ وَسِينَاءَ) فِي الْيَوْمِ الْخَامِسَ عَشَرَ مِنَ الشَّهْرِ الثَّانِي بَعْدَ خُرُوجِهِمْ مِنْ ارْضِ مِصْرَ.</td>
        </tr>
        <tr id="table_4_row_11" class="text">
            <td class="english">Then the whole congregation of the children of Israel complained against Moses and Aaron in the wilderness.</td>
            <td class="arabic">فَتَذَمَّرَ كُلُّ جَمَاعَةِ بَنِي اسْرَائِيلَ عَلَى مُوسَى وَهَارُونَ فِي الْبَرِّيَّةِ.</td>
        </tr>
        <tr id="table_4_row_12" class="text">
            <td class="english">And the children of Israel said to them, "Oh, that we had died by the hand of the Lord in the land of Egypt, when we sat by the pots of meat and when we ate bread to the full! For you have brought us out into this wilderness to kill this whole assembly with hunger."</td>
            <td class="arabic">وَقَالَ لَهُمَا بَنُو اسْرَائِيلَ: «لَيْتَنَا مُتْنَا بِيَدِ الرَّبِّ فِي ارْضِ مِصْرَ اذْ كُنَّا جَالِسِينَ عِنْدَ قُدُورِ اللَّحْمِ نَاكُلُ خُبْزا لِلشَّبَعِ! فَانَّكُمَا اخْرَجْتُمَانَا الَى هَذَا الْقَفْرِ لِتُمِيتَا كُلَّ هَذَا الْجُمْهُورِ بِالْجُوعِ».</td>
        </tr>
        <tr id="table_4_row_14" class="intro">
            <td class="english">Glory be to the Holy Trinity our God unto the age of all ages, Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_5" title="3rd Prophecy">
        <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Isaiah 58:1-11)
    <span class="arabic-caption">النبوة الثالثة<br>(اشعياء 58: 1 - 11)</span></caption>
        <tr id="table_5_row_1" class="intro">
            <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_5_row_4" class="text">
            <td class="english">"Cry aloud, spare not; Lift up your voice like a trumpet; Tell My people their transgression, And the house of Jacob their sins.</td>
            <td class="arabic">نَادِ بِصَوْتٍ عَالٍ. لاَ تُمْسِكْ. ارْفَعْ صَوْتَكَ كَبُوقٍ وَأَخْبِرْ شَعْبِي بِتَعَدِّيهِمْ وَبَيْتَ يَعْقُوبَ بِخَطَايَاهُمْ.</td>
        </tr>
        <tr id="table_5_row_5" class="text">
            <td class="english">Yet they seek Me daily, And delight to know My ways, As a nation that did righteousness, And did not forsake the ordinance of their God. They ask of Me the ordinances of justice; They take delight in approaching God.</td>
            <td class="arabic">وَإِيَّايَ يَطْلُبُونَ يَوْماً فَيَوْماً وَيُسَرُّونَ بِمَعْرِفَةِ طُرُقِي كَأُمَّةٍ عَمِلَتْ بِرّاً وَلَمْ تَتْرُكْ قَضَاءَ إِلَهِهَا. يَسْأَلُونَنِي عَنْ أَحْكَامِ الْبِرِّ. يُسَرُّونَ بِالتَّقَرُّبِ إِلَى اللَّهِ.</td>
        </tr>
        <tr id="table_5_row_6" class="text">
            <td class="english">'Why have we fasted,' they say, 'and You have not seen? Why have we afflicted our souls, and You take no notice?' "In fact, in the day of your fast you find pleasure, And exploit all your laborers.</td>
            <td class="arabic">يَقُولُونَ: «لِمَاذَا صُمْنَا وَلَمْ تَنْظُرْ ذَلَّلْنَا أَنْفُسَنَا وَلَمْ تُلاَحِظْ؟» هَا إِنَّكُمْ فِي يَوْمِ صَوْمِكُمْ تُوجِدُونَ مَسَرَّةً وَبِكُلِّ أَشْغَالِكُمْ تُسَخِّرُونَ.</td>
        </tr>
        <tr id="table_5_row_7" class="text">
            <td class="english">Indeed you fast for strife and debate, And to strike with the fist of wickedness. You will not fast as you do this day, To make your voice heard on high.</td>
            <td class="arabic">هَا إِنَّكُمْ لِلْخُصُومَةِ وَالنِّزَاعِ تَصُومُونَ وَلِتَضْرِبُوا بِلَكْمَةِ الشَّرِّ. لَسْتُمْ تَصُومُونَ كَمَا الْيَوْمَ لِتَسْمِيعِ صَوْتِكُمْ فِي الْعَلاَءِ.</td>
        </tr>
        <tr id="table_5_row_8" class="text">
            <td class="english">Is it a fast that I have chosen, A day for a man to afflict his soul? Is it to bow down his head like a bulrush, And to spread out sackcloth and ashes? Would you call this a fast, And an acceptable day to the Lord?</td>
            <td class="arabic">أَمِثْلُ هَذَا يَكُونُ صَوْمٌ أَخْتَارُهُ؟ يَوْماً يُذَلِّلُ الإِنْسَانُ فِيهِ نَفْسَهُ يُحْنِي كَالأَسَلَةِ رَأْسَهُ وَيَفْرِشُ تَحْتَهُ مِسْحاً وَرَمَاداً. هَلْ تُسَمِّي هَذَا صَوْماً وَيَوْماً مَقْبُولاً لِلرَّبِّ؟</td>
        </tr>
        <tr id="table_5_row_9" class="text">
            <td class="english">"Is this not the fast that I have chosen: To loose the bonds of wickedness, To undo the heavy burdens, To let the oppressed go free, And that you break every yoke?</td>
            <td class="arabic">أَلَيْسَ هَذَا صَوْماً أَخْتَارُهُ: حَلَّ قُيُودِ الشَّرِّ. فَكَّ عُقَدِ النِّيرِ وَإِطْلاَقَ الْمَسْحُوقِينَ أَحْرَاراً وَقَطْعَ كُلِّ نِيرٍ.</td>
        </tr>
        <tr id="table_5_row_10" class="text">
            <td class="english">Is it not to share your bread with the hungry, And that you bring to your house the poor who are cast out; When you see the naked, that you cover him, And not hide yourself from your own flesh?</td>
            <td class="arabic">أَلَيْسَ أَنْ تَكْسِرَ لِلْجَائِعِ خُبْزَكَ وَأَنْ تُدْخِلَ الْمَسَاكِينَ التَّائِهِينَ إِلَى بَيْتِكَ؟ إِذَا رَأَيْتَ عُرْيَاناً أَنْ تَكْسُوهُ وَأَنْ لاَ تَتَغَاضَى عَنْ لَحْمِكَ.</td>
        </tr>
        <tr id="table_5_row_11" class="text">
            <td class="english">Then your light shall break forth like the morning, Your healing shall spring forth speedily, And your righteousness shall go before you; The glory of the Lord shall be your rear guard.</td>
            <td class="arabic">حِينَئِذٍ يَنْفَجِرُ مِثْلَ الصُّبْحِ نُورُكَ وَتَنْبُتُ صِحَّتُكَ سَرِيعاً وَيَسِيرُ بِرُّكَ أَمَامَكَ وَمَجْدُ الرَّبِّ يَجْمَعُ سَاقَتَكَ.</td>
        </tr>
        <tr id="table_5_row_12" class="text">
            <td class="english">Then you shall call, and the Lord will answer; You shall cry, and He will say, 'Here I am.' "If you take away the yoke from your midst, The pointing of the finger, and speaking wickedness,</td>
            <td class="arabic">حِينَئِذٍ تَدْعُو فَيُجِيبُ الرَّبُّ. تَسْتَغِيثُ فَيَقُولُ: «هَئَنَذَا». إِنْ نَزَعْتَ مِنْ وَسَطِكَ النِّيرَ وَالإِيمَاءَ بِالإِصْبِعِ وَكَلاَمَ الإِثْمِ</td>
        </tr>
        <tr id="table_5_row_13" class="text">
            <td class="english">If you extend your soul to the hungry And satisfy the afflicted soul, Then your light shall dawn in the darkness, And your darkness shall be as the noonday.</td>
            <td class="arabic">وَأَنْفَقْتَ نَفْسَكَ لِلْجَائِعِ وَأَشْبَعْتَ النَّفْسَ الذَّلِيلَةَ يُشْرِقُ فِي الظُّلْمَةِ نُورُكَ وَيَكُونُ ظَلاَمُكَ الدَّامِسُ مِثْلَ الظُّهْرِ</td>
        </tr>
        <tr id="table_5_row_14" class="text">
            <td class="english">The Lord will guide you continually, And satisfy your soul in drought, And strengthen your bones; You shall be like a watered garden, And like a spring of water, whose waters do not fail.</td>
            <td class="arabic">وَيَقُودُكَ الرَّبُّ عَلَى الدَّوَامِ وَيُشْبِعُ فِي الْجَدُوبِ نَفْسَكَ وَيُنَشِّطُ عِظَامَكَ فَتَصِيرُ كَجَنَّةٍ رَيَّا وَكَنَبْعِ مِيَاهٍ لاَ تَنْقَطِعُ مِيَاهُهُ.</td>
        </tr>
        <tr id="table_5_row_16" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_6" title="4th Prophecy">
        <caption id="caption_table_6" class="caption">4th Prophecy<br>(Ezekiel 18:20-32)
    <span class="arabic-caption">النبوة الرابعة<br>(حزقيال 18: 20 - 32)</span></caption>
        <tr id="table_6_row_1" class="intro">
            <td class="english">A reading from Ezekiel the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من حزقيال النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_6_row_4" class="text">
            <td class="english">The soul who sins shall die. The son shall not bear the guilt of the father, nor the father bear the guilt of the son. The righteousness of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself.</td>
            <td class="arabic">اَلنَّفْسُ الَّتِي تُخْطِئُ هِيَ تَمُوتُ. الاِبْنُ لاَ يَحْمِلُ مِنْ إِثْمِ الأَبِ وَالأَبُ لاَ يَحْمِلُ مِنْ إِثْمِ الاِبْنِ. بِرُّ الْبَارِّ عَلَيْهِ يَكُونُ وَشَرُّ الشِّرِّيرِ عَلَيْهِ يَكُونُ.</td>
        </tr>
        <tr id="table_6_row_5" class="text">
            <td class="english">"But if a wicked man turns from all his sins which he has committed, keeps all My statutes, and does what is lawful and right, he shall surely live; he shall not die.</td>
            <td class="arabic">فَإِذَا رَجَعَ الشِّرِّيرُ عَنْ جَمِيعِ خَطَايَاهُ الَّتِي فَعَلَهَا وَحَفِظَ كُلَّ فَرَائِضِي وَفَعَلَ حَقّاً وَعَدْلاً فَحَيَاةً يَحْيَا. لاَ يَمُوتُ.</td>
        </tr>
        <tr id="table_6_row_6" class="text">
            <td class="english">None of the transgressions which he has committed shall be remembered against him; because of the righteousness which he has done, he shall live.</td>
            <td class="arabic">كُلُّ مَعَاصِيهِ الَّتِي فَعَلَهَا لاَ تُذْكَرُ عَلَيْهِ. فِي بِرِّهِ الَّذِي عَمِلَ يَحْيَا.</td>
        </tr>
        <tr id="table_6_row_7" class="text">
            <td class="english">Do I have any pleasure at all that the wicked should die?" says the Lord God, "and not that he should turn from his ways and live?</td>
            <td class="arabic">هَلْ مَسَرَّةً أُسَرُّ بِمَوْتِ الشِّرِّيرِ يَقُولُ السَّيِّدُ الرَّبُّ؟ أَلاَ بِرُجُوعِهِ عَنْ طُرُقِهِ فَيَحْيَا؟</td>
        </tr>
        <tr id="table_6_row_8" class="text">
            <td class="english">"But when a righteous man turns away from his righteousness and commits iniquity, and does according to all the abominations that the wicked man does, shall he live? All the righteousness which he has done shall not be remembered; because of the unfaithfulness of which he is guilty and the sin which he has committed, because of them he shall die.</td>
            <td class="arabic">وَإِذَا رَجَعَ الْبَارُّ عَنْ بِرِّهِ وَعَمِلَ إِثْماً وَفَعَلَ مِثْلَ كُلِّ الرَّجَاسَاتِ الَّتِي يَفْعَلُهَا الشِّرِّيرُ, أَفَيَحْيَا؟ كُلُّ بِرِّهِ الَّذِي عَمِلَهُ لاَ يُذْكَرُ. فِي خِيَانَتِهِ الَّتِي خَانَهَا وَفِي خَطِيَّتِهِ الَّتِي أَخْطَأَ بِهَا يَمُوتُ.</td>
        </tr>
        <tr id="table_6_row_9" class="text">
            <td class="english">"Yet you say, 'The way of the Lord is not fair.' Hear now, O house of Israel, is it not My way which is fair, and your ways which are not fair?</td>
            <td class="arabic">[وَأَنْتُمْ تَقُولُونَ: لَيْسَتْ طَرِيقُ الرَّبِّ مُسْتَوِيَةً. فَاسْمَعُوا الآنَ يَا بَيْتَ إِسْرَائِيلَ. أَطَرِيقِي هِيَ غَيْرُ مُسْتَوِيَةٍ؟ أَلَيْسَتْ طُرُقُكُمْ غَيْرَ مُسْتَوِيَةٍ؟</td>
        </tr>
        <tr id="table_6_row_10" class="text">
            <td class="english">When a righteous man turns away from his righteousness, commits iniquity, and dies in it, it is because of the iniquity which he has done that he dies.</td>
            <td class="arabic">إِذَا رَجَعَ الْبَارُّ عَنْ بِرِّهِ وَعَمِلَ إِثْماً وَمَاتَ فِيهِ, فَبِإِثْمِهِ الَّذِي عَمِلَهُ يَمُوتُ.</td>
        </tr>
        <tr id="table_6_row_11" class="text">
            <td class="english">Again, when a wicked man turns away from the wickedness which he committed, and does what is lawful and right, he preserves himself alive.</td>
            <td class="arabic">وَإِذَا رَجَعَ الشِّرِّيرُ عَنْ شَرِّهِ الَّذِي فَعَلَ, وَعَمِلَ حَقّاً وَعَدْلاً, فَهُوَ يُحْيِي نَفْسَهُ.</td>
        </tr>
        <tr id="table_6_row_12" class="text">
            <td class="english">Because he considers and turns away from all the transgressions which he committed, he shall surely live; he shall not die.</td>
            <td class="arabic">رَأَى فَرَجَعَ عَنْ كُلِّ مَعَاصِيهِ الَّتِي عَمِلَهَا فَحَيَاةً يَحْيَا. لاَ يَمُوتُ.</td>
        </tr>
        <tr id="table_6_row_13" class="text">
            <td class="english">Yet the house of Israel says, 'The way of the Lord is not fair.' O house of Israel, is it not My ways which are fair, and your ways which are not fair?</td>
            <td class="arabic">وَبَيْتُ إِسْرَائِيلَ يَقُولُ: لَيْسَتْ طَرِيقُ الرَّبِّ مُسْتَوِيَةً. أَطُرُقِي غَيْرُ مُسْتَقِيمَةٍ يَا بَيْتَ إِسْرَائِيلَ؟ أَلَيْسَتْ طُرُقُكُمْ غَيْرَ مُسْتَقِيمَةٍ؟</td>
        </tr>
        <tr id="table_6_row_14" class="text">
            <td class="english">"Therefore I will judge you, O house of Israel, every one according to his ways," says the Lord God. "Repent, and turn from all your transgressions, so that iniquity will not be your ruin.</td>
            <td class="arabic">مِنْ أَجْلِ ذَلِكَ أَقْضِي عَلَيْكُمْ يَا بَيْتَ إِسْرَائِيلَ كُلِّ وَاحِدٍ كَطُرُقِهِ يَقُولُ السَّيِّدُ الرَّبُّ. تُوبُوا وَارْجِعُوا عَنْ كُلِّ مَعَاصِيكُمْ, وَلاَ يَكُونُ لَكُمُ الإِثْمُ مَهْلَكَةً.</td>
        </tr>
        <tr id="table_6_row_15" class="text">
            <td class="english">Cast away from you all the transgressions which you have committed, and get yourselves a new heart and a new spirit. For why should you die, O house of Israel?</td>
            <td class="arabic">اِطْرَحُوا عَنْكُمْ كُلَّ مَعَاصِيكُمُ الَّتِي عَصِيْتُمْ بِهَا, وَاعْمَلُوا لأَنْفُسِكُمْ قَلْباً جَدِيداً وَرُوحاً جَدِيدَةً. فَلِمَاذَا تَمُوتُونَ يَا بَيْتَ إِسْرَائِيلَ؟</td>
        </tr>
        <tr id="table_6_row_16" class="text">
            <td class="english">For I have no pleasure in the death of one who dies," says the Lord God. "Therefore turn and live!</td>
            <td class="arabic">لأَنِّي لاَ أُسَرُّ بِمَوْتِ مَنْ يَمُوتُ يَقُولُ السَّيِّدُ الرَّبُّ. فَارْجِعُوا وَاحْيُوا].</td>
        </tr>
        <tr id="table_6_row_18" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

</div>


<div class="section" id="section_4" title="Homily">
    <table id="table_7" title="Homily">
        <caption id="caption_table_7" class="caption">Homily<br>(St John Chrysostom)
    <span class="arabic-caption">العظة<br>(القديس يوحنا فم الذهب)</span></caption>
        <tr id="table_7_row_1" class="intro">
            <td class="english">A homily of our holy father Abba John Chrysostom. May his blessings be with us. Amen.</td>
            <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ̀ⲛⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ Ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓ̀ⲭⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ : ̀ⲉⲣⲉ ⲡⲉϥ̀ⲥⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">عظة لابينا القديس أنبا يوحنا فم الذهب بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_7_row_4" class="text">
            <td class="english">This is the day to approach the awesome Table.</td>
            <td class="arabic">هذا هو يوم التقدم إلى المائدة الرهيبة،</td>
        </tr>
        <tr id="table_7_row_5" class="text">
            <td class="english">Let us proceed in purity and let each one of us examine himself before partaking of the Body and Blood of Christ,</td>
            <td class="arabic">فلنتقدم كلنا اليها بطهارة. وليفحص كل واحد منا ذاته قبل أن يتقدم إلى جسد ودم المسيح،</td>
        </tr>
        <tr id="table_7_row_6" class="text">
            <td class="english">that he may not be judged. For it is not a human being who gives the Body and Blood,</td>
            <td class="arabic">لكى لا يكون له دينونة لانه ليس إنسان الذى يناول الخبز والدم.</td>
        </tr>
        <tr id="table_7_row_7" class="text">
            <td class="english">but Christ who was crucified for us and is with us on this table in a mystery. He, to Whom belongs the power</td>
            <td class="arabic">ولكن هو المسيح الذى صلب عنا وهو القائم على هذه المائدة بسر هذا الذى له القوة</td>
        </tr>
        <tr id="table_7_row_8" class="text">
            <td class="english">and grace, says “This is My Body.”</td>
            <td class="arabic">والنعمة يقول هذا هو جسدى.</td>
        </tr>
        <tr id="table_7_row_9" class="text">
            <td class="english">Just as the word that proceeded from His mouth once since the beginning saying,</td>
            <td class="arabic">وكما أن الكلمة التى نطق بها مرة واحدة منذ البدء قائلاً</td>
        </tr>
        <tr id="table_7_row_10" class="text">
            <td class="english">“be fruitful, and multiply in the earth” is always working in our nature to multiply;</td>
            <td class="arabic">أكثروا وانموا واملأوا الأرض هى دائمة فى كل حين تفعل فى طبيعتنا زيادة التناسل</td>
        </tr>
        <tr id="table_7_row_11" class="text">
            <td class="english">similarly, the word spoken by Christ regarding this table is still working in the churches to this day, fulfilling the purpose of the sacrifice until His coming.</td>
            <td class="arabic">كذلك الكلمة التى قالها المسيح على تلك المائدة باقية فى الكنائس إلى هذا اليوم وإلى مجيئه مكملة كل عمل الذبيحة.</td>
        </tr>
        <tr id="table_7_row_13" class="intro">
            <td class="english">We conclude the homily of our holy father Abba John Chrysostom, who enlightened our minds and our hearts. In the name of the Father, the Son, and the Holy Spirit, one God. Amen.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ̀ⲥ̀ⲫⲣⲁϫⲓⲍⲓⲛ ̀ⲛϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ̀ⲛⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓ̀ⲭⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ : ⲫⲏ̀ⲉⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ̀ⲙⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ̀ⲛⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ̀ⲫⲣⲁⲛ ̀ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ ̀Ⲡϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">فلنختم موعظة أبينا القديس الأنبا يوحنا فم الذهب الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
        </tr>
    </table>
</div>




${paschalPraiseHtml}


<div class="section" id="section_6" title="Thanksgiving Prayer - Litanies">
    <table id="table_10" title="Thanksgiving Prayer">
        <caption id="caption_table_10" class="caption">Thanksgiving Prayer
        <span class="arabic-caption">صلاة الشكر</span></caption>
        <tr id="table_10_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>Have mercy on us, O God, the Father, the Pantocrator. O Holy Trinity, have mercy on us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲉⲗⲉⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ ̀ⲟⲐⲉⲟⲥ ̀ⲟⲠⲁⲧⲏⲣ ̀ⲟ ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ”’: ⲡⲁⲛ̀ⲁⲅⲓ̀ⲁ ̀ⲧⲣⲓⲁⲥ ̀ⲉⲗⲉⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>ارحمنا يا الله الآب ضابط الكل ايها الثالوث القدوس ارحمنا</td>
        </tr>
        <tr id="table_10_row_2" class="text">
            <td class="english">O Lord God of hosts be with us, for we have no helper in our tribulations and afflictions but You.</td>
            <td class="coptic">Ⲡ⳪ Ⲫϯ ̀ⲛⲧⲉ ⲛⲓ ϫⲟⲙ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ϫⲉ ̀ⲙⲙⲟⲛ ̀ⲛⲧⲁⲛ ̀ⲛⲟⲩⲃⲟ̀ⲏⲑⲟⲥ ‘ϧⲉⲛ ⲛⲉⲛ̀ⲑⲗⲓⲯⲓⲥ ⲛⲉⲙ ⲛⲉⲛϩⲟϫϩⲉϫ ̀ⲉⲃⲏⲗ ̀ⲉⲣⲟⲕ.</td>
            <td class="arabic">ايها الرب اله القوات كن معنا لانه ليس لنا معين فى شدائدنا وضيقاتنا سواك.</td>
        </tr>
        <tr id="table_10_row_3" class="text">
            <td class="english">Make us worthy to pray thankfully: Our Father who art in heaven...</td>
            <td class="coptic">Ⲁⲣⲓⲧⲉⲛ ̀ⲛⲉⲙ̀ⲡϣⲁ ̀ⲛϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡ̀ϩⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲧ ⲉⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ...</td>
            <td class="arabic">اللهُمَّ اجعلْنا مُستحقينَ أن نقولَ بشكرٍ: أبانا الذي في السمواتِ...</td>
        </tr>

        <tr id="table_10_row_5" class="text">
            <td class="english"><span class="role">Congregation:<br></span>In Christ Jesus our Lord.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ϧⲉⲛ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>بالمسيح يسوع ربنا.</td>
        </tr>

        <tr id="table_10_row_7" class="text">
            <td class="english"><span class="role">Priest:<br></span>Let us pray.</td>
            <td class="coptic"><span class="role">Priest:<br></span>Ϣⲗⲏⲗ.</td>
            <td class="arabic"><span class="role">Priest:<br></span>صلوا.</td>
        </tr>

        <tr id="table_10_row_9" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Stand up for prayer.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲉⲡⲓ ̀ⲡⲣⲟⲥⲉⲩⲭⲏ ̀ⲥⲧⲁⲑⲏⲧⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>للصلاة قفوا</td>
        </tr>

        <tr id="table_10_row_11" class="text">
            <td class="english"><span class="role">Priest:<br></span>Peace be with all.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>السلام للكل.</td>
        </tr>

        <tr id="table_10_row_13" class="text">
            <td class="english"><span class="role">Congregation:<br></span>And with your spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲉ ⲧⲱ ̀ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>ولروحك أيضاً.</td>
        </tr>

        <tr id="table_10_row_15" class="text">
            <td class="english"><span class="role">Priest:<br></span>Let us give thanks to the beneficent and merciful God, the Father of our Lord, God, and Savior Jesus Christ.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲙⲁⲣⲉⲛϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧϥ ̀ⲙⲡⲓⲣⲉϥⲉⲣⲡⲉⲑⲛⲁⲛⲉϥ ⲟⲩⲟϩ ̀ⲛⲛⲁⲏⲧ: Ⲫϯ Ⲫⲓⲱⲧ ̀ⲙⲠⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲡⲉⲛⲥⲱⲧⲏⲣ  Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>فلنشكر صانع الخيرات الرحوم الله أبا ربنا وإلهنا ومخلصنا يسوع المسيح.</td>
        </tr>
        <tr id="table_10_row_16" class="text">
            <td class="english">For He has covered us, helped us, guarded us, accepted us unto Him, spared us, supported us, and brought us to this hour.</td>
            <td class="coptic">Ϫⲉ ⲁϥⲉⲣ̀ⲥⲕⲉⲡⲁⲍⲓⲛ ̀ⲉϫⲱⲛ : ⲁϥⲉⲣⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲛ : ⲁϥ̀ⲁⲣⲉϩ ̀ⲉⲣⲟⲛ : ⲁϥϣⲟⲡⲧⲉⲛ ̀ⲉⲣⲟϥ  ⲁϥϯ̀ⲁⲥⲟ ̀ⲉⲣⲟⲛ : ⲁϥϯⲧⲟⲧⲉⲛ ⲁϥⲉⲛⲧⲉⲛ ϣⲁ ̀ⲉ̀ϩⲣⲏⲓ  ̀ⲉⲧⲁⲓⲟⲩⲛⲟⲩ ⲑⲁⲓ.</td>
            <td class="arabic"> لأنه سترنا وأعاننا وحفظنا وقبلنا إليه وشفق علينا وعضدنا وأتي بنا إلي هذه الساعة.</td>
        </tr>
        <tr id="table_10_row_17" class="text">
            <td class="english">Let us also ask Him, the Lord our God, the Pantocrator, to guard us in all peace this holy day and all the days of our life.</td>
            <td class="coptic">Ⲛⲑⲟϥ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ̀ⲉⲣⲟϥ ϩⲟⲡⲱⲥ ̀ⲛⲧⲉϥ̀ⲁⲣⲉϩ ̀ⲉⲣⲟⲛ : ϧⲉⲛ ⲡⲁⲓ̀ⲉϩⲟⲟⲩ ⲉⲑⲟⲩⲁⲃ  ⲫⲁⲓ ⲛⲉⲙ ⲛⲓ̀ⲉϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲱⲛϧ:  ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ:  ̀ⲛϫⲉ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.</td>
            <td class="arabic">هو أيضا فلنسأله أن يحفظنا في هذا اليوم المقدس وكل أيام حياتنا بكل سلام، ضابط الكل الرب الهنا.</td>
        </tr>

        <tr id="table_10_row_19" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Let us pray.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>صلوا.</td>
        </tr>

        <tr id="table_10_row_21" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

        <tr id="table_10_row_23" class="text">
            <td class="english"><span class="role">Priest:<br></span>O Master, Lord, God the Pantocrator, the Father of our Lord, God, and Savior Jesus Christ,</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲫⲛⲏⲃ  Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : Ⲫⲓⲱⲧ ̀ⲙⲠⲉⲛⲟⲥ̅ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲡⲉⲛⲥⲱⲧⲏⲣ  Ⲓˉⲏⲥⲟⲩⲥ  Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>أيها السيد الرب الاله ضابط الكل أبو ربنا وإلهنا ومخلصنا يسوع المسيح،</td>
        </tr>
        <tr id="table_10_row_24" class="text">
            <td class="english">we thank You for everything, concerning everything, and in everything.</td>
            <td class="coptic">Ⲧⲉⲛϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲟⲧⲕ ⲕⲁⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲉⲑⲃⲉ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">نشكرك علي كل حال ومن أجل كل حال وفي كل حال.</td>
        </tr>
        <tr id="table_10_row_25" class="text">
            <td class="english">For You have covered us, helped us, guarded us, accepted us unto You, spared us, supported us, and brought us to this hour.</td>
            <td class="coptic">Ϫⲉ ⲁⲕⲉⲣ̀ⲥⲕⲉⲡⲁⲍⲓⲛ ̀ⲉϫⲱⲛ:  ⲁⲕⲉⲣⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲛ:  ⲁⲕ̀ⲁⲣⲉϩ ̀ⲉⲣⲟⲛ: ⲁⲕϣⲟⲡⲧⲉⲛ ̀ⲉⲣⲟⲕ   ⲁⲕϯ̀ⲁⲥⲟ ̀ⲉⲣⲟⲛ: ⲁⲕϯⲧⲟⲧⲉⲛ:  ⲁⲕⲉⲛⲧⲉⲛ ϣⲁ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉⲧⲁⲓ ⲟⲩⲛⲟⲩ ⲑⲁⲓ.</td>
            <td class="arabic">لانك سترتنا وأعنتنا وحفظتنا وقبلتنا إليك وشفقت علينا وعضدتنا، وأتيت بنا إلي هذه الساعة. </td>
        </tr>

        <tr id="table_10_row_27" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray that God may have mercy and compassion on us, hear us, help us, and accept the supplications and prayers of His saints for that which is good on our behalf at all times; And forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲧⲱⲃϩ ϩⲓⲛⲁ ̀ⲛⲧⲉ Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ : ̀ⲛⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ : ̀ⲛⲧⲉϥⲥⲱⲧⲉⲙ ̀ⲉⲣⲟⲛ : ̀ⲛⲧⲉϥⲉⲣⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲛ ̀ⲛⲧⲉϥϭⲓ ̀ⲛⲛⲓϯϩⲟ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ̀ⲛⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ̀ⲛⲧⲁϥ ̀ⲛⲧⲟⲧⲟⲩ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ ̀ⲉⲡⲓ̀ⲁⲅⲁⲑⲟⲛ  ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>أطلبوا لكي يرحمنا الله ويتراءف علينا ويسمعنا ويعيننا ويقبل سؤالات وطلبات قديسيه منهم بالصلاح عنا في كل حين ويغفر لنا خطايانا. </td>
        </tr>

        <tr id="table_10_row_29" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

        <tr id="table_10_row_31" class="text">
            <td class="english"><span class="role">Priest:<br></span>Therefore, we ask and entreat Your goodness, O Lover of mankind, grant us to complete this holy day, and all the days of our life in all peace with Your fear.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>̀Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛⲧⲉⲕⲙⲉⲧ̀ⲁⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲙⲏⲓⲥ ⲛⲁⲛ ⲉⲑⲣⲉⲛϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲙⲡⲁⲓ ⲕⲉ ̀ⲉϩⲟⲟⲩ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ : ⲛⲉⲙ ⲛⲓ̀ⲉϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲱⲛϧ: ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲧⲉⲕϩⲟϯ.</td>
            <td class="arabic"><span class="الكاهن">Priest<br>من اجل هذا نسأل ونطلب. من صلاحك يا محب البشر امنحنا أن نكمل هذا اليوم المقدس وكل أيام حياتنا بكل سلام مع مخافتك.</td>
        </tr>
        <tr id="table_10_row_32" class="text">
            <td class="english">All envy, all temptation, all the work of Satan, the counsel of wicked men and the rising up of enemies, hidden and manifest,</td>
            <td class="coptic"> ̀Ⲫⲑⲟⲛⲟⲥ ⲛⲓⲃⲉⲛ: ⲡⲓⲣⲁⲥⲙⲟⲥ ⲛⲓⲃⲉⲛ: ̀ⲉⲛⲉⲣⲅⲓ̀ⲁ ⲛⲓⲃⲉⲛ ̀ⲛⲧⲉ ̀ⲡⲥⲁⲧⲁⲛⲁⲥ ⲡⲥⲟϭⲛⲓ ̀ⲛⲧⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲩϩⲱⲟⲩ: ⲛⲉⲙ ̀ⲡⲧⲱⲛϥ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲛⲧⲉ ϩⲁⲛϫⲁϫⲓ ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic"> كل حسد وكل تجربة وكل فعل الشيطان ومؤامرة الناس الاشرار وقيام الاعداء الخفيين والظاهرين</td>
        </tr>
        <tr id="table_10_row_33" class="text">
            <td class="english">Take them away from us and from all Your peopleو and from this church, and from this Your holy place.</td>
            <td class="coptic">ⲁⲗⲓⲧⲟⲩ  ⲉⲃⲟⲗ ϩⲁⲣⲟⲛ : ⲛⲉⲙ ̀ⲉⲃⲟⲗ ϩⲁⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ :  ⲛⲉⲙ  ̀ⲉⲃⲟⲗϩⲁ ⲧⲁⲓ ̀ⲧⲣⲁⲡⲉⲍⲁ ⲑⲁⲓ: ⲛⲉⲙ ̀ⲉⲃⲟⲗ ϩⲁⲡⲁⲓⲙⲁ ⲉⲑ̅ⲩ̅ ̀ⲛⲧⲁⲕ ⲫⲁⲓ.</td>
            <td class="arabic">انزعها عنا وعن سائر شعبك وعن هذه المائدة وعن موضعك المقدس هذا</td>
        </tr>
        <tr id="table_10_row_34" class="text">
            <td class="english">But those things, which are good and profitable do provide for us, for it is You who have given us the authority to tread on serpents and scorpions, and upon all the power of the enemy.</td>
            <td class="coptic">Ⲛⲏ ⲇⲉ ⲉⲑⲛⲁⲛⲉⲩ ⲛⲉⲙ ⲛⲏⲉⲧⲉⲣⲛⲟϥⲣⲓ  ⲥⲁϩⲛⲓ ̀ⲙⲙⲱⲟⲩ ⲛⲁⲛ : ϫⲉ ̀ⲛⲑⲟⲕ ⲡⲉ ̀ⲉⲧⲁⲕϯ ̀ⲙⲡⲓⲉⲣϣⲓϣⲓ ⲛⲁⲛ :  ̀ⲉϩⲱⲙⲓ ̀ⲉϫⲉⲛ ⲛⲓϩⲟϥ  ⲛⲉⲙ  ⲛⲓϭⲗⲏ : ⲛⲉⲙ ̀ⲉϫⲉⲛ ϯϫⲟⲙ ⲧⲏⲣⲥ ̀ⲛⲧⲉ ⲡⲓϫⲁϫⲓ. </td>
            <td class="arabic">أما الصالحات والنافعات فارزقنا إياها لانك أنت الذي أعطيتنا السلطان أن ندوس على الحيات والعقارب وكل قوة العدو.</td>
        </tr>

        <tr id="table_10_row_36" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

    </table>
    <table id="table_11" title="Verses of Cymbals">
        <caption class="caption" id="caption_table_11">Verses of Cymbals
        <span class="arabic-caption">أرباع الناقوص</span></caption>
        <tr id="table_11_row_0" class="north">
            <td class="english">We worship the Father and the Son, and the Holy spirit, The Holy and Co-essential, Trinity.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲫⲓⲱⲧ ⲛⲉⲙ ̀Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ  : ϯ̀ⲧⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ : ̀ⲛⲟⲙⲟⲩⲟⲥⲓⲟⲥ.</td>
            <td class="arabic">نسجد للآب والأبن والروح القدس الثالوث المساوى فى الجوهر.</td>
        </tr>
        <tr id="table_11_row_1" class="south">
            <td class="english">Hail to the Church, the house of the angels, Hail to the Virgin, who gave birth to our Savior.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲉⲕ̀ⲕⲗⲏⲥⲓⲁ : ̀ⲡⲏⲓ ̀ⲛⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ : ⲭⲉⲣⲉ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲉⲧⲁⲥⲙⲉⲥ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
            <td class="arabic">السلام للكنيسة بيت الملائكة السلام للعذراء التى ولدت مخلصنا .</td>
        </tr>
        <tr id="table_11_row_2" class="north">
            <td class="english">Your Body and Your Blood, are the forgiveness of our sins, with the New Covenant, that You gave to Your disciples.</td>
            <td class="coptic">Ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓ̀ⲥⲛⲟϥ ̀ⲛⲧⲁⲕ: ⲡⲉ ̀ⲡⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ: ⲛⲉⲙ ϯⲇⲓⲁⲑⲏⲕⲓ ̀ⲙⲃⲉⲣⲓ: ̀ⲉⲧⲁⲕⲧⲏⲓⲥ ̀ⲛⲛⲉⲕⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic">جسدك و دمك هما غفران خطايانا مع العهد الجديد الى أعطيت لتلاميذك.</td>
        </tr>
        <tr id="table_11_row_3" class="south">
            <td class="english">Hail to you O Mary, the fair dove, who has borne to us, God the Logos.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:  ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ:  ⲑⲏⲉⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ:  ̀ⲙⲫϯ ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">السلام لك يا مريم الحمامة الحسنة التي ولدت لنا الله الكلمة.</td>
        </tr>
        <tr id="table_11_row_4" class="north">
            <td class="english">Hail to you O Mary, with a holy hail, Hail to you O Mary, the Mother of the Holy.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:  ϧⲉⲛ  ⲟⲩⲭⲉⲣⲉ  ⲉϥⲟⲩⲁⲃ:  ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓ̀ⲁ:  ̀ⲑⲙⲁⲩ  ̀ⲙⲫⲏⲉⲑ̅ⲩ̅.</td>
            <td class="arabic">السلام لك يا مريم سلام مقدس السلام لك يا مريم أم القدوس.</td>
        </tr>
        <tr id="table_11_row_5" class="south">
            <td class="english">Hail to Michael, the great archangel, hail to Gabriel, the chosen Announcer.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲛⲓϣϯ ̀ⲛ̀ⲁⲣⲭⲏ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲭⲉⲣⲉ Ⲅⲁⲃⲣⲓⲏⲗ: ⲡⲓⲥⲟⲧⲡ ̀ⲙⲡⲓϥⲁⲓϣⲉⲛⲛⲟⲩϥⲓ.</td>
            <td class="arabic">السلام لميخائيل رئيس الملائكة العظيم السلام لغبريال المبشر.</td>
        </tr>
        <tr id="table_11_row_6" class="north">
            <td class="english">Hail to the Cherubim, Hail to the Seraphim, Hail to all the heavenly orders.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲭⲉⲣⲉ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ⲭⲉⲣⲉ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ: ̀ⲛ̀ⲉⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">السلام للشاروبيم السلام للسارافيم السلام لجميع الطغمات السمائية. </td>
        </tr>
        <tr id="table_11_row_7" class="south">
            <td class="english">Hail to John the great forerunner, Hail to the priest, the kinsman of Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ⲡⲓⲛⲓϣϯ ̀ⲙ̀ⲡⲣⲟⲇⲣⲟⲙⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲟⲩⲏⲃ: ̀ⲡⲥⲉⲅⲅⲉⲛⲏⲥ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لسادتي الآباء الرسل السلام لتلاميذ ربنا يسوع المسيح.</td>
        </tr>
        <tr id="table_11_row_8" class="north">
            <td class="english">Hail to my lords, and fathers the Apostles, Hail to the disciples, of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟϯ: ̀ⲛⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲭⲉⲣⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ̀ⲛⲧⲉ Ⲡⲉⲛⲟⲥ̅  Ⲓⲏⲥ Ⲡⲭⲥ.</td>
            <td class="arabic">السلام لسادتي الآباء الرسل السلام لتلاميذ ربنا يسوع المسيح.</td>
        </tr>
        <tr id="table_11_row_9" class="south">
            <td class="english">Hail to you, O martyr:  Hail to the evangelist:  Hail to the apostle: St. Mark the beholder of God.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀̀ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲭⲉⲣⲉ ⲡⲓ̀̀ⲁⲡⲟⲥⲧⲗⲟⲥ: Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉ̀̀ⲱⲣⲓⲙⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للإنجيلى .السلام للرسول . مرقس ناظر الإله.</td>
        </tr>
        <tr id="table_11_row_10" class="north">
            <td class="english">Hail to you, O martyr: Hail to the courageous hero: Hail to the fighter: my master, Prince George.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ̀ⲛⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲡⲁϭⲟⲓⲥ ̀ⲡⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد سيدى الملك جيؤرجيوس</td>
        </tr>
        <tr id="table_11_row_11" class="south">
            <td class="english">Hail to you O martyr: hail to the courageous hero: hail to the struggle-mantled: Philopateer Mercurius. </td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ ⲛⲅⲉⲛⲛⲉⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد: السلام للشجاع البطل: السلام للمجاهد: محب الآب مرقوريوس.</td>
        </tr>
        <tr id="table_11_row_12" class="north">
            <td class="english">Hail to you, O martyr: Hail to the courageous hero: Hail to the fighter: abba Mina of Vaiat.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀ⲱ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ̀ⲛⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ:  ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ̀ⲛⲧⲉ ⲛⲓⲫⲁⲓⲁⲧ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد آبا مينا البياضي.</td>
        </tr>
        <tr id="table_11_row_13" class="south">
            <td class="english"></td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        <tr id="table_11_row_14" class="north">
            <td class="english">Hail to our father Abba Antony, the lamp of monasticism, hail to our father Abba Paul, the beloved of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲡⲓϧⲏⲃⲥ ̀ⲛⲧⲉ ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبينا انطونيوس مصباح الرهبنة السلام لأبينا انبا بولا حبيب المسيح.</td>
        </tr>
        <tr id="table_11_row_15" class="south">
            <td class="english">Hail to my masters and fathers, the lovers of their children, Abba Bishoy and Abba Paul the beloved of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁϭⲟⲓⲥ ̀ⲛⲓⲟⲧ: ̀ⲙⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲡⲓϣⲟⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲓⲙⲉⲛⲣⲁϯ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبينا القديس البطريرك: السلام لأثناسيوس الرسول: حبيب المسيح.</td>
        </tr>
        <tr id="table_11_row_16" class="north">
            <td class="english">Through the intercessions, of the Theotokos Saint Mary, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓ̀ⲡⲣⲉⲥⲃⲓ̀ⲁ : ̀ⲛⲧⲉ ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ ⲉⲑ̅ⲩ̅ Ⲙⲁⲣⲓ̀ⲁ: Ⲡⲟⲥ̅ ̀ⲁⲣⲓ̀ ϩⲙⲟⲧ ⲛⲁⲛ: ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ .</td>
            <td class="arabic">بشفاعات والدة الاله  القديسة مريم، يارب انعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_11_row_17" class="south">
            <td class="english">That we may praise You: with Your good Father: and the Holy Spirit: for You were crucified and saved us. Have mercy on us.</td>
            <td class="coptic">Ⲉⲑⲣⲉⲛϩⲱⲥ ̀ⲉⲣⲟⲕ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡⲛⲁ ⲉⲑ̅ⲩ̅: ϫⲉ ⲁⲩⲁϣⲕ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic">لكى نسبحك مع أبيك الصالح والروح القدس لأنك أتيت وخلصتنا ارحمنا.</td>
        </tr>
    </table>
    <table id="table_12" title="Psalm 50">
        <caption class="caption" id="caption_table_12">Psalm 50
        <span class="arabic-caption">المزمور الخمسون</span></caption>
        <tr id="table_12_row_0" class="text">
            <td class="english">Have mercy upon me, O God, according to Your great mercy; and according to the multitude of Your compassions blot out my iniquity.</td>
            <td class="arabic">ارحمني يا الله كعظيم رحمتك، ومثل كثرة رأفتك تمحو إثمي.</td>
        </tr>
        <tr id="table_12_row_1" class="text">
            <td class="english">Wash me thoroughly from my iniquity, and cleanse me from my sin. For I am conscious of my iniquity; and my sin is at all times before me.</td>
            <td class="arabic">اغسلني كثيرا من إثمي ومن خطيتي طهرني، لأني أنا عارف بإثمي وخطيتي أمامي في كل حين.</td>
        </tr>
        <tr id="table_12_row_2" class="text">
            <td class="english">Against You only I have sinned, and done evil before You, that You might be just in Your sayings, and might overcome when You are judged. </td>
            <td class="arabic">لك وحدك أخطأت، والشر قدامك صنعت. لكي تتبرر في أقوالك. وتغلب إذا حوكمتُ.</td>
        </tr>
        <tr id="table_12_row_3" class="text">
            <td class="english">For, behold, I was conceived in iniquities, and in sins my mother conceived me. For, behold, You have loved the truth; You have manifested to me the hidden and un-revealed things of Your wisdom.</td>
            <td class="arabic">لأني هاأنذا بالإثم حبل بي، وبالخطايا ولدتني أمي. لأنك هكذا قد أحببت الحق، إذ أوضحت لي غوامض حكمتك ومستوراتها.</td>
        </tr>
        <tr id="table_12_row_4" class="text">
            <td class="english">You shall sprinkle me with hyssop, and I shall be purified. You shall wash me, and I shall be made whiter than snow.</td>
            <td class="arabic">تنضح على بزوفاك فأطهر، تغسلني فأبيض أكثر من الثلج.</td>
        </tr>
        <tr id="table_12_row_5" class="text">
            <td class="english">You shall make me to hear gladness and joy; the humbled bones shall rejoice.</td>
            <td class="arabic">تسمعني سرورا وفرحا، فتبتهج عظامي المنسحقة. </td>
        </tr>
        <tr id="table_12_row_6" class="text">
            <td class="english">Turn away Your face from my sins, and blot out all my iniquities. Create in me a clean heart, O God, and renew a right spirit in my inward parts.</td>
            <td class="arabic">اصرف وجهك عن خطاياي، وامح كل آثامي. قلبا نقيا اخلق في يا الله، وروحا مستقيما جدده في أحشائي.</td>
        </tr>
        <tr id="table_12_row_7" class="text">
            <td class="english">Do not cast me away from Your face, and do not remove Your Holy Spirit from me.</td>
            <td class="arabic">لا تطرحني من قدام وجهك وروحك القدوس لا تنزعه منى. </td>
        </tr>
        <tr id="table_12_row_8" class="text">
            <td class="english">Give me the joy of Your salvation, and uphold me with a directing spirit. Then I shall teach the transgressors Your ways; and the ungodly men shall turn to You.</td>
            <td class="arabic">امنحني بهجة خلاصك، وبروح رئاسي عضدني أعلم الأثمة طرقك والمنافقون إليك يرجعون،</td>
        </tr>
        <tr id="table_12_row_9" class="text">
            <td class="english">Deliver me from blood, O God, the God of my salvation, and my tongue shall rejoice in Your righteousness. O Lord, You shall open my lips, and my mouth shall declare Your praise.</td>
            <td class="arabic">نجني من الدماء يا الله إله خلاصي، فيبتهج لساني بعدلك. يا رب افتح شفتي، فيخبر فمي بتسبيحك.</td>
        </tr>
        <tr id="table_12_row_10" class="text">
            <td class="english">For if You desired sacrifice, I would have given it; You do not take pleasure in burnt offerings. The sacrifice of God is a broken spirit; a broken and humbled heart God shall not despise.</td>
            <td class="arabic">لأنك لو آثرت الذبيحة لكنت الآن أعطي، ولكنك لا تسر بالمحرقات، فالذبيحة لله روح منسحق. القلب المنكسر والمتواضع لا يرذله الله،</td>
        </tr>
        <tr id="table_12_row_11" class="text">
            <td class="english">Do good, O Lord, in Your good pleasure to Zion; and let the walls of Jerusalem be built. Then You shall be pleased with sacrifices of righteousness, offering, and burnt sacrifices: then they shall offer calves upon on Your altar. Alleluia.</td>
            <td class="arabic">أنعم يا رب بمسرتك على صهيون، ولتبن أسوار أورشليم. حينئذ تسر بذبائح البر قربانا ومحرقات ويقربون على مذابحك العجول. هلليلويا.</td>
        </tr>
    </table>
    <table id="table_13" title="Litany of the sick">
        <caption class="caption" id="caption_table_13">Litany of the Sick
        <span class="arabic-caption">أوشية المرضى</span></caption>

        <tr id="table_13_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>Pray</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲗⲏⲗ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>صلوا</td>
        </tr>

        <tr id="table_13_row_3" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Stand up for prayer.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲉⲡⲓ ̀ⲡⲣⲟⲥⲉⲩⲭϩ ̀ⲥⲧⲁⲑⲏⲧⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>للصلاة قفوا</td>
        </tr>

        <tr id="table_13_row_5" class="text">
            <td class="english"><span class="role">Priest:<br></span>Peace be with all.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>السلام للكل.</td>
        </tr>

        <tr id="table_13_row_7" class="text">
            <td class="english"><span class="role">Congregation:<br></span>And with your spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲉ ⲧⲱ ̀ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>ولروحك أيضاً..</td>
        </tr>

        <tr id="table_13_row_9" class="text">
            <td class="english"><span class="role">Priest:<br></span>Again, let us ask God the Pantocrator, the Father of our Lord, God and Savior, Jesus Christ.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲡⲁⲗⲓⲛ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ̀ⲉⲪϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: Ⲫⲓⲱⲧ ̀ⲙⲠⲉⲛ̅ⲟ̅ⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛ̅ⲥ̅ⲱ̅ⲣ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>وأيضا فلنسال الله ضابط الكل أبا ربنا وإلهنا ومخلصنا يسوع المسيح</td>
        </tr>
        <tr id="table_13_row_10" class="text">
            <td class="english">We ask and entreat Your goodness, O lover of mankind, remember, O Lord, the sick among Your people.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛⲧⲉⲕⲙⲉⲧ ̀ⲁⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲁⲣⲓ̀ⲫⲙⲉⲩ̀ⲓ ̀Ⲡ̅ⲟ̅ⲥ ̀ⲛⲛⲏⲉⲧϣⲱⲛⲓ ̀ⲛⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ.</td>
            <td class="arabic">نسأل ونطلب من صلاحك يا محب البشر: أذكر يارب مرضي شعبك</td>
        </tr>

        <tr id="table_13_row_12" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray for our fathers and brethren who are sick with any sickness, whether in this place or in any place, that Christ our God may grant them health and healing, and forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲧⲱⲃϩ ⲉϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥⲛⲏⲟⲩ ⲉⲧϣⲱⲛⲓ ϧⲉⲛ ϫⲓⲛϣⲱⲛⲓ ⲛⲓⲃⲉⲛ: ̀ⲓⲧⲉ ϧⲉⲛ ⲡⲁⲓⲧⲟⲡⲟⲥ ̀ⲓⲧⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ϩⲓⲛⲁ ̀ⲛⲧⲉ Ⲡ̅ⲭ̅ⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲉⲣ̀ϩⲙⲟⲧ ⲛⲁⲛ ⲛⲉⲙⲱⲟⲩ ̀ⲙⲡⲓⲟⲩϫⲁⲓ ⲛⲉⲙ ⲡⲓⲧⲁⲗϭⲟ: ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>اطلبوا عن آبائنا وإخوتنا المرضي بكل مرض إن كان في هذا المسكن أو بكل موضع لكي ينعم إلهنا عليهم وعلينا بالعافية والشفاء ويغفر لنا خطايانا.</td>
        </tr>

        <tr id="table_13_row_14" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>رب ارحم.</td>
        </tr>
      
        <tr id="table_13_row_16" class="text">
            <td class="english"><span class="role">Priest:<br></span>You have visited them with mercy and compassion, heal them.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲉⲁⲕϫⲉⲙ ⲡⲟⲩϣⲓⲛⲓ ϧⲉⲛ ϩⲁⲛⲛⲁⲓ ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ ⲙⲁⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>تعهدهم بالمراحم والرأفات اشفهم</td>
        </tr>
        <tr id="table_13_row_17" class="text">
            <td class="english">Take away from them and from us every sickness and every malady; the spirit of sickness chase away.</td>
            <td class="coptic">Ⲁⲗⲓⲟⲩⲓ ̀ⲉⲃⲟⲗ ϩⲁⲣⲱⲟⲩ ⲛⲉⲙ ̀ⲉⲃⲟⲗ ϩⲁⲣⲟⲛ ̀ⲛϣⲱⲛⲓ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲓⲁⲃⲓ ⲛⲓⲃⲉⲛ: ⲛⲓ ̀ⲛⲧⲉ ⲛⲓϣⲱⲛⲓ ϭⲟϫⲓ ̀ⲛⲥⲱϥ.</td>
            <td class="arabic">انزع عنهم وعنا كل مرض وكل سقم، وروح الامراض أطرده،</td>
        </tr>
        <tr id="table_13_row_18" class="text">
            <td class="english">Those who have long lain in sickness raise up and comfort. </td>
            <td class="coptic">Ⲛⲏ ̀ⲉⲧⲁⲩⲱⲥⲕ ⲉⲩ̀ϣⲧⲏⲟⲩⲧ ϧⲉⲛ ⲛⲓⲓⲁⲃⲓ ⲙⲁⲧⲟⲩⲛⲟⲥⲟⲩ ⲟⲩⲟϩ ⲙⲁⲛⲟⲙϯ ̀ⲛⲱⲟⲩ.</td>
            <td class="arabic">والذين أبطأوا مطروحين في الامراض أقمهم وعزهم</td>
        </tr>
        <tr id="table_13_row_19" class="text">
            <td class="english">Those who are afflicted by unclean spirits, set them all free.</td>
            <td class="coptic">Ⲛⲏ ⲉⲧ ̀ⲧϩⲉⲙⲕⲏⲟⲩⲧ ̀ⲛⲧⲟⲧⲟⲩ ̀ⲛⲛⲓ̅ⲡ̅ⲛ̅ⲁ ̀ⲛ̀ⲁⲕⲁⲑⲣⲧⲟⲛ ̀ⲁⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲛⲣⲉⲙϩⲉ.</td>
            <td class="arabic">والمعذبون من الارواح النجسة اعتقهم جميعا.</td>
        </tr>
        <tr id="table_13_row_20" class="text">
            <td class="english">Those who are in prisons or dungeons, those who are in exile or captivity, or those who are held in bitter bondage, O Lord, set them all free and have mercy upon them.</td>
            <td class="coptic">Ⲛⲏ ⲉⲧϧⲉⲛ ⲛⲓϣⲧⲉⲕⲱⲟⲩ: ⲓⲉ ⲛⲓⲙⲉⲧ̀ⲁⲗⲱⲥ: ⲓⲉ ⲛⲏ ⲉⲧⲭⲏ ϧⲉⲛ ⲛⲓ̀ⲉⲝⲟⲣⲓⲥⲧⲓ̀ⲁ: ⲓⲉ ⲛⲓⲉⲭⲙⲁⲗⲱⲥⲓⲁ: ⲓⲉ ⲛⲏ ̀ⲉⲧⲟⲩ̀ⲁⲙⲟⲛⲓ ̀ⲙⲙⲱⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲧⲃⲱⲕ ⲉⲥⲉⲛϣⲁϣⲓ: ̀Ⲡ̅ⲟ̅ⲥ ⲁⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ̀ⲛⲣⲉⲙϩⲉ ⲟⲩⲟϩ ⲛⲁⲓ ̀ⲛⲱⲟⲩ.</td>
            <td class="arabic">الذين في السجون أو المطابق. أو الذين في النفي أو السبي أو المقبوض عليهم في عبودية مره يارب اعتقهم جميعهم وارحمهم.</td>
        </tr>
        <tr id="table_13_row_21" class="text">
            <td class="english">For You are He who loosens the bound and uplifts the fallen;</td>
            <td class="coptic">Ϫⲉ ̀ⲛⲑⲟⲕ ⲡⲉⲧⲃⲱⲗ ̀ⲛⲛⲏ ⲉⲧⲥⲱⲛϩ ̀ⲉⲃⲟⲗ: ⲟⲩⲟϩ ⲉⲧⲧⲁϩⲟ ̀ⲉⲣⲁⲧⲟⲩ ̀ⲛⲛⲏ ⲉⲧⲁⲩⲣⲁϧⲧⲟⲩ ̀ⲉϧⲣⲏⲓ.</td>
            <td class="arabic">لأنك أنت الذي تحل المربوطين وتقيم الساقطين.</td>
        </tr>
        <tr id="table_13_row_22" class="text">
            <td class="english">the hope of those who have no hope and the help of those who have no helper;</td>
            <td class="coptic">ϯϩⲉⲗⲡⲓⲥ ̀ⲛⲧⲉ ⲛⲏ ̀ⲉⲧⲉ ̀ⲙⲙⲟⲛⲧⲟⲩ ϩⲉⲗⲡⲓⲥ: ϯⲃⲟⲏⲑⲓⲁ ̀ⲛⲧⲉ ⲛⲏ ̀ⲉⲧⲉ ⲙⲙⲟⲛⲧⲟⲩ ⲃⲟⲏⲑⲟⲥ.</td>
            <td class="arabic">رجاء من ليس له رجاء، ومعين من ليس له معين.</td>
        </tr>
        <tr id="table_13_row_23" class="text">
            <td class="english">the comfort of the fainthearted; the harbor of those in the storm.</td>
            <td class="coptic"> ̀Ⲑⲛⲟⲙϯ ̀ⲛⲧⲉ ⲛⲏ ⲉⲧⲟⲓ ̀ⲛⲕⲟⲩϫⲓ ̀ⲛϩⲏⲧ: ⲡⲓⲗⲩⲙⲏⲛ ̀ⲛⲧⲉ ⲛⲏ ⲉⲧⲭⲏ ϧⲉⲛ ⲡⲓⲭⲓⲙⲱⲛ. </td>
            <td class="arabic">عزاء صغيري القلوب، ميناء الذين في العاصف.</td>
        </tr>
        <tr id="table_13_row_24" class="text">
            <td class="english">All souls that are distressed or bound, grant them mercy, O Lord; grant them rest, grant them refreshment, grant them grace, grant them help, grant them salvation, grant them the forgiveness of their sins and their iniquities.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲧϩⲉϫϩⲱϫ ⲟⲩⲟϩ ̀ⲉⲧⲟⲩ̀ⲁⲙⲟⲛⲓ ̀ⲉϫⲱⲟⲩ. Ⲙⲟⲓ ̀ⲛⲱⲟⲩ ̀Ⲡ̅ⲟ̅ⲥ ̀ⲛⲟⲩⲛⲁⲓ: ⲙⲟⲓ ̀ⲛⲱⲟⲩ ̀ⲛⲟⲩ̀ⲙⲧⲟⲛ: ⲙⲟⲓ ̀ⲛⲱⲟⲩ ̀ⲛⲟⲩⲭⲃⲟⲃ: ⲙⲟⲓ ⲛⲱⲟⲩ ̀ⲛⲟⲩ̀ϩⲙⲟⲧ: ⲙⲟⲓ ⲛⲱⲟⲩ ̀ⲛⲟⲩⲃⲟⲏⲑⲓ̀ⲁ: ⲙⲟⲓ ⲛⲱⲟⲩ ̀ⲛⲟⲩⲥⲱⲧⲏⲣⲓⲁ: ⲙⲟⲓ ⲛⲱⲟⲩ ̀ⲛⲟⲩⲙⲉⲧⲣⲉϥⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲟⲩⲛⲟⲃⲓ ⲛⲉⲙ ⲛⲟⲩ̀ⲁⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">كل الانفس المتضايقة أو المقبوض عليها: إعطها يارب رحمة. اعطها راحة اعطها برودة اعطها نعمة اعطها معونة اعطها خلاصا. اعطها غفران خطاياها وآثامها.</td>
        </tr>
        <tr id="table_13_row_25" class="text">
            <td class="english">As for us also, O Lord, the sicknesses of our souls heal, and also those of our bodies, cure.</td>
            <td class="coptic">Ⲁⲛⲟⲛ ⲇⲉ ϩⲱⲛ ̀Ⲡ̅ⲟ̅ⲥ ⲛⲓϣⲱⲛⲓ ̀ⲛⲧⲉ ⲛⲉⲛⲩⲭⲏ ̀ⲛⲁⲧⲁⲗϭⲱⲟⲩ: ⲟⲩⲟϩ ⲛⲁ ⲛⲉⲛⲕⲉⲥⲱⲙⲁ ̀ⲁⲣⲉⲫⲁϧⲣⲓ ̀ⲉⲣⲱⲟⲩ.</td>
            <td class="arabic">ونحن أيضا يارب أمراض نفوسنا إشفها، والتي لاجسادنا عافها،</td>
        </tr>
        <tr id="table_13_row_26" class="text">
            <td class="english">O You, the true physician of our souls and bodies, the Bishop of all flesh, visit us with Your salvation.</td>
            <td class="coptic">Ⲡⲓⲥⲏⲓⲛⲓ ̀ⲙⲙⲏⲓ ̀ⲛⲧⲉ ⲛⲉⲛⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ: ⲡⲓ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ ̀ⲛⲧⲉ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ.</td>
            <td class="arabic">أيها الطبيب الحقيقي الذي لانفسنا وأجسادنا يا مدبر كل جسد تعهدنا بخلاصك.</td>
        </tr>

        <tr id="table_13_row_28" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>
    </table>      
    <table id="table_14" title="Litany of the offering">
        <caption class="caption" id="caption_table_14">Litany of the Offering
        <span class="arabic-caption">أوشية القرابين</span></caption>

        <tr id="table_14_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>We ask and entreat Your goodness, O Lover of Mankind, remember, O Lord, the sacrifices, the offerings and the thanksgivings of those who have offered to the honor and glory of Your holy name.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ̀ⲛⲧⲉⲕⲙⲉⲧ̀ⲁⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ:Ⲁⲣⲓ̀ⲫⲙⲉⲩⲓ Ⲡ̅ⲟ̅ⲥ ̀ⲛⲛⲓⲑⲩⲥⲓⲁ ⲛⲓ̀ⲡⲣⲟⲥⲫⲟⲣⲁ ⲛⲓϣⲉⲡ̀ϩⲙⲟⲧ ̀ⲛⲧⲉ ⲛⲏ ̀ⲉⲧⲁⲩⲉⲣ̀ⲡⲣⲟⲥⲫⲉⲣⲓⲛ. Ⲉⲟⲩⲧⲁⲓ̀ⲟ ⲛⲉⲙ ⲟⲩ̀ⲱⲟⲩ ̀ⲙⲡⲉⲕⲣⲁⲛ ̀ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>نسأل ونطلب من صلاحك يا محب البشر: أذكر يارب صعائد وقرابين وشكر الذين يقربون٬ كرامة ومجدا لاسمك القدوس.</td>
        </tr>

        <tr id="table_14_row_3" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray for those who care for the sacrifices, offerings, first-fruits, oil, incense, coverings, reading books, and altar vessels, that Christ our God may reward them in the heavenly Jerusalem, and forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲧⲱⲃϩ ̀ⲉϫⲉⲛ ⲛⲏ ⲉⲧϥⲓ ̀ⲙ̀ⲫⲣⲱⲟⲩϣ ̀ⲛⲛⲓⲑⲩⲥⲓ̀ⲁ ⲛⲓ̀ⲡⲣⲟⲥⲫⲟⲣⲁ ⲛⲓ̀ⲁⲡⲁⲣⲭⲏ ⲛⲓⲛⲉϩ ⲛⲓ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ ⲛⲓ̀ⲥⲕⲉⲡⲁⲥⲙⲁ ⲛⲓϫⲱⲙ ̀ⲛⲱϣ ⲛⲓⲕⲩⲙⲓⲗⲗⲓⲟⲛ ̀ⲛⲧⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ: ϩⲓⲛⲁ ̀ⲛⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯϣⲉⲃⲓⲱ ⲛⲱⲟⲩ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ̀ⲛⲧⲉ ̀ⲧⲫⲉ: ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>اطلبوا عن المهتمين بالصعائد والقرابين والبكور والزيت والبخور والستور وكتب القراءة وأواني المذبح لكي  المسيح إلهنا يكافئهم في أورشليم السمائية، ويغفر لنا خطايانا.</td>
        </tr>

        <tr id="table_14_row_5" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
            </tr>

        <tr id="table_14_row_7" class="text">
            <td class="english"><span class="role">Priest:<br></span>Receive them upon Your holy rational altar in heaven as a sweet savor of incense before Your greatness in the heavens, through the service of Your holy angels and archangels.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲟⲡⲟⲩ ̀ⲉⲣⲟⲕ ̀ⲉϫⲉⲛ ⲡⲉⲕⲑⲩⲥⲓⲁⲧⲏⲣⲓⲟⲛ ⲉⲑⲩ ̀ⲛⲉⲗⲗⲟⲅⲓⲙⲟⲛ ̀ⲛⲧⲉ ̀ⲧⲫⲉ ̀ⲉⲟⲩⲥⲑⲟⲓ ̀ⲛ̀ⲥⲑⲟⲓⲛⲟⲩϥⲓ: ̀ⲉϧⲟⲩⲛ ̀ⲉⲧⲉⲕⲙⲉⲧⲛⲓϣϯ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩ̀ⲓ: ̀ⲉⲃⲟⲗ ϩⲓⲧⲉⲛ ̀ⲡϣⲉⲙϣⲓ ̀ⲛⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>إقبلها إليك علي مذبحك المقدس الناطق السمائي رائحة بخور تدخل إلي عظمتك التي في السموات بواسطة خدمة ملائكتك ورؤساء ملائكتك المقدسين، </td>
        </tr>
        <tr id="table_14_row_8" class="text">
            <td class="english">And as You have received the gifts of the righteous Abel, the sacrifice of our father Abraham, and the two mites of the widow,</td>
            <td class="coptic"> ̀Ⲙⲫⲣⲏϯ ̀ⲉⲧⲁⲕϣⲱⲡ ̀ⲉⲣⲟⲕ ̀ⲛⲛⲓⲇⲱⲣⲟⲛ ̀ⲛⲧⲉ ⲡⲓⲑⲙⲏⲓ Ⲁⲃⲉⲗ: ⲛⲉⲙ ϯⲑⲩⲥⲓ̀ⲁ ̀ⲛⲧⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ ϯⲧⲉⲃⲓ ̀ⲥⲛⲟⲩϯ ̀ⲛⲧⲉ ϯⲭⲏⲣⲁ.</td>
            <td class="arabic">وكما قبلت إليك قرابين هابيل الصديق وذبيحة أبينا ابراهيم وفلسي الارملة،</td>
        </tr>
        <tr id="table_14_row_9" class="text">
            <td class="english">so also receive the thank offerings of Your servants - those  in abundance and those in scarcity,  hidden or manifest-</td>
            <td class="coptic">Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲛⲓⲕⲉⲉⲩⲭⲁⲣⲓⲥⲧⲏⲣⲓⲟⲛ ̀ⲛⲧⲉ ⲛⲉⲕ̀ⲉⲃⲓⲁⲓⲕ ϣⲟⲡⲟⲩ ̀ⲉⲣⲟⲕ ⲛⲁ ⲡⲓϩⲟⲩⲟ ⲛⲉⲙ ⲛⲁ ⲡⲓⲕⲟⲩϫⲓ: ⲛⲏ ⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏ ⲉⲑⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">هكذا أيضا نذور عبيدك إقبلها إليك، أصحاب الكثير وأصحاب القليل، الخفيات والظاهرات،</td>
        </tr>
        <tr id="table_14_row_10" class="text">
            <td class="english">those who desire to offer to You but have none, and those who have offered these gifts to You this very day.</td>
            <td class="coptic">ⲛⲏ ⲉⲑⲟⲩⲱϣ ̀ⲉ̀ⲓⲛⲓ ⲛⲁⲕ ̀ⲉϧⲟⲩⲛ ⲟⲩⲟϩ ̀ⲙⲙⲟⲛ ̀ⲛⲧⲱⲟⲩ: ⲛⲉⲙ ⲛⲏ ̀ⲉⲧⲁⲩ̀ⲓⲛⲓ ⲛⲁⲕ ̀ⲉϧⲟⲩⲛ ϧⲉⲛ ⲡⲁⲓⲉϩⲟⲟⲩ ̀ⲛⲧⲉ Ⲫⲟⲟⲩ ̀ⲛⲛⲁdⲗⲱⲣⲟⲛ ⲛⲁⲓ. </td>
            <td class="arabic">والذين يريدون أن يقدموا لك وليس لهم، والذين قدموا لك في هذا اليوم هذه القرابين</td>
        </tr>
        <tr id="table_14_row_11" class="text">
            <td class="english">Give them the incorruptible instead of the corruptible, the heavenly instead of the earthly, and the eternal instead of the temporal.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲱⲟⲩ ⲛⲛⲓⲁⲧⲧⲁⲕⲟ ̀ⲛⲧϣⲉⲃⲓⲱ ̀ⲛⲛⲏ ⲉⲑⲛⲁⲧⲁⲕⲟ: ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ ⲛ̀ⲧϣⲉⲃⲓⲱ ̀ⲛⲛⲁ ⲡⲕⲁϩⲓ: ⲛⲓϣⲁ ̀ⲉⲛⲉϩ ̀ⲛ̀ⲧϣⲉⲃⲓⲱ ̀ⲛⲛⲓ̀ⲡⲣⲟⲥ ⲟⲩⲥⲏⲟⲩ.</td>
            <td class="arabic">أعطهم الباقيات عوضا عن الفانيات، السمائيات عِوَض الارضيات، الأبديات عِوَض الزمنيات،</td>
        </tr>
        <tr id="table_14_row_12" class="text">
            <td class="english">Their houses and their stores, fill them with every good thing. Surround them, O Lord, with the power of Your holy angels and archangels.</td>
            <td class="coptic">Ⲛⲟⲩⲏⲟⲩ ⲛⲟⲩⲧⲁⲙⲓⲟⲛ ⲙⲁϩⲟⲩ ̀ⲉⲃⲟⲗ ϧⲉⲛ ̀ⲁⲅⲁⲑⲟⲛ ⲛⲓⲃⲉⲛ. Ⲙⲁⲧⲁⲕⲧⲟ ̀ⲉⲣⲱⲟⲩ ̀Ⲡ̅ⲟ̅ⲥ ̀ⲛ̀ⲧϫⲟⲙ ̀ⲛⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">بيوتهم ومخازنهم أملاها من كل الخيرات. أحطهم يارب بقوة ملائكتك ورؤساء ملائكتك الاطهار.</td>
        </tr>
        <tr id="table_14_row_13" class="text">
            <td class="english">As they have remembered Your holy name on earth, remember them also, O Lord, in Your kingdom, and in this age too, leave them not behind.</td>
            <td class="coptic">Ⲙ̀ⲫⲣⲏϯ ̀ⲉⲧⲁⲩⲉⲣ ̀ⲫⲙⲉⲩ̀ⲓ ̀ⲙⲡⲉⲕⲣⲁⲛ ̅ⲉ̅ⲑ̅ⲩ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ̀ⲁⲣⲓⲡⲟⲩⲙⲉⲩ̀ⲓ ϩⲱⲟⲩ ̀Ⲡ̅ⲟ̅ⲥ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ: ⲟⲩⲟϩ ϧⲉⲛ ⲡⲁⲓⲕⲉ̀ⲉⲱⲛ ⲫⲁⲓ ̀ⲙⲡⲉⲣⲭⲁⲩ ̀ⲛⲥⲱⲕ.</td>
            <td class="arabic">وكما ذكروا اسمك القدوس علي الأرض أذكرهم أيضا يارب في ملكوتك، وفي هذا الدهر لا تتركهم عنك.</td>
        </tr>

        <tr id="table_14_row_15" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>
    </table>
    <table id="table_15" title="The Gloria">
        <caption class="caption" id="caption_table_15">The Gloria
        <span class="arabic-caption">تسبِحةُ الملائكةِ</span></caption>

        <tr id="table_15_row_1" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Let us praise with the angels, saying, “Glory to God in the highest, peace on earth, and good will toward men.” We praise You, we bless You, we serve You, we worship You, we confess to You, we glorify You, we give thanks to You for Your great glory, O Lord, King of heaven, God the Father, the Pantocrator.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>فلنسبح مع الملائكة قائلين: المجد لله في الأعالي وعلى الأرض السلام وفى الناس المسرة. نسبحك. نباركك. نخدمك. نسجد لك. نعترف لك. ننطق بمجدك. نشكرك من أجل عظم مجدك، أيها الرب المالك على السموات، الله الآب ضابط الكل،</td>
        </tr>
        <tr id="table_15_row_2" class="text">
            <td class="english">O Lord, the One and Only Begotten Son, Jesus Christ, and the Holy Spirit.</td>
            <td class="arabic">أيها الرب الابن الوحيد يسوع المسيح والروح القدس.</td>
        </tr>
        <tr id="table_15_row_3" class="text">
            <td class="english">O Lord God, Lamb of God, Son of the Father, who takes away the sin of the world, have mercy on us, O You who take away the sin of the world, receive our prayers unto You.</td>
            <td class="arabic">أيها الرب الإله، حمل الله، ابن الآب، رافع خطية العالم، ارحمنا. يا حامل خطية العالم، اقبل طلباتنا إليك.</td>
        </tr>
        <tr id="table_15_row_4" class="text">
            <td class="english">Who sits at the right hand of His Father, have mercy on us. You only are the Holy; You only are the Most High, my Lord, Jesus Christ, with the Holy Spirit. Glory be to God the Father. Amen.</td>
            <td class="arabic">الجالس عن يمين أبيه، ارحمنا. أنت وحدك القدوس. أنت وحدك العالي يا ربى يسوع المسيح والروح القدس. مجدا لله الآب أمين.</td>
        </tr>
        <tr id="table_15_row_5" class="text">
            <td class="english">Every day I will bless You, and I will praise Your name forever and unto the ages of ages. Amen</td>
            <td class="arabic">كل يوم أباركك وأسبح اسمك إلى الأبد وإلى أبد الأبد. أمين.</td>
        </tr>
        <tr id="table_15_row_6" class="text">
            <td class="english">From the night season my soul awakes early unto You, O my God, for Your precepts are a light upon the earth.</td>
            <td class="arabic">منذ الليل روحي تبكر إليك يا إلهي، لأن أوامرك هي نور على الأرض.</td>
        </tr>
        <tr id="table_15_row_7" class="text">
            <td class="english">I was meditating on Your ways, for You have become a helper unto me. In the morning You shall hear my voice. Early I will stand before You, and You shall see me.</td>
            <td class="arabic">كنت أتلو في طرقك، لأنك صرت لي معينا. باكرا يارب تسمع صوتي، بالغداة أقف أمامك وتراني.</td>
        </tr>
    </table>
    <table id="table_16" title="The Trisagion">
        <caption class="caption" id="caption_table_16">The Trisagion
        <span class="arabic-caption">الثلاث تقديسات</span></caption>

        <tr id="table_16_row_1" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Holy God, Holy Mighty, Holy Immortal, who was born of the Virgin, have mercy upon us.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>قدوس الله، قدوس القوي، قدوس الذي لا يموت، الذي ولد من العذراء، ارحمنا.</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, who was crucified for us, have mercy upon us.</td>
            <td class="arabic">قدوس الله، قدوس القوي، قدوس الذي لا يموت، الذي صلب عنا، ارحمنا.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, who rose from the dead and ascended into the heavens, have mercy upon us.</td>
            <td class="arabic">قدوس الله، قدوس القوي، قدوس الذي لا يموت، الذي قام من بين الأموات وصعد إلى السموات، ارحمنا.</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, now and forever and unto the ages of all ages. Amen.</td>
            <td class="arabic">المجد للآب والابن والروح القدس الآن وكل أوان وإلى دهر الدهور. آمين.</td>
        </tr>
        <tr id="table_16_row_5" class="text">
            <td class="english">O Holy Trinity, have mercy on us. O Holy Trinity, have mercy on us. O Holy Trinity, have mercy on us.</td>
            <td class="arabic">أيها الثالوث القدوس ارحمنا. أيها الثالوث القدوس ارحمنا. أيها الثالوث القدوس ارحمنا.</td>
        </tr>
        <tr id="table_16_row_6" class="text">
            <td class="english">O Lord, forgive us our sins. O Lord, forgive us our iniquities. O Lord, forgive us our trespasses.</td>
            <td class="arabic">يا رب اغفر لنا خطايانا. يا رب اغفر لنا آثامنا. يا رب اغفر لنا زلاتنا.</td>
        </tr>
        <tr id="table_16_row_7" class="text">
            <td class="english">O Lord, visit the sick of Your people, heal them for the sake of Your holy name.</td>
            <td class="arabic">يا رب افتقد المرضى من شعبك، شفهم من أجل اسمك القدوس.</td>
        </tr>
        <tr id="table_16_row_8" class="text">
            <td class="english">Our fathers and brethren who have fallen asleep, O Lord, repose their souls.</td>
            <td class="arabic">آباؤنا وإخوتنا الذين سبقونا بالنوم، يا رب ارحم نفوسهم.</td>
        </tr>
        <tr id="table_16_row_9" class="text">
            <td class="english">O You without sin, Lord, help us and receive our supplications. For Yours is the glory, the dominion, and the triple holiness. Lord have mercy. Lord have mercy. Lord bless us. Amen.</td>
            <td class="arabic">أيها الذي ليس له خطية يا رب، ساعدنا واقبل دعائنا. لأن لك المجد والسلطان والثلاث تقديسات. رب ارحم. رب ارحم. رب بارك. آمين.</td>
        </tr>
    </table>
    <table id="table_17" title="Our Father">
        <caption class="caption" id="caption_table_17">Our Father
        <span class="arabic-caption">أبانا الذي</span></caption>

        <tr id="table_17_row_1" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Our Father who art in heaven, hallowed be Your name. Your kingdom come. Your will be done on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from the evil one. In Christ Jesus our Lord. For Yours is the kingdom, the power, and the glory, forever. Amen.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>أبانا الذي في السموات، ليتقدس اسمك. ليأت ملكوتك. لتكن مشيئتك كما في السماء كذلك على الأرض. خبزنا الدائم أعطنا اليوم. وأغفر لنا خطايانا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة، بل نجنا من الشرير. في المسيح يسوع ربنا. لأن لك الملك والقوة والمجد إلى الأبد. آمين.</td>
        </tr>
    </table>
</div>

<div class="section" id="section_7" title="The Doxologies">
    <table id="table_18" title="Introduction to the doxologies">
        <caption class="caption" id="caption_table_18">Introduction to the Doxologies
        <span class="arabic-caption">مقدمة الذوكصولوجيات</span></caption>
        <tr id="table_18_row_0" class="north">
            <td class="english">Hail to you. We ask you, O saint full of glory, the ever-virgin, the Theotokos, the Mother of Christ.</td>
            <td class="coptic">Ⲭ ⲉⲣⲉ ⲛⲉ ⲧⲉⲛϯϩⲟ  ̀ⲉⲣⲟ : ̀ⲱ ⲑⲏⲉⲑⲟⲩⲁⲃ ⲉⲑⲙⲉϩ ̀ⲛ̀ⲱⲟⲩ : ⲉⲧⲟⲓ ̀ⲙⲡⲁⲣⲑⲉⲛⲟⲥ ̀ⲛⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ϯⲙⲁⲥⲛⲟⲩϯ ̀ⲑⲙⲁⲩ ̀ⲙⲠⲓⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">السلام لك. نسألك أيتها القديسة الممتلئة مجدا العذراء كل حين، والدة الإله أم المسيح.</td>
        </tr>
        <tr id="table_18_row_1" class="south">
            <td class="english">Lift up our prayers unto your beloved Son, that He may forgive us our sins.</td>
            <td class="coptic">̀Ⲁⲛⲓⲟⲩ̀ⲓ  ̀ⲛⲧⲉⲛ̀ⲡⲣⲟⲥⲉⲩⲭⲏ : ̀ⲉ̀ⲡϣⲱⲓ ϩⲁ ⲡⲉϣⲏⲣⲓ ̀ⲙⲙⲉⲛⲣⲓⲧ : ̀ⲛⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">أصعدي صلواتنا إلى ابنك الحبيب ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_18_row_2" class="north">
            <td class="english">Hail to the Holy Virgin who bore for us the true light, Christ our God.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏ̀ⲉⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ: ̀ⲙⲡⲓⲟⲩⲱⲓⲛⲓ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ: Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">السلام للتي ولدت لنا النور الحقيقي المسيح إلهنا، العذراء القديسة.</td>
        </tr>
        <tr id="table_18_row_3" class="south">
            <td class="english">Ask the Lord on our behalf to have mercy on our souls and forgive us our sins.</td>
            <td class="coptic">̀Ⲙⲁϯϩⲟ ̀ⲙⲠϭⲟⲓⲥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ: ̀ⲛⲧⲉϥⲉⲣⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">اسألي الرب عنا، ليصنع رحمة مع نفوسنا، ويغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_18_row_4" class="north">
            <td class="english">O Virgin Mary, the Holy Theotokos, the faithful advocate for all mankind,</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ϯⲑⲉ̀ⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ: ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ: ̀ⲛⲧⲉ ̀ⲡⲅⲉⲛⲟⲥ ̀ⲛⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">أيتها العذراء مريم والدة الإله، القديسة الشفيعة الأمينة لجنس البشرية.</td>
        </tr>
        <tr id="table_18_row_5" class="south">
            <td class="english">Intercede on our behalf before Christ whom you bore, that He may forgive us our sins.</td>
            <td class="coptic">̀̀Ⲁⲣⲓ̀ⲡⲣⲉⲥⲃⲉⲩⲓⲛ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ : ⲛⲁϩⲣⲉⲛ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲫⲏ̀ⲉⲧⲁⲅⲉ̀ϫⲫⲟϥ : ϩⲟⲡⲱⲥ ̀ⲛⲧⲉϥⲉⲣ̀ϩⲙⲟⲧ ⲛⲁⲛ : ̀ⲙⲡⲓⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">اشفعي فينا أمام المسيح الذي ولدته لكي ينعم علينا بغفران خطايانا.</td>
        </tr>
        <tr id="table_18_row_6" class="north">
            <td class="english">Hail to you O Virgin, the right and true Queen. Hail to the pride of our race, who bore to us Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲱ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :  ϯⲟⲩⲣⲱ  ̀ⲙⲙⲏⲓ   ̀ⲛ̀ⲁⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ̀ⲁⲣⲉ̀ϫⲫⲟ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        <tr id="table_18_row_7" class="south">
            <td class="english">We ask you to remember us, our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ  ̀ⲁⲣⲓⲡⲉⲛⲙⲉⲩ̀ⲓ : ̀ⲱ ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ  Ⲡⲓ̀Ⲭⲣⲓⲥⲧⲟⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ  ⲛⲁⲛ  ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
    </table>
    <table id="table_19" title="Matins Doxology for St Mary">
        <caption class="caption" id="caption_table_19">Matins Doxology for St Mary
        <span class="arabic-caption">ذوكصولوجية باكر للسيدة العذراء مريم</span></caption>
        <tr id="table_19_row_0" class="north">
            <td class="english">Blessed are you O Mary, the wise and the chaste, the Second Tabernacle, the spiritual treasure.</td>
            <td class="coptic">Ⲱⲟⲛⲓⲁϯ ̀ⲛⲑⲟ Ⲙⲁⲣⲓ̀ⲁ: ϯⲥⲁⲃⲏ ⲟⲩⲟ’’ϩ ̀ⲛⲥⲉⲙⲛⲉ: ϯⲙⲁϩ̀ⲥⲛⲟⲩϯ ̀ⲛ̀ⲥⲕⲏⲛⲏ: ⲡⲓ̀ⲁϩⲟ ̀ⲙ’̀ⲡⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">طوباك أنت يا مريم الحكيمة العفيفة القبة الثانية الكنز الروحى.</td>
        </tr>
        <tr id="table_19_row_1" class="south">
            <td class="english">The pure turtle-dove, who declared in our land, and brought to us, the Fruit of the Spirit.</td>
            <td class="coptic">Ϯϭⲣⲟⲙ̀ⲡϣⲁⲗ ̀ⲛⲕⲁⲑⲁⲣⲟⲥ: ⲑⲏ̀ⲉⲧⲁⲥⲙⲟⲩ’ϯ ‘’ϧⲉⲛ ⲡⲉⲛⲕⲁϩⲓ: ⲟⲩⲟ’’ϩ ⲁⲥ’ⲫⲓⲣⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ: ̀ⲛⲟⲩⲕⲁⲣⲡⲟⲥ ̀ⲛⲧⲉ Ⲡⲓ’̀ⲡⲛⲉⲩⲙⲁ.</td>
            <td class="arabic">اليمامة النقية التى نادت فى أرضنا وأينعت لنا ثمرة الروح.</td>
        </tr>
        <tr id="table_19_row_2" class="north">
            <td class="english">The Spirit of Comfort, came upon your Son, in the waters of the Jordan, of which Noah was a type.</td>
            <td class="coptic">Ⲡⲓ’̀ⲡⲛⲉⲩⲙⲁ ̀ⲙⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲫⲏ̀ⲉⲧⲁϥ̀ⲓ ̀ⲉϫⲉⲛ Ⲡⲉϣⲏⲣⲓ: ϩⲓϫⲉⲛ ⲛⲓⲙⲟⲩ ̀ⲛⲧⲉ Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ: ⲕⲁⲧⲁ ̀ⲡⲧⲩⲡⲟⲥ ̀ⲛⲚⲱ̀ⲉ.</td>
            <td class="arabic">الروح المعزى الذى حل على إبنك  فى مياه الاُردن كمثال نوح.</td>
        </tr>
        <tr id="table_19_row_3" class="south">
            <td class="english">For that dove has proclaimed, glad tidings to us, the peace of God, for mankind.</td>
            <td class="coptic">Ϯ’ϭⲣⲟⲙⲡⲓ ⲅⲁⲣ ̀ⲉⲧⲉ ̀ⲙⲙⲁⲩ: ̀ⲛⲑⲟⲥ ⲁⲥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲛ: ̀ⲛϯϩⲓⲣⲏⲛⲏ ̀ⲛⲧⲉ Ⲫϯ: ⲑⲏ̀ⲉⲧⲁⲥϣⲱⲡⲓ ϣⲁ ⲛⲓⲣⲱⲙⲓ..</td>
            <td class="arabic">لاُن تلك الحمامة هى بشرتنا بسلام الله الذى صار للبشر.</td>
        </tr>
        <tr id="table_19_row_4" class="north">
            <td class="english">Likewise you O our hope, the spiritual turtledove, have brought mercy unto us, carrying Him in your womb.</td>
            <td class="coptic">Ⲛⲑⲟ ϩⲱⲓ ̀ⲱ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: ϯϭⲣⲟⲙ̀ⲡϣⲁⲗ ̀ⲛⲛⲟ̀ⲧⲏⲉ: ̀ⲁⲣⲉ̀ⲓⲛⲓ ̀ⲙⲡⲛⲁⲓ ⲛⲁⲛ: ̀ⲁⲣⲉϥⲁⲓ ϧⲁⲣⲟϥ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ..</td>
            <td class="arabic">وأنت أيضاُ يا رجاءنا اليمامة العقلية أتيت لنا بالرحمة وحملته فى بطنك.</td>
        </tr>
        <tr id="table_19_row_5" class="south">
            <td class="english">He is Jesus, the begotten of the Father, He was born of you for us, setting free our race.</td>
            <td class="coptic">̀Ⲉⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ: ⲡⲓⲙⲓⲥⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ̀Ⲫⲓⲱⲧ: ⲁⲩⲙⲁⲥϥ ⲛⲁⲛ ̀ⲉⲃⲟⲗ ̀ⲛϧⲏϯ: ⲁϥⲉⲣ ⲡⲉⲛⲅⲉⲛⲟⲥ ̀ⲛⲣⲉⲙϩⲉ.</td>
            <td class="arabic">أي يسوع المولود من الآب ولد لنا منك وحرر جنسنا.</td>
        </tr>
        <tr id="table_19_row_6" class="north">
            <td class="english">Therefore let us declare, first with our hearts, then also with our tongues, proclaiming and saying.</td>
            <td class="coptic">Ⲫⲁⲓ ⲅⲁⲣ ⲙⲁⲣⲉⲛⲧⲁⲟⲩⲟϥ: ̀ⲉⲃⲟⲗϧⲉⲛ ⲡⲉⲛϩⲏⲧ ̀ⲛϣⲟⲣⲡ: ⲙⲉⲛⲉⲛⲥⲱⲥ ⲟⲛ ϧⲉⲛ ⲡⲉⲛⲕⲉⲗⲁⲥ: ⲉⲛⲱϣ  ̀ⲉⲃⲟⲗ ⲉⲛϫⲱ ̀ⲙⲙⲟⲥ.</td>
            <td class="arabic">فلنقل هذا من قلبنا أولآ. وبعد ذلك بلساننا أيضاً صارخين قائلين.</td>
        </tr>
        <tr id="table_19_row_7" class="south">
            <td class="english">O our Lord Jesus Christ, make for Yourself within us, a temple of Your Holy Spirit, glorifying You.</td>
            <td class="coptic">Ϫⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲙⲁⲑⲁⲙⲓ̀ⲟ ⲛⲁⲕ ̀ⲛ̀ϧⲣⲏⲓ ̀ⲛϧⲏⲧⲉⲛ:  ̀ⲛⲟⲩⲉⲣ’ⲫⲉⲓ ̀ⲛⲧⲉ Ⲡⲉⲕ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲉⲩϯⲇⲟⲍⲟⲗⲟⲅⲓ̀ⲁ ⲛⲁⲕ.</td>
            <td class="arabic">يا ربنا يسوع المسيح اجعل لك فينا هيكلا لروحك القدوس يعطيك تمجيداً.</td>
        </tr>
        <tr id="table_19_row_8" class="north">
            <td class="english">Hail to you O Virgin, the right and true Queen. Hail to the pride of our race, who bore to us Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ̀ⲱ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :  ϯⲟⲩⲣⲱ  ̀ⲙⲙⲏⲓ   ̀ⲛ̀ⲁⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ̀ⲡϣⲟⲩϣⲟⲩ ̀ⲛⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ̀ⲁⲣⲉ̀ϫⲫⲟ ⲛⲁⲛ ̀ⲛⲈⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        <tr id="table_19_row_9" class="south">
            <td class="english">We ask you to remember us, our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ  ̀ⲁⲣⲓⲡⲉⲛⲙⲉⲩ̀ⲓ : ̀ⲱ ϯ̀ⲡⲣⲟⲥⲧⲁⲧⲏⲥ ̀ⲉⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ  Ⲡⲓ̀Ⲭⲣⲓⲥⲧⲟⲥ : ̀ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ  ⲛⲁⲛ  ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
    </table>
    <table id="table_20" style="display: table;" title="Doxology for Archangel Michael">
        <caption id="caption_table_20" class="caption">Doxology for Archangel Michael
        <span class="arabic-caption">ذوكصولوجية رئيس الملائكة ميخائيل</span></caption>
        
            <tr id="table_20_row_0" class="north">
                <td class="english">Michael the head of the heavenly, he is the first, among the angelic hosts,
                    serving before the Lord.</td>
                <td class="coptic" >Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲛ̀ⲑⲟϥ ⲉⲧⲟⲓ
                    ⲛ̀ϣⲟⲣⲡϧⲉⲛ ⲛⲓⲧⲁⲝⲓⲥ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲉϥϣⲉⲙϣⲓ ⲙ̀ⲡⲉⲙⲑⲟ ⲙ̀ⲡ⳪.</td>
                <td class="arabic" >ميخائيل رئيس السمائيين هو الأول فى الطقوس
                    الملائكية يخدم أمام الرب.</td>
            </tr>
            <tr id="table_20_row_1" class="south">
                <td class="english">Wherefore God sends unto us, His mercy and His compassion, through the
                    supplications of Michael, the great archangel.</td>
                <td class="coptic" >Ϣⲁⲣⲉ Ⲫϯ ⲟⲩⲱⲣⲡ ⲛⲁⲛ: ⲛ̀ⲛⲉϥⲛⲁⲓ ⲛⲉⲙ
                    ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀ⲧⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.</td>
                <td class="arabic" >أن الله يرسل لنا مراحمه ورأفاته بسؤال
                    ميخائيل رئيس الملائكة العظيم.</td>
            </tr>
            <tr id="table_20_row_2" class="north">
                <td class="english">The harvest is perfected, through the prayers of Michael, for he is near God,
                    asking Him for us.</td>
                <td class="coptic" >Ϣⲁⲩϫⲱⲕ ⲉⲃⲟⲗ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲣⲡⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲉⲛⲧⲱⲃϩ
                    ⲙ̀Ⲙⲓⲭⲁⲏⲗ ϫⲉ ⲛ̀ⲑⲟϥ ⲉⲧϧⲉⲛⲧ ⲉϧⲟⲩⲛ ⲉⲪϯ: ⲉϥϯϩⲟ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ.</td>
                <td class="arabic" >وتكمل الأثمار بطلبات ميخائيل لأنه قريب إلى
                    الله يسأل عنا.</td>
            </tr>
            <tr id="table_20_row_3" class="south">
                <td class="english">All good honor, and every perfect gift, comes to us from on high, from the
                    Father of Light.</td>
                <td class="coptic" >Ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁⲛⲉⲩ: ⲛⲉⲙ ⲇⲱⲣⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϫⲏⲕ
                    ⲉⲃⲟⲗ ⲉⲩⲛⲏⲟⲩ ⲛⲁⲛ ⲉⲃⲟⲗ ⲙ̀ⲡ̀ϣⲱⲓ: ϩⲓⲧⲉⲛ ⲫⲓⲱⲧ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic" >كل عطية صالحة وكل موهبة تامة إنما تهبط لنا
                    من فوق من عند أبى الأنوار.</td>
            </tr>
            <tr id="table_20_row_4" class="north">
                <td class="english">Let us praise and glorify, and worship the Holy, and Coessential Trinity, who
                    endures forever.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛϩⲱⲥ ⲛ̀ⲧⲉⲛϯⲱⲟⲩ: ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲛ̀ϯⲧⲣⲓⲁⲥ
                    ⲉˉⲑˉⲩˉ ⲉⲧⲟⲓ ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ: ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic" >فلنسبح ونمجد ونسجد للثالوث المقدس المساوى
                    الدائم إلى الأبد.</td>
            </tr>
            <tr id="table_20_row_5" class="south">
                <td class="english">Intercede on our behalf, O the holy archangel, Michael the head of the heavenly,
                    that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                    ⲉˉⲑˉⲩˉ Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.${cross}</td>
                <td class="arabic" >إشفع فينا يارئيس الملائكة الطاهر ميخائيل
                    رئيس السمائيين ليغفر لنا خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_21" style="display: table;" title="Doxology for the Heavenly">
        <caption id="caption_table_21" class="caption">Doxology for the Heavenly
        <span class="arabic-caption">ذوكصولوجية السمائيين</span></caption>
        
            <tr id="table_21_row_0" class="north">
                <td class="english" >Seven archangels, praising as they stand,
                    before the Pantocrator, serving the hidden mystery.</td>
                <td class="coptic" >Ⲍ̅ ⲛ̀ⲁⲣⲭⲏ ⲁⲅⲅⲉⲗⲟⲥ : ⲥⲉⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ
                    ⲉⲩⲉⲣϩⲩⲙⲛⲟⲥ : ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : ⲉⲩϣⲉⲙϣⲓ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲧϩⲏⲡ.</td>
                <td class="arabic">سبعة رؤساء ملائكة وقوف يسبحون أمام الضابط الكل يخدمون السر الخفى.</td>
            </tr>
            <tr id="table_21_row_1" class="south">
                <td class="english" >Michael is the first, Gabriel is the
                    second, Rafael is the third, a symbol of the Trinity.</td>
                <td class="coptic" >Ⲙⲓⲭⲁⲏⲗ ⲡⲉ ⲡⲓϩⲟⲩⲓⲧ : Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲉ ⲡⲓⲙⲁϩ
                    ⲥ̀ⲛⲁⲩ: Ⲣⲁⲫⲁⲏⲗ ⲡⲉⲡⲓⲙⲁϩ ϣⲟⲙⲧ: ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ.</td>
                <td class="arabic">ميخائيل هو الأول. غبريال هو الثانى. رافائيل هو الثالث. كمثال الثالوث.</td>
            </tr>
            <tr id="table_21_row_2" class="north">
                <td class="english" >Suriel Sedakiel, Sarathiel and Ananiel,
                    the great and holy luminaries, entreating Him for the creation.</td>
                <td class="coptic" >Ⲥⲟⲩⲣⲓⲏⲗ Ⲥⲉⲇⲁⲕⲓⲏⲗ : Ⲥⲁⲣⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ :
                    ⲛⲁⲓⲛⲓϣϯ ⲛ̀ⲣⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉⲑⲟⲩⲁⲃ : ⲛⲏⲉⲧⲧⲱⲃϩ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲓⲥⲱⲛⲧ.</td>
                <td class="arabic">سوريال سداكيال سراتيال وآنانيال هؤلاء المنيرون العظماء الأطهار يطلبون منه عن
                    الخليقة</td>
            </tr>
            <tr id="table_21_row_3" class="south">
                <td class="english" >The Cherubim and Seraphim, the
                    thrones, dominions and powers, the four incorporeal creatures, carrying the throne of God.
                </td>
                <td class="coptic" >Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ
                    ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ : ⲡⲓϥ̀ⲧⲟⲩ ⲛ̀ⲍⲱⲟⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ ⲛ̀Ⲑⲉⲟⲥ.</td>
                <td class="arabic">الشاروبيم والسارافيم الكراسي والأرباب والقوات وال ٤ الحيوانات الغير المتجسدين
                    الحاملون مركبة الله</td>
            </tr>
            <tr id="table_21_row_4" class="north">
                <td class="english" >The twenty four presbyters, in the Church
                    of the firstborn, praise Him without ceasing, proclaiming and saying.</td>
                <td class="coptic" >Ⲡⲓϫⲟⲧ ϥ̀ⲧⲟⲩ ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ϧⲉⲛ
                    ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲓϣⲟⲣⲡ ⲙ̀ⲙⲓⲥⲓ : ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲙⲉⲧ ⲁⲑⲧⲙⲟⲩⲛⲕ : ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.
                </td>
                <td class="arabic">ال ٢٤ قسيساً في كنيسة الأبكار يسبحونه بلا فتورصارخين قائلين :</td>
            </tr>
            <tr id="table_21_row_5" class="south">
                <td class="english" >Holy God, heal the sick, Holy Mighty, O
                    Lord repose those who are asleep.</td>
                <td class="coptic" >Ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ :
                    ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ.</td>
                <td class="arabic">قدوس الله. المرضي إشفهم. قدوس القوى. الراقدين يارب نيحهم.</td>
            </tr>
            <tr id="table_21_row_6" class="north">
                <td class="english" >Holy Immortal, bless Your
                    inheritance, may Your mercy and peace, be a fortress unto Your people.</td>
                <td class="coptic" >̀ Ⲁⲅⲓⲟⲥ ̀ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲥ̀ⲙⲟⲩ
                    ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀ : ⲙⲁⲣⲉ ⲡⲉⲕⲛⲁⲓ ⲛⲉⲙ ⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲟⲓ ⲛ̀ⲥⲟⲃⲧ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ.</td>
                <td class="arabic">قدوس الذى لا يموت بارك ميراثك. ولتكن رحمتك وسلامك حصناً لشعبك.</td>
            </tr>
            <tr id="table_21_row_7" class="south">
                <td class="english" >Holy Holy, Holy O Lord of Hosts, heaven
                    and earth are full of, Your glory and honor.</td>
                <td class="coptic" >Ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ : ⲭ̀ⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ
                    ⲥⲁⲃⲁⲱⲑ : ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ̀.</td>
                <td class="arabic">قدوس قدوس قدوس رب الصاباؤوت. السماء والأرض مملوئتان من مجدك وكرامتك.</td>
            </tr>
            <tr id="table_21_row_8" class="north">
                <td class="english" >And when they say "Alleluia,&rdquo; the
                    heavenly respondsaying, "Holy Amen Alleluia, Glory be to our God."</td>
                <td class="coptic" >Ⲁⲩϣⲁⲛϫⲟⲥ ⲙ̀ⲡⲓ ⲁⲗⲗⲏⲗⲟⲓⲁ : ϣⲁⲣⲉ ⲛⲁⲛ ⲛⲓⲫⲏⲟⲩⲓ̀
                    ⲟⲩⲱϩ ⲙ̀ⲙⲱⲟⲩ : ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲙⲏⲛ ⲁⲗⲗⲏⲗⲟⲓⲁ : ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ.</td>
                <td class="arabic">إذا ما قالوا الليلويا يتبعهم السمائيون قائلين قدوس أمين الليلويا. المجد هو لإلهنا
                </td>
            </tr>
            <tr id="table_21_row_9" class="south">
                <td class="english" >Intercede on our behalf, O angelic
                    armies, and heavenly orders, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲓⲥⲧⲣⲁⲧⲓⲁ̀
                    ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر لنا خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_22" style="display: table;" title="Doxology for the Apostles">
        <caption id="caption_table_22" class="caption">Doxology for the Apostles
        <span class="arabic-caption">ذوكصولوجية الرسل</span></caption>
        
            <tr id="table_22_row_0" class="north">
                <td class="english" >Our Lord Jesus Christ, has chosen His
                    apostles,Peter and Andrew, John and James.</td>
                <td class="coptic" >Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲁϥⲥⲱⲧⲡ
                    ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲉ̀ⲧⲉ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲁⲛⲇ̀ⲣⲉⲁⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ.</td>
                <td class="arabic">الرب يسوع المسيح اختار رسله. وهم بطرس واندراوس. ويوحنا ويعقوب.</td>
            </tr>
            <tr id="table_22_row_1" class="south">
                <td class="english" >And the rest Philip and Matthew,
                    Bartholomew and Thomas, James the son of Alphaeus, and Simon the Canaanite.</td>
                <td class="coptic" >Ⲗⲟⲓⲡⲟⲛ Ⲫⲓⲗⲓⲡⲡⲟⲥ ⲛⲉⲙ Ⲙⲁⲑⲉⲟⲥ: Ⲃⲁⲣⲑⲟⲗⲟⲙⲉⲟⲥ
                    ⲛⲉⲙ Ⲑⲱⲙⲁⲥ : Ⲓⲁⲕⲱⲃⲟⲥ ⲛ̀ⲧⲉ Ⲁⲗⲫⲉⲟⲥ : ⲛⲉⲙ Ⲥⲓⲙⲱⲛ ⲡⲓⲕⲁⲛⲁⲛⲉⲟⲥ.</td>
                <td class="arabic">وفيلبس ومتى وبرثلماوس وتوما ويعقوب بن حلفي وسمعان القانوى.</td>
            </tr>
            <tr id="table_22_row_2" class="north">
                <td class="english" >Thaddeus and Matthias, Paul Mark and
                    Luke, and the rest of disciples, who followed our Savior.</td>
                <td class="coptic" >Ⲑⲁⲇⲇⲉⲟⲥ ⲛⲉⲙ Ⲙⲁⲧⲑⲓⲁⲥ: Ⲡⲁⲩⲗⲟⲥ ⲛⲉⲙ
                    Ⲙⲁⲣⲕⲟⲥ ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ : ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ : ⲛⲏⲉⲧⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
                <td class="arabic">وتداوس ومتياس وبولس ومرقس ولوقا. وبقية التلاميذ الذين تبعوا مخلصنا.</td>
            </tr>
            <tr id="table_22_row_3" class="south">
                <td class="english" >Matthias who was chosen, in place of
                    Judas, all of them and the rest, followed the Master.</td>
                <td class="coptic" >Ⲙⲁⲧⲑⲓⲁⲥ ⲫⲏⲉⲧ̀ⲁϥϣⲱⲡⲓ : ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ Ⲓⲟⲩⲇⲁⲥ
                    : ⲛⲉⲙ ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲡⲥ̀ⲉⲡⲓ : ⲛⲏⲉ̀ⲧⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲇⲉⲥⲡⲟⲧⲁ.</td>
                <td class="arabic">متياس الذى صار عِوضاً عن يهوذا. وكامل وبقية التلاميذ الذين تبعوا السيد</td>
            </tr>
            <tr id="table_22_row_4" class="north">
                <td class="english" >Their voices went forth, throughout the
                    face of the whole earth, and their words have reached, the ends of the world.</td>
                <td class="coptic" >Ⲁⲡⲟⲩϧ̀ⲣⲱⲟⲩ ϣⲉⲛⲁϥ ⲉ̀ⲃⲟⲗ: ϩⲓϫⲉⲛ ⲡ̀ϩⲟ
                    ⲙ̀ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ : ⲟⲩⲟϩ ⲛⲟⲩⲥⲁϫⲓ ⲁⲩⲫⲟϩ : ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">خرجت أصواتهم إلي وجه الأرض كلها. وبلغ كلامهم إلي أقطار المسكونة.</td>
            </tr>
            <tr id="table_22_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O my
                    lordsand fathers the Apostles, and the seventy two disciples, that He may forgive us
                    our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲛⲁ⳪
                    ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ⲡⲓϣ̀ⲃⲉ ⲥ̀ⲛⲁⲩ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الرسل والاثنان والسبعون تلميذاً ليغفر لنا
                    خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_23" style="display: table;" title="Doxology for St Mark">
        <caption id="caption_table_23" class="caption">Doxology for St Mark
        <span class="arabic-caption">ذوكصولوجية مرقس الرسول</span></caption>
        
            <tr id="table_23_row_0" class="north">
                <td class="english" >O Mark the Apostle, and the
                    Evangelist, the witness of the passion: of the Only-Begotten God.</td>
                <td class="coptic" >Ⲙⲁⲣⲕⲟⲥ
                    ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲡⲓⲙⲉⲑⲣⲉ
                    ϧⲁ ⲛⲓⲙ̀ⲕⲁⲩϩ: ⲛ̀ⲧⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀ⲛⲟⲩϯ.</td>
                <td class="arabic">يا مرقس الرسول والإنجيلى الشاهد لآلام الإله الوحيد</td>
            </tr>
            <tr id="table_23_row_1" class="south">
                <td class="english" >You have come and enlightened us,
                    through your Gospel, and taught us the Father and the Son, and the Holy Spirit.</td>
                <td class="coptic" >Ⲁⲕⲓ̀ ⲁⲕⲉⲣⲟⲩⲱⲓⲛⲓ
                    ̀ⲉ̀ⲣⲟⲛ: ϩⲓⲧⲉⲛ
                    ⲡⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ:
                    ⲁⲕ̀ⲧ̀ⲥⲁⲃⲟⲛ ⲙ̀̀ Ⲫⲓⲱⲧ ⲛⲉⲙ ̀ Ⲡϣⲏⲣⲓ : ⲛⲉⲙ
                    Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">أتيتَ وأنرتَ لنا بإنجيلك وعلمتنا الآب والابن والروح القدس</td>
            </tr>
            <tr id="table_23_row_2" class="north">
                <td class="english" >You brought us out of the darkness,
                    into the true Light,feeding usthe Bread of Life, that came down from heaven.
                </td>
                <td class="coptic" >Ⲁⲕⲉⲛⲧⲉⲛ ̀ⲉ̀ⲃⲟⲗ
                    ϧⲉⲛ ⲡ̀ⲭⲁⲕⲓ: ⲉ̀ϧⲟⲩⲛ
                    ⲉ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ: ⲁⲕⲧⲉⲙⲙⲟⲛ
                    ⲙ̀ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛ&rsquo;:
                    ̀ⲉ̀ⲧⲁϥ̀ⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ
                    ⲧ̀ⲫⲉ.</td>
                <td class="arabic">وأخرجتنا من الظلمة إلى النور الحقيقى. وأطعمتنا خبز الحياة الذى نزلَ من السماء
                </td>
            </tr>
            <tr id="table_23_row_3" class="south">
                <td class="english" >All the tribes of the earth, were
                    blessed through you, and your words have reached, the ends of the world.</td>
                <td class="coptic" >Ⲁⲩϭⲓⲥ̀ⲙⲟⲩ
                    ⲛ̀̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲕ: ⲛ̀ϫⲉ ⲛⲓⲫⲩⲗⲏ
                    ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲟⲩⲟϩ ⲛⲉⲕⲥⲁϫⲓ ⲁⲩⲫⲟϩ: ϣⲁ
                    ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">تباركَت بكَ كل قبائل الأرض. واقوالكَ بلغت الي اقطار المسكونة</td>
            </tr>
            <tr id="table_23_row_4" class="north">
                <td class="english" >Hail to you O martyr, Hail to the
                    Evangelist, Hail to the apostle, Mark the Beholder of God.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ
                    ⲛⲁⲕ ̀ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ:ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ:
                    ⲭⲉⲣⲉ ⲡⲓ̀ⲁ̀ⲡⲟⲥⲧⲗⲟⲥ: Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉ̀ⲱ̀ⲣⲓⲙⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد السلام للإنجيلى.السلام للرسول. مرقس ناظر الإله</td>
            </tr>
            <tr id="table_23_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O
                    Beholder of God and Evangelist,Mark the Apostle: that he may forgive us our sins.
                    ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ
                    : ⲱ̀ ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ
                    ̀ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲙⲁⲣⲕⲟⲥ
                    ⲡⲓ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلب من الرب عنا يا ناظر الإله الإنجيلى مرقس الرسول ليغفر لنا خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_24" style="display: table;" title="Doxology for St George">
        <caption id="caption_table_24" class="caption">Doxology for St George
        <span class="arabic-caption">ذوكصولوجية مار جرجس</span></caption>
        
            <tr id="table_24_row_0" class="north">
                <td class="english" >Saint George completed, seven whole
                    years, beingjudged daily, by seventy lawless kings.</td>
                <td class="coptic" >Ⲍ̀ˉ̅ ⲛ̀ⲣⲟⲙⲡⲓ
                    ⲁϥϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ : ⲛ̀ϫⲉ
                    ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉ̀ⲣⲉ ⲡⲓϣ̀ⲃⲉ
                    ⲛ̀ⲟⲩⲣⲟ ⲛ̀ⲁ̀ⲛⲟⲙⲟⲥ : ⲉⲩϯϩⲁⲡ ⲉ̀ⲣⲟϥ
                    ⲙ̀ⲙⲏⲛⲓ.</td>
                <td class="arabic">سبع سنين أكملها القديس جيؤرجيوس. و ٧٠ ملكاً منافقين يحكمون عليه كل يوم.</td>
            </tr>
            <tr id="table_24_row_1" class="south">
                <td class="english" >They could not change his mind, nor his
                    upright faith, nor his great love, for Christ the King.</td>
                <td class="coptic" >˙Ⲙⲡⲟⲩ ϣ̀ⲫⲱⲛϩ ⲙ̀ⲡⲉϥ ⲗⲟⲅⲓⲥⲙⲟⲥ : ⲟⲩⲇⲉ ⲡⲉϥⲛⲁϩϯ
                    ⲉⲧⲥⲟⲩⲧⲱⲛ : ⲟⲩⲇⲉ ⲧⲉϥⲛⲓϣϯ ⲛ̀ⲁ̀ⲅⲁⲡⲏ : ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">ولم يقدروا أن يميلوا أفكاره ولا إيمانه المستقيم ولا عِظم محبته فى الملك المسيح.
                </td>
            </tr>
            <tr id="table_24_row_2" class="north">
                <td class="english" >He was singing with David saying, "All
                    the nations surrounded me: but in the Name of Jesus My Lord, I took revenge on them.</td>
                <td class="coptic" >Ⲛⲁϥⲉⲣⲯⲁⲗⲓⲛ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ : ϫⲉ ⲁⲩⲕⲱϯ ⲉ̀ⲣⲟⲓ ⲛ̀ϫⲉ
                    ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ : ⲁⲗⲗⲁ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲛ̀ Ⲓⲏⲥⲟⲩⲥ Ⲡⲁⲛⲟⲩϯ : ⲁⲓϭⲓ ⲙ̀ⲡⲁϭⲓ ⲙ̀ⲡ̀ϣⲓϣ ⲛⲉⲙⲱⲟⲩ.</td>
                <td class="arabic">وكان يرتل مع داود قائلاً أحاط بي جميع الأمم لكن باسم يسوع إلهى انتقمت منهم</td>
            </tr>
            <tr id="table_24_row_3" class="south">
                <td class="english" >For great is your honor, O George my lord
                    and prince, for Christ rejoices inyou, in the heavenly Jerusalem.</td>
                <td class="coptic" >Ⲟⲩ ⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲉⲕⲧⲁⲓⲟ̀ : ⲱ̀Ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ
                    Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉ̀ⲣⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲣⲁϣⲓ ⲛⲉⲙⲁⲕ ϧⲉⲛ Ⲓⲏⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ.</td>
                <td class="arabic">عظيمة هي كرامتكَ يا سيدى الملك جيؤرجيوس المسيح يفرح معك فى أورشليم السمائية</td>
            </tr>
            <tr id="table_24_row_4" class="north">
                <td class="english" >Hail to you O martyr, Hail to the
                    courageous hero, Hail to the struggle-mantled, George my lord and prince.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ
                    ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد سيدى الملك
                    جيؤرجيوس.</td>
            </tr>
            <tr id="table_24_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O
                    prize-bearer andmartyr, George my lord and prince, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ :
                    ⲱ̀ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲏⲣⲟⲥ : Ⲡⲁ⳪ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلب من الرب عنا. أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر لنا خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_25" style="display: table;" title="Doxology St Philopatir Mercorios">
        <caption id="caption_table_25" class="caption">Doxology for St Philopatir Mercorios
        <span class="arabic-caption">ذوكصولوجية مرقوريوس ابوسيفين</span></caption>
        
            <tr id="table_25_row_0" class="north">
                <td class="english" >Philopateer Mercurius, the strong one of
                    Christ, put on the helmet, and the whole armor of faith.</td>
                <td class="coptic" >Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ :ⲡⲓⲣⲉⲙⲛϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ:
                    ⲁϥϯϩⲓⲱⲧϥ ⲛϯⲡⲁⲛⲟⲡⲗⲓⲁ: ⲛⲉⲙ ⲡⲓϧⲱⲕ ⲧⲏⲣϥ ⲛⲧⲉ ⲡⲓⲛⲁϩϯ.</td>
                <td class="arabic">محب الآب مرقوريوس: القوي بالمسيح: لبس الخوذة: وكل سلاح الإيمان.</td>
            </tr>
            <tr id="table_25_row_1" class="south">
                <td class="english" >And he took in his hand, the two-edged
                    sword, which the angel of the Lord, placed in his right hand.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥϭⲓ ϧⲉⲛ ⲧⲉϥϫⲓϫ: ⲛϯⲥⲏϥⲓ ⲛⲣⲟ Ⲃ: ⲏⲏⲉⲧⲁ
                    ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲧⲉ Ⲡⲟⲥ ⲧⲁϫⲣⲟⲥ: ϧⲉⲛ ⲧⲉϥϫⲓϫ ⲛⲡⲟⲩⲓⲛⲁⲙ.</td>
                <td class="arabic">وأخذ بيده السيف: ذا الحدين: الذي ثبته ملاك الرب: في يده اليمنى.</td>
            </tr>
            <tr id="table_25_row_2" class="north">
                <td class="english" >He went to the war, with the strength of
                    Christ, he smote the barbarians, with great wounds.</td>
                <td class="coptic" >Ⲁϥϣⲉⲛⲁϥ ⲉⲡⲓⲡⲟⲗⲉⲙⲟⲥ: ϧⲉⲛ ϯϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ:
                    ⲁϥϣⲁⲣⲓ ⲉⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛⲉⲣϧⲟⲧ.</td>
                <td class="arabic">مضى إلى الحرب: بقوة المسيح: وقتل البربر: بجراحات عظيمة.</td>
            </tr>
            <tr id="table_25_row_3" class="south">
                <td class="english" >He refused the earthly, and sought after
                    the heavenly, and he fought in the stadium, of martyrdom.</td>
                <td class="coptic" >Ⲁϥⲉⲣⲛⲩⲙⲫⲓⲛ ⲉⲃⲟⲗ ϩⲁ ⲛⲁ ⲡⲕⲁϩⲓ: ⲟⲩⲟϩ ⲁϥⲕⲱϯ
                    ⲉⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓⲥⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲏⲣⲟⲥ.</td>
                <td class="arabic">تيقظ عن الأرضيات: وطلب السمائيات: وتشجع في: ميدان الشهادة.</td>
            </tr>
            <tr id="table_25_row_4" class="north">
                <td class="english" >He embarrassed Decius, the impious
                    emperor, with his great patience, through the pain of the sufferings.</td>
                <td class="coptic" >Ⲁϥϯⲓϣⲓⲡⲓ ⲛⲆⲉⲕⲓⲟⲥ: ⲡⲓⲟⲩⲣⲟ ⲛⲁⲥⲉⲃⲏⲥ: ϩⲓⲧⲉⲛ
                    ⲧⲉϥⲛⲓϣϯ ⲛϩⲩⲡⲟⲙⲟⲛⲏ: ⲛⲉⲛ ⲡϧⲓⲥⲓ ⲛⲧⲉ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ.</td>
                <td class="arabic">أفضح داكيوس: الملك المنافق: بصبره العظيم: وتعب العذابات.</td>
            </tr>
            <tr id="table_25_row_5" class="south">
                <td class="english" >With this he wore the unfading crown, of
                    martyrdom, he celebrated with all the saints, in the land of the living.</td>
                <td class="coptic" >Ϧⲉⲛ ⲛⲁⲓ ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙⲡⲓⲭⲗⲟⲙ ⲛⲁⲧⲗⲱⲙ: ⲛⲧⲉ
                    ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁϥⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏⲉⲏⲩ ⲧⲏⲡⲟⲩ: ϧⲉⲛ ⲧⲭⲱⲡⲁ ⲛⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.</td>
                <td class="arabic">وبهذا لبس إكليل الشهادة: غير المضمحل: وعيَّد مع جميع القديسين: في كورة الأحياء.
                </td>
            </tr>
            <tr id="table_25_row_6" class="north">
                <td class="english" >Hail to you O martyr: hail to the
                    courageous hero: hail to the struggle-mantled: Philopateer Mercurius.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ
                    ⲛⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد: السلام للشجاع البطل: السلام للمجاهد: محب الآب مرقوريوس.
                </td>
            </tr>
            <tr id="table_25_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf: O
                    struggle mantled martyr: Philopateer Mercurius: that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀
                    ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلب من الرب عنا: أيها الشهيد المجاهد: محب الآب مرقوريوس: ليغفر لنا خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_26" style="display: table;" title="Doxology for St Mina">
        <caption id="caption_table_26" class="caption">Doxology for St Mina
        <span class="arabic-caption">ذوكصولوجية مارمينا</span></caption>
        
            <tr id="table_26_row_0" class="north">
                <td class="english">What shall it profit a man, if he gains the whole world, and loses his soul,
                    this would be the life of vanity.</td>
                <td class="coptic" >Ⲉϣⲱⲡ ⲟⲩⲛ ⲛ̀ⲧⲉ ⲡⲓⲣⲱⲙⲓ ϫⲉⲙϩⲏⲟⲩ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ
                    ⲧⲏⲣϥ ⲛ̀ⲧⲉϥⲟ̀ⲥⲓ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ  ⲟⲩ ⲡⲉ ⲡⲁⲓ ⲱⲛ&rsquo;&rsquo;ϧ ⲛⲉ̀ⲫⲗⲏⲟⲩ.</td>
                <td class="arabic" >إذا ربح الإنسان العالم كله وخسر نفسه فما
                    هى هذه الحياة الباطلة.</td>
            </tr>
            <tr id="table_26_row_1" class="south">
                <td class="english">The saint Abba Mina, heard the Divine voice, and has forsaken the whole world,
                    and its corrupt glory.</td>
                <td class="coptic" >Ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ ⲁϥⲥⲱⲧⲉⲙ ⲛ̀ⲥⲁ ϯⲥ̀ⲙⲏ ⲛ̀ⲛⲟⲩϯ
                    ⲁϥⲭⲱ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲥⲱϥ  ⲛⲉⲙ ⲡⲉϥⲱⲟⲩ ⲉⲑⲛⲁⲧⲁⲕⲟ.</td>
                <td class="arabic" >الفديس آبا مينا سمع الصوت الإلهى وترك عنه
                    العالم كله ومجده الفاسد.</td>
            </tr>
            <tr id="table_26_row_2" class="north">
                <td class="english">He gave his soul unto death, and his flesh to the fire, and received great
                    sufferings, for the Son of the Living God.</td>
                <td class="coptic" >Ⲁϥϯ ⲛ̀ⲧⲉϥⲯⲏⲭⲏ ⲉ̀ⲫ̀ⲙⲟⲩ : ⲛⲉⲙ ⲡⲉϥⲥⲱⲙⲁ
                    ⲉ̀ⲡⲓⲭ̀ⲣⲱⲙ: ⲁϥϣⲉⲡ ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲃⲁⲥⲁⲛⲟⲥ ⲉⲑⲃⲉ ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲉⲧⲟⲛϧ.</td>
                <td class="arabic" >وبذل نفسه للموت وجسده للنار وقبل عذابات
                    عظيمة لأجل إبن الله الحى.</td>
            </tr>
            <tr id="table_26_row_3" class="south">
                <td class="english">Therefore our Savoir, lifted him to His kingdom, and granted him the good
                    things, which an eye has not seen.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲠⲉⲛⲥⲱⲧⲏⲣ ⲟⲗϥ ⲉϧⲟⲩⲛ ⲉ̀ⲧⲉϥ
                    ⲙⲉⲧⲟⲩⲣⲟ ⲁϥϯ ⲛⲁϥ ⲛ̀ⲛⲓⲁⲅⲁⲑⲟⲛ  ⲛⲏⲉⲧⲉ ⲙ̀ⲡⲉⲃⲁⲗ ⲛⲁⲩ ⲉⲣⲱⲟⲩ.</td>
                <td class="arabic" >فلهذا رفعه مخلصنا إلى ملكوته وأعطاه الحياة
                    التى لم تراها عين.</td>
            </tr>
            <tr id="table_26_row_4" class="north">
                <td class="english">Hail to you O martyr, Hail to the courageous hero, Hail to the struggle-mantled,
                    the saint Abba Mena.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ
                    ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ⲛ̀ⲧⲉ ⲛⲓⲫⲁⲓⲁⲧ.</td>
                <td class="arabic" >السلام لك أيها الشهيد السلام للشجاع
                    المجاهد السلام للابس الجهاد آبا مينا البياضي.</td>
            </tr>
            <tr id="table_26_row_5" class="south">
                <td class="english">Pray to the Lord on our behalf: O struggle-mantled martyr, the saint Abba Mena,
                    that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡ⳪ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ ⲱ ⲡⲓⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀⳥
                    ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ  ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.${cross}</td>
                <td class="arabic" >أطلب من الرب عنا أيها الشهيد المجاهد آبا
                    مينا البياضى ليغفر لنا خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_27" style="display: table;" title="Doxology for St Anthony the Great">
        <caption id="caption_table_27" class="caption">Doxology for St Anthony the Great
        <span class="arabic-caption">ذوكصولوجية الانبا انطونيوس</span></caption>
        
            <tr id="table_27_row_0" class="north">
                <td class="english" >Take out from your hearts, the thoughts
                    of evil, and the pretentious images, that darken the mind.</td>
                <td class="coptic" >Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ
                    ϯⲭⲁⲕⲓⲁ̀: ⲛⲉⲙ ⲛⲓⲙⲉⲩⲓ̀ ⲉⲧϣⲉⲃϣⲱⲃ: ⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲛⲟⲩⲥ ⲛ̀ⲭⲁⲕⲓ.</td>
                <td class="arabic">انزعوا من قلوبكم افكار الشر و الظنون الخداعة التى تظلم العقل.</td>
            </tr>
            <tr id="table_27_row_1" class="south">
                <td class="english" >Comprehend with thought, of the great
                    miracles, of our blessed father, my great lord Abba Antony.</td>
                <td class="coptic" >Ⲁⲣⲓⲛⲟⲓⲛ ϧⲉⲛ ⲟⲩϯϩ̀ⲑⲏϥ: ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲧⲱⲙⲁ
                    ⲉⲧϭⲟⲥⲓ: ⲛ̀ⲧⲉ ⲡⲉⲛⲙⲁⲕⲁⲣⲓⲟⲥ ⲛ̀ⲓⲱⲧ: ⲡⲁ⳪ ⲡⲓⲛⲓϣϯ Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ.</td>
                <td class="arabic">تفهموا بتأمل الى المعجزات العالية التي لأبينا الطوباوى سيدى العظيم انبا انطونيوس
                </td>
            </tr>
            <tr id="table_27_row_2" class="north">
                <td class="english" >This is he who became our guide, and
                    harbor for salvation, he invited us with joy, to the eternal life.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ϭⲁⲩⲙⲱⲓⲧ: ⲛ̀ⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ
                    ⲡⲓⲟⲩϫⲁⲓ: ⲁϥⲑⲱϩⲉⲙ ⲙ̀ⲙⲟⲛ ϧⲉⲛ ⲟⲩⲉ̀ⲣⲟⲩⲱⲧ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">هذا الذى صار لنا مرشداً وميناء خلاص ودعانا بفرح الي الحياة الابدية.</td>
            </tr>
            <tr id="table_27_row_3" class="south">
                <td class="english" >The incense of his virtues, delighted our
                    souls, like the blossomed aroma, in the Paradise.</td>
                <td class="coptic" >Ⲁⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ ⲛ̀ⲧⲉ ⲛⲉϥⲁⲣⲉⲧⲏ: ϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ
                    ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲁⲣⲱⲙⲁⲧⲁ: ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
                <td class="arabic">بخور فضائله اعطة فرح لنفوسنا مثل العنبر المزهر فى الفردوس.</td>
            </tr>
            <tr id="table_27_row_4" class="north">
                <td class="english" >Let us truly be confirmed, in the upright
                    faith, of the great Antony, proclaiming and saying.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲉⲧⲥⲟⲩⲧⲱⲛ ϧⲉⲛ
                    ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉ̀ⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
                <td class="arabic">فلنثبت بالحقيقة فى الايمان المستقيم الذى للعظيم انطونيوسصارخين قائلين:</td>
            </tr>
            <tr id="table_27_row_5" class="south">
                <td class="english" >&ldquo;I sought and I found, I asked and
                    I was given, I knocked and I believed, that it will be opened to me.&rdquo;</td>
                <td class="coptic" >Ϫⲉ ⲁⲓⲕⲱϯ ⲟⲩⲟϩ ⲁⲓϫⲓⲙⲓ: ⲁⲓⲉ̀ⲣⲉⲧⲓⲛ ⲟⲩⲟϩ ⲁⲓϭⲓ:
                    ⲁⲓⲕⲱⲗϩ ⲟⲩⲟϩ ϯⲛⲁϩϯ: ϫⲉ ⲥⲉⲛⲁⲁ̀ⲟⲩⲱⲛ ⲛⲏⲓ.</td>
                <td class="arabic">طلبت فوجدت. سألت فأخذت. قرعت و أؤمن انه سيفتح لى.</td>
            </tr>
            <tr id="table_27_row_6" class="north">
                <td class="english" >Hail to our father Antony, the light of
                    monasticism, hail to our father Abba Paul, the beloved of Christ.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲡⲓϧⲏⲃⲥ ⲛ̀ⲧⲉ
                    ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
                <td class="arabic">السلام لأبينا انطونيوس مصباح الرهبنة السلام لأبينا انبا بولا حبيب المسيح.</td>
            </tr>
            <tr id="table_27_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf, O my
                    masters and fathers who loved their children, Abba Antony and Abba Paul, that He may forgive us
                    our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀ⲡ̀̅ϭ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ ⲛⲁ⳪ ⲛ̀ⲓⲟϯ
                    ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">اطلبا من الرب عنا يل سيدى الأبوين محبي أولادهما انبا انطونيوس و انبا بولا
                    ليغفر...${cross}</td>
            </tr>
        
    </table>
    <table id="table_28" style="display: table;" title="Doxology St Athanasius the Apostolic">
        <caption id="caption_table_28" class="caption">Doxology for St Athanasius the Apostolic
        <span class="arabic-caption">ذوكصولوجية اثناسيوس الرسولي</span></caption>
        
            <tr id="table_28_row_0" class="north">
                <td class="english" >O you who are strong in managing the
                    ship, O you the distinguished fighter, who is victorious in the wars, the luminous lamp.</td>
                <td class="coptic" >Ⲡⲓⲕⲩⲃⲉⲣⲛⲏⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲡⲓⲣⲉϥⲙⲓϣⲓ
                    ⲛ̀ⲕⲁⲗⲱⲥ: ⲡⲓⲣⲉϥϭⲣⲟ ϧⲉⲛ ⲛⲓⲃⲱⲧⲥ: ⲡⲓϧⲏⲃⲥ ⲉⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic">أيها المدبر القوى لدفة السفينة: أيها المقاتل البارع: أيها الظافر فى المعارك: أيها
                    المصباح المنير.</td>
            </tr>
            <tr id="table_28_row_1" class="south">
                <td class="english" >The leader of Orthodoxy, is Athanasius
                    the apostolic, the instructor of the eloquent sheep, That is for Christ.</td>
                <td class="coptic" >Ⲡⲓⲕⲏⲣⲩⲝ ⲛ̀ⲧⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: ⲡⲉ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ
                    ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲣⲉϥϯⲥ̀ⲃⲱ ⲛ̀ⲧⲉ ⲡⲓⲟϩⲓ: ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲬⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">رائد الارثوذكسية: هو أثناسيوس الرسولى: و معلم القطيع الناطق: الذى للمسيح.</td>
            </tr>
            <tr id="table_28_row_2" class="north">
                <td class="english" >Your truthful teachings, pierced the
                    hearts of the heretics, like a double-edged sword, by the power of the Trinity.</td>
                <td class="coptic" >Ⲁ ⲛⲉⲕⲇⲟⲅⲙⲁ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲙⲓϣⲓ ⲙ̀ⲡ̀ϩⲏⲧ
                    ⲛ̀ⲛⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲥⲏϥⲓ ⲛ̀ⲣⲟ ̅ⲃ: ϩⲓⲧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ.</td>
                <td class="arabic">تعاليمك القويمة نفذت فى قلوب الهراطقة مثل سيف ذى حدين بقوة الثالوث.</td>
            </tr>
            <tr id="table_28_row_3" class="south">
                <td class="english" >Every knee worshiped the Lord, and every
                    tongue praised Him, The Glory of God was announced, and filled the entire universe.</td>
                <td class="coptic" >Ⲁ ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲕⲱⲗϫ ⲙ̀ⲡ̅ϭ̅ⲥ: ⲁ ⲗⲁⲥ ⲛⲓⲃⲉⲛ
                    ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲁ ⲡ̀ⲱⲟⲩ ⲟⲩⲱϣⲥ ⲉ̀ⲃⲟⲗ: ⲁϥⲙⲟϩ ⲙ̀ⲡ̀ϩⲟ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">كل ركبة جثت للرب: و كل لسان سبحه: و مجد الله ذاع: و ملأ وجه المسكونة.</td>
            </tr>
            <tr id="table_28_row_4" class="north">
                <td class="english" >We therefore magnify You, along with
                    David the prophet, For You are the priest forever, on the order of Melchizedek.</td>
                <td class="coptic" >Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ
                    Ⲇⲁⲩⲓⲇ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉⲛⲉϩ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
                <td class="arabic">إننا هكذا نعظمك: مع المرتل داود:فإنك انت الكاهن الى الابد: على طقس ملكيصادق</td>
            </tr>
            <tr id="table_28_row_5" class="south">
                <td class="english" >Hail to the great patriarch, our father
                    the saint abba Athanasius, whose holy teachings, enlightened our minds.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲓⲛⲓϣϯ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲑⲟⲩⲁⲃ
                    ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ: ⲫⲏ ⲉⲧⲁ ⲛⲉϥⲥ̀ⲃⲱⲟⲩⲓ̀: ⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲥ.</td>
                <td class="arabic">السلام للبطريرك العظيم: ابينا القديس الانبا اثناسيوس:يا من تعاليمه المقدسة انارت
                    عقولنا.</td>
            </tr>
            <tr id="table_28_row_6" class="north">
                <td class="english" >Blessed are you indeed, Our saintly
                    father the patriarch, Saint Athanasius the apostolic, beloved of Christ.</td>
                <td class="coptic" >Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
                    ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
                <td class="arabic">مبارك انت بالحقيقة: ايها الاب القديس البطريرك: انبا اثناسيوس الرسولى: حبيب المسيح
                </td>
            </tr>
            <tr id="table_28_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf, our
                    saintly father the patriarch, Saint Athanasius the apostolic, they He may forgive us our sins.
                    ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀ⲡ̀̅ϭ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                    ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲕⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">اطلب من الرب عنا: ايها الاب القديس البطريرك: انبا أثناسيوس الرسولى: ليغفر لنا
                    خطايانا.${cross}</td>
            </tr>
        
    </table>
    <table id="table_28.5" style="display: table;" title="Conclusion of the Doxologies">
        <caption id="caption_table_28.5" class="caption">Conclusion of the Doxologies
        <span class="arabic-caption">ختام الذوكصولوجيات</span></caption>
        
            <tr id="table_28.5_row_0" class="north">
                <td class="english" >Watch over us, from on high where you
                    dwell, O Lady of us all, the Ever-virgin theotokos.</td>
                <td class="coptic" >Ϣⲱⲡⲓ ⲛ̀ⲑⲟ ⲉ̀ⲣⲉⲥⲟⲙⲥ ⲉ̀ϫⲱⲛ : ϧⲉⲛ ⲛⲓⲙⲁ ⲉⲧϭⲟⲥⲓ
                    ⲉ̀ⲧⲉⲣⲉⲭⲏ ⲛ̀ϧⲏⲧⲟⲩ : ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
                <td class="arabic">كونى أنت ناظرة علينا فى المواضع العالية التى أنت كائنة فيها. يا سيدتنا كلنا والدة
                    الإله العذراء كل حين.</td>
            </tr>
            <tr id="table_28.5_row_1" class="south">
                <td class="english" >Ask of Him whom you have born, our Good
                    Savior, to take away our troubles, and grant us His peace.</td>
                <td class="coptic" >Ⲙⲁϯϩⲟ ⲙ̀ⲫⲏⲉ̀ⲧⲁⲣⲉⲙⲁⲥϥ : Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ
                    : ⲛ̀ⲧⲉϥⲱ̀ⲗⲓ ⲛ̀ⲛⲁⲓϧⲓⲥⲓ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ : ⲛ̀ⲧⲉϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉϥϩⲓⲣⲏⲛⲏ.</td>
                <td class="arabic">إسألى الذى ولدته مخلصنا الصالح أن يرفع عنا هذه الأتعاب ويقرر لنا سلامه.</td>
            </tr>
            <tr id="table_28.5_row_2" class="north">
                <td class="english" >Hail to you O Virgin, the right and true
                    Queen, Hail to the pride of our race, whobore to us Emmanuel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ
                    ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا
                    عمانوئيل.</td>
            </tr>
            <tr id="table_28.5_row_3" class="south">
                <td class="english" >We ask you remember us, O our
                    faithfuladvocate, before our Lord Jesus Christ, that he may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        
    </table>
</div>

<div class="section" id="section_8" title="The Creed - Tenouosht">
    <table id="table_29" style="display: table;" title="The Creed">
        <caption id="caption_table_29" class="caption">Introduction to the Creed
        <span class="arabic-caption">مقدمة قانون الإيمان</span></caption>
        
        <tr id="table_29_row_0" class="text">
            <td class="english">We exalt you, the Mother of the true Light. We glorify you, O Saint, the Theotokos, for you brought forth unto us the Savior of the whole world; He came and saved our souls.</td>
            <td class="arabic">نعظمك يا أم النور الحقيقي، ونمجدك أيتها العذراء القديسة، والدة الإله، لأنك ولدت لنا مخلص العالم، أتى وخلص نفوسنا.</td>
        </tr>
        <tr id="table_29_row_1" class="text">
            <td class="english">Glory to You, our Master, our King, Christ, the pride of the apostles, the crown of the martyrs, the joy of the righteous, the firmness of the churches, the forgiveness of sins.</td>
            <td class="arabic">المجد لكَ يا سيدنا وملكنا المسيح، فخر الرسل، إكليل الشهداء تهليل الصديقين، ثبات الكنائس، غفران الخطايا.</td>
        </tr>
        <tr id="table_29_row_2" class="text">
            <td class="english">We proclaim the Holy Trinity in One Godhead. We worship Him. We glorify Him. Lord have mercy. Lord have mercy. Lord bless. Amen. </td>
            <td class="arabic">نبشر بالثالوث القدوس، لاهوت واحد، نسجد له ونمجده. يا رب ارحم. يا رب ارحم. يا رب بارك. أمين.</td>
        </tr>
    </table>
    <table id="table_30" style="display: table;" title="The Creed">
        <caption id="caption_table_30" class="caption">The Creed
        <span class="arabic-caption">قانون الإيمان</span></caption>
        
        <tr id="table_30_row_0" class="intro">
            <td class="english">Holy Synod Decision (06/02/2001)</td>
            <td class="arabic">قرار المجمع المقدس (06/02/2001)</td>
        <tr id="table_30_row_2" class="commentary">
            <td class="english">Meeting Date: 06/02/2001
                - The Holy Synod decided NOT to omit any part of the Orthodox Creed during anytime of the year. As for the hymns, they are the ones that change according to the season. This is because it is not lawful to omit (cross out) any part of the Orthodox Creed which was put forth by the fathers at the ecumenical counsels as a type of variation in the rites during the seasons.</td>
            <td class="arabic">- قرر المجمع المقدس عدم حزف أجزاء قانون الإيمان فى أى وقت من السنة. أما الألحان فهى التى تتغير حسب المناسبة. وذلك لأن قانون الإيمان الأرثوذكسى الذى وضعه الآباء فى المجامع المسكونية لا يجوز شطب أى جزء منه كنوع من التنوع الطقسى فى المناسبات.</td>
        </tr>

        <tr id="table_30_row_3" class="text">
            <td class="english"><span class="role">Congregation:<br></span>We believe in One God, God the Father, the Pantocrator, Creator of Heaven and earth, and of all things seen and unseen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲧⲉⲛⲛⲁϩϯ ̀ⲉⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ: Ⲫϯ ̀Ⲫⲓⲱⲧ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲫⲏ ̀ⲉⲧⲁϥⲑⲁⲙⲓⲟ ̀ⲛ̀ⲧⲫⲉ ⲛⲉⲙ ̀ⲡⲕⲁϩⲓ ⲛⲏ ̀ⲉⲧⲟⲩⲛⲁⲩ ̀ⲉⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲏ ⲉⲧⲉ ̀ⲛⲥⲉⲛⲁⲩ ̀ⲉⲣⲱⲟⲩ ⲁⲛ.</td>
            <td class="arabic"><span class="role">السشعب:<br></span>نؤمن بإله واحد، الله الآب ضابط الكل، خالق السماء والأرض، ما يري وما لا يري.</td>
        </tr>
        <tr id="table_30_row_4" class="text">
            <td class="english">We believe in One Lord, Jesus Christ, the Only-Begotten Son of God, Begotten of the Father before all ages.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁϩϯ ̀ⲉⲟⲩⲛⲟⲩϯ ̀ⲛⲟⲩⲱⲧ Ⲓˉⲏⲥⲟⲩⲥ  Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ ̀̀̀Ⲡϣⲏⲣⲓ ̀ⲙⲪϯ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲡⲓⲙⲓⲥⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ̀Ⲫⲓⲱⲧ ϧⲁϫⲱⲟⲩ ̀ⲛⲛⲓ̀ⲉⲱⲛ ⲧⲏⲣⲟⲩ:</td>
            <td class="arabic">نؤمن برب واحد، يسوع المسيح، ابن الله الوحيد المولود من الآب قبل كل الدهور.</td>
        </tr>
        <tr id="table_30_row_5" class="text">
            <td class="english">Light of Light, True God of True God; begotten, not created; coessential with the Father by whom all things were made;</td>
            <td class="coptic">ⲟⲩⲟⲩⲱⲓⲛⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ⲟⲩⲟⲩⲱⲓⲛⲓ: ⲟⲩⲛⲟⲩϯ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ ̀ⲉⲃⲟⲗϧⲉⲛ ⲟⲩⲛⲟⲩϯ ̀ⲛⲧⲁ̀ⲫⲙⲏⲓ: ̀ⲟⲩⲙⲓⲥⲓ ⲡⲉ ⲟⲩⲑⲁⲙⲓⲟ ⲁⲛ ⲡⲉ:  ⲟⲩ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ ⲡⲉ ⲛⲉⲙ ̀Ⲫⲓⲱⲧ ⲫⲏ ̀ⲉⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ϣⲱⲡⲓ ̀ⲉⲃⲟⲗ ϩⲓⲧⲟⲧϥ.</td>
            <td class="arabic">نور من نور، إله حق من إله حق، مولود غير مخلوق، مساو للآب في الجوهر، الذى به كان كل شئ.</td>
        </tr>
        <tr id="table_30_row_6" class="text">
            <td class="english">who, for us men and for our salvation came down from heaven, and was incarnate of the Holy Spirit and of the Virgin Mary, and became Man.</td>
            <td class="coptic">Ⲫⲁⲓ ̀ⲉⲧⲉ ⲉⲑⲃⲏⲧⲉⲛ  ̀ⲁⲛⲟⲛ ϧⲁ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ: ⲁϥ̀ⲓ ̀ⲉⲡⲉⲥⲏⲧ ̀ⲉⲃⲟⲗϧⲉⲛ ̀ⲧⲫⲉ ⲁϥϭⲓⲥⲁⲣⲝ ̀ⲉⲃⲟⲗϧⲉⲛ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ̀ⲉⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲟⲩⲟϩ ⲁϥⲉⲣⲣⲱⲙⲓ:</td>
            <td class="arabic">هذا الذي من أجلنا نحن البشر، ومن أجل خلاصنا ، نزل من السماء ، وتجسد من الروح القدس ومن مريم العذراء وتأنس.</td>
        </tr>
        <tr id="table_30_row_7" class="text">
            <td class="english">And He was crucified for us under Pontius Pilate, suffered and was buried; and on the third day He rose from the dead according to the Scriptures.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲁⲩⲉⲣ̀ⲥⲧⲁⲩⲣⲱⲛⲓⲛ ̀ⲙⲙⲟϥ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲛ ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ: ⲁϥϣⲉⲡⲉⲙⲕⲁϩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ⲟⲩⲟϩ ⲁϥⲧⲱⲛϥ ̀ⲉⲃⲟⲗϧⲉⲛ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲙⲙⲁϩ ⲅˉ (ϣⲟⲙⲧ) ⲕⲁⲧⲁ ⲛⲓ̀ⲅⲣⲁⲫⲏ.</td>
            <td class="arabic">وصلب عنا علي عهد بيلاطس البنطي ، تألم وقبر. وقام من بين الأموات في اليوم الثالث، كما في الكتب.</td>
        </tr>
        <tr id="table_30_row_8" class="text">
            <td class="english">Ascended into  heaven, He sits at the right hand of His Father; and He is coming again in His Glory to judge the living and the dead; whose kingdom shall have no end.</td>
            <td class="coptic">Ⲁϥϣⲉⲛⲁϥ ̀ⲉ̀ⲡϣⲱⲓ ̀ⲉⲛⲓⲫⲏⲟⲩ̀ⲓ: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩ̀ⲓⲛⲁⲙ ̀ⲙⲠⲉϥⲓⲱⲧ. Ⲕⲉ ⲡⲁⲗⲓⲛ ⲉϥⲛⲏⲟⲩ ϧⲉⲛ ⲡⲉϥ̀ⲱⲟⲩ ̀ⲉϯϩⲁⲡ ̀ⲉ ⲛⲏ ⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ: ⲫⲏ ̀ⲉⲧⲉ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ ⲟⲩⲁⲑⲙⲟⲩⲛⲕ ⲧⲉ.</td>
            <td class="arabic">وصعد الي السموات، وجلس عن يمين أبيه. وأيضا يأتي في مجده ليدين الأحياء والأموات ، الذي ليس لملكه انقضاء.</td>
        </tr>
        <tr id="table_30_row_9" class="text">
            <td class="english">Yes, we believe in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father; who, with the Father and the Son, is Worshiped and Glorified; who spoke by the prophets.</td>
            <td class="coptic">Ⲥⲉ ⲧⲉⲛⲛⲁϩϯ ̀ⲉⲠⲓ̀ⲡⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ̀ⲛⲣⲉϥϯ ̀ⲙ̀ⲡⲱⲛϧ ⲫⲏ ⲉⲑⲛⲏⲟⲩ ̀ⲉⲃⲟⲗ ϧⲉⲛ Ⲫⲓⲱⲧ: ⲥⲉⲟⲩⲱϣⲧ ̀ⲙⲙⲟϥ ⲥⲉϯ̀ⲱⲟⲩ ⲛⲁϥ ⲛⲉⲙ Ⲫⲓⲱⲧ ⲛⲉⲙ ̀Ⲡϣⲏⲣⲓ :ⲫⲏ ̀ⲉⲧⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲛⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">نعم نؤمن بالروح القدس ، الرب المحيي المنبثق من الآب، نسجد له ونمجده مع الآب والابن، الناطق في الانبياء.</td>
        </tr>
        <tr id="table_30_row_10" class="text">
            <td class="english">And in one Holy, Catholic and Apostolic Church.  We confess one Baptism, for the remission of sins.</td>
            <td class="coptic">Ⲉⲟⲩ̀ⲓ ̀ⲛ̀ⲁⲅⲓ̀ⲁ ̀ⲛⲕⲁⲑⲟⲗⲓⲕⲏ ̀ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲓⲕⲏ ̀ⲛⲉⲕ̀ⲕⲗⲏⲥⲓⲁ. Ⲧⲉⲛⲉⲣ̀ⲟⲙⲟⲗⲟⲅⲓⲛ ̀ⲛⲟⲩⲱⲙⲥ ̀ⲛⲟⲩⲱⲧ ̀ⲉ̀ⲡⲭⲱ ̀ⲉⲃⲟⲗ ̀ⲛⲧⲉ ⲛⲓⲛⲟⲃⲓ.</td>
            <td class="arabic">وبكنيسة واحدة مقدسة جامعة رسولية. ونعترف بمعمودية واحدة لمغفرة الخطايا.</td>
        </tr>
        <tr id="table_30_row_11" class="text">
            <td class="english">We look for the resurrection of the dead, and the life of the age to come.  Amen.</td>
            <td class="coptic">Ⲧⲉⲛϫⲟⲩϣⲧ ̀ⲉⲃⲟⲗ ϧⲁ ̀ⲧϩⲏ ̀ⲛϯ̀ⲁⲛⲁⲥⲧⲁⲥⲓⲥ ̀ⲛⲧⲉ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ: ⲛⲉⲙ ⲡⲓⲱⲛϧ ̀ⲛⲧⲉ ⲡⲓ̀ⲉⲱⲛ ⲉⲑⲛⲏⲟⲩ:  ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">وننتظر قيامة الأموات ، وحياة الدهر الآتي آمين.</td>
        </tr>
    </table>
    <table id="table_31" style="display: table;" title="O God, have mercy upon us">
        <caption id="caption_table_31" class="caption">O God, Have Mercy Upon Us
        <span class="coptic-caption">Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ</span>
        <span class="arabic-caption">اللهم ارحمنا</span></caption>
        
        <tr id="table_31_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>O God, have mercy upon us, settle Your mercy upon us, have compassion upon us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ ⲑⲉϣ ⲟⲩⲛⲁⲓ ̀ⲉⲣⲟⲛ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>اللهم إرحمنا قرر لنا رحمة تراءف علينا.</td>
        </tr>

        <tr id="table_31_row_3" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين.</td>
        </tr>

        <tr id="table_31_row_5" class="text">
            <td class="english"><span class="role">Priest:<br></span>Hear us</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>ⲥⲱⲧⲉⲙ ̀ⲉⲣⲟⲛ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>واسمعنا.</td>
        </tr>

        <tr id="table_31_row_7" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين.</td>
        </tr>

        <tr id="table_31_row_9" class="text">
            <td class="english"><span class="role">Priest:<br></span>Bless us, keep us, and help us</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>̀ⲥⲙⲟⲩ ̀ⲉⲣⲟⲛ ̀ⲁⲣⲉϩ ̀ⲉⲣⲟⲛ ̀ⲁⲣⲓⲃⲟ̀ⲏⲑⲓⲛ ̀ⲉⲣⲟⲛ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>وباركنا واحفظنا وأعنا.</td>
        </tr>

        <tr id="table_31_row_11" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين.</td>
        </tr>

        <tr id="table_31_row_13" class="text">
            <td class="english"><span class="role">Priest:<br></span>Take away Your anger from us. Visit us with Your salvation, and forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲱⲗⲓ ̀ⲙⲡⲉⲕϫⲱⲛⲧ ̀ⲉⲃⲟⲗϩⲁⲣⲟⲛ ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ ⲟⲩⲟϩ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>وارفع غضبك عنا وافتقدنا بخلاصك واغفر لنا خطايانا.</td>
        </tr>

        <tr id="table_31_row_15" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen. Lord have mercy. Lord have mercy. Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ. Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين. يارب ارحم. يارب ارحم. يارب ارحم.</td>
        </tr>   
    </table>
    <table id="table_32" style="display: table;" title="Fai Etaf Enf">
        <caption id="caption_table_32" class="caption">This Is He Who Offered Himself 
        <span class="coptic-caption">Ⲫⲁⲓ ̀ⲉⲧⲁϥⲉⲛϥ</span>
        <span class="arabic-caption">هذا الذي أصعد ذاته</span></caption>
        

        <tr id="table_32_row_1" class="text">
            <td class="english"><span class="role">Congregation:<br></span>This is He who offered Himself up, as an acceptable sacrifice, on the Cross for the salvation of our race.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲫⲁⲓ ̀ⲉⲧⲁϥⲉⲛϥ ̀ⲉ ̀ⲡϣⲱⲓ: ̀ⲛⲟⲩⲑⲩⲥⲓ̀ⲁ ⲉⲥϣⲏⲡ: ϩⲓϫⲉⲛ ⲡⲓ̀ⲥⲧⲁⲩⲣⲟⲥ: ϧⲁ ̀ⲡⲟⲩϫⲁⲓ ̀ⲙⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>هذا الذي أصعد ذاته ذبيحة مقبولة على الصليب عن خلاص جنسنا.</td>
        </tr>
        <tr id="table_32_row_2" class="text">
            <td class="english">His good Father smelled Him at the evening watch on Golgotha.</td>
            <td class="coptic">Ⲁϥϣⲱⲗⲉⲙ ̀ⲉⲣⲟϥ: ̀ⲛϫⲉ ⲡⲉϥⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ: ̀ⲙ̀ⲫⲛⲁⲩ ̀ⲛⲧⲉ ϩⲁⲛ̀ⲁⲣⲟⲩϩⲓ: ϩⲓϫⲉⲛ ϯⲅⲟⲗⲅⲟⲑⲁ.</td>
            <td class="arabic"> فاشتمه أبوه الصالح وقت المساء على الجلجثة.</td>
        </tr>

        <tr id="table_32_row_4" class="text">
            <td class="english"><span class="role">Congregation:<br></span>We worship You, O Christ, with Your good Father, and the Holy Spirit, for You were crucified and saved us. Haver mercy on us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲧⲉⲛⲟⲩⲱϣⲧ ̀ⲙⲙⲟⲕ ̀ⲱ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ̀ⲛ̀ⲁⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲁⲩⲁϣⲕ ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>نسجدُ لكَ أيها المسيحُ، معَ أبيكَ الصالحِ والروح القُدُسِ، لأنكَ صلبت وخلَّصتَنا. ارحمنا.</td>
        </tr>
    </table>
</div>

<div class="section" id="section_9" title="Pauline - Litany of the Gospel">
    <table id="table_33" title="">
        <caption id="caption_table_33" class="caption">Pauline<br>(Ephesians 2:13-18)
    <span class="arabic-caption">البولس<br>(افسس 13:2-18)</span></caption>
        <tr id="table_33_row_1" class="intro">
            <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the epistle to the Ephesians. May his blessings be with us. Amen </td>
            <td class="arabic">من رسالة معلمنا بولس الرسول إلى أهل أفسس بركته تكون معنا. آمين.</td>
        </tr>
        
        <tr id="table_33_row_4" class="text">
            <td class="english">But now in Christ Jesus you who once were far off have been brought near by the blood of Christ.</td>
            <td class="arabic">وَلَكِنِ الآنَ فِي الْمَسِيحِ يَسُوعَ، أَنْتُمُ الَّذِينَ كُنْتُمْ قَبْلاً بَعِيدِينَ صِرْتُمْ قَرِيبِينَ بِدَمِ الْمَسِيحِ.</td>
        </tr>
        <tr id="table_33_row_5" class="text">
            <td class="english">For He Himself is our peace, who has made both one, and has broken down the middle wall of separation,</td>
            <td class="arabic">لأَنَّهُ هُوَ سَلاَمُنَا، الَّذِي جَعَلَ الِاثْنَيْنِ وَاحِداً، وَنَقَضَ حَائِطَ السِّيَاجِ الْمُتَوَسِّطَ</td>
        </tr>
        <tr id="table_33_row_6" class="text">
            <td class="english">having abolished in His flesh the enmity, that is, the law of commandments contained in ordinances, so as to create in Himself one new man from the two, thus making peace,</td>
            <td class="arabic">أَيِ الْعَدَاوَةَ. مُبْطِلاً بِجَسَدِهِ نَامُوسَ الْوَصَايَا فِي فَرَائِضَ، لِكَيْ يَخْلُقَ الِاثْنَيْنِ فِي نَفْسِهِ إِنْسَاناً وَاحِداً جَدِيداً، صَانِعاً سَلاَماً،</td>
        </tr>
        <tr id="table_33_row_7" class="text">
            <td class="english">and that He might reconcile them both to God in one body through the cross, thereby putting to death the enmity.</td>
            <td class="arabic">وَيُصَالِحَ الِاثْنَيْنِ فِي جَسَدٍ وَاحِدٍ مَعَ اللهِ بِالصَّلِيبِ، قَاتِلاً الْعَدَاوَةَ بِهِ.</td>
        </tr>
        <tr id="table_33_row_8" class="text">
            <td class="english">And He came and preached peace to you who were afar off and to those who were near.</td>
            <td class="arabic">فَجَاءَ وَبَشَّرَكُمْ بِسَلاَمٍ، أَنْتُمُ الْبَعِيدِينَ وَالْقَرِيبِينَ.</td>
        </tr>
        <tr id="table_33_row_9" class="text">
            <td class="english">For through Him we both have access by one Spirit to the Father.</td>
            <td class="arabic">لأَنَّ بِهِ لَنَا كِلَيْنَا قُدُوماً فِي رُوحٍ وَاحِدٍ إِلَى الآبِ.</td>
        </tr>
        <tr id="table_33_row_11" class="intro">
            <td class="english">The grace of God the Father be with you all. Amen.</td>
            <td class="arabic">نعمة الله الآب تحل مع جميعكم آمين.</td>
        </tr>
    </table>
    <table id="table_34" style="display: table;" title="Ekesmarouot">
        <caption id="caption_table_34" class="caption">Blessed Are You Indeed 
        <span class="coptic-caption">Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ</span>
        <span class="arabic-caption">مبـارك أنـت بالحقيقة</span></caption>
        
        <tr id="table_34_row_4" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Blessed are You indeed, with Your good Father, and the Holy Spirit, for You were crucified and saved us.  Have mercy upon us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ̀ⲁⲗⲏⲑⲱⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ̀ⲛⲁⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓ̀ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲁϥⲁϣⲕ  ⲁⲕⲥⲱϯ ̀ⲙⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>مبـارك أنـت بالحقيقة مع أبيك الصالح والـروح القدس لانك صلبت وخلصتنا.ارحمنا.</td>
        </tr>
    </table>
    <table id="table_35" title="">
        <caption id="caption_table_35" class="caption">Acts<br>(1:15 - 20)
    <span class="arabic-caption">الابركسيس<br>(1: 15 – 20)</span></caption>
        <tr id="table_35_row_1" class="intro">
            <td class="english">A reading from the Acts of our fathers, the apostles. May their blessings be with us. Amen.</td>
            <td class="coptic">˙Ⲡⲣⲁⲝⲉⲱⲛ  ⲧⲱⲛ  ⲁⲅⲓⲱⲛ  ̀ⲛⲁⲡⲟⲥⲧⲟⲗⲱⲛ  ⲧⲟⲁⲛⲁⲅⲛⲱⲥⲙⲁ  :  ̀ⲡⲣⲁⲝⲓⲥ  ̀ⲡⲣⲁⲝⲓⲥ  ̀ⲛⲧⲉ  ⲛⲉⲛⲓⲟϯ  ̀ⲛⲁⲡⲟⲥⲧⲟⲗⲟⲥ  ̀ⲉⲣⲉⲡⲟⲩ̀ⲥⲙⲟⲩ  ⲉⲑⲩ̅  ϣⲱⲡⲓ  ⲛⲉⲙⲁⲛ  ⲁⲙⲏ .</td>
            <td class="arabic">الابركسيس، فصل من أعمال آبائنا الرسل القديسين بركتهم المقدسة تكون معنا آمين</td>
        </tr>
        <tr id="table_35_row_4" class="text">
            <td class="english">And in those days Peter stood up in the midst of the disciples (altogether the number of names was about a hundred and twenty), and said,</td>
            <td class="coptic">˙Ⲟⲩⲟϩ ̀ⲛ̀ϩⲣⲏⲓ ⲇⲉ ϧⲉⲛ ⲛⲁⲓ̀ⲉϩⲟⲟⲩ ⲁϥⲧⲱⲛϥ ̀ⲛϫⲉ Ⲡⲉⲧⲣⲟⲥ ϧⲉⲛ ̀ⲑⲙⲏϯ ̀ⲛⲛⲓ̀ⲥⲛⲏⲟⲩ: ⲛⲉ  ⲟⲩⲟⲛ  ⲟⲩⲙⲏϣ  ⲇⲉ ⲉⲩⲑⲟⲩⲏⲧ  ϩⲓ  ⲫⲁⲓ  ̀ⲉⲫⲁⲓ  ⲉⲩⲛⲁⲉⲣ  ϣⲉ ϫⲟⲩⲧ  ̀ⲛⲣⲁⲛ  ⲟⲩⲟϩ  ⲡⲉϫⲁϥ.</td>
            <td class="arabic">وَفِي تِلْكَ الأَيَّامِ قَامَ بُطْرُسُ فِي وَسَطِ التَّلاَمِيذِ وَكَانَ عِدَّةُ أَسْمَاءٍ مَعاً نَحْوَ مِئَةٍ وَعِشْرِينَ. فَقَالَ:</td>
        </tr>
        <tr id="table_35_row_5" class="text">
            <td class="english">"Men and brethren, this Scripture had to be fulfilled, which the Holy Spirit spoke before by the mouth of David concerning Judas, who became a guide to those who arrested Jesus;</td>
            <td class="coptic">Ⲛⲓⲣⲱⲙⲓ ⲛⲉⲛ̀ⲥⲛⲏⲟⲩ : ϩⲱϯ ⲡⲉ ̀ⲛⲧⲉⲥϫⲱⲕ ̀ⲉⲃⲟⲗ ̀ⲛϫⲉ ϯⲅⲣⲁⲫⲏ : ˙ⲑⲏⲉⲧⲁϥⲉⲣ ϣⲟⲣⲡ  ̀ⲛϫⲟⲥ ̀ⲛϫⲉ ⲡⲓⲡⲛ̅ⲁ̅ ⲉⲑⲟⲩⲁⲃ ̀ⲉⲃⲟⲗ  ϧⲉⲛ  ⲣⲱϥ  ̀ⲛⲆⲁⲩⲓⲇ  :  ⲉⲑⲃⲉ  Ⲓⲟⲩⲇⲁⲥ  ⲫⲏⲉⲧⲁϥⲉⲣ ϭⲁⲩⲙⲱⲓⲧ ̀ⲛⲛⲏⲉⲧⲁⲩⲁⲙⲟⲛⲓ ̀ⲛⲒⲏⲥ̅.</td>
            <td class="arabic">«أَيُّهَا الرِّجَالُ الإِخْوَةُ كَانَ يَنْبَغِي أَنْ يَتِمَّ هَذَا الْمَكْتُوبُ الَّذِي سَبَقَ الرُّوحُ الْقُدُسُ فَقَالَهُ بِفَمِ دَاوُدَ عَنْ يَهُوذَا الَّذِي صَارَ دَلِيلاً لِلَّذِينَ قَبَضُوا عَلَى يَسُوعَ</td>
        </tr>
        <tr id="table_35_row_6" class="text">
            <td class="english">for he was numbered with us and obtained a part in this ministry."</td>
            <td class="coptic">Ϫⲉ ⲛⲁϥⲏⲡ ̀ⲛ̀ϧⲣⲏⲓ ̀ⲛϧⲏⲧⲉⲛ ⲡⲉ ⲟⲩⲟϩ ⲁ ⲡⲓⲱⲡ ̀ⲓ  ̀ⲉⲣⲟϥ ̀ⲙⲡⲓ̀ⲕⲗⲏⲣⲟⲥ  ̀ⲛⲧⲉ  ⲧⲁⲓⲇⲓⲁⲕⲟⲛⲓⲁ .</td>
            <td class="arabic">إِذْ كَانَ مَعْدُوداً بَيْنَنَا وَصَارَ لَهُ نَصِيبٌ فِي هَذِهِ الْخِدْمَةِ.</td>
        </tr>
        <tr id="table_35_row_7" class="text">
            <td class="english">(Now this man purchased a field with the wages of iniquity; and falling headlong, he burst open in the middle and all his entrails gushed out.</td>
            <td class="coptic">˙ Ⲫⲁⲓ ⲙⲉⲛ ⲟⲩⲛ  ⲁϥϣⲱⲡ  ̀ⲛⲟⲩⲓⲟϩⲓ ̀ⲉⲃⲟⲗ ϧⲉⲛ ̀ⲫⲃⲉⲭⲉ ̀ⲛⲧⲉ ϯⲁⲇⲓⲕⲓⲁ  :  ⲟⲩⲟϩ  ⲁϥϩⲉⲓ  ϩⲓϫⲉⲛ  ⲡⲉϥϩⲟ  : ⲟⲩⲟϩ ⲁϥⲕⲱϣ ϧⲉⲛ ⲧⲉϥⲙⲏϯ : ⲟⲩⲟϩ ⲛⲏⲉⲧ ⲥⲁϧⲟⲩⲛ  ̀ⲙⲙⲟϥ ⲧⲏⲣⲟⲩ ⲁⲩⲫⲱⲛ ̀ⲉⲃⲟⲗ.</td>
            <td class="arabic">فَإِنَّ هَذَا اقْتَنَى حَقْلاً مِنْ أُجْرَةِ الظُّلْمِ وَإِذْ سَقَطَ عَلَى وَجْهِهِ انْشَقَّ مِنَ الْوَسَطِ فَانْسَكَبَتْ أَحْشَاؤُهُ كُلُّهَا.</td>
        </tr>
        <tr id="table_35_row_8" class="text">
            <td class="english">And it became known to all those dwelling in Jerusalem; so that field is called in their own language, Akel Dama, that is, Field of Blood.)</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲛϩ ̀ⲉⲃⲟⲗ ̀ⲛⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϣⲟⲡ ϧⲉⲛ Ⲓⲗⲏ̅ⲙ̅: ϩⲱⲥⲧⲉ ̀ⲛⲥⲉⲙⲟⲩϯ  ̀ⲉ̀ⲫⲣⲁⲛ ̀ⲙⲡⲓⲓⲟϩⲓ ⲉⲧⲉ ̀ⲙⲙⲁⲩ ϧⲉⲛ ⲧⲟⲩⲁⲥⲡⲓ ϫⲉ ⲁⲭⲉⲗⲗⲁⲙⲁⲅ : ⲉⲧⲉ ⲡⲓⲓⲟϩⲓ ̀ⲛⲧⲉ ⲡⲓ̀ⲥⲛⲟϥ  ⲡⲉ.</td>
            <td class="arabic">وَصَارَ ذَلِكَ مَعْلُوماً عِنْدَ جَمِيعِ سُكَّانِ أُورُشَلِيمَ حَتَّى دُعِيَ ذَلِكَ الْحَقْلُ فِي لُغَتِهِمْ «حَقْلَ دَمَا» (أَيْ: حَقْلَ دَمٍ).</td>
        </tr>
        <tr id="table_35_row_9" class="text">
            <td class="english">"For it is written in the book of Psalms: 'Let his dwelling place be desolate, And let no one live in it'</td>
            <td class="coptic">˙Ⲉ̀ⲥϧⲏⲟⲩⲧ ⲅⲁⲣ ϩⲓ ̀ⲡϫⲱⲙ ̀ⲛⲧⲉ ⲛⲓⲯⲁⲗⲙⲟⲥ : ϫⲉ ⲧⲉϥⲉⲣⲃⲓ ⲙⲁⲣⲉⲥϣⲱϥ ⲟⲩⲟϩ ̀ⲙⲡⲉⲛ̀ⲑⲣⲉϥϣⲱⲡⲓ ̀ⲛϫⲉ ⲫⲏⲉⲧϣⲟⲡ ̀ⲛϧⲏⲧⲥ ̀ⲛⲧⲉϥ ⲙⲉⲧ̀ⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲙⲁⲣⲉ ⲕⲉⲟⲩⲁⲓ ϭⲓⲧⲥ</td>
            <td class="arabic">لأَنَّهُ مَكْتُوبٌ فِي سِفْرِ الْمَزَامِيرِ: لِتَصِرْ دَارُهُ خَرَاباً وَلاَ يَكُنْ فِيهَا سَاكِنٌ وَلْيَأْخُذْ وَظِيفَتَهُ آَخَرُ.</td>
        </tr>
        <tr id="table_35_row_11" class="intro">
            <td class="english">The word of the Lord shall grow, multiply, be mighty, and be confirmed in the holy church of God. Amen.</td>
            <td class="coptic">Ⲡⲓⲥⲁϫⲓ ⲇⲉ ̀ⲛⲧⲉ ˙Ⲡ⳪ ⲉϥ̀ⲉⲁⲓⲁⲓ ⲟⲩⲟ’ϩ ⲉϥ̀ⲉ̀ⲁϣⲁⲓ ⲟⲩⲟϩ ⲉϥ̀ⲉ̀ⲁⲙⲁϩⲓ ⲟⲩⲟϩ ⲉϥ̀ⲉⲧⲁϫⲣⲟ ϧⲉⲛ ϯ̀ⲁⲅⲓⲁ ̀ⲛⲉⲕ̀ⲕⲗⲏⲥⲓ̀ⲁ ̀ⲛⲧⲉ Ⲫϯ. ̀ⲁⲙⲏⲛ.</td>
            <td class="arabic">لم تزل كلمة الرب تنمو وتكثر وتعتز وتثبت فى كنسية الله المقدسة، آمين.</td>
        </tr>
    </table>
    <table id="table_36" style="display: table;" title="The Procession of Judas">
        <caption id="caption_table_36" class="caption">The Procession of Judas 
        <span class="arabic-caption">زفة يهوذا</span></caption>
        
        <tr id="table_36_row_4" class="refrain">
            <td class="english"><span class="role">Congregation:<br></span>(Judas)×6 who has broken the law. </td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ̀ⲟⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_5" class="text">
            <td class="english">With silver, you have sold Christ to the Jews, who have broken the law. The law reakers took Christ and nailed Him on the Cross at the place of Cranium.</td>
            <td class="coptic">ⲁⲣⲅⲩⲣⲓⲱ ⲉⲡⲁⲣⲁⲑⲏⲥ ⲁⲥⲭⲟ̅ ⲧⲓⲥ ⲓⲟⲩⲇⲉⲓⲥ ⲡⲁⲣⲁⲛⲟⲙⲓⲥ : ⲓⲇ̅ⲉ ⲡⲁⲣⲁⲛⲟⲙⲓ ̀ⲉⲡⲓⲗⲁⲃⲟⲩ ⲙⲉⲛⲓ ⲧⲟⲛ ⲭⲟ̅ : ̀ⲥⲧⲁⲩⲣⲱ ̀ⲡⲣⲟⲥ ̀ⲏⲗⲱⲥⲁⲛ ⲉⲛⲧⲱ ̀ⲕⲣⲛⲓⲱ ⲧⲟⲡⲱ.</td>
            <td class="arabic">بالفضة بعت سيدك المسيح لليهود مخالفى  الناموس  فأما مخالفى الناموس فقد أخذوا المسيح وسمروه على الصليب فى موضع الأقرانيون </td>
        </tr>
        <tr id="table_36_row_6" class="refrain">
            <td class="english">(Judas)×6 who has broken the law. </td>
            <td class="coptic">(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ̀ⲟⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_7" class="text">
            <td class="english">Barabbas the condemned thief was set free and the Master, the Judge they crucified. They thrust a spear in Your side, and as a thief they nailed You on the cross. They laid you in a tomb, O You, who raised Lazarus from the tomb.</td>
            <td class="coptic">Ⲃⲁⲣⲁⲃⲃⲁⲛ ⲧⲟⲛ ⲕⲁⲧⲁ ⲕⲣⲓⲧⲟⲛ: ⲁⲡⲉⲗⲩⲥⲁⲛⲁⲩ ⲧⲟⲛ ̀ⲕⲣⲓⲧⲏⲛ : ⲕⲉⲇⲉⲥⲡⲟⲧⲏⲛ ⲉⲥⲧⲁⲩⲣⲱⲥⲁⲛ . Ⲓⲥ ⲧⲏⲛ ̀ⲛⲗⲉⲩⲣⲁⲛ ⲗⲟⲛⲭⲏⲛ ̀ⲉⲡⲓⲑⲉⲛⲧⲏⲥ : ⲕⲉⲱⲥ ⲧⲏⲥⲧⲏⲥ : ⲍⲩⲗⲱ ̀ⲡⲣⲟⲥ ̀ⲏⲗⲱⲛⲁⲥ ̀ⲉⲑⲕⲁⲛ : ⲉⲛ ̀ⲙⲛⲏⲏⲙ̀ⲓ̀ⲱ̀ⲟ ⲉⲕⲧⲟⲩ ⲧⲁⲫⲟⲩ : ̀ⲉⲅⲓⲣⲁⲥⲧⲟⲛ Ⲗⲁⲍⲁⲣⲟⲛ</td>
            <td class="arabic">باراباس اللص المسجون أطلقوه والسيد الديان صلبوه . فى جنبك وضعوا حربة ومثل لص سمروك على خشبة ووضعوك فى قبر يا من أقام لعازر من  القبر. </td>
        </tr>
        <tr id="table_36_row_8" class="refrain">
            <td class="english">(Judas)×6 who has broken the law. </td>
            <td class="coptic">(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ̀ⲟⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_9" class="text">
            <td class="english">For as Jonah stayed three days inside the whale’s belly, also our Savior stayed three days. After He died, they sealed the tomb.</td>
            <td class="coptic">Ⲱⲥⲡⲉⲣ ⲅⲁⲣ Ⲓⲱⲛⲁⲥ ̀ⲧⲣⲓⲥ ̀ⲏⲙⲉⲣⲁⲥ ̀ⲉⲙⲓⲛⲉⲛ : ⲉⲛⲕⲓⲗⲓⲁ ⲧⲟⲩⲕⲏ ⲧⲟⲩⲟⲩⲧⲱⲥ ⲕⲉ ⲥⲱⲧⲏⲣ ̀ⲏⲙⲱⲛ : ̀ⲧⲣⲓⲥ ̀ⲏⲙⲉⲣⲁⲥ ̀ⲉⲙⲓⲛⲉ̀̀̀ⲛ : ⲙⲉⲧⲁⲧⲟⲩ ⲧⲉⲑⲛⲏⲕⲟⲧⲟⲩⲧⲟⲛ ⲧⲁⲫⲟⲛ : ⲉⲥⲫⲁⲣⲅⲓⲥⲁⲛⲧⲟ .</td>
            <td class="arabic">لأنه كما مكث يونان ثلاثة أيام فى بطن الحوت هكذا مخلصنا أقام ثلاثة أيام وبعد أن مات ختموا القبر .</td>
        </tr>
        <tr id="table_36_row_11" class="refrain">
            <td class="english">(Judas)×6 who has broken the law. </td>
            <td class="coptic">(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ̀ⲟⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_12" class="text">
            <td class="english">Truly He rose but the soldiers were not aware that truly the Savior of the world has risen. He who suffered and died for our sake, O Lord, glory be to You. Amen.</td>
            <td class="coptic">Ⲟⲛⲧⲱⲥ ⲁⲛⲉⲥⲧⲏ ⲕⲉ ⲟⲩⲕⲉⲅⲛⲱⲥ ⲁⲛⲥⲧⲣⲁⲧⲓⲁⲱⲧⲉ : ⲟⲩⲛⲧⲱⲥⲅⲉⲣⲑⲓⲥ ̀ⲟⲃⲱⲧⲏⲣ ⲧⲟⲩⲕⲟⲥⲙⲟⲩ : ̀ⲟⲡⲁⲑⲱⲛ ⲕⲉ ⲁⲛⲁⲥ ⲧⲁⲥⲇⲓⲁⲧⲟⲩ : ⲅⲉⲛⲟⲥ ̀ⲏⲙⲱⲛ Ⲕⲩⲣⲓⲉ Ⲇⲟⲝⲁⲥⲓ : ⲁⲙⲏⲛ. </td>
            <td class="arabic">بالحقيقة قام والجند لم يعلموا. أنه حقاً نهض مخلص العالم الذى تألم وقام لأجل جنسنا يارب لكَ المجد إلى الأبد آمين .</td>
        </tr>
    </table>
    <table id="table_37" style="display: table;" title="Trisagion">
        <caption id="caption_table_37" class="caption">Trisagion
        <span class="arabic-caption">الثلاث تقديسات</span></caption>

        <tr id="table_37_row_4" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Holy God, Holy Mighty, Holy Immortal, Who was born of the Virgin, Have mercy on us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ̀ⲁⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ̀ⲁⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲟ ⲉⲕⲡⲁⲣⲑⲉⲛⲟⲩ ⲅⲉⲛⲛⲉⲑⲏⲥ ̀Ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>قدوس الله . قدوس القوى . قدوس الحى الذى لا يموت، الذى ولد من العذراء ، أرحمنا.</td>
        </tr>
        <tr id="table_37_row_5" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ̀ⲁⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ̀ⲁⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲟ ̀ⲥⲧⲁⲩⲣⲱⲑⲓⲥ Ⲇⲓ ̀Ⲏⲙⲁⲥ ̀Ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ .</td>
            <td class="arabic">قدوس الله . قدوس القوى . قدوس الحى الذى لا يموت، الذى صلب عنا ، أرحمنا .</td>
        </tr>
        <tr id="table_37_row_6" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ̀ⲟ Ⲑⲉⲟⲥ : ̀ⲁⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ̀ⲁⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ̀ⲟ ̀ⲥⲧⲁⲩⲣⲱⲑⲓⲥ Ⲇⲓ ̀Ⲏⲙⲁⲥ ̀Ⲉⲗⲉ̀ⲏⲥⲟⲛ ̀ⲏⲙⲁⲥ .</td>
            <td class="arabic">قدوس الله . قدوس القوى . قدوس الحى الذى لا يموت، الذى صلب عنا ، أرحمنا .</td>
        </tr>
        <tr id="table_37_row_7" class="text">
            <td class="english">Glory be to the Father and to the Son, and to the Holy Spirit, both now, and ever, and unto the ages of ages, Amen.</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓ̀ⲱ : ⲕⲉ ̀ⲁⲅⲓ̀ⲱ ⲡ̅ⲛ̅ⲁ̅ⲧ̅ⲓ̅ . Ⲕⲉ ⲛⲩⲛ ⲕⲉ ̀ⲁ̀ⲓ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ̀ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ̀ⲉ̀ⲱⲛⲱⲛ ̀ⲁⲙⲉⲛ. </td>
            <td class="arabic">المجد للآب و الإبن و الروح القدس . الآن و كل آوان و الى دهر الدهور ، آمين .</td>
        </tr>
    </table>
    <table id="table_38" title="Litany of the Gospel">
        <caption id="caption_table_38" class="caption">Litany of the Gospel
        <span class="arabic-caption">اوشية الأنجيل</span></caption>

        <tr id="table_38_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>Pray</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲗⲏⲗ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>صلوا</td>
        </tr>

        <tr id="table_38_row_3" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Stand up for prayer.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲉⲡⲓ ̀ⲡⲣⲟⲥⲉⲩⲭϩ ̀ⲥⲧⲁⲑⲏⲧⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>للصلاة قفوا</td>
        </tr>

        <tr id="table_38_row_5" class="text">
            <td class="english"><span class="role">Priest:<br></span>Peace be with all.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>السلام للكل.</td>
        </tr>

        <tr id="table_38_row_7" class="text">
            <td class="english"><span class="role">Congregation:<br></span>And with your spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲉ ⲧⲱ ̀ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>ولروحك أيضاً..</td>
        </tr>

        <tr id="table_38_row_9" class="text">
            <td class="english"><span class="role">Priest:<br></span>O Master, Lord Jesus Christ our God, Who said to His saintly, honored disciples and Holy apostles,</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲫⲛⲏⲃ Ⲡϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓ̀ⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲫⲏ ⲉⲧⲁϥϫⲟⲥ ̀ⲛⲛⲉϥ̀ⲁⲅⲓⲟⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ̀ⲙⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ̀ⲛⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>أيها السيد الرب يسوع المسيح إلهنا، الذى قال لتلاميذه القديسين ورسله الأطهار المكرمين:</td>
        </tr>
        <tr id="table_38_row_10" class="text">
            <td class="english">“Many prophets and righteous men have desired to see the things which you see, and have not seen them, and to hear the things which you hear and have not heard them.</td>
            <td class="coptic">ϫⲉ ϩⲁⲛⲙⲏϣ ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ϩⲁⲛ̀ⲑⲙⲏⲓ ̀ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ϩⲁⲛ̀ⲑⲙⲏⲓ ⲁⲩⲉⲣ̀ⲉⲡⲓⲑⲩⲙⲓⲛ ⲉⲛⲁⲩ ̀ⲉⲛⲏ ̀ⲉⲧⲉⲧⲉⲛⲛⲁⲩ ̀ⲉⲣⲱⲟⲩ ⲟⲩⲟϩ ̀ⲙⲡⲟⲩⲛⲁⲩ: ⲟⲩⲟϩ ̀ⲉⲥⲱⲧⲉⲙ ̀ⲉⲛⲏ ̀ⲉⲧⲉⲧⲉⲛⲥⲱⲧⲉⲙ ̀ⲉⲣⲱⲟⲩ ⲟⲩⲟϩ ̀ⲙⲡⲟⲩⲥⲱⲧⲉⲙ. </td>
            <td class="arabic">إن أنبياء وأبرارا كثيرين اشتهوا أن يروا ما أنتم ترون ولم يروا وأن يسمعوا ما أنتم تسمعون ولم يسمعوا.</td>
        </tr>
        <tr id="table_38_row_11" class="text">
            <td class="english">But blessed are your eyes for they see, and your ears for they hear.</td>
            <td class="coptic">Ⲛⲑⲱⲧⲉⲛ ⲇⲉ ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ̀ⲛⲛⲉⲧⲉⲛⲃⲁⲗ ϫⲉ ⲥⲉⲛⲁⲩ: ⲛⲉⲙ ⲛⲉⲧⲉⲛⲙⲁϣϫ ϫⲉ ⲥⲉⲥⲱⲧⲉⲙ.</td>
            <td class="arabic">أما أنتم فطوبى لأعينكم لأنهـا تبصر ولآذانكم لأنهـا تسمـع.</td>
        </tr>
        <tr id="table_38_row_12" class="text">
            <td class="english">May we be worthy to hear and to act according to your Holy Gospels through the prayers of your saints.</td>
            <td class="coptic">̀Ⲙⲁⲣⲉⲛⲉⲣ̀ⲡⲉⲙ̀ⲡϣⲁ ̀ⲛⲥⲱⲧⲉⲙ ⲟⲩⲟϩ ̀ⲉ̀ⲓⲣⲓ ̀ⲛⲛⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ⲛⲓⲧⲱⲃϩ ̀ⲛⲧⲉ ⲛⲏ ⲉⲑⲟⲩⲁⲃ  ̀ⲛⲧⲁⲕ.</td>
            <td class="arabic">فلنستحق أن نسمع ونعمل بأناجيلك المقدسة بـطـلـبات قديسيك.</td>
        </tr>

        <tr id="table_38_row_14" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray for the Holy Gospel.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ̀ⲩⲡⲉⲣ ⲧⲟⲩ ̀ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ. </td>
            <td class="arabic"><span class="role">الشماس:<br></span>صلوا من أجل الإنجيل المقدس.</td>
        </tr>

        <tr id="table_38_row_16" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓ̀ⲉ ̀ⲉⲗⲉ̀ⲏⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

        <tr id="table_38_row_18" class="text">
            <td class="english"><span class="role">Priest:<br></span>Remember also, O our Master, all those who have asked us to remember them in our supplications and prayers which we offer up unto You, O Lord our God.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span> Ⲁⲣⲓ̀ⲫⲙⲉⲩ̀ⲓ ⲇⲉ ⲟⲛ ⲡⲉⲛⲛⲏⲃ ̀ⲛⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧⲁⲩϩⲟⲛϩⲉⲛ ⲛⲁⲛ ̀ⲉⲉⲣⲡⲟⲩⲙⲉⲩ̀ⲓ ϧⲉⲛ ⲛⲉⲛϯϩⲟ ⲛⲉⲙ ⲛⲉⲛⲧⲱⲃϩ ̀ⲉⲧⲉⲛ̀ⲓⲣⲓ ̀ⲙⲙⲱⲟⲩ ̀ⲉ̀ⲡϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡ⳪ Ⲡⲉⲛⲛⲟⲩϯ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>أذكر أيضا يا سيدنا كل الذين أوصونا أن نذكرهم فى تضرعـاتنـا وطلباتنا التى نصعدها إليك أيها الرب إلهنا.</td>
        </tr>
        <tr id="table_38_row_19" class="text">
            <td class="english">Those who have already fallen asleep, repose them. Those who are sick, heal them.</td>
            <td class="coptic">Ⲛⲏ ⲉⲧⲁⲩⲉⲣϣⲟⲣⲡ ̀ⲛⲉⲛⲕⲟⲧ ⲙⲁ̀ⲙⲧⲟⲛ ⲛⲱⲟⲩ: ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic">الذين سبقوا فرقدوا، نيحهم المرضى اشفهم</td>
        </tr>
        <tr id="table_38_row_20" class="text">
            <td class="english">For You are the Life of us all, the salvation of us all, the hope of us all, the healing of us all, and the resurrection of us all.</td>
            <td class="coptic">Ϫⲉ ̀ⲛⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲡⲉⲛⲱⲛϧ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲡⲉⲛⲟⲩϫⲁⲓ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲧⲉⲛϩⲉⲗⲡⲓⲥ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲡⲉⲛⲧⲁⲗϭⲟ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲧⲉⲛ̀ⲁⲛⲁⲥⲧⲁⲥⲓⲥ ⲧⲏⲣⲉⲛ.</td>
            <td class="arabic">لأنـك أنت حياتنا كلنا، وخلاصنا كلنا ، ورجاؤنا كلنا ، وشفاؤنا كلنا ، وقيامتنا كلنا.</td>
        </tr>
    </table>
</div>





<div class="section" id="section_10" title="Coptic Psalm & Gospel">
    <table id="table_39" title="Coptic Psalm">
        <caption id="caption_table39" class="caption" id="caption_table_39">Coptic Psalm<br>(55: 21,12)
        <span class="arabic-caption">المزمور قبطي<br>(55: 21 و 12)</span></caption>
        <tr id="table_39_row_0" class="intro">
            <td class="english">A psalm David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_39_row_1" class="text">
            <td class="english">His words were softer than oil, </td>
            <td class="coptic">Ⲁⲩ̀ϭⲛⲟⲛ ̀ⲛϫⲉ ⲛⲉϥⲥⲁϫⲓ ̀ⲉϩⲟⲧⲉ ⲟⲩⲛⲉϩ:</td>
            <td class="arabic">كلامه ألين من الزيت (الدهن)</td>
        </tr>
        <tr id="table_39_row_2" class="text">
            <td class="english">And they are arrows.</td>
            <td class="coptic">̀ⲛⲑⲱⲟⲩ ϩⲁⲛⲥⲟⲑⲛⲉϥ ⲛⲉ:</td>
            <td class="arabic">وهو نِصال.</td>
        </tr>
        <tr id="table_39_row_3" class="text">
            <td class="english">For if an enemy reviled me, I would have endured it;</td>
            <td class="coptic">Ϫⲉ ̀ⲉⲛⲉ ⲟⲩϫⲁϫⲓ ⲡⲉ ⲧⲁϥ ϯϣⲱϣ ⲛⲏⲓ ⲛⲁⲓ ⲛⲁϥⲁⲓ ̀ⲉⲣⲟϥ ⲡⲉ : </td>
            <td class="arabic">فلو كان العدو عيرنى اذاً لاحتملت.</td>
        </tr>
        <tr id="table_39_row_4" class="text">
            <td class="english">And if one hating me boasted against me, I would have hidden from him.</td>
            <td class="coptic">ⲟⲩⲟϩ ̀ⲉⲛⲉ ⲡⲉⲑⲙⲟⲥϯ ̀ⲙⲙⲟⲓ ⲁϥϫⲱ ̀ⲛϩⲁⲛⲛⲓϣϯ ̀ⲛⲥⲁϫⲓ ̀ⲉ̀ϩⲣⲏⲓ ̀ⲉϫⲱⲓ ⲛⲁⲓ ⲛⲁⲭⲟⲡⲧ ̀ⲉⲃⲟⲗ ϩⲁⲣⲟϥ</td>
            <td class="arabic">ولو ان مبغضى عظم علىّ الكلام لاختفيت منه.</td>
        </tr>
        <tr id="table_39_row_3" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_41" title="Coptic Gospel">
        <caption id="caption_table_41" class="caption">Coptic Gospel<br>(Luke 22: 7 - 13)
        <span class="arabic-caption">الأنجيل قبطي<br>(لوقا 22: 7 - 13)</span></caption>
        <tr id="table_41_row_0" class="priest">
            <td class="english">A chapter according to Saint Luke,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار لوقا</td>
        </tr>
        <tr id="table_41_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_41_row_2" class="text">
            <td class="coptic">Ⲁϥ̀ⲓ ⲇⲉ ̀ⲛϫⲉ ⲡⲓ̀ⲉϩⲟⲟⲩ ̀ⲛⲧⲉ ⲫⲛⲓⲁⲧϣⲉⲙⲏⲣ ⲫⲏ̀ⲉⲧⲉ ̀ⲥϣⲉ ̀ⲉϣⲁⲧ ̀ⲙⲡⲓⲡⲁⲥⲭⲁ ̀ⲛϧⲏⲧϥ. Ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲣⲡ ̀ⲙⲠⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ̀ⲉⲁϥϫⲟⲥ : ϫⲉ ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲥⲉⲃⲧⲉ ⲡⲓⲡⲁⲥⲭⲁ ⲛⲁⲛ ϩⲓⲛⲁ ̀ⲛⲧⲉⲛⲟⲩⲟⲙϥ. ̀Ⲛⲑⲱⲟⲩ ⲇⲉ ⲡⲉϫⲱⲟⲩ ⲛⲁϥ ϫⲉ ̀ⲭⲟⲩⲱϣ ̀ⲛⲧⲉⲛⲥⲉⲃⲧⲱⲧϥ ⲑⲱⲛ. ̀Ⲛⲑⲟϥ ⲇⲉ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ : ϫⲉ ϩⲏⲡⲡⲉ ̀ⲉⲣⲉⲧⲉⲛⲛⲁϣⲉⲛⲱⲧⲉⲛ ̀ⲉϧⲟⲩⲛ ̀ⲉϯⲃⲁⲕⲓ :
            <br> ̀ Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅ </td>
        </tr>
        <tr id="table_41_row_3" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_11" title="Engligh and Arabic Psalm & Gospel">
<table id="table_42" title="Psalm">
    <caption id="caption_table_42" class="caption">Psalm<br>(55:21,12)
    <span class="arabic-caption">المزمور<br>(55: 21 و 12)</span></caption>
    <tr id="table_42_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_42_row_4" class="text">
        <td class="english">His words were softer than oil, 
And they are arrows.</td>
        <td class="arabic">فلو كان العدو عيرنى اذاً لاحتملت.  ولو ان مبغضى عظم علىّ الكلام لاختفيت منه.</td>
    </tr>
    <tr id="table_42_row_5" class="text">
        <td class="english">For if an enemy reviled me, I would have endured it; And if one hating me boasted against me, I would have hidden from him.</td>
        <td class="arabic"></td>
    </tr>
    <tr id="table_42_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_43" title="Gospel">
    <caption id="caption_table_43" class="caption">Gospel<br>(Luke 22:7-13)
<span class="arabic-caption">الانجيل<br>(لوقا 22: 7- 13)</span></caption>
    <tr id="table_43_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_43_row_4" class="text">
        <td class="english">Then came the Day of Unleavened Bread, when the Passover must be killed.</td>
        <td class="arabic">وَجَاءَ يَوْمُ الْفَطِيرِ الَّذِي كَانَ يَنْبَغِي أَنْ يُذْبَحَ فِيهِ الْفِصْحُ.</td>
    </tr>
    <tr id="table_43_row_5" class="text">
        <td class="english">And He sent Peter and John, saying, "Go and prepare the Passover for us, that we may eat."</td>
        <td class="arabic">فَأَرْسَلَ بُطْرُسَ وَيُوحَنَّا قَائِلاً: «اذْهَبَا وَأَعِدَّا لَنَا الْفِصْحَ لِنَأْكُلَ».</td>
    </tr>
    <tr id="table_43_row_6" class="text">
        <td class="english">So they said to Him, "Where do You want us to prepare?"</td>
        <td class="arabic">فَقَالاَ لَهُ: «أَيْنَ تُرِيدُ أَنْ نُعِدَّ؟».</td>
    </tr>
    <tr id="table_43_row_7" class="text">
        <td class="english">And He said to them, "Behold, when you have entered the city, a man will meet you carrying a pitcher of water; follow him into the house which he enters.</td>
        <td class="arabic">فَقَالَ لَهُمَا: «إِذَا دَخَلْتُمَا الْمَدِينَةَ يَسْتَقْبِلُكُمَا إِنْسَانٌ حَامِلٌ جَرَّةَ مَاءٍ. اِتْبَعَاهُ إِلَى الْبَيْتِ حَيْثُ يَدْخُلُ</td>
    </tr>
    <tr id="table_43_row_8" class="text">
        <td class="english">Then you shall say to the master of the house, 'The Teacher says to you, "Where is the guest room where I may eat the Passover with My disciples?" '</td>
        <td class="arabic">وَقُولاَ لِرَبِّ الْبَيْتِ: يَقُولُ لَكَ الْمُعَلِّمُ: أَيْنَ الْمَنْزِلُ حَيْثُ آكُلُ الْفِصْحَ مَعَ تَلاَمِيذِي؟</td>
    </tr>
    <tr id="table_43_row_9" class="text">
        <td class="english">Then he will show you a large, furnished upper room; there make ready."</td>
        <td class="arabic">فَذَاكَ يُرِيكُمَا عِلِّيَّةً كَبِيرَةً مَفْرُوشَةً. هُنَاكَ أَعِدَّا».</td>
    </tr>
    <tr id="table_43_row_10" class="text">
        <td class="english">So they went and found it just as He had said to them, and they prepared the Passover.</td>
        <td class="arabic">فَانْطَلَقَا وَوَجَدَا كَمَا قَالَ لَهُمَا فَأَعَدَّا الْفِصْحَ.</td>
    </tr>
    <tr id="table_43_row_12" class="intro">
        <td class="english">Bow down before the Holy Gospel.
Glory be to God forever.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس. 
والمجد لله دائماً.</td>
    </tr>
</table>
</div>


<div class="section" id="section_12" title="Exposition">
${daytimeExpositionIntroHtml}

<table id="table_45" title="Exposition">
    <caption id="caption_table_45" class="caption">Exposition
<span class="arabic-caption">الطرح</span></caption>
    <tr id="table_45_row_1" class="intro">
        <td class="english">The exposition of the FIRST Hour of the DAY of COVENANT THURSDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الأولى من يوم الخميس العهد من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_45_row_4" class="text">
        <td class="english">Passover is drawing near, O Lord.</td>
        <td class="arabic">يوم الفصح قد اقترب يا سيدنا.</td>
    </tr>
    <tr id="table_45_row_5" class="text">
        <td class="english">We have found the place to celebrate it in.</td>
        <td class="arabic">عرفنا المكان الذى فيه نعده لك.</td>
    </tr>
    <tr id="table_45_row_6" class="text">
        <td class="english">You are our Passover.</td>
        <td class="arabic">هكذا قال التلاميذ للمعلم. أنت هو فصحنا يا يسوع المسيح.</td>
    </tr>
    <tr id="table_45_row_7" class="text">
        <td class="english">He sent two of His disciples, Peter and John, and told them; go to this town and you will find a man carrying a jar of water.</td>
        <td class="arabic">فأرسل اثنين من تلاميذه، الصفا ويوحنا، وقال لهما: قوما وامضيا إلى هذه المدينة فتجدان رجلاً حاملاً جرة ماء.</td>
    </tr>
    <tr id="table_45_row_8" class="text">
        <td class="english">Follow his footsteps to the place where he goes in.</td>
        <td class="arabic">إذا مشى، سيرا أنتما خلفه إلى الموضع الذى يدخل إليه،</td>
    </tr>
    <tr id="table_45_row_9" class="text">
        <td class="english">Go see the owner of the house and tell him, “The Lord says,  ‘where is the place where I may celebrate Passover.’”</td>
        <td class="arabic">وقولا لصاحب البيت: يقول المعلم أين المكان الذى أكمل فيه الفصح؟</td>
    </tr>
    <tr id="table_45_row_10" class="text">
        <td class="english">He will show you an upper room which is vacant but furnished.</td>
        <td class="arabic">فذلك يريكما علية علوية خالية مفروشة.</td>
    </tr>
    <tr id="table_45_row_11" class="text">
        <td class="english">Make preparation for Passover there.</td>
        <td class="arabic">أعدا الفصح فى ذلك الموضع.</td>
    </tr>
    <tr id="table_45_row_12" class="text">
        <td class="english">They did as the Lord said.</td>
        <td class="arabic">وهكذا صنعا كقول الرب.</td>
    </tr>
    <tr id="table_45_row_13" class="text">
        <td class="english">Come all you nations and rejoice, God the Word is our Passover.</td>
        <td class="arabic">تعالوا أيها الأمم وأفرحوا وتهللوا، لأن الاله الكلمة صار لكم فصحاً.</td>
    </tr>
    <tr id="table_45_row_14" class="text">
        <td class="english">The first Passover lamb delivered the people from the servitude of Pharaoh.</td>
        <td class="arabic">الفصح الأول الذى بالخروف خلص الشعوب من عبودية فرعون،</td>
    </tr>
    <tr id="table_45_row_15" class="text">
        <td class="english">The new Passover is the Son of God who saves the world from corruption.</td>
        <td class="arabic">والفصح الجديد هو ابن الله الذى خلص العالم من الفساد.</td>
    </tr>
    <tr id="table_45_row_16" class="text">
        <td class="english">In so many forms, He prepared the world-from the east to the west-for eternal salvation.</td>
        <td class="arabic">وبأنواع كثيرة وطرق شتى أعد الخلاص والنجاة الأبدية، 
لكن هذا الخلاص هو لكل العالم من مشارق الشمس إلى مغاربها.</td>
    </tr>
    <tr id="table_45_row_17" class="text">
        <td class="english">He lifted us to the heights of His mercy and compassion.</td>
        <td class="arabic">جذب كل أحد إلى علو رحمته ورأفته التى كان يصنعها.</td>
    </tr>
    <tr id="table_45_row_18" class="text">
        <td class="english">He manifested the greatness of His grace that He bestowed on all the creation.</td>
        <td class="arabic">وأظهر لهم كثرة نعمته التى أفاضها على كل موضع من المسكونة.</td>
    </tr>
    <tr id="table_45_row_19" class="text">
        <td class="english">He carried our load and granted us His righteousness.</td>
        <td class="arabic">أخذ الذى لنا وأعطانا الذى له، وتفضل علينا بصلاحه.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_13" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};