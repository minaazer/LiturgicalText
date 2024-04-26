import { hourIntro, paschalPraise1 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOM11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of MONDAY","يوم الإثنين");
    const paschalPraiseHtml = paschalPraise1("4","14","15","ELEVENTH","الحادية عشر","DAY of MONDAY","يوم الإثنين");
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
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ): </td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛ̀ϫⲉ Ⲡ̀̅ⲟ̅ⲥ ϫⲉ ⲁϣⲡⲉ ⲡⲓϫⲱⲙ ⲛ̀ϩⲓⲟⲩⲒ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲧⲉⲛⲙⲁⲩ ⲉ̀ⲧⲁⲓ ϩⲓⲧⲥ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲏⲥⲟⲩ ⲛ̀ⲧⲉ Ⲥⲓⲣⲁⲭ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ (ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ)</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲑ̀ⲛⲟⲩⲛⲓ ⲅⲁⲣ ⲛ̀ϯⲥⲟⲫⲓⲁ̀ ⲡⲉ ⲡ̀ⲉⲣϩⲟϯ ϧⲁⲧϩⲏ ⲙⲠ̅ⲟ̅ⲥ ⲟⲩⲟϩ ϩⲁⲛⲙⲏϣ ⲛ̀ⲉϩⲟⲟⲩ ⲛⲉ ⲛⲉⲥⲕ̀ⲗⲁⲇⲟⲥ.</td>
        </tr>
        <tr id="table_2_row_20" class="intro">
            <td class="coptic">Ⲟⲩⲱⲟ̀ⲩ ⲛϯ̀ⲧⲣ̀ⲓⲁⲥ ⲉⲑ̀ⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉⲛ̀ⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛⲧ̀ⲉ ⲛⲓⲉⲛ̀ⲉϩ ⲧⲏⲣⲟⲩ: ⲁⲙ̀ⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
<table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 50:1-3)
    <span class="arabic-caption">النبوة الأولي<br>(أشعياء 50: 1 - 3)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Thus says the Lord: "Where is the certificate of your mother's divorce, Whom I have put away? Or which of My creditors is it to whom I have sold you? For your iniquities you have sold yourselves, And for your transgressions your mother has been put away.</td>
        <td class="arabic">هَكَذَا قَالَ الرَّبُّ: «أَيْنَ كِتَابُ طَلاَقِ أُمِّكُمُ الَّتِي طَلَّقْتُهَا أَوْ مَنْ هُوَ مِنْ غُرَمَائِي الَّذِي بِعْتُهُ إِيَّاكُمْ؟ هُوَذَا مِنْ أَجْلِ آثَامِكُمْ قَدْ بُعْتُمْ وَمِنْ أَجْلِ ذُنُوبِكُمْ طُلِّقَتْ أُمُّكُمْ.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Why, when I came, was there no man? Why, when I called, was there none to answer? Is My hand shortened at all that it cannot redeem? Or have I no power to deliver? Indeed with My rebuke I dry up the sea, I make the rivers a wilderness; Their fish stink because there is no water, And die of thirst.</td>
        <td class="arabic">لِمَاذَا جِئْتُ وَلَيْسَ إِنْسَانٌ نَادَيْتُ وَلَيْسَ مُجِيبٌ؟ هَلْ قَصَرَتْ يَدِي عَنِ الْفِدَاءِ وَهَلْ لَيْسَ فِيَّ قُدْرَةٌ لِلإِنْقَاذِ؟ هُوَذَا بِزَجْرَتِي أُنَشِّفُ الْبَحْرَ. أَجْعَلُ الأَنْهَارَ قَفْراً. يُنْتِنُ سَمَكُهَا مِنْ عَدَمِ الْمَاءِ وَيَمُوتُ بِالْعَطَشِ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">I clothe the heavens with blackness, And I make sackcloth their covering."</td>
        <td class="arabic">أُلْبِسُ السَّمَاوَاتِ ظَلاَماً وَأَجْعَلُ الْمِسْحَ غِطَاءَهَا».</td>
    </tr>
    <tr id="table_3_row_8" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Sirach 1:20-30)
    <span class="arabic-caption">النبوة الثانية<br>(يشوع بن سيراخ 1: 20-30)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">The beginning of Joshua, son of Sirach the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">بدء يشوع ابن سيراخ بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">To fear the Lord is the root of wisdom,
and her branches are long life.</td>
        <td class="arabic">أصلُ الحِكمةِ مَخافةُ الرّبٌ وفُروعُها حياةٌ طويلَةٌ.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">Unrighteous anger cannot be justified,
for a man's anger tips the scale to his ruin.</td>
        <td class="arabic">الغضَبُ بلا سبَبٍ لا يتَبَرَّرُ وبِصاحِبِهِ يُؤَدِّي إلى السُّقوطِ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">A patient man will endure until the right moment, and then joy will burst forth for him.</td>
        <td class="arabic">الصَّبورُ يتَحَمَّلُ إلى أنْ يَحينَ الوقتُ، ولا بُدَ أَنْ يُعاودَهُ الفرَحُ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">He will hide his words until the right moment, and the lips of many will tell of his good sense.</td>
        <td class="arabic">يَصمُتُ حتـى يَجيءَ الوقتُ، فيَمتَدِحُ حِكمتَهُ مُعظَمُ النَّاسِ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">In the treasuries of wisdom are wise sayings, but godliness is an abomination to a sinner.</td>
        <td class="arabic">في خَزائِنِ الحِكمةِ أقوالٌ مأثورةٌ: لكِنِ التَّقوى رجسٌ عِندَ الخاطئِ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">If you desire wisdom, keep the commandments, and the Lord will supply it for you.</td>
        <td class="arabic">إنْ شِئْتَ الحِكمةَ، فاَحْفَظِ الوصايا. وبِها يَجودُ الرّبُّ علَيكَ.</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">For the fear of the Lord is wisdom and instruction, and he delights in fidelity and meekness.</td>
        <td class="arabic">مَخافةُ الرّبٌ حِكمةٌ وتأْديبٌ، وَالإيمانُ والوداعةُ يُرضِيانِهِ.</td>
    </tr>
    <tr id="table_4_row_11" class="text">
        <td class="english">Do not disobey the fear of the Lord; do not approach him with a divided mind.</td>
        <td class="arabic">لا تتوقَّفْ عَنْ مَخافةِ الرّبٌ، وبِكُلٌ قلبِكَ تقَرَّبْ إليهِ.</td>
    </tr>
    <tr id="table_4_row_12" class="text">
        <td class="english">Be not a hypocrite in men's sight, and keep watch over your lips.</td>
        <td class="arabic">لا تكُنْ مُرائيًا معَ النَّاسِ، واَنْتَبِهْ لِكلامِ شَفَتَيكَ.</td>
    </tr>
    <tr id="table_4_row_13" class="text">
        <td class="english">Do not exalt yourself lest you fall,
and thus bring dishonor upon yourself.
The Lord will reveal your secrets
and cast you down in the midst of the congregation, because you did not come in the fear of the Lord, and your heart was full of deceit.</td>
        <td class="arabic">لا تتكَبَّرْ لِئلاَ تَسقُطَ وعلى نفْسِكَ تَجلِبَ الذُلَ، فيَكشِفَ الرّبُّ خَفاياكَ ويُذِلَّكَ أمامَ الجَميعِ لأنَّكَ لم تَخَفِ الرّبَ، وقلبُكَ مُمْتَلئٌ بِالمكْرِ.</td>
    </tr>
    <tr id="table_4_row_15" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_6" title="Homily">
    <caption id="caption_table_6" class="caption">Homily<br>(Abba Shenouda the Archimandrite)
    <span class="arabic-caption">العظة<br>(أنبا شنودة رئيس المتوحدين)</span></caption>
    <tr id="table_6_row_1" class="intro">
        <td class="english">A homily of our holy father Abba Shenouda the Archimandrite. May his blessings be with us. Amen.</td>
        <td class="coptic">Ⲟⲩⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̅ⲑ̅ⲩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">عظة لأبينا القديس أنبا شنودة رئيس المتوحدين بركته تكون معنا آمين.</td>
    </tr>
    <tr id="table_6_row_4" class="text">
        <td class="english">Occasionally there are some deeds, which we may think are good while in God’s eyes they are wicked.</td>
        <td class="arabic">قد توجد أعمال نخالها أنها صالحة ولكنها رديئة عند الله.</td>
    </tr>
    <tr id="table_6_row_5" class="text">
        <td class="english">For example the unqualified tolerance of sinners in holy places may lead them to be indifferent to sin.</td>
        <td class="arabic">وذلك إننا نتغاضى عن بعضنا بعضاً فنخطئ فى المواضع المقدسة.</td>
    </tr>
    <tr id="table_6_row_6" class="text">
        <td class="english">The Lord did not plant good trees and bad trees in paradise but only good trees.</td>
        <td class="arabic">لأن الرب لم يغرس فى الفردوس الأشجار الصالحة والغير الصالحة بل غرسه من الاشجار الصالحة فقط.</td>
    </tr>
    <tr id="table_6_row_7" class="text">
        <td class="english">He did not plant fruitless trees with bad fruits.</td>
        <td class="arabic">ولم يغرس فيه أشجاراً غير مثمرة أو رديئة الثمر.</td>
    </tr>
    <tr id="table_6_row_8" class="text">
        <td class="english">Even man himself when he disobeyed the commandment, He was not indifferent about man’s inequity but expelled him from paradise.</td>
        <td class="arabic">وليس هذا فقط. بل والناس أنفسهم الذين جعلهم هناك. عندما خالفوا لم يحتملهم بل أخرجهم منه.</td>
    </tr>
    <tr id="table_6_row_9" class="text">
        <td class="english">From this we can see dear beloved, that the houses of the Lord should not be filled with bad and good people.</td>
        <td class="arabic">فمن هذا إعلموا أيها الاخوة الاحباء أنه لا يجب أن نملأ مساكن الله المقدسة من الناس الاشرار والصالحين.</td>
    </tr>
    <tr id="table_6_row_10" class="text">
        <td class="english">As is the case in the world where the saints and sinners, the unjust and the impure mingle together.</td>
        <td class="arabic">كما فى العالم المملوء من الخطاة والظالمين والقديسين والانجاس.</td>
    </tr>
    <tr id="table_6_row_11" class="text">
        <td class="english">It is incumbent on us to remind those who come to the house of the Lord to behave appropriately.</td>
        <td class="arabic">ولكن الذين يخطئون لا يتركهم فيها بل يخرجهم.</td>
    </tr>
    <tr id="table_6_row_12" class="text">
        <td class="english">I know that the whole earth is God's, but if we make His house just like the rest of the earth what is going to distinguish the house of the Lord from the rest.</td>
        <td class="arabic">أنا أعرف أن الأرض كلها هى للرب. فاذا كان بيته كباقى الأرض. فما هى ميزته إذن على غيره.</td>
    </tr>
    <tr id="table_6_row_13" class="text">
        <td class="english">If I as a servant of God commit the same bad deeds as the wicked then I do not deserve to be called a servant of God.</td>
        <td class="arabic">فان كنت وأنا الكاهن أعمل الشر كما يعمله الاشرار على الأرض فلا يحق لى أن ادعى كاهناً</td>
    </tr>
    <tr id="table_6_row_14" class="text">
        <td class="english">For we often sin and are unable to judge ourselves with the same standard we judge others.</td>
        <td class="arabic">لانه مراراً كثيرة نخطئ ولا نعرف كيف ندين أنفسنا بما نقول.</td>
    </tr>
    <tr id="table_6_row_15" class="text">
        <td class="english">You see no one can fill your place with dirt unless they notice your lack of interest in it.</td>
        <td class="arabic">لا يتجرأ أحد أن يملأ بيتك قذارة إلا إذا رأى منك التهاون</td>
    </tr>
    <tr id="table_6_row_16" class="text">
        <td class="english">Just like the king’s pages; they cannot let everyone in the king’s house whether they honor the king’s decree or whether they ignore them without the king’s permission.</td>
        <td class="arabic">ولا حجاب الملك يتجرأون أن يدخلوا بكل إنسان إلى بيته من الحافظين مراسيمه والمخالفين لها الا بأمره.</td>
    </tr>
    <tr id="table_6_row_17" class="text">
        <td class="english">If they deviate from this, they receive punishment.</td>
        <td class="arabic">ومتى عملوا بخلاف ذلك يعاقبون.</td>
    </tr>
    <tr id="table_6_row_19" class="intro">
        <td class="english">We conclude the homily of our holy father Abba Shenouda, the Archimandrite who enlightened our minds and our hearts. In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
        <td class="coptic">Ⲙⲁⲣⲉⲛⲉⲣ ⲥ̀ⲫ̀ⲣⲁϫⲓⲍⲓⲛ ⲛ̀ϯⲕⲁⲧⲏⲭⲏⲥⲓⲥ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏ ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ ⲛⲉⲙ ⲛⲓⲃⲁⲗ ⲛ̀ⲧⲉ ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ ⲉ̅ⲑ̅ⲩ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">فلنختم موعظة أبينا القديس أنبا شنودة رئيس المتوحدين الذى أنار عقولنا وعيون قلوبنا باسم الآب والابن والروح القدس الاله الواحد آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_16" title="Coptic Psalm">
        <caption class="caption" id="caption_table_16">Coptic Psalm<br>(13:3-4)
        <span class="arabic-caption">المزمور قبطياً<br>(12: 4)</span></caption>

        <tr id="table_16_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_16_row_1" class="text">
            <td class="english">Consider and hear me, O Lord my God;</td>
            <td class="coptic">Ⲥⲟⲙⲥ ⲥⲱⲧⲉⲙ ⲉⲣⲟⲓ ⲡϬⲟⲓⲥ ⲡⲁⲛⲟⲩϯ :</td>
            <td class="arabic">انظر واستجب لي يا ربى والهى</td>
        </tr>
        <tr id="table_16_row_2" class="text">
            <td class="english">Enlighten my eyes, Lest I sleep the sleep of death;</td>
            <td class="coptic">ⲙⲁⲫⲟⲩⲱⲓⲛⲓ ⲛⲛⲁⲃⲁⲗ ⲙⲏⲡⲱⲥ ⲛⲧⲁϩⲱⲣⲡ ϧⲉⲛ ⲫⲙⲟⲩ:</td>
            <td class="arabic">انر عيني لئلا أنام في الموت.</td>
        </tr>
        <tr id="table_16_row_3" class="text">
            <td class="english">Lest my enemy say,</td>
            <td class="coptic">ⲙⲏⲡⲟⲧⲉ ⲛⲧⲉ ⲡⲁϫⲁϫⲓ ϫⲟⲥ :</td>
            <td class="arabic">لئلا يقول عدوى</td>
        </tr>
        <tr id="table_16_row_4" class="text">
            <td class="english">I have prevailed against him.</td>
            <td class="coptic">ϫⲉ ⲁⲓϫⲉⲙϫⲟⲙ ⲟⲩⲃⲏϥ</td>
            <td class="arabic">انى قد قويت عليه</td>
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
            <td class="coptic">Ⲁⲙⲏⲛ ⲁⲙⲏⲛ ϯϫⲱ ⲙⲙⲟⲥ ⲛⲱⲧⲉⲛ ϫⲉ ⲉϣⲱⲡ ⲁⲣⲉϣⲁⲛ ⲟⲩⲁⲓ ⲁⲣⲉϩ ⲉⲡⲁⲥⲁϫⲓ ⲛⲛⲉϥⲛⲁⲩ ⲉⲫⲙⲟⲩ ϣⲁⲉⲛⲉϩ: Ⲡⲉϫⲉ ⲛⲓⲓⲟⲩⲇⲁⲓ ⲛⲁϥ ϫⲉ ϯⲛⲟⲩ ⲁⲛⲉⲙⲓ ϫⲉ ⲟⲩⲟⲛ ⲟⲩⲇⲉⲙⲱⲛ ⲛⲉⲙⲁⲕ : Ⲁⲃⲣⲁⲁⲙ ⲁϥⲙⲟⲩ ⲛⲉⲙ ⲛⲓⲕⲉⲡⲣⲟⲫⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛⲑⲟⲕ ⲕϫⲱⲙⲙⲟⲥ ϫⲉ ⲫⲏⲉⲑⲛⲁⲁⲣⲉϩ ⲉⲡⲁⲥⲁϫⲓ ⲛⲛⲉϥϫⲉⲙϯⲡⲓ ⲙⲫⲙⲟⲩ ϣⲁⲉⲛⲉϩ : Ⲙⲏ ⲛⲑⲟⲕ ⲟⲩⲛⲓϣϯ ⲛⲑⲟⲕ ⲉⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ ⲫⲏⲉⲧⲁϥⲙⲟⲩ ⲛⲉⲙ ⲛⲓⲕⲉⲡⲣⲟⲫⲏⲧⲏⲥ ⲁⲩⲙⲟⲩ ⲕⲓⲣⲓ ⲙⲙⲟⲕ ⲛⲛⲓⲙ Ⲁϥⲉⲣⲟⲩⲱ ⲛϫⲉ Ⲓ̅ⲏ̅ⲥ ⲉϥϫⲱ ⲙⲙⲟⲥ ϫⲉ ⲉϣⲱⲡ ⲁⲛⲟⲕ ⲁⲓϣⲁⲛ ϯⲱⲟⲩ ⲛⲏⲓ ⲙⲙⲁⲩⲁⲧ ⲡⲁⲱⲟⲩ ϩⲗⲓ ⲁⲛ ⲡⲉ: ϥϣⲟⲡⲛϫⲉ ⲡⲁⲓⲱⲧ ⲉⲑⲛⲁϯⲱⲟⲩ ⲛⲏⲓ. <br>... Ⲟⲩⲱϣⲧ ⲙⲡ̀ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
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
    <caption id="caption_table_19" class="caption">Psalm<br>(13:3-4)
    <span class="arabic-caption">المزمور<br>(12: 4)</span></caption>
    <tr id="table_19_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_19_row_4" class="text">
        <td class="english">Consider and hear me, O Lord my God; Enlighten my eyes, Lest I sleep the sleep of death;</td>
        <td class="arabic">انظر واستجب لى يا ربى والهى انر عينى لئلا أنام فى الموت.</td>
    </tr>
    <tr id="table_19_row_5" class="text">
        <td class="english">Lest my enemy say, "I have prevailed against him."</td>
        <td class="arabic">لئلا يقول عدوى انى قد قويت عليه.</td>
    </tr>
    <tr id="table_19_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_20" title="Gospel">
    <caption id="caption_table_20" class="caption">Gospel<br>(John 8:51-59)
    <span class="arabic-caption">الانجيل<br>(يوحنا 8: 51 - 59)</span></caption>
    <tr id="table_20_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_20_row_4" class="text">
        <td class="english">Most assuredly, I say to you, if anyone keeps My word he shall never see death."</td>
        <td class="arabic">اَلْحَقَّ الْحَقَّ أَقُولُ لَكُمْ: إِنْ كَانَ أَحَدٌ يَحْفَظُ كلاَمِي فَلَنْ يَرَى الْمَوْتَ إِلَى الأَبَدِ».</td>
    </tr>
    <tr id="table_20_row_5" class="text">
        <td class="english">Then the Jews said to Him, "Now we know that You have a demon! Abraham is dead, and the prophets; and You say, 'If anyone keeps My word he shall never taste death.'</td>
        <td class="arabic">فَقَالَ لَهُ الْيَهُودُ: «الآنَ عَلِمْنَا أَنَّ بِكَ شَيْطَاناً. قَدْ مَاتَ إِبْرَاهِيمُ وَالأَنْبِيَاءُ وَأَنْتَ تَقُولُ: «إِنْ كَانَ أَحَدٌ يَحْفَظُ كلاَمِي فَلَنْ يَذُوقَ الْمَوْتَ إِلَى الأَبَدِ».</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Are You greater than our father Abraham, who is dead? And the prophets are dead. Whom do You make Yourself out to be?"</td>
        <td class="arabic">أَلَعَلَّكَ أَعْظَمُ مِنْ أَبِينَا إِبْرَاهِيمَ الَّذِي مَاتَ. وَالأَنْبِيَاءُ مَاتُوا. مَنْ تَجْعَلُ نَفْسَكَ؟»</td>
    </tr>
    <tr id="table_20_row_7" class="text">
        <td class="english">Jesus answered, "If I honor Myself, My honor is nothing. It is My Father who honors Me, of whom you say that He is your God.</td>
        <td class="arabic">أَجَابَ يَسُوعُ: «إِنْ كُنْتُ أُمَجِّدُ نَفْسِي فَلَيْسَ مَجْدِي شَيْئاً. أَبِي هُوَ الَّذِي يُمَجِّدُنِي الَّذِي تَقُولُونَ أَنْتُمْ إِنَّهُ إِلَهُكُمْ</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">Yet you have not known Him, but I know Him. And if I say, 'I do not know Him,' I shall be a liar like you; but I do know Him and keep His word.</td>
        <td class="arabic">وَلَسْتُمْ تَعْرِفُونَهُ. وَأَمَّا أَنَا فَأَعْرِفُهُ. وَإِنْ قُلْتُ إِنِّي لَسْتُ أَعْرِفُهُ أَكُونُ مِثْلَكُمْ كَاذِباً لَكِنِّي أَعْرِفُهُ وَأَحْفَظُ قَوْلَهُ.</td>
    </tr>
    <tr id="table_20_row_9" class="text">
        <td class="english">Your father Abraham rejoiced to see My day, and he saw it and was glad."</td>
        <td class="arabic">أَبُوكُمْ إِبْرَاهِيمُ تَهَلَّلَ بِأَنْ يَرَى يَوْمِي فَرَأَى وَفَرِحَ».</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">Then the Jews said to Him, "You are not yet fifty years old, and have You seen Abraham?"</td>
        <td class="arabic">فَقَالَ لَهُ الْيَهُودُ: «لَيْسَ لَكَ خَمْسُونَ سَنَةً بَعْدُ أَفَرَأَيْتَ إِبْرَاهِيمَ؟»</td>
    </tr>
    <tr id="table_20_row_11" class="text">
        <td class="english">Jesus said to them, "Most assuredly, I say to you, before Abraham was, I AM."</td>
        <td class="arabic">قَالَ لَهُمْ يَسُوعُ: «الْحَقَّ الْحَقَّ أَقُولُ لَكُمْ: قَبْلَ أَنْ يَكُونَ إِبْرَاهِيمُ أَنَا كَائِنٌ».</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Then they took up stones to throw at Him; but Jesus hid Himself and went out of the temple, going through the midst of them, and so passed by.</td>
        <td class="arabic">فَرَفَعُوا حِجَارَةً لِيَرْجُمُوهُ. أَمَّا يَسُوعُ فَاخْتَفَى وَخَرَجَ مِنَ الْهَيْكَلِ مُجْتَازاً فِي وَسْطِهِمْ وَمَضَى هَكَذَا.</td>
    </tr>
    <tr id="table_20_row_13" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_20_row_15" class="intro">
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
        <td class="english">The exposition of the ELEVENTH Hour of the DAY of MONDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من يوم الاثنين من البصخة المقدسة بركتها تكون معنا، آمين.</td>
    </tr>
    <tr id="table_22_row_4" class="text">
        <td class="english">O Jesus the True Light that shines for all nations with the exception of the Jews for they strayed away from Him.</td>
        <td class="arabic">أيها النور الحقيقى الذى يضئ ويملأ كل مكان فى المسكونة.  الذى هو يسوع النور الحقيقى، الذى يضئ لجميع الأمم.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">When He revealed Himself to them and told them that those who believe in Him shall live forever,</td>
        <td class="arabic">أما هو فأعلن لهم قائلاً: أن من يؤمن به لن يموت إلى الأبد.</td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">the ignorant and trespassers of the law accused Him, that by Satan, He exorcizes Demons.</td>
        <td class="arabic">اسمعوا كيف أن الجهال ومخالفى الناموس قالوا أن معه شيطان،</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">They said to Him, “Abraham died and the prophets thereafter, how is it possible that those who believe in You never die?”</td>
        <td class="arabic">فان ابراهيم قد مات والأنبياء أيضاً، فكيف لا يموت الذى يؤمن بك؟!</td>
    </tr>
    <tr id="table_22_row_8" class="text">
        <td class="english">He replied, “If I glorify Myself, then My glory is meaningless. I have who glorifies Me.”</td>
        <td class="arabic">- ان أنا مجدت نفسى فليس مجدى شيئاً. لى من يمجدنى.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">They replied, “You think you are greater than our patriarch Abraham and his descendants who all died?</td>
        <td class="arabic">- ألعلك أعظم من أبينا ابراهيم ومن نسله الذين ذاقوا الموت؟</td>
    </tr>
    <tr id="table_22_row_10" class="text">
        <td class="english">You are not even fifty years old. How could you have seen Abraham?”</td>
        <td class="arabic">ليس لك خمسون سنة من الزمان فهل رأيت ابراهيم؟ من يصدقك؟</td>
    </tr>
    <tr id="table_22_row_11" class="text">
        <td class="english">The Savior said, “Truly before Abraham was, I am.”</td>
        <td class="arabic">نطق المخلص بالحق، أنه كائن من قبل أن يكون ابراهيم.</td>
    </tr>
    <tr id="table_22_row_12" class="text">
        <td class="english">We, God’s new nation, believe in Him and observe His commandments.</td>
        <td class="arabic">نحن أيضاً نؤمن ـ معشر الشعوب الجديدة ـ ونواظب على وصاياه فى أفواهنا،</td>
    </tr>
    <tr id="table_22_row_13" class="text">
        <td class="english">We confess by word and in the depth of our hearts that the True Word, the Righteous Master is Eternal,</td>
        <td class="arabic">ونعترف من عمق قلوبنا بالكلمة الحقيقى الذى للآب الضابط الكل.</td>
    </tr>
    <tr id="table_22_row_14" class="text">
        <td class="english">with the Holy Spirit the Comforter. Despite all that He did to teach them,</td>
        <td class="arabic">أن الصالح الكائن منذ البدء مع الروح القدس المعزى، لم يزل يخبر الجهال المملوئين إثماً،</td>
    </tr>
    <tr id="table_22_row_15" class="text">
        <td class="english">the ignorant rejected this great blessing as well as the many miracles He performed among them.</td>
        <td class="arabic">المخالفين، الأبناء المرذولين، فجحدوا هذه النعمة العظيمة والعجائب الجزيلة التى أظهرها فيهم</td>
    </tr>
    <tr id="table_22_row_16" class="text">
        <td class="english">They did not realize that He was their Savior according to the prophecies.</td>
        <td class="arabic">ولم يفهموا أنه هو مخلصهم كما قال الأنبياء،</td>
    </tr>
    <tr id="table_22_row_17" class="text">
        <td class="english">They renounced, rejected, and strayed away from Him.</td>
        <td class="arabic">فجحدوه ولم يقبلوه، ورفضوه وصاروا بغير إله.</td>
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