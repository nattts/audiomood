import { highlight } from 'components/moodbox/highlight.js';
import { selectTrack } from './selectTrack.js';
import { genre_info } from './genreInfo.js';

//current playlist div element is passed in.
export const playTrack = async playlistDiv => {
 
 const playlist = Array.from(playlistDiv.children);
 const lightblue = '#e6f8fe';
 
 //click event on every child
 
 playlist.forEach((x) => {
  x.addEventListener('click', async(e) => {
   await selectTrack(e);
   await highlight(e,playlist, lightblue);
   await genre_info(e);
  });
 
 });

};

