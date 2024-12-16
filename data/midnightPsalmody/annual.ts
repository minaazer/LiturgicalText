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
        <td class="coptic" >Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ : ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ
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

function theMorningDoxology(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Morning Doxology">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Morning Doxology
        <span class="coptic-caption">Ϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ ⲛ̀ⲧⲉ Ϣⲱⲣⲡ</span>
        <span class="arabic-caption">ذكصولوجية باكر</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">We worship the Father and the Son, and the Holy Spirit, hail to the church, the house of the angels.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲭⲉⲣⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲡ̀ⲏⲓ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">نسجد للآب والإبن، والروح القدس، السلام للكنيسة، بيت الملائكة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">Hail to the Virgin, who gave birth to our Savior, hail to Gabriel, who announced to her the good news.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲉ̀ⲧⲁⲥⲙⲉⲥ Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲭⲉⲣⲉ Ⲅⲁⲃⲣⲓⲏⲗ: ⲉ̀ⲧⲁϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲥ.</td>
            <td class="arabic">السلام للعذراء، التي ولدت مخلصنا، السلام لغبريال، الذي بشرها.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Hail to Michael, the archangel, hail to the twenty four, presbyters.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲙⲓⲭⲁⲏⲗ: ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: ⲭⲉⲣⲉ ⲡⲓϫⲟⲩⲧ ϥ̀ⲧⲟⲟⲩ: ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ.</td>
            <td class="arabic">السلام لميخائيل، رئيس الملائكة، السلام للأربعة والعشرين، قسيساً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">Hail to the Cherubim, hail to the Seraphim, hail to all the hosts, of the heavens.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲭⲉⲣⲉ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ⲭⲉⲣⲉ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ: ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ.</td>
            <td class="arabic">السلام للشاروبيم، السلام للسارافيم، السلام لجميع الطغمات، السمائية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">Hail to John, the great forerunner, hail to the, twelve Apostles.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲓⲱⲁⲛⲛⲏⲥ: ⲡⲓⲛⲓϣϯ ⲙ̀ⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ: ⲭⲉⲣⲉ ⲡⲓⲙⲏⲧⲥ̀ⲛⲁⲩ: ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">السلام ليوحنا، السابق العظيم، السلام للإثنى عشر، رسولاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Hail to our father Mark, the Evangelist, the destroyer, of the idols.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ Ⲙⲁⲣⲕⲟⲥ: ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ: ⲡⲓⲣⲉϥϫⲱⲣ ⲉ̀ⲃⲟⲗ: ⲛ̀ⲧⲉ ⲛⲓⲓ̀ⲇⲱⲗⲟⲛ.</td>
            <td class="arabic">السلام لأبينا مرقس، الإنجيلي، مُبَدِد، الأوثان.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Hail to Stephen, the first martyr, hail to George, the morning star.</td>
            <td class="coptic">Ⲭⲉⲣⲉ Ⲥ̀ⲧⲉⲫⲁⲛⲟⲥ: ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ: ⲭⲉⲣⲉ Ⲅⲉⲱⲣⲅⲓⲟⲥ: ⲡⲓⲥⲓⲟⲩ ⲛ̀ⲧⲉ ϩⲁⲛⲁ̀ⲧⲟⲟⲩⲓ̀.</td>
            <td class="arabic">السلام لإستفانوس، الشهيد الأول، السلام لجرجس، كوكب الصبح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Hail to the whole choir, of the martyrs, hail to Abba Antony, and the three Macarii.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ: ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲭⲉⲣⲉ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ: ⲛⲉⲙ ⲡⲓϣⲟⲙⲧ Ⲙⲁⲕⲁⲣⲓⲟⲥ.</td>
            <td class="arabic">السلام لجميع صفوف، الشهداء، السلام لأنبا أنطونيوس، والثلاثة المقارات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">Hail to the whole choir, of the cross-bearers, hail to all the saints, who have pleased the Lord.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ: ⲛ̀ⲧⲉ ⲛⲓⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ⲭⲉⲣⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ: ⲉ̀ⲧⲁϥⲣⲁⲛⲁϥ ⲙ̀Ⲡ̀ϭⲟⲓⲥ.</td>
            <td class="arabic">السلام لجميع صفوف، لُباس الصليب، السلام لجميع القديسين، الذين أرضوا الرب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Through their prayers, O Christ our King, have mercy upon us, in Your kingdom.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲟⲩⲉⲩⲭⲏ: Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲟⲩⲣⲟ: ⲁ̀ⲣⲓ ⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ: ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">أيها المسيح ملكنا، بصلواتهم، إصنع معنا رحمة، في ملكوتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english"><span class="title">(For Our Lord Jesus Christ)</span><br> O true Light, that gives light, to every man, that comes into the world.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ⲡⲉⲛⲟ̅ⲥ̅ Ⲓⲏ̅ⲥ̅ Ⲡⲭ̅ⲥ̅)</span><br>Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲫⲏⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ: ⲉ̀ⲣⲱⲙⲓ ⲛⲓⲃⲉⲛ: ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic"><span class="title">(لأجل ربنا يسوع المسيح)</span><br>أيها النور الحقيقي، الذي يضئ، لكل إنسان، آتٍ إلى العالم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="south">
            <td class="english">You came into the world, through Your love for man, and all the creation, rejoiced at Your coming.</td>
            <td class="coptic">Ⲁⲕⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ: ⲁ̀ϯⲕ̀ⲧⲏⲥⲓⲥ ⲧⲏⲣⲥ: ⲑⲉⲗⲏⲗ ϧⲁ ⲡⲉⲕϫⲓⲛⲓ̀.</td>
            <td class="arabic">أتيت إلى العالم، بمحبتك للبشر، وكل الخليقة، تهللت بمجيئك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="north">
            <td class="english">You have saved Adam, from seduction, and delivered Eve, from the pangs of death.</td>
            <td class="coptic">Ⲁⲕⲥⲱϯ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲁ̀ⲡⲁⲧⲏ: ⲁⲕⲉⲣ Ⲉ̀ⲩⲁ ⲛ̀ⲣⲉⲙϩⲉ: ϧⲉⲛ ⲛⲓⲛⲁⲕϩⲓ ⲛ̀ⲧⲉ ⲫ̀ⲙⲟⲩ.</td>
            <td class="arabic">خلصَّت آدم، من الغواية، وعتقت حواء، من طلقات الموت.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">You gave unto us, the Spirit of sonship, we praise and bless You, with Your angels.</td>
            <td class="coptic">Ⲁⲕϯ ⲛⲁⲛ ⲙ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ: ⲛ̀ⲧⲉ ϯⲙⲉⲧϣⲏⲣⲓ: ⲉⲛϩⲱⲥ ⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ.</td>
            <td class="arabic">أعطيتنا، روح النبوة، نسبحك ونباركك، مع ملائكتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="north">
            <td class="english">When the morning hour, comes upon us, O Christ our God, the true Light.</td>
            <td class="coptic">Ϧⲉⲛ ⲡ̀ϫⲓⲛⲑ̀ⲣⲉϥⲓ̀ ⲛⲁⲛ ⲉ̀ϧⲟⲩⲛ: ⲛ̀ϫⲉ ⲫ̀ⲛⲁⲩ ⲛ̀ϣⲱⲣⲡ: ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ.</td>
            <td class="arabic">عندما يدخل، وقت باكر إلينا، أيها المسيح إلهنا، النور الحقيقي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="south">
            <td class="english">Let the thought of light, shine within us, and do not let the darkness, of pain cover us.</td>
            <td class="coptic">Ⲙⲁⲣⲟⲩϣⲁⲓ ⲛ̀ϧⲏⲧⲉⲛ: ⲛ̀ϫⲉ ⲛⲓⲗⲟⲅⲓⲥⲙⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲟⲩⲟϩ ⲙ̀ⲡⲉⲛⲑ̀ⲣⲉϥϩⲟⲃⲥⲧⲉⲛ: ⲛ̀ϫⲉ ⲡ̀ⲭⲁⲕⲓ ⲛ̀ⲛⲓⲡⲁⲑⲟⲥ.</td>
            <td class="arabic">فلتشرق فينا، حواس النور، ولا تغطينا، ظلمة الآلام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">That we may praise You, with understanding, proclaiming and saying, with David.</td>
            <td class="coptic">Ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛ̀ⲛⲟⲏ̀ⲧⲟⲥ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ: ⲉⲛⲱϣ ⲟⲩⲃⲏⲕ: ⲟⲩⲟϩ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">لكي نسبحك، عقلياً، مع داود، صارخين، نحوك قائلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_18" class="south">
            <td class="english">"My eyes have reached, the morning watch, that I may meditate, upon all Your words."</td>
            <td class="coptic">Ϫⲉ ⲁⲩⲉⲣϣⲟⲣⲡ ⲙ̀ⲫⲟϩ: ⲛ̀ϫⲉ ⲛⲁⲃⲁⲗ ⲙ̀ⲫ̀ⲛⲁⲩ ⲛ̀ϣⲱⲣⲡ: ⲉ̀ⲉⲣⲙⲉⲗⲉⲧⲁⲛ: ϧⲉⲛ ⲛⲉⲕⲥⲁϫⲓ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">"سبق أن بلغت، عيناي وقت السحر، لأتلو، جميع أقوالك."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_19" class="north">
            <td class="english">Hear our voices, according to Your great mercy, save us O Lord our God, according to Your compassion.</td>
            <td class="coptic">Ⲥⲱⲧⲉⲙ ⲉ̀ⲧⲉⲛⲥ̀ⲙⲏ: ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ: ⲛⲁϩⲙⲉⲛ Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲕⲁⲧⲁ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">إسمع صوتنا، كعظيم رحمتك، ونجنا أيها الرب إلهنا، حسب رأفاتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_20" class="south">
            <td class="english">O caring God, the Maker of all good things, who governs well, with His chosen ones.</td>
            <td class="coptic">Ⲫ̀ⲛⲟⲩϯ Ⲡⲓϥⲁⲓⲣⲱⲟⲩϣ: ⲛ̀ⲣⲉϥⲉⲣⲡⲉⲑⲛⲁⲛⲉϥ: Ⲡⲓⲣⲉϥⲉⲣⲟⲓⲕⲟⲛⲟⲙⲓⲛ: ⲛ̀ⲛⲉϥⲥⲱⲧⲡ ⲛ̀ⲕⲁⲗⲱⲥ.</td>
            <td class="arabic">يا الله المُهْتم، صانع الخيرات، مُدبر مُختاريه، حسناً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_21" class="north">
            <td class="english">The strong Governor for those, who take refuge in Him, who longs for the salvation, and deliverance of everyone.</td>
            <td class="coptic">Ⲡⲓⲣⲉϥⲉⲣϩⲉⲙⲓ ⲉⲧϫⲟⲣ: ⲛ̀ⲛⲏⲉ̀ⲧⲁⲩⲫⲱⲧ ϩⲁⲣⲟϥ: ⲫ̀ⲣⲉϥϭⲓϣϣⲱⲟⲩ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲛⲟϩⲉⲙ ⲛ̀ⲧⲟⲩⲟⲩϫⲁⲓ.</td>
            <td class="arabic">المدبر القوي، للملتجئين، المتشوق لخلاص، ونجاة كل أحد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="english">Through Your goodness, You provided us the night, grant us to pass, this day without sin.</td>
            <td class="coptic">Ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲭ̀ⲣⲏⲥⲧⲟⲥ: ⲁⲕⲥⲟⲃϯ ⲛⲁⲛ ⲙ̀ⲡⲓⲉ̀ϫⲱⲣϩ: ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟⲩ: ⲉ̀ⲛⲟⲓ ⲛ̀ⲁⲑⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلاحك هيأت، لنا الليل، أنعم لنا بهذا اليوم، ونحن بغير خطية.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_23" class="north">
            <td class="english">That we may be worthy, to lift up our hands, before You without anger, or evil thoughts.</td>
            <td class="coptic">Ⲉⲑⲣⲉⲛⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ: ⲉ̀ϥⲁⲓ ⲛ̀ⲛⲉⲛϫⲓϫ ⲉ̀ⲡ̀ϣⲱⲓ: ϩⲁⲣⲟⲕ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ: ⲭⲱⲣⲓⲥ ϫⲱⲛⲧ ⲛⲉⲙ ⲙⲟⲕⲙⲉⲕ ⲉϥϩⲱⲟⲩ.</td>
            <td class="arabic">لنستحق أن نرفع، أيدينا إليك، أمامك بغير غضب، ولا فكر ردئ.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_24" class="south">
            <td class="english">At this dawn, make straight our coming in, and our going out, in the joy of Your protection.</td>
            <td class="coptic">Ϧⲉⲛ ⲧⲁⲓϩⲁⲛⲁⲧⲟⲟⲩⲓ̀: ⲥⲟⲩⲧⲱⲛ ⲛⲉⲛⲙⲱⲓⲧ ⲉ̀ϧⲟⲩⲛ: ⲛⲉⲙ ⲛⲉⲛⲙⲱⲓⲧ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲧⲉ ⲧⲉⲕⲥ̀ⲕⲉⲡⲏ.</td>
            <td class="arabic">في هذا السحر، سهل طرقنا، الداخلية والخارجية، بسترك المفرح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_25" class="north">
            <td class="english">That we may proclaim, Your righteousness daily, and praise Your power, with David the prophet.</td>
            <td class="coptic">Ⲉⲑⲣⲉⲛϫⲱ ⲛ̀ⲧⲉⲕⲙⲉⲑⲙⲏⲓ: ⲛ̀ⲉ̀ϩⲟⲟⲩ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀ⲧⲉⲕϫⲟⲙ: ⲛⲉⲙ Ⲇⲁⲩⲓⲇ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
            <td class="arabic">لننطق بعدلك، كل يوم، ونمجد قوتك، مع داود النبي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_26" class="south">
            <td class="english">Saying "In Your peace, O Christ our Savior, we slept and arose, for we have hoped in You.</td>
            <td class="coptic">Ϫⲉ ϧⲉⲛ ⲧⲉⲕϩⲓⲣⲏⲛⲏ: Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲁ̀ⲛⲉⲛⲕⲟⲧ ⲁⲛⲧⲱⲟⲩⲛ: ϫⲉ ⲁ̀ⲛⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ.</td>
            <td class="arabic">قائلين "بسلامك، أيها المسيح مخلصنا، رقدنا وقمنا، لأننا توكلنا عليك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_27" class="north">
            <td class="english">Behold how beneficent, and how pleasant, it is for brethren, to dwell together in unity."</td>
            <td class="coptic">Ϩⲏⲡⲡⲉ ⲟⲩⲡⲉⲑⲛⲁⲛⲉϥ: ⲓⲉ ⲟⲩⲡⲉⲧϩⲟⲗϫ ⲉ̀ⲃⲏⲗ: ⲉ̀ⲡ̀ϯⲙⲁϯ ⲛ̀ϩⲁⲛⲥ̀ⲛⲏⲟⲩ: ⲉⲩϣⲟⲡ ϩⲓ ⲟⲩⲙⲁ.</td>
            <td class="arabic">ها ما هو الحسن، وما هو الحلو، إلا إتفاق إخوة، ساكنين معاً."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_28" class="south">
            <td class="english">United, in the true, evangelic love, like the Apostles.</td>
            <td class="coptic">Ⲉⲩⲉⲣⲥⲩⲙⲫⲱⲛⲓⲛ: ϧⲉⲛ ⲟⲩⲁ̀ⲅⲁⲡⲏ ⲙ̀ⲙⲏⲓ: ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲕⲏ: ⲕⲁⲧⲁ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
            <td class="arabic">مُتفقين، بمحبة حقيقية، إنجيلية، كمثل الرسل.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_29" class="north">
            <td class="english">It is like the fragrant oil, on the head of Christ, running down the beard, down to the feet.</td>
            <td class="coptic">Ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲥⲟϫⲉⲛ: ⲉ̀ϯⲁ̀ⲫⲉ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉϥⲛⲏⲟⲩ ⲉ̀ϫⲉⲛ ϯⲙⲟⲣⲧ: ϣⲁ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ⲛⲓϭⲁⲗⲁⲩϫ.</td>
            <td class="arabic">مثل الطيب، على رأس المسيح، النازل على اللحية، إلى أسفل الرجلين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_30" class="south">
            <td class="english">That anoints every day, the elders, the children and young men, and the deacons.</td>
            <td class="coptic">Ⲉϥⲑⲱϩⲥ ⲙ̀ⲙⲏⲛⲓ ⲛⲓⲃⲉⲛ: ⲛⲓϧⲉⲗⲗⲟⲓ ⲛⲉⲙ ⲛⲓⲁ̀ⲗⲱⲟⲩⲓ̀: ⲛⲉⲙ ⲛⲓϧⲉⲗϣⲓⲣⲓ: ⲛⲉⲙ ⲛⲓⲇⲓⲁⲕⲟⲛⲓⲥⲧⲏⲥ.</td>
            <td class="arabic">يمسح كل يوم، الشيوخ، والصبيان والفتيات، والخدام.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_31" class="north">
            <td class="english">Those whom the Holy Spirit, has attuned together, as a stringed instrument, always blessing God.</td>
            <td class="coptic">Ⲛⲁⲓ ⲉ̀ⲧⲁϥϩⲟⲧⲡⲟⲩ ⲉⲩⲥⲟⲡ: ⲛ̀ϫⲉ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲟⲩⲕⲩⲑⲁⲣⲁ: ⲉⲩⲥ̀ⲙⲟⲩ ⲉ̀Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
            <td class="arabic">هؤلاء الذين، ألَّفهم الروح القدس معاً، مثل قيثارة مُسبحين، الله كل حين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_32" class="south">
            <td class="english">By psalms and hymns, and spiritual songs, by day and by night, with an incessant heart.</td>
            <td class="coptic">Ϧⲉⲛ ϩⲁⲛⲯⲁⲗⲙⲟⲥ ⲛⲉⲙ ϩⲁⲛϩⲱⲥ: ⲛⲉⲙ ϩⲁⲛϩⲱⲇⲏ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ: ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ: ϧⲉⲛ ⲟⲩϩⲏⲧ ⲛ̀ⲁⲧⲭⲁⲣⲱϥ.</td>
            <td class="arabic">بمزامير وتسابيح، وترانيم روحية، النهار والليل، بقلب لا يفتر.</td>
        </tr>
        
        
        <tr id="table_${tableNumber}_row_34" class="north">
            <td class="english"><span class="title">(For the Virgin)</span><br>You are the Mother of the Light, the honored Mother of God, you have carried, the Uncircumscript Logos.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ)</span><br>Ⲛ̀ⲑⲟ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲡⲓⲟⲩⲱⲓⲛⲓ: ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀Ⲙⲁⲥⲛⲟⲩϯ: ⲁ̀ⲣⲉϥⲁⲓ ϧⲁ Ⲡⲓⲗⲟⲅⲟⲥ: Ⲡⲓⲁ̀ⲭⲱⲣⲓⲧⲟⲥ.</td>
            <td class="arabic"><span class="title">(لأجل العذراء)</span><br>أنتِ يا أم النور، المكرمة والدة الإله، حملتِ الكلمة، غير المحوي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_35" class="south">
            <td class="english">After you gave birth to Him, you remained a virgin, with praises and blessings, we magnify you.</td>
            <td class="coptic">Ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲙⲁⲥϥ: ⲁ̀ⲣⲉⲟ̀ϩⲓ ⲉ̀ⲣⲉⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ: ϧⲉⲛ ϩⲁⲛϩⲱⲥ ⲛⲉⲙ ϩⲁⲛⲥ̀ⲙⲟⲩ: ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ.</td>
            <td class="arabic">ومن بعد أن ولدتِه، بقيتِ عذراء، نعظمكِ بتسابيح، وبركات.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_36" class="north">
            <td class="english">For of His own will, and the pleasure of His Father, and the Holy Spirit, He came and saved us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ: ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">لأنه بإرادته، ومسرة أبيه، والروح القدس، آتى وخلصنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_37" class="south">
            <td class="english">And we too, hope to win mercy, through your intercessions, with the Lover of Mankind.</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ: ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ: ϩⲓⲧⲉⲛ ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲛ̀ⲧⲟⲧϥ ⲙ̀Ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
            <td class="arabic">ونحن أيضاً، نطلب أن نفوز، برحمة بشفاعاتك، لدى محب البشر.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_38" class="north">
            <td class="english">The select incense, of your virginity, ascended to the throne, of the Father.</td>
            <td class="coptic">Ⲁ̀ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲉⲧⲥⲱⲧⲡ: ⲛ̀ⲧⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ: ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ: ϣⲁ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲙ̀Ⲫ̀ⲓⲱⲧ.</td>
            <td class="arabic">البخور المختار، الذي لبتوليتك، صعد إلى، كرسي الآب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_39" class="south">
            <td class="english">Better than the incense, of the Cherubim, and the Seraphim, O Virgin Mary.</td>
            <td class="coptic">Ⲉ̀ϩⲟⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ: ⲛ̀ⲧⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲛⲉⲙ Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
            <td class="arabic">أفضل من بخور، الشاروبيم، والسارافيم، يا مريم العذراء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_40" class="north">
            <td class="english">Hail to the new heaven, whom the Father has created, and made a place of rest, for His beloved Son.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲫⲉ ⲙ̀ⲃⲉⲣⲓ: ⲑⲏⲉ̀ⲧⲁ Ⲫ̀ⲓⲱⲧ ⲑⲁⲙⲓⲟⲥ: ⲁϥⲭⲁⲥ ⲛ̀ⲟⲩⲙⲁ ⲛ̀ⲉⲙⲧⲟⲛ: ⲙ̀Ⲡⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ.</td>
            <td class="arabic">السلام للسماء الجديدة، التي صنعها الآب، وجعلها موضع راحة، لإبنه الحبيب.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_41" class="south">
            <td class="english">Hail to the royal throne, of Him who is, carried by, the Cherubim.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ: ⲙ̀ⲃⲁⲥⲓⲗⲓⲕⲟⲛ: ⲙ̀ⲫⲏⲉ̀ⲧⲟⲩϥⲁⲓ ⲙ̀ⲙⲟϥ: ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
            <td class="arabic">السلام للكرسي، الملوكي، الذي للمحمول، على الشاروبيم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_42" class="north">
            <td class="english">Hail to the advocate, of our souls, you are indeed, the pride of our race.</td>
            <td class="coptic">Ⲭⲉⲣⲉ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ: ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ: ⲛ̀ⲑⲟ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲱⲥ: ⲡⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">السلام لشفيعة، نفوسنا، أنت بالحقيقة، فخر جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_43" class="south">
            <td class="english">Intercede on our behalf, O full of grace, before our Savior, our Lord Jesus Christ.</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ: ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛⲥⲱⲧⲏⲣ: Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic">إشفعي فينا، يا ممتلئة نعمة، أمام مخلصنا، ربنا يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_44" class="north">
            <td class="english">That He may confirm us, in the upright faith, and grant us the forgiveness, of our sins.</td>
            <td class="coptic">Ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲧⲁϫⲣⲟⲛ: ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ: ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">لكي يثبتنا، في الإيمان المستقيم، وينعم لنا، بمغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_45" class="south">
            <td class="english">Through the intercessions, of the Mother of God Saint Mary, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲛ̀ⲧⲉ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ: Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بشفاعات، والدة الإله القديسة مريم، يا رب إنعم لنا، بمغفرة خطايانا.</td>
        </tr>
    
        
        <tr id="table_${tableNumber}_row_47" class="north">
            <td class="english"><span class="title">(For the Angels)</span><br>Thousands of thousands, and myriads of myriads, of archangels, and holy angels.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ⲛⲓⲁⲅⲅⲉⲗⲟⲥ)</span><br>Ϩⲁⲛⲁⲛ̀ϣⲟ ⲛ̀ϣⲟ: ⲛⲉⲙ ϩⲁⲛⲑ̀ⲃⲁ ⲛ̀ⲑ̀ⲃⲁ: ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: ⲛⲉⲙ ⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic"><span class="title">(لأجل الملائكة)</span><br>ألوف ألوف، وربوات ربوات، رؤساء ملائكة، وملائكة مُقدسيين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_48" class="south">
            <td class="english">They stand before, the throne, of the Pantocrator, proclaiming and saying.</td>
            <td class="coptic">Ⲉⲩⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ: ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲙ̀ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ: ⲛ̀ⲧⲉ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">وقوف أمام، كرسي، ضابط الكل، صارخين قائلين:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_49" class="north">
            <td class="english">"Holy holy, holy in truth, the glory and the honor, befit the Trinity."</td>
            <td class="coptic">Ϫⲉ ⲭ̀ⲟⲩⲁⲃ ⲭ̀ⲟⲩⲁⲃ: ⲭ̀ⲟⲩⲁⲃ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲧⲁⲓⲟ: ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛ̀Ϯⲧ̀ⲣⲓⲁⲥ.</td>
            <td class="arabic">"قدوس قدوس، قدوس بالحقيقة، المجد والكرامة، يليقان بالثالوث."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_50" class="south">
            <td class="english">Through the intercessions, of the whole choir of the angels, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ: ⲛ̀ⲧⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بشفاعات، جميع صفوف الملائكة، يا رب إنعم لنا، بمغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_52" class="north">
            <td class="english"><span class="title">(For the Apostles)</span><br>Our fathers the Apostles, preached unto the nations, the Gospel, of Jesus Christ.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ)</span><br>Ⲛⲉⲛⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲁⲩϩⲓⲱⲓϣ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ: ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ: ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
            <td class="arabic"><span class="title">(لأجل الرسل)</span><br>آباؤنا الرسل، بشروا في الأمم، بإنجيل، يسوع المسيح.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_53" class="south">
            <td class="english">Their voices went forth, into all the earth, and their words have reached, the ends of the world.</td>
            <td class="coptic">Ⲁ̀ ⲡⲟⲩϧ̀ⲣⲱⲟⲩ ϣⲉⲛⲁϥ: ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ: ⲟⲩⲟϩ ⲛⲟⲩⲥⲁϫⲓ ⲁⲩⲫⲟϩ: ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.</td>
            <td class="arabic">خرجت أصواتهم، إلى الأرض كلها، وبلغ كلامهم، إلى أقطار المسكونة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_54" class="north">
            <td class="english">Through the prayers, of my masters the fathers the Apostles, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ: ⲛ̀ⲧⲉ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلوات، سادتي الآباء الرسل، يا رب إنعم لنا، بمغفرة خطايانا.</td>
        </tr>
        
        
        <tr id="table_${tableNumber}_row_56" class="south">
            <td class="english"><span class="title">(For the Martyrs)</span><br>Unfading crowns, the Lord has placed, upon the whole choir, of the martyrs.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ)</span><br>Ϩⲁⲛⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ: ⲁϥⲧⲏⲓⲧⲟⲩ ⲛ̀ϫⲉ Ⲡ̀ϭⲟⲓⲥ: ϩⲓϫⲉⲛ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ: ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ.</td>
            <td class="arabic"><span class="title">(لأجل الشهداء)</span><br>أكاليل غير مضمحلة، جعلها الرب، على جميع، صفوف الشهداء.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_57" class="north">
            <td class="english">He saved and delivered them, because they took refuge in Him, they celebrated with Him, in His kingdom.</td>
            <td class="coptic">Ⲁϥⲧⲟⲩϫⲱⲟⲩ ⲁϥⲛⲁϩⲙⲟⲩ: ϫⲉ ⲁⲩⲫⲱⲧ ϩⲁⲣⲟϥ: ⲁⲩⲉⲣϣⲁⲓ ⲛⲉⲙⲁϥ: ϧⲉⲛ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic">أنقذهم وخلصهم، لأنهم إلتجأوا إليه، وعيدوا معه، في ملكوته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_58" class="south">
            <td class="english">Through the prayers, of the whole choir of the martyrs, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ: ⲛ̀ⲧⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلوات، جميع صفوف الشهداء، يا رب إنعم لنا، بمغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_60" class="north">
            <td class="english"><span class="title">(For the Saints)</span><br>Your saints bless You, and they speak, of the glory, of Your kingdom.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ⲛⲏⲉⲑⲟⲩⲁⲃ)</span><br>Ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ: ⲉⲩⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲉⲩⲉ̀ⲥⲁϫⲓ ⲙ̀ⲡ̀ⲱ̀ⲟⲩ: ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ.</td>
            <td class="arabic"><span class="title">(لأجل القديسين)</span><br>قديسوك، يباركونك، وينطقون بمجد، ملكوتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_61" class="south">
            <td class="english">Your kingdom O my God, is an eternal kingdom, and Your Lordship, is unto all ages.</td>
            <td class="coptic">Ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ Ⲡⲁⲛⲟⲩϯ: ⲟⲩⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲛⲉϩ: ⲟⲩⲟϩ ⲧⲉⲕⲙⲉⲧϭⲟⲓⲥ: ϣⲁ ⲛⲓⲅⲉⲛⲉⲁ̀ ⲧⲏⲣⲟⲩ.</td>
            <td class="arabic">ملكوتك يا إلهي، ملكوت أبدي، وربوبيتك، إلى كل الأجيال.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_62" class="north">
            <td class="english">Through the prayers, of the whole choir of the cross-bearers, the righteous and the just, O Lord grant us, the forgiveness of our sins.</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ: ⲛ̀ⲧⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲓⲥ̀ⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ: ⲛⲉⲙ ⲛⲓⲑ̀ⲙⲏⲓ ⲛⲉⲙ ⲛⲓⲇⲓⲕⲉⲟⲥ: Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
            <td class="arabic">بصلوات، كافة مصاف لابسي الصليب، والأبرار والصديقين، يا رب إنعم لنا، بمغفرة خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_64" class="south">
            <td class="english"><span class="title">(For the Patriarchs and the Prophets)</span><br>Hail to Elijah, the prophet of temperance, and Elisha, his elect disciple.</td>
            <td class="coptic"><span class="title">(Ⲉⲑⲃⲉ Ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛⲉⲙ Ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ)</span><br>Ⲭⲉⲣⲉ Ⲏ̀ⲗⲓⲁⲥ: ⲡⲓⲥⲟⲫⲣⲟⲛ ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲛⲉⲙ Ⲉ̀ⲗⲓⲥⲉⲟⲥ: ⲡⲉϥⲥⲱⲧⲡ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ.</td>
            <td class="arabic"><span class="title">(لأجل الآباء والأنبياء)</span><br>السلام لإيليا، النبي المتعفف، وإليشع، تلميذه المختار.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_65" class="north">
            <td class="english">The great Evangelist, of the land of Egypt, Mark the Apostle, the first prelate.</td>
            <td class="coptic">Ⲡⲓⲛⲓϣϯ ⲛ̀ⲣⲉϥϩⲓⲱⲓϣ: ϧⲉⲛ ϯⲭⲱⲣⲁ ⲛ̀ⲧⲉ Ⲭⲏⲙⲓ: Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ: ⲡⲉⲥϣⲟⲣⲡ ⲛ̀ⲛⲉϥⲉⲣϩⲉⲙⲓ.</td>
            <td class="arabic">المبشر العظيم، في كورة مصر، مرقس الرسول، مدبرها الأول.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_66" class="south">
            <td class="english">You are the Mother of God, O Virgin Mary, ask Him on our behalf, to have mercy upon our race.</td>
            <td class="coptic">Ⲛ̀ⲑⲟ ⲡⲉ Ⲑ̀ⲙⲁⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ: Ⲙⲁⲣⲓⲁ Ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ⲧⲱⲃϩ ⲙ̀ⲙⲟϥ ⲉ̀ϫⲱⲛ: ⲉⲑⲣⲉϥⲛⲁⲓ ϧⲁ ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">أنت هي أم الله، يا مريم العذراء، أُطلبي منه عنا، أن يرحم جنسنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_67" class="north">
            <td class="english">The great patriarch, our father Abba Severus, whose holy teachings, enlightened our minds.</td>
            <td class="coptic">Ⲡⲓⲛⲓϣϯ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲉⲩⲏⲣⲟⲥ: ⲫⲏⲉ̀ⲧⲁ ⲛⲉϥⲥ̀ⲃⲱⲟⲩⲓ̀ ⲉⲑⲟⲩⲁⲃ: ⲉⲣⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩⲥ.</td>
            <td class="arabic">البطريرك العظيم، أبونا أنبا ساويرس، الذي أنارت تعاليمه، المقدسة عقولنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_68" class="south">
            <td class="english">Our father the confessor, Abba Dioscorus, defended the faith, against the heretics.</td>
            <td class="coptic">Ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ: ⲁⲃⲃⲁ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ: ⲁϥⲙⲓϣⲓ ⲉ̀ϫⲉⲛ ⲡⲓⲛⲁϩϯ: ⲟⲩⲃⲉ ⲛⲓϩⲉⲣⲉⲧⲓⲕⲟⲥ.</td>
            <td class="arabic">أبونا المعترف، أنبا ديسقوروس، حارب عن الإيمان، ضد الهراطقة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_69" class="north">
            <td class="english">And all of our fathers, who have pleased the Lord, may their holy blessings, be a guard unto us.</td>
            <td class="coptic">Ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ ⲧⲏⲣⲟⲩ: ⲉ̀ⲧⲁⲩⲣⲁⲛⲁϥ ⲙ̀Ⲡ̀ϭⲟⲓⲥ: ⲉ̀ⲣⲉ ⲡⲟⲩⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ: ϣⲱⲡⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲣⲉϥⲣⲱⲓⲥ.</td>
            <td class="arabic">وكل آبائنا، الذين أرضوا الرب، بركتهم المقدسة، تكون لنا حارساً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_70" class="south">
            <td class="english">Through their prayers, O God grant us, the forgiveness of our sins, and give us peace. ${cross}</td>
            <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲟⲩⲉⲩⲭⲏ: ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ Ⲫ̀ⲛⲟⲩϯ: ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲟⲩⲥⲱϯ. ${cross}</td>
            <td class="arabic">بصلواتهم، إنعم لنا يا الله، بمغفرة خطايانا، وأعطنا سلاماً. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function creedInro(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Introduction to the Creed">
        <caption id="caption_table_${tableNumber}" class="caption">Introduction to the Creed
            <span class="arabic-caption">مقدمة قانون الإيمان</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english">We exalt you, the Mother of the true Light. We glorify you, O Saint, the
                    Theotokos, for you brought forth unto us the Savior of the whole world; He came and saved our
                    souls.</td>
                <td class="arabic" >نعظمك يا أم النور الحقيقي، ونمجدك أيتها
                    العذراء القديسة، والدة الإله، لأنك ولدت لنا مخلص العالم، أتى وخلص نفوسنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="north">
                <td class="english">Glory to You, our Master, our King, Christ, the pride of the apostles, the crown
                    of the martyrs, the joy of the righteous, the firmness of the churches, the forgiveness of sins.
                </td>
                <td class="arabic" >المجد لكَ يا سيدنا وملكنا المسيح، فخر
                    الرسل، إكليل الشهداء تهليل الصديقين، ثبات الكنائس، غفران الخطايا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english">We proclaim the Holy Trinity in One Godhead. We worship Him. We glorify Him.
                    Lord have mercy. Lord have mercy. Lord bless. Amen. ${cross}</td>
                <td class="arabic" >نبشر بالثالوث القدوس، لاهوت واحد، نسجد له ونمجده. يا رب ارحم. يا رب ارحم. يا رب بارك. أمين. ${cross}</td>
            </tr>
        </tbody>
    </table>
    `
    return html;
}

function creed(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Orthodox Creed">
        <caption id="caption_table_${tableNumber}" class="caption">The Orthodox Creed
            <span class="arabic-caption">قانون الإيمان</span>
        </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >We believe in One God, God the Father,
                    the Pantocrator, Creator of Heaven and earth, and of all things seen and unseen. We believe in
                    One Lord, Jesus Christ, the Only-Begotten Son of God, Begotten of the Father before all ages.
                    Light of Light, True God of True God; begotten, not created;</td>
                <td class="coptic" >Ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ: Ⲫϯ Ⲫ̀ⲓⲱⲧ
                    ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ ⲫⲏ ⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲛⲏ ⲉ̀ⲧⲟⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲏ ⲉⲧⲉ ⲛ̀ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲁⲛ.
                    Ⲧⲉⲛⲛⲁϩϯ ⲉ̀ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ Ⲓˉⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ̀̀Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫϯ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲫ̀ⲓⲱⲧ
                    ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲱⲛ ⲧⲏⲣⲟⲩ: ⲟⲩⲟⲩⲱⲓⲛⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲟⲩⲟⲩⲱⲓⲛⲓ: ⲟⲩⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ:
                    ⲟ̀ⲩⲙⲓⲥⲓ ⲡⲉ ⲟⲩⲑⲁⲙⲓⲟ ⲁⲛ ⲡⲉ:</td>
                <td class="arabic">نؤمن بإله واحد، الله الآب ضابط الكل، خالق السماء والأرض، ما يري وما لا يري.
                    نؤمن برب واحد، يسوع المسيح، ابن الله الوحيد المولود من الآب قبل كل الدهور. نور من نور، إله حق من
                    إله حق، مولود غير مخلوق،</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="north">
                <td class="english" >of one essence with the Father by whom
                    all things were made; who, for us men and for our salvation came down from heaven, and was
                    incarnate of the Holy Spirit and of the Virgin Mary, and became Man. And He was crucified for us
                    under Pontius Pilate, suffered and was buried;</td>
                <td class="coptic" >ⲟⲩⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲡⲉ ⲛⲉⲙ Ⲫ̀ⲓⲱⲧ ⲫⲏ ⲉ̀ⲧⲁ ϩⲱⲃ
                    ⲛⲓⲃⲉⲛ ϣⲱⲡⲓ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ. Ⲫⲁⲓ ⲉ̀ⲧⲉ ⲉⲑⲃⲏⲧⲉⲛ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲉⲑⲃⲉ ⲡⲉⲛⲟⲩϫⲁⲓ: ⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ
                    ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ Ⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲟⲩⲟϩ ⲁϥⲉⲣⲣⲱⲙⲓ:
                    ⲟⲩⲟϩ ⲁⲩⲉⲣⲥ̀ⲧⲁⲩⲣⲱⲛⲓⲛ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ: ⲁϥϣⲉⲡⲉⲙⲕⲁϩ ⲟⲩⲟϩ ⲁⲩⲕⲟⲥϥ: ⲟⲩⲟϩ
                    ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ</td>
                <td class="arabic">مساو للآب في الجوهر، الذى به كان كل شئ. هذا الذي من أجلنا نحن البشر، ومن أجل
                    خلاصنا ، نزل من السماء ، وتجسد من الروح القدس ومن مريم العذراء وتأنس. وصلب عنا علي عهد بيلاطس
                    البنطي ، تألم وقبر. وقام من بين الأموات</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >and on the third day He rose from the
                    dead according to the Scriptures. Ascended into heaven, He sits at the right hand of His Father;
                    and He is coming again in His Glory to judge the living and the dead; whose kingdom shall have
                    no end. Yes, we believe in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the
                    Father;</td>
                <td class="coptic" >ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩ ⲅˉ (ϣⲟⲙⲧ) ⲕⲁⲧⲁ
                    ⲛⲓⲅ̀ⲣⲁⲫⲏ. Ⲁϥϣⲉⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀: ⲁϥϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ. Ⲕⲉ ⲡⲁⲗⲓⲛ ⲉϥⲛⲏⲟⲩ ϧⲉⲛ ⲡⲉϥⲱ̀ⲟⲩ
                    ⲉ̀ϯϩⲁⲡ ⲉ̀ ⲛⲏ ⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲏ ⲉⲑⲙⲱⲟⲩⲧ: ⲫⲏ ⲉ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ ⲟⲩⲁⲑⲙⲟⲩⲛⲕ ⲧⲉ. Ⲥⲉ ⲧⲉⲛⲛⲁϩϯ ⲉ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ
                    Ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲛ̀ⲣⲉϥϯ ⲙ̀ⲡ̀ⲱⲛϧ ⲫⲏ ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲫⲓⲱⲧ:</td>
                <td class="arabic">في اليوم الثالث، كما في الكتب. وصعد الي السموات، وجلس عن يمين أبيه. وأيضا يأتي
                    في مجده ليدين الأحياء والأموات ، الذي ليس لملكه انقضاء. نعم نؤمن بالروح القدس ، الرب المحيي
                    المنبثق من الآب،</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="north">
                <td class="english" >who, with the Father and the Son, is
                    Worshiped and Glorified; who spoke by the prophets. And in one Holy, Catholic and Apostolic
                    Church. We confess one Baptism, for the remission of sins.</td>
                <td class="coptic" >ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲥⲉϯⲱ̀ⲟⲩ ⲛⲁϥ ⲛⲉⲙ Ⲫⲓⲱⲧ ⲛⲉⲙ
                    Ⲡ̀ϣⲏⲣⲓ :ⲫⲏ ⲉ̀ⲧⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ. Ⲉⲟⲩⲓ̀ ⲛ̀ⲁ̀ⲅⲓⲁ̀ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ ⲛ̀ⲉⲕⲕ̀ⲗⲏⲥⲓⲁ.
                    Ⲧⲉⲛⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲛ̀ⲟⲩⲱⲙⲥ ⲛ̀ⲟⲩⲱⲧ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ.</td>
                <td class="arabic">نسجد له ونمجده مع الآب والابن، الناطق في الانبياء. وبكنيسة واحدة مقدسة جامعة
                    رسولية. ونعترف بمعمودية واحدة لمغفرة الخطايا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >We look for the resurrection of the dead,
                    and the life of the age to come. Amen. ${cross}</td>
                <td class="coptic" >Ⲧⲉⲛϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁ ⲧ̀ϩⲏ ⲛ̀ϯⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲛ̀ⲧⲉ
                    ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ: ⲛⲉⲙ ⲡⲓⲱⲛϧ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲱⲛ ⲉⲑⲛⲏⲟⲩ: ⲁ̀ⲙⲏⲛ. ${cross}</td>
                <td class="arabic">وننتظر قيامة الأموات ، وحياة الدهر الآتي آمين. ${cross}</td>
            </tr>
        </tbody>
    </table>
    `
    return html;
}

function psalmodyConclusion(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ">
        <caption id="caption_table_${tableNumber}" class="caption">O God Have Mercy On Us
            <span class="coptic-caption">Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ</span>
            <span class="arabic-caption">يا الله ارحمنا</span>
            </caption>
        <tbody>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english" >Lord Have Mercy (3)</td>
                <td class="coptic" >Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (3)</td>
                <td class="arabic">يارب إرحم(3)</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english" >O God have mercy on us:</td>
                <td class="coptic" >Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ.</td>
                <td class="arabic">ياالله ارحمنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english" >O God hear us:</td>
                <td class="coptic" >Ⲫϯ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ.</td>
                <td class="arabic">ياالله اسمعنا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english" >O God behold us:</td>
                <td class="coptic" >Ⲫϯ ⲥⲟⲙⲥ ⲉ̀ⲣⲟⲛ.</td>
                <td class="arabic">ياالله انظر الينا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english" >O God look to us:</td>
                <td class="coptic" >Ⲫϯ ϫⲟⲩϣⲧ ⲉ̀ⲣⲟⲛ.</td>
                <td class="arabic">ياالله اطّلع علينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english" >O God have compassion on us:</td>
                <td class="coptic" >Ⲫϯ ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
                <td class="arabic">يا الله تراءف علينا.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english" >We are Your people:</td>
                <td class="coptic" >Ⲁⲛⲟⲛ ϧⲁ ⲡⲉⲕⲗⲁⲟⲥ.</td>
                <td class="arabic">نحن شعبك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english" >We are Your creation:</td>
                <td class="coptic" >Ⲁⲛⲟⲛ ϧⲁ ⲡⲉⲕⲡ̀ⲗⲁⲥⲙⲁ.</td>
                <td class="arabic">نحن جبلتك</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english" >Deliver us from our enemies:</td>
                <td class="coptic" >Ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲛϫⲁϫⲓ.</td>
                <td class="arabic">نجنا من أعدائنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english" >Deliver us from inflation:</td>
                <td class="coptic" >Ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗϩⲁ ⲟⲩϩ̀ⲃⲱⲛ.</td>
                <td class="arabic">نجنا من الغلاء.</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english" >We are Your servants:</td>
                <td class="coptic" >Ⲁⲛⲟⲛ ϧⲁ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ</td>
                <td class="arabic">نحن عبيدك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english" >You are the Son of God:</td>
                <td class="coptic" >̀ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ ⲛ̀ⲑⲟⲕ.</td>
                <td class="arabic">أنت ابن الله.</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english" >We believe in You:</td>
                <td class="coptic" >Ⲁⲛⲛⲁϩϯ ⲉ̀ⲣⲟⲕ.</td>
                <td class="arabic">آمنا بك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english" >For You Have come and saved us:</td>
                <td class="coptic" >Ϫⲉ ⲁⲕⲓ̀ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ</td>
                <td class="arabic">لانك أتيت وخلصتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english" >Visit us with Your salvation:</td>
                <td class="coptic" >Ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ.</td>
                <td class="arabic">تعهدنا بخلاصك.</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english" >And forgive us our sins ${cross}</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. ${cross}</td>
                <td class="arabic">واغفر لنا خطيانا. ${cross}</td>
            </tr>
        </tbody>
    </table>
    `
    return html;
}

function theTrisagion(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="The Trisagion">
    
    <caption id="caption_table_${tableNumber}" class="caption">The Trisagion
        <span class="coptic-caption">Ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ</span>
        <span class="arabic-caption">الثلاث تقديسات</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Holy God, holy Mighty, holy Immortal, who was born of the Virgin, have mercy upon us.</td>
            <td class="coptic">Ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: ⲟ̀ ⲉⲕ ⲡⲁⲣⲑⲉⲛⲟⲩ ⲅⲉⲛⲛⲉⲑⲏⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">قُدُّوسٌ الله، قُدُّوسٌ القَويُّ، قُدُّوسٌ الحَيُّ الَّذي لا يَموتُ، الَّذي وُلِدَ مِنَ العَذْراءِ، إرْحَمْنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Holy God, holy Mighty, holy Immortal, who was crucified for us, have mercy upon us.</td>
            <td class="coptic">Ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: ⲟ̀ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">قُدُّوسٌ الله، قُدُّوسٌ القَويُّ، قُدُّوسٌ الحَيُّ الَّذي لا يَموتُ، الَّذي صُلِبَ عنَّا، إرْحَمْنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">Holy God, holy Mighty, holy Immortal, who rose from the dead and ascended into the heavens, have mercy upon us.</td>
            <td class="coptic">Ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: ⲟ̀ ⲁ̀ⲛⲁⲥⲧⲁⲥ ⲉⲕ ⲧⲱⲛ ⲛⲉⲕⲣⲱⲛ ⲕⲉ ⲁ̀ⲛⲉⲗⲑⲱⲥ ⲓⲥ ⲧⲟⲩⲥ ⲟⲩⲣⲁⲛⲟⲩⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.</td>
            <td class="arabic">قُدُّوسٌ الله، قُدُّوسٌ القَويُّ، قُدُّوسٌ الحَيُّ الَّذي لا يَموتُ، الذي قامَ مِنَ الأمْواتِ وصَعِدَ إلَى السَّمواتِ، إرْحَمْنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">Glory to the Father and to the Son and the Holy Spirit, now and forever and unto the ages of all ages. Amen.</td>
            <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩ̀ⲓⲱ ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ: ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ. Ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">المجْدُ للآبِ والإبنِ والرُّوحِ القُدُسِ، الآنَ وكلُّ أَوان وإلَى دَهْرِ الدُّهورِ. آمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">O Holy Trinity, have mercy upon us. O Holy Trinity, have mercy upon us. O Holy Trinity, have mercy upon us.</td>
            <td class="coptic">Ⲁ̀ⲅⲓⲁ Ⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ: ⲡⲁⲛⲁ̀ⲅⲓⲁ Ⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ: Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic">أيُّها الثَّالوثُ القُدُّوسُ إرْحَمْنا. أيُّها الثَّالوثُ القُدُّوسُ إرْحَمْنا. أيُّها الثَّالوثُ القُدُّوسُ إرْحَمْنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="north">
            <td class="english">Lord, forgive our sins. Lord, forgive our iniquities. Lord, forgive our transgressions. Lord, be with the sick of Your people, heal them for the sake of Your holy name. Our fathers and brethren who have slept, repose their souls.</td>
            <td class="coptic">Ⲡ̀ϭⲟⲓⲥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. Ⲡ̀ϭⲟⲓⲥ ⲭⲁ ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. Ⲡ̀ϭⲟⲓⲥ ⲭⲁ ⲛⲉⲛⲡⲁⲣⲁⲡ̀ⲧⲱⲙⲁ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. Ⲡ̀ϭⲟⲓⲥ ϫⲉⲙⲡ̀ϣⲓⲛⲓ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲙⲁⲧⲁϭⲱⲟⲩ ⲉⲑⲃⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ.</td>
            <td class="arabic">يا رَبُّ إغْفِرْ لَنا خَطايانا. يا رَبُّ إغْفِرْ لَنا آثامَنا. يا رَبُّ إغْفِرْ لَنا زَلاَّتَنا. يا رَبُّ إفْتَقدْ مَرْضَى شَعْبكَ، إشْفِهمْ مِنْ أجْل إسْمكَ القُدُّوسِ. آباؤُنا وإخْوَتنا الَّذينَ رَقدوا، يا رَبُّ نَيِّحْ نُفوسَهُم.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">O who are alone is sinless, help us and accept our prayers. For Yours is the glory, dominion, and triple holiness. Lord have mercy. Lord have mercy. Lord bless us. Amen.</td>
            <td class="coptic">Ⲡⲓⲁⲑⲛⲟⲃⲓ Ⲡ̀ϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ: ⲡⲓⲁⲑⲛⲟⲃⲓ Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ: ϣⲉⲡ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ. Ϫⲉ ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ: ⲛⲉⲙ ⲡⲓⲧ̀ⲣⲓⲁⲥ ⲁ̀ⲅⲓⲟⲥ: Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ: Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ: Ⲕⲩⲣⲓⲉ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ. Ⲁ̀ⲙⲏⲛ.</td>
            <td class="arabic">يا مَنْ هُوَ بِلا خَطيَّة، يا ربُّ إرحَمنا. يا مَنْ بِلا خَطيَّةِ، يا رَبُّ أَعِنَّا، وإقْبَلْ طَلباتِنا إلَيْكَ. لأنَّ لَكَ المجْدَ والعِزَّةَ والتَّقْديسَ المثلَّثَ. يا ربُّ إرحَم. يا ربُّ إرحَم. يا رَبُّ بارِكْ. آمين.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="north">
            <td class="english">Make us worthy to pray thankfully: “Our Father who art in heaven ….”</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: ϫⲉ Ⲡⲉⲛⲓⲱⲧ ⲉⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ ...</td>
            <td class="arabic">وإجعلنا مستحقين أن نقول بشكر: "أبانا الذي في السموات...</td>
        </tr>
        </tbody>
</table>`;
 return html;
}

function holyHolyHoly(tableNumber) {
    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Holy Holy Holy">
    
    <caption id="caption_table_${tableNumber}" class="caption">Holy Holy Holy
        <span class="arabic-caption">قدوس قدوس قدوس</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Holy, holy, holy, is the Lord of Sabaoth. Heaven and earth are full of Your glory and honor. O God, the Father the Pantocrator, have mercy on us, O Holy Trinity, have mercy on us. O Lord, God of hosts, be with us. For we have no helper in our hardships and tribulations but You.</td>
            <td class="arabic">قدوس، قدوس، قدوس، رب الصباؤوت. السماء والأرض مملوءتان من مجدك وكرامتك. ارحمنا يا الله الآب ضابط الكل. أيها الثالوث القدوس ارحمنا. أيها الرب إله القوات كن معنا، لأنه ليس لنا معين في شدائدنا وضيقاتنا سواك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">Absolve, forgive, and remit O God, our transgressions; those which we have committed willingly and those which we have committed unwillingly, those which we have committed knowingly those which we have committed unkowingly, the hidden and the manifest.</td>
            <td class="arabic">حل واغفر واصفح لنا يا الله عن سيئاتنا، التي صنعناها بإرادتنا والتي صنعناها بغير إرادتنا، التي فعلناها بمعرفة والتي فعلناها بغير معرفة، الخفية والظاهرة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english"> O Lord forgive us, for the sake of Your holy name which is called upon us, Let it be according to Your mercy O Lord and not according to our sins.</td>
            <td class="arabic">يا رب اغفرها لنا، من أجل اسمك القدوس الذي دعي علينا. كرحمتك يا رب وليس كخطايانا.</td>
        </tr>
            
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">Make us worthy to pray thankfully: “Our Father who art in heaven ….”</td>
            <td class="coptic">Ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: ϫⲉ Ⲡⲉⲛⲓⲱⲧ ⲉⲧ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ ...</td>
            <td class="arabic">وإجعلنا مستحقين أن نقول بشكر: "أبانا الذي في السموات...</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


function nekNai(tableNumber, aktonkAki) {

    const html = `
    <table id="table_${tableNumber}" style="display: table;" title="Nek Nai">
    
    <caption id="caption_table_${tableNumber}" class="caption">Your mercies O my God
        <span class="coptic-caption">Ⲛⲉⲕⲛⲁⲓ ⲱ̀ Ⲡⲁⲛⲟⲩϯ</span>
        <span class="arabic-caption">مراحمك يا إلهي</span>
    </caption>
    <tbody>
    
        <tr id="table_${tableNumber}_row_0" class="north">
            <td class="english">Your mercies O my God, are countless, and exceedingly plenteous, are Your compassion.</td>
            <td class="coptic">Ⲛⲉⲕⲛⲁⲓ ⲱ̀ Ⲡⲁⲛⲟⲩϯ: ϩⲁⲛⲁⲧϭⲓⲏ̀ⲡⲓ ⲙ̀ⲙⲱⲟⲩ: ⲥⲉⲟϣ ⲉ̀ⲙⲁϣⲱ: ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">مراحمك يا إلهي، غير محصاة، وكثيرة جداً، هي رأفاتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_1" class="south">
            <td class="english">All the raindrops, are counted by You, and the sand of the sea, is before Your eyes.</td>
            <td class="coptic">Ⲛⲓⲧⲉⲗⲧⲓⲗⲓ ⲙ̀ⲙⲟⲩⲛϩⲱⲟⲩ: ⲥⲉⲏⲡ ⲛ̀ⲧⲟⲧⲕ ⲧⲏⲣⲟⲩ: ⲡⲓⲕⲉϣⲱ ⲛ̀ⲧⲉ ⲫ̀ⲓⲟⲙ: ⲥⲉⲭⲏ ⲛⲁϩⲣⲉⲛ ⲛⲉⲕⲃⲁⲗ.</td>
            <td class="arabic">قطرات المطر، محصاة عندك جميعها، ورمل البحر، كائن أمام عينيك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">How much more are, the sins of my soul, manifest before You, O my Lord.</td>
            <td class="coptic">Ⲓⲉ ⲁⲩⲏⲣ ⲙⲁⲗⲗⲟⲛ: ⲛⲓⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲧⲁⲯⲩⲭⲏ: ⲛⲁⲓ ⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ Ⲡⲁϭⲟⲓⲥ.</td>
            <td class="arabic">فكم بالحري، خطايا نفسي، هذه الظاهرة، أمامك يا ربي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_3" class="south">
            <td class="english">The sins that I have committed, do not remember my Lord, and do not count, my iniquities.</td>
            <td class="coptic">Ⲛⲓⲛⲟⲃⲓ ⲉ̀ⲧⲁⲓⲁⲧⲟⲩ: Ⲡⲁϭⲟⲓⲥ ⲛ̀ⲛⲉⲕⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀: ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣϯϩ̀ⲑⲏⲕ: ⲉ̀ⲛⲁⲁ̀ⲛⲟⲙⲓⲁ.</td>
            <td class="arabic">الخطايا التي صنعتها، يا ربي لا تذكرها، ولا تحسب، آثامي.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_4" class="north">
            <td class="english">For You have chosen the publican, and the adulteress You have saved, and the right-hand thief, my Lord You have remembered.</td>
            <td class="coptic">Ϫⲉ ⲡⲓⲧⲉⲗⲱⲛⲏⲥ ⲁⲕⲥⲟⲧⲡϥ: ϯⲡⲟⲣⲛⲏ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲥ: ⲡⲓⲥⲟⲛⲓ ⲉⲧⲥⲁⲟⲩⲓ̀ⲛⲁⲙ: Ⲡⲁϭⲟⲓⲥ ⲁⲕⲉⲣⲡⲉϥⲙⲉⲩⲓ̀.</td>
            <td class="arabic">فإن العشار إخترته، والزانية خلصتها، واللص اليمين، يا سيدي ذكرته.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">And I too, the sinner, teach me O my Master, to offer repentance.</td>
            <td class="coptic">Ⲁ̀ⲛⲟⲕ ϩⲱ Ⲡⲁϭⲟⲓⲥ: ϧⲁ ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙⲁⲧ̀ⲥⲁⲃⲟⲓ ⲛ̀ⲧⲁⲓ̀ⲣⲓ: ⲛ̀ⲟⲩⲙⲉⲧⲁⲛⲟⲓⲁ.</td>
            <td class="arabic">وأنا أيضاً الخاطئ، يا سيدي، علمني، أن أصنع توبة.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">For You do not desire, the death of a sinner, but rather that he returns, and that his soul may live.</td>
            <td class="coptic">Ϫⲉ ⲭ̀ⲟⲩⲱϣ ⲙ̀ⲫ̀ⲙⲟⲩ ⲁⲛ: ⲙ̀ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲧⲉϥⲧⲁⲥⲑⲟϥ: ⲛ̀ⲧⲉⲥⲱⲛϧ ⲛ̀ϫⲉ ⲧⲉϥⲯⲩⲭⲏ.</td>
            <td class="arabic">لأنك لا تشاء، موت الخاطئ، مثل أن يرجع، وتحيا نفسه.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Restore us O God, to Your salvation, and deal with us, according to Your goodness.</td>
            <td class="coptic">Ⲙⲁⲧⲁⲥⲑⲟⲛ Ⲫ̀ⲛⲟⲩϯ: ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲉⲕⲟⲩϫⲁⲓ: ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ: ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ.</td>
            <td class="arabic">ردنا يا الله، إلى خلاصك، وعاملنا، كصلاحك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">For You are good, and merciful, let Your compassion, speedily come to us.</td>
            <td class="coptic">Ϫⲉ ⲛ̀ⲑⲟⲕ ⲟⲩⲁ̀ⲅⲁⲑⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏⲧ: ⲙⲁⲣⲟⲩⲧⲁϩⲟⲛ ⲛ̀ⲭⲱⲗⲉⲙ: ⲛ̀ϫⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ.</td>
            <td class="arabic">لأنك أنت صالح، ورحوم، فلتدركنا، رأفاتك سريعاً.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english">Have compassion upon us all, O Lord God our Savior, and have mercy upon us, according to Your great mercy.</td>
            <td class="coptic">Ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ ⲧⲏⲣⲉⲛ: Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ: ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">ترأف علينا كلنا، أيها الرب الإله، مخلصنا وإرحمنا، كعظيم رحمتك.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Remember those, O Christ our Master, be among us, and proclaim and say.</td>
            <td class="coptic">Ⲛⲁⲓ ⲕ̀ⲓ̀ⲣⲓ ⲙ̀ⲡⲟⲩⲙⲉⲩⲓ̀: ⲱ̀ Ⲡⲉⲛⲛⲏⲃ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲕⲉ̀ϣⲱⲡⲓ ϧⲉⲛ ⲧⲉⲛⲙⲏϯ: ⲉⲕⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲕϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">هؤلاء أذكرهم، يا سيدنا المسيح، كن في وسطنا، صارخاً قائلاً:</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english">"My peace I, give to you, the peace of My Father, I leave with you."</td>
            <td class="coptic">Ϫⲉ ⲧⲁϩⲓⲣⲏⲛⲏ ⲁ̀ⲛⲟⲕ: ϯϯ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ: ⲧ̀ϩⲓⲣⲏⲛⲏ ⲙ̀Ⲡⲁⲓⲱⲧ: ϯⲭⲱ ⲙ̀ⲙⲟⲥ ⲛⲉⲙⲱⲧⲉⲛ.</td>
            <td class="arabic">"سلامي أنا، أعطيكم، سلام أبي، أتركه معكم."</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english">O King of peace, grant us Your peace, render unto us Your peace, and forgive us our sins.</td>
            <td class="coptic">Ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">يا ملك السلام، أعطنا سلامك، قرر لنا سلامك، وإغفر لنا خطايانا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">Disperse the enemies, of the Church, and fortify her that she, may not be shaken forever.</td>
            <td class="coptic">Ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ⲛ̀ⲧⲉ Ϯⲉⲕⲕⲗⲏⲥⲓⲁ: ⲁ̀ⲣⲓⲥⲟⲃⲧ ⲉ̀ⲣⲟⲥ: ⲛ̀ⲛⲉⲥⲕⲓⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
            <td class="arabic">فرِّق أعداء الكنيسة، وحصنها، فلا تتزعزع، إلى الأبد.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english">Emmanuel our God, is now in our midst, with the glory of His Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: ϧⲉⲛ ⲧⲉⲛⲙⲏϯ ϯⲛⲟⲩ: ϧⲉⲛ ⲡ̀ⲱ̀ⲟⲩ ⲛ̀ⲧⲉ Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">عمانوئيل إلهنا، في وسطنا الآن، بمجد أبيه، والروح القدس.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">May He bless us all, and purify our hearts, and heal the sicknesses, of our souls and bodies.</td>
            <td class="coptic">Ⲛ̀ⲧⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲧⲏⲣⲉⲛ: ⲛ̀ⲧⲉϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛϩⲏⲧ: ⲛ̀ⲧⲉϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲓϣⲱⲛⲓ: ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ.</td>
            <td class="arabic">ليباركنا كلنا، ويطهر قلوبنا، ويشفي أمراض، نفوسنا وأجسادنا.</td>
        </tr>
        
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">We worship You O Christ, with Your good Father, and the Holy Spirit, for You have ${aktonkAki.english} and saved us. ${cross}</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ${aktonkAki.coptic} ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. ${cross}</td>
            <td class="arabic">نسجد لك أيها المسيح، مع إبيك الصالح، والروح القدس، لأنك ${aktonkAki.arabic} وخلصتنا. ${cross}</td>
        </tr>
        </tbody>
</table>`;
 return html;
}


export { annualCommemoration , annualFourthCanticle , getAdamDoxologiesConclusion , theMorningDoxology ,
    creedInro , creed , holyHolyHoly , psalmodyConclusion , theTrisagion , nekNai
 } ;