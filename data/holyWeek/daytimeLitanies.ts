import { daytimeLitanies, evnotiNaiNan, endOfServiceHymn } from "../repeatedPrayers";

export const DaytimeLitanies = () => {
    const daytimeLitaniesHtml = daytimeLitanies("1",true);
    const evnotiNaiNanHtml = evnotiNaiNan("2");
    const endOfServiceHymnHtml = endOfServiceHymn("3");



return `
<div class="section" id="section_1" title="Daytime Litanies">

${daytimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>
`;
}

