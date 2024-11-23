import { songFunctionNames , getSongHtml} from './songTexts';

export const nayroozSongs = () => {
    const nayroozSongs = songFunctionNames
    .filter(song => song.properties.includes("nayrooz"))
    .map(song => song.name)
    .flat();

    const songsHtml = nayroozSongs
    .map((songName, index) => getSongHtml(songName, index))
    .join('');


return `
<div class="section" id="section_1">
${songsHtml}
</div>
`;
};