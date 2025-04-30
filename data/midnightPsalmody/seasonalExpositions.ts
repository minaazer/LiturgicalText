const firstCanticleExposition = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Adam Exposition After First Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Adam Exposition After First Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الأول في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Come today, all you people, of the earth, and see this mystery.</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲙ̀ⲫⲟⲟⲩ: ⲱ ⲛⲓⲗⲁⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ̀ⲁⲣⲓⲑⲉⲱⲣⲓⲛ: ⲙ̀ⲡⲁⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ.</td>
                    <td class="arabic">تعالوا كلكم اليوم يا شعوب الأرض وانظروا هذا السر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">God was born for us from the Virgin without a the seed of man that He may save us.</td>
                    <td class="coptic">Ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲫⲛⲟⲩϯ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                    <td class="arabic">لأنه قد وُلد لنا الله من العذراء بدون زرع بشر لكي يخلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">To deliver the world from its sins. We saw His star and worshipped Him.</td>
                    <td class="coptic">Ⲉⲥⲱϯ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲟⲩⲛⲟⲃⲓ: ⲉⲛⲛⲁⲩ ⲉ̀ⲡⲉϥⲥⲓⲟⲩ: ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">لينقذ العالم من خطاياه. رأينا نجمه وسجدنا له.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">The Magi came from the East to Jerusalem diligently seeking,</td>
                    <td class="coptic">Ⲁⲩⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲅⲟⲥ: ⲉ̀ⲃⲟⲗ ⲥⲁⲡⲉⲓⲉⲃⲧ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲕⲱϯ ϧⲉⲛ ⲟⲩ̀ⲥⲡⲟⲩⲇⲏ.</td>
                    <td class="arabic">أتى المجوس من المشرق إلى أورشليم يسألون بإجتهاد:</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">“Where is the newborn King of the Jews? We have seen His star in the East and came to worship Him.”</td>
                    <td class="coptic">Ϫⲉ ⲁϥⲑⲱⲛ ⲫⲏⲉⲧⲁⲩⲙⲁⲥϥ: ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ Ⲛⲓⲓⲟⲩⲇⲁⲓ: ⲁⲛⲛⲁⲩ ⲉ̀ⲡⲉϥⲥⲓⲟⲩ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">'أين هو المولود ملك اليهود. رأينا نجمه وأتينا لنسجد له."</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Herod and all the Jews became worried because of the Birth of Christ, the King of kings.</td>
                    <td class="coptic">Ⲏⲣⲱⲇⲏⲥ ⲁϥϣ̀ⲑⲉⲣⲧⲉⲣ: ⲛⲉⲙ Ⲛⲓⲓⲟⲩⲇⲁⲓ ⲧⲏⲣⲟⲩ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲣⲱⲟⲩ.</td>
                    <td class="arabic">فقلق هيرودس وجميع اليهودء لأجل مولد المسيح» ملك الملوك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="north">
                    <td class="english">(He inquired) and was told, “In Bethlehem, the city of King David.” Come let us worship Him.</td>
                    <td class="coptic">Ⲁϥϣⲓⲛⲓ ⲁⲩϫⲟⲥ ⲛⲁϥ: ϫⲉ ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲉ̀ⲃⲁⲕⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ ⲇⲁⲩⲓⲇ: ⲁ̀ⲙⲱⲓⲛⲓ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">(فتحقق جيداً) وقيل له في بيت لحم مدينة الملك داود. تعالوا لنسجد له.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">He called the Magi to determine from them what time the star appeared.</td>
                    <td class="coptic">Ⲁϥⲙⲟⲩϯ ⲉ̀ⲛⲓⲙⲁⲅⲟⲥ: ⲉ̀ϧⲟⲧϧⲉⲧ ⲛ̀ⲧⲟⲧⲟⲩ: ⲛ̀ⲥⲁ ⲡ̀ⲥⲏⲟⲩ ⲙ̀ⲡⲓⲥⲓⲟⲩ: ⲉ̀ⲧⲁϥⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲱⲟⲩ.</td>
                    <td class="arabic">فدعا المجوس ليتأكد منهم عن الزمان الذي ظهر لهم فيه النجم؛</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">He sent them to Bethlehem, saying: “Go and search carefully.”</td>
                    <td class="coptic">Ⲁϥⲟⲩⲟⲣⲡⲟⲩ ⲉ̀Ⲃⲏⲑⲗⲉⲉⲙ: ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ: ⲙⲁϣⲉⲛⲱⲧⲉⲛ: ⲕⲱϯ ⲁⲕⲣⲓⲃⲱⲥ.</td>
                    <td class="arabic">وأرسلهم إلى بيت لحم قائلاً: 'أمضوا وابحثوا بإجتهاد.'</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">(Through the intercessions of the Virgin Theotokos, O Lord, forgive us our sins, amen. Lord have mercy.)</td>
                    <td class="arabic">(بشفاعة العذراء والدة الإله يا رب أغفر لنا خطايانا. آمين يا رب أرحم.)</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition After First Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition After First Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الأول في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">The virgin Mary / was with Joseph / in a foreign place / like strangers /</td>
                    <td class="coptic">Ⲙⲁⲣⲓⲁ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲛⲁⲩⲭⲏ: ϧⲉⲛ ⲡⲓⲙⲁⲛ̀ϫⲱⲓⲗⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛϣⲉⲙⲙⲱⲟⲩ.</td>
                    <td class="arabic">كانت مريم العذراء مع يوسف في موضع الملجأ مثل الغرباء</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">And she gave birth / to her first born / and laid him down / in the animals' manger.</td>
                    <td class="coptic">Ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲡⲉⲥϢⲏⲣⲓ: ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲓⲥⲓ ⲡⲉ: ⲁⲥϣ̀ⲧⲟϥ ϧⲉⲛ ⲟⲩⲟⲛϩϥ: ⲛ̀ⲧⲉ ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀.</td>
                    <td class="arabic">ولدت ابنها البكر وأضجعته في مذود البهائم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">The shepherds were awake at night watching their flock, when light from the heavens shone on them. They were enlightened with the light of God and marveled at its brightness and how it came upon them and they spoke to each other saying: This light that is shining upon us is a mystery and immediately appeared to them a great miracle; the angel of the Lord talked to them and told them that the Messiah is born for you today in Bethlehem; and this is a sign for you, you will find a babe wrapped in worn rags and laid in a manger. Rejoice and be exceedingly glad O shepherds for this great mystery that was revealed to you. So they arose and went to Bethlehem and found our Savior and worshiped Him. Let us praise with the angels saying "Glory to God in the highest, peace on earth and goodwill toward men" to Him be the glory forever, Amen, Alleluia.</td>
                    <td class="arabic">وكان رعاة ساهرين في الليل على قطيع الخراف: أشرق عليهم نور من السموات. وأضاء عليهم مجد الله فتعجب الرعاة من أجل النور العظيم الذي أشرف عليهم وتكلم بعضهم مع بعض وقالوا: ان في هذا النور الذي أشرف عليها لسراً. وظهرت أعجوبة عظيمة للرعاة في تلك الليلة. وتكلم معهم ملاك الرب أن قد ولد المسيح لكم اليوم في بيت لحم: وهذه علامة لكم أنكم تجدون طفلاً ملفوفاً في خرق بالية وموضوعاً في مذود. أفرحوا وأجزلوا يا أيها الرعاة على هذا السر الذي ظهر لكم: فقاموا ومضوا إلى بيت لحم فوجدوا مخلصنا وسجدوا له فلنسبحه مع الملائكة قائلين. المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة له المجد إلى الأبد آمين، الليلويا.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Adam Exposition After First Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Adam Exposition After First Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الأول في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">The word of God, came to John, the son of Zacharias, in the wilderness saying:</td>
                    <td class="coptic">Ⲟⲩⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡⲟ̅ⲥ̅: ⲁϥϣⲱⲡⲓ ϣⲁ Ⲓⲱⲁⲛⲛⲏⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲍⲁⲭⲁⲣⲓⲁⲥ: ⲉ̀ⲃⲟⲗϩⲓ ⲡ̀ϣⲁϥⲉ.</td>
                    <td class="arabic">وأن كلمة الرب صارت إلى يوحنا ابن زكريا في البرية قائلاً:</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">“Arise and go to, the Jordan, to baptize, with water of repentance;</td>
                    <td class="coptic">Ϫⲉ ⲧⲱⲛⲕ ⲙⲁϣⲉⲛⲁⲕ: ⲉ̀ϫⲉⲛ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ: ⲛ̀ⲧⲉⲕϯⲱⲙⲥ ⲙ̀ⲙⲁⲩ: ϧⲉⲛ ⲟ̀ⲩⲙⲱⲟ̀ⲩ ⲙ̀ⲙⲉⲧⲁⲛⲟⲓⲁ.</td>
                    <td class="arabic">قم أمض إلى الأردن لتعمد هناك بماء للتوبة،</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">And when you baptize there, confirm to the people that, ‘There comes One after me who is mightier than I,’ for the Lord is coming to be baptized in the Jordan and the uplifting of the sins of the world according to His great mercy.” In those days, the great John the Baptist came preaching of Christ in the wilderness of Judah saying, “Repent, for the kingdom of God has come upon you.” Tell me! Who are you, who dwells in the wilderness? You are the pure prophet of the High One. For you have appeared in this manner to preach to everyone, “There comes One after me who is mightier than I (Mark 1:7). I am the one who comes before Immanuel according to the saying of Isaiah the prophet, ‘Behold, I send My messenger before Your face, who will prepare Your way before You’ (Malachi 3:1). For this reason I teach the word of the Lord that you may grow fruitful in repentance.” Are you Elijah or the Prophet? Perhaps you are the Christ who is coming to the world for you have appeared in this manner to baptize the people for repentance in the Jordan River?! “I am not the Christ or Elijah or the Prophet as you think. I came to baptize with water and to call everyone for repentance. I am the voice of one crying in the wilderness: ‘Prepare the way of the Lord; Make His paths straight.’ No one accepted Him to test Him. “His winnowing fan is in His hand, and He will thoroughly clean out His threshing floor, and gather the wheat into His barn’ (Luke 3:17).” He proclaims in a great voice; I mean forerunner, the faithful announcer. He said: “Prepare the way of the Lord; Make His paths straight for He have come to save the lost sheep for behold, the Lamb of God who takes away the sins of the world. He revives us all with His Holy Spirit. Come to the Jordan to see me baptize; I am not worthy to baptize You O Immanuel for You are my Lord and I was not given the authority to baptize You. I am not worthy for I am Your servant. The sea trembled and fled and the Jordan feared and turned away backwards. How can I not fear and the Lord of everyone is approaching to me?! I am in need of the baptism of Your divine hands; let us ask God the Lover of Mankind that we may become worthy of His holy baptism through the intercession of Saint John the Baptist, O Lord forgive us our sins. Amen.</td>
                    <td class="arabic">وإذا عمدت الجموع فأشهد لهم أن الذي يأتي بعدي هو أقوى منى، لأن الرب آتي يعتمد من الأردن ورفع خطايا العالم كعظيم رحمته. وفي تلك الأيام جاء يوحنا العظيم المعمدان يبشر بالمسيح في برية يهوذا ويصرخ قائلاً، توبوا فقد قربت منكم ملكوت السموات. من أنت عرفني يا من في البرية. النبي الطاهر الذي للعلي. لأنك ظهرت هكذا تبشر كل أحد. أن الذي ياتي بعدي هو أقوى منى. انا هو الآتي قبل عمانوئيل كقول أشعياء عظيم الأنبياء ها أنا ذا مرسل ملاكي قدامك ليهيئ طريقك. من أجل هذا أنا أعلم بكلمة الرب أن تصنعوا ثمرة تنمو للتوبة. أنت هو إيليا أو النبي. لعلك أنت هو المسيح الاتي إلى العالم لأنك ظهرت هكذا على النهر تعمد الجموع للتوبة، لست أنا المسيح ولا إيليا ولا النبي كما تفكرون. لكنني أنا أتيت لأعمد بالماء. أدعوا كل واحد للتوبة. أنا هو الصوت الصارخ في البرية. أعدوا طريق الرب وسهلوا سبله. ولا يقبل غليه أحد لكي يجربه. لأن رفشه بيده ينقي جرته ويجمع قمحه في مخزنه. يصرخ جيداً بصوت عظيم. أعني السابق المنادي الصادق. قال أعدوا طريق الرب وسهلوا سبله لأنه أقبل يخلص الخراف الضالة. ها هوذا حمل الله الذي يحمل خطايا العالم. هو يحيينا كلنا بروحه القدوس. اخرجوا إلى الأردن لكي تنظروني أعمد. لست أنا مستحقاً أن أعمدك يا عمانوئيل لأنك أنت ربي من أين لي أنا أن أعمدك ولست مستحقاً لأني أنا عبدك البحر رأي فهرب. وخاف الأردن فرجع إلى الخلف. كيف لا أخاف أنا ورب الكل مقبل إلى. أنا هو المحتاج أن تعمدني بيدك الإلهية فلنسأل الله محب البشر. فلنستحق عماده المقدس بشفاعة يوحنا المعمدان يا رب أغفر لنا خطايانا آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};
const secondCanticleExposition = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Adam Exposition After Second Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Adam Exposition After Second Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الثاني في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Immanuel was born from the Virgin according to the prophecy of Isaiah.</td>
                    <td class="coptic">Ⲁⲩⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲕⲁⲧⲁ ϯⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ⲛ̀Ⲏ̀ⲥⲁⲏ̀ⲁⲥ.</td>
                    <td class="arabic">ولد عمانوئيل من العذراء كنبوة أشعياء:</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Herod spoke to the Magi craftily, “When you have found the Child, bring back word to me, that I may worship Him.”</td>
                    <td class="coptic">Ⲁϥϫⲟⲥ ⲛ̀ϫⲉ Ⲏⲣⲱⲇⲏⲥ: ⲉ̀ⲛⲓⲙⲁⲅⲟⲥ ϧⲉⲛ ⲟⲩⲭ̀ⲣⲟϥ: ⲉ̀ⲣⲉⲧⲉⲛϫⲉⲙ ⲡⲓⲁ̀ⲗⲟⲩ: ⲙⲁⲧⲁⲙⲟⲓ ⲛ̀ⲧⲁⲟ̀ⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">فقال هيرودس للمجوس بمكر: إن وجدتم الطفل فأعلموني لأسجد له:</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">The star that shone from the East to the Magi, guided them to the Child. When they saw Him, the knelt before Him worshipping.</td>
                    <td class="arabic">وإذ النجم الذي ظهر في المشرف للمجوس مرشداً لهم حتى أصعدهم إلى حيث الطفل: وإذ رأوه خروا له ساجدين:</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">The Magi came to Bethlehem and saw the Child with Mary His Mother.</td>
                    <td class="arabic">أتي المجوس إلى بيت لحم فأبصروا الطفل مع مريم أمه :</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">They opened their treasures and offered Him gifts: gold, frankincense and myrrh.</td>
                    <td class="arabic">ففتحوا أوعيتهم وقدموا له قرابين ذهباً ولباناً ومراً</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Then, being warned in a dream not to return to Herod, they took another road to their country while believing in Christ, becoming preachers of the Gospel in that country,</td>
                    <td class="arabic">وأوحي إليهم في الحلم أن لا يرجعوا إلى هيرودس فذهبوا من طريق أخري إلى كورتهم مؤمنين بالمسيح وأصبحوا مبشرين بالإنجيل في جميع الكورة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="north">
                    <td class="english">Telling everyone: “We saw the Christ who was born in Bethlehem, the city of David.</td>
                    <td class="arabic">يعلمون كل الناس أن قد أبصرنا المسيح ولد في بيت لحم مدينة الملك داود.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">Therefore, we testify that He is the true Son of God who came to the world to save us.” Glory to Him forever and ever.</td>
                    <td class="arabic">من أحل هذا نشهد أن هذا هو ابن الله الحقيقي الذي آتي إلى العالم لكي يخلصنا له المجد دائماً إلى الأبد.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition After Second Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition After Second Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الثاني في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Behold the fruition / of all prophecies / heaven and earth / have become one today.</td>
                    <td class="coptic">Ⲡ̀ⲣⲟⲫⲏⲧⲓⲁ ⲛⲓⲃⲉⲛ ϩⲏⲡⲡⲉ ⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ: ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲥⲉⲟⲩⲛⲟϥ ⲙ̀ⲫⲟⲟⲩ:</td>
                    <td class="arabic">ها هي جميع النبوات قد كملت السماء والأرض تبتهجان اليوم</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">For God the Logos / was born unto us / our Savior Jesus Christ / let us worship Him.</td>
                    <td class="coptic">Ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀Ⲫϯ ⲡⲓⲖⲟⲅⲟⲥ: ⲡⲉⲛⲤⲱⲧⲏⲣ Ⲓⲏ̅ⲥ̅: ⲁ̀ⲙⲱⲓⲛⲓ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
                    <td class="arabic">لأنه قد ولد لنا الله الكلمة مخلصنا يسوع. تعالوا نسجد له.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">A star shone upon the shepherds. God who was born of a virgin to save mankind from their sins. We saw the star, let us worship Him and praise Him with the angels saying "Glory to God in the highest, peace on earth and good will toward men" for He came and saved us, we His people. The magi traveled the world and all nations saying "we have seen the born Messiah in Bethlehem the city of king David with all joy, happiness and jubilation." The place of which the prophets prophesied, that Christ the creator of all would be born in it. Therefore we the believers believe that He is truly our God, who came down from the highest heaven and appeared in the virgin's womb. He was incarnate of the Holy Spirit and of the pure virgin maiden Mary, in a purely virginal birth. The One who provides for all with His might and His lordship. Let us worship Him with the heavenly hosts saying" Glory to God in the highest, peace on earth and goodwill toward men." We are His people for He has come and saved us. Glory be to Him forever and for all ages, amen.</td>
                    <td class="arabic">أشرق كوكب على المجوس. الله هو المولود من العذراء لينجي العالمين من خطاياهم رأينا نجمة تعالوا فلنسجد له ونسبحه مع الملائكة قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة: لأنه أتي وخلصنا نحن شعبه وصار المجوس منذرين في العالم. وفي سائر الكور قائلين: بعظم وبهجة وفرح وسرور قد رأينا المسيح المولود في بيت لحم مدينة الملك داود. الموضع الذي تنبأت من أجله الأنبياء والحكماء انه يولد فيه المسيح خالق البرايا من أجل هذا نؤمن نحن المؤمنين إنه إلهنا بالحقيقة نزل من علو السماء وأشرق في أحشاء العذراء. وتجسد من الروح القدس. ومن الفتاة البتول الطاهرة مريم. ولد منها ميلاداً بتولياً. وهو الذي يعول الكل بقدرته وربوبيته. فلنسبحه مع الطغمات السمائية قائلين المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة . ونحن شعبه لأنه أتي وخلصنا له المجد دائماً أبدياً آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Adam Exposition After Second Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Adam Exposition After Second Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الثاني في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Come all from the corners of the earth, to walk in Spirit, to the land of Israel,</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲁⲩⲣⲏϫϥ: ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ: ⲛ̀ⲧⲉⲛϣⲉⲛⲁⲛ ϧⲉⲛ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ: ⲉ̀ⲡ̀ⲕⲁϩⲓ ⲙ̀ⲡⲒⲥⲣⲁⲏ̀ⲗ.</td>
                    <td class="arabic">تعالوا يا جميع أقطار الأرض. لنمضي بالروح إلى أرض إسرائيل،</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">To walk with Jesus, when He is departing to the Jordan, to be baptized, by John.</td>
                    <td class="coptic">Ⲛ̀ⲧⲉⲛⲙⲟϣⲓ ⲛⲉⲙ Ⲓⲏ̅ⲥ̅: ⲉϥⲛⲏⲟⲩ ⲉ̀ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ: ⲉⲑⲣⲉϥϭⲓ ⲙ̀ⲡⲓⲱⲙⲥ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ Ⲓⲱⲁⲛⲛⲏⲛ.</td>
                    <td class="arabic">لنمشي مع يسوع وهو مقبل إلى الأردن. ليعتمد من يوحنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">And hear the voice of the Father saying, “This is My beloved Son, in whom I am well pleased.” Take of the old man and put on the new man. Come to the Jordan to be granted purity through the holy baptism. For the Scripture informs us that without purity no one can see God. Let us be immersed in the holy water of the Jordan and He will purify us. David proclaims and prophesies about the Coming of Christ to the Jordan saying, “The voice of the Lord is over the waters; The God of glory thunders” (Psalm 29:3). When the Lord went to the Jordan from Nazareth to be baptized from him, the saying of the prophet was fulfilled, “Behold! My Servant and My Beloved in whom I am well pleased!” (Matthew 12:18). Zebulun, Naphtali, Galilee, and those who are in darkness and the shadow of death; a Light shone upon them who is Jesus Christ in the Jordan to be baptized by him, to whom the glory forever. Amen.</td>
                    <td class="arabic">ونسمع صوت الأب قائلاً هذا هو ابني الحبيب الذي به سررت. اخلعوا الإنسان العتيق والبسوا الإنسان الجديد. اخرجوا إلى الأردن لتناولا التطهير بالعماد المقدس. لأن الكتب تشهد لنا انه بغير الطهارة لا يعاين أحد الله. لنغطس في الماء المقدس الذي للأردن وهو يطهرنا. داود يصرخ ويتنبأ من أجل مجيء المسيح إلى الأردن قائلاً. صوت الرب على المياه. إله المجد أرعد. ولما جاء الرب من الناصرة إلى الأردن ليعتمد منه . حينئذ كمل قول النبي. ها هوذا فتاى وحبيبي الذي هويته. زبولون ونفتاليم والجليل والجلوس في الظلمة وظلال الموت . أشرق لهم النور الذي هو المسيح يسوع على الأردن ليعتمد منه له المجد دائماً أبدياً أمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};
const thirdCanticleExposition = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Adam Exposition After Third Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Adam Exposition After Third Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الثالث في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">When the shepherds came quickly to Bethlehem, the place the prophets said Christ will be born in,</td>
                    <td class="coptic">Ⲉⲧⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲇⲏ ⲉ̀Ⲃⲏⲑⲗⲉⲉⲙ: ⲡⲓⲙⲁ ⲉ̀ⲧⲁ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϫⲉ ⲁⲩⲛⲁⲙⲁⲥ Ⲡⲭ̅ⲥ̅ ⲛ̀ϧⲏⲧϥ.</td>
                    <td class="arabic">فلما أتي الرعاة مسرعين إلى بيت لحم. الذي قالت الأنبياء أن المسيح يولد فيه،</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">they found Mary, Joseph with the Child in a manger because there was no room for them in the inn.</td>
                    <td class="coptic">Ⲁⲩϫⲓⲙⲓ ⲙ̀Ⲙⲁⲣⲓⲁⲙ ⲛⲉⲙ Ⲓⲱⲥⲏⲫ: ⲛⲉⲙ ⲡⲓⲁ̀ⲗⲟⲩ ⲉⲩⲭⲏ ϧⲉⲛ ⲡⲓⲟ̀ⲩⲟ̀ⲛϩϥ: ϫⲉ ⲟⲩⲏⲓ ⲅⲁⲣ ⲙ̀ⲙⲟⲛ ⲧⲟⲩⲙⲁ ⲙ̀ⲙⲁⲩ ⲡⲉ: ϧⲉⲛ ⲡⲓⲙⲁ ⲛ̀ⲟ̀ⲩⲱ̀ⲛϩ.</td>
                    <td class="arabic">وجدوا مريم ويوسف ووجدوا الطفل مضجعاً في المذود، لأنه لم يكن لهما موضع حيث نزلا</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">They saw heavenly hosts, praising God with joy along with the angels saying, “Glory to God in the highest, peace on earth and goodwill towards men.” He has come and saved us.</td>
                    <td class="arabic">فرأي الرعاة جماعة من أجناد السماء يسبحون الله بتهليل مع الملائكة ويقولون (المجد لله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة) لأنه أتي وخلصنا،</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">Then the shepherds returned to their homes with great joy, praising and glorifying God for what they have seen.</td>
                    <td class="arabic">ورجع العراة إلى بيوتهم بفرح عظيم، يسبحون ويمجدون الله على كل ما أبصروا،</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">They testified to the people saying, “Christ was born in Bethlehem and we have seen Him, worshiped Him, and believed that He is our Savior.” Glory to Him forever and ever.</td>
                    <td class="arabic">وكانوا يشهدون للجموع قائلين ، أنه قد ولد المسيح في بيت لحم وقد أبصرنا وسجدنا له وآمنا به أنه هو المخلص، له المجد دائماً إلى الأبد.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition After Third Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition After Third Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الثالث في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">This is the day of Joy / on earth and in heaven / for unto us is born / the Lord from the virgin.</td>
                    <td class="coptic">Ⲟⲩⲉ̀ϩⲟⲟⲩ ⲛ̀ⲣⲁϣⲓ ⲡⲉ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲫϯ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">ها هو ذا يوم الفرح في السموات وعلى الأرض لأنه قد ولد لنا الإله من العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">The patriarchs rejoice / the prophets praise / the virgins are proud / and the martyrs glorify.</td>
                    <td class="coptic">Ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲑⲉⲗⲏⲗ: ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲣⲭⲱⲣⲉⲩⲓⲛ: ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲥⲉϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲱⲟⲩ: ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ⲥⲉⲛⲁϯⲱ̀ⲟⲩ ⲛⲉ.</td>
                    <td class="arabic">رؤساء الآباء يفرحون. والأنبياء يسبحون. والعذارى يفتخرون. والشهداء يمجدون،</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">The heads of the sinners are raised with joy by the carrier of the sins of the world. The rejoicing heavenly hosts worship proclaiming and saying ‘glory to God in the highest, peace on earth and goodwill toward men" for He came and saved us. As for the evil Herod, when he heard that Christ was born in Bethlehem, he and all the Jews who were in Jerusalem with him were all vexed. So he secretly called the magi and sent them to Bethlehem to diligently search for the new born child. As for them, they hastily left following the Star of the East to the place where the babe was. And when they saw Him they exceedingly rejoiced and fell and worshiped Him and opened their bags and offered Him korban. Thus the prophecies were fulfilled, when Gold was offered to Him. The Lord who is glorified in His saints, the wondrous, Fearful God, appeared to us today, the One who sits upon the cherubim is held in the arms of the virgin. The Unseen by the heavenly ranks was sighted among the human race By the glory of Hs divinity the heavenly prostrate themselves and for His love of mankind He deserved prostration on earth as well. The cherubim worship and the seraphim glorify and chant and we too praise with heavenly voices saying "glory to God in the highest, peace on earth and goodwill toward men." Now and forever and unto the ages of all ages, Amen.</td>
                    <td class="arabic">والخطاة تشرئب أعناقهم فرحاً بحامل خطايا العالم. وجنود الملائكة يسجدون بفرح ويقولون . المجد لله في الأعالي. وعلى الأرض السلام وفي الناس المسرة. لأنه أتي وخلصنا. أما هيرودس الخبيث. فعندما سمع أن المسيح ولد في بيت لحم قلق وكل اليهود معه الساكنون بأورشليم. فدعا المجوس خفية وأرسلهم إلى بيت لحم ليجدوا في البحث عن الصبي المولود. أما هم فمضوا مسرعين وإذا النجم الذي اشرق يسير قدامهم إلى موضع الصبي. فلما رأوه فرحوا وخروا له ساجدين. وفتحوا أوعيتهم وقدموا له القرابين. حينئذ كمل الكلام النبوي . أنا يحيا ويعطي من ذهب العرب. الله الممجد في مشورة القديسين العظيم المخوف ظهر لنا اليوم الجالس على مركبة الشاروبيم. هو المحمول على أيدي العذراء. الغير المرئي من المراتب الملائكية. قد شوهد مع الجنس البشري. ومن قبل مجد لاهوته يخشع السمائيون. ولكثرة محبته للبشر حق السجود له على الأرض. الشاروبيم يسبحون والسارافيم يرتلون. ونحن نمجده بأصوات ملائكية ونقول. المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة. الآن وكل أوان وإلى دهر الداهرين آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Adam Exposition After Third Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Adam Exposition After Third Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الثالث في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">A great mystery, appeared to You, O John the forerunner, and also Baptist.</td>
                    <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉ̀ⲧⲁϥⲟⲩⲱⲛϩ ⲛⲁⲕ ⲉ̀ⲃⲟⲗ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲟⲩⲟϩ ⲡⲓⲣⲉϥϯⲱⲙⲥ ⲉⲩⲥⲟⲡ.</td>
                    <td class="arabic">ظهر لك سر عظيم يا يوحنا السابق والمعمد معاً.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">For you held with your hands your Creator and baptized Him like a human.</td>
                    <td class="coptic">Ϫⲉ ⲁⲕⲁ̀ⲙⲟⲛⲓ ⲛ̀ⲧ̀ϫⲓϫ: ⲙ̀ⲫⲏⲉ̀ⲧⲁϥⲉ̀ⲣⲡ̀ⲗⲁⲍⲓⲛ ⲙ̀ⲙⲟⲕ: ⲁⲕⲱⲙⲥ ⲙ̀ⲙⲟϥ ϧⲉⲛ ⲟⲩⲙⲱⲟⲩ: ⲕⲁⲧⲁ ⲣⲱⲙⲓ ⲛⲓⲃⲉⲛ.</td>
                    <td class="arabic">لأنك أمسكت بيد الذي جبلك، وعمدته في الماء مثل أحد أفراد الناس.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">You were also made worthy to behold the Spirit dwelling upon Him as a dove and heard the voice of the Father proclaiming saying, “This is My beloved Son.” Therefore we praise and proclaim with the prophet, “Every flesh sees the salvation of God.” The stiffed-necked people, the children of Israel, did not believe the voice of the good Father who witnessed in a great manner saying, “This is My beloved Son, in whom I am well pleased” (Matthew 3:17). We the nations were made worthy of the true and holy baptism in the name of the holy Trinity. The voice of God witness to John the forerunner; “Among those born of women there is not a greater” (Luke 7:28). He is the perfection of the prophets and he came before our Lord and Savior to prepare the way according to the saying of Isaiah. The tribes and the peoples who were baptized by the forerunner are greatly in joy. For he spoke to them saying, “I baptize you with water for the repentance of the forgiveness of your sins. He who has two tunics, let him give to him who has none; and he who has food, let him do likewise." Therefore let us praise the God who was baptized in the Jordan that He may forgive us our sins and glory be to God forever. Amen.</td>
                    <td class="arabic">وأيضاً استحققت أن تعاين الروح نازلاً عليه على شكل حمامة. وسمعت صوت الأب يصرخ قائلاً، هذا هو ابني الحبيب. فمن أجل هذا نسبح ونصرخ مع النبي ونقول أن كل ذى جسد ينظر خلاص الله . الشعب الغليظ العنق بنو إسرائيل لم يؤمنوا بصوت الأب الصالح صارخاً. هذا الذي يشهد به بإعلان عظيم قائلاً هذا هو ابني الحبيب الذي به سررت. ونحن الشعوب استحققنا رسم المعمودية المقدسة الحقيقية باسم الثالوث المقدس. فم الله يشهد عن يوحنا السابق. أنه ليس من يشبهه في مواليد النساء. وهو كمال الأنبياء وقد أتي قدام مخلصنا الرب لكي يعد طريقة كقول أشعياء. كثيرة بزيادة تهليل القبائل والشعوب الذين اعتمدوا من السابق. لكنه كان يكلمهم قائلاً . أما أنا فأعمدكم بماء للتوبة لمغفرة خطاياكم . من له ثوبان فليعط من ليس له. ومن له خبز فليصنع أيضاً كذلك. من أجل هذا فلنسبح الإله الذي اعتمد في الأردن ليغفر لنا خطايانا والمجد لله دائماً أبدياً أمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};
const fourthCanticleExposition = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Adam Exposition After Fourth Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Adam Exposition After Fourth Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الرابع في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">God the Logos who is in His Father’s bosom, Mary gave birth to Him and remained a Virgin.</td>
                    <td class="coptic">ⲠⲓⲖⲟⲅⲟⲥ ⲛ̀Ⲛⲟⲩϯ: ⲉⲧϧⲉⲛ ⲕⲉⲛϥ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲁ̀Ⲙⲁⲣⲓⲁ ⲙⲁⲥϥ: ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">الإله الكلمة الذي هو في حضن أبيه. ولدته مريم وبقيت عذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">He who clothed the heavens, the Governor of all, was wrapped in swaddling cloths.</td>
                    <td class="coptic">Ⲫⲏⲉ̀ⲧϩⲉⲃⲥⲱ ϩⲓⲱ̀ⲧⲟⲩ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲡⲓⲢⲉϥⲉⲣϩⲉⲙⲓ ⲉ̀ⲡ̀ⲧⲏⲣϥ: ⲁⲩⲕⲟⲩⲗⲟⲗϥ ϧⲉⲛ ϩⲁⲛⲧⲱⲓⲥ.</td>
                    <td class="arabic">الذي ستر السموات مدبر الكل لف بالخرق.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">God who sits upon the cherubim, was placed in a manger of animals. He who sustains all through His goodness, turned his mouth and nursed milk while He is our King before all ages.</td>
                    <td class="arabic">الله الجالس على الشاروبيم. أرقدوه في مذود البهائم. الذي يعول الكل بصلاحه مد فاه ورضع اللبن هو ملكنا قبل الدهر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">Let us glorify Him for He has come and saved us. God, whom no one has seen, the only-begotten God who is in His Father’s bosom, came and took flesh from the Virgin without change; she gave birth to Him in Bethlehem.</td>
                    <td class="arabic">فلنمجده لأنه أتي وخلصنا. الله الذي لم يره أحد قط. الإله الوحيد الذي في حضن أبيه قد أتي وتجسد من العذراء بغير تغيير ولدته في بيت لحم</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Therefore, the angels preached to us with great joy for all the world, saying, “A Savior was born to you this day in the city of David, who is Christ the Lord.”</td>
                    <td class="arabic">من أجل هذا بشرنا الملائكة بفرح عظيم صار للمسكونة قائلين قد ولدا لكم اليوم مخلص في مدينة داود هو هو المسيح الرب.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">As for us, let us hurry with the star and be amazed with the shepherds. Let us worship with the Magi and praise with the angels, the heavenly praise, saying, “Glory to God in the highest, peace on earth and goodwill towards men.” He has come and saved us. Glory to Him forever and ever, amen.</td>
                    <td class="arabic">أما نحن فلنسرع مع النجم. ونتعجب مع الرعاة ونسجد مع المجوس ونسبح مع الملائكة تسبحه السماء ونقول، المجد لله في الأعالي وعلى الأرض السلام. وفي الناس المسرة لأنه أتى وخلصنا له المجد دائماً إلى الأبد آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition After Fourth Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition After Fourth Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الرابع في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">O Come today, all you who await the Lord’s coming to us.</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲫⲟⲟⲩ: ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϫⲟⲩϣⲧ: ⲉ̀ⲃⲟⲗ ϧⲁ ⲧ̀ϩⲏ ⲙ̀ⲡ̀ϫⲓⲛⲓ̀: ⲙ̀Ⲫϯ ϣⲁⲣⲟⲛ.</td>
                    <td class="arabic">هلموا اليوم يا كل الذين ينتظرون مجئ الله إلينا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Let us go with rejoicing to Bethlehem; to see Him laid in a manger.</td>
                    <td class="coptic">Ⲛ̀ⲧⲉⲛϣⲉⲛⲁⲛ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀Ⲃⲏⲑⲗⲉⲉⲙ: ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲉⲩⲭⲏ ϧⲉⲛ ⲟⲩⲟⲛϩϥ.</td>
                    <td class="arabic">لنمضي بفرح إلى بيت لحم. لننظره موضوعاً في مذود لابساً جسدناً.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">He has put on our body, which was released from the sin being renewed again, by the unity with Him according to His mercy; That we may praise Him crying out and saying, “Glory be to You O Lover of Mankind for You have come and saved us.” Today, we see in Bethlehem an unutterable mystery; when we see God swaddled in rags, lying down in the animals' manger. We see the shepherds willingly sing, blessing You with spiritual praise. How marvelous is it to see angels mingling with sinners, praising in on voice their Creator saying, “Glory to God in the highest, peace on earth, and goodwill toward men, for He came and saved us according to His mercy.” Today, an unutterable mystery, since eternity, has been revealed. He, who made the heavens by His command, dwelt in the womb of a child virgin and was born of her. We believe in Him without any doubt. Let us worship Him; To whom is the glory now and forever and unto the ages of all ages, Amen.</td>
                    <td class="arabic">الذي عتق من الخطية ليتجدد دفعة أخري. باتحاده به كعظيم رحمته. لكي نسبحه صارخين قائلين. المجد لك يا محب البشر. لأنك أتيت وخلصتنا. أننا نري اليوم في بيت لحم سراً لا ينطق به. عندما ننظر إلى الله ملفوفاً بالخرق. راقداً في مذود البهائم. إنا ننظر إلى الرعاة غير مقصورين على الغناء. بك يباركون ويسبحون روحانياً. من ذا الذي لا يتعجب إذا نظر إلى الملائكة مختلطين مع خطاة الناس يسبحون خالقهم بصوت واحد قائلين المجد لله في الأعالي وعلى الأرض السلام. وفي الناس المسرة. لأنه أتي وخلصنا كعظيم رحمته: ظهر لنا اليوم سر لم ينطق به في الأزمان الخالية منذ الأبد. الذي أقام السمار بأمره. صار في بطن صبية عذراء وولد منها نؤمن به بغير شك. فلنسجد له. له المجد دائماً الآن وكل أوان وإلى دهر الداهرين آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Adam Exposition After Fourth Canticle">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Adam Exposition After Fourth Canticle
                <span class="arabic-caption">طرح آدام بعد الهوس الرابع في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">We worship the co-essential Trinity, who appeared to us, upon the Jordan.</td>
                    <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲛϯⲦⲣⲓⲁⲥ: ̀ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: ϩⲓϫⲉⲛ Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ.</td>
                    <td class="arabic">نسجد للثالوث المساوى هذا الذي ظهر لنا على الأردن.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">We worship the Father, and the Son, and the Holy Spirit, the one divinity.</td>
                    <td class="coptic">Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲙ̀ⲫ̀Ⲓⲱⲧ: ⲛⲉⲙ Ⲡϣⲏⲣⲓ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲥⲩⲙⲁ ⲥ̅ⲱ̅ⲧ̅: ϯⲙⲉⲑⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ</td>
                    <td class="arabic">نمجد الأب والابن والروح القدس اللاهوت الواحد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">All the patience that the prophets had were for you O John. For you have informed us the perfection of all things, saying, “Behold! The Lamb of God the Father.” God, who sits upon the cherubim, came to the Jordan and was baptized in it. He, who decorated the haven with its many stars, became naked and was baptized in water. Hail to the Jordan and let it rejoice; for you were lit by the light of the Trinity who appeared during the dwelling of the Holy Spirit on the Son. From now, all the souls who are baptized in the name of the Holy Trinity were enlightened through the light that was given by our Savior, who also gave the authority to trample upon the power of the enemy. Great Truth is the mystery Your Incarnation and Birth O Jesus my Lord. We ask of You O Lord, purify us from our sins through the baptism of water, and forgive us our sins.</td>
                    <td class="arabic">كل الصبر الذي صبره الأنبياء هو من أجلك يا يوحنا. لأنك عرفتنا كمال كل الأشياء قلت ها هوذا حمل الله الأب. الله الجالس على الشاروبيم أتي إلى الأردن وتعمد فيه. الذي زين السماء بكثرة النجوم. تعري من ثيابه وتعمد بالماء السلام للأردن وليتهلل لأنك قد أضأت بنور الثالوث الذي ظهر وقت حلول الروح القدس على الابن. ومن الآن كل الأنفس التي تعمدت باسم الثالوث المقدس استنارت بنوره الذي أعطاها أياه مخلصنا مع السلطان لكي تدوس قوة العدو. حق عظيم هو سر تجسدك وتأنسك يا يسوع ربي. ونحن يا رب نطلب إليك طهرنا من خطايانا بحميم الماء. وأغفر لنا خطايانا.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};
const postCommemorationExposition = {
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Watos Exposition After The Commemoration">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Watos Exposition After The Commemoration
                <span class="arabic-caption">طرح واطس بعد المجمع في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">God who sits, upon the cherubim, came to the Jordan, to be baptized in it.</td>
                    <td class="coptic">Ⲫϯ ⲫⲏⲥⲧϩⲉⲙⲥⲓ: ϩⲓϫⲉⲛ ⲛⲓⲬⲥⲣⲟⲩⲃⲓⲙ: ⲁϥ̀ⲓ ⲉ̀Ⲡⲓⲓⲟⲣⲇⲁⲓⲓⲏ̅ⲥ̅: ⲁϥϭⲓⲱⲙⲥ ⲛ̀ϧⲏⲧϥ</td>
                    <td class="arabic">الله الجالس على الشاروبيم أتي إلى الأردن وتعمد فيه.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">God the Father the Pantocrator, THE BEING who were, had compassion upon His likeness, and His creation that He created.</td>
                    <td class="coptic">Ⲫϯ ⲫ̀Ⲓⲱⲧ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: ⲫⲏⲉⲧϣⲟⲡ ⲫⲏⲉ̀ⲛⲁϥ̀ϣⲟⲡ: ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲧⲉϥϩⲩⲕⲱⲛ: ⲛⲉⲙ ⲡⲉϥ̀ⲓ̀ⲓⲗⲁⲥⲙⲁ ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟϥ</td>
                    <td class="arabic">الله الآب الضابط الكل الأزلي الذي لم يزل تحنن على صورته وجبلته التي خلقها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">And sent His only-begotten who came, was incarnate, became man, came to the Jordan to be baptized by John and saved us from the bondage of the imperious one through the holy baptism. Hail to the joy of the holy wilderness the dwelling place of the Holy Spirit. Hail to the bright lamp, John the forerunner. Hail to the announcer, the caller who is better then all the trumpets and who proclaims with the Spirit and the strength of Elijah. Hail to the perfection and the last of the prophets who comes before the Lord to prepare righteous people to God in Spirit. Let us chant in reverence and glorify God with spiritual praises for He restored us to our first rank. We were sitting in darkness and the shadow of death and He shone upon us through His holy baptism as He is also saying, “Come to Me, all you who labor and are heavy laden, and I will give you rest” (Matthew 11:28). Blessed are they who are baptized in the name of the holy Trinity for their transgressions will be forgiven. For through the washing of the holy baptism we became heirs of the heavenly kingdom. Let us worship the co-essential Trinity, the one God who is forever, who we were made worthy to be granted forgiveness of sins of Him, taking His holy example upon our heads in the holy baptism; to whom the glory forever and ever. Amen, Lord have mercy.</td>
                    <td class="arabic">وارسل وحيده الذي اتي وتجسد وتأنس وأقبل إلى الأردن واعتمد من يوحنا، وعتقنا من عبودية المتجبر. من قبل رسم المعمودية المقدسة. والسلام لفرح البرية المقدسة محل الروح القدس. السلام للسراج المنير يوحنا السابق. السلام للمنادي المبشر الأفضل من كل الأبواق الصارخ بالروح وبقوة إيليا . السلام لكمال الأنبياء الآتي أمام الرب ليعد شعوباً لله مبررين بالروح. فلنرتل بخشوع ونمجد الله بتسابيح روحانية. لأنه ردنا إلى رئاستنا الأولي. ولأننا كنا جلوساً في الظلمة وظلال الموت. فأضاء علينا من قبل معموديته المقدسة إذ يصرخ قائلاً، اسرعوا تعالوا إلى يا جميع المتعبين والثقيلي الأحمال وأنا أريحكم. طوبي للذين تعمدوا باسم الثالوث المقدس لأنه سوف يغفر زلاتهم. لنه من قبل حميم المعمودية المقدسة صرنا وارثين الملكوت السمائية. فلنسجد للثالوث المساوى الإله الواحد الباقي إلى الأبد هذا الذي قد استحققنا أن ننال منه مغفرة خطايانا بمثاله المقدس هذا الذي نرسم مثاله على جباهنا في المعمودية المقدسة له المجد دائماً إلى الأبد آمين يا رب أرحم.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};
const postWatosTheotokiaExposition = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Watos Exposition After The Theotokia">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Watos Exposition After The Theotokia
                <span class="arabic-caption">طرح واطس بعد الثيؤطوكية في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Unutterable joy came to the world for our Savior was born in Bethlehem of Judea.</td>
                    <td class="coptic">Ⲟⲩⲣⲁϣⲓ ⲛ̀ⲁⲧϣ̀ⲥⲁϫⲓ ⲙ̀ⲙⲟϥ: ⲁϥϣⲱⲡⲓ ϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀.</td>
                    <td class="arabic">فرح لا ينطق به صار للمسكونة لأنه قد وُلد مخلصنا في بيت لحم اليهودية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">The whole creation overflowed with joy, the angels sang, and the shepherds rejoiced for the virginal Birth.</td>
                    <td class="coptic">Ⲁ̀ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ ϭⲓⲫⲉⲓ: ⲁ̀ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉⲣϩⲩⲙⲛⲟⲥ: ⲁ̀ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲑⲉⲗⲏⲗ: ⲉ̀ϫⲉⲛ ⲡⲓϫ̀ⲫⲟ ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲟⲛ.</td>
                    <td class="arabic">لقد فاضت البَرِيَة فرحاً ورتلت الملائكة وتهللت الرعاة بالميلاد البتولي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Therefore the ranks on high joyfully sing and say, “Glory to God in the highest, peace on earth and goodwill towards men.”</td>
                    <td class="arabic">من أجل هذا ترتل الطغمات العلوية بتهليل وتقول "المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة."</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">For He has come and saved us for we are His people. The angel of the Lord appeared to the shepherds, bringing them the good tidings, saying “A Savior was born to you this day.” Therefore we sing, saying, “Glory to God...”</td>
                    <td class="arabic">لأنه قد أتى وخلصنا فنحن شعبه. قد ظهر ملاك الرب للرعاة وبشرهم بالسرور قائلاً: 'قد ولد لكم اليوم مخلص." من أجل ذلك نرتل ونقول: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">The shepherds became afraid because of the light that appeared to them. They said to one another, “What is this mystery?” The heavenly hosts sing on earth and praise their Creator who became man for our sake. Therefore we sing, saying, “Glory to God...”</td>
                    <td class="arabic">فخافت الرعاة من أجل النور الذي طلع عليهم. وخاطب بعضهم بعضاً قائلين "ما هو هذا السر؟" أن الأجناد السمائية ترتل على الأرض ويسبحون خالقهم الذي تأنس لأجلنا. ومن أجل هذا نرتل ونقول: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">The angel said to the shepherds, “Do not be afraid of what the Lord is telling you. A Mystery hidden before the ages appears to you now in Bethlehem, the city of David.” Therefore we sing, saying, “Glory to God...”</td>
                    <td class="arabic">فأجاب الملاك الرعاة "لا تخافوا من أجل ما أعلمكم به الرب. لأنه سِرّ مكتوم من قبل كل الدهور ظهر لكم الآن في بيت لحم مدينة داود." من أجل هذا نرتل قاتلين: "المجد لله</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="north">
                    <td class="english">Then the shepherds said to one another, “Let us go to Bethlehem as the angel said to see the Lord’s words fulfilled and be the first to see His Coming.” Therefore we sing, saying, “Glory to God...”</td>
                    <td class="arabic">حينئذ قال الرعاة بعضهم لبعض 'لنمض إلى بيت لحم كقول الملاك لننظر الكلام الذي أعلمنا به الرب ونصير أول المنذرين بمجيئه." من أجل هذا نرتل قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">The angel said to the shepherds, “Go to Bethlehem and this will be a sign to you: You will find a Babe wrapped and lying in a manger.” He is the Lord of powers who became man for this reason. We sing, saying, “Glory to God...”</td>
                    <td class="arabic">فأجاب الملاك وقال للرعاة "إمضوا إلى بيت لحم. وهذه علامة لكم أنكم تجدون طفلاً ملفوفاً وموضوعاً في مذود." هو رب القوات الذي تأنس لأجل هذا. نرتل قائلين: "المجد لله</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">The shepherds went to Bethlehem, the place which the prophets said the Christ will be born in. They found Mary and Joseph with the Child lying in a manger because there was no place for them. Therefore we sing, saying, “Glory to God...”</td>
                    <td class="arabic">فجدّ الرعاة إلى بيت لحمء الموضع الذي قالت عنه الأنبياء أن المسيح يولد فيه. فوجدوا مريم ويوسف والطفل موضوعاً في مذود لأنه لم يكن لهما موضع حيث نزلا. من أجل ذلك نرتل قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">The shepherds saw all the heavenly hosts praising with the angels, saying, “Glory to God...” for has come and saved us.</td>
                    <td class="arabic">ونظر الرعاة جميع الأجناد السمائية يسبحون مع الملائكة قائلين: "المجد لله..." لأنه أتى وخلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english">Then the shepherds returned to their homes with great joy, praising and glorifying God for all the things they had seen.</td>
                    <td class="arabic">ورجع الرعاة إلى بيوتهم بفرح عظيمء يسبحون ويمجدون الله على كل ما رأوا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="north">
                    <td class="english">They testified to the multitudes, saying, “Christ was born in Bethlehem of Judah and we have seen Him with our own eyes.</td>
                    <td class="arabic">وكانوا يشهدون للجموع قائلين: 'قد ولد المسيح في بيت لحم يهذوا وقد رأينا رؤيا العين</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">So we knelt before Him, worshipping Him, and believed that He is the Savior.” Glory to Him, with His good Father and the Holy Spirit forever. Amen.</td>
                    <td class="arabic">فخررنا له ساجدين وآمنا أنه هو المخلص.' له المجد مع أبيه الصالح والروح القدس إلى الأبد. آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
};
const postAdamTheotokiaExposition = {
    NativityParamoun(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Paramone Adam Exposition After The Theotokia">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Paramone Adam Exposition After The Theotokia
                <span class="arabic-caption">طرح ادام بعد الثيؤطوكية في برامون الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Come today, all you people of the earth and behold this mystery.</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲧⲏⲣⲟⲩ ⲙ̀ⲫⲟⲟⲩ: ⲛⲓⲗⲁⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ̀ⲁⲣⲓⲑⲉⲱ̀ⲣⲓⲛ: ⲙ̀ⲡⲁⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ.</td>
                    <td class="arabic">تعالوا كلكم اليوم يا شعوب الأرضء وأنظروا هذا السرء</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">For God was born unto us from a virgin without a human seed. He came and saved us.</td>
                    <td class="coptic">Ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲫⲛⲟⲩϯ: ⲉⲃⲟⲗ ϧⲉⲛ ⲟⲩⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϭⲛⲉ ̀ⲥⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ⲁϥ̀ⲓ ⲁϥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                    <td class="arabic">لأنه قد وُلد لنا الله من عذراء بغير زرع بشر. إذ أتى وخلصناء</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Let us praise Him along with the angels with this holy heavenly praise, saying:</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲉⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ϧⲉⲛ ⲡⲁⲓϩⲩⲙⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ: ⲛ̀̀ⲉⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
                    <td class="arabic">فلنسبحه مع الملائكة» بهذه التسبحة المقدسة السمائية قائلين:</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">"Glory to God in the highest, peace on earth and goodwill among people."</td>
                    <td class="coptic">Ϫⲉ ⲟⲩⲥ̀ⲙⲟⲩ ⲙ̀Ⲫⲛⲟⲩϯ: ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ.</td>
                    <td class="arabic">"المجد لله في الأعالي وعلى الأرض السلام» وفي الناس المسرة."</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Celebrate with joy, O Bethlehem of Judea, for from you blossomed Jesus Christ,</td>
                    <td class="coptic">Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ Ⲓⲟⲩⲇⲁⲓ: ⲣⲁϣⲓ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϫⲉ ⲁϥⲫⲓⲣⲓ ⲛ̀ϧⲏϯ: ⲛ̀ϫⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                    <td class="arabic">افرحي بتهليل يا بيت لحم اليهودية لأنه قد أينع منك يسوع المسيح</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">the Word Incarnate, born of Mary, who is a virgin—a wondrous act.</td>
                    <td class="coptic">Ⲡⲓⲗⲟⲅⲟⲥ ⲉⲧⲁϥϭⲓ ⲥⲁⲣⲝ: ̀ⲁ Ⲙⲁⲣⲓⲁ ⲙⲁⲥϥ: ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ⲟⲩϩⲱⲃ ⲛ̀ϣ̀ⲫⲏⲣⲓ.</td>
                    <td class="arabic">الكلمة المتجسد. قد ولد من مريم وهي عذراء بأمر عجيب»</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="north">
                    <td class="english">All the prophets’ Scriptures which heralded and prophesied of the coming of Christ</td>
                    <td class="coptic">Ⲅⲣⲁⲫⲏ ⲛⲓⲃⲉⲛ: ⲉⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ϫⲟⲧⲟⲩ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲓ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ϫⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ</td>
                    <td class="arabic">وكل الكتب التي سبق فأنبأت عن مجئ المسيح من الأنبياء؛</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">have been fulfilled today in Bethlehem, the city of David, in which He was born.</td>
                    <td class="coptic">Ⲁⲩϫⲱⲕ ⲉⲃⲟⲗ ⲙ̀ⲫⲟⲟⲩ: ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ:̀ⲣ̅ⲃⲁⲕⲓ ⲛ̀ⲇⲁⲩⲓⲇ: ⲉⲧⲁⲩⲙⲁⲥϥ ̀ⲉⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
                    <td class="arabic">قد كملت اليوم في بيت لحم مدينة داود التي ولد فيها.</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">David the prophet gives praises for us saying: "The beauty of His splendor is in Zion,</td>
                    <td class="coptic">ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉⲣⲭⲱⲣⲉⲩⲓⲛ ⲛⲁⲛ: ϫⲉ̀ϩⲙⲉⲧⲥⲁⲓⲉ ⲙ̀ⲡⲉϥⲥⲁⲓ: ⲟⲩ ̀ⲉⲃⲟⲗ ϧⲉⲛ Ⲥⲓⲱⲛ.</td>
                    <td class="arabic">داود النبي يسبح لنا قاتلاً: 'حُسن بهائه في صهيون؛</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">and God came manifestly, Lord of hosts, with the sound of the horn."</td>
                    <td class="coptic">ⲉϥⲉⲓ ⲛ̀ϫⲉ Ⲫⲛⲟⲩϯ: ϧⲉⲛ ⲟⲩⲟⲛϩ ⲉⲃⲟⲗ: Ⲡϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ: ϧⲉⲛ ⲟⲩ̀ⲥⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ.</td>
                    <td class="arabic">والله أتى ظاهراًء ورب القوات بصوت القرن."</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english">Mary the Virgin and Joseph the carpenter were in that place refugees, like sojourners.</td>
                    <td class="coptic">Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲛⲉⲙ Ⲓⲱⲥⲏϥ ⲡⲓϩⲁⲙϣⲉ: ⲛⲁⲩⲭⲏ ϧⲉⲛ ⲡⲓⲙⲁ ⲛ̀ϫⲱⲓⲗⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲛⲓϣⲉⲙⲙⲱⲟⲩ.</td>
                    <td class="arabic">مريم العذراء ويوسف النجار كانا في الموضع ملتجئين مثل أناس غرباء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="north">
                    <td class="english">Mary gave birth to her firstborn son and she laid Him down in a manger for the beasts.</td>
                    <td class="coptic">Ⲁⲥⲙⲓⲥⲓ ⲙ̀Ⲡⲉⲥϣⲏⲣⲓ: ⲟⲩⲟϩ ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲓⲥⲓ: ⲁⲥϣ̀ⲧⲟⲧϥ ϧⲉⲛ ⲡⲓⲟⲩⲟⲛϩϥ: ⲛ̀ⲧⲉ ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ.</td>
                    <td class="arabic">فولدت مريم ابنها البكرء وأضحجعته في مذود البهائم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">Let us praise Him and bless Him for his mercy is forever.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ̀ⲉⲣⲟϥ ...</td>
                    <td class="arabic">فلنسبحه ونباركه لأن إلى الأبد رحمته.</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">The emperor decreed that the whole world should be registered. Everyone went to Bethlehem to register his name and his father’s name. Let us praise Him with the angels, saying, “Glory to God...”</td>
                    <td class="arabic">صدر أمر من الملك أن يكتتب جميع المسكونة وليمض كلهم واحداً واحداً إلى بيت لحم ليكتب إسمه واسم أبيه. فلنسبحه مع الملائكة قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="north">
                    <td class="english">Truly the righteous Joseph arose with the pure Virgin Mary and they went to Bethlehem to register their names. The Virgin was pregnant with our Savior. Let us praise Him with the angels, saying, “Glory to God...”</td>
                    <td class="arabic">بالحقيقة قام يوسف البار هو ومريم العذراء الطاهرة ومضيا إلى بيت لحم يكتبا أسميهما. وكانت العذراء حبلى بالمخلص. فلنسبحه مع الملائكة قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="north">
                    <td class="english">Joseph the righteous registered a wonderous Mystery when they registered Joseph and Mary his bethroted wife with Jesus his Son. Let us praise Him with the angels, saying, “Glory to God...”</td>
                    <td class="arabic">فكتب يوسف الصديق سراً عجيباً وعندما كتبوا يوسف ومريم خطيبته ويسوع إبنه؛ فلنسبحه مع الملائكة قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">Gather all today and behold this great and mysterious wonder: [Joseph’s] name was registered with the Virgin and Jesus his Son before He was born. Let us praise Him with the angels, saying, “Glory to God...”</td>
                    <td class="arabic">اجتمعوا كلكم اليوم وأنظروا هذا العجب العظيم المعجب. وهو أنه كتب إسمه وإسم العذراء ويسوع إبنه قبل ميلاده» فلنسبحه مع الملائكة قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">The mystery was revealed to us exactly as the angel said when he spoke to Joseph saying, “Take to you your wife for the One she will bear is called Jesus.” Let us praise Him with the angels, saying, “Glory to God...”</td>
                    <td class="arabic">قد ظهر لنا السر كحسب الوقت الذي ذكره الملاك لما خاطب يوسف قائلاً: "خذ خطيبتك إليك فإن الذي تلده يدعى يسوعء" فلنسبحه مع الملائكة قائلين: "المجد لله..."</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="north">
                    <td class="english">When the days of her pregnancy of the Savior were completed, her Son was born, the first-born of the Father, begotten before all ages and laid Him in a barn of animals. Let us praise Him with the angels, saying, “Glory to God...”</td>
                    <td class="arabic">فلما كملت الأيام أن تلد العذراء المخلصء ولدت إبنها بكر الآب المولود قبل كل الدهور وأرقدته في معلف البهائم. فلنسبحه مع الملائكة قائلين: "المجد لله..."</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
    ,
};

const adamPostSaturdayTheotokiaExposition = {
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition After Saturday Theotokia">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition After Saturday Theotokia
                <span class="arabic-caption">طرح آدام بعد ثيؤطوكية السبت في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">All of the Christians / rejoice today / for Christ was born / of the virgin.</td>
                    <td class="coptic">Ⲙⲁⲣⲟⲩⲟⲩⲛⲟϥ ⲙ̀ⲫⲟⲟⲩ: ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
                    <td class="arabic">فليفرح اليوم المسيحيون لأن المسيح ولد من العذراء.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Let us worship Him / with the heavenly Hosts / proclaiming and saying / glory to God in the highest.</td>
                    <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ.</td>
                    <td class="arabic">فلنسبحه مع المراتب العلوية صارخين قائلين المجد لله في الاعالي.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Peace on earth and goodwill toward men. Come among us today O chosen evangelist Matthew in order to directly proclaim to us the birth of the Lord in Bethlehem, the city of the prophets, which became like heaven. The pure disciple said "When the Lord Christ was born in the Bethlehem of Judea, during the days of Herod; Magi came from the East inquiring "where is the Newborn? For we saw His star in the East and we came to worship Him saying "glory to God in the highest, peace on earth and goodwill toward men.” And immediately Herod was disturbed for thinking that the Lord of heaven and earth was simply an earthly king. And so he said to them "Go and find the babe and inform me if His whereabouts so that I also would go and worship Him: Let us praise Him saying "glory to God in the highest, peace on earth and goodwill toward men." When they left, they found something that befuddles the mind, so they offered Him three korban: Frankincense as He is God; Gold as He is the king of kings and myrrh as He accepted to die in the flesh to save Adam and His descendents by this life-giving death. Let is praise Him saying "glory to God in the highest, peace on earth and goodwill toward men.” And they were instructed in their dream not to return to Herod, and to return to their countries through a different route instead. So they left and went evangelizing saying "we saw a marvel today because the One who provides for all creation nursed form the breast of a virgin maiden. And the One whose glorious presence shakes the heavenly ranks, appeared today as a newborn babe in Bethlehem of Judea the city of the prophets. Let us praise Him saying "glory to God in the highest, peace on earth and goodwill toward men." For He has come and saved us. To Him be the eternal glory forever and ever, Amen.</td>
                    <td class="arabic">وعلى الأرض السلام. وفي الناس المسرة. تعال إلينا اليوم في وسطنا أيها المبشر الإنجيلي متى المختار. لكي تخبرنا علانية عن ميلاد الرب في بيت لحم مدينة الأنبياء التي صارت مثالاً للسماء. قال البشير الطاهر. فلما ولد المسيح الرب في بيت لحم يهوذا في أيام هيرودس الملك. وإذا مجوس وافوا من المشرق قائلين أين هو المولود لأننا رأينا نجمه في المشرق فوافينا لنسجد له فلنسبحه قائلين: المجد لله في الاعالي. وعلى الأرض السلام. وفي الناس المسرة. فاضطرب هيرودس للوقت لظنه الفاسد أن المولود ملك ارضي. وهو رب السمائيين والأرضيين وقال لهم. امضوا وابحثوا عن المولود وتعالوا أعلموني لأمضي أنا أيضاً وأسجد له: فلنسبحه قائلين: المجد لله في الاعالي. وعلى الأرض السلام. وفي الناس المسرة. فلما مضوا وجدوا أمراً مذهلاً للعقول. فقدموا له ثلاثة قرابين. لباناً لأنه إله الآلهة. وذهباً لأنه ملك الملوك. ومراً دلالة على قبوله الموت بالجسد ليخلص آدم وذريته بذلك الموت المحيي. فلنسبحه قائلين: المجد لله في الاعالي. وعلى الأرض السلام. وفي الناس المسرة. وأمروا في الحلم أن لا يعود إلى هيرودس بل ينطلقوا من جهة أخري إلى بلادهم. فمضوا وصاروا يبشرون قائلين: اليوم رأينا عجباً. لأن الذي يعول كل البشرية قد رضع اللبن من ثدي فتاة عذراء. والذي ترتعد من عز هيبته ومجد لاهوته الصفوف السمائية. ظهر اليوم مولوداً في بيت لحم يهوذا مدينة الأنبياء فلنسبحه قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة لأنه أتي وخلصنا: له المجد دائماً إلى الأبد آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Watos Exposition After The Saturday Theotokia">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Watos Exposition After The Saturday Theotokia
                <span class="arabic-caption">طرح واطس بعد ثيوطوكية السبت في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">The mountains and the hills, became filled with your voice, O the great caller, John the Baptist.</td>
                    <td class="coptic">Ⲁ̀ⲛⲓⲧⲱⲟ̀ⲩ ⲛⲉⲙ ⲛⲓϣⲁϥⲉⲩ: ⲙⲟϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲕⲥ̀ⲙⲏ: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲛ̀ⲕⲩⲣⲓⲝ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ.</td>
                    <td class="arabic">امتلأت الجبال والآكام من صوتك أيها المنادي يوحنا المعمد.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">You are exalted more than the patriarchs, You are honored more than the prophets, among those born of women, there is none like you;</td>
                    <td class="coptic">Ⲕ̀ϭⲟⲥⲓ ⲉ̀ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲕ̀ⲧⲁⲓⲏ̀ⲟⲩⲧ ⲉ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϧⲉⲛ ⲛⲓϫⲓⲛⲙⲓⲥⲓ ⲛ̀ⲧⲉ ⲛⲓϩⲓⲟⲙⲓ: ⲙ̀ⲙⲟⲛ ⲫⲏⲉ̀ⲧⲉⲛⲑⲱⲛⲧ ⲉ̀ⲣⲟⲕ.</td>
                    <td class="arabic">تمجدت على الأباء وتكرمت على الأنبياء . ليس في مواليد النساء من يشبهك،</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">O master who is a witness and is truthful in his words. Who beheld the glory of God upon the Jordan River, John the Son of Zacharias and the barren woman. The caller in the mountains, the announcer in the deserts, the master and beholder of the mystery of the Logos of the Father when He was in the Jordan River. Come, behold and be amazed by this wondrous act: The only-begotten Logos, the Son of the Father; He is a Lord, He is a God and He is the Son of the High One. Who have the ability to make what His hands have made?! He humbled Himself, completed the virtues and prepared ways for us to live by. He is the pure Master and Lord of purity. He is holy and dwells among the saints. He is the Master of all. He became a Man for the sake of our salvation. Therefore humanity was filled with His grace. He accepted baptism and was baptized. He taught us to learn from the blessed priest. This priest and archpriest witnessed to everyone about the Logos of God, our King Jesus Christ. “He who sent me to baptize me told me: ‘He who you see the Spirit dwell upon is the Lamb of God.’ I have seen and confessed that this is the Son of God through the voice that I heard from the glory of the High One.” This was said by the Baptist, the honored one in humanity, John the Baptist who witnessed to our Savior. He who believes the Son, to him is eternal life. And he who does not believe, the wrath of God will dwell upon him. Come, let us believe in Him that we may be granted goodness and become heirs of eternal life. Intercede for us O John the Baptist, that He may forgive us our sins. Amen.</td>
                    <td class="arabic">أيها السيد الشاهد الصادق في كلامه. الذي نظر مجد الله على نهر الأردن. يوحنا ابن زكريا ابن العاقر المنادي على الجبال المبشر في البراري أيها السيد الناظر إلى سر كلمة الآب وهو في نهر الأردن . تعالوا أنظروا وتعجبوا من هذا العمل العجيب الذي للوحيد الكلمة ابن الأب هو رب وهو غله وهو ابن العلي. من يقدر على أعمال يديه. اتضع بذاته واكمل الفضائل وأعد سبلاً لكي نسعي فيها. هو السيد الطاهر ورب الطهارة. هو قدوس وكائن في القديسين هو سيد الكافة قد صار إنساناً من اجل خلاصنا من أجل هذا أمتلأت البشرية كلها من نعمته قبل المعمودية واعتمد. وعلمنا ان نتعلم من اجل الكاهن الطوباوى . هذا الكاهن ورئيس الكهنة شهد لكل أحد من أجل كلمة الإله ملكنا يسوع المسيح. أن الذي أرسلني لأعمد هو الذي قال لي. الذي ترى الروح ياتي عليه هو حمل الله. وقد رأيت وشهدت ان هذا هو ابن الله. من أجل الصوت الذي سمعته من مجد العلي. قال المعمداني المكرم في البشرية. الشاهد لمخلصنا يوحنا الصابغ. أن الذي يؤمن بالابن له الحياة الأبدية. ومن لا يؤمن به يحل عليه غضب الله. تعالوا نؤمن به لكي ننال الخيرات ونرث الحياة الدائمة. اشفع فينا أيها الصابغ يوحنا. ليغفر لنا خطايانا آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const adamPostSundayTheotokiaExposition = {
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition After Sunday Theotokia">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition After Sunday Theotokia
                <span class="arabic-caption">طرح آدام بعد ثيؤطوكية الأحد في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Today, the King of glory / appeared unto us / in the bosom of the virgin / and we beheld His glory.</td>
                    <td class="coptic">Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ: ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ⲁⲛⲛⲁⲩ ⲉ̀ⲡⲉϥⲱ̀ⲟⲩ.</td>
                    <td class="arabic">ظهر لنا اليوم ملك المجد في حضن العذراء مريم ورأينا مجده.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Come all my beloved / let us all praise Him / and bless Him along / with the heavenly ranks.</td>
                    <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ: ⲛ̀ⲧⲉⲛϩⲱⲥ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ: ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
                    <td class="arabic">تعالوا يا أحبائي نسبحه ونباركه مع سائر مراتب السمائيين،</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Saying, "Glory to God in the highest, peace on earth and goodwill toward men." He said praise the Lord with a new song, for He looked down upon the brokenness of His people, so He willed it and sent His Word to the pure virgin Mary. He raised Himself from her as a newborn in the flesh. He saved our father Adam and all his kind from the grasp of the rebellious enemy. He united us with himself by His wondrous incarnation. Therefore we worship Him and we glorify Him and praise Him with a voice of jubilation and exultation saying "Glory to God in the highest, peace on earth and goodwill toward men.”</td>
                    <td class="arabic">قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة. قال سبحوا الرب تسبيحاً جديداً لأن الرب نظر إلى انكسار شعبه فشاء بإرادته وأرسل كلمته إلى الطاهرة مريم العذراء. وأشرق منها مولوداً بالجسد. وخلص أبانا آدم وكل جنسه من يد العدو المارد. وصيرنا متحدين معه بتجسده الطاهر نسجد له ونمجده (ونسبحه بأصوات الفرح والتهليل قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة)</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">God who cracked open the heavens and descended to earth without leaving or separating from the throne of His glory; He appeared as a newborn in the flesh- The One whom the heavenly hosts tremble from His awesome greatness and all creation fear His might, appeared now swaddled in worn rags. Let us all praise Him with a loud shout of joy saying "Glory to God in the highest, peace on earth and goodwill toward men."</td>
                    <td class="arabic">الله الذي طأطأ سماء السموات ونزل على الأرض من غير أن يفارق كرسي مجده: ظهر مولوداً بالجسد. الذي ترتعد من عظمته الأجناس العلوية وتخاف من جبروته الرتب السمائية ظهر الآن ملفوفاً بخرق بالية (فلنسبحه بأصوات الفرح والتهليل قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة).</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">He is the One to whom all the prophecies referred and the Davidian psalms pointed. And all the sayings of the wise and the philosophers. Behold Him wearing a human flesh and nursing milk from the breasts of the chaste, pure, holy, ever-virgin Mary, the daughter of Joachim, the fiancé of Joseph the righteous. Let us therefore praise Him with all our hearts saying "Glory to God in the highest, peace on earth and goodwill toward men.”</td>
                    <td class="arabic">هو الذي أنبأت به الأقوال النبوية . والمصاحف الداودية. وسائر أقوال الحكماء والفلاسفة. ها هو الآن قد ظهر لابساً جسداً. ورضع اللبن من ثدي الست الطاهرة العفيفة النقية الزكية مريم ابنة يواقيم خطيبة الصديق يوسف البار. ( فلنسبحه بأصوات الفرح والتهليل قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة).</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">What can I say? What shall I utter? And in what manner can I speak In order to explain the honor of This lady who is higher than the heavenly ranks? She became the throne for the One who sits upon the cherubim, and the veil who veiled the One who is glorified by the seraphim and she gave birth to Him. Let us all exalt her saying "Rejoice O precious land, in which Joseph the righteous who bought it found in it the divine treasure hidden in it. Rejoice or blessed vineyard, that was not planted and yet produced the Fruit. Rejoice O burning bush that was seen by Moses, while it was engulfed in flames and yet her branches were not burned or consumed by them. The Lord is with you. Blessed are you among women and blessed is the fruit of your womb, for the One who was born of you is Holy and shall be called the Son of God. Ask the Lord on our behalf that He may grant us the forgiveness of our sins. Amen, Alleluia, Kyrie-eleison.</td>
                    <td class="arabic">ماذا أقول وبماذا انطق وبأي لسان استطيع ان أقول مديحاً يسيراً لهذه المكرمة من الصفوف السمائية مريم العذراء. لأنها صارت كرسياً لجالس على الشاروبيم وحجاباً احتجب داخلها الذي تمجده السارافيم. وولدته وهو من بأمره صارت أجناس السمائيين والأرضيين تمجده. فلنمجدها هكذا قائلين: أفرحي أيتها الكنز الشريف الذي ابتاعه البار يوسف. فوجد الجوهر مخفي فيه. افرحي ايتها الحقل المبارك الذي لم يزرع وأينع ثمره. أفرحي أيتها العليقة التي رآها موسى وهي مضطرمة وأغصانها لم تحترق افرحي يا ممتلئة نعمة الرب معك. مباركة أنت في النساء ومباركة هي ثمرة بطنك لأن المولود منك قدوس وابن الله يدعي. اسألي الرب فينا لكي ينعم لنا بغفران خطايانا. آمين الليلويا كيري لييسون.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    },
    Theophany(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Feast of Theophany Adam Exposition After The Sunday Theotokia">
            <caption id="caption_table_${tableNumber}" class="caption">Feast of Theophany Adam Exposition After The Sunday Theotokia
                <span class="arabic-caption">طرح ادام بعد ثيوطوكية الأحد في عيد الغطاس</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">It was given to you, O son of the wilderness, to place your hand, on your Lord’s head.</td>
                    <td class="coptic">Ⲓⲥϫⲉⲛ ⲑⲱⲛ ϣⲁⲑⲱⲛ: ⲱ̀ ⲡⲓⲣⲉⲙⲛ̀ϣⲁϥⲉ: ⲭ̀ⲛⲁⲧⲁⲗⲟ ⲛ̀ⲧⲉⲕϫⲓϫ: ⲉ̀ϫⲉⲛ ⲧ̀ⲁ̀ⲫⲉ ⲙ̀ⲡⲉⲕⲟ̅ⲥ̅.</td>
                    <td class="arabic">أني لك يا ابن البرية ان تضع يدك على رأس سيدك.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">You are the voice, calling in the wilderness, prepare the way of the Lord, make straight His ways paths.</td>
                    <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲡⲉ ϯⲥ̀ⲙⲏ: ⲉⲧⲱϣ ⲉ̀ⲃⲟⲗ ϩⲓⲡ̀ϣⲁϥⲉ: ϫⲉ ⲥⲉⲃⲧⲉ ⲫ̀ⲙⲱⲓⲧ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲥⲟⲩⲧⲱⲛ ⲛⲉϥⲙⲁⲙ̀ⲙⲟϣⲓ.</td>
                    <td class="arabic">أنت هو الصوت الصارخ في البرية. أعدوا طريق الرب وقوموا سبله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">You are the Logos of God the Father who was incarnate for our sake for our salvation. You are John the son of Zacharias the priest, the faithful one of Israel, and He is the Son of God the Pantocrator who created the heavens and all the earth. You baptize everyone with water for the repentance of the forgiveness of sins and He baptizes with the Holy Spirit and fire, which with the winnowing fan in His hand, He purifies His threshing floor. You were born of the elder and barren woman in her old age, promised by the Lord, and He is the one born of the Virgin girl and her virginity is sealed. You are the morning star and you are Elijah who comes as the prophets of the Scripture. You are the rebuker of Herod the king and He is Rebuker of the world for the sake of sin. You were beheaded by Herod and He was crucified for us for the sake of our salvation. You beheld the Spirit dwelling upon Him as a dove; the Father proclaimed in a great voice saying, “This is My beloved Son, in whom I am well pleased” (Matthew 3:17). Intercede for us O John the Baptist, that He may forgive us our sins. Amen.</td>
                    <td class="arabic">أنت هو كلمة الله الآب الذي تجسد من أجلنا حتى خلصنا . أنت هو يوحنا ابن زكريا الكاهن أمين إسرائيل. وهو المسيح ابن الله ضابط الكل. الذي خلق السموات والأرض كلها. أنت تعمد الجميع بالماء بمعمودية التوبة لغفران الخطايا. وهو يعمد بالروح القدس والنار الذي بيده الرفش يطهر أهراءه انت الذي ولدتك العجوز العاقر في كبرها وعداً من الرب وهو الذي ولدته الفتاة العذراء وبتوليتها لم تنحل. انت هو كوكب الصبح . أنت هو إيليا الآتي كأنباء الكتب أنت هو مبكت هيرودس الملك وهو مبكت العالم من أجل الخطية. أنت الذي أخذ هيرودس رأسك وهو المصلوب عنا لخلاصنا بالحقيقة استحققت نعمة عظيمة أيها المعمد يوحنا السابق لأنك عمدت سيدك في الأردن ووضعت يدك على رأسه. ونظرت الروح نازلاً عليه مثل جسم حمامة. والأب صرخ بصوت عظيم قائلاً هذا هو ابني الحبيب الذي به سررت. اشفع فينا أيها السابق يوحنا المعمداني ليغفر لنا خطايانا آمين.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">Hail to John, son of Zechariah. Hail to the announcer of Immanuel.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲍⲁⲭⲁⲣⲓⲁⲥ: ⲭⲉⲣⲉ ⲡⲓⲣⲉϥϩⲓⲱⲓϣ: ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                    <td class="arabic">السلام ليوحنا بن زكريا. السلام للمبشر بعمانوئيل.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Hail to the prophet, the son of the barren one. The joy of Jordan, and the praise of the wilderness.</td>
                    <td class="coptic">Ⲭⲉⲣⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀ϯϭⲣⲏⲛ: ⲫ̀ⲣⲁϣⲓ ⲙ̀ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ: ⲡ̀ⲑⲉⲗⲏⲗ ⲙ̀ⲡ̀ϣⲁϥⲉ.</td>
                    <td class="arabic">السلام للنبي ابن العاقر فرح الأردن وتهليل البرية.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Hail to the earthly who became heavenly, and came from the cousin of the Virgin Mary. Hail to the baptizer who came to us with the harbor of salvation; the One who is Immanuel. Hail to the virgin dwelling in the wilderness, revealing to people the glory of God.</td>
                    <td class="arabic">السلام للأرضي الذي صار سمائياً ووجد من نسيبة السيدة العذراء السلام للصابغ الذي أتي لنا بميناء الخلاص الذي أعلم الناس بمجد الله.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="north">
                    <td class="english">Hail to the dove that was called upon the mountain. Indeed, the deer leap, and the beasts rejoice. Hail to the one who was worthy to place His hand boldly on the Head of our Savior.</td>
                    <td class="arabic">السلام للحمامة التي دعاها على الجبل. أن الأيائل تقفز والوحوش تفرح. السلام الذي استحق وتجاسر أن يضع يده على رأس مخلصنا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">Hail to the one who witnessed the coming of the Lord manifested in the flesh at the Jordan. Hail to the one who heard the voice of the Father descending from Heaven, bearing witness to the Son.</td>
                    <td class="arabic">السلام للذي رأي مجيء الرب ظاهراً بالجسد على الأردن السلام الذي سمع صوت الاب نازلاً من السماء شاهداً على الابن .</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Hail to the one who saw the Holy Spirit descending upon the Word like a dove, and the voice of the Father crying out from Heaven: ‘This is my beloved Son, in whom I am well pleased.</td>
                    <td class="arabic">السلام للذي رأي روح القدس نازلاً على الكلمة مثل حمامة وصوت الأب صارخاً من السماء هذا هو ابني الحبيب الذي به سررت.</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">Intercede on our behalf, O forerunner and baptizer, John the Baptist, that the Lord may forgive us our sins. Amen.</td>
                    <td class="arabic">أشفع فينا أيها السابق الصابغ يوحنا المعمدان ليغفر لنا الرب خطايانا آمين.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const adamPostMidnightPraiseExposition = {
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Adam Exposition At The Midnight Praise Conclusion">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Adam Exposition At The Midnight Praise Conclusion
                <span class="arabic-caption">طرح ادام في ختام صلاة نصف الليل في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">A great wonder was revealed to the shepherds that night.</td>
                    <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲁⲥⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ: ⲉ̀ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ϧⲉⲛ ⲡⲓⲉ̀ϫⲱⲣϩ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
                    <td class="arabic">ظهرت أعجوبة عظيمة للرعاة في تلك الليلة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">An angel of the Lord spoke to them, saying, "Today, a Savior is born to you in Bethlehem."</td>
                    <td class="coptic">Ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ Ⲡⲟ̅ⲥ̅: ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ: ϫⲉ ⲁⲩⲙⲓⲥⲓ ⲛⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟⲩ: ⲛ̀ⲟⲩⲤⲱⲧⲏⲣ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
                    <td class="arabic">وتكلم ملاك الرب معهم قائلاً. ولد لكم اليوم مخلص في بيت لحم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Hear the Magi proclaiming the birth of Christ in Jerusalem, saying, "Where is He who has been born King of the Jews? For we have seen His star in the East and have come to worship Him." What they said, they did, for they arose and journeyed, and behold, the star that guided them came to rest over Bethlehem. When they found the Child, they fell down and worshiped Him, saying: "Glory to God in the highest, peace on earth, and goodwill toward men."</td>
                    <td class="arabic">اسمعوا المجوس يبشرون بمولد المسيح في أورشليم. قائلين اين هو المولود ملك اليهود. لأننا رأينا نجمه وأتينا لنسجد له. هذا الذي قالوه وقاموا وذهبوا ها هو النجم الذي أتي بهم إلى بيت لحم. ولما وجدوا الطفل سجدوا له قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة،</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">When King Herod heard of the Magi and their departure, he ordered the massacre of all the children in Bethlehem and its surrounding regions. Yet, all the souls bound by the hand of Satan were freed through the birth of Christ, who bound the adversary and all his hosts, casting them out and crushing them beneath His power.</td>
                    <td class="arabic">ولما سمع هيرودس الملك عن المجوس أنهم مضوا. أمر ان يقتلوا الأطفال الذين في بيت لحم وكل تخومها. كل النفوس المرتبطة بيد الشيطان عتقت بميلاد المسيح. الذي ربط العدو وكل شياطينه. وطرحهم خارجاً وسحقهم.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">Who can declare the glory of this great joy that has come to the world today? Our Savior and King, Christ, has been born to redeem the world from their sins.</td>
                    <td class="arabic">من يقدر ان ينطق بمجد هذا الفرح العظيم الذي صار اليوم في المسكونة . ولد مخلصنا وملكنا المسيح مخلص العالم من خطاياهم .</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Let us join the angels in praising Him, saying: "Glory to God in the highest, peace on earth, and goodwill toward men." For He has come and saved us, His people. To Him be glory forever. Amen.</td>
                    <td class="arabic">فلنسبحه مع الملائكة قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة، لأنه أتي وخلصنا نحن شعبه. له المجد دائماً.</td>
                </tr>
            </tbody>
        </table>`;
        return html;
    }
};

const watosPostMidnightPraiseExposition = {
    Nativity(tableNumber) {
        const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Nativity Feast Watos Exposition At The Midnight Praise Conclusion">
            <caption id="caption_table_${tableNumber}" class="caption">Nativity Feast Watos Exposition At The Midnight Praise Conclusion
                <span class="arabic-caption">طرح واطس في ختام صلاة نصف الليل في عيد الميلاد</span>
            </caption>
            <tbody>
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Christ is born for us today in the flesh from the Virgin. Let us ascend to the heavens in purity.</td>
                    <td class="coptic">Ⲁⲩⲙⲁⲥ Ⲡⲭ̅ⲥ̅ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ: ⲕⲁⲧⲁ ⲥⲁⲣⲝ ϧⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲙⲁⲣⲉⲛϣⲉⲛⲁⲛ: ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲧ̀ⲫⲉ ϧⲉⲛ ⲟⲩⲧⲟⲩⲃⲟ.</td>
                    <td class="arabic">ولد لنا المسيح اليوم بالجسد من العذراء. فلنمض نحن صاعدين إلى السماء بطهر.</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Arise now, O spiritual ones, children of the Church. Let us go to Bethlehem, the city of King David,</td>
                    <td class="coptic">Ⲧⲉⲛⲑⲏⲛⲟⲩ ⲙ̀ⲫⲟⲟⲩ ⲡ̅ⲛ̅ⲁ̅ⲧⲓⲕⲟⲥ: ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲙⲁⲣⲉⲛϣⲉⲛⲁⲛ ⲉ̀Ⲃⲏⲑⲗⲉⲉⲙ: ⲑ̀ⲃⲁⲕⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ.</td>
                    <td class="arabic">قوموا الآن أيها الروحانيون يا أبناء الكنيسة. لنمضي إلى بيت لحم مدينة الملك داود،</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">To witness the great mystery revealed to us in that holy dwelling. The Lord, who reigns over all and is blessed forever, is wrapped in swaddling clothes and laid in a manger for the animals. The hosts of heaven sing upon the earth, proclaiming this hymn with loud voices: "Glory to God in the highest, peace on earth, and goodwill toward men,"</td>
                    <td class="arabic">لننظر السر العظيم الذي ظهر لنا في ذلك المسكن المقدس. الرب القائم على الكل المبارك إلى الأبد. ملفوفاً بالخرق موضوعاً في مذود البهائم. جنود السماء يرتلون على الأرض ويقولون هذه التسبحة صارخين قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">For He has come and saved us, His people. The Lord is born today in Bethlehem of Judea, the land of Ephrathah, as the prophet foretold. David the psalmist cries out, saying: "Behold, we heard of it in Ephrathah and found it in the fields of the woods." He who looses the bonds of sin was wrapped in swaddling clothes when He was born as a man. Let us praise Him, saying: "Glory to God in the highest, peace on earth, and goodwill toward men."</td>
                    <td class="arabic">لأنه أتي وخلصنا نحن شعبه. ولد الرب اليوم في بيت لحم اليهودية أرض أفراتا كقول النبي. وكان داود المرتل يصرخ قائلاً: ها قد سمعناها في أفراتا ووجدناها في مزارع الغياض. ولما ولد كإنسان لف بالخرق من يحل ربط الخطية. فلنسبحه قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">All creation is illumined today with a great light because of this wondrous sight revealed to us. The incorporeal One has become incarnate. He was born of the Virgin like any man, yet He is God who appeared in the flesh, the Lord incarnate. The Magi saw His star and came from their distant lands. They offered Him their gifts, and He forgave their sins. The heavenly hosts sing on earth, saying: "Glory to God in the highest, peace on earth, and goodwill toward men."</td>
                    <td class="arabic">أبصرت كل البرية اليوم وهي مستضيئة بضياء عظيم من أجل هذا المنظر العظيم الذي قد ظهر لنا. أن الغير المتجسد قد تجسد. وولد من العذراء مثل كل أحد. وهو الإله ظهر في الجسد. رب متأنس. فأبصر نجمه المجوس فأتوا من كورهم. وقدموا له قرابينهم وغفر لهم خطاياهم . جنود السماء يسبحون على الأرض ويقولون: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">Come today, all you peoples of the earth, and behold this mystery, for God the Word has been born for us from the Virgin without human seed. He has come and saved us. Let us praise Him with the angels, offering this heavenly hymn: "Glory to God in the highest, peace on earth, and goodwill toward men."</td>
                    <td class="arabic">تعالوا كلكم اليوم يا شعوب الأرض. وانظروا هذا السر. لأنه قد ولد لنا الله الكلمة من العذراء بغير زرع بشر. أتي وخلصنا. فلنسبحه مع الملائكة بهذه التسبحة السمائية قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة.</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="north">
                    <td class="english">Peace be to Bethlehem of Judea! Rejoice with gladness, for from you has sprung the Water of Life, Jesus Christ, the incarnate Word. He was born of Mary in a wondrous manner. For this, we praise Him with the angels, saying: "Glory to God in the highest, peace on earth, and goodwill toward men."</td>
                    <td class="arabic">السلام لبيت لحم اليهودية. أفرحي بتهليل. لأنه قد نبع منك ماء الحياة يسوع المسيح الكلمة المتجسد. وولد من مريم بأمر عجيب. من أجل هذا نسبحه مع الملائكة قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة،</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">All the Scriptures proclaimed by the prophets concerning the coming of Christ are fulfilled today in Bethlehem, the city of King David. The prophet sings, saying: "Beautiful is His splendor in Zion; God has appeared, and the Lord of Hosts comes with the sound of the trumpet." Let us praise Him with the angels, saying: "Glory to God in the highest, peace on earth, and goodwill toward men."</td>
                    <td class="arabic">كل الكتب التي سبقت بقولها الأنبياء لأجل مجيء المسيح قد كملت اليوم في بيت لحم مدينة الملك داود يسبح النبي قائلاً: حسن بهائه في صهيون. والله يأتي ظاهراً. ورب القوات بصوت القرن. فلنسبحه مع الملائكة قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة،</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">Mary the Virgin and Joseph the carpenter were in that place, taking refuge like strangers. She gave birth to her firstborn Son and laid Him in a manger for the animals. The angels descended from heaven and mingled with humanity, crying out, saying: "Glory to God in the highest, peace on earth, and goodwill toward men," for He has come and saved us, His people. To Him be glory forever. Amen.</td>
                    <td class="arabic">مريم العذراء ويوسف النجار كانا في الموضع ملتجئين مثل أناس غرباء. فولدت أبنها البكر وأرقدته في مذود البهائم. ونزل الملائكة من السماء واختلطوا بالبشر صارخين قائلين: المجد لله في الأعالي وعلي الارض السلام وبالناس المسرة، لأنه أتي وخلصنا نحن شعبه . له المجد دائماً.</td>
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

function getSeasonalExposition(expositionType, season, tableNumber) {
    let html = "";
    const expositionTypes = {
        FirstCanticle: firstCanticleExposition,
        SecondCanticle: secondCanticleExposition,
        ThirdCanticle: thirdCanticleExposition,
        FourthCanticle: fourthCanticleExposition,
        Commemoration: postCommemorationExposition,
        postWatosTheotokia: postWatosTheotokiaExposition,
        postAdamTheotokia: postAdamTheotokiaExposition,
        adamPostSaturdayTheotokia: adamPostSaturdayTheotokiaExposition,
        adamPostSundayTheotokia: adamPostSundayTheotokiaExposition,
        adamPostMidnightPraise: adamPostMidnightPraiseExposition,
        watosPostMidnightPraise: watosPostMidnightPraiseExposition
    };

    const normalizedSeason = normalizeSeason(season);

    if (expositionTypes[expositionType]) {
        const exposition = expositionTypes[expositionType];

        if (exposition[normalizedSeason]) {
            const expositionFunction = exposition[normalizedSeason];
            html = expositionFunction(tableNumber);
        } else {
            console.log(`Exposition ${expositionType} for ${season} is not available.`);
        }
    }

    return html;
}


export { getSeasonalExposition };
    


