import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion,  cross} from "../repeatedPrayers";

export const DOW6 = () => {
    const hourIntroHtml = hourIntro("SIXTH","السادسة","DAY of WEDNESDAY","يوم الاربعاء");
    const paschalPraiseHtml = paschalPraise2("4","14","15","SIXTH","السادسة","DAY of WEDNESDAY","يوم الاربعاء");
    const copticGospelIntroHtml = copticGospelIntro("17");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("21");
    const expositionConclusionHtml = expositionConclusion("23");




return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲡⲓⲇⲟⲝⲟⲇⲟⲥ ⲛ̀ⲧⲉ Ⲙⲱ̀̀ⲩⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲡⲉϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲇⲉ ⲛⲁϩⲣⲉⲛ ⲡⲓⲗⲁⲟⲥ ϫⲉ ϫⲉⲙⲛⲟϯ : ⲉ̀ⲣⲉⲧⲉⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ⲑⲏⲛⲟⲩ ⲉ̀ⲣⲉⲧⲉⲛⲛⲁⲩ ⲉ̀ⲡⲓⲟⲩϫⲁⲓ ⲡⲓⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ Ⲡ⳪ : ⲫⲁⲓ ⲉ̀ⲧⲉϥⲛⲁⲁⲓϥ ⲛⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟⲩ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: </td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉⲛⲁⲓ ⲡ̀ⲏⲓ ⲛ̀ⲓⲁⲕⲱⲃ ⲛⲉⲛⲧⲁⲩⲑⲁϩⲙⲟⲩ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫϯ ⲙ̀ⲡ̀Ⲓⲥⲣⲁⲏⲗ ⲉ̀ⲧⲓ̀ⲣⲓ ⲙⲡⲉϥⲙⲉⲩⲓ ϧⲉⲛ ⲟⲩⲙⲉ ⲁⲛ ⲟⲩⲇⲉ ϧⲉⲛ ⲟⲩⲇⲓⲕⲉⲟⲥⲩⲛⲏ:</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲏⲥⲟⲩ ⲛ̀ⲧⲉ Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: </td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲡⲁϣⲏⲣⲓ ⲉ̀ⲟⲩ̀̀ⲥⲃⲱ ⲛⲧⲉⲣⲱⲓ : ⲟⲩⲟϩ ⲫⲏⲉⲧⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲥ ⲛ̀ⲛⲉϥⲧⲁⲕⲟ : ⲟⲩⲟϩ ⲉⲩⲉ̀ϫⲉⲙⲥ ϧⲉⲛ ⲛⲉϥⲥ̀ⲫⲟⲧⲟⲩ : ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ ⲇⲉ ⲛⲉⲙ ⲡⲓⲣⲉϥⲥⲁϩⲟⲩⲓ̀ ⲛⲉⲙ ⲡⲓϭⲁ̀ⲥⲓϩⲏⲧ ⲛⲁⲉⲣⲥ̀ⲕⲁⲛⲇⲁⲗⲓⲍⲓⲛ ⲛ̀ϧⲏⲧⲟⲩ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Exodus 14:13 - 15:1)
    <span class="arabic-caption">النبوة الأولي<br>(سفر الخروج 14: 13 الخ و 15: 1)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Exodus of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر الخروج لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">And Moses said to the people, "Do not be afraid. Stand still, and see the salvation of the Lord, which He will accomplish for you today. For the Egyptians whom you see today, you shall see again no more forever.</td>
        <td class="arabic">فَقَالَ مُوسَى لِلشَّعْبِ: «لا تَخَافُوا. قِفُوا وَانْظُرُوا خَلاصَ الرَّبِّ الَّذِي يَصْنَعُهُ لَكُمُ الْيَوْمَ. فَانَّهُ كَمَا رَايْتُمُ الْمِصْرِيِّينَ الْيَوْمَ لا تَعُودُونَ تَرُونَهُمْ ايْضا الَى الابَدِ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">The Lord will fight for you, and you shall hold your peace."</td>
        <td class="arabic">الرَّبُّ يُقَاتِلُ عَنْكُمْ وَانْتُمْ تَصْمُتُونَ».</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">And the Lord said to Moses, "Why do you cry to Me? Tell the children of Israel to go forward.</td>
        <td class="arabic">فَقَالَ الرَّبُّ لِمُوسَى: «مَا لَكَ تَصْرُخُ الَيَّ؟ قُلْ لِبَنِي اسْرَائِيلَ انْ يَرْحَلُوا.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">But lift up your rod, and stretch out your hand over the sea and divide it. And the children of Israel shall go on dry ground through the midst of the sea.</td>
        <td class="arabic">وَارْفَعْ انْتَ عَصَاكَ وَمُدَّ يَدَكَ عَلَى الْبَحْرِ وَشُقَّهُ فَيَدْخُلَ بَنُو اسْرَائِيلَ فِي وَسَطِ الْبَحْرِ عَلَى الْيَابِسَةِ.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And I indeed will harden the hearts of the Egyptians, and they shall follow them. So I will gain honor over Pharaoh and over all his army, his chariots, and his horsemen.</td>
        <td class="arabic">وَهَا انَا اشَدِّدُ قُلُوبَ الْمِصْرِيِّينَ حَتَّى يَدْخُلُوا وَرَاءَهُمْ فَاتَمَجَّدُ بِفِرْعَوْنَ وَكُلِّ جَيْشِهِ بِمَرْكَبَاتِهِ وَفُرْسَانِهِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Then the Egyptians shall know that I am the Lord, when I have gained honor for Myself over Pharaoh, his chariots, and his horsemen."</td>
        <td class="arabic">فَيَعْرِفُ الْمِصْرِيُّونَ انِّي انَا الرَّبُّ حِينَ اتَمَجَّدُ بِفِرْعَوْنَ وَمَرْكَبَاتِهِ وَفُرْسَانِهِ».</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">And the Angel of God, who went before the camp of Israel, moved and went behind them; and the pillar of cloud went from before them and stood behind them.</td>
        <td class="arabic">فَانْتَقَلَ مَلاكُ اللهِ السَّائِرُ امَامَ عَسْكَرِ اسْرَائِيلَ وَسَارَ وَرَاءَهُمْ وَانْتَقَلَ عَمُودُ السَّحَابِ مِنْ امَامِهِمْ وَوَقَفَ وَرَاءَهُمْ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">So it came between the camp of the Egyptians and the camp of Israel. Thus it was a cloud and darkness to the one, and it gave light by night to the other, so that the one did not come near the other all that night.</td>
        <td class="arabic">فَدَخَلَ بَيْنَ عَسْكَرِ الْمِصْرِيِّينَ وَعَسْكَرِ اسْرَائِيلَ وَصَارَ السَّحَابُ وَالظَّلامُ وَاضَاءَ اللَّيْلَ. فَلَمْ يَقْتَرِبْ هَذَا الَى ذَاكَ كُلَّ اللَّيْلِ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Then Moses stretched out his hand over the sea; and the Lord caused the sea to go back by a strong east wind all that night, and made the sea into dry land, and the waters were divided.</td>
        <td class="arabic">وَمَدَّ مُوسَى يَدَهُ عَلَى الْبَحْرِ فَاجْرَى الرَّبُّ الْبَحْرَ بِرِيحٍ شَرْقِيَّةٍ شَدِيدَةٍ كُلَّ اللَّيْلِ وَجَعَلَ الْبَحْرَ يَابِسَةً وَانْشَقَّ الْمَاءُ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">So the children of Israel went into the midst of the sea on the dry ground, and the waters were a wall to them on their right hand and on their left.</td>
        <td class="arabic">فَدَخَلَ بَنُو اسْرَائِيلَ فِي وَسَطِ الْبَحْرِ عَلَى الْيَابِسَةِ وَالْمَاءُ سُورٌ لَهُمْ عَنْ يَمِينِهِمْ وَعَنْ يَسَارِهِمْ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">And the Egyptians pursued and went after them into the midst of the sea, all Pharaoh's horses, his chariots, and his horsemen.</td>
        <td class="arabic">وَتَبِعَهُمُ الْمِصْرِيُّونَ وَدَخَلُوا وَرَاءَهُمْ جَمِيعُ خَيْلِ فِرْعَوْنَ وَمَرْكَبَاتِهِ وَفُرْسَانِهِ الَى وَسَطِ الْبَحْرِ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">Now it came to pass, in the morning watch, that the Lord looked down upon the army of the Egyptians through the pillar of fire and cloud, and He troubled the army of the Egyptians.</td>
        <td class="arabic">وَكَانَ فِي هَزِيعِ الصُّبْحِ انَّ الرَّبَّ اشْرَفَ عَلَى عَسْكَرِ الْمِصْرِيِّينَ فِي عَمُودِ النَّارِ وَالسَّحَابِ وَازْعَجَ عَسْكَرَ الْمِصْرِيِّينَ</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">And He took off their chariot wheels, so that they drove them with difficulty; and the Egyptians said, "Let us flee from the face of Israel, for the Lord fights for them against the Egyptians."</td>
        <td class="arabic">وَخَلَعَ بَكَرَ مَرْكَبَاتِهِمْ حَتَّى سَاقُوهَا بِثَقْلَةٍ. فَقَالَ الْمِصْرِيُّونَ: «نَهْرُبُ مِنْ اسْرَائِيلَ لانَّ الرَّبَّ يُقَاتِلُ الْمِصْرِيِّينَ عَنْهُمْ».</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">Then the Lord said to Moses, "Stretch out your hand over the sea, that the waters may come back upon the Egyptians, on their chariots, and on their horsemen."</td>
        <td class="arabic">فَقَالَ الرَّبُّ لِمُوسَى: «مُدَّ يَدَكَ عَلَى الْبَحْرِ لِيَرْجِعَ الْمَاءُ عَلَى الْمِصْرِيِّينَ عَلَى مَرْكَبَاتِهِمْ وَفُرْسَانِهِمْ».</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">And Moses stretched out his hand over the sea; and when the morning appeared, the sea returned to its full depth, while the Egyptians were fleeing into it. So the Lord overthrew the Egyptians in the midst of the sea.</td>
        <td class="arabic">فَمَدَّ مُوسَى يَدَهُ عَلَى الْبَحْرِ فَرَجَعَ الْبَحْرُ عِنْدَ اقْبَالِ الصُّبْحِ الَى حَالِهِ الدَّائِمَةِ وَالْمِصْرِيُّونَ هَارِبُونَ الَى لِقَائِهِ. فَدَفَعَ الرَّبُّ الْمِصْرِيِّينَ فِي وَسَطِ الْبَحْرِ.</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">Then the waters returned and covered the chariots, the horsemen, and all the army of Pharaoh that came into the sea after them. Not so much as one of them remained.</td>
        <td class="arabic">فَرَجَعَ الْمَاءُ وَغَطَّى مَرْكَبَاتِ وَفُرْسَانَ جَمِيعِ جَيْشِ فِرْعَوْنَ الَّذِي دَخَلَ وَرَاءَهُمْ فِي الْبَحْرِ. لَمْ يَبْقَ مِنْهُمْ وَلا وَاحِدٌ.</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">But the children of Israel had walked on dry land in the midst of the sea, and the waters were a wall to them on their right hand and on their left.</td>
        <td class="arabic">وَامَّا بَنُو اسْرَائِيلَ فَمَشُوا عَلَى الْيَابِسَةِ فِي وَسَطِ الْبَحْرِ وَالْمَاءُ سُورٌ لَهُمْ عَنْ يَمِينِهِمْ وَعَنْ يَسَارِهِمْ.</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">So the Lord saved Israel that day out of the hand of the Egyptians, and Israel saw the Egyptians dead on the seashore.</td>
        <td class="arabic">فَخَلَّصَ الرَّبُّ فِي ذَلِكَ الْيَوْمِ اسْرَائِيلَ مِنْ يَدِ الْمِصْرِيِّينَ. وَنَظَرَ اسْرَائِيلُ الْمِصْرِيِّينَ امْوَاتا عَلَى شَاطِئِ الْبَحْرِ.</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">Thus Israel saw the great work which the Lord had done in Egypt; so the people feared the Lord, and believed the Lord and His servant Moses.</td>
        <td class="arabic">وَرَاى اسْرَائِيلُ الْفَِعْلَ الْعَظِيمَ الَّذِي صَنَعَهُ الرَّبُّ بِالْمِصْرِيِّينَ. فَخَافَ الشَّعْبُ الرَّبَّ وَامَنُوا بِالرَّبِّ وَبِعَبْدِهِ مُوسَى.</td>
    </tr>
    <tr id="table_3_row_23" class="text">
        <td class="english">Then Moses and the children of Israel sang this song to the Lord, and spoke, saying: "I will sing to the Lord, For He has triumphed gloriously!</td>
        <td class="arabic">حِينَئِذٍ رَنَّمَ مُوسَى وَبَنُو اسْرَائِيلَ هَذِهِ التَّسْبِيحَةَ لِلرَّبِّ: «ارَنِّمُ لِلرَّبِّ فَانَّهُ قَدْ تَعَظَّمَ.</td>
    </tr>
    <tr id="table_3_row_25" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 48:1-6)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 48: 1 - 6)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">"Hear this, O house of Jacob, Who are called by the name of Israel, And have come forth from the wellsprings of Judah; Who swear by the name of the Lord, And make mention of the God of Israel, But not in truth or in righteousness;</td>
        <td class="arabic">«اِسْمَعُوا هَذَا يَا بَيْتَ يَعْقُوبَ الْمَدْعُوِّينَ بِاسْمِ إِسْرَائِيلَ الَّذِينَ خَرَجُوا مِنْ مِيَاهِ يَهُوذَا الْحَالِفِينَ بِاسْمِ الرَّبِّ وَالَّذِينَ يَذْكُرُونَ إِلَهَ إِسْرَائِيلَ لَيْسَ بِالصِّدْقِ وَلاَ بِالْحَقِّ!</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">For they call themselves after the holy city, And lean on the God of Israel; The Lord of hosts is His name:</td>
        <td class="arabic">فَإِنَّهُمْ يُسَمَّوْنَ مِنْ مَدِينَةِ الْقُدْسِ وَيُسْنَدُونَ إِلَى إِلَهِ إِسْرَائِيلَ. رَبُّ الْجُنُودِ اسْمُهُ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">"I have declared the former things from the beginning; They went forth from My mouth, and I caused them to hear it. Suddenly I did them, and they came to pass.</td>
        <td class="arabic">بِالأَوَّلِيَّاتِ مُنْذُ زَمَانٍ أَخْبَرْتُ وَمِنْ فَمِي خَرَجَتْ وَأَنْبَأْتُ بِهَا. بَغْتَةً صَنَعْتُهَا فَأَتَتْ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Because I knew that you were obstinate, And your neck was an iron sinew, And your brow bronze,</td>
        <td class="arabic">لِمَعْرِفَتِي أَنَّكَ قَاسٍ وَعَضَلٌ مِنْ حَدِيدٍ عُنُقُكَ وَجِبْهَتُكَ نُحَاسٌ</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">Even from the beginning I have declared it to you; Before it came to pass I proclaimed it to you, Lest you should say, 'My idol has done them, And my carved image and my molded image Have commanded them.'</td>
        <td class="arabic">أَخْبَرْتُكَ مُنْذُ زَمَانٍ. قَبْلَمَا أَتَتْ أَنْبَأْتُكَ لِئَلاَّ تَقُولَ: صَنَمِي قَدْ صَنَعَهَا وَمَنْحُوتِي وَمَسْبُوكِي أَمَرَ بِهَا.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">"You have heard; See all this. And will you not declare it? I have made you hear new things from this time, Even hidden things, and you did not know them.</td>
        <td class="arabic">قَدْ سَمِعْتَ فَانْظُرْ كُلَّهَا. وَأَنْتُمْ أَلاَ تُخْبِرُونَ؟ قَدْ أَنْبَأْتُكَ بِحَدِيثَاتٍ مُنْذُ الآنَ وَبِمَخْفِيَّاتٍ لَمْ تَعْرِفْهَا.</td>
    </tr>
    <tr id="table_4_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Sirach 23:7-14)
    <span class="arabic-caption">النبوة الثالثة<br>(يشوع بن سيراخ 23: 7 - 14)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Joshua, the son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يشوع بن سيراخ النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Listen, my children, to instruction concerning speech; the one who observes it will never be caught.</td>
        <td class="arabic">تَعَلَّموا أيُّها البَنونَ أدَبَ الكَلامِ، فَمَنْ يَعمَلْ بِه لا يَتَعَثَّرْ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">The sinner is overtaken through his lips, the reviler and the arrogant are tripped by them.</td>
        <td class="arabic">فالخاطِـئْ يَصطادُهُ كَلامُهُ، وبِه يَسقُطُ البَذيءُ والمُتكَبِّرُ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">Do not accustom your mouth to oaths, and do not habitually utter the name of the Holy One;</td>
        <td class="arabic">لا تُعَوِّدْ فَمَكَ على حِلْفِ اليَمينِ، ولا على القَسَمِ بِاَسْمِ الواحِدِ القُدُّوسِ،</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">for as a servant who is continually examined under torture will not lack bruises, so also the man who always swears and utters the Name will not be cleansed from sin.</td>
        <td class="arabic">فالعبدُ الـذي يُضرَبُ بِاَستِمْرارٍ، تَظهَرُ علَيهِ آثارُ الضَّرْبِ،</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">A man who swears many oaths will be filled with iniquity, and the scourge will not leave his house; if he offends, his sin remains on him, and if he disregards it, he sins doubly; if he has sworn needlessly, he will not be justified, for his house will be filled with calamities.</td>
        <td class="arabic">مَنْ يَحلِفْ بِه كثيرًا يَمتَلئْ شَرُا، ولا يُفارِقُ العِقابُ أهلَ بَيتِهِ. إنْ لم يَبُرَ بِقَسَمِهِ يَخطَأُ، وإنْ تَجاهَلَهُ يُضاعِفْ خطيئَتَهُ. إنْ حَلَفَ باطلا لا بَراءَةَ لَه، وبَيتُهُ يَمتَلِـئْ بِالمَصائِبِ.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">There is an utterance which is comparable to death; may it never be found in the inheritance of Jacob! For all these errors will be far from the godly, and they will not wallow in sins.</td>
        <td class="arabic">مِنَ الكَلامِ ما هوَ سَيِّـئٌ كالموتِ، لا كانَ يا ربُّ في بَني يَعقوبَ! الأتقياءُ يَبتعِدونَ عَنْ هذا كُلِّهِ فلا يَنغمِسونَ في البشاعاتِ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">Do not accustom your mouth to lewd vulgarity, for it involves sinful speech.</td>
        <td class="arabic">لا تعوِّدْ فَمَكَ على الكَلامِ البَذيءِ، ففيهِ خَطَرُ الوقوعِ في الخطيئةِ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">Remember your father and mother
when you sit among great men;
lest you be forgetful in their presence,
and be deemed a fool on account of your habits; then you will wish that you had never been born, and you will curse the day of your birth.</td>
        <td class="arabic">تَذكَّرْ أباكَ وأمكَ حتـى تكونَ معَ أصحابِ الشَّأنِ. ولا تَنسَ أمامَهُم مَنْ أنتَ ولا تَتَصَرَّفْ كأحمَقَ، فتَتَمَنَّى لو كُنتَ لم تُولَدْ وتَلعَنَ يومَ وِلادَتِكَ.</td>
    </tr>
    <tr id="table_5_row_13" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(83:2,5)
        <span class="arabic-caption">المزمور قبطياً<br>(82: 2 ، 4)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Your enemies make a tumult;</td>
            <td class="coptic">Ϩⲏⲡⲡⲉ ⲓⲥ ⲛⲉⲕϫⲁϫⲓ ⲁⲩⲱϣ ⲉ̀ⲃⲟⲗ :</td>
            <td class="arabic">هوذا أعداؤك قد صرخوا.</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">And those who hate You have lifted up their head.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲛⲏⲉⲑⲙⲟⲥϯ ⲙ̀ⲙⲟⲕ ⲁⲩϭⲓⲥⲓ ⲛ̀ⲧⲟⲩⲁ̀ⲫⲉ :</td>
            <td class="arabic">وقد رفع مبغضوك رؤوسهم.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">For they have consulted together with one consent;</td>
            <td class="coptic">Ⲁⲩⲥⲟϭⲛⲓ ⲉⲩⲥⲟⲡ ϧⲉⲛ ⲟⲩϩⲏⲧ ⲛ̀ⲟⲩⲱⲧ :</td>
            <td class="arabic">تآمروا جميعاً بقلب واحد</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">They form a confederacy against You.</td>
            <td class="coptic">ⲁⲩⲥⲉⲙⲛⲓ ⲛ̀ⲟⲩⲇⲓⲁ̀ⲑⲏⲕⲏ ϧⲁⲣⲟⲕ :</td>
            <td class="arabic">وتعاهدوا عليك عهداً:</td>
        </tr>
        <tr id="table_16_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_18" title="Coptic Gospel">
        <caption class="caption" id="caption_table_18">Coptic Gospel
        <span class="arabic-caption">الإنجيل قبطياً</span></caption>
        <tr id="table_18_row_0" class="priest">
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ ⲟⲩⲛ : ⲁϫⲉⲛ ⲥⲟⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲡⲁⲥⲭⲁ ⲁϥⲓ̀ ⲉ̀Ⲃⲏⲑⲁⲛⲓⲁ ⲡⲓⲙⲁ ⲉ̀ⲛⲁⲣⲉ Ⲗⲁⲍⲁⲣⲟⲥ ⲙⲙⲟϥ ⲫⲏⲉ̀ⲧⲁϥⲙⲟⲩ ⲫⲏⲉⲧⲁ Ⲓⲏⲥⲟⲩⲥ ⲧⲟⲩⲛⲟⲥϥ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲏⲑ̀ⲙⲱⲟⲩⲧ : Ⲁⲩⲉⲣ ⲟⲩⲇⲓⲡⲛⲟⲛ ⲟⲩⲛ ⲉ̀ⲣⲟϥ ⲙⲡⲓⲙⲁ ⲉ̀ⲧⲉ ⲙⲙⲁⲩ ⲟⲩⲟϩ Ⲙⲁⲣⲑⲁ ⲛⲁⲥϣⲉⲙϣⲓ ⲡⲉ : ⲟⲩⲟϩ Ⲗⲁⲍⲁⲣⲟⲥ ⲛⲉ ⲟⲩⲁⲓ ⲡⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲣⲱⲧⲉⲃ ⲛⲉⲙⲁϥ : Ⲙⲁⲣⲓⲁ̀ ⲟⲩⲛ ⲁⲥϭⲓ ⲛ̀ⲟⲩⲗⲓⲧⲣⲁ ⲛ̀ⲥⲟϫⲉⲛ ⲛ̀ⲧⲉ ⲟⲩⲛⲁⲣⲇⲟⲥ ⲙ̀ⲡⲓⲥⲧⲓⲕⲏ ⲉ̀ⲛⲁϣⲉⲛ̀ⲥⲟⲩⲉⲛϥ : ⲟⲩⲟϩ ⲁⲥⲑⲱϩⲥ ⲛ̀ⲛⲉⲛϭⲁⲗⲁⲩϫ ⲛ̀Ⲓⲏⲥⲟⲩⲥ ⲙ̀ⲙⲟϥ .<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_18_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_19" title="Psalm">
    <caption id="caption_table_19" class="caption">Psalm<br>(83:2,5)
    <span class="arabic-caption">المزمور<br>(82: 2 ، 4)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of David the Prophet, may his blessing be with us, Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Your enemies make a tumult; and those who hate You have lifted up their head.</td>
        <td class="arabic">هوذا أعداؤك قد صرخوا. وقد رفع مبغضوك رؤوسهم.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">For they have consulted together with one consent; They form a confederacy against You.</td>
        <td class="arabic">تآمروا جميعاً بقلب واحد وتعاهدوا عليك عهداً.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(John 12:1-8)
    <span class="arabic-caption">الانجيل<br>(يوحنا 12: 1 – 8)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Then, six days before the Passover, Jesus came to Bethany, where Lazarus was who had been dead, whom He had raised from the dead.</td>
        <td class="arabic">ثُمَّ قَبْلَ الْفِصْحِ بِسِتَّةِ أَيَّامٍ أَتَى يَسُوعُ إِلَى بَيْتِ عَنْيَا حَيْثُ كَانَ لِعَازَرُ الْمَيْتُ الَّذِي أَقَامَهُ مِنَ الأَمْوَاتِ.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">There they made Him a supper; and Martha served, but Lazarus was one of those who sat at the table with Him.</td>
        <td class="arabic">فَصَنَعُوا لَهُ هُنَاكَ عَشَاءً. وَكَانَتْ مَرْثَا تَخْدِمُ وَأَمَّا لِعَازَرُ فَكَانَ أَحَدَ الْمُتَّكِئِينَ مَعَهُ.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Then Mary took a pound of very costly oil of spikenard, anointed the feet of Jesus, and wiped His feet with her hair. And the house was filled with the fragrance of the oil.</td>
        <td class="arabic">فَأَخَذَتْ مَرْيَمُ مَناً مِنْ طِيبِ نَارِدِينٍ خَالِصٍ كَثِيرِ الثَّمَنِ وَدَهَنَتْ قَدَمَيْ يَسُوعَ وَمَسَحَتْ قَدَمَيْهِ بِشَعْرِهَا فَامْتَلَأَ الْبَيْتُ مِنْ رَائِحَةِ الطِّيبِ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">Then one of His disciples, Judas Iscariot, Simon's son, who would betray Him, said,</td>
        <td class="arabic">فَقَالَ وَاحِدٌ مِنْ تلاَمِيذِهِ وَهُوَ يَهُوذَا سِمْعَانُ الإِسْخَرْيُوطِيُّ الْمُزْمِعُ أَنْ يُسَلِّمَهُ:</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">"Why was this fragrant oil not sold for three hundred denarii and given to the poor?"</td>
        <td class="arabic">«لِمَاذَا لَمْ يُبَعْ هَذَا الطِّيبُ بِثلاَثَمِئَةِ دِينَارٍ وَيُعْطَ لِلْفُقَرَاءِ؟»</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">This he said, not that he cared for the poor, but because he was a thief, and had the money box; and he used to take what was put in it.</td>
        <td class="arabic">قَالَ هَذَا لَيْسَ لأَنَّهُ كَانَ يُبَالِي بِالْفُقَرَاءِ بَلْ لأَنَّهُ كَانَ سَارِقاً وَكَانَ الصُّنْدُوقُ عِنْدَهُ وَكَانَ يَحْمِلُ مَا يُلْقَى فِيهِ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">But Jesus said, "Let her alone; she has kept this for the day of My burial.</td>
        <td class="arabic">فَقَالَ يَسُوعُ: «اتْرُكُوهَا. إِنَّهَا لِيَوْمِ تَكْفِينِي قَدْ حَفِظَتْهُ</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">For the poor you have with you always, but Me you do not have always."</td>
        <td class="arabic">لأَنَّ الْفُقَرَاءَ مَعَكُمْ فِي كُلِّ حِينٍ وَأَمَّا أَنَا فَلَسْتُ مَعَكُمْ فِي كُلِّ حِينٍ».</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_14" class="intro">
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
        <td class="english">The exposition of The SIXTH Hour of the DAY of WEDNESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة السادسة من يوم الأربعاء من البصخة المقدسة بركتها  تكون معنا أمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">Christ our Lord came to Bethany six days before Passover.</td>
        <td class="arabic">جاء المسيح الهنا إلى بيت عنيا قبل الفصح بستة أيام،</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">They made a feast for him at the residence of Mary and Martha her sister.</td>
        <td class="arabic">فصنعوا له وليمة فى بيت مريم ومرثا أختها.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">Among those present was Lazarus, their brother, whom He resurrected from the dead.</td>
        <td class="arabic">وكان هناك لعازر الذى أقامه من الأموات،</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">Martha was serving them and Lazarus was sitting with him.</td>
        <td class="arabic">وكانت مرثا أخت الميت واقفة تخدمه،  وكان لعازر أخوهما أحد المتكئين مع ربنا يسوع.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">Mary then brought forth a pound of expensive fragrant oil and she anointed his feet and wiped them with her hair.</td>
        <td class="arabic">فأخذت مريم رطل طيب ناردين كثير الثمن، ودهنت به رجلى يسوع، ومسحتهما بشعر رأسها.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">Judas Iscariot was filled with evil envy.</td>
        <td class="arabic">فامتلأ يهوذا الاسخريوطى المخالف من الحسد الشيطانى.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">He asked cunningly while his heart full of bitterness, deceit and hypocrisy,</td>
        <td class="arabic">ونطق بمكر وقلب مملوء من كل مرارة وخبث ورياء وقال:</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">“Would it not have been better if this oil would have been sold for three hundred Denarii and given to the poor?</td>
        <td class="arabic">لماذا لم يبع هذا الطيب بثلاثمائة دينار ويعطى للمساكين؟</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">This he said, not that he cared for the poor,</td>
        <td class="arabic">ولم يقل هذا بفكر صالح ومحبة فى المساكين،</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">but because he was a thief, and had the moneybox; and he used to take what was put in it. The Savior responded saying,</td>
        <td class="arabic">ولكنه كان سارقاً وكان يسرق ما يلقى فى الصندوق. فقال المخلص:</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">“Let her alone; she has kept this for the day of My burial.</td>
        <td class="arabic">لا تتعبوها لأنها قد حفظته ليوم دفنى.</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">For the poor you have with you always, but Me you do not have always.”</td>
        <td class="arabic">المساكين معكم فى كل حين، وأما أنا فلست معكم فى كل حين.</td>
    </tr>
    <tr id="table_22_row_16" class="text">
        <td class="english">Let us come close to the Lord, run our tears down his feet and ask him for his forgiveness according to his abundant mercy.</td>
        <td class="arabic">فلنقترب من الرب، ولنبك أمامه، ونبل قدميه بدموعنا، ونسأله أن ينعم علينا بالغفران كعظيم رحمته.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="DOW9sc" class="navigationButton">
        <td class="englishButton">The NINTH Hour of the DAY of WEDNESDAY</td>
        <td class="arabicButton">الساعة التاسعة من يوم الأربعاء</td>
    </tr>
    <tr id="table_50_row_1" data-navigation="DaytimeLitaniessc" class="navigationButton">
    <td class="englishButton">Daytime Litanies</td>
    <td class="arabicButton">طلبات النهار</td>
</tr>
</table>
</div>

`;

};