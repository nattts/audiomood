import { highlight } from 'components/moodbox/highlight.js';
import { selectTrack } from './selectTrack.js';


export const playTrack = async playlistDiv => {
 
 const playlist = Array.from(playlistDiv.children);

 playlist.forEach((x) => {
  x.addEventListener('click', async(e) => {
   await selectTrack(e);
   await highlight(e,playlist);
  });
 
 });

};

