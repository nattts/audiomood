import { highlight } from './highlight.js';
import { data } from 'components/fetch/genres.js';
//import { display } from 'components/player/tracks';
import { playTrack } from 'components/player/play.js';
import { eventEmitter } from 'components/emitter';
import * as h from 'utils/helpers.js';

const yellow = '#ffdab3';
const isOnLoad = true;

const collectAndDisplay = mood => {
	if (!mood || typeof mood !== 'string') throw new Error('argument must be a valid string');
	return data(mood)
		.then(tracks => h.display(tracks))
		.then(playlist => playTrack(playlist))
		.catch(err => console.log(err));
};

const defaultPlay = (parent,json) => {
	if (!parent || !json) throw new Error('argument must be the right format');
	const random = h.randomMood(json);
	highlight(random, parent, yellow, isOnLoad);
	collectAndDisplay(random);
};

const chooseMood = parent => {
	if (parent === null || !parent.length || !Array.isArray(parent) ) throw new Error('arg must be an array containing div elements'); 
	parent.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const mood = e.target.innerHTML;
			highlight(mood, parent, yellow, !isOnLoad);
			eventEmitter.emit('resetPlaylist');
			eventEmitter.emit('resetGenre');
			collectAndDisplay(mood);
		});
	});

};

export const play = (parentElement,json) => {
	try {
		const parent = Array.from(parentElement.children);
		defaultPlay(parent,json);
		chooseMood(parent);
	} catch(err) {
		console.log('module catch', err);
	}
};

