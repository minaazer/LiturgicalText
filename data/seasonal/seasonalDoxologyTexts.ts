import { cross } from '../repeatedPrayers';

const seasonalDoxologyFunctions = {
copticNewYearDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Coptic New Year Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Coptic New Year Doxology
        <span class="coptic-caption">Ϩⲱⲥ ⲉ̀Ⲡ̀ⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ</span>
        <span class="arabic-caption">ذوكصولوجية رأس السنة القبطية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Sing unto the Lord a new song, O people who love Christ our God, for He visited us with His salvation, as a Good One and Lover of Mankind.</td>
            <td class="coptic">Ϩⲱⲥ ⲉ̀Ⲡ̀ⲟ̅ⲥ̅ ϧⲉⲛ ⲟⲩϩⲱⲥ ⲙ̀ⲃⲉⲣⲓ: ⲱ̀ ⲛⲓⲗⲁⲟⲥ ⲙ̀ⲙⲁⲓ Ⲡⲭ̅ⲥ̅ Ⲡⲉⲛⲛⲟⲩϯ: ϫⲉ ⲁϥϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉϥⲟⲩϫⲁⲓ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">سبحوا الرب تسبيحاً جديداً، أيها الشعوب محبو المسيح إلهنا، لأنه قد تعهدنا بخلاصه، كصالح ومحب البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">We ascribe praise unto You, with voices of glorification, O our good Savior, confirm us unto the end.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱⲣⲡ ⲛⲁⲕ ⲙ̀ⲡⲓϩⲩⲙⲛⲟⲥ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲏ ⲛ̀ϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ: ⲱ̀ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲙⲁⲧⲁϫⲣⲟⲛ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ.</td>
            <td class="arabic">نرسل لك التسبيح، بأصوات التمجيد، يا مخلصنا الصالح، ثبتنا إلى الإنقضاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Grant us O Lord Your peace, and save us from the hands of our enemies, humiliate their counsel, and heal our sicknesses.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲁⲛ Ⲡ̀ⲟ̅ⲥ̅ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲛⲁϩⲙⲉⲛ ϧⲉⲛ ⲛⲉⲛϫⲓϫ ⲛ̀ⲧⲉ ⲛⲉⲛϫⲁϫⲓ: ⲙⲁⲑⲉⲃⲓⲟ ⲙ̀ⲡⲟⲩⲥⲟϭⲛⲓ: ⲟⲩⲟϩ ⲙⲁⲧⲁⲗϭⲟ ⲛ̀ⲛⲉⲛϣⲱⲛⲓ.</td>
            <td class="arabic">أعطنا يا رب سلامك، ونجنا من أيدي أعدائنا، وأذل مشورتهم، وأشف أمراضنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Bless the crown of the year, with Your goodness O Lord, the rivers and the fountains, the plants and the fruits.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲓⲭⲗⲟⲙ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ: ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲭ̀ⲣⲏⲥⲧⲟⲥ Ⲡ̀ⲟ̅ⲥ̅: ⲛⲓⲓⲁⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲙⲟⲩⲙⲓ: ⲛⲉⲙ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ.</td>
            <td class="arabic">بارك يا رب إكليل السنة بصلاحك، الأنهار والينابيع، والزروع والأثمار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Bless us in our work, with Your heavenly blessings, and send unto us from on high, Your grace and Your goodness.</td>
            <td class="coptic">Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲛⲉⲛϩ̀ⲃⲏⲟⲩⲓ̀: ϧⲉⲛ ⲡⲉⲕⲥ̀ⲙⲟⲩ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲟⲩⲱⲣⲡ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲕϭⲓⲥⲓ: ⲡⲉⲕϩ̀ⲙⲟⲧ ⲛⲉⲙ ⲛⲉⲕⲁ̀ⲅⲁⲑⲟⲛ.</td>
            <td class="arabic">باركنا في أعمالنا، ببركتك السمائية، وأرسل لنا من علوَك، نعمتك وخيراتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The afflicted save them, the travelers return them, the bound loosen them, and those who have slept repose them.</td>
            <td class="coptic">Ⲛⲏⲉⲧϩⲉϫϩⲱϫ ⲛⲁϩⲙⲟⲩ ⲉ̀ⲃⲟⲗ: ⲛⲏⲉ̀ⲧⲁⲩϣⲉ ⲉ̀ⲡ̀ϣⲉⲙⲙⲟ ⲙⲁⲧⲁⲥⲑⲱⲟⲩ: ⲛⲉⲙ ⲛⲏⲉⲧⲥⲱⲛϩ ⲃⲟⲗⲟⲩ ⲉ̀ⲃⲟⲗ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ.</td>
            <td class="arabic">المتضايقين خلصهم، والمسافرين ردهم، والمربوطين حلّهم، والراقدين نيحهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Lift away Your wrath from us, and deliver us from inflation, and from the snares of demons, O Giver of good things.</td>
            <td class="coptic">Ⲱ̀ⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲛ: ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗϩⲁ ⲟⲩϩ̀ⲃⲱⲛ: ⲛⲉⲙ ⲛⲓⲫⲁϣ ⲛ̀ⲧⲉ ⲛⲓⲇⲉⲙⲱⲛ: ⲱ̀ ⲫ̀Ⲣⲉϥϯ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ.</td>
            <td class="arabic">إرفع غضبك عنا، ونجنا من الغلاء، ومن فخاخ الشياطين، يا معطي الخيرات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastoftheCrossDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of the Cross Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of the Cross Doxology
        <span class="coptic-caption">Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ϧⲁ ⲛⲓⲗⲁⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الصليب</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">We too, the people, / the orthodox children, / we bow down to the Cross / of our Lord Jesus Christ.</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ϧⲁ ⲛⲓⲗⲁⲟⲥ: ⲛⲓϣⲏⲣⲓ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">نحن أيضاً معشر الشعوب، أبناء الأرثوذكسيين، نسجد لصليب، ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">[Saint] Paul the apostle / speaks of the honor of the Cross, / saying, "We will not boast / except in the Cross of Christ."</td>
            <td class="coptic">Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲉϥϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϫⲉ ⲧⲉⲛⲛⲁϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲛ ⲁⲛ: ⲉ̀ⲃⲏⲗ ϧⲉⲛ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">بولس الرسول، ينطق بكرامة الصليب، قائلاً "ليس لنا أن نفتخر، إلا بصليب المسيح."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Let us sing, O faithful, / to our Lord, Jesus Christ, / and bow down to His Cross, / the immortal and holy wood.</td>
            <td class="coptic">Ⲧⲉⲛⲉⲣϩⲩⲙⲛⲟⲥ ⲱ̀ ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲙ̀Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓϣⲉ ⲉ̅ⲑ̅ⲩ̅ ⲛ̀ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ.</td>
            <td class="arabic">أيها المؤمنون فلنسبح، ربنا يسوع المسيح، ونسجد لصليبه، الخشبة المقدسة غير المائتة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">We take pride in you, O Cross, / on which Jesus was crucified / for through your type, / we were set free.</td>
            <td class="coptic">Ⲧⲉⲛϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲩⲓ̀ϣⲓ ⲉ̀ϫⲱⲕ ⲛ̀Ⲓⲏ̅ⲥ̅: ϫⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲉⲕⲧⲩⲡⲟⲥ: ⲁⲛϣⲱⲡⲓ ⲉⲛⲉ̀ⲗⲉⲩⲑⲉⲣⲟⲥ.</td>
            <td class="arabic">نفتخر بك أيها الصليب، الذي صُلب عليك يسوع، لأنه من قِبَل مثالك، صرنا أحراراً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The mouths of the orthodox / and the seven ranks of angels / take pride in you, O Cross / of our good Savior.</td>
            <td class="coptic">Ⲣⲱⲟⲩ ⲛ̀ⲛⲓⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ⲛⲉⲙ ϣⲁϣϥ ⲛ̀ⲧⲁⲅⲙⲁ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ: ⲥⲉϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">أفواه الأرثوذكسيين، والسبع الطغمات الملائكية، يفتخرون بك أيها الصليب، الذي لمخلصنا الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We carry you, O Cross, / the protector of brave Christians, / powerfully around our necks, / and we proclaim openly.</td>
            <td class="coptic">Ⲧⲉⲛⲧⲁⲗⲟ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲫ̀ⲛⲁϣϯ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲉ̀ϫⲉⲛ ⲛⲉⲛⲙⲟϯ ⲛ̀ⲇⲩⲛⲁⲧⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲣⲏⲧⲱⲥ.</td>
            <td class="arabic">نحملك على أعناقنا، أيها الصليب، ناصر المسيحيين بشجاعة، ونصرخ جهاراً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to you, O Cross, / the joy of the Christians, / the conqueror of tyranny, / our confirmation, we the faithful.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲫ̀ⲣⲁϣⲓ ⲛ̀ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲡⲓϭⲣⲟ ⲟⲩⲃⲉ ⲡⲓⲧⲩⲣⲁⲛⲛⲟⲥ: ⲛⲉⲙ ⲡⲉⲛⲧⲁϫⲣⲟ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲡⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الصليب، فرح المسيحيين، الغالب ضد المعاندين، وثباتنا نحن معشر المؤمنين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Hail to you, O Cross, / the comfort of the faithful, / the confirmation of the martyrs, / till they completed their sufferings.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲫ̀ⲛⲟⲙϯ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ ⲡ̀ⲧⲁϫⲣⲟ ⲛ̀ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ϣⲁ ⲛ̀ⲧⲟⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲟⲩⲃⲁⲥⲁⲛⲟⲥ.</td>
            <td class="arabic">السلام لك أيها الصليب، عزاء المؤمنين، وثبات الشهداء، حتى أكملوا عذاباتهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Hail to you, O Cross, / the weapon of victory. / Hail to you, O Cross, / the throne of the King.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓϩⲟⲡⲗⲟⲛ ⲛ̀ⲧⲉ ⲡⲓϭⲣⲟ: ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲙ̀Ⲡⲓⲟⲩⲣⲟ.</td>
            <td class="arabic">السلام لك أيها الصليب، سلاح الغلبة، السلام لك أيها الصليب، عرش الملك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Hail to you, O Cross, / the sign of salvation. / Hail to you, O Cross, / the shining light.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓⲙⲏⲓⲛⲓ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ: ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓⲟⲩⲱⲓⲛⲓ ⲉ̀ⲧⲁϥϣⲁⲓ.</td>
            <td class="arabic">السلام لك أيها الصليب، علامة الخلاص، السلام لك أيها الصليب، النور المُشرق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Hail to you, O Cross, / the sword of the Spirit. / Hail to you, O Cross, / the spring of grace.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϯⲥⲏϥⲓ ⲛ̀ⲧⲉ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ: ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϯⲙⲟⲩⲙⲓ ⲛ̀ⲛⲓⲭⲁⲣⲓⲥⲙⲁ.</td>
            <td class="arabic">السلام لك أيها الصليب، سيف الروح، السلام لك أيها الصليب، ينبوع النعم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Hail to you, O Cross, / the treasure of good things. / Hail to you, O Cross, / to the end of the ages.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲡⲓⲑⲩⲥⲁⲩⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ: ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϣⲁ ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲉ̀ⲱⲛ.</td>
            <td class="arabic">السلام لك أيها الصليب، كنز الخيرات، السلام لك أيها الصليب، إلى كمال الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">“Hail to you, O Cross, / which King Constantine / carried with him to the war / and smote the barbarians.”</td>
            <td class="coptic">Ϫⲉ ⲭⲉⲣⲉ ⲛⲁⲕ ⲱ̀ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲫⲏⲉ̀ⲧⲁ ⲡ̀ⲟⲩⲣⲟ Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ: ⲟⲗϥ ⲛⲉⲙⲁϥ ⲉ̀ⲡⲓⲡⲟⲗⲉⲙⲟⲥ: ⲁϥϣⲁⲣⲓ ⲛ̀ⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ.</td>
            <td class="arabic">قائلين "السلام لك أيها الصليب، الذي حمله الملك قسطنطين، معه إلى الحرب، وقتل البربر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">For greatly honored / is the sign of the Cross / of Jesus Christ, the King, / our true God.</td>
            <td class="coptic">Ϥ̀ⲧⲁⲓⲏ̀ⲟⲩⲧ ⲅⲁⲣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲡⲓⲙⲏⲓⲛⲓ ⲛ̀ⲧⲉ Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ⲛ̀ⲧⲉ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ Ⲡ̀ⲟⲩⲣⲟ: Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ.</td>
            <td class="arabic">لأنها مكرمة جداً، علامة صليب، يسوع المسيح الملك، إلهنا الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">He who was crucified upon the Cross / to save our race, / let us also honor Him, / proclaiming and saying.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲙⲁⲣⲉⲛⲧⲁⲓⲟϥ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">الذى صُلب على الصليب، حتى خلَّص جنسنا، ونحن أيضاً فلنكرمه، صارخين قائلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">The Cross is our weapon. / The Cross is our hope. / The Cross is our confirmation / in our struggles and sufferings.</td>
            <td class="coptic">Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲡⲉⲛϩⲟⲡⲗⲟⲛ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ: Ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ ⲡⲉ ⲡⲉⲛⲧⲁϫⲣⲟ: ϧⲉⲛ ⲛⲉⲛϩⲟϫϩⲉϫ ⲛⲉⲙ ⲛⲉⲛⲑ̀ⲗⲓⲯⲓⲥ.</td>
            <td class="arabic">الصليب هو سلاحنا، الصليب هو رجاؤنا، الصليب هو ثباتنا، في ضيقاتنا وشدائدنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">For blessed is Christ, our God, / and His life-giving Cross, / upon which He was crucified / to save us from our sins.</td>
            <td class="coptic">Ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲡⲭ̅ⲥ̅ Ⲡⲉⲛⲛⲟⲩϯ: ⲛⲉⲙ Ⲡⲉϥⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲟⲧⲧⲟⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">لأنه مبارك المسيح إلهنا، وصليبه المحيي، الذي صُلِبَ عليه، حتى خلَّصنا من خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">We praise and glorify Him / and exalt Him above all, / as a Good One and Lover of Man. / Have mercy on us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
firstKiahkDoxology(tableNumber) {
    const html = `
        <table id="table_${tableNumber}" style="display: table;" title="First Kiahk Doxology">
            <caption id="caption_table_${tableNumber}" class="caption">First Kiahk Doxology<span
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
                    <td class="english" >For indeed I will go, to the house
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
                        tidings to the Virgin, and after the greeting, he strengthened her saying.</td>
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
                        as Theotokos, ask the Lord on our behalf, that He may forgive us our sins.</td>
                    <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲉ: ϩⲱⲥ Ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲛ̀ⲥⲏⲟⲩ
                        ⲛⲓⲃⲉⲛ: ⲙⲁϯϩⲟ ⲉ̀Ⲡ̅ⲟ̅ⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                    <td class="arabic">من اجل هذا نمجدك كوالدة الاله كل حين إسألي الرب عنا ليغفر لنا خطايانا.</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english" >Hail to you O Virgin, the right and true
                        queen, hail to the pride of our race, who bore to us Emmanuel.</td>
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
},
secondKiahkDoxology(tableNumber) {
const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Kiahk Doxology">
        <caption id="caption_table_${tableNumber}" class="caption">Second Kiahk Doxology
            <span class="coptic-caption">Ⲉⲣⲉ ⲡ̀ⲥⲟⲗⲥⲉⲗ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ</span>
                <span class="arabic-caption">ذوكصولوجية كيهك الثانية</span>
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
                    faithful advocate, before our Lord Jesus Christ, that He may forgive us our sins.${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲉⲡⲉⲛⲙⲉⲩⲓ̀: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ
                    ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ ⲡⲉⲛ̅ⲟ̅ⲥ Ⲓ̅ⲏ̅ⲥ Ⲡ̅ⲭ̅ⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.${cross}</td>
                <td class="arabic">نسألك أن تذكرينا أيتها الشفيعة المؤتمنة أمام ربنا يسوع المسيح ليغفر لنا خطايانا.
                ${cross}</td>
            </tr>
        </tbody>
    </table>
`;
return html;
},
thirdKiahkDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Third Kiahk Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Third Kiahk Doxology
        <span class="coptic-caption">Ⲅⲁⲃⲓⲣⲏⲗ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية كيهك الثالثة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Gabriel the angel, announced to the Virgin, and greeted her saying, "Hail to you O full of grace."</td>
            <td class="coptic">Ⲅⲁⲃⲓⲣⲏⲗ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲁϥϩⲓϣⲉⲛⲟⲩϥⲓ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁϥⲉⲣϩⲏⲧⲥ ⲙ̀ⲡⲓⲁⲥⲡⲁⲥⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ.</td>
            <td class="arabic">جبرائيل الملاك، بشَّر العذراء، وإبتدأ بالسلام قائلاً، "السلام لكِ يا ممتلئة نعمة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">When the chaste child, heard his voice, she responded in wisdom, "What can this be?"</td>
            <td class="coptic">Ⲉ̀ⲧⲁⲥⲥⲱⲧⲉⲙ ⲉ̀ⲧⲉϥⲥ̀ⲙⲏ: ⲛ̀ϫⲉ ϯⲁ̀ⲗⲟⲩ ⲛ̀ⲥⲉⲙⲛⲉ: ⲁⲥⲉⲣⲟⲩⲱ̀ ϧⲉⲛ ⲟⲩⲙⲉⲧⲥⲁⲃⲉ: ⲟⲩⲟϩ ⲁⲥⲙⲟⲕⲙⲉⲕ ϫⲉ ⲟⲩ ⲡⲉ ⲫⲁⲓ.</td>
            <td class="arabic">فلما سمعت صوته، الفتاة العفيفة، أجابت بحكمة، وفكرت "ما هو هذا؟"</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The angel said to her, he who is of incorporeal fire, "O my Lady the Virgin, incline your ear and hear me.</td>
            <td class="coptic">Ⲡⲉϫⲁϥ ⲛⲁⲥ ⲛ̀ϫⲉ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ: ⲡⲓϣⲁϩ ⲛ̀ⲭ̀ⲣⲱⲙ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ϫⲉ ⲧⲁϭⲟⲓⲥ ⲙ̀Ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲣⲉⲕ ⲡⲉⲙⲁϣϫ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">فقال لها الملاك، الملتهب ناراً الغير الجسداني، "يا سيدتي العذراء، أميلي سمعِك وإسمعي مني.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Do not fear or tremble, O Mary daughter of Joachim, the Lord God of the Seraphim, chose you as His dwelling."</td>
            <td class="coptic">Ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣⲕⲓⲙ: Ⲙⲁⲣⲓⲁ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲓⲱⲁⲕⲓⲙ: Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ ⲛ̀Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ⲁϥⲥⲱⲧⲡ ⲙ̀ⲙⲟ ⲉⲩⲙⲁ ⲛ̀ϣⲱⲡⲓ ⲛⲁϥ.</td>
            <td class="arabic">لا تخافِ ولا تتزعزعي، يا مريم إبنة يواقيم، الرب إله السيرافيم، إختاركِ مسكناً له."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Truly you will conceive, the Word who became poor, for us the poor ones, to make us rich.</td>
            <td class="coptic">Ⲁ̀ⲗⲏⲑⲱⲥ ⲧⲉⲣⲁⲉⲣⲃⲟⲕⲓ: ⲙ̀Ⲡⲓⲗⲟⲅⲟⲥ ⲉ̀ⲧⲁϥⲉⲣϩⲏⲕⲓ: ⲉⲑⲃⲏⲧⲉⲛ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓϩⲏⲕⲓ: ϣⲁ ⲛ̀ⲧⲉϥⲁⲓⲧⲉⲛ ⲛ̀ⲣⲁⲙⲁⲟ̀.</td>
            <td class="arabic">بالحقيقة تحبلين، بالكلمة الذي إفتقر، لأجلنا نحن الفقراء، حتى يجعلنا أغنياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">"How can this be, no man has entered unto me, I ask you to tell me, do not hide anything from me."</td>
            <td class="coptic">Ⲡⲱⲥ ⲫⲁⲓ ⲛⲁϣⲱⲡⲓ ⲙ̀ⲙⲟⲓ: ⲙ̀ⲡⲉ ϩ̀ⲗⲓ ϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲓ: ϯϯϩⲟ ⲉ̀ⲣⲟⲕ ⲙⲁⲧⲁⲙⲟⲓ: ⲙ̀ⲡⲉⲣϩⲱⲡ ⲛ̀ϩ̀ⲗⲓ ⲉ̀ϫⲱⲓ.</td>
            <td class="arabic">"كيف يكون لي هذا، لو لم يدخل إليَّ أحد، أسألك أخبرني، ولا تخف عني شيئاً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">"The Holy Spirit will come upon you, the power of the Most High will overshadow you, the angels praise you, because of the fear of their Creator."</td>
            <td class="coptic">Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲉⲑⲛⲏⲟⲩ ⲉ̀ϫⲱ: ⲟⲩϫⲟⲙ ⲛ̀ⲧⲉ Ⲫⲏⲉⲧϭⲟⲥⲓ ⲉⲑⲛⲁⲉⲣϧⲏⲓⲃⲓ ⲉ̀ⲣⲟ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟ: ⲉⲑⲃⲉ ⲧ̀ϩⲟϯ ⲙ̀Ⲡⲟⲩⲣⲉϥⲥⲱⲛⲧ.</td>
            <td class="arabic">"الروح القدس يحل عليكِ، وقوة العليْ تظلكِ، الملائكة تسبحكِ، من أجل خوف خالقهم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">You will give birth to the Son of God, and the Wisdom of God, for He is the God of our fathers, and none other but Him.</td>
            <td class="coptic">Ⲧⲉⲣⲁⲙⲓⲥⲓ ⲙ̀Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲟⲩⲟϩ Ϯⲥⲟⲫⲓⲁ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ: ⲙ̀ⲙⲟⲛ ⲕⲉ ⲟⲩⲁⲓ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">ستلدين إبن الله، وحكمة الله، لأنه هو إله آبائنا، وليس آخر سواه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">"Through you the Son of God, will come in the womb, look and do not be afraid, for everyone will be saved through you."</td>
            <td class="coptic">Ⲁⲓⲛⲁϣⲉ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟϯ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲛⲁϣⲱⲡⲓ ϧⲉⲛ ⲧⲟϯ: ⲁ̀ⲛⲁⲩ ⲟⲩⲛ ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ: ϫⲉ ⲡ̀ⲧⲏⲣϥ ⲛⲁⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟϯ.</td>
            <td class="arabic">"(أذهب بالقول إنه من قبلِك)، إبن الله يصير في المستودع، فأنظري لا تخافي، لأن الكل يخلص من قِبَلكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">The Virgin Mary, of the seed of Abraham, she saved Adam, from the curse of sin.</td>
            <td class="coptic">Ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ϧⲉⲛ ⲡⲓⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀Ⲁⲃⲣⲁⲁⲙ: ⲑⲏⲉ̀ⲧⲁⲥⲛⲟϩⲉⲙ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡ̀ⲥⲁϩⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲫ̀ⲛⲟⲃⲓ.</td>
            <td class="arabic">العذراء مريم، من زرع إبراهيم، التي خلَّصت آدم، من لعنة الخطية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Hail to you O Virgin, the very and true queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲉⲡⲉⲛⲙⲉⲩⲓ̀: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">نسألِك أن تذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
fourthKiahkDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Fourth Kiahk Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Fourth Kiahk Doxology
        <span class="coptic-caption">Ϧⲉⲛ ⲡⲓⲁ̀ⲃⲟⲧ ⲙ̀ⲙⲁϩⲥⲟⲟⲩ</span>
        <span class="arabic-caption">ذوكصولوجية كيهك الرابعة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">On the sixth month, Gabriel was sent, according to the Holy Gospel, and announced to Mary.</td>
            <td class="coptic">Ϧⲉⲛ ⲡⲓⲁ̀ⲃⲟⲧ ⲙ̀ⲙⲁϩⲥⲟⲟⲩ: ⲁⲩⲟⲩⲱⲣⲡ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ: ⲁϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲙ̀Ⲙⲁⲣⲓⲁ.</td>
            <td class="arabic">في الشهر السادس، أُرسِلَ جبرائيل، كما في الإنجيل المقدس، بشر [العذراء] مريم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Gabriel was sent, the servant of salvation, the incorporeal servant was sent, to the undefiled Virgin.</td>
            <td class="coptic">Ⲁⲩⲟⲩⲱⲣⲡ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ⲁϥⲉⲣⲇⲓⲁⲕⲟⲛⲓⲛ ⲙ̀ⲡⲓⲟⲩϫⲁⲓ: ⲁⲩⲟⲩⲱⲣⲡ ⲙ̀ⲡⲓⲃⲱⲕ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ: ϣⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ.</td>
            <td class="arabic">أُرسِلَ جبرائيل، خادم الخلاص، أُرسِلَ العبد الغير الجسداني، إلى العذراء الغير الدنسة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Gabriel was sent, he raised us with the new calling, the free one was sent, to the chaste girl.</td>
            <td class="coptic">Ⲁⲩⲟⲩⲱⲣⲡ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ⲁϥⲧⲟⲩⲛⲟⲥⲧⲉⲛ ϧⲉⲛ ⲡⲓⲑⲱϩⲉⲙ ⲙ̀ⲃⲉⲣⲓ: ⲁⲩⲟⲩⲱⲣⲡ ⲙ̀ⲡⲓⲉ̀ⲗⲉⲩⲑⲉⲣⲟⲥ: ϣⲁ ϯⲁ̀ⲗⲟⲩ ⲛ̀ⲥⲉⲙⲛⲉ.</td>
            <td class="arabic">أُرسِلَ جبرائيل، أقامنا بالدعوة الجديدة، أُرسِلَ الحر، إلى الفتاة العفيفية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Gabriel was sent, to prepare for the true Bridegroom, Gabriel was sent, to the high palace.</td>
            <td class="coptic">Ⲁⲩⲟⲩⲱⲣⲡ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ⲉ̀ⲥⲉⲃⲧⲉ Ⲡⲓⲛⲩⲙⲫⲓⲟⲥ ⲙ̀ⲙⲏⲓ: ⲁⲩⲟⲩⲱⲣⲡ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ϣⲁ ⲡⲁⲗⲁⲧⲓⲟⲛ ⲙ̀ⲡ̀ϭⲓⲥⲓⲓ̀ⲕⲟⲛ.</td>
            <td class="arabic">أُرسِلَ جبرائيل، ليهيئ الخدر الحقيقي، أُرسِلَ غبريـال، إلى البلاط العلوي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">A wonderful mystery, and an exalted wonder, for the Word of the Father, dwelt among men.</td>
            <td class="coptic">Ⲟⲩⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ϣ̀ⲫⲏⲣⲓ: ⲟⲩⲟϩ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ ⲉⲧϭⲟⲥⲓ: ϫⲉ Ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲁϥϣⲱⲡⲓ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">سر عجيب، ومعجز مرتفع، لأن كلمة الآب، صار مع البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We worship Him and glorify Him, with His incomprehensible Father, and the Spirit of comfort, for He have come and saved us. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁⲧϣ̀ⲧⲁϩⲟϥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ϫⲉ ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">نسجد له ونمجده، مع أبيه الغير المدرك، والروح المعزي، لأنه أتى وخلصنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
fifthKiahkDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Fifth Kiahk Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Fifth Kiahk Doxology
        <span class="coptic-caption">Ⲉ̀ⲧⲁ ⲡⲓⲱⲡ ⲓ̀ ⲉ̀Ⲍⲁⲭⲁⲣⲓⲁⲥ</span>
        <span class="arabic-caption">ذوكصولوجية كيهك الخامسة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">When the lot fell on Zacharias, to raise incense, he entered the temple, and completed his service.</td>
            <td class="coptic">Ⲉ̀ⲧⲁ ⲡⲓⲱⲡ ⲓ̀ ⲉ̀Ⲍⲁⲭⲁⲣⲓⲁⲥ: ⲉ̀ⲧⲁⲗⲉ ⲟⲩⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉ̀ⲡ̀ϣⲱⲓ: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ: ⲁϥϫⲱⲕ ⲙ̀ⲡⲉϥϣⲉⲙϣⲓ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">لما وقعت القرعة، على زكريا أن يرفع بخوراً، دخل إلى الهيكل، وأكمل خدمته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">An angel appeared to him, on the right side of the altar, while he raised incense, saying "Do not fear O Zacharias.</td>
            <td class="coptic">Ⲟⲩⲁⲅⲅⲉⲗⲟⲥ ⲁϥⲟⲩⲟⲛϩϥ ⲉ̀ⲣⲟϥ: ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ: ⲉϥⲧⲁⲗⲉ ⲟⲩⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉ̀ⲡ̀ϣⲱⲓ: ϫⲉ ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ Ⲍⲁⲭⲁⲣⲓⲁⲥ.</td>
            <td class="arabic">فظهر له ملاك، عن يمين المذبح، وهو يرفع البخور، قائلاً "لا تخف يا زكريا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He looked upon your honor, and your wife Elizabeth, will bear you a son, and you shall call his name John."</td>
            <td class="coptic">Ⲁϥⲛⲁⲩ ⲅⲁⲣ ⲉ̀ⲡⲉⲕⲧⲁⲓⲟ: ⲟⲩⲟϩ ⲧⲉⲕⲥ̀ϩⲓⲙⲓ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ: ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛⲁⲕ ⲛ̀ⲟⲩϣⲏⲣⲓ: ⲉⲕⲉ̀ⲙⲟⲩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ ϫⲉ Ⲓⲱⲁⲛⲛⲏⲥ.</td>
            <td class="arabic">لأنه قد نُظِرَ إلى كرامتك، وإمرأتك أليصابات، ستلد لك إبناً، وتدعوا إسمه يوحنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">And Zacharias the priest, at the right side of the altar, while placing the incense, Gabriel spoke with him.</td>
            <td class="coptic">Ⲟⲩⲟϩ Ⲍⲁⲭⲁⲣⲓⲁⲥ ⲡⲓⲟⲩⲏⲃ: ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀ⲡⲓⲙⲁ ⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ: ⲉϥⲭⲱ ⲙ̀ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ: Ⲅⲁⲃⲣⲓⲏⲗ ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲁϥ.</td>
            <td class="arabic">وزكريا الكاهن، عن يمين المذبح، يضع البخور، غبريـال كلَّمَه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">"Your wife Elizabeth, will bear you a son, you will have joy and gladness, through his birth."</td>
            <td class="coptic">Ϫⲉ ⲧⲉⲕⲥ̀ϩⲓⲙⲓ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ: ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛⲁⲕ ⲛ̀ⲟⲩϣⲏⲣⲓ: ⲉ̀ⲣⲉ ⲟⲩⲣⲁϣⲓ ϣⲱⲡⲓ ⲛⲁⲕ: ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ ϧⲉⲛ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ.</td>
            <td class="arabic">"إن إمرأتك أليصابات، ستلد لك إبناً، ويكون لك فرح، وتهليل بمولده."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">"How shall I know this, for I am an old man, and my wife Elizabeth, is barren with no child."</td>
            <td class="coptic">Ϫⲉ ⲡⲱⲥ ⲫⲁⲓ ⲛⲁϣⲱⲡⲓ ⲙ̀ⲙⲟⲓ: ⲉ̀ⲡⲓⲇⲏ ⲁⲓⲉⲣϧⲉⲗⲗⲟ: ⲟⲩⲟϩ ⲧⲁⲥ̀ϩⲓⲙⲓ Ⲉ̀ⲗⲓⲥⲁⲃⲉⲧ: ⲟⲩⲁϭⲣⲏⲛ ⲧⲉ ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲁⲛ.</td>
            <td class="arabic">قال "كيف يكون لي هذا، لأني قد شخت، وإمرأتي أليصابات، عاقر لا تلد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">"You will be mute, until the child is born, and when your eyes see, you will glorify the God of Israel."</td>
            <td class="coptic">Ⲉⲕⲉ̀ϣⲱⲡⲓ ⲉⲕⲭⲱ ⲛ̀ⲣⲱⲕ: ϣⲁ ⲧⲟⲩⲙⲓⲥⲓ ⲙ̀ⲡⲓⲁ̀ⲗⲟⲩ: ⲁⲩϣⲁⲛⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲉⲕⲃⲁⲗ: ⲭ̀ⲛⲁϯⲱ̀ⲟⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">"أنت تكون صامتاً، حتى يولد الصبي، ومتى أبصرت عيناك، تمجد الله إسرائيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Gabriel was sent, by the King of glory, to a city of Galilee, named Nazareth.</td>
            <td class="coptic">Ⲁⲩⲟⲩⲱⲣⲡ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲉ̀ⲟⲩⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ϯⲅⲁⲗⲓⲗⲉⲁ̀: ⲉ̀ⲡⲉⲥⲣⲁⲛ ⲡⲉ Ⲛⲁⲍⲁⲣⲉⲑ.</td>
            <td class="arabic">أُرسِلَ جبرائيل، من قِبَل ملك المجد، إلى مدينة من الجليل، إسمها ناصرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">To a virgin child, from the house of David, her name was Mary, the daughter of King David.</td>
            <td class="coptic">Ϩⲁ ⲟⲩⲁ̀ⲗⲟⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲏⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: ⲉ̀ⲡⲉⲥⲣⲁⲛ ⲡⲉ Ⲙⲁⲣⲓⲁⲙ: ⲧ̀ϣⲉⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">إلى فتاة عذراء، من بيت داود، إسمها مريم، إبنة الملك داود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">You comforted her saying, "Rejoice and be glad, hail to you O full of grace, the Lord is with you."</td>
            <td class="coptic">Ⲁⲕϣⲱⲡⲓ ⲉⲕϯⲛⲟⲙϯ ⲛⲁⲥ: ϫⲉ ⲣⲁϣⲓ ⲟⲩⲛⲟϥ ⲙ̀ⲙⲟ: ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
            <td class="arabic">صرت تعزيها، قائلاً "إفرحي وإبتهجي، السلام لكِ يا ممتلئة نعمة، الرب معكِ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Hail to you O Virgin, the very and true Queen, hail to the pride of our race, who gave birth to Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ: ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لكِ أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدتِ لنا عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">We ask you to remember us, O our trusted advocate, before our Lord Jesus Christ, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϯϩⲟ ⲁ̀ⲣⲉⲡⲉⲛⲙⲉⲩⲓ̀: ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉ̀ⲧⲉⲛϩⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">نسألكِ أن تذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
nativityPramounDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Nativity Pramoun Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Nativity Pramoun Doxology
        <span class="coptic-caption">Ⲁⲓⲛⲁⲩ ⲉ̀ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ ⲙ̀ⲫⲟⲟ̀ⲩ</span>
        <span class="arabic-caption">ذوكصولوجية برامون الميلاد</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Today all the creations, saw a great illuminating light, because the divine appearance, that was revealed to us.</td>
            <td class="coptic">Ⲁⲓⲛⲁⲩ ⲉ̀ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲥ̀ⲉⲣⲗⲁⲙⲡⲓⲛ ϧⲉⲛ ⲟ̀ⲩⲛⲓϣϯ ⲛ̀ⲟ̀ⲩⲱ̀ⲓⲛⲓ: ⲉⲑⲃⲉ ϯⲛⲓϣϯ ⲛ̀ⲑⲉⲱ̀ⲣⲓⲁ: ⲉ̀ⲧⲁⲩⲟ̀ⲩⲱ̀ⲛϩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">رأيت الخليقة كلها اليوم مضيئة بلمعان عظيم، من اجل الظهور الإلهى، الذى اعلن لنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For the Incorporeal was incarnate, and the Virgin gave birth to Him, like everyone else, but as God as well as man.</td>
            <td class="coptic">Ϫⲉ ⲡⲓⲁ̀ⲧⲥⲁⲣⲍ ⲁϥϭⲓⲥⲁⲣⲝ: ⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟ̀ⲩⲟ̀ⲛ ⲛⲓⲃⲉⲛ: ⲉϥⲟ̀ⲓ ⲛ̀ⲛⲟⲩϯ ⲉϥⲟ̀ⲓ ⲛ̀ⲣⲱⲙⲓ.</td>
            <td class="arabic">لأن غير المتجسد تجسد، ولدته العذراء، مثل كل احد، إلهاً وانسانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Bethlehem the city of David, takes pride with joy, for she received to herself in the flesh, He who is on the Cherubim.</td>
            <td class="coptic">Ⲃⲏⲑⲗⲉⲉⲙ ⲑ̀ⲃ̀ⲁⲕⲓ ⲛ̀Ⲇⲁⲩⲓⲇ: ϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲥ ϧⲉⲛ ⲟ̀ⲩⲑⲉⲗⲏⲗ: ϫⲉ ⲁⲥϥⲁⲓ ⲥⲱⲙⲁⲧⲓⲕⲟⲥ: ϧⲁ ⲫⲏⲉ̀ⲧϩⲓϫⲉⲛ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">بيت لحم مدينة داود، تفتخر بتهليل، لأنها حملت جسديا، الذى على الشاروبيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">THE BEING before the ages, the only Creator, the destroyer of the bond of sin, was wrapped in sackcloth.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧϣⲟⲡ ⲫⲏⲉ̀ⲛⲁϥϣⲟⲡ: ⲟⲩⲟϩ ⲡⲓⲢⲉϥⲥⲱⲛⲧ ⲙ̀ⲙⲁⲩⲁⲧϥ: ⲫⲏⲉ̀ⲧⲥⲱⲗⲡ ⲛ̀ⲥ̀ⲛⲁⲩϩ ⲛ̀ⲧⲉ ⲫ̀ⲛⲟⲃⲓ: ⲁⲩⲕⲟⲩⲗⲱⲗϥ ⲛ̀ϩⲁⲛⲧⲱⲓⲥⲓ.</td>
            <td class="arabic">الكائن الذى كان، والمبدع وحده، القاطع رباط الخطية، لُف بخرق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Mary the Virgin, and Joseph and Salome, marveled very much, when they saw Him.</td>
            <td class="coptic">ϮⲠⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ⲛⲉⲙ Ⲓⲱⲥⲏⲫ ⲛⲉⲙ Ⲥⲁⲗⲱⲙⲓ: ⲁⲩⲉ̀ⲣϣ̀ⲫⲏⲣⲓ ⲉ̀ⲙⲁϣⲱ: ⲉⲑⲃⲉ ⲛⲏⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟ̀ⲩ.</td>
            <td class="arabic">العذراء مريم، ويوسف وسالومى، تعجبوا جداً، ممن رأوه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The heavenly hosts, praise on earth, this holy song, proclaiming and saying.</td>
            <td class="coptic">Ⲛⲓⲥ̀ⲧⲣⲁⲧⲓⲁ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉⲩⲉ̀ⲣϩⲩⲙⲛⲟⲥ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲉⲩϫⲱ ⲛ̀ⲧⲁⲓ ϩⲩⲙⲛⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">العساكر السماوية، تسبح على الأرض منشده، بهذا التسبيح المقدس، صارخه قائلة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Glory to God in the highest, peace on earth, and good will toward men, for He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲟ̀ⲩⲱ̀ⲟ̀ⲩ ϧⲉⲛ ⲛⲏⲉ̀ⲧϭⲟⲥⲓ ⲙ̀Ⲫϯ: ⲛⲉⲙ ⲟ̀ⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟ̀ⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ϫⲉ ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">المجد لله فى الأعالى، وعلى الأرض السلام، وفى الناس المسرة، لأنه اتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">The shepherds in the fields, came and worshiped Him, and we too worship Him, and also testify.</td>
            <td class="coptic">Ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟ̀ⲩ ⲉⲧϧⲉⲛ ⲧ̀ⲕⲟⲓ: ⲁⲩⲓ̀ ⲟⲩⲟϩ ⲁⲩⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ: ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲉ̀ⲣⲙⲉⲑⲣⲉ ϧⲁⲣⲟϥ.</td>
            <td class="arabic">الرعاة الذين فى الحقل، اتوا وسجدوا له، ونحن ايضاً نسجد له، ونشهد له.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">That He came into the world, and was born from the Virgin, and saved our race, from the evil Devil.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲁϥⲙⲁⲥϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲇⲓⲁⲃⲟⲗⲟⲥ ⲉⲧϩⲱⲟ̀ⲩ.</td>
            <td class="arabic">انه اتى الى العالم، ووُلد من العذراء، وخلص جنسنا، من إبليس الشرير.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a good One and Lover of man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟ̀ⲩ ⲛⲁϥ: ⲧⲉⲛⲉ̀ⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، ارحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
firstFeastofNativityDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="First Feast of Nativity Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">First Feast of Nativity Doxology
        <span class="coptic-caption">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الميلاد الأولى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Then our mouths are filled with joy, and our tongues with rejoicing, for our Lord Jesus Christ, was born in Bethlehem.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ⲟⲩⲟϩ ⲡⲉⲛⲗⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϫⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
            <td class="arabic">حينئذ امتلأ فمنا فرحاً، ولساننا تهليلاً، لأن ربنا يسوع المسيح، ولد في بيت لحم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to the city of our Lord, the city of the living, the dwelling of the righteous, which is Jerusalem.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲃⲁⲕⲓ ⲙ̀ⲡⲉⲛⲚⲟⲩϯ: ⲧ̀ⲡⲟⲗⲓⲥ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲧⲟⲛϧ: ⲫ̀ⲙⲁⲛ̀-ϣⲱⲡⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲉ̀ⲧⲉ ⲑⲁⲓ ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
            <td class="arabic">السلام لمدينة الهنا، مدينة الاحياء، مسكن الصديقين، التي هي اورشليم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Hail to you O Bethlehem, the city of the prophets, who has foretold of, the birth of Emmanuel.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ ⲱ̀ Ⲃⲏⲑⲗⲉⲉⲙ: ⲧ̀ⲡⲟⲗⲓⲥ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲏⲉ̀ⲧⲁⲩⲉ̀ⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
            <td class="arabic">السلام لك يا بيت لحم، مدينة الانبياء، الذين تنبأوا، عن ميلاد عمانوئيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Today the true Light, has shone upon us, from the Virgin Mary, the pure bride.</td>
            <td class="coptic">ⲀⲡⲓⲞ̀ⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲁϥϣⲁⲓ ⲛⲁⲛ ϩⲱⲛ ⲙ̀ⲫⲟⲟ̀ⲩ: ϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ: ϯϣⲉⲗⲉⲧ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.</td>
            <td class="arabic">اليوم اشرق لنا نحن ايضاً، النور الحقيقي، من مريم العذراء، العروس النقية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Mary gave birth to our Savior, the good Lover of man, in Bethlehem of Judea, according to the sayings of the prophets.</td>
            <td class="coptic">Ⲙⲁⲣⲓⲁ ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀: ⲕⲁⲧⲁ ⲛⲓⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">مريم ولدت مخلصنا، محب البشر الصالح، في بيت لحم اليهودية، كأقوال الأنبياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Isaiah the prophet, proclaimed with a voice of joy saying, "She will give birth to Emmanuel, our good Savior."</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲱ̀ϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ϫⲉ ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲡⲉⲛⲤⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">اشعياء النبي، يصرخ بصوت التهليل قائلا، انها تلد عمانوئيل، مخلصنا الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Now the heavens rejoice, and the earth is glad, for she has born Emmanuel for us, we the Christian people.</td>
            <td class="coptic">Ⲓⲥ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲉⲩⲉ̀ⲟ̀ⲩⲛⲟϥ: ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲑⲉⲗⲏⲗ: ϫⲉ ⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
            <td class="arabic">ها السموات تفرح، والارض تتهلل، لانها ولدت لنا عمانوئيل، نحن المسيحيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Therefore we are wealthy, with perfect gifts, and we sing with faith, saying Alleluia.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲁⲙⲁⲟ̀: ϧⲉⲛ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲛⲁϩϯ ⲧⲉⲛⲉ̀ⲣⲯⲁⲗⲓⲛ: ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">من اجل هذا نحن اغنياء، بالخيرات الكاملة، وبإيمان نرتل، قائلين الليلويا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the Son of God, was born in Bethlehem.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ: ⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
            <td class="arabic">الليلويا الليلويا، الليلويا الليلويا، يسوع المسيح ابن الله، ولد في بيت لحم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذى ينبغى له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
secondFeastofNativityDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Feast of Nativity Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second Feast of Nativity Doxology
        <span class="coptic-caption">Ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲦ̀ⲣⲓⲁⲥ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الميلاد الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The One out of the Trinity, co-essential with the Father, when he beheld our humiliation, and our bitter bondage.</td>
            <td class="coptic">Ⲡⲓⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲦ̀ⲣⲓⲁⲥ: ⲡⲓⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙ ⲫ̀Ⲓⲱⲧ: ⲉ̀ⲧⲁϥⲛⲁⲩ ⲉ̀ⲡⲉⲛⲑⲉⲃⲓⲟ: ⲛⲉⲙ ⲧⲉⲛⲙⲉⲧⲃⲱⲕ ⲉⲧⲟⲓ ⲛ̀ϣⲁϣⲓ.</td>
            <td class="arabic">الواحد من الثالوث، المساوي للآب، لما نظر إلي ذًلنا، وعبوديتنا المرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He bound the heaven of heavens, and came from the womb of the Virgin, and He became a human like us, without sin.</td>
            <td class="coptic">Ⲁϥⲣⲉⲕ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥⲓ̀ ⲉ̀ⲑ̀ⲙⲏⲧⲣⲁ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲁϥⲉⲣⲣⲱⲙⲓ ⲙ̀ⲡⲉⲛⲣⲏϯ: ϣⲁⲧⲉⲛ ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ.</td>
            <td class="arabic">طأطأ سماء السموات، وأتى إلي بطن العذراء، وصار إنساناً مثلنا، بدون الخطية وحدها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He was born in Bethlehem, according to the sayings of the prophets, and rescued and saved us, for we are His people.</td>
            <td class="coptic">Ⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲕⲁⲧⲁ ⲛⲓⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥⲧⲟⲩϫⲟⲛ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ: ϫⲉ ⲁ̀ⲛⲟⲛ ⲡⲉ ⲡⲉϥⲗⲁⲟⲥ.</td>
            <td class="arabic">لما وُلد في بيت لحم، كأقوال الأنبياء، أنقذنا وخلصنا، لأننا نحن شعبه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He did not cease to be divine, He came and became the Son of men, for He is the true God, He came and saved us. ${cross}</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲕⲏⲛ ⲁⲛ ⲉϥⲟⲓ ⲛ̀ⲛⲟⲩϯ: ⲁϥⲓ̀ ⲁϥϣⲱⲡⲓ ⲛ̀Ϣⲏⲣⲓ ⲛ̀ⲣⲱⲙⲓ: ⲁⲗⲗⲁ Ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫ̀ϯ ⲙ̀ⲙⲏⲓ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">لم يزل إلهناً، أتى وصار إبن بشر، لكنه هو الإله الحقيقي، أتى وخلصنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
thirdFeastofNativityDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Third Feast of Nativity Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Third Feast of Nativity Doxology
        <span class="coptic-caption">Ⲁⲙⲱⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الميلاد الثالثة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Come all you to worship, our Lord Jesus Christ, who was born of the Virgin, and her virginity is sealed.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲛⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ: ⲙ̀ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲫⲏⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲉⲥⲧⲟⲃ ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ.</td>
            <td class="arabic">تعالوا جميعا لنسجد، لربنا يسوع المسيح، الذي ولدته العذراء، وبتوليتها مختومة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The wise men came, in worshiped God in Bethlehem, who was born of the Virgin, our Lord Jesus Christ.</td>
            <td class="coptic">Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲅⲟⲥ: ⲁⲩⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ϯ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲫⲏⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲉ̀ⲧⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">أتى المجوس، وسجدوا لله في بيت لحم، الذي ولدته العذراء، ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The heavenly orders, gathered together, to praise God in Bethlehem, who was born of the Virgin.</td>
            <td class="coptic">Ⲛⲓⲥⲧⲣⲁⲧⲓⲁ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲁⲩⲑⲱⲟⲩϯ ⲉ̀ϧⲟⲩⲛ ⲛⲉⲙ ⲛⲟⲩⲉ̀ⲣⲏⲟⲩ: ⲉⲩϩⲱⲥ ⲉ̀Ⲫ̀ϯ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ: ⲫⲏⲉ̀ⲧⲁⲥⲙⲁⲥϥ ⲛ̀ϫⲉ ϯⲠⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">جند السماء، اجتمعوا معاً، مسبحين الله في بيت لحم، الذي ولدته العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Proclaiming and saying, "Glory to God in the highest, peace on earth, and good will toward men."</td>
            <td class="coptic">Ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ ⲙ̀Ⲫ̀ϯ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">صارخين قائلين، "المجد لله في الأعالي، وعلى الأرض السلام، وفي الناس المسرة."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The wise men came from the east, to Jerusalem saying, "Where is He who has been born, the King of the Jews.</td>
            <td class="coptic">Ⲏⲡⲡⲉ ⲁⲩⲓ̀ ⲛ̀ϫⲉ ϩⲁⲛⲙⲁⲅⲟⲥ: ⲉ̀ⲃⲟⲗ ⲥⲁⲡⲉⲓⲉⲃⲧ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ϫⲉ ⲁϥⲑⲱⲛ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ.</td>
            <td class="arabic">وإذا مجوس قد أتوا، من المشرق إلي أورشليم قائلين، "أين هو المولود، ملك اليهود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">For we have seen, His star in our city, and upon it written testimony, we come to worship Him."</td>
            <td class="coptic">Ⲑ̀ⲙⲉⲧⲥⲁⲓⲉ̀ ⲛ̀ⲧⲉ ⲡⲉϥⲥⲓⲟⲩ: ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ϧⲉⲛ ⲧⲉⲛⲭⲱⲣⲁ: ⲉ̀ⲣⲉ ϩⲁⲛⲥ̀ϧⲁⲓ ⲥ̀ϧⲏⲟⲩⲧ ⲉ̀ⲣⲟϥ: ⲁⲛⲓ̀ ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">بهاء نجمه، أضاء في كورتنا، وعليه كتابات مكتوبة، فأتينا لنسجد له."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Isaiah the prophet, the one of the prophetic voice, prophesied about, the birth of Christ.</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲫⲁ ⲧ̀ⲥ̀ⲙⲏ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲏ: ⲁϥⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ: ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">أشعياء النبي، ذو الصوت النبوي، تنبأ من أجل، ميلاد المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">When the wise men came, they searched for Him saying, "Where is He who has been born, the King of the Jews.</td>
            <td class="coptic">Ⲛⲓⲙⲁⲅⲟⲥ ⲉ̀ⲧⲁⲩⲓ̀ ϣⲁⲣⲟϥ: ⲁⲩϣⲓⲛⲓ ⲉⲑⲃⲏⲧϥ ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲩⲇⲏ: ϫⲉ ⲁϥⲑⲱⲛ ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ: ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲒⲟⲩⲇⲁⲓ.</td>
            <td class="arabic">ولما جاء المجوس، بحثوا عنه بإجتهاد، قائلين "أين هو المولود، ملك اليهود."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">When Herod heard this, he feared and was troubled, and all Jerusalem with him, fear came upon them.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥⲥⲱⲧⲉⲙ ⲛ̀ϫⲉ Ⲏ̀ⲣⲱⲇⲏⲥ: ⲁϥⲉⲣϩⲟϯ ⲟⲩⲟϩ ⲁϥϣ̀ⲑⲟⲣⲧⲉⲣ: ⲛⲉⲙ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲧⲏⲣⲥ ⲛⲉⲙⲁϥ: ⲟⲩϩⲟϯ ⲁⲥⲓ̀ ⲉ̀ϫⲱⲟⲩ.</td>
            <td class="arabic">لما سمع هيرودس، خاف وإضطرب، وجميع أورشليم معه، ووقع عليهم خوف.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Therefore he called the wise men secretly, and sent them to Bethlehem, "You will find the Child, who was born in that place."</td>
            <td class="coptic">Ⲡⲁⲓⲣⲏϯ ⲁϥⲙⲟⲩϯ ⲉ̀ⲛⲓⲙⲁⲅⲟⲥ: ⲛ̀ⲭⲱⲡ ⲁϥⲟⲩⲟⲣⲡⲟⲩ ⲉ̀Ⲃⲏⲑⲗⲉⲉⲙ: ϫⲉ ⲁ̀ⲣⲉⲧⲉⲛⲛⲁϫⲓⲙⲓ ⲙ̀ⲡⲓⲀ̀ⲗⲟⲩ: ⲫⲏⲉ̀ⲧⲁⲩⲙⲁⲥϥ ϧⲉⲛ ⲡⲓⲙⲁ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ.</td>
            <td class="arabic">ولذلك دعا المجوس سراً، وأرسلهم إلى بيت لحم قائلاً، "ستجدون الصبي الذي، وُلد في ذلك الموضع."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">An incorruptible virginity, and perfect birth, the shepherds saw, and praised God.</td>
            <td class="coptic">Ⲟⲩⲡⲁⲣⲑⲉⲛⲓⲁ ⲛ̀ⲁ̀ⲧⲃⲱⲗ ⲉ̀ⲃⲟⲗ: ⲟⲩϫⲓⲛⲙⲓⲥⲓ ⲉϥϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲛⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲁⲩⲛⲁⲩ ⲉ̀ⲃⲟⲗ: ⲁⲩⲥ̀ⲙⲟⲩ ⲉ̀Ⲫ̀ϯ ϣⲁ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">بتولية غير منحلة، وميلاد كامل، الرعاة نظروا، وسبحوا الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Therefore we praise Him, and worship Him, for the sake of those who pleased Him, that He may have mercy upon our souls.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟϥ: ⲉⲑⲃⲉ ⲛⲏⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ: ⲛ̀ⲧⲉϥⲉⲣ ⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ.</td>
            <td class="arabic">من أجل هذا نسبحه، ونسجد له، من أجل الذين أرضوه، لكي يصنع رحمة مع نفوسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the Son of God, was born in Bethlehem.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ: ⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.</td>
            <td class="arabic">هلليلويا هلليلويا، هلليلويا هلليلويا، يسوع المسيح إبن الله، ولد في بيت لحم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofCircumcisionDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Circumcision Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Circumcision Doxology
        <span class="coptic-caption">Ⲁⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅</span>
        <span class="arabic-caption">ذوكصولوجية عيد الختان</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Our Lord Jesus Christ, the true Son of God, who was incarnate of the Virgin, she gave birth to the good One.</td>
            <td class="coptic">Ⲁⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ ⲁ̀ⲗⲏⲑⲱⲥ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲁⲥⲙⲓⲥⲓ ⲙ̀ⲙⲟϥ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">ربنا يسوع المسيح ابن الله الحقيقي الذي تجسد من العذراء ولدته كصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">On the eighth day, from His glorious birth, He accepted unto Himself circumcision, according to the Law.</td>
            <td class="coptic">Ϧⲉⲛ ⲡⲓⲙⲁϩ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ: ⲛ̀ⲧⲉ ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ: ⲁϥϣⲱⲡ ⲉ̀ⲣⲟϥ ⲙ̀ⲡⲓⲥⲉⲃⲓ: ⲕⲁⲧⲁ ⲡⲉⲧⲥ̀ϣⲉ ⲙ̀ⲡⲓⲛⲟⲙⲟⲥ.</td>
            <td class="arabic">في اليوم الثامن لميلاده المجيد قبل إليه الختان كعاده الناموس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Come let us worship Him, for He is the true God, let us glorify the Virgin, who gave birth to Him in the flesh.</td>
            <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲛ̀ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟϥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ Ⲫϯ ϧⲉⲛ ⲟ̀ⲩⲙⲉⲑⲙⲏⲓ: ⲛ̀ⲧⲉⲛϯⲱ̀ⲟ̀ⲩ ⲛ̀ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲑⲏⲉ̀ⲧⲁⲥϫ̀ⲫⲉ ⲥⲱⲙⲁⲧⲓⲕⲟⲥ.</td>
            <td class="arabic">تعالوا لنسجد له لأنه الإله الحقيقي فلنمجد العذراء التي ولدته جسدياً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Rejoice today all you nations, and be glad, for Christ accepted unto Himself, circumcision on our behalf.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲱⲧⲉⲛ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲛⲏⲉ̀ⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ ϧⲉⲛ ⲟ̀ⲩⲣⲁϣⲓ: ϫⲉ Ⲡⲭ̅ⲥ̅ ⲁϥϣⲱⲡ ⲉ̀ⲣⲟϥ: ⲙ̀ⲡⲓⲥⲉⲃⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.</td>
            <td class="arabic">تهللوا اليوم بفرح يا جميع الأمم لان المسيح قبل إليه الختان عنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">That He may free us, from the circumcision of the flesh, and grant us His Holy Spirit, with perfection.</td>
            <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲁ̀ⲓⲧⲉⲛ ⲛ̀ⲣⲉⲙϩⲉ: ⲉ̀ⲃⲟⲗϩⲁ ⲡ̀ⲥⲉⲃⲓ ⲛ̀ⲧⲉ ϯⲥⲁⲣⲝ: ⲛ̀ⲧⲉϥϯ ⲛⲁⲛ ⲙ̀ⲠⲉϥⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ϩⲓⲧⲉⲛ ⲡⲓϫⲱⲕ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">لكي يصيرنا أحراراً من ختان الجسد ولكي يعطينا روحه القدوس بالكمال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Let all the heretics, be put to shame and humiliated, and let them hear what Paul is saying, I was circumcised on the eighth day.</td>
            <td class="coptic">Ⲙⲁⲣⲟⲩϭⲓϣⲓⲡⲓ ⲛ̀ⲥⲉϭⲓϣⲱϣ: ⲛ̀ϫⲉ ⲛⲓϩⲉⲣⲉⲥⲓⲥ ⲧⲏⲣⲟⲩ ⲉⲧⲥⲱϥ: ⲉⲩⲥⲱⲧⲉⲙ ⲙ̀Ⲡⲁⲩⲗⲟⲥ: ϫⲉ ⲁ̀ⲛⲟⲕ ⲟ̀ⲩⲥⲉⲃⲓ ϧⲉⲛ ⲡⲓⲙⲁϩ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ.</td>
            <td class="arabic">ليخزي وليفتضح كل الهراطقة الأنجاس وليسمعوا بولس قائلاً أنا المختون في اليوم الثامن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">And he told us about Christ, that He accepted circumcision, on the eighth day, according to the Law of Moses.</td>
            <td class="coptic">Ⲉϥϯⲙⲏⲓⲛⲓ ⲛⲁⲛ ⲉ̀ϫⲉⲛ Ⲡⲭ̅ⲥ̅: ϫⲉ ⲁϥϣⲱⲡ ⲉ̀ⲣⲟϥ ⲙ̀ⲡⲓⲥⲉⲃⲓ: ϧⲉⲛ ⲡⲓⲙⲁϩ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ: ⲕⲁⲧⲁ ⲫ̀ⲛⲟⲙⲟⲥ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ.</td>
            <td class="arabic">ويدلنا علي المسيح أنه قبل الختان في اليوم الثامن كناموس موسي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the Son of God, accepted unto Himself circumcision. ${cross}</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ: ⲁϥϣⲱⲡ ⲉ̀ⲣⲟϥ ⲙ̀ⲡⲓⲥⲉⲃⲓ. ${cross}</td>
            <td class="arabic">هلليلويا هلليلويا هلليلويا هلليلويا يسو ع المسيح ابن الله قبل إليه الختان كما ينبغي بالناموس. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
theophanyParamounDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Theophany Paramoun Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Theophany Paramoun Doxology
        <span class="coptic-caption">Ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ</span>
        <span class="arabic-caption">ذوكصولوجية برامون الغطاس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">A great mystery, was revealed to you, O John the forerunner, the son of Zacharias.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉ̀ⲧⲁϥⲟⲩⲟⲛϩϥ ⲛⲁⲕ ⲉ̀ⲃⲟⲗ: ⲱ̀ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ: ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲍⲁⲭⲁⲣⲓⲁⲥ.</td>
            <td class="arabic">سِر عظيم، الذي أعلنه لك، يا يوحنا السابق، إبن زكريا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The mouth of God witnessed, to you O Baptizer, "No one is like you, among those born of women."</td>
            <td class="coptic">Ⲣⲱϥ ⲙ̀Ⲫ̀ϯ ⲁϥⲉⲣⲙⲉⲑⲣⲉ: ϧⲁⲣⲟⲕ ⲱ̀ ⲡⲓⲣⲉϥϯⲱⲙⲥ: ϫⲉ ⲙ̀ⲙⲟⲛ ⲫⲏⲉⲧⲧⲉⲛⲑⲱⲛⲧ ⲉ̀ⲣⲟⲕ: ϧⲉⲛ ⲛⲓⲙⲓⲥⲓ ⲛ̀ⲧⲉ ⲛⲓϩⲓⲟⲙⲓ.</td>
            <td class="arabic">فم الله شهد لك، أيها المعمدان، "ليس مَنْ يشبهك، في مواليد النساء."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You are the perfection of the prophets, who came before our Savior, you prepared His ways, as said by Isaiah.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡ̀ϫⲱⲕ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲧⲁⲩⲓ̀ ϧⲁϫⲱϥ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲁⲕⲥⲟⲃϯ ⲛ̀ⲛⲉϥⲙⲁⲙ̀ⲙⲟϣⲓ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ ⲛ̀Ⲏ̀ⲥⲁⲏ̀ⲁⲥ.</td>
            <td class="arabic">أنت هو كمال الأنبياء، الذين جاءوا قبل مخلصنا، لتعد طرقه، كقول أشعياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">You preached saying, "I baptize you, with the waters of repentance, for the forgiveness of sin.</td>
            <td class="coptic">Ⲛⲁⲕ ϩⲓⲱⲓϣ ⲉⲕϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁ̀ⲛⲟⲕ ⲙⲉⲛ ϯⲱⲙⲥ ⲙ̀ⲙⲱⲧⲉⲛ: ϧⲉⲛ ⲟⲩⲙⲱⲟⲩ ⲙ̀ⲙⲉⲧⲁⲛⲟⲓⲁ: ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ.</td>
            <td class="arabic">وكنت تكرز قائلاً، "أما أنا فأعمدكم، بماء التوبة، لمغفرة الخطايا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He who has two tunics, let him give to who has none, and he who has bread, let him do likewise."</td>
            <td class="coptic">Ⲡⲉⲧⲉ ⲟⲩⲟⲛ ⲧⲉϥ ϣ̀ⲑⲏⲛ ⲥ̀ⲛⲁⲩ: ⲉϥⲉ̀ϯ ⲙ̀ⲡⲉⲧⲉ ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲁϥ: ⲟⲩⲟϩ ⲡⲉⲧⲉ ⲟⲩⲟⲛ ⲧⲁϥ ⲛ̀ⲟⲩⲱⲓⲕ: ⲙⲁⲣⲉϥⲓ̀ⲣⲓ ⲟⲛ ⲙ̀ⲡⲁⲓⲣⲏϯ.</td>
            <td class="arabic">مَنْ له ثوبان، فليعط مَنْ ليس له، والذي عنده خبز، فليصنع هكذا أيضاً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Therefore we praise, proclaiming with the prophet, "Every flesh will see, the salvation of God."</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣⲭⲱⲣⲉⲩⲓⲛ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ϫⲉ ⲁⲩⲉ̀ⲛⲁⲩ ⲛ̀ϫⲉ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ⲉ̀ⲡⲓⲤⲱⲧⲏⲣ ⲛ̀ⲧⲉ Ⲫ̀ϯ.</td>
            <td class="arabic">لهذا نمدح صارخين، مع النبي قائلين، "كل جسد ينظر، خلاص الله."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Let us worship our Savior, the good Lover of mankind, for He had compassion on us, He came and saved us.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲡⲓⲘⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ Ⲛ̀ⲑⲟϥ ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">فلنسجد لمخلصنا، الصالح محب البشر، لأنه ترأف علينا، أتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a good One and Lover of man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟ̀ⲩ ⲛⲁϥ: ⲧⲉⲛⲉ̀ⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
firstFeastofTheophanyDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="First Feast of Theophany Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">First Feast of Theophany Doxology
        <span class="coptic-caption">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الغطاس الأولى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Then our mouths are filled with joy, and our tongues with rejoicing, for our Lord Jesus Christ, was baptized by John.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ⲟⲩⲟϩ ⲡⲉⲛⲗⲁⲥ ϧⲉⲛ ⲟ̀ⲩⲑⲉⲗⲏⲗ: ϫⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲁϥϭⲓⲱ̀ⲙⲥ ϩⲓⲧⲉⲛ Ⲓⲱⲁ̀ⲛⲛⲏⲥ.</td>
            <td class="arabic">حينئذ فمنا امتلأ فرحاً، ولساننا تهليلاً، لأن ربنا يسوع المسيح، اعتمد من يوحنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Truly heaven and earth, are filled with Your honor, O Lord with the mighty hand, and the arm of salvation.</td>
            <td class="coptic">Ⲁ̀ⲗⲏⲑⲱⲥ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ: ⲙⲉϩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲧⲁⲓⲟ: ⲱ̀ Ⲡⲟ̅ⲥ̅ ⲫⲁ ϯϫⲓϫ ⲉⲧⲁ̀ⲙⲁϩⲓ: ⲛⲉⲙ ⲡⲓϣⲱⲃϣ ⲛ̀ⲣⲉϥⲧⲟⲩϫⲟ.</td>
            <td class="arabic">بالحقيقة السماء والأرض، مملوءتان من كرامتك، أيها الرب ذو اليد العزيزة، والذراع المنقذة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">For God came and was baptized, for our sins, He delivered and saved us, with great compassion.</td>
            <td class="coptic">Ϫⲉ Ⲡⲟ̅ⲥ̅ ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥϭⲓⲱ̀ⲙⲥ: ⲉⲑⲃⲉ ⲛⲉⲛⲛⲟⲃⲓ ⲁ̀ⲛⲁ ϩⲱⲛ: ⲁϥⲧⲟⲩϫⲟⲛ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ: ϧⲉⲛ ⲟ̀ⲩⲛⲓϣϯ ⲙ̀ⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">لأن الرب أتي واعتمد، من أجل خطايانا نحن أيضاً، وانقذنا وخلصنا، برأفة عظيمة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Come today David to our midst, so you may speak of the honor of this feast, saying "The voice of the God of glory, thunders upon the waters."</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲁ̀ⲙⲟⲩ ⲧⲉⲛⲙⲏϯ ⲙ̀ⲫⲟⲟ̀ⲩ: ⲉⲑⲣⲉⲕϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀ⲡⲁⲓϣⲁⲓ: ϫⲉ ⲡ̀ϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀Ⲡⲟ̅ⲥ̅ ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟ̀ⲩ: Ⲫϯ ⲛ̀ⲧⲉ ⲡ̀ⲱⲟ̀ⲩ ⲁϥⲉ̀ⲣϧⲁⲣⲁⲃⲁⲓ.</td>
            <td class="arabic">تعال يا داود في وسطنا اليوم، لتنطق بكرامة هذا العيد، صوت الرب علي المياه، إله المجد ارعد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Isaiah has said, "The voice of one crying out, with joy in the wilderness, make straight His paths."</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲟϥ: ϫⲉ ⲡ̀ϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀ⲡⲉⲧⲱϣ ⲉ̀ⲃⲟⲗ: ϩⲓ ⲛⲓϣⲁϥⲉⲩ ϧⲉⲛ ⲟ̀ⲩⲟ̀ⲩⲛⲟϥ: ⲉ̀ⲡⲓⲃⲓⲟⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أشعياء دعاه، صوت الصراخ، بفرح في البراري، للسعي الكامل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The sea has seen and fled, and the Jordan turned away backwards, O sea why have you fled, stand firm that you may be blessed.</td>
            <td class="coptic">Ⲫ̀ⲓⲟⲙ ⲁϥⲛⲁⲩ ⲟⲩⲟϩ ⲁϥⲫⲱⲧ: ⲁ̀ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ ⲕⲟⲧϥ ⲉ̀ⲫⲁϩⲟⲩ: ⲟ̀ⲩ ⲡⲉⲧϣⲟⲡ ⲫ̀ⲓⲟⲙ ϫⲉ ⲁⲕⲫⲱⲧ: ⲙⲁⲧⲁϫⲣⲟⲕ ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕϭⲓⲥ̀ⲙⲟⲩ.</td>
            <td class="arabic">البحر رأي فهرب، والأردن رجع إلي خلف، مالك أيها البحر هربت، إثبت لكي تتبارك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Behold the waters have seen, the Creator and Maker of all, and became agitated and confused, worried an amazed.</td>
            <td class="coptic">Ⲏ̀ⲡⲡⲉ ⲁⲩⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲓⲙⲱⲟ̀ⲩ: ⲉ̀ⲡⲓⲆⲏⲙⲓⲟⲩⲣⲅⲟⲥ ⲛ̀ⲣⲉϥⲥⲱⲛⲧ: ⲁⲩⲉ̀ⲣϩⲟϯ ⲟⲩⲟϩ ⲁϥⲧⲁϩⲱⲟ̀ⲩ: ⲛ̀ϫⲉ ⲟ̀ⲩϣ̀ⲑⲟⲣⲧⲉⲣ ⲛⲉⲙ ⲟ̀ⲩⲧⲱⲙⲧ.</td>
            <td class="arabic">هوذا المياه قد رأت، الخالق الجابل، فخافت وادركها، الاضطراب والحيرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Rejoice O mountains and hills, thickets and all cedars, before the face of the King, who created all souls.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲛⲓⲧⲱⲟ̀ⲩ ⲛⲉⲙ ⲛⲓⲕⲁⲗⲁⲙⲫⲱⲟ̀ⲩ: ⲡⲓⲓⲁϩϣ̀ϣⲏⲛ ⲛⲉⲙ ⲛⲓϣⲉⲛⲥⲓϥⲓ: ⲉ̀ⲃⲟⲗ ϧⲁ ⲧ̀ϩⲏ ⲙ̀ⲡ̀ϩⲟ ⲙ̀ⲡ̀Ⲟⲩⲣⲟ: ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲛⲓⲛⲓϥⲓ.</td>
            <td class="arabic">إفرحي أيتها الجبال والآكام، والغياض والأرز، من قدام وجه الملك، الذي خلق الأنفاس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Holy O Lord and holy, holy O Lord Jesus Christ, glory be to You and Your Father, and the Spirit of comfort.</td>
            <td class="coptic">Ⲭ̀ⲟ̀ⲩⲁⲃ Ⲡⲟ̅ⲥ̅ ⲟⲩⲟϩ ⲭ̀ⲟ̀ⲩⲁⲃ: ⲭ̀ⲟ̀ⲩⲁⲃ Ⲡⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡⲓⲱ̀ⲟ̀ⲩ ϥ̀ⲉ̀ⲣϣⲁⲩ ⲛⲁϥ ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">قدوس أنت أيها الرب وقدوس، قدوس أيها الرب يسوع المسيح، المجد يليق به مع أبيه، والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Therefore we are wealthy, with perfect gifts, and we sing with faith, saying Alleluia.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲁⲙⲁⲟ̀: ϧⲉⲛ ⲛⲁⲅ̀ⲁⲑⲟⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟ̀ⲩⲛⲁϩϯ ⲧⲉⲛⲉ̀ⲣⲯⲁⲗⲓⲛ: ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">من أجل هذا نحن أغنياء، بالخيرات الكاملة، وبإيمان نرتل، قائلين هلليلويا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the Son of God, was baptized in the Jordan.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ: ⲁϥϭⲓⲱ̀ⲙⲥ ϧⲉⲛ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">هلليلويا هلليلويا، هلليلويا هلليلويا، يسوع المسيح إبن الله، اعتمد في الأردن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذى ينبغى له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
secondFeastofTheophanyDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Feast of Theophany Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second Feast of Theophany Doxology
        <span class="coptic-caption">Ⲫϯ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الغطاس الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The only-begotten God, came to the Jordan, and the portrait that was destroyed, and ruined by sin.</td>
            <td class="coptic">Ⲫϯ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲁϥⲓ̀ ⲉ̀ϫⲉⲛ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ: ϯϩⲓⲕⲱⲛ ⲉ̀ⲧⲁⲥⲧⲁⲕⲟ: ⲟⲩⲟϩ ⲁⲥⲙⲟⲩ ϧⲉⲛ ⲡⲓⲛⲟⲃⲓ.</td>
            <td class="arabic">الإله الوحيد، جاء إلى الأردن، والصورة التى فسدت، وماتت بالخطية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He restored it once again, by the baptism of water, He demolish the head of the dragon, upon the water of the Jordan.</td>
            <td class="coptic">Ⲁϥⲁ̀ⲓⲥ ⲙ̀ⲃⲉⲣⲓ ⲛ̀ⲕⲉⲥⲟⲡ: ϩⲓⲧⲉⲛ ⲡⲓⲱ̀ⲙⲥ ⲛ̀ⲧⲉ ⲡⲓⲙⲱⲟ̀ⲩ: ⲟⲩⲟϩ ⲁϥⲗⲱⲥ ⲛ̀ⲧ̀ⲁ̀ⲫⲉ ⲙ̀ⲡⲓⲇ̀ⲣⲁⲕⲟⲛ: ϩⲓϫⲉⲛ ⲛⲓⲙⲱⲟ̀ⲩ ⲛ̀ⲧⲉ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">جددها مرة أخرى، بعماد الماء، ورض رأس التنين، على مياه الأردن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">You have seen the Holy Spirit, coming down from heaven, and you have heard the voice of the Father, proclaiming and saying.</td>
            <td class="coptic">Ⲁⲓⲛⲁⲩ ⲉ̀ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲉⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ: ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲧⲥ̀ⲙⲏ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲉⲥⲟ̀ϣ ⲉ̀ⲃⲟⲗ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">نظرت الروح القدس، الذي نزل من السماء، وسمعت صوت الآب، يصرخ قائلاً:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">"This is My beloved Son, with whom My soul is well pleased, He does My will hear Him, for He is the life-Giver."</td>
            <td class="coptic">Ϫⲉ ⲫⲁⲓ ⲡⲉ ⲠⲁϢⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ: ⲉ̀ⲧⲁ ⲧⲁⲯ̀ⲩⲭⲏ ϯⲙⲁϯ ⲛ̀ϧⲏⲧϥ: ⲁϥⲉ̀ⲣⲡⲁⲟ̀ⲩⲱ̀ϣ ⲥⲱⲧⲉⲙ ⲛ̀ⲥⲱϥ: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲢⲉϥⲧⲁⲛϧⲟ.</td>
            <td class="arabic">هذا هو إبني حبيبي الذي سُرّت به نفسي وصنع مشيئتي له إسمعوا لأنه هو المحيي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Isaiah the prophet, spoke of the honor of the forerunner, Saint John the celibate, the relative of Christ.</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲁϥϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ: ⲡⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲉ̅ⲑ̅ⲩ̅ Ⲓⲱⲁ̀ⲛⲛⲏⲥ: ⲡⲓⲥⲩⲅⲅⲉⲛⲏⲥ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">أشعياء النبى، نطق بكرامة السابق، البتول الطاهر يوحنا، نسيب المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Blessed are You O Christ our Master, the only-begotten Son, who was incarnate of the Virgin, and was baptized in the Jordan.</td>
            <td class="coptic">Ⲕ̀ⲥ̀ⲙⲁⲣⲱⲟ̀ⲩⲧ ⲱ̀ ⲡⲉⲛⲚⲏⲃ Ⲡⲭ̅ⲥ̅: ⲡ̀Ϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲫⲏⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ϧⲉⲛ ϯⲠⲁⲣⲑⲉⲛⲟⲥ: ⲟⲩⲟϩ ⲁϥϭⲓⲱ̀ⲙⲥ ϧⲉⲛ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">مبارك أنت يا سيدنا المسيح، الإبن الوحيد، الذي تجسد من العذراء، وأعتمد فى الأردن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Rejoice like the lambs, O Jordan and it's shores, for unto you came the Lamb, who carries the sin of the world.</td>
            <td class="coptic">Ⲑⲉⲗⲏⲗ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϩⲁⲛϩⲓⲏⲃ: ⲱ̀ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ ⲛⲉⲙ ⲡⲉϥⲇ̀ⲣⲓⲙⲟⲥ: ⲁϥⲓ̀ ϣⲁⲣⲟⲕ ⲛ̀ϫⲉ ⲡⲓϨⲓⲏⲃ: ⲫⲏⲉ̀ⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">تهلل مثل حملان، أيها الأردن وبريته، فقد أتى إليك الحمل، حامل خطيه العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is the Lamb of God, who carried the sin of the world, who brought a horn of salvation, in order to save His people.</td>
            <td class="coptic">Ⲫⲁⲓ ⲡⲉ ⲡⲓϨⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ: ⲫⲏⲉ̀ⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ⲛⲓ ⲛ̀ⲟ̀ⲩⲧⲁⲡ ⲛ̀ⲥⲱϯ: ⲉⲑⲣⲉϥⲛⲟϩⲉⲙ ⲙ̀ⲡⲉϥⲗⲁⲟⲥ.</td>
            <td class="arabic">هذا هو حمل الله، حامل خطية العالم، الذي جاء بقرن خلاص، ليخلص شعبه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Come all you peoples, and kings of the earth, and all the heavenly hosts, to praise Him unceasingly.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ⲛⲓⲟ̀ⲩⲣⲱⲟ̀ⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲛⲓⲙⲉⲧⲙⲁⲧⲟⲓ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟ̀ⲩⲙⲉⲧⲁ̀ⲑⲙⲟⲩⲛⲕ.</td>
            <td class="arabic">تعالوا يا جميع الشعوب، وملوك الأرض، والجنود السمائية، لنسبحه بغير فتور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Proclaiming and saying, "Holy holy, holy O Lord, this My beloved Son."</td>
            <td class="coptic">Ⲉⲛⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲕⲩⲣⲓⲟⲥ: ⲫⲁⲓ ⲡⲉ ⲠⲁϢⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ.</td>
            <td class="arabic">صارخين قائلين، قدوس قدوس، قدوس الرب، هذا هو إبنى حبيبى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Wherefore we rejoice and sing, with the holy angels, with joy saying, "Glory to God in the highest."</td>
            <td class="coptic">Ϧⲉⲛ ⲛⲁⲓ ⲧⲉⲛⲣⲁϣⲓ ⲧⲉⲛⲉ̀ⲣⲯⲁⲗⲓⲛ: ⲛⲉⲙ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ϧⲉⲛ ⲟ̀ⲩⲑⲉⲗⲏⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟ̀ⲩⲱ̀ⲟ̀ⲩ ϧⲉⲛ ⲛⲏⲉ̀ⲧϭⲟⲥⲓ ⲙ̀Ⲫϯ.</td>
            <td class="arabic">بهذا نفرح ونرتل، مع الملائكة الأطهار، بتهليل قائلين، المجد لله فى الأعالى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">And peace on earth, and good will towards men, for He was please by You, who is worthy of glory forever.</td>
            <td class="coptic">Ⲛⲉⲙ ⲟ̀ⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟ̀ⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ: ϫⲉ ⲁϥϯⲙⲁϯ ⲅⲁⲣ ⲛ̀ϧⲏϯ: ⲛ̀ϫⲉ ⲫⲏⲉ̀ⲧⲉ ⲫⲱϥ ⲡⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">وعلى الأرض السلام، وفى الناس المسرة، لأنه سر بك، الذى له المجد إلى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the Son of God, was baptized in the Jordan.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫϯ: ⲁϥϭⲓⲱ̀ⲙⲥ ϧⲉⲛ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.</td>
            <td class="arabic">هلليلويا هلليلويا، هلليلويا هلليلويا، يسوع المسيح إبن الله، اعتمد في الأردن.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذى ينبغى له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastoftheWeddingatCanaofGalileeDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of the Wedding at Cana of Galilee Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of the Wedding at Cana of Galilee Doxology
        <span class="coptic-caption">Ⲁⲙⲱⲓⲛⲓ ⲁ̀ⲛⲁⲩ ⲁ̀ⲣⲓϣ̀ⲫⲏⲣⲓ</span>
        <span class="arabic-caption">ذوكصولوجية عيد عرس قانا الجليل</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O people who love Christ, come see and be amazed, about this mystery, that was revealed to us today.</td>
            <td class="coptic">Ⲁⲙⲱⲓⲛⲓ ⲁ̀ⲛⲁⲩ ⲁ̀ⲣⲓϣ̀ⲫⲏⲣⲓ: ⲱ̀ ⲛⲓⲗⲁⲟⲥ ⲙ̀ⲙⲁⲓ Ⲡⲭ̅ⲥ̅: ϩⲓϫⲉⲛ ⲡⲁⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ: ⲉ̀ⲧⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ.</td>
            <td class="arabic">تعالو أنظروا وتعجبوا أيها الشعوب محبوا المسيح علي هذا السر الذي ظهر لنا اليوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">For our Lord Jesus Christ, gathered with His virgin mother, and our fathers the apostles, He revealed to them His divinity.</td>
            <td class="coptic">Ϫⲉ ⲁ̀Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲁϥⲑⲱⲟⲩϯ ⲛⲉⲙ ⲧⲉϥⲙⲁⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲁϥⲟⲩⲱⲛϩ ⲛⲱⲟⲩ ⲛ̀ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ.</td>
            <td class="arabic">لآن ربنا يسوع المسيح أجتمع مع أمه العذراء وأبائنا الرسل وأظهر لهم لاهوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Six jars of water, changed into chosen wine, through His great glory, in the Wedding of Cana of Galilee.</td>
            <td class="coptic">Ⲥⲟⲟⲩ (ⲋ) ⲛ̀ϩⲩⲇⲣⲓⲁ̀ ⲙ̀ⲙⲱⲟⲩ: ⲉⲩⲏⲣⲡ ⲉϥⲥⲱⲧⲡ ⲁϥⲟⲩⲱ̀ⲧⲉⲃ ⲙ̀ⲙⲱⲟⲩ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲱ̀ⲟⲩ: ⲡ̀ϩⲟⲡ ⲛ̀ⲧ̀Ⲕⲁⲛⲁ ⲛ̀ⲧⲉ ϯⲄⲁⲗⲓⲗⲉⲁ̀.</td>
            <td class="arabic">ستة أجران ماء حولها الي خمر مختار بمجده العظيم في عرس قانا الجليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He who sits on the Cherubim, revealed His divinity, He performed signs and wonders, and sat with men as God.</td>
            <td class="coptic">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ: ⲁϥⲟⲩⲱⲛϩ ⲛ̀ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲁϥⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛⲙⲏⲓⲛⲓ ⲛⲉⲙ ϩⲁⲛϫⲟⲙ: ⲟⲩⲟϩ ⲁϥϩⲉⲙⲥⲓ ⲛⲉⲙ ⲛⲓⲣⲱⲙⲓ ϩⲱⲥ ⲛⲟⲩϯ.</td>
            <td class="arabic">الجالس علي الشاروبيم أظهر لاهوته وصنع أيات وقوات وجلس مع البشر كإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The coessential of the Father, who is before all ages, today was in the Wedding, of Cana of Galilee.</td>
            <td class="coptic">Ⲡⲓⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙ Ⲫ̀ⲓⲱⲧ: ⲫⲏⲉ̀ⲧϣⲟⲡ ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ: ⲙ̀ⲫⲟⲟⲩ ϧⲉⲛ ⲑ̀ⲙⲏϯ ⲙ̀ⲡⲓϩⲟⲡ: ⲛ̀ⲧ̀Ⲕⲁⲛⲁ ⲛ̀ⲧⲉ ϯⲄⲁⲗⲓⲗⲉⲁ̀.</td>
            <td class="arabic">المساوي في الجوهر للآب الكائن قبل كل الدهور اليوم في وسط عرس قانا الجليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and lover of man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده ونزيده علوا كصالح ومحب البشر ارحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
jonahFastDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Jonah's Fast Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Jonah's Fast Doxology
        <span class="coptic-caption">Ⲓⲱⲛⲁ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ</span>
        <span class="arabic-caption">ذوكصولوجية صوم يونان</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Jonah the prophet, was in the belly of the whale, for three days and three nights, like the burial of our Savior.</td>
            <td class="coptic">Ⲓⲱⲛⲁ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲁϥⲭⲏ ϧⲉⲛ ⲑ̀ⲛⲉϫⲓ ⲙ̀ⲡⲓⲕⲏⲧⲟⲥ: ⲛ̀ϣⲟⲙⲧ (ⲅ̅) ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ϣⲟⲙⲧ ⲛ̀ⲉ̀ϫⲱⲣϩ: ⲕⲁⲧⲁ ⲡⲓⲕⲱⲥ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ.</td>
            <td class="arabic">يونان النبي، كان في بطن الحوت، ثلاثة أيام وثلاث ليال، كدفن مخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The Lord God sent him, to the people of Nineveh, he preached to them His word, and they repented.</td>
            <td class="coptic">Ⲁϥⲟⲩⲱⲣⲡ ⲙ̀ⲙⲟϥ ⲛ̀ϫⲉ Ⲡ̀ⲟ̅ⲥ̅ Ⲫ̀ϯ: ϣⲁ ⲛⲓⲣⲱⲙⲓ ⲛ̀ⲧⲉ Ⲛⲓⲛⲉⲩⲏ̀: ⲁϥϩⲓⲱⲓϣ ⲛⲱⲟⲩ ⲕⲁⲧⲁ ⲡⲉϥⲥⲁϫⲓ: ⲟⲩⲟϩ ⲁⲩⲉⲣⲙⲉⲧⲁⲛⲟⲓⲛ.</td>
            <td class="arabic">أرسله الرب الإله، إلي رجال نينوى، فكرز لهم، كقوله فتابوا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">For three days and three nights, they were in prayer and fasting, with pain and tears, with the birds and animals.</td>
            <td class="coptic">Ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ϣⲟⲙⲧ ⲛ̀ⲉ̀ϫⲱⲣϩ: ϧⲉⲛ ϩⲁⲛϣ̀ⲗⲏⲗ ⲛⲉⲙ ϩⲁⲛⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ⲛⲓⲛⲁϩⲕⲓ ⲛⲉⲙ ⲛⲓⲉⲣⲙⲱⲟⲩⲓ̀: ⲛⲓϩⲁⲗⲁϯ ⲛⲉⲙ ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀.</td>
            <td class="arabic">ثلاثة أيام وثلاث ليال، بصلوات وأصوام، مع التمخض والدموع، وهكذا الطيور والبهائم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">God accepted their repentance, and had mercy upon them, He lifted His anger away from them, and forgave them their sins.</td>
            <td class="coptic">Ⲁϥϣⲱⲡ ⲉ̀ⲣⲟϥ ⲛ̀ⲧⲟⲩⲙⲉⲧⲁⲛⲟⲓⲁ: ⲛ̀ϫⲉ Ⲫ̀ϯ ⲟⲩⲟϩ ⲁϥⲛⲁⲓ ⲛⲱⲟⲩ: ⲁϥⲱ̀ⲗⲓ ⲙ̀ⲡⲉϥϫⲱⲛⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲱⲟⲩ: ⲁϥⲭⲁ ⲛⲟⲩⲛⲟⲃⲓ ⲛⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">فقبل الله، توبتهم ورحمهم، ورفع غضبه عنهم، وغفر لهم خطاياهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">We pray to You O merciful One, deal with us the sinners, like the people of Nineveh, have mercy upon us according to Your great mercy.</td>
            <td class="coptic">Ⲧⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ ⲱ̀ ⲡⲓⲚⲁⲏⲧ: ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ ϧⲁ ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲛⲓⲣⲉⲙⲚⲓⲛⲉⲩⲏ̀: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">نطلب إليك أيها الرحوم، أن تصنع معنا نحن الخطاة، مثل أهل نينوى، وارحمنا كعظيم رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">For You are a merciful God, of great compassion, and full of patience, the good Lover of mankind.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟⲕ ⲟⲩⲚⲟⲩϯ ⲛ̀ⲛⲁⲏⲧ: ⲡⲓⲙⲏϣ ⲛ̀ⲛⲁⲓ ⲛ̀ⲣⲉϥϣⲉⲛϩⲏⲧ: ⲟⲩⲟϩ ⲡⲓⲢⲉϥⲱ̀ⲟⲩⲛ̀ϩⲏⲧ: ⲡⲓⲘⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">لأنك أنت إله رحوم، كثير الرحمة، متحنن وطويل الأناة، محب البشر الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">For You do not desire the death of a sinner, rather he returns and lives, accept us and have mercy on us, and forgive us our sins.</td>
            <td class="coptic">Ϫⲉ ⲭ̀ⲟⲩⲱϣ ⲙ̀ⲫ̀ⲙⲟⲩ ⲁⲛ ⲙ̀ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲧⲉϥⲕⲟⲧϥ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲱⲛϧ: ϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">لأنك لا تشاء موت الخاطئ، مثل أن يرجع ويحيا، إقبلنا إليك وإرحمنا، واغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Pray to the Lord on our behalf, O preacher of the Ninevites, Jonah the prophet, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲣⲉϥϩⲓⲱⲓϣ ⲛ̀ⲧⲉ ⲛⲓⲣⲉⲙⲚⲓⲛⲉⲩⲏ̀: Ⲓⲱⲛⲁ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">أطلب من الرب عنا، أيها الكاروز لأهل نينوي، يونان النبي، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofChristsEntryintotheTempleDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Christ's Entry into the Temple Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Christ's Entry into the Temple Doxology
        <span class="coptic-caption">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية عيد دخول المسيح الهيكل</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Our Lord Jesus Christ, glory and chanting to Him, with His good Father, and the Spirit of comfort.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲡⲓⲱ̀ⲟⲩ ⲫⲱϥ ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">ربنا يسوع المسيح، له المجد والترتيل، مع أبيه الصالح، والروح المعزي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He entered the holy temple, on His Mother's hands, after forty days, from His holy Birth.</td>
            <td class="coptic">Ⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲉⲣⲫⲉⲓ ⲉⲑⲟⲩⲁⲃ: ⲉ̀ϫⲉⲛ ⲛⲉⲛϫⲓϫ ⲛ̀Ⲧⲉϥⲙⲁⲩ: ⲙⲉⲛⲉⲛⲥⲁ ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲙ̀Ⲡⲉϥϫⲓⲛⲙⲓⲥⲓ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">دخل الهيكل المقدس، على يدي أمه، بعد أربعين يوماً، من ميلاده المقدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Joseph the Righteous came, with Mary the Mother of Christ, to fulfill the law, in Jesus the Savior.</td>
            <td class="coptic">Ⲁϥⲓ̀ ⲛ̀ϫⲉ Ⲓⲱⲥⲏⲫ ⲡⲓⲇⲓⲕⲉⲟⲥ: ⲛⲉⲙ Ⲙⲁⲣⲓⲁ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁⲩⲑⲁⲙⲓⲟ ⲙ̀ⲡ̀ϫⲱⲕ ⲙ̀ⲡⲓⲛⲟⲙⲟⲥ: ⲉⲑⲃⲉ Ⲡⲓⲁ̀ⲗⲟⲩ ⲛ̀Ⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ.</td>
            <td class="arabic">جاء يوسف الصديق، مع مريم أم المسيح، وصنعا أتمام الناموس، لآجل الصبي المخلص يسوع.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Simeon the Priest carried Him, on his holy hands, and praised Christ the King, likewise saying.</td>
            <td class="coptic">Ⲁϥⲟⲗϥ ⲛ̀ϫⲉ Ⲥⲩⲙⲉⲱⲛ ⲡⲓⲟⲩⲏⲃ: ⲉ̀ϫⲉⲛ ⲛⲉϥϫⲓϫ ⲉⲑⲟⲩⲁⲃ: ⲟⲩⲟϩ ⲁϥϩⲱⲥ ⲉ̀Ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">حمله سمعان الكاهن، على يديه الطاهرتين، وسبح الملك المسيح، هكذا قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">"Lord now You are letting Your servant depart, in peace according to Your word, for my eyes have seen Your salvation, which You have prepared before the people."</td>
            <td class="coptic">Ϯⲛⲟⲩ Ⲡⲁⲛⲏⲃ ⲭ̀ⲛⲁⲭⲁ ⲡⲉⲕⲃⲱⲕ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲕⲁⲧⲁ ⲡⲉⲕⲥⲁϫⲓ: ϫⲉ ⲁⲩⲛⲁⲩ ⲛ̀ϫⲉ ⲛⲁⲃⲁⲗ ⲉ̀ⲡⲉⲕⲛⲟϩⲉⲙ: ⲫⲏⲉ̀ⲧⲁⲕⲥⲉⲃⲧⲱⲧϥ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀ⲛⲓⲗⲁⲟⲥ.</td>
            <td class="arabic">"الآن يا سيد تطلق عبدك، بسلام كقولك، لأن عيني قد أبصرتا خلاصك، الذي أعددته قدام الشعوب."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
firstGreatFastDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="First Great Fast Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">First Great Fast Doxology
        <span class="coptic-caption">Ⲛⲉⲕⲛⲁⲓ ⲱ̀ ⲡⲁϬⲟⲓⲥ</span>
        <span class="arabic-caption">ذوكصولوجية الصوم الكيبر الأولى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Your mercies O my Lord I will praise, forever and ever, and from generation to generation, I will declare Your truth out of my mouth.</td>
            <td class="coptic">Ⲛⲉⲕⲛⲁⲓ ⲱ̀ ⲡⲁϬⲟⲓⲥ ϯⲛⲁϩⲱⲥ ⲙ̀ⲙⲱⲟ̀ⲩ: ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ: ⲟⲩⲟϩ ⲓⲥϫⲉⲛ ϫⲱⲟ̀ⲩ ϣⲁ ϫⲱⲟ̀ⲩ: ϯⲛⲁϫⲱ ⲛ̀ⲧⲉⲕⲙⲉⲑⲙⲏⲓ ϧⲉⲛ ⲣⲱⲓ.</td>
            <td class="arabic">أسبح مراحمك يا ربى، إلى أبد الأبد، ومن جيل إلى جيل، بفمى أخبر بحقك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">My iniquities have covered my head, and have overburdened me, O God hear my sighs, and cast them away from me.</td>
            <td class="coptic">Ⲛⲁⲁ̀ⲛⲟⲙⲓⲁ ⲁⲩϭⲓⲥⲓ ⲉ̀ⲧⲁⲁ̀ⲫⲉ: ⲟⲩⲟϩ ⲁⲩϩ̀ⲣⲟϣ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ: Ⲫ̀ϯ ⲥⲱⲧⲉⲙ ⲉ̀ⲡⲁϥⲓⲁϩⲟⲙ: ϩⲓⲟ̀ⲩⲓ̀ ⲙ̀ⲙⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲓ.</td>
            <td class="arabic">آثامى علت على رأسى، وثقلت علىّ، يا الله إسمع تنهُدى، وإطرحها عنى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Make me like the publican, who has sinned against You, You had compassion upon him, and forgave him his sins.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲧⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲧⲉⲗⲱⲛⲏⲥ: ⲫⲏⲉ̀ⲧⲁϥⲉ̀ⲣⲛⲟⲃⲓ ⲉ̀ⲣⲟⲕ: ⲁⲕϣⲉⲛϩⲏⲧ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ: ⲁⲕⲭⲁ ⲛⲉϥⲛⲟⲃⲓ ⲛⲁϥ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أجعلنى مثل العشار، الذى أخطأ إلي،ك وتراءفت عليه، وغفرت له خطاياه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Make me like the adulteress, whom You have redeemed, You have saved and rescued her, for she pleased You.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲧⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ϯⲡⲟⲣⲛⲏ: ⲑⲏⲉ̀ⲧⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲥ ⲉ̀ⲃⲟⲗ: ⲁⲕⲧⲟⲩⲛⲟⲥ ⲁⲕⲛⲟϩⲉⲙ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁⲥⲣⲁⲛⲁⲕ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ.</td>
            <td class="arabic">إجعلنى مثل الزانية، التى خلصتها، وأنقذتها ونجيتها، لأنها أرضتك أمامك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Make me like the thief, who was crucified upon Your right-hand, he confessed to You, and likewise said.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲧⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲥⲟⲛⲓ: ⲫⲏⲉ̀ⲧⲁⲩⲁ̀ϣϥ ⲛ̀ⲥⲁ ⲧⲉⲕⲟ̀ⲩⲓ̀ⲛⲁⲙ: ⲁϥⲉ̀ⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲙ̀ⲙⲟⲕ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">إجعلنى مثل اللص، الذى صُلب عن يمينك، وإعترف بك، هكذا قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">"Remember me O my Lord, remember me O my God, remember me O my King, when You come into Your kingdom."</td>
            <td class="coptic">Ϫⲉ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀ ⲱ̀ ⲡⲁϬⲟⲓⲥ: ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀ ⲱ̀ ⲡⲁⲚⲟⲩϯ: ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀ ⲱ̀ ⲡⲁⲞ̀ⲩⲣⲟ: ⲁⲕϣⲁⲛⲓ̀ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟ̀ⲩⲣⲟ.</td>
            <td class="arabic">"اذكرنى يا ربى، اذكرنى يا إلهى، اذكرنى يا ملكى، إذا جئت فى ملكوتك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">For You O my Savior, have accepted his confession, You were compassionate to him, and sent him to paradise.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ ⲇⲉ ⲱ̀ ⲡⲁⲤⲱⲧⲏⲣ: ⲁⲕϣⲱⲡ ⲉ̀ⲣⲟⲕ ⲛ̀ⲧⲉϥⲟ̀ⲙⲟⲗⲟⲅⲓⲁ: ⲁⲕϣⲉⲛϩⲏⲧ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱϥ: ⲁϥⲟ̀ⲩⲟ̀ⲣⲡϥ ⲉ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.</td>
            <td class="arabic">فأنت يا مخلصى، قبلت إليك اعترافه، وترأفت عليه، وأرسلته إلى الفردوس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Likewise I the sinner, Jesus my true King and God, have compassion upon me, and make me as one of them.</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲕ ϩⲱ ϧⲁ ⲡⲓⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ: Ⲓⲏ̅ⲥ̅ ⲡⲁⲚⲟⲩϯ ⲡⲁⲞ̀ⲩⲣⲟ ⲙ̀ⲙⲏⲓ: ϣⲁⲛⲁϩ̀ⲑⲏⲕ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ: ⲁ̀ⲣⲓⲧⲧ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟ̀ⲩⲁⲓ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">وأنا أيضاً الخاطئ، يا يسوع إلهى وملكى الحقيقى، تحنن علىّ واجعلنى، كأحد هؤلاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">For I know that You are good, compassionate and patient, remember me in Your mercy, forever and ever.</td>
            <td class="coptic">Ϯⲥⲱⲟ̀ⲩⲛ ϫⲉ Ⲛ̀ⲑⲟⲕ ⲟ̀ⲩⲁ̀ⲅⲁⲑⲟⲥ: ⲛ̀ⲣⲉϥϣⲉⲛϩⲏⲧ ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏ̀ⲧ: ⲁ̀ⲣⲓⲡⲁⲙⲉⲩ̀ⲓ̀ ϧⲉⲛ ⲡⲉⲕⲛⲁⲓ: ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">أنا أعرف أنك صالح، رؤوف ورحيم، اذكرنى برحمتك، إلى أبد الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">I ask You O my Lord Jesus, do not destroy me in Your anger, and likewise also in Your wrath, do not chasten me for my ignorance.</td>
            <td class="coptic">Ϯⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ ⲱ̀ ⲡⲁϬⲟⲓⲥ Ⲓⲏ̅ⲥ̅: ⲙ̀ⲡⲉⲣⲥⲟϩⲓ ⲙ̀ⲙⲟⲓ ϧⲉⲛ ⲡⲉⲕϫⲱⲛⲧ: ⲟ̀ⲩⲇⲉ ⲟⲛ ϧⲉⲛ ⲡⲉⲕⲙ̀ⲃⲟⲛ: ⲙ̀ⲡⲉⲣϯⲥ̀ⲃⲱ ⲛ̀ⲧⲁⲙⲉⲧⲁⲧⲉ̀ⲙⲓ.</td>
            <td class="arabic">أطلب إليك يا ربى يسوع، أن لا تبكتنى بغضبك، ولا برجزك، تؤدب جهالتى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">For You do not desire the death of a sinner, rather he returns and lives, have pity upon my weakness, and do not look at me in anger.</td>
            <td class="coptic">Ϫⲉ ⲭ̀ⲟ̀ⲩⲱ̀ϣ ⲙ̀ⲫ̀ⲙⲟⲩ ⲁⲛ ⲙ̀ⲡⲓⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲧⲉϥⲕⲟⲧϥ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲱ̀ⲛϧ: ϣⲁⲛⲁϩ̀ⲑⲏⲕ ϧⲁ ⲧⲁⲙⲉⲧϫⲱⲃ: ⲙ̀ⲡⲉⲣⲥⲟⲙⲥ ⲉ̀ⲣⲟⲓ ϧⲉⲛ ⲟ̀ⲩⲙ̀ⲃⲟⲛ.</td>
            <td class="arabic">لأنك لا تشاء موت الخاطئ، مثل أن يرجع ويحيا، تراءف على ضعفى، ولا تنظر إلىّ بغضب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">I have sinned O Jesus my Lord, I have sinned O Jesus my God, O King do not count the sins, which I have committed.</td>
            <td class="coptic">Ⲁⲓⲉ̀ⲣⲛⲟⲃⲓ Ⲓⲏ̅ⲥ̅ ⲡⲁϬⲟⲓⲥ: ⲁⲓⲉ̀ⲣⲛⲟⲃⲓ Ⲓⲏ̅ⲥ̅ ⲡⲁⲚⲟⲩϯ: ⲡⲁⲞ̀ⲩⲣⲟ ⲙ̀ⲡⲉⲣⲱⲡ ⲉ̀ⲣⲟⲓ: ⲛ̀ⲛⲓⲛⲟⲃⲓ ⲉ̀ⲧⲁⲓⲁ̀ⲓⲧⲟⲩ.</td>
            <td class="arabic">أخطأت يا يسوع ربى، أخطأت يا يسوع إلهى، يا ملكى لا تحسب علىّ، الخطايا التى صنعتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">I ask You O my Savior, let Your mercies come to me, and save me from the troubles, that come to my soul.</td>
            <td class="coptic">Ϯϯϩⲟ ⲉ̀ⲣⲟⲕ ⲱ̀ ⲡⲁⲤⲱⲧⲏⲣ: ⲙⲁⲣⲉ ⲛⲉⲕⲙⲉⲑⲛⲁⲏ̀ⲧ ⲧⲁϩⲟⲓ: ⲛ̀ⲧⲟⲩⲛⲟϩⲉⲙ ⲙ̀ⲙⲟⲓ ϧⲉⲛ ⲛⲓⲁ̀ⲛⲁⲅⲕⲏ: ⲉⲧϯ ⲟ̀ⲩⲃⲉ ⲉ̀ⲧⲁⲯ̀ⲩⲭⲏ.</td>
            <td class="arabic">أسألك يا مخلصى، فلتدركنى مراحمك، لتخلصنى من الشدائد، المضادة لنفسى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">Do not send me to the fire, for my ignorance like Sodom, and likewise do not destroy me, like Gomorrah.</td>
            <td class="coptic">Ⲙ̀ⲡⲉⲣϩⲓ ⲭ̀ⲣⲱⲙ ⲉ̀ⲧⲁⲙⲉⲧⲁⲧⲥⲱⲟ̀ⲩⲛ: ⲙ̀ⲫ̀ⲣⲏϯ ϩⲱϥ ⲛ̀Ⲥⲟⲇⲟⲙⲁ: ⲟ̀ⲩⲇⲉ ⲟⲛ ⲙ̀ⲡⲉⲣⲧⲁⲕⲟⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ϩⲱϥ ⲛ̀Ⲅⲟⲙⲟⲣⲣⲁ.</td>
            <td class="arabic">لا تحرق عدم معرفتى، مثل سدوم، ولا تهلكنى أيضاً، مثل عمورة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">But O my Lord deal with me, like the people of Nineveh, those who have repented, and You forgave them their sins.</td>
            <td class="coptic">Ⲁⲗⲗⲁ ⲡⲁϬⲟⲓⲥ ⲁ̀ⲣⲓⲟ̀ⲩⲓ̀ ⲛⲉⲙⲏⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲛⲓⲣⲉⲙⲚⲓⲛⲉⲩⲏ̀: ⲛⲁⲓ ⲉ̀ⲧⲁⲩⲉ̀ⲣⲙⲉⲧⲁⲛⲟⲓⲛ: ⲁⲕⲭⲁ ⲛⲟⲩⲛⲟⲃⲓ ⲛⲱⲟ̀ⲩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">لكن يا ربى إصنع معى، مثل أهل نينوى، الذين تابوا، فغفرت لهم خطاياهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">But may Your mercies, come unto me quickly, that I may proclaim with those people, with an unceasing voice.</td>
            <td class="coptic">Ⲁⲗⲗⲁ ⲙⲁⲣⲉ ⲛⲉⲕⲙⲉⲑⲛⲁⲏ̀ⲧ: ⲧⲁϩⲟⲓ ⲡⲁϬⲟⲓⲥ ϧⲉⲛ ⲟ̀ⲩⲓⲏⲥ: ⲛ̀ⲧⲁⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲡⲁⲓⲗⲁⲟ̀ⲥ: ϧⲉⲛ ⲟ̀ⲩⲥ̀ⲙⲏ ⲛ̀ⲁ̀ⲧⲭⲁⲣⲱⲥ.</td>
            <td class="arabic">لكن فلتدركنى سريعاً، مراحمك يا ربى، لأصرخ مع هذا الشعب، بصوت لا يسكت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Wherefore I entreat You, O Lord God my Savior, do not judge me, I the weak and sinful.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ϯⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ: Ⲡ̀ⲟ̅ⲥ̅ Ⲫ̀ϯ ⲡⲁⲤⲱⲧⲏⲣ: ⲙ̀ⲡⲉⲣⲓ̀ⲣⲓ ⲛ̀ⲟ̀ⲩϩⲁⲡ ⲛⲉⲙⲏⲓ: ⲁ̀ⲛⲟⲕ ϧⲁ ⲡⲓϫⲱⲃ ⲛ̀ⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ.</td>
            <td class="arabic">من أجل هذا أطلب إليك، أيها الرب الإله مخلصى، لا تحاكمنى، أنا الضعيف الخاطئ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">But rather absolve and remit, my many iniquities, as a good One and Lover of man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲁⲗⲗⲁ ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲛⲁⲡⲁⲣⲁⲡⲧⲱⲙⲁ ⲉⲧⲟ̀ϣ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">لكن حل واغفر، لى ذلاتى الكثيرة، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
secondGreatFastDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Great Fast Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second Great Fast Doxology
        <span class="coptic-caption">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ</span>
        <span class="arabic-caption">ذوكصولوجية الصوم الكيبر الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Fasting and prayer, are the salvation for our souls, purity and righteousness, they are what please God.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛ̀ⲑⲱⲟ̀ⲩ ⲡⲉ ⲡ̀ⲥⲱϯ ⲛ̀ⲛⲉⲛⲯ̀ⲩⲭⲏ: ⲡⲓⲧⲟⲩⲃⲟ ⲛⲉⲙ ϯⲙⲉⲑⲙⲏⲓ: ⲛ̀ⲑⲱⲟ̀ⲩ ⲡⲉ ϣⲁⲩⲣⲁⲛⲁϥ ⲙ̀Ⲫ̀ϯ.</td>
            <td class="arabic">الصوم والصلاة، هما خلاص نفوسنا، والطهارة والبر، هما اللذان يرضيان الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Fasting has raised Moses, up to the mountain, until he received the Law for us, from the Lord our God.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲑⲏⲉ̀ⲧⲁⲥⲱ̀ⲗⲓ: ⲙ̀Ⲙⲱⲩⲥⲏⲥ ϩⲓϫⲉⲛ ⲡⲓⲧⲱⲟ̀ⲩ: ϣⲁⲛ̀ⲧⲉϥϭⲓ ⲙ̀ⲡⲓⲚⲟⲙⲟⲥ ⲛⲁⲛ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲡ̀ⲟ̅ⲥ̅ Ⲫ̀ϯ.</td>
            <td class="arabic">الصوم هو الذى رفع، موسى على الجبل، حتى أخذ لنا الناموس، من قبل الرب الإله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Fasting has raised Elijah, up to heaven, and has saved Daniel, from the den of lions.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲑⲏⲉ̀ⲧⲁⲥⲱ̀ⲗⲓ: ⲛ̀Ⲏ̀ⲗⲓⲁⲥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲟⲩⲟϩ ⲁⲥⲛⲟϩⲉⲙ ⲛ̀Ⲇⲁⲛⲓⲏⲗ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲫ̀ⲗⲁⲕⲕⲟⲥ ⲛ̀ⲛⲓⲙⲟⲩⲓ̀.</td>
            <td class="arabic">الصوم هو الذى رفع، إيليا إلى السماء، وخلص دانيال، من جُب الأسود.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Our Lord Jesus Christ, has fasted for us, forty days and forty nights, to save us from our sins.</td>
            <td class="coptic">Ⲁ̀ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲛ̀ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ ⲛⲉⲙ ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϫⲱⲣϩ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲟⲧⲧⲉⲛ ϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">ربنا يسوع المسيح، صام عنا، أربعين يوماً وأربعين ليلة، حتى خلصنا من خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And we too should also fast, with purity and righteousness, and let us also pray, proclaiming and saying.</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲙⲁⲣⲉⲛⲉ̀ⲣⲛⲏⲥⲧⲉⲩⲓⲛ: ϧⲉⲛ ⲟ̀ⲩⲧⲟⲩⲃⲟ ⲛⲉⲙ ⲟ̀ⲩⲙⲉⲑⲙⲏⲓ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲉ̀ⲣⲡ̀ⲣⲟⲥⲉ̀ⲩⲭⲉⲥⲑⲉ: ⲉⲛⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">ونحن أيضاً فلنصُم، بطهارة وبر، ونُصلِي، صارخين قائلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">"Our Father who art in heaven, hallowed be Your name, may Your kingdom come, for Yours is the glory forever Amen." ${cross}</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ: ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟ̀ⲩⲣⲟ: ϫⲉ ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ ⲁ̀ⲙⲏⲛ. ${cross}</td>
            <td class="arabic">"أبانا الذى فى السموات، ليتقدس اسمك، ليأت ملكوتك، لأن لك المجد إلى الأبد آمين." ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
thirdGreatFastDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Third Great Fast Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Third Great Fast Doxology
        <span class="coptic-caption">Ⲁ̀ⲙⲱⲓⲛⲓ ⲁ̀ⲛⲁⲩ ⲉ̀ⲡⲉⲛⲤⲱⲧⲏⲣ</span>
        <span class="arabic-caption">ذوكصولوجية الصوم الكيبر الثالثة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Come see our Savior, the good Lover of mankind, He performed the work of fasting, with His great humility.</td>
            <td class="coptic">Ⲁ̀ⲙⲱⲓⲛⲓ ⲁ̀ⲛⲁⲩ ⲉ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲡⲓⲘⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲁϥⲓ̀ⲣⲓ ⲙ̀ⲡ̀ϩⲱⲃ ⲛ̀ϯⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲑⲉⲃⲓⲟ.</td>
            <td class="arabic">تعالوا أنظروا مخلصنا، محب البشر الصالح، صنع فعل الصوم، بتواضعه العظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He was above the high mountains, with bodily discipline, He taught us the way in order, that we may walk like Him.</td>
            <td class="coptic">Ⲥⲁⲡ̀ϣⲱⲓ ⲛ̀ⲛⲓⲧⲱⲟ̀ⲩ ⲉⲧϭⲟⲥⲓ: ϧⲉⲛ ⲟ̀ⲩⲱ̀ⲣϥ ⲛ̀ⲥⲁⲣⲕⲓⲕⲟⲛ: ⲁϥⲧⲁⲙⲟⲛ ⲉ̀ⲡⲓⲙⲁ ⲙ̀ⲙⲟϣⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛⲙⲟϣⲓ ⲙ̀ⲡⲉϥⲣⲏϯ.</td>
            <td class="arabic">فوق الجبال العالية، بإنفراد جسدي، وعلمنا المسلك، لكي نسلك مثله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He conquered the enemy's strength, his snares and his deceptions, He humiliated the tempter, before Him.</td>
            <td class="coptic">Ⲁϥⲕⲱⲣϥ ⲛ̀ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ ⲡⲓϫⲁϫⲓ: ⲛⲉⲙ ⲛⲉϥⲕⲟⲧⲥ ⲛⲉⲙ ⲛⲉϥⲕⲉⲗⲱⲓϫⲓ: ⲟⲩⲟϩ ⲡⲓⲣⲉϥⲉⲣⲡⲓⲣⲁⲍⲓⲛ: ⲁϥϭⲓϣⲓⲡⲓ ⲙ̀ⲡⲉϥⲙ̀ⲑⲟ.</td>
            <td class="arabic">أبطل قوه العدو، وحيله وحججه، وأفتضح المجرب، أمامه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">His own disciples, and holy apostles, witnessed His victory, over the enemy's snares.</td>
            <td class="coptic">Ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩϥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅: ⲉⲩⲉ̀ⲣⲙⲉⲑⲣⲉ ⲉ̀ⲡⲉϥϭⲣⲟ: ⲉ̀ϫⲉⲛ ⲛⲓⲗⲱⲓϫⲓ ⲛ̀ⲧⲉ ⲡⲓϫⲁϫⲓ.</td>
            <td class="arabic">والتلاميذ خواصه، والرسل الآطهار، شهدوا بغلبته، علي حجج العدو.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">A great and plenteous profit, is found in fasting, it purges sins and covers those, who are defiled.</td>
            <td class="coptic">Ⲟ̀ⲩⲛⲓϣϯ ⲛ̀ϩⲏⲟⲩ ⲉ̀ⲛⲁϣⲱϥ: ϥ̀ϣⲟⲡ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ: ϥ̀ⲛⲁϥⲱϯ ⲛ̀ⲛⲓⲛⲟⲃⲓ: ϥ̀ⲉ̀ⲣⲥ̀ⲕⲉⲡⲁⲍⲓⲛ ⲛ̀ⲛⲏⲉ̀ⲧϭⲁϧⲉⲙ.</td>
            <td class="arabic">ربح عظيم كثير، كائن في الصوم، يمحو الخطايا، ويستر للذين تدنسوا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Remove laziness, and take watch, seek after the love of brothers, and seek fellowship.</td>
            <td class="coptic">Ⲭⲱ ⲙ̀ϯⲙⲉⲧⲁⲙⲉⲗⲏⲥ: ⲟⲩⲟϩ ϭⲓ ⲛ̀ϯⲙⲉⲧⲓⲏⲥ: ⲕⲱϯ ⲛ̀ⲥⲁ ϯⲙⲉⲧⲙⲁⲓⲥⲟⲛ: ⲟⲩⲟϩ ϭⲟϫⲓ ⲛ̀ⲥⲁ ϯⲁ̀ⲅⲁⲡⲏ.</td>
            <td class="arabic">اتركوا الكسل، وتنشطوا، اطلبوا المحبة الأخوية، وإسعوا نحو المودة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">The perfection of humility, the truth of piety, and the forgiveness of iniquities, come from fasting.</td>
            <td class="coptic">Ⲡ̀ϫⲱⲕ ⲙ̀ⲡⲓⲑⲉⲃⲓⲟ ⲉ̀ⲃⲟⲗ: ⲟⲩⲟϩ ϯⲙⲉⲑⲙⲏⲓ ⲛ̀ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ: ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲁ̀ⲛⲟⲙⲓⲁ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲥ ⲛ̀ϯⲛⲏⲥⲧⲓⲁ.</td>
            <td class="arabic">كمال التواضع، وبر التقوي، وغفران الآثام، من قِبَل الصوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">To those who follow, fasting and prayer, swords and weapons, endure in their hands.</td>
            <td class="coptic">Ⲛⲏⲉ̀ⲑⲛⲁⲁ̀ⲙⲟⲛⲓ ⲛ̀ⲧⲟⲧⲥ: ⲛ̀ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲉ̀ⲣⲉ ϩⲁⲛⲥⲏϥⲓ ⲛⲉⲙ ϩⲁⲛϩⲟⲡⲗⲟⲛ: ⲉⲩⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲟⲩϫⲓϫ.</td>
            <td class="arabic">المتمسكون، بالصوم والصلاة دائماً، بأيديهم سيوف، وأسلحة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">O King of peace, our Lord Jesus Christ, bless fasting and all those, who perform it.</td>
            <td class="coptic">Ⲡ̀Ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ: ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲉⲣⲙⲁⲕⲁⲣⲓⲍⲓⲛ ⲛ̀ϯⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ⲟ̀ⲩⲟ̀ⲛ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩⲓ̀ⲣⲓ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">ربنا يسوع المسيح، ملك السلام، يغبط الصوم، وكل من مارسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">All kinds of evil, flee and are destroyed, through prayer and fasting, and supplications.</td>
            <td class="coptic">Ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲛⲓⲡⲟⲛⲏⲣⲟⲥ: ϣⲁⲩⲫⲱⲧ ϣⲁⲩⲧⲁⲕⲟ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ϯⲡ̀ⲣⲟⲥⲉ̀ⲩⲭⲏ: ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ.</td>
            <td class="arabic">جنس الأشرار، يهربون ويهلكون، بواسطة الصلاة، والطلبات مع الصوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Christ's martyrs, defeated the sufferings, through fasting and the patience, that comes with it.</td>
            <td class="coptic">Ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅: ⲁⲩϭⲣⲟ ⲛ̀ⲛⲓⲃⲁⲥⲁⲛⲟⲥ: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲥ ⲛ̀ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡ̀ϥⲁⲓ ⲛ̀ⲧⲉⲥϩⲩⲡⲟⲙⲟⲛⲏ.</td>
            <td class="arabic">شهداء المسيح، تغلبوا علي العذاب، بواسطة الصوم، وإحتمال صبره.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">The wise virgins, who are clothed with purity, carry their lamps full of oil, through prayer and fasting.</td>
            <td class="coptic">Ⲛⲓⲥⲁⲃⲉⲩ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ⲛⲏⲉ̀ⲧϫⲟⲗϩ ⲙ̀ⲡⲓⲧⲟⲩⲃⲟ: ⲛⲟⲩⲗⲁⲙⲡⲁⲥ ⲛⲁⲩⲙⲉϩ ⲛ̀ⲛⲉϩ: ⲉⲑⲃⲉ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ.</td>
            <td class="arabic">العذاري الحكيمات، المتسربلات بالطهارة، كانت مصابيحهن مملوءة زيتاً، بالصلاة والصوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Those who please the Lord God, with their good works, love the beauty of fasting, and the patience that comes with it.</td>
            <td class="coptic">Ⲛⲏⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ ⲙ̀Ⲡ̀ⲟ̅ⲥ̅ Ⲫ̀ϯ: ϧⲉⲛ ⲛⲟⲩϩ̀ⲃⲏⲟ̀ⲩⲓ̀ ⲉⲑⲛⲁⲛⲉⲩ: ⲁⲩⲙⲉⲛⲣⲉ ⲡ̀ⲥⲁⲓ ⲛ̀ϯⲛⲏⲥⲧⲓⲁ: ⲛⲉⲙ ⲡ̀ⲥⲁⲓ ⲛ̀ⲧⲉⲥϩⲩⲡⲟⲙⲟⲛⲏ.</td>
            <td class="arabic">الذين أرضوا الرب الإله، بأعمالهم الصالحة، أحبوا بهاء الصوم، وإحتمال صبره.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">David proclaimed, in the holy psaltery saying, "I will decorate my soul, before You with fasting."</td>
            <td class="coptic">Ⲁϥⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ: ϧⲉⲛ ⲡⲓⲯ̀ⲁⲗⲧⲏⲣⲓⲟⲛ ⲉ̅ⲑ̅ⲩ̅: ϫⲉ ϯⲛⲁⲕⲟⲗϫ ⲛ̀ⲧⲁⲯ̀ⲩⲭⲏ: ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ϧⲉⲛ ⲟ̀ⲩⲛⲏⲥⲧⲓⲁ.</td>
            <td class="arabic">صرخ داود في سفر، المزامير المقدس قائلاً، "إني أحنيت نفسي، أمامك بالصوم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Paul the Apostle, the perfume-tongue says, "In fasting and watchfulness, through the days and nights."</td>
            <td class="coptic">Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲟⲩⲟϩ ⲫ̀ⲗⲁⲥ ⲙ̀ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ: ϫⲉ ϧⲉⲛ ⲟ̀ⲩⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲟ̀ⲩϣ̀ⲣⲱⲓⲥ: ϧⲉⲛ ϩⲁⲛⲉ̀ϩⲟⲟ̀ⲩ ⲛⲉⲙ ϩⲁⲛⲉ̀ϫⲱⲣϩ.</td>
            <td class="arabic">وبولس الرسول، لسان العطر يقول، "إني بصوم وسهر، في الأيام والليالي."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">"Our Father who art in heaven, hallowed be Your name, may Your kingdom come, for Yours is the glory forever Amen." ${cross}</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ: ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟ̀ⲩⲣⲟ: ϫⲉ ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ ⲁ̀ⲙⲏⲛ. ${cross}</td>
            <td class="arabic">"أبانا الذى فى السموات، ليتقدس إسمك، ليأت ملكوتك، لأن لك المجد إلى الأبد آمين." ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
fourthGreatFastDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Fourth Great Fast Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Fourth Great Fast Doxology
        <span class="coptic-caption">ⲠⲓⲘⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية الصوم الكيبر الرابعة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">O good Lover of mankind, my Master Jesus, I entreat You not to put me on Your left, with the goats the sinners.</td>
            <td class="coptic">ⲠⲓⲘⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲡⲁⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ϯϯϩⲟ ⲉ̀ⲣⲟⲕ: ⲙ̀ⲡⲉⲣϩⲓⲧ ⲥⲁϫⲁϭⲏ ⲙ̀ⲙⲟⲕ: ⲛⲉⲙ ⲛⲓⲃⲁⲉ̀ⲙⲡⲓ ⲛ̀ⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ.</td>
            <td class="arabic">يا سيدي يسوع محب البشر، الصالح أسألك، لا تطرحني علي شمالك، مع الجداء الخطاة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Also do not say to me, "I do not know you, go away from Me, you who is prepared for the everlasting fire."</td>
            <td class="coptic">Ⲟ̀ⲩⲇⲉ ⲟⲛ ⲙ̀ⲡⲉⲣϫⲟⲥ ⲛⲏⲓ: ϫⲉ ϯⲥⲱⲟ̀ⲩⲛ ⲙ̀ⲙⲟⲕ ⲁⲛ: ⲙⲁϣⲉⲛⲁⲕ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ: ⲫⲏⲉ̀ⲧⲥⲉⲃⲧⲱⲧ ⲙ̀ⲡⲓⲭ̀ⲣⲱⲙ ⲛ̀ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">ولا تقل لي أيضاً، "إني ما أعرفك، إذهب عني أيها المعد، للنار الأبدية."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">I know indeed, that I am a sinner, and that all my evil deeds, are manifested before You.</td>
            <td class="coptic">Ϯⲉ̀ⲙⲓ ⲅⲁⲣ ϧⲉⲛ ⲟ̀ⲩⲙⲉⲑⲙⲏⲓ: ϫⲉ ⲁ̀ⲛⲟⲕ ⲟ̀ⲩⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ: ⲟⲩⲟϩ ⲛⲁϩ̀ⲃⲏⲟ̀ⲩⲓ̀ ⲧⲏⲣⲟⲩ ⲉⲧϩⲱⲟ̀ⲩ: ⲥⲉⲟ̀ⲩⲱ̀ⲛϩ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ.</td>
            <td class="arabic">لأني أعلم بالحقيقة، إني خاطئ، وأعمالي الرديئة كلها، ظاهرة أمامك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">I speak with, the tax collector´s voice, proclaiming and saying, "O God forgive me, I am the sinner."</td>
            <td class="coptic">Ϯϫⲱ ⲛ̀ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ ⲡⲓⲧⲉⲗⲱⲛⲏⲥ: ⲉⲓⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲉⲓϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ Ⲫ̀ϯ ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ: ϫⲉ ⲁ̀ⲛⲟⲕ ⲟ̀ⲩⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ.</td>
            <td class="arabic">أقول بصوت العشار، صارخاً قائلاً، "اللهم اغفر لي، أنا الخاطئ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">I have sinned I have sinned, O my Lord Jesus forgive me, for there is no servant without sin, nor master without forgiveness.</td>
            <td class="coptic">Ⲁⲓⲉ̀ⲣⲛⲟⲃⲓ ⲁⲓⲉ̀ⲣⲛⲟⲃⲓ: ⲡⲁⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ ⲭⲱ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ: ϫⲉ ⲙ̀ⲙⲟⲛ ⲃⲱⲕ ⲛ̀ⲁ̀ⲧⲉ̀ⲣⲛⲟⲃⲓ: ⲟ̀ⲩⲇⲉ ⲙ̀ⲙⲟⲛ ϭ̀ⲟⲓⲥ ⲛ̀ⲁ̀ⲧⲭⲱ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">أخطأت أخطأت، يا ربي يسوع اغفر لي، لأنه ليس عبد بلا خطية، ولا سيد بلا مغفرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">O Lord grant me repentance, that I may repent, before death closes my mouth, at the doors of Hades.</td>
            <td class="coptic">Ⲙⲟⲓ ⲛⲏⲓ Ⲡ̀ⲟ̅ⲥ̅ ⲛ̀ⲟ̀ⲩⲙⲉⲧⲁⲛⲟⲓⲁ: ⲉ̀ⲡ̀ϫⲓⲛⲧⲁⲉ̀ⲣⲙⲉⲧⲁⲛⲟⲓⲛ: ⲙ̀ⲡⲁⲧⲉ ⲫ̀ⲙⲟⲩ ⲙⲁϣ̀ⲑⲁⲙ ⲛ̀ⲣⲱⲓ: ϧⲉⲛ ⲛⲓⲡⲩⲗⲏ ⲛ̀ⲧⲉ Ⲁ̀ⲙⲉⲛϯ.</td>
            <td class="arabic">أعطني يا رب توبة، لكي أتوب، قبل أن يسد الموت فمي، في أبواب الجحيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Also give me an answer, for all what I have done, O just Judge Jesus, who will judge me.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲟⲛ ⲛ̀ⲧⲁϯⲗⲟⲅⲟⲥ: ϧⲁ ⲛⲁⲓ ⲧⲏⲣⲟⲩ ⲉ̀ⲧⲁⲓⲁ̀ⲓⲧⲟⲩ: ⲡⲓⲔ̀ⲣⲓⲧⲏⲥ ⲙ̀ⲙⲏⲓ Ⲓⲏ̅ⲥ̅: ⲛ̀ⲑⲟϥ ⲉⲑⲛⲁϯϩⲁⲡ ⲉ̀ⲣⲟⲓ.</td>
            <td class="arabic">ولكي أعطي أيضاً جواباً، عن كل ما فعلته، يسوع القاضي العادل، هو يُدينَني.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Compassionate is my Savior, who have compassion upon His people, as a good One and Lover of mankind, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲟ̀ⲩⲢⲉϥϣⲉⲛϩⲏⲧ ⲡⲉ ⲡⲁⲤⲱⲧⲏⲣ: ⲉϥⲉ̀ϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉϥⲗⲁⲟ̀ⲥ: ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">رؤوف هو مخلصي، يترأف علي شعبه، كصلاح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
fifthGreatFastDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Fifth Great Fast Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Fifth Great Fast Doxology
        <span class="coptic-caption">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ</span>
        <span class="arabic-caption">ذوكصولوجية الصوم الكيبر الخامسة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Fasting and prayer, in purity and chastity, and love without shame, are what please Christ.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ϧⲉⲛ ⲟ̀ⲩⲧⲟⲩⲃⲟ ⲛⲉⲙ ⲟ̀ⲩⲙⲉⲧⲥⲉⲙⲛⲟⲥ: ⲛⲉⲙ ⲟ̀ⲩⲁ̀ⲅⲁⲡⲏ ⲛ̀ⲁ̀ⲧⲇⲟⲗⲟⲥ: ⲛⲁⲓ ⲛⲉ ⲛⲏⲉ̀ϣⲁⲩⲣⲁⲛⲁϥ ⲙ̀Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">الصوم والصلاة، بطهارة وعفاف، ومحبة بغير غش، هما اللذان يرضيان المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Fasting and prayer, with weeping and mourning, and unpretentious love, are what please the sinless One.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ϧⲉⲛ ⲟ̀ⲩⲛⲉϩⲡⲓ ⲛⲉⲙ ⲟ̀ⲩⲣⲓⲙⲓ: ⲛⲉⲙ ⲟ̀ⲩⲁ̀ⲅⲁⲡⲏ ⲛ̀ⲁ̀ⲧⲙⲉⲧϣⲟⲃⲓ: ⲛⲁⲓ ⲛⲉ ⲛⲏⲉ̀ϣⲁⲩⲣⲁⲛⲁϥ ⲙ̀ⲡⲓⲀ̀ⲑⲛⲟⲃⲓ.</td>
            <td class="arabic">الصوم والصلاة، بنحيب وبكاء، ومحبة بغير رياء، هما اللذان يرضيان الذى بلا خطية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Fasting and prayer, with a humbled heart, and a contrite spirit, are what please the holy One.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ϧⲉⲛ ⲟ̀ⲩϩⲏⲧ ⲉϥⲑⲉⲃⲓⲏⲟⲩⲧ: ⲛⲉⲙ ⲟ̀ⲩⲡ̀ⲛⲉⲩⲙⲁ ⲉϥⲧⲉⲛⲛⲏⲟⲩⲧ: ⲛⲁⲓ ⲛⲉ ⲛⲏⲉ̀ϣⲁⲩⲣⲁⲛⲁϥ ⲙ̀ⲫⲏⲉ̀ⲧⲧⲟⲩⲃⲏⲟⲩⲧ.</td>
            <td class="arabic">الصوم والصلاة، بقلب متواضع، وروح منسحق، هما اللذان يرضيان الطاهر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Fasting and prayer, saved the three saintly children, Shedrach Meshach and Abednego, from the fiery furnace.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛⲏⲉ̀ⲧⲁⲩⲛⲟϩⲉⲙ ⲙ̀ⲡⲓϣⲟⲙⲧ ⲛ̀ⲁ̀ⲗⲟⲩ ⲛ̀ⲁ̀ⲅⲓⲟⲥ: Ⲥⲉⲇⲣⲁⲕ Ⲙⲓⲥⲁⲕ Ⲁⲃⲇⲉⲛⲁⲅⲱ: ⲉ̀ⲃⲟⲗϧⲉⲛ ϯϩ̀ⲣⲱ ⲛ̀ⲥⲁⲧⲉ.</td>
            <td class="arabic">الصوم والصلاة، هما اللذان خلصا الثلاثه فتية القديسين، سدراك وميساك وأبدناغو، من أتون اللهيب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Fasting and prayer, are the weapons of victory, by which the Christians abide, through this life.</td>
            <td class="coptic">Ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛ̀ⲑⲱⲟ̀ⲩ ⲡⲉ ⲡ̀ϩⲟⲡⲗⲟⲛ ⲙ̀ⲡⲓϭⲣⲟ: ⲛ̀ⲑⲱⲟ̀ⲩ ⲛⲉ ⲛⲏⲉ̀ⲧⲟⲩⲙⲟϣⲓ ⲛ̀ϧⲏⲧⲟⲩ: ⲛ̀ϫⲉ ⲛⲓⲬ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ.</td>
            <td class="arabic">الصوم والصلاة، هما سلاح الغلبة، وهما اللذان يسلك، فيهما المسيحيون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Through fasting and prayer, Abraham was made worthy, to host God, with His holy angels.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲁϥⲉ̀ⲣⲡ̀ⲉ̀ⲙⲡ̀ϣⲁ ⲛ̀ϫⲉ Ⲁⲃⲣⲁⲁⲙ: ⲉⲑⲣⲉ Ⲫ̀ϯ ϫⲱⲓⲗⲓ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲉϥⲁ̀ⲅⲅⲉⲗⲟⲥ ⲉ̅ⲑ̅ⲩ̅.</td>
            <td class="arabic">الصوم والصلاة، إستحق إبراهيم، أن يضيف الله عنده، مع ملائكته الأطهار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Through fasting and prayer, Isaac was offered up, as a pure sacrifice, as a sign of Christ.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲁϥⲓ̀ⲛⲓ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀Ⲓ̀ⲥⲁⲁⲕ: ⲛ̀ⲟ̀ⲩⲑⲩⲥⲓⲁ ⲉⲥⲧⲟⲩⲃⲏⲟⲩⲧ: ⲁϥϯⲙⲏⲓⲛⲓ ⲉ̀Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">بالصوم والصلاة، أصعد أسحق، ذبيحة طاهرة معطياً إشاره للمسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Through fasting and prayer, Jacob was saved, from his brother Esau, and received the blessing from his father.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲁϥⲛⲟϩⲉⲙ ⲛ̀ϫⲉ Ⲓⲁⲕⲱⲃ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉϥⲥⲟⲛ Ⲏ̀ⲥⲁⲩ: ⲟⲩⲟϩ ⲁϥϭⲓ ⲛ̀ⲟ̀ⲩⲥ̀ⲙⲟⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">بالصوم والصلاة، خلص يعقوب، من عيسو أخيه، وأخذ بركة من أبيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Through fasting and prayer, the Lord had compassion on His servant, the good and righteous Job, He granted him healing.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲁ̀ Ⲡ̀ⲟ̅ⲥ̅ ϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉϥⲃⲱⲕ: ⲡⲓⲁ̀ⲅⲁⲑⲟⲥ Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ: ⲟⲩⲟϩ ⲁϥϯ ⲛⲁϥ ⲛ̀ⲟ̀ⲩⲧⲁⲗϭⲟ.</td>
            <td class="arabic">بالصوم والصلاة، تراءف الرب على عبده، الصالح البار أيوب، ومنحه الشفاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Through fasting and prayer, Joseph was raised, and ruled over Egypt, and was saved from the adulteress.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲁⲩⲱ̀ⲗⲓ ⲛ̀Ⲓⲱⲥⲏⲫ: ⲁϥⲉ̀ⲣⲟ̀ⲩⲣⲟ ⲉ̀ϫⲉⲛ Ⲭⲏⲙⲓ: ⲟⲩⲟϩ ⲁⲩⲛⲟϩⲉⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ ϯⲡⲟⲣⲛⲏ.</td>
            <td class="arabic">بالصوم والصلاة، أرتفع يوسف، وملك على مصر، وخلص من الزانية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Through fasting and prayer, God lifted His wrath, from the people of Nineveh, and forgave them their sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲁ̀ Ⲫ̀ϯ ⲱ̀ⲗⲓ ⲙ̀ⲡⲉϥϫⲱⲛⲧ: ⲉ̀ⲃⲟⲗϩⲁ ⲛⲓⲣⲉⲙⲚⲓⲛⲉⲩⲏ̀: ⲟⲩⲟϩ ⲁϥⲛⲁϩⲙⲟⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲟⲩⲛⲟⲃⲓ.</td>
            <td class="arabic">بالصوم والصلاة، رفع الله غضبه، عن أهل نينوى، وخلصهم من خطاياهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">Through fasting and prayer, the prophets and the righteous, all have prophesied, concerning Him in many ways.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ: ⲁⲩⲉ̀ⲣⲡ̀ⲣⲟⲫⲏⲉⲧⲩⲓⲛ ⲧⲏⲣⲟⲩ: ⲉⲑⲃⲏⲧϥ ϧⲉⲛ ⲟ̀ⲩⲑⲟ ⲛ̀ⲣⲏϯ.</td>
            <td class="arabic">بالصوم والصلاة، تنبأ جميع الأنبياء، والأبرار من أجله، بإنواع كثيرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">Through fasting and prayer, He sent the saintly apostles, to preach, to the whole world.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲁ̀ⲅⲓⲟⲥ: ⲁϥⲟ̀ⲩⲟ̀ⲣⲡⲟⲩ ⲉⲩⲉ̀ⲣⲕⲩⲣⲓⲍⲓⲛ: ϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ.</td>
            <td class="arabic">بالصوم والصلاة، أرسل الرسل القديسين، ليكرزوا فى، جميع المسكونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">Through fasting and prayer, God has revealed, great mysteries to, the cross-bearers and the just.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛⲓⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲛⲁⲓ ⲁ̀Ⲫ̀ϯ ϭⲱⲣⲡ ⲛⲱⲟ̀ⲩ: ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ.</td>
            <td class="arabic">بالصوم والصلاة، كشف الله أسراراً، عظيمة للصديقون، ولابسى الصليب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Through fasting and prayer, the struggling martyrs, wore the unfading, crown of martyrdom.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ: ⲛⲓⲁ̀ⲑⲗⲏⲧⲏⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲁⲩⲉ̀ⲣⲫⲟⲣⲓⲛ ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁ̀ⲧⲗⲱⲙ: ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic">بالصوم والصلاة، نال الشهداء، المجاهدون، الأكليل غير المضمحل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Daniel fasted, and closed the mouths of the lions, they did not touch his body, because of prayer and fasting.</td>
            <td class="coptic">Ⲇⲁⲛⲓⲏⲗ ⲁϥⲉ̀ⲣⲛⲏⲥⲧⲉⲩⲓⲛ: ⲁϥϣ̀ⲑⲁⲙ ⲛ̀ⲣⲱⲟ̀ⲩ ⲛ̀ⲛⲓⲙⲟⲩⲓ̀: ⲙ̀ⲡⲟⲩϭⲓⲛⲉⲙ ⲡⲉϥⲥⲱⲙⲁ: ⲉⲑⲃⲉ ⲡⲓϣ̀ⲗⲏⲗ ⲛⲉⲙ ϯⲛⲏⲥⲧⲓⲁ.</td>
            <td class="arabic">صام دانيال، فأغلق أفواه الأسد، فلم تمس جسده، من أجل الصلاة والصوم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Our good Savior fasted, forty days and forty nights, to teach us the way, that we may be saved through.</td>
            <td class="coptic">ⲠⲉⲛⲤⲱⲧⲏⲣ ⲁϥⲉ̀ⲣⲛⲏⲥⲧⲉⲩⲓⲛ: ⲛ̀ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ ⲛⲉⲙ ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϫⲱⲣϩ: ϣⲁⲛ̀ⲧⲉϥⲧ̀ⲥⲁⲃⲟⲛ ⲙ̀ⲡⲓⲙⲱⲓⲧ: ⲉ̀ⲧⲉⲛⲛⲁⲟ̀ⲩϫⲁⲓ ⲉ̀ⲃⲟⲗϩⲓⲧⲟⲧϥ.</td>
            <td class="arabic">صام مخلصنا، أربعين يوماً وأربعين ليلة، حتى علمنا الطريق، التى نخلص بواسطتها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english">Let us pray and fast, with purity and righteousness, with thoughts of love, proclaiming and saying.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛϣ̀ⲗⲏⲗ ⲛ̀ⲧⲉⲛⲉ̀ⲣⲛⲏⲥⲧⲉⲩⲓⲛ: ϧⲉⲛ ⲟ̀ⲩⲙⲉⲑⲙⲏⲓ ⲛⲉⲙ ⲟ̀ⲩⲧⲟⲩⲃⲟ: ⲟ̀ⲩⲙⲉⲩⲓ̀ ⲛⲉⲙ ⲟ̀ⲩⲁ̀ⲅⲁⲡⲏ: ⲉⲛⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">فالنصم ونصلى، ببر وطهارة، وضمير ومحبة، صارخين قائلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english">Our Father who art in heaven, who knows my thoughts, remember me in Your kingdom, according to Your mercy.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲫⲏⲉ̀ⲧⲥⲱⲟ̀ⲩⲛ ⲛ̀ⲛⲁⲙⲉⲩⲓ̀: ⲕⲁⲧⲁ ⲡⲉⲕⲛⲁⲓ ⲁ̀ⲣⲓⲡⲁⲙⲉⲩⲓ̀: ⲛ̀ϩ̀ⲣⲏⲓ ϧⲉⲛ ⲑ̀ⲙⲉⲧⲟ̀ⲩⲣⲟ ⲛ̀ⲛⲓⲫⲏⲟ̀ⲩⲓ̀.</td>
            <td class="arabic">أبانا الذى فى السموات، العارف أفكارى، أذكرنى فى ملكوت، السموات كرحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english">Our Father who art in heaven, hallowed be Your name, may Your kingdom come, for Yours is the glory and the honor.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ: ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟ̀ⲩⲣⲟ: ϫⲉ ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ.</td>
            <td class="arabic">أبانا الذى فى السموات، ليتقدس اسمك، ليأت ملكوتك، لأن لك المجد والإكرام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english">Our Father who art in heaven, who carries the sin of the world, do not lead us into temptation, but deliver us from the evil one.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ: ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲓⲡⲟⲛⲏⲣⲟⲥ.</td>
            <td class="arabic">أبانا الذى فى السموات، يا حامل خطية العالم، لا تدخلنا فى تجربة، لكن نجنا من الشرير.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english">Our Father who art in heaven, let us hear the voice of joy, O You who carries the sin of the world, who is blessed with His good Father.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲉⲕⲉ̀ⲑⲣⲉⲛⲥⲱⲧⲉⲙ ⲉ̀ⲡⲓϧ̀ⲣⲱⲟ̀ⲩ ⲙ̀ⲡⲓⲣⲁϣⲓ: ⲫⲏⲉⲧⲱ̀ⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟ̀ⲩⲧ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">أبانا الذى فى السموات، أسمعنا صوت الفرح، يا حامل الخطية المبارك، مع أبيك الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english">Our Father who art in heaven, have mercy upon us, according to Your great mercy, and grant us the Spirit of the prophets.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ: ⲟⲩⲟϩ ⲙⲟⲓ ⲛⲁⲛ ⲙ̀ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ: ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">أبانا الذى فى السموات، إرحمنا كعظيم رحمتك، وأعطنا، روح الأنبياء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english">Our Father who art in heaven, we praise You O good One, proclaiming and saying, "Holy, O God."</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲱ̀ ⲡⲓⲀ̀ⲅⲁⲑⲟⲥ: ⲉⲛⲱ̀ϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟ̀ⲥ.</td>
            <td class="arabic">أبانا الذى فى السموات، نسبحك أيها الصالح، صارخين قائلين، قدوس الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english">Our Father who art in heaven, forgive us, our sinful thoughts, through Your love for mankind.</td>
            <td class="coptic">Ϫⲉ ⲡⲉⲛⲒⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟ̀ⲩⲓ̀: ⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲙⲉⲩⲓ̀: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲣⲉϥⲉ̀ⲣⲛⲟⲃⲓ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">أبانا الذى فى السموات، إغفر أفكارنا الخاطئة، من قبل محبتك، للبشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english">Yes O our Master, hear us and be with us, we who are not worthy, to entreat Your name.</td>
            <td class="coptic">Ⲥⲉ ⲡⲉⲛⲚⲏⲃ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ: ⲟⲩⲟϩ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲏⲉ̀ⲧⲉ̀ⲙⲡ̀ϣⲁ ⲁⲛ: ⲉⲑⲣⲉⲛⲧⲱⲃϩ ⲟ̀ⲩⲃⲉ ⲡⲉⲕⲣⲁⲛ.</td>
            <td class="arabic">نعم يا سيدنا إسمعنا، وكن معنا، نحن غير المستحقين، أن نتضرع إلى إسمك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english">Yes O our Master the Compassionate, who have treasures of mercy, do not abandon us with the ignorant, and the vain evil thoughts.</td>
            <td class="coptic">Ⲥⲉ ⲡⲉⲛⲚⲏⲃ ⲡⲓⲢⲉϥϣⲉⲛϩⲏⲧ: ⲫⲁ ⲛⲓⲁ̀ϩⲱⲣ ⲛ̀ϯⲙⲉⲑⲛⲁⲏ̀ⲧ: ⲙ̀ⲡⲉⲣⲭⲁⲛ ϧⲉⲛ ⲛⲓⲙⲉⲧⲁ̀ⲧϩⲏⲧ: ⲛⲉⲙ ⲛⲓⲙⲉⲩⲓ̀ ⲉⲧϩⲱⲟ̀ⲩ ⲛ̀ϣⲟⲩⲓⲧ.</td>
            <td class="arabic">نعم يا سيدنا الرؤوف، صاحب كنوز التحنن، لا تتركنا فى الجهلات، والأفكار الرديئة الباطلة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english">Yes O our Master accept us to You, and grant us our Christian perfection, that pleases You and, an inheritance with all Your saints.</td>
            <td class="coptic">Ⲥⲉ ⲡⲉⲛⲚⲏⲃ ϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ⲙⲟⲓ ⲛⲁⲛ ⲙ̀ⲡⲉⲛϫⲱⲕ ⲛ̀Ⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ: ⲉϥⲣⲁⲛⲁⲕ ⲛⲉⲙ ⲟ̀ⲩⲕ̀ⲗⲏⲣⲟⲥ: ⲛⲉⲙ ⲛⲏⲉ̅ⲑ̅ⲩ̅ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁⲕ.</td>
            <td class="arabic">نعم يا سيدنا إقبلنا إليك، وأعطنا كمالاً، مسيحياً يرضيك ونصيباً، مع جميع قديسيك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="north">
            <td class="english">Yes O our Master accept us to You, and grant us joy to our souls, through the remembrance of Your name, O our Lord Jesus Christ.</td>
            <td class="coptic">Ⲥⲉ ⲡⲉⲛⲚⲏⲃ ϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ: ⲙⲁ ⲡ̀ⲟ̀ⲩⲛⲟϥ ⲛ̀ⲛⲉⲛⲯ̀ⲩⲭⲏ: ϩⲓⲧⲉⲛ ⲡ̀ⲉ̀ⲣⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ: ⲱ̀ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">نعم يا سيدنا إقبلنا إليك، وأعط فرحاً لنفوسنا، من قبل تذكار إسمك، يا ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="south">
            <td class="english">Yes O our Master, accept us to You, You are truly worthy of the glory, and honor with Your good Father.</td>
            <td class="coptic">Ⲥⲉ ⲡⲉⲛⲚⲏⲃ ϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ: ⲇⲓⲕⲉⲱ̀ⲥ ⲕ̀ⲉ̀ⲙⲡ̀ϣⲁ: ⲙ̀ⲡ̀ⲱ̀ⲟ̀ⲩ ⲛⲉⲙ ⲡ̀ⲧⲁⲓⲟ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">نعم يا سيدنا إقبلنا إليك، بالحقيقة أنت مستحق، المجد والإكرام، مع أبيك الصالح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="north">
            <td class="english">Yes O our Master who is of authority, we praise You with hymns, we worship You in the churches, from now and to the end.</td>
            <td class="coptic">Ⲥⲉ ⲡⲉⲛⲚⲏⲃ ⲫⲁ ϯⲉ̀ⲝⲟⲩⲥⲓⲁ: ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ϧⲉⲛ ⲛⲓⲉ̀ⲩⲫⲟⲙⲓⲁ: ⲧⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟⲕ ϧⲉⲛ ⲛⲓⲉ̀ⲕⲕⲗⲏⲥⲓⲁ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ϣⲁ ϯⲥⲩⲛⲧⲉⲗⲓⲁ.</td>
            <td class="arabic">نعم يا سيدنا يا ذا السلطان، نسبحك بالمدائح، ونسجد لك فى الكنائس، من الآن وإلى الإنقضاء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="south">
            <td class="english">Then our mouths will not get tired, and our tongues will not be silent, when we declare the honor, of fasting and prayer.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲛⲁϧⲓⲥⲓ ⲁⲛ: ⲟⲩⲟϩ ⲡⲉⲛⲗⲁⲥ ⲛⲁⲭⲁⲣⲱϥ ⲁⲛ: ⲉⲛⲥⲁϫⲓ ⲙ̀ⲡ̀ⲧⲁⲓⲟ: ⲛ̀ⲧⲉ ϯⲛⲏⲥⲧⲓⲁ ⲛⲉⲙ ⲡⲓϣ̀ⲗⲏⲗ.</td>
            <td class="arabic">حينئذ لا يتعب فمنا، ولا يسكت لساننا، إذ ننطق بكرامة، الصوم والصلاة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="north">
            <td class="english">Lord have mercy Lord have mercy, upon us Your creation save us, and have mercy upon all of us, O heavenly King.</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ: ⲁ̀ⲛⲟⲛ ϧⲁ ⲡⲉⲕⲡ̀ⲗⲁⲥⲙⲁ ⲥⲟⲧⲧⲟⲛ: ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ ⲧⲏⲣⲉⲛ: ⲱ̀ ⲡⲓⲞ̀ⲩⲣⲟ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">يا رب إرحم يا رب إرحم، نحن جبلتك خلصنا، وإرحمنا كلنا، أيها الملك السمائى.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_33" class="south">
            <td class="english">Lord have mercy Lord have mercy, perfect us in the upright faith, and also make us worthy, to partake of Your sacraments.</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ: ϫⲟⲕⲧⲉⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉ̀ⲙⲡ̀ϣⲁ ⲗⲟⲓⲡⲟⲛ ⲉⲑⲣⲉⲛϭⲓ: ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲕⲙⲩⲥⲧⲏⲣⲓⲟⲛ.</td>
            <td class="arabic">يا رب إرحم يا رب إرحم، كملنا فى الإيمان المستقيم، وأجعلنا أيضاً مستحقين، أن نتناول من أسرارك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_34" class="north">
            <td class="english">Lord have mercy Lord have mercy, do not take away Your mercy from us, nor Your Spirit of comfort, but have patience with us.</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ: ⲙ̀ⲡⲉⲣⲱ̀ⲗⲓ ⲙ̀ⲡⲉⲕⲛⲁⲓ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲛ: ⲟ̀ⲩⲇⲉ ⲠⲉⲕⲠ̀ⲛⲉⲩⲙⲁ ⲙ̀Ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲁⲗⲗⲁ ⲱ̀ⲟ̀ⲩⲛ̀ϩⲏⲧ ⲉ̀ϫⲱⲛ.</td>
            <td class="arabic">يا رب إرحم يا رب إرحم، لا تنزع عنا رحمتك، ولا روحك المعزى، بل تأن علينا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english">Let us worship our Savior, the good Lover of mankind, because He had compassion on us, He came and saved us. ${cross}</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛⲟ̀ⲩⲱ̀ϣⲧ ⲙ̀ⲡⲉⲛⲤⲱⲧⲏⲣ: ⲡⲓⲘⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ϫⲉ Ⲛ̀ⲑⲟϥ ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">فلنسجد لمخلصنا، الصالح محب البشر، لأنه ترأف علينا، أتى وخلصنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofAnnunciationDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Annunciation Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Annunciation Doxology
        <span class="coptic-caption">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ</span>
        <span class="arabic-caption">ذوكصولوجية عيد البشارة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The Father looked down from heaven, to those who dwell on the earth, He found no one like, Mary the Virgin.</td>
            <td class="coptic">Ⲁ̀ Ⲫ̀ⲓⲱⲧ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧϣⲟⲡ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲙ̀ⲡⲉϥϫⲉⲙ ⲫⲏⲉⲧⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲥ: ⲙ̀Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">تطلع الآب من السماء، على سكان الأرض، فلم يجد من يُشبه، مريم العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He sent her Gabriel, the great archangel, to announce to her with joy, in this manner saying.</td>
            <td class="coptic">Ⲁϥⲟⲩⲱⲣⲡ ϣⲁⲣⲟⲥ ⲛ̀Ⲅⲁⲃⲣⲓⲏⲗ: ⲡⲓⲛⲓϣϯ ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: ⲁϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲥ ⲛ̀ⲟⲩⲣⲁϣⲓ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">أرسل إليها غبريال، رئيس الملائكة العظيم، فبشرها بفرح، قائلاً هكذا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">"Hail to you O full of grace, the Lord is with you, you have found grace, before God the Father.</td>
            <td class="coptic">Ϫⲉ ⲭⲉⲣⲉ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲟⲩⲟϩ Ⲡ̀ϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ: ⲁ̀ⲣⲉϫⲓⲙⲓ ⲅⲁⲣ ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ: ϧⲁⲧⲉⲛ Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">"السلام للممتلئة نعمة، الرب معكِ، وجدتِ نعمة، عند الله الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Behold you will conceive, and give birth to a Son, He will be called Jesus, the Son of the Most High.</td>
            <td class="coptic">Ϩⲏⲡⲡⲉ ⲅⲁⲣ ⲧⲉⲣⲁⲉⲣⲃⲟⲕⲓ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲙⲓⲥⲓ ⲛ̀Ⲟⲩϣⲏⲣⲓ: ⲉⲩⲉ̀ⲙⲟⲩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ ϫⲉ Ⲓⲏⲥⲟⲩⲥ: Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫⲏⲉⲧϭⲟⲥⲓ.</td>
            <td class="arabic">لأنكِ ها ستحبلين، وتلدين إبناً، ويدعى إسمه يسوع، إبن العليْ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The Lord God will give Him, the throne of His father David, and He will reign over Jacob´s house, forever and ever.</td>
            <td class="coptic">Ⲉϥⲉ̀ϯ ⲛⲁϥ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ: ⲙ̀ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ Ⲇⲁⲩⲓⲇ ⲡⲉϥⲓⲱⲧ: ϥ̀ⲛⲁⲉⲣⲟⲩⲣⲟ ⲉ̀ϫⲉⲛ ⲡ̀ⲏⲓ ⲛ̀Ⲓⲁⲕⲱⲃ: ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">ويعطيه الرب الإله، كرسي داود أبيه، ويملك على بيت يعقوب، إلى أبد الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">And also His kingdom, will have no end, and after He was born from you, you will remain a virgin."</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲛ̀ⲛⲁⲉⲣϧⲁⲉ̀: ϣⲱⲡⲓ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ: ⲟⲩⲟϩ ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲙⲁⲥϥ: ⲉ̀ⲣⲉⲟ̀ϩⲓ ⲉ̀ⲣⲉⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">ولا يكون، لملكه نهاية، وبعد أن تلديه، تظلي عذراء."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">The Virgin Mary answered, "Behold the maidservant of the Lord, let it be to me according to your word," and the angel departed.</td>
            <td class="coptic">Ⲡⲉϫⲉ Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ⲁ̀ⲛⲟⲕ ⲓⲥ ϯⲃⲱⲕⲓ ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ: ⲉⲥⲉ̀ϣⲱⲡⲓ ⲕⲁⲧⲁ ⲡⲉⲕⲥⲁϫⲓ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">فأجابت مريم العذراء، "هوذا أنا أمة للرب، ليكن لي كقولك،" فمضى الملاك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">We worship You O Christ, for You have loved our race, and came to the Virgin´s womb, and was incarnate from her.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁⲕⲙⲁⲓ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ: ⲁⲕⲓ̀ ⲉ̀ⲑ̀ⲙⲏⲧⲣⲁ ⲛ̀Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲁⲕϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ.</td>
            <td class="arabic">نسجد لك أيها المسيح، لأنك أحببت جنسنا، وأتيت إلى بطن العذراء، وتجسدت منها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Alleluia (4), Jesus Christ the Son of God, was incarnate from the Virgin.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (ⲇ̅): Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">هلليلويا (4)، يسوع المسيح إبن الله، تجسد من العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
//Said Before Doxologies for the Martyrs
lazarusSaturdayDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Lazarus Saturday Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Lazarus Saturday Doxology
        <span class="coptic-caption">Ⲗⲁⲍⲁⲣⲟⲥ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية سبت لعازر</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Lazarus the bishop, the beloved of Christ, who was risen from the dead, after four days.</td>
            <td class="coptic">Ⲗⲁⲍⲁⲣⲟⲥ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲫⲏⲉ̀ⲧⲁϥⲧⲟⲩⲛⲟⲥϥ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓϥ̀ⲧⲟⲟⲩ ⲛ̀ⲉ̀ϩⲟⲟⲩ.</td>
            <td class="arabic">لعازر الأسقف، حبيب المسيح، الذي أقامه من الأموات، بعد أربعة أيام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">And he lived for forty years, and became a bishop, on the throne of Cyprus, and tended the flock of Christ</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥⲱⲛϧ ⲛ̀ϩ̀ⲙⲉ ⲛ̀ⲣⲟⲙⲡⲓ: ⲟⲩⲟϩ ⲁϥϣⲱⲡⲓ ⲛ̀ⲟⲩⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ϩⲓϫⲉⲛ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ Ⲕⲁϥⲁ̀ⲙⲟⲛⲓ ⲛⲓⲟ̀ϩⲓ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">وعاش أربعين سنة، وصار أسقفاً، علي كرسي قبرص، ورعى قطيع للمسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Blessed are you O our holy father, Lazarus the bishop, for you were worthy to hear Jesus’ voice, the God of the living and the dead.</td>
            <td class="coptic">Ⲱ̀ⲟⲩⲛⲓⲁⲧⲕ ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ: Ⲗⲁⲍⲁⲣⲟⲥ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ϫⲉ ⲁⲕⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲧ̀ⲥ̀ⲙⲏ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ: Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲛⲏⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">طوباك يا أبانا القديس، لعازر الأسقف، لأنك إستحققت صوت يسوع، إله الأحياء والأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Rejoice O Lazarus the beloved, for you were worthy of the episcopate, you tended the sheep, O great shepherd.</td>
            <td class="coptic">Ⲣⲁϣⲓ Ⲗⲁⲍⲁⲣⲟⲥ ⲡⲓⲙⲉⲛⲣⲓⲧ: ϫⲉ ⲁⲕⲉⲙⲡ̀ϣⲁ ⲛ̀ϯⲙⲉⲧⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲁⲕⲁ̀ⲙⲟⲛⲓ ⲛ̀ⲛⲓⲉ̀ⲥⲱⲟⲩ: ⲱ̀ ⲡⲓⲛⲓϣϯ ⲙ̀ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ.</td>
            <td class="arabic">إفرح يا لعازر الحبيب، لأنك إستحققت الأسقفية، ورعيت الخراف، أيها الراعي العظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">We entreat you O our father, to intercede on our behalf, before Christ who has loved you, and raised you from the dead.</td>
            <td class="coptic">Ⲧⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ ⲱ̀ ⲡⲁⲧⲏⲣ ⲩ̀ⲙⲱⲛ: ⲛ̀ⲧⲉⲕⲉⲣⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϫⲱⲛ: ⲛⲁϩⲣⲉⲛ Ⲡⲭ̅ⲥ̅ ⲫⲏⲉ̀ⲧⲁϥⲙⲉⲛⲣⲓⲧⲕ: ⲟⲩⲟϩ ⲁϥⲧⲟⲩⲛⲟⲥⲕ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">نطلب إليك يا أبانا، لكي تشفع فينا، أمام المسيح الذي أحبك، وأقامك من الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Pray to the Lord on our behalf, O shepherd of Christ, Lazarus the bishop, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲗⲁⲍⲁⲣⲟⲥ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">أطلب من الرب عنا، أيها الراعي الذي للمسيح، لعازر الأسقف، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
firstHosannaSundayDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="First Hosanna Sunday Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">First Hosanna Sunday Doxology
        <span class="coptic-caption">Ⲁ̀ⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ ϧⲉⲛ ⲟⲩⲥⲟⲩⲁⲓ</span>
        <span class="arabic-caption">ذوكصولوجية أحد الشعانين الأولى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Blow at the New Moon, with the sound of the trumpet, on the day of your feast, for it is an order from God.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲥⲁⲗⲡⲓⲍⲓⲛ ϧⲉⲛ ⲟⲩⲥⲟⲩⲁⲓ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ: ϧⲉⲛ ⲟⲩⲉ̀ϩⲟⲟⲩ ⲛ̀ⲛⲉⲧⲉⲛϣⲁⲓ: ϫⲉ ⲟⲩⲁϩⲥⲁϩⲛⲓ ⲛ̀Ⲑⲉⲟⲥ.</td>
            <td class="arabic">بَوِّقُوا في رأس الشهر، بصوت البوق، في يوم أعيادكم، لأنه أمر الله.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He who sits upon the Cherubim, rode on a donkey, He entered Jerusalem, oh what this great humility.</td>
            <td class="coptic">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲁϥⲧⲁⲗⲟϥ ⲉ̀ⲟⲩⲉ̀ⲱ̀: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲟⲩⲡⲉ ⲡⲁⲓⲛⲓϣϯ ⲛ̀ⲑⲉⲃⲓⲟ.</td>
            <td class="arabic">الجالس فوق الشاروبيم، ركب على آتان، ودخل إلى أورُشَليم، يا لهذا التواضع العظيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">According to what David, said in the psalm, “Blessed is He who comes in the name, of the Lord of hosts.”</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ ⲡⲓⲯⲁⲗⲙⲟⲥ: ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ: ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ.</td>
            <td class="arabic">كما قال داود، في المزمور، "مبارك الآتي، بإسم رب القوات."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Again he said, “Out of the mouths of babes, and nursing infants, You have perfected praise.”</td>
            <td class="coptic">Ⲡⲁⲗⲓⲛ ⲟⲛ ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ: ⲛ̀ⲁ̀ⲗⲱⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲉⲙϭⲓ: ⲛ̀ⲑⲟⲕ ⲁⲕⲥⲉⲃⲧⲉ ⲡⲓⲥ̀ⲙⲟⲩ.</td>
            <td class="arabic">وقال أيضاً، "من أفواه الأطفال، الصغار والرضعان، أعددت سُبْحاً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Then He completed the saying, of David the spirit-bearer, who likewise said, “Out of the mouths of young children.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲁϥϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲓⲥⲁϫⲓ: ⲛ̀ⲧⲉ Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁⲧⲟⲫⲟⲣⲟⲥ: ϫⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ: ⲛ̀ⲁ̀ⲗⲱⲟⲩⲓ̀ ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">حينئذ كَمَّلَ قول، داود الروحاني، هكذا قائلاً، "من أفواه الأطفال الصغار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">They praise Him watchfully, saying ‘This is Emmanuel, hosanna in the highest, this is the King of Israel.’”</td>
            <td class="coptic">Ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲛⲉϩⲥⲓ: ⲁⲩϫⲉ ⲫⲁⲓ ⲡⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ: ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">يسبحونه بيقظة قائلين، هذا هو عمانوئيل، أوصنا في الأعالي، هذا هو ملك إسرائيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Offer to the Lord O sons of God, offer to the Lord glory and honor, rejoice in our God, with doxologies of blessing.</td>
            <td class="coptic">Ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ: ⲁ̀ⲛⲓⲟⲩⲓ̀ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ⲉ̀ϣ̀ⲗⲏⲗⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ: ϧⲉⲛ ϩⲁⲛⲇⲟⲝⲟⲗⲟⲅⲓⲁ ⲛ̀ⲥ̀ⲙⲟⲩ.</td>
            <td class="arabic">قَدِّموا للرب يا أبناء الله، قَدِّموا للرب مجداً وكرامة، هَلِّلوا لإلهنا، بتماجيد البركة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Praise is due to You O God, in Zion and Jerusalem, they send to You, prayers unto the ages.</td>
            <td class="coptic">Ⲛ̀ⲑⲟⲕ Ⲫ̀ⲛⲟⲩϯ ϥ̀ⲉⲣϣⲁⲩ ⲛⲁⲕ: ⲛ̀ϫⲉ ⲡⲓϫⲱ ϧⲉⲛ Ⲥⲓⲱⲛ: ⲛⲉⲙ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲉⲩⲉ̀ϯ ⲛⲁⲕ: ⲛ̀ϩⲁⲛⲉⲩⲭⲏ ϣⲁ ⲛⲓⲉ̀ⲱⲛ.</td>
            <td class="arabic">أنت الله يليق بك النشيد، في صهيون وأورُشَليم، يقدمون لك النذور، إلى الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Hosanna in the highest, this is the King of Israel, blessed is He who comes in the name, of the Lord of hosts.</td>
            <td class="coptic">Ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ: ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ.</td>
            <td class="arabic">أوصنا في الأعالي، هذا هو ملك إسرائيل، مبارك الآتي، بإسم رب القوات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
secondHosannaSundayDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Hosanna Sunday Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second Hosanna Sunday Doxology
        <span class="coptic-caption">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية أحد الشعانين الثانية</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">For David the hymnist, the king of Israel, Spoke of the honor of this great feast, in this manner saying.</td>
            <td class="coptic">Ⲇⲁⲩⲓⲇ ⲅⲁⲣ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ: ⲟⲩⲟϩ ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ: ⲁϥϫⲱ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀ⲡⲁⲓⲛⲓϣϯ ⲛ̀ϣⲁⲓ: ⲙ̀ⲡⲁⲓⲣⲏϯ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">لأن داود المرتل، وملك إسرائيل، نطق بكرامة هذا العيد العظيم، هكذا قائلاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">“Out of the mouths of babes, and nursing infants, You have perfected praise, according to Your will O Lord.”</td>
            <td class="coptic">Ϫⲉ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲟⲩ ⲛ̀ϩⲁⲛⲕⲟⲩϫⲓ: ⲛ̀ⲁ̀ⲗⲱⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲉⲙϭⲓ: ⲛ̀ⲑⲟⲕ ⲁⲕⲥⲉⲃⲧⲉ ⲡⲓⲥ̀ⲙⲟⲩ: ⲕⲁⲧⲁ ⲡⲉⲧⲉϩⲛⲁⲕ Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">"من أفواه الأطفال، الصغار والرضعان، أنت أعددت سُبْحاً، كإرادتك يا رب."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">It is also written, “Do not fear O daughter of Zion, behold your King is coming, riding on a colt.”</td>
            <td class="coptic">Ⲥ̀ⲥ̀ϧⲏⲟⲩⲧ ⲟⲛ ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ: ⲱ̀ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲥⲓⲱⲛ: ϩⲏⲡⲡⲉ ⲅⲁⲣ Ⲡⲉⲟⲩⲣⲟ ⲉϥⲛⲏⲟⲩ ⲛⲉ: ⲉϥⲧⲁⲗⲏⲟⲩⲧ ⲉ̀ϫⲉⲛ ⲟⲩⲥⲏϫ.</td>
            <td class="arabic">ومكتوب أيضاً، "لا تخافي يا إبنة صهيون، هوذا ملككِ يأتيكِ، راكباً على جحش."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Oh what this great humility, which was done by our Savior, when He entered Jerusalem, riding on a donkey.</td>
            <td class="coptic">Ⲟⲩ ⲡⲉ ⲡⲁⲓⲛⲓϣϯ ⲛ̀ⲑⲉⲃⲓⲟ: ⲫⲏⲉ̀ⲧⲁϥⲁⲓϥ ⲛ̀ϫⲉ Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲉ̀ⲧⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲉ̀ⲧⲁϥⲁ̀ⲗⲏⲓ ⲉ̀ⲟⲩⲉ̀ⲱ̀.</td>
            <td class="arabic">يا لهذا التواضع العظيم، الذي صنعه مخلصنا، لما دخل إلى أورُشَليم، راكباً على آتان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">For today these prophecies, have been completed, some took palm branches, and branches of olives.</td>
            <td class="coptic">Ⲙ̀ⲫⲟⲟⲩ ⲅⲁⲣ ⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ: ⲛ̀ϫⲉ ⲛⲁⲓⲡ̀ⲣⲟⲫⲏⲧⲓⲁ: ϩⲁⲛⲟⲩⲟⲛ ⲁⲩϭⲓ ⲛ̀ϩⲁⲛⲃⲁⲓ: ⲛⲉⲙ ϩⲁⲛⲕ̀ⲗⲁⲇⲟⲥ ⲛ̀ⲧⲉ ϩⲁⲛϫⲱⲓⲧ.</td>
            <td class="arabic">اليوم كَمَلَت، هذه النبوات، البعض أخذوا سعوف النخل، وأغصان الزيتون.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Others spread their garments, upon the road before Him, the children proclaimed saying, “Hosanna to the Son of David.”</td>
            <td class="coptic">Ϩⲁⲛⲕⲉⲭⲱⲟⲩⲛⲓ ⲁⲩⲫⲱⲣϣ ⲛ̀ⲛⲟⲩϩ̀ⲃⲱⲥ: ϩⲓ ⲡⲓⲙⲱⲓⲧ ⲙ̀ⲡⲉϥⲙ̀ⲑⲟ: ⲛⲓⲁ̀ⲗⲱⲟⲩⲓ̀ ⲁⲩⲱϣ ⲉ̀ⲃⲟⲗ: ϫⲉ ⲱ̀ⲥⲁⲛⲛⲁ Ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">وآخرون فرشوا ثيابهم، في الطريق أمامه، والأطفال صرخوا قائلين، "أوصنا لإبن داود."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hosanna in the highest, this is the King of Israel, blessed is He who comes in the name, of the Lord of hosts.</td>
            <td class="coptic">Ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ: ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ.</td>
            <td class="arabic">أوصنا في الأعالي، هذا هو ملك إسرائيل، مبارك الآتي، بإسم رب القوات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
thirdHosannaSundayDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Third Hosanna Sunday Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Third Hosanna Sunday Doxology
        <span class="coptic-caption">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ</span>
        <span class="arabic-caption">ذوكصولوجية أحد الشعانين الثالثة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">He who sits upon the Cherubim, on the throne of His glory, sat on a donkey, and entered Jerusalem.</td>
            <td class="coptic">Ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ϩⲓϫⲉⲛ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ ⲡⲉϥⲱ̀ⲟⲩ: ⲁϥϩⲉⲙⲥⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲟⲩⲉ̀ⲱ̀: ⲁϥϣⲉ ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.</td>
            <td class="arabic">الجالس فوق الشاروبيم، على كرسى مجده، جلس على آتان، ودخل إلى أورُشَليم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Bethany and Bethphage, at the Mount of Olives, when Christ sent His Disciples, from that place.</td>
            <td class="coptic">Ⲃⲏⲑⲁ̀ⲛⲓⲁ ⲛⲉⲙ Ⲃⲏⲑⲫⲁⲅⲏ: ϧⲁⲧⲉⲛ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲧⲉ ⲛ̀ⲛⲓϫⲱⲓⲧ: ⲉ̀ⲧⲁϥⲟⲩⲱⲣⲡ ⲛ̀ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ: ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲁⲩ ⲛ̀ϫⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">بيت عنيا وبيت فاجي، عند جبل الزيتون، لما أرسل المسيح تلميذيه، من هناك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They loosed the donkey, and the colt and brought them to Him, they spread their clothes on them, and He sat on them.</td>
            <td class="coptic">Ⲁⲩⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ϯⲉ̀ⲱ̀: ⲛⲉⲙ ⲡⲓⲥⲏϫ ⲁⲩⲉ̀ⲛⲟⲩ ⲛⲁϥ: ⲁⲩⲫⲱⲣϣ ⲛ̀ⲛⲟⲩϩ̀ⲃⲱⲥ ⲉ̀ϫⲱⲟⲩ: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲡ̀ϣⲱⲓ ⲙ̀ⲙⲱⲟⲩ.</td>
            <td class="arabic">فحَلَّا الآتان والجحش، وأتيا بهما إليه، وفرشا ثيابهما عليهما، فجلس فوقهما.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">When Christ drew near, to the borders of Jerusalem, the crowd rejoiced with the Disciples, because of the powers they saw.</td>
            <td class="coptic">Ⲉ̀ⲧⲁϥϧⲱⲛⲧ ⲛ̀ϫⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉ̀ⲛⲓⲥⲁ ⲛ̀ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ: ⲁⲩⲣⲁϣⲓ ⲛ̀ϫⲉ ⲛⲓⲙⲏϣ ⲛⲉⲙ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲉⲑⲃⲉ ⲛⲓϫⲟⲙ ⲉ̀ⲧⲁⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ.</td>
            <td class="arabic">ولما قرب المسيح، إلى نواحي أورُشَليم، فرحت الجموع مع التلاميذ، من أجل القوات التي رأوها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">The children of the Hebrews, said the hymn of heaven, “Hosanna in the highest, This is the King of Israel.”</td>
            <td class="coptic">Ⲛⲓⲁ̀ⲗⲱⲟⲩⲓ̀ ⲛ̀ⲧⲉ Ⲛⲓϩⲉⲃⲣⲉⲟⲥ: ⲁⲩϫⲱ ⲙ̀ⲡⲓϩⲩⲙⲛⲟⲥ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ϫⲉ ⲱ̀ⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲫⲁⲓ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ.</td>
            <td class="arabic">أطفال العبرانيين، نطقوا بالتسبيح السمائي، "أوصنا في الأعالي، هذا هو ملك إسرائيل."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">The gospels have witnessed, saying likewise, “He rode on a donkey, as a symbol of the Cherubim.”</td>
            <td class="coptic">Ⲛⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲁⲩⲉⲣⲙⲉⲑⲣⲉ: ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ ⲙ̀ⲡⲁⲓⲣⲏϯ: ϫⲉ ⲁϥⲧⲁⲗⲟϥ ⲉ̀ⲟⲩⲉ̀ⲱ̀: ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">شَهِدت الأناجيل، قائلة هكذا، "أنه ركب آتان، كمِثَال الشاروبيم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">And the teachers of the Church, cried out saying, “Blessed is the Lord Jesus, who came and saved us.”</td>
            <td class="coptic">Ⲛⲓⲥⲁϧ ⲇⲉ ϩⲱⲟⲩ ⲛ̀ⲧⲉ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲁⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ: ⲫⲏⲉ̀ⲧⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">ومعلموا الكنيسة، أيضاً صرخوا قائلين، "مبارك الرب يسوع، الذي أتى وخلَّصنا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">We also praise Him, with the blessed children, who were taught by the Holy Spirit, “Hosanna to the Son of David.”</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ: ⲛⲉⲙ ⲛⲓⲁ̀ⲗⲱⲟⲩⲓ̀ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ: ⲉ̀ⲧⲁⲩⲧ̀ⲥⲁ-ⲃⲱⲟⲩ ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲱ̀ⲥⲁⲛⲛⲁ Ⲡ̀ϣⲏⲣⲓ ⲛ̀Ⲇⲁⲩⲓⲇ.</td>
            <td class="arabic">ونحن أيضاً نسبحه، مع الأطفال المباركين، الذين تعلَّموا من الروح القدس، قائلين "أوصنا لإبن داود."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Blessed is He who comes, in the name of the Lord of hosts, and in His Second Coming, He is exalted above all forever.</td>
            <td class="coptic">Ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏ-ⲉⲑⲛⲏⲟⲩ: ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ: ⲟⲩⲟϩ ϧⲉⲛ ⲧⲉϥⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲙ̀ⲡⲁⲣⲟⲩⲥⲓⲁ: ϥ̀ⲉⲣϩⲟⲩⲟ̀ ϭⲟⲥⲓ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">مباركً الآتي، بإسم رب القوات، وفي ظهوره الثاني، يزداد رِفْعَة إلى الآباد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
// Bright Saturday Doxology use Resurrect 2
firstFeastofResurrectionDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="First Feast of Resurrection Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">First Feast of Resurrection Doxology
        <span class="coptic-caption">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ</span>
        <span class="arabic-caption">ذوكصولوجية عيد القيامة الأولى</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Then our mouths are filled with joy, and our tongues with rejoicing, for our Lord Jesus Christ, has risen from the dead.</td>
            <td class="coptic">Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ: ⲟⲩⲟϩ ⲡⲉⲛⲗⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ: ϫⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">حينئذ إمتلأ فمُنا فرحاً، ولساننا تهليلاً، لأن ربنا يسوع المسيح، قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He has abolished death by His might, and made life shine upon us, He is the One who has descended, to the lower parts of the earth.</td>
            <td class="coptic">Ⲁϥⲕⲱⲣϥ ⲙ̀ⲫ̀ⲙⲟⲩ ϧⲉⲛ ⲧⲉϥϫⲟⲙ: ⲁϥⲑ̀ⲣⲉⲡ̀ⲱⲛϧ ⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ: ⲛ̀ⲑⲟϥ ⲟⲛ ⲫⲏⲉ̀ⲧⲁϥϣⲉⲛⲁϥ: ⲉ̀ⲛⲓⲙⲁ ⲉⲧⲥⲁⲡⲉⲥⲏⲧ ⲙ̀ⲡ̀ⲕⲁϩⲓ.</td>
            <td class="arabic">بقوته أبطل الموت، وجعل الحياة تضئ لنا، وهو أيضاً الذي مضى، إلى الأماكن التي أسفل الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The gatekeepers of Hades, saw Him and were afraid, He abolished the pangs of death, and He was not held by them.</td>
            <td class="coptic">Ⲛⲓⲙ̀ⲛⲟⲩⲧ ⲛ̀ⲧⲉ Ⲁ̀ⲙⲉⲛϯ: ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲁⲩⲉⲣϩⲟϯ: ⲁϥⲧⲁⲕⲟ ⲛ̀ⲛⲓⲛⲁⲕϩⲓ ⲙ̀ⲫ̀ⲙⲟⲩ: ⲙ̀ⲡⲟⲩϣ̀ϫⲉⲙϫⲟⲙ ⲛ̀ⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟϥ.</td>
            <td class="arabic">بوابو الجحيم، رأوه وخافوا، وأهلك طلقات الموت، فلم تستطع أن تمسكه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">He has crushed the gates of brass, and broke the bars of iron, and brought out His chosen ones, with rejoicing and with joy.</td>
            <td class="coptic">Ⲁϥϧⲟⲙϧⲉⲙ ⲛ̀ϩⲁⲛⲡⲩⲗⲏ ⲛ̀ϩⲟⲙⲧ: ⲁϥⲕⲱϣ ⲛ̀ϩⲁⲛⲙⲟⲭⲗⲟⲩⲥ ⲙ̀ⲃⲉⲛⲓⲡⲓ: ⲁϥⲓ̀ⲛⲓ ⲛ̀ⲛⲉϥⲥⲱⲧⲡ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ.</td>
            <td class="arabic">سحق الأبواب النحاس، وكسر المتاريس الحديد، وأخرج مُختاريه، بفرح وتهليل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He lifted them up with Him, into His place of rest, and saved them for His name’s sake, He revealed His power to them.</td>
            <td class="coptic">Ⲁϥⲟ̀ⲗⲟⲩ ⲉ̀ⲡ̀ϭⲓⲥⲓ ⲛⲉⲙⲁϥ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲉϥⲙⲁ ⲛ̀ⲉⲙⲧⲟⲛ: ⲁϥⲛⲁϩⲙⲟⲩ ⲉⲑⲃⲉ ⲡⲉϥⲣⲁⲛ: ⲁϥⲟⲩⲱⲛϩ ⲛ̀ⲧⲉϥϫⲟⲙ ⲛⲱⲟⲩ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">وأصعدهم معه إلى العلو، إلى مواضع راحته، خلصهم لأجل إسمه، وأظهر قوته لهم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Therefore we are wealthy, with perfect gifts, and with faith we sing, saying “Alleluia.”</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲁⲙⲁⲟ̀: ϧⲉⲛ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲛⲁϩϯ ⲧⲉⲛⲉⲣⲯⲁⲗⲓⲛ: ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">من أجل هذا نحن أغنياء، بالخيرات الكاملة، وبإيمان نرتل، قائلين "هلليلويا."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Alleluia (4), Jesus Christ the King of glory, has risen from the dead.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (ⲇ̅): Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">هلليلويا (4)، يسوع المسيح ملك المجد، قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
secondFeastofResurrection_andBrightSaturdayDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Second Feast of Resurrection (and Bright Saturday) Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Second Feast of Resurrection (and Bright Saturday) Doxology
        <span class="coptic-caption">Ⲫⲏⲉ̀ⲧⲁϥϣⲁⲛϣ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ</span>
        <span class="arabic-caption">ذوكصولوجية عيد القيامة الثانية (وأيضا سبت الفرح)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">He who sustained Israel, forty years in the desert, gave them the manna to eat, the bread of the angels.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁϥϣⲁⲛϣ ⲙ̀Ⲡⲓⲥⲣⲁⲏⲗ: ⲛ̀ϩ̀ⲙⲉ ⲛ̀ⲣⲟⲙⲡⲓ ϩⲓ ⲡ̀ϣⲁϥⲉ: ⲁϥϯ ⲙ̀ⲡⲓⲙⲁⲛⲛⲁ ⲛⲱⲟⲩ ⲉ̀ⲟⲩⲟⲙϥ: ⲡ̀ⲱⲓⲕ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">الذي عالَ إسرائيل، أربعين سنة في البرية، وأعطاهم المَنَّ، خُبز الملائكة ليأكلوا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">In place of the manna, they gave Him bitter vinegar, in place of the good things, they placed a crown of thorns on Him.</td>
            <td class="coptic">Ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ ⲅⲁⲣ ⲙ̀ⲡⲓⲙⲁⲛⲛⲁ: ⲁⲩϯ ⲛ̀ⲟⲩϩⲉⲙϫ ⲉϥⲉⲛϣⲁϣⲓ ⲛⲁϥ: ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ: ⲁⲩϯⲭ̀ⲗⲟⲙ ⲛ̀ⲥⲟⲩⲣⲓ ⲉ̀ϫⲱϥ.</td>
            <td class="arabic">عِوَض المَنَّ، أعطوه خَلاً مُرَّاً، وبَدَلَ الخيرات جعلوا، إكليل شوك على رأسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They wrapped and placed Him in the tomb, which was outside the city, in their ignorance they said, “It is impossible for Him to rise.”</td>
            <td class="coptic">Ⲁⲩⲕⲟⲥϥ ⲁⲩⲭⲁϥ ϧⲉⲛ ⲡⲓⲙ̀ϩⲁⲩ: ⲫⲏⲉⲧⲭⲏ ⲥⲁⲃⲟⲗ ⲛ̀ϯⲃⲁⲕⲓ: ⲉ̀ⲧⲁⲩϫⲟⲥ ϧⲉⲛ ⲧⲟⲩⲙⲉⲧⲁⲧϩⲏⲧ: ϫⲉ ⲫⲁⲓ ϥ̀ⲛⲁ ϣ̀ⲧⲱⲛϥ ⲁⲛ ϫⲉ.</td>
            <td class="arabic">كُفِنَ ووُضِعَ في القبر، الكائن خارج المدينة، وقالوا بجهلهم "هذا، لا يستطيع أن يقوم بعد."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Early on one Sunday, Christ rose from the dead, He placed His enemies behind Him, He put them in eternal shame.</td>
            <td class="coptic">Ϣⲱⲣⲡ ⲙ̀ⲫ̀ⲟⲩⲁⲓ ⲛ̀ⲧⲉ ⲛⲓⲥⲁⲃⲃⲁⲧⲟⲛ: ⲁ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲁϥⲧⲁⲥⲑⲟ ⲛ̀ⲛⲉϥϫⲁϫⲓ ⲉ̀ⲫⲁϩⲟⲩ: ⲁϥϯ ⲛⲱⲟⲩ ⲛ̀ⲟⲩϣ̀ⲫⲓⲧ ϣⲁ ⲛ̀ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">باكر أحد السبوت، قام المسيح من بين الأموات، وردَّ أعداءه إلى خلف، وأعطاهم عاراً أبدياً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Therefore we praise, with David the hymnist, saying “God rose, like one who sleeps.”</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲉⲣⲭⲟⲣⲉⲩⲓⲛ: ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ Ⲇⲁⲩⲓⲇ: ϫⲉ ⲁϥⲧⲱⲛϥ ⲛ̀ϫⲉ Ⲫ̀ⲛⲟⲩϯ: ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲫⲏⲉⲧⲉⲛⲕⲟⲧ.</td>
            <td class="arabic">من أجل هذا، نمدح مع المرتل، داود قائلين، "قد قام الله مثل النائم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Alleluia (4), Jesus Christ the King of glory, has risen from the dead. ${cross}</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (ⲇ̅): Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ. ${cross}</td>
            <td class="arabic">هلليلويا (4)، يسوع المسيح ملك المجد، قام من بين الأموات. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
// Replaces annual Archangel Michael Doxology
archangelMichaelDoxologyfortheResurrection(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Archangel Michael Doxology for the Resurrection">
    
    <caption id="caption_table_${tableNumber}" class="caption">Archangel Michael Doxology for the Resurrection
        <span class="coptic-caption">Ⲥⲁ Ⲧ̀ⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية رئيس الملائكة ميخائيل (للقيامة)</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">At the Resurrection of Christ, the women carrying fragrant oil, came and sought earnestly, and Michael appeared to them.</td>
            <td class="coptic">Ⲥⲁ Ⲧ̀ⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ϫⲉ ⲛⲓϩⲓⲟⲙⲓ ⲙ̀ϥⲁⲓⲥⲟϫⲉⲛ: ⲁⲩⲓ̀ ⲁⲩⲕⲱϯ ϧⲉⲛ ⲟⲩⲥ̀ⲡⲟⲩⲇⲏ: ⲁϥⲟⲩⲱⲛϩ ⲛⲱⲟⲩ ⲛ̀ϫⲉ Ⲙⲓⲭⲁⲏⲗ.</td>
            <td class="arabic">عند قيامة المسيح، توجهت النسوة حاملات الطيب، وطلبت بإجتهاد، فظهر لهم ميخائيل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">His appearance became, illuminated like lightning, and his clothes, became white like snow.</td>
            <td class="coptic">Ⲡⲉϥⲥ̀ⲙⲟⲧ ⲇⲉ ⲛⲁϥⲟⲓ ⲙ̀ⲫ̀ⲣⲏϯ: ⲛ̀ⲟⲩⲥⲉⲧⲉⲃⲣⲏϫ ⲛ̀ⲟⲩⲱⲓⲛⲓ: ⲟⲩⲟϩ ⲧⲉϥϩⲉⲃⲥⲱ ⲥ̀ⲟⲩⲱⲃϣ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲭⲓⲱⲛ.</td>
            <td class="arabic">وكانت هيئته، مثل البرق المنير، ولباسه، أبيض كالثلج.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">He answered and said, to the women carrying the fragrant oil, “Who are you looking for, He is risen He is not here.</td>
            <td class="coptic">Ⲁϥⲉⲣⲟⲩⲱ̀ ⲟⲩⲟϩ ⲡⲉϫⲁϥ: ⲛ̀ⲛⲓϩⲓⲟⲙⲓ ⲙ̀ϥⲁⲓⲥⲟϫⲉⲛ: ϫⲉ ⲫⲏⲉ̀ⲧⲉⲧⲉⲛⲕⲱϯ ⲛ̀ⲥⲱϥ: ⲁϥⲧⲱⲛϥ ϥ̀ⲭⲏ ⲙ̀ⲡⲁⲓⲙⲁ ⲁⲛ.</td>
            <td class="arabic">فأجاب وقال للنسوة، حاملات الطيب، "الذي تطلبنه، قد قام وليس هَهُنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Now go quickly, tell His Apostles, ‘He has risen from the dead, as He said to you.’</td>
            <td class="coptic">Ⲓⲱⲥ ⲟⲩⲟϩ ⲙⲁϣⲉⲛⲱⲧⲉⲛ: ⲁ̀ϫⲟⲥ ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϫⲉ ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ ⲛⲱⲧⲉⲛ.</td>
            <td class="arabic">إذهبنَ وأسرعنَ، وقلنَ لرسله، إنه قام من الأموات، كما قال لكم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Rejoice for He who was crucified, rose and goes to Galilee, there you will see Him, behold I have told you.”</td>
            <td class="coptic">Ⲣⲁϣⲓ ϫⲉ ⲫⲏⲉ̀ⲧⲁⲩⲁϣϥ ⲁϥⲧⲱⲛϥ: ϩⲏⲡⲡⲉ ϥ̀ⲛⲁⲉⲣϣⲟⲣⲡ ⲉ̀ⲣⲱⲧⲉⲛ: ⲉ̀Ϯⲅⲁⲗⲓⲗⲉⲁ̀ ⲧⲉⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲙ̀ⲙⲁⲩ ϫⲉ ⲁⲓϫⲟⲥ ⲛⲱⲧⲉⲛ.</td>
            <td class="arabic">إفرحوا لأن الذي صُلب، قد قام وسيسبقكم إلى الجليل، هناك ترونه، ها قد قلت لكنَّ."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Great is your honor, O Michael the head of the heavenly, for you preached to us, the Resurrection of Christ.</td>
            <td class="coptic">Ⲟⲩⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲉⲕⲧⲁⲓⲟ: ⲱ̀ Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀: ϫⲉ ⲛ̀ⲑⲟⲕ ⲉ̀ⲧⲁⲕϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲛ: ϧⲉⲛ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲙ̀Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">عظيمة هي كرامتك، يا ميخائيل رئيس السمائيين، لأنك أنت بشرتنا، بقيامة المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">O You who were crucified for us, O Christ the King of glory, You have risen from the dead, and granted us Your joy.</td>
            <td class="coptic">Ⲱ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ: ⲱ̀ Ⲡⲭ̅ⲥ̅ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟⲩ: ⲁ̀ⲛⲁⲥⲧⲁⲥ ⲉⲕⲧⲱⲛ ⲛⲉⲕⲣⲱⲛ: ⲟⲩⲟϩ ⲁⲕϯ ⲛⲁⲛ ⲙ̀ⲡⲉⲕⲟⲩⲛⲟϥ.</td>
            <td class="arabic">أيها المسيح ملك المجد، المصلوب عنا، قد قُمت من الأموات، ومنحتنا بهجتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Intercede on our behalf, O trumpeter of the Resurrection, Michael the head of the heavenly, that He may forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲡⲓⲯⲁⲗⲡⲓⲥⲧⲏⲥ ⲛ̀ⲧⲉ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
            <td class="arabic">إشفع فينا (أمام الرب)، أيها المُبَوِّق بالقيامة، ميخائيل رئيس السمائيين، ليغفر لنا خطايانا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
thomasSundayDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Thomas Sunday Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Thomas Sunday Doxology
        <span class="coptic-caption">Ϧⲉⲛ ⲡⲓⲙⲁϩ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ</span>
        <span class="arabic-caption">ذوكصولوجية أحد توما</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">On the eighth day, the disciples were gathered, and Thomas was with them, the doors were shut.</td>
            <td class="coptic">Ϧⲉⲛ ⲡⲓⲙⲁϩ ϣ̀ⲙⲏⲛ ⲛ̀ⲉ̀ϩⲟⲟ̀ⲩ: ⲛⲁⲩⲑⲟⲩⲏⲧ ⲉ̀ϧⲟⲩⲛ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ: ⲛⲁϥⲭⲏ ⲛⲉⲙⲁϥ ⲛ̀ϫⲉ Ⲑⲱⲙⲁⲥ: ⲛⲁⲣⲉ ⲛⲓⲣⲱⲟ̀ⲩ ⲉⲥϣⲟⲧⲉⲙ.</td>
            <td class="arabic">في اليوم الثامن، كان التلاميذ مجتمعين، ومعهم توما، وكانت الأبواب مغلقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Our Lord Jesus Christ, stood in their midst, and said "Peace be to you, O My brothers" and He said.</td>
            <td class="coptic">Ⲁϥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧϥ ϧⲉⲛ ⲧⲟⲩⲙⲏϯ: ⲛ̀ϫⲉ ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅: ⲡⲉϫⲁϥ ϫⲉ ⲧ̀ϩⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ: ⲛⲁⲙⲉⲛⲣⲁϯ ⲟⲩⲟϩ ⲡⲉϫⲁϥ.</td>
            <td class="arabic">ربنا يسوع المسيح، وقف في وسطهم، وقال سلام لكم، يا أحبائي وقال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">"Thomas put your finger here, reach out your hand, place your hand on My side, do not doubt but believe."</td>
            <td class="coptic">Ⲑⲱⲙⲁⲥ ⲙⲁ ⲡⲉⲕⲧⲏⲃ ⲙ̀ⲛⲁⲓ: ⲟⲩⲟϩ ⲁ̀ⲛⲏⲟⲩ ⲧⲉⲕϫⲓϫ: ⲭⲁ ⲧⲉⲕϫⲓϫ ϧⲉⲛ ⲡⲁⲥ̀ⲫⲓⲣ: ⲙ̀ⲡⲉⲣⲉⲣⲛⲁϩϯ ⲁⲗⲗⲁ ⲛⲁϩϯ.</td>
            <td class="arabic">يا توما هات أصبعك، إلى هنا، وضَع يدك في جنبي، ولا تكن غير مؤمن بل مؤمناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Thomas proclaimed, "My Lord and my God," Jesus said to him, "You see and you believe."</td>
            <td class="coptic">Ⲑⲱⲙⲁⲥ ⲇⲉ ⲁϥⲱ̀ϣ ⲉ̀ⲃⲟⲗ: ϫⲉ ⲡⲁⲟ̅ⲥ̅ ⲟⲩⲟϩ ⲡⲁⲚⲟⲩϯ: ⲡⲉϫⲁϥ ⲛⲁϥ ⲛ̀ϫⲉ Ⲓⲏ̅ⲥ̅: ⲁⲕⲛⲁⲩ ⲉ̀ⲣⲟⲓ ⲁⲕⲛⲁϩϯ.</td>
            <td class="arabic">فصرخ توما قائلاً، ربي وإلهي، قال له يسوع، لما رأيتنى آمنت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">"But blessed are those who accept, and believe but have not seen," make us worthy to believe in You, O our Master Christ the King.</td>
            <td class="coptic">Ⲱ̀ⲟ̀ⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲧⲁⲩⲛⲏⲟⲩ: ⲉ̀ⲣⲟⲓ ⲁ̀ⲛⲁⲩ ⲁⲛⲛⲁϩϯ ⲉ̀ⲣⲟⲓ ⲁⲛ: ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉ̀ⲙⲡ̀ϣⲁ ⲛ̀ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲣⲟⲕ: ⲱ̀ ⲡⲉⲛⲚⲏⲃ ⲡ̀Ⲟ̀ⲩⲣⲟ Ⲡⲭ̅ⲥ̅.</td>
            <td class="arabic">طوبى لمن يقبل إليَّ، ويؤمن بي ولم يراني، إجعلنا مستحقين أن نؤمن بكَ، يا سيدنا الملك المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Therefore we are wealthy, with perfect gifts, and with faith we sing, saying Alleluia.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲁⲙⲁⲟ̀: ϧⲉⲛ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟ̀ⲩⲛⲁϩϯ ⲧⲉⲛⲉ̀ⲣⲉⲯⲁⲗⲓⲛ: ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
            <td class="arabic">فلهذا نحن أغنياء، بالخيرات الكاملة، وبإيمان نرتل، قائلين هلليلويا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the King of glory, has risen from the dead.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁ̅ⲗ̅ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ⲟ̀ⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ⲱ̀ⲟ̀ⲩ: ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉ̀ⲑⲙⲱⲟ̀ⲩⲧ.</td>
            <td class="arabic">هلليلويا هلليلويا، هلليلويا هلليلويا، يسوع المسيح ملك المجد، قام من بين الأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟ̀ⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofAscensionDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Ascension Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Ascension Doxology
        <span class="coptic-caption">Ⲟⲩⲟϩ ⲙⲉⲛⲉⲛⲥⲁ ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϩⲟⲟⲩ</span>
        <span class="arabic-caption">ذوكصولوجية عيد الصعود</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">And after forty days, He ascended into the heavens, with glory and with honor, He was seated at the right hand of His Father.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲙⲉⲛⲉⲛⲥⲁ ϩ̀ⲙⲉ ⲛ̀ⲉ̀ϩⲟⲟⲩ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ϧⲉⲛ ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ.</td>
            <td class="arabic">وبعد أربعين يوماً، صعد إلى السموات، بمجد وكرامة، وجلس عن يمين أبيه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">As David has said, by the Holy Spirit, "The Lord said to my Lord, sit at My right hand."</td>
            <td class="coptic">Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁϥϫⲟⲥ: ⲛ̀ϫⲉ Ⲇⲁⲩⲓⲇ ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲡⲉϫⲉ Ⲡ̀ϭⲟⲓⲥ ⲙ̀Ⲡⲁϭⲟⲓⲥ: ϫⲉ ϩⲉⲙⲥⲓ ⲥⲁⲧⲁⲟⲩⲓ̀ⲛⲁⲙ.</td>
            <td class="arabic">كقول داود، بالروح القدس، "قال الرب لربي، إجلس عن يميني."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The heavenly and the earthly, were subdued by His might, the principalities and authorities, and those of the lower parts of the earth.</td>
            <td class="coptic">Ⲁⲩϭⲛⲉϫⲱⲟⲩ ⲙ̀ⲡⲉϥⲁ̀ⲙⲁϩⲓ: ⲛ̀ϫⲉ ⲛⲁ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲁ ⲡ̀ⲕⲁϩⲓ: ⲛⲓⲁⲣⲭⲏ ⲛⲉⲙ ⲛⲓⲉⲝⲟⲩⲥⲓⲁ: ⲛⲉⲙ ⲛⲏⲉⲧⲥⲁⲡⲉⲥⲏⲧ ⲙ̀ⲡ̀ⲕⲁϩⲓ.</td>
            <td class="arabic">خضع لعزته، السمائيون والأرضيون، والرئاسات والسلطات، ومَنْ تحت الأرض.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">All the powers of heaven, bowed down and worshiped Him, the heavenly and the earthly, praised Him with blessings.</td>
            <td class="coptic">Ⲛⲓϫⲟⲙ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁⲩϩⲓⲧⲟⲩ ⲉ̀ϧ̀ⲣⲏⲓ ⲁⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲁ ⲡ̀ⲕⲁϩⲓ: ϧⲉⲛ ϩⲁⲛⲥ̀ⲙⲟⲩ ⲁⲩϩⲱⲥ ⲉ̀ⲣⲟϥ.</td>
            <td class="arabic">جميع قوات السموات، خرَّت وسجدت له، السمائيون والأرضيون، سبحوه بالبركات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">He ascended into the heaven, of heavens towards the East, that He may send us the Paraclete, the Spirit of Truth.</td>
            <td class="coptic">Ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ: ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲥⲁ ⲛⲓⲙⲁ ⲛ̀ϣⲁⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲟⲩⲱⲣⲡ ⲛⲁⲛ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.</td>
            <td class="arabic">صعد إلى سماء السموات، ناحية المشارق، لكي يرسل لنا البارقليط، روح الحق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Therefore let us glorify, His holy Ascension, that He may be kind to us, and forgive us our sins.</td>
            <td class="coptic">Ⲉⲑⲃⲉ ⲫⲁⲓ ⲙⲁⲣⲉⲛϯⲱ̀ⲟⲩ: ⲛ̀Ⲧⲉϥⲁ̀ⲛⲁⲗⲩⲙⲯⲓⲥ ⲉⲑⲟⲩⲁⲃ: ⲙⲁⲣⲉϥϣⲁⲛⲁϩ̀ⲑⲏϥ ϧⲁⲣⲟⲛ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">من أجل هذا فلنمجد، صعوده المقدس، لكي يتحنن علينا، ويغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Alleluia (4), Christ is risen from the dead, and ascended into the heavens.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (ⲇ̅): Ⲡⲭ̅ⲥ̅ ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ: ⲟⲩⲟϩ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀.</td>
            <td class="arabic">هلليلويا (4)، المسيح قام من بين الأموات، وصعد إلى السموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofPentecostDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Pentecost Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Pentecost Doxology
        <span class="coptic-caption">Ⲁⲩⲑⲱⲟⲩϯ ⲛ̀ϫⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ</span>
        <span class="arabic-caption">ذوكصولوجية عيد العنصرة</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">The Apostles were gathered, on the day of Pentecost, in the upper room of Zion, after the Resurrection.</td>
            <td class="coptic">Ⲁⲩⲑⲱⲟⲩϯ ⲛ̀ϫⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ϧⲉⲛ ⲡ̀ϣⲁⲓ ⲛ̀Ϯⲡⲉⲛⲧⲏⲕⲟⲥⲧⲏ: ϧⲉⲛ ⲟⲩⲁϩⲙⲓ ⲛ̀ⲧⲉ Ⲥⲓⲱⲛ: ⲙⲉⲛⲉⲛⲥⲁ Ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ.</td>
            <td class="arabic">إجتمع الرسل، في عيد الخمسين، بعلية صهيون، بعد القيامة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">The Spirit of Comfort, came down from heaven, rested upon each one, of the holy Apostles.</td>
            <td class="coptic">Ⲁ̀ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ: ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ: ⲁϥⲙ̀ⲧⲟⲛ ⲉ̀ϫⲉⲛ ⲫ̀ⲟⲩⲁⲓ ⲫ̀ⲟⲩⲁⲓ: ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">الروح المعزي، نزل من السماء، إستقر على واحد فواحد، من الرسل القديسين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">They spoke in many tongues, in tongues of fire, and they divided the whole earth, each one according to his region.</td>
            <td class="coptic">Ⲁⲩⲥⲁϫⲓ ϧⲉⲛ ϩⲁⲛⲙⲏϣ ⲛ̀ⲗⲁⲥ: ϧⲉⲛ ϩⲁⲛⲗⲁⲥ ⲉⲩⲟⲓ ⲛ̀ⲭ̀ⲣⲱⲙ: ⲁⲩⲫⲱϣ ⲉ̀ϩ̀ⲣⲁϥ ⲙ̀ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ: ⲫ̀ⲟⲩⲁⲓ ⲫ̀ⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲧⲉϥⲭⲱⲣⲁ.</td>
            <td class="arabic">فنطقوا بألسنة كثيرة، بألسنة من نار، فقسموا الأرض على كل واحد، فواحد حسب إقليمه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">They spoke to all nations, in the faith of Christ, and performed wonders and, astounding miracles before kings.</td>
            <td class="coptic">Ⲁⲩⲥⲁϫⲓ ⲛⲉⲙ ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ: ϧⲉⲛ ⲫ̀ⲛⲁϩϯ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲁⲩⲓ̀ⲣⲓ ⲛ̀ϩⲁⲛϣ̀ⲫⲏⲣⲓ ⲛⲉⲙ ϩⲁⲛϫⲟⲙ: ⲙ̀ⲡⲁⲣⲁⲇⲟⲝⲟⲛ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀ⲛⲓⲟⲩⲣⲱⲟⲩ.</td>
            <td class="arabic">وخاطبوا جميع الأمم، بإيمان المسيح، وصنعوا عجائب وقوات، معجزة أمام الملوك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Alleluia (4), Christ ascended into the heavens, and sent us the Paraclete.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (ⲇ̅): Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥⲟⲩⲱⲣⲡ ⲛⲁⲛ ⲙ̀Ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ.</td>
            <td class="arabic">هلليلويا (4)، المسيح صعد إلى السموات، وأرسل لنا البارقليط.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofChristEntryintoEgyptDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Christ's Entry into Egypt Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Christ's Entry into Egypt Doxology
        <span class="coptic-caption">Ⲫ̀ⲛⲟⲩϯ ⲫⲏ̀ⲉ̀ⲧⲟⲩ ϯⲱ̀ⲟⲩ ⲛⲁϥ</span>
        <span class="arabic-caption">ذوكصولوجية عيد دخول المسيح أرض مصر</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">God who is glorified, in the council of the saints, who sits upon the Cherubim, was seen in the land of Egypt.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ ⲫⲏ̀ⲉ̀ⲧⲟⲩ ϯⲱ̀ⲟⲩ ⲛⲁϥ: ϧⲉⲛ ⲡ̀ⲥⲟϭⲛⲓ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ: ⲫⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ.</td>
            <td class="arabic">الله المُمجد، في مشورة القديسين، الجالس على الشاروبيم، رُؤى في إقليم مصر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">He who created heaven and earth, we saw Him as a Good One, in the bosom of Mary the new heaven, and the just Joseph the righteous.</td>
            <td class="coptic">Ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ: ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ: ϧⲉⲛ ⲕⲉⲛⲥ ⲙ̀Ⲙⲁⲣⲓⲁ ϯⲫⲉ ⲙ̀ⲃⲉⲣⲓ: ⲛⲉⲙ ⲡⲓⲑ̀ⲙⲏⲓ Ⲓⲱⲥⲏⲫ ⲡⲓⲇⲓⲕⲉⲟⲥ.</td>
            <td class="arabic">الذي خلق السماء والأرض، رأيناه كصالح، في حِضن مريم السماء الجديدة، مع البار يوسف الصديق.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">The Ancient of Days, whom the angels praise, today has come into Egypt, to save us His people.</td>
            <td class="coptic">Ⲡⲓⲁ̀ⲡⲁⲥ ⲛ̀ⲧⲉ Ⲛⲓⲉ̀ϩⲟⲟⲩ: ⲫⲏⲉ̀ⲧⲟⲩϩⲱⲥ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ ⲁϥⲓ̀ ⲙ̀ⲫⲟⲟⲩ: ϣⲁ ⲛ̀ⲧⲉϥⲥⲟⲧⲧⲉⲛ ⲁ̀ⲛⲟⲛ ϧⲁ ⲡⲉϥⲗⲁⲟⲥ.</td>
            <td class="arabic">عتيق الأيام، الذي تُسبحه الملائكة، جاء اليوم إلى كورة مصر، لكي يخلصنا نحن شعبه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Let Egypt rejoice and be glad, with its sons and border cities, for the Lover of Man has come, who existed before all ages.</td>
            <td class="coptic">Ⲣⲁϣⲓ ⲑⲉⲗⲏⲗ ⲱ̀ Ⲭⲏⲙⲓ: ⲛⲉⲙ ⲛⲉⲥϣⲏⲣⲓ ⲛⲉⲙ ⲛⲉⲥⲑⲱϣ ⲧⲏⲣⲟⲩ: ϫⲉ ⲁϥⲓ̀ ϣⲁⲣⲟ ⲛ̀ϫⲉ Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲫⲏⲉⲧϣⲟⲡ ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">إفرحوا وتهللوا يا آل مصر، مع بنيها وكل تخومها، لأنه أتى إليك محب البشر، الكائن قبل كل الدهور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Isaiah the great has said, "The Lord will come to Egypt, upon a light cloud, He is the King of heaven and earth."</td>
            <td class="coptic">Ⲏ̀ⲥⲁⲏ̀ⲁⲥ ⲡⲓⲛⲓϣϯ ⲁϥϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ϥ̀ⲛⲏⲟⲩ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ ⲉ̀Ⲭⲏⲙⲓ: ⲉ̀ϫⲉⲛ ⲟⲩϭⲏⲡⲓ ⲉⲥⲁ̀ⲥⲓⲱ̀ⲟⲩ: ⲛ̀ⲑⲟϥ ⲡⲉ Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ.</td>
            <td class="arabic">أشعياء العظيم قال، "الرب قادم إلى مصر، على سحابة خفيفة، وهو ملك السماء والأرض."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a Good One and Lover of Man, have mercy upon us according to Your great mercy. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ. ${cross}</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب للبشر، إرحمنا كعظيم رحمتك. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
feastofTransfigurationDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Feast of Transfiguration Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">Feast of Transfiguration Doxology
        <span class="coptic-caption">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ</span>
        <span class="arabic-caption">ذوكصولوجية عيد التجلي</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Let us praise Christ our God, the Co-essential with the Father, who created through His divinity, the living and the dead.</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛϩⲱⲥ ⲉ̀Ⲡⲭ̅ⲥ̅ ⲡⲉⲛⲚⲟⲩϯ: ⲡⲓⲞ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙ ⲫ̀Ⲓⲱⲧ: ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ϧⲉⲛ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ⲛ̀ⲛⲏⲉⲧⲱⲛϧ ⲛⲉⲙ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ.</td>
            <td class="arabic">فلنسبح المسيح إلهنا، المساوي مع الآب في الجوهر، الذي خلق بلاهوته، الأحياء والأموات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Jesus Christ the only-begotten, ascended to the peak of Mount Tabor, and took His disciples with Him, Peter and James and John.</td>
            <td class="coptic">Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ: ⲁϥϣⲉⲛⲁϥ ⲥⲁⲡ̀ϣⲱⲓ ⲙ̀ⲡⲓⲧⲱⲟⲩ ⲛ̀Ⲑⲁⲃⲱⲣ: ⲁϥϭⲓ ⲛⲉⲙⲁϥ ⲛ̀ⲛⲉϥⲙⲁⲑⲏⲧⲏⲥ: Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ.</td>
            <td class="arabic">يسوع المسيح الوحيد الجنس، صعد فوق جبل تابور، وأخذ معه تلاميذه، بطرس ويعقوب ويوحنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">And He was transfigured before them, His face shone more than the sun, His clothes were like snow, and two prophets appeared to Him.</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲁϥϭⲓⲭⲉⲣⲉⲃ ⲙ̀ⲡⲟⲩⲙ̀ⲑⲟ: ⲡⲉϥϩⲟ ⲛⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ϩⲟⲧⲉ ⲫ̀ⲣⲏ: ⲛⲉϥϩ̀ⲃⲱⲥ ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲭⲓⲱⲛ: ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲥ̀ⲛⲁⲩ ⲁⲩⲟⲩⲱⲛϩ ⲛⲁϥ.</td>
            <td class="arabic">وتجلى أمامهم، وكان وجهه يلمع أكثر من الشمس، وثيابه مثل الثلج، وظهر له النبيان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Elijah and Moses the strong ones, saw His clothes upon Mount Tabor, a cloud of light passed, over the disciples.</td>
            <td class="coptic">Ⲏⲗⲓⲁⲥ ⲛⲉⲙ Ⲙⲱⲩ̀ⲥⲏⲥ ⲡⲉⲧϫⲟⲣ: ⲁⲩⲛⲁⲩ ⲉ̀ⲛⲉϥϩ̀ⲃⲱⲥ ϩⲓ Ⲑⲁⲃⲱⲣ: ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲁⲩⲉⲣϫⲓⲛⲓⲟⲣ: ⲛ̀ⲟⲩϭⲏⲡⲓ ⲉⲥⲉ̀ⲣⲟⲩⲱⲓⲛⲓ.</td>
            <td class="arabic">نظر إيليا وموسى القوي، ثيابه فوق تابور، وعبر التلاميذ، سحابة نيرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">And there was the voice from heaven, of God the Father saying, "This is My beloved Son, He has done My will hear Him."</td>
            <td class="coptic">Ⲟⲩⲟϩ ⲓⲥ ⲟⲩⲥ̀ⲙⲏ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ: ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ Ⲫ̀ϯ ⲫ̀Ⲓⲱⲧ: ϫⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁϣⲏⲣⲓ Ⲡⲁⲙⲉⲛⲣⲓⲧ: ⲁϥⲉⲣ ⲡⲁⲟⲩⲱϣ ⲥⲱⲧⲉⲙ ⲛ̀ⲥⲱϥ.</td>
            <td class="arabic">وإذا بصوت من السماء، من عند الله الآب قائلاً، هذا هو إبني حبيبي، قد صنع إرادتي فإسمعوا له.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">We praise and glorify Him, and exalt Him above all, as a good One and Lover of man, have mercy upon us according to Your great mercy.</td>
            <td class="coptic">Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟϥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁϥ: ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϭⲓⲥⲓ ⲙ̀ⲙⲟϥ: ϩⲱⲥ Ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀Ⲙⲁⲓⲣⲱⲙⲓ: ⲛⲁⲓ ⲛⲁⲛ ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">نسبحه ونمجده، ونزيده علواً، كصالح ومحب البشر، إرحمنا كعظيم رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Alleluia Alleluia, Alleluia Alleluia, Jesus Christ the Son of God, was transfigured upon Mount Tabor.</td>
            <td class="coptic">Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁ̅ⲗ̅: Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅ ⲡ̀Ϣⲏⲣⲓ ⲙ̀Ⲫ̀ϯ: ⲁϥϣⲱⲃⲧ ⲉ̀ϫⲉⲛ ⲡⲓⲧⲱⲟⲩ ⲛ̀Ⲑⲁⲃⲱⲣ.</td>
            <td class="arabic">هلليلويا هلليلويا، هلليلويا هلليلويا، يسوع المسيح إبن الله، تجلى على جبل تابور.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">This is He who is worthy of glory, with His good Father, and the Holy Spirit, both now and forever. ${cross}</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ: ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ ⲡⲓⲠ̀ⲛⲉⲩⲙⲁ ⲉ̅ⲑ̅ⲩ̅: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ. ${cross}</td>
            <td class="arabic">هذا الذي ينبغي له المجد، مع أبيه الصالح، والروح القدس، من الآن وإلى الأبد. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
},
};

// function names object
const seasonalDoxologyFunctionNames = [
    { name: "Nayrouz (Coptic New Year)", functions: ["copticNewYearDoxology"], visible: false, toggle: false },
    { name: "Feast of the Cross", functions: ["feastoftheCrossDoxology"], visible: false, toggle: false },
    { name: "Kiahk", functions: ["firstKiahkDoxology","secondKiahkDoxology","thirdKiahkDoxology","fourthKiahkDoxology","fifthKiahkDoxology"], visible: false, toggle: false },
    { name: "Feast of the Nativity Paramoun", functions: ["nativityPramounDoxology"], visible: false, toggle: false },
    { name: "Feast of the Nativity", functions: ["firstFeastofNativityDoxology","secondFeastofNativityDoxology","thirdFeastofNativityDoxology"], visible: false, toggle: false },
    { name: "2nd Day of Nativity", functions: ["firstFeastofNativityDoxology","secondFeastofNativityDoxology","thirdFeastofNativityDoxology"], visible: false, toggle: false },
    { name: "Feast of the Circumcision", functions: ["feastofCircumcisionDoxology"], visible: false, toggle: false },
    { name: "Feast of the Theophany Paramoun", functions: ["theophanyParamounDoxology"], visible: false, toggle: false },
    { name: "Feast of the Theophany", functions: ["firstFeastofTheophanyDoxology","secondFeastofTheophanyDoxology"], visible: false, toggle: false },
    { name: "Feast of the Wedding at Cana of Galilee", functions: ["feastoftheWeddingatCanaofGalileeDoxology"], visible: false, toggle: false },
    { name: "Jonah's Fast", functions: ["jonahFastDoxology"], visible: false, toggle: false },
    { name: "Feast of the Presentation of the Lord to the Temple", functions: ["feastofChristsEntryintotheTempleDoxology"], visible: false, toggle: false },    
    { name: "Great Fast", functions: ["firstGreatFastDoxology","secondGreatFastDoxology","thirdGreatFastDoxology","fourthGreatFastDoxology","fifthGreatFastDoxology"], visible: false, toggle: false },
    { name: "Feast of the Annunciation", functions: ["feastofAnnunciationDoxology"], visible: false, toggle: false },
    // Before the Martyrs
    { name: "Lazarus Saturday", functions: ["lazarusSaturdayDoxology"], visible: false, toggle: false},
    { name: "Hosanna Sunday", functions: ["firstHosannaSundayDoxology","secondHosannaSundayDoxology","thirdHosannaSundayDoxology"], visible: false, toggle: false},
    { name: "Joyous Saturday", functions: ["secondFeastofResurrection_andBrightSaturdayDoxology"], visible: false, toggle: false },
    { name: "Feast of the Resurrection", functions: ["firstFeastofResurrectionDoxology","secondFeastofResurrection_andBrightSaturdayDoxology"], visible: false, toggle: false },
    { name: "Holy 50 Days - Before Ascension", functions: ["firstFeastofResurrectionDoxology","secondFeastofResurrection_andBrightSaturdayDoxology"], visible: false, toggle: false },    
    { name: "Feast of the Resurrection - Archangel Michael", functions: ["archangelMichaelDoxologyfortheResurrection"], visible: false, toggle: false },
    { name: "Thomas Sunday", functions: ["thomasSundayDoxology"], visible: false, toggle: false },
    { name: "Feast of the Ascension", functions: ["feastofAscensionDoxology"], visible: false, toggle: false },
    { name: "Feast of Pentecost", functions: ["feastofPentecostDoxology"], visible: false, toggle: false },
    { name: "Feast of Christ's Entry into Egypt", functions: ["feastofChristEntryintoEgyptDoxology"], visible: false, toggle: false },
    { name: "Feast of the Transfiguration", functions: ["feastofTransfigurationDoxology"], visible: false, toggle: false },
];

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
function getSeasonalDoxologyHtml(functionName, tableNumber) {
    const cleanedDoxologyName = cleanDoxologyName(functionName);
    const doxologyFunction = seasonalDoxologyFunctions[cleanedDoxologyName];  // Look up the function dynamically
    
    if (doxologyFunction) {
        return doxologyFunction(tableNumber);  // Call the associated function
    } else {
        return `No function found for: ${functionName}`;
    }
}

export { seasonalDoxologyFunctions, seasonalDoxologyFunctionNames , getSeasonalDoxologyHtml };