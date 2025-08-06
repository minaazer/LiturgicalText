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
  

function glorification() {
    const isOnePageChecked = userSettings('Glorification', 'onePage'); // Example usage
    let tbodyClass = '';
    if (isOnePageChecked) {
        tbodyClass = 'class= "scaling-container"';
    }

const html = `
<body>
<div class="section">
    <table id="table_0" title="Ekesmarout" style="display: table;">
        <caption class="caption" id="caption_table_0">Blessed Are You
            <span class="coptic-caption">Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ</span>
            <span class="arabic-caption">مبارك أنت</span>
            </caption>
        <tbody ${tbodyClass} id="table_0_tbody_0">
            <tr id="table_0_row_1" class="south">
                <td class="english" >Blessed are You Truly : with Your Good Father
                    : and the Holy Spirit : for You have come and saved us.</td>
                <td class="coptic" >Ⲕⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲁ̀ⲗⲏⲑⲱⲥ : ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ
                    Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ : ϫⲉ ⲁⲕⲓ̀ ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                <td class="arabic">مبارك أنت بالحقيقة مع أبيك الصالح والروح القدس ، لأنك أتيت وخلصتنا.</td>
            </tr>
            <tr id="table_0_row_2" class="north">
                <td class="enPhonics" >Ek-esmaro-oot alithos: nem pek yot en
                    agathos: nem pi epnevma ethowab: je ak-ee ak-soti emmon.</td>
                <td class="arPhonics" >إكزمارؤوت آليثوس. نيم بيك يوت ان أغاثوس نيم
                    بي ابنفما اثؤواب. جي آك اي أووه آك سوتي امون.</td>
            </tr>
            <tr id="table_0_row_3" class="south">
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_0_tbody_1" >
            <tr id="table_0_row_4" class="north" >
                <td class="english">Through the prayers: of our honored father: the high priest Papa Abba Tawadros, and our father the Bishop / Metropolitan Abba (…) O Lord, grant us the forgiveness of our sins.</td>
                <td class="coptic">Ϩⲓⲧⲉⲛ ⲛⲓⲉ̀ⲩⲭⲏ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ ⲉⲧⲧⲁⲓⲏ̀ⲟⲩⲧ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲡⲁⲡⲁ ⲁⲃⲃⲁ (...): ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ / ⲙ̀ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ ⲁⲃⲃⲁ (...) Ⲡ̅ⲟ̅ⲥ ...</td>
                <td class="arabic">بصلوات أبينا المكرم رئيس الكهنة البابا الأنبا تواضروس. وأبينا الأسقف / المطران الأنبا (...). يا رب أنعم لنا بمغفرة خطايانا.</td>
            </tr>
            <tr id="table_0_row_5" class="south">
                <td class="enPhonics" >Hiten ni-evshi: ente penyot ettayoot en
                    arshee erevs Papa Avva Tawadros: nem peniot enepiskopos/emmetropolitees Avva (…) Epshois ari-ehmot
                    nan empiko evol ente nennovi.</td>
            </tr>
        </tbody>
    </table>

    <table id="table_1" title="Shere Theotoke" style="display: table;">
        <caption class="caption" id="caption_table_1">Rejoice O Theotokos
        <span class="coptic-caption">Ⲭⲉⲣⲉ Ⲑⲉⲟ̀ⲧⲟⲕⲉ</span>
        <span class="arabic-caption">إفرحي يا والدة الإله</span>
        </caption>

        <tbody ${tbodyClass}  id="table_1_tbody_0">
            <tr id="table_1_row_0" class="north">
                <td class="english" >Rejoice O Theotokos, the Virgin, the
                    intercessor of the world to the Savior our God; we present praise to Him, and we exalt you.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ Ⲑⲉⲟ̀ⲧⲟⲕⲉ Ⲡⲁⲣⲑⲉⲛⲉ ⲟ̀ ⲡ̀ⲣⲉⲥⲃⲉⲃⲟⲩ ⲥⲉ
                    ⲩ̀ⲡⲉⲣⲧⲟⲩ ⲕⲟⲥⲙⲟⲩ ⲧⲟⲛ ⲥⲱⲧⲏⲣⲓⲁ ⲕⲉ ⲧⲟⲛ Ⲑⲉⲟⲛ ⲏ̀ⲙⲱⲛ: ⲡ̀ⲣⲟⲥⲫⲉⲣⲓⲛ ⲡⲁⲛ ⲧⲁⲧⲟⲛ ⲩⲙⲛⲟⲛ ⲏ̀ⲙⲱⲛ: ⲥⲉⲙⲉⲅⲁⲗⲓⲛⲟⲙⲉⲛ.</td>
                <td class="arabic">إفرحي يا والدة الإله العذراء يا شفيعة في العالم عند المخلص إلهنا، نقدم له كل تسبيحنا،
                    ونعظمِك.</td>
            </tr>
            <tr id="table_1_row_1" class="south">
                <td class="enPhonics" >Shere Theotoke parthene o epres-vevoo ce
                    ee-pertoo kosmoo ton sotiria ke ton Theon e-moun, epros-ferin pan taton em-non ee-moun,
                    cemega-linomen.</td>
                <td class="arPhonics" >شيرى ثيئوطوكى بارثينه أو إبر سفيه فين سيه
                    إف بيرطو كوزموس طون ثيه أون إيمون: إبروس فيه رين بان طاطون إمنون إيمون: سيه ميه غالينومين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_1_tbody_1">
            <tr id="table_1_row_2" class="north">
                <td class="english" >Rejoice O Theotokos, the Virgin, the Mother
                    of Emmanuel who is not provoked with marriage.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ Ⲑⲉⲟ̀ⲧⲟⲕⲉ Ⲡⲁⲣⲑⲉⲛⲉ: Ⲙⲏⲧⲉⲣ ⲧⲟⲩ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ⲧⲏⲥ
                    ⲡⲓⲛⲁ ⲡⲓⲣⲟⲅⲁⲙⲏ.</td>
                <td class="arabic">إفرحي يا والدة الإله العذراء، والدة عمانوئيل يا غير مجربة بزواج.</td>
            </tr>
            <tr id="table_1_row_3" class="south">
                <td class="enPhonics" >Shere Theotoke parthene, Meeter too
                    Emmanueel tees pina pirogami.</td>
                <td class="arPhonics" >شيرى ثيئوطوكى بارثينه مي تيرطو إممانوئيل
                    تيس بينا بى روغامى</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_1_tbody_2">
            <tr id="table_1_row_4" class="north">
                <td class="english" >Rejoice O you who is of the rank of the
                    angels; Rejoice O our intercessor before our God the Father; We exalt you.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲑⲏⲉ̀ⲧⲁⲝⲓⲥ ⲛ̀ⲁⲅⲅⲉⲗⲟⲛ: ⲭⲉⲣⲉ ⲑⲏⲡ̀ⲣⲟⲥⲧⲁⲥⲓⲁ
                    ⲏ̀ⲙⲱⲛ ⲧⲟⲩ Ⲡⲁⲧⲣⲓ ⲕⲉ ⲧⲟⲛ Ⲑⲉⲟⲛ ⲏ̀ⲙⲱⲛ: ⲥⲉⲙⲉⲅⲁⲗⲓⲛⲟⲙⲉⲛ.</td>
                <td class="arabic">إفرحي يا طقس الملائكة، إفرحي يا شفيعتنا عند الآب إلهنا، نعظمِك.</td>
            </tr>
            <tr id="table_1_row_5" class="south">
                <td class="enPhonics" >Shere thea-e-taksis en-angelon, shere
                    thea-eprostasia e-moun too Patri ke ton Theon e-moun, cemega-linomen.</td>
                <td class="arPhonics" >شيرى ثى إيه طاكسيس إن أنجيلون: شيرى ثى
                    إبروس طاسيا إيمون طون باطرى كيه طون ثيه أون إيمون: سيه ميه غالينومين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_1_tbody_3">
            <tr id="table_1_row_6" class="north">
                <td class="english" >Rejoice O Mother of God, the Virgin, to You O
                    God is due praise in Zion, and the vows will be fulfilled to You in Jerusalem: We exalt you.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲑⲉⲟ̀ⲧⲟⲕⲉ ⲡⲁⲣⲑⲉⲛⲉ: ⲛ̀ⲑⲟⲕ Ⲫϯ ϥ̀ⲉⲣϣⲁⲩ ⲛⲁⲕ:
                    ⲛ̀ϫⲉ ⲡⲓϫⲱ ϧⲉⲛ Ⲥⲓⲱⲛ: ⲉⲩⲉ̀ϯ ⲛⲁⲕ ⲛ̀ϩⲁⲛⲉⲩⲭⲏ ϧⲉⲛ Ⲓ̅ⲗ̅ⲏ̅ⲙ: ⲥⲉⲙⲉⲅⲁⲗⲓⲛⲟⲙⲉⲛ.</td>
                <td class="arabic">افرحى يا والدة الاله العذراء: انت يا الله يجب لك التسبيح فى صهيون: وتوفى لك النذور فى
                    اورشليم: نعظمك.</td>
            </tr>
            <tr id="table_1_row_7" class="south">
                <td class="enPhonics" >Shere Theo-toke parthene: enthok evnoti
                    efer-shav nak: enje pigo khen Sion: ev-a-tee nak enhan-evki khen Yero-saleem: cemegalinomen.</td>
                <td class="arPhonics" >شيرى ثيئوطوكى بارثينى: إنثوك إفنوتى إف إير
                    شاف ناك: إنجى بى جو خين سيون: إف إيتى ناك إنهان إفشى خين ييروساليم: سى ميغالينومين.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_1_tbody_4">
            <tr id="table_1_row_8" class="north">
                <td class="english" >Rejoice O you full of grace, Mary, the Lord
                    is with you.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲕⲉ ⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ Ⲙⲁⲣⲓⲁ̀ ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ:
                </td>
                <td class="arabic">افرحى يا ممتلئة نعمة يا مريم الرب معك</td>
            </tr>
            <tr id="table_1_row_9" class="south">
                <td class="enPhonics" >Shere ke kari-tomenee Maria O Kirios
                    metacou</td>
                <td class="arPhonics" >شيرى كى خاريتومينى ماريا أوكيريوس ميتاسو
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <table id="table_2" title="O Kirios" style="display: table;">
        <caption class="caption" id="caption_table_2">The Lord is With You
        <span class="coptic-caption">Ⲟⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ</span>
        <span class="arabic-caption">الرب معك</span>
        </caption>
        <tbody ${tbodyClass}  id="table_2_tbody_0">
            <tr id="table_2_row_1" class="south">
                <td class="english" >The Lord is with you. Holy is, the Father,
                    the King Who observes our humility, the essence of glory, with the Holy Spirit.</td>
                <td class="coptic" >Ⲟⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ : ⲁⲅⲓⲟⲥ ⲓⲥⲧⲏⲛ ⲟⲩⲡⲁⲧⲏⲣ
                    ⲃⲁⲥⲓⲗⲉⲩⲥⲓⲛ ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀ : ⲅⲉⲛⲟⲥ ⲛ̀ⲇⲟⲝⲓⲛ : ⲧⲟ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ.</td>
                <td class="arabic">الرب معك: قدوس الآب الملك الذى نظر الي إتضاعنا وجنس المجد والروح القدس</td>
            </tr>
            <tr id="table_2_row_2" class="north">
                <td class="enPhonics" >O Kee-rios metaso. agios istin: opateer
                    vasilevsin: the-pen-thevio: genos enzoxin: tou epnevma to agio:</td>
                <td class="arPhonics" >أو كيريوس ميتاسو/ آجيوس إستين/أوباتير فاسى
                    ليف سين/ ثيه بين ثيفيو/ جينوس إن ذوكسين/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_1">
            <tr id="table_2_row_4" class="north">
                <td class="english" >Just is, the Father, our supporter in our
                    weaknesses, for the sake of the Heavenly life, with the Holy Spirit.</td>
                <td class="coptic" >Ⲇⲓⲕⲉⲟⲥ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲉ̀ⲟⲩⲃⲟⲏⲑⲓⲛ :
                    ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀ : ⲍⲱⲏⲛ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁⲅⲓⲟⲩ.</td>
                <td class="arabic">عادل هو الآب معيننا فى ضعفنا من أجل الحياة السمائية والروح القدس.</td>
            </tr>
            <tr id="table_2_row_5" class="south">
                <td class="enPhonics" >Zee-keos istin: opateer eovoeethin:
                    the-penthevio: zoeen en-eporanion: tou epnevma to agio:</td>
                <td class="arPhonics" >ذيكيئوس إستين/ أوباتير إيه فوى ثين/ ثيه بين
                    ثيفيو/ ذو إين إن إيبورانيون/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_2">
            <tr id="table_2_row_7" class="south">
                <td class="english" >Praise belongs to the Father, the treasure of
                    our humility, and Jesus Who is from Heaven, with the Holy Spirit</td>
                <td class="coptic" >̀ Ⲏⲡⲁⲛⲟⲥ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲑⲩⲥⲁⲩⲣⲓⲛ :
                    ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀ : Ⲓⲏⲥⲟⲩⲥ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ : ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁⲅⲓⲟⲩ.</td>
                <td class="arabic">المديح يليق بالآب كنز إتضاعنا ويسوع السمائي والروح القدس.</td>
            </tr>
            <tr id="table_2_row_8" class="north">
                <td class="enPhonics" >Ee-panos istin: opateer the-savrin:
                    the-penthevio: ieesos en-eporanion: to epnevma tou agio:</td>
                <td class="arPhonics" >إيبانوس إستين/ أوباتير ثى سافرين/ثيه بين
                    ثيفيو/إيسوس إن إيبورانيون/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_3">
            <tr id="table_2_row_10" class="north">
                <td class="english" >The Lord, the Father, Who speaks in Heavenly
                    truth, Who took the form of our humility, with the Holy Spirit</td>
                <td class="coptic" >Ⲕⲩⲣⲓⲟⲥ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲗⲁⲗⲉⲩⲥⲓⲛ : ⲑⲉⲡⲉⲛⲑⲉⲩⲓⲟ̀
                    : ⲙⲁⲧⲟⲩⲥ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ.</td>
                <td class="arabic">الرب الآب المتكلم بالحق السمائي الذى شابهنا في اتضاعنا والروح القدس.</td>
            </tr>
            <tr id="table_2_row_11" class="south">
                <td class="enPhonics" >Kee-rios istin: opateer lalevsin:
                    the-penthevio: matos en-eporanion: to epnevma tou agio:</td>
                <td class="arPhonics" >كيريوس إستين/ أوباتير لاليف سين/ ثيه بين
                    ثيفيو/ماتوس إن إيبورانيون/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_4">
            <tr id="table_2_row_13" class="south">
                <td class="english" >Honored is the Father, Who rejoices because
                    of our Humility, the Heavenly Truth, with the Holy Spirit.</td>
                <td class="coptic" >Ⲛⲓⲙⲓⲟⲥ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲝ̀ⲁⲗⲉⲩⲥⲓⲛ : ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀
                    : ⲟⲛⲧⲟⲥ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ.</td>
                <td class="arabic">مكرم هو الآب المتهلل باتضاعنا الحق السمائي والروح القدس.</td>
            </tr>
            <tr id="table_2_row_14" class="north">
                <td class="enPhonics" >Nee-mios istin: opateer exalevsin:
                    the-penthevio: ondos en-eporanion: to epnevma to agio:</td>
                <td class="arPhonics" >نى ميوس إستين/ أوباتير إكساليف سين/ ثيه بين
                    ثيفيو/أوندوس إن إيبورانيون/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_5">

            <tr id="table_2_row_16" class="north">
                <td class="english" >The Father is the Shepherd, Who speaks for
                    the sake of our tribulations, the heavenly cross, with the Holy Spirit</td>
                <td class="coptic" >Ⲡⲓⲙⲉⲛⲟⲥ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲣⲁⲣⲁⲩⲥⲓⲛ : ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀
                    : ⲥ̀ⲧⲁⲩⲣⲟⲥ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ.</td>
                <td class="arabic">الآب هو الراعي المتكلم من اجل مذلتنا. الصليب السمائي والروح القدس</td>
            </tr>
            <tr id="table_2_row_17" class="south">
                <td class="enPhonics" >Pee-menos istin: opateer raravsin:
                    the-penthevio: estavros en-eporanion: to epnevma to agio:</td>
                <td class="arPhonics" >بى مينوس إستين/ أوباتير رارافسين/ ثيه بين
                    ثيفيو/إستافروس إن إيبورانيون/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_6">
            <tr id="table_2_row_19" class="south">
                <td class="english" >Honored is the Father, Who shines over our
                    tribulations, with the heavenly light, with the Holy Spirit</td>
                <td class="coptic" >Ⲧⲓⲙⲓⲟⲥ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲩ̀ⲙⲟⲛⲫⲓⲛ : ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀
                    : ⲫⲱⲥⲧⲏⲣ ⲛ̀ⲉ̀ⲡⲟⲣⲁⲛⲓⲟⲛ : ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ.</td>
                <td class="arabic">مكرم هو الآب المشرق علي مذلتنا بالنور السمائي والروح القدس.</td>
            </tr>
            <tr id="table_2_row_20" class="north">
                <td class="enPhonics" >Tee-mios istin: opateer emonfin:
                    the-penthevio: vosteer en-eporanion: to epnevma to agio:</td>
                <td class="arPhonics" >تى ميوس إستين/ أوباتير إى مونفين/ ثيه بين
                    ثيفيو/فوستير إن إيبورانيون/ تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_2_tbody_7">
            <tr id="table_2_row_22" class="north">
                <td class="english" >Hail to the ever-existent, with the Father
                    who rejoices in our humility, and the heavenly truth, with the Holy Spirit</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲓⲥⲧⲓⲛ ⲓⲥⲧⲓⲛ : ⲟ̀ⲡⲁⲧⲏⲣ ⲯⲁⲗⲉⲩⲥⲓⲛ :
                    ⲑⲉⲡⲉⲛⲑⲉⲃⲓⲟ̀ : ⲱ̀ⲛ̀ⲧⲱⲥ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ.</td>
                <td class="arabic">الفرح كائن علي الدوام بالآب المبتهج بتواضعنا والحق السمائي والروح القدوس.</td>
            </tr>
            <tr id="table_2_row_23" class="south">
                <td class="enPhonics" >Shere istin istin: opateer epsalevsin:
                    the-penthevio: ondos en-eporanion: to epnevma to agio:</td>
                <td class="arPhonics" >شيريه إستين إستين/ أوباتير إبساليف سين/ ثيه
                    بين ثيفيو/أوإندوس إن إيبورانيون: تو إبنيفما تو آجيو.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table id="table_3" style="display: table;" title="Shashf Ensop">
        <caption class="caption" id="caption_table_3">Seven Times Everyday
        <span class="coptic-caption">Ϣ̀ⲁϣϥ ̀ⲛⲥⲟⲡ ̀ⲙⲙⲏⲛⲓ</span>
        <span class="arabic-caption">سبع مرات كل يوم</span>
        </caption>

        <tbody ${tbodyClass}  id="table_3_tbody_0">
            <tr class="north" id="table_3_row_0">
                <td class="english" >Seven times everyday, I will praise Your
                    name,
                    with
                    all my heart, O God of everyone.</td>
                <td class="coptic" >Ϣ̀ⲁϣϥ ̀ⲛⲥⲟⲡ ⲙ̀ⲙⲏⲛ̀ⲓ : ̀ⲉⲃⲟⲗϧⲉⲛ ⲡⲁϩⲏⲧ ⲧⲏⲣϥ:
                    ϯⲛⲁⲥ̀ⲙⲟⲩ
                    ⲉ̀ⲡⲉⲕⲣⲁⲛ: Ⲡϭⲟⲓⲥ ⲙ̀ⲡⲓⲉ̀ⲡ̀ⲧⲏⲣϥ.</td>
                <td class="arabic">سبع مرات كل يوم من كل قلبى ابارك أسمك يارب الكل.</td>
            </tr>
            <tr class="south" id="table_3_row_1">
                <td class="enPhonics" >Shashf ensop emmeenee: evol khen paheet
                    tierf:
                    tee-na esmou epekran: eptchois empee e-eptierf.</td>
                <td class="arPhonics" >شاشف إنسوب إممينى إيفول خيى باهيت تيرف تينا
                    إزمو إى
                    بيك ران إبشويس إم بى إى إبتيرف.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_1">
            <tr class="north" id="table_3_row_2">
                <td class="english" >I remembered Your name, and I was comforted,
                    O
                    King
                    of the ages, and God of all gods.</td>
                <td class="coptic" >Ⲁⲓⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ: ⲟⲩⲟϩ ⲁⲓϫⲉⲙⲛⲟⲙϯ: ⲡ̀ⲟⲩⲣⲟ
                    ⲛ̀ⲛⲓⲉ̀ⲱⲛ:
                    Ⲫϯ ̀ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲩϯ.</td>
                <td class="arabic">ذكرت اسمك فتعزيت ياملك الدهور وإله الآلهة.</td>
            </tr>
            <tr class="south" id="table_3_row_3">
                <td class="enPhonics" >Ai erev mev-ee empekran: Owoh ai jem
                    nomtee:
                    ep’ouro ennee e’on: Evnoutee ente ni- noutee.</td>
                <td class="arPhonics" >أى إير إفميفئى إم بيك ران أووه أى جيم نومتى
                    إبؤرو
                    إن نى إيؤن إفنوتى إنتى نى نوتى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_2">
            <tr class="north" id="table_3_row_4">
                <td class="english" >Jesus Christ our true God, who has come, for
                    our
                    salvation, was incarnate.</td>
                <td class="coptic" >Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲡⲓⲁ̀ⲗⲏⲑⲓⲛⲟⲥ:
                    ⲫⲏⲉ̀ⲧⲁϥⲓ̀
                    ⲉⲑⲃⲉ
                    ⲡⲉⲛⲥⲱϯ: ⲁϥⲉⲣⲥⲱⲙⲁⲧⲓⲕⲟⲥ.</td>
                <td class="arabic">يسوع المسيح الهنا الحقيقى الذى أتى من اجل خلاصنا متجسداً.</td>
            </tr>
            <tr class="south" id="table_3_row_5">
                <td class="enPhonics" >Isos pee-ekhrestos pennotee: pee
                    aleethinos:
                    Vee
                    etaf ee ethve pensotee: afersoma teekos.</td>
                <td class="arPhonics" >إيسوس بى إخرستوس بين نوتى بى آليثينوس فى
                    إيطافئى
                    إثفى بين سوتى آف إير سوما تيكوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_3">
            <tr class="north" id="table_3_row_6">
                <td class="english" >He was incarnate, of the Holy Spirit, and of
                    Mary,
                    the pure bride.</td>
                <td class="coptic" >Ⲁϥϭⲓⲥⲁⲣⲝ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ⲛⲉⲙ
                    ⲉ̀ⲃⲟⲗϧⲉⲛ
                    Ⲙⲁⲣⲓⲁ̀: ϯϣⲉⲗⲉⲧ ⲉⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">وتجسد من الروح القدس ومن مريم العروس الطاهرة.</td>
            </tr>
            <tr class="south" id="table_3_row_7">
                <td class="enPhonics" >Af etshy sarx evol: khen pee epnevma
                    ethowab:
                    nem
                    evol khen Maria: tee shelet ethowab.</td>
                <td class="arPhonics" >آفتشى ساركس إيفول خين بى إبنيفما إثؤواب نيم
                    إيفول
                    خين ماريا تى شيليت إثؤواب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_4">
            <tr class="north" id="table_3_row_8">
                <td class="english" >And changed our sorrow, and all our troubles,
                    to
                    joy
                    for our hearts, and total rejoicing.</td>
                <td class="coptic" >Ⲁϥⲫⲱⲛϩ ⲙ̀ⲡⲉⲛϩⲏⲃⲓ: ⲛⲉⲙ ⲡⲉⲛϩⲟϫϩⲉϫ ⲧⲏⲣϥ: ⲉ̀ⲟⲩⲣⲁϣⲓ
                    ⲛ̀ϩⲏⲧ:
                    ⲛⲉⲙ ⲟⲩⲑⲉⲗⲏⲗ ⲉ̀ⲡ̀ⲧⲏⲣϥ.</td>
                <td class="arabic">وقلب حزننا وكل ضيقنا إلى فرح قلب وتهليل كلى.</td>
            </tr>
            <tr class="south" id="table_3_row_9">
                <td class="enPhonics" >Afvonh empen heevee : nem pen hog heg
                    tierf:
                    e-ourashee enheet: nem outheleel e-eptierf.</td>
                <td class="arPhonics" >آف فونه إم بين هيفى نيم بين هوج هيج تيرف إى
                    أوراشى
                    إنهيت نيم أو ثيليل إى إبتيرف.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_5">
            <tr class="north" id="table_3_row_10">
                <td class="english" >Let us worship Him, and sing to, His mother
                    Mary,
                    the
                    beautiful dove.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲉⲣϩⲩⲙⲛⲟⲥ: ⲛ̀ⲧⲉϥⲙⲁⲩ
                    Ⲙⲁⲣⲓⲁ̀:
                    ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
                <td class="arabic">فلنسجد له ونرتل لأمه مريم الحمامة الحسنة.</td>
            </tr>
            <tr class="south" id="table_3_row_11">
                <td class="enPhonics" >Maren ou-osht emmof: o-woh enten er hymnos:
                    entef
                    mav Maria: tee-etshrompee ethnesos.</td>
                <td class="arPhonics" >مارين أو أوشت إممف اووه إن تين إيرهيمنوس
                    إنتيف
                    ماف
                    ماريا تى إتشرومبى إثنيسوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_6">
            <tr class="north" id="table_3_row_12">
                <td class="english" >And let us all proclaim, with the voice of
                    joy,
                    saying Hail to you Mary, the Mother of Emmanuel.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ: ϫⲉ
                    ⲭⲉⲣⲉ ⲛⲉ
                    Ⲙⲁⲣⲓⲁ̀: ⲑ̀ⲙⲁⲩ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.</td>
                <td class="arabic">ونصرخ بصوت التهليل قائلين السلام لك يامريم أم عمانوئيل.</td>
            </tr>
            <tr class="south" id="table_3_row_13">
                <td class="enPhonics" >O-woh enten osh evol: khen ou ezmee
                    entheleel:
                    je
                    shere ne Maria: ethmav en Emmanoueel.</td>
                <td class="arPhonics" >أووه إن تين أوش إيفول خين أو إزمى إنثيليل
                    جى
                    شيرى
                    نى ماريا إثماف إن إممانوئيل.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_7">
            <tr class="north" id="table_3_row_14">
                <td class="english" >Hail to you Mary, the salvation of our father
                    Adam,
                    Hail..., the Mother of the refuge, Hail..., the rejoicing of Eve, Hail..., the joy of all
                    generations.
                </td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲥⲱϯ ⲛ̀Ⲁⲇⲁⲙ ⲡⲉⲛⲓⲱⲧ: ⲭˉⲉˉ :
                    ⲑ̀ⲙⲁⲩ
                    ⲙ̀ⲡⲓⲙⲁ ⲙ̀ⲫⲱⲧ: ⲭˉⲉˉ : ⲡ̀ⲑⲉⲗⲏⲗ ⲛ̀Ⲉⲩⲁ̀: ⲭˉⲉˉ : ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲛⲓⲅⲉⲛⲉⲁ̀.</td>
                <td class="arabic">السلام لك يا مريم خلاص أبينا آدم. السلام... أم الملجأ السلام .. تهليل حواء. السلام...
                    فرح
                    الأجيال.</td>
            </tr>
            <tr class="south" id="table_3_row_15">
                <td class="enPhonics" >Shere ne Maria: ep-sotee en adam peniot:
                    Shere…:
                    ethmav empee ma emvot: Shere…: eptheleel en eva: Shere…: ep ounof enni gene’a.</td>
                <td class="arPhonics" >شيرى نى ماريا: إبسوتى إن آدام بينيوت: شيرى
                    ...:
                    إثماف إمبى ما إمفوت: شيرى ...: إبثيليل إن إيفا: شيرى ... : إبؤنوف إن نى جينيئا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_8">
            <tr class="north" id="table_3_row_16">
                <td class="english" >Hail to you Mary, the joy of Abel the just,
                    Hail...,
                    the true Virgin, Hail..., the salvation of Noah, Hail..., the chaste and undefiled.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲫ̀ⲣⲁϣⲓ ⲛ̀Ⲁⲃⲉⲗ ⲡⲓⲑ̀ⲙⲏⲓ: ⲭˉⲉˉ :
                    ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲧⲁⲫ̀ⲙⲏⲓ: ⲭˉⲉˉ : ⲫ̀ⲛⲟϩⲉⲙ ⲛ̀Ⲛⲱⲉ̀: ⲭˉⲉˉ :ϯⲁⲧⲑⲱⲗⲉⲃ ⲛ̀ⲥⲉⲙⲛⲉ</td>
                <td class="arabic">السلام لك يامريم فرح هابيل البار . السلام... العذراء الحقيقية. السلام... خلاص نوح.
                    السلام...
                    غير الدنسة الهادئة.</td>
            </tr>
            <tr class="south" id="table_3_row_17">
                <td class="enPhonics" >Shere…: evrashi en abel pee ethmee: Shere…:
                    teeparthenos enta evmee: Shere…: evnohem en-no-eh: Shere…: tee at-tholeb en semne.</td>
                <td class="arPhonics" >شيرى ...: إفراشى إن آفيل بى إثمى: شيرى...:
                    تى
                    بارثينوس إنتا إفمى: شيرى... : إفنويم إن نوإه: شيرى... : تى آتثوليب إن سيمنى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_9">
            <tr class="north" id="table_3_row_18">
                <td class="english" >Hail to you Mary, the grace of Abraham,
                    Hail...,
                    the
                    unfading crown, Hail..., the redemption of Saint Isaac, Hail..., the Mother of The Holy.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ϩ̀ⲙⲟⲧ ⲛ̀Ⲁⲃⲣⲁⲁⲙ: ⲭˉⲉˉ :
                    ⲡⲓⲭ̀ⲗⲟⲙ
                    ⲛ̀ⲁⲑⲗⲱⲙ: ⲭˉⲉˉ : ⲡ̀ⲥⲱϯ ⲛ̀Ⲓⲥⲁⲁⲕ ⲡⲉⲑⲟⲩⲁⲃ: ⲭˉⲉˉ : ⲑ̀ⲙⲁⲩ ⲙ̀ⲫⲏⲉⲑⲟⲩⲁⲃ</td>
                <td class="arabic">السلام لك يامريم نعمة ابراهيم. السلام ... الاكليل غير المضمحل. السلام... خلاص اسحق
                    القديس.
                    السلام... أم القدوس.</td>
            </tr>
            <tr class="south" id="table_3_row_19">
                <td class="enPhonics" >Shere…: epehmot en abra‘am: Shere…: pee
                    eklom
                    en
                    atlom: Shere…: epsotee en isaak pe-ethowab: Shere…: ethmav emve ethowab.</td>
                <td class="arPhonics" >شيرى...: إب إهموت إن آفراآم: شيرى...: بى
                    إكلوم
                    إن
                    آثلوم: شيرى...: إبسوتى إن إيسآك بى إثؤواب: شيرى... : إثماف إمفى إثؤواب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_10">
            <tr class="north" id="table_3_row_20">
                <td class="english" >Hail to you Mary, the rejoicing of Jacob,
                    Hail...,
                    myriads of myriads, Hail..., the pride of Judah, Hail...: the mother of the Master.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲑⲉⲗⲏⲗ ⲛ̀Ⲓⲁⲕⲱⲃ: ⲭˉⲉˉ :
                    ϩⲁⲛⲑ̀ⲃⲁ
                    ⲛ̀ⲕⲱⲃ:
                    ⲭˉⲉˉ : ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀Ⲓⲟⲩⲇⲁ: ⲭˉⲉˉ : ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲇⲉⲥ ⲡⲟⲧⲁ.</td>
                <td class="arabic">السلام لك يامريم تهليل يعقوب. السلام.. ربوات مضاعفة السلام... فخر يهوذا. السلام .. ام
                    السيد.
                </td>
            </tr>
            <tr class="south" id="table_3_row_21">
                <td class="enPhonics" >Shere…: eptheleel enyakob: Shere…: hanethva
                    enkob:
                    Shere…: epshosho en yoda: Shere…: ethmav empee zes pota.</td>
                <td class="arPhonics" >شيرى ... : إبثيليل إن ياكوب: شيرى ... : هان
                    إثفا إن
                    كوب: شيرى ... : إبشوشو إن يوذا: شيرى ... : إثماف إم بى ذيسبوطا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_11">
            <tr class="north" id="table_3_row_22">
                <td class="english" >Hail to you Mary, the preaching of Moses,
                    Hail...,
                    the Mother of the Master, Hail..., the honor of Samuel, Hail..., the pride of Israel.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ϩⲓⲱⲓϣ ⲙ̀Ⲙⲱⲩ̀ⲥⲏⲥ: ⲭˉⲉˉ :
                    ⲑ̀ⲙⲁⲩ
                    ⲙ̀ⲡⲓⲇⲉⲥⲡⲟⲧⲏⲥ: ⲭˉⲉˉ : ⲡ̀ⲧⲁⲓⲟ̀ ⲛ̀Ⲥⲁⲙⲟⲩⲏⲗ: ⲭˉⲉˉ : ⲡ̀ϣⲟⲩϣⲟⲩ ⲙ̀Ⲡⲓⲥ̀ⲣⲁⲏⲗ.</td>
                <td class="arabic">السلام لك يامريم كرازة موسى. السلام.. والدة السيد. السلام.. كرامة صموئيل. السلام..
                    فخر
                    اسرائيل.</td>
            </tr>
            <tr class="south" id="table_3_row_23">
                <td class="enPhonics" >Shere…: ep hee oish emmoi sees: Shere…:
                    ethmav
                    empee zes potees: Shere…: eptaio ensamo’eel: Shere…: epshoushou empee isra’eel.</td>
                <td class="arPhonics" >شيرى ... : إب هى أويش إممويسيس : شيرى... :
                    إثماف
                    إمبى ذيس بوتيس: شيرى...: إبطايو إن صاموئيل: شيرى... إبشوشو إم بى إسرائيل.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_12">
            <tr class="north" id="table_3_row_24">
                <td class="english" >Hail to you Mary, the steadfastness of Job
                    the
                    just,
                    Hail..., the precious stone, Hail..., the Mother of the Beloved: Hail..., the daughter of King
                    David.
                </td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲧⲁϫⲣⲟ ⲛ̀Ⲓⲱⲃ ⲡⲓⲑ̀ⲙⲏⲓ: ⲭˉⲉˉ :
                    ⲡⲓⲱ̀ⲛⲓ
                    ⲛ̀ⲁ̀ⲛⲁⲙⲏⲓ: ⲭˉⲉˉ : ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲙⲉⲛⲣⲓⲧ: ⲭˉⲉˉ : ⲧ̀ϣⲉⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ Ⲇⲁⲩⲓⲇ.</td>
                <td class="arabic">السلام لك يامريم ثبات ايوب البار. السلام.. الحجر الكريم. السلام... أم الحبيب.
                    السلام..
                    ابنة
                    الملك داود.</td>
            </tr>
            <tr class="south" id="table_3_row_25">
                <td class="enPhonics" >Shere…: eptagro en yob pee ethmee: Shere…:
                    pee
                    onee
                    en anamee: Shere…: ethmav empee menreet: Shere…: etsheeree em ep ouro daveed.</td>
                <td class="arPhonics" >شيرى...: إبطاجرو إن يوب بى إثمى: شيرى...:
                    بى
                    أونى
                    إن آنامى: شيرى...: إثماف إمبى مينريت: شيرى...: إتشيرى إم إبؤرو دافيد.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_13">
            <tr class="north" id="table_3_row_26">
                <td class="english" >Hail to you Mary, the friend of Solomon,
                    Hail...,
                    the
                    exaltation of the righteous, Hail..., the redemption of Isaiah, Hail..., the healing of Jeremiah.
                </td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ϯϣ̀ⲫⲉⲣⲓ ⲛ̀ Ⲥⲟⲗⲟⲙⲱⲛ: ⲭˉⲉˉ :
                    ⲡ̀ϭⲓⲥⲓ
                    ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲛ: ⲭˉⲉˉ : ⲡ̀ⲟⲩϫⲁⲓ ⲛ̀Ⲏⲥⲁⲏⲁⲥ: ⲭˉⲉˉ : ⲡ̀ⲧⲁⲗϭⲟ ⲛ̀Ⲓⲉⲣⲉⲙⲓⲁⲥ.</td>
                <td class="arabic">السلام لك يامريم صديقة سليمان. السلام.. رفعة الصديقين السلام.. خلاص أشعياء. السلام..
                    شفاء
                    أرميا.</td>
            </tr>
            <tr class="south" id="table_3_row_27">
                <td class="enPhonics" >Shere…: te-eshveeree en solomon: Shere…: ep
                    etchee
                    see en-nezee-ke’on: Shere…: epougai en isa-eyas: Shere…: ep-tal-tcho en yeremias.</td>
                <td class="arPhonics" >شيرى ... : تى إشفيرى إن سولومون: شيرى... :
                    إب
                    إتشيسى إن نى ذيكيئون: شيرى...: إبؤجاى غن إيسائياس: شيرى...: إبطالتشو إن ييرمياس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_14">
            <tr class="north" id="table_3_row_28">
                <td class="english" >Hail to you Mary, the knowledge of Ezekiel,
                    Hail...,
                    the grace of Daniel, Hail..., the power of Elijah: Hail..., the grace of Elisha.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲡ̀ⲉⲙⲓ ⲛ̀Ⲓⲉⲍⲉⲕⲓⲏⲗ: ⲭˉⲉˉ : ⲭⲁⲣⲓⲥ
                    ⲧⲟⲩ
                    Ⲇⲁⲛⲓⲏⲗ: ⲭˉⲉˉ : ⲧ̀ϫⲟⲙ ⲛ̀Ⲏⲗⲓⲁⲥ: ⲭˉⲉˉ : ⲡⲓϩ̀ⲙⲟⲧ ⲛ̀Ⲉⲗⲓⲥⲉⲟⲥ.</td>
                <td class="arabic">السلام لك يامريم علم حزقيال. السلام.. نعمة دانيال. السلام .. قوة ايليا. السلام.. نعمة
                    اليشع.
                </td>
            </tr>
            <tr class="south" id="table_3_row_29">
                <td class="enPhonics" >Shere…: ep-emi enyezeke-eel: Shere…:
                    kharisto
                    dane-eel: Shere…: etgom en eelias: Shere…: pee ehmot en eleese-os.</td>
                <td class="arPhonics" >شيرى ... : إب إيمى إن يزيكيئيل: شيرى... :
                    خاريس
                    تو
                    دانيئيل: شيرى ... : إتجوم إن إيلياس: شيرى ... : بى إهموت إن إيليسيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_15">
            <tr class="north" id="table_3_row_30">
                <td class="english" >Hail to you Mary, the mother of God: Hail...,
                    the
                    Mother of Jesus Christ, Hail..., the beautiful dove, Hail...: the mother of the Son of God.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲭˉⲉˉ : ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲭˉⲉˉ :ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲭˉⲉˉ : ⲑ̀ⲙⲁⲩ ⲛ̀Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ.</td>
                <td class="arabic">السلام لك يا مريم والدة الإله. السلام.. أم يسوع المسيح السلام.. الحمامة الحسناء
                    السلام..
                    أم
                    ابن الله.</td>
            </tr>
            <tr class="south" id="table_3_row_31">
                <td class="enPhonics" >Shere…: tee theotokos: Shere…: ethmav
                    enIsos
                    Pekh
                    restos: Shere…: tetshrompee ethnesos: Shere…: ethmav en Eyos Theos.</td>
                <td class="arPhonics" >شيرى ... : تى ثيؤطوكوس: شيرى ... : إثماف إن
                    إيسوس
                    بى إخرستوس: شيرى ... : تى إتشرومبى إثنيسوس: شيرى ... : إثماف إن إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_16">
            <tr class="south" id="table_3_row_33">
                <td class="english" >Hail to you Mary, who was witnessed by, all
                    the
                    prophets, and they said.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀: ⲉ̀ⲧⲁⲩⲉⲣⲙⲉⲑⲣⲉ ⲛⲁⲥ: ⲛ̀ϫⲉ
                    ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ
                    ⲧⲏⲣⲟⲩ: ⲟⲩⲟϩ ⲁⲩϫⲱ ⲙ̀ⲙⲟⲥ.</td>
                <td class="arabic">السلام لمريم التى شهد لها جميع الانبياء وقالوا.</td>
            </tr>
            <tr class="north" id="table_3_row_34">
                <td class="enPhonics" >Shere…: etav ermethre nas: enje
                    ni-eprofee-tees
                    teero: owooh avgo emmos.</td>
                <td class="arPhonics" >شيرى نى ماريا أيطاف إيرمثرى ناس إنجى نى
                    إبروفيتيس
                    تيرو أووه إفجو إمموس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_17">
            <tr class="south" id="table_3_row_35">
                <td class="english" >Behold God the Word, was incarnate of you, in
                    an
                    indescribable, unity.</td>
                <td class="coptic" >Ϩⲏⲡⲡⲉ Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ: ⲉ̀ⲧⲁϥϭⲓⲥⲁⲣⲝ ⲛ̀ϧⲏϯ: ϧⲉⲛ
                    ⲟⲩⲙⲉⲧⲟⲩⲁⲓ:
                    ⲛ̀ⲁⲧⲥⲁϫⲓ ⲙ̀ⲡⲉⲥⲣⲏϯ.</td>
                <td class="arabic">هوذا الله الكلمة الذى تجسد منك بوحدانية لا ينطق بمثلها.</td>
            </tr>
            <tr class="north" id="table_3_row_36">
                <td class="enPhonics" >Hep-pe evnotee pilo-ghos: etafetshee sarx
                    en-kheetee: khen oumeto-wai: en atsaji empesriti.</td>
                <td class="arPhonics" >هيبببى إفنوتى بي لوغوس إيطافتشى ساركس
                    إنخيتى
                    خين أو
                    ميت أوواى إن أت ساجى إم بيس ريتى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_18">
            <tr class="south" id="table_3_row_37">
                <td class="english" >You are truly exalted, more than the rod, of
                    Aaron, O
                    full of grace.</td>
                <td class="coptic" >Ⲧⲉϭⲟⲥⲓ ⲁ̀ⲗⲏⲑⲱⲥ: ⲉ̀ϩⲟⲧⲉ ⲡⲓϣ̀ⲃⲱⲧ: ⲛ̀ⲧⲉ Ⲁⲁ̀ⲣⲱⲛ:
                    ⲱ̀
                    ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ.</td>
                <td class="arabic">مرتفعة أنت بالحقيقة أكثر من عصا هرون أيتها الممتلئة نعمة.</td>
            </tr>
            <tr class="north" id="table_3_row_38">
                <td class="enPhonics" >Tetshosee aleethos: ehote pee eshvot: ente
                    A-aron:
                    o-thee ethmeh en ehmot.</td>
                <td class="arPhonics" >تى إتشوسى آليثوس إيهوتى بى إشفوت إنتى آآرون
                    اوثى
                    إثميه إن إهموت.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_19">
            <tr class="south" id="table_3_row_39">
                <td class="english" >What is the rod, but Mary, for it is the
                    symbol,
                    of
                    her virginity.</td>
                <td class="coptic" >Ⲁϣⲡⲉ ⲡⲓϣ̀ⲃⲱⲧ: ⲉ̀ⲃⲏⲗ ⲉ̀Ⲙⲁⲣⲓⲁ̀: ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ
                    ⲡ̀ⲧⲩⲡⲟⲥ:
                    ⲛ̀ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
                <td class="arabic">ماهى العصا إلا مريم لانها مثال بتوليتها.</td>
            </tr>
            <tr class="north" id="table_3_row_40">
                <td class="enPhonics" >Ashpe pee eshvot: eveel e-Maria: je enthof
                    pe
                    ep-tee-pos: entes parthenia.</td>
                <td class="arPhonics" >أشبى بى إشفوت إيفيل إيماريا جى إنثوف بى
                    إبتيبوس
                    إنتيس بارثينيا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_20">
            <tr class="south" id="table_3_row_41">
                <td class="english" >She conceived and gave birth, without a man,
                    to
                    the
                    son of the Highest, the Word Himself.</td>
                <td class="coptic" >Ⲁⲥⲉⲣⲃⲟⲕⲓ ⲁⲥⲙⲓⲥⲓ: ⲭⲱⲣⲓⲥ ⲥⲩⲛⲟⲩⲥⲓⲁ̀: ⲙ̀ⲡ̀ϣⲏⲣⲓ
                    ⲙ̀ⲫⲏⲉⲧϭⲟⲥⲓ:
                    ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲁⲓⲇⲓⲁ̀.</td>
                <td class="arabic">حبلت وولدت بغير مباضعة ابن العلى الكلمة الذاتى.</td>
            </tr>
            <tr class="north" id="table_3_row_42">
                <td class="enPhonics" >As-er-vo-kee as-meesee: khoris seeno sia:
                    em-ep-sheeree emvee etetsho-see: peeloghos en aithia.</td>
                <td class="arPhonics" >أسئر فوكى أسميسى خوريس سينوسيا إم إبشيرى إم
                    فى
                    إتتشوسى بى لوغوس إن آيذيا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_21">
            <tr class="south" id="table_3_row_43">
                <td class="english" >Through her prayers, and intercessions, O
                    Lord
                    open
                    onto us, the gates of the Church.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲉⲥⲉⲩⲭⲏ: ⲛⲉⲙ ⲛⲉⲥⲡ̀ⲣⲉⲥⲃⲓⲁ̀: ⲁ̀ⲟⲩⲱⲛ ⲛⲁⲛ
                    Ⲡϭⲟⲓⲥ:
                    ⲙ̀ⲫ̀ⲣⲟ ⲛ̀ⲧⲉ ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀</td>
                <td class="arabic">بصلواتها وشفاعاتها أفتح لنا يارب باب الكنيسة.</td>
            </tr>
            <tr class="north" id="table_3_row_44">
                <td class="enPhonics" >Hiten nes evkee: nem nes epresvia: A-oo-own
                    nan
                    eptchois: em evro ente tee-ekek leesia.</td>
                <td class="arPhonics" >هيتين نيس إفكى نيم نيس إبريسفيا آأوؤن نان
                    إبشويس إم
                    إفرو إنتى تى إككليسيا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_22">
            <tr class="south" id="table_3_row_45">
                <td class="english" >I entreat you, O mother of God, keep the
                    gates of
                    the
                    church, open to the faithful.</td>
                <td class="coptic" >Ϯϯϩⲟ ⲉ̀ⲣⲟ: ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: ⲭⲁ ⲫ̀ⲣⲟ
                    ⲛ̀ⲛⲓⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀:
                    ⲉϥⲟⲩⲏⲛ ⲛ̀ⲛⲓⲡⲓⲥⲧⲟⲥ</td>
                <td class="arabic">اسألك ياوالدة الاله اجعلى ابواب الكنائس مفتوحة للمؤمنين.</td>
            </tr>
            <tr class="north" id="table_3_row_46">
                <td class="enPhonics" >Teetee ho ero: o tee theotokos: ka evro
                    enni
                    ekekleesia: ev-ou-een enneepistos.</td>
                <td class="arPhonics" >تى تيهو إيرو أوتى ثيؤطوكوس كا إفرو إن نى
                    أككليسيا
                    إفؤين إن نى بيستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_23">
            <tr class="south" id="table_3_row_47">
                <td class="english" >Let us ask her, to intercede for us, before
                    her
                    Beloved, that He may forgive us.</td>
                <td class="coptic" >Ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲥ: ⲉⲑⲣⲉⲥⲧⲱⲃϩ ⲉ̀ϫⲱⲛ: ⲛⲁϩⲣⲉⲛ
                    ⲡⲉⲥⲙⲉⲛⲣⲓⲧ:
                    ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">فلنسألها أن تطلب عنا عند حبيبها ليغفر لنا.</td>
            </tr>
            <tr class="north" id="table_3_row_48">
                <td class="enPhonics" >Marenteeho eros: Ethres tovh egon: nahren
                    pesmenreet: eethref ko nan evol.</td>
                <td class="arPhonics" >مارين تيهو إيروس إثريس طفه إيجون ناهرين بيس
                    مين
                    ريت
                    إثريف كو نان إيفول.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_24">
            <tr class="south" id="table_3_row_49">
                <td class="english" >You are called, O Virgin Mary, the Holy
                    flower,
                    of
                    incense.</td>
                <td class="coptic" >Ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟ: Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ: ϫⲉ ϯϩ̀ⲣⲏⲣⲓ
                    ⲉⲑⲟⲩⲁⲃ:
                    ⲛ̀ⲧⲉ
                    ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ.</td>
                <td class="arabic">دعيت يا مريم العذراء الزهرة المقدسة التى للبخور.</td>
            </tr>
            <tr class="north" id="table_3_row_50">
                <td class="enPhonics" >Avmoutee ero: Maria tee parthenos: je tee
                    ehreeree
                    ethowab: ente pee estoinofee.</td>
                <td class="arPhonics" >أفموتى إيرو ماريا تى بارثينوس جى تى إهريرى
                    إثؤواب
                    إنتى بى إستوى نوفى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_25">
            <tr class="south" id="table_3_row_51">
                <td class="english" >Which came out, and blossomed, from the roots
                    of
                    the
                    patriarchs, and the prophets.</td>
                <td class="coptic" >Ⲑⲏⲉ̀ⲧⲁⲥϯⲟⲩⲱ̀ ⲉ̀ⲡ̀ϣⲱⲓ: ⲁⲥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ
                    ⲑ̀ⲛⲟⲩⲛⲓ
                    ⲛ̀ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.</td>
                <td class="arabic">التى طلعت وازهرت من أصل رؤساء الآباء والأنبياء.</td>
            </tr>
            <tr class="north" id="table_3_row_52">
                <td class="enPhonics" >Thee etac teeo-o e-epshoi: acveeree evol:
                    khen
                    ethnonee ennee patre yar shees: nem nee eprofeetees.</td>
                <td class="arPhonics" >ثى إيطاس تيؤؤ إى إبشوى أسفيرى إيفول خين
                    إثنونى
                    إن
                    نى باتريارشيس نيم نى إبروفيتيس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_26">
            <tr class="south" id="table_3_row_53">
                <td class="english" >Like the rod, of Aaron the priest, which
                    blossomed,
                    and brought forth fruit.</td>
                <td class="coptic" >Ⲙⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓϣ̀ⲃⲱⲧ: ⲛ̀ⲧⲉ Ⲁⲁ̀ⲣⲱⲛ ⲡⲓⲟⲩⲏⲃ:
                    ⲉ̀ⲧⲁϥⲫⲓⲣⲓ
                    ⲉ̀ⲃⲟⲗ:
                    ⲁϥⲟⲡⲧ ⲛ̀ⲕⲁⲣⲡⲟⲥ.</td>
                <td class="arabic">مثل عصا هرون الكاهن أزهرت و أوسقت ثمراً.</td>
            </tr>
            <tr class="north" id="table_3_row_54">
                <td class="enPhonics" >Em evreetee empee eshvot: ente a-aron
                    pe-oweeb:
                    etaf-veeree evol: af opt enkarpos.</td>
                <td class="arPhonics" >إم إفريتى إمبى إشفوت إنتى آآرون بى أوويب
                    إيطاف
                    فيرى
                    إيفول أفؤبت إن كاربوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_27">
            <tr class="south" id="table_3_row_55">
                <td class="english" >For you gave birth to the word, without the
                    seed
                    of
                    man, and your virginity, was not corrupted.</td>
                <td class="coptic" >Ϫⲉ ⲁ̀ⲣⲉϫ̀ⲫⲟ ⲙ̀ⲡⲓⲗⲟⲅⲟⲥ: ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ:
                    ⲉⲥⲟⲓ
                    ⲛ̀ⲁⲧⲧⲁⲕⲟ: ⲛ̀ϫⲉ ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀.</td>
                <td class="arabic">لانك ولدت الكلمة بغير زرع بشر وبتوليتك بغير فساد.</td>
            </tr>
            <tr class="north" id="table_3_row_56">
                <td class="enPhonics" >Je-aregvo empee-Loghos: atch ne esperma
                    enromee:
                    es’oi en attako: enje tes parthenia.</td>
                <td class="arPhonics" >جى آرى إجفو إمبى لوغوس أتشنى إسبيرما إن
                    رومى
                    إسؤى
                    إن آت تاكو إنجى تى بارثينيا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_3_tbody_28">
            <tr class="south" id="table_3_row_57">
                <td class="english" >Wherefore we glorify you, as the Mother of
                    God,
                    ask
                    your Son, to forgive us.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲉ: ϩⲱⲥ ⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲙⲁϯϩⲟ
                    ⲙ̀ⲡⲉϣⲏⲣⲓ:
                    ⲉⲑⲣⲉϥⲭⲱ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">فلهذا نمجدك كوالدة الاله. اسألى ابنك ليغفر لنا.</td>
            </tr>
            <tr class="north" id="table_3_row_58">
                <td class="enPhonics" >Ethve Vai tentee w-ou ne: hos theotokos:
                    mateeho
                    empe-sheeree: ethervko nan evol.</td>
                <td class="arPhonics" >إثفى فاى تين تى أوونى هوس ثيئوطوكوس ماتيهو
                    إمبى
                    شيرى إثريف كو نان إيفول.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table id="table_4" style="display: table;" title="Zefte Pentis">
        <caption class="caption" id="caption_table_4">Come All You Nations
        <span class="coptic-caption">Ⲇⲉⲩⲧⲉ ⲡⲉⲛⲧⲏⲥ</span>
        <span class="arabic-caption">تعالوا يا جميع الشعوب</span>
        </caption>
        <tbody ${tbodyClass}  id="table_4_tbody_0">
            <tr class="north" id="table_4_row_0">
                <td class="english" >Come all you nations, to see the archangel,
                    proclaiming: Hail to you O Mary, you have found grace, the Lord is with you.</td>
                <td class="coptic" >Ⲇⲉⲩⲧⲉ ⲡⲉⲛⲧⲏⲥ ⲓ̀ⲗⲁⲏ̀ ⲧⲟⲛⲁⲣⲭⲏ: ⲁⲅⲅⲉⲗⲓ ⲙ̀ⲙⲟⲛ ⲁⲛ:
                    ⲛ̀ⲁⲙⲉⲛⲡⲟⲙⲉⲛ: Ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁⲙ: ⲕⲉ ⲭⲁⲣⲓⲧⲟⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">+تعالوا يا جميع الشعوب لننظر الى رئيس الملائكة قائلينالسلام لك يا مريم وجدة نعمة.
                    الرب
                    معك.</td>
            </tr>
            <tr class="south" id="table_4_row_1">
                <td class="enPhonics" >Zevte pendees ila-eei ton-arshee: angeli
                    emmon
                    an enamen-pomen:Shere Mariam: ke khari-tomenee: o kirios metaso.</td>
                <td class="arPhonics" >ذيفتى بين ديس إيلائى تون آرشى آنجيلى إممون
                    آن
                    إن آمين بومين:شيرى ماريام كى خارى تومينى. أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_1">
            <tr class="north" id="table_4_row_2">
                <td class="english" >+ Come all you nations, to see the archangel,
                    proclaiming: hail to you O Mary, you have found grace, the Lord is with you.</td>
                <td class="coptic" >Ⲁⲙⲱⲓⲛⲓ ⲛ̀ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ: ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲁ̀ⲡⲓⲁⲣⲭⲏ
                    ⲁⲅⲅⲉⲗⲟⲥ
                    ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁⲙ: ⲁⲣⲉϫⲓⲙⲓ ⲅⲁⲣ ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ: ⲟⲩⲟϩ Ⲡϭⲟⲓⲥ ϣⲟⲡ ⲛⲉⲙⲉ.</td>
                <td class="arabic">+تعالوا يا جميع الشعوب لننظر الى رئيس الملائكة قائلين: السلام لك يا مريم وجدة نعمة.
                    الرب
                    معك.</td>
            </tr>
            <tr class="south" id="table_4_row_3">
                <td class="enPhonics" >Amoini en-nilaos teero: enten-nav apiarshee
                    Angelos efgo emmos: je shere Mariam: arijimi ghar enou-ehmot owoh epchois shop neme.</td>
                <td class="arPhonics" >أموينى إن نى لاؤس تيرو إنتين ناف آبى آرشى
                    آنجيلوس إفجو إمموس جى شيرى ماريام أرى جيمى غار إن أو إهموت أووه إبشويس شوب نيمى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_2">
            <tr class="north" id="table_4_row_4">
                <td class="english" >+ Hail to the Theotokos, the palace which is
                    adorned, with the Word of the Father, hail to you O Mary, O you full of grace, the Lord is with you.
                </td>
                <td class="coptic" >Ⲭⲉⲣⲉ Ⲑⲉⲟⲧⲟⲕⲉ: ⲧⲟⲛ ⲭⲱⲣⲟⲛ ⲧⲟⲛ ⲕⲟⲥⲙⲟⲛ: ⲧⲟⲛ ⲗⲟⲅⲟⲛ:
                    ⲧⲟ
                    ⲡⲉⲧⲣⲟ: ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁⲙ: ⲕⲉ ⲭⲁⲣⲓⲧⲟⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">+السلام لوالدة الاله القصر المزين بكلمة الآب. السلام لمريم المملوءة (نعمة) الرب معك.
                </td>
            </tr>
            <tr class="south" id="table_4_row_5">
                <td class="enPhonics" >Shere theotoke: ton-khoron ton-kosmon:
                    ton-logon: to petro: shere Mariam: ke khari-tomeni: o kirios metaso.</td>
                <td class="arPhonics" >شيرى ثيئوطوكى تون خورون تون كوزمون تون
                    لوغون تو
                    بيترو شيرى ماريام كى خارى تومينى. أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_3">
            <tr class="north" id="table_4_row_6">
                <td class="english" >+ Hail to the Theotokos, the palace which is
                    adorned, with the Word of the Father, hail to the bride, hail to the wise, the full of grace, the
                    Lord
                    is with you.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ Ⲑⲉⲟⲧⲟⲕⲉ: ⲧⲟⲛ ⲕⲟⲥⲙⲟⲛ ⲧⲟⲛ ⲭⲱⲣⲟⲛ: ⲧⲟⲛ ⲗⲟⲅⲟⲛ
                    ⲧⲟ
                    ⲡⲉⲧⲣⲟ: ⲭⲉⲣⲉ ⲧ̀ϣⲉⲗⲏⲧ: ⲭⲉⲣⲉ ⲧ̀ⲥⲁⲃⲉ ⲕⲉ ⲭⲁⲣⲓⲧⲟⲙⲉⲛⲏ : ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">+السلام لوالدة الاله القصر المزين بكلمة الآب. السلام للعروسة. السلام للحكيمة المملوءة
                    نعمة. الرب معك.</td>
            </tr>
            <tr class="south" id="table_4_row_7">
                <td class="enPhonics" >Shere theotoke: ton kosmon ton-khoron:
                    ton-logon: to-petro shere et-sheleet shere et-sa-ve: ke khari-tomeni: o kirios metaso.</td>
                <td class="arPhonics" >شيرى ثيئوطوكى تون كوزمون تون خورون تون
                    لوغون تو
                    بيترو شيرى إتشيليت شيرى إتسافى كى خاريتو مينى أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_4">
            <tr class="north" id="table_4_row_8">
                <td class="english" >+ Hail to the Theotokos, you to whom the Holy
                    Spirit came, and filled you with grace,</td>
                <td class="coptic" >Ⲭⲉⲣⲉ Ⲑⲉⲟⲧⲟⲕⲉ: ⲧⲟⲛ ⲡ̀ⲛⲉⲩⲙⲁ: ⲕⲉ ⲩ̀ⲡⲟⲙⲉⲛⲏ: ⲧⲏⲥ
                    ⲡⲓⲛⲉ
                    ⲡⲉ ⲛⲉⲙ ⲛⲏⲑⲉⲃ: ⲙⲓⲑⲉ̀ⲣⲉ: ⲛⲉⲙ ⲫⲉⲩⲑⲉ:</td>
                <td class="arabic">+السلام لك يا والدة الاله يا من الروح حل عليك وملأك من النعمة</td>
            </tr>
            <tr class="south" id="table_4_row_9">
                <td class="enPhonics" >Shere theotoke: ton epnevma ke epomenee:
                    tees
                    pine pe nem neethev: mithere nem fevthe:</td>
                <td class="arPhonics" >شيرى ثيئوطوكى تون إبنيفما كى إيبومينى تيس
                    بى نى
                    بيه نيم نى ثيف مى ثيه ريه نيم فيف ثيه</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_5">
            <tr class="north" id="table_4_row_10">
                <td class="english" >O Mother of the Bridegroom, the God glorified
                    you, the Word, took flesh and was born from you, for the heavenly, angels always give,</td>
                <td class="coptic" >ⲑⲉⲟ̀ⲇⲟⲝⲁⲥⲑⲉ ⲕⲉ ⲟ̀ Ⲗⲟⲅⲟⲥ ⲥⲁⲣⲕⲟⲕⲓ ⲇⲓⲛⲁⲙⲓⲥ: ⲑⲓⲛ
                    ⲟⲩⲣⲁⲛⲟⲛ: ⲁⲅⲅⲉⲗⲟⲛ ⲉⲧⲉ̀ⲕⲓ̀: ⲧⲉⲥⲓⲛ ⲧⲉⲥⲓⲛⲁ̀: ⲡⲉⲛ ⲧ̀ⲣⲟⲡⲏⲥ ⲫ̀ⲣⲉⲛⲉⲑⲉ: ⲁ̀ⲡⲟⲩⲧⲏⲥ ⲓ̀ⲗⲁⲏ̀:</td>
                <td class="arabic">يا أم الختن (العريس) الله مجدك والكلمة تجسد منك لأن ملائكة السماء تكرمك دائما</td>
            </tr>
            <tr class="south" id="table_4_row_11">
                <td class="enPhonics" >theozoxas-te: ke o Logos: sarkoki zinamis:
                    thin
                    oranon: angelon eteki: tesin tesina: pen etropees efren-ethe: a-poutees ilaee:</td>
                <td class="arPhonics" >ثيؤذوكسا ستيه كى أو لوغوس ساركوكى ذيناميس
                    ثين
                    أورانون أن جيلون إى تيك إى تيسين تيسينا بين إتروبيس إف رانيثى. أبوتيس إى لا إى</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_6">
            <tr class="north" id="table_4_row_12">
                <td class="english" >honor unto you, in the human race, the joy,
                    to
                    all the people, the archangels, with the hosts of angels proclaim: rejoice O Mary, you are full of
                    grace, the Lord is with you.</td>
                <td class="coptic" >ⲧⲟⲛ ⲁⲣⲭⲏ ⲁⲅⲅⲉⲗⲓ: ⲁⲗⲑⲓⲛⲛⲁ ⲃⲁⲡⲧⲓⲥⲙⲁ: ⲧⲟⲛ ⲁⲣⲭⲏ
                    ⲁⲅⲅⲉⲗⲓ: ⲣⲁϣⲓ Ⲙⲁⲣⲓⲁ̀ⲙ: ⲕⲉ ⲭⲁⲣⲓⲧⲟⲩⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">فى البشريين الفرح لجميع الشعوب رؤساء الملائكة يهتفون مع صفوف الملائكة قائلين: إفرحى
                    يا
                    مريم يا ممتلئة نعمة. الرب معك.</td>
            </tr>
            <tr class="south" id="table_4_row_13">
                <td class="enPhonics" >ton arshee angeli althin-na: baptis-ma: ton
                    arshee angeli: rashi Mariam: ke khari-tomeni: o kirios metaso.</td>
                <td class="arPhonics" >تون أرشى أنجيلى ألثيننا فاب تيس ما تون أرشى
                    أنجيلى راشى ماريام كى خارى تومينى. أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_7">
            <tr class="north" id="table_4_row_14">
                <td class="english" >+ Hail to the Theotokos, hail to the holy
                    Virgin,
                    hail to the mother of our Savior, rejoice O Mary,</td>
                <td class="coptic" >Ⲭⲉⲣⲉ Ⲑⲉⲟⲧⲟⲕⲉ: ⲭⲉⲣⲉ ⲡⲁⲛⲁ̀ⲅⲓⲁ ⲡⲁⲣⲑⲉⲛⲓⲁ: ⲭⲉⲣⲉ
                    ⲙⲉⲑⲉⲣⲑⲉ
                    ⲟ̀ ⲥⲱⲧⲏⲣⲓⲁ̀: ⲣⲁϣⲓ Ⲙⲁⲣⲓⲁ̀ⲙ:</td>
                <td class="arabic">+السلام لوالدة الاله. السلام للقديسة البتول. السلام لأم مخلصنا إفرحى إفرحلى يا مريم
                </td>
            </tr>
            <tr class="south" id="table_4_row_15">
                <td class="enPhonics" >Shere theotoke: shere pen-agia: parthenia:
                    shere meth-erthe osoteeria: rashe Mariam:</td>
                <td class="arPhonics" >شيرى ثيئوطوكى شيرى بين آجيا بارثينيا شيرى
                    ميه
                    ثيرثيه أو سوتيريا راشى ماريام</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_8">
            <tr class="north" id="table_4_row_16">
                <td class="english" >O you who gave birth to God, rejoice O holy
                    Virgin, rejoice O Mother of Christ.</td>
                <td class="coptic" >ⲇ̀ⲣⲉⲁⲥϫ̀ⲫⲉ Ⲫϯ: ⲣⲁϣⲓ ⲱ̀ ϯ̅ⲡ̅ⲁ̅ⲣ ⲉⲑⲟⲩⲁⲃ: ⲣⲁϣⲓ
                    ⲑ̀ⲙⲁⲩ
                    ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">يا من ولدت الله (الكلمة) إفرحى ايتها العذراء الطاهرة إفرحى يا أم المسيح.</td>
            </tr>
            <tr class="south" id="table_4_row_17">
                <td class="enPhonics" >Edthre-a-segfe Evnoti: rashe o Ti-parthenos
                    ethowab: rashe ethmav em-Piekhiristos.</td>
                <td class="arPhonics" >إذرى آس إجفيه إفنوتى راشى أو تى بارثينوس
                    إثؤواب
                    راشى إثماف إم بى إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_9">
            <tr class="north" id="table_4_row_18">
                <td class="english" >+ Hail to the heaven, hail to the chaste,
                    hail to
                    the Mother of Christ, hail to the bride, hail to the wise, rejoice O Mother of our Savior,</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲧ̀ⲫⲉ: ⲭⲉⲣⲉ ⲱ̀ ⲥⲉⲙⲛⲉ: ⲭⲉⲣⲉ ⲙⲓⲑⲉⲣⲑⲉ ⲟ̀
                    Ⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲭⲉⲣⲉ ⲧ̀ϣⲉⲗⲉⲧ: ⲭⲉⲣⲉ ⲧ̀ⲥⲁⲃⲉ ⲣⲁϣⲓ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲉⲛⲥⲱⲧⲏⲣ:</td>
                <td class="arabic">+السلام للسماء. السلام للعفيفة السلام لأم المسيح السلام للعروسة. السلام للحكيمة.</td>
            </tr>
            <tr class="south" id="table_4_row_19">
                <td class="enPhonics" >Shere etfe: shere o semne: shere mither-the
                    o
                    Ekhristos: shere et-sheleet shere et-save: rashe ethmav em-pensoteer:</td>
                <td class="arPhonics" >شيرى إتفى شيرى أو سيمنى شيرى مي ثيرثيؤ
                    إخرستوس
                    شيرى إتشيليت شيرى إت سافيه راشى إثماف إم بين سوتير</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_10">
            <tr class="north" id="table_4_row_20">
                <td class="english" >rejoice O Mother of the Light of the world.
                    Hail
                    to the one, the archangels announced to.</td>
                <td class="coptic" >ⲣⲁϣⲓ ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲭⲉⲣⲉ ⲁϥϯ ⲁ̀ⲭⲱⲣⲁⲩⲧⲏⲥ:
                    ⲧⲟⲛ
                    ⲁⲣⲭⲏ ⲁⲅⲅⲉⲗⲓ.</td>
                <td class="arabic">إفرحى يا ام نور العالم السلام للتى بشرها رئيس الملائكة.</td>
            </tr>
            <tr class="south" id="table_4_row_21">
                <td class="enPhonics" >rashe piou-oini em-pikosmos: shere afti
                    a-khorav-tees: ton arshee angeli.</td>
                <td class="arPhonics" >راشى بى أو أوينى إم بى كوزموس شيرى أفتى
                    أخور
                    أفتيس تون أرشى أنجيلى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_11">
            <tr class="north" id="table_4_row_22">
                <td class="english" >+ Rejoice O you the one that is honored, by
                    the
                    choir of the angels, rejoice O Mary, O full of grace, the Lord is with you.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲙ̀ⲡ̀ⲧⲁⲓⲟ ⲙ̀ⲫ̀ⲛⲁⲩ: ⲛ̀ϫⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ:
                    Ⲣⲁϣⲓ Ⲙⲁⲣⲓⲁ̀ⲙ: ⲕⲉ ⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">+إفرحى يا كرامة منظر صفوف الملائكة إفرحى يا مريم يا مملوءة نعمة الرب معك.</td>
            </tr>
            <tr class="south" id="table_4_row_23">
                <td class="enPhonics" >Rashe em-eptayo: em-efnav enje ep-khoros
                    en-angelos: Rashe Mariam: ke khari-tomeni: o kirios metaso.</td>
                <td class="arPhonics" >راشى إم إبطايو إم إمفناف إنجى إبخوروس إن
                    أنجيلوس راشى ماريام كى خاريتومينى أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_12">
            <tr class="north" id="table_4_row_24">
                <td class="english" >+ Blessed is your birth giving, and blessed
                    is
                    your rejoicing heart, hail to you O Mary, you have found grace, the Lord is with you. ;</td>
                <td class="coptic" >Ⲉⲩⲗⲟⲅⲓⲙⲉⲛⲟⲥ ⲛ̀ϫⲉ ⲛ̀ⲛⲉⲕⲥⲏⲛ: ⲕⲉ ⲉⲩⲗⲟⲅⲓⲙⲉⲛⲟⲥ: ⲧⲏⲥ
                    ⲕⲁⲣⲡⲓⲥ: ⲡⲉⲥⲕⲁⲣⲓ ⲟⲩⲥⲁⲣⲣⲁ: Ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁ̀ⲙ: ⲕⲉ ⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ: ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">+مبارك ميلادك ومبارك هو ثمرتك بفرح قلبك ، إفرحى يا مريم يا ممتلئة نعمة. الرب معك.
                </td>
            </tr>
            <tr class="south" id="table_4_row_25">
                <td class="enPhonics" >Evlogmenos enje en-nkeseen: ke-evlogimenos:
                    tees karpis: piskari o-sarra: shere Mariam: ke khari-tomeni: o kiros metaso.</td>
                <td class="arPhonics" >افلوجيمينوس إنجى إن نيك سين :كى افلوجيمينوس
                    تيس
                    كاربيس : بيس كارى أوسارا :شيرى ماريام كى خارى تومينى. أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_4_tbody_13">
            <tr class="north" id="table_4_row_26">
                <td class="english" >+ Blessed are you among women, and blessed is
                    your fruit, which your heart rejoices in, O Mary, you have found grace, the Lord is with you.</td>
                <td class="coptic" >Ⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲑⲟ ϧⲉⲛ ⲛⲓϩⲓⲟⲙⲓ: ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ
                    ⲡⲉⲕⲁⲣⲡⲟⲥ: ⲛ̀ϩⲏⲧ ϥ̀ⲣⲁϣⲓ ⲙ̀Ⲙⲁⲣⲓⲁ̀ⲙ: ⲕⲉ ⲭⲁⲣⲓⲧⲱⲙⲉⲛⲏ ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁⲥⲟⲩ.</td>
                <td class="arabic">+مباركة أنت فى النساء مبلرك هو ثمرتك المفرح قلبك يا مريم وجدت نعمة. الرب معك.</td>
            </tr>
            <tr class="south" id="table_4_row_27">
                <td class="enPhonics" >Et-esmaroot entho-khen nihiomi: ef-esmaroot
                    enje pekarpos enheet ef-rashe Mariam: ke khari-tomeni: o kirios metaso.</td>
                <td class="arPhonics" >ات إسمارٶوت إنثو خين نى هيومى :اف إسمارٶوت
                    انجى
                    بى كاربوس انهيت إفراشى ماريام: كى خاريتومينى أو كيريوس ميتاسو.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_5" title="Ari Epresvevin" style="display: table;">
        <caption class="caption" id="caption_table_5">Intercede On Our Behalf
        <span class="coptic-caption">Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ</span>
        <span class="arabic-caption">إشفعى فينا</span>
        </caption>

        <tbody ${tbodyClass}  id="table_5_tbody_0">
            <tr id="table_5_row_0" class="north">
                <td class="english" >Intercede on our behalf, O Lady of us all the
                    Mother of God, Saint Mary the Mother of Jesus Christ, that He may forgive us our sins.</td>
                <td class="coptic" >Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ: ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ
                    ⲧⲏⲣⲉⲛ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">إشفعى فينا كلنا يا سيدتنا والدة الإله مريم أم يسوع المسيح ليغفر لنا خطايانا.</td>
            </tr>
            <tr id="table_5_row_1" class="south">
                <td class="enPhonics" >Ari-epresvevin e-ehree egon: o-tenchois
                    en-neeb teeren tee-theotokos: Maria ethmav en-Isos Pi-ekhristos: entef ka nen-novi nan evol.</td>
                <td class="arPhonics" >أرى إبريس فيفين إى إهرى إيجون: أو تين شويس
                    إن نيف تيرين تى ثيئوطوكوس ماريا إثماف إن إيسوس بى إخرستوس إنتيف كانين نوفى نان إيفول.</td>
            </tr>
    </table>
    <br>
    <table id="table_6" style="display: table;" title="Rashi Ne">
        <caption class="caption" id="caption_table_6">Rejoice O You Theotokos
        <span class="coptic-caption">Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ</span>
        <span class="arabic-caption">الفرح لك يا والدة الإله</span>
        </caption>
        <tbody ${tbodyClass}  id="table_6_tbody_0">
            <tr class="refrain" id="table_6_row_0">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_1">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_1">
            <tr class="north" id="table_6_row_2">
                <td class="english" >Rejoice O daughter of Zion, we rejoice, O
                    mother
                    of the King.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ⲧ̀ϣⲏⲣⲓ ⲛ̀Ⲥⲓⲱⲛ : ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲁⲩ ⲑ̀ⲙⲁⲩ
                    ⲙ̀ⲡ̀ⲟⲩⲣⲟ.</td>
                <td class="arabic">الفرح لك يا إبنة صهيون تهللى يا أم الملك.</td>
            </tr>
            <tr class="south" id="table_6_row_3">
                <td class="enPhonics" >Rashe ne o-et-sheri en-sion: theleel em-mav
                    ethmav em-eporo.</td>
                <td class="arPhonics" >راشى نى أو إتشيرى إنسيون ثيليل إمماف إثماف
                    إم
                    إبؤورو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_2">
            <tr class="refrain" id="table_6_row_4">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_5">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_3">
            <tr class="north" id="table_6_row_6">
                <td class="english" >Rejoice to God, our helper, rejoice to the
                    God of
                    Jacob.</td>
                <td class="coptic" >Ⲑⲉⲗⲏⲗ ⲙ̀Ⲫⲛⲟⲩϯ ⲙ̀ⲡⲉⲛⲃⲟⲏⲑⲟⲥ : ϯⲗⲉⲗⲟⲓ ⲙ̀Ⲫⲛⲟⲩϯ
                    ⲛ̀Ⲓⲁⲕⲱⲃ.</td>
                <td class="arabic">إبتهجوا بالله معيننا هللوا لإله يعقوب.</td>
            </tr>
            <tr class="south" id="table_6_row_7">
                <td class="enPhonics" >Theleel em-evnoti em-pen voeethos:
                    tee-le-loi
                    em-evnoti en-Iakob.</td>
                <td class="arPhonics" >ثيليل إم إفنوتى إم بين فو إى ثوس تى لا لوى
                    إم
                    إفنوتى إن ياكوب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_4">
            <tr class="refrain" id="table_6_row_8">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_9">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_5">
            <tr class="north" id="table_6_row_10">
                <td class="english" >So let Jacob rejoice, and also let Israel
                    rejoice.</td>
                <td class="coptic" >Ϥ̀ⲛⲁⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ Ⲓⲁⲕⲱⲃ : ϥ̀ⲛⲁⲟⲩⲛⲟϥ ⲛ̀ϫⲉ
                    Ⲡⲓⲥ̀ⲣⲁⲏⲗ.
                </td>
                <td class="arabic">فيتهلل يعقوب. ويفرح إسرائيل.</td>
            </tr>
            <tr class="south" id="table_6_row_11">
                <td class="enPhonics" >Efna-theleel enje Iakob: efna-ounof enje Pi
                    Esra-eel.</td>
                <td class="arPhonics" >إفنا ثيليل إنجى ياكوب إفنا إونوف إنجيه بى
                    إسرائيل.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_6">
            <tr class="refrain" id="table_6_row_12">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_13">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_7">
            <tr class="north" id="table_6_row_14">
                <td class="english" >We rejoice forever, indeed, and also we
                    implore.
                </td>
                <td class="coptic" >Ⲥⲉⲛⲁ ⲑⲉⲗⲏⲗ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ : ⲛ̀ⲥⲉⲟⲩⲱⲛϩ ⲛ̀ⲟⲩϩⲉⲗⲡⲓⲥ.
                </td>
                <td class="arabic">نتهلل إلى الأبد نعم ونترجى.</td>
            </tr>
            <tr class="south" id="table_6_row_15">
                <td class="enPhonics" >Sena theleel sha ni-eneh: ensa-ouonh
                    eno-helpees.</td>
                <td class="arPhonics" >سينا ثيليل شا نى إينيه إن سى أو أونه إن أو
                    هيلبيس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_8">
            <tr class="refrain" id="table_6_row_16">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_17">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_9">
            <tr class="north" id="table_6_row_18">
                <td class="english" >Rejoice O you vine, that is ripe and
                    blossoming.
                </td>
                <td class="coptic" >Ⲫⲁⲑⲉⲗⲏⲗ ⲥⲱⲧⲧⲉⲛ ⲉ̀ⲗⲟⲗ : ϩⲓⲧⲉⲛ ⲛⲟⲧⲉⲛ
                    ⲙ̀ⲡⲉⲣⲕⲟⲧⲧⲉⲛ.
                </td>
                <td class="arabic">تهللى أيتها الكرمة الدسمة المثمرة.</td>
            </tr>
            <tr class="south" id="table_6_row_19">
                <td class="enPhonics" >Fa-theleel sotten elol: hee-ten noten
                    em-perkotten.</td>
                <td class="arPhonics" >فا ثيليل سوتين إى لول هيتين نوتين إم
                    بيركوتين.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_10">
            <tr class="refrain" id="table_6_row_20">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_21">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_11">
            <tr class="north" id="table_6_row_22">
                <td class="english" >My heart rejoices, for this my tongue also
                    praises.</td>
                <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲉ̀ⲟⲩⲫ̀ⲣⲁⲛⲉ : ⲉⲑⲃⲉ ⲡⲁⲗⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ.
                </td>
                <td class="arabic">قلبى يفرح من اجل لسانى بتهليل.</td>
            </tr>
            <tr class="south" id="table_6_row_23">
                <td class="enPhonics" >Apaheet e-ou-efrane: ethve palas khen
                    o-theleel.</td>
                <td class="arPhonics" >ابا هيت إيه أو فرانى إثفيه بالاس خين أو
                    ثيليل.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_12">
            <tr class="refrain" id="table_6_row_24">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_25">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_13">
            <tr class="north" id="table_6_row_26">
                <td class="english" >The dew and the rain, and the rejoicing are
                    due
                    to your name.</td>
                <td class="coptic" >Ⲑⲁϥⲟⲣⲙⲉⲛ ϩⲟⲣⲙⲟⲛⲁ : ⲛⲉⲙ ⲛⲉⲑⲉⲗⲏⲗ ϩⲁⲙ̀ⲡⲉⲕⲣⲁⲛ.
                </td>
                <td class="arabic">الندى والمطر مدلاة على اسمك.</td>
            </tr>
            <tr class="south" id="table_6_row_27">
                <td class="enPhonics" >Thaformen hormona: nem ne-theleel
                    ha-empekran.
                </td>
                <td class="arPhonics" >ثاف أورمين هورمونا نيم نيه ثيليل ها إمبيك
                    ران.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_6_tbody_14">
            <tr class="refrain" id="table_6_row_28">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_6_row_29">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_7" style="display: table;" title="Sena Etsho">
        <caption class="caption" id="caption_table_7">Many Are All Your Wonders
        <span class="coptic-caption">Ⲥⲉⲛⲁ ⲧ̀ϣⲟ</span>
        <span class="arabic-caption">كثيرة هى عجائبك</span>
        </caption>
        <tbody ${tbodyClass}  id="table_7_tbody_0">
            <tr class="refrain" id="table_7_row_0">
                <td class="english" >Many are all your wonders, and precious is
                    your
                    glory, O the pride of all the virgins, Mary the fair dove.</td>
                <td class="coptic" >Ⲥⲉⲛⲁ ⲧ̀ϣⲟ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲛ̀ⲥⲁϣⲟ ⲙ̀ⲡⲉⲱⲟⲩ:
                    ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ: Ⲙⲁⲣⲓⲁ̀ ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
                <td class="arabic">كثيرة هى عجائبك وغالى هو مجدك يا فخر جميع العذارى مريم الحمامة الحسنة.</td>
            </tr>
            <tr class="south" id="table_7_row_1">
                <td class="enPhonics" >Sena etsho en-na eshfeeri teero: ensa-sho
                    empeo-ou: epshou-shou en-ni parthenos teero Maria ti-etchrompi ethnesos.</td>
                <td class="arPhonics" >سينا إتشو إن نا إشفيرى تيرو إن سا شو إم بى
                    أوأو
                    إبشوشو إن نى بارثينوس تيرو ماريا تى إتشرومبى إثنيسوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_1">
            <tr class="north" id="table_7_row_2">
                <td class="english" >The Lord our Lord how wonderful, is Your name
                    upon all the earth</td>
                <td class="coptic" >‘Ⲡϭⲟⲓⲥ ⲡⲉⲛϭⲟⲓⲥ ⲛ̀ⲑⲁⲛⲟⲩϣ̀ⲫⲏⲣⲓ: ⲡⲉ ⲡⲉⲕⲣⲁⲛ ϩⲓϫⲉⲛ
                    ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ.</td>
                <td class="arabic">الرب ربنا ما أعجب إسمك على الأرض كلها.</td>
            </tr>
            <tr class="south" id="table_7_row_3">
                <td class="enPhonics" >Epchois penchois en-thano eshveeri: pe
                    pekran
                    hijen epkahi teerf.</td>
                <td class="arPhonics" >إبشويس بين شويس إن ثانو إشفيرى بى بيكران
                    هيجين
                    إبكاهى تيرف.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_2">
            <tr class="refrain" id="table_7_row_4">
                <td class="english" >Many are all your wonders, and precious is
                    your
                    glory, O the pride of all the virgins, Mary the fair dove.</td>
                <td class="coptic" >Ⲥⲉⲛⲁ ⲧ̀ϣⲟ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲛ̀ⲥⲁϣⲟ ⲙ̀ⲡⲉⲱⲟⲩ:
                    ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ: Ⲙⲁⲣⲓⲁ̀ ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
                <td class="arabic">كثيرة هى عجائبك وغالى هو مجدك يا فخر جميع العذارى مريم الحمامة الحسنة.</td>
            </tr>
            <tr class="south" id="table_7_row_5">
                <td class="enPhonics" >Sena etsho en-na eshfeeri teero: ensa-sho
                    empeo-ou: epshou-shou en-ni parthenos teero Maria ti-etchrompi ethnesos.</td>
                <td class="arPhonics" >سينا إتشو إن نا إشفيرى تيرو إن سا شو إم بى
                    أوأو
                    إبشوشو إن نى بارثينوس تيرو ماريا تى إتشرومبى إثنيسوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_3">
            <tr class="north" id="table_7_row_6">
                <td class="english" >Glory and honor, to Your mother the high
                    crown.
                </td>
                <td class="coptic" >Ⲟⲩⲱ̀ⲟⲩ ⲛⲉⲙ ⲟⲩⲧⲁⲓⲟ̀: ⲛⲉⲙ ⲧⲉⲕⲙⲁⲩ ⲛ̀ⲭ̀ⲗⲟⲙ
                    ⲉ̀ⲧϣⲟⲥϥ.
                </td>
                <td class="arabic">مجدا مع إكراما لأمك الإكليل العالى.</td>
            </tr>
            <tr class="south" id="table_7_row_7">
                <td class="enPhonics" >Ou-a-ou nem ou-taio: nem tek-mav en-eklom
                    etshosf:</td>
                <td class="arPhonics" >أوأو نيم أو طايو نيم تيك ماف إن إكلوم
                    إتشوسف.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_4">
            <tr class="refrain" id="table_7_row_8">
                <td class="english" >Many are all your wonders, and precious is
                    your
                    glory, O the pride of all the virgins, Mary the fair dove.</td>
                <td class="coptic" >Ⲥⲉⲛⲁ ⲧ̀ϣⲟ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲛ̀ⲥⲁϣⲟ ⲙ̀ⲡⲉⲱⲟⲩ:
                    ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ: Ⲙⲁⲣⲓⲁ̀ ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
                <td class="arabic">كثيرة هى عجائبك وغالى هو مجدك يا فخر جميع العذارى مريم الحمامة الحسنة.</td>
            </tr>
            <tr class="south" id="table_7_row_9">
                <td class="enPhonics" >Sena etsho en-na eshfeeri teero: ensa-sho
                    empeo-ou: epshou-shou en-ni parthenos teero Maria ti-etchrompi ethnesos.</td>
                <td class="arPhonics" >سينا إتشو إن نا إشفيرى تيرو إن سا شو إم بى
                    أوأو
                    إبشوشو إن نى بارثينوس تيرو ماريا تى إتشرومبى إثنيسوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_5">
            <tr class="north" id="table_7_row_10">
                <td class="english" >Precious are all your wonders, your happiness
                    and
                    joy.</td>
                <td class="coptic" >Ϯⲛⲁⲧ̀ϣⲟⲩ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ⲧⲏⲣⲟⲩ: ϯⲛⲁⲟⲩⲛⲟϥ ⲛⲉⲙ
                    ⲧⲟⲑⲉⲗⲏⲗ.
                </td>
                <td class="arabic">عالية هى عجائبك كلها وفرحك وبهجتك.</td>
            </tr>
            <tr class="south" id="table_7_row_11">
                <td class="enPhonics" >Tina-etsho en-na eshfeeri teero: tina-ounof
                    nem
                    to-theleel.</td>
                <td class="arPhonics" >تينا إتشو إن نا إشفيرى تيرو تى نا أونوف نيم
                    أو
                    ثيليل.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_6">
            <tr class="refrain" id="table_7_row_12">
                <td class="english" >Many are all your wonders, and precious is
                    your
                    glory, O the pride of all the virgins, Mary the fair dove.</td>
                <td class="coptic" >Ⲥⲉⲛⲁ ⲧ̀ϣⲟ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲛ̀ⲥⲁϣⲟ ⲙ̀ⲡⲉⲱⲟⲩ:
                    ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ ⲧⲏⲣⲟⲩ: Ⲙⲁⲣⲓⲁ̀ ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ.</td>
                <td class="arabic">كثيرة هى عجائبك وغالى هو مجدك يا فخر جميع العذارى مريم الحمامة الحسنة.</td>
            </tr>
            <tr class="south" id="table_7_row_13">
                <td class="enPhonics" >Sena etsho en-na eshfeeri teero: ensa-sho
                    empeo-ou: epshou-shou en-ni parthenos teero Maria ti-etchrompi ethnesos.</td>
                <td class="arPhonics" >سينا إتشو إن نا إشفيرى تيرو إن سا شو إم بى
                    أوأو
                    إبشوشو إن نى بارثينوس تيرو ماريا تى إتشرومبى إثنيسوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_7_tbody_7">
            <tr class="north" id="table_7_row_14">
                <td class="english" >Precious are all your wonders, and glorified
                    is
                    all your greatness.</td>
                <td class="coptic" >Ϯⲛⲁⲧ̀ϣⲟⲩ ⲛ̀ⲛⲁϣ̀ⲫⲏⲣⲓ ⲧⲏⲣⲟⲩ: ⲟⲩⲱ̀ⲟⲩ ⲉ̀ⲃⲟⲗ
                    ⲛ̀ⲛⲉⲕⲁⲥ
                    ⲧⲏⲣⲟⲩ.</td>
                <td class="arabic">عالية هى عجائبك كلها وممجدة هى جميع عظائمك.</td>
            </tr>
            <tr class="south" id="table_7_row_15">
                <td class="enPhonics" >Tina-etsho en-na eshfeeri teero: Ou-a-ou
                    evol
                    en-nekas teero.</td>
                <td class="arPhonics" >تينا إتشو إن نا إشفيرى تيرو أوأو إيفول إن
                    نيكاس
                    تيرو.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_8" style="display: table;" title="Fai Pe Eplimen">
        <caption class="caption" id="caption_table_8">The Pillar of Light
        <span class="coptic-caption">Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ</span>
        <span class="arabic-caption">عمود النور</span>
        </caption>

        <tbody ${tbodyClass}  id="table_8_tbody_0">
            <tr class="north" id="table_8_row_0">
                <td class="english" >The pillar of light, is Mary the virgin.</td>
                <td class="coptic" >Ⲥⲧⲩⲗⲗⲟⲥ ⲉ̀ⲧⲉ ⲉ̀ⲣⲟⲩⲱⲓⲛⲓ: ⲡⲉ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.
                </td>
                <td class="arabic">عمود النور هى مريم العذراء.</td>
            </tr>
            <tr class="south" id="table_8_row_1">
                <td class="enPhonics" >Estillos ete erooini: pe Maria
                    ti-parthenos:
                </td>
                <td class="arPhonics" >إستيللوس إتئى إر أو أوينى: بى ماريا تى
                    بارثينوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_1">
            <tr class="refrain" id="table_8_row_2">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_3">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_2">
            <tr class="north" id="table_8_row_4">
                <td class="english" >Patient is the Virgin, and beautiful is her
                    virginity.</td>
                <td class="coptic" >Ⲥⲩⲛⲧⲉⲣⲃⲓⲛ ⲉ̀ⲧⲁⲓ ⲡⲁⲣⲑⲉⲛⲟⲥ: ϩⲁⲛ ⲑ̀ⲙⲉⲧⲉⲛⲛⲉⲥ
                    ⲛ̀ⲧⲉⲥⲡⲁⲣⲑⲉⲛⲓⲁ̀</td>
                <td class="arabic">صابرة هذه العذراء وحسنة هى بتوليتها</td>
            </tr>
            <tr class="south" id="table_8_row_5">
                <td class="enPhonics" >Sintervin etai parthenos han ethmet-ennes:
                    entes-parthenia:</td>
                <td class="arPhonics" >سين تيرفين إيطاى بارثينوس: هان إثميت إننيس
                    إنتيس بارثينيا.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_3">
            <tr class="refrain" id="table_8_row_6">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_7">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_4">
            <tr class="north" id="table_8_row_8">
                <td class="english" >For this our Savior, raised her up to His
                    Kingdom.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲉ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ: ⲟⲗⲥ ⲉ̀ϧⲟⲩⲛ ⲉⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ.
                </td>
                <td class="arabic">من اجل هذا مخلصنا رفعها الى ملكوته.</td>
            </tr>
            <tr class="south" id="table_8_row_9">
                <td class="enPhonics" >Ethve fai e-Pensoteer: ols ekhon
                    etef-metoro:
                </td>
                <td class="arPhonics" >إثفى فاى إ بينسوتير: أولس إيخون إيتيف ميت
                    أورو.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_5">
            <tr class="north" id="table_8_row_10">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="refrain" id="table_8_row_11">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_6">
            <tr class="north" id="table_8_row_12">
                <td class="english" >He gave her good things, which no eye can
                    gaze
                    upon.</td>
                <td class="coptic" >Ⲁϥϯ ⲛⲁⲥ ⲛ̀ⲛⲓⲁⲅⲁⲑⲟⲛ: ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲡⲉⲃⲁⲗ ⲛⲁⲩⲉ̀ⲣⲱⲟⲩ.
                </td>
                <td class="arabic">وأعطاها الخيرات التى لم ترها عين.</td>
            </tr>
            <tr class="south" id="table_8_row_13">
                <td class="enPhonics" >Afti nas en-niagathon: nee-ete empeval
                    nav-ero-ou:</td>
                <td class="arPhonics" >أفتى ناس إمبى أغاثون: نى إيتى إمبيفال ناف
                    إيرو
                    أو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_7">
            <tr class="refrain" id="table_8_row_14">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_15">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_8">
            <tr class="north" id="table_8_row_16">
                <td class="english" >You are the high tower, according to the
                    words of
                    the wise.</td>
                <td class="coptic" >Ⲛⲑⲟ ⲅⲁⲣ ⲡⲉ ⲡⲉⲣⲅⲟⲥ ⲉⲧϭⲟⲥⲓ: ⲕⲁⲧⲁ ⲡ̀ⲥⲁϫⲓ
                    ⲙ̀ⲡⲓⲥⲟⲫⲟⲥ. \
                </td>
                <td class="arabic">أنت هى البرج العالى كقول الحكيم.</td>
            </tr>
            <tr class="south" id="table_8_row_17">
                <td class="enPhonics" >Entho ghar pe pergos: et-etchosi kata
                    epsagi
                    empisofos:</td>
                <td class="arPhonics" >إنثو غار بى بيرغوس: إت إتشوسى كاطا إبساجى
                    إمبيسوفوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_9">
            <tr class="refrain" id="table_8_row_18">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_19">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_10">
            <tr class="north" id="table_8_row_20">
                <td class="english" >You are the salvation of Adam, and all his
                    children with him.</td>
                <td class="coptic" >Ⲛⲑⲟ ⲅⲁⲣ ⲟⲩⲥⲱϯ ⲛ̀Ⲁ̀ⲇⲁⲙ: ⲛⲉⲙ ⲛⲉϥϣⲏⲣⲓ ⲧⲏⲣⲟⲩ
                    ⲉⲩⲥⲟⲡ.
                </td>
                <td class="arabic">أنت هى خلاص آدم وبنيه معه.</td>
            </tr>
            <tr class="south" id="table_8_row_21">
                <td class="enPhonics" >Entho ghar osoti en-Adam: nem nef-sheeri
                    teero
                    evsop:</td>
                <td class="arPhonics" >إنثو غار أوسوتى إن آدام: نيم نيف شيرى تيرو
                    إفسوب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_11">
            <tr class="refrain" id="table_8_row_22">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_23">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_12">
            <tr class="north" id="table_8_row_24">
                <td class="english" >You are truly, the pure bride.</td>
                <td class="coptic" >Ⲛⲑⲟ ⲅⲁⲣ ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ: ⲡⲓⲙⲁⲛ̀ϣⲉⲗⲉⲧ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.</td>
                <td class="arabic">أنت هى بالحقيقة العروس النقية.</td>
            </tr>
            <tr class="south" id="table_8_row_25">
                <td class="enPhonics" >Entho ghar alee-thinon: pima-ensheleet
                    en-katharos:</td>
                <td class="arPhonics" >إنثو غار أليثينون: بيما إنشيليت إنكاثاروس.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_13">
            <tr class="refrain" id="table_8_row_26">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_27">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_14">
            <tr class="north" id="table_8_row_28">
                <td class="english" >Mary the rejoicing of the angels, Mary the
                    pride
                    of the apostles.</td>
                <td class="coptic" >Ⲙⲁⲣⲓⲁ̀ ⲫ̀ⲣⲁϣⲓ ⲛ̀ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲡ̀ϣⲟⲩϣⲟⲩ
                    ⲛ̀ⲛⲓⲁ̀-ⲡⲟⲥⲧⲟⲗⲟⲥ.</td>
                <td class="arabic">مريم فرح الملائكة مريم فخر الرسل.</td>
            </tr>
            <tr class="south" id="table_8_row_29">
                <td class="enPhonics" >Maria Efrashi en-niangelos: Maria
                    epshoushou
                    enni-apostolos.</td>
                <td class="arPhonics" >ماريا إفراشى إننى أنجيلوس: ماريا إبشوشو
                    إننى
                    أبوسطولوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_8_tbody_15">
            <tr class="refrain" id="table_8_row_30">
                <td class="english" >This is the portrait of the Theotokos, Mary
                    the
                    mother of the Son of God.</td>
                <td class="coptic" >Ⲫⲁⲓ ⲡⲉ ⲡ̀ⲗⲩⲙⲉⲛ ⲱ̀ Ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ: Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ
                    ⲛ̀Ⲩⲓⲟⲥ
                    Ⲑⲉⲟⲥ.</td>
                <td class="arabic">هذه هى صورة والدة الاله مريم ام إبن الله.</td>
            </tr>
            <tr class="south" id="table_8_row_31">
                <td class="enPhonics" >Fai pe eplimen o Ti-theotokos: Maria ethmav
                    en
                    Yos Theos.</td>
                <td class="arPhonics" >فاى بى إبليمين أو تى ثيؤطوكوس ماريا إثماف
                    إن
                    إيوس ثيؤس.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_9" style="display: table;" title="Entho Ethmav">
        <caption class="caption" id="caption_table_9">You Are The Mother of Light
        <span class="coptic-caption">Ⲛⲑⲟ ⲑ̀ⲙⲁⲩ</span>
        <span class="arabic-caption">أنت يا أم النور</span>
        </caption>
        <tbody ${tbodyClass}  id="table_9_tbody_0">
            <tr class="north" id="table_9_row_0">
                <td class="english" >You are the Mother of Light, the honored
                    Mother
                    of God, you have carried, the Uncircumscript Logos.</td>
                <td class="coptic" >Ⲛⲑⲟ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲟⲩⲱⲓⲛⲓ : ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲁⲥⲛⲟⲩϯ :
                    ⲁ̀ⲣⲉϥⲁⲓ ϧⲁ ⲡⲓⲗⲟⲅⲟⲥ : ⲡⲓⲁⲭⲱⲣⲓⲧⲟⲥ.</td>
                <td class="arabic">أنت ياأم النور المكرمة والدة الاله حملت الكلمة غير المحوى .</td>
            </tr>
            <tr class="south" id="table_9_row_1">
                <td class="enPhonics" >En-tho eth-mav em-pee-oo-oy-nee: et-tie-yot
                    emmas-no-tee: aref-ay kha pee-lo-ghos: pee ah kho ree tose.</td>
                <td class="arPhonics" >إنثو إثماف إم بى أو أوينى: إتتايوت
                    إمماسنوتى:
                    أريفاى خا بى لوغوس: بى اخوريتوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_1">
            <tr class="north" id="table_9_row_2">
                <td class="english" >After you gave birth to Him, you remained a
                    virgin, with praises and blessings, we magnify you.</td>
                <td class="coptic" >Ⲙⲉⲛⲉⲛⲥⲁ ⲑ̀ⲣⲉⲙⲁⲥϥ : ⲁ̀ⲣⲉⲟ̀ϩⲓ ⲉ̀ⲣⲉⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ
                    :
                    ϧⲉⲛ ϩⲁⲛϩⲱⲥ ⲛⲉⲙ ϩⲁⲛⲥ̀ⲙⲟⲩ : ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ.</td>
                <td class="arabic">ومن بعد أن ولدته بقيت عذراء. نعظمك بتسابيح و بركات</td>
            </tr>
            <tr class="south" id="table_9_row_3">
                <td class="enPhonics" >Men-ensa eth-re-masf: ar-reohee er-re-oy
                    emparthenos: khen han-hos nem han-esmo: ten-etcheesee emmo.</td>
                <td class="arPhonics" >مينينسا إثرى ماسف: أرى أوهى إرإى أوى
                    إمبارثينوس: خين هان هوس نيم هان إزمو: تين إتشيسى إممو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_2">
            <tr class="north" id="table_9_row_4">
                <td class="english" >For of His own will, and the pleasure of His
                    Father, and the Holy Spirit, He came and saved us.</td>
                <td class="coptic" >Ϫⲉ ⲛ̀ⲑⲟϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ : ⲛⲉⲙ ⲡ̀ϯⲙⲁϯ ⲙ̀Ⲡⲉϥⲓⲱⲧ :
                    ⲛⲉⲙ
                    Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ⲁϥⲓ̀ ⲁϥⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                <td class="arabic">لانه بارادته ومسرة أبيه والروح القدس أتى وخلصنا .</td>
            </tr>
            <tr class="south" id="table_9_row_5">
                <td class="enPhonics" >Je enthof khen pef-oo-osh: nem ep-teematee
                    em-pef-yot: nem pee-epnevma eth-oo-ab: af-ee af-so-tee emmon.</td>
                <td class="arPhonics" >جى إنثوف خين بيف أو أوش: نيم إبتيماتى
                    إمبيفيوت:
                    نيم بى إبنيفما إثؤواب: أفئي أفسوتى إممون.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_3">
            <tr class="north" id="table_9_row_6">
                <td class="english" >And we too, hope to win mercy, through your
                    intercessions, with the Lover of mankind.</td>
                <td class="coptic" >Ⲁⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                    ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀: ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
                <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك لدى محب البشر .</td>
            </tr>
            <tr class="south" id="table_9_row_7">
                <td class="enPhonics" >A-non hown ten-tovh: ethrenshashnee evnai:
                    hee-ten nepresvey ya: entotf empee-may-ro-mee.</td>
                <td class="arPhonics" >أنون هون تين طفه: إثرين شاشنى إفناى: هيتين
                    نى
                    إبريسفيا: إنتوتف إمبى ماى رومى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_4">
            <tr class="north" id="table_9_row_8">
                <td class="english" >The select incense, of your virginity,
                    ascended
                    to the throne, of the Father.</td>
                <td class="coptic" >Ⲁⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ ⲉⲧⲥⲱⲧⲡ : ⲛ̀ⲧⲉ ⲧⲉⲡⲁⲣⲑⲉⲛⲓⲁ̀ :
                    ⲁϥϣⲉⲛⲁϥ
                    ⲉ̀ⲡ̀ϣⲱⲓ : ϣⲁ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲙ̀Ⲫⲓⲱⲧ.</td>
                <td class="arabic">البخور المختار الذى لبتوليتك صعد إلى كرسى الآب .</td>
            </tr>
            <tr class="south" id="table_9_row_9">
                <td class="enPhonics" >A-pee-estoy-nofee et-sotp: ente
                    teparthe-ney-ya: af-she-naf: eh-epshoy: sha pee-ethronos em-evyot.</td>
                <td class="arPhonics" >آ بى إستوى نوفى إتسوتب: إنتى تى بارثينيا:
                    أفشيناف إ إبشوى: شا بى إثرونوس إم إفيوت.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_5">
            <tr class="north" id="table_9_row_10">
                <td class="english" >Better than the incense, of the Cherubim, and
                    the
                    Seraphim, O Virgin Mary.</td>
                <td class="coptic" >Ⲉϩⲟⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟϥⲓ : ⲛ̀ⲧⲉ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ : ⲛⲉⲙ
                    Ⲛⲓⲥⲉⲣⲁⲫⲓⲙ : Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                <td class="arabic">أفضل من بخور الشاروبيم و السارافيم يا مريم العذراء .</td>
            </tr>
            <tr class="south" id="table_9_row_11">
                <td class="enPhonics" >Eh-hote pee-estoy-nofee: ente
                    nee-sherobeem:
                    nem nee-seraveem: ma-rey-ya tee-parthenos.</td>
                <td class="arPhonics" >إيهوتى بى إستوى نوفى: إنتى ني شيروبيم: نيم
                    نى
                    سيرافيم: ماريا تى بارثينوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_6">
            <tr class="north" id="table_9_row_12">
                <td class="english" >Hail to the New heaven, whom the Father has
                    created, and made a place of rest, for His beloved Son.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ϯⲫⲉ ⲙ̀ⲃⲉⲣⲓ : ⲑⲏⲉ̀ⲧⲁ ⲫⲓⲱⲧ ⲑⲁⲙⲓⲟⲥ : ⲁϥⲭⲁⲥ
                    ⲛ̀ⲟⲩⲙⲁⲛ̀ⲉⲙⲧⲟⲛ : ⲙ̀Ⲡⲉϥϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ.</td>
                <td class="arabic">السلام للسماء الجديدة التى صنعها الآب وجعلها موضع راحة لابنه الحبيب.</td>
            </tr>
            <tr class="south" id="table_9_row_13">
                <td class="enPhonics" >Shere tee-ve emveree: thee-ehta evyot
                    tha-mey-yos: afkas en-ooma en-emton: empefshee-ree emmenreet.</td>
                <td class="arPhonics" >شيرى تيفى إمفيرى: ثى إيتا إفيوت ثاميوس:
                    أفكاس
                    إن أو ما إمتون: إمبيف شيرى إممينريت.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_7">
            <tr class="north" id="table_9_row_14">
                <td class="english" >Hail to the Royal throne, of Him who is,
                    carried
                    by, the Cherubim.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲓⲑ̀ⲣⲉⲛⲟⲥ : ⲙ̀ⲃⲁⲥⲓⲗⲓⲕⲟⲛ : ⲙ̀ⲫⲏⲉ̀ⲧⲟⲩϥⲁⲓ
                    ⲙ̀ⲙⲟϥ
                    : ϩⲓϫⲉⲛ Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ.</td>
                <td class="arabic">السلام للكرسى الملوكى الذى للمحمول على الشاروبيم .</td>
            </tr>
            <tr class="south" id="table_9_row_15">
                <td class="enPhonics" >Shere pee-ethronos: emvasee-leekon: emvee
                    eh-toofay emmof: hee-jen nee-sheroobeem.</td>
                <td class="arPhonics" >شيرى بى إثرونوس: إمفاسيليكون: إم في إتوفاى
                    إمموف: هيجين نيشيروبيم.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_8">
            <tr class="north" id="table_9_row_16">
                <td class="english" >Hail to the advocate, of our souls, you are
                    indeed, the pride of our race.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ : ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ : ⲛ̀ⲑⲟ ⲅⲁⲣ
                    ⲁ̀ⲗⲏⲑⲱⲥ
                    : ⲡⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲙ̀ⲡⲉⲅⲅⲉⲛⲟⲥ.</td>
                <td class="arabic">السلام لشفيعة نفوسنا . أنت بالحقيقة فخر جنسنا.</td>
            </tr>
            <tr class="south" id="table_9_row_17">
                <td class="enPhonics" >Shere tee-eprostatees: ente nen-epsee-shee:
                    entho ghar a-lee-thos: pe epshoushou empengenos.</td>
                <td class="arPhonics" >شيرى تى إبروستاتيس: إنتى نين إبسيشى: إنثو
                    غار
                    أليثوس: بى إبشوشو إمبين جينوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_9">
            <tr class="north" id="table_9_row_18">
                <td class="english" >Intercede on our behalf, O full of grace,
                    before
                    our Savior, Our Lord Jesus Christ.</td>
                <td class="coptic" >Ⲁⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲑⲏⲉⲑⲙⲉϩ ⲛ̀ϩ̀ⲙⲟⲧ :
                    ⲛⲁϩⲣⲉⲛ
                    Ⲡⲉⲛⲥⲱⲧⲏⲣ : Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">اشفعى فينا ياممتلئة نعمة لدى مخلصنا ربنا يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_9_row_19">
                <td class="enPhonics" >Aree-eprezveveen eh-gon: o the-ethmeh
                    en-ehmot:
                    nahren pen-soteer: penchoice eesos pee-ekhristos.</td>
                <td class="arPhonics" >أرى إبريسفيفين إيجون: أو ثى إثميه إن إهموت:
                    ناهرين بينسوتير: بينشويس إيسوس بى إخريستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_10">
            <tr class="north" id="table_9_row_20">
                <td class="english" >That He may confirm us, in the upright faith,
                    and
                    grant us the forgiveness, of our sins.</td>
                <td class="coptic" >Ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲧⲁϫⲣⲟⲛ : ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ : ⲟⲩⲟϩ
                    ⲛ̀ⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
                <td class="arabic">لكى يثبتنا فى الأيمان المستقيم وينعم لنا بمغفرة خطايانا .</td>
            </tr>
            <tr class="south" id="table_9_row_21">
                <td class="enPhonics" >Ho-pos enteftag-ron: khen pee-nahtee
                    etsoton:
                    ow-oh entefer-ehmot nan: em-pee-ko e-vol ente nennovee.</td>
                <td class="arPhonics" >هوبوس إنتيف طاجرون: خين بى ناهتى إطسوطون:
                    أووه
                    إنتيف إر إهموت نان: إمبيكو إيفول إنتى نين نوفى.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_9_tbody_11">
            <tr class="north" id="table_9_row_22">
                <td class="english" >Through the intercessions, of the Mother of
                    God
                    Saint Mary, O Lord grant us, the forgiveness of our sins.</td>
                <td class="coptic" >Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ
                    Ⲙⲁⲣⲓⲁ̀:
                    Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.</td>
                <td class="arabic">بشفاعات والدة الإله القديسة مريم يارب انعم لنا بمغفرة خطايانا .</td>
            </tr>
            <tr class="south" id="table_9_row_23">
                <td class="enPhonics" >Hee-ten nee-epresvey-ya: ente tee-theotokos
                    ethou-ab ma-rey-ya: epchoice aree-ehmot nan em-pee-ko e-vol ente nennovee.</td>
                <td class="arPhonics" >هيتين نى إبريسفيا: إنتى تى ثيؤطوكوس إثؤواب
                    ماريا: إبشويس أرى إهموت نان: إمبيكو إيفول إنتى نين نوفى.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_10" style="display: table;" title="Amoini Maren Ouosht">
        <caption class="caption" id="caption_table_10">Come Let Us Worship
        <span class="coptic-caption">Ⲁⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ</span>
        <span class="arabic-caption">تعالوا نسجد</span>
        </caption>

        <tbody ${tbodyClass}  id="table_10_tbody_0">
            <tr class="north" id="table_10_row_0">
                <td class="english" >Come let us worship the Holy Trinity, the
                    Father
                    and the Son, and the Holy Spirit.</td>
                <td class="coptic" >Ⲁⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ: ⲉ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ
                    ⲛⲉⲙ
                    Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">تعالوا نسجد للثالوث المقدس الآب والابن والروح القدس.</td>
            </tr>
            <tr class="south" id="table_10_row_1">
                <td class="enPhonics" >Amoy-nee maren-ouosht: entee-etrias
                    ethowab:
                    ete efiot nem epshiri: nem pee-epnevma ethowab.</td>
                <td class="arPhonics" >أموينى مارين أو أوشت إن تى إترياس إثؤواب
                    إيتى
                    إفيوت نيم إبشيرى نيم بى إبنيفما إثؤواب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_10_tbody_1">
            <tr class="north" id="table_10_row_2">
                <td class="english" >Hail to you O Mary the beautiful dove, who
                    gave
                    birth to, God the Logos.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀ ϯϭ̀ⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ: ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ
                    ⲛⲁⲛ:
                    ⲙ̀Ⲫϯ ⲡⲓⲖⲟⲅⲟⲥ.</td>
                <td class="arabic">السلام لك يا مريم الحمامة الحسنة التي ولدت لنا الله الكلمة.</td>
            </tr>
            <tr class="south" id="table_10_row_3">
                <td class="enPhonics" >Shere ne Maria: tee-etchrompi eth-nesos:
                    thi-etas misi nan: em-Efnoti pee Logos.</td>
                <td class="arPhonics" >شيرى نى ماريا تى اتشرومبى اثنيسوس ثى
                    ايطاسميسى
                    نان ام افنوتى بى لوغوس.</td>
            </tr>
        </tbody>

    </table>

    <br>
    <table id="table_11" title="Khen Evran" style="display: table;">
        <caption class="caption" id="caption_table_11">In the Name of the Father
        <span class="coptic-caption">Ϧⲉⲛ ⲫ̀ⲣⲁⲛ</span>
        <span class="arabic-caption">بسم الآب</span>
        </caption>

        <tbody ${tbodyClass}  id="table_11_tbody_0">
            <tr id="table_11_row_0" class="north">
                <td class="english" >In the name of the Father and the Son and the
                    Holy Spirit, The Equal Trinity.</td>
                <td class="coptic" >Ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ
                    ⲉ̀ⲑⲟⲩⲁⲃ
                    ϯⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲟⲩⲙⲟⲟⲥⲓⲟⲥ.</td>
                <td class="arabic">بسم الاب والإبن والروح القدس الثالوث القدوس المساوى.</td>
            </tr>
            <tr id="table_11_row_1" class="south">
                <td class="english" >Worthy(3) Saint Mary the Virgin.</td>
                <td class="coptic" >Ⲁⲝⲓⲁ(3) ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.</td>
                <td class="arabic">مستحقة (3) القديسة مريم العذراء.</td>
            </tr>
            <tr id="table_11_row_2" class="north">
                <td class="english" >Worthy (3) …</td>
                <td class="coptic" >Ⲁⲝⲓⲟⲥ “ⲁ” (3) ...</td>
                <td class="arabic">مستحق"ة" (3) ...</td>
            </tr>
            <tr id="table_11_row_3" class="south">
                <td class="enPhonics" >Khen efran emif-iot nem ep-she-ree nem
                    pi-epnevma eth-owab tit-reias eth-owab en-omo-sios. Axeia, axeia, axeia, ti-ageia Mareia
                    ti-pa-arthenos.
                    Axeios(a) [3]...</td>
                <td class="arPhonics" >خين افران أم أفيوت نيم ابشيري نيم بي ابنفما
                    اثؤواب تي اترياس اثؤواب ان اموسيوس . آكسيا آكسيا آكسيا تي آجيا ماريا تي بارثينوس.
                    آكسيوس (ا) ]3[</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_11_tbody_1">

            <tr id="table_11_row_4" class="north">
                <td class="english" >Let come together, we the people who love our
                    God
                    Jesus Christ to honor the mother of God the virgin Saint Mary</td>
                <td class="coptic" >Fal nagtame-a’ nahnoo al-shaab al mohebo lel
                    elah
                    yasooaa al maseeh lenokarem waledat al-elah al aazra al qedeesa mariam.</td>
                <td class="arabic">فلنجتمع نحن الشعب المحب للإله يسوع المسيح لنكرم والدة الإله العذراء القديسة مريم.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_11_tbody_2">
            <tr id="table_11_row_5" class="south">
                <td class="english" >May the peace of God be with you, O you
                    people of
                    Christ together and with His joyous voice, he will say come into the heavenly joy with the prayers
                    of
                    the virgin Mary and the martyr (…)</td>
                <td class="coptic" >Wa salam allah yakoon ma-akom ya shaa-b al
                    masseeh
                    be agma-ekom wa besawtehe al fareh yossame-akom al qa-el edkholo eila farah al ferdos besalat mariam
                    al
                    azra’ wal shaheed al azeem (…)</td>
                <td class="arabic">وسلام الله يكون معكم يا شعب المسيح بأجمعكم وبصوته الفرح يسمعكم القائل ادخلوا إلى فرح
                    الفردوس بصلاة مريم العذراء والشهيد العظيم (...) .</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_11_tbody_3">
            <tr id="table_11_row_6" class="north">
                <td class="english" >Listen O daughter and lend your ear, forget
                    your
                    people and your father’s house for your King has chosen your beauty for He is your Lord and to him
                    you
                    will submit.</td>
                <td class="coptic" >Esma-ee ya ebnatee wa esghee be sama-ek wa
                    ensee
                    sha-bokee wa bayto abeekee le’an al malek eshtaha hosnek fa howa rabok wa laho takhda-een.</td>
                <td class="arabic">إسمعى يا إبنة وأصغى بسمعك. إنسى شعبك و بيت أبيك لأن ملكك اشتهى حسنك فهو ربك وله
                    تخضعين.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_11_tbody_4">
            <tr id="table_11_row_7" class="south">
                <td class="english" >Crown of gold, crown of silver, crown of
                    diamonds
                    on the head of the Virgin Mary. Say amen, amen, amen. Allelulia, Allelulia. Glory be to our God.
                </td>
                <td class="coptic" >Ⲟⲩⲭ̀ⲗⲟⲙ ⲛ̀ⲛⲟⲩⲃ: ⲟⲩⲭ̀ⲗⲟⲙ ⲛ̀ϩⲁⲧ: ⲟⲩⲭ̀ⲗⲟⲙ ⲛ̀ⲱⲛⲓ
                    ⲙ̀ⲙⲁⲣⲅⲁⲣⲓⲧⲏⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲧ̀ⲁ̀ⲫⲉ (Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ) Ϫⲉ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ: ̅Ⲁ̅ⲗ ̅Ⲁ̅ⲗ ⲡⲓⲱ̀ⲟⲩ ⲫⲁ
                    Ⲡⲉⲛⲛⲟⲩϯ
                    ⲡⲉ</td>
                <td class="arabic">إكليل ذهب إكليل فضة إكليل جوهرى على رأس والدة الإله القديسة مريم. أمين أمين أمين،
                    الليلويا الليلويا، المجد هو لألهنا.</td>
            </tr>
            <tr id="table_11_row_8" class="north">
                <td class="enPhonics" >Ou-eklom en-noub: ou-eklom en-hat: ou-eklom
                    en-oni em-mar-gari-tees e-ehree ejen eta-ve Maria tee-parthenos Je amen amen amen: Allelulia,
                    Allelulia:
                    Pi-o-ou fa Pen-noutee pe.</td>
                <td class="arPhonics" >أو إكلوم إننوب أو إكلوم إنهات أو إكلوم إن
                    أونى
                    إممارجاريتيس إ إهرى إيجين إتأفى تى أجيا ماريا تيبارثينوس جى امين امين امين الليلويا الليلويا بى أو
                    أوفا
                    بيننوتى بى.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table id="table_12" style="display: table;" title="Epouro">
        <caption class="caption" id="caption_table_12">O King of Peace
        <span class="coptic-caption">Ⲡⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ</span>
        <span class="arabic-caption">يا ملك السلام</span
        </caption>
        <tbody ${tbodyClass}  id="table_12_tbody_0">
            <tr class="north" id="table_12_row_0">
                <td class="english" >O King of peace: grant us Your peace: render
                    unto
                    us Your peace: and forgive us our sins.</td>
                <td class="coptic" >Ⲡⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ: ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲥⲉⲙⲛⲓ
                    ⲛⲁⲛ
                    ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">يا ملك السلام أعطنا سلامك قرر لنا سلامك واغفر لنا خطايانا.</td>
            </tr>
            <tr class="south" id="table_12_row_1">
                <td class="enPhonics" >Ep oro ente tee hirini: moi nan entek
                    hirini:
                    semni nan entek hirini: ka nen-novi nan evol.</td>
                <td class="arPhonics" >إبؤرو إنتى تى هيرينى، موى نان إنتيك هيرينى،
                    سيمنى نان إنتيك هيرينى، كانين نوڤى نان إيڤول.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_12_tbody_1">
            <tr class="north" id="table_12_row_2">
                <td class="english" >Disperse the enemies: of the church: and
                    fortify
                    her: that she may not be shaken forever.</td>
                <td class="coptic" >Ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓϫⲁϫⲓ: ⲛ̀ⲧⲉ ϯⲉⲕⲕ̀ⲗⲏⲥⲓⲁ : ⲁⲣⲓⲥⲟⲃⲧ
                    ⲉ̀ⲣⲟⲥ : ⲛ̀ⲛⲉⲥⲕⲓⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">فرق أعداء الكنيسة وحصنها فلا تتزعزع إلى الأبد.</td>
            </tr>
            <tr class="south" id="table_12_row_3">
                <td class="enPhonics" >Gor evol en-ni gaji: ente ti ek-ekleesia:
                    arisovt eros: en-nes kim sha eneh.</td>
                <td class="arPhonics" >جور إيڤول إن نى جا، چى إنتى تى إككليسيا،
                    آرى
                    سوفت إيروس، إننسكيم شا إينيه.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_12_tbody_2">
            <tr class="north" id="table_12_row_4">
                <td class="english" >Emmanuel our God: is in our midst: with the
                    glory
                    of His Father: and the Holy Spirit.</td>
                <td class="coptic" >Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ : ϧⲉⲛ ⲧⲉⲛⲙⲏϯ ϯⲛⲟⲩ : ϧⲉⲛ
                    ⲡ̀ⲱ̀ⲟⲩ
                    ⲛ̀ⲧⲉ Ⲡⲉϥⲓⲱⲧ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ.</td>
                <td class="arabic">عمانوئيل إلهنا فى وسطنا الآن بمجد أبيه والروح القدس</td>
            </tr>
            <tr class="south" id="table_12_row_5">
                <td class="enPhonics" >Emmanoeel pen-nooti: khen ten-meetee
                    tee-noo
                    khen-epo-oo: ente pefioat: nem pi-epnevma ethowab.</td>
                <td class="arPhonics" >إممانوئيل بيننوتى، خين تين ميتى تينو، خين
                    إبؤو
                    أو إنتى بيفيوت، نيم بى إبنيڤما إثؤواب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_12_tbody_3">
            <tr class="north" id="table_12_row_6">
                <td class="english" >May He bless us all: and purify our hearts:
                    and
                    heal the sicknesses of our soul and bodies.</td>
                <td class="coptic" >Ⲛ̀ⲧⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲧⲏⲣⲉⲛ: ⲛ̀ⲧⲉϥⲧⲟⲩⲃⲟ ⲛ̀ⲛⲉⲛϩⲏⲧ :
                    ⲛ̀ⲧⲉϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲓϣⲱⲛⲓ: ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ.</td>
                <td class="arabic">ليباركنا كلنا ويطهر قلوبنا ويشفى أمراض نفوسنا وأجسادنا.</td>
            </tr>
            <tr class="south" id="table_12_row_7">
                <td class="enPhonics" >Entef-ezmoo eron teeren: entef-toovo en-nen
                    heet: entef-tal-etcho enni shoni: ente nen-epsichi nem nen-soma.</td>
                <td class="arPhonics" >إنتيف إسمو إيرون تيرين، إنتيف توڤو إنين
                    هيت،
                    إنتيف طالتشو إننى شونى، إنتى نين إبسيشى نيم نين سوما.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_12_tbody_4">
            <tr class="north" id="table_12_row_8">
                <td class="english" >We worship You O Christ: together with Your
                    Good
                    Father: and the Holy Spirit: For You have (come) and saved us.</td>
                <td class="coptic" >Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ⲠⲓⲬⲣⲓⲥⲧⲟⲥ : ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ
                    ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ:
                    ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ : ϫⲉ (ⲁⲕⲓ̀) ⲁ̀ⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ.</td>
                <td class="arabic">نسجد لك ايها المسيح مع ابيك الصالح والروح القدس لانك أتيت وخلصتنا.</td>
            </tr>
            <tr class="south" id="table_12_row_9">
                <td class="enPhonics" >Ten-oo-osht emmok o-pi-ekhristos: nem
                    pek-yot
                    en-aghathos: nem pee-epnevma ethowab: je ak-ee aksoti emmon.</td>
                <td class="arPhonics" >تين أو أوشت إمموكو بيخرستوس، نيم بيك يوت إن
                    أغاثوس، نيم بى إبنيڤما إثؤواب، چى آك إى أكسوتى إممون ناى نان.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_13" title="Opentshois Isos Pekhristos" style="display: table;">
        <caption class="caption" id="caption_table_13">O Our Lord Jesus Christ
        <span class="coptic-caption">Ⲱ̀ⲡⲉⲛ⳪ Ⲓⲏⲥ̅ Ⲡⲭⲥ̅</span>
        <span class="arabic-caption">يا ربنا يسوع المسيح</span>
        </caption>
        <tbody ${tbodyClass}  id="table_13_tbody_0">
            <tr id="table_13_row_0" class="north">
                <td class="english" >O our Lord Jesus Christ, Who carries the sin
                    of
                    the world, count us with Your sheep, those who are to Your right.</td>
                <td class="coptic" >Ⲱ̀ⲡⲉⲛ⳪ Ⲓⲏⲥ̅ Ⲡⲭⲥ̅: ⲫⲏⲉⲧⲱⲗ̀ⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ
                    ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ:
                    ⲟⲡⲧⲉⲛ ϩⲱⲛ ⲛⲉⲙ ⲛⲉⲕϩⲓⲏⲃ: ⲛⲁⲓ ⲉⲧⲥⲁⲟⲩⲓ̀ ⲛⲁⲙ ⲙ̀ⲙⲟⲕ.</td>
                <td class="arabic">يا ربنا يسوع المسيح حامل خطية العالم أحسبنا مع خرافك الذين عن يمينك</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_1">
            <tr id="table_13_row_1" class="south">
                <td class="english" >And when you come again, in Your Second
                    fearful
                    Appearance, may we never fearfully hear, You say I do not know you.</td>
                <td class="coptic" >Ⲁⲕϣⲁⲛⲓ̀ ϧⲉⲛ ⲧⲉⲕⲙⲁϩⲥ̀ⲛⲟⲩϯ: ⲙ̀ⲡⲁⲣⲟⲩⲥⲓⲁ̀ ⲉⲧⲟⲓ
                    ⲛ̀ϩⲟϯ :
                    ⲙ̀ⲡⲉⲛⲑ̀ⲣⲉⲛⲥⲱⲧⲉⲙ ϧⲉⲛ ⲟⲩⲥ̀ⲑⲉⲣⲧⲉⲣ : ϫⲉ ϯⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲧⲉⲛ ⲁⲛ.</td>
                <td class="arabic">اذا أتيت في ظهورك الثاني المخوف فلا نسمع برعدة انني لست أعرفكم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_2">
            <tr id="table_13_row_2" class="north">
                <td class="english" >But rather may we be made worthy, to hear the
                    voice full of joy, of Your tender mercies, proclaiming and saying.</td>
                <td class="coptic" >Ⲁⲗⲗⲁ ⲙⲁⲣⲉⲛⲉⲣⲡ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ⲥⲱⲧⲉⲙ: ⲉ̀ϯⲥ̀ⲙⲏ ⲉⲑⲙⲉϩ
                    ⲛ̀ⲣⲁϣⲓ: ⲛ̀ⲧⲉ ⲛⲉⲕⲙⲉⲧϣⲁⲛⲁϩ̀ⲑⲏϥ: ⲉⲥⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
                <td class="arabic">بل فلنستحق سماع الصوت الممتلئ فرحاً الذى لرأفتك يصرخ قائلا</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_3">
            <tr id="table_13_row_3" class="south">
                <td class="english" >"Come unto Me, O blessed of My Father, and
                    inherit the life, that endures forever."</td>
                <td class="coptic" >Ϫⲉ ⲁ̀ⲙⲱⲓⲛⲓ ϩⲁⲣⲟⲓ: ⲛⲏⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲧⲉ Ⲡⲁⲓⲱⲧ:
                    ⲁ̀ⲣⲓⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲱⲛϧ: ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">تعالوا إلي يا مباركي أبي رثو الحياة الدائمة إلي الأبد</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_4">
            <tr id="table_13_row_4" class="north">
                <td class="english" >The martyrs will come, bearing their
                    afflictions,
                    and the righteous will come, bearing their virtues.</td>
                <td class="coptic" >Ⲥⲉⲛⲁⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ: ⲉⲩϥⲁⲓ ϧⲁ ⲛⲟⲩⲃⲁⲥⲁⲛⲟⲥ:
                    ⲥⲉⲛⲁⲓ̀ ⲛ̀ϫⲉ ⲛⲓⲇⲓⲕⲉⲟⲥ: ⲉⲩϥⲁⲓ ϧⲁ ⲛⲟⲩⲡⲟⲗⲏⲧⲓⲁ̀.</td>
                <td class="arabic">يأتي الشهداء   حاملين عذاباتهم   ويأتي الصديقين   حاملين فضائلهم</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_5">
            <tr id="table_13_row_5" class="south">
                <td class="english" >The Son of God shall come in His glory, and
                    His
                    Father’s glory, to give unto everyone, according to his deeds which he has done.</td>
                <td class="coptic" >Ϥⲛⲁⲓ̀ ⲛ̀ϫⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲫϯ: ϧⲉⲛ ⲡⲉϥⲱⲟ̀ⲩ ⲛⲉⲙ ⲫⲁ
                    Ⲡⲉϥⲓⲱⲧ:
                    ϥ̀ⲛⲁϯ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ: ⲕⲁⲧⲁ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀ ⲉ̀ⲧⲁϥⲁⲓⲧⲟⲩ.</td>
                <td class="arabic">يأتي أبن الله في مجده ومجد أبيه ويجازى كل واحدٍ كأعماله التي صنعها</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_6">
            <tr id="table_13_row_6" class="north">
                <td class="english" >O Christ the Word of the Father, the Only
                    Begotten God, grant us Your peace, that is full of joy.</td>
                <td class="coptic" >Ⲡⲭⲥ̅ ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ: ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀ⲛⲟⲩϯ:
                    ⲉⲕⲉ̀ϯ
                    ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲑⲁⲓ ⲉⲑⲙⲉϩ ⲛ̀ⲣⲁϣⲓ ⲛⲓⲃⲉⲛ.</td>
                <td class="arabic">أيها المسيح كلمة الآب   الإله الوحيد   أعطنا سلامك    هذا المملوء من كل فرح</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_7">
            <tr id="table_13_row_7" class="south">
                <td class="english" >As You have given, to Your saintly apostles,
                    likewise also say to us, “My peace I give unto you.”</td>
                <td class="coptic" >Ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲕⲧⲏⲓⲥ: ⲛ̀ⲛⲉⲕⲁ̀ⲅⲓⲟⲥ
                    ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ:
                    ⲉⲕⲉ̀ϫⲟⲥ ⲛⲁⲛ ⲙ̀ⲡⲟⲩⲣⲏϯ: ϫⲉ ⲧⲁϩⲓⲣⲏⲛⲏ ϯϯ ⲙ̀ⲙⲟⲥ ⲛⲱⲧⲉⲛ.</td>
                <td class="arabic">كما أعطيته لرسلك القديسين قل لنا مثلهم أنى أعطيكم سلامي</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_13_tbody_8">
            <tr id="table_13_row_8" class="north">
                <td class="english" >"My peace which I have taken, from My Father,
                    I
                    leave unto you, both now and forever."</td>
                <td class="coptic" >Ⲧⲁϩⲓⲣⲏⲛⲏ ⲁ̀ⲛⲟⲕ: ⲑⲏⲉ̀ⲧⲁⲓϭⲓⲧⲥ ϩⲓⲧⲉⲛ Ⲡⲁⲓⲱⲧ :
                    ⲁ̀ⲛⲟⲕ
                    ϯⲭⲱ ⲙ̀ⲙⲟⲥ ⲛⲉⲙⲱⲧⲉⲛ: ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ.</td>
                <td class="arabic">سلامي انا الذى أخذته من ابي أنا اتركه معكم من الآن وإلي الأبد</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table id="table_14" style="display: table;" title="O angel of this night">
        <caption class="caption" id="caption_table_14">O Angel of This Night
        <span class="coptic-caption">Ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲡⲁⲓ ⲉϩⲟⲟϩ</span>
        <span class="arabic-caption">يا ملاك هذا اليوم</span
        </caption>

        <tbody ${tbodyClass}  id="table_14_tbody_0">
            <tr class="north" id="table_14_row_0">
                <td class="english" >O the angel of this day/evening, flying up
                    with
                    this hymn, remember us before the Lord, that He may forgive us our sins.</td>
                <td class="coptic" >Ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲡⲁⲓ ⲉϩⲟⲟϩ (ⲧⲁⲓ ⲉϫⲱⲣϩ): ⲉⲧϩⲏⲗ
                    ⲉ̀ⲡ̀ϭⲓⲥⲓ ⲛⲉⲙ ⲡⲁⲓϩⲩⲙⲛⲟⲥ: ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ ϧⲁ ⲧ̀ϩⲏ ⲙ̀Ⲡ⳪: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.</td>
                <td class="arabic">يا ملاك هذا اليوم الطائر إلي العلو بهذه التسبحة اذكرنا قدام الرب ليغفر لنا خطايانا
                </td>
            </tr>
            <tr class="south" id="table_14_row_1">
                <td class="enPhonics" >Pi-angelos ente pai-eho-ou: et-heel
                    e-epetchee-see nem pai-hemnos: aripen-mevee kha et-hee em-epchois: entef ka nen novi nan evol.</td>
                <td class="enPhonics" >Ya malak haza al-yom al-ta’er: eelal
                    aaolowa
                    be-hazee al-tasbeha: ozkorna qodam al-Rab: leyaghfer lana khatayana.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_14_tbody_1">
            <tr class="north" id="table_14_row_2">
                <td class="english" >The sick heal them, those who have slept O
                    Lord
                    repose them, and all of our brothers in distress, help us my Lord and all of them.</td>
                <td class="coptic" >Ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗ ϭⲱⲟⲩ: ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡ⳪ ⲙⲁⲙ̀ⲧⲟⲛ
                    ⲛⲱⲟⲩ:
                    ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉⲧⲭⲏ ϧⲉⲛ ϩⲟϫϩⲉϫ ⲛⲓⲃⲉⲛ: Ⲡⲁ⳪ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ ⲛⲉⲙⲱⲟⲩ.</td>
                <td class="arabic">المرضي اشفهم   الذين رقدوا يارب نيحهم    واخوتنا الذين في كل شدة   ياربي أعنا واياهم
                </td>
            </tr>
            <tr class="south" id="table_14_row_3">
                <td class="enPhonics" >Nee-etshoni mata-letcho-ou: nee-etavenkot
                    epchois ma-emton no-ou: nen-esneou etkee khen hogheg niven: epchois ari-voi-theen eron nemo-ou.</td>
                <td class="enPhonics" >El-marda eshfeehom: walazeena raqadou ya
                    Rab
                    nayehom: wa-ekhwatna alazeena fee kol sheda: ya Rab aaena wa-eyahom.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_14_tbody_2">
            <tr class="north" id="table_14_row_4">
                <td class="english" >May God bless us, and let us bless His Holy
                    Name;
                    and may His praise continually be, always upon our mouths.</td>
                <td class="coptic" >Ⲉϥⲉ̀ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ ⲛ̀ϫⲉ Ⲫϯ: ⲧⲉⲛⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲉϥⲣⲁⲛ
                    ⲉⲑⲩ̅:
                    ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ⲉ̀ⲣⲉ ⲡⲉϥⲥ̀ⲙⲟⲩ: ⲛⲁϣⲱⲡⲓ ⲉϥⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲣⲱⲛ.</td>
                <td class="arabic">يباركنا الله ولنبارك اسمه القدوس في كل حين تسبحته دائمة في افواهنا</td>
            </tr>
            <tr class="south" id="table_14_row_5">
                <td class="enPhonics" >Ef-e-smou eron enje Efnoutee: ten-na-esmou
                    epefran ethowab: ensiou niven ere pef-ezmou: ne-shopi efmeen evol khen ron.</td>
                <td class="enPhonics" >Youbarekna Allah: wal-noubarek esmahou
                    al-qodos: fee kol heen tasbehatou: da’eman fee afwahena.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_14_tbody_3">
            <tr class="north" id="table_14_row_6">
                <td class="english" >For blessed is the Father and the Son, and
                    the
                    Holy Spirit, the perfect Trinity, we worship and glorify him.</td>
                <td class="coptic" >Ϫⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ: ⲛⲉⲙ
                    Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ: Ⲧⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱⲟ̀ⲩ ⲛⲁⲥ.</td>
                <td class="arabic">مبارك الآب والابن والروح القدس الثالوث الكامل نسجد له ونمجده</td>
            </tr>
            <tr class="south" id="table_14_row_7">
                <td class="enPhonics" >Je ef-esmaro-oot enje efiot nem ep shiri:
                    nem
                    pee epnevma ethowab: ti-etrias etjeek evol: ten-oo-osht emmos ten tee-ou-nas.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_14_tbody_4">
            <tr class="north" id="table_14_row_8">
                <td class="english" >Lord, hear us. Lord have mercy. Lord, bless
                    us.
                </td>
                <td class="coptic" >Ⲡϭⲟⲓⲥ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ. Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ. Ⲡϭⲟⲓⲥ ⲥ̀ⲙⲟⲩ
                    ⲉ̀ⲣⲟⲛ.</td>
                <td class="arabic">يا رب اسمعنا. يا رب ارحمنا. يا رب باركنا.</td>
            </tr>
            <tr class="south" id="table_14_row_9">
                <td class="enPhonics" >Epchois sotem eron. Epchois nai nan.
                    Epchois
                    esmou eron.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_14_tbody_5">
            <tr class="north" id="table_14_row_10">
                <td class="english" >Lord have mercy. (3)</td>
                <td class="coptic" >Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ. (3)</td>
                <td class="arabic">يا رب ارحم.
                    (3)</td>
            </tr>
            <tr class="south" id="table_14_row_11">
                <td class="enPhonics" >Keerye ley son. (3)</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_15" style="display: table;" title="Atai Parthenos">
        <caption class="caption" id="caption_table_15">This Virgin Received Honor
        <span class="coptic-caption">Ⲁⲧⲁⲓ ⲡⲁⲣⲑⲉⲛⲟⲥ</span>
        <span class="arabic-caption">هذه العذراء نالت اليوم كرامة</span>
        </caption>

        <tbody ${tbodyClass}  id="table_15_tbody_0">
            <tr class="north" id="table_15_row_0">
                <td class="english" >This Virgin received honor this day:  this
                    bride
                    received glory this day:  this one is clothed in gold fringed garments:  adorned in various colors.
                </td>
                <td class="coptic" >Ⲁⲧⲁⲓ ⲡⲁⲣⲑⲉⲛⲟⲥ ϭⲓ ⲛ̀ⲟⲩⲧⲁⲓⲟ̀ ̀ ⲙⲫⲟⲟⲩ ⲁ̀ⲧⲁⲓ ϣⲉⲗⲉⲧ
                    ϭⲓ
                    ⲛ̀ⲟⲩⲱⲟⲩ ⲙ̀ⲫⲟⲟⲩ: ⲑⲁⲓ ⲉⲧϫⲟⲗϩ ϧⲉⲛ ϩⲁⲛϣ̀ⲧⲁϯ ⲛ̀ⲓⲉⲃ ⲛ̀ⲛⲟⲩⲃ ⲉⲥⲥⲉⲗⲥⲱⲗ ϧⲉⲛ ⲟⲩⲑⲟ ⲛ̀ⲣⲏϯ.</td>
                <td class="arabic">هذه العذراء نالت اليوم كرامة، هذه العروس نالت اليوم مجد، هذه التحفة بأطراف موشاة
                    بالذهب
                    مزينة بأنواع كثيرة.</td>
            </tr>
            <tr class="south" id="table_15_row_1">
                <td class="enPhonics" >Atay parthenos etchi en-outayo emvo-ou:
                    atay
                    shelet etchi en-ou-o-ou emvo-ou: thai etgolh khen han eshtatee en-yeb ennoub essel-sol khen outho
                    enree-tee.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_1">
            <tr class="north" id="table_15_row_2">
                <td class="english" >David moved the first string of his harp: 
                    crying
                    out saying:  the Queen stood at Your right hand O King.</td>
                <td class="coptic" >Ⲁ Ⲇⲁⲩⲓⲇ ⲕⲓⲙ ⲙ̀ⲡⲓϣⲟⲣⲡ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁⲥⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲥ ⲛ̀ϫⲉ ϯⲟⲩⲣⲱ ⲥⲁⲟⲩⲓ̀ ⲛⲁⲙ ⲙ̀ⲙⲟⲕ ⲡ̀ⲟⲩⲣⲟ.</td>
                <td class="arabic">داود حرك الوتر الاول من قيثارته صارخا قائلا: قامت الملكة عن يمينك أيها الملك. )مز٤٥:
                    ۹)
                </td>
            </tr>
            <tr class="south" id="table_15_row_3">
                <td class="enPhonics" >Adaveed keem empee-shorp enkap ente tef
                    keethara evosh evol evgo emmos: je aso-o-hee erats enje tee-ouro sa-owinam emmok epouro.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_2">
            <tr class="north" id="table_15_row_4">
                <td class="english" >He moved the second string of his harp:
                    crying
                    out saying: Hear, my daughter, see, and incline your ear: forget your people and your father’s
                    house.
                </td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ⲥ̀ⲛⲁⲩ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲥⲱⲧⲉⲙ ⲧⲁϣⲉⲣⲓ ⲁ̀ⲛⲁⲩ ⲣⲉⲕ ⲡⲉⲙⲁϣϫ ⲁ̀ⲣⲓ ⲡ̀ⲱⲃϣ ⲙ̀ⲡⲉⲗⲁⲟⲥ ⲛⲉⲙ ⲡ̀ⲏⲓ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲡⲉⲓⲱⲧ.</td>
                <td class="arabic">وحرك الوتر الثاني من قيثارته صارخا قائلا: إسمعي يا إبنتي وأنظري وأميلي أذنيك وانسي
                    شعبك
                    وبيت أبيك. (مز ٤٥ : ١٠)</td>
            </tr>
            <tr class="south" id="table_15_row_5">
                <td class="enPhonics" >Avkeem epimah esnav enkap ente tef keethara
                    evosh evol evgo emmos: je sotem tasheree anav rek pemashg aree ep-ovsh empe-laos nem epee teerf ente
                    pe-yot.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_3">
            <tr class="north" id="table_15_row_6">
                <td class="english" >He moved the third string of his harp: crying
                    out
                    saying: All the glory of the daughter of the King is within: clothed in gold-fringed garments.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ϣⲟⲙⲧ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲡ̀ⲱ̀ⲟⲩ ⲧⲏⲣϥ ⲛ̀ⲧ̀ϣⲉⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲥⲉⲃⲱⲛ: ⲉⲥϫⲟⲗϩ ϧⲉⲛ ϩⲁⲛϣ̀ⲧⲁϯ ⲛ̀ⲓⲉⲃ ⲛ̀ⲛⲟⲩⲃ.</td>
                <td class="arabic">وحرك الوتر الثالث من قيثارته صارخا قائلا: كل مجد إبنة الملك من داخل مشتملة بأطراف
                    موشاة
                    بالذهب. (مز ٤٥ : ١٣)</td>
            </tr>
            <tr class="south" id="table_15_row_7">
                <td class="enPhonics" >Avkeem epimah shomt enkap ente tef keethara
                    evosh evol evgo emmos: je epo-ou teerf en-etsheri em-epouro en-eh-sevon esgolh khen han eshtatee
                    enyeb
                    ennob.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_4">
            <tr class="north" id="table_15_row_8">
                <td class="english" >He moved the fourth string of his harp:
                    crying
                    out saying: Unto the King shall enter: virgins after her.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ϥ̀ⲧⲟⲩ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲉⲩⲉ̀ⲓ̀ⲛⲓ ⲉϧⲟⲩⲛ ⲙ̀ⲡⲓⲟⲩⲣⲟ: ⲛ̀ϩⲁⲛ ⲡⲁⲣⲑⲉⲛⲟⲥ ϩⲓⲫⲁϩⲟⲩ ⲙ̀ⲙⲟⲥ.</td>
                <td class="arabic">وحرك الوتر الرابع من قيثارته صارخا قائلا: يدخلن الي الملك عذاري خلفها. (مز٤٥: ١٤)
                </td>
            </tr>
            <tr class="south" id="table_15_row_9">
                <td class="enPhonics" >Avkeem epimah eftou enkap ente tef keethara
                    evosh evol evgo emmos: je ev-e eeny ekhoun empi-ouro enhan parthenos hee-va-hou emmos.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_5">
            <tr class="north" id="table_15_row_10">
                <td class="english" >He moved the fifth string of his harp: crying
                    out
                    saying: Great is the Lord and exceedingly blessed: in the city of our God on His holy mountain.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ Ⲉⲧⲓⲟ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲟⲩⲛⲓϣϯ ⲡⲉ Ⲡ⳪ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲉ̀ⲙⲁϣⲱ ϧⲉⲛ ̀ ⲑⲃⲁⲕⲓ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ϩⲓϫⲉⲛ ⲡⲉϥⲧⲱⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ.
                </td>
                <td class="arabic">وحرك الوتر الخامس من قيثارته صارخا قائلا: عظيم هو الرب ومسبح جدا في مدينة الهنا علي
                    جبله
                    المقدس )مز٤۸: ١)</td>
            </tr>
            <tr class="south" id="table_15_row_11">
                <td class="enPhonics" >Avkeem epimah etiou enkap ente tef keethara
                    evosh evol evgo emmos: je ounishtee pe Epchois ef-esmaro-out emasho khen ethvaky empennouty hijen
                    pefto-ou ethowab.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_6">
            <tr class="north" id="table_15_row_12">
                <td class="english" >He moved the sixth string of his harp: crying
                    out
                    saying: The wings of a dove covered with silver: and her feathers with yellow gold.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ Ⲥⲟⲟⲩ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ϩⲁⲛⲧⲉⲛϩ ⲛ̀ϭ̀ⲣⲟⲙⲡⲓ ⲉⲩⲟϣϫ ⲛ̀ⲓⲉⲃ ⲛ̀ϩⲁⲧ ⲟⲩⲟϩ ⲛⲉⲥⲕⲉⲙⲟϯ ϧⲉⲛ ⲟⲩⲟⲧⲟⲩⲉⲧ ⲛ̀ⲧⲉ ⲟⲩⲛⲟⲩⲃ.</td>
                <td class="arabic">وحرك الوتر السادس من قيثارته صارخا قائلا: أجنحة حمامة مغشاة بفضة ومنكباها بصفرة الذهب
                    (مز٦٨: ١٣)</td>
            </tr>
            <tr class="south" id="table_15_row_13">
                <td class="enPhonics" >Avkeem epimah soo enkap ente tef keethara
                    evosh
                    evol evgo emmos: je hantenh en-etchrompee evoshg enyeb enhat owoh nes kemotee khen ou-o-tou-et ente
                    ounoub.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_7">
            <tr class="north" id="table_15_row_14">
                <td class="english" >He moved the seventh string of his harp:
                    crying
                    out saying: The mountain of God, the mountain full of good things: the rugged mountain, the mountain
                    full of good things.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ϣⲁϣϥ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲡⲓⲧⲱⲟⲩ ⲛ̀ⲧⲉ Ⲫϯ ⲡⲓⲧⲱⲟⲩ ⲉⲧⲕⲉⲛⲓ ⲱⲟⲩⲧ ⲡⲓⲧⲱⲟⲩ ⲉⲧϭⲏⲥ ⲡⲓⲧⲱⲟⲩ ⲉⲧⲕⲉⲛⲓⲱ̀ⲟⲩⲧ.</td>
                <td class="arabic">وحرك الوتر السابع من قيثارته صارخا قائلا: جبل الله الجبل الدسم الجبل المجبن الجبل
                    الدسم.
                    (مز٦٨: ١٥)</td>
            </tr>
            <tr class="south" id="table_15_row_15">
                <td class="enPhonics" >Avkeem epimah shashf enkap ente tef
                    keethara
                    evosh evol evgo emmos: je pito-ou ente Evnoutee pito-ou etkeni-o-out pito-ou et-etchees pito-ou
                    etkeni-o-out.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_8">
            <tr class="north" id="table_15_row_16">
                <td class="english" >He moved the eighth string of his harp:
                    crying
                    out saying: His foundations are in the holy mountains: the Lord loves the gates of Zion.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ϣ̀ⲙⲏⲛ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲛⲉϥⲥⲉⲛϯ ϧⲉⲛ ⲛⲓⲧⲱⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ⲁ̀ Ⲡⲟⲥ̅ Ⲙⲉⲓ ⲛ̀ⲛⲓⲡⲩⲗⲏ ⲛ̀ⲧⲉ Ⲥⲓⲱⲛ.</td>
                <td class="arabic">وحرك الوتر الثامن من قيثارته صارخا قائلا: أساساته في الجبال المقدسة، أحب الرب أبواب
                    صهيون
                    (مز٨٧ :١و٢)</td>
            </tr>
            <tr class="south" id="table_15_row_17">
                <td class="enPhonics" >Avkeem epimah eshmeen enkap ente tef
                    keethara
                    evosh evol evgo emmos: je nefsenty khen nito-ou ethowab a-Epchois may ennipeely ente Say-yon.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_9">
            <tr class="north" id="table_15_row_18">
                <td class="english" >He moved the ninth string of his harp: crying
                    out
                    saying: they have said concerning you, honored things, O city of God.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ⲯⲓⲧ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ
                    ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ ⲛ̀ϩⲁⲛ ϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏⲟⲩⲧ ϯⲃⲁⲕⲓ ⲛ̀ⲧⲉ Ⲫϯ.</td>
                <td class="arabic">وحرك الوتر التاسع من قيثارته صارخا قائلا: تكلموا من أجلك بأعمال كريمة يا مدينة الله
                    (مز٨٧
                    :٣)</td>
            </tr>
            <tr class="south" id="table_15_row_19">
                <td class="enPhonics" >Avkeem epimah epseet enkap ente tef
                    keethara
                    evosh evol evgo emmos: je avsa-jee ethveety enhan ehvee-owy evtay-yot teevaki ente Evnouty.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_15_tbody_10">
            <tr class="north" id="table_15_row_20">
                <td class="english" >He moved the tenth string of his harp: crying
                    out
                    saying: The Lord has chosen Zion: He has chosen her as a dwelling for himself.</td>
                <td class="coptic" >Ⲁϥⲕⲓⲙ ⲉ̀ ⲡⲓⲙⲁϩ ⲙⲏⲧ ⲛ̀ⲕⲁⲡ ⲛ̀ⲧⲉ ⲧⲉϥⲕⲩⲑⲁⲣⲁ ⲉϥⲱϣ
                    ⲉ̀ⲃⲟⲗ
                    ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ ⲁ̀ Ⲡⲟⲥ̅ Ⲥⲱⲧⲡ ⲛ̀Ⲥⲓⲱⲛ ⲁϥⲥⲱⲧⲡ ⲙ̀ⲙⲟⲥ ⲉ̀ⲟⲩⲙⲁ ⲛϣⲱⲡⲓ ⲛⲁϥ.</td>
                <td class="arabic">وحرك الوتر العاشر من قيثارته صارخا قائلا: الرب اختار صهيون ورضى بها مسكنا له (مز١٣٢
                    :١٣)
                </td>
            </tr>
            <tr class="south" id="table_15_row_21">
                <td class="enPhonics" >Avkeem epimah meet enkap ente tef keethara
                    evosh evol evgo emmos: je a-Epchois sotp en-Say-yon afsotp emmos e-ouma enshopy naf.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_16" style="display: table;" title="Shere Ne Maria">
        <caption class="caption" id="caption_table_16">Hail To You Mary
        <span class="coptic-caption">Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀ </span>
        <span class="arabic-caption">السلام لك يامريم</span>
        </caption>

        <tbody ${tbodyClass}  id="table_16_tbody_0">
            <tr class="north" id="table_16_row_0">
                <td class="english" >Hail to you Mary, The beautiful dove, Who
                    gave
                    birth, to God the Word for us.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ̀ : ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ : ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ
                    ⲛⲁⲛ
                    : ⲙ̀Ⲫϯ ⲡⲓⲗⲟⲅⲟⲥ .</td>
                <td class="arabic">السلام لك يامريم الحمامة الحسنة التى ولدت لنا الله الكلمة.</td>
            </tr>
            <tr class="south" id="table_16_row_1">
                <td class="enPhonics" >Shere ne Maria, tit-sherompi ethne-sos, thi
                    etas-misi nan, emifnouti pi-Logos.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_16_tbody_1">
            <tr class="north" id="table_16_row_2">
                <td class="english" >You are the flower, Of incense, that has
                    blossomed, from The root of Jesse.</td>
                <td class="coptic" >̀ Ⲛⲑⲟ ⲧⲉ ϯϩ̀ⲣⲏⲣⲓ : ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ :
                    ⲑⲏⲉⲧⲁⲥⲫⲓⲣⲓ
                    ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ⲑ̀ⲛⲟⲩⲛⲓ ⲛ̀Ⲓⲉⲥⲥⲉ .</td>
                <td class="arabic">أنت زهرة البخور التى أينعت من أصل يسىّ.</td>
            </tr>
            <tr class="south" id="table_16_row_3">
                <td class="enPhonics" >Entho te ti-ehriri, ente pi-estoinofi, thi
                    etas-firi evol, khen ethnoni en-Yesse.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_16_tbody_2">
            <tr class="north" id="table_16_row_4">
                <td class="english" >The rod of Aaron, Which blossomed, Without
                    cleansing or watering, Is a symbol of you.</td>
                <td class="coptic" >Ⲡⲓϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ Ⲁⲁⲣⲱⲛ ⲉⲧⲁϥⲫⲓⲣⲓ ⲉ̀ⲃⲟⲗ : ⲭⲱⲣⲓⲥ ϭⲟ
                    ⲛⲉⲙ
                    ⲧ̀ⲥⲟ : ϥ̀ⲟⲓ ⲛ̀ⲧⲩⲡⲟⲥ ⲛⲉ .</td>
                <td class="arabic">عصا هرون التى أزهرت بغير غرس ولا سقى هى مثال لك.</td>
            </tr>
            <tr class="south" id="table_16_row_5">
                <td class="enPhonics" >Pi-eshvot ente Aaron, etafiri evol, khoris
                    etsho nem etso, efoi ente-pos-ne.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_16_tbody_3">
            <tr class="north" id="table_16_row_6">
                <td class="english" >You who gave birth to Christ, Our true God,
                    Without the seed of men, and Remained a virgin.</td>
                <td class="coptic" >Ⲱ̀ⲑⲏⲉⲧⲁⲥⲙⲉⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: Ⲡⲉⲛⲛⲟⲩϯ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ :
                    ⲁϭⲛⲉ ⲥ̀ⲡⲉⲣⲙⲁ ⲛ̀ⲣⲱⲙⲓ: ⲉⲥⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ .</td>
                <td class="arabic">يامن ولدت المسيح إلهنا بالحقيقة وبغير زرع بشر وأنت عذراء.</td>
            </tr>
            <tr class="south" id="table_16_row_7">
                <td class="enPhonics" >O thi etasmes Pekhrestoc, pennoti khen
                    oo-methmi,achne esperma enromi, es-oi em-parthenos.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_16_tbody_4">
            <tr class="north" id="table_16_row_8">
                <td class="english" >Wherefore everyone, Magnifies you, O my lady
                    the
                    Mother of God, The ever holy.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ : ⲥⲉϭⲓⲥⲓ ⲙ̀ⲙⲟ : ⲧⲁϭⲟⲓⲥ
                    ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.</td>
                <td class="arabic">من أجل هذا كل واحد يعظمك ياسيدتى والدة الاله القديسة كل حين .</td>
            </tr>
            <tr class="south" id="table_16_row_9">
                <td class="enPhonics" >Ethve fai o-on niven, se-chisi emmo,
                    ta-shois
                    ti-theotokos, ethowab enseyo niven.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_16_tbody_5">
            <tr class="north" id="table_16_row_10">
                <td class="english" >And we also pray, that we may win mercy,
                    Through
                    your intercessions, With the Lover of mankind.</td>
                <td class="coptic" >Ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ : ϩⲓⲧⲉⲛ
                    ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ</td>
                <td class="arabic">ونحن أيضاً نطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
            </tr>
            <tr class="south" id="table_16_row_11">
                <td class="enPhonics" >Anon hon ten tovh, ethrin shashni evnai,
                    hitenne-epresvia, entotf empi-mai-rowmi.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_17" style="display: table;" title="Semoti">
        <caption class="caption" id="caption_table_17">You Are Called Righteous
        <span class="coptic-caption">Ⲥⲉⲙⲟⲩϯ</span>
        <span class="arabic-caption">أنت مدعوة بالحقيقة</span>
        </caption>

        <tbody ${tbodyClass}  id="table_17_tbody_0">
            <tr class="north" id="table_17_row_0">
                <td class="english" >You are called righteous, O St. Mary, The
                    Second
                    Tabernacle, belonging to the Holies:</td>
                <td class="coptic" >Ⲥⲉⲙⲟⲩϯ ⲉ̀ⲣⲟ ⲇⲓⲕⲉⲟⲥ : ⲱ̀ ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ̀ : ϫⲉ
                    ϯⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲛ̀ⲥ̀ⲕⲏⲛⲏ : ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ .</td>
                <td class="arabic">مدعوة أنت بالحقيقة أيتها القديسة مريم القبة التى للاقداس.</td>
            </tr>
            <tr class="south" id="table_17_row_1">
                <td class="enPhonics" >Semoti e-ro zikeos, o thi-ethowab Maria, je
                    timah-esnouti en-eskini, ente ni-ethowab.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_17_tbody_1">
            <tr class="north" id="table_17_row_2">
                <td class="english" >Wherein is placed, The rod of Aaron, And the
                    holy
                    flower, of incense.</td>
                <td class="coptic" >Ⲑⲏⲉⲧⲟⲩⲭⲏ ⲛ̀ϧⲏⲧⲥ : ⲛ̀ϫⲉ ⲡⲓϣ̀ⲃⲱⲧ ⲛ̀ⲧⲉ Ⲁⲁⲣⲱⲛ :
                    ⲛⲉⲙ
                    ϯϩ̀ⲣⲏⲣⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ.</td>
                <td class="arabic">تلك الموضوع فيها عصا هرون والزهرة المقدسة التى للبخور.</td>
            </tr>
            <tr class="south" id="table_17_row_3">
                <td class="enPhonics" >Thi-etouki enkhits, enje pishvot ente
                    A-aron,
                    nem tih-riri ethowab, ente pistoi-nofi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_17_tbody_2">
            <tr class="north" id="table_17_row_4">
                <td class="english" >You are clothed with purity, Within and
                    without,
                    O pure Tabernacle, the dwelling of the righteous.</td>
                <td class="coptic" >Ⲧⲉϫⲟⲗϩ ⲙ̀ⲡⲓⲧⲟⲩⲃⲟ : ⲥⲁϧⲟⲩⲛ ⲛⲉⲙ ⲥⲁⲃⲟⲗ : ⲱ̀
                    ϯⲥ̀ⲕⲏⲛⲏ
                    ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ : ⲫ̀ⲙⲁⲛ̀ϣⲱⲡⲓ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ.</td>
                <td class="arabic">أنت مشتملة بالطهارة من داخل ومن خارج أيتها القبة النقية مسكن الصديقين.</td>
            </tr>
            <tr class="south" id="table_17_row_5">
                <td class="enPhonics" >Te-golh empi tovo, sakhon nem savol,
                    o-tiskini
                    en-katharos, efman-showpi enni-zikaos.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_17_tbody_3">
            <tr class="north" id="table_17_row_6">
                <td class="english" >The hosts of the high standings, And the
                    chorus
                    of the just, glorify You, and Your blessedness.</td>
                <td class="coptic" >Ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲧⲉ ⲡ̀ϭⲓⲥⲓ : ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲑ̀ⲙⲏⲓ
                    :
                    ⲥⲉⲉⲣⲉⲩⲇⲟⲝⲁⲍⲓⲛ : ⲛ̀ⲛⲉⲙⲁⲕⲁⲣⲓⲥⲙⲟⲥ.</td>
                <td class="arabic">طغمات العلاء وصفوف الابرار يمجدون طوباويتك.</td>
            </tr>
            <tr class="south" id="table_17_row_7">
                <td class="enPhonics" >Ni-taghma ente epichisi, nem ep-khoros ente
                    ni-ethmi, se-errev-zoxa-zin, enne-makarisomos.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_17_tbody_4">
            <tr class="north" id="table_17_row_8">
                <td class="english" >Wherefore we, magnify you befittingly, With
                    prophetic, Hymnology.</td>
                <td class="coptic" >Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϭⲓⲥⲓ: ⲙ̀ⲙⲟ ⲁ̀ⲝⲓⲱⲥ : ϧⲉⲛ
                    ϩⲁⲛⲩ̀ⲙⲛⲟⲗⲟⲅⲓⲁ̀
                    ⲙ̀ⲡ̀ⲣⲟⲫⲏⲧⲓⲕⲟⲛ</td>
                <td class="arabic">من أجل هذا نعظمك باستحقاق بتماجيد نبوية.</td>
            </tr>
            <tr class="south" id="table_17_row_9">
                <td class="enPhonics" >Ethve fai ten-chisi, emmo axeyos, khen
                    han-eimono-logia, emipro-fitikon.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_17_tbody_5">
            <tr class="north" id="table_17_row_10">
                <td class="english" >For they spoke of you, With great honor, O
                    Holy
                    City, Of the Great King.</td>
                <td class="coptic" >Ϫⲉ ⲁⲩⲥⲁϫⲓ ⲉⲑⲃⲏϯ :  ⲛ̀ϩⲁⲛϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲩⲧⲁⲓⲏ̀ⲟⲩⲧ :
                    ϯⲃⲁⲕⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϣϯ ⲛ̀ⲟⲩⲣⲟ.</td>
                <td class="arabic">لانهم تكلموا من أجلك بأعمال كريمة أيتها المدينة المقدسة التى للملك العظيم.</td>
            </tr>
            <tr class="south" id="table_17_row_11">
                <td class="enPhonics" >Je asaji ethviti, enhan ehvi-owi eftai-oot,
                    ti-vaki ethowab, ente pi-nishti enowro.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_17_tbody_6">
            <tr class="north" id="table_17_row_12">
                <td class="english" >We entreat and pray, That we may win mercy,
                    Through your intercessions, with the Lover of mankind.</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲧⲉⲛⲧⲱⲃϩ : ⲉⲑⲣⲉⲛϣⲁϣⲛⲓ ⲉⲩⲛⲁⲓ: ϩⲓⲧⲉⲛ
                    ⲛⲉⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲙⲁⲓⲣⲱⲙⲓ.</td>
                <td class="arabic">نسأل ونطلب أن نفوز برحمة بشفاعاتك عند محب البشر.</td>
            </tr>
            <tr class="south" id="table_17_row_13">
                <td class="enPhonics" >Tenti-ho ten-tovh, ethrin shashni evnai,
                    hiten
                    ni-epresvia, entotf empi-mai rowmi.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_18" style="display: table;" title="Rejoice O Mary">
        <caption class="caption" id="caption_table_18">Rejoice, O Mary
        <span class="coptic-caption">Ⲟⲩⲛⲟϥ ⲙ̀ⲙⲟ Ⲙⲁⲣⲓⲁ̀</span>
        <span class="arabic-caption">افرحي يا مريم</span>
        </caption>

        <tbody ${tbodyClass}  id="table_18_tbody_0">
            <tr class="north" id="table_18_row_0">
                <td class="english" >Rejoice, O Mary, handmaiden and mother, for
                    the
                    angels praise Him who is in your lap,</td>
                <td class="coptic" >Ⲟⲩⲛⲟϥ ⲙ̀ⲙⲟ Ⲙⲁⲣⲓⲁ̀: ϯⲃⲱⲕⲓ ⲟⲩⲟϩ ϯⲙⲁⲩ: ϫⲉ ⲫⲏ
                    ⲉⲧϧⲉⲛ
                    ⲡⲉⲁ̀ⲙⲏⲣ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟϥ.</td>
                <td class="arabic">افرحي يا مريم، العبدة والأم ، لأن الذي في حجرك ، الملائكة تسبحه.</td>
            </tr>
            <tr class="south" id="table_18_row_0.5">
                <td class="enPhonics" >Ounof emmo Maria: Tivoki owoh timav: Je vi etkhen pe amir: Ni-angelos sehos erof. </td>
                <td class="enPhonics" >Efrahi ya Mariamo al Abda wal omo le’an al-lazee fee hegrokee al mala’ekato tosabeho.</td>
            </tr>
                        
        </tbody>
        <tbody ${tbodyClass}  id="table_18_tbody_1">
            <tr class="south" id="table_18_row_1">
                <td class="english" >and the Cherubim worthily Worship Him; the
                    Seraphim too, without ceasing.</td>
                <td class="coptic" >Ⲟⲩⲟϩ ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲁⲝⲓⲱⲥ: ⲛⲉⲙ
                    ⲛⲓⲥⲉⲣⲁⲫⲓⲙ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩⲛⲕ.</td>
                <td class="arabic">والشاروبيم يسجدون له باستـحـقـاق والسيـرافيـم ، بغير فتور.</td>
            </tr>
            <tr class="north" id="table_18_row_1.5">
                <td class="enPhonics" >Owoh nesherobim: Se ou-osht emmof aksios: Nem niserafim khen oometatmonk.</td>
                <td class="enPhonics" >Wal sharobim yasjodon lo be-estehak wal seraphim be-ghair fatoor.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_18_tbody_2">
            <tr class="north" id="table_18_row_2">
                <td class="english" >We have no boldness before our Lord Jesus
                    Christ
                    apart from your prayers and intercessions, O our Lady, the Lady of us all, the Theotokos.</td>
                <td class="coptic" >Ⲙⲙⲟⲛ ⲛ̀ⲧⲁⲛ ⲛ̀ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ̀: ϧⲁⲧⲉⲛ Ⲡⲉⲛ⳪ Ⲓˉⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲭⲱⲣⲓⲥ ⲛⲉⲧⲱⲃϩ ⲛⲉⲙ ⲛⲉ ⲡ̀ⲣⲉⲥⲃⲓⲁ̀: ⲱ ⲧⲉⲛ⳪ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ.</td>
                <td class="arabic">ليس لنا دالة ، عند ربنا يسوع المسيح، سوي طـلـبـاتـك وشفاعـاتـك ، ياسيدتنا كلنا السيدة
                    والدة الاله.</td>
            </tr>
            <tr class="south" id="table_18_row_2.5">
                <td class="enPhonics" >Emmon entan enouparisias: khaten penshois Eesos Pekhristos: Khoris netovh nem ne-presevia: O tenten nev-eb teren ethowabos.</td>
                <td class="enPhonics" >Laysa lana dala Enda rabena YasooO al maseeh sewa telbatoki wa shafaAatoki ya sayedatna kolona al sayeda waledato el elah</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_18_tbody_3">
            <tr class="south" id="table_18_row_3">
                <td class="english" >That we may praise you with the Cherubim and
                    the
                    Seraphim, proclaiming and saying:</td>
                <td class="coptic" >Ϩⲓⲛⲁ ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲛⲉⲙ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ ⲛⲉⲙ
                    ⲛⲓⲤⲉⲣⲁⲫⲓⲙ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ  ⲙ̀ⲙⲟⲥ.</td>
                <td class="arabic">لكي نسبحك مع الشـاروبـيـم والسيرافـيـم صارخين قائلين:</td>
            </tr>
            <tr class="north" id="table_18_row_3.5">
                <td class="enPhonics" >Hina entenhos erok: nem nisheroubim nem niseraphim: Enosh ebol engo emmos.</td>
                <td class="enPhonics" >Lekay nosabeHoka maAa alsherobeem walserafeem sarekheena wa qa’eleen:</td>
            </tr>
            </tbody>
        <tbody ${tbodyClass}  id="table_18_tbody_4">
            <tr class="north" id="table_18_row_4">
                <td class="english" >Holy, Holy, Holy, O Lord, the Pantocrator,
                    Heaven
                    and earth are full of Your Glory and Your Honor.</td>
                <td class="coptic" >Ϫⲉ Ⲭ̀ⲟⲩⲁⲃ Ⲭ̀ⲟⲩⲁⲃ Ⲭ̀ⲟⲩⲁⲃ: Ⲡ⳪ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ:
                    ⲧ̀ⲫⲉ
                    ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ: ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ.</td>
                <td class="arabic">قدوس قدوس قدوس أيها الرب الضابط الكل ، السماء والأرض  مملوءتـان من مجدك وكرامتك.</td>
            </tr>
            <tr class="south" id="table_18_row_4.5">
                <td class="enPhonics" >Je ekouab ekouab ekouab: Epshois pi-pantokrator: Et-ve nem epkahi meh ebol: Khen pek oou nem pek taio.</td>
                <td class="enPhonics" >Qodoos, Qodoos, Qodoos ayoha alrabo aldabet alkolo al sama’ walardo mamloo o’atanee men magdeka wa karamatoka</td>
            </tr>                
        </tbody>
        <tbody ${tbodyClass}  id="table_18_tbody_5">
            <tr class="south" id="table_18_row_5">
                <td class="english" >We ask You, O Son of God, to keep the life of our patriarch, Papa Abba Tawadros the high priest. Confirm him upon his throne.</td>
                <td class="coptic" >Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲱ̀ Ⲩⲓⲟⲥ Ⲑⲉⲟⲥ: ⲉⲑⲣⲉⲕ ⲁ̀ⲣⲉϩ ⲉ̀ⲡ̀ⲱⲛϧ ⲙ̀ⲡⲉⲛ ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ: ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲧⲁⲱⲁⲇⲣⲟⲥ ⲡⲓⲁ̀ⲣⲭⲏⲉ̀ⲣⲉⲩⲥ : ⲙⲁⲧⲁϫⲣⲟϥ ϩⲓϫⲉⲛ ⲡⲉϥⲑ̀ⲣⲟⲛⲟⲥ.</td>
                <td class="arabic">نسألك يا ابن الله أن تحفظ حياة بطريركنا البابا أنبا تواضروسرئيس الكهنة (الأحبار) ثبته
                    علي
                    كرسيه</td>
            </tr>
            <tr class="north" id="table_18_row_5.5">
                <td class="enPhonics" >Tenti-ho erok o-eyos Theos: Ethrin arik eponkh empen patriarshis: Papa abba Tawadros: Piarshi-erevs: Matagrof hijen pefethronos.</td>
                <td class="enPhonics" >Nas’aloka yabna allah an taHfaz Hayat
                batreyarkena al anba Tawadros ra’eesol aHbar thabet-ho Aala korseeh</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_18_tbody_6">
            <tr class="north" id="table_18_row_6">
                <td class="english" >And his partner in the liturgy, our Holy,
                    righteous father, Abba(_____)
                    the Bishop. (the Metropolitan) Confirm him on his throne.</td>
                <td class="coptic" >Ⲛⲉⲙ ⲡⲉϥⲕⲉϣ̀ⲫⲏⲣ ⲛ̀ⲗⲓⲧⲟⲩⲣⲅⲟⲥ: ⲡⲉⲛⲓⲱⲧ ̅ⲉ̅ⲑ̅ⲩ
                    ⲛ̀ⲇⲓⲕⲉⲟⲥ: ⲁⲃⲃⲁ (...) ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ (ⲡⲓⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ): ⲙⲁⲧⲁϫⲣⲟϥ ϩⲓϫⲉⲛ ⲡⲉϥⲑ̀ⲣⲟⲛⲟⲥ.</td>
                <td class="arabic">وشريكه فى الخدمة الرسولية ابينا المكرم البار الأنبا )...( الاسقف (المطران ) ثبته علي
                    كرسيه</td>
            </tr>
            <tr class="south" id="table_18_row_6.5">
                <td class="enPhonics" >Nem pef ke eshvir enli-towrgos: Peni-ot ethowab: Abba (...) pi-episkopos (pimetropolitikos): Matagrof hijen pefethronos.</td>
                <td class="enPhonics" >Was shareekaho fel khedma alrasooleya abeena al mokaram albar alanba______ al osqof (al motran) thabet-ho aala korseeh.</td>
            </tr>
        </tbody>

    </table>
    <br>


    <table id="table_19" style="display: table;" title="O MARY">
        <caption id="caption_table_19" class="caption">O MARY
        <span class="arabic-caption">يا م ر ي م</span>
        </caption>
        <tbody ${tbodyClass}  id="table_19_tbody_0">
            <tr id="table_19_row_0" class="north">
                <td class="english" >O Mary: Lady of virgins: you
                    attained greatness: from the True Light: You are exalted: by the Lord
                    Himself: you bore the Creator: O what a great marvel!</td>
                <td class="enPhonics1" >Ya meem reh yeh meem: ya set
                    el-abkar: qad nelty taazeem: men noor el-anwar: wa wohebty taazeem: men
                    endoo qad sar: wa Hamalty al-khaleq: man za la yaHtar.</td>
                <td class="arabic">يا م ر ى م : ياست الأبكار : قد نلت تعظيم : من نور الأنوار :
                    ووهبت تعظيم : من عنده قد صار : وحملت الخالق : من ذا لا يحتار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_1">
            <tr id="table_19_row_2" class="north">
                <td class="english" >Wondrous among nations: wisdom to
                    rulers: a hidden gem: and the gospel spoke of you:: They give you
                    blessings: in all generations: O daughter of Joachim: exalted above the
                    Cherubim.</td>
                <td class="enPhonics1" >Qad serty ogooba: lel roasa
                    amthal: dorrah maHgooba: wa fi el-engeel qad qal: yotonek el-tooba: fi
                    kol al-gial: ya ebnat youaqeem: qad foqty el-Cheroubim.</td>
                <td class="arabic">قد صرت اعجوبة : للرؤساء امثال : درة محجوبة : وفي الانجيل قد قال
                    : يعطونك الطوبا : في كل الاجيال : يا ابنة يواقيم : قد فقتي الشاروبيم</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_2">
            <tr id="table_19_row_4" class="south">
                <td class="english" >You attained what no one could: O
                    Mother of the Mercy: and you became: filled with grace: To the Divine you
                    became: a veil for the Word: and greatly marveled: were you among the
                    scholars.</td>
                <td class="enPhonics1" >Man nal ma nelty: ya om
                    el-raHma: wa anty qaad serty: mamlooa nema: wa lel lahot serty: Hegaban
                    lel-kalema: wa aHtar fiki: arbab al-tafheem.</td>
                <td class="arabic">من نال ما نلتى : يا ام الرحمة : وانتي قد صرتي : مملؤة نعمه :
                    وللاهوت صرتي : حجابا للكلمة : واحتار فيك: ارباب التفهيم</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_3">
            <tr id="table_19_row_6" class="south">
                <td class="english" >O tabernacle of the covenant: O
                    censer of Aaron: O spirit of glory: O daughter of Zion: O the light of
                    eyes: with you we rejoice: and abide in grace: O full of grace.</td>
                <td class="enPhonics1" >Ya taboot el-ahde: ya magmaret
                    Haroun: ya roH el-magd: ya ebnat Sehioun: ya noor el-oyoon: beky
                    nasadoo: wa naHza bel-naeem: ya mamloua nema.</td>
                <td class="arabic">يا تابوت العهد : يا مجمرة هارون : يا روح المجد : يا ابنة صهيون
                    : يا نور العيون : بك نسعد : ونحظي بالنعيم : يا مملؤة نعمه</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_4">
            <tr id="table_19_row_8" class="north">
                <td class="english" >O full of grace: the fortifying
                    fortress: the jewel of mercy: the aid of the poor: Your son has purged
                    death: O the intercessor of saints: intercede for us: O Mother of Mercy.</td>
                <td class="enPhonics1" >Ya mamloua nema: anty el-Hesn
                    el-Haseen: anty kanz el-raHma: ya awn al-masakeen: be-ebnek zalet el
                    naqma: ya shafee3et el-qedisin: Wa shafi3etna fil-zaHma: ya om el-raHim.</td>
                <td class="arabic">يا مملؤة نعمه : انت الحصن الحصين: انت كنز الرحمة: يا عون المساكين
                    : بإبنك زالت النقمة : يا شفيعة القديسين : وشفيعتنا في الزحمة : يا ام الرحيم
                </td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_5">
            <tr id="table_19_row_10" class="north">
                <td class="english" >Hail to you: O Lady of
                    virgins: O daughter of Joachim: the chosen throne: Righteous is your
                    Son: He purged our shame: the glorious God: the Creator of ages.</td>
                <td class="enPhonics1" >Noqadem laky a-tazeem: ya set
                    el-abkar: ya ebnat Yowaqim: ya korseyan mokhtar: wel-mawlood menky
                    karim: azal anna al-ar: al-elah el-azeem: khalek el ad-har.</td>
                <td class="arabic">نقدم لك التعظيم : ياست الأبكار : يا ابنة يواقيم : يا كرسيا مختار
                    : والمولود منك كريم : ازال عنا العار : الاله العظيم : خالق الادهار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_6">
            <tr id="table_19_row_12" class="south">
                <td class="english" >The adornment of virgins: the holy
                    Mother: the purity of the pure: O light of lights: O jewel of grace: O
                    Mother of Mercy: truly you are the vine: filled and bearing fruit.</td>
                <td class="enPhonics1" >Ya zen el-abkar: ya qods
                    el-aHbar: ya tohr el-at-har: ya noor el-anwar: ya kanz al-nema: ya om
                    el-raHma: anty heya al-karma: al-mamloua athmar.</td>
                <td class="arabic">يا زين الأبكار : يا قدس الأحبار : يا طهر الأطهار : يا نور الأنوار
                    : يا كنز النعمة : يا ام الرحمة: أنت هي الكرمة : المملؤة أثمار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_7">
            <tr id="table_19_row_14" class="south">
                <td class="english" >O daughter of Joachim: you
                    attained greatness: you are Jerusalem: glorious and honored: You are
                    Zion: O precious jewel;: you released the captive: from the Deceiver&rsquo;s
                    hand.</td>
                <td class="enPhonics1" >Ya ebnat Yowaqim: qad nelty
                    al-tazeem: anty heya Orshaleem: zat al-magd wal fakhar: anty heya
                    Sehioun: ya gawharan maknoon: fakakty el-masgoon: men yad el-makar.</td>
                <td class="arabic">يا ابنة يواقيم : قد نلت التعظيم : انت هي اورشليم : ذات المجد
                    والفخار : انت هي صهيون : يا جوهرا مكنون : فككت المسجون : من يد المكار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_8">
            <tr id="table_19_row_16" class="north">
                <td class="english" >Your son saved Adam: the repentant
                    sinner: humanity He set free: from all adversaries: The Lord from your
                    childhood: witnessed your purity: and therefore has blessed you: before all
                    nations.</td>
                <td class="enPhonics1" >Ebnek khalas Adam: el-khaty
                    el-nadem: we ataq el-alam: men kol el-adrar: rabek men soghrek: lamma
                    raa tohrek: qad tayab zekrek: fi kol el-aqtar.</td>
                <td class="arabic">ابنك خلص ادم : الخاطئ النادم : وعتق العالم : من كل الاضرار :
                    ربك من صغرك : لما رأي طهرك : قد طيب ذكرك: في كل الاقطار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_9">
            <tr id="table_19_row_18" class="north">
                <td class="english" >He sent you Gabriel: the Messenger
                    of His words: and greeted you saying: The Lord has chosen you: His Holy
                    Spirit: filled and dwelt within you: blessed are you O Virgin: throughout all
                    ages."</td>
                <td class="enPhonics1" >Arsal laky Ghabrial: bemoHkam el
                    aqwal: wa basharek ez qal: Allaho laky ekhtar: roH qodsoh malaky: wa
                    sakan fi aHshaky: ya adra toobaky: fi kol el agial.</td>
                <td class="arabic">ارسل لك غبريال : بمحكم الاقوال : وبشرك اذ قال : الله لك اختار
                    : روح قدسه ملاك : وسكن في احشاك يا: عذرا طوباك : في كل الاجيال</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_10">
            <tr id="table_19_row_20" class="south">
                <td class="english" >The Unseen and Holy: was born from
                    you: and was called Jesus: for all eyes to see: Moses saw the bush:
                    blazing with fire: its branches flaming: yet the bush was not consumed.</td>
                <td class="enPhonics1" >An gher el-maHsoos: al-rab el
                    qodoos: menky ata wa doaya Isoos: wa nazarat-ho el-absar: Mousa raa
                    al-awsag: wal-nar fihi tata-gag: wa aghsanoh tatawahag: ma darat-ho al-nar.
                </td>
                <td class="arabic">ان غير المحسوس : الرب القدوس : منك اتي ودعي ايسوس : ونظرته الابصار
                    : موسي رأي العوسج : والنار فيه تتأجج : وأغصانه تتوهج : ما ضرته النار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_11">
            <tr id="table_19_row_22" class="south">
                <td class="english" >The blazing bush: which Moses had
                    seen: was indeed Mary: the adornment of virgins: The fire is Jesus: the
                    Holy Lord: who gave us the Law: engraved in stone.</td>
                <td class="enPhonics1" >Ena ma raat-ho al-aynan:
                    moltaheban bel-niran: fi el-awsag wal-aghsan: heya Mariam zenat el-abkar:
                    wel-nar heya Isoos: al-rab el-qodoos: motina el-namoos: maktooban fil-aHgar.
                </td>
                <td class="arabic">ان ما رأته العينان : ملتهبا بالنيران : في العوسج والأغصان : هي
                    مريم زينة الأبكار : والنار هي إيسوس : الرب القدوس : معطينا الناموس : مكتوبا
                    في الاحجار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_12">
            <tr id="table_19_row_24" class="north">
                <td class="english" >Isaiah prophesied: about the
                    birth: of Emmanuel: the Almighty King: Ezekiel saw a door: through which
                    the Lord entered: He sealed the door and claimed it: highly exalted.</td>
                <td class="enPhonics1" >Fi Asheya qad qeel: an haza
                    el-taweel: taled emanoueel: al-malek el-gabar: wa Hazqeyal raa bab:
                    dakhal feeh rab el-arbab: wa khetm el-bab mohab: alya el-meqdar.</td>
                <td class="arabic">في اشعيا قد قيل : عن هذا التأويل : تلد عمانوئيل : الملك الجبار
                    : وحزقيال رأي باب : دخل فيه رب الارباب : وختم الباب مهاب : عالي المقدار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_13">
            <tr id="table_19_row_26" class="north">
                <td class="english" >Highly exalted are you: and your
                    Son Jesus: when He was born of you: the earth was adorned: And also
                    Daniel: prophesied and said: I saw the high throne: highly exalted.</td>
                <td class="enPhonics1" >Alen howa qadrek: lean yasoo
                    ebnek: lamma woled mennek: tazayanat el-aktar: wa aydan Danial: tanaba
                    Haytho qal: raayto el-korsy el-al: aleya el meqdar.</td>
                <td class="arabic">عال هو قدرك : لإن يسوع ابنك : لما ولد منك : تزينت الاقطار :
                    وايضا دانيال : تنبأ حيث قال : رأيت الكرسي العال : عالي المقدار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_14">
            <tr id="table_19_row_28" class="south">
                <td class="english" >In the firmaments high I saw: one
                    like the Son of Man: who has dominion: over all the earth: He is the Lord of
                    Hosts: around Him are the ranks: thousands and myriads: glorifying in
                    reverence.</td>
                <td class="enPhonics1" >Nazarto fok el-arkan: shebh ebn
                    el-ensan: wa laho al-soltan: ala kol el aqtar: wa howa rabo el-qowat: wa
                    men Hawloh taghamat: oloof wa rabawat: be ezamen wa waqar.</td>
                <td class="arabic">نظرت فوق الأركان : شبه ابن الانسان : وله السلطان : علي كل الأقطار
                    : وهو رب القوات : ومن حوله طغمات: الوف وربوات : بعظم ووقار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_15">
            <tr id="table_19_row_30" class="south">
                <td class="english" >O daughter of Joachim: you are
                    exalted above: the Cherubim and Seraphim: and all righteous fathers: The Lord
                    was born from you: and David praises you: with his harp he sings: playing its
                    ten strings.</td>
                <td class="enPhonics1" >Ya ebnat Yowaqim: foqt
                    el-karoubim: aydan el-serafaim: wa kol el-aba el-abrar: menky ga
                    el-mawlood: al-rab el-mabood: yamdaH fiki Dawood: bel-asharat awtar.</td>
                <td class="arabic">ياابنة يواقيم : فقت الكروبيم : وايضا السرافيم : وكل الاباء الابرار
                    : منك جاء المولود : الرب المعبود: يمدح فيك داود : بالعشرة أوتار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_16">
            <tr id="table_19_row_32" class="north">
                <td class="english" >The sound of the first string: is
                    in honor of your name: the Virgin will carry: the Almighty King: And with the
                    second string: David rejoices: chanting with hymns: while playing his harp.
                </td>
                <td class="enPhonics1" >El-watar el-awal: qawlon
                    mobagal: wel-adra taHbal: bel-malek el-gabar: el-watar el-thany: Dawood
                    bil-tahany: yoratel bel-alHan: ma darb el-qithar.</td>
                <td class="arabic">الوتر الاول : قول مبجل : والعذراء تحبل: بالملك الجبار : الوتر
                    الثاني : داود بالتهاني : و يرتل بالالحان : مع ضرب القيثار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_17">
            <tr id="table_19_row_34" class="north">
                <td class="english" >And the third O daughter: because
                    you were faithful: you were filled with light: and the Lord chose you: The
                    fourth string is sounded: so that all can hear: of her who is praised: all
                    over the world.</td>
                <td class="enPhonics1" >Wel-thaleth ya ibna: anty
                    motamana: bel-noor moshtamala: wal-rabo laky ekhtar: el-watar el-rabe:
                    esghy ya same: za qawlon shae: fi kol el-aqtar.</td>
                <td class="arabic">الثالث يا ابنة : أنت مؤتمنة : بالنورمشتملة : والرب لك إختار :
                    الوتر الرابع : اصغ يا سامع : ذا قول شائع : في كل الاقطار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_18">
            <tr id="table_19_row_36" class="south">
                <td class="english" >The fifth is a sign of hope: as a
                    dove she appears: with Ophir gold: upon her shoulders: With the sixth he
                    sung: praises I will not hide: but I will praise with him: and proclaim to
                    all.</td>
                <td class="enPhonics1" >Wel-khames khabar: Hamama heya
                    tazhar: bel-zahab el-asfar: ala menkabayha sar: wel-sades qal fih:
                    qawlan ma akhfih: lakeny arweeh: wa osh-heraho eg-har.</td>
                <td class="arabic">الخامس خبر : حمامة هي تظهر : بالذهب الاصفر : علي منكبيها صار
                    : السادس قال فيه : قولاً ما أخفيه : لكني أرويه : واشهره أجهار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_19">
            <tr id="table_19_row_38" class="south">
                <td class="english" >With the seventh string he said: O
                    mountain, of the High God: the High took flesh from you: without a doubt: And
                    with the eighth he sang: to the Virgin Mary: the Great chose her: and crowned
                    her with honor.</td>
                <td class="enPhonics1" >Wel-sabe ez qal: ya gabal Allah
                    el-al: tagasad menky el-motaal: bela shak wala enkar: wel-thamen ranam:
                    lel-adra Mariam: ekhtarha al-moazam: wa kallalha bel-fakhar.</td>
                <td class="arabic">السابع اذ قال : يا جبل الله العال : تجسد منك المتعال : بلا شك ولا
                    إنكار : والثامن رنم : للعذ را مريم : اختارها المعظم : وكللها بالفخار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_20">
            <tr id="table_19_row_40" class="north">
                <td class="english" >With the ninth string he said:
                    from her will surely come: God her son: who sealed her virginity: With the
                    tenth he sang: the Powerful God: in Zion he appeared: the dwelling of the
                    righteous.</td>
                <td class="enPhonics1" >El-tase qal anha: yazhar Haqan
                    menha: al-Elah wa howa ebnaha: wal-bokooreya fi Hefzen wa waqar: El-watar
                    el-asher: Allah el-qader: fi Sehioun zaher: maskan el-abrar.</td>
                <td class="arabic">التاسع قال عنها : يظهر حقا منها : الإله وهو إبنها : والبكورية في
                    حفط ووقار : الوتر العاشر : الله القادر : في صهيون ظاهر : مسكن الأبرار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_21">
            <tr id="table_19_row_42" class="north">
                <td class="english" >There isn&rsquo;t in all ages:
                    anyone like you O Virgin: for you released the chains: and shame of Adam: O
                    Lady of the creation: the pride of faith: your servant is in need: drowning
                    because of sins.</td>
                <td class="enPhonics1" >Lam yowgad fi el-dahr: methlek
                    ayatoha el-bekr, : leanek fakakty el-asr: an Adam wal-ar: ya sayedet
                    el-akwan: ya fakhr el-eiman: ana abdek Hayran: gharek fil-awzar.</td>
                <td class="arabic">لم يوجد في الدهر : مثلك أيتها البكر : لأنك فككت الاسر : عن آدم
                    والعار : يا سيدة الأكوان : يا فخر الإيمان : عبدك حيران : غارق في الاوزار
                </td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_22">
            <tr id="table_19_row_44" class="south">
                <td class="english" >Intercede for me: do not leave
                    your servant: Ask your son to save me: From the fire: For your
                    intercession: is heard and accepted: and He defends from the attacks: of the
                    adversary.</td>
                <td class="enPhonics1" >Alen howa qadrek: la tatroky
                    abdek: qasdy men waladek: Toba wa esteghfar: Wel adra tashfa: Fe elodar
                    agma: We heia ana tadfa: darabat el-ashrar.</td>
                <td class="arabic">عالي هو قدرك : لا تتركي عبدك : قصدي من ولدك : توبة و أستغفار
                    : و العذراء تشفع : في الحضار اجمع : و هي عنا تدفع : ضربات الاشرار</td>
            </tr>
            </tbody>
            <tbody ${tbodyClass}  id="table_19_tbody_23">
            <tr id="table_19_row_46" class="south">
                <td class="english" >Arise O poor one, and clothe yourself in
                    faith: and say Amen Amen: for us she intercedes: The persistent servant:
                    Will always praise her: For by his side that Day: The Lady of virgins shall be.</td>
                <td class="enPhonics1" >Qom enhad ya meskeen: wa elbes
                    thob el-yaqeen, : wa qol amin amin: fa heya tashfa fil-hadreen: wal-nazem
                    el-meskeen: madeHha fi kol Hin: maloh yom el-din: sewa sayedet el-abkar.</td>
                <td class="arabic">قم وانهض يا مسكين : والبس ثوب اليقين : وقل امين امين : فهي تشفع في
                    الحاضرين : و أنا الخاطي المسكين : مادحها في كل حين : مالي يوم الدين : سوي
                    سيدة الابكار</td>
            </tr>
            </tbody>
        </tbody>
    </table>


    <br>
    <table id="table_20" style="display: table;" title="I praise the virgin">
        <caption class="caption" id="caption_table_20">I Praise The Virgin<br /><span
                class="arabic-caption">امدح في البتول</span></caption>
        <tbody ${tbodyClass}  id="table_20_tbody_0">
            <tr id="table_20_row_0" class="north">
                <td class="english" >I praise the Virgin And explain and say O
                    the origin And the hidden pearl</td>
                <td class="arabic">أمدح فى البتول: وأشرح فيها وأقول: ياأصل الأصول: ياجوهر مكنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_1">
            <tr id="table_20_row_1" class="north">
                <td class="english" >Through your Son, our Lady Cause of
                    salvation We reached the goal And you brought us joy</td>
                <td class="arabic">بأبنك ياستنا: خلاص جنسنا: وبلغنا المنى: وبك صرنا فرحون</td>
            </tr>
        
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_2">
            <tr id="table_20_row_2" class="south">
                <td class="english" >Was truly Incarnate From a Virgin girl
                    Crucified and died For us at Golgotha</td>
                <td class="arabic">تجسد الابن بثبات: من ست البنات: صلب عنا ومات: عند الاقرانيون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_3">
            <tr id="table_20_row_3" class="south">
                <td class="english" >The fruit of my pledge O daughter of Zion
                    To love your Son And proclaim and say</td>
                <td class="arabic">ثمرة عربونى: ياأبنة صهيون: أحب الهي: وأصيح وأقول</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_4">
            <tr id="table_20_row_4" class="north">
                <td class="english" >Gabriel came With tidings and sayings You
                    accepted His word In calmness and wisdom</td>
                <td class="arabic">جاك غبريال: ببشائر وأقوال: وقبلت ما قال: بسر خفي مكنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_5">
            <tr id="table_20_row_5" class="north">
                <td class="english" >He dwelt by His Word In strength and
                    power You became like heaven O, daughter of Zion</td>
                <td class="arabic">حل بكلمته: وشرح قدرته: صرت كسمائه: يا إبنة صهيون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_6">
            <tr id="table_20_row_7" class="refrain">
                <td class="english" >Your love embraced me: O pride of nations:
                    Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                    The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
                    Aaron's censer</td>
                <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
                ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_7">
            <tr id="table_20_row_8" class="south">
                <td class="english" >He saved Adam After his sorrow And has
                    freed the world We rejoice in you</td>
                <td class="arabic">إبنك خلص آدم: بعد أن كان نادم: وعتق العالم: ونحن بك فرحون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_8">
            <tr id="table_20_row_9" class="south">
                <td class="english" >He is glorified And promised His Apostles
                    To save His people From Satan's bondage</td>
                <td class="arabic">دائم تمجيده: وعاهد تلاميذه: يخلص عبيده: من كيد الأركون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_9">
            <tr id="table_20_row_10" class="north">
                <td class="english" >Concerning you, David said, &ldquo;The
                    King rejoiced in you And took flesh from you The Lord on His Throne.&rdquo;</td>
                <td class="arabic">داود قال عنك: الملك إشتهى حسنك: وتجسد منك: رب العرش المكنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_10">
            <tr id="table_20_row_11" class="north">
                <td class="english" >Myriads and thousands Standing around the
                    Throne Ranks and orders Saints and martyrs</td>
                <td class="arabic">ربوات وألوف: حول العرش وقوف: وطغمات وصفوف: وشهداء متصلون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_11">
            <tr id="table_20_row_12" class="south">
                <td class="english" >Sorrow was taken away And we are
                    comforted Through you, O Mary The pride of the human race</td>
                <td class="arabic">زالت عنا الأحزان وصرنا فى أطمئنان بك يامريم يا فخر البشريون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_12">
            <tr id="table_20_row_13" class="south">
                <td class="english" >Salome witnessed That the Virgin gave
                    birth She believed and confirmed The mystery of mysteries.</td>
                <td class="arabic">سالومي شهدت: إن العذراء ولدت: آمنت وأعتقدت: بالسر المكنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_13">
            <tr id="table_20_row_15" class="refrain">
                <td class="english" >Your love embraced me: O pride of nations:
                    Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                    The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
                    Aaron's censer</td>
                <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
                ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_14">
            <tr id="table_20_row_16" class="north">
                <td class="english" >Solomon, your father, Praised in hymns
                    and songs And Jacob saw you An upright ladder</td>
                <td class="arabic">سليمان أباك: صار ينشد بفنون: ويعقوب رآك: سلم مرتفعون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_15">
            <tr id="table_20_row_17" class="north">
                <td class="english" >The chiefs had proclaimed O fruitful vine
                    You are a Virgin and a bride As they prophesied</td>
                <td class="arabic">شهد عنك الرؤساء: ياكرمة مغروسة: يابكرة وعروسة: كما عنك تنبأون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_16">
            <tr id="table_20_row_18" class="south">
                <td class="english" >Zephaniah proclaimed That Jesus will
                    appear As rain and dew While her Virginity is sealed</td>
                <td class="arabic">صوفونيوس خبر: بأن يسوع يظهر: شبه ندي ومطر: والختم حصن مصون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_17">
            <tr id="table_20_row_19" class="south">
                <td class="english" >Eve caused Adam to stray, In tears, he
                    cried Naked, he was exiled Without you they would not return</td>
                <td class="arabic">ضللت حواء آدم: وصار يبكى نادم: خرج عريان عادم: لولاك ما رجعون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_18">
            <tr id="table_20_row_20" class="north">
                <td class="english" >Your rank is up high And great is your
                    glory The Lord honored you O Aaron's censer</td>
                <td class="arabic">عال هو قدرك: وعظيم هو مجدك: والله شرف ذكرك: يا شورية هرون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_19">
            <tr id="table_20_row_21" class="north">
                <td class="english" >Many praised you You are the cause of all
                    joy You comfort everyone Who is sorrowful and humble</td>
                <td class="arabic">غلب فيك المداح: يا بدء الأفراح: بمديحك يرتاح: كل ذليل محزون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_20">
            <tr id="table_20_row_23" class="refrain">
                <td class="english" >Your love embraced me: O pride of nations:
                    Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                    The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O
                    Aaron's censer</td>
                <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
                ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_21">
            <tr id="table_20_row_24" class="south">
                <td class="english" >My heart rejoices in you O Virgin Mary
                    Ask your Son Jesus To protect me by His Might</td>
                <td class="arabic">فيك رضا قلبى: يامريم طلبى: يسوع إبنك حسبى: بقوته أكون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_22">
            <tr id="table_20_row_25" class="south">
                <td class="english" >Existent before the ages Suffered and was
                    crucified He rose from His sleep And the Disciples preached</td>
                <td class="arabic">قديم أذلي دائم: صلب عنا وتألم: استيقظ كالنائم: والتلاميذ يكرزون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_23">
            <tr id="table_20_row_26" class="north">
                <td class="english" >The righteous Apostles And the four
                    Evangelists Preached in all nations The tidings and rejoice</td>
                <td class="arabic">كرزوا في الأقطار: الرسل الأبرار: ونادوا باستبشار: الأباء الإنجيليون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_24">
            <tr id="table_20_row_27" class="north">
                <td class="english" >Glory is due to you O daughter of Joachim
                    You bore a great mystery And gave birth to the Most High</td>
                <td class="arabic">لك كل التعظيم: ياإبنة يواقيم: حملت سر عظيم: ووضعت المكنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_25">
            <tr id="table_20_row_28" class="south">
                <td class="english" >Moses and Daniel Said many parables And
                    you fit all that Mysteriously and more</td>
                <td class="arabic">موسي ودانيال: ضربوا عنك أمثال: وقبلت ماقال: بسر خفي مكنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_26">
            <tr id="table_20_row_29" class="south">
                <td class="english" >You caused the world to shine O the pride
                    of faith All the creatures were free Because of you Mary</td>
                <td class="arabic">نورت الأكوان: يافخر الإيمان: لولاك ماكان: كل الخلائق يعتقون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_27">
            <tr id="table_20_row_30" class="north">
                <td class="english" >Gifts were offered in faith To the King
                    of kings By the great Magi Myrrh, gold and frankincense</td>
                <td class="arabic">هدايا بإيمان: أتوا بهم الأعيان: مرا وذهباً ولبان: بها المجوس حاملون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_28">
            <tr id="table_20_row_31" class="north">
                <td class="english" >They worshipped the born King The Lord of
                    lords And Herod was terrified And his soldiers marveled</td>
                <td class="arabic">وسجدوا للمولود: الرب المعبود: وهيرودس صار مرعوب: وجنده محتارون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_29">
            <tr id="table_20_row_32" class="south">
                <td class="english" >Do not forsake at that time A poor and
                    humble sinner Your plead on Judgment Day And for all the Christians</td>
                <td class="arabic">لا تنسى في ذلك الحين: عبداً خاطئ مسكين: شفاعتك يوم الدين: لشعب ابنك أجمعين</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_30">
            <tr id="table_20_row_33" class="south">
                <td class="english" >We ask of Him forgiveness Faith and
                    repentance To be in calmness We the believers</td>
                <td class="arabic">ونسأل من جوده الغفران: وتوبة مع إيمان: لنصير في اطمئنان: نحن المؤمنون</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_20_tbody_31">
            <tr id="table_20_row_35" class="refrain">
                <td class="english" >Your love embraced me: O pride of nations: Moses has seen you: Surprise and marvel: And the lamps are bright: With golden crosses.<br> 
                The praise of the virgin: Increased my joy: Praising her always: Increased my bliss: Moses' dome, O Mary: O Aaron's censer</td>
                <td class="arabic">سباني حُبك: يافخرَ الرتب: موسى رآكِ: عجب من عجب: والقناديل فضة بتضوي: والصلبان ذهب. <br>
                ودا مدح البتول: زاد قلبى فرح: مدحها علطول: خلاه إنشرح: ياقبة موسى يامريم: ياشورية هرون</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table id="table_21" style="display: table;" title="Estermeji">
        <caption class="caption" id="caption_table_21">I Start This Song With Words of Peace
        <span class="arabic-caption">أنا أول كلامي أصيح السلام</span>
        </caption>

        <tbody ${tbodyClass}  id="table_21_tbody_0">
            <tr class="north" id="table_21_row_0">
                <td class="english" >I start this song with words of peace,
                    About a full moon and the greatest of dreams,
                    I wish it continues permanently,
                    About Virgin Mary who helps quickly,
                    I reveal and speak my mind openly.</td>
                <td class="arabic" >أنا أول كلامي أصيح السلام،
                    لفخر الآنام وبدر التمام،
                    أنا ألقي إهتمامي بطول الدوام،
                    علي البكر مريم وبها أستجير،
                    وأبيح وأتكلم بما في ضمير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_1">
            <tr class="north" id="table_21_row_1">
                <td class="english" >How can I speak and what can I say,
                    About the mystery of her virginity,
                    A great Virgin and her pregnancy,
                    It is impossible to explain and say,
                    Even the scholars could not find a way.</td>
                <td class="arabic" >بماذا أتكلم وبماذا أقول،
                    أكِل ولا أعلم بسِر البتول،
                    حبل مرتمريم يفوق العقول،
                    وشرحه عجيباً علينا عسير،
                    ومَنْ كان لبيباً نطق باليسير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_3">
            <tr class="south" id="table_21_row_3">
                <td class="english" >Ezekiel the prophet spoke about her,
                    He gave his peace and said about her,
                    Jesus the king will come to her,
                    He is her Lord and the Creator,
                    He loved her before He made her.</td>
                <td class="arabic" >تنبأ عليها النبي حزقيال،
                    وأهدأ إليها سلامُه وقال،
                    يأتي إليها يسوع ذو الجلال،
                    وهو ربها العزيز القدير،
                    الذي أحبها من قبل أن تصير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_4">
            <tr class="south" id="table_21_row_4">
                <td class="english" >All the arts and all the wonders,
                    Even the sayings of the scholars,
                    Her virginity we should not ponder,
                    Our Almighty Lord is the real Wonder,
                    Who Came to her womb as a Child to her.</td>
                <td class="arabic" >جميع الغرائب وكل الفنون،
                    عقول اللبايب بها لم يدركون،
                    يا أهل العجايب لا تتعجبون،
                    ما هو العجب أن رباً قدير،
                    في البطن أنتجب مثل طفل صغير.</td>
            </tr>
        </tbody>
 
        <tbody ${tbodyClass}  id="table_21_tbody_6">
            <tr class="north" id="table_21_row_6">
                <td class="english" >By His will He suffered and was crucified,
                    He rose from the dead after He died,
                    The Son of Man raised men who died,
                    From the depth of Hades to the Paradise,
                    They returned to the Paradise of light.</td>
                <td class="arabic" >حينئذ لما صُلِب واُنتهر،
                    مات بالإرادة وقام بالسحر،
                    فمن أجل هذا يا بني البشر،
                    تعلُّوا ورُفِعوا من عمق بير،
                    جُهنم فرجعوا إلي فردوس مُنير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_7">
            <tr class="north" id="table_21_row_7">
                <td class="english" >The salvation of the creation appeared from,
                    The pure and chosen Virgin, Mount Zion,
                    Her pregnancy is a mysterious one,
                    To my heart and to my conscience,
                    But nothing is impossible for God the One.</td>
                <td class="arabic" >خلاص البَرِيَة ظهر من قِبَل،
                    بتول مُصطفية التي هي جبل،
                    صهيون النقية وسر الحبل،
                    على فكر قلبي وفاق الضمير،
                    وليس عند ربي أمر عسير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_9">
            <tr class="south" id="table_21_row_9">
                <td class="english" >Moses the prophet spoke a great saying,
                    With an old prophecy that was amazing,
                    He said that God will truly bring,
                    A great Prophet with no equal being,
                    Who created the end and the beginning.</td>
                <td class="arabic" >دعيت صديقة وموسى الكليم،
                    نطق في العتيقة بأمر عظيم،
                    وقال "بالحقيقة أن الله يُقيم،
                    إليكم نبياً كمثلي نذير،
                    خلقكم بدياً وإليه المسير."</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_10">
            <tr class="south" id="table_21_row_10">
                <td class="english" >He saw you in a burning bush with flames,
                    He became amazed and was marveled,
                    Many explained what this means,
                    This is a known symbol of Mary,
                    As John the Evangelist preached and said.</td>
                <td class="arabic" >رآكِ عَوْسج أخضر وفيه نار تقيد،
                    فصار في تحير وعجب شديد،
                    وجاء البعض فسر ما هو عتيد،
                    وقال إن هذا لمريم شهير،
                    وأكرز ونادى يوحنا البشير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_12">
            <tr class="north" id="table_21_row_12">
                <td class="english" >All my life I glorified,
                    And I could not hold back my voice,
                    Concerning the mystery of Christ´s Mother,
                    I was trusted to evangelize,
                    Regardless of any circumstances.</td>
                <td class="arabic" >زماني جميعه وأنا في المديح،
                    ولم أستطيع لكني أبيح،
                    بسري جميعه لأم المسيح،
                    وأكون المُبشِّر بها والنذير،
                    مهما تيسر قليل من كثير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_13">
            <tr class="north" id="table_21_row_13">
                <td class="english" >Solomon spoke of you in the Song of Songs,
                    “Welcome my sister, to you I long,
                    The aroma of your clothes is sweet,"
                    Truly John the Evangelist spoke,
                    About the Virgin Mary in many words.</td>
                <td class="arabic" >سليمان أجابك يقول في النشيد،
                    "أختي مرحباً بكِ وأنا لكِ أريد،
                    روايح ثيابِك كعنبر يقيد،"
                    حقاً قد تكلم يوحنا البشير،
                    على البكر مريم كلاماً كثير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_15">
            <tr class="south" id="table_21_row_15">
                <td class="english" >He testified saying "I saw a lady,
                    Clothed in garments full of light,
                    Surrounded by the sun and the moon under her feet,
                    And around her head twelve stars shine,
                    Then being with a Child, she cried out in labor."</td>
                <td class="arabic" >شهد وقال "أمس رأيت إمراة،
                    بهية بلُباس بهي في ضياء،
                    مشتملة بشمس وقمر حداه،
                    وأثنى عشر نجم عليها تنير،
                    وحَبَلت ووضعت غلاماً صغير."</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_16">
            <tr class="south" id="table_21_row_16">
                <td class="english" >There is no doubt that this is true,
                    The moon is no one but John the Baptist,
                    And the twelve stars are the twelve Apostles,
                    And surely the Sun is the Child Jesus,
                    This a simple act for the mighty Lord.</td>
                <td class="arabic" >صحيح إن هذا الكلام المقول،
                    أما القمر فهو يوحنا البتول،
                    والإثنى عشر نجم هم الإثنى عشر رسول،
                    الشمس المحيطة هو الإبن الصغير،
                    دي قدرة بسيطة ورباً قدير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_18">
            <tr class="north" id="table_21_row_18">
                <td class="english" >My heart and mind are attached to you,
                    I have never seen anyone like you,
                    I always confess and do not deny,
                    You are my fortress and my refuge,
                    A wall, a barrier and a stronghold.</td>
                <td class="arabic" >ضميري وفكري تعلق بكِ،
                    وطول عمري لم أري مثلكِ،
                    لكني لعمري أقول إنكِ،
                    كمثل صور حائط وحصناً كبير،
                    حائط وحاجز وحصناً حصين.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_19">
            <tr class="north" id="table_21_row_19">
                <td class="english" >We asked and we were given to be,
                    Led and guided to enlightenment,
                    For we believed with all understanding,
                    And became obedient and carried the yoke,
                    Of Jesus the Mighty One to His people.</td>
                <td class="arabic" >طلبنا وجدنا بلوغ المُراد،
                    هدينا وصرنا لبر الرشاد،
                    لأننا آمنا بكل إعتقال،
                    وصرنا أهل طاعة ونحمل لنير،
                    يسوع بإستطاعه وشعباً منير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_21">
            <tr class="south" id="table_21_row_21">
                <td class="english" >The Logos appeared from you in a great
                    mystery,
                    An honorable divinity and humanity,
                    And you became like the Ark of the Covenant,
                    That was made with wood that would not decay,
                    And covered with gold and clothed in silk.</td>
                <td class="arabic" >ظهر منكِ الكلمة وسِرّ عظيم،
                    ولاهوت وناسوت وجوهر كريم،
                    وصرتِ كتابوت العهد القديم،
                    الذي من خشب لا يسوس الكبير،
                    المطلي بالذهب المكسي بالحرير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_22">
            <tr class="south" id="table_21_row_22">
                <td class="english" >You were exalted to God´s heaven,
                    You were raised to be a heaven,
                    Truly you surpassed all the ranks,
                    You became a lampstand with a great light,
                    Your praise is greatly valuable.</td>
                <td class="arabic" >عليتِ وصرتِ في سماء الإله،
                    وقد إرتفعتِ لأنكِ سماه،
                    والحق فقتِ جميع أصفياه،
                    وصرتِ منارة وضوءكِ منير،
                    ومدحِك تجارة وربحه كثير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_24">
            <tr class="north" id="table_21_row_24">
                <td class="english" >Your Son is the One who created you,
                    You carried Him in your hands as a babe,
                    You mourned at His passion that He tasted,
                    There is no other King glorified like Him, He created everything with His own hands.</td>
                <td class="arabic" >غلاماً وضعتِ وهو إللي أنشاك،
                    وطفلاً حملت حلَّ بين يداك،
                    تألم حزنتي كعاجز وذاك،
                    له الملك وحده ولا له نظير،
                    الكل بيده الغني والفقير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_25">
            <tr class="north" id="table_21_row_25">
                <td class="english" >And if my ink was like the Euphrates,
                    And my paper like a great valley,
                    And my pen like a field of many plants,
                    I will continue in this praise for a long time,
                    I am incapable of completing my task.</td>
                <td class="arabic" >فلَوْ كان مدادي كنيل الفُرات،
                    وأوراقي كوادي عظيم الصفات،
                    وأقلامي تحاكي جميع النبات،
                    وأمكُث لهذا زماناً كبير،
                    من الرمل ماذا يشيل البعير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_27">
            <tr class="south" id="table_21_row_27">
                <td class="english" >The Eternal, the Mighty and Unchangeable,
                    Descended from heaven to the Virgin´s womb
                    His miracles were beyond understanding,
                    The thoughts of men were known to Him,
                    He healed the paralytic who carried his bed</td>
                <td class="arabic" >قديماً بذاته قوي لا يحول،
                    نزل من سماءه لبطن البتول،
                    وكانت آياته تفوق العقول،
                    بعلمه تطلع وعِرف الضمير،
                    وأبرأ المخلع وحمل السرير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_28">
            <tr class="south" id="table_21_row_28">
                <td class="english" >Many are the wonders of Jesus Christ,
                    The mind of scholars cannot understand,
                    He accepted the sinners and raised the dead,
                    He healed the sick and the paralytic,
                    And from the naked one He cast out devils.</td>
                <td class="arabic" >كثيرة عجائب يسوع المسيح،
                    عقول اللبايب بها لم تبيح،
                    قبل كل تايب وأقام السطيح،
                    وأشفى السقيم وأبرأ الكسيح،
                    وأبرأ المعتري من الروح الشرير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_30">
            <tr class="north" id="table_21_row_30">
                <td class="english" >I gave my life to describing you,
                    I took the harsh roads toward this ending,
                    So that I may describe and I alone,
                    But I do not have the energy,
                    I took this road without a guide.</td>
                <td class="arabic" >لعمري مثالِك ووصفِك بعيد،
                    وطول المَسالِك لنحوه شديد،
                    وكَوني أصف ذلك وكَوني وحيد،
                    ولا لحملي طاقة لجد المسير،
                    قطعت المسافة ولا لي خبير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_31">
            <tr class="north" id="table_21_row_31">
                <td class="english" >Mary you are called the highest heaven,
                    This you were called, and your name is sweet,
                    And my speech cannot describe you,
                    Even from my first days to the last,
                    My tongue is incapable and my time is short.</td>
                <td class="arabic" >مريم أنت سموت سماء العلوْ،
                    بهذا دعيتي وإسمك حلوْ،
                    ويعجز حديثي عن وصفِك ولوْ،
                    من أول زماني لليوم الأخير،
                    ويعجز لساني ودهري قصير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_33">
            <tr class="south" id="table_21_row_33">
                <td class="english" >I went into the sea of knowledge,
                    I found it a difficult journey,
                    I cannot dive and I could not swim,
                    I did not have a ship to cross the sea,
                    So that I may reach the harbor of peace.</td>
                <td class="arabic" >نزولي براحه لبحر العلوم،
                    وجدته إباحة عظيم الرسوم،
                    ولا أقدر سباحة ولا أعرف أعوم،
                    ولا لي سفينة تجوز الغزير،
                    كي أصل لمينا السلام وأصير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_34">
            <tr class="south" id="table_21_row_34">
                <td class="english" >The true God was crucified on the Cross,
                    And truly endured the oppression of the Jews,
                    What great a sacrifice despite denial,
                    How great an injustice that was not realized,
                    They gave Him gall, vinegar, and wine.</td>
                <td class="arabic" >ها الإله الحقيقي صُلب فوق عود،
                    واحتمل بالحقيقة إفتراء اليهود،
                    يا لهذه الجسارة يا لهذا الجحود،
                    يا لهذه الخطية ليس لها نظير،
                    سقوه المرارة خلاً وخمير.الشرير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_36">
            <tr class="north" id="table_21_row_36">
                <td class="english" >He fulfilled His eternal promise,
                    He took our likeness and became Man,
                    And in everything He resembled us except sin,
                    In order that we may not be deceived,
                    By the craftiness of the cunning devil.</td>
                <td class="arabic" >وعدنا بدياً كَمل وعدنا،
                    نزل مختفياً لبس مثلنا،
                    وفيه كل شئ تشبه بنا،
                    ما خلا الخطية لئلا نصير،
                    بهذه القضية للشيطان المكير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_37">
            <tr class="north" id="table_21_row_37">
                <td class="english" >He came to us a humble Man,
                    And Judas His disciple betrayed Him,
                    He willingly submitted to the sufferings,
                    He rose, ascended and crushed the gates,
                    of Hades and released Adam from bondage.</td>
                <td class="arabic" >لأنه تقدم جانا بإتضاع،
                    والتلميذ يهوذا أسلمه وباع،
                    قَبَل التألم بغير إمتناع،
                    قام وصعد وحطم متاريس الجحيم،
                    وأخرج آدم من الزمهرير.</td>
            </tr>
        </tbody>

        <tbody ${tbodyClass}  id="table_21_tbody_39">
            <tr class="south" id="table_21_row_39">
                <td class="english" >Indescribable is the Mother of God,
                    She is capable of interceding to Him,
                    O our advocate on Judgment Day,
                    Abou El-Saad your servant is unworthy,
                    Waiting for your promise to be my helper.</td>
                <td class="arabic" >يفوق الطبيعة وصف أم الإله،
                    وهي مستطيعة الشفاعة حداه،
                    أيتها الشفيعة في يوم اللقاء،
                    أبو السعد عبدِك ذليل وحقير،
                    منتظر لوعدِك كوني لي نصير.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_21_tbody_40">
            <tr class="south" id="table_21_row_40">
                <td class="english" >Hail to you, our duty is to praise you,
                    All people and ranks offer you praise,
                    With every father asking on our behalf,
                    The Patriarch, bishops and priests,
                    And all the laymen elders and young.</td>
                <td class="arabic" >السلام لكِ وواجب علينا السلام،
                    من أهل المراتب كبار المقام،
                    وكل أب طالب لنا بالدوام،
                    بطريك وأسقف وكاهن مشير،
                    والشعب جميعه كبير مع صغير.</td>
            </tr>
        </tbody>


    </table>
    <br>
    <table id="table_22" style="display: table;" title="Rashi Ne (Archangel Michael)">
        <caption class="caption" id="caption_table_22">Rejoice O You (Archangel Michael)
        <span class="coptic-caption">Ⲣⲁϣⲓ Ⲛⲁⲕ Ⲱ Ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ (Ⲙⲓⲭⲁⲏⲗ)</span>
        <span class="arabic-caption">الفرح لك يا (ميخائيل رئيس الملائكة)</span>
        </caption>

        <tbody ${tbodyClass}  id="table_22_tbody_0">
            <tr class="refrain" id="table_22_row_0">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_1">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_1">
            <tr class="refrain" id="table_22_row_2">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_3">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_2">
            <tr class="north" id="table_22_row_4">
                <td class="english" >Rejoice O daughter of Zion, we rejoice, O
                    mother
                    of the King.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ⲧ̀ϣⲉⲣⲓ ⲛ̀Ⲥⲓⲱⲛ : ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲁⲩ ⲑ̀ⲙⲁⲩ
                    ⲙ̀ⲡ̀ⲟⲩⲣⲟ.</td>
                <td class="arabic">الفرح لك يا إبنة صهيون تهللى يا أم الملك.</td>
            </tr>
            <tr class="south" id="table_22_row_5">
                <td class="enPhonics" >Rashe ne o-et-sheri en-sion: theleel em-mav
                    ethmav em-eporo.</td>
                <td class="arPhonics" >راشى نى أو إتشيرى إنسيون ثيليل إمماف إثماف
                    إم
                    إبؤورو.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_3">
            <tr class="refrain" id="table_22_row_6">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_7">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_4">
            <tr class="refrain" id="table_22_row_8">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_9">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_5">
            <tr class="north" id="table_22_row_10">
                <td class="english" >Rejoice to God, our helper, rejoice to the
                    God of
                    Jacob.</td>
                <td class="coptic" >Ⲑⲉⲗⲏⲗ ⲙ̀Ⲫⲛⲟⲩϯ ⲙ̀ⲡⲉⲛⲃⲟⲏⲑⲟⲥ : ϯⲗⲉⲗⲟⲓ ⲙ̀Ⲫⲛⲟⲩϯ
                    ⲛ̀Ⲓⲁⲕⲱⲃ.</td>
                <td class="arabic">إبتهجوا بالله معيننا هللوا لإله يعقوب.</td>
            </tr>
            <tr class="south" id="table_22_row_11">
                <td class="enPhonics" >Theleel em-evnoti em-pen voeethos:
                    tee-le-loi
                    em-evnoti en-Iakob.</td>
                <td class="arPhonics" >ثيليل إم إفنوتى إم بين فو إى ثوس تى لا لوى
                    إم
                    إفنوتى إن ياكوب.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_6">
            <tr class="refrain" id="table_22_row_12">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_13">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_7">
            <tr class="refrain" id="table_22_row_14">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_15">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_8">
            <tr class="north" id="table_22_row_16">
                <td class="english" >So let Jacob rejoice, and also let Israel
                    rejoice.</td>
                <td class="coptic" >Ϥ̀ⲛⲁⲑⲉⲗⲏⲗ ⲛ̀ϫⲉ Ⲓⲁⲕⲱⲃ : ϥ̀ⲛⲁⲟⲩⲛⲟϥ ⲛ̀ϫⲉ
                    Ⲡⲓⲥ̀ⲣⲁⲏⲗ.
                </td>
                <td class="arabic">فيتهلل يعقوب. ويفرح إسرائيل.</td>
            </tr>
            <tr class="south" id="table_22_row_17">
                <td class="enPhonics" >Efna-theleel enje Iakob: efna-ounof enje Pi
                    Esra-eel.</td>
                <td class="arPhonics" >إفنا ثيليل إنجى ياكوب إفنا إونوف إنجيه بى
                    إسرائيل.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_9">
            <tr class="refrain" id="table_22_row_18">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_19">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_10">
            <tr class="refrain" id="table_22_row_20">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_21">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_11">
            <tr class="north" id="table_22_row_22">
                <td class="english" >We rejoice forever, indeed, and also we
                    implore.
                </td>
                <td class="coptic" >Ⲥⲉⲛⲁ ⲑⲉⲗⲏⲗ ϣⲁ ⲛⲓⲉ̀ⲛⲉϩ : ⲛ̀ⲥⲉⲟⲩⲱⲛϩ ⲛ̀ⲟⲩϩⲉⲗⲡⲓⲥ.
                </td>
                <td class="arabic">نتهلل إلى الأبد نعم ونترجى.</td>
            </tr>
            <tr class="south" id="table_22_row_23">
                <td class="enPhonics" >Sena theleel sha ni-eneh: ense-ouonh
                    eno-helpees.</td>
                <td class="arPhonics" >سينا ثيليل شا نى إينيه إن سى أو أونه إن أو
                    هيلبيس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_12">
            <tr class="refrain" id="table_22_row_24">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_25">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_13">
            <tr class="refrain" id="table_22_row_26">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_27">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_14">
            <tr class="north" id="table_22_row_28">
                <td class="english" >Rejoice O you vine, that is ripe and
                    blossoming.
                </td>
                <td class="coptic" >Ⲫⲁⲑⲉⲗⲏⲗ ⲥⲱⲧⲧⲉⲛ ⲉ̀ⲗⲟⲗ : ϩⲓⲧⲉⲛ ⲛⲟⲧⲉⲛ
                    ⲙ̀ⲡⲉⲣⲕⲟⲧⲧⲉⲛ.
                </td>
                <td class="arabic">تهللى أيتها الكرمة الدسمة المثمرة.</td>
            </tr>
            <tr class="south" id="table_22_row_29">
                <td class="enPhonics" >Fa-theleel sotten elol: hee-ten noten
                    em-perkotten.</td>
                <td class="arPhonics" >فا ثيليل سوتين إى لول هيتين نوتين إم
                    بيركوتين.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_15">
            <tr class="refrain" id="table_22_row_30">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_31">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_16">
            <tr class="refrain" id="table_22_row_32">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_33">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_17">
            <tr class="north" id="table_22_row_34">
                <td class="english" >My heart rejoices, for this my tongue also
                    praises.</td>
                <td class="coptic" >Ⲁⲡⲁϩⲏⲧ ⲉ̀ⲟⲩⲫ̀ⲣⲁⲛⲉ : ⲉⲑⲃⲉ ⲡⲁⲗⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ.
                </td>
                <td class="arabic">قلبى يفرح من اجل لسانى بتهليل.</td>
            </tr>
            <tr class="south" id="table_22_row_35">
                <td class="enPhonics" >Apaheet e-ou-efrane: ethve palas khen
                    o-theleel.</td>
                <td class="arPhonics" >ابا هيت إيه أو فرانى إثفيه بالاس خين أو
                    ثيليل.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_18">
            <tr class="refrain" id="table_22_row_36">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_37">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_19">
            <tr class="refrain" id="table_22_row_38">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_39">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_20">
            <tr class="north" id="table_22_row_40">
                <td class="english" >The dew and the rain, and the rejoicing are
                    due
                    to your name.</td>
                <td class="coptic" >Ⲑⲁϥⲟⲣⲙⲉⲛ ϩⲟⲣⲙⲟⲛⲁ : ⲛⲉⲙ ⲛⲉⲑⲉⲗⲏⲗ ϩⲁⲙ̀ⲡⲉⲕⲣⲁⲛ.
                </td>
                <td class="arabic">الندى والمطر مدلاة على اسمك.</td>
            </tr>
            <tr class="south" id="table_22_row_41">
                <td class="enPhonics" >Thaformen hormona: nem ne-theleel
                    ha-empekran.
                </td>
                <td class="arPhonics" >ثاف أورمين هورمونا نيم نيه ثيليل ها إمبيك
                    ران.
                </td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_21">
            <tr class="refrain" id="table_22_row_42">
                <td class="english" >Rejoice O you Theotokos, Mary the mother of
                    Jesus
                    Christ:</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲉ ⲱ̀ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : Ⲙⲁⲣⲓⲁ̀ ⲑ̀ⲙⲁⲩ ⲛ̀Ⲓⲏⲥⲟⲩⲥ
                    Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.</td>
                <td class="arabic">الفرح لك يا والدة الإله مريم أم يسوع المسيح.</td>
            </tr>
            <tr class="south" id="table_22_row_43">
                <td class="enPhonics" >Rashe ne o-tee-theotokos: Maria ethmav
                    en-Isos
                    Piekhiristos.</td>
                <td class="arPhonics" >راشى نى أوتى ثيئوطوكوس ماريا إثماف إن إيسوس
                    بى
                    إخرستوس.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_22_tbody_22">
            <tr class="refrain" id="table_22_row_44">
                <td class="english" >Rejoice O you archangel: Michael the head of
                    the
                    heavenly.</td>
                <td class="coptic" >Ⲣⲁϣⲓ ⲛⲁⲕ ⲱ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ: Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ
                    ⲛ̀ⲛⲁⲛⲓⲫⲏⲟⲩⲓ.</td>
                <td class="arabic">الفرح لك يا رئيس الملائكة ميخائيل رئيس السمائين.</td>
            </tr>
            <tr class="south" id="table_22_row_45">
                <td class="enPhonics" >Rashi nak o pi-arshi-angelos: Mikhail
                    ep-arkhon
                    enna nifiowi.</td>
            </tr>
        </tbody>

    </table>
    <br>
    <table id="table_24" style="display: table;" title="Apekran">
        <caption class="caption" id="caption_table_24">Your Name Is So Great
        <span class="coptic-caption">Ⲁ̀ⲡⲉⲕⲣⲁⲛ</span>
        <span class="arabic-caption">إسمك عظيم</span>
        </caption>

        <tbody ${tbodyClass}  id="table_24_tbody_0">
            <tr class="north" id="table_24_row_0">
                <td class="english" >Your name is so great in the land of Egypt, O
                    blessed saint, who is honored among all saints, the pure father, Abba (…).</td>
                <td class="coptic" >Ⲁ̀ⲡⲉⲕⲣⲁⲛ ⲉⲣⲛⲓϣϯ ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀Ⲭⲏⲙⲓ ⲱ̀ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ
                    ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ϧⲉⲛ ⲛⲓⲁ̀ⲅⲓⲟⲥ ⲧⲏⲣⲟⲩ ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ (̅ⲛ̅ⲓ̅ⲙ).</td>
                <td class="arabic">إسمك عظيم في مصر أيها الطوباوي القديس المكرم في جميع القديسين أبونا الطاهر (...)</td>
            </tr>
            <tr class="south" id="table_24_row_1">
                <td class="enPhonics" >Apekran ernishti khen etkhora enKimi
                    o-pimakarios piagios ettayout khen niagios teerou peniot ethowab Abba (…)</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_24_tbody_1">
            <tr class="north" id="table_24_row_2">
                <td class="english" >Hail to your tomb full of blessing, hail to
                    your
                    blessed body which gives cure to all sicknesses.</td>
                <td class="coptic" >Ⲭⲉⲣⲉ ⲡⲉⲕⲙ̀ϩⲁⲩ ⲉⲑⲙⲉϩ ⲛ̀ⲭⲁⲣⲓⲥⲙⲁ: ⲭⲉⲣⲉ ⲡⲉⲕⲥⲱⲙⲁ
                    ⲉⲑⲟⲩⲁⲃ
                    ⲫⲏⲉⲧⲁϥⲃⲉⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲛ̀ϫⲉ ⲟⲩⲧⲁⲗϭⲟ ⲛ̀ϣⲱⲛⲓ ⲛⲓⲃⲉⲛ.</td>
                <td class="arabic">السلام لقبرك الممتلئ نعمة. السلام لجسدك المقدس الذي نبع لنا منه شفاء لكل الأمراض.
                </td>
            </tr>
            <tr class="south" id="table_24_row_3">
                <td class="enPhonics" >Shere pekemhav ethmeh enkharisma: shere
                    peksoma
                    ethowab: fee-etaf vevee nan evol enkheetf enje outaletcho enshoni niven.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_24_tbody_2">
            <tr class="north" id="table_24_row_4">
                <td class="english" >Pray to Christ Emmanuel, may He forgive us
                    our
                    sins. I, the poor, lowly, servant.</td>
                <td class="coptic" >Ⲙⲁϯϩⲟ ⲉ̀Ⲡ̅ⲭ̅ⲥ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ̀
                    ⲛⲁⲛ
                    ⲉ̀ⲃⲟⲗ: ⲁⲛⲟⲕ ⲡⲓϩⲏⲕⲓ ⲡⲉⲕⲃⲱⲕ ⲡⲓⲁⲗⲁⲭⲏⲥⲧⲟⲥ.</td>
                <td class="arabic">أسأل المسيح عمانوئيل لكي يغفر لنا خطايانا نحن المساكين الحقيرين.</td>
            </tr>
            <tr class="south" id="table_24_row_5">
                <td class="enPhonics" >Mateeho e-Piekhristos Emmanoueel hina
                    entefka
                    nennovi nan evol: anok piheeki pekvok pi-elashistos.</td>
            </tr>
        </tbody>
        <tbody ${tbodyClass}  id="table_24_tbody_3">
            <tr class="north" id="table_24_row_6">
                <td class="english" >Truly, your gracious commemoration has
                    touched my
                    heart, O Saint Abba (…).</td>
                <td class="coptic" >Ⲁⲗⲏⲑⲟⲥ ⲅⲁⲣ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲁϥⲕⲓⲙ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ⲡⲁϩⲏⲧ
                    ⲛ̀ϫⲉ
                    ⲡⲉⲕⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲱ̀ⲡⲓⲁⲅⲓⲟⲥ Ⲁⲃⲃⲁ (̅ⲛ̅ⲓ̅ⲙ).</td>
                <td class="arabic">لأنه حقا بالحقيقة حرك قلبي تذكارك الجليل أيها القديس أنبا (...)</td>
            </tr>
            <tr class="south" id="table_24_row_7">
                <td class="enPhonics" >Alithos ghar khen oumethmi afkim e-ekhree
                    epaheet enje pekerefmevi ettayout o-piagos Avva (…)</td>
            </tr>
        </tbody>

    </table>
    <br>
</div>
</body>
`;

return html
}

export {glorification};