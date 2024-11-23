import { songFunctionNames , getSongHtml} from './songTexts';

export const resurrectionSongs = () => {
    const resurrectionSongs = songFunctionNames
    .filter(song => song.properties.includes("resurrection"))
    .map(song => song.name)
    .flat();

    const songsHtml = resurrectionSongs
    .map((songName, index) => getSongHtml(songName, index))
    .join('');


return `
<div class="section" id="section_1">
${songsHtml}
</div>
`;
};