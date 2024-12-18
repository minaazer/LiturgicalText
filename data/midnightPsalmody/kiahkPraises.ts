import { kiahk } from '../kiahk';
import { cross , skip } from '../repeatedPrayers'

const kiahkPraises = {
kiahkOde(tableNumber) {
    const continuationTableNumber = tableNumber + '.5';
    const html = `
        <table id="table_${tableNumber}" style="display: table;" class="continued" title="Kiahk Ode">
        <caption id="caption_table_${tableNumber}" class="caption">Kiahk Ode
        <span class="arabic-caption">الهوس الكيهكي</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Oh, sing to the LORD a new song! Sing to the
                    LORD, all the earth. Sing to the LORD, bless His name; proclaim the good news of His salvation from
                    day to day. Declare His glory among the nations, His wonders among all peoples. For the LORD is
                    great and greatly to be praised; He is to be feared above all gods. Alleluia.</td>
                <td class="coptic" >Ϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ ϧⲉⲛ ⲟⲩ ϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ
                    ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ: ϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ:ϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲙ̀ⲡⲉϥⲟⲩϫⲁⲓ ⲛ̀ⲉ̀ϩⲟⲟⲩ ϧⲁ ⲧ̀ϩⲓ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲥⲁϫⲓ
                    ⲙ̀ⲡⲉϥⲱⲟⲩ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ ⲛⲉⲙⲛⲉϥϣ̀ⲫⲏⲣⲓ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ϫⲉ ⲟⲩⲛⲓϣϯ ⲡⲉ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲉ̀ⲙⲁϣⲱ: ϥ̀ⲟⲓ
                    ⲛ̀ϩⲟϯ ⲉ̀ϫⲉⲛ ⲛⲓⲛⲟⲩϯ ⲧⲏⲣⲟⲩ: Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ̀.</td>
                <td class="arabic">سبحوا الرب تسبيحاً جديدا: سبحى الرب أيتها الأرض كلها: سبحوا الرب وباركوا اسمه: بشروا
                    بخلاصه: يوماً فيوم: وأخبروا بمجده فى الأمم: وبعجائبه فى جميع الشعوب: لأن الرب عظيم ومبارك جداً:
                    ومخوف على كل الآلهة. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >I will bless the Lord at all times. His
                    praise shall continually be in my mouth. My soul shall make her boast in the Lord, the humble shall
                    hear thereof, and be glad. O magnify the Lord with me, and let us exalt His Name together. Alleluia.
                </td>
                <td class="arabic">أبارك الرب فى كل حين وفى كل أوان تسبحته موجودة فى فمى. بالرب تفتخر نفسى وليسمع أهل
                    الدعة ويفرحوا. عظموا الرب معى ولنرفعن اسمه معا. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >You who dwell between the Cherubim, shine
                    forth. Before Ephraim and Benjamin and Manasseh stir up Your strength, and come and save us. Restore
                    us, O God, and cause Your face to shine, and we shall be saved. Alleluia.</td>
                <td class="arabic">أيها الجالس على الشيروبيم اظهر امام إفرايم وبنيامين ومنسى. أنهض قوتك وهلم لخلاصنا.
                    اللهم أرددنا ولينر وجهك علينا فنخلص. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >He bowed the heavens also, and came down, and
                    darkness was under His feet, and He rode upon a Cherub, and did fly; yes, He did fly upon the wings
                    of the wind. He made darkness His secret place: His pavilion round about Him. Alleluia.</td>
                <td class="arabic">طأطأ السماء ونزل والضباب تحت رجليه. وركب على الشاروبيم وطار. طار على أجنحة الرياح
                    وجعل الظلمة له حجاباً تحوط به مظلته. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >The wings of a dove are covered with silver,
                    and her feathers with yellow gold. When the Almighty scattered kings in it, it was as white as snow
                    in Salmon. Alleluia.</td>
                <td class="arabic">أجنحة حمامة مغشاة بحلى الفضة ومنكباها بصفرة الذهب. وعندما يرسم السماوى عليها ممالك
                    فيبيضون مثل الثلج فى سلمون. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >The hill of God is as the hill of Bashan, a
                    high hill as the hill of Bashan. Why leap you, you high hills? This is the hill, which God desires
                    to dwell in, the Lord will dwell in it forever. Alleluia.</td>
                <td class="arabic">جبل الله الجبل الدسم. الجبل المتجمد الجبل الدسم. ما بالكم تظنون جبالاً مجبنة الجبل
                    الذى سر الله أن يسكن فيه. فإن الرب يسكن فيه الى الانقضاء. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >At Your right hand stood the queen, arrayed
                    in vesture of unwoven gold, adorned in varied colors. Alleluia.</td>
                <td class="arabic">قامت الملكة عن يمينك مشتملة بلباس موشى بالذهب مزينة بأنواع كثيرة. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >Hearken, O daughter, and see, and incline
                    your ear, and forget your own people and your father's house. And the king shall greatly desire your
                    beauty, for He, Himself, is your Lord. Alleluia.</td>
                <td class="arabic">اسمعى يا ابنتى وانظرى وميلى بسمعك. وانسى شعبك وكل بيت أبيك فإن الملك قد اشتهى حسنك.
                    لأنه هو ربك. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >The daughters of Tyre shall worship Him with
                    gifts; the rich of the people of the land shall supplicate His favor. Alleluia.</td>
                <td class="arabic">تسجد له بنات صور يتلقى وجهك بالهدايا أغنياء شعوب الارض. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english" >All the glory of the daughter of the king is
                    within, with gold-ringed garments is she arrayed, adorned in varied colors. The virgins that follow
                    after her are brought unto You. They shall be brought with gladness and rejoicing. They shall be
                    brought into the temple of the King. Alleluia.</td>
                <td class="arabic">كل مجد ابنة الملك من داخل مشتملة بأذيال موشاة بالذهب. مزينة بأشكال كثيرة. يدخلن إلى
                    الملك عذارى خلفها. يدخلن صاحباتها جميعاً. يدخلن بالفرح والتهليل. يدخلن إلى هيكل الملك. الليلويا.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english" >Great is the Lord, and greatly to be praised
                    in the City of our God, in the mountain of His holiness. Beautiful is its situation, the joy of the
                    whole earth, in Mount Zion, on the sides of the north the city of the great King. Alleluia.</td>
                <td class="arabic">عظيم هو الرب ومبارك جداً فى مدينة إلهنا على جبله المقدس تتسع كل الأرض بالتهليل. جبال
                    صهيون جوانب الشمال مدينة الملك العظيم. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english" >His foundation is in the holy mountains. The
                    Lord loves the gates of Zion more than all the dwellings of Jacob. Glorious things are spoken of
                    You, O City of God. Alleluia.</td>
                <td class="arabic">أساساته في الجبال المقدسة: الرب أحب أبواب صهيون أفضل من جميع مساكن يعقوب أعمال كريمة
                    قيلت من أجلك يا مدينة الله. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_11.5" class="north">
                <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english" >And of Zion it shall be said: This and that
                    man was born in her, and the Highest Himself established her. Alleluia.</td>
                <td class="arabic">الأم صهيون تقول ان انسانا وانسانا حل فيها. وهو العلى الذى أسسها الى الأبد. الليلويا.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english" >The angel of the Lord encamps round about
                    them that fear Him, and delivers them. O taste and see that the Lord is good. Blessed is the man
                    that trusts in Him. Alleluia.</td>
                <td class="arabic">ملاك الرب يحوط بكل خائفيه وينجيهم. ذوقوا وانظروا ما أطيب الرب. طوبى للرجل المتوكل
                    عليه. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english" >He who makes His angels spirits. His
                    ministers a flaming fire. Alleluia.</td>
                <td class="arabic">الذى خلق ملائكته أرواحاً وخدامه ناراً تتقد. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english" >He who makes the clouds His chariot. Who
                    walks upon the wings of the wind. Alleluia.</td>
                <td class="arabic">الذى جعل مسالكه على السحاب. الماشى على أجنحة الرياح. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english" >Bless the Lord, you His angels who excel in
                    strength, who do His commandments. Bless you the Lord, all His hosts, you ministers of His, who do
                    His pleasure. Bless the LORD from the heavens; Bless Him in the heights. Alleluia.</td>
                <td class="arabic">باركوا الرب يا جميع ملائكته. الأشداء فى قوتهم الصانعين قوله. سبحوه يا جميع جنوده
                    خدامه الصانعين إرادته باركوا الرب من السموات. باركوه في الأعالى. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="south">
                <td class="english" >Before the angels I will praise, I will
                    worship Your holy temple. Alleluia.</td>
                <td class="arabic">أمام الملائكة أرتل لك واسجد نحو هيكلك المقدس. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="english" >The heavens declare the glory of God and the
                    firmament shows His great work. Day unto day utters speech and night unto night shows knowledge.
                    There is neither speech nor language. Alleluia.</td>
                <td class="arabic">السموات تنطق بمجد الله والفلك يخبر بعمل يديه يوماً يقول كلاماً ليوم. وليلا يظهر علماً
                    لليل. ليس من قول ولا من كلام. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english" >Where their voice is not heard, their line is
                    gone out through all the earth and their words to the end of the world. Alleluia.</td>
                <td class="arabic">الذين لم يسمع لهم صوت. خرجت أصواتهم على الأرض كلها وبلغ كلامهم الى أقطار المسكونة.
                    الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english" >The Lord gave the word: great was the company
                    of those that published it. The King of armies is the Beloved. Alleluia.</td>
                <td class="arabic">الرب يعطى كلمة للمبشرين بعظم قوة. وملك القوات هو الحبيب. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english" >Give thanks unto the Lord; call upon His
                    Name; make known His deeds among the people; talk you of all His wondrous works. Glory you in His
                    Holy Name. Alleluia.</td>
                <td class="arabic">اعترفوا للرب وادعوا باسمه. وبشروا بأعماله فى الأمم. أخبروا بجميع عجائبه. افتخروا
                    باسمه القدوس. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english" >Precious in the sight of the Lord is the
                    death of His saints. O Lord, I am Your servant, and the son of your handmaid: You have loosed my
                    bonds. I will offer to You the sacrifice of thanksgiving. I will pay my vows unto the Lord now in
                    the presence of all His people, in the courts of the Lord's house, in the midst of you, O Jerusalem.
                    Alleluia.</td>
                <td class="arabic">كريم أمام الرب موت أصفيائه. يارب أنا عبدك وابن أمتك. حللت وثاقى فلك أذبح ذبيحة
                    التسبيح. وأوفى للرب نذورى فى ديار بيت إلهنا قدام جميع الشعب فى وسط أورشليم. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english" >God is greatly to be feared in the assembly
                    of the saints. He is the God of Israel. He will give strength unto His people. Let the righteous be
                    glad; let them rejoice before God. Yes, let them exceedingly rejoice before God; yes, let them
                    exceedingly rejoice. Blessed be the Lord God. Alleluia.</td>
                <td class="arabic">عجيب هو الله فى قديسيه. إله اسرائيل هو يعطى قوة وعزاء لشعبه. الصديقون يفرحون ويتهللون
                    أمام الله ويتنعمون بسرور مبارك الرب الإله. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english" >Gird Your sword upon Your thigh, O most
                    Mighty. With Your glory and Your majesty ride prosperously. Alleluia.</td>
                <td class="arabic">تقلد سيفك على فخذك أيها الجبار بحداثتك و بهائك امتد وسر واملك. الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="south">
                <td class="english" >You shall tread upon the lion and adder; the
                    young lion and the dragon shall You trample under feet. Because he has set His love upon Me,
                    therefore will I deliver him: I will set him on high because he has known My Name. Alleluia.</td>
                <td class="arabic">تطأ الأفعى وملك الحيات. وتكسر الأسد والتنين. لإنه إياي ترجى فأخلصه. وأستره لأنه قد
                    عرف اسمى. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english" >The salvation of the righteous is of the
                    Lord. He is their strength in the time of trouble. And the Lord shall help them and save them from
                    the wicked because they trust in Him. Alleluia.</td>
                <td class="arabic">خلاص الأبرار من عند الرب. وهو ناصرهم في زمن الشدائد الرب يعينهم وينقذهم من الخطاة
                    لأنهم توكلوا عليه. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="south">
                <td class="english" >Let the righteous rejoice with joy. They
                    cried and the Lord heard them and He delivered them out of all their distress. The Lord is nigh unto
                    them that are of a contrite heart and He will save the humble of spirit. Alleluia.</td>
                <td class="arabic">فليفرح الأبرار بالفرح. والصديقون صرخوا إلى الرب فسمع لهم. ونجاهم من جميع شدائدهم قريب
                    الرب من مستقيمي القلوب. و المتواضعى الأرواح يخلصهم. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english" >Many are the afflictions of the righteous,
                    but the Lord delivers him out of them all. He keeps all his bones; not one of them is broken.
                    Alleluia.</td>
                <td class="arabic">كثيرة هى أحزان الصديقين. والرب يخلصهم من جميعها. الرب يحفظ جميع عظامهم. وواحدة منها
                    لا تنكسر. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english" >Light is sown for the righteous and gladness
                    for the upright in heart. Rejoice in the Lord, you righteous! Give thanks at the remembrance of His
                    holiness. Alleluia.</td>
                <td class="arabic">نور أشرق للصديقين. وفرح لمستقيمى القلوب. افرحوا أيها الصديقون بالرب. واعترفوا لذكر
                    قدسه. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english" >The righteous shall flourish like the palm
                    tree. He shall grow like a cedar in Lebanon. Those that are planted in the house of the Lord shall
                    flourish in the courts of our God. Alleluia.</td>
                <td class="arabic">البار يعلوا مثل النخلة. ويكثر مثل أرز لبنان المغروسون في بيت الرب يزهرون في ديار بيت
                    إلهنا الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english" >The mouth of the righteous speaks wisdom and
                    his tongue talks of judgment. The law of his God is in his heart; none of his steps shall slide.
                    Alleluia.</td>
                <td class="arabic">فم البار يتلو الحكمة ولسانه ينطق بالحكم ناموس الله كائن في قلبه. وخطواته لا تزل.
                    الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="north">
                <td class="english" >Your saints shall speak of the glory of Your
                    kingdom, and talk of Your power. He will fulfill the desire of them that fear Him. He also will hear
                    their cry and will save them. The Lord preserves all them that love Him. Alleluia.</td>
                <td class="arabic">قديسوك يباركونك وينطقون بمجد ملكوتك. يصنع إرادة خائفيه ويسمع تضرعهم ويخلصهم. الرب
                    يحفظ كل محبيه. الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_33" class="south">
                <td class="english" >Be glad in the Lord and rejoice, you
                    righteous. Shout for joy, all you that are upright in heart. For this, shall everyone that is godly
                    pray unto You in a time when You may be found. Alleluia.</td>
                <td class="arabic">افرحوا بالرب وتهللوا أيها الأبرار. افتخروا يا جميع مستقيمي القلوب فلهذا يصلى لك كل
                    الأبرار في زمان مستقيم. الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="north">
                <td class="english" >Let Your tender mercies come speedily to meet
                    us because we have been brought very low. Help us, O God of our salvation, for the glory of Your
                    Name. O Lord, save us and forgive us our sins for the glory of Your Name. Alleluia.</td>
                <td class="arabic">فلتسبق وتدركنا سريعاً رأفتك لأننا قد تمسكنا جداً. أعنا يا لله مخلصنا. من أجل مجد اسمك
                    يا رب تخلصنا. وتغفر لنا خطايانا من أجل اسمك القدوس الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="south">
                <td class="english" >Let them exalt Him in the church of His
                    people and praise Him in the seat of the elders, for He has made the family like a flock of sheep,
                    that the upright shall see and rejoice. Alleluia.</td>
                <td class="arabic">فليرفعوه فى كنيسة شعبه. وليباركوه على منابر الشيوخ. لأنه جعل الأبوات مثل الخراف. ينظر
                    المستقيمون ويفرحون. الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="north">
                <td class="english" >The Lord has sworn and will have no regret.
                    You are a priest forever after the order of Melchizedek. Alleluia.</td>
                <td class="arabic">أقسم الرب ولن يندم أنك أنت الكاهن إلى الأبد على طقس ملشيصادق. الليلويا.</td>
            </tr>
        <tbody>
    </table>
    <table id="table_${continuationTableNumber}" style="display: table;" title="...Continuation of Kiahk Ode">
        <caption id="caption_table_${continuationTableNumber}" class="caption" style="display:none"></caption>
        <tbody>
            <tr id="table_${continuationTableNumber}_row_37" class="south">
                <td class="english" >God be merciful to us and bless us, and cause
                    His face to shine upon us. Alleluia.</td>
                <td class="arabic">الله يتراءف علينا ويباركنا ويشرق وجهه علينا ويرحمنا. الليلويا.</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_38" class="north">
                <td class="english" >Save Your people, and bless Your inheritance,
                    shepherd them also, and bear them up forever. Alleluia.</td>
                <td class="arabic">يا رب خلص شعبك بارك ميراثك ارعهم وارفعهم إلى الأبد. الليلويا.</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_39" class="south">
                <td class="english" >Whoever is wise will observe these things,
                    and they will understand the lovingkindness of the LORD. Alleluia.</td>
                <td class="coptic" >Ⲛⲓⲙ ⲡⲉ ⲡⲓⲥⲁⲃⲉ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲁⲣ̀ⲉϩ ⲉ̀ⲛⲁⲓ ⲟⲩⲟϩ
                    ⲛ̀ⲥⲉⲕⲁϯ ⲉ̀ⲛⲓⲛⲁⲓ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ : Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ̀.</td>
                <td class="arabic">من هو الحكيم فيحفظ هذه ويتفهم مراحم الرب. الليلويا.</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_40" class="north">
                <td class="english" >Bless me, bless me, behold the repentance.
                    Forgive me, O my fathers and my brethren pray for me. In love, I ask you to remember me.</td>
                <td class="coptic" >Ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲓ : Ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲓ: ⲓⲥ ϯⲙⲉⲧⲁ̀ⲛⲟⲓⲁ̀ ⲭⲱ ⲛⲏⲓ
                    ⲉ̀ⲃⲟⲗ : ⲛⲁⲓⲟϯ ⲛⲉⲙ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϣ̀ⲗⲏⲗ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ : ϧⲉⲛ ⲟⲩⲁ̀ⲅⲁⲡⲏ ϯϯϩⲟ ⲉ̀ⲣⲱⲧⲉⲛ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀.</td>
                <td class="arabic">باركوا على. ها مطانية اغفروا لي يا آبائي وإخوتي صلوا علي. بالمحبة أسالكم اذكروني.
                </td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_41" class="south">
                <td class="english" >Glory to the Father and to the Son and to the
                    Holy Spirit, now and ever and unto the ages of ages.</td>
                <td class="coptic" >Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ ⲁ̀ⲅⲓⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ: ⲕⲉ ⲛⲩⲛ ⲕⲉ
                    ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ:</td>
                <td class="arabic">المجد للاب والابن والروح القدس الان وكل أوان وإلي دهر الدهور</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_42" class="north">
                <td class="english" >Amen. Alleluia. Lord have mercy. Lord have mercy. Lord have mercy. ${cross}</td>
                <td class="coptic" >Ⲁ̀ⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. ${cross}</td>
                <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
    return html;
}
,
amenAlleluia(tableNumber) {
    const continuationTableNumber = tableNumber + '.5';
    const html = `
    <table id="table_${tableNumber}" style="display: table;" class="continued" title="Amen, Alleluia">
        <caption id="caption_table_${tableNumber}" class="caption">Amen, Alleluia
        <span class="arabic-caption">أمين الليلويا</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Agios O Theos: Agios Yes-sheros: Agios
                    Athanatos: Amen Alleluia</td>
                <td class="arabic">آجيوس أوثيئوس: آجيوس إس شيروس: أجيوس أثاناطوس: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="north">
                <td class="english" >Holy God Holy: Mighty in His glory: Holy
                    is the Living God: Amen Alleluia</td>
                <td class="arabic">قدوس الله قدوس: قدوس القوي قدوس: قدوس الحىّ الله: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="south">
                <td class="english" >By the help of the Mighty God: The great
                    Lord of lords: I'll explain the meaning of: Amen Alleluia</td>
                <td class="arabic">بمعونة رب قدير: إله عظيم خبير: أشرح معنى تفسير: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >How beautiful is its meaning: There is
                    none, but our God: We praise Him high in His heaven: Amen Alleluia</td>
                <td class="arabic">معناه ياما أحلاه: ليس غير الله إله: نسبحه فوق أعلى سماه: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Michael and Gabriel: Raphael and Suriel:
                    All praising Him saying: Amen Alleluia</td>
                <td class="arabic">ميخائيل وغبريال: رافائيل وسوريال: يتلون تسابيح وأقوال: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english" >The heavenly Cherubim: And the mighty
                    Seraphim: They also glorify Him: Amen Alleluia</td>
                <td class="arabic">تسبحة الشيروبيم: وأيضاً السيرافيم: قائلين بصوت عظيم: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english" >Heavenly hosts of light: And all the
                    spiritual ranks: Continuously praise Him: Amen Alleluia</td>
                <td class="arabic">أجناد نورانية: وطغمات روحانية: يصيحون علانية: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >Myriads of myriads: Ranks around the
                    throne: Proclaiming before the Lord: Amen Alleluia</td>
                <td class="arabic">ربوات ربوات وألوف: من حول العرش صفوف: يقولون وهم وقوف: أمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >The four living creatures: Around the
                    throne of God: Pleading on our behalf: Amen Alleluia</td>
                <td class="arabic">والأربعة الكائنات: من تحت العرش ثبات: يتلون كل الأوقات: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="english" >The first is like a lion: A figure
                    without a body: Bowing to the King of Zion: Amen Alleluia</td>
                <td class="arabic">الأول شبه أسد: صورة من غير جسد: وأعين بلا عدد: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english" >The second is like a calf: A sign of
                    sacrifice: Proclaiming unceasingly: Amen Alleluia</td>
                <td class="arabic">الثانى شبه الثور: وهو منظر من نور: يصيح بلا فتور: آمين الليلويا |</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english" >The third is like an eagle: Soaring in
                    the heavens: Pleading before the Only-Begotten: Amen Alleluia</td>
                <td class="arabic">الثالث شبه عقاب: يسأل عن الطير بإيجاب: أمام وحيد الآب: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english" >The fourth has a face like a man: Asking
                    for forgiveness on our behalf: Before the Lord our God: Amen Alleluia</td>
                <td class="arabic">الرابع شبه إنسان: يسأل عنا الغفران: أمام الله الديان: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english" >A scene encountered with light: They
                    praise God who is seated: Up above on His throne: Amen Alleluia</td>
                <td class="arabic">منظر بالنور مكسى: يسبحون فى ات هيمسى: من فوق أعلى الكرسى: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english" >Scenes with diversities: Seraphim with
                    six wings: Praising continuously: Amen Alleluia</td>
                <td class="arabic">منظر بانواع شتى: سيرافيم باجنحة ستة: يصيحون بلا سكتة: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english" >The twenty-four elders: Priests of the
                    high order: To Him they surrender: Amen Alleluia</td>
                <td class="arabic">والأربعة والعشرون قسيس: كهنة بمقام نفيس: يصيحون بالتقديس: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english" >The stars and the orbits: Praise Him
                    throughout the way: Up high in the heavens: Amen Alleluia</td>
                <td class="arabic">وتسبحه الأفلاك: الذين سلكوا الأسلاك: من فوق أعلى السموات: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english" >Lucifer has become: Satan because of
                    pride: When he ceased to say: Amen Alleluia</td>
                <td class="arabic">سطانائيل قد صار: شيطانا بالاستكبار: لما بطل هذا التذكار: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english" >Pitiful is the one who hears it: In the
                    midst of the congregation: And does not sing with it: Amen Alleluia</td>
                <td class="arabic">مسكين من يسمعها: فى حضرة قائلها: ولايتلو معها: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english" >Alleluia is praise: Hymns and songs: We
                    cry out saying: Amen Alleluia</td>
                <td class="arabic">الليلويا تسبيح: وترتيل ومديح: بها نصرخ ونصيح: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_19.5" class="north">
                <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english" >Alleluia is glorification: For a mighty
                    Lord: It is unique and great memorial: Amen Alleluia</td>
                <td class="arabic">الليلويا تمجيد: لإله عظيم مجيد: وهو تذكار عظيم فريد: آمين الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english" >Alleluia is pleasure: And it gives
                    satisfaction: To utter two thousands: Amen Alleluia</td>
                <td class="arabic">الليلويا تنزيه: وقائلها يكفيه: يقول ألفين بفية: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english" >Alleluia is joy: And it is a sweet
                    language: It saves from damage: Amen Alleluia</td>
                <td class="arabic">الليلويا بهجة: وهى أحلى لهجة: وقائلها ينجى: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english" >Alleluia is exaltation: For a merciful
                    God: Who is generous for generations: Amen Alleluia</td>
                <td class="arabic">الليلويا تعظيم: لإله رؤوف رحيم: خفى الألطاف كريم: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english" >Alleluia is a memorial: For the great God
                    of Wonders: We praise in great numbers: Amen Alleluia</td>
                <td class="arabic">الليلويا تذكار: لإله عظيم ستار: يجب له التذكار: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english" >Alleluia is a hymn: A praise and
                    rejoicing: And it is best expressed: Amen Alleluia</td>
                <td class="arabic">الليلويا ترتيل: وتسبيح وتهليل: وهى أفضل ما قيل: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="south">
                <td class="english" >Blessed is the Creator: Existent before
                    the ages: Filling all places: Amen Alleluia</td>
                <td class="arabic">سبحانه مكون ماكان: كائن قبل الأكوان: ما يخلى منه مكان: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="south">
                <td class="english" >Blessed is the Mighty: Unseen and
                    incomprehensible: He is to be adored: Amen Alleluia</td>
                <td class="arabic">سبحانه جل ثناه: خفى لاعين تراه: ولامعبود سواه: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english" >He created the waters: The fire and the
                    earth: He made them out of nothing: Amen Alleluia</td>
                <td class="arabic">سبحانه خلق من الماء: ناراً وأرضاً صماء: أوجدها من العدما: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="north">
                <td class="english" >Blessed is the zealous Lord: Merciful and
                    forgiving: All deeds He is covering: Amen Alleluia</td>
                <td class="arabic">سبحانه رب غيور: رؤوف رحيم غفور: على كل فعل ستور: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english" >Purity for the righteous: Fulfilled by
                    Alleluia: Let us all say together: Amen Alleluia</td>
                <td class="arabic">بالليلويا قد صار: تحقيق بر الأبرار: قولوا أيها الحضار: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english" >King David prophesied: And by it
                    glorified: Words which are divinely prepared: Amen Alleluia</td>
                <td class="arabic">داود بها تنبأ: وبفضلها أنبأ: بأقوال منتسبة: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="north">
                <td class="english" >In the book of the Psalms: The hundred
                    and fifty-one psalms: And at the end of every psalm: Amen Alleluia</td>
                <td class="arabic">فى شرح سفر المزامير: المائة واحد والخمسين مزمور: وفى آخر كل مزمور: آمين الليلويا
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_33" class="north">
                <td class="english" >It is prayed at all times: To the Creator
                    of the heavens: And is explained in the canticles: Amen Alleluia</td>
                <td class="arabic">تقرأ سائر الأوقات: إلى خالق السموات: وفى شرح الهوسات: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="south">
                <td class="english" >A fraction for the Korban: Hippe Evshe
                    Neman (Behold He is present with us): In it the faith is clear: Amen Alleluia</td>
                <td class="arabic">وقسمة للقربان: هيبى إفكى نيمان: وفيها شرح الإيمان: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="south">
                <td class="english" >David the pure proclaimed: Mary, the
                    Virgin Lady: On the ten strings: Amen Alleluia</td>
                <td class="arabic">مدح داود البار: مريم سيدة الأبكار: على العشرة الأوتار: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="north">
                <td class="english" >By the organ and the harp: The cymbals
                    and the strings: The timbrel and chorus: Amen Alleluia</td>
                <td class="arabic">بالأرغن والقيثار: والصنوج والأوتار: والدف مع المزمار: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_37" class="north">
                <td class="english" >He said, O daughter of Zion: Your Lord
                    loved you and chose you: Listen and incline your ears: Amen Alleluia</td>
                <td class="arabic">قال ياإبنة ربك: اختارك وأحبك: أصغى وانسى شعبك: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="south">
                <td class="english" >About her he also said: She is the high
                    mountain of God: Above all other types: Amen Alleluia</td>
                <td class="arabic">وعنها أيضاً قال: هى جبل الله العال: أعلى من كل مثال: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="south">
                <td class="english" >He called her Zion: And said she is the
                    chosen one: From whom God will be human: Amen Alleluia</td>
                <td class="arabic">وسماها صهيون: وقال سوف يكون: اله سره مكنون: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="north">
                <td class="english" >Again he named her: The Queen who is
                    :Embraced by light: Amen Alleluia</td>
                <td class="arabic">وسماها بالجملة: الملكة المشتملة: بالنور والحلة: آمين الليلويا</td>
            </tr>
            <tr id="table_${tableNumber}_row_41" class="north">
                <td class="english" >He called all the nations: To clap hands
                    and praise: Singing hymns and praises: Amen Alleluia</td>
                <td class="arabic">وقال جميع الأمم: تصفق بتراتيل وهمم: يتلون تسابيح بنغم: آمين الليلويا</td>
            </tr>
            <tbody>
    </table>
        <table id="table_${continuationTableNumber}" style="display: table;" title="...Continuation of Amen, Alleluia">
        <caption id="caption_table_${continuationTableNumber}" class="caption" style="display:none"></caption>
        <tbody>
            <tr id="table_${continuationTableNumber}_row_42" class="south">
                <td class="english" >He said, "Blessed is the man: Who is
                    adorned with mercy: For the poor and the down-trodden: Amen Alleluia</td>
                <td class="arabic">وقال طوبى للإنسان: المتعطف بالإحسان: على البائس والمهان: آمين الليلويا</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_43" class="south">
                <td class="english" >For God will save him: And grant him many
                    goods: To satisfy him for many years: Amen Alleluia</td>
                <td class="arabic">فإن الرب ينجيه: ومن الخيرات يعطيه: ما يكفيه ويعافيه: آمين الليلويا</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_44" class="north">
                <td class="english" >Lord, we ask of You: Keep Pope Tawadros
                    the great: Our Patriarch and grant him wisdom: Amen Alleluia</td>
                <td class="arabic">يارب إليك نسأل: إحفظ البابا تواضروس الأمثل: بطريركنا واعطه الاقبال: آمين الليلويا
                </td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_45" class="north">
                <td class="english" >Also keep in safety: The ones who watch
                    over us: Our metropolitans and bishops: Amen Alleluia</td>
                <td class="arabic">يارب طمنا: على الساهرين عنا: مطرانتنا واساقفتنا: آمين الليلويا</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_46" class="south">
                <td class="english" >And keep, O Lord of lords: All the
                    beloved ones: Who are present and absent: Amen Alleluia</td>
                <td class="arabic">واحفظ يارب الأرباب: سائر كل الأحباب: الحضار والغياب: آمين الليلويا</td>
            </tr>
            <tr id="table_${continuationTableNumber}_row_47" class="south">
                <td class="english" >And also protect the reader: Who said it to the audience: And living it in abundance: Amen Alleluia ${cross}</td>
                <td class="arabic">وأحفظ قاريها: والشارح لمعانيها: والعامل بما فيها: آمين الليلويا ${cross}</td>
            </tr>
        </tbody>
    </table>`;
    return html;
}
,
praiseAfterThe1stCanticle(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="praise after the 1st Canticle (The Lord Said to Moses)">
<caption id="caption_table_${tableNumber}" class="caption">Praise after the 1st Canticle <br />(The Lord Said to Moses)
    <span class="arabic-caption">مديع على الهوس الاول <br>(قال الرب لموسى)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >The Lord said to Moses,: Tell your people
            to depart: Do not remain hopeless: In the Lord God believe</td>
        <td class="arabic">قال الرب لموسى: قل لشعبك هو يرحل: اضرب البحر بالعصا: ينفتح لك فيه مدخل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >At night, Moses arose: Hit the sea with
            the rod: They escaped from their foes: Their pathway dry and broad</td>
        <td class="arabic">فقام موسي بالليل: وضرب البحر بسرعة: فانفتح فيه درب طويل: وطريق متسعة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >The sea was divided in half: And they
            departed together: And they walked on ground: At the bottom of the sea</td>
        <td class="arabic">فانشق البحر نصفين: وعبروا جملة سوية: وصاروا فيه ماشيين: علي الأرض السفلية.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >The pillar of fire was a guide:
            Throughout the way: Before the children of Israel: To illuminate their path</td>
        <td class="arabic">وعامود النور دليل: للطريق يدلهم: من قدام آل إسرائيل: وبنوره شاملهم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >They walked on ground and rocks: In the
            midst of the sea: And the waters were a high wall: On their right hand and their left</td>
        <td class="arabic">داسوا علي الباج والصخور: في وسط قاع البحر: والمياه كمثل السور: العالى يمين ويسار.
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >Pharaoh dared and entered: With his
            horses after them: Chariots and horsemen: Were chasing them</td>
        <td class="arabic">دخل فرعون وتجاسر: بخيوله في أثرهم: ومعه كل عساكر: بعبيده يطاردهم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >The pillar of cloud went before them: And
            separated the two camps: And Pharaoh was in darkness: And his servants could not see</td>
        <td class="arabic">فأتاهم عامود الغمام: وحجز بين الصفين: فبقي فرعون في ظلام: وعبيده مطموسين.</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >The Egyptians said: Let us flee from
            them: Before the children of Israel: For the Lord fights for them</td>
        <td class="arabic">قال المصريون: نحن نهرب منهم: من قدام آل إسرائيل: الرب يحارب عنهم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >The Lord said to Moses: Stretch your hand
            over the sea: That the waters may come again: Upon the Egyptians</td>
        <td class="arabic">قال الرب لموسى: اضرب البحر رده: فضرب البحر بالعصا: رجع الماء إلي أصله.</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >The chariots of Pharaoh: Drowned in the
            midst of the sea: And his servants died: And the darkness blocked their sight</td>
        <td class="arabic">فانقلبت بكرات فرعون: وغطسوا في وسط المياه: وعبيده انطمسوا: وعمتهم الظلمة.</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >A vicious storm began: In the midst of
            the high sea: The waves and tides relapsed: And the waters shut and closed</td>
        <td class="arabic">فثار عاصف بعجاجه: في وسط البحر أهاجه: وانطبقت أمواجه: ورجع الماء إلى أصله.</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Pharaoh surely drowned: Along with all
            his horsemen: None remained of them: And settled at the bottom of the sea</td>
        <td class="arabic">غطس فرعون وغاص: وعساكره الكل معاه: وصاروا الجميع كالرصاص: ورسخوا في قاع المياه.
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >The sun shined at that time: When this
            monster drowned: And Israel was courageous: Crossed the sea and walked</td>
        <td class="arabic">أشرقت الشمس تلك الساعة: حين غرق ذاك الجبار: واسرائيل صار في شجاعة: عبر البحر
            وسار.</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >Joyfully they crossed the sea: Walking on
            ground and rocks: They almost flew like eagles: And descended on top of the mount</td>
        <td class="arabic">جازوا البحر بسرور: ماشيين علي الباج والصخور: وطاروا مثل النسور: ونزلوا علي أعلى
            الطور.</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >Then Moses praised the Lord: Along with
            the children of Israel: With all the ranks and chiefs: Singing a joyful song</td>
        <td class="arabic">حينئذ سبح موسى: وجماعة إسرائيل: ومعه كل الرؤساء: بالتسابيح والتهليل.</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Moses and the Israelites: Spoke in one
            tongue saying: Let us sing to the Lord: For He has triumphed gloriously</td>
        <td class="arabic">وكان موسي والشعب: يقولون بفم واحد: تعالوا نسبح الرب: لأنه بالمجد تمجد.</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >The horsemen and the chariots: Were
            thrown in the Red Sea: And Israel was saved: From shame and humiliation</td>
        <td class="arabic">الخيل وركاب الخيل: طرحهم في البحر الأحمر: وخلص اسرائيل من الذلة والعار.</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >This is the Lord my God: I glorify His
            Great Name: This is the Lord my God: Maker of all great things</td>
        <td class="arabic">هذا هو إلهى: أمجد اسمه دائم: هذا هو إله آبائى: صانع كل عظائم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_17.5" class="north">
        <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >He abolished the army by His Might: The
            Lord God is honored: Pharaoh and his horsemen: Drowned in the sea</td>
        <td class="arabic">حطم الجيش بجبروته: الرب اسمه مكرم: فرعون وقواته: آففيرفورو إإفيوم</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >The best of his horsemen: Drowned in the
            midst of the sea: And all his warriors: At the bottom of the sea settled</td>
        <td class="arabic">خيار فرسانه الثلاثية: في وسط البحر غطست: وعساكره الحربية: في قاع المياه رسخت</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >The waters covered them: And were taken
            to the depths: As you cast stones: And the waters shut them in and closed</td>
        <td class="arabic">وغطتهم المياه: وغطسوا في الأعماق: مثل حجر ورماه: والبحر عليهم ضاق</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english" >Your Mighty Right Hand, O Lord: Is
            glorified by Its actions: Your Mighty Right Hand, O Lord: Destroyed all its enemies</td>
        <td class="arabic">يمينك ياربى: تمجدت بقواها: يمينك يا إلهى: أهلكت كل أعداها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >Who is like You, O God: Among the other
            gods: You are glorified in Your saints: Who marvel at You</td>
        <td class="arabic">من يشبهك في الآلهة: ياربي من مثلك: ممجد في قديسيك: يتعجبون منك.</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >You have stretched Your hands: And the
            sea swallowed them: You led Your people by Your justice: To the place of rest</td>
        <td class="arabic">بسطت يدك: والأرض ابتلعتهم: وبالعدل هديت شعبك: إلى موضع راحتهم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >Miriam, Aaron's sister,: Took a timbrel
            in her hands: And all the women went out after her: With timbrels and dances</td>
        <td class="arabic">فأخذت مريم أخت هارون: الدف بيديها: والنسوة معها يغنون: بطبولهم حواليها.</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english" >Miriam, the prophetess,: Sang before them
            and said: And the women along with her: Playing the cymbals and timbrel</td>
        <td class="arabic">فبدأت مريم النبية: تغني قدام وتقول: والنسوة معها سوية: يدقون صنوجاً مع طبول.</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="south">
        <td class="english" >Singing a joyful song: Saying in one
            voice: Let us praise the Lord: For He triumphed gloriously</td>
        <td class="arabic">يغنون بغناء يطرب: ويقولون بفم واحد: تعالوا نسبح الرب: لأنه بالمجد تمجد</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >The chariots and the horsemen: Were
            drowned in the Red Sea: What a great joy for Israel: For their salvation from the Egyptians</td>
        <td class="arabic">الخيل وركاب الخيل: طرحهم في البحر الأحمر: يا فرحة إسرائيل: بخلاصه من الكفار.</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english" >The waters of the sea split: And the very
            deep became a walkway: And Moses crossed in it: But the enemy fell to their damnation</td>
        <td class="arabic">بالقطع انقطع ماء البحر: والأعماق صارت مسلك: وموسي فيها عبر: والعدو سقط في مهلك.
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="north">
        <td class="english" >An unseen ground: The sun shined upon it:
            A path which was covered: They walked on it</td>
        <td class="arabic">أرض غير منظورة: أشرقت الشمس عليها: وطريق مستورة: افموشي هيوتف.</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="south">
        <td class="english" >The liquid water stood: Before Moses and
            Aaron: In a marvelous way: Miraculously</td>
        <td class="arabic">الماء السائل وقف: قدام موسي وهارون: بعجب لا يوصف: أووه أمباراذوكسون.</td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="south">
        <td class="english" >Pharaoh and his horsemen drowned: In the
            bottom of the sea: And Israel crossed away: Through the Red Sea</td>
        <td class="arabic">فرعون ومركباته غطسوا: أسفل في القاع في اليم: وبنوا اسرائيل عبروا: ناف جين يور ام
            افيوم.</td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="north">
        <td class="english" >And Moses praised before them: Till they
            reached the harbor: In peace and happiness: In the wilderness of Sinai ${cross}</td>
        <td class="arabic">وكان موسي يسبح قدام: وطلعوا من المينا: إلي حين وصلوا بسلام: هي ابشا في انسينا.
         ${cross}</td>
    </tr>
</tbody>
</table>`;
return html;
}
,
praiseAfterMondayTheotokia(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Praise after Monday Theotokia (Be Strengthened in Faith)">
<caption id="caption_table_${tableNumber}" class="caption">Praise after Monday Theotokia <br />(Be Strengthened in Faith)
    <span class="arabic-caption">مديع على ثيوطوكية الاثنين <br>(تقو بالإيمان)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >Be strengthened in faith: O you who
            believe in Christ: And praise the joy of the world: Maria- Ti Parthenos</td>
        <td class="arabic">تقو بالإيمان: يا من تؤمن بإيسوس: وامدح بهجة الأكوان: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >Begin by signing yourself: With the sign
            of the Cross: And praise at all times :Maria- Ti Parthenos</td>
        <td class="arabic">بادر وارشم ذاتك: بعلامة بى استافروس: وامدح كل أوقاتك: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >Repent from doing evil: And hold on to
            the Law: And praise at all times :Maria- Ti Parthenos</td>
        <td class="arabic">تب عن فعل الزلات: وتمسك بالناموس: وأمدح كل الأوقات: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >Gabriel, who was sent, came: From the
            Holy Father: He announced to the Virgin: Maria- Ti Parthenos</td>
        <td class="arabic">جبرائيل أتي مرسول: من عند الآب القدوس: بشر عذراء وبتول: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >When he told her, she accepted: The
            tidings of the angel: And with the Spirit of God, she conceived: Maria-Ti Parthenos</td>
        <td class="arabic">حين بشرها قبلت: بشارة بي أنجيلوس: وبروح الله حملت: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >The salvation of the human race: And of
            the entire world: From the pure Virgin: Maria- Ti Parthenos</td>
        <td class="arabic">خلاص البشرية: وسائر بي كوسموس: من بكر نقية: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >They called you many names: You are
            called righteous: O, you the holy saint: Maria- Ti Parthenos</td>
        <td class="arabic">دعوك ذو الألباب: سيموتى إيروذيكيئوس: اوثي إثؤاب: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >The Lord of Glory chose you: According to
            the Psalmist: With His Holy Spirit adorned you: Maria-Ti Parthenos</td>
        <td class="arabic">رب المجد اختارك: كاتا إبساجي إم بي هيمنودوس: وبروح قدسه زانك: ماريا تى بارثينوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >The Divine Light adorned you: With the
            dwelling of my Lord Jesus: The One from the Trinity: Maria-Ti Parthenos</td>
        <td class="arabic">زانك نور اللاهوت: بحلول باشويس إيسوس: الواحد من الثالوث: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >They called you the censer: Made of pure
            gold: And a famous tabernacle: Maria-Ti Parthenos</td>
        <td class="arabic">سموك تي شوري: إننوب انكاثاروس: وقبة مشهورة: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >You bore the Son of Righteousness: In
            your womb, O Virgin and bride: Who received what you have received: Maria-Ti Parthenos</td>
        <td class="arabic">شمس البر حملت: في أحشاك يابكر عروس: من نال شبه ما نلت: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Zephaniah proclaimed: About the birth of
            Christ: That He will descend as dew and rain :Maria-Ti Parthenos</td>
        <td class="arabic">صوفونيوس خبر: عن ميلاد بي إخرستوس: انه ينزل كندي ومطر: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >The Pantocrator: The Life-giver of all
            people: You gave birth to the Son of Man :Maria-Ti Parthenos</td>
        <td class="arabic">ضابط كل الأكوان: ومحيي كل النفوس: حملته شبه انسان: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >Blessed are you, O Mother of God: Blessed
            are you, O Mother of The Holy: You are of the seed of David :Maria- Ti Parthenos</td>
        <td class="arabic">طوباك ياأم المعبود: طوباك ياأم القدوس: يانسل الأب داود: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >From you the Divine appeared: Christ the
            King of glory: United with Humanity :Maria- Ti Parthenos</td>
        <td class="arabic">ظهر منك اللاهوت: ملك المجد بى اخريستوس: متحدا بالناسوت: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >On you we have hoped: And we ask you, O
            Mother of Jesus: Do not forsake us :Maria- Ti Parthenos</td>
        <td class="arabic">عليك توكلنا: ونسألك ياأم ايسوس: لا تتخلى عنا: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >Your praise is precious and pleasant:
            Above the whole world: Your honor increased greatly :Maria- Ti Parthenos</td>
        <td class="arabic">غلى مدحك وحلي: عن سائر بي كوسموس: وقدرك زاد وعلي: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >You are exceedingly higher: Than the
            righteous fathers: And surpassed all measures: Maria- Ti Parthenos</td>
        <td class="arabic">فقت الآباء والأبرار: ني إثمي نيم ني ذيكيئوس: وعليت فوق المقدار: ماريا تى بارثينوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >Everlasting and worshipped: Unique in
            essence and Holy: He chose the daughter of David: Maria-Ti Parthenos</td>
        <td class="arabic">قديم أزلي معبود: واحد بالذات قدوس: اختار ابنة داود: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >You are the Mother of Christ: And to all
            the world: You are truly declared: Maria- Ti Parthenos</td>
        <td class="arabic">كوني لي يا أم ايسوس: ولسائر بي كوسموس: عند الصوت المسموع: ماريا تي بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_19.5" class="north">
        <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >Without you who could have: Witnessed the
            glory of Christ: When He appeared In the world: Maria- Ti Parthenos</td>
        <td class="arabic">لولاك من كان يقدر: يعاين مجد ايسوس: بين العالم منذ ظهر: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english" >Moses desired to see Him: The face of the
            Holy God: He couldn't see a glance of His Light: Maria- Ti Parthenos</td>
        <td class="arabic">موسي قصد أن يري: وجه الرب القدوس: فما طاق من نوره ثقب إبرة: ماريا تى بارثينوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >We ask you to guide us: To please the
            Holy Lord: So He may lead us to the city: Maria- Ti Parthenos</td>
        <td class="arabic">نسألك أن تهدينا: إلي رضا الرب القدوس: ليوصلنا إلي المينا: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >You became a pure sanctuary: For the
            dwelling of my Lord: Jesus And in your womb, you did carry: Maria- Ti Parthenos</td>
        <td class="arabic">هيكلا طاهر صرت: لحلول باشويس ايسوس: وفي أحشاك حملت: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >He drank the milk of your paps: The
            Creator of all lives: You carried Him in your bosom: Maria- Ti Parthenos</td>
        <td class="arabic">ورضع من لبن ثدييك: محيى كل النفوس: وحملتيه بين يديك: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english" >Do not forget, O Mary;: The Christian
            people: Before the Great God: Maria- Ti Parthenos</td>
        <td class="arabic">لا تنسى يا مريم: شعب إن ني إخريستيانوس: بالميلاد الأعظم: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="south">
        <td class="english" >O Mary, help us: Before Jesus Christ: To
            lead us to the harbor: Maria- Ti Parthenos</td>
        <td class="arabic">يا مريم أعينينا: نرجوك قدام إيسوس: أن يوصلنا إلي المينا: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >Hail to the Virgin Mary: Mother of Jesus
            Christ: Through her we gain victory: Maria- Ti Parthenos</td>
        <td class="arabic">وسلامي إلى العذراء: إثماف إن إيسوس بخرستوس: وبها نلنا النصرة: ماريا تى بارثينوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english" >Hail to Saint Mary: Ti Theotokos: The
            pride of the whole world: Maria- Ti Parthenos</td>
        <td class="arabic">وسلامي إلى مريم: تى ثيؤطوكوس: فخر جميع العالم: ماريا تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="north">
        <td class="english" >Peace be to the people;: Who are present
            with us: To be saved and redeemed: Maria- Ti Parthenos</td>
        <td class="arabic">وسلامى إلى الحضار: ومن فى الجمع جلوس: ينجون من حر النار: بصلاة تى بارثينوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="south">
        <td class="english" >I conclude my words with: Praising the
            mother of God: Mary, the gate of Heaven: Maria- Ti Parthenos ${cross}</td>
        <td class="arabic">وأختم قولي يااخوة: بمدح تى ثيؤطوكوس: مريم باب السما: ماريا تى بارثينوس ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
praiseAfterTuesdayTheotokia(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Praise after Tuesday Theotokia (O Mary, I am Your Servant)">
<caption id="caption_table_${tableNumber}" class="caption">Praise after Tuesday Theotokia <br />(O Mary, I am Your Servant)
    <span class="arabic-caption">مديع على ثيوطوكية الثلاثاء<br> (يا مريم أنا عبدك)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >O Mary, I&rsquo;m your servant: Baptized
            in the name of your Son: You gave me a promise: I ask you to fulfill</td>
        <td class="arabic">يا مريم أنا عبدك: موسوم باسم ولدك: وعدتيني بوعدك: وبحقك توفينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >O Mary, by your prayers: And your chaste
            purity: And your virtuous life: Put me in Paradise</td>
        <td class="arabic">يا مريم بحياتك: وحسن طهارتك: أنقليني بصلاتك: إلي موضع يرضينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >O Mary, you are my crown: My honor among
            the crowd: Praising you among my guests: Cools and quenches me</td>
        <td class="arabic">يا مريم تاج رأسي: ياعزى بين ناسى: مدحك بين جلاسي: كزلال ماء يروينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >O Mary, I'm carrying: A heavy burden: My
            trust in you: To help me O, my pride</td>
        <td class="arabic">يا مريم ثقل حملى: من فوق رأسى وعلى: لكن ما خاب أملي: فيك ياعمدة ديني</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >I'm running out of time: Unaware and
            forgetting: While Satan is offering: Many attractive traps</td>
        <td class="arabic">يامريم دهري فات: وأنا تائه في غفلات: وإبليس حسن لي آفات: وحلاها في عيني</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >O Mary, I've seen his deeds: Attractive
            and very sweet: He calls on me to the treat: I've not lost hope yet</td>
        <td class="arabic">يا مريم رأيت شغله: كأنه شهد بعسله: وبلغ في أمله: أنا ما خاب يقينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >O Mary, I am concerned: With this heavy
            load: Do not let me stray: I want to repent and live</td>
        <td class="arabic">يا مريم زاد همي: من فوق رأسي وعلي: ورجعت إلي الندم: هل ندمي يحيينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >O Mary, your mystery revealed: The hidden
            became declared: The judge dwelt in your womb: Let Him forgive me</td>
        <td class="arabic">يا مريم سرك بان: والمخفي صار معلن: وسكن فيك الديان: وعتق المسكين</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >My hope is you, O Mary: Intercede to your
            Holy Son: To grant me forgiveness: And let Jesus strengthen me</td>
        <td class="arabic">يا مريم ظني فيك: شفاعة عند ابنك: طول عمري أرجوك: عند يسوع تقوينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >O Mary, I request of you: To clear me of
            my dues: For you are my medicine: Your prayers cure me</td>
        <td class="arabic">يا مريم طالبوني: بوفاء ثقل ديونى: وأنت طب عيونى: بصلاتك جيرينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >O Mary, you are an ointment: To heal the
            greatest cut: You are always favored: For you enlightened my heart</td>
        <td class="arabic">يامريم أنت مرهم: يبرئ الجرح الأعظم: وجميلك متقدم: حين نورت عيني</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >O Mary, I plead you to keep: Your promise
            and guide me: For the time is at hand: To reach the harbor in peace</td>
        <td class="arabic">يا مريم أوفي الميعاد: جئتك مشمول برشاد: ودنا الوقت وعاد: حتي نصل المينا</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >Abraham, Isaac and Jacob: All desired the
            Lord: His covenant was from you: A mystery now revealed</td>
        <td class="arabic">ابراهيم واسحق ويعقوب: له مشتاق: أخذ منك الميثاق: سر خفي صار مجهر</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >This is my happiness: To rejoice in
            fulfilling my promise: For your praise is an enjoyment: As a medicine which heals</td>
        <td class="arabic">هذا كان من سعدى: أفرح بوفاء وعدى: فإن مدحك عندى: يحييني كدواء شافى</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >The fathers and the brethren: The pious
            and religious: Save them from tribulation: And help my abject self</td>
        <td class="arabic">والآباء والإخوة: أهل الدين والتقوى: خلصيهم من بلوى: وأنا عبدك نجينى</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Our Pope the Patriarch: A good and honest
            shepherd: Grant him a long life: For his honor pleases me ${cross}</td>
        <td class="arabic">والأب بطريركنا: راعي صالح وأمين: أعطيه يارب سنين: دا مقامه يرضيني ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
psaliAdamOn2ndCanticle(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Psali Adam on the 2nd Canticle (My Heart and My Tongue)">
<caption id="caption_table_${tableNumber}" class="caption">Psali Adam on the 2nd Canticle <br />(My Heart and My Tongue)
    <span class="arabic-caption">بصاليم آدم على الهوس الثاني <br> (قلبي ولساني)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >Everyone praises You, And worships You, O
            Holy ...</td>
        <td class="coptic" >Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ ⲛⲁⲕ: ⲟⲩⲟϩ ⲥⲉⲉⲣⲃⲱⲕ ⲛⲁⲕ:
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">كل أحد يسبحك: ويتعبد لك أيها &hellip;</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="north">
        <td class="english" >For You are our God, And our Great
            Savior, O Holy...</td>
        <td class="coptic" >Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ
            ⲡⲓⲛⲓϣϯ: ⲁ̀ⲅⲓⲁ̀ ...</td>
        <td class="arabic">لأنك أنت إلهنا : ومخلصنا العظيم أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="south">
        <td class="english" >The Master Lord , He came and saved us, O
            Holy &hellip;</td>
        <td class="coptic" >Ⲇⲉⲥⲡⲟⲩⲇⲉ ⲕⲩⲣⲓⲟⲛ : ⲁϥⲓ̀ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ :
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">السيد الرب : أتى وخلصنا أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >For the sake of Your true judgments,
            Teach me Your justice, O Holy &hellip;</td>
        <td class="coptic" >Ⲉⲑⲃⲉ ⲛⲉⲕϩⲁⲡ ⲙ̀ⲙⲏⲓ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲉ̀ⲛⲉⲕⲙⲉⲑⲙⲏⲓ:
            ⲁ̀ⲅⲓⲁ̀ ...</td>
        <td class="arabic">من أجل أحكامك الحقيقية: علمنى عدلك أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >Many are Your mercies, Grant us Your
            salvation, O Holy...</td>
        <td class="coptic" >Ⲍⲉⲟϣ ⲡⲉ ⲡⲉⲕⲛⲁⲓ : ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ :
            ⲁ̀ⲅⲓⲁ̀ ...</td>
        <td class="arabic">كثيرة هى رحمتك: تعهدنا بخلاصك أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >I am here before You, I took refuge in
            You, O Holy &hellip;</td>
        <td class="coptic" >Ⲏⲥ ϩⲏⲡⲡⲉ ⲁ̀ⲛⲟⲕ: ⲉⲓⲉ̀ⲫⲱⲧ ϩⲁⲣⲟⲕ: ⲁ̀ⲅⲓⲁ̀...
        </td>
        <td class="arabic">هوذا أنا : التجأت إليك أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="north">
        <td class="english" >Yours is the power and glory, O King of
            glory, O Holy...</td>
        <td class="coptic" >Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ: ⲱ̀ ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲧⲉ
            ⲡ̀ⲱ̀ⲟⲩ: ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">لك القوة والمجد: ياملك المجد أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="north">
        <td class="english" >Jesus is our hope, In our tribulations, O
            Holy ...</td>
        <td class="coptic" >Ⲓⲏⲥⲟⲩⲥ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲩⲯⲓⲥ :
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">يسوع هو رجاؤنا: في شدائدنا أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="south">
        <td class="english" >You are blessed O Son of God, Deliver us
            from temptations, O Holy...</td>
        <td class="coptic" >Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ : ⲛⲁϩⲙⲉⲛ ϧⲉⲛ
            ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ: ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">تباركت ياابن الله: نجنا من التجارب أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >All nations praise You, O Christ the
            King, O Holy &hellip;</td>
        <td class="coptic" >Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲥⲉϩⲱⲥ ⲛⲁⲕ: ⲱ̀ ⲡ̀ⲟⲩⲣⲟ
            Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁ̀ⲅⲓ̀ⲁ...</td>
        <td class="arabic">كل الشعوب تسبحك: أيها الملك المسيح أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Grant us Your peace, Heal our sicknesses, O
            Holy ...</td>
        <td class="coptic" >Ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲙⲁⲧⲁⲗϭⲟ ⲛ̀ⲛⲉⲛϣⲱⲛⲓ :
            ̀ⲁⲅⲓ̀ⲁ ...</td>
        <td class="arabic">أعطينا سلامك : إشف أمراضنا أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >You are the compassionate, And You are
            the Merciful, O Holy...</td>
        <td class="coptic" >Ⲛⲑⲟⲕ ⲟⲩⲣⲉϥϣⲉⲛϩⲏⲧ: ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏⲧ : ⲁ̀ⲅⲓⲁ̀...
        </td>
        <td class="arabic">انت المتحنن: وانت الرحوم أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="north">
        <td class="english" >You are blessed, We praise and bless You,
            O Holy ...</td>
        <td class="coptic" >Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲑⲟⲕ: ⲧⲉⲛϩⲱⲥ ⲛⲁⲕ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ :
            ⲁ̀ⲅⲓⲁ̀ ...</td>
        <td class="arabic">تباركت أنت: نسبحك ونباركك أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="north">
        <td class="english" >Truly great, Is the Just Judge, O Holy...
        </td>
        <td class="coptic" >Ⲟⲩⲛⲓϣϯ ⲛ̀ⲧⲁⲫⲙⲏⲓ: ⲡⲓⲣⲉϥϯϩⲁⲡ ⲙ̀ⲙⲏⲓ:
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">عظيم بالحقيقة : الديان العادل أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="south">
        <td class="english" >Your Name is blessed, O the True Logos
            (Word), O Holy...</td>
        <td class="coptic" >Ⲡⲉⲕⲣⲁⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ : ⲱ ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲁⲫⲙⲏⲓ :
            ⲁ̀ⲅⲓⲁ̀ ...</td>
        <td class="arabic">اسمك مبارك: أيها الكلمة الحقيقي أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >Guard us, O Christ, With Your Goodness, O
            Holy ...</td>
        <td class="coptic" >Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϧⲉⲛ
            ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ : ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">أحرسنا أيها المسيح: بصلاحك أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >Hearken unto the sinners, In their
            tribulations, O Holy...</td>
        <td class="coptic" >Ⲥⲱⲧⲉⲙ ⲉ̀ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ : ϧⲉⲛ ⲛⲟⲩⲁ̀ⲛⲁⲅⲕⲏ:
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">اسمع للخطاة: فى شدائدهم أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english" >My soul and my mind, Lift them up to
            heaven, O Holy...</td>
        <td class="coptic" >Ⲧⲁⲯⲩⲭⲏ ⲛⲉⲙ ⲡⲁⲛⲟⲥ: ⲱ̀ⲗⲟⲩ ⲉ̀ⲟⲩⲣⲁⲛⲟⲥ:
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">نفسي وعقلى : إرفعهما الى السماء أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="north">
        <td class="english" >O Son of our God, Grant us Your
            salvation, O Holy ...</td>
        <td class="coptic" >Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ : ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲥⲱϯ :
            ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">يا ابن الله إلهنا: أعطنا خلاصاً أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="north">
        <td class="english" >God the Merciful, The Long-suffering, O
            Holy...</td>
        <td class="coptic" >Ⲫϯ ⲡⲓⲛⲁⲏⲧ: ⲡⲓⲣⲉϥⲱⲟⲩⲛ̀ϩⲏⲧ : ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">الله الرحوم: طويل الآناة أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us.</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="south">
        <td class="english" >Holy, Holy, Holy, O Son of the Holy, O
            Holy...</td>
        <td class="coptic" >̀̀̀Ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ : ⲡ̀ϣⲏⲣⲓ
            ⲙ̀Ⲫⲏⲉⲑⲟⲩⲁⲃ: ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">قدوس قدوس قدوس: يا ابن القدوس أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="south">
        <td class="english" >The souls of our fathers, Give rest to
            them, O Savior, O Holy...</td>
        <td class="coptic" >Ⲯⲩⲭⲏ ⲛ̀ⲛⲉⲛⲓⲟϯ : ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ ⲱ̀ ⲡⲓⲣⲉϥⲥⲱϯ :
            ⲁ̀ⲅⲓⲁ̀ ...</td>
        <td class="arabic">آباؤنا الراقدون: نيحهم أيها المخلص أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="south">
        <td class="english" >O our Master remember us, In Your
            heavenly kingdom, O Holy...</td>
        <td class="coptic" >Ⲱ ⲡⲉⲛⲛⲏⲃ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ
            ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ : ⲁ̀ⲅⲓⲁ̀...</td>
        <td class="arabic">ياملكنا اذكرنا: فى ملكوتك السماوى أيها...</td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="refrain">
        <td class="english" >My heart and my tongue, praise the
            Trinity. O Holy Trinity, have mercy on us. ${cross}</td>
        <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲛⲉⲙ ⲡⲁⲗⲁⲥ: ϩⲱⲥ ⲉ̀ϯⲧ̀ⲣⲓⲁⲥ: ⲁ̀ⲅⲓⲁ̀
            ⲧ̀ⲣⲓⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ. ${cross}</td>
        <td class="arabic">قلبى ولسانى: يسبحان الثالوث: أيها الثالوث القدوس أرحمنا ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
praiseAfter2ndCanticleLobsh(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise after 2nd Canticle Lobsh (Let Us Sing With David)">
<caption id="caption_table_${tableNumber}" class="caption">Praise after 2nd Canticle Lobsh <br />(Let Us Sing With David)
    <span class="arabic-caption">مديح على الهوس الثاني<br> (فلنرتل مع داود)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >Let us sing with David: And thank the
            graciousness of God: For His merciful and kind: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">فلنرتل مع داود: ونشكر فضل الله: لأنه رحوم وودود: جى بيف ناي شوب شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >Thank the Lord for He is good: Sending
            His rain from heaven above: Upon the righteous and the wicked: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">إشكروا الرب فإنه صالح: مرسل غيثه من أعلى سماه: علي الصالح والطالح: جى بيف ناي شوب
            شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >Thank the God of gods: For He is good and
            long-suffering: To Whom is due glory and honor: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">اشكروا إله الآلهة: فإنه صالح طويل الأناة: له المجد والعظمة: جى بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >Holy, Holy, Holy: One and Only God: Thank
            the Lord of lords: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">قدوس قدوس اكواب: واحد لا رب سواه: اشكروا رب الارباب: جي بيف ناي شوب شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >The earth is filled with His glory: As He
            is glorified in heaven: Maker of all wonders: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">ملأ الأرض بمجده: له المجد في علو سماه: صنع العجائب وحده: جي بيف ناي شوب شا إينيه
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >He created the heavens: And established
            it by His Word: The stars move in their orbits: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">صور علو السموات: واسسها بكلمة فاه: والنجوم فيها سائرات: جي بيف ناي شوب شا إينيه
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >In wisdom, He created the earth: And
            spread it over the waters: He filled it with creatures: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">جبل الأرض بالحكمة: وبسطها فوق وجه المياه: وملأها بالخلقة: جي بيف ناي شوب شا إينيه
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >He created two great stars: To illuminate
            the heavens: The sun and the moon orbiting: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">رتب كوكبين عظيمين: ينيران في جو سماه: الشمس والقمر سائرين: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >He made the sun for the day: In its
            celestial sphere: The moon and the stars for the night: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">جعل الشمس لسلطان النهار: سائرة في الفلك دائرة: والقمر والنجوم لليل: جي بيف ناي
            شوب شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >He poured His wrath on Pharaoh: And
            destroyed all His enemies: And chose Moses and Aaron: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">سكب غضبه علي فرعون: وأهلك كامل أعداه: واختار موسي وهارون: جي بيف ناي شوب شا إينيه
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >He made miracles for His people: In Egypt
            with Mighty hands: And struck them with heavy plagues: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">لشعبه صنع الآيات: في مصر بذراع ما أعلاه: وضربهم بأشنع الضربات: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >The Egyptians and their horsemen: Were
            hit by a Mighty hand: And saved His people from them: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">المصريون وأبكارهم: ضربهم بذراع ما أعلاه: وخلص شعبه من وسطهم: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_11.5" class="north">
        <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >The sea was split in half: And Pharaoh
            was drowned in it: While Israel passed through it: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">شق البحر وفلقه: وطرح فرعون جواه: وجاز اسرائيل وسطه: جي بيف ناي شوب شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >He gave them water from the rock:
            Quenched His people and drank: In the dry wilderness: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">أنبع الماء من الصخرة: وروي شعبه وسقاه: في البرية القفرة: جي بيف ناي شوب شا إينيه
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >He sent them to Canaan: And killed Sihon
            of the Amorites: And Og, king of Bashan: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">أوصلهم بلاد كنعان: وقتل سيحون وفناه: وعوج ملك باشان: جي بيف ناي شوب شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >He gave their lands to Israel: His
            servant and His child: He remembered our humble souls: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">أعطي أرضهم ميراثا: لإسرائيل عبده وفتاه: وذكرنا في تواضعنا: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >He saved us from our enemies: For You
            comfort everyone: Let us profess to the Lord of heaven: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">خلصنا من الأعداء المحيطين: لكل حي عزاء: اعترفوا لإله السماء: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >Unto Him is due all honor: And worship at
            His feet: Thank Him for His graciousness: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">يجب له الإكرام: والسجود عند قدماه: أشكروا فضله على الدوام: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >Let us proclaim the Name of Christ: And
            thank Him for His grace: Praise Him and exalt Him: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">أعترفوا لأسم المسيح: واشكروا فضله ورضاه: وزيدوه من التسابيح: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >He saved us from Satan: And the rational
            Pharaoh was disgrace: And we crossed the water of baptism: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">خلصنا من إبليس: فرعون العقلي خزاه: وأجازنا بحر التقديس: جي بيف ناي شوب شا إينيه
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >We're baptized in holy water,: Freed from
            the bondage of tyranny: And assure us of the promised land: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">أدخلنا بحر العماد: وعتقنا من رق الطغيان: ووعدنا بأرض الميعاد: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english" >Christ split the sea of Hades: And threw
            the devil in it: And lifted us from it in great mystery: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">شق المسيح بحر الجحيم: ورمي الشيطان جواه: وأخرجنا منه بسر عظيم: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >He resurrected us with His people: To His
            heights and happiness: And called us 'beloved ': Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">وأصعدنا مع شعبه: إلي محله وهناه: ودعانا أحبابه: جي بيف ناي شوب شا إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >Instead of manna and quail: He gave us
            His body for food: And the gorgeous Church: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">عوض المن والسلوى: اعطانا جسده غذاء: وأعطانا البيعة الحلوة: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >He sprung water from the rock: And we
            drank His blood: And quenched our weary souls: Je pef-nay Shop Sha-eneh</td>
        <td class="arabic">أنبع الماء من الصخرة: وأعطانا دمه شربناه: وأروى نفوسنا القفرة: جي بيف ناي شوب شا
            إينيه</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english" >We reached the promised land: And
            received the new promise: Which is the Kingdom of heaven: Je pef-nay Shop Sha-eneh ${cross}</td>
        <td class="arabic">وأوصلنا ارض الميعاد: والوعد الجديد نلناه: وهو ملكوت السموات: جي بيف ناي شوب شا
            إينيه ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
watosPsaliOnTheWednesdayTheotokia(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Watos Psali on the Wednesday Theotokia">
    
    <caption id="caption_table_${tableNumber}" class="caption">Watos Psali on the Wednesday Theotokia
        <span class="coptic-caption">Ⲁⲓⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ Ⲡⲁⲛⲟⲩϯ</span>
        <span class="arabic-caption">ابصالية واطس على تذاكية يوم الأربعاء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I hope in You O my God, forgive me O my Lord Jesus, through the intercessions of the Theotokos, Mary the beautiful dove.</td>
            <td class="coptic">Ⲁⲓⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ Ⲡⲁⲛⲟⲩϯ: ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲱ̀ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲁ̀ ⲛ̀Ϯⲙⲁⲥⲛⲟⲩϯ: Ⲙⲁⲣⲓⲁ̀ ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
            <td class="arabic">توكلت عليك يا إلهي · اغفر لي يا ربي يسوع · بشفاعة والدة الإله · مريم الحمامة الحسنة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Everyone on earth, glorify the pure one, for all the heavenly ranks, speak of her blessedness.</td>
            <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲩϯⲱ̀ⲟⲩ ⲛ̀ϯⲕⲁⲑⲁⲣⲟⲥ: ϫⲉ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲥⲉϫⲱ ⲛ̀ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
            <td class="arabic">كل أحد على الأرض · يمجدون النقية · وجميع الطغمات السمائية · ينشدون طوبانيتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For you are the Mother of God, and the eastern gate, and the second tabernacle, the Mother of Christ Adonai.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟ ⲡⲉ ϯⲙⲁⲥⲛⲟⲩϯ: ⲛⲉⲙ ϯⲡⲩⲗⲏ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲛϣⲁⲓ: ⲛⲉⲙ ϯⲥ̀ⲕⲩⲛⲏ ⲙ̀ⲙⲁϩⲥ̀ⲛⲁⲩϯ: ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲁ̀ⲇⲱⲛⲁⲓ.</td>
            <td class="arabic">لأنك أنت هي والدة الإله · وباب المشرق · والقبة الثانية · أم المسيح أدوناي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David taught us saying, "They spoke of you, with honors O city of God," whom Christ shone to us from.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁϥⲧⲁⲙⲟⲛ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲁⲩⲥⲁϫⲓ ⲛ̀ϩⲁⲛⲧⲁⲓⲟ̀ ⲉⲑⲃⲏϯ: ⲱ̀ ϯⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ⲑⲏⲉ̀ⲧⲁ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ϣⲁⲓ ⲛⲁⲛ ⲛ̀ϧⲏϯ.</td>
            <td class="arabic">داود أعلمنا هكذا قائلاً · أنهم تكلموا من أجلك بكرامات · يا مدينة الله · الذي منكِ أشرق لنا المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Through the Virgin Mary, Adam Eve and the righteous, and our forefathers, were returned to Paradise.</td>
            <td class="coptic">Ⲉⲑⲃⲉ Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁⲩⲧⲁⲥⲑⲟ ⲉ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: Ⲁ̀ⲇⲁⲙ ⲛⲉⲙ Ⲉⲩⲁ̀ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁⲣⲭⲉⲟⲥ.</td>
            <td class="arabic">من قبل مريم العذراء · رجع إلى الفردوس · آدم وحواء والصديقون · وآباؤهم الأولون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">The seven ranks of heaven, glorify you O Queen, for the Father looked down from heaven, and found no one like you.</td>
            <td class="coptic">Ϣⲁϣϥ ⲛ̀ⲧⲁⲅⲙⲁ ⲉⲧϧⲉⲛ ⲧ̀ⲫⲉ: ⲉⲩϯⲱ̀ⲟⲩ ⲛⲉ ⲱ̀ ϯⲟⲩⲣⲟ: ϫⲉ ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟ.</td>
            <td class="arabic">السبع الطغمات السمائية · يمجدونك أيتها الملكة · لأن الأب قد تطلع من السماء · فلم يجد من يشبهك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold she was truly exalted, above the heavens and the leaders, for all the kings of the earth, walk in her light,</td>
            <td class="coptic">Ⲏ̀ⲡⲡⲉ ⲁ̀ⲗⲏⲑⲱⲥ ⲁ̀ⲣⲉϭⲓⲥⲓ: ⲉ̀ϩⲟⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲓⲁⲣⲭⲏ: ϫⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲥⲉⲙⲟϣⲓ ϧⲉⲛ ⲡⲉⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">هوذا بالحقيقة ارتفعتِ · أكثر من السموات والرؤساء · لأن جميع ملوك الأرض · يمشون في ضياءكِ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is the light cloud, that carried the King of glory, for the Father made her, and the Holy Spirit dwelt in her.</td>
            <td class="coptic">Ⲑⲁⲓ ⲧⲉ ϯϭⲏⲡⲓ ⲉⲧⲁ̀ⲥⲓⲱ̀ⲟⲩ: ⲑⲏⲉ̀ⲧⲁⲥϥⲁⲓ ϧⲁ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ϫⲉ ⲁ̀ Ⲫ̀ⲓⲱⲧ ⲉⲣⲧⲉⲭⲛⲓⲧⲏⲥ ⲉ̀ⲣⲟ: ⲁ̀ Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲓ̀ ⲉ̀ϫⲱ.</td>
            <td class="arabic">هذه هي السحابة الخفيفة · التي حملتْ ملك المجد · لأن الآب صنع أباكِ · والروح القدس حل فيك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus the Son of the Most High, loved your virginity, and the power of the Highest, overshadowed you O Mary.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲫⲏⲉⲧϭⲟⲥⲓ: ⲁϥⲙⲉⲛⲣⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ̀: ⲟⲩⲟϩ ⲟⲩϫⲟⲙ ⲛ̀ⲧⲉ ⲫⲏⲉⲧϭⲟⲥⲓ: ⲉⲑⲛⲁⲉⲣϧⲏⲓⲩⲓ ⲉ̀ⲣⲟ Ⲙⲁⲣⲓⲁ̀.</td>
            <td class="arabic">يسوع ابن العلي · أحبَّ بتوليتك · وقوة العلي · ظللتكِ يا مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">For you are faithful, [Gabriel] was sent to you from heaven, saying "Hail O full of grace, the Lord is with you O pure."</td>
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ⲛ̀ⲑⲟ ⲡⲉ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲁϥⲟⲩⲱⲣⲡ ϣⲁⲣⲟ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ: ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲱ̀ ϯⲕⲁⲑⲁⲣⲟⲥ Ⲡ̀ϭⲟⲓⲥ ⲛⲉⲙⲉ.</td>
            <td class="arabic">لأنكِ أنتِ هي المؤتمنة · قد أرسل إليكِ من السماء قائلاً · السلام لك يا مملوءة نعمة · أيتها النقية الرب معك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">He also spoke to her, saying in a joyful voice, "Behold you will conceive, and give birth to Immanuel."</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲛ̀ⲑⲟϥ ⲛⲉⲙⲁⲥ ⲁϥⲥⲁϫⲓ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲡ̀ⲑⲉⲗⲏⲗ: ϫⲉ ϩⲏⲡⲡⲉ ⲧⲉⲣⲁⲉⲣⲃⲟⲕⲓ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">وأيضاً هو قد تكلم معها · بصوت الفرح قائلاً · هوذا تحبلين · وتلدين عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">O Mary the true Bride, Mary the salvation of our race, Mary the true ladder, that Jacob saw.</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁ̀ ϯϣⲉⲗⲉⲧ ⲙ̀ⲙⲏⲓ: Ⲙⲁⲣⲓⲁ̀ ⲡ̀ⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ϯⲙⲟⲩⲕⲓ ⲙ̀ⲙⲏⲓ: ⲑⲏⲉ̀ⲧⲁ Ⲓⲁⲕⲱⲃ ⲛⲁⲩ ⲉ̀ⲣⲟⲥ.</td>
            <td class="arabic">يا مريم العروسة الحقيقية · مريم هي خلاص جنسنا · مريم هي السلم الحقيقي · الذي رآه يعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">You are the paradise, the rational one to Christ, and the root of the righteous, the Mother of God the Logos.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲡⲉ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ ⲑ̀ⲛⲟⲩⲛⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">أنت في الفردوس · الناطق الذي للمسيح · وأصل الصديقين · وأم الله الكلمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Foremost the Orthodox, glorify you with praises, saying, "Hail to the throne of Christ, our Master the Savior of the world."</td>
            <td class="coptic">Ⲝⲁⲣⲓⲧⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲉⲩϯⲱ̀ⲟⲩ ⲛⲉ ϧⲉⲛ ϩⲁⲛϩⲩⲙⲛⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲡⲉⲛⲛⲏⲃ Ⲡ̀ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">بالأكثر الأرثوذكسيون · يمجدون لكِ بتسابيح قائلين · السلام لكرسي المسيح · سيدنا مخلص العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">A virginal feast, and spiritual pangs, a wondrous paradox, according to the prophetic voices.</td>
            <td class="coptic">Ⲟⲩϣⲁⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ: ⲛⲉⲙ ⲟⲩⲛⲁⲕϩⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ⲟⲩϣ̀ⲫⲏⲣⲓ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ: ⲕⲁⲧⲁ ⲛⲓⲥ̀ⲙⲏ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">عيد بتولي · وطلق روحاني · وأعجوبة معجزة · كالأصوات النبوية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">That is the blessed Birth, from the Virgin Mary, the faithful and wise girl, the pure and golden censer.</td>
            <td class="coptic">Ⲡⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲁ̀ⲗⲟⲩ ⲛ̀ⲥⲁⲃⲏ ⲑⲏⲉ̀ⲧⲉⲛϩⲟⲧ: ϯϣⲟⲩⲣⲏ ⲛ̀ⲛⲟⲩⲃ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.</td>
            <td class="arabic">هو الميلاد المبارك · من مريم العذارء · الصبية المؤتمنة · والمجمرة الذهب النقية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Be glad O true Bride, and the holy city of Zion, Mary the true Queen, the Mother of the King of the ages.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ϯϣⲉⲗⲉⲧ ⲙ̀ⲙⲏⲓ: ⲱ̀ ϯⲡⲟⲗⲓⲥ ⲙ̀ⲙⲏⲓ Ⲥⲓⲱⲛ: Ⲙⲁⲣⲓⲁ̀ ϯⲟⲩⲣⲟ ⲙ̀ⲙⲏⲓ: ⲑ̀ⲙⲁⲩ ⲙ̀ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
            <td class="arabic">افرحي أيتها العروس الحقيقية · والمدينة المقدسة صهيون · مريم الملكة الحقانية · أم ملك الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Hear us in our travails, deliver us from our enemies, O Jesus Christ the only-begotten, and disperse their counsel.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲩⲯⲓⲥ: ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲛϫⲁϫⲓ: ⲱ̀ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲟⲩⲟϩ ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲟⲩⲥⲟϭⲛⲓ.</td>
            <td class="arabic">إسمعنا في ضوائقنا · ونجنا من أعدائنا · أيها المسيح الوحيد · وبدد مشورتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">You are exalted above the cherubim, and the powers and thrones, and honored more than the seraphim, O Mary the Mother of Christ.</td>
            <td class="coptic">Ⲧⲉϭⲟⲥⲓ ⲉ̀ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲛⲉⲙ ⲛⲓϫⲟⲙ ⲛⲉⲙ ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ: ⲧⲉⲧⲁⲓⲏ̀ⲟⲩⲧ ⲉ̀ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ⲱ̀ Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">ارتفعتِ اكثر من الكاروبيم · والقوات والكراسي · وتكرمتِ اكثر من السارافيم · يا مريم أم المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Behold Ezekiel has said, "I saw a door in the East, sealed with a wondrous seal," you are the door and the sanctuary.</td>
            <td class="coptic">Ⲩ̀ⲡⲡⲉ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲁϥⲥⲁϫⲓ: ϫⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲡⲩⲗⲏ ⲛ̀ⲥⲁ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ⲉⲥⲧⲟⲃ ϧⲉⲛ ⲟⲩⲧⲉⲃⲥ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲛ̀ⲑⲟ ⲡⲉ ϯⲡⲩⲗⲏ ⲛⲉⲙ ⲡⲓⲉⲣⲫⲉⲓ.</td>
            <td class="arabic">هوذا حزقيال قد قال · أني رأيت باباً ناحية المشرق · مختوما بختم عجيب · فأنت هي الباب والهيكل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God who rests, among His saints, you gave birth to Him, for He is God and we saw Him.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲫⲏⲉⲑⲙⲱⲧⲉⲛ ⲙ̀ⲙⲟϥ: ϧⲉⲛ ⲛⲏⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁϥ: ⲁϥϣⲁⲓ ⲛ̀ϧⲏϯ ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲛⲟⲩϯ ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">الله المستريح · في قديسيه · قد ولدتيه مشرقاً منكِ · لأنه إله ورأيناه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Hail to the sanctuary of God, the Mother of Christ the Messiah, the uncontainable Son of God, the One of the Trinity.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲉⲣⲫⲉⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲙⲁⲥⲓⲁⲥ: ⲡⲓⲁ̀ⲭⲱⲣⲏⲧⲟⲥ ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲧ̀ⲣⲓⲁⲥ.</td>
            <td class="arabic">السلام لهيكل الله · أم المسيح ماسيا · الغير المحوي ابن الله · الواحد من الثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Repose all the souls in Paradise, for the sake of the Virgin, Mary the Mother of the King of glory, Jesus Christ the Logos.</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲙⲁⲉⲙⲧⲟⲛ ⲛⲱⲟⲩ: ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲉⲑⲃⲉ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲓⲗⲟⲅⲟⲥ.</td>
            <td class="arabic">الأنفس جميعاً نيحهم · في الفردوس من أجل العذراء · مريم أم ملك المجد · يسوع المسيح الكلمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O Virgin who gave birth to Him, as God true and good, save Your servant Nicodemus, with the rest of the Christians.</td>
            <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϩⲱⲥ Ⲛⲟⲩϯ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲃⲱⲕ Ⲛⲓⲕⲟⲩⲇⲏⲙⲟⲥ: ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ.</td>
            <td class="arabic">يا أيها الذي ولدته العذراء · إذ هو إله حقيقي صالح · خلص عبدك نيقوديموس · مع باقي المسيحيين.</td>
        </tr>
        </tbody>
</table>`;
 return html;
}
,
praiseAfterWednesdayTheotokia(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Praise after Wednesday Theotokia (All the Heavenly Hosts)">
<caption id="caption_table_${tableNumber}" class="caption">Praise on the Wednesday Theotokia <br />(All the Heavenly Hosts)
    <span class="arabic-caption">مديح على ثيوطوكية الأربعاء<br> (كل الطغمات السمائية)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >All the heavenly hosts: And the angelic
            soldiers: Cry out in beautiful voices: Blessed are you, O Virgin and bride</td>
        <td class="arabic">كل الطغمات السمائية: وعساكر ني أنجيلوس: يصيحون بأصوات شجية: طوباك يابكر وعروس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >In the tunes of the heavens: Everyone
            says let us praise: And shouts in wonderful languages: Blessed are you, O Virgin and bride</td>
        <td class="arabic">بالنغمات العلوية: الكل يقولون مارين هوس: ويصيحون بلغات بهية: طوباك يابكر عروس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >The Father looked from heaven and did not
            find: Your purity in all ranks: He sent His Son to take flesh from you: Blessed are you, O Virgin and bride</td>
        <td class="arabic">تطلع الآب من سماه ولم يجد: من يشبه طهرك في كل طقوس: ارسل ابنه تجسد منك: طوباك يا
            بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >Gabriel, the archangel: Came to you with glad tidings: of pleasure and acceptance: Blessed are you, O Virgin and bride</td>
        <td class="arabic">جاء بالبُشرى مرسول: غبريال بي أرشي أنجيلوس: بشَّرِك برضى وقبول: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >He dwelt with His Holy Spirit in you: And
            the Lord Jesus appeared from you: You became Mother to your Creator: Blessed are you, O Virgin and bride
        </td>
        <td class="arabic">حل بروح قدسه في احشاك: وظهر منك باشويس إيسوس: وصرت أماً لمن أنشاك: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >The salvation of Adam and his race: And
            his return to Paradise: Has appeared from an ever Virgin: Blessed are you, O Virgin and bride</td>
        <td class="arabic">خلاص آدم وبنيه: ورجوعه إلى الفردوس: ظهر من بكر بتول: طوباك يابكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >You were called, O beautiful flower: "The
            pure and golden censer: And the holy and blessed flower": Blessed are you, O Virgin and bride</td>
        <td class="arabic">دعيت يازهرة الأطياب: تى شوري إن نوب إنكا ثاروس: نيم تي إهريري إثؤاب: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >The Lord of glory chose your beauty: As
            the words of the Psalmist: The Lord of lords became your Son: Blessed are you, O Virgin and bride</td>
        <td class="arabic">رب المجد اختار حسنك: كاتا إبساجي إم بي هيمنوذوس: إله الآلهة صار إبنك: طوباك يا
            بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >Ezekiel saw in his vision: A closed guarded door,
             in the East: The High King entered through it: Blessed are you, O Virgin and bride</td>
        <td class="arabic">رأى فى رؤياه حزقيال: في المشرق باباً مقفولا محروس: وقد دخله الملك المتعال: طوباك
            يا بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >A ladder seen by Jacob: Surrounded by
            angelic hosts: Worshipping the revered King: Blessed are you, O Virgin and bride</td>
        <td class="arabic">سلم رآه الأب يعقوب: وحوله طغمات ني أنجيلوس: سجود للملك المرهوب: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >Moses witnessed and prophesied: And
            likened you to a planted vineyard: A green bush aflame with fire: Blessed are you, O Virgin and bride
        </td>
        <td class="arabic">شهد موسي وتنبا اجهار: وشبهك بكرم مغروس: عوسج أخضر في قلبه نار: طوباك يابكر وعروس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Zephaniah proclaimed of you: A
            prophesy about the birth of Jesus: "He will come down as rain and dew": Blessed are you, O Virgin and bride</td>
        <td class="arabic">صوفونيوس عنك خبر: بشهادة عن ميلاد إيسوس: قال ينزل كندي ومطر: طوباك يا بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_11.5" class="north">
        <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >Daniel said in his vision: "I have seen a
            great throne: On it sat the great High King.": Blessed are you, O Virgin and bride</td>
        <td class="arabic">دانيال في رؤياه قال: آنوك آي ناف إأوإثرونوس: وعليه جلس الملك المتعال: طوباك يا
            بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >Moses asked to peak and see: As you saw O
            Mother of the Holy One: And could not bear a glimpse of His light;: Blessed are you, O Virgin and bride</td>
        <td class="arabic">طلب موسي ينظر نظرة: كما رأيت ياام القدوس: فما طاق من نوره ثقب إبرة: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >He came from you and fulfilled the
            promise: To Adam, concerning entering Paradise: And freed his offspring from all bonds: Blessed are you, O Virgin and bride</td>
        <td class="arabic">ظهر منك وأوفي الميثاق: لآدم بدخوله إلي الفردوس: وعتق نسله من كل وثاق: طوباك يا
            بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Precious and sweet is your praise: As the
            sweet fruits of Paradise: Tasting of it will not grow old: Blessed are you, O Virgin and bride</td>
        <td class="arabic">علا مدحك وحلا نظمه: كحلاوة أثمار الفردوس: من ذاقه لا يسل طعمه: طوباك يا بكر وعروس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >Your praise is precious and sweet: Even above all
             angelic ranks: For you held the Creater in your lap: Blessed are you, O Virgin and bride</td>
        <td class="arabic">علا قدرك وحلا ذكرك: وزاد رفعة عن كل الطقوس: بجلوس الخالق في حجرك: طوباك يابكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >If one praises you at all times: He will
            obtain his desires: By receiving the Holy Lord's pleasure: Blessed are you, O Virgin and bride</td>
        <td class="arabic">فاز ببلوغ وآماله: وتعشم برضي الرب القدوس: من يجعل مدحك رأس ماله: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >All my life's desire: Is to praise you, the virgin: You will be my help when I depart: Blessed are you, O Virgin and bride</td>
        <td class="arabic">قصدي طول عمري: وحياتي أكون مادح تي بارثينوس: لتكون عوني عند مماتي: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >Who can explain the honor of Mary: Or
            liken her to the moon and the sun: She is even greater than the throne: Blessed are you, O Virgin and bride</td>
        <td class="arabic">كرامة مريم من يقدر: يشبهها بقمر وشموس: إن قلنا الكرسي فهي أفخر: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >You bore the Lord of glory: And exceeded all ranks: You ascended above all the hosts: Blessed are you, O Virgin and bride</td>
        <td class="arabic">رب المجد حملت: وقد فقت عن كل الطقوس: وزدت قدراً وعلوت: طوباك يا بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english" >Without you, O Mother of Light: Who could
            have seen Jesus&rsquo; glory: Revealed so clear to the world: Blessed are you, O Virgin and bride</td>
        <td class="arabic">لولاك ياأم النور: من كان يعاين مجد إيسوس: ويراه بين العالم مشهور: طوباك يابكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >Who received what you were granted, O Mary: Or who resembles you, O Theotokos: Which tongue can actually explain: Blessed are you, O Virgin and bride</td>
        <td class="arabic">من نال مانلت يامريم: ومن يشبهك يا أم القدوس: وأي لسان يقدر يتكلم: طوباك يا بكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >We ask of you, O first-born Virgin: Remember me before my Lord Jesus: So He may forgive my sins: Blessed are you, O Virgin and bride</td>
        <td class="arabic">نسألك يابكر وبتول: آرى باميفئى أو باشويس إيسوس: هينا إن تين كو إيفول: طوباك يابكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >Your servant pleads with you: Do not forget me, O Mother of Christ: For I ask for your protection: Blessed are you, O Virgin and bride</td>
        <td class="arabic">هوذا عبدك يترجاك: فلا تنسيني يا أم بي إخرستوس: لأني متوسل بحماك: طوباك يابكر
            وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english" >The honored father, our shepherd: Abba
            Tawadros Pi-archi Erevs: With his prayers guide us: Blessed are you, O Virgin and bride</td>
        <td class="arabic">والاب الفاضل راعينا: أنبا (تواضروس) بي ارشي إيريفس: بقبول صلواته تهدينا: طوباك
            يابكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="south">
        <td class="english" >And his partners in the service: Our holy
            fathers the bishops: Help them O pride of the human race: Blessed are you, O Virgin and bride</td>
        <td class="arabic">وشركاؤه في الخدمة الرسولية: نين يوتي إثؤاب إن إيبيسكوبوس: أجيريهم يازين البشرية:
            طوباك يا بكر وعروس</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >Do not forget all our priests: And all the Christians: And all the ranks of our Church: Blessed are you, O Virgin and bride</td>
        <td class="arabic">لا تنسي سائر كهنتنا: وجميع إن ني إخريستيانوس: وكل رتب بيعتنا: طوباك يا بكر وعروس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english" >O pride of the human race: The pearl of all the hosts and ranks: Help the Christian people: Blessed are you, O Virgin and bride</td>
        <td class="arabic">يازين كل البشرية: زينة الرتب والطقوس: أجيري شعب المعمودية: طوباك يا بكر وعروس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="north">
        <td class="english" >And the Orthodox believers: The leaders and servents alike: All the seven ranks of the Church: Blessed are you, O Virgin and bride ${cross}</td>
        <td class="arabic">وأبناء البيعة الأرثوذكسية: الرئيس منهم والمرءوس: شاشف إن طغما إن إكليسيا: طوباك
            يا بكر وعروس ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
praiseAfterThursdayTheotokia(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;" title="Praise After Thursday Theotokia (The Burning Bush)">
<caption id="caption_table_${tableNumber}" class="caption">Praise on the Thursday Theotokia <br />(The Burning Bush)
    <span class="arabic-caption">مديح على ثيوطوكية الخميس<br> (العليقة)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_1" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="north">
        <td class="english" >I open my mouth and proclaim: And utter
            hidden mysteries: Praising the mother of Light Mary: Blessed is the pride of the human race</td>
        <td class="arabic">انا أفتح فمى واتكلم: وانطق بأسرار خفية: بكرامة ام النور مريم: طوباك يازين البشرية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Because of your Son we became: Freed from
            the bondage: And from Satan&rsquo;s bonds we are saved: Blessed is the pride of the human race
        </td>
        <td class="arabic">بابنك يازين العالم صرنا: احرارا بعد العبودية: ومن أسر إبليس خلصنا: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >The sayings about you were fulfilled: And
            all the prophecies and proverbs: About the birth of Emmanuel: Blessed is the pride of the human
            race</td>
        <td class="arabic">تمت عنك كل الاقوال: والشهادات النبوية: إثفى إبجين ميسى إن إممانوئيل: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="north">
        <td class="english" >Gabriel came with good tidings: About the
            dwelling of the Logos: A virgin carrying her Lord: And her virginity is sealed</td>
        <td class="arabic">جبرائيل بالبشرى ناداها: بحلول الكلمة الازلي: بكر بتول حملت مولاها: وهى عذراء
            ببكورية</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >His Holy Spirit came upon you: And took
            from you the humanity: A true human you did carry: Blessed is the pride of the human race</td>
        <td class="arabic">حل بروح قدسه فى احشاك: وأخذ منك الناسوتية: بشري كامل حملته يداك: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >He saved Adam and his children: And cured
            him from the serpent's venom: And returned his honor to him: Blessed is the pride of the human
            race</td>
        <td class="arabic">خلص آدم وبنيه: وابرأه من سم الحية: والى مرتبته قد رده: طوباك يازين البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="south">
        <td class="english" >David your father spoke of you: And
            prophesied about the birth: &ldquo;The God of gods became your Son&rdquo;: Blessed is the pride
            of the human race</td>
        <td class="arabic">داود أبوك قال عنك: ونطق بشهادات نبوية: إله الآلهة صار ابنك: طوباك يازين البشرية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="south">
        <td class="english" >You became a Mother of your Creator: For
            the salvation of mankind: He came and dwelt in your womb: And the seal was shut in purity</td>
        <td class="arabic">دعيت أماً لمن أنشاك: لأجل خلاص البشرية: اتى وسكن فى أحشاك: والخاتم مصان ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل: جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >The Lord of Glory chose your beauty: And
            adorned you with Divinity: And took from you humanity: Blessed is the pride of the human race
        </td>
        <td class="arabic">رب المجد اختار حسنك: وزانك باللاهوتية: واخذ طبع الناسوت منك: طوباك يازين البشرية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="north">
        <td class="english" >A plant sprouting without seed: He
            appeared without watering: In a pure and chosen field: Blessed is the pride of the human race
        </td>
        <td class="arabic">زرع اثمر من غير بذار: ظهر من غير ماء وسقية: فى حقل نقى طاهر مختار: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="north">
        <td class="english" >The righteous fathers did call you: A
            second bodily heaven: The Almighty Lord dwelt in you: Blessed is the pride of the human race
        </td>
        <td class="arabic">سماك الآباء الابرار: سماء ثانية جسدانية: سكن فيك المولى الجبار: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >Ezekiel witnessed and saw: A sealed door
            in the East: Her Lord entered and left through it: And the door was shut in purity</td>
        <td class="arabic">شهد حزقيال ورآها: بابا مختوما فى الشرقية: دخل فيه وخرج مولاها: والباب مصان
            ببكورية</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="south">
        <td class="english" >Zephaniah proclaimed saying: About the
            economy of the Divine: &ldquo;He will come as rain without cloud&rdquo;: Blessed is the pride of
            the human race</td>
        <td class="arabic">صوفونيوس شرح بكلام: عن تدبير اللاهوتية: قال ينزل كمطر بغير غمام: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="south">
        <td class="english" >Daniel has seen the throne: Surrounded by
            luminous hosts: Upon it sat the Holy King: Blessed is the pride of the human race</td>
        <td class="arabic">دانيال عاين بى إثرونوس: وحوله طغمات نورانية: وعليه جلس الملك القدوس: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="south">
        <td class="english" >He came down bowing the heavens: And took
            the flesh of the humans: While still in His Father's bosom: Blessed is the pride of the human
            race</td>
        <td class="arabic">طأطأ سماء السموات ونزل: واتحد بالناسوتية: وهو فى حضن ابيه لم يزل: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >We saw wonders and miracles: In the books
            of the Christian Church: A pure virgin carried her Lord: And her virginity is sealed</td>
        <td class="arabic">ظهرت عجائب ورأيناها: فى كتب البيعة المسيحية: بكر بتول حملت مولاها: وهي عذراء
            ببكورية</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="north">
        <td class="english" >You are higher than all ranks: And above
            the heavenly hosts: And the ranks of the angels: Blessed is the pride of the human race</td>
        <td class="arabic">على قدرك عن كل الطقوس: وعن الطغمات العلوية: وعساكر نى أنجيلوس: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="north">
        <td class="english" >The people&rsquo;s sins He forgives: Of
            every good gift He gives: He took our form and loved it: Blessed is the pride of the human race
        </td>
        <td class="arabic">غافر كل خطايا شعبه: ومانحهم كل عطية: تشبه بالعبد وأحبه: طوباك يازين البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_33" class="north">
        <td class="english" >You are above all the world: And the
            ranks and the soldiers: And the righteous and just: Blessed is the pride of the human race</td>
        <td class="arabic">فقت عن سائر بى كوسموس: نيم ني طغما نيم نيستراتيا: نيم نى إثمى نيم نى ذيكيئوس:
            طوباك يازين البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_34" class="north">
        <td class="english" >Say O people 'She is blessed': The Lady
            of us all Mary: Before Whom you gave birth to: Through the prayers and intercessions</td>
        <td class="arabic">قولوا ياأخوة طوباها: أوتين شويس إنيب ماريا: أمام من حملت فى أحشاها: هيتين نى طفه
            نيم نى إبريسفيا</td>
    </tr>
    <tr id="table_${tableNumber}_row_36" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_37" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_38" class="south">
        <td class="english" >You carried the Lord of glory: The
            Designer of the humanity: You resemble the Father&rsquo;s throne: Blessed is the pride of the
            human race</td>
        <td class="arabic">رب المجد قد حملت: مُصَّوِر كل البشرية: وبكرسي الآب تشبهت: طوباك يازين البشرية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_39" class="south">
        <td class="english" >He took from you the humanity: Uniting it
            with the Divinity: You held the One of the Trinity: Blessed is the pride of the human race</td>
        <td class="arabic">أخذ منك طبع الناسوت: متحداً باللاهوتية: وحملت الواحد من الثالوث: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_40" class="south">
        <td class="english" >Who obtained what you received: In all
            the generations: Among the nations and people: Blessed is the pride of the human race</td>
        <td class="arabic">من نال مانلت يامريم: فى سائر كل البشرية: وكل الشعوب وكل الامم: طوباك يازين
            البشرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_41" class="south">
        <td class="english" >We declare &ldquo;She is blessed&rdquo;:
            And also praise day and night: Him Who chose her beauty: For the dwelling of the Word</td>
        <td class="arabic">نحن الكل نقول طوباك: ونرتل باكر وعشية: لمن اختار حسن بهاك: لحلول الكلمة الأزلى
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_43" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_44" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_45" class="north">
        <td class="english" >Guide me to repent, O, Mary: And wake
            from the slumber of days: Before time overtakes me: To rise from my laziness</td>
        <td class="arabic">هيئي لى التوبة يامريم: قبل ان يدنو الوقت عليَّ: واستيقظ من غفلة الأيام: وانهض من
            بعد تواني</td>
    </tr>
    <tr id="table_${tableNumber}_row_46" class="north">
        <td class="english" >And prepare myself before traveling: To
            work during the journey: Help me please, in this vain earth: Through the prayers of our Lady
        </td>
        <td class="arabic">واهيئ الزاد قبل السفر: واجهز للحمل مطيةّ: ساعدينى فى أرض قفرة: بصلاة سيدة البشرية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_47" class="north">
        <td class="english" >For I am lame and have little effort: And
            my burden is heavy: The Time has come to leave this world: And I have no refuge but Mary</td>
        <td class="arabic">لأنى عاجز وجهدى قليل: وحملى مشطوط عليّ: وحان وقت السفر والرحيل: وليس لي ملجأ الا
            هي</td>
    </tr>
    <tr id="table_${tableNumber}_row_48" class="north">
        <td class="english" >We ask her and none other: Every day and
            every night: We hang on the tip of her dress: And her luminous vesture garments</td>
        <td class="arabic">يامن لانترجى سواها: ونسألها باكر وعشية: ونتعلق فى هدب رداها: وملابسها النورانية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_49" class="south">
        <td class="english" >I greet the Mother of the Light: Mary,
            the help of all Christians: Of whom salvation was revealed: To all the people of Baptism</td>
        <td class="arabic">واقرئ سلامى لأم النور: عون كل المسيحية: التى منها الخلاص مشهور: لجميع شعب
            المعمودية</td>
    </tr>
    <tr id="table_${tableNumber}_row_50" class="south">
        <td class="english" >To protect us from all evil: And the
            plagues of this time: And help us all in every aspect: We, the Christian nations</td>
        <td class="arabic">تنجينا من الشرور: ومن الآفات الزمنية: وتساعدنا فى كل الامور: وكل الشعوب المسيحية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_51" class="south">
        <td class="english" >Everyone says &ldquo;She is
            blessed&rdquo;: Morning and vespers we ask her: Before Him whom she held in her womb: To
            intercede for everyone</td>
        <td class="arabic">يقول الكل طوباها: ويسألونها باكر وعشية: قدام من حملت فى أحشاها: تشفع فينا الكل
            سوية</td>
    </tr>
    <tr id="table_${tableNumber}_row_52" class="south">
        <td class="english" >The honored father our Patriarch: The
            pillar of the Christian faith: A good shepherd confirming us: With good plans and guidance</td>
        <td class="arabic">والأب الفاضل بطركنا: تاج المِلَّة النُصرانية: راعى الرعاة مثبتنا: بحسن سياسته
            للرعية</td>
    </tr>
    <tr id="table_${tableNumber}_row_53" class="north">
        <td class="english" >The father of fathers who inherited: The
            priesthood of Melchizedek: In true faith and firm hope: And orthodox love</td>
        <td class="arabic">اب الآباء الحبر الوارث: كهنوت ملكيصاداكية: بإيمان صحيح ورجاء ثابت: ومحبة
            ارثوذكسية</td>
    </tr>
    <tr id="table_${tableNumber}_row_54" class="north">
        <td class="english" >Keeping his flock from the foxes: And all
            demonic snares: Protecting them from strange things: And all the heresies of Arius</td>
        <td class="arabic">حافظ غنمه من أنياب الديب: ومن كل فخاخ شيطانية: ومبطل عنهم كل أمر غريب: وكل بدع
            الاريوسية</td>
    </tr>
    <tr id="table_${tableNumber}_row_55" class="north">
        <td class="english" >Shepherding his people with a tender
            voice: With his spiritual teachings: O Lord, Let him enjoy his priesthood: Give him long life
            and calmness</td>
        <td class="arabic">راعي شعبة بحنان صوته: وتعاليمة الروحانية: هنيه يارب بكهنوته: بعمر فسيح وطمأنينة
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_56" class="north">
        <td class="english" >The father the doer of the law: And all
            the commandments: Abba Tawadros Pi-archi-Erevs: The pillar of the Christian faith</td>
        <td class="arabic">الأب العامل بالناموس: وقوانين الشرطانية: أنبا (تواضروس) بى أرشى إيرفس: عمود دين
            النصرانية</td>
    </tr>
    <tr id="table_${tableNumber}_row_57" class="south">
        <td class="english" >And our honored fathers the bishops: His
            partners in the Apostolic service: Through their prayers we may become: Sons of the eternal
            kingdom</td>
        <td class="arabic">والآباء الأفاضل اساقفتنا: شركاؤه فى الخدمة الرسولية: بقبول صلواتهم يجعلنا: أبناء
            الملكوت الأبدية</td>
    </tr>
    <tr id="table_${tableNumber}_row_58" class="south">
        <td class="english" >Confirm all of our clergy: Hegumens and
            presbyters: And keep our holy Church: By offering acceptable gifts</td>
        <td class="arabic">وثبت سائر كهنتنا: قمامصة و قسوس سوية: وأدم عمارة بيعتنا: برفع قرابين مرضية</td>
    </tr>
    <tr id="table_${tableNumber}_row_60" class="refrain">
        <td class="english" >The burning bush seen by Moses: The
            Prophet in the wilderness: The fire inside it was aflame: But never consumed or injured it</td>
        <td class="arabic">العليقة التى رآها: موسى النبى فى البرية: والنيران تشعل جواها: ولم تمسسها بأذية
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_61" class="refrain">
        <td class="english" >The same with the Theotokos Mary: Carried
            the fire of Divinity: Nine months in her holy body: Without blemishing her virginity ${cross}</td>
        <td class="arabic">مثال ام النور طوباها: حملت جمر اللاهوتية: تسعة أشهر فى احشاها: وهى عذراء ببكورية
         ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
psaliAdamOn3rdCanticle(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Psali Adam on the 3rd Canticle Ϯϣⲉⲡϩ̀ⲙⲟⲧ       ⲛ̀ⲧⲟⲧⲕ">
<caption id="caption_table_${tableNumber}" class="caption">Psali Adam on the 3rd Canticle <br /><span
        class="coptic-caption">Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ </span>
        <span class="arabic-caption">ابصالية آدم على الهوس الثالث</span>
        </caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >I thank You, O God of Israel, For You had
            mercy on us, According to Your great mercy</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ : Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕⲓⲣⲓ ⲛⲉⲙⲁⲛ : ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك صنعت معنا: كعظيم رحمتك</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            have sent Your Son, Until He saved us.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕⲟⲩⲱⲣⲡ ̀ⲙ̀ⲡⲉⲕϣⲏⲣⲓ: ϣⲁ ⲛ̀ⲧⲉⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك أرسلت ابنك: حتى خلصتنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >I thank You, O God of Israel, For You
            were incarnate, From Saint Mary.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕϭⲓⲥⲁⲣⲍ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ Ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك تجسدت: من القديسة مريم</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >I thank You, O God of Israel, For You
            were born in Bethlehem. According to the prophecies.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲩⲙⲁⲥⲕ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ : ⲕⲁⲧⲁ ϯⲡ̀ⲣⲟⲫⲏⲧⲓⲁ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك ولدت: فى بيت لحم كالنبوة</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >I thank You, O God of Israel, For the
            shepherds, Behold Your glory.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲛⲁⲩ
            ⲉⲡⲉⲕⲱⲟⲩ: ⲛ̀ϫⲉ ⲛⲓⲙⲁⲛⲉⲥⲱⲟⲩ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأن الرعاة: نظروا مجدك</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            revealed to us, Your Holy Glory.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ ⲁⲕϣⲁⲓ
            ⲛⲁⲛ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲥⲁⲓⲉ̀.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك أشرقت لنا: ببهائك</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >I thank You, O God of Israel, For You
            have performed, many miracles.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕⲓ̀ⲣⲓ ̀ⲛ̀ϩⲁⲛⲙⲏⲓⲛⲓ ⲛⲉⲙ ϩⲁⲛ ϣ̀ⲫⲏⲣⲓ ⲉⲩⲟϣ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك صنعت آيات: ومعجزات كثيرة</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >I thank You, O God of Israel, For the
            Jews conspired, against You.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲉⲣ
            ⲟⲩⲥⲟϭⲛⲓ ⲉⲣⲟⲕ: ⲛ̀ϫⲉ ⲛⲓⲓⲟⲩⲇⲁⲓ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأن اليهود: تشاورا عليك</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            were crucified upon the Cross, in Golgotha</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲁϣⲕ
            ⲉⲡⲓ ⲥ̀ⲧⲁⲩⲣⲟⲥ: ϧⲉⲛ ϯⲅⲟⲗⲅⲟⲑⲁ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك صلبت: على الصليب بالجلجثة</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            were placed in the tomb, Like those who are dead.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ ⲁⲩⲭⲁⲕ
            ϧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ: ⲙⲫ̀ⲣⲏϯ ⲛ̀ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك وضعت فى القبر: مثل الاموات</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >I thank You, O God of Israel, For You
            have risen from the dead, After three days.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : 
            ϫⲉ ⲙⲉⲛⲉⲛⲥⲁ ϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲁⲕⲧⲱⲛⲕ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك قمت من الموت: بعد ثلاثة أيام</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >I thank You, O God of Israel, For You
            have descended into Hades, And the abyss.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : 
            ϫⲉ ⲁⲕϣⲉⲛⲁⲕ ⲉⲡⲉⲥⲏⲧ ⲉ̀ⲁ̀ⲙⲉⲛϯ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ϯⲡ̀ⲣⲟⲛⲓⲁ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك نزلت الى الجحيم: حيث الهاوية</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            have saved Adam, And his entire race.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕⲛⲟϩⲉⲙ ⲛ̀Ⲁⲇⲁⲙ: ⲛⲉⲙ ⲡⲉϥⲅⲉⲛⲟⲥ ⲧⲏⲣϥ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك خلصت آدم: وكل جنسه</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            have sent, Your apostles.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : 
            ϫⲉ ⲁⲕϩⲟⲛϩⲉⲛ ⲉⲧⲟⲧⲟⲩ: ⲛ̀ⲛⲉⲕⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك اوصيت: رسلك</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >I thank You, O God of Israel, For You
            ascended, Into the highest heavens.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕϣⲉⲛⲁⲕ ⲉ̀ϩ̀ⲣⲏⲓ: ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك صعدت: الى أعلى السموات</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >I thank You, O God of Israel, For You sat
            On the right, of the Pantocrator</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ⲁⲕϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ: ⲙ̀Ⲡⲓ-ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك جلست: عن يمين ضابط الكل</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >I thank You, O God of Israel, For You
            shall come, And judge the entire world.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : 
            ϫⲉ ⲉⲕⲉ̀ⲓ̀ ⲉ̀ϯϩⲁⲡ: ⲉϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: لأنك ستأتى: وتدين المسكونة</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >I thank You, O God of Israel, Grant unto
            me mercy, And forgiveness.</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ⲙⲟⲓ ⲛⲏⲓ
            ⲛ̀ⲟⲩⲛⲁⲓ: ⲛⲉⲙ ⲟⲩⲭⲱ ⲉⲃⲟⲗ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: اعطنى رحمة: وغفرانا</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >I thank You, O God of Israel, Absolve and
            remit, All our trespasses</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ :
            ⲁⲣⲓⲥⲩⲛⲭⲱⲣⲓⲛ : ⲛ̀ⲛⲉⲛⲡⲁⲣⲁⲡ̀ⲧⲱⲙⲁ.</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: اصفح: عن زلاتنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >I thank You, O God of Israel, We glorify
            Your Name, And we worship You. ${cross}</td>
        <td class="coptic" >Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ: Ⲫϯ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ : ϫⲉ
            ϯϯⲱ̀ⲟⲩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲟⲩⲟϩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ. ${cross}</td>
        <td class="arabic">أشكرك: ياإله اسرائيل: ونمجد إسمك: ونسجد لك ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
secondPsaliAdamOn3rdCanticle(tableNumber) {
    const html = `

<table id="table_${tableNumber}" style="display: table;"
title="2nd Psali Adam on the 3rd Canticle (I Thank You O God of Jacob)">
<caption id="caption_table_${tableNumber}" class="caption">2nd Psali Adam on the 3rd Canticle <br />(I Thank You O God of Jacob)
    <span class="arabic-caption">ابصالية ثانية آدم على الهوس الثالث <br>(أشكرك يا إله يعقوب)</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >I thank You, God of Jacob: Capable and
            feared God: Fulfilled all that was written: At the gates of Zion's daughter</td>
        <td class="arabic">أشكرك يا إله يعقوب: إله قادر مرهوب: كمل كل المكتوب: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >Matthew the apostle started: With proverbs
            to say: About the virgin&rsquo;s pregnancy: At the gates of Zion's daughter</td>
        <td class="arabic">بدأ متى الرسول: بألأمثال يقول: عن حَبَل البتول: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >The seeker of the city of life: Asked for
            the treasure of life: And found a virgin girl: At the gates of Zion's daughter</td>
        <td class="arabic">طالب مدينة الحياة: طلب كنزاً وأتاه: وجد عذراء فتاة: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >He entered with His glorious ligh: Hid it inside a field: And from it, obtained it: At the gates of Zion's daughter</td>
        <td class="arabic">جاز بنور بهاه: داخل حقل خباه: ومنه اقتناه: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >God's Lamb became a Priest: Servant
            of the sacraments: For He is the head of all ranks: At the gates of Zion's daughter</td>
        <td class="arabic">حَمَلْ الله قد صار: كاهناً خادم الأسرار: لأنه رئيس الأحبار: في أبواب ابنة صهيون
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >Mustard also and yeast: Both, said the
            evangelist: Symbolizing the Kingdom: At the gates of Zion's daughter</td>
        <td class="arabic">خردل أيضًا وخمير: الاثنين قال البشير: عن الملكوت يشير: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >Yeast in cream of wheat: Trinity of the
            begotten Son: Changed us in baptism: At the gates of Zion's daughter</td>
        <td class="arabic">خمير في سميد: ثالوث الابن الوحيد: خمرنا يوم التعميد: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >A man found a treasure: He sold all that
            he had: And bought the jewel of faith: At the gates of Zion's daughter</td>
        <td class="arabic">دُراً قد وجده إنسان مضى وباع كل ما كان واشترى لؤلؤ الإيمان في أبواب ابنة صهيون
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >The creator of the world planned: Before
            the world was made: To be slaughtered for Adam&rsquo;s sake: At the gates of Zion's daughter
        </td>
        <td class="arabic">رَسَم الخالِق العالِم: من قَبل إنشاء العالَم: أن يُذبح لأجل آدم: في أبواب ابنة
            صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >The devil adorned his trap: To catch Adam
            the man: He caught him and Eve too: At the gates of Zion's daughter</td>
        <td class="arabic">زخرف فخهُ الشيطان: ليصيد آدم الإنسان: صاده وحواء الاثنان: في أبواب ابنة صهيون
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >A predator thief hurried: A monster and
            false prophet: Overwhelmed the Father&rsquo;s children: At the gates of Zion's daughter</td>
        <td class="arabic">سبق لص سلاب: وحْشٌ ونبي كذاب: طغى أولاد الآب: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Enslaved them in sin: From a bad fruit:
            They trampled the commandment: At the gates of Zion's daughter</td>
        <td class="arabic">سباهم بالخطية: من ثمرة ردية: داسوا الوصية: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >Preceded the ancient: Written in truth:
            Charter and Deed: At the gates of Zion's daughter</td>
        <td class="arabic">سبقت العتيقة: كُتبت بالحقيقة: حُجّة وثيقة: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >Thorns and spines sprout for You:
            Adam&rsquo;s shame prepared for You: Gave You a crown of thorns At the gates of Zion&rsquo;s
            daughter</td>
        <td class="arabic">شوكاً وحَسَكاً تَنْبُتْ لَك: زَلَّة آدم هيأت لك: اكليل شوك صَنَعَت لك: في أبواب
            ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >God&rsquo;s promises came true: As was
            said in the Torah: The woman&rsquo;s Seed will come: At the gates of Zion's daughter</td>
        <td class="arabic">صدُقَت مواعيد الله: كما قالت التوراة: يأتي نسل المراة: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >A Boy and Mighty God: Created all the
            plans: And killed a giant snake: At the gates of Zion's daughter</td>
        <td class="arabic">صبى وإله قدير: صنع كل التدابير: وقتل ثعبان كبير: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >Your sayings came true: Sanctified in all
            Your deeds: Your works are proclaimed: At the gates of Zion's daughter</td>
        <td class="arabic">صدَقت أقوالك: تتقدس في أفعالك: لتُخَبَّر بأعمالك: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >Adam was lost and confounded: When he ate
            of the fruit: And was lost among the trees: At the gates of Zion's daughter</td>
        <td class="arabic">ضل آدم أيضًا: واحتار حين أكل الأثمار: وتاه بين الأشجار: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >Gladly, the Lord called for him: Spared
            him from the enemy: And saved him with His Blood: At the gates of Zion's daughter</td>
        <td class="arabic">طلبه ربه برضاه: و من العدو نجاه: وبدمه قد فداه: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >Pure, faithful, and truthful: Fulfilled
            His promise: Melchizedek sat: At the gates of Zion's daughter</td>
        <td class="arabic">طاهر وأمين صادق: كمل وعده السابق: جلس ملكيصادق: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >The spice appeared and exuded: My Father
            and I planted: A garden of the fruit of goodness: At the gates of Zion's daughter</td>
        <td class="arabic">ظَهَرَ الطِيبِ وفاح: غرسْتُ أنا وأبي الفلَّاح: بستان ثمر الصلاح: في أبواب ابنة
            صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english" >A bride, maiden and virgin: St. Paul spoke
            of her: About the church he said: At the gates of Zion's daughter</td>
        <td class="arabic">عروس بكر بتول: خاطبها بولس الرسول: عن البيعة يقول: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english" >Sheep inside the ranch: Shepherded in the
            midst of town: The gentle mother: At the gates of Zion's daughter</td>
        <td class="arabic">غنم داخل الضيعة: ترتع وسط البيعة: الأم الوديعة: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >He dispersed and gave the poor: His
            righteousness at all times: For His assembled people: At the gates of Zion's daughter</td>
        <td class="arabic">فرق وأعطى المساكين: بره في كل حين: لشعبه المجتمعين: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >In the mystery of the Eucharist: Three
            great virtues: Love, hope, and faith: At the gates of Zion's daughter</td>
        <td class="arabic">في سر القربان: ثلاث فضائل عظام: محبة ورجاء وإيمان: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english" >In the Temple of Solomon: Two towering
            columns: Repentance and forgiveness: At the gates of Zion's daughter</td>
        <td class="arabic">في هيكل سليمان: عمودان رفيعا البُنيان: التوبة والغفران: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="south">
        <td class="english" >St. John the apostle said: The Mighty
            Father: Sent His Son, a witness: At the gates of Zion's daughter</td>
        <td class="arabic">قال يوحنا البشير: أن الآب القدير: أرسل ابنه خبير: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >The words of the psalm came true: Our Lord
            was engulfed in light: He ruled with joy: At the gates of Zion's daughter</td>
        <td class="arabic">كمُل كلام المزمور: ربنا اشتمل بالنور: يملك بالسرور: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english" >St. Luke the great said: It is written in
            the gospel: A Man had a steward: At the gates of Zion's daughter</td>
        <td class="arabic">وقال لوقا الجليل: مكتوب في الإنجيل: انسان كان له وكيل: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="north">
        <td class="english" >When he heard of his deeds: He asked him to give: An account of his stewardship: At the gates of Zion's daughter</td>
        <td class="arabic">لما سَمع بأعماله: طلبه أيضًا وسأله: يعطى حساب أمواله: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="south">
        <td class="english" >The law of Israel was first: Then the
            gospel came: The wisdom of every age: At the gates of Zion's daughter</td>
        <td class="arabic">بَدَأَ ناموس اسرائيل: ثم رُفِعَ الإنجيل: حكمة كل جيل: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="south">
        <td class="english" >He fulfilled the law: The canons of
            Jacob&rsquo;s sons: And fulfilled the written words: At the gates of Zion's daughter</td>
        <td class="arabic">أكمل الناموس المطلوب: شريعة بنى يعقوب: وتمم المكتوب: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="north">
        <td class="english" >He raised the brass serpent: In the
            wilderness of judgment: A symbol of the cross of Christ: At the gates of Zion's daughter
        </td>
        <td class="arabic">نصب حية النحاس: في برية القصاص: رمز صليب ماسياس: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_33" class="north">
        <td class="english" >Jesus spoke on the cross: And called His
            mother: And John the beloved: At the gates of Zion's daughter</td>
        <td class="arabic">نطق يسوع فوق الصليب: ودعى أمه والحبيب: يوحنا عالي النصيب: في أبواب ابنة صهيون
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_34" class="south">
        <td class="english" >He gave him a gift: A precious inheritance:
            The mother of mankind: At the gates of Zion's daughter</td>
        <td class="arabic">هاداه بالعطية: وأعطاه وصية: بأم البشرية: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_35" class="south">
        <td class="english" >Behold a woman clearly: Pregnant openly: A
            Son came forth from her: At the gates of Zion's daughter</td>
        <td class="arabic">هوذا إمرأة في الجَلَيان: حُبلى باستعلان: وابن منها كان: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_36" class="north">
        <td class="english" >This woman escaped with: The wings of the
            words of God: The Gospel and the Torah: At the gates of Zion's daughter</td>
        <td class="arabic">هربت هذه المرأة: بجناحي أقوال الله: الحديثة والتوراة: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_37" class="north">
        <td class="english" >She fled into the wilderness: Zion the
            pure: To care for the Offspring: At the gates of Zion's daughter</td>
        <td class="arabic">هربت في البرية: صهيون النقية: لتعول الذرية: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_38" class="south">
        <td class="english" >The author of this praise: Abdelmesih the
            hegumen: Offers this praise: At the gates of Zion's daughter</td>
        <td class="arabic">واضع هذا المديح: القمص عبد المسيح: يقدم التسبيح: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_39" class="south">
        <td class="english" >For I am not counted: And estranged from
            Sheikh Masood: I offer this worship: At the gates of Zion's daughter (1) Sheikh Masood:
            (city in upper Egypt)</td>
        <td class="arabic">لأني لست معدود: وغريب من الشيخ مسعود: أقدم السجود: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_40" class="north">
        <td class="english" >O Lord keep our patriarch: And his
            partners our bishops: With their prayers, confirm us: At the gates of Zion's daughter</td>
        <td class="arabic">يا رب احفظ بطركنا: وشركاءه اساقفتنا: وبصلواتهما ثبتنا: في أبواب ابنة صهيون</td>
    </tr>
    <tr id="table_${tableNumber}_row_41" class="north">
        <td class="english" >O Lord keep our priests: And also our
            deacons: And the rest of our people: At the gates of Zion's daughter ${cross}</td>
        <td class="arabic">يا رب احفظ كهنتنا: وأيضًا شمامستنا: مع كافة أُمِّتنا: في أبواب ابنة صهيون ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
KiahkPraisefortheHolyTrinity(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Kiahk Praise for the Holy Trinity">
    
    <caption id="caption_table_${tableNumber}" class="caption">Kiahk Praise for the Holy Trinity
        <span class="arabic-caption">مديح كيهكي للثالوث القدوس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">We worship the Holy Trinity: The Father, Son, and the Holy Spirit: We worship, we praise and sanctify: One God, Creator of mankind.</td>
            <td class="arabic">السجود يَليق للثالوث القدوس: الآب والإبن والروح القُدُس: نسجد ونُسبِّح ونُقدِّس: لإله واحد خالق الأنفُس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">To Him is glory and honor always: Also, the reverence and the kingdom: Ever existing before all ages: Everlasting and immortal.</td>
            <td class="arabic">له المجد الدائم والإكرام: صاحب الهيبة والملكوت: قديم أزلي قبل الأيام: دائم باقي حي لا يموت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">Holy God, holy Mighty: Holy Immortal: Lord of the throne, the highest King: We preach the Holy Trinity.</td>
            <td class="arabic">قدوس الله قدوس القوي: قدوس الحي الذي لا يموت: رب العرش الملك العُلوِي: نَكرِز ونُبَشِّر بالثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Blessed is the Father, the Pantocrator: Blessed is the Son, Jesus Christ: Blessed is the Holy Spirit, the eternal: We worship and praise Him.</td>
            <td class="arabic">مبارك الآب ضابط الكلِّ: مبارك الإبن يسوع المسيح: مبارك روح قدسه الذي لا يزال: يجب له السجود مع التسبيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The almighty and great in power: The knowing, good and honored Judge: One God in three hypostaseis: Indescribable by any human.</td>
            <td class="arabic">صاحب قدرة وسلطان عظيم: حَاكِم عَالِمْ جيد وكريم: إله واحد في ثلاثة أقانيم: يَعْجَزْ عن وَصفهِ كل فَهيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Of one essence and one nature: One Being in His divinity: The Three are one in essence: Without mingling or separation.</td>
            <td class="arabic">جوهر واحد طَبعٌ واحد: وذات واحد في اللاهوت فريد: الثلاثة واحد في الجوهر: من غير تَفْريد ولا تقسيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">One Being in three hypostaseis: Without mingling or separation: The Almighty in His kingdom: Filling the heavens and all therein.</td>
            <td class="arabic">جوهر واحد في ثلاثة أقانيم: من غير تَفْريد ولا تقسيم: سُلطان واحد في مُلكه مُقيم: مالئ سماوات وكل الأقانيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">A mystery above the human mind: In essence, They are one God: But according to Their existence: Three hypostaseis, one God.</td>
            <td class="arabic">سِرٌّ يفوق البشرية: بحسب الجوهر إله واحد: وأما حسب الاُقنومية: هم الثلاثة إله واحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The Son begotten before all ages: Begotten from the Father: In natural birth: And the Holy Spirit proceeds from the Father.</td>
            <td class="arabic">الإبن مولود من الأزلية: ليس لتقديم الإرادة وُلد من الآب: لكن ولادة طبيعية: والروح القدس منبثق من الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">As the sun gives rays and heat: The Sun disk is the source of both: Without division or separation: This is natural birth.</td>
            <td class="arabic">كولادة شعاع الشمس وحرارتها: والقُرص الباعث للإثنين: وهذه الولادة طبيعية: لا مُنقطعين ولا مُنفصلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Three equal hypostaseis: In essence and divinity: Since the beginning of the ages: And to the eternal life.</td>
            <td class="arabic">الثلاثة أقانيم مُتساوية: في الجوهر واللاهوتية: وفي قِدَم الأزلية: ودَوام الحياة الأبدية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Daniel witnessed the throne: Upon it, the Ancient of Days: Of whom came the Son of Man: And granted Him honor and dominion.</td>
            <td class="arabic">شاف دانيال كرسي أعيان: والجالس عليه عتيق الأيام: دَنَا منهُ إبنُ الإنسان: وأعطاه الكرامة والسلطان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">The throne appeared as lightening: Upon it, He sat as fire: His hair, as white as snow: Carrying it four creatures of fire.</td>
            <td class="arabic">نظر الكرسي شَبيه البرق: والجالس عليه شَبيه النار: شعر رأسه أبيض كالثلج: حاملينه أربعة كائنات من نار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">The four having no bodies: One like a man, one like a calf: The third is like a lion: And the fourth like an eagle.</td>
            <td class="arabic">رأى الأربعة من غير جسد: واحد في شِبه إنسان وواحد في شِبه ثور: والكائن الثالث شِبه أسد: والكائن الرابع شَبيه النسور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">A face for each being: With six wings and many eyes: Two wings to cover their feet: Two covering their face and two to fly.</td>
            <td class="arabic">أربعة وُجُوه للواحد منهُم: وستة أجنحة وكُله عيون: بإثنين يغطون أرجلهُم: يسترون وجوههم بإثنين ويطيرون بإثنين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Twenty-four priests upon their seats: With golden crowns bright as fire: In their hands, golden censers: Incense rising day and night.</td>
            <td class="arabic">أربعة وعشرون قسيساً بكراسيهُم: وأكاليل ذهب تشعل كالنار: ومجامر ذهب في أيديهُم: ببخور صاعد ليلاً ونهار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Surrounding the throne thousands of thousands: And myriads of myriads of archangels: With choirs of thrones and dominions: Chanting to Him with joyful voices.</td>
            <td class="arabic">يحوط بالكرسي اُلوف اُلوف: ورؤساء ملائكة ربوات ربوات: كراسي وسلاطين صفوف صفوف: تُرتِّل له بأعلى الأصوات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Praising Him with joyful sounds: With the cries of the creatures and priests: Saying, “Holy, holy, holy: O Living One, Lord of hosts.</td>
            <td class="arabic">وعند صِياح الكائنات والقسوس: يصيحون جميعاً بأعلى صوت: صارخين قائلين "قدوس قدوس: قدوس الحي رب الصباؤوت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">Heaven and earth are full of: Your glory and Your praise: To You, is honor and power: And all creatures praise you.</td>
            <td class="arabic">السماء والأرض مملوءة: من مجدك الفائق ومديحك: لك المجدُ لك القوة: وجميع البرايا لتسابيحك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Alleluia Alleluia: To You, is greatness and majesty: To You, is glory and power: To You, is honor and kingdom.</td>
            <td class="arabic">هلليلويا هلليلويا: لك العظمة والجبروت: لك المجد لك القوة: ولك الهيبة ولك الملكوت.</td>
        </tr>
        </tbody>
</table>`;
 return html;
}
,
praiseOnPsaliOfTheThreeYoungMen(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise on the Psali of the Three Young Men (God Existent Before The Ages)">
<caption id="caption_${tableNumber}" class="caption">Praise on the Psali of the Three Young Men <br /> (God Existent Before The Ages)
    <span class="arabic-caption">مديح على ابصاية الثلاثة فتية <br>(الله الأزلى قبل الأدهار)</span>
</caption>
<tbody>
    <tr id="${tableNumber}_row_0" class="north">
        <td class="english" >God existent before the ages: Sent His
            chosen Angel: To deliver the youths from the furnace: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">الله الأزلى قبل الأدهار: ارسل ملاكه المختار: نجى الفتية من أتون النار: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_1" class="north">
        <td class="english" >Nebuchadnezzar the king made a golden
            image: And told the ministers and all people: When you hear the sound of the trumpet: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">بختنصر الملك أقام صورة من ذهب: وقال للوزراء وكل الشعب: إذا ما سمعتم آلات الطرب:
            هوس إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_2" class="south">
        <td class="english" >Immediately come out and fall down: To
            worship the golden image: Or you'll be cast in the furnace: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">تعالوا لوقتكم مسرعين: ولتلك الصورة ساجدين: وإذا لم تسجدوا تلقون فى الآتون: هوس
            إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_3" class="south">
        <td class="english" >Then came forth the Chaldeans: And
            worshipped before the image: Except for the three saintly youths: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">تقدم الكلدانيون: لتلك الصورة خروا ساجدين: ماخلا الثلاثة الفتية القديسين: هوس
            إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_4" class="north">
        <td class="english" >O come Ananias and praise: With the voice
            of salvation: And praise your God the Messiah: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">تعال إلينا ياأنانياس: ورتل معنا بصوت الخلاص: وسبح إلهك ماسياس: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_5" class="north">
        <td class="english" >Men came and informed the king saying:
            There are three men in the city: Who do not worship the image: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">جاء قوم وأعلموا الملك قائلين: هاهنا ثلاثة رجال ساكنين: لم يسجدوا للصورة بل
            مهملين: هوس إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_6" class="south">
        <td class="english" >The king gathered the leaders: The
            authorities and all ranks: And ordered the furnace to be hotter: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">جمع الملك رؤساء الشعب: وأرباب الدولة وكل الرتب: وقال لهم أوقدوا الأتون بالحطب:
            هوس إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_7" class="south">
        <td class="english" >They bound the hands of the three youths:
            And cast them in the midst of the furnace: But to them it became as dew not heat: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">أتوا بالفتية موثقين: وطرحوهم فى وسط الأتون: فصار كندى اليسمين: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_8" class="north">
        <td class="english" >The angel of the Lord came unto them: And
            quenched the furnace and strengthened them: And they rejoiced when they saw Him: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">حينئذ ملاك الله جاءهم: أطفأ الأتون وقواهم: وفرحوا به لما أتاهم: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_9" class="north">
        <td class="english" >Azarias started to praise and pray:
            Faithfully without defilement: And gave glory to the power of the Trinity: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">حينئذ صلى عزارياس: صلاة قوية بغير أدناس: تى اوأوإن إتجوم إن تى اترياس: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_10" class="south">
        <td class="english" >Misael likewise proclaimed: With the voice
            of rejoicing: Bless the Name of Emmanuel: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">خاصة بالأكثر ميصائيل: علَّ صوته بالتهليل: اسمو إإ فران إن إممانوئيل: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_11" class="south">
        <td class="english" >The king was amazed and surprised: There
            were only three in the furnace: But now there are four walking freely: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span>
        </td>
        <td class="arabic">دهش الملك أيضاً واحتار: أليس ثلاثة ألقوا فى النار: هوذا أربعة يمشون أجهار: هوس
            إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_12" class="north">
        <td class="english" >The king truly saw all of them free: Four
            men walking in the fire: And praising with the voice of rejoicing: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span>
        </td>
        <td class="arabic">رأى الملك حقاً اجهار: أربعة رجال يمشون فى النار: ويسبحون ببهجة ووقار: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_13" class="north">
        <td class="english" >The king was greatly amazed: And
            proclaimed saying: The fourth looks like the Son of God: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">زاد عجباً ونطق بفاه: هوذا الرابع يشبه ابن الآلهة: فى منظره وفى رؤياه: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_14" class="south">
        <td class="english" >Praise our God, O you people: The angels,
            the thrones and the powers: Praise the Lord God of heaven: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">سبحوه أيها السادات: الملائكة والكراسى والقوات: سبحوا رب السموات: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_15" class="south">
        <td class="english" >Praise Him and glorify Him: In the
            congregations exalt Him: And above all the elders bless Him: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</td>
        <td class="arabic">سبحوه ومجدوه: فى كنائس شعبه ارفعوه: على منابر الشيوخ باركوه: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="table_${tableNumber}_row_15.5" class="north">
        <td class="skipButton" data-navigation="table_${tableNumber}">${skip}</td>
    </tr>
    <tr id="${tableNumber}_row_16" class="north">
        <td class="english" >Praise your God O Sedrak: Abdenego and the
            praised Misak: For He saved you from destruction: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">سبح إلهك ياسدراك: وابدناغو والممدوح ميساك: لأنه نجاكم من الهلاك: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_17" class="north">
        <td class="english" >Praise Him all you nations: The free, the
            slave and the servant: For He saved you from annihilation: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">سبحوه ياجميع الامم: الأحرار والعبيد والخدم: لأنه أنشاكم من العدم: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_18" class="south">
        <td class="english" >The fiery furnace O Ananias: Was quenched
            by your God the Messiah: O bless His honored Name: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">سعير اللهيب ياأنانياس: أطفأه إلهك ماسياس: إسموا إبيفران توديمياس: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_19" class="south">
        <td class="english" >The youths proclaimed with rejoicing:
            Bless the Lord God of Israel: And remember Him in all generations: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span>
        </td>
        <td class="arabic">صاح الفتية بالتهليل: باركوا الرب إله اسرائيل: وإذكروا اسمه من جيل إلى جيل: هوس
            إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_20" class="north">
        <td class="english" >An undefiled sacrifice was offered: O
            Azarias the praised: Praise the honored Name of God: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">تقدمة قربت بغير أدناس: أيها الممدوح عزارياس: إسمو إإفران توديمياس: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_21" class="north">
        <td class="english" >Emmanuel quenched the furnace: So rejoice
            and praise O Misael: And offer to your God praises: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">أخمد اللهيب عمانوئيل: فسر وسبح يا ميصائيل: ورتل لإلهك بالتهليل: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_22" class="south">
        <td class="english" >The three youths praised with glory: And
            proclaimed in a joyful sound: Holy is the Beloved Son: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">ظهر الفتية بالتمجيد: ورتلوا بصوت عالى شديد: إفؤاب إبشيرى إم مينريت: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_23" class="south">
        <td class="english" >Seven times hotter the fire was lit: And
            forty nine full breadths: But the youths did not fear this: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">علا اللهيب فوق الأتون: تسعة وأربعين ذراعاً كاملين: ولم يرهبه المجاهدون: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_24" class="north">
        <td class="english" >The three youths overcame: The fiery
            furnace: And conquered the enemy saying: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">غلب الفتية لهيب النار: وقهروا الاعداء الكفار: فاستحقوا المديح والتذكار: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_25" class="north">
        <td class="english" >The king proclaimed in a heard voice:
            Ananias, Azarias and Misael: The servants of the Most High God: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">فصاح الملك بصوت عال: حنانيا وعزاريا وميصائيل: عبيد الله القوى المتعال: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_26" class="south">
        <td class="english" >Come out from the fiery furnace: For your
            God is powerful: The performer of wonders: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">تعالوا اخرجوا من النار: لأن إلهكم ذو اقتدار: صانع العجائب الكبار: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_27" class="south">
        <td class="english" >Honor and glory O Israel: Offer before God
            Emmanuel: The sound of rejoicing and praise: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">كرامة ومجداً يا اسرائيل: قدم لإلهك عمانوئيل: تسابيح البركة والتهليل: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_28" class="north">
        <td class="english" >Before Him all the nations worship: And
            all tongues and languages: They praise the Lord of Sabaoth (Hosts): <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span>
        </td>
        <td class="arabic">له تسجد كل الأسباط: وكل الألسن واللغات: تسبح رب القوات: هوس إيروف آرى هوؤتشاسف
        </td>
    </tr>
    <tr id="${tableNumber}_row_29" class="north">
        <td class="english" >There is no other Lord like: You Who is
            powerful and feared: Your dominion is eternal: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">من يشبهك يارب الأرباب: إله قوى عزيز مهاب: سلطانك في كل الأحقاب: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_30" class="south">
        <td class="english" >The furnace became a cool mist: Therefore
            the youths proclaimed saying: Praise you the gracious Lord: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">ندى بارد صار الأتون: فصاح الفتية بصوت حنون: إسمو إإبشويس تون كيريون: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_31" class="south">
        <td class="english" >Rejoice in the God of Jacob: For He is a
            powerful and feared God: And praise His Holy Name: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">هللوا لإله يعقوب: وابتهجوا بالله القوى المرهوب: ورتلوا لإسمه المحبوب: هوس إيروف
            آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_32" class="north">
        <td class="english" >Praise Him also with hymns: Bless the Lord
            O you three youths: Praise the Lord at all times: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span></td>
        <td class="arabic">وسبحوه أيضاً بالألحان: باركوا الرب أيها الفتيان: إفهوس إإفنوتى ان سيو نيفين: هوس
            إيروف آرى هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_33" class="north">
        <td class="english" >For the Lord our God is greatly praised:
            And feared above the other gods: By His might He delivered the youths: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span>
        </td>
        <td class="arabic">لأنه عظيم ومبارك جدا: ومخوف على كل الآلهة: بقدرته نجى الفتية: هوس إيروف آرى
            هوؤتشاسف</td>
    </tr>
    <tr id="${tableNumber}_row_34" class="south">
        <td class="english" >To Him are due glory and worship: Before
            the Creator and feared God: The Gracious God, Bestower of Life: <span class="coptic-caption">ϩⲱⲥ ⲉ̀ⲣⲟϥ ̀ ⲁⲣⲓ ϩⲟⲩⲟ̀ ϭⲁⲥϥ.</span> ${cross}</td>
        <td class="arabic">يليق الإكرام والسجود: بالإله الخالق المعبود: رب الأحسان مصدر الجود: هوس إيروف آرى
            هوؤتشاسف ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
kiahkCommemoration(tableNumber){
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Kiahk Commemoration of the Saints">
<caption id="caption_table_${tableNumber}" class="caption">Kiahk Commemoration of the Saints
    <span class="arabic-caption">المجمع الكيهكي</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >Intercede on our behalf, O lady of us
            all, the Mother of God, Mary, the Mother of our Savior, That He may forgive us our sins.</td>
        <td class="coptic" >Ⲁ ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ : ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ
            ⲧⲏⲣⲉⲛ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic">إشفعى فينا يا سيدتنا كلنا السيدة والدة الإله مريم ام مخلصنا ليغفرلنا خطايانا.
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="south">
        <td class="english" >Intercede on our behalf, O holy
            archangels, Michael and Gabriel, That He may forgive us our sins.</td>
        <td class="coptic" >Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀
            ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ : Ⲙⲓⲭⲁⲏⲗ ⲛⲁⲙ Ⲅⲁⲃⲣⲓⲏⲗ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic">إشفعا فينا يارئيسى الملائكة الطاهرين ميخائيل وغبريال ليغفر لنا خطايانا.</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="north">
        <td class="english" >Intercede on our behalf, O holy
            archangels, Raphael and Souriel That He may...</td>
        <td class="coptic" >̀ Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀
            ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ : Ⲣⲁⲫⲁⲏⲗ ⲛⲉⲙ Ⲥⲟⲩⲣⲓⲏⲗ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إشفعا فينا يارئيسى الملائكة الطاهرين رافائيل وسوريال ليغفر.</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >Intercede: O holy archangels, Sedakiel,
            Sarathiel and Ananiel, That He may...</td>
        <td class="coptic" >̀ Ⲁⲣⲓⲡ̅ : ⲱ̀ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ:
            Ⲥⲉⲇⲁⲕⲓⲏⲗ Ⲥⲁⲣⲁⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اشفعوا فينا يارؤساء الملائكة الأطهار سداكيال وسراتيال وأنانيال ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Intercede: O Thrones, Dominions and
            Powers, The Cherubim and the Seraphim, That He may...</td>
        <td class="coptic" >̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ :
            Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أشفعى فينا أيتها الكراسى والارباب والقوات والشيروبيم والسرافيم ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="south">
        <td class="english" >Intercede on our behalf, O Four
            Incorporeal creatures, The ministers fervent as fire, That He may...</td>
        <td class="coptic" >Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲡⲓϥ̀ⲧⲟⲩ
            ⲛ̀ⲍⲱⲟⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ : ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲟⲥ ⲛ̀ϣⲁϩ ⲛ̀ⲭ̀ⲣⲱⲙ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أشفعوا فينا أيها الأربعة الحيوانات غير المتجسدين الخدام الملتهبين ناراً ليغفر...
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="north">
        <td class="english" >Intercede: O priests of the Truth, The
            Twenty Four Presbyters, That He may...</td>
        <td class="coptic" >̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲟⲩⲏⲃ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ : ⲡⲓϫⲟⲧϥ̀ⲧⲟⲩ
            ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲏⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إشفعوا فينا ياكهنة الحق الأربعة والعشرين قسيساً ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >Intercede: O angelic hosts, And all the
            heavenly multitudes, That He may...</td>
        <td class="coptic" >̀ Ⲁⲣⲓⲡ̅ : ⲛⲓⲥⲧⲣⲁⲧⲓ̀ⲁ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ : ⲛⲉⲙ
            ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ :</td>
        <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >Pray to the Lord on our behalf, My lords
            and fathers, the patriarchs, Abraham, Isaac and Jacob, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ
            ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : Ⲁⲃⲣⲁⲁⲙ Ⲓ̀ⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إطلبوا من الرب عنا ياسادتى الآباء البطاركة إبراهيم وإسحق ويعقوب ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="south">
        <td class="english" >Pray to the Lord on our behalf, O perfect
            man, The righteous and just Enoch, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲱ̀ ⲡⲓⲣⲱⲙⲓ
            ⲛ̀ⲧⲉⲗⲓⲟⲥ : ⲡⲓⲑ̀ⲙⲏⲓ ̀ Ⲉⲛⲱⲭ ⲡⲓⲇⲓⲕⲉⲟⲥ : ̀ ⲛⲧⲉϥ...</td>
        <td class="arabic">إطلب من الرب عنا أيها الرجل الكامل البار أخنوخ الصديق ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="north">
        <td class="english" >Pray to the Lord on our behalf, Elijah
            the Tishbite, And Elisha his disciple, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲏⲗⲓⲁⲥ
            ⲡⲓⲑⲉⲥⲃⲓⲧⲏⲥ: ⲛⲉⲙ Ⲉ̀ⲗⲓⲥⲉⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إطلبوا من الرب عنا ياإيليا التسبيتى وآليشع تلميذه ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Pray to the Lord on our behalf, O Moses
            the archprophet and Isaiah, and Jeremiah, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲱ̀ Ⲙⲱⲩ̀ⲥⲏⲥ
            ⲡⲓⲁⲣⲭⲏⲡ̀ⲣⲟⲫⲓⲧⲏⲥ ⲛⲉⲙ Ⲏⲥⲁⲏ̀ⲁⲥ : ⲛⲉⲙ Ⲓⲉⲣⲉⲙⲓⲁⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إطلبوا من الرب عنا ياموسى رئيس الأنبياء وأشعياء وأرمياء ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >Pray: O David the psalmist, Ezekiel and
            Daniel, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲇⲁⲩⲓⲇ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ : ⲛⲉⲙ Ⲓⲉⲍⲉⲕⲓⲏⲗ
            ⲛⲉⲙ Ⲇⲁⲛⲓⲏⲗ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا يا داود المرتل وحزقيال ودانيال ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="south">
        <td class="english" >Pray: Joachim, Anna and Joseph the Elder,
            and the righteous Job, Joseph and Nicodemus, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲓⲱⲁⲕⲓⲙ ⲛⲉⲙ Ⲁⲛⲛⲁ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲡⲓ
            ⲡ̀ⲣⲉⲥⲃⲏⲧⲉⲣⲟⲥ : ⲛⲉⲙ ⲡⲓ ⲑ̀ⲙⲏⲓ Ⲓⲱⲃ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إطلبوا من الرب عنا يايواقيم وحنّة ويوسف الشيخ والصديق ايوب ويوسف ونيقوديموس
            ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="north">
        <td class="english" >Pray to the Lord on our behalf, O
            Melchizedek and Aaron, and Zacharias and Simeon, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ
            ⲛⲉⲙ Ⲁ̀ⲁ̀ⲣⲱⲛ : ⲛⲉⲙ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياملشيصادق وهرون وزكريا وسمعان ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Pray: O chorus of the prophets, And all
            the righteous and the just, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ⲛⲉⲙ
            ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياصفوف الأنبياء والأبرار والصديقين ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >Intercede on our behalf, O fore-runner
            and baptizer, John the Baptist, That he may&hellip;</td>
        <td class="coptic" >̀ Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀
            ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إشفع فينا أيها السابق الصابغ يوحنا المعمدان ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="south">
        <td class="english" >Intercede on our behalf, O the Hundred
            and Forty Four Thousand, and the celibate Evangelist, That He may&hellip;</td>
        <td class="coptic" >Ⲁ̀ⲣⲓⲡ̅ : ⲱ̀ ⲡⲓϣⲉ ϩ̀ⲙⲉ ϥ̀ⲧⲟⲩ ⲛ̀ϣⲟ : ⲛⲉⲙ
            ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">إشفعوا فينا ايها المئة والأربعة والأربعين الفاً والبتول الانجيلى ليغفر.</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="north">
        <td class="english" >Pray to the Lord on our behalf, Our lords
            and fathers, the Apostles, And the rest of the Disciples, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲁϭⲟⲓⲥ ̀ⲛ̀ⲓⲟϯ
            ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياسادتى الآباء الرسل وبقية التلاميذ ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >Pray: O blessed archdeacon, Stephen the
            First Martyr, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓⲁⲣⲭⲏⲇⲓⲁ̀ⲕⲱⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: Ⲥ̀ⲧⲉⲫⲁⲛⲟⲥ
            ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلب من الرب عنا يارئيس الشمامسة المبارك استفانوس الشهيد الاول ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >Pray to the Lord on our behalf, O
            Beholder of God the Evangelist, Mark the Apostle, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ
            ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلب من الرب عنا أيها الناظر الإله الإنجيلى مرقس الرسول ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="south">
        <td class="english" >Pray: O struggle mantled martyr, My lord
            prince George, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲁϭⲟⲓⲥ
            ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلب من الرب عنا أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="north">
        <td class="english" >Pray: Theodore and Theodore, Leontius and
            Panicharus, That he may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ : ⲛⲉⲙ
            Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياثيؤدوروس وثيؤدوروس ولاونديوس وبانيكاروس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english" >Pray to the Lord on our behalf, O Philopater Mercurius, and Abba Mina and Abba Victor, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ
            Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ : ⲛⲉⲙ ⲁ̀ⲡⲁ Ⲙⲏⲛⲁ ⲛⲉⲙ ⲁ̀ⲡⲁ Ⲃⲓⲕⲧⲱⲣ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا يافيلوباتير مرقوريوس وأبا مينا وأبا بقطر ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english" >Pray: Lord Claudius and Theodore, Abba
            Eschyron and Abba Isaac, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲕⲩⲣⲓ ̀ Ⲕⲗⲁⲩⲇⲓⲟⲥ ⲛⲉⲙ Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ : ⲛⲉⲙ
            ⲁ̀ⲡⲁ ̀ Ⲥⲭⲩⲣⲟⲛ ⲛⲉⲙ ⲁ̀ⲡⲁ ̀ Ⲓⲥⲁⲁⲕ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياسيدى اقلوديوس وثيئودوروس وأبا سخيرون وأبا اسحق ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="south">
        <td class="english" >Pray: Basilidis and Eusebius, Macarius
            and Philotheos, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲃⲁⲥⲓⲗⲓⲧⲏⲥ ⲛⲉⲙ Ⲉⲩⲥⲉⲃⲓⲟⲥ : ⲛⲉⲙ
            Ⲙⲁⲕⲁⲣⲓⲟⲥ ⲛⲉⲙ Ⲫⲓⲗⲟⲑⲉⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياواسيليدس وأوسابيوس ومقاريوس وفيلوثاؤس ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="north">
        <td class="english" >Pray to the Lord on our behalf, Abba
            Pisoora and Abba Epshoi, Abba Eesi and Thekla his sister, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲡⲓⲥⲟⲩⲣⲁ
            ⲛⲉⲙ ⲁ̀ⲡⲁ ̀ Ⲡϣⲱⲓ : ⲛⲉⲙ ⲁ̀ⲡⲁ ̀ Ⲏⲥⲓ ⲛⲉⲙ Ⲑⲉⲕⲗⲁ ⲧⲉϥⲥⲱⲛⲓ: ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياأنبا بسوره وأبابشاى وأباايسى وتكلا اخته ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english" >Pray: O struggle mantled martyrs, Justus,
            Apali and Theoklia, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲓⲟⲩⲥⲧⲟⲥ ⲛⲉⲙ
            Ⲁ̀ⲡⲁⲗⲓ ⲛⲉⲙ Ⲑⲉⲟ̀ⲕⲗⲓⲁ̀ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون يسطس وآبالى وتاوكليا ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english" >Pray: Abba Jacob the Persian, Saint
            Sergius and Saint Bachus, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲓⲁⲕⲱⲃⲟⲥ ⲡⲓϥⲉⲣⲥⲓⲥ : ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ
            Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياأنبا يعقوب الفارسى والقديس سرجيوس وواخس ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="south">
        <td class="english" >Pray to the Lord on our behalf, O
            struggle mantled martyrs, Cosmas, his brothers and their mother, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
            ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲕⲟⲥⲙⲁ ⲛⲉⲙ ⲛⲉϥⲥ̀ⲛⲏⲟⲩ ⲛⲉⲙ ⲧⲟⲩⲙⲁⲩ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون قزمان واخوته وأمهم ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="north">
        <td class="english" >Pray: Abba Cyrus and his brother John,
            And Barbara and Juliana, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁ̀ⲡⲁ Ⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ : ⲛⲉⲙ
            Ⲃⲁⲣⲃⲁⲣⲁ ⲛⲉⲙ Ⲓⲟⲩⲗⲓⲁ̀ⲛⲏ: ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا يااباقير ويوحنا أخوه وبرباره ويوليانه ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="south">
        <td class="english" >Pray: O struggle mantled martyrs, Lord
            Apatir and Eraee his sister, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲕⲩⲣⲓ Ⲁⲡⲁⲧⲏⲣ
            ⲛⲉⲙ ̀ Ⲏⲣⲁⲏ̀ ⲧⲉϥⲥⲱⲛⲓ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها الشهيدان المجاهدان السيد أبادير وإيرائى أخته ليغفر...
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="north">
        <td class="english" >Pray to the Lord on our behalf, O
            struggle mantled martyrs, Julius and those who were with him, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
            ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲓⲟⲩⲗⲓⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲛⲉⲙⲁϥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها الشهداء المجاهدون يوليوس ومن معه ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_33" class="south">
        <td class="english" >Pray: O struggle mantled martyrs, Mari
            Pahnam and Sarah his sister, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲙⲁⲣⲓ Ⲡⲁϩⲛⲁⲙ
            ⲛⲉⲙ Ⲥⲁⲣⲣⲁ ⲧⲉϥⲥⲱⲛⲓ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها الشهيدان المجاهدان ماربهنام وساره أخته ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_34" class="north">
        <td class="english" >Pray: Abba Sarapamon the Bishop, Psati
            and Gallinikos, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ : ⲛⲉⲙ
            Ⲯⲁⲧⲉ ⲛⲉⲙ Ⲅⲁⲗⲗⲓⲛⲓⲕⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا يا انبا صرابامون الاسقف وابصادى وغلينيكوس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_35" class="south">
        <td class="english" >Pray to the Lord on our behalf, O
            victorious martyrs, The Forty Saints of Sebaste, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ
            ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲓϩ̀ⲙⲉ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ Ⲥⲉⲃⲁⲥⲧⲉ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ايها الشهداء المجاهدون الأربعون قديساً بسبسطية ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_36" class="north">
        <td class="english" >Pray: Abba Piro and Athom, And John and
            Simeon, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲡⲓⲣⲱⲟⲩ ⲛⲉⲙ ̀ Ⲁⲑⲱⲙ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ
            ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياأنبا بيروه واتوم ويوحنا وسمعان ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_37" class="south">
        <td class="english" >Pray: O struggle mantled martyrs, Abba
            Epshoi and his friend Peter, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲁ̀ⲡⲁ Ⲡ̀ϣⲱⲓ
            ⲛⲉⲙ ⲡⲉϥϣ̀ⲫⲏⲣ Ⲡⲉⲧⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبا من الرب عنا أيها الشهيدان المجاهدان أبا بشوى وصديقه بطرس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_38" class="north">
        <td class="english" >Pray to the Lord on our behalf, Abba
            Eklog the priest, and Abba Epgol and Abba Kav, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁ̀ⲡⲁ ̀̀̀ Ⲕⲗⲟϫ
            ⲡⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ⲛⲉⲙ ⲁ̀ⲡⲁ ̀̀̀ Ⲡϫⲟⲗ ⲛⲉⲙ ⲁ̀ⲡⲁ Ⲕⲁⲩ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياأبا كلوج القس وابا بجول وأبا كاف ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_39" class="south">
        <td class="english" >Pray: Abba John of Heraclia, Lord
            Piphamon and Pistavros, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁ̀ⲡⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉⲙϩⲁⲣⲁⲕⲗⲓⲁ̀ : ⲛⲉⲙ
            ⲕⲩⲣⲓⲁ̀ Ⲡⲓⲫⲁⲙⲱⲛ ⲛⲉⲙ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياأبا يوحنا الهرقلى والسيد بفام وبسطوروس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_40" class="north">
        <td class="english" >Pray: Isidore and Panteleon, Sophia and
            Euphemia, That He may....</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲏⲥⲏⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲧⲉⲗⲉⲟⲛ : Ⲥⲟⲫⲓⲁ̀ ⲛⲉⲙ
            Ⲉⲩⲫⲟⲙⲓⲁ̀ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياايسيذوروس وبندلاون وصوفيا وإفوميه ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_41" class="south">
        <td class="english" >Pray to the Lord on our behalf, Lord
            Abanoub and Epto-lomeos, Apa-ekragon and Sousennius, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲕⲩⲣⲓ Ⲁⲡⲁⲛⲟⲩⲃ
            ⲛⲉⲙ Ⲡⲑⲟⲗⲟⲙⲉⲟⲥ : ⲛⲉⲙ Ⲁⲡⲁⲕ̀ⲣⲁⲅⲟⲛ ⲛⲉⲙ Ⲥⲟⲩⲥⲉⲛⲛⲓⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا ياسيدى ابانوب وابطلماوس وابكراجون وسوسنيوس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_42" class="north">
        <td class="english" >Pray: O great high priest, Abba Peter
            seal of the martyrs, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ : ⲁⲃⲃⲁ Ⲡⲉⲧⲣⲟⲥ
            ⲓⲉⲣⲟⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛ̀ⲧⲉϥ..</td>
        <td class="arabic">أطلبوا من الرب عنا يارئيس الكهنة العظيم انبا بطرس خاتم الشهداء ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_43" class="south">
        <td class="english" >Pray: O new martyrs, Pistavros and
            Arsenius, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲱ̀ ⲛⲓⲃⲉⲣⲓ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ
            ⲛⲉⲙ Ⲁⲣⲥⲉⲛⲓⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبوا من الرب عنا أيها الشهيدان الجديدان بسطوروس وارسانيوس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_44" class="north">
        <td class="english" >Pray to the Lord on our behalf, O Michael
            the hegomen, And Michael the monk, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲱ̀ Ⲙⲓⲭⲁⲏⲗ
            ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲉⲙ Ⲙⲓⲭⲁⲏⲗ ⲡⲓⲙⲟⲛⲁⲭⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياميخائيل القمص وميخائيل الراهب ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_45" class="south">
        <td class="english" >Pray: O chorus of the martyrs, Who
            suffered for the sake of Christ, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲉ̀ⲧⲁⲩϣⲉⲡ
            ⲙ̀ⲕⲁϩⲓ ⲉⲑⲃⲉ Ⲡⲭˉⲥˉ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياصفوف الشهداء الذين تألموا من أجل المسيح ليغفر.</td>
    </tr>
    <tr id="table_${tableNumber}_row_46" class="north">
        <td class="english" >Pray: Our lords and fathers who love
            their children, Abba Anthony and Abba Paul, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ
            Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياسيدى الابوين محبى أولادهما انطونيوس وأنبا بولا ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_47" class="south">
        <td class="english" >Pray to the Lord on our behalf, O three
            saints, Abba Macarii, And all their children, the cross-bearers, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ : ⲛⲉⲙ
            ⲛⲟⲩϣⲏⲣⲓ ⲛ̀ⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها الثلاثة مقارات القديسون وأولادهم لباس الصليب ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_48" class="north">
        <td class="english" >Pray: Our lords and fathers the hegomens,
            Abba John and Abba Daniel, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲛ̀ϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲁⲃⲃⲁ
            Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲇⲁⲛⲓⲏⲗ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا يا سيدى الأبوين القمصين أنبا يوحنا وأنبا دانيال ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_49" class="south">
        <td class="english" >Pray: Our lords and fathers who love
            their children, Abba Pishoi and Abba Paul, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ
            Ⲡⲓϣⲱⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا يا سيدىّ الأبوين محبى أولادهما أنبا بيشوى وأنبا بولا ليغفر..
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_50" class="north">
        <td class="english" >Pray to the Lord on our behalf, Our
            Saintly Roman fathers, Maximus and Dometius, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ
            ⲛ̀ⲣⲱⲙⲉⲟⲥ : Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبا من الرب عنا ياأبوينا القديسين الروميين مكسيموس ودوماديوس ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_51" class="south">
        <td class="english" >Pray: O Forty Nine Martyrs, The elders of
            Shiheet, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓϩ̀ⲙⲉ ⲯⲓⲧ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛⲓϧⲉⲗⲗⲟⲓ
            ⲛ̀ⲧⲉ Ϣⲓϩⲏⲧ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا أيها التسعة والاربعون شهيداً شيوخ شيهات ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_52" class="north">
        <td class="english" >Pray: O strong saint, Abba Moses, And
            John Kame, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓϫⲱⲣⲓ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ : ⲛⲉⲙ
            Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭⲁⲙⲏ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">أطلبا من الرب عنا ايها القوى القديس انبا موسي ويحنس كاما ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_53" class="south">
        <td class="english" >Pray to the Lord on our behalf, Abba
            Pachomious of the Koinonia, And Theodore his disciple, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ
            ϯⲕⲟⲓⲛⲱⲛⲓⲁ̀ : ⲛⲉⲙ Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ̀ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياانبا باخوم ابا الشركة وثيؤدورس تلميذه ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_54" class="north">
        <td class="english" >Pray: Abba Shenouda the Archimandrite,
            And Abba Wisa his disciple, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ϣⲉⲛⲟϯ ⲡⲓⲁⲣⲭⲏⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲛⲉⲙ
            ⲁⲃⲃⲁ Ⲃⲏⲥⲁ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياانبا شنوده رئيس المتوحدين وانبا ويصا تلميذه ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_55" class="south">
        <td class="english" >Pray: Abba Nopher and Abba Karus, And our
            father Paphnutius, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲛⲟⲩϥⲉⲣ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲕⲁⲣⲟⲥ : ⲛⲉⲙ
            ⲡⲉⲛⲓⲱⲧ Ⲡⲁⲫ̀ⲛⲟⲩⲧⲓⲟⲥ :ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياانبا نفر وانبا كاروس وابانا بفنوتيوس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_56" class="north">
        <td class="english" >Pray to the Lord on our behalf, Abba
            Samuel the confessor, and Justus and Apollo And his disciples, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ
            ⲡⲓⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ : ⲛⲉⲙ Ⲓⲟⲩⲥⲧⲟⲥ ⲛⲉⲙ ̀ Ⲁⲡⲟⲗⲗⲟ ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياانبا صموئيل المعترف ويسطس وأبوللو تلميذيه ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_57" class="south">
        <td class="english" >Pray: Abba Apollo and Abba Apip, And our
            father Abba Pigimi, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ ̀ Ⲁⲡⲟⲗⲗⲟ ⲛⲉⲙ ⲁⲃⲃⲁ̀ Ⲁⲡⲓⲡ : ⲛⲉⲙ
            ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲓϫⲓⲙⲓ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياانبا ابوللو وانبا ابيب وابانا انبا بيجيمى ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_58" class="north">
        <td class="english" >Pray: Abba Evkin and Abba Ehron, Abba Hor
            and Abba Phis, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲉⲩⲕⲓⲛ ⲛⲉⲙ ⲁⲃⲃⲁ ̀ Ϩⲣⲟⲛ : ⲛⲉⲙ
            ⲁ̀ⲡⲁ Ϩⲱⲣ ⲛⲉⲙ ⲁ̀ⲡⲁ Ⲫⲓⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياانبا افكين وانبا إهرون واباهور وابافيس ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_59" class="south">
        <td class="english" >Pray to the Lord on our behalf, Abba
            Parsoma and Ephrem, And John and Simeon, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ
            ⲛⲉⲙ Ⲉⲫⲣⲉⲙ : ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲥⲩⲙⲉⲱⲛ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياانبا برسوما وافريم ويوحنا وسمعان ليغفر...</td>
    </tr>
    <tr id="table_${tableNumber}_row_60" class="north">
        <td class="english" >Pray: Epiphanius and Ammonius, and
            Arshillidis and Arsenius, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲉⲡⲓⲫⲁⲛⲓⲟⲥ ⲛⲉⲙ Ⲁⲙⲙⲱⲛⲓⲟⲥ : ⲛⲉⲙ
            Ⲁⲣⲭⲏⲗⲗⲓⲧⲏⲥ ⲛⲉⲙ Ⲁⲣⲥⲉⲛⲓⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياابيفانيوس وامونيوس وارشليدس وارسانيوس ليغفر</td>
    </tr>
    <tr id="table_${tableNumber}_row_61" class="south">
        <td class="english" >Pray: Our lords, the ascetic fathers,
            Abba Abraam and George, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲛ̀ⲁⲥⲕⲏⲧⲏⲥ : ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ
            ⲛⲉⲙ Ⲅⲉⲱⲣⲅⲏ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياسيدى الابوين الناسكين انبا أبرام وجيؤرجى ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_62" class="north">
        <td class="english" >Pray to the Lord on our behalf,
            Athanasius the Apostolic, Severus and Dioscorus, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅:̀ Ⲁⲑⲛⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ : Ⲥⲉⲩⲏⲣⲟⲥ
            ⲛⲉⲙ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا يااثاناسيوس الرسولى وساويرس وديسقورس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_63" class="south">
        <td class="english" >Pray: Basil and Gregory, And our father
            Abba Cyril,That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: Ⲃⲁⲥⲓⲗⲓⲟⲥ ⲛⲉⲙ Ⲅⲣⲓⲅⲟⲣⲓⲟⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ
            Ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياباسيليوس واغريغوريوس. وابانا أنبا كيرلس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_64" class="north">
        <td class="english" >Pray: O three hundred and eighteen
            gathered at Nicea, For the faith, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲓ ϣⲟⲙⲧ ϣⲉ ⲙⲏⲧ ϣ̀ⲙⲏⲛ ⲉ̀ⲧⲁⲩ ⲑⲱⲟⲩϯ ϧⲉⲛ
            Ⲛⲓⲕⲉⲁ̀ : ⲉⲑⲃⲉ ⲡⲓⲛⲁϩϯ : ⲛ̀ⲧⲉϥ&hellip;</td>
        <td class="arabic">اطلبوا من الرب عنا أيها ال٣١٨الذين اجتمعوا فى نيقيه من اجل الايمان ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_65" class="south">
        <td class="english" >Pray to the Lord on our behalf, O the one
            hundred and fifty at Constantinople, And the two hundred at Ephesus,That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲱ̀ ⲡⲓ ϣⲉ ⲧⲉⲃⲓ
            ⲛ̀ⲧⲉ Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲩ- ⲡⲟⲗⲓⲥ: ⲛⲉⲙ ⲡⲓ ⲥ̀ⲛⲁⲩ ϣⲉ ⲛ̀ⲧⲉ ̀ Ⲉⲫⲉⲥⲟⲥ : ⲛ̀ⲧⲉϥ &hellip;</td>
        <td class="arabic">اطلبوا من الرب عنا ايها ال ١٥٠ بمدينة القسطنطينية والمائتين بأفسس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_66" class="north">
        <td class="english" >Pray: Abba Hadid and Abba John, Our great
            father Parsoma and Abba Teji, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ϩⲁⲇⲓⲇ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ : ⲛⲉⲙ
            ⲡⲉⲛⲓⲱⲧ ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲛⲉⲙ Ⲁⲃⲃⲁ Ⲧⲉϫⲓ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا ياانبا حديد وأنبا يوحنا وأبانا العظيم أنبا برسوما وأنبا رويس
            ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_67" class="south">
        <td class="english" >Pray: Abba Abraam the hegomen, And our
            father Abba Mark, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲉⲙ
            ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياأنبا ابرام القمص وابانا أنبا مرقس ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_68" class="north">
        <td class="english" >Pray to the Lord on our behalf, O chorus
            of the cross bearers, Perfected in the wilderness, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲛⲓⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ
            ⲛⲓⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ : ⲉ̀ⲧⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ϩⲓⲛⲓϣⲁϥⲉⲩ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا يامصاف لبّاس الصليب الذين كملوا فى البرارى ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_69" class="south">
        <td class="english" >Pray: Abba Joseph the righteous, and
            Thomas of the Mount of Cedars, That He may...</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲁⲃⲃⲁ Ⲓⲱⲥⲏⲫ
            ⲡⲓⲇⲓⲕⲉⲟⲥ : ⲛⲉⲙ Ⲑⲱⲙⲁⲥ ⲫⲁ ⲡⲓⲧⲱⲟⲩ ⲛ̀ϣⲉⲛⲥⲓϥⲓ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبوا من الرب عنا يا أنبا يوساب الصديق وتوماس صاحب جبل الأرز ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_70" class="north">
        <td class="english" >Pray: our father St. Makrofios: and his
            children the monks: that He may &hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
            Ⲙⲁⲕⲣⲟⲃⲓⲟⲥ : ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲁⲭⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبوا من الرب عنا ياأبينا القديس مكروفيوس: وبنيه الرهبان. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_71" class="south">
        <td class="english" >Pray: our father the ascetic saint: Abba
            Hermina the anchorite: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
            ⲛ̀ⲁⲥⲕⲩⲧⲏⲥ : ⲁⲃⲃⲁ Ϩⲱⲣⲙⲏⲛⲁ ⲡⲓⲁⲛⲁⲭⲱⲣⲓⲧⲏⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلب من الرب عنا يا أبينا القديس الناسك : أنبا هرمينا السائح. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_72" class="north">
        <td class="english" >Pray: our father the ascetic saint: Abba
            Badaba and Andrawis: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
            ⲛ̀ⲁⲥⲕⲩⲧⲏⲥ : ⲁⲃⲃⲁ Ⲡⲓⲧⲁⲡⲉ ⲛⲉⲙ Ⲁⲛⲇⲣⲉⲁⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبا من الرب عنا ياأبينا القديس الناسك: أنبا بضابا وأندراوس. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_73" class="south">
        <td class="english" >Pray: Abba Kastor and Abba Bishoy: our
            father Abba Pafnouti, Dawood, and Joseph: that He may &hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲁⲡⲁ Ⲕⲁⲥⲧⲱⲣ ⲛⲉⲙ
            ⲁⲡⲁ Ⲡⲓϣⲱⲓ : ⲛⲉⲙ ⲁⲡⲁ Ⲡⲁⲫⲛⲟⲩϯ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبوا من الرب عنا يا أنبا قسطور وأنبا بيشوى: وأنبا بفنوتى وداود ويوساب. ليغفر..
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_74" class="north">
        <td class="english" >Pray: O two perfect men: Joseph and
            Nicodemus: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲱ ⲛⲓⲣⲱⲙⲓ
            ⲛ̀ⲧⲉⲗⲓⲟⲥ : Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبا من الرب عنا أيها الرجلان الكاملان: يوسف ونيقوديموس. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_75" class="south">
        <td class="english" >Pray: Elaria and Anastasia: Anasimon and
            Erepsima: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : Ⲁⲗⲗⲁⲣⲓⲁ ⲛⲉⲙ
            Ⲁⲛⲁⲥⲧⲁⲥⲓⲁ : ⲛⲉⲙ Ⲁⲛⲁⲥⲓⲙⲱⲛ ⲛⲉⲙ Ⲁⲣⲓⲯⲓⲙⲁ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبوا من الرب عنا إيلاريه وأنسطاسيا: وأناسيمون وأريبسيما. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_76" class="north">
        <td class="english" >Pray: O the bride of Christ: Saint
            Demiana: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲱ ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ
            Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ : ϯⲁⲅⲓⲁ Ⲇⲁⲙⲓⲁⲛⲏ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبى من الرب عنا ياعروس المسيح: القديسة ديميانه. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_77" class="south">
        <td class="english" >Pray: O wise virgin ladies: the brides of
            Christ: that He may &hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲛⲓⲁⲗⲟⲩ ⲛ̀ⲥⲁⲃⲉ
            ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ : ⲛⲓϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبن من الرب عنا أيتها الفتيات العذارى الحكيمات: عرائس المسيح. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_78" class="north">
        <td class="english" >Pray: my master King Constantine: and his
            mother Queen Helen: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ
            Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ : ⲛⲉⲙ Ⲏⲗⲁⲛⲏ ϯⲟⲩⲣⲱ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبا من الرب عنا يا سيدى الملك قسطنطين: وهيلانه الملكة. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_79" class="south">
        <td class="english" >Pray: O saints of this day: each one by his
            name: that He may&hellip;</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ
            ⲡⲁⲓⲉϩⲟⲟⲩ : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        <td class="arabic">اطلبوا من الرب عنا يا قديسى هذا اليوم: كل واحد بإسمه. ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_80" class="north">
        <td class="english" >Likewise, we magnify You, with David the
            Psalmist: You are the priest forever, according to the order of Melchizedek.</td>
        <td class="coptic" >Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟⲕ : ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ
            Ⲇⲁⲩⲓⲇ : ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉⲛⲉϩ : ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
        <td class="arabic">كذلك نعظمك : مع المرتل داود قائلين: أنت هو الكاهن الى الأبد: على طقس ملشيصاداق.
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_81" class="south">
        <td class="english" >Pray: Our Holy father, the patriarch Abba
            (&hellip;), the high priest, That He may forgive us our sins. ${cross}</td>
        <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡϭⲟⲓⲥ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
            ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲁⲃⲃⲁ (...) ⲡⲓⲁⲣⲭⲓⲉⲣⲉⲩⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ. ${cross}</td>
        <td class="arabic">أطلب من الرب عنا : يا أبانا القديس البطريرك : أنبا (...) رئيس الكهنة. ليغفر لنا
            خطايانا. ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
praiseForStAnthonyTheGreat(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise for St Anthony the Great">
<caption id="caption_table_${tableNumber}" class="caption">Praise for St Anthony the Great
    <span class="arabic-caption">مديح القديس الأنبا أنطونيوس</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >In the Church of the virgins: In the pure
            assembly: Living in piety: Peniot Ava Antonios</td>
        <td class="arabic">فى كنيسة الأبكار: فى مجمع الاطهار: قائم بكل وقار: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >You are in a glorious state: In the habit
            of the eschem: In the rite of the Seraphim: Peniot Ava Antonios</td>
        <td class="arabic">قائم بمجد عظيم: مع لباس الأسكيم: فى طقس السيرافيم: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >With spiritual prayers: Living a godly
            life: You consecrated the desert: Peniot Ava Antonios</td>
        <td class="arabic">بصلاة روحانية: بحياة إلهية: دشنت البرية: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >With struggles in prayers: For many
            decades: And tears in the metanias (prostrations): Peniot Ava Antonios</td>
        <td class="arabic">بجهاد فى الصلوات: عشرات السنوات: بدموع فى الميطانيات: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >In ascetic fasts: For days at a time: With
            an unfailing spirit: Peniot Ava Antonios</td>
        <td class="arabic">بنسك فى الأصوام: على مدى الأيام: بنفس لاتنام: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >With meagerness in pleasures: Concerned in
            godly matters: And spiritual meditations: Peniot Ava Antonios</td>
        <td class="arabic">بزهد فى اللذات: بهذيذ فى الإلهيات: وتأمل فى الروحيات: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >You were given the spirit of Elijah: And
            Hanna the prophetess: And John, the son of Zacharias: Peniot Ava Antonios</td>
        <td class="arabic">أعطيت روح إيليا: وحنة النبية: ويوحنا بن زكريا: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >The devils feared you: Because of your
            upright heart: And your constant prayers: Peniot Ava Antonios</td>
        <td class="arabic">ارتاع الشياطين: من قلبك الأمين: وصلاتك كل حين: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >They fought against you daily: They tried
            each possible way: Using many tricks: Peniot Ava Antonios</td>
        <td class="arabic">حاربوك مدة طويلة: بذلوا كل وسيلة: بكم حيلة وحيلة: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >They reminded you of your sister: In order
            to worry you: So you may return to the world: Peniot Ava Antonios</td>
        <td class="arabic">بأختك ذكروك: لكيما يقلقوك: بهذا ويرجعوك: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >They scattered gold and silver: Before you
            on the mountains: Glittering in the midst of the sand: Peniot Ava Antonios</td>
        <td class="arabic">نثروا الذهب والمال: أمامك على الجبال: يضوى بين الرمال: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >They came with chants and songs: And
            images of women: To make you fall in temptation: Peniot Ava Antonios</td>
        <td class="arabic">أتوك بطرب وغناء: وصورة النساء: لتسقط فى الإغراء: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >They came with fierce visions: Of lions,
            tigers and leopards: And with sounds of thunder: Peniot Ava Antonios</td>
        <td class="arabic">وأتوك بشكل أسود: ونمور وفهود: بصياح كالرعود: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >They came with their malice: So you may
            fear their visions: Your humility cast them out: Peniot Ava Antonios</td>
        <td class="arabic">جاءوك باذاهم: لتخاف من رؤياهم: تواضعك أخزاهم: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >You proclaimed and said to them: "O you
            strong ones: I will return to dust and sand: Peniot Ava Antonios</td>
        <td class="arabic">صرخت يااقوياء: لماذا هذا العناء: تراب انا وهباء: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >I am surprised at your gathering: In my
            weakness and appearance: I am the weakest of you all.": Peniot Ava Antonios</td>
        <td class="arabic">عجبى لتجمهركم: على ضعفى وتظاهركم: أنا أضعف من أصغركم: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >O strong and high tower: You are an
            example for us all: And your humility before Satan: Peniot Ava Antonios</td>
        <td class="arabic">يا برج عالي وحصين: يامثال للمنسحقين: تتواضع للشياطين: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >You are a powerful example: Throughout the
            generations: O dweller of the mountains: Peniot Ava Antonios</td>
        <td class="arabic">ياقوة ومثال: على مدى الأجيال: ياساكن الجبال: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english" >You are great in struggles: O the wise in
            counsels: Pray on behalf of your children: Peniot Ava Antonios</td>
        <td class="arabic">ياعظيم فى جهادك: ياحكيم فى إرشادك: اشفع فى أولادك: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english" >We have not practiced your life: Nor
            acquired your likeness: Remember us in your prayers: Peniot Ava Antonios</td>
        <td class="arabic">لم نحيا كحياتك: لم نسلك فى صفاتك: فاذكرنا فى صلاتك: بنيوت آفا أنطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english" >Pray for our iniquities: And the weakness
            of our nature: For we are strangers in this world: Peniot Ava Antonios ${cross}</td>
        <td class="arabic">اشفع فى مذلتنا: وضعف طبيعتنا: فى مدة غربتنا: بنيوت آفا أنطونيوس ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
praiseForStMaximosAndDomadios(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise for St. Maximos and Domadios">
<caption id="caption_table_${tableNumber}" class="caption">Praise for St. Maximos and Domadios
    <span class="arabic-caption">مديح القديسين مكسيموس ودوماديوس</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english" >In the Name of God Our Lord: Isos
            Pichristos: Presenting the life of: Maximos and Domadios</td>
        <td class="arabic">أبدأ باسم الإله: سيدنا بى اخريستوس: واشرح فى شرف معنى: مكسيموس نيم دوماديوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english" >They took off their crowns: And cast them
            off their heads: For the love of the Heavenly King: Maximos and Domadios</td>
        <td class="arabic">بدأ بخلع التاجات: وطرحها عن الرؤس: محبة فى ملك السموات: مكسيموس نيم دوماديوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english" >Praised with hymns and songs: In the love
            of the Holy Lord: Became two great soldiers: Maximos and Domadios</td>
        <td class="arabic">صاحا بتراتيل وألحان: حباً فى الرب القدوس: وصارا أجناداً شجعان: مكسيموس نيم دوماديوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english" >Our father Abba Macarios: Described the
            brothers as: "The pride of monasticism": Maximos and Domadios</td>
        <td class="arabic">قال عنهم أبوهما: أنبا مقاريوس ثوب الرهبنة: افتخر بهما: مكسيموس نيم دوماديوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english" >Defeated all evil: By the Name of the Holy
            Lord: And lived with joy in Paradise: Maximos and Domadios</td>
        <td class="arabic">غلبوا كل الشياطين: باسم الرب القدوس: واتكئآ فى النعيم فرحين: مكسيموس نيم دوماديوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english" >Left worldly reign: And Satan was deeply
            grieved: Finally rewarded everlasting joy: Maximos and Domadios</td>
        <td class="arabic">خلصا من مُلك العالم: وخزوا إبليس المنجوس: ونالا الفرح الدايم: مكسيموس نيم دوماديوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english" >Blessed be you, our fathers: The children
            of Macarios: The stars of Shiheet: And the light of Baramus</td>
        <td class="arabic">طوباكم ياأبهات: ياأولاد مقاريوس: ياكواكب جبل شيهيت: ومصابيح دير البراموس</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english" >Just like Paradise: You the Valley of
            Natroon: The king's children dwelt in you: Maximos and Domadios</td>
        <td class="arabic">ياوادى هبيب: شبهوك الآباء بالفردوس: وأولاد الملوك سكنوك: مكسيموس نيم دوماديوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english" >A great mountain you are: Similar to
            Paradise: The home of our fathers: The monastery of Macarios</td>
        <td class="arabic">ياجبل عظيم الشأن: متشبه بالفردوس: مسكن الآباء الرهبان: إسقيط مقاريوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english" >The righteous dwelt in there: Proclaiming
            and singing Agios: Watching night and day: The children of Macarios</td>
        <td class="arabic">سكنه آباء أبرار: صارخين قائلين قدوس: سهارى ليل ونهار: أولاد مقاريوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english" >Home for barbarians you were: And shelter
            for the thieves: But Macarios converted you: To be like Paradise</td>
        <td class="arabic">يامسكن للأشرار: ومأوى للصوص: صيرك أبو مقار: متشبهاً بالفردوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english" >Blessed be you Abba Makar: Blessed be
            Macarios: The father of Shiheet: Cleanser of rusting souls</td>
        <td class="arabic">طوباك أيها البار: طوباك يامقاريوس: أنت لشيهيت فخار: مع الآباء الرؤوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english" >Hail to the three Macarii: And all the
            head fathers: Dwelling in Shiheet: The monastery of Macarios</td>
        <td class="arabic">وسلامى للثلاثة مقارات: وكل الآباء الرؤوس: السكان بجبل شيهيت: إسقيط مقاريوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english" >Hail to Abba Youanis: The hegomen
            (protopriest): And to Abba Pishoy: Pi romi ente leeos</td>
        <td class="arabic">وسلامى لأنبا يؤنس: بى هيغومينوس: والأب أنبا بيشوى: بى رومى إنتى ليوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english" >Hail to Abba Daniel: And to Abba Isidore:
            And the exceedingly honored: Abba Arsanios</td>
        <td class="arabic">وسلامى لأنبا دانيال: والأب أنباايسيذورس: والمكرم بكل الاكرام: الانبا أرسانيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english" >Never forget our Pope: When praying to the
            Holy Lord: And his partners our bishops: And all the holy orders</td>
        <td class="arabic">ولاتنسوا بطركنا: عند الرب القدوس: انبا (...) قدوتنا: نيم نين يوتى إن نى إيبيسكوبوس
        </td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english" >Please remember O Lord: The ranks of monks:
            And all the Christians: Grant them Your mercies</td>
        <td class="arabic">لاتنسى ياسيدنا: طغمات نى موناخوس: وكل مراتب ملتنا: بى أواى إن نى اخريستيانوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english" >Hail to Saint Mary: The intercessor for
            all people: The great honored name: Our guide to Paradise ${cross}</td>
        <td class="arabic">وسلامى إلى مريم: الشفيعة فى كل جنوس: صاحبة الاسم الأعظم وتوصلنا إلى الفردوس ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
praiseForStSamuelTheConfessor(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise for St Samuel the Confessor">
<caption id="caption_table_${tableNumber}" class="caption">Praise for St Samuel the Confessor
    <span class="arabic-caption">مديح القديس الأنبا صموئيل المعترف</span>
</caption>
<tbody>
    <tr id="table_${tableNumber}_row_0" class="north">
        <td class="english">Among the confessors: Pride of the strivers: A star among the saints: Peniout Ava Samuel</td>
        <td class="arabic" >في صفوف المعترفين: فخر المجاهدين: نجم بين القديسين: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_1" class="north">
        <td class="english">With a divine invitation: You aimed for the desert: With love full of fire: Peniout Ava Samuel</td>
        <td class="arabic" >بدعوة الهية: قصدت البرية: في محبة نارية: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="south">
        <td class="english">An angel full of purity: Has led you with bravery: To the Eskiet of Abba Makarious: Peniout Ava Samuel</td>
        <td class="arabic" >ملاك كله طهارة: إقتادك بمهارة: لإسقات انبا مقار: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="south">
        <td class="english">To an elder among the monks: An ascetic all his life: Who defeated Satan the enemy: Our father Avva Aghason</td>
        <td class="arabic" >لشيخ بين الرهبان: ناسكاً كل الزمان: قهر العدو: الشيطان بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="north">
        <td class="english">He advised you on chastity: And love full of purity: And also staying lowly: Peniout Ava Samuel</td>
        <td class="arabic" >نصحك بالبتولية: والمحبة النقية: والتواضع بوصية: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="north">
        <td class="english">Through his grace: You were given double from his spirit: At the time of his departure: Peniout Ava Samuel</td>
        <td class="arabic" >أعطيت بنعمته: ضعفين من روحه: عند نياحته: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="south">
        <td class="english">With pain, you increased your load: Enslaving your ego: Gaining more love for your God: Peniout Ava Samuel</td>
        <td class="arabic" >زدت من اتعابك: وقهرت لذاتك: وحبك لالهك: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="south">
        <td class="english">You attained fatherhood of Antonious: And the love of Makarious: Also the faith of Dioskoros: Peniout Ava Samuel</td>
        <td class="arabic" >نلت ابوة انطونيوس: محبة مقاريوس: وايمان ديسقوروس: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="north">
        <td class="english">With your pure aroma: And your fellowship with God: You filled the whole desert: Peniout Ava Samuel</td>
        <td class="arabic" >برائحتك الذكية: وعشرتك الالهية: ملأت البرية: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_9" class="north">
        <td class="english">You've taught them monasticism: And life of asceticism: And the teaching of Orthodoxy: Peniout Ava Samuel</td>
        <td class="arabic" >علمتهم الرهبانية: والحياة النسكية: وتعاليم الارثوذكسية: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="south">
        <td class="english">Muqauqus sent a proclamation: Written by Satan: To all the monk fathers: Peniout Ava Samuel"</td>
        <td class="arabic" >ارسل القوقس بيان: مكتوب من الشيطان: الي الاباء الرهبان: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_11" class="south">
        <td class="english">Calling for the "Two Natures": Without being unified: Pertaining to our Savior: Our God Emmanuel</td>
        <td class="arabic" >يقول بطبيعتين: وغير متحدين: للرب الفادي: الامين لإلهنا عمانوئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="north">
        <td class="english">He threatened to kill all those: Who confess the "Only Begotten Son": And who follow the loving father: That is Avva Benjamin</td>
        <td class="arabic" >هدد بقتل ووعيد: من يعترف بالابن الوحيد: ويتبع باباه: الحبيب الانبا بينيامين</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="north">
        <td class="english">They ambushed the desert: The strong and evil ones: You refused them with all your strength: Peniout Ava Samuel</td>
        <td class="arabic" >هجم علي الصحراء: الاشرار الاقوياء: ورفضت بشمم وابادة: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="south">
        <td class="english">You confessed, I believe in Christ: A true and sincere confession: And tore apart the proclamation: Peniout Ava Samuel</td>
        <td class="arabic" >اعترف بالمسيح: اعتراف صادق صريح: ومزقت التصريح: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="south">
        <td class="english">One nature that is pure: Divinity and Humanity: Completely unified: Peniout Ava Samuel</td>
        <td class="arabic" >طبيعة نقية واحدة: لاهوتية وناسوتية: متحدة بالكلية: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="north">
        <td class="english">The Incarnated "Logos": Our God dwelt among us: And we saw His great glory: Peniout Ava Samuel</td>
        <td class="arabic" >الكلمة صار جسداً: الإله صار معنا: وراينا مجده مجدا: بنيوت افا صوئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="north">
        <td class="english">They struck you with their strong hands: And whipped you without mercy: The faith is a "Precious Gift": Peniout Ava Samuel</td>
        <td class="arabic" >ضربوك بايدي قوية: جلدوك في وحشية: الايمان وديعة غالية: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="south">
        <td class="english">With a true faith you've confessed: That Christ is your safe tower: They plucked out your right eye: Peniout Ava Samuel</td>
        <td class="arabic" >اعترف بايمان ويقين: بيسوع برجك الحصين: قلعوا عينك اليمين: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_19" class="south">
        <td class="english">Four monks you've instructed: To hold strong, unto the faith: They dwelt in the "Kolomoun": Peniout Ava Samuel</td>
        <td class="arabic" >اوصيت اربعة رهبان: ليحفظوا الايمان: اتخذوا القلمون مكان: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="north">
        <td class="english">You've blessed it with your prayers: And your worshiping with tears: Crucifying your ego: Peniout Ava Samuel</td>
        <td class="arabic" >قدسته بصلاتك: ودموعك ومطانياتك: وصلبك لذاتك: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_21" class="north">
        <td class="english">The vicious Barbarians tried: To ruin your vow of celebacy: You cried to Christ your helper: Peniout Ava Samuel</td>
        <td class="arabic" >حاول البربر المتجبرين: كسر نزر البتولية: صرخت ليسوع المسيح: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="south">
        <td class="english">A lame man passed by you: With a heart full of sorrow: With God's power you cured him: Peniout Ava Samuel</td>
        <td class="arabic" >مر بك كسيح: بقلب جريح كئيب: شفيته بقوة المسيح: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="south">
        <td class="english">A spring of healing you became: To all the sick and lame: Even the barbarian enemy: Peniout Ava Samuel</td>
        <td class="arabic" >صرت ينبوع شفاء: لكل مرض وداء: حتى البربر والاعداء: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="north">
        <td class="english">Their Barbarian leader: Told you O righteous man: My wife is barren: Peniout Ava Samuel</td>
        <td class="arabic" >قائد البربر الجبار: سألك ايها البار: زوجتي عاقر محتار: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="north">
        <td class="english">You asked God the Father: With faith that is strong and true: He answered and gave her an offspring: Peniout Ava Samuel</td>
        <td class="arabic" >طلبت من الله الاب: بايمان غير مرتاب: فوهبهما الانجاب: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="south">
        <td class="english">To your children you returned: And much from you they learned: And many glories you have gained: Peniout Ava Samuel</td>
        <td class="arabic" >عدت لأولادك: ليتعلموا جهادك: وفزت بامجادك: بنيوت افا صوئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_27" class="south">
        <td class="english">Remember us in your prayers: Before the throne of God: To forgive us the sinners: Peniout Ava Samuel</td>
        <td class="arabic" >اذكرنا في الصلاة: امام عرش الإله: ليرحمنا نحن الخطاة: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="north">
        <td class="english">Pray to the just Judge: To confirm us in the faith: To the end of all ages: Peniout Ava Samuel</td>
        <td class="arabic" >صلي عنا للديان: يثبتنا في الايمان: الي اخر الازمان: بنيوت افا صموئيل</td>
    </tr>
    <tr id="table_${tableNumber}_row_29" class="north">
        <td class="english">O Lord please preserve: Our Pope and the bishops with him: Also our monks and clergy: T hrough the prayers of Abba Samuel ${cross}</td>
        <td class="arabic" >احفظ يا رب بطركنا: وشركاؤه اساقفنا: ورهبانا وكهنتنا: بصلاة الانبا صموئيل ${cross}</td>
    </tr>
</tbody>
</table>`;
    return html;
}
,
fourthCanticleKiahk(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="4th Canticle">
        <caption id="caption_table_${tableNumber}" class="caption">4th Canticle
            <span class="arabic-caption">الهوس الرابع</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Praise the Lord from the heavens:
                    Alleluia. Praise Him in the heights.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ Ⲁ̅ⲗ̅ :
                    ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ.</td>
                <td class="arabic">سبحوا الرب من السموات الليلويا. سبحوه فى الأعالى.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >Praise Him, all His angels: Alleluia.
                    Praise Him, all His hosts.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲛⲉϥⲁⲅⲅⲉⲗⲟⲥ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅: ⲥ̀ⲙⲟⲩ
                    ⲉ̀ⲣⲟϥ ⲛⲉϥⲇⲩⲛⲁⲙⲓⲥ ⲧⲏⲣⲟⲩ.</td>
                <td class="arabic">سبحوه ياجميع ملائكته الليلويا. سبحوه يا جميع جنوده.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >Praise Him, sun and moon: Alleluia.
                    Praise Him all you stars of light.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲡⲓⲣⲏ ⲛⲉⲙ ⲡⲓⲓⲟϩ Ⲁ̅ⲗ̅ : ⲥ̀ⲙⲟⲩ
                    ⲉⲣⲟϥ ⲛⲓⲥⲓⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic">سبحيه ايتها الشمس والقمر الليلويا. سبحيه ياجميع كواكب النور.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >Praise Him you heavens of heavens:
                    Alleluia. And you waters above the heavens.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀ Ⲁ̅ⲗ̅ :
                    ⲛⲉⲙ ⲛⲓⲕⲉⲙⲱⲟⲩ ⲉⲧⲥⲁ ⲡ̀ϣⲱⲓ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
                <td class="arabic">سبحيه يا سماء السموات الليلويا وياايتها المياه التى فوق السموات.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Let them praise the Name of the Lord:
                    Alleluia. For He commanded and they were created.</td>
                <td class="coptic" >Ⲙⲁⲣⲟⲩⲥ̀ⲙⲟⲩ ⲧⲏⲣⲟⲩ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡϭⲟⲓⲥ Ⲁ̅ⲗ̅ : ϫⲉ
                    ⲛ̀ⲑⲟϥ ⲁϥϫⲟⲥ ⲟⲩⲟϩ ⲁⲩϣⲱⲡⲓ.</td>
                <td class="arabic">لتسبح جميعها لاسم الرب الليلويا. لانه قال فكانت.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >He has ordered: And they were created,
                    Alleluia. He has established them forever and ever.</td>
                <td class="coptic" >̀ Ⲛⲑⲟϥ ⲁϥϩⲟⲛϩⲉⲛ ⲟⲩⲟϩ ⲁⲩⲥⲱⲛⲧ Ⲁ̅ⲗ̅: ⲁϥⲧⲁϩⲱⲟⲩ
                    ⲉ̀ⲣⲁⲧⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">وأمر فخلقت الليلويا. اقامها إلى الأبد والى ابد الابد.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >He has made a decree: which shall not
                    pass away, Alleluia. Praise the Lord from the earth.</td>
                <td class="coptic" >Ⲁ̀ϥⲭⲱ ⲛ̀ⲟⲩϩⲱⲛ ⲟⲩⲟϩ ⲛ̀ⲛⲉϥⲥⲓⲛⲓ Ⲁ̅ⲗ̅ : ⲥ̀ⲙⲟⲩ
                    ⲉ̀Ⲡϭⲟⲓⲥ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡ̀ⲭⲁϩⲓ.</td>
                <td class="arabic">وضع لها امرا فلن تتجاوزه الليلويا. سبحى الرب من الارض</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >You great sea creatures and all the
                    depths: Alleluia Fire and hail, snow and clouds, and stormy wind, fulfilling His word.</td>
                <td class="coptic" >Ⲛⲓⲇ̀ⲣⲁⲕⲱⲛ ⲛⲉⲙ ⲛⲓⲛⲟⲩⲛ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅: ⲟⲩⲭ̀ⲣⲱⲙ
                    ⲟⲩⲁⲗ ⲟⲩⲭⲓⲱⲛ ⲟⲩⲭ̀ⲣⲩⲥⲧⲁⲗⲗⲟⲥ ⲟⲩⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲥⲁⲣⲁⲑⲏⲟⲩ ⲛⲏⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲉϥⲥⲁϫⲓ.</td>
                <td class="arabic">ايتها التنانين وجميع الاعماق الليلويا النار والبرد والثلج والجليد والريح العاصفة
                    الصانعة كلمته.</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >Mountains and all hills: Alleluia.
                    Fruitful trees and all cedars.</td>
                <td class="coptic" >Ⲛⲓⲧⲱⲟⲩ ⲉⲧϭⲟⲥⲓ ⲛⲉⲙ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟⲩ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅:
                    ⲛⲓϣ̀ϣⲏⲛ ⲙ̀ϥⲁⲓⲟⲩⲧⲁϩ ⲛⲉⲙ ⲛⲓϣⲉⲛⲥⲓϥⲓ ⲧⲏⲣⲟⲩ.</td>
                <td class="arabic">الجبال العالية وجميع الآكام الليلويا. الاشجار المثمرة وكل الأرز.</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english" >Beasts and all cattle: Alleluia. Creeping
                    things and flying birds.</td>
                <td class="coptic" >Ⲛⲓⲑⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅:
                    ⲛⲓϭⲁⲧϥⲓ ⲛⲉⲙ ⲛⲓϩⲁⲗⲁϯ ⲉⲧⲟⲓ ⲛ̀ⲧⲉⲛϩ.</td>
                <td class="arabic">الوحوش وكل البهائم الليلويا. الهوام وكل الطيور ذات الاجنحة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english" >Kings of the earth and all people:
                    Alleluia. Princes and all judges of the earth.</td>
                <td class="coptic" >Ⲛⲓⲟⲩⲣⲱⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ Ⲁ̅ⲗ̅
                    : ⲛⲓⲁⲣⲭⲱⲛ ⲛⲉⲙ ⲛⲓⲣⲉϥϯϩⲁⲡ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ.</td>
                <td class="arabic">ملوك الارض وكل الشعوب الليلويا. الرؤساء وكل حكام الارض.</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english" >Both young men and maidens: Alleluia. Old
                    men and children.</td>
                <td class="coptic" >Ϩⲁⲛϧⲉⲗϣⲓⲣⲓ ⲛⲉⲙ ϩⲁⲛⲡⲁⲣⲑⲉⲛⲟⲥ Ⲁ̅ⲗ̅: ϩⲁⲛϧⲉⲗⲗⲟⲓ
                    ⲛⲉⲙ ϩⲁⲛⲁ̀ⲗⲱⲟⲩⲓ̀.</td>
                <td class="arabic">الشبان والعذارى الليلويا. الشيوخ والصبيان.</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english" >Let them praise the Name of the Lord:
                    Alleluia. For His Name alone is exalted.</td>
                <td class="coptic" >Ⲙⲁⲣⲟⲩⲥ̀ⲙⲟⲩ ⲧⲏⲣⲟⲩ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡϭⲟⲓⲥ Ⲁ̅ⲗ̅ : ϫⲉ
                    ⲁϥϭⲓⲥⲓ ⲛ̀ϫⲉ ⲡⲉϥⲣⲁⲛ ⲙ̀ⲙⲁⲩⲁⲧϥ.</td>
                <td class="arabic">فليسبحوا جميعاً اسم الرب الليلويا. لانه قد تعالى اسمه وحده.</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english" >His glory is above the earth and heaven:
                    Alleluia. And He has exalted the horn of His people.</td>
                <td class="coptic" >Ⲡⲉϥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ϣⲟⲡ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ
                    ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲧ̀ⲫⲉ Ⲁ̅ⲗ̅ : ϥ̀ⲛⲁϭⲓⲥⲓ ⲙ̀ⲡ̀ⲧⲁⲡ ⲛ̀ⲧⲉ ⲡⲉϥⲗⲁⲟⲥ.</td>
                <td class="arabic">شكره كائن على الارض وفى السماء الليلويا. ويرفع قرن شعبه.</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english" >The praise of all His saints: Alleluia.
                    The children of Israel, a people near unto Him.</td>
                <td class="coptic" >Ⲟⲩⲥ̀ⲙⲟⲩ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁϥ Ⲁ̅ⲗ̅ :
                    ⲛⲉⲛϣⲏⲣⲓ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ ⲡⲓⲗⲁⲟⲥ ⲉⲧϧⲉⲛⲧ ⲉ̀ⲣⲟϥ.</td>
                <td class="arabic">سبحاً لجميع قديسيه الليلويا. بنى اسرائيل الشعب القريب اليه.</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english" >Alleluia,Alleluia,Alleluia</td>
                <td class="coptic" >Ⲁ̅ⲗ̅ Ⲁ̅ⲗ̅ Ⲁ̅ⲗ̅</td>
                <td class="arabic"> الليلويا الليلويا
                    الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english" >Sing to the Lord a new song: Alleluia.
                    And His praise in the congregation of the saints.</td>
                <td class="coptic" >Ⲅⲱ ⲙ̀Ⲡϭⲟⲓⲥ ϧⲉⲛ ⲟⲩϫⲱ ⲙ̀ⲃⲉⲣⲓ Ⲁ̅ⲗ̅ : ϫⲉ ⲁ̀ⲣⲉ
                    ⲡⲉϥⲥ̀ⲙⲟⲩ ϧⲉⲛ ⲧⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲛ̀ⲧⲉⲛⲏⲉⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">انشدوا للرب نشيداً جديداً الليلويا. لان تسبحته فى بيعة القديسين.</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english" >Let Israel rejoice in their maker:
                    Alleluia. Let the children of Zion be joyful in their King.</td>
                <td class="coptic" >Ⲙⲁⲣⲉϥⲟⲩⲛⲟϥ ⲛ̀ϫⲉ Ⲡⲓⲥⲣⲁⲏⲗ ⲉϫⲉⲛ ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟϥ
                    Ⲁ̅ⲗ̅: ⲛⲉⲛϣⲏⲣⲓ ⲛ̀Ⲥⲓⲱⲛ ⲙⲁⲣⲟⲩⲑⲉⲗⲏⲗ ⲉ̀ϫⲉⲛ ⲡⲟⲩⲟⲩⲣⲟ.</td>
                <td class="arabic">فليفرح إسرائيل بخالقه الليلويا. وبنوا صهيون فليتهللوا بملكهم.</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english" >Let them praise His Name in the chorus:
                    Alleluia. Let them sing praises unto Him with timbrel and harp.</td>
                <td class="coptic" >Ⲙⲁⲣⲟⲩⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ⲟⲩⲭⲟⲣⲟⲥ
                    Ⲁ̅ⲗ̅: ϧⲉⲛ ⲟⲩⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ ⲙⲁⲣⲟⲩⲉⲣⲯⲁⲗⲓⲛ ⲉ̀ⲣⲟϥ.</td>
                <td class="arabic">فليسبحوا اسمه القدوس بصف الليلويا. بدف ومزمار فليرتلوا له.</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="english" >For the Lord takes pleasure in His
                    people: Alleluia. He will raise the meek with salvation.</td>
                <td class="coptic" >Ϫⲉ Ⲡϭⲟⲓⲥ ⲛⲁϯⲙⲁϯ ⲉ̀ϫⲉⲛ ⲡⲉϥⲗⲁⲟⲥ Ⲁ̅ⲗ̅ :
                    ϥ̀ⲛⲁϭⲓⲥⲓ ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ ϧⲉⲛ ⲟⲩⲟⲩϫⲁⲓ.</td>
                <td class="arabic">لان الرب يُسر بشعبه الليلويا. يعلى الودعاء بالخلاص.</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="south">
                <td class="english" >Let the saints be joyful in glory:
                    Alleluia. Let them sing aloud on their beds.</td>
                <td class="coptic" >Ⲉⲩⲉ̀ϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϫⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ
                    Ⲁ̅ⲗ̅: ⲉⲩⲉ̀ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲱⲟⲩ ϩⲓϫⲉⲛ ⲛⲟⲩⲙⲁⲛ̀ⲉⲛⲕⲟⲧ.</td>
                <td class="arabic">يفتخر القديسون بمجد الليلويا. ويتهللون على مضاجعهم.</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english" >Let the high praises of God be in their
                    mouth: Alleluia. And a two edged sword in their hand.</td>
                <td class="coptic" >Ⲛⲓϭⲓⲥⲓ ⲛ̀ⲧⲉ Ⲫϯ ⲉⲧⲭⲏ ϧⲉⲛ ⲧⲟⲩϣ̀ⲃⲱⲃⲓ Ⲁ̅ⲗ̅:
                    ϩⲁⲛⲥⲏϥⲓ ⲛ̀ⲣⲟ ⲥ̀ⲛⲁⲩ ⲉⲧⲭⲏ ϧⲉⲛ ⲛⲟⲩϫⲓϫ.</td>
                <td class="arabic">تعليات الله فى حناجرهم الليلويا. وسيوف ذات حدين فى أيديهم.</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english" >To execute vengeance on the nations:
                    Alleluia. And punishments on the people.</td>
                <td class="coptic" >˙ Ⲉⲡ̀ϫⲓⲛⲓ̀ⲣⲓ ⲛ̀ⲟⲩϭⲓⲙ̀ⲡ̀ϣⲓϣ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ
                    Ⲁ̅ⲗ̅: ⲛⲉⲙ ϩⲁⲛⲥⲟϩⲓ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ.</td>
                <td class="arabic">ليصنعوا نقمة فى الامم الليلويا. وتوبيخات فى الشعوب.</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english" >To bind their kings with chains:
                    Alleluia. And their nobles with fetters of iron.</td>
                <td class="coptic" >Ⲉ̀ⲡ̀ϫⲓⲛⲥⲱⲛϩ ⲛ̀ϩⲁⲛⲟⲩⲣⲱⲟⲩ ϧⲉⲛ ϩⲁⲛⲡⲉⲇⲏⲥ Ⲁ̅ⲗ̅:
                    ⲛⲉⲙ ⲛⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲧⲱⲟⲩ ϧⲉⲛ ϩⲁⲛⲡⲉⲇⲏⲥ ⲛ̀ϫⲓϫ ⲙ̀ⲃⲉⲛⲓⲡⲓ.</td>
                <td class="arabic">ليوثقوا ملوكهم بقيود الليلويا. واشرافهم باغلال للايدى من حديد.</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english" >To execute on them the written judgment:
                    Alleluia. This honor have all His saints.</td>
                <td class="coptic" >̀ Ⲉⲡ̀ϫⲓⲛⲓ̀ⲣⲓ ⲛ̀ϧⲏⲧⲟⲩ ⲛ̀ⲟⲩϩⲁⲡ ⲉϥⲥ̀ϧⲏⲟⲩⲧ
                    ⲁˉⲗˉ : ⲡⲁⲓⲱ̀ⲟⲩ ⲫⲁⲓ ⲁϥϣⲟⲡ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁϥ.</td>
                <td class="arabic">ليصنعوا بهم حكما مكتوباً الليلويا. هذا المجد كائن فى جميع قديسيه.</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english" >Alleluia, Alleluia, Alleluia.</td>
                <td class="coptic" >Ⲁ̅ⲗ̅ ⲁ̅ⲗ̅ ⲁ̅ ⲗ̅.</td>
                <td class="arabic">الليلويا الليلويا الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english" >Praise God, in all his saints. Alleluia.
                </td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲫⲛⲟⲩϯ ϧⲉⲛ ⲛⲏⲉ̀ⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁϥ.
                    Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوا الله في جميع قديسيه</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="south">
                <td class="english" >Praise Him, in the firmament of his
                    power. Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛ̀ⲧⲉ ⲧⲉϥϫⲟⲙ.
                    Ⲁ̅ⲗ̅.</td>
                <td class="arabic">سبحوه في جلد قوته الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english" >Praise Him, for His mighty acts.
                    Alleluia.</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ϩⲓϫⲉⲛ ⲧⲉϥⲙⲉⲧϫⲱⲣⲓ.
                    Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوه على مقدرته الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english" >Praise Him, according to the multitudes
                    of His greatness. Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲕⲁⲧⲁ ⲡ̀ⲁϣⲁⲓ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ.
                    Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوه ككثرة عظمته الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="north">
                <td class="english" >Praise Him, with the sound of the
                    trumpet. Alleluia</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ. ⲀⲖ.
                </td>
                <td class="arabic">سبحوه بصوت البوق الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="south">
                <td class="english" >Praise Him, with psaltery and harp.
                    Alleluia</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲯⲁⲗ ⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲩⲑⲁⲣⲁ.
                    ⲀⲖ</td>
                <td class="arabic">سبحوه بمزمار وقيثارة الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_37" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english" >Praise Him, with timbrel and chorus.
                    Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ϩⲁⲛⲭⲟⲣⲟⲥ.
                    ⲀⲖ.</td>
                <td class="arabic">سبحوه بدفوف وصفوف الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="south">
                <td class="english" >Praise Him, with strings and organs.
                    Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲁⲡ ⲛⲉⲙ ⲟⲩⲟⲣⲅⲁⲛⲟⲛ. ⲀⲖ.
                </td>
                <td class="arabic">سبحوه بأوتار وأرغن الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_41" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="north">
                <td class="english" >Praise Him, with pleasant sounding
                    cymbals. Alleluia.</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲉ̀ⲛⲉⲥⲉ
                    ⲧⲟⲩⲥ̀ⲙⲏ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوه بصنوج حسنة الصوت الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="south">
                <td class="english" >Praise Him, upon the cymbals of joy.
                    Alleluia.</td>
                <td class="coptic" >Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙ ⲃⲁⲗⲟⲛ ⲛ̀ⲧⲉ
                    ⲟⲩⲉ̀ϣ̀ⲗⲏⲗⲟⲩⲓ̀. ⲀⲖ</td>
                <td class="arabic">سبحوه بصنوج التهليل الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_45" class="refrain">
                <td class="english" >Unto our God is due glory and the Praise.
                    Praise the Lord our God with a joyful psalm.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ϫⲉ ⲡⲓⲱⲟⲩ ⲛⲉⲙ
                    ⲡⲓⲥ̀ⲙⲟⲩ. ̀ Ⲥⲙⲟⲩ ⲉ̀Ⲡϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯⲁⲗⲙⲟⲥ.</td>
                <td class="arabic">يليق لإلهنا المجد والتسبيح. سبحوا الرب الهنا بحسن المزمار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="north">
                <td class="english" >Let everything that has breath praise the
                    name of the Lord our God. Alleluia.</td>
                <td class="coptic" >Ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲣⲟⲩⲥ̀ⲙⲟⲩ ⲧⲏⲣⲟⲩ ⲉ̀ϥ̀ⲣⲁⲛ
                    ⲙ̀Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ. Ⲁ̅ⲗ̅</td>
                <td class="arabic">كل نسمة فلتسبح اسم الرب الهنا الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="south">
                <td class="english" >Glory be to The Father, and The Son, and
                    The Holy Spirit. Alleluia.</td>
                <td class="coptic" >Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ̀ ⲕⲉ Ⲁⲅⲓⲱ̀ Ⲡⲛⲉⲩⲙⲁⲧⲓ.
                    Ⲁ̅ⲗ̅.</td>
                <td class="arabic">المجد للآب والأبن والروح القدس الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="north">
                <td class="english" >Now and forever and unto the ages of the
                    ages Amen. Alleluia.</td>
                <td class="coptic" >Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ
                    ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.; Ⲁ̅ⲗ̅.</td>
                <td class="arabic">الآن وكل أوان وإلى دهر الداهرين آمين الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_49" class="south">
                <td class="english" >Alleluia. Alleluia. Glory to You our God.
                    Alleluia.</td>
                <td class="coptic" >Ⲁ̅̅ⲗ̅ Ⲁ̅ⲗ̅ Ⲇⲟⲝⲁ ⲥⲓ ⲟ̀ Ⲑⲉⲟⲥ
                    ⲏ̀ⲙⲱⲛ Ⲁ̅ⲗ.</td>
                <td class="arabic">المجد لإلهنا الليلويا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_50" class="north">
                <td class="english" >Alleluia. Alleluia. Glory be to our God.
                    Alleluia. ${cross}</td>
                <td class="coptic" >Ⲁ̅̅ⲗ̅ Ⲁ̅̅ⲗ̅ Ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ Ⲁ̅ⲗ. ${cross}</td>
                <td class="arabic">المجد لإلهنا الليلويا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}
,
praiseAdamOnAikoti(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Praise Adam on Aikoti (I Praise a Virgin and Bride)">
        <caption id="caption_table_${tableNumber}" class="caption">Praise Adam on Aikoti <br />(I Praise a Virgin and Bride)
            <span class="arabic-caption">مديح آدم على ايكوتى <br /> (امدح عذراء وبتول)</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >I praise a virgin and bride: With her help
                    I speak: And cry aloud saying: Hail to you O Mary</td>
                <td class="arabic">امدح عذراء وبتول: بمعونتها اتكلم: واصيح بأعلى صوت واقول: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="north">
                <td class="english" >Gabriel announced to you: The divine birth:
                    He spoke and preached in joy: Hail to you O Mary</td>
                <td class="arabic">بشرك غبريال: بالميلاد الأعظم: بالبشرى سر وقال: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="south">
                <td class="english" >Come now everyone: Today to approach: And I
                    will praise with you: Hail to you O Mary</td>
                <td class="arabic">تعالوا باجمعكم: اليوم لنتقدم: واصيح أنا معكم: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >The great among nations: Who&rsquo;s
                    dwelling in darkness: The Lord&rsquo;s light shined on them: Hail to you O Mary</td>
                <td class="arabic">جليل الأمم: الشعب الجالس فى الظلام: اشرق عليه نور الرب: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >The Lord swore to David: In truth and did
                    not relent: Your Son fulfilled the oath: Hail to you O Mary</td>
                <td class="arabic">حلف الرب لداود: بالحق ولم يندم: وبإبنك تم الموعود: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english" >He saved Adam and his offspring: Form the
                    fire of Hell: And returned him to his grace: Hail to you O Mary</td>
                <td class="arabic">خلص آدم وبنيه: من نار جهنم: ورددته إلى نعيم كان فيه: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english" >David is glad today: He rejoiced with us
                    when: His psalms were fulfilled: Hail to you O Mary</td>
                <td class="arabic">داود اليوم مسرور: فرح معنا حين تم: كلامه في المزمور: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >That chosen pregnancy: To the prudent, a
                    mystery: A plant without seed: Hail to you O Mary</td>
                <td class="arabic">ذاك الحبل المختار: اعجوبة لمن يفهم: كزرع بغير بذار: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >Abraham, head of the patriarchs: Rejoiced
                    at the fulfillment: Of the oath the Lord promised: Hail to you O Mary</td>
                <td class="arabic">رأس الآباء إبراهيم: فرح لتمام قسم: من الرب له قديم: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="english" >Curse and shame were removed: From us for
                    He had mercy: When He dwelt in our lady: Hail to you O Mary</td>
                <td class="arabic">زالت اللعنة والعار: عنا وقد رحم: إذا حل في سيدة الأبكار: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english" >A heaven you are and an example: To all
                    who came before: And all those to come: Hail to you O Mary</td>
                <td class="arabic">سماء أنت ومثال: لجميع من تقدم: وإلى كل الأجيال: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english" >Isaiah witnessed in truth: That the Son
                    will incarnate: And will be born of you: Hail to you O Mary</td>
                <td class="arabic">شهد بالحق أشعياء: إن الابن يتجسم: ويولد منك ازليا: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english" >The star became a sign: And guided the
                    Magi: To the place of Emmanuel: Hail to you O Mary</td>
                <td class="arabic">صار النجم كالدليل: للمجوس وتقدم: ووقف حيث عمانوئيل: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english" >They saw the light of the star: Guiding
                    them in the darkness: To Herod they confirmed the news: Hail to you O Mary</td>
                <td class="arabic">ضوء النجم نظروه: وأرشدهم فى الظلام: ولهيرودس حققوه: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english" >Herod, the deceiver thought: That Christ
                    is an earthly king: He ordered to kill Him: Hail to you O Mary</td>
                <td class="arabic">طلب المكار ورضى: قتل المولود وزعم: إنه ملك أرضي: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english" >The wise men went forth: Offered gifts
                    joyfully: Myrrh, gold, and frankincense: Hail to you O Mary</td>
                <td class="arabic">ظفر به الفرسان: وكل منهم قدم: المر والذهب واللبان: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english" >My mind is confused: My tongue can not
                    speak: Unable to describe you: Hail to you O Mary</td>
                <td class="arabic">عقلي في وصفك حيران: وانا حقاً أعلم: إني عاجز اللسان: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english" >My mind is pondering: He who gave us life:
                    How He fled to Mount Qosqam: Hail to you O Mary</td>
                <td class="arabic">غاب عقلي وهام: في من احيانا بعد عدم: كيف هرب لجبل قسقام: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english" >They bathed Him in Matareya: So the Balsam
                    tree sprouted: From it we make Myroon (Holy Oil): Hail to you O Mary</td>
                <td class="arabic">في المطرية حموه: فطلع شجر البلسم: منه الميرون صنعوه: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english" >Prophets spoke with the Spirit: About what
                    was revealed: And in the Book explained: Hail to you O Mary</td>
                <td class="arabic">قال الآنبياء بالروح: لما اوحى وألهم: وفى الكتاب مشروح: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english" >How many wonders: And miracles and
                    mysteries: The prudent may wonder: Hail to you O Mary</td>
                <td class="arabic">كم لك من أعاجيب: ومن آيات عظام: تحير فيها اللبيب: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english" >Save for the Lord God: Who came and saved
                    Adam: We would still be in captivity: Hail to you O Mary</td>
                <td class="arabic">لولا الرب الإله: لخلاص آدم تقديم: لدمنا في رق اعداه: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english" >Moses received on Mount Sinai: The mount
                    of the red sea: Two tablets from his Lord: Hail to you O Mary</td>
                <td class="arabic">موسى في طور سين: وجبل بحر القلزم: اعطاه ربه لوحين: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english" >You are like the Ten Commandments: Written
                    without pen: And like the burning bush: Hail to you O Mary</td>
                <td class="arabic">نظير العشر الكلمات: كتبت بغير قلم: ورآك عوسج بثبات: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english" >Your Son saved: All nations and peoples:
                    And led them to the truth: Hail to you O Mary</td>
                <td class="arabic">ها إبنك قد نجى: سائر الشعوب والأمم: والى الحق أهدى: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english" >The Lord revived us: When He came and
                    suffered: From shame He redeemed us: Hail to you O Mary</td>
                <td class="arabic">والرب قد احيان: حين جانا وتألم: ومن الذل فدانا: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="south">
                <td class="english" >Do not forget our Patriarch: Grant him
                    abundant grace: And his partners our bishops: Hail to you O Mary</td>
                <td class="arabic">لا تنسى بطركنا: وامنحه وافر النعم: وشركائه أساقفتنا: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="south">
                <td class="english" >O Lord protect us: We are Your people: and
                    Your flock, Save us: Hail to you O Mary</td>
                <td class="arabic">يا رب نجينا: لأننا شعبك: وغنم رعيتك ارحمنا: السلام لك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english" >And to the Lord of hosts: We cry Lord
                    Have Mercy: Shouting with a loud voice: Hail to you O Mary ${cross}</td>
                <td class="arabic">وإلى رب القوات: نصرخ يا رب ارحم: ونصيح بأعلا الأصوات: السلام لك يا مريم ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}
,
iOpenMyMouthWithPraise(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="I Open My Mouth With Praise">
    <caption id="caption_table_${tableNumber}" class="caption">I Open My Mouth With Praise
        <span class="arabic-caption">أفتح فاى بالتسبيح</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >I open my mouth with praise: And say with
                a broken heart: My Lord Jesus Christ: Grant me a praising tongue</td>
            <td class="arabic">أفتح فاى بالتسبيح: وأقول بقلب جريح: ياربى يسوع المسيح: أعطنى لسان فصيح</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english" >That I may praise Your Name: And thank You
                for Your grace: My Lord Jesus Christ: Teach me Your statutes</td>
            <td class="arabic">لكى أسبح أسمك: وأشكر فضل أنعامك: ياربي يسوع المسيح: علمني أحكامك</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english" >Holy is Your Name and wonderful: And
                glorified in Your saints: My Lord Jesus Christ: Have mercy on your creation</td>
            <td class="arabic">قدوس أسمك وعجيب: وممجد فى قديسيك: ياربى يسوع المسيح: ارحم صنعة يديك</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >Worthy and right are You: To be praised
                and glorified: My Lord Jesus Christ: Your praise is sweet and good</td>
            <td class="arabic">مستحق ومستوجب: التسابيح و التماجيد: ياربي يسوع المسيح: تسبيحك حلو ولذيذ</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >I cried unto You all day: I raised my
                hands to You: My Lord Jesus Christ: Your Name is sweet to me</td>
            <td class="arabic">صرخت بطول النهار: مًديت نحوك يداى: ياربي يسوع المسيح: أسمك حلو عندي</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english" >I cast my cares on You: O Lord, neglect me
                not: My Lord Jesus Christ: Do not forsake me</td>
            <td class="arabic">جعلت اتكالي عليك: يارب لا تهملني: يارب يسوع المسيح: لا تتخل عنى</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english" >Your Holy Spirit: Cast not away from me: My
                Lord Jesus Christ: With Your might help me</td>
            <td class="arabic">روحك القدوس: لا تنزعه منى: ياربى يسوع المسيح: بمعونتك أشملنى</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >The enemy has injured me: And has deeply
                wounded me: Give me Your Body as ointment: And Your Blood as bandage</td>
            <td class="arabic">جرحنى العدو بسهام: وجرحه فى حاق: أعطنى جسدك مرهم: ودمك لى ترياق</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >Seven times daily: Every day I praise
                Your Name: My Lord Jesus Christ: Make me of Your portion</td>
            <td class="arabic">سبع مرات كل يوم: كل يوم أبارك أسمك: ياربي يسوع المسيح: اجعلني من قسمك</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english" >My soul has longed for You: As a barren
                land: My Lord Jesus Christ: In Your mercy, remember us</td>
            <td class="arabic">اشتاقت نفسى إليك: كالأرض العطشانة: ياربي يسوع المسيح: برحمتك لا تنسانا</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english" >Do not forget our Church: Fill it with
                Your goodness: My Lord Jesus Christ: Establish it in Your laws</td>
            <td class="arabic">لا تنسى بيعتنا: إملأها من خيراتك: ياربى يسوع المسيح: ثبتها بشهاداتك</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >Your laws are sweet on my lips: As honey
                is sweet in my mouth: My Lord Jesus Christ: Cleanse me from my sins</td>
            <td class="arabic">شهاداتك حلوة في حلقى: كالشهد داخل فمي: ياربي يسوع المسيح: اغسلني من أثمي</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >We thank the Beneficent: And worship the
                Lord Jesus: Christ the Lord of hosts: We kneel to Him in awe</td>
            <td class="arabic">نشكر صانع الخيرات: نسجد للرب يسوع: المسيح رب القوات: فلنركع له بخشوع</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english" >Impart Your laws in us: By Your words,
                confirm us: My Lord Jesus Christ: Raise the state of the church</td>
            <td class="arabic">رتب فينا أحكامك: وبقولك ثبتنا: ياربى يسوع المسيح: ارفع شأن مًلتنا</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english" >Raise the state of the Christians: In all
                the world: My Lord Jesus Christ: Embrace and support them</td>
            <td class="arabic">ارفع شأن المسيحيين: فى جميع المسكونة: ياربى يسوع المسيح: اشملهم بمعونة</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english" >If we live in poverty: Your Name shall
                sustain us: My Lord Jesus Christ: Your goodness shall enrich us</td>
            <td class="arabic">وان كنا فقراء من المال: اسمك هو يكفينا: ياربى يسوع المسيح: وصلاحك ٌيغنينا</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Unto You is due praise: Unto You is due
                blessing: My Lord Jesus Christ: The Fountain of all goodness</td>
            <td class="arabic">يجب لك التسبيح: ينبغى لك البركات: ياربى يسوع المسيح: ينبوع كل الخيرات</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english" >O Lord save Your people: And bless Your
                inheritance: Raise their state by Your Name: And grant them Your kingdom</td>
            <td class="arabic">يارب خلص شعبك: وبارك ميراثك: ارفع شأنهم باسمك: وورًثهم ملكوتك</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english" >Your Kingdom O my God: Is an eternal
                Kingdom: And Your Lordship O my King: Is an everlasting Lordship</td>
            <td class="arabic">ملكوتك يا إلهى: ملكوت أبدية: وسيادتك ياملكى: سيادة أزلية</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english" >Everlasting and exalted: And wonderful are
                Your deeds: My Lord Jesus Christ: The Master of all kingdoms</td>
            <td class="arabic">أزلية ومرتفعة: وعجيبة هى أفعالك: ياربى يسوع المسيح: سيد كل ممالك</td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english" >Worldly kingdoms perish: And all money is
                fleeting: My Lord Jesus Christ: Your Kingship is everlasting</td>
            <td class="arabic">ممالك الدنيا تزول: والمال كله فانى: ياربى يسوع المسيح: مُلكك غير متناهى</td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english" >All kingdoms will perish: And all worldly
                treasures: My Lord Jesus Christ: You&rsquo;re the treasure of the poor</td>
            <td class="arabic">تتناهى كل ممالك: تفنى كنوز الأمراء: ياربى يسوع المسيح: أنت كنز الفقراء</td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english" >The poor make them rich: And heal the sick
                Raise the orphans: O Lord enrich them</td>
            <td class="arabic">فقراء شعبك اغنيهم: والمرضى أشفيهم: والايتام ربًيهم: من فضلك أغنيهم</td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english" >O please enrich them: And aid those who
                are in debt: My Lord Jesus Christ: You're the Treasure of the poor</td>
            <td class="arabic">أغنيهم من فضلك: أوفِ عن المديونين: ياربى يسوع المسيح: أنت غنى المحتاجين</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english" >If we're ever in need: We have a precious
                Gem: We have the precious stone: Jesus the Precious One</td>
            <td class="arabic">ان كنا محتاجين: فلنا درة ثمينة: لنا الحجر الكريم: يسوع غالى القيمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english" >Precious and honored: More than the world
                indeed: His Name is Jesus Christ: The Forgiver of all sins</td>
            <td class="arabic">غال القيمة وكريم: أغلى من الدنيا تمام: إسمه يسوع المسيح: الغافر كل آثام</td>
        </tr>
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english" >The Forgiver of all sins: Who hearkens to
                those who plead: All the nations confess Him: And the kings praise Him</td>
            <td class="arabic">غافر كل الذنوب: سامع لمن يدعوه: تعترف له كل الشعوب: والملوك يسبحوه</td>
        </tr>
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english" >Praise Him O you nations: Glorify Him all
                people: My Lord Jesus Christ: Grant us to do Your will</td>
            <td class="arabic">سبحوه ياكل الامم: مجدوه ياكل الشعوب: ياربى يسوع المسيح: تبلغنا المطلوب</td>
        </tr>
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english" >Our plea is Your Kingdom: And Your
                never-ending mercy: My Lord Jesus Christ: Your nature is goodness</td>
            <td class="arabic">مطلوبنا ملكوتك: ومراحمك موجوده: ياربى يسوع المسيح: يامن طبعه الجوده</td>
        </tr>
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english" >You are good and generous: There is no
                other like You: My Lord Jesus Christ: You are all-observing</td>
            <td class="arabic">صاحب جوده وكريم: وليس له قط نظير: ياربى يسوع المسيح: أنت على الكل بصير</td>
        </tr>
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english" >All-observing and watching us: According
                to Your plan: My Lord Jesus Christ: Let us only rely on You</td>
            <td class="arabic">بصير ومتطلع: علينا بتدابيرك: يا ربى يسوع المسيح: لا تحوجنا لغيرك</td>
        </tr>
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english" >We know no other but You: In Your Gospel,
                we trust: You are the Son of God: Confirm us in Your faith</td>
            <td class="arabic">لا نعرف غيرك اله: بإنجيلك صدقنا: أنت هو إبن الله: فى ايمانك ثبتنا</td>
        </tr>
        <tr id="table_${tableNumber}_row_32" class="north">
            <td class="english" >Confirm us in the faith: Raise us from
                idleness: My Lord Jesus Christ: We rejoice in Your name</td>
            <td class="arabic">ثبتنا على الأيمان: وانهضنا من كل مًلل: ياربى يسوع المسيح: باسمك نتهلل</td>
        </tr>
        <tr id="table_${tableNumber}_row_33" class="north">
            <td class="english" >We rejoice with hymn: We sing with the
                psaltery: My Lord Jesus Christ: Your praise is joy and delight</td>
            <td class="arabic">نتهلل بالالحان: ونرتل بالمزمور: ياربى يسوع المسيح: تسبيحك بهجة وسرور</td>
        </tr>
        <tr id="table_${tableNumber}_row_34" class="south">
            <td class="english" >Our joy is in Your praise: Our splendor is
                in Your glory: My Lord Jesus Christ: To You is due all glory</td>
            <td class="arabic">سرورنا تسابيحك: بهجتنا هو مجدك: ياربى يسوع المسيح: العظمة لك وحدك</td>
        </tr>
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english" >I have sinned against You: And have
                transgressed Your law: You are justified in Your words: And prevail when you judge</td>
            <td class="arabic">لك وحدك انا اخطيت: وصنعت الشر أمامك: لتصدق فى أقوالك: وتغلب فى أحكامك</td>
        </tr>
        <tr id="table_${tableNumber}_row_36" class="north">
            <td class="english" >Your judgments are true and just: And your
                mercy is never-ending: My Lord Jesus Christ: Have mercy on my soul</td>
            <td class="arabic">أحكامك حق وعدل: ومراحمك متسعة: ياربى يسوع المسيح: ارحم نفسى المتضعة</td>
        </tr>
        <tr id="table_${tableNumber}_row_37" class="north">
            <td class="english" >I humbled myself before Your glory: And
                depended on Your words: My Lord Jesus Christ: Cast me not on Your left-hand</td>
            <td class="arabic">اتضعت أمام مجدك: وإتكلت على أقوالك: ياربى يسوع المسيح: لا تطرحنى على شمالك</td>
        </tr>
        <tr id="table_${tableNumber}_row_38" class="south">
            <td class="english" >On Your left-hand cast me not: With the
                evil people: I ask You to accept me: As You accepted the tax collector</td>
            <td class="arabic">على شمالك لا توقفنى: مع القوم الاشرار: اسألك أن تقبلنى: كما قبلت العشار</td>
        </tr>
        <tr id="table_${tableNumber}_row_39" class="south">
            <td class="english" >I cry as the tax collector: With a
                broken heart: O Lord forgive my sins: For Your servant is a sinner</td>
            <td class="arabic">أصرخ بصوت العشار: وأنا بوجه مطاطى: اللّهُم أغفر لى الاوزار: فإنى عبدك خاطئ</td>
        </tr>
        <tr id="table_${tableNumber}_row_40" class="north">
            <td class="english" >The sin is in my nature: But Your nature
                is goodness: There is no slave without sin: Nor a Master without forgiveness</td>
            <td class="arabic">الخطية من طبعى: وانت طبعك الاحسان: ليس عبد بلا خطية: ولا سيد بلا غفران</td>
        </tr>
        <tr id="table_${tableNumber}_row_41" class="north">
            <td class="english" >Forgiveness is of You: And mercy comes
                from You: My Lord Jesus Christ: Guide me towards your ways</td>
            <td class="arabic">الغفران من عندك: والرحمة هى من قبلك: ياربى يسوع المسيح: اهدينى الى سبلك</td>
        </tr>
        <tr id="table_${tableNumber}_row_42" class="south">
            <td class="english" >Your ways are lost from me: And life has
                passed me by: I ask You to accept me: And give me repentance</td>
            <td class="arabic">سُبُلَك تاهت عنى: والعمر فرغ منى: أسألك تقبلنى: والتوبة أعطينى</td>
        </tr>
        <tr id="table_${tableNumber}_row_43" class="south">
            <td class="english" >Give me repentance and forgiveness: And
                cleanse me from my flaws: My Lord Jesus Christ: Forgive all my sins</td>
            <td class="arabic">أعطينى توبة وغفران: ونقينى من كل عيوبى: ياربى يسوع المسيح: اغفر لى كل ذنوبى</td>
        </tr>
        <tr id="table_${tableNumber}_row_44" class="north">
            <td class="english" >My sins weigh upon me: As a heavy harsh
                burden: My Lord Jesus Christ: Purify all my senses</td>
            <td class="arabic">ذنوبى ثقلت فوق راسى: كحمل ثقيل قاسى: ياربى يسوع المسيح: اشف كل حواسى</td>
        </tr>
        <tr id="table_${tableNumber}_row_45" class="north">
            <td class="english" >Your mercies O my God: Are greatly
                plenteous: Your mercies O my God: Are countless</td>
            <td class="arabic">مراحمك يا الهى: هى كثيرة جدا: مراحمك يا الهى: لا يحصى لها عددا</td>
        </tr>
        <tr id="table_${tableNumber}_row_46" class="south">
            <td class="english" >Your mercies O my God: Are more than the
                plants of the earth: Your mercies O my God: Are beyond measure</td>
            <td class="arabic">مراحمك يا الهى: أكثر من نبات الأرض: مراحمك يا الهى: قد فاقت كل عدد</td>
        </tr>
        <tr id="table_${tableNumber}_row_47" class="south">
            <td class="english" >Your mercies O my God: Are as the rain
                drops: Your mercies O my God: Are more than the sand of the sea</td>
            <td class="arabic">مراحمك يا الهى: كقطرات الأمطار: مراحمك يا الهى: أكثر من رمل البحار</td>
        </tr>
        <tr id="table_${tableNumber}_row_48" class="north">
            <td class="english" >Your mercies O my God: Are as water
                fountains: Your mercies O my God: Are as flowing rivers</td>
            <td class="arabic">مراحمك يا الهى: كينابيع المياه: مراحمك يا الهى: كالأنهار الجارية</td>
        </tr>
        <tr id="table_${tableNumber}_row_49" class="north">
            <td class="english" >Have mercy on my soul: O Lord save me: O
                Lord blot out my sins: With Your goodness remember me</td>
            <td class="arabic">يارب ارحم نفسى: يارب خلصني: يارب امح إثمي: بصلاحك اذكرني</td>
        </tr>
        <tr id="table_${tableNumber}_row_50" class="south">
            <td class="english" >Holy, Holy, Holy: God the Lord of Sabaoth:
                The Creator of the universe: And its Provider</td>
            <td class="arabic">قدوس قدوس قدوس: الله رب الصاباؤوت: الخالق كل نفوس: ورازقهم بالقوت</td>
        </tr>
        <tr id="table_${tableNumber}_row_51" class="south">
            <td class="english" >We ask You O Our King: Preserve the life
                of our Patriarch: And the bishops his companions: Amen Alleluia ${cross}</td>
            <td class="arabic">نسألك ياملكنا: أدم رئاسة بطركنا: وشركاؤه مطارنتنا: امين الليلويا ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
AdamPsali_ComeLetUsWorship(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Adam Psali - Come, Let Us Worship">
    
    <caption id="caption_table_${tableNumber}" class="caption">Adam Psali - Come, Let Us Worship
        <span class="coptic-caption">Ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ</span>
        <span class="arabic-caption">ابصالية ادام - تعلوا ايها الشعوب</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Come, let us worship / the Father, and the Son, / and the Holy Spirit, / the coessential.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ: ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲟⲩⲙⲟⲟⲩⲥⲓⲟⲥ.</td>
            <td class="arabic">تعالوا نسجد، للآب والابن، والروح القدس، المساوي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Help us O my Lord / with Your goodness; / enlighten our minds, / and our hearts also.</td>
            <td class="coptic">Ⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ Ⲡⲁϭⲟⲓⲥ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲁ̀ⲣⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ: ⲛⲉⲙ ⲛⲉⲛϩⲏⲧ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">أعنَّا يا سيدي، بصلاحك، وأضئ عقولنا، وقلوبنا معاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english">For truly, / the angels / worthily / glorify You.</td>
            <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ: ⲉⲩϯⲱ̀ⲟⲩ ⲛⲁⲕ: ⲛ̀ϫⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲕⲁⲧⲁ ⲙ̀ⲡ̀ϣⲁⲛⲁⲕ.</td>
            <td class="arabic">لأن بالحقيقة، يُمجدونك، الملائكة، كما تستحق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David proclaims / and says, / “Praise the Lord / with the sound of the trumpet.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁϥⲱϣ ⲉ̀ⲃⲟⲗ: ⲟⲩⲟϩ ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ: ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ.</td>
            <td class="arabic">داود يصرخ، ويقول، "سبحوا الرب، بصوت البوق."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Therefore, we praise / and glorify / Jesus Christ, / the King of glory.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲙⲁⲣⲉⲛϩⲱⲥ: ⲟⲩⲟϩ ⲧⲉⲛϯⲱ̀ⲟⲩ: ⲛ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
            <td class="arabic">من أجل هذا نُسبِّح، ونُمجِّد، يسوع المسيح، ملك المجد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Seven rotating stars / bless His name / for He commanded and they / existed at all times.</td>
            <td class="coptic">Ϣⲁϣϥ ⲙ̀ⲫⲱⲥⲧⲏⲣ ⲉⲧⲕⲱϯ: ⲉⲩⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ: ϫⲉ ⲁϥϩⲟⲛϩⲉⲛ ⲁⲩϣⲱⲡⲓ: ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">السبع كواكب السائرة، يبارِكوا اسمه، لأنه أمَرَ فكانوا، إلى كل زمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">Behold, the dragons, / and all the depths, / and fire and snow, / praise the King of ages.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲛⲓⲇ̀ⲣⲁⲕⲱⲛ: ⲛⲉⲙ ⲛⲓⲛⲟⲩⲛ ⲧⲏⲣⲟⲩ: ⲟⲩⲭ̀ⲣⲱⲙ ⲛⲉⲙ ⲟⲩⲭⲓⲱⲛ: ⲉⲩϩⲱⲥ ⲉ̀Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
            <td class="arabic">هوذا التنانين، وجميع الأعماق، والنار والثلج، يُسبِّحون ملك الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Gather with me today / O Christians / to bless our Lord, / Jesus Christ.</td>
            <td class="coptic">Ⲑⲱⲟⲩϯ ⲛⲉⲙⲏⲓ ⲙ̀ⲫⲟⲟⲩ: ⲱ̀ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛⲥ̀ⲙⲟⲩ: ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">اجتمعوا معي اليوم، أيها المسيحيون، لكي نُبارك، ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Jesus Christ, our God, / the Infinite One, / came for our salvation / out of His goodness.</td>
            <td class="coptic">Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲓⲁ̀ⲭⲱⲣⲓⲧⲟⲥ: ⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧⲭ̀ⲣⲏⲥⲧⲟⲥ.</td>
            <td class="arabic">يسوع المسيح إلهنا، غير المَحوِي، جاء من أجل خلاصنا، من قِبَل صلاحه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">Again, sing to the Lord / a new song, / and declare His glory / and His wonders.</td>
            <td class="coptic">Ⲕⲉ ⲡⲁⲗⲓⲛ ϫⲱ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ϧⲉⲛ ⲟⲩϫⲱ ⲙ̀ⲃⲉⲣⲓ: ⲥⲁϫⲓ ⲙ̀ⲡⲉϥⲱ̀ⲟⲩ: ⲛⲉⲙ ⲛⲉϥϣ̀ⲫⲏⲣⲓ.</td>
            <td class="arabic">وأيضاً انشدوا للرب، نشيداً جديداً، حدِّثوا بمجده، وعجائبه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english">Moreover, O angels / who stand before Him / in the highest, / praise and glorify Him.</td>
            <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲙⲁⲱ̀ⲟⲩ ⲛⲁϥ: ⲱ̀ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲛⲏⲉⲧⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛⲁϩⲣⲁϥ.</td>
            <td class="arabic">وأيضاً في الأعالي، سبحوه ومجدوه، أيها الملائكة، القيام حوله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Give us an inheritance / in Your kingdom / for the sake of the Virgin, / Mary the queen.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲙⲉⲣⲟⲥ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ: ⲉⲑⲃⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ ϯⲟⲩⲣⲱ.</td>
            <td class="arabic">أعطنا نصيباً، في ملكوتك، من أجل العذراء، مريم الملكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Who is like You, / O Lord, among the gods?! / We praise You / with Your angels.</td>
            <td class="coptic">Ⲛⲓⲙ ⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ: ϧⲉⲛ ⲛⲓⲛⲟⲩϯ Ⲡ̀ϭⲟⲓⲥ: ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">مَنْ يُشبهَك، في الآلهة يا رب، فلنُسبحك، مع ملائكتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">Truly, You are blessed, / O Eternal One; / chanting befits / You in Zion.</td>
            <td class="coptic">Ⲝ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲟⲥ: ⲱ̀ Ⲡⲓⲉ̀ⲱ̀ⲛⲓⲟⲛ: ⲉϥⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁⲕ: ⲛ̀ϫⲉ ⲡⲓϫⲱ ϧⲉⲛ ⲥⲓⲱⲛ.</td>
            <td class="arabic">تباركت بالحقيقة، أيها الأزلي، لأنه يليق بك، النشيد في صهيون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">And He is praised / by the musical / organs / and the psaltery.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲉⲩⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ϧⲉⲛ ⲡⲓⲟⲣⲅⲁⲛⲟⲛ: ⲛ̀ⲧⲉ ⲡⲓⲙⲟⲥⲓⲕⲟⲛ: ⲛⲉⲙ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ.</td>
            <td class="arabic">ويُسبحونه، بأرغن، الموسيقى، والمزمار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Unseen One / before the ages, / praise Him / with cymbals.</td>
            <td class="coptic">Ⲡⲓⲁⲧϣ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ: ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲁ̀ⲣⲓϩⲱⲥ ⲉ̀ⲣⲟϥ: ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ.</td>
            <td class="arabic">غير المرئي، قبل الدهور، سبِّحوه، بالصنوج.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Rejoice O righteous / in God the Merciful, / and be glad in Him, / O upright in heart.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲛⲓⲇⲓⲕⲉⲟⲥ: ϧⲉⲛ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲛⲁⲏⲧ: ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲟϥ: ⲛⲏⲉⲧⲥⲟⲩⲧⲱⲛ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ.</td>
            <td class="arabic">افرحوا أيها الصدِّيقون، بالإله الرحيم، وتهللوا به، أيها المستقيمون بقلوبهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">Listen to the psalmist, / praising and saying, / “Praise Him with / timbrel and chorus.”</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ: ⲉϥϩⲱⲥ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ: ⲛⲉⲙ ϩⲁⲛⲭⲟⲣⲟⲥ.</td>
            <td class="arabic">اسمعوا المرتِّل، يسبح قائلاً، "سبحوه بالدفوف، والصفوف.ً</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">We worship Him / with everyone, / and bless Him / now and at all times.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲛⲉⲙ ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ: ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">نسجد له، مع كل نَسَمَة، ونُباركه، الآن وكل أوان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Behold, we proclaim / and say: / “Forgive us / O Jesus our Lord.”</td>
            <td class="coptic">Ⲩⲡⲡⲉ ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ: ⲟⲩⲟϩ ⲧⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: ⲱ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">هوذا نصرخ، ونقول، "اغفر لنا، يا ربنا يسوع."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">God, the Good One, / the Incomprehensible, / came to the world / to save us.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: Ⲡⲓⲁ̀ⲙⲁⲣⲉⲛⲧⲟⲛ: ⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">الله الصالح، الذي لا يُفحَص، جاء إلى العالم، حتى خلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">Holy, holy, holy, / O Christ our Master. / Hail to Mary, / the Theotokos.</td>
            <td class="coptic">Ⲭⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁⲙ: Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ.</td>
            <td class="arabic">قدوس قدوس قدوس، يا ملكنا المسيح، السلام لمريم، والدة الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">All the souls, together, / praise their Creator / saying ten thousandfold, / “O God, do not be angry.”</td>
            <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ: ⲉⲩϩⲱⲥ ⲉ̀ⲡⲟⲩⲣⲉϥⲥⲱⲛⲧ: ϫⲉ ϩⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲕⲱⲃ: ⲱ̀ Ⲫ̀ⲛⲟⲩϯ ⲙ̀ⲡⲉⲣϫⲱⲛⲧ.</td>
            <td class="arabic">كل الأنفس معاً، يسبحون خالقهم، قائلين ربوات أضعاف، "يا الله لا تغضب."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">O Lord, I am Your / poor servant; / I praise You with / Your Mother the Virgin. ${cross}</td>
            <td class="coptic">Ⲱ̀ Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲛⲟⲕ ⲡⲉⲕⲃⲱⲕ: ⲡⲓⲁ̀ⲗⲁⲭⲓⲥⲧⲟⲥ: ϯⲛⲁϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ Ⲧⲉⲕⲙⲁⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ. ${cross}</td>
            <td class="arabic">يا رب أنا عبدك، الحقير، أُسبحك، مع أمك العذراء. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

,
firstExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia - 1st Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia - 1st Explanation
        <span class="arabic-caption">تيوطوكيا الأحد - التفسير الأول</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >I start in the Name of God / Who dwells in
                light / Who spoke to Moses / Upon Mount Tabor</td>
            <td class="arabic">أبدأ باسم الله / الساكن فى النور / الذى كلم موسى / من فوق جبل الطور</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >Saying O Moses / Arise joyfully / I will
                show you a place / Prophesied about</td>
            <td class="arabic">قائلاً يا موسى / انهض فرحا ًمسروراً / لأعلمك بما كان / كما عنه تنبأون
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >Arise O Moses / And ascend to the highest
                mount / Upon it build a dome / To resemble a tabernacle</td>
            <td class="arabic">انهض يا موسى / واصعد إلى اعلى الجبال / وابن هناك قبة / تكون لك شبة مظال</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >And all I say to you / Immediately write
                down / This is a testimony / For the Israelites</td>
            <td class="arabic">وجميع ما قلته لك / اكتبه فى الحال / هذه هى شهادة / للإسرائيليين
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >Hasten, O Moses / And observe the place /
                Build there a dome / With granite stone</td>
            <td class="arabic">إسرع ياموسى / انظر هذا المكان / وابن فيه قبة / بالحجر الصوان</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >Elevate its height / Give it four corners /
                Gather what is needed / For the builders</td>
            <td class="arabic">وعلى شوارعها / واعمل لها أربعة أركان / واجمع مايحتاج / إليه البناؤون</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >Make the outside of the dome / And widen
                its hallway / Overlay it, O Moses / With pure gold</td>
            <td class="arabic">واعمل خارج القبة / فسحة كالدهليز / واطليها ياموسى / بالذهب الإبريز</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >Within and without / Honor for consecration /
                From the height to the base / With the precious gold</td>
            <td class="arabic">داخل مع خارج / كرامة للتكريس / من أعلى إلى أسفل / بالذهب الموزون</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >Make the inside of the dome / An altar for
                the showbread / And around the altar / Make four pillars</td>
            <td class="arabic">واعمل داخل القبة / مذبح للقربان / واعمل حول المذبح / أربعة عمدان</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >Make there upon it / Cherubs made out of
                gold / With their wings spread / Upon the cover</td>
            <td class="arabic">يكون من فوقها / من الذهب كاروبان / بأجنحة مفروشة / إيجين بى إيللاستيريون</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >And in it place / The overlaid ark of
                covenant / And in it the golden vessel / With the hidden manna</td>
            <td class="arabic">واجعل فيها / تابوت العهد المطلى / وفيه القسط الذهب / بالمن المخفى</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >And in it Aaron's censer / From the pure
                gold / And the tablets of the covenant / With Aaron's rod</td>
            <td class="arabic">وفيه شورية هرون / من الذهب المصفى / وفيه لوحا العهد / مع عصاة هارون</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >And in it the lampstand / With the chosen
                gold / And the golden vessel / Burning as the ember</td>
            <td class="arabic">وفيه المنارة / من الذهب المختار / وفيه المايدة ذهب / تشعل كجمر النار</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >Decorate it, O Moses / With various lights /
                Make also in it / Seven burning candles ${cross}</td>
            <td class="arabic">وزينها ياموسى / بسائر كل الأنوار / واجعل فيها أيضاً / سبعة سرج ينيرون ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english" >Hail to you O Mary / O you full of grace /
                Who are engulfed in light / O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم / يامملوءة نعمة / يامشتملة بالانوار / ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Intercede for us / On judgment day / Your Son
                granted us salvation / O daughter of Zion</td>
            <td class="arabic">إشفعى فينا / فى يوم الزحمة / بابنك نلنا الخلاص / ياإبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Holy, Holy, Holy; a reading from the
                Gospel according to our teacher St. Luke [1: 46-50] the Evangelist. May his blessings be with us
                all. Amen.</td>
            <td class="arabic">قدوس قدوس قدوس. فصل من الإنجيل بحسب لوقا (١ :٤٦-٥٠ ) البشير. بركاته تكون معنا.
                آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >And Mary said, "My soul magnifies the
                Lord. And my spirit has rejoiced in God my Savior. For He has regarded the low estate of His
                handmaiden. For behold, from henceforth all generations shall call me blessed. For He that is
                mighty has done great things and Holy is His Name. And His mercy is on them that fear Him from
                generation to generation. And Glory be to God forever. Amen ${cross}</td>
            <td class="arabic">فقالت مريم تعظم نفسى الرب. وتتهلل روحى بالله مخلصى لأنه نظر إلى تواضع أمته. هوذا
                منذ الآن تعطينى الطوبى. جميع الأجيال. صنع بى القوى عظائم. قدوس اسمه ورحمته إلى جيل الأجيال
                لخائفيه" والمجد لله دائماً أبدياً. آمين. ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
secondExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; 2nd Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; 2nd Explanation
        <span class="arabic-caption">تيوطوكيا الأحد - التفسير الثانى</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >The Lord said to Moses: In a loud voice to
                call him: Arise and build an ark for Me: And overlay it with gold</td>
            <td class="arabic">قال الرب لموسى: بصوت عالى يناديه: قم إصنع لى تابوتاً: وبالذهب إطليه</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >So therein may dwell My secrets: And also
                my covenant: From shittim wood: And overlaid with gold</td>
            <td class="arabic">لأضع سرى فيه: وأجعل عهدى فيه: من خشب لايسوس: وبالذهب تطلون</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >You were likened, O Mary: To the overlaid
                ark: And in it the golden vessel: With the rational manna</td>
            <td class="arabic">تشبهت يامريم: بتابوت العهد المطلى: وفيه القسط ذهب: بالمن العقلى</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >Your praise in my tongue: Is sweeter than
                honey: We offer praise to You: O daughter of Zion</td>
            <td class="arabic">مديحك فى فمى: أحلى من العسل: نقرئك كل سلام: ياابنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >O shining star: As a lit lamp: You held the
                Son of God: The Living Who is unseen</td>
            <td class="arabic">يانجمة تضوى: كمصباح النور: حملت إبن الله: الحى غير المنظور</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >He saved Adam: After the bondage: And
                returned him and his sons: Joyfully to Paradise</td>
            <td class="arabic">وأنقذ آدم: بعد أن كان مأسور: وعاد هو وبنوه: إلى الفردوس وهم فرحون</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >You enlightened the world: After it was in
                darkness: And you carried in your womb: The Son; The Logos of God</td>
            <td class="arabic">نورت العالم: بعد أن كان ظلمة: وحملت فى أحشاك: إبن اللة الكلمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >You are the ark: You are the wisdom: You
                are our strength: And the joy of the upright</td>
            <td class="arabic">انت هى التابوت: انت هى الحكمة: انت هى قوتنا: وفرح الصديقون</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >In due time: God desired and chose you:
                And sent unto you the Logos: With the Holy Spirit in you</td>
            <td class="arabic">لما أراد الله: وشاء واختارك: وأرسل إليك الكلمة: بروح قدسه زانك</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >You held in your womb: The Lord your God:
                You nourished Him with your milk: Like the rest of the humans</td>
            <td class="arabic">وحملت فى أحشاك: الرب إلهك: ولدتيه ورضع لبنك: كسائر البشريين</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >Ezekiel prophesied: In a vision and said:
                I saw an eastern door: Closed at all sides</td>
            <td class="arabic">حزقيال تنباً: فى رؤياه وقال: رأيت باباً فى المشرق: مقفولا بالأقفال</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >Therein entered and came forth: The Most
                High King: And no harm came to it: And it was continuously sealed.</td>
            <td class="arabic">دخل فيه وخرج: الملك المتعال: ولم يمسه ضرر: وبحاله مختومين</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >Many witnessed of you: In prophecies and
                proverbs: He shall come forth from you: The exalted Lord</td>
            <td class="arabic">وكم شهدوا عنك: فى نبوات وأمثال: سوف يظهر منك: الرب المتعال</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >He shall save His people: At the end of
                days: Your Son granted us salvation: O censer of Aaron ${cross}</td>
            <td class="arabic">ويخلص شعبه: فى آخر الأجيال: بابنك نلنا الغفران: ياشورية هارون ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english" >Hail to you O Mary: O you full of grace:
                Who are engulfed in light: O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم: يامملوءة نعمة: يامشتملة بالانوار: ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Intercede for us: On judgment day: Your Son
                granted us salvation: O daughter of Zion</td>
            <td class="arabic">إشفعى فينا: فى يوم الزحمة: بابنك نلنا الخلاص: ياإبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Holy, Holy, Holy; a reading from the
                Gospel according to our teacher St. Luke [1: 51-55] the Evangelist. May his blessings be with us
                all. Amen.</td>
            <td class="arabic">قدوس قدوس قدوس. فصل من الانجيل بحسب لوقا (١ :٥١-٥٥ ) البشير. بركاته تكون معنا.
                آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >He has shown strength with His arm; He
                has scattered the proud in the imagination of their hearts. He has put down the mighty from
                their thrones and exalted the lowly. He has filled the hungry with good things and the rich He
                has sent away empty. He has helped His servant Israel, In remembrance of His mercy, As He spoke
                to our fathers, To Abraham and to his seed forever." And Glory be to God forever. Amen ${cross}</td>
            <td class="arabic">صنع قوة بذراعه. وفرق المستكبرين بفكر قلوبهم. أنزل الأقوياء عن الكراسى، ورفع
                المتواضعين أشبع الجياع من الخيرات. وأرسل الأغنياء فارغين. عضد إسرائيل فتاه&lsquo; وذكر رحمة كما
                قال لآبائنا إبراهيم وزرعه إلى الأبد. والمجد لله دائماً أبدياً آمين ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
thirdExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; 3rd Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; 3rd Explanation
        <span class="arabic-caption">تيوطوكيا الأحد - التفسير الثالث</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >O Mary, you became: An altar for
                forgiveness: And on it the golden gifts: In it the Body as showbread.</td>
            <td class="arabic">يامريم صرت: مذبح للغفران: وعليه المايدة ذهب: وفيه الجسد قربان</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >It was the Son of the Living God: Who
                gives forgiveness: To every pure person: Who lives in the paradise of Joy</td>
            <td class="arabic">هو إبن الله الحى: المعطى الغفران: لكل نقى طاهر: يسكن نعيم الفردوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >You are the high altar: Who is engulfed in
                Light: And Its Light shines brightly: And fills all the earth</td>
            <td class="arabic">أنت هى المذبح: العالى المشتملة بالأنوار: ونوره يتلألأ: ملأ كل الاقطار</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >Your light, O Mary: Exceeds the sun and
                the moon: You're higher than all ranks: And all the hosts</td>
            <td class="arabic">وضوئك يامريم: فاق كل شموس وأقمار: فقت كل مراتب: وسائر كل طقوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >You exceeded the elders: And the four
                beasts: And also the thrones: The principalities and the powers</td>
            <td class="arabic">فقت الرؤساء: والأربعة الحيوانات: وأيضاً الكراسى: والأرباب والقوات</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >You held the Son of God: The Creator of
                all things: The Life Giver To every body and soul</td>
            <td class="arabic">حملت ابن الله: خالق كل المخلوقات: معطى كل حياة: لكل جسد ونفوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >O flower of incense: The aroma of your
                incense spread: O star that shines: That shines as a lamp</td>
            <td class="arabic">يازهرة الأطياب: بخورك عنبر فاح: يانجمة تضوى: تضئ كالمصباح</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >O you full of grace: O you who are our joy:
                Your Son granted us salvation: And the Paradise of Joy</td>
            <td class="arabic">يامملوءة نعمة: يابدء الافراح: بابنك نلنا الخلاص: ونعيم الفردوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >Daniel prophesied: In a vision and said: I
                saw a Throne of Light: And upon it sat the Lord of hosts</td>
            <td class="arabic">دانيال تنبأ: فى رؤياه بثبات: قال رأيت كرسياً من نور: وعليه رب القوات</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >And around Him thousands and thousands:
                Myriads and myriads: While praising God: The Holy King.</td>
            <td class="arabic">وحوله ألوف ألوف: ربوات مع طغمات: يسبحون الله: الملك القدوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >You were likened, O Mary; With the Throne
                of God the Creator: You held the Son of God: The living and unseen.</td>
            <td class="arabic">تشبهت يامريم: بكرسى الله الخالق: وحملت ابن الله: الحى الناطق</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >The fathers called you: The eastern door:
                Many spoke of you: O Virgin and bride.</td>
            <td class="arabic">سماك الآباء: باب المشارق: وكم وصفوا عنك: يابكرة وعروس</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >The Lord has chosen you: From the root of
                Jesse: From the pure and sanctified seed: The house of prophesy and rulers.</td>
            <td class="arabic">الرب إختارك: من أصل يسى: من نسل نقى طاهر: بيت النبوة والرؤساء</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >You held Him in your womb: O Virgin and
                bride: You gave birth to Him and He drank your milk: Like all the humans. ${cross}</td>
            <td class="arabic">وحملتيه فى أحشاك: يابكره وعروس: ولدتيه ورضع لبنك: هوس رومى إنتى ليوس ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english" >Hail to you O Mary: O you full of grace:
                Who are engulfed in light: O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم: يامملوءة نعمة: يامشتملة بالانوار: ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Intercede for us: On judgment day: Your Son
                granted us salvation: O daughter of Zion</td>
            <td class="arabic">إشفعى فينا: فى يوم الزحمة: بابنك نلنا الخلاص: ياإبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Holy, Holy, Holy; a reading from the
                Gospel according to our teacher St. Luke [1: 68-72] the Evangelist. May his blessings be with us
                all. Amen.</td>
            <td class="arabic">قدوس قدوس قدوس. فصل من الانجيل بحسب لوقا (١ :٦٨-٧٢) البشير. بركاته تكون معنا.
                آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >"Blessed is the Lord God of Israel. For
                He has visited and redeemed His people and has raised up a horn of salvation for us in the house
                of His servant David. As He spoke by the mouth of His holy prophets, who have been since the
                world began, that we should be saved from our enemies and from the hand of all who hate us to
                perform the mercy promised to our fathers and to remember His holy covenant. And Glory be to God
                forever. Amen. ${cross}</td>
            <td class="arabic">مبارك الرب إله اسرائيل لأنه افتقد وصنع نجاة لشعبه، وأقام لنا قرن خلاص من بيت داود
                عبده. ليذكر رحمته كما تكلم من أفواه أنبيائه الأطهار منذ البدء. خلاص من أعدائنا ، ومن أيدى كل
                مبغضينا، ليصنع رحمة مع آبائنا ويذكر عهده المقدس. والمجد لله دائماً أبدياً آمين. ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
fourthExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; 4th Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; 4th Explanation
        <span class="arabic-caption">تيوطوكيا الأحد - التفسير الرابع</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >O precious golden vessel: Which concealed
                the Manna: It was a symbol Of you: O Theotokos</td>
            <td class="arabic">ياقسط ذهب غالى: والمن مخفى فيه: رمزاً وإشارة: عليك ياوالدة الإله</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >O the precious gemstone: O ship of salvation: Blessed are you O Mary: The daughter of Zion</td>
            <td class="arabic">ياحجر الجوهر: ياسفينة النجاة: طوباك يامريم: ياإبنه صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >O ladder of Jacob: You held the Judge: And
                He dwelt in your womb: You gave birth to the Son of Man</td>
            <td class="arabic">ياسلم يعقوب: حملت الديان وصار: فى أحشاك المحجوب: وولدت ابن الانسان</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >He healed all the sick: And opened the
                eyes of the blind: And raised the dead: After their burial</td>
            <td class="arabic">وشفى كل المرضى: وفتح أعين العميان: وأقام الميت: بعد أن كان مدفون</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >You are Aaron's rod: That blossomed: O the
                dome of Moses: That is filled with light</td>
            <td class="arabic">ياعصاة هرون: نورت الازهار: ياقبة موسى: المملوءة أنوار</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >You are a planted vineyard: That bears the
                Fruit: Your Son granted us forgiveness: O hidden gem</td>
            <td class="arabic">وكرمة مغروسة: حاملة الأثمار: وبابنك نلنا الغفران: ياجوهر مكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >David said in the psalm: While playing on
                his harp: The Lord chose Zion: And came and dwelt in her.</td>
            <td class="arabic">داود قال فى المزمور: وقال على القيثارات: الرب اختار صهيون: وسكن فيها بثبات</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >These are all symbols: Signs that resemble
                you: O Mary: O daughter of Zion</td>
            <td class="arabic">هذا كله مثال: ورمزاً واشارات: عليك يامريم: ياابنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >The Lord chose your beauty: And God dwelt
                in your womb: You gave birth to Him: And He drank your milk</td>
            <td class="arabic">الرب اختار حسنك: وسكن فيك الإله: ولدتيه ورضع لبن: ثدييك بفيه</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >You are greatly exalted: You became the
                highest heaven: You are above all ranks: The righteous and the saints</td>
            <td class="arabic">ارتفعت جداً: وصرت كأعلا سماه: فقت كل الرؤساء: والأبرار والصديقين</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >You're above the Cherubim: O the pride of
                virgins: And higher than the Seraphim: Which are full of light</td>
            <td class="arabic">فقت الشاروبيم ياست الأبكار وأيضاً السيرافيم المملوءة أنوار</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >O daughter of Joachim: From the upright
                seed: Your Son saved Adam: After his bondage</td>
            <td class="arabic">ياإبنة يواقيم: من نسل الأبرار: ابنك خلص آدم: بعد أن كان مسجون</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >O you full of grace: More pure than
                everyone: O mother of the Merciful: O you brighter than all light.</td>
            <td class="arabic">يامملوءة نعمة: ياطهر الأطهار: ياأم الرحمة: يانور الأنوار</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >Your Son illuminated the darkness: And
                made us free: We inherited the kingdom: Through baptism and Holy Myron. ${cross}</td>
            <td class="arabic">بابنك زالت الظلمة: وقد صرنا أحرار: وورثنا الملكوت: بعمادنا بالميرون ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english" >Hail to you O Mary: O you full of grace:
                Who are engulfed in light: O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم: يامملوءة نعمة: يامشتملة بالانوار: ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Intercede for us: On judgment day: Your Son
                granted us salvation: O daughter of Zion</td>
            <td class="arabic">إشفعى فينا: فى يوم الزحمة: بابنك نلنا الخلاص: ياإبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Holy, Holy, Holy; a reading from the
                Gospel according to our teacher St. Luke [1: 73-77] the Evangelist. May his blessings be with us
                all. Amen.</td>
            <td class="arabic">قدوس قدوس قدوس. فصل من الانجيل بحسب لوقا (١:٧٣-٧٧) البشير. بركاته تكون معنا.
                آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >The oath, which He swore to our father
                Abraham: To grant us that we, being delivered from the hand of our enemies, might serve Him
                without fear, in holiness and righteousness before Him all the days of our life. "And you,
                child, will be called the prophet of the Highest, for you will go before the face of the Lord to
                prepare His ways. To give knowledge of salvation to His people by the remission of their sins,
                And Glory be to God forever. Amen ${cross}</td>
            <td class="arabic">القسم الذى حلف لإبراهيم أبينا ليعطينا الخلاص بغير خوف من أيدى أعدائنا ، لنخدمه
                بطهارة وبر أمامه كل أيام حياتنا ، وأنت أيها الصبى تدعى نبى العلى لأنك تسبق بالمسير أمام الرب
                لتعد طريقه ، وتعطى علم الخلاص لشعبه لمغفرة خطاياهم. والمجد لله دائماً أبدياً آمين. ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
fifthExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; 5th Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; 5th Explanation
        <span class="arabic-caption">تيوطوكيا الأحد - التفسير الخامس</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >The Lord spoke to Moses: Upon the mount
                saying: Arise, build a lampstand: Overlay it with the chosen gold</td>
            <td class="arabic">الله كلم موسى: فوق جبل الطور أجهار: قم أصنع منارة: من الذهب المختار</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >And upon it seven candles: To shine by day
                and night: From the inside of the dome: And from the ark</td>
            <td class="arabic">وفيها سبعة سرج: تنير ليل و نهار: من داخل القبة: نيم تى كيفوتوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >He made it according to the plan: And
                built the lampstand: Out of precious gold: Blessed are you O chosen</td>
            <td class="arabic">فصنع موسى كما قال: وصنع المنارة: من الذهب العال: طوباك يامختارة</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >Blessed are you, O Mary: You gave meaning
                to the symbols: Your light dawned upon us: We the Christians</td>
            <td class="arabic">طوباك يامريم: فسرت الامثال: ونورك اشرق فينا: انون خانى إخريستيانوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >You are the lampstand: That is filled with
                light: And its light shined: Upon all the earth</td>
            <td class="arabic">أنت هى المنارة: المملوءة انوار: وشعاع نورها: أشرق على كل الأقطار</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >O Mary, you are higher: Than all the
                upright fathers: His Holy Spirit came upon you: The Holy Lord</td>
            <td class="arabic">وعليت يامريم: عن الآباء الأبرار: حل بروح قدسه فيك: الرب القدوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >Moses did see you: Upon Mount Tabor: A
                planted tree: Engulfed in light</td>
            <td class="arabic">رآك موسى: فوق جبل الطور: شجرة مغروسة: محاطة بالأنوار</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >Through you O Mary: We became victorious:
                No one has received: What you have been granted</td>
            <td class="arabic">بك يامريم فزنا: بفرح وبهجة وسرور: من نال مانلت: فى سائر بى كوسموس</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >There is no one like you: On earth or in
                heaven: The Lord favored you: Above all the creations</td>
            <td class="arabic">ليس من يشبهك: فى الأرض ولا فى السموات: والرب فضلك: عن كل المخلوقات</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >Many spoke of you: In prophesies and
                proverbs: The fathers called you: The fair dove.</td>
            <td class="arabic">وقد شهدوا عنك: فى اسفار ونبوات: سماك الآباء: تى إتشرومبى إثنيسوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >David your father: In the psalms did say:
                &ldquo;The Lord choose your beauty: And increased you in splendor.</td>
            <td class="arabic">داود أبوك: فى المزمور قد قال: الرب إختار حسنك: وزادك نور وجمال</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >He dwelt in your womb: Nine full months:
                You gave birth to Him, He drank your milk: According to the angel's decree.</td>
            <td class="arabic">وحل فى بطنك: تسعة أشهر بكمال: ولدتيه ورضع لبنك: كبشارة بى أنجيلوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >He likewise said: O mother of Man: A Man
                dwelt in her: The Most High King.</td>
            <td class="arabic">وقال ايضاً: ياأم الإنسان: وإنسان حل فيها: وهو الملك الديان</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >He Who overshadowed her: And sent her His
                Holy Spirit: You gave birth to the True God: The Creator of souls. ${cross}</td>
            <td class="arabic">الذى انشأها وأرسل: لها روح قدسه ببيان: ووضعت الله الحق: الخالق كل نفوس ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="refrain">
            <td class="english" >Hail to you O Mary: O you full of grace:
                Who are engulfed in light: O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم: يامملوءة نعمة: يامشتملة بالانوار: ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Intercede for us: On judgment day: Your Son
                granted us salvation: O daughter of Zion</td>
            <td class="arabic">إشفعى فينا: فى يوم الزحمة: بابنك نلنا الخلاص: ياإبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Holy, Holy, Holy; a reading from the
                Gospel according to our teacher St. Luke [1: 78-79] the Evangelist. May his blessings be with us
                all. Amen.</td>
            <td class="arabic">قدوس قدوس قدوس. فصل من الانجيل بحسب لوقا (١ : ٧٨-٧٩ ) البشير. بركاته تكون معنا.
                آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >Through the tender mercy of our God, with
                which the dayspring from on high has visited us. To give light to those who sit in darkness and
                the shadow of death, to guide our feet into the way of peace." And Glory be to God forever. Amen
                 ${cross}</td>
            <td class="arabic">من أجل تحنن رحمة إلهنا بهذه الذى افتقدنا به مشرقاً من العلاء ليضئ للجالسين فى
                الظلمة وظلال الموت ، لتستقيم أرجلنا إلى سبل السلام. والمجد لله دائماً أبدياً آمين. ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
sixthExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; 6th Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; 6th Explanation
        <span class="arabic-caption">تيوطوكيا الأحد - التفسير السادس</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >You are Aaron's censer: Who carries the
                Ember: Its incense and aroma: Filled all the universe.</td>
            <td class="arabic">ياشورية هرون: الحاملة جمر النار: وبخورها وعنبرها: ملأ كل الأقطار</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >Your presence O Mary: Has saved us from
                hell's fire: The promise was fulfilled through you: As was prophesied.</td>
            <td class="arabic">بوجودك يامريم: فزنا من حر النار: وبك تم الموعود: كما عنك تنبأون</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >You are the censer: In it are the
                ointment and incense: You held the Son of God: Light of Light.</td>
            <td class="arabic">أنت هى الشورية: فيها طيب وبخور: حملت إبن الله: إله نور من نور</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >He dwelt in your womb: For nine months:
                You gave birth to Him: He drank your milk, Like all humans.</td>
            <td class="arabic">وحل فى بطنك: تسعة شهور: ولدتيه ورضع لبنك: كسائر المخلوقين</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >You are Aaron's censer: In it is the
                incense Ember: O daughter of David: O precious stone.</td>
            <td class="arabic">ياشورية هارون: فيها بخور من عنبر: ياإبنة داود: ياحجر الجوهر</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >You held the worshipped: And He appeared
                from you: He freed those in bondage: And trampled down Satan.</td>
            <td class="arabic">حملت المعبود: وظهر منك أجهار: وفك كل وثاقات: وكسر فخ الاركون</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >You are the censer: The aroma of your
                incense spread: And filled all the earth: And through you we received joy,</td>
            <td class="arabic">انت هى الشورية: بخور طيبك فاح: وملأ المسكونة: وبك نلنا الأفراح</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >We offer you praise: In the eve and in
                the morn: O pillar of faith: For the Orthodox people.</td>
            <td class="arabic">نقرئك كل سلام: فى كل مساء وصباح: ياعمود دين: الأرثوذكسيين</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >Solomon spoke of you: In the Song of
                Songs: My sister and my friend: The Lord favored her.</td>
            <td class="arabic">سليمان قال عنك: فى نشيد الأنشاد: أختى وصديقتى: واليك الرب اراد</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >Your sweet aroma spread: From the Ember
                and increased: He gave symbols of you: In many prophecies.</td>
            <td class="arabic">روائح طيبك فاح: من عنبر وزاد: وقال عنك امثال: فى النبوات يشهدون</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >Blessed are you, O Mary: O the mother of
                Jesus Christ: O pure sanctuary: And the shelter of the Holy.</td>
            <td class="arabic">طوباك يامريم: أم ايسوس بى اخريستوس: ياهيكل طاهر: وحجاب للقدوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >Protect your Son's people: Deacons and
                presbyters: And all the lay people: And those gathered together.</td>
            <td class="arabic">احفظى شعب ابنك: شمامسة وقسوس: وجميع من فى البيعة: الشعب المجتمعون</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >Hail to you O Mary: O sanctuary for
                protection: Your Light dawned upon us: And filled all the earth.</td>
            <td class="arabic">السلام لك يامريم: ياهيكل منصان نورك أشرق فينا وملأ كل الأكوان</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >You held the Creator: The Son of God, the
                Judge: You gave birth to His Humanity: With the united Divinity. ${cross}</td>
            <td class="arabic">وحملت الخالق ابن الله الديان وولدتيه انسان باللاهوت متحدون ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Hail to you O Mary: O you full of grace:
                Who are engulfed in light: O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم: يامملوءة نعمة: يامشتملة بالانوار: ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="refrain">
            <td class="english" >Intercede for us: On judgment day: Your Son
                granted us salvation: O daughter of Zion</td>
            <td class="arabic">إشفعى فينا: فى يوم الزحمة: بابنك نلنا الخلاص: ياإبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >Holy, Holy, Holy; a reading from the
                Gospel according to our teacher St. Luke [2: 29-32] the Evangelist. May his blessings be with us
                all. Amen.</td>
            <td class="arabic">قدوس قدوس قدوس. فصل من الانجيل بحسب لوقا (٢ : ٢٩-٣٢) البشير. بركاته تكون معنا.
                آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english" >(The Gospel According to St. Luke) (CH.
                2: 29-32)</td>
            <td class="coptic" >( Ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲁⲧⲁ Ⲗⲟⲩⲕⲁⲛ ) ( ⲃˉ : ⲕˉⲑˉ )
            </td>
            <td class="arabic">لوقا (٢ : ٢٩-٣٢)</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english" >Lord, now You are letting Your servant
                depart in peace, according to Your word: For my eyes have seen Your salvation, Which You have
                prepared before the face of all peoples; A light to bring revelation to the Gentiles, and the
                glory of Your people Israel. Glory be to God forever. ${cross}</td>
            <td class="coptic" >Ⲧⲏⲛⲟⲩ ⲡⲁⲛⲏⲃ ⲭ̀ⲛⲁⲭⲁ ⲡⲉⲕⲃⲱⲕ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ
                ⲟⲩϩⲓⲣⲏⲛⲏ ⲕⲁⲧⲁ ⲡⲉⲕⲥⲁϫⲓ : ϫⲉ ⲁⲩⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲁⲃⲁⲗ ⲉ̀ⲡⲉⲕⲛⲟϩⲉⲙ : ⲫⲏⲉ̀ⲧⲁⲕ ⲥⲉⲃⲧⲱⲧϥ ⲙ̀ⲡⲉ ⲙ̀ⲑⲟ ⲛ̀ⲛⲓⲗⲁⲟⲥ
                ⲧⲏⲣⲟⲩ. Ⲟⲩⲟⲩⲱⲓⲛⲓ ⲉⲩϭⲱⲣⲡⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ϩⲁⲛⲉⲑⲛⲟⲥ : ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ Ⲡⲓⲥⲣⲁⲏⲗ. ${cross}</td>
            <td class="arabic">الآن ياسيد تطلق عبدك بسلام كقولك. لأن عينىّ قد ابصرتا خلاصك الذى أعددتة قدام جميع
                الشعوب. نوراً تجلى للأمم ومجداً لشعبك اسرائيل. ${cross}</td>
        </tr>
    </tbody>
</table>`
return html;
}
,
seventhExplanation(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Sunday Theotokia &ndash; 7th Explanation">
    <caption id="caption_table_${tableNumber}" class="caption">Sunday Theotokia &ndash; 7th Explanation
    <span class="arabic-caption">تيوطوكيا الأحد - التفسير السابع</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >You are called, O Theotokos The daughter
                of Joachim You became the highest heaven You're higher than the Cherubim</td>
            <td class="arabic">دعيت أم الله: ياإبنة يواقيم: وصرت كأعلا سماه: وفقت الكاروبيم</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >The Fountain of Life came forth from You
                He healed all the sick He returned the lost sheep To the Paradise of Joy</td>
            <td class="arabic">ظهر منك ينبوع الحياة: وأبرأ كل سقيم: ورد الخروف الضال: وحطم فخ الأركون</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >You are the dome of Moses That is filled
                with Light You are the ark of covenant Containing the secrets</td>
            <td class="arabic">ياقبة موسى: يامملوءة انوار: ياتابوت العهد: وفيه كل الاسرار</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >O the flower of incense Your aroma filled
                the earth O precious treasure O Aaron's rod</td>
            <td class="arabic">يازهرة الاطياب: بخورك ملأ الأقطار: ياكنز الجوهر: ياعصاة هرون</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >O golden vessel In it the hidden Manna O
                pure sanctuary Wherein God was delighted and dwelled</td>
            <td class="arabic">ياقسط ذهب غالى: والمن مخفى فيه: ياهيكل طاهر: أحبه الله وسكن فيه</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >He who believes in Him Shall live after
                death O you pure altar Carrying the hidden secrets</td>
            <td class="arabic">ومن يؤمن باسمه: بعد الموت يحييه: يامذبح طاهر: حامل السر المكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >Hail to you O Mary O favored above all
                virgins The fathers called you, &ldquo;The golden lampstand&rdquo;</td>
            <td class="arabic">السلام لك يامريم: ياست العذارى: سماك الآباء: كنزاً ومنارة</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >Many spoke of you With symbols and
                proverbs O the aroma of Ember In Aaron's censer</td>
            <td class="arabic">وكم ضربوا عنك: رمزاً وإشارة: يا بخور العنبر: فى شورية هارون</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >O sanctuary and protection A dwelling
                place for the Trinity O Throne of God the Father The Lord of Hosts</td>
            <td class="arabic">ياهيكل وحجاب: مسكن للثالوث: ياكرسى الله الآب: رب الصاباؤوت</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >Through you O Mary we were awarded The
                kingdom of Joy Blessed are you O Mary The sister of Solomon</td>
            <td class="arabic">بك يا مريم: فزنا بنعيم الملكوت: طوباك يامريم: إتسونى ان سولومون</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >Do not forget your servant For I am a
                poor sinner I plead for your intercessions On judgment day</td>
            <td class="arabic">لاتنسى عبدك: لأنى خاطى ومسكين: وأرجو شفاعتك: فى الموقف يوم الدين</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >Before Christ your Son Be unto me a
                helper and provider So He may forgive me The multitude of sins ${cross}</td>
            <td class="arabic">عند يسوع ابنك: كونى لى عوناً ومعين: لكى يغفر لى ذنبى: ومن قد سَلَفون ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="refrain">
            <td class="english" >Hail to you O Mary O you full of grace
                Who are engulfed in light O mother of the Merciful</td>
            <td class="arabic">السلام لك يامريم: يامملوءة نعمة: يامشتملة بالانوار: ياام الرحمة</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="refrain">
            <td class="english" >Intercede for us On judgment day Your Son
                granted us salvation O daughter of Zion ${cross}</td>
            <td class="arabic">إشفعى فينا: فى يوم الزحمة: بابنك نلنا الخلاص: ياإبنة صهيون ${cross}</td>
        </tr>
    </tbody>
</table>
`;
return html;
}
,
praiseOnShereNeMaria(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise on Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀">
    <caption id="caption_table_${tableNumber}" class="caption">Praise on Shere Ne Maria
        <span class="arabic-caption">مديح على شيري ني ماريا</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>I start my praise<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Words from my heart<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>I cry out and say<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>A rhythmic song</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>أبدأ فيك بمديح <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>نظم بقلب صحيح <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وأشرح فيك وأصيح <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>قول غالي موزون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Every needy one<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Rejoices and feels calm<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You brought all joy<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> To every living soul</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بمديحك يرتاح <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>كل ذليل محتاج <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>يابدء الأفراح <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>لك عندي عربون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>O sweet fruit<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Apple of my eye<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> No one can deny<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You are from on high</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ثمرة عربونى <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>هى طب عيونى <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>فى مدحك لامونى <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>كم عنى يقولون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Gabriel came<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> With tidings and name<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Emmanuel became<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> In your womb the same</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>جاءك غبريال <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ببشائر وأقوال <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وسكن فيك المتعال <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>سر خفي مكنون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>The Logos dwelt<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Able and shined<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You became heaven<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Fruitful and green</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>حل بكلمته <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وأشرق بقدرته <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>صرت كسمائه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ياعوسج بغصون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Savior of the world<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Became in your womb<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Was born of you<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> The Holy Spirit in you</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>مخلص العالم <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>صارفيك قائم <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>واستيقظ النائم <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ومخمور بفنون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>David in the Psalms<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Said you are the bride<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Offerings and gifts<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Was given to the One</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>داود فى المزمور <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>قال بنات صور <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بهدايا ونذور <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>قالوا فيك بفنون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Myriads and myriads<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Around the Throne Stands<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Hosts and ranks<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Many martyrs</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ربوات ثم ألوف <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>حول العرش وقوف <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وطغمات وصفوف <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وشهداء متصلون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>You are beyond<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Above all codes<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You are purity respond<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Any questions</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>زدت فى الأوصاف <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>عن كل الأوصاف <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ومشيتى بعفاف <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وسميت صهيون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Witnessed by Salome<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> The Virgin from the Womb<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Gave birth to Whom<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> While sealed by the One</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>سالومى شهدت <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بأن العذراء وضعت <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>آمنت وأعتقدت <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>والخاتم مصون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">

            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><br>Isaiah had said<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> That, your Son, Jesus<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Was born of you<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> In the right season</td>
            <td class="english">
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>أشعياء قال عنك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بأن يسوع ابنك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وخرج من بطنك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ونظرناه بعيون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>Zephaniah proclaimed<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> That Jesus appeared<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> As rain and dew<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Surrounded by numerous ranks</td>
            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>صوفونيوس خبر<br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بأن يسوع يظهر <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>شبه ندي ومطر <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>حوله صفوف لايحصون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>You are blessed<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You confused them all<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> By the water and Spirit<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> We conquered Satan</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>طوباك ثم طوباك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>حيرت العلماء <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بوجود الروح والماء <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>قهرنا الأركون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>Many thought in you<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> That this was illegal<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Till He raised<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> The dead and healed the sick</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ظنوا فيك أقوام <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بإن الحبل ده حرام <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>حتى حل وأقام <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>الأموات والمجنون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="north">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>The fathers said<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> A dome in a cloud<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> The dome of the Church<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Your support we search</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>شبهك الاباء <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>قبة وسحابة <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ووضعوا بإجابة <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وجميعهم فيك محتارون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>Many before came<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Praised and did not find Him<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Many came after Him<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> But the Mighty was down</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>غلب أقوام سبقوه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>مدحوا مالحقوه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>جاءوا بعده وجدوه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بسر خفى مكنون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>My heart rejoice<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> For you are my choice<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> O Mary we praise<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> We cry with voices</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>فيك رضا قلبى <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>من شأن طلبى <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>يامريم حسبي <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>تاجي وأنا دون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>You are Moses dome<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Ornamented all<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> In all four corners<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> With instruments and arts</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>قبة موسى كان <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>زخرفها بالألوان <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وجعل فيها الأركان <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بكل آله وفنون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>God has in the dome<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Many prayers and calls<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> The can is the love sign<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Were the manna in it</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>لله فى القبة <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>صلوات وطلبة <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>والقسط علامة المحبة <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>المن فيه مكنون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>A pure censer<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Holding the aroma<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You are the Ark of covenant<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Carrying the True Word</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>مجمرة التصعيد <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>زهرة عطر تقيد <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ياتابوت عهد جديد <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بصفائح وقرون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="north">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>You carried the Light<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Like seven minarets lit<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> You're Aaron's rod<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Which alone blossomed</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>نالوا نور من نور <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>سبع سرج ينيرون <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وقضيب كان مذخور <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>بأسم الأب هرون</span>
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>You are the altar<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> With incense offered<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Many prophesied<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> And were fulfilled</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>هيكل بموائد <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وبخور وصعائد <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وآيات وشواهد <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>عنك يتنبأون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="north">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>All what they said<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> In the dome they found<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> As your purity showed<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> Her virginity sealed</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>وجميع ما وضعوه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>في القبة وجدوه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>ولقدسك ذكروه <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>عذراء بكر مصون</span></td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="south">

            <td class="english" >
                <span CLASS="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br>We ask of you<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> To ask your Son<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> O blessed Mary<br />
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><br> To forgive us ${cross}</td>
            <td class="english" >
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>لازم نترجاك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>عند الابن عساك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>يامريم طوباك <br /></span>
                <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲙⲁⲣⲓⲁ̀: </span><span class="arabic-text"><br>راعينا بعيون ${cross}</span></td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
oMARY(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="O MARY">
    <caption id="caption_table_${tableNumber}" class="caption">O M A R Y
        <span class="arabic-caption">يا م ر ى م</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >O Mary: Lady of virgins: you
                attained greatness: from the True Light: You are exalted: by the Lord
                Himself: you bore the Creator: O what a great marvel!</td>
            <td class="enPhonics1" >Ya meem reh yeh meem: ya set
                el-abkar: qad nelty taazeem: men noor el-anwar: wa wohebty taazeem: men
                endoo qad sar: wa Hamalty al-khaleq: man za la yaHtar.</td>
            <td class="arabic">يا م ر ى م : ياست الأبكار : قد نلت تعظيم : من نور الأنوار :
                ووهبت تعظيم : من عنده قد صار : وحملت الخالق : من ذا لا يحتار</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >Wondrous among nations: wisdom to
                rulers: a hidden gem: and the gospel spoke of you:: They give you
                blessings: in all generations: O daughter of Joachim: exalted above the
                Cherubim.</td>
            <td class="enPhonics1" >Qad serty ogooba: lel roasa
                amthal: dorrah maHgooba: wa fi el-engeel qad qal: yotonek el-tooba: fi
                kol al-gial: ya ebnat youaqeem: qad foqty el-Cheroubim.</td>
            <td class="arabic">قد صرت اعجوبة : للرؤساء امثال : درة محجوبة : وفي الانجيل قد قال
                : يعطونك الطوبا : في كل الاجيال : يا ابنة يواقيم : قد فقتي الشاروبيم</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english" >You attained what no one could: O
                Mother of the Mercy: and you became: filled with grace: To the Divine you
                became: a veil for the Word: and greatly marveled: were you among the
                scholars.</td>
            <td class="enPhonics1" >Man nal ma nelty: ya om
                el-raHma: wa anty qaad serty: mamlooa nema: wa lel lahot serty: Hegaban
                lel-kalema: wa aHtar fiki: arbab al-tafheem.</td>
            <td class="arabic">من نال ما نلتى : يا ام الرحمة : وانتي قد صرتي : مملؤة نعمه :
                وللاهوت صرتي : حجابا للكلمة : واحتار فيك: ارباب التفهيم</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english" >O tabernacle of the covenant: O
                censer of Aaron: O spirit of glory: O daughter of Zion: O the light of
                eyes: with you we rejoice: and abide in grace: O full of grace.</td>
            <td class="enPhonics1" >Ya taboot el-ahde: ya magmaret
                Haroun: ya roH el-magd: ya ebnat Sehioun: ya noor el-oyoon: beky
                nasadoo: wa naHza bel-naeem: ya mamloua nema.</td>
            <td class="arabic">يا تابوت العهد : يا مجمرة هارون : يا روح المجد : يا ابنة صهيون
                : يا نور العيون : بك نسعد : ونحظي بالنعيم : يا مملؤة نعمه</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >O full of grace: the fortifying
                fortress: the jewel of mercy: the aid of the poor: Your son has purged
                death: O the intercessor of saints: intercede for us: O Mother of Mercy.</td>
            <td class="enPhonics1" >Ya mamloua nema: anty el-Hesn
                el-Haseen: anty kanz el-raHma: ya awn al-masakeen: be-ebnek zalet el
                naqma: ya sahfiat el-qedisin: Wa shafietna fil-zaHma: ya om el-raHim.</td>
            <td class="arabic">يا مملؤة نعمه : انت الحصن الحصين: انت كنز الرحمة: يا عون المساكين
                : بإبنك زالت النقمة : يا شفيعة القديسين : وشفيعتنا في الزحمة : يا ام الرحيم
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >Hail to you: O Lady of
                virgins: O daughter of Joachim: the chosen throne: Righteous is your
                Son: He purged our shame: the glorious God: the Creator of ages.</td>
            <td class="enPhonics1" >Noqadem laky a-tazeem: ya set
                el-abkar: ya ebnat Yowaqim: ya korseyan mokhtar: wel-mawlood menky
                karim: azal anna al-ar: al-elah el-azeem: khalek el ad-har.</td>
            <td class="arabic">نقدم لك التعظيم : ياست الأبكار : يا ابنة يواقيم : يا كرسيا مختار
                : والمولود منك كريم : ازال عنا العار : الاله العظيم : خالق الادهار</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="south">
            <td class="english" >The adornment of virgins: the holy
                Mother: the purity of the pure: O light of lights: O jewel of grace: O
                Mother of Mercy: truly you are the vine: filled and bearing fruit.</td>
            <td class="enPhonics1" >Ya zen el-abkar: ya qods
                el-aHbar: ya tohr el-at-har: ya noor el-anwar: ya kanz al-nema: ya om
                el-raHma: anty heya al-karma: al-mamloua athmar.</td>
            <td class="arabic">يا زين الأبكار : يا قدس الأحبار : يا طهر الأطهار : يا نور الأنوار
                : يا كنز النعمة : يا ام الرحمة: أنت هي الكرمة : المملؤة أثمار</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english" >O daughter of Joachim: you
                attained greatness: you are Jerusalem: glorious and honored: You are
                Zion: O precious jewel;: you released the captive: from the Deceiver&rsquo;s
                hand.</td>
            <td class="enPhonics1" >Ya ebnat Yowaqim: qad nelty
                al-tazeem: anty heya Orshaleem: zat al-magd wal fakhar: anty heya
                Sehioun: ya gawharan maknoon: fakakty el-masgoon: men yad el-makar.</td>
            <td class="arabic">يا ابنة يواقيم : قد نلت التعظيم : انت هي اورشليم : ذات المجد
                والفخار : انت هي صهيون : يا جوهرا مكنون : فككت المسجون : من يد المكار</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Your son saved Adam: the repentant
                sinner: humanity He set free: from all adversaries: The Lord from your
                childhood: witnessed your purity: and therefore has blessed you: before all
                nations.</td>
            <td class="enPhonics1" >Ebnek khalas Adam: el-khaty
                el-nadem: we ataq el-alam: men kol el-adrar: rabek men soghrek: lamma
                raa tohrek: qad tayab zekrek: fi kol el-aqtar.</td>
            <td class="arabic">ابنك خلص ادم : الخاطئ النادم : وعتق العالم : من كل الاضرار :
                ربك من صغرك : لما رأي طهرك : قد طيب ذكرك: في كل الاقطار</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english" >He sent you Gabriel: the Messenger
                of His words: and greeted you saying: The Lord has chosen you: His Holy
                Spirit: filled and dwelt within you: blessed are you O Virgin: throughout all
                ages."</td>
            <td class="enPhonics1" >Arsal laky Ghabrial: bemoHkam el
                aqwal: wa basharek ez qal: Allaho laky ekhtar: roH qodsoh malaky: wa
                sakan fi aHshaky: ya adra toobaky: fi kol el agial.</td>
            <td class="arabic">ارسل لك غبريال : بمحكم الاقوال : وبشرك اذ قال : الله لك اختار
                : روح قدسه ملاك : وسكن في احشاك يا: عذرا طوباك : في كل الاجيال</td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="south">
            <td class="english" >The Unseen and Holy: was born from
                you: and was called Jesus: for all eyes to see: Moses saw the bush:
                blazing with fire: its branches flaming: yet the bush was not consumed.</td>
            <td class="enPhonics1" >An gher el-maHsoos: al-rab el
                qodoos: menky ata wa doaya Isoos: wa nazarat-ho el-absar: Mousa raa
                al-awsag: wal-nar fihi tata-gag: wa aghsanoh tatawahag: ma darat-ho al-nar.
            </td>
            <td class="arabic">ان غير المحسوس : الرب القدوس : منك اتي ودعي ايسوس : ونظرته الابصار
                : موسي رأي العوسج : والنار فيه تتأجج : وأغصانه تتوهج : ما ضرته النار</td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english" >The blazing bush: which Moses had
                seen: was indeed Mary: the adornment of virgins: The fire is Jesus: the
                Holy Lord: who gave us the Law: engraved in stone.</td>
            <td class="enPhonics1" >Ena ma raat-ho al-aynan:
                moltaheban bel-niran: fi el-awsag wal-aghsan: heya Mariam zenat el-abkar:
                wel-nar heya Isoos: al-rab el-qodoos: motina el-namoos: maktooban fil-aHgar.
            </td>
            <td class="arabic">ان ما رأته العينان : ملتهبا بالنيران : في العوسج والأغصان : هي
                مريم زينة الأبكار : والنار هي إيسوس : الرب القدوس : معطينا الناموس : مكتوبا
                في الاحجار</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english" >Isaiah prophesied: about the
                birth: of Emmanuel: the Almighty King: Ezekiel saw a door: through which
                the Lord entered: He sealed the door and claimed it: highly exalted.</td>
            <td class="enPhonics1" >Fi Asheya qad qeel: an haza
                el-taweel: taled emanoueel: al-malek el-gabar: wa Hazqeyal raa bab:
                dakhal feeh rab el-arbab: wa khetm el-bab mohab: alya el-meqdar.</td>
            <td class="arabic">في اشعيا قد قيل : عن هذا التأويل : تلد عمانوئيل : الملك الجبار
                : وحزقيال رأي باب : دخل فيه رب الارباب : وختم الباب مهاب : عالي المقدار</td>
        </tr>
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english" >Highly exalted are you: and your
                Son Jesus: when He was born of you: the earth was adorned: And also
                Daniel: prophesied and said: I saw the high throne: highly exalted.</td>
            <td class="enPhonics1" >Alen howa qadrek: lean yasoo
                ebnek: lamma woled mennek: tazayanat el-aktar: wa aydan Danial: tanaba
                Haytho qal: raayto el-korsy el-al: aleya el meqdar.</td>
            <td class="arabic">عال هو قدرك : لإن يسوع ابنك : لما ولد منك : تزينت الاقطار :
                وايضا دانيال : تنبأ حيث قال : رأيت الكرسي العال : عالي المقدار</td>
        </tr>
        <tr id="table_${tableNumber}_row_28" class="south">
            <td class="english" >In the firmaments high I saw: one
                like the Son of Man: who has dominion: over all the earth: He is the Lord of
                Hosts: around Him are the ranks: thousands and myriads: glorifying in
                reverence.</td>
            <td class="enPhonics1" >Nazarto fok el-arkan: shebh ebn
                el-ensan: wa laho al-soltan: ala kol el aqtar: wa howa rabo el-qowat: wa
                men Hawloh taghamat: oloof wa rabawat: be ezamen wa waqar.</td>
            <td class="arabic">نظرت فوق الأركان : شبه ابن الانسان : وله السلطان : علي كل الأقطار
                : وهو رب القوات : ومن حوله طغمات: الوف وربوات : بعظم ووقار</td>
        </tr>
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english" >O daughter of Joachim: you are
                exalted above: the Cherubim and Seraphim: and all righteous fathers: The Lord
                was born from you: and David praises you: with his harp he sings: playing its
                ten strings.</td>
            <td class="enPhonics1" >Ya ebnat Yowaqim: foqt
                el-karoubim: aydan el-serafaim: wa kol el-aba el-abrar: menky ga
                el-mawlood: al-rab el-mabood: yamdaH fiki Dawood: bel-asharat awtar.</td>
            <td class="arabic">ياابنة يواقيم : فقت الكروبيم : وايضا السرافيم : وكل الاباء الابرار
                : منك جاء المولود : الرب المعبود: يمدح فيك داود : بالعشرة أوتار</td>
        </tr>
        <tr id="table_${tableNumber}_row_32" class="north">
            <td class="english" >The sound of the first string: is
                in honor of your name: the Virgin will carry: the Almighty King: And with the
                second string: David rejoices: chanting with hymns: while playing his harp.
            </td>
            <td class="enPhonics1" >El-watar el-awal: qawlon
                mobagal: wel-adra taHbal: bel-malek el-gabar: el-watar el-thany: Dawood
                bil-tahany: yoratel bel-alHan: ma darb el-qithar.</td>
            <td class="arabic">الوتر الاول : قول مبجل : والعذراء تحبل: بالملك الجبار : الوتر
                الثاني : داود بالتهاني : و يرتل بالالحان : مع ضرب القيثار</td>
        </tr>
        <tr id="table_${tableNumber}_row_34" class="north">
            <td class="english" >And the third O daughter: because
                you were faithful: you were filled with light: and the Lord chose you: The
                fourth string is sounded: so that all can hear: of her who is praised: all
                over the world.</td>
            <td class="enPhonics1" >Wel-thaleth ya ibna: anty
                motamana: bel-noor moshtamala: wal-rabo laky ekhtar: el-watar el-rabe:
                esghy ya same: za qawlon shae: fi kol el-aqtar.</td>
            <td class="arabic">الثالث يا ابنة : أنت مؤتمنة : بالنورمشتملة : والرب لك إختار :
                الوتر الرابع : اصغ يا سامع : ذا قول شائع : في كل الاقطار</td>
        </tr>
        <tr id="table_${tableNumber}_row_36" class="south">
            <td class="english" >The fifth is a sign of hope: as a
                dove she appears: with Ophir gold: upon her shoulders: With the sixth he
                sung: praises I will not hide: but I will praise with him: and proclaim to
                all.</td>
            <td class="enPhonics1" >Wel-khames khabar: Hamama heya
                tazhar: bel-zahab el-asfar: ala menkabayha sar: wel-sades qal fih:
                qawlan ma akhfih: lakeny arweeh: wa osh-heraho eg-har.</td>
            <td class="arabic">الخامس خبر : حمامة هي تظهر : بالذهب الاصفر : علي منكبيها صار
                : السادس قال فيه : قولاً ما أخفيه : لكني أرويه : واشهره أجهار</td>
        </tr>
        <tr id="table_${tableNumber}_row_38" class="south">
            <td class="english" >With the seventh string he said: O
                mountain, of the High God: the High took flesh from you: without a doubt: And
                with the eighth he sang: to the Virgin Mary: the Great chose her: and crowned
                her with honor.</td>
            <td class="enPhonics1" >Wel-sabe ez qal: ya gabal Allah
                el-al: tagasad menky el-motaal: bela shak wala enkar: wel-thamen ranam:
                lel-adra Mariam: ekhtarha al-moazam: wa kallalha bel-fakhar.</td>
            <td class="arabic">السابع اذ قال : يا جبل الله العال : تجسد منك المتعال : بلا شك ولا
                إنكار : والثامن رنم : للعذ را مريم : اختارها المعظم : وكللها بالفخار</td>
        </tr>
        <tr id="table_${tableNumber}_row_40" class="north">
            <td class="english" >With the ninth string he said:
                from her will surely come: God her son: who sealed her virginity: With the
                tenth he sang: the Powerful God: in Zion he appeared: the dwelling of the
                righteous.</td>
            <td class="enPhonics1" >El-tase qal anha: yazhar Haqan
                menha: al-Elah wa howa ebnaha: wal-bokooreya fi Hefzen wa waqar: El-watar
                el-asher: Allah el-qader: fi Sehioun zaher: maskan el-abrar.</td>
            <td class="arabic">التاسع قال عنها : يظهر حقا منها : الإله وهو إبنها : والبكورية في
                حفط ووقار : الوتر العاشر : الله القادر : في صهيون ظاهر : مسكن الأبرار</td>
        </tr>
        <tr id="table_${tableNumber}_row_42" class="north">
            <td class="english" >There isn&rsquo;t in all ages:
                anyone like you O Virgin: for you released the chains: and shame of Adam: O
                Lady of the creation: the pride of faith: your servant is in need: drowning
                because of sins.</td>
            <td class="enPhonics1" >Lam yowgad fi el-dahr: methlek
                ayatoha el-bekr, : leanek fakakty el-asr: an Adam wal-ar: ya sayedet
                el-akwan: ya fakhr el-eiman: ana abdek Hayran: gharek fil-awzar.</td>
            <td class="arabic">لم يوجد في الدهر : مثلك أيتها البكر : لأنك فككت الاسر : عن آدم
                والعار : يا سيدة الأكوان : يا فخر الإيمان : عبدك حيران : غارق في الاوزار
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_44" class="south">
            <td class="english" >Intercede for me: do not leave
                your servant: Ask your son to save me: From the fire: For your
                intercession: is heard and accepted: and He defends from the attacks: of the
                adversary.</td>
            <td class="enPhonics1" >Alen howa qadrek: la tatroky
                abdek: qasdy men waladek: Toba wa esteghfar: Wel adra tashfa: Fe elodar
                agma: We heia ana tadfa: darabat el-ashrar.</td>
            <td class="arabic">عالي هو قدرك : لا تتركي عبدك : قصدي من ولدك : توبة و أستغفار
                : و العذراء تشفع : في الحضار اجمع : و هي عنا تدفع : ضربات الاشرار</td>
        </tr>
        <tr id="table_${tableNumber}_row_46" class="south">
            <td class="english" >Arise O poor one, and clothe yourself in
                faith: and say Amen Amen: for us she intercedes: The persistent servant:
                Will always praise her: For by his side that Day: The Lady of virgins shall be. ${cross}</td>
            <td class="enPhonics1" >Qom enhad ya meskeen: wa elbes
                thob el-yaqeen, : wa qol amin amin: fa heya tashfa fil-Hodar: wal-nazem
                el-meskeen: madeHha fi kol Hin: maloh yom el-din: sewa sayedet el-abkar. ${cross}</td>
            <td class="arabic">قم وانهض يا مسكين : والبس ثوب اليقين : وقل امين امين : فهي تشفع في
                الحاضرين : و أنا الخاطي المسكين : مادحها في كل حين : مالي يوم الدين : سوي
                سيدة الابكار ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
rashiOMaria(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ">
    <caption id="caption_table_${tableNumber}" class="caption">Rashi O Maria<br><span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ</span>
        <span class="arabic-caption">راشي او ماريا</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">

            <td class="english" >
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span>Adam became<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> After he was contrite<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> Was defiant and sinful<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> Won and shamed the devil</td>
            <td class="arabic1"><span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> بك أصبح آدم<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span>  بعد أن كان نادم<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span>  كان مخالف وآثم<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span>  فاز وأخزى الأركون
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            
            <td class="english" ><span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span>O joy of Able<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> Crown of Israel<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> You were given honor<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> From all those who praise</td>
            <td class="arabic1"><span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span>يا فرح هابيل<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> وتاج إسرائيل<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> أعطيت التهليل<br />
                <span class="coptic-caption">Ⲣⲁϣⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: </span> بجميع من يمدحون<br /></td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> O grace of Abraham<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Isaac remains safe<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Jacob was a leader<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Joseph was seen with his eyes</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> يا نعمة إبراهيم<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  هوذا إسحق سليم<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  يعقوب كان زعيم<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  جاءه يوسف ورآه بعيوم</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> David chanted and said<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  In you explained sayings<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  And also in proverbs<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Wisdom of Solomon</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> داود رتل وقال<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  فيك شرح أقوال<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  وأيضاً فى الأمثال<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  حكمة سولومون</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> Your are the explained throne<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Like the arc of Noah<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  A flower's aroma spread<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  And olive branches</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> أنت الكرسى المشروح<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  شبه سفينة نوح<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  زهرة عطر تفوح<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  وأغصان الزيتون
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> Chariot of the Cherubim<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Wings of the Seraphim<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  O daughter of Joachim<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Censor of Aaron</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> مركبة الشاروبيم<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  أجنحة السيرافيم<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  ياإبنة يواقيم<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  شورية مع هرون
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> You&rsquo;re the grace of Peter<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  O wisdom of Paul<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  O joy of Phillip<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Purity of the confessors</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> أنت نعمة بطرس<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  يا حكمة بولس <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> يا فرحة فيلبس <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> طهر المعترفين</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> Salvation of Matthias<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Belief of Thomas<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  O Holy of Holies<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  The zeal of Simon</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> يا خلاص متياس<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> وأمانة توماس <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> يا قدس الأقداس <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> أنت غيرة سيمون</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> Crown of martyrs<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Joy began by you<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Conquered the enemies<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  And shamed the devil</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> إكليل الشهداء <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> بك الفرح بدأ <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> قهرت الأعداء <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> وأخزيت الأركون</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> Mother of the Incarnate<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Seed of our father David<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  You fulfilled the economy<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  A fortified castle</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> يا أم المولود <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> نسل الآب داود <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> كملت المقصود <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> أنت قلعة بحصون</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> After you gave birth to Him<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  On your shoulders carried Him<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  A Child, you nursed Him<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  How can this be</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> من بعد ما ولدتيه <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> على كتفك حملتيه <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> طفل وأرضعتيه <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> كيف هذا الأمر يهون</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> A hidden mystery<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  From the created world<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  A secret that was realized<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  After it was concealed</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> هذا سر مكتوم <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> عن الكون المرسوم <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> سر صار مفهوم <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> بعد أن كان مكنون
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">

            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> He who is enlightened<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Searches these mysteries<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  This is Light of Light<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  No one can surmise</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> من هو صاحب أفكار <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> يفحص هذه الأسرار <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> هذا نور من نور <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> لا تدركه ظنون
            </td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">

            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> If I say I fathom<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Some of its meanings<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  I cannot describe<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  To the high and the lowly</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> وإن قلت إنى أحويه <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> وبعض معانيه <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> ما أقدر أرويه <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> للعالى والدون</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="north">

            <td class="english" >
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> If the witness said<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Account of your honor stands<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  But with resolve<br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span>  Attained from you ${cross}</td>
            <td class="arabic1">
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> وإن قال الناظر <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> وصف شرفك قائم <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> لكن بعزائم <br />
                <span class="coptic-caption">ⲣⲁϣⲓ ⲱ̀ ⲙⲁⲣⲓⲁ: </span> منك متصلون ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
iPraiseTheVirgin(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="I Praise the Virgin">
    <caption id="caption_table_${tableNumber}" class="caption">I Praise the Virgin
        <span class="arabic-caption">أمدح فى البتول</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >I praise the Virgin: And explain and say: O
                the origin: And the hidden pearl</td>
            <td class="arabic">أمدح فى البتول: وأشرح فيها وأقول: ياأصل الأصول: ياجوهر مكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english" >Through your Son, our Lady: Cause of
                salvation: We reached the goal: And you brought us joy</td>
            <td class="arabic">بأبنك ياستنا: خلاص جنسنا: وبلغنا المنى: وبك صرنا فرحون</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english" >Was truly Incarnate: From a Virgin girl:
                Crucified and died: For us at Golgotha</td>
            <td class="arabic">تجسد الابن بثبات: من ست البنات: صلب عنا ومات: عند الاقرانيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >The fruit of my pledge: O daughter of Zion:
                To love your Son: And proclaim and say</td>
            <td class="arabic">ثمرة عربونى: ياأبنة صهيون: أحب الهي: وأصيح وأقول</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >Gabriel came: With tidings and sayings: You
                accepted His word: In calmness and wisdom</td>
            <td class="arabic">جاك غبريال: ببشائر وأقوال: وقبلت ما قال: بسر خفي مكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english" >He dwelt by His Word: In strength and
                power: You became like heaven: O, daughter of Zion</td>
            <td class="arabic">حل بكلمته: وشرح قدرته: صرت كسمائه: يا إبنة صهيون</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="refrain">
            <td class="english" >Your love embraced me: O pride of nations:
                Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
                Aaron's censer</td>
            <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
            ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="south">
            <td class="english" >He saved Adam: After his sorrow: And has
                freed the world: We rejoice in you</td>
            <td class="arabic">إبنك خلص آدم: بعد أن كان نادم: وعتق العالم: ونحن بك فرحون</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >He is glorified: And promised His Apostles:
                To save His people: From Satan's bondage</td>
            <td class="arabic">دائم تمجيده: وعاهد تلاميذه: يخلص عبيده: من كيد الأركون</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >Concerning you, David said,: &ldquo;The
                King rejoiced in you: And took flesh from you: The Lord on His Throne.&rdquo;</td>
            <td class="arabic">داود قال عنك: الملك إشتهى حسنك: وتجسد منك: رب العرش المكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english" >Myriads and thousands: Standing around the
                Throne: Ranks and orders: Saints and martyrs</td>
            <td class="arabic">ربوات وألوف: حول العرش وقوف: وطغمات وصفوف: وشهداء متصلون</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="south">
            <td class="english" >Sorrow was taken away: And we are
                comforted: Through you, O Mary: The pride of the human race</td>
            <td class="arabic">زالت عنا الأحزان وصرنا فى أطمئنان بك يامريم يا فخر البشريون</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >Salome witnessed: That the Virgin gave
                birth: She believed and confirmed: The mystery of mysteries.</td>
            <td class="arabic">سالومي شهدت: إن العذراء ولدت: آمنت وأعتقدت: بالسر المكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="refrain">
            <td class="english" >Your love embraced me: O pride of nations:
                Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
                Aaron's censer</td>
            <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
            ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >Solomon, your father: Praised in hymns
                and songs: And Jacob saw you: An upright ladder</td>
            <td class="arabic">سليمان أباك: صار ينشد بفنون: ويعقوب رآك: سلم مرتفعون</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english" >The chiefs had proclaimed: O fruitful vine:
                You are a Virgin and a bride: As they prophesied</td>
            <td class="arabic">شهد عنك الرؤساء: ياكرمة مغروسة: يابكرة وعروسة: كما عنك تنبأون</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english" >Zephaniah proclaimed: That Jesus will
                appear: As rain and dew: While her Virginity is sealed</td>
            <td class="arabic">صوفونيوس خبر: بأن يسوع يظهر: شبه ندي ومطر: والختم حصن مصون</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english" >Eve caused Adam to stray: In tears, he
                cried: Naked, he was exiled: Without you they would not return</td>
            <td class="arabic">ضللت حواء آدم: وصار يبكى نادم: خرج عريان عادم: لولاك ما رجعون</td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english" >Your rank is up high: And great is your
                glory: The Lord honored you: O Aaron's censer</td>
            <td class="arabic">عال هو قدرك: وعظيم هو مجدك: والله شرف ذكرك: يا شورية هرون</td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english" >Many praised you: You are the cause of all
                joy: You comfort everyone: Who is sorrowful and humble</td>
            <td class="arabic">غلب فيك المداح: يا بدء الأفراح: بمديحك يرتاح: كل ذليل محزون</td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="refrain">
            <td class="english" >Your love embraced me: O pride of nations:
                Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
                Aaron's censer</td>
            <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
            ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="south">
            <td class="english" >My heart rejoices in you: O Virgin Mary:
                Ask your Son Jesus: To protect me by His Might</td>
            <td class="arabic">فيك رضا قلبى: يامريم طلبى: يسوع إبنك حسبى: بقوته أكون</td>
        </tr>
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english" >Existent before the ages: Suffered and was
                crucified: He rose from His sleep: And the Disciples preached</td>
            <td class="arabic">قديم أذلي دائم: صلب عنا وتألم: استيقظ كالنائم: والتلاميذ يكرزون</td>
        </tr>
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english" >The righteous Apostles: And the four
                Evangelists: Preached in all nations: The tidings and rejoice</td>
            <td class="arabic">كرزوا في الأقطار: الرسل الأبرار: ونادوا باستبشار: الأباء الإنجيليون</td>
        </tr>
        <tr id="table_${tableNumber}_row_27" class="north">
            <td class="english" >Glory is due to you: O daughter of Joachim:
                You bore a great mystery: And gave birth to the Most High</td>
            <td class="arabic">لك كل التعظيم: ياإبنة يواقيم: حملت سر عظيم: ووضعت المكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_28" class="south">
            <td class="english" >Moses and Daniel: Said many parables: And
                you fit all that: Mysteriously and more</td>
            <td class="arabic">موسي ودانيال: ضربوا عنك أمثال: وقبلت ماقال: بسر خفي مكنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english" >You caused the world to shine: O the pride
                of faith: All the creatures were free: Because of you Mary</td>
            <td class="arabic">نورت الأكوان: يافخر الإيمان: لولاك ماكان: كل الخلائق يعتقون</td>
        </tr>
        <tr id="table_${tableNumber}_row_30" class="north">
            <td class="english" >Gifts were offered in faith: To the King
                of kings: By the great Magi: Myrrh, gold and frankincense</td>
            <td class="arabic">هدايا بإيمان: أتوا بهم الأعيان: مرا وذهباً ولبان: بها المجوس حاملون</td>
        </tr>
        <tr id="table_${tableNumber}_row_31" class="north">
            <td class="english" >They worshipped the born King: The Lord of
                lords: And Herod was terrified: And his soldiers marveled</td>
            <td class="arabic">وسجدوا للمولود: الرب المعبود: وهيرودس صار مرعوب: وجنده محتارون</td>
        </tr>
        <tr id="table_${tableNumber}_row_32" class="south">
            <td class="english" >Do not forsake at that time: A poor and
                humble sinner: Your plead on Judgment Day: And for all the Christians</td>
            <td class="arabic">لا تنسى في ذلك الحين: عبداً خاطئ مسكين: شفاعتك يوم الدين: لشعب ابنك أجمعين</td>
        </tr>
        <tr id="table_${tableNumber}_row_33" class="south">
            <td class="english" >We ask of Him forgiveness: Faith and
                repentance: To be in calmness: We the believers</td>
            <td class="arabic">ونسأل من جوده الغفران: وتوبة مع إيمان: لنصير في اطمئنان: نحن المؤمنون</td>
        </tr>
        <tr id="table_${tableNumber}_row_35" class="refrain">
        <td class="english" >Your love embraced me: O pride of nations:
        Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
        The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
        Aaron's censer</td>
    <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
    ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
praiseOnTeoiEnHikanos(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Praise on Teoi-enhikanos (O Daughter of David)">
    <caption id="caption_table_${tableNumber}" class="caption">O Daughter of David - Praise on Teoi-enhikanos
        <span class="arabic-caption">يا ابنة داود - مدح على تيؤي انهيكانوس</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >O daughter of David: The seed of the
                righteous: O Jewel inflamed: with The Mighty&rsquo;s divinity</td>
            <td class="arabic">يا ابنة داود: من نسل الأبرار: يا جوهر موقود: بلاهوت الجبار</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english" >He was ever-present: From the beginning of
                ages: Appeared born of you: With described humanity</td>
            <td class="arabic">كم من كان موجود: من قدم الأدهار: ظهر منك مولود: بناسوت موصوف</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english" >O door of grace: And key of paradise: O
                mother of the Mercy: And mother of the Holy</td>
            <td class="arabic">يا باب النعمة: ومفتاح الفردوس: يا أم الرحمة: ويا أم القدوس</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >Through the dwelling of the Word: In your
                womb, Agios: We gained mercy: And fear left us.</td>
            <td class="arabic">بحول الكلمة: في احشاك أجيوس: فزنا بالرحمة: وزال عنا الخوفى</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >O Arc of the covenant: And the tablets of
                the Torah: With the fingers of the Lord of glory: Placed within it.</td>
            <td class="arabic">يا تابوت العهد: وألواح التوراة: بأصبع رب المجد: موضوعة جواه</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english" >To Him the ranks worship: And cry out in
                all tongues: Appeared of you in flesh: Perfect and described</td>
            <td class="arabic">له الطغمات تسجد: وتصيح بكل لغات: ظهر منك بجسد: كامل موصوفى</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english" >O hidden jewel: O light of all lights: With
                the kept secret: In the knowledge of the Mighty</td>
            <td class="arabic">يا جوهر مكنون: يا ضوء الأنوار: بالسر المخزون: في علم الجبار</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >All the heavenly: Worship Him in awe:
                Humanity attained: Seeing Him revealed</td>
            <td class="arabic">كل العلويين: تسجد له بوقار: فاز البشريون: بنظرة مكشوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >O vessel of the Ember (aroma): With sweet
                aroma: O tree with branches: O joy of creation</td>
            <td class="arabic">يا حُقْ العنبر: بروائح عطرية: يا شجرة بأغصان: يا فرح البرية</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english" >The Lord appeared of you: And you&rsquo;re
                a maiden virgin: You bore Him as a boy: In perfect description</td>
            <td class="arabic">منك الرب ظهر: وانت بتول عذراء: ولدتيه شبه ولد: كامل موصوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english" >O Holy chamber: Of the Spirit of God the
                Judge: O throne, on it sat: The creator of all the world</td>
            <td class="arabic">يا خدر مقدس: لروح الله الديان: يا عرش وجلس: عليه منشي الأكوان</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >To Him, (they) worship and sanctify: And
                cry out in all tongues: <span class="coptic">Ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ</span>: Thousands and myriads
            </td>
            <td class="arabic">له تسجد وتقدس: وتصيح بكل لسان: <span class="coptic">Ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ</span>:
            ربوات والوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >O full moon: At the fullness of its form:
                Your light surpassed the dawn: At the shining of the sun</td>
            <td class="arabic">يا دوران البدر: عند كمال طقسه: نورك فاق الفجر: بعد اشرق شمسه</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english" >And Jesus raised your honor: With the
                dwelling of His Holy Spirit: In your womb, he came in triumph: To His own people</td>
            <td class="arabic">ويسوع زادك قدر: بحلول روح قدسه: في احشاك اتانا بالنصر: لشعبه المعروفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english" >O vision and prophecy: Saw it <span
                    class="coptic">Ⲙⲱⲏ̀ⲥⲓⲥ</span>: A bush enflamed with fire: No harm came upon it</span></td>
            <td class="arabic">يا رؤيا وأنذار: عاينها <span class="coptic">Ⲙⲱⲏ̀ⲥⲓⲥ</span>: عوسج في قلبه نار: ولم
                يمسه بأس</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english" >Like the adornment of all virgins: Carried
                the Messiah: Divinity as a live coal: United with humanity</td>
            <td class="arabic">كمثل زين الأبكار: حملت ماسياس: لاهوت كجمر النار: بالناسوت ملحوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english" >O fruitful plant: With out seed or water:
                In a pure field: Filled with fruit</td>
            <td class="arabic">يازرعا زاهر: من غير ماء وبذار: في حقل طاهر: محمل بالأثمار</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english" >In your womb appeared: Our Lord, the
                Almighty One: Able God: Merciful and Compassionate</td>
            <td class="arabic">صار في احشاك: ظاهر سيدنا الجبار: إله واحد قادر: متحنن ورؤوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english" >O hidden secret: In the light of lights: O
                mount of Zion: The Lord chose you</td>
            <td class="arabic">يا سر مكنون: في نور الأنوار: يا علية صهيون: إليك الرب اختار</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english" >Your Son released the captive: From the
                deceiver&rsquo;s bonds: After he was in debt: He became fulfilled and free</td>
            <td class="arabic">إبنك فك المسجون: من قيد المكار: بعد أن كان مديون: صار خالص موفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english" >O honor placed upon: The head of the
                righteous: Your name became raised: And increased in honor</td>
            <td class="arabic">يا شرفا موضوع: فوق رأس الأبرار: أسمك صار مرفوع: وزايد في المقدار</td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english" >You carried the Lord Jesus: His light
                shone openly: And released those who were: Placed in darkness</td>
            <td class="arabic">حملتي الرب يسوع: وأشرق نوره أجهار: وعتق من كان: في الظلمة محدوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english" >O truth of faith: And knowledge of the
                Trinity: Their light would not be seen: Without your Son</td>
            <td class="arabic">يا صدق الإيمان: ومعرفة الثالوث: لولا أبنك ما كان: ظهور نور الثالوث</td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english" >Nor received forgiveness: Or the heaves
                opened: Or man restored: To his known place</td>
            <td class="arabic">ولا نلنا الغفران: ولا أنفتح الملكوت: ولا رد الإنسان: لمحله المعروفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english" >O light and glory: Came upon all sites:
                Your light grew greater than: The sun of the dawn</td>
            <td class="arabic">يا ضوء وبهاء: عم على الأفاق: ضوءك صار أبهي: من شمس الأشراق</td>
        </tr>
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english" >Your honor pleases God: He fulfilled the
                promise: To Adam and treasured it: And removed fear from us</td>
            <td class="arabic">وأنوارك سُرَّ بها الإله: وأوفي الميثاق: لأدم واعتز بها: وزال عنا الخوف</td>
        </tr>
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english" >O blessed one: The righteous bless you:
                With harmonious voices: David praised you</td>
            <td class="arabic">يا طوبانية: تطوبك الأبرار: بأصوات شجية: مدحك داود البار</td>
        </tr>
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english" >With prophetic songs: Upon the ten strings:
                Was called a father to: The indescribable Son</td>
            <td class="arabic">باغاني نبوية: على العشرة أوتار: وسمي بالأبوية: للابن الغير الموصوف</td>
        </tr>
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english" >O appearance of grace: And the knowledge
                of faith: O mother of mercy: And key of forgiveness</td>
            <td class="arabic">يا ظهور النعمة: ومعرفة الإيمان: يا أم الرحمة: ومفتاح الغفران</td>
        </tr>
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english" >Through the dwelling of the Word: The Son
                of God the Judge: We attained grace in your womb: And fear departed from us</td>
            <td class="arabic">بحلول الكلمة: ابن الله الديان: في احشاك نلنا النعمة: وزال عنا الخوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_30" class="north">
            <td class="english" >O pillar of faith: And foundation of the
                creed: Without your Son there would not be: Laws nor Canons</td>
            <td class="arabic">يا عَمَّد الإيمان: وياقاعدة الدين: لولا إبنك ما كان: شرايع ولا قوانين</td>
        </tr>
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english" >You enlighten my thoughts: May the Lord
                Jesus: Forgive my sins: And malicious deeds</td>
            <td class="arabic">تنيري أفكاري: ولعل الرب إيسوس: يعفي عن اوزاري: وفعلي المتلوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_32" class="north">
            <td class="english" >My hail to the virgin: The maiden pride of
                virgins: Mother of the God of might Jesus: Knower of the secrets</td>
            <td class="arabic">سلامي إلى العذراء: البتول زين الأبكار: ام إله القدرة: يسوع عالم الأسرار</td>
        </tr>
        <tr id="table_${tableNumber}_row_33" class="south">
            <td class="english" >And I hail the virgin: In secret and
                openly: She intercedes for He: Who offers her praise</td>
            <td class="arabic">وسلامي إلي العذراء: في سري والإجهار: من يمدحها شطره: تشفع فيه الوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_34" class="north">
            <td class="english" >And peace to all present: Everyone in
                total: Men, women and children: The Lord forgive them</td>
            <td class="arabic">وسلامي إلى الحضار: الكل بأجمعهم: رجال ونساء وصغار: الرب يسامحهم</td>
        </tr>
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english" >The prayer of the pride of virgins: Mary,
                be with them: Saved from the fire&rsquo;s captivity: And from all fear</td>
            <td class="arabic">وصلاة زين الأبكار: مريم تكون معهم: ينجو من حجر النار: ومن كل الخوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_36" class="north">
            <td class="english" >Its author, the sinner: Praising the pride
                of virgins: Fearing all my sins: And the heat of the flames of fire</td>
            <td class="arabic">وناظمها الخاطئ: مادح زين الأبكار: خائف من زلاتي: وحر لهيب النار</td>
        </tr>
        <tr id="table_${tableNumber}_row_37" class="south">
            <td class="english" >My goal before my death: Repentance full
                of tears: Erasing all my sins: Relieving me from fear</td>
            <td class="arabic">قصدي قبل مماتي: توبة بدموع غزار: وتمحي سيئاتي: واطئمن من الخوفى.</td>
        </tr>
        <tr id="table_${tableNumber}_row_38" class="north">
            <td class="english" >For I am a poor sinner: Drowning in my
                sins: Throughout the day despised: And lost in the thoughts</td>
            <td class="arabic">لأنى خاطئ ومسكين: وغارق فى الأوزار: بطول الدهر مهين: وتايه فى الأفكار</td>
        </tr>
        <tr id="table_${tableNumber}_row_39" class="south">
            <td class="english" >I have no gentle bosom: Save the pride of
                virgins: Mary the aid of the poor: Mother of a merciful God</td>
            <td class="arabic">ولاليّ صدر حنَيّن: سوى زين الأبكار: مريم عون المسكين: أم إله ورؤوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_40" class="north">
            <td class="english" >O Mary my treasure: I came to you hopeful:
                Fearful of my judgment day: And the day of the verdict</td>
            <td class="arabic">يا مريم يا ذخري: انا جئتك عشمان: خائف من يوم حشري: ويوم نصب الميزان</td>
        </tr>
        <tr id="table_${tableNumber}_row_41" class="south">
            <td class="english" >Before the end of my life: Grant me faith:
                And repentance pleasing to my soul: And fear departs from me</td>
            <td class="arabic">قبل تمام عمري: تجودي لي بإيمان: وتوبة تشرح صدري: ويزول عني الخوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_42" class="north">
            <td class="english" >Repentance pleasing to my soul: With tears
                upon my cheeks: I do not fall to my tomb: Till I am saved and redeemed</td>
            <td class="arabic">توبة تشرح صدري: بدموع على الخد سحوم: ولا أنزل قبري: إلا خالص موفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_43" class="south">
            <td class="english" >Your servant came to you: Hoping for your
                shelter: Your light and honor: My treasure and my hopes</td>
            <td class="arabic">عبدك اتاك: ومتوسل بحماك: نورك وبهاك: يا ذخري والأمال.</td>
        </tr>
        <tr id="table_${tableNumber}_row_44" class="north">
            <td class="english" ><span class="coptic">Ⲡⲉⲕⲃⲱⲕ Ⲅⲁⲃⲣⲓⲏⲗ: Ⲁ̀ⲛⲟⲕ
                    ⲡⲓϩⲏⲕⲓ</span>: All my life I beg you: Consumed in your love:</td>
            <td class="arabic"><span class="coptic">Ⲡⲉⲕⲃⲱⲕ Ⲅⲁⲃⲣⲓⲏⲗ: Ⲁ̀ⲛⲟⲕ ⲡⲓϩⲏⲕⲓ</span> طول عمري اترجاك: وبحبك
                ملهوفي</td>
        </tr>
        <tr id="table_${tableNumber}_row_45" class="south">
            <td class="english" >I conclude my words O brothers: Praising
                <span class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ</span>: The prayers of the pride of warriors: My Lord <span
                    class="coptic">Ⲅⲉⲟⲣⲅⲓⲟⲥ</span> ${cross}</td>
            <td class="arabic">وأختم قولي يا أخوان: بمديح<span class="coptic"> Ϯⲡⲁⲣⲑⲉⲛⲟⲥ:</span> :وصلاة فخر الشجعان
                سيدي <span class="coptic">Ⲅⲉⲟⲣⲅⲓⲟⲥ</span> ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
,
yourMerciesOMyGod(tableNumber) {
const html = `
<table id="table_${tableNumber}" style="display: table;" title="Your Mercies O My God">
    <caption id="caption_table_${tableNumber}" class="caption">Your Mercies O My God
        <span class="arabic-caption">مراحمك ياإلهي</span>
    </caption>
    <tbody>
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english" >Your mercies O my God: Are plenteous: Your
                mercies O my God: Has no boundaries</td>
            <td class="arabic">مراحمك ياإلهي: كثيرة جداً: مراحمك ياإلهي: لاتحصى لها عددا</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english" >The drops of rain: Are counted in Your
                hands: Also the sand of the sea: Is present before Your eyes</td>
            <td class="arabic">قطرات الأمطار: معدودة بين يديك: وأيضاً رمل البحار: كائن قدام عينيك</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="south">
            <td class="english" >How much more are my sins: My trespasses
                are before You: And all that I have done: Are present before You</td>
            <td class="arabic">كم بالأكثر خطاياى: وآثامى قدامك: وما صنعته يداى: ظاهر كله امامك</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english" >The sins of my youth: Remember it not O
                Lord: Do not contemplate: On my sins O God</td>
            <td class="arabic">خطايا صباى وجهلى: يارب لاتذكرها: ولا تتأمل آثامى: ياإلهى بل اتركها</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english" >For You desire not: The death of sinners:
                But You are ever pleased: That they return to You</td>
            <td class="arabic">فإنك لاتشاء موت الخاطىء: بل تحب رجوعه إليك: ياإلهى اقبل طلباتى: رجعت وتبت إليك</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english" >The tax-collector was chosen: The
                adulteress You forgave: The thief You remembered: Your mercy is boundless</td>
            <td class="arabic">فإن العشار اخترته: والزانية غفرت لها: واللص يارب ذكرته: رحمتك لانهاية لها</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english" >I am a sinner too: O Lord teach me: To
                offer repentance: Like the adulteress accept me</td>
            <td class="arabic">وأنا خاطىء ايضاً: يارب علمنى: لكى اصنع توبة: مثل الزانية اقبلنى</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english" >Return us O God unto Your salvation: For
                You are good and gracious: Grant us Your salvation: For you are our Savior</td>
            <td class="arabic">ردنا يارب الى خلاصك: فإنك صالح ورحيم: إصنع معنا كصلاحك: لأنك قادر وكريم</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english" >If You judge us in Your uprightness: We
                shall have no excuse: We await Your compassion: And plead for Your mercy</td>
            <td class="arabic">وإن حاكمتنا بعدلك: فلا نجد حجة: لكن ننتظر فضلك: ومراحمك نترجى</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english" >Your mercies O my God: Are beyond all
                measure: Your mercies O my God: Are as the countless sand</td>
            <td class="arabic">مراحمك ياإلهي: تعلو كل الابعاد: مراحمك ياإلهي: كالرمل بغير عدد</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="south">
            <td class="english" >Your mercies O my God: Are more than the
                stars in heaven: And the plants of the earth: The mountains and little hills</td>
            <td class="arabic">مراحمك ياإلهي: أكثر من عدد النجوم: وأكثر من نبات الأرض: والجبال وكل النجوم</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english" >O King of peace: Grant us Your peace:
                Confirm Your peace unto us: And forgive us our sins</td>
            <td class="arabic">ياملك السلام: سلامك أعطنا: قرر لنا سلامك: وحل بروحك فينا</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english" >Disperse the enemies: Of Your Church:
                Fortify her stronghold: That she may never be shaken</td>
            <td class="arabic">فرق أعداء البيعة: وحصنها بالإيمان: بحصون عالية منيعة: فلا تتزعزع لزمان</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english" >Emmanuel our God: Is now in our midst: With
                the Glory of His Father: And the Holy Spirit</td>
            <td class="arabic">عمانوئيل نفسه: فى وسطنا الآن: بمجد أبيه وروح: قدسه الآن وكل أوان</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english" >May He bless us all: And purify our hearts:
                And heal the sicknesses: Of our souls and bodies</td>
            <td class="arabic">فليباركنا كلنا: ويطهر قلوبنا: ويشفى أمراضنا: ويخلص نفوسنا</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english" >We worship the Father and the Son: And the
                Holy Spirit: Both now and forever: And to the end of ages, Amen. ${cross}</td>
            <td class="arabic">نسجد للآب والأبن: والروح القدس: الآن وكل أوان: والى الأبد آمين ${cross}</td>
        </tr>
    </tbody>
</table>`;
return html;
}
};

function cleanFunctionName(functionName) {
    return functionName
        .replace(/[\s.,()]+/g, "")  // Remove spaces, punctuation, parentheses
        .replace(/[-]/g, "")        // Remove any hyphens or special characters
        .replace(/\s/g, "")         // Remove any remaining whitespace
        .trim();                    // Trim any leading/trailing spaces
}

// Main function to retrieve the HTML by feast name
function getKiahkPraiseHtml(praiseName, tableNumber) {
    const cleanedPraiseName = cleanFunctionName(praiseName);
    const praiseFunction = kiahkPraises[cleanedPraiseName];  // Look up the function dynamically
    
    if (praiseFunction) {
        return praiseFunction(tableNumber);  // Call the associated function
    } else {
        return `No function found for the feast: ${praiseName}`;
    }
}



export {
    getKiahkPraiseHtml,
    
}
