import { nighttimeLitanies, evnotiNaiNan, endOfServiceHymn } from "../repeatedPrayers";

export const NighttimeLitanies = () => {
    const nighttimeLitaniesHtml = nighttimeLitanies("1");
    const evnotiNaiNanHtml = evnotiNaiNan("2");
    const endOfServiceHymnHtml = endOfServiceHymn("3");



return `
<div class="section" id="section_1" title="Nighttime Litanies">

${nighttimeLitaniesHtml}
${evnotiNaiNanHtml}
${endOfServiceHymnHtml}
</div>
`;
}

