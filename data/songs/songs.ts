/** @format */

import { getSongHtml , songFunctionNames} from "./songTexts";

export const songs = () => {
  const allSongs = songFunctionNames
        .map(song => song.name)
        .flat();

  const songsHtml = allSongs
  .map((songName, index) => getSongHtml(songName, index))
  .join('');







  return `
<div class="section" id="section_1">
    ${songsHtml}
</div>
`;
};
