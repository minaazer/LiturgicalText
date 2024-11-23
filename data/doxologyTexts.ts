import { cross } from './repeatedPrayers';

const doxologyFunctions = {
doxologiesInro(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Introduction of the Doxologies">
    
    <caption id="caption_table_${tableNumber}" class="caption">Introduction of the Doxologies
        <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟ</span>
        <span class="arabic-caption">مقدمة الذكصولوجيات</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">In Christ Jesus our Lord. Amen Alleluia.</td>
            <td class="coptic">Ϧⲉⲛ Ⲡⲭ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ⲡⲉⲛⲟ̅ⲥ̅. Ⲁⲙⲏⲛ ⲁ̅ⲗ̅.</td>
            <td class="arabic">بالمسيح يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to you we ask you, O saint full of glory, the ever-Virgin, Mother of God Mother of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟ: ⲱ̀ ⲑⲏⲉ̅ⲑ̅ⲩ̅ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ: ⲉ̀ⲧⲟⲓ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ϯⲙⲁⲥⲛⲟⲩϯ ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">السلام لك نسألك أيتها القديسة الممتلئة مجدا العذراء كل حين. والدة الاله أم المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Lift our prayers, to your beloved Son, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲛⲓⲟⲩⲓ̀ ⲛ̀ⲧⲉⲡ̀ⲣⲟⲥⲉ̀ⲩⲭⲏ: ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁ ⲡⲉϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اصعدى صلاتنا الى ابنك الحبيب ليغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Hail to her who gave birth, to the true Light, Christ our God, the saintly Virgin.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ: ⲙ̀ⲡⲓⲞⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ: ϯⲠⲁⲣⲑⲉⲛⲟⲥ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">السلام للتى ولدت لنا النور الحقيقى المسيح الهنا العذراء القديسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Ask the Lord on our behalf, to have mercy upon our souls, and that He may forgive us our sins.</td>
            <td class="coptic">Ⲙⲁϯϩⲟ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛ̀ⲧⲉϥⲉ̀ⲣ ⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اسألى الرب عنا ليصنع رحمة مع نفوسنا ويغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">O Virgin Mary, the holy Mother of God, the trusted advocate, of the human race.</td>
            <td class="coptic">ϮⲠⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛ̀ⲧⲉ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">أيتها العذراء مريم والدة الاله القديسة الشفيعة الأمينة لجنس البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Intercede on our behalf, before Christ to whom you gave birth, that He may grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲛⲁϩⲣⲉⲛ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲣⲉ̀ϫⲫⲟϥ: ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲉ̀ⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">اشفعى فينا أمام المسيح الذى ولدته لكى ينعم لنا بمغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲉⲡⲉⲛⲙⲉⲩⲓ̀: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>
`;
    return html;
},
vespersDoxology (tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Mary Doxology - Vespers">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Mary Doxology - Vespers
        <span class="coptic-caption">Ⲉⲣⲉ ⲡ̀ⲥⲟⲗⲥⲉⲗ ⲙ̀Ⲙⲁⲣⲓⲁⲙ</span>
        <span class="arabic-caption">للعذراء مريم - عشية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The adornment of Mary, in the highest heaven, at the right hand of her Beloved, asking Him on our behalf.</td>
            <td class="coptic">Ⲉ̀ⲣⲉ ⲡ̀ⲥⲟⲗⲥⲉⲗ ⲙ̀Ⲙⲁⲣⲓⲁⲙ: ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲉⲧ̀ⲥⲁ̀ⲡ̀ϣⲱⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲡⲉⲥⲙⲉⲛⲣⲓⲧ: ⲉ̀ⲥⲧⲱⲃϩ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.</td>
            <td class="arabic">زينة مريم فى السموات العلوية عن يمين حبيبها تطلب منه عنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">As David has said, in the book of Psalms, "Upon Your right hand O King, did stand the Queen."</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲡⲓⲯ̀ⲁⲗⲟⲙⲥ: ϫⲉ ⲁⲥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲥ ⲛ̀ϫⲉ ϯⲟⲩⲣⲱ: ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲙⲟⲕ ⲡ̀Ⲟⲩⲣⲟ.</td>
            <td class="arabic">كما قال داود فى المزمور قامت الملكة عن يمينك أيها الملك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Solomon has called her, in the Song of Songs, "My sister and my spouse, my true city Jerusalem."</td>
            <td class="coptic">Ⲥⲟⲗⲟⲙⲱⲛ ⲙⲟⲩϯ ⲉⲣⲟⲥ: ϧⲉⲛ ⲡⲓϫⲱ ⲛ̀ⲧⲉ ⲛⲓϫⲱ: ϫⲉ ⲧⲁⲥⲱⲛⲓ ⲟⲩⲟϩ ⲧⲁϣ̀ⲫⲉⲣⲓ: ⲧⲁⲡⲟⲗⲓⲥ ⲙ̀ⲙⲏⲓ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
            <td class="arabic">سليمان دعاها فى نشيد الأنشاد وقال أختى صديقتى مدينتى الحقيقية أورشليم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">For He has given a type of her, in diverse high names saying, "Come out of your garden, O choicest aroma."</td>
            <td class="coptic">Ⲁϥϯⲙⲏⲓⲛⲓ ⲅⲁⲣ ⲉ̀ⲣⲟⲥ: ϧⲉⲛ ϩⲁⲛⲙⲏϣ ⲛ̀ⲣⲁⲛ ⲉⲩϭⲟⲥⲓ: ϫⲉ ⲁ̀ⲙⲏ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲏ̀ⲡⲟⲥ: ⲱ̀ ⲑⲏⲉ̀ⲧⲁⲥⲱⲧⲡ ⲛ̀ⲁ̀ⲣⲱⲙⲁⲧⲁ.</td>
            <td class="arabic">لأنه أعطى علامة عنها بأسماء كثيرة عالية قائلا أخرجى من بستانك أيتها العنبر المختار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲉⲡⲉⲛⲙⲉⲩⲓ̀: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
midnightDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;"
        title="Doxology of Midnight Praise for the Virgin Ⲧⲉⲙⲉⲧⲛⲓϣϯ ⲱ̀  Ⲙⲁⲣⲓⲁ">
        <caption id="caption_table_${tableNumber}" class="caption">St. Mary Doxology - Midnight Praise<span
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
                    advocate, before our Lord Jesus Christ that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ ⲠⲓⲬ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>
`;
return html;
},
matinsDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Mary Doxology - Matins">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Mary Doxology - Matins
        <span class="coptic-caption">Ⲱ̀ⲟⲩⲛⲓⲁϯ ⲛ̀ⲑⲟ Ⲙⲁⲣⲓⲁ</span>
        <span class="arabic-caption">للعذراء مريم - عشية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Blessed are you O Mary, the prudent and the chaste, the second tabernacle, the treasure of the Spirit.</td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁϯ ⲛ̀ⲑⲟ Ⲙⲁⲣⲓⲁ̀: ϯⲥⲁⲃⲉ ⲟⲩⲟϩ ⲛ̀ⲥⲉⲙⲛⲉ: ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲥ̀ⲕⲏⲛⲏ: ⲡⲓⲀ̀ϩⲟ ⲙ̀Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">طوباك أنت يا مريم الحكيمة العفيفة القبة الثانية الكنز الروحى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The pure turtle-dove, that declared in our land, and brought unto us, the Fruit of the Spirit.</td>
            <td class="coptic">Ϯϭⲣⲟⲙⲡϣⲁⲗ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ: ⲑⲏⲉⲧⲁⲥⲙⲟⲩϯ ϧⲉⲛ ⲡⲉⲛⲕⲁϩⲓ: ⲟⲩⲟϩ ⲁⲥⲫⲓⲣⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲟⲩⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ.</td>
            <td class="arabic">اليمامة النقية التى نادت فى أرضنا وأينعت لنا ثمرة الروح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The Spirit of comfort, that came upon your Son, in the waters of the Jordan, as in the type of Noah.</td>
            <td class="coptic">ⲠⲓⲠ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ⲉϫⲉⲛ ⲡⲉϢⲏⲣⲓ: ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ: ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀Ⲛⲱⲉ̀.</td>
            <td class="arabic">الروح المعزى الذى حل على ابنك فى مياه الأردن كمثال نوح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">For that dove, has declared unto us, the peace of God, toward mankind.</td>
            <td class="coptic">Ϯϭⲣⲟⲙⲡⲓ ⲅⲁⲣ ⲉⲧⲉ ⲙ̀ⲙⲁⲩ: ⲛ̀ⲑⲟⲥ ⲁⲥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲛ: ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ Ⲫϯ: ⲑⲏⲉⲧⲁⲥϣⲱⲡⲓ ϣⲁ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">لأن تلك الحمامة هى بشرتنا بسلام الله الذى صار للبشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Likewise you O our hope, the rational turtle-dove, have brought mercy unto us, and carried Him in your womb.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ϩⲱⲓ ⲱ̀ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: ϯϭⲣⲟⲙⲡ̀ϣⲁⲗ ⲛ̀ⲛⲟⲏ̀ⲧⲉ: ⲁⲣⲉⲓ̀ⲛⲓ ⲙ̀ⲡⲓⲛⲁⲓ ⲛⲁⲛ: ⲁⲣⲉϥⲁⲓ ϧⲁⲣⲟϥ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ.</td>
            <td class="arabic">وأنت أيضا يا رجاءنا اليمامة العقلية أتيت لنا بالرحمة حملته فى بطنك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Who is Jesus our Lord, the only-begotten of the Father, He was born of you unto us, and set free our race.</td>
            <td class="coptic">Ⲉⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲓⲏ̅ⲥ̅: ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲫ̀ⲓⲱⲧ: ⲁⲩⲙⲁⲥϥ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ: ⲁϥⲉⲣ ⲡⲉⲛϫⲉⲛⲟⲥ ⲛ̀ⲣⲉⲙϩⲉ.</td>
            <td class="arabic">أى يسوع المولود من الآب ولد لنا منك وحرر جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Wherefore let us declare, first with our hearts, and then with our tongues also, proclaiming and saying.</td>
            <td class="coptic">Ⲫⲁⲓ ⲅⲁⲣ ⲙⲁⲣⲉⲛⲧⲁⲟⲩⲟϥ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲛϩⲏⲧ ⲛ̀ϣⲟⲣⲡ: ⲙⲉⲛⲉⲛⲥⲱⲥ ⲟⲛ ϧⲉⲛ ⲡⲉⲛⲕⲉⲗⲁⲥ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">فلنقل هذا من قلبنا أولاً وبعد ذلك بلساننا أيضا صارخين قائلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">O our Lord Jesus Christ, make in us a sanctuary, for Your Holy Spirit, ever-glorifying You.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲙⲁⲑⲁⲙⲓⲟ̀ ⲛⲁⲕ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ: ⲛ̀ⲟⲩⲉ̀ⲣⲫⲉⲓ ⲛ̀ⲧⲉ ⲠⲉⲕⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲉⲩϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ̀ ⲛⲁⲕ.</td>
            <td class="arabic">يا ربنا يسوع المسيح اجعل لك فينا هيكلاً لروحك القدوس يعطيك تمجيدا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك أيتها العذراء الملكة الحقيقية الحقانية. السلام لفخر جنسنا. ولدت لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁⲣⲉⲡⲉⲛⲙⲉⲩⲓ: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲁⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
// Heavenly
archangelMichaelDoxology(tableNumber) {
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
                    that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ
                    ⲉˉⲑˉⲩˉ Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ. ${cross}</td>
                <td class="arabic" >إشفع فينا يارئيس الملائكة الطاهر ميخائيل
                    رئيس السمائيين ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
archangelGabrielDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Archangel Gabriel Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Archangel Gabriel Doxology
        <span class="coptic-caption">Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية رئيس الملائكة غبريال</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Gabriel the Archangel, was seen by Daniel, as he stood upon his feet, by the shore of the river.</td>
            <td class="coptic">Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ Ⲇⲁⲛⲓⲏⲗ: ⲉϥⲟϩⲓ̀ ⲉ̀ⲣⲁⲧϥ ϩⲓϫⲉⲛ ⲛⲉϥⲫⲁⲧ: ϩⲓϫⲉⲛ ⲛⲉⲛⲥ̀ⲫⲟⲧⲟⲩ ⲙ̀ⲫ̀ⲓⲁⲣⲟ.</td>
            <td class="arabic">غبريال الملاك رآه دانيال واقفا على قدميه على شاطىء النهر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He stretched out, his right hand to heaven, and he swore to the High One, who endures forever.</td>
            <td class="coptic">Ⲁϥⲥⲟⲩⲧⲉⲛ ⲧⲉϥϫⲓϫ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲟⲩⲓ̀ⲛⲁⲙ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲉ̀ⲧⲁϥⲱⲣⲕ ⲙ̀ⲫⲏⲉⲧϭ̀ⲟⲥⲓ: ⲫⲏⲉ̀ⲧϣⲟⲡ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">ومد يده اليمنى الى السماء وحلف بالعلى الدائم الى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Saying "From a time, and times to half a time, until the completion of the visions, I will show to you."</td>
            <td class="coptic">Ϫⲉ ⲓⲥϫⲉⲛ ⲟⲩⲥⲏⲟⲩ ϣⲁ ⲟⲩⲥⲏⲟⲩ: ϣⲁ ⲧ̀ⲕⲉⲫⲁϣⲓ ⲛ̀ⲧⲉ ⲟⲩⲥⲏⲟⲩ: ϣⲁ ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓϩⲟⲣⲁⲥⲓⲥ: ⲁ̀ⲛⲟⲕ ϯⲛⲁⲧⲁⲙⲟⲕ ⲉ̀ⲣⲱⲟⲩ.</td>
            <td class="arabic">قائلا من زمان الى زمان والى نصف زمان الى تمام الرؤيا أنا أخبرك بها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Intercede on our behalf, O holy arch-angel, Gabriel the Announcer, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲁ̀ⲣⲭⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅ⲓ: Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲓϥⲁⲓϣⲉⲛⲛⲟϥⲓ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب الملائكة الطاهر غبريال المبشر ليغفر رئيس السمائيين ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
archangelRaphaelDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Archangel Raphael Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Archangel Raphael Doxology
        <span class="coptic-caption">Ⲅⲉⲛⲉⲁ̀ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϣⲱⲡⲓ</span>
        <span class="arabic-caption">ذكصولوجية رئيس الملائكة رافائيل</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Every generation that was from, Adam to this day, find Raphael, a fortress for mankind.</td>
            <td class="coptic">Ⲅⲉⲛⲉⲁ̀ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϣⲱⲡⲓ: ⲓⲥϫⲉⲛ Ⲁⲇⲁⲙ ϣⲁ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲫⲟⲟⲩ: ⲥⲉϫⲓⲙⲓ ⲅⲁⲣ ⲛ̀Ⲣⲁⲫⲁⲏⲗ: ⲉϥⲟⲓ ⲛ̀ⲥⲟⲃⲧ ⲉ̀ϯⲙⲉⲧⲣⲱⲙⲓ.</td>
            <td class="arabic">كل الأجيال الذين كانوا من آدم الى اليوم يجدون رافائيل حصنا للبشرية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Each one of the judges, the prophets and the just, and the righteous kings, were supported by him.</td>
            <td class="coptic">Ⲫⲟⲩⲁⲓ ⲫⲟⲩⲁⲓ ⲛ̀ⲧⲉ ⲛⲓⲕ̀ⲣⲓⲧⲏⲥ: ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ: ⲛⲉⲙ ⲛⲓⲟⲩⲣⲱⲟⲩ ⲛ̀ⲇⲓⲕⲉⲱⲥ: ⲛ̀ⲑⲟϥ ⲉⲧⲟⲓ ⲛ̀ⲛⲁϣϯ ⲛⲱⲟⲩ.</td>
            <td class="arabic">وكل واحد من القضاة والأنبياء والأبرار والملوك والصديقين كان ناصرا لهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He has guided, our holy fathers the Apostles, until they restored the world, to the knowledge of the Truth.</td>
            <td class="coptic">Ⲛⲉⲛⲓⲟϯ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲑⲟϥ ⲉ̀ⲧⲉⲣϭⲁⲩⲙⲱⲓⲧ ϧⲁϫⲱⲟⲩ: ϣⲁⲛ̀ⲧⲟⲩⲧⲁⲥⲑⲟ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡ̀ⲥⲟⲩⲉⲛ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">وأباؤنا القديسون الرسل هو الذى أرشدهم حتى ردوا المسكونة الى معرفة الحق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He did not forsake, any of the struggling martyrs, of our Lord Jesus Christ, until they wore the unfading crown.</td>
            <td class="coptic">Ⲛⲓⲁ̀ⲑⲗⲓⲧⲏⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲧⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲙ̀ⲡⲉϥⲥ̀ⲉⲛⲟⲩ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡ̀ⲧⲏⲣϥ: ϣⲁⲛ̀ⲧⲟⲩⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ.</td>
            <td class="arabic">والشهداء المجاهدون الذين لربنا يسوع المسيح لم يفارقهم جميعا حتى لبسوا الاكليل غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The chosen ascetics, who were lost in the wilderness, Raphael surrounded them, until they completed their lives.</td>
            <td class="coptic">Ⲛⲓⲕⲉⲥⲱⲧⲡ ⲛ̀ⲁⲥⲕⲏⲧⲏⲥ: ⲉⲧⲥⲱⲣⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲓ ⲛⲓϣⲁϥⲉⲩ: Ⲣⲁⲫⲁⲏⲗ ϩⲓⲕⲱⲧ ⲉ̀ⲣⲱⲟⲩ: ϣⲁⲛ̀ⲧⲟⲩϫⲱⲕ ⲙ̀ⲡⲟⲩⲃⲓⲟⲥ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">والنساك المختارون التائهون فى البرارى كان رافائيل يحيط بهم حتى أكملوا سعيهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Wherefore the angel of the Lord, surrounds everyone, who fears the face of God, he guards and delivers them.</td>
            <td class="coptic">Ϣⲁⲣⲉ ⲡ̀ⲁ̀ⲅⲅⲉⲗⲟⲥ ⲙ̀Ⲡⲟ̅ⲥ̅: ϩⲓⲕⲱⲧ ⲙ̀ⲡ̀ⲕⲱϯ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉ̀ⲧⲉⲣϩⲟϯ ϧⲁ ⲧⲉϥϩⲏ: ϣⲁϥⲣⲱⲓⲥ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ϣⲁϥⲛⲁϩⲙⲟⲩ.</td>
            <td class="arabic">ملاك الرب يحيط بكل خائفيه يحرسهم وينجيهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Let us glorify the Holy, and Co-essential Trinity, so that He may keep us, away from temptations.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛϯⲱⲟⲩ̀ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ: ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲟ̀ⲙⲟⲟ̀ⲩⲥⲓⲟⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲡⲓⲣⲁⲥⲙⲟⲥ.</td>
            <td class="arabic">فلنمجد الثالوث القدوس المساوى لكى يحفظنا من التجارب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Intercede on our behalf, O holy archangel, Raphael the joy of all hearts, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ̀ ⲡⲓⲁ̀ⲣⲭⲏⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅: Ⲣⲁⲫⲁⲏⲗ ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ϩⲏⲧ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب يارئيس الملائكة الطاهر رافائيل مفرح القلوب ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
archangelSurielDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Archangel Suriel Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Archangel Suriel Doxology
        <span class="coptic-caption">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ</span>
        <span class="arabic-caption">ذكصولوجية رئيس الملائكة سوريال</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us worship the Father and the Son, and the Holy Spirit, and honor Suriel, the fourth archangel.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲛ̀ⲧⲉⲛⲧⲁⲓⲟ̀ ⲛ̀Ⲥⲟⲩⲣⲓⲏⲗ: ⲡⲓⲙⲁϩ ϥ̀ⲧⲟⲟⲩ ⲛ̀ⲁ̀ⲣⲭⲏⲁ̀ⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">فلنسجد للآب والابن والروح القدس ونكرم سوريال الرابع فى رؤساء الملائكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Good is the joy of Suriel, which we ascribe to him in the churches, more than the joy of a bridegroom, of this passing world.</td>
            <td class="coptic">Ⲛⲁⲛⲉ ⲫ̀ⲣⲁϣⲓ ⲛ̀Ⲥⲟⲩⲣⲓⲏⲗ: ⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲙⲟϥ ϧⲉⲛ ⲛⲓⲉ̀ⲕⲕⲗⲏⲥⲓⲁ: ⲉ̀ϩⲟⲧⲉ ⲫ̀ⲣⲁϣⲓ ⲛ̀ⲟⲩⲡⲁⲧϣⲉⲗⲉⲧ: ⲛ̀ⲧⲉ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ ⲉⲑⲛⲁⲥⲓⲛⲓ.</td>
            <td class="arabic">جيد هو فرح سوريال نصنعه فى الكنائس أكثر من فرح عرس هذا العالم الزائل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You know O my beloved, that the joy of this world passes, but the joy of Suriel, endures forever.</td>
            <td class="coptic">Ⲝⲱⲟⲩⲛ ϩⲱⲕ ⲱ̀ ⲡⲁⲙⲉⲛⲣⲓⲧ: ϫⲉ ⲫ̀ⲣⲁϣⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ϥ̀ⲛⲁⲥⲓⲛⲓ: ⲟⲩⲟϩ ⲫ̀ⲣⲁϣⲓ ⲛ̀Ⲥⲟⲩⲣⲓⲏⲗ: ϥ̀ⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">أنت أيضا تعلم أيها الحبيب أن فرح العالم يزول وأما فرح سوريال فيدوم الى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Intercede on our behalf, O holy archangel, Suriel the trumpeter, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲑⲓ ⲉ̀ϫⲱⲛ: ⲡⲓⲁ̀ⲣⲭⲏⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅: Ⲥⲟⲩⲣⲓⲏⲗ ⲡⲓⲥⲁⲗⲡⲓⲥⲧⲏⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب يارئيس الملائكة الطاهر سوريال المبوق ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
fourIncorporealCreaturesDoxologies(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Four Incorporeal Creatures Doxologies">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Four Incorporeal Creatures Doxologies
        <span class="coptic-caption">Ⲡⲓϥ̀ⲧⲟⲟⲩ ⲛ̀ⲍⲱⲟⲩⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية الأربعة الحيوانات غير المتجسدين</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The four incorporeal creatures, carry the throne of God, a face of lion and a face of a ram, a face of a man and a face of an eagle.</td>
            <td class="coptic">Ⲡⲓϥ̀ⲧⲟⲟⲩ ⲛ̀ⲍⲱⲟⲩⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ ⲛ̀ⲧⲉ Ⲫ̀ϯ: ⲟⲩϩⲟ ⲙ̀ⲙⲟⲩⲓ̀ ⲛⲉⲙ ⲟⲩϩⲟ ⲙ̀ⲙⲁⲥⲓ: ⲟⲩϩⲟ ⲛ̀ⲣⲱⲙⲓ ⲛⲉⲙ ⲟⲩϩⲟ ⲛ̀ⲁ̀ⲏⲧⲟⲥ.</td>
            <td class="arabic">الأربعة الحيوانات غير المتجسدين، الحاملين مركبة الله، وجه أسد ووجه ثور، ووجه إنسان ووجه نسر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">And they are full of eyes, from their fronts to their backs, six wings to the one, and six wings to the other.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲉⲩⲙⲉϩ ⲙ̀ⲃⲁⲗ: ϩⲓ ⲧ̀ϩⲏ ⲛⲉⲙ ϩⲓ ⲫⲁϩⲟⲩ ⲙ̀ⲙⲱⲟⲩ: ⲥⲟⲟⲩ (ⲋ) ⲛ̀ⲧⲉⲛϩ ⲙ̀ⲡⲓⲟⲩⲁⲓ: ⲛⲉⲙ ⲥⲟⲟⲩ (ⲋ) ⲛ̀ⲧⲉⲛϩ ⲙ̀ⲡⲓⲕⲉⲟⲩⲁⲓ.</td>
            <td class="arabic">وهم أيضاً ممتلئون أعينا، من قدام ومن خلفهم، ستة أجنحة للواحد، وستة أجنحة للآخر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">With two they cover their faces, with two they cover their feet, they fly with the other two, and proclaim and say.</td>
            <td class="coptic">Ϧⲉⲛ ⲥ̀ⲛⲁⲩ ⲉⲩϩⲱⲃⲥ ⲛ̀ⲛⲟⲩϩⲟ: ϧⲉⲛ ⲥ̀ⲛⲁⲩ ⲉⲩϩⲱⲃⲥ ⲛ̀ⲛⲟⲩϭⲁⲗⲁⲩϫ: ⲉⲩϩⲏⲗ ϫⲉ ϧⲉⲛ ⲡⲓⲕⲉⲥ̀ⲛⲁⲩ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">بإثنين يغطون وجوههم، وبإثنين يغطون أرجلهم، ويطيرون بإثنين، ويصرخون قائلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">"Holy and holy, holy O Lord of hosts, heaven and earth are full of, Your glory and Your honor."</td>
            <td class="coptic">Ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲟⲩⲟϩ ⲭ̀ⲟⲩⲁⲃ: ⲭ̀ⲟⲩⲁⲃ Ⲡ̀ⲟ̅ⲥ̅ ⲥⲁⲃⲁⲱⲑ: ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ.</td>
            <td class="arabic">قدوس قدوس قدوس رب الصاباؤوت. السماء والأرض مملوءتان من مجدك وكرامتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">We also praise with them, with incessant voices, saying "Holy holy, holy O Lord."</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲧⲉⲛϩⲱⲥ ⲛⲉⲙⲱⲟⲩ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ: ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: ⲁ̀ⲅⲓⲟⲥ ⲱ̀ Ⲕⲩⲣⲓⲟⲥ.</td>
            <td class="arabic">نسبح معهم بأصوات غير ساكتة قائلين قدوس قدوس قدوس أيها الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Intercede on our behalf, O four incorporeal creatures, the ministers fervent as fire, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ̀ ⲡⲓϥ̀ⲧⲟⲟⲩ ⲛ̀ⲍⲱⲟⲩⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ⲛ̀ⲗⲓⲧⲟⲣⲅⲟⲥ ⲛ̀ϣⲁϩ ⲛ̀ⲭ̀ⲣⲱⲙ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفعوا فينا أمام الرب أيها الأربعة الحيوانات غير المتجسدين الخدام الملتهبون نارا ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
twentyFourPresbytersDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="24 Presbyters Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">24 Presbyters Doxology
        <span class="coptic-caption">Ⲟⲩⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲓⲧⲁⲓⲟ</span>
        <span class="arabic-caption">ذكصولوجية الأﺮبعة ﻮﻋشرﻴﻦ قسيساً</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">For great is the honor, of the incorporeal saints, the priests of the truth, the twenty four presbyters.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲓⲧⲁⲓⲟ: ⲛ̀ⲧⲉ ⲛⲏⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ⲛⲓⲟⲩⲏⲃ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲡⲓϫⲟⲩⲧ ϥ̀ⲧⲟⲟⲩ ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ.</td>
            <td class="arabic">عظيمة هي كرامة، القديسين غير المتجسدين، كهنة الحق، الأﺮبعة ﻮﻋشرﻴﻦ قسيساً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Because they are close to God, and near to His throne, they praise Him unceasingly, by day and by night.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ϫⲉ ⲥⲉϧⲉⲛⲧ ⲉ̀ϧⲟⲩⲛ Ⲫ̀ϯ: ⲟⲩⲟϩ ⲉⲩⲭⲏ ⲛⲁϩⲣⲉⲛ ⲡⲉϥⲑ̀ⲣⲟⲛⲟⲥ: ⲉⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩⲛⲕ: ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ.</td>
            <td class="arabic">من أجل أنهم قريبون، من الله وكائنون، أمام كرسيه يسبحون، بلا فتور النهار والليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They sit upon twenty four thrones, with crowns upon their heads, and with golden bowls in their hands, full of chosen incense.</td>
            <td class="coptic">Ⲉⲩϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ϫⲟⲩⲧ ϥ̀ⲧⲟⲟⲩ ⲛ̀ⲑ̀ⲣⲟⲛⲟⲥ: ⲉ̀ⲣⲉ ϩⲁⲛⲭ̀ⲗⲟⲙ ϩⲓϫⲉⲛ ⲛⲟⲩⲁ̀ⲫⲏⲟⲩⲓ̀: ⲉ̀ⲣⲉ ϩⲁⲛⲫⲩⲁ̀ⲗⲏ ⲛ̀ⲛⲟⲩⲃ ϧⲉⲛ ⲛⲟⲩϫⲓϫ: ⲉⲩⲙⲉϩ ⲛ̀ⲥ̀ⲑⲟⲓⲛⲟϥⲓ ⲉϥⲥⲱⲧⲡ.</td>
            <td class="arabic">جالسين على الأﺮبعة ﻮﻋشرﻴﻦ كرسياً، وأكاليل على رؤوسهم، وجامات ذهب بأيديهم، مملوءة بخوراً مختاراً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Which are the prayers, of the saints who lived on the earth, and they offer them, unto the true Lamb.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲛⲁⲓ ⲛⲉ ⲛⲓⲡ̀ⲣⲟⲥⲉⲩⲭⲏ: ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲅⲓⲟⲥ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲩⲉⲣⲡ̀ⲣⲟⲥⲕⲩⲛⲓⲛ ⲙ̀ⲙⲱⲟⲩ: ⲉ̀ϧⲟⲩⲛ ϣⲁ ⲡⲓϨⲓⲏⲃ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">الذي هو صلوات، القديسين الذين على الأرض، يقدمونها إلى، الحمل الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And those who lived on the earth, their names will be revealed, they will ask the Lord for them, for they are close to God.</td>
            <td class="coptic">Ⲛⲏⲉⲑⲛⲁⲟⲩⲱⲛϩ ⲛ̀ⲛⲟⲩⲣⲁⲛ ⲉ̀ⲃⲟⲗ: ⲉ̀ⲧⲓ ⲉⲩϣⲱⲡ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲥⲉⲛⲁⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲟⲩ: ⲉⲑⲃⲉ ϫⲉ ⲥⲉϧⲉⲛⲧ ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲫ̀ϯ.</td>
            <td class="arabic">الذين يظهرون أسماءهم، وهم كائنون على الأرض، يطلبون من الرب عنهم، من أجل أنهم قريبون من الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Intercede on our behalf, the priests of the truth, the twenty four presbyters, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲑⲓ ⲉϫⲱⲛ: ⲛⲓⲟⲩⲏⲃ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲡⲓϫⲟⲩⲧ ϥ̀ⲧⲟⲟⲩ ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">إشفعوا فينا أمام الرب، يا كهنة الحق، الأﺮبعة ﻮﻋشرﻴﻦ قسيساً، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
oneHundredAndFortyFourThousandDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="One Hundred and Forty Four Thousand Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">One Hundred and Forty Four Thousand Doxology
        <span class="coptic-caption">Ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲁ̀ⲅⲅⲉⲗⲟⲥ ⲛ̀ⲟⲩⲱⲓⲛⲓ</span>
        <span class="arabic-caption">ذكصولوجية المائة ولأربعة ولأربعين ألفا</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">I saw an angel of light, come down from heaven, and in his right hand, was a golden seal.</td>
            <td class="coptic">Ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲁ̀ⲅⲅⲉⲗⲟⲥ ⲛ̀ⲟⲩⲱⲓⲛⲓ: ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲉ̀ⲣⲉ ⲟⲩⲥ̀ⲫ̀ⲣⲁⲅⲓⲥ ⲛ̀ⲛⲟⲩⲃ: ϧⲉⲛ ⲧⲉϥϫⲓϫ ⲛ̀ⲟⲩⲓ̀ⲛⲁⲙ.</td>
            <td class="arabic">رأيت ملاكا نورانيا قد نزل من السماء وختم ذهبى فى يده اليمنى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Proclaiming and saying, "Look do not harm the earth, until the servants of God, are sealed on their foreheads"</td>
            <td class="coptic">Ⲉϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁ̀ⲛⲁⲩ ⲙ̀ⲡⲉⲣⲧⲁⲕⲟ ⲙ̀ⲡⲓⲕⲁϩⲓ: ϣⲁⲛ̀ⲧⲟⲩⲧⲟⲃ ⲛ̀ⲛⲓⲉ̀ⲃⲓⲁⲓⲕ: ⲛ̀ⲧⲉ Ⲫϯ ϩⲓ ⲧⲟⲩⲧⲉϩⲛⲓ.</td>
            <td class="arabic">صارخا قائلا انظروا ألا تهلكوا الأرض حتى يختم عبيد الله على جباههم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">And I heard the number of those who were sealed, from the children of Israel, from Reuben to Benjamin, twelve thousand from each tribe.</td>
            <td class="coptic">Ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲧⲏ̀ⲡⲓ ⲛ̀ⲛⲏⲉ̀ⲧⲁⲩⲧⲟⲩⲃⲟⲩ: ϧⲉⲛ ⲛⲉⲛϣⲏⲣⲓ ⲙ̀ⲡⲒⲥⲣⲁⲏⲗ: ⲓⲥϫⲉⲛ Ⲣⲟⲩⲃⲏⲛ ϣⲁ Ⲃⲉⲛⲓⲁⲙⲓⲛ: ⲙⲏⲧ ⲥ̀ⲛⲁⲩ ⲛ̀ϣⲟ ⲕⲁⲧⲁ ⲫⲩⲗⲏ.</td>
            <td class="arabic">وسمعت عدد الذين ختموا من بنى اسرائيل من راؤبين الى بنيامين اثنى عشر ألفا من كل سبط.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Intercede on our behalf, O the One hundred and forty four thousand, and the celibate Evangelist, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓϣⲉ ϩ̀ⲙⲉ ϥ̀ⲧⲟⲟⲩ ⲛ̀ϣⲟ: ⲛⲉⲙ ⲡⲓⲡⲁⲣⲏⲉⲛⲟⲥ ⲛ̀ⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفعوا فينا أمام الرب أيها المائة ولأربعة ولأربعين ألفا والبتول الانجيلى ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stJohntheBaptistFirstDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. John the Baptist - First Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. John the Baptist - First Doxology
        <span class="coptic-caption">Ⲙ̀ⲡⲉ ⲟⲩⲟⲛ ⲧⲱⲛϥ ϧⲉⲛ ⲛⲓϫⲓⲛⲙⲓⲥⲓ</span>
        <span class="arabic-caption">ذكصولوجية يوحنا المعمدان الأولى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Among those born of women, no one is like you, you are great among the saints, O John the Baptist.</td>
            <td class="coptic">Ⲙ̀ⲡⲉ ⲟⲩⲟⲛ ⲧⲱⲛϥ ϧⲉⲛ ⲛⲓϫⲓⲛⲙⲓⲥⲓ: ⲛ̀ⲧⲉ ⲛⲓϩⲓⲟⲙⲓ ⲉϥⲟⲛⲓ ⲙ̀ⲙⲟⲕ: ⲛ̀ⲑⲟⲕ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲏⲉ̅ⲑ̅ⲩ̅ ⲧⲏⲣⲟⲩ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ.</td>
            <td class="arabic">لم يقم فى مواليد النساء من يشبهك. أنت عظيم فى جميع القديسين يا يوحنا المعمدان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">You are much more than a prophet, you were righteously exalted, you are the friend of the Bridegroom, the Lamb of God.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲟⲩϩⲟⲩⲟ̀ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁⲕϭⲓⲥⲓ ϧⲉⲛ ϯⲙⲉⲑⲙⲏⲓ: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡ̀ϣ̀ⲫⲏⲣ ⲙ̀ⲡⲓⲡⲁⲧϣⲉⲗⲉⲧ: ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ.</td>
            <td class="arabic">أنت أفضل من نبى. تعاليت فى البر. أنت هو صديق الختن حمل الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You have witnessed to the true Light, which came into the world, those who believed in His Name, became children of the Light.</td>
            <td class="coptic">Ⲁⲕⲉⲣⲙⲉⲑⲣⲉ ϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ ⲉⲧⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲛⲏⲉ̀ⲑⲛⲁϩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ: ⲁⲩϣⲱⲡⲓ ⲛ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">شهدت للنور الحقيقى الذى أتى الى العالم. والذين يؤمنون باسمه صاروا أبناء النور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Intercede on our behalf, O forerunner and baptizer, John the Baptist, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ̀ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب أيها السابق الصابغ يوحنا المعمدان ليغفر خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stJohntheBaptistSecondDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. John the Baptist - Second Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. John the Baptist - Second Doxology
        <span class="coptic-caption">Ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ϫⲉ Ⲓⲱⲁⲛⲛⲏⲥ</span>
        <span class="arabic-caption">ذكصولوجية يوحنا المعمدان الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">John has witnessed, in the four Gospels, saying I have baptized my Savior, in the waters of the Jordan.</td>
            <td class="coptic">Ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ϫⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ϧⲉⲛ ⲡⲓϥ̀ⲧⲟⲟⲩ ⲛ̀ⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲟⲛ: ϫⲉ ⲁⲓϯⲱⲙⲥ ⲙ̀Ⲡⲁⲥⲱⲧⲏⲣ: ϧⲉⲛ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">شهد يوحنا فى الأناجيل الأربع أنى عمدت مخلصى فى مياه الاردن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">"I saw the Holy Spirit, come down from heaven, I heard the voice of the Father, proclaiming and saying."</td>
            <td class="coptic">Ⲁⲓⲛⲁⲩ ⲉ̀ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲉⲧⲁϥⲓ̀ ⲉⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ: ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲉⲥⲱϣ ⲉⲃⲟⲗ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">ونظرت الروح القدس عندما نزل من السماء. وسمعت صوت الآب صارخا قائلا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">"This is My beloved Son, with whom My soul is well pleased, He does My will hear Him, for He is the life Giver."</td>
            <td class="coptic">Ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁϣⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ: ⲉ̀ⲧⲁ ⲧⲁⲯⲩⲭⲏ ϯⲙⲁϯ ⲛ̀ϧⲏⲧϥ: ⲁϥⲉⲣ ⲡⲁⲟⲩⲱϣ ⲥⲱⲧⲉⲙ ⲛ̀ⲥⲱϥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲉϥⲧⲁⲛϧⲟ.</td>
            <td class="arabic">هذا هو ابنى حبيبى الذى سرت به نفسى وصنع مشيئتى. إسمعوا له لأنه هو المحيى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Intercede on our behalf, O forerunner and baptizer, John the Baptist, that He may forgive us our sins.</td>
            <td class="coptic">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">اشفع فينا أمام الرب أيها السابق الصابغ يوحنا المعمدان ليغفر خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
heavenlyDoxology(tableNumber) {
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
                    armies, and heavenly orders, that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲁⲣⲓⲡⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲓⲥⲧⲣⲁⲧⲓⲁ̀
                    ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">إشفعوا فينا أيها العساكر الملائكية والطغمات السمائية ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
// Apostles
apostlesDoxology(tableNumber) {
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
                    our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲛⲁ⳪
                    ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ⲡⲓϣ̀ⲃⲉ ⲥ̀ⲛⲁⲩ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الرسل والاثنان والسبعون تلميذاً ليغفر لنا
                    خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
secondApostlesDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Apostles Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second Apostles Doxology
        <span class="coptic-caption">Ⲡⲓϣⲟⲣⲡ ϧⲉⲛ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية الرسل الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The first among the Apostles, is called Simon Peter, he was entrusted with the keys, of the kingdom of the heavens.</td>
            <td class="coptic">Ⲡⲓϣⲟⲣⲡ ϧⲉⲛ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲥⲓⲙⲱⲛ Ⲡⲉⲧⲣⲟⲥ: ⲛ̀ⲑⲟϥ ⲟⲛ ⲡⲉ ⲉ̀ⲧⲁⲩⲧⲉⲛϩⲟⲩⲧϥ: ⲉ̀ⲛⲓϣⲟϣⲧ ⲛ̀ⲧⲉ ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲛⲓⲫⲏⲟ̀ⲩⲓ̀.</td>
            <td class="arabic">الأول في الرسل، يُدعى سمعان بطرس، هو أيضاً الذي اُؤتمن، ملكوت السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Also another one is John, he loved Him very much, he rested his head, on the shoulders of our Savior.</td>
            <td class="coptic">Ⲕⲉ ⲟⲩⲁⲓ ⲟⲛ ϫⲉ Ⲓⲱⲁ̀ⲛⲛⲏⲥ: ϥ̀ⲙⲉⲓ ⲙ̀ⲙⲟϥ ⲉ̀ⲙⲁϣⲱ: ⲁϥⲣⲉⲧⲉⲃ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫ̀ⲉⲛ: ⲑ̀ⲙⲉⲥⲧⲉⲛϩⲏⲧ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ.</td>
            <td class="arabic">وآخر أيضاً يدعي يوحنا، كان يحبه جداً، إتكأ على، صدر مخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">And the rest of the disciples, they also have honor, on account of their apostleship, for they followed our Savior.</td>
            <td class="coptic">Ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲟⲩⲟ̀ⲛ ⲛ̀ⲧⲱⲟⲩ ⲛ̀ⲟⲩⲧⲁⲓⲟ ⲙ̀ⲙⲁⲩ: ⲉⲑⲃⲉ ⲧⲟⲩⲙⲉⲧⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϫⲉ ⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ ⲡⲉⲛⲤⲱⲧⲏⲣ.</td>
            <td class="arabic">وبقية التلاميذ، لهم الكرامة، من أجل رسوليتهم، لأنهم تبعوا مخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Pray to the Lord on our behalf, my masters and fathers the Apostles, and the rest of the disciples, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اطلبوا من الرب عنا، يا سادتي الآباء الرسل، وبقية التلاميذ، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stMarkDoxology(tableNumber) {
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
                    ⲡⲓ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">أطلب من الرب عنا يا ناظر الإله الإنجيلى مرقس الرسول ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
secondStMarkDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second St. Mark Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second St. Mark Doxology
        <span class="coptic-caption">Ϣⲟⲙⲧ ⲛ̀ⲣⲁⲛ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀</span>
        <span class="arabic-caption">ذكصولوجية مرقس الرسول الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Three names in the heavens, you were clothed in, O beholder of God the Evangelist, St. Mark the Apostle.</td>
            <td class="coptic">Ϣⲟⲙⲧ ⲛ̀ⲣⲁⲛ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛ̀ⲑⲟⲕ ⲁⲕⲉⲣⲫⲟⲣⲓⲛ ⲉⲙⲙⲱⲟⲩ: ⲡⲓⲑⲉⲱⲣⲓⲙⲟⲥ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟϣ ⲡⲓⲡ̀ⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">ثلاثة أسماء فى السموات، أنت توشحت بها، يا ناظر الإله الإنجيلي، مرقس الرسول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">You were clothed in three crowns, the three perfect names, the Father and the Son, and the Holy Spirit.</td>
            <td class="coptic">Ⲁⲕⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓϣⲟⲙⲧ ⲛ̀ⲭ̀ⲗⲟⲙ: ⲡⲓϣⲟⲙⲧ ⲛ̀ⲣⲁⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲉ̀ⲧⲉ ⲫⲁⲓⲡⲉ Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀Ϣⲏⲣⲓ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">توشحت بثلاثة أكاليل، هي الثلاثه أسماء الكاملة، أي الآب والإبن، والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You are an Apostle, you are a martyr, you are the second, chosen one of the Evangelists.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲟⲩⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲑⲟⲕ ⲟⲛ ⲟⲩⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲑⲟⲕ ⲟⲛ ⲡⲉ ⲡⲓⲙⲁϩ ⲥ̀ⲛⲁⲩ: ⲛ̀ⲥⲱⲧⲡ ⲛ̀ⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲥⲧⲏⲥ.</td>
            <td class="arabic">أنت رسول، أنت شهيد، وأنت المختار الثاني، في الإنجليين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Your friends the Apostles, take pride in you, your words have reached, the ends of the word.</td>
            <td class="coptic">Ⲛⲉⲕ ⲕⲉϣ̀ⲫⲏⲣ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲥⲉϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲕ: ⲟⲩⲟϩ ⲛⲉⲕⲥⲁϫⲓ ⲁⲩⲫⲟϩ: ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲙⲉⲛⲏ.</td>
            <td class="arabic">وأصدقاؤك الرسل، الأخرون يفخرون بك، وأقوالك بلغت، إلى أقطار المسكونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And the ones you have planted, in earth and all Egypt, the fruitful servants, take pride in you.</td>
            <td class="coptic">Ⲥⲉϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲕ: ⲛ̀ϫⲉ ⲛⲏⲉ̀ⲧⲁⲕⲧⲟ ϫⲟⲩ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲧⲏⲣⲥ ⲛ̀ⲭⲏⲙⲓ: ⲁⲩⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ ⲉⲩϯⲕⲁⲣⲡⲟⲥ.</td>
            <td class="arabic">ويفخرون بك، الذين غرستهم على الأرض، في كل إقليم مصر، مُثمرين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O beholder of God the Evangelist, Saint Mark the Apostle, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ ⲡⲓⲑⲉⲱⲣⲓⲙⲟⲥ ⲛ̀ⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أُطلب من الرب عنا، يا ناظر الإله الإنجيلي، مرقس الرسول، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stPeterStPaulDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Peter & St.Paul Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Peter & St.Paul Doxology
        <span class="coptic-caption">Ⲡⲉⲧⲣⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية بطرس وبولس الرسولان</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Peter the Apostle, and Paul the wise, the heads of the disciples, of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲡⲉⲧⲣⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲥⲟⲫⲟⲥ: ⲛⲓⲁ̀ⲣⲭⲏ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">بطرس الرسول وبولس ذوالحكمة رؤساء تلاميذ ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Peter and Paul, trampled the power of Satan, and restored the nations, to the faith of the Trinity.</td>
            <td class="coptic">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ: ⲁⲩⲕⲱⲣϥ ⲛ̀ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ: ⲟⲩⲟϩ ⲁⲩⲧⲁⲥⲑⲟ ⲛ̀ⲛⲓⲉ̀ⲑⲛⲟⲥ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲫ̀ⲛⲁϩϯ ⲛ̀Ϯⲧⲣⲓⲁⲥ.</td>
            <td class="arabic">بطرس وبولس سحقا قوة الشيطان وردوا الأمم للأيمان بالثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Peter and Paul, are the spiritual priests, they demolished the temples, and the worship of idols.</td>
            <td class="coptic">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ: ⲇⲉ ⲟⲛ ⲛⲓⲟⲩⲏⲃ ⲙ̀ⲡ̀̅ⲛ̅ⲁ̅ⲧⲓⲕⲟⲛ: ⲁϥϣⲟⲣϣⲉⲣ ⲛ̀ⲛⲓⲉ̀ⲣⲫⲏⲟⲩⲓ̀: ⲛⲉⲙ ⲡ̀ϣⲉⲙϣⲓ ⲛ̀ⲛⲓⲓ̀ⲇⲱⲗⲟⲛ.</td>
            <td class="arabic">بطرس وبولس هما الكهنة الروحيين هدما هياكل وعبادة الأوثان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Peter and Paul, together are the workers and craftsmen, they restored all the nations, once more to the Creator.</td>
            <td class="coptic">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲡⲁⲩⲗⲟⲥ: ⲉⲩⲥⲟⲡ ⲛⲏⲉ̀ⲣⲅⲁⲧⲏⲥ ⲛ̀ⲣⲉϥⲉⲣϩⲱⲃ: ⲁⲩⲧⲁⲥⲑⲟ ⲛ̀ⲛⲓⲉ̀ⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ: ⲉ̀ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ ⲛ̀ⲕⲉⲥⲟⲡ.</td>
            <td class="arabic">بطرس وبولس معا الفاعلين العاملين ردا جميع الأمم الى الخالق دفعة أخرى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Peter and our teacher Paul, with great struggle, were in the stadium, of the apostles.</td>
            <td class="coptic">Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲥⲁϧ Ⲡⲁⲩⲗⲟⲥ: ⲁⲩϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲥ̀ⲧⲁⲇⲓⲟⲛ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲁⲅⲱⲛ.</td>
            <td class="arabic">بطرس ومعلمنا بولس كانا فى ميدان الرسولية فى جهاد عظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Our father Peter completed, his struggle with death on the cross, in the great city of Rome, for the name of Jesus Christ.</td>
            <td class="coptic">Ⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ ϫⲱⲕ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲙⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϧⲉⲛ ϯⲛⲓϣϯ ⲙ̀ⲡⲟⲗⲓⲥ Ⲣⲱⲙⲉ: ⲉⲑⲃⲉ ⲫ̀ⲣⲁⲛ ⲛ̀Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">أبونا بطرس أكمل بموت الصليب فى مدينة روما العظمى لأجل اسم ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Paul also likewise, was beheaded in that place, by Emperor Nero, all in one day.</td>
            <td class="coptic">Ⲡⲁⲩⲗⲟⲥ ⲇⲉ ⲟⲛ ⲙ̀ⲡⲁⲓⲣⲏϯ: ⲁⲩⲱ̀ⲗⲓ ⲛ̀ⲧⲉϥⲁ̀ⲫⲉ ⲙ̀ⲙⲁⲩ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡ̀ⲟⲩⲣⲟ Ⲛⲓⲣⲟⲛ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲟⲩⲱⲧ.</td>
            <td class="arabic">وهكذا أيضا بولس نزعت رأسه هناك من قبل الملك نيرون فى يوم واحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">They received glory form Christ, the King and they rested with Him, in His eternal kingdom, in the everlasting life.</td>
            <td class="coptic">Ⲁⲩϣⲉⲡ ⲱⲟⲩ ϩⲁ ⲡⲟⲩⲣⲟ Ⲡⲭ̅ⲥ̅: ⲟⲩⲟϩ ⲁⲩⲙ̀ⲧⲟⲛ ⲙ̀ⲙⲱⲟⲩ ⲛⲉⲙⲁϥ: ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲛⲉϩ: ⲛⲉⲙ ⲡⲓⲱⲛϧ ⲉϥⲙⲏⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">ونالا المجد من الملك المسيح واستراحا معه فى ملكوته الأبدى والحياة الدائمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">We also honor them, with David the psalmist, saying "Their voices went forth, onto the face of the whole world.</td>
            <td class="coptic">Ⲁⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲧⲉⲛⲧⲁⲓⲟ̀ ⲙ̀ⲙⲱⲟⲩ: ⲛⲉⲙ Ⲇⲁⲩⲓⲇ ⲡ̀ⲟⲩⲣⲟ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ϫⲉ ⲁ̀ⲡⲟⲩϧ̀ⲣⲱⲟⲩ ϣⲉⲛⲁϥ ⲉ̀ⲃⲟⲗ: ϩⲓϫⲉⲛ ⲡ̀ϩⲟ ⲙ̀ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣⲥ.</td>
            <td class="arabic">ونحن أيضا نكرمهما مع داود الملك المرنم. أن أصواتهم خرجت الى وجه الأرض كلها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Pray to the Lord on our behalf, O my masters and fathers the Apostles, our father Peter and our teacher Paul, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲡⲉⲛⲓⲱⲧ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲥⲁϧ Ⲡⲁⲩⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا يا سيدى الأباء الرسل أبانا بطرس ومعلمنا بولس ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stJohnTheEvangelistDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. John the Evangelist Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. John the Evangelist Doxology
        <span class="coptic-caption">Ⲓⲱⲁⲛⲛⲏⲥ Ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية يوحنا الانجيلى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">John the virgin, the Son of Zebedee, a native of Bethsaida, from the tribe of Zebulun.</td>
            <td class="coptic">Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲍⲉⲃⲉⲇⲉⲟⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲣⲉⲙ ⲙ̀Ⲃⲏⲇⲥⲁⲓⲇⲉ: ϧⲉⲛ ⲧ̀ⲫⲩⲗⲏ ⲛ̀ⲧⲉ Ⲍⲉⲃⲟⲗⲟⲛ.</td>
            <td class="arabic">يوحنا البتول ابن زبدى من أهل بيت صيدا من سبط زبولون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Christ has chosen him, and made him a disciple for Himself, and also an apostle, he loved Him very much.</td>
            <td class="coptic">Ⲁϥⲥⲱⲧⲡ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ Ⲡⲭ̅ⲥ̅: ⲁϥⲉ̀ⲣⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲛⲁϥ: ⲟⲩⲟϩ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛⲁϥⲙⲉⲓ ⲙ̀ⲙⲟϥ ⲉ̀ⲙⲁϣⲱ.</td>
            <td class="arabic">اختاره المسيح وصيره تلميذا له ورسولا وكان يحبه جدا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He also after dinner, rested upon the shoulder, of our Savior and said to him, "Who will betray You."</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓⲇⲏⲡⲛⲟⲛ: ⲁϥⲣⲱⲧⲉⲃ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ: ⲏ̀ⲙⲉⲥⲧⲉⲛϩⲏⲧ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲁϥϫⲟⲥ ⲛⲓⲙ ⲫⲏⲉ̀ⲑⲛⲁⲧⲏⲓⲕ.</td>
            <td class="arabic">وهو أيضا بعد العشاء اتكأ على صدر مخلصنا وقال من هو الذى يسلمك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Christ has spoken of you, through His holy mouth, "If I will that he remain till I come, what is that to you?"</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲟⲛ ⲉ̀ⲧⲁϥⲥⲁϫⲓ ⲉⲑⲃⲏⲧϥ: ⲛ̀ϫⲉ Ⲡⲭ̅ⲥ̅ ϧⲉⲛ ⲣⲱϥ ⲉ̅ⲑ̅ⲩ̅: ϫⲉ ⲉ̀ϣⲱⲡ ⲉⲓϣⲁⲛⲟⲩⲱϣ ⲉ̀ⲭⲁϥ: ⲉ̀ⲫⲁⲓ ϣⲁϯⲓ̀ ⲁ̀ϧⲟⲕ ⲛ̀ⲥⲱⲕ.</td>
            <td class="arabic">وهو أيضا الذى تكلم من أجله المسيح بفمه الطاهر. اذا أردت أن أجعله يبقى لحين مجيئى فماذا لك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And after thirty years, from the Holy Resurrection, he wrote his Gospel, and preached to the world.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲙⲉⲛⲉⲛⲥⲁ ⲙⲁⲡ ⲛ̀ⲣⲟⲙⲡⲓ: ⲉ̀ϯⲁⲛⲁⲥⲧⲁⲥⲓⲥ ⲉ̅ⲑ̅ⲩ̅: ⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲉϥⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲟⲛ: ⲁϥϩⲓⲱⲓϣ ⲙ̀ⲙⲟϥ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">وبعد ثلاثين سنة للقيامة المقدسة كتب انجيله. وكرز به فى العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Hail to you O martyr, hail to the Evangelist, hail to the apostle, of Christ the disciple.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅ ⲟⲩⲟϩ ⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic">السلام لك أيها البتول السلام للانجيلى السلام لرسول المسيح وتلميذه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Blessed are you indeed, O beloved of Christ, John the truly chosen one, the Son of Zebedee.</td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲱ̀ ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲥⲱⲧⲡ ⲙ̀ⲙⲏⲓ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲍⲉⲃⲉⲇⲉⲟⲥ.</td>
            <td class="arabic">طوباك بالحقيقة ياحبيب المسيح يوحنا المختار الحقيقى ابن زبدى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O virgin and the Evangelist, John the Apostle, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲥⲧⲏⲥ: Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها البتول الانجيلى يوحنا الرسول ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
anyApostleDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Any Apostle Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Any Apostle Doxology
        <span class="coptic-caption">Ⲑⲱⲟⲩϯ ⲧⲏⲣⲟⲩ ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ</span>
        <span class="arabic-caption">ذكصولوجية أي رسول</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Gather all and let us rejoice, in the honored remembrance, of the trusted disciple, (....) the Apostle.</td>
            <td class="coptic">Ⲑⲱⲟⲩϯ ⲧⲏⲣⲟⲩ ⲙⲁⲣⲉⲛⲑⲉⲗⲏⲗ: ϧⲉⲛ ⲡⲓⲉ̀ⲣⲫⲙⲉⲩⲓ̀ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ: ⲛ̀ⲧⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: (....) ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">اجتمعوا كلكم لنتهلل فى التذكار المكرم الذى للتلميذ المؤتمن(...) الرسول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For his chosen struggle, and his great and wonderful glory, that dwells upon the whole earth, became a guide for us.</td>
            <td class="coptic">Ϫⲉ ⲁϥϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ϭⲁⲩⲙⲱⲓⲧ: ⲛ̀ϫⲉ ⲡⲉϥⲁ̀ⲅⲱⲛ ⲉⲧⲥⲱⲧⲡ: ⲛⲉⲙ ⲡⲓⲛⲓϣϯ ⲛ̀ⲱ̀ⲟⲩ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲉ̀ⲧϣⲟⲡ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ.</td>
            <td class="arabic">لأنه صار لنا هاديا بجهاده المختار ومجده العظيم العجيب الكائن على الأرض كلها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He confessed to Christ, saying "He is the Son of God," he preached His holy Name, to all the nations.</td>
            <td class="coptic">Ⲁϥⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲙ̀Ⲡⲭ̅ⲥ̅: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡϣⲏⲣⲓ ⲙ̀Ⲫϯ: ⲁϥϩⲓⲱⲓϣ ϧⲉⲛ ⲡⲉϥⲣⲁⲛ ⲉ̅ⲑ̅ⲩ̅: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲓⲉ̀ⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">واعترف بالمسيح أنه ابن الله. وبشر باسمه القدوس فى جميع الأمم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He completed his struggle, with great courage, he wore the unfading crown, of the Apostles.</td>
            <td class="coptic">Ⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉϥⲁ̀ⲅⲱⲛ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲉⲧⲅⲉⲛⲛⲉⲟⲥ: ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">وأكمل جهاده بشجاعة عظيمة ونال الاكليل غير المضمحل الذى للرسولية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He came to the place of rest, and leaned upon Christ, with his apostolic friends, in the Kingdom of heaven.</td>
            <td class="coptic">Ⲁϥϩⲱⲗ ⲉ̀ⲛⲓⲙⲁⲛ̀ⲉⲙⲧⲟⲛ: ⲟⲩⲟϩ ⲁϥⲣⲱⲧⲉⲙ ⲛⲉⲙ Ⲡⲭ̅ⲥ̅: ⲛⲉⲙ ⲛⲉϥϣ̀ⲫⲏⲣ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
            <td class="arabic">ومضى إلى مواضع النياح واتكأ مع المسيح ورفقائه الرسل فى ملكوت السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf,O disciple of Christ, (...) the Apostle, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: (...) ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا تلميذ المسيح (...) الرسول ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
// Martyrs
stGeorgeDoxology(tableNumber) {
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
                    prize-bearer andmartyr, George my lord and prince, that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀̀ Ⲡϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ :
                    ⲱ̀ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲏⲣⲟⲥ : Ⲡⲁ⳪ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">أطلب من الرب عنا. أيها الشهيد المجاهد سيدى الملك جيؤرجيوس ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
stPhilopatirMercoriosDoxology(tableNumber) {
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
                    struggle mantled martyr: Philopateer Mercurius: that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀
                    ⲡⲓⲁⲏⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛ ⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">أطلب من الرب عنا: أيها الشهيد المجاهد: محب الآب مرقوريوس: ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
stMinaDoxology(tableNumber) {
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
                    that He may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀Ⲡ⳪ ⲉ̀ϩ̀ⲣⲏⲓ ⲉϫⲱⲛ ⲱ ⲡⲓⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀⳥
                    ⲡⲓⲁⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ  ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ. ${cross}</td>
                <td class="arabic" >أطلب من الرب عنا أيها الشهيد المجاهد آبا
                    مينا البياضى ليغفر لنا خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
stAbanoubofNehisDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Abanoub of Nehis Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Abanoub of Nehis Doxology
        <span class="coptic-caption">Ⲛ̀ⲑⲟⲕ ⲟⲩⲁ̀ⲗⲟⲩ ⲛ̀ⲥⲁⲃⲉ</span>
        <span class="arabic-caption">ذكصولوجية ابانوب النهيسي</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">You are a wise child, O Abanoub of Nehis, because you are chaste and pure, you are loved by the Master</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲟⲩⲁ̀ⲗⲟⲩ ⲛ̀ⲥⲁⲃⲉ: ⲱ̀ Ⲁⲡⲁⲛⲟⲩⲃ ⲡⲓⲣⲉⲙⲛⲉϩⲓⲥ: ⲉⲑⲃⲉ ⲡⲉⲕⲧⲟⲩⲃⲟ ⲛⲉⲙ ⲡⲉⲕⲥⲉⲙⲛⲟⲥ: ⲁⲕϣⲱⲡⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ ⲙ̀ⲡⲓⲆⲉⲥⲡⲟⲧⲏⲥ</td>
            <td class="arabic">انت صبي حكين، يا ابانوب النهيسي، من اجل طهارتك وعفتك، صرت حبيباً للسيد</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">+He abandoned the whole world, in order to seek the heavens. he carried his cross, and he gained his soul</td>
            <td class="coptic">+Ⲁϥⲭⲱ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲉϥⲕⲱϯ ⲛ̀ⲥⲁ ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ: ⲁϥⲱⲗ ⲙ̀ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ ⲉ̀ϫⲱϥ: ⲁϥϫⲉⲙϩⲏⲟⲩ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ</td>
            <td class="arabic">+ترك حنه العالم كله، طالبا السمائيات، وحمل صليبه، وربح نفسه</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">When he was hung by his feet, his head was down on the ship's mast, he did not move, his heart was full of strength</td>
            <td class="coptic">Ⲉⲧⲁϥⲉϣ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉϥϭⲁⲗⲁⲩϫ: ⲟⲩⲟϩ ⲧⲉϥⲁ̀ⲫⲉ ⲉ̀ⲡⲉⲥⲏⲧ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡⲓⲑⲱⲕ ⲛ̀ϫⲟⲓ: ⲙ̀ⲡⲉϥⲕⲓⲙ ⲁϥⲉⲣⲧⲁϫⲣⲟ ⲛ̀ϩⲏⲧ</td>
            <td class="arabic">لنا علقوه من قدمية، ورأسه إلى أسفل، على صاري المركب، لم يتزعزع وثبت قلبه</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">+He became a golden lampstand, in the places of the faithful, the strong saint Abanoub, who received tortures</td>
            <td class="coptic">+Ⲁϥϣⲱⲡⲓ ⲛ̀ⲟⲩⲗⲩⲭⲛⲓⲁ̀ ⲛ̀ⲛⲟⲩⲃ: ϧⲉⲛ ⲛⲓⲧⲟⲡⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲡⲓϫⲱⲣⲓ ⲉ̅ⲑ̅ⲩ̅ Ⲁ̀ⲡⲁⲛⲟⲩⲃ: ⲫⲏⲉ̀ⲧⲁϥϣⲉⲡ ⲛ̀ⲛⲓⲃⲁⲥⲁⲛⲟⲥ</td>
            <td class="arabic">+صار منارة ذهبية، في دياى المؤمنين، القوي القديس ابانوب، للذي تحمل العذاب</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Many who saw his struggle, and his firm faith, confessed with a loud voice, "Our God is Jesus the Blessed"</td>
            <td class="coptic">Ϩⲁⲛⲙⲏϣ ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲡⲉϥⲁⲅⲱⲛ: ⲛⲉⲙ ⲡⲉϥⲛⲁϩϯ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲁⲩⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ϧⲉⲛ ⲟⲩϧ̀ⲣⲱⲟⲩ: ϫⲉ ⲡⲉⲛⲚⲟⲩϯ ⲡⲉ Ⲓⲏ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ</td>
            <td class="arabic">كثيرون لما رأوا جهده، وإيمانه الثابت، اعترفوا بعلان، الهنا هو يسوع المبارك</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">+They took with him the unfading crown, of martyrdom, through their upright faith, in our Lord Jesus Christ</td>
            <td class="coptic">+Ⲁⲩϭⲓ ⲛⲉⲙⲁϥ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲟⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ϩⲓⲧⲉⲛ ⲡⲟⲩⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡ̅ⲭ̅ⲥ̅</td>
            <td class="arabic">+ونالوا اكليل الشهدة، الغير المضمحل، من قبل إيمانهم المستقيم، بربنا يسوع المسيح</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to you o martyr, of our Lord Jesus Christ, hail to the courageous hero, Abanoub of Nehis</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡ̅ⲭ̅ⲥ̅: ⲭⲉⲣⲉ ⲡⲓϣⲱⲓϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ: Ⲁⲡⲁⲛⲟⲩⲃ ⲡⲓⲣⲉⲙⲛⲉϩⲓⲥ</td>
            <td class="arabic">السلام لك يا شهيد، ربنا يسوع المسيح، السلام للشجاع البطل، ابانوب النهيسي</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">+Pray to the Lord on our behalf, o struggle mantled martyr, Apanoub of Nehis, that He may forgive us our sins.</td>
            <td class="coptic">+Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲁⲡⲁⲛⲟⲩⲃ ⲡⲓⲣⲉⲙⲛⲉϩⲓⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ</td>
            <td class="arabic">+اطلب من الرب عنا، ايها الشهيد المجاهد، ابانوب النهيسي، ليغفر لنا خطيانا</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stStephentheFirstMartyrDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Stephen the First Martyr Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Stephen the First Martyr Doxology
        <span class="coptic-caption">Ⲫⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية اول الشهداء استفانوس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The honored martyr, of our Lord Jesus Christ, Stephen the Saint, which means "a crown".</td>
            <td class="coptic">Ⲫⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲧⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̅ⲑ̅ⲩ̅ Ⲥ̀ⲧⲉⲫⲁⲛⲟⲥ: ⲉ̀ⲧⲉ ⲡⲉϥⲟⲩⲱ̀ϩⲉⲙ ⲡⲉ ⲡⲓⲭ̀ⲗⲟⲙ.</td>
            <td class="arabic">الشهيد المكرم الذي لربنا يسوع المسيح القديس استفانوس الذى تأويله الإكليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">God revealed unto him, the great mysteries, and his face shone, like the face of an angel.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁ Ⲫϯ ϭⲱⲣⲡ ⲉ̀ⲣⲟϥ: ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲁϥϭⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ϫⲉ ⲡⲉϥϩⲟ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡ̀ϩⲟ ⲛ̀ⲟⲩⲁ̀ⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">الذي كشف له الله أسرارا عظيمة واستنار وجهه مثل وجه ملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He saw the heavens open, and my Lord Jesus at the right hand of His Father, and those who were stoning him, he prayed for their salvation.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀ ⲉⲩⲟⲩⲏⲛ: ⲟⲩⲟϩ ⲡⲁⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ⲥⲁⲟⲩⲓⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲏⲉ̀ⲧⲁⲩϩⲓⲱ̀ⲛⲓ ⲉ̀ϫⲱϥ: ⲛⲁϥⲧⲱⲃϩ ⲛ̀ⲥⲁ ⲡⲟⲩⲟⲩϫⲁⲓ.</td>
            <td class="arabic">الذي رأى السموات مفتوحة وربنا يسوع عن يمين أبيه. والذين يرجمونه كان يطلب عن خلاصهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Proclaiming and saying, "O my Lord Jesus Christ, receive my spirit, and count not this sin against them."</td>
            <td class="coptic">Ⲉϥⲱϣ ⲉⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲡⲁⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ϣⲉⲡ ⲡⲁⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲣⲟⲕ: ⲙ̀ⲡⲉⲣⲉⲡ ⲡⲁⲓⲛⲟⲃⲓ ⲉ̀ⲛⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">صارخا قائلا يا ربى يسوع المسيح اقبل روحى اليك ولا تحسب هذه الخطية علي هؤلاء الناس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">"For they know not, what they are doing, because of the blindness of their hearts, Lord do not hold this against them."</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲥⲉⲥⲱⲟⲩⲛ ⲛ̀ϩ̀ⲗⲓ ⲁⲛ: ϧⲉⲛ ⲛⲏⲉ̀ⲧⲟⲩⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ: ⲉ̀ⲑⲃⲉ ⲡⲓⲑⲱⲙ ⲛ̀ⲧⲉ ⲡⲟⲩϩⲏⲧ: Ⲡⲟ̅ⲥ̅ ⲙ̀ⲡⲉⲣⲥⲟϩⲓ ⲙ̀ⲙⲱⲟⲩ.</td>
            <td class="arabic">لأنهم لا يدرون ماذا يصنعون من أجل عمى قلوبهم. يا رب لا تبكتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">He completed his mission, and he died for the truth, and he wore the unfading crown, of martyrdom.</td>
            <td class="coptic">Ⲡⲉϥⲇ̀ⲣⲟⲙⲟⲥ ⲁϥϫⲟⲕϥ ⲉⲃⲟⲗ: ⲟⲩⲟϩ ⲁϥⲙⲟⲩ ⲉϫⲉⲛ ϯⲙⲉⲑⲙⲏⲓ: ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">أكمل سعيه ومات على الحق ولبس اكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail O persevering one, of our Lord Jesus Christ, Stephen the Saint, which means "a crown".</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲏⲧⲏⲥ: ⲛ̀ⲧⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̅ⲑ̅ⲩ̅ Ⲥ̀ⲧⲉⲫⲁⲛⲟⲥ: ⲉⲧ̀ⲉ ⲡⲉϥⲟⲩⲱ̀ϩⲉⲙ ⲡⲉ ⲡⲓⲭ̀ⲗⲟⲙ.</td>
            <td class="arabic">السلام لك أيها المجاهد الذى لربنا يسوع المسيح القديس استفانوس الذى تأويله الإكليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O blessed archdeacon, Stephen the first martyr, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲁ̀ⲣⲭⲏⲇⲓⲁⲕⲱⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: Ⲥ̀ⲧⲉⲫⲁⲛⲟⲥ ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يا رئيس الشمامسة المبارك استفانوس الشهيد الأول، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stTheodorusElShotbeDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Theodorus El-Shotbe Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Theodorus El-Shotbe Doxology
        <span class="coptic-caption">Ⲁⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅</span>
        <span class="arabic-caption">ذكصولوجية الشهيد ثيؤدوروس الاسفهسلار</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Our Lord Jesus Christ, was compassionate to the tears, of the widow of Nain, He raised her son.</td>
            <td class="coptic">Ⲁⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ϣⲁⲛⲁϩ̀ⲑⲏϥ ϧⲁ ⲛⲓⲉ̀ⲣⲙⲱⲟⲩⲓ̀: ⲛ̀ⲧⲉ ϯⲭ̀ⲏⲣⲁ ⲉⲧ ϧⲉⲛ Ⲛⲁⲓ̀ⲛ: ⲁϥⲧⲟⲩⲛⲟⲥ ⲡⲉⲥϣⲏⲣⲓ ⲛⲁⲥ.</td>
            <td class="arabic">ربنا يسوع المسيح تحنن على دموع الارملة ببلدة نايين وأقام لها ابنها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Theodorus the general, was compassionate to the tears, of the widow of Eucaita, he raised her sons.</td>
            <td class="coptic">Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ ⲡⲓⲥ̀ⲧⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ⲁϥϣⲁⲛⲁϩ̀ⲑⲏϥ ϧⲁ ⲛⲓⲉ̀ⲣⲙⲱⲟⲩⲓ̀: ⲉⲧ ϧⲉⲛ Ⲉⲩⲭⲏⲧⲟⲥ: ⲁϥⲧⲟⲩϫⲉ ⲛⲉⲥϣⲏⲣⲓ ⲛⲁⲥ.</td>
            <td class="arabic">وثيؤدوروس الاسفهسلار تحنن على دموع الارملة التى) ببلدة أوخيطس( وخلص لها أولادها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Wherefore we sing, with David the Psalmist, saying "Tread upon serpents, and the power of scorpions."</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣⲭⲟⲣⲉⲩⲓⲛ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ ⲉ̀ⲕ̀ϩⲱⲙⲓ ⲉ̀ϫⲉⲛ ⲟⲩϩⲟϥ: ⲛⲉⲙ ⲟⲩⲃⲁⲥⲓⲗⲓⲥⲕⲟⲥ.</td>
            <td class="arabic">فلهذا نمدح مع المرتل داود قائلين تدوس الثعبان وملك الحيات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Pray to the Lord on our behalf, O struggle mantled martyr, Theodorus the general, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲓⲥ̀ⲧ̀ⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا أيها الشهيد المجاهد ثيؤدوروس الاسفهسلار ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stTheodorusElMashriqiDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Theodorus El-Mashriqi">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Theodorus El-Mashriqi Doxology
        <span class="coptic-caption">Ⲛ̀ⲑⲟⲕ ⲟⲩⲙⲟⲩⲓ̀ ⲉϥϩⲉⲗϩⲉⲙ</span>
        <span class="arabic-caption">ذكصولوجية الشهيد ثيؤدوروس المشرقى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">You are the victorious lion, in the midst of the wars, upon the screaming horse, O Theodorus Anatolius.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲟⲩⲙⲟⲩⲓ̀ ⲉϥϩⲉⲗϩⲉⲙ: ϧⲉⲛ ⲏ̀ⲙⲏϯ ⲛ̀ⲛⲓⲡⲟⲗⲉⲙⲟⲥ: ⲉ̀ϫⲉⲛ ⲟⲩϩ̀ⲑⲟ ⲉϥϩⲉⲙϩⲉⲙ: ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲓⲀ̀ⲛⲁⲧⲟⲗⲉⲟⲥ.</td>
            <td class="arabic">أنت الأسد الغالب فى وسط الحروب على صهيل الفرس ياثيؤدوروس المشرقى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">And when your voice came forth, the Barbarians fell, and your evil enemies, which are the devils feared.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲕϣⲁⲛϯ ⲙ̀ⲡⲉⲕϧ̀ⲣⲱⲟⲩ: ϣⲁⲩϩⲉⲓ ⲛ̀ⲭⲉⲛⲓ ⲃⲁⲣⲃⲁⲣⲟⲥ: ϣⲁⲩϣⲁⲓ ⲛ̀ϫⲉ ⲛⲉⲕϫⲁϫⲓ ⲉⲧϩⲱⲟⲩ: ⲉ̀ⲧⲉ ⲛⲁⲓ ⲛⲉ ⲛⲓⲇⲓⲁⲃⲟⲗⲟⲥ.</td>
            <td class="arabic">اذا ما أعطيت صوتك تسقط البرابرة وتصرع أعداءك الأشرار الذين هم الشياطين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You slaughtered the dragon, who was under the ladder, you completed your struggle, with unbending uprightness.</td>
            <td class="coptic">Ⲁⲕϧⲱⲧⲉⲃ ⲙ̀ⲡⲓⲇ̀ⲣⲁⲕⲟⲛ: ⲉⲧⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ϯⲙⲟⲩⲕⲓ: ⲁⲕϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉⲕⲁ̀ⲅⲱⲛ: ϧⲉⲛ ⲟⲩⲥⲱⲟⲩⲧⲉⲛ ⲛ̀ⲁ̀ⲧⲣⲓⲕⲓ.</td>
            <td class="arabic">قتلت التنين الكائن تحت السلم وأكملت جهادك بغير ملل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">You were truly baptized for the sake, of Christ in the lake of fire, with your two friends, Leontius and Panikarus.</td>
            <td class="coptic">Ⲁⲕϯ ϭⲓⲱ̀ⲙⲥ ⲛⲁⲕ ⲉⲑⲃⲉ Ⲫϯ: ϧⲉⲛ ϯⲗⲩⲙⲛⲏ ⲛ̀ⲭ̀ⲣⲱⲙ: ⲁⲗⲏⲑⲱⲥ ⲛ̀ⲑⲟⲕ ⲛⲉⲙ ⲛⲉⲕϣ̀ⲫⲏⲣ ⲥ̀ⲛⲟⲩϯ: Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ.</td>
            <td class="arabic">غطست فى بحيرة النار من أجل الله بالحقيقة أنت وصديقيك لاونديوس وبانيكاروس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Therefore David, joyfully honored you, saying "Gird your sword, upon your thigh O mighty one."</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲧⲁⲓⲟ̀ ⲙ̀ⲙⲟⲕ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ϫⲉ ⲙⲟⲩⲣ ⲛ̀ⲧⲉⲕⲥⲏϥⲓ ⲉ̀ⲡⲉⲕⲁ̀ⲗⲟϫ: ⲫⲏⲉ̀ⲧⲉ ⲟⲩⲟⲛ ϣ̀ϫⲟⲙ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">لأجل هذا كرمك داود بابتهاج تقلد بسيفك على فخذك أيها الجبار</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O Theodorus Anatolius, and Leontius and Panikarus, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: Ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲓⲀ̀ⲛⲁⲧⲟⲗⲉⲟⲥ: ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ ⲛⲉⲙ Ⲡⲁⲛⲓⲕⲁⲣⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اطلبوا عنا ياثيؤدوروس ولاونديوس وبنيكاروس ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stsSergiusAndBacchusDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Sts. Sergius & Bacchus Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Sts. Sergius & Bacchus Doxology
        <span class="coptic-caption">Ⲙⲁⲣⲟⲩⲟⲩⲛⲟϥ ⲛ̀ⲧⲟⲩⲑⲉⲗⲏⲗ</span>
        <span class="arabic-caption">ذكصولوجية القديسان سرجيوس وواخس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let the holy martyrs, the great defenders, rejoice and be glad, Saint Sergius and Saint Bacchus.</td>
            <td class="coptic">Ⲙⲁⲣⲟⲩⲟⲩⲛⲟϥ ⲛ̀ⲧⲟⲩⲑⲉⲗⲏⲗ: ⲛ̀ϫⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ⲛⲓⲣⲉϥⲙⲓϣⲓ ⲛ̀ⲕⲁⲗⲱⲥ: ⲛⲓⲁⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ.</td>
            <td class="arabic">ليفرح ويتهلل الشهيدان الطاهران المجاهدان حسنا القديسان سرجيوس وواخس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For they became martyrs, and followers of Christ, they performed many works, of wonder and awe.</td>
            <td class="coptic">Ⲁⲩϣⲱⲡⲓ ϫⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲣⲉϥⲥⲱⲧⲉⲙ ⲛ̀ⲥⲁ Ⲡⲭ̅ⲥ̅: ⲟⲩⲟϩ ⲁⲩⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀: ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ ⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">لأنهما صارا شهيدين مطيعين للمسيح وصنعا أعمالا ممجده عالية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">As for them they rejoice, with Christ the Creator, for they shed their blood, for His blessed Name.</td>
            <td class="coptic">Ⲛⲑⲱⲟⲩ ⲉⲩⲉⲑⲗⲏⲗ ⲙ̀ⲙⲱⲟⲩ: ⲛⲉⲙ Ⲡⲭ̅ⲥ̅ ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ̀: ϫⲉ ⲁⲩⲫⲱⲛ ⲙ̀ⲡⲟⲩⲥ̀ⲛⲟϥ ⲉ̀ⲃⲟⲗ: ϩⲓϫⲉⲛ ⲡⲉϥⲣⲁⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.</td>
            <td class="arabic">أما هما فهللا مع المسيح الخالق. لأنهما سفكا دمهما على اسمه المبارك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Hail to Sergius and Bacchus, the strong and chosen heroes, of Christ the King of glory, the only-begotten God.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ⲛⲓϭⲱⲓϫ ⲛ̀ⲇⲏⲛⲁⲧⲟⲥ ⲉⲧⲥⲱⲧⲡ: ⲙ̀Ⲡⲭ̅ⲥ̅ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">السلام لسرجيوس وواخس الشجاعين القويين المختارين للمسيح ملك المجد الاله الوحيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Rejoice O Sergius and Bacchus, the true stars, who became the golden lamps, of the holy Church.</td>
            <td class="coptic">Ⲟⲩⲛⲟϥ ⲱ̀ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ⲛⲓⲫⲱⲥⲧⲏⲣ ⲛ̀ⲁⲗⲏⲑⲓⲛⲟⲥ: ⲉ̀ⲧⲁⲩϣⲱⲡⲓ ⲛ̀ⲟⲩⲗⲩⲭⲛⲓⲁ̀ ⲛ̀ⲛⲟⲩⲃ: ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">افرحا ياسرجيوس وواخس الكوكبان الحقيقيان اللذان صارا منارة ذهبية للكنيسة المقدسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Rejoice O Sergius and Bacchus, the bright and sparkling ones, who enlightened our souls, with their holy bodies.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ⲛ̀ⲣⲉϥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ ⲛ̀ⲗⲁⲙⲡ̀ⲣⲟⲥ: ⲉ̀ⲧⲁⲩⲉ̀ⲣⲟⲩⲱⲓⲛⲓ ⲛ̀ⲛⲉⲛⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲛⲟⲩⲗⲩⲙⲁⲛⲟⲛ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">افرحا ياسرجيوس وواخس المنيرين اللامعين اللذين أنارا نفوسنا بجسديهما الطاهرين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to you O martyrs, of our Lord Jesus Christ, hail to the courageous heroes, Saints Sergius and Bacchus.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲱⲧⲉⲛ ⲱ̀ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲭⲉⲣⲉ ⲛⲓϭⲱⲓϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ: ⲛⲓⲁ̀ⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ.</td>
            <td class="arabic">السلام لكما ياشهيدى ربنا يسوع المسيح. السلام للشجاعين القويين القديسين سرجيوس وواخس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O struggle mantled martyrs, Saint Sergius and Saint Bacchus, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲛⲓⲁ̀ⲑⲗⲟⲫⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲓⲁ̀ⲅⲓⲟⲥ Ⲥⲉⲣⲅⲓⲟⲥ ⲛⲉⲙ Ⲃⲁⲭⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا أيها الشهيدان المجاهدان القديسان سرجيوس وواخس ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stsCosmasAndDemian(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Sts. Cosmas and Demian">
    
    <caption id="caption_table_${tableNumber}" class="caption">Sts. Cosmas and Demian Doxology
        <span class="coptic-caption">Ⲧⲓⲟⲩ ⲛ̀ⲥⲟⲛ ⲛ̀ⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية الشهداء قزمان ودميان</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Five struggling brothers, the ministers of Christ, purity to their virginity, from their one mother.</td>
            <td class="coptic">Ⲧⲓⲟⲩ ⲛ̀ⲥⲟⲛ ⲛ̀ⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ: ⲛ̀ⲇⲓⲁ̀ⲕⲱⲛ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲟⲩⲧⲟⲩⲃⲟ ϧⲉⲛ ⲧⲟⲩⲡⲁⲣⲑⲉⲛⲓⲁ̀: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲟⲩⲙⲁⲩ ⲛ̀ⲟⲩⲱⲧ.</td>
            <td class="arabic">خمسة اخوة مجاهدين خدام المسيح أطهارا فى بتوليتهم من أم واحدة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Cosmas and Demian, Anthimus and Leontius, and also Arabius, they were doctors and physicians.</td>
            <td class="coptic">Ⲉⲧⲉ Ⲕⲟⲥⲙⲁ ⲛⲉⲙ Ⲇⲉⲙⲓⲛⲟⲥ: ⲛⲉⲙ Ⲁⲛⲑⲓⲙⲟⲥ ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ: ⲛⲉⲙ ⲟⲩⲠⲣⲁⲃⲓⲟⲥ ϩⲁⲛⲥⲏⲓⲛⲓ ⲛⲉ: ⲟⲩⲟϩ ⲛ̀ⲥⲟⲫⲟⲥ ϧⲉⲛ ⲧⲟⲩⲡⲓⲥⲧⲏⲙⲏ.</td>
            <td class="arabic">الذين هم قزمان ودميان وأنتيموس ولاونديوس وأبرابيوس أطباء وحكماء فى صناعتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They healed every sickness, of the soul and the body, and love was in their midst, their house was open for all.</td>
            <td class="coptic">Ⲉⲩⲉⲣⲫⲁϧ̀ⲣⲓ ⲉ̀ϣⲱⲛⲓ ⲛⲓⲃⲉⲛ: ⲛⲁ ⲛⲓⲯ̀ⲩⲭⲏ ⲛⲉⲙ ⲛⲁ ⲛⲓⲥⲱⲙⲁ: ⲉ̀ⲣⲉ ϯⲁ̀ⲅⲁⲡⲏ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ: ⲉ̀ⲣⲉ ⲡⲟⲩⲏ̀ⲓ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">يعالجون كل الأمراض النفسية والجسدية والمحبة فى وسطهم وكان بيتهم لكل واحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The five brothers arose, and went to the governor, they performed many wonders, and signs on the way.</td>
            <td class="coptic">Ⲁⲩⲧⲱⲟⲩⲛⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲧ̀ⲓⲟⲩ ⲛ̀ⲥⲟⲛ: ⲁⲩϣⲉⲛⲱⲟⲩ ϣⲁ ⲡⲓϩⲏⲅⲉⲙⲱⲛ: ⲁⲩⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲛⲉⲙ ϩⲁⲛⲙⲏⲓⲛⲓ ϩⲓ ⲡⲓⲙⲱⲓⲧ.</td>
            <td class="arabic">فقام الخمسة اخوة ومضوا الى الوالى وفى الطريق صنعوا عجائب وآيات عظيمة فى الطريق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Saint Theodota, their blessed and holy mother, confirmed them in the faith, in the Name of Jesus Christ.</td>
            <td class="coptic">Ϯⲁ̀ⲅⲓⲁ ⲑⲉⲟ̀ⲇⲟⲇⲁ: ⲧⲟⲩⲙⲁⲩ ⲛ̀ⲧ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲉ̅ⲑ̅ⲩ̅: ⲛⲁⲥⲧⲁϫⲣⲟ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲉ̀ϫⲉⲛ ⲫ̀ⲣⲁⲛ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">والقديسة ثيؤدوتا أمهم المباركة القديسة كانت تثبتهم فى الايمان على اسم يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">For when they all stood, before the governor, they gave their confession, with great fervor.</td>
            <td class="coptic">Ⲉⲧⲁⲩⲟ̀ϩⲓ ⲅⲁⲣ ⲉ̀ⲣⲁⲧⲟⲩ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲓϩⲏⲅⲉⲙⲱⲛ: ⲁⲩϯ ⲛ̀ϯⲟ̀ⲙⲟⲗⲟⲅⲓⲁ̀: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲙ̀ⲡⲁⲣⲣⲏⲥⲓⲁ̀.</td>
            <td class="arabic">ولما وقفوا أمام الوالى جاهروا باعترافهم باعلان عظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">With this they wore the unfading crowns, of martyrdom, they celebrated with Christ, in the land of the living.</td>
            <td class="coptic">Ϧⲉⲛ ⲛⲁⲓ ⲁⲩⲉⲣⲫⲟⲣⲓⲛ ⲛ̀ϩⲁⲛⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲩⲉⲣϣⲁⲓ ⲛⲉⲙ Ⲡⲭ̅ⲥ̅: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.</td>
            <td class="arabic">وبهذا توشحوا باكليل الشهادة غير المضمحل وعيدوا مع المسيح فى كورة الأحياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O struggle mantled martyrs, Cosmas and his brothers and their mother, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲕⲟⲥⲙⲁ ⲛⲉⲙ ⲛⲉϥⲥ̀ⲛⲏⲟⲩ ⲛⲉⲙ ⲧⲟⲩⲙⲁⲩ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا عنا أيها الشهداء المجاهدون قزمان وأخوته وأمهم ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stSarapamonTheBishopofNikuDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Sarapamon The Bishop of Niku Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Sarapamon The Bishop of Niku Doxology
        <span class="coptic-caption">Ⲱ ⲡⲓⲛⲓϣϯ ⲙ̀ⲫⲱⲥⲧⲏⲣ</span>
        <span class="arabic-caption">ذكصولوجية الشهيد أنبا صرابامون الأسقف</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O great star, the holy shepherd, Abba Sarapamon the Bishop, the chosen martyr.</td>
            <td class="coptic">Ⲱ ⲡⲓⲛⲓϣϯ ⲙ̀ⲫⲱⲥⲧⲏⲣ: ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲉ̅ⲑ̅ⲩ̅: ⲁⲃⲃⲁ Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲟⲩⲟϩ ⲡⲓⲥⲱⲧⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">أيها الكوكب العظيم والراعى القديس أنبا صرابامون الأسقف والشهيد المختار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">This is he who has blossomed, from the blessed root, of the great Stephen, the first Martyr.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁϥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ϯⲛⲟⲩⲛⲓ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ Ⲥ̀ⲧⲉⲫⲁⲛⲟⲥ: ⲟⲩⲟϩ ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">هذا الذى أزهر من الأصل المبارك الذى لاسطفانوس العظيم أول الشهداء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Who became a teacher, he explained the holy Scriptures, through the Holy Spirit, they called him a shepherd.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛ̀ⲣⲉϥⲉ̀ⲙⲓ: ⲁϥⲉⲣⲙⲉⲛⲉⲩⲓⲛ ⲛ̀ⲛⲓⲅ̀ⲣⲁⲫⲏ ⲉ̅ⲑ̅ⲩ̅: ϩⲓⲧⲉⲛ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲁⲩⲑⲱϩⲉⲙ ⲙ̀ⲙⲟϥ ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ.</td>
            <td class="arabic">الذى صار عالما ومفسرا للكتب المقدسة من قبل الروح القدس فدعى راعيا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Through his confession, of Christ our Savior, he was worthy of the unfading crown, of martyrdom.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲧⲉϥⲟ̀ⲙⲟⲗⲟⲅⲓⲁ: ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲁϥⲉⲣⲉⲙ̀ⲡ̀ϣⲁ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">وباعترافه بالمسيح مخلصنا استحق الاكليل غير المضمحل الذى للشهادة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He celebrated with the martyrs, in the Kingdom of heaven, he rejoiced with Christ, in the land of the living.</td>
            <td class="coptic">Ⲁϥⲉ̀ⲣϣⲁⲓ ⲛⲉⲙ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ϧⲉⲛ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥⲟⲩⲛⲟϥ ⲙ̀ⲙⲟϥ ⲛⲉⲙ Ⲡⲭ̅ⲥ̅: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲧⲟⲛϧ.</td>
            <td class="arabic">وعيد مع الشهداء فى ملكوت السموات وفرح مع المسيح فى كورة الأحياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Likewise we magnify you, with David the psalmist, You are a priest forever, according to the order of Melchizedek.</td>
            <td class="coptic">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉ̀ⲛⲉϩ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">لذلك نرفعك مع المرنم داود قائلين انك انت هو الكاهن الى الأبد على رتبة ملشيصاداق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Through his pleasant prayers, O Christ our Savior, grant us Your true peace, and the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲉϥⲉⲩⲭⲏ ⲉⲩϣⲏⲡ: Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ ⲙ̀ⲙⲏⲓ: ⲛⲉⲙ ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلواته المقبولة أيها المسيح الهنا مخلصنا امنحنا سلامك الحقيقى ومغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O struggle mantled martyr, Abba Sarapamon the Bishop, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲃⲃⲁ Ⲥⲁⲣⲁⲡⲁⲙⲱⲛ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها الشهيد المجاهد أنبا صرابامون الأسقف ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stsAbakirAndJohnDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Sts. Abakir and John Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Sts. Abakir and John Doxology
        <span class="coptic-caption">Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ</span>
        <span class="arabic-caption">ذكصولوجية الشهيدان أباكير ويوحنا</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Abakir and his brother John, and their blessed sisters, the soldiers of Christ, loved Him very much.</td>
            <td class="coptic">Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ: ⲛⲉⲙ ⲥⲱⲛⲓ ⲥ̀ⲛⲁⲩ (ⲃ̅) ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲛⲓⲙⲁⲧⲟⲓ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲛⲁⲩⲙⲉⲓ ⲙ̀ⲙⲟϥ ⲉ̀ⲙⲁϣⲱ.</td>
            <td class="arabic">أباكير ويوحنا أخوه مع أختين مباركتين جنود المسيح كانوا يحبونه جدا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Because of their trusted love, and their faith in Christ, they hated the whole world, its riches and all that is in it.</td>
            <td class="coptic">Ⲁⲩⲙⲟⲥϯ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ: ⲛⲉⲙ ⲛⲉϥⲭ̀ⲣⲏⲙⲁ ⲛⲉⲙ ⲡⲓⲡ̀ⲧⲏⲣϥ: ⲉⲑⲃⲉ ⲧⲟⲩⲁ̀ⲅⲁⲡⲏ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲉⲙ ⲡⲟⲩⲛⲁϩϯ ϧⲉⲛ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">أبغضوا العالم كله ومقتنياته وكل ما فيه من أجل محبتهم الصادقة وايمانهم بالمسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They suffered in their bodies, many great afflictions, through the faith of Christ, they did not surrender to them.</td>
            <td class="coptic">Ⲁⲩϣⲉⲡⲙ̀ⲕⲁϩ ϧⲉⲛ ⲛ̀ⲟⲩⲥⲱⲙⲁ: ϩⲓⲧⲉⲛ ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲃⲁⲥⲁⲛⲟⲥ: ⲉⲑⲃⲉ ⲫ̀ⲛⲁϩϯ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲙ̀ⲙⲟⲛ ⲧⲟⲩⲭⲁⲩⲁ̀ⲣⲟⲥ ⲙ̀ⲙⲱⲟⲩ.</td>
            <td class="arabic">تألموا فى أجسادهم بعذابات عظيمة من أجل الايمان بالمسيح ولم يتخلوا عنها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">They received unfading crowns, of martyrdom, they celebrated with all the saints, in the land of the living.</td>
            <td class="coptic">Ⲁⲩϭⲓ ⲛ̀ϩⲁⲛⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲩⲉ̀ⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏⲉ̅ⲑ̅ⲩ̅ ⲧⲏⲣⲟⲩ: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲧⲱ̀ⲛϧ.</td>
            <td class="arabic">فنالوا اكاليلا غير مضمحلة التى للشهادة وعيدوا مع جميع القديسين فى كورة الأحياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to the two holy brothers, Abakir and his brother John, hail to the two martyrs, the spiritual physicians.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲓⲥⲟⲛ ⲥ̀ⲛⲁⲩ (ⲃ̅) ⲉ̅ⲑ̅ⲩ̅: Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ: ⲭⲉⲣⲉ ⲥ̀ⲛⲁⲫ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲓⲥⲏⲓⲛⲓ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.</td>
            <td class="arabic">السلام للأخوين القديسين أباكير ويوحنا أخيه السلام للشهيدين الطبيبين الروحيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O struggle mantled martyrs, Abakir and his brother John, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲛⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲁⲡⲁⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا أيها الشهيدان المجاهدان أباكير ويوحنا أخوه ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stVictorDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Victor Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Victor Doxology
        <span class="coptic-caption">Ⲙⲁⲧⲁⲙⲟⲓ ϫⲉ ⲕ̀ϣⲉ ⲉ̀ⲑⲱⲛ</span>
        <span class="arabic-caption">ذكصولوجية الشهيدان أبا بقطر</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Teach me where do you flee, O Victor my beloved son, for the muzzle is on your mouth, and the chains are on your hands.</td>
            <td class="coptic">Ⲙⲁⲧⲁⲙⲟⲓ ϫⲉ ⲕ̀ϣⲉ ⲉ̀ⲑⲱⲛ: ⲱ̀ Ⲃⲓⲕⲧⲱⲣ ⲡⲁⲙⲉⲛⲣⲓⲧ ⲛ̀ϣⲏⲣⲓ: ⲉ̀ⲣⲉ ⲡⲓⲕⲏⲙⲟⲥ ⲭⲏ ϧⲉⲛ ⲣⲱⲕ: ⲉ̀ⲣⲉ ⲛⲓⲡⲉⲇⲏⲥ ϧⲉⲛ ⲛⲉⲕϫⲓϫ.</td>
            <td class="arabic">اعلمنى الى أين تذهب. يا بقطر ابنى الحبيب واللجام فى فمك والقيود فى يديك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He said "I fled to the land, of Egypt to Armenius, that I may die in the Name of my Savior, and that He may forgive me my sins."</td>
            <td class="coptic">Ⲡⲉϫⲁϥ ϫⲉ ϯϣⲉ ⲉ̀ⲧ̀ⲭⲱⲣⲁ: ⲛ̀Ⲭⲏⲙⲓ ⲉ̀ⲣⲁⲧϥ ⲛ̀Ⲁⲣⲙⲉⲛⲓⲟⲥ: ⲛ̀ⲧⲁⲙⲟⲩ ⲉ̀ϫⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀ⲡⲁⲤⲱⲧⲏⲣ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲁⲛⲟⲃⲓ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">قال أنا ذاهب الى اقليم مصر الى أرمانيوس لأموت على اسم مخلصى ليغفر لى خطاياى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">"After that month, O Victor my beloved son, I am prepared to marry you, and give you many riches."</td>
            <td class="coptic">Ⲡⲓⲁ̀ⲃⲟⲧ ⲙⲉⲛⲉⲛⲥⲁ ⲫⲁⲓ: ⲱ̀ Ⲃⲓⲕⲧⲱⲣ ⲡⲁⲙⲉⲛⲣⲓⲧ ⲛ̀ϣ̀ⲏⲣⲓ: ϯⲥⲉⲃⲧⲱⲧ ⲉ̀ⲓ̀ⲣⲓ ⲛ̀ⲧⲉⲕϣⲉⲗⲉⲧ: ⲛ̀ⲧⲁϯ ⲛ̀ϩⲁⲛⲙⲏϣ ⲛ̀ⲭ̀ⲣⲏⲙⲁ ⲛⲁⲕ.</td>
            <td class="arabic">من بعد هذا الشهر يابقطر ابنى الحبيب أنا مستعدة لعمل عرسك ولأعطيك أموالا كثيرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">"My time and my wedding will come, O Martha my beloved mother, for the Church is my wedding, and my Savior is my bridegroom."</td>
            <td class="coptic">Ⲡⲁⲥⲏⲟⲩ ⲁ̀ⲛⲟⲕ ⲧⲁϣⲉⲗⲉⲧ ⲭⲏ: ⲱ̀ Ⲙⲁⲣⲑⲁ ⲧⲁⲙⲉⲛⲣⲓϯ ⲙ̀ⲙⲁⲩ: ⲧⲁϣⲉⲗⲉⲧ ⲧⲉ ϯⲉ̀ⲕⲕⲗⲏⲥⲓⲁ: ⲡⲁⲡⲁⲧϣⲉⲗⲉⲧ ⲡⲉ ⲡⲁⲥⲱⲧⲏⲣ.</td>
            <td class="arabic">ان زمانى وعرسى صائر يا مرثا أمى الحبيبة. عروسى هى الكنيسة وعريسى هو مخلصى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to you O martyr, of our Lord Jesus Christ, hail to the courageous hero, the saint Abba Victor.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛ̀ⲧⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲭⲉⲣⲉ ⲡⲓϭⲱⲓϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ: ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲁⲡⲁ Ⲃⲓⲕⲧⲱⲣ.</td>
            <td class="arabic">السلام لك يا شهيد ربنا يسوع المسيح السلام للشجاع القوى القديس أبا بقطر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O saint Abba Victor, remember us before the Lord, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲅⲱⲛ: ⲱ̀ ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲁⲡⲁ Ⲃⲓⲕⲧⲱⲣ: ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ ϧⲁ ⲧ̀ϩⲏ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها القديس أبا بقطر اذكرنا قدام الرب ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
allTheMartyrsDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="All the Martyrs Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">All the Martyrs Doxology
        <span class="coptic-caption">Ⲅⲉⲱⲣⲅⲓⲟⲥ ⲡⲓⲙⲉⲗⲓⲧⲟⲛ</span>
        <span class="arabic-caption">ذكصولوجية جميع الشهداء</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">George of Melta, Theodore the general, Philopater Mercurius, Abba Mina of Vayat.</td>
            <td class="coptic">Ⲅⲉⲱⲣⲅⲓⲟⲥ ⲡⲓⲘⲉⲗⲓⲧⲟⲛ: Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ ⲡⲓⲥ̀ⲧ̀ⲣⲁⲧⲓⲗⲁⲧⲏⲥ: Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ⲁⲡⲁ Ⲙⲏⲛⲁ ⲛ̀ⲧⲉ ⲛⲓⲪⲁⲓⲁⲧ.</td>
            <td class="arabic">جرجس الملطي ثيؤدوروس الأمير محب الآب مرقوريوس أبا مينا البياضي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">George of Melta, took all of his riches, and came to the city of Soor, to king Dadianos.</td>
            <td class="coptic">Ⲅⲉⲱⲣⲅⲓⲟⲥ ⲡⲓⲘⲉⲗⲓⲧⲟⲛ: ⲁϥϭⲓ ⲛ̀ϩⲁⲛⲙⲏϣ ⲛ̀ⲭⲣⲏⲙⲁ: ⲁϥϣⲉⲛⲁϥ ϣⲁ Ⲥⲱⲣ ϯⲃⲁⲕⲓ: ϣⲁ ⲡⲟⲩⲣⲟ Ⲇⲁⲇⲓⲁⲛⲟⲥ.</td>
            <td class="arabic">جيؤرجيوس الملطي أخذ أمولاً كثيرة ومضي إلي مدينة صور إلي الملك داديانوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">When he saw the idols, and people worshiping them, he gave all his riches to the poor, and became a chosen martyr.</td>
            <td class="coptic">Ⲉⲧⲁϥⲛⲁⲩ ⲉⲛⲓⲓ̀ⲇⲱⲗⲟⲛ: ⲉⲣⲉ ⲛⲓⲣⲱⲙⲓ ϣⲉⲙϣⲓ ⲙ̀ⲙⲱⲟⲩ: ⲁϥϫⲱⲣ ⲙ̀ⲡⲉⲧⲉⲛⲧⲁϥ ⲛ̀ⲛⲓϩⲏⲕⲓ: ⲁϥϣⲱⲡⲓ ⲛ̀ⲥⲱⲧⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">فلما رأي الأصنام والناس يعبدونها فرق كل ماله علي المساكين وصار شهيدا مختارا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Theodore the general, went to Eucaita, killed the dragon, and saved the sons of the widow.</td>
            <td class="coptic">Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ ⲡⲓⲥ̀ⲧⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀Ⲉⲩⲭⲏⲧⲟⲥ: ⲁϥϧⲱⲧⲉⲃ ⲙ̀ⲡⲓⲇⲣⲁⲕⲱⲛ: ⲁϥⲛⲟϩⲉⲙ ⲛ̀ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ϯⲭⲏⲣⲁ ⲛ̀ⲥϩⲓⲙⲓ.</td>
            <td class="arabic">ثيؤدوروس الأمير مضي إلي أوخيطس وقتل التنين وخلص أولاد المرأة الأرملة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Philopater Mercurius, went to Persia, and killed Yolyanos, according to Baselios.</td>
            <td class="coptic">Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲛⲓⲠⲉⲣⲥⲓⲥ: ⲁϥϣⲁⲣⲓ ⲉ̀Ⲓⲟⲩⲗⲓⲁⲛⲟⲥ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲙ̀Ⲃⲁⲥⲓⲗⲓⲟⲥ.</td>
            <td class="arabic">محب الآب مرقوريوس مضي إلي الفرس وقتل يوليانوس كقول باسليوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">When the holy relics, of Abba Mina of Vayat, were brought to Egypt, our souls rejoiced.</td>
            <td class="coptic">Ⲁⲡⲁ Ⲙⲏⲛⲁ ⲛ̀ⲧⲉ ⲛⲓⲪⲁⲓⲁⲧ: ⲁⲩⲉⲛϥ ⲉ̀ϧ̀ⲣⲏⲓ ⲉⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ: ⲁⲡⲉϥⲗⲩⲙⲯⲁⲛⲟⲛ ⲉ̅ⲑ̅ⲩ̅: ϯⲙ̀ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">أبا مينا البياضي أحضروه إلي إقليم مصر وجسده المقدس فرح نفوسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">What an indescribable wonder, of Abba Victor the general, that he refused all the riches that, his father prepared for his wedding.</td>
            <td class="coptic">Ⲱ ϯϣ̀ⲫⲏⲣⲓ ⲛ̀ⲁ̀ⲧⲥⲁϫⲓ ⲙ̀ⲙⲟⲥ: ⲛ̀ⲧⲉ ⲁⲡⲁ Ⲃⲓⲕⲧⲱⲣ ⲡⲓⲥ̀ⲧⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ϫⲉ ⲁϥϩⲓⲡ̀ϩⲟ ⲛ̀ⲛⲓⲭⲣⲏⲙⲁ ⲧⲏⲣⲟⲩ: ⲉⲧⲁ ⲡⲉϥⲓⲱⲧ ⲧⲏⲓⲧⲟⲩ ⲛ̀ⲧⲉϥϣⲉⲗⲉⲧ.</td>
            <td class="arabic">يا للاعجوبة غير الموصوفة التي لأبا بقطر الأمير فإنه رفض جميع الأموال التي دفعها أبوه لعرسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">The beloved Claudius, the friend of Abba Victor, was stepped, in the city of Ansena.</td>
            <td class="coptic">Ⲡⲓϣⲟⲩⲙⲉⲛⲣⲓⲧϥ Ⲕ̀ⲗⲁⲩⲇⲓⲟⲥ: ⲟⲩⲟϩ ⲡ̀ϣ̀ⲫⲏⲣ ⲛ̀ⲁ̀ⲡⲁ Ⲃⲓⲕⲧⲱⲣ: ⲁⲩⲉ̀ⲣⲗⲟⲅⲭⲓⲝⲓⲛ ⲙ̀ⲙⲟϥ: ϧⲉⲛ ϯⲡ̀ⲟⲗⲓⲥ Ⲁⲛⲧⲓⲛⲱⲟⲩ.</td>
            <td class="arabic">المحبوب أقلاديوس صديق أبا بقطر طعنوه في مدينه أنصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">The saint Philotheus, who killed the bull, which his parents worshiped, until he returned them to the true God.</td>
            <td class="coptic">Ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲫⲓⲗⲟⲑⲉⲟⲥ: ⲛ̀ⲑⲟϥ ⲁϥϧⲱⲧⲉⲃ ⲙ̀ⲡⲓⲙⲁⲥⲓ: ⲉⲧⲉⲣⲉ ⲛⲉϥⲓⲟϯ ϣⲉⲙϣⲓ ⲙ̀ⲙⲟϥ: ϣⲁⲛ̀ⲧⲉϥⲧⲁⲥⲑⲱⲟⲩ ϩⲁ Ⲫϯ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">القديس فيلوثيؤس هو الذي قتل العجل معبود أبويه حتى ردهما إلي الإله الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Suseneios the general, who killed the vampire, and was granted the unfading crown, of martyrdom.</td>
            <td class="coptic">Ⲥⲟⲩⲥⲉⲛⲛⲓⲟⲥ ⲡⲓⲥ̀ⲧⲣⲁⲧⲓⲗⲁⲧⲏⲥ: ⲛ̀ⲑⲟϥ ⲁϥϧⲱⲧⲉⲃ ⲙ̀ⲃⲉⲣⲍⲉⲗⲓⲁ: ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">الأمير سوسنيوس هو الذي قتل المصّاصة ونالوا إكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">The saints master Justus, Apali and Theoclia, stood before the king, in a great stand.</td>
            <td class="coptic">Ⲛⲓⲁ̀ⲅⲓⲟⲥ ⲕⲩⲣⲓ Ⲓⲟⲩⲥⲧⲟⲥ: ⲛⲉⲙ Ⲁⲡⲁⲗⲓ ⲛⲉⲙ Ⲑⲉⲟ̀ⲕⲗⲓⲁ: ⲁⲩⲟ̀ϩⲓ ⲉⲣⲁⲧⲟⲩ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡ̀ⲟⲩⲣⲟ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲙ̀ⲡⲁⲣⲣⲏⲥⲓⲁ.</td>
            <td class="arabic">القديسين السيد يسطس وآبالي وثيؤكليا وقفوا أمام الملك موقفاً عظيما علانية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">So the hypocrite king Diocletian, spoke to them saying, "Who's preventing you, from doing your will."</td>
            <td class="coptic">Ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ⲛ̀ϫⲉ ⲡⲓⲁ̀ⲥⲉⲃⲏⲥ: ⲡⲓⲟ̀ⲩⲣⲟ Ⲇⲓⲟⲕⲗⲏⲧⲓⲁ̀ⲛⲟⲥ: ϫⲉ ⲛⲓⲙ ⲉⲧⲉⲣⲕⲱⲗⲓⲛ ⲙ̀ⲙⲱⲧⲉⲛ: ⲉⲉ̀ⲣ ⲟⲩϩⲱⲃ ⲡⲁⲣⲁ ⲡⲉⲧⲉⲛⲟⲩⲱϣ.</td>
            <td class="arabic">فتكلم معهم الملك المنافق ديقلديانوس قائلاً من يمنعكم أن تعملوا خلاف إرادتكم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">When he considered their verdict, he sent them to Egypt, where they were granted the unfading crowns, of martyrdom.</td>
            <td class="coptic">Ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲛ̀ⲧⲟⲩⲁ̀ⲛⲁⲫⲟⲣⲁ: ⲁϥⲟⲩⲟ̀ⲣⲡⲟⲩ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ: ⲁⲩⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">ولما كتب قضيتهم أرسلهم إلي إقليم مصر فنالوا إكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">The saint Basilidis, Eusebius and Macarius, refuted the temporal, and went after the eternal.</td>
            <td class="coptic">Ⲛⲓⲁ̀ⲅⲓⲟⲥ Ⲃⲁⲥⲓⲗⲓⲧⲏⲥ: ⲛⲉⲙ Ⲉⲩⲫⲉⲃⲓⲟⲥ ⲛⲉⲙ Ⲙⲁⲕⲁⲣⲓⲟⲥ: ⲁⲩϩⲓⲡ̀ϩⲟ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲥⲟⲩⲥⲏⲟⲩ: ⲁⲩⲕⲱϯ ⲛ̀ⲥⲁ ⲛⲓϣⲁⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">القديس واسيليدس وأرسابيوس ومقاريوس رفضوا الزمنيات وطلبوا الأبديات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">The saint lord Apatir, while he was sleeping, our Savior appeared to him, in the middle of the night.</td>
            <td class="coptic">Ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲕⲩⲣⲓ Ⲁⲡⲁⲧⲏⲣ: ⲉⲧⲓⲉϥⲉⲛⲕⲟⲧ ϧⲉⲛ ⲡⲉϥⲕⲟⲓⲧⲱⲛ: ⲁⲡⲉⲛⲤⲱⲧⲏⲣ ⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲟϥ: ϧⲉⲛ ⲧ̀ⲫⲁϣⲓ ⲙ̀ⲡⲓⲉ̀ϫⲱⲣϩ.</td>
            <td class="arabic">القديس السيد أبادير فيما هو نائم في قصره ظهر له مخلصنا في نصف الليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Saying "rise and take your sister Irae, and go to Egypt, to be granted the unfading crowns, of martyrdom.</td>
            <td class="coptic">Ϫⲉ ⲧⲱⲛⲕ ϭⲓ ⲛ̀Ⲏ̀ⲣⲁⲏ̀ⲧⲉⲕⲥⲱⲛⲓ: ⲙⲁϣⲉⲛⲁⲕ ⲉ̀ⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ: ⲛ̀ⲧⲉⲕⲉⲣⲫⲟⲣⲓⲛ ⲛ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">قائلا قم خذ أختك إرائي وأمضي إلي إقليم مصر لنوال إكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">The saint Abba Nahro, was carried on the wings of Michael, from Alexandria to Antioch, to confess to Christ.</td>
            <td class="coptic">Ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲁⲡⲁ Ⲛⲁϩⲣⲱⲟⲩ: ⲁⲘⲓⲭⲁⲏⲗ ⲧⲁⲗⲟϥ ⲉ̀ϫⲉⲛ ⲛⲉϥⲧⲉⲛϩ: ⲓⲥϫⲉⲛ Ⲣⲁⲕⲟϯ ϣⲁ Ⲁⲛⲧⲓⲟ̀ⲭⲓⲁ: ⲛ̀ⲧⲉϥⲟⲩⲱⲛϩ ⲙ̀Ⲡⲭ̅ⲥ̅ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">القديس أبا نهروه حمله ميخائيل علي أجنحته من اسكندرية الي أنطاكية ليعترف بالمسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">The saint Astunius, while he was hunting, our Savior appeared to him, on the horns of the camel.</td>
            <td class="coptic">Ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲥ̀ⲧⲁⲑⲓⲟⲥ: ⲉ̀ⲧⲓ ⲉϥϫⲱⲣϩ ⲛ̀ⲛⲓⲍⲱⲟⲛ: ⲁⲡⲉⲛⲤⲱⲧⲏⲣ ⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲟϥ: ϩⲓϫⲉⲛ ⲛⲉⲛⲧⲁⲡ ⲙ̀ⲡⲓⲉ̀ⲓⲟⲩⲗ.</td>
            <td class="arabic">القديس أسطانيوس فيما هو يصيد الحيوانات ظهر له مخلصنا علي قرون الإبل .</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english">And the sign of the cross, crowning his head, so he was granted the unfading crown, of martyrdom.</td>
            <td class="coptic">Ⲉⲣⲉ ⲡⲓⲙⲏⲓⲛⲓ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲟⲓ ⲛ̀ⲭ̀ⲗⲟⲙ ⲉ̀ϫⲉⲛ ⲧⲉϥⲁ̀ⲫⲉ: ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">وعلامة الصليب تكلل رأسه فنال القديس إكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Theodorus El-Mashriqi, deserved the holy cup, from the lake of fire, for him and his friends.</td>
            <td class="coptic">Ⲑⲉⲟ̀ⲇⲱⲣⲟⲥ ⲡⲓⲁ̀ⲛⲁⲧⲟⲗⲉⲟⲥ: ⲁϥⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲙ̀ⲡⲓⲱⲙⲥ ⲉ̅ⲑ̅ⲩ̅: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ϯⲗⲩⲙⲛⲏ ⲛ̀ⲭⲣⲱⲙ: ⲛ̀ⲑⲟϥ ⲛⲉⲙ ⲡⲉϥⲕⲉϣⲫⲏⲣ ⲥ̀ⲛⲁⲩ (ⲃ̅).</td>
            <td class="arabic">تيؤدوروس المشرقي أستحق الصبغة المقدسة في بحيرة النار هو وصديقاه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">James of Persia, they cut all of his body parts, but his mind was always in heaven, praising with the angels.</td>
            <td class="coptic">Ⲓⲁⲕⲱⲃⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲠⲉⲣⲥⲓⲥ: ⲁⲩⲥⲱⲗⲡ ⲛ̀ⲥⲁ ⲛⲉϥⲙⲉⲗⲟⲥ ⲧⲏⲣⲟⲩ: ⲉⲣⲉ ⲡⲉϥⲛⲟⲩⲥ ⲭⲏ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉϥϩⲱⲥ ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">يعقوب الفارسي قطعوا جميع أعضائه بينما عقله كائن في السموات يسبح مع الملائكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english">John El-Senhoti, and Isaac El-Dafrawi, were granted the unfading crown, of martyrdom.</td>
            <td class="coptic">Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉⲙⲥⲉⲛϩⲱⲟ̀ⲩⲧ: ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲡⲓⲣⲉⲙϯⲫ̀ⲣⲉ: ⲁⲩⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">يوحنا السنهوتي وأسحق الدفراوي نالا إكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english">Esedoros and Sana the soldiers, were sent to the chamber, and accepted great tortures, for sake of the living Son of God.</td>
            <td class="coptic">Ⲏⲥⲓⲇⲱⲣⲟⲥ ⲛⲉⲙ Ⲥⲁⲛⲁ ⲛⲓⲙⲁⲧⲟⲓ: ⲁⲩϯ ⲙ̀ⲡⲟⲩⲟⲩⲓ ϩⲓϫⲉⲛ ⲡⲓⲃⲏⲙⲁ: ⲁⲩϣⲉⲡ ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲃⲁⲥⲁⲛⲟⲥ: ⲉⲑⲃⲉ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲉⲧⲟⲛϧ.</td>
            <td class="arabic">إيسيدوروس وسانا الجنديان إندفعا إلي المنبر وقبلا عذبات عظيمه لآجل إبن الله الحي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Five struggling brothers, servants of Christ, they are Cosmas and Demian, Anthimus and Leontius.</td>
            <td class="coptic">Ⲧ̀ⲓⲟⲟⲩ (ⲉ̅) ⲛ̀ⲥⲟⲛ ⲛ̀ⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ: ⲛ̀ⲇⲓⲁⲕⲱⲛ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲉⲧⲉ Ⲕⲟⲥⲙⲁ ⲛⲉⲙ Ⲇⲁⲙⲓⲁⲛⲟⲥ: ⲛⲉⲙ Ⲁⲛⲑⲓⲙⲓⲟⲥ ⲛⲉⲙ Ⲗⲉⲟⲛⲧⲓⲟⲥ.</td>
            <td class="arabic">خمسه أخوه مجاهدين خدام المسيح وهم قزمان ودميان وأنتيمون ولاونديوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">With Arabius their brother, their mother comforted them saying, "It´s better for you to die, than to deny Christ."</td>
            <td class="coptic">Ⲛⲉⲙ Ⲉⲩⲡⲣⲉⲡⲓⲟⲥ ⲡⲟⲩⲥⲟⲛ: ⲉⲣⲉ ⲧⲟⲩⲙⲁⲩ ϯⲛⲟⲙϯ ⲛⲱⲟⲩ: ϫⲉ ⲛⲁⲛⲉⲥ ⲛⲱⲧⲉⲛ ⲛ̀ⲧⲉⲧⲉⲛⲙⲟⲩ: ⲉ̀ϩⲟⲧⲉ ⲉ̀ϫⲉⲗ Ⲡⲭ̅ⲥ̅ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">وأخوه إبرابيوس كانت آمهم تعزيهم قائلة حسنا لكم أن تموتوا أفضل من أن تجحدوا المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">The blessing of the saints, was perfected upon you, O saint Julius of Aqfahs, the helper.</td>
            <td class="coptic">Ⲁⲡⲓⲥ̀ⲙⲟⲩ ⲛ̀ⲧⲉ ⲛⲏⲉ̅ⲑ̅ⲩ̅: ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲕ: ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲓⲟⲩⲗⲓⲟⲥ: ⲡⲓⲃⲟⲏ̀ⲑⲟⲥ ⲛ̀ⲣⲉⲙⲭ̀ⲃⲁϩⲥ.</td>
            <td class="arabic">بركة القديسين كملت عليك أيها القديس يوليوس المعين الاقفهصي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english">For all the pains that you accepted, upon yourself with the holy martyrs, doubled your blessings, to the third generation.</td>
            <td class="coptic">Ϫⲉ ⲛⲓϧⲓⲥⲓ ⲉⲧⲁⲕϣⲟⲩⲡⲟⲩ: ⲛⲉⲙ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ⲁⲡⲟⲩⲥ̀ⲙⲟⲩ ⲕⲱⲃ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲕ: ϣⲁ ϯⲙⲁϩϣⲟⲙϯ ⲛ̀ⲉⲅⲉⲛⲉⲁ̀.</td>
            <td class="arabic">لأن الأتعاب التي قبلتها مع الشهداء القديسين تضاعفت بركتها عليك إلي الجيل الثالث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">By that you were granted, the crown of martyrdom, with your father and your brother, and five hundred of your servants.</td>
            <td class="coptic">Ϧⲉⲛ ⲛⲁⲓ ⲁⲕⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭⲗⲟⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲉⲙ ⲡⲉⲕϣⲏⲣⲓ ⲛⲉⲙ ⲡⲉⲕⲟⲥⲛ: ⲛⲉⲙ ⲧ̀ⲓⲟⲩ ⲛ̀ϣⲉ (ⲫ̅) ⲙ̀ⲃⲱⲕ ⲛ̀ⲧⲁⲕ.</td>
            <td class="arabic">بهذا نلت إكليل الشهادة مع أبيك وأخيك وخمس مئة عبد لك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">I can´t count, all of the saints, for they are many as the heads of grain, according to the Book.</td>
            <td class="coptic">Ⲱⲡ̀ⲁϣⲁⲓ ⲛ̀ⲧⲉ ⲛⲏⲉ̅ⲑ̅ⲩ̅: ϯⲛⲁϣ̀ϫⲟⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲛⲁ: ⲥⲉⲟϣ ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓϧⲉⲙⲥ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲛⲓⲅ̀ⲣⲁⲫⲏ.</td>
            <td class="arabic">بالكثرة القديسين لا أستطيع أن أحصيهم جميعا لأنهم كثيرون مثل السنبل كقول الكتاب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english">The crowns of the martyrs, are not of this world, for they are granted by our Savior, with glory and honor.</td>
            <td class="coptic">Ⲛⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ϩⲁⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ ⲁⲛ ⲛⲉ: ⲁⲗⲗⲁ ⲡ̀Ⲥⲱⲧⲏⲣ ⲁϥⲧⲏⲓⲧⲟⲩ ⲉ̀ϫⲱⲟⲩ: ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ.</td>
            <td class="arabic">أكاليل الشهداء ليست من هذا العالم بل منحها المخلص إياهم بمجد وكرامه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="north">
            <td class="english">As David has said, in the book of Psalms, "In glory and honor, He placed crowns upon them."</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲡⲓⲯⲁⲗⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ⲁϥⲧⲏⲓⲧⲟⲩ ⲛ̀ⲭ̀ⲗⲟⲙ ⲉ̀ϫⲱⲟⲩ.</td>
            <td class="arabic">كما قال داود في المزمور إنه بمجد وكرامه وضع عليهم الإكليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english">Pray to the Lord on our behalf, O choir of the martyrs, who suffered for sake of Christ, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ ⲛⲓⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲉ̀ⲧⲁⲩϣⲉⲡⲙ̀ⲕⲁϩ ⲉⲑⲃⲉ Ⲡⲭ̅ⲥ̅: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا من الرب عنا يا مصاف الشهداء الذين قبلوا الألام من آجل المسيح ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
//Female Martyrs
stDemianaDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Demiana Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Demiana Doxology
        <span class="coptic-caption">Ϯⲁⲗⲟⲩ ⲛ̀ⲥⲁⲃⲏ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية الشهيدة دميانه</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The wise celibate child, the chosen and true lady, the Bride of Christ, Saint Demiana.</td>
            <td class="coptic">Ϯⲁⲗⲟⲩ ⲛ̀ⲥⲁⲃⲏ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲥⲱⲧⲡ ⲛ̀ⲕⲩⲣⲓⲁ̀ ⲙ̀ⲙⲏⲓ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ϯⲁ̀ⲅⲓⲁ Ⲇⲉⲙⲓⲁⲛⲏ.</td>
            <td class="arabic">الصبية العذراء الحكيمة المختارة البارة عروس المسيح القديسة دميانه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">This is she who was filled with wisdom, from her childhood, she hated the earthly, and she loved virginity.</td>
            <td class="coptic">Ⲑⲁⲓ ⲓⲥϫⲉⲛ ⲧⲉⲥⲙⲉⲧⲁ̀ⲗⲟⲩ: ⲁⲥⲙⲉϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲥⲟⲫⲓⲁ: ⲁⲥⲙⲟⲥϯ ⲛ̀ⲛⲓⲕⲟⲥⲙⲓⲕⲟⲛ: ⲁⲥⲙⲉⲛⲣⲉ ⲛ̀ϯⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
            <td class="arabic">هذه التى امتلأت من الحكمة منذ صباها فأبغضت العالميات وأحبت البتولية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">She became the head, and a harbor of salvation, the mother of forty virgins, in the tower which her father built.</td>
            <td class="coptic">Ⲁⲥϣⲱⲡⲓ ⲛ̀ϯⲁⲣⲭⲏ: ⲛ̀ⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ: ⲏ̀ⲙⲁⲩ ⲛ̀ϩⲙⲉ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ⲡⲓⲡⲩⲣⲅⲟⲥ ⲉ̀ⲧⲁ ⲡⲉⲥⲓⲱⲧ ⲕⲟⲧϥ.</td>
            <td class="arabic">صارت رئيسة وميناء للخلاص وأما للأربعين عذراء فى القصر الذى بناه لها أبوها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">When he denied Christ, his loving daughter Demiana, restored his faith, and he received martyrdom.</td>
            <td class="coptic">Ⲁϥϫⲱⲗ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲁⲥⲧⲁⲥⲑⲟ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ ⲧⲉϥϣⲉⲣⲓ: ⲉ̀ⲧⲁⲥⲙⲉⲣⲉ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ Ⲇⲉⲙⲓⲁⲛⲏ: ⲁϥϭⲓ ⲛ̀ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲓⲁ.</td>
            <td class="arabic">ولما كفر بالمسيح ردته ابنته دميانه التى أحبته فنال الشهادة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Because of this the king had sent for her, and ordered her to be tortured, she endured repeated sufferings, and received martyrdom.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥⲟⲩⲱⲣⲡ ⲛ̀ϫⲉ ⲡ̀ⲟⲩⲣⲟ: ⲁϥⲟⲩⲁϩⲥⲁϩⲛⲓ ϧⲉⲛ ⲛⲉⲥϧⲓⲥⲓ: ⲁⲥϣⲉⲡⲙ̀ⲕⲁϩ ⲛ̀ⲟⲩⲙⲏϣ ⲛ̀ⲥⲟⲡ: ⲁⲥϭⲓ ⲛ̀ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲓⲁ.</td>
            <td class="arabic">من أجل هذا أرسل الملك أمره بتعذيبها فقبلت آلامات عدة ونالت الشهادة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The forty holy virgins, who were with her in the tower, received martyr-dom, all in one day with her.</td>
            <td class="coptic">Ⲡⲓⲉϩⲙⲉ ⲉⲑⲟⲩⲁⲃ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉ̀ⲛⲁⲩϣⲱⲡⲓ ⲛⲉⲙⲁⲥ ϧⲉⲛ ⲡⲓⲡⲩⲣⲅⲟⲥ: ⲁⲩϭⲓ ⲛ̀ϯ-ⲙⲉⲧⲙⲁⲣⲧⲩⲣⲓⲁ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲟⲩⲱⲧ ⲛⲉⲙⲁⲥ.</td>
            <td class="arabic">والأربعون عذراء الذين كانوا معها فى القصر نالوا الشهادة معها فى يوم واحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Blessed are you O Demiana, the bride of Circumcision, the celibate nun, the chosen and true martyr.</td>
            <td class="coptic">Ⲱⲟ̀ⲩⲛⲓⲁϯ ⲛ̀ⲑⲟ Ⲇⲉⲙⲓⲁⲛⲏ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ ⲡⲓⲛⲩⲙⲫⲓⲟⲥ: ϯⲙⲟⲛⲁⲭⲏ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲥⲱⲧⲡ ⲙ̀ⲙⲏⲓ ̀ⲙⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">طوباك يادميانه عروس الختن الراهبة البتول المختارة الشهيدة الحقيقية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O bride of Christ, Saint Demiana, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ϯⲁ̀ⲅⲓⲁ Ⲇⲉⲙⲓⲁⲛⲏ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبى من الرب عنا ياعروس المسيح القديسة دميانه ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stsBerbaraAndJulianaDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Sts. Berbara and Juliana">
    
    <caption id="caption_table_${tableNumber}" class="caption">Sts. Berbara and Juliana Doxology
        <span class="coptic-caption">Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅</span>
        <span class="arabic-caption">ذكصولوجية الشهيدتان برباره ويوليانه</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The light of the holy Trinity, has shone upon this virgin, Saint Barbara, the Bride of Christ.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅: ⲁϥϣⲁⲓ ⲉ̀ϫⲉⲛ ⲧⲁⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲁ̀ⲅⲓⲁ Ⲃⲁⲣⲃⲁⲣⲁ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">نور الثالوث الأقدس أشرق على هذه العذراء القديسة برباره عروس المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">She loved the holy Trinity, and hated her father, the lawless man, who cut her head with his hand.</td>
            <td class="coptic">Ⲉⲥⲙⲉⲛⲣⲉ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ ⲉ̅ⲑ̅ⲩ̅: ⲟⲩⲟϩ ⲉⲑⲙⲟⲥϯ ⲅⲁⲣ ⲙ̀ⲡⲉⲥⲓⲱⲧ: ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲛⲟⲙⲟⲥ ⲉ̀ⲧⲁϥϣⲁⲧ: ⲛ̀ⲧⲉⲥⲁ̀ⲫⲉ ϧⲉⲛ ⲧⲉϥϫⲓϫ.</td>
            <td class="arabic">لأنها أحبت الثالوث الأقدس وأبغضت أباها. الرجل مخالف الناموس الذى قطع رأسها بيده.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Rejoice O true bride, who has become a sanctuary, for the Holy Spirit, since her early childhood.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲱ̀ ϯϣⲉⲗⲉⲧ ⲙ̀ⲙⲏⲓ: ⲉⲏⲉ̀ⲧⲁⲥϣⲱⲡⲓ ⲛ̀ⲟⲩⲉ̀ⲣⲫⲉⲓ: ⲛ̀ⲧⲉ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ⲧⲉⲥⲙⲉⲧⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲗⲟⲩ.</td>
            <td class="arabic">افرحى أيتها العروس الحقيقية. التى صارت هيكلا للروح القدس منذ طفوليتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">For you became a daughter, of the heavenly Father, and you became a daughter, of Mary the Virgin.</td>
            <td class="coptic">Ⲉⲣⲉϣⲱⲡⲓ ⲅⲁⲣ ⲛ̀ⲑⲟ: ⲧϣⲉⲣⲓ ⲙ̀Ⲫⲓⲱⲧ ⲉⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲟⲩⲟϩ ⲉ̀ⲣⲉϣⲱⲡⲓ ⲅⲁⲣ ⲛ̀ⲟⲩϣⲉⲣⲓ: ⲙ̀Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">لأنك صرت ابنة للآب السماوى وصرت أيضا ابنة لمريم العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">We honor you joyfully, O brides of Christ, Saint Barbara, and Saint Juliana.</td>
            <td class="coptic">Ⲧⲉⲛⲧⲁⲓⲟ̀ ⲙ̀ⲙⲱⲧⲉⲛ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ: ⲱ̀ ⲛⲓϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ϯⲁ̀ⲅⲓⲁ Ⲃⲁⲣⲃⲁⲣⲁ: ⲛⲉⲙ ϯⲁ̀ⲅⲓⲁ Ⲓⲱⲗⲓⲁⲛⲁ.</td>
            <td class="arabic">نكرمكما بابتهاج ياعروسا المسيح. أيتها القديسة الحقيقية بربارة والقديسة يوليانه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O brides of Christ, Barbara and Juliana, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲛⲓϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: Ⲃⲁⲣⲃⲁⲣⲁ ⲛⲉⲙ Ⲓⲱⲗⲓⲁⲛⲁ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
            <td class="arabic">أطلبا من الرب عنا ياعروسا المسيح برباره ويوليانه ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stMarinatheMartyrDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Marina the Martyr Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Marina the Martyr Doxology
        <span class="coptic-caption">Ⲧ̀ϣⲉⲣⲓ ⲇⲉ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ</span>
        <span class="arabic-caption">ذكصولوجية الشهيدة مارينا</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The celibate daughter, greater in her strength, than the strong young men, she performed great miracles.</td>
            <td class="coptic">Ⲧ̀ϣⲉⲣⲓ ⲇⲉ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲟⲓ ⲛ̀ⲛⲓϣϯ ϧⲉⲛ ⲧⲉⲥϫⲟⲙ: ⲉ̀ϩⲟⲧⲉ ⲛⲓϫⲱⲣⲓ ⲛ̀ϧⲉⲗϣⲏⲣⲓ: ⲉⲥⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ϫⲟⲙ.</td>
            <td class="arabic">وابنة عذراء عظيمة في قوتها أكثر من الشبان الأقوياء صانعة قوات عظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">This is the chosen saint, the virgin Marina, she overpowered Satan, and embarrassed kings.</td>
            <td class="coptic">Ⲉⲧⲉ ϯⲥⲱⲧⲡ ⲛ̀ⲁ̀ⲅⲓⲁ: ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲛⲁ: ⲉⲥϭⲓ ϭ̀ⲣⲟ ⲙ̀ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ: ⲉⲥϯϭⲓⲡⲓ ⲛ̀ⲛⲓⲟⲩⲣⲱⲟⲩ.</td>
            <td class="arabic">التي هي القديسة المختارة مارينا العذراء غالبة الشيطان وخازية الملوك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">For she loved Christ, from her early childhood, Christ gave unto her, His grace and His high strength.</td>
            <td class="coptic">Ⲉⲥⲙⲉⲛⲣⲉ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲓⲥϫⲉⲛ ⲧⲉⲥⲙⲉⲧⲕⲟⲩϫⲓ ⲛ̀ⲁⲗⲟⲩ: ⲁϥϯ ⲛⲁⲥ ⲛ̀ϫⲉ Ⲡⲭ̅ⲥ̅: ⲡⲉϥϩ̀ⲙⲟⲧ ⲛⲉⲙ ⲧⲉϥϫⲟⲙ</td>
            <td class="arabic">ⲉⲧϭⲟⲥⲓ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">لأنها أحبت المسيح منذ طفوليتها وأعطاها المسيح نعمته وقوته العالية.</td>
            <td class="coptic">So that she may be patient, during the many sufferings, she received the unfading crown, of martyrdom.</td>
            <td class="arabic">Ϣⲁⲛⲧⲉⲥ ⲉⲣϩⲩⲡⲟⲙⲟⲛⲏ: ⲓⲥϫⲉⲛ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ ⲉⲧⲟϣ: ⲁⲥϭⲓ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">لكي تصبر على العذابات الكثيرة فنالت إكليل الشهادة غير المضمحل.</td>
            <td class="coptic">Adorn O virgins, who have received martyrdom, with Saint Marina, the bride of Christ.</td>
            <td class="arabic">Ⲯⲟⲗⲥⲉⲗ ⲱ̀ ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉⲧⲁⲩϭⲓ ⲛ̀ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲉⲙ ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲛⲁ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">تزين أيتها العذارى اللواتي نلن الشهادة مع القديسة مارينا عروس المسيح.</td>
            <td class="coptic">Pray to the Lord on our behalf, O bride of Christ, Saint Marina, that He may forgive us our sins.</td>
            <td class="arabic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩⲣⲏ̀ⲓ ⲉϫⲱⲛ: ⲱ̀ ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲛⲁ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">أطلبي من الرب عنا يا عروس المسيح القديسة مارينا ليغفر لنا خطايانا.</td>
            <td class="coptic"></td>
            <td class="arabic"></td>
        </tr>
        </tbody>
</table>`;
 return html;
},
anyFemaleMartyrDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Any Female Martyr Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Any Female Martyr Doxology
        <span class="coptic-caption">Ⲱ̀ⲟⲩⲛⲓⲁϯ ⲁ̀ⲗⲏⲑⲱⲥ</span>
        <span class="arabic-caption">ذكصولوجية لآى شهيده</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Truly blessed are you, O saint (...), the virgin, bride of Christ, the pure bridegroom,</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲱ̀ ϯⲁⲅⲓⲁ (...) ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲡⲓⲛⲩⲙⲫⲓⲟⲥ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.</td>
            <td class="arabic">طوباك حقًا أيتها القديسه (...) العذراء، عروس المسيح الختن النقي،</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For you renounced all the glory of this world and the pride of this age, and loved purity.</td>
            <td class="coptic">Ϫⲉ ⲁⲣⲉⲉ̀ⲣⲕⲁⲧⲁⲫ̀ⲣⲟⲛⲓⲛ: ⲙ̀ⲡⲓⲱ̀ⲟⲩⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲡⲁⲓ ⲕⲟⲥⲙⲟⲥ: ⲛⲉⲙ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲁⲓⲃⲓⲟⲥ: ⲁⲣⲉⲙⲉⲛⲣⲉ ⲡⲓⲧⲟⲩⲃⲟ.</td>
            <td class="arabic">لآنك زهدت كل مجد هذا العالم وفخر هذا العمر وأجببت الطهارة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">She shamed Satan and his wicked demons through her great steadfastness to her purity and virginity.</td>
            <td class="coptic">Ⲁⲥϯϣⲓⲡⲓ ⲙ̀ⲡ̀ⲥⲁⲧⲁ ⲛⲁⲥ: ⲛⲉⲙ ⲛⲉϥⲇⲉⲙⲱⲛ ⲙ̀ⲡⲟⲛⲏⲣⲟⲛ: ϩⲓⲧⲉⲛ ⲡⲉⲥⲛⲓϣϯ ⲛ̀ⲁ̀ⲙⲟⲛⲓ ⲛ̀ⲧⲟⲧⲥ: ϧⲉⲛ ⲡⲓⲧⲟⲩⲃⲟ ⲛ̀ⲧⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
            <td class="arabic">أخزيت الشيطان وشياطينه الاردياء بعظم تمسكها بنقاوه بتوليتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">For great indeed was the chosen struggle of Saint (...), the bride of Christ.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲅⲁⲣ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉ ⲡⲓⲁ̀ⲅⲱⲛ ⲉⲧⲥⲱⲧⲡ: ⲛ̀ⲧⲉ ϯⲁ̀ⲅⲓⲁ (...): ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">لانه عظيم بالحقيقه الجهاد المختار الذى للقديسه (...) عروسه المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">She completed her life with great humility, and rested with the saints in the land of the living.</td>
            <td class="coptic">Ⲁⲥⲅⲉⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉⲥⲃⲓⲟⲥ: ϧⲉⲛ ⲡⲉⲥⲛⲓϣϯ ⲛ̀ⲑⲉⲃⲓⲟ: ⲁⲥⲙ̀ⲧⲟⲛ ⲙ̀ⲙⲟⲥ ⲛⲉⲙ ⲛⲏⲉ̅ⲑ̅ⲩ̅: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲧⲟⲛϧ.</td>
            <td class="arabic">أكملت حياتها بعظم تواضعها، وتنيحت مع القديسين فى عالم الاحياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Hail to the chaste maiden, the holy, the pure bride, truly the saint (...).</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲁ̀ⲗⲟⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲥⲉⲙⲛⲉ ⲙ̀ⲡⲁⲛⲁ̀ⲅⲓⲁ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ: ϯⲁ̀ⲅⲓⲁ ⲙ̀ⲙⲏⲓ (...).</td>
            <td class="arabic">السلام للفتاه العفيفه، الكليه القديسه العروس النقيه القديسه بالحقيقه (...).</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to you, O saint, hail to you, O chaste one, hail to you, O ascetic, bride of the Lord.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲁ̀ⲅⲓⲁ: ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲁ̀ⲅⲛⲓⲁ: ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲁ̀ⲥⲕⲏⲧⲏⲥ: ϯϣⲉⲗⲉⲧ ⲡⲓⲆⲉⲥⲡⲟⲩⲧⲏⲥ.</td>
            <td class="arabic">السلام لك أيتها القديسه، السلام لك أيتها العفيفه، السلام لك أيتها الناسكه، عروس السيد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray for us, O true saint (...), bride of Christ, that He may forgive us...</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ϯⲁ̀ⲅⲓⲁ ⲙ̀ⲙⲏⲓ (...): ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبى عنا أيتها القديسه الحقيقه (...) عروس المسيح ليغفر لنا...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
// Saints
stAnthonyDoxology(tableNumber) {
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
                    our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲱⲃϩ ⲙ̀ⲡ̀̅ϭ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ ⲛⲁ⳪ ⲛ̀ⲓⲟϯ
                    ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">اطلبا من الرب عنا يل سيدى الأبوين محبي أولادهما انبا انطونيوس و انبا بولا
                    ليغفر... ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
stAthanasiusDoxology(tableNumber) {
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
                    ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲕⲏⲥ: ⲁⲃⲃⲁ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁⲡⲟⲥⲧⲟⲗⲏⲕⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">اطلب من الرب عنا: ايها الاب القديس البطريرك: انبا أثناسيوس الرسولى: ليغفر لنا
                    خطايانا. ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
stJosephtheCarpenterDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Joseph the Carpenter Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Joseph the Carpenter Doxology
        <span class="coptic-caption">Ⲫ̀ⲛⲟⲩϯ ⲁϥⲥⲱⲧⲡ ⲛ̀Ⲓⲱⲥⲉⲫ</span>
        <span class="arabic-caption">ذكصولوجية القديس يوسف النجار</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The Lord chose Joseph, with a heavenly sign, to take care of the Virgin, in his house.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲁϥⲥⲱⲧⲡ ⲛ̀Ⲓⲱⲥⲉⲫ: ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ⲡⲉϥϩ̀ⲓ ϧⲉⲛ ϩⲁⲛⲙⲏⲛⲩ: ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">الله إختار يوسف، لكيْ يحفظ العذراء، في بيته، بعلامات سمائية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">A dove appeared, and rested on his rod, so Zachariah the priest, gave her to him.</td>
            <td class="coptic">Ⲁⲥⲟⲩⲱⲛϩ ⲛ̀ϫⲉ ⲟⲩϭⲣⲟⲙⲡⲓ: ⲟⲩⲟϩ ⲁⲥⲉⲙⲧⲟⲛ ⲉ̀ϫⲉⲛ ⲡⲉϥϣ̀ⲃⲱⲧ: ⲧⲟⲧⲉ ⲁϥⲧⲏⲥ ⲛⲁϥ: ⲛ̀ϫⲉ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓⲟⲩⲏⲃ.</td>
            <td class="arabic">ظهرت حمامة، وإستقرت على عصاه، فأعطاها له، ذكريا الكاهن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Joseph doubted, her virginity, the angel announced to him, "O Joseph son of David.</td>
            <td class="coptic">Ⲁϥϭⲓⲥⲁⲛⲓⲥ ⲛ̀ϫⲉ Ⲓⲱⲥⲏⲫ: ϧⲉⲛ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ: ⲟⲩⲟϩ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲁϥϫⲟⲥ ⲛⲁϥ: ϫⲉ Ⲓⲱⲥⲏⲫ ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">شكَّ يوسف في بتوليتها، فأخبره الملاك، قائلاً "يا يوسف، يا إبن داود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Do not fear, to take Mary as your wife, for the One whom she bears, is of the Holy Spirit."</td>
            <td class="coptic">Ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ ⲉ̀ϣⲉⲡ: Ⲙⲁⲣⲓⲁ ⲧⲉⲕⲥ̀ϩⲓⲙⲓ ⲉ̀ⲣⲟⲕ: ⲫⲏ ⲅⲁⲣ ⲉ̀ⲧⲁⲥⲛⲁⲙⲁⲥϥ: ⲟⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲟⲩⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅ ⲡⲉ.</td>
            <td class="arabic">لا تخف أن تأخذ، مريم إمرأتك، لأن الذي حبل به فيها، هو من الروح القدس."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Mary is the treasure, that Joseph brought, and he found the jewel, that was hidden within.</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁⲙ ⲡⲉ ⲡⲓⲁ̀ϩⲟ: ⲉ̀ⲧⲁϥϣⲟⲡϥ ⲛ̀ϫⲉ Ⲓⲱⲥⲏⲫ: ⲁϥϫⲉⲙ ⲡⲓⲙⲁⲣⲅⲁⲣⲓⲧⲏⲥ: ⲉϥϩⲏⲡ ϧⲉⲛ ⲧⲉϥⲛⲏϯ.</td>
            <td class="arabic">مريم هي الكنز، الذي إشتراه يوسف، فوجد الجوهر، مخفي في وسطه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Joseph the righteous came, with Mary the Mother of Christ, fulfilling the Law for the sake, of the Child the Savior Jesus.</td>
            <td class="coptic">Ⲁϥⲓ̀ ⲛ̀ϫⲉ Ⲓⲱⲥⲏϥ ⲡⲓⲇⲓⲕⲉⲟⲥ: ⲛⲉⲙ Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲭ̅ⲥ̅: ⲁⲩⲑⲁⲙⲓⲟ ⲙ̀ⲡ̀ϫⲱⲕ ⲙ̀ⲡⲓⲚⲟⲙⲟⲥ: ⲉⲑⲃⲉ ⲡⲓⲀ̀ⲗⲟⲩ ⲛ̀Ⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">جاء يوسف الصديق، مع مريم أم المسيح، وصنعا إتمام الناموس، لأجل الصبي المخلص يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Mary the Virgin, and Joseph and Salome, were greatly amazed, with what they saw.</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲥⲁⲗⲟⲩⲙⲏ: ⲁⲩⲉⲣϣ̀ⲫⲏⲣⲓ ⲉ̀ⲙⲁϣⲱ: ⲉⲑⲃⲉ ⲛⲏⲉⲧⲟⲩ ⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ.</td>
            <td class="arabic">مريم العذراء، ويوسف وسالومى، تعجبوا جداً، ممَنْ رأوه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O great saint, Abba Joseph the righteous, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲉ̅ⲑ̅ⲩ̅: ⲁⲃⲃⲁ Ⲓⲱⲥⲏⲫ ⲡⲓⲇⲓⲕⲉⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، أيها القديس العظيم، الأنبا يوسف الصديق، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
popeKyrillosVIDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Pope Kyrillos VI Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Pope Kyrillos VI Doxology
        <span class="coptic-caption">Ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲓⲙⲁϩⲥⲟⲟⲩ</span>
        <span class="arabic-caption">ذكصولوجية البابا كيرلس السادس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Pope Abba Kyrillos VI, / the truly blessed, / who confirmed us in the true / Orthodox faith.</td>
            <td class="coptic">Ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲓⲙⲁϩⲥⲟⲟⲩ: ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲫⲏⲉ̀ⲧⲁϥⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ: ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ.</td>
            <td class="arabic">البابا أنبا كيرلس السادس، الطوباوي بالحقيقة، الذي ثبَّتنا في الإيمان، الأرثوذكسي الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">A name of pride is your name, / O pure monk, / the strong mandrite, / the friend of hermits.</td>
            <td class="coptic">Ⲟⲩⲣⲁⲛ ⲛ̀ϣⲟⲩϣⲟⲩ ⲡⲉ ⲡⲉⲕⲣⲁⲛ: ⲱ̀ ⲡⲓⲙⲟⲛⲁⲭⲟⲥ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ: ⲱ̀ ⲡⲓⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲧ: ⲡⲓϣ̀ⲫⲏⲣ ⲛ̀ⲛⲓⲁ̀ⲛⲁⲭⲱⲣⲓⲧⲏⲥ.</td>
            <td class="arabic">اسم فخر هو اسمك، أيها الراهب الطَّاهر، والمتوحِّد القوي، صديق السواح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Therefore, you became for us / a role-model in speech, / in love and action, / in purity and faith.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲕϣⲱⲡⲓ ⲛⲁⲛ: ⲛ̀ⲟⲩⲧⲩⲡⲟⲥ ϧⲉⲛ ⲡ̀ⲥⲁϫⲓ: ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ ϧⲉⲛ ⲡⲓϫⲓⲛⲙⲟϣⲓ: ϧⲉⲛ ⲡⲓⲧⲟⲩⲃⲟ ϧⲉⲛ ⲫ̀ⲛⲁϩϯ.</td>
            <td class="arabic">من أجل هذا صِرتَ لنا، قدوة في الكلام، في المحبة في التصرف، في الطهارة في الإيمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Hail to you, who loves his children, / who healed the sick, / prophesied of wonders, / and cast out demons.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲙⲁⲓⲛⲉϥϣⲏⲣⲓ: ⲫⲏⲉ̀ⲧⲁϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ: ⲁϥⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ ⲛ̀ⲛⲓϣ̀ⲫⲏⲣⲓ: ⲟⲩⲟϩ ⲛⲓⲇⲩⲙⲱⲛ ⲁϥϩⲓⲧⲟⲩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">السلام لِمُحِب أولاده، الذي شفى المرضى، وتنبأ بالعظائم، وأخرج الشياطين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Blessed is your papacy, / O our blessed father. / You returned St. Mark’s relics, / and prepared the holy Myron.</td>
            <td class="coptic">Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲡⲉⲕⲃⲓⲟⲥ: ⲱ̀ ⲡⲉⲛⲓⲱⲧ ⲙ̀ⲙⲁⲕⲁⲣⲓⲟⲥ: ⲁⲕⲧⲁⲥⲑⲟ ⲛⲁⲛ ⲙ̀ⲡⲓⲥⲱⲙⲁ ⲛ̀ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ: ⲟⲩⲟϩ ⲁⲕⲓ̀ⲣⲓ ⲙ̀Ⲡⲓⲙⲩⲣⲟⲛ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">مُباركٌ هو عهدك، يا أبانا الطوباوي، أعدت لنا جسد مارمرقس، وعملتَ الميرون المقدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Mary, the Mother of God, / appeared miraculously / with doves and incense / at her church in Zeitoun.</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁ Ϯⲙⲁⲥⲛⲟⲩϯ: ⲁⲥⲟⲩⲱⲛϩ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲛⲉⲙ ⲛⲓϭⲣⲟⲙⲡⲓ ⲛⲉⲙ ⲛⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ: ϧⲉⲛ ⲧⲉⲥⲉⲕⲕⲗⲏⲥⲓⲁ ϧⲉⲛ Ⲍⲁⲓⲧⲟⲩⲛ.</td>
            <td class="arabic">مريم والدة الإله، ظهرت بأعجوبة عظيمة، مع حمام وبخور، في كنيستها بالزيتون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">You built a new cathedral, / the great monastery of St. Mina, / and many churches, / yet your heart was not haughty.</td>
            <td class="coptic">Ⲁⲕⲕⲱⲧ ⲛ̀ⲟⲩⲙⲁⲛⲕⲁⲑⲉⲇⲣⲁ ⲙ̀ⲃⲉⲣⲓ: ⲛⲉⲙ ⲡⲓⲛⲓϣϯ ⲛ̀ⲁ̀ⲃⲏⲧ ⲛ̀ⲁⲃⲃⲁ Ⲙⲏⲛⲁ: ⲛⲉⲙ ϩⲁⲛⲙⲏϣ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ: ⲡⲉⲕϩⲏⲧ ⲙ̀ⲡⲉϥϭⲁⲥⲓⲛⲁϩⲃⲓ ⲉ̀ⲡ̀ⲧⲏⲣϥ.</td>
            <td class="arabic">بَنيتَ كاتدرائية جديدة، والدير العظيم لمارمينا، وكنائس كثيرة، أمَّا قلبكَ فلم يستكبر مُطلقاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">You always arose at dawn / in strength or sickness / to praise with the angels / and your beloved saints.</td>
            <td class="coptic">Ϣⲁⲕⲧⲱⲛⲕ ⲙ̀ⲫ̀ⲛⲁⲩ ⲛ̀ϣⲟⲣⲡ: ϧⲉⲛ ⲧⲉⲕϫⲟⲙ ⲛⲉⲙ ⲛⲉⲕϣⲱⲛⲓ: ⲉⲑⲣⲉⲕϩⲱⲥ ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲉ̀ⲧⲉⲕⲙⲉⲛⲣⲓⲧⲟⲩ.</td>
            <td class="arabic">تعوَّدتَ القيام وقت السَّحر، في قوتك وفي أمراضك، لتُسبِّح مع الملائكة، ومع القديسين أحبائك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Now, remember us / before our God / that He may perfect us / like you in love and faith.</td>
            <td class="coptic">Ϯⲛⲟⲩ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛⲛⲟⲩϯ: ⲉⲑⲣⲉϥϫⲱⲕ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉⲕⲣⲏϯ: ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ ϧⲉⲛ ⲫ̀ⲛⲁϩϯ.</td>
            <td class="arabic">والآن اذكرنا، أمام إلهنا، ليكمِّلنا مثلكَ، في المحبة في الإيمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Pray to the Lord on our behalf / our holy and righteous father, / Pope Abba Kyrillos VI, / that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲇⲓⲕⲉⲟⲥ: ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲓⲙⲁϩⲥⲟⲟⲩ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲓⲛⲛⲟⲩⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اُطلب من الرب عنا، يا أبانا القديس الصدِّيق، البابا أنبا كيرلس السادس، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stArseniusDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Arsenius Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Arsenius Doxology
        <span class="coptic-caption">Ⲁⲣⲥⲉⲛⲓⲟⲥ ⲡⲓⲛⲓϣϯ ⲛ̀ⲥⲁϧ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا أرسانيوس معلم اولاد الملوك</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Arsenius the great teacher, left behind the whole world, and its corruptible glory, and heard the divine voice.</td>
            <td class="coptic">Ⲁⲣⲥⲉⲛⲓⲟⲥ ⲡⲓⲛⲓϣϯ ⲛ̀ⲥⲁϧ: ⲁϥⲭⲱ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲥⲱϥ: ⲛⲉⲙ ⲡⲉϥⲱ̀ⲟⲩ ⲉⲑⲛⲁⲧⲁⲕⲟ: ⲁϥⲥⲱⲧⲉⲙ ⲛⲉⲙ ϯⲥ̀ⲙⲏ ⲛ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">أرسانيوس المعلم العظيم، ترك العالم كله وراءه، ومجده الفاني، وسمع الصوت الإلهي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">"Flee from the people, to save your soul," Arsenius went to the wilderness, and endured pains for Christ´s sake.</td>
            <td class="coptic">Ϫⲉ ⲫⲱⲧ ⲉ̀ⲃⲟⲗ ϩⲁ ⲛⲓⲣⲱⲙⲓ: ⲉⲕⲉ̀ⲛⲟϩⲉⲙ ⲛ̀ⲧⲉⲕⲯⲩⲭⲏ: Ⲁⲣⲥⲉⲛⲓⲟⲥ ⲁϥϩⲱⲗ ⲉ̀ⲡ̀ϣⲁϥⲉ: ⲁϥϣⲉⲡϧⲓⲥⲓ ⲉ̀ⲙⲁϣⲱ ⲉⲑⲃⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">"اهرب من الناس، وأنت تُخلِّص نفسك،" أرسانيوس مضى إلى البرية، واحتمل أتعاباً كثيرة من أجل المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Your incense spread, and your remembrance renown, because of your constant prayers, and your silence and tears.</td>
            <td class="coptic">Ⲁ̀ ⲡⲉⲕⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ϣⲱϣ ⲉ̀ⲃⲟⲗ: ⲁ̀ ⲡⲉⲕⲥⲱⲓⲧ ⲥⲱⲣ ⲉ̀ⲃⲟⲗ: ⲉⲑⲃⲉ ⲛⲉⲕϣ̀ⲗⲏⲗ ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ: ⲡⲉⲕⲭⲁⲣⲱϥ ⲛⲉⲙ ⲛⲉⲕⲉⲣⲙⲱⲟⲩⲓ̀.</td>
            <td class="arabic">بخورك قد فاح، وصيتك قد ذاع، من أجل صلواتك الدائمة، وصمتك ودموعك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The chorus of the monks, with the saints all together, take pride in the pains, which you endured for Christ´s sake.</td>
            <td class="coptic">Ⲛⲓⲭⲟⲣⲟⲥ ⲛ̀ⲛⲓⲙⲟⲛⲁⲭⲟⲥ: ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲉⲩⲥⲟⲡ: ⲥⲉϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲱⲟⲩ ϩⲓϫⲉⲛ ⲛⲓϧⲓⲥⲓ: ⲉ̀ⲧⲁⲕϣⲟⲡⲟⲩ ⲉⲑⲃⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">مصاف الرهبان، والقديسين جميعهم معاً، يفتخرون للاتعاب، التي احنملتها من أجل المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to you O cross-bearer, hail to the good struggler, hail to the beloved of Christ, our holy father Abba Arsenius.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲣⲉϥⲙⲓϣⲓ ⲛ̀ⲕⲁⲗⲱⲥ: ⲭⲉⲣⲉ ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲁⲣⲥⲉⲛⲓⲟⲥ.</td>
            <td class="arabic">السلام لك أيها اللابس الصليب، السلام للمجاهد الحسن، السلام لحبيب المسيح، أبينا القديس الأنبا أرسانيوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O our holy and righteous father, Abba Arsenius the teacher of the kings, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ Ⲁⲣⲥⲉⲛⲓⲟⲥ ⲡ̀ⲥⲁϧ ⲛ̀ⲛⲓⲟⲩⲣⲱⲟⲩ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اطلب من الرب عنا، يا أبانا القديس البار، الأنبا أرسانيوس معلم الملوك، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stAnthonyAndStPaulDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Anthony & St. Paul Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Anthony & St. Paul Doxology
        <span class="coptic-caption">Ⲇⲟⲝⲟⲗⲟⲅⲓⲁ ⲉⲑⲃⲉ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا أنطونيوس والأنبا بولا</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O the pillars of light: the stars in truth: that enlighten our souls: through their holy virtues,</td>
            <td class="coptic">Ⲱ ⲛⲓⲥⲧⲩⲗⲗⲟⲥ ⲛ̀ⲣⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ: ⲛⲓⲫⲱⲥⲧⲏⲣ ⲛ̀ⲁⲗⲏⲑⲓⲛⲟⲛ: ⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲛⲟⲩⲁⲣⲏⲧⲏ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">أيها العمودان النيران الكوكبان الحقيقيان المضيئان لنفوسنا بفضائلهما المقدسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Abba Anthony and Abba Paul: who decorated their lives: with fasts and prayers: and with great purity,</td>
            <td class="coptic">Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲁⲓ ⲉⲧⲁⲩⲥⲟⲗⲥⲉⲗ ⲙ̀ⲡⲟⲩⲃⲓⲟⲥ: ϧⲉⲛ ϩⲁⲛⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ϩⲁⲛϣ̀ⲗⲏⲗ: ⲛⲉⲙ ⲟⲩⲛⲓϣϯ ⲛ̀ⲧⲟⲩⲃⲟ.</td>
            <td class="arabic">انباأنطزنيوس أنبا بولا .اللذان زينا سيرتهما بأصوام وصلوات وطهاره عظيمه .</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Dwelling in the wilderness: and praising God incessantly; by day and by night: in the likeness of angels,</td>
            <td class="coptic">Ⲉⲩϣⲟⲡ ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲛⲓϣⲁϥⲉⲩ: ⲉⲩϩⲱⲥ ⲉⲪϯ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲑⲙⲟⲩⲛⲕ: ⲙ̀ⲡⲓⲉϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉϫⲱⲣϩ: ⲙ̀ⲫⲣⲏϯ ⲛ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">ساكنان فى البرارى. مسبحان الله بلا فتور نهارا وليلا مثل الملائكه :</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Until they completed their lives: in joy and happiness: they received everlasting crowns, in the heavenly Jerusalem;</td>
            <td class="coptic">Ϣⲁⲛ̀ⲧⲟⲩϫⲱⲕ ⲙ̀ⲡⲟⲩⲃⲓⲟⲥ ⲉⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ: ⲁⲩϭⲓ ⲙ̀ⲡⲡⲓⲭⲗⲟⲙ ⲛ̀ⲁⲧⲧⲁⲕⲟ: ϧⲉⲛ Ⲓⲗ̅ⲏ̅ⲙ̅ ⲛ̀ⲧⲉ ⲧⲫⲉ.</td>
            <td class="arabic">حتى أكملا عمرهما بفرح وتهليل ونالا الاكليل غير الفاسد فى أورشاليم السمائيه</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Singing with the angels: and the heavenly orders: and the chorus of the saints: in a single symphony,</td>
            <td class="coptic">Ⲉⲩϩⲱⲥ ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲏⲉ̅ⲑ̅ⲩ̅: ϧⲉⲛ ⲟⲩⲥⲩⲙⲫⲱⲛⲓⲁ ⲛ̀ⲟⲩⲱⲧ.</td>
            <td class="arabic">مسبحين مع الملائكه والطغمات السمائيه ومصاف القدسين باتفاق وأحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Glorifying the Holy Trinity: who is of one essence: who is the beginning and the end: of all good things.</td>
            <td class="coptic">Ⲉⲩϯⲱⲟⲩ ⲛ̀Ϯⲧⲣⲓⲁⲥ: ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲟⲙⲟⲟⲩⲥⲓⲟⲥ: ⲉⲧⲉ ⲛ̀ⲑⲟⲥ ϯⲁⲧⲣⲭⲏ: ⲛⲉⲙ ⲡ̀ϫⲱⲕ ⲉⲃⲟⲗ ⲛ̀ⲁⲅⲁⲑⲟⲛ ⲛⲓⲃⲉⲛ</td>
            <td class="arabic">ممجدان الثالوث الاقدس المساوى فى الجوهر الذى هو بدايه ونهايه كل الخيرات .</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Truly blessed are you: our holy and righteous fathers: Abba Anthony and Abba Paul: the beloved of Christ.</td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲑⲏⲓ: ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲓⲙⲉⲛⲣⲁϯ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">طوباهم بالحقيقه أبوينا القديسين البارين أنبا أنطونيوس وأنبا بولا محبى المسيح .</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf: my lords and fathers who love their children: Abba Anthony and Abba Paul: that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀ⲡⲟ̅ⲥ̅ ⲉϩ̀ⲣⲏⲓ ⲉϫⲱⲛ: ⲱ ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛ̀ⲧⲉⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ</td>
            <td class="arabic">أطلبا عنا ياسيدى الابوين محبى أولادهما أنطونيوس وأنبا بولا ليغفر ...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stPaultheHermitDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Paul the Hermit">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Paul the Hermit Doxology
        <span class="coptic-caption">Ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا بولا أول السواح</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Our holy father Abba Paul, was the first in the wilderness, he unceasingly disciplined himself, by day and by night.</td>
            <td class="coptic">Ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲁϥϣⲱⲡⲓ ⲛ̀ϩⲟⲩⲓⲧ ϩⲓ ⲡ̀ϣⲁϥⲉ: ⲁϥⲉⲣⲁⲥⲕⲓⲛ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲑⲙⲟⲩⲛⲕ: ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ.</td>
            <td class="arabic">أبونا القديس أنبا بولا صار أولا فى البرية وتنسك بغير انقطاع نهاراً وليلاً</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He fought in the stadium, of piety and he received, the gift of victory, through the strength of Christ.</td>
            <td class="coptic">Ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓⲥ̀ⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ: ⲁϥϭⲓ ⲙ̀ⲡⲓⲃⲁⲓ ⲛ̀ⲧⲉ ⲡⲓϭ̀ⲣⲟ: ϩⲓⲧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">وجاهد فى ميدان العبادة ونال جائزة الغلبة بقوة المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Proclaiming and saying, like the wise Paul, before our righteous father, the great Saint Antony.</td>
            <td class="coptic">Ⲉϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲥⲟⲫⲟⲥ Ⲡⲁⲩⲗⲟⲥ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲡⲓⲑ̀ⲙⲏⲓ: ⲡⲓⲛⲓϣϯ ⲉ̅ⲑ̅ⲩ̅ Ⲁⲛⲧⲱⲛⲓⲟⲥ.</td>
            <td class="arabic">صارخاً قائلاً مثل بولس الحكيم أمام أبينا البار العظيم القديس أنطونيوس</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">"I have fought, the good fight, I have finished the race, and I have kept the faith."</td>
            <td class="coptic">Ⲁⲛⲟⲕ ⲡⲓⲁ̀ⲅⲱⲛ ⲉⲑⲛⲁⲛⲉϥ: ⲁⲓⲉⲣⲁ̀ⲅⲱⲛⲓⲍⲉⲥⲑⲉ ⲙ̀ⲙⲟϥ: ⲡⲓⲇ̀ⲣⲟⲙⲟⲥ ⲁⲓϫⲟⲕϥ ⲉ̀ⲃⲟⲗ: ⲡⲓⲛⲁϩϯ ⲁⲓⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">قد جاهدت الجهاد الحسن. وأكملت السعى وحفظت الايمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">"There is laid up for me, the crown of righteousness, which the Lord will give me, in that day."</td>
            <td class="coptic">Ⲡⲁⲗⲓⲛ ϥ̀ⲭⲏ ⲛⲏⲓ ⲛ̀ϫⲉ ⲡⲓⲭ̀ⲗⲟⲙ: ⲛ̀ⲧⲉ ϯⲇⲓⲕⲉⲟⲥⲩⲛⲏ: ⲫⲁⲓ ⲉ̀ⲧⲉ Ⲡⲟ̅ⲥ̅ ⲛⲁⲧⲏⲓϥ ⲛⲏⲓ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">وأيضاً وضع لى اكليل البر هذا الذى يعطيه لى الرب فى ذلك اليوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O great and holy Abba Paul, that the Lord whom you have loved, may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲟ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲁⲕⲙⲉⲛⲣⲓⲧϥ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها القديس العظيم أنبا بولا من الرب الذى احببته لكى يغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stMacariustheGreatDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Macarius the Great Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Macarius the Great Doxology
        <span class="coptic-caption">Ⲭⲉⲣⲉ ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا مقار الكبير</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Our holy father Abba Paul, was the first in the wilderness, he unceasingly disciplined himself, by day and by night.</td>
            <td class="coptic">Ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲁϥϣⲱⲡⲓ ⲛ̀ϩⲟⲩⲓⲧ ϩⲓ ⲡ̀ϣⲁϥⲉ: ⲁϥⲉⲣⲁⲥⲕⲓⲛ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲑⲙⲟⲩⲛⲕ: ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ.</td>
            <td class="arabic">أبونا القديس أنبا بولا صار أولا فى البرية وتنسك بغير انقطاع نهاراً وليلاً</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He fought in the stadium, of piety and he received, the gift of victory, through the strength of Christ.</td>
            <td class="coptic">Ⲁϥϭⲟϫⲓ ϧⲉⲛ ⲡⲓⲥ̀ⲧⲁⲇⲓⲟⲛ: ⲛⲧⲉ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ: ⲁϥϭⲓ ⲙ̀ⲡⲓⲃⲁⲓ ⲛ̀ⲧⲉ ⲡⲓϭ̀ⲣⲟ: ϩⲓⲧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">وجاهد فى ميدان العبادة ونال جائزة الغلبة بقوة المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Proclaiming and saying, like the wise Paul, before our righteous father, the great Saint Antony.</td>
            <td class="coptic">Ⲉϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲥⲟⲫⲟⲥ Ⲡⲁⲩⲗⲟⲥ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲡⲓⲑ̀ⲙⲏⲓ: ⲡⲓⲛⲓϣϯ ⲉ̅ⲑ̅ⲩ̅ Ⲁⲛⲧⲱⲛⲓⲟⲥ.</td>
            <td class="arabic">صارخاً قائلاً مثل بولس الحكيم أمام أبينا البار العظيم القديس أنطونيوس</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">"I have fought, the good fight, I have finished the race, and I have kept the faith."</td>
            <td class="coptic">Ⲁⲛⲟⲕ ⲡⲓⲁ̀ⲅⲱⲛ ⲉⲑⲛⲁⲛⲉϥ: ⲁⲓⲉⲣⲁ̀ⲅⲱⲛⲓⲍⲉⲥⲑⲉ ⲙ̀ⲙⲟϥ: ⲡⲓⲇ̀ⲣⲟⲙⲟⲥ ⲁⲓϫⲟⲕϥ ⲉ̀ⲃⲟⲗ: ⲡⲓⲛⲁϩϯ ⲁⲓⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">قد جاهدت الجهاد الحسن. وأكملت السعى وحفظت الايمان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">"There is laid up for me, the crown of righteousness, which the Lord will give me, in that day."</td>
            <td class="coptic">Ⲡⲁⲗⲓⲛ ϥ̀ⲭⲏ ⲛⲏⲓ ⲛ̀ϫⲉ ⲡⲓⲭ̀ⲗⲟⲙ: ⲛ̀ⲧⲉ ϯⲇⲓⲕⲉⲟⲥⲩⲛⲏ: ⲫⲁⲓ ⲉ̀ⲧⲉ Ⲡⲟ̅ⲥ̅ ⲛⲁⲧⲏⲓϥ ⲛⲏⲓ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">وأيضاً وضع لى اكليل البر هذا الذى يعطيه لى الرب فى ذلك اليوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O great and holy Abba Paul, that the Lord whom you have loved, may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲟ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲁⲕⲙⲉⲛⲣⲓⲧϥ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا أيها القديس العظيم أنبا بولا من الرب الذى احببته لكى يغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stMacariustheAlexandrianDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Macarius the Alexandrian Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Macarius the Alexandrian Doxology
        <span class="coptic-caption">Ⲥⲉⲉ̀ⲣⲙⲉⲏⲣⲉ ϧⲁⲣⲟⲕ ϧⲉⲛ ⲟⲩⲙⲉⲏⲙⲏⲓ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا مقار السكندري</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">For the dark caves, witness concerning you, when you dwelt in them, O Abba Makari the presbyter.</td>
            <td class="coptic">Ⲥⲉⲉ̀ⲣⲙⲉⲏⲣⲉ ϧⲁⲣⲟⲕ ϧⲉⲛ ⲟⲩⲙⲉⲏⲙⲏⲓ: ⲛ̀ϫⲉ ⲛⲓⲥ̀ⲡⲏⲗⲉⲟⲛ ⲛ̀ⲭⲁⲕⲓ: ⲉ̀ⲧⲁⲕϣⲱⲡⲓ ⲛ̀ϧ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲟⲩ: ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ.</td>
            <td class="arabic">يشهد عنك بالحقيقة المغائر المظلمة التى سكنت فيها ياأنبا مقار القس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">That you were worthy, to stand before the Lord, for five days and five nights, your mind was lifted to heaven.</td>
            <td class="coptic">Ϩⲱⲥⲧⲉ ⲛ̀ⲧⲉⲕⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ: ⲛ̀ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛ̀ⲉ̀ⲧⲓⲟⲟⲩ (ⲉ̅) ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲉ̀ⲧⲓⲟⲟⲩ ⲛ̀ⲉ̀ϫⲱⲣϩ: ⲉ̀ⲣⲉ ⲡⲉⲕⲛⲟⲩⲥ ⲭⲏ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
            <td class="arabic">حتى أنك إستحققت أن تقف أمام الرب خمسة أيام وخمسة ليال. وعقلك فى السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You praised with the angels, and all the heavenly hosts, and the whole choir of the saints, you glorified the Trinity.</td>
            <td class="coptic">Ⲉⲕϩⲱⲥ ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲏⲉ̅ⲑ̅ⲩ̅: ⲉⲕϯⲱ̀ⲟⲩ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ.</td>
            <td class="arabic">تسبح مع الملائكة والطغمات السمائية وكل مصاف القديسين ممجداً الثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Pray to the Lord on our behalf, O Abba Makari the presbyter, and all his children the cross-bearers, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲛ̀ⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياأنبا مقار القس وأولاده لابسى الصليب ليغفر....</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stMacariusTheBishopDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Macarius (Bishop of Edkow) Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Macarius (Bishop of Edkow) Doxology
        <span class="coptic-caption">Ⲁϥⲛⲁⲙⲟⲩϯ ⲉ̀ⲣⲟⲕ ϫⲉ ⲛⲓⲙ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا مقار الأسقف</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Your people whom you guided, in purity and righteousness, what should they call you, O Abba Makari the Bishop.</td>
            <td class="coptic">Ⲁϥⲛⲁⲙⲟⲩϯ ⲉ̀ⲣⲟⲕ ϫⲉ ⲛⲓⲙ: ⲛ̀ϫⲉ ⲡⲉⲕⲗⲁⲟⲥ ⲉ̀ⲧⲁⲕⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟϥ: ϧⲉⲛ ⲟⲩⲧⲟⲩⲃⲟ ⲛⲉⲙ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ.</td>
            <td class="arabic">ماذا يدعوك شعبك الذى رعيته بطهارة وبر ياأنبا مقار الأسقف.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">If I call you an angel, or a shepherd or a martyr, these all you have truly accomplished, in deed and word of truth.</td>
            <td class="coptic">Ⲁⲓϣⲁⲛϫⲟⲥ ⲉ̀ⲣⲟⲕ ϫⲉ ⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲓⲉ ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲓⲉ ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲛⲁⲓ ⲁⲕϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ ⲕⲁⲗⲱⲥ: ϧⲉⲛ ⲡ̀ϩⲱⲃ ⲛⲉⲙ ⲡ̀ⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">ان قلت عنك انك ملاك أو راع أو شهيد فهذه اكملتها جيداً بالفعل وقول الحق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">I will say of you an angel, for you have left your body, I will say of you a shepherd, for you gave your life for your sheep.</td>
            <td class="coptic">Ⲁⲓϣⲁⲛϫⲟⲥ ⲉ̀ⲣⲟⲕ ϫⲉ ⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲕⲉ ⲅⲁⲣ ⲁⲕⲭⲱ ⲙ̀ⲡⲉⲕⲥⲱⲙⲁ ⲉ̀ϧ̀ⲣⲏⲓ: ⲁⲓϣⲁⲛϫⲟⲥ ⲉ̀ⲣⲟⲕ ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲁⲕϯ ⲛ̀ⲧⲉⲕⲩⲭⲏ ⲉ̀ϫⲉⲛ ⲛⲉⲕⲉ̀ⲥⲱⲟⲩ.</td>
            <td class="arabic">ان قلت عنك انك ملاك فقد ضحيت بجسدك وان قلت عنك انك راع فقد اسلمت نفسك عن رعيتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">I will say of you a martyr, for you delivered your head for Christ, He who became a martyr for us, before Pontius Pilate.</td>
            <td class="coptic">Ⲁⲓϣⲁⲛϫⲟⲥ ⲉ̀ⲣⲟⲕ ϫⲉ ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲕϯ ⲛ̀ⲧⲉⲕⲁ̀ⲫⲉ ϧⲁ Ⲡⲭ̅ⲥ̅: ⲫⲁⲓ ⲉ̀ⲧⲁϥⲉⲣⲙⲁⲣⲧⲩⲣⲟⲥ ⲉⲑⲃⲏⲧⲉⲛ: ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ.</td>
            <td class="arabic">وان قلت عنك انك شهيد فقد اسلمت رأسك لاجل المسيح الذى صار فداءاً لاجلنا أمام بيلاطس البنطى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">You completed the priesthood, you have kept the faith, you wore the unfading crown, of martyrdom.</td>
            <td class="coptic">Ϯⲙⲉⲧⲟⲩⲏⲃ ⲁⲕϫⲟⲕⲥ ⲉ̀ⲃⲟⲗ: ⲡⲓⲛⲁϩϯ ⲁⲕⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲁⲕⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">اكملت الكهنوت وحفظت الايمان ونلت اكليل الشهادة غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O my master the ascetic father, Abba Makari the Bishop, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲛ̀ⲁⲥⲕⲏⲧⲥ: ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياسيدى الآب الناسك أنبا مقار الاسقف ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stShenoudaTheArchimandriteDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Shenouda the Archimandrite Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Shenouda the Archimandrite Doxology
        <span class="coptic-caption">Ⲛ̀ⲑⲟⲕ ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية لأنبا شنودة رئيس المتوحدين</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">You are blessed / O our holy father Abba Shenouda, / for you became an apostle / and also a prophet.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ: ϫⲉ ⲁⲕϣⲱⲡⲓ ⲛ̀ⲟⲩⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲩⲥⲟⲡ.</td>
            <td class="arabic">أنت مطوب، يا أبانا القديس أنبا شنودة، لأنك صرت رسولاً، ونبياً معاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">You have set for us a law / of perfect virtues, / and kept the written commandments / in the Gospel.</td>
            <td class="coptic">Ⲕⲉ ⲅⲁⲣ ⲁⲕⲥⲉⲙⲛⲉ ⲛⲟⲙⲟⲥ ⲛⲁⲛ: ⲉ̀ⲛⲓⲁ̀ⲣⲉⲧⲏ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲁⲕⲁ̀ⲣⲉϩ ⲉ̀ⲛⲓⲉⲛⲧⲟⲗⲏ ⲉⲧⲥ̀ϧⲏⲟⲩⲧ: ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ.</td>
            <td class="arabic">لأنك وضعت لنا ناموساً، للفضائل الكاملة، وحفظت الوصايا، المكتوبة في الإنجيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">For the Lord will guard / those who follow them; / His angels accompany them / in the heavenly Jerusalem.</td>
            <td class="coptic">Ⲛⲏⲉⲑⲛⲁⲙⲟϣⲓ ⲅⲁⲣ ⲛ̀ϧⲏⲧⲟⲩ: ⲁ̀ Ⲫ̀ϯ ϥ̀ⲛⲁⲣⲱⲓⲥ ⲉ̀ⲣⲱⲟⲩ: ⲛⲁϥⲁⲅⲅⲉⲗⲟⲥ ⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ: ϧⲉⲛ Ⲓⲁⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ.</td>
            <td class="arabic">والسالكون فيها، يحرسهم الله، وملائكته ترافقهم، إلى أورشليم السمائية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The incense of his virtues / delighted our souls / like the blossomed aroma / in the Paradise.</td>
            <td class="coptic">Ⲁ̀ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ ⲛ̀ⲧⲉ ⲛⲉϥⲁ̀ⲣⲉⲧⲏ: ϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲁ̀ⲣⲱⲙⲁⲧⲁ: ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
            <td class="arabic">بخور فضائله، أعطى الفرح لنفوسنا، مثل العنبر الفائح، في الفردوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Truly you were greatly exalted / in the midst of the council / of our orthodox fathers / in the city of Ephesus.</td>
            <td class="coptic">Ⲁ̀ⲗⲏⲑⲱⲥ ⲁⲕϭⲓⲥⲓ ⲉ̀ⲙⲁϣⲱ: ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀ϯⲥⲩⲛⲟⲇⲟⲥ: ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ϧⲉⲛ ϯⲡⲟⲗⲓⲥ Ⲉ̀ⲫⲉⲥⲟⲥ.</td>
            <td class="arabic">بالحقيقة ارتفعت جداً، في وسط مجمع، أبائنا الأرثوذكسيين، في مدينة أفسس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You embarrassed Nestorius, / the impious patriarch, / and you have confessed / the good confession.</td>
            <td class="coptic">Ⲁⲕϯϭⲓⲡⲓ ⲛ̀Ⲛⲓⲥⲧⲟⲩⲣⲓⲟⲥ: ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛ̀ⲁ̀ⲥⲉⲃⲏⲥ: ⲟⲩⲟϩ ⲁⲕⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ: ⲛ̀ϯⲟ̀ⲙⲟⲗⲟⲅⲓⲁ ⲉⲑⲛⲁⲛⲉϥ.</td>
            <td class="arabic">وأخزيت نسطور، البطريرك المنافق، واعترفت، الإعتراف الحسن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">“One in essence is the Trinity, / co-essential and life-giving, / the Father, the Son, and the Holy Spirit, / three names for one God.”</td>
            <td class="coptic">Ϧⲉⲛ ⲟⲩⲙⲉⲧⲟⲩⲁⲓ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ: ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ ⲛ̀ⲟⲩⲙⲟⲟⲩⲥⲓⲟⲥ: Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ϣⲟⲙⲧ ⲛ̀ⲣⲁⲛ Ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ.</td>
            <td class="arabic">بوحدانية (جوهر) الثالوث، المحيي المساوي، الآب والابن والروح القدس، ثلاثة أسماء للإله الواحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">And you heard the loud voice / from heaven, saying, / “You are sanctified / O Shenouda the archimandrite.”</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲕⲥⲱⲧⲉⲙ ⲉⲧⲥ̀ⲙⲏ ⲉϥⲱϣ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ ⲉϥϫⲱ ⲙ̀ⲙⲟⲕ: ϫⲉ ⲁⲩⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ: Ⲥⲉⲛⲟⲩⲑⲓⲟⲥ ⲛ̀ⲁⲣⲭⲏ-ⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ.</td>
            <td class="arabic">وسمعت الصوت، الصارخ من السماء، قائلاً "مقدس أنت، يا شنودة رئيس المتوحدين."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Blessed are you, O righteous one, / Abba Shenouda the Archimandrite, / for you spoke with Christ / like Moses the law-giver.</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁⲧⲕ ⲱ̀ ⲡⲓⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁⲣⲭⲏⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲁⲕⲥⲁϫⲓ ⲛⲉⲙ Ⲡⲭ̅ⲥ̅: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲓⲛⲟⲙⲟⲑⲓⲧⲏⲥ.</td>
            <td class="arabic">طوباك أيها البار، أنبا شنودة رئيس المتوحدين، لأنك تكلمت مع المسيح، مثل موسى واضع الناموس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Pray to the Lord on our behalf, / O my master, the ascetic father, / Abba Shenouda the archimandrite, / that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲛ̀ⲁⲥⲕⲩⲧⲏⲥ: ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁⲣⲭⲏⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، يا سيدي الآب الناسك، أنبا شنودة رئيس المتوحدين، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stJohnTheShortDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. John the Short Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. John the Short Doxology
        <span class="coptic-caption">Ⲁⲕϣⲱⲡⲓ ⲅⲁⲣ ⲛ̀ⲟⲩⲫⲱⲥⲧⲏⲣ</span>
        <span class="arabic-caption">ذوكصولوجية الأنبا يؤانس القصير</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">For you have become a star, of light upon the earth, O blessed and holy one, my master and father Abba John.</td>
            <td class="coptic">Ⲁⲕϣⲱⲡⲓ ⲅⲁⲣ ⲛ̀ⲟⲩⲫⲱⲥⲧⲏⲣ: ⲛ̀ⲣⲉϥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲱ̀ ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ.</td>
            <td class="arabic">صرت كوكبا منيرا على الأرض أيها الطوباوى الطاهر سيدى الآب أنبا يؤانس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">That through your humility, and angelic life, you made Shiheet like the stars, with your finger.</td>
            <td class="coptic">Ϩⲱⲥⲧⲉ ϩⲓⲧⲉⲛ ⲡⲉⲕⲑⲉⲃⲓⲟ̀: ⲛⲉⲙ ⲡⲉⲕⲃⲓⲟⲥ ⲛ̀ⲁ̀ⲅⲅⲉⲗⲓⲕⲟⲛ: ⲁⲕⲉϣ Ϣⲓϩⲏⲧ ⲧⲏⲣϥ ⲛ̀ⲥⲁ ⲡⲉⲕⲧⲏⲃ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲧⲉⲗⲧⲓⲗⲓ ⲙ̀ⲙⲱⲟⲩ.</td>
            <td class="arabic">حتى أنك من قبل تواضعك وسيرتك الملائكية اعتبرت كل شيهات كنقطة ماء فى أصبعك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">And you subdued your body, with many ascetic pains, so that you may be blameless, in the day of Judgment.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁⲕⲱ̀ϥⲓ ⲙ̀ⲡⲉⲕⲥⲱⲙⲁ: ϧⲉⲛ ϩⲁⲛⲁⲥⲕⲏⲥⲓⲥ ⲉⲩϧⲟⲥⲓ: ϣⲁⲛ̀ⲧⲉⲕϣⲱⲡⲓ ⲛ̀ⲁⲧⲕⲩⲛⲇⲓⲛⲟⲥ: ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯⲕ̀ⲣⲓⲥⲓⲥ.</td>
            <td class="arabic">وأقمت جسدك بنسك متعب لتكون بغير شدة فى يوم الدينونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">You became a harbor of salvation, you have risen the dead, you have exorcised the demons, and you have healed the sick.</td>
            <td class="coptic">Ⲁⲕϣⲱⲡⲓ ⲛ̀ⲗⲩⲙⲏⲛ ⲛ̀ⲟⲩⲟⲩϫⲁⲓ: ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ ⲁⲕⲧⲟⲩⲛⲟⲥⲟⲩ: ⲛⲓⲇⲉⲙⲱⲛ ⲁⲕϩⲓⲧⲟⲩ ⲉ̀ⲃⲟⲗ: ⲛⲏⲉⲧϣⲱⲛⲓ ⲁⲕⲧⲁⲗϭⲱⲟⲩ.</td>
            <td class="arabic">صرت ميناء خلاص. أقمت الأموات. وأخرجت الشياطين وشفيت المرضى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And also you were worthy, O my master and father Abba John, to sit with the Apostles, and judge your generation.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲁⲕⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ: ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ: ⲛ̀ⲧⲉⲕϩⲉⲙⲥⲓ ⲛⲉⲙ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲛ̀ⲧⲉⲕϯϩⲁⲡ ⲛ̀ⲧⲉⲕⲅⲉⲛⲉⲁ.</td>
            <td class="arabic">أيضا استحققت ياسيدى الآب أنبا يؤانس أن تجلس مع الرسل وتدين جيلك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O my master and father the hegumen, Abba John Colobos, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲅⲱⲛ: ⲱ̀ ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲁⲃⲃⲁ ⲒⲱⲁⲛⲛⲎⲥ: ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛ̀Ⲕⲟⲗⲟⲃⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياسيدى الآب القمص أنبا يؤانس القصير ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stsPishoyAndPaulofTammohDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Sts. Pishoy and Paul of Tammoh Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Sts. Pishoy and Paul of Tammoh Doxology
        <span class="coptic-caption">Ⲓⲱⲥⲏⲫ ⲡⲓⲁ̀ⲣⲭⲏⲉ̀ⲣⲉⲩⲥ</span>
        <span class="arabic-caption">ذوكصولوجية أنبا بيشوي وأنبا بولا</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O Joseph the high priest, of the great city of Alexandria, the pure virgin, adorned with true humility</td>
            <td class="coptic">Ⲓⲱⲥⲏⲫ ⲡⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ: ⲛ̀ⲧⲉ ϯⲛⲓϣϯ ⲙ̀ⲃⲁⲕⲓ Ⲣⲁⲕⲟϯ: ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲩⲧⲟⲩⲃⲏⲟⲩⲧ: ⲉⲧϫⲟⲗϩ ⲙ̀ⲡⲓⲑⲉⲃⲓⲟ ⲙ̀ⲙⲏⲓ.</td>
            <td class="arabic">يا يوساب رئيس كهنة، المدينة العظمى الاسكندرية، البتول النقي، الملتحف بالتواضع الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For in the days, of your high-priesthood, this great grace came to us, we the undeserving.</td>
            <td class="coptic">Ⲛ̀ϩⲣⲏⲓ ϧⲉⲛ ⲛⲓⲉ̀ϩⲟⲟⲩ: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ: ⲁ̀ⲡⲁⲓⲛⲓϣϯ ⲛ̀ϩ̀ⲙⲟⲧ ⲧⲁϩⲟⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲁⲧⲉⲙⲡ̀ϣⲁ.</td>
            <td class="arabic">في أيام رئاستك، أدركتنا، هذه النعمة العظيمة، نحن غير المستحقين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">That is the coming of our fathers, the cross-bearers, Abba Pishoy and Abba Paul, the shining stars.</td>
            <td class="coptic">Ⲉ̀ⲧⲉ ⲡⲓϫⲓⲛⲓ̀ ϣⲁⲣⲟⲛ: ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲓⲫⲱⲥⲧⲏⲣ ⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">أيْ مجىء أبوينا، لابسي الصليب إلينا، أنبا بيشوي وأنبا بولا، الكوكبين النيرين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">These who became unto us, two harbors of salvation, they have enlightened our souls, through their holy bodies.</td>
            <td class="coptic">Ⲛⲁⲓ ⲉ̀ⲧⲁⲩϣⲱⲡⲓ ⲛⲁⲛ: ⲥ̀ⲛⲁⲩ (ⲃ̅) ⲛ̀ⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ: ⲁⲩⲉⲣⲟⲩⲱⲓⲛⲓ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲛⲟⲩⲗⲩⲙⲁⲛⲟⲛ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">هذين اللذين صارا لنا، ميناء للخلاص، وأضاءا أنفسنا بواسطة، جسديهما الطاهرين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to our father Abba Pishoy, the just and perfect man, hail to our father Abba Paul, the beloved of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ: ⲡⲓⲑ̀ⲙⲏⲓ ⲡⲓⲣⲱⲙⲓ ⲛ̀ⲧⲉⲗⲓⲟⲥ: ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">السلام لأبينا أنبا بيشوي، الرجل البار الكامل، السلام لأبينا أنبا بولا، حبيب المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O masters and fathers who loved their children, Abba Pishoy and Abba Paul, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ: ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبا من ربنا عنا، يا سيدي الأبوين، محبي أولادهما، أنبا بيشوي وأنبا بولا، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stPachomiusAndTheodoreDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Pachomius and Theodore Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Pachomius and Theodore Doxology
        <span class="coptic-caption">Ⲛ̀ⲑⲟⲕ ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية اأنبا باخوميوس صاحب الشركة وثيؤدوروس تلميذه</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">You are blessed, O our holy father Abba Pachomius, you inherited the blessing, from the Lord God.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲟⲩⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ: ⲁⲕⲉⲣⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲥ̀ⲙⲟⲩ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡⲟ̅ⲥ̅ Ⲫϯ.</td>
            <td class="arabic">أنت طوباوى ياأبانا القديس باخوم. ورثت البركة من قبل الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Our holy father Pachomius, was worthy many times, to see the Lord, and His holy angels.</td>
            <td class="coptic">Ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ: ⲁⲕⲉⲣⲙ̀ⲡ̀ϣⲁ ⲛ̀ⲟⲩⲙⲏϣ ⲛ̀ⲥⲟⲡ: ⲁⲕⲉⲣⲑⲉⲟⲣⲓⲛ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲛⲉⲙ ⲛⲉϥⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">ياأبانا القديس أنبا باخوم استحققت مرارا كثيرة أن تنظر الرب مع ملائكته القديسين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Our holy father Pachomius, you have explained the commandments of God, and you perfected all virtues, and pleased Christ.</td>
            <td class="coptic">Ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ: ⲁⲕⲉ̀ⲣⲟⲩⲁ̀ϩⲉⲙ ⲛⲓⲉⲛⲧⲟⲗⲏ ⲛ̀ⲧⲉ Ⲫϯ: ⲁⲕϫⲱⲕ ⲛ̀ⲛⲓⲁ̀ⲣⲉⲧⲏ ⲧⲏⲣⲟⲩ: ⲟⲩⲟϩ ⲁⲕⲣⲁⲛⲁ ⲙ̀Ⲡⲟ̅ⲥ̅.</td>
            <td class="arabic">ياأبانا القديس أنبا باخوم. فسرت وصايا الله وأكملت كل الفضائل وأرضيت المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The adornment of the ascetics, is our holy father Theodore, for you became the replacement, of your father Pachomius.</td>
            <td class="coptic">Ⲯⲟⲗⲥⲉⲗ ⲛ̀ⲛⲓⲁ̀ⲥⲕⲏⲧⲏⲥ: ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲑⲉⲟⲇⲱⲣⲟⲥ: ϫⲉ ⲁⲕϣⲱⲡⲓ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ: ⲙ̀ⲡⲉⲕⲓⲱⲧ Ⲡⲁϧⲱⲙⲓⲟⲥ.</td>
            <td class="arabic">زينة النساك ياأبانا القديس ثيؤدوروس لأنك صرت عوضا عن أبيك باخوميوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">You directed the needs, of the brothers to piety, and you preached to them, with your precious word.</td>
            <td class="coptic">Ⲁⲕⲭⲟϩⲕⲁϩ ⲛ̀ⲛⲓⲥ̀ⲛⲏⲟⲩ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ: ⲁⲕⲉⲣⲕⲁⲑⲓⲭⲓⲛ ⲙ̀ⲙⲱⲟⲩ: ϧⲉⲛ ⲡⲉⲕⲥⲁϫⲓ ⲅⲁⲣ ⲉⲧϩⲟⲗϫ.</td>
            <td class="arabic">ووجهت طلب الأخوة الى التقوى ووعظتهم بكلامك الحلو.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You comforted the weak, and those of faint-heartedness, with perfect love, through our Lord Jesus Christ.</td>
            <td class="coptic">Ⲁⲕϯⲛⲟⲙϯ ⲛ̀ⲛⲏⲉⲧϩⲁϣ: ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲟⲓ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ϩⲏⲧ: ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ϩⲓⲧⲉⲛ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">وقويت الضعفاء وصغيرى القلوب بالمحبة الكاملة من قبل يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to my masters and holy fathers, Abba Pachomius of the Koinonia, and Theodore his disciple, the beloved of Christ.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ ⲉ̅ⲑ̅ⲩ̅: ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ ϯⲕⲟⲓⲛⲱⲛⲓⲁ: ⲛⲉⲙ ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ: ⲛⲓⲙⲉⲛⲣⲁϯ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">السلام لأبائنا القديسين أنبا باخوم صاحب الشركة وثيؤدوروس تلميذه محبى المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on out behalf, Abba Pachomius of the Koinonia, and Theodore his disciple, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲅⲱⲛ: ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ ϯⲕⲟⲓⲛⲱⲛⲓⲁ: ⲛⲉⲙ ⲑⲉⲟⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبا عنا ياأنبا باخوم صاحب الشركة وثيؤدوروس تلميذه ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stsMaximusAndDometiusDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Sts. Maximus and Dometius Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Sts. Maximus and Dometius Doxology
        <span class="coptic-caption">Ⲛⲓⲫⲱⲥⲧⲏⲣ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ</span>
        <span class="arabic-caption">ذوكصولوجية القديسين مكسيموس ودوماديوس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The stars of the truth, and the great princes, of our holy congregation, Maximus and Dometius.</td>
            <td class="coptic">Ⲛⲓⲫⲱⲥⲧⲏⲣ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲟⲩⲟϩ ⲛⲓⲛⲓϣϯ ⲛ̀ⲁ̀ⲣⲭⲏⲅⲟⲥ: ⲛ̀ⲧⲉ ⲧⲉⲛⲥⲩⲛⲟⲩⲇⲓⲁ̀ ⲉ̅ⲑ̅ⲩ̅: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ.</td>
            <td class="arabic">كوكبا الحق والرئيسان العظيمان اللذان لمجمعنا المقدس مكسيموس ودوماديوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">These whom the Life-giving Trinity, has gathered us in their name, that we me follow in their footsteps, and wear their holy images.</td>
            <td class="coptic">Ⲛⲁⲓ ⲉ̀ⲧⲁⲥⲑⲟⲩⲱⲧⲉⲛ ϧⲉⲛ ⲛⲟⲩⲣⲁⲛ: ⲛ̀ϫⲉ Ϯⲧ̀ⲣⲓⲁⲥ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲉⲑⲣⲉⲛⲙⲟϣⲓ ⲛ̀ⲥⲁ ⲛⲟⲩϣⲉⲛⲧⲁⲧⲥⲓ: ⲛ̀ⲧⲉⲛⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲟⲩⲥ̀ⲭⲏⲙⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">هذان اللذان جمعنا باسميهما الثالوث المحيى لكى نتبع آثارهما ونلبس شكلهما المقدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They gave us the written promises, that were in the Gospel, this is the love of brothers, the perfection of all virtues.</td>
            <td class="coptic">Ⲁⲩϯ ⲉ̀ⲧⲟⲧⲉⲛ ⲛ̀ⲛⲓⲱϣ: ⲉⲧⲥ̀ϧⲏⲟⲩⲧ ϧⲉⲛ ⲡⲓⲉ̀ⲩⲁ̀ⲅⲅⲉⲗⲓⲟⲛ: ⲉ̀ⲧⲉ ⲑⲁⲓ ⲧⲉ ϯⲙⲉⲧⲙⲁⲓⲥⲟⲛ: ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲁ̀ⲣⲉⲧⲏ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">وسلما لنا المواعيد المكتوبة فى الانجيل التى هى المحبة الأخوية كمال جميع الفضائل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">We celebrate in their church, and we complete their remembrance, we glorify the Trinity, by day and by night.</td>
            <td class="coptic">Ⲉⲛⲉⲣϣⲁⲓ ϧⲉⲛ ⲧⲟⲩⲉ̀ⲕⲕⲗⲏⲥⲓⲁ̀: ⲉⲛϫⲱⲕ ⲙ̀ⲡⲟⲩⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲉ̀ⲃⲟⲗ: ⲉⲛϯⲱ̀ⲟⲩ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ: ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ.</td>
            <td class="arabic">نعيد فى كنيستهما ونكمل تذكارهما. ونمجد الثالوث نهارا وليلا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to you O righteous ones, hail to the spirit mantled, hail to our holy Roman fathers, Maximus and Dometius.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲱⲧⲉⲛ ⲱ̀ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲭⲉⲣⲉ ⲛⲓⲡ̅ⲛ̅ⲁ̅ⲧⲟⲫⲟⲣⲟⲥ: ⲭⲉⲣⲉ ⲛⲉⲛⲓⲟϯ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀Ⲣⲱⲙⲉⲟⲥ: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ.</td>
            <td class="arabic">السلام لكما أيها الصديقان السلام للابسى الروح السلام لأبوينا القديسين الروميين مكسيموس ودوماديوس</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, our holy Roman fathers, Maximus and Dometius, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛⲉⲛⲓⲟϯ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀Ⲣⲱⲙⲉⲟⲥ: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اطلبا عنا ياأبوينا القديسين الروميين مكسيموس ودوماديوس ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stMosestheStrongDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Moses the Strong Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Moses the Strong Doxology
        <span class="coptic-caption">Ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ ⲉ̅ⲑ̅ⲩ̅</span>
        <span class="arabic-caption">ذكصولوجية القوي الأنبا موسى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The first holy martyr, who was well perfected, on the mountain of Shiheet, is our holy father Abba Moses.</td>
            <td class="coptic">Ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ⲉ̀ⲧⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲕⲁⲗⲱⲥ: ϧⲉⲛ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲧⲉ Ϣⲓϩⲏⲧ: ⲡⲉ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ.</td>
            <td class="arabic">الشهيد الأول القديس، الذي كمَّل حسناً، في جبل شيهيت، هو أبونا القديس أنبا موسى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He became a fighter, whom the demons fear, he stood upon the rock, as a symbol of the Cross.</td>
            <td class="coptic">Ⲁϥϣⲱⲡⲓ ⲅⲁⲣ ⲛ̀ⲟⲩⲣⲉϥϯ: ⲉϥⲟⲓ ⲛ̀ϩⲟϯ ⲟⲩⲃⲉ ⲛⲓⲇⲉⲙⲱⲛ: ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ϩⲓϫⲉⲛ ϯⲡⲉⲧⲣⲁ: ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ.</td>
            <td class="arabic">لأنه صار مُحارباً، مَخُوفاً ضد الشياطين، ووقف على الصخرة، كمثال الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Through his great patience, in the travails of his sufferings, he wore the crown, of martyrdom.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲧⲉϥⲛⲓϣϯ ⲛ̀ϩⲩⲡⲟⲙⲟⲛⲏ: ⲛⲉⲙ ⲡⲓϧⲓⲥⲓ ⲛ̀ⲧⲉ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ: ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">بعِظَم صبره، وتعب العذابات، لبس الإكليل، الذي للشهادة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He flew in the spirit to the heights, to His places of rest, which the Lord has prepared, for those who love His holy name.</td>
            <td class="coptic">Ⲁϥϩⲱⲗ ⲉ̀ⲡ̀ϭⲓⲥⲓ ϧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲉϥⲙⲁⲛ̀ⲉⲙⲧⲟⲛ: ⲉ̀ⲧⲁϥⲥⲉⲃⲧⲱⲧⲟⲩ ⲛ̀ϫⲉ Ⲡ̀ⲟ̅ⲥ̅: ⲛ̀ⲛⲏⲉⲑⲙⲉⲓ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">ذهب بالروح إلى العلو، إلى مواضع النياح، التي أعدها الرب، لمحبي إسمه القدوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He left for us his holy body, and his holy cave, that we may complete in it, his honored memorial.</td>
            <td class="coptic">Ⲁϥⲥⲱϫⲡ ⲛⲁⲛ ⲙ̀ⲡⲉϥⲥⲱⲙⲁ: ⲛⲉⲙ ⲡⲉϥⲥ̀ⲡⲏⲗⲉⲟⲛ ⲉ̅ⲑ̅ⲩ̅: ⲉⲑⲣⲉⲛϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ: ⲙ̀ⲡⲉϥⲉⲣⲫ̀ⲙⲉⲩⲓ ⲉⲧⲧⲁⲓⲏ̀ⲟⲩⲧ.</td>
            <td class="arabic">وأبقى لنا جسده، ومغارته المقدسة، لنكمل فيها، تذكاره المكرم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Proclaiming and saying, “O God of Abba Moses, and those who were perfected with him, have mercy upon our souls.”</td>
            <td class="coptic">Ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ Ⲫ̀ϯ ⲛ̀ⲁⲃⲃⲁ Ⲙⲱⲥⲏ: ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛⲉⲙⲁϥ: ⲁ̀ⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">إذ نصرخ قائلين، "يا إله أنبا موسى، والذين كملوا معه، إصنع رحمة مع نفوسنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">That we may win the promises, which He has prepared for the saints, who have pleased Him since the beginning, because of their love for Him.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛϣⲁϣⲛⲓ ⲉ̀ⲛⲓⲱϣ: ⲉ̀ⲧⲁϥⲥⲉⲃⲧⲱⲧⲟⲩ ⲛ̀ⲛⲏⲉ̅ⲑ̅ⲩ̅: ⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ ⲓⲥϫⲉⲛ ⲡ̀ⲉ̀ⲛⲉϩ: ⲉⲑⲃⲉ ⲧⲟⲩⲁ̀ⲅⲁⲡⲏ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">ونفوز بالمواعيد، المُعدة للقديسين، الذين أرضوه منذ البدء، لأجل حُبهم فيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O my master and father Abba Moses, and his children the cross-bearers, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲛ̀ⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أُطلب من الرب عنا، يا سيدي الآب أنبا موسى، وأولاده لُباس الصليب، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stSamuelTheConfessorDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Samuel the Confessor Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Samuel the Confessor Doxology
        <span class="coptic-caption">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا صموئيل المعترف</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Hail to Abba Samuel, the great among the saints, who has gained great virtues, in the mountain of Shiheet.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲡⲓⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲁ̀ⲅⲓⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲛ̀ⲁ̀ⲣⲉ̀ⲧⲏ: ϧⲉⲛ ⲡ̀ⲧⲱⲟⲩ ⲛ̀ⲧⲉ Ϣⲓϩⲏⲧ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل العظيم فى القديسين الذى صنع فضائل عظيمة فى جبل شيهات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to our father Abba Samuel, who tore the Tome of Leo, he confirmed his brothers, in the Orthodox faith.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲫⲏⲉ̀ⲧⲁϥⲫⲱϧ ⲙ̀ⲡ̀ⲧⲟⲙⲟⲥ ⲛ̀Ⲗⲉⲱⲛ: ⲟⲩⲟϩ (ⲁϥⲧⲁϫⲣⲟ ⲛ̀ⲛⲉϥⲥ̀ⲛⲏⲟⲩ): ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى مزق طومس )محضر( لاوون وثبت اخوته فى الايمان الأرثوذكسى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Wherefore the impious one, Macius Atrianus sought him, he sent him to the mountain of Qualamon, with four chosen monks.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁϥϭⲟϫⲓ ⲛ̀ⲥⲱϥ: ⲛ̀ϫⲉ Ⲙⲁⲕⲓⲥ Ⲁⲧⲣⲓⲁ̀ⲛⲟⲥ ⲡⲓⲁ̀ⲥⲉⲃⲏⲥ: ⲟⲩⲟϩ ⲁϥⲓ̀ ϩⲁ ⲡ̀ⲧⲱⲟⲩ ⲛ̀Ⲕⲁⲗⲁⲙⲟⲛ: ⲛⲉⲙ ϥ̀ⲧⲟⲟⲩ (ⲇ̅) ⲛ̀ⲥⲱⲧⲡ ⲙ̀ⲙⲟⲛⲁⲭⲟⲥ.</td>
            <td class="arabic">لأجل هذا طارده ماكيس اتريانوس المنافق. فأتى الى جبل القلمونى مع أربعة رهبان مختارين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Abba Samuel the confessor, was very patient, through the pains of the sufferings, and the captivity of Barbarians.</td>
            <td class="coptic">Ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ: ⲛ̀ⲑⲟϥ ⲁϥⲉⲣϩⲩⲡⲟⲙⲟⲛⲓⲛ: ⲉ̀ϫⲉⲛ ⲛⲓϧⲓⲥⲓ ⲛ̀ⲧⲉ ⲡⲓⲇⲓⲱⲅⲙⲟⲥ: ⲛⲉⲙ ϯⲉⲭⲙⲁⲗⲱⲥⲓⲁ ⲛ̀ⲧⲉ ⲛⲓⲂⲁⲣⲃⲁⲣⲟⲥ.</td>
            <td class="arabic">أنبا صموئيل المعترف قد صبر على أتعاب الاضطهاد وسبى البربر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to our father Abba Samuel, who performed wonders and signs, he healed the sick, in the monastery and the city of the Barbarians.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲙⲏⲓⲛⲓ ⲛⲉⲙ ϩⲁⲛϣ̀ⲫⲏⲣⲓ: ⲟⲩⲟϩ ⲁϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲏⲉ̀ⲧϣⲱⲛⲓ: ϧⲉⲛ ⲡⲓⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲏ̀ⲃⲁⲕⲓ ⲛ̀ⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى صنع آيات وعجائب وشفى المرضى فى الدير ومدينة البربر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Hail to our father Abba Samuel, who became a merciful father, and a good teacher, for his children the monks.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: Ⲫⲏⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛ̀ⲓⲱⲧ ⲛ̀ⲛⲁⲏⲧ: ⲛⲉⲙ ⲟⲩⲣⲉϥϯⲥ̀ⲃⲱ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛ̀ⲛⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲁⲭⲟⲥ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى صار أبا رحوما ومعلما صالحا لأبنائه الرهبان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to our father Abba Samuel, who became exceedingly great, in heaven and on earth, before God and men.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲫⲏⲉ̀ⲧⲁϥⲉ̀ⲣⲛⲓϣϯ ⲉ̀ⲙⲁϣⲱ: ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ϧⲁⲧⲉⲛ Ⲫϯ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">السلام لأبينا أنبا صموئيل الذى صار عظيما جدا فى السماء وعلى الأرض عند الله والناس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O our holy father Abba Samuel, and all his children the monks, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲁⲭⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا ياأبانا القديس أنبا صموئيل وأولاده الرهبان ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stJohnKameDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. John Kame Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. John Kame Doxology
        <span class="coptic-caption">Ⲁⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ ϣⲱϣ ⲉ̀ⲃⲟⲗ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا يؤانس كاما</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The incense of your, perfect purity has spread, and your eternal guidance, our father Abba John Kame.</td>
            <td class="coptic">Ⲁⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ ϣⲱϣ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲧⲉ ⲡⲉⲕⲧⲟⲩⲃⲟⲩ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲛⲉⲙ ⲡⲉⲕⲁ̀ⲙⲟⲛⲓ ϣⲁ ⲉ̀ⲃⲟⲗ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ Ⲭⲁⲙⲉ.</td>
            <td class="arabic">فاح بخور طهارتك الكاملة وتمسكك الى التمام. ياأبانا القديس أنبا يؤانس كاما.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The elders have smelled it, and were envious of your chosen zeal, for through your purity, and your spotless virginity.</td>
            <td class="coptic">Ⲁⲛⲓⲥⲟⲫⲟⲥ ϣⲱⲗⲉⲙ ⲉ̀ⲣⲟϥ: ⲁⲩⲭⲟϩ ⲉ̀ⲡⲉⲕⲃⲓⲟⲥ ⲉⲧⲥⲱⲧⲡ: ϫⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲉⲕⲧⲟⲩⲃⲟ: ⲛⲉⲙ ⲧⲉⲕⲡⲁⲣⲑⲉⲛⲓⲁ ⲉⲧⲟⲓ ⲛ̀ⲁⲧⲁϭⲛⲓ.</td>
            <td class="arabic">فاشتمه الحكماء وغارو لسيرتك المختارة. لأن من قبل طهارتك وبتوليتك التى بلا عيب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The Lord grew a vine, and it overshadowed your chamber, as a sign it revealed, your angelic purity.</td>
            <td class="coptic">ⲀⲠⲟ̅ⲥ̅ ⲫⲓⲣⲓ ⲛ̀ⲟⲩⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ: ⲁⲥⲉⲣϧⲏⲓⲃⲓ ⲉ̀ⲡⲉⲕⲙⲁⲛ̀ϣⲉⲗⲉⲧ: ⲟⲩⲙⲏⲓⲛⲓ ⲉϥⲟⲩⲱⲛϩ ⲉϥⲉⲣⲙⲉⲑⲣⲉ: ⲉ̀ⲡⲉⲕⲧⲟⲩⲃⲟ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ.</td>
            <td class="arabic">أزهر الرب كرمةً وظللت على خدرك علامة ظاهرة. تشهد لطهارتك الملائكية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Your honored fame, and that of your celibate wife, the bride of Christ, spread throughout the whole earth.</td>
            <td class="coptic">Ⲡⲉⲕⲉ̀ⲣⲫ̀ⲙⲉⲩⲓ̀ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ: ⲛⲉⲙ ⲧⲉⲕⲥ̀ϩⲓⲙⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲁϥⲥⲱⲣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ.</td>
            <td class="arabic">تذكارك المكرم مع أمرأتك البتول عروس المسيح شاع فى كل العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Therefore those who seek the Lord, came unto you, O priest and shepherd, of the flock of Christ.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲁⲩⲓ̀ ϩⲁⲣⲟⲕ: ⲛ̀ϫⲉ ⲛⲏⲉⲧⲕⲱϯ ⲛ̀ⲥⲁ Ⲡⲟ̅ⲥ̅: ⲱ̀ ⲡⲓⲟⲩⲏⲃ ⲙ̀ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ: ⲛ̀ⲧⲉ ⲡⲓⲟ̀ϩⲓ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">من أجل هذا أتى اليك طالبو الرب أيها الكاهن الراعى قطيع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You taught them monasticism, according to the angelic rites, you lifted up a pleasant sacrifice, before God the Father.</td>
            <td class="coptic">Ⲁⲕϯⲥ̀ⲃⲱ ⲛⲱⲟⲩ ⲛ̀ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲛ̀ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲁⲕⲉ̀ⲛⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲟⲩⲑⲩⲥⲓⲁ̀ ⲉⲥϣⲏⲡ: ⲛⲁϩⲣⲉⲛ Ⲫϯ Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">وعلمتهم الرهبنة كطقس الملائكة. وأصعدتهم ذبيحة مقبولة أمام الله الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">You received honor and crowns, before Christ the King, you rejoiced with the saints, in His kingdom.</td>
            <td class="coptic">Ⲁⲕϭⲓ ⲛ̀ϩⲁⲛⲧⲁⲓⲟ̀ ⲛⲉⲙ ϩⲁⲛⲭ̀ⲗⲟⲙ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡ̀ⲟⲩⲣⲟ Ⲡⲭ̅ⲥ̅: ⲁⲕⲟⲩⲛⲟϥ ⲛⲉⲙ ⲛⲏⲉ̅ⲑ̅ⲩ̅: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">ونلت كرامات وأكاليل من قبل الملك المسيح وفرحت مع جميع القديسين فى ملكوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O pure virgin, our father Abba John Kame, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ Ⲭⲁⲙⲉ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اطلب عنا أيها البتول الطاهر أبونا أنبا يؤانس كاما ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stRoweis_TejiDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Roweis (Teji) Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Roweis (Teji) Doxology
        <span class="coptic-caption">Ⲁⲕⲉⲙⲡ̀ϣⲁ ⲅⲁⲣ ⲁⲗⲏⲑⲱⲥ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا فريج (رويس)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">For you truly were worthy, to be lifted up by the angels, to the heavenly Jerusalem, Abba Roweis the beholder of God.</td>
            <td class="coptic">Ⲁⲕⲉⲙⲡ̀ϣⲁ ⲅⲁⲣ ⲁⲗⲏⲑⲱⲥ: ⲉ̀ⲧⲁⲩⲱ̀ⲗⲓ ⲙ̀ⲙⲟⲕ ⲛ̀ϫⲉ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲁⲃⲃⲁ Ⲧⲉϫⲓ ⲑⲉⲟⲫⲁⲛⲓⲟⲥ.</td>
            <td class="arabic">لأنك مستحق بالحقيقة يامن حملتك الملائكة داخل أورشليم السمائية. ياأنبا فريج ناظر الاله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Because of your many pains, you made to your body, so that your soul may be, an altar for the Holy Spirit.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲡ̀ⲁ̀ϣⲁⲓ ⲛ̀ⲧⲉⲛⲓϧⲓⲥⲓ: ⲉ̀ⲧⲁⲕⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲡⲉⲕⲥⲱⲙⲁ: ϣⲁⲛ̀ⲧⲉⲥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲧⲉⲕⲯⲩⲭⲏ: ⲛ̀ⲟⲩⲉⲣⲫⲉⲓ ⲛ̀ⲧⲉ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">لأجل كثرة أتعابك التى قاسيتها فى جسدك حتى صارت نفسك هيكلا للروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Your holy name has spread, throughout the lands of Egypt, because of the signs and wonders, the Lord performed through you.</td>
            <td class="coptic">Ⲥⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ ⲉ̅ⲑ̅ⲩ̅: ϧⲉⲛ ⲛⲓⲑⲱϣ ⲛ̀ⲧⲉ ⲛⲓⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ: ⲉⲑⲃⲉ ⲛⲓⲙⲏⲓⲛⲓ ⲛⲉⲙ ϩⲁⲛϣ̀ⲫⲏⲣⲓ: ⲉ̀ⲧⲉ Ⲫϯ ⲁⲓⲧⲟⲩ ϩⲓⲧⲟⲧⲕ.</td>
            <td class="arabic">ذاع اسمك الطاهر فى حدود اقليم مصر من أجل الآيات والعجائب التى أجراها الله على يديك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Your holy footprints, have witnessed your wonders to us, which you performed in the land of Egypt, through the power of Christ.</td>
            <td class="coptic">Ⲧⲁⲧⲥⲓ ⲛ̀ⲛⲉⲕϭⲁⲗⲁⲩϫ ⲉ̅ⲑ̅ⲩ̅: ⲁⲥⲉⲣⲙⲉⲑⲣⲉ ⲛⲁⲛ ϧⲉⲛ ⲛⲉⲕϣ̀ⲫⲏⲣⲓ: ⲉ̀ⲧⲁⲕⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲭⲏⲙⲓ: ϧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">خطوات قدميك المقدسة تشهد لنا بعجائبك التى أجريتها فى اقليم مصر بقوة المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">For the light of your body, has enlightened our bodies, and your holy soul, prays on behalf of our souls.</td>
            <td class="coptic">Ⲟⲩⲱⲓⲛⲓ ⲅⲁⲣ ⲛ̀ⲧⲉ ⲡⲉⲕⲥⲱⲙⲁ: ϣⲁϥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ ⲛ̀ϫⲉ ⲛⲉⲛⲥⲱⲙⲁ: ⲟⲩⲟϩ ⲧⲉⲕⲩⲭⲏ ⲉ̅ⲑ̅ⲩ̅: ⲉⲥⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲩⲭⲏ.</td>
            <td class="arabic">لأن نور جسدك يضىء أجسادنا ونفسك الطاهرة تطلب عن أنفسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Your life is a wonder, and your fighting is great, your glory was greatly exalted, in the midst of the ascetics.</td>
            <td class="coptic">Ⲡⲉⲕⲃⲓⲟⲥ ⲟⲩϣ̀ⲫⲏⲣⲓ ⲧⲉ: ⲡⲉⲕⲁ̀ⲅⲱⲛ ⲟⲩⲛⲓϣϯ ⲡⲉ ⲡⲉⲕⲱ̀ⲟⲩ: ϥ̀ϭⲓⲥⲓ ⲉ̀ⲙⲁϣⲱ: ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲛ̀ⲛⲓⲁ̀ⲥⲕⲏⲧⲏⲥ.</td>
            <td class="arabic">سيرة حياتك عجيبة وجهادك عظيم ومجدك مرتفع جدا فى وسط النساك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Blessed are you indeed, O our righteous holy father, Abba Roweis the Beholder of God, the Beloved of Christ.</td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ Ⲧⲉϫⲓ ⲑⲉⲟⲫⲁⲛⲓⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">طوباك بالحقيقة ياأبانا القديس البار أنبا فريج ناظر الاله حبيب المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O our righteous holy father, Abba Roweis the beholder of God, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲟⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲅⲱⲛ: ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ Ⲧⲉϫⲓ ⲑⲉⲟⲫⲁⲛⲓⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب عنا ياأبانا القديس أنبا فريج ناظر الاله ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stParsoumTheNakedDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Parsoum the Naked Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Parsoum the Naked Doxology
        <span class="coptic-caption">Ⲙⲁⲣⲉⲛⲑⲱⲟⲩϯ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا برسوم العريان</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us gather O my beloved, with pleasure to honor, this righteous man, our father Abba Parsoum.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲑⲱⲟⲩϯ ⲱ̀ ⲛⲁⲙⲉⲛⲣⲁϯ: ⲛ̀ⲧⲉⲛⲧⲁⲓⲟ ϧⲉⲛ ⲟⲩϯⲙⲁϯ: ⲙ̀ⲡⲁⲓⲣⲱⲙⲓ ⲛ̀ⲇⲓⲕⲉⲟⲥ: ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ.</td>
            <td class="arabic">فلنجتمع ياأحبائى لنكرم بسرور هذا الرجل البار أبانا القديس أنبا برسوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">This one who forsook the world, and its painful life, with great patience, loved Christ his Lord.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲧⲁϥϩⲓⲡ̀ϩⲟ ⲙ̀ⲡⲁⲓⲕⲟⲥⲙⲟⲥ: ⲛⲉⲙ ⲡⲉϥⲃⲓⲟⲥ ⲉⲑⲙⲉϩ ⲛ̀ϧⲓⲥⲓ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲩⲡⲟⲙⲟⲛⲏ: ⲁϥⲙⲉⲓ ⲙ̀Ⲡⲭ̅ⲥ̅ ⲡⲉϥⲟ̅ⲥ̅.</td>
            <td class="arabic">هذا الذى رفض العالم وحياته المملوءة تعبا بعظم صبر وأحب المسيح ربه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">His fame has spread, onto all the world, because of his high virtues, and his angelic purity.</td>
            <td class="coptic">Ⲁϥⲥⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲡⲉϥⲣⲁⲛ: ϧⲉⲛ ϯⲟⲓⲕⲟⲙⲉⲛⲏ ⲧⲏⲣⲥ: ⲉⲑⲃⲉ ⲛⲉϥⲉ̀ⲣⲉⲧⲏ ⲉⲧϭⲟⲥⲓ: ⲛⲉⲙ ⲡⲉϥⲧⲟⲩⲃⲟ ⲛ̀ⲁ̀ⲅⲅⲉⲗⲓⲕⲟⲛ.</td>
            <td class="arabic">وذاع اسمه فى المسكونة كلها من أجل فضائله العالية وطهارته الملائكية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He comforted everyone, who came to him from everywhere, through perfect love, and long suffering.</td>
            <td class="coptic">Ⲛⲁϥϯⲛⲟⲙϯ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲉⲑⲛⲏⲟⲩ ϩⲁⲣⲟϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ϧⲉⲛ ⲟⲩⲁ̀ⲅⲁⲡⲏ ⲉⲥϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲛⲉⲙ ⲟⲩⲙⲉⲧⲣⲉϥⲱ̀ⲟⲩⲛ̀ϩⲏⲧ.</td>
            <td class="arabic">وكان يقوى كل من يأتى اليه من كل مكان بمحبة كاملة وطول أناة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Blessed are you indeed, O our holy father Abba Parsoum, for you fulfilled the words, of our Good Savior.</td>
            <td class="coptic">Ⲱⲟⲩⲛⲓⲁⲧⲕ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲉⲛⲓⲱⲧ ⲉ̅ⲑ̅ⲩ̅ ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ: ϫⲉ ⲁⲕϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲥⲁϫⲓ: ⲛ̀ⲧⲉ ⲡⲉⲛⲤⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">طوباك أنت بالحقيقة ياأبانا القديس أنبا برسوم لأنك أكملت أقوال مخلصنا الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O my master the ascetic father, Abba Parsoum the naked, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲱⲧ ⲛ̀ⲁ̀ⲥⲕⲏⲧⲏⲥ: ⲁⲃⲃⲁ Ⲡⲁⲣⲥⲱⲙⲁ ⲡⲓⲣⲉϥⲃⲏϣ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا ياسيدى الآب الناسك أنبا برسوم العريان ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stTaklaHaymanoutDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Takla Haymanout Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Takla Haymanout Doxology
        <span class="coptic-caption">ⲠⲓⲠ̀ⲛⲉⲩⲙⲁ ⲙ̀Ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ</span>
        <span class="arabic-caption">ذكصولوجية الأنبا تكلا هيمانوت</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The Spirit of comfort, came down from heaven, upon the blessed father, Saint Takla Haymanout.</td>
            <td class="coptic">ⲠⲓⲠ̀ⲛⲉⲩⲙⲁ ⲙ̀Ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲉ̀ϫⲉⲛ ⲫ̀ⲓⲱⲧ ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ: ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲑⲉⲕⲗⲁ Ϩⲩⲙⲁⲛⲟⲥ.</td>
            <td class="arabic">الروح المعزى لما نزل من السماء على الطوباوى القديس تكلا هيمانوت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">On the third day, of his blessed birth, he proclaimed "One is the Father, the Son and the Holy Spirit."</td>
            <td class="coptic">Ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ϣⲟⲙⲧ (ⲅ̅): ⲛ̀ⲧⲉ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲉϥⲱϣ ⲉ̀ⲃⲟⲗ ϫⲉ ⲟⲩⲁⲓ ⲡⲉ: Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ ⲡ̀Ϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">فى اليوم الثالث لميلاده المبارك. صرخ قائلا واحد هو الآب والابن والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">And from his childhood, he was filled with the Holy Spirit, and the angels of heaven, overshadowed him.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲓⲥϫⲉⲛ ⲧⲉϥⲙⲉⲧⲁ̀ⲗⲟⲩ: ⲁϥⲙⲟϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲟⲩⲟϩ ⲛⲓⲁ̀ⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲛⲁⲩ ⲉⲣϧⲏⲓⲃⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ.</td>
            <td class="arabic">ومنذ طفوليته امتلأ من الروح القدس وملائكة السماء كانت تظلل عليه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Michael the head of the heavenly, was always with him, as was said by, David in the Psalms.</td>
            <td class="coptic">Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉϥⲭⲏ ⲛⲉⲙⲁϥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲕⲁⲧⲁ ⲫ̀ⲣ̀ⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲡⲓⲯⲁⲗⲙⲟⲥ.</td>
            <td class="arabic">ميخائيل رئيس السمائيين كائن معه كل حين. كما قال داود فى المزمور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Christ was revealed to you, and He gave you the authority, to loosen and to bind, like the Apostles.</td>
            <td class="coptic">ⲀⲠⲭ̅ⲥ̅ ⲟⲩⲱⲛϩ ⲛⲁⲕ ⲉ̀ⲃⲟⲗ: ⲟⲩⲟϩ ⲁϥϯ ⲛⲁⲕ ⲙ̀ⲡⲓⲉ̀ⲣϣⲓϣⲓ: ⲡⲓⲥⲟⲛϩ ⲛⲉⲙ ⲡⲓⲃⲱⲗ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">والمسيح ظهر لك وأعطاك سلطان الربط والحل كمثل رسله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You became an apostle, chosen by Jesus Christ, the Patriarch of the Ethiopians, the father of the monks.</td>
            <td class="coptic">Ⲁⲕϣⲱⲡⲓ ⲛ̀ⲟⲩⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϥ̀ⲥⲱⲧⲡ ⲛ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ Ⲡⲭ̅ⲥ̅: ⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲛ̀ⲛⲓⲈ̀ⲑⲁϥϣ: ⲫ̀ⲓⲱⲧ ⲛ̀ⲧⲉ ⲛⲓⲙⲟⲛⲁⲭⲟⲥ.</td>
            <td class="arabic">وصرت رسولا مختارا ليسوع المسيح رئيس كهنة للأحباش وأبا للرهبان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Your name became sweet, on our lips and the Ethiopians, O God of Saint Takla, the Ethiopian have pity upon us.</td>
            <td class="coptic">Ϥ̀ϩⲟⲗϫ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ ⲁϥϣⲱⲡⲓ: ϧⲉⲛ ⲛⲉⲛⲣⲱⲛ ⲛⲉⲙ ⲛⲓⲣⲉⲙⲈⲑⲁⲩϣ: ϫⲉ Ⲫϯ ⲙ̀ⲡⲓⲁ̀ⲅⲓⲟⲥ: Ⲑⲉⲕⲗⲁ Ϩⲩⲙⲁⲛⲟⲥ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
            <td class="arabic">صار اسمك حلو فى أفواهنا وأفواه الأحباش بقولنا يااله القديس تكلا هيمانوت تراءف علينا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O Ethiopian Apostle, Saint Takla Haymanout, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲛⲓⲣⲉⲙⲈⲑⲁⲩϣ: ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲑⲉⲕⲗⲁ Ϩⲩⲙⲁⲛⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا يارسول الأحباش القديس تكلا هيمانوت ليغفر..</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
abrahamIsaacAndJacobDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Abraham Isaac and Jacob Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Abraham Isaac and Jacob Doxology
        <span class="coptic-caption">Ϩⲱⲥ ⲉ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ</span>
        <span class="arabic-caption">ذكصولوجية إبراهيم وإسحق ويعقوب</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Sing unto the Lord a new song, with myriads of psalmodies, for the remembrance of our masters, and fathers Abraham Isaac and Jacob.</td>
            <td class="coptic">Ϩⲱⲥ ⲉ̀Ⲡⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ϧⲉⲛ ϩⲁⲛⲁⲗⲙⲟⲥ ⲑ̀ⲃⲁ ⲛ̀ⲕⲱⲃ: ⲡⲓⲉ̀ⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">سبحوا الرب تسبحة جديدة بربوات مزامير بتذكار سادتي الآباء ابراهيم وإسحق ويعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Grant us O Lord rest, in the bosom of our righteous fathers, Abraham Isaac and Jacob, in Paradise with their prayers.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲁⲛ Ⲡⲟ̅ⲥ̅ ⲛ̀ⲟⲩⲭ̀ⲃⲟⲃ: ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀ⲛⲉⲛⲓⲟϯ ⲛ̀ⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ: ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛⲉⲙ ⲛⲟⲩⲕⲉⲡ̀ⲣⲟⲥ.</td>
            <td class="arabic">أعطنا يا رب راحة في أحضان آبائنا القديسين ابراهيم وإسحق ويعقوب في الفردوس بصلواتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Do not forget the covenant, which You have made with Abraham, and guarded him with Isaac, and raised him with Jacob.</td>
            <td class="coptic">Ⲙⲡⲉⲣⲉⲣⲡ̀ⲱⲃϣ ⲛ̀ϯⲇⲓⲁ̀ⲑⲏⲕⲏ: ⲑⲏⲉ̀ⲧⲁⲕⲥⲉⲙⲛⲏⲧⲥ ⲛⲉⲙ Ⲁⲃⲣⲁⲁⲙ: ⲟⲩⲟϩ ⲁⲕⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟϥ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ: ⲟⲩⲟϩ ⲁⲕⲧⲁϩⲟϥ ⲉ̀ⲣⲁⲧⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">لا تنقض العهد الذي قررته مع إبراهيم وحفظته لاسحق وأقمته مع يعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Bless the Lord O people, the tribes and all kinds of tongues, in the feast of the great and righteous, Abraham Isaac and Jacob.</td>
            <td class="coptic">Ⲥⲙⲟⲩ ⲉ̀Ⲡⲟ̅ⲥ̅ ⲱ̀ ⲛⲓⲗⲁⲟⲥ: ⲛⲓⲫⲩⲗⲏ ⲛⲉⲙ ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲗⲁⲥ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀ⲧⲉ ⲛⲓⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">باركوا الرب يا أيها الشعوب والقبائل ولغات الألسن في عيد العظماء في الصديقين إبراهيم واسحق ويعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Exalt the saints greatly, with the righteous and the just, grant us O God an inheritance, with Abraham Isaac and Jacob.</td>
            <td class="coptic">Ⲁⲣⲉⲧⲉⲛϭⲓⲥⲓ ⲉ̀ⲙⲁϣⲱ ⲛⲓⲁ̀ⲅⲓⲟⲥ: ⲛⲉⲙ ⲛⲓⲏ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲙⲟⲓ ⲛⲁⲛ Ⲡⲟ̅ⲥ̅ ⲛ̀ⲟⲩⲙⲉⲣⲟⲥ: ⲛⲉⲙ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ.</td>
            <td class="arabic">تعاليتم جداً أيها القديسين والأبرار والصديقين. أعطنا يارب نصبياً مع إبراهيم وإسحق ويعقوب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O my masters and righteous fathers, Abraham Isaac and Jacob, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲛⲁⲟ̅ⲥ̅ ⲛ̀ⲓⲟϯ ⲛ̀ⲇⲓⲕⲉⲟⲥ: Ⲁⲃⲣⲁⲁⲙ Ⲓⲥⲁⲁⲕ Ⲓⲁⲕⲱⲃ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلبوا من الرب عنا يا سادتي الآباء الصديقين إبراهيم وإسحق ويعقوب ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stSeverus_PatriarchOfAntiochDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Severus (Patriarch of Antioch) Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Severus (Patriarch of Antioch) Doxology
        <span class="coptic-caption">Ⲡⲓⲕⲉⲃⲉⲣⲛⲓⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ</span>
        <span class="arabic-caption">ذكصولوجية الانبا ساويرس بطريرك أنطاكيا</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The confirmed leaders, the great defenders, the winners of the fight, the bright lamps.</td>
            <td class="coptic">Ⲡⲓⲕⲉⲃⲉⲣⲛⲓⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ: ⲡⲓⲣⲉϥⲙⲓϣⲓ ⲛ̀ⲕⲁⲗⲱⲥ: ⲡⲓⲣⲉϥϭ̀ⲣⲟ ϧⲉⲛ ⲛⲓⲃⲱⲧⲥ: ⲡⲓϧⲏⲃⲥ ⲉ̀ⲧⲁϥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">المدبر الثابت المحارب جيداً. الغالب فى الحروب السراج المنير.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The pillar of Orthodoxy, is Abba Severus the patriarch, the teacher of the rational, flock of Christ.</td>
            <td class="coptic">Ⲡⲓⲕⲩⲣⲓⲝ ⲛ̀ⲧⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: ⲡⲉ Ⲥⲉⲩⲏⲣⲟⲥ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲓⲣⲉϥϯⲥ̀ⲃⲱ ⲛ̀ⲧⲉ ⲡⲓⲟ̀ϩⲓ: ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">المنادى بالارثوذكسية هو ساويرس البطريرك. معلم القطيع الناطق الذى للمسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Your upright teaching, defeated the heretics, like the two edged sword, through the power of Christ.</td>
            <td class="coptic">Ⲁⲛⲉⲕⲇⲟⲅⲙⲁ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲙⲓϣⲓ ⲙ̀ⲡ̀ϩⲏⲧ ⲛ̀ⲛⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲥⲏϥⲓ ⲛ̀ⲣⲟⲥ̀ⲛⲁⲩ (ⲃ̅): ϩⲓⲧⲉⲛ ⲧ̀ϫⲟⲙ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ.</td>
            <td class="arabic">اعتقاداتك المستقيمة ضربت فى قلوب الهراطقة مثل سيف ذى حدين بقوة الثالوث.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Likewise we magnify You, with David the psalmist, You are the priest forever, according to the order of Melchizedek.</td>
            <td class="coptic">Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉ̀ⲛⲉϩ: ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
            <td class="arabic">لذلك ترفعك مع المرتل داود قائلين أنت هو الكاهن إلى الأبد على طقس ملشيصاداق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Every knee bows to the Lord, every tongue blesses Him, the glory of God has spread, and filled the whole world.</td>
            <td class="coptic">Ⲁⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲕⲱⲗϫ ⲙ̀Ⲡⲟ̅ⲥ̅: ⲁ̀ⲗⲁⲥ ⲛⲓⲃⲉⲛ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ: ⲁ̀ⲡ̀ⲱ̀ⲟⲩ ⲙ̀Ⲫϯ ⲟⲩⲱϣⲥ ⲉ̀ⲃⲟⲗ: ⲁϥⲙⲟϩ ⲙ̀ⲡ̀ϩⲟ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">كل ركبة جثت للرب. وكل لسان سبحه ومجدُ الله اتسع وملأ وجه للمسكونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O teachers of the Orthodoxy, Severus and Dioscorus, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡ̀ⲥⲁϧ ⲛ̀ⲧⲉ ϯⲟⲣⲑⲟⲇⲟⲝⲓⲁ: Ⲥⲉⲩⲏⲣⲟⲥ ⲛⲉⲙ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">اطلبا عنا يامعلمى الأرثوذكسية ساويرس وديسقورس ليغفر...</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
stAbraam_BishopOfFayoumDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="St. Abraam (Bishop of Fayoum) Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">St. Abraam (Bishop of Fayoum) Doxology
        <span class="coptic-caption">Ⲡⲓϧⲏⲃⲥ ⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ</span>
        <span class="arabic-caption">ذكصولوجية الانبا أبرآم - اسقف الفيوم</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The shining lamp, in Fayoum and all Egypt, because of his signs and miracles, and his love for Christ.</td>
            <td class="coptic">Ⲡⲓϧⲏⲃⲥ ⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ: ϧⲉⲛ Ⲫⲓⲟⲙ ⲛⲉⲙ Ⲭⲏⲙⲓ ⲧⲏⲣⲥ: ⲉⲑⲃⲉ ⲛⲉϥϣ̀ⲫⲏⲣⲓ ⲛⲉⲙ ⲛⲉϥⲙⲏⲛⲓ: ⲛⲉⲙ ⲡⲉϥⲙⲉⲓ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">المصباح المنير، في الفيوم وكل مصر، من أجل عجائبه وآياته، ومحبته للمسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He who has the expensive crown, the friend of the hermits, the righteous and the prophets, who follow our Master.</td>
            <td class="coptic">Ⲫⲁ ⲡⲓⲭ̀ⲗⲟⲙ ⲙ̀ⲙⲁⲣⲅⲁⲣⲓⲧⲏⲥ: ⲡⲓϣ̀ⲫⲏⲣ ⲛ̀ⲛⲓⲁ̀ⲛⲁⲭⲱⲣⲓⲧⲏⲥ: ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲫⲏⲉ̀ⲧⲁϥⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲡⲉⲛⲇⲉⲥⲡⲟⲧⲏⲥ.</td>
            <td class="arabic">ذو الإكليل الجوهر، صديق السواح، والأبرار والأنبياء، الذي تبع سيدنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He is Abba Abraam, bishop of Fayoum, the true shepherd, the teacher of virtues.</td>
            <td class="coptic">Ⲛ̀ⲑⲟϥ ⲡⲉ ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ: ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲧⲉ Ⲫⲓⲟⲙ: ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲡⲓⲥⲁϧ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲣⲉⲧⲏ.</td>
            <td class="arabic">هو الأنبا أبرآم، أسقف الفيوم، الراعي الحقيقي، معلم الفضائل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">David taught with truth, saying “Blessed are those, who care for the weak and the poor, God saves them.”</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁϥⲧⲁⲙⲟⲛ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ϫⲉ ⲱ̀ⲟⲩⲛⲓⲁⲧϥ ⲙ̀ⲫⲏⲉⲑⲛⲁⲕⲁϯ: ⲉ̀ϫⲉⲛ ⲟⲩϫⲱⲃ ⲛⲉⲙ ⲟⲩϩⲏⲕⲓ: ⲟⲩⲟϩ ⲉϥⲉ̀ⲛⲁϩⲙⲉϥ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ.</td>
            <td class="arabic">داود أعلمنا بالحقيقة، أنه طوبى للذي يتفهَّم، في أمر المسكين والفقير، والله يخلصه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Like our father Abraham, the father of Isaac and Jacob, you loved mercy, and completed the commandments.</td>
            <td class="coptic">Ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ: ⲫ̀ⲓⲱⲧ ⲛ̀Ⲓ̀ⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ: ⲁⲕⲙⲉⲛⲣⲉ ϯⲙⲉⲑⲛⲁⲏⲧ: ⲟⲩⲟϩ ⲁⲕϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲉⲛⲧⲟⲗⲏ.</td>
            <td class="arabic">مثل أبونا أبرآم، أبو إسحق ويعقوب، أنت أحببت الرحمة، وأكملت الوصايا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">You witnessed the truth, and you ate with the poor, with great humility, you loved your sheep.</td>
            <td class="coptic">Ϣⲁⲕⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ϯⲙⲉⲑⲙⲏⲓ: ϣⲁⲕⲟⲩⲱⲙ ⲛⲉⲙ ⲛⲓϩⲏⲕⲓ: ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲑⲉⲃⲓⲟ: ⲁⲕⲙⲉⲣⲉ ⲛⲉⲕⲉ̀ⲥⲱⲟⲩ.</td>
            <td class="arabic">تعودت الشهادة للحق، وتعودت الأكل مع الفقراء، بإتضاع عظيم، أحببت رعيتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">The lovers of worldly things, sought for new buildings, but you built in heaven, many heavenly buildings.</td>
            <td class="coptic">Ⲛⲏⲉⲑⲙⲉⲓ ⲛ̀ⲛⲁ ⲡ̀ⲕⲁϩⲓ: ⲁⲩⲕⲱϯ ⲛ̀ⲥⲁ ϩⲁⲛϫⲓⲛⲕⲱⲧ ⲙ̀ⲃⲉⲣⲓ: ⲁⲗⲗⲁ ⲁⲕⲕⲱⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛ̀ⲛⲓϫⲓⲛⲕⲱⲧ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
            <td class="arabic">محبو الأرضيات، بحثوا عن أبنية جديدة، لكنك بنيت في السماء، أبنية سمائية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">How many are your miracles, you healed the sick, you prophesied great things, and you cast out demons.</td>
            <td class="coptic">Ⲟⲩⲏⲣ ⲛⲉ ⲛⲉⲕϣ̀ⲫⲏⲣⲓ: ⲁⲕⲧⲁⲗϭⲟ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ: ⲁⲕⲉⲣⲡ̀ⲣⲟⲥⲫⲏⲧⲉⲩⲓⲛ ⲛ̀ⲛⲓϣ̀ⲫⲏⲣⲓ: ⲛⲓⲇⲉⲙⲱⲛ ⲁⲕϩⲓⲧⲟⲩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">كم هي عجائبك، شفيت المرضى، تنبأت بالعظائم، وأخرجت الشياطين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">You became a type for us, by your pure ways, by love and mercy, and testimony of the truth.</td>
            <td class="coptic">Ⲁⲕϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲧⲩⲡⲟⲥ: ϧⲉⲛ ⲡⲉⲕϫⲓⲛⲙⲟϣⲓ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ: ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ ⲛⲉⲙ ϯⲙⲉⲑⲛⲁⲏⲧ: ⲛⲉⲙ ϯⲙⲉⲧⲙⲉⲑⲣⲉ ⲛ̀ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">صرت لنا قدوة، بسيرتك الطاهرة، بالمحبة والرحمة، والشهادة للحق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Pray to the Lord on our behalf, our holy father Abba Abraam, the Bishop of Fayoum, that He may forgive us our sins.</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲁⲃⲣⲁⲁⲙ: ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲧⲉ Ⲫⲓⲟⲙ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أطلب من الرب عنا، يا أبانا القديس الأنبا أبرآم، أسقف الفيوم، ليغفر لنا خطايانا.</td>
        </tr>
        </tbody>
</table>`;
 return html;
},



// Conclusion
doxologiesConclusion(tableNumber) {
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
                    faithfuladvocate, before our Lord Jesus Christ, that he may forgive us our sins. ${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>`;
return html;
},
};


// Helper function to clean feast names
function cleanDoxologyName(functionName) {
    // Convert first letter to lowercase and keep the rest unchanged
    return functionName
        .replace(/[\s.,()]+/g, "")  // Remove spaces, punctuation, parentheses
        .replace(/[-]/g, "")        // Remove any hyphens or special characters
        .replace(/\s/g, "")         // Remove any remaining whitespace
        .trim();                    // Trim any leading/trailing spaces
}


// Main function to retrieve the HTML by feast name
function getDoxologyHtml(functionName, tableNumber) {
    const cleanedDoxologyName = cleanDoxologyName(functionName);
    const doxologyFunction = doxologyFunctions[cleanedDoxologyName];  // Look up the function dynamically
    
    if (doxologyFunction) {
        return doxologyFunction(tableNumber);  // Call the associated function
    } else {
        return `No function found for: ${functionName}`;
    }
}

const doxologyFunctionNames = [
    { name: "Introduction to the Doxologies", functions: ["doxologiesInro"], visible: false, toggle: false },
    { name: "St Mary Doxology for Vespers", functions: ["vespersDoxology"], visible: false, toggle: false },
    { name: "St Mary Doxology for Midnight Praises", functions: ["midnightDoxology"], visible: true, toggle: false },
    { name: "St Mary Doxology for Matins", functions: ["matinsDoxology"], visible: false , toggle: false},
    { name: "Archangel Michael", functions: ["archangelMichaelDoxology"], visible: false , toggle: true},
    { name: "Archangel Gabriel", functions: ["archangelGabrielDoxology"], visible: false , toggle: true},
    { name: "Archangel Raphael", functions: ["archangelRaphaelDoxology"], visible: false , toggle: true},
    { name: "Archangel Suriel", functions: ["archangelSurielDoxology"], visible: false , toggle: true},
    { name: "The Four Incorporeal Creatures", functions: ["fourIncorporealCreaturesDoxologies"], visible: false , toggle: true},
    { name: "The Twenty Four Presbyters", functions: ["twentyFourPresbytersDoxology"], visible: false , toggle: true},
    { name: "One Hundred And Forty Four Thousand", functions: ["oneHundredAndFortyFourThousandDoxology"], visible: false , toggle: true},
    { name: "St. John The Baptist", functions: ["stJohntheBaptistFirstDoxology", "stJohntheBaptistSecondDoxology"], visible: false , toggle: true},
    { name: "Heavenly", functions: ["heavenlyDoxology"], visible: false , toggle: true},
    { name: "Apostles", functions: ["apostlesDoxology", "secondApostlesDoxology"], visible: false , toggle: true},
    { name: "St. Mark the Evangelist", functions: ["stMarkDoxology", "secondStMarkDoxology"], visible: false , toggle: true},
    { name: "St. Peter & St. Paul", functions: ["stPeterStPaulDoxology"], visible: false , toggle: true},
    { name: "St. John The Evangelist", functions: ["stJohnTheEvangelistDoxology"], visible: false , toggle: true},
    { name: "Any Apostle", functions: ["anyApostleDoxology"], visible: false , toggle: true},
    { name: "St. George, Prince of the Martyrs", functions: ["stGeorgeDoxology"], visible: false , toggle: true},
    { name: "St. Stephen the Archdeacon", functions: ["stStephentheFirstMartyrDoxology"], visible: false , toggle: true},
    { name: "St. Philopatir Mercorios", functions: ["stPhilopatirMercoriosDoxology"], visible: false , toggle: true},
    { name: "St. Mina the Wonder Worker", functions: ["stMinaDoxology"], visible: false , toggle: true},
    { name: "St. Abanoub of Nehis", functions: ["stAbanoubofNehisDoxology"], visible: false , toggle: true},
    { name: "St. Theodorus El-Shotbe", functions: ["stTheodorusElShotbeDoxology"], visible: false , toggle: true},
    { name: "St. Theodorus El-Mashriqi", functions: ["stTheodorusElMashriqiDoxology"], visible: false , toggle: true},
    { name: "Sts. Sergius & Bacchus", functions: ["stsSergiusAndBacchusDoxology"], visible: false , toggle: true},
    { name: "Sts. Cosmas and Damian", functions: ["stsCosmasAndDemian"], visible: false , toggle: true},
    { name: "St. Sarapamon The Bishop of Niku", functions: ["stSarapamonTheBishopofNikuDoxology"], visible: false , toggle: true},
    { name: "Sts. Abakir and John", functions: ["stsAbakirAndJohnDoxology"], visible: false , toggle: true},
    { name: "St. Victor", functions: ["stVictorDoxology"], visible: false , toggle: true},
    { name: "All the Martyrs", functions: ["allTheMartyrsDoxology"], visible: false , toggle: true},
    { name: "St. Demiana", functions: ["stDemianaDoxology"], visible: false , toggle: true},
    { name: "Sts. Barbara and Juliana", functions: ["stsBerbaraAndJulianaDoxology"], visible: false , toggle: true},
    { name: "St. Marina the Martyr", functions: ["stMarinastMarinatheMartyrDoxologyDoxology"], visible: false , toggle: true},
    { name: "Any Female Martyr", functions: ["anyFemaleMartyrDoxology"], visible: false , toggle: true},

    { name: "St. Anthony the Great", functions: ["stAnthonyDoxology","stAnthonyAndStPaulDoxology"], visible: false , toggle: true},
    { name: "St. Athanasius the Apostolic", functions: ["stAthanasiusDoxology"], visible: false , toggle: true},
    { name: "St. Joseph the Carpentar", functions: ["stJosephtheCarpenterDoxology"], visible: false , toggle: true},
    { name: "Pope Kyrillos VI", functions: ["popeKyrillosVIDoxology"], visible: false , toggle: true},
    { name: "St. Arsenius", functions: ["stArseniusDoxology"], visible: false , toggle: true},
    { name: "St. Paul The First Hermit", functions: ["stPaultheHermitDoxology","stAnthonyAndStPaulDoxology"], visible: false , toggle: true},
    { name: "St. Macarius The Great", functions: ["stMacariustheGreatDoxology"], visible: false , toggle: true},
    { name: "St. Macarius The Alexandrian", functions: ["stMacariustheAlexandrianDoxology"], visible: false , toggle: true},
    { name: "St. Macarius Bishop of Edkow", functions: ["stMacariusTheBishopDoxology"], visible: false , toggle: true},
    { name: "St. Shenouda the Archimandrite", functions: ["stShenoudaTheArchimandriteDoxology"], visible: false , toggle: true},
    { name: "St. John the Short", functions: ["stJohnTheShortDoxology"], visible: false , toggle: true},
    { name: "St. Paul of Tamouh", functions: ["stsPishoyAndPaulofTammohDoxology"], visible: false , toggle: true},
    { name: "St. Pachomius and St. Theodore", functions: ["stPachomiusAndTheodoreDoxology"], visible: false , toggle: true},
    { name: "St. Maximus and St. Domatius", functions: ["stsMaximusAndDometiusDoxology"], visible: false , toggle: true},
    { name: "St. Moses the Strong", functions: ["stMosestheStrongDoxology"], visible: false , toggle: true},
    { name: "St. Samuel the Confessor", functions: ["stSamuelTheConfessorDoxology"], visible: false , toggle: true},
    { name: "St. John Kama", functions: ["stJohnKameDoxology"], visible: false , toggle: true},
    { name: "St. Freig (Abba Tegi, Anba Roweiss)", functions: ["stRoweis_TejiDoxology"], visible: false , toggle: true},
    { name: "St. Barsoma the Naked", functions: ["stParsoumTheNakedDoxology"], visible: false , toggle: true},
    { name: "St. Takla Haymanot", functions: ["stTaklaHaymanoutDoxology"], visible: false , toggle: true},
    { name: "The Patriarch Abraham, Isaac, and Jacob", functions: ["abrahamIsaacAndJacobDoxology"], visible: false , toggle: true},
    { name: "St. Severus of Antioch", functions: ["stSeverus_PatriarchOfAntiochDoxology"], visible: false , toggle: true},
    { name: "St. Abraam Bishop of Fayyoum", functions: ["stAbraam_BishopOfFayoumDoxology"], visible: false , toggle: true},
    { name: "Doxologies Conclusion", functions: ["doxologiesConclusion"], visible: true , toggle: false}
];


export {
    getDoxologyHtml,
    doxologyFunctionNames,
};

/*

Nayrooz
Feast of the Cross
Kiahk 6 replaces St Mary
Gabriel Kiahk *** not there (third instead)
Nativity Paramon
Nativity
Circumcision
Theophany Paramon
Theophany
Wedding at Cana
Jonah's Fast
Presentation of the Lord in the temple
Lentekdays ***same
Lent Weekends *** same
Annunciation
Lazarus Saturday
Palm Sunday
Bright Saturday
Resurrection
Resurrection Archangel Michael (Replaces)
Thomas Sunday
Ascension
Pentecost
Entrance of the Lord into Egypt
Transfiguration
*/
