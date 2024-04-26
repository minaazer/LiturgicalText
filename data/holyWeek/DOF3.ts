import { hourIntro, paschalPraise3 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , tenouosht , cross} from "../repeatedPrayers";

export const DOF3 = () => {
    const hourIntroHtml = hourIntro("THIRD","الثالثة","DAY of GREAT FRIDAY","يوم الجمعة العظيمة");
    const paschalPraiseHtml = paschalPraise3("4","12","13","THIRD","الثالثة","DAY of GREAT FRIDAY","يوم الجمعة العظيمة");
    const tenouoshtHtml = tenouosht("10");
    const copticGospelIntroHtml = copticGospelIntro("15");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("23");
    const expositionConclusionHtml = expositionConclusion("25");
    const daytimeLitaniesHtml = daytimeLitanies("26",true);
    const evnotiNaiNanHtml = evnotiNaiNan("27");
    const endOfServiceHymnHtml = endOfServiceHymn("28");



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡ̀ϫⲱⲙ ⲛ̀ϯⲅⲉⲛⲉⲥⲓⲥ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁⲥϣⲱⲡⲓ ⲇⲉ ⲙⲉⲛⲉⲥⲁ ⲛⲁⲓ ⲥⲁϫⲓ ⲁⲩⲧⲁⲙⲉ Ⲓⲱⲥⲏⲫ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ ⲡⲉⲕⲓⲱⲧ ϣ̀ⲑⲟⲣⲧⲉⲣ : ⲟⲩⲟϩ ⲁϥϭⲓ ⲙ̀ⲡⲉϥϣⲏⲣⲓ ⲥ̀ⲛⲁⲩ Ⲙⲁⲛⲁⲥⲥⲏ ⲛⲉⲙ Ⲉⲫⲣⲉⲙ ⲁϥⲓ̀ ϩⲁ Ⲓⲁⲕⲱⲃ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲡ⳪ ⲡⲉⲧϯⲛⲏⲓ ⲛ̀ⲟⲩⲗⲁⲥ ⲛ̀ⲥ̀ⲃⲱ : ⲉⲑⲣⲓⲉ̀ⲙⲓ ⲁ̀ⲣⲉⲱⲁⲛ ⲧ̀ϩⲟϯ ⲛ̀ⲟⲩⲥⲁϫⲓ ϣⲱⲡⲓ </td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ⲟⲩⲟⲓ ⲛ̀ⲧⲟⲩⲯⲩⲭⲏ ϫⲉ ⲁⲩⲥⲟϭⲛⲓ ⲛ̀ⲟⲩⲥⲟϭⲛⲓ ϧⲁⲣⲱⲟⲩ ⲙ̀ⲙⲓⲛ ̀̀ⲙⲙⲱⲟⲩ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ. Ϫⲉ ⲙⲁⲣⲉⲛⲥⲱⲛϩ ⲙ̀ⲡⲓⲑ̀ⲙⲏⲓ ϫⲉ ϥ̀ⲟⲓ ⲛ̀ⲁⲧϣⲁⲩ ⲛⲁⲛ</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲡⲁⲗⲓⲛ Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic">Ⲛⲓⲙ ⲡⲉ ⲫⲏⲉⲟⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲉ̀ⲇⲱⲙ ⲡ̀ⲑ̀ⲣⲟϣⲣⲉϣ ⲛ̀ⲛⲉϥϩ̀ⲃⲱⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲃⲱⲥⲟⲣ</td>
        </tr>
        <tr id="table_2_row_14" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_15" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲁⲙⲟⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_16" class="text">
            <td class="coptic">Ⲟⲩⲟϩ Ⲡ⳪ Ⲫϯ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲫⲏⲉⲧϭⲓⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲟⲩⲟϩ ⲁϥⲑ̀ⲣⲟ ⲙ̀ⲙⲟϥ ⲉ̀ⲕⲓⲙ ⲟⲩⲟϩ ⲉⲩⲉ̀ⲉⲣϩⲏⲃⲓ ⲛ̀ϫⲉ ⲛⲏⲧⲏⲣⲟⲩ ⲉⲧϣⲟⲡ</td>
        </tr>
        <tr id="table_2_row_17" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_18" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲃ ⲡⲓⲑⲙⲏⲓ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_19" class="text">
            <td class="coptic">Ⲉⲧⲁⲩⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ ⲁⲩϯϩ̀ⲑⲏⲟⲩ : ⲁⲩⲭⲁⲣⲱⲟⲩ ⲇⲉ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲁⲥⲟϭⲛⲓ : ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲧⲟⲩϩⲟ ⲉ̀ϫⲉⲛ ⲛⲁⲥⲁϫⲓ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    
    
    <table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Genesis 48: 1-19)
    <span class="arabic-caption">النبوة الأولي<br>(سفر التكوين 48: 1 - 19)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Genesis of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء سفر التكوين لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Now it came to pass after these things that Joseph was told, "Indeed your father is sick"; and he took with him his two sons, Manasseh and Ephraim.</td>
        <td class="arabic">وَحَدَثَ بَعْدَ هَذِهِ الامُورِ انَّهُ قِيلَ لِيُوسُفَ: «هُوَذَا ابُوكَ مَرِيضٌ». فَاخَذَ مَعَهُ ابْنَيْهِ مَنَسَّى وَافْرَايِمَ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">And Jacob was told, "Look, your son Joseph is coming to you"; and Israel strengthened himself and sat up on the bed.</td>
        <td class="arabic">فَاخْبِرَ يَعْقُوبُ وَقِيلَ لَهُ: «هُوَذَا ابْنُكَ يُوسُفُ قَادِمٌ الَيْكَ». فَتَشَدَّدَ اسْرَائِيلُ وَجَلَسَ عَلَى السَّرِيرِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Then Jacob said to Joseph: "God Almighty appeared to me at Luz in the land of Canaan and blessed me,</td>
        <td class="arabic">وَقَالَ يَعْقُوبُ لِيُوسُفَ: «اللهُ الْقَادِرُ عَلَى كُلِّ شَيْءٍ ظَهَرَ لِي فِي لُوزَ فِي ارْضِ كَنْعَانَ وَبَارَكَنِي.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">and said to me, 'Behold, I will make you fruitful and multiply you, and I will make of you a multitude of people, and give this land to your descendants after you as an everlasting possession.'</td>
        <td class="arabic">وَقَالَ لِي: هَا انَا اجْعَلُكَ مُثْمِرا وَاكَثِّرُكَ وَاجْعَلُكَ جُمْهُورا مِنَ الامَمِ وَاعْطِي نَسْلَكَ هَذِهِ الارْضَ مِنْ بَعْدِكَ مُلْكا ابَدِيّا.</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">And now your two sons, Ephraim and Manasseh, who were born to you in the land of Egypt before I came to you in Egypt, are mine; as Reuben and Simeon, they shall be mine.</td>
        <td class="arabic">وَالْانَ ابْنَاكَ الْمَوْلُودَانِ لَكَ فِي ارْضِ مِصْرَ قَبْلَمَا اتَيْتُ الَيْكَ الَى مِصْرَ هُمَا لِي. افْرَايِمُ وَمَنَسَّى كَرَاوبَيْنَ وَشَمْعُونَ يَكُونَانِ لِي.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">Your offspring whom you beget after them shall be yours; they will be called by the name of their brothers in their inheritance.</td>
        <td class="arabic">وَامَّا اوْلادُكَ الَّذِينَ تَلِدُ بَعْدَهُمَا فَيَكُونُونَ لَكَ. عَلَى اسْمِ اخَوَيْهِمْ يُسَمُّونَ فِي نَصِيبِهِمْ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">But as for me, when I came from Padan, Rachel died beside me in the land of Canaan on the way, when there was but a little distance to go to Ephrath; and I buried her there on the way to Ephrath (that is, Bethlehem)."</td>
        <td class="arabic">وَانَا حِينَ جِئْتُ مِنْ فَدَّانَ مَاتَتْ عِنْدِي رَاحِيلُ فِي ارْضِ كَنْعَانَ فِي الطَّرِيقِ اذْ بَقِيَتْ مَسَافَةٌ مِنَ الارْضِ حَتَّى اتِيَ الَى افْرَاتَةَ. فَدَفَنْتُهَا هُنَاكَ فِي طَرِيقِ افْرَاتَةَ (الَّتِي هِيَ بَيْتُ لَحْمٍ)».</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Then Israel saw Joseph's sons, and said, "Who are these?"</td>
        <td class="arabic">وَرَاى اسْرَائِيلُ ابْنَيْ يُوسُفَ فَقَالَ: «مَنْ هَذَانِ؟».</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">And Joseph said to his father, "They are my sons, whom God has given me in this place." And he said, "Please bring them to me, and I will bless them."</td>
        <td class="arabic">فَقَالَ يُوسُفُ لابِيهِ: «هُمَا ابْنَايَ اللَّذَانِ اعْطَانِيَ اللهُ هَهُنَا». فَقَالَ: «قَدِّمْهُمَا الَيَّ لِابَارِكَهُمَا».</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">Now the eyes of Israel were dim with age, so that he could not see. Then Joseph brought them near him, and he kissed them and embraced them.</td>
        <td class="arabic">وَامَّا عَيْنَا اسْرَائِيلَ فَكَانَتَا قَدْ ثَقُلَتَا مِنَ الشَّيْخُوخَةِ لا يَقْدُِرُ انْ يُبْصِرَ فَقَرَّبَهُمَا الَيْهِ فَقَبَّلَهُمَا وَاحْتَضَنَهُمَا.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">And Israel said to Joseph, "I had not thought to see your face; but in fact, God has also shown me your offspring!"</td>
        <td class="arabic">وَقَالَ اسْرَائِيلُ لِيُوسُفَ: «لَمْ اكُنْ اظُنُّ انِّي ارَى وَجْهَكَ وَهُوَذَا اللهُ قَدْ ارَانِي نَسْلَكَ ايْضا».</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">So Joseph brought them from beside his knees, and he bowed down with his face to the earth.</td>
        <td class="arabic">ثُمَّ اخْرَجَهُمَا يُوسُفُ مِنْ بَيْنَ رُكْبَتَيْهِ وَسَجَدَ امَامَ وَجْهِهِ الَى الارْضِ.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">And Joseph took them both, Ephraim with his right hand toward Israel's left hand, and Manasseh with his left hand toward Israel's right hand, and brought them near him.</td>
        <td class="arabic">وَاخَذَ يُوسُفُ الِاثْنَيْنِ افْرَايِمَ بِيَمِينِهِ عَنْ يَسَارِ اسْرَائِيلَ وَمَنَسَّى بِيَسَارِهِ عَنْ يَمِينِ اسْرَائِيلَ وَقَرَّبَهُمَا الَيْهِ.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">Then Israel stretched out his right hand and laid it on Ephraim's head, who was the younger, and his left hand on Manasseh's head, guiding his hands knowingly, for Manasseh was the firstborn.</td>
        <td class="arabic">فَمَدَّ اسْرَائِيلُ يَمِينَهُ وَوَضَعَهَا عَلَى رَاسِ افْرَايِمَ وَهُوَ الصَّغِيرُ وَيَسَارَهُ عَلَى رَاسِ مَنَسَّى. وَضَعَ يَدَيْهِ بِفِطْنَةٍ فَانَّ مَنَسَّى كَانَ الْبِكْرَ.</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">And he blessed Joseph, and said: "God, before whom my fathers Abraham and Isaac walked, The God who has fed me all my life long to this day,</td>
        <td class="arabic">وَبَارَكَ يُوسُفَ وَقَالَ: «اللهُ الَّذِي سَارَ امَامَهُ ابَوَايَ ابْرَاهِيمُ وَاسْحَاقُ - اللهُ الَّذِي رَعَانِي مُنْذُ وُجُودِي الَى هَذَا الْيَوْمِ -</td>
    </tr>
    <tr id="table_3_row_19" class="text">
        <td class="english">The Angel who has redeemed me from all evil, Bless the lads; Let my name be named upon them, And the name of my fathers Abraham and Isaac; And let them grow into a multitude in the midst of the earth."</td>
        <td class="arabic">الْمَلاكُ الَّذِي خَلَّصَنِي مِنْ كُلِّ شَرٍّ يُبَارِكُ الْغُلامَيْنِ. وَلْيُدْعَ عَلَيْهِمَا اسْمِي وَاسْمُ ابَوَيَّ ابْرَاهِيمَ وَاسْحَاقَ. وَلْيَكْثُرَا كَثِيرا فِي الارْضِ».</td>
    </tr>
    <tr id="table_3_row_20" class="text">
        <td class="english">Now when Joseph saw that his father laid his right hand on the head of Ephraim, it displeased him; so he took hold of his father's hand to remove it from Ephraim's head to Manasseh's head.</td>
        <td class="arabic">فَلَمَّا رَاى يُوسُفُ انَّ ابَاهُ وَضَعَ يَدَهُ الْيُمْنَى عَلَى رَاسِ افْرَايِمَ سَاءَ ذَلِكَ فِي عَيْنَيْهِ فَامْسَكَ بِيَدِ ابِيهِ لِيَنْقُلَهَا عَنْ رَاسِ افْرَايِمَ الَى رَاسِ مَنَسَّى.</td>
    </tr>
    <tr id="table_3_row_21" class="text">
        <td class="english">And Joseph said to his father, "Not so, my father, for this one is the firstborn; put your right hand on his head."</td>
        <td class="arabic">وَقَالَ يُوسُفُ لابِيهِ: «لَيْسَ هَكَذَا يَا ابِي لانَّ هَذَا هُوَ الْبِكْرُ. ضَعْ يَمِينَكَ عَلَى رَاسِهِ».</td>
    </tr>
    <tr id="table_3_row_22" class="text">
        <td class="english">But his father refused and said, "I know, my son, I know.</td>
        <td class="arabic">فَابَى ابُوهُ وَقَالَ: «عَلِمْتُ يَا ابْنِي عَلِمْتُ!</td>
    </tr>
    <tr id="table_3_row_24" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
    </table>

    <table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 50: 4-9)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 50: 4 - 9)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">"The Lord God has given Me The tongue of the learned, That I should know how to speak A word in season to him who is weary. He awakens Me morning by morning, He awakens My ear To hear as the learned.</td>
        <td class="arabic">أَعْطَانِي السَّيِّدُ الرَّبُّ لِسَانَ الْمُتَعَلِّمِينَ لأَعْرِفَ أَنْ أُغِيثَ الْمُعْيِيَ بِكَلِمَةٍ. يُوقِظُ كُلَّ صَبَاحٍ يُوقِظُ لِي أُذُناً لأَسْمَعَ كَالْمُتَعَلِّمِينَ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">The Lord God has opened My ear; And I was not rebellious, Nor did I turn away.</td>
        <td class="arabic">السَّيِّدُ الرَّبُّ فَتَحَ لِي أُذُناً وَأَنَا لَمْ أُعَانِدْ. إِلَى الْوَرَاءِ لَمْ أَرْتَدَّ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">I gave My back to those who struck Me, And My cheeks to those who plucked out the beard; I did not hide My face from shame and spitting.</td>
        <td class="arabic">بَذَلْتُ ظَهْرِي لِلضَّارِبِينَ وَخَدَّيَّ لِلنَّاتِفِينَ. وَجْهِي لَمْ أَسْتُرْ عَنِ الْعَارِ وَالْبَصْقِ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">"For the Lord God will help Me; Therefore I will not be disgraced; Therefore I have set My face like a flint, And I know that I will not be ashamed.</td>
        <td class="arabic">وَالسَّيِّدُ الرَّبُّ يُعِينُنِي لِذَلِكَ لاَ أَخْجَلُ. لِذَلِكَ جَعَلْتُ وَجْهِي كَالصَّوَّانِ وَعَرَفْتُ أَنِّي لاَ أَخْزَى.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">He is near who justifies Me; Who will contend with Me? Let us stand together. Who is My adversary? Let him come near Me.</td>
        <td class="arabic">قَرِيبٌ هُوَ الَّذِي يُبَرِّرُنِي. مَنْ يُخَاصِمُنِي؟ لِنَتَوَاقَفْ! مَنْ هُوَ صَاحِبُ دَعْوَى مَعِي؟ لِيَتَقَدَّمْ إِلَيّ!</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Surely the Lord God will help Me; Who is he who will condemn Me? Indeed they will all grow old like a garment; The moth will eat them up.</td>
        <td class="arabic">هُوَذَا السَّيِّدُ الرَّبُّ يُعِينُنِي. مَنْ هُوَ الَّذِي يَحْكُمُ عَلَيَّ؟ هُوَذَا كُلُّهُمْ كَالثَّوْبِ يَبْلُونَ. يَأْكُلُهُمُ الْعُثُّ.</td>
    </tr>
    <tr id="table_4_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
    </table>

    <table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Isaiah 3:9-15)
    <span class="arabic-caption">النبوة الثالثة<br>(اشعياء 3: 9-15)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">Also from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">وايضا من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">Woe to their soul! For they have brought evil upon themselves.</td>
        <td class="arabic">وَيْلٌ لِنُفُوسِهِمْ لأَنَّهُمْ يَصْنَعُونَ لأَنْفُسِهِمْ شَرّاً.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">"Say to the righteous that it shall be well with them, For they shall eat the fruit of their doings.</td>
        <td class="arabic">«قُولُوا لِلصِّدِّيقِ خَيْرٌ! لأَنَّهُمْ يَأْكُلُونَ ثَمَرَ أَفْعَالِهِمْ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">Woe to the wicked! It shall be ill with him, For the reward of his hands shall be given him.</td>
        <td class="arabic">وَيْلٌ لِلشِّرِّيرِ. شَرٌّ! لأَنَّ مُجَازَاةَ يَدَيْهِ تُعْمَلُ بِهِ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">As for My people, children are their oppressors, And women rule over them. O My people! Those who lead you cause you to err, And destroy the way of your paths."</td>
        <td class="arabic">شَعْبِي ظَالِمُوهُ أَوْلاَدٌ وَنِسَاءٌ يَتَسَلَّطْنَ عَلَيْهِ. يَا شَعْبِي مُرْشِدُوكَ مُضِلُّونَ وَيَبْلَعُونَ طَرِيقَ مَسَالِكِكَ».</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">The Lord stands up to plead, And stands to judge the people.</td>
        <td class="arabic">قَدِ انْتَصَبَ الرَّبُّ لِلْمُخَاصَمَةِ وَهُوَ قَائِمٌ لِدَيْنُونَةِ الشُّعُوبِ.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">The Lord will enter into judgment With the elders of His people And His princes: "For you have eaten up the vineyard; The plunder of the poor is in your houses.</td>
        <td class="arabic">اَلرَّبُّ يَدْخُلُ فِي الْمُحَاكَمَةِ مَعَ شُيُوخِ شَعْبِهِ وَرُؤَسَائِهِمْ: «وَأَنْتُمْ قَدْ أَكَلْتُمُ الْكَرْمَ. سَلْبُ الْبَائِسِ فِي بُيُوتِكُمْ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">What do you mean by crushing My people And grinding the faces of the poor?"</td>
        <td class="arabic">مَا لَكُمْ تَسْحَقُونَ شَعْبِي وَتَطْحَنُونَ وُجُوهَ الْبَائِسِينَ؟» يَقُولُ السَّيِّدُ رَبُّ الْجُنُودِ.</td>
    </tr>
    <tr id="table_5_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
    </table>

    <table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(Isaiah 63:1-7)
    <span class="arabic-caption">النبوة الرابعة<br>(اشعياء 63: 1 - 7)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">Also from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">وايضا من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">Who is this who comes from Edom, With dyed garments from Bozrah, This One who is glorious in His apparel, Traveling in the greatness of His strength?-- "I who speak in righteousness, mighty to save."</td>
        <td class="arabic">مَنْ ذَا الآتِي مِنْ أَدُومَ بِثِيَابٍ حُمْرٍ مِنْ بُصْرَةَ؟ هَذَا الْبَهِيُّ بِمَلاَبِسِهِ. الْمُتَعَظِّمُ بِكَثْرَةِ قُوَّتِهِ. «أَنَا الْمُتَكَلِّمُ بِالْبِرِّ الْعَظِيمُ لِلْخَلاَصِ».</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">Why is Your apparel red, And Your garments like one who treads in the winepress?</td>
        <td class="arabic">مَا بَالُ لِبَاسِكَ مُحَمَّرٌ وَثِيَابُكَ كَدَائِسِ الْمِعْصَرَةِ؟</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">"I have trodden the winepress alone, And from the peoples no one was with Me. For I have trodden them in My anger, And trampled them in My fury; Their blood is sprinkled upon My garments, And I have stained all My robes.</td>
        <td class="arabic">«قَدْ دُسْتُ الْمِعْصَرَةَ وَحْدِي وَمِنَ الشُّعُوبِ لَمْ يَكُنْ مَعِي أَحَدٌ. فَدُسْتُهُمْ بِغَضَبِي وَوَطِئْتُهُمْ بِغَيْظِي. فَرُشَّ عَصِيرُهُمْ عَلَى ثِيَابِي فَلَطَخْتُ كُلَّ مَلاَبِسِي.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">For the day of vengeance is in My heart, And the year of My redeemed has come.</td>
        <td class="arabic">لأَنَّ يَوْمَ النَّقْمَةِ فِي قَلْبِي وَسَنَةَ مَفْدِيِّيَّ قَدْ أَتَتْ.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">I looked, but there was no one to help, And I wondered That there was no one to uphold; Therefore My own arm brought salvation for Me; And My own fury, it sustained Me.</td>
        <td class="arabic">فَنَظَرْتُ وَلَمْ يَكُنْ مُعِينٌ وَتَحَيَّرْتُ إِذْ لَمْ يَكُنْ عَاضِدٌ فَخَلَّصَتْ لِي ذِرَاعِي وَغَيْظِي عَضَدَنِي.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">I have trodden down the peoples in My anger, Made them drunk in My fury, And brought down their strength to the earth."</td>
        <td class="arabic">فَدُسْتُ شُعُوباً بِغَضَبِي وَأَسْكَرْتُهُمْ بِغَيْظِي وَأَجْرَيْتُ عَلَى الأَرْضِ عَصِيرَهُمْ».</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">I will mention the lovingkindnesses of the Lord And the praises of the Lord, According to all that the Lord has bestowed on us.</td>
        <td class="arabic">إِحْسَانَاتِ الرَّبِّ أَذْكُرُ. تَسَابِيحَ الرَّبِّ. حَسَبَ كُلِّ مَا كَافَأَنَا بِهِ الرَّبُّ وَالْخَيْرَ الْعَظِيمَ لِبَيْتِ إِسْرَائِيلَ الَّذِي كَافَأَهُمْ بِهِ حَسَبَ مَرَاحِمِهِ وَحَسَبَ كَثْرَةِ إِحْسَانَاتِهِ.</td>
    </tr>
    <tr id="table_6_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
    </table>

    <table id="table_7" title="5th Prophecy">
    <caption id="caption_table_7" class="caption">5th Prophecy<br>(Amos 9:5,8-10)
    <span class="arabic-caption">النبوة  الخامسة<br>(عاموس 9: 5 و 8-10)</span></caption>
    <tr id="table_7_row_1" class="intro">
        <td class="english">A reading from Amos the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من عاموس النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_7_row_4" class="text">
        <td class="english">The Lord God of hosts, He who touches the earth and it melts, And all who dwell there mourn; All of it shall swell like the River, And subside like the River of Egypt.</td>
        <td class="arabic">وَالسَّيِّدُ رَبُّ الْجُنُودِ الَّذِي يَمَسُّ الأَرْضَ فَتَذُوبُ وَيَنُوحُ السَّاكِنُونَ فِيهَا وَتَطْمُو كُلُّهَا كَنَهْرٍ وَتَنْضُبُ كَنِيلِ مِصْرَ .</td>
    </tr>
    <tr id="table_7_row_5" class="text">
        <td class="english">"Behold, the eyes of the Lord God are on the sinful kingdom, And I will destroy it from the face of the earth; Yet I will not utterly destroy the house of Jacob," Says the Lord.</td>
        <td class="arabic">هُوَذَا عَيْنَا السَّيِّدِ الرَّبِّ عَلَى الْمَمْلَكَةِ الْخَاطِئَةِ وَأُبِيدُهَا عَنْ وَجْهِ الأَرْضِ. غَيْرَ أَنِّي لاَ أُبِيدُ بَيْتَ يَعْقُوبَ تَمَاماً يَقُولُ الرَّبُّ.</td>
    </tr>
    <tr id="table_7_row_6" class="text">
        <td class="english">"For surely I will command, And will sift the house of Israel among all nations, As grain is sifted in a sieve; Yet not the smallest grain shall fall to the ground.</td>
        <td class="arabic">لأَنَّهُ هَئَنَذَا آمُرُ فَأُغَرْبِلُ بَيْتَ إِسْرَائِيلَ بَيْنَ جَمِيعِ الأُمَمِ كَمَا يُغَرْبَلُ فِي الْغُرْبَالِ وَحَبَّةٌ لاَ تَقَعُ إِلَى الأَرْضِ.</td>
    </tr>
    <tr id="table_7_row_7" class="text">
        <td class="english">All the sinners of My people shall die by the sword, Who say, 'The calamity shall not overtake nor confront us.'</td>
        <td class="arabic">بِالسَّيْفِ يَمُوتُ كُلُّ خَاطِئِي شَعْبِي الْقَائِلِينَ: لاَ يَقْتَرِبُ الشَّرُّ وَلاَ يَأْتِي بَيْنَنَا.</td>
    </tr>
    <tr id="table_7_row_9" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
    </table>

    <table id="table_8" title="6th Prophecy">
        <caption id="caption_table_8" class="caption">6th Prophecy<br>(Job 29:21-30:10)
        <span class="arabic-caption">النبوة  السادسة<br>(ايوب 29: 21 - 10:30)</span></caption>
        <tr id="table_8_row_1" class="intro">
            <td class="english">A reading from Job the righteous. May his blessings be with us. Amen.</td>
            <td class="arabic">من أيوب الصديق بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_8_row_4" class="text">
            <td class="english">"Men listened to me and waited, And kept silence for my counsel.</td>
            <td class="arabic">لِي سَمِعُوا وَانْتَظَرُوا وَنَصَتُوا عِنْدَ مَشُورَتِي.</td>
        </tr>
        <tr id="table_8_row_5" class="text">
            <td class="english">After my words they did not speak again, And my speech settled on them as dew.</td>
            <td class="arabic">بَعْدَ كَلاَمِي لَمْ يُثَنُّوا وَقَوْلِي قَطَرَ عَلَيْهِمْ.</td>
        </tr>
        <tr id="table_8_row_6" class="text">
            <td class="english">They waited for me as for the rain, And they opened their mouth wide as for the spring rain.</td>
            <td class="arabic">وَانْتَظَرُونِي مِثْلَ الْمَطَرِ وَفَغَرُوا أَفْوَاهَهُمْ كَمَا لِلْمَطَرِ الْمُتَأَخِّرِ.</td>
        </tr>
        <tr id="table_8_row_7" class="text">
            <td class="english">If I mocked at them, they did not believe it, And the light of my countenance they did not cast down.</td>
            <td class="arabic">إِنْ ضَحِكْتُ عَلَيْهِمْ لَمْ يُصَدِّقُوا وَنُورَ وَجْهِي لَمْ يُعَبِّسُوا.</td>
        </tr>
        <tr id="table_8_row_8" class="text">
            <td class="english">I chose the way for them, and sat as chief; So I dwelt as a king in the army, As one who comforts mourners.</td>
            <td class="arabic">كُنْتُ أَخْتَارُ طَرِيقَهُمْ وَأَجْلِسُ رَأْساً وَأَسْكُنُ كَمَلِكٍ فِي جَيْشٍ كَمَنْ يُعَزِّي النَّائِحِينَ</td>
        </tr>
        <tr id="table_8_row_9" class="text">
            <td class="english">"But now they mock at me, men younger than I, Whose fathers I disdained to put with the dogs of my flock.</td>
            <td class="arabic">[وَأَمَّا الآنَ فَقَدْ ضَحِكَ عَلَيَّ مَنْ يَصْغُرُنِي فِي الأَيَّامِ الَّذِينَ كُنْتُ أَسْتَنْكِفُ مِنْ أَنْ أَجْعَلَ آبَاءَهُمْ مَعَ كِلاَبِ غَنَمِي.</td>
        </tr>
        <tr id="table_8_row_10" class="text">
            <td class="english">Indeed, what profit is the strength of their hands to me? Their vigor has perished.</td>
            <td class="arabic">قُوَّةُ أَيْدِيهِمْ أَيْضاً مَا هِيَ لِي. فِيهِمْ عَجِزَتِ الشَّيْخُوخَةُ.</td>
        </tr>
        <tr id="table_8_row_11" class="text">
            <td class="english">They are gaunt from want and famine, Fleeing late to the wilderness, desolate and waste,</td>
            <td class="arabic">فِي الْعَوَزِ وَالْمَجَاعَةِ مَهْزُولُونَ يَنْبِشُونَ الْيَابِسَةَ الَّتِي هِيَ مُنْذُ أَمْسِ خَرَابٌ وَخَرِبَةٌ.</td>
        </tr>
        <tr id="table_8_row_12" class="text">
            <td class="english">Who pluck mallow by the bushes, And broom tree roots for their food.</td>
            <td class="arabic">الَّذِينَ يَقْطِفُونَ الْمَلاَّحَ عِنْدَ الشِّيحِ وَأُصُولُ الرَّتَمِ خُبْزُهُمْ.</td>
        </tr>
        <tr id="table_8_row_13" class="text">
            <td class="english">They were driven out from among men, They shouted at them as at a thief.</td>
            <td class="arabic">مِنَ الْوَسَطِ يُطْرَدُونَ. يَصِيحُونَ عَلَيْهِمْ كَمَا عَلَى لِصٍّ.</td>
        </tr>
        <tr id="table_8_row_14" class="text">
            <td class="english">They had to live in the clefts of the valleys, In caves of the earth and the rocks.</td>
            <td class="arabic">لِلسَّكَنِ فِي أَوْدِيَةٍ مُرْعِبَةٍ وَثُقَبِ التُّرَابِ وَالصُّخُورِ.</td>
        </tr>
        <tr id="table_8_row_15" class="text">
            <td class="english">Among the bushes they brayed, Under the nettles they nestled.</td>
            <td class="arabic">بَيْنَ الشِّيحِ يَنْهَقُونَ. تَحْتَ الْعَوْسَجِ يَنْكَبُّونَ.</td>
        </tr>
        <tr id="table_8_row_16" class="text">
            <td class="english">They were sons of fools, Yes, sons of vile men; They were scourged from the land.</td>
            <td class="arabic">أَبْنَاءُ الْحَمَاقَةِ بَلْ أَبْنَاءُ أُنَاسٍ بِلاَ اسْمٍ دُحِرُوا مِنَ الأَرْضِ.</td>
        </tr>
        <tr id="table_8_row_17" class="text">
            <td class="english">"And now I am their taunting song; Yes, I am their byword.</td>
            <td class="arabic">[أَمَّا الآنَ فَصِرْتُ أُغْنِيَتَهُمْ وَأَصْبَحْتُ لَهُمْ مَثَلاً!</td>
        </tr>
        <tr id="table_8_row_18" class="text">
            <td class="english">They abhor me, they keep far from me; They do not hesitate to spit in my face.</td>
            <td class="arabic">يَكْرَهُونَنِي. يَبْتَعِدُونَ عَنِّي وَأَمَامَ وَجْهِي لَمْ يُمْسِكُوا عَنِ الْبَصْقِ.</td>
        </tr>
        <tr id="table_8_row_20" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>
    <table id="table_9" title="Homily">
    <caption id="caption_table_9" class="caption">Homily<br>(Abba Athanasius the Apostolic)
    <span class="arabic-caption">العظة<br>(الأنبا أثناسيوس الرسولي)</span></caption>
    <tr id="table_9_row_1" class="intro">
        <td class="english">A homily of our holy father Abba Athanasius the Apostolic. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لأبينا القديس الأنبا أثناسيوس الرسولي بركته تكون معنا آمين.</td>
    </tr>
    <tr id="table_9_row_4" class="text">
        <td class="english">For Christ Himself came and died for us because of His love.</td>
        <td class="arabic">لان المسيح جاء بذاته ولمحبته مات</td>
    </tr>
    <tr id="table_9_row_5" class="text">
        <td class="english">For he did not only create us, who are sinners, as Adam, but when we destroyed ourselves with sin,</td>
        <td class="arabic">عنا لانه لم يخلقنا نحن الخطاة مثل ادم ويصيرنا بشراً فقط بل لما اهلكنا انفسنا بالخطية</td>
    </tr>
    <tr id="table_9_row_6" class="text">
        <td class="english">He came and suffered for us and gave us life through His love.</td>
        <td class="arabic">جاء وتألم عنا واحيانا بمحبته</td>
    </tr>
    <tr id="table_9_row_7" class="text">
        <td class="english">He came to us as a physician manifesting Himself to us.</td>
        <td class="arabic">لانه قد جاء الينا كطبيب معلناً لنا ذاته</td>
    </tr>
    <tr id="table_9_row_8" class="text">
        <td class="english">He did not come to heal us of our sickness but to raise us from the death that enslaved us.</td>
        <td class="arabic">لأنه لم يأت لنا كمرضى بل كموتى بهذا لم يشفنا نحن المرضى بل أقامنا نحن الاموات</td>
    </tr>
    <tr id="table_9_row_9" class="text">
        <td class="english">He freed us from its bonds. Christ the Lord died for us that we may have life with Him forever.</td>
        <td class="arabic">الذين ابتلعنا الموت ففكنا من رباطاته لهذا مات المسيح الرب عنا لكى نحيا معه إلى الابد</td>
    </tr>
    <tr id="table_9_row_10" class="text">
        <td class="english">Him being the Lord, came and shared in humanity’s pains. How then can a human who is enslaved be saved?</td>
        <td class="arabic">لانه أن لم يكن الرب قد شارك البشرية فى آلامها فكيف يخلص الإنسان لان الموت سقط تحت أقدام</td>
    </tr>
    <tr id="table_9_row_11" class="text">
        <td class="english">Christ put death under his feet and was it was defeated.</td>
        <td class="arabic">المسيح وانهزم وهو مسبى مضطرب</td>
    </tr>
    <tr id="table_9_row_12" class="text">
        <td class="english">Hades in its power fell back when it heard the voice of the Lord calling the souls saying,</td>
        <td class="arabic">والجحيم مع قوته رجع إلى خلف لما سمع صوت الرب ينادى الانفس قائلاً</td>
    </tr>
    <tr id="table_9_row_13" class="text">
        <td class="english">“Come out of your bonds, you who sit in darkness and in the shadow of death.</td>
        <td class="arabic">اخرجوا من وثاقكم ايها الجالسون فى الظلمة وظلال الموت</td>
    </tr>
    <tr id="table_9_row_14" class="text">
        <td class="english">Come out of your bonds, I preach to you life for I am the Christ, the son of the eternal God.</td>
        <td class="arabic">اخرجوا من وثاقكم انا ابشركم بالحياة لانى أنا هو المسيح ابن الله الابدى.</td>
    </tr>
    <tr id="table_9_row_16" class="intro">
        <td class="english">We conclude the homily of our holy father Abba Athanasius the Apostolic, who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس  الأنبا أثناسيوس الرسولي الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
    </tr>
    </table>

${tenouoshtHtml}

<table id="table_11" title="Pauline Epistle">
<table id="table_11" title="Pauline Epistle">
    <caption id="caption_table_11" class="caption">Pauline Epistle<br>(Colossians 2: 13-15)
    <span class="arabic-caption">البولس<br>(كولوسى 2: 13 - 15)</span></caption>
    <tr id="table_11_row_1" class="intro">
        <td class="english">Paul the servant of our Lord Jesus Christ, called to be an apostle, appointed to the Gospel of God. A reading from the epistle of our teacher Paul to the Colossians. May his blessing be with us. Amen.</td>
        <td class="arabic">بولس عبد يسوع المسيح الرسول المدعو المفرز لبشرى الله. من رسالة معلمنا بولس الرسول إلى أهل كولوسي  بركته تكون معنا. آمين.</td>
    </tr>
    <tr id="table_11_row_4" class="text">
        <td class="english">And you, being dead in your trespasses and the uncircumcision of your flesh, He has made alive together with Him, having forgiven you all trespasses,</td>
        <td class="arabic">وَإِذْ كُنْتُمْ امْوَاتاً فِي الْخَطَايَا وَغَلَفِ جَسَدِكُمْ، احْيَاكُمْ مَعَهُ، مُسَامِحاً لَكُمْ بِجَمِيعِ الْخَطَايَا،</td>
    </tr>
    <tr id="table_11_row_5" class="text">
        <td class="english">having wiped out the handwriting of requirements that was against us, which was contrary to us. And He has taken it out of the way, having nailed it to the cross.</td>
        <td class="arabic">إِذْ مَحَا الصَّكَّ الَّذِي عَلَيْنَا فِي الْفَرَائِضِ، الَّذِي كَانَ ضِدّاً لَنَا، وَقَدْ رَفَعَهُ مِنَ الْوَسَطِ مُسَمِّراً ايَّاهُ بِالصَّلِيبِ،</td>
    </tr>
    <tr id="table_11_row_6" class="text">
        <td class="english">Having disarmed principalities and powers, He made a public spectacle of them, triumphing over them in it.</td>
        <td class="arabic">إِذْ جَرَّدَ الرِّيَاسَاتِ وَالسَّلاَطِينَ اشْهَرَهُمْ جِهَاراً، ظَافِراً بِهِمْ فِيهِ.</td>
    </tr>
    <tr id="table_11_row_8" class="intro">
        <td class="english">The grace of God the Father be with you all. Amen.</td>
        <td class="arabic">نعمة الله الآب تحل مع جميعكم آمين.</td>
    </tr>
</table>
</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_14" title="Coptic Psalm">
        <caption class="caption" id="caption_table_14">Coptic Psalm<br>(27:12, 35:11-12, 16)
        <span class="arabic-caption">المزمور قبطياً<br>(27: 12 و 35: 11 - 12 و 16)</span></caption>

        <tr id="table_14_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_14_row_1" class="text">
            <td class="english">For I am ready to fall,</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲕ ⲇⲉ ϯⲥⲉⲃⲧⲱⲧ ⲉ̀ϩⲁⲛ ⲙⲁⲥⲧⲓⲅⲅⲟⲥ:</td>
            <td class="arabic">أما أنا فمستعد للسياط.</td>
        </tr>
        <tr id="table_14_row_2" class="text">
            <td class="english">And my sorrow is continually before me. </td>
            <td class="coptic">ⲟⲩⲟϩ ⲡⲁⲙ̀ⲕⲁϩ ⲙ̀ⲡⲁⲙ̀ⲑⲟ ⲉ̀ⲃⲟⲗ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">ووجعي مقابلي في كل حين.</td>
        </tr>
        <tr id="table_14_row_3" class="text">
            <td class="english">For dogs have surrounded Me;</td>
            <td class="coptic">Ⲁⲩⲕⲱϯ ⲉ̀ⲣⲟⲓ ⲛ̀ϫⲉ ⲟⲩⲑⲟ ⲛ̀ⲟⲩⲟⲩϩⲟⲣ:</td>
            <td class="arabic">قد أحاطت بي كلاب كثيرة</td>
        </tr>
        <tr id="table_14_row_4" class="text">
            <td class="english">The congregation of the wicked has enclosed Me.</td>
            <td class="coptic">ⲟⲩⲥⲩⲛⲁⲅⲱⲅⲏ ⲛ̀ϫⲁϫⲃⲱⲛ ⲡⲉⲧⲁⲥⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟⲓ:</td>
            <td class="arabic">وزمرة من الاشرار احدقت بي.</td>
        </tr>
        <tr id="table_14_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_16" title="Coptic Gospel">
        <caption class="caption" id="caption_table_16">Coptic Gospels
        <span class="arabic-caption">الأناجيل قبطياً</span></caption>
        <tr id="table_16_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ̀ⲁⲅⲓⲟ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_16_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="coptic">Ⲕⲁⲧⲁ ⲡ̀ϣⲁⲓ ⲇⲉ ⲛⲉ ⲧ̀ⲕⲁϩⲥ ⲙ̀ⲓϩⲩⲅⲉⲙⲱⲛ : ⲉ̀ⲭⲁ ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲧⲥⲟⲛϩ ⲙ̀ⲡⲓⲙⲏϣ ⲫⲏⲉ̀ϣⲁⲩ ⲟⲩⲁϣϥ : Ⲛⲉ ⲟⲩⲟⲛ ⲟⲩⲁⲓ ⲇⲉ ⲉϥⲥⲟⲛϩ ⲛ̀ⲧⲟⲧⲟⲩ ⲙ̀ⲡⲓⲥⲏⲟⲩ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ ⲉ̀ⲟⲩⲥⲟⲛⲓ ⲡⲉ : ⲉⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲃⲁⲣⲁⲃⲃⲁⲥ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_16_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ̀ⲁⲅⲓⲟ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_16_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_16_row_5" class="text">
            <td class="coptic">Ⲕⲁⲧⲁ ⲡ̀ϣⲁⲓ ⲇⲉ ⲛⲁϥⲭⲱ ⲛ̀ⲟⲩⲁⲓ ⲉϥⲥⲟⲛϩ ⲛⲱⲟⲩ ⲉⲃⲟⲗ : ⲫⲏⲉ̀ϣⲁⲩⲉ̀ⲣⲉⲧⲓⲛ ⲙ̀ⲙⲟϥ. Ⲫⲏ ⲇⲉ ⲉ̀ⲧⲟⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲃⲁⲣⲁⲃⲃⲁⲥ ⲛⲁϥⲥⲟⲛϩ ⲡⲉ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲩⲓ̀ⲣⲓ ⲛ̀ⲟⲩϣ̀ⲑⲟⲣⲧⲉⲣ : ⲛⲏⲉ̀ⲧⲁⲩⲓ̀ⲣⲓ ⲛ̀ⲟⲩϧⲱⲧⲉⲃ ϧⲉⲛ ⲡⲓϣ̀ⲑⲟⲣⲧⲉⲣ.<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_16_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_16_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_16_row_8" class="text">
            <td class="coptic">Ⲡⲓⲗⲁⲧⲟⲥ ⲇⲉ ⲉ̀ⲧⲁϥⲙⲟⲩϯ Ⲉ̀ⲛⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛⲉⲙ ⲛⲓⲁⲣⲭⲱⲛ ⲛⲉⲙ ⲡⲓⲗⲁⲟⲥ : Ⲡⲉϫⲁϥ ⲛⲱⲟⲩ ϫⲉ ⲁ̀ⲣⲉⲧⲉⲛⲓ̀ⲛⲓ ⲛⲏⲓ ⲙ̀ⲡⲁⲓ ⲣⲱⲙⲓ ϩⲱⲥ ⲉϥⲫⲱⲛϩ ⲙ̀ⲡⲓⲗⲁⲟⲥ ⲉⲃⲟⲗ : ⲟⲩⲟϩ ϩⲏⲡⲡⲉ ⲁ̀ⲛⲟⲕ ⲉ̀ⲧⲁⲓϣⲉⲛϥ ⲉ̀ϩ̀ⲣⲁϥ ⲙ̀ⲡⲉⲧⲉⲛⲙ̀ⲑⲟ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_16_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_16_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_16_row_11" class="text">
            <td class="coptic">Ⲧⲟⲧⲉ Ⲡⲓⲗⲁⲧⲟⲥ ⲁϥϭⲓ ⲛ̀Ⲓ̅ⲏ̅ⲥ ⲁϥⲉⲣⲙⲁⲥⲧⲓⲅⲅⲟⲓⲛ ⲙ̀ⲙⲟϥ. Ⲟⲩⲟϩ ⲛⲓⲙⲁⲧⲟⲓ ⲁⲩϣⲱⲛⲧ ⲛ̀ⲟⲩⲭ̀ⲗⲟⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ ϩⲁⲛⲥⲟⲩⲣⲓ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_16_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">
<table id="table_17" title="Psalm">
    <caption id="caption_table_17" class="caption">Psalm<br>(38:17, 22:16)
    <span class="arabic-caption">المزمور<br>(38: 17 و 22: 16)</span></caption>
    <tr id="table_17_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_17_row_4" class="text">
        <td class="english">For I am ready to fall, And my sorrow is continually before me.</td>
        <td class="arabic">لأَنِّي مُوشِكٌ أَنْ أَظْلَعَ وَوَجَعِي مُقَابِلِي دَائِماً.</td>
    </tr>
    <tr id="table_17_row_5" class="text">
        <td class="english">For dogs have surrounded Me; The congregation of the wicked has enclosed Me.</td>
        <td class="arabic">لأَنَّهُ قَدْ أَحَاطَتْ بِي كِلاَبٌ. جَمَاعَةٌ مِنَ الأَشْرَارِ اكْتَنَفَتْنِي. ثَقَبُوا يَدَيَّ وَرِجْلَيَّ.</td>
    </tr>
    <tr id="table_17_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_18" title="Gospel">
    <caption id="caption_table_18" class="caption">Gospel<br>(Matthew 27:15-26)
    <span class="arabic-caption">الانجيل<br>(متى 27: 15-26)</span></caption>
    <tr id="table_18_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_18_row_4" class="text">
        <td class="english">Now at the feast the governor was accustomed to releasing to the multitude one prisoner whom they wished.</td>
        <td class="arabic">وَكَانَ الْوَالِي مُعْتَاداً فِي الْعِيدِ أَنْ يُطْلِقَ لِلْجَمْعِ أَسِيراً وَاحِداً مَنْ أَرَادُوهُ.</td>
    </tr>
    <tr id="table_18_row_5" class="text">
        <td class="english">And at that time they had a notorious prisoner called Barabbas.</td>
        <td class="arabic">وَكَانَ لَهُمْ حِينَئِذٍ أَسِيرٌ مَشْهُورٌ يُسَمَّى بَارَابَاسَ.</td>
    </tr>
    <tr id="table_18_row_6" class="text">
        <td class="english">Therefore, when they had gathered together, Pilate said to them, "Whom do you want me to release to you? Barabbas, or Jesus who is called Christ?"</td>
        <td class="arabic">فَفِيمَا هُمْ مُجْتَمِعُونَ قَالَ لَهُمْ بِيلاَطُسُ: «مَنْ تُرِيدُونَ أَنْ أُطْلِقَ لَكُمْ؟ بَارَابَاسَ أَمْ يَسُوعَ الَّذِي يُدْعَى الْمَسِيحَ؟»</td>
    </tr>
    <tr id="table_18_row_7" class="text">
        <td class="english">For he knew that they had handed Him over because of envy.</td>
        <td class="arabic">لأَنَّهُ عَلِمَ أَنَّهُمْ أَسْلَمُوهُ حَسَداً.</td>
    </tr>
    <tr id="table_18_row_8" class="text">
        <td class="english">While he was sitting on the judgment seat, his wife sent to him, saying, "Have nothing to do with that just Man, for I have suffered many things today in a dream because of Him."</td>
        <td class="arabic">وَإِذْ كَانَ جَالِساً عَلَى كُرْسِيِّ الْوِلاَيَةِ أَرْسَلَتْ إِلَيْهِ امْرَأَتُهُ قَائِلَةً: «إِيَّاكَ وَذَلِكَ الْبَارَّ لأَنِّي تَأَلَّمْتُ الْيَوْمَ كَثِيراً فِي حُلْمٍ مِنْ أَجْلِهِ».</td>
    </tr>
    <tr id="table_18_row_9" class="text">
        <td class="english">But the chief priests and elders persuaded the multitudes that they should ask for Barabbas and destroy Jesus.</td>
        <td class="arabic">وَلَكِنَّ رُؤَسَاءَ الْكَهَنَةِ وَالشُّيُوخَ حَرَّضُوا الْجُمُوعَ عَلَى أَنْ يَطْلُبُوا بَارَابَاسَ وَيُهْلِكُوا يَسُوعَ.</td>
    </tr>
    <tr id="table_18_row_10" class="text">
        <td class="english">The governor answered and said to them, "Which of the two do you want me to release to you?" They said, "Barabbas!"</td>
        <td class="arabic">فَسَأَلَ الْوَالِي: «مَنْ مِنَ الاِثْنَيْنِ تُرِيدُونَ أَنْ أُطْلِقَ لَكُمْ؟» فَقَالُوا: «بَارَابَاسَ».</td>
    </tr>
    <tr id="table_18_row_11" class="text">
        <td class="english">Pilate said to them, "What then shall I do with Jesus who is called Christ?" They all said to him, "Let Him be crucified!"</td>
        <td class="arabic">قَالَ لَهُمْ بِيلاَطُسُ: «فَمَاذَا أَفْعَلُ بِيَسُوعَ الَّذِي يُدْعَى الْمَسِيحَ؟» قَالَ لَهُ الْجَمِيعُ: «لِيُصْلَبْ!»</td>
    </tr>
    <tr id="table_18_row_12" class="text">
        <td class="english">Then the governor said, "Why, what evil has He done?" But they cried out all the more, saying, "Let Him be crucified!"</td>
        <td class="arabic">فَقَالَ الْوَالِي: «وَأَيَّ شَرٍّ عَمِلَ؟» فَكَانُوا يَزْدَادُونَ صُرَاخاً قَائِلِينَ: «لِيُصْلَبْ!»</td>
    </tr>
    <tr id="table_18_row_13" class="text">
        <td class="english">When Pilate saw that he could not prevail at all, but rather that a tumult was rising, he took water and washed his hands before the multitude, saying, "I am innocent of the blood of this just Person. You see to it."</td>
        <td class="arabic">فَلَمَّا رَأَى بِيلاَطُسُ أَنَّهُ لاَ يَنْفَعُ شَيْئاً بَلْ بِالْحَرِيِّ يَحْدُثُ شَغَبٌ أَخَذَ مَاءً وَغَسَلَ يَدَيْهِ قُدَّامَ الْجَمْعِ قَائِلاً: «إِنِّي بَرِيءٌ مِنْ دَمِ هَذَا الْبَارِّ. أَبْصِرُوا أَنْتُمْ».</td>
    </tr>
    <tr id="table_18_row_14" class="text">
        <td class="english">And all the people answered and said, "His blood be on us and on our children."</td>
        <td class="arabic">فَأَجَابَ جَمِيعُ الشَّعْبِ: «دَمُهُ عَلَيْنَا وَعَلَى أَوْلاَدِنَا».</td>
    </tr>
    <tr id="table_18_row_15" class="text">
        <td class="english">Then he released Barabbas to them; and when he had scourged Jesus, he delivered Him to be crucified.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">حِينَئِذٍ أَطْلَقَ لَهُمْ بَارَابَاسَ وَأَمَّا يَسُوعُ فَجَلَدَهُ وَأَسْلَمَهُ لِيُصْلَبَ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_18_row_17" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_19" title="Psalm">
    <caption id="caption_table_19" class="caption">Psalm<br>(38:17, 22:16)
    <span class="arabic-caption">المزمور<br>(38: 17 و 22: 16)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير أبينا داود النبى بركته المقدسة تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">For I am ready to fall, And my sorrow is continually before me.</td>
        <td class="arabic">لأَنِّي مُوشِكٌ أَنْ أَظْلَعَ وَوَجَعِي مُقَابِلِي دَائِماً.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">For dogs have surrounded Me; The congregation of the wicked has enclosed Me.</td>
        <td class="arabic">لأَنَّهُ قَدْ أَحَاطَتْ بِي كِلاَبٌ. جَمَاعَةٌ مِنَ الأَشْرَارِ اكْتَنَفَتْنِي. ثَقَبُوا يَدَيَّ وَرِجْلَيَّ.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Mark 15:6-25)
    <span class="arabic-caption">الانجيل<br>(مرقس 15:6-25)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Now at the feast he was accustomed to releasing one prisoner to them, whomever they requested.</td>
        <td class="arabic">وَكَانَ يُطْلِقُ لَهُمْ فِي كُلِّ عِيدٍ أَسِيراً وَاحِداً مَنْ طَلَبُوهُ.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">And there was one named Barabbas, who was chained with his fellow rebels; they had committed murder in the rebellion.</td>
        <td class="arabic">وَكَانَ الْمُسَمَّى بَارَابَاسَ مُوثَقاً مَعَ رُفَقَائِهِ فِي الْفِتْنَةِ الَّذِينَ فِي الْفِتْنَةِ فَعَلُوا قَتْلاً.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Then the multitude, crying aloud,</td>
        <td class="arabic">فَصَرَخَ الْجَمْعُ وَابْتَدَأُوا يَطْلُبُونَ أَنْ يَفْعَلَ كَمَا كَانَ دَائِماً يَفْعَلُ لَهُمْ.</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">But Pilate answered them, saying, "Do you want me to release to you the King of the Jews?"</td>
        <td class="arabic">فَأَجَابَهُمْ بِيلاَطُسُ: «أَتُرِيدُونَ أَنْ أُطْلِقَ لَكُمْ مَلِكَ الْيَهُودِ؟».</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">For he knew that the chief priests had handed Him over because of envy.</td>
        <td class="arabic">لأَنَّهُ عَرَفَ أَنَّ رُؤَسَاءَ الْكَهَنَةِ كَانُوا قَدْ أَسْلَمُوهُ حَسَداً.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">But the chief priests stirred up the crowd, so that he should rather release Barabbas to them.</td>
        <td class="arabic">فَهَيَّجَ رُؤَسَاءُ الْكَهَنَةِ الْجَمْعَ لِكَيْ يُطْلِقَ لَهُمْ بِالْحَرِيِّ بَارَابَاسَ.</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">Pilate answered and said to them again, "What then do you want me to do with Him whom you call the King of the Jews?"</td>
        <td class="arabic">فَسَأَلَ بِيلاَطُسُ: «فَمَاذَا تُرِيدُونَ أَنْ أَفْعَلَ بِالَّذِي تَدْعُونَهُ مَلِكَ الْيَهُودِ؟»</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">So they cried out again, "Crucify Him!"</td>
        <td class="arabic">فَصَرَخُوا أَيْضاً: «اصْلِبْهُ!»</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Then Pilate said to them, "Why, what evil has He done?" But they cried out all the more, "Crucify Him!"</td>
        <td class="arabic">فَسَأَلَهُمْ بِيلاَطُسُ: «وَأَيَّ شَرٍّ عَمِلَ؟» فَازْدَادُوا جِدّاً صُرَاخاً: «اصْلِبْهُ!»</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">So Pilate, wanting to gratify the crowd, released Barabbas to them; and he delivered Jesus, after he had scourged Him, to be crucified.</td>
        <td class="arabic">فَبِيلاَطُسُ إِذْ كَانَ يُرِيدُ أَنْ يَعْمَلَ لِلْجَمْعِ مَا يُرْضِيهِمْ أَطْلَقَ لَهُمْ بَارَابَاسَ وَأَسْلَمَ يَسُوعَ بَعْدَمَا جَلَدَهُ لِيُصْلَبَ.</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">Then the soldiers led Him away into the hall called Praetorium, and they called together the whole garrison.</td>
        <td class="arabic">فَمَضَى بِهِ الْعَسْكَرُ إِلَى دَاخِلِ الدَّارِ الَّتِي هِيَ دَارُ الْوِلاَيَةِ وَجَمَعُوا كُلَّ الْكَتِيبَةِ.</td>
    </tr>
    <tr id="table_20_row_15" class="text">
        <td class="english">And they clothed Him with purple; and they twisted a crown of thorns, put it on His head,</td>
        <td class="arabic">وَأَلْبَسُوهُ أُرْجُواناً وَضَفَرُوا إِكْلِيلاً مِنْ شَوْكٍ وَوَضَعُوهُ عَلَيْهِ</td>
    </tr>
    <tr id="table_20_row_16" class="text">
        <td class="english">and began to salute Him, "Hail, King of the Jews!"</td>
        <td class="arabic">وَابْتَدَأُوا يُسَلِّمُونَ عَلَيْهِ قَائِلِينَ: «السَّلاَمُ يَا مَلِكَ الْيَهُودِ!»</td>
    </tr>
    <tr id="table_20_row_17" class="text">
        <td class="english">Then they struck Him on the head with a reed and spat on Him; and bowing the knee, they worshiped Him.</td>
        <td class="arabic">وَكَانُوا يَضْرِبُونَهُ عَلَى رَأْسِهِ بِقَصَبَةٍ وَيَبْصُقُونَ عَلَيْهِ ثُمَّ يَسْجُدُونَ لَهُ جَاثِينَ عَلَى رُكَبِهِمْ.</td>
    </tr>
    <tr id="table_20_row_18" class="text">
        <td class="english">And when they had mocked Him, they took the purple off Him, put His own clothes on Him, and led Him out to crucify Him.</td>
        <td class="arabic">وَبَعْدَمَا اسْتَهْزَأُوا بِهِ نَزَعُوا عَنْهُ الأُرْجُوانَ وَأَلْبَسُوهُ ثِيَابَهُ ثُمَّ خَرَجُوا بِهِ لِيَصْلِبُوهُ.</td>
    </tr>
    <tr id="table_20_row_19" class="text">
        <td class="english">Then they compelled a certain man, Simon a Cyrenian, the father of Alexander and Rufus, as he was coming out of the country and passing by, to bear His cross.</td>
        <td class="arabic">فَسَخَّرُوا رَجُلاً مُجْتَازاً كَانَ آتِياً مِنَ الْحَقْلِ وَهُوَ سِمْعَانُ الْقَيْرَوَانِيُّ أَبُو أَلَكْسَنْدَرُسَ وَرُوفُسَ لِيَحْمِلَ صَلِيبَهُ.</td>
    </tr>
    <tr id="table_20_row_20" class="text">
        <td class="english">And they brought Him to the place Golgotha, which is translated, Place of a Skull.</td>
        <td class="arabic">وَجَاءُوا بِهِ إِلَى مَوْضِعِ «جُلْجُثَةَ» الَّذِي تَفْسِيرُهُ مَوْضِعُ «جُمْجُمَةٍ».</td>
    </tr>
    <tr id="table_20_row_21" class="text">
        <td class="english">Then they gave Him wine mingled with myrrh to drink, but He did not take it.</td>
        <td class="arabic">وَأَعْطَوْهُ خَمْراً مَمْزُوجَةً بِمُرٍّ لِيَشْرَبَ فَلَمْ يَقْبَلْ.</td>
    </tr>
    <tr id="table_20_row_22" class="text">
        <td class="english">And when they crucified Him, they divided His garments, casting lots for them to determine what every man should take.</td>
        <td class="arabic">وَلَمَّا صَلَبُوهُ اقْتَسَمُوا ثِيَابَهُ مُقْتَرِعِينَ عَلَيْهَا: مَاذَا يَأْخُذُ كُلُّ وَاحِدٍ؟</td>
    </tr>
    <tr id="table_20_row_23" class="text">
        <td class="english">Now it was the third hour, and they crucified Him.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">وَكَانَتِ السَّاعَةُ الثَّالِثَةُ فَصَلَبُوهُ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_25" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_21" title="Gospel">
    <caption id="caption_table_21" class="caption">Gospel<br>(Luke 23:13-25)
    <span class="arabic-caption">الانجيل<br>(لوقا 23: 13 - 25)</span></caption>
    <tr id="table_21_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_21_row_4" class="text">
        <td class="english">Then Pilate, when he had called together the chief priests, the rulers, and the people,</td>
        <td class="arabic">فَدَعَا بِيلاَطُسُ رُؤَسَاءَ الْكَهَنَةِ وَالْعُظَمَاءَ وَالشَّعْبَ</td>
    </tr>
    <tr id="table_21_row_5" class="text">
        <td class="english">said to them, "You have brought this Man to me, as one who misleads the people. And indeed, having examined Him in your presence, I have found no fault in this Man concerning those things of which you accuse Him;</td>
        <td class="arabic">وَقَالَ لَهُمْ: «قَدْ قَدَّمْتُمْ إِلَيَّ هَذَا الإِنْسَانَ كَمَنْ يُفْسِدُ الشَّعْبَ. وَهَا أَنَا قَدْ فَحَصْتُ قُدَّامَكُمْ وَلَمْ أَجِدْ فِي هَذَا الإِنْسَانِ عِلَّةً مِمَّا تَشْتَكُونَ بِهِ عَلَيْهِ.</td>
    </tr>
    <tr id="table_21_row_6" class="text">
        <td class="english">no, neither did Herod, for I sent you back to him; and indeed nothing deserving of death has been done by Him.</td>
        <td class="arabic">وَلاَ هِيرُودُسُ أَيْضاً لأَنِّي أَرْسَلْتُكُمْ إِلَيْهِ. وَهَا لاَ شَيْءَ يَسْتَحِقُّ الْمَوْتَ صُنِعَ مِنْهُ.</td>
    </tr>
    <tr id="table_21_row_7" class="text">
        <td class="english">I will therefore chastise Him and release Him"</td>
        <td class="arabic">فَأَنَا أُؤَدِّبُهُ وَأُطْلِقُهُ».</td>
    </tr>
    <tr id="table_21_row_8" class="text">
        <td class="english">(for it was necessary for him to release one to them at the feast).</td>
        <td class="arabic">وَكَانَ مُضْطَرّاً أَنْ يُطْلِقَ لَهُمْ كُلَّ عِيدٍ وَاحِداً</td>
    </tr>
    <tr id="table_21_row_9" class="text">
        <td class="english">And they all cried out at once, saying, "Away with this Man, and release to us Barabbas"--</td>
        <td class="arabic">فَصَرَخُوا بِجُمْلَتِهِمْ قَائِلِينَ: «خُذْ هَذَا وَأَطْلِقْ لَنَا بَارَابَاسَ!»</td>
    </tr>
    <tr id="table_21_row_10" class="text">
        <td class="english">who had been thrown into prison for a certain rebellion made in the city, and for murder.</td>
        <td class="arabic">وَذَاكَ كَانَ قَدْ طُرِحَ فِي السِّجْنِ لأَجْلِ فِتْنَةٍ حَدَثَتْ فِي الْمَدِينَةِ وَقَتْلٍ.</td>
    </tr>
    <tr id="table_21_row_11" class="text">
        <td class="english">Pilate, therefore, wishing to release Jesus, again called out to them.</td>
        <td class="arabic">فَنَادَاهُمْ أَيْضاً بِيلاَطُسُ وَهُوَ يُرِيدُ أَنْ يُطْلِقَ يَسُوعَ</td>
    </tr>
    <tr id="table_21_row_12" class="text">
        <td class="english">But they shouted, saying, "Crucify Him, crucify Him!"</td>
        <td class="arabic">فَصَرَخُوا: «اصْلِبْهُ! اصْلِبْهُ!»</td>
    </tr>
    <tr id="table_21_row_13" class="text">
        <td class="english">Then he said to them the third time, "Why, what evil has He done? I have found no reason for death in Him. I will therefore chastise Him and let Him go."</td>
        <td class="arabic">فَقَالَ لَهُمْ ثَالِثَةً: «فَأَيَّ شَرٍّ عَمِلَ هَذَا؟ إِنِّي لَمْ أَجِدْ فِيهِ عِلَّةً لِلْمَوْتِ فَأَنَا أُؤَدِّبُهُ وَأُطْلِقُهُ».</td>
    </tr>
    <tr id="table_21_row_14" class="text">
        <td class="english">But they were insistent, demanding with loud voices that He be crucified. And the voices of these men and of the chief priests prevailed.</td>
        <td class="arabic">فَكَانُوا يَلِجُّونَ بِأَصْوَاتٍ عَظِيمَةٍ طَالِبِينَ أَنْ يُصْلَبَ. فَقَوِيَتْ أَصْوَاتُهُمْ وَأَصْوَاتُ رُؤَسَاءِ الْكَهَنَةِ.</td>
    </tr>
    <tr id="table_21_row_15" class="text">
        <td class="english">So Pilate gave sentence that it should be as they requested.</td>
        <td class="arabic">فَحَكَمَ بِيلاَطُسُ أَنْ تَكُونَ طِلْبَتُهُمْ.</td>
    </tr>
    <tr id="table_21_row_16" class="text">
        <td class="english">And he released to them the one they requested, who for rebellion and murder had been thrown into prison; but he delivered Jesus to their will.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">فَأَطْلَقَ لَهُمُ الَّذِي طُرِحَ فِي السِّجْنِ لأَجْلِ فِتْنَةٍ وَقَتْلٍ الَّذِي طَلَبُوهُ وَأَسْلَمَ يَسُوعَ لِمَشِيئَتِهِمْ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_21_row_18" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_22" title="Gospel">
    <caption id="caption_table_22" class="caption">Gospel<br>(John 19:1-12)
    <span class="arabic-caption">الانجيل<br>(يوحنا 19:1-12)</span></caption>
    <tr id="table_22_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher St. John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">So then Pilate took Jesus and scourged Him.</td>
        <td class="arabic">فَحِينَئِذٍ أَخَذَ بِيلاَطُسُ يَسُوعَ وَجَلَدَهُ.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">And the soldiers twisted a crown of thorns and put it on His head, and they put on Him a purple robe.</td>
        <td class="arabic">وَضَفَرَ الْعَسْكَرُ إِكْلِيلاً مِنْ شَوْكٍ وَوَضَعُوهُ عَلَى رَأْسِهِ وَأَلْبَسُوهُ ثَوْبَ أُرْجُوانٍ</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">Then they said, "Hail, King of the Jews!" And they struck Him with their hands.</td>
        <td class="arabic">وَكَانُوا يَقُولُونَ: «السّلاَمُ يَا مَلِكَ الْيَهُودِ». وَكَانُوا يَلْطِمُونَهُ.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">Pilate then went out again, and said to them, "Behold, I am bringing Him out to you, that you may know that I find no fault in Him."</td>
        <td class="arabic">فَخَرَجَ بِيلاَطُسُ أَيْضاً خَارِجاً وَقَالَ لَهُمْ: «هَا أَنَا أُخْرِجُهُ إِلَيْكُمْ لِتَعْلَمُوا أَنِّي لَسْتُ أَجِدُ فِيهِ عِلَّةً وَاحِدَةً».</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">Then Jesus came out, wearing the crown of thorns and the purple robe. And Pilate said to them, "Behold the Man!"</td>
        <td class="arabic">فَخَرَجَ يَسُوعُ خَارِجاً وَهُوَ حَامِلٌ إِكْلِيلَ الشَّوْكِ وَثَوْبَ الأُرْجُوانِ. فَقَالَ لَهُمْ بِيلاَطُسُ: «هُوَذَا الإِنْسَانُ».</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">Therefore, when the chief priests and officers saw Him, they cried out, saying, "Crucify Him, crucify Him!" Pilate said to them, "You take Him and crucify Him, for I find no fault in Him."</td>
        <td class="arabic">فَلَمَّا رَآهُ رُؤَسَاءُ الْكَهَنَةِ وَالْخُدَّامُ صَرَخُوا: «اصْلِبْهُ! اصْلِبْهُ!» قَالَ لَهُمْ بِيلاَطُسُ: «خُذُوهُ أَنْتُمْ وَاصْلِبُوهُ لأَنِّي لَسْتُ أَجِدُ فِيهِ عِلَّةً».</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">The Jews answered him, "We have a law, and according to our law He ought to die, because He made Himself the Son of God."</td>
        <td class="arabic">أَجَابَهُ الْيَهُودُ: «لَنَا نَامُوسٌ وَحَسَبَ نَامُوسِنَا يَجِبُ أَنْ يَمُوتَ لأَنَّهُ جَعَلَ نَفْسَهُ ابْنَ اللَّهِ».</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">Therefore, when Pilate heard that saying, he was the more afraid,</td>
        <td class="arabic">فَلَمَّا سَمِعَ بِيلاَطُسُ هَذَا الْقَوْلَ ازْدَادَ خَوْفاً.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">and went again into the Praetorium, and said to Jesus, "Where are You from?" But Jesus gave him no answer.</td>
        <td class="arabic">فَدَخَلَ أَيْضاً إِلَى دَارِ الْوِلاَيَةِ وَقَالَ لِيَسُوعَ: «مِنْ أَيْنَ أَنْتَ؟» وَأَمَّا يَسُوعُ فَلَمْ يُعْطِهِ جَوَاباً.</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">Then Pilate said to Him, "Are You not speaking to me? Do You not know that I have power to crucify You, and power to release You?"</td>
        <td class="arabic">فَقَالَ لَهُ بِيلاَطُسُ: «أَمَا تُكَلِّمُنِي؟ أَلَسْتَ تَعْلَمُ أَنَّ لِي سُلْطَاناً أَنْ أَصْلِبَكَ وَسُلْطَاناً أَنْ أُطْلِقَكَ؟»</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">Jesus answered, "You could have no power at all against Me unless it had been given you from above. Therefore the one who delivered Me to you has the greater sin."</td>
        <td class="arabic">أَجَابَ يَسُوعُ: « لَمْ يَكُنْ لَكَ عَلَيَّ سُلْطَانٌ الْبَتَّةَ لَوْ لَمْ تَكُنْ قَدْ أُعْطِيتَ مِنْ فَوْقُ. لِذَلِكَ الَّذِي أَسْلَمَنِي إِلَيْكَ لَهُ خَطِيَّةٌ أَعْظَمُ».</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">From then on Pilate sought to release Him, but the Jews cried out, saying, "If you let this Man go, you are not Caesar's friend. Whoever makes himself a king speaks against Caesar."<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">مِنْ هَذَا الْوَقْتِ كَانَ بِيلاَطُسُ يَطْلُبُ أَنْ يُطْلِقَهُ وَلَكِنَّ الْيَهُودَ كَانُوا يَصْرُخُونَ: «إِنْ أَطْلَقْتَ هَذَا فَلَسْتَ مُحِبّاً لِقَيْصَرَ. كُلُّ مَنْ يَجْعَلُ نَفْسَهُ مَلِكاً يُقَاوِمُ قَيْصَرَ».<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_22_row_17" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>
</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}
<table id="table_24" title="Exposition">
    <caption id="caption_table_24" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_24_row_1" class="intro">
        <td class="english">The exposition of the THIRD Hour of the DAY of GREAT FRIDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الثالثة من يوم الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_24_row_4" class="text">
        <td class="english">One often wonders with this great prophet Isaiah,</td>
        <td class="arabic">أنا متحير مع هذا النبى ذى الصوت العظيم، أشعياء النبى،</td>
    </tr>
    <tr id="table_24_row_5" class="text">
        <td class="english">who foresaw by inspiration the passions of the Savior who is the Word of God.</td>
        <td class="arabic">الذى سبق فنظر بال سر إلى آلام الخلاص التى لله الكلمة</td>
    </tr>
    <tr id="table_24_row_6" class="text">
        <td class="english">Isaiah said, “Who is this who comes from Edom, with dyed garments from Bozrah?</td>
        <td class="arabic">وقال: من هو الآتى من آدوم، وثيابه حمراء من بصرة، لابساً حلة بهية هكذا،</td>
    </tr>
    <tr id="table_24_row_7" class="text">
        <td class="english">This One who is glorious in His apparel,” from red blood as one who ascends to the winepress, stained with its blood.</td>
        <td class="arabic">ولباسه من الدم الأحمر، كمن يصعد من المعصرة ملطخاً بدم عنقودها؟!</td>
    </tr>
    <tr id="table_24_row_8" class="text">
        <td class="english">These are the words of the prophet who revealed this before these days.</td>
        <td class="arabic">حقاً بالحقيقة هو كلام هذا النبى الذى أظهر هذا من قبل هذه الأيام.</td>
    </tr>
    <tr id="table_24_row_9" class="text">
        <td class="english">Truly, He is the Word of God, our Savior, and Jesus who wore the old flesh of Adam, the first creation.</td>
        <td class="arabic">بالحقيقة أنه هو الإله الكلمة مخلصنا يسوع كالتدبير، لبس الجسد القديم الذى لأبينا آدم أول الخليقة،</td>
    </tr>
    <tr id="table_24_row_10" class="text">
        <td class="english">The Divinity united with humanity without mingling nor confusion in an incomprehensible way.</td>
        <td class="arabic">وصار اللاهوت العلوى متحداً بالبشرية بغير استحالة، بشكل لا يدرك.</td>
    </tr>
    <tr id="table_24_row_11" class="text">
        <td class="english">He trampled over them in the press of His anger and inflicted His wrath on the Hebrews.</td>
        <td class="arabic">هى الحلة التى لا تتغير المتحدة بالاله الكلمة. وصب غضبه على العبرانيين،</td>
    </tr>
    <tr id="table_24_row_12" class="text">
        <td class="english">He granted His mercy and righteousness to the Gentiles whom He made a new people.</td>
        <td class="arabic">وداسهم فى معصرة غضبه. ورحمته وبره أعطاهما للأمم الذين صنعهم له شبعاً جديداً.</td>
    </tr>
    <tr id="table_24_row_13" class="text">
        <td class="english">As for Israel, its foolishness prevails on them forever.</td>
        <td class="arabic">أما اسرائيل فان البلادة قد استولت عليه إلى الانقضاء.</td>
    </tr>
</table>
${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

`;

};