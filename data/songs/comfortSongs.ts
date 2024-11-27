import { songFunctionNames , getSongHtml} from './songTexts';

export const comfortSongs = () => {
    const comfortSongs = songFunctionNames
    .filter(song => song.properties.includes("comfort"))
    .map(song => song.name)
    .flat();

    const songsHtml = comfortSongs
    .map((songName, index) => getSongHtml(songName, index))
    .join('');

return `
<body>
<div class="section" id="section_1">
${songsHtml}
</div>
</body>
`;
};