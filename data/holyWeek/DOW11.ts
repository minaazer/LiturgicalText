import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOW11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of WEDNESDAY","يوم الاربعاء");
    const paschalPraiseHtml = paschalPraise2("4","14","15","ELEVENTH","الحادية عشر","DAY of WEDNESDAY","يوم الاربعاء");
    const copticGospelIntroHtml = copticGospelIntro("17");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("21");
    const expositionConclusionHtml = expositionConclusion("23");
    const daytimeLitaniesHtml = daytimeLitanies("24",true);
    const evnotiNaiNanHtml = evnotiNaiNan("25");
    const endOfServiceHymnHtml = endOfServiceHymn("26");



return `

${hourIntroHtml}


<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲡⲁⲓⲣⲏϯ ⲉ̀ⲧⲉϥ ϫⲱ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϫⲉ ̀̀Ⲡ⳪ : ϫⲉ ϩⲏⲡⲡⲉ ⲁ̀ⲛⲟⲕ ⲉⲓⲉ̀ϩⲓⲟⲩⲓ̀ ⲛ̀ⲛⲓⲥⲉⲛϯ ⲛ̀ⲧⲉ Ⲥⲓⲱⲛ ⲛ̀ⲟⲩⲱ̀ⲛⲓ ⲉ̀ⲛⲁϣⲉⲛ̀ⲥⲟⲩⲉⲛϥ ⲛ̀ⲥⲱⲧⲡ ⲛ̀ⲕⲟϩ ⲥⲁⲃⲟⲗ ⲉϥⲧⲁⲓⲏⲟⲩⲧ ⲉ̀ⲛⲉⲥⲥⲉⲛϯ</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">


<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 28:16-29)
    <span class="arabic-caption">النبوة الأولي<br>(أشعياء 28: 16-29)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Therefore thus says the Lord God: "Behold, I lay in Zion a stone for a foundation, A tried stone, a precious cornerstone, a sure foundation; Whoever believes will not act hastily.</td>
        <td class="arabic">لِذَلِكَ هَكَذَا يَقُولُ السَّيِّدُ الرَّبُّ: «هَئَنَذَا أُؤَسِّسُ فِي صِهْيَوْنَ حَجَرَ امْتِحَانٍ حَجَرَ زَاوِيَةٍ كَرِيماً أَسَاساً مُؤَسَّساً. مَنْ آمَنَ لاَ يَهْرُبُ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Also I will make justice the measuring line, And righteousness the plummet; The hail will sweep away the refuge of lies, And the waters will overflow the hiding place.</td>
        <td class="arabic">وَأَجْعَلُ الْحَقَّ خَيْطاً وَالْعَدْلَ مِطْمَاراً فَيَخْطُفُ الْبَرَدُ مَلْجَأَ الْكَذِبِ وَيَجْرُفُ الْمَاءُ السِّتَارَةَ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">Your covenant with death will be annulled, And your agreement with Sheol will not stand; When the overflowing scourge passes through, Then you will be trampled down by it.</td>
        <td class="arabic">وَيُمْحَى عَهْدُكُمْ مَعَ الْمَوْتِ وَلاَ يَثْبُتُ مِيثَاقُكُمْ مَعَ الْهَاوِيَةِ. السَّوْطُ الْجَارِفُ إِذَا عَبَرَ تَكُونُونَ لَهُ لِلدَّوْسِ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">As often as it goes out it will take you; For morning by morning it will pass over, And by day and by night; It will be a terror just to understand the report."</td>
        <td class="arabic">كُلَّمَا عَبَرَ يَأْخُذُكُمْ فَإِنَّهُ كُلَّ صَبَاحٍ يَعْبُرُ فِي النَّهَارِ وَفِي اللَّيْلِ وَيَكُونُ فَهْمُ الْخَبَرِ فَقَطِ انْزِعَاجاً».</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">For the bed is too short to stretch out on, And the covering so narrow that one cannot wrap himself in it.</td>
        <td class="arabic">لأَنَّ الْفِرَاشَ قَدْ قَصَرَ عَنِ التَّمَدُّدِ وَالْغِطَاءَ ضَاقَ عَنِ الاِلْتِحَافِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">For the Lord will rise up as at Mount Perazim, He will be angry as in the Valley of Gibeon-- That He may do His work, His awesome work, And bring to pass His act, His unusual act.</td>
        <td class="arabic">لأَنَّهُ كَمَا فِي جَبَلِ فَرَاصِيمَ يَقُومُ الرَّبُّ وَكَمَا فِي الْوَطَاءِ عِنْدَ جِبْعُونَ يَسْخَطُ لِيَفْعَلَ فِعْلَهُ الْغَرِيبَ وَلِيَعْمَلَ عَمَلَهُ الْغَرِيبَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">Now therefore, do not be mockers, Lest your bonds be made strong; For I have heard from the Lord God of hosts, A destruction determined even upon the whole earth.</td>
        <td class="arabic">فَالآنَ لاَ تَكُونُوا مُتَهَكِّمِينَ لِئَلاَّ تُشَدَّدَ رُبُطُكُمْ لأَنِّي سَمِعْتُ فَنَاءً قَضَى بِهِ السَّيِّدُ رَبُّ الْجُنُودِ عَلَى كُلِّ الأَرْضِ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">Give ear and hear my voice, Listen and hear my speech.</td>
        <td class="arabic">اُصْغُوا وَاسْمَعُوا صَوْتِي. انْصُتُوا وَاسْمَعُوا قَوْلِي.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Does the plowman keep plowing all day to sow? Does he keep turning his soil and breaking the clods?</td>
        <td class="arabic">هَلْ يَحْرُثُ الْحَارِثُ كُلَّ يَوْمٍ لِيَزْرَعَ وَيَشُقَّ أَرْضَهُ وَيُمَهِّدَهَا؟</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">When he has leveled its surface, Does he not sow the black cumin And scatter the cummin, Plant the wheat in rows, The barley in the appointed place, And the spelt in its place?</td>
        <td class="arabic">أَلَيْسَ أَنَّهُ إِذَا سَوَّى وَجْهَهَا يَبْذُرُ الشُّونِيزَ وَيُذَرِّي الْكَمُّونَ وَيَضَعُ الْحِنْطَةَ فِي أَتْلاَمٍ وَالشَّعِيرَ فِي مَكَانٍ مُعَيَّنٍ وَالْقَطَانِيَّ فِي حُدُودِهَا؟</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">For He instructs him in right judgment, His God teaches him.</td>
        <td class="arabic">فَيُرْشِدُهُ. بِالْحَقِّ يُعَلِّمُهُ إِلَهُهُ.</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">For the black cumin is not threshed with a threshing sledge, Nor is a cartwheel rolled over the cummin; But the black cumin is beaten out with a stick, And the cummin with a rod.</td>
        <td class="arabic">إِنَّ الشُّونِيزَ لاَ يُدْرَسُ بِالنَّوْرَجِ وَلاَ تُدَارُ بَكَرَةُ الْعَجَلَةِ عَلَى الْكَمُّونِ بَلْ بِالْقَضِيبِ يُخْبَطُ الشُّونِيزُ وَالْكَمُّونُ بِالْعَصَا.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">Bread flour must be ground; Therefore he does not thresh it forever, Break it with his cartwheel, Or crush it with his horsemen.</td>
        <td class="arabic">يُدَقُّ الْقَمْحُ لأَنَّهُ لاَ يَدْرُسُهُ إِلَى الأَبَدِ فَيَسُوقُ بَكَرَةَ عَجَلَتِهِ وَخَيْلَهُ. لاَ يَسْحَقُهُ.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">This also comes from the Lord of hosts, Who is wonderful in counsel and excellent in guidance.</td>
        <td class="arabic">هَذَا أَيْضاً خَرَجَ مِنْ قِبَلِ رَبِّ الْجُنُودِ. عَجِيبُِ الرَّأْيِ عَظِيمُِ الْفَهْمِ.</td>
    </tr>
    <tr id="table_3_row_19" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="Homily">
    <caption id="caption_table_6" class="caption">Homily<br>(Abba Severianus)
    <span class="arabic-caption">العظة<br>(انبا ساويرس بر)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A homily of our holy father Abba Severianus. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ⲥⲉⲩⲏⲣⲓⲁⲛⲟⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لابينا القديس انبا ساويرس بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">Brethren, I remind you the admonishment concerning the sinner,</td>
        <td class="arabic">أيها الاخوه ها أنا أذكركم الآن من أجل الصوت الذى سيكون على الخطاة.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">and those who reject the law and the commandments of life.</td>
        <td class="arabic">والذين يكفرون بالناموس ووصايا الحياه.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">Because our Lord warned them saying: Stay away from me and into eternal fire. What comfort do they expect?</td>
        <td class="arabic">لانه  قال أبتعدوا عنى ياملاعين إلى النار الابدية. فأى عزاء ينتظرونه هؤلاء مرة أخرى.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">There is the valley of tears; the tears that can bring no comfort.</td>
        <td class="arabic">هنا هو وادى البكاء حيث تكون الدموع. هذه هى الدموع التى لا يكون بعدها عزاء من ذا</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">Who can intercede for the sinners in that day when all the angels;</td>
        <td class="arabic">الذى يقدر أن يطلب عن الخطاة فى ذلك اليوم لان الملائكة</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">Cherubim, and Seraphim keep quiet and neither the righteous nor the saints can mediate for mankind?</td>
        <td class="arabic">والشاروبيم والساروفيم تصمت وجميع الابرار والقديسين لا يستطيع أحد منهم أن يشفع فى البشرية فى ذلك اليوم</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">The whole creation will be silent and the whole world will be under the Divine judgment. This is the time of harvest.</td>
        <td class="arabic">وتقف كل الخليقة صامتة والعالم كله يكون تحت الحكم الآلهى العادل. هذا هو زمان الحصاد.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">This is the time to pull the net ashore to sort the good fish from the bad ones.</td>
        <td class="arabic">هذا هو وقت جذب الشبكة إلى الشاطئ حيث يعزل السمك الجيد من الردئ</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">This is the day when the sinners will be told ‘Go dwell in Hell forever’.</td>
        <td class="arabic">هذا هو اليوم الذى يقال فيه للخطاة أذهبوا إلى الجحيم مسكنكم إلى الابد.</td>
    </tr>
    <tr id="table_6_row_14" class="intro">
        <td class="english">We conclude the homily of our holy father Abba Severianus, who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ⲥⲉⲩⲏⲣⲓⲁⲛⲟⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا ساويرس الذى أنار عقولنا وعيون قلوبنا بأسم الآب والإبن والروح القدس الإله الواحد، آمين.</td>
    </tr>
</table>


</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(6:2,3 / 69:17)
        <span class="arabic-caption">المزمور قبطياً<br>(6: 2 ، 68: 14)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Have mercy on me, O Lord, for my bones are troubled.</td>
            <td class="coptic">Ⲙⲁⲧⲁⲗϭⲟⲓ Ⲡ̀ϭⲟⲓⲥ ϫⲉ ⲛⲁ ⲕⲁⲥ ⲁⲩϣ̀ⲑⲟⲣⲧⲉⲣ :</td>
            <td class="arabic">اشفني يارب فان عظامي قد اضطربت</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">My soul also is greatly troubled.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲁ̀ ⲧⲁⲯⲩⲭⲏ ϣ̀ⲑⲟⲣⲧⲉⲣ ⲉ̀ⲙⲁϣⲱ.</td>
            <td class="arabic">ونفسي قد انزعجت جداً.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">And do not hide Your face from Your servant,</td>
            <td class="coptic">Ⲙ̀ⲡⲉⲣⲫⲱⲛϩ ⲙ̀ⲡⲉⲕϩⲟ ⲥⲁⲃⲟⲗ ⲙ̀ⲡⲉⲕⲁ̀ⲗⲟⲩ :</td>
            <td class="arabic">لا تصرف وجهك عن فتاك.</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">For I am in trouble; Hear me speedily.</td>
            <td class="coptic">ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ ⲛ̀ⲭⲱⲗⲉⲙ ϫⲉ ϯϩⲉϫϩⲱϫ :</td>
            <td class="arabic">اسمعني سريعاً فإنني في شدة:</td>
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
            <td class="coptic">ϯⲛⲟⲩ ̀̀ⲁⲧⲁⲯⲩⲭⲏ ϣ̀ⲑⲟⲣⲧⲉⲣ ⲟⲩⲟϩ ⲟⲩⲡⲉϯⲛⲁϫⲟϥ ⲡⲁⲓⲱⲧ ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲁⲓⲟⲩⲛⲟⲩ : ⲁⲗⲗⲁ ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲓⲓ̀ ⲉ̀ⲧⲁⲓⲟⲩⲛⲟⲩ : Ⲫ̀ⲓⲱⲧ ⲙⲁⲱ̀ⲟⲩ ⲙ̀ⲡⲉⲕϣⲏⲣⲓ : ⲟⲩⲥ̀ⲙⲏ ⲁⲥⲓ̀ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ ⲉⲥϫⲱⲙ̀ⲙⲟⲥ : ϫⲉ ⲁⲓϯⲱⲟⲩ ⲡⲁⲗⲓⲛ ϯⲛⲁϯⲱ̀ⲟⲩ : Ⲡⲓⲙⲏϣ ⲟⲩⲛ ⲉ̀ⲛⲁϥⲟϩⲓ ⲉ̀ⲣⲁⲧϥ ⲉ̀ⲧⲁⲩⲥⲱⲧⲉⲙ ⲛⲁⲩϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲟⲩ ϧⲁⲣⲁⲃⲁⲓ ⲡⲉⲧⲁⲥϣⲱⲡⲓ : ϩⲁⲛⲕⲉⲭⲱⲟⲩⲛⲓ ⲇⲉ ⲛⲁⲩϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲟⲩⲁⲅⲅⲉⲗⲟⲥ ⲡⲉⲧⲁϥⲥⲁϫⲓ ⲛⲉⲙⲁϥ Ⲁϥⲉ̀ⲣⲟⲩⲱ̀ ⲛ̀ϫⲉ Ⲓⲏⲥ ⲉϥϫⲱⲙ̀ⲙⲟⲥ ϫⲉ ⲉ̀ⲧⲁⲥϣⲱⲡⲓ ⲁⲛ ⲉⲑⲃⲏⲧ ⲛ̀ϫⲉ ⲧⲁⲓⲥ̀ⲙⲏ : ⲁⲗⲗⲁ ⲉⲑⲃⲉ ⲑⲏⲛⲟⲩ .<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(6:2-3, 69:17)
    <span class="arabic-caption">المزمور<br>(6: 2 ، 68: 14)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Have mercy on me, O Lord, for my bones are troubled.</td>
        <td class="arabic">اشفنى يارب فان عظامى قد أضطربت</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">My soul also is greatly troubled.</td>
        <td class="arabic">ونفسى قد أنزعجت جداً.</td>
    </tr>
    <tr id="table_19_row_6" class="text">
        <td class="english">And do not hide Your face from Your servant, for I am in trouble; Hear me speedily.</td>
        <td class="arabic">وَلاَ تَحْجُبْ وَجْهَكَ عَنْ عَبْدِكَ لأَنَّ لِي ضِيقاً. اسْتَجِبْ لِي سَرِيعاً.</td>
    </tr>
    <tr id="table_19_row_8" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(John 12:27-36)
    <span class="arabic-caption">الانجيل<br>(يوحنا 12: 27-36)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">"Now My soul is troubled, and what shall I say? 'Father, save Me from this hour'? But for this purpose I came to this hour.</td>
        <td class="arabic">اَلآنَ نَفْسِي قَدِ اضْطَرَبَتْ. وَمَاذَا أَقُولُ؟ أَيُّهَا الآبُ نَجِّنِي مِنْ هَذِهِ السَّاعَةِ. وَلَكِنْ لأَجْلِ هَذَا أَتَيْتُ إِلَى هَذِهِ السَّاعَةِ.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">Father, glorify Your name." Then a voice came from heaven, saying, "I have both glorified it and will glorify it again."</td>
        <td class="arabic">أَيُّهَا الآبُ مَجِّدِ اسْمَكَ». فَجَاءَ صَوْتٌ مِنَ السَّمَاءِ: «مَجَّدْتُ وَأُمَجِّدُ أَيْضاً».</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Therefore the people who stood by and heard it said that it had thundered. Others said, "An angel has spoken to Him."</td>
        <td class="arabic">فَالْجَمْعُ الَّذِي كَانَ وَاقِفاً وَسَمِعَ قَالَ: «قَدْ حَدَثَ رَعْدٌ». وَآخَرُونَ قَالُوا: «قَدْ كَلَّمَهُ ملاَكٌ».</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">Jesus answered and said, "This voice did not come because of Me, but for your sake.</td>
        <td class="arabic">أَجَابَ يَسُوعُ: «لَيْسَ مِنْ أَجْلِي صَارَ هَذَا الصَّوْتُ بَلْ مِنْ أَجْلِكُمْ.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">Now is the judgment of this world; now the ruler of this world will be cast out.</td>
        <td class="arabic">اَلآنَ دَيْنُونَةُ هَذَا الْعَالَمِ. اَلآنَ يُطْرَحُ رَئِيسُ هَذَا الْعَالَمِ خَارِجاً.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">And I, if I am lifted up from the earth, will draw all peoples to Myself."</td>
        <td class="arabic">وَأَنَا إِنِ ارْتَفَعْتُ عَنِ الأَرْضِ أَجْذِبُ إِلَيَّ الْجَمِيعَ».</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">This He said, signifying by what death He would die.</td>
        <td class="arabic">قَالَ هَذَا مُشِيراً إِلَى أَيَّةِ مِيتَةٍ كَانَ مُزْمِعاً أَنْ يَمُوتَ.</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">The people answered Him, "We have heard from the law that the Christ remains forever; and how can You say, 'The Son of Man must be lifted up'? Who is this Son of Man?"</td>
        <td class="arabic">فَأَجَابَهُ الْجَمْعُ: «نَحْنُ سَمِعْنَا مِنَ النَّامُوسِ أَنَّ الْمَسِيحَ يَبْقَى إِلَى الأَبَدِ فَكَيْفَ تَقُولُ أَنْتَ إِنَّهُ يَنْبَغِي أَنْ يَرْتَفِعَ ابْنُ الإِنْسَانِ؟ مَنْ هُوَ هَذَا ابْنُ الإِنْسَانِ؟»</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Then Jesus said to them, "A little while longer the light is with you. Walk while you have the light, lest darkness overtake you; he who walks in darkness does not know where he is going.</td>
        <td class="arabic">فَقَالَ لَهُمْ يَسُوعُ: «النُّورُ مَعَكُمْ زَمَاناً قَلِيلاً بَعْدُ فَسِيرُوا مَا دَامَ لَكُمُ النُّورُ لِئَلَّا يُدْرِكَكُمُ الظّلاَمُ. وَالَّذِي يَسِيرُ فِي الظّلاَمِ لاَ يَعْلَمُ إِلَى أَيْنَ يَذْهَبُ.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english">While you have the light, believe in the light, that you may become sons of light."</td>
        <td class="arabic">مَا دَامَ لَكُمُ النُّورُ آمِنُوا بِالنُّورِ لِتَصِيرُوا أَبْنَاءَ النُّورِ»</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_16" class="intro">
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
        <td class="english">The exposition of the ELEVENTH Hour of the DAY of WEDNESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من يوم الأربعاء من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">Let us contemplate on the plans of God the Word who has the power over death and gives life to everyone.</td>
        <td class="arabic">تأملوا يا أهل المعرفة تدبير الله الكلمة، الذى بيده سلطان الموت، وحياة كل أحد من عنده.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">Through his incarnation in a human form, he showed concern and weakness.</td>
        <td class="arabic">لكن لأجل جسد البشرية الذى أخذه منا يظهر الاضطراب والضعف.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">The Savior said, “Now is my soul troubled, and what shall I say?</td>
        <td class="arabic">قال المخلص: الآن نفسى مضطربة. وماذا أقول؟</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">‘Father, save me from this hour.’ But for this purpose I came to this hour.”</td>
        <td class="arabic">يا أبتاه نجنى من هذه الساعة. لكن لأجل هذه الساعة أتيت.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">Truly, He came to the world so that He may suffer for our salvation.</td>
        <td class="arabic">نعم بالحقيقة أتى إلى العالم لكى يتألم من أجل خلاصنا</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">He came to save the first man from Hades and to restore him again to his heavenly status, according to His great mercy.</td>
        <td class="arabic">ويصعد من الجحيم الإنسان الأول الذى خلقه، ويرده إلى وطنه الأول هو وبنيه كعظيم رحمته.</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">Let us cry to Him incessantly and ask Him to make us partners in the glory of His kingdom and confirm us in the faith of His Holy Name.</td>
        <td class="arabic">فلنصرخ نحوه بغير تكاسل، ونطلب اليه بغير فتور، لكى يجعلنا شركاء معه فى مجد ملكوته، ويثبتنا إلى النفس الأخير على الإيمان باسمه القدوس.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>

<div class="section" id="section_30" title="Next Hour">
<table id="table_50" title="Next Hour">
    <tr id="table_50_row_0" data-navigation="EOTH1sc" class="navigationButton">
        <td class="englishButton">The FIRST Hour of the EVE of THURSDAY</td>
        <td class="arabicButton">الساعة الأولى من ليلة الخميس</td>
    </tr>
</table>
</div>
`;

};