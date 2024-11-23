import { songFunctionNames , getSongHtml} from './songTexts';

export const stMarySongs = () => {
    const stMarySongs = songFunctionNames
    .filter(song => song.properties.includes("stMary"))
    .map(song => song.name)
    .flat();

    const songsHtml = stMarySongs
    .map((songName, index) => getSongHtml(songName, index))
    .join('');


return `
<div class="section" id="section_1">
${songsHtml}
</div>
`;
};