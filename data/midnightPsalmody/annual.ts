import { cross } from '../repeatedPrayers';

function annualCommemoration(tableNumber) {
    const html = `
<table id="table_${tableNumber}" style="display: table;" title="Annual Commemoration">
<caption id="caption_table_${tableNumber}" class="caption">Annual Commemoration
    <span class="arabic-caption">المجمع السنوي</span>
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
            ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲛ̀ⲧⲉϥ...</td>
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
            And Barbara and Juliana and Demiana, That He may&hellip;</td>
        <td class="coptic" >Ⲧⲱ̅: ⲁ̀ⲡⲁ Ⲕⲓⲣ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲉϥⲥⲟⲛ : ⲛⲉⲙ
            Ⲃⲁⲣⲃⲁⲣⲁ ⲛⲉⲙ Ⲓⲟⲩⲗⲓⲁ̀ⲛⲏ ⲛⲉⲙ Ⲇⲩⲙⲓⲁ̀ⲛⲏ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبوا من الرب عنا يااباقير ويوحنا أخوه وبرباره ويوليانه ودميانه ليغفر...</td>
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
        <td class="english" >Pray: My lord King Constantine, and his
            mother, Queen Helen, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲕⲱⲥⲧⲁⲛⲧⲓⲛⲟⲥ : ⲛⲉⲙ
            Ⲏ̀ⲗⲁⲛⲏ ϯⲟⲩⲣⲱ : ⲛ̀ⲧⲉϥ...</td>
        <td class="arabic">اطلبا من الرب عنا ياسيدى الملك قسطنطين وهيلانه الملكة ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_70" class="north">
        <td class="english" >Pray: O wise virgin ladies, the brides of
            Christ, That He may...</td>
        <td class="coptic" >Ⲧⲱ̅ : ⲛⲏⲁ̀ⲗⲟⲩ ⲛ̀ⲥⲁⲃⲉ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ : ⲛⲓϣⲉⲗⲉⲧ
            ⲛ̀ⲧⲉ ⲠⲓⲬ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥ&hellip;</td>
        <td class="arabic">اطلبن من الرب عنا ايتها الفتيات العذارى الحكيمات عرائس المسيح ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_71" class="south">
        <td class="english" >Pray: O saints of this day, each one by
            his name, That He may forgive us our sins.</td>
        <td class="coptic" >Ⲧⲱ̅ : ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ
            ⲡⲁⲓ ⲉ̀ϩⲟⲟⲩ : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
        <td class="arabic">اطلبوا من الرب عنا ياقديسى هذا اليوم كل واحد باسمه ليغفر..</td>
    </tr>
    <tr id="table_${tableNumber}_row_72" class="north">
        <td class="english" >Likewise, we magnify You, with David the
            Psalmist: You are the priest forever, according to the order of Melchizedek.</td>
        <td class="coptic" >̀ Ⲱⲥⲁⲩⲧⲱⲥ ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟⲕ : ⲛⲉⲙ ⲡⲓϩⲩⲙⲛⲟⲇⲟⲥ
            Ⲇⲁⲩⲓⲇ : ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲟⲩⲏⲃ ϣⲁ ⲉ̀ⲛⲉϩ : ⲕⲁⲧⲁ ⲧ̀ⲧⲁⲝⲓⲥ ⲙ̀Ⲙⲉⲗⲭⲓⲥⲉⲇⲉⲕ.</td>
        <td class="arabic">كذلك نعظمك مع المرتل داود قائلين انت هو الكاهن إلى الأبد على طقس ملشيصاداق.</td>
    </tr>
    <tr id="table_${tableNumber}_row_73" class="south">
        <td class="english" >Pray: Our Holy father, the patriarch Abba
            (&hellip;), the high priest, That He may forgive us our sins. ${cross}</td>
        <td class="coptic" >Ⲧⲱ̅: ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲁⲃⲃⲁ
            (...) ⲡⲓⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ : ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
        <td class="arabic">اطلب من الرب عنا ياابانا القديس البطريرك انبا (...) رئيس الكهنة ليغفر. ${cross}</td>
    </tr>
</tbody>
</table>`;
return html;
}

function annualFourthCanticle(tableNumber) {
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
            
            <tr id="table_${tableNumber}_row_28" class="south">
                <td class="english" >Praise Him, in the firmament of his
                    power. Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛ̀ⲧⲉ ⲧⲉϥϫⲟⲙ.
                    Ⲁ̅ⲗ̅.</td>
                <td class="arabic">سبحوه في جلد قوته الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english" >Praise Him, for His mighty acts.
                    Alleluia.</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ϩⲓϫⲉⲛ ⲧⲉϥⲙⲉⲧϫⲱⲣⲓ.
                    Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوه على مقدرته الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english" >Praise Him, according to the multitudes
                    of His greatness. Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲕⲁⲧⲁ ⲡ̀ⲁϣⲁⲓ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ.
                    Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوه ككثرة عظمته الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_34" class="north">
                <td class="english" >Praise Him, with the sound of the
                    trumpet. Alleluia</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ. ⲀⲖ.
                </td>
                <td class="arabic">سبحوه بصوت البوق الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_36" class="south">
                <td class="english" >Praise Him, with psaltery and harp.
                    Alleluia</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲯⲁⲗ ⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲩⲑⲁⲣⲁ.
                    ⲀⲖ</td>
                <td class="arabic">سبحوه بمزمار وقيثارة الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english" >Praise Him, with timbrel and chorus.
                    Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ϩⲁⲛⲭⲟⲣⲟⲥ.
                    ⲀⲖ.</td>
                <td class="arabic">سبحوه بدفوف وصفوف الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_40" class="south">
                <td class="english" >Praise Him, with strings and organs.
                    Alleluia.</td>
                <td class="coptic" >̀ Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲁⲡ ⲛⲉⲙ ⲟⲩⲟⲣⲅⲁⲛⲟⲛ. ⲀⲖ.
                </td>
                <td class="arabic">سبحوه بأوتار وأرغن الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_42" class="north">
                <td class="english" >Praise Him, with pleasant sounding
                    cymbals. Alleluia.</td>
                <td class="coptic" >Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲉ̀ⲛⲉⲥⲉ
                    ⲧⲟⲩⲥ̀ⲙⲏ. Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                <td class="arabic">سبحوه بصنوج حسنة الصوت الليلويا.</td>
            </tr>
            
            <tr id="table_${tableNumber}_row_44" class="south">
                <td class="english" >Praise Him, upon the cymbals of joy.
                    Alleluia.</td>
                <td class="coptic" >Ⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙ ⲃⲁⲗⲟⲛ ⲛ̀ⲧⲉ
                    ⲟⲩⲉ̀ϣ̀ⲗⲏⲗⲟⲩⲓ̀. ⲀⲖ</td>
                <td class="arabic">سبحوه بصنوج التهليل الليلويا.</td>
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

function getAdamDoxologiesConclusion(tableNumber) {
    const html = `
        <table id="table_${tableNumber}" style="display: table;" title="Doxologies Conclusion Adam Continuation">
        <caption id="caption_table_${tableNumber}" class="caption">Doxologies Conclusion Adam Continuation
            <span class="arabic-caption">تكملة ختام الذوكصولوجيات آدم</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >The sick heal them, those who have slept
                    O Lord repose them, and all of our brethren in distress, help us my Lord and all of them.</td>
                <td class="coptic" >Ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ : ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡϭⲟⲓⲥ
                    ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ : ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉⲧⲭⲏ ϧⲉⲛ ϩⲟϫϩⲉϫ ⲛⲓⲃⲉⲛ : Ⲡⲁϭⲟⲓⲥ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ ⲛⲉⲙⲱⲟⲩ.</td>
                <td class="arabic">المرضى اشفهم الذين رقدوا يارب نيحهم. وإخوتنا الذين فى كل شدة ياربى أعنا وإياهم.
                </td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >May God bless us, and let us bless His
                    Holy Name, and may His praise, be always on our lips.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲛ̀ϫⲉ Ⲫⲛⲟⲩϯ: ⲧⲉⲛⲛⲁⲥ̀ⲙⲟⲩ
                    ⲉ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ : ⲛⲁϣⲱⲡⲓ ⲉϥⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲛ</td>
                <td class="arabic">يباركنا الله ولنبارك إسمه القدوس فى كل حين تسبحته دائمة فى أفواهنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >Blessed is the Father and the Son and the
                    Holy Spirit, the perfect Trinity: we worship Him and glorify Him. ${cross}</td>
                <td class="coptic" >Ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ: ⲛⲉⲙ
                    Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϯⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲥ. ${cross}</td>
                <td class="arabic">مبارك الآب والإبن والروح القدس الثالوث الكامل نسجد له ونمجده. ${cross}</td>
            </tr>
        </tbody>
    </table>
    `;
    return html;
}

export { annualCommemoration , annualFourthCanticle , getAdamDoxologiesConclusion } ;