import { cross } from './repeatedPrayers';
import { getTheotokia , getWeekdaySundayTheotokia , getTennav } from './midnightPsalmody/theotokias';
import {getPsali} from './midnightPsalmody/psalis';
import { getKiahkPraiseHtml } from './midnightPsalmody/kiahkPraises';
import { annualCommemoration , annualFourthCanticle , getAdamDoxologiesConclusion , theMorningDoxology ,
    creedInro , creed , holyHolyHoly , psalmodyConclusion , nekNai
 } from './midnightPsalmody/annual';


export const psalmody = (settings) => {

    const dayOfWeek = settings.selectedDateProperties.dayOfWeekIndex;
    const seasons = settings.selectedDateProperties.copticSeason;
    const adam = settings.selectedDateProperties.adamOrWatos === "Adam";
    const aktonkAki = settings.selectedDateProperties.aktonkAki;

    const psali = getPsali(45 , false , settings);

    const theotokia = getTheotokia(60 , settings);

    const midnightPsalmodyConclusion = creedInro(100) + creed(101) + psalmodyConclusion(102) + holyHolyHoly(103) ;
    const morningDoxology = theMorningDoxology(104) + nekNai(105,aktonkAki);


    const weekDaySundayPostFirstCanticle = dayOfWeek !== 0 ? getWeekdaySundayTheotokia(5,settings) : '';

    const tennav = aktonkAki.english === "risen" ? getTennav(1) : '';
    const adamDoxologiesConclusion = adam ? getAdamDoxologiesConclusion(38) : '';
    // Initialize empty variables with let, including commemorationHtml and fourthCanticleHtml
    let {
        postTenthino = '',
        postFirstCanticle = '',
        preSecondCanticle = '',
        postSecondCanticle = '',
        postThirdCanticle = '',
        commemoration = annualCommemoration(25),
        fourthCanticle = annualFourthCanticle(35),
        postFourthCanticle = '',
        postPsali = '',
        preTheotokia = ''
    } = {};
   
    // Check if conditions are met for Kiahk
    if (seasons.includes("Kiahk")) {

        // Destructure and assign new values directly from kiahkHtmlVariables
        postTenthino = getKiahkPraiseHtml("kiahkOde" , 1.1) + getKiahkPraiseHtml("amenAlleluia" , 1.3);
        postFirstCanticle = 
            getKiahkPraiseHtml("praiseAfterThe1stCanticle" , 6.1) +
            (dayOfWeek === 0 ? getKiahkPraiseHtml("praiseAfterMondayTheotokia" , 6.2) : '') +
            (dayOfWeek === 0 ? getKiahkPraiseHtml("praiseAfterTuesdayTheotokia" , 6.3): '');
        preSecondCanticle = getKiahkPraiseHtml("psaliAdamOn2ndCanticle" , 6.4);
        postSecondCanticle = 
            getKiahkPraiseHtml("praiseAfter2ndCanticleLobsh" , 11.1) +
            (dayOfWeek === 0 ? getKiahkPraiseHtml("praiseAfterWednesdayTheotokia" , 11.2):'') +
            (dayOfWeek === 0 ? getKiahkPraiseHtml("praiseAfterThursdayTheotokia" , 11.3):'') +
            getKiahkPraiseHtml("psaliAdamOn3rdCanticle" , 11.4) +
            getKiahkPraiseHtml("secondPsaliAdamOn3rdCanticle" , 11.5) +
            getKiahkPraiseHtml("KiahkPraisefortheHolyTrinity" , 11.6);
        postThirdCanticle = getKiahkPraiseHtml("praiseOnPsaliOfTheThreeYoungMen" , 18.1);
        commemoration = 
            getKiahkPraiseHtml("kiahkCommemoration" , 25.1) +
            getKiahkPraiseHtml("praiseForStAnthonyTheGreat" , 25.2) +
            getKiahkPraiseHtml("praiseForStMaximosAndDomadios" , 25.3) +
            getKiahkPraiseHtml("praiseForStSamuelTheConfessor" , 25.4);
        fourthCanticle = (adam ? getKiahkPraiseHtml("AdamPsali_ComeLetUsWorship" , 35) : '') + getKiahkPraiseHtml("fourthCanticleKiahk" , 35.1);
        postFourthCanticle = (dayOfWeek === 0 ? getKiahkPraiseHtml("praiseAdamOnAikoti" , 36) : '');
        postPsali = 
            (dayOfWeek === 0 ? getKiahkPraiseHtml("iOpenMyMouthWithPraise" , 50.1) : '');
        switch (dayOfWeek) {
            case 1:
                preTheotokia = getKiahkPraiseHtml("praiseAfterMondayTheotokia" , 55);
                break;
            case 2:
                preTheotokia = getKiahkPraiseHtml("praiseAfterTuesdayTheotokia" , 55);
                break;
            case 3:
                preTheotokia = getKiahkPraiseHtml("praiseAfterWednesdayTheotokia" , 55);
                break;
            case 4:
                preTheotokia = getKiahkPraiseHtml("praiseAfterThursdayTheotokia" , 55);
                break;
            default:
                preTheotokia = '';
        }
    }




    
return `
<body>
<div class="section" id="section_1">
    <table id="table_0" style="display: table;" title="Arise, O children of the Light Ⲧⲉⲛ ⲑⲏⲛⲟⲩ">
        <caption id="caption_table_0" class="caption">Arise, O children of the Light <br /><span
                class="coptic-caption">Ⲧⲉⲛ ⲑⲏⲛⲟⲩ</span>
                <span class="arabic-caption">قوموا يا بنى النور</span>
                </caption>
        <tbody>
            <tr id="table_0_row_0" class="north">
                <td class="english" >Arise, O children of the Light: let us praise
                    the Lord of hosts.</td>
                <td class="coptic" >Ⲧⲉⲛⲑⲏⲛⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ
                    ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ.</td>
                <td class="arabic">قوموا يا بنى النور لنسبح رب القوات.</td>
            </tr>
            <tr id="table_0_row_1" class="south">
                <td class="english" >That He may grant us the salvation of our
                    souls.</td>
                <td class="coptic" >Ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡ̀ⲥⲱϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ.
                </td>
                <td class="arabic">لكى ينعم لنا بخلاص نفوسنا</td>
            </tr>
            <tr id="table_0_row_2" class="north">
                <td class="english" >Whenever we stand before You in the flesh.
                </td>
                <td class="coptic" >Ϧⲉⲛ ⲡ̀ϫⲓⲛⲑ̀ⲣⲉⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ
                    ⲥⲱⲙⲁⲧⲓⲕⲱⲥ.</td>
                <td class="arabic">عندما نقف أمامك جسدياً.</td>
            </tr>
            <tr id="table_0_row_3" class="south">
                <td class="english" >Cast away from our minds the slumber of
                    sleep.</td>
                <td class="coptic" >Ⲁⲗⲓⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲉⲛⲛⲟⲩⲥ ⲙ̀ⲡⲓϩⲩⲛⲓⲙ ⲛ̀ⲧⲉ
                    ϯⲉⲃϣⲓ.</td>
                <td class="arabic">إنزع عن عقولنا نوم الغفلة.</td>
            </tr>
            <tr id="table_0_row_4" class="north">
                <td class="english" >Grant us sobriety, O Lord, that we may know
                    how to stand before You at times of prayer.</td>
                <td class="coptic" >Ⲙⲟⲓ ⲛⲁⲛ Ⲡϭⲟⲓⲥ ⲛ̀ⲟⲩⲙⲉⲧⲣⲉϥⲉⲣⲛⲩⲙⲫⲓⲛ : ϩⲟⲡⲱⲥ
                    ⲛ̀ⲧⲉⲛⲕⲁϯ ⲛ̀ⲧⲉⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ⲙ̀ⲫ̀ⲛⲁⲩ ⲛ̀ⲧⲉ ϯⲡ̀ⲣⲟⲥⲉⲩⲭⲏ.</td>
                <td class="arabic">أعطنا يا رب يقظة لكى نفهم أن نقف أمامك وقت الصلاة.</td>
            </tr>
            <tr id="table_0_row_5" class="south">
                <td class="english" >And ascribe unto You the befitting
                    glorification, and win the forgiveness of our many sins: Glory be to You, O Lover of mankind.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲟⲩⲱⲣⲡ ⲛⲁⲕ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ̀
                    ⲉ̀ⲧⲉⲣⲡ̀ⲣⲉⲡⲓ : ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛϣⲁϣⲛⲓ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ ⲉⲧⲟϣ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">ونرسل لك إلى فوق التمجيد اللائق. ونفوز بغفران خطايانا الكثيرة. المجد لك يامحب البشر
                </td>
            </tr>
            <tr id="table_0_row_6" class="north">
                <td class="english" >Behold bless the Lord, O you servants of the
                    Lord: Glory...</td>
                <td class="coptic" >Ϩⲏⲡⲡⲉ ⲇⲉ ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲛⲓⲉ̀ⲃⲓⲁⲓⲕ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ:
                    ⲇⲟ̅...</td>
                <td class="arabic">ها باركوا الرب ياعبيد الرب. المجد..</td>
            </tr>
            <tr id="table_0_row_7" class="south">
                <td class="english" >You who stand in the house of the Lord, in
                    the courts of the house of our God: Glory be to You, O Lover of mankind.</td>
                <td class="coptic" >Ⲛⲏⲉⲧⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ϧⲉⲛ ⲡ̀ⲏⲓ ⲙ̀Ⲡϭⲟⲓⲥ : ϧⲉⲛ
                    ⲛⲓⲁⲩⲗⲏⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲏⲓ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">القائمين فى بيت الرب. فى ديار بيت إلهنا. المجد..</td>
            </tr>
            <tr id="table_0_row_8" class="north">
                <td class="english" >By night, lift up your hands, O you saints,
                    and bless the Lord: Glory...</td>
                <td class="coptic" >Ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲓⲉ̀ϫⲱⲣϩ ϥⲁⲓ ⲛ̀ⲛⲧⲉⲛϫⲓϫ ⲉ̀ⲡ̀ϣⲱⲓ
                    ⲛⲏⲉⲑⲟⲩⲁⲃ ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ : ⲇⲟ̅...</td>
                <td class="arabic">بالليالى إرفعوا أيديكم إلى فوق أيها القديسون باركوا الرب. المجد..</td>
            </tr>
            <tr id="table_0_row_9" class="south">
                <td class="english" >The Lord bless you from Zion, Who made heaven
                    and earth: Glory...</td>
                <td class="coptic" >Ⲡϭⲟⲓⲥ ⲉϥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲥⲓⲱⲛ :
                    ⲫⲏⲉⲧⲁϥⲑⲁⲙⲓⲟ̀ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ : ⲇⲟ̅...</td>
                <td class="arabic">يباركك الرب من صهيون الذى خلق السماء والأرض. المجد..</td>
            </tr>
            <tr id="table_0_row_10" class="north">
                <td class="english" >Let my cry come near before You, O Lord. Give me understanding according to Your word: Glory be to You, O Lover of mankind.</td>
                <td class="coptic" >Ⲙⲁⲣⲉ ⲡⲁϯϩⲟ ϧⲱⲛⲧ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ Ⲡϭⲟⲓⲥ : ⲙⲁⲕⲁϯ ⲛⲏⲓ ⲕⲁⲧⲁ ⲡⲉⲕⲥⲁϫⲓ: ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">فلتدن وسيلتى قدامك يارب. كقولك فهمنى المجد..</td>
            </tr>
            <tr id="table_0_row_11" class="south">
                <td class="english" >Let my supplication come before You. Revive
                    me according to Your word: Glory...</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ⲛ̀ϫⲉ ⲡⲁⲁ̀ⲝⲓⲱ̀ⲙⲁ : ⲕⲁⲧⲁ
                    ⲡⲉⲕⲥⲁϫⲓ ⲙⲁⲧⲁⲛϧⲟⲓ : ⲇⲟ̅...</td>
                <td class="arabic">ليدخل إبتهالى أمامك. ككلمتك أحينى. المجد..</td>
            </tr>
            <tr id="table_0_row_12" class="north">
                <td class="english" >My lips shall utter praise, for You teach me
                    your statutes: Glory...</td>
                <td class="coptic" >Ⲉⲣⲉ ⲛⲁⲥ̀ⲫⲟⲧⲟⲩ ⲃⲉⲃⲓ ⲛ̀ⲟⲩⲥ̀ⲙⲟⲩ ⲉ̀ϣⲱⲡ
                    ⲁⲕϣⲁⲛⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲙⲏⲓ : ⲇⲟ̅...</td>
                <td class="arabic">تفيض شفتاي السبح إذا ما علمتني حقوقك. المجد..</td>
            </tr>
            <tr id="table_0_row_13" class="south">
                <td class="english" >My tongue shall speak of Your words, for all
                    Your commandments are righteousness: Glory be to You, O Lover of mankind.</td>
                <td class="coptic" >Ⲡⲁⲗⲁⲥ ⲉϥⲉ̀ⲉ̀ⲣⲟⲩⲱ̀ ϧⲉⲛ ⲛⲉⲕⲥⲁϫⲓ : ϫⲉ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ
                    ⲧⲏⲣⲟⲩ ϩⲁⲛⲙⲉⲑⲙⲏⲓ ⲛⲉ : ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">لساني يجيب بأقوالك. لأن جميع وصاياك هي حق. المجد..</td>
            </tr>
            <tr id="table_0_row_14" class="north">
                <td class="english" >Let Your hand become my help, for I have
                    chosen Your precepts: Glory...</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲧⲉⲕϫⲓϫ ⲉ̀ⲫ̀ⲛⲁϩⲙⲉⲧ : ϫⲉ
                    ⲛⲉⲕⲉⲛⲧⲟⲗⲏ ⲁⲓⲉⲣⲉ̀ⲡⲓⲑⲩⲙⲓⲛ ⲉ̀ⲣⲱⲟⲩ : ⲇⲟ̅...</td>
                <td class="arabic">لتكن يدك لتخلصنى لأنى اشتهيت وصاياك. المجد..</td>
            </tr>
            <tr id="table_0_row_15" class="south">
                <td class="english" >I longed for Your salvation, O Lord, and Your
                    law is my delight: Glory...</td>
                <td class="coptic" >Ⲁⲓϭⲓϣϣⲱⲟⲩ ⲙ̀ⲡⲉⲕⲟⲩϫⲁⲓ Ⲡϭⲟⲓⲥ : ⲟⲩⲟϩ ⲡⲉⲕⲛⲟⲙⲟⲥ ⲡⲉ
                    ⲧⲁⲙⲉⲗⲉⲧⲏ : ⲇⲟ̅...</td>
                <td class="arabic">اشتقت إلى خلاصك يارب. وناموسك هو تلاوتي. المجد..</td>
            </tr>
            <tr id="table_0_row_16" class="north">
                <td class="english" >Let my soul live, and it shall praise You,
                    and let Your judgments help me: Glory&hellip;</td>
                <td class="coptic" >Ⲉⲥⲉ̀ⲱⲛϧ ⲛ̀ϫⲉ ⲧⲁⲯⲩⲭⲏ ⲟⲩⲟϩ ⲉⲥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ :
                    ⲟⲩⲟϩ ⲛⲉⲕϩⲁⲡ ⲉⲩⲉ̀ⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲓ: ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">تحيا نفسى وتسبحك وأحكامك تعيننى. المجد..</td>
            </tr>
            <tr id="table_0_row_17" class="south">
                <td class="english" >I have gone astray like a lost sheep; seek Your servant, for I do not forget Your commandments: Glory ...</td>
                <td class="coptic" >Ⲁⲓⲥⲱⲣⲉⲙ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲉ̀ⲥⲱⲟⲩ ⲉ̀ⲁϥⲧⲁⲕⲟ : ⲕⲱϯ ⲛ̀ⲥⲁ ⲡⲉⲕⲃⲱⲕ ϫⲉ ⲛⲉⲕⲉⲛⲧⲟⲗⲏ ⲙ̀ⲡⲓⲉⲣⲡⲟⲩⲱⲃϣ : ⲇⲟ̅...</td>
                <td class="arabic">ضللت مثل الخروف الضال فاطلب عبدك فإنى لوصاياك لم أنس. المجد</td>
            </tr>
            <tr id="table_0_row_18" class="north">
                <td class="english" >Glory to the Father, and the Son, and the
                    Holy Spirit: Glory...</td>
                <td class="coptic" >Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ˙Ⲩⲓⲱ̀ ⲕⲉ ⲁ̀ⲅⲓⲱ̀ Ⲡⲛⲉⲩⲙⲁⲧⲓ : ⲇⲟ̅...
                </td>
                <td class="arabic">المجد للآب والأبن والروح القدس. المجد..</td>
            </tr>
            <tr id="table_0_row_19" class="south">
                <td class="english" >Now, and ever, and unto the age of all ages
                    Amen: Glory...</td>
                <td class="coptic" >Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ
                    ⲁ̀ⲙⲏⲛ : ⲇⲟ̅...</td>
                <td class="arabic">الآن وكل أوان وإلى دهر الداهرين آمين. المجد..</td>
            </tr>
            <tr id="table_0_row_20" class="north">
                <td class="english" >Glory be to the Father, and the Son and the
                    Holy Spirit, now and forever and unto all ages, Amen: Glory be to You, O Lover of mankind.</td>
                <td class="coptic" >Ⲡⲓⲱ̀ⲟⲩ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ
                    : ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ ⲁ̀ⲙⲏⲛ: ⲇⲟⲝⲁ ⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">المجد للآب والابن والروح القدس منذ الآن وإلى أبد الآبدين كلها آمين. المجد</td>
            </tr>
            <tr id="table_0_row_21" class="south">
                <td class="english" >Glory be to You, O Good One, the Lover of
                    Mankind. Glory be to Your Mother, the Virgin, and all Your saints: Glory...</td>
                <td class="coptic" >Ⲡⲓⲱ̀ⲟⲩ ⲛⲁⲕ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ⲡⲓⲱ̀ⲟⲩ
                    ⲛ̀ⲧⲉⲕⲙⲁⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁⲕ: ⲇⲟ̅...</td>
                <td class="arabic">المجد لك يا محب البشر الصالح. المجد لأمك العذراء وجميع قديسيك. المجد..</td>
            </tr>
            <tr id="table_0_row_22" class="north">
                <td class="english" >Glory be to You, O Only-Begotten one. O Holy
                    Trinity, have mercy upon us: Glory...</td>
                <td class="coptic" >Ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲁ̀ⲅⲓⲁ̀  Ⲧⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ
                    ⲏ̀ⲙⲁⲥ : ⲇⲟ̅...</td>
                <td class="arabic">المجد لك أيها الوحيد. أيها الثالوث المقدس ارحمنا. المجد..</td>
            </tr>
            <tr id="table_0_row_23" class="south">
                <td class="english" >Let God arise and let all His enemies be
                    scattered, and let all that hate His Holy Name flee from before His face: Glory be to You, O Lover
                    of mankind.</td>
                <td class="coptic" >Ⲙⲁⲣⲉϥⲧⲱⲛϥ ⲛ̀ϫⲉ Ⲫϯ : ⲙⲁⲣⲟⲩϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ
                    ⲛⲉϥϫⲁϫⲓ ⲧⲏⲣⲟⲩ : ⲙⲁⲣⲟⲩⲫⲱⲧ ⲉ̀ⲃⲟⲗ ϧⲁⲧ̀ϩⲏ ⲙ̀ⲡⲉϥϩⲟ ⲛ̀ϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲑⲙⲟⲥϯ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ : ⲇⲟⲝⲁ ⲥⲓ
                    ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ.</td>
                <td class="arabic">ليقم الله. وليتبدد جميع أعدائه. وليهرب من قدام وجهه كل مبغضي اسمه القدوس. المجد..
                </td>
            </tr>
            <tr id="table_0_row_24" class="north">
                <td class="english" >As for Your people let them be blessed, a
                    thousand thousand fold, and ten thousand ten thousand fold, doing Your will.</td>
                <td class="coptic" >Ⲡⲉⲕⲗⲁⲟⲥ ⲇⲉ ⲙⲁⲣⲉϥϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲥ̀ⲙⲟⲩ ⲉ̀ϩⲁⲛⲁⲛϣⲟ
                    ⲛ̀ϣⲟ ⲛⲉⲙ ϩⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲑ̀ⲃⲁ ⲉⲩⲓ̀ⲣⲓ ⲙ̀ⲡⲉⲕⲟⲩⲱϣ.</td>
                <td class="arabic">وأما شعبك فليكن بالبركة ألوف ألوف وربوات ربوات يصنعون إرادتك.</td>
            </tr>
            <tr id="table_0_row_25" class="south">
                <td class="english" >O Lord, open my lips, and my mouth shall show
                    forth Your praise. ${cross}</td>
                <td class="coptic" >Ⲡϭⲟⲓⲥ ⲉⲕⲉ̀ⲁ̀ⲟⲩⲱⲛ ⲛ̀ⲛⲁⲥ̀ⲫⲟⲧⲟⲩ : ⲟⲩⲟϩ ⲉ̀ⲣⲉ ⲣⲱⲓ ϫⲱ ⲙ̀ⲡⲉⲕⲥ̀ⲙⲟⲩ. ${cross}</td>
                <td class="arabic">يارب افتح شفتى. ولينطق فمى بتسبحتك. ${cross}</td>
            </tr>
        </tbody>
    </table>

    ${tennav}
    ${postTenthino}

    <table id="table_3" style="display: table;" title="First Canticle">
        <caption id="caption_table_3" class="caption">First Canticle
        <span class="arabic-caption">الهوس الأولى</span>
        </caption>
        <tbody>
            <tr id="table_3_row_0" class="north">
                <td class="english" >Then Moses and the children of Israel
                    sang this song to the Lord, and spoke saying, "Let us sing to the Lord for He has triumphed
                    gloriously.&rdquo;</td>
                <td class="coptic" >Ⲧⲟⲧⲉ ⲁϥϩⲱⲥ ⲛ̀ϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲛⲉⲙ ⲛⲉⲛϣⲏⲣⲓ
                    ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ ⲉ̀ⲧⲁⲓϩⲱⲇⲏ ̀ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ⲁϥϫⲟⲥ ⲉⲑⲣⲟⲩϫⲟⲥ: ϫⲉ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ: ϫⲉ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲅⲁⲣ
                    ⲁϥϭⲓⲱ̀ⲟⲩ.</td>
                <td class="arabic">حينئذ سبح موسى وبنو إسرائيل بهذة التسبحة للرب وقالوا فلنسبح للرب لانه بالمجد قد
                    تمجد.</td>
            </tr>
            <tr id="table_3_row_1" class="south">
                <td class="english" >The horse and its rider, He has thrown
                    into the sea. The Lord is my strength and song, and He has become my salvation.</td>
                <td class="coptic" >Ⲟⲩϩ̀ⲑⲟ ⲛⲉⲙ ⲟⲩϭⲁⲥⲓϩ̀ⲑⲟ ⲁϥⲃⲉⲣⲃⲱⲣⲟⲩ ⲉ̀ⲫ̀ⲓⲟⲙ:
                    ⲟⲩⲃⲟⲏ̀ⲑⲟⲥ ⲛⲉⲙ ⲟⲩⲣⲉϥϩⲱⲃⲥ ⲉ̀ⲃⲟⲗ ϩⲓϫⲱⲓ ⲁϥϣⲱⲡⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲥⲱⲧⲏⲣⲓⲁ.</td>
                <td class="arabic">الفرس وراكبه طرحهما في البحر. معيني وساتري صار لي خلاصاً.</td>
            </tr>
            <tr id="table_3_row_2" class="north">
                <td class="english" >He is my God and I will glorify Him, my
                    father's God and I will exalt Him.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ Ⲡⲁⲛⲟⲩϯ ϯⲛⲁϯⲱ̀ⲟⲩ ⲛⲁϥ: Ⲫϯ ⲙ̀ⲡⲁⲓⲱⲧ
                    ϯⲛⲁϭⲁⲥϥ.</td>
                <td class="arabic">هذا هو إلهى فأمجده إله أبى فأرفعه.</td>
            </tr>
            <tr id="table_3_row_3" class="south">
                <td class="english" >The Lord is a Man of war, the Lord is His
                    name. Pharaoh's chariots and his army He has cast into the sea.</td>
                <td class="coptic" >Ⲡϭⲟⲓⲥ ⲡⲉⲧϧⲟⲙϧⲉⲙ ⲛ̀ⲛⲓⲃⲱⲧⲥ: Ⲡϭⲟⲓⲥ ⲡⲉ ⲡⲉϥⲣⲁⲛ:
                    ⲛⲓⲃⲉⲣⲉϭⲱⲟⲩⲧⲥ ̀ⲛⲧⲉ Ⲫⲁⲣⲁⲱ̀ ⲛⲉⲙ ⲧⲉϥϫⲟⲙ ⲧⲏⲣⲥ ⲁϥⲃⲉⲣⲃⲱⲣⲟⲩ ⲉ̀ⲫ̀ⲓⲟⲙ.</td>
                <td class="arabic">الرب مكسر الحروب الرب اسمه. مركبات فرعون وكل قوته طرحهما فى البحر.</td>
            </tr>
            <tr id="table_3_row_4" class="north">
                <td class="english" >His chosen captains also drowned in the
                    Red Sea.</td>
                <td class="coptic" >Ϩⲁⲛⲥⲱⲧⲡ ⲛ̀ⲁ̀ⲛⲁⲃⲁⲧⲏⲥ ⲛ̀ⲧ̀ⲣⲓⲥⲧⲁⲧⲏⲥ ⲁϥϫⲟⲗⲕⲟⲩ
                    ϧⲉⲛ ⲫ̀ⲓⲟⲙ ⲛ̀ϣⲁⲣⲓ.</td>
                <td class="arabic">ركباناً منتخبين ذي ثلاث جنبات غرّقهم فى البحر الأحمر.</td>
            </tr>
            <tr id="table_3_row_5" class="south">
                <td class="english" >The depths have covered them; they sank
                    to the bottom like a stone.</td>
                <td class="coptic" >Ⲁϥϩⲟⲃⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲟⲩ ⲛ̀ϫⲉ ⲡⲓⲙⲱⲟⲩ : ⲁⲩⲱⲙⲥ
                    ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ⲡⲉⲧϣⲏⲕ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲱ̀ⲛⲓ.</td>
                <td class="arabic">غطاهم الماء انغمسوا إلى العمق مثل الحجر</td>
            </tr>
            <tr id="table_3_row_6" class="north">
                <td class="english" >Your right hand, O Lord, has become
                    glorious in power. Your right hand, O Lord, has dashed the enemy in pieces.</td>
                <td class="coptic" >Ⲧⲉⲕⲟⲩⲓ̀ⲛⲁⲙ Ⲡϭⲟⲓⲥ ⲁⲥϭⲓⲱ̀ⲟⲩ ϧⲉⲛ ⲟⲩϫⲟⲙ:
                    ⲧⲉⲕϫⲓϫ ⲛ̀ⲟⲩⲓ̀ⲛⲁⲙ Ⲡⲁⲛⲟⲩϯ ⲁⲥⲧⲁⲕⲉ ⲛⲉⲕϫⲁϫⲓ.</td>
                <td class="arabic">يمينك يا رب تمجدت بالقوة. يدك اليمنى يا إلهى أهلكت أعداءك.</td>
            </tr>
            <tr id="table_3_row_7" class="south">
                <td class="english" >And in the greatness of Your excellence,
                    You have overthrown those who rose against You. You sent forth Your wrath, it consumed them like
                    stubble.</td>
                <td class="coptic" >Ϧⲉⲛ ⲡ̀ⲁ̀ϣⲁⲓ ̀ⲛ̀ⲧⲉ ⲡⲉⲕⲱ̀ⲟⲩ ⲁⲕϧⲟⲙϧⲉⲙ
                    ⲛ̀ⲛⲏⲉⲧϯⲟⲩⲃⲏⲛ: ⲁⲕⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲁϥⲟⲩⲟ̀ⲙⲟⲩ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛⲣⲱⲟⲩⲓ̀.</td>
                <td class="arabic">بكثرة مجدك سحقت الذين يقاوموننا ارسلت غضبك فأكلهم مثل الهشيم.</td>
            </tr>
            <tr id="table_3_row_8" class="north">
                <td class="english" >And with the blast of Your nostrils the
                    waters were gathered together, the flood stood upright like a heap, and the depths congealed in
                    the heart of the sea.</td>
                <td class="coptic" >Ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ⲡⲉⲕⲙ̀ⲃⲟⲛ ⲁϥⲟ̀ϩⲓ
                    ̀ⲉ̀ⲣⲁⲧϥ ⲛ̀ϫⲉ ⲡⲓⲙⲱⲟⲩ: ⲁⲩϭⲓⲥⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲱⲟⲩ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲥⲟⲃⲧ: ⲁⲩϭⲱⲥ ⲛ̀ϫⲉ ⲛⲓϫⲟⲗ ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲙ̀ⲫ̀ⲓⲟⲙ.
                </td>
                <td class="arabic">وبروح غضبك وقف الماء. وارتفعت المياه مثل السور. وجمدت الأمواج في وسط البحر.</td>
            </tr>
            <tr id="table_3_row_9" class="south">
                <td class="english" >The enemy said, "I will pursue, I will
                    overtake, I will divide the spoil, my desire shall be satisfied on them, I will draw my sword,
                    and my hand shall destroy them.&rdquo;</td>
                <td class="coptic" >Ⲁϥϫⲟⲥ ⲅⲁⲣ ⲛ̀ϫⲉ ⲡⲓϫⲁϫⲓ: ϫⲉ ϯⲛⲁϭⲟϫⲓ ⲛ̀ⲧⲁⲧⲁϩⲟ:
                    ⲛ̀ⲧⲁⲫⲱϣ ⲛ̀ϩⲁⲛϣⲱⲗ: ⲛ̀ⲧⲁⲧ̀ⲥⲓⲟ̀ ⲛ̀ⲧⲁⲯⲩⲭⲏ: ⲛ̀ⲧⲁϧⲱⲧⲉⲃ ϧⲉⲛ ⲧⲁⲥⲏϥⲓ: ⲛ̀ϫⲉ ⲧⲁϫⲓϫ ⲉⲣϭⲟⲓⲥ.</td>
                <td class="arabic">قال العدو انى اسرع فادرك. واقسم الغنائم واشبع نفسى. واقتل بسيفى ويدى تتسلط.</td>
            </tr>
            <tr id="table_3_row_10" class="north">
                <td class="english" >You blew with Your wind, the sea covered
                    them, they sank like lead in the mighty waters.</td>
                <td class="coptic" >Ⲁⲕⲟⲩⲱⲣⲡ ⲙ̀ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ ⲁϥϩⲟⲃⲥⲟⲩ ⲛ̀ϫⲉ ⲫ̀ⲓⲟⲙ:
                    ⲁⲩⲱⲙⲥ ⲉ̀ⲡⲉⲥⲏⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲧⲁⲧϩ ϧⲉⲛ ϩⲁⲛⲙⲱⲟⲩ ⲉⲩⲟϣ.</td>
                <td class="arabic">وارسلت روحك فغطاهم البحر وغطسوا إلى أسفل كالرصاص فى مياه كثيرة.</td>
            </tr>
            <tr id="table_3_row_11" class="south">
                <td class="english" >Who is like You, O Lord, among the gods?
                    Who is like You, glorified in His saints, amazing in glory, performing wonders?</td>
                <td class="coptic" >Ⲛⲓⲙ ⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ Ⲡϭⲟⲓⲥ: ⲛⲓⲙ
                    ⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ: ⲉ̀ⲁⲩϯⲱ̀ⲟⲩ ⲛⲁⲕ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ̀ⲛ̀ⲧⲁⲕ: ⲉⲩⲉⲣϣ̀ⲫⲏⲣⲓ ⲙ̀ⲙⲟⲕ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ : ⲉⲕⲓ̀ⲣⲓ
                    ⲛ̀ϩⲁⲛϣ̀ⲫⲏⲣⲓ.</td>
                <td class="arabic">من يشبهك فى الالهة يارب من يشبهك. ممجداً فى قديسيك متعجباً منك بالمجد. صانعاً
                    عجائب.</td>
            </tr>
            <tr id="table_3_row_12" class="north">
                <td class="english" >You stretched out Your right hand, the
                    earth swallowed them. You, in Your mercy, have led forth the people whom You have redeemed. You
                    have guided them, in Your strength, to Your holy habitation.</td>
                <td class="coptic" >Ⲁⲕⲥⲟⲩⲧⲉⲛ ⲧⲉⲕⲟⲩⲓ̀ⲛⲁⲙ ⲉ̀ⲃⲟⲗ ⲁϥⲟⲙⲕⲟⲩ ⲛ̀ϫⲉ
                    ⲡ̀ⲕⲁϩⲓ: ⲁⲕϭⲓⲙⲱⲓⲧ ϧⲁϫⲱϥ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲫⲁⲓ ⲉ̀ⲧⲁⲕⲥⲟⲧⲡϥ: ⲁⲕϯϫⲟⲙ ⲛⲁϥ ϧⲉⲛ ⲧⲉⲕⲛⲟⲙϯ: ⲉⲩⲙⲁ
                    ⲛ̀ⲉⲙⲧⲟⲛ ⲉ̀ϥⲟⲩⲁⲃ ⲛⲁⲕ.</td>
                <td class="arabic">مددت يمينك فابتلعتهم الأرض هديت شعبك بالحقيقة هذا الذى اخترته وقويته بتعزيتك. إلى
                    موضع راحة قدسك.</td>
            </tr>
            <tr id="table_3_row_13" class="south">
                <td class="english" >The people will hear and be afraid;
                    sorrow will take hold of the inhabitants of Palestine.</td>
                <td class="coptic" >Ⲁⲩⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ ϩⲁⲛⲉⲑⲛⲟⲥ ⲟⲩⲟϩ ⲁϥϫⲱⲛⲧ:
                    ϩⲁⲛⲛⲁⲕϩⲓ ⲁⲩϭⲓ ⲛ̀ⲛⲏⲉⲧϣⲟⲡ ϧⲉⲛ Ⲛⲓⲫⲩⲗⲓⲥⲧⲓⲙ.</td>
                <td class="arabic">سمعت الامم وغضبت. والمخاض أخذ سكان فلسطين.</td>
            </tr>
            <tr id="table_3_row_14" class="north">
                <td class="english" >Then the chiefs of Edom will be dismayed,
                    the mighty men of Moab, trembling, will take hold of them.</td>
                <td class="coptic" >Ⲧⲟⲧⲉ ⲁⲩⲓⲏⲥ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϫⲉ ⲛⲓϩⲏⲅⲉⲙⲱⲛ ⲛ̀ⲧⲉ
                    Ⲉⲇⲟⲙ: ⲛⲓⲁⲣⲭⲱⲛ ⲛ̀ⲧⲉ Ⲛⲓⲙⲱⲁ̀ⲃⲓⲧⲏⲥ ⲟⲩⲥ̀ⲑⲉⲣⲧⲉⲣ ⲡⲉ ⲉ̀ⲧⲁϥϭⲓⲧⲟⲩ.</td>
                <td class="arabic">حينئذ أسرع ولاة أدوم. ورؤساء المؤابيين أخذتهم الرعدة.</td>
            </tr>
            <tr id="table_3_row_15" class="south">
                <td class="english" >All the inhabitants of Canaan will melt
                    away; fear and dread will fall on them.</td>
                <td class="coptic" >Ⲁⲩⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϣⲟⲡ ϧⲉⲛ
                    Ⲭⲁⲛⲁⲁⲛ: ⲁϥⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲟⲩ ⲛ̀ϫⲉ ⲟⲩⲥ̀ⲑⲉⲣⲧⲉⲣ ⲛⲉⲙ ⲟⲩϩⲟϯ.</td>
                <td class="arabic">ذاب كل سكان كنعان. وأتت عليهم الرعدة والخوف.</td>
            </tr>
            <tr id="table_3_row_16" class="north">
                <td class="english" >By the greatness of Your arm, they will
                    be as still as a stone, till Your people pass over, O Lord, till Your people pass over whom You
                    have purchased.</td>
                <td class="coptic" >Ϧⲉⲛ ⲡ̀ⲁ̀ϣⲁⲓ ⲛ̀ⲧⲉ ⲡⲉⲕϫ̀ⲫⲟⲓ ⲙⲁⲣⲟⲩⲉⲣⲱ̀ⲛⲓ:
                    ϣⲁⲧⲉϥⲥⲓⲛⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲗⲁⲟⲥ Ⲡϭⲟⲓⲥ ϣⲁⲧⲉϥⲥⲓⲛⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲫⲁⲓ ⲉ̀ⲧⲁⲕϫ̀ⲫⲟϥ.</td>
                <td class="arabic">بكثرة ساعدك فليصيروا كالحجر. حتى يجتاز شعبك يارب حتى يجتاز شعبك هذا الذى اقتنيته.
                </td>
            </tr>
            <tr id="table_3_row_17" class="south">
                <td class="english" >You will bring them in, and plant them in
                    the mountain of Your inheritance, in the place, O Lord, which You have made for your own
                    dwelling.</td>
                <td class="coptic" >Ⲁⲛⲓⲧⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲧⲟϫⲟⲩ ϩⲓϫⲉⲛ ⲟⲩⲧⲱⲟⲩ ⲛ̀ⲧⲉ
                    ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀: ⲛⲉⲙ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲉⲕⲙⲁⲛϣⲱⲡⲓ ⲉⲧⲥⲉⲃⲧⲱⲧ: ⲫⲁⲓ ̀ⲉ̀ⲧⲁⲕⲉⲣϩⲱⲃ ⲉ̀ⲣⲟϥ Ⲡϭⲟⲓⲥ.</td>
                <td class="arabic">ادخلهم واغرسهم على جبل ميراثك وفى مسكنك المعد هذا الذى صنعته يارب.</td>
            </tr>
            <tr id="table_3_row_18" class="north">
                <td class="english" >Your sanctuary, O Lord, which Your hands
                    have established, the Lord shall reign forever and ever.</td>
                <td class="coptic" >Ⲡⲉⲕⲙⲁ ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲫⲏⲉ̀ⲧⲁⲩⲥⲉⲃⲧⲱⲧϥ ⲛ̀ϫⲉ
                    ⲛⲉⲕϫⲓϫ: Ⲡϭⲟⲓⲥ ⲉⲕⲟⲓ ⲛ̀ⲟⲩⲣⲟ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ⲓⲥϫⲉⲛ ⲡ̀ⲉ̀ⲛⲉϩ ⲟⲩⲟϩ ⲉ̀ⲧⲓ.</td>
                <td class="arabic">موضعك المقدس يارب الذى أعددته يداك. يارب تملك منذ الازل والآن وإلى الابد.</td>
            </tr>
            <tr id="table_3_row_19" class="south">
                <td class="english" >For the horses of Pharaoh went with his
                    chariots and his horsemen into the sea.</td>
                <td class="coptic" >Ϫⲉ ⲁⲩⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲫ̀ⲓⲟⲙ ⲛ̀ϫⲉ ⲛⲓϩ̀ⲑⲱⲣ ⲛ̀ⲧⲉ
                    Ⲫⲁⲣⲁⲱ̀ ⲛⲉⲙ ⲛⲉϥⲃⲉⲣⲉϭⲱⲟⲩⲧⲥ ⲛⲉⲙ ⲛⲉϥϭⲁⲥⲓϩ̀ⲑⲟ.</td>
                <td class="arabic">لانه قد دخل إلى البحر خيل فرعون ومركباته وفرسانه.</td>
            </tr>
            <tr id="table_3_row_20" class="north">
                <td class="english" >And the Lord brought back the waters of
                    the sea on them, but the children of Israel went on dry land in the midst of the sea.</td>
                <td class="coptic" >ⲀⲠϭⲟⲓⲥ ⲉⲛ ⲡⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ ⲉ̀ϩ̀ⲣⲏⲓ
                    ⲉ̀ϫⲱⲟⲩ: ⲛⲉⲛϣⲏⲣⲓ ⲇⲉ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ ⲛⲁⲩⲙⲟϣⲓ ϧⲉⲛ ⲡⲉⲧϣⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲙ̀ⲫ̀ⲓⲟⲙ.</td>
                <td class="arabic">والرب غمرهم بماء البحر. أما بنو اسرائيل فكانوا يمشون على اليابسة فى وسط البحر.
                </td>
            </tr>
            <tr id="table_3_row_21" class="south">
                <td class="english" >Then Miriam the prophetess, the sister of
                    Aaron, took the timbrel in her hand, and all the women went out after her with timbrels and with
                    praises.</td>
                <td class="coptic" >Ⲁⲥϭⲓ ⲇⲉ ⲛⲁⲥ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁⲙ ϯⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲧ̀ⲥⲱⲛⲓ
                    ⲛ̀Ⲁⲁ̀ⲣⲱⲛ ⲙ̀ⲡⲓⲕⲉⲙⲕⲉⲙ ϧⲉⲛ ⲛⲉⲥϫⲓϫ: ⲟⲩⲟϩ ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲥⲁⲙⲉⲛϩⲏⲥ ⲛ̀ϫⲉ ⲛⲓϩⲓⲟⲙⲓ ⲧⲏⲣⲟⲩ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ
                    ϩⲁⲛϩⲱⲥ.</td>
                <td class="arabic">فاخذت مريم النبيه اخت هرون الدف بيديها. وخرج فى إثرها جميع النسوة بالدفوف
                    والتسابيح.</td>
            </tr>
            <tr id="table_3_row_22" class="north">
                <td class="english" >And Miriam answered them saying, " Let us
                    sing to the Lord for He has triumphed gloriously.&rdquo;</td>
                <td class="coptic" >Ⲁⲥⲉⲣϩⲏⲧⲥ ⲇⲉ ϧⲁϫⲱⲟⲩ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁⲙ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ:
                    ϫⲉ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ: ϫⲉ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲅⲁⲣ ⲁϥϭⲓⲱ̀ⲟⲩ.</td>
                <td class="arabic">وبدأت مريم فى مقدمتهن تقول فلنسبح الرب لانه بالمجد قد تمجد.</td>
            </tr>
            <tr id="table_3_row_23" class="south">
                <td class="english" >The horse and its rider He has thrown
                    into the sea, "Let us sing to the Lord for He has triumphed gloriously.&rdquo; ${cross}</td>
                <td class="coptic" >Ⲟⲩϩ̀ⲑⲟ ⲛⲉⲙ ⲟⲩϭⲁⲥⲓϩ̀ⲑⲟ ⲁϥⲃⲉⲣⲃⲱⲣⲟⲩ ⲉ̀ⲫ̀ⲓⲟⲙ:
                    ϫⲉ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ: ϫⲉ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲅⲁⲣ ⲁϥϭⲓⲱ̀ⲟⲩ. ${cross}</td>
                <td class="arabic">الفرس وراكب الفرس طرحهما فى البحر فلنسبح الرب لانه بالمجد قد تمجد. ${cross}</td>
            </tr>
        </tbody>
    </table>

    <table id="table_4" style="display: table;" title="Lobsh on the 1st Canticle Ⲧⲉⲛ ⲑⲏⲛⲟⲩ">
        <caption id="caption_table_4" class="caption">Lobsh on the 1st Canticle <br /><span
                class="coptic-caption">Ϧⲉⲛ ⲟⲩϣⲱⲧ</span>
                <span class="arabic-caption">لبش الهوس الاول</span>
                </caption>
        <tbody>
            <tr id="table_4_row_0" class="north">
                <td class="english" >With the split: the waters of the sea
                    split: And the very deep: became a walkway.</td>
                <td class="coptic" >Ϧⲉⲛ ⲟⲩϣⲱⲧ ⲁϥϣⲱⲧ : ⲛ̀ϫⲉ ⲡⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ :
                    ⲟⲩⲟϩ ⲫ̀ⲛⲟⲩⲛ ⲉⲧϣⲏⲕ : ⲁϥϣⲱⲡⲓ ⲛ̀ⲟⲩⲙⲁⲙ̀ⲙⲟϣⲓ.</td>
                <td class="arabic">قطعاً إنقطع ماء البحر. والعمق العميق صار مسلكاً.</td>
            </tr>
            <tr id="table_4_row_1" class="south">
                <td class="english" >A hidden earth: was shone upon by the
                    sun: And the untrodden road: was walked upon.</td>
                <td class="coptic" >Ⲟⲩⲕⲁϩⲓ ⲛ̀ⲁⲑⲟⲩⲱⲛϩ : ⲁ̀ⲫ̀ⲣⲏ ϣⲁⲓ ϩⲓϫⲱϥ :
                    ⲟⲩⲙⲱⲓⲧ ⲛ̀ⲁⲧⲥⲓⲛⲓ : ⲁⲩⲙⲟϣⲓ ϩⲓⲱⲧϥ.</td>
                <td class="arabic">أرض غير ظاهرة أشرقت الشمس عليها وطريق غير مسلوكه مشوا عليها.</td>
            </tr>
            <tr id="table_4_row_2" class="north">
                <td class="english" >The flowing water: stood still: by a
                    miraculous: act of wonder.</td>
                <td class="coptic" >Ⲟⲩⲙⲱⲟⲩ ⲉϥⲃⲏⲗ ⲉ̀ⲃⲟⲗ : ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ : ϧⲉⲛ
                    ⲟⲩϩⲱⲃ ⲛ̀ϣⲫⲏⲣⲓ : ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ.</td>
                <td class="arabic">ماء منحل وقف بفعل عجيب معجز.</td>
            </tr>
            <tr id="table_4_row_3" class="south">
                <td class="english" >Pharaoh and his chariots: were drowned:
                    and the children of Israel: crossed the sea.</td>
                <td class="coptic" >Ⲫⲁⲣⲁⲱ̀ ⲛⲉⲙ ⲛⲉϥϩⲁⲣⲙⲁ : ⲁⲩⲱⲙⲥ ⲉ̀ⲡⲉⲥⲏⲧ:
                    ⲛⲉⲛϣⲏⲣⲓ ⲛ̀Ⲡⲓⲥⲣⲁⲏⲗ : ⲁⲩⲉⲣϫⲓⲛⲓⲟⲣ ⲙ̀ⲫ̀ⲓⲟⲙ.</td>
                <td class="arabic">غرق فرعون ومركباته وعبر بنو اسرئيل البحر.</td>
            </tr>
            <tr id="table_4_row_4" class="north">
                <td class="english" >And in front of them: was Moses the
                    prophet praising: until he brought them to: the wilderness of Sinai.</td>
                <td class="coptic" >Ⲉⲛⲁⲩϩⲱⲥ ϧⲁϫⲱⲟⲩ ⲡⲉ : ⲛ̀ϫⲉ Ⲙⲱⲩ̀ⲥⲏⲥ
                    ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ϣⲁⲛ̀ⲧⲉϥϭⲓⲧⲟⲩ ⲉ̀ϧⲟⲩⲛ : ϩⲓ ⲡ̀ϣⲁϥⲉ ⲛ̀Ⲥⲓⲛⲁ.</td>
                <td class="arabic">وكان موسى النبى يسبح قدامهم حتى ادخلهم بريه سيناء.</td>
            </tr>
            <tr id="table_4_row_5" class="south">
                <td class="english" >And they were praising God: with this new
                    psalmody: saying, "Let us sing to the Lord: For He has triumphed gloriously."</td>
                <td class="coptic" >Ⲉⲛⲁⲩϩⲱⲥ ⲉ̀Ⲫϯ : ϧⲉⲛ ⲧⲁⲓϩⲱⲇⲏ ⲙ̀ⲃⲉⲣⲓ : ϫⲉ
                    ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ : ϫⲉ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲅⲁⲣ ⲁϥϭⲓⲱ̀ⲟⲩ.</td>
                <td class="arabic">وكانوا يسبحون الله بهذه التسبحة الجديدة فلنسبح الرب لانه بالمجد قد تمجد.</td>
            </tr>
            <tr id="table_4_row_6" class="north">
                <td class="english" >Through the prayers: of Moses the
                    archprophet: O Lord grant us: the forgiveness of our sins.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ: ⲛ̀ⲧⲉ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲁⲣⲭⲏⲡ̀ⲣⲟⲫⲏⲧⲏⲥ
                    : Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ</td>
                <td class="arabic">بصلوات موسى رئيس الأنبياء يارب أنعم لنا بمغفرة خطايانا.</td>
            </tr>
            <tr id="table_4_row_7" class="south">
                <td class="english" >Through the intercessions: of the Mother
                    of God, Saint Mary: O Lord grant us: the forgiveness of our sins.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲛ̀ⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ
                    Ⲙⲁⲣⲓⲁ: Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
                <td class="arabic">بشفاعات والدة الاله القديسة مريم يارب انعم لنا بمغفرة خطايانا.</td>
            </tr>
            <tr id="table_4_row_8" class="north">
                <td class="english" >We worship You O Christ: with Your Good
                    Father: and the Holy Spirit: for You have come and saved us. ${cross}</td>
                <td class="coptic" >Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ⲠⲓⲬⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ
                    ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ: ϫⲉ ⲁⲕⲓ̀ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
                <td class="arabic">نسجد لك أيها المسيح مع أبيك الصالح والروح القدس لانك أتيت وخلصتنا. ${cross}</td>
            </tr>
        </tbody>
    </table>
    ${postFirstCanticle}
    ${weekDaySundayPostFirstCanticle}
    ${preSecondCanticle}
    <table id="table_9" style="display: table;" title="2nd Canticle">
        <caption id="caption_table_9" class="caption">2nd Canticle
            <span class="arabic-caption">الهوس الثانى</span>
        </caption>
        
        <tbody>
            <tr id="table_9_row_0" class="north">
                <td class="english" >O give thanks to the Lord: for He is
                    good and virtuous, Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡϭⲟⲓⲥ ϫⲉ ⲟⲩⲭ̀ⲣⲏⲥⲧⲟⲥ
                    ⲟⲩⲁ̀ⲅⲁⲑⲟⲥ ⲡⲉ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ̀ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">اشكروا الرب لأنه صالح وخيّر الليلويا. لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_1" class="south">
                <td class="english" >O give thanks to the God of gods,
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲩϯ ⲁⲗ̅: ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">اشكروا إله الآلهة الليلويا. لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_2" class="north">
                <td class="english" >O give thanks to the Lord of lords:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϭⲟⲓⲥ ⲁⲗ̅: ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">اشكروا رب الأرباب الليلويا. لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_3" class="south">
                <td class="english" >To Him who alone does great wonders:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉⲧⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ ⲁⲗ̅ :
                    ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الصانع العجائب العظام وحده لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_4" class="north">
                <td class="english" >To Him who by wisdom made the heavens:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ̀ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀ ϧⲉⲛ ⲟⲩⲕⲁϯ ⲁⲗ̅: ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذي خلق السموات بفهم الليلويا. لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_5" class="south">
                <td class="english" >To Him who laid out the earth above the
                    waters: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥⲧⲁϫⲣⲟ ⲙ̀ⲡⲓⲕⲁϩⲓ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟⲩ ⲁⲗ̅ :
                    ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى ثبت الأرض على المياه. الليلويا. لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_6" class="north">
                <td class="english" >To Him who made great lights: Alleluia,
                    His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ⲣⲉϥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ
                    ⲙ̀ⲙⲁⲩⲁⲧϥ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذي خلق نيرين عظيمين وحده الليلويا. لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_7" class="south">
                <td class="english" >The sun to rule by day: Alleluia, His
                    mercy endures forever.</td>
                <td class="coptic" >˙Ⲫⲣⲏ ⲉ̀ⲟⲩⲉⲣϣⲓϣⲓ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲁⲗ̅ : ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الشمس لحكم النهار. الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_8" class="north">
                <td class="english" >The moon and stars to rule by night:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲡⲓⲓⲟϩ ⲛⲉⲙ ⲛⲓⲥⲓⲟⲩ ⲉⲩⲉⲝⲟⲩⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ϫⲱⲣϩ
                    ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">القمر والنجوم لحكم الليل الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_9" class="south">
                <td class="english" >To Him who struck Egypt in their
                    first-born: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥϣⲁⲣⲓ ⲉ̀ⲛⲁⲬⲏⲙⲓ ⲛⲉⲙ ⲛⲟⲩϣⲁⲙⲓⲥⲓ ⲁⲗ̅ :
                    ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى ضرب المصريين مع أبكارهم الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_10" class="north">
                <td class="english" >And brought out Israel from among them:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥⲓ̀ⲛⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ ⲁⲗ̅
                    : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">وأخرج إسرائيل في وسطه الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_11" class="south">
                <td class="english" >With a strong hand and with an
                    outstretched arm: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ϧⲉⲛ ⲟⲩϫⲓϫ ⲉⲥⲁ̀ⲙⲁϩⲓ ⲛⲉⲙ ⲟⲩϣⲱⲃϣ ⲉϥϭⲟⲥⲓ ⲁⲗ̅ :
                    ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">بيد عزيزة وذراع عالية الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_12" class="north">
                <td class="english" >To Him who divided the Red Sea in two:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥⲫⲱⲣϫ ⲙ̀ⲫ̀ⲓⲟⲙ ⲛ̀ϣⲁⲣⲓ ϧⲉⲛ ϩⲁⲛⲫⲱⲣϫ
                    ⲁⲗ̅: ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى شق البحر الأحمر إلى أقسام الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_13" class="south">
                <td class="english" >And made Israel pass through the midst of
                    it: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥⲓ̀ⲛⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ ⲉ̀ⲙⲏⲣ ϧⲉⲛ ⲧⲉϥⲙⲏϯ ⲁⲗ̅
                    : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">وأجاز إسرائيل في وسطه الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_14" class="north">
                <td class="english" >But overthrew Pharaoh and his army in the
                    Red Sea: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥⲃⲟⲣⲃⲉⲣ ⲙ̀Ⲫⲁⲣⲁⲱ̀ ⲛⲉⲙ ⲧⲉϥϫⲟⲙ ⲧⲏⲣⲥ
                    ⲉ̀ⲫ̀ⲓⲟⲙ ⲛ̀ϣⲁⲣⲓ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">وطرح فرعون وكل قوته في البحر الأحمر الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_15" class="south">
                <td class="english" >To Him who led his people through the
                    wilderness: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥⲓ̀ⲛⲓ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ ⲉ̀ⲃⲟⲗ ⲛ̀ϩ̀ⲣⲏⲓ ϩⲓ
                    ⲡ̀ϣⲁϥⲉ ⲁⲗ̅: ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى أخرج شعبه إلى البرية الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_16" class="north">
                <td class="english" >To Him who retrieved water from a rock:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥⲓ̀ⲛⲓ ⲛ̀ⲟⲩⲙⲱⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲡⲉⲧⲣⲁ
                    ⲛ̀ⲕⲟϩ ⲛ̀ϣⲱⲧ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى أخرج ماء من صخرة صماء الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_17" class="south">
                <td class="english" >To Him who struck down great kings:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉ̀ⲧⲁϥϣⲁⲣⲓ ⲉ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲱⲟⲩ ⲁⲗ̅ : ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى ضرب ملوكاً عظماء. الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_18" class="north">
                <td class="english" >And slew famous kings: Alleluia, His
                    mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥϧⲱⲧⲉⲃ ⲛ̀ϩⲁⲛⲟⲩⲣⲱⲟⲩ ⲉⲩⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ ⲁⲗ̅
                    : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">وقتل ملوكاً عجيبين: الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_19" class="south">
                <td class="english" >Sihon the king of the Amorites: Alleluia,
                    His mercy endures forever.</td>
                <td class="coptic" >Ⲥⲏⲱⲛ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ Ⲛⲓⲁⲙⲟⲣⲣⲉⲟⲥ ⲁⲗ̅ : ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">سيحون ملك الأموريين الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_20" class="north">
                <td class="english" >And Og the king of Bashan: Alleluia, His
                    mercy endures forever.</td>
                <td class="coptic" >Ⲛⲉⲙ Ⲱⲅ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ Ⲑ̀ⲃⲁⲥⲁⲛ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ
                    ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">وعوج ملك باشان الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_21" class="south">
                <td class="english" >And gave their land as a heritage:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲁϥϯ ⲙ̀ⲡⲟⲩⲕⲁϩⲓ ⲉⲩⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀ ⲁⲗ̅ : ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">اعطى أرضهم ميراثاً: الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_22" class="north">
                <td class="english" >A heritage to Israel His servant:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲉⲩⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀ ⲙ̀ⲡⲉϥ ⲃⲱⲕ Ⲡⲓⲥ̀ⲣⲁⲏⲗ: ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">ميراثاً لعبده إسرائيل :الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_23" class="south">
                <td class="english" >The Lord who remembered us in our lowly
                    state: Alleluia, His mercy endures forever.</td>
                <td class="coptic" >̀ Ⲛϩ̀ⲣⲏⲓ ϧⲉⲛ ⲡⲉⲛⲑⲉⲃⲓⲟ̀ ⲁϥⲉⲣⲡⲉⲛⲙⲉⲩⲓ̀ ⲛ̀ϫⲉ
                    Ⲡϭⲟⲓⲥ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">في تواضعنا ذكرنا الرب الليلويا: لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_24" class="north">
                <td class="english" >And rescued us from our enemies:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥⲥⲟⲧⲧⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛϫⲓϫ ⲛ̀ⲧⲉ
                    ⲛⲉⲛϫⲁϫⲓ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">و خلصنا من أيدى أعدائنا الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_25" class="south">
                <td class="english" >Who gives food to all flesh: Alleluia,
                    His mercy endures forever.</td>
                <td class="coptic" >Ⲫⲏⲉⲧϯ ϧ̀ⲣⲉ ⲛ̀ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ ⲉⲧⲟⲛϧ ⲁⲗ̅ : ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">الذى يعطى طعاماً لكل جسد حي الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_26" class="north">
                <td class="english" >O give thanks to the God of heaven:
                    Alleluia, His mercy endures forever.</td>
                <td class="coptic" >Ⲟⲩⲱ̀ⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲫϯ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲁⲗ̅ : ϫⲉ
                    ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">احمدوا إله السماء الليلويا لأن رحمته إلى الأبد.</td>
            </tr>
            <tr id="table_9_row_27" class="south">
                <td class="english" >O give thanks to the Lord of lords for He
                    is good and virtuous: Alleluia, His mercy endures forever. ${cross}</td>
                <td class="coptic" >Ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϭⲟⲓⲥ ϫⲉ
                    ⲟⲩⲭ̀ⲣⲓⲥⲧⲟⲥ ⲟⲩⲁ̀ⲅⲁⲑⲟⲥ ⲡⲉ ⲁⲗ̅ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
                <td class="arabic">احمدوا رب الأرباب لأنه طيب وصالح الليلويا لأن رحمته إلى الأبد. ${cross}</td>
            </tr>
        </tbody>
    </table>

    <table id="table_10" style="display: table;" title="Lobsh on the 2nd Canticle Ⲙⲁⲣⲉⲛⲟⲩⲱⲛϩ">
        <caption id="caption_table_10" class="caption">Lobsh on the 2nd Canticle <br /> <span
                class="coptic-caption">Ⲙⲁⲣⲉⲛⲟⲩⲱⲛϩ</span>
                <span class="arabic-caption">لبش الهوس الثاني</span>
                </caption>
        <tbody>
            <tr id="table_10_row_0" class="north">
                <td class="english" >Let us give thanks: unto Christ our God:
                    with David the prophet: and the psalmist.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ: ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ :
                    ⲛⲉⲙ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ: Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
                <td class="arabic">فلنشكر المسيح إلهنا مع المرتل داود النبي.</td>
            </tr>
            <tr id="table_10_row_1" class="south">
                <td class="english" >For He has made the heavens: and all its
                    hosts: and established the earth: on the waters.</td>
                <td class="coptic" >Ϫⲉ ⲁϥⲑⲁⲙⲓⲟ̀ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲛⲉⲙ ⲛⲟⲩⲇⲩⲛⲁⲙⲓⲥ :
                    ⲁϥϩⲓⲥⲉⲛϯ ⲙ̀ⲡⲓⲕⲁϩⲓ : ⲉ̀ϩ̀ⲣⲏⲓ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟⲩ.</td>
                <td class="arabic">لأنه خلق السموات وجنودها وأسس الأرض على المياه.</td>
            </tr>
            <tr id="table_10_row_2" class="north">
                <td class="english" >These two great stars: the sun and the
                    moon: He has made to enlighten: the firmament.</td>
                <td class="coptic" >Ⲛⲁⲓ ⲛⲓϣϯ ⲙ̀ⲫⲱⲥⲧⲏⲣ : ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ : ⲁϥⲭⲁⲩ
                    ⲉⲩⲉ̀ⲣⲟⲩⲱⲓⲛⲓ : ϧⲉⲛ ⲡⲓⲥ̀ⲧⲉⲣⲉ̀ⲱⲙⲁ.</td>
                <td class="arabic">هذان الكوكبان العظيمان الشمس والقمر جعلهما ينيران في الفلك.</td>
            </tr>
            <tr id="table_10_row_3" class="south">
                <td class="english" >He brought forth the winds: out of His
                    treasure: he breathed unto the trees: and they blossomed.</td>
                <td class="coptic" >Ⲁϥⲓ̀ⲛⲓ ⲛ̀ϩⲁⲛⲑⲏⲟⲩ : ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉϥⲁ̀ϩⲱⲣ :
                    ⲁϥⲛⲓϥⲓ ⲛ̀ⲥⲁ ⲛⲓϣ̀ϣⲏⲛ : ϣⲁⲛ̀ⲧⲟⲩⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">أخرج الرياح من خباياها. نفخ في الأشجار حتى ازهرت.</td>
            </tr>
            <tr id="table_10_row_4" class="north">
                <td class="english" >He caused the rain to fall: upon the face
                    of the earth: and it sprouted: and gave its fruit.</td>
                <td class="coptic" >Ⲁϥϩⲱⲟⲩ ⲛ̀ⲟⲩⲙⲟⲩⲛϩⲱⲟⲩ : ϩⲓϫⲉⲛ ⲡ̀ϩⲟ ⲙ̀ⲡ̀ⲕⲁϩⲓ
                    : ϣⲁⲛ̀ⲧⲉϥⲣⲱⲧ ⲉ̀ⲡ̀ϣⲱⲓ : ⲛ̀ⲧⲉϥϯ ⲙ̀ⲡⲉϥⲟⲩⲧⲁϩ.</td>
                <td class="arabic">أمطر مطراً على وجه الأرض حتى انبتت وأعطت ثمرها.</td>
            </tr>
            <tr id="table_10_row_5" class="south">
                <td class="english" >He brought forth water: out of a rock:
                    and gave it to His people: in the wilderness.</td>
                <td class="coptic" >Ⲁϥⲓ̀ⲛⲓ ⲛ̀ⲟⲩⲙⲱⲟⲩ : ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲡⲉⲧⲣⲁ :
                    ⲁϥⲧ̀ⲥⲟ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ : ⲛ̀ϩ̀ⲣⲏⲓ ϩⲓ ⲡ̀ϣⲁϥⲉ.</td>
                <td class="arabic">أخرج ماء من صخرة وسقى شعبه في البرية.</td>
            </tr>
            <tr id="table_10_row_6" class="north">
                <td class="english" >He made man: in His image: and His
                    likeness: that he may praise Him.</td>
                <td class="coptic" >Ⲁϥⲑⲁⲙⲓⲟ̀ ⲙ̀ⲡⲓⲣⲱⲙⲓ : ⲕⲁⲧⲁ ⲡⲉϥⲓ̀ⲛⲓ : ⲛⲉⲙ
                    ⲧⲉϥϩⲓⲕⲱⲛ : ⲉⲑⲣⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ.</td>
                <td class="arabic">صنع الإنسان كشبهه وصورته لكى يباركه.</td>
            </tr>
            <tr id="table_10_row_7" class="south">
                <td class="english" >Let us praise Him: and exalt His name:
                    and give thanks to Him: His mercy endures forever.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ : ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲡⲉϥⲣⲁⲛ :
                    ⲧⲉⲛⲟⲩⲱⲛϩ ⲛⲁϥ ⲉ̀ⲃⲟⲗ : ϫⲉ ⲡⲉϥⲛⲁⲓ ϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ</td>
                <td class="arabic">فلنسبحه ونرفع اسمه ونشكره لأن رحمته كائنة إلى الأبد.</td>
            </tr>
            <tr id="table_10_row_8" class="north">
                <td class="english" >Through the prayers: of David the
                    psalmist: O Lord, grant us: the forgiveness of our sins.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ : ⲛ̀ⲧⲉ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ Ⲇⲁⲩⲓⲇ:
                    Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲟⲃⲓ.</td>
                <td class="arabic">بصلوات المرتل داود يارب أنعم لنا بمغفرة خطايانا.</td>
            </tr>
            <tr id="table_10_row_9" class="south">
                <td class="english" >Through the intercessions: of the Mother
                    of God Saint Mary: O Lord, grant us: the forgiveness of our sins.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲉ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ
                    Ⲙⲁⲣⲓⲁ̀ : Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲟⲃⲓ.</td>
                <td class="arabic">بشفاعات والدة الاله القديسة مريم يارب انعم لنا بمغفرة خطايانا.</td>
            </tr>
            <tr id="table_10_row_10" class="north">
                <td class="english" >Through the intercessions: of the whole
                    chorus of angels: O Lord, grant us: the forgiveness of our sins.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ
                    ⲛⲓⲁⲅⲅⲉⲗⲟⲥ : Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲟⲃⲓ.</td>
                <td class="arabic">بشفاعات كل صفوف الملائكة يارب انعم لنا بمغفرة خطايانا.</td>
            </tr>
            <tr id="table_10_row_11" class="south">
                <td class="english" >Blessed are You indeed: with Your good
                    Father: and the Holy Spirit: for You have come and saved us. ${cross}</td>
                <td class="coptic" >̀ Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ : ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ
                    ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ϫⲉ ⲁⲕⲓ̀ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
                <td class="arabic">مبارك أنت بالحقيقة مع أبيك الصالح والروح القدس لأنك أتيت وخلصتنا. ${cross}</td>
            </tr>
        </tbody>
    </table>

    ${postSecondCanticle}

    <table id="table_16" style="display: table;" title="3rd Canticle">
        <caption id="caption_table_16" class="caption">3rd Canticle
            <span class="arabic-caption">الهوس الثالث</span>
        </caption>
        <tbody>
            <tr id="table_16_row_0" class="north">
                <td class="english" >Blessed are You, O Lord, God of our
                    fathers, And exceedingly to be blessed, and exalted above all forever.</td>
                <td class="coptic" >Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ :
                    ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">مبارك أنت أيها الرب إله أبائنا ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_1" class="south">
                <td class="english" >Blessed is the Holy Name of Your glory,
                    And exceedingly to be blessed, and exalted above all forever.</td>
                <td class="coptic" >Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲡⲓⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲡⲉⲕⲱ̀ⲟⲩ
                    : ̀̀̀̀̀̀̀̀̀̀̀̀ϥ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ϥ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">مبارك اسم مجدك القدوس ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_2" class="north">
                <td class="english" >Blessed are You in the holy temple of
                    Your glory, And exceedingly to be blessed, and exalted above all forever.</td>
                <td class="coptic" >˙Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲱ̀ⲟⲩ
                    ⲉⲑⲟⲩⲁⲃ : ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">مبارك أنت فى هيكل مجدك المقدس ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_3" class="south">
                <td class="english" >Blessed are You who beholds the depths and sits upon the Cherubim, And exceedingly to be blessed, and exalted above all forever.</td>
                <td class="coptic" >Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲫⲏⲉⲑⲛⲁⲩ ⲉ̀ⲛⲓⲛⲟⲩⲛ ⲉϥϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ : ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">مبارك أنت أيها الناظر إلى الأعماق الجالس على الشاروبيم ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_4" class="north">
                <td class="english" >Blessed are You on the throne of Your
                    Kingdom, And exceedingly to be blessed, and exalted above all forever.</td>
                <td class="coptic" >̀ Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ϩⲓϫⲉⲛ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ
                    ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ : ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">مبارك أنت على عرش مُلكك ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_5" class="south">
                <td class="english" >Blessed are You in the firmament of
                    heaven, And exceedingly to be blessed, and exalted above all forever.</td>
                <td class="coptic" >̀ Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓⲥ̀ⲧⲉⲣⲉⲱ̀ⲙⲁ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ :
                    ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲕ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">مبارك أنت فى فلك السماء ومتزايد بركة ومتزايد علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_6" class="north">
                <td class="english" >Bless the Lord, all you works of the
                    Lord: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ
                    : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركى الرب ياجميع أعمال الرب سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_7" class="south">
                <td class="english" >Bless the Lord, O heaven: Praise Him and
                    exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲛⲓⲫⲏⲟⲩⲓ̀ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركى الرب ايتها السموات سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_8" class="north">
                <td class="english" >Bless the Lord, all you angels of the
                    Lord: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ :
                    ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب يا جميع ملائكة الرب سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_9" class="south">
                <td class="english" >Bless the Lord, all you waters above the
                    heaven: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲉⲧⲥⲁ ⲡ̀ϣⲱⲓ
                    ⲛ̀ⲧ̀ⲫⲉ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركى الرب يا جميع المياه التي فوق السماء سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_10" class="north">
                <td class="english" >Bless the Lord, all you powers of the
                    Lord: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϫⲟⲙ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب يا جميع قوات الرب سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_11" class="south">
                <td class="english" >Bless the Lord, O sun and moon: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب أيتها الشمس والقمر سبّحاه وزيداه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_12" class="north">
                <td class="english" >Bless the Lord, all ye stars of heaven:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲓⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب ياسائر نجوم السماء سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_13" class="south">
                <td class="english" >Bless the Lord, O you rain and dew:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲟⲩⲛϩⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲱϯ: ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركى الرب أيتها الأمطار مع الأنداء سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_14" class="north">
                <td class="english" >Bless the Lord, O you clouds and winds:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϭⲏⲡⲓ ⲛⲉⲙ ⲛⲓⲑⲏⲟⲩ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها السحب والرياح سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_15" class="south">
                <td class="english" >Bless the Lord, all you spirits: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲡ̀ⲛⲉⲩⲙⲁ ⲧⲏⲣⲟⲩ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب ياجميع الأرواح سبحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_16" class="north">
                <td class="english" >Bless the Lord, O fire and heat: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲭ̀ⲣⲱⲙ ⲛⲉⲙ ⲡⲓⲕⲁⲩⲙⲁ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب أيتها النار والحرارة سبّحاه وزيداه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_17" class="south">
                <td class="english" >Bless the Lord, O cold and heat: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲱ̀ϫⲉⲃ ⲛⲉⲙ ⲡⲓⲕⲁⲩⲥⲱⲛ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب أيها البرد والحر سبّحاه وزيداه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_18" class="north">
                <td class="english" >Bless the Lord, O you dew and winds:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲓⲱϯ ⲛⲉⲙ ⲛⲓⲛⲓϥⲓ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الأهوية والأنداء سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_19" class="south">
                <td class="english" >Bless the Lord, O you night and days:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲉ̀ϫⲱⲣϩ ⲛⲉⲙ ⲛⲓⲉ̀ϩⲟⲟⲩ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الليالى والأيام سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_20" class="north">
                <td class="english" >Bless the Lord, O light and darkness:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛⲉⲙ ⲡⲓⲭⲁⲕⲓ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب أيها النور والظلمة سبّحاه وزيداه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_21" class="south">
                <td class="english" >Bless the Lord, O frost and cold: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓϫⲁϥ ⲛⲉⲙ ⲡⲓⲱ̀ϫⲉⲃ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب أيها البرد والصقيع سبّحاه وزيداه علواً إلى الآباد</td>
            </tr>
            <tr id="table_16_row_22" class="north">
                <td class="english" >Bless the Lord, O snow and ice: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ϯⲡⲁⲭⲛⲏ ⲛⲉⲙ ⲡⲓⲭⲓⲱⲛ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركا الرب أيها الجليد والثلج سبّحاه وزيداه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_23" class="south">
                <td class="english" >Bless the Lord, O you lightnings and
                    clouds: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲉⲧⲉⲃⲣⲏϫ ⲛⲉⲙ ⲛⲓϭⲏⲡⲓ: ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها البروق والسحب سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_24" class="north">
                <td class="english" >Bless the Lord, all the earth: Praise Him
                    and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲡⲓⲕⲁϩⲓ ⲧⲏⲣϥ : ϩⲱⲥ ⲉ̀ⲣⲟϥ
                    ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الأرض كلها سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_25" class="south">
                <td class="english" >Bless the Lord, O you mountains and all
                    hills: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲧⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟⲩ ⲧⲏⲣⲟⲩ
                    : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الجبال وجميع الآكام سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_26" class="north">
                <td class="english" >Bless the Lord, all you things that
                    spring upon the earth: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲧⲏⲣⲟⲩ ⲉⲧⲣⲏⲧ ϩⲓϫⲉⲛ ⲡ̀ϩⲟ
                    ⲙ̀ⲡ̀ⲕⲁϩⲓ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">بارك الرب يا جميع ما ينبت على وجه الأرض سبّحه وزيده علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_27" class="south">
                <td class="english" >Bless the Lord, O you fountains: Praise
                    Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲟⲩⲙⲓ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀
                    ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الينابيع سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_28" class="north">
                <td class="english" >Bless the Lord, O you seas and rivers:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲁ̀ⲙⲁⲓⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲁⲣⲱⲟⲩ: ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها البحار والأنهار سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_29" class="south">
                <td class="english" >Bless the Lord, O you whales and all that
                    moves in the waters: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲕⲏⲧⲟⲥ ⲛⲉⲙ ⲉⲛⲭⲁⲓ ⲛⲓⲃⲉⲛ ⲉⲧⲕⲓⲙ
                    ϧⲉⲛ ⲛⲓⲙⲱⲟⲩ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الحيتان وجميع ما يتحرك في المياه سبّحيه وزيديه علواً إلى الآباد.
                </td>
            </tr>
            <tr id="table_16_row_30" class="north">
                <td class="english" >Bless the Lord, all you birds of the sky:
                    Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϩⲁⲗⲁϯ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب يا جميع طيور السماء سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_31" class="south">
                <td class="english" >Bless the Lord, all you wild beasts and
                    cattle: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲑⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀
                    ⲧⲏⲣⲟⲩ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركي الرب أيتها الوحوش وكل البهائم سبّحيه وزيديه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_32" class="north">
                <td class="english" >Bless the Lord, O you sons of men;
                    worship the Lord: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ⲟⲩⲱϣⲧ
                    ⲙ̀Ⲡϭⲟⲓⲥ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب يا بنى البشر واسجدوا للرب سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_33" class="south">
                <td class="english" >Bless the Lord, O Israel: Praise Him and
                    exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ Ⲡⲓⲥ̀ⲣⲁⲏⲗ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀
                    ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">بارك الرب يا اسرائيل سبّحه وزيده علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_34" class="north">
                <td class="english" >Bless the Lord, O you priests of the
                    Lord: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲟⲩⲏⲃ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب يا كهنة الرب سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_35" class="south">
                <td class="english" >Bless the Lord, O you servants of the
                    Lord: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲉ̀ⲃⲓⲁⲓⲕ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ : ϩⲱⲥ
                    ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب يا عبيد الرب سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_36" class="north">
                <td class="english" >Bless the Lord, O you spirits and souls
                    of the just: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛⲉⲙ ⲛⲓⲯⲩⲭⲏ ⲛ̀ⲧⲉ
                    ⲛⲓⲑ̀ⲙⲏⲓ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب ياارواح وانفس الصديقين سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_37" class="south">
                <td class="english" >Bless the Lord, O you holy and humble of
                    heart: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ⲛⲏⲉⲧⲑⲉⲃⲓⲏ̀ⲟⲩⲧ
                    ϧⲉⲛ ⲡⲟⲩϩⲏⲧ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب أيها القديسون والمتواضعو القلوب سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_38" class="north">
                <td class="english" >Bless the Lord, O Hananiah, Azariah,
                    Mishael: Praise Him and exalt Him above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ̀ Ⲁⲛⲁⲛⲓⲁⲥ ̀Ⲁ̀ⲍⲁⲣⲓⲁⲥ Ⲙⲓⲥⲁⲏⲗ :
                    ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب ياحنانيا وعزاريا وميصائيل سبّحوه وزيدوه علواً إلى الآباد.</td>
            </tr>
            <tr id="table_16_row_39" class="south">
                <td class="english" >Bless the Lord, O you who worship the
                    Lord, the God of our fathers: Praise ye Him and exalt Him above all forever. ${cross}</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ Ⲡϭⲟⲓⲥ ⲛⲏⲉⲧⲉⲣⲥⲉⲃⲉⲥⲑⲉ ⲙ̀Ⲡϭⲟⲓⲥ Ⲫϯ ⲛ̀ⲧⲉ
                    ⲛⲉⲛⲓⲟϯ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁⲣⲓϩⲟⲩⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ. ${cross}</td>
                <td class="arabic">باركوا الرب ياعابدي الرب اله آبائنا سبّحوه وزيدوه علواً إلى الآباد. ${cross}</td>
            </tr>
        </tbody>
    </table>

    <table id="table_17" style="display: table;" title="Psali of the Three Young Men Ⲁⲣⲓⲯⲁⲗⲓⲛ">
        <caption id="caption_table_17" class="caption">Psali of the Three Young Men<br /><span
                class="coptic-caption"> Ⲁⲣⲓⲯⲁⲗⲓⲛ</span>
                    <span class="arabic-caption">ابصالية الثلاثة فية</span>
                </caption>
        <tbody>
            <tr id="table_17_row_0" class="north">
                <td class="english" >O sing unto Him who was crucified,
                    buried, and resurrected for us, and trampled and abolished death. Praise Him and exalt Him above
                    all.</td>
                <td class="coptic" >Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲉ̀ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ : ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲟⲩⲟϩ
                    ⲁⲩⲕⲟⲥϥ: ⲁϥⲧⲱⲛϥ ⲁϥⲕⲱⲣϥ ⲙ̀ⲫ̀ⲙⲟⲩ ⲁϥϯ ϣⲟϣϥ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">رتلوا للذي صلب عنا وقبر وقام وأبطل الموت وأهانه سبّحوه وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_1" class="north">
                <td class="english" >Take off the old man, and put on the new
                    and superior one, come closer to greatness of mercy, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲃⲱϣ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲙ̀ⲡⲁⲗⲉⲟⲥ: ⲟⲩⲟϩ ϫⲱⲗϩ ⲙ̀ⲡⲓⲃⲉⲣⲓ
                    ⲉⲩⲕ̀ⲗⲉⲟⲥ: ⲟⲩⲟϩ ⲉ̀ϧⲱⲛⲧ ⲉ̀ⲙⲉⲅⲁⲉ̀ⲗⲉⲟⲥ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">اخلعوا الإنسان العتيق والبسوا الجديد الفاخر. واقتربوا إلى عظم الرحمة سبّحوه
                    وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_2" class="south">
                <td class="english" >All you Christian people, the priests and
                    the deacons, glorify the Lord for He is worthy, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓ̀ⲁⲛⲟⲥ: ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲕⲉ
                    ⲇⲓⲁ̀ⲕⲟⲛⲟⲥ: ⲙⲁⲱ̀ⲟⲩ ⲙ̀Ⲡϭⲟⲓⲥ ϫⲉ ⲟⲩϩⲓⲕⲁⲛⲟⲥ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">ياجنس المسيحين القسوس والشمامسة أعطوا مجداً للرب لانه مستوجب سبّحوه وزيدوه
                    علواً.</td>
            </tr>
            <tr id="table_17_row_3" class="south">
                <td class="english" >Come to us O three children, whom Christ
                    our God has lifted, and from the devil has delivered, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲇⲉⲩⲧⲉ ϩⲁⲣⲟⲛ ⲱ̀ ⲡⲓϣⲟⲙⲧ ⲛ̀ⲁ̀ⲗⲟⲩ : ⲉ̀ⲧⲁ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲟ̀ⲗⲟⲩ : ⲁϥⲛⲁϩⲙⲟⲩ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲓⲇⲓⲁ̀ⲃⲟⲗⲟⲩ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">هلمّ إلينا أيها الثلاثة فتية الذين رفعهم المسيح إلهنا وأنقذهم من ابليس. سبّحوه
                    وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_4" class="north">
                <td class="english" >For the sake of your God the Messiah, the
                    giver of all good things, come unto us O Hananiah, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ Ⲡⲉⲕⲛⲟⲩϯ Ⲙⲁⲥⲓⲁⲥ ⲫ̀ⲣⲉϥϯ ⲛ̀ⲉⲩⲉⲣⲅⲉⲥⲓⲁⲥ:
                    ⲁ̀ⲙⲟⲩ ϣⲁⲣⲟⲛ Ⲁⲛⲁⲛⲓⲁⲥ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">من أجل الهك ماسيا المانح الإحسان هلمّ إلينا ياحنانيا سبّحوه وزيدوه علوا.</td>
            </tr>
            <tr id="table_17_row_5" class="north">
                <td class="english" >O Azariah the zealot, evening, and
                    morning and at noon glorify the power of the Trinity, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲍⲏⲗⲱⲧⲉ Ⲁⲍⲁⲣⲓⲁⲥ ⲉⲥⲡⲉⲣⲁⲥ ⲕⲉ ⲡ̀ⲣⲱⲓ̀ ⲕⲉ
                    ⲙⲉⲥⲏⲙⲃ̀ⲣⲓⲁⲥ: ⲙⲁⲱ̀ⲟⲩ ⲛ̀ⲧ̀ϫⲟⲙ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">يا عزاريا الغيور عشية وبكرة والظهيرة أعط مجداً لقوة الثالوث. سبّحه وزده علواً.
                </td>
            </tr>
            <tr id="table_17_row_6" class="south">
                <td class="english" >Behold Emmanuel, is now in our midst O
                    Mishael, proclaim with the voice of joy, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲏⲡⲡⲉ ⲅⲁⲣ ⲓⲥ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϩⲓⲧⲉⲛ ⲙⲏϯ ⲱ̀
                    Ⲙⲓⲥⲁⲏⲗ: ⲗⲁⲗⲓ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">فها هوذا عمانوئيل فى وسطنا يا ميصائيل تكلم بصوت التهليل. سبّحه وزده علواً.</td>
            </tr>
            <tr id="table_17_row_7" class="south">
                <td class="english" >Gather now and persevere, and proclaim
                    with the priests, bless the Lord all His works, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲑⲱⲟⲩϯ ϯⲛⲟⲩ ⲕⲁⲧⲁⲭⲓⲛ ⲧⲏⲣⲟⲩ: ⲥⲁϫⲓ ⲛⲉⲙ
                    ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲏⲣⲟⲩ: ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀ ⲧⲏⲣⲟⲩ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">اجتمعوا وثابروا جميعاً. تكلموا مع القسوس وسبّحى الرب ياجميع أعماله سبّحوه وزيدوه
                    علواً.</td>
            </tr>
            <tr id="table_17_row_8" class="north">
                <td class="english" >The heavens declare the glory, of God
                    until this day, O you angels whom He has made, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲓⲥ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲥⲉⲥⲁϫⲓ ⲙ̀ⲡ̀ⲱ̀ⲟⲩ: ⲙ̀Ⲫⲛⲟⲩϯ ϣⲁ
                    ⲉ̀ϧⲟⲩⲛ ⲙ̀ⲫⲟⲟⲩ: ⲱ̀ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲉ̀ⲧⲁϥϫ̀ⲫⲱⲟⲩ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">ها السموات تنطق بمجد الله الى هذا اليوم. يا أيها الملائكة الذين أنشأهم سبحوه
                    وزيدوه علواً</td>
            </tr>
            <tr id="table_17_row_9" class="north">
                <td class="english" >Now all you powers of the Lord, bless His
                    honored name, O sun and moon and all the stars, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲕⲉ ⲛⲩⲛ ⲇⲩⲛⲁⲙⲓⲥ ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ
                    ⲧⲟⲩ ⲧⲓⲙⲓⲟⲩ: ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ ⲛⲉⲙ ⲛⲓⲥⲓⲟⲩ: ϩⲱⲥ ̀ ⲉⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">والآن ياقوات الرب باركوا أسمه الكريم. أيتها الشمس والقمر والنجوم. سبّحيه وزيديه
                    علواً.</td>
            </tr>
            <tr id="table_17_row_10" class="south">
                <td class="english" >And also O you rain and dew, sing praises
                    unto our Savior, for He is God of our fathers, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲗⲟⲓⲡⲟⲛ ⲛⲓⲙⲟⲩⲛ̀ϩⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲱϯ: ⲉⲩⲫⲏⲙⲓⲥⲁⲧⲉ
                    ⲡⲉⲛⲣⲉϥⲥⲱϯ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">وأيضا ايتها الأمطار والأنداء امدحى مخلصنا لأنه هو اله آبائنا. سبحيه وزيديه علواً.
                </td>
            </tr>
            <tr id="table_17_row_11" class="south">
                <td class="english" >Glorify the Lord O clouds and winds,
                    together with the souls and the spirits, O you cold and fire and heat, Praise Him and exalt Him
                    above all.</td>
                <td class="coptic" >Ⲙⲁⲱ̀ⲟⲩ ⲙ̀Ⲡϭⲟⲓⲥ ⲱ̀ ⲛⲓϭⲏⲡⲓ ⲉⲩⲙⲁ: ⲛⲓⲑⲏⲟⲩ ⲛⲉⲙ
                    ⲛⲓⲛⲓϥⲓ ⲛⲉⲙ ⲛⲓⲡ̀ⲛⲉⲩⲙⲁ: ⲡⲓϫⲁϥ ⲛⲉⲙ ⲡⲓⲭ̀ⲣⲱⲙ ⲛⲉⲙ ⲡⲓⲕⲁⲩⲙⲁ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">أعطى مجداً أيتها السحب معاً والأهوية والنفوس والأرواح والبرد والنار والحرارة.
                    سبّحيه وزيده علوا.</td>
            </tr>
            <tr id="table_17_row_12" class="north">
                <td class="english" >You also nights and days, light and
                    darkness and lightning, glorify the Lover of Mankind, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲛⲩⲕⲧⲉⲥ ⲕⲉ ⲏ̀ⲙⲉⲣⲉ ⲣⲱ ⲡⲉ: ⲫⲱⲥⲕⲉ ⲥ̀ⲕⲟⲧⲟⲥ ⲕⲉ
                    ⲁⲥⲧ̀ⲣⲁⲡⲉ: ϫⲉ ⲇⲟⲝⲁⲥⲓ ⲫⲓⲗⲁⲛⲑ̀ⲣⲱⲡⲉ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">ايتها الليالى والأيام أيضاً والنور والظلمة والبروق قائلة المجد لك يا محب البشر.
                    سبّحوه وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_13" class="north">
                <td class="english" >You trees and all that springs on the
                    earth, and all that moves in the waters, mountains and the forests, Praise Him and exalt Him
                    above all.</td>
                <td class="coptic" >Ⲝⲩⲗⲁ ⲕⲉ ⲡⲁⲛⲧⲁ ⲧⲁ ⲫⲩⲟⲙⲉⲛⲁ: ⲉⲛ ⲧⲏ ⲅⲉ ⲕⲉ
                    ⲡⲁⲛⲧⲁ ⲧⲁⲕⲓⲛⲟⲩⲙⲉⲛⲁ: ϩⲓ ⲛⲓⲙⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲧⲱⲟⲩ ⲛⲉⲙ ⲇ̀ⲣⲩⲙⲟⲛⲁ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">أيتها الاشجار وجميع ما ينبت فى الأرض وكل ما يتحرك في المياه والجبال والغياض
                    سبّحوه وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_14" class="south">
                <td class="english" >Praise without ceasing, the Lord the King
                    of the Kings, O you rivers and seas, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲟⲛ ⲥ̀ⲙⲟⲩ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ: ⲉ̀Ⲡϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ
                    ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲛⲓⲁ̀ⲙⲁⲓⲟⲩ ⲛⲉⲙ ⲛⲓⲓⲁⲣⲱⲟⲩ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">وأيضاً سبّحى بغير فتور الرب ملك الملوك أيتها البحار والأنهار. سبّحيه وزيديه
                    علواً.</td>
            </tr>
            <tr id="table_17_row_15" class="south">
                <td class="english" >And we also seeing them, let us say with
                    all these things, bless the Lord all you birds, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲡⲁⲓⲣⲏϯ ⲁⲛⲟⲛ ⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲙⲁⲣⲉⲛϫⲟⲥ ⲛⲉⲙ
                    ⲛⲁⲓ ⲟⲛ ⲧⲏⲣⲟⲩ: ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲛⲓϩⲁⲗⲁϯ ⲧⲏⲣⲟⲩ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">هكذا نحن إذ ننظر اليهم فلنقل مع هذه الموجودات جميعها باركي الرب يا جميع الطيور
                    سبّحيه وزيديه علواً.</td>
            </tr>
            <tr id="table_17_row_16" class="north">
                <td class="english" >O snow and ice, cattle and wild beasts,
                    bless the Lord of Lords, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲣⲱ ⲛ̀ⲛⲓⲡⲁⲭⲛⲏ ⲛⲉⲙ ⲛⲓⲭⲓⲱⲛ: ⲕⲉ ⲕ̀ⲧⲏⲛⲱⲛ ⲛⲉⲙ
                    ⲛⲓⲑⲏⲣⲓⲟⲛ: ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲧⲱⲛ ⲕⲩⲣⲓⲟⲛ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">أيها الجليد والثلج والبهائم والوحوش باركي رب الارباب سبّحيه وزيديه علواً.</td>
            </tr>
            <tr id="table_17_row_17" class="north">
                <td class="english" >Bless the Lord as befits Him, and not
                    like the disobedient, all you sons of men, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲕⲁⲧⲁ ⲫ̀ⲧⲱⲙⲓ: ⲉ̀ⲣⲟϥ ⲕⲉ ⲟⲩ ⲙⲏ
                    ⲡⲁⲣⲁⲛⲟⲙⲓ: ⲱ̀ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">سبّحوا الرب كما يليق به وليس كالمخالفين يا أبناء البشر. سبّحوه وزيدوه علواًً.
                </td>
            </tr>
            <tr id="table_17_row_18" class="south">
                <td class="english" >O Israel offer before him, honor and
                    glory in a joyful voice, all you priests of Emmanuel, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲧⲓⲙⲏ ⲕⲉ ⲇⲟⲝⲁ ⲱ̀ Ⲡⲓⲥⲣⲁⲏⲗ ⲓ̀ⲛⲓ ⲛⲁϩⲣⲁϥ ϧⲉⲛ
                    ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ⲛⲓⲟⲩⲏⲃ ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">مجداً وإكراماً قدم أمامه يا اسرائيل بصوت التهليل. يا كهنة عمانوئيل سبّحوه وزيدوه
                    علواً.</td>
            </tr>
            <tr id="table_17_row_19" class="south">
                <td class="english" >You servants of the true God, the souls
                    of the righteous, and the humble and the charitable, Praise Him and exalt Him above all.</td>
                <td class="coptic" >̀̀̀̀ Ⲩⲡⲏⲣⲉⲧⲱⲛ ⲙ̀Ⲫⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ: ⲛⲉⲙ ⲛⲓⲯⲩⲭⲏ
                    ⲛ̀ⲧⲉ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲏⲉⲧⲑⲉⲃⲓⲏ̀ⲟⲩⲧ ⲛ̀ⲣⲉϥⲙⲉⲓ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">يا خدام الله الحقيقي وأنفس الأبرار المتواضعين المحبين سبّحوه وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_20" class="north">
                <td class="english" >God my God is the one, who saved you from
                    danger, O Sedrach Misach and Abdenago, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲫⲛⲟⲩϯ Ⲡⲁⲛⲟⲩϯ ⲉ̀ⲅⲱ: ⲡⲉⲧⲉⲛⲣⲉϥⲥⲱϯ ⲉⲕⲧⲟⲛ ⲁ̀ⲅⲱ:
                    Ⲥⲉⲇⲣⲁⲭ Ⲙⲓⲥⲁⲭ Ⲁⲃⲇⲉⲛⲁⲅⲱ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">الله إلهى أنا هو مخلصكم من الخطر ياسدراك وميساك وأبدناغو. سبّحوه وزيدوه علوا.
                </td>
            </tr>
            <tr id="table_17_row_21" class="north">
                <td class="english" >Hurry with great haste, O you righteous
                    of the Lord, and all the creatures He has made, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲭⲱⲗⲉⲙ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϣ̀ⲣⲱⲓⲥ: ⲱ̀
                    ⲛⲏⲉⲧⲉⲣⲥⲉⲃⲉⲥⲑⲉ ⲙ̀Ⲡϭⲟⲓⲥ: ⲛⲉⲙ ⲛⲓⲫⲩⲥⲓⲥ ⲧⲏⲣⲟⲩ ⲉⲧⲁϥⲁⲓⲥ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">أسرعوا بحرص عظيم يا أتقياء الرب وكل الطبائع التي صنعها سبّحوه وزيدوه علواً.</td>
            </tr>
            <tr id="table_17_row_22" class="south">
                <td class="english" >Coolness and repose without ceasing,
                    grant unto all of us, that we may joyfully proclaim, Praise Him and exalt Him above all.</td>
                <td class="coptic" >Ⲯⲩⲭⲟⲥ ⲕⲉ ⲁ̀ⲛⲁⲡⲁⲩⲥⲓⲥ: ⲙⲟⲓ ⲛⲁⲛ ⲧⲏⲣⲉⲛ ⲭⲱⲣⲓⲥ
                    ⲑ̀ⲣⲁⲩⲥⲓⲥ: ⲉⲑⲣⲉⲛϫⲱ ϧⲉⲛ ⲟⲩⲁ̀ⲡⲟⲗⲁⲩⲥⲓⲥ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
                <td class="arabic">برودة ونياحاً أعطنا كلنا بغير انقطاع لنقول بتمتع سبّحوه وزيدوه علوا.ً</td>
            </tr>
            <tr id="table_17_row_23" class="south">
                <td class="english" >And also Your poor servant Sarkis, make
                    him without condemnation, that we may join all those and say, Praise Him and exalt Him above
                    all. ${cross}</td>
                <td class="coptic" >Ⲱⲥⲁⲩⲧⲱⲥ ⲡⲉⲕⲃⲱⲕ ⲡⲓⲡ̀ⲧⲱⲭⲟⲥ: Ⲥⲁⲣⲕⲓⲥ ⲁ̀ⲣⲓⲧϥ
                    ⲉϥⲟⲓ ⲛ̀ⲉ̀ⲛⲟⲭⲟⲥ ⲉ̀ⲥⲁϫⲓ ⲛⲉⲙ ⲛⲁⲓ ϩⲱⲥ ⲙⲉⲧⲟⲭⲟⲥ: ϩⲱⲥ ̀ ⲉⲣⲟϥ ̀ ⲁ̀ⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ. ${cross}</td>
                <td class="arabic">كذلك عبدك المسكين سركيس اجعله بغير دينونة. ليقول مع هؤلاء كشريك سبّحوه وزيدوه
                    علواً. ${cross}</td>
            </tr>
        </tbody>
    </table>

    ${postThirdCanticle}


    <table id="table_19" style="display: table;" title="Hymn of the Three Young Men Ⲧⲉⲛⲉⲛ">
        <caption id="caption_table_19" class="caption">Hymn of the Three Young Men
        <span class="coptic-caption">Ⲧⲉⲛⲉⲛ</span>
        <span class="arabic-caption">لحن الثلاثة  الفتية</span>
        </caption>
        <tbody>
            <tr id="table_19_row_0" class="north">
                <td class="english" >We therefore present an offering and
                    rational worship; we send unto you this day psalmodies for Your glory O our Savior; Hananiah
                    Azariah and Mishael.</td>
                <td class="coptic" >Ⲧⲉⲛⲉⲛ ⲟⲑⲉⲛ ⲑⲩⲥⲓⲁⲛ ⲕⲉ ⲧⲏⲛ ⲗⲟⲅⲓⲕⲏⲛ ⲗⲁⲧⲣⲓⲁⲛ :
                    ⲁ̀ⲛⲁⲡⲉⲙⲡⲱⲙⲉⲛ ⲥⲉⲁⲩⲧⲱ ⲥⲏⲙⲉⲣⲟⲛ ⲱ̀ⲇⲁⲥ : ⲡ̀ⲣⲟⲥ ⲇⲟⲝⲁ ⲥⲟⲩ ⲥⲱⲧⲏⲣ ⲏ̀ⲙⲱⲛ : ̀ Ⲁⲛⲁⲛⲓⲁⲥ ̀Ⲁ̀ⲍⲁⲣⲓⲁⲥ ⲕⲉ Ⲙⲓⲥⲁⲏⲗ.
                </td>
                <td class="arabic">فمن ثم نقدم الذبيحة والعبادة العقلية. ونرسل لك في هذا اليوم التسابيح لدى مجدك يا
                    مخلصنا. حنانيا وعزاريا وميصائيل.</td>
            </tr>
            <tr id="table_19_row_1" class="south">
                <td class="english" >When they were raised to take glory in
                    their bodies, the angel came down, stopped the fire and became cool for Hananiah Azariah and
                    Mishael.</td>
                <td class="coptic" >Ⲧⲣⲓⲟⲛ ⲡⲁⲓⲑⲟⲛ ⲛ̀ϫⲉ ⲙⲉⲗⲓⲛ ⲛⲁⲧⲟⲩ ⲡⲉⲣⲟⲥ ⲇⲟⲝⲁ
                    ⲙ̀ⲡ̀ⲥⲁⲧⲉⲧⲟⲩ: ⲥⲱⲙⲁⲧⲟⲥ ⲁⲅⲅⲉⲗⲟⲥ ⲅⲁⲣ ⲥⲉⲛⲁⲥⲉⲗ ⲑⲉⲇⲉ : ⲁⲩⲧⲟⲕⲓⲑⲟⲛ ⲫ̀ⲗⲓⲅⲁⲣⲧⲏⲥ : ⲉ̀ⲗⲉⲩⲥⲉⲱ̀ⲛ ⲏ̀ⲙⲱⲛ : ̀
                    Ⲁⲛⲁⲛⲓⲁⲥ ̀ Ⲁⲍⲁⲣⲓⲁⲥ ⲕⲉ Ⲙⲓⲥⲁⲏⲗ.</td>
                <td class="arabic">لما رُفعوا ليأخذوا المجد فى أجسادهم انحدر ملاك وأطفأ اللهيب وصيره بارداً عن
                    حنانيا وعزاريا وميصائيل.</td>
            </tr>
            <tr id="table_19_row_2" class="north">
                <td class="english" >Praise and Glorify God at times. ${cross}</td>
                <td class="coptic" >Ⲉⲩϩⲱⲥ ⲉⲩⲥ̀ⲙⲟⲩ ⲉ̀Ⲫϯ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ. ${cross}</td>
                <td class="arabic">يسبحون ويباركون الله فى كل حين. ${cross}</td>
            </tr>
        </tbody>
    </table>

    <table id="table_20" style="display: table;" title="We Follow You Ⲧⲉⲛⲟⲩⲉϩ ⲛ̀ⲥⲱⲕ">
        <caption id="caption_table_20" class="caption">We Follow You <br /><span class="coptic-caption">Ⲧⲉⲛⲟⲩⲉϩ
                ⲛ̀ⲥⲱⲕ</span>
                <span class="arabic-caption">نتبعك بكل قلوبنا</span>
                </caption>
        <tbody>
            <tr id="table_20_row_0" class="north">
                <td class="english" >We follow You with all our hearts, and we
                    fear You, and we seek Your face, O God do not forsake us.</td>
                <td class="coptic" >Ⲧⲉⲛⲟⲩⲉϩ ⲛ̀ⲥⲱⲕ ϧⲉⲛ ⲡⲉⲛϩⲏⲧ ⲧⲏⲣϥ : ⲧⲉⲛⲉⲣϩⲟϯ
                    ϧⲁⲧⲉⲕϩⲏ : ⲟⲩⲟϩ ⲧⲉⲛⲕⲱϯ ⲛ̀ⲥⲁ ⲡⲉⲕϩⲟ : Ⲫϯ ⲙ̀ⲡⲉⲣϯϣⲓⲡⲓ ⲛⲁⲛ.</td>
                <td class="arabic">نتبعك بكل قلوبنا ونخافك ونطلب وجهك يا الله لا تخزنا.</td>
            </tr>
            <tr id="table_20_row_1" class="south">
                <td class="english" >But rather deal with us, according to
                    Your meekness, and according to Your great mercy, O Lord help us.</td>
                <td class="coptic" >Ⲁⲗⲗⲁ ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ : ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲉ̀ⲡⲓⲕⲏⲥ :
                    ⲛⲉⲙ ⲕⲁⲧⲁ ⲡ̀ⲁ̀ϣⲁⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲛⲁⲓ : Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ.</td>
                <td class="arabic">بل إصنع معنا بحسب دعتك وكثرة رحمتك يارب أعنّا.</td>
            </tr>
            <tr id="table_20_row_2" class="north">
                <td class="english" >May our prayers ascend unto You, O our
                    Master, like burnt offerings of lambs, and fatted calves.</td>
                <td class="coptic" >Ⲙⲁⲣⲉ ⲧⲉⲛⲡ̀ⲣⲟⲥⲉⲩⲭⲏ ⲡⲉⲛⲛⲏⲃ : ⲓ̀ ⲉ̀ⲡ̀ϣⲱⲓ
                    ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ : ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛϭ̀ⲗⲓⲗ ⲛ̀ⲧⲉ ϩⲁⲛⲱⲓⲗⲓ: ⲛⲉⲙ ϩⲁⲛⲙⲁⲥⲓ ⲉⲩⲕⲉⲛⲓⲱ̀ⲟⲩⲧ.</td>
                <td class="arabic">فلتصعد صلاتنا أمامك يا سيدنا مثل محرقات كباش وعجول سمان.</td>
            </tr>
            <tr id="table_20_row_3" class="south">
                <td class="english" >Do not forget the covenant, Which You
                    have made with our fathers, Abraham, Isaac, and Jacob. Israel, Your Holy one.</td>
                <td class="coptic" >˙Ⲙⲡⲉⲣⲉⲣⲡ̀ⲱⲃϣ ⲛ̀ϯⲇⲓⲁ̀ⲑⲏⲕⲏ : ⲑⲏⲉ̀ⲧⲁⲕⲥⲉⲙⲛⲏⲧⲥ
                    ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ : Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ : Ⲡⲓⲥ̀ⲣⲁⲏⲗ ⲡⲉⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ.</td>
                <td class="arabic">لا تنس العهد الذى قطعته مع آبائنا ابراهيم واسحق ويعقوب اسرائيل قديسك.</td>
            </tr>
            <tr id="table_20_row_4" class="north">
                <td class="english" >Bless the Lord all you nations; the
                    tribes and all kinds of tongues. praise Him and glorify Him, above all forever.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ : ⲛⲓⲫⲩⲗⲏ
                    ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲗⲁⲥ : ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲙⲁⲱ̀ⲟⲩ ⲛⲁϥ : ⲁ̀ⲣⲓϩⲟⲓⲟ̀ ϭⲁⲥϥ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">باركوا الرب ياجميع الشعوب والقبائل ولغات الالسن سبحوه ومجدوه وزيدوه علواً إلى
                    الآباد.</td>
            </tr>
            <tr id="table_20_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O three
                    saintly children, Sedrach, Misach and Abednego, that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱ̅: ⲱ̀ ⲡⲓϣⲟⲙⲧ
                    ⲛ̀ⲁ̀ⲗⲟⲩ ⲛ̀ⲁ̀ⲅⲓⲟⲥ : Ⲥⲉⲇⲣⲁⲕ Ⲙⲓⲥⲁⲕ Ⲁⲃⲇⲉⲛⲁⲅⲱ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">أطلبوا من الرب عنا أيها الثلاثة فتية القديسين سدراك وميساك وابدناغو ليغفر لنا
                    خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>

    ${commemoration}


    <table id="table_30" title="Doxologies">
        <caption id="caption_table_30" class="caption" style="display:none">Doxologies
            <span class="arabic-caption">الذكصولوجيات</span>
        </caption>
        <tr id="table_30_row_0" data-navigation="Doxologies" class="navigationLink">
            <td class="englishLink">Doxologies</td>
            <td class="arabicLink">الذكصولوجيات</td>
        </tr>

    </table>

${adamDoxologiesConclusion}
${fourthCanticle}
${postFourthCanticle}
${psali}
${postPsali}
${preTheotokia}
${theotokia}
${midnightPsalmodyConclusion}
${morningDoxology}

    </div>

</body>
`};

