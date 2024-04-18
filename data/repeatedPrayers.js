/** @format */

function hourIntro(eHour, aHour, eDay, aDay) {
    let html = `
        <div class="section" id="section_1" title="Introduction">
            <table id="table_1" title="Introduction of the ${eHour} Hour of the ${eDay}">
                <caption class="caption" id="caption_table_1">The ${eHour} Hour of the ${eDay}<br><span class="arabic-caption">الساعة ${aHour} من ${aDay}</span></caption>
                <tr id="table_1_row_1" class="role">
                    <td class="english">Priest:</td>
                    <td class="coptic">Ⲡⲓⲟⲩⲏⲃ:</td>
                    <td class="arabic">الكاهن:</td>
                </tr>
                <tr id="table_1_row_2" class="text">
                    <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                    <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ: Ⲁⲙⲏⲛ.</td>
                    <td class="arabic">باسم الأب والإبن والروح القدس اله واحد، امين.</td>
                <tr id="table_1_row_3" class="text">
                    <td class="english">The prophecies of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                    <td class="arabic">نبوات الساعة ${aHour} من ${aDay} من البصخة المقدسة بركاتها علينا، امين.</td>
                </tr>
                
            </table>
        </div>\n`;
    return html;
}

function paschalPraise1(
    sectionNumber,
    tableNumber1,
    tableNumber2,
    eHour,
    aHour,
    eDay,
    aDay
) {
    let html = `
        <div class="section" id="section_${sectionNumber}">
            <table id="table_${tableNumber1}" title="Paschal Praise">
                <caption class="caption" id="caption_table_${tableNumber1}">Paschal Praise</caption>
                <tr id="table_${tableNumber1}_row_0" class="priest">
                    <td class="english">Lord have mercy upon us. Alleluia.</td>
                    <td class="coptic">Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ: Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                    <td class="arabic">يا رب ارحمنا. الليلويا.</td>
                </tr>
                <tr id="table_${tableNumber1}_row_1" class="priest">
                    <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                    <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
                    <td class="arabic">باسم الأب و الابن و الروح القدس اله واحد، أمين.</td>
                </tr>
                <tr id="table_${tableNumber1}_row_2" class="priest">
                    <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, Both now and
                        ever and unto the ages of ages. Amen.</td>
                    <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁⲅⲓⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ: Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ:
                        ⲁ̀ⲙⲏⲛ.</td>
                    <td class="arabic">المجد للأب والإبن والروح القدس الأن وكل أوان والى دهر الدهور كلها، أمين.</td>
                </tr>
                <tr id="table_${tableNumber1}_row_3" class="priest">
                    <td class="english">The doxology of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                    <td class="arabic">تسبحة الساعة ${aHour} من ${aDay} من البصخة المقدسة بركاتها علينا، أمين.
                    </td>
                </tr>
                <tr id="table_${tableNumber1}_row_4" class="priest">
                    <td class="english">O Lord make us worthy to pray thankfully saying: Our Father…</td>
                    <td class="coptic">Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲟⲧ ...</td>
                    <td class="arabic">اللهُمَ اجعلنا مستحقين ان نقول بشكر: أبانا الذي...</td>
                </tr>
            </table>
            <table id="table_${tableNumber2}" class="onePage" title="Paschal Praise">
                <tr id="table_${tableNumber2}_row_0" class="text">
                    <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen;
                        Emmanuel our God and King.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ ϣⲁ ⲉ̀ⲛⲉϩ ⲁ̀ⲙⲏⲛ: Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲡⲉⲛⲛⲟⲩϯ
                        ⲡⲉⲛⲟⲩⲣⲟ .</td>
                    <td class="arabic">لك القوة والمجد والبركة والعزة إلى الأبد آمين عمانوئيل إلهنا وملكنا .</td>
                </tr>
                <tr id="table_${tableNumber2}_row_1" class="text">
                    <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen; My
                        Lord Jesus Christ.</td>
                    <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ ϣⲁ ⲉ̀ⲛⲉϩ ⲁ̀ⲙⲏⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ
                        Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ:</td>
                    <td class="arabic">لك القوة والمجد والبركة والعزة إلى الأبد آمين يا ربي يسوع المسيح.</td>
                </tr>
                <tr id="table_${tableNumber2}_row_2" class="text">
                    <td class="english">For Thine …</td>
                    <td class="coptic">Ⲑⲱⲕ ...</td>
                    <td class="arabic">لك القوة ...</td>
                </tr>
            </table>
        </div>\n`;
    return html;
}

function paschalPraise2(
    sectionNumber,
    tableNumber1,
    tableNumber2,
    eHour,
    aHour,
    eDay,
    aDay
) {
    let html = `
          <div class="section" id="section_${sectionNumber}">
              <table id="table_${tableNumber1}" title="Paschal Praise">
                  <caption class="caption" id="caption_table_${tableNumber1}">Paschal Praise</caption>
                  <tr id="table_${tableNumber1}_row_0" class="priest">
                      <td class="english">Lord have mercy upon us. Alleluia.</td>
                      <td class="coptic">Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ: Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                      <td class="arabic">يا رب ارحمنا. الليلويا.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_1" class="priest">
                      <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                      <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
                      <td class="arabic">باسم الأب و الابن و الروح القدس اله واحد، أمين.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_2" class="priest">
                      <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, Both now and
                          ever and unto the ages of ages. Amen.</td>
                      <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁⲅⲓⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ: Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ:
                          ⲁ̀ⲙⲏⲛ.</td>
                      <td class="arabic">المجد للأب والإبن والروح القدس الأن وكل أوان والى دهر الدهور كلها، أمين.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_3" class="priest">
                      <td class="english">The doxology of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                      <td class="arabic">تسبحة الساعة ${aHour} من ${aDay} من البصخة المقدسة بركاتها علينا، أمين.
                      </td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_4" class="priest">
                      <td class="english">O Lord make us worthy to pray thankfully saying: Our Father…</td>
                      <td class="coptic">Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲟⲧ ...</td>
                      <td class="arabic">اللهُمَ اجعلنا مستحقين ان نقول بشكر: أبانا الذي...</td>
                  </tr>
              </table>
              <table id="table_${tableNumber2}" class="onePage" title="Paschal Praise">
                  <tr id="table_${tableNumber2}_row_0" class="text">
                      <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen;
                          Emmanuel our God and King.</td>
                      <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ ϣⲁ ⲉ̀ⲛⲉϩ ⲁ̀ⲙⲏⲛ: Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲡⲉⲛⲛⲟⲩϯ
                          ⲡⲉⲛⲟⲩⲣⲟ .</td>
                      <td class="arabic">لك القوة والمجد والبركة والعزة إلى الأبد آمين عمانوئيل إلهنا وملكنا .</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_1" class="text">
                      <td class="english">For Thine is the power, the glory, the blessing,  the majesty forever. Amen;  My Lord Jesus Christ. My Good Savior.</td>
                      <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ ϣⲁ ⲉ̀ⲛⲉϩ  ⲁ̀ⲙⲏⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.</td>
                      <td class="arabic">لك القوة والمجد والبركة والعزة إلى الأبد آمين يا ربي يسوع المسيح. مخلصى الصالح.</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_2" class="text">
                      <td class="english">For Thine …</td>
                      <td class="coptic">Ⲑⲱⲕ ...</td>
                      <td class="arabic">لك القوة ...</td>
                  </tr>
              </table>
          </div>\n`;
    return html;
}

function paschalPraise3(
    sectionNumber,
    tableNumber1,
    tableNumber2,
    eHour,
    aHour,
    eDay,
    aDay
) {
    let html = `
          <div class="section" id="section_${sectionNumber}">
              <table id="table_${tableNumber1}" title="Paschal Praise">
                  <caption class="caption" id="caption_table_${tableNumber1}">Paschal Praise</caption>
                  <tr id="table_${tableNumber1}_row_0" class="priest">
                      <td class="english">Lord have mercy upon us. Alleluia.</td>
                      <td class="coptic">Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ: Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ.</td>
                      <td class="arabic">يا رب ارحمنا. الليلويا.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_1" class="priest">
                      <td class="english">In the name of the Father, and the Son, and the Holy Spirit, one God. Amen.</td>
                      <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ ⲁ̀ⲙⲏⲛ.</td>
                      <td class="arabic">باسم الأب و الابن و الروح القدس اله واحد، أمين.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_2" class="priest">
                      <td class="english">Glory be to the Father, and to the Son, and to the Holy Spirit, Both now and
                          ever and unto the ages of ages. Amen.</td>
                      <td class="coptic">Ⲇⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁⲅⲓⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ: Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ:
                          ⲁ̀ⲙⲏⲛ.</td>
                      <td class="arabic">المجد للأب والإبن والروح القدس الأن وكل أوان والى دهر الدهور كلها، أمين.</td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_3" class="priest">
                      <td class="english">The doxology of the ${eHour} hour of the ${eDay} of Holy Pascha. May its blessings be with us. Amen.</td>
                      <td class="arabic">تسبحة الساعة ${aHour} من ${aDay} من البصخة المقدسة بركاتها علينا، أمين.
                      </td>
                  </tr>
                  <tr id="table_${tableNumber1}_row_4" class="priest">
                      <td class="english">O Lord make us worthy to pray thankfully saying: Our Father…</td>
                      <td class="coptic">Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲟⲧ ...</td>
                      <td class="arabic">اللهُمَ اجعلنا مستحقين ان نقول بشكر: أبانا الذي...</td>
                  </tr>
              </table>
              <table id="table_${tableNumber2}" class="onePage" title="Paschal Praise">
                  <tr id="table_${tableNumber2}_row_0" class="text">
                      <td class="english">For Thine is the power, the glory, the blessing, the majesty forever. Amen;
                          Emmanuel our God and King.</td>
                      <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ ϣⲁ ⲉ̀ⲛⲉϩ ⲁ̀ⲙⲏⲛ: Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲡⲉⲛⲛⲟⲩϯ
                          ⲡⲉⲛⲟⲩⲣⲟ .</td>
                      <td class="arabic">لك القوة والمجد والبركة والعزة إلى الأبد آمين عمانوئيل إلهنا وملكنا .</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_1" class="text">
                      <td class="english">For Thine is the power, the glory, the blessing,  the majesty forever. Amen;  My Lord Jesus Christ. My Good Savior. The Lord is my strength, and my praise, Thou became to me a sacred salvation. </td>
                      <td class="coptic">Ⲑⲱⲕ ⲧⲉ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲥ̀ⲙⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ ϣⲁ ⲉ̀ⲛⲉϩ  ⲁ̀ⲙⲏⲛ: Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: Ⲡⲁⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ. ⲧⲁϫⲟⲙ ⲛⲉⲙ ⲡⲁⲥ̀ⲙⲟⲩ ⲡⲉ ˙Ⲡϭⲟⲓⲥ: ⲁϥϣⲱⲡⲓ ⲛⲏⲓ ⲉⲩⲥⲱⲧⲏⲣⲓⲁ̀ ⲉϥⲟⲩⲁⲃ</td>
                      <td class="arabic">لك القوة والمجد والبركة والعزة إلى الأبد آمين يا ربي يسوع المسيح. مخلصى الصالح. قوتي  وتسبيحتي هو الرب و قد صار لى خلاصاً مقدساً.</td>
                  </tr>
                  <tr id="table_${tableNumber2}_row_2" class="text">
                      <td class="english">For Thine …</td>
                      <td class="coptic">Ⲑⲱⲕ ...</td>
                      <td class="arabic">لك القوة ...</td>
                  </tr>
              </table>
          </div>\n`;
    return html;
}

function copticGospelIntro(tableNumber) {
    let html = `
    <table id="table_${tableNumber}" title="We Beseech">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">Ⲕⲉ ⲩⲡⲉⲣⲧⲟⲩ</span></caption>
        <tr id="table_${tableNumber}_row_0" class="text">
            <td class="english">We beseech our Lord and God</td>
            <td class="coptic">Ⲕⲉ ⲩⲡⲉⲣⲧⲟⲩ ⲕⲁⲧⲁ ⲝⲓⲱ ⲑⲏⲛⲉ ⲏ̀ⲙⲁⲥ:</td>
            <td class="arabic">نتوسل من ربنا وإلهنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="text">
            <td class="english">That we may be worthy</td>
            <td class="coptic">ⲧⲏⲥ ⲁⲕⲣⲟ ⲁ̀ⲥⲉⲱⲥ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ: </td>
            <td class="arabic">لكى نكون مستحقين</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="text">
            <td class="english">To hear the Holy Gospel.</td>
            <td class="coptic">ⲕⲩⲣⲓⲟⲛ ⲕⲉ ⲧⲟⲛ ⲑⲉⲟⲛ ⲏ̀ⲙⲱⲛ: <̀/td>
            <td class="arabic">لسماع الإنجيل المقدس.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="text">
            <td class="english">In wisdom, let us attend to the Holy Gospel.</td>
            <td class="coptic">ⲓⲕⲉⲧⲉⲩⲥⲱⲙⲉⲛ ⲥⲟⲫⲓⲁ̀ ⲟⲣⲑⲓ ⲁ̀ⲕⲟⲩⲥⲱⲙⲉⲛ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ.</td>
            <td class="arabic">اصغوا وانصتوا بحكمة للإنجيل المقدس.</td>
        </tr>
    </table>`;
    return html;
}

function daytimeExpositionIntro(tableNumber) {
    let html = `
    <table id="table_${tableNumber}" title="Daytime Exposition Introduction">
        <caption class="caption" id="caption_table_${tableNumber}">Exposition Introduction
        <span class="arabic-caption">مقدمة الطرح</span></caption>
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">In the name of the Trinity,</td>
            <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲛ̀ ϯⲧ̀ⲣⲓⲁⲥ:</td>
            <td class="arabic">باسم الثالوث</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">One in Essence,</td>
            <td class="coptic">ⲛ̀ⲟ̀ⲩⲙⲟⲟⲩⲥⲓⲟⲥ:</td>
            <td class="arabic">المساوي</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="priest">
            <td class="english">The Father and the Son,</td>
            <td class="coptic">̀̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣ̀ⲏⲣⲓ: </td>
            <td class="arabic">الآب والابن</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">And the Holy Spirit.</td>
            <td class="coptic">ⲛⲉⲙ ⲡⲓ Ⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
            <td class="arabic">والروح القدس</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="priest">
            <td class="english">O true Light,</td>
            <td class="coptic">Ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁ  ⲫ̀ⲙⲏⲓ :</td>
            <td class="arabic">أيها النور الحقيقي</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">Who enlightens,</td>
            <td class="coptic">ⲫⲏ ⲉⲧⲉⲣⲟⲩⲱⲓⲛⲓ :</td>
            <td class="arabic">الذى يضئ</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="priest">
            <td class="english">Every man,</td>
            <td class="coptic">ⲉ̀ⲣⲱⲙⲓ ⲛⲓⲃⲉⲛ :</td>
            <td class="arabic">لكل إنسان</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="congregation">
            <td class="english">That comes into the world.</td>
            <td class="coptic">ⲉ̀ⲑⲛⲏⲟⲩ ⲉ̀ ⲡⲓⲕⲟⲥⲙⲟⲥ.</td>
            <td class="arabic">آتِ إلى العالم.</td>
        </tr>
    </table>\n`;
    return html;
}

function nighttimeExpositionIntro(tableNumber) {
    let html = `
      <table id="table_${tableNumber}" title="Nighttime Exposition Introduction">
          <caption class="caption" id="caption_table_${tableNumber}">Exposition Introduction
          <span class="arabic-caption">مقدمة الطرح</span></caption>
          <tr id="table_${tableNumber}_row_0" class="priest">
              <td class="english">In the name of the Trinity,</td>
              <td class="coptic">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲛ̀ ϯⲧ̀ⲣⲓⲁⲥ :</td>
              <td class="arabic">باسم الثالوث</td>
          </tr>
          <tr id="table_${tableNumber}_row_1" class="congregation">
              <td class="english">One in Essence,</td>
              <td class="coptic">ⲛ̀ⲟ̀ⲩⲙⲟⲟⲩⲥⲓⲟⲥ :</td>
              <td class="arabic">المساوي</td>
          </tr>
          <tr id="table_${tableNumber}_row_2" class="priest">
              <td class="english">The Father and the Son</td>
              <td class="coptic"> ̀ Ⲫⲓⲱⲧ ⲛⲉⲙ  ̀ Ⲡϣⲏⲣⲓ: </td>
              <td class="arabic">الآب والابن</td>
          </tr>
          <tr id="table_${tableNumber}_row_3" class="congregation">
              <td class="english">And the Holy Spirit</td>
              <td class="coptic">ⲛⲉⲙ ⲡⲓ  ̀Ⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
              <td class="arabic">والروح القدس</td>
          </tr>
          <tr id="table_${tableNumber}_row_4" class="priest">
              <td class="english">Hail thee O Mary;</td>
              <td class="coptic">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ:̀</td>
              <td class="arabic">السلام لك يا مريم</td>
          </tr>
          <tr id="table_${tableNumber}_row_5" class="congregation">
              <td class="english">The Pure dove;</td>
              <td class="coptic">ϯ ϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ:</td>
              <td class="arabic">الحمامة الحسنة</td>
          </tr>
          <tr id="table_${tableNumber}_row_6" class="priest">
              <td class="english">Who has born for us; </td>
              <td class="coptic">ⲑ̀ⲏⲉⲧ̀ⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ:</td>
              <td class="arabic">التي ولدت لنا</td>
          </tr>
          <tr id="table_${tableNumber}_row_7" class="congregation">
              <td class="english">God  the Logos.</td>
              <td class="coptic"> ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲡⲓⲗⲟⲅⲟⲥ.</td>
              <td class="arabic">الله الكلمة</td>
          </tr>
      </table>\n`;
    return html;
}

function expositionConclusion(tableNumber) {
    let html = `
    <table id="table_${tableNumber}" title="Daytime Exposition Conclusion">
        <caption class="caption" id="caption_table_${tableNumber}">Exposition Conclusion
        <span class="arabic-caption">ختام الطرح</span></caption>
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">Christ our Savior,</td>
            <td class="coptic">Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲉⲛⲥⲱⲧⲏⲣ </td>
            <td class="arabic">المسيح مخلصنا</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">Has come and has borne suffering,</td>
            <td class="coptic">ⲁ̀ϥ ⲓ̀ ⲁϥϣⲉⲡ ⲙ̀ⲕⲁϩ:</td>
            <td class="arabic">جاء وتألم</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="priest">
            <td class="english">That through His passion,</td>
            <td class="coptic">ϩⲓⲛⲁ ϧⲉⲛ ⲛⲉϥⲙ̀ⲕⲁⲩϩ:</td>
            <td class="arabic">لكى بألآمه</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">He may save us.</td>
            <td class="coptic">ⲛ̀ⲧⲉϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
            <td class="arabic">يخلصنا</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="priest">
            <td class="english">Let us glorify Him,</td>
            <td class="coptic">Ⲙⲁⲣⲉⲛ ϯⲱⲟⲩ ⲛⲁϥ :</td>
            <td class="arabic">فلنمجده</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">And exalt His Name,</td>
            <td class="coptic">ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲡⲉϥⲣⲁⲛ :</td>
            <td class="arabic">ونرفع اسمه</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="priest">
            <td class="english">For He has done us mercy,</td>
            <td class="coptic">ϫ̀ⲉ ⲁϥⲉⲣⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ :</td>
            <td class="arabic">لأنه صنع معنا رحمة.</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="congregation">
            <td class="english">According to His great mercy.</td>
            <td class="coptic">ⲕⲁⲧⲁ ⲡⲉϥⲛⲓϣϯ ⲛ̀ⲛⲁⲓ.</td>
            <td class="arabic">كعظيم رحمته.</td>
        </tr>
    </table>\n`;
    return html;
}

function daytimeLitanies(tableNumber, prostrations) {
    let prostrationsVariable
    if (prostrations) {
        prostrationsVariable = `
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">We bend our knees</td>
            <td class="coptic">Ⲕ̀ⲗⲓⲛⲱⲙⲉⲛ ⲧⲁⲅⲟⲛⲁⲧⲁ</td>
            <td class="arabic">نحنى ركبنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">Have mercy upon us O God the Pantocrator.</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲁⲛ Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ ⲡⲓⲠⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ</td>
            <td class="arabic">إرحمنا يا الله الآب ضابط الكل </td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="priest">
            <td class="english">We stand up and bend our knees</td>
            <td class="coptic">Ⲁⲛⲁⲥⲧⲱⲙⲉⲛ ⲕ̀ⲗⲓⲛⲱⲙⲉⲛ ⲧⲁⲅⲟⲛⲁⲧⲁ</td>
            <td class="arabic">نقف ثم نحنى ركبنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">Have mercy upon us O God our Savior</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲁⲛ ˙Ⲫⲛⲟⲩϯ Ⲡⲉⲛⲥⲱⲧⲏⲣ</td>
            <td class="arabic">إرحمنا يا الله مخلصنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="priest">
            <td class="english">Then we stand up, and bend our knees</td>
            <td class="coptic">Ⲕⲉ ⲁⲛⲁⲥⲧⲱⲙⲉⲛ ⲕ̀ⲗⲓⲛⲱⲙⲉⲛ ⲧⲁⲅⲟⲛⲁⲧⲁ</td>
            <td class="arabic">ثم نقف ونحنى ركبنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">Have mercy upon us O God and have mercy.</td>
            <td class="coptic">Ⲛⲁⲓ ⲛⲁⲛ  ˙Ⲫⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ</td>
            <td class="arabic">إرحمنا يا الله ثم إرحمنا.</td>
        </tr>
        `;
    } else {
        prostrationsVariable = `
        <tr id="table_${tableNumber}_row_0" class="intro">
            <td class="english">Prayed without prostrations.</td>
            <td class="arabic">تصلي بدون ميطانيات</td>
        </tr>`;
    }
    let html = `
    <table id="table_${tableNumber}" title="Daytime Litanies">
        <caption class="caption" id="caption_table_${tableNumber}">Daytime Litanies
        <span class="arabic-caption">طلبات الصباح</span></caption>
        ${prostrationsVariable}
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english"<strong>1)</strong> Let us pray that God may have mercy and compassion on us, hear us, help us, and accept the prayers and supplications of His saints for that which is good on our behalf at all times, and forgive us our sins. ${cross}</td>
            <td class="coptic">Ⲧⲱⲃϩ ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ: ⲛ̀ⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ: ⲛ̀ⲧⲉϥⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ: ⲛ̀ⲧⲉϥⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ: ⲛ̀ⲧⲉϥϭⲓ    ⲛ̀ⲛⲓϯϩⲟ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ  ⲛ̀ⲧⲁϥ ⲛ̀ⲧⲟⲧⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲉ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ  ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉϥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ  ⲛⲁⲛ  ⲉ̀ⲃⲟⲗ.  ${cross}</td>
            <td class="arabic"<strong>1)</strong> اطلبوا لكى يرحمنا الله ويتراءف علينا ويسمعنا ويعيننا ويقبل سؤالات وطلبات قديسه منهم بالصلاح عنا  فى كل حين. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english"<strong>2)</strong> Let us pray for the peace of the One Holy catholic and Apostolic church, and God's salvation and comfort in all places, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>2)</strong> اطلبوا عن سلامة الواحدة الوحيدة المقدسة الجامعة الرسولية الكنيسة. وخلاص الله فى الشعوب والطمأنينة بكل موضع.  ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english"<span class="bold">3)</span> Let us pray for our fathers and brethren who are sick with any sickness, whether in this place or in any place, that the Lord our God may grant us, with them health and healing, and forgive us our sins. ${cross}</td>
            <td class="arabic"<span class="bold">3)</span> اطلبوا عن أبائنا وأخوتنا المرضى بكل الأمراض فى هذا الموضع وكل مكان لكى ينعم لنا الرب إلهنا وإياهم بالعافية والشفاء. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="south">
            <td class="english"<strong>4)</strong> Let us pray and ask for our fathers and brethren who are traveling, and those who intend to travel in all places, may God aid their ways; whether by seas, rivers, lakes, roads, or other means, may the Lord our God guide them, bring them back in safety, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>4)</strong> صلوا واطلبوا عن أبائنا وأخواتنا المسافرين والذين أضمروا السفر بكل مكان ليسهل طرقهم جميعاً إن كانوا فى البحار أوالأنهار أوالينابيع أوالطرق المسلوكة والذين جعلوا سفرهم بكل نوع لكى يرشدهم الرب إلهنا ويرجعهم إلى مساكنهم بسلام ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english"<strong>5)</strong> Let us pray and ask for the air of heaven, the fruits of the earth, all the trees and vineyards and all fruit bearing trees in the universe, that Christ our God may bless them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>5)</strong> صلوا واطلبوا عن أهوية السماء وثمرات الأرض وكل الأشجار والكروم وكل شجرة مثمرة فى جميع المسكونة لكى يباركها الرب إلهنا ويكملها بسلام. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="south">
            <td class="english"<strong>6)</strong> Let us pray and ask that God may grant us mercy before the sovereign rulers, incline their hearts with goodness towards us at all times, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>6)</strong> صلوا واطلبوا لكى يعطينا الله رحمة ورأفة أمام السلاطين الأعزاء ويعطف قلوب المتولين علينا بالصلاح فى كل حين. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_12" class="north">
            <td class="english"<strong>7)</strong> Let us pray and ask for our fathers and brethren who have slept and reposed in the faith of Christ since the beginning, our holy fathers, the Patriarchs, our fathers the Metropolitans, our fathers the Bishops, our fathers the Hegumens, our fathers the priests, our brethren the deacons, our fathers the monks, and our brethren the laymen, </td>
            <td class="arabic"<strong>7)</strong> صلوا واطلبوا عن آبائنا واخواتنا الذين رقدوا وتنيحوا فى الإيمان بالمسيح منذ البدء آبائنا البطاركة وآبائنا المطارنة وآبائنا الأساقفة وآبائنا القمامصة وآبائنا القسوس واخواتنا الشمامسة وآبائنا الرهبان واخواتنا العلمانيين </td>
        </tr>
        <tr id="table_${tableNumber}_row_12.5" class="north">
            <td class="english">and for the repose of all the  departed Christians; that Christ our God may repose their souls, and forgive us our sins. ${cross}</td>
            <td class="arabic">وعن كل الذين تنيحوا من المسيحين لكى ينيح الرب إلهنا نفوسهم أجمعين. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english"<strong>8)</strong> Let us pray and ask for those who attend to the offerings and oblations, the wine, the oil, the incense, the coverings of the altar, the books of prayers, and the vessels of the altar, that Christ our God may reward them in the heavenly Jerusalem, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>8)</strong> صلوا واطلبوا عن المهتمين بالصعائد والقرابين والخمر والزيت والبخور والستور وكتب القراءة وكل أوانى المذبح لكى يعوضهم الرب إلهنا عن أتعابهم فى أورشليم السمائية. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="north">
            <td class="english"<strong>9)</strong> Let us pray and ask for the catechumens, that the Lord our God may bless them, enlighten their hearts, and confirm them in the Orthodox faith until their last breath, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>9)</strong> صلوا واطلبوا عن موعظى شعبنا لكى يباركهم الرب ويفتح عيون قلوبهم ويثبتهم على الإيمان الأرثوذكسى إلى النفس الأخير. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english"<strong>10)</strong> Let us pray and ask for this holy Church, and all Orthodox Churches, the desert monasteries, the elders dwelling therein, and for the peace of the whole world, that the Lord may protect us and them from all evil, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>10)</strong> صلوا واطلبوا عن هذا المسكن وكل مساكن وديارات الشعوب الأرثوذوكسيين فى البرارى والشيوخ السكان فيها وعن طمأنينة كل العالم معاً. لكى يحفظنا الرب إلهنا وإياهم من كل سوء ومن كل شر. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english"<strong>11)</strong> Let us pray and ask for the life and standing of our venerable father, the Patriarch Pope Abba Tawadros II that the Lord may preserve his life, and confirm him in his see for many years and peaceful times, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>11)</strong> صلوا واطلبوا عن حياة وقيام أبينا المكرم رئيس الأساقفة الآب البطريرك البابا أنبا تواضروس الثانى لكى يحفظ الرب لنا حياته ويثبته على كرسيه سنين كثيرة وأزمنة سلامية هادئة مديدة. ويغفر لنا خطايانا.  ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="south">
            <td class="english"<strong>12)</strong> Let us pray and ask for our Orthodox fathers, the Metropolitans and the Bishops in every place, the hegumens, the priests, the deacons, and all the orders of the Church, that Christ our Lord may keep them and strengthen them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>12)</strong> صلوا واطلبوا عن آبائنا المطارنة والأساقفة الأرثوذوكسيين بكل مكان والقمامصة والقسوس والشمامسة وكل طغمات الكنيسة لكى يحفظهم المسيح إلهنا ويقويهم. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english"<strong>13)</strong> Let us pray and ask for this gathering and all Orthodox gatherings; that the Lord our God may bless and fulfill them in peace, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>13)</strong> صلوا واطلبوا عن إجتماعنا هذا وكل إجتماع الشعوب الأرثوذوكسيين لكى يباركهم الرب إلهنا ويكملهم بسلام. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="south">
            <td class="english"<strong>14)</strong> Let us pray and ask for all the hierarchies of the Holy Church, and all the orders of the clergy; that the Lord our God may bless and strengthen them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>14)</strong> صلوا واطلبوا عن تدبير البيعة المقدسة وكل رتب الكهنوت لكى يباركهم الرب إلهنا ويقويهم. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_20" class="north">
            <td class="english"<strong>15)</strong> Let us pray and ask for those who labor and toil in the Holy Church and with the Orthodox people, that the Lord our God may have mercy on them, and forgive us our sins ${cross}</td>
            <td class="arabic"<strong>15)</strong> صلوا واطلبوا عن كل نفس لها تعب فى الكنيسة المقدسة ومع الشعب الأرثوذوكسى لكى يصنع الرب إلهنا معهم رحمة. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="english"<strong>16)</strong> Let us pray and ask for all Christ-loving rulers who asked us to remember them in our prayers, that the Lord our God may bless and remember them in His mercy and grant them favor before powerful rulers, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>16)</strong> صلوا واطلبوا عن محبى المسيح الرؤساء الذين أمرونا أن نذكرهم باسمائهم لكى يباركهم الرب إلهنا ويذكرهم بالرحمة ويعطيهم النعمة أمام السلاطين الأعزاء. يغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="north">
            <td class="english"<strong>17)</strong> Let us pray and ask for the poor, the weak, the farmers, and all those who are in adversities of any kind, that the Lord our God be merciful with us and them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>17)</strong> صلوا واطلبوا عن المساكين والفلاحين والضعفاء وعن كل نفس متضايقة بكل نوع لكى يتراءف علينا الرب إلهنا وإياهم. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="english"<strong>18)</strong> Let us pray and ask for those who those in the distress of jails, prisons, captivity, or exile, and for those bound by devils, that the Lord our God may free them from their hardships, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>18)</strong> صلوا واطلبوا عن كل المتضايقين الذين فى السجون وفى المطابق والذين فى النفى أو فى السبى والمربوطين من جهة رباطات الشياطين لكى يعتقهم الرب إلهنا من متاعبهم. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_24" class="north">
            <td class="english"<strong>19)</strong> Let us pray and ask for all the souls assembled with us this day, in this place, seeking forgiveness for their souls, that the Lord's kindness may encompass us and them, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>19)</strong> صلوا واطلبوا عن كل النفوس المجتمعة معنا اليوم فى هذا الموضع يطلبون الرحمة لنفوسهم لكى تدركنا مراحم الرب إلهنا وإياهم. ويغفر لنا خطايانا. ${cross}</td>   
        </tr>
        <tr id="table_${tableNumber}_row_25" class="south">
            <td class="english"<strong>20)</strong> Let us pray and ask for those who asked us to remember them in our prayers, that the Lord our God may remember them according to His goodness at all times, and forgive our sins. ${cross}</td>
            <td class="arabic"<strong>20)</strong> صلوا واطلبوا عن الذين أوصونا أن نذكرهم كل واحد و واحد بإسمه لكى يذكرهم الرب إلهنا بالصلاح فى كل حين. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_26" class="north">
            <td class="english"<strong>21)</strong> Let us pray and ask for the rising of the waters of the rivers this year, that Christ our God may bless and raise them according to their measure, give joy to the face of the earth, support us, save man and animal, and spare the world from death, scarcity, plagues, devastation, the sword of the enemies, </td>
            <td class="arabic"<strong>21)</strong> صلوا واطلبوا عن صعود مياه الأنهار فى هذه السنة لكى يباركها المسيح إلهنا ويصعدها كمقدارها ويفرح وجه الأرض بالنيل ويعولنا نحن البشر ويعطى النجاة لشعبه والبهائم ويرفع عن العالم الموت والغلاء والوباء والفناء والجلاء وسيف الأعداء </td>
        </tr>
        <tr id="table_${tableNumber}_row_26.5" class="north">
            <td class="english">and that he may grant peace and tranquility for our Holy Orthodox Church, and raise the state of his Orthodox Christians in the whole world now, and forever, and forgive us our sins. ${cross}</td>
            <td class="arabic">ويجعل الهدوء والسلام والطمأنينة فى البيعة المقدسة ويرفع شأن المسيحيين فى كل مكان وفى كل المسكونة إلى النفس الأخير. ويغفر لنا خطايانا. ${cross}</td>
        </tr>
        <tr id="table_${tableNumber}_row_27" class="south">
            <td class="english"<strong>22)</strong> Let us pray and ask for this Holy Week of Pascha of our Good Savior, that He may complete it for us in peace and bring us the joy of His Holy Resurrection in safety, and forgive us our sins. ${cross}</td>
            <td class="arabic"<strong>22)</strong> صلوا واطلبوا عن هذه البصخة المقدسة التى لمخلصنا الصالح لكى يكملها لنا بسلام ويرينا بهجة قيامته المقدسة ونحن جميعاً سالمين.ويغفر لنا خطايانا. ${cross}</td>
        </tr>        
    </table>`;
    return html;
}

function nighttimeLitanies(tableNumber) {
    let html = `
        <table id="table_${tableNumber}" title="Nighttime Litanies">
            <caption class="caption" id="caption_table_${tableNumber}">Nighttime Litanies
            <span class="arabic-caption">طلبات المساء</span></caption>
            <tr id="table_${tableNumber}_row_0" class="north">
                <td class="english"><strong>1) </strong>We ask and entreat You O Lord, God the Father the Pantocrator, and the Holy Only Begotten Son, the Creator and the Master of all, and the Holy Spirit the Life- Giver, the Holy Trinity before whom kneels down every knee in heaven and on earth. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>1) </strong>نسأل و نتضرع إليك أيها السيد الله الآب ضابط الكل والإبن الوحيد القدوس ، خالق الكل و مدبرهم والروح القدس المحيى الثالوث المقدس الذى تجثوا له كل ركبة ما فى السموات و ما فى الأرض. نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="south">
                <td class="english"><strong>2) </strong>We pray for the heavenly peace, harmony of all churches in the world, the monasteries, all the holy assemblies, their dwellers and their keepers. O God, have compassion on Your creation and save it from all evil. We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic"><strong>2) </strong>من أجل السلامة العالية وتآلف سائر البيع التى فى العالم و الأديرة والمجامع المقدسة و السكان فيها والقيام بأحوالها : يا الله تحنن على خليقتك و نجها من كل سوء. نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="north">
                <td class="english"><strong>3) </strong>Who through His power, arranged the life of man before his creation and made for him all things with His wisdom and adorned the skies with stars, the earth with vegetation, trees, and vineyards, and the valleys with pastures and flowers. Now, O our King, accept the prayers of Your servants who place themselves in Your hands saying, We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>3) </strong>يا من بقدرته دبر حياة الإنسان قبل خلقته و صنع له الموجودات بحكمته وزين السماء بالنجوم والأرض بالنباتات والأشجار والكروم والأودية ، أنت الآن يا ملكنا أقبل طلبات عبيدك الواقفين بين يديك القائلين نسألك يارب أسمعنا وأحرمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="south">
                <td class="english"><strong>4) </strong>O Great and Holy God who created man in Your image and likeness and gave him a living and a reasoning soul, have mercy O Lord, on Your creation which You have created and have compassion on it and grant us Your mercy from the height of Your holiness and from Your dwelling. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>4) </strong>يا الله العظيم القدوس الذى خلق الإنسان على صورته ومثاله و جعل فيه نفساً حية عاقلة ناطقة . أرحم يارب جبلتك التى خلقتها و تحنن عليها وأرسل علينا رحمتك من علو قدوسك ومسكنك المستعد نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english"><strong>5) </strong>O You, who saved Your servant Noah, the righteous, his children, their wives and the clean and unclean animals from the flood in order to renew the earth once again. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>5) </strong>يا من خلصت عبدك نوحاً البار ونجيته من الطوفان هو و بنيه ونساءهم و أيضاً الحيوانات الطاهرة والغير الطاهرة لأجل تجديد الأرض مرة أخرى نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english"><strong>6) </strong>O You, the Creator and Provider of all, deliver Your people from the flood of the sea of this passing world, and prevent them along with animals from harm. Give all the birds their provisions, for You provide for the beasts and the young ravens their food in due season. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>6) </strong>أيها البارى رازق الـكل. نج شعبك من طوفان بحر العالم الزائل و أرفع عنهم كل مكروه. و كل الحيوانات أيضاً و سائر الطيور أعطها قوتها لأنك تعطى للبهائم رزقاً و لفراخ الغربان قوتاً. نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english"><strong>7) </strong>O You, who was received as a guest by Your servant Abraham the head of the Patriarchs, sat at his table, and blessed his offspring. O our King, accept the prayers of Your servants and Your priests standing before You. Have mercy on the world, and save Your people from all hardship, dwell in them, and be in their midst. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>7) </strong>يا من ضيف عند عبده إبراهيم رئيس الآباء وأتكأ على مائدته و بارك فى زرعه أنت الآن يا ملكنا أقبل طلبة عبيدك و كهنتك الواقفين بين يديك وتراءف على العالم وخلص شعبك من كل شدة و حل فيهم و سر بينهم نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english"><strong>8) </strong>We ask You, O Lord, to guard us from all evil and have compassion on Your creation and all Your people, for the eyes of everyone wait upon you, for You give them their food in due season. O You who gives food to all flesh, the help of the helpless and the hope of the hopeless; We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic"><strong>8) </strong>نطلب إليك يارب لكى تحرسنا من جميع الشرور . و تراءف على خليقتك و جميع شعبك لأن أعين الكل تترجاك وأعطهم طعامهم فى حينه. المغذى كل ذى جسد . يا عون من لا عون له . يا رجاء من لا رجاء له نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english"><strong>9) </strong>O You, who looks to the humble with watchful eyes of protection, who saved Joseph from his master’s wife, set him King over Egypt and all its ways, and spared him the days of hardship. Then, his brothers and father came, knelt down before him and took from him wheat for the nourishment of their children and their cattle. ${cross}</td>
                <td class="arabic"><strong>9) </strong>أيها الناظر إلى المتواضعين بعين عنايتك التى لا تغفل وخلصت يوسف من إمرأة سيدة وجعلته ملكاً على مصر وأحوالها و أجزت عليه أيام الشدة . فأتى إليه أخواته وأبوه يعقوب وسجدوا بين يديه وأخذوا منه حنطة لقوت بنيهم ومواشيهم. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english"><strong>10) </strong>O You, who looks to the humble with watchful eyes of protection, who saved Joseph from his master’s wife, set him King over Egypt and all its ways, and spared him the days of hardship. Then, his brothers and father came, knelt down before him and took from him wheat for the nourishment of their children and their cattle. Likewise we bow down with our heads and kneel before You, O our Creator, and provider, and we thank You for everything, concerning everything, and in everything. We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic"><strong>10) </strong>أيها الناظر إلى المتواضعين بعين عنايتك التى لا تغفل وخلصت يوسف من إمرأة سيدة وجعلته ملكاً على مصر وأحوالها و أجزت عليه أيام الشدة . فأتى إليه أخواته وأبوه يعقوب وسجدوا بين يديه وأخذوا منه حنطة لقوت بنيهم ومواشيهم. نحن الجميع أيضاً نخضع لك برؤوسنا ونسجد ما بين يديك و نشكرك يا خالقنا ورازقنا على هذا الحال وفى كل حال ومن أجل سائر الأحوال ونجنا يا الله من كل شدة نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english"><strong>11) </strong>O God, the Word of the Father, who works through the Law, the prophets, and the Old Testament, and perfects them. Save Your people from all tribulations and govern their lives according to Your good will. Save us from famines and afflictions. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>11) </strong>أيها الإله كلمة الآب الـفاعل فى الناموس والأنبياء والعهد القديم ومكملهم خلص شعبك من كل ضيقة ودبـر حـياتهم كحسب إرادتك الصالحة و أرفع عنا كل القحط و البلية. نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english"><strong>12) </strong>O You, who supported the people of Israel for forty years in the desert of Sinai; having no houses or storehouses, now O my master, protect Your people, support them and bless their homes with the heavenly blessing. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>12) </strong>يا من عال الشعب الإسرائيلى أربعين سنة فى طور سيناء و لم يكن لهم بيوت ولا مخازن . أنت يا سيدى أحفظ شعبك و علهم و بارك فى منازلهم و مخازنهم بالبركات السمائية. نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english"><strong>13) </strong>O You, who accepted the prayer of Elijah the Tishbite, when the sky rained and the earth gave fruit, and blessed the barrel of flour and the cruse of oil in the house of the widow. Accept the prayers of Your people through the prayers of Your holy saints and pure prophets. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>13) </strong>يا من قبلت طـلبة إيليا التسبيتى عندما أمطَرَت السموات و أنبَتَت الأرض وباركت فى كيلة الدقيق وقسـط الزيت فى بيت الأرملة . أقـبل طلبة شعبك بصلوات قديسيك و أنبيائك الأطهار. نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english"><strong>14) </strong>O God, with eyes full of mercy, have compassion on the world and bless their crops and their storehouses, even the little that they have. Bring up the waters of the rivers according to their measure, and grant moderation to the winds. Bless the Nile of Egypt this year and every year. Give joy to the face of the earth and sustain us. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>14) </strong>يا الله تراءف على العالم بعين الرحمة و الرأفة و بارك فى كيل غلاتهم و مخازنهم وفى القليل الذى عندهم وأصعد مياه الأنهار كمقدارها وهب أعتدالا للأهوية ، و نيل مصر باركه فى هذا العام وكل عام و فرح وجه الأرض وعلنا نحن البشر نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english"><strong>15) </strong>O You, who accepted the repentance of the Ninevites, when they fasted together, and received the confession of the right-hand thief upon the cross. Likewise, make us worthy to please You and to gain Your compassion, crying out and saying, "Remember us, O Lord, when You come into Your kingdom." Accept the repentance of Your servants, their confessions, their fasting, their prayers and their offerings, which are offered on Your Holy altars as sweet incense and have mercy on them. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>15) </strong>يا من قبلت توبة أهل نينوى عندما صام الجميع . وقبلت إليك أعتراف اللص اليمين على الصليب هكذا نحن أجعلنا مستحقين لرضاك وتحننك لندعوك قائلين أذكرنا يارب إذا جئت فى ملكوتك . وأقبل توبة عبيدك و صومهم وصلواتهم و قرابينهم المرفوعة على مذابحك المقدسة بخوراً طيباً وأرحمهم نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english"><strong>16) </strong>Accept the repentance of Your servants, their confessions, their fasting, their prayers and their offerings, which are offered on Your Holy altars as sweet incense and have mercy on them. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>16) </strong>وأقبل توبة عبيدك و صومهم وصلواتهم و قرابينهم المرفوعة على مذابحك المقدسة بخوراً طيباً وأرحمهم نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english"><strong>17) </strong>O You the Mighty Provider, the Chastiser, the Healer and Physician of spirits and bodies, who tested his servant Job, healed him from his calamity and recompensed him with more than what he had, have mercy on Your people and save them from all calamities, tribulations, temptations, and hardships, O You Who gives victory to those who trust in You. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>17) </strong>أيها المدبر القوى المؤدب الشافى طبيب الأرواح والأجساد الذى أمتحن عبده أيوب و شفاه من بلاياه ورد عليه ما فقد منه أزيد مما كان. أرحم شعبك و خلصه من جميع البلايا و المحن والتجارب و الشدائد . يا ناصر جميع المتوكلين عليك نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="south"> 
                <td class="english"><strong>18) </strong>O Christ our God, the Word of the Father, who sanctified His holy disciples, washed their feet and made them pillars of faith and leaders of the believers, who through them satisfied the yearning souls, and taught them to pray saying, "Our Father who art in the heaven... Lead us not into temptation, but deliver us from evil." We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>18) </strong>أيها المسيح إلهنا كلمة الآب الذى عاهد تلاميذه الأطهار وغسل أقدامهم و جعلهم أئمة للمؤمنين و مناراً للدين وأشبع بهم النفوس الجائعة و علمهم الصلاة قائلين : أبانا الذى فى السموات لا تدخلنا التجارب لكن نجنا من الشرير نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north"> 
                <td class="english"><strong>19) </strong>O miracle and wonder maker, who fed the thousands with the five loaves, raised the dead, and blessed the wedding of Cana of Galilee. Now, O Master, bless the bread, oil, plants, beehives, trades, and all the works of Your servants. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>19) </strong>يا صانع العجائب و المعجزات ومن أشبع الألوف من الخمس خبزات و أقام الأموات و بارك فى العرس بقانا الجليل الآن أيها السيد بارك لعبيدك فى خبزهم وزيتهم و زرعهم و نحلهم وفى متاجرهم وصنائعهم ومباشراتهم نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english"><strong>20) </strong>O Lord, save Your people and protect them with the life-giving sign of Your cross. Raise the state of the Christians all over the world, and soften the hearts of their rulers towards them. Fill their hearts with compassion towards our brethren, the poor, and the needy, and keep every evil thing far from them. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>20) </strong>يارب خلص شعبك و حوط بهم من كل ناحية بأشارة صليبك المحى وأرفع شأن المسيحيين فى المسكونة كلها وحنن عليهم قلوب المتولين عليهم وعطف قلوبهم على أخوتنا المساكين والمعوزين بالإحسان وأبعد عنهم كل مكروه نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english"><strong>21) </strong>O You, who entrusted us with Your Holy covenant, Your Body and Blood on the altar daily through the descent of Your Holy Spirit on the bread and wine, and commanded us, saying, "Do this in remembrance of Me." We ask you, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>21) </strong>يارب يا من ترك لنا عهده المقدس  جسده و دمه حاضراً عندنا كل يوم على المذبح خبزاً و خمراً بحلول روح قدسه و أوصانا قائلاً هذا أصنعوه لذكرى نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english"><strong>22) </strong>O Christ our God, have mercy on Your people and the successors of Your Apostles. Give blessing to the fruit of the earth, and gladness to the heart of man through abundance of fruits and blessings. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>22) </strong>أيها المسيح إلهنا أرحم شعبك وخليفة رسلك وأعط بركة لثمرات الأرض وأبهج قلب الإنسان بكثرة ثمرات القمح و الخمر والزيت نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english"><strong>23) </strong>O Begotten of the Father, who was incarnate of the blessed Virgin, St. Mary, in the fullness of time, who said to His holy disciples, "Go and make disciples of all the nations baptizing them, teaching them to observe all things that I have commanded you, I am with you always even unto the end of the age," be also with Your people who cry out to You saying: We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>23) </strong>أيها المولود من الآب الذى تجسد من البكر البتول العذراء مرتمريم فى آخر الأيام الذى قال لتلاميذه الـقديسين أمضوا و تلمذوا كل الأمم و عمدوهم وعلموهم جميع ما أوصيتكم به. هو ذا أنا معكم كل الأيام وإلى أنقضاء العالم. كن أيضاً مع شعبك الصارخين إليك قائلين نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english"><strong>24) </strong>O Forgiver of sins and Giver of gifts, forgive the sins of Your people and cleanse them from all uncleanliness. Wash them from all deceit and keep them from bearing false witness and all envy and slander. Take away from their hearts all evil thought, suspicion, unbelief, pride, and hardness of heart. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>24) </strong>يا غافر الخطايا و مانح العطايا أغفر خطايا شعبك وطهرهم من كل دنس وأغسلهم من كل غش أبعد عنهم اليمين الحانشة وكل حسد وكل نميمة وأنزاع من قلوبهم الفكر الردئ والوسواس وكل الشكوك والكبرياء وكل قساوة و تجبر نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north"> 
                <td class="english"><strong>25) </strong>You are the fortification of our salvation, O Theotokos, the invincible fortress, take away the council of the adversaries, and turn the afflictions of Your servants into joy. Defend our cities, fight for the Orthodox kings and rulers, and intercede for the peace of the world and the churches. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>25) </strong>أنتِ هى سور خلاصنا يا والدة الإله الحصن المنيع الغير الواقع إليك نسأل: مشورة المعاندين لنا أبطلى  وحزن عبيدك إلى فرح ردى ولمدينتنا صونى وعن الملوك الأرثوذكسيين حاربى وعن سلامة العالم و البيع أشفعى نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="south">
                <td class="english"><strong>26) </strong>O God of mercy and compassion, Lord of all consolations, do not be wrathful with us. Do not rebuke us for our evil deeds nor for the multitude of our sins. Do not be angry with us nor let Your anger endure forever. Hear, O God of Jacob, and look down, O God our helper. Protect the world from death, scarcity, plagues, devastation, the sword of enemies, earthquakes, horror, and all fearsome events. We ask You, O Lord, hear us and have mercy on us.  ${cross}</td>
                <td class="arabic"><strong>26) </strong>يا إله الرحمة و الرآفة و رب كل عزاء لا تسخط علينا ولا تؤاخذنا بسوء أعمالنا ولا بكثرة خطايانا ولا تغضب علينا ولا يدوم غضبك إلى الأبد. أنصت يا إله يعقوب وأنظر يا إله عوننا وأرفع عن العالم الموت والغلاء والوباء والجلاء و سيف الأعداء والزلازل والأهوال وكل أمر مخيف نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english"><strong>27) </strong>For the sake of our protection under Your mighty Holy hand, O God, we ask You to keep for us the life of our honored father, our Patriarch Pope Abba Tawadros the second, and to confirm him upon his throne for many years and quiet and peaceful times. We ask You, O Lord, hear and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>27) </strong>من أجل حفظنا تحت اليد العالية المقدسة التى لك يا الله نطلب إليك أن تبقى لنا وعلينا حياة الآب المكرم البابا البطريرك أنبا تواضروس الثانى وأن تحفظ لنا حياته وثبته على كرسيه سنين عديدة وأزمنة سلامية هادئة مديدة. نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="south">
                <td class="english"><strong>28) </strong>O Christ our God, we ask of Your goodness and Your great mercy to keep for us the life of our fathers: the metropolitans, the bishops, and all the leaders of the flock. Confirm the sheep of Your flock, give protection to the priests, purity to the deacons, strength to the elders, understanding to the youth, chastity to the virgins, asceticism to the monks and nuns, purity to the married, and protection for women. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>28) </strong>أيها المسيح إلهنا نطلب من جودك ومراحمك العالية أن تبقى لنا وعلينا حياة آبائنا المطارنة والأساقفة و كل الرؤساء والرعاة أحفظهم وغنم رعيتهم ثبتهم. أعط حفظاً للكهنة طهارة للشمامسة، قوة المشايخ، فهماً للأطفال، عفة للأبكار، نسكاً للرهبان و الراهبات نقاوة للمتزوجين صوناً للنساء نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english"><strong>29) </strong>Also, we ask for the safe return of the travelers and the lost, the support for the widows and orphans; abundance for the poor, those who are in debt, pay their debts and forgive them; and those who are in prisons and distress, give them release. Heal the sick and repose the departed. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>29) </strong>وأيضاً الضالين والمسافرين ردهم، والأرامل والأيتام علهم والجياع والعطاش أشبعهم والذين عليهم دين أوف عنهم و سامحهم، والمحبوسين والذين فى الشدائد أفرج عنهم، و المرضي والمطروحين أشفهم . والراقدين نيحهم نسألك يارب أسمعنا وأرحمنا. ${cross}</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english"><strong>30) </strong>O God of our saintly fathers, do not neglect those whom You have created with Your Holy hands. O You, who showed His love to mankind, accept from Your Mother intercession on our behalf and save us. O You, the Savior of the humble, forsake us not, neither renounce us, unto the end, for the sake of Your Holy Name, do not break Your covenant with us, nor deprive us of Your mercy for the sake of Your beloved Abraham, Your servant Isaac and Your St. Jacob. We ask You, O Lord, hear us and have mercy on us. ${cross}</td>
                <td class="arabic"><strong>30) </strong>يا إله آبائنا القديسين لا تتخل عنا ولا تخيب الذين خلقتهم بيدك الطاهرة وأظهرت حبك للبشرية . أيها الرحوم أقبل من والدتك شفاعة من أجلنا وخلصنا يا مخلص شعباً متواضعاً لا تغفل عنا إلى الغاية ولا تسلمنا إلى الإنقضاء من أجل أسمك القدوس لا تنقض عهدك ولا تبعد عنا رحمتك من أجل إبراهيم حبيبك و أسحق عبدك ويعقوب إسرائيل قديسك نسألك يارب أسمعنا وأرحمنا.  ${cross}</td>
            </tr>
        </table>`;
    return html;
}

function evnotiNaiNan(tableNumber) {
    let html = `
    <table id="table_${tableNumber}" title="Evnoti Nai Nan">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">˙Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ</span></caption>
        <tr id="table_${tableNumber}_row_0" class="priest">
            <td class="english">God, have mercy upon us, settle your mercy upon us, show us mercy in Your Kingdom.</td>
            <td class="coptic">˙Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ ⲑⲉϣⲟⲩⲛⲁⲓ ⲉⲣⲟⲛ ⲁⲣⲓⲟⲩⲛⲁⲓ ⲛⲉⲙⲁⲛ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ .</td>
            <td class="arabic">اللهم ارحمنا . قرر لنا رحمة . اصنع معنا رحمة فى ملكوتك.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="congregation">
            <td class="english">Lord Have Mercy (12)</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (12)</td>
            <td class="arabic">يارب ارحم (12)</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">O King of peace, grant us Your peace, establish for us Your peace, and forgive us our sins.</td>
            <td class="coptic">˙Ⲡⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ ⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ :ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ .</td>
            <td class="arabic">يا ملك السلام:  إعطنا سلامك: قرر لنا سلامك:  وإغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="congregation">
            <td class="english">Lord Have Mercy (6)</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (6)</td>
            <td class="arabic">يارب ارحم (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english">Disperse the enemies, of the church, and fortify her, that she may not be shaken forever.</td>
            <td class="coptic">Ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ  ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ  ⲁⲣⲓⲥⲟⲃⲧ ⲉ̀ⲣⲟⲥ ⲛ̀ⲛⲉⲥⲕⲓⲙ ϣⲁ ⲉ̀ⲛⲉϩ .</td>
            <td class="arabic">فرق أعداء الكنيسة: وحصنها فلا تتزعزع إلى الأبد.</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="congregation">
            <td class="english">Lord Have Mercy (6)</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (6)</td>
            <td class="arabic">يارب ارحم (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="north">
            <td class="english">Emmanuel our God, is now in our midst, with the glory of His Father, and the Holy Spirit.</td>
            <td class="coptic">Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲡⲉⲛⲛⲟⲩϯ ϧⲉⲛ ⲧⲉⲛⲙⲏϯ ϯⲛⲟⲩ  ϧⲉⲛ ⲡ̀ⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲉϥⲓⲱⲧ  ⲛⲉⲙ ⲡⲓⲡ̅ⲛ̅ⲁ ⲉⲑ̅ⲩ̅</td>
            <td class="arabic">عمانوئيل إلهنا: فى وسطنا الآن: بمجد أبيه: والروح القدس .</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="congregation">
            <td class="english">Lord Have Mercy (6)</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (6)</td>
            <td class="arabic">يارب ارحم (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="south">
            <td class="english">May He bless us all, and purify our hearts, and heal the sicknesses, of our souls and bodies.</td>
            <td class="coptic">˙Ⲛⲧⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲧⲏⲣⲉⲛ ⲛ̀ⲧⲉϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛϩⲏⲧ ⲛ̀ⲧⲉϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲓϣⲱⲛⲓ  ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ </td>
            <td class="arabic">ليباركنا كلنا: ويطهر قلوبنا: ويشفى أمراض: نفوسنا وأجسادنا</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="congregation">
            <td class="english">Lord Have Mercy (6)</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (6)</td>
            <td class="arabic">يارب ارحم (6)</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">We worship You O  Christ, with Your Good Father, and the Holy Spirit, for You were crucified and saved us.</td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ ⲁϥⲁϣⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ .</td>
            <td class="arabic">نسجد لك أيها المسيح :مع أبيك الصالح: والروح القدس : لأنك صلبت وخلصتنا</td>
        </tr> 

    </table>`;
    return html;
}

function evnotiNaiNanGreat(tableNumber) {
    let html = `
    <table id="table_${tableNumber}" title="Evnoti Nai Nan">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">˙Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ</span></caption>
        <tr id="table_${tableNumber}_row_0" class="commentary">
            <td class="english">The priest chants <span class="coptic">Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ</span> (Melismatic Tune) then the congregation chants <span class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ</span> (Melismatic Tune 12 Times) then the conclusion.</td>
            <td class="arabic">يقول الكاهن <span class="coptic">Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ</span> (بالكبير) ثم يردد الشعب <span class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ</span> (12 مرة باللحن الكبير) ثم الختام.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="priest">
            <td class="english">O God, have mercy upon us, settle Your mercy upon us, have compassion upon us.</td>
            <td class="coptic">Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ: ⲑⲉϣ ⲟⲩⲛⲁⲓ ⲉ̀ⲣⲟⲛ: ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.</td>
            <td class="arabic">اللهم إرحمنا قرر لنا رحمة تراءف علينا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="congregation">
            <td class="english">Amen.</td>
            <td class="coptic">Ⲁⲙⲏⲛ.</td>
            <td class="arabic">آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="priest">
            <td class="english">Hear us</td>
            <td class="coptic">ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ</td>
            <td class="arabic">واسمعنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_4" class="congregation">
            <td class="english">Amen.</td>
            <td class="coptic">Ⲁⲙⲏⲛ.</td>
            <td class="arabic">آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="priest">
            <td class="english">Bless us, keep us, and help us</td>
            <td class="coptic">ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ.</td>
            <td class="arabic">وباركنا واحفظنا وأعنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="congregation">
            <td class="english">Amen.</td>
            <td class="coptic">Ⲁⲙⲏⲛ.</td>
            <td class="arabic">آمين.</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="priest">
            <td class="english">Take away Your anger from us, visit us with Your salvation, and forgive us our sins.</td>
            <td class="coptic">Ⲱⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗⲏⲁⲣⲟⲛ: ϫⲉⲙⲡⲉⲛϭⲓⲛⲓ ⲑⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ: ⲟⲩⲟⲏ ⲋⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
            <td class="arabic">وارفع غضبك عنا وافتقدنا بخلاصك واغفر لنا خطايانا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_8" class="congregation">
            <td class="english">Lord Have Mercy (12)</td>
            <td class="coptic">Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (12)</td>
            <td class="arabic">يارب ارحم (12)</td>
        </tr>
    </table>`;
    return html;
}

function endOfServiceHymn(tableNumber) {
    let html = `
        <table id="table_${tableNumber}" title="Conclusion Hymn">
            <caption class="caption" id="caption_table_${tableNumber}">Conclusion Hymn
            <span class="arabic-caption">لحن ختام الخدمة</span></caption>
            <tr id="table_${tableNumber}_row_0" class="congregation">
                <td class="english">Amen, Alleluia, glory be to the Father and to the Son and to the Holy Spirit, both now and ever and unto the ages of ages. Amen.</td>
                <td class="coptic">Ⲁⲙⲏⲛ ⲁⲗ̅ ⲇⲟⲝⲁⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ̀ ⲕ̀ⲉ ⲁ̀ⲅⲓⲱ̀ Ⲡⲛⲉⲩⲙⲁⲧⲓ:  Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ : ⲁⲙⲏⲛ.</td>
                <td class="arabic">آمين الليلويا المجد للآب و الابن والروح القدس ، الآن و كل اوان والى دهر الداهرين، آمين .</td>
            </tr>
            <tr id="table_${tableNumber}_row_1" class="congregation">
                <td class="english">We cry out saying, our Lord Jesus Christ, Who was crucified on the cross, trample down Satan under our feet.</td>
                <td class="coptic">Ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ  ϫⲉ ⲱ̀Ⲡⲉⲛ⳪ Ⲓⲏⲥ̅ Ⲡⲭⲥ̅. Ⲫⲏ ⲉⲧⲁⲩⲁϣϥ ⲉ̀ⲡⲓⲥⲧⲁⲩⲣⲟⲥ  ⲉⲕⲉ̀ϧⲟⲙϧⲉⲙ ⲙ̀ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉⲛϭⲁⲗⲁⲩϫ:</td>
                <td class="arabic">نصرخ قائلين يا ربنا يسوع المسيح الذى صلب على الصليب، إسحق الشيطان تحت أقدامنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="congregation">
                <td class="english">Save us and have mercy. Lord have mercy. Lord have mercy. Lord bless. Amen. </td>
                <td class="coptic">ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓⲛⲁⲛ  Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ Ⲕⲩⲣⲓⲉ̀ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ ⲁ̀ⲙⲉⲛ.</td>
                <td class="arabic">خلصنا وارحمنا. يارب ارحم ، يارب ارحم، يارب بارك آمين</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="congregation">
                <td class="english">Give the blessing, give the blessing, we prostrate, absolve us, and give the blessing.</td>
                <td class="coptic"> ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲓ ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲓ  ⲓⲥ ϯⲙⲉⲧⲁⲛⲟⲓ̀ⲁ  ⲭⲱⲛⲏⲓ ⲉ̀ⲃⲟⲗ ϫⲱ ⲙ̀ⲡⲓⲥ̀ⲙⲟⲩ.</td>
                <td class="arabic">. باركوا علىّ باركوا علىّ ها الميطانية اغفروا لى .فلتقل البركة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="priest">
                <td class="english">May Jesus Christ, our true God who through His own goodwill accepted sufferings, and was crucified on the cross for our sakes, </td>
                <td class="arabic">يسوع المسيح إلهنا الحقيقى الذى قبل الآلام بإرادته  وصلب على الصليب من أجلنا. </td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="priest">
                <td class="english">bless us with all spiritual blessings, and support us, and complete for us the Holy week of Pascha, and bring forth upon us the joy of His Holy Resurrection for many years and peaceful times. </td>
                <td class="arabic">يباركنا بكل بركة روحية ويعيننا ويكمل لنا البصخة المقدسة ويرينا فرح قيامته المقدسة سنين كثيرة وأزمنة سالمة.</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="priest">
                <td class="english">Through the never-ending intercessions of the holy, Theotokos St. Mary, and all the choirs of angels and archangels;</td>
                <td class="arabic">بالسؤلات والطلبات التى تصنعها عنا كل حين سيدتنا وملكتنا كلنا والدة الإله القديسة مريم والثلاثة المنيرين الأطهار ميخائيل وغبريال ورافائيل .وجميع مصاف الملائكة وكل الطغمات السمائية</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="priest">
                <td class="english">through the prayers of the Patriarchs, the prophets, the Apostles, the martyrs, the righteous and holy ones, the cross-bearers, the ascetics, the confessors and anchorites;</td>
                <td class="arabic">وصلوات رؤساء الأباء والأنبياء والرسل والشهداء ومصاف لباس الصليب والأبرار والصديقين وملاك هذا اليوم المبارك ، </td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="priest">
                <td class="english">and the blessing of the holy week of Pascha of our Good Savior; </td>
                <td class="arabic">وبركة البصخة المقدسة التى لمخلصنا الصالح.</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="priest">
                <td class="english">their holy blessings, their benediction, their power, their gift, their love, and their help be with us all forever. Amen.</td>
                <td class="arabic">بركتهم المقدسة ونعمتهم وقوتهم وهبتهم ومحبتهم ومعونتهم تكون معنا كلنا إلى الأبد. آمين.</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="priest">
                <td class="english">Christ our God</td>
                <td class="coptic">Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ</td>
                <td class="arabic">المسيح الهنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="congregation">
                <td class="english">Amen. So be it.</td>
                <td class="coptic">Ⲁⲙⲏⲛ ⲉⲥⲉϣⲱⲡⲓ</td>
                <td class="arabic">آمين يكون</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="priest">
                <td class="english">O King of peace, grant us Your peace, establish for us Your peace, and forgive us our sins. For Yours is the power, the glory, the blessing, and the majesty, forever. Amen.</td>
                <td class="arabic">يا ملك السلام إعطنا سلامك قرر لنا سلامك. وإغفر لنا خطايانا. لان لك القوة والمجد والبركة والعزة إلى الأبد</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="priest">
                <td class="english">Make us, O Lord, worthy to pray thankfully:</td>
                <td class="arabic">اللهم اجعلنا مستحقين ان نقول جميعا بشكر:</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="congregation">
                <td class="english">Our Father who art in heaven...</td>
                <td class="arabic">أبانا الذى فى السماوات...</td>
            </tr>

        </table>\n`;
    return html;
}

function faiEtafEnf(tableNumber) {
    let html = `
    <table id="table_${tableNumber}" title="Fai Etef Enf">
        <caption class="caption" id="caption_table_${tableNumber}"><span class="coptic-caption">Ⲫⲁⲓ ⲉ̀ⲧⲁϥⲉⲛϥ</span></caption>
        <tr id="table_${tableNumber}_row_0" class="text">
            <td class="english">This is He who offered Himself up, as an acceptable sacrifice, on the Cross for the salvation of our race.</td>
            <td class="coptic">Ⲫⲁⲓ ⲉ̀ⲧⲁϥⲉⲛϥ ⲉ̀ⲡ̀ϣⲱⲓ : ⲛ̀ⲟⲩⲑⲩⲥⲓ̀ⲁ ⲉⲥϣⲏⲡ: ϩⲓϫⲉⲛ ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ : ϧⲁ ⲡ̀ⲟⲩϫⲁⲓ ⲙ̀ⲡⲉⲛⲅⲉⲛⲟⲥ.</td>
            <td class="arabic">هذا الذي أصعد ذاته ذبيحة مقبولة على الصليب عن خلاص جنسنا.</td>
        </tr>
        <tr id="table_${tableNumber}_row_1" class="text">
            <td class="english">His good Father inhaled His sweet aroma in the evening on Golgotha.</td>
            <td class="coptic">Ⲁϥϣⲱⲗⲉⲙ ⲉ̀ⲣⲟϥ : ⲛ̀ϫⲉ ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲙ̀ⲫ̀ⲛⲁⲩ ⲛ̀ⲧⲉ ϩⲁⲛⲁ̀ⲣⲟⲩϩⲓ ϩⲓϫⲉⲛ ϯⲅⲟⲗⲅⲟⲑⲁ.</td>
            <td class="arabic"> فاشتمه أبوه الصالح وقت المساء على الجلجثة.</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="text">
            <td class="english">We worship you O Christ with your good Father and the Holy Spirit for You were crucified and saved us. </td>
            <td class="coptic">Ⲧⲉⲛⲟⲩⲱ̀ϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡ̅ⲭ̅ⲥ ⲛⲉⲙ ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁⲅⲁⲑⲟⲥ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ ϫⲉ ⲁⲩⲁϣⲕ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.</td>
            <td class="arabic">نسجد لكَ أيها المسيح مع أبيك الصالح والروح القدس لأنكَ صلبت وخلصتنا</td>
        </tr>
    </table>
`;
   return html;
}

const cross =
    '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/cross.png" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">';
const arrowUp =
    '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/arrowUp.png" alt="arrow up" style="width: 2vw; height: auto; padding-bottom:1vw; filter: sepia(100%) saturate(500%) ">';
const skip =
    '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/skip.png" alt="arrow up" style="width: 8vw; height: auto; padding-top:1vw; filter: sepia(100%) saturate(300%) ">';
const candle  =
    '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/candle.png" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">';


export {
    hourIntro,
    paschalPraise1,
    paschalPraise2,
    paschalPraise3,
    copticGospelIntro,
    daytimeExpositionIntro,
    nighttimeExpositionIntro,
    expositionConclusion,
    daytimeLitanies,
    nighttimeLitanies,
    evnotiNaiNan,
    evnotiNaiNanGreat,
    endOfServiceHymn,
    faiEtafEnf,
    cross,
    candle,
    arrowUp,
    skip,
};

// Path: data/holyWeek/repeatedPrayers.js
