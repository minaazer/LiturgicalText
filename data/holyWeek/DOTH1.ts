import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross, faiEtafEnf} from "../repeatedPrayers";

export const DOTH1 = () => {
    const hourIntroHtml = hourIntro("FIRST","الأولى","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const paschalPraiseHtml = paschalPraise2("5","8","9","FIRST","الأولى","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const faiEtafEnfHtml = faiEtafEnf("32");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁϥⲓ̀ ⲇⲉ ⲛ̀ϫⲉ ⲡⲓⲁ̀ⲙⲁⲗⲡⲕ ⲟⲩⲟϩ ⲁϥⲃⲱⲧⲥ ⲉ̀ⲡⲒ̀̅ⲥ̅ⲗ ϧⲉⲛ Ⲣⲁⲫⲁⲍⲓⲛ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ:</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲙⲱⲩ̀ⲥⲏⲥ ⲇⲉ ⲁϥϭⲓ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀Ⲡⲓ̅ⲥ̅ⲗ̅ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲫ̀ⲓⲟⲙ ⲛ̀ϩⲁϩ ⲟⲩⲟϩ ⲁϥⲓ̀ⲛⲓ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲡ̀ϣⲁϥⲉ ⲛ̀ⲧⲉ Ⲥⲟⲩⲣ.</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲱϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩϫⲟⲙ ⲛ̀ⲕⲧ̅ⲙϯⲥⲟ ϭⲓⲥⲓ ⲛⲧⲉⲕⲥ̀ⲙⲏ ⲛ̀ⲑⲉ ⲛ̀ⲟⲩⲥⲁⲗⲡⲓⲅⲝ ⲛⲕϫⲱ ⲉ̀ⲡⲁⲗⲁⲟⲥ ⲛ̀ⲛⲟⲩⲛⲟⲃⲓ ⲟⲩⲟϩ ⲡ̀ⲏⲓ ⲛ̀ⲓⲁⲕⲱⲃ ⲛ̀ⲛⲟⲩⲁⲛⲟⲙⲓⲁ ϫⲉ ⲁ̀ⲛⲟⲕ ⲥⲉϣⲓⲛⲓ ⲛ̀ⲥⲱⲓ ⲛ̀ⲟⲩϩⲟⲟⲩ ⲟⲩⲟϩ ⲥⲉⲉ̀ⲡⲓⲑⲩⲙⲉⲓ ⲉ̀ⲥⲟⲩⲛ ⲛⲁϩⲓ̀ⲟⲩⲓ̀ ⲛ̀ⲑⲉ ⲛ̀ⲟⲩⲗⲁⲟⲥ ⲉϥⲉⲓ̀ⲣⲓ ⲛ̀ⲟⲩⲇⲓⲕⲁⲓ̀ⲟⲥⲩⲛⲏ.</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲛⲉ ⲛⲏⲉⲧⲁ Ⲡ̀⳪ ϫⲱ ⲙ̀ⲙⲱⲟⲩ ϫⲉ ⲧⲉⲯⲩⲭⲏ ⲉⲑⲛⲁⲉⲣⲛⲟⲃⲓ ⲛ̀ⲧⲟⲥ ⲧⲉⲧⲛⲁⲙⲟⲩ ⲙ̀ⲡ̀ϣⲏⲣⲓ ⲛⲁϭⲓ ⲁⲛ ⲙ̀ⲡ̀ϭⲓⲛ̀ϫⲟⲛⲥ ⲙ̀ⲡⲉϥⲓⲱⲧ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
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
        <caption id="caption_table_7" class="caption">Homily<br>(St. John Chrysostom)
    <span class="arabic-caption">العظة<br>(القديس يوحنا فم الذهب)</span></caption>
        <tr id="table_7_row_1" class="intro">
            <td class="english">A homily of our holy father Abba John Chrysostom. May his blessings be with us. Amen.</td>
            <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ Ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭ̀ⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
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
            <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭ̀ⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
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
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲉⲗⲉⲏⲥⲟⲛ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀Ⲡⲁⲧⲏⲣ ⲟ̀ ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ”’: Ⲡⲁⲛⲁ̀ⲅⲓⲁ̀ ⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏⲥⲟⲛ ⲏ̀ⲙⲁⲥ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>ارحمنا يا الله الآب ضابط الكل ايها الثالوث القدوس ارحمنا</td>
        </tr>
        <tr id="table_10_row_2" class="text">
            <td class="english">O Lord God of hosts be with us, for we have no helper in our tribulations and afflictions but You.</td>
            <td class="coptic">Ⲡ⳪ Ⲫϯ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ϫⲉ ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲁⲛ ⲛ̀ⲟⲩⲃⲟⲏ̀ⲑⲟⲥ ‘ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲓⲯⲓⲥ ⲛⲉⲙ ⲛⲉⲛϩⲟϫϩⲉϫ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟⲕ.</td>
            <td class="arabic">ايها الرب اله القوات كن معنا لانه ليس لنا معين فى شدائدنا وضيقاتنا سواك.</td>
        </tr>
        <tr id="table_10_row_3" class="text">
            <td class="english">Make us worthy to pray thankfully: Our Father who art in heaven...</td>
            <td class="coptic">Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲧ ⲉⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ...</td>
            <td class="arabic">اللهُمَّ اجعلْنا مُستحقينَ أن نقولَ بشكرٍ: أبانا الذي في السمواتِ...</td>
        </tr>

        <tr id="table_10_row_5" class="text">
            <td class="english"><span class="role">Congregation:<br></span>In Christ Jesus our Lord.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>بالمسيح يسوع ربنا.</td>
        </tr>

        <tr id="table_10_row_7" class="text">
            <td class="english"><span class="role">Priest:<br></span>Let us pray.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲗⲏⲗ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>صلوا.</td>
        </tr>

        <tr id="table_10_row_9" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Stand up for prayer.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲉⲡⲓ ⲡ̀ⲣⲟⲥⲉⲩⲭⲏ ⲥ̀ⲧⲁⲑⲏⲧⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>للصلاة قفوا</td>
        </tr>

        <tr id="table_10_row_11" class="text">
            <td class="english"><span class="role">Priest:<br></span>Peace be with all.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>السلام للكل.</td>
        </tr>

        <tr id="table_10_row_13" class="text">
            <td class="english"><span class="role">Congregation:<br></span>And with your spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>ولروحك أيضاً.</td>
        </tr>

        <tr id="table_10_row_15" class="text">
            <td class="english"><span class="role">Priest:<br></span>Let us give thanks to the beneficent and merciful God, the Father of our Lord, God, and Savior Jesus Christ.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲙⲁⲣⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲣⲉϥⲉⲣⲡⲉⲑⲛⲁⲛⲉϥ ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏⲧ: Ⲫϯ Ⲫⲓⲱⲧ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲡⲉⲛⲥⲱⲧⲏⲣ  Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>فلنشكر صانع الخيرات الرحوم الله أبا ربنا وإلهنا ومخلصنا يسوع المسيح.</td>
        </tr>
        <tr id="table_10_row_16" class="text">
            <td class="english">For He has covered us, helped us, guarded us, accepted us unto Himself, spared us, supported us, and brought us to this hour.</td>
            <td class="coptic">Ϫⲉ ⲁϥⲉⲣⲥ̀ⲕⲉⲡⲁⲍⲓⲛ ⲉ̀ϫⲱⲛ : ⲁϥⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ : ⲁϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ : ⲁϥϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟϥ  ⲁϥϯⲁ̀ⲥⲟ ⲉ̀ⲣⲟⲛ : ⲁϥϯⲧⲟⲧⲉⲛ ⲁϥⲉⲛⲧⲉⲛ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ  ⲉ̀ⲧⲁⲓⲟⲩⲛⲟⲩ ⲑⲁⲓ.</td>
            <td class="arabic"> لأنه سترنا وأعاننا وحفظنا وقبلنا إليه وشفق علينا وعضدنا وأتي بنا إلي هذه الساعة.</td>
        </tr>
        <tr id="table_10_row_17" class="text">
            <td class="english">Let us also ask Him, the Lord our God, the Pantocrator, to guard us in all peace this holy day and all the days of our life.</td>
            <td class="coptic">Ⲛⲑⲟϥ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀ⲣⲟϥ ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ : ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲉⲑⲟⲩⲁⲃ  ⲫⲁⲓ ⲛⲉⲙ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲱⲛϧ:  ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ:  ⲛ̀ϫⲉ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.</td>
            <td class="arabic">هو أيضا فلنسأله أن يحفظنا في هذا اليوم المقدس وكل أيام حياتنا بكل سلام، ضابط الكل الرب الهنا.</td>
        </tr>

        <tr id="table_10_row_19" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Let us pray.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>صلوا.</td>
        </tr>

        <tr id="table_10_row_21" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

        <tr id="table_10_row_23" class="text">
            <td class="english"><span class="role">Priest:<br></span>O Master, Lord, God the Pantocrator, the Father of our Lord, God, and Savior Jesus Christ,</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲫⲛⲏⲃ  Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : Ⲫⲓⲱⲧ ⲙ̀Ⲡⲉⲛⲟⲥ̅ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲡⲉⲛⲥⲱⲧⲏⲣ  Ⲓˉⲏⲥⲟⲩⲥ  Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>أيها السيد الرب الاله ضابط الكل أبو ربنا وإلهنا ومخلصنا يسوع المسيح،</td>
        </tr>
        <tr id="table_10_row_24" class="text">
            <td class="english">we thank You for everything, concerning everything, and in everything.</td>
            <td class="coptic">Ⲧⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ ⲕⲁⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲉⲑⲃⲉ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">نشكرك علي كل حال ومن أجل كل حال وفي كل حال.</td>
        </tr>
        <tr id="table_10_row_25" class="text">
            <td class="english">For You have covered us, helped us, guarded us, accepted us to Yourself, spared us, supported us, and brought us to this hour.</td>
            <td class="coptic">Ϫⲉ ⲁⲕⲉⲣⲥ̀ⲕⲉⲡⲁⲍⲓⲛ ⲉ̀ϫⲱⲛ:  ⲁⲕⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ:  ⲁⲕⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲁⲕϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ   ⲁⲕϯⲁ̀ⲥⲟ ⲉ̀ⲣⲟⲛ: ⲁⲕϯⲧⲟⲧⲉⲛ:  ⲁⲕⲉⲛⲧⲉⲛ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧⲁⲓ ⲟⲩⲛⲟⲩ ⲑⲁⲓ.</td>
            <td class="arabic">لانك سترتنا وأعنتنا وحفظتنا وقبلتنا إليك وشفقت علينا وعضدتنا، وأتيت بنا إلي هذه الساعة. </td>
        </tr>

        <tr id="table_10_row_27" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray that God may have mercy and compassion on us, hear us, help us, and accept the supplications and prayers of His saints, for that which is good on our behalf at all times; And forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲧⲱⲃϩ ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ : ⲛ̀ⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ : ⲛ̀ⲧⲉϥⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ : ⲛ̀ⲧⲉϥⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ ⲛ̀ⲧⲉϥϭⲓ ⲛ̀ⲛⲓϯϩⲟ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁϥ ⲛ̀ⲧⲟⲧⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲉ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ  ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>أطلبوا لكي يرحمنا الله ويتراءف علينا ويسمعنا ويعيننا ويقبل سؤالات وطلبات قديسيه منهم بالصلاح عنا في كل حين ويغفر لنا خطايانا. </td>
        </tr>

        <tr id="table_10_row_29" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

        <tr id="table_10_row_31" class="text">
            <td class="english"><span class="role">Priest:<br></span>Therefore, we ask and entreat Your goodness, O Lover of Mankind, grant us to complete this holy day, and all the days of our life in all peace with Your fear.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲉ̀ⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲙⲏⲓⲥ ⲛⲁⲛ ⲉⲑⲣⲉⲛϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲁⲓ ⲕⲉ ⲉ̀ϩⲟⲟⲩ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ : ⲛⲉⲙ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲱⲛϧ: ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲧⲉⲕϩⲟϯ.</td>
            <td class="arabic"><span class="الكاهن">Priest<br>من اجل هذا نسأل ونطلب. من صلاحك يا محب البشر امنحنا أن نكمل هذا اليوم المقدس وكل أيام حياتنا بكل سلام مع مخافتك.</td>
        </tr>
        <tr id="table_10_row_32" class="text">
            <td class="english">All envy, all temptation, all the work of Satan, the counsel of wicked men and the rising up of enemies, hidden and manifest,</td>
            <td class="coptic"> Ⲫ̀ⲑⲟⲛⲟⲥ ⲛⲓⲃⲉⲛ: ⲡⲓⲣⲁⲥⲙⲟⲥ ⲛⲓⲃⲉⲛ: ⲉ̀ⲛⲉⲣⲅⲓⲁ̀ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ ⲡⲥⲟϭⲛⲓ ⲛ̀ⲧⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲩϩⲱⲟⲩ: ⲛⲉⲙ ⲡ̀ⲧⲱⲛϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲧⲉ ϩⲁⲛϫⲁϫⲓ ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic"> كل حسد وكل تجربة وكل فعل الشيطان ومؤامرة الناس الاشرار وقيام الاعداء الخفيين والظاهرين</td>
        </tr>
        <tr id="table_10_row_33" class="text">
            <td class="english">Take them away from us and from all Your people, and from this church, and from this Your holy place.</td>
            <td class="coptic">ⲁⲗⲓⲧⲟⲩ  ⲉⲃⲟⲗ ϩⲁⲣⲟⲛ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ :  ⲛⲉⲙ  ⲉ̀ⲃⲟⲗϩⲁ ⲧⲁⲓ ⲧ̀ⲣⲁⲡⲉⲍⲁ ⲑⲁⲓ: ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁⲡⲁⲓⲙⲁ ⲉⲑ̅ⲩ̅ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ.</td>
            <td class="arabic">انزعها عنا وعن سائر شعبك وعن هذه المائدة وعن موضعك المقدس هذا</td>
        </tr>
        <tr id="table_10_row_34" class="text">
            <td class="english">But those things which are good and profitable do provide for us, for it is You who have given us the authority to tread on serpents and scorpions, and upon all the power of the enemy.</td>
            <td class="coptic">Ⲛⲏ ⲇⲉ ⲉⲑⲛⲁⲛⲉⲩ ⲛⲉⲙ ⲛⲏⲉⲧⲉⲣⲛⲟϥⲣⲓ  ⲥⲁϩⲛⲓ ⲙ̀ⲙⲱⲟⲩ ⲛⲁⲛ : ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲕϯ ⲙ̀ⲡⲓⲉⲣϣⲓϣⲓ ⲛⲁⲛ :  ⲉ̀ϩⲱⲙⲓ ⲉ̀ϫⲉⲛ ⲛⲓϩⲟϥ  ⲛⲉⲙ  ⲛⲓϭⲗⲏ : ⲛⲉⲙ ⲉ̀ϫⲉⲛ ϯϫⲟⲙ ⲧⲏⲣⲥ ⲛ̀ⲧⲉ ⲡⲓϫⲁϫⲓ. </td>
            <td class="arabic">أما الصالحات والنافعات فارزقنا إياها لانك أنت الذي أعطيتنا السلطان أن ندوس على الحيات والعقارب وكل قوة العدو.</td>
        </tr>

        

    </table>
    <table id="table_11" title="Verses of Cymbals">
        <caption class="caption" id="caption_table_11">Verses of Cymbals
        <span class="arabic-caption">أرباع الناقوص</span></caption>
        <tr id="table_11_row_0" class="north">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.<br>We worship the Father and the Son, and the Holy Spirit, The Holy and Co-essential, Trinity.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ<br>Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ  : ϯⲧ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲟⲙⲟⲩⲟⲥⲓⲟⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.<br>نسجد للآب والأبن والروح القدس الثالوث المساوى فى الجوهر.</td>
        </tr>
        <tr id="table_11_row_1" class="south">
            <td class="english">Hail to the Church, the house of the angels, Hail to the Virgin, who gave birth to our Savior.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ : ⲡ̀ⲏⲓ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ : ⲭⲉⲣⲉ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ⲉⲧⲁⲥⲙⲉⲥ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
            <td class="arabic">السلام للكنيسة بيت الملائكة السلام للعذراء التى ولدت مخلصنا .</td>
        </tr>
        <tr id="table_11_row_2" class="north">
            <td class="english">Your Body and Your Blood, are the forgiveness of our sins, with the New Covenant, that You gave to Your disciples.</td>
            <td class="coptic">Ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ ⲛ̀ⲧⲁⲕ: ⲡⲉ ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ: ⲛⲉⲙ ϯⲇⲓⲁⲑⲏⲕⲓ ⲙ̀ⲃⲉⲣⲓ: ⲉ̀ⲧⲁⲕⲧⲏⲓⲥ ⲛ̀ⲛⲉⲕⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic">جسدك و دمك هما غفران خطايانا مع العهد الجديد الى أعطيت لتلاميذك.</td>
        </tr>
        <tr id="table_11_row_3" class="south">
            <td class="english">Hail to you O Mary, the fair dove, who has borne to us, God the Logos.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀:  ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ:  ⲑⲏⲉⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ:  ⲙ̀ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">السلام لك يا مريم الحمامة الحسنة التي ولدت لنا الله الكلمة.</td>
        </tr>
        <tr id="table_11_row_4" class="north">
            <td class="english">Hail to you O Mary, with a holy hail, Hail to you O Mary, the Mother of the Holy.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀:  ϧⲉⲛ  ⲟⲩⲭⲉⲣⲉ  ⲉϥⲟⲩⲁⲃ:  ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀:  ⲑ̀ⲙⲁⲩ  ⲙ̀ⲫⲏⲉⲑ̅ⲩ̅.</td>
            <td class="arabic">السلام لك يا مريم سلام مقدس السلام لك يا مريم أم القدوس.</td>
        </tr>
        <tr id="table_11_row_5" class="south">
            <td class="english">Hail to Michael, the great archangel, hail to Gabriel, the chosen Announcer.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲁ̀ⲣⲭⲏⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲭⲉⲣⲉ Ⲅⲁⲃⲣⲓⲏⲗ: ⲡⲓⲥⲟⲧⲡ ⲙ̀ⲡⲓϥⲁⲓϣⲉⲛⲛⲟⲩϥⲓ.</td>
            <td class="arabic">السلام لميخائيل رئيس الملائكة العظيم السلام لغبريال المبشر.</td>
        </tr>
        <tr id="table_11_row_6" class="north">
            <td class="english">Hail to the Cherubim, Hail to the Seraphim, Hail to all: the heavenly orders.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲭⲉⲣⲉ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ⲭⲉⲣⲉ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ: ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">السلام للشاروبيم السلام للسارافيم السلام لجميع الطغمات السمائية. </td>
        </tr>
        <tr id="table_11_row_7" class="south">
            <td class="english">Hail to John: the great forerunner, Hail to the priest, the kinsman of Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ⲡⲓⲛⲓϣϯ ⲙ̀ⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲟⲩⲏⲃ: ⲡ̀ⲥⲉⲅⲅⲉⲛⲏⲥ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لسادتي الآباء الرسل السلام لتلاميذ ربنا يسوع المسيح.</td>
        </tr>
        <tr id="table_11_row_8" class="north">
            <td class="english">Hail to my lords, and fathers the apostles, Hail to the disciples, of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ: ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲭⲉⲣⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲟⲥ̅  Ⲓⲏⲥ Ⲡⲭⲥ.</td>
            <td class="arabic">السلام لسادتي الآباء الرسل السلام لتلاميذ ربنا يسوع المسيح.</td>
        </tr>
        <tr id="table_11_row_9" class="south">
            <td class="english">Hail to you, O martyr:  Hail to the evangelist:  Hail to the apostle: St. Mark the beholder of God.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ̀̀ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲭⲉⲣⲉ ⲡⲓ̀̀ⲁⲡⲟⲥⲧⲗⲟⲥ: Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉ̀̀ⲱⲣⲓⲙⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للإنجيلى .السلام للرسول . مرقس ناظر الإله.</td>
        </tr>
        <tr id="table_11_row_10" class="north">
            <td class="english">Hail to you, O martyr: Hail to the courageous hero: Hail to the fighter: my master, Prince George.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد سيدى الملك جيؤرجيوس</td>
        </tr>
        <tr id="table_11_row_11" class="south">
            <td class="english">Hail to you O martyr: hail to the courageous hero: hail to the struggle-mantled: Philopateer Mercurius. </td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ ⲛⲅⲉⲛⲛⲉⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الشهيد: السلام للشجاع البطل: السلام للمجاهد: محب الآب مرقوريوس.</td>
        </tr>
        <tr id="table_11_row_12" class="north">
            <td class="english">Hail to you, O martyr: Hail to the courageous hero: Hail to the fighter: abba Mina of Vaiat.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ:  ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ⲛ̀ⲧⲉ ⲛⲓⲫⲁⲓⲁⲧ.</td>
            <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد آبا مينا البياضي.</td>
        </tr>
        <tr id="table_11_row_13" class="south">
            <td class="english">Hail to our father Abba Antony, the lamp of monasticism, hail to our father Abba Paul, the beloved of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲡⲓϧⲏⲃⲥ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبينا انطونيوس مصباح الرهبنة السلام لأبينا انبا بولا حبيب المسيح.</td>
        </tr>
        <tr id="table_11_row_14" class="north">
            <td class="english">Hail to my masters and fathers, the lovers of their children, Abba Bishoy and Abba Paul the beloved of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟⲧ: ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲡⲓϣⲟⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲓⲙⲉⲛⲣⲁϯ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic">السلام لأبينا القديس البطريرك: السلام لأثناسيوس الرسول: حبيب المسيح.</td>
        </tr>
        <tr id="table_11_row_15" class="south">
            <td class="english">Through the intercessions, of the Theotokos Saint Mary, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲉ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑ̅ⲩ̅ Ⲙⲁⲣⲓⲁ̀: Ⲡⲟⲥ̅ ⲁ̀ⲣⲓ ̀ϩⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ .</td>
            <td class="arabic">بشفاعات والدة الاله  القديسة مريم، يارب انعم لنا بمغفرة خطايانا.</td>
        </tr>
        <tr id="table_11_row_16" class="north">
            <td class="english">That we may praise You: with Your good Father: and the Holy Spirit: for You were crucified and saved us. Have mercy on us.</td>
            <td class="coptic">Ⲉⲑⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡⲛⲁ ⲉⲑ̅ⲩ̅: ϫⲉ ⲁⲩⲁϣⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
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
            <td class="english">For, behold, I was conceived in iniquities, and in sins my mother conceived me. For, behold, You have loved the truth; You have manifested to me the hidden and unrevealed things of Your wisdom.</td>
            <td class="arabic">لأني هاأنذا بالإثم حبل بي، وبالخطايا ولدتني أمي. لأنك هكذا قد أحببت الحق، إذ أوضحت لي غوامض حكمتك ومستوراتها.</td>
        </tr>
        <tr id="table_12_row_4" class="text">
            <td class="english">You shall sprinkle me with Your hyssop, and I shall be purified. You shall wash me, and I shall be made whiter than snow.</td>
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
            <td class="english">Do good, O Lord, in Your good pleasure to Zion; and let the walls of Jerusalem be built. Then You shall be pleased with sacrifices of righteousness, offering, and burnt sacrifices: then they shall offer calves upon Your altar. Alleluia.</td>
            <td class="arabic">أنعم يا رب بمسرتك على صهيون، ولتبن أسوار أورشليم. حينئذ تسر بذبائح البر قربانا ومحرقات ويقربون على مذابحك العجول. هلليلويا.</td>
        </tr>
    </table>
    <table id="table_13" title="Litany of the Sick">
        <caption class="caption" id="caption_table_13">Litany of the Sick
        <span class="arabic-caption">أوشية المرضى</span></caption>

        <tr id="table_13_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>Let us Pray.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲗⲏⲗ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>صلوا</td>
        </tr>

        <tr id="table_13_row_3" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Stand up for prayer.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲉⲡⲓ ⲡ̀ⲣⲟⲥⲉⲩⲭϩ ⲥ̀ⲧⲁⲑⲏⲧⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>للصلاة قفوا</td>
        </tr>

        <tr id="table_13_row_5" class="text">
            <td class="english"><span class="role">Priest:<br></span>Peace be with all.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>السلام للكل.</td>
        </tr>

        <tr id="table_13_row_7" class="text">
            <td class="english"><span class="role">Congregation:<br></span>And with your spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>ولروحك أيضاً..</td>
        </tr>

        <tr id="table_13_row_9" class="text">
            <td class="english"><span class="role">Priest:<br></span>Again, let us ask God the Pantocrator, the Father of our Lord, God and Savior, Jesus Christ.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲡⲁⲗⲓⲛ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀Ⲫϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: Ⲫⲓⲱⲧ ⲙ̀Ⲡⲉⲛ̅ⲟ̅ⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛ̅ⲥ̅ⲱ̅ⲣ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>وأيضا فلنسال الله ضابط الكل أبا ربنا وإلهنا ومخلصنا يسوع المسيح</td>
        </tr>
        <tr id="table_13_row_10" class="text">
            <td class="english">We ask and entreat Your goodness, O Lover of Mankind, remember, O Lord, the sick among Your people.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛⲧⲉⲕⲙⲉⲧ ⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀̅ⲟ̅ⲥ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ.</td>
            <td class="arabic">نسأل ونطلب من صلاحك يا محب البشر: أذكر يارب مرضي شعبك</td>
        </tr>

        <tr id="table_13_row_12" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray for our fathers and brethren who are sick with any sickness, whether in this place or in any place, that Christ our God may grant us, with them, health and healing, and forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲧⲱⲃϩ ⲉϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥⲛⲏⲟⲩ ⲉⲧϣⲱⲛⲓ ϧⲉⲛ ϫⲓⲛϣⲱⲛⲓ ⲛⲓⲃⲉⲛ: ⲓ̀ⲧⲉ ϧⲉⲛ ⲡⲁⲓⲧⲟⲡⲟⲥ ⲓ̀ⲧⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲛⲉⲙⲱⲟⲩ ⲙ̀ⲡⲓⲟⲩϫⲁⲓ ⲛⲉⲙ ⲡⲓⲧⲁⲗϭⲟ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>اطلبوا عن آبائنا وإخوتنا المرضي بكل مرض إن كان في هذا المسكن أو بكل موضع لكي ينعم إلهنا عليهم وعلينا بالعافية والشفاء ويغفر لنا خطايانا.</td>
        </tr>

        <tr id="table_13_row_14" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>رب ارحم.</td>
        </tr>
      
        <tr id="table_13_row_16" class="text">
            <td class="english"><span class="role">Priest:<br></span>You have visited them with mercies and compassions, heal them.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲉⲁⲕϫⲉⲙ ⲡⲟⲩϣⲓⲛⲓ ϧⲉⲛ ϩⲁⲛⲛⲁⲓ ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ ⲙⲁⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>تعهدهم بالمراحم والرأفات اشفهم</td>
        </tr>
        <tr id="table_13_row_17" class="text">
            <td class="english">Take away from them, and from us, every sickness and every malady; the spirit of sicknesses, chase away.</td>
            <td class="coptic">Ⲁⲗⲓⲟⲩⲓ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲱⲟⲩ ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ ⲛ̀ϣⲱⲛⲓ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲓⲁⲃⲓ ⲛⲓⲃⲉⲛ: ⲛⲓ ⲛ̀ⲧⲉ ⲛⲓϣⲱⲛⲓ ϭⲟϫⲓ ⲛ̀ⲥⲱϥ.</td>
            <td class="arabic">انزع عنهم وعنا كل مرض وكل سقم، وروح الامراض أطرده،</td>
        </tr>
        <tr id="table_13_row_18" class="text">
            <td class="english">Those who have long lain in maladies, raise up and comfort. </td>
            <td class="coptic">Ⲛⲏ ⲉ̀ⲧⲁⲩⲱⲥⲕ ⲉⲩϣ̀ⲧⲏⲟⲩⲧ ϧⲉⲛ ⲛⲓⲓⲁⲃⲓ ⲙⲁⲧⲟⲩⲛⲟⲥⲟⲩ ⲟⲩⲟϩ ⲙⲁⲛⲟⲙϯ ⲛ̀ⲱⲟⲩ.</td>
            <td class="arabic">والذين أبطأوا مطروحين في الامراض أقمهم وعزهم</td>
        </tr>
        <tr id="table_13_row_19" class="text">
            <td class="english">Those who are afflicted by unclean spirits, set them all free.</td>
            <td class="coptic">Ⲛⲏ ⲉⲧ ⲧ̀ϩⲉⲙⲕⲏⲟⲩⲧ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲓ̅ⲡ̅ⲛ̅ⲁ ⲛ̀ⲁ̀ⲕⲁⲑⲣⲧⲟⲛ ⲁ̀ⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲣⲉⲙϩⲉ.</td>
            <td class="arabic">والمعذبون من الارواح النجسة اعتقهم جميعا.</td>
        </tr>
        <tr id="table_13_row_20" class="text">
            <td class="english">Those who are in prisons or dungeons, those who are in exile or captivity, or those who are held in bitter bondage, O Lord, set them all free and have mercy upon them.</td>
            <td class="coptic">Ⲛⲏ ⲉⲧϧⲉⲛ ⲛⲓϣⲧⲉⲕⲱⲟⲩ: ⲓⲉ ⲛⲓⲙⲉⲧⲁ̀ⲗⲱⲥ: ⲓⲉ ⲛⲏ ⲉⲧⲭⲏ ϧⲉⲛ ⲛⲓⲉ̀ⲝⲟⲣⲓⲥⲧⲓⲁ̀: ⲓⲉ ⲛⲓⲉⲭⲙⲁⲗⲱⲥⲓⲁ: ⲓⲉ ⲛⲏ ⲉ̀ⲧⲟⲩⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲧⲃⲱⲕ ⲉⲥⲉⲛϣⲁϣⲓ: Ⲡ̀̅ⲟ̅ⲥ ⲁⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲣⲉⲙϩⲉ ⲟⲩⲟϩ ⲛⲁⲓ ⲛ̀ⲱⲟⲩ.</td>
            <td class="arabic">الذين في السجون أو المطابق. أو الذين في النفي أو السبي أو المقبوض عليهم في عبودية مره يارب اعتقهم جميعهم وارحمهم.</td>
        </tr>
        <tr id="table_13_row_21" class="text">
            <td class="english">For You are He who loosens the bound and uplifts the fallen;</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉⲧⲃⲱⲗ ⲛ̀ⲛⲏ ⲉⲧⲥⲱⲛϩ ⲉ̀ⲃⲟⲗ: ⲟⲩⲟϩ ⲉⲧⲧⲁϩⲟ ⲉ̀ⲣⲁⲧⲟⲩ ⲛ̀ⲛⲏ ⲉⲧⲁⲩⲣⲁϧⲧⲟⲩ ⲉ̀ϧⲣⲏⲓ.</td>
            <td class="arabic">لأنك أنت الذي تحل المربوطين وتقيم الساقطين.</td>
        </tr>
        <tr id="table_13_row_22" class="text">
            <td class="english">the hope of those who have no hope and the help of those who have no helper;</td>
            <td class="coptic">ϯϩⲉⲗⲡⲓⲥ ⲛ̀ⲧⲉ ⲛⲏ ⲉ̀ⲧⲉ ⲙ̀ⲙⲟⲛⲧⲟⲩ ϩⲉⲗⲡⲓⲥ: ϯⲃⲟⲏⲑⲓⲁ ⲛ̀ⲧⲉ ⲛⲏ ⲉ̀ⲧⲉ ⲙⲙⲟⲛⲧⲟⲩ ⲃⲟⲏⲑⲟⲥ.</td>
            <td class="arabic">رجاء من ليس له رجاء، ومعين من ليس له معين.</td>
        </tr>
        <tr id="table_13_row_23" class="text">
            <td class="english">the comfort of the fainthearted; the harbor of those in the storm.</td>
            <td class="coptic"> Ⲑ̀ⲛⲟⲙϯ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲧⲟⲓ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ϩⲏⲧ: ⲡⲓⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲧⲭⲏ ϧⲉⲛ ⲡⲓⲭⲓⲙⲱⲛ. </td>
            <td class="arabic">عزاء صغيري القلوب، ميناء الذين في العاصف.</td>
        </tr>
        <tr id="table_13_row_24" class="text">
            <td class="english">All souls that are distressed or bound, grant them mercy, O Lord; grant them rest, grant them refreshment, grant them grace, grant them help, grant them salvation, grant them the forgiveness of their sins and their iniquities.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲧϩⲉϫϩⲱϫ ⲟⲩⲟϩ ⲉ̀ⲧⲟⲩⲁ̀ⲙⲟⲛⲓ ⲉ̀ϫⲱⲟⲩ. Ⲙⲟⲓ ⲛ̀ⲱⲟⲩ Ⲡ̀̅ⲟ̅ⲥ ⲛ̀ⲟⲩⲛⲁⲓ: ⲙⲟⲓ ⲛ̀ⲱⲟⲩ ⲛ̀ⲟⲩⲙ̀ⲧⲟⲛ: ⲙⲟⲓ ⲛ̀ⲱⲟⲩ ⲛ̀ⲟⲩⲭⲃⲟⲃ: ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ: ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲃⲟⲏⲑⲓⲁ̀: ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲥⲱⲧⲏⲣⲓⲁ: ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲙⲉⲧⲣⲉϥⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲟⲩⲛⲟⲃⲓ ⲛⲉⲙ ⲛⲟⲩⲁ̀ⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">كل الانفس المتضايقة أو المقبوض عليها: إعطها يارب رحمة. اعطها راحة اعطها برودة اعطها نعمة اعطها معونة اعطها خلاصا. اعطها غفران خطاياها وآثامها.</td>
        </tr>
        <tr id="table_13_row_25" class="text">
            <td class="english">As for us too, O Lord, the sicknesses of our souls, heal; and also those of our bodies, cure.</td>
            <td class="coptic">Ⲁⲛⲟⲛ ⲇⲉ ϩⲱⲛ Ⲡ̀̅ⲟ̅ⲥ ⲛⲓϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲩⲭⲏ ⲛ̀ⲁⲧⲁⲗϭⲱⲟⲩ: ⲟⲩⲟϩ ⲛⲁ ⲛⲉⲛⲕⲉⲥⲱⲙⲁ ⲁ̀ⲣⲉⲫⲁϧⲣⲓ ⲉ̀ⲣⲱⲟⲩ.</td>
            <td class="arabic">ونحن أيضا يارب أمراض نفوسنا إشفها، والتي لاجسادنا عافها،</td>
        </tr>
        <tr id="table_13_row_26" class="text">
            <td class="english">O You, the true physician of our souls and bodies, the Bishop of all flesh, visit us with Your salvation.</td>
            <td class="coptic">Ⲡⲓⲥⲏⲓⲛⲓ ⲙ̀ⲙⲏⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ: ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲧⲉ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ.</td>
            <td class="arabic">أيها الطبيب الحقيقي الذي لانفسنا وأجسادنا يا مدبر كل جسد تعهدنا بخلاصك.</td>
        </tr>

        <tr id="table_13_row_28" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>
    </table>      
    <table id="table_14" title="Litany of the Offering">
        <caption class="caption" id="caption_table_14">Litany of the Offering
        <span class="arabic-caption">أوشية القرابين</span></caption>

        <tr id="table_14_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>We ask and entreat Your goodness, O Lover of Mankind, remember, O Lord, the sacrifices, the offerings and the thanksgivings of those who have offered to the honor and glory of Your holy name.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ:Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ Ⲡ̅ⲟ̅ⲥ ⲛ̀ⲛⲓⲑⲩⲥⲓⲁ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ ⲛⲓϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉ ⲛⲏ ⲉ̀ⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲥⲫⲉⲣⲓⲛ. Ⲉⲟⲩⲧⲁⲓⲟ̀ ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉ̀ⲑⲟⲩⲁⲃ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>نسأل ونطلب من صلاحك يا محب البشر: أذكر يارب صعائد وقرابين وشكر الذين يقربون٬ كرامة ومجدا لاسمك القدوس.</td>
        </tr>

        <tr id="table_14_row_3" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray for those who provide for the sacrifices, offerings, first fruits, oil, incense, coverings, reading books, and altar vessels, that Christ our God may reward them in the heavenly Jerusalem, and forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲏ ⲉⲧϥⲓ ⲙ̀ⲫ̀ⲣⲱⲟⲩϣ ⲛ̀ⲛⲓⲑⲩⲥⲓⲁ̀ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ ⲛⲓⲁ̀ⲡⲁⲣⲭⲏ ⲛⲓⲛⲉϩ ⲛⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲛⲓⲥ̀ⲕⲉⲡⲁⲥⲙⲁ ⲛⲓϫⲱⲙ ⲛ̀ⲱϣ ⲛⲓⲕⲩⲙⲓⲗⲗⲓⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯϣⲉⲃⲓⲱ ⲛⲱⲟⲩ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲛⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>اطلبوا عن المهتمين بالصعائد والقرابين والبكور والزيت والبخور والستور وكتب القراءة وأواني المذبح لكي  المسيح إلهنا يكافئهم في أورشليم السمائية، ويغفر لنا خطايانا.</td>
        </tr>

        <tr id="table_14_row_5" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
            </tr>

        <tr id="table_14_row_7" class="text">
            <td class="english"><span class="role">Priest:<br></span>Receive them upon Your holy, rational altar in heaven as a sweet savor of incense before Your greatness in the heavens, through the service of Your holy angels and archangels.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲑⲩⲥⲓⲁⲧⲏⲣⲓⲟⲛ ⲉⲑⲩ ⲛ̀ⲉⲗⲗⲟⲅⲓⲙⲟⲛ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲉ̀ⲟⲩⲥⲑⲟⲓ ⲛ̀ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲧⲉⲕⲙⲉⲧⲛⲓϣϯ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡ̀ϣⲉⲙϣⲓ ⲛ̀ⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>إقبلها إليك علي مذبحك المقدس الناطق السمائي رائحة بخور تدخل إلي عظمتك التي في السموات بواسطة خدمة ملائكتك ورؤساء ملائكتك المقدسين، </td>
        </tr>
        <tr id="table_14_row_8" class="text">
            <td class="english">As You have received the gifts of the righteous Abel, the sacrifice of our father Abraham, and the two mites of the widow,</td>
            <td class="coptic"> Ⲙ̀ⲫⲣⲏϯ ⲉ̀ⲧⲁⲕϣⲱⲡ ⲉ̀ⲣⲟⲕ ⲛ̀ⲛⲓⲇⲱⲣⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲑⲙⲏⲓ Ⲁⲃⲉⲗ: ⲛⲉⲙ ϯⲑⲩⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ ϯⲧⲉⲃⲓ ⲥ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ϯⲭⲏⲣⲁ.</td>
            <td class="arabic">وكما قبلت إليك قرابين هابيل الصديق وذبيحة أبينا ابراهيم وفلسي الارملة،</td>
        </tr>
        <tr id="table_14_row_9" class="text">
            <td class="english">so also receive the thank offerings of Your servants - those in abundance or those in scarcity, hidden or manifest-</td>
            <td class="coptic">Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲛⲓⲕⲉⲉⲩⲭⲁⲣⲓⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ ⲛⲁ ⲡⲓϩⲟⲩⲟ ⲛⲉⲙ ⲛⲁ ⲡⲓⲕⲟⲩϫⲓ: ⲛⲏ ⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏ ⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">هكذا أيضا نذور عبيدك إقبلها إليك، أصحاب الكثير وأصحاب القليل، الخفيات والظاهرات،</td>
        </tr>
        <tr id="table_14_row_10" class="text">
            <td class="english">those who desire to offer to You but have none, and those who have offered these gifts to You this very day.</td>
            <td class="coptic">ⲛⲏ ⲉⲑⲟⲩⲱϣ ⲉ̀ⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲟⲩⲟϩ ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲱⲟⲩ: ⲛⲉⲙ ⲛⲏ ⲉ̀ⲧⲁⲩⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ϧⲉⲛ ⲡⲁⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ Ⲫⲟⲟⲩ ⲛ̀ⲛⲁdⲗⲱⲣⲟⲛ ⲛⲁⲓ. </td>
            <td class="arabic">والذين يريدون أن يقدموا لك وليس لهم، والذين قدموا لك في هذا اليوم هذه القرابين</td>
        </tr>
        <tr id="table_14_row_11" class="text">
            <td class="english">Give them the incorruptible instead of the corruptible, the heavenly instead of the earthly, and the eternal instead of the temporal.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲱⲟⲩ ⲛⲛⲓⲁⲧⲧⲁⲕⲟ ⲛ̀ⲧϣⲉⲃⲓⲱ ⲛ̀ⲛⲏ ⲉⲑⲛⲁⲧⲁⲕⲟ: ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ ⲛⲧ̀ϣⲉⲃⲓⲱ ⲛ̀ⲛⲁ ⲡⲕⲁϩⲓ: ⲛⲓϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲥ ⲟⲩⲥⲏⲟⲩ.</td>
            <td class="arabic">أعطهم الباقيات عوضا عن الفانيات، السمائيات عِوَض الارضيات، الأبديات عِوَض الزمنيات،</td>
        </tr>
        <tr id="table_14_row_12" class="text">
            <td class="english">Their houses and their stores, fill them with every good thing. Surround them, O Lord, by the power of Your holy angels and archangels.</td>
            <td class="coptic">Ⲛⲟⲩⲏⲟⲩ ⲛⲟⲩⲧⲁⲙⲓⲟⲛ ⲙⲁϩⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲁ̀ⲅⲁⲑⲟⲛ ⲛⲓⲃⲉⲛ. Ⲙⲁⲧⲁⲕⲧⲟ ⲉ̀ⲣⲱⲟⲩ Ⲡ̀̅ⲟ̅ⲥ ⲛ̀ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ.</td>
            <td class="arabic">بيوتهم ومخازنهم أملاها من كل الخيرات. أحطهم يارب بقوة ملائكتك ورؤساء ملائكتك الاطهار.</td>
        </tr>
        <tr id="table_14_row_13" class="text">
            <td class="english">As they have remembered Your holy name on earth, remember them also, O Lord, in Your kingdom, and in this age too, leave them not behind.</td>
            <td class="coptic">Ⲙⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲩⲉⲣ ⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ ̅ⲉ̅ⲑ̅ⲩ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲁ̀ⲣⲓⲡⲟⲩⲙⲉⲩⲓ̀ ϩⲱⲟⲩ Ⲡ̀̅ⲟ̅ⲥ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ: ⲟⲩⲟϩ ϧⲉⲛ ⲡⲁⲓⲕⲉⲉ̀ⲱⲛ ⲫⲁⲓ ⲙ̀ⲡⲉⲣⲭⲁⲩ ⲛ̀ⲥⲱⲕ.</td>
            <td class="arabic">وكما ذكروا اسمك القدوس علي الأرض أذكرهم أيضا يارب في ملكوتك، وفي هذا الدهر لا تتركهم عنك.</td>
        </tr>

        <tr id="table_14_row_15" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
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
            <td class="english">O Lord, the One and Only-Begotten Son, Jesus Christ, and the Holy Spirit.</td>
            <td class="arabic">أيها الرب الابن الوحيد يسوع المسيح والروح القدس.</td>
        </tr>
        <tr id="table_15_row_3" class="text">
            <td class="english">O Lord God, Lamb of God, Son of the Father, who takes away the sin of the world, have mercy on us. O You who take away the sin of the world, receive our prayers unto You,</td>
            <td class="arabic">أيها الرب الإله، حمل الله، ابن الآب، رافع خطية العالم، ارحمنا. يا حامل خطية العالم، اقبل طلباتنا إليك.</td>
        </tr>
        <tr id="table_15_row_4" class="text">
            <td class="english">Who sits at the right hand of His Father, have mercy on us. You only are the Holy; You only are the Most High, my Lord Jesus Christ, with the Holy Spirit. Glory be to God the Father. Amen.</td>
            <td class="arabic">الجالس عن يمين أبيه، ارحمنا. أنت وحدك القدوس. أنت وحدك العالي يا ربى يسوع المسيح والروح القدس. مجدا لله الآب أمين.</td>
        </tr>
        <tr id="table_15_row_5" class="text">
            <td class="english">Every day I will bless You and praise Your holy name forever and unto the age of ages. Amen</td>
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
            <td class="english">Holy God, Holy Mighty, Holy Immortal, who was crucified for us, have mercy upon us.</td>
            <td class="arabic">قدوس الله، قدوس القوي، قدوس الذي لا يموت، الذي صلب عنا، ارحمنا.</td>
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
            <td class="english">O You who are without sin, Lord have mercy on us. O You who are without sin, Lord, help us and receive our supplications. For Yours is the glory, the dominion, and the triple holiness. Lord have mercy. Lord have mercy. Lord bless us. Amen.</td>
            <td class="arabic">أيها الذي ليس له خطية يا رب، ساعدنا واقبل دعائنا. لأن لك المجد والسلطان والثلاث تقديسات. رب ارحم. رب ارحم. رب بارك. آمين.</td>
        </tr>
    </table>
    <table id="table_17" title="Our Father">
        <caption class="caption" id="caption_table_17">Our Father
        <span class="arabic-caption">أبانا الذي</span></caption>

        <tr id="table_17_row_1" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Our Father who art in heaven, hallowed be Thy name. Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from the evil one. In Christ Jesus our Lord. For Thine is the kingdom, the power, and the glory, forever. Amen.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>أبانا الذي في السموات، ليتقدس اسمك. ليأت ملكوتك. لتكن مشيئتك كما في السماء كذلك على الأرض. خبزنا الدائم أعطنا اليوم. وأغفر لنا خطايانا كما نغفر نحن للمذنبين إلينا. ولا تدخلنا في تجربة، بل نجنا من الشرير. في المسيح يسوع ربنا. لأن لك الملك والقوة والمجد إلى الأبد. آمين.</td>
        </tr>
    </table>
</div>

<div class="section" id="section_7" title="The Doxologies">
    <table id="table_18" title="Introduction to the doxologies">
        <caption class="caption" id="caption_table_18">Introduction to the Doxologies
        <span class="arabic-caption">مقدمة الذوكصولوجيات</span></caption>
        <tr id="table_18_row_0" class="north">
            <td class="english">In Christ Jesus our Lord. Amen. Alleluia.<br>Hail to you. We ask you, O saint, full of glory, the ever-virgin, the Theotokos, the Mother of Christ.</td>
            <td class="coptic">Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ. Ⲁⲙⲏⲛ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.<br>Ⲭⲉⲣⲉ ⲛⲉ ⲧⲉⲛϯϩⲟ  ⲉ̀ⲣⲟ : ⲱ̀ ⲑⲏⲉⲑⲟⲩⲁⲃ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ : ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ϯⲙⲁⲥⲛⲟⲩϯ ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">بالمسيح يسوع ربنا. امين. الليلويا.<br>السلام لك. نسألك أيتها القديسة الممتلئة مجدا العذراء كل حين، والدة الإله أم المسيح.</td>
        </tr>
        <tr id="table_18_row_1" class="south">
            <td class="english">Lift up our prayers unto your beloved Son, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁ̀ⲛⲓⲟⲩⲓ̀  ⲛ̀ⲧⲉⲛⲡ̀ⲣⲟⲥⲉⲩⲭⲏ : ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁ ⲡⲉϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أصعدي صلواتنا إلى ابنك الحبيب ليغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_18_row_2" class="north">
            <td class="english">Hail to the holy Virgin, who has brought forth unto us the true Light, Christ our God.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">السلام للتي ولدت لنا النور الحقيقي المسيح إلهنا، العذراء القديسة.</td>
        </tr>
        <tr id="table_18_row_3" class="south">
            <td class="english">Ask the Lord on our behalf, that He may have mercy on our souls, and forgive us our sins.</td>
            <td class="coptic">Ⲙ̀ⲁϯϩⲟ ⲙ̀Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛ̀ⲧⲉϥⲉⲣⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اسألي الرب عنا، ليصنع رحمة مع نفوسنا، ويغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_18_row_4" class="north">
            <td class="english">O Virgin Mary, the holy Theotokos, the faithful advocate for all mankind,</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ: ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛ̀ⲧⲉ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">أيتها العذراء مريم والدة الإله، القديسة الشفيعة الأمينة لجنس البشرية.</td>
        </tr>
        <tr id="table_18_row_5" class="south">
            <td class="english">Intercede on our behalf before Christ whom you bore, that He may forgive us our sins.</td>
            <td class="coptic">̀̀Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲁϩⲣⲉⲛ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲫⲏⲉ̀ⲧⲁⲅⲉϫ̀ⲫⲟϥ : ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">اشفعي فينا أمام المسيح الذي ولدته لكي ينعم علينا بغفران خطايانا.</td>
        </tr>
        <tr id="table_18_row_6" class="north">
            <td class="english">Hail to you O Virgin, the right and true Queen. Hail to the pride of our race, who bore to us Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :  ϯⲟⲩⲣⲱ  ⲙ̀ⲙⲏⲓ   ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        <tr id="table_18_row_7" class="south">
            <td class="english">We ask you to remember us, O our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ  ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ  ⲠⲓⲬ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ  ⲛⲁⲛ  ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
    </table>
    <table id="table_19" title="Matins Doxology for St. Mary">
        <caption class="caption" id="caption_table_19">Doxology for St. Mary (Matins)
        <span class="arabic-caption">ذوكصولوجية للسيدة العذراء مريم (باكر)</span></caption>
        <tr id="table_19_row_0" class="north">
            <td class="english">Blessed are you O Mary, the wise and the chaste, the Second Tabernacle, the spiritual treasure.</td>
            <td class="coptic">Ⲱⲟⲛⲓⲁϯ ⲛ̀ⲑⲟ Ⲙⲁⲣⲓⲁ̀: ϯⲥⲁⲃⲏ ⲟⲩⲟϩ ⲛ̀ⲥⲉⲙⲛⲉ: ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲥ̀ⲕⲏⲛⲏ: ⲡⲓⲁ̀ϩⲟ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">طوباك أنت يا مريم الحكيمة العفيفة القبة الثانية الكنز الروحى.</td>
        </tr>
        <tr id="table_19_row_1" class="south">
            <td class="english">The pure turtle-dove, who declared in our land, and brought to us, the Fruit of the Spirit.</td>
            <td class="coptic">Ϯϭⲣⲟⲙⲡ̀ϣⲁⲗ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲥⲙⲟⲩϯ ϧⲉⲛ ⲡⲉⲛⲕⲁϩⲓ: ⲟⲩⲟϩ ⲁⲥⲫⲓⲣⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲟⲩⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ Ⲡⲓⲡⲛⲉⲩⲙⲁ.</td>
            <td class="arabic">اليمامة النقية التى نادت فى أرضنا وأينعت لنا ثمرة الروح.</td>
        </tr>
        <tr id="table_19_row_2" class="north">
            <td class="english">The Spirit of Comfort, who came upon your Son, in the waters of the Jordan, of which Noah was a type.</td>
            <td class="coptic">Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϫⲉⲛ Ⲡⲉϣⲏⲣⲓ: ϩⲓϫⲉⲛ ⲛⲓⲙⲟⲩ ⲛ̀ⲧⲉ Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ: ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀Ⲛⲱⲉ̀.</td>
            <td class="arabic">الروح المعزى الذى حل على إبنك  فى مياه الاُردن كمثال نوح.</td>
        </tr>
        <tr id="table_19_row_3" class="south">
            <td class="english">That dove has, announced to us, the peace of God, for mankind.</td>
            <td class="coptic">Ϯϭⲣⲟⲙⲡⲓ ⲅⲁⲣ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ: ⲛ̀ⲑⲟⲥ ⲁⲥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲛ: ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ Ⲫϯ: ⲑⲏⲉ̀ⲧⲁⲥϣⲱⲡⲓ ϣⲁ ⲛⲓⲣⲱⲙⲓ..</td>
            <td class="arabic">لاُن تلك الحمامة هى بشرتنا بسلام الله الذى صار للبشر.</td>
        </tr>
        <tr id="table_19_row_4" class="north">
            <td class="english">Likewise you O our hope, the spiritual turtledove, have brought mercy unto us, carrying Him in your womb.</td>
            <td class="coptic">Ⲛⲑⲟ ϩⲱⲓ ⲱ̀ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: ϯϭⲣⲟⲙⲡ̀ϣⲁⲗ ⲛ̀ⲛⲟⲧ̀ⲏⲉ: ⲁ̀ⲣⲉⲓ̀ⲛⲓ ⲙ̀ⲡⲛⲁⲓ ⲛⲁⲛ: ⲁ̀ⲣⲉϥⲁⲓ ϧⲁⲣⲟϥ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ..</td>
            <td class="arabic">وأنت أيضاُ يا رجاءنا اليمامة العقلية أتيت لنا بالرحمة وحملته فى بطنك.</td>
        </tr>
        <tr id="table_19_row_5" class="south">
            <td class="english">He is Jesus, the begotten of the Father, He was born of you for us, setting free our race.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ: ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ⲁⲩⲙⲁⲥϥ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲁϥⲉⲣ ⲡⲉⲛⲅⲉⲛⲟⲥ ⲛ̀ⲣⲉⲙϩⲉ.</td>
            <td class="arabic">أي يسوع المولود من الآب ولد لنا منك وحرر جنسنا.</td>
        </tr>
        <tr id="table_19_row_6" class="north">
            <td class="english">Therefore let us declare, first with our hearts, then also with our tongues, proclaiming and saying.</td>
            <td class="coptic">Ⲫⲁⲓ ⲅⲁⲣ ⲙⲁⲣⲉⲛⲧⲁⲟⲩⲟϥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲛϩⲏⲧ ⲛ̀ϣⲟⲣⲡ: ⲙⲉⲛⲉⲛⲥⲱⲥ ⲟⲛ ϧⲉⲛ ⲡⲉⲛⲕⲉⲗⲁⲥ: ⲉⲛⲱϣ  ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">فلنقل هذا من قلبنا أولآ. وبعد ذلك بلساننا أيضاً صارخين قائلين.</td>
        </tr>
        <tr id="table_19_row_7" class="south">
            <td class="english">O our Lord Jesus Christ, make for Yourself within us, a temple of Your Holy Spirit, glorifying You.</td>
            <td class="coptic">Ϫⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲙⲁⲑⲁⲙⲓⲟ̀ ⲛⲁⲕ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ:  ⲛ̀ⲟⲩⲉⲣⲫⲉⲓ ⲛ̀ⲧⲉ Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲉⲩϯⲇⲟⲍⲟⲗⲟⲅⲓⲁ̀ ⲛⲁⲕ.</td>
            <td class="arabic">يا ربنا يسوع المسيح اجعل لك فينا هيكلا لروحك القدوس يعطيك تمجيداً.</td>
        </tr>
        <tr id="table_19_row_8" class="north">
            <td class="english">Hail to you O Virgin, the right and true Queen. Hail to the pride of our race, who bore to us Immanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ :  ϯⲟⲩⲣⲱ  ⲙ̀ⲙⲏⲓ   ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        <tr id="table_19_row_9" class="south">
            <td class="english">We ask you to remember us, O our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ  ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ  ⲠⲓⲬ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ  ⲛⲁⲛ  ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
    </table>
    <table id="table_20" style="display: table;" title="Doxology for Archangel Michael">
        <caption id="caption_table_20" class="caption">Doxology for Archangel Michael
        <span class="arabic-caption">ذوكصولوجية رئيس الملائكة ميخائيل</span></caption>
        
            <tr id="table_20_row_0" class="north">
                <td class="english">Michael the head of the heavenly, he is the first, among the angelic ranks,
                    serving before the Lord.</td>
                <td class="coptic" >Ⲙⲓⲭⲁⲏⲗ ⲡⲁ̀ⲣⲭⲱⲛ ⲛⲛ̀ⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲛⲑ̀ⲟϥ ⲉⲧⲟⲓ
                    ⲛϣ̀ⲟⲣⲡϧⲉⲛ ⲛⲓⲧⲁⲝⲓⲥ ⲛⲁ̀ⲅⲅⲉⲗⲓⲕⲟⲛ: ⲉϥϣⲉⲙϣⲓ ⲙⲡ̀ⲉⲙⲑⲟ ⲙⲡ̀⳪.</td>
                <td class="arabic" >ميخائيل رئيس السمائيين هو الأول فى الطقوس
                    الملائكية يخدم أمام الرب.</td>
            </tr>
            <tr id="table_20_row_1" class="south">
                <td class="english"> God sends unto us, His mercy and compassion, through the
                    supplications of Michael, the great archangel.</td>
                <td class="coptic" >Ϣⲁⲣⲉ Ⲫϯ ⲟⲩⲱⲣⲡ ⲛⲁⲛ: ⲛⲛ̀ⲉϥⲛⲁⲓ ⲛⲉⲙ
                    ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛⲧ̀ⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲛⲓϣϯ ⲛⲁ̀ⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.</td>
                <td class="arabic" >أن الله يرسل لنا مراحمه ورأفاته بسؤال
                    ميخائيل رئيس الملائكة العظيم.</td>
            </tr>
            <tr id="table_20_row_2" class="north">
                <td class="english">The harvest is perfected, through the prayers of Michael, for he is close to God,
                    asking Him on our behalf.</td>
                <td class="coptic" >Ϣⲁⲩϫⲱⲕ ⲉⲃⲟⲗ ⲛϫ̀ⲉ ⲛⲓⲕⲁⲣⲡⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲉⲛⲧⲱⲃϩ
                    ⲙⲘ̀ⲓⲭⲁⲏⲗ ϫⲉ ⲛⲑ̀ⲟϥ ⲉⲧϧⲉⲛⲧ ⲉϧⲟⲩⲛ ⲉⲪϯ: ⲉϥϯϩⲟ ⲉϩⲣ̀ⲏⲓ ⲉϫⲱⲛ.</td>
                <td class="arabic" >وتكمل الأثمار بطلبات ميخائيل لأنه قريب إلى
                    الله يسأل عنا.</td>
            </tr>
            <tr id="table_20_row_3" class="south">
                <td class="english">All good honor, and every perfect gift, comes to us from on high, from the
                    Father of Lights.</td>
                <td class="coptic" >Ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁⲛⲉⲩ: ⲛⲉⲙ ⲇⲱⲣⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϫⲏⲕ
                    ⲉⲃⲟⲗ ⲉⲩⲛⲏⲟⲩ ⲛⲁⲛ ⲉⲃⲟⲗ ⲙⲡ̀ϣ̀ⲱⲓ: ϩⲓⲧⲉⲛ ⲫⲓⲱⲧ ⲛⲧ̀ⲉ ⲛⲓⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic" >كل عطية صالحة وكل موهبة تامة إنما تهبط لنا
                    من فوق من عند أبى الأنوار.</td>
            </tr>
            <tr id="table_20_row_4" class="north">
                <td class="english">Let us praise and glorify, and worship the Holy Trinity, one in essence, who
                    endures forever.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛϩⲱⲥ ⲛⲧ̀ⲉⲛϯⲱⲟⲩ: ⲛⲧ̀ⲉⲛⲟⲩⲱϣⲧ ⲛϯ̀ⲧⲣⲓⲁⲥ
                    ⲉˉⲑˉⲩˉ ⲉⲧⲟⲓ ⲛⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ: ⲉⲑⲙⲏⲛ ⲉⲃ̀ⲟⲗ ϣⲁ ⲉⲛ̀ⲉϩ.</td>
                <td class="arabic" >فلنسبح ونمجد ونسجد للثالوث المقدس المساوى
                    الدائم إلى الأبد.</td>
            </tr>
            <tr id="table_20_row_5" class="south">
                <td class="english">Intercede on our behalf, O holy archangel, Michael the head of the heavenly,
                    that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉϩⲣ̀ⲏⲓ ⲉϫⲱⲛ: ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                    ⲉˉⲑˉⲩˉ Ⲙⲓⲭⲁⲏⲗ ⲡⲁ̀ⲣⲭⲱⲛ ⲛⲛ̀ⲁ ⲛⲓⲫⲏⲟⲩⲓ ⲛⲧ̀ⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ. ${cross}</td>
                <td class="arabic" >إشفع فينا يارئيس الملائكة الطاهر ميخائيل
                    رئيس السمائيين ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_21" style="display: table;" title="Doxology for the Heavenly">
        <caption id="caption_table_21" class="caption">Doxology for the Heavenly
        <span class="arabic-caption">ذوكصولوجية السمائيين</span></caption>
        
            <tr id="table_21_row_0" class="north">
                <td class="english" >Seven archangels, praising as they stand,
                    before the Pantocrator, serving the hidden mystery.</td>
                <td class="coptic" >Ⲍ̅ ⲛⲁ̀ⲣⲭⲏ ⲁⲅⲅⲉⲗⲟⲥ : ⲥⲉⲟϩ̀ⲓ ⲉⲣ̀ⲁⲧⲟⲩ
                    ⲉⲩⲉⲣϩⲩⲙⲛⲟⲥ : ⲙⲡ̀ⲉⲙⲑ̀ⲟ ⲙⲡ̀ⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : ⲉⲩϣⲉⲙϣⲓ ⲙⲙ̀ⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲧϩⲏⲡ.</td>
                <td class="arabic">سبعة رؤساء ملائكة وقوف يسبحون أمام الضابط الكل يخدمون السر الخفى.</td>
            </tr>
            <tr id="table_21_row_1" class="south">
                <td class="english" >Michael is the first, Gabriel is the
                    second, Raphael is the third, a symbol of the Trinity.</td>
                <td class="coptic" >Ⲙⲓⲭⲁⲏⲗ ⲡⲉ ⲡⲓϩⲟⲩⲓⲧ : Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲉ ⲡⲓⲙⲁϩ
                    ⲥⲛ̀ⲁⲩ: Ⲣⲁⲫⲁⲏⲗ ⲡⲉⲡⲓⲙⲁϩ ϣⲟⲙⲧ: ⲕⲁⲧⲁ ⲡⲧ̀ⲩⲡⲟⲥ ⲛϮ̀ⲧⲣ̀ⲓⲁⲥ.</td>
                <td class="arabic">ميخائيل هو الأول. غبريال هو الثانى. رافائيل هو الثالث. كمثال الثالوث.</td>
            </tr>
            <tr id="table_21_row_2" class="north">
                <td class="english" >Suriel, Sedakiel, Sarathiel, and Ananiel,
                    the great and holy luminaries, entreating Him for the creation.</td>
                <td class="coptic" >Ⲥⲟⲩⲣⲓⲏⲗ Ⲥⲉⲇⲁⲕⲓⲏⲗ : Ⲥⲁⲣⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ :
                    ⲛⲁⲓⲛⲓϣϯ ⲛⲣ̀ⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉⲑⲟⲩⲁⲃ : ⲛⲏⲉⲧⲧⲱⲃϩ ⲙⲙ̀ⲟϥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲉⲛ ⲡⲓⲥⲱⲛⲧ.</td>
                <td class="arabic">سوريال سداكيال سراتيال وآنانيال هؤلاء المنيرون العظماء الأطهار يطلبون منه عن
                    الخليقة</td>
            </tr>
            <tr id="table_21_row_3" class="south">
                <td class="english" >The Cherubim and Seraphim, the
                    thrones, dominions and powers, the four incorporeal creatures, carrying the throne of God.
                </td>
                <td class="coptic" >Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛⲓⲑⲣ̀ⲟⲛⲟⲥ
                    ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ : ⲡⲓϥⲧ̀ⲟⲩ ⲛⲍ̀ⲱⲟⲛ ⲛⲁ̀ⲥ̀ⲱⲙⲁⲧⲟⲥ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ ⲛⲐ̀ⲉⲟⲥ.</td>
                <td class="arabic">الشاروبيم والسارافيم الكراسي والأرباب والقوات وال ٤ الحيوانات الغير المتجسدين
                    الحاملون مركبة الله</td>
            </tr>
            <tr id="table_21_row_4" class="north">
                <td class="english" >The twenty four presbyters, in the Church
                    of the first-born, praising Him without ceasing, proclaiming and saying.</td>
                <td class="coptic" >Ⲡⲓϫⲟⲧ ϥⲧ̀ⲟⲩ ⲙⲡ̀ⲣ̀ⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ϧⲉⲛ
                    ϯⲉⲕⲕⲗ̀ⲏⲥⲓⲁ ̀ⲛⲧ̀ⲉ ⲛⲓϣⲟⲣⲡ ⲙⲙ̀ⲓⲥⲓ : ⲉⲩϩⲱⲥ ⲉⲣ̀ⲟϥ ϧⲉⲛ ⲟⲩⲙⲉⲧ ⲁⲑⲧⲙⲟⲩⲛⲕ : ⲉⲩⲱϣ ⲉⲃ̀ⲟⲗ ⲉⲩϫⲱ ⲙⲙ̀ⲟⲥ.
                </td>
                <td class="arabic">ال ٢٤ قسيساً في كنيسة الأبكار يسبحونه بلا فتورصارخين قائلين :</td>
            </tr>
            <tr id="table_21_row_5" class="south">
                <td class="english" >Holy God, heal the sick, Holy Mighty, O
                    Lord repose those who are asleep;</td>
                <td class="coptic" >Ϫⲉ ⲁⲅ̀ⲓⲟⲥ ⲟ ̀Ⲑⲉⲟⲥ : ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ :
                    ⲁⲅ̀ⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲛⲏⲉⲧ̀ⲁⲩⲉⲛⲕⲟⲧ Ⲡϭⲟⲓⲥ ⲙⲁⲙⲧ̀ⲟⲛ ⲛⲱⲟⲩ.</td>
                <td class="arabic">قدوس الله. المرضي إشفهم. قدوس القوى. الراقدين يارب نيحهم.</td>
            </tr>
            <tr id="table_21_row_6" class="north">
                <td class="english" >Holy Immortal, bless Your
                    inheritance, may Your mercy and peace, be a fortress unto Your people.</td>
                <td class="coptic" > ̀Ⲁⲅⲓⲟⲥ  ̀Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲥⲙ̀ⲟⲩ
                    ⲉⲧ̀ⲉⲕⲕⲗ̀ⲏⲣⲟⲛⲟⲙⲓⲁ ̀: ⲙⲁⲣⲉ ⲡⲉⲕⲛⲁⲓ ⲛⲉⲙ ⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲟⲓ ⲛⲥ̀ⲟⲃⲧ ⲙⲡ̀ⲉⲕⲗⲁⲟⲥ.</td>
                <td class="arabic">قدوس الذى لا يموت بارك ميراثك. ولتكن رحمتك وسلامك حصناً لشعبك.</td>
            </tr>
            <tr id="table_21_row_7" class="south">
                <td class="english" >Holy, Holy, Holy, O Lord of Hosts, heaven
                    and earth are full of, Your glory and honor.</td>
                <td class="coptic" >Ϫⲉ ⲭⲟ̀ⲩⲁⲃ ⲟⲩⲟϩ ⲭⲟ̀ⲩⲁⲃ : ⲭⲟ̀ⲩⲁⲃ Ⲡϭⲟⲓⲥ
                    ⲥⲁⲃⲁⲱⲑ : ⲧⲫ̀ⲉ ⲛⲉⲙ ⲡⲕ̀ⲁϩⲓ ⲙⲉϩ ⲉⲃ̀ⲟⲗ : ϧⲉⲛ ⲡⲉⲕⲱⲟ̀ⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ.̀</td>
                <td class="arabic">قدوس قدوس قدوس رب الصاباؤوت. السماء والأرض مملوئتان من مجدك وكرامتك.</td>
            </tr>
            <tr id="table_21_row_8" class="north">
                <td class="english" >And when they say "Alleluia,”  the
                    heavenly respond saying, "Holy, Amen, Alleluia. Glory be to our God."</td>
                <td class="coptic" >Ⲁⲩϣⲁⲛϫⲟⲥ ⲙⲡ̀ⲓ ⲁⲗⲗⲏⲗⲟⲓⲁ : ϣⲁⲣⲉ ⲛⲁⲛ ⲛⲓⲫⲏⲟⲩⲓ̀
                    ⲟⲩⲱϩ ⲙⲙ̀ⲱⲟⲩ : ϫⲉ ⲁⲅ̀ⲓⲟⲥ ⲁⲙ̀ⲏⲛ ⲁⲗⲗⲏⲗⲟⲓⲁ : ⲡⲓⲱⲟ̀ⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ.</td>
                <td class="arabic">إذا ما قالوا الليلويا يتبعهم السمائيون قائلين قدوس أمين الليلويا. المجد هو لإلهنا
                </td>
            </tr>
            <tr id="table_21_row_9" class="south">
                <td class="english" >Intercede on our behalf, O angelic
                    armies, and heavenly orders, that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ : ⲛⲓⲥⲧⲣⲁⲧⲓⲁ̀
                    ⲛⲁ̀ⲅⲅⲉⲗⲓⲕⲟⲛ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛⲉ̀ⲡ̀ⲟⲣⲁⲛⲓⲟⲛ : ⲛⲧ̀ⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_22" style="display: table;" title="Doxology for the Apostles">
        <caption id="caption_table_22" class="caption">Doxology for the Apostles
        <span class="arabic-caption">ذوكصولوجية الرسل</span></caption>
        
            <tr id="table_22_row_0" class="north">
                <td class="english" >Our Lord Jesus Christ, has chosen His
                    apostles, Peter and Andrew, John and James.</td>
                <td class="coptic" >Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣ̀ⲓⲥⲧⲟⲥ : ⲁϥⲥⲱⲧⲡ
                    ⲛⲛ̀ⲉϥⲁⲡ̀ⲟⲥⲧⲟⲗⲟⲥ : ⲉⲧ̀ⲉ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲁⲛⲇⲣ̀ⲉⲁⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ.</td>
                <td class="arabic">الرب يسوع المسيح اختار رسله. وهم بطرس واندراوس. ويوحنا ويعقوب.</td>
            </tr>
            <tr id="table_22_row_1" class="south">
                <td class="english" >Also Philip and Matthew,
                    Bartholomew and Thomas, James the son of Alphaeus, and Simon the Canaanite.</td>
                <td class="coptic" >Ⲗⲟⲓⲡⲟⲛ Ⲫⲓⲗⲓⲡⲡⲟⲥ ⲛⲉⲙ Ⲙⲁⲑⲉⲟⲥ: Ⲃⲁⲣⲑⲟⲗⲟⲙⲉⲟⲥ
                    ⲛⲉⲙ Ⲑⲱⲙⲁⲥ : Ⲓⲁⲕⲱⲃⲟⲥ ⲛⲧ̀ⲉ Ⲁⲗⲫⲉⲟⲥ : ⲛⲉⲙ Ⲥⲓⲙⲱⲛ ⲡⲓⲕⲁⲛⲁⲛⲉⲟⲥ.</td>
                <td class="arabic">وفيلبس ومتى وبرثلماوس وتوما ويعقوب بن حلفي وسمعان القانوى.</td>
            </tr>
            <tr id="table_22_row_2" class="north">
                <td class="english" >Thaddeus and Matthias, Paul, Mark and
                    Luke, and the rest of disciples, who followed our Savior.</td>
                <td class="coptic" >Ⲑⲁⲇⲇⲉⲟⲥ ⲛⲉⲙ Ⲙⲁⲧⲑⲓⲁⲥ: Ⲡⲁⲩⲗⲟⲥ ⲛⲉⲙ
                    Ⲙⲁⲣⲕⲟⲥ ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ : ⲛⲉⲙ ⲡⲥ̀ⲉⲡⲓ ⲛⲧ̀ⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ : ⲛⲏⲉⲧⲁⲩⲙⲟϣⲓ ⲛⲥ̀ⲁ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
                <td class="arabic">وتداوس ومتياس وبولس ومرقس ولوقا. وبقية التلاميذ الذين تبعوا مخلصنا.</td>
            </tr>
            <tr id="table_22_row_3" class="south">
                <td class="english" >Matthias who was chosen, in place of
                    Judas, all of them and the rest, followed the Master.</td>
                <td class="coptic" >Ⲙⲁⲧⲑⲓⲁⲥ ⲫⲏⲉⲧⲁ̀ϥϣⲱⲡⲓ : ⲛⲧ̀ϣ̀ⲉⲃⲓⲱ ̀ⲛ ̀Ⲓⲟⲩⲇⲁⲥ
                    : ⲛⲉⲙ ⲡϫ̀ⲱⲕ ⲉⲃ̀ⲟⲗ ⲛⲉⲙ ⲡⲥⲉ̀ⲡⲓ : ⲛⲏⲉⲧ̀ⲁⲩⲙⲟϣⲓ ⲛⲥ̀ⲁ Ⲇⲉⲥⲡⲟⲧⲁ.</td>
                <td class="arabic">متياس الذى صار عِوضاً عن يهوذا. وكامل وبقية التلاميذ الذين تبعوا السيد</td>
            </tr>
            <tr id="table_22_row_4" class="north">
                <td class="english" >Their voice went forth, upon the
                    face of the whole earth, and their words have reached, the ends of the world.</td>
                <td class="coptic" >Ⲁⲡⲟⲩϧⲣ̀ⲱⲟⲩ ϣⲉⲛⲁϥ ⲉⲃ̀ⲟⲗ: ϩⲓϫⲉⲛ ⲡϩ̀ⲟ
                    ⲙⲡ̀ⲕ̀ⲁϩⲓ ⲧⲏⲣϥ : ⲟⲩⲟϩ ⲛⲟⲩⲥⲁϫⲓ ⲁⲩⲫⲟϩ : ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛϯ̀ⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">خرجت أصواتهم إلي وجه الأرض كلها. وبلغ كلامهم إلي أقطار المسكونة.</td>
            </tr>
            <tr id="table_22_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O my
                    lords and fathers the apostles, and the seventy-two disciples, that He may forgive us
                    our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ : ⲱ ̀ⲛⲁ⳪
                    ⲛⲓ̀ⲟϯ ⲛⲁ̀ⲡ̀ⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ⲡⲓϣⲃ̀ⲉ ⲥⲛ̀ⲁⲩ ⲙⲙ̀ⲁⲑⲏⲧⲏⲥ: ⲛⲧ̀ⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الرسل والاثنان والسبعون تلميذاً ليغفر لنا
                    خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_23" style="display: table;" title="Doxology for St. Mark">
        <caption id="caption_table_23" class="caption">Doxology for St. Mark
        <span class="arabic-caption">ذوكصولوجية مرقس الرسول</span></caption>
        
            <tr id="table_23_row_0" class="north">
                <td class="english" >O Mark the apostle, and the
                    Evangelist, the witness of the Passion: of the Only-Begotten God.</td>
                <td class="coptic" >Ⲙⲁⲣⲕⲟⲥ
                    ⲡⲓⲁⲡ̀ⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲡⲓⲙⲉⲑⲣⲉ
                    ϧⲁ ⲛⲓⲙⲕ̀ⲁⲩϩ: ⲛⲧ̀ⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛⲛ̀ⲟⲩϯ.</td>
                <td class="arabic">يا مرقس الرسول والإنجيلى الشاهد لآلام الإله الوحيد</td>
            </tr>
            <tr id="table_23_row_1" class="south">
                <td class="english" >You have come and enlightened us,
                    through your Gospel, and taught us the Father and the Son, and the Holy Spirit.</td>
                <td class="coptic" >Ⲁⲕⲓ ̀ⲁⲕⲉⲣⲟⲩⲱⲓⲛⲓ
                    ⲉ̀ⲣ̀ⲟⲛ: ϩⲓⲧⲉⲛ
                    ⲡⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ:
                    ⲁⲕⲧ̀ⲥ̀ⲁⲃⲟⲛ ⲙ̀̀ Ⲫⲓⲱⲧ ⲛⲉⲙ  ̀Ⲡϣⲏⲣⲓ : ⲛⲉⲙ
                    Ⲡⲓⲡⲛ̀ⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">أتيتَ وأنرتَ لنا بإنجيلك وعلمتنا الآب والابن والروح القدس</td>
            </tr>
            <tr id="table_23_row_2" class="north">
                <td class="english" >You brought us out of the darkness,
                    into the true Light, feeding us the Bread of Life, that came down from heaven.
                </td>
                <td class="coptic" >Ⲁⲕⲉⲛⲧⲉⲛ ⲉ̀ⲃ̀ⲟⲗ
                    ϧⲉⲛ ⲡⲭ̀ⲁⲕⲓ: ⲉϧ̀ⲟⲩⲛ
                    ⲉⲡ̀ⲓⲟⲩⲱⲓⲛⲓ ⲙⲙ̀ⲏⲓ: ⲁⲕⲧⲉⲙⲙⲟⲛ
                    ⲙⲡ̀ⲓⲱⲓⲕ ⲛⲧ̀ⲉ ⲡⲱ̀ⲛ&rsquo;:
                    ⲉ̀ⲧ̀ⲁϥⲓ̀ ̀ⲉⲡ̀ⲉⲥⲏⲧ ⲉⲃ̀ⲟⲗϧⲉⲛ
                    ⲧⲫ̀ⲉ.</td>
                <td class="arabic">وأخرجتنا من الظلمة إلى النور الحقيقى. وأطعمتنا خبز الحياة الذى نزلَ من السماء
                </td>
            </tr>
            <tr id="table_23_row_3" class="south">
                <td class="english" >All the tribes of the earth, were
                    blessed through you, and your words have reached, the ends of the world.</td>
                <td class="coptic" >Ⲁⲩϭⲓⲥⲙ̀ⲟⲩ
                    ⲛ̀̀ϧⲣ̀ⲏⲓ ⲛϧ̀ⲏⲧⲕ: ⲛϫ̀ⲉ ⲛⲓⲫⲩⲗⲏ
                    ⲧⲏⲣⲟⲩ ⲛⲧ̀ⲉ ⲡⲕ̀ⲁϩⲓ: ⲟⲩⲟϩ ⲛⲉⲕⲥⲁϫⲓ ⲁⲩⲫⲟϩ: ϣⲁ
                    ⲁⲩⲣⲏϫⲥ ⲛϯ̀ⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">تباركَت بكَ كل قبائل الأرض. واقوالكَ بلغت الي اقطار المسكونة</td>
            </tr>
            <tr id="table_23_row_4" class="north">
                <td class="english" >Hail to you, O martyr, Hail to the
                    Evangelist, Hail to the Apostle, Mark the Beholder of God.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ
                    ⲛⲁⲕ ⲱ̀ ̀ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ:ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ:
                    ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲡ̀ⲟⲥⲧⲗⲟⲥ: Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉⲱ̀ⲣ̀ⲓⲙⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد السلام للإنجيلى.السلام للرسول. مرقس ناظر الإله</td>
            </tr>
            <tr id="table_23_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O
                    Beholder of God, the Evangelist, Mark the apostle: that He may forgive us our sins.
                    ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ
                    : ⲱ ̀ⲡⲓⲑⲉⲱⲣ̀ⲓⲙⲟⲥ
                    ⲛ̀ⲉ̀ⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲙⲁⲣⲕⲟⲥ
                    ⲡⲓⲁ̀ⲡ̀ⲟⲥⲧⲟⲗⲟⲥ: ⲛⲧ̀ⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">أطلب من الرب عنا يا ناظر الإله الإنجيلى مرقس الرسول ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_24" style="display: table;" title="Doxology for St. George">
        <caption id="caption_table_24" class="caption">Doxology for St. George
        <span class="arabic-caption">ذوكصولوجية مار جرجس</span></caption>
        
            <tr id="table_24_row_0" class="north">
                <td class="english" >Saint George completed, seven whole
                    years, being judged daily, by seventy lawless kings.</td>
                <td class="coptic" >Ⲍˉ̀̅ ⲛⲣ̀ⲟⲙⲡⲓ
                    ⲁϥϫⲟⲕⲟⲩ ⲉⲃ̀ⲟⲗ : ⲛϫ̀ⲉ
                    ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉⲣ̀ⲉ ⲡⲓϣⲃ̀ⲉ
                    ⲛⲟ̀ⲩⲣⲟ ⲛⲁ̀ⲛ̀ⲟⲙⲟⲥ : ⲉⲩϯϩⲁⲡ ⲉⲣ̀ⲟϥ
                    ⲙⲙ̀ⲏⲛⲓ.</td>
                <td class="arabic">سبع سنين أكملها القديس جيؤرجيوس. و ٧٠ ملكاً منافقين يحكمون عليه كل يوم.</td>
            </tr>
            <tr id="table_24_row_1" class="south">
                <td class="english" >They could not change his mind, nor his
                    upright faith, nor his great love, for Christ the King.</td>
                <td class="coptic" >˙Ⲙⲡⲟⲩ ϣⲫ̀ⲱⲛϩ ⲙⲡ̀ⲉϥ ⲗⲟⲅⲓⲥⲙⲟⲥ : ⲟⲩⲇⲉ ⲡⲉϥⲛⲁϩϯ
                    ⲉⲧⲥⲟⲩⲧⲱⲛ : ⲟⲩⲇⲉ ⲧⲉϥⲛⲓϣϯ ⲛⲁ̀ⲅ̀ⲁⲡⲏ : ⲉϧ̀ⲟⲩⲛ ⲉⲡ̀ⲟ̀ⲩⲣⲟ Ⲡⲓⲭⲣ̀ⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">ولم يقدروا أن يميلوا أفكاره ولا إيمانه المستقيم ولا عِظم محبته فى الملك المسيح.
                </td>
            </tr>
            <tr id="table_24_row_2" class="north">
                <td class="english" >He was singing with David saying, "All
                    the nations surrounded me: but in the Name of Jesus My Lord, I took revenge on them.</td>
                <td class="coptic" >Ⲛⲁϥⲉⲣⲯⲁⲗⲓⲛ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ : ϫⲉ ⲁⲩⲕⲱϯ ⲉⲣ̀ⲟⲓ ⲛϫ̀ⲉ
                    ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ : ⲁⲗⲗⲁ ϧⲉⲛ ⲫⲣ̀ⲁⲛ ⲛ ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲁⲛⲟⲩϯ : ⲁⲓϭⲓ ⲙⲡ̀ⲁϭⲓ ⲙⲡ̀ϣ̀ⲓϣ ⲛⲉⲙⲱⲟⲩ.</td>
                <td class="arabic">وكان يرتل مع داود قائلاً أحاط بي جميع الأمم لكن باسم يسوع إلهى انتقمت منهم</td>
            </tr>
            <tr id="table_24_row_3" class="south">
                <td class="english" >For great is your honor, O my lord Prince George, for Christ rejoices in you, in the heavenly Jerusalem.</td>
                <td class="coptic" >Ⲟⲩ ⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲉⲕⲧⲁⲓⲟ ̀: ⲱⲠ̀ⲁϭⲟⲓⲥ ⲡⲟ̀ⲩⲣⲟ
                    Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉⲣ̀ⲉ Ⲡⲓⲭⲣ̀ⲓⲥⲧⲟⲥ ⲣⲁϣⲓ ⲛⲉⲙⲁⲕ ϧⲉⲛ Ⲓⲏⲣⲟⲩⲥⲁⲗⲏⲙ ⲛⲧ̀ⲉ ⲧⲫ̀ⲉ.</td>
                <td class="arabic">عظيمة هي كرامتكَ يا سيدى الملك جيؤرجيوس المسيح يفرح معك فى أورشليم السمائية</td>
            </tr>
            <tr id="table_24_row_4" class="north">
                <td class="english" >Hail to you O martyr, Hail to the
                    courageous hero, Hail to the struggle-mantled, my lord Prince George.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ̀ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ
                    ⲛⲅ̀ⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲡⲁϭⲟⲓⲥ ⲡⲟ̀ⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد سيدى الملك
                    جيؤرجيوس.</td>
            </tr>
            <tr id="table_24_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O
                    struggle-bearer and martyr, my lord Prince George, that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ :
                    ⲱ ̀ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙⲙ̀ⲁⲣⲧⲏⲣⲟⲥ : Ⲡⲁ⳪ ⲡⲟ̀ⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛⲧ̀ⲉϥ ⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">أطلب من الرب عنا. أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_25" style="display: table;" title="Doxology St. Philopateer Mercurius">
        <caption id="caption_table_25" class="caption">Doxology for St. Philopateer Mercurius
        <span class="arabic-caption">ذوكصولوجية مرقوريوس ابوسيفين</span></caption>
        
            <tr id="table_25_row_0" class="north">
                <td class="english" >Philopateer Mercurius, the strong one of
                    Christ, put on the full battle gear, and the whole armor of faith.</td>
                <td class="coptic" >Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ :ⲡⲓⲣⲉⲙⲛϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ:
                    ⲁϥϯϩⲓⲱⲧϥ ⲛϯⲡⲁⲛⲟⲡⲗⲓⲁ: ⲛⲉⲙ ⲡⲓϧⲱⲕ ⲧⲏⲣϥ ⲛⲧⲉ ⲡⲓⲛⲁϩϯ.</td>
                <td class="arabic">محب الآب مرقوريوس: القوي بالمسيح: لبس الخوذة: وكل سلاح الإيمان.</td>
            </tr>
            <tr id="table_25_row_1" class="south">
                <td class="english" >He took in his hand, the two-edged
                    sword, that an angel of the Lord, placed in his right hand.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥϭⲓ ϧⲉⲛ ⲧⲉϥϫⲓϫ: ⲛϯⲥⲏϥⲓ ⲛⲣⲟ Ⲃ: ⲏⲏⲉⲧⲁ
                    ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲧⲉ Ⲡⲟⲥ ⲧⲁϫⲣⲟⲥ: ϧⲉⲛ ⲧⲉϥϫⲓϫ ⲛⲡⲟⲩⲓⲛⲁⲙ.</td>
                <td class="arabic">وأخذ بيده السيف: ذا الحدين: الذي ثبته ملاك الرب: في يده اليمنى.</td>
            </tr>
            <tr id="table_25_row_2" class="north">
                <td class="english" >He went to war, in the power of
                    Christ, He smote the barbarians, with severe wounds.</td>
                <td class="coptic" >Ⲁϥϣⲉⲛⲁϥ ⲉⲡⲓⲡⲟⲗⲉⲙⲟⲥ: ϧⲉⲛ ϯϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ:
                    ⲁϥϣⲁⲣⲓ ⲉⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛⲉⲣϧⲟⲧ.</td>
                <td class="arabic">مضى إلى الحرب: بقوة المسيح: وقتل البربر: بجراحات عظيمة.</td>
            </tr>
            <tr id="table_25_row_3" class="south">
                <td class="english" >He refused the earthly, and sought
                    the heavenly, He fought in the stadium, of martyrdom.</td>
                <td class="coptic" >Ⲁϥⲉⲣⲛⲩⲙⲫⲓⲛ ⲉⲃⲟⲗ ϩⲁ ⲛⲁ ⲡⲕⲁϩⲓ: ⲟⲩⲟϩ ⲁϥⲕⲱϯ
                    ⲉⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓⲥⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲏⲣⲟⲥ.</td>
                <td class="arabic">تيقظ عن الأرضيات: وطلب السمائيات: وتشجع في: ميدان الشهادة.</td>
            </tr>
            <tr id="table_25_row_4" class="north">
                <td class="english" >He embarrassed Decius, the ungodly
                    emperor, through his great patience, through the pain of the sufferings.</td>
                <td class="coptic" >Ⲁϥϯⲓϣⲓⲡⲓ ⲛⲆⲉⲕⲓⲟⲥ: ⲡⲓⲟⲩⲣⲟ ⲛⲁⲥⲉⲃⲏⲥ: ϩⲓⲧⲉⲛ
                    ⲧⲉϥⲛⲓϣϯ ⲛϩⲩⲡⲟⲙⲟⲛⲏ: ⲛⲉⲛ ⲡϧⲓⲥⲓ ⲛⲧⲉ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ.</td>
                <td class="arabic">أفضح داكيوس: الملك المنافق: بصبره العظيم: وتعب العذابات.</td>
            </tr>
            <tr id="table_25_row_5" class="south">
                <td class="english" >In this he wore the unfading crown, of
                    martyrdom, he celebrated with all the saints, in the land of the living.</td>
                <td class="coptic" >Ϧⲉⲛ ⲛⲁⲓ ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙⲡⲓⲭⲗⲟⲙ ⲛⲁⲧⲗⲱⲙ: ⲛⲧⲉ
                    ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁϥⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏⲉⲏⲩ ⲧⲏⲡⲟⲩ: ϧⲉⲛ ⲧⲭⲱⲡⲁ ⲛⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.</td>
                <td class="arabic">وبهذا لبس إكليل الشهادة: غير المضمحل: وعيَّد مع جميع القديسين: في كورة الأحياء.
                </td>
            </tr>
            <tr id="table_25_row_6" class="north">
                <td class="english" >Hail to you O martyr: hail to the
                    noble hero: hail to the struggle-bearer: Philopateer Mercurius.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ
                    ⲛⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد: السلام للشجاع البطل: السلام للمجاهد: محب الآب مرقوريوس.
                </td>
            </tr>
            <tr id="table_25_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf: O
                    struggle-bearer and martyr: Philopateer Mercurius: that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙⲠ̀ϭ̀ⲟⲓⲥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ : ⲱ̀
                    ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ ⲙⲙ̀ⲁⲣⲧⲩⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ⲛⲧ̀ⲉϥⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">أطلب من الرب عنا: أيها الشهيد المجاهد: محب الآب مرقوريوس: ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_26" style="display: table;" title="Doxology for St. Mina the Wonderworker">
        <caption id="caption_table_26" class="caption">Doxology for St. Mina the Wonderworker
        <span class="arabic-caption">ذوكصولوجية مارمينا</span></caption>
        
            <tr id="table_26_row_0" class="north">
                <td class="english">What shall it profit a man, if he gains the whole world, and loses his soul?
                    O the futility of this life!</td>
                <td class="coptic" >Ⲉϣⲱⲡ ⲟⲩⲛ ⲛⲧ̀ⲉ ⲡⲓⲣⲱⲙⲓ ϫⲉⲙϩⲏⲟⲩ ⲙⲡ̀ⲓⲕⲟⲥⲙⲟⲥ
                    ⲧⲏⲣϥ ⲛⲧ̀ⲉϥⲟⲥ̀ⲓ ⲛⲧ̀ⲉϥⲯⲩⲭⲏ  ⲟⲩ ⲡⲉ ⲡⲁⲓ ⲱⲛ&rsquo;&rsquo;ϧ ⲛⲉⲫ̀ⲗⲏⲟⲩ.</td>
                <td class="arabic" >إذا ربح الإنسان العالم كله وخسر نفسه فما
                    هى هذه الحياة الباطلة.</td>
            </tr>
            <tr id="table_26_row_1" class="south">
                <td class="english">The Saint Abba Mina, heard the Divine voice, and forsook the whole world,
                    and its corrupt glory.</td>
                <td class="coptic" >Ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ ⲁϥⲥⲱⲧⲉⲙ ⲛⲥ̀ⲁ ϯⲥⲙ̀ⲏ ⲛⲛ̀ⲟⲩϯ
                    ⲁϥⲭⲱ ⲙⲡ̀ⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ⲛⲥ̀ⲱϥ  ⲛⲉⲙ ⲡⲉϥⲱⲟⲩ ⲉⲑⲛⲁⲧⲁⲕⲟ.</td>
                <td class="arabic" >الفديس آبا مينا سمع الصوت الإلهى وترك عنه
                    العالم كله ومجده الفاسد.</td>
            </tr>
            <tr id="table_26_row_2" class="north">
                <td class="english">He gave his soul up to death, and his flesh to the fire, and accepted great
                    torment, for the Son of the Living God.</td>
                <td class="coptic" >Ⲁϥϯ ⲛⲧ̀ⲉϥⲯⲏⲭⲏ ⲉⲫ̀ⲙ̀ⲟⲩ : ⲛⲉⲙ ⲡⲉϥⲥⲱⲙⲁ
                    ⲉⲡ̀ⲓⲭⲣ̀ⲱⲙ: ⲁϥϣⲉⲡ ϩⲁⲛⲛⲓϣϯ ⲙⲃ̀ⲁⲥⲁⲛⲟⲥ ⲉⲑⲃⲉ ⲡϣ̀ⲏⲣⲓ ⲙⲪ̀ϯ ⲉⲧⲟⲛϧ.</td>
                <td class="arabic" >وبذل نفسه للموت وجسده للنار وقبل عذابات
                    عظيمة لأجل إبن الله الحى.</td>
            </tr>
            <tr id="table_26_row_3" class="south">
                <td class="english">Therefore our Savior, lifted him up to His kingdom, and granted him the good
                    things, which an eye has not seen.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲠⲉⲛⲥⲱⲧⲏⲣ ⲟⲗϥ ⲉϧⲟⲩⲛ ⲉⲧ̀ⲉϥ
                    ⲙⲉⲧⲟⲩⲣⲟ ⲁϥϯ ⲛⲁϥ ⲛⲛ̀ⲓⲁⲅⲁⲑⲟⲛ  ⲛⲏⲉⲧⲉ ⲙⲡ̀ⲉⲃⲁⲗ ⲛⲁⲩ ⲉⲣⲱⲟⲩ.</td>
                <td class="arabic" >فلهذا رفعه مخلصنا إلى ملكوته وأعطاه الحياة
                    التى لم تراها عين.</td>
            </tr>
            <tr id="table_26_row_4" class="north">
                <td class="english">Hail to you O martyr, Hail to the noble hero, Hail to the struggle-bearer,
                    Saint Abba Mina.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ̀ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ
                    ⲛⲅ̀ⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ⲛⲧ̀ⲉ ⲛⲓⲫⲁⲓⲁⲧ.</td>
                <td class="arabic" >السلام لك أيها الشهيد السلام للشجاع
                    المجاهد السلام للابس الجهاد آبا مينا البياضي.</td>
            </tr>
            <tr id="table_26_row_5" class="south">
                <td class="english">Pray to the Lord on our behalf: O struggle-bearer and martyr, Saint Abba Mina,
                    that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙⲠ̀⳪ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫⲱⲛ ⲱ ⲡⲓⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ⳥̀
                    ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ  ⲛⲧ̀ⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ. ${cross}</td>
                <td class="arabic" >أطلب من الرب عنا أيها الشهيد المجاهد آبا
                    مينا البياضى ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_27" style="display: table;" title="Doxology for St. Anthony the Great">
        <caption id="caption_table_27" class="caption">Doxology for St. Anthony the Great
        <span class="arabic-caption">ذوكصولوجية الانبا انطونيوس</span></caption>
        
            <tr id="table_27_row_0" class="north">
                <td class="english" >Purge from your hearts, the thoughts
                    of evil, and deceiving ideas, that darken the mind.</td>
                <td class="coptic" >Ⲃⲱⲗ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ⲛⲛ̀ⲓⲙⲟⲕⲙⲉⲕ ⲛⲧ̀ⲉ
                    ϯⲭⲁⲕⲓⲁ:̀ ⲛⲉⲙ ⲛⲓⲙⲉⲩⲓ ̀ⲉⲧϣⲉⲃϣⲱⲃ: ⲉⲧⲓⲣ̀ⲓ ⲙⲡ̀ⲓⲛⲟⲩⲥ ⲛⲭ̀ⲁⲕⲓ.</td>
                <td class="arabic">انزعوا من قلوبكم افكار الشر و الظنون الخداعة التى تظلم العقل.</td>
            </tr>
            <tr id="table_27_row_1" class="south">
                <td class="english" >Contemplate with understanding, the great
                    purifications, of our blessed father, my lord, the great Abba Antony.</td>
                <td class="coptic" >Ⲁⲣⲓⲛⲟⲓⲛ ϧⲉⲛ ⲟⲩϯϩⲑ̀ⲏϥ: ⲛⲛ̀ⲓⲕⲁⲑⲁⲣⲧⲱⲙⲁ
                    ⲉⲧϭⲟⲥⲓ: ⲛⲧ̀ⲉ ⲡⲉⲛⲙⲁⲕⲁⲣⲓⲟⲥ ⲛⲓ̀ⲱⲧ: ⲡⲁ⳪ ⲡⲓⲛⲓϣϯ Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ.</td>
                <td class="arabic">تفهموا بتأمل الى المعجزات العالية التي لأبينا الطوباوى سيدى العظيم انبا انطونيوس
                </td>
            </tr>
            <tr id="table_27_row_2" class="north">
                <td class="english" >He has become our guide, and
                    harbor of salvation, he invited us with joy, to the eternal life.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲉⲧ̀ⲁϥϣⲱⲡⲓ ⲛⲁⲛ ⲛϭ̀ⲁⲩⲙⲱⲓⲧ: ⲛⲗ̀ⲩⲙⲏⲛ ⲛⲧ̀ⲉ
                    ⲡⲓⲟⲩϫⲁⲓ: ⲁϥⲑⲱϩⲉⲙ ⲙⲙ̀ⲟⲛ ϧⲉⲛ ⲟⲩⲉⲣ̀ⲟⲩⲱⲧ: ⲉϧ̀ⲟⲩⲛ ⲉⲡ̀ⲓⲱⲛϧ ⲛⲉ̀ⲛ̀ⲉϩ.</td>
                <td class="arabic">هذا الذى صار لنا مرشداً وميناء خلاص ودعانا بفرح الي الحياة الابدية.</td>
            </tr>
            <tr id="table_27_row_3" class="south">
                <td class="english" >The incense of his virtues, delighted our
                    souls, as fragrant aroma, throughout Paradise prevades.</td>
                <td class="coptic" >Ⲁⲡⲓⲥⲑ̀ⲟⲓⲛⲟϥⲓ ⲛⲧ̀ⲉ ⲛⲉϥⲁⲣⲉⲧⲏ: ϯ ⲙⲡ̀ⲟ̀ⲩⲛⲟϥ
                    ⲛⲛ̀ⲉⲛⲯⲩⲭⲏ: ⲙⲫ̀ⲣ̀ⲏϯ ⲙⲡ̀ⲓⲁⲣⲱⲙⲁⲧⲁ: ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
                <td class="arabic">بخور فضائله اعطة فرح لنفوسنا مثل العنبر المزهر فى الفردوس.</td>
            </tr>
            <tr id="table_27_row_4" class="north">
                <td class="english" >Let us be confirmed in the faith, upright and true, of Antony the great, proclaiming and saying.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲉⲧⲥⲟⲩⲧⲱⲛ ϧⲉⲛ
                    ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲛⲧ̀ⲉ ⲡⲓⲛⲓϣϯ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲉⲛⲱϣ ⲉⲃ̀ⲟⲗ ⲉⲛ̀ϫⲱ ⲙⲙ̀ⲟⲥ.</td>
                <td class="arabic">فلنثبت بالحقيقة فى الايمان المستقيم الذى للعظيم انطونيوسصارخين قائلين:</td>
            </tr>
            <tr id="table_27_row_5" class="south">
                <td class="english" >&ldquo;I sought and I found, I asked and
                    I was given, I knocked and I believed, that it will be opened to me.&rdquo;</td>
                <td class="coptic" >Ϫⲉ ⲁⲓⲕⲱϯ ⲟⲩⲟϩ ⲁⲓϫⲓⲙⲓ: ⲁⲓⲉⲣ̀ⲉⲧⲓⲛ ⲟⲩⲟϩ ⲁⲓϭⲓ:
                    ⲁⲓⲕⲱⲗϩ ⲟⲩⲟϩ ϯⲛⲁϩϯ: ϫⲉ ⲥⲉⲛⲁⲁⲟ̀ⲩⲱⲛ ⲛⲏⲓ.</td>
                <td class="arabic">طلبت فوجدت. سألت فأخذت. قرعت و أؤمن انه سيفتح لى.</td>
            </tr>
            <tr id="table_27_row_6" class="north">
                <td class="english" >Hail to our father Abba Antony, the light of
                    monasticism, hail to our father Abba Paul, the beloved of Christ.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲡⲓϧⲏⲃⲥ ⲛⲧ̀ⲉ
                    ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛⲧ̀ⲉ Ⲡ̅ⲭ̅ⲥ.</td>
                <td class="arabic">السلام لأبينا انطونيوس مصباح الرهبنة السلام لأبينا انبا بولا حبيب المسيح.</td>
            </tr>
            <tr id="table_27_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf, O my
                    lords and fathers, who love their children, Abba Antony and Abba Paul, that He may forgive us
                    our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙⲡ̀̅̀ϭ̅ⲥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ: ⲱ ⲛⲁ⳪ ⲛⲓ̀ⲟϯ
                    ⲙⲙ̀ⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲧ̀ⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">اطلبا من الرب عنا يل سيدى الأبوين محبي أولادهما انبا انطونيوس و انبا بولا
                    ليغفر... ${cross}</td>
            </tr>
        
    </table>
    <table id="table_28" style="display: table;" title="Doxology St. Athanasius the Apostolic">
        <caption id="caption_table_28" class="caption">Doxology for St. Athanasius the Apostolic
        <span class="arabic-caption">ذوكصولوجية اثناسيوس الرسولي</span></caption>
        
            <tr id="table_28_row_0" class="north">
                <td class="english" >O you who are strong in managing the
                    ship, O you the distinguished fighter, who is victorious in the wars, the luminous lamp.</td>
                <td class="coptic" >Ⲡⲓⲕⲩⲃⲉⲣⲛⲏⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲡⲓⲣⲉϥⲙⲓϣⲓ
                    ⲛⲕ̀ⲁⲗⲱⲥ: ⲡⲓⲣⲉϥϭⲣⲟ ϧⲉⲛ ⲛⲓⲃⲱⲧⲥ: ⲡⲓϧⲏⲃⲥ ⲉⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic">أيها المدبر القوى لدفة السفينة: أيها المقاتل البارع: أيها الظافر فى المعارك: أيها
                    المصباح المنير.</td>
            </tr>
            <tr id="table_28_row_1" class="south">
                <td class="english" >The leader of Orthodoxy, is Athanasius
                    the apostolic, the instructor of the rational flock, That is for Christ.</td>
                <td class="coptic" >Ⲡⲓⲕⲏⲣⲩⲝ ⲛⲧ̀ⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: ⲡⲉ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ
                    ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲣⲉϥϯⲥⲃ̀ⲱ ⲛⲧ̀ⲉ ⲡⲓⲟϩⲓ: ⲛⲗ̀ⲟⲅⲓⲕⲟⲛ ⲛⲧ̀ⲉ ⲡⲓⲬⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">رائد الارثوذكسية: هو أثناسيوس الرسولى: و معلم القطيع الناطق: الذى للمسيح.</td>
            </tr>
            <tr id="table_28_row_2" class="north">
                <td class="english" >Your truthful teachings, pierced the
                    hearts of the heretics, like a double-edged sword, by the power of the Trinity.</td>
                <td class="coptic" >Ⲁ ⲛⲉⲕⲇⲟⲅⲙⲁ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲙⲓϣⲓ ⲙⲡ̀ϩ̀ⲏⲧ
                    ⲛⲛ̀ⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ: ⲙⲫ̀ⲣ̀ⲏϯ ⲛⲟ̀ⲩⲥⲏϥⲓ ⲛⲣ̀ⲟ ̅ⲃ: ϩⲓⲧⲉⲛ ⲧϫ̀ⲟⲙ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ.</td>
                <td class="arabic">تعاليمك القويمة نفذت فى قلوب الهراطقة مثل سيف ذى حدين بقوة الثالوث.</td>
            </tr>
            <tr id="table_28_row_3" class="south">
                <td class="english" >Every knee worshiped the Lord, and every
                    tongue praised Him, The Glory of God was announced, and filled the entire universe.</td>
                <td class="coptic" >Ⲁ ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲕⲱⲗϫ ⲙⲡ̀̅ϭ̅ⲥ: ⲁ ⲗⲁⲥ ⲛⲓⲃⲉⲛ
                    ⲥⲙ̀ⲟⲩ ⲉⲣ̀ⲟϥ: ⲁ ⲡⲱ̀ⲟⲩ ⲟⲩⲱϣⲥ ⲉⲃ̀ⲟⲗ: ⲁϥⲙⲟϩ ⲙⲡ̀ϩ̀ⲟ ⲛϯ̀ⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">كل ركبة جثت للرب: و كل لسان سبحه: و مجد الله ذاع: و ملأ وجه المسكونة.</td>
            </tr>
            <tr id="table_28_row_4" class="north">
                <td class="english" >We therefore magnify You, along with
                    David the prophet, For You are the priest forever, on the order of Melchizedek.</td>
                <td class="coptic" >Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙⲙ̀ⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ
                    Ⲇⲁⲩⲓⲇ: ϫⲉ ⲛⲑ̀ⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉⲛⲉϩ: ⲕⲁⲧⲁ ⲧⲧ̀ⲁⲝⲓⲥ ⲙⲘ̀ⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
                <td class="arabic">إننا هكذا نعظمك: مع المرتل داود:فإنك انت الكاهن الى الابد: على طقس ملكيصادق</td>
            </tr>
            <tr id="table_28_row_5" class="south">
                <td class="english" >Hail to the great patriarch, our holy father
                 Abba Athanasius, whose holy teachings, enlightened our minds.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲓⲛⲓϣϯ ⲙⲡ̀ⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲉⲛⲓⲱⲧ ⲉⲑ̀ⲟⲩⲁⲃ
                    ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ: ⲫⲏ ⲉⲧⲁ ⲛⲉϥⲥⲃ̀ⲱⲟⲩⲓ:̀ ⲉⲣⲟⲩⲱⲓⲛⲓ ⲙⲡ̀ⲉⲛⲛⲟⲥ.</td>
                <td class="arabic">السلام للبطريرك العظيم: ابينا القديس الانبا اثناسيوس:يا من تعاليمه المقدسة انارت
                    عقولنا.</td>
            </tr>
            <tr id="table_28_row_6" class="north">
                <td class="english" >Blessed are you indeed, our holy
                    father the patriarch, Abba Athanasius the apostolic, beloved of Christ.</td>
                <td class="coptic" >Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
                    ⲙⲡ̀ⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛⲧ̀ⲉ Ⲡ̅ⲭ̅ⲥ.</td>
                <td class="arabic">مبارك انت بالحقيقة: ايها الاب القديس البطريرك: انبا اثناسيوس الرسولى: حبيب المسيح
                </td>
            </tr>
            <tr id="table_28_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf, our
                    holy father the patriarch, Saint Athanasius the apostolic, they He may forgive us our sins.
                    ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙⲡ̀̅̀ϭ̅ⲥ ⲉϩ̀ⲣ̀ⲏⲓ ⲉϫ̀ⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                    ⲙⲡ̀ⲁⲧⲣⲓⲁⲣⲕⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ⲛⲧ̀ⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
                <td class="arabic">اطلب من الرب عنا: ايها الاب القديس البطريرك: انبا أثناسيوس الرسولى: ليغفر لنا
                    خطايانا. ${cross}</td>
            </tr>
        
    </table>
    <table id="table_28.5" style="display: table;" title="Conclusion of the Doxologies">
        <caption id="caption_table_28.5" class="caption">Conclusion of the Doxologies
        <span class="arabic-caption">ختام الذوكصولوجيات</span></caption>
        
            <tr id="table_28.5_row_0" class="north">
                <td class="english" >Watch over us, from on high where you
                    dwell, O Lady of us all, the ever-virgin Theotokos.</td>
                <td class="coptic" >Ϣⲱⲡⲓ ⲛⲑ̀ⲟ ⲉⲣ̀ⲉⲥⲟⲙⲥ ⲉϫ̀ⲱⲛ : ϧⲉⲛ ⲛⲓⲙⲁ ⲉⲧϭⲟⲥⲓ
                    ⲉⲧ̀ⲉⲣⲉⲭⲏ ⲛϧ̀ⲏⲧⲟⲩ : ⲱ ̀ⲧⲉⲛϭⲟⲓⲥ ⲛⲛ̀ⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟⲧ̀ⲟⲕⲟⲥ : ⲉⲧⲟⲓ ⲙⲡ̀ⲁⲣⲑⲉⲛⲟⲥ ⲛⲥ̀ⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
                <td class="arabic">كونى أنت ناظرة علينا فى المواضع العالية التى أنت كائنة فيها. يا سيدتنا كلنا والدة
                    الإله العذراء كل حين.</td>
            </tr>
            <tr id="table_28.5_row_1" class="south">
                <td class="english" >Ask of Him whom you have borne, our Good
                    Savior, to take away our troubles, and grant us His peace.</td>
                <td class="coptic" >Ⲙⲁϯϩⲟ ⲙⲫ̀ⲏⲉⲧ̀ⲁⲣⲉⲙⲁⲥϥ : Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛⲁ̀ⲅ̀ⲁⲑⲟⲥ
                    : ⲛⲧ̀ⲉϥⲱⲗ̀ⲓ ⲛⲛ̀ⲁⲓϧⲓⲥⲓ ⲉⲃ̀ⲟⲗ ϩⲁⲣⲟⲛ : ⲛⲧ̀ⲉϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛⲧ̀ⲉϥϩⲓⲣⲏⲛⲏ.</td>
                <td class="arabic">إسألى الذى ولدته مخلصنا الصالح أن يرفع عنا هذه الأتعاب ويقرر لنا سلامه.</td>
            </tr>
            <tr id="table_28.5_row_2" class="north">
                <td class="english" >Hail to you O Virgin, the right and true Queen, Hail to the pride of our race, who bore to us Emmanuel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲱ ̀ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ ⲙⲙ̀ⲏⲓ ⲛⲁ̀ⲗ̀ⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡϣ̀ⲟⲩϣⲟⲩ ⲛⲧ̀ⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁⲣ̀ⲉϫⲫ̀ⲟ ⲛⲁⲛ ⲛⲈ̀ⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا
                    عمانوئيل.</td>
            </tr>
            <tr id="table_28.5_row_3" class="south">
                <td class="english" >We ask you to remember us, O our faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ ̀: ⲱ ̀ϯⲡⲣ̀ⲟⲥⲧⲁⲧⲏⲥ ⲉⲧ̀ⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣ̀ⲓⲥⲧⲟⲥ : ⲛⲧ̀ⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃ̀ⲟⲗ. ${cross}</td>
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
            <td class="english">We exalt you, the Mother of the true Light. We glorify you, O saint, the Theotokos, for you have brought forth unto us the Savior of the whole world; He came and saved our souls.</td>
            <td class="arabic">نعظمك يا أم النور الحقيقي، ونمجدك أيتها العذراء القديسة، والدة الإله، لأنك ولدت لنا مخلص العالم، أتى وخلص نفوسنا.</td>
        </tr>
        <tr id="table_29_row_1" class="text">
            <td class="english">Glory be to You, our Master, our King, Christ, the pride of the apostles, the crown of the martyrs, the joy of the righteous, the firmness of the churches, the forgiveness of sins.</td>
            <td class="arabic">المجد لكَ يا سيدنا وملكنا المسيح، فخر الرسل، إكليل الشهداء تهليل الصديقين، ثبات الكنائس، غفران الخطايا.</td>
        </tr>
        <tr id="table_29_row_2" class="text">
            <td class="english">We proclaim the Holy Trinity in One Godhead. We worship Him. We glorify Him. Lord have mercy. Lord have mercy. Lord bless us. Amen. </td>
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
            <td class="english">Meeting Date: 06/02/2001<br>The Holy Synod decided NOT to omit any part of the Orthodox Creed during anytime of the year. As for the hymns, they are the ones that change according to the season. This is because it is not lawful to omit (cross out) any part of the Orthodox Creed which was put forth by the fathers at the ecumenical counsels as a type of variation in the rites during the seasons.</td>
            <td class="arabic">جلسة بتاريخ 06/02/2001<br>قرر المجمع المقدس عدم حزف أجزاء قانون الإيمان فى أى وقت من السنة. أما الألحان فهى التى تتغير حسب المناسبة. وذلك لأن قانون الإيمان الأرثوذكسى الذى وضعه الآباء فى المجامع المسكونية لا يجوز شطب أى جزء منه كنوع من التنوع الطقسى فى المناسبات.</td>
        </tr>

        <tr id="table_30_row_3" class="text">
            <td class="english"><span class="role">Congregation:<br></span>We believe in One God, God the Father, the Pantocrator, Creator of heaven and earth, and of all things seen and unseen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ: Ⲫϯ Ⲫ̀ⲓⲱⲧ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲫⲏ ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲛⲏ ⲉ̀ⲧⲟⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲏ ⲉⲧⲉ ⲛ̀ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲁⲛ.</td>
            <td class="arabic"><span class="role">السشعب:<br></span>نؤمن بإله واحد، الله الآب ضابط الكل، خالق السماء والأرض، ما يري وما لا يري.</td>
        </tr>
        <tr id="table_30_row_4" class="text">
            <td class="english">We believe in One Lord, Jesus Christ, the Only-Begotten Son of God, Begotten of the Father before all ages.</td>
            <td class="coptic">Ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ Ⲓˉⲏⲥⲟⲩⲥ  Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ̀̀Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲫ̀ⲓⲱⲧ ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ:</td>
            <td class="arabic">نؤمن برب واحد، يسوع المسيح، ابن الله الوحيد المولود من الآب قبل كل الدهور.</td>
        </tr>
        <tr id="table_30_row_5" class="text">
            <td class="english">Light of Light, True God of True God; begotten, not created; of one essence with the Father by whom all things were made.</td>
            <td class="coptic">ⲟⲩⲟⲩⲱⲓⲛⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲟⲩⲟⲩⲱⲓⲛⲓ: ⲟⲩⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲟ̀ⲩⲙⲓⲥⲓ ⲡⲉ ⲟⲩⲑⲁⲙⲓⲟ ⲁⲛ ⲡⲉ:  ⲟⲩⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲡⲉ ⲛⲉⲙ Ⲫ̀ⲓⲱⲧ ⲫⲏ ⲉ̀ⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ϣⲱⲡⲓ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ.</td>
            <td class="arabic">نور من نور، إله حق من إله حق، مولود غير مخلوق، مساو للآب في الجوهر، الذى به كان كل شئ.</td>
        </tr>
        <tr id="table_30_row_6" class="text">
            <td class="english">Who for us men and for our salvation came down from heaven, and was incarnate of the Holy Spirit and of the Virgin Mary, and became Man.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲧⲉ ⲉⲑⲃⲏⲧⲉⲛ  ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ: ⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲟⲩⲟϩ ⲁϥⲉⲣⲣⲱⲙⲓ:</td>
            <td class="arabic">هذا الذي من أجلنا نحن البشر، ومن أجل خلاصنا ، نزل من السماء ، وتجسد من الروح القدس ومن مريم العذراء وتأنس.</td>
        </tr>
        <tr id="table_30_row_7" class="text">
            <td class="english">And He was crucified for us under Pontius Pilate, suffered and was buried; and on the third day He rose from the dead according to the Scriptures.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲁⲩⲉⲣⲥ̀ⲧⲁⲩⲣⲱⲛⲓⲛ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ: ⲁϥϣⲉⲡⲉⲙⲕⲁϩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ⲟⲩⲟϩ ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ⲅˉ (ϣⲟⲙⲧ) ⲕⲁⲧⲁ ⲛⲓⲅ̀ⲣⲁⲫⲏ.</td>
            <td class="arabic">وصلب عنا علي عهد بيلاطس البنطي ، تألم وقبر. وقام من بين الأموات في اليوم الثالث، كما في الكتب.</td>
        </tr>
        <tr id="table_30_row_8" class="text">
            <td class="english">Ascended into the heavens, He sits at the right hand of His Father; and He is coming again in His glory to judge the living and the dead; whose kingdom shall have no end.</td>
            <td class="coptic">Ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ. Ⲕⲉ ⲡⲁⲗⲓⲛ ⲉϥⲛⲏⲟⲩ ϧⲉⲛ ⲡⲉϥⲱ̀ⲟⲩ ⲉ̀ϯϩⲁⲡ ⲉ̀ ⲛⲏ ⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ: ⲫⲏ ⲉ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ ⲟⲩⲁⲑⲙⲟⲩⲛⲕ ⲧⲉ.</td>
            <td class="arabic">وصعد الي السموات، وجلس عن يمين أبيه. وأيضا يأتي في مجده ليدين الأحياء والأموات ، الذي ليس لملكه انقضاء.</td>
        </tr>
        <tr id="table_30_row_9" class="text">
            <td class="english">Yes, we believe in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father; who, with the Father and the Son, is Worshiped and Glorified; who spoke by the prophets.</td>
            <td class="coptic">Ⲥⲉ ⲧⲉⲛⲛⲁϩϯ ⲉ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲛ̀ⲣⲉϥϯ ⲙ̀ⲡ̀ⲱⲛϧ ⲫⲏ ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫⲓⲱⲧ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲥⲉϯⲱ̀ⲟⲩ ⲛⲁϥ ⲛⲉⲙ Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ :ⲫⲏ ⲉ̀ⲧⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">نعم نؤمن بالروح القدس ، الرب المحيي المنبثق من الآب، نسجد له ونمجده مع الآب والابن، الناطق في الانبياء.</td>
        </tr>
        <tr id="table_30_row_10" class="text">
            <td class="english">And in one Holy, Catholic and Apostolic Church.  We confess one Baptism, for the remission of sins.</td>
            <td class="coptic">Ⲉⲟⲩⲓ̀ ⲛ̀ⲁ̀ⲅⲓⲁ̀ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ ⲛ̀ⲉⲕⲕ̀ⲗⲏⲥⲓⲁ. Ⲧⲉⲛⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲛ̀ⲟⲩⲱⲙⲥ ⲛ̀ⲟⲩⲱⲧ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ.</td>
            <td class="arabic">وبكنيسة واحدة مقدسة جامعة رسولية. ونعترف بمعمودية واحدة لمغفرة الخطايا.</td>
        </tr>
        <tr id="table_30_row_11" class="text">
            <td class="english">We look for the resurrection of the dead, and the life of the age to come.  Amen.</td>
            <td class="coptic">Ⲧⲉⲛϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁ ⲧ̀ϩⲏ ⲛ̀ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲛ̀ⲧⲉ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ: ⲛⲉⲙ ⲡⲓⲱⲛϧ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲱⲛ ⲉⲑⲛⲏⲟⲩ:  ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">وننتظر قيامة الأموات ، وحياة الدهر الآتي آمين.</td>
        </tr>
    </table>
    <table id="table_31" style="display: table;" title="O God, have mercy upon us">
        <caption id="caption_table_31" class="caption"><span class="coptic-caption">Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ</span></caption>
        
        <tr id="table_31_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>O God, have mercy upon us, settle Your mercy upon us, have compassion upon us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ: ⲑⲉϣ ⲟⲩⲛⲁⲓ ⲉ̀ⲣⲟⲛ: ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>اللهم إرحمنا قرر لنا رحمة تراءف علينا.</td>
        </tr>

        <tr id="table_31_row_3" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين.</td>
        </tr>

        <tr id="table_31_row_5" class="text">
            <td class="english"><span class="role">Priest:<br></span>Hear us</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>واسمعنا.</td>
        </tr>

        <tr id="table_31_row_7" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين.</td>
        </tr>

        <tr id="table_31_row_9" class="text">
            <td class="english"><span class="role">Priest:<br></span>Bless us, keep us, and help us</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>وباركنا واحفظنا وأعنا.</td>
        </tr>

        <tr id="table_31_row_11" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين.</td>
        </tr>

        <tr id="table_31_row_13" class="text">
            <td class="english"><span class="role">Priest:<br></span>Take away Your anger from us, visit us with Your salvation, and forgive us our sins.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲱⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ: ⲟⲩⲟϩ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>وارفع غضبك عنا وافتقدنا بخلاصك واغفر لنا خطايانا.</td>
        </tr>

        <tr id="table_31_row_15" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Amen. Lord have mercy. Lord have mercy. Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>ⲁⲙⲉⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>آمين. يارب ارحم. يارب ارحم. يارب ارحم.</td>
        </tr>   
    </table>
${faiEtafEnfHtml}

<div class="section" id="section_9" title="Pauline - Litany of the Gospel">
    <table id="table_33" title="">
        <caption id="caption_table_33" class="caption">Pauline<br>(Ephesians 2:13-18)
    <span class="arabic-caption">البولس<br>(افسس 13:2-18)</span></caption>
        <tr id="table_33_row_1" class="intro">
            <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the epistle of our teacher Paul to the Ephesians. May his blessings be with us. Amen </td>
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
        <caption id="caption_table_34" class="caption"><span class="coptic-caption">Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ</span></caption>
        
        <tr id="table_34_row_4" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Blessed are You indeed, with Your good Father, and the Holy Spirit, for You were crucified and saved us.  Have mercy upon us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲁϥⲁϣⲕ  ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>مبـارك أنـت بالحقيقة مع أبيك الصالح والـروح القدس لانك صلبت وخلصتنا.ارحمنا.</td>
        </tr>
    </table>
    <table id="table_35" title="">
        <caption id="caption_table_35" class="caption">Acts<br>(1:15 - 20)
    <span class="arabic-caption">الابركسيس<br>(1: 15 – 20)</span></caption>
        <tr id="table_35_row_1" class="intro">
            <td class="english">The Acts of our holy fathers, the apostles. May their holy blessings be with us. Amen.</td>
            <td class="coptic">˙Ⲡⲣⲁⲝⲉⲱⲛ  ⲧⲱⲛ  ⲁⲅⲓⲱⲛ  ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲱⲛ  ⲧⲟⲁⲛⲁⲅⲛⲱⲥⲙⲁ  :  ⲡ̀ⲣⲁⲝⲓⲥ  ⲡ̀ⲣⲁⲝⲓⲥ  ⲛ̀ⲧⲉ  ⲛⲉⲛⲓⲟϯ  ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ  ⲉ̀ⲣⲉⲡⲟⲩⲥ̀ⲙⲟⲩ  ⲉⲑⲩ̅  ϣⲱⲡⲓ  ⲛⲉⲙⲁⲛ  ⲁⲙⲏⲛ.</td>
            <td class="arabic">الابركسيس، فصل من أعمال آبائنا الرسل القديسين بركتهم المقدسة تكون معنا آمين</td>
        </tr>
        <tr id="table_35_row_4" class="text">
            <td class="english">And in those days Peter stood up in the midst of the disciples (altogether the number of names was about a hundred and twenty), and said,</td>
            <td class="coptic">˙Ⲟⲩⲟϩ ⲛ̀ϩ̀ⲣⲏⲓ ⲇⲉ ϧⲉⲛ ⲛⲁⲓⲉ̀ϩⲟⲟⲩ ⲁϥⲧⲱⲛϥ ⲛ̀ϫⲉ Ⲡⲉⲧⲣⲟⲥ ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀ⲛⲓⲥ̀ⲛⲏⲟⲩ: ⲛⲉ  ⲟⲩⲟⲛ  ⲟⲩⲙⲏϣ  ⲇⲉ ⲉⲩⲑⲟⲩⲏⲧ  ϩⲓ  ⲫⲁⲓ  ⲉ̀ⲫⲁⲓ  ⲉⲩⲛⲁⲉⲣ  ϣⲉ ϫⲟⲩⲧ  ⲛ̀ⲣⲁⲛ  ⲟⲩⲟϩ  ⲡⲉϫⲁϥ.</td>
            <td class="arabic">وَفِي تِلْكَ الأَيَّامِ قَامَ بُطْرُسُ فِي وَسَطِ التَّلاَمِيذِ وَكَانَ عِدَّةُ أَسْمَاءٍ مَعاً نَحْوَ مِئَةٍ وَعِشْرِينَ. فَقَالَ:</td>
        </tr>
        <tr id="table_35_row_5" class="text">
            <td class="english">"Men and brethren, this Scripture had to be fulfilled, which the Holy Spirit spoke before by the mouth of David concerning Judas, who became a guide to those who arrested Jesus;</td>
            <td class="coptic">Ⲛⲓⲣⲱⲙⲓ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ : ϩⲱϯ ⲡⲉ ⲛ̀ⲧⲉⲥϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ϯⲅⲣⲁⲫⲏ : ˙ⲑⲏⲉⲧⲁϥⲉⲣ ϣⲟⲣⲡ  ⲛ̀ϫⲟⲥ ⲛ̀ϫⲉ ⲡⲓⲡⲛ̅ⲁ̅ ⲉⲑⲟⲩⲁⲃ ⲉ̀ⲃⲟⲗ  ϧⲉⲛ  ⲣⲱϥ  ⲛ̀Ⲇⲁⲩⲓⲇ  :  ⲉⲑⲃⲉ  Ⲓⲟⲩⲇⲁⲥ  ⲫⲏⲉⲧⲁϥⲉⲣ ϭⲁⲩⲙⲱⲓⲧ ⲛ̀ⲛⲏⲉⲧⲁⲩⲁⲙⲟⲛⲓ ⲛ̀Ⲓⲏⲥ̅.</td>
            <td class="arabic">«أَيُّهَا الرِّجَالُ الإِخْوَةُ كَانَ يَنْبَغِي أَنْ يَتِمَّ هَذَا الْمَكْتُوبُ الَّذِي سَبَقَ الرُّوحُ الْقُدُسُ فَقَالَهُ بِفَمِ دَاوُدَ عَنْ يَهُوذَا الَّذِي صَارَ دَلِيلاً لِلَّذِينَ قَبَضُوا عَلَى يَسُوعَ</td>
        </tr>
        <tr id="table_35_row_6" class="text">
            <td class="english">for he was numbered with us and obtained a part in this ministry."</td>
            <td class="coptic">Ϫⲉ ⲛⲁϥⲏⲡ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ ⲡⲉ ⲟⲩⲟϩ ⲁ ⲡⲓⲱⲡ ⲓ̀  ⲉ̀ⲣⲟϥ ⲙ̀ⲡⲓⲕ̀ⲗⲏⲣⲟⲥ  ⲛ̀ⲧⲉ  ⲧⲁⲓⲇⲓⲁⲕⲟⲛⲓⲁ .</td>
            <td class="arabic">إِذْ كَانَ مَعْدُوداً بَيْنَنَا وَصَارَ لَهُ نَصِيبٌ فِي هَذِهِ الْخِدْمَةِ.</td>
        </tr>
        <tr id="table_35_row_7" class="text">
            <td class="english">(Now this man purchased a field with the wages of iniquity; and falling headlong, he burst open in the middle and all his entrails gushed out.</td>
            <td class="coptic">˙ Ⲫⲁⲓ ⲙⲉⲛ ⲟⲩⲛ  ⲁϥϣⲱⲡ  ⲛ̀ⲟⲩⲓⲟϩⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲫ̀ⲃⲉⲭⲉ ⲛ̀ⲧⲉ ϯⲁⲇⲓⲕⲓⲁ  :  ⲟⲩⲟϩ  ⲁϥϩⲉⲓ  ϩⲓϫⲉⲛ  ⲡⲉϥϩⲟ  : ⲟⲩⲟϩ ⲁϥⲕⲱϣ ϧⲉⲛ ⲧⲉϥⲙⲏϯ : ⲟⲩⲟϩ ⲛⲏⲉⲧ ⲥⲁϧⲟⲩⲛ  ⲙ̀ⲙⲟϥ ⲧⲏⲣⲟⲩ ⲁⲩⲫⲱⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">فَإِنَّ هَذَا اقْتَنَى حَقْلاً مِنْ أُجْرَةِ الظُّلْمِ وَإِذْ سَقَطَ عَلَى وَجْهِهِ انْشَقَّ مِنَ الْوَسَطِ فَانْسَكَبَتْ أَحْشَاؤُهُ كُلُّهَا.</td>
        </tr>
        <tr id="table_35_row_8" class="text">
            <td class="english">And it became known to all those dwelling in Jerusalem; so that field is called in their own language, Akel Dama, that is, Field of Blood.)</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϣⲟⲡ ϧⲉⲛ Ⲓⲗⲏ̅ⲙ̅: ϩⲱⲥⲧⲉ ⲛ̀ⲥⲉⲙⲟⲩϯ  ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀ⲡⲓⲓⲟϩⲓ ⲉⲧⲉ ⲙ̀ⲙⲁⲩ ϧⲉⲛ ⲧⲟⲩⲁⲥⲡⲓ ϫⲉ ⲁⲭⲉⲗⲗⲁⲙⲁⲅ : ⲉⲧⲉ ⲡⲓⲓⲟϩⲓ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲛⲟϥ  ⲡⲉ.</td>
            <td class="arabic">وَصَارَ ذَلِكَ مَعْلُوماً عِنْدَ جَمِيعِ سُكَّانِ أُورُشَلِيمَ حَتَّى دُعِيَ ذَلِكَ الْحَقْلُ فِي لُغَتِهِمْ «حَقْلَ دَمَا» (أَيْ: حَقْلَ دَمٍ).</td>
        </tr>
        <tr id="table_35_row_9" class="text">
            <td class="english">"For it is written in the book of Psalms: 'Let his dwelling place be desolate, And let no one live in it'</td>
            <td class="coptic">˙Ⲉⲥ̀ϧⲏⲟⲩⲧ ⲅⲁⲣ ϩⲓ ⲡ̀ϫⲱⲙ ⲛ̀ⲧⲉ ⲛⲓⲯⲁⲗⲙⲟⲥ : ϫⲉ ⲧⲉϥⲉⲣⲃⲓ ⲙⲁⲣⲉⲥϣⲱϥ ⲟⲩⲟϩ ⲙ̀ⲡⲉⲛⲑ̀ⲣⲉϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲫⲏⲉⲧϣⲟⲡ ⲛ̀ϧⲏⲧⲥ ⲛ̀ⲧⲉϥ ⲙⲉⲧⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲙⲁⲣⲉ ⲕⲉⲟⲩⲁⲓ ϭⲓⲧⲥ</td>
            <td class="arabic">لأَنَّهُ مَكْتُوبٌ فِي سِفْرِ الْمَزَامِيرِ: لِتَصِرْ دَارُهُ خَرَاباً وَلاَ يَكُنْ فِيهَا سَاكِنٌ وَلْيَأْخُذْ وَظِيفَتَهُ آَخَرُ.</td>
        </tr>
        <tr id="table_35_row_11" class="intro">
            <td class="english">The word of the Lord shall grow, multiply, be mighty, and be confirmed in the holy church of God. Amen.</td>
            <td class="coptic">Ⲡⲓⲥⲁϫⲓ ⲇⲉ ⲛ̀ⲧⲉ ˙Ⲡ⳪ ⲉϥⲉ̀ⲁⲓⲁⲓ ⲟⲩⲟϩ ⲉϥⲉ̀ⲁ̀ϣⲁⲓ (ⲟⲩⲟϩ) ⲉϥⲉ̀ⲁ̀ⲙⲁϩⲓ ⲟⲩⲟϩ ⲉϥⲉ̀ⲧⲁϫⲣⲟ ϧⲉⲛ ϯⲁ̀ⲅⲓⲁ ⲛ̀ⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲛ̀ⲧⲉ Ⲫϯ. ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">لم تزل كلمة الرب تنمو وتكثر وتعتز وتثبت فى كنسية الله المقدسة، آمين.</td>
        </tr>
    </table>
    <table id="table_36" style="display: table;" title="The Procession of Judas">
        <caption id="caption_table_36" class="caption">The Procession of Judas 
        <span class="arabic-caption">زفة يهوذا</span></caption>
        
        <tr id="table_36_row_4" class="refrain">
            <td class="english"><span class="role">Congregation:<br></span>(Judas)×6 who has broken the law. </td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ⲟ̀ⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_5" class="text">
            <td class="english">With silver, you have sold Christ to the Jews, who have broken the law. The law breakers took Christ and nailed Him on the Cross at the place of Cranium.</td>
            <td class="coptic">ⲁⲣⲅⲩⲣⲓⲱ ⲉⲡⲁⲣⲁⲑⲏⲥ ⲁⲥⲭⲟ̅ ⲧⲓⲥ ⲓⲟⲩⲇⲉⲓⲥ ⲡⲁⲣⲁⲛⲟⲙⲓⲥ : ⲓⲇ̅ⲉ ⲡⲁⲣⲁⲛⲟⲙⲓ ⲉ̀ⲡⲓⲗⲁⲃⲟⲩ ⲙⲉⲛⲓ ⲧⲟⲛ ⲭⲟ̅ : ⲥ̀ⲧⲁⲩⲣⲱ ⲡ̀ⲣⲟⲥ ⲏ̀ⲗⲱⲥⲁⲛ ⲉⲛⲧⲱ ⲕ̀ⲣⲛⲓⲱ ⲧⲟⲡⲱ.</td>
            <td class="arabic">بالفضة بعت سيدك المسيح لليهود مخالفى  الناموس  فأما مخالفى الناموس فقد أخذوا المسيح وسمروه على الصليب فى موضع الأقرانيون </td>
        </tr>
        <tr id="table_36_row_6" class="refrain">
            <td class="english">(Judas)×6 who has broken the law. </td>
            <td class="coptic">(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ⲟ̀ⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_7" class="text">
            <td class="english">Barabbas the condemned thief was set free and the Master, the Judge they crucified. They thrust a spear in Your side, and as a thief they nailed You on the cross. They laid you in a tomb, O You, who raised Lazarus from the tomb.</td>
            <td class="coptic">Ⲃⲁⲣⲁⲃⲃⲁⲛ ⲧⲟⲛ ⲕⲁⲧⲁ ⲕⲣⲓⲧⲟⲛ: ⲁⲡⲉⲗⲩⲥⲁⲛⲁⲩ ⲧⲟⲛ ⲕ̀ⲣⲓⲧⲏⲛ : ⲕⲉⲇⲉⲥⲡⲟⲧⲏⲛ ⲉⲥⲧⲁⲩⲣⲱⲥⲁⲛ . Ⲓⲥ ⲧⲏⲛ ⲛ̀ⲗⲉⲩⲣⲁⲛ ⲗⲟⲛⲭⲏⲛ ⲉ̀ⲡⲓⲑⲉⲛⲧⲏⲥ : ⲕⲉⲱⲥ ⲧⲏⲥⲧⲏⲥ : ⲍⲩⲗⲱ ⲡ̀ⲣⲟⲥ ⲏ̀ⲗⲱⲛⲁⲥ ⲉ̀ⲑⲕⲁⲛ : ⲉⲛ ⲙ̀ⲛⲏⲏⲙⲓ̀ⲱ̀ⲟ̀ ⲉⲕⲧⲟⲩ ⲧⲁⲫⲟⲩ : ⲉ̀ⲅⲓⲣⲁⲥⲧⲟⲛ Ⲗⲁⲍⲁⲣⲟⲛ</td>
            <td class="arabic">باراباس اللص المسجون أطلقوه والسيد الديان صلبوه . فى جنبك وضعوا حربة ومثل لص سمروك على خشبة ووضعوك فى قبر يا من أقام لعازر من  القبر. </td>
        </tr>
        <tr id="table_36_row_8" class="refrain">
            <td class="english">(Judas)×6 who has broken the law. </td>
            <td class="coptic">(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ⲟ̀ⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_9" class="text">
            <td class="english">For as Jonah stayed three days inside the whale’s belly, also our Savior stayed three days. After He died, they sealed the tomb.</td>
            <td class="coptic">Ⲱⲥⲡⲉⲣ ⲅⲁⲣ Ⲓⲱⲛⲁⲥ ⲧ̀ⲣⲓⲥ ⲏ̀ⲙⲉⲣⲁⲥ ⲉ̀ⲙⲓⲛⲉⲛ : ⲉⲛⲕⲓⲗⲓⲁ ⲧⲟⲩⲕⲏ ⲧⲟⲩⲟⲩⲧⲱⲥ ⲕⲉ ⲥⲱⲧⲏⲣ ⲏ̀ⲙⲱⲛ : ⲧ̀ⲣⲓⲥ ⲏ̀ⲙⲉⲣⲁⲥ ⲉ̀ⲙⲓⲛⲉ̀̀ⲛ̀ : ⲙⲉⲧⲁⲧⲟⲩ ⲧⲉⲑⲛⲏⲕⲟⲧⲟⲩⲧⲟⲛ ⲧⲁⲫⲟⲛ : ⲉⲥⲫⲁⲣⲅⲓⲥⲁⲛⲧⲟ .</td>
            <td class="arabic">لأنه كما مكث يونان ثلاثة أيام فى بطن الحوت هكذا مخلصنا أقام ثلاثة أيام وبعد أن مات ختموا القبر .</td>
        </tr>
        <tr id="table_36_row_11" class="refrain">
            <td class="english">(Judas)×6 who has broken the law. </td>
            <td class="coptic">(Ⲓⲟⲩⲇⲁⲥ)̅ⲋ ⲟ̀ⲡⲁⲣⲁⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">(يا يهوذا)6 يا مخالف الناموس . </td>
        </tr>
        <tr id="table_36_row_12" class="text">
            <td class="english">Truly He rose but the soldiers were not aware that truly the Savior of the world has risen. He who suffered and died for our sake, O Lord, glory be to You. Amen.</td>
            <td class="coptic">Ⲟⲛⲧⲱⲥ ⲁⲛⲉⲥⲧⲏ ⲕⲉ ⲟⲩⲕⲉⲅⲛⲱⲥ ⲁⲛⲥⲧⲣⲁⲧⲓⲁⲱⲧⲉ : ⲟⲩⲛⲧⲱⲥⲅⲉⲣⲑⲓⲥ ⲟ̀ⲃⲱⲧⲏⲣ ⲧⲟⲩⲕⲟⲥⲙⲟⲩ : ⲟ̀ⲡⲁⲑⲱⲛ ⲕⲉ ⲁⲛⲁⲥ ⲧⲁⲥⲇⲓⲁⲧⲟⲩ : ⲅⲉⲛⲟⲥ ⲏ̀ⲙⲱⲛ Ⲕⲩⲣⲓⲉ Ⲇⲟⲝⲁⲥⲓ : ⲁⲙⲏⲛ. </td>
            <td class="arabic">بالحقيقة قام والجند لم يعلموا. أنه حقاً نهض مخلص العالم الذى تألم وقام لأجل جنسنا يارب لكَ المجد إلى الأبد آمين .</td>
        </tr>
    </table>
    <table id="table_37" style="display: table;" title="Trisagion">
        <caption id="caption_table_37" class="caption">Trisagion
        <span class="arabic-caption">الثلاث تقديسات</span></caption>

        <tr id="table_37_row_4" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Holy God, Holy Mighty, Holy Immortal, Who was born of the Virgin, Have mercy on us.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲁ̀ⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲉⲕⲡⲁⲣⲑⲉⲛⲟⲩ ⲅⲉⲛⲛⲉⲑⲏⲥ Ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>قدوس الله . قدوس القوى . قدوس الحى الذى لا يموت، الذى ولد من العذراء ، أرحمنا.</td>
        </tr>
        <tr id="table_37_row_5" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲁ̀ⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ Ⲇⲓ Ⲏ̀ⲙⲁⲥ Ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ .</td>
            <td class="arabic">قدوس الله . قدوس القوى . قدوس الحى الذى لا يموت، الذى صلب عنا ، أرحمنا .</td>
        </tr>
        <tr id="table_37_row_6" class="text">
            <td class="english">Holy God, Holy Mighty, Holy Immortal, Who was crucified for us, Have mercy on us.</td>
            <td class="coptic">Ⲁⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲁ̀ⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ Ⲇⲓ Ⲏ̀ⲙⲁⲥ Ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ .</td>
            <td class="arabic">قدوس الله . قدوس القوى . قدوس الحى الذى لا يموت، الذى صلب عنا ، أرحمنا .</td>
        </tr>
        <tr id="table_37_row_7" class="text">
            <td class="english">Glory to the Father and to the Son, and to the Holy Spirit, now and ever, and unto the ages of ages, Amen. O Holy Trinity, have mercy upon us.</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ̀ : ⲕⲉ ⲁ̀ⲅⲓⲱ̀ ⲡ̅ⲛ̅ⲁ̅ⲧ̅ⲓ̅ . Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲉⲛ. </td>
            <td class="arabic">المجد للآب و الإبن و الروح القدس . الآن و كل آوان و الى دهر الدهور ، آمين .</td>
        </tr>
    </table>
    <table id="table_38" title="Litany of the Gospel">
        <caption id="caption_table_38" class="caption">Litany of the Gospel
        <span class="arabic-caption">اوشية الأنجيل</span></caption>

        <tr id="table_38_row_1" class="text">
            <td class="english"><span class="role">Priest:<br></span>Let us Pray</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ϣⲗⲏⲗ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>صلوا</td>
        </tr>

        <tr id="table_38_row_3" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Stand up for prayer.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲉⲡⲓ ⲡ̀ⲣⲟⲥⲉⲩⲭϩ ⲥ̀ⲧⲁⲑⲏⲧⲉ.</td>
            <td class="arabic"><span class="role">الشماس:<br></span>للصلاة قفوا</td>
        </tr>

        <tr id="table_38_row_5" class="text">
            <td class="english"><span class="role">Priest:<br></span>Peace be with all.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>السلام للكل.</td>
        </tr>

        <tr id="table_38_row_7" class="text">
            <td class="english"><span class="role">Congregation:<br></span>And with your spirit.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>ولروحك أيضاً..</td>
        </tr>

        <tr id="table_38_row_9" class="text">
            <td class="english"><span class="role">Priest:<br></span>O Master, Lord Jesus Christ our God, Who said to His saintly, honored disciples and Holy apostles,</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span>Ⲫⲛⲏⲃ Ⲡϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲫⲏ ⲉⲧⲁϥϫⲟⲥ ⲛ̀ⲛⲉϥⲁ̀ⲅⲓⲟⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>أيها السيد الرب يسوع المسيح إلهنا، الذى قال لتلاميذه القديسين ورسله الأطهار المكرمين:</td>
        </tr>
        <tr id="table_38_row_10" class="text">
            <td class="english">“Many prophets and righteous men have desired to see the things which you see, and have not seen them, and to hear the things which you hear and have not heard them.</td>
            <td class="coptic">ϫⲉ ϩⲁⲛⲙⲏϣ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ϩⲁⲛⲑ̀ⲙⲏⲓ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ϩⲁⲛⲑ̀ⲙⲏⲓ ⲁⲩⲉⲣⲉ̀ⲡⲓⲑⲩⲙⲓⲛ ⲉⲛⲁⲩ ⲉ̀ⲛⲏ ⲉ̀ⲧⲉⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲛⲁⲩ: ⲟⲩⲟϩ ⲉ̀ⲥⲱⲧⲉⲙ ⲉ̀ⲛⲏ ⲉ̀ⲧⲉⲧⲉⲛⲥⲱⲧⲉⲙ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲥⲱⲧⲉⲙ. </td>
            <td class="arabic">إن أنبياء وأبرارا كثيرين اشتهوا أن يروا ما أنتم ترون ولم يروا وأن يسمعوا ما أنتم تسمعون ولم يسمعوا.</td>
        </tr>
        <tr id="table_38_row_11" class="text">
            <td class="english">But as for you, blessed are your eyes for they see, and your ears for they hear.</td>
            <td class="coptic">Ⲛⲑⲱⲧⲉⲛ ⲇⲉ ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲉⲧⲉⲛⲃⲁⲗ ϫⲉ ⲥⲉⲛⲁⲩ: ⲛⲉⲙ ⲛⲉⲧⲉⲛⲙⲁϣϫ ϫⲉ ⲥⲉⲥⲱⲧⲉⲙ.</td>
            <td class="arabic">أما أنتم فطوبى لأعينكم لأنهـا تبصر ولآذانكم لأنهـا تسمـع.</td>
        </tr>
        <tr id="table_38_row_12" class="text">
            <td class="english">May we be worthy to hear and to act according to your Holy Gospels, through the prayers of Your saints.</td>
            <td class="coptic">Ⲙ̀ⲁⲣⲉⲛⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲥⲱⲧⲉⲙ ⲟⲩⲟϩ ⲉ̀ⲓ̀ⲣⲓ ⲛ̀ⲛⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏ ⲉⲑⲟⲩⲁⲃ  ⲛ̀ⲧⲁⲕ.</td>
            <td class="arabic">فلنستحق أن نسمع ونعمل بأناجيلك المقدسة بـطـلـبات قديسيك.</td>
        </tr>

        <tr id="table_38_row_14" class="text">
            <td class="english"><span class="role">Deacon:<br></span>Pray for the Holy Gospel.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲇⲓⲁⲕⲱⲛ:<br></span>Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ. </td>
            <td class="arabic"><span class="role">الشماس:<br></span>صلوا من أجل الإنجيل المقدس.</td>
        </tr>

        <tr id="table_38_row_16" class="text">
            <td class="english"><span class="role">Congregation:<br></span>Lord have mercy.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲗⲁⲟⲥ:<br></span>Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
            <td class="arabic"><span class="role">الشعب:<br></span>يارب ارحم.</td>
        </tr>

        <tr id="table_38_row_18" class="text">
            <td class="english"><span class="role">Priest:<br></span>Remember also, O our Master, all those who have bidden us to remember them in our supplications and prayers which we offer up unto You, O Lord our God.</td>
            <td class="coptic"><span class="role">Ⲡⲓⲟⲩⲏⲃ:<br></span> Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ ⲇⲉ ⲟⲛ ⲡⲉⲛⲛⲏⲃ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧⲁⲩϩⲟⲛϩⲉⲛ ⲛⲁⲛ ⲉ̀ⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀ ϧⲉⲛ ⲛⲉⲛϯϩⲟ ⲛⲉⲙ ⲛⲉⲛⲧⲱⲃϩ ⲉ̀ⲧⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡ⳪ Ⲡⲉⲛⲛⲟⲩϯ.</td>
            <td class="arabic"><span class="role">الكاهن:<br></span>أذكر أيضا يا سيدنا كل الذين أوصونا أن نذكرهم فى تضرعـاتنـا وطلباتنا التى نصعدها إليك أيها الرب إلهنا.</td>
        </tr>
        <tr id="table_38_row_19" class="text">
            <td class="english">Those who have already fallen asleep, repose them. Those who are sick, heal them.</td>
            <td class="coptic">Ⲛⲏ ⲉⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ⲉⲛⲕⲟⲧ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ: ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic">الذين سبقوا فرقدوا، نيحهم المرضى اشفهم</td>
        </tr>
        <tr id="table_38_row_20" class="text">
            <td class="english">For You are the life of us all, the salvation of us all, the hope of us all, the healing of us all, and the resurrection of us all.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲡⲉⲛⲱⲛϧ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲡⲉⲛⲟⲩϫⲁⲓ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲧⲉⲛϩⲉⲗⲡⲓⲥ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲡⲉⲛⲧⲁⲗϭⲟ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲧⲉⲛⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲧⲏⲣⲉⲛ.</td>
            <td class="arabic">لأنـك أنت حياتنا كلنا، وخلاصنا كلنا ، ورجاؤنا كلنا ، وشفاؤنا كلنا ، وقيامتنا كلنا.</td>
        </tr>
    </table>
</div>





<div class="section" id="section_10" title="Coptic Psalm & Gospel">
    <table id="table_39" title="Coptic Psalm">
        <caption id="caption_table39" class="caption" id="caption_table_39">Coptic Psalm<br>(55: 21,12)
        <span class="arabic-caption">المزمور قبطي<br>(55: 21 و 12)</span></caption>
        <tr id="table_39_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_39_row_1" class="text">
            <td class="english">His words were softer than oil, Alleluia.</td>
            <td class="coptic">Ⲁⲩϭ̀ⲛⲟⲛ ⲛ̀ϫⲉ ⲛⲉϥⲥⲁϫⲓ ⲉ̀ϩⲟⲧⲉ ⲟⲩⲛⲉϩ: Ⲁ̅Ⲗ̅</td>
            <td class="arabic">كلامه ألين من الزيت (الدهن). الليلويا.</td>
        </tr>
        <tr id="table_39_row_2" class="text">
            <td class="english">And they are arrows.</td>
            <td class="coptic">ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲥⲟⲑⲛⲉϥ ⲛⲉ:</td>
            <td class="arabic">وهو نِصال.</td>
        </tr>
        <tr id="table_39_row_3" class="text">
            <td class="english">For if an enemy reviled me, I would have endured it;</td>
            <td class="coptic">Ϫⲉ ⲉ̀ⲛⲉ ⲟⲩϫⲁϫⲓ ⲡⲉ ⲧⲁϥ ϯϣⲱϣ ⲛⲏⲓ ⲛⲁⲓ ⲛⲁϥⲁⲓ ⲉ̀ⲣⲟϥ ⲡⲉ : </td>
            <td class="arabic">فلو كان العدو عيرنى اذاً لاحتملت.</td>
        </tr>
        <tr id="table_39_row_4" class="text">
            <td class="english">And if one hating me boasted against me, I would have hidden from him.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲉ̀ⲛⲉ ⲡⲉⲑⲙⲟⲥϯ ⲙ̀ⲙⲟⲓ ⲁϥϫⲱ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ⲥⲁϫⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ ⲛⲁⲓ ⲛⲁⲭⲟⲡⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟϥ</td>
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
            <td class="english">A chapter according to St. Luke,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار لوقا</td>
        </tr>
        <tr id="table_41_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_41_row_2" class="text">
            <td class="coptic">Ⲁϥⲓ̀ ⲇⲉ ⲛ̀ϫⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲫⲛⲓⲁⲧϣⲉⲙⲏⲣ ⲫⲏⲉ̀ⲧⲉ ⲥ̀ϣⲉ ⲉ̀ϣⲁⲧ ⲙ̀ⲡⲓⲡⲁⲥⲭⲁ ⲛ̀ϧⲏⲧϥ. Ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲣⲡ ⲙ̀Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲉ̀ⲁϥϫⲟⲥ : ϫⲉ ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲥⲉⲃⲧⲉ ⲡⲓⲡⲁⲥⲭⲁ ⲛⲁⲛ ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛⲟⲩⲟⲙϥ. Ⲛ̀ⲑⲱⲟⲩ ⲇⲉ ⲡⲉϫⲱⲟⲩ ⲛⲁϥ ϫⲉ ⲭ̀ⲟⲩⲱϣ ⲛ̀ⲧⲉⲛⲥⲉⲃⲧⲱⲧϥ ⲑⲱⲛ. Ⲛ̀ⲑⲟϥ ⲇⲉ ⲡⲉϫⲁϥ ⲛⲱⲟⲩ : ϫⲉ ϩⲏⲡⲡⲉ ⲉ̀ⲣⲉⲧⲉⲛⲛⲁϣⲉⲛⲱⲧⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ϯⲃⲁⲕⲓ :
            <br>  ̀Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅ </td>
        </tr>
        <tr id="table_41_row_3" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
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
        <td class="english">His words were softer than oil, and they are arrows.</td>
        <td class="arabic">كلامه ألين من الزيت (الدهن) وهو نِصال.</td>
    </tr>
    <tr id="table_42_row_5" class="text">
        <td class="english">For if an enemy reviled me, I would have endured it; And if one hating me boasted against me, I would have hidden from him.</td>
        <td class="arabic">فلو كان العدو عيرنى اذاً لاحتملت. ولو ان مبغضى عظم علىّ الكلام لاختفيت منه.</td>
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
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Luke the evangelist. May his blessings be with us. Amen.</td>
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
        <td class="english">So they went and found it just as He had said to them, and they prepared the Passover.<br>Bow down before the Holy Gospel.</td>
        <td class="arabic">فَانْطَلَقَا وَوَجَدَا كَمَا قَالَ لَهُمَا فَأَعَدَّا الْفِصْحَ.<br>أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_43_row_12" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

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

