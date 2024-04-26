import { hourIntro, paschalPraise3 , copticGospelIntro, daytimeExpositionIntro, expositionConclusion, daytimeLitanies, cross} from "../repeatedPrayers";

export const DOF12 = () => {
    const introCommentary = `
    <td class="english">The door of the sanctuary and chorus is opened and the sanctuary is covered with a covering befitting Joyous Saturday. The candles are lit and lanterns are turned on. The crucifixion icon and crosses are prepared. The priests, wearing their vestments and carrying the censors and incense, beign reading the Lamentations of Jeremiah. The priests and deacons then go up to the top of the "Enbel" with their heads uncovered while carrying the icon, crosses, censors, and candles and they begin praying <span class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ </span> one verse above the "Enbel" and one verse below twelve times. The psalm <span class="coptic">Ⲡⲉⲕⲑ̀ⲣⲟⲛⲟⲥ </span> is then prayed in the Shamy tune from above the "Enbel".</td>
    <td class="arabic">يفتح باب الهيكل والخورس ويكسى الهيكل بكسوة تلائم سبت الفرح وتوقد الشموع وتضاء القناديل وتجهز ايقونة الصلبوت الشريف والصلبان. والكهنة لابسين بدلهم وحاملين المجامر والبخور ويبتدئون بقراءة مراثي أرميا ثم يصعد الكهنة والشمامسة الى علو الأنبل مكشوفي الرؤوس وهم حاملين القون والصلبان والمجامر والشموع ويبتدئون بقراءة  <span class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ </span> ربع فوق الأنبل وربع أسفل اثنى عشر دفعة ثم يطرح المزمور بالشامي <span class="coptic">Ⲡⲉⲕⲑ̀ⲣⲟⲛⲟⲥ </span> فوق الأنبل.</td>
`;
    const hourIntroHtml = hourIntro("TWELFTH","الثانية عشر","DAY of GREAT FRIDAY","يوم الجمعة العظيمة",introCommentary);
    const paschalPraiseHtml = paschalPraise3("4","5","6","TWELFTH","الثانية عشر","DAY of GREAT FRIDAY","يوم الجمعة العظيمة");
    const copticGospelIntroHtml = copticGospelIntro("8");
    const daytimeExpositionIntroHtml = daytimeExpositionIntro("16");
    const expositionConclusionHtml = expositionConclusion("18");
    const daytimeLitaniesHtml = daytimeLitanies("19",true);



return `

${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
    <caption class="caption" id="caption_table_2">Coptic Prophecies
    <span class="arabic-caption">النبوات قبطياً</span></caption>
        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲑ̀ⲣⲓⲛⲟⲓ Ⲓⲉⲣⲉⲙⲓⲟⲩ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁⲛⲟⲕ ⲫ̀ⲣⲱⲙⲓ ⲁ̀ⲛⲟⲕ ⲉⲑⲛⲁⲩ ⲉ̀ϯⲙⲉⲧϩⲏⲕⲓ : ⲁϥⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ ϧⲉⲛ ⲡⲓϣⲃⲱⲧ ⲛ̀ⲧⲉ ⲡⲉϥϫⲱⲛⲧ. Ⲁϥⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟⲓ ⲟⲩⲟϩ ⲁϥⲟⲗⲧ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲟⲩⲭⲁⲕⲓ ⲉ̀ⲟⲩⲱⲓⲛⲓ ⲁⲛ : ⲡ̀ⲗⲏⲛ ⲁϥⲧⲁⲥⲑⲟ ⲛ̀ⲧⲉϥϫⲓϫ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧ ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣϥ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲓⲱⲛⲁ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ:</td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲟ̀ⲩⲟϩ ⲁϥⲉⲣϩⲟϯ ⲛ̀ϫⲉ ⲛⲓⲣⲱⲙⲓ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲟϯ ⲟⲩⲟϩ ⲡⲉϫⲱⲟⲩ ⲛⲁϥϫⲉⲟⲩ ⲡⲉ ⲫⲁⲓ ⲉ̀ⲧⲁⲕⲁⲓϥ ⲛⲁⲛ ϫⲉⲟⲩⲏⲓ ⲁⲩⲉ̀ⲙⲓ ⲛ̀ϫⲉ ⲛⲓⲣⲱⲙⲓ ϫⲉ ⲛⲁϥ ⲫⲏⲧ ⲉ̀ⲃⲟⲗϩⲁ ⲡ̀ϩⲟ ⲙ̀Ⲡ⳪.</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲛⲉϩ ⲧⲏⲣⲟⲩ: ⲁ̀ⲙⲏⲛ.</td>
        </tr>
    </table>
</div>


<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    <table id="table_3" title="1st Prophecy">
        <caption id="caption_table_3" class="caption">1st Prophecy<br>(Lamentations 3:1-66)
        <span class="arabic-caption">النبوة الأولي<br>(مراثى أرميا 3: 1 - 66)</span></caption>
        <tr id="table_3_row_1" class="intro">
            <td class="english">A reading from the book of Lamentations of Jeremiah the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من مراثى أرميا النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_3_row_4" class="text">
            <td class="english">I am the man that sees poverty, through the rod of His wrath upon me. He has taken me, and led me away into darkness, and not into light.   Nay, against me has He turned His hand all the day.</td>
            <td class="arabic">أنا هو الرجل الذى رأى الـمـذلة. أتى علـىّ بقضيـب غضبه. قادني وسـيـرنى في الظلمة لا في النـور. والآن رد يـده عـلىّ النهار كله.</td>
        </tr>
        <tr id="table_3_row_5" class="text">
            <td class="english">He has made old my flesh and my skin; He has broken my bones. He has built against me, and compassed my head, and brought travail upon me. He has set me in dark places, as them that have long been dead.</td>
            <td class="arabic">أبلى لحمى وجلدي وسحق عظامي. أحاط بي ونكس رأسي، وأذلني وأجلسني في مواضع مظلمة، مثل الموتى منذ القدم.</td>
        </tr>
        <tr id="table_3_row_6" class="text">
            <td class="english">He has hedged me in, and I cannot come forth; He has made my brazen chain heavy. Yea, though I cry and shout, He shuts out my prayer. He has built up my ways, He has hedged my paths;</td>
            <td class="arabic">سيج علىّ حتى لا أخرج، ضاعف ربطي ووثق سلسلتي. أدعوه فلم يستجيب لي. وأصرخ إليه فلم يسر، وصد صلاتي. سيج سبلي وأغلق طرقي المسلوكة.</td>
        </tr>
        <tr id="table_3_row_7" class="text">
            <td class="english">He has troubled me, as a female bear lying in wait; He is to me as a lion in secret places. He pursued me after I departed, and brought me to a stand; He has utterly ruined me. He has bent His bow, and set me as a mark for the arrow.</td>
            <td class="arabic">فقلق جسم قوى. صار لي كدب كامن وكأسد في موضع مختفى. طاردني وصرعني وتركني هالكاً. أوتر قوسه وأقامني هدفاً ليلقى فيّ سهامه.</td>
        </tr>
        <tr id="table_3_row_8" class="text">
            <td class="english">He has caused the arrows of His quiver to enter into my reins. I became a laughing stock to all my people; and their song all the day. He has filled me with bitterness, He has drenched me with gall.</td>
            <td class="arabic">أدخل في كليتي نبال جعبته. صرت ضحكة لكل شعبي وأغنية لهم النهار كله. جرعني الحنظل. وأسكرني من العلقم.</td>
        </tr>
        <tr id="table_3_row_9" class="text">
            <td class="english">And He has dashed out my teeth with gravel, He has fed me with ashes. He has also removed my soul from peace: I forgot prosperity. Therefore my success has perished, and my hope from the Lord.</td>
            <td class="arabic">هتم بالحصى أسناني وأطعمني الرماد. أبعد نفسي عن السلام. ونسيت خيراتي.  وباد اقنومي ورجائي من الرب.</td>
        </tr>
        <tr id="table_3_row_10" class="text">
            <td class="english">I remembered by reason of my poverty, and because of persecution my bitterness and gall shall be remembered; and my soul shall meditate with me. This will I lay up in my heart, therefore I will endure.</td>
            <td class="arabic">أذكر بؤسى وشقائي والا فسنتين والمرارة التى لم تبرح من ذاكرتي. هذا ما تردده نفسي في، وأشعر به في قلبي.</td>
        </tr>
        <tr id="table_3_row_11" class="text">
            <td class="english">It is through the mercies of the Lord that He has not failed me, because His compassions are not exhausted. Pity us, O Lord, early every month: for we are not brought to an end, because His compassions are not exhausted. They are new every morning: great is Your faithfulness.  The Lord is my portion, says my soul; therefore will I wait for Him.</td>
            <td class="arabic">من أجل ذلك أتمسك بمراحم الرب لأنه لم يتركني عنه. لأن رأفته لا تزول على ممر الشهور والأيام كله. ارحمنا يارب في فنائنا لأن رأفتك لا تفرغ وهي جديدة في كل صباح وعظيم هو إيمانك. قالت نفسي نصيبي هو الرب، فلذلك أرجوه.</td>
        </tr>
        <tr id="table_3_row_12" class="text">
            <td class="english">The Lord is good to them that wait for Him; the soul which shall seek Him   is good, and shall wait for, and quietly expect salvation from the Lord. It is good for a man when he bears a yoke in his youth.</td>
            <td class="arabic">صالح هو الرب للذين يترجونه. طيب هو للنفس التى تطلبه وتتوقع بسكوت خلاص الرب. جيد للرجل أن يحمل النير من منذ صباه.</td>
        </tr>
        <tr id="table_3_row_13" class="text">
            <td class="english">He will sit alone, and be silent, because he has borne it upon him. He will give his cheek to him that smites him: he will be filled full with reproaches.</td>
            <td class="arabic">يجلس وحده ويصمت لأنه قد وضعه عليه. يجعل في التراب فمه لعله يجد رجاء. يميل خده لمن يلطمه ويشبع تعييراً.</td>
        </tr>
        <tr id="table_3_row_14" class="text">
            <td class="english">For the Lord will not reject forever. For He that has brought down will pity, and that according to the abundance of His mercy.   He has not answered in anger from His heart, though He has brought low the children of a man.</td>
            <td class="arabic">إلا أن الرب لا يقصيه عنه إلى الأبد. فإنه ولو وضع يترأف عليه ككثرة رحمته. لأنه لم يصغر قلبه بل تواضع لبنى البشر.</td>
        </tr>
        <tr id="table_3_row_15" class="text">
            <td class="english">To bring down under His feet all the prisoners of the earth,   to turn aside the judgment of a man before the face of the Most High,   to condemn a man unjustly in his judgment, the Lord has not given commandment.</td>
            <td class="arabic">ليذل تحت قدميه جميع المرتبطين بالأرض. أو حرف حكم الرجل أمام وجه العلى. ليلقى الإنسان إلى القضاء عندما يحكم عليه، أفما يقول الرب؟</td>
        </tr>
        <tr id="table_3_row_16" class="text">
            <td class="english">Who has thus spoken, and it has come to pass? The Lord has not commanded it. Out of the mouth of the Most High there shall not come forth evil and good. Why should a living man complain, a man concerning his sin?</td>
            <td class="arabic">من ذا الذى قال فكان؟ والرب لم يأمر بهذه. أليس من فم العلى تخرج الخيرات والشرور؟ كيف يتذمر الإنسان الحي الرجل المعاقب لأجل خطيته؟</td>
        </tr>
        <tr id="table_3_row_17" class="text">
            <td class="english">Our way has been searched out and examined, and we will turn to the Lord. Let us lift up our hearts with our hand to the lofty One in heaven. We have sinned, we have transgressed; and You have not pardoned.</td>
            <td class="arabic">فلنفحص طرقنا ونختبر خطواتنا، ونرجع إلى الرب ولنرفع قلوبنا مع أيدينا لدى العلى الذى في السماء. قد أخطأنا ونافقنا وأغضبنا وأنت لم تغفر لنا.</td>
        </tr>
        <tr id="table_3_row_18" class="text">
            <td class="english">You has visited us in wrath, and driven us away; You have slain, You have not pitied. You have veiled Yourself with a cloud because of prayer, that I might be blind, and be cast off.</td>
            <td class="arabic">قد التحفت وحكمت بالغضب وطردتنا وقتلتنا ولم تشفق. التحفت بغمام لئلا تبلغ إليك صلاتي. لأتضع لكي لا أرى فأطرح.</td>
        </tr>
        <tr id="table_3_row_19" class="text">
            <td class="english">You have set us alone in the midst of the nations. All our enemies have opened their mouth against us. Fear and wrath have come upon us, suspense and destruction. My eye shall pour down torrents of water, for the destruction of the daughter of my people.</td>
            <td class="arabic">تركتنا في وسط الشعوب. ففتح جميع أعدائنا أفواههم علينا فرفعونا ثم طرحونا. فحل بنا خوف وسخط. عيناي تسيل ينابيع مياه على سحق بنت شعبي.</td>
        </tr>
        <tr id="table_3_row_20" class="text">
            <td class="english">My eye is drowned with tears, and I will not be silent, so that there shall be no rest, until the Lord look down, and behold from heaven.   My eye shall prey upon my soul, because of all the daughters of the city.</td>
            <td class="arabic">عينيّ حزنت و لا تكف، ولا أرفع رأسي حتى يتطلع الرب وينظر من السماء. عينيّ تحزن على نفسي أكثر من جميع بنى المدينة.</td>
        </tr>
        <tr id="table_3_row_21" class="text">
            <td class="english">The fowlers chased me as a sparrow;  all my enemies destroyed my life in a pit without cause,   and laid a stone upon me.   Water flowed over my head:  I said, I am cut off.</td>
            <td class="arabic">قد اصطادني أعدائي اصطياداً كعصفور بلا سبب. وقرضوا في الجب حياتي. وطرحوا علىّ شبكة. فاضت المياه فوق رأسي. وقلت إنه تركني عنه.</td>
        </tr>
        <tr id="table_3_row_22" class="text">
            <td class="english">I called upon Your name, O Lord, out of the lowest dungeon. You heard my voice; close not Your ears to my supplication. You drew near to my help; in the day that I called upon You, You said to me, Fear not.</td>
            <td class="arabic">صرخت باسمك يارب من جب سفلى، فسمعت صوتي. لا تمل أذنك عن طلبتي. في اليوم الذي صرخت إليك اقتربت من معونتي وقلت لي لا تخف.</td>
        </tr>
        <tr id="table_3_row_23" class="text">
            <td class="english">O Lord, You have pleaded the causes of my soul; You have redeemed my life. You have seen my troubles, O Lord; You have judged my cause. You have seen all their vengeance; You have looked on all their devices against me.</td>
            <td class="arabic">حكمت يارب لأحكام نفسي وخلصت حياتي. نظرت يارب إلى اضطرابي وحكمت في دعواي. رأيت انتقامهم كله. وجميع أفكارهم الكائنة عليّ.</td>
        </tr>
        <tr id="table_3_row_24" class="text">
            <td class="english">You have heard their reproach and all their devices against me;  the lips of them that rose up against me,  and  their plots against me all the day;  their sitting down and their rising up:</td>
            <td class="arabic">سمعت تعييرهم يارب وكل مؤامراتهم التى صنعوها بي اليوم كله، وتحريك شفاة القائمين علىّ. وكانت جميع تلاوتهم في النهار كله في جلوسهم وقيامهم</td>
        </tr>
        <tr id="table_3_row_25" class="text">
            <td class="english">Look upon their eyes. You will render them a recompense, O Lord, according to the works of their hands. You will give them as a covering, the grief of my heart. You will persecute them in anger, and will consume them from under the heaven, O Lord.</td>
            <td class="arabic">أنظر إلى عيونهم وجازيهم بالتعب على قساوة قلوبهم. وأطردهم بغضبك وأفنهم يارب من تحت السماء.</td>
        </tr>
        <tr id="table_3_row_27" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_4" title="2nd Prophecy">
        <caption id="caption_table_4" class="caption">2nd Prophecy<br>(Jonah 1:10 - 2:7)
        <span class="arabic-caption">النبوة الثانية<br>(يونان 1: 10 - 2: 7)</span></caption>
        <tr id="table_4_row_1" class="intro">
            <td class="english">A reading from Jonah the Prophet. May his blessings be with us Amen.</td>
            <td class="arabic">من يونان النبى بركته المقدسة تكون معنا، آمين.</td>
        </tr>
        <tr id="table_4_row_4" class="text">
            <td class="english">Then the men were exceedingly afraid, and said to him, "Why have you done this?" For the men knew that he fled from the presence of the Lord, because he had told them.</td>
            <td class="arabic">فَخَافَ الرِّجَالُ خَوْفاً عَظِيماً وَقَالُوا لَهُ: «لِمَاذَا فَعَلْتَ هَذَا؟» فَإِنَّ الرِّجَالَ عَرَفُوا أَنَّهُ هَارِبٌ مِنْ وَجْهِ الرَّبِّ لأَنَّهُ أَخْبَرَهُمْ.</td>
        </tr>
        <tr id="table_4_row_5" class="text">
            <td class="english">Then they said to him, "What shall we do to you that the sea may be calm for us?"--for the sea was growing more tempestuous.</td>
            <td class="arabic">فَقَالُوا لَهُ: «مَاذَا نَصْنَعُ بِكَ لِيَسْكُنَ الْبَحْرُ عَنَّا؟» لأَنَّ الْبَحْرَ كَانَ يَزْدَادُ اضْطِرَاباً.</td>
        </tr>
        <tr id="table_4_row_6" class="text">
            <td class="english">And he said to them, "Pick me up and throw me into the sea; then the sea will become calm for you. For I know that this great tempest is because of me."</td>
            <td class="arabic">فَقَالَ لَهُمْ: «خُذُونِي وَاطْرَحُونِي فِي الْبَحْرِ فَيَسْكُنَ الْبَحْرُ عَنْكُمْ لأَنَّنِي عَالِمٌ أَنَّهُ بِسَبَبِي هَذَا النَّوْءُ الْعَظِيمُ عَلَيْكُمْ».</td>
        </tr>
        <tr id="table_4_row_7" class="text">
            <td class="english">Nevertheless the men rowed hard to return to land, but they could not, for the sea continued to grow more tempestuous against them.</td>
            <td class="arabic">وَلَكِنَّ الرِّجَالَ جَذَّفُوا لِيُرَجِّعُوا السَّفِينَةَ إِلَى الْبَرِّ فَلَمْ يَسْتَطِيعُوا لأَنَّ الْبَحْرَ كَانَ يَزْدَادُ اضْطِرَاباً عَلَيْهِمْ.</td>
        </tr>
        <tr id="table_4_row_8" class="text">
            <td class="english">Therefore they cried out to the Lord and said, "We pray, O Lord, please do not let us perish for this man's life, and do not charge us with innocent blood; for You, O Lord, have done as it pleased You."</td>
            <td class="arabic">فَصَرَخُوا إِلَى الرَّبِّ: «آهِ يَا رَبُّ لاَ نَهْلِكْ مِنْ أَجْلِ نَفْسِ هَذَا الرَّجُلِ وَلاَ تَجْعَلْ عَلَيْنَا دَماً بَرِيئاً لأَنَّكَ يَا رَبُّ فَعَلْتَ كَمَا شِئْتَ».</td>
        </tr>
        <tr id="table_4_row_9" class="text">
            <td class="english">So they picked up Jonah and threw him into the sea, and the sea ceased from its raging.</td>
            <td class="arabic">ثُمَّ أَخَذُوا يُونَانَ وَطَرَحُوهُ فِي الْبَحْرِ فَوَقَفَ الْبَحْرُ عَنْ هَيَجَانِهِ.</td>
        </tr>
        <tr id="table_4_row_10" class="text">
            <td class="english">Then the men feared the Lord exceedingly, and offered a sacrifice to the Lord and took vows.</td>
            <td class="arabic">فَخَافَ الرِّجَالُ مِنَ الرَّبِّ خَوْفاً عَظِيماً وَذَبَحُوا ذَبِيحَةً لِلرَّبِّ وَنَذَرُوا نُذُوراً.</td>
        </tr>
        <tr id="table_4_row_11" class="text">
            <td class="english">Now the Lord had prepared a great fish to swallow Jonah. And Jonah was in the belly of the fish three days and three nights.</td>
            <td class="arabic">وَأَمَّا الرَّبُّ فَأَعَدَّ حُوتاً عَظِيماً لِيَبْتَلِعَ يُونَانَ. فَكَانَ يُونَانُ فِي جَوْفِ الْحُوتِ ثَلاَثَةَ أَيَّامٍ وَثَلاَثَ لَيَالٍ.</td>
        </tr>
        <tr id="table_4_row_12" class="text">
            <td class="english">Then Jonah prayed to the Lord his God from the fish's belly.</td>
            <td class="arabic">فَصَلَّى يُونَانُ إِلَى الرَّبِّ إِلَهِهِ مِنْ جَوْفِ الْحُوتِ</td>
        </tr>
        <tr id="table_4_row_13" class="text">
            <td class="english">And he said: "I cried out to the Lord because of my affliction, And He answered me. "Out of the belly of Sheol I cried, And You heard my voice.</td>
            <td class="arabic">وَقَالَ: «دَعَوْتُ مِنْ ضِيقِي الرَّبَّ فَاسْتَجَابَنِي. صَرَخْتُ مِنْ جَوْفِ الْهَاوِيَةِ فَسَمِعْتَ صَوْتِي.</td>
        </tr>
        <tr id="table_4_row_14" class="text">
            <td class="english">For You cast me into the deep, Into the heart of the seas, And the floods surrounded me; All Your billows and Your waves passed over me.</td>
            <td class="arabic">لأَنَّكَ طَرَحْتَنِي فِي الْعُمْقِ فِي قَلْبِ الْبِحَارِ. فَأَحَاطَ بِي نَهْرٌ. جَازَتْ فَوْقِي جَمِيعُ تَيَّارَاتِكَ وَلُجَجِكَ.</td>
        </tr>
        <tr id="table_4_row_15" class="text">
            <td class="english">Then I said, 'I have been cast out of Your sight; Yet I will look again toward Your holy temple.'</td>
            <td class="arabic">فَقُلْتُ: قَدْ طُرِدْتُ مِنْ أَمَامِ عَيْنَيْكَ. وَلَكِنَّنِي أَعُودُ أَنْظُرُ إِلَى هَيْكَلِ قُدْسِكَ.</td>
        </tr>
        <tr id="table_4_row_16" class="text">
            <td class="english">The waters surrounded me, even to my soul; The deep closed around me; Weeds were wrapped around my head.</td>
            <td class="arabic">قَدِ اكْتَنَفَتْنِي مِيَاهٌ إِلَى النَّفْسِ. أَحَاطَ بِي غَمْرٌ. الْتَفَّ عُشْبُ الْبَحْرِ بِرَأْسِي.</td>
        </tr>
        <tr id="table_4_row_17" class="text">
            <td class="english">I went down to the moorings of the mountains; The earth with its bars closed behind me forever; Yet You have brought up my life from the pit, O Lord, my God.</td>
            <td class="arabic">نَزَلْتُ إِلَى أَسَافِلِ الْجِبَالِ. مَغَالِيقُ الأَرْضِ عَلَيَّ إِلَى الأَبَدِ. ثُمَّ أَصْعَدْتَ مِنَ الْوَهْدَةِ حَيَاتِي أَيُّهَا الرَّبُّ إِلَهِي.</td>
        </tr>
        <tr id="table_4_row_18" class="text">
            <td class="english">"When my soul fainted within me, I remembered the Lord; And my prayer went up to You, Into Your holy temple.</td>
            <td class="arabic">حِينَ أَعْيَتْ فِيَّ نَفْسِي ذَكَرْتُ الرَّبَّ فَجَاءَتْ إِلَيْكَ صَلاَتِي إِلَى هَيْكَلِ قُدْسِكَ.</td>
        </tr>
        <tr id="table_4_row_20" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    </div>



${paschalPraiseHtml}


<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_7" title="Coptic Psalm">
        <caption class="caption" id="caption_table_7">Coptic Psalm<br>(27:12, 35:11-12, 16)
        <span class="arabic-caption">المزمور قبطياً<br>(27: 12 و 35: 11 - 12 و 16)</span></caption>

        <tr id="table_7_row_0" class="intro">
            <td class="english">A Psalm of David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_7_row_1" class="text">
            <td class="english">Your throne, O God, is forever and ever; Alleluia</td>
            <td class="coptic">Ⲡⲉⲕⲑ̀ⲣⲟⲛⲟⲥ Ⲫϯ ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ: ⲁⲗ̅</td>
            <td class="arabic">كرسيك يا الله إلى دهر الدهور. هلليلويا.</td>
        </tr>
        <tr id="table_7_row_2" class="text">
            <td class="english">A scepter of righteousness is the scepter of Your kingdom. </td>
            <td class="coptic">ⲟⲩⲟϩ ⲡⲓϣ̀ⲃⲱⲧ ⲙ̀ⲡ̀ⲥⲱⲟⲩⲧⲉⲛ ⲡⲉ ⲡ̀ϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">قضيب الاستقامة هو قضيب ملكك. </td>
        </tr>
        <tr id="table_7_row_3" class="text">
            <td class="english">All Your garments are scented with myrrh and aloes and cassia. </td>
            <td class="coptic">Ⲟⲩⲥ̀ⲙⲩⲣⲛⲁ ⲛⲉⲙ ⲟⲩⲥ̀ⲧⲁⲕⲧⲏ ⲛⲉⲙ ⲟⲩⲕⲁⲥⲓⲁ̀ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲕϩ̀ⲃⲱⲥ :</td>
            <td class="arabic">المر والميعة والسليخة من ثيابك.</td>
        </tr>
        <tr id="table_7_row_5" class="intro">
            <td class="english">Alleluia.</td>
            <td class="coptic">Ⲁ̅Ⲗ̅</td>
            <td class="arabic">الليلويا</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_9" title="Coptic Gospel">
        <caption class="caption" id="caption_table_9">Coptic Gospels
        <span class="arabic-caption">الأناجيل قبطياً</span></caption>
        <tr id="table_9_row_0" class="priest">
            <td class="english">A chapter according to St. Matthew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ̀ⲁⲅⲓⲟ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>

        <tr id="table_9_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_9_row_2" class="text">
            <td class="coptic">Ⲉⲧⲁ̀ⲣⲟⲩϩⲓ ⲇⲉ ϣⲱⲡⲓ ⲁϥⲓ̀ ⲛ̀ϫⲉ ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲣⲁⲙⲁⲟ ⲉ̀ⲃⲟⲗϧⲉⲛ ̀̀Ⲁⲣⲓⲙⲁⲑⲉⲁⲥ : ⲉ̀ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲓⲱⲥⲏϥ : ⲫⲁⲓ ϩⲱϥ ⲛⲉ ⲁϥⲉⲣⲙⲁⲑⲏⲧⲏⲥ ⲛ̀Ⲓ̅ⲏ̅ⲥ. Ⲫⲁⲓ ⲁϥⲓ̀ ϩⲁⲠⲓⲗⲁⲧⲟⲥ ⲁϥⲉⲣⲉ̀ⲧⲓⲛ ⲙ̀ⲡⲓⲥⲱⲙⲁ ⲛ̀ⲧⲉ Ⲓⲏⲥ ⲧⲟⲧⲉ Ⲡⲓⲗⲁⲧⲟⲥ ⲁϥⲟⲩⲁϩ ⲥⲁϩⲛⲓ ⲉ̀ⲧⲏⲓϥ <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_9_row_3" class="priest">
            <td class="english">According to St. Mark</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲙⲁⲣⲕⲟⲛ ̀ⲁⲅⲓⲟ.</td>
            <td class="arabic">حسب مار مرقس</td>
        </tr>
        <tr id="table_9_row_4" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_9_row_5" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ϩⲏⲇⲏⲉⲧ ⲁ̀ⲣ̀ⲟⲩϩⲓ ϣⲱⲡⲓ ⲉⲡⲓⲇⲏ ⲛⲉⲧ̀ⲡⲁⲣⲁⲥⲕⲉⲩⲏ̀ ⲧⲉ ⲉⲧϧⲁϫⲱϥ ⲙ̀ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ : Ⲉ̀ⲧϥⲁⲓ ⲛ̀ϫⲉ Ⲓⲱⲥⲏϥ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲁ̀ⲣⲓⲙⲁⲑⲉⲁⲥ : ⲉ̀ⲟⲩⲉⲩⲥ̀ⲭⲉⲙⲱⲛ ⲡⲉ ⲙ̀ⲃⲟⲩⲗⲉⲩⲧⲏⲥ : ⲫⲁⲓ ⲉ̀ⲧⲉ ⲛ̀ⲑⲟϥ ϩⲱϥ ⲛⲁϥϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁⲧ̀ϩⲏ ⲛ̀ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ Ⲫϯ : ⲁϥⲉⲣⲧⲟⲗⲙⲁⲛ ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ϩⲁⲠⲓⲗⲁⲧⲟⲥ ⲁϥⲉⲣⲉ̀ⲧⲓⲛ ⲙⲡ̀ⲥⲱⲙⲁ ⲛ̀Ⲓ̅ⲏ̅ⲥ. <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_9_row_6" class="priest">
            <td class="english">According to St. Luke</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار لوقا</td>
        </tr>
        <tr id="table_9_row_7" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_9_row_8" class="text">
            <td class="coptic">̀̀Ⲟⲩⲟϩ ϩⲏⲡⲡⲉ ⲓⲥ ⲟⲩⲣⲱⲙⲓ ⲉ̀ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲓⲱⲥⲏϥ : ⲉ̀ⲟⲩⲃⲟⲩⲗⲉⲩⲧⲏⲥ ⲡⲉ : ⲟⲩⲣⲙⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲛ̀ⲑ̀ⲙⲏⲓ : Ⲫⲁⲓ ⲉ̀ⲛⲁϥ ϯⲙⲁϯ ⲁⲛ ⲡⲉ ϧⲉⲛ ⲡⲟⲩⲥⲟϭⲛⲓ ⲛⲉⲙ ⲧⲟⲩ ⲡ̀ⲣⲁⲝⲓⲥ ⲛⲉ ⲟⲩⲉ̀ⲃⲟⲗϧⲉⲛ Ⲁ̀ⲣⲓⲙⲁⲑⲉⲁⲥ ⲟⲩ ⲃⲁⲕⲓ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ<br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_9_row_9" class="priest">
            <td class="english">According to St. John</td>
            <td class="coptic">ⲕⲁⲧⲁ Ⲓⲱⲁⲛⲛⲏⲛ  ̀ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">حسب مار يوحنا</td>
        </tr>
        <tr id="table_9_row_10" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_9_row_11" class="text">
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲇⲉ ⲁϥⲓ̀ ⲛ̀ϫⲉ ⲓⲱⲥⲏϥ ⲡⲓⲣⲉⲙ Ⲁ̀ⲣⲓⲙⲁⲑⲉⲁⲥ ⲁϥϯϩⲟ ⲉ̀Ⲡⲓⲗⲁⲧⲟⲥ : ⲉ̀ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ϩⲱϥ ⲛ̀ⲧⲉ Ⲓ̅ⲏ̅ⲥ ⲛⲁϥⲭⲏⲡ ⲇⲉ ⲡⲉ ⲉⲑⲃⲉ ⲧ̀ϩⲟϯ ⲛ̀ⲛⲓⲒⲟⲩⲇⲁⲓ : ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲱ̀ⲗⲓ ⲙ̀ⲡⲓⲥⲱⲙⲁ ⲛ̀ⲧⲉ Ⲓ̅ⲏ̅ⲥ <br>... Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅</td>
        </tr>
        <tr id="table_9_row_12" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ̀</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>



<div class="section" id="section_7" title="English and Arabic Psalm & Gospel">
<table id="table_10" title="Psalm">
    <caption id="caption_table_10" class="caption">Psalm<br>(88:6, 23:4, 45:6,8)
    <span class="arabic-caption">المزمور<br>(88: 6 و 23: 34 و 45: 6 و 8)</span></caption>
    <tr id="table_10_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_10_row_4" class="text">
        <td class="english">You have laid me in the lowest pit, In darkness, in the depths. Alleluia.</td>
        <td class="arabic">جعلونى فى جب سفلى. فى مواضع مظلمة وظلال الموت.  هلليلويا.</td>
    </tr>
    <tr id="table_10_row_5" class="text">
        <td class="english">Though I walk through the valley of the shadow of death, I will fear no evil; For You are with me. Alleluia.</td>
        <td class="arabic">وان سلكت فى وسط ظلال الموت فلا أخشى من الشر لأنك معى .  هلليلويا.</td>
    </tr>
    <tr id="table_10_row_6" class="text">
        <td class="english">Your throne, O God, is forever and ever; A scepter of righteousness is the scepter of Your kingdom.</td>
        <td class="arabic">كُرْسِيُّكَ يَا اللهُ إِلَى دَهْرِ الدُّهُورِ. قَضِيبُ اسْتِقَامَةٍ قَضِيبُ مُلْكِكَ.</td>
    </tr>
    <tr id="table_10_row_7" class="text">
        <td class="english">All Your garments are scented with myrrh and aloes and cassia.</td>
        <td class="arabic">المر والميعة والسليخة من ثيابك.</td>
    </tr>
    <tr id="table_10_row_9" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>
<table id="table_11" title="Gospel">
    <caption id="caption_table_11" class="caption">Gospel<br>(Matthew 27:57-61)
    <span class="arabic-caption">الانجيل<br>(متى 27: 57-61)</span></caption>
    <tr id="table_11_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Matthew the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا وأرحمنا وأجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا متى البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_11_row_4" class="text">
        <td class="english">Now when evening had come, there came a rich man from Arimathea, named Joseph, who himself had also become a disciple of Jesus.</td>
        <td class="arabic">وَلَمَّا كَانَ الْمَسَاءُ جَاءَ رَجُلٌ غَنِيٌّ مِنَ الرَّامَةِ اسْمُهُ يُوسُفُ - وَكَانَ هُوَ أَيْضاً تِلْمِيذاً لِيَسُوعَ.</td>
    </tr>
    <tr id="table_11_row_5" class="text">
        <td class="english">This man went to Pilate and asked for the body of Jesus. Then Pilate commanded the body to be given to him.</td>
        <td class="arabic">فَهَذَا تَقَدَّمَ إِلَى بِيلاَطُسَ وَطَلَبَ جَسَدَ يَسُوعَ. فَأَمَرَ بِيلاَطُسُ حِينَئِذٍ أَنْ يُعْطَى الْجَسَدُ.</td>
    </tr>
    <tr id="table_11_row_6" class="text">
        <td class="english">When Joseph had taken the body, he wrapped it in a clean linen cloth,</td>
        <td class="arabic">فَأَخَذَ يُوسُفُ الْجَسَدَ وَلَفَّهُ بِكَتَّانٍ نَقِيٍّ</td>
    </tr>
    <tr id="table_11_row_7" class="text">
        <td class="english">and laid it in his new tomb which he had hewn out of the rock; and he rolled a large stone against the door of the tomb, and departed.</td>
        <td class="arabic">وَوَضَعَهُ فِي قَبْرِهِ الْجَدِيدِ الَّذِي كَانَ قَدْ نَحَتَهُ فِي الصَّخْرَةِ ثُمَّ دَحْرَجَ حَجَراً كَبِيراً عَلَى بَابِ الْقَبْرِ وَمَضَى.</td>
    </tr>
    <tr id="table_11_row_8" class="text">
        <td class="english">And Mary Magdalene was there, and the other Mary, sitting opposite the tomb.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">وَكَانَتْ هُنَاكَ مَرْيَمُ الْمَجْدَلِيَّةُ وَمَرْيَمُ الأُخْرَى جَالِسَتَيْنِ تُجَاهَ الْقَبْرِ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_11_row_10" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_12" title="Psalm">
    <caption id="caption_table_12" class="caption">Psalm<br>(88:6, 23:4, 45:6,8)
    <span class="arabic-caption">المزمور<br>(88: 6 و 23: 34 و 45: 6 و 8)</span></caption>
    <tr id="table_12_row_1" class="intro">
        <td class="english">From the Psalms of our teacher David the prophet. May his blessing be with us. Amen.</td>
        <td class="arabic">من مزامير معلمنا داود النبي، بركته تكون معنا، آمين.</td>
    </tr>
    <tr id="table_12_row_4" class="text">
        <td class="english">You have laid me in the lowest pit, In darkness, in the depths. Alleluia.</td>
        <td class="arabic">جعلونى فى جب سفلى. فى مواضع مظلمة وظلال الموت.  هلليلويا.</td>
    </tr>
    <tr id="table_12_row_5" class="text">
        <td class="english">Though I walk through the valley of the shadow of death, I will fear no evil; For You are with me. Alleluia.</td>
        <td class="arabic">وان سلكت فى وسط ظلال الموت فلا أخشى من الشر لأنك معى .  هلليلويا.</td>
    </tr>
    <tr id="table_12_row_6" class="text">
        <td class="english">Your throne, O God, is forever and ever; A scepter of righteousness is the scepter of Your kingdom.</td>
        <td class="arabic">كُرْسِيُّكَ يَا اللهُ إِلَى دَهْرِ الدُّهُورِ. قَضِيبُ اسْتِقَامَةٍ قَضِيبُ مُلْكِكَ.</td>
    </tr>
    <tr id="table_12_row_7" class="text">
        <td class="english">All Your garments are scented with myrrh and aloes and cassia.</td>
        <td class="arabic">المر والميعة والسليخة من ثيابك.</td>
    </tr>
    <tr id="table_12_row_9" class="intro">
        <td class="english">Alleluia.</td>
        <td class="arabic">هلليلويا.</td>
    </tr>
</table>

<table id="table_13" title="Gospel">
    <caption id="caption_table_13" class="caption">Gospel<br>(Mark 15:42-16:1)
    <span class="arabic-caption">الانجيل<br>(مرقس 15: 42 - 16: 1)</span></caption>
    <tr id="table_13_row_1" class="intro">
        <td class="english">May God have mercy and compassion upon us, and make us worthy to hear Your Holy Gospel. A chapter according to our teacher St. Mark the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل معلمنا مرقس البشير، بركاته تكون معنا أمين</td>
    </tr>
    <tr id="table_13_row_4" class="text">
        <td class="english">Now when evening had come, because it was the Preparation Day, that is, the day before the Sabbath,</td>
        <td class="arabic">وَلَمَّا كَانَ الْمَسَاءُ إِذْ كَانَ الاِسْتِعْدَادُ - أَيْ مَا قَبْلَ السَّبْتِ -</td>
    </tr>
    <tr id="table_13_row_5" class="text">
        <td class="english">Joseph of Arimathea, a prominent council member, who was himself waiting for the kingdom of God, coming and taking courage, went in to Pilate and asked for the body of Jesus.</td>
        <td class="arabic">جَاءَ يُوسُفُ الَّذِي مِنَ الرَّامَةِ مُشِيرٌ شَرِيفٌ وَكَانَ هُوَ أَيْضاً مُنْتَظِراً مَلَكُوتَ اللَّهِ فَتَجَاسَرَ وَدَخَلَ إِلَى بِيلاَطُسَ وَطَلَبَ جَسَدَ يَسُوعَ.</td>
    </tr>
    <tr id="table_13_row_6" class="text">
        <td class="english">Pilate marveled that He was already dead; and summoning the centurion, he asked him if He had been dead for some time.</td>
        <td class="arabic">فَتَعَجَّبَ بِيلاَطُسُ أَنَّهُ مَاتَ كَذَا سَرِيعاً. فَدَعَا قَائِدَ الْمِئَةِ وَسَأَلَهُ: «هَلْ لَهُ زَمَانٌ قَدْ مَاتَ؟»</td>
    </tr>
    <tr id="table_13_row_7" class="text">
        <td class="english">So when he found out from the centurion, he granted the body to Joseph.</td>
        <td class="arabic">وَلَمَّا عَرَفَ مِنْ قَائِدِ الْمِئَةِ وَهَبَ الْجَسَدَ لِيُوسُفَ.</td>
    </tr>
    <tr id="table_13_row_8" class="text">
        <td class="english">Then he bought fine linen, took Him down, and wrapped Him in the linen. And he laid Him in a tomb which had been hewn out of the rock, and rolled a stone against the door of the tomb.</td>
        <td class="arabic">فَاشْتَرَى كَتَّاناً فَأَنْزَلَهُ وَكَفَّنَهُ بِالْكَتَّانِ وَوَضَعَهُ فِي قَبْرٍ كَانَ مَنْحُوتاً فِي صَخْرَةٍ وَدَحْرَجَ حَجَراً عَلَى بَابِ الْقَبْرِ.</td>
    </tr>
    <tr id="table_13_row_9" class="text">
        <td class="english">And Mary Magdalene and Mary the mother of Joses observed where He was laid.</td>
        <td class="arabic">وَكَانَتْ مَرْيَمُ الْمَجْدَلِيَّةُ وَمَرْيَمُ أُمُّ يُوسِي تَنْظُرَانِ أَيْنَ وُضِعَ.</td>
    </tr>
    <tr id="table_13_row_10" class="text">
        <td class="english">Now when the Sabbath was past, Mary Magdalene, Mary the mother of James, and Salome bought spices, that they might come and anoint Him.<br><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic">وَبَعْدَمَا مَضَى السَّبْتُ اشْتَرَتْ مَرْيَمُ الْمَجْدَلِيَّةُ وَمَرْيَمُ أُمُّ يَعْقُوبَ وَسَالُومَةُ حَنُوطاً لِيَأْتِينَ وَيَدْهَنَّهُ.<br><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_13_row_12" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_14" title="Gospel">
    <caption id="caption_table_14" class="caption">Gospel<br>(Luke 23:50-56)
    <span class="arabic-caption">الانجيل<br>(لوقا 23: 50-56)</span></caption>
    <tr id="table_14_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher Saint Luke the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا لوقا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_14_row_4" class="text">
        <td class="english">Now behold, there was a man named Joseph, a council member, a good and just man.</td>
        <td class="arabic">وَإِذَا رَجُلٌ اسْمُهُ يُوسُفُ وَكَانَ مُشِيراً وَرَجُلاً صَالِحاً بَارّاً -</td>
    </tr>
    <tr id="table_14_row_5" class="text">
        <td class="english">He had not consented to their decision and deed. He was from Arimathea, a city of the Jews, who himself was also waiting for the kingdom of God.</td>
        <td class="arabic">هَذَا لَمْ يَكُنْ مُوافِقاً لِرَأْيِهِمْ وَعَمَلِهِمْ وَهُوَ مِنَ الرَّامَةِ مَدِينَةٍ لِلْيَهُودِ. وَكَانَ هُوَ أَيْضاً يَنْتَظِرُ مَلَكُوتَ اللهِ.</td>
    </tr>
    <tr id="table_14_row_6" class="text">
        <td class="english">This man went to Pilate and asked for the body of Jesus.</td>
        <td class="arabic">هَذَا تَقَدَّمَ إِلَى بِيلاَطُسَ وَطَلَبَ جَسَدَ يَسُوعَ</td>
    </tr>
    <tr id="table_14_row_7" class="text">
        <td class="english">Then he took it down, wrapped it in linen, and laid it in a tomb that was hewn out of the rock, where no one had ever lain before.</td>
        <td class="arabic">وَأَنْزَلَهُ وَلَفَّهُ بِكَتَّانٍ وَوَضَعَهُ فِي قَبْرٍ مَنْحُوتٍ حَيْثُ لَمْ يَكُنْ أَحَدٌ وُضِعَ قَطُّ.</td>
    </tr>
    <tr id="table_14_row_8" class="text">
        <td class="english">That day was the Preparation, and the Sabbath drew near.</td>
        <td class="arabic">وَكَانَ يَوْمُ الاِسْتِعْدَادِ وَالسَّبْتُ يَلُوحُ.</td>
    </tr>
    <tr id="table_14_row_9" class="text">
        <td class="english">And the women who had come with Him from Galilee followed after, and they observed the tomb and how His body was laid.</td>
        <td class="arabic">وَتَبِعَتْهُ نِسَاءٌ كُنَّ قَدْ أَتَيْنَ مَعَهُ مِنَ الْجَلِيلِ وَنَظَرْنَ الْقَبْرَ وَكَيْفَ وُضِعَ جَسَدُهُ.</td>
    </tr>
    <tr id="table_14_row_10" class="text">
        <td class="english">Then they returned and prepared spices and fragrant oils. And they rested on the Sabbath according to the commandment.</td>
        <td class="arabic">فَرَجَعْنَ وَأَعْدَدْنَ حَنُوطاً وَأَطْيَاباً. وَفِي السَّبْتِ اسْتَرَحْنَ حَسَبَ الْوَصِيَّةِ.</td>
    </tr>
    <tr id="table_14_row_11" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_14_row_13" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

<table id="table_15" title="Gospel">
    <caption id="caption_table_15" class="caption">Gospel<br>(John 19:38-42)
    <span class="arabic-caption">الانجيل<br>(يوحنا 19: 38-42)</span></caption>
    <tr id="table_15_row_1" class="intro">
        <td class="english">A chapter from the Gospel according to our teacher Saint John the evangelist. May his blessings be with us. Amen.</td>
        <td class="arabic">فصل من إنجيل معلمنا يوحنا البشير، بركاته تكون معنا أمين.</td>
    </tr>
    <tr id="table_15_row_4" class="text">
        <td class="english">After this, Joseph of Arimathea, being a disciple of Jesus, but secretly, for fear of the Jews, asked Pilate that he might take away the body of Jesus; and Pilate gave him permission. So he came and took the body of Jesus.</td>
        <td class="arabic">ثُمَّ إِنَّ يُوسُفَ الَّذِي مِنَ الرَّامَةِ وَهُوَ تِلْمِيذُ يَسُوعَ وَلَكِنْ خُفْيَةً لِسَبَبِ الْخَوْفِ مِنَ الْيَهُودِ سَأَلَ بِيلاَطُسَ أَنْ يَأْخُذَ جَسَدَ يَسُوعَ فَأَذِنَ بِيلاَطُسُ. فَجَاءَ وَأَخَذَ جَسَدَ يَسُوعَ.</td>
    </tr>
    <tr id="table_15_row_5" class="text">
        <td class="english">And Nicodemus, who at first came to Jesus by night, also came, bringing a mixture of myrrh and aloes, about a hundred pounds.</td>
        <td class="arabic">وَجَاءَ أَيْضاً نِيقُودِيمُوسُ الَّذِي أَتَى أَوَّلاً إِلَى يَسُوعَ لَيْلاً وَهُوَ حَامِلٌ مَزِيجَ مُرٍّ وَعُودٍ نَحْوَ مِئَةِ مَناً.</td>
    </tr>
    <tr id="table_15_row_6" class="text">
        <td class="english">Then they took the body of Jesus, and bound it in strips of linen with the spices, as the custom of the Jews is to bury.</td>
        <td class="arabic">فَأَخَذَا جَسَدَ يَسُوعَ وَلَفَّاهُ بِأَكْفَانٍ مَعَ الأَطْيَابِ كَمَا لِلْيَهُودِ عَادَةٌ أَنْ يُكَفِّنُوا.</td>
    </tr>
    <tr id="table_15_row_7" class="text">
        <td class="english">Now in the place where He was crucified there was a garden, and in the garden a new tomb in which no one had yet been laid.</td>
        <td class="arabic">وَكَانَ فِي الْمَوْضِعِ الَّذِي صُلِبَ فِيهِ بُسْتَانٌ وَفِي الْبُسْتَانِ قَبْرٌ جَدِيدٌ لَمْ يُوضَعْ فِيهِ أَحَدٌ قَطُّ.</td>
    </tr>
    <tr id="table_15_row_8" class="text">
        <td class="english">So there they laid Jesus, because of the Jews' Preparation Day, for the tomb was nearby.</td>
        <td class="arabic">فَهُنَاكَ وَضَعَا يَسُوعَ لِسَبَبِ اسْتِعْدَادِ الْيَهُودِ لأَنَّ الْقَبْرَ كَانَ قَرِيباً.</td>
    </tr>
    <tr id="table_15_row_9" class="text">
        <td class="english"><i>Bow down before the Holy Gospel.</i></td>
        <td class="arabic"><i>أسجدوا للإنجيل المقدس.</i></td>
    </tr>
    <tr id="table_15_row_11" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="arabic">والمجد لله دائماً.</td>
    </tr>
</table>

</div>


<div class="section" id="section_8" title="Exposition">
${daytimeExpositionIntroHtml}
<table id="table_17" title="Exposition">
    <caption id="caption_table_17" class="caption">Exposition
    <span class="arabic-caption">الطرح</span></caption>
    <tr id="table_17_row_1" class="intro">
        <td class="english">The exposition of the TWELFTH Hour of the DAY of GREAT FRIDAY of Holy Pascha. May its blessings be with us. Amen.</td>
        <td class="arabic">طرح الساعة الثانية عشرة من يوم الجمعة العظيمة من البصخة المقدسة بركتها تكون معنا. آمين.</td>
    </tr>
    <tr id="table_17_row_4" class="text">
        <td class="english">And when the evening had come, since it was the day of preparation, that is the day before the Sabbath,</td>
        <td class="arabic">فى عشية ذلك اليوم الذى هو جمعة العيد العظيم الذى يأتى قبل السبت</td>
    </tr>
    <tr id="table_17_row_5" class="text">
        <td class="english">a wealthy man called Joseph, a respected member of the council who was also himself looking for the kingdom of God,</td>
        <td class="arabic">الذى هو لسر السيد جاء إنسان غنى اسمه يوسف، وكان ذا مشورة يعرف الناموس.</td>
    </tr>
    <tr id="table_17_row_6" class="text">
        <td class="english">and another called Nicodemus, a God loving man came.</td>
        <td class="arabic">وإنسان آخر يسمى نيقوديموس، طوباوى محب لله.</td>
    </tr>
    <tr id="table_17_row_7" class="text">
        <td class="english">Joseph and his fathers took care of the bodies of saints.</td>
        <td class="arabic">وكان يوسف هو وآباؤه يهتمون بأجساد القديسين.</td>
    </tr>
    <tr id="table_17_row_8" class="text">
        <td class="english">They went to Pilate and asked for the body of Jesus, the Word of God.</td>
        <td class="arabic">فأتى إلى بيلاطس وسأله جسد الاله الكلمة الوحيد الجنس.</td>
    </tr>
    <tr id="table_17_row_9" class="text">
        <td class="english">Pilate asked Joseph, “is He dead?” Then was greatly amazed. Then Pilate ordered the centurion to give the body to Joseph.</td>
        <td class="arabic">فاستفهم منه: هل مات؟ فتعجب الوالى جداً. وهكذا أمر قائد المائة بأن يعطوه جسد يسوع.</td>
    </tr>
    <tr id="table_17_row_10" class="text">
        <td class="english">Joseph the righteous then took the body and took care of it.</td>
        <td class="arabic">فأخذ صاحب المشورة الصالحة الصديق الجسد واهتم به.</td>
    </tr>
    <tr id="table_17_row_11" class="text">
        <td class="english">He also brought a clean linen shroud took Him down, and wrapped Him in it.</td>
        <td class="arabic">وأحضر أيضاً أكفاناً ناعمة نقية كما يليق بابن الله.</td>
    </tr>
    <tr id="table_17_row_12" class="text">
        <td class="english">Nicodemus brought about a large amount of fragrant oil,</td>
        <td class="arabic">وأحضر نيقوديموس أيضاً أطياباً كثيرة الثمن نحو مائة رطل طيب.</td>
    </tr>
    <tr id="table_17_row_13" class="text">
        <td class="english">and they shrouded Him according to the Jewish traditions and put the perfumes and oils on the Blessed One.</td>
        <td class="arabic">وهكذا كفنوه كعادة العبرانيين، ووضعوا الطيب على المبارك.</td>
    </tr>
    <tr id="table_17_row_14" class="text">
        <td class="english">They laid the body in a new pure tomb, where no one had been buried before.</td>
        <td class="arabic">وكان قبر جديد فى البستان طاهراً نقياً لم يوضع فيه أحد.</td>
    </tr>
    <tr id="table_17_row_15" class="text">
        <td class="english">They then rolled a stone against the door of the tomb and rested on the Sabbath in observance of the commandment.</td>
        <td class="arabic">فوضعوا جسد الوحيد الجنس فى ذلك القبر، وتركوا عليه حجراً. واستراحوا كالوصية من أجل السبت.</td>
    </tr>
    <tr id="table_17_row_16" class="text">
        <td class="english">And there were women stood there observing;</td>
        <td class="arabic">وكانت نسوة واقفات ينظرن ما كان:</td>
    </tr>
    <tr id="table_17_row_17" class="text">
        <td class="english">Mary Magdalene and Mary the mother of Jesus saw where He was laid.</td>
        <td class="arabic">مريم المجدلية ومريم الأخرى وعلمن جيداً أين وضع.</td>
    </tr>
</table>

${expositionConclusionHtml}

</div>

<div class="section" id="section_9" title="Litanies and Conclusion">
${daytimeLitaniesHtml}

<table id="table_20" title="Prostrations and Procession">
    <caption id="caption_table_20" class="caption">Prostrations, Procession, and Burial<span class="arabic-caption">الميطانيات والزفة</span></caption>
    <tr id="table_20_row_1" class="commentary">
        <td class="english">The priest holds up the cross and the congregation says "Lord have mercy” with performing Metanoia and asking the Lord to forgive their sins.</td>
        <td class="arabic">يرفع الكاهن الصليب ويبتدئ كل الشعب بالتهليل إلى الرب بصوت عال صارخين كيرى ليسون دمجاً ويقومون بعمل المطانيات طالبين من الرب غفران خطاياهم .</td>
    </tr>
    <tr id="table_20_row_4" class="commentary">
        <td class="english">Facing the East, the congregation says:</td>
        <td class="arabic">متجهين إلى الشرق يقول الشعب:</td>
    </tr>
    <tr id="table_20_row_5" class="priest">
        <td class="english">May God hear us, have mercy upon us, and forgive us our sins. Amen</td>
        <td class="arabic">اللهم اسمعنا وارحمنا واغفر لنا خطايانا، امين.</td>
    </tr>
    <tr id="table_20_row_6" class="text">
        <td class="english">Lord Have Mercy. (100)</td>
        <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (100)</td>
        <td class="arabic">كيري ليسون. (100)</td>
    </tr>
    <tr id="table_20_row_7" class="commentary">
        <td class="english">Facing the West, the congregation says:</td>
        <td class="arabic">متجهين إلى الغرب يقول الشعب:</td>
    </tr>
    <tr id="table_20_row_8" class="text">
        <td class="english">Lord Have Mercy. (100)</td>
        <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (100)</td>
        <td class="arabic">كيري ليسون. (100)</td>
    </tr>
    <tr id="table_20_row_9" class="commentary">
        <td class="english">Facing the North, the congregation says:</td>
        <td class="arabic">متجهين إلى الشمال يقول الشعب:</td>
    </tr>
    <tr id="table_20_row_10" class="text">
        <td class="english">Lord Have Mercy. (100)</td>
        <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (100)</td>
        <td class="arabic">كيري ليسون. (100)</td>
    </tr>
    <tr id="table_20_row_11" class="commentary">
        <td class="english">Facing the South, the congregation says:</td>
        <td class="arabic">متجهين إلى الجنوب يقول الشعب:</td>
    </tr>
    <tr id="table_20_row_12" class="text">
        <td class="english">Lord Have Mercy. (100)</td>
        <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (100)</td>
        <td class="arabic">كيري ليسون. (100)</td>
    </tr>
    <tr id="table_20_row_13" class="commentary">
        <td class="english">Upon the completion of the prostrations in all 4 directions, they return to the east and begin chanting "Lord Have Mercy" in the melismatic tune using the cymbals 12 times.</td>
        <td class="arabic">ثم عند كمال الأربع جهات يعودون إلى الشرق ويبتدئون  كيرى ليسون بالكبير بالناقوس إثنتى عشرة دفعة .</td>
    </tr>
    <tr id="table_20_row_14" class="text">
        <td class="english">Lord Have Mercy. (12)</td>
        <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (12)</td>
        <td class="arabic">كيري ليسون. (12)</td>
    </tr>
    <tr id="table_20_row_15" class="commentary">
        <td class="english">Then the procession starts to go around the altar table three times, then three times inside the church and ends with one more time around the altar table.</td>
        <td class="arabic"> وينزلون الخورس ويصعدون إلى الهيكل ويطوفون حوله ثلاث دفعات والبيعة ثلاث دفعات ثم يصعدون إلى الهيكل ويدورون دورة واحدة .</td>
    </tr>
</table>
<table id="table_21" title="Golgotha">
    <caption id="caption_table_21" class="caption"><span class="coptic-caption">Ⲅⲟⲗⲅⲟⲑⲁ</span></caption>
    <tr id="table_21_row_1" class="commentary">
        <td class="english">The presbyter covers the icon with a white linen cloth and places the cross over it and covers them with roses petals and spices and places next to them two candle stands one on each side representing two angels at the tomb of Christ.</td>
        <td class="arabic">يدفن الكاهن ايقونة الدفنة بقطعة قماش بيضاء ويضع الصليب فوقها ويغطيها بالورود والبخور ويضع بجانبهما منارتين واحد على كل جانب يمثلان الملاكين اللذين كانا عند قبر المسيح.</td>
    </tr>
    <tr id="table_21_row_2" class="text">
        <td class="english">Golgotha in Hebrew, Cranium in Greek, the place where You were crucified, O Lord. </td>
        <td class="coptic">Ⲅⲟⲗⲅⲟⲑⲁ ⲙ̀ⲙⲉⲧ ϩⲉⲃⲣⲉⲟⲥ : ⲡⲓⲕ̀ⲣⲁⲛⲓⲟⲛ ⲙ̀ⲙⲉⲧⲟⲩⲉⲓⲛⲓⲛ : ⲡⲓⲙⲁⲉⲧⲁⲩⲁϣⲕ Ⲡ⳪ ⲛ̀ϧⲏⲧϥ : </td>
        <td class="arabic">الجلجلة بالعبرانية والأقرانيون باليونانية الموضع الذى صلبت فيه يارب</td>
    </tr>
    <tr id="table_21_row_3" class="text">
        <td class="english">You stretched out Your hands, and crucified two thieves with You; one on Your right side, the other on Your left, and You, O good savior, in the midst</td>
        <td class="coptic">ⲁⲕⲫⲱⲣϣ ⲛ̀ⲛⲉⲕϫⲓϫ ⲉ̀ⲃⲟⲗ ⲁϥⲓ̀ϣⲓ ⲛⲉⲙⲁⲕ ⲛ̀ⲕⲉⲥⲟⲛⲓ ⲥ̀ⲛⲁⲩ : ⲥⲁⲧⲉⲕⲟⲩⲓ̀ⲛⲁⲙ ⲛⲉⲙ ⲥⲁⲧⲉⲕϫⲁϭⲏ : ⲛ̀ⲑⲟⲕ ⲉⲕⲭⲏ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ ⲱ̀ ⲡⲓⲥⲱⲧⲏⲣ ⲛ̀ⲁⲅⲁⲑⲟⲥ.</td>
        <td class="arabic">بسطت يديك وصلبوا معك لصين عن يمينك وعن يسارك وانت كائن فى الوسط أيها المخلص الصالح.</td>
    </tr>
    <tr id="table_21_row_4" class="text">
        <td class="english">Glory be to the Father, to the Son, and to the Holy Spirit.</td>
        <td class="coptic">Ⲇⲟⲍⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ ⲁ̀ⲅⲓⲱ̀ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ.</td>
        <td class="arabic">المجد للآب والابن والروح القدس.</td>
    </tr>
    <tr id="table_21_row_5" class="text">
        <td class="english">The right-hand thief cried out saying: Remember me, O my Lord, remember me, O my savior, remember me, O my King, when You come into Your Kingdom.</td>
        <td class="coptic">Ⲁϥⲱϣ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲡⲓⲥⲟⲛⲓ : ⲉⲧⲥⲁⲟⲩⲓ̀ ⲛⲁⲙ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀ ⲱ Ⲡⲁ⳪ : ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀ ⲱ Ⲡⲁⲥⲱⲧⲏⲣ : ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀ ⲱ Ⲡⲁⲟⲩⲣⲟ : ⲁⲕϣⲁⲛⲓ̀ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ</td>
        <td class="arabic">فصرخ اللص اليمين قائلاً اذكرنى ياربى اذكرنى يا مخلصى اذكرنى يا ملكى اذا جئت فى ملكوتك،</td>
    </tr>
    <tr id="table_21_row_6" class="text">
        <td class="english">The Lord answered him in a lowly voice saying: This day you will be with Me in Paradise.</td>
        <td class="coptic">Ⲁϥⲉⲣⲟⲩⲱ ⲛⲁϥ ⲛ̀ϫⲉ Ⲡ⳪ : ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲙ̀ⲙⲉⲧⲣⲉⲙⲣⲁⲩϣ : ϫⲉ ⲙ̀ⲫⲟⲟⲩ ⲉⲕ ⲉ̀ϣⲱⲡⲓ ⲛⲉⲙⲏⲓ : ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲧⲁⲙⲉⲧⲟⲩⲣⲟ.</td>
        <td class="arabic">آجابه الرب بصوت وديع انك اليوم تكون معى فى ملكوتى.</td>
    </tr>
    <tr id="table_21_row_7" class="text">
        <td class="english">Both now, and ever and unto the age of all ages. Amen.</td>
        <td class="coptic">Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ⲉ̀ⲱⲛ̀ⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">الآن وكل اوان والى دهر الدهور. آمين.</td>
    </tr>
    <tr id="table_21_row_8" class="text">
        <td class="english">The righteous Joseph and Nicodemus came took away the Body of Christ, wrapped it in linen cloths with spices, and put it in a sepulcher and praised Him saying, </td>
        <td class="coptic">Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲇⲓⲕⲉⲟⲥ : Ⲓⲱⲥⲏϥ ⲛⲉⲙ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ : ⲁⲩϭⲓ ⲛ̀ⲧ̀ⲥⲁⲣⲝ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅  : ⲁⲩϯ ⲛ̀ⲟⲩⲥⲟϫⲉⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ : ⲁⲩⲕⲟⲥϥ ⲁⲩⲭⲁϥ ϧⲉⲛ ⲟⲩⲙ̀ϩⲁⲩ : ⲉⲩϩⲱⲥ ⲉⲣⲟϥ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ :</td>
        <td class="arabic">أتيا الصديقان يوسف ونيقوديموس واخذا جسد المسيح وجعلا عليه طيباً وكفناه ووضعاه فى قبر وسبحاه قائلين</td>
    </tr>
    <tr id="table_21_row_9" class="text">
        <td class="english">“Holy God, Holy Mighty, Holy Immortal, who was crucified for us, have mercy on us.”</td>
        <td class="coptic">ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲁ̀ⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ : ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ : ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓⲏ̀ⲙⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قدوس الله، قدوس القوى، قدوس الذى لا يموت، الذى صلب عنا، ارحمنا.</td>
    </tr>
    <tr id="table_21_row_10" class="text">
        <td class="english">Glory be to the Father, to the Son, and to the Holy Spirit. Both now, and ever and unto the age of all ages. Amen.</td>
        <td class="coptic">Ⲇⲟⲍⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ ⲁ̀ⲅⲓⲱ̀ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ⲉ̀ⲱⲛ̀ⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.</td>
        <td class="arabic">المجد للآب والابن والروح القدس. الآن وكل اوان والى دهر الدهور. آمين.</td>
    </tr>
    <tr id="table_21_row_11" class="text">
        <td class="english">We also worship him saying: “Have mercy on us, O God our Savior, who was crucified on the cross, destroy Satan under our feet.”</td>
        <td class="coptic">Ⲁⲛⲟⲛ ϩⲱⲛ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ : ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ ⲛⲁⲓ ⲛⲁⲛ Ⲫϯ ⲡⲉⲛⲥⲱⲧⲏⲣ : ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ⲉⲕⲉ̀ϧⲟⲙϧⲉⲙ ⲙ̀ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ: ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉⲛϭⲁⲗⲁⲩϫ.</td>
        <td class="arabic">ونحن أيضاً نسجد له صارخين قائلين ارحمنا يا الله مخلصنا الذى صلبت على الصليب وسحقت الشيطان تحت أقدامنا.</td>
    </tr>
    <tr id="table_21_row_12" class="text">
        <td class="english">Save us and have mercy on us. Lord have mercy, Lord have mercy, Lord bless us. Amen. Give the blessing; I prostrate, forgive me, give the blessing.</td>
        <td class="coptic">Ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ : Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲕⲩⲣⲓⲉ̀ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ ⲁ̀ⲙⲏⲛ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲓ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲓ : ⲓⲥ ϯⲙⲉⲧⲁⲛⲟⲓ̀ⲁ : ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ϫⲱ ⲙ̀ⲡⲓⲥ̀ⲙⲟⲩ.</td>
        <td class="arabic">خلصنا ارحمنا. يار ارحم يارب ارحم يارب ارحم بارك آمين. باركوا على هذه المطانية اغفروا لى قل البركة.</td>
    </tr>
</table>
<table id="table_22" title="Psalms">
    <caption id="caption_table_22" class="caption">Psalms<span class="arabic-caption">المزامير</span></caption>
    <tr id="table_22_row_0" class="commentary">
        <td class="english">The presbyter prays psalms 1, 2, and 3 until the phrase ". I lay down and slept …"</td>
        <td class="arabic">يصلى الكاهن المزمور الاول والثانى والثالث حتى الجملة "انا اضطجعت ونمت..."</td>
    </tr>

    <tr id="table_22_row_1" class="text">
        <td class="english"><h1>Psalm 1</h1>Blessed is the man who has not walked in the counsel of the ungodly, and has not stood in the way of the sinners, and has not sat in the seat of the evil men.</td>
        <td class="arabic"><h1>المزمور الاول</h1>طوبى للرجل الذي لم يسلك في مشورة المنافقين. وفى طريق الخطاة لم يقف، وفى مجلس المستهزئين لم يجلس.</td>
    </tr>
    <tr id="table_22_row_2" class="text">
        <td class="english">But his will is in the law of the Lord; and in His law he shall meditate day and night. He shall be like the tree which is planted by the streams of water, which shall yield its fruit in its due season, and its leaf shall not scatter, and in everything he does he prospers.</td>
        <td class="arabic">لكن في ناموس الرب إرادته، وفى ناموسه يلهج نهارا وليلا. فيكون كالشجرة المغروسة على مجارى المياه التي تعطى ثمرها في حينه. وورقها لا ينتثر، وكل ما يصنع ينجح فيه.</td>
    </tr>
    <tr id="table_22_row_3" class="text">
        <td class="english">Not so are the ungodly, not so; but rather they are like the chaff which the wind scatters upon the face of the earth. Therefore the ungodly shall not stand in judgment, nor the sinners in the council of the righteous. For the Lord knows the way of the righteous; but the way of the ungodly shall perish. ALLELUIA.</td>
        <td class="arabic">ليس كذلك المنافقون، ليس كذلك. لكنهم كالهباء الذي تذريه الريح عن وجه الأرض. فلهذا لا يقوم المنافقون في الدينونة، ولا الخطاة في مجمع الصديقين. لأن الرب يعرف طريق الأبرار، وأما طريق المنافقين فتباد. هلليلويا.</td>
    </tr>

    <tr id="table_22_row_4" class="text">
        <td class="english"><h1>Psalm 2</h1>Why did the nations rage, and the peoples meditate on vain things? The kings of the earth stood up, and the rulers ga­thered together against the Lord and against His Christ; saying, “Let us break through their bonds, and cast away their yoke from us.”</td>
        <td class="arabic"><h1>المزمور الثاني</h1>لماذا ارتجت الأمم، وتفكرت الشعوب في الباطل. قام ملوك الأرض وتآمر الرؤساء معا على الرب وعلى مسيحه قائلين: لنقطع أغلالهما، ولنطرح عنا نيرهما.</td>
    </tr>
    <tr id="table_22_row_5" class="text">
        <td class="english">He who dwells in the heavens shall laugh at them, and the Lord shall mock them. Then He shall speak to them in His anger, and in His wrath He shall trouble them.</td>
        <td class="arabic">الساكن في السموات يضحك بهم، والرب يستهزئ بهم. حينئذ يكلمهم بغضبه، وبرجزه يرجفهم. </td>
    </tr>
    <tr id="table_22_row_6" class="text">
        <td class="english">“But I have been established king by Him on Zion, His holy mountain, proclaiming the ordinance of the Lord: the Lord said to Me, 'You are My Son, today I have begotten You. Ask Me, and I will give You the nations for Your inheritance, and Your authority to the end of the earth. You shall shepherd them with a rod of iron; You shall crush them as a potter's vessel.’ ”</td>
        <td class="arabic">نا أقمته ملكا على صهيون جبل قدسه، لأكرز بأمر الرب. الرب قال لي: أنت ابني، وأنا اليوم ولدتك. اسألني فأعطيك الأمم ميراثك، وسلطانك إلى أقطار الأرض. لترعاهم بقضيب من حديد. ومثل آنية الفخار تسحقهم.</td>
    </tr>
    <tr id="table_22_row_7" class="text">
        <td class="english">Now, understand, O kings: be instructed, all you who judge the earth, serve the Lord with fear, and rejoice in Him with trembling. Take hold of instruction, lest the Lord be angry, and you perish from the way of righteousness, whenever His wrath shall be suddenly kindled. Blessed are all who trust in Him. ALLELUIA.</td>
        <td class="arabic">فالآن أيها الملوك افهموا، وتأدبوا يا جميع قضاة الأرض اعبدوا الرب بخشية. وهللوا له برعدة. الزموا الأدب لئلا يغضب الرب فتضلوا عن طريق الحق. عندما يتقد غضبه بسرعة، طوبى لجميع المتكلين عليه هلليلويا.</td>
    </tr>

    <tr id="table_22_row_8" class="text">
        <td class="english"><h1>Psalm 3</h1>O Lord, why have they who afflict me multiplied? Many have risen up upon me. Many say unto my soul, “There is no salvation for him in his God.” </td>
        <td class="arabic"><h1>المزمور الثالث</h1>يا رب لماذا كثر الذين يحزنونني، كثيرون قاموا علي. كثيرون يقولون لنفسي، ليس له خلاص بإلهه.</td>
    </tr>
    <tr id="table_22_row_9" class="text">
        <td class="english">But You, O Lord, are my supporter, my glory, and the elevation of my head. With my voice I cried unto the Lord, and He heard me out of His holy mountain.<br>I laid down and slept ...</td>
        <td class="arabic">أنت يا رب أنت هو ناصري، مجدي ورافع رأسي. بصوتي إلى الرب صرخت. فاستجاب لي من جبل قدسه.<br>انا اضطجعت ونمت ...</td>


</table>

    <table id="table_23" title="The blessing and conclusion">
        <caption id="caption_table_23" class="caption">The Blessing and Conclusion<span class="arabic-caption">البركة والختام</span></caption>
        <tr id="table_23_row_0" class="priest">
            <td class="english">May Jesus Christ, our true God who through His own goodwill accepted sufferings, and was crucified on the cross for our sakes, </td>
            <td class="arabic">يسوع المسيح إلهنا الحقيقى الذى قبل الآلام بإرادته  وصلب على الصليب من أجلنا. </td>
        </tr>
        <tr id="table_23_row_5" class="priest">
            <td class="english">bless us with all spiritual blessings, and support us, and complete for us the Holy week of Pascha, and bring forth upon us the joy of His Holy Resurrection for many years and peaceful times. </td>
            <td class="arabic">يباركنا بكل بركة روحية ويعيننا ويكمل لنا البصخة المقدسة ويرينا فرح قيامته المقدسة سنين كثيرة وأزمنة سالمة.</td>
        </tr>
        <tr id="table_23_row_6" class="priest">
            <td class="english">Through the never-ending intercessions of the holy, Theotokos St. Mary, and all the choirs of angels and archangels;</td>
            <td class="arabic">بالسؤلات والطلبات التى تصنعها عنا كل حين سيدتنا وملكتنا كلنا والدة الإله القديسة مريم وكل صفوف الملائكة ورؤساء الملائكة</td>
        </tr>
        <tr id="table_23_row_7" class="priest">
            <td class="english">through the prayers of the Patriarchs, the prophets, the Apostles, the martyrs, the righteous and holy ones, the cross-bearers, the ascetics, the confessors and anchorites;</td>
            <td class="arabic">وصلوات رؤساء الأباء والأنبياء والرسل والشهداء ومصاف لباس الصليب والأبرار والصديقين وملاك هذا اليوم المبارك ، </td>
        </tr>
        <tr id="table_23_row_8" class="priest">
            <td class="english">and the blessing of the holy week of Pascha of our Good Savior; </td>
            <td class="arabic">وبركة البصخة المقدسة التى لمخلصنا الصالح.</td>
        </tr>
        <tr id="table_23_row_9" class="priest">
            <td class="english">their holy blessings, their benediction, their power, their gift, their love, and their help be with us all forever. Amen.</td>
            <td class="arabic">بركتهم المقدسة ونعمتهم وقوتهم وهبتهم ومحبتهم ومعونتهم تكون معنا كلنا إلى الأبد. آمين.</td>
        </tr>
        <tr id="table_23_row_10" class="priest">
            <td class="english">Christ our God</td>
            <td class="coptic">Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ</td>
            <td class="arabic">المسيح الهنا</td>
        </tr>
        <tr id="table_23_row_11" class="congregation">
            <td class="english">Amen. So be it.</td>
            <td class="coptic">Ⲁⲙⲏⲛ ⲉⲥⲉϣⲱⲡⲓ</td>
            <td class="arabic">آمين يكون</td>
        </tr>
        <tr id="table_23_row_12" class="priest">
            <td class="english">O King of peace, grant us Your peace, establish for us Your peace, and forgive us our sins. For Yours is the power, the glory, the blessing, and the majesty, forever. Amen.</td>
            <td class="arabic">يا ملك السلام إعطنا سلامك قرر لنا سلامك. وإغفر لنا خطايانا. لان لك القوة والمجد والبركة والعزة إلى الأبد</td>
        </tr>
        <tr id="table_23_row_13" class="priest">
            <td class="english">Make us, O Lord, worthy to pray thankfully:</td>
            <td class="arabic">اللهم اجعلنا مستحقين ان نقول جميعا بشكر:</td>
        </tr>
        <tr id="table_23_row_14" class="congregation">
            <td class="english">Our Father who art in heaven...</td>
            <td class="arabic">أبانا الذى فى السماوات...</td>
        </tr>
    </table>

</div>

`;

};