import { hourIntro, paschalPraise2 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, evnotiNaiNan, endOfServiceHymn , cross} from "../repeatedPrayers";

export const DOTH11 = () => {
    const hourIntroHtml = hourIntro("ELEVENTH","الحادية عشر","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const paschalPraiseHtml = paschalPraise2("4","8","9","ELEVENTH","الحادية عشر","DAY of COVENANT THURSDAY","يوم خميس العهد");
    const copticGospelIntroHtml = copticGospelIntro("11");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("15");
    const expositionConclusionHtml = expositionConclusion("17");
    const daytimeLitaniesHtml = daytimeLitanies("18",false);
    const evnotiNaiNanHtml = evnotiNaiNan("19");
    const endOfServiceHymnHtml = endOfServiceHymn("20");



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
            <td class="coptic">Ϩⲏⲡⲡⲉ ⲉϥⲉ̀ⲕⲁϯ ⲛ̀ϫⲉ ⲡⲁⲁ̀ⲗⲟⲩ : ⲉϥⲉ̀ϭⲓⲥⲓ ⲟⲩⲟϩ ⲉϥⲉ̀ϭⲓⲱⲟⲩ ⲉ̀ⲙⲁϣⲱ : Ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲉ ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛⲁⲧⲱⲙⲧ ⲉϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲕ : ⲡⲁⲓⲣⲏϯ ⲉϥⲉ̀ϣⲱϣ ⲛ̀ϫⲉ ⲡⲉⲕⲥ̀ⲙⲟⲧ ⲛⲉⲙ ⲡⲉⲕⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗϩⲁⲛⲓⲣⲱⲙⲓ</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ ⲟⲩⲛ ⲟⲩⲑⲩⲥⲓⲁⲥ ⲧⲏⲣⲓⲟⲛ ⲛⲁϣⲱⲡⲓ ⲙ̀ⲏⲟⲥ ϧⲉⲛ ⲭⲏⲙⲓ ⲟⲩⲟϩ ⲟⲩⲥ̀ⲧⲏⲗⲗⲏ ϩⲁⲧ ⲙ̀ⲡⲉⲥⲧⲟϣ ⲙ̀Ⲡ⳪ ⲟⲩⲟϩ ϥⲛⲁϣⲱⲡⲓ ⲉⲩⲙⲏⲓⲛⲓϣⲁⲉⲛⲉϩ ⲙ̀Ⲡ⳪ ϧⲉⲛ ϯⲭⲱⲣⲁ ⲛ̀ⲭⲏⲙⲓ ϫⲉ ⲥⲉⲛⲁ ϭⲓϣⲕⲁⲕⲉ̀ⲃⲟⲗ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀Ⲡ⳪ Ⲫϯ </td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_9" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_10" class="text">
            <td class="coptic">Ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉⲧⲉⲙ̀ⲙⲁⲩ ϥ̀ⲛⲁⲁ̀ϣⲁⲓ ⲛ̀ϫⲉ ⲡ̀ⲛⲉϩⲡⲓ ⲛ̀Ⲓ̅ⲗ̅ⲏ̅ⲙ ⲟⲩⲟϩ ⲛ̀ⲉ ⲙ̀ⲡⲓⲔⲱⲣⲓ ⲛ̀ⲟⲩⲙⲁⲛ̀ ϩⲉⲣⲙⲁⲛ ⲉⲩⲕⲱⲣⲓ ⲙ̀ⲙⲟϥ ϧⲉⲛ ⲧⲥⲱϣⲓ ⲟⲩⲟϩ ⲡⲕⲁϩⲓ ⲉϥⲛⲁⲛⲉϩⲡⲓ </td>
        </tr>
        <tr id="table_2_row_11" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    
    <table id="table_3" title="1st Prophecy">
    <caption id="caption_table_3" class="caption">1st Prophecy<br>(Isaiah 52:13-53:12)
    <span class="arabic-caption">النبوة الأولي<br>(اشعياء 52: 13 - 53: 12)</span></caption>
    <tr id="table_3_row_1" class="intro">
        <td class="english">A reading from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_3_row_4" class="text">
        <td class="english">Behold, My Servant shall deal prudently; He shall be exalted and extolled and be very high.</td>
        <td class="arabic">هُوَذَا عَبْدِي يَعْقِلُ يَتَعَالَى وَيَرْتَقِي وَيَتَسَامَى جِدّاً.</td>
    </tr>
    <tr id="table_3_row_5" class="text">
        <td class="english">Just as many were astonished at you, So His visage was marred more than any man, And His form more than the sons of men;</td>
        <td class="arabic">كَمَا انْدَهَشَ مِنْكَ كَثِيرُونَ. كَانَ مَنْظَرُهُ كَذَا مُفْسَداً أَكْثَرَ مِنَ الرَّجُلِ وَصُورَتُهُ أَكْثَرَ مِنْ بَنِي آدَمَ.</td>
    </tr>
    <tr id="table_3_row_6" class="text">
        <td class="english">So shall He sprinkle many nations. Kings shall shut their mouths at Him; For what had not been told them they shall see, And what they had not heard they shall consider.</td>
        <td class="arabic">هَكَذَا يَنْضِحُ أُمَماً كَثِيرِينَ. مِنْ أَجْلِهِ يَسُدُّ مُلُوكٌ أَفْوَاهَهُمْ لأَنَّهُمْ قَدْ أَبْصَرُوا مَا لَمْ يُخْبَرُوا بِهِ وَمَا لَمْ يَسْمَعُوهُ فَهِمُوهُ.</td>
    </tr>
    <tr id="table_3_row_7" class="text">
        <td class="english">Who has believed our report? And to whom has the arm of the Lord been revealed?</td>
        <td class="arabic">مَنْ صَدَّقَ خَبَرَنَا وَلِمَنِ اسْتُعْلِنَتْ ذِرَاعُ الرَّبِّ؟</td>
    </tr>
    <tr id="table_3_row_8" class="text">
        <td class="english">For He shall grow up before Him as a tender plant, And as a root out of dry ground. He has no form or comeliness; And when we see Him, There is no beauty that we should desire Him.</td>
        <td class="arabic">نَبَتَ قُدَّامَهُ كَفَرْخٍ وَكَعِرْقٍ مِنْ أَرْضٍ يَابِسَةٍ لاَ صُورَةَ لَهُ وَلاَ جَمَالَ فَنَنْظُرَ إِلَيْهِ وَلاَ مَنْظَرَ فَنَشْتَهِيهِ.</td>
    </tr>
    <tr id="table_3_row_9" class="text">
        <td class="english">He is despised and rejected by men, A Man of sorrows and acquainted with grief. And we hid, as it were, our faces from Him; He was despised, and we did not esteem Him.</td>
        <td class="arabic">مُحْتَقَرٌ وَمَخْذُولٌ مِنَ النَّاسِ رَجُلُ أَوْجَاعٍ وَمُخْتَبِرُ الْحُزْنِ وَكَمُسَتَّرٍ عَنْهُ وُجُوهُنَا مُحْتَقَرٌ فَلَمْ نَعْتَدَّ بِهِ.</td>
    </tr>
    <tr id="table_3_row_10" class="text">
        <td class="english">Surely He has borne our griefs And carried our sorrows; Yet we esteemed Him stricken, Smitten by God, and afflicted.</td>
        <td class="arabic">لَكِنَّ أَحْزَانَنَا حَمَلَهَا وَأَوْجَاعَنَا تَحَمَّلَهَا. وَنَحْنُ حَسِبْنَاهُ مُصَاباً مَضْرُوباً مِنَ اللَّهِ وَمَذْلُولاً.</td>
    </tr>
    <tr id="table_3_row_11" class="text">
        <td class="english">But He was wounded for our transgressions, He was bruised for our iniquities; The chastisement for our peace was upon Him, And by His stripes we are healed.</td>
        <td class="arabic">وَهُوَ مَجْرُوحٌ لأَجْلِ مَعَاصِينَا مَسْحُوقٌ لأَجْلِ آثَامِنَا. تَأْدِيبُ سَلاَمِنَا عَلَيْهِ وَبِحُبُرِهِ شُفِينَا.</td>
    </tr>
    <tr id="table_3_row_12" class="text">
        <td class="english">All we like sheep have gone astray; We have turned, every one, to his own way; And the Lord has laid on Him the iniquity of us all.</td>
        <td class="arabic">كُلُّنَا كَغَنَمٍ ضَلَلْنَا. مِلْنَا كُلُّ وَاحِدٍ إِلَى طَرِيقِهِ وَالرَّبُّ وَضَعَ عَلَيْهِ إِثْمَ جَمِيعِنَا.</td>
    </tr>
    <tr id="table_3_row_13" class="text">
        <td class="english">He was oppressed and He was afflicted, Yet He opened not His mouth; He was led as a lamb to the slaughter, And as a sheep before its shearers is silent, So He opened not His mouth.</td>
        <td class="arabic">ظُلِمَ أَمَّا هُوَ فَتَذَلَّلَ وَلَمْ يَفْتَحْ فَاهُ كَشَاةٍ تُسَاقُ إِلَى الذَّبْحِ وَكَنَعْجَةٍ صَامِتَةٍ أَمَامَ جَازِّيهَا فَلَمْ يَفْتَحْ فَاهُ.</td>
    </tr>
    <tr id="table_3_row_14" class="text">
        <td class="english">He was taken from prison and from judgment, And who will declare His generation? For He was cut off from the land of the living; For the transgressions of My people He was stricken.</td>
        <td class="arabic">مِنَ الضُّغْطَةِ وَمِنَ الدَّيْنُونَةِ أُخِذَ. وَفِي جِيلِهِ مَنْ كَانَ يَظُنُّ أَنَّهُ قُطِعَ مِنْ أَرْضِ الأَحْيَاءِ أَنَّهُ ضُرِبَ مِنْ أَجْلِ ذَنْبِ شَعْبِي؟</td>
    </tr>
    <tr id="table_3_row_15" class="text">
        <td class="english">And they made His grave with the wicked-- But with the rich at His death, Because He had done no violence, Nor was any deceit in His mouth.</td>
        <td class="arabic">وَجُعِلَ مَعَ الأَشْرَارِ قَبْرُهُ وَمَعَ غَنِيٍّ عِنْدَ مَوْتِهِ. عَلَى أَنَّهُ لَمْ يَعْمَلْ ظُلْماً وَلَمْ يَكُنْ فِي فَمِهِ غِشٌّ.</td>
    </tr>
    <tr id="table_3_row_16" class="text">
        <td class="english">Yet it pleased the Lord to bruise Him; He has put Him to grief. When You make His soul an offering for sin, He shall see His seed, He shall prolong His days, And the pleasure of the Lord shall prosper in His hand.</td>
        <td class="arabic">أَمَّا الرَّبُّ فَسُرَّ بِأَنْ يَسْحَقَهُ بِالْحُزْنِ. إِنْ جَعَلَ نَفْسَهُ ذَبِيحَةَ إِثْمٍ يَرَى نَسْلاً تَطُولُ أَيَّامُهُ وَمَسَرَّةُ الرَّبِّ بِيَدِهِ تَنْجَحُ.</td>
    </tr>
    <tr id="table_3_row_17" class="text">
        <td class="english">He shall see the labor of His soul, and be satisfied. By His knowledge My righteous Servant shall justify many, For He shall bear their iniquities.</td>
        <td class="arabic">مِنْ تَعَبِ نَفْسِهِ يَرَى وَيَشْبَعُ وَعَبْدِي الْبَارُّ بِمَعْرِفَتِهِ يُبَرِّرُ كَثِيرِينَ وَآثَامُهُمْ هُوَ يَحْمِلُهَا.</td>
    </tr>
    <tr id="table_3_row_18" class="text">
        <td class="english">Therefore I will divide Him a portion with the great, And He shall divide the spoil with the strong, Because He poured out His soul unto death, And He was numbered with the transgressors, And He bore the sin of many, And made intercession for the transgressors.</td>
        <td class="arabic">لِذَلِكَ أَقْسِمُ لَهُ بَيْنَ الأَعِزَّاءِ وَمَعَ الْعُظَمَاءِ يَقْسِمُ غَنِيمَةً مِنْ أَجْلِ أَنَّهُ سَكَبَ لِلْمَوْتِ نَفْسَهُ وَأُحْصِيَ مَعَ أَثَمَةٍ وَهُوَ حَمَلَ خَطِيَّةَ كَثِيرِينَ وَشَفَعَ فِي الْمُذْنِبِينَ.</td>
    </tr>
    <tr id="table_3_row_20" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_4" title="2nd Prophecy">
    <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Isaiah 19:19-25)
    <span class="arabic-caption">النبوة الثانية<br>(اشعياء 19: 19 - 25)</span></caption>
    <tr id="table_4_row_1" class="intro">
        <td class="english">Also from Isaiah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">وايضا من اشعياء النبى بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_4_row_4" class="text">
        <td class="english">In that day there will be an altar to the Lord in the midst of the land of Egypt, and a pillar to the Lord at its border.</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ يَكُونُ مَذْبَحٌ لِلرَّبِّ فِي وَسَطِ أَرْضِ مِصْرَ وَعَمُودٌ لِلرَّبِّ عِنْدَ تُخُمِهَا.</td>
    </tr>
    <tr id="table_4_row_5" class="text">
        <td class="english">And it will be for a sign and for a witness to the Lord of hosts in the land of Egypt; for they will cry to the Lord because of the oppressors, and He will send them a Savior and a Mighty One, and He will deliver them.</td>
        <td class="arabic">فَيَكُونُ عَلاَمَةً وَشَهَادَةً لِرَبِّ الْجُنُودِ فِي أَرْضِ مِصْرَ. لأَنَّهُمْ يَصْرُخُونَ إِلَى الرَّبِّ بِسَبَبِ الْمُضَايِقِينَ فَيُرْسِلُ لَهُمْ مُخَلِّصاً وَمُحَامِياً وَيُنْقِذُهُمْ.</td>
    </tr>
    <tr id="table_4_row_6" class="text">
        <td class="english">Then the Lord will be known to Egypt, and the Egyptians will know the Lord in that day, and will make sacrifice and offering; yes, they will make a vow to the Lord and perform it.</td>
        <td class="arabic">فَيُعْرَفُ الرَّبُّ فِي مِصْرَ وَيَعْرِفُ الْمِصْريُّونَ الرَّبَّ فِي ذَلِكَ الْيَوْمِ وَيُقَدِّمُونَ ذَبِيحَةً وَتَقْدِمَةً وَيَنْذُرُونَ لِلرَّبِّ نَذْراً وَيُوفُونَ بِهِ.</td>
    </tr>
    <tr id="table_4_row_7" class="text">
        <td class="english">And the Lord will strike Egypt, He will strike and heal it; they will return to the Lord, and He will be entreated by them and heal them.</td>
        <td class="arabic">وَيَضْرِبُ الرَّبُّ مِصْرَ ضَارِباً فَشَافِياً فَيَرْجِعُونَ إِلَى الرَّبِّ فَيَسْتَجِيبُ لَهُمْ وَيَشْفِيهِمْ.</td>
    </tr>
    <tr id="table_4_row_8" class="text">
        <td class="english">In that day there will be a highway from Egypt to Assyria, and the Assyrian will come into Egypt and the Egyptian into Assyria, and the Egyptians will serve with the Assyrians.</td>
        <td class="arabic">«فِي ذَلِكَ الْيَوْمِ تَكُونُ سِكَّةٌ مِنْ مِصْرَ إِلَى أَشُّورَ فَيَجِيءُ الأَشُّورِيُّونَ إِلَى مِصْرَ وَالْمِصْرِيُّونَ إِلَى أَشُّورَ وَيَعْبُدُ الْمِصْرِيُّونَ مَعَ الأَشُّورِيِّينَ.</td>
    </tr>
    <tr id="table_4_row_9" class="text">
        <td class="english">In that day Israel will be one of three with Egypt and Assyria--a blessing in the midst of the land,</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ يَكُونُ إِسْرَائِيلُ ثُلْثاً لِمِصْرَ وَلأَشُّورَ بَرَكَةً فِي الأَرْضِ</td>
    </tr>
    <tr id="table_4_row_10" class="text">
        <td class="english">whom the Lord of hosts shall bless, saying, "Blessed is Egypt My people, and Assyria the work of My hands, and Israel My inheritance."</td>
        <td class="arabic">بِهَا يُبَارِكُ رَبُّ الْجُنُودِ قَائِلاً: مُبَارَكٌ شَعْبِي مِصْرُ وَعَمَلُ يَدَيَّ أَشُّورُ وَمِيرَاثِي إِسْرَائِيلُ».</td>
    </tr>
    <tr id="table_4_row_12" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

<table id="table_5" title="3rd Prophecy">
    <caption id="caption_table_5" class="caption">3rd Prophecy<br>(Zechariah 12:11 - 14:3, 6-9)
    <span class="arabic-caption">النبوة الثالثة<br>(زكريا 12: 11 - 14: 3، 6-9)</span></caption>
    <tr id="table_5_row_1" class="intro">
        <td class="english">A reading from Zechariah the prophet. May his blessings be with us. Amen.</td>
        <td class="arabic">من زكريا النبي بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_5_row_4" class="text">
        <td class="english">In that day there shall be a great mourning in Jerusalem, like the mourning at Hadad Rimmon in the plain of Megiddo.</td>
        <td class="arabic">فِي ذَلِكَ الْيَوْمِ يَعْظُمُ النَّوْحُ فِي أُورُشَلِيمَ كَنَوْحِ هَدَدْرِمُّونَ فِي بُقْعَةِ مَجِدُّونَ.</td>
    </tr>
    <tr id="table_5_row_5" class="text">
        <td class="english">And the land shall mourn, every family by itself: the family of the house of David by itself, and their wives by themselves; the family of the house of Nathan by itself, and their wives by themselves;</td>
        <td class="arabic">وَتَنُوحُ الأَرْضُ عَشَائِرَ عَشَائِرَ عَلَى حِدَتِهَا: عَشِيرَةُ بَيْتِ دَاوُدَ عَلَى حِدَتِهَا وَنِسَاؤُهُمْ عَلَى حِدَتِهِنَّ. عَشِيرَةُ بَيْتِ نَاثَانَ عَلَى حِدَتِهَا وَنِسَاؤُهُمْ عَلَى حِدَتِهِنَّ.</td>
    </tr>
    <tr id="table_5_row_6" class="text">
        <td class="english">the family of the house of Levi by itself, and their wives by themselves; the family of Shimei by itself, and their wives by themselves;</td>
        <td class="arabic">عَشِيرَةُ بَيْتِ لاَوِي عَلَى حِدَتِهَا وَنِسَاؤُهُمْ عَلَى حِدَتِهِنَّ. عَشِيرَةُ شَمْعِي عَلَى حِدَتِهَا وَنِسَاؤُهُمْ عَلَى حِدَتِهِنَّ.</td>
    </tr>
    <tr id="table_5_row_7" class="text">
        <td class="english">all the families that remain, every family by itself, and their wives by themselves.</td>
        <td class="arabic">كُلُّ الْعَشَائِرِ الْبَاقِيَةِ عَشِيرَةٌ عَشِيرَةٌ عَلَى حِدَتِهَا وَنِسَاؤُهُمْ عَلَى حِدَتِهِنَّ].</td>
    </tr>
    <tr id="table_5_row_8" class="text">
        <td class="english">"In that day a fountain shall be opened for the house of David and for the inhabitants of Jerusalem, for sin and for uncleanness.</td>
        <td class="arabic">[فِي ذَلِكَ الْيَوْمِ يَكُونُ يَنْبُوعٌ مَفْتُوحاً لِبَيْتِ دَاوُدَ وَلِسُكَّانِ أُورُشَلِيمَ لِلْخَطِيَّةِ وَلِلْنَجَاسَةِ.</td>
    </tr>
    <tr id="table_5_row_9" class="text">
        <td class="english">"It shall be in that day," says the Lord of hosts, "that I will cut off the names of the idols from the land, and they shall no longer be remembered. I will also cause the prophets and the unclean spirit to depart from the land.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ يَقُولُ رَبُّ الْجُنُودِ أَنِّي أَقْطَعُ أَسْمَاءَ الأَصْنَامِ مِنَ الأَرْضِ فَلاَ تُذْكَرُ بَعْدُ وَأُزِيلُ الأَنْبِيَاءَ أَيْضاً وَالرُّوحَ النَّجِسَ مِنَ الأَرْضِ.</td>
    </tr>
    <tr id="table_5_row_10" class="text">
        <td class="english">It shall come to pass that if anyone still prophesies, then his father and mother who begot him will say to him, 'You shall not live, because you have spoken lies in the name of the Lord.' And his father and mother who begot him shall thrust him through when he prophesies.</td>
        <td class="arabic">وَيَكُونُ إِذَا تَنَبَّأَ أَحَدٌ بَعْدُ أَنَّ أَبَاهُ وَأُمَّهُ (وَالِدَيْهِ) يَقُولاَنِ لَهُ: لاَ تَعِيشُ لأَنَّكَ تَكَلَّمْتَ بِالْكَذِبِ بِاسْمِ الرَّبِّ. فَيَطْعَنُهُ أَبُوهُ وَأُمُّهُ (وَالِدَاهُ) عِنْدَمَا يَتَنَبَّأُ.</td>
    </tr>
    <tr id="table_5_row_11" class="text">
        <td class="english">"And it shall be in that day that every prophet will be ashamed of his vision when he prophesies; they will not wear a robe of coarse hair to deceive.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّ الأَنْبِيَاءَ يَخْزُونَ كُلُّ وَاحِدٍ مِنْ رُؤْيَاهُ إِذَا تَنَبَّأَ وَلاَ يَلْبِسُونَ ثَوْبَ شَعْرٍ لأَجْلِ الْغِشِّ.</td>
    </tr>
    <tr id="table_5_row_12" class="text">
        <td class="english">But he will say, 'I am no prophet, I am a farmer; for a man taught me to keep cattle from my youth.'</td>
        <td class="arabic">بَلْ يَقُولُ: لَسْتُ أَنَا نَبِيّاً. أَنَا إِنْسَانٌ فَالِحُ الأَرْضِ لأَنَّ إِنْسَاناً اقْتَنَانِي مِنْ صِبَايَ.</td>
    </tr>
    <tr id="table_5_row_13" class="text">
        <td class="english">And one will say to him, 'What are these wounds between your arms?' Then he will answer, 'Those with which I was wounded in the house of my friends.'</td>
        <td class="arabic">فَيَسْأَلَهُ: مَا هَذِهِ الْجُرُوحُ فِي يَدَيْكَ؟ فَيَقُولُ: هِيَ الَّتِي جُرِحْتُ بِهَا فِي بَيْتِ أَحِبَّائِي.</td>
    </tr>
    <tr id="table_5_row_14" class="text">
        <td class="english">"Awake, O sword, against My Shepherd, Against the Man who is My Companion," Says the Lord of hosts. "Strike the Shepherd, And the sheep will be scattered; Then I will turn My hand against the little ones.</td>
        <td class="arabic">[اِسْتَيْقِظْ يَا سَيْفُ عَلَى رَاعِيَّ وَعَلَى رَجُلِ رِفْقَتِي يَقُولُ رَبُّ الْجُنُودِ. اضْرِبِ الرَّاعِيَ فَتَتَشَتَّتَ الْغَنَمُ وَأَرُدُّ يَدِي عَلَى الصِّغَارِ.</td>
    </tr>
    <tr id="table_5_row_15" class="text">
        <td class="english">And it shall come to pass in all the land," Says the Lord, "That two-thirds in it shall be cut off and die, But one-third shall be left in it:</td>
        <td class="arabic">وَيَكُونُ فِي كُلِّ الأَرْضِ يَقُولُ الرَّبُّ أَنَّ ثُلْثَيْنِ مِنْهَا يُقْطَعَانِ وَيَمُوتَانِ وَالثُّلْثَ يَبْقَى فِيهَا.</td>
    </tr>
    <tr id="table_5_row_16" class="text">
        <td class="english">I will bring the one-third through the fire, Will refine them as silver is refined, And test them as gold is tested. They will call on My name, And I will answer them. I will say, 'This is My people'; And each one will say, 'The Lord is my God.' "</td>
        <td class="arabic">وَأُدْخِلُ الثُّلْثَ فِي النَّارِ وَأَمْحَصُهُمْ كَمَحْصِ الْفِضَّةِ وَأَمْتَحِنُهُمُ امْتِحَانَ الذَّهَبِ. هُوَ يَدْعُو بِاسْمِي وَأَنَا أُجِيبُهُ. أَقُولُ: هُوَ شَعْبِي وَهُوَ يَقُولُ: الرَّبُّ إِلَهِي].</td>
    </tr>
    <tr id="table_5_row_17" class="text">
        <td class="english">Behold, the day of the Lord is coming, And your spoil will be divided in your midst.</td>
        <td class="arabic">هُوَذَا يَوْمٌ لِلرَّبِّ يَأْتِي فَيُقْسَمُ سَلَبُكِ فِي وَسَطِكِ.</td>
    </tr>
    <tr id="table_5_row_18" class="text">
        <td class="english">For I will gather all the nations to battle against Jerusalem; The city shall be taken, The houses rifled, And the women ravished. Half of the city shall go into captivity, But the remnant of the people shall not be cut off from the city.</td>
        <td class="arabic">وَأَجْمَعُ كُلَّ الأُمَمِ عَلَى أُورُشَلِيمَ لِلْمُحَارَبَةِ فَتُؤْخَذُ الْمَدِينَةُ وَتُنْهَبُ الْبُيُوتُ وَتُفْضَحُ النِّسَاءُ وَيَخْرُجُ نِصْفُ الْمَدِينَةِ إِلَى السَّبْيِ وَبَقِيَّةُ الشَّعْبِ لاَ تُقْطَعُ مِنَ الْمَدِينَةِ.</td>
    </tr>
    <tr id="table_5_row_19" class="text">
        <td class="english">Then the Lord will go forth And fight against those nations, As He fights in the day of battle.</td>
        <td class="arabic">فَيَخْرُجُ الرَّبُّ وَيُحَارِبُ تِلْكَ الأُمَمَ كَمَا فِي يَوْمِ حَرْبِهِ يَوْمَ الْقِتَالِ.</td>
    </tr>
    <tr id="table_5_row_20" class="text">
        <td class="english">It shall come to pass in that day That there will be no light; The lights will diminish.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّهُ لاَ يَكُونُ نُورٌ. الدَّرَارِي تَنْقَبِضُ.</td>
    </tr>
    <tr id="table_5_row_21" class="text">
        <td class="english">It shall be one day Which is known to the Lord-- Neither day nor night. But at evening time it shall happen That it will be light.</td>
        <td class="arabic">وَيَكُونُ يَوْمٌ وَاحِدٌ مَعْرُوفٌ لِلرَّبِّ. لاَ نَهَارَ وَلاَ لَيْلَ بَلْ يَحْدُثُ أَنَّهُ فِي وَقْتِ الْمَسَاءِ يَكُونُ نُورٌ.</td>
    </tr>
    <tr id="table_5_row_22" class="text">
        <td class="english">And in that day it shall be That living waters shall flow from Jerusalem, Half of them toward the eastern sea And half of them toward the western sea; In both summer and winter it shall occur.</td>
        <td class="arabic">وَيَكُونُ فِي ذَلِكَ الْيَوْمِ أَنَّ مِيَاهاً حَيَّةً تَخْرُجُ مِنْ أُورُشَلِيمَ نِصْفُهَا إِلَى الْبَحْرِ الشَّرْقِيِّ وَنِصْفُهَا إِلَى الْبَحْرِ الْغَرْبِيِّ. فِي الصَّيْفِ وَفِي الْخَرِيفِ تَكُونُ.</td>
    </tr>
    <tr id="table_5_row_23" class="text">
        <td class="english">And the Lord shall be King over all the earth</td>
        <td class="arabic">وَيَكُونُ الرَّبُّ مَلِكاً عَلَى كُلِّ الأَرْضِ.</td>
    </tr>
    <tr id="table_5_row_25" class="intro">
        <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
        <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
    </tr>
</table>

</div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_10" title="Coptic Psalm">
        <caption class="caption" id="caption_table_10">Coptic Psalm<br>(50: 17-18)
        <span class="arabic-caption">المزمور قبطياً<br>(49: 14)</span></caption>

        <tr id="table_10_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_10_row_1" class="text">
            <td class="english">You hate My instruction,</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲇⲉ ⲁⲕⲙⲉⲥⲧⲉ ⲧⲁⲥ̀ⲃⲱ:</td>
            <td class="arabic">وأنت قد أبغضت أدبى.</td>
        </tr>
        <tr id="table_10_row_2" class="text">
            <td class="english">and cast My words behind you.</td>
            <td class="coptic">ⲟⲩⲟϩ ⲁⲕϩⲓⲟⲩⲓ̀ ⲛ̀ⲛⲁⲥⲁϫⲓ ⲥⲁⲫⲁϩⲟⲩ ⲙ̀ⲙⲟⲕ:</td>
            <td class="arabic">وألقيت كلامى إلى خلفك.</td>
        </tr>
        <tr id="table_10_row_3" class="text">
            <td class="english">If you see a thief, you run with him,</td>
            <td class="coptic">ⲁⲕϣⲁⲛⲛⲁⲩ ⲉ̀ⲟⲩⲣⲉϥϭⲓⲟⲩⲓ̀ ⲛⲁⲕϭⲟϫⲓ ⲛⲉⲙⲁϥ :</td>
            <td class="arabic">اذا رأيت سارقاً سعيت معه.</td>
        </tr>
        <tr id="table_10_row_4" class="text">
            <td class="english">and you keep company with adulterers</td>
            <td class="coptic">ⲁⲕⲭⲱ ⲛ̀ⲧⲉⲕⲧⲟⲓ ⲛⲉⲙ ⲛⲓⲛⲱⲓⲕ</td>
            <td class="arabic">مع الفسقة جعلت نصيبك.</td>
        </tr>
        <tr id="table_10_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_12" title="Coptic Gospel">
        <caption class="caption" id="caption_table_12">Coptic Gospel<br>(John 13:21-30)
        <span class="arabic-caption">الإنجيل قبطياً<br>(يوحنا 13: 21 – 30)</span></caption>
        <tr id="table_12_row_0" class="priest">
            <td class="english">A chapter according to St. John,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار يوحنا</td>
        </tr>
        <tr id="table_12_row_1" class="intro">
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀.</td>
        </tr>
        <tr id="table_12_row_2" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲇⲉ ⲉ̀ⲧⲁϥϫⲟⲧⲟⲩ ⲛ̀ϫⲉ Ⲓⲏⲥⲟⲩⲥ ⲁϥϣ̀ⲑⲟⲣⲧⲉⲣ ϧⲉⲛ ⲡⲓ̅ⲡ̅ⲛ̅ⲁ : ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲟⲩⲟϩ ⲡⲉϫⲁϥ : ϫⲉ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ϯϫⲱⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ ϫⲉ ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑⲏⲛⲟⲩ ⲡⲉⲑⲛⲁⲧⲏⲓⲧ : Ⲛⲁⲩⲥⲟⲙⲥ ⲟⲩⲛ ⲟⲩⲃⲉ ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲛ̀ⲥⲉⲉ̀ⲙⲓ ⲁⲛ ϫⲉ ⲁϥϫⲉⲣⲉ ⲛⲓⲙ ⲙ̀ⲙⲱⲟⲩ : Ⲛⲁϥⲣⲱⲧⲉⲃ ⲇⲉ ⲛ̀ϫⲉ ⲟⲩⲁⲓ ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀Ⲓⲏⲥⲟⲩⲥ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ ...
            <br> Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        <tr id="table_12_row_3" class="intro">
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">

<table id="table_13" title="Psalm">
    <caption id="caption_table_13" class="caption">Psalm<br>(50:17-18)
    <span class="arabic-caption">المزمور<br>(49: 14)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">You hate My instruction, and cast My words behind you.</td>
        <td class="arabic">وَأَنْتَ قَدْ أَبْغَضْتَ التَّأْدِيبَ وَأَلْقَيْتَ كَلاَمِي خَلْفَكَ.</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">If you see a thief, you run with him, and you keep company with adulterers.</td>
        <td class="arabic">إِذَا رَأَيْتَ سَارِقاً وَافَقْتَهُ وَمَعَ الزُّنَاةِ نَصِيبُكَ.</td>
    </tr>
    <tr id="table_13_row_7" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(John 13:21-30)
    <span class="arabic-caption">الانجيل<br>(يوحنا 13: 21 – 30)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">When Jesus had said these things, He was troubled in spirit, and testified and said, "Most assuredly, I say to you, one of you will betray Me."</td>
        <td class="arabic">لَمَّا قَالَ يَسُوعُ هَذَا اضْطَرَبَ بِالرُّوحِ وَشَهِدَ وَقَالَ: «الْحَقَّ الْحَقَّ أَقُولُ لَكُمْ: إِنَّ وَاحِداً مِنْكُمْ سَيُسَلِّمُنِي».</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">Then the disciples looked at one another, perplexed about whom He spoke.</td>
        <td class="arabic">فَكَانَ التّلاَمِيذُ يَنْظُرُونَ بَعْضُهُمْ إِلَى بَعْضٍ وَهُمْ مُحْتَارُونَ فِي مَنْ قَالَ عَنْهُ.</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">Now there was leaning on Jesus' bosom one of His disciples, whom Jesus loved.</td>
        <td class="arabic">وَكَانَ مُتَّكِئاً فِي حِضْنِ يَسُوعَ وَاحِدٌ مِنْ تلاَمِيذِهِ كَانَ يَسُوعُ يُحِبُّهُ.</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">Simon Peter therefore motioned to him to ask who it was of whom He spoke.</td>
        <td class="arabic">فَأَوْمَأَ إِلَيْهِ سِمْعَانُ بُطْرُسُ أَنْ يَسْأَلَ مَنْ عَسَى أَنْ يَكُونَ الَّذِي قَالَ عَنْهُ.</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">Then, leaning back on Jesus' breast, he said to Him, "Lord, who is it?"</td>
        <td class="arabic">فَاتَّكَأَ ذَاكَ عَلَى صَدْرِ يَسُوعَ وَقَالَ لَهُ: «يَا سَيِّدُ مَنْ هُوَ؟»</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">Jesus answered, "It is he to whom I shall give a piece of bread when I have dipped it." And having dipped the bread, He gave it to Judas Iscariot, the son of Simon.</td>
        <td class="arabic">أَجَابَ يَسُوعُ: «هُوَ ذَاكَ الَّذِي أَغْمِسُ أَنَا اللُّقْمَةَ وَأُعْطِيهِ». فَغَمَسَ اللُّقْمَةَ وَأَعْطَاهَا لِيَهُوذَا سِمْعَانَ الإِسْخَرْيُوطِيِّ.</td>
    </tr>
    <tr id="table_14_row_10" class="text">
        <td class="english">Now after the piece of bread, Satan entered him. Then Jesus said to him, "What you do, do quickly."</td>
        <td class="arabic">فَبَعْدَ اللُّقْمَةِ دَخَلَهُ الشَّيْطَانُ. فَقَالَ لَهُ يَسُوعُ: «مَا أَنْتَ تَعْمَلُهُ فَاعْمَلْهُ بِأَكْثَرِ سُرْعَةٍ».</td>
    </tr>
    <tr id="table_14_row_11" class="text">
        <td class="english">But no one at the table knew for what reason He said this to him.</td>
        <td class="arabic">وَأَمَّا هَذَا فَلَمْ يَفْهَمْ أَحَدٌ مِنَ الْمُتَّكِئِينَ لِمَاذَا كَلَّمَهُ بِه</td>
    </tr>
    <tr id="table_14_row_12" class="text">
        <td class="english">For some thought, because Judas had the money box, that Jesus had said to him, "Buy those things we need for the feast," or that he should give something to the poor.</td>
        <td class="arabic">لأَنَّ قَوْماً إِذْ كَانَ الصُّنْدُوقُ مَعَ يَهُوذَا ظَنُّوا أَنَّ يَسُوعَ قَالَ لَهُ: اشْتَرِ مَا نَحْتَاجُ إِلَيْهِ لِلْعِيدِ أَوْ أَنْ يُعْطِيَ شَيْئاً لِلْفُقَرَاءِ.</td>
    </tr>
    <tr id="table_14_row_13" class="text">
        <td class="english">Having received the piece of bread, he then went out immediately. And it was night.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">فَذَاكَ لَمَّا أَخَذَ اللُّقْمَةَ خَرَجَ لِلْوَقْتِ. وَكَانَ لَيْلاً.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_14_row_15" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}

<table id="table_16" title="Exposition">
    <caption id="caption_table_16" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_16_row_1" class="intro">
        <td class="english">The exposition of the ELEVENTH Hour of COVENANT THURSDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الحادية عشرة من يوم الخميس العهد من البصخة المقدسة بركتها علينا. آمين.</td>
    </tr>
    <tr id="table_16_row_4" class="text">
        <td class="english">The Sun of Righteousness shone upon us. That is Jesus Christ, the true light, who gives light to everyone in the world.</td>
        <td class="arabic">شمس البر أضاء، وشعاعه بلغ ضياؤه إلى أقطار الأرض، الذى هو يسوع النور الحقيقى الذى يضئ لكل إنسان آتٍ إلى العالم.</td>
    </tr>
    <tr id="table_16_row_5" class="text">
        <td class="english">The life-giving Bread came from heaven and nourished all creation. From the beginning of time, He prepared a table in the wilderness and nourished the people with manna for forty years, “They ate and died,” as the Lord said.</td>
        <td class="arabic">الخبز السمائى المعطى الحياة المغذى كل صنعة يديه فى أول الزمان أعد مائدة فى البرية من المَن، وأعال منها الجموع أربعين سنة فأكلوا وماتوا كقول الرب.</td>
    </tr>
    <tr id="table_16_row_6" class="text">
        <td class="english">A New Table [meal] was prepared by the Son in the Upper Room at Mother Zion [the City of Jerusalem]</td>
        <td class="arabic">ومائدة جديدة أعدها الإبن فى علية صهيون الأم.</td>
    </tr>
    <tr id="table_16_row_7" class="text">
        <td class="english">On the eve of that day in which they ate the unleavened bread of Passover, our Lord and Savior Jesus Christ sat there in the upper room of Zion with His disciples to celebrate the new Passover.</td>
        <td class="arabic">لما كان عشية ذلك اليوم الذى أكلوا فيه فَطير الفصح، اتكأ الرب يسوع المخلص فى الموضع المرتفع الذى هو علية صهيون، واتكأ مع تلاميذه وكانوا يأكلون الفصح الجديد،</td>
    </tr>
    <tr id="table_16_row_8" class="text">
        <td class="english">That is His flesh which He Himself offered to them in a hidden mystery, and the precious blood, which is better than the blood offerings.</td>
        <td class="arabic">الذى هو جسده هو بذاته الذى أعطاه لهم بأمر سرى، والدم الكريم الحقيقى الذى هو أفضل من دم الحيوانات.</td>
    </tr>
    <tr id="table_16_row_9" class="text">
        <td class="english">Our Savior took the bread, blessed, broke, and gave it to His disciples saying,</td>
        <td class="arabic">أخذ مخلصنا خبزاً وباركه، وهكذا قسمه وناوله لرسله المختارين قائلاً</td>
    </tr>
r>
    <tr id="table_16_row_11" class="text">
        <td class="english">“Take eat of it all of you for this is My body which is broken for you and for many to be given for the remission of sins.”</td>
        <td class="arabic">"خذوا كلوا منه كلكم لأن هذا هو جسدى، الذى أقسمه عنكم وعن كثيرين لمغفرة خطاياهم".</td>
    </tr>
    <tr id="table_16_row_12" class="text">
        <td class="english">After that He took the cup, mixed the wine with water, and handed it to them saying,</td>
        <td class="arabic">بعد هذا أمسك كأس الخمر ومزجها بالماء، وناولهم قائلاً:</td>
    </tr>
    <tr id="table_16_row_13" class="text">
        <td class="english">“Drink of it all of you for this is My blood of the new covenant which is shed for you and for many to be given for the remission of sins.</td>
        <td class="arabic">خذوا اشربوا جميعكم من هذه الكأس فان هذا هو دمى الذى للعهد الجديد، الذى يهرق عنكم وعن كثيرين لمغفرة خطاياهم.</td>
    </tr>
    <tr id="table_16_row_14" class="text">
        <td class="english">Every time you eat of this bread and drink of this cup you preach My death, confess My resurrection, and remember Me till I come.”</td>
        <td class="arabic">لأن كل مرة تأكلون من هذا الخبز وتشربون من هذه الكأس تبشرون بموتى وقيامتى وتذكروننى إلى أن أجئ.</td>
    </tr>
    <tr id="table_16_row_15" class="text">
        <td class="english">The True Lamb, Christ our Savior, is the Passover of our salvation.</td>
        <td class="arabic">هذا هو فصح خلاصنا، الحمل الحقيقى، المسيح مخلصنا.</td>
    </tr>
    <tr id="table_16_row_16" class="text">
        <td class="english">He said, “I say to you I will not drink the fruit of this vine until the day when I drink it with you in the kingdom of My Father.”</td>
        <td class="arabic">قال: انى لا أشرب من هذه الكرمة حتى أشربه معكم جديداً فى ملكوت أبى.</td>
    </tr>
    <tr id="table_16_row_17" class="text">
        <td class="english">The Lord said, “I say to you, one of you will betray Me, and deliver Me to the hands of the enemies.”</td>
        <td class="arabic">قال الرب أن واحداً منكم سيسلمنى إلى أيدى المخالفين.</td>
    </tr>
    <tr id="table_16_row_18" class="text">
        <td class="english">They began to think, one among the other, saying, “Who dares do that?”</td>
        <td class="arabic">فبدأوا يفكرون فيما بينهم قائلين: من الذى يجسر أن يفعل هذا؟</td>
    </tr>
    <tr id="table_16_row_19" class="text">
        <td class="english">He answered and said, “He who dips his hand in the dish with Me will betray Me.” Then Judas, one of those present, said, “Is it I?” He said to him, “You have said it.</td>
        <td class="arabic">فقال يهوذا أحد المتكئين: لعلى أنا هو. قال له: أنت قلت.</td>
    </tr>
    <tr id="table_16_row_20" class="text">
        <td class="english">You have intended evil in your defiance</td>
        <td class="arabic">فأشار إليه العارف قائلاً: هو الذى يضع يده معى فى الصحفة.</td>
    </tr>
    <tr id="table_16_row_21" class="text">
        <td class="english">and dared to commit a grave transgression, for the Son of God came to save the first man from corruption.”</td>
        <td class="arabic">أضمرت الأثم أيها المخالف وتجرأت على أمر ردئ لأن ابن الله أتى ليخلص الإنسان الأول من الفساد.</td>
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
    <tr id="table_50_row_0" data-navigation="EOF1sc" class="navigationButton">
        <td class="englishButton">The FIRST Hour of the EVE of GREAT FRIDAY</td>
        <td class="arabicButton">الساعة الأولى من ليلة الجمعة العظيمة</td>
    </tr>
</table>
</div>
`;

};