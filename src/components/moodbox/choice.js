import { highlight } from './highlight.js';
import { data } from 'components/fetch/genres.js';
import { display } from 'components/player/tracks';
import { playTrack } from 'components/player/play.js';
import { ee } from 'components/emitter';

//choose the mood

export const choose = async divs => {
 
 const parent = Array.from(divs.children);
 
 parent.forEach(async(x) => {
  x.addEventListener('click', async(e) => {
   await highlight(e,parent);
   const mood = e.target.innerHTML;
   const genres = await data(mood);
   ee.emit('reset');
   //ee
   const playlist = await display(genres);
   await playTrack(playlist);
  });
 });

};