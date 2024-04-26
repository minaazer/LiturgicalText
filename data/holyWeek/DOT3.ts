import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, cross} from "../repeatedPrayers";

export const DOT3 = () => {
    const hourIntroHtml = hourIntro("THIRD","الثالثة","DAY of TUESDAY","يوم الثلاثاء");
    const paschalPraiseHtml = paschalPraise1("4","14","15","THIRD","الثالثة","DAY of TUESDAY","يوم الثلاثاء");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ⲡ̀ⲅⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲇⲉⲩⲧⲉⲣⲟⲛⲟⲙⲓⲟⲛ ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲙⲁϩ̀ⲑⲏⲕ ⲉⲣⲟⲕ ⲉ̀ϣ̀ⲧⲉⲙⲉⲣ ⲡ̀ⲱⲃϣ ⲙ̀Ⲡ̀⳪ ⲡⲉⲕⲛⲟⲩϯ ⲉ̀ϣ̀ⲧⲉⲙ ⲑ̀ⲣⲉⲕⲁ̀ ⲣⲉϩ ⲉ̀ⲛⲉϥⲉⲛⲧⲟⲗⲏ ⲛⲉⲙ ⲛⲉϥϩⲁⲡ ⲛⲉⲙ ⲛⲉϥⲙⲉⲑⲙⲏⲓ : ⲛⲁⲓ ⲁ̀ⲛⲟⲕ ⲉ̀ϯϩⲟⲛϩⲉⲛ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲧⲟⲧⲕ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀̀̀̀Ⲡ̀ⲥⲟⲩ ⲛ̀ⲧⲉ Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic"> Ⲡ̀ⲁϣⲏⲣⲓ ⲓⲥϫⲉ ⲭ̀ⲛⲁϯ ⲙ̀ⲡⲉⲕ ⲟⲩⲟⲓ ⲉ̀ⲉⲣⲃⲱⲕ ⲙⲠ̀⳪ ⲥⲉⲃⲧⲉ ⲧⲉⲕⲯⲩⲭⲏ ⲉ̀ϩⲁⲛⲡⲓⲣⲁⲥⲙⲟⲥ : ⲥⲟⲩⲧⲉⲛ ⲡⲉⲕϩⲏⲧ ⲟⲩⲟϩ ϥⲁⲓ ⲉ̀ⲣⲟⲕ ⲛ̀ⲧⲉⲕϣ̀ⲧⲉⲙϫⲁⲡϫⲉⲡ ϧⲉⲛ ⲡ̀ⲥⲏⲟⲩ ⲛ̀ⲛⲉⲕϧⲓⲥⲓ .</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic"> ̀̀Ⲡ⳪ ⲟⲛϩ ⲡⲉⲛⲧⲁϥⲕⲣⲓⲛⲉ ⲙ̀ⲙⲟⲓ ϩⲓ ⲛⲁⲓ ⲟⲩⲟϩ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲛ̀ⲧⲉϥⲛⲉϭⲥ ⲧⲁⲯⲩⲭⲏ ϫⲉ ⲉⲧⲉⲓ ⲉⲣⲉ ⲡⲁⲛⲓ̀ⲃⲉ ⲛ̀ϩⲏⲧ ⲟⲩⲟϩ ⲉⲣⲉ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲙ̀Ⲫϯ ϧⲉⲛ ⲛⲁϭ ⲃ̀ϣⲁ ⲛ̀ⲛⲉ ⲛⲁⲥ̀ⲫⲟⲧⲟⲩ ϫⲉ ⲛⲟⲃⲓ.</td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_12" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀̀ⲑⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲟⲩⲁⲓ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_13" class="text">
            <td class="coptic"> Ⲟ̀ⲩⲟϩ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡ̀⳪ ⲁϥⲡⲱϩ ϣⲁ ⲏ̀ⲗⲓⲁⲥ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲉⲕⲉⲣ ⲟⲩ ⲛ̀ⲧⲟⲕ ⲙ̀ⲡⲓⲙⲁ ⲡⲉϫⲉ ⲏ̀ⲗⲓⲁⲥ ϧⲉⲛ ⲟⲩⲕⲱϩ ⲁⲓⲕⲱϩ.</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">

<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Deuteronomy 8:11-20)
    <span class="arabic-caption">النبوة الأولي<br>(تثنية 8: 11 - 20)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from the book of Deuteronomy of Moses the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من سفر التثنية لموسى النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">"Beware that you do not forget the Lord your God by not keeping His commandments, His judgments, and His statutes which I command you today,</td>
        <td class="arabic">اِحْتَرِزْ مِنْ أَنْ تَنْسَى الرَّبَّ إِلهَكَ وَلا تَحْفَظَ وَصَايَاهُ وَأَحْكَامَهُ وَفَرَائِضَهُ التِي أَنَا أُوصِيكَ بِهَا اليَوْمَ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">lest--when you have eaten and are full, and have built beautiful houses and dwell in them;</td>
        <td class="arabic">لِئَلا إِذَا أَكَلتَ وَشَبِعْتَ وَبَنَيْتَ بُيُوتاً جَيِّدَةً وَسَكَنْتَ</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">and when your herds and your flocks multiply, and your silver and your gold are multiplied, and all that you have is multiplied;</td>
        <td class="arabic">وَكَثُرَتْ بَقَرُكَ وَغَنَمُكَ وَكَثُرَتْ لكَ الفِضَّةُ وَالذَّهَبُ وَكَثُرَ كُلُّ مَا لكَ</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">when your heart is lifted up, and you forget the Lord your God who brought you out of the land of Egypt, from the house of bondage;</td>
        <td class="arabic">يَرْتَفِعُ قَلبُكَ وَتَنْسَى الرَّبَّ إِلهَكَ الذِي أَخْرَجَكَ مِنْ أَرْضِ مِصْرَ مِنْ بَيْتِ العُبُودِيَّةِ</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">who led you through that great and terrible wilderness, in which were fiery serpents and scorpions and thirsty land where there was no water; who brought water for you out of the flinty rock;</td>
        <td class="arabic">الذِي سَارَ بِكَ فِي القَفْرِ العَظِيمِ المَخُوفِ مَكَانِ حَيَّاتٍ مُحْرِقَةٍ وَعَقَارِبَ وَعَطَشٍ حَيْثُ ليْسَ مَاءٌ. الذِي أَخْرَجَ لكَ مَاءً مِنْ صَخْرَةِ الصَّوَّانِ</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">who fed you in the wilderness with manna, which your fathers did not know, that He might humble you and that He might test you, to do you good in the end--</td>
        <td class="arabic">الذِي أَطْعَمَكَ فِي البَرِّيَّةِ المَنَّ الذِي لمْ يَعْرِفْهُ آبَاؤُكَ لِيُذِلكَ وَيُجَرِّبَكَ لِيُحْسِنَ إِليْكَ فِي آخِرَتِكَ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">then you say in your heart, 'My power and the might of my hand have gained me this wealth.'</td>
        <td class="arabic">وَلِئَلا تَقُول فِي قَلبِكَ: قُوَّتِي وَقُدْرَةُ يَدِيَ اصْطَنَعَتْ لِي هَذِهِ الثَّرْوَةَ.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">And you shall remember the Lord your God, for it is He who gives you power to get wealth, that He may establish His covenant which He swore to your fathers, as it is this day.</td>
        <td class="arabic">بَلِ اذْكُرِ الرَّبَّ إِلهَكَ أَنَّهُ هُوَ الذِي يُعْطِيكَ قُوَّةً لاِصْطِنَاعِ الثَّرْوَةِ لِيَفِيَ بِعَهْدِهِ الذِي أَقْسَمَ لآِبَائِكَ كَمَا فِي هَذَا اليَوْمِ.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">Then it shall be, if you by any means forget the Lord your God, and follow other gods, and serve them and worship them, I testify against you this day that you shall surely perish.</td>
        <td class="arabic">وَإِنْ نَسِيتَ الرَّبَّ إِلهَكَ وَذَهَبْتَ وَرَاءَ آلِهَةٍ أُخْرَى وَعَبَدْتَهَا وَسَجَدْتَ لهَا أُشْهِدُ عَليْكُمُ اليَوْمَ أَنَّكُمْ تَبِيدُونَ لا مَحَالةَ.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">As the nations which the Lord destroys before you, so you shall perish, because you would not be obedient to the voice of the Lord your God.</td>
        <td class="arabic">كَالشُّعُوبِ الذِينَ يُبِيدُهُمُ الرَّبُّ مِنْ أَمَامِكُمْ كَذَلِكَ تَبِيدُونَ لأَجْلِ أَنَّكُمْ لمْ تَسْمَعُوا لِقَوْلِ الرَّبِّ إِلهِكُمْ».</td>
    </tr>
    <tr id="table_3_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Sirach 2: 1-9)
    <span class="arabic-caption">النبوة الثانية<br>(يشوع بن سيراخ 2: 1 - 9)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">A reading from Joshua, the son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من يشوع بن سيراخ النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">My son, if you come forward to serve the Lord, prepare yourself for temptation.</td>
        <td class="arabic">إنْ أرَدتَ خِدمةَ الرّبٌ
فاَستَعِدَ يا اَبْني لِلتَّجرِبةِ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">Set your heart right and be steadfast, and do not be hasty in time of calamity.</td>
        <td class="arabic">كُنْ حازِمًا مُستَقيمَ القلبِ،
ولا تتسَرَّعْ وقتَ المَصائِبِ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">Cleave to Him and do not depart, that you may be honored at the end of your life.</td>
        <td class="arabic">تمَسَّكْ بِالرّبٌ ولا تَبتَعِدَ عَنهُ،
فتُكْرِمَ أواخِرَ حياتِكَ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">Accept whatever is brought upon you, and in changes that humble you be patient.</td>
        <td class="arabic">تقَبَّلْ ما يَحِلُّ بِكَ،
واَصْبِرْ على اَتِّضاعِ مَقامِكَ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">For gold is tested in the fire, and acceptable men in the furnace of humiliation.</td>
        <td class="arabic">فالذَّهبُ تُطَهِّرُهُ النَّارُ
وخِيرةُ النَّاسِ يُطَهِّرُهُم جَمْرُ الاتِّضاعِ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">Trust in Him, and He will help you; make your ways straight, and hope in Him.</td>
        <td class="arabic">آمِنْ بِالرّبٌ فيُساعِدَكَ.
قَوِّمْ طريقَكَ وثِقْ بِهِ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">You who fear the Lord, wait for His mercy; and turn not aside, lest you fall.</td>
        <td class="arabic">يا مَنْ تَخافُ الرّبَ اَنتَظِرْ رَحمتَهُ،
وحينَ تَسقطُ، لا تَمِلْ عَنهُ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">You who fear the Lord, trust in Him, and your reward will not fail;</td>
        <td class="arabic">يا مَنْ تَخافُ الرّبَ آمِنْ بهِ،
وأجرُكَ لن يَضيعَ،</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">You who fear the Lord, hope for good things, for everlasting joy and mercy.</td>
        <td class="arabic">يا مَنْ تَخافُ الرّبَ اَنتظِرْ خَيرًا
وسُرورًا أبَديُا ورَحْمةً.</td>
    </tr>
    <tr id="table_4_row_14" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Job 27:2 - 28:2)
    <span class="arabic-caption">النبوة الثالثة<br>(أيوب 27: 2 - 28: 2)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Job the righteous. May his blessings be with us. Amen.</td>
        <td class="arabic">من أيوب الصديق بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">"As God lives, who has taken away my justice, And the Almighty, who has made my soul bitter,</td>
        <td class="arabic">[حَيٌّ هُوَ اللهُ الَّذِي نَزَعَ حَقِّي وَالْقَدِيرُ الَّذِي أَمَرَّ نَفْسِي</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">As long as my breath is in me, And the breath of God in my nostrils,</td>
        <td class="arabic">إِنَّهُ مَا دَامَتْ نَسَمَتِي فِيَّ وَنَفْخَةُ اللهِ فِي أَنْفِي</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">My lips will not speak wickedness, Nor my tongue utter deceit.</td>
        <td class="arabic">لَنْ تَتَكَلَّمَ شَفَتَايَ إِثْماً وَلاَ يَلْفِظَ لِسَانِي بِغِشٍّ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">Far be it from me That I should say you are right; Till I die I will not put away my integrity from me.</td>
        <td class="arabic">حَاشَا لِي أَنْ أُبَرِّرَكُمْ! حَتَّى أُسْلِمَ الرُّوحَ لاَ أَعْزِلُ كَمَالِي عَنِّي.</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">My righteousness I hold fast, and will not let it go; My heart shall not reproach me as long as I live.</td>
        <td class="arabic">تَمَسَّكْتُ بِبِرِّي وَلاَ أَرْخِيهِ. قَلْبِي لاَ يُعَيِّرُ يَوْماً مِنْ أَيَّامِي.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">"May my enemy be like the wicked, And he who rises up against me like the unrighteous.</td>
        <td class="arabic">لِيَكُنْ عَدُوِّي كَالشِّرِّيرِ وَمُعَانِدِي كَفَاعِلِ الشَّرِّ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">For what is the hope of the hypocrite, Though he may gain much, If God takes away his life?</td>
        <td class="arabic">لأَنَّهُ مَا هُوَ رَجَاءُ الْفَاجِرِ عِنْدَمَا يَقْطَعُهُ عِنْدَمَا يَسْلِبُ اللهُ نَفْسَهُ؟</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">Will God hear his cry When trouble comes upon him?</td>
        <td class="arabic">أَفَيَسْمَعُ اللهُ صُرَاخَهُ إِذَا جَاءَ عَلَيْهِ ضِيقٌ؟</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">Will he delight himself in the Almighty? Will he always call on God?</td>
        <td class="arabic">أَمْ يَتَلَذَّذُ بِالْقَدِيرِ؟ هَلْ يَدْعُو اللهَ فِي كُلِّ حِينٍ؟</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">"I will teach you about the hand of God; What is with the Almighty I will not conceal.</td>
        <td class="arabic">[إِنِّي أُعَلِّمُكُمْ بِيَدِ اللهِ. لاَ أَكْتُمُ مَا هُوَ عِنْدَ الْقَدِيرِ.</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">Surely all of you have seen it; Why then do you behave with complete nonsense?</td>
        <td class="arabic">هَا أَنْتُمْ كُلُّكُمْ قَدْ رَأَيْتُمْ فَلِمَاذَا تَتَبَطَّلُونَ تَبَطُّلاً قَائِلِينَ:</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">"This is the portion of a wicked man with God, And the heritage of oppressors, received from the Almighty:</td>
        <td class="arabic">هَذَا نَصِيبُ الإِنْسَانِ الشِّرِّيرِ مِنْ عِنْدِ اللهِ وَمِيرَاثُ الْعُتَاةِ الَّذِي يَنَالُونَهُ مِنَ الْقَدِيرِ.</td>
    </tr>
    <tr id="table_5_row_16" class="text">
        <td class="english">If his children are multiplied, it is for the sword; And his offspring shall not be satisfied with bread.</td>
        <td class="arabic">إِنْ كَثُرَ بَنُوهُ فَلِلسَّيْفِ وَذُرِّيَّتُهُ لاَ تَشْبَعُ خُبْزاً.</td>
    </tr>
    <tr id="table_5_row_17" class="text">
        <td class="english">Those who survive him shall be buried in death, And their widows shall not weep,</td>
        <td class="arabic">بَقِيَّتُهُ تُدْفَنُ بِالْوَبَاءِ وَأَرَامِلُهُ لاَ تَبْكِي.</td>
    </tr>
    <tr id="table_5_row_18" class="text">
        <td class="english">Though he heaps up silver like dust, And piles up clothing like clay--</td>
        <td class="arabic">إِنْ كَنَزَ فِضَّةً كَالتُّرَابِ وَأَعَدَّ مَلاَبِسَ كَالطِّينِ</td>
    </tr>
    <tr id="table_5_row_19" class="text">
        <td class="english">He may pile it up, but the just will wear it, And the innocent will divide the silver.</td>
        <td class="arabic">فَهُوَ يُعِدُّ وَالْبَارُّ يَلْبِسُهُ وَالْبَرِئُ يَقْسِمُ الْفِضَّةَ.</td>
    </tr>
    <tr id="table_5_row_20" class="text">
        <td class="english">He builds his house like a moth, Like a booth which a watchman makes.</td>
        <td class="arabic">يَبْنِي بَيْتَهُ كَالْعُثِّ أَوْ كَمِظَلَّةٍ صَنَعَهَا الْحَارِسُ.</td>
    </tr>
    <tr id="table_5_row_21" class="text">
        <td class="english">The rich man will lie down, But not be gathered up; He opens his eyes, And he is no more.</td>
        <td class="arabic">يَضْطَجِعُ غَنِيّاً وَلَكِنَّهُ لاَ يُضَمُّ. يَفْتَحُ عَيْنَيْهِ وَلاَ يَكُونُ.</td>
    </tr>
    <tr id="table_5_row_22" class="text">
        <td class="english">Terrors overtake him like a flood; A tempest steals him away in the night.</td>
        <td class="arabic">الأَهْوَالُ تُدْرِكُهُ كَالْمِيَاهِ. لَيْلاً تَخْتَطِفُهُ الزَّوْبَعَةُ</td>
    </tr>
    <tr id="table_5_row_23" class="text">
        <td class="english">The east wind carries him away, and he is gone; It sweeps him out of his place.</td>
        <td class="arabic">تَحْمِلُهُ الشَّرْقِيَّةُ فَيَذْهَبُ وَتَجْرُفُهُ مِنْ مَكَانِهِ.</td>
    </tr>
    <tr id="table_5_row_24" class="text">
        <td class="english">It hurls against him and does not spare; He flees desperately from its power.</td>
        <td class="arabic">يُلْقِي اللهُ عَلَيْهِ وَلاَ يُشْفِقُ. مِنْ يَدِهِ يَهْرُبُ هَرْباً.</td>
    </tr>
    <tr id="table_5_row_25" class="text">
        <td class="english">Men shall clap their hands at him, And shall hiss him out of his place.</td>
        <td class="arabic">يَصْفِقُونَ عَلَيْهِ بِأَيْدِيهِمْ وَيَصْفِرُونَ عَلَيْهِ مِنْ مَكَانِهِ.</td>
    </tr>
    <tr id="table_5_row_26" class="text">
        <td class="english">"Surely there is a mine for silver, And a place where gold is refined.</td>
        <td class="arabic">[لأَنَّهُ يُوجَدُ لِلْفِضَّةِ مَعْدَنٌ وَمَوْضِعٌ لِلذَّهَبِ حَيْثُ يُمَحِّصُونَهُ.</td>
    </tr>
    <tr id="table_5_row_27" class="text">
        <td class="english">Iron is taken from the earth, And copper is smelted from ore.</td>
        <td class="arabic">الْحَدِيدُ يُسْتَخْرَجُ مِنَ التُّرَابِ وَالْحَجَرُ يَسْكُبُ نُحَاساً.</td>
    </tr>
    <tr id="table_5_row_29" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="4th Prophecy">
    <caption id="caption_table_6" class="caption">4th Prophecy<br>(1 Kings 19:9-14)
    <span class="arabic-caption">النبوة الرابعة<br>(سفر الملوك الأول 19: 9 - 14)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A reading from the first book of Kings. May its blessings be with us. Amen.</td>
        <td class="arabic">من سفر الملوك الأول بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">And there he went into a cave, and spent the night in that place; and behold, the word of the Lord came to him, and He said to him, "What are you doing here, Elijah?"</td>
        <td class="arabic">وَدَخَلَ هُنَاكَ الْمَغَارَةَ وَبَاتَ فِيهَا. وَكَانَ كَلاَمُ الرَّبِّ إِلَيْهِ: [مَا لَكَ هَهُنَا يَا إِيلِيَّا؟]</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">So he said, "I have been very zealous for the Lord God of hosts; for the children of Israel have forsaken Your covenant, torn down Your altars, and killed Your prophets with the sword. I alone am left; and they seek to take my life."</td>
        <td class="arabic">فَقَالَ: [قَدْ غِرْتُ غَيْرَةً لِلرَّبِّ إِلَهِ الْجُنُودِ، لأَنَّ بَنِي إِسْرَائِيلَ قَدْ تَرَكُوا عَهْدَكَ وَنَقَضُوا مَذَابِحَكَ وَقَتَلُوا أَنْبِيَاءَكَ بِالسَّيْفِ، فَبَقِيتُ أَنَا وَحْدِي. وَهُمْ يَطْلُبُونَ نَفْسِي لِيَأْخُذُوهَا].</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">Then He said, "Go out, and stand on the mountain before the Lord." And behold, the Lord passed by, and a great and strong wind tore into the mountains and broke the rocks in pieces before the Lord, but the Lord was not in the wind; and after the wind an earthquake, but the Lord was not in the earthquake;</td>
        <td class="arabic">فَقَالَ: [اخْرُجْ وَقِفْ عَلَى الْجَبَلِ أَمَامَ الرَّبِّ]. وَإِذَا بِالرَّبِّ عَابِرٌ وَرِيحٌ عَظِيمَةٌ وَشَدِيدَةٌ قَدْ شَقَّتِ الْجِبَالَ وَكَسَّرَتِ الصُّخُورَ أَمَامَ الرَّبِّ، وَلَمْ يَكُنِ الرَّبُّ فِي الرِّيحِ. وَبَعْدَ الرِّيحِ زَلْزَلَةٌ، وَلَمْ يَكُنِ الرَّبُّ فِي الزَّلْزَلَةِ.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">and after the earthquake a fire, but the Lord was not in the fire; and after the fire a still small voice.</td>
        <td class="arabic">وَبَعْدَ الزَّلْزَلَةِ نَارٌ، وَلَمْ يَكُنِ الرَّبُّ فِي النَّارِ. وَبَعْدَ النَّارِ صَوْتٌ مُنْخَفِضٌ خَفِيفٌ.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">So it was, when Elijah heard it, that he wrapped his face in his mantle and went out and stood in the entrance of the cave. Suddenly a voice came to him, and said, "What are you doing here, Elijah?"</td>
        <td class="arabic">فَلَمَّا سَمِعَ إِيلِيَّا لَفَّ وَجْهَهُ بِرِدَائِهِ وَخَرَجَ وَوَقَفَ فِي بَابِ الْمَغَارَةِ، وَإِذَا بِصَوْتٍ إِلَيْهِ يَقُولُ: [مَا لَكَ هَهُنَا يَا إِيلِيَّا؟]</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">And he said, "I have been very zealous for the Lord God of hosts; because the children of Israel have forsaken Your covenant, torn down Your altars, and killed Your prophets with the sword. I alone am left; and they seek to take my life."</td>
        <td class="arabic">فَقَالَ: [غِرْتُ غَيْرَةً لِلرَّبِّ إِلَهِ الْجُنُودِ لأَنَّ بَنِي إِسْرَائِيلَ قَدْ تَرَكُوا عَهْدَكَ وَنَقَضُوا مَذَابِحَكَ وَقَتَلُوا أَنْبِيَاءَكَ بِالسَّيْفِ، فَبَقِيتُ أَنَا وَحْدِي، وَهُمْ يَطْلُبُونَ نَفْسِي لِيَأْخُذُوهَا].</td>
    </tr>
    <tr id="table_6_row_11" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(119:154-155)
        <span class="arabic-caption">المزمور قبطياً<br>(118: 118 ، 119)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Plead my cause and ransom me;</td>
            <td class="coptic">Ⲙⲁϩⲁⲡ ⲉ̀ⲡⲁϩⲁⲡ ⲟⲩⲟϩ ⲥⲟⲧⲧ :</td>
            <td class="arabic">أحكم حكمي ونجنى</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">vive me because of Your word.</td>
            <td class="coptic">ⲉⲑⲃⲉ ⲡⲉⲕⲥⲁϫⲓ ⲙⲁⲣⲓⲱⲛϧ :</td>
            <td class="arabic">من أجل كلامك أحيني</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Salvation is far from sinners;</td>
            <td class="coptic"> Ϥ̀ⲟⲩⲏ̀ⲟⲩ ⲥⲁⲃⲟⲗ ⲛ̀ⲛⲓⲣⲉϥ ⲉ̀ⲣⲛⲟⲃⲓ ⲛ̀ϫⲉ ⲡⲓⲟⲩϫⲁⲓ :</td>
            <td class="arabic">بعيد الخلاص من الخطاة</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">For they have not searched out Your statutes.</td>
            <td class="coptic">ϫⲉ ⲛⲉⲕⲙⲉⲑⲙⲏⲓ ⲙ̀ⲡⲟⲩⲕⲱϯ ⲛ̀ⲥⲱⲟⲩ</td>
            <td class="arabic">لأنهم لم يطلبوا حقوقك.</td>
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
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉⲃ̀ⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲟⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_18_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_18_row_2" class="text">
            <td class="coptic">Ⲓⲗ̅ⲏ̅ⲙ Ⲓⲗ̅ⲏ̅ⲙ ⲑⲏⲉⲧϧⲱⲧⲉⲃ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲟⲩⲟϩ ⲉ̀ⲧϩⲓⲱ̀ⲛⲓ ⲉ̀ϫⲉⲛ ⲛⲏⲉ̀ⲧⲁⲩⲟⲩⲟⲣⲡⲟⲩ ϩⲁⲣⲟⲥ : ⲟⲩⲙⲏϣ ⲛ̀ⲥⲟⲡ ⲁⲓⲟⲩⲱϣ ⲉ̀ⲑⲟⲩⲏⲧ ⲛⲉϣⲏⲣⲓ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩϩⲁⲗⲏⲧ ⲉ̀ϣⲁϥⲑⲱⲟⲩϯ ⲛ̀ⲛⲉϥⲙⲁⲥ ⲉ̀ϧⲟⲩⲛ ϧⲁⲛⲉϥⲧⲉⲛϩ ⲟⲩⲟϩ ⲙ̀ⲡⲉⲧⲉⲛⲟⲩⲱϣ : ϩⲏⲡⲡⲉ ϯⲛⲁⲭⲱ ⲙ̀ⲡⲉⲧⲛⲏⲓ ⲛⲱⲧⲉⲛ ⲉϥϣⲱϥ. ϯϫⲱ ⲅⲁⲣ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ ϫⲉ ⲛ̀ⲛⲉⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲟⲓ ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ϣⲁⲧⲉⲧⲉⲛϫⲟⲥ ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀⳪ : Ⲟⲩⲟϩ ⲉ̀ⲧⲁϥⲓ̀ ⲟⲩⲟϩ ⲁⲩⲓ̀ ϩⲁⲣⲟϥ ⲛ̀ϫⲉ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ ⲉⲩⲧⲁⲙⲟ ⲙ̀ⲙⲟϥ ⲛ̀ⲛⲓⲕⲱⲧ ⲛ̀ⲧⲉ ⲡⲓⲉⲣⲫⲉⲓ :<br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(119:154-155)
    <span class="arabic-caption">المزمور<br>(118: 118 ، 119)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Plead my cause and ransom me; Revive me because of Your word.</td>
        <td class="arabic">أحكم حكمى ونجنى من أجل كلامك أحينى بعيد</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">Salvation is far from sinners; For they have not searched out Your statutes.</td>
        <td class="arabic">الخلاص من الخطاة لانهم لم يطلبوا حقوقك.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(Matthew 23:37-24:2)
    <span class="arabic-caption">الانجيل<br>(متى 23: 37 و 24: 2)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">"O Jerusalem, Jerusalem, the one who kills the prophets and stones those who are sent to her! How often I wanted to gather your children together, as a hen gathers her chicks under her wings, but you were not willing!</td>
        <td class="arabic">«يَا أُورُشَلِيمُ يَا أُورُشَلِيمُ يَا قَاتِلَةَ الأَنْبِيَاءِ وَرَاجِمَةَ الْمُرْسَلِينَ إِلَيْهَا كَمْ مَرَّةٍ أَرَدْتُ أَنْ أَجْمَعَ أَوْلاَدَكِ كَمَا تَجْمَعُ الدَّجَاجَةُ فِرَاخَهَا تَحْتَ جَنَاحَيْهَا وَلَمْ تُرِيدُوا.</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">See! Your house is left to you desolate;</td>
        <td class="arabic">هُوَذَا بَيْتُكُمْ يُتْرَكُ لَكُمْ خَرَاباً!</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">for I say to you, you shall see Me no more till you say, 'Blessed is He who comes in the name of the Lord!' "</td>
        <td class="arabic">لأَنِّي أَقُولُ لَكُمْ: إِنَّكُمْ لاَ تَرَوْنَنِي مِنَ الآنَ حَتَّى تَقُولُوا: مُبَارَكٌ الآتِي بِاسْمِ الرَّبِّ!».</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">Then Jesus went out and departed from the temple, and His disciples came up to show Him the buildings of the temple.</td>
        <td class="arabic">ثُمَّ خَرَجَ يَسُوعُ وَمَضَى مِنَ الْهَيْكَلِ فَتَقَدَّمَ تَلاَمِيذُهُ لِكَيْ يُرُوهُ أَبْنِيَةَ الْهَيْكَلِ.</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">And Jesus said to them, "Do you not see all these things? Assuredly, I say to you, not one stone shall be left here upon another, that shall not be thrown down."</td>
        <td class="arabic">فَقَالَ لَهُمْ يَسُوعُ: «أَمَا تَنْظُرُونَ جَمِيعَ هَذِهِ؟ اَلْحَقَّ أَقُولُ لَكُمْ إِنَّهُ لاَ يُتْرَكُ هَهُنَا حَجَرٌ عَلَى حَجَرٍ لاَ يُنْقَضُ!»</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_11" class="intro">
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
        <td class="english">The exposition of The THIRD Hour of the DAY of TUESDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الثالثة من يوم الثلاثاء من البصخة المقدسة بركتها تكون معنا. آمين</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">Several times, the Lord said “O Jerusalem, How often I wanted to gather your children together, as the hen gathers her chicks under her wings, but you were not willing!”</td>
        <td class="arabic">كم من مرة، قال الرب، أردت أن أجمع بنيك يا أورشليم مثل الطائر الذى يجمع فراخه تحت جناحيه ولم تريدوا؟</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">Behold,  “I will leave you your house desolate, says the Lord, until the end.”</td>
        <td class="arabic">ها أنا أترك لكم بيتكم خراباً، قال الرب، إلى الانقضاء.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">When the disciples heard the prophecy of the prophet and the Savior, they showed him the temple, venerated stones, and sanctuaries. He responded to them saying,</td>
        <td class="arabic">فلما سمع التلاميذ نبوة النبى والمخلص، أروه بناء الهيكل والحجارة المكرمة والمحرمات، فأجابهم قائلاً:</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">“Not one stone shall be left here upon another that shall not be thrown down.”</td>
        <td class="arabic">أنه لا يترك ههنا حجر على حجر إلا وينقض.</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">Verily, this happened forty years after the ascension of our Lord.</td>
        <td class="arabic">فبالحقيقة صار هذا من بعد أربعين سنة لصعود مخلصنا.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">The Romans came, devastated the city and demolished the temple, which remains to this day.</td>
        <td class="arabic">جاء الروم وهدموا المدينة، وخربوا الهيكل إلى اليوم</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">One million and two hundred thousand Jewish men were killed by the sword.</td>
        <td class="arabic">وقتلوا مائة وعشرين ربوة من رجال اليهود بحد السيف.</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">God’s wrath descended upon them and His damnation covered their faces.</td>
        <td class="arabic">وحل عليهم غضب الله، وغطت اللعنة وجوههم.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>



`;

};