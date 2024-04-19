import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion,  cross} from "../repeatedPrayers";

export const DOW9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","DAY of WEDNESDAY","يوم الاربعاء");
    const paschalPraiseHtml = paschalPraise2("4","14","15","NINTH","التاسعة","DAY of WEDNESDAY","يوم الاربعاء");
    const copticGospelIntroHtml = copticGospelIntro("17");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("21");
    const expositionConclusionHtml = expositionConclusion("23");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطي</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ϯⲄⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲉⲧⲁϥⲛⲁⲩ ⲇⲉ ⲛ̀ϫⲉ Ⲡ̀⳪ Ⲫϯ ϫⲉ ⲁⲩⲁ̀ϣⲁⲓ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲕⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ : ⲟⲩⲟϩ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉϥⲣⲁⲕⲓ ϧⲉⲛ ⲡⲉϥϩⲏⲧ ⲉ̀ⲙⲁϣⲱ ⲉ̀ϫⲉⲛ ⲡⲓⲡⲉⲧϩⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲡⲓⲁ̀ⲣⲓⲑⲙⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡⲓ̅ⲥ̅ⲗ ϯⲥⲩⲛⲁⲅⲱⲅⲏ ⲧⲏⲣⲥ ⲉ̀ϩ̀ⲣⲏⲓ |ⲉ̀ⲡ̀ⲧⲱⲟⲩ ⲛ̀Ⲥⲓⲛⲁ ϧⲉⲛ ⲡⲓⲁ̀ⲃⲟⲧ ⲛ̀ϩⲟⲩⲓⲧ</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲛⲓⲡⲁⲣⲟⲙⲓⲁ̀ ⲛ̀ⲧⲉ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲡⲁϣⲏⲣⲓ ⲙ̀ⲡⲉⲛⲑ̀ⲣⲟⲩ ⲥⲟⲣⲙⲉⲕ ⲛ̀ϫⲉ ϩⲁⲛⲣⲱⲙⲓ ⲛ̀ⲁⲥⲉⲃⲏⲥ : ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣⲣⲁⲟⲩⲱ̀ Ⲉ̀ϣⲱⲡ ⲁⲩϣⲁⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲉⲩϫⲱⲙ̀ⲙⲟⲥ : ϫⲉ ⲁⲙⲟⲩ ⲁ̀ⲣⲓϣ̀ⲫⲏⲣ ⲛⲉⲙⲁⲛ ⲉ̀ⲟⲩⲥ̀ⲛⲟϥ</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲙⲏⲧ̀ϫⲓϫ ⲙ̀Ⲡ̀⳪ ϫⲉⲙϫⲟⲙ ⲉ̀ⲙⲧⲁⲛϧⲟ ⲏ ⲛⲧⲁⲡⲉϥⲙⲁϫⲉ ⲉϩⲣϣ ⲉⲥⲱⲧⲉⲙ ⲁⲗⲗⲁ ⲛⲉⲧⲉⲛⲛⲟⲃⲓ ⲁ̀ϩⲓ ⲉⲣⲁⲧⲟⲩ ϧⲉⲛ ⲛⲉⲧⲉⲛⲙⲏϯ ⲛⲉⲙ Ⲫϯ ⲟⲩⲟϩ ⲉⲑⲃⲉ ⲛⲉⲧⲉⲛⲛⲟⲃⲓ ⲁϥⲕⲧⲟ ⲙ̀ⲡⲉϥϩⲟ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲱⲧⲉⲛ ⲉ̀ⲧⲉⲙⲛⲁ ⲛⲏⲧⲉⲛ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_15" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ  Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_16" class="text">
            <td class="coptic">Ⲉⲩⲉⲙⲓⲛ̀ϫⲉ ⲛⲓⲭⲁⲛⲁⲛⲉⲟⲥ ⲛⲓⲉⲥⲱⲟⲩ ⲉⲧⲟⲩⲁⲣⲉϩ ⲉⲣⲱⲟⲩ ϫⲉ ⲟⲩⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡ̀⳪ ⲡⲉ ⲟⲩⲟϩ ϯⲛⲁϫⲟⲥ ⲛⲱⲟⲩ ϫⲉ ⲉϣϫⲉ ⲛⲁⲛⲉⲥ ⲙ̀ⲡⲉⲧⲉⲛⲙ̀ⲑⲟ ⲙⲁ ⲛⲁⲓ̀ ⲙ̀ⲡⲁⲃⲉⲭⲉ ⲛ̀ⲧⲉ ⲧⲉⲛⲧⲁϩⲟϥ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">


<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Genesis 24:1-9)
    <span class="arabic-caption">النبوة الأولي<br>(تكوين 24: 1-9)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Now Abraham was old, well advanced in age; and the Lord had blessed Abraham in all things.</td>
        <td class="arabic">وَشَاخَ ابْرَاهِيمُ وَتَقَدَّمَ فِي الايَّامِ. وَبَارَكَ الرَّبُّ ابْرَاهِيمَ فِي كُلِّ شَيْءٍ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">So Abraham said to the oldest servant of his house, who ruled over all that he had, "Please, put your hand under my thigh,</td>
        <td class="arabic">وَقَالَ ابْرَاهِيمُ لِعَبْدِهِ كَبِيرِ بَيْتِهِ الْمُسْتَوْلِي عَلَى كُلِّ مَا كَانَ لَهُ: «ضَعْ يَدَكَ تَحْتَ فَخْذِي</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">and I will make you swear by the Lord, the God of heaven and the God of the earth, that you will not take a wife for my son from the daughters of the Canaanites, among whom I dwell;</td>
        <td class="arabic">فَاسْتَحْلِفَكَ بِالرَّبِّ الَهِ السَّمَاءِ وَالَهِ الارْضِ انْ لا تَاخُذَ زَوْجَةً لِابْنِي مِنْ بَنَاتِ الْكَنْعَانِيِّينَ الَّذِينَ انَا سَاكِنٌ بَيْنَهُمْ</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">but you shall go to my country and to my family, and take a wife for my son Isaac."</td>
        <td class="arabic">بَلْ الَى ارْضِي وَالَى عَشِيرَتِي تَذْهَبُ وَتَاخُذُ زَوْجَةً لِابْنِي اسْحَاقَ».</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And the servant said to him, "Perhaps the woman will not be willing to follow me to this land. Must I take your son back to the land from which you came?"</td>
        <td class="arabic">فَقَالَ لَهُ الْعَبْدُ: «رُبَّمَا لا تَشَاءُ الْمَرْاةُ انْ تَتْبَعَنِي الَى هَذِهِ الارْضِ. هَلْ ارْجِعُ بِابْنِكَ الَى الارْضِ الَّتِي خَرَجْتَ مِنْهَا؟»</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">But Abraham said to him, "Beware that you do not take my son back there.</td>
        <td class="arabic">فَقَالَ لَهُ ابْرَاهِيمُ: «احْتَرِزْ مِنْ انْ تَرْجِعَ بِابْنِي الَى هُنَاكَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">The Lord God of heaven, who took me from my father's house and from the land of my family, and who spoke to me and swore to me, saying, 'To your descendants I give this land,' He will send His angel before you, and you shall take a wife for my son from there.</td>
        <td class="arabic">الرَّبُّ الَهُ السَّمَاءِ الَّذِي اخَذَنِي مِنْ بَيْتِ ابِي وَمِنْ ارْضِ مِيلادِي وَالَّذِي كَلَّمَنِي وَالَّذِي اقْسَمَ لِي قَائِلا: لِنَسْلِكَ اعْطِي هَذِهِ الارْضَ هُوَ يُرْسِلُ مَلاكَهُ امَامَكَ فَتَاخُذُ زَوْجَةً لِابْنِي مِنْ هُنَاكَ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">And if the woman is not willing to follow you, then you will be released from this oath; only do not take my son back there."</td>
        <td class="arabic">وَانْ لَمْ تَشَا الْمَرْاةُ انْ تَتْبَعَكَ تَبَرَّاتَ مِنْ حَلْفِي هَذَا. امَّا ابْنِي فَلا تَرْجِعْ بِهِ الَى هُنَاكَ».</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">So the servant put his hand under the thigh of Abraham his master, and swore to him concerning this matter.</td>
        <td class="arabic">فَوَضَعَ الْعَبْدُ يَدَهُ تَحْتَ فَخْذِ ابْرَاهِيمَ مَوْلاهُ وَحَلَفَ لَهُ عَلَى هَذَا الامْرِ.</td>
    </tr>
    <tr id="table_3_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Numbers 20:1-13)
    <span class="arabic-caption">النبوة الثانية<br>(سفر العدد 20: 1 - 13)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from the book of Numbers of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر العدد لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">Then the children of Israel, the whole congregation, came into the Wilderness of Zin in the first month, and the people stayed in Kadesh; and Miriam died there and was buried there.</td>
        <td class="arabic">وَأَتَى بَنُو إِسْرَائِيل الجَمَاعَةُ كُلُّهَا إِلى بَرِّيَّةِ صِينَ فِي الشَّهْرِ الأَوَّلِ. وَأَقَامَ الشَّعْبُ فِي قَادِشَ. وَمَاتَتْ هُنَاكَ مَرْيَمُ وَدُفِنَتْ هُنَاكَ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">Now there was no water for the congregation; so they gathered together against Moses and Aaron.</td>
        <td class="arabic">وَلمْ يَكُنْ مَاءٌ لِلجَمَاعَةِ فَاجْتَمَعُوا عَلى مُوسَى وَهَارُونَ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">And the people contended with Moses and spoke, saying: "If only we had died when our brethren died before the Lord!</td>
        <td class="arabic">وَخَاصَمَ الشَّعْبُ مُوسَى وَقَالُوا لهُ: «ليْتَنَا فَنِينَا فَنَاءَ إِخْوَتِنَا أَمَامَ الرَّبِّ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Why have you brought up the assembly of the Lord into this wilderness, that we and our animals should die here?</td>
        <td class="arabic">لِمَاذَا أَتَيْتُمَا بِجَمَاعَةِ الرَّبِّ إِلى هَذِهِ البَرِّيَّةِ لِكَيْ نَمُوتَ فِيهَا نَحْنُ وَمَوَاشِينَا؟</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">And why have you made us come up out of Egypt, to bring us to this evil place? It is not a place of grain or figs or vines or pomegranates; nor is there any water to drink."</td>
        <td class="arabic">وَلِمَاذَا أَصْعَدْتُمَانَا مِنْ مِصْرَ لِتَأْتِيَا بِنَا إِلى هَذَا المَكَانِ الرَّدِيءِ؟ ليْسَ هُوَ مَكَانَ زَرْعٍ وَتِينٍ وَكَرْمٍ وَرُمَّانٍ وَلا فِيهِ مَاءٌ لِلشُّرْبِ».</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">So Moses and Aaron went from the presence of the assembly to the door of the tabernacle of meeting, and they fell on their faces. And the glory of the Lord appeared to them.</td>
        <td class="arabic">فَأَتَى مُوسَى وَهَارُونُ مِنْ أَمَامِ الجَمَاعَةِ إِلى بَابِ خَيْمَةِ الاِجْتِمَاعِ وَسَقَطَا عَلى وَجْهَيْهِمَا. فَتَرَاءَى لهُمَا مَجْدُ الرَّبِّ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">Then the Lord spoke to Moses, saying,</td>
        <td class="arabic">وَأَمَرَ الرَّبُّ مُوسَى:</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">"Take the rod; you and your brother Aaron gather the congregation together. Speak to the rock before their eyes, and it will yield its water; thus you shall bring water for them out of the rock, and give drink to the congregation and their animals."</td>
        <td class="arabic">«خُذِ العَصَا وَاجْمَعِ الجَمَاعَةَ أَنْتَ وَهَارُونُ أَخُوكَ وَكَلِّمَا الصَّخْرَةَ أَمَامَ أَعْيُنِهِمْ أَنْ تُعْطِيَ مَاءَهَا فَتُخْرِجُ لهُمْ مَاءً مِنَ الصَّخْرَةِ وَتَسْقِي الجَمَاعَةَ وَمَوَاشِيَهُمْ».</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">So Moses took the rod from before the Lord as He commanded him.</td>
        <td class="arabic">فَأَخَذَ مُوسَى العَصَا مِنْ أَمَامِ الرَّبِّ كَمَا أَمَرَهُ</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">And Moses and Aaron gathered the assembly together before the rock; and he said to them, "Hear now, you rebels! Must we bring water for you out of this rock?"</td>
        <td class="arabic">وَجَمَعَ مُوسَى وَهَارُونُ الجُمْهُورَ أَمَامَ الصَّخْرَةِ فَقَال لهُمُ: «اسْمَعُوا أَيُّهَا المَرَدَةُ! أَمِنْ هَذِهِ الصَّخْرَةِ نُخْرِجُ لكُمْ مَاءً؟»</td>
    </tr>
    <tr id="table_4_row_14" class="text">
        <td class="english">Then Moses lifted his hand and struck the rock twice with his rod; and water came out abundantly, and the congregation and their animals drank.</td>
        <td class="arabic">وَرَفَعَ مُوسَى يَدَهُ وَضَرَبَ الصَّخْرَةَ بِعَصَاهُ مَرَّتَيْنِ فَخَرَجَ مَاءٌ غَزِيرٌ فَشَرِبَتِ الجَمَاعَةُ وَمَوَاشِيهَا.</td>
    </tr>
    <tr id="table_4_row_15" class="text">
        <td class="english">Then the Lord spoke to Moses and Aaron, "Because you did not believe Me, to hallow Me in the eyes of the children of Israel, therefore you shall not bring this assembly into the land which I have given them."</td>
        <td class="arabic">فَقَال الرَّبُّ لِمُوسَى وَهَارُونَ: «مِنْ أَجْلِ أَنَّكُمَا لمْ تُؤْمِنَا بِي حَتَّى تُقَدِّسَانِي أَمَامَ أَعْيُنِ بَنِي إِسْرَائِيل لِذَلِكَ لا تُدْخِلانِ هَذِهِ الجَمَاعَةَ إِلى الأَرْضِ التِي أَعْطَيْتُهُمْ إِيَّاهَا».</td>
    </tr>
    <tr id="table_4_row_16" class="text">
        <td class="english">This was the water of Meribah, because the children of Israel contended with the Lord, and He was hallowed among them.</td>
        <td class="arabic">هَذَا مَاءُ مَرِيبَةَ حَيْثُ خَاصَمَ بَنُو إِسْرَائِيل الرَّبَّ فَتَقَدَّسَ فِيهِمْ.</td>
    </tr>
    <tr id="table_4_row_18" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Proverbs 1:10-33)
    <span class="arabic-caption">النبوة الثالثة<br>(أمثال سليمان 1: 10-33)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from the Proverbs of Solomon the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء امثال سليمان النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">My son, if sinners entice you, Do not consent.</td>
        <td class="arabic">يَا ابْنِي إِنْ تَمَلَّقَكَ الْخُطَاةُ فَلاَ تَرْضَ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">If they say, "Come with us, Let us lie in wait to shed blood; Let us lurk secretly for the innocent without cause;</td>
        <td class="arabic">إِنْ قَالُوا: «هَلُمَّ مَعَنَا لِنَكْمُنْ لِلدَّمِ. لِنَخْتَفِ لِلْبَرِيءِ بَاطِلاً.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">Let us swallow them alive like Sheol, And whole, like those who go down to the Pit;</td>
        <td class="arabic">لِنَبْتَلِعْهُمْ أَحْيَاءً كَالْهَاوِيَةِ وَصِحَاحاً كَالْهَابِطِينَ فِي الْجُبِّ</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">We shall find all kinds of precious possessions, We shall fill our houses with spoil;</td>
        <td class="arabic">فَنَجِدَ كُلَّ قِنْيَةٍ فَاخِرَةٍ نَمْلَأَ بُيُوتَنَا غَنِيمَةً.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">Cast in your lot among us, Let us all have one purse"--</td>
        <td class="arabic">تُلْقِي قُرْعَتَكَ وَسَطَنَا. يَكُونُ لَنَا جَمِيعاً كِيسٌ وَاحِدٌ».</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">My son, do not walk in the way with them, Keep your foot from their path;</td>
        <td class="arabic">يَا ابْنِي لاَ تَسْلُكْ فِي الطَّرِيقِ مَعَهُمْ. امْنَعْ رِجْلَكَ عَنْ مَسَالِكِهِمْ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">For their feet run to evil, And they make haste to shed blood.</td>
        <td class="arabic">لأَنَّ أَرْجُلَهُمْ تَجْرِي إِلَى الشَّرِّ وَتُسْرِعُ إِلَى سَفْكِ الدَّمِ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">Surely, in vain the net is spread In the sight of any bird;</td>
        <td class="arabic">لأَنَّهُ بَاطِلاً تُنْصَبُ الشَّبَكَةُ فِي عَيْنَيْ كُلِّ ذِي جَنَاحٍ.</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">But they lie in wait for their own blood, They lurk secretly for their own lives.</td>
        <td class="arabic">أَمَّا هُمْ فَيَكْمُنُونَ لِدَمِ أَنْفُسِهِمْ. يَخْتَفُونَ لأَنْفُسِهِمْ.</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">So are the ways of everyone who is greedy for gain; It takes away the life of its owners.</td>
        <td class="arabic">هَكَذَا طُرُقُ كُلِّ مُولَعٍ بِكَسْبٍ. يَأْخُذُ نَفْسَ مُقْتَنِيهِ!</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">Wisdom calls aloud outside; She raises her voice in the open squares.</td>
        <td class="arabic">اَلْحِكْمَةُ تُنَادِي فِي الْخَارِجِ. فِي الشَّوَارِعِ تُعْطِي صَوْتَهَا.</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">She cries out in the chief concourses, At the openings of the gates in the city She speaks her words:</td>
        <td class="arabic">تَدْعُو فِي رُؤُوسِ الأَسْوَاقِ فِي مَدَاخِلِ الأَبْوَابِ. فِي الْمَدِينَةِ تُبْدِي كَلاَمَهَا</td>
    </tr>
    <tr id="table_5_row_16" class="text">
        <td class="english">"How long, you simple ones, will you love simplicity? For scorners delight in their scorning, And fools hate knowledge.</td>
        <td class="arabic">قَائِلَةً: «إِلَى مَتَى أَيُّهَا الْجُهَّالُ تُحِبُّونَ الْجَهْلَ وَالْمُسْتَهْزِئُونَ يُسَرُّونَ بِالاِسْتِهْزَاءِ وَالْحَمْقَى يُبْغِضُونَ الْعِلْمَ؟</td>
    </tr>
    <tr id="table_5_row_17" class="text">
        <td class="english">Turn at my rebuke; Surely I will pour out my spirit on you; I will make my words known to you.</td>
        <td class="arabic">اِرْجِعُوا عِنْدَ تَوْبِيخِي. هَئَنَذَا أُفِيضُ لَكُمْ رُوحِي. أُعَلِّمُكُمْ كَلِمَاتِي.</td>
    </tr>
    <tr id="table_5_row_18" class="text">
        <td class="english">Because I have called and you refused, I have stretched out my hand and no one regarded,</td>
        <td class="arabic">«لأَنِّي دَعَوْتُ فَأَبَيْتُمْ وَمَدَدْتُ يَدِي وَلَيْسَ مَنْ يُبَالِي</td>
    </tr>
    <tr id="table_5_row_19" class="text">
        <td class="english">Because you disdained all my counsel, And would have none of my rebuke,</td>
        <td class="arabic">بَلْ رَفَضْتُمْ كُلَّ مَشُورَتِي وَلَمْ تَرْضُوا تَوْبِيخِي.</td>
    </tr>
    <tr id="table_5_row_20" class="text">
        <td class="english">I also will laugh at your calamity; I will mock when your terror comes,</td>
        <td class="arabic">فَأَنَا أَيْضاً أَضْحَكُ عِنْدَ بَلِيَّتِكُمْ. أَشْمَتُ عِنْدَ مَجِيءِ خَوْفِكُمْ.</td>
    </tr>
    <tr id="table_5_row_21" class="text">
        <td class="english">When your terror comes like a storm, And your destruction comes like a whirlwind, When distress and anguish come upon you.</td>
        <td class="arabic">إِذَا جَاءَ خَوْفُكُمْ كَعَاصِفَةٍ وَأَتَتْ بَلِيَّتُكُمْ كَالزَّوْبَعَةِ إِذَا جَاءَتْ عَلَيْكُمْ شِدَّةٌ وَضِيقٌ</td>
    </tr>
    <tr id="table_5_row_22" class="text">
        <td class="english">"Then they will call on me, but I will not answer; They will seek me diligently, but they will not find me.</td>
        <td class="arabic">حِينَئِذٍ يَدْعُونَنِي فَلاَ أَسْتَجِيبُ. يُبَكِّرُونَ إِلَيَّ فَلاَ يَجِدُونَنِي.</td>
    </tr>
    <tr id="table_5_row_23" class="text">
        <td class="english">Because they hated knowledge And did not choose the fear of the Lord,</td>
        <td class="arabic">لأَنَّهُمْ أَبْغَضُوا الْعِلْمَ وَلَمْ يَخْتَارُوا مَخَافَةَ الرَّبِّ.</td>
    </tr>
    <tr id="table_5_row_24" class="text">
        <td class="english">They would have none of my counsel And despised my every rebuke.</td>
        <td class="arabic">لَمْ يَرْضُوا مَشُورَتِي. رَذَلُوا كُلَّ تَوْبِيخِي.</td>
    </tr>
    <tr id="table_5_row_25" class="text">
        <td class="english">Therefore they shall eat the fruit of their own way, And be filled to the full with their own fancies.</td>
        <td class="arabic">فَلِذَلِكَ يَأْكُلُونَ مِنْ ثَمَرِ طَرِيقِهِمْ وَيَشْبَعُونَ مِنْ مُؤَامَرَاتِهِمْ.</td>
    </tr>
    <tr id="table_5_row_26" class="text">
        <td class="english">For the turning away of the simple will slay them, And the complacency of fools will destroy them;</td>
        <td class="arabic">لأَنَّ ارْتِدَادَ الْحَمْقَى يَقْتُلُهُمْ وَرَاحَةَ الْجُهَّالِ تُبِيدُهُمْ.</td>
    </tr>
    <tr id="table_5_row_27" class="text">
        <td class="english">But whoever listens to me will dwell safely, And will be secure, without fear of evil."</td>
        <td class="arabic">أَمَّا الْمُسْتَمِعُ لِي فَيَسْكُنُ آمِناً وَيَسْتَرِيحُ مِنْ خَوْفِ الشَّرِّ».</td>
    </tr>
    <tr id="table_5_row_29" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Isaiah 59:1-17)
    <span class="arabic-caption">النبوة الرابعة<br>(أشعياء 59 :1 ـ 17)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">Behold, the Lord's hand is not shortened, That it cannot save; Nor His ear heavy, That it cannot hear.</td>
        <td class="arabic">هَا إِنَّ يَدَ الرَّبِّ لَمْ تَقْصُرْ عَنْ أَنْ تُخَلِّصَ وَلَمْ تَثْقَلْ أُذُنُهُ عَنْ أَنْ تَسْمَعَ.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">But your iniquities have separated you from your God; And your sins have hidden His face from you, So that He will not hear.</td>
        <td class="arabic">بَلْ آثَامُكُمْ صَارَتْ فَاصِلَةً بَيْنَكُمْ وَبَيْنَ إِلَهِكُمْ وَخَطَايَاكُمْ سَتَرَتْ وَجْهَهُ عَنْكُمْ حَتَّى لاَ يَسْمَعَ.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">For your hands are defiled with blood, And your fingers with iniquity; Your lips have spoken lies, Your tongue has muttered perversity.</td>
        <td class="arabic">لأَنَّ أَيْدِيكُمْ قَدْ تَنَجَّسَتْ بِالدَّمِ وَأَصَابِعَكُمْ بِالإِثْمِ. شِفَاهُكُمْ تَكَلَّمَتْ بِالْكَذِبِ وَلِسَانُكُمْ يَلْهَجُ بِالشَّرِّ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">No one calls for justice, Nor does any plead for truth. They trust in empty words and speak lies; They conceive evil and bring forth iniquity.</td>
        <td class="arabic">لَيْسَ مَنْ يَدْعُو بِالْعَدْلِ وَلَيْسَ مَنْ يُحَاكِمُ بِالْحَقِّ. يَتَّكِلُونَ عَلَى الْبَاطِلِ وَيَتَكَلَّمُونَ بِالْكَذِبِ. قَدْ حَبِلُوا بِتَعَبٍ وَوَلَدُوا إِثْماً.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">They hatch vipers' eggs and weave the spider's web; He who eats of their eggs dies, And from that which is crushed a viper breaks out.</td>
        <td class="arabic">فَقَسُوا بَيْضَ أَفْعَى وَنَسَجُوا خُيُوطَ الْعَنْكَبُوتِ. الآكِلُ مِنْ بَيْضِهِمْ يَمُوتُ وَالَّتِي تُكْسَرُ تُخْرِجُ أَفْعَى.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">Their webs will not become garments, Nor will they cover themselves with their works; Their works are works of iniquity, And the act of violence is in their hands.</td>
        <td class="arabic">خُيُوطُهُمْ لاَ تَصِيرُ ثَوْباً وَلاَ يَكْتَسُونَ بِأَعْمَالِهِمْ. أَعْمَالُهُمْ أَعْمَالُ إِثْمٍ وَفِعْلُ الظُّلْمِ فِي أَيْدِيهِمْ.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">Their feet run to evil, And they make haste to shed innocent blood; Their thoughts are thoughts of iniquity; Wasting and destruction are in their paths.</td>
        <td class="arabic">أَرْجُلُهُمْ إِلَى الشَّرِّ تَجْرِي وَتُسْرِعُ إِلَى سَفْكِ الدَّمِ الزَّكِيِّ. أَفْكَارُهُمْ أَفْكَارُ إِثْمٍ. فِي طُرُقِهِمِ اغْتِصَابٌ وَسَحْقٌ.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">The way of peace they have not known, And there is no justice in their ways; They have made themselves crooked paths; Whoever takes that way shall not know peace.</td>
        <td class="arabic">طَرِيقُ السَّلاَمِ لَمْ يَعْرِفُوهُ وَلَيْسَ فِي مَسَالِكِهِمْ عَدْلٌ. جَعَلُوا لأَنْفُسِهِمْ سُبُلاً مُعَوَّجَةً. كُلُّ مَنْ يَسِيرُ فِيهَا لاَ يَعْرِفُ سَلاَماً.</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">Therefore justice is far from us, Nor does righteousness overtake us; We look for light, but there is darkness! For brightness, but we walk in blackness!</td>
        <td class="arabic">مِنْ أَجْلِ ذَلِكَ ابْتَعَدَ الْحَقُّ عَنَّا وَلَمْ يُدْرِكْنَا الْعَدْلُ. نَنْتَظِرُ نُوراً فَإِذَا ظَلاَمٌ. ضِيَاءً فَنَسِيرُ فِي ظَلاَمٍ دَامِسٍ.</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">We grope for the wall like the blind, And we grope as if we had no eyes; We stumble at noonday as at twilight; We are as dead men in desolate places.</td>
        <td class="arabic">نَتَلَمَّسُ الْحَائِطَ كَعُمْيٍ وَكَالَّذِي بِلاَ أَعْيُنٍ نَتَجَسَّسُ. قَدْ عَثَرْنَا فِي الظُّهْرِ كَمَا فِي الْعَتَمَةِ فِي الضَّبَابِ كَمَوْتَى.</td>
    </tr>
    <tr id="table_6_row_14" class="text">
        <td class="english">We all growl like bears, And moan sadly like doves; We look for justice, but there is none; For salvation, but it is far from us.</td>
        <td class="arabic">نَزْأَرُ كُلُّنَا كَدُبَّةٍ وَكَحَمَامٍ هَدْراً نَهْدِرُ. نَنْتَظِرُ عَدْلاً وَلَيْسَ هُوَ وَخَلاَصاً فَيَبْتَعِدُ عَنَّا.</td>
    </tr>
    <tr id="table_6_row_15" class="text">
        <td class="english">For our transgressions are multiplied before You, And our sins testify against us; For our transgressions are with us, And as for our iniquities, we know them:</td>
        <td class="arabic">لأَنَّ مَعَاصِيَنَا كَثُرَتْ أَمَامَكَ وَخَطَايَانَا تَشْهَدُ عَلَيْنَا لأَنَّ مَعَاصِيَنَا مَعَنَا وَآثَامَنَا نَعْرِفُهَا.</td>
    </tr>
    <tr id="table_6_row_16" class="text">
        <td class="english">In transgressing and lying against the Lord, And departing from our God, Speaking oppression and revolt, Conceiving and uttering from the heart words of falsehood.</td>
        <td class="arabic">تَعَدَّيْنَا وَكَذِبْنَا عَلَى الرَّبِّ وَحِدْنَا مِنْ وَرَاءِ إِلَهِنَا. تَكَلَّمْنَا بِالظُّلْمِ وَالْمَعْصِيَةِ. حَبِلْنَا وَلَهَجْنَا مِنَ الْقَلْبِ بِكَلاَمِ الْكَذِبِ.</td>
    </tr>
    <tr id="table_6_row_17" class="text">
        <td class="english">Justice is turned back, And righteousness stands afar off; For truth is fallen in the street, And equity cannot enter.</td>
        <td class="arabic">وَقَدِ ارْتَدَّ الْحَقُّ إِلَى الْوَرَاءِ وَالْعَدْلُ يَقِفُ بَعِيداً. لأَنَّ الصِّدْقَ سَقَطَ فِي الشَّارِعِ وَالاِسْتِقَامَةَ لاَ تَسْتَطِيعُ الدُّخُولَ.</td>
    </tr>
    <tr id="table_6_row_18" class="text">
        <td class="english">So truth fails, And he who departs from evil makes himself a prey. Then the Lord saw it, and it displeased Him That there was no justice.</td>
        <td class="arabic">وَصَارَ الصِّدْقُ مَعْدُوماً وَالْحَائِدُ عَنِ الشَّرِّ يُسْلَبُ. فَرَأَى الرَّبُّ وَسَاءَ فِي عَيْنَيْهِ أَنَّهُ لَيْسَ عَدْلٌ.</td>
    </tr>
    <tr id="table_6_row_19" class="text">
        <td class="english">He saw that there was no man, And wondered that there was no intercessor; Therefore His own arm brought salvation for Him; And His own righteousness, it sustained Him.</td>
        <td class="arabic">فَرَأَى أَنَّهُ لَيْسَ إِنْسَانٌ وَتَحَيَّرَ مِنْ أَنَّهُ لَيْسَ شَفِيعٌ. فَخَلَّصَتْ ذِرَاعُهُ لِنَفْسِهِ وَبِرُّهُ هُوَ عَضَدَهُ.</td>
    </tr>
    <tr id="table_6_row_20" class="text">
        <td class="english">For He put on righteousness as a breastplate, And a helmet of salvation on His head.</td>
        <td class="arabic">فَلَبِسَ الْبِرَّ كَدِرْعٍ وَخُوذَةَ الْخَلاَصِ عَلَى رَأْسِهِ.</td>
    </tr>
    <tr id="table_6_row_22" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_7" title="5th Prophecy">
    <caption id="caption_table_7" class="caption">5th Prophecy<br>(Zechariah 11:11-14)
    <span class="arabic-caption">النبوة الخامسة<br>(زكريا 11:11-14)</span></caption>
    <tr id="table_7_row_1" class="intro">
        <td class="english">A reading from Zechariah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من زكريا النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_7_row_4" class="text">
        <td class="english">So it was broken on that day. Thus the poor of the flock, who were watching me, knew that it was the word of the Lord.</td>
        <td class="arabic">فَنُقِضَ فِي ذَلِكَ الْيَوْمِ. وَهَكَذَا عَلِمَ أَذَلُّ الْغَنَمِ الْمُنْتَظِرُونَ لِي أَنَّهَا كَلِمَةُ الرَّبِّ.</td>
    </tr>
    <tr id="table_7_row_5" class="text">
        <td class="english">Then I said to them, "If it is agreeable to you, give me my wages; and if not, refrain." So they weighed out for my wages thirty pieces of silver.</td>
        <td class="arabic">فَقُلْتُ لَهُمْ: [إِنْ حَسُنَ فِي أَعْيُنِكُمْ فَأَعْطُونِي أُجْرَتِي وَإِلاَّ فَامْتَنِعُوا]. فَوَزَنُوا أُجْرَتِي ثَلاَثِينَ مِنَ الْفِضَّةِ.</td>
    </tr>
    <tr id="table_7_row_6" class="text">
        <td class="english">And the Lord said to me, "Throw it to the potter"--that princely price they set on me. So I took the thirty pieces of silver and threw them into the house of the Lord for the potter.</td>
        <td class="arabic">فَقَالَ لِي الرَّبُّ: [أَلْقِهَا إِلَى الْفَخَّارِيِّ الثَّمَنَ الْكَرِيمَ الَّذِي ثَمَّنُونِي بِهِ]. فَأَخَذْتُ الثَّلاَثِينَ مِنَ الْفِضَّةِ وَأَلْقَيْتُهَا إِلَى الْفَخَّارِيِّ فِي بَيْتِ الرَّبِّ.</td>
    </tr>
    <tr id="table_7_row_7" class="text">
        <td class="english">Then I cut in two my other staff, Bonds, that I might break the brotherhood between Judah and Israel.</td>
        <td class="arabic">ثُمَّ قَصَفْتُ عَصَايَ الأُخْرَى [حِبَالاً] لأَنْقُضَ الإِخَاءَ بَيْنَ يَهُوذَا وَإِسْرَائِيلَ.</td>
    </tr>
    <tr id="table_7_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_8" title="Homily">
    <caption id="caption_table_8" class="caption">Homily<br>(Abba Shenouda the Archimandrite)
    <span class="arabic-caption">العظة<br>(أنبا شنودة رئيس المتوحدين)</span></caption>
    <tr id="table_8_row_1" class="intro">
        <td class="english">A homily of our holy father Abba John Chrysostom. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لابينا القديس انبا يوحنا فم الذهب بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_8_row_4" class="text">
        <td class="english">I will tell you two things. Those who repented on earth and had heaven rejoice for their repentance,</td>
        <td class="arabic">أمران أقولهما لكم إن جميع الذين يفرح بهم فى السماء من أجل توبتهم</td>
    </tr>
    <tr id="table_8_row_5" class="text">
        <td class="english">will have everlasting joy in heaven. But those who did not repent on earth will neither have joy nor rest in that place.</td>
        <td class="arabic">وهم على الأرض لن يروا حزناً ولا وجعاً فى ذلك المكان وأولئك الذين لم يفرحوا بهم فى السماء لاجل عدم توبتهم وهم على الأرض لن يروا فرحاً </td>
    </tr>
    <tr id="table_8_row_6" class="text">
        <td class="english">Till when will you be lazy?</td>
        <td class="arabic">ولا راحة فى ذلك المكان فإلى متى أنت تتكاسل</td>
    </tr>
    <tr id="table_8_row_7" class="text">
        <td class="english">I implore you, have tears while you still can and especially if you have works that deserve tearing for.</td>
        <td class="arabic">أيضاً أيها الإنسان اطلب إليك ابك على نفسك ما دامت تقبل منك الدموع وبالاحرى إذا كنت قد عملت أعمالاً يحق عليها البكاء</td>
    </tr>
    <tr id="table_8_row_8" class="text">
        <td class="english">The saints are praying for you and for your salvation.</td>
        <td class="arabic">فابك على نفسك وحدك مادام جميع القديسين يبكون معك لاجل خلاص نفسك.</td>
    </tr>
    <tr id="table_8_row_9" class="text">
        <td class="english">Blessed is he who is full of tears for himself here for he will be saved from the crying and gnashing of teeth and instead will have heavenly joy.</td>
        <td class="arabic">طوبى لمن امتلأ بكاء على نفسه وحده ههنا فانه سينجو من البكاء وصرير الاسنان الدائم ويفرح فرحاً سمائياً.</td>
    </tr>
    <tr id="table_8_row_10" class="text">
        <td class="english">My brethren, let us awake before the bridegroom closes the door of repentance before us and then we shall ask and hear</td>
        <td class="arabic">فلنتيقظ يا أحبائى قبلما يقفل العريس باب التوبة ونتضرع أمام الباب فنسمع لست</td>
    </tr>
    <tr id="table_8_row_11" class="text">
        <td class="english">“I do not know you” and even worst things if we keep our sinful path.</td>
        <td class="arabic">أعرفكم كل هذه وأردأ منها نسمعها إذا تمادينا فى خطايانا.</td>
    </tr>
    <tr id="table_8_row_13" class="intro">
        <td class="english">We conclude the homily of our holy father Abba John Chrysostom, who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا يوحنا فم الذهب الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
    </tr>
</table>
</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(41:5,7,6)
        <span class="arabic-caption">المزمور قبطي<br>(41:5,7,6)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">My enemies speak evil of me.</td>
            <td class="coptic">Ⲛⲁϫⲁϫⲓ ⲁⲩϫⲱ ⲛ̀ϩⲁⲛ ⲡⲉⲧ ϩⲱⲟⲩ ⲛⲏⲓ :</td>
            <td class="arabic">أعدائي تقاولوا على شراً</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Against me they devise my hurt.</td>
            <td class="coptic">ⲁⲩⲥⲟϭⲛⲓ ϧⲁⲣⲟⲓ ⲛ̀ϩⲁⲛⲡⲉⲧϩⲱⲟⲩ.</td>
            <td class="arabic">وتشاوروا على بالسوء.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">And if he comes to see me, he speaks lies;</td>
            <td class="coptic">Ⲛⲁϥⲛⲏⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲡⲉ ⲉ̀ⲛⲁⲩ ⲛⲁϥⲥⲁϫⲓ ⲛ̀ⲟⲩⲙⲉⲧ ⲉ̀ⲫ̀ⲗⲏⲟⲩ :</td>
            <td class="arabic">كان يدخل لينظر فكان يتكلم باطلاً.</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">His heart gathers iniquity to itself.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲡⲉϥϩⲏⲧ ⲁϥⲑⲱⲟⲩϯ ⲛⲁϥ ⲛ̀ⲟⲩⲁ̀ⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">وقلبه جمع له اثماً</td>
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
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ<̀/td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲧⲟⲧⲉ ⲁⲩⲑⲱⲟⲩϯ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛⲧⲉ ⲡⲓⲗⲁⲟⲥ ⲉ̀ϧⲟⲩⲛ ⲉ̀ϯⲁⲩⲗⲏ ⲛⲧⲉ ⲡⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲫⲏⲉ̀ϣⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲕⲁⲓⲁⲫⲁ Ⲟⲩⲟϩ ⲁⲩⲉⲣⲟⲩⲥⲟϭⲛⲓ ϩⲓⲛⲁ ⲛⲥⲉⲁ̀ⲙⲟⲛⲓ ⲛ̀Ⲓ̅ⲏ̅ⲥ ϧⲉⲛ ⲟⲩⲭⲣⲟϥ ⲟⲩⲟϩ ⲛⲥⲉϧⲟⲑⲃⲉϥ : Ⲛⲁⲩϫⲱⲙ̀ⲙⲟⲥ ⲇⲉ ⲡⲉ ϫⲉ ⲙ̀ⲡⲉⲛⲑ̀ⲣⲉⲛⲁⲓⲥ ϧⲉⲛ ⲡϣⲁⲓ ϫⲉ ⲛ̀ⲛⲉ ⲟⲩϣ̀ⲑⲟⲣ ⲧⲉⲣ ϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲗⲁⲟⲥ. Ⲓ̅ⲏ̅ⲥ ⲇⲉ ⲉϥⲭⲏ ϧⲉⲛ Ⲃⲏⲑⲁ̀ⲛⲓⲁ ϧⲉⲛ ⲡ̀ⲏⲓ ⲛ̀Ⲥⲓⲙⲱⲛ<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(41:5,6)
    <span class="arabic-caption">المزمور<br>(41: 5 و6)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">My enemies speak evil of me. 

Against me they devise my hurt.</td>
        <td class="arabic">أعدائى تقاولوا على شراً.

 وتشاوروا على بالسوء.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">And if he comes to see me, he speaks lies;
 
His heart gathers iniquity to itself.</td>
        <td class="arabic">كان يدخل لينظر فكان يتكلم باطلاً.

 وقلبه جمع</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Matthew 26:3-16)
    <span class="arabic-caption">الانجيل<br>(متى 26: 3-16)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Then the chief priests, the scribes, and the elders of the people assembled at the palace of the high priest, who was called Caiaphas,</td>
        <td class="arabic">حِينَئِذٍ اجْتَمَعَ رُؤَسَاءُ الْكَهَنَةِ وَالْكَتَبَةُ وَشُيُوخُ الشَّعْبِ إِلَى دَارِ رَئِيسِ الْكَهَنَةِ الَّذِي يُدْعَى قَيَافَا</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">and plotted to take Jesus by trickery and kill Him.</td>
        <td class="arabic">وَتَشَاوَرُوا لِكَيْ يُمْسِكُوا يَسُوعَ بِمَكْرٍ وَيَقْتُلُوهُ.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">But they said, "Not during the feast, lest there be an uproar among the people."</td>
        <td class="arabic">وَلَكِنَّهُمْ قَالُوا: «لَيْسَ فِي الْعِيدِ لِئَلَّا يَكُونَ شَغَبٌ فِي الشَّعْبِ».</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">And when Jesus was in Bethany at the house of Simon the leper,</td>
        <td class="arabic">وَفِيمَا كَانَ يَسُوعُ فِي بَيْتِ عَنْيَا فِي بَيْتِ سِمْعَانَ الأَبْرَصِ</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">a woman came to Him having an alabaster flask of very costly fragrant oil, and she poured it on His head as He sat at the table.</td>
        <td class="arabic">تَقَدَّمَتْ إِلَيْهِ امْرَأَةٌ مَعَهَا قَارُورَةُ طِيبٍ كَثِيرِ الثَّمَنِ فَسَكَبَتْهُ عَلَى رَأْسِهِ وَهُوَ مُتَّكِئٌ.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">But when His disciples saw it, they were indignant, saying, "Why this waste?</td>
        <td class="arabic">فَلَمَّا رَأَى تَلاَمِيذُهُ ذَلِكَ اغْتَاظُوا قَائِلِينَ: «لِمَاذَا هَذَا الإِتْلاَفُ؟</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">For this fragrant oil might have been sold for much and given to the poor."</td>
        <td class="arabic">لأَنَّهُ كَانَ يُمْكِنُ أَنْ يُبَاعَ هَذَا الطِّيبُ بِكَثِيرٍ وَيُعْطَى لِلْفُقَرَاءِ».</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">But when Jesus was aware of it, He said to them, "Why do you trouble the woman? For she has done a good work for Me.</td>
        <td class="arabic">فَعَلِمَ يَسُوعُ وَقَالَ لَهُمْ: «لِمَاذَا تُزْعِجُونَ الْمَرْأَةَ؟ فَإِنَّهَا قَدْ عَمِلَتْ بِي عَمَلاً حَسَناً!</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">For you have the poor with you always, but Me you do not have always.</td>
        <td class="arabic">لأَنَّ الْفُقَرَاءَ مَعَكُمْ فِي كُلِّ حِينٍ وَأَمَّا أَنَا فَلَسْتُ مَعَكُمْ فِي كُلِّ حِينٍ.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">For in pouring this fragrant oil on My body, she did it for My burial.</td>
        <td class="arabic">فَإِنَّهَا إِذْ سَكَبَتْ هَذَا الطِّيبَ عَلَى جَسَدِي إِنَّمَا فَعَلَتْ ذَلِكَ لأَجْلِ تَكْفِينِي.</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">Assuredly, I say to you, wherever this gospel is preached in the whole world, what this woman has done will also be told as a memorial to her."</td>
        <td class="arabic">اَلْحَقَّ أَقُولُ لَكُمْ: حَيْثُمَا يُكْرَزْ بِهَذَا الإِنْجِيلِ فِي كُلِّ الْعَالَمِ يُخْبَرْ أَيْضاً بِمَا فَعَلَتْهُ هَذِهِ تَذْكَاراً لَهَا».</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">Then one of the twelve, called Judas Iscariot, went to the chief priests</td>
        <td class="arabic">حِينَئِذٍ ذَهَبَ وَاحِدٌ مِنَ الاِثْنَيْ عَشَرَ الَّذِي يُدْعَى يَهُوذَا الإِسْخَرْيُوطِيَّ إِلَى رُؤَسَاءِ الْكَهَنَةِ</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english">and said, "What are you willing to give me if I deliver Him to you?" And they counted out to him thirty pieces of silver.</td>
        <td class="arabic">وَقَالَ: «مَاذَا تُرِيدُونَ أَنْ تُعْطُونِي وَأَنَا أُسَلِّمُهُ إِلَيْكُمْ؟» فَجَعَلُوا لَهُ ثَلاَثِينَ مِنَ الْفِضَّةِ.</td>
    </tr>
    <tr id="table_20_row_17" class="text">
        <td class="english">So from that time he sought opportunity to betray Him.</td>
        <td class="arabic">وَمِنْ ذَلِكَ الْوَقْتِ كَانَ يَطْلُبُ فُرْصَةً لِيُسَلِّمَهُ.</td>
    </tr>
    <tr id="table_20_row_18" class="text">
        <td class="english">Bow down before the Holy Gospel.</td>
        <td class="arabic">أسجدوا للإنجيل المقدس.</td>
    </tr>
    <tr id="table_20_row_20" class="intro">
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
        <td class="english">The exposition of the NINTH Hour of the DAY of WEDNESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة التاسعة من يوم الأربعاء من البصخة المقدسة بركتها  تكون معنا أمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">O Christ our God, the mystery of your incarnation you have concealed in our flesh, O Christ our God.</td>
        <td class="arabic">سر تأنسك أخفيته مع جسدنا أيها المسيح إلهنا،</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">For Abraham the great patriarch the father of all nations fathomed in great faith that God the Word shall be incarnated from his seed.</td>
        <td class="arabic">من زرع ابراهيم الأب العظيم أب جميع الشعوب، الذى لما علم بايمان أن الاله الكلمة لابد أن يتجسد من نسله،</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">When he saw that his days on earth were decreasing and that God had blessed him,</td>
        <td class="arabic">وبالأكثر عندما رأى أيامه نقصت وأن الله بارك فى أعماله،</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">he summoned his honest and loyal head servant and said to him,</td>
        <td class="arabic">دعا عبده الكبير فى بيته، الوكيل الأمين وخاطبه قائلاً:</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">“Put your hand under my thigh because I will ask you to swear by the Lord of heavens that you will not betroth for my son Isaac a wife from this land on which I dwell.</td>
        <td class="arabic">ضع يدك تحت فخذى لأحلفك باله السماء، أنك لا تأخذ امرأة لابنى اسحق من هذه الأرض التى أنا ساكنها،</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">But go to the land of my fathers and take for him a wife from there, from my tribe and from my father’s race.</td>
        <td class="arabic">بل أمض إلى أرض آبائى، وخذ له امرأة من ذلك المكان من قبيلتى وجنس آبائى.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">Be diligent regarding this matter. “The servant asked prudently, Master what if the woman refused to come with me to this land?</td>
        <td class="arabic">خذ له العربون بغير تهاون. فأجابه العبد بعقل هكذا قائلاً: اسمع يا سيدى ان أبت المرأة أن تأتى معى إلى هذه الأرض،</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">Would you rather see me come back with your son Isaac and serve him until I can bring her back?</td>
        <td class="arabic">أفتريد أن أرد ابنك اسحق وآخذه معى إلى أن آتى به إلى هنا؟</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">Abraham said, “be careful not to do that, if she does not come with you then you are innocent.”</td>
        <td class="arabic">فقال له احذر أن ترد ابنى. فإن لم تجئ فأنت برئ.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">The servant put his hand (under his master’s thigh) and swore to him to keep his promise.</td>
        <td class="arabic">فوضع العبد يده وحلف له على ثبات هذا القول.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">At the fullness of time, God fulfilled this covenant that He pledged to our father Abraham,</td>
        <td class="arabic">وفى آخر الزمان أكمل الله هذا الوعد الذى وعد به أبانا ابراهيم.</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">through Christ by whom all nations are blessed came from his descendants.</td>
        <td class="arabic">وظهر المسيح من صلبه الذى تتبارك به سائر الأمم.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};