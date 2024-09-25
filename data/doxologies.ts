import { cross } from './repeatedPrayers';

function kiahkDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology of Advent for the Virgin Ⲕⲉ ⲅⲁⲣ">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology of Advent for the Virgin <br /><span
                class="coptic-caption">Ⲕⲉ ⲅⲁⲣ</span>
                <span class="arabic-caption">ذوكصولوجية كيهك للعذراء الأولى</span>
                </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >For when I speak about you, O cherubic
                    throne, my tongue never wearies, from blessing you.</td>
                <td class="coptic" >Ⲕⲉ ⲅⲁⲣ ⲁⲓϣⲁⲛⲥⲁϫⲓ ⲉⲑⲃⲏϯ: ⲱ̀ ⲡⲓϩⲁⲣⲙⲁ
                    ⲛ̀ⲭⲉⲣⲟⲩⲃⲓⲙⲓⲕⲟⲛ: ⲡⲁⲗⲁⲥ ⲛⲁϧⲓⲥⲓ ⲁⲛ ⲉ̀ⲛⲉϩ: ⲧⲉⲛⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ⲙ̀ⲙⲟ.</td>
                <td class="arabic">لأني إذا ما تكلمت من أجلك أيتها المركبة الشاروبيمية فأن لساني لا يتعب أبداً في
                    تطويبك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >For indeed I will go, tothe house
                    of David, to acquire a voice, by which I can speak of your honor.</td>
                <td class="coptic" >Ϫⲉ ⲟⲛⲧⲱⲥ ⲅⲁⲣ ϯⲛⲁϣⲉⲛⲏⲓ: ϣⲁ ⲛⲓⲁ̀ⲩⲗⲉⲏⲟⲩ ⲛ̀ⲧⲉ
                    ⲡ̀ⲏⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: ⲛ̀ⲧⲁϭ̀ⲓ ⲛ̀ⲟⲩⲥ̀ⲙⲏ ⲉ̀ⲃⲟⲗϩⲓⲧⲟⲧϥ: ⲉⲑⲣⲓⲥⲁϫⲓ ⲙ̀ⲡⲉⲧⲁⲓⲟ.</td>
                <td class="arabic">لأنني أمضي حقاً إلي ديار بيت داود لأحظي بصوت به أنطق بكرامتك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >For God has stood, at the borders of
                    Judea, and joyfully granted His voice, which the tribe of Judah accepted.</td>
                <td class="coptic" >Ϫⲉ ⲁ̀ Ⲫϯ ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ: ϧⲉⲛ ⲛⲓⲑⲱϣ ⲛ̀ⲧⲉ
                    ϯⲒⲟⲩⲇⲉⲁ̀: ⲁϥϯ ⲛ̀ⲧⲉϥⲥ̀ⲙⲏ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ⲁ̀ⲧ̀ⲫⲩⲗⲏ ⲛ̀Ⲓⲟⲩⲇⲁ ϣⲟⲡϥ ⲉ̀ⲣⲟⲥ.</td>
                <td class="arabic">لأن الله وقف في حدود اليهودية وأعطي صوته بتهليل فقبلة سبط يهوذا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >The tribe of Judah is the Virgin, who
                    gave birth to our Savior, and after His birth, she remained a virgin.</td>
                <td class="coptic" >Ⲧⲫⲩⲗⲏ ⲛ̀Ⲓⲟⲩⲇⲁ ⲧⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ
                    ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲥⲙⲁⲥϥ: ⲁⲥⲟ̀ϩⲓ ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                <td class="arabic">العذراء هي سبط يهوذا التي ولدت مخلصنا وبعد ولادته أيضاً بقيت عذراء.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Along with the voice, of Gabriel the
                    Angel, we send you greetings, O Mary the Mother of God.</td>
                <td class="coptic" >Ⲉⲃⲟⲗ ⲅⲁⲣ ϩⲓⲧⲉⲛ ϯⲫⲱⲛⲏ: ⲛ̀ⲧⲉ Ⲅⲁⲃⲣⲓⲏⲗ
                    ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲧⲉⲛϯ ⲛⲉ ⲙ̀ⲡⲓⲭⲉⲣⲉⲧⲓⲥⲙⲟⲥ: ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ.</td>
                <td class="arabic">وبصوت الملاك غبريال نٌعطيك السلام يا والدة الإله مري.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >Hail to you from God, hail to you from
                    Gabriel, hail to you from us, we magnify you saying "Hail to you."</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲫϯ: ⲭⲉⲣⲉ ⲛⲉ ⲉ̀ⲃⲟⲗ
                    ϩⲓⲧⲉⲛ Ⲅⲁⲃⲣⲓⲏⲗ: ⲭⲉⲣⲉ ⲛⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲉⲛ: ϫⲉ ⲭⲉⲣⲉ ⲛⲉ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ.</td>
                <td class="arabic">السلام لك من قبل الله السلام لك من قبل غبريال السلام لك من قبلنا نعظمك قائلين
                    السلام لك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >The holy angel Gabriel, announced glad
                    tidingsto the Virgin, and after the greeting, he strengthened her saying.</td>
                <td class="coptic" >Ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ ̅ⲉ̅ⲑ̅ⲩ Ⲅⲁⲃⲣⲓⲏⲗ: ⲁϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ
                    ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓⲁ̀ⲥⲡⲁⲥⲙⲟⲥ: ⲁϥⲧⲁϫⲣⲟ ⲙ̀ⲙⲟⲥ ϧⲉⲛ ⲡⲉϥⲥⲁϫⲓ.</td>
                <td class="arabic">غبريال الملاك الطاهر بشر العذراء وبعد أن أهداها السلام قواها بقولة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >"Do not be afraid Mary, for you have
                    found favor with God, behold you shall conceive, and bring forth a Son."</td>
                <td class="coptic" >Ϫⲉ ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ Ⲙⲁⲣⲓⲁⲙ: ⲁ̀ⲣⲉϫⲓⲙⲓ ⲅⲁⲣ
                    ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ: ϧⲁⲧⲉⲛ Ⲫϯ ϩⲏⲡⲡⲉ ⲅⲁⲣ ⲧⲉⲣⲁⲉ̀ⲣⲃⲟⲕⲓ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲙⲓⲥⲓ ⲛ̀ⲟⲩϢⲏⲣⲓ.</td>
                <td class="arabic">لا تخافي يا مريم لأنك قد وجدت نعمة عند الله ها ستحبلين وتلدين إبناً.</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >"And the Lord God will give Him, the
                    throne of His father David, and He will reign over the house of Jacob, forever and ever."</td>
                <td class="coptic" >Ⲉϥⲉ̀ϯ ⲛⲁϥ ⲛ̀ϫⲉ Ⲡ̅ⲟ̅ⲥ Ⲫϯ: ⲙ̀ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ
                    Ⲇⲁⲩⲓⲇ ⲡⲉϥⲓⲱⲧ: ϥ̀ⲛⲁⲉ̀ⲣⲟⲩⲣⲟ ⲉ̀ϫⲉⲛ ⲡ̀ⲏⲓ ⲛ̀Ⲓⲁⲕⲱⲃ: ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">ويعطيه الرب الإله كرسي داود أبيه. ويملك علي بيت يعقوب إلي أبد الأبد.</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english" >Therefore at all times, we glorify you
                    asTheotokos, ask the Lord on our behalf, that He may forgive us our sins.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲉ: ϩⲱⲥ Ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲛ̀ⲥⲏⲟⲩ
                    ⲛⲓⲃⲉⲛ: ⲙⲁϯϩⲟ ⲉ̀Ⲡ̅ⲟ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">من اجل هذا نمجدك كوالدة الاله كل حين إسألي الرب عنا ليغفر لنا خطايانا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english" >Hail to you O Virgin, the right and true
                    queen, hail to the pride of our race, who boreto usEmmanuel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ
                    ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا
                    عمانوئيل.</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english" >We ask you to remember us, O our faithful
                    advocate, before our Lord Jesus Christ, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁⲣⲉⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>
`;
return html;
}
function kiahk2Doxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="2nd Doxology of Advent for the Virgin Ⲉⲣⲉ ⲡ̀ⲥⲟⲗⲥⲉⲗ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ">
        <caption id="caption_table_${tableNumber}" class="caption">2nd Doxology of Advent for the Virgin <br /><span
                class="coptic-caption">Ⲉⲣⲉ ⲡ̀ⲥⲟⲗⲥⲉⲗ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ</span>
                <span class="arabic-caption">ذوكصولوجية كيهك للعذراء الثانية</span>
                </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >The adornment of the Virgin, Mary the
                    daughter of king David, at the right hand of Jesus Christ, the beloved Son of God.</td>
                <td class="coptic" >Ⲉⲣⲉ ⲡ̀ⲥⲟⲗⲥⲉⲗ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ: Ⲙⲁⲣⲓⲁ ⲧ̀ϣⲉⲣⲓ
                    ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ: ⲥⲁⲟⲩⲓⲛⲁⲙ ⲛ̀Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲡⲓⲙⲉⲛⲣⲓⲧ.</td>
                <td class="arabic">زينتك يا مريم العذراء يا أبنة الملك داود هي عن يمين يسوع المسيح إبن الله الحبيب.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >As king David the Psalmist, has said in
                    the psalms, "Upon the right hand of the throne, did stand the queen."</td>
                <td class="coptic" >Ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ: ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ ϧⲉⲛ
                    ⲡⲓⲯⲁⲗⲙⲟⲥ: ϫⲉ ⲁⲥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲥ ⲛ̀ϫⲉ ϯⲟⲩⲣⲱ: ⲥⲁⲟⲩⲓⲛⲁⲙ ⲙ̀ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ.</td>
                <td class="arabic">كقول داود الملك المرتل في المزامير قامت الملكة عن يمين العرش.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >You are exalted more than the Cherubim, O
                    Mother of the mighty God, and honored more than the Seraphim, in heaven and on earth.</td>
                <td class="coptic" >Ⲧⲉϭⲟⲥⲓ ⲉ̀ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲱ̀ ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫϯ ⲫⲁ
                    ⲡⲓⲁ̀ⲙⲁϩⲓ: ⲧⲉⲧⲁⲓⲏⲟⲩⲧ ⲉ̀ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ.</td>
                <td class="arabic">أنت ارفع من الشاروبيم وأكرم من السارافيم في السماء وعلي الأرض يا أم الله ذي
                    العزة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >Blessed are you O Mary, for you have
                    given birth to the true One, while remaining a virgin, and your virginity is sealed.</td>
                <td class="coptic" >Ⲱⲟⲩⲛⲓⲁϯ ⲛ̀ⲑⲟ Ⲙⲁⲣⲓⲁ: ϫⲉ ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲙ̀ⲡⲓ
                    Ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ: ⲉ̀ⲣⲉⲟ̀ϩⲓ ⲉ̀ⲣⲉⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                <td class="arabic">طوباك أنتِ يا مريم لأنك ولدت (الإله) الحقيقي وبتوليتك مختومة وانت باقية عذراء.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >As Isaiah has said, with a voice of joy,
                    "Behold a young Virgin will conceive, and give birth to Emmanuel."</td>
                <td class="coptic" >Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲏⲥⲁⲏ̀ⲁⲥ ϧⲉⲛ
                    ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ϫⲉ ⲓⲥ ⲁ̀ⲗⲟⲩ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">كما قال أشعياء بصوت التهليل ها فتاه عذراء ستلد لنا عمانوئيل.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >We magnify you every day, saying with
                    Gabriel, "Hail to you O full of grace, the Lord is with you."</td>
                <td class="coptic" >Ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ ⲙ̀ⲙⲏⲛⲓ ⲙ̀ⲙⲏⲛⲓ: ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲉⲙ
                    Ⲅⲁⲃⲣⲓⲏⲗ: ϫⲉ ⲭⲉⲣⲉ ⲕⲉⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁ ⲥⲟⲩ.</td>
                <td class="arabic">نعظمك كل يوم قائلين مع غبريال أفرحي يا ممتلئة نعمة الرب معكِ.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >Hail to you O Virgin, the right and true
                    queen, hail to the pride of our race, who bore to us Emmanuel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ
                    ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا
                    عمانوئيل.</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >We ask you to remember us, O our
                    faithfuladvocate, before our Lord Jesus Christ, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲉⲡⲉⲛⲙⲉⲩⲓ̀: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>
`;
return html;
}
function midnightDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;"
        title="Doxology of Midnight Praise for the Virgin Ⲧⲉⲙⲉⲧⲛⲓϣϯ ⲱ̀  Ⲙⲁⲣⲓⲁ">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology of Midnight Praise for the Virgin <br /><span
                class="coptic-caption">Ⲧⲉⲙⲉⲧⲛⲓϣϯ ⲱ̀ Ⲙⲁⲣⲓⲁ</span>
                <span class="arabic-caption">ذوكصولوجية تسبحة نصف اليل للعذراء</span>
                </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Your greatness O Mary, the undefiled
                    Virgin, is likened to the height of the palm tree, spoken of by Solomon.</td>
                <td class="coptic" >Ⲧⲉⲙⲉⲧⲛⲓϣϯ ⲱ̀ Ⲙⲁⲣⲓⲁ: ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ:
                    ⲥ̀ⲟⲛⲓ ⲙ̀ⲡ̀ⲓϭⲓⲥⲓ ⲙ̀ⲡⲓⲃⲉⲛⲓ: ⲉ̀ⲧⲁ Ⲥⲟⲗⲟⲙⲱⲛ ⲥⲁϫⲓ ⲉⲑⲃⲏⲧϥ.</td>
                <td class="arabic">عظمتك يامريم العذراء الغير الدنسة تشبه علو النخلة التى تكلم عنها سليمان.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >You are the spring of living water, that
                    flows from Lebanon, for out of you sprang unto us, the grace of the Divinity.</td>
                <td class="coptic" >Ⲛ̀ⲑⲟ ⲧⲉ ϯⲙⲟⲩⲙⲓ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ⲱⲛϧ: ⲉⲧϧⲁϯ
                    ⲙ̀ⲡⲓⲖⲓⲃⲁⲛⲟⲥ: ⲉ̀ⲧⲁ ⲡⲓϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲛⲟⲩϯ: ⲃⲉⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
                <td class="arabic">أنت ينبوع ماء الحياة الفائض من لبنان التى نبعت لنا منه نعمة اللاهوت.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >You gave birth to Emmanuel, out of your
                    virginal womb, and he has made us heirs, to the Kingdom of heaven.</td>
                <td class="coptic" >Ⲁⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ϧⲉⲛ ϯⲙⲉⲧⲣⲁ
                    ⲙ̀ⲡⲁⲣⲑⲉⲛⲓⲕⲓ: ⲁϥⲁⲓⲧⲉⲛ ⲛ̀ⲕⲗⲏⲣⲟⲛⲟⲙⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">ولدت لنا عمانوئيل من أحشائك البتول وصيرنا وارثين في ملكوت السموات.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >According to the promise, He promised to
                    our father, King David the Patriarch, He came and fulfilled to us.</td>
                <td class="coptic" >Ⲕⲁⲧⲁ ⲡⲓⲱϣ ⲉⲧⲁϥⲱϣ ⲙ̀ⲙⲟϥ: ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ
                    ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲉⲧⲉ ⲫⲁⲓ ⲡⲉ ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ: ⲁϥⲓ̀ ⲁϥϫⲟⲕϥ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
                <td class="arabic">كالوعد الذى وعد به أبانا رئيس الآباء الذى هو الملك داود أتى وأكمله لنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Hail to you O Virgin, the right and true
                    Queen, Hail to the pride of our race, whobore to us Emmanuel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ
                    ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا
                    عمانوئيل.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >We ask you to remember us, O our faithful
                    advocate, before our Lord Jesus Christ that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ ⲠⲓⲬ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>
`;
return html;
}

function archangelMichaelDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for Archangel Michael">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for Archangel Michael
            <span class="arabic-caption">ذوكصولوجية لرئيس الملائكة ميخائيل</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english">Michael the head of the heavenly, he is the first, among the angelic hosts,
                    serving before the Lord.</td>
                <td class="coptic" >Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲛ̀ⲑⲟϥ ⲉⲧⲟⲓ
                    ⲛ̀ϣⲟⲣⲡϧⲉⲛ ⲛⲓⲧⲁⲝⲓⲥ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲉϥϣⲉⲙϣⲓ ⲙ̀ⲡⲉⲙⲑⲟ ⲙ̀ⲡ⳪.</td>
                <td class="arabic" >ميخائيل رئيس السمائيين هو الأول فى الطقوس
                    الملائكية يخدم أمام الرب.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english">Wherefore God sends unto us, His mercy and His compassion, through the
                    supplications of Michael, the great archangel.</td>
                <td class="coptic" >Ϣⲁⲣⲉ Ⲫϯ ⲟⲩⲱⲣⲡ ⲛⲁⲛ: ⲛ̀ⲛⲉϥⲛⲁⲓ ⲛⲉⲙ
                    ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ ϩⲓⲧⲉⲛ ⲛⲓϯϩⲟ ⲛ̀ⲧⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.</td>
                <td class="arabic" >أن الله يرسل لنا مراحمه ورأفاته بسؤال
                    ميخائيل رئيس الملائكة العظيم.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english">The harvest is perfected, through the prayers of Michael, for he is near God,
                    asking Him for us.</td>
                <td class="coptic" >Ϣⲁⲩϫⲱⲕ ⲉⲃⲟⲗ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲣⲡⲟⲥ: ϩⲓⲧⲉⲛ ⲛⲉⲛⲧⲱⲃϩ
                    ⲙ̀Ⲙⲓⲭⲁⲏⲗ ϫⲉ ⲛ̀ⲑⲟϥ ⲉⲧϧⲉⲛⲧ ⲉϧⲟⲩⲛ ⲉⲪϯ: ⲉϥϯϩⲟ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ.</td>
                <td class="arabic" >وتكمل الأثمار بطلبات ميخائيل لأنه قريب إلى
                    الله يسأل عنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english">All good honor, and every perfect gift, comes to us from on high, from the
                    Father of Light.</td>
                <td class="coptic" >Ⲧⲁⲓⲟ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁⲛⲉⲩ: ⲛⲉⲙ ⲇⲱⲣⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϫⲏⲕ
                    ⲉⲃⲟⲗ ⲉⲩⲛⲏⲟⲩ ⲛⲁⲛ ⲉⲃⲟⲗ ⲙ̀ⲡ̀ϣⲱⲓ: ϩⲓⲧⲉⲛ ⲫⲓⲱⲧ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic" >كل عطية صالحة وكل موهبة تامة إنما تهبط لنا
                    من فوق من عند أبى الأنوار.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english">Let us praise and glorify, and worship the Holy, and Coessential Trinity, who
                    endures forever.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛϩⲱⲥ ⲛ̀ⲧⲉⲛϯⲱⲟⲩ: ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲛ̀ϯⲧⲣⲓⲁⲥ
                    ⲉˉⲑˉⲩˉ ⲉⲧⲟⲓ ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ: ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic" >فلنسبح ونمجد ونسجد للثالوث المقدس المساوى
                    الدائم إلى الأبد.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">Intercede on our behalf, O the holy archangel, Michael the head of the heavenly,
                    that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                    ⲉˉⲑˉⲩˉ Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.${cross}</td>
                <td class="arabic" >إشفع فينا يارئيس الملائكة الطاهر ميخائيل
                    رئيس السمائيين ليغفر لنا خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function heavenlyDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for the Heavenly">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for the Heavenly
            <span class="arabic-caption">ذوكصولوجية للسمائيين</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Seven archangels, praising as they stand,
                    before the Pantocrator, serving the hidden mystery.</td>
                <td class="coptic" >Ⲍ̅ ⲛ̀ⲁⲣⲭⲏ ⲁⲅⲅⲉⲗⲟⲥ : ⲥⲉⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ
                    ⲉⲩⲉⲣϩⲩⲙⲛⲟⲥ : ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : ⲉⲩϣⲉⲙϣⲓ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲧϩⲏⲡ.</td>
                <td class="arabic">سبعة رؤساء ملائكة وقوف يسبحون أمام الضابط الكل يخدمون السر الخفى.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >Michael is the first, Gabriel is the
                    second, Rafael is the third, a symbol of the Trinity.</td>
                <td class="coptic" >Ⲙⲓⲭⲁⲏⲗ ⲡⲉ ⲡⲓϩⲟⲩⲓⲧ : Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲉ ⲡⲓⲙⲁϩ
                    ⲥ̀ⲛⲁⲩ: Ⲣⲁⲫⲁⲏⲗ ⲡⲉⲡⲓⲙⲁϩ ϣⲟⲙⲧ: ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ.</td>
                <td class="arabic">ميخائيل هو الأول. غبريال هو الثانى. رافائيل هو الثالث. كمثال الثالوث.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >Suriel Sedakiel, Sarathiel and Ananiel,
                    the great and holy luminaries, entreating Him for the creation.</td>
                <td class="coptic" >Ⲥⲟⲩⲣⲓⲏⲗ Ⲥⲉⲇⲁⲕⲓⲏⲗ : Ⲥⲁⲣⲑⲓⲏⲗ ⲛⲉⲙ Ⲁⲛⲁⲛⲓⲏⲗ :
                    ⲛⲁⲓⲛⲓϣϯ ⲛ̀ⲣⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉⲑⲟⲩⲁⲃ : ⲛⲏⲉⲧⲧⲱⲃϩ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲓⲥⲱⲛⲧ.</td>
                <td class="arabic">سوريال سداكيال سراتيال وآنانيال هؤلاء المنيرون العظماء الأطهار يطلبون منه عن
                    الخليقة</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >The Cherubim and Seraphim, the
                    thrones, dominions and powers, the four incorporeal creatures, carrying the throne of God.
                </td>
                <td class="coptic" >Ⲛⲓⲭⲉⲣⲟⲃⲓⲙ ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ
                    ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ : ⲡⲓϥ̀ⲧⲟⲩ ⲛ̀ⲍⲱⲟⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ ⲛ̀Ⲑⲉⲟⲥ.</td>
                <td class="arabic">الشاروبيم والسارافيم الكراسي والأرباب والقوات وال ٤ الحيوانات الغير المتجسدين
                    الحاملون مركبة الله</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >The twenty four presbyters, in the Church
                    of the firstborn, praise Him without ceasing, proclaiming and saying.</td>
                <td class="coptic" >Ⲡⲓϫⲟⲧ ϥ̀ⲧⲟⲩ ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ϧⲉⲛ
                    ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲓϣⲟⲣⲡ ⲙ̀ⲙⲓⲥⲓ : ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲙⲉⲧ ⲁⲑⲧⲙⲟⲩⲛⲕ : ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.
                </td>
                <td class="arabic">ال ٢٤ قسيساً في كنيسة الأبكار يسبحونه بلا فتورصارخين قائلين :</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >Holy God, heal the sick, Holy Mighty, O
                    Lord repose those who are asleep.</td>
                <td class="coptic" >Ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ : ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ :
                    ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ.</td>
                <td class="arabic">قدوس الله. المرضي إشفهم. قدوس القوى. الراقدين يارب نيحهم.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >Holy Immortal, bless Your
                    inheritance, may Your mercy and peace, be a fortress unto Your people.</td>
                <td class="coptic" >̀ Ⲁⲅⲓⲟⲥ ̀ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲥ̀ⲙⲟⲩ
                    ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀ : ⲙⲁⲣⲉ ⲡⲉⲕⲛⲁⲓ ⲛⲉⲙ ⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲟⲓ ⲛ̀ⲥⲟⲃⲧ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ.</td>
                <td class="arabic">قدوس الذى لا يموت بارك ميراثك. ولتكن رحمتك وسلامك حصناً لشعبك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >Holy Holy, Holy O Lord of Hosts, heaven
                    and earth are full of, Your glory and honor.</td>
                <td class="coptic" >Ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ : ⲭ̀ⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ
                    ⲥⲁⲃⲁⲱⲑ : ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ̀.</td>
                <td class="arabic">قدوس قدوس قدوس رب الصاباؤوت. السماء والأرض مملوئتان من مجدك وكرامتك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >And when they say "Alleluia,&rdquo; the
                    heavenly respondsaying, "Holy Amen Alleluia, Glory be to our God."</td>
                <td class="coptic" >Ⲁⲩϣⲁⲛϫⲟⲥ ⲙ̀ⲡⲓ ⲁⲗⲗⲏⲗⲟⲓⲁ : ϣⲁⲣⲉ ⲛⲁⲛ ⲛⲓⲫⲏⲟⲩⲓ̀
                    ⲟⲩⲱϩ ⲙ̀ⲙⲱⲟⲩ : ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲙⲏⲛ ⲁⲗⲗⲏⲗⲟⲓⲁ : ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ.</td>
                <td class="arabic">إذا ما قالوا الليلويا يتبعهم السمائيون قائلين قدوس أمين الليلويا. المجد هو لإلهنا
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english" >Intercede on our behalf, O angelic
                    armies, and heavenly orders, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲓⲥⲧⲣⲁⲧⲓⲁ̀
                    ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر لنا خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function apostlesDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for the Apostles">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for the Apostles
            <span class="arabic-caption">ذوكصولوجية للرسل</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Our Lord Jesus Christ, has chosen His
                    apostles,Peter and Andrew, John and James.</td>
                <td class="coptic" >Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲁϥⲥⲱⲧⲡ
                    ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲉ̀ⲧⲉ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲁⲛⲇ̀ⲣⲉⲁⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ.</td>
                <td class="arabic">الرب يسوع المسيح اختار رسله. وهم بطرس واندراوس. ويوحنا ويعقوب.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >And the rest Philip and Matthew,
                    Bartholomew and Thomas, James the son of Alphaeus, and Simon the Canaanite.</td>
                <td class="coptic" >Ⲗⲟⲓⲡⲟⲛ Ⲫⲓⲗⲓⲡⲡⲟⲥ ⲛⲉⲙ Ⲙⲁⲑⲉⲟⲥ: Ⲃⲁⲣⲑⲟⲗⲟⲙⲉⲟⲥ
                    ⲛⲉⲙ Ⲑⲱⲙⲁⲥ : Ⲓⲁⲕⲱⲃⲟⲥ ⲛ̀ⲧⲉ Ⲁⲗⲫⲉⲟⲥ : ⲛⲉⲙ Ⲥⲓⲙⲱⲛ ⲡⲓⲕⲁⲛⲁⲛⲉⲟⲥ.</td>
                <td class="arabic">وفيلبس ومتى وبرثلماوس وتوما ويعقوب بن حلفي وسمعان القانوى.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >Thaddeus and Matthias, Paul Mark and
                    Luke, and the rest of disciples, who followed our Savior.</td>
                <td class="coptic" >Ⲑⲁⲇⲇⲉⲟⲥ ⲛⲉⲙ Ⲙⲁⲧⲑⲓⲁⲥ: Ⲡⲁⲩⲗⲟⲥ ⲛⲉⲙ
                    Ⲙⲁⲣⲕⲟⲥ ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ : ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ : ⲛⲏⲉⲧⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲡⲉⲛⲥⲱⲧⲏⲣ.</td>
                <td class="arabic">وتداوس ومتياس وبولس ومرقس ولوقا. وبقية التلاميذ الذين تبعوا مخلصنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >Matthias who was chosen, in place of
                    Judas, all of them and the rest, followed the Master.</td>
                <td class="coptic" >Ⲙⲁⲧⲑⲓⲁⲥ ⲫⲏⲉⲧ̀ⲁϥϣⲱⲡⲓ : ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ Ⲓⲟⲩⲇⲁⲥ
                    : ⲛⲉⲙ ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲡⲥ̀ⲉⲡⲓ : ⲛⲏⲉ̀ⲧⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲇⲉⲥⲡⲟⲧⲁ.</td>
                <td class="arabic">متياس الذى صار عِوضاً عن يهوذا. وكامل وبقية التلاميذ الذين تبعوا السيد</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Their voices went forth, throughout the
                    face of the whole earth, and their words have reached, the ends of the world.</td>
                <td class="coptic" >Ⲁⲡⲟⲩϧ̀ⲣⲱⲟⲩ ϣⲉⲛⲁϥ ⲉ̀ⲃⲟⲗ: ϩⲓϫⲉⲛ ⲡ̀ϩⲟ
                    ⲙ̀ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ : ⲟⲩⲟϩ ⲛⲟⲩⲥⲁϫⲓ ⲁⲩⲫⲟϩ : ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">خرجت أصواتهم إلي وجه الأرض كلها. وبلغ كلامهم إلي أقطار المسكونة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O my
                    lordsand fathers the Apostles, and the seventy two disciples, that He may forgive us
                    our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲛⲁ⳪
                    ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ⲡⲓϣ̀ⲃⲉ ⲥ̀ⲛⲁⲩ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الرسل والاثنان والسبعون تلميذاً ليغفر لنا
                    خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function stMarkDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for St Mark">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for St Mark
            <span class="arabic-caption">ذوكصولوجية للقديس مرقس</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >O Mark the Apostle, and the
                    Evangelist, the witness of the passion: of the Only-Begotten God.</td>
                <td class="coptic" >Ⲙⲁⲣⲕⲟⲥ
                    ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲡⲓⲙⲉⲑⲣⲉ
                    ϧⲁ ⲛⲓⲙ̀ⲕⲁⲩϩ: ⲛ̀ⲧⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀ⲛⲟⲩϯ.</td>
                <td class="arabic">يا مرقس الرسول والإنجيلى الشاهد لآلام الإله الوحيد</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >You have come and enlightened us,
                    through your Gospel, and taught us the Father and the Son, and the Holy Spirit.</td>
                <td class="coptic" >Ⲁⲕⲓ̀ ⲁⲕⲉⲣⲟⲩⲱⲓⲛⲓ
                    ̀ⲉ̀ⲣⲟⲛ: ϩⲓⲧⲉⲛ
                    ⲡⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ:
                    ⲁⲕ̀ⲧ̀ⲥⲁⲃⲟⲛ ⲙ̀̀ Ⲫⲓⲱⲧ ⲛⲉⲙ ̀ Ⲡϣⲏⲣⲓ : ⲛⲉⲙ
                    Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">أتيتَ وأنرتَ لنا بإنجيلك وعلمتنا الآب والابن والروح القدس</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >You brought us out of the darkness,
                    into the true Light,feeding usthe Bread of Life, that came down from heaven.
                </td>
                <td class="coptic" >Ⲁⲕⲉⲛⲧⲉⲛ ̀ⲉ̀ⲃⲟⲗ
                    ϧⲉⲛ ⲡ̀ⲭⲁⲕⲓ: ⲉ̀ϧⲟⲩⲛ
                    ⲉ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ: ⲁⲕⲧⲉⲙⲙⲟⲛ
                    ⲙ̀ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛ&rsquo;:
                    ̀ⲉ̀ⲧⲁϥ̀ⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ
                    ⲧ̀ⲫⲉ.</td>
                <td class="arabic">وأخرجتنا من الظلمة إلى النور الحقيقى. وأطعمتنا خبز الحياة الذى نزلَ من السماء
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >All the tribes of the earth, were
                    blessed through you, and your words have reached, the ends of the world.</td>
                <td class="coptic" >Ⲁⲩϭⲓⲥ̀ⲙⲟⲩ
                    ⲛ̀̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲕ: ⲛ̀ϫⲉ ⲛⲓⲫⲩⲗⲏ
                    ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲟⲩⲟϩ ⲛⲉⲕⲥⲁϫⲓ ⲁⲩⲫⲟϩ: ϣⲁ
                    ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">تباركَت بكَ كل قبائل الأرض. واقوالكَ بلغت الي اقطار المسكونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Hail to you O martyr, Hail to the
                    Evangelist, Hail to the apostle, Mark the Beholder of God.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ
                    ⲛⲁⲕ ̀ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ:ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ:
                    ⲭⲉⲣⲉ ⲡⲓ̀ⲁ̀ⲡⲟⲥⲧⲗⲟⲥ: Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉ̀ⲱ̀ⲣⲓⲙⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد السلام للإنجيلى.السلام للرسول. مرقس ناظر الإله</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O
                    Beholder of God and Evangelist,Mark the Apostle: that he may forgive us our sins.
                    ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ
                    : ⲱ̀ ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ
                    ̀ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲙⲁⲣⲕⲟⲥ
                    ⲡⲓ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلب من الرب عنا يا ناظر الإله الإنجيلى مرقس الرسول ليغفر لنا خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function stGeorgeDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for St George">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for St George
            <span class="arabic-caption">ذوكصولوجية للشهيد مار جرجس</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Saint George completed, seven whole
                    years, beingjudged daily, by seventy lawless kings.</td>
                <td class="coptic" >Ⲍ̀ˉ̅ ⲛ̀ⲣⲟⲙⲡⲓ
                    ⲁϥϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ : ⲛ̀ϫⲉ
                    ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉ̀ⲣⲉ ⲡⲓϣ̀ⲃⲉ
                    ⲛ̀ⲟⲩⲣⲟ ⲛ̀ⲁ̀ⲛⲟⲙⲟⲥ : ⲉⲩϯϩⲁⲡ ⲉ̀ⲣⲟϥ
                    ⲙ̀ⲙⲏⲛⲓ.</td>
                <td class="arabic">سبع سنين أكملها القديس جيؤرجيوس. و ٧٠ ملكاً منافقين يحكمون عليه كل يوم.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >They could not change his mind, nor his
                    upright faith, nor his great love, for Christ the King.</td>
                <td class="coptic" >˙Ⲙⲡⲟⲩ ϣ̀ⲫⲱⲛϩ ⲙ̀ⲡⲉϥ ⲗⲟⲅⲓⲥⲙⲟⲥ : ⲟⲩⲇⲉ ⲡⲉϥⲛⲁϩϯ
                    ⲉⲧⲥⲟⲩⲧⲱⲛ : ⲟⲩⲇⲉ ⲧⲉϥⲛⲓϣϯ ⲛ̀ⲁ̀ⲅⲁⲡⲏ : ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">ولم يقدروا أن يميلوا أفكاره ولا إيمانه المستقيم ولا عِظم محبته فى الملك المسيح.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >He was singing with David saying, "All
                    the nations surrounded me: but in the Name of Jesus My Lord, I took revenge on them.</td>
                <td class="coptic" >Ⲛⲁϥⲉⲣⲯⲁⲗⲓⲛ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ : ϫⲉ ⲁⲩⲕⲱϯ ⲉ̀ⲣⲟⲓ ⲛ̀ϫⲉ
                    ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ : ⲁⲗⲗⲁ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲛ̀ Ⲓⲏⲥⲟⲩⲥ Ⲡⲁⲛⲟⲩϯ : ⲁⲓϭⲓ ⲙ̀ⲡⲁϭⲓ ⲙ̀ⲡ̀ϣⲓϣ ⲛⲉⲙⲱⲟⲩ.</td>
                <td class="arabic">وكان يرتل مع داود قائلاً أحاط بي جميع الأمم لكن باسم يسوع إلهى انتقمت منهم</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >For great is your honor, O George my lord
                    and prince, for Christ rejoices inyou, in the heavenly Jerusalem.</td>
                <td class="coptic" >Ⲟⲩ ⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲉⲕⲧⲁⲓⲟ̀ : ⲱ̀Ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ
                    Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉ̀ⲣⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲣⲁϣⲓ ⲛⲉⲙⲁⲕ ϧⲉⲛ Ⲓⲏⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ.</td>
                <td class="arabic">عظيمة هي كرامتكَ يا سيدى الملك جيؤرجيوس المسيح يفرح معك فى أورشليم السمائية</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Hail to you O martyr, Hail to the
                    courageous hero, Hail to the struggle-mantled, George my lord and prince.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ
                    ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد السلام للشجاع المجاهد السلام للابس الجهاد سيدى الملك
                    جيؤرجيوس.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >Pray to the Lord on our behalf, O
                    prize-bearer andmartyr, George my lord and prince, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ :
                    ⲱ̀ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲏⲣⲟⲥ : Ⲡⲁ⳪ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلب من الرب عنا. أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر لنا خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function stPhilopatirMercoriosDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology St Philopatir Mercorios">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology St Philopatir Mercorios
            <span class="arabic-caption">ذوكصولوجية للشهيد فيلوباتير مرقوريوس</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Philopateer Mercurius, the strong one of
                    Christ, put on the helmet, and the whole armor of faith.</td>
                <td class="coptic" >Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ :ⲡⲓⲣⲉⲙⲛϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ:
                    ⲁϥϯϩⲓⲱⲧϥ ⲛϯⲡⲁⲛⲟⲡⲗⲓⲁ: ⲛⲉⲙ ⲡⲓϧⲱⲕ ⲧⲏⲣϥ ⲛⲧⲉ ⲡⲓⲛⲁϩϯ.</td>
                <td class="arabic">محب الآب مرقوريوس: القوي بالمسيح: لبس الخوذة: وكل سلاح الإيمان.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >And he took in his hand, the two-edged
                    sword, which the angel of the Lord, placed in his right hand.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲁϥϭⲓ ϧⲉⲛ ⲧⲉϥϫⲓϫ: ⲛϯⲥⲏϥⲓ ⲛⲣⲟ Ⲃ: ⲏⲏⲉⲧⲁ
                    ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲧⲉ Ⲡⲟⲥ ⲧⲁϫⲣⲟⲥ: ϧⲉⲛ ⲧⲉϥϫⲓϫ ⲛⲡⲟⲩⲓⲛⲁⲙ.</td>
                <td class="arabic">وأخذ بيده السيف: ذا الحدين: الذي ثبته ملاك الرب: في يده اليمنى.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >He went to the war, with the strength of
                    Christ, he smote the barbarians, with great wounds.</td>
                <td class="coptic" >Ⲁϥϣⲉⲛⲁϥ ⲉⲡⲓⲡⲟⲗⲉⲙⲟⲥ: ϧⲉⲛ ϯϫⲟⲙ ⲛⲧⲉ Ⲡⲭⲥ:
                    ⲁϥϣⲁⲣⲓ ⲉⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛⲉⲣϧⲟⲧ.</td>
                <td class="arabic">مضى إلى الحرب: بقوة المسيح: وقتل البربر: بجراحات عظيمة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >He refused the earthly, and sought after
                    the heavenly, and he fought in the stadium, of martyrdom.</td>
                <td class="coptic" >Ⲁϥⲉⲣⲛⲩⲙⲫⲓⲛ ⲉⲃⲟⲗ ϩⲁ ⲛⲁ ⲡⲕⲁϩⲓ: ⲟⲩⲟϩ ⲁϥⲕⲱϯ
                    ⲉⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓⲥⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲏⲣⲟⲥ.</td>
                <td class="arabic">تيقظ عن الأرضيات: وطلب السمائيات: وتشجع في: ميدان الشهادة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >He embarrassed Decius, the impious
                    emperor, with his great patience, through the pain of the sufferings.</td>
                <td class="coptic" >Ⲁϥϯⲓϣⲓⲡⲓ ⲛⲆⲉⲕⲓⲟⲥ: ⲡⲓⲟⲩⲣⲟ ⲛⲁⲥⲉⲃⲏⲥ: ϩⲓⲧⲉⲛ
                    ⲧⲉϥⲛⲓϣϯ ⲛϩⲩⲡⲟⲙⲟⲛⲏ: ⲛⲉⲛ ⲡϧⲓⲥⲓ ⲛⲧⲉ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ.</td>
                <td class="arabic">أفضح داكيوس: الملك المنافق: بصبره العظيم: وتعب العذابات.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >With this he wore the unfading crown, of
                    martyrdom, he celebrated with all the saints, in the land of the living.</td>
                <td class="coptic" >Ϧⲉⲛ ⲛⲁⲓ ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙⲡⲓⲭⲗⲟⲙ ⲛⲁⲧⲗⲱⲙ: ⲛⲧⲉ
                    ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁϥⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏⲉⲏⲩ ⲧⲏⲡⲟⲩ: ϧⲉⲛ ⲧⲭⲱⲡⲁ ⲛⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.</td>
                <td class="arabic">وبهذا لبس إكليل الشهادة: غير المضمحل: وعيَّد مع جميع القديسين: في كورة الأحياء.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >Hail to you O martyr: hail to the
                    courageous hero: hail to the struggle-mantled: Philopateer Mercurius.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ
                    ⲛⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.</td>
                <td class="arabic">السلام لك أيها الشهيد: السلام للشجاع البطل: السلام للمجاهد: محب الآب مرقوريوس.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf: O
                    struggle mantled martyr: Philopateer Mercurius: that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀
                    ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">أطلب من الرب عنا: أيها الشهيد المجاهد: محب الآب مرقوريوس: ليغفر لنا خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function stMinaDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for St Mina">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for St Mina
            <span class="arabic-caption">ذوكصولوجية للشهيد مار مينا</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english">What shall it profit a man, if he gains the whole world, and loses his soul,
                    this would be the life of vanity.</td>
                <td class="coptic" >Ⲉϣⲱⲡ ⲟⲩⲛ ⲛ̀ⲧⲉ ⲡⲓⲣⲱⲙⲓ ϫⲉⲙϩⲏⲟⲩ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ
                    ⲧⲏⲣϥ ⲛ̀ⲧⲉϥⲟ̀ⲥⲓ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ  ⲟⲩ ⲡⲉ ⲡⲁⲓ ⲱⲛ&rsquo;&rsquo;ϧ ⲛⲉ̀ⲫⲗⲏⲟⲩ.</td>
                <td class="arabic" >إذا ربح الإنسان العالم كله وخسر نفسه فما
                    هى هذه الحياة الباطلة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english">The saint Abba Mina, heard the Divine voice, and has forsaken the whole world,
                    and its corrupt glory.</td>
                <td class="coptic" >Ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ ⲁϥⲥⲱⲧⲉⲙ ⲛ̀ⲥⲁ ϯⲥ̀ⲙⲏ ⲛ̀ⲛⲟⲩϯ
                    ⲁϥⲭⲱ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲥⲱϥ  ⲛⲉⲙ ⲡⲉϥⲱⲟⲩ ⲉⲑⲛⲁⲧⲁⲕⲟ.</td>
                <td class="arabic" >الفديس آبا مينا سمع الصوت الإلهى وترك عنه
                    العالم كله ومجده الفاسد.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english">He gave his soul unto death, and his flesh to the fire, and received great
                    sufferings, for the Son of the Living God.</td>
                <td class="coptic" >Ⲁϥϯ ⲛ̀ⲧⲉϥⲯⲏⲭⲏ ⲉ̀ⲫ̀ⲙⲟⲩ : ⲛⲉⲙ ⲡⲉϥⲥⲱⲙⲁ
                    ⲉ̀ⲡⲓⲭ̀ⲣⲱⲙ: ⲁϥϣⲉⲡ ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲃⲁⲥⲁⲛⲟⲥ ⲉⲑⲃⲉ ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲉⲧⲟⲛϧ.</td>
                <td class="arabic" >وبذل نفسه للموت وجسده للنار وقبل عذابات
                    عظيمة لأجل إبن الله الحى.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english">Therefore our Savoir, lifted him to His kingdom, and granted him the good
                    things, which an eye has not seen.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲠⲉⲛⲥⲱⲧⲏⲣ ⲟⲗϥ ⲉϧⲟⲩⲛ ⲉ̀ⲧⲉϥ
                    ⲙⲉⲧⲟⲩⲣⲟ ⲁϥϯ ⲛⲁϥ ⲛ̀ⲛⲓⲁⲅⲁⲑⲟⲛ  ⲛⲏⲉⲧⲉ ⲙ̀ⲡⲉⲃⲁⲗ ⲛⲁⲩ ⲉⲣⲱⲟⲩ.</td>
                <td class="arabic" >فلهذا رفعه مخلصنا إلى ملكوته وأعطاه الحياة
                    التى لم تراها عين.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english">Hail to you O martyr, Hail to the courageous hero, Hail to the struggle-mantled,
                    the saint Abba Mena.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲏⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ
                    ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ: ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ⲛ̀ⲧⲉ ⲛⲓⲫⲁⲓⲁⲧ.</td>
                <td class="arabic" >السلام لك أيها الشهيد السلام للشجاع
                    المجاهد السلام للابس الجهاد آبا مينا البياضي.</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">Pray to the Lord on our behalf: O struggle-mantled martyr, the saint Abba Mena,
                    that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡ⳪ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ ⲱ ⲡⲓⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀⳥
                    ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ  ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.${cross}</td>
                <td class="arabic" >أطلب من الرب عنا أيها الشهيد المجاهد آبا
                    مينا البياضى ليغفر لنا خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function stAnthonyDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology for St Anthony the Great">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology for St Anthony the Great
            <span class="arabic-caption">ذوكصولوجية للقديس الأنبا أنطونيوس الكبير</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Take out from your hearts, the thoughts
                    of evil, and the pretentious images, that darken the mind.</td>
                <td class="coptic" >Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ: ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ
                    ϯⲭⲁⲕⲓⲁ̀: ⲛⲉⲙ ⲛⲓⲙⲉⲩⲓ̀ ⲉⲧϣⲉⲃϣⲱⲃ: ⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲛⲟⲩⲥ ⲛ̀ⲭⲁⲕⲓ.</td>
                <td class="arabic">انزعوا من قلوبكم افكار الشر و الظنون الخداعة التى تظلم العقل.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >Comprehend with thought, of the great
                    miracles, of our blessed father, my great lord Abba Antony.</td>
                <td class="coptic" >Ⲁⲣⲓⲛⲟⲓⲛ ϧⲉⲛ ⲟⲩϯϩ̀ⲑⲏϥ: ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲧⲱⲙⲁ
                    ⲉⲧϭⲟⲥⲓ: ⲛ̀ⲧⲉ ⲡⲉⲛⲙⲁⲕⲁⲣⲓⲟⲥ ⲛ̀ⲓⲱⲧ: ⲡⲁ⳪ ⲡⲓⲛⲓϣϯ Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ.</td>
                <td class="arabic">تفهموا بتأمل الى المعجزات العالية التي لأبينا الطوباوى سيدى العظيم انبا انطونيوس
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >This is he who became our guide, and
                    harbor for salvation, he invited us with joy, to the eternal life.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ϭⲁⲩⲙⲱⲓⲧ: ⲛ̀ⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ
                    ⲡⲓⲟⲩϫⲁⲓ: ⲁϥⲑⲱϩⲉⲙ ⲙ̀ⲙⲟⲛ ϧⲉⲛ ⲟⲩⲉ̀ⲣⲟⲩⲱⲧ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">هذا الذى صار لنا مرشداً وميناء خلاص ودعانا بفرح الي الحياة الابدية.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >The incense of his virtues, delighted our
                    souls, like the blossomed aroma, in the Paradise.</td>
                <td class="coptic" >Ⲁⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ ⲛ̀ⲧⲉ ⲛⲉϥⲁⲣⲉⲧⲏ: ϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ
                    ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲁⲣⲱⲙⲁⲧⲁ: ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
                <td class="arabic">بخور فضائله اعطة فرح لنفوسنا مثل العنبر المزهر فى الفردوس.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >Let us truly be confirmed, in the upright
                    faith, of the great Antony, proclaiming and saying.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲉⲧⲥⲟⲩⲧⲱⲛ ϧⲉⲛ
                    ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉ̀ⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
                <td class="arabic">فلنثبت بالحقيقة فى الايمان المستقيم الذى للعظيم انطونيوسصارخين قائلين:</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >&ldquo;I sought and I found, I asked and
                    I was given, I knocked and I believed, that it will be opened to me.&rdquo;</td>
                <td class="coptic" >Ϫⲉ ⲁⲓⲕⲱϯ ⲟⲩⲟϩ ⲁⲓϫⲓⲙⲓ: ⲁⲓⲉ̀ⲣⲉⲧⲓⲛ ⲟⲩⲟϩ ⲁⲓϭⲓ:
                    ⲁⲓⲕⲱⲗϩ ⲟⲩⲟϩ ϯⲛⲁϩϯ: ϫⲉ ⲥⲉⲛⲁⲁ̀ⲟⲩⲱⲛ ⲛⲏⲓ.</td>
                <td class="arabic">طلبت فوجدت. سألت فأخذت. قرعت و أؤمن انه سيفتح لى.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >Hail to our father Antony, the light of
                    monasticism, hail to our father Abba Paul, the beloved of Christ.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲛⲧⲱⲛⲓⲟⲥ: ⲡⲓϧⲏⲃⲥ ⲛ̀ⲧⲉ
                    ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
                <td class="arabic">السلام لأبينا انطونيوس مصباح الرهبنة السلام لأبينا انبا بولا حبيب المسيح.</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf, O my
                    masters and fathers who loved their children, Abba Antony and Abba Paul, that He may forgive us
                    our sins.${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀ⲡ̀̅ϭ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ ⲛⲁ⳪ ⲛ̀ⲓⲟϯ
                    ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">اطلبا من الرب عنا يل سيدى الأبوين محبي أولادهما انبا انطونيوس و انبا بولا
                    ليغفر...${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function stAthanasiusDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Doxology St Athanasius the Apostolic">
        <caption id="caption_table_${tableNumber}" class="caption">Doxology St Athanasius the Apostolic
            <span class="arabic-caption">ذوكصولوجية للقديس الأنبا أثناسيوس الرسولى</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >O you who are strong in managing the
                    ship, O you the distinguished fighter, who is victorious in the wars, the luminous lamp.</td>
                <td class="coptic" >Ⲡⲓⲕⲩⲃⲉⲣⲛⲏⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲡⲓⲣⲉϥⲙⲓϣⲓ
                    ⲛ̀ⲕⲁⲗⲱⲥ: ⲡⲓⲣⲉϥϭⲣⲟ ϧⲉⲛ ⲛⲓⲃⲱⲧⲥ: ⲡⲓϧⲏⲃⲥ ⲉⲧⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
                <td class="arabic">أيها المدبر القوى لدفة السفينة: أيها المقاتل البارع: أيها الظافر فى المعارك: أيها
                    المصباح المنير.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >The leader of Orthodoxy, is Athanasius
                    the apostolic, the instructor of the eloquent sheep, That is for Christ.</td>
                <td class="coptic" >Ⲡⲓⲕⲏⲣⲩⲝ ⲛ̀ⲧⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: ⲡⲉ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ
                    ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲣⲉϥϯⲥ̀ⲃⲱ ⲛ̀ⲧⲉ ⲡⲓⲟϩⲓ: ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲬⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">رائد الارثوذكسية: هو أثناسيوس الرسولى: و معلم القطيع الناطق: الذى للمسيح.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >Your truthful teachings, pierced the
                    hearts of the heretics, like a double-edged sword, by the power of the Trinity.</td>
                <td class="coptic" >Ⲁ ⲛⲉⲕⲇⲟⲅⲙⲁ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲙⲓϣⲓ ⲙ̀ⲡ̀ϩⲏⲧ
                    ⲛ̀ⲛⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲥⲏϥⲓ ⲛ̀ⲣⲟ ̅ⲃ: ϩⲓⲧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ.</td>
                <td class="arabic">تعاليمك القويمة نفذت فى قلوب الهراطقة مثل سيف ذى حدين بقوة الثالوث.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >Every knee worshiped the Lord, and every
                    tongue praised Him, The Glory of God was announced, and filled the entire universe.</td>
                <td class="coptic" >Ⲁ ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲕⲱⲗϫ ⲙ̀ⲡ̅ϭ̅ⲥ: ⲁ ⲗⲁⲥ ⲛⲓⲃⲉⲛ
                    ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲁ ⲡ̀ⲱⲟⲩ ⲟⲩⲱϣⲥ ⲉ̀ⲃⲟⲗ: ⲁϥⲙⲟϩ ⲙ̀ⲡ̀ϩⲟ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
                <td class="arabic">كل ركبة جثت للرب: و كل لسان سبحه: و مجد الله ذاع: و ملأ وجه المسكونة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >We therefore magnify You, along with
                    David the prophet, For You are the priest forever, on the order of Melchizedek.</td>
                <td class="coptic" >Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ
                    Ⲇⲁⲩⲓⲇ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉⲛⲉϩ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
                <td class="arabic">إننا هكذا نعظمك: مع المرتل داود:فإنك انت الكاهن الى الابد: على طقس ملكيصادق</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >Hail to the great patriarch, our father
                    the saint abba Athanasius, whose holy teachings, enlightened our minds.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲓⲛⲓϣϯ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲑⲟⲩⲁⲃ
                    ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ: ⲫⲏ ⲉⲧⲁ ⲛⲉϥⲥ̀ⲃⲱⲟⲩⲓ̀: ⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲥ.</td>
                <td class="arabic">السلام للبطريرك العظيم: ابينا القديس الانبا اثناسيوس:يا من تعاليمه المقدسة انارت
                    عقولنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >Blessed are you indeed, Our saintly
                    father the patriarch, Saint Athanasius the apostolic, beloved of Christ.</td>
                <td class="coptic" >Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ
                    ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡ̅ⲭ̅ⲥ.</td>
                <td class="arabic">مبارك انت بالحقيقة: ايها الاب القديس البطريرك: انبا اثناسيوس الرسولى: حبيب المسيح
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >Pray to the Lord on our behalf, our
                    saintly father the patriarch, Saint Athanasius the apostolic, they He may forgive us our sins.
                    ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀ⲡ̀̅ϭ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                    ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲕⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">اطلب من الرب عنا: ايها الاب القديس البطريرك: انبا أثناسيوس الرسولى: ليغفر لنا
                    خطايانا.${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

function doxologiesConclusion(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Conclusion of the Doxologies">
        <caption id="caption_table_${tableNumber}" class="caption">Conclusion of the Doxologies
            <span class="arabic-caption">ختام الذوكصولوجيات</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Watch over us, from on high where you
                    dwell, O Lady of us all, the Ever-virgin theotokos.</td>
                <td class="coptic" >Ϣⲱⲡⲓ ⲛ̀ⲑⲟ ⲉ̀ⲣⲉⲥⲟⲙⲥ ⲉ̀ϫⲱⲛ : ϧⲉⲛ ⲛⲓⲙⲁ ⲉⲧϭⲟⲥⲓ
                    ⲉ̀ⲧⲉⲣⲉⲭⲏ ⲛ̀ϧⲏⲧⲟⲩ : ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
                <td class="arabic">كونى أنت ناظرة علينا فى المواضع العالية التى أنت كائنة فيها. يا سيدتنا كلنا والدة
                    الإله العذراء كل حين.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >Ask of Him whom you have born, our Good
                    Savior, to take away our troubles, and grant us His peace.</td>
                <td class="coptic" >Ⲙⲁϯϩⲟ ⲙ̀ⲫⲏⲉ̀ⲧⲁⲣⲉⲙⲁⲥϥ : Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ
                    : ⲛ̀ⲧⲉϥⲱ̀ⲗⲓ ⲛ̀ⲛⲁⲓϧⲓⲥⲓ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ : ⲛ̀ⲧⲉϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉϥϩⲓⲣⲏⲛⲏ.</td>
                <td class="arabic">إسألى الذى ولدته مخلصنا الصالح أن يرفع عنا هذه الأتعاب ويقرر لنا سلامه.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >Hail to you O Virgin, the right and true
                    Queen, Hail to the pride of our race, whobore to us Emmanuel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ
                    ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا
                    عمانوئيل.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >We ask you remember us, O our
                    faithfuladvocate, before our Lord Jesus Christ, that he may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
}

export {
    kiahkDoxology,
    kiahk2Doxology,
    midnightDoxology,
    archangelMichaelDoxology,
    heavenlyDoxology,
    apostlesDoxology,
    stMarkDoxology,
    stGeorgeDoxology,
    stPhilopatirMercoriosDoxology,
    stMinaDoxology,
    stAnthonyDoxology,
    stAthanasiusDoxology,
    doxologiesConclusion   
};