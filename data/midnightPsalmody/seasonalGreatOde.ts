const greatOde = {
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Nativity Great Ode">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Nativity Great Ode
                <span class="coptic-caption">Ⲡⲟ̅ⲥ̅ ⲡⲉⲛⲟ̅ⲥ̅ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩϣ̀ⲫⲏⲣⲓ</span>
                <span class="arabic-caption">الهوس الكبير لعيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Oh, sing to the LORD a new song! Sing to the LORD, all the earth. Sing to the LORD, bless His name; proclaim the good news of His salvation from day to day. Declare His glory among the nations, His wonders among all peoples. For the LORD is great and greatly to be praised; He is to be feared above all gods. Alleluia.</td>
                    <td class="coptic">Ϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ ϧⲉⲛ ⲟⲩ ϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ: ϩⲱⲥ ⲉ̀Ⲡϭⲟⲓⲥ ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ:ϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲙ̀ⲡⲉϥⲟⲩϫⲁⲓ ⲛ̀ⲉ̀ϩⲟⲟⲩ ϧⲁ ⲧ̀ϩⲓ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲥⲁϫⲓ ⲙ̀ⲡⲉϥⲱⲟⲩ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ ⲛⲉⲙⲛⲉϥϣ̀ⲫⲏⲣⲓ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ϫⲉ ⲟⲩⲛⲓϣϯ ⲡⲉ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲉ̀ⲙⲁϣⲱ: ϥ̀ⲟⲓ ⲛ̀ϩⲟϯ ⲉ̀ϫⲉⲛ ⲛⲓⲛⲟⲩϯ ⲧⲏⲣⲟⲩ: Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ̀.</td>
                    <td class="arabic">سبحوا الرب تسبيحاً جديدا: سبحى الرب أيتها الأرض كلها: سبحوا الرب وباركوا اسمه: بشروا بخلاصه: يوماً فيوم: وأخبروا بمجده فى الأمم: وبعجائبه فى جميع الشعوب: لأن الرب عظيم ومبارك جداً: ومخوف على كل الآلهة. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">O LORD, our Lord, How excellent is Your name in all the earth, who have set Your glory above the heavens! Out of the mouth of babes and nursing infants You have ordained strength. Alleluia.</td>
                    <td class="coptic">Ⲡⲟ̅ⲥ̅ ⲡⲉⲛⲟ̅ⲥ̅ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩϣ̀ⲫⲏⲣⲓ ⲁϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ: ϫⲉ ⲁⲥϭⲓⲥⲓ ⲛ̀ϫⲉ ⲑ̀ⲙⲉⲧⲛⲓϣϯ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲥⲁⲓⲉ̀ ⲥⲁⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲗⲱⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲏⲉ̀ⲑⲟⲩⲉ̀ⲙϭⲓ ⲁⲕⲥⲉⲃⲧⲉ ⲡⲓⲥ̀ⲙⲟⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أيها الرب ربنا مثل عجب صار اسمك على الأرض كلها لأنه قـد أرتفع عظم بهائك فوق السموات من أفواه الاطفال والرضعان هيأت سبحاً. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">The LORD has said to Me, 'You are My Son, Today I have begotten You. Ask of Me, and I will give You The nations for Your inheritance, And the ends of the earth for Your possession. You shall rule them with an iron scepter. Alleluia.</td>
                    <td class="coptic">Ⲡⲟ̅ⲥ̅ ⲁϥϫⲟⲥ ⲛⲏⲓ ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲁϢⲏⲣⲓ: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲁ̀ⲣⲓⲉ̀ⲧⲓⲛ ⲛ̀ⲧⲟⲧ ⲛ̀ⲧⲁϯ ⲛⲁⲕ ⲛ̀ϩⲁⲛⲉ̀ⲑⲛⲟⲥ ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ: ⲟⲩⲟϩ ⲡⲉⲕⲁ̀ⲙⲁϩⲓ ϣⲁ ⲁⲩⲣⲏϫϥ ⲙ̀ⲡ̀ⲕⲁϩⲓ: ⲉⲕⲉ̀ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟ̀ⲩ ϧⲉⲛ ⲟⲩϣ̀ⲃⲱⲧ ⲙ̀ⲃⲉⲛⲓⲡⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">الرب قال لي أنت ابنى أنا اليوم ولدتك اسألني أعطك الأمم ميراثـاً لك وسلطانك على أقطار الأرض لترعاهم بقضيب من حديد. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">The Lord said to me, "You are My Son; today I have begotten You. Ask of Me, and I will give You the nations as Your inheritance and the ends of the earth as Your possession, to shepherd them with a rod of iron." Alleluia.</td>
                    <td class="coptic">Ⲁⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫϯ: ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛ̀ϩⲁⲛϣⲏⲣⲓ ⲛ̀ⲱ̀ⲓⲗⲓ: ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛ̀ⲟ̀ⲩ̀ⲱ̀ⲟ̀ⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛ̀ⲟ̀ⲩⲱ̀ⲟ̀ⲩ ⲙ̀ⲡⲉϥⲣⲁⲛ: ⲟⲩⲱ̀ϣⲧ ⲙ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲧⲉϥⲁ̀ⲩⲗⲏ ⲉ̅ⲑ̅ⲩ̅: ⲟⲩⲟϩ ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲛⲁⲡⲓⲧⲁⲡ ⲛ̀ⲟ̀ⲩⲱ̀ⲧ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">قدموا يا أبناء اللـه للرب قدموا للرب ابناء الكباش . قدموا للرب مجداً وكرامة قدموا للرب مجداً لاسمه اسجدوا للرب في ديار قدسه الحبيب مثل ابن ذوى القرن الواحد. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Offer to the Lord, O children of God, offer to the Lord, sons of the rams. Offer to the Lord glory and honor. Offer to the Lord the glory due to His name. Worship the Lord in the courts of His holiness. The Beloved is like the son of a one-horned beast. Alleluia.</td>
                    <td class="coptic">Ⲟⲩⲥ̀ⲙⲩⲣⲛⲁ ⲛⲉⲙ ⲟⲩⲥ̀ⲧⲁⲕⲧⲏ ⲛⲉⲙ ⲟⲩⲕⲁⲥⲓⲁ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲕϩ̀ⲃⲱⲥ: ⲉⲩⲉ̀ⲟ̀ⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ⲛⲓϣⲉⲣⲓ ⲛ̀ⲧⲉ Ⲧⲩⲣⲟⲥ ϧⲉⲛ ϩⲁⲛⲇⲱⲣⲟⲛ: ⲟⲩⲟϩ ⲉⲩⲉ̀ⲉⲣⲗⲓⲧⲁⲛⲉⲩⲓⲛ ⲙ̀ⲡⲉϥϩⲟ ⲛ̀ϫⲉ ⲛⲓⲣⲁⲙⲁⲟⲓ ⲛ̀ⲧⲉ ⲡⲓⲗⲁⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">المر والميعة والسليخة من ثيابك وله تسجد بنات صور بالهدايا ويلتقي وجهه أغنياء شعب الأرض. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">From the rising of the sun to its going down. Out of Zion, the perfection of beauty, God will shine forth. Alleluia.</td>
                    <td class="coptic">Ⲓⲥϫⲉⲛ ⲛⲓⲙⲁⲛϣⲁⲓ ⲛ̀ⲧⲉ ⲫ̀ⲣⲏ ϣⲁ ⲛⲉϥⲙⲁⲛϩⲱⲧⲡ: ⲑ̀ⲙⲉⲧⲥⲁⲓⲉ̀ ⲛ̀ⲧⲉ ⲡⲉϥⲥⲁⲓⲉ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲥⲓⲱⲛ: ⲉϥⲉ̀ⲓ̀ ⲛ̀ϫⲉ Ⲫϯ ϧⲉⲛ ⲟⲩⲱ̀ⲛϩ ⲉ̀ⲃⲟⲗ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">من مشارق الشمس إلي مغاربها من صهيون حسن بهاء جماله اللـه يأتي جهاراً. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Praise is awaiting You, a God, in Zion; and to You the vow shall be performed in Jerusalem. Alleluia.</td>
                    <td class="coptic">Ⲛ̀ⲑⲟⲕ Ⲫϯ ϥ̀ⲉ̀ⲣϣⲁⲩ ⲛⲁⲕ ⲛ̀ϫⲉ ⲡⲓϫⲱ ϧⲉⲛ Ⲥⲓⲱⲛ: ⲉⲩⲉ̀ϯ ⲛⲁⲕ ⲛ̀ϩⲁⲛⲉ̀ⲩⲭⲏ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">لك ينبغى التسبيح يا اللـه في صهيون ولك توفى النـذور في أورشليم. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">He shall come down like rain upon the grass before mowing, like showers that water the earth. Alleluia.</td>
                    <td class="coptic">Ⲉϥⲉ̀ⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲙⲟⲩⲛϩⲱⲟⲩ ⲉ̀ϫⲉⲛ ⲟⲩⲥⲟⲣⲧ: ⲛⲉⲙ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛⲧⲉⲗⲧⲓⲗⲓ ⲉⲩⲑ̀ⲗⲏ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">ينزل مثل المطر على الجزة ومثل قطرات المطر تقطر على الأرض. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">The kings of Tarshish and of the isles will bring presents; the kings of Sheba and Seba Will offer gifts. Alleluia.</td>
                    <td class="coptic">Ⲛⲓⲟ̀ⲩⲣⲱⲟ̀ⲩ ⲛ̀ⲧⲉ Ⲑⲁⲣⲑⲟⲥ ⲛⲉⲙ ⲛⲓⲚⲏⲥⲟⲥ: ⲉⲩⲉ̀ⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ: ⲛⲓⲟ̀ⲩⲣⲱⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲀ̀ⲣⲁⲃⲟⲥ ⲛⲉⲙ Ⲥⲁⲃⲁ ⲉⲩⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">ملوك طرسوس والجزائر يقدمون له الهدايا ملوك العرب وسبأ يقـربون له العطايا. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">Yes, all kings shall fall down before Him; all nations shall serve Him. Alleluia.</td>
                    <td class="coptic">Ⲉⲩⲉ̀ⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ⲛⲓⲟ̀ⲩⲣⲱⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲛⲓⲉ̀ⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ ⲉⲩⲉ̀ⲉⲣⲃⲱⲕ ⲛⲁϥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">ويسجد له جميع ملوك الأرض وكل الأمم تتعبد له. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">He shall live; and the gold of Sheba will be given to Him. Alleluia.</td>
                    <td class="coptic">Ϥ̀ⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ϫⲉ ⲡⲟⲩⲣⲁⲛ ⲙ̀ⲡⲉϥⲙ̀ⲑⲟ: ⲉϥⲉ̀ⲱ̀ⲛϧ ⲟⲩⲟϩ ⲉⲩⲉ̀ϯ ⲛⲁϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲛⲟⲩⲃ ⲛ̀ⲧⲉ ϯⲀ̀ⲣⲁⲃⲓⲁ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">يكون اسمهم كريماً لديه يعيش ويعطى من ذهب العرب. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">His name shall continue as long as the sun. And men shall be blessed in Him; all nations shall call Him blessed. Alleluia.</td>
                    <td class="coptic">Ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲉϥⲣⲁⲛ ⲉϥⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ϣⲁ ⲉ̀ⲛⲉϩ: ϧⲁϫⲱϥ ⲙ̀ⲫ̀ⲣⲏ ϥ̀ϣⲟⲡ ⲛ̀ϫⲉ ⲡⲉϥⲣⲁⲛ: ⲉⲩⲉ̀ϭⲓⲥ̀ⲙⲟⲩ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧϥ ⲛ̀ϫⲉ ⲛⲓⲫⲩⲗⲏ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲟⲩⲟϩ ⲉⲩⲉ̀ϯⲱ̀ⲟⲩ ⲛⲁϥ ⲛ̀ϫⲉ ⲛⲓⲉ̀ⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">فليكن اسمه مباركاً إلي الأبد وقبل الشمس يدوم اسمه وتتبارك به جميع قبائل الأرض وكل الأمم تمجده. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">You have the authority, in the day of Your power; in the beauties of holiness, from the womb, before the star of the morning, I have begotten You. Alleluia.</td>
                    <td class="coptic">Ⲥ̀ϣⲟⲡ ⲛⲉⲙⲁⲕ ⲛ̀ϫⲉ ϯⲁ̀ⲣⲭⲏ ϧⲉⲛ ⲡ̀ⲉ̀ϩⲟⲟ̀ⲩ ⲛ̀ⲧⲉ ⲧⲉⲕϫⲟⲙ: ϧⲉⲛ ⲫ̀ⲟⲩⲱ̀ⲓⲛⲓ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲑⲟⲩⲁⲃ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ ϧⲁϫⲱϥ ⲙ̀ⲡⲓⲥⲓⲟⲩ ⲛ̀ⲧⲉ ϩⲁⲛⲁ̀ⲧⲟⲟⲩⲓ̀ ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">معك الرئاسة في يوم قوتـك في بهاء القديسين من البطن قبل كوكب الصبح ولدتك. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Mercy and truth have met together; righteousness and peace have kissed. Truth shall spring out of the earth, and righteousness shall look down from heaven. Alleluia.</td>
                    <td class="coptic">Ⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲉ̀ϩ̀ⲣⲉⲛ ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ: ⲟⲩⲇⲓⲕⲉⲟ̀ⲥⲩⲛⲏ ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ⲁⲩϣⲉⲡⲧⲟⲧⲟⲩ ⲉ̀ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ: ϯⲙⲉⲑⲙⲏⲓ ⲁⲥϣⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ: ϯⲇⲓⲕⲉⲟ̀ⲥⲩⲛⲏ ⲁⲥϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">الرحمة والحق التقيـا العدل والسلامة تلاثما الحق من الأرض أشرق والعدل من السماء أطلع. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Behold, we heard of it in Ephrathah; we found it in the fields of the woods. Let us go into His tabernacle; let us worship at His footstool. Alleluia.</td>
                    <td class="coptic">Ϩⲏⲡⲡⲉ ⲁⲛⲥⲟⲑⲙⲉⲥ ϧⲉⲛ Ⲉⲫⲣⲁⲑⲁ: ⲁⲛϫⲉⲙⲥ ϧⲉⲛ ⲡⲓⲙⲁ ⲛ̀ⲧⲉ ⲡⲓⲓⲁϩϣ̀ϣⲏⲛ: ⲉⲛⲉ̀ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲉϥⲙⲁⲛ̀ϣⲱⲡⲓ ⲛ̀ⲧⲉⲛⲟ̀ⲩⲱϣⲧ ⲙ̀ⲡⲓⲙⲁ ⲉ̀ⲧⲁ ⲛⲉϥϭⲁⲗⲁⲩϫ ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛ̀ϧⲏⲧϥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">ها قد سمعناها في إفراثا ووجدناها في موضع الغابة فلندخل إلي مساكنه ونسجد في الموضع الذي فيه قامت قدماه. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">Let them exalt Him in the church of His people, and praise Him in the seat of the elders, for He has made the family like a flock of sheep, the upright shall see and rejoice. Alleluia. (Ps. 107:32, 41-42)</td>
                    <td class="coptic">Ⲙⲁⲣⲟⲩϭⲁⲥϥ ϧⲉⲛ ⲧ̀ⲉⲕⲕⲗⲏⲥⲓⲁ ⲛ̀ⲧⲉ ⲡⲉϥⲗⲁⲟⲥ: ⲟⲩⲟϩ ⲙⲁⲣⲟⲩ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϩⲓⲧ̀ⲕⲁⲑⲉⲇⲣⲁ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ϫⲉ ⲁϥⲭⲱ ⲛ̀ⲟⲩⲙⲉⲧⲓⲱⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛ ⲉ̀ⲥⲱⲟⲩ ⲉⲩⲉ̀ⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲏⲉ̀ⲧⲥⲟⲩⲱⲛ ⲟⲩⲟϩ ⲉⲩⲉ̀ⲟ̀ⲩⲛⲟϥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">فليرفعوه في كنيسة شعبه وليباركوه على منابر الشيوخ لأنه جعل أبوة مثل الخراف يبصر المستقيمون ويفرحون. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">The Lord has sworn and will have no regret, “You are a priest forever, after the order of Melchizedek.” Alleluia. (Ps. 110:4)</td>
                    <td class="coptic">Ⲁϥⲱⲣⲕ ⲛ̀ϫⲉ Ⲡⲟ̅ⲥ̅ ⲟⲩⲟϩ ⲛ̀ⲛⲉϥⲟ̀ⲩⲱ̀ⲙ ⲛ̀ϩ̀ⲑⲏϥ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲫ̀ⲟⲩⲏⲃ ϣⲁ ⲉ̀ⲛⲉϩ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">حلف الرب ولم يندم أنك أنت هو الكاهن إلي الأبد على طقس ملشيصاداق. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">God be merciful to us and bless us, and cause His face to shine upon us. Alleluia. (Ps. 67:1)</td>
                    <td class="coptic">Ⲫϯ ⲉϥⲉ̀ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲉϥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ: ⲉϥⲉ̀ⲟ̀ⲩⲱ̀ⲛϩ ⲙ̀ⲡⲉϥϩⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲟⲩⲟϩ ⲉϥⲉ̀ⲛⲁⲓ ⲛⲁⲛ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">ليترأف اللـه علينا ويباركنا وليظهر وجهه علينا ويرحمنا. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Save Your people, and bless Your inheritance; shepherd them also, and bear them up forever. Alleluia. (Ps. 28:9)</td>
                    <td class="coptic">Ⲡⲟ̅ⲥ̅ ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀: ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟ̀ⲩ ϭⲁⲥⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">يارب خلص شعبك بارك ميراثك ارعهم وارفعهم إلي الأبد. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Whoever is wise will observe these things, and they will understand the lovingkindness of the Lord. Alleluia. (Ps. 107:43)</td>
                    <td class="coptic">Ⲛⲓⲙ ⲡⲉ ⲡⲓⲥⲁⲃⲉ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲛⲁⲓ ⲟⲩⲟϩ ⲛ̀ⲥⲉⲕⲁϯ ⲉ̀ⲛⲓ ⲛⲁⲓ ⲛ̀ⲧⲉ Ⲡⲟ̅ⲥ̅. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">من كان حكيماً فليحفظ هذه وليفهم مراحم الرب . الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">Bless me, bless me, behold the repentance, forgive me, my fathers and brothers, pray for me; in love I ask you to remember me.</td>
                    <td class="coptic">Ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲓ: ⲓⲥ ϯⲙⲉⲧⲁⲛⲟⲓⲁ ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ: ⲛⲁⲓⲟϯ ⲛⲉⲙ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϣ̀ⲗⲏⲗ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ: ϧⲉⲛ ⲟⲩⲁ̀ⲅⲁⲡⲏ ϯϯϩⲟ ⲉ̀ⲣⲱⲧⲉⲛ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀:</td>
                    <td class="arabic">باركوا على. ها مطانية اغفروا لي يا آبائي وإخوتي صلوا علي. بالمحبة أسالكم اذكروني.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Glory to the Father and to the Son and the Holy Spirit, now and ever and unto the ages of the ages.</td>
                    <td class="coptic">ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ̀ ⲕⲉ Ⲁⲅⲓⲱ̀ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ</td>
                    <td class="arabic">المجد للاب والابن والروح القدس الان وكل أوان وإلي دهر الدهور</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Amen. Alleluia. Lord have mercy (3).</td>
                    <td class="coptic">Ⲁ̀ⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
                    <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Great Ode">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Great Ode
                <span class="coptic-caption">Ⲡⲟ̅ⲥ̅ ⲁⲓⲱϣ ⲟⲩⲃⲏⲕ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ</span>
                <span class="arabic-caption">الهوس الكبير لعيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">LORD, I cry out to You; make haste to me! Give ear to my voice when I cry out to You. Let my prayer be set before You. Alleluia.</td>
                    <td class="coptic">Ⲡⲟ̅ⲥ̅ ⲁⲓⲱϣ ⲟⲩⲃⲏⲕ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ: ⲙⲁϩ̀ⲑⲏⲕ ⲉ̀ⲧ̀ⲥⲙⲏ ⲛ̀ⲧⲉ ⲡⲁϯϩⲟ ⲉ̀ⲡ̀ϫⲓⲛⲧⲁⲱϣ ⲉ̀ⲡ̀ⲱϣⲓ ϩⲁⲣⲟⲕ: ⲙⲁⲣⲉⲥⲥⲱⲟ̀ⲩⲧⲉⲛ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ⲛ̀ϫⲉ ⲧⲁⲡ̀ⲣⲟⲥⲉ̀ⲩⲭⲏ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">يا رب إليك صرخت فاستمعني أنصت إلى صوت تضرعي إذا ما صرخت إليك لتستقم صلاتي قدامك . هلليلويا .</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">The voice of the LORD is over the waters; the God of glory thunders; The LORD is over many waters. Alleluia.</td>
                    <td class="coptic">Ⲡ̀ϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀Ⲡⲟ̅ⲥ̅ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟ̀ⲩ: Ⲫϯ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟ̀ⲩ ⲁϥⲉ̀ⲣϧⲁⲣⲁⲃⲁⲓ: Ⲡⲟ̅ⲥ̅ ϩⲓϫⲉⲛ ϩⲁⲛⲙⲱⲟ̀ⲩ ⲉⲩⲟϣ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">صوت الرب على المياه إله المجد أرعـد الرب على المياه الكثيرة. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">The voice of the LORD is powerful; the voice of the LORD is full of majesty. The voice of the LORD makes the deer give birth, and strips the forests bare. Alleluia.</td>
                    <td class="coptic">Ⲡ̀ϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϫⲟⲙ: ⲡ̀ϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲉⲧⲥⲁⲓⲉ̀: ⲡ̀ϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉϥⲉ̀ⲥⲟⲃϯ ⲛ̀ϩⲁⲛⲉ̀ⲓⲟⲩⲗ: ⲟⲩⲟϩ ϥ̀ⲛⲁϭⲱⲣⲡ ⲛ̀ϩⲁⲛⲓⲁϩϣ̀ϣⲏⲛ ⲉ̀ⲃⲟⲗ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">صوت الرب بقوة صوت الرب بجلال عظيم صوت الرب يرتب الأيا ئل ويكشف الغياض. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">By the word of the LORD the heavens were made, and all the host of them by the breath of His mouth. Alleluia.</td>
                    <td class="coptic">Ϧⲉⲛ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲁⲩⲧⲁϫⲣⲟ ⲛ̀ϫⲉ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲟⲩⲟϩ ⲛⲟⲩⲇⲩⲛⲁⲙⲓⲥ ⲧⲏⲣⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ⲣⲱϥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">بكلمة الرب تشددت السموات وبروح فيه كل قواتها. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">He gathers the waters of the sea together as a heap; He lays up the deep in storehouses. Alleluia.</td>
                    <td class="coptic">Ⲫⲏⲉ̀ⲧⲑⲱⲟ̀ⲩϯ ⲛ̀ⲛⲓⲙⲱⲟ̀ⲩ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲁ̀ⲥⲕⲟⲥ: ⲟⲩⲟϩ ⲁϥⲭⲱ ⲛ̀ⲛⲓⲛⲟⲩⲛ ϧⲉⲛ ϩⲁⲛⲁ̀ϩⲱⲣ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">الجامع مياه البحار كأنها فى زق ووضع الأعماق في كنوز. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">I will remember the Lord from the land of the Jordan, and from the heights of Hermon, from the little hill Mizar. Alleluia.</td>
                    <td class="coptic">Ϯⲛⲁⲉ̀ⲣⲡⲉⲕⲙⲉⲩⲓ̀ Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀ⲧⲉ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ ⲛⲉⲙ Ⲉⲣⲙⲱⲛⲓⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲕⲟⲩϫⲓ ⲛ̀ⲧⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">اذكر يا رب في أرض الأردن وحرمون من الجبل الصغير. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Deep calls unto deep at the noise of Your waterfalls; all Your waves and billows have gone over me. Alleluia.</td>
                    <td class="coptic">Ⲫ̀ⲛⲟⲩⲛ ⲁϥⲙⲟⲩϯ ⲟⲩⲃⲉ ⲫ̀ⲛⲟⲩⲛ ⲉⲩⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲉⲕⲕⲁⲧⲁⲣⲁⲕⲧⲏⲥ: ⲛⲉⲕⲣⲱⲟ̀ⲩϣ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲛⲉⲕϫⲟⲗ ⲁⲩⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">العمق نادى العمق بصوت ميازيبك كل تياراتك أتت علـَّي. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">The waters roar and are troubled; the mountains shake with its swelling. There is a river whose streams shall make glad the city of God. Alleluia.</td>
                    <td class="coptic">Ⲁⲩⲱϣ ⲟⲩⲟϩ ⲁⲩϣ̀ⲑⲟⲣⲧⲉⲣ ⲛ̀ϫⲉ ⲛⲓⲙⲱⲟ̀ⲩ: ⲁⲩϣ̀ⲑⲟⲣⲧⲉⲣ ⲛ̀ϫⲉ ⲛⲓⲧⲱⲟ̀ⲩ ϧⲉⲛ ⲡⲉϥⲁ̀ⲙⲁϩⲓ: ⲛⲓⲟⲩⲟ̀ⲓ ⲛ̀ⲧⲉ ⲫ̀ⲓⲁⲣⲟ ⲥⲉⲑ̀ⲣⲟ ⲛ̀ⲑ̀ⲃⲁⲕⲓ ⲙ̀Ⲫϯ ⲟ̀ⲩⲛⲟϥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">عجت المياه وأضطربت وتقلقلت الجبال بعزته مجاري الأنهار تفرح مدينة اللـه. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Who stills the noise of the seas, the noise of their waves; the river of God is full of water. Alleluia.</td>
                    <td class="coptic">Ⲫⲏⲉ̀ⲧϣ̀ⲑⲟⲣⲧⲉⲣ ⲛ̀ϯⲟⲩⲏ̀ϣⲥⲓ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ ⲛⲉⲙ ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲉϥϩⲱⲓⲙⲓ: ⲫ̀ⲓⲁⲣⲟ ⲛ̀ⲧⲉ Ⲫϯ ⲁϥⲙⲟϩ ⲙ̀ⲙⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">المقلق سعة البحر وصوت امواجه وأمتلأ نهر اللـه مياه. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">You divided the sea by Your strength; You broke the heads of the sea serpents in the waters. You broke the heads of Leviathan in pieces, and gave him as food to the people inhabiting the wilderness. Alleluia.</td>
                    <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲁⲕⲧⲁϫⲣⲟ ⲙ̀ⲫ̀ⲓⲟⲙ ϧⲉⲛ ⲧⲉⲕϫⲟⲙ ⲛ̀ⲑⲟⲕ ⲁⲕϧⲟⲙϧⲉⲙ: ⲛ̀ⲛⲓⲁ̀ⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲓⲇ̀ⲣⲁⲕⲱⲛ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟ̀ⲩ: ⲛ̀ⲑⲟⲕ ⲁⲕⲗⲉⲥ ⲛⲓⲁ̀ⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲡⲓⲇ̀ⲣⲁⲕⲱⲛ: ⲟⲩⲟϩ ⲁⲕⲧⲏⲓϥ ⲛ̀ϧ̀ⲣⲉ ⲙ̀ⲡⲓⲗⲁⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲑⲁⲩϣ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أنت شددت البحر بقوتك أنت سحقت رؤوس التنانين على المياه أنت رضضت رؤوس التنانين وأعطيتهم طعاماً لشعب الحبشة. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">You broke open the fountain and the flood. The day is Yours, the night also is Yours. Alleluia.</td>
                    <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲁⲕⲫⲱϫⲓ ⲛ̀ⲛⲓⲙⲟⲩⲙⲓ ⲛⲉⲙ ⲛⲓⲙⲟⲩⲛⲥⲱⲣⲉⲙ: ⲫⲱⲕ ⲡⲉ ⲡⲓⲉ̀ϩⲟⲟ̀ⲩ ⲫⲱⲕ ⲟⲛ ⲡⲉ ⲡⲓⲉ̀ϫⲱⲣϩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أنت فجَّرت العيون والأودية، لك هو النهار ولك هو الليل أيضاً. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">The waters saw You, O God; the waters saw You, they were afraid; the depths also trembled. The clouds poured out water; the skies sent out a sound; Your arrows also flashed about. The voice of Your thunder was in the whirlwind. Alleluia.</td>
                    <td class="coptic">Ⲫϯ ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ϩⲁⲛⲙⲱⲟ̀ⲩ ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ϩⲁⲛⲙⲱⲟ̀ⲩ ⲟⲩⲟϩ ⲁⲩⲉ̀ⲣϩⲟϯ: ⲁⲩϣ̀ⲑⲟⲣⲧⲉⲣ ⲛ̀ϫⲉ ⲛⲓⲛⲟⲩⲛ ⲛ̀ⲧⲉⲛ ⲡ̀ⲁ̀ϣⲁⲓ ⲛ̀ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ϩⲁⲛⲙⲱⲟ̀ⲩ: ⲛⲓϭⲏⲡⲓ ⲁⲩϯ ⲛ̀ⲧⲟⲩⲥ̀ⲙⲏ: ⲕⲉ ⲅⲁⲣ ⲛⲉⲕⲥⲟⲑⲛⲉϥ ⲥⲉⲙⲟϣⲓ: ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲉⲕϧⲁⲣⲁⲃⲁⲓ ϧⲉⲛ ⲡⲓⲧ̀ⲣⲟⲭⲟⲥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أبصرتك المياه يا اللـه رأتك المياه فـفـزعت اضطربت اللجج من كثرة دوى المياه أعطت السحاب صوتها لأن سهامك تسير صوت رعـودك فى البكرة. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">Your lightnings lit up the world; the earth trembled and shook.Alleluia.</td>
                    <td class="coptic">Ⲛⲉⲕⲥⲉⲧⲉⲃⲣⲏϫ ⲁⲩⲉⲣⲟⲩⲱ̀ⲓⲛⲓ ⲉ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ: ⲁϥⲕⲓⲙ ⲟⲩⲟϩ ⲁϥⲥ̀ⲑⲉⲣⲧⲉⲣ ⲛ̀ϫⲉ ⲡ̀ⲕⲁϩⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أضاءت بروقك المسكونة تزلزلت الأرض وأرتعدت. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">O God, Your way was in the sea, Your path in the great waters. Alleluia.</td>
                    <td class="coptic">Ⲫϯ ⲉ̀ⲣⲉ ⲡⲉⲕⲙⲱⲓⲧ ⲛ̀ϧ̀ⲣⲏⲓ ϧⲉⲛ ⲫ̀ⲓⲟⲙ: ⲟⲩⲟϩ ⲛⲉⲕⲙⲁ ⲙ̀ⲙⲟϣⲓ ϧⲉⲛ ϩⲁⲛⲙⲱⲟ̀ⲩ ⲉⲩⲟϣ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">يا اللـه فى البحر طريقك مسالكك المياه الكثيرة. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">You rule the raging of the sea; when its waves rise, You still them. Alleluia.</td>
                    <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲉⲧⲟⲓ ⲛ̀ⲛⲏⲃ ⲉ̀ⲡ̀ⲁ̀ⲙⲁϩⲓ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ: ⲟⲩⲟϩ ⲡ̀ⲕⲓⲙ ⲛ̀ⲧⲉ ⲛⲉϥϫⲟⲗ ⲛ̀ⲑⲟⲕ ϣⲁⲕⲑ̀ⲣⲉϥϩ̀ⲣⲟⲩⲣ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أنت تسود على عزة البحر وحركة أمواجه أنت تهدى. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">I will set his hand over the sea; and his right hand over the rivers. Alleluia.</td>
                    <td class="coptic">Ⲉⲓⲉ̀ⲭⲱ ⲛ̀ⲧⲉϥϫⲓϫ ϧⲉⲛ ⲫ̀ⲓⲟⲙ: ⲟⲩⲟϩ ⲧⲉϥⲟ̀ⲩⲓ̀ⲛⲁⲙ ϧⲉⲛ ϩⲁⲛⲓⲁⲣⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">جعل فى البحر يده وفى الأنهار يمينه. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">The floods have lifted up, O LORD, the floods have lifted up their voice; the floods lift up their waves; the noise of many waters, Alleluia.</td>
                    <td class="coptic">Ⲁⲩⲧⲱⲟ̀ⲩⲛⲟⲩ ⲛ̀ϫⲉ ϩⲁⲛⲓⲁⲣⲱⲟ̀ⲩ: Ⲡⲟ̅ⲥ̅ ⲁⲩϭⲓⲥⲓ ⲛ̀ⲧⲟⲩⲥ̀ⲙⲏ ⲛ̀ϫⲉ ϩⲁⲛⲓⲁⲣⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗ ϩⲁ ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ϩⲁⲛⲙⲱⲟ̀ⲩ ⲉⲩⲟϣ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">قامت الأنهار يا رب رفعت الأنهار صوتها من صوت مياة كثيرة. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">The LORD on high is mightier than the mighty waves of the sea. Alleluia.</td>
                    <td class="coptic">Ϩⲁⲛϣ̀ⲫⲏⲣⲓ ⲛⲉ ⲛⲓⲣⲱⲟ̀ⲩϣ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ: ϥ̀ⲟⲓ ϣ̀ⲫⲏⲣⲓ ⲛ̀ϫⲉ Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲛⲏⲉ̀ⲧϭⲟⲥⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">عجيبة هى أهوال البحر عجيب هو الرب فى الأعالي. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Let the heavens rejoice, and let the earth be glad; Let the sea roar, and all its fullness; let the field be joyful, and all that is in it. Alleluia.</td>
                    <td class="coptic">Ⲙⲁⲣⲟⲩⲟ̀ⲩⲛⲟϥ ⲛ̀ϫⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲟⲩⲟϩ ⲙⲁⲣⲉϥⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ ⲡ̀ⲕⲁϩⲓ: ⲙⲁⲣⲉϥⲕⲓⲙ ⲛ̀ϫⲉ ⲫ̀ⲓⲟⲙ ⲛⲉⲙ ⲡⲉϥⲙⲟϩ ⲧⲏⲣϥ: Ⲉⲩⲉ̀ⲣⲁϣⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲉϣϣⲟϯ ⲛⲉⲙ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲉ ⲛ̀ϧⲏⲧⲟⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">لتفرح السموات ولتبتهج الأرض وليتحرك البحر وجميع ملئه تفرح البقاع وكل ما فيها. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Then all the trees of the woods will rejoice before the LORD. For He is coming, for He is coming to judge the earth. Alleluia.</td>
                    <td class="coptic">Ⲧⲟⲧⲉ ⲉⲩⲉ̀ⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ ⲛⲓϣ̀ϣⲏⲛ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲓⲁϩϣ̀ϣⲏⲛ: ⲉ̀ⲃⲟⲗ ϧⲁⲧ̀ϩⲏ ⲙ̀ⲡ̀ϩⲟ ⲙ̀Ⲡⲟ̅ⲥ̅ ϫⲉ ϥ̀ⲛⲏⲟⲩ ϫⲉ ϥ̀ⲛⲏⲟⲩ ⲉ̀ϯϩⲁⲡ ⲉ̀ⲡ̀ⲕⲁϩⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">حينئذ يبتهج كل شجر الغاب من قدام وجه الرب لأنه يأتى ليدين الأرض. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">Let the sea roar, and all its fullness. Let the rivers clap their hands; let the hills be joyful together before the LORD, for He is coming to judge the earth. Alleluia.</td>
                    <td class="coptic">Ⲙⲁⲣⲉϥⲕⲓⲙ ⲛ̀ϫⲉ ⲫ̀ⲓⲟⲙ ⲛⲉⲙ ⲛⲉϥⲙⲟϩ ⲧⲏⲣϥ: ϩⲁⲛⲓⲁⲣⲱⲟ̀ⲩ ⲉⲩⲉ̀ⲕⲱⲗϩ ⲛ̀ⲛⲟⲩϫⲓ ⲉⲩⲥⲟⲡ: ⲟⲩⲟϩ ⲛⲓⲧⲱⲟ̀ⲩ ⲉⲩⲉ̀ⲑⲉⲗⲏⲗ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲡⲟ̅ⲥ̅ ϫⲉ ⲁϥⲓ̀ ⲉ̀ϯϩⲁⲡ ⲉ̀ⲡ̀ⲕⲁϩⲓ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">فليتحرك البحر وكل امتلائه الأنهار تصفق بأيديها جميعاً والجبال تبتهج أمام وجه الرب لأنه أتى ليدين الأرض. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">The deep, as it were a garment, is His covering: the waters stood above the mountains. At Your rebuke they fled; at the voice of Your thunder they hastened away. They went up over the mountains; they went down into the valleys, to the place which You founded for them. Alleluia.</td>
                    <td class="coptic">Ⲫ̀ⲛⲟⲩⲛ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩ̀ϩ̀ⲃⲱⲥ ⲛ̀ϫⲱⲗϩ ⲛ̀ⲧⲁϥ ϩⲁⲛⲙⲱⲟ̀ⲩ ⲉⲩⲉⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲉ̀ϫⲉⲛ ⲛⲓⲧⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲉⲕⲉ̀ⲡⲓⲧⲓⲙⲓⲁ ⲥⲉⲛⲁⲫⲱⲧ: ⲛ̀ⲧⲉⲛⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲉⲕϧⲁⲣⲁⲃⲁⲓ ⲉⲩⲉⲉ̀ⲣϩⲟϯ: ϩⲁⲛⲧⲱⲟ̀ⲩ ⲉⲩⲛⲁ ⲉ̀ⲡ̀ⲱϣⲓ: ⲟⲩⲟϩ ϩⲁⲛⲙⲉϣϣⲟϯ ⲉⲩⲛⲏⲟⲩ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲡⲓⲙⲁ ⲉ̀ⲧⲁⲕϩⲓⲥⲉⲛϯ ⲙ̀ⲙⲟϥ ⲛⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">كساه العمق مثل الثوب وعلى الجبال تقف المياه من انتهارك تهرب ومن صوت رعـودك تجزع تصعد الجبال وتنزل البقاع إلي الموضع الذى أسسته لها. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">He sends forth his fountains among the valleys: the waters shall run between the mountains. Alleluia.</td>
                    <td class="coptic">Ⲫⲏ ⲉⲑⲟⲩⲱ̀ⲣⲡ ⲛ̀ϩⲁⲛⲙⲟⲩⲙⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϩⲁⲛϧⲉⲗⲗⲟⲧ: ⲉⲩⲉ̀ⲥⲓⲛⲓ ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀ϩⲁⲛⲧⲱⲟ̀ⲩ ⲛ̀ϫⲉ ϩⲁⲛⲙⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">الذي يرسل العيون فى الأودية وفى وسط الجبال تعبر المياه. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">The sea saw it and fled; Jordan turned back. The mountains skipped like rams, The little hills like lambs. Alleluia. (Ps. 114:3-4)</td>
                    <td class="coptic">Ⲫ̀ⲓⲟⲙ ⲁϥⲛⲁⲩ ⲟⲩⲟϩ ⲁϥⲫⲱⲧ: ⲟⲩⲟϩ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ ⲁϥⲕⲟⲧϥ ⲉ̀ⲫⲁϩⲟⲩ ⲛⲓⲧⲱⲟ̀ⲩ ⲉⲩⲉ̀ⲑⲉⲗⲏⲗ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛⲱ̀ⲓⲗⲓ: ⲟⲩⲟϩ ⲛⲓⲕⲁⲗⲁⲙⲫⲟ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛϩⲓⲏⲃ ⲛ̀ⲉⲥⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">أبصر البحر فهرب والأردن رجع إلى خلف ارتكضت الجبال مثل الكباش والآكام مثل حملان الضان. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">What ailed you, O sea, that you fled, and you Jordan, that you turned back; you mountains, that you skipped like rams, and you hills, like lambs? Alleluia.</td>
                    <td class="coptic">Ⲟⲩⲡⲉⲧϣⲟⲡ ⲫ̀ⲓⲟⲙ ϫⲉ ⲁⲕⲫⲱⲧ ⲟⲩⲟϩ ⲛ̀ⲑⲟⲕ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ ϫⲉ ⲁⲕⲕⲟⲧⲕ ⲉ̀ⲫⲁϩⲟⲩ ⲛⲓⲧⲱⲟ̀ⲩ ϫⲉ ⲁ̀ⲧⲉⲧⲉⲛⲑⲉⲗⲏⲗ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛⲱ̀ⲓⲗⲓ ⲛⲉⲙ ⲛⲓⲕⲁⲗⲁⲙⲫⲟ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛϩⲓⲏⲃ ̀ⲛ̀ⲉ̀ⲥⲱⲟ̀ⲩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">مالك أيها البحر أنك هربت وأنت أيها الأردن أنك رجعت إلى خلف ويا جبال أنك ارتكضت مثل الكباش والتلال مثل حملان الغنم. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="north">
                    <td class="english">The earth trembled at the presence of the Lord, at the presence of the God of Jacob. Alleluia.</td>
                    <td class="coptic">Ⲡ̀ⲕⲁϩⲓ ⲁϥⲕⲓⲙ ⲉ̀ⲃⲟⲗ ϧⲁⲧ̀ϩⲏ ⲙ̀ⲡ̀ϩⲟ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϧⲁⲧ̀ϩ̀ⲏ ⲙ̀ⲡ̀ϩⲟ ⲙ̀Ⲫϯ ⲛ̀Ⲓⲁⲕⲱⲃ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">تزلزلت الأرض من قدام وجه الرب ومن قدام وجه إله يعقوب. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="south">
                    <td class="english">Let them exalt Him in the church of His people, and praise Him in the seat of the elders, for He has made the family like a flock of sheep, the upright shall see and rejoice. Alleluia. (Ps. 107:32, 41-42)</td>
                    <td class="coptic">Ⲙⲁⲣⲟⲩ ϭⲁⲥϥ ϧⲉⲛ ⲧ̀ⲉⲕⲕ̀ⲗⲏⲥⲓⲁ ⲛ̀ⲧⲉ ⲡⲉϥⲗⲁⲟⲥ: ⲟⲩⲟϩ ⲙⲁⲣⲟⲩ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϩⲓⲧ̀ⲕⲁⲑⲉⲇⲣⲁ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ϫⲉ ⲁϥⲭⲱ ⲛ̀ⲟⲩⲙⲉⲧⲓⲱⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛ ⲉ̀ⲥⲱⲟ̀ⲩ ⲉⲩⲉ̀ⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲏⲉ̀ⲧⲥⲟⲩⲱ̀ⲛ ⲟⲩⲟϩ ⲉⲩⲉ̀ⲟ̀ⲩⲛⲟϥ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">فليرفعوه في كنيسة شعبه . وليباركوه فى مجلس الشيوخ لأنه جعل أبـوة مثل الخراف يُبصر المستقيمون ويفرحون. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="south">
                    <td class="english">The Lord has sworn and will have no regret, “You are a priest forever, after the order of Melchizedek.” Alleluia. (Ps. 110:4)</td>
                    <td class="coptic">Ⲁϥⲱⲣⲕ ⲛ̀ϫⲉ Ⲡⲟ̅ⲥ̅ ⲟⲩⲟϩ ⲛ̀ⲛⲉϥⲟ̀ⲩⲱⲙ ⲛ̀ϩ̀ⲑⲏϥ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲫ̀ⲟⲩⲏⲃ ϣⲁ ⲉ̀ⲛⲉϩ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">حلف الرب ولا يندم أنك أنت هو الكاهن إلي الأبد على طقس ملشيصاداق. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_28" class="north">
                    <td class="english">God be merciful to us and bless us, and cause His face to shine upon us. Alleluia. (Ps. 67:1)</td>
                    <td class="coptic">Ⲫϯ ⲉϥⲉ̀ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲉϥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ: ⲉϥⲉ̀ⲟⲩⲱⲛϩ ⲙ̀ⲡⲉϥϩⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲟⲩⲟϩ ⲉϥⲉ̀ⲛⲁⲓ ⲛⲁⲛ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">ليترأف اللـه علينا ويباركنا وليظهر وجهه علينا ويرحمنا. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="north">
                    <td class="english">Save Your people, and bless Your inheritance; shepherd them also, and bear them up forever. Alleluia. (Ps. 28:9)</td>
                    <td class="coptic">Ⲡⲟ̅ⲥ̅ ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ: ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟ̀ⲩ ϭⲁⲥⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">يا رب خلص شعبك وبارك ميراثك ارعهم وارفعهم إلي الأبد. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="south">
                    <td class="english">Whoever is wise will observe these things, and they will understand the lovingkindness of the Lord. Alleluia. (Ps. 107:43)</td>
                    <td class="coptic">Ⲛⲓⲙ ⲡⲉ ⲡⲓⲥⲁⲃⲉ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲛⲁⲓ ⲟⲩⲟϩ ⲛ̀ⲥⲉⲕⲁϯ ⲉ̀ⲛⲓ ⲛⲁⲓ ⲛ̀ⲧⲉ Ⲡⲟ̅ⲥ̅. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">من كان حكيماً فليحفظ هذه وليفهم مراحم الرب. هلليلويا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_31" class="south">
                    <td class="english">Bless me, bless me, behold the repentance, forgive me, my fathers and brothers, pray for me; in love I ask you to remember me.</td>
                    <td class="coptic">Ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲓ: ⲓⲥ ϯⲙⲉⲧⲁ̀ⲛⲟⲓⲁ̀ ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ: ⲛⲁⲓⲟϯ ⲛⲉⲙ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϣ̀ⲗⲏⲗ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ: ϧⲉⲛ ⲟⲩⲁⲅⲁⲡⲏ ϯϯϩⲟ ⲉ̀ⲣⲱⲧⲉⲛ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀.</td>
                    <td class="arabic">باركوا على. ها مطانية اغفروا لي يا آبائي وإخوتي صلوا علي. بالمحبة أسالكم اذكروني.</td>
                </tr>
                <tr id="table_${tableNumber}_row_32" class="north">
                    <td class="english">Glory to the Father and to the Son and the Holy Spirit, now and ever and unto the ages of the ages. Amen. Alleluia. Lord have mercy (3).</td>
                    <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ̀ ⲕⲉ Ⲁⲅⲓⲱ̀ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ. Ⲁⲗ̅ Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
                    <td class="arabic">المجد للاب والابن والروح القدس الان وكل أوان وإلي دهر الدهور</td>
                </tr>
                <tr id="table_${tableNumber}_row_33" class="north">
                    <td class="english">Amen. Alleluia. Lord have mercy (3).</td>
                    <td class="coptic">Ⲁ̀ⲙⲏⲛ ⲁⲗ̅. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ. Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.</td>
                    <td class="arabic">آمين. هلليلويا. يارب ارحم يارب ارحم يارب ارحم.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

function normalizeSeason(season) {
    return season
        .split(" ") // Split the string by spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(""); // Join the words back without spaces
}


function getSeasonalGreatOde(season, tableNumber) {
    let html = "";

    const normalizedSeason = normalizeSeason(season);

    // Check if the day exists in the days object
    if (greatOde[normalizedSeason]) {
        const greatOdeFunction = greatOde[normalizedSeason];
        html = greatOdeFunction(tableNumber);
    } else {
        console.error(`Great Ode for '${season}' not found`);
    }

    return html;
}

export { getSeasonalGreatOde };