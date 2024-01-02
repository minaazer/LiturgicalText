import { htmlRenderScript } from "../components/functions/jsScripts";
const cross = '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/cross.png" alt="+" style="width: 2vw; height: auto; filter: sepia(100%) saturate(500%) ">';
const arrowUp = '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/arrowUp.png" alt="arrow up" style="width: 2vw; height: auto; padding-bottom:1vw; filter: sepia(100%) saturate(500%) ">';
const skip = '<img src="https://cdn.jsdelivr.net/gh/minaazer/LiturgicalBooks@main/skip.png" alt="arrow up" style="width: 8vw; height: auto; padding-top:1vw; filter: sepia(100%) saturate(300%) ">';

export const getHtml = (dynamicStyles) => `
<html>
<head>
<title>Kiahk</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<style>
${dynamicStyles}
</style>
<script type="text/javascript">
${htmlRenderScript}
</script>
</head>


<body>
<table id="table_0" title="Amen, Amen, come" arTitle="آمين تعال" english="true" arabic="true">
<tr id="table_0_row_0" class="north">
    <td class="english">
        Amen, Amen, come / My faithful Lord, Jesus Christ!<br />
        Amen, Amen, come / Our hearts are yearning for the flight!
    </td>
    <td class="arabic">
        آمين تعال، أيها الرب يسوع.<br />
        آمين تعال، قلوبنا إشتاقت للرجوع.
    </td>
</tr>
<tr id="table_0_row_1" class="refrain">
    <td class="english">
        (We´re waiting for you / As you have promised) x2 <br />
        (Surely I come quickly Amen!) x2
    </td>
    <td class="arabic">
        (منتظرينك .. بحسب وعودك.) x2 </br>
        (قلت سآتي سريعا آمين.) x2
    </td>
</tr>
<tr id="table_0_row_2" class="north">
    <td class="english">
        We see Thy glory / In the delightful clouds, <br />
        You've made us like you, / In a quick twinkle of an eye.
    </td>
    <td class="arabic">
        نراك بمجدك، على السحاب المنير.<br />
        تجعلنا مثلك، وفي طرفة عين إليك نطير.
    </td>
</tr>
<tr id="table_0_row_3" class="refrain">
    <td class="english">
        (We´re waiting for you / As you have promised) x2 <br />
        (Surely I come quickly Amen!) x2
    </td>
    <td class="arabic">
        (منتظرينك .. بحسب وعودك.) x2 </br>
        (قلت سآتي سريعا آمين.) x2
    </td>
</tr>
<tr id="table_0_row_4" class="north">
    <td class="english">
        The sight would cheer us, / We see Thy wounds and thy scars; <br />
        As You draw near us, / Signs of Your love fill our eyes.
    </td>
    <td class="arabic">
        نفرح بقربك، ونشوف آثار الجروح. <br />
        علامة حبك، لنا يا حبيب الروح.
    </td>
</tr>
<tr id="table_0_row_5" class="refrain">
    <td class="english">
        (We´re waiting for you / As you have promised) x2 <br />
        (Surely I come quickly Amen!) x2
    </td>
    <td class="arabic">
        (منتظرينك .. بحسب وعودك.) x2 </br>
        (قلت سآتي سريعا آمين.) x2

    </td>
</tr>
<tr id="table_0_row_6" class="north">
    <td class="english">
        Around our Groom there / We rejoice and be glad, <br />
        With the redeemed church, / The greatest love and joy ever.
    </td>
    <td class="arabic">
        نسعد بشخصك، ونكون معك في كل حين. <br />
        يجمعنا عرسك، مع جماعة المفديين.
    </td>
</tr>
<tr id="table_0_row_7" class="refrain">
    <td class="english">
        (We´re waiting for you / As you have promised) x2 <br />
        (Surely I come quickly Amen!) x2
    </td>
    <td class="arabic">
        (منتظرينك .. بحسب وعودك.) x2 </br>
        (قلت سآتي سريعا آمين.) x2
    </td>
</tr>
<tr id="table_0_row_8" class="north">
    <td class="english">
        No more sorrow, / No more pain, nor tears, <br />
        The Lord our comfort, / Our hearts and souls He cheers,
    </td>
    <td class="arabic">
        ننسى أتعابنا، ولا يكون هناك آنين. <br />
        حوالين عريسنا، دوم ا نكون فرحانين.
    </td>
</tr>
<tr id="table_0_row_9" class="refrain">
    <td class="english">
        (We´re waiting for you / As you have promised) x2 <br />
        (Surely I come quickly Amen!) x2
    </td>

    <td class="arabic">
        (منتظرينك .. بحسب وعودك.) x2 </br>
        (قلت سآتي سريعا آمين.) x2
    </td>
</tr>
<tr id="table_0_row_10" class="north">
    <td class="english">
        There shall be no night, / No candle needed nor a sun, <br />
        Our Lord and Savior / Gives us Himself, the True Light.
    </td>
    <td class="arabic">
        أشواق قلوبنا، نلقاها ونشوفك بالعين. <br />
        يا فادي نفوسنا، يا حلو يا طيب يا أمين.
    </td>
</tr>
</table>

<table id="table_1" title="Be faithful unto death" arTitle="كن أمينا إلى الموت" english="true">
<tr id="table_1_row_0" class="north">
    <td class="english">
        He who overcomes shall eat, from the tree of life <br />
        The tree, in the midst of the Lord´s paradise (x2)
    </td>
    <td class="arabic">
        من يغلب سيأكل / من شجرة الحياة <br />
        شجرة قائمة / في وسط فردوس الله
    </td>
</tr>
<tr id="table_1_row_1" class="refrain">
    <td class="english">
        Be faithful unto death, and I will give you the crown of life (x2)
        Soon I come, soon I come, soon I come as the thief!
        And I will give him who thirsts from the water of life
    </td>
    <td class="arabic">
    كن أمينا إلى الموت / فأعطيك إكليل الحياة (x2)
    ها أنا آتي سريعا / ها أنا آتي كلص
    ها أنا أعطي العطشان / من ينبوع ماء الحياة
    </td>
</tr>
<tr id="table_1_row_2" class="north">
    <td class="english">
        He who overcomes and keeps / my words till the end <br />
        I will give power to rule / nations with an iron rod (x2)
    </td>
    <td class="arabic">
    من يغلب و يحفظ / للنهاية أعمالي <br />
    سلطانا سأعطيه / ليملك كل مالي
    </td>
</tr>
<tr id="table_1_row_3" class="refrain">
    <td class="english">
        Be faithful unto death, and I will give you the crown of life (x2)
        Soon I come, soon I come, soon I come as the thief!
        And I will give him who thirsts from the water of life
    </td>
    <td class="arabic">
    كن أمينا إلى الموت / فأعطيك إكليل الحياة (x2)
    ها أنا آتي سريعا / ها أنا آتي كلص
    ها أنا أعطي العطشان / من ينبوع ماء الحياة
    </td>
</tr>
<tr id="table_1_row_4" class="north">
    <td class="english">
        He who overcomes shall not / be hurt by the second death <br />
        His name, his name, / before my Father I confess (x2)
    </td>
    <td class="arabic">
    من يغلب اعترف / به قدام أبي <br />
    من يغلب فلا يؤذيه / ذاك الموت الثاني
    </td>
</tr>
<tr id="table_1_row_5" class="refrain">
    <td class="english">
        Be faithful unto death, and I will give you the crown of life (x2)
        Soon I come, soon I come, soon I come as the thief!
        And I will give him who thirsts from the water of life
        </td>
    <td class="arabic">
    كن أمينا إلى الموت / فأعطيك إكليل الحياة (x2)
    ها أنا آتي سريعا / ها أنا آتي كلص
    ها أنا أعطي العطشان / من ينبوع ماء الحياة
    </td>
</tr>
<tr id="table_1_row_6" class="north">
    <td class="english">
        He who overcomes I will write on him my new name <br />
        He who overcomes shall sit with me on my throne (x2)
    </td>
    <td class="arabic">
        من يغلب فطوباه / سيدعى للعشاء <br />
        يوم عرس الخروف / يوم مجد في السماء
    </td>

</table>


        </body>
</html>
`;  