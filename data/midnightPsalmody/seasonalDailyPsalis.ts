const sundayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Adam For Sunday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Adam For Sunday
                <span class="coptic-caption">Ⲁ̀ⲟ̀ⲩⲣⲁϣⲓ ϣⲱⲡⲓ</span>
                <span class="arabic-caption">إبصاليه ادآم ليوم الأحد في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Joy happens today, O believers, for the birth of, Jesus Christ.</td>
                    <td class="coptic">Ⲁ̀ⲟ̀ⲩⲣⲁϣⲓ ϣⲱⲡⲓ: ⲙ̀ⲫⲟⲟ̀ⲩ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ: ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">فرح تم اليوم، أيها المؤمنون، من أجل ميلاد، يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Everyone was returned, to Paradise, for the birth of, the Son of God.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲁⲩⲧⲁⲥⲑⲟ: ⲉ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲉⲑⲃⲉ ⲡⲓϫⲓⲛϫ̀ⲫⲟ: ⲛ̀Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ.</td>
                    <td class="arabic">رجع الكل، إلى الفردوس، من أجل ميلاد، ابن الله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">The books of our fathers, greatly witnessed, to Christ our Lord, our Savior Jesus.</td>
                    <td class="coptic">Ⲅ̀ⲣⲁⲫⲏ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ: ⲁⲩⲉ̀ⲣⲙⲉⲑⲣⲉ ⲕⲁⲗⲱⲥ: ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏ̅ⲥ̅.</td>
                    <td class="arabic">شهدت حسناً، كتب آبائنا، من أجل المسيح إلهنا، مخلصنا يسوع.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">David the king spoke, about the King of glory, saying "You are My Son, and today I begot You."</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲁϥⲥⲁϫⲓ: ⲉⲑⲃⲉ Ⲡⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱⲟⲩ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡⲁϣⲏⲣⲓ: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ ⲙ̀ⲫⲟⲟ̀ⲩ.</td>
                    <td class="arabic">تكلم داود الملك، من أجل ملك المجد، قائلاً أنت ابني، وأنا اليوم ولدتك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">For the sake of our lady Mary, O Christ our Master, forgive our trespasses, O Good One.</td>
                    <td class="coptic">Ⲉⲑⲃⲉ ⲧⲉⲛⲟ̅ⲥ̅ Ⲙⲁⲣⲓⲁ: ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲭ̅ⲥ̅: ⲭⲱ ⲛⲁⲛ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ: ⲱ̀ Ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">من أجل سيدتنا مريم، يا ملكنا المسيح، أغفر لنا آثامنا، أيها الصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The seven angels, praise Christ the King, saying "Holy holy, holy O Lord."</td>
                    <td class="coptic">Ϣⲁϣϥ (ⲍ̅) ⲛ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀Ⲡⲟⲩⲣⲟ Ⲡⲭ̅ⲥ̅: ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: ⲁ̀ⲅⲓⲟⲥ ⲛ̀Ⲕⲩⲣⲓⲟⲥ.</td>
                    <td class="arabic">السبع الملائكة، يسبحون الملك المسيح، قائلين قدوس قدوس، قدوس الرب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Gabriel the angel, announced to, the shepherds, about the Savior of the world.</td>
                    <td class="coptic">Ⲏⲡⲡⲉ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲛ̀ⲑⲟϥ ⲁϥϩⲓⲱⲓϣ ⲛⲱⲟ̀ⲩ: ⲉⲑⲃⲉ Ⲡ̀ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
                    <td class="arabic">ها هم الرعاة، بشرهم، غبريال الملاك، من أجل مخلص العالم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">Yours is glory and blessing, unto the end of time, O Christ the King, the Eternal Word.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ: ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ: ⲱ̀ Ⲡⲭ̅ⲥ̅ Ⲡⲟⲩⲣⲟ: ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀Ⲁ̀ⲓⲇⲓⲁ.</td>
                    <td class="arabic">لك القوة والبركة، إلى الانقضاء، أيها الملك المسيح، الكلمة الذاتية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Jesus is our hope, Jesus is our confirmation, Jesus is the only-begotten, of the Father before all ages.</td>
                    <td class="coptic">Ⲓⲏ̅ⲥ̅ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: Ⲓⲏ̅ⲥ̅ ⲡⲉ ⲡⲉⲛⲧⲁϫⲣⲟ: Ⲓⲏ̅ⲥ̅ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲙ̀Ⲫ̀ⲓⲱⲧ ϧⲁϫⲉⲛ ⲛⲓⲉ̀ⲱ̀ⲛ.</td>
                    <td class="arabic">يسوع هو رجاؤنا، يسوع هو ثباتنا، يسوع هو وحيد الآب، قبل كل الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord who sits, above the Cherubim, shone and blossomed, from Mary.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ ⲫⲏⲉ̀ⲧϩⲉⲙⲥⲓ: ϩⲓϫⲉⲛ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲁϥϣⲁⲓ ⲙ̀ⲫⲟⲟ̀ⲩ ⲁϥⲫⲓⲣⲓ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲙⲁⲣⲓⲁⲙ.</td>
                    <td class="arabic">الرب الجالس، على الشاروبيم، بزغ اليوم، وظهر من مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Rejoice O Mary, for out of you shone unto us, Him who is of power, Jesus the Son of God.</td>
                    <td class="coptic">Ⲗⲁⲗⲓ ⲱ̀ Ⲙⲁⲣⲓⲁ: ϫⲉ ⲁϥϣⲁⲓ ⲛⲁⲛ ⲛ̀ϧⲏϯ: ⲫⲁ ϯⲉ̀ⲝⲟⲩⲥⲓⲁ: Ⲓⲏ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ.</td>
                    <td class="arabic">تهللي يا مريم، لأنه قد أشرق لنا منك، ذو السلطان، يسوع ابن الله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Let us praise Him, with the angels, and bless Him, with the powers and the thrones.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲙⲁⲣⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓϫⲟⲙ ⲛⲉⲙ ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ.</td>
                    <td class="arabic">فلنسبحه، مع الملائكة، ولنباركه مع، القوات والكراسي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">The Magi offered Him, three offerings, as a sign for Him as, the King of the ages.</td>
                    <td class="coptic">Ⲛⲓⲙⲁⲅⲟⲥ ⲁⲩⲓ̀ⲛⲓ: ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ: ⲧ̀ⲣⲓⲁ̀ⲇⲓⲁⲕⲟⲛ ⲁⲩⲙⲏⲓⲛⲓ: ϩⲱⲥ ⲉ̀ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱ̀ⲛ.</td>
                    <td class="arabic">قدم له المجوس، قرابين ثلاثة، علامة على أنه، ملك الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">You are blessed in truth, O Christ our King, with Your good Father, and the Holy Spirit.</td>
                    <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟ̀ⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲞⲩⲣⲟ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲁ̀ⲅⲓⲟⲛ.</td>
                    <td class="arabic">تباركت بالحقيقة، أيها المسيح ملكنا، مع أبيك الصالح، والروح القدس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">A Light shone upon us, from Bethlehem, O Lord have mercy upon us, for the sake of Your Mother Mary.</td>
                    <td class="coptic">Ⲟⲩⲱ̀ⲓⲛⲓ ⲁϥϣⲁⲓ ⲛⲁⲛ: ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲱ̀ ⲡⲉⲛⲟ̅ⲥ̅ ⲛⲁⲓ ⲛⲁⲛ: ⲉⲑⲃⲉ ⲧⲉⲕⲙⲁⲩ Ⲙⲁⲣⲓⲁⲙ.</td>
                    <td class="arabic">نور أشرق لنا، من بيت لحم، يا ربنا أرحمنا، من أجل أمك مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The Word being, in the bosom of His Father, was born from Mary, the blessed lady.</td>
                    <td class="coptic">ⲠⲓⲖⲟⲅⲟⲥ ⲉⲧⲭⲏ: ϧⲉⲛ ⲕⲉⲛϥ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ⲕⲩⲣⲓⲁ: Ⲙⲁⲣⲓⲁ ⲑⲏⲉ̀ⲧⲥ̀ⲙⲁⲣⲱⲟ̀ⲩⲧ.</td>
                    <td class="arabic">الكلمة الكائن، في حضن أبيه، ولدته السيدة، مريم المباركة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Rejoice and be glad, O human races, for Christ Emmanuel, saved us from our sins.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲣⲱⲙⲓ: ϫⲉ Ⲡⲭ̅ⲥ̅ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲁϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
                    <td class="arabic">أفرحوا وتهللوا، يا أجناس البشر، لأن المسيح عمانوئيل، خلصنا من خطايانا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Praise the Lord our God, with a joyful psalm, for glory and praise, is to due to our God.</td>
                    <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡⲟ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ: ϫⲉ ⲛⲁⲛⲉ ⲟⲩⲯ̀ⲁⲗⲙⲟⲥ: ⲉϥⲉ̀ⲣⲁⲛⲁϥ ⲙ̀ⲡⲉⲛⲚⲟⲩϯ: ⲡⲓⲱ̀ⲟ̀ⲩ ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲥ.</td>
                    <td class="arabic">سبحوا الرب إلهنا، بحسن المزمور، فإنه يليق بإلهنا، المجد والتسبيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">We glorify Him as God, and sing to Him praises, for He is the Lamb of God, the Son of Mary.</td>
                    <td class="coptic">Ⲧⲉⲛϯⲱ̀ⲟ̀ⲩ ⲛⲁϥ ϩⲱⲥ Ⲛⲟⲩϯ: ⲧⲉⲛϫⲱ ⲛⲁϥ ⲛ̀ϩⲁⲛⲯ̀ⲁⲗⲓⲁ: ⲡⲓϨⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲙⲁⲣⲓⲁ.</td>
                    <td class="arabic">نمجده كإله، وننشد له تسبيحاً، لأنه حمل الله، ابن مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Wherefore the prophets rejoice, and also the righteous, for Christ the Master, saved them as a good One.</td>
                    <td class="coptic">Ⲩⲡⲡⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁⲩⲣⲁϣⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ: ⲁϥⲛⲁϩⲙⲟⲩ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">ها الأنبياء يفرحون، مع الصديقين، لأن السيد المسيح، خلصهم كصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">To You is due majesty, and glorification, disperse the enemies, of the Church.</td>
                    <td class="coptic">Ⲫⲱⲕ ⲡⲉ ⲡⲓⲁ̀ⲙⲁϩⲓ: ⲛⲉⲙ ϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ: ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ⲛ̀ⲧⲉ ϯⲉ̀ⲕⲕⲗⲏⲥⲓⲁ.</td>
                    <td class="arabic">لك العزة، والتمجيد، بدد أعداء، الكنيسة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to you O Mary, the Mother of Jesus Christ, hail to Bethlehem, the city of Christ.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ: Ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲭⲉⲣⲉ Ⲃⲏⲑⲗⲉⲉⲙ: ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">السلام لك يا مريم، أم يسوع المسيح، السلام لبيت لحم، مدينة المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">The souls of our fathers, grant them repose, with Abraham the great, and Isaac and Jacob.</td>
                    <td class="coptic">Ⲯ̀ⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ: ⲙⲟⲓ ⲛⲱⲟ̀ⲩ ⲛ̀ⲟⲩⲭ̀ⲃⲟⲃ: Ⲁⲃⲣⲁⲁⲙ ⲡⲓⲛⲓϣϯ: ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
                    <td class="arabic">أنفس آبائنا، أعطها نياحاً، مع إبراهيم العظيم، واسحق ويعقوب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O You who is was born, from the Virgin, and crucified in the flesh, save us from temptations.</td>
                    <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ϧⲉⲛ ⲧ̀ⲥⲁⲣⲝ ⲁⲩⲁϣϥ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
                    <td class="arabic">يا من ولد، من العذراء، وصلب بالجسد، نجنا من التجارب.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Adam For Sunday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Adam For Sunday
                <span class="coptic-caption">Ⲁ̀ Ⲫϯ ⲡⲓⲛⲁⲏⲧ</span>
                <span class="arabic-caption">إبصاليه ادآم ليوم الأحد في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">God the merciful / the King of the ages / the Great and compassionate / and the true One.</td>
                    <td class="coptic">Ⲁ̀ Ⲫϯ ⲡⲓⲛⲁⲏⲧ: ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲣⲉϥϣⲉⲛϩⲏⲧ: ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ.</td>
                    <td class="arabic">الله الرحوم ملك الدهور العظيم المتحنن والحقيقي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">He sent His Word / to the true bride / and dwelt in her womb / for our salvation.</td>
                    <td class="coptic">Ⲃⲱⲣⲡ ⲛⲁⲛ ⲙ̀ⲡⲉϥⲥⲁϫⲓ: ⲉ̀ϯϣⲉⲗⲏⲧ ⲙ̀ⲙⲏⲓ: ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲧⲉⲥⲛⲉϫⲓ: ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ.</td>
                    <td class="arabic">أرسل لنا كلمته إلي العروس الحقيقية وحل في بطنها من أجل خلاصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">He was born of the Virgin / on this day / the overflowing fountain / Jesus the King of Glory.</td>
                    <td class="coptic">Ⲅⲉⲛⲛⲉⲑⲓⲥ ⲟ̀ ⲉⲕⲡⲁⲣⲑⲉⲛⲟⲩ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ϯⲙⲟⲩⲙⲓ ⲛ̀ⲁⲑⲙⲟⲩ: Ⲓⲏ̅ⲥ̅ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
                    <td class="arabic">ولد من العذراء في مثل هذا اليوم الينبوع الغير الناضب يسوع ملك المجد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">O David come in our midst / with your book of Psalms / to the city of God / full of blessing.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁ̀ⲙⲟⲩ ⲧⲉⲛⲙⲏϯ: ⲛ̀ϩⲁⲛϫⲱⲙ ⲙ̀ⲯⲁⲗⲓⲁ̀: ⲉ̀ϯⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲫϯ: ⲉⲑⲙⲉϩ ⲛ̀ⲉⲩⲗⲟⲅⲓⲁ̀.</td>
                    <td class="arabic">يا داود تعال في وسطنا بكتاب مزاميرك إلي مدينة الله المملوءة بركة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Our Savior / who knows her / delighted to / dwell in her.</td>
                    <td class="coptic">Ⲉⲡⲓⲇⲏ ⲅⲁⲣ ⲁϥϯⲙⲁϯ: ⲉ̀ϣⲱⲡⲓ ⲛ̀ϧⲏⲧⲥ: ⲛ̀ϫⲉ ⲡⲉⲛⲣⲉϥⲥⲱϯ: ⲫⲏⲉ̀ⲧⲁⲩⲥⲉⲙⲛⲏⲧⲥ.</td>
                    <td class="arabic">اذ سر أن يحل فيها مخلصنا الذي اتقنها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Many are / your praises / more than the sand of the sea / O Mary our Lady.</td>
                    <td class="coptic">Ⲍⲉⲟϣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲛⲉⲉⲩⲫⲟⲙⲓⲁ̀: ⲡⲁⲣⲁ ⲧ̀ⲏ̀ⲡⲓ ⲙ̀ⲡⲓϣⲱ: ⲱ̀ ⲧⲉⲛⲟ̅ⲥ̅ Ⲙⲁⲣⲓⲁ̀.</td>
                    <td class="arabic">كثيرة جداً هي مدائحك أكثر من عدد الرمل يا سيدنتا مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">For truly / it was said to us / by Isaiah / the perfect prophet.</td>
                    <td class="coptic">Ⲏⲡⲡⲉ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ: ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ: ⲛ̀ϫⲉ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ: ⲕⲉ ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲟ̀ⲥⲓⲟⲥ.</td>
                    <td class="arabic">لانه هكذا بالحقيقة أيضاً قال أشعياء النبي الكامل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">This is a great wonder / unto us a Child is born / unto us a Son is given / of great counsel.</td>
                    <td class="coptic">Ⲑⲁⲓ ⲧⲉ ϯⲛⲓϣϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲟⲩⲁ̀ⲗⲟⲩ ⲛⲁⲛ ⲁⲩⲙⲓⲥⲓ: ⲁⲩϯ ⲛⲁⲛ ⲛ̀ⲟⲩϣⲏⲣⲓ: ⲫⲁ ⲡⲓⲥⲟϭⲛⲓ ⲛ̀ϣ̀ⲫⲏⲣⲓ.</td>
                    <td class="arabic">هذه أعجوبة عظيمة غلام ولد لنا وابناً أعطيناه هو صاحب المشورة العظمي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Jesus Christ the Mighty / and the Powerful / whose government will be / upon His shoulders.</td>
                    <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓϫⲱⲣⲓ: ⲡⲓⲉ̀ⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲫⲏⲉ̀ⲣⲉ ⲧⲉϥⲁⲣⲭⲏ: ⲭⲏ ϩⲓϫⲉⲛ ⲛⲉϥⲙⲟⲩϯ ⲧⲏⲣⲥ.</td>
                    <td class="arabic">يسوع المسيح المتسلط القوي الذي سلطانه علي منكبيه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">Truly indeed / it was said by Ezekiel / about the Messiah / the King of Israel.</td>
                    <td class="coptic">Ⲕⲁⲗⲱⲥ ⲟⲛ ⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲓⲉⲍⲉⲕⲓⲏⲗ: ⲉ̀ϫⲉⲛ Ⲙⲁⲥⲓⲁⲥ: ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓ̅ⲥ̅ⲗ̅.</td>
                    <td class="arabic">حسناً قال ايضاً حزقيال علي الماسيا ملك اسرائيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">I also saw / a Gate towards the East / sealed with a mysterious seal / and God the merciful.</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲡⲩⲗⲏ: ⲛ̀ⲥⲁ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ⲉⲥⲧⲟⲃ ϧⲉⲛ ⲟⲩⲧⲉⲃⲥ ⲛ̀ϣ̀ⲫⲏⲣⲓ: Ⲫϯ ⲡⲓⲣⲉϥⲛⲁⲓ.</td>
                    <td class="arabic">وأيضاًُ رأيت باباُ ناحية المشارق مختوماً بخاتم عجيب والله الرحوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">No man shall enter it / but Him who did / we praise Him with praises / that befit Him.</td>
                    <td class="coptic">Ⲙ̀ⲡⲉ ϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ: ⲉ̀ⲣⲟϥ ⲉ̀ⲃⲏⲗ ⲛ̀ⲑⲟϥ: ⲧⲉⲛϩⲱⲥ ⲛⲁϥ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲟⲩ: ⲕⲁⲧⲁ ⲡⲉⲑⲣⲁⲛⲁϥ.</td>
                    <td class="arabic">لم يدخله أحد غيرة نسبحه تسبيحاً كما يرضيه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">The kings of the Magi / came from the East / and worshiped the Christ / whose name is honored.</td>
                    <td class="coptic">Ⲛⲓⲟⲩⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲙⲁⲅⲟⲥ: ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲥⲁ ⲡⲉⲓⲉⲃⲧ: ⲁⲩⲟⲩⲱϣⲧ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲫⲁ ⲡⲓⲣⲁⲛ ⲉⲧⲧⲁⲓⲏ̀ⲟⲩⲧ.</td>
                    <td class="arabic">أ تي ملوك المجوس من المشرق وسجدوا للمسيح ذي الاسم المكرم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Truly / they opened their gifts / and offered unto him / three offerings.</td>
                    <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲁⲩⲟⲩⲱⲛ: ⲛ̀ⲛⲟⲩⲁ̀ϩⲱⲣ ⲁⲩⲓ̀ⲛⲓ: ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ: ⲧ̀ⲣⲓⲁ̀ⲇⲓⲕⲟⲛ ⲁⲩϯⲙⲏⲓⲛⲓ.</td>
                    <td class="arabic">حقاً فتحوا كنوزهم وقدموا له قرابين ثلاثة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Frankincense a symbol of divinity / gold for his kingship / and myrrh a symbol / of His life-giving Death.</td>
                    <td class="coptic">Ⲟⲩⲗⲓⲃⲁⲛⲟⲥ ϩⲱⲥ ⲛⲟⲩϯ: ⲛⲉⲙ ⲟⲩⲛⲟⲩⲃ ϩⲱⲥ ⲟⲩⲣⲟ: ⲛⲉⲙ ⲟⲩϣⲁⲗ ⲁⲩϯⲙⲏⲓⲛⲓ: ⲉ̀ⲡⲉϥϫⲓⲛⲙⲟⲩ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ.</td>
                    <td class="arabic">لباناً علامة علي الوهيتة وذهباً اشارة الي انه ملك ومراً اشارة الي موته المحيي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">Also the kings / of the Arabs / and the shepherds / and Sheba and the islands.</td>
                    <td class="coptic">Ⲡⲁⲓⲣⲏϯ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲛ̀ⲧⲉ ⲛⲓⲀ̀ⲣⲁⲃⲟⲥ: ⲛⲉⲙ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲛⲉⲙ Ⲥⲁⲃⲁ ⲛⲉⲙ ⲛⲓⲛⲏⲥⲟⲥ.</td>
                    <td class="arabic">وهكذا ملوك العرب والرعاة وسابا والجزائر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Truly they offered to Him / acceptable offerings / they worshipped Him / as a Lord and Master.</td>
                    <td class="coptic">Ⲣⲏⲧⲟⲥ ⲁⲩⲓ̀ⲛⲓ ⲛⲁϥ: ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ ⲉⲩϣⲏⲡ: ⲟⲩⲟϩ ⲁⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲕⲁⲧⲁ ϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ.</td>
                    <td class="arabic">حقاً قدموا له قرابين مقبولة وسجدوا له كرب وسيد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">We also the believers / the strong and the brave / ought to do likewise / in the name of Christ.</td>
                    <td class="coptic">Ⲥⲉ ⲉⲣⲛⲟϥⲣⲓ ⲛⲁⲛ ⲇⲉ ⲟⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛⲓϫⲱⲣⲓ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ: ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">نعم يجب علينا نحن ايضاً معشر المؤمنين الأشداء الشجعان بأسم المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">To gather together / to celebrate for Him / with a pure heart / and offer unto Him.</td>
                    <td class="coptic">Ⲧⲉⲛⲑⲟⲩⲏⲧ ⲉⲩⲥⲟⲡ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛⲉⲣϣⲁⲓ ⲛⲁϥ: ϧⲉⲛ ⲟⲩϩⲏⲧ ⲉ̀ϥⲟⲩⲁⲃ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲓ̀ⲛⲓ ⲛⲁϥ.</td>
                    <td class="arabic">أن نجتمع معاً لكي نعيد له بقلب طاهر ونقدم له.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">All exaltation and praise / glorification and honor / as befits God / with pure tongues.</td>
                    <td class="coptic">Ⲩⲙⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ϩⲱⲥ: ⲛⲉⲙ ϩⲁⲛⲇⲟⲝⲟⲗⲟⲅⲓⲁ̀: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲑⲉⲟ̀ ⲡ̀ⲣⲓⲡⲧⲟⲥ: ϧⲉⲛ ϯⲁⲥⲡⲓ ⲁ̀ⲡⲓⲅⲓⲁ̀.</td>
                    <td class="arabic">كل التماجيد وتسبيح وكرامات بالإله بألسنة طاهرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">For He who was / born of Mary / was crucified / for our sins.</td>
                    <td class="coptic">Ⲫⲏ ⲅⲁⲣ ⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲙⲁⲣⲓⲁ̀: ⲛ̀ⲑⲟϥ ⲡⲉ ⲫⲏⲉ̀ⲧⲁϥⲁϣϥ: ⲉⲑⲃⲉ ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ̀.</td>
                    <td class="arabic">لان الذي ولد من مريم هو الذي صلب من أجل اثامنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Make haste and save us / from our enemies / O You who by Your Death / carried our sins.</td>
                    <td class="coptic">Ⲭⲱⲗⲉⲙ ⲇⲉ ⲟⲛ ⲁϥⲥⲟⲧⲧⲉⲛ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲑ̀ⲣⲁⲩⲥⲓⲥ: ϩⲓⲧⲉⲛ ⲡⲉϥⲙⲟⲩ ⲁϥⲟⲗⲧⲉⲛ: ⲉ̀ϯ ⲁ̀ⲛⲁⲡⲁⲩⲥⲓⲥ.</td>
                    <td class="arabic">اسرع أيضاً وخلصنا من أعدئنا يا من بموته احتمل آلامنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Let all souls give / reverence to Him / with His Holy Father / and say with joy.</td>
                    <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲩⲥⲟⲡ: ⲙⲁⲣⲟⲩϭ̀ⲛⲉϫⲱⲟⲩ ⲛⲁϥ: ⲛⲉⲙ ⲡⲉϥⲓⲱⲧ ⲫⲏⲉ̅ⲑ̅ⲩ̅: ⲁ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ.</td>
                    <td class="arabic">فلتخضع كل الانفس له مع أبيك القدوس ولنقل بفرح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O Shepherd / and good Savior / with incessant hymns / we praise You.</td>
                    <td class="coptic">Ⲱ̀ ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲛ̀ⲣⲉϥⲛⲟϩⲉⲙ ⲛ̀ⲕⲁⲗⲱⲥ: ϧⲉⲛ ϩⲁⲛϩⲱⲇⲏ ⲛ̀ⲉ̀ⲥⲱⲟⲩ: ⲉⲛϩⲱⲥ ⲛⲁⲕ ⲁⲥ ⲫⲁⲗⲱⲥ.</td>
                    <td class="arabic">أيها الراعي المخلص حسناً نرتل لك ونسبحك بغير فتور.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};
const mondayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Adam For Monday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Adam For Monday
                <span class="coptic-caption">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲕⲁⲗⲱⲥ</span>
                <span class="arabic-caption">إبصاليه ادآم ليوم الاثنين في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Sing well, with glorifications, for the Birth of Christ, who is of authority.</td>
                    <td class="coptic">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲕⲁⲗⲱⲥ: ϧⲉⲛ ϩⲁⲛⲇⲟⲝⲟⲗⲟⲅⲓⲁ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲫⲁ ϯⲉ̀ⲝⲟⲩⲥⲓⲁ.</td>
                    <td class="arabic">رتلوا حسناً بتماجيد من أجل ميلاد المسيح ذى السلطان.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Help my weakness, O Logos of God, grant us coolness, because of the Mother of God.</td>
                    <td class="coptic">Ⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲧⲁⲙⲉⲧϫⲱⲃ: ⲱ̀ ⲡⲓⲖⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫϯ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲭ̀ⲃⲟⲃ: ⲉⲑⲃⲉ ϯⲙⲁⲥⲛⲟⲩϯ.</td>
                    <td class="arabic">أعن ضعفى يا كلمه الله واعطنا برداً من آجل والدة الإله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">For You are our God, who came into the world, to save, the Christians.</td>
                    <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲉⲛⲚⲟⲩϯ: ⲁⲕⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲥⲱϯ: ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
                    <td class="arabic">لأنك أنت إلهنا أتيت إلى العالم لكى تخلص المسيحيين.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">David the hymnist, rejoices with joy, on the feast of the Lord, Immanuel the Lamb.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ⲣⲁϣⲓ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀Ⲕⲩⲣⲓⲟⲥ: ⲡⲓϨⲓⲏⲃ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">داود المرتل يفرح بتهليل في عيد الرب الحمل عمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Because of the Birth, of Jesus Christ, He brought us joy, with the righteous.</td>
                    <td class="coptic">Ⲉⲑⲃⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ: ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲁϥϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ⲣⲁϣⲓ: ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
                    <td class="arabic">من أجل ميلاد يسوع المسيح صار لنا الفرح مع الصديقين.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The seven angels, and all the ranks, the powers and the thrones, praise the King of glory.</td>
                    <td class="coptic">Ϣⲁϣϥ (ⲍ̅) ⲛ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ: ⲛⲓϫⲟⲙ ⲛⲉⲙ ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
                    <td class="arabic">السبع الملائكة وجميع الطغمات والقوات والكراسى يسبحون ملك المجد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Isaiah spoke, with the voice of joy, “A Child was born for us, He is Immanuel.”</td>
                    <td class="coptic">Ⲏ̀ⲁⲏ̀ⲁⲥ ⲁϥⲥⲁϫⲓ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ⲓⲥ ⲁ̀ⲗⲟⲩ ⲛⲁⲛ ⲁⲩⲙⲓⲥⲓ: ⲡⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">نطق أشعياء بصوت التهليل وُلد لنا ولداً هو عمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">This is Jerusalem, Mary the Virgin, Joachim’s daughter, the Mother of Jesus Christ.</td>
                    <td class="coptic">Ⲑⲁⲓ ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁⲕⲓⲙ: ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">هذه هى أورشليم مريم العذراء ابنة يواقيم ام يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Ezekiel also, with Jeremiah, taught us about, the Messiah’s Birth.</td>
                    <td class="coptic">Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲇⲉ ⲟⲛ: ⲛⲉⲙ Ⲓⲉⲣⲉⲙⲓⲁⲥ: ⲛ̀ⲑⲱⲟ̀ⲩ ⲁⲩⲧⲁⲙⲟⲛ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲙ̀Ⲙⲁⲥⲓⲁⲥ.</td>
                    <td class="arabic">حزقيال أيضاً وأرميا قد اخبرنا بميلاد الماسيا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord who sits, upon the cherubim, shone from the womb, of Joachim’s daughter.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ ⲫⲏⲉ̀ⲧϩⲉⲙⲥⲓ: ϩⲓϫⲉⲛ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲁϥϣⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑ̀ⲛⲉϫⲓ: ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁⲕⲓⲙ.</td>
                    <td class="arabic">الرب الجالس على الشاروبيم قد أشرق من بطن ابنه يواقيم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Moreover the One praised, by the seraphim, the shepherds praised Him, in Bethlehem.</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲫⲏⲉ̀ⲧⲟⲩϩⲱⲥ: ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲁⲩϩⲱⲥ ⲉ̀ⲣⲟϥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">وأيضا الذى تسبحه الساروفيم سبحه الرعاة في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">May joy come today, to our father Abraham, and all his sons, and Adam’s race.</td>
                    <td class="coptic">Ⲙⲁⲣⲉϥⲣⲁϣⲓ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲛ̀ϫⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲛⲉⲙ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀Ⲁ̀ⲇⲁⲙ.</td>
                    <td class="arabic">فليفرح اليوم أبونا ابراهيم وجميع بنيه وجبس آدم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">All the hosts, of angels are, in our midst today, for the King of glory.</td>
                    <td class="coptic">Ⲛⲓⲥ̀ⲧⲣⲁⲧⲓⲁ ⲧⲏⲣⲟⲩ: ⲛ̀ⲁ̀ⲅⲅⲉⲗⲓⲕⲟⲛ: ϧⲉⲛ ⲧⲉⲛⲙⲏϯ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲉⲑⲃⲉ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱ̀ⲛ.</td>
                    <td class="arabic">جميع عساكر الملائكة في وسطنا اليوم من أجل ملك الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Blessed are You indeed, O our Savior, with Your good Father, and the Holy Spirit.</td>
                    <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲱ̀ Ⲥⲱⲧⲏⲣ ⲏ̀ⲙⲱⲛ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲕⲉ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲁ̀ⲅⲓⲟⲛ.</td>
                    <td class="arabic">تباركت بالحقيقة يا مخلصنا مع أبيك الصالح والروح القدس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Glory in the highest, to the Lover of Mankind, and peace be, on earth.</td>
                    <td class="coptic">Ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉ̀ⲧϭⲟⲥⲓ: ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϣⲱⲡⲓ: ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
                    <td class="arabic">المجد في العلا لك يا محب البشر والسلامة صارت على الأرض.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">Also goodwill, towards all men, we praise You as God, a hundred fold O Christ.</td>
                    <td class="coptic">Ⲡⲁⲗⲓⲛ ⲛⲉⲙ ⲟⲩϯⲙⲁϯ: ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ ⲉⲩⲥⲟⲡ: ⲧⲉⲛϩⲱⲥ ⲛⲁⲕ ϩⲱⲥ ⲛⲟⲩϯ: Ⲡⲭ̅ⲥ̅ ϩⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲕⲱⲃ.</td>
                    <td class="arabic">وأيضاً المسرة في الناس معاً نسبحك كإله أيها المسيح أضعافاً وربوات.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Guard us O Christ, from every evil, and temptations, and every sin.</td>
                    <td class="coptic">Ⲣⲱⲓⲥ ⲉ̀ⲣⲟⲛ ⲱ̀ Ⲡⲭ̅ⲥ̅: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲉⲧϩⲱⲟ̀ⲩ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ: ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲛⲟⲃⲓ ⲛⲓⲃⲉⲛ.</td>
                    <td class="arabic">أحرسنا أيها المسيح من كل الشرور ومن التجارب ومن كل الخطايا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Praise the Lord our God, with a new song, for He performed salvation, through His Birth.</td>
                    <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀Ⲡ̀ⲟ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ: ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ϫⲉ ⲁϥⲓ̀ⲣⲓ ⲛ̀ⲟ̀ⲩⲥⲱϯ: ⲉⲑⲃⲉ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ.</td>
                    <td class="arabic">سبحوا الرب إلهنا تسبيحاً جديداً لأنه صنع خلاصاً بميلاده.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">We praise and bless Him, with the angels, and worship Him, with the Magi Kings.</td>
                    <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲟⲩⲟϩ ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ: ⲛⲉⲙ ⲛⲓⲟ̀ⲩⲣⲱⲟ̀ⲩ ⲛ̀ϩⲁⲛⲙⲁⲅⲟⲥ.</td>
                    <td class="arabic">نسبحه ونباركه مع الملائكة ونسجد له مع ملوك المجوس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">O Son of God grant us, to see Jerusalem, with the city of Zion, and Bethlehem.</td>
                    <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲙⲟⲓ ⲛⲁⲛ: ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲛⲉⲙ ϯⲃⲁⲕⲓ Ⲥⲓⲱⲛ: ⲛⲉⲙ ϯⲡⲟⲗⲓⲥ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يا ابن الله هب لنا أن ننظر أورشليم ومدينه صهيون ومدينة بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">Raise O God, the status of the Christians, for the sake of our Lady, the Virgin Mary.</td>
                    <td class="coptic">Ⲫϯ ϭⲓⲥⲓ ⲙ̀ⲡ̀ⲧⲁⲡ: ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲉⲑⲃⲉ ⲧⲉⲛⲟ̅ⲥ̅ ⲛ̀ⲛⲏⲃ: Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">أرفع يا الله شأن المسيحيين من أجل سيدتنا مريم العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to the Theotokos, and Bethlehem Zion, hail to God’s city, and the mount of Kranion.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ: ⲛⲉⲙ Ⲃⲏⲑⲗⲉⲉⲙ Ⲥⲓⲱⲛ: ⲭⲉⲣⲉ ϯⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛⲉⲙ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲕ̀ⲣ̀ⲁⲛⲓⲟⲛ.</td>
                    <td class="arabic">السلام لوالدة الإله مع بيت لحم صهيون السلام لمدينة الرب مع جبل الجمجمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Grant every soul, coolness and inheritance, through the prayers, of the Virgin Mary.</td>
                    <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲙⲟⲓ ⲛⲱⲟⲩ: ⲛ̀ⲟⲩⲭ̀ⲃⲟⲃ ⲛⲉⲙ ⲟⲩⲙⲉⲣⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ: ⲙ̀Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">كل الأنفس أعطاها برداً ونصيباً بطلبات مريم العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O Longsuffering, Your servant Nicodemus, forgive O Merciful, and the rest of Your people.</td>
                    <td class="coptic">Ⲱ̀ ⲡⲓⲣⲉϥⲱ̀ⲟⲩⲛ̀ϩⲏⲧ: ⲡⲉⲕⲃⲱⲕ Ⲛⲓⲕⲟⲇⲏⲙⲟⲥ: ⲭⲱ ⲛⲁϥ ⲱ̀ ⲡⲓⲛⲁⲏ̀ⲧ: ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ.</td>
                    <td class="arabic">أيها الطويل الأناة عبدك نيقوديموس أغفر له أيها الرحوم مع سائر شعبك.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Adam For Monday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Adam For Monday
                <span class="coptic-caption">Ⲁⲣⲓⲉ̀ⲧⲓⲛ ⲛ̀ⲧⲟⲧ</span>
                <span class="arabic-caption">إبصاليه ادآم ليوم الأثنين في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Ask of Me / I will give You / the nations / for Your inheritance.</td>
                    <td class="coptic">Ⲁⲣⲓⲉ̀ⲧⲓⲛ ⲛ̀ⲧⲟⲧ: ⲟⲩⲟϩ ⲛ̀ⲧⲁϯ ⲛⲁⲕ: ⲉ̀ⲛⲏⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ: ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀.</td>
                    <td class="arabic">أسالنى فأعطيك جميع الشعوب ميراثا لك .</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Along with all / the inhabitants of heaven / and all the earth / under Your Dominion.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϣⲟⲡ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲟⲩⲟϩ ⲡⲉⲕⲁ̀ⲙⲁϩⲓ: ϣⲁ ⲁⲩⲣⲏϫϥ ⲙ̀ⲡ̀ⲕⲁϩⲓ.</td>
                    <td class="arabic">وكل الساكنيـن في السموات وفي أقطار الأرض تحت سلطانك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">Truly You shall / rule them with / an iron scepter / in the world.</td>
                    <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ: ⲉⲕⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟⲩ: ϧⲉⲛ ⲟⲩϣ̀ⲃⲱⲧ ⲙ̀ⲃⲉⲛⲓⲡⲓ: ϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                    <td class="arabic">إذ بالحقيقـة ترعاهم بقضيب من حديد في المسكونة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">O, David the prophet / the Son of Jesse / of the ten strings / come to us today.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲓⲉⲥⲥⲉ: ⲫⲁ ⲡⲓⲙⲏⲧ ⲛ̀ⲁⲡ: ⲁ̀ⲙⲟⲩ ϣⲁⲣⲟⲛ ⲙ̀ⲫⲟⲟⲩ.</td>
                    <td class="arabic">يا داود النبي يا ابن يسى ياصاحب العشر الأوتار تعال إلينا اليوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">To witness that / "the Lord said to me / Your are My Son / Today I have begotten You.”</td>
                    <td class="coptic">Ⲉⲕⲉⲣⲙⲉⲑⲣⲉ ⲙ̀ⲡⲁⲓⲣⲏϯ: Ⲡ̀ⲟ̅ⲥ̅ ⲁϥϫⲟⲥ ⲛⲏⲓ: ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡⲁϣⲏⲣⲓ: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ ⲙ̀ⲫⲟⲟⲩ.</td>
                    <td class="arabic">لتشهد هكذا قال الرب لي أنت أبني وأنا اليوم ولدتك .</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Numerous are / your witnesses / of the birth / from the Virgin.</td>
                    <td class="coptic">Ⲍⲉⲟϣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲙⲉⲧⲙⲉⲑⲣⲉⲩ: ⲙ̀ⲡ̀ϫⲓⲛⲙⲓⲥⲓ: ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ.</td>
                    <td class="arabic">كثيرة جداً شهاداتك التى للميلاد البتولي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Isaiah the prophet / the son of Amos / witnessed about / the birth saying.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲁ̀ⲙⲱⲥ: ⲉⲑⲃⲉ ⲡⲓϫⲓⲛⲙⲓⲥⲓ: ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲙ̀ⲡⲁⲓⲣⲏϯ.</td>
                    <td class="arabic">شهد أشعياء النبي ابن عاموص من أجل الميلاد هكذا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">Behold, the Virgin / shall bear a Son / and shall call His name / Immanuel.</td>
                    <td class="coptic">Ⲑⲁⲓ ⲧⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲛ̀ⲧⲉⲥⲙⲓⲥⲓ ⲛ̀ⲟⲩϢⲏⲣⲓ: ⲉⲩⲉ̀ⲙⲟⲩϯ ⲉ̀ⲣⲟϥ: ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">هذه هي العذراء تلد ابناً ويدعى عمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Jesus the powerful / the majestic / the Great Child / King of ages.</td>
                    <td class="coptic">Ⲓⲏ̅ⲥ̅ ⲫⲏⲉ̀ⲧϫⲟⲣ: ⲛ̀ⲉ̀ⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲁ̀ⲗⲟⲩ: ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
                    <td class="arabic">يسوع القوي المتسلط الصبى العظيم ملك الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">St. Cyril said / that after His birth / her virginity / was sealed.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲉϫⲁϥ: ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲥⲙⲓⲥⲓ: ⲉⲥⲟ̀ϩⲓ ⲉⲥϣⲟⲧⲉⲙ: ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
                    <td class="arabic">قال كيرلس بعد أن ولدته كانت بتوليتها مختومة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Luke the wise / witnessed likewise / in the chapter / of his gospel.</td>
                    <td class="coptic">Ⲗⲟⲩⲕⲁⲥ ⲡⲓⲥⲟⲫⲟⲥ: ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϧⲉⲛ ϯⲅ̀ⲛⲱⲥⲓⲥ: ⲙ̀ⲡⲉϥⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲟⲛ.</td>
                    <td class="arabic">وشهد لوقا الحكيم هكذا في فصل انجيله .</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Mary the Virgin / was betrothed / to a righteous man / whose name is Joseph.</td>
                    <td class="coptic">Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲩⲱⲡ ⲛ̀ⲥⲱⲥ: ⲛ̀ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲑ̀ⲙⲏⲓ: ⲉ̀ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲓⲱⲥⲏⲫ.</td>
                    <td class="arabic">خطبت مريم العذراء لرجل بار اسمه يوسف.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">All generations / glorify / Mary the bride / and who was born of her.</td>
                    <td class="coptic">Ⲛⲓⲅⲉⲛⲉⲁ̀ ⲧⲏⲣⲟⲩ: ⲥⲉⲉ̀ⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ: ⲛ̀ϯϣⲉⲗⲏⲧ Ⲙⲁⲣⲓⲁ: ⲛⲉⲙ ⲡⲓⲙⲓⲥⲓ ⲛ̀ϧⲏⲧⲥ.</td>
                    <td class="arabic">تغبط جميع الأجيال العروس مريم والمولود منها .</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">You are blessed, O Christ / with Your good Father / and the Holy Spirit / the Paraclete.</td>
                    <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲭ̅ⲥ̅: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲙ̀Ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
                    <td class="arabic">تباركت أيها المسيح مع أبيك الصالح والروح القدس المعزي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">One of the / Holy Trinity / was born / of the Virgin.</td>
                    <td class="coptic">Ⲟⲩⲁⲓ ⲡⲉ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ϯⲦ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ: ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">واحد من الثالوث المقدس ك ولدته العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The psalmist said / "Before the star / of the morning / I have begotten You."</td>
                    <td class="coptic">Ⲡⲉϫⲉ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ϧⲁϫⲱϥ ⲙ̀ⲡⲓⲥⲓⲟⲩ: ⲛ̀ⲧⲉ ϩⲁⲛⲁ̀ⲧⲟⲟⲩⲓ̀: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ.</td>
                    <td class="arabic">قال المرتل قبل كوكب الصبح ولدتـك .</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Rejoice and be happy / O race of Adam / with the Theotokos / daughter of Abraham.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲛⲉⲙ ϯⲑⲉⲟⲧⲟⲕⲟⲥ: ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲁ̀ⲃⲣⲁⲁⲙ.</td>
                    <td class="arabic">افرحوا وتهللوا يا أجناس آدم مع والدة الإله ابنة إبراهيم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Severus the great / patriarch / of Antioch / witnessed likewise.</td>
                    <td class="coptic">Ⲥⲉⲩⲏ̀ⲣⲟⲥ ⲡⲓⲛⲓϣϯ: ⲟⲩⲟϩ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲛ̀ⲧⲉ Ⲁⲛⲧⲓⲟ̀ⲭⲓⲁ: ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲙ̀ⲡⲁⲓⲣⲏϯ.</td>
                    <td class="arabic">شهد ساويرس العظيم بطريرك إنطاكية هكذا .</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">"Behold, God was born / of the Holy Mary / His divinity parted not / from His Humanity."</td>
                    <td class="coptic">Ⲧⲟⲧⲉ ⲁⲥⲙⲓⲥⲓ ⲙ̀Ⲫϯ: ⲛ̀ϫⲉ ⲑⲏⲉ̅ⲑ̅ⲩ̅ Ⲙⲁⲣⲓⲁ: ⲟⲩⲟϩ ⲙ̀ⲡⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲫⲱⲣϫ ⲉ̀ⲧⲉϥⲙⲉⲧⲣⲱⲙⲓ.</td>
                    <td class="arabic">حينئـذ ولد اللـه من الطاهرة مريم ولم يفترق لاهوته من ناسوته .</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Immanuel our God / the great and fearful / was seen / in the glory of His divinity.</td>
                    <td class="coptic">Ⲩⲙⲙⲁⲛⲟⲩⲏⲗ ⲡⲉⲛⲚⲟⲩϯ: ⲡⲓⲛⲓϣϯ ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ: ⲫⲏⲉ̀ⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲡ̀ⲱ̀ⲟⲩ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ.</td>
                    <td class="arabic">عمانوئيل إلهنا العظيم المخوف الذي رأوه في مجد لاهوته.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">God in truth / who was born / came to the world / through His love to mankind.</td>
                    <td class="coptic">Ⲫϯ ⲡⲓⲁ̀ⲗⲏⲑⲱⲥ: ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲙⲓⲥⲓ: ⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϩⲓⲧⲉⲛ ⲧⲉϥⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ.</td>
                    <td class="arabic">اللـه بالحقيقة الذي ُولـد أتي إلي العالم من قبل محبته للبشر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to Mary / a holy greeting / Hail to her who bore / God the Logos.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ: ϧⲉⲛ ⲟⲩⲭⲉⲣⲉ ϥ̀ⲟⲩⲁⲃ: ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ: ⲙ̀Ⲫϯ ⲡⲓⲖⲟⲅⲟⲥ.</td>
                    <td class="arabic">السلام لك يامريم سلاماً مقدساً السلام للتى ولدت اللـه الكلمة .</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Savior of the world / Lord of everyone / Jesus Christ our God / Son of God in truth.</td>
                    <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: Ⲡⲟ̅ⲥ̅ ⲙ̀ⲡⲓⲉ̀ⲡ̀ⲧⲏⲣϥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲙ̀ⲙⲏⲓ.</td>
                    <td class="arabic">مخلص العالم الذي هو رب على الكل يسوع المسيح إلهنا ابن اللـه بالحقيقة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">Blessed are you / O Mary the Virgin / for you bore to us / God the Logos.</td>
                    <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁϯ ⲛ̀ⲑⲟ: Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀Ⲫϯ ⲡⲓⲖⲟⲅⲟⲥ.</td>
                    <td class="arabic">طوباك أنت يامريم العذراء لأنك ولدت لنا اللـه الكلمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">The day of Nativity / is twenty-ninth of Kiahk / and on leap years / on the twenty-eighth.</td>
                    <td class="coptic">Ϣⲱⲣⲡ ⲙ̀ⲡ̀ϫⲓⲛⲙⲓⲥⲓ: ϫⲟⲩⲧ ⲯⲓⲧ ⲛ̀Ⲭⲟⲓⲁⲕ: ϧⲉⲛ ϯⲣⲟⲙⲡⲓ ⲛ̀ⲕⲉⲡⲓⲥ: ϫⲟⲩⲧ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟⲩ.</td>
                    <td class="arabic">أول يوم الميلاد هـو التاسع والعشرين من كيهك وفى سنة الكبيـس في اليوم الثامن والعشرين</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="north">
                    <td class="english">Holy truly / your name, O Mary / and whom you bore / to save us.</td>
                    <td class="coptic">Ϥ̀ⲟⲩⲁⲃ ⲁ̀ⲗⲏⲑⲱⲥ: ⲛ̀ϫⲉ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲙⲁⲣⲓⲁ: ⲛⲉⲙ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                    <td class="arabic">مبارك بالحقيقـة اسمك يامريم والذي ولدته حتى خلصنا .</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="south">
                    <td class="english">In the cave / of Bethlehem / the holy city / of His father David.</td>
                    <td class="coptic">Ϧⲉⲛ ⲡⲓⲥ̀ⲡⲉⲗⲉⲟⲛ: ⲉ̀ⲧⲉ Ⲃⲏⲑⲗⲉⲉⲙ: ϯⲃⲁⲕⲓ ⲉ̅ⲑ̅ⲩ̅: ⲛ̀ⲧⲉ ⲡⲉϥⲓⲱⲧ Ⲇⲁⲩⲓⲇ.</td>
                    <td class="arabic">في المغارة التى لبيت لحم المدينـة المقدسة التى لأبيه داود.</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="south">
                    <td class="english">That the prophecy / of Micah / may be fulfilled / which said.</td>
                    <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲉϥϫⲱⲕ: ⲛ̀ϫⲉ ϯⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲛ̀ⲧⲉ Ⲙⲓⲭⲉⲟⲥ: ⲑⲏⲉ̀ⲧϫⲱ ⲙ̀ⲙⲟⲥ.</td>
                    <td class="arabic">لكى تكمل نبوة ميخاوس القائلة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_28" class="north">
                    <td class="english">In Bethlehem / Christ will be born / who will shepherd / Jacob Israel.</td>
                    <td class="coptic">Ϫⲉ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲁⲩⲛⲁⲙⲁⲥ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲑⲛⲁⲁ̀ⲙⲟⲛⲓ: ⲛ̀Ⲓⲁⲕⲱⲃ ⲡⲒⲥⲣⲁⲏ̀ⲗ.</td>
                    <td class="arabic">أنه في بيت لحم يـُولد المسيح الذي يرعي يعقوب إسرائيـل .</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="north">
                    <td class="english">Lead us to Your fear / save Your people / shepherd them / exalt them forever.</td>
                    <td class="coptic">Ϭⲓⲙⲱⲓⲧ ⲛⲁⲛ ⲉ̀ⲧⲉⲕϩⲟϯ: ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ: ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟⲩ: ϭⲁⲥⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                    <td class="arabic">اهدنا إلي خوفـك خلص شعبك ارعهم وإرفعهم إلي الأبد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="south">
                    <td class="english">I ask you / O Christ our Master / with your Power / keep us, the Christians.</td>
                    <td class="coptic">Ϯϯϩⲟ ⲉ̀ⲣⲟⲕ: ⲱ̀ ⲡⲉⲛⲚⲏⲃ Ⲡⲭ̅ⲥ̅: ϫⲱⲕⲧⲉⲛ ϧⲉⲛ ⲧⲉⲕϫⲟⲙ: ϩⲁⲛⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
                    <td class="arabic">أطلب إليك أيها المسيح ملكنا بقوتك كملنا مسيحيـين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const tuesdayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Adam For Tuesday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Adam For Tuesday
                <span class="coptic-caption">ⲀⲡⲓⲆⲩⲙⲓⲟⲩⲣⲅⲟⲥ</span>
                <span class="arabic-caption">إبصاليه ادآم ليوم الثلاثاء في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">The Creator, had compassion on Adam, He shone in the flesh, from Mary.</td>
                    <td class="coptic">ⲀⲡⲓⲆⲩⲙⲓⲟⲩⲣⲅⲟⲥ: ϣⲉⲛϩⲏⲧ ϧⲁ Ⲁ̀ⲇⲁⲙ: ⲁϥϣⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲱⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲙⲁⲣⲓⲁⲙ.</td>
                    <td class="arabic">تحنن الخالق على آدام وأشرق متجسداً من مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Every one praises You, with the angels, O Son of God, the Creator.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲩϩⲱⲥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲱ̀ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ: ⲛ̀Ⲇⲩⲙⲓⲟⲩⲣⲅⲟⲥ.</td>
                    <td class="arabic">يسبحك الكل مع الملائكة يا ابن الله الخالق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">Believers of all races, rejoice as they chant, for Christ’s Birth, from the Virgin.</td>
                    <td class="coptic">Ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲉⲩⲣⲁϣⲓ ϧⲉⲛ ϩⲁⲛϩⲩⲙⲛⲟⲥ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">تفرح أجناس المؤمنين ويسبحون مترنمين من أجل ميلاد المسيح من العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">King David spoke, with a prophecy, about the Birth of, Christ the Eternal.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲁϥⲥⲁϫⲓ: ϧⲉⲛ ⲧⲉϥⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ: ⲙ̀Ⲡⲭ̅ⲥ̅ ⲡⲓⲀⲓⲇⲓⲁ̀.</td>
                    <td class="arabic">تنبأ داود الملك بميلاد المسيح الذاتى.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Through the Theotokos, we learned of Christ, come let us praise Him, with the angels.</td>
                    <td class="coptic">Ⲉⲑⲃⲉ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲁⲛⲥⲟⲩⲉⲛ Ⲡⲭ̅ⲥ̅: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ.</td>
                    <td class="arabic">من أجل والدة الإله عرفنا المسيح تعالوا نسبحه مع الملائكة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">All the seven ranks, in heaven, and all tongues, praise Christ the King.</td>
                    <td class="coptic">Ϣⲁϣϥ (ⲍ̅) ⲛ̀ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ: ⲉⲧϧⲉⲛ ⲟⲩⲣⲁⲛⲟⲥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲥⲡⲓ ⲛⲓⲃⲉⲛ: ⲉⲩϩⲱⲥ ⲉ̀ⲡ̀Ⲟⲩⲣⲟ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">السبع طغمات السمائية وكل الناطقين يسبحون الملك المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Behold the shepherds, Gabriel the angel, preached to them today, of the Birth of Christ.</td>
                    <td class="coptic">Ⲏⲡⲡⲉ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟ̀ⲩ: Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲙ̀ⲫⲟⲟ̀ⲩ ⲁϥϩⲓⲱⲓϣ ⲙ̀ⲙⲱⲟⲩ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">هوذا الرعاة قد بشرهم الملاك غبريال اليوم بميلاد المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">Yours is power and glory, to the end of time, O King of ages, the Son of Mary.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟ̀ⲩ: ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ: ⲱ̀ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲙⲁⲣⲓⲁ.</td>
                    <td class="arabic">لك القوة والمجد إلي الانقضاء يا ملك المجد يا ابن مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Jesus the only-begotten, of God the Father, we saw without doubt, in the bosom of the blessed one.</td>
                    <td class="coptic">Ⲓⲏ̅ⲥ̅ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲛ̀ⲧⲉ Ⲫϯ Ⲫ̀ⲓⲱⲧ: ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲁϭⲛⲉ ⲥⲁⲛⲏⲥ: ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀ⲑⲏⲉ̀ⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.</td>
                    <td class="arabic">يسوع وحيد الله الآب رأيناه بغير شك في حضن المباركة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord and Savior, she gave birth to as God, in Bethlehem, He came for our salvation.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ ⲡⲓⲢⲉϥⲛⲟϩⲉⲙ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ϩⲱⲥ Ⲛⲟⲩϯ: ⲙ̀ⲫⲟⲟⲩ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ.</td>
                    <td class="arabic">الرب المخلص ولدته اليوم كإله في بيت لحم وأتى لأجل خلاصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Rejoice O Magi, with the shepherds, for Christ the Logos, appeared to us today.</td>
                    <td class="coptic">Ⲗⲉⲗⲓ ⲱ̀ ⲛⲓⲙⲁⲅⲟⲥ: ⲛⲉⲙ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲡⲓⲖⲟⲅⲟⲥ: ⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲙ̀ⲫⲟⲟ̀ⲩ.</td>
                    <td class="arabic">تهللوا أيها المجوس مع الرعاة لأن المسيح الكلمة ظهر لنا اليوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Let us praise Him, with the angels, and worship Him, for He is the Lover of Mankind.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲟⲩⲟϩ ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
                    <td class="arabic">فلنسبحه مع الملائكة ونسجد له لأنه هو محب البشر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">The prophets rejoice, with the righteous, for the Birth of, the Savior of the world.</td>
                    <td class="coptic">Ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲩⲣⲁϣⲓ: ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ: ⲙ̀ⲡ̀Ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
                    <td class="arabic">الأنبياء يفرحون مع الصديقين من أجل ميلاد مخلص العالم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Blessed are You indeed, O our Savior, the good Lord, and the Holy Spirit.</td>
                    <td class="coptic">Ⲝⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ: ⲱ̀ ⲡⲉⲛⲤⲱⲧⲏⲣ ⲏ̀ⲙⲱⲛ: Ⲕⲩⲣⲓⲟⲥ ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ⲕⲉ ⲧⲟⲩ ⲡ̅ⲛ̅ⲁ̅ⲧⲓ ⲁⲅⲓⲟⲛ.</td>
                    <td class="arabic">تباركت بالحقيقة يا مخلصنا أيها الرب الصالح والروح القدس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">A star appeared, today in the East, for the Merciful One, came for our salvation.</td>
                    <td class="coptic">Ⲟⲩⲥⲓⲟⲩ ⲁϥϣⲁⲓ: ⲙ̀ⲫⲟⲟ̀ⲩ ϧⲉⲛ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ϫⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓⲙⲏϣ ⲛ̀ⲛⲁⲓ: ⲁϥⲓ̀ ⲉⲑⲃⲉ ⲡⲉⲛⲟ̀ⲩϫⲁⲓ.</td>
                    <td class="arabic">نجم ظهر في المشرق أن هذا هو كثير الرحمة أتيّ من أجل خلاصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The Lamb of God, came to the world, through the Mother of God, Mary the Virgin.</td>
                    <td class="coptic">ⲠⲓϨⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ: ⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲙⲁⲥⲛⲟⲩϯ: Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">حمل الله جاء إلى العالم من والدة الإله مريم العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Today O believers, rejoice and be glad, for Christ’s Birth, our Lord Immanuel.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲙ̀ⲫⲟⲟ̀ⲩ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲡⲉⲛⲟ̅ⲥ̅ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">افرحوا اليوم أيها المؤمنون وتهللوا لميلاد المسيح ربنا عمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Look and hearken to us, we Your people, save us from the demons, O Son of my Lady.</td>
                    <td class="coptic">Ⲥⲟⲙⲥ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ: ⲛⲁϩⲙⲉⲛ ϩⲁ ⲛⲓⲇⲉⲙⲟⲛ: ⲱ̀ ⲡ̀Ϣⲏⲣⲓ ⲛ̀ⲧⲁⲟ̅ⲥ̅.</td>
                    <td class="arabic">أنظر وأستجب لنا نحن شعبك نجنا من الشياطين يا ابن سيدتى.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">We praise and bless You, with glorifications, and serve You, O eternal Logos.</td>
                    <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ϧⲉⲛ ϩⲁⲛⲇⲟⲝⲟⲗⲟⲅⲓⲁ: ⲟⲩⲟϩ ⲧⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟⲕ: ⲱ̀ ⲡⲓⲖⲟⲅⲟⲥ ⲛ̀Ⲁⲓⲇⲓⲁ.</td>
                    <td class="arabic">نسبحك ونباركك بتماجيد ونخدمك أيها الكلمة الذاتى.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">O Son of God our God, keep Your people, from fear, and temptations.</td>
                    <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲡⲉⲛⲚⲟⲩϯ: ⲁ̀ⲣⲉϩ ⲉ̀ⲡⲉⲕⲗⲁⲟⲥ: ⲉ̀ⲃⲟⲗϩⲁ ⲟⲩϩⲟϯ: ⲛⲉⲙ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
                    <td class="arabic">يا ابن الله إلهنا احفظ شعبك من الخوف والتجارب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">O God who carries, the sin of the world, forgive us our sins, for the sake of the Virgin.</td>
                    <td class="coptic">Ⲫϯ ⲫⲏⲉ̀ⲧⲱ̀ⲗⲓ: ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ: ⲉⲑⲃⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">يا الله الحامل خطايا العالم اغفر لنا خطايانا من أجل العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to the Virgin, Mary the bride, hail to God’s city, the holy Bethlehem.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯϣⲉⲗⲉⲧ Ⲙⲁⲣⲓⲁⲙ: ⲭⲉⲣⲉ ϯⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲉ̀ⲑⲟⲩⲁⲃ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">السلام للعذراء العروس مريم السلام لمدينة الرب المقدسة بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Repose the souls, in Paradise, for the sake of the queen, the Theotokos.</td>
                    <td class="coptic">Ⲯⲩⲭⲱⲟ̀ⲩ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ: ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲉⲑⲃⲉ ϯⲟⲩⲣⲱ: ϯⲑⲉⲟⲧⲟⲕⲟⲥ.</td>
                    <td class="arabic">نيح الأنفس في الفردوس من أجل الملكة والدة الإله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O You who were born, for the salvation of our race, and took flesh and was crucified, keep Your people.</td>
                    <td class="coptic">Ⲱ̀ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲉⲑⲃⲉ ⲡ̀ⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲟⲩⲟϩ ϧⲉⲛ ⲧ̀ⲥⲁⲣⲝ ⲁⲩⲁϣϥ: ⲁ̀ⲣⲉϩ ⲉ̀ⲡⲉⲕⲗⲁⲟⲥ.</td>
                    <td class="arabic">يا من وُلد من أجل خلاص جنسنا وتجسد وصلب احفظ شعبك.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Adam For Tuesday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Adam For Tuesday
                <span class="coptic-caption">Ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ</span>
                <span class="arabic-caption">إبصاليه ادآم ليوم الثلاثاء في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Today is born to us / Our Savior, Jesus / in Bethlehem / of Judea.</td>
                    <td class="coptic">Ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ: ⲛ̀ⲟⲩⲤⲱⲧⲏⲣ Ⲓⲏ̅ⲥ̅: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀.</td>
                    <td class="arabic">ولد لنا اليوم، يسوع مخلصنا، في بيت لحم، اليهودية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">A great joy today / shined upon us / the Sun of Righteousness / illuminated us.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲣⲁϣⲓ: ⲁϥϣⲁⲓ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ: ⲙ̀ⲫ̀ⲣⲏ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ.</td>
                    <td class="arabic">كان فرح عظيم، أشرق لنا اليوم، شمس البر، وأضاء علينا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">A Galilean appeared / in the land of Ephratha / the pride of / the house of Israel.</td>
                    <td class="coptic">Ⲅⲁⲗⲓⲗⲉⲟⲥ ⲟⲩⲱⲛϩϥ: ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲉⲫⲣⲁⲑⲁ: ⲁⲩϣⲟⲩϣⲟⲩ ⲛ̀ϧⲏⲧϥ: ⲛ̀ϫⲉ ⲛⲁ ⲡ̀ⲏⲓ ⲙ̀ⲡⲒⲥⲣⲁⲏ̀ⲗ.</td>
                    <td class="arabic">جليلي ظهر، في أرض افرتا، وأفتخر لأجله، بيت إسرائيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">David the prophet / and Solomon his son / rejoice today / for His birth.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ Ⲥⲟⲗⲟⲙⲱⲛ ⲡⲉϥϣⲏⲣⲓ: ⲉⲩⲣⲁϣⲓ ⲙ̀ⲫⲟⲟⲩ: ⲉⲑⲃⲉ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ.</td>
                    <td class="arabic">داود النبي، وسليمان ابنه، يفرحون اليوم، من أجل ميلاده.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">They saw his star / in the East / the Magi came / and worshipped Him.</td>
                    <td class="coptic">Ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲡⲉϥⲥⲓⲟⲩ: ⲥⲁⲡ̀ϣⲱⲓ ⲛ̀ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ϩⲁⲛⲙⲁⲅⲟⲥ ⲁⲩⲓ̀: ⲁⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">لقد رأوا نجمه، ناحية المشرق، وأتي المجوس، وسجدوا له.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">A Nazarene appeared / in the land of Naphtali / and all the region / of Zebulun.</td>
                    <td class="coptic">Ⲍⲱⲣⲉⲟⲥ ⲁϥⲟⲩⲱⲛϩϥ: ϧⲉⲛ ⲡ̀ ⲕⲁϩⲓ ⲛ̀Ⲛⲉϥⲑⲁⲗⲓⲙ: ⲛⲉⲙ ⲛⲓϭⲓⲏ̀ ⲧⲏⲣⲟⲩ: ⲛ̀ⲧⲉ Ⲍⲁⲃⲟⲗⲟⲛ.</td>
                    <td class="arabic">ناصري ظهر، في أرض نفتاليم، وجميع تخم، زبولون.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Come, O Isaiah / behold this virgin / whom you spoke of / from a long time.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲁ̀ⲙⲟⲩ: ⲁ̀ⲛⲁⲩ ⲉ̀ⲧⲁⲓⲠⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲕⲥⲁϫⲓ ⲉⲑⲃⲏⲧⲥ: ⲓⲥϫⲉⲛ ⲟⲩⲙⲏϣ ⲛ̀ⲭ̀ⲣⲟⲛⲟⲥ.</td>
                    <td class="arabic">يا أشعياء تعال، أنظر هذه العذراء، التي تكلمت من أجلها، منذ زمان كبير.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">She bore today / Immanuel our God / God became Man / having mercy on us.</td>
                    <td class="coptic">Ⲑⲁⲓ ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲫⲟⲟⲩ: Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲡⲉⲛⲚⲟⲩϯ: Ⲫϯ ⲁϥⲉⲣⲣⲱⲙⲓ: ⲁϥⲉⲣⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ.</td>
                    <td class="arabic">هذه ولدت اليوم، عمانوئيل إلهنا، إلهاً تأنس، فأولانا رحمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Arise, O Jeremiah / come among us today / leave heart ache / and rejoice today.</td>
                    <td class="coptic">Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲧⲱⲛⲕ: ⲁ̀ⲙⲟⲩ ⲧⲉⲛⲙⲏϯ ⲙ̀ⲫⲟⲟⲩ: ⲭⲱ ⲙ̀ⲡⲓⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ: ⲣⲁϣⲓ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ.</td>
                    <td class="arabic">قم يا أرميا، وتعال وسطنا اليوم، وأترك آلام القلب، وافرح في هذا اليوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">As you have seen / of Gilead / arise and behold / the land of Bethlehem.</td>
                    <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲕⲛⲁⲩ: ⲛ̀ⲧⲉ Ⲅⲁⲗⲗⲁⲁⲇ: ⲧⲱⲛⲕ ⲁ̀ⲙⲟⲩ ⲛ̀ⲧⲉⲕⲛⲁⲩ: ⲡ̀ⲕⲁϩⲓ ⲙ̀Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كما رأيت، جليعاد، قم تعال أنطر، أرض بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">All the nations were left / in the mysteries / O Ezekiel / the visionary.</td>
                    <td class="coptic">Ⲗⲁⲟⲥ ⲛⲓⲃⲉⲛ ⲁⲩⲭⲁⲩ: ϧⲉⲛ ϩⲁⲛⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲱ̀ Ⲓⲉⲍⲉⲕⲓⲏⲗ: ⲡⲓⲣⲉϥⲉⲣⲑⲉⲱ̀ⲣⲓⲛ.</td>
                    <td class="arabic">تُرك كل الشعوب، في الأسرار، يا حزقيال، الرائي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">The Messiah was born / of a shut gate / the holy virgin / in Bethlehem.</td>
                    <td class="coptic">Ⲙⲁⲥⲓⲁⲥ ⲁⲩⲙⲁⲥϥ: ϧⲉⲛ ϯⲡⲩⲗⲏ ⲉⲥϣⲟⲧⲉⲙ: ⲉ̅ⲑ̅ⲩ̅ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">قد ولد ماسياس، من باب مختوم، هو العذراء القديسة، في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">The supplications were raised / the seals likewise / like the gate / what you saw.</td>
                    <td class="coptic">Ⲛⲓⲧⲱⲃϩ ⲙ̀ⲡⲟⲩⲟⲩⲱ̀ⲧⲉⲃ: ⲛⲓⲧⲉⲃⲥ ⲙ̀ⲡⲟⲩⲣⲏϯ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϯⲡⲩⲗⲏ: ⲉ̀ⲧⲁⲕⲛⲁⲩ ⲉ̀ⲣⲟⲥ.</td>
                    <td class="arabic">لم تنقل الطلبات، والخواتم مثلها، مثل الباب، الذي رأيته.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Ninety-nine signs / were counted / by the holy scribes / of the Church.</td>
                    <td class="coptic">Ⲝⲱ ⲯⲓⲧ ⲛ̀Ⲗⲟⲅⲟⲥ: ⲁⲩϭⲓⲏ̀ⲡⲓ ⲙ̀ⲙⲱⲟⲩ: ⲛ̀ϫⲉ ⲛⲓⲥⲁϧ ⲉ̅ⲑ̅ⲩ̅: ⲛ̀ⲧⲉ ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀.</td>
                    <td class="arabic">تسع وتسعون آيه، أحصاها، معلمو الكنيسة، الأطهار.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Of seventy weeks / O young Daniel / you informed Israel / concerning their salvation.</td>
                    <td class="coptic">Ⲟ̅ ⲛ̀ⲉ̀ⲩⲇⲱⲙⲁⲥ: ⲱ̀ Ⲇⲁⲛⲓⲏⲗ ⲡⲓⲕⲟⲩϫⲓ: ⲉ̀ⲁⲕⲧⲁⲙⲉ ⲡⲒⲥⲣⲁⲏ̀ⲗ: ⲉⲑⲃⲉ ⲡⲟⲩϫⲓⲛⲥⲱϯ.</td>
                    <td class="arabic">سبعين أسبوعاً، يا دانيال الصغير، أخبرت إسرائيل، لأجل خلاصهم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The time is completed / in this time / for this One born / of a virgin child.</td>
                    <td class="coptic">Ⲡⲁⲓⲭ̀ⲣⲟⲛⲟⲥ ⲁϥϫⲱⲕ: ϧⲉⲛ ⲡⲁⲓⲭ̀ⲣⲟⲛⲟⲥ ⲫⲁⲓ: ϩⲓⲧⲉⲛ ⲡⲁⲓϫⲓⲛⲙⲓⲥⲓ: ⲛ̀ⲧⲁⲓⲁ̀ⲗⲟⲩ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">كمل الزمان، وهذا الزمان، من قبل هذا المولود، من العذراء الصبية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Rejoice today / O our father Adam / with Abel your son / and all the elders.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲛⲁⲕ ⲙ̀ⲫⲟⲟⲩ: ⲱ̀ Ⲁ̀ⲇⲁⲙ ⲡⲉⲛⲓⲱⲧ: ⲛⲉⲙ Ⲁ̀ⲃⲉⲗ ⲡⲉⲕϣⲏⲣⲓ: ⲛⲉⲙ ⲛⲓϧⲉⲗⲗⲟⲓ ⲧⲏⲣⲟⲩ.</td>
                    <td class="arabic">افرح اليوم، يا آدم أبونا، وهابيل ابنك، وجميع الشيوخ.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Those chosen with you: / Abraham the righteous / Isaac the sacrifice / and Jacob Israel.</td>
                    <td class="coptic">Ⲥⲱⲧⲡ ⲛⲉⲙⲱⲧⲉⲛ ⲧⲏⲣⲟⲩ: ⲙ̀ⲡⲓⲑ̀ⲙⲏⲓ Ⲁ̀ⲃⲣⲁⲁⲙ: ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲡⲓϣⲟⲩϣⲱⲟ̀ⲩϣⲓ: ⲛⲉⲙ Ⲓⲁⲕⲱⲃ ⲡⲒⲥⲣⲁⲏ̀ⲗ.</td>
                    <td class="arabic">المختارون معكم، إبراهيم البار، واسحق الذبيح، ويعقوب إسرائيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Tetra, the judge / and Judah the powerful / through whom was / great salvation.</td>
                    <td class="coptic">Ⲧⲉⲧⲣⲁ ⲡⲓⲕ̀ⲣⲓⲧⲏⲥ: ⲛⲉⲙ Ⲓⲟⲩⲇⲁⲥ ⲡⲓϫⲱⲣⲓ: ⲉ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲛⲟϩⲉⲙ: ϣⲱⲡⲓ ⲉ̀ⲃⲟⲗϩⲓⲧⲟⲧϥ.</td>
                    <td class="arabic">تيترا القاضي، ويهوذا القوي، الذي كان الخلاص العظيم، من جهته.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Behold, the elder / Samuel the anointer / of just men and prophets / and kings.</td>
                    <td class="coptic">Ⲩⲡⲡⲉ ⲡⲓϧⲉⲗⲗⲟ: Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓⲣⲉϥⲑⲱϩⲥ: ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲕⲉⲟⲩⲣⲱⲟⲩ.</td>
                    <td class="arabic">ها هو الشيخ، صموئيل ماسح، الابرار والانبياء، وأيضاً الملوك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">God of glory / appeared to Moses / in Midian / in a flaming fire.</td>
                    <td class="coptic">Ⲫϯ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲉ̀ⲧⲁϥⲟⲩⲱⲛϩϥ ⲉ̀Ⲙⲱⲩ̀ⲥⲏⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ Ⲙⲁⲇⲓⲁⲛ: ϧⲉⲛ ⲟⲩϣⲁϩ ⲛ̀ⲭ̀ⲣⲱⲙ.</td>
                    <td class="arabic">ظهر إله المجد، لموسي، في مديان، من نار مضطرمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Leave Midian / come to Bethlehem / to behold / God of glory.</td>
                    <td class="coptic">Ⲭⲱ ⲙ̀Ⲙⲁⲇⲓⲁⲛ: ⲁ̀ⲙⲟⲩ ϣⲁ Ⲃⲏⲑⲗⲉⲉⲙ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲛⲁⲩ: ⲉ̀Ⲫϯ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ.</td>
                    <td class="arabic">اترك مديان، وتعال إلي بيت لحم، لكي تنظر، إله المجد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">The spiritual bush / engulfed in flames / is Mary / and her only One.</td>
                    <td class="coptic">Ⲯⲩⲭⲟⲥ ⲙ̀ⲃⲁⲧⲟⲥ: ⲉϥⲙⲟϩ ϧⲉⲛ ⲡⲓⲭ̀ⲣⲱⲙ: ⲉ̀ⲧⲉ ⲑⲁⲓ ⲧⲉ Ⲙⲁⲣⲓⲁ: ⲛⲉⲙ ⲡⲉⲥⲙⲟⲛⲟⲅⲉⲛⲏⲥ.</td>
                    <td class="arabic">العليقة النفسانية، المملؤة ناراً، التي هي مريم، ووحيدها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">Blessed are you / more than all women / blessed is your womb / which carried God.</td>
                    <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁ̀ϯ ⲛ̀ⲑⲟ: ⲡⲁⲣⲁ ⲛⲓϩⲓⲟ̀ⲙⲓ ⲧⲏⲣⲟⲩ: ⲱ̀ⲟⲩⲛⲓⲁⲧⲥ ⲛ̀ⲧⲉⲛⲉϫⲓ: ⲉ̀ⲧⲁⲥϥⲁⲓ ⲙ̀Ⲫϯ.</td>
                    <td class="arabic">طوباك أنت، أكثر من جميع النساء، وطوبي لبطنك، الذي حمل الله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">Every filthy thought / full of disease / take away from / our race.</td>
                    <td class="coptic">Ϣⲱϣ ⲛⲓⲃⲉⲛ ⲉⲧϩⲱⲟⲩ: ⲟⲩⲟϩ ⲉⲑⲙⲉϩ ⲛ̀ϣⲱⲛⲓ: ⲁ̀ⲣⲓⲱ̀ⲗⲓ ⲙ̀ⲙⲱⲟⲩ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
                    <td class="arabic">كل وصمة رديئة، مملوءة مرضاً، ارفعها، عن جنسنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="north">
                    <td class="english">God appears / to many nations / He appeared from you / openly.</td>
                    <td class="coptic">Ϥ̀ⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ Ⲫϯ: ϧⲉⲛ ϩⲁⲛⲙⲏϣ ⲛ̀ⲉⲑⲛⲟⲥ: ⲁϥⲟⲩⲱⲛϩ ⲫⲁⲓ ⲛ̀ϧⲏϯ: ϧⲉⲛ ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ̀.</td>
                    <td class="arabic">يظهر الله، لأمم كثيرة، وظهر منك، بإعلان.</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="south">
                    <td class="english">With many types / sayings and prophecies / in this age He spoke / with us through His Son.</td>
                    <td class="coptic">Ϧⲉⲛ ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϧⲉⲛ ⲡⲁⲓⲥⲏⲟⲩ ⲁϥⲥⲁϫⲓ: ⲛⲉⲙⲁⲛ ϧⲉⲛ Ⲡⲉϥϣⲏⲣⲓ.</td>
                    <td class="arabic">وبأنواع، لم الأنبياء، وفي هذا الزمان، كلمنا بإبنه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="south">
                    <td class="english">O Theotokos / you O, Mary / the holy virgin / Saint Mary.</td>
                    <td class="coptic">Ϩⲱⲥ Ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲛ̀ⲑⲟ ϩⲱⲓ Ⲙⲁⲣⲓⲁ: ⲉ̅ⲑ̅ⲩ̅ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ.</td>
                    <td class="arabic">يا والدة الإله، أنت يا مريم، العذراء الطاهرة، القديسة مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_28" class="north">
                    <td class="english">Today was fulfilled / the saying of David / For He saved the poor / from his enemy's hand.</td>
                    <td class="coptic">Ϫⲉ ⲁϥϫⲱⲕ ⲙ̀ⲫⲟⲟⲩ: ⲉ̀ⲡ̀ⲥⲁϫⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: ϫⲉ ⲁϥⲛⲟϩⲉⲙ ⲛ̀ⲟⲩϩⲏⲕⲓ: ϧⲉⲛ ⲧ̀ϫⲓϫ ⲛ̀ⲛⲉϥϫⲁϫⲓ.</td>
                    <td class="arabic">لأنه كمل اليوم، قول داود، لأنه خّلص المسكين، من يد عدوه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="north">
                    <td class="english">Take today a voice / our father Adam / for you were exalted / by the salvation of your race.</td>
                    <td class="coptic">Ϭⲓⲥ̀ⲙⲏ ⲛⲁⲕ ⲙ̀ⲫⲟⲟⲩ: ⲱ̀ Ⲁ̀ⲇⲁⲙ ⲡⲉⲛⲓⲱⲧ: ϫⲉ ⲁϥϭⲓⲥⲓ ⲛⲁⲕ: ⲡ̀ⲥⲱϯ ⲙ̀ⲡⲉⲕⲅⲉⲛⲟⲥ.</td>
                    <td class="arabic">خذ لك صوتاً اليوم، يا أبانا آدم، لأنك ارتفعت، بخلاص جنسك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="south">
                    <td class="english">I ask you / my Lady, the virgin / ask your Son / to forgive us our sins.</td>
                    <td class="coptic">Ϯϯϩⲟ ⲉ̀ⲣⲟ: ⲱ̀ ⲧⲁⲟ̅ⲥ̅ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲙⲁϯϩⲟ ⲙ̀ⲡⲉϢⲏⲣⲓ: ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                    <td class="arabic">أسألك، يا سيدتي العذراء، اسألي إبنك، ليغفر لنا خطايانا.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const wednesdayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Watos For Wednesday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Watos For Wednesday
                <span class="coptic-caption">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم الاربعاء في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Sing O believers, with songs and psalies, for Jesus Christ was born, in Bethlehem of Judea.</td>
                    <td class="coptic">Ⲁⲣⲓⲯⲁⲗⲓⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ϧⲉⲛ ϩⲁⲛϩⲱⲇⲏ ⲛⲉⲙ ϩⲁⲛⲯ̀ⲁⲗⲓⲁ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲙ̀Ⲡⲭ̅ⲥ̅ Ⲓⲏ̅ⲥ̅: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀.</td>
                    <td class="arabic">رتلوا أيها المؤمنون بتسبيح وترتيل لأن المسيح يسوع ولد في بيت لحم يهوذا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">There was joy and gladness, in heaven and on earth, for Immanuel’s Birth, Jesus Christ the Mighty One.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲟ̀ⲩⲣⲁϣⲓ ⲛⲉⲙ ⲟ̀ⲩⲑⲉⲗⲏⲗ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲫⲁ ⲡⲓⲁ̀ⲙⲁϩⲓ.</td>
                    <td class="arabic">كان فرح وتهليل في السماء وعلى الأرض من أجل ميلاد عمانوئيل يسوع المسيح ذى العزة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">He was born of Mary, according to the prophetic sayings, He granted us freedom, for He is the Master.</td>
                    <td class="coptic">Ⲅⲉⲛⲛⲉⲑⲓⲥ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥⲉ̀ⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲛ̀ϯⲉ̀ⲗⲉⲩⲑⲉⲣⲓⲁ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ.</td>
                    <td class="arabic">وُلـد من مريم كقول الأنبياء وأنعم علينا بالحرية لأنه هو السيد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">David the hymnist spoke, about Christ the King of glory, saying “You are My Son, and today I have begotten You.”</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ⲁϥⲥⲁϫⲓ: ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲡⲉϫⲁϥ ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲠⲁϢⲏⲣⲓ: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ ⲙ̀ⲫⲟⲟ̀ⲩ.</td>
                    <td class="arabic">شهد داود المرتل عن المسيح ملك المجد فقال أنك أنت هو ابني وأنا اليوم ولدتك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Today Immanuel was born, of Saint Mary, to Him is glory and honor, and thanksgiving.</td>
                    <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲁⲩⲙⲁⲥϥ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑⲏⲉ̅ⲑ̅ⲩ̅ Ⲙⲁⲣⲓⲁ: ⲫⲱϥ ⲡⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: ⲛⲉⲙ ϯⲉ̀ⲩⲭⲁⲣⲓⲥⲧⲓⲁ.</td>
                    <td class="arabic">وُلـد عمانوئيل اليوم من القديسة مريم له المجد والكرامة والنعم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Seven archangels, praise Christ the King, saying “Holy holy holy, to whom the Virgin gave birth.”</td>
                    <td class="coptic">Ϣⲁϣϥ (ⲍ̅) ⲛ̀ⲁ̀ⲣⲭⲏⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀ⲡ̀Ⲟⲩⲣⲟ Ⲡⲭ̅ⲥ̅: ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">سبعة رؤساء الملائكة يسبحون الملك المسيح قائلين قدوس قدوس الذى ولدته العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Isaiah speaks with joy, about the Birth of Jesus Christ, the Lamb Immanuel, from the pure Mary.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲁϥϫⲟⲥ ϧⲉⲛ ⲟ̀ⲩⲑⲉⲗⲏⲗ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡⲓϨⲓⲏⲃ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">يقول أشعياء بتهليل عن ميلاد يسوع المسيح الحمل عمانوئيل من مريم النقية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">This is the city of Jerusalem, the holy city of Zion, He who sits upon the cherubim, she gave birth that He may save us.</td>
                    <td class="coptic">Ⲑⲁⲓ ⲧⲉ ⲧ̀ⲡⲟⲗⲓⲥ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲛⲉⲙ ϯⲃⲁⲕⲓ ⲉ̅ⲑ̅ⲩ̅ Ⲥⲓⲱⲛ: ⲫⲏⲉ̀ⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                    <td class="arabic">هذه هى مدينة أورشليم والمدينة المقدسة صهيون الجالس على الشاروبيم ولدته حتى خلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Come among us O Ezekiel, to teach us openly, about our Savior’s Birth, Jesus Christ of authority.</td>
                    <td class="coptic">Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲁ̀ⲙⲟⲩ ⲛ̀ⲧⲉⲛⲙⲏϯ: ⲛ̀ⲧⲉⲕⲧⲁⲙⲟⲛ ϧⲉⲛ ⲟ̀ⲩⲡⲁⲣⲣⲏⲥⲓⲁ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲫⲁ ϯⲉ̀ⲝⲟⲩⲥⲓⲁ.</td>
                    <td class="arabic">يا حزقيال تعال في وسطنا لتخبرنا علانية عن ميلاد مخلصنا يسوع المسيح صاحب السلطان.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">For you have said by the Sprit, “I saw a door in the East, no one has entered it, other than Christ Adonai.”</td>
                    <td class="coptic">Ⲕⲉ ⲅⲁⲣ ϧⲉⲛ ⲡⲓⲡ̅ⲛ̅ⲁ̅ ⲁⲕϫⲟⲥ: ϫⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟ̀ⲩⲡⲩⲗⲏ ⲛⲓⲙⲁⲛϣⲁⲓ: ⲙ̀ⲡⲉϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ: ⲉ̀ⲃⲏⲗ ⲉ̀Ⲡⲭ̅ⲥ̅ Ⲁ̀ⲇⲱⲛⲁⲓ.</td>
                    <td class="arabic">لأنك قلت بالروح أني رأيت باباً نحو المشرق ولم يدخله أحد. إلا المسيح اللـه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Rejoice today O prophets, with the righteous and the just, for the Master’s Birth, Jesus Christ the Creator.</td>
                    <td class="coptic">Ⲗⲉⲗⲓ ⲙ̀ⲫⲟⲟ̀ⲩ ⲱ̀ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲙ̀ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲆⲩⲙⲓⲟⲩⲣⲅⲟⲥ.</td>
                    <td class="arabic">تهللوا اليوم أيها الأنبياء والأبرار والصديقـون من أجل ميلاد السيد يسوع المسيح الخالق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Let the heavenly rejoice, and the earthly be glad, for Jesus Christ the Lover of Mankind, visited us through His Birth.</td>
                    <td class="coptic">Ⲙⲁⲣⲟⲩⲟ̀ⲩⲛⲟϥ ⲛ̀ϫⲉ ⲛⲁⲛⲓⲫⲏⲟⲩⲓ̀: ⲟⲩⲟϩ ⲙⲁⲣⲟⲩⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ ⲛⲁⲡ̀ⲕⲁϩⲓ: ϫⲉ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲉⲑⲃⲉ ⲡⲉϥϫ̀ⲫⲟ ⲁϥϫⲉⲙⲡⲉⲛϣⲓⲛⲓ.</td>
                    <td class="arabic">فليفرح السمائيـون وليتهـلل الأرضيون لأن يسوع المسيح محب البشر من أجل ميلاده قد تعهدنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">Who is like You among the gods, You are the God of gods, we praise You with every way, for You were born for our salvation.</td>
                    <td class="coptic">Ⲛⲓⲙ ⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ ϧⲉⲛ ⲛⲓⲛⲟⲩϯ: ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲫϯ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲩϯ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ϧⲉⲛ ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲁⲩⲙⲁⲥⲕ ⲉⲑⲃⲉ ⲡⲉⲛⲥⲱϯ.</td>
                    <td class="arabic">من يشبهك في الآله أنت هو إله الآله نسبحك بكل نوع لأنك وُلدت من أجل خلاصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Blessed are You O Christ Lord, with Your good Father, and the Holy Spirit, the coessential Trinity.</td>
                    <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟⲩⲧ ⲱ̀ Ⲡⲭ̅ⲥ̅ Ⲕⲩⲣⲓⲟⲛ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲕⲉ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲁ̀ⲅⲓⲟⲛ: ϯⲦ̀ⲣⲓⲁⲥ ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ.</td>
                    <td class="arabic">تباركت أيها المسيح الرب مع أبيك الصالح والروح القدس الثالوث المساوي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">A star shone in the East, a King was born in Bethlehem, He is the Lord Adonai, of our Lady Mary.</td>
                    <td class="coptic">Ⲟⲩⲥⲓⲟⲩ ⲁϥϣⲁⲓ ϧⲉⲛ ⲛⲓⲙⲁ ⲛ̀ϣⲁⲓ: ⲟ̀ⲩⲟ̀ⲩⲣⲟ ⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲟ̅ⲥ̅ Ⲁ̀ⲇⲱⲛⲁⲓ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲉⲛⲟ̅ⲥ̅ Ⲙⲁⲣⲓⲁⲙ.</td>
                    <td class="arabic">نجم ظهـر في المشرق ملك وُلـد في بيت لحم هذا هو الرب الإله من سيدتنا مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">Through Him the incomprehensible became tangible, the unseen became seen, come let us worship Him, and exalt Him above all.</td>
                    <td class="coptic">Ⲡⲓⲁ̀ⲧϣ̀ⲧⲁϩⲱϥ ⲁⲩϫⲉⲙϫⲟⲙϥ: ⲫⲏⲁ̀ⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">به أصبح ما لا يـُدرك ملموساً وما لا يـُرى منظوراً تعالـوا نسجـد له ونزيده علـواً.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Rejoice and be glad O city, of Bethlehem with Zion, for Christ the only-begotten, the Creator of the ages.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲑⲉⲗⲏⲗ ⲱ̀ ϯⲡⲟⲗⲓⲥ: Ⲃⲏⲑⲗⲉⲉⲙ ⲛⲉⲙ Ⲥⲓⲱⲛ: ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲫ̀ⲣⲉϥⲑⲁⲙⲓⲟ ⲛ̀ⲛⲓⲉ̀ⲱ̀ⲛ.</td>
                    <td class="arabic">افرحى وتهللى يا مدينة بيت لحم. ويا صهيون أيضاً من أجل المسيح الوحيد خالق الدهـور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Bless us with Your blessing, O our good Savior, and shepherd Your people, keep them from temptations.</td>
                    <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲡⲉⲕⲥ̀ⲙⲟⲩ: ⲱ̀ ⲡⲉⲛⲤⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲡⲉⲕⲗⲁⲟⲥ ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟ̀ⲩ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
                    <td class="arabic">باركنا ببركتك يا مخلصنا الصالح وارع شعبك واحفطه من التحارب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">We ask You to save us O Christ, from inflation and wars, also from evil men, and [their] thoughts and envy.</td>
                    <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲛⲁϩⲙⲉⲛ: ⲉ̀ⲃⲟⲗϩⲁ ⲛⲓϩ̀ⲃⲱⲛ ⲛⲉⲙ ⲛⲓⲗⲟⲓⲙⲟⲥ: ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ ⲉⲧϩⲱⲟ̀ⲩ ⲟⲛ: ⲛⲉⲙ ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛⲉⲙ ⲛⲓⲫ̀ⲑⲟⲛⲟⲥ.</td>
                    <td class="arabic">نسألك أيها المسيح نجنا من الغلاء والحروب ومن الناس الأشرار أيضاً والأفكار الرديئة والحسد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Today the Son of God shone unto us, in the bosom of Mary the queen, in the city of David, in Bethlehem as the Good One.</td>
                    <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲁϥϣⲁⲓ ⲙ̀ⲫⲟⲟ̀ⲩ: ϧⲉⲛ ⲕⲉⲛϥ ⲙ̀Ⲙⲁⲣⲓⲁ ϯⲟⲩⲣⲱ: ϧⲉⲛ ⲑ̀ⲃⲁⲕⲓ ⲛ̀Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ: Ⲃⲏⲑⲗⲉⲉⲙ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">لقد أشرق ابن اللـه اليوم في حضن مريم الملكة في مدينة داود الملك في بيت لحم كصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">He who sits upon the cherubim, the shepherd saw Him, and was glorified by the seraphim, with unutterable voices.</td>
                    <td class="coptic">Ⲫⲏⲉ̀ⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟ̀ⲩ: ⲟⲩⲟϩ ⲁⲩϯⲱ̀ⲟⲩ ⲛⲁϥ ⲛ̀ϫⲉ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲏ ⲛ̀ⲁ̀ⲧⲭⲁⲣⲱⲟ̀ⲩ.</td>
                    <td class="arabic">الجالس على الشاروبيم رآه الرعاة ومجده الساروفيم بأصوات لا تـنقـطع.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to you O Virgin, Mary Adam’s salvation, and the Lord’s city Jerusalem, with the city Bethlehem Zion.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ ⲡ̀ⲥⲱϯ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲛⲉⲙ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛⲉⲙ Ⲥⲓⲱⲛ ϯⲃⲁⲕⲓ ⲙ̀Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">السلام لك أيتها العذراء مريم خلاص آدم وأورشليم مدينة الرب وصهيون مدينة بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Grant every soul coolness, in the Paradise with the righteous, Abraham Isaac and Jacob, through the prayers of the Theotokos.</td>
                    <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲙⲟⲓ ⲛⲱⲟ̀ⲩ ⲛ̀ⲟⲩⲭ̀ⲃⲟⲃ: ⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ: ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀ⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ.</td>
                    <td class="arabic">كل الأنفس أعطها برودة في الفردوس مع الصديقين إبراهيم واسحق ويعقوب بتوسل والدة الإله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O our good Savior, through the Virgin’s intercessions, save Your servant Nicodemus, and the rest of the Christians.</td>
                    <td class="coptic">Ⲱ̀ ⲡⲉⲛⲤⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲃⲱⲕ Ⲛⲓⲕⲟⲇⲓⲙⲟⲥ: ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
                    <td class="arabic">يا مخلصنا الصالح بشفاعات العذراء خلص عبدك نيقوديموس وبقية المسيحيـين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Watos For Wednesday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Watos For Wednesday
                <span class="coptic-caption">Ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛϩⲱⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم الاربعاء في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Come, all, to praise / our Lord, Jesus Christ / Son of God in truth / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛϩⲱⲥ: ⲙ̀ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">تعالوا جميعاً لنسبح، ربنا يسوع المسيح، إبن الله حقاً، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Today there is joy / in heaven and upon earth / for Christ, King of glory / was born in Bethlehem.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲟⲩⲣⲁϣϩⲓ ϣⲱⲡⲓ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">اليوم فرح، في السماء وعلى الأرض، من أجل المسيح ملك المجد، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">For He is the Beginning / as King David said / "This is my beloved Son" / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲅⲉ ⲅⲁⲣ Ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓϨⲟⲩⲓⲧ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ: ϫⲉ Ⲛ̀ⲑⲟⲕ ⲡⲉ Ⲡⲁϣⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">لأنه هو البدء، كما قال داود الملك، "أنت هو إبني الحبيب، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">O Master, King of heavenly / before the morning star / today I have begotten you / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲇⲉⲥⲡⲟⲧⲁ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ̀: ϧⲁϫⲱϥ ⲙ̀ⲡⲓⲥⲓⲟⲩ ⲛ̀ⲧⲉ ϩⲁⲛⲁ̀ⲧⲟⲟⲩⲓ̀: ⲁ̀ⲛⲟⲕ ⲁⲓϫ̀ⲫⲟⲕ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أيها السيد ملك السمائيين، قبل كوكب الصبح، أنا اليوم ولدتك،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Glory to God in the highest / peace on earth / goodwill towards man / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲉ̀ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ϯ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">"المجد لله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Your compassion is great / and Your mercies O Merciful / O Christ, the longsuffering / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲍⲉⲟϣ ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ: ⲛⲉⲙ ⲡⲉⲕⲛⲁⲓ ⲱ̀ ⲡⲓⲚⲁⲏⲧ: Ⲡⲭ̅ⲥ̅ ⲡⲓⲢⲉϥⲱ̀ⲟⲩⲛ̀ϩⲏⲧ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كثيرة هي رأفاتك، ومراحمك أيها الرحوم، المسيح الطويل الأناة، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Isaiah, son of Amos / cries out saying / a Child is born to us / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲁ̀ⲙⲱⲥ: ⲉϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲀ̀ⲗⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أشعياء أبن عاموس ، يصرخ قائلاً، "وُلد لنا غلام،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">Yours is the power and majesty / in heaven and upon earth / O of the great majesty / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲫⲁ ⲡⲓⲛⲓϣϯ ⲛ̀ⲁ̀ⲙⲁϩⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">لك القوة والعزة، في السماء وعلى الأرض، يا ذا العز العظيم، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Jesus Christ, our king / of power and kingship / was incarnate in truth / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲞⲩⲣⲟ: ⲫⲁ ϯⲉⲝⲟⲩⲥⲓⲁ ⲛⲉⲙ ϯⲙⲉⲧⲟⲩⲣⲟ: ⲁϥϭⲓⲥⲁⲣⲝ ϧⲉⲛ ⲟⲩⲧⲁϫⲣⲟ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يسوع المسيح ملكنا، ذو السلطان والملك، تجسد بثبات، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">As was said / by righteous Jeremiah / Son of God, in truth / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ ⲡⲓⲑ̀ⲙⲏⲓ Ⲓⲉⲣⲉⲙⲓⲁⲥ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كما قال، البار أرميا، "إبن الله حقاً،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Also, Ezekiel said / about the birth of Immanuel / Christ, King of Israel / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲡⲉϫⲉ Ⲓⲉⲍⲉⲕⲓⲏⲗ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲙ̀ⲡⲒⲥⲣⲁⲏⲗ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">وأيضاً قال حزقيال، لأجل ميلاد عمانوئيل، المسيح ملك إسرائيل، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">No one entered into / the eastern gate / except the One, Adonai / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲙⲡⲉ ϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲉϩ: ϧⲉⲛ ⲛⲓⲡⲩⲗⲏ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ⲉ̀ⲃⲏⲗ ⲉ̀ⲟⲩⲁⲓ ϫⲉ Ⲁ̀ⲇⲱⲛⲁⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">لم يدخل أحد في، باب المشارق، إلا الواحد أدوناي، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">For all who came from since Adam / said Isaiah / Jesus is the Mediator / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲛⲉⲙ ⲛⲏⲉⲑⲛⲏⲟⲩ ⲓⲥϫⲉⲛ Ⲁ̀ⲇⲁⲙ: ⲡⲉϫⲁϥ ⲛ̀ϫⲉ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ: Ⲓⲏ̅ⲥ̅ ⲡⲉ ⲡⲓⲘⲉⲥⲓⲧⲏⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">مع الذين أتوا منذ آدم، قال أشعياء، "يسوع هو الوسيط،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">You are blessed, O Jesus Christ / with Your good Father / and the Holy Spirit / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟⲩⲧ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">تباركت يا يسوع المسيح، مع أبيك الصالح، والروح القدس، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">A virginal feast / inviting the heavenly / to glorify the King of ages / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲟⲩϣⲁⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ: ⲉⲧⲑⲁϩⲉⲙ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲉⲩϯⲱ̀ⲟⲩ ⲙ̀ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">عيد بتولي، يدعوا السمائيين، ليمجدوا ملك الدهور، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">Job the just said / my God lives / Jesus Christ, Son of God / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲡⲉϫⲁϥ ⲛ̀ϫⲉ Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ: ϫⲉ ϥ̀ⲟⲛϧ ⲛ̀ϫⲉ ⲡⲁⲚⲟⲩϯ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">قال أيوب البار، "حي هو إلهي، يسوع المسيح إبن الله،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Incline Your ear to the shepherds / who saw Your glory / the angels glorify / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲣⲉⲕⲡⲉⲕⲙⲁϣϫ ⲉ̀ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲛⲏⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲡⲉⲕⲱ̀ⲟⲩ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲉⲩϯⲱ̀ⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أمل سمعك إلي الرعاة، الذين نظروا مجدك، الملائكة يمجدون، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Listen to the angels / saying: peace on earth / good will towards man / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">إسمعوا الملائكة قائلين، "السلام على الأرض، وفي الناس المسرة،" الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Arise and come among us today / O Isaiah, of the great voice / explain what you seen / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲧⲱⲛⲕ ⲁ̀ⲙⲟⲩ ⲧⲉⲛⲙⲏϯ ⲙ̀ⲫⲟⲟⲩ: ⲱ̀ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲫⲁ ⲡⲓⲛⲓϣϯ ⲛ̀ϧ̀ⲣⲱⲟⲩ: ⲟⲩⲱⲛϩ ⲛ̀ⲛⲏⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">قُم وتعال في وسطنا اليوم، يا أشعياء يا ذا الصوت العظيم، وأظهر ما رأيته، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Son of God, the only-begotten / God the sovereign / of the patroness / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: Ⲫ̀ϯ ⲫⲏⲉⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ ⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲛ̀ϫⲉ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يا إبن الله الوحيد، الله المتسلط، الذي ولدته الشفيعة، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">God the invisible / they saw him in His Nature / come, let us worship Him / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲫ̀ϯ ⲡⲓⲀⲧϣ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ: ϧⲉⲛ ⲧⲉϥⲫⲩⲥⲓⲥ ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲁ̀ⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">الله الغير المرئي، بطبيعته رأوه، تعالوا فلنسجد له، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to Bethlehem / a spiritual greeting / for the ever-existent / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲃⲏⲑⲗⲉⲉⲙ: ϧⲉⲛ ⲟⲩⲭⲉⲣⲉ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ϫⲉ ⲫⲏⲉⲧϣⲟⲡ ⲓⲥϫⲉⲛ ⲡ̀ⲉ̀ⲛⲉϩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">السلام لبيت لحم، سلاماً روحانياً، لأنه الكائن منذ البدء، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">O Savior of the whole world / and all that is therein / Jesus, God of everyone / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲛⲉⲙ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲉ ⲛ̀ϧⲏⲧϥ: Ⲓⲏ̅ⲥ̅ Ⲫ̀ϯ ⲙ̀ⲡⲓⲉ̀ⲡ̀ⲧⲏⲣϥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يا مخلص العالم كله، وكل ما فيه، يسوع إله الكل، الذي وُلد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">All glory and praise / befits Your Goodness / O our Lord Jesus Christ / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲱ̀ⲟⲩ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲟⲩϫⲓⲛϩⲱⲥ: ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲱ̀ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كل مجد وتسبيح، يليق بصلاحك، يا ربنا يسوع المسيح، الذي وُلد في بيت لحم.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const thursdayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Watos For Thursday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Watos For Thursday
                <span class="coptic-caption">Ⲁ̀Ⲫϯ ⲥⲁϫⲓ ⲛⲉⲙ Ⲙⲱⲩⲥⲏⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم الخميس في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">God spoke to Moses, out of the burning bush, and the fire within it, without consuming its branches.</td>
                    <td class="coptic">Ⲁ̀Ⲫϯ ⲥⲁϫⲓ ⲛⲉⲙ Ⲙⲱⲩⲥⲏⲥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑ̀ⲙⲏϯ ⲙ̀ⲡⲓⲃⲁⲧⲟⲥ: ⲉ̀ⲣⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲟϩ ⲛ̀ϧⲏⲧϥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲣⲱⲕϩ ⲛ̀ϫⲉ ⲛⲉϥⲕ̀ⲗⲁⲇⲟⲥ.</td>
                    <td class="arabic">تكلم الله مع موسي في وسط العليقة والنار ملؤها ولم تحترق أغصانها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">He sent His mercy and His Word, to the fruitful flower, He dwelt in your womb, by a great mystery.</td>
                    <td class="coptic">Ⲃⲱⲣⲡ ⲙ̀ⲡⲉϥⲛⲁⲓ ⲛⲉⲙ ⲡⲉϥⲥⲁϫⲓ: ⲉ̀ϯϩ̀ⲣⲏⲣⲓ ⲑⲏⲉ̀ⲧⲁⲥⲫⲓⲣⲓ: ⲁϥϣⲱⲡⲓ ⲉⲑⲃⲏⲧⲉⲛ ϧⲉⲛ ⲧⲉⲥⲛⲉϫⲓ: ϧⲉⲛ ⲟⲩⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ϣ̀ⲫⲏⲣⲓ.</td>
                    <td class="arabic">أرسل الله رحمته وكلمته الزهرة المثمرة في بطنك من أجلنا بسر عجيب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">He was born on this day, of our Lady Mary, He became man for our salvation, and forgiveness of our iniquities.</td>
                    <td class="coptic">Ⲅⲉⲛⲛⲉⲑⲓⲥ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲫⲁⲓ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲉⲛⲟ̅ⲥ̅ ⲛ̀ⲛⲏⲃ Ⲙⲁⲣⲓⲁ: ⲁϥⲉ̀ⲣⲣⲱⲙⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲟ̀ⲩϫⲁⲓ: ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ.</td>
                    <td class="arabic">ولد في هذا اليوم من ملكتنا وسيدتنا مريم. وتأنس من أجل خلاصنا وغفران آثامنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">O David the psalmist, come among us to praise, the One who became the Mediator, for us before His good Father.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ: ⲁ̀ⲙⲟⲩ ⲛ̀ⲧⲉⲛⲙⲏϯ ⲛ̀ⲧⲉⲛϩⲱⲥ: ⲉ̀ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲙ̀ⲙⲉⲥⲓⲧⲏⲥ: ⲛⲁϩⲣⲉⲛ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">أيا داود المرتل تعال في وسطنا لنسبح من صار وسيطاً لنا عند أبيه الصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">They offered Him gifts, the daughters of Tyre, and Seba and Arabia, and the kings of Tarshish.</td>
                    <td class="coptic">Ⲉⲩⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ: ⲛ̀ϫⲉ ⲛⲓϣⲉⲣⲓ ⲛ̀ⲧⲉ Ⲧⲩⲣⲟⲥ: ⲛⲉⲙ Ⲥⲁⲃⲉ ⲛⲉⲙ ⲛⲓⲀ̀ⲣⲁⲃⲟⲥ: ⲛⲉⲙ ⲛⲓⲟ̀ⲩⲣⲱⲟ̀ⲩ ⲛ̀ⲧⲉ Ⲑⲁⲣⲥⲟⲥ.</td>
                    <td class="arabic">قدموا له قرابين بنات صور وسابا والعرب وملوك ترشيش.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The unshakable Giver of Life, and Giver of good things, appeared in the land of Naphtali, and the borders of Zebulun.</td>
                    <td class="coptic">Ⲍⲱⲏ̀ ⲫⲟⲣⲟⲥ ⲛ̀ⲁⲧⲕⲓⲙ: ⲙ̀ⲫ̀ⲣⲉϥϯ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ: ⲁϥⲟ̀ⲩⲱ̀ⲛϩ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲛⲉϥⲑⲁⲗⲓⲙ: ⲛⲉⲙ ⲛⲓϭⲓⲏ̀ ⲛ̀ⲧⲉ Ⲍⲁⲃⲟⲩⲗⲱⲛ.</td>
                    <td class="arabic">المحيي الغير المتزعزع معطي الخيرات. ظهر في أرض نفتاليم وتخوم زابولون.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">With a great voice Isaiah, spoke likewise, “Unto us a Child is born, and a Son is given.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲫⲱⲛⲏ ⲙⲉⲅⲁⲗⲟⲩ: ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲁ̀ⲗⲟⲩ: ⲟⲩⲟϩ ⲁⲩϯ ⲛ̀ⲟⲩϣⲏⲣⲓ.</td>
                    <td class="arabic">يقول أشعيا بصوت عظيم هكذا ولد لنا غلام وأعطينا ابن.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">The merciful and mighty God, the Ruler, His authority upon His shoulders, and He is the Master.”</td>
                    <td class="coptic">Ⲑⲉⲟⲥ ⲡⲓⲚⲁⲏ̀ⲧ ⲛ̀ϫⲱⲣⲓ: ⲟⲩⲟϩ ⲡⲓⲉ̀ⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲧⲉϥⲁ̀ⲣⲭⲏ ϩⲓϫⲉⲛ ⲧⲉϥⲛⲁϩⲃⲓ: ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ.</td>
                    <td class="arabic">الله الرحوم القوى المتسلط . الذي رئاسته على منكبيه وهو أيضاً السيد المطلق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Ezekiel also said, “I saw a sealed gate, with a great seal, the Son of the God entered it.”</td>
                    <td class="coptic">Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲁϥϫⲟⲥ ⲇⲉ ⲟⲛ: ⲁⲓⲛⲁⲩ ⲉ̀ⲟ̀ⲩⲡⲩⲗⲏ ⲉⲥⲧⲟⲃ: ϧⲉⲛ ⲟⲩⲧⲉⲃⲥ ⲑⲁⲩ ⲙⲁⲥⲧⲟⲛ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ: ⲛ̀ϫⲉ ⲡ̀Ϣⲏⲣⲓ ⲙ̀ⲫⲏⲈ̀ⲑⲟⲩⲁⲃ.</td>
                    <td class="arabic">قال حزقيال أيضاً رأيت باباً مختوماً بخاتم عجيب دخله ابن القدوس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord Jesus Christ, and no one shall enter it, He came out and her, virginity was sealed well.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲙ̀ⲡⲉ ϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ: ⲉ̀ⲃⲏⲗ ⲛ̀ⲑⲟϥ ⲟⲩⲟϩ ⲁϥⲭⲁⲥ: ⲉⲥϣⲟⲧⲉⲙ ⲙ̀ⲡⲉⲥⲣⲏϯ ⲕⲁⲗⲱⲥ.</td>
                    <td class="arabic">الرب يسوع المسيح ولم يدخله إلا هو. وخرج منه. والبتولية مختومة حسناً كما هي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">The Logos of our Father, the Sanctuary of the believers’ salvation, one in His essence, He saves us from temptations.</td>
                    <td class="coptic">Ⲗⲟⲅⲟⲥ ⲧⲟⲩ ⲟ̀ Ⲡⲉⲧⲣⲟⲥ: ⲡ̀ⲉ̀ⲣⲫⲉⲓ ⲙ̀ⲡⲓⲛⲟϩⲉⲙ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲡⲓⲟ̀ⲩⲁⲓ ϧⲉⲛ ⲡⲉϥⲡ̀ⲣⲟⲥⲟ̀ⲡⲟⲛ: ⲉ̀ⲁ̀ϥⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
                    <td class="arabic">كلمة الله أبينا هيكل النجاة الذي للمؤمنين الواحد في شخصه مخلصنا من التجارب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Micah also spoke, “You O Bethlehem, land of Ephrathah and Judah, are not the least in Jerusalem.</td>
                    <td class="coptic">Ⲙⲓⲭⲉⲟⲥ ⲡⲁⲗⲓⲛ ⲁϥϫⲟⲥ: ϫⲉ ⲛⲓⲙ ⲛ̀ⲑⲟ ϩⲱⲓ ⲱ̀ Ⲃⲏⲑⲗⲉⲉⲙ: ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲉⲫⲣⲁⲑⲁ ⲛⲉⲙ Ⲓⲟⲩⲇⲉⲁ̀: ⲛ̀ⲑⲟ ⲟⲩⲕⲟⲩϫⲓ ⲁⲛ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
                    <td class="arabic">وقد قال ميخاوس أيضاً وأنت يا بين لحم يهوذا أرض أفراثا لست بصغيرة في أورشليم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">For out of you, shall come a leader, who will shepherd Israel, my true people.”</td>
                    <td class="coptic">Ⲛ̀ϧⲏϯ ⲉϥⲉ̀ⲓ̀ ⲅⲁⲣ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲟⲩϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ: ⲫⲏⲉ̀ⲑⲛⲁⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲡⲒⲥⲣⲁⲏ̀ⲗ: ⲡⲁⲗⲁⲟⲥ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ.</td>
                    <td class="arabic">لأنه منك يخرج المدبر الذي يرعي شعبي إسرائيل الحقيقي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Truly the angel, showed forth the secret, in this manner saying, “Today a Child was born.</td>
                    <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲁϥⲟ̀ⲩⲱ̀ⲛϩ ⲙ̀ⲡⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟⲩ.</td>
                    <td class="arabic">حقاً قد اظهر الملاك السر قائلاً هكذا ولد لكم اليوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">A Savior in Bethlehem, He is the King of glory, go quickly, you will find Him there.</td>
                    <td class="coptic">ⲞⲩⲤⲱⲧⲏⲣ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟ̀ⲩ: ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲇⲉ ⲛ̀ⲭⲱⲗⲉⲙ: ⲉ̀ⲣⲉⲧⲉⲛ ⲉ̀ϫⲓⲙⲓ ⲙ̀ⲙⲁⲩ.</td>
                    <td class="arabic">مخلص في بيت لحم الذي هو ملك المجد أمضوا سريعاً تجدونه هناك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">A Babe lying in a manger, wrapped in swaddling cloths,” so they came with haste, and worshiped Him.</td>
                    <td class="coptic">Ⲡⲓⲁ̀ⲗⲟⲩ ⲉϥⲭⲏ ϧⲉⲛ ⲟⲩⲟ̀ⲛϩϥ: ⲟⲩⲟϩ ϧⲉⲛ ϩⲁⲛⲧⲱⲓⲥ ⲉⲩⲕⲟⲩⲗⲱⲗϥ: ⲥⲁⲧⲟⲧⲟⲩ ⲁⲩⲓ̀ ϩⲁⲣⲟϥ: ⲁⲩⲓ̀ ⲉ̀ϧ̀ⲣⲏⲓ ⲁⲩⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">الصبي في مذود. ملفوفاً بالخرق وللوقت أتوا إليه وخروا له ساجدين.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Incline your ears, listen to the words of Matthew, about the Birth of the Merciful One, He is Jesus Christ.</td>
                    <td class="coptic">Ⲣⲓⲕⲓ ⲛ̀ⲛⲉⲧⲉⲛⲙⲁϣϫ ⲉ̀ⲣⲟⲓ: ⲥⲱⲧⲉⲙ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲙⲁⲧⲑⲉⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲓⲣⲉϥⲛⲁⲓ: ⲉ̀ⲧⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">أميلوا إلى آذانكم واسمعوا كلام متى من أجل ميلاد الرحوم الذي هو يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Yes truly he spoke, in his gospel saying, “Our Lord Jesus was born, He became man to save us.”</td>
                    <td class="coptic">Ⲥⲉ ⲟⲛⲧⲱⲥ ⲡⲁⲓⲣⲏϯ ⲡⲉϫⲁϥ: ϧⲉⲛ ⲡⲉϥⲉ̀ⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲁϥⲉ̀ⲣⲣⲱⲙⲓ ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                    <td class="arabic">نعم حقاً هكذا قال. في إنجيله ربنا يسوع الذي ولد وتأنس حتى خلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Magi kings came, from the East to Jerusalem, saying “O holy, and honored city.</td>
                    <td class="coptic">Ⲧⲟⲧⲉ ⲛⲓⲟ̀ⲩⲣⲱⲟⲩ ⲛ̀ⲛⲓⲙⲁⲅⲟⲥ: ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲥⲁ ⲡⲉⲓⲉⲃⲧ: ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϯⲃⲁⲕⲓ ⲉ̅ⲑ̅ⲩ̅ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ.</td>
                    <td class="arabic">حينئذ اتي ملوك المجوس . من المشرق إلى أورشليم قائلين أيتها المدينة المقدسة المكرمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Where will the King of the Jews, be born, for we saw His star, in the East.”</td>
                    <td class="coptic">Ⲩ̀ⲡⲟ ⲧⲁ ⲅⲓ ⲁϥⲑⲱⲛ ⲡⲉⲇⲓⲟⲛ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ: ϫⲉ ⲁⲛⲛⲁⲩ ⲅⲁⲣ ⲉ̀ⲡⲉϥⲥⲓⲟⲩ: ⲥⲁ ⲡ̀ⲥⲁ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ.</td>
                    <td class="arabic">أين يولد ملك اليهود لأننا رأينا نجمه ناحية المشارق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">This is He who was born for us, for He is the Savior of the world, we praise and exalt Him, with the choirs of the angels.</td>
                    <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲉⲑⲃⲏⲧⲉⲛ ⲁⲩⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡ̀Ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲧⲉⲛϩⲱⲥ ⲛⲁϥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ.</td>
                    <td class="arabic">هذا هو الذي ولد من أجلنا لأنه هو مخلص العالم نسبحه ونعظمه مع صفوف الملائكة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hasten O believers, let us worship Jesus Christ, who was born in the flesh, of a pure Virgin.</td>
                    <td class="coptic">Ⲭⲱⲗⲉⲙ ⲙ̀ⲙⲱⲧⲉⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲥⲱⲙⲁⲧⲓⲕⲟⲥ: ϧⲉⲛ ⲑⲏⲉ̀ⲧⲧⲟⲩⲃⲏⲟⲩⲧ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">أسرعوا أيها المؤمنون لنسجد ليسوع المسيح الذي ولد جسدانياً من العذراء الطاهرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">O Savior of the whole world, save and have mercy on us, rescue us from all our tribulations, and grant us Your salvation.</td>
                    <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ϥⲱϯ ⲙ̀ⲡⲉⲛϩⲟϫϩⲉϫ ⲧⲏⲣϥ: ⲟⲩⲟϩ ⲡⲉⲕⲟ̀ⲩϫⲁⲓ ⲙⲏⲓϥ ⲛⲁⲛ.</td>
                    <td class="arabic">يا مخلص العالم كله خلصنا وارحمنا وأنقذنا من جميع ضائقاتنا وأعطنا خلاصك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O merciful Lord Jesus Christ, grant us the light that never fades, through the prayers of the bride, to You is glory with her amen.</td>
                    <td class="coptic">Ⲱ̀ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲚⲁⲏⲧ: ϯⲛⲁⲛ ⲙ̀ⲡⲓⲟ̀ⲩⲱ̀ⲓⲛⲓ ⲛ̀ⲁ̀ⲧⲕⲁⲕⲓⲛ: ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀ϯϣⲉⲗⲏⲧ: ⲡⲓⲱ̀ⲟ̀ⲩ ⲛⲁⲕ ⲛⲉⲙⲁⲥ ⲁ̀ⲙⲏⲛ.</td>
                    <td class="arabic">يا ربنا يسوع المسيح الرحوم.أعطنا النور الذي لا تغشاه الظملة بطلبات العروسة لك</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Watos For Thursday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Watos For Thursday
                <span class="coptic-caption">Ⲁ̀Ⲫϯ ⲥⲁϫⲓ ⲛⲉⲙ Ⲙⲱⲩⲥⲏⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم الخميس في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">God spoke with Moses / from within the bush / the fire engulfing it / and its branches did not burn.</td>
                    <td class="coptic">Ⲁ̀Ⲫϯ ⲥⲁϫⲓ ⲛⲉⲙ Ⲙⲱⲩⲥⲏⲥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲑ̀ⲙⲏϯ ⲙ̀ⲡⲓⲃⲁⲧⲟⲥ: ⲉ̀ⲣⲉ ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲟϩ ⲛ̀ϧⲏⲧϥ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲣⲱⲕϩ ⲛ̀ϫⲉ ⲛⲉϥⲕ̀ⲗⲁⲇⲟⲥ.</td>
                    <td class="arabic">تكلم الله مع موسي في وسط العليقة والنار ملؤها ولم تحترق أغصانها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">He sent His mercy and Word / the fruitful flower / in your womb for our sake / in a mysterious marvel.</td>
                    <td class="coptic">Ⲃⲱⲣⲡ ⲙ̀ⲡⲉϥⲛⲁⲓ ⲛⲉⲙ ⲡⲉϥⲥⲁϫⲓ: ⲉ̀ϯϩ̀ⲣⲏⲣⲓ ⲑⲏⲉ̀ⲧⲁⲥⲫⲓⲣⲓ: ⲁϥϣⲱⲡⲓ ⲉⲑⲃⲏⲧⲉⲛ ϧⲉⲛ ⲧⲉⲥⲛⲉϫⲓ: ϧⲉⲛ ⲟⲩⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ϣ̀ⲫⲏⲣⲓ.</td>
                    <td class="arabic">أرسل الله رحمته وكلمته الزهرة المثمرة في بطنك من أجلنا بسر عجيب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">He was born on this day / from our Lady Mary / He became Man for our salvation / and forgiveness of our sins.</td>
                    <td class="coptic">Ⲅⲉⲛⲛⲉⲑⲓⲥ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲫⲁⲓ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲉⲛⲟ̅ⲥ̅ ⲛ̀ⲛⲏⲃ Ⲙⲁⲣⲓⲁ: ⲁϥⲉ̀ⲣⲣⲱⲙⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲟ̀ⲩϫⲁⲓ: ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ.</td>
                    <td class="arabic">ولد في هذا اليوم من ملكتنا وسيدتنا مريم. وتأنس من أجل خلاصنا وغفران آثامنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">O David, the psalmist / come among us to praise Him / who became a Mediator for us / before His good Father.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲡⲓⲓⲉⲣⲟⲯⲁⲗⲧⲏⲥ: ⲁ̀ⲙⲟⲩ ⲛ̀ⲧⲉⲛⲙⲏϯ ⲛ̀ⲧⲉⲛϩⲱⲥ: ⲉ̀ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲙ̀ⲙⲉⲥⲓⲧⲏⲥ: ⲛⲁϩⲣⲉⲛ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">أيا داود المرتل تعال في وسطنا لنسبح من صار وسيطاً لنا عند أبيه الصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">They presented Him gifts / that is the daughters of Tyre / and Sheba and Arabia / and the kings of Tersheesh.</td>
                    <td class="coptic">Ⲉⲩⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ: ⲛ̀ϫⲉ ⲛⲓϣⲉⲣⲓ ⲛ̀ⲧⲉ Ⲧⲩⲣⲟⲥ: ⲛⲉⲙ Ⲥⲁⲃⲉ ⲛⲉⲙ ⲛⲓⲀ̀ⲣⲁⲃⲟⲥ: ⲛⲉⲙ ⲛⲓⲟ̀ⲩⲣⲱⲟ̀ⲩ ⲛ̀ⲧⲉ Ⲑⲁⲣⲥⲟⲥ.</td>
                    <td class="arabic">قدموا له قرابين بنات صور وسابا والعرب وملوك ترشيش.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The steadfast lifegiver / giver of good things / appeared in the land of Naphatali / and the regions of Zebulun.</td>
                    <td class="coptic">Ⲍⲱⲏ̀ ⲫⲟⲣⲟⲥ ⲛ̀ⲁⲧⲕⲓⲙ: ⲙ̀ⲫ̀ⲣⲉϥϯ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ: ⲁϥⲟ̀ⲩⲱ̀ⲛϩ ϧⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲛⲉϥⲑⲁⲗⲓⲙ: ⲛⲉⲙ ⲛⲓϭⲓⲏ̀ ⲛ̀ⲧⲉ Ⲍⲁⲃⲟⲩⲗⲱⲛ.</td>
                    <td class="arabic">المحيي الغير المتزعزع معطي الخيرات. ظهر في أرض نفتاليم وتخوم زابولون.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Isaiah with a great voice / speaks thus saying / unto us a Child is born / and a Son is given.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲫⲱⲛⲏ ⲙⲉⲅⲁⲗⲟⲩ: ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲁ̀ⲗⲟⲩ: ⲟⲩⲟϩ ⲁⲩϯ ⲛ̀ⲟⲩϣⲏⲣⲓ.</td>
                    <td class="arabic">يقول أشعيا بصوت عظيم هكذا ولد لنا غلام وأعطينا ابن.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">God the merciful / the mighty Ruler / His government is upon His shoulders / He is the Master.</td>
                    <td class="coptic">Ⲑⲉⲟⲥ ⲡⲓⲚⲁⲏ̀ⲧ ⲛ̀ϫⲱⲣⲓ: ⲟⲩⲟϩ ⲡⲓⲉ̀ⲝⲟⲩⲥⲓⲁⲥⲧⲏⲥ: ⲧⲉϥⲁ̀ⲣⲭⲏ ϩⲓϫⲉⲛ ⲧⲉϥⲛⲁϩⲃⲓ: ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ.</td>
                    <td class="arabic">الله الرحوم القوى المتسلط . الذي رئاسته على منكبيه وهو أيضاً السيد المطلق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Ezekiel said also / I saw a door sealed / with a mysterious seal / the Son of the Holy entered it.</td>
                    <td class="coptic">Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲁϥϫⲟⲥ ⲇⲉ ⲟⲛ: ⲁⲓⲛⲁⲩ ⲉ̀ⲟ̀ⲩⲡⲩⲗⲏ ⲉⲥⲧⲟⲃ: ϧⲉⲛ ⲟⲩⲧⲉⲃⲥ ⲑⲁⲩ ⲙⲁⲥⲧⲟⲛ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ: ⲛ̀ϫⲉ ⲡ̀Ϣⲏⲣⲓ ⲙ̀ⲫⲏⲈ̀ⲑⲟⲩⲁⲃ.</td>
                    <td class="arabic">قال حزقيال أيضاً رأيت باباً مختوماً بخاتم عجيب دخله ابن القدوس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord Jesus Christ / no one save Him entered it / He came out / and the virginity is sealed.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲙ̀ⲡⲉ ϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ: ⲉ̀ⲃⲏⲗ ⲛ̀ⲑⲟϥ ⲟⲩⲟϩ ⲁϥⲭⲁⲥ: ⲉⲥϣⲟⲧⲉⲙ ⲙ̀ⲡⲉⲥⲣⲏϯ ⲕⲁⲗⲱⲥ.</td>
                    <td class="arabic">الرب يسوع المسيح ولم يدخله إلا هو. وخرج منه. والبتولية مختومة حسناً كما هي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Logos of God our Father / altar of rescue for believers / One in His Person / our Savior from tribulations.</td>
                    <td class="coptic">Ⲗⲟⲅⲟⲥ ⲧⲟⲩ ⲟ̀ Ⲡⲉⲧⲣⲟⲥ: ⲡ̀ⲉ̀ⲣⲫⲉⲓ ⲙ̀ⲡⲓⲛⲟϩⲉⲙ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲡⲓⲟ̀ⲩⲁⲓ ϧⲉⲛ ⲡⲉϥⲡ̀ⲣⲟⲥⲟ̀ⲡⲟⲛ: ⲉ̀ⲁ̀ϥⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
                    <td class="arabic">كلمة الله أبينا هيكل النجاة الذي للمؤمنين الواحد في شخصه مخلصنا من التجارب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Micah said also / you, Bethlehem of Judah / land of Ephrathah / are not little in Jerusalem.</td>
                    <td class="coptic">Ⲙⲓⲭⲉⲟⲥ ⲡⲁⲗⲓⲛ ⲁϥϫⲟⲥ: ϫⲉ ⲛⲓⲙ ⲛ̀ⲑⲟ ϩⲱⲓ ⲱ̀ Ⲃⲏⲑⲗⲉⲉⲙ: ⲡ̀ⲕⲁϩⲓ ⲛ̀Ⲉⲫⲣⲁⲑⲁ ⲛⲉⲙ Ⲓⲟⲩⲇⲉⲁ̀: ⲛ̀ⲑⲟ ⲟⲩⲕⲟⲩϫⲓ ⲁⲛ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
                    <td class="arabic">وقد قال ميخاوس أيضاً وأنت يا بين لحم يهوذا أرض أفراثا لست بصغيرة في أورشليم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">Out of you / shall come a Ruler / who will shepherd Israel / My true people.</td>
                    <td class="coptic">Ⲛ̀ϧⲏϯ ⲉϥⲉ̀ⲓ̀ ⲅⲁⲣ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲟⲩϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ: ⲫⲏⲉ̀ⲑⲛⲁⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲡⲒⲥⲣⲁⲏ̀ⲗ: ⲡⲁⲗⲁⲟⲥ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ.</td>
                    <td class="arabic">لأنه منك يخرج المدبر الذي يرعي شعبي إسرائيل الحقيقي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Truly the angel / revealed the mystery / saying likewise / unto you today is born.</td>
                    <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲁϥⲟ̀ⲩⲱ̀ⲛϩ ⲙ̀ⲡⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟⲩ.</td>
                    <td class="arabic">حقاً قد اظهر الملاك السر قائلاً هكذا ولد لكم اليوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Savior In Bethlehem / who is King of glory / go quickly and / you shall find there.</td>
                    <td class="coptic">ⲞⲩⲤⲱⲧⲏⲣ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟ̀ⲩ: ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲇⲉ ⲛ̀ⲭⲱⲗⲉⲙ: ⲉ̀ⲣⲉⲧⲉⲛ ⲉ̀ϫⲓⲙⲓ ⲙ̀ⲙⲁⲩ.</td>
                    <td class="arabic">مخلص في بيت لحم الذي هو ملك المجد أمضوا سريعاً تجدونه هناك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The child in a manger / wrapped in swaddling cloths / immediately they came to Him / and worshipped Him.</td>
                    <td class="coptic">Ⲡⲓⲁ̀ⲗⲟⲩ ⲉϥⲭⲏ ϧⲉⲛ ⲟⲩⲟ̀ⲛϩϥ: ⲟⲩⲟϩ ϧⲉⲛ ϩⲁⲛⲧⲱⲓⲥ ⲉⲩⲕⲟⲩⲗⲱⲗϥ: ⲥⲁⲧⲟⲧⲟⲩ ⲁⲩⲓ̀ ϩⲁⲣⲟϥ: ⲁⲩⲓ̀ ⲉ̀ϧ̀ⲣⲏⲓ ⲁⲩⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">الصبي في مذود. ملفوفاً بالخرق وللوقت أتوا إليه وخروا له ساجدين.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Incline your ears to me / listen to the words of Matthew / about the birth of the merciful / He is Jesus Christ.</td>
                    <td class="coptic">Ⲣⲓⲕⲓ ⲛ̀ⲛⲉⲧⲉⲛⲙⲁϣϫ ⲉ̀ⲣⲟⲓ: ⲥⲱⲧⲉⲙ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲙⲁⲧⲑⲉⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲓⲣⲉϥⲛⲁⲓ: ⲉ̀ⲧⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">أميلوا إلى آذانكم واسمعوا كلام متى من أجل ميلاد الرحوم الذي هو يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Yes, truly he said / in his Gospel/ our Lord Jesus was born / He became Man to save us.</td>
                    <td class="coptic">Ⲥⲉ ⲟⲛⲧⲱⲥ ⲡⲁⲓⲣⲏϯ ⲡⲉϫⲁϥ: ϧⲉⲛ ⲡⲉϥⲉ̀ⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲁϥⲉ̀ⲣⲣⲱⲙⲓ ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                    <td class="arabic">نعم حقاً هكذا قال. في إنجيله ربنا يسوع الذي ولد وتأنس حتى خلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Then came the Magi kings / from the East / to Jerusalem saying / O holy honored city.</td>
                    <td class="coptic">Ⲧⲟⲧⲉ ⲛⲓⲟ̀ⲩⲣⲱⲟⲩ ⲛ̀ⲛⲓⲙⲁⲅⲟⲥ: ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲥⲁ ⲡⲉⲓⲉⲃⲧ: ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϯⲃⲁⲕⲓ ⲉ̅ⲑ̅ⲩ̅ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ.</td>
                    <td class="arabic">حينئذ اتي ملوك المجوس . من المشرق إلى أورشليم قائلين أيتها المدينة المقدسة المكرمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Where is the One born / the King of the Jews / for we saw His star / in the East.</td>
                    <td class="coptic">Ⲩ̀ⲡⲟ ⲧⲁ ⲅⲓ ⲁϥⲑⲱⲛ ⲡⲉⲇⲓⲟⲛ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ: ϫⲉ ⲁⲛⲛⲁⲩ ⲅⲁⲣ ⲉ̀ⲡⲉϥⲥⲓⲟⲩ: ⲥⲁ ⲡ̀ⲥⲁ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ.</td>
                    <td class="arabic">أين يولد ملك اليهود لأننا رأينا نجمه ناحية المشارق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">This is He who was born / He is the Savior of the world / we praise and exalt Him / with the chorus of the angels.</td>
                    <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲉⲑⲃⲏⲧⲉⲛ ⲁⲩⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡ̀Ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲧⲉⲛϩⲱⲥ ⲛⲁϥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ.</td>
                    <td class="arabic">هذا هو الذي ولد من أجلنا لأنه هو مخلص العالم نسبحه ونعظمه مع صفوف الملائكة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hasten O believers / to worship Jesus Christ / who was born in the flesh / from the pure virgin.</td>
                    <td class="coptic">Ⲭⲱⲗⲉⲙ ⲙ̀ⲙⲱⲧⲉⲛ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲥⲱⲙⲁⲧⲓⲕⲟⲥ: ϧⲉⲛ ⲑⲏⲉ̀ⲧⲧⲟⲩⲃⲏⲟⲩⲧ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">أسرعوا أيها المؤمنون لنسجد ليسوع المسيح الذي ولد جسدانياً من العذراء الطاهرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">O Savior of the world / save and have mercy on us / save us from all our distress / grant us salvation.</td>
                    <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ϥⲱϯ ⲙ̀ⲡⲉⲛϩⲟϫϩⲉϫ ⲧⲏⲣϥ: ⲟⲩⲟϩ ⲡⲉⲕⲟ̀ⲩϫⲁⲓ ⲙⲏⲓϥ ⲛⲁⲛ.</td>
                    <td class="arabic">يا مخلص العالم كله خلصنا وارحمنا وأنقذنا من جميع ضائقاتنا وأعطنا خلاصك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">Our Lord Jesus Christ, the merciful / grant us light which overcomes darkness through the prayers of the bride / Yours is the glory with her. Amen.</td>
                    <td class="coptic">Ⲱ̀ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲚⲁⲏⲧ: ϯⲛⲁⲛ ⲙ̀ⲡⲓⲟ̀ⲩⲱ̀ⲓⲛⲓ ⲛ̀ⲁ̀ⲧⲕⲁⲕⲓⲛ: ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀ϯϣⲉⲗⲏⲧ: ⲡⲓⲱ̀ⲟ̀ⲩ ⲛⲁⲕ ⲛⲉⲙⲁⲥ ⲁ̀ⲙⲏⲛ.</td>
                    <td class="arabic">يا ربنا يسوع المسيح الرحوم.أعطنا النور الذي لا تغشاه الظملة بطلبات العروسة لك</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const fridayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Watos For Friday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Watos For Friday
                <span class="coptic-caption">Ⲁⲓⲛⲁⲉ̀ⲣϩⲏⲧⲥ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ ⲛⲓⲡⲓⲥⲧⲟⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم الجمعة في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">I begin O believers my beloved, to praise the Lord with a new song, for the Birth of Jesus Christ, the Son of the Most High God.</td>
                    <td class="coptic">Ⲁⲓⲛⲁⲉ̀ⲣϩⲏⲧⲥ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲫⲏⲈ̀ⲧϭⲟⲥⲓ.</td>
                    <td class="arabic">ابتدئ يا أحبائي المؤمنين . لنسبح الرب تسبيحاً جديداً. من أجل ميلاد يسوع المسيح ابن الله العلي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Every one rejoices today, with the choirs of the angels, for Christ the King of glory, was born of the Virgin.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲛⲓⲃⲉⲛ ⲁⲩⲣⲁϣⲓ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟ̀ⲩ: ⲁⲩⲙⲁⲥϥ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">يفرح الكل اليوم. مع صفوف الملائكة لأن المسيح ملك المجد ولد من العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">O Christians of all races, gather today with psalies, for the Birth of Jesus Christ, from our Lady Mary.</td>
                    <td class="coptic">Ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ: ⲛⲁⲩⲑⲱⲟⲩϯ ⲙ̀ⲫⲟⲟ̀ⲩ ϧⲉⲛ ϩⲁⲛⲯ̀ⲁⲗⲓⲁ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧⲉⲛⲟ̅ⲥ̅ Ⲙⲁⲣⲓⲁ.</td>
                    <td class="arabic">يا جنس المسيحيين اجتمعوا اليوم بترتيلات. من أجل ميلاد يسوع المسيح من سيدتنا مريم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">David the king of Israel, teaches us openly, about Immanuel’s Birth, the Word of the eternal God.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲙ̀ⲡⲒⲥⲣⲁⲏ̀ⲗ: ⲁϥⲧⲁⲙⲟⲛ ϧⲉⲛ ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲡⲓⲖⲟⲅⲟⲥ ⲙ̀Ⲫϯ ⲡⲓⲀⲓⲇⲓⲁ.</td>
                    <td class="arabic">يخبرنا داود ملك إسرائيل علانية. من أجل ميلاد عمانوئيل كلمة الله الذاتية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Concerning our Savior’s Birth, it was happiness, the character of His divinity, and glory were seen.</td>
                    <td class="coptic">Ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲁⲩϣⲱⲡⲓ ⲛ̀ⲟ̀ⲩⲛⲟϥ ⲙ̀ⲙⲱⲟ̀ⲩ: ⲁⲩⲛⲁⲩ ⲉ̀ⲡⲉϥⲕⲁⲣⲁⲕⲧⲏⲣ ⲛ̀ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ ⲛⲉⲙ ⲡⲉϥⲱ̀ⲟ̀ⲩ.</td>
                    <td class="arabic">من أجل ميلاد مخلصنا صار لهم الفرح لأنهم نظروا شخص لاهوته ومجده.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Many are Your compassions, shown to the world, for the merciful God, shone from the Virgin.</td>
                    <td class="coptic">Ⲍⲉⲟ̀ϣ ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ: ⲛⲏⲉ̀ⲧⲁϥⲓ̀ⲣⲓ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲛⲁⲏ̀ⲧ: ⲁϥϣⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">كثيرة هي مراحمك التي صنعتها في العالم لأن إلهنا رحوم قد أشرق من العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Behold the angel, spoke to the shepherds, in this manner saying, “The Creator was born today.”</td>
                    <td class="coptic">Ⲏⲡⲡⲉ ⲅⲁⲣ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲁϥⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ ⲁⲩⲙⲓⲥⲓ ⲙ̀ⲫⲟⲟ̀ⲩ.</td>
                    <td class="arabic">ها هوذا الملاك تكلم مع الرعاة قائلاً هكذا ولد الخالق اليوم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">Yours is the power and honor, O our Savior of authority, O You who were born as a King, in Bethlehem of Judea.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: ⲱ̀ ⲡⲉⲛⲤⲱⲧⲏⲣ ⲫⲁ ϯⲉ̀ⲝⲟⲩⲥⲓⲁ: ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϩⲱⲥ ⲟⲩⲣⲟ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀.</td>
                    <td class="arabic">لك القوة والكرامة يا مخلصنا يا ذا السلطان يا من ولد كملك في بيت لحم اليهودية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Behold Magi kings, offered You gifts, gold frankincense and myrrh, as the King of the ages.</td>
                    <td class="coptic">Ⲓⲥ ⲛⲓⲟ̀ⲩⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲙⲁⲅⲟⲥ: ⲁⲩⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ: ⲟⲩⲛⲟⲩⲃ ⲛⲉⲙ ⲟⲩⲗⲓⲃⲁⲛⲟⲥ: ⲛⲉⲙ ⲟⲩϣⲁⲗ ϩⲱⲥ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
                    <td class="arabic">هوذا ملوك المجوس قد قدموا له قرابين. ذهباً ولباناً ومراً كملك الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord Jesus Christ, shone from the Virgin, in Bethlehem as the Good One, to save our race.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲁϥϣⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
                    <td class="arabic">قد أشرق ارب يسوع المسيح من العذراء في بيت لحم كصالح حتى خلص جنسنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Moreover Jeremiah spoke, “Behold He appeared on earth, walked among men, the Son of the Most High.”</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲁϥⲥⲁϫⲓ: ϩⲏⲡⲡⲉ ⲓⲥ ⲁϥⲟ̀ⲩⲟ̀ⲛϩϥ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲁϥⲉⲣϣ̀ⲫⲏⲣⲓ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀ⲫⲏⲈ̀ⲧϭⲟⲥⲓ.</td>
                    <td class="arabic">وأيضاً أرميا تكلم ها هو قد ظهر على الأرض واشترك مع الناس . ابن العلي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Moses the archprophet, saw the burning bush as a symbol, and fire within it, that is the divinity of Jesus Christ.</td>
                    <td class="coptic">Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲁ̀ⲣⲭⲏ ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥⲛⲁⲩ ⲙ̀ⲡ̀ⲧⲩⲡⲟⲥ ⲙ̀ⲡⲓⲃⲁⲧⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲭ̀ⲣⲱⲙ ⲙⲟϩ ⲛ̀ϧⲏⲧϥ: ϯⲙⲉⲑⲛⲟⲩϯ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">وقد رأي موسى رئيس الأنبياء. لاهوت يسوع المسيح مثال العليقة والنار ملؤها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">Three Magi kings, testified well, in this manner saying, “Truly we saw Christ.”</td>
                    <td class="coptic">Ⲛⲓⲟ̀ⲩⲣⲱⲟⲩ ϣⲟⲙⲧ (ⲅ̅) ⲛ̀ϩⲁⲛⲙⲁⲅⲟⲥ: ⲛ̀ⲑⲱⲟ̀ⲩ ⲁⲩⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ⲕⲁⲗⲱⲥ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ⲁ̀ⲗⲏⲑⲱⲥ ⲁ̀ⲛⲛⲁⲩ ⲉ̀Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">ثلاثة ملوك المجوس قد شهدوا حسناً قائلين هكذا. بالحقيقة رأينا المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Blessed are You to the end of time, O You who were born of the Virgin, in Bethlehem of Judea, we ask of You mercy O Good One.</td>
                    <td class="coptic">Ⲝ̀ⲙⲁⲣⲱⲟⲩⲧ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ: ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀: ⲧⲉⲛϯϩⲟ ⲛⲁⲓ ⲛⲁⲛ ⲱ̀ ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">تباركت إلى الانقضاء يا من ولد من العذراء في بيت لحم يهوذا نسألك ارحمنا أيها الصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Glory to God in the highest, and peace on earth, and goodwill towards men, for the Light has shone upon us.</td>
                    <td class="coptic">Ⲟⲩⲱ̀ⲟ̀ⲩ ⲙ̀Ⲫϯ ϧⲉⲛ ⲛⲏⲉ̀ⲧϭⲟⲥⲓ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ϫⲉ ⲁϥϣⲁⲓ ⲛⲁⲛ ⲛ̀ϫⲉ ⲡⲓⲟ̀ⲩⲱ̀ⲓⲛⲓ.</td>
                    <td class="arabic">المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة لن النور قد أضاء لنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The One from the Trinity, shone unto us from the Virgin, Jesus Christ the Messiah, she gave birth to Him as the Good One.</td>
                    <td class="coptic">ⲠⲓⲞ̀ⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲦ̀ⲣⲓⲁⲥ: ⲁϥϣⲁⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ Ⲙⲁⲥⲓⲁⲥ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ.</td>
                    <td class="arabic">الواحد من الثالوث أشرق لنا من العذراء يسوع المسيح الماسيا ولدته كصالح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Rejoice of city of God, Bethlehem David’s city, for Christ shone from you, the beloved and only-begotten.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ϯⲡⲟⲗⲓⲥ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅: Ⲃⲏⲑⲗⲉⲉⲙ ⲑ̀ⲃⲁⲕⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: ϫⲉ ⲁϥϣⲁⲓ ⲛ̀ϧⲏϯ Ⲡⲭ̅ⲥ̅: ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲙ̀ⲙⲉⲛⲣⲓⲧ.</td>
                    <td class="arabic">افرحي يا مدينة الرب بيت لحم مدينة داود لأنه قد أشرق منك المسيح الابن الحبيب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Listen to us O Christ our Master, save us from our tribulations, and have mercy on us O Good One, on Judgment Day.</td>
                    <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ ⲱ̀ ⲡⲉⲛⲚⲏⲃ Ⲡⲭ̅ⲥ̅: ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲓⲯⲓⲥ: ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ ⲱ̀ ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲕ̀ⲣⲏⲥⲓⲥ.</td>
                    <td class="arabic">اسمعنا يا ملكنا المسيح خلصنا من الضائقات. وارحمنا أيها الصالح في يوم الدينونة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">We praise You with the cherubim, “Holy holy holy,” and bless You with the seraphim, O Son of the Holy.</td>
                    <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲛⲉⲙ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲛⲉⲙ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ⲛ̀ⲑⲟⲕ ⲡ̀Ϣⲏⲣⲓ ⲙ̀ⲫⲏⲈ̀ⲑⲟⲩⲁⲃ.</td>
                    <td class="arabic">نسبحك مع الشاروبيم قائلين قدوس قدوس قدوس نباركك مع السارافيم . أنت يا ابن القدوس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">O Son of God keep us, from the traps of demons, and take away Your wrath from us, O King of the ages.</td>
                    <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲉ̀ⲃⲟⲗϩⲁ ⲡⲓⲫⲁϣ ⲛ̀ⲧⲉ ⲛⲓⲇⲉⲙⲟⲛ: ⲱ̀ⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲛ: ⲱ̀ ⲡⲓⲞⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱ̀ⲛ.</td>
                    <td class="arabic">يا ابن الله احفظنا من فخاخ الشياطين وارفع غضبك عنا يا ملك الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">O You who carry the sin of the world, O Christ the Lamb of God, raise the status of the Christians, and save them from fear.</td>
                    <td class="coptic">Ⲫⲏⲉ̀ⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲡⲓϨⲏⲓⲃ ⲛ̀ⲧⲉ Ⲫϯ: ϭⲓⲥⲓ ⲙ̀ⲡ̀ⲧⲁⲡ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲟⲩⲟϩ ⲛⲁϩⲙⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲁ ⲟⲩϩⲟϯ.</td>
                    <td class="arabic">يا حامل خطايا العالم أيها المسيح حمل الله أرفع شأن المسيحيين وخلصهم من الخوف.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to the city of Jerusalem, with Zion and Bethlehem, hail to Joachim’s daughter, Mary the Virgin.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ϯⲡⲟⲗⲓⲥ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲛⲉⲙ Ⲥⲓⲱⲛ ⲛⲉⲙ Ⲃⲏⲑⲗⲉⲉⲙ: ⲭⲉⲣⲉ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁⲕⲓⲙ: ϯⲠⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ.</td>
                    <td class="arabic">السلام لمدينة أورشليم وصهيون وبيت لحم السلام لابنه يواقيم مريم العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Every orthodox soul, repose for the Virgin’s sake, Mary the beautiful dove, the Mother of our Lord Jesus Christ.</td>
                    <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲛ̀Ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ ⲉⲑⲃⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">نيح كل نفوس الأرثوذكسيين من اجل العذراء مريم الحمامة الحسنة أم ربنا يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O You who were born of the Virgin, in Bethlehem of Judea, forgive us Your people, and confirm us to the end of time.</td>
                    <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲁ̀ⲛⲟⲛ ⲡⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲟⲩⲟϩ ⲙⲁⲧⲁϫⲣⲟⲛ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ.</td>
                    <td class="arabic">يا من ولد من العذراء في بيت لحم يهوذا أغفر لنا نحن شعبك وثبتنا إلى الانقضاء.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Watos For Friday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Watos For Friday
                <span class="coptic-caption">Ⲁⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛϩⲱⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم الجمعة في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">O come all, to praise / our Lord Jesus Christ / Son of God in truth / who was born In Bethlehem.</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛϩⲱⲥ: ⲙ̀ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">تعالوا جميعكم لنسبح، ربنا يسوع المسيح، ابن الله بالحقيقة، ، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Today there is joy / and happiness and glory / because of Christ, King of glory / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲟⲩⲟⲩⲛⲟϥ ⲁϥϣⲱⲡⲓ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲟⲩⲣⲁϣⲓ ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ: ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">اليوم فرح، وسرور ومجد، من أجل المسيح الملك المجد، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">For He is the Lover of Mankind / Great God, incarnate / to save humans / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲟⲩⲛⲓϣϯ ⲛ̀ⲛⲟⲩϯ ⲁϥⲉⲣⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲛ̀ϯⲙⲉⲧⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">لأنه هو محب البشر، إله عظيم تأنس، حتى خلص البشر، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">Truly spoke David / the psalmist in the beginning / "You are my beloved Son" / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲇⲓⲕⲉⲟⲥ ⲡⲉϫⲉ Ⲇⲁⲩⲓⲇ: ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ϧⲉⲛ ⲡⲓϩⲟⲩⲓⲧ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲁϣⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">حقاً قال داود، المرتل في البدء، أنك أنت ابني حبيبي، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">The honor of this feast / is from sunset to sunrise / for Two became One / divinity and humanity.</td>
                    <td class="coptic">Ⲉ̀ⲣⲉ ⲡ̀ⲧⲁⲓⲟ̀ ⲛ̀ⲧⲉ ⲡⲁⲓϣⲁⲓ: ⲓⲥϫⲉⲛ ⲡ̀ⲉⲙϩⲓⲧ ⲥⲁ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ϫⲉ ⲡⲓⲥ̀ⲛⲁⲩ ⲁϥⲉⲣⲟⲩⲁⲓ: ϯⲙⲉⲑⲛⲟⲩϯ ⲛⲉⲙ ϯⲙⲉⲧⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كرامة هذا العيد، من المغرب إلى المشرق، لأن الاثنين صارا واحداً، لاهوت وناسوت.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The angels of six wings / praise God the Good One / with His Son Jesus Christ / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲥⲟⲟⲩ (ⲋ) ⲛ̀ⲧⲉⲛϩ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀Ⲫϯ ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲉϥϣⲏⲣⲓ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">الملائكة ذوو الستة الأجنحة، يسبحون الله الصالح، مع ابنه يسوع المسيح، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">Ezekiel spoke thus / that the eastern gate / no one entered it save / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲍⲁⲕⲓⲏⲗ ⲁϥϫⲟⲥ ϧⲉⲛ ⲫⲁⲓ: ϫⲉ ⲟⲩⲡⲩⲗⲏ ⲛ̀ⲥⲁ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ⲙ̀ⲡⲉϥⲥⲓⲛⲓ ⲛ̀ϧⲏⲧϥ ⲛ̀ϫⲉ ⲟⲩⲁⲓ: ⲉ̀ⲃⲏⲗ ⲉ̀Ⲡⲟ̅ⲥ̅ Ⲫϯ ⲛ̀ⲧⲉ ⲛⲓϫⲱⲙ.</td>
                    <td class="arabic">قال حزقيال هكذا، أن باباً ناحية المشرق، لم يدخله أحد غير، الرب إله القوات.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">O Isaiah, come today / crying with your voice / explain the powers you have seen / about the birth of Christ.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲁ̀ⲙⲟⲩ ⲙ̀ⲫⲟⲟⲩ: ⲱϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲕϧ̀ⲣⲱⲟⲩ: ⲟⲩⲱⲛϩ ⲛ̀ⲛⲓϫⲟⲙ ⲉ̀ⲧⲁⲕⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">يا أشعياء تعال اليوم، صارخاً بصوتك، وأعلن القوات التي رأيتها، من أجل ميلاد المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">He said, behold the virgin / shall conceive without marriage / and bear an eternal Son / who is Immanuel.</td>
                    <td class="coptic">Ⲑⲁⲓ ⲧⲉ ⲡⲉϫⲁϥ ϫⲉ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲉⲉ̀ⲣⲃⲟⲕⲓ ⲁϭⲛⲉ ⲅⲁⲙⲟⲥ: ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛ̀ⲟⲩϣⲏⲣⲓ ⲛ̀ⲁⲣⲭⲉⲟⲥ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">قال هذه العذراء، تحبل بغير زواج، وتلد أبناً أزلياً، هو عمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">Jesus Christ, God with us / who saved us by His name / and granted us salvation / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ Ⲫϯ ⲛⲉⲙⲁⲛ: ⲫⲏⲉ̀ⲧⲁϥⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲡⲉϥⲣⲁⲛ: ⲉⲑⲃⲉ ⲡ̀ⲥⲱϯ ⲁϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يسوع المسيح الله معناً، الذي نجّانا باسمه، وأنعم لنا بالخلاص، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">As was spoken / by Matthew the Apostle / about the coming of the Magi / who presented Him gifts.</td>
                    <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲙⲁⲧⲑⲉⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲓ̀ ⲛ̀ⲛⲓⲙⲁⲅⲟⲥ: ⲁⲩⲓ̀ⲛⲓ ⲛⲁϥ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ.</td>
                    <td class="arabic">كما قال، متى الرسول، من أجل مجيء المجوس، وقدموا له قرابين.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Lo, the Magi presented / myrrh, gold and frankincense / to God the Logos / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲁⲩⲓ̀ⲛⲓ ⲛ̀ⲛⲓⲙⲁⲅⲟⲥ: ⲟⲩϣⲁⲗ ⲛⲉⲙ ⲟⲩⲛⲟⲩⲃ ⲛⲉⲙ ⲟⲩⲗⲓⲃⲁⲛⲟⲥ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">وأيضاً قدم المجوس، مراً وذهباً ولباناً، أمام الله الكلمة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">Let us praise with the angels / saying glory to God in the highest / peace on earth / goodwill towards man.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫϯ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">فلنسبح مع الملائكة، قائلين المجد لله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">The shepherds beheld His glory / they returned glorifying / Jesus Christ, King of glory / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲁⲩⲛⲁⲩ ⲡ̀ⲉϥⲱ̀ⲟⲩ: ⲁⲩⲕⲟⲧⲟⲩ ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲁⲩϯⲱ̀ⲟⲩ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">نظر الرعاة مجده، ورجعوا وهم يمجدون، يسوع المسيح ملك المجد، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">In sixty-nine verses / Daniel said that / the Messiah shall come / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲝⲉⲯⲓⲧ ⲉⲣ ⲡⲉ ⲡⲓⲛⲟⲙⲟⲑⲉⲧⲏⲥ: Ⲇⲁⲛⲓⲏⲗ ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ: ϥ̀ⲛⲁⲓ̀ ⲛ̀ϫⲉ Ⲙⲁⲥⲓⲁⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">في تسع وستين آية، قال دانيال أنه، يأتي ماسياس، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">He is the Logos of the Father / the true faithful Son / born of the Father / before all ages.</td>
                    <td class="coptic">Ⲟⲩⲟϩ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲛⲉⲙ ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲙⲏⲓ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ.</td>
                    <td class="arabic">وهو كلمة الآب، والابن الحقيقي المؤتمن، المولود من الآب، قبل كل الدهور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">The head of the ages / who appeared in Zion / to save us / by His holy appearance.</td>
                    <td class="coptic">Ⲡⲓⲁⲣⲭⲱⲛ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱⲛ: ⲉ̀ⲧⲁϥⲟⲩⲱⲛϩ ϧⲉⲛ Ⲥⲓⲱⲛ: ϣⲁ ⲛ̀ⲧⲉϥⲛⲁϩⲙⲉⲛ ⲁ̀ⲛⲟⲛ ϩⲱⲛ: ϩⲓⲧⲉⲛ ⲧⲉϥⲡⲁⲣⲟⲩⲥⲓⲁ̀ ⲉ̅ⲑ̅ⲩ.</td>
                    <td class="arabic">رئيس الدهور، الذي ظهر في صهيون، حتى خلصنا، بظهوره المقدس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Incline your ear to the shepherds / who saw the angels / praising and glorifying / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲣⲉⲕ ⲡⲉⲙⲁϣϫ ⲉ̀ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲟⲩⲟϩ ⲛⲏⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲥⲉϩⲱⲥ ⲥⲉϯⲱ̀ⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أمل بسمعك إلى الرعاة، الذين رأوا الملائكة، يسبحون ويمجدون، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">Listen to the explanation / that Mary bore a Child / and her virginity is sealed / by a mysterious work.</td>
                    <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ϯⲉⲣⲙⲉⲛⲓⲁ̀: ϫⲉ ⲟⲩⲁ̀ⲗⲟⲩ ⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁ̀: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀: ϧⲉⲛ ⲟⲩϩⲱⲃ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ.</td>
                    <td class="arabic">اسمعوا التفسير، أن صبياً ولدته مريم، وبتوليتها مختومة، بأمر معجز.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">We magnify you with Gabriel/ the angel saying / Hail to you O virgin / Mary, daughter of Joachim.</td>
                    <td class="coptic">Ⲧⲉⲛⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ⲙ̀ⲙⲟ: ⲛⲉⲙ Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁ̀ⲕⲓⲙ.</td>
                    <td class="arabic">نغبطِكِ مع غبريال، الملاك قائلين، السلام لك أيتها العذراء، مريم ابنة يواقيم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">The Son of God, came to us / with compassion and shined His face / upon us to save us / according to His great mercy.</td>
                    <td class="coptic">Ⲩ̀ⲓⲟⲥ Ⲑⲉⲟ̀ⲥ ⲁϥⲓ̀ ϣⲁⲣⲟⲛ: ⲟⲩⲟϩ ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲁϥⲟⲩⲱⲛϩ ⲙ̀ⲡⲉϥϩⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲟⲩⲟϩ ⲉϥⲉ̀ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
                    <td class="arabic">ابن الله قد آتي إلينا، متحنناً وأشرق، بوجهه علينا ليرحمنا، كعظيم رحمته.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">O You who sits in heaven / remember us with Your mercy / forgive us our sins / which we have committed.</td>
                    <td class="coptic">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ϧⲉⲛ ⲡⲉⲕⲛⲁⲓ ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀: ⲟⲩⲟϩ ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ: ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ⲓⲥϫⲉⲛ ϩⲏ.</td>
                    <td class="arabic">أيها الجالس في السموات، برحمتك أذكرنا، واغفر لنا خطايانا، التي ارتكبناها .</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Also, hail to Bethlehem / the spiritual house / town of King David / who was born in Bethlehem.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ Ⲃⲏⲑⲗⲉⲉⲙ ⲇⲉ ⲟⲛ: ⲡⲓ ⲏⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ⲡⲓϯⲙⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">السلام لبيت لحم أيضاً، البيت الروحاني، قرية الملك داود، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O Savior of the whole world / and all that is therein / for Your great birth in it / in nine months.</td>
                    <td class="coptic">Ⲯⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲛⲉⲙ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲉ ⲛ̀ϧⲏⲧϥ: ⲉⲑⲃⲉ ⲡⲓⲛⲓϣϯ ⲙ̀ⲙⲓⲥⲓ ⲛ̀ϧⲏⲧϥ: ϧⲉⲛ ⲡⲓⲙⲁϩ ⲯⲓⲧ ⲛ̀ⲁ̀ⲃⲟⲧ.</td>
                    <td class="arabic">يا مخلص العالم كله، وكل ما فيه، من أجل ميلادك العظيم فيه، في تسعة أشهر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">All glory and praise / befits truthfully / Your heavenly name / our Savior Jesus Christ.</td>
                    <td class="coptic">Ⲱ̀ⲟⲩ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲟⲩϫⲓⲛϩⲱⲥ: ⲥⲉ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲁ̀ⲗⲏⲑⲱⲥ: ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲛ̀ⲁ̀ⲟⲩⲣⲁⲛⲟⲥ: ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">كل مجد وتسبيح، يليق حقاً، باسمك السمائي، يا مخلصنا يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="north">
                    <td class="english">At the completion of nine months / the Beloved was born / according to King David's saying / in the psalms.</td>
                    <td class="coptic">Ϣⲱⲣⲡ ⲛ̀ⲁ̀ⲃⲟⲧ ⲙ̀ⲙⲁϩ ⲯⲓⲧ: ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲓⲙⲉⲛⲣⲓⲧ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ: ϧⲉⲛ ⲡⲓⲯⲁⲗⲧⲏⲣⲓⲟⲛ.</td>
                    <td class="arabic">عند تمام تسعة أشهر، ولد الحبيب، كقول الملك داود، في المزمور.</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="south">
                    <td class="english">Blessed is your fruit / O holy virgin / Mary, mother of the Logos / Queen of all women.</td>
                    <td class="coptic">Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲡⲉⲕⲁⲣⲡⲟⲥ: ⲱ̀ ϯⲡⲁⲛⲁ̀ⲅⲓⲁ̀ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲗⲟⲅⲟⲥ: ϯⲟⲩⲣⲱ ⲛ̀ⲛⲓϩⲓⲟ̀ⲙⲓ ⲧⲏⲣⲟⲩ.</td>
                    <td class="arabic">مبارك هو ثمركِ، أيتها العذراء القديسة، مريم أم الكلمة، ملكة جميع النساء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="south">
                    <td class="english">In the name of the One born / the ranks on high praise / the exalted name / and glorify in the heights.</td>
                    <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀ⲡⲓϫⲓⲛⲙⲓⲥⲓ: ⲉ̀ⲣⲉ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ: ⲉⲩϩⲱⲥ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀ⲫⲏⲉⲧϭⲟⲥⲓ: ⲉⲩϯⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ.</td>
                    <td class="arabic">باسم المولود، تسبح المراتب العلوية، الاسم المرتفع، ويمجدون في العلاء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_28" class="north">
                    <td class="english">Praise and glorify Him / greatly exalt Him / for there is no God but Him / in heaven and upon earth.</td>
                    <td class="coptic">Ϩⲱⲥ ⲉ̀ⲣⲟϥ ⲙⲁⲱ̀ⲟⲩ ⲛⲁϥ: ⲁ̀ⲣⲓϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϫⲉ ⲙ̀ⲙⲟⲛ ⲕⲉ ⲛⲟⲩϯ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟϥ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
                    <td class="arabic">سبحوه ومجدوه، وزيدوه رفعة، لأنه ليس إله غيره، في السماء أو على الأرض.</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="north">
                    <td class="english">For He is our God in truth / the Logos of the good Father / and the Spirit the Paraclete / the One Trinity.</td>
                    <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫϯ ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ⲡⲓⲡ̅ⲛ̅ⲁ̅ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ: ϯⲧ̀ⲣⲓⲁⲥ ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ.</td>
                    <td class="arabic">لأنه هو إلهنا بالحقيقة، كلمة الله الصالح، والروح القدس، المعزى المساوى.</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="south">
                    <td class="english">Lead us to the refuge / You are the One God / You are the faithful pure One / You alone are the exalted.</td>
                    <td class="coptic">Ϭⲓⲙⲱⲓⲧ ϧⲁϫⲱⲛ ⲱ̀ ⲡⲓⲙⲁⲛ̀ⲫⲱⲧ: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲑ̀ⲙⲏⲓ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛ̀ⲑⲟⲕ ⲙ̀ⲙⲁⲩⲁⲧⲕ ⲉⲧϭⲟⲥⲓ.</td>
                    <td class="arabic">أهدنا إلى الملجأ، أنت هو الإله الواحد، أنت هو البار المؤتمن، أنت وحدك العلي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_31" class="south">
                    <td class="english">I ask Your goodness / to have mercy on my weakness / our Savior, Jesus Christ / who was born in Bethlehem.</td>
                    <td class="coptic">Ϯϯϩⲟ ⲉ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲁ̀ⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲧⲁⲙⲉⲧⲁ̀ⲗⲁⲭⲓⲥⲧⲟⲥ: ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أسأل صلاحك، أن ترحم حقارتي، يا مخلصنا يسوع المسيح، الذي ولد في بيت لحم.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const saturdayPsalis = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Psali Watos For Saturday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Psali Watos For Saturday
                <span class="coptic-caption">Ⲁⲙⲱⲓⲛⲓ ⲱ̀ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم السبت في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Come O you Christians, let us praise the Lord of powers, Jesus Christ the Creator, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲱ̀ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀Ⲫϯ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲆⲩⲙⲓⲟⲣⲅⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">تعالوا أيها المسيحيون، لنسبح إله القوات، يسوع المسيح الخالق، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Help us O good One, the infinite and immeasurable One, the Son of God in truth, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ ⲱ̀ ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ: ⲡⲓⲀ̀ⲭⲱⲣⲓⲧⲟⲥ ⲛ̀ⲁ̀ⲙⲉⲧⲣⲓⲧⲟⲥ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أعنا أيها الصالح، الغير المحوي والغير المفحوص، ابن الله بالحقيقة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">For You are our salvation, O Lamb of God, we praise Your glorious divinity, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲉⲛⲣⲉϥⲥⲱϯ: ⲱ̀ ⲡⲓϨⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲡ̀ⲱ̀ⲟ̀ⲩ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲑⲛⲟⲩϯ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">لأنك أنت هو خلاصنا، يا حمل الله، نسبح مجد لاهوتك، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">David the king testified, in his prophecy and spoke, about Christ the King of heaven, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲇⲁⲩⲓⲇ ⲡ̀ⲟ̀ⲩⲣⲟ ⲁϥⲉ̀ⲣⲙⲉⲑⲣⲉ: ϧⲉⲛ ⲧⲉϥⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">شهد داود الملك، في نبوته وقال، من أجل المسيح ملك السماء، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">For through Mary the Virgin, we know our Lord Jesus Christ, who the angels praise, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲉⲑⲃⲉ Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲁⲛⲥⲟⲩⲉ̀ⲛ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲟⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ⲛ̀ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">من أجل مريم العذراء، عرفنا ربنا يسوع المسيح، الذي تسبحه الملائكة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Many are Your compassions, and mercies O merciful One, our Savior the long-suffering, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲍⲉⲟ̀ϣ ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ: ⲛⲉⲙ ⲡⲉⲕⲛⲁⲓ ⲱ̀ ⲡⲓⲚⲁⲏ̀ⲧ: ⲡⲉⲛⲤⲱⲧⲏⲣ ⲡⲓⲣⲉϥⲱ̀ⲟ̀ⲩⲛ̀ϩⲏⲧ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كثيرة هي رأفاتك، ومراحمك أيها الرحوم، مخلصنا طويل الأناة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">The righteous Isaiah said, "There the Virgin girl will give birth, to the Savior of the world, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲑ̀ⲙⲏⲓ ⲁϥϫⲱⲥ: ϩⲏⲡⲡⲉ ⲓⲥ ⲟⲩⲁ̀ⲗⲟⲩ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲡ̀Ⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أشعياء البار قال، هوذا العذراء الفتاة، تلد مخلص العالم، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">To You is the power unto the end, and glory and might, O Eternal Word, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ: ⲛⲉⲙ ⲡⲓⲱ̀ⲟ̀ⲩ ⲛⲉⲙ ϯⲉ̀ⲝⲟⲩⲥⲓⲁ: ⲱ̀ ⲡⲓⲖⲟⲅⲟⲥ ⲛ̀Ⲁ̀ⲓⲇⲓⲁ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">لك القوة إلى الانقضاء، والمجد والسلطان، أيها الكلمة الذاتي، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">The righteous and the just, will return to Paradise, because of the birth of Jesus Christ, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲓⲥ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲁⲩⲧⲁⲥⲑⲟ ⲉ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ: ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">ألا أن الإبرار والصديقين، يرجعون إلى الفردوس، من أجل ميلاد يسوع المسيح، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The Lord has shone upon us, and we saw His glory, in the bosom of Mary the queen, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲕⲩⲣⲓⲟⲥ ⲁϥϣⲁⲓ ⲛⲁⲛ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲟⲩⲟϩ ⲁⲛⲛⲁⲩ ⲉ̀ⲡⲉϥⲱ̀ⲟ̀ⲩ: ϧⲉⲛ ⲕⲉⲛϥ ⲙ̀Ⲙⲁⲣⲓⲁ ϯⲟⲩⲣⲱ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أشرق الرب علينا، ورأينا مجده، في حضن مريم الملكة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Also the kings of the Magi, presented offerings, and worshiped Christ, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ⲛⲓⲟ̀ⲩⲣⲱⲟ̀ⲩ ⲛ̀ϩⲁⲛⲙⲁⲅⲟⲥ: ⲁⲩⲓ̀ⲛⲓ ⲛ̀ϩⲁⲛⲇⲱⲣⲟⲛ ⲕⲁⲗⲱⲥ: ⲟⲩⲟϩ ⲁⲩⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">وأيضاً ملوك المجوس حسناً، قدموا قرابين، وسجدوا للمسيح، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Let us praise God in the highest, and peace on earth, and good will towards men, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲫϯ ϧⲉⲛ ⲛⲏⲉ̀ⲧϭⲟⲥⲓ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">فلنسبح الله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">The angel of blessing announced, and spoke to the shepherds, about the birth of, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟ̀ⲩ ⲁⲩⲥⲁϫⲓ ⲛⲉⲙⲱⲟ̀ⲩ: ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲙⲟⲩ: ⲁϥϩⲓⲱⲓϣ ⲉⲑⲃⲉ ⲡⲓϫ̀ⲫⲟ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">الرعاة تكلم معهم، ملاك البركة وبشهم، من اجل ميلاد، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">You are blessed O Christ our King, the good Lover of mankind, the Son of Mary the Virgin, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲝ̀ⲥⲙⲁⲣⲱⲟ̀ⲩⲧ ⲱ̀ ⲡⲉⲛⲚⲏⲃ Ⲡⲭ̅ⲥ̅: ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲙⲁⲣⲓⲁ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">تباركت يا ملكنا المسيح، محب البشر الصالح، ابن مريم العذراء، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Great is the honor of this day, because of the birth of the King of glory, from Mary the queen, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡ̀ⲧⲁⲓⲟ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟ̀ⲩ: ⲡⲓϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟ̀ⲩ: ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲟⲩⲣⲱ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">عظيمة هي كرامة هذا اليوم، لأنه قد ولد ملك المجد، من مريم الملكة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">The One from the Trinity, Mary gave birth to Him, He is our God the Messiah, who was born in Bethlehem.</td>
                    <td class="coptic">ⲠⲓⲞ̀ⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲦ̀ⲣⲓⲁⲥ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ Ⲙⲁⲣⲓⲁⲙ: ⲫⲁⲓ ⲡⲉ ⲡⲉⲛⲚⲟⲩϯ Ⲙⲁⲥⲓⲁⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">الواحد من الثالوث، ولدته مريم، هذا هو إلهنا الماسيا، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Rejoice O human race, for Christ has saved us of our sins, and from the bitter bondage, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲣⲱⲙⲓ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲁϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ: ⲉ̀ⲃⲟⲗϩⲁ ϯⲙⲉⲧⲃⲱⲕ ⲉⲥⲉⲛϣⲁϣⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">أفرح يا جنس البشر، لأن المسيح خلصنا من خطايانا، ومن العبودية المرة، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Hear us O Christ our God, and grant us mercy and salvation, before Your fearful throne, O You who was born in Bethlehem.</td>
                    <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲟⲩⲥⲱϯ: ϧⲉⲛ ⲡⲉⲕⲃⲏⲙⲁ ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">اسمعنا أيها المسيح إلهنا، وأعطنا رحمة وخلاصاً، في منبرك المخوف، أيها الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">We praise Him with the Cherubim, and bless Him with the Seraphim, everyday in Jerusalem, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲛⲉⲙ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲛⲉⲙ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ⲙ̀ⲙⲏⲓⲛⲓ ϧⲉⲛ ⲧ̀ⲡⲟⲗⲓⲥ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">نسبحه مع الشاروبيم، ونباركه مع السارافيم، وكل يوم في مدينة أورشليم، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">O Son of God have compassion on us, and take away Your anger from us, O Christ the King of the ages, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲱ̀ⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ: ⲱ̀ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ⲱ̀ⲛ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يا ابن الله تحنن علينا، وارفع غضبك عنا، أيها المسيح ملك الدهور، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">O You who carries the sins of the world, save us from the hands of the tyrants, and from our tribulations O Son of God, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲫⲏⲉ̀ⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲧ̀ϫⲓϫ ⲙ̀ⲡⲓⲧⲩⲣⲁⲛⲛⲟⲥ: ⲛⲉⲙ ⲛⲉⲛϩⲟϫϩⲉϫ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يا حامل خطايا العالم، خلصنا من أيدي المضاد، ومن ضائقاتنا يا ابن الله، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to you O Virgin, and Zion the city of the Lord, and the place where they put the Creator, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲛⲉⲙ Ⲥⲓⲱⲛ ⲧ̀ⲡⲟⲗⲓⲥ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛⲉⲙ ⲡⲓⲙⲁ ⲉ̀ⲧⲁⲩⲭⲱ ⲙ̀ⲡⲓⲆⲩⲙⲓⲟⲣⲅⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">السلام لك أيتها العذراء، مع صهيون مدينة الرب، والموضع الذي وضعوا فيه الخالق، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">All the Orthodox souls, repose them with the just, O Lamb set them free, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲛ̀Ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟ̀ⲩ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲱ̀ ⲡⲓϨⲓⲏⲃ ⲛ̀ⲉ̀ⲗⲉⲩⲑⲉⲣⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">كل أنفس الأرثوذكسيين، نيحها مع الصديقين، أيها الحمل أعتقها، الذي ولد في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">O You who saved His people, save Your servant Nicodemus, and those who believe in Jesus Christ, who was born in Bethlehem.</td>
                    <td class="coptic">Ⲱ̀ ⲫⲏⲉ̀ⲧⲁϥⲥⲱϯ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ: ⲛⲟϩⲉⲙ ⲙ̀ⲡⲉⲕⲃⲱⲕ Ⲛⲓⲕⲟⲩⲇⲓⲙⲟⲥ: ⲛⲉⲙ ⲛⲓⲡⲓⲥⲧⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">يا من خلص شعبه، خلص عبدك نيقوديموس، والمؤمنين بيسوع المسيح، الذي ولد في بيت لحم.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Psali Watos For Saturday">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Psali Watos For Saturday
                <span class="coptic-caption">Ⲁⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ</span>
                <span class="arabic-caption">إبصاليه واطس ليوم السبت في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Come all to worship / Our Lord Jesus Christ / whom the Virgin bore / while her virginity is sealed.</td>
                    <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ: ⲙ̀ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
                    <td class="arabic">تعالوا جميعاً لنسجد، لربنا يسوع المسيح، الذي ولدته العذراء، مختومة بتوليتها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Today there is joy / in heaven and upon earth / for the Virgin gave birth to God / while her virginity is sealed.</td>
                    <td class="coptic">Ⲃⲟⲛ ⲟⲩⲣⲁϣⲓ ϣⲱⲡⲓ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϫⲉ ⲁ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ ⲙⲓⲥⲓ ⲙ̀Ⲫ̀ϯ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
                    <td class="arabic">كان اليوم فرح، في السماء وعلى الأرض، لأن العذراء ولدت الله، مختومة بتوليتها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">The Magi came / and worshipped in Bethlehem / the One born of the Virgin / while her virginity is sealed.</td>
                    <td class="coptic">Ⲅⲉ ⲅⲁⲣ ⲁⲩⲓ̀ ⲛ̀ϫⲉ ϩⲁⲛⲙⲁⲅⲟⲥ: ⲁⲩⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ϯ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
                    <td class="arabic">والمجوس أتوا، وسجدوا لله في بيت لحم، الذي وُلد من العذراء، مختومة بتوليتها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">The heavenly soldiers / gathered together / to praise God in Bethlehem / who was born of the Virgin.</td>
                    <td class="coptic">Ⲇⲓⲥ̀ⲧⲣⲁⲧⲓⲁ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲁⲩⲑⲱⲟⲩϯ ⲉ̀ϧⲟⲩⲛ ⲛⲉⲙ ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ: ⲉⲩϩⲱⲥ ⲉ̀Ⲫ̀ϯ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">العساكر السمائية، اجتمع بعضهم مع بعض، وفي بيت لحم سبحوا الله، الذي وُلد من العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Proclaiming and saying / Glory to God in the highest / peace on earth / good will towards man.</td>
                    <td class="coptic">Ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ϯ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ.</td>
                    <td class="arabic">صارخين قائلين، "المجد لله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة."</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The voice of the angels / speaking with the shepherds / saying: born to you today / the Savior in Bethlehem.</td>
                    <td class="coptic">Ⲍⲱⲧⲉⲙ ⲉ̀ⲡⲓϧ̀ⲣⲱⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲉ̀ⲧⲁⲩⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟⲩ: ⲛ̀ⲟⲩⲤⲱⲧⲏⲣ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">سمعوا صوت الملائكة، مع الرعاة يتكلمون قائلين، "وُلد لكم اليوم، مخلص في بيت لحم."</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">The Magi came / from the east to Jerusalem / asking where is He who has been born / King of the Jews?</td>
                    <td class="coptic">Ⲏⲡⲡⲉ ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲅⲟⲥ: ⲉ̀ⲃⲟⲗ ⲥⲁ ⲡⲉⲓⲉⲃⲧ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ϫⲉ ⲁϥⲑⲱⲛ ⲫⲏⲉ̀ⲧⲁⲩⲛⲁⲙⲁⲥϥ: ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ.</td>
                    <td class="arabic">ها قد أتى المجوس، من المشرق إلى أورشليم، سائلين "أين هو المولود، ملك اليهود.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">The splendor of His star / appeared in our region / as was written about Him / we came to worship Him.</td>
                    <td class="coptic">Ⲑ̀ⲙⲉⲧⲥⲁⲓⲉ̀ ⲛ̀ⲧⲉ ⲡⲉϥⲥⲓⲟⲩ: ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ϧⲉⲛ ⲧⲉⲛⲭⲱⲣⲁ: ⲉ̀ⲣⲉ ϩⲁⲛⲥ̀ϧⲁⲓ ⲥ̀ⲥ̀ϧⲏⲟⲩⲧ ⲉ̀ⲣⲟϥ: ⲁⲛⲓ̀ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">قد أشرق بهاء، نجمه في كورتنا، كما كُتب عنه، وأتينا لنسجد له."</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Hasten O people / to worship God the Logos / who was born of the Virgin / and saved our race.</td>
                    <td class="coptic">Ⲓⲱⲥ ⲧⲉⲛⲑⲏⲛⲟⲩ ⲱ̀ ⲛⲓⲗⲁⲟⲥ: ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ϯ ⲛ̀Ⲗⲟⲅⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
                    <td class="arabic">أسرعوا أيها الشعوب، لنسجد لله الكلمة، الذي وُلد من العذراء، وخلص جنسنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">As it was spoken / by Micah the prophet / out of you will come a Ruler / out of the city of Bethlehem.</td>
                    <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲙⲓⲭⲉⲟⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉϥⲉ̀ⲓ̀ ⲛ̀ϫⲉ ⲟⲩϨⲩⲅⲟⲩⲙⲉⲛⲟⲥ: ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ϯⲃⲁⲕⲓ.</td>
                    <td class="arabic">كما قال، ميخاوس النبي، "منكِ يخرج مدبر، من بيت لحم المدينة."</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">Also, the prophetic voices / were fulfilled / while prophecied / about the birth of Christ.</td>
                    <td class="coptic">Ⲗⲟⲓⲡⲟⲛ ϫⲉ ⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲛⲓⲥ̀ⲙⲏ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">وأيضاً قد كملت، الأصوات النبوية، التي تنبأت، من أجل ميلاد المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">Let us honor His Greatness / with the high ranks / and cry with joy saying / Glory to God in the highest.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ ⲛ̀ⲧⲉϥⲙⲉⲧⲛⲓϣϯ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ: ⲟⲩⲟϩ ⲛ̀ⲱϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ϯ.</td>
                    <td class="arabic">فلنمجد عظمته، مع المراتب العلوية، ونصرخ بتهليل قائلين، "المجد لله في الأعالي."</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">The Magi came to Him / diligently seeking Him / Saying Where is He who has been born / King of the Jews?</td>
                    <td class="coptic">Ⲛⲓⲙⲁⲅⲟⲥ ⲉ̀ⲧⲁⲩⲓ̀ ϣⲁⲣⲟϥ: ⲛⲁⲩϣⲓⲛⲓ ⲛ̀ϧⲏⲧϥ ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲇⲏ: ϫⲉ ⲁϥⲑⲱⲛ ⲫⲏⲉ̀ⲧⲁⲩⲛⲁⲙⲁⲥϥ: ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ.</td>
                    <td class="arabic">أتى المجوس إليه، وجدوا في البحث عنه، قائلين "أين هو المولود، ملك اليهود."</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">Truly in the same hour / when Herod heard / he was afraid and troubled / and all Jerusalem with Him.</td>
                    <td class="coptic">Ⲝⲁⲡⲓⲛⲁ ϧⲉⲛ ϯⲟⲩⲛⲟⲩ: ⲉ̀ⲧⲁϥⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ Ⲏ̀ⲣⲱⲇⲏⲥ: ⲁϥⲉⲣϩⲟϯ ⲟⲩⲟϩ ⲁϥϣ̀ⲑⲟⲣⲧⲉⲣ: ⲛⲉⲙ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲧⲏⲣⲥ ⲛⲉⲙⲁϥ.</td>
                    <td class="arabic">حقاً في الساعة، لما سمع هيرودس، خاف واضطربت، كل أورشليم معه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">Fear fell in the king's heart / and all with him / for the birth of our Savior / and King Jesus Christ.</td>
                    <td class="coptic">Ⲟⲩϩⲟϯ ⲁⲥⲓ̀ ⲉ̀ϫⲉⲛ ⲡ̀ⲟⲩⲣⲟ: ⲛⲉⲙ ⲛⲏⲧⲏⲣⲟⲩ ⲉⲑⲛⲉⲙⲁϥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲡⲉⲛⲞⲩⲣⲟ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
                    <td class="arabic">وقع رعب في قلب الملك، وجميع الذين معه، من أجل ميلاد مخلصنا، وملكنا يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">He secretly called the Magi / and sent them to Bethlehem saying / When you find the child / who was born in that place.</td>
                    <td class="coptic">Ⲡⲁⲓⲣⲏϯ ⲁϥⲙⲟⲩϯ ⲉ̀ⲛⲓⲙⲁⲅⲟⲥ ⲛ̀ⲭⲱⲡ: ⲁϥⲟⲩⲟⲣⲡⲟⲩ ⲉ̀Ⲃⲏⲑⲗⲉⲉⲙ: ϫⲉ ⲉ̀ⲣⲉⲧⲉⲛⲛⲁϫⲓⲙⲓ ⲙ̀ⲡⲓⲀ̀ⲗⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ ⲡⲓⲙⲁ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
                    <td class="arabic">حينئذ دعا المجوس سراً، وأرسلهم إلى بيت لحم، قائلاً "إن وجدتم الصبي، الذي وُلد في ذلك الموضع."</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">The mouth of the evangelist / Matthew the Apostle / witnessed of these words / about the birth of our Savior.</td>
                    <td class="coptic">Ⲣⲱϥ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲙⲁⲧⲑⲉⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲑⲟϥ ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲉ̀ⲛⲁⲓⲥⲁϫⲓ: ϧⲉⲛ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ.</td>
                    <td class="arabic">فشهد فم الإنجيلي، متى الرسول، بهذا الكلام، بميلاد مخلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Hear also the prophecy / of David the psalmist: / He shall live and be given / from the gold of Arabia.</td>
                    <td class="coptic">Ⲥⲱⲧⲉⲙ ϩⲱϥ ⲉ̀ϯⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ ⲉⲩⲉ̀ⲱⲛϧ ⲉⲩⲉ̀ϯ ⲛⲁϥ: ϧⲉⲛ ⲡⲓⲛⲟⲩⲃ ⲛ̀ⲧⲉ ϯⲀ̀ⲣⲁⲃⲓⲁ.</td>
                    <td class="arabic">إسمعوا أيضاً نبوة، داود المرتل، "يحيا ويُعطى، من ذهب العرب."</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="english">The prophecy of Isaiah / informs us about / the birth of our Savior / as he says.</td>
                    <td class="coptic">Ⲧⲓⲡ̀ⲣⲟⲫⲏⲧⲓⲁ ⲛ̀ⲧⲉ Ⲏ̀ⲥⲁⲏ̀ⲁⲥ: ϯⲛⲁⲧⲁⲙⲱⲧⲉⲛ ⲉ̀ⲣⲟⲥ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
                    <td class="arabic">تخبرنا نبوة أشعياء، من أجل ميلاد، مخلصنا هكذا، حيث يقول.</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="english">Behold the virgin / shall conceive and give birth to a Son / and shall call His name Immanuel / that means "God with us".</td>
                    <td class="coptic">Ⲩⲡⲡⲉ ⲓⲥ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲛⲁⲉⲣⲃⲟⲕⲓ ⲟⲩⲟϩ ⲛ̀ⲧⲉⲥⲙⲓⲥⲓ ⲛ̀ⲟⲩϢⲏⲣⲓ: ⲉⲩⲉ̀ⲙⲟⲩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ ϫⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲉ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲫ̀ϯ ⲛⲉⲙⲁⲛ.</td>
                    <td class="arabic">"ها هي العذراء، تحبل وتلد إبناً، ويُدعى إسمه عمانوئيل، الذي هو الله معنا."</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">This is the Lord of lords / King of kings / the Virgin gave birth to Him / in Bethlehem of Judea.</td>
                    <td class="coptic">Ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟ̅ⲥ̅ ⲛ̀ⲧⲉ ⲛⲓⲟ̅ⲥ̅: ⲟⲩⲟϩ ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀.</td>
                    <td class="arabic">هذا هو رب الأرباب، وملك الملوك، ولدته العذراء، في بيت لحم يهوذا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Hail to you, O Virgin / the cherubimic throne / which carried / the Ancient of days.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲡ̀ϩⲁⲣⲙⲁ ⲛ̀ⲭⲉⲣⲟⲩⲃⲓⲙⲩⲕⲟⲛ: ⲑⲏⲉ̀ⲧⲁϥⲁ̀ⲗⲏⲓ ⲉ̀ⲣⲟⲥ: ⲛ̀ϫⲉ ⲡⲓⲀ̀ⲡⲁⲥ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ϩⲟⲟⲩ.</td>
                    <td class="arabic">السلام لكِ أيتها العذراء، المركبة الشاروبيمية، التي حملت، عتيق الأيام.</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Your virginity is great / and very radiant / for the One incarnate of you / saved our souls.</td>
                    <td class="coptic">Ⲯⲁⲗⲓⲛ ⲧⲉ ⲧⲁⲓⲡⲁⲣⲑⲉⲛⲓⲁ: ⲁⲥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲙⲁϣⲱ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲁϥⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ.</td>
                    <td class="arabic">عظيمة هي بتوليتك، ومضيئة جداً، لأن الذي تجسد منكِ، خلَّص نفوسنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">Blessed are you, in truth / O Mother of the True Light / You are the blessed root / which blossomed and gave fruit.</td>
                    <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁϯ ⲛ̀ⲑⲟ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲱ̀ Ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ: ⲛ̀ⲑⲟ ⲡⲉ ϯⲛⲟⲩⲛⲓ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲑⲏⲉ̀ⲧⲁⲥ ⲣⲏⲧⲟⲥ ϯⲕⲁⲣⲡⲟⲥ.</td>
                    <td class="arabic">طوباكِ أنت بالحقيقة، يا أم النور الحقيقي، أنت الأصل المبارك، الذي أزهر وأثمر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">We praise you for ever / for you gave birth to the King / who saved our race / from our evil enemies.</td>
                    <td class="coptic">Ϣⲁ ⲉ̀ⲛⲉϩ ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟ: ϫⲉ ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ: ⲟⲩⲟϩ ⲁϥⲧⲟⲩϫⲟ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲛϫⲁϫⲓ ⲉⲧϩⲱⲟⲩ.</td>
                    <td class="arabic">نسبحِك إلى الأبد، لأنكِ ولدتِ الملك، الذي أنقذ جنسنا، من أعدائنا الأشرار.</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="north">
                    <td class="english">Blessed is your Fruit / O true vine / Which was incarnate of you / He is the True God.</td>
                    <td class="coptic">Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲡⲉⲔⲁⲣⲡⲟⲥ: ⲱ̀ ϯⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ ⲛ̀ⲧⲁ ⲫ̀ⲙⲏⲓ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: Ⲛ̀ⲑⲟϥ ⲅⲁⲣ ⲡⲉ Ⲫ̀ϯ ⲙ̀ⲙⲏⲓ.</td>
                    <td class="arabic">مباركة هي ثمرتِك، أيتها الكرمة الحقيقية، الذي تجسد منكِ، لأنه هو الله بالحقيقة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="south">
                    <td class="english">With praise, we praise you / with the high ranks / we celebrate with joy / for Immanuel is born to us.</td>
                    <td class="coptic">Ϧⲉⲛ ⲟⲩⲥ̀ⲙⲟⲩ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ: ⲛ̀ⲧⲉⲛⲉⲣϣⲁⲓ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϫⲉ ⲁϥⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">بالتسبيح نسبحك، مع الصفوف العلوية، لنعيد بتهليل، لأنه وُلد لنا عمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="south">
                    <td class="english">Mercy from the Son / for who keeps His commandments / may He make us worthy / for the forgiveness of our sins.</td>
                    <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲉ ⲡ̀Ϣⲏⲣⲓ ⲉⲣⲟⲩⲛⲁⲓ: ⲛⲉⲙ ⲛⲏⲉⲧⲁ̀ⲣⲉϩ ⲉ̀ⲛⲉϥⲉⲛⲧⲟⲗⲏ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
                    <td class="arabic">رحمة من الإبن، بالذين يحفظون وصاياه، وليجعلنا مستحقين، غفران خطايانا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_28" class="north">
                    <td class="english">O Christ, our Master / complete Your love to mankind / guide us and make us steadfast / In Your upright faith.</td>
                    <td class="coptic">Ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲱ̀ ⲡⲉⲛⲚⲏⲃ Ⲡⲭ̅ⲥ̅: ⲛ̀ⲧⲉⲕⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ ⲛⲉⲙⲁⲛ: ⲡⲓⲙⲱⲓⲧ ⲛⲁⲛ ⲟⲩⲟϩ ⲙⲁⲧⲁϫⲣⲟⲛ: ϧⲉⲛ ⲡⲉⲕⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ.</td>
                    <td class="arabic">يا ملكنا المسيح، أكمل محبتك للبشر، معناً وإهدنا وثبتنا، في أمانتك المستقيمة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="north">
                    <td class="english">Accept our prayers to You / we the unworthy / through the supplications of our lady / Mary the Theotokos.</td>
                    <td class="coptic">Ϭⲓ ⲛⲁⲕ ⲛ̀ⲛⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲟⲧⲉⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲁⲧⲉⲙⲡ̀ϣⲁ: ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀ⲧⲉⲛⲟ̅ⲥ̅ ⲧⲏⲣⲉⲛ: Ⲙⲁⲣⲓⲁ ϯⲐⲉⲟ̀ⲧⲟⲕⲟⲥ.</td>
                    <td class="arabic">أقبل إليك طلباتنا، نحن الغير المستحقين، بحق طلبات سيدتنا كلنا، مريم والدة الإله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="south">
                    <td class="english">I ask, through the prayers of / my fathers brethren and loved ones / forgive me, I the sinner / for I cannot speak.</td>
                    <td class="coptic">Ϯϯϩⲟ ϯⲧⲱⲃϩ ⲙ̀ⲙⲱⲧⲉⲛ: ⲛⲁⲓⲟϯ ⲛⲉⲙ ⲛⲁⲥ̀ⲛⲏⲟⲩ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ: ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ϧⲁ ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ϫⲉ ⲁⲓⲧⲱⲙⲧ ϧⲉⲛ ⲡⲓⲡⲉⲗⲁⲅⲟⲥ.</td>
                    <td class="arabic">بحق سؤال وطلبات، آبائي وإخوتي وأحبائي، أغفر لي أنا الخاطئ، لأني بهت ولم أتكلم.</td>
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


function getSeasonalDailyPsali(day, season, tableNumber) {
    let html = "";

    // Define the objects for each day
    const days = {
        sunday: sundayPsalis,
        monday: mondayPsalis,
        tuesday: tuesdayPsalis,
        wednesday: wednesdayPsalis,
        thursday: thursdayPsalis,
        friday: fridayPsalis,
        saturday: saturdayPsalis
    };

    // Normalize the day input to lowercase to ensure matching keys
    const dayLower = day.toLowerCase();
    // Normalize the season to the required format
    const normalizedSeason = normalizeSeason(season);

    // Check if the day exists in the days object
    if (days[dayLower]) {
        const dayPsalis = days[dayLower];

        // Check if the season exists as a function in the selected day object
        if (dayPsalis[normalizedSeason]) {
            const psaliFunction = dayPsalis[normalizedSeason];
            html = psaliFunction(tableNumber); // Call the function to generate HTML
        } else {
            console.error(`Season '${season}' not found for day '${day}'.`);
        }
    } else {
        console.error(`Day '${day}' not found.`);
    }

    return html;
}


export { getSeasonalDailyPsali };