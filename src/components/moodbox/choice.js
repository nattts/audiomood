import { highlight } from './highlight.js';
import { data } from 'components/fetch/genres.js';
import { display } from 'components/player/tracks';
import { playTrack } from 'components/player/play.js';
import { eventEmitter } from 'components/emitter';


//choose the mood

export const chooseMood = async parentElement => {
 
 const parent = Array.from(parentElement.children);
 const yellow = '#ffdab3';

 parent.forEach(async(x) => {
  x.addEventListener('click', async(e) => {
   await highlight(e,parent, yellow);
   const mood = e.target.innerHTML;
   const tracks = await data(mood);
   
   //clearing previously displayed tracks if there were any
   eventEmitter.emit('resetPlaylist');
   eventEmitter.emit('resetGenre');

   const playlist = await display(tracks);
   await playTrack(playlist);
  });
 });

};