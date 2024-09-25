import { useContext, useState, useEffect } from 'react';
import SettingsContext from '../settings/settingsContext';

const userSettings = (value, settingsKey) => {
    const [settings] = useContext(SettingsContext);
    const [settingsData, setSettingsData] = useState([]);
  
    useEffect(() => {
  
      if (settings[settingsKey]) {
        setSettingsData(settings[settingsKey]);
      }
    }, [settings, settingsKey]);
  
    // Find the item with the provided value in the settingsData array
    const item = settingsData.find(item => item.value === value);
  
    // If the item is found, return its checked property; otherwise, return false
    return item ? item.checked : false;
  };
  

function amenAmenCome(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
        <table id="table_${tableNumber}" title="Amen Amen Come">
            <caption class="caption" id="caption_table_${tableNumber}">Amen Amen Come
            <span class="arabic-caption">امين تعال أيها الرب يسوع</span></caption>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">Amen Amen Come</td>
                    <td class="arabic">امين تعال</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">My faithful Lord, Jesus Christ!</td>
                    <td class="arabic">أيها الرب يسوع</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Amen Amen Come</td>
                    <td class="arabic">امين تعال</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">Our hearts are yearning for the flight!</td>
                    <td class="arabic">قلوبنا إشتاقت للرجوع</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
                <tr id="table_${tableNumber}_row_4" class="refrain">
                    <td class="english">(We´re waiting for you</td>
                    <td class="arabic">(منتظرينك</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="refrain">
                    <td class="english">As you have promised) x2</td>
                    <td class="arabic">بحسب وعودك) x2</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="refrain">
                    <td class="english">(Surely I come quickly Amen!) x2</td>
                    <td class="arabic">(قلت سآتي سريعًا آمين) x2</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
                <tr id="table_${tableNumber}_row_7" class="north">
                    <td class="english">We see Thy glory,</td>
                    <td class="arabic">نراك بمجدك</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">In the delightful clouds,</td>
                    <td class="arabic">على السحاب المنير</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">You've made us like you,</td>
                    <td class="arabic">تجعلنا  مثلك</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english">In a quick twinkle of an eye.</td>
                    <td class="arabic">وفي طرفة عين إليك نطير</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
                <tr id="table_${tableNumber}_row_11" class="refrain">
                    <td class="english">(We´re waiting for you</td>
                    <td class="arabic">(منتظرينك</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="refrain">
                    <td class="english">As you have promised) x2</td>
                    <td class="arabic">بحسب وعودك) x2</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="refrain">
                    <td class="english">(Surely I come quickly Amen!) x2</td>
                    <td class="arabic">(قلت سآتي سريعًا آمين) x2</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
                <tr id="table_${tableNumber}_row_14" class="north">
                    <td class="english">Thy sight would cheer us,</td>
                    <td class="arabic">نفرح بقربك</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="north">
                    <td class="english">We see Thy wounds and thy scars;</td>
                    <td class="arabic">ونشوف آثار الجروح</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">As You draw near us,</td>
                    <td class="arabic">علامة حبك</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">Signs of Your love fill our eyes.</td>
                    <td class="arabic">لنا يا حبيب الروح</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
                <tr id="table_${tableNumber}_row_18" class="refrain">
                    <td class="english">(We´re waiting for you</td>
                    <td class="arabic">(منتظرينك</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="refrain">
                    <td class="english">As you have promised) x2</td>
                    <td class="arabic">بحسب وعودك) x2</td>
                </tr>
                <tr id="table_${tableNumber}_row_20" class="refrain">
                    <td class="english">(Surely I come quickly Amen!) x2</td>
                    <td class="arabic">(قلت سآتي سريعًا آمين) x2</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">Around our Groom there</td>
                    <td class="arabic">نسعد بشخصك</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="north">
                    <td class="english">We rejoice and be glad,</td>
                    <td class="arabic">ونكون معك  في كل حين</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="north">
                    <td class="english">With the redeemed church,</td>
                    <td class="arabic">يجمعنا عرسك</td>
                </tr>
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">The greatest love and joy ever.</td>
                    <td class="arabic">مع  جماعة  المفديين</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
                <tr id="table_${tableNumber}_row_25" class="refrain">
                    <td class="english">(We´re waiting for you</td>
                    <td class="arabic">(منتظرينك</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="refrain">
                    <td class="english">As you have promised) x2</td>
                    <td class="arabic">بحسب وعودك) x2</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="refrain">
                    <td class="english">(Surely I come quickly Amen!) x2</td>
                    <td class="arabic">(قلت سآتي سريعًا آمين) x2</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
                <tr id="table_${tableNumber}_row_28" class="north">
                    <td class="english">No more sorrow,</td>
                    <td class="arabic">ننسي اتعابنا</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="north">
                    <td class="english">No more pain, nor tears,</td>
                    <td class="arabic">ولا يكون  هناك  أنين</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="north">
                    <td class="english">The Lord our comfort,</td>
                    <td class="arabic">حوالين  عر يسنا</td>
                </tr>
                <tr id="table_${tableNumber}_row_31" class="north">
                    <td class="english">Our hearts and souls He cheers,</td>
                    <td class="arabic">دوما  نكون  فرحانين</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
                <tr id="table_${tableNumber}_row_32" class="refrain">
                    <td class="english">(We´re waiting for you</td>
                    <td class="arabic">(منتظرينك</td>
                </tr>
                <tr id="table_${tableNumber}_row_33" class="refrain">
                    <td class="english">As you have promised) x2</td>
                    <td class="arabic">بحسب وعودك) x2</td>
                </tr>
                <tr id="table_${tableNumber}_row_34" class="refrain">
                    <td class="english">(Surely I come quickly Amen!) x2</td>
                    <td class="arabic">(قلت سآتي سريعًا آمين) x2</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
                <tr id="table_${tableNumber}_row_35" class="north">
                    <td class="english">There shall be no night,</td>
                    <td class="arabic">أشواق  قلوبنا</td>
                </tr>
                <tr id="table_${tableNumber}_row_36" class="north">
                    <td class="english">No candle needed nor a sun,</td>
                    <td class="arabic">نلقاها ونشوفك بالعين</td>
                </tr>
                <tr id="table_${tableNumber}_row_37" class="north">
                    <td class="english">Our Lord and Savior</td>
                    <td class="arabic">يا فادي  نفوسنا</td>
                </tr>
                <tr id="table_${tableNumber}_row_38" class="north">
                    <td class="english">Gives us Himself, the True Light.</td>
                    <td class="arabic">يا حلو يا طيب يا أمين</td>
                </tr>
            </tbody>
        </table>
    \n`;
    return html;
}

function beFaithfulUntoDeath(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
        <table id="table_${tableNumber}" title="Be Faithful Unto Death">
            <caption class="caption" id="caption_table_${tableNumber}">Be Faithful Unto Death
            <span class="arabic-caption">كن أمينا إلى الموت</span></caption>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">He who overcomes shall eat,</td>
                    <td class="arabic">من يغلب سيأكل</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">from the tree of life</td>
                    <td class="arabic">من شجرة الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">The tree, in the midst</td>
                    <td class="arabic">شجرة قائمة</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">of the Lord´s paradise</td>
                    <td class="arabic">في وسط فردوس الله</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
                <tr id="table_${tableNumber}_row_4" class="refrain">
                    <td class="english">Be faithful unto death,</td>
                    <td class="arabic">كن أمينا إلى الموت</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="refrain">
                    <td class="english">and I will give you the crown of life</td>
                    <td class="arabic">فسأعطيك إكليل الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="refrain">
                    <td class="english">Soon I come, soon I come,</td>
                    <td class="arabic">ها أنا آتي سريعا</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="refrain">
                    <td class="english">soon I come as the thief!</td>
                    <td class="arabic">ها أنا آتي كلص</td>
                </tr>
                <tr id="table_${tableNumber}_row_8" class="refrain">
                    <td class="english">And I will give him who thirsts</td>
                    <td class="arabic">ها أنا أعطي العطشان</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="refrain">
                    <td class="english">from the water of life</td>
                    <td class="arabic">من ينبوع ماء الحياة</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english">He who overcomes and keeps</td>
                    <td class="arabic">من يغلب و يحفظ</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="north">
                    <td class="english">my words till the end</td>
                    <td class="arabic">للنهاية أعمالي</td>
                </tr>
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">I will give power to rule</td>
                    <td class="arabic">سلطانا سأعطيه</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">nations with an iron rod</td>
                    <td class="arabic">ليملك كل مالي</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
                <tr id="table_${tableNumber}_row_14" class="refrain">
                    <td class="english">Be faithful unto death,</td>
                    <td class="arabic">كن أمينا إلى الموت</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="refrain">
                    <td class="english">and I will give you the crown of life</td>
                    <td class="arabic">فسأعطيك إكليل الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_16" class="refrain">
                    <td class="english">Soon I come, soon I come,</td>
                    <td class="arabic">ها أنا آتي سريعا</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="refrain">
                    <td class="english">soon I come as the thief!</td>
                    <td class="arabic">ها أنا آتي كلص</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="refrain">
                    <td class="english">And I will give him who thirsts</td>
                    <td class="arabic">ها أنا أعطي العطشان</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="refrain">
                    <td class="english">from the water of life</td>
                    <td class="arabic">من ينبوع ماء الحياة</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
                <tr id="table_${tableNumber}_row_20" class="north">
                    <td class="english">He who overcomes shall not</td>
                    <td class="arabic">من يغلب اعترف</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="north">
                    <td class="english">be hurt by the second death</td>
                    <td class="arabic">به قدام أبي</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="north">
                    <td class="english">His name, his name,</td>
                    <td class="arabic">من يغلب فلا يؤذيه</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="north">
                    <td class="english">before my Father I confess</td>
                    <td class="arabic">ذاك الموت الثاني</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
                <tr id="table_${tableNumber}_row_24" class="refrain">
                    <td class="english">Be faithful unto death,</td>
                    <td class="arabic">كن أمينا إلى الموت</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="refrain">
                    <td class="english">and I will give you the crown of life</td>
                    <td class="arabic">فسأعطيك إكليل الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="refrain">
                    <td class="english">Soon I come, soon I come,</td>
                    <td class="arabic">ها أنا آتي سريعا</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="refrain">
                    <td class="english">soon I come as the thief!</td>
                    <td class="arabic">ها أنا آتي كلص</td>
                </tr>
                <tr id="table_${tableNumber}_row_28" class="refrain">   
                    <td class="english">And I will give him who thirsts</td>
                    <td class="arabic">ها أنا أعطي العطشان</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="refrain">
                    <td class="english">from the water of life</td>
                    <td class="arabic">من ينبوع ماء الحياة</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
                <tr id="table_${tableNumber}_row_30" class="north">
                    <td class="english">He who overcomes I will</td>
                    <td class="arabic">من يغلب فطوباه</td>
                </tr>
                <tr id="table_${tableNumber}_row_31" class="north">
                    <td class="english">write on him my new name</td>
                    <td class="arabic">سيدعى للعشاء</td>
                </tr>
                <tr id="table_${tableNumber}_row_32" class="north">
                    <td class="english">He who overcomes shall sit</td>
                    <td class="arabic">يوم عرس الخروف</td>
                </tr>
                <tr id="table_${tableNumber}_row_33" class="north">
                    <td class="english">with me on my throne</td>
                    <td class="arabic">يوم مجد في السماء</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
                <tr id="table_${tableNumber}_row_34" class="refrain">
                    <td class="english">Be faithful unto death,</td>
                    <td class="arabic">كن أمينا إلى الموت</td>
                </tr>
                <tr id="table_${tableNumber}_row_35" class="refrain">
                    <td class="english">and I will give you the crown of life</td>
                    <td class="arabic">فسأعطيك إكليل الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_36" class="refrain">
                    <td class="english">Soon I come, soon I come,</td>
                    <td class="arabic">ها أنا آتي سريعا</td>
                </tr>
                <tr id="table_${tableNumber}_row_37" class="refrain">
                    <td class="english">soon I come as the thief!</td>
                    <td class="arabic">ها أنا آتي كلص</td>
                </tr>
                <tr id="table_${tableNumber}_row_38" class="refrain">
                    <td class="english">And I will give him who thirsts</td>
                    <td class="arabic">ها أنا أعطي العطشان</td>
                </tr>
                <tr id="table_${tableNumber}_row_39" class="refrain">
                    <td class="english">from the water of life</td>
                    <td class="arabic">من ينبوع ماء الحياة</td>
                </tr>
            </tbody>
        </table>




\n`;
    return html;
}

function blessedAreYouOMary(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Blessed are you Mary">
        <caption id="caption_table_${tableNumber}" class="caption">Blessed are you Mary
        <span class="arabic-caption">طوباك يا مريم</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Blessed are you Mary</td>
                <td class="enPhonicsSongs">Tobaki ya Mariam</td>
                <td class="arabic">طوباك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">Rod of Aaron,</td>
                <td class="enPhonicsSongs">Ya 3asa Haroon</td>
                <td class="arabic">يا عصا هارون</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">the dome of Moses,</td>
                <td class="enPhonicsSongs">Ya qobet Mousa</td>
                <td class="arabic">يا قبة موسى</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">Aaron’s censor.</td>
                <td class="enPhonicsSongs">We shoryet Haroon</td>
                <td class="arabic">و شورية هارون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">Your glory O Mary</td>
                <td class="enPhonicsSongs">Magdoki ya Mariam</td>
                <td class="arabic">مجدك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">is above the heavens.</td>
                <td class="enPhonicsSongs">Arfa3 men alsama</td>
                <td class="arabic">أرفع من السما</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">You gave birth to the Savior</td>
                <td class="enPhonicsSongs">Waladti lana almokhalles</td>
                <td class="arabic">ولدت لنا المخلص</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">He gave you all honor. (x2)</td>
                <td class="enPhonicsSongs">Wa ‘a3taki kol baha’</td>
                <td class="arabic">و أعطاك كل بهاء</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">Blessed are you Mary</td>
                <td class="enPhonicsSongs">Tobaki ya Mariam</td>
                <td class="arabic">طوباك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">Rod of Aaron,</td>
                <td class="enPhonicsSongs">Ya 3asa Haroon</td>
                <td class="arabic">يا عصا هارون</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">the dome of Moses,</td>
                <td class="enPhonicsSongs">Ya qobet Mousa</td>
                <td class="arabic">يا قبة موسى</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">Aaron’s censor.</td>
                <td class="enPhonicsSongs">We shoryet Haroon</td>
                <td class="arabic">و شورية هارون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">Your glory O Mary</td>
                <td class="enPhonicsSongs">Magdoki ya Mariam</td>
                <td class="arabic">مجدك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">exceeded the heavenlies.</td>
                <td class="enPhonicsSongs">Faq alsama’eyeen</td>
                <td class="arabic">فاق السمائيين</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">You’re exalted above the cherubim</td>
                <td class="enPhonicsSongs">3alayti 3ala alsherobim</td>
                <td class="arabic">عليت على الشاروبيم</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">and above the seraphim. (x2)</td>
                <td class="enPhonicsSongs">Wa aydan 3ala alserafim</td>
                <td class="arabic">و أيضا على السيرافيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">Blessed are you Mary</td>
                <td class="enPhonicsSongs">Tobaki ya Mariam</td>
                <td class="arabic">طوباك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">Rod of Aaron,</td>
                <td class="enPhonicsSongs">Ya 3asa Haroon</td>
                <td class="arabic">يا عصا هارون</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">the dome of Moses,</td>
                <td class="enPhonicsSongs">Ya qobet Mousa</td>
                <td class="arabic">يا قبة موسى</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">Aaron’s censor.</td>
                <td class="enPhonicsSongs">We shoryet Haroon</td>
                <td class="arabic">و شورية هارون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">Your glory O Mary</td>
                <td class="enPhonicsSongs">Magdoki ya Mariam</td>
                <td class="arabic">مجدك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">shines in the highest,</td>
                <td class="enPhonicsSongs">Ka’en fee al3ola</td>
                <td class="arabic">كائن في العلا</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">for you are the Mother of God</td>
                <td class="enPhonicsSongs">Le’anaki 3arsh alsama</td>
                <td class="arabic">لأنك عرش السما</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">who came and redeemed us. (x2)</td>
                <td class="enPhonicsSongs">Neki a3tana alfeda’</td>
                <td class="arabic">بك أعطانا الفداء</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">Blessed are you Mary</td>
                <td class="enPhonicsSongs">Tobaki ya Mariam</td>
                <td class="arabic">طوباك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">Rod of Aaron,</td>
                <td class="enPhonicsSongs">Ya 3asa Haroon</td>
                <td class="arabic">يا عصا هارون</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">the dome of Moses,</td>
                <td class="enPhonicsSongs">Ya qobet Mousa</td>
                <td class="arabic">يا قبة موسى</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">Aaron’s censor.</td>
                <td class="enPhonicsSongs">We shoryet Haroon</td>
                <td class="arabic">و شورية هارون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">Your glory O Mary</td>
                <td class="enPhonicsSongs">Magdoki ya Mariam</td>
                <td class="arabic">مجدك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">is over all generation.</td>
                <td class="enPhonicsSongs">Men 3abr al agyal</td>
                <td class="arabic">من عبر الأجيال</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">You are the second heaven,</td>
                <td class="enPhonicsSongs">Anti alsama althania</td>
                <td class="arabic">أنت السما الثانية</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">Mother of the Great King</td>
                <td class="enPhonicsSongs">Om Allah el dayan</td>
                <td class="arabic">أم الله الديان</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">Blessed are you Mary</td>
                <td class="enPhonicsSongs">Tobaki ya Mariam</td>
                <td class="arabic">طوباك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">Rod of Aaron,</td>
                <td class="enPhonicsSongs">Ya 3asa Haroon</td>
                <td class="arabic">يا عصا هارون</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">the dome of Moses,</td>
                <td class="enPhonicsSongs">Ya qobet Mousa</td>
                <td class="arabic">يا قبة موسى</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">Aaron’s censor.</td>
                <td class="enPhonicsSongs">We shoryet Haroon</td>
                <td class="arabic">و شورية هارون</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function shineBright(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `

    <table id="table_${tableNumber}" title="Shine Bright!">
  <caption id="caption_table_${tableNumber}" class="caption">
    Shine Bright!
    <span class="arabic-caption">نوري يا كنيسة المسيح</span>
  </caption>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
    <tr id="table_${tableNumber}_row_1" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Our church of Christ</td>
      <td class="enPhonicsSongs">Nawari Nawari ya Kanisat el-Masih</td>
      <td class="arabic">نورى نورى يا كنيسة المسيح</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Verse 1 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
    <tr id="table_${tableNumber}_row_3" class="North">
      <td class="english">In celebrating your Martyrs, the righteous and saints!</td>
      <td class="enPhonicsSongs">Fi 3eed shohada’ik, 3eed shohada’ik al-abrar al-qaddisin</td>
      <td class="arabic">في عيد شهدائك عيد شهدائك الابرار القديسين</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="North">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
    <tr id="table_${tableNumber}_row_5" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Our church of Christ</td>
      <td class="enPhonicsSongs">Nawari Nawari ya Kanisat el-Masih</td>
      <td class="arabic">نورى نورى يا كنيسة المسيح</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Verse 2 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
    <tr id="table_${tableNumber}_row_7" class="South">
      <td class="english">Their blood was shed for their faith in our God and savior</td>
      <td class="enPhonicsSongs">El-dam sal lama sal anhar dam el-shohada</td>
      <td class="arabic">الدم سال ياما سال انهار دم الشهداء</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="South">
      <td class="english">Jesus Christ! Jesus Christ! Jesus Christ!</td>
      <td class="enPhonicsSongs">Dam al-abrar, dam al-at-har, dam al-abtal</td>
      <td class="arabic">دم الابرار دم الاطهار دم الابطال</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
    <tr id="table_${tableNumber}_row_9" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Our church of Christ</td>
      <td class="enPhonicsSongs">Nawari Nawari ya Kanisat el-Masih</td>
      <td class="arabic">نورى نورى يا كنيسة المسيح</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Verse 3 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
    <tr id="table_${tableNumber}_row_11" class="North">
      <td class="english">In the Nayrouz, commemorating your saintly Martyrs!</td>
      <td class="enPhonicsSongs">Fi el-Nayrouz el-Nayrouz zekra el-shohada al-qaddisin</td>
      <td class="arabic">فى النيروز النيروز ذكرى الشهداء القديسين</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="North">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
    <tr id="table_${tableNumber}_row_13" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Our church of Christ</td>
      <td class="enPhonicsSongs">Nawari Nawari ya Kanisat el-Masih</td>
      <td class="arabic">نورى نورى يا كنيسة المسيح</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Verse 4 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
    <tr id="table_${tableNumber}_row_15" class="South">
      <td class="english">O God our Lord, keep us in your faith and in your love</td>
      <td class="enPhonicsSongs">Ya Rabb e7faz lena imanena wa e7faz lena batrakena</td>
      <td class="arabic">يا رب احفظ لينا ايمانا واحفظ لينا بطركنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="South">
      <td class="english">Forever! and ever! and ever!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
    <tr id="table_${tableNumber}_row_17" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Our church of Christ</td>
      <td class="enPhonicsSongs">Nawari Nawari ya Kanisat el-Masih</td>
      <td class="arabic">نورى نورى يا كنيسة المسيح</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Verse 5 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
    <tr id="table_${tableNumber}_row_19" class="North">
      <td class="english">O God our Lord, protect our pope and our beloved church</td>
      <td class="enPhonicsSongs">Ya Rabb e7faz lena imanena wa e7faz lena batrakena</td>
      <td class="arabic">يا رب احفظ لينا ايمانا واحفظ لينا بطركنا</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="North">
      <td class="english">Forever! and ever! and ever!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
    <tr id="table_${tableNumber}_row_21" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Our church of Christ</td>
      <td class="enPhonicsSongs">Nawari Nawari ya Kanisat el-Masih</td>
      <td class="arabic">نورى نورى يا كنيسة المسيح</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="refrain">
      <td class="english">Shine Bright! Shine Bright! Shine Bright!</td>
      <td class="enPhonicsSongs">Nawari Nawari Nawari</td>
      <td class="arabic">نورى نورى نورى</td>
    </tr>
  </tbody>
</table>

    `;return html;
}

function dontLeaveMeAlone(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
        <table id="table_${tableNumber}" title="Don't Leave Me Alone">
            <caption class="caption" id="caption_table_${tableNumber}">Don't Leave Me Alone
            <span class="arabic-caption">لا لا تتركني وحدي</span></caption>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">No don't leave me alone,</td>
                    <td class="arabic">لا لا تتركني وحدي</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">O my faithful shepherd.</td>
                    <td class="arabic">يا راعى الأمين</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Guide me dear master</td>
                    <td class="arabic">قدني أنت يا ربى</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">and be unto me a helper.</td>
                    <td class="arabic">و سر معي يا معين</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
                <tr id="table_${tableNumber}_row_4" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="refrain">
                    <td class="english">So take my right hand O Lord and guide me</td>
                    <td class="arabic">فأمسك يميني ربى وأهديني</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="refrain">
                    <td class="english">in your way forever</td>
                    <td class="arabic">في طريقي دائما</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">And don't leave me alone,</td>
                    <td class="arabic">ولا تتركني وحدي</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">in the midst of this darkness</td>
                    <td class="arabic">في وسط الظلام</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english">Let your bright face guide me</td>
                    <td class="arabic">اجعل وجهك يقودني</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="north">
                    <td class="english">O Lord unto peace.</td>
                    <td class="arabic">يا رب للسلام</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
                <tr id="table_${tableNumber}_row_12" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="refrain">
                    <td class="english">So take my right hand O Lord and guide me</td>
                    <td class="arabic">فأمسك يميني ربى وأهديني</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="refrain">
                    <td class="english">in your way forever</td>
                    <td class="arabic">في طريقي دائما</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">And don't leave me alone,</td>
                    <td class="arabic">ولا تتركني وحدي</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">but hear my prayers</td>
                    <td class="arabic">بل اسمع صلاتي</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="north">
                    <td class="english">And be there for me redeemer</td>
                    <td class="arabic">و قف أنت بجانبي</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="north">
                    <td class="english">for the rest of my life</td>
                    <td class="arabic">ربى كل حياتي</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
                <tr id="table_${tableNumber}_row_20" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="refrain">
                    <td class="english">So take my right hand O Lord and guide me</td>
                    <td class="arabic">فأمسك يميني ربى وأهديني</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="refrain">
                    <td class="english">in your way forever</td>
                    <td class="arabic">في طريقي دائما</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
                <tr id="table_${tableNumber}_row_24" class="north">
                    <td class="english">And don't leave me alone,</td>
                    <td class="arabic">ولا تتركني وحدي</td>
                </tr>
                <tr id="table_${tableNumber}_row_25" class="north">
                    <td class="english">because of my sins</td>
                    <td class="arabic">من اجل خطأى</td>
                </tr>
                <tr id="table_${tableNumber}_row_26" class="north">
                    <td class="english">But forgive me O lord</td>
                    <td class="arabic">بل سامحني يا ربى</td>
                </tr>
                <tr id="table_${tableNumber}_row_27" class="north">
                    <td class="english">and accept my repentance</td>
                    <td class="arabic">إن زلت قدمي</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
                <tr id="table_${tableNumber}_row_28" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_29" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_30" class="refrain">
                    <td class="english">So take my right hand O Lord and guide me</td>
                    <td class="arabic">فأمسك يميني ربى وأهديني</td>
                </tr>
                <tr id="table_${tableNumber}_row_31" class="refrain">
                    <td class="english">in your way forever</td>
                    <td class="arabic">في طريقي دائما</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
                <tr id="table_${tableNumber}_row_32" class="north">
                    <td class="english">No don't leave me alone,</td>
                    <td class="arabic">و لا تتركني وحدي</td>
                </tr>
                <tr id="table_${tableNumber}_row_33" class="north">
                    <td class="english">in the midst of this world</td>
                    <td class="arabic">في وسط الخطاة</td>
                </tr>
                <tr id="table_${tableNumber}_row_34" class="north">
                    <td class="english">But Come quickly O Lord</td>
                    <td class="arabic">بل تعال يا ربي</td>
                </tr>
                <tr id="table_${tableNumber}_row_35" class="north">
                    <td class="english">and take me to heaven</td>
                    <td class="arabic">وخذني للسما</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
                <tr id="table_${tableNumber}_row_36" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_37" class="refrain">
                    <td class="english">I am o Lord without you nothing at all</td>
                    <td class="arabic">أنا يا رب دونك لا شئ أبدا</td>
                </tr>
                <tr id="table_${tableNumber}_row_38" class="refrain">   
                    <td class="english">So take my right hand O Lord and guide me</td>
                    <td class="arabic">فأمسك يميني ربى وأهديني</td>
                </tr>
                <tr id="table_${tableNumber}_row_39" class="refrain">
                    <td class="english">in your way forever</td>
                    <td class="arabic">في طريقي دائما</td>
                </tr>
            </tbody>
        </table>
\n`;
    return html;
}

function drawAPortraitOfTheVirgin(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Draw a portrait of the Virgin">
        <caption id="caption_table_${tableNumber}" class="caption">Draw a portrait of the Virgin
        <span class="arabic-caption">ارسموا للعذراء صوره</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">carrying her Son the Christ.</td>
                <td class="enPhonicsSongs">Shayla ebnaha elmasee7</td>
                <td class="arabic">شايله ابنها المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">offer unto her the praise.</td>
                <td class="enPhonicsSongs">Qademo laha altasabee7</td>
                <td class="arabic">قدموا لها التسابيح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english">draw it with the brightest colors.</td>
                <td class="enPhonicsSongs">Ersemoha belalwan</td>
                <td class="arabic">ارسموها بالألوان</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">for she is the source of gentleness.</td>
                <td class="enPhonicsSongs">El3adra nab3 el 7anan</td>
                <td class="arabic">العذراء نبع الحنان</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">and overlay it with gold.</td>
                <td class="enPhonicsSongs">Ersemoha beldahab</td>
                <td class="arabic">ارسموها بالذهب</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">for her Son was crucified.</td>
                <td class="enPhonicsSongs">Da ebnaha 3anna etsalab</td>
                <td class="arabic">ده ابنها عنا اتصلب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english">that is ornamented with rubies.</td>
                <td class="enPhonicsSongs">Rassa3oha belya’oot</td>
                <td class="arabic">رصعوها بالياقوت</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">for her Son defeated death.</td>
                <td class="enPhonicsSongs">Da ebnaha ellee das elmot</td>
                <td class="arabic">ده ابنها اللي داس الموت</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="south">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english">and adorn her with priceless treasures.</td>
                <td class="enPhonicsSongs">Zayenoha bel3aqeeq</td>
                <td class="arabic">زينوها بالعقيق</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="south">
                <td class="english">for her Son, He is the way.</td>
                <td class="enPhonicsSongs">Da ebnaha howa el tareeq</td>
                <td class="arabic">ده ابنها هو الطريق</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="refrain">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="refrain">
                <td class="english">and overlay it with gold.</td>
                <td class="enPhonicsSongs">Ersemoha beldahab</td>
                <td class="arabic">ارسموها بالذهب</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="refrain">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="refrain">
                <td class="english">for her Son was crucified.</td>
                <td class="enPhonicsSongs">Da ebnaha 3anna etsalab</td>
                <td class="arabic">ده ابنها عنا اتصلب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english">frame it with the precious stones.</td>
                <td class="enPhonicsSongs">Barwezoha belgawaher</td>
                <td class="arabic">بروزوها بالجواهر</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="north">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english">so the Light of our faith shines.</td>
                <td class="enPhonicsSongs">Noor eemanna yeb’a zaher</td>
                <td class="arabic">نور ايماننا يبقى ظاهر</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">with her crown of sacred pearls.</td>
                <td class="enPhonicsSongs">Tagha men lo’lo’ manthoor</td>
                <td class="arabic">تاجها من لؤلؤ منثور</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">the mother of the Kings of ages.</td>
                <td class="enPhonicsSongs">Dee ‘om malek eldehoor</td>
                <td class="arabic">دي ام ملك الدهور</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">and overlay it with gold.</td>
                <td class="enPhonicsSongs">Ersemoha beldahab</td>
                <td class="arabic">ارسموها بالذهب</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">for her Son was crucified.</td>
                <td class="enPhonicsSongs">Da ebnaha 3anna etsalab</td>
                <td class="arabic">ده ابنها عنا اتصلب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="north">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english">shroud her with the purest diamonds</td>
                <td class="enPhonicsSongs">Rassa3oha bel almaz</td>
                <td class="arabic">رصعوها بالالماظ</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="north">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="north">
                <td class="english">one from which the devil flees.</td>
                <td class="enPhonicsSongs">Elshaytan yahrab moghtaz</td>
                <td class="arabic">الشيطان يهرب مغتاظ</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="south">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="south">
                <td class="english">and engrave her on the wood.</td>
                <td class="enPhonicsSongs">En7atoha fel akhshab</td>
                <td class="arabic">انحتوها في الاخشاب</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="south">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="south">
                <td class="english">mother of the Lord of lords.</td>
                <td class="enPhonicsSongs">De ‘om rab elarbab</td>
                <td class="arabic">دي ام رب الارباب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_45" class="refrain">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="refrain">
                <td class="english">and overlay it with gold.</td>
                <td class="enPhonicsSongs">Ersemoha beldahab</td>
                <td class="arabic">ارسموها بالذهب</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="refrain">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="refrain">
                <td class="english">for her Son was crucified.</td>
                <td class="enPhonicsSongs">Da ebnaha 3anna etsalab</td>
                <td class="arabic">ده ابنها عنا اتصلب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_13">
            <tr id="table_${tableNumber}_row_49" class="south">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_50" class="south">
                <td class="english">on the wooden olive branch.</td>
                <td class="enPhonicsSongs">3ala khashab elzaytoon</td>
                <td class="arabic">على خشب الزيتون</td>
            </tr>
            <tr id="table_${tableNumber}_row_51" class="south">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_52" class="south">
                <td class="english">the Virgin who lights our eyes.</td>
                <td class="enPhonicsSongs">Dee el3adra noor el3oyoon</td>
                <td class="arabic">دي العذراء نور العيون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_14">
            <tr id="table_${tableNumber}_row_53" class="south">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_54" class="south">
                <td class="english">decorate her O wise virgins.</td>
                <td class="enPhonicsSongs">Lawenooha ya 7okama’</td>
                <td class="arabic">لونوها يا حكماء</td>
            </tr>
            <tr id="table_${tableNumber}_row_55" class="south">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_56" class="south">
                <td class="english">mother of the Alpha and the Omega.</td>
                <td class="enPhonicsSongs">Dee ‘om alalef wal ya’</td>
                <td class="arabic">دي ام الالف والياء</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_15">
            <tr id="table_${tableNumber}_row_57" class="refrain">
                <td class="english">Draw a portrait of the Virgin,</td>
                <td class="enPhonicsSongs">Ersemo lel3adra soora</td>
                <td class="arabic">ارسموا للعذراء صوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_58" class="refrain">
                <td class="english">and overlay it with gold.</td>
                <td class="enPhonicsSongs">Ersemoha beldahab</td>
                <td class="arabic">ارسموها بالذهب</td>
            </tr>
            <tr id="table_${tableNumber}_row_59" class="refrain">
                <td class="english">Put her on a beautiful icon,</td>
                <td class="enPhonicsSongs">7otoha fee agmal maqsora</td>
                <td class="arabic">حطوها في أجمل مقصوره</td>
            </tr>
            <tr id="table_${tableNumber}_row_60" class="refrain">
                <td class="english">for her Son was crucified.</td>
                <td class="enPhonicsSongs">Da ebnaha 3anna etsalab</td>
                <td class="arabic">ده ابنها عنا اتصلب</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function hailToYouOMotherOfComfort(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Hail to you O Mother of Comfort">
        <caption id="caption_table_${tableNumber}" class="caption">Hail to you O Mother of Comfort
        <span class="arabic-caption">سلامنا إليك يا أم المعونه</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Hail to you O Mother of Comfort</td>
                <td class="enPhonicsSongs">Salamna elekee ya om el ma3oona</td>
                <td class="arabic">سلامنا إليك يا أم المعونه</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">O pure rampart of salvation O compassionate mother (x2)</td>
                <td class="enPhonicsSongs">Ya tahra ya soor el khalas ya 7anoona</td>
                <td class="arabic">يا طاهره يا سور الخلاص يا حنونه</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">It is always our pleasure to praise your virtues</td>
                <td class="enPhonicsSongs">Tamallee beye7lalna nemda7 fadaylek</td>
                <td class="arabic">تمللي بيحلى لنا نمدح فضايلك</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">and turn always to you seeking your help.</td>
                <td class="enPhonicsSongs">We nelga’ elekee 3ashan tengedeena</td>
                <td class="arabic">ونلجأ إليك عشان تنجدينا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">Who among the people whose heart is more merciful</td>
                <td class="enPhonicsSongs">Meen fel bashar albo a7ane 3alena</td>
                <td class="arabic">مين في البشر قلبه أحنى علينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">and whose passions support us in all our life steps. (x2)</td>
                <td class="enPhonicsSongs">3awatfo ma3ana fee gamee3 khataweena</td>
                <td class="arabic">عواطفه معانا في جميع خطاوينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">Who truly rejoice if we rejoice</td>
                <td class="enPhonicsSongs">Beyefra7 7a’ee’ee eza fere7na e7na</td>
                <td class="arabic">بيفرح حقيقي إذا فرحنا إحنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">and is saddened if we are sad.</td>
                <td class="enPhonicsSongs">We ye7zan eza el7ozn geh nawa7eena</td>
                <td class="arabic">و يحزن إذا الحزن جه نواحينا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">Matthias the Lord's apostle during his imprisonment</td>
                <td class="enPhonicsSongs">We metias rasool elmasee7 wa’t segno</td>
                <td class="arabic">ومتياس رسول المسيح وقت سجنه</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">you asked on his behalf before the Almighty God. (x2)</td>
                <td class="enPhonicsSongs">Talabte ‘osad sa7eb elqodra 3anno</td>
                <td class="arabic">طلبتي قصاد صاحب القدرة عنه</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english">An amazing thing happened the steel melted</td>
                <td class="enPhonicsSongs">7asal amr hayel ba’a elsalb sayel</td>
                <td class="arabic">حصل أمر هايل بقي الصلب سايل</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english">and your intercession brought peace and safety for him.</td>
                <td class="enPhonicsSongs">Shafa3tek gabetlo salamo we ‘amno</td>
                <td class="arabic">شفاعتك جابت له سلامه وأمنه</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english">He asked for your intercession our father Anba Abraam ibn Zaraa</td>
                <td class="enPhonicsSongs">Tadara3 elekee abouna ebn zar3a</td>
                <td class="arabic">تضرع إليك أبونا إبن زرعه</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english">And his prayers were answered quickly and greatly. (x2)</td>
                <td class="enPhonicsSongs">Wa gat lo ma3ontek 3azeema besor3a</td>
                <td class="arabic">وجات له معونتك عظيمة بسرعة</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">You delivered him out of distress and moved the Mount of Makatam</td>
                <td class="enPhonicsSongs">We faketee dee’to na’altee elmoa’attam</td>
                <td class="arabic">وفكيتي ضيقته نقلتي المقطم</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">with the greatest miracle recorded in history.</td>
                <td class="enPhonicsSongs">Be’aya laha feltareekh ‘ay raw3a</td>
                <td class="arabic">بآيه لها في التاريخ أي روعة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_17" class="south">
                <td class="english">At the church of Zeitun you blessed us</td>
                <td class="enPhonicsSongs">We lamma kona fee keneeset elzatoon barekteena</td>
                <td class="arabic">ولما كنا في كنيسة الزيتون باركتينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english">and we felt peace and great joy in us. (x2)</td>
                <td class="enPhonicsSongs">La’ena elsalam welseroor 7elw feena</td>
                <td class="arabic">لقينا السلام والسرور حلو فينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english">You brought to the sick heavenly healing</td>
                <td class="enPhonicsSongs">We lelmarda gebree elshefa elsamawee</td>
                <td class="arabic">وللمرضى جبتي الشفاء السماوي</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="south">
                <td class="english">and to the sad souls great comfort.</td>
                <td class="enPhonicsSongs">We a7la el3aza lelnefoos el7azeena</td>
                <td class="arabic">وأحلي العزاء للنفوس الحزينة</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }


function hailToMary(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Hail to Mary">
        <caption id="caption_table_${tableNumber}" class="caption">Hail to Mary
        <span class="arabic-caption">مجد مريم يتعظم</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">She has born unto us,</td>
                <td class="enPhonicsSongs">Qad talalat wa ta3alat</td>
                <td class="arabic">قد تلألأت وتعالت</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">the Savior of the world.</td>
                <td class="enPhonicsSongs">Ma lenoreha gheroob</td>
                <td class="arabic">ما لنورها غروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">He came and saved our souls,</td>
                <td class="enPhonicsSongs">Wahya qalat 7eena nalat</td>
                <td class="arabic">وهي قالت حين نالت</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">And forgave us our sins.</td>
                <td class="enPhonicsSongs">Faltotawebone elshe3oob</td>
                <td class="arabic">فلتطوبني الشعوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">She's the lady and the Virgin,</td>
                <td class="enPhonicsSongs">Qad ra’aha wa’stafaha</td>
                <td class="arabic">قد رآها واصطفاها</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">Our queen in heaven.</td>
                <td class="enPhonicsSongs">Rabo kol el3alameen</td>
                <td class="arabic">رب كل العالمين</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">She's above the Cherubim,</td>
                <td class="enPhonicsSongs">Wa waqaha moz baraha</td>
                <td class="arabic">ووقاها مذ براها</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">And praised by the Seraphim.</td>
                <td class="enPhonicsSongs">Kollo ma7zooren yasheen</td>
                <td class="arabic">كل محظور يشين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">She is famous and well known,</td>
                <td class="enPhonicsSongs">Heyya ragakom fee shaqakom</td>
                <td class="arabic">هي رجاكم في شقاكم</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">As the best shelter to rest.</td>
                <td class="enPhonicsSongs">Fasma3oo ya khate’een</td>
                <td class="arabic">فاسمعوا يا خاطئين</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">Try her and you'll find that,</td>
                <td class="enPhonicsSongs">La takhafoo ‘an towafoo</td>
                <td class="arabic">لا تخافوا أن توافوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">For your help she's always there.</td>
                <td class="enPhonicsSongs">Le7emaha Talebeen</td>
                <td class="arabic">لحماها طالبين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">Please O Mary, pray for us</td>
                <td class="enPhonicsSongs">Heya to3raf wahya toosaf</td>
                <td class="arabic">هي تعرف وهي توصف</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">And the sinners to return.</td>
                <td class="enPhonicsSongs">Enaha Malga’ gazeel</td>
                <td class="arabic">إنها ملجأ جزيل</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">Teach us and guide all of us,</td>
                <td class="enPhonicsSongs">Fa’qsedoha tagedoha</td>
                <td class="arabic">فاقصدوها تجدوها</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">For you are the faithful saint.</td>
                <td class="enPhonicsSongs">Lema3onatekom tameel</td>
                <td class="arabic">لمعونتكم تميل</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Ozkoreena wanzoreena</td>
                <td class="arabic">اذكرينا و أنظرينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Nazrat al ‘om lelbaneen</td>
                <td class="arabic">نظر الأم للبنين</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Wa’qbaleena wa’g3aleena</td>
                <td class="arabic">واقبلينا واجعلينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Bayna Saf El3abedeen</td>
                <td class="arabic">بين صف العابدين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_45" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Engedeena wa’rshedeena</td>
                <td class="arabic">انجدينا و أرشدينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Na7wa sedq ele3teqad</td>
                <td class="arabic">نحو صدق الاعتقاد</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Wamna7eena tarba7eena</td>
                <td class="arabic">وامنحينا تربحينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Le’bnekee 7osnol wedad</td>
                <td class="arabic">لإبنك حسن الوداد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_13">
            <tr id="table_${tableNumber}_row_49" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_50" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_51" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_52" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_14">
            <tr id="table_${tableNumber}_row_53" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">La tamallee an tosallee</td>
                <td class="arabic">لا تملي أن تصلي</td>
            </tr>
            <tr id="table_${tableNumber}_row_54" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Fe regoo3 elkhate’een</td>
                <td class="arabic">في رجوع الخاطئين</td>
            </tr>
            <tr id="table_${tableNumber}_row_55" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">3allemeehom wa’rshedeehom</td>
                <td class="arabic">علميهم و أرشديهم</td>
            </tr>
            <tr id="table_${tableNumber}_row_56" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Enak elmalga’ el ameen</td>
                <td class="arabic">إنك الملجأ الأمين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_15">
            <tr id="table_${tableNumber}_row_57" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_58" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_59" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_60" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_16">
            <tr id="table_${tableNumber}_row_61" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Thomma nas’al ‘an no’ahal</td>
                <td class="arabic">ثم نسأل أن نؤهل</td>
            </tr>
            <tr id="table_${tableNumber}_row_62" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Lesa3adatel khetam</td>
                <td class="arabic">لسعادة الختام</td>
            </tr>
            <tr id="table_${tableNumber}_row_63" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">7aytho nasma3 ‘an yokarar</td>
                <td class="arabic">حيث نسمع أن يكرر</td>
            </tr>
            <tr id="table_${tableNumber}_row_64" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Mad7okee 3alal dawam</td>
                <td class="arabic">مدحك علي الدوام</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_17">
            <tr id="table_${tableNumber}_row_65" class="refrain">
                <td class="english">Hail to Mary, Mother of God.</td>
                <td class="enPhonicsSongs">Magdo Mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_66" class="refrain">
                <td class="english">Everywhere you see the sun,</td>
                <td class="enPhonicsSongs">Fel mashareq wal gheroob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_67" class="refrain">
                <td class="english">Glorify her, magnify her.</td>
                <td class="enPhonicsSongs">Karremoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_68" class="refrain">
                <td class="english">Put her always in your heart.</td>
                <td class="enPhonicsSongs">Mallekoha fel qoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function howSweetAreYouOMary(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="How Sweet You Are O Mary">
        <caption id="caption_table_${tableNumber}" class="caption">How Sweet You Are O Mary
        <span class="arabic-caption">ما أحلاكِ يا مريم ما أحلاك</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">How sweet you are O Mary.</td>
                <td class="enPhonicsSongs">Ma7laki ya mariam ma7laki</td>
                <td class="arabic">ما أحلاكِ يا مريم ما أحلاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">You carried the Light in your womb.</td>
                <td class="enPhonicsSongs">7amalti elnoor fi a7shaki</td>
                <td class="arabic">حملتى النور فى أحشاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">He chose your beauty and your splendor.</td>
                <td class="enPhonicsSongs">Ekhtara gamalek wabahaki</td>
                <td class="arabic">اختار جمالِك وبهَاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">You carried the redeemer of the world.</td>
                <td class="enPhonicsSongs">7amalti fadi elbashareya</td>
                <td class="arabic">حملتى فادى البشرية</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">You gave birth to the Creator of the world.</td>
                <td class="enPhonicsSongs">Waladti khalek eldonia</td>
                <td class="arabic">ولدت خالق الدنيا</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">You nursed the Lord of the creation.</td>
                <td class="enPhonicsSongs">Arda3ti rab al bareya</td>
                <td class="arabic">أرضعت ربُ البرية</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">How sweet you are O Mary.</td>
                <td class="enPhonicsSongs">Ma7laki ya mariam ma7laki</td>
                <td class="arabic">ما أحلاكِ يا مريم ما أحلاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">You carried the Light in your womb.</td>
                <td class="enPhonicsSongs">7amalti elnoor fi a7shaki</td>
                <td class="arabic">حملتى النور فى أحشاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">He chose your beauty and your splendor.</td>
                <td class="enPhonicsSongs">Ekhtara gamalek wabahaki</td>
                <td class="arabic">اختار جمالِك وبهَاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">You became the mother of your creator.</td>
                <td class="enPhonicsSongs">Konti oman lefadiki</td>
                <td class="arabic">كنت أماً لفاديكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">How can I describe your meanings?</td>
                <td class="enPhonicsSongs">Ma’darsh awsef ma3aniki</td>
                <td class="arabic">مقدرش أوصف معانيكىِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">He is your Son and your Redeemer.</td>
                <td class="enPhonicsSongs">Da howa ebnek wa baniki</td>
                <td class="arabic">دا هو ابنك وبنيكىِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">How sweet you are O Mary.</td>
                <td class="enPhonicsSongs">Ma7laki ya mariam ma7laki</td>
                <td class="arabic">ما أحلاكِ يا مريم ما أحلاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">You carried the Light in your womb.</td>
                <td class="enPhonicsSongs">7amalti elnoor fi a7shaki</td>
                <td class="arabic">حملتى النور فى أحشاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">He chose your beauty and your splendor.</td>
                <td class="enPhonicsSongs">Ekhtar gamalek wabah’ek</td>
                <td class="arabic">اختار جمالك وبهاءك</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">Ask and intercede for us O Virgin</td>
                <td class="enPhonicsSongs">Otlobi wa eshfa3i fina ya 3adra</td>
                <td class="arabic">أطلبى واشفعى فينا يا عذراء</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">before your Lord, the Almighty God.</td>
                <td class="enPhonicsSongs">3en elahek rab elqodra</td>
                <td class="arabic">عند إلهك رب القدرة</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">Your intercession will give us victory.</td>
                <td class="enPhonicsSongs">Di shafa3tek tedina elnosra</td>
                <td class="arabic">دى شفاعتك تدينا النصرة</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">How sweet you are O Mary.</td>
                <td class="enPhonicsSongs">Ma7laki ya mariam ma7laki</td>
                <td class="arabic">ما أحلاكِ يا مريم ما أحلاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">You carried the Light in your womb.</td>
                <td class="enPhonicsSongs">7amalti elnoor fi a7shaki</td>
                <td class="arabic">حملتى النور فى أحشاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">He chose your beauty and your splendor.</td>
                <td class="enPhonicsSongs">Ekhtara gamalek wabahaki</td>
                <td class="arabic">اختار جمالِك وبهَاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">You are a treasure of grace, O my mother the Virgin.</td>
                <td class="enPhonicsSongs">Kanz el ne3ma ‘omy ya 3adra</td>
                <td class="arabic">كنز النعمة أمي يا عدرا</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">I praise you, O my pure lady.</td>
                <td class="enPhonicsSongs">Amda7 feekee settee ya tahera</td>
                <td class="arabic">أمدح فيكِ ستي ياطاهرة</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">Your praises and comfort and triumph.</td>
                <td class="enPhonicsSongs">Dee maday7ek ta3zeya we nosra</td>
                <td class="arabic">دي مدايحك تعزية و نصرة</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki (2)</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">How sweet you are O Mary.</td>
                <td class="enPhonicsSongs">Ma7laki ya mariam ma7laki</td>
                <td class="arabic">ما أحلاكِ يا مريم ما أحلاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">You carried the Light in your womb.</td>
                <td class="enPhonicsSongs">7amalti elnoor fi a7shaki</td>
                <td class="arabic">حملتى النور فى أحشاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">He chose your beauty and your splendor.</td>
                <td class="enPhonicsSongs">Ekhtara gamalek wabahaki</td>
                <td class="arabic">اختار جمالِك وبهَاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">(Blessed are you O Mary, blessed are you.) x2</td>
                <td class="enPhonicsSongs">Tobaki ya mariam tobaki</td>
                <td class="arabic">طوباكِ يا مريم طوباكِ (2)</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }

function iCanHearMySaviorCalling(tableNumber) {

    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
        <table id="table_${tableNumber}" title="I Can Hear My Savior Calling">
            <caption class="caption" id="caption_table_${tableNumber}">I Can Hear My Savior Calling
            <span class="arabic-caption">حيث قادنى اسير</span></caption>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">I can hear my Savior calling</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Take the cross and follow, follow me.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
                <tr id="table_${tableNumber}_row_2" class="south">
                    <td class="english">Where He leads me I will follow</td>
                    <td class="arabic">حيث قادنى اسير</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="south">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
                <tr id="table_${tableNumber}_row_4" class="north">
                    <td class="english">If He leads me to crucifixion</td>
                    <td class="arabic">ولو قادنى للصلب</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="north">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">If He leads me to the judgment</td>
                    <td class="arabic">ولو إلى جثمانى</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">If in war or in peace</td>
                    <td class="arabic"> أن فى حرب أم سلام</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
                <tr id="table_${tableNumber}_row_10" class="south">
                    <td class="english">If in health or in sickness</td>
                    <td class="arabic">فى صحه ام سقام</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="south">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
                <tr id="table_${tableNumber}_row_12" class="north">
                    <td class="english">If I am beaten or afflicted</td>
                    <td class="arabic">لو ضربت او اوهنت</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="north">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">If in jail or in chains</td>
                    <td class="arabic">لو سجنت او رجمت</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">He will lead me to grace and glory</td>
                    <td class="arabic">سيقودنى للظفر</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">I will go, with Him all the way</td>
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
                <tr id="table_${tableNumber}_row_18" class="south">
                    <td class="arabic">ويأخذنى للمجد</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="south">
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
                <tr id="table_${tableNumber}_row_20" class="refrain">
                    <td class="arabic">ربى اجذبنى ورائك</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="refrain">
                    <td class="arabic">أمشى معك دوماً كل حين.</td>
                </tr>
            </tbody>
        </table>
\n`;
return html;
}

function inTheShadeOfYourProtection(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="In the Shade of Your Protection">
        <caption id="caption_table_${tableNumber}" class="caption">In the Shade of Your Protection
        <span class="arabic-caption">في ظل حمايتك</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">In the shade of your protection</td>
                <td class="enPhonicsSongs">Fee zel 7emayateki</td>
                <td class="arabic">فى ظل حمايتك</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">we take refuge, O Mary.</td>
                <td class="enPhonicsSongs">naltage’o ya mariam</td>
                <td class="arabic">نلتجئ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">Don’t turn our prayer away,</td>
                <td class="enPhonicsSongs">La tarodi telbatona</td>
                <td class="arabic">لا تردى طلبتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">whenever we call you.</td>
                <td class="enPhonicsSongs">3endama nad3oki</td>
                <td class="arabic">عندما ندعوك</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">O the pride of the human race,</td>
                <td class="enPhonicsSongs">Ya fakhr albaraya</td>
                <td class="arabic">يا فخر البرايا</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">the best of people are you.</td>
                <td class="enPhonicsSongs">Ya khayr al wara</td>
                <td class="arabic">يا خيرَ الورَى</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">O you river of gifts</td>
                <td class="enPhonicsSongs">Ya ba7r al 3ataya</td>
                <td class="arabic">يا بحرَ العطايا</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">that flows into the world.</td>
                <td class="enPhonicsSongs">Feldonya gara</td>
                <td class="arabic">فى الدنيا جَرَى</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">In the shade of your protection</td>
                <td class="enPhonicsSongs">Fee zel 7emayateki</td>
                <td class="arabic">فى ظل حمايتك</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">we take refuge, O Mary.</td>
                <td class="enPhonicsSongs">naltage’o ya mariam</td>
                <td class="arabic">نلتجئ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">Don’t turn our prayer away,</td>
                <td class="enPhonicsSongs">La tarodi telbatona</td>
                <td class="arabic">لا تردى طلبتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">whenever we call you.</td>
                <td class="enPhonicsSongs">3endama nad3oki</td>
                <td class="arabic">عندما ندعوك</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">O you gate of heaven,</td>
                <td class="enPhonicsSongs">Ya bab alsama</td>
                <td class="arabic">يا بابَ السماءِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">Mother of our Redeemer,</td>
                <td class="enPhonicsSongs">Ya om al feda</td>
                <td class="arabic">يا أُمَ الفِداء</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">O you are our hope,</td>
                <td class="enPhonicsSongs">Ya 3ayn al raga’</td>
                <td class="arabic">يا عَيْنَ الرجاءِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">and the sweetest name we call.</td>
                <td class="enPhonicsSongs">Ya a7la neda</td>
                <td class="arabic">يا أحلى نِداء</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">In the shade of your protection</td>
                <td class="enPhonicsSongs">Fee zel 7emayateki</td>
                <td class="arabic">فى ظل حمايتك</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">we take refuge, O Mary.</td>
                <td class="enPhonicsSongs">naltage’o ya mariam</td>
                <td class="arabic">نلتجئ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">Don’t turn our prayer away,</td>
                <td class="enPhonicsSongs">La tarodi telbatona</td>
                <td class="arabic">لا تردى طلبتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">whenever we call you.</td>
                <td class="enPhonicsSongs">3endama nad3oki</td>
                <td class="arabic">عندما ندعوك</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">Intercede for your people.</td>
                <td class="enPhonicsSongs">Eshfa3i fi sha3bek</td>
                <td class="arabic">اشفعى فى شَعْبِكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">Pray at all times.</td>
                <td class="enPhonicsSongs">Salli kola 7in</td>
                <td class="arabic">صلى كُلَ حين</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">We are asking your Son,</td>
                <td class="enPhonicsSongs">Yatlobona ebnek</td>
                <td class="arabic">يطلبون ابنِك</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">with the spirit of children.</td>
                <td class="enPhonicsSongs">Bero7 el banin</td>
                <td class="arabic">بروحِ البنينَ</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">In the shade of your protection</td>
                <td class="enPhonicsSongs">Fee zel 7emayateki</td>
                <td class="arabic">فى ظل حمايتك</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">we take refuge, O Mary.</td>
                <td class="enPhonicsSongs">naltage’o ya mariam</td>
                <td class="arabic">نلتجئ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">Don’t turn our prayer away,</td>
                <td class="enPhonicsSongs">La tarodi telbatona</td>
                <td class="arabic">لا تردى طلبتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">whenever we call you.</td>
                <td class="enPhonicsSongs">3endama nad3oki</td>
                <td class="arabic">عندما ندعوك</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">Have mercy on your servants</td>
                <td class="enPhonicsSongs">Er7ami 3abidan</td>
                <td class="arabic">إرحمي عبيداً</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">They remain faithful</td>
                <td class="enPhonicsSongs">Bato mokhlesin</td>
                <td class="arabic">باتوا مُخْلِصِينَ</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">They seek evermore</td>
                <td class="enPhonicsSongs">Yabghon almazid</td>
                <td class="arabic">يَبْغُونَ المزيدَ</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">From you at all times</td>
                <td class="enPhonicsSongs">Menki kol 7een</td>
                <td class="arabic">منكِ كُلَ حيِنٍ</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">In the shade of your protection</td>
                <td class="enPhonicsSongs">Fee zel 7emayateki</td>
                <td class="arabic">فى ظل حمايتك</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">we take refuge, O Mary.</td>
                <td class="enPhonicsSongs">naltage’o ya mariam</td>
                <td class="arabic">نلتجئ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">Don’t turn our prayer away,</td>
                <td class="enPhonicsSongs">La tarodi telbatona</td>
                <td class="arabic">لا تردى طلبتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">whenever we call you.</td>
                <td class="enPhonicsSongs">3endama nad3oki</td>
                <td class="arabic">عندما ندعوك</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function myCopticChurch(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="My Coptic Church">
        <caption id="caption_table_${tableNumber}" class="caption">My Coptic Church
        <span class="arabic-caption">كنيستي القبطية</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">My Coptic Church. The church of the Lord</td>
                <td class="enPhonicsSongs">Kaneesati el qebteya, kaneesatol elah</td>
                <td class="arabic">كنيستي القبطية كنيسة الإله</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">Ancient and Strong, I wish her long life</td>
                <td class="enPhonicsSongs">Qadeematon qaweya, argo laha al7aya</td>
                <td class="arabic">قديمة قوية أرجو لها الحياة</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">In the early years, After the birth of Christ</td>
                <td class="enPhonicsSongs">Fi ‘awal el 3esoor, lemawled el masee7</td>
                <td class="arabic">في أول العصور لمولد المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">St. Mark came bearing, The light of the true faith</td>
                <td class="enPhonicsSongs">Morqos ‘ata benoor, ‘eemanahol sa7ee7</td>
                <td class="arabic">مر قس أتى بنور إيمانه الصحيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="North">
                <td class="english">He dwelt in the land, proclaiming salvation</td>
                <td class="enPhonicsSongs">Wa 7alla fel belade, yonadee bel khalas</td>
                <td class="arabic">و جال في البلاد ينادى بالخلاص</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="North">
                <td class="english">In the name of our Redeemer, Christ who removed our sins</td>
                <td class="enPhonicsSongs">Besmel masee7 el fadi, man yarfa3ol qasas</td>
                <td class="arabic">بإسم المسيح الفادى من يرفع القصاص</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english">The Copts then believed, in the Lord Jesus</td>
                <td class="enPhonicsSongs">Fa’aman al aqbato berabena yasoo3</td>
                <td class="arabic">فآمن الأقباط بربنا يسوع</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">And Joy filled all the cities of Egypt</td>
                <td class="enPhonicsSongs">Wa 7al aleghtebato, fi kafat elreboo3</td>
                <td class="arabic">و حل الاغتباط في كافة الربوع</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">In a very very short time, He abolished all idols</td>
                <td class="enPhonicsSongs">Fi ‘amaden qareeb, qad 7attamol awthan</td>
                <td class="arabic">في أمد قريب قد حطموا الأوثان</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">The cross was exalted, the sign of the faith</td>
                <td class="enPhonicsSongs">Wartafa3al saleeb, warayat al’eeman</td>
                <td class="arabic">و ارتفع الصليب و راية الإيمان</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english">Satan quickly rose, to war the Son of God</td>
                <td class="enPhonicsSongs">Ebleeso 7alan qama, yo7areb ebn allah</td>
                <td class="arabic">إبليس حالا قام يحارب ابن الله</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english">He stirred the rulers, emperors and armies</td>
                <td class="enPhonicsSongs">Fahayagal 7okkama, walgonda wal wolah</td>
                <td class="arabic">فهيج الحكام و الجند و الولاة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english">He then declared war, on the sons of the faith</td>
                <td class="enPhonicsSongs">Fa ‘ash harol sela7a, 3ala bani eleeman</td>
                <td class="arabic">فأشهروا السلاح على بنى الإيمان</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english">Deny your Christ, or be thrown in the fire</td>
                <td class="enPhonicsSongs">Hayya enkerol masee7a, aw tolqo fel neeran</td>
                <td class="arabic">هيا انكروا المسيح أو تلقوا في النيران</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">Our honored fathers, elders and youngsters</td>
                <td class="enPhonicsSongs">‘aba’onal keram, kebaron ma3 seghar</td>
                <td class="arabic">آباؤنا الكرام كبار مع صغار</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">Were not moved by pain, distress nor dishonor</td>
                <td class="enPhonicsSongs">Lam yothnehem ‘alam, wa shedaten wa 3ar</td>
                <td class="arabic">لم يثنهم آلام و شدة و عار</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english">But said courageously, forward no turning back</td>
                <td class="enPhonicsSongs">Balqalo bentesaren, lelkhalfe la regoo3</td>
                <td class="arabic">بل قالوا بانتصار للخلف لا رجوع</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="english">We don't fear fire, Our Lord is Jesus Christ</td>
                <td class="enPhonicsSongs">La nagza3o men naren, elahona yasoo3</td>
                <td class="arabic">لا نجزع من نار إلهنا يسوع</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_19" class="south">
                <td class="english">They were beaten and imprisoned, they lived in oppression</td>
                <td class="enPhonicsSongs">Kam dorebo kam sogeno, kam 3asho fekte’ab</td>
                <td class="arabic">كم ضربوا كم سجنوا كم عاشوا في اكتئاب</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="south">
                <td class="english">They were burned and killed, and tasted every pain</td>
                <td class="enPhonicsSongs">Kam qotelo kam 7oreqo, kam zaqo men 3azab</td>
                <td class="arabic">كم قتلوا كم حرقوا كم ذاقوا من عذاب</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">By the power of their faith, they overcame their pains</td>
                <td class="enPhonicsSongs">Beqowatel yaqeen, qad ghalabol ‘alam</td>
                <td class="arabic">بقوة اليقين قد غلبوا الآلام</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">And remained believing in, the King of Peace</td>
                <td class="enPhonicsSongs">Wa damo thabeteen, fee malekel salam</td>
                <td class="arabic">و داموا ثابتين في ملك السلام</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english">With blood and suffering, they bought the faith</td>
                <td class="enPhonicsSongs">Beldamme wal3ana’, qad eshtarol eeman</td>
                <td class="arabic">بالدم و العناء قد اشتروا الإيمان</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english">And preserved it for us, in the name of Our Savior</td>
                <td class="enPhonicsSongs">Wa ’e7tafazo lana, be’smel fadeel ra7man</td>
                <td class="arabic">و احتفظوا لنا بإسم الفادي الرحمن</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english">Let us all rise, from our laziness</td>
                <td class="enPhonicsSongs">Haya bena naqoom, men shedatel kasal</td>
                <td class="arabic">هيا بنا نقوم من شدة الكسل</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english">With diligence seeking, the heavenly rewards</td>
                <td class="enPhonicsSongs">Wa lel3ola naroom, wa nas3a bel3agal</td>
                <td class="arabic">و للعلى نروم و نسعى بالعجل</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="north">
                <td class="english">The Church of the Fathers, you are our pride</td>
                <td class="enPhonicsSongs">Kaneesatel ‘aba’e, ‘anti eftekharona</td>
                <td class="arabic">كنيسة الأباء أنت افتخارنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english">To her success, let us all join together</td>
                <td class="enPhonicsSongs">‘eela naga7oha, hayya hayya bena</td>
                <td class="arabic">إلى نجاحها هيا هيا بنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="north">
                <td class="english">My Coptic Church, her faith is orthodox</td>
                <td class="enPhonicsSongs">Kaneesatel qebteya, ‘eemanoha sa7ee7</td>
                <td class="arabic">كنيستي القبطية إيمانها صحيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english">Forever strong, Egypt is Christ's</td>
                <td class="enPhonicsSongs">‘eelal ‘abad qaweya, ya masr lel masee7</td>
                <td class="arabic">إلى الأبد قوية يا مصر للمسيح</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }

function myCopticChurchSoGreat(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    <table id="table_${tableNumber}" title="My Coptic Church So Great">
  <caption id="caption_table_${tableNumber}" class="caption">
    My Coptic Church So Great
    <span class="arabic-caption">كنيستي القبطية نشرت المسيحية</span>
  </caption>

  <!-- Verse 1 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
    <tr id="table_${tableNumber}_row_1" class="North">
      <td class="english">My Coptic Church so great</td>
      <td class="enPhonicsSongs">Kenisty el-qibtiya</td>
      <td class="arabic">كنيستي القبطية</td>
    </tr>
    <tr id="table_${tableNumber}_row_2" class="North">
      <td class="english">You spread the Christian faith</td>
      <td class="enPhonicsSongs">Nasharat el-messihiya</td>
      <td class="arabic">نشرت المسيحية</td>
    </tr>
    <tr id="table_${tableNumber}_row_3" class="North">
      <td class="english">In the Ethiopian country</td>
      <td class="enPhonicsSongs">Fi belad el-ethiobiya</td>
      <td class="arabic">في بلاد الأثيوبية</td>
    </tr>
    <tr id="table_${tableNumber}_row_4" class="North">
      <td class="english">In Nubia and Sudan</td>
      <td class="enPhonicsSongs">Wa el-nuba wa el-sudan</td>
      <td class="arabic">والنوبة والسودان</td>
    </tr>
    <tr id="table_${tableNumber}_row_5" class="North">
      <td class="english">In the Western nations</td>
      <td class="enPhonicsSongs">Fi el-modon el-gharbeya</td>
      <td class="arabic">في المدن الغربية</td>
    </tr>
    <tr id="table_${tableNumber}_row_6" class="North">
      <td class="english">In the African continent</td>
      <td class="enPhonicsSongs">Wa el-qara el-afriqiya</td>
      <td class="arabic">والقارة الإفريقية</td>
    </tr>
    <tr id="table_${tableNumber}_row_7" class="North">
      <td class="english">And in European cities</td>
      <td class="enPhonicsSongs">Wa fi el-mudon el-eurobiya</td>
      <td class="arabic">و في المدن الأوربية</td>
    </tr>
    <tr id="table_${tableNumber}_row_8" class="North">
      <td class="english">You witnessed for the faith</td>
      <td class="enPhonicsSongs">Shahidti lil-iman</td>
      <td class="arabic">شهدت للإيمان</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_refrain_1">
    <tr id="table_${tableNumber}_row_9" class="refrain">
      <td class="english">O Coptic Church of God</td>
      <td class="enPhonicsSongs">Ya kenisa ya qaweya ya madinat el-salat</td>
      <td class="arabic">يا كنيسة يا قوية يا مدينة الصلاة</td>
    </tr>
    <tr id="table_${tableNumber}_row_10" class="refrain">
      <td class="english">Persecuted but survived</td>
      <td class="enPhonicsSongs">Neftideek bil-dimaa, neftideek bil-hayat</td>
      <td class="arabic">( نفتديك بالدماء نفتديك بالحياة )2</td>
    </tr>
  </tbody>

  <!-- Verse 2 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
    <tr id="table_${tableNumber}_row_11" class="South">
      <td class="english">In the council of Nicea</td>
      <td class="enPhonicsSongs">Fi el-majma fi Niqueya</td>
      <td class="arabic">في المجمع في نيقية</td>
    </tr>
    <tr id="table_${tableNumber}_row_12" class="South">
      <td class="english">Heresies, you stood against</td>
      <td class="enPhonicsSongs">Wa qafatay ya qibtiya</td>
      <td class="arabic">وقفت يا قبطية</td>
    </tr>
    <tr id="table_${tableNumber}_row_13" class="South">
      <td class="english">Your deacon Athanasius</td>
      <td class="enPhonicsSongs">Shammasak Athanasius</td>
      <td class="arabic">شماسك اثناسيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_14" class="South">
      <td class="english">He is the hero of faith</td>
      <td class="enPhonicsSongs">Da batal el-iman</td>
      <td class="arabic">ده بطل الإيمان</td>
    </tr>
    <tr id="table_${tableNumber}_row_15" class="South">
      <td class="english">St. Clement and St. Oregon</td>
      <td class="enPhonicsSongs">Klimendos wa Didimos</td>
      <td class="arabic">كليمنضس وديديموس</td>
    </tr>
    <tr id="table_${tableNumber}_row_16" class="South">
      <td class="english">St. Cyril and St. Dioscorus</td>
      <td class="enPhonicsSongs">Kyrillos wa Discorous</td>
      <td class="arabic">كيرلس ديسقورس</td>
    </tr>
    <tr id="table_${tableNumber}_row_17" class="South">
      <td class="english">St.Paul and St. Anthony</td>
      <td class="enPhonicsSongs">Wa Bola wa Antonios</td>
      <td class="arabic">و بولا و انطونيوس</td>
    </tr>
    <tr id="table_${tableNumber}_row_18" class="South">
      <td class="english">Your men that were so brave</td>
      <td class="enPhonicsSongs">Rijalek al-shojaan</td>
      <td class="arabic">رجالك الشجعان</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_refrain_2">
    <tr id="table_${tableNumber}_row_19" class="refrain">
      <td class="english">O Coptic Church of God</td>
      <td class="enPhonicsSongs">Ya kenisa ya qaweya ya madinat el-salat</td>
      <td class="arabic">يا كنيسة يا قوية يا مدينة الصلاة</td>
    </tr>
    <tr id="table_${tableNumber}_row_20" class="refrain">
      <td class="english">Persecuted but survived</td>
      <td class="enPhonicsSongs">Neftideek bil-dimaa, neftideek bil-hayat</td>
      <td class="arabic">( نفتديك بالدماء نفتديك بالحياة )2</td>
    </tr>
  </tbody>

  <!-- Verse 3 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
    <tr id="table_${tableNumber}_row_21" class="North">
      <td class="english">A church and a monastery</td>
      <td class="enPhonicsSongs">Kenisa wa dayr wa mazbah wa heber</td>
      <td class="arabic">كنيسة و دير و مذبح و حبر</td>
    </tr>
    <tr id="table_${tableNumber}_row_22" class="North">
      <td class="english">An altar and a sanctuary</td>
      <td class="enPhonicsSongs">Be-qowwa ilahiya wa salah rohaniya</td>
      <td class="arabic">بقوة إلهية و صلاة روحانية</td>
    </tr>
    <tr id="table_${tableNumber}_row_23" class="North">
      <td class="english">Your sacraments are seven</td>
      <td class="enPhonicsSongs">Qorban wa sir, wasaeit el-khalas</td>
      <td class="arabic">قربانة و سر وسائط الخلاص</td>
    </tr>
    <tr id="table_${tableNumber}_row_24" class="North">
      <td class="english">They lead us up to heaven</td>
      <td class="enPhonicsSongs">Qad dushanat al-barriya</td>
      <td class="arabic">قد دشنت البرية</td>
    </tr>
    <tr id="table_${tableNumber}_row_25" class="North">
      <td class="english">By powers so divine</td>
      <td class="enPhonicsSongs">Be-qowwat el-alamia</td>
      <td class="arabic">بقوة عالمية</td>
    </tr>
    <tr id="table_${tableNumber}_row_26" class="North">
      <td class="english">By prayers and by strife</td>
      <td class="enPhonicsSongs">Bi-salat wa strife</td>
      <td class="arabic">بالصلاة و الصراع</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_refrain_3">
    <tr id="table_${tableNumber}_row_27" class="refrain">
      <td class="english">O Coptic Church of God</td>
      <td class="enPhonicsSongs">Ya kenisa ya qaweya ya madinat el-salat</td>
      <td class="arabic">يا كنيسة يا قوية يا مدينة الصلاة</td>
    </tr>
    <tr id="table_${tableNumber}_row_28" class="refrain">
      <td class="english">Persecuted but survived</td>
      <td class="enPhonicsSongs">Neftideek bil-dimaa, neftideek bil-hayat</td>
      <td class="arabic">( نفتديك بالدماء نفتديك بالحياة )2</td>
    </tr>
  </tbody>

  <!-- Verse 4 -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
    <tr id="table_${tableNumber}_row_29" class="South">
      <td class="english">Jesus Christ visited you</td>
      <td class="enPhonicsSongs">Yesoua qad atak</td>
      <td class="arabic">يسوع قد أتاك</td>
    </tr>
    <tr id="table_${tableNumber}_row_30" class="South">
      <td class="english">With His mother St. Mary</td>
      <td class="enPhonicsSongs">Ma ommoh hayak</td>
      <td class="arabic">مع أمه حياك</td>
    </tr>
    <tr id="table_${tableNumber}_row_31" class="South">
      <td class="english">St. Mark’s blood so pure</td>
      <td class="enPhonicsSongs">Wa dam Mar Morqos</td>
      <td class="arabic">و دم مارمرقس</td>
    </tr>
    <tr id="table_${tableNumber}_row_32" class="South">
      <td class="english">Watered you with the faith</td>
      <td class="enPhonicsSongs">Rawak bil-iman</td>
      <td class="arabic">رواك بالإيمان</td>
    </tr>
    <tr id="table_${tableNumber}_row_33" class="South">
      <td class="english">O Mother of the Martyrs</td>
      <td class="enPhonicsSongs">Omm el-shuhada</td>
      <td class="arabic">أم الشهداء</td>
    </tr>
    <tr id="table_${tableNumber}_row_34" class="South">
      <td class="english">St. George and St. Demiana</td>
      <td class="enPhonicsSongs">Mar Gerges wa Damiana</td>
      <td class="arabic">مارجرجس و دميانة</td>
    </tr>
    <tr id="table_${tableNumber}_row_35" class="South">
      <td class="english">And the blessed St. Peter</td>
      <td class="enPhonicsSongs">Wa dam al-anba Boutros</td>
      <td class="arabic">و دم الأنبا بطرس</td>
    </tr>
    <tr id="table_${tableNumber}_row_36" class="South">
      <td class="english">The seal of the martyrs</td>
      <td class="enPhonicsSongs">Inha aasr el-awthan</td>
      <td class="arabic">أنهى عصر الأوثان</td>
    </tr>
  </tbody>

  <!-- Refrain -->
  <tbody ${tbodyClass} id="table_${tableNumber}_tbody_refrain_4">
    <tr id="table_${tableNumber}_row_37" class="refrain">
      <td class="english">O Coptic Church of God</td>
      <td class="enPhonicsSongs">Ya kenisa ya qaweya ya madinat el-salat</td>
      <td class="arabic">يا كنيسة يا قوية يا مدينة الصلاة</td>
    </tr>
    <tr id="table_${tableNumber}_row_38" class="refrain">
      <td class="english">Persecuted but survived</td>
      <td class="enPhonicsSongs">Neftideek bil-dimaa, neftideek bil-hayat</td>
      <td class="arabic">( نفتديك بالدماء نفتديك بالحياة )2</td>
    </tr>
  </tbody>
</table>

    `;return html;
}


function oBeloved(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    <table id="table_${tableNumber}" title="O Beloved">
    <caption class="caption" id="caption_table_${tableNumber}">O Beloved
    <span class="arabic-caption">و حبيبي</span></caption>
    <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
        <tr id="table_${tableNumber}_row_1" class="north">
            <td class="english">O Beloved, O Beloved, nailed unto the cross for me</td>
            <td class="arabic">وا حبيبي وآ حبيبي، أي حال أنت فيه</td>
        </tr>
        <tr id="table_${tableNumber}_row_1.5" class="north">
            <td class="english">O what sin hast Thou committed, Thou who callest all to be.</td>
            <td class="arabic">من شجاك من سقاك، كأس خل ترتضيه</td>
        </tr>
        <tr id="table_${tableNumber}_row_2" class="north">
            <td class="english">O Beloved, wish that I could spend the rest of life with Thee</td>
            <td class="arabic">يا حبيبي أي ذنب، قد صنعت أو كريه</td>
        </tr>
        <tr id="table_${tableNumber}_row_3" class="north">
            <td class="english">Worshipping Thine Holy Passion, crucifying the flesh for Thee.</td>
            <td class="arabic">أنت مجهود جريح، ليس فيك من شفاء</td>
        </tr>
    </tbody>
    <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
        <tr id="table_${tableNumber}_row_4" class="south">
            <td class="english">Daughter of Zion behold Me, stricken and smitten for Thee</td>
            <td class="arabic">بنت صهيون انظريني، غارقا في ذي اللجج</td>
        </tr>
        <tr id="table_${tableNumber}_row_5" class="south">
            <td class="english">Friend and kin, me have forsaken, there is none to comfort Me.</td>
            <td class="arabic">قد تركت و خذلت، و البلا كبدي ولج</td>
        </tr>
        <tr id="table_${tableNumber}_row_6" class="south">
            <td class="english">All alone I’ll tread the winepress, all alone I’ll drink the cup</td>
            <td class="arabic">لا صديق لا و لا مِن، انسبائي مَن خرج</td>
        </tr>
        <tr id="table_${tableNumber}_row_7" class="south">
            <td class="english">Shedding My blood for thee to ransom, and My flesh for thee to sup.</td>
            <td class="arabic">كي يذود العار عنى، ويُسَلي المُبتلى</td>
        </tr>
    </tbody>
    <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
        <tr id="table_${tableNumber}_row_8" class="north">
            <td class="english">I was bound and I was smitten, and they did spit in my face</td>
            <td class="arabic">قد ربطت و ضربت، مثل أدنى المرذولين</td>
        </tr>
        <tr id="table_${tableNumber}_row_9" class="north">
            <td class="english">I was stripped and I was scourged, I was condemned in your place.</td>
            <td class="arabic">بسياط قد جلدت، مثل شر المجرمين</td>
        </tr>
        <tr id="table_${tableNumber}_row_10" class="north">
            <td class="english">Your sins became My crown of thorns, O that you would understand</td>
            <td class="arabic">كل هذا من جراكم، كي تكونوا فرحين</td>
        </tr>
        <tr id="table_${tableNumber}_row_11" class="north">
            <td class="english">Every time you sin anew, it’s one more nail in My hand.</td>
            <td class="arabic">فانظروني هل رأيتم، مثل سقمي في الورى</td>
        </tr>
    </tbody>
    <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
        <tr id="table_${tableNumber}_row_12" class="south">
            <td class="english">Like a lamb brought to the slaughter, like a dumb sheep to be sheered</td>
            <td class="arabic">رحت في البستان ليلا، والحشى مني أضطرب</td>  
        </tr>
        <tr id="table_${tableNumber}_row_13" class="south">
            <td class="english">King, Creator, Lord, and Master, by His creatures mocked and jeered.</td>
            <td class="arabic">خفت صليت ضجرت، و الطلا منى انسكب</td>
        </tr>
        <tr id="table_${tableNumber}_row_14" class="south">
            <td class="english">Despised, rejected with grief acquainted, and of men was not esteemed</td>
            <td class="arabic">قلت ربى إن رأيت، فادفعن عنى العطب</td>
        </tr>
        <tr id="table_${tableNumber}_row_15" class="south">
            <td class="english">Bruised and wounded, sore afflicted, yet with His stripes we were healed.</td>
            <td class="arabic">حزن نفسي لا يماثل، بغريق في الطمى</td>
        </tr>
    </tbody>
    <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
        <tr id="table_${tableNumber}_row_16" class="north">
            <td class="english">Lord, create in us a fountain that with tears will ever flow</td>
            <td class="arabic">مددوني كخروف، سمروني في الصليب</td>
        </tr>
        <tr id="table_${tableNumber}_row_17" class="north">
            <td class="english">And a heart contrite and broken, and a Spirit within renew.</td>
            <td class="arabic">كل عوني فر عنى، مثل إنسان غريب</td>
        </tr>
        <tr id="table_${tableNumber}_row_18" class="north">
            <td class="english">O that we could shed the tears over Thy feet pierced and bruised</td>
            <td class="arabic">فناديت و طلبت، مبدع الكون الرقيب</td>
        </tr>
        <tr id="table_${tableNumber}_row_19" class="north">
            <td class="english">O that we always remember, for our sins Thou were abused.</td>
            <td class="arabic">أعقب الظلم إنخذالى، و اضطراب و بكاء</td>
        </tr>
    </tbody>
    <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
        <tr id="table_${tableNumber}_row_20" class="south">
            <td class="arabic">يا يسوع اجر فينا، سيل دمع منهمر</td>
        </tr>
        <tr id="table_${tableNumber}_row_21" class="south">
            <td class="arabic">يلتظ القلب بنار، حزن قلب منكسر</td>
        </tr>
        <tr id="table_${tableNumber}_row_22" class="south">
            <td class="arabic">لخطايا جرحتك، بعقوق مستمر</td>
        </tr>
        <tr id="table_${tableNumber}_row_23" class="south">
            <td class="arabic">ليتنا طول الليالي، ندما نهمى الدماء</td>
        </tr>
    </tbody>

</table>
\n`;
    return html;
}

function oMaryOurMotherTheBelovedOfUsAll(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="O Mary our Mother, the Beloved of Us All">
        <caption id="caption_table_${tableNumber}" class="caption">O Mary our Mother, the Beloved of Us All
        <span class="arabic-caption">العدرا أمنا حبيبتنا كلنا</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">O Mary our mother,</td>
                <td class="enPhonicsSongs">El3adra ‘omena</td>
                <td class="arabic">العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">the beloved of us all. (x2)</td>
                <td class="enPhonicsSongs">7abeebetna kollena</td>
                <td class="arabic">حبيبتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">O tender Virgin,</td>
                <td class="enPhonicsSongs">El3adra el7anoona</td>
                <td class="arabic">العدرا  الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">full of help for those who call.</td>
                <td class="enPhonicsSongs">Kollaha Ma3oona</td>
                <td class="arabic">كلها معونة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">You’re a symbol of purity</td>
                <td class="enPhonicsSongs">Anti methal leltahara</td>
                <td class="arabic">أنتِ مثال للطهارة</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">a guiding light of virginity. (x2)</td>
                <td class="enPhonicsSongs">Anti manara lel3azara</td>
                <td class="arabic">أنت  منارة للعذارى</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">You’re the merciful mother,</td>
                <td class="enPhonicsSongs">Anti al’om alra7eem</td>
                <td class="arabic">أنتِ الأم الرحيم</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">(O Servant of the great Lord) x2</td>
                <td class="enPhonicsSongs">Ya ‘amat alrab el3azeem</td>
                <td class="arabic">يا أَمَة  الرب العظيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">O Mary our mother,</td>
                <td class="enPhonicsSongs">El3adra ‘omena</td>
                <td class="arabic">العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">the beloved of us all. (x2)</td>
                <td class="enPhonicsSongs">7abeebetna kollena</td>
                <td class="arabic">حبيبتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">O tender Virgin,</td>
                <td class="enPhonicsSongs">El3adra el7anoona</td>
                <td class="arabic">العدرا  الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">full of help for those who call.</td>
                <td class="enPhonicsSongs">Kollaha Ma3oona</td>
                <td class="arabic">كلها معونة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">You bore the beloved son</td>
                <td class="enPhonicsSongs">7amaltee alebn el7abeeb</td>
                <td class="arabic">حملت الابن الحبيب</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">who saved us on the cross. (x2)</td>
                <td class="enPhonicsSongs">Ellee fadana 3ala elsaleeb</td>
                <td class="arabic">اللي  فدانا على الصليب</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">Intercede on our behalf,</td>
                <td class="enPhonicsSongs">Eshfa3ee feena 3and yasoo3</td>
                <td class="arabic">اشفعي فينا عند يسوع</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">(that He may forgive us our sins.) x2</td>
                <td class="enPhonicsSongs">Neegee we neskob loh eldemoo3</td>
                <td class="arabic">نيجي ونسكب  له الدموع</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">O Mary our mother,</td>
                <td class="enPhonicsSongs">El3adra ‘omena</td>
                <td class="arabic">العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">the beloved of us all. (x2)</td>
                <td class="enPhonicsSongs">7abeebetna kollena</td>
                <td class="arabic">حبيبتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">O tender Virgin,</td>
                <td class="enPhonicsSongs">El3adra el7anoona</td>
                <td class="arabic">العدرا  الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">full of help for those who call.</td>
                <td class="enPhonicsSongs">Kollaha Ma3oona</td>
                <td class="arabic">كلها معونة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">We see our mother the Virgin,</td>
                <td class="enPhonicsSongs">Neshoof el3adra ‘omena</td>
                <td class="arabic">نشوف العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">the queen, the beloved of us all.) x2</td>
                <td class="enPhonicsSongs">Maleketna 7abeebet qelobna</td>
                <td class="arabic">ملكتنا حبيبة قلبنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">Intercede on our behalf.</td>
                <td class="enPhonicsSongs">Tesallee dayman 3anna</td>
                <td class="arabic">تصلي  دايما  عننا</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">(Lift our prayers to the Lord.) x2</td>
                <td class="enPhonicsSongs">Terfa3 salatna lerabena</td>
                <td class="arabic">ترفع صلاتنا لربنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">O Mary our mother,</td>
                <td class="enPhonicsSongs">El3adra ‘omena</td>
                <td class="arabic">العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">the beloved of us all. (x2)</td>
                <td class="enPhonicsSongs">7abeebetna kollena</td>
                <td class="arabic">حبيبتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">O tender Virgin,</td>
                <td class="enPhonicsSongs">El3adra el7anoona</td>
                <td class="arabic">العدرا  الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">full of help for those who call.</td>
                <td class="enPhonicsSongs">Kollaha Ma3oona</td>
                <td class="arabic">كلها معونة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">You performed miracles,</td>
                <td class="enPhonicsSongs">3amalti almo3gezat</td>
                <td class="arabic">عملتِ  المعجزات</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">gave us comfort in distress. (x2)</td>
                <td class="enPhonicsSongs">3azeteena feldeeqat</td>
                <td class="arabic">عزيتينا  في الضيقات</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">You brought joy to the broken hearts,</td>
                <td class="enPhonicsSongs">Wefara7tee almonkasereen</td>
                <td class="arabic">وفرحت المنكسرين</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">(and healed those who suffered.) x2</td>
                <td class="enPhonicsSongs">Weshafetee almo3azabeen</td>
                <td class="arabic">وشفيت  المعذبين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">O Mary our mother,</td>
                <td class="enPhonicsSongs">El3adra ‘omena</td>
                <td class="arabic">العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">the beloved of us all. (x2)</td>
                <td class="enPhonicsSongs">7abeebetna kollena</td>
                <td class="arabic">حبيبتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">O tender Virgin,</td>
                <td class="enPhonicsSongs">El3adra el7anoona</td>
                <td class="arabic">العدرا  الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">full of help for those who call.</td>
                <td class="enPhonicsSongs">Kollaha Ma3oona</td>
                <td class="arabic">كلها معونة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="north">
                <td class="english">You’re my shelter and support;</td>
                <td class="enPhonicsSongs">Antee malazee wa 3awnee</td>
                <td class="arabic">أنتِ ملاذي وعوني</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english">you enlighten all my thoughts. (x2)</td>
                <td class="enPhonicsSongs">Antee koor lefekree</td>
                <td class="arabic">أنتِ نورٌ لفكري</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="north">
                <td class="english">Steer our hearts on the right path.</td>
                <td class="enPhonicsSongs">Ershedee qelobna</td>
                <td class="arabic">ارشدي قلوبنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="north">
                <td class="english">(Intercede for our people.) x2</td>
                <td class="enPhonicsSongs">Wazkoree sha3bena</td>
                <td class="arabic">وأذكري شعبنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="refrain">
                <td class="english">O Mary our mother,</td>
                <td class="enPhonicsSongs">El3adra ‘omena</td>
                <td class="arabic">العدرا أمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="refrain">
                <td class="english">the beloved of us all. (x2)</td>
                <td class="enPhonicsSongs">7abeebetna kollena</td>
                <td class="arabic">حبيبتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="refrain">
                <td class="english">O tender Virgin,</td>
                <td class="enPhonicsSongs">El3adra el7anoona</td>
                <td class="arabic">العدرا  الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="refrain">
                <td class="english">full of help for those who call.</td>
                <td class="enPhonicsSongs">Kollaha Ma3oona</td>
                <td class="arabic">كلها معونة</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function oMaryOurMotherYouAreTheMotherOfOurLord(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="O Mary our Mother, You’re the Mother of our Lord">
        <caption id="caption_table_${tableNumber}" class="caption">O Mary our Mother, You’re the Mother of our Lord
        <span class="arabic-caption">يامريم ياأمنا إنت أم ربنا</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">O Mary our Mother,</td>
                <td class="enPhonicsSongs">Ya mariam ya ‘omena</td>
                <td class="arabic">يامريم ياأمنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">you’re the Mother of our Lord. (x2)</td>
                <td class="enPhonicsSongs">Enti ‘om rabena</td>
                <td class="arabic">إنت أم ربنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">Intercede on our behalf,</td>
                <td class="enPhonicsSongs">‘otlobee men aglena</td>
                <td class="arabic">اطلبى من أجلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">O the Intercessor of us all (x2)</td>
                <td class="enPhonicsSongs">Ya shafe3etna kolena</td>
                <td class="arabic">ياشفيعتنا كلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="North">
                <td class="english">O Mary our Mother (x2)</td>
                <td class="enPhonicsSongs">Ya maria mya ‘omena</td>
                <td class="arabic">يامريم ياأمنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english">O Jesus Christ your Son,</td>
                <td class="enPhonicsSongs">Yasoo3 almasee7 ebnokee</td>
                <td class="arabic">يسوع المسيح ابنك</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english">receives all prayers from you. (x2)</td>
                <td class="enPhonicsSongs">Yasma3 kol salah menkee</td>
                <td class="arabic">يسمع كل صلاة منك</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">O Mary, we love you;</td>
                <td class="enPhonicsSongs">Da e7na ya mariam ben7ebek</td>
                <td class="arabic">دا احنا يامريم بنحبك</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">We rejoice when we say your name. (x2)</td>
                <td class="enPhonicsSongs">Nefra7 lamma ne’ool esmek</td>
                <td class="arabic">نفرح لما نقول اسمك</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">O Mary our Mother (x2)</td>
                <td class="enPhonicsSongs">Ya mariam ya ‘omena</td>
                <td class="arabic">يامريم ياأمنا</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function oMotherOfLight(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="O Mother of Light">
        <caption id="caption_table_${tableNumber}" class="caption">O Mother of Light
        <span class="arabic-caption">يا أم النور. يا فخر الأمة</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">O Mother of light, the pride of nations,</td>
                <td class="enPhonicsSongs">Ya om al noor. Ya fakhr al ‘oma</td>
                <td class="arabic">يا أم النور. يا فخر الأمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">the beginning of joy, the treasure of grace,</td>
                <td class="enPhonicsSongs">Ya bad’ alseroor. Ya kanz al ne3ma</td>
                <td class="arabic">يا بدء السرور. يا كنز النعمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">the source of happiness, origin of mercy,</td>
                <td class="enPhonicsSongs">Ya ‘asl al7ebor. Ya ma3dan al ra7ma</td>
                <td class="arabic">يا أصل الحبور. يا معدن الرحمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">The exalted, living, worshipped Lord,</td>
                <td class="enPhonicsSongs">Alrab almota3al. Al 7ay almawgood</td>
                <td class="arabic">الرب المتعال الحى الموجود</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english">honored you with perfection, O daughter of David,</td>
                <td class="enPhonicsSongs">Sharrafek bekamal. Ya ebnat Dawood</td>
                <td class="arabic">شرفك بكمال. يا ابنة داود</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english">and Gabriel visited you, with the promised mystery,</td>
                <td class="enPhonicsSongs">Wa ataki ghabrial. Belser alma3hood</td>
                <td class="arabic">وأتاك غبريال. بالسر المعهود</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="english">He granted you blessedness, by the descent of the Grace,</td>
                <td class="enPhonicsSongs">A3taki eltatweeb. Be7elool el ne3ma</td>
                <td class="arabic">أعطاك التطويب. بحلول النعمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english">by a wondrous mystery, you bore the Word,</td>
                <td class="enPhonicsSongs">Beser 3ageeb. 7amalti elne3ma</td>
                <td class="arabic">بسر عجيب. حملت النعمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="north">
                <td class="english">and He saved every grievous soul, from the bond of darkness,</td>
                <td class="enPhonicsSongs">Anqaz kol ka’eeb. Men deeq elzolma</td>
                <td class="arabic">أنقذ كل كئيب من ضيق الظلمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">Hail to you, O rod of Aaron,</td>
                <td class="enPhonicsSongs">Alsalam 3aleki. Ya 3asa Haroon</td>
                <td class="arabic">السلام عليك. يا عصا هارون</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">blessed are you, O daughter of Zion.</td>
                <td class="enPhonicsSongs">Altooba eleki. Ya ebnat sehyoon</td>
                <td class="arabic">الطوبى إليك. يا ابنة صهيون</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">The righteous rejoice at your name,</td>
                <td class="enPhonicsSongs">Yafra7 da3eekee. Walsedeeqoon</td>
                <td class="arabic">يفرح داعيك. والصديقون</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english">Rejoice O Mary, O chosen bride,</td>
                <td class="enPhonicsSongs">Anti ya Mariam. 3aroos mokhtara</td>
                <td class="arabic">أنت يامريم. عروس مختارة</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="english">O honored seed, and dome and tower,</td>
                <td class="enPhonicsSongs">Ya nasl mokarram. Qobba wa manara</td>
                <td class="arabic">يا نسل مكرم. قبة ومناره</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="english">O exalted root, of all purity,</td>
                <td class="enPhonicsSongs">Ya asl mo3azam. Zo eltahara</td>
                <td class="arabic">يا أصل معظم. ذو الطهارة</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">You became as the heavens, carrying the Holy One</td>
                <td class="enPhonicsSongs">Serti kalsamawat. 7amela alqodoos</td>
                <td class="arabic">صرت كالسموات. حاملة القدوس</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">Nobler than the powers and higher than the ranks</td>
                <td class="enPhonicsSongs">Ashraf men alqowat. 3alya 3an altoqoos</td>
                <td class="arabic">أشرف من القوات عالية عن الطقوس</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english">We ask your intercessions before our Lord Jesus</td>
                <td class="enPhonicsSongs">Nas’alek alshafa3at. Amam alrab eesos</td>
                <td class="arabic">نسألك الشفاعات أمام الرب إيسوس</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english">We ask you O Virgin, O crown of Israel,</td>
                <td class="enPhonicsSongs">Nas’alek ya 3adra. Ya tag al’akaleel</td>
                <td class="arabic">نسألك ياعذراء. يا تاج الأكاليل</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english">O joy of the martyrs, O origin of rejoicing.</td>
                <td class="enPhonicsSongs">Ya fara7 al shohada’. Ya asl altahleel</td>
                <td class="arabic">يا فرح الشهداء. يا أصل التهليل</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="north">
                <td class="english">Intercession and victory, before Emmanuel,</td>
                <td class="enPhonicsSongs">Shafa3a wa nasran. Amam 3emanoo’eel</td>
                <td class="arabic">شفاعة ونصرًا أمام عمانوئيل</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english">O Mary, the daughter of Joachim.</td>
                <td class="enPhonicsSongs">Ya Mariam ya ebnat Yowaqim</td>
                <td class="arabic">يا مريم يا ابنة يواقيم</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function oMotherOfLightOBeautiful(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Ya om el noor ya gameela">
        <caption id="caption_table_${tableNumber}" class="caption">Ya om el noor ya gameela
        <span class="arabic-caption">يا أم النور ياجميلة</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="enPhonicsSongs">Ya om el noor ya gameela</td>
                <td class="arabic">يا أم النور ياجميلة</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="enPhonicsSongs">Ya 3azra’ tahera we nabila</td>
                <td class="arabic">يا عذراء طاهرة ونبيله</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="enPhonicsSongs">Ya bent dawood ya aseela</td>
                <td class="arabic">يا بنت داود يا أصيله</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="enPhonicsSongs">Ya om elahna we ra3eena (2)</td>
                <td class="arabic">يا أم ألهنا وراعينا (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="enPhonicsSongs">Norek yoshbeh almesba7</td>
                <td class="arabic">نورك يشبه المصباح</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="enPhonicsSongs">Ba3d ellel yahel saba7</td>
                <td class="arabic">بعد الليل يهل صباح</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="enPhonicsSongs">Yamla’ eldonya afra7</td>
                <td class="arabic">يملأ الدنيا أفراح</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="enPhonicsSongs">Wa yerosh elward 7awalena (2)</td>
                <td class="arabic">ويرش الورد حوالينا (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="enPhonicsSongs">Almalak galek we 7ayaki</td>
                <td class="arabic">الملاك جالك وحياكى</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="enPhonicsSongs">We sallem 3alekee we hannaki</td>
                <td class="arabic">وسلم عليكى وهناكى</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="north">
                <td class="enPhonicsSongs">We qal laki rabena ma3aki</td>
                <td class="arabic">وقال لك ربنا معاكى</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="enPhonicsSongs">Hatkoni om fadeena (2)</td>
                <td class="arabic">ها تكونى أم فادينا (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="enPhonicsSongs">Galek elmalak bebeshara</td>
                <td class="arabic">جالك الملاك ببشارة</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="enPhonicsSongs">Qe ‘al lak anti elmokhtara</td>
                <td class="arabic">وقال لك أنت المختارة</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="enPhonicsSongs">Tekoni leldonya manara</td>
                <td class="arabic">تكونى للدنيا مناره</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="enPhonicsSongs">We nor ebnek ya7el 3alena (2)</td>
                <td class="arabic">ونور أبنك يحل علينا (2)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="enPhonicsSongs">Nomagedek wa noqeed elshemoo3</td>
                <td class="arabic">نمجدك ونقيد الشموع</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="enPhonicsSongs">No3azemek ya om elnoor</td>
                <td class="arabic">نعظمك يا أم النور</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="enPhonicsSongs">Lelne3ma anti el yanboo3</td>
                <td class="arabic">للنعمه أنت الينبوع</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="enPhonicsSongs">Yafeed 3alena wa yes’eena (2)</td>
                <td class="arabic">يفيض علينا ويسقينا (2)</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function oSeekerToMeetJesus(tableNumber) {
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
        <table id="table_${tableNumber}" title="O Seeker To Meet Jesus">
            <caption class="caption" id="caption_table_${tableNumber}">O Seeker To Meet Jesus
            <span class="arabic-caption">يا سائح للقاء يسوع</span></caption>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
                <tr id="table_${tableNumber}_row_0" class="north">
                    <td class="english">O seeker to meet Jesus</td>
                    <td class="arabic">يا سائح للقاء يسوع</td>
                </tr>
                <tr id="table_${tableNumber}_row_1" class="north">
                    <td class="english">Forget your hanger and thirst</td>
                    <td class="arabic">لا يهمك عطش ولا جوع</td>
                </tr>
                <tr id="table_${tableNumber}_row_2" class="north">
                    <td class="english">Your food is the bread of life</td>
                    <td class="arabic">طعامك خبز الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_3" class="north">
                    <td class="english">And you´ll drink from his wounded side</td>
                    <td class="arabic">ويرويك ماء الينبوع</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
                <tr id="table_${tableNumber}_row_4" class="south">
                    <td class="english">You traveller forget the past</td>
                    <td class="arabic">يا سائح اترك ما فات</td>
                </tr>
                <tr id="table_${tableNumber}_row_5" class="south">
                    <td class="english">And go steadfast in the path</td>
                    <td class="arabic">واسلك في الطريق بثبات</td>
                </tr>
                <tr id="table_${tableNumber}_row_6" class="south">
                    <td class="english">If you suffer on the road</td>
                    <td class="arabic">وان كان في الطريق آلامات</td>
                </tr>
                <tr id="table_${tableNumber}_row_7" class="south">
                    <td class="english">Remember for you he died</td>
                    <td class="arabic">أذكر من في حبك مات</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
                <tr id="table_${tableNumber}_row_8" class="north">
                    <td class="english">The trumpet will be heard soon</td>
                    <td class="arabic">البوق يضرب بعد قليل</td>
                </tr>
                <tr id="table_${tableNumber}_row_9" class="north">
                    <td class="english">With happiness and sound of joy</td>
                    <td class="arabic">بالفرح بصوت التهليل</td>
                </tr>
                <tr id="table_${tableNumber}_row_10" class="north">
                    <td class="english">A great feast above the clouds</td>
                    <td class="arabic">حفلة عظيمة على السحاب</td>
                </tr>
                <tr id="table_${tableNumber}_row_11" class="north">
                    <td class="english">And a crown for the watchful</td>
                    <td class="arabic">والسهران يلبس اكليل</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
                <tr id="table_${tableNumber}_row_12" class="south">
                    <td class="english">He´ll prepare a place for you</td>
                    <td class="arabic">راح يعد لك مكان</td>
                </tr>
                <tr id="table_${tableNumber}_row_13" class="south">
                    <td class="english">He is always waiting for you</td>
                    <td class="arabic">مشغول بيك بقاله زمان</td>
                </tr>
                <tr id="table_${tableNumber}_row_14" class="south">
                    <td class="english">His heart is longing for you</td>
                    <td class="arabic">قلبه متشوق إليك</td>
                </tr>
                <tr id="table_${tableNumber}_row_15" class="south">
                    <td class="english">Blessed are you if you are prepared</td>
                    <td class="arabic">سعدك لو لقاك سهران</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
                <tr id="table_${tableNumber}_row_16" class="north">
                    <td class="english">You are a part in Jesus Christ</td>
                    <td class="arabic">يا وديعة المسيح</td>
                </tr>
                <tr id="table_${tableNumber}_row_17" class="north">
                    <td class="english">You who lives among the rocks</td>
                    <td class="arabic">يا سكنة وسط الصخور</td>
                </tr>
                <tr id="table_${tableNumber}_row_18" class="north">
                    <td class="english">Have no fear from all dangers</td>
                    <td class="arabic">لا تخافي من خطر</td>
                </tr>
                <tr id="table_${tableNumber}_row_19" class="north">
                    <td class="english">You´re protected by the Lord</td>
                    <td class="arabic">حاميكي صخر الدهور</td>
                </tr>
            </tbody>
            <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
                <tr id="table_${tableNumber}_row_20" class="south">
                    <td class="english">O seeker to meet Jesus</td>
                    <td class="arabic">يا سائح للقاء يسوع</td>
                </tr>
                <tr id="table_${tableNumber}_row_21" class="south">
                    <td class="english">Forget your hanger and thirst</td>
                    <td class="arabic">لا يهمك عطش ولا جوع</td>
                </tr>
                <tr id="table_${tableNumber}_row_22" class="south">
                    <td class="english">Your food is the bread of life</td>
                    <td class="arabic">طعامك خبز الحياة</td>
                </tr>
                <tr id="table_${tableNumber}_row_23" class="south">
                    <td class="english">And you´ll drink from his wounded side</td>
                    <td class="arabic">ويرويك ماء الينبوع</td>
                </tr>
            </tbody>
        </table>
\n`;
    return html;
}

function ourMotherOVirgin(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="">
        <caption id="caption_table_${tableNumber}" class="caption">Omena Ya 3adra
        <span class="arabic-caption">أمنا يا عذراء</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="enPhonicsSongs">Omena ya 3adra – Ya om elmasih</td>
                <td class="arabic">أمنا يا عذراء - يا أم المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="enPhonicsSongs">Yali fiki dayman – beya7lo-l madi7</td>
                <td class="arabic">يا للى فيك دايمًا - بيحلو المديح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_3" class="north">
                <td class="enPhonicsSongs">Olobna bet7ebek – 7ob malhosh mathil</td>
                <td class="arabic">قلوبنا بتحبك - حب ملهوش مثيل</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="enPhonicsSongs">3ayzin nefdal ganbek – we ne’ool taratil</td>
                <td class="arabic">عايزين نفضل جنبك - ونقول تراتيل</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_5" class="refrain">
                <td class="enPhonicsSongs">Omena ya 3adra – Ya om elmasih</td>
                <td class="arabic">أمنا يا عذراء - يا أم المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="refrain">
                <td class="enPhonicsSongs">Yali fiki dayman – beya7lo-l madi7</td>
                <td class="arabic">يا للى فيك دايمًا - بيحلو المديح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="enPhonicsSongs">Betsedi e7teyagatna – we tefidi kaman</td>
                <td class="arabic">بتسدي احتياجنا - وتفيضي كمان</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="enPhonicsSongs">Wefi za7met 7ayatna – tedina el aman</td>
                <td class="arabic">وفى زحمة حياتنا - تدينا الأمان</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="enPhonicsSongs">Omena ya 3adra – Ya om elmasih</td>
                <td class="arabic">أمنا يا عذراء - يا أم المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="enPhonicsSongs">Yali fiki dayman – beya7lo-l madi7</td>
                <td class="arabic">يا للى فيك دايمًا - بيحلو المديح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_11" class="north">
                <td class="enPhonicsSongs">Ya gamal masha3rek – 7ob 7anan re3aya</td>
                <td class="arabic">يا جمال مشاعرك - حب حنان رعاية</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="enPhonicsSongs">Yahanana be’omomtek – ya fakhr el baraya</td>
                <td class="arabic">يا هنانا بأمومتك - يا فخر البرايا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_13" class="refrain">
                <td class="enPhonicsSongs">Omena ya 3adra – Ya om elmasih</td>
                <td class="arabic">أمنا يا عذراء - يا أم المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="refrain">
                <td class="enPhonicsSongs">Yali fiki dayman – beya7lo-l madi7</td>
                <td class="arabic">يا للى فيك دايمًا - بيحلو المديح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="enPhonicsSongs">Menki zad emana – bzyartek byotna</td>
                <td class="arabic">منك زاد إيماننا - بزيارتك بيوتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="enPhonicsSongs">Meen yofee begamaylek – ya amara fe 7ayatna</td>
                <td class="arabic">مين يوفى بجمايلك - يا قمره فى حياتنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="enPhonicsSongs">Omena ya 3adra – Ya om elmasih</td>
                <td class="arabic">أمنا يا عذراء - يا أم المسيح</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="enPhonicsSongs">Yali fiki dayman – beya7lo-l madi7</td>
                <td class="arabic">يا للى فيك دايمًا - بيحلو المديح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="enPhonicsSongs">Fara7ti olobna – lamma shofna norek</td>
                <td class="arabic">فرحتي قلوبنا - لما شوقنا نورك</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="enPhonicsSongs">Yalla ya 3adra helli – da wa7shan zohorek</td>
                <td class="arabic">يا اللي يا عذراء هلي - دا وحشنا ظهورك</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function overTheDomes(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Over the Domes">
        <caption id="caption_table_${tableNumber}" class="caption">Over the Domes
        <span class="arabic-caption">فوق القباب بصوا و شوفوا</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Over the domes, come look and see,</td>
                <td class="enPhonicsSongs">Fo’ el ‘obab, boso we shofo</td>
                <td class="arabic">فوق القباب بصوا و شوفوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">the luminous beautiful pure mother,</td>
                <td class="enPhonicsSongs">Elset el3adra menawara</td>
                <td class="arabic">الست العدرا منورة</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">standing looking out, our Lady of light,</td>
                <td class="enPhonicsSongs">Wa’fa bettol, set el kol</td>
                <td class="arabic">واقفة بتطل ست الكل</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">our lady the Virgin and Treasure. (x2)</td>
                <td class="enPhonicsSongs">El set el3adra elgawhara</td>
                <td class="arabic">الست العدرا الجوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">Praise her O people, come and see her,</td>
                <td class="enPhonicsSongs">Ratelo ya sabaya we qabloha</td>
                <td class="arabic">رتلوا يا صبايا وقابلوها</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">light your candles and venerate her. (x2)</td>
                <td class="enPhonicsSongs">Qeedo elshemoo3 we zefooha</td>
                <td class="arabic">قيدو الشموع وزفوها</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">Pave her way with roses and with petals. (x2)</td>
                <td class="enPhonicsSongs">Hatoo el zehoor we roshoha</td>
                <td class="arabic">هاتوا الزهور و رشوها</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">God’s grace filled her she’s God’s vessel,</td>
                <td class="enPhonicsSongs">We bene3met rabena hanooha</td>
                <td class="arabic">وبنعمه ربنا هنوها</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="english">our lady the virgin and treasure.</td>
                <td class="enPhonicsSongs">Dee elset el3adra elgawhara</td>
                <td class="arabic">دى الست العذراء الجوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">Over the domes, come look and see,</td>
                <td class="enPhonicsSongs">Fo’ el ‘obab, boso we shofo</td>
                <td class="arabic">فوق القباب بصوا و شوفوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">the luminous beautiful pure mother,</td>
                <td class="enPhonicsSongs">Elset el3adra menawara</td>
                <td class="arabic">الست العدرا منورة</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">standing looking out, our Lady of light,</td>
                <td class="enPhonicsSongs">Wa’fa bettol, set el kol</td>
                <td class="arabic">واقفة بتطل ست الكل</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="refrain">
                <td class="english">our lady the Virgin and Treasure. (x2)</td>
                <td class="enPhonicsSongs">El set el3adra elgawhara</td>
                <td class="arabic">الست العدرا الجوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">The Pure Virgin’s always with us, (x2)</td>
                <td class="enPhonicsSongs">Set el3adra wa’fa ma3ana</td>
                <td class="arabic">ست العذراء واقفه معانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">her radiant light gathering us.</td>
                <td class="enPhonicsSongs">Benorha elsate3 sam3ana</td>
                <td class="arabic">بنورها الساطع سمعانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">Healing ailments with intercessions,</td>
                <td class="enPhonicsSongs">Wa’fa beteshfee mardana</td>
                <td class="arabic">واقفة  بتشفى مرضانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="south">
                <td class="english">all hearts rejoicing together (x2)</td>
                <td class="enPhonicsSongs">We elobna kollaha far7ana</td>
                <td class="arabic">وقلوبنا كلها فرحانة</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english">Our Lady the Virgin and Treasure</td>
                <td class="enPhonicsSongs">Ya set ya 3adra ya gawhara</td>
                <td class="arabic">يا ست يا عدرا يا جوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">Over the domes, come look and see,</td>
                <td class="enPhonicsSongs">Fo’ el ‘obab, boso we shofo</td>
                <td class="arabic">فوق القباب بصوا و شوفوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">the luminous beautiful pure mother,</td>
                <td class="enPhonicsSongs">Elset el3adra menawara</td>
                <td class="arabic">الست العدرا منورة</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="refrain">
                <td class="english">standing looking out, our Lady of light,</td>
                <td class="enPhonicsSongs">Wa’fa bettol, set el kol</td>
                <td class="arabic">واقفة بتطل ست الكل</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="refrain">
                <td class="english">our lady the Virgin and Treasure. (x2)</td>
                <td class="enPhonicsSongs">El set el3adra elgawhara</td>
                <td class="arabic">الست العدرا الجوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Ya rab men elshar enqezna</td>
                <td class="arabic">يا رب من الشر  انقذنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Eghsel qelobna we same7na</td>
                <td class="arabic">اغسل قلوبنا وسامحنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Talbeen ma3ontak tenqezna</td>
                <td class="arabic">طالبين معونتك تنقذنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Beshafa3et ‘om mokhalesna</td>
                <td class="arabic">بشفاعة  أم مخلصنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="north">
                <td class="english"></td>
                <td class="enPhonicsSongs">Ya set ya 3adra ya gawhara</td>
                <td class="arabic">يا ست يا عدرا يا جوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">Over the domes, come look and see,</td>
                <td class="enPhonicsSongs">Fo’ el ‘obab, boso we shofo</td>
                <td class="arabic">فوق القباب بصوا و شوفوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_29" class="refrain">
                <td class="english">the luminous beautiful pure mother,</td>
                <td class="enPhonicsSongs">Elset el3adra menawara</td>
                <td class="arabic">الست العدرا منورة</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="refrain">
                <td class="english">standing looking out, our Lady of light,</td>
                <td class="enPhonicsSongs">Wa’fa bettol, set el kol</td>
                <td class="arabic">واقفة بتطل ست الكل</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="refrain">
                <td class="english">our lady the Virgin and Treasure. (x2)</td>
                <td class="enPhonicsSongs">El set el3adra elgawhara</td>
                <td class="arabic">الست العدرا الجوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Saybeen deyarna we beyotna</td>
                <td class="arabic">سايبين ديارنا وبيوتنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_33" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Gayeen nezoorek be’olobna</td>
                <td class="arabic">جايين نزورك بقلوبنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Eshfa3ee we shofee demo3na</td>
                <td class="arabic">اشفعى وشوفى دموعنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Men elkhataya eshfee qelobna</td>
                <td class="arabic">من الخطايا اشفى قلوبنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="south">
                <td class="english"></td>
                <td class="enPhonicsSongs">Ya set ya 3adra ya gawhara</td>
                <td class="arabic">يا ست يا عدرا يا جوهرة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_37" class="refrain">
                <td class="english">Over the domes, come look and see,</td>
                <td class="enPhonicsSongs">Fo’ el ‘obab, boso we shofo</td>
                <td class="arabic">فوق القباب بصوا و شوفوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="refrain">
                <td class="english">the luminous beautiful pure mother,</td>
                <td class="enPhonicsSongs">Elset el3adra menawara</td>
                <td class="arabic">الست العدرا منورة</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="refrain">
                <td class="english">standing looking out, our Lady of light,</td>
                <td class="enPhonicsSongs">Wa’fa bettol, set el kol</td>
                <td class="arabic">واقفة بتطل ست الكل</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="refrain">
                <td class="english">our lady the Virgin and Treasure. (x2)</td>
                <td class="enPhonicsSongs">El set el3adra elgawhara</td>
                <td class="arabic">الست العدرا الجوهرة</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function oYouWhoReceivedTheMostHonorableGift(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="O You Who Received the Most Honorable Gift">
        <caption id="caption_table_${tableNumber}" class="caption">O You Who Received the Most Honorable Gift
        <span class="arabic-caption">يا من عطيت اشرف عطية</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">O you who received</td>
                <td class="enPhonicsSongs">Ya man 3otiti</td>
                <td class="arabic">يا من عطيت</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">the most honorable gift.</td>
                <td class="enPhonicsSongs">ashraf ateya</td>
                <td class="arabic">اشرف عطية</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">He sent you O Mary,</td>
                <td class="enPhonicsSongs">Ya man ba3atlek ya mariam</td>
                <td class="arabic">يا من بعث لك يامريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">His Holy Spirit.</td>
                <td class="enPhonicsSongs">ro7o hedeya</td>
                <td class="arabic">روحه هدية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_1">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">With Him, we rejoiced</td>
                <td class="enPhonicsSongs">Behe fare7na</td>
                <td class="arabic">به فرحنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">and prospered.</td>
                <td class="enPhonicsSongs">behe naga7na</td>
                <td class="arabic">به نجحنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">With Him, we reconciled O Mary,</td>
                <td class="enPhonicsSongs">Behe estala7na ya mariam</td>
                <td class="arabic">به اصطلحنا يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">and won the case.</td>
                <td class="enPhonicsSongs">we kesebna el adeya</td>
                <td class="arabic">وكسبنا الأبدية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">The fruit of your womb</td>
                <td class="enPhonicsSongs">Thamaret 7ashaki</td>
                <td class="arabic">ثمرة حشاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">filled you with grace.</td>
                <td class="enPhonicsSongs">belne3ma Malaki</td>
                <td class="arabic">بالنعمى ملاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english">He created you, O Mary</td>
                <td class="enPhonicsSongs">Howa qad anshakee ya mariam</td>
                <td class="arabic">هو قد انشأك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english">pure and unblemished.</td>
                <td class="enPhonicsSongs">ya tahra we naqeya</td>
                <td class="arabic">يا طاهرة ونقية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_13" class="refrain">
                <td class="english">O you who received</td>
                <td class="enPhonicsSongs">Ya man 3otiti</td>
                <td class="arabic">يا من عطيت</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="refrain">
                <td class="english">the most honorable gift.</td>
                <td class="enPhonicsSongs">ashraf ateya</td>
                <td class="arabic">اشرف عطية</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="refrain">
                <td class="english">He sent you O Mary,</td>
                <td class="enPhonicsSongs">Ya man ba3atlek ya mariam</td>
                <td class="arabic">يا من بعث لك يامريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="refrain">
                <td class="english">His Holy Spirit.</td>
                <td class="enPhonicsSongs">ro7o hedeya</td>
                <td class="arabic">روحه هدية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english">Our strength fainted,</td>
                <td class="enPhonicsSongs">Kharat qowana</td>
                <td class="arabic">خارت قوانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="english">our light doomed.</td>
                <td class="enPhonicsSongs">wazlama Deyana</td>
                <td class="arabic">واظلم ضيانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="english">But He came O Mary,</td>
                <td class="enPhonicsSongs">Lawla ano atana ya mariam</td>
                <td class="arabic">لولا انه اتانا  يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english">your Son the Messiah.</td>
                <td class="enPhonicsSongs">ebnoki el maseya</td>
                <td class="arabic">ابنك المسيا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">The God of creation,</td>
                <td class="enPhonicsSongs">Rab el baraya</td>
                <td class="arabic">رب البرايا</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">the giver of gifts,</td>
                <td class="enPhonicsSongs">mo3ti el3ataya</td>
                <td class="arabic">معطى العطايا</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english">the forgiver of sins O Mary,</td>
                <td class="enPhonicsSongs">Ma7el khataya ya mariam</td>
                <td class="arabic">ماح الخطايا يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english">the redeemer of humanity.</td>
                <td class="enPhonicsSongs">fadi elbashareya</td>
                <td class="arabic">فادى البشرية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">O you who received</td>
                <td class="enPhonicsSongs">Ya man 3otiti</td>
                <td class="arabic">يا من عطيت</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">the most honorable gift.</td>
                <td class="enPhonicsSongs">ashraf ateya</td>
                <td class="arabic">اشرف عطية</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">He sent you O Mary,</td>
                <td class="enPhonicsSongs">Ya man ba3atlek ya mariam</td>
                <td class="arabic">يا من بعث لك يامريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">His Holy Spirit.</td>
                <td class="enPhonicsSongs">ro7o hedeya</td>
                <td class="arabic">روحه هدية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_29" class="north">
                <td class="english">Your humanity</td>
                <td class="enPhonicsSongs">Salomat 3adaki</td>
                <td class="arabic">سلمت عضاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english">were saved.</td>
                <td class="enPhonicsSongs">men alhalak</td>
                <td class="arabic">من الهلاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="north">
                <td class="english">The Lord made it, O Mary</td>
                <td class="enPhonicsSongs">Rabena khallaki ya mariam</td>
                <td class="arabic">ربنا خلاك يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="north">
                <td class="english">a heavenly flesh.</td>
                <td class="enPhonicsSongs">sama gesdaneya</td>
                <td class="arabic">سما جسدانية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_33" class="south">
                <td class="english">A censer and an ark,</td>
                <td class="enPhonicsSongs">Shorya we taboot</td>
                <td class="arabic">شورية وتابوت</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="south">
                <td class="english">a tabernacle for the divinity.</td>
                <td class="enPhonicsSongs">maskan lelthaloth</td>
                <td class="arabic">مسكن اللاهوت</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="south">
                <td class="english">Our nature is steadfast O Mary,</td>
                <td class="enPhonicsSongs">Tab3na mathbot ya mariam</td>
                <td class="arabic">طبعنا مثبوت يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="south">
                <td class="english">Abiding in the divinity.</td>
                <td class="enPhonicsSongs">mota7edan bel lahot</td>
                <td class="arabic">متحد باللاهوت</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_37" class="refrain">
                <td class="english">O you who received</td>
                <td class="enPhonicsSongs">Ya man 3otiti</td>
                <td class="arabic">يا من عطيت</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="refrain">
                <td class="english">the most honorable gift.</td>
                <td class="enPhonicsSongs">ashraf ateya</td>
                <td class="arabic">اشرف عطية</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="refrain">
                <td class="english">He sent you O Mary,</td>
                <td class="enPhonicsSongs">Ya man ba3atlek ya mariam</td>
                <td class="arabic">يا من بعث لك يامريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="refrain">
                <td class="english">His Holy Spirit.</td>
                <td class="enPhonicsSongs">ro7o hedeya</td>
                <td class="arabic">روحه هدية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_41" class="north">
                <td class="english">There was no intercessor</td>
                <td class="enPhonicsSongs">Samat algami3</td>
                <td class="arabic">صمت الجميع</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="north">
                <td class="english">for all were silent.</td>
                <td class="enPhonicsSongs">ez la shafi3</td>
                <td class="arabic">اذ لا شفيع</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="north">
                <td class="english">So the One who hears came from you, O Mary,</td>
                <td class="enPhonicsSongs">Fa ata alsami3 ya mariam</td>
                <td class="arabic">فاتى السميع يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="north">
                <td class="english">O pure lady.</td>
                <td class="enPhonicsSongs">menki lel bareya</td>
                <td class="arabic">منك يانقية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_45" class="south">
                <td class="english">Peace returned</td>
                <td class="enPhonicsSongs">3ad lana alaman</td>
                <td class="arabic">عاد لنا الأمان</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="south">
                <td class="english">and we felt secure.</td>
                <td class="enPhonicsSongs">waserna fe etme’nan</td>
                <td class="arabic">وصرنا فى اطمئنان</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="south">
                <td class="english">When the Judge sent O Mary</td>
                <td class="enPhonicsSongs">Lamma ga aldayan ya mariam</td>
                <td class="arabic">لما جه الديان يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="south">
                <td class="english">the heavenly annunciation.</td>
                <td class="enPhonicsSongs">belboshra elsafeya</td>
                <td class="arabic">بالبشرى الصفية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_49" class="refrain">
                <td class="english">O you who received</td>
                <td class="enPhonicsSongs">Ya man 3otiti</td>
                <td class="arabic">يا من عطيت</td>
            </tr>
            <tr id="table_${tableNumber}_row_50" class="refrain">
                <td class="english">the most honorable gift.</td>
                <td class="enPhonicsSongs">ashraf ateya</td>
                <td class="arabic">اشرف عطية</td>
            </tr>
            <tr id="table_${tableNumber}_row_51" class="refrain">
                <td class="english">He sent you O Mary,</td>
                <td class="enPhonicsSongs">Ya man ba3atlek ya mariam</td>
                <td class="arabic">يا من بعث لك يامريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_52" class="refrain">
                <td class="english">His Holy Spirit.</td>
                <td class="enPhonicsSongs">ro7o hedeya</td>
                <td class="arabic">روحه هدية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_13">
            <tr id="table_${tableNumber}_row_53" class="north">
                <td class="english">You surpassed the creation</td>
                <td class="enPhonicsSongs">Foqti elkhaliqa</td>
                <td class="arabic">فقت الخليقة</td>
            </tr>
            <tr id="table_${tableNumber}_row_54" class="north">
                <td class="english">and manifested the truth.</td>
                <td class="enPhonicsSongs">wa azharti el 7aqiqa</td>
                <td class="arabic">واظهرت الحقيقة</td>
            </tr>
            <tr id="table_${tableNumber}_row_55" class="north">
                <td class="english">From every affliction O Mary,</td>
                <td class="enPhonicsSongs">Wa men kol deqa ya mariam</td>
                <td class="arabic">ومن كل ضيقة يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_56" class="north">
                <td class="english">you helped mankind.</td>
                <td class="enPhonicsSongs">anqazti el bashareya</td>
                <td class="arabic">انقذت البشرية</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_14">
            <tr id="table_${tableNumber}_row_57" class="south">
                <td class="english">O pure</td>
                <td class="enPhonicsSongs">Ya omon 3afifa</td>
                <td class="arabic">يا ام عفيفة</td>
            </tr>
            <tr id="table_${tableNumber}_row_58" class="south">
                <td class="english">and chase Virgin.</td>
                <td class="enPhonicsSongs">ya bekra latifa</td>
                <td class="arabic">يا بكر لطيفة</td>
            </tr>
            <tr id="table_${tableNumber}_row_59" class="south">
                <td class="english">O the fortress queen O Mary</td>
                <td class="enPhonicsSongs">Ya malika mani3a ya mariam</td>
                <td class="arabic">يا ملكة منيعة يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_60" class="south">
                <td class="english">Have pity on me.</td>
                <td class="enPhonicsSongs">7eni 3alaya</td>
                <td class="arabic">حنّي عليَّ</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_15">
            <tr id="table_${tableNumber}_row_61" class="refrain">
                <td class="english">O you who received</td>
                <td class="enPhonicsSongs">Ya man 3otiti</td>
                <td class="arabic">يا من عطيت</td>
            </tr>
            <tr id="table_${tableNumber}_row_62" class="refrain">
                <td class="english">the most honorable gift.</td>
                <td class="enPhonicsSongs">ashraf ateya</td>
                <td class="arabic">اشرف عطية</td>
            </tr>
            <tr id="table_${tableNumber}_row_63" class="refrain">
                <td class="english">He sent you O Mary,</td>
                <td class="enPhonicsSongs">Ya man ba3atlek ya mariam</td>
                <td class="arabic">يا من بعث لك يامريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_64" class="refrain">
                <td class="english">His Holy Spirit.</td>
                <td class="enPhonicsSongs">ro7o hedeya</td>
                <td class="arabic">روحه هدية</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }

function oVirginMary(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="O Virgin Mary">
        <caption id="caption_table_${tableNumber}" class="caption">O Virgin Mary
        <span class="arabic-caption">يامريم البكر</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">O Virgin Mary, you're exalted</td>
                <td class="enPhonicsSongs">Ya mariam albekra foqtee</td>
                <td class="arabic">يا مريم البكر فقتى</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">Above the sun and moon,</td>
                <td class="enPhonicsSongs">Alshamsa wal qamara</td>
                <td class="arabic">الشمس والقمرا</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">And higher than all the stars</td>
                <td class="enPhonicsSongs">Wa kola nagmon be’aflake</td>
                <td class="arabic">وكل نجم بأفلاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">That glow in heaven (2x)</td>
                <td class="enPhonicsSongs">Alsama’e sara</td>
                <td class="arabic">السماء سرى</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">O morning star that shines</td>
                <td class="enPhonicsSongs">Ya nagmat alsob7a she3ee</td>
                <td class="arabic">يا نجمة الصبح شعى</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english">In our churches,</td>
                <td class="enPhonicsSongs">Fee ma3abedena</td>
                <td class="arabic">فى معابدنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english">And enlightens our hearts and minds</td>
                <td class="enPhonicsSongs">Wanaweree 3oqolna</td>
                <td class="arabic">ونورى عقلنا</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">And our senses (2x)</td>
                <td class="enPhonicsSongs">Walsam3a wal basara</td>
                <td class="arabic">والسمع والبصر</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="north">
                <td class="english">O Mother of Jesus Christ</td>
                <td class="enPhonicsSongs">Ya ‘oma yaso3a ya ‘omy</td>
                <td class="arabic">يا أم يسوع يا أمى</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="north">
                <td class="english">My refuge and my gain</td>
                <td class="enPhonicsSongs">Wa ya amalee</td>
                <td class="arabic">ويا أملى</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="north">
                <td class="english">Do not forsake me when I'm in</td>
                <td class="enPhonicsSongs">La tohmeleenee mata</td>
                <td class="arabic">لا تهملينى متى</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english">The depths of sin (2x)</td>
                <td class="enPhonicsSongs">Menee elkhata sadar</td>
                <td class="arabic">منى الخطا صدرا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">You're my help and support in all</td>
                <td class="enPhonicsSongs">Antee malazee wa 3awnee</td>
                <td class="arabic">أنت ملاذى وعونى</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">My tribulations</td>
                <td class="enPhonicsSongs">Kollama da3efat</td>
                <td class="arabic">كلما ضعفت</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">And a light to my heart</td>
                <td class="enPhonicsSongs">Nafsee wagabran leqalbee</td>
                <td class="arabic">نفسى وجبرا لقلبى</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">Whenever it weakens (2x)</td>
                <td class="enPhonicsSongs">Kollama enkasar</td>
                <td class="arabic">كلما انكسرا</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function oVirginMyMotherShine(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="O Virgin My Mother shine with your radiance">
        <caption id="caption_table_${tableNumber}" class="caption">O Virgin My Mother shine with your radiance
        <span class="arabic-caption">يا عذرا يا أمي، طلى بنورك طلى</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">O Virgin My Mother,</td>
                <td class="enPhonicsSongs">Ya 3adra ya ‘omy</td>
                <td class="arabic">يا عذرا يا أمي</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">shine with your radiance please shine.</td>
                <td class="enPhonicsSongs">Tollee benoorek tollee</td>
                <td class="arabic">طلى بنورك طلى</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">Shine with mercy please shine,</td>
                <td class="enPhonicsSongs">Tollee bera7ma tollee</td>
                <td class="arabic">طلى برحمة طلى</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">my intercessor and helper.</td>
                <td class="enPhonicsSongs">Ya shafe3tee ya 3awnee</td>
                <td class="arabic">يا شفعتي يا عوني</td>
            </tr>
            <tr id="table_${tableNumber}_row_5" class="North">
                <td class="english">(If I feel alone in this world</td>
                <td class="enPhonicsSongs">Wa en sabnee el3alam wa7dee</td>
                <td class="arabic">و إن سابني العالم وحدي</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="North">
                <td class="english">You are always there for me) x2</td>
                <td class="enPhonicsSongs">Entee kefaya tekonee ganbee</td>
                <td class="arabic">أنت كفاية تكوني جنبي</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="North">
                <td class="english">O Virgin, my Mother. (x3)</td>
                <td class="enPhonicsSongs">Ya 3adra ya ‘omy</td>
                <td class="arabic">ياعدرا يا أمي</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">O our Queen in heaven,</td>
                <td class="enPhonicsSongs">Ya maleka lekol elsama</td>
                <td class="arabic">يا ملكة لكل السماء</td>
            </tr>
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">you’re the greatest among all women.</td>
                <td class="enPhonicsSongs">Ya 3azeema bayna alnesa</td>
                <td class="arabic">ياعظيمة بين النساء</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">In times of trouble and heartache,</td>
                <td class="enPhonicsSongs">Fe eldeeqa waqt alalam</td>
                <td class="arabic">في الضيقة وقت الآلام</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english">be a helper for our sake.</td>
                <td class="enPhonicsSongs">Khaleekee lana mo3eena</td>
                <td class="arabic">خليك لنا معينه</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english">(Abide with us at all times</td>
                <td class="enPhonicsSongs">Khaleeka ma3ana tamallee</td>
                <td class="arabic">خليكي معانا تملي</td>
            </tr>
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">We have comfort in your presence) x2</td>
                <td class="enPhonicsSongs">Net3aza wentee ma3ana</td>
                <td class="arabic">نتعزى وأنت معانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">O Virgin, my Mother. (x3)</td>
                <td class="enPhonicsSongs">Ya 3adra ya ‘omy</td>
                <td class="arabic">ياعدرا يا أمي</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">O intercessor for everyone</td>
                <td class="enPhonicsSongs">Ya shafee3a lekol elnefoos</td>
                <td class="arabic">ياشفيعة لكل النفوس</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">blessed Mother of the Holy One.</td>
                <td class="enPhonicsSongs">Ya mobaraka ya om elqodoos</td>
                <td class="arabic">يا مباركة يا أم القدوس</td>
            </tr>
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english">You always answer my cry;</td>
                <td class="enPhonicsSongs">Kol ma atlobek tegeenee</td>
                <td class="arabic">كل ما أطلبك تيجيني</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="english">be always by my side.</td>
                <td class="enPhonicsSongs">Tela’eenee fee 7emaki ma7roos</td>
                <td class="arabic">تلاقيني في حماك محروس</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="english">(All of the world exalts you,</td>
                <td class="enPhonicsSongs">Kol el3alam beyrannemlek</td>
                <td class="arabic">كل العالم بيرنملك</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english">The congregation and the clergy too) x2</td>
                <td class="enPhonicsSongs">Elsha3b ma3a el ekleeros</td>
                <td class="arabic">الشعب مع الإكليروس</td>
            </tr>
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">O Virgin, my Mother. (x3)</td>
                <td class="enPhonicsSongs">Ya 3adra ya ‘omy</td>
                <td class="arabic">ياعدرا يا أمي</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">O you great second Heaven,</td>
                <td class="enPhonicsSongs">Ya 3azeema ya sama tania</td>
                <td class="arabic">يا عظيمة يا سما تانية</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">O censor of compassion.</td>
                <td class="enPhonicsSongs">Ya shoryat gamr alra7man</td>
                <td class="arabic">يا شورية جمر الرحمن</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">When we entreat in distress</td>
                <td class="enPhonicsSongs">Natadara3 kol el awqat</td>
                <td class="arabic">نتضرع كل الأوقات</td>
            </tr>
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english">you, gently, come and give us rest.</td>
                <td class="enPhonicsSongs">Teegee te3amleena be7anan</td>
                <td class="arabic">تيجي تعاملينا بحنان</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english">(At all times, we beseech you</td>
                <td class="enPhonicsSongs">Natadara3 we nosalee kaman</td>
                <td class="arabic">نتضرع ونصلي كمان</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="north">
                <td class="english">to comfort those who are lost) (x2)</td>
                <td class="enPhonicsSongs">Teegee tetamenee el 7ayran</td>
                <td class="arabic">تيجي تطمني الحيران</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english">O Virgin, my Mother. (x3)</td>
                <td class="enPhonicsSongs">Ya 3adra ya ‘omy</td>
                <td class="arabic">ياعدرا يا أمي</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function theGloryOfMary(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="The Glory of Mary">
        <caption id="caption_table_${tableNumber}" class="caption">The Glory of Mary
        <span class="arabic-caption">مجد مريم يتعظم</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">She is the highest shing star;</td>
                <td class="enPhonicsSongs">Qad talalat wa ta3alat</td>
                <td class="arabic">قد تلألأت وتعالت</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english">her brightness lasts forever.</td>
                <td class="enPhonicsSongs">Ma lenoreha gheroob</td>
                <td class="arabic">ما لنورها غروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="south">
                <td class="english">She said when annunciated,</td>
                <td class="enPhonicsSongs">Wahya qalat 7ina nalat</td>
                <td class="arabic">وهي قالت حين نالت</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="south">
                <td class="english">“Let all nations bless me.”</td>
                <td class="enPhonicsSongs">Fal totaweboni el she3oob</td>
                <td class="arabic">فلتطوبني الشعوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english">The angel said, “The Holy Spirit</td>
                <td class="enPhonicsSongs">Qad talalat wa ta3alat</td>
                <td class="arabic">قد رآها واصطفاها</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english">shall come upon you,</td>
                <td class="enPhonicsSongs">Ma lenoreha gheroob</td>
                <td class="arabic">رب كل العالمين</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">and the power of the Highest</td>
                <td class="enPhonicsSongs">Wahya qalat 7ina nalat</td>
                <td class="arabic">وهي قالت حين نالت</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">shall overshadow you.”</td>
                <td class="enPhonicsSongs">Fal totaweboni el she3oob</td>
                <td class="arabic">فلتطوبني الشعوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">She is our hope when we are hopeless.</td>
                <td class="enPhonicsSongs">Heya ragakom fi shaqakom</td>
                <td class="arabic">هي رجاكم في شقاكم</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">Try to listen, O sinners;</td>
                <td class="enPhonicsSongs">Fasma3o ya khate’een</td>
                <td class="arabic">فاسمعوا يا خاطئين</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english">have no fear to go to Mary,</td>
                <td class="enPhonicsSongs">La takhafo an towafo</td>
                <td class="arabic">لا تخافوا أن توافوا</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english">and ask her for shelter.</td>
                <td class="enPhonicsSongs">le7emaha talebeen</td>
                <td class="arabic">لحماها طالبين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="north">
                <td class="english">She is known to all her children</td>
                <td class="enPhonicsSongs">Qad ra’aha wastafaha</td>
                <td class="arabic">هي تعرف وهي توصف</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english">as a safe shelter.</td>
                <td class="enPhonicsSongs">Rab kol el3alamin</td>
                <td class="arabic">إنها ملجأ جزيل</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="north">
                <td class="english">Seek her and you’ll find that</td>
                <td class="enPhonicsSongs">Faqsodoha tagedoha</td>
                <td class="arabic">فاقصدوها تجدوها</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="north">
                <td class="english">to your aid she is at hand.</td>
                <td class="enPhonicsSongs">Lema3onatekom tameel</td>
                <td class="arabic">لمعونتكم تميل</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="south">
                <td class="english">Remember us and have pity;</td>
                <td class="enPhonicsSongs">Ozkorina wanzorina</td>
                <td class="arabic">اذكرينا و أنظرينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="south">
                <td class="english">pity of a mother to her sons.</td>
                <td class="enPhonicsSongs">Nazrat alom lelbanin</td>
                <td class="arabic">نظر الأم للبنين</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="south">
                <td class="english">Accept us and count us</td>
                <td class="enPhonicsSongs">Waqbalina wa eg3alina</td>
                <td class="arabic">واقبلينا واجعلينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="south">
                <td class="english">among the true believers.</td>
                <td class="enPhonicsSongs">Bayna saf el3abedin</td>
                <td class="arabic">بين صف العابدين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_45" class="north">
                <td class="english">Help us and guide us</td>
                <td class="enPhonicsSongs">Engedina warshedina</td>
                <td class="arabic">انجدينا و أرشدينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="north">
                <td class="english">Towards the true faith</td>
                <td class="enPhonicsSongs">Na7wa sedq el e3teqad</td>
                <td class="arabic">نحو صدق الاعتقاد</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="north">
                <td class="english">Grant us a favor, and you’ll find</td>
                <td class="enPhonicsSongs">Wa emna7ina tarba7ina</td>
                <td class="arabic">وامنحينا تربحينا</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="north">
                <td class="english">In your son’s goodwill, joy entwined.</td>
                <td class="enPhonicsSongs">Lebneke 7osn el wedad</td>
                <td class="arabic">لإبنك حسن الوداد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_13">
            <tr id="table_${tableNumber}_row_49" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_50" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_51" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_52" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_14">
            <tr id="table_${tableNumber}_row_53" class="south">
                <td class="english">Don’t tire of praying</td>
                <td class="enPhonicsSongs">La tamali an tosali</td>
                <td class="arabic">لا تملي أن تصلي</td>
            </tr>
            <tr id="table_${tableNumber}_row_54" class="south">
                <td class="english">For the lost to return</td>
                <td class="enPhonicsSongs">Fee regoo3 elkhate’een</td>
                <td class="arabic">في رجوع الخاطئين</td>
            </tr>
            <tr id="table_${tableNumber}_row_55" class="south">
                <td class="english">Guide and teach them</td>
                <td class="enPhonicsSongs">3allemeehom warshedihom</td>
                <td class="arabic">علميهم وأرشديهم</td>
            </tr>
            <tr id="table_${tableNumber}_row_56" class="south">
                <td class="english">You are their true refuge</td>
                <td class="enPhonicsSongs">Enaki elmalga’ el amin.</td>
                <td class="arabic">إنك الملجأ الأمين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_15">
            <tr id="table_${tableNumber}_row_57" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_58" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_59" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_60" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_16">
            <tr id="table_${tableNumber}_row_61" class="north">
                <td class="english">And we ask to be granted,</td>
                <td class="enPhonicsSongs">Thoma nas’al an no’ahal</td>
                <td class="arabic">ثم نسأل أن نؤهل</td>
            </tr>
            <tr id="table_${tableNumber}_row_62" class="north">
                <td class="english">the eternal happiness,</td>
                <td class="enPhonicsSongs">Lesa3adat el khetam</td>
                <td class="arabic">لسعادة الختام</td>
            </tr>
            <tr id="table_${tableNumber}_row_63" class="north">
                <td class="english">where we will hear the repeated,</td>
                <td class="enPhonicsSongs">7aytho nasma3 an yokarar</td>
                <td class="arabic">حيث نسمع أن يكرر</td>
            </tr>
            <tr id="table_${tableNumber}_row_64" class="north">
                <td class="english">praise of your glorious name.</td>
                <td class="enPhonicsSongs">Mad7oki 3ala aldawam</td>
                <td class="arabic">مدحك علي الدوام</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_17">
            <tr id="table_${tableNumber}_row_65" class="refrain">
                <td class="english">The glory of Mary is magnified,</td>
                <td class="enPhonicsSongs">Magdo mariam yata3azam</td>
                <td class="arabic">مجد مريم يتعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_66" class="refrain">
                <td class="english">from sunrise to sunset.</td>
                <td class="enPhonicsSongs">Felmashareq walgherob</td>
                <td class="arabic">في المشارق والغروب</td>
            </tr>
            <tr id="table_${tableNumber}_row_67" class="refrain">
                <td class="english">Honor her and magnify her;</td>
                <td class="enPhonicsSongs">Karemoha 3azemoha</td>
                <td class="arabic">كرموها عظموها</td>
            </tr>
            <tr id="table_${tableNumber}_row_68" class="refrain">
                <td class="english">let her reign over your hearts.</td>
                <td class="enPhonicsSongs">Mallekoha felqoloob</td>
                <td class="arabic">ملكوها في القلوب</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }

function trulyRisen(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Truly Risen">
        <caption id="caption_table_${tableNumber}" class="caption">Truly Risen
        <span class="arabic-caption">قام حقاً</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Truly risen is the King of Peace,</td>
                <td class="arabic">قام حقا قام رئيس السلام</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">Alleluia, Alleluia to the Risen Lord.</td>
                <td class="arabic">هلليلويا هلليلويا الرب قام.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_3" class="north">
                <td class="english">Mary went on Sunday at the time of dawn,</td>
                <td class="arabic">مريم قد ذهبت فجر الأحد،</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="north">
                <td class="english">carrying for the body spice and incense.</td>
                <td class="arabic">بأطياب وحنوط للجسد.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_5" class="south">
                <td class="english">She found the stone already rolled away,</td>
                <td class="arabic">ويسوع قام حقا وانتصر،</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="south">
                <td class="english">And Christ is risen and He conquered.</td>
                <td class="arabic">ولذا الملاك دحرج الحجر.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">But Mary was outside weeping,</td>
                <td class="arabic">أما مريم فكانت خارجاً،</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">Crying, looking at the empty grave.</td>
                <td class="arabic">ببكاء ترى قبرا فارغاً.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">She saw Jesus as a strange man,</td>
                <td class="arabic">نظرت يسوع كشخص غريب،</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">Knowing not that He is the Beloved One.</td>
                <td class="arabic">ولا تدرى أنه شخص حبيب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_11" class="north">
                <td class="english">While crying she asked O Master,</td>
                <td class="arabic">فقالت وهي تبكي يا سيدي،</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="north">
                <td class="english">Where can I find my Lord and Beloved.</td>
                <td class="arabic">أين ربى وحبيبي أجد.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">He said to her O Mary rejoice,</td>
                <td class="arabic">فقال لها يا مريم أبشرى،</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">Go and tell My brothers and My sisters.</td>
                <td class="arabic">وإذهبي لإخوتى وأخبري.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">Mary went to His beloved disciples</td>
                <td class="arabic">مريم مضت لرسله الكرام،</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">Proclaiming that Jesus is risen.</td>
                <td class="arabic">بنداها بشرت الرب قام.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_17" class="south">
                <td class="english">Jesus Himself truly came among them,</td>
                <td class="arabic">ويسوع نفسه جاء وسطهم،</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="south">
                <td class="english">And He said to them, "Peace be unto you."</td>
                <td class="arabic">ولهم قد قال سلام لكم.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="english">He showed them His hands and also His side,</td>
                <td class="arabic">أراهم يديه أيضاً جنبه،</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english">They rejoiced in seeing the Beloved Lord.</td>
                <td class="arabic">ففرحوا حين رأوا شخصه.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">Alleluia, this news is very true,</td>
                <td class="arabic">هلليلويا قد تحقق الخبر،</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">Alleluia, He is risen and He conquered.</td>
                <td class="arabic">هلليلويا قام حقا وانتصر.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">Alleluia, for the Savior of mankind,</td>
                <td class="arabic">هلليلويا لمخلص البشر،</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">Alleluia He has crushed the might of death.</td>
                <td class="arabic">هلليلويا شوكة الموت كسر.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_13">
            <tr id="table_${tableNumber}_row_25" class="south">
                <td class="english">Alleluia risen is the King of Peace,</td>
                <td class="arabic">هلليلويا قام رئيس السلام،</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="south">
                <td class="english">Alleluia, Alleluia to the risen Lord.</td>
                <td class="arabic">هلليلويا هلليلويا الرب قام.</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }


function veryEarlySundayMorning(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Very Early Sunday Morning">
        <caption id="caption_table_${tableNumber}" class="caption">Very Early Sunday Morning
        <span class="arabic-caption">عند شق الفجر باكر</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="North">
                <td class="english">Very early Sunday morning,</td>
                <td class="arabic">عند شق الفجر باكر</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="North">
                <td class="english">While the guards were still asleep,</td>
                <td class="arabic">في صباح الأحد</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="North">
                <td class="english">[ Jesus is risen declaring,</td>
                <td class="arabic">قام رب المجد ناصر</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="North">
                <td class="english">Victory no more defeat] x2</td>
                <td class="arabic">شعبه للأبد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="refrain">
                <td class="english">Resurrection is my song,</td>
                <td class="arabic">أنت دست الموت وحدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="refrain">
                <td class="english">Resurrection gave me life,</td>
                <td class="arabic">يا يسوع الناصري</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="refrain">
                <td class="english">[ Resurrection made me strong,</td>
                <td class="arabic">مظهرا للخلق مجدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="refrain">
                <td class="english">Jesus my Lord is alive.] (x2)</td>
                <td class="arabic">بالجمال الباهر</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">Jesus is risen in glory,</td>
                <td class="arabic">كسر الموت جلاله</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">Heaven and earth sang and praised,</td>
                <td class="arabic">دحرج الصخر الكبير</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english">[ And the angel told the story,</td>
                <td class="arabic">من على القبر جماله</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english">He is risen as He said.] (x2)</td>
                <td class="arabic">بان بالنور الخطير</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="north">
                <td class="english">Mary Magdalene was looking,</td>
                <td class="arabic">قام بكر الراقدين</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="north">
                <td class="english">In the garden for her Lord,</td>
                <td class="arabic">ظافرًا معطى الحياة</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="north">
                <td class="english">[ While Jesus Himself was telling,</td>
                <td class="arabic">قام حقا و يقينًا</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="north">
                <td class="english">Her to go and spread the word.] (x2)</td>
                <td class="arabic">قام من بعد الوفاة</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">Resurrection is my song,</td>
                <td class="arabic">أنت دست الموت وحدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">Resurrection gave me life,</td>
                <td class="arabic">يا يسوع الناصري</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">[ Resurrection made me strong,</td>
                <td class="arabic">مظهرا للخلق مجدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">Jesus my Lord is alive.] (x2)</td>
                <td class="arabic">بالجمال الباهر</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">All the disciples were praying,</td>
                <td class="arabic">ها سيوف النصر سلت</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">They were really in great fear,</td>
                <td class="arabic">فوق هامات العدى</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english">[ When Mary came to them saying,</td>
                <td class="arabic">و جنود الشر ولت</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english">He is risen He is not here.] (x2)</td>
                <td class="arabic">هاربين سرمدا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="north">
                <td class="english">While they were in the room,</td>
                <td class="arabic">قمت من بين اللحود</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="north">
                <td class="english">Jesus Christ Himself appeared,</td>
                <td class="arabic">أنت يا صخر الدهور</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="north">
                <td class="english">[ My peace I give to you,</td>
                <td class="arabic">واهبا دار الخلود</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="north">
                <td class="english">And My peace with you I leave.] (x2)</td>
                <td class="arabic">لرقود في القبور</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="refrain">
                <td class="english">Resurrection is my song,</td>
                <td class="arabic">أنت دست الموت وحدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="refrain">
                <td class="english">Resurrection gave me life,</td>
                <td class="arabic">يا يسوع الناصري</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="refrain">
                <td class="english">[ Resurrection made me strong,</td>
                <td class="arabic">مظهرا للخلق مجدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="refrain">
                <td class="english">Jesus my Lord is alive.] (x2)</td>
                <td class="arabic">بالجمال الباهر</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="south">
                <td class="english">But Thomas did not believe,</td>
                <td class="arabic">و جموع الناس عادت</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="south">
                <td class="english">What the disciples had seen,</td>
                <td class="arabic">شاهدات بالقيام</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="south">
                <td class="english">[ So Jesus again appeared,</td>
                <td class="arabic">و السما و الأرض نادت</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="south">
                <td class="english">Showed him the place of the spear. (x2)</td>
                <td class="arabic">قام حقا قام قام</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="north">
                <td class="english">The heavenly hosts were singing,</td>
                <td class="arabic">و الجنود العلوية</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english">Welcoming our Glorious Lord,</td>
                <td class="arabic">لاقت الرب الصمد</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="north">
                <td class="english">[ And the joy is overwhelming,</td>
                <td class="arabic">بالأغاني السرمدية</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="north">
                <td class="english">He opened the doors of hope.] (x2)</td>
                <td class="arabic">فوق في دار الأبد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="refrain">
                <td class="english">Resurrection is my song,</td>
                <td class="arabic">أنت دست الموت وحدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="refrain">
                <td class="english">Resurrection gave me life,</td>
                <td class="arabic">يا يسوع الناصري</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="refrain">
                <td class="english">[ Resurrection made me strong,</td>
                <td class="arabic">مظهرا للخلق مجدك</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="refrain">
                <td class="english">Jesus my Lord is alive.] (x2)</td>
                <td class="arabic">بالجمال الباهر</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_45" class="south">
                <td class="english">Alleluia Alleluia,</td>
                <td class="arabic">دخلوا المجد العليا</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="south">
                <td class="english">Risen is the Lord of peace.</td>
                <td class="arabic">بتسابيح النعيم</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="south">
                <td class="english">[ Alleluia Alleluia,</td>
                <td class="arabic">و غناهم يا مسيا</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="south">
                <td class="english">Truly He is risen indeed.] (x2)</td>
                <td class="arabic">قمت واندك الجحيم</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function watchingUs(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Watching us">
        <caption id="caption_table_${tableNumber}" class="caption">Watching us
        <span class="arabic-caption">سامعانا .. شايفانا .. فاكرانا</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Watching us, hearing us, loving us,</td>
                <td class="enPhonicsSongs">Sam3ana, Shayfana, Fakrana</td>
                <td class="arabic">سامعانا .. شايفانا .. فاكرانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">she could never possibly forget us.</td>
                <td class="enPhonicsSongs">Mes momken abadan tensana</td>
                <td class="arabic">مش ممكن أبدًا تنسانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">She’s St. Mary, Mother of Jesus who saved us.</td>
                <td class="enPhonicsSongs">De el3adra om yasoo3 mawlana</td>
                <td class="arabic">دي العدرا أم يسوع مولانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">We’re her children, and she’s always guiding us.</td>
                <td class="enPhonicsSongs">We7na ekhawato we neb’a weladha we ter3ana</td>
                <td class="arabic">وإحنا إخواته نبقى ولادها وترعانا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">She’s in heaven in her glory</td>
                <td class="enPhonicsSongs">Felsama heya bemagd 3azeem</td>
                <td class="arabic">في السما هي بمجد عظيم</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">The pride of all our saints (x2)</td>
                <td class="enPhonicsSongs">Fakhr we tag elqedeseen</td>
                <td class="arabic">فخر وتاج للقديسين</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">Constantly, she´s interceding</td>
                <td class="enPhonicsSongs">Laken tool elwa’t betotlob</td>
                <td class="arabic">لكن طول الوقت بتطلب</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">With the saints on our behalf.</td>
                <td class="enPhonicsSongs">3ana di ‘om we e7na baneen</td>
                <td class="arabic">عنا دي أم وإحنا بنين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="refrain">
                <td class="english">Watching us, hearing us, loving us,</td>
                <td class="enPhonicsSongs">Sam3ana, Shayfana, Fakrana</td>
                <td class="arabic">سامعانا .. شايفانا .. فاكرانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="refrain">
                <td class="english">she could never possibly forget us.</td>
                <td class="enPhonicsSongs">Mes momken abadan tensana</td>
                <td class="arabic">مش ممكن أبدًا تنسانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="refrain">
                <td class="english">She’s St. Mary, Mother of Jesus who saved us.</td>
                <td class="enPhonicsSongs">De el3adra om yasoo3 mawlana</td>
                <td class="arabic">دي العدرا أم يسوع مولانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="refrain">
                <td class="english">We’re her children, and she’s always guiding us.</td>
                <td class="enPhonicsSongs">We7na ekhawato we neb’a weladha we ter3ana</td>
                <td class="arabic">وإحنا إخواته نبقى ولادها وترعانا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="south">
                <td class="english">She´s in heaven but she appears</td>
                <td class="enPhonicsSongs">Felsama heya bas betezhar</td>
                <td class="arabic">في السما هي بس بتظهر</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="south">
                <td class="english">To her children everywhere (2)</td>
                <td class="enPhonicsSongs">Wast weladha fee kol makan</td>
                <td class="arabic">وسط ولادها في كل مكان</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="south">
                <td class="english">Spreading on earth love and peace</td>
                <td class="enPhonicsSongs">Tonshor wast el  ard salam</td>
                <td class="arabic">تنشر وسط الأرض سلام</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="south">
                <td class="english">and preserving faith for all.</td>
                <td class="enPhonicsSongs">We tethabetna 3ala aleeman</td>
                <td class="arabic">وتثبتنا على الإيمان</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="refrain">
                <td class="english">Watching us, hearing us, loving us,</td>
                <td class="enPhonicsSongs">Sam3ana, Shayfana, Fakrana</td>
                <td class="arabic">سامعانا .. شايفانا .. فاكرانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="refrain">
                <td class="english">she could never possibly forget us.</td>
                <td class="enPhonicsSongs">Mes momken abadan tensana</td>
                <td class="arabic">مش ممكن أبدًا تنسانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="refrain">
                <td class="english">She’s St. Mary, Mother of Jesus who saved us.</td>
                <td class="enPhonicsSongs">De el3adra om yasoo3 mawlana</td>
                <td class="arabic">دي العدرا أم يسوع مولانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="refrain">
                <td class="english">We’re her children, and she’s always guiding us.</td>
                <td class="enPhonicsSongs">We7na ekhawato we neb’a weladha we ter3ana</td>
                <td class="arabic">وإحنا إخواته نبقى ولادها وترعانا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="north">
                <td class="english">She´s in heaven but she sees,</td>
                <td class="enPhonicsSongs">Felsama heya laken shayfa</td>
                <td class="arabic">في السما هي لكن شايفة</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="north">
                <td class="english">when her children are in tears (2)</td>
                <td class="enPhonicsSongs">Deeqet kol ebn wa7eed</td>
                <td class="arabic">ضيقة كل ابن وحيد</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="north">
                <td class="english">Mettias was handcuffed in jail</td>
                <td class="enPhonicsSongs">Metyas kan felsegn moqayad</td>
                <td class="arabic">متياس كان في السجن مقيد</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="north">
                <td class="english">But she came and broke the chains.</td>
                <td class="enPhonicsSongs">Ga’at 7allet el 7adeed</td>
                <td class="arabic">جاءت حلت الحديد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">Watching us, hearing us, loving us,</td>
                <td class="enPhonicsSongs">Sam3ana, Shayfana, Fakrana</td>
                <td class="arabic">سامعانا .. شايفانا .. فاكرانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">she could never possibly forget us.</td>
                <td class="enPhonicsSongs">Mes momken abadan tensana</td>
                <td class="arabic">مش ممكن أبدًا تنسانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">She’s St. Mary, Mother of Jesus who saved us.</td>
                <td class="enPhonicsSongs">De el3adra om yasoo3 mawlana</td>
                <td class="arabic">دي العدرا أم يسوع مولانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">We’re her children, and she’s always guiding us.</td>
                <td class="enPhonicsSongs">We7na ekhawato we neb’a weladha we ter3ana</td>
                <td class="arabic">وإحنا إخواته نبقى ولادها وترعانا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="south">
                <td class="english">She´s in heaven but she hears</td>
                <td class="enPhonicsSongs">Felsama heya laken sam3a</td>
                <td class="arabic">في السما هي لكن سامعة</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="south">
                <td class="english">the pleading of a great pope (x2)</td>
                <td class="enPhonicsSongs">Salat we ‘aneen baba mo3azam</td>
                <td class="arabic">صلاة وأنين بابا معظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="south">
                <td class="english">Anba Abraam come out and meet,</td>
                <td class="enPhonicsSongs">Ya anba abra’am okhrog hatla’ee</td>
                <td class="arabic">يا أنبا ابرآم اخرج هتلاقي</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="south">
                <td class="english">the faith that moved the mountain.</td>
                <td class="enPhonicsSongs">Dabagh yanqol elmoqattam</td>
                <td class="arabic">دباغ ينقل المقطم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="refrain">
                <td class="english">Watching us, hearing us, loving us,</td>
                <td class="enPhonicsSongs">Sam3ana, Shayfana, Fakrana</td>
                <td class="arabic">سامعانا .. شايفانا .. فاكرانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="refrain">
                <td class="english">she could never possibly forget us.</td>
                <td class="enPhonicsSongs">Mes momken abadan tensana</td>
                <td class="arabic">مش ممكن أبدًا تنسانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="refrain">
                <td class="english">She’s St. Mary, Mother of Jesus who saved us.</td>
                <td class="enPhonicsSongs">De el3adra om yasoo3 mawlana</td>
                <td class="arabic">دي العدرا أم يسوع مولانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="refrain">
                <td class="english">We’re her children, and she’s always guiding us.</td>
                <td class="enPhonicsSongs">We7na ekhawato we neb’a weladha we ter3ana</td>
                <td class="arabic">وإحنا إخواته نبقى ولادها وترعانا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="north">
                <td class="english">She´s in heaven but she leaves</td>
                <td class="enPhonicsSongs">Felsama heya laken fakra</td>
                <td class="arabic">في السما هي لكن فاكرة</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="north">
                <td class="english">many miracles where she appears. (2x)</td>
                <td class="enPhonicsSongs">Tezkar leeha fee kol makan</td>
                <td class="arabic">تذكار ليها في كل مكان</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="north">
                <td class="english">In the church she comes and shares,</td>
                <td class="enPhonicsSongs">Felkeneesa te7dar wetsharek</td>
                <td class="arabic">في الكنيسة تحضر وتشارك</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="north">
                <td class="english">with faith we witness her care.</td>
                <td class="enPhonicsSongs">We7na neshofha eeman we 3ayan</td>
                <td class="arabic">وإحنا نشوفها إيمان وعيان</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="refrain">
                <td class="english">Watching us, hearing us, loving us,</td>
                <td class="enPhonicsSongs">Sam3ana, Shayfana, Fakrana</td>
                <td class="arabic">سامعانا .. شايفانا .. فاكرانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="refrain">
                <td class="english">she could never possibly forget us.</td>
                <td class="enPhonicsSongs">Mes momken abadan tensana</td>
                <td class="arabic">مش ممكن أبدًا تنسانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="refrain">
                <td class="english">She’s St. Mary, Mother of Jesus who saved us.</td>
                <td class="enPhonicsSongs">De el3adra om yasoo3 mawlana</td>
                <td class="arabic">دي العدرا أم يسوع مولانا</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="refrain">
                <td class="english">We’re her children, and she’s always guiding us.</td>
                <td class="enPhonicsSongs">We7na ekhawato we neb’a weladha we ter3ana</td>
                <td class="arabic">وإحنا إخواته نبقى ولادها وترعانا</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
}

function yourLoveOMary(tableNumber) { 
    const isOnePageChecked = userSettings('Songs', 'onePage'); // Example usage
    let tbodyClass = isOnePageChecked ? 'class= "scaling-container"' : '';

let html = `
    
    <table id="table_${tableNumber}" title="Your Love, O Mary">
        <caption id="caption_table_${tableNumber}" class="caption">Your Love, O Mary
        <span class="arabic-caption">حُبُكِ يا مريم</span></caption>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_0">
            <tr id="table_${tableNumber}_row_1" class="Refrain">
                <td class="english">Your love, O Mary</td>
                <td class="enPhonicsSongs">7oboki ya mariam</td>
                <td class="arabic">حُبُكِ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_2" class="Refrain">
                <td class="english">is our greatest hope,</td>
                <td class="enPhonicsSongs">Ghayat almona</td>
                <td class="arabic">غاية المُنى</td>
            </tr>
            <tr id="table_${tableNumber}_row_3" class="Refrain">
                <td class="english">O Mother of the Magnified,</td>
                <td class="enPhonicsSongs">Ya om almo3azam</td>
                <td class="arabic">يا أم المعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_4" class="Refrain">
                <td class="english">be our mother.</td>
                <td class="enPhonicsSongs">Koni omona</td>
                <td class="arabic">كوني أمنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_2">
            <tr id="table_${tableNumber}_row_5" class="north">
                <td class="english">Your Son reminded you of us,</td>
                <td class="enPhonicsSongs">Ebnoki awsaki</td>
                <td class="arabic">إبنكِ أوصاكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_6" class="north">
                <td class="english">on the Cross,</td>
                <td class="enPhonicsSongs">Bena 3ala alsalib</td>
                <td class="arabic">بنا على الصليب</td>
            </tr>
            <tr id="table_${tableNumber}_row_7" class="north">
                <td class="english">He gave you to the beloved,</td>
                <td class="enPhonicsSongs">A3tana eyaki</td>
                <td class="arabic">أعطانا إياكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_8" class="north">
                <td class="english">and gave you to us.</td>
                <td class="enPhonicsSongs">Fee shakhs el 7abib</td>
                <td class="arabic">في شخصِ الحبيب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_3">
            <tr id="table_${tableNumber}_row_9" class="south">
                <td class="english">As our kind mother,</td>
                <td class="enPhonicsSongs">Kal om el 7anoona</td>
                <td class="arabic">كالأم الحنونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_10" class="south">
                <td class="english">we take refuge in you,</td>
                <td class="enPhonicsSongs">Bek nasta3in</td>
                <td class="arabic">بكِ نستعين</td>
            </tr>
            <tr id="table_${tableNumber}_row_11" class="south">
                <td class="english">Show your help, O Mary,</td>
                <td class="enPhonicsSongs">Ezheri elma3ona</td>
                <td class="arabic">اظهري المعونة</td>
            </tr>
            <tr id="table_${tableNumber}_row_12" class="south">
                <td class="english">to your children.</td>
                <td class="enPhonicsSongs">Menk lelbanin</td>
                <td class="arabic">منكِ للبنين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_4">
            <tr id="table_${tableNumber}_row_13" class="refrain">
                <td class="english">Your love, O Mary</td>
                <td class="enPhonicsSongs">7oboki ya mariam</td>
                <td class="arabic">حُبُكِ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_14" class="refrain">
                <td class="english">is our greatest hope,</td>
                <td class="enPhonicsSongs">Ghayat almona</td>
                <td class="arabic">غاية المُنى</td>
            </tr>
            <tr id="table_${tableNumber}_row_15" class="refrain">
                <td class="english">O Mother of the Magnified,</td>
                <td class="enPhonicsSongs">Ya om almo3azam</td>
                <td class="arabic">يا أم المعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_16" class="refrain">
                <td class="english">be our mother.</td>
                <td class="enPhonicsSongs">Koni omona</td>
                <td class="arabic">كونى أمنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_5">
            <tr id="table_${tableNumber}_row_17" class="north">
                <td class="english">When we have hope in you,</td>
                <td class="enPhonicsSongs">Kol ma nargoki</td>
                <td class="arabic">كل ما نرجوكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_18" class="north">
                <td class="english">our souls you heal,</td>
                <td class="enPhonicsSongs">Nefosna tatib</td>
                <td class="arabic">نفوسنا تطيب</td>
            </tr>
            <tr id="table_${tableNumber}_row_19" class="north">
                <td class="english">Whenever we hope from you,</td>
                <td class="enPhonicsSongs">Kol ma nargoki</td>
                <td class="arabic">كل ما نرجوكِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_20" class="north">
                <td class="english">in the valley of sorrow.</td>
                <td class="enPhonicsSongs">Men wadi elna7ib</td>
                <td class="arabic">من وادي النَحِيب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_6">
            <tr id="table_${tableNumber}_row_21" class="south">
                <td class="english">We ask for protection,</td>
                <td class="enPhonicsSongs">Nargoki el7emaya</td>
                <td class="arabic">نرجوكِ الحماية</td>
            </tr>
            <tr id="table_${tableNumber}_row_22" class="south">
                <td class="english">from all evils,</td>
                <td class="enPhonicsSongs">Men kol elshoror</td>
                <td class="arabic">من كل الشرور</td>
            </tr>
            <tr id="table_${tableNumber}_row_23" class="south">
                <td class="english">Show us your care, O Mary,</td>
                <td class="enPhonicsSongs">Da3efi el3enaya</td>
                <td class="arabic">ضاعِفي العناية</td>
            </tr>
            <tr id="table_${tableNumber}_row_24" class="south">
                <td class="english">in the Day of Judgement.</td>
                <td class="enPhonicsSongs">Fi yom elneshor</td>
                <td class="arabic">في يوم النشور</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_7">
            <tr id="table_${tableNumber}_row_25" class="refrain">
                <td class="english">Your love, O Mary</td>
                <td class="enPhonicsSongs">7oboki ya mariam</td>
                <td class="arabic">حُبُكِ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_26" class="refrain">
                <td class="english">is our greatest hope,</td>
                <td class="enPhonicsSongs">Ghayat almona</td>
                <td class="arabic">غاية المُنى</td>
            </tr>
            <tr id="table_${tableNumber}_row_27" class="refrain">
                <td class="english">O Mother of the Magnified,</td>
                <td class="enPhonicsSongs">Ya om almo3azam</td>
                <td class="arabic">يا أم المعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_28" class="refrain">
                <td class="english">be our mother.</td>
                <td class="enPhonicsSongs">Koni omona</td>
                <td class="arabic">كوني أمنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_8">
            <tr id="table_${tableNumber}_row_29" class="north">
                <td class="english">O Mother of yearning,</td>
                <td class="enPhonicsSongs">Ya om al raga’</td>
                <td class="arabic">يا أمَ الرجاءِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_30" class="north">
                <td class="english">and beautiful love,</td>
                <td class="enPhonicsSongs">Wal7ob el gamil</td>
                <td class="arabic">والحب الجميل</td>
            </tr>
            <tr id="table_${tableNumber}_row_31" class="north">
                <td class="english">O Door of Heaven,</td>
                <td class="enPhonicsSongs">Ya bab alsama’</td>
                <td class="arabic">يا بابَ السماءِ</td>
            </tr>
            <tr id="table_${tableNumber}_row_32" class="north">
                <td class="english">delightful is your love.</td>
                <td class="enPhonicsSongs">7obok elsabil</td>
                <td class="arabic">حُبُكِ السبيل</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_9">
            <tr id="table_${tableNumber}_row_33" class="south">
                <td class="english">The mother said,</td>
                <td class="enPhonicsSongs">Qalat el ‘a’ema</td>
                <td class="arabic">قالت الأئمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_34" class="south">
                <td class="english">our Savior desired,</td>
                <td class="enPhonicsSongs">Fadina arad</td>
                <td class="arabic">فادينا أراد</td>
            </tr>
            <tr id="table_${tableNumber}_row_35" class="south">
                <td class="english">That all your blessings, O Mary,</td>
                <td class="enPhonicsSongs">Ena kola ne3ma</td>
                <td class="arabic">إن كل نعمة</td>
            </tr>
            <tr id="table_${tableNumber}_row_36" class="south">
                <td class="english">will be valuable.</td>
                <td class="enPhonicsSongs">Menki tastafad</td>
                <td class="arabic">منك تستفاد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_10">
            <tr id="table_${tableNumber}_row_37" class="refrain">
                <td class="english">Your love, O Mary</td>
                <td class="enPhonicsSongs">7oboki ya mariam</td>
                <td class="arabic">حُبُكِ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_38" class="refrain">
                <td class="english">is our greatest hope,</td>
                <td class="enPhonicsSongs">Ghayat almona</td>
                <td class="arabic">غاية المُنى</td>
            </tr>
            <tr id="table_${tableNumber}_row_39" class="refrain">
                <td class="english">O Mother of the Magnified,</td>
                <td class="enPhonicsSongs">Ya om almo3azam</td>
                <td class="arabic">يا أم المعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_40" class="refrain">
                <td class="english">be our mother.</td>
                <td class="enPhonicsSongs">Koni omona</td>
                <td class="arabic">كوني أمنا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_11">
            <tr id="table_${tableNumber}_row_41" class="north">
                <td class="english">The fortune of the servants,</td>
                <td class="enPhonicsSongs">La yakon ya mariam</td>
                <td class="arabic">لا يكون يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_42" class="north">
                <td class="english">O Mary, is not,</td>
                <td class="enPhonicsSongs">7az el3abedin</td>
                <td class="arabic">حظ العابدين</td>
            </tr>
            <tr id="table_${tableNumber}_row_43" class="north">
                <td class="english">Like a day in torment,</td>
                <td class="enPhonicsSongs">Yawman fi gohanam</td>
                <td class="arabic">يوماً في جهنم</td>
            </tr>
            <tr id="table_${tableNumber}_row_44" class="north">
                <td class="english">with the unbelievers.</td>
                <td class="enPhonicsSongs">Methl alkaferin</td>
                <td class="arabic">مثل الكافرين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_12">
            <tr id="table_${tableNumber}_row_45" class="south">
                <td class="english">Show us your glory,</td>
                <td class="enPhonicsSongs">Ezheri sakhaki</td>
                <td class="arabic">اظهري سخاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_46" class="south">
                <td class="english">in every challenge,</td>
                <td class="enPhonicsSongs">Fi kol ela7qab</td>
                <td class="arabic">في كل الأحقاب</td>
            </tr>
            <tr id="table_${tableNumber}_row_47" class="south">
                <td class="english">He who comes to you, O Mary,</td>
                <td class="enPhonicsSongs">Enna ma ataki</td>
                <td class="arabic">إن ما آتاك</td>
            </tr>
            <tr id="table_${tableNumber}_row_48" class="south">
                <td class="english">is asking for your aid.</td>
                <td class="enPhonicsSongs">Taleban wakhab</td>
                <td class="arabic">طالب وخاب</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass} id="table_${tableNumber}_tbody_13">
            <tr id="table_${tableNumber}_row_49" class="refrain">
                <td class="english">Your love, O Mary</td>
                <td class="enPhonicsSongs">7oboki ya mariam</td>
                <td class="arabic">حُبُكِ يا مريم</td>
            </tr>
            <tr id="table_${tableNumber}_row_50" class="refrain">
                <td class="english">is our greatest hope,</td>
                <td class="enPhonicsSongs">Ghayat almona</td>
                <td class="arabic">غاية المُنى</td>
            </tr>
            <tr id="table_${tableNumber}_row_51" class="refrain">
                <td class="english">O Mother of the Magnified,</td>
                <td class="enPhonicsSongs">Ya om almo3azam</td>
                <td class="arabic">يا أم المعظم</td>
            </tr>
            <tr id="table_${tableNumber}_row_52" class="refrain">
                <td class="english">be our mother.</td>
                <td class="enPhonicsSongs">Koni omona</td>
                <td class="arabic">كوني أمنا</td>
            </tr>
        </tbody>
    </table>
    
    
    `;return html;
    }

export {
  amenAmenCome,
  beFaithfulUntoDeath,
  blessedAreYouOMary,
  shineBright,
  dontLeaveMeAlone,
  drawAPortraitOfTheVirgin,
  hailToYouOMotherOfComfort,
  hailToMary,
  howSweetAreYouOMary,
  iCanHearMySaviorCalling,
  inTheShadeOfYourProtection,
  myCopticChurch,
  myCopticChurchSoGreat,
  oBeloved,
  oMaryOurMotherTheBelovedOfUsAll,
  oMaryOurMotherYouAreTheMotherOfOurLord,
  oMotherOfLight,
  oMotherOfLightOBeautiful,
  oSeekerToMeetJesus,
  ourMotherOVirgin,
  overTheDomes,
  oVirginMary,
  oVirginMyMotherShine,
  oYouWhoReceivedTheMostHonorableGift,
  theGloryOfMary,
  trulyRisen,
  veryEarlySundayMorning,
  watchingUs,
  yourLoveOMary,
};