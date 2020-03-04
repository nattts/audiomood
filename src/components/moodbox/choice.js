import { highlight } from './highlight.js';
import { data } from 'components/fetch/genres.js';
import { display } from 'components/player/tracks';
import { playTrack } from 'components/player/play.js';
import { eventEmitter } from 'components/emitter';
import * as helper from 'utils/helpers.js';
import json from 'components/moodbox/mood';

const yellow = '#ffdab3';
const isOnLoad = true;

export const chooseMood = async parentElement => {
	const parent = Array.from(parentElement.children);

	parent.forEach(async(x) => {
		x.addEventListener('click', async(e) => {
			const mood = e.target.innerHTML;
			const tracks = await data(mood);
			await highlight(mood, parent, yellow, !isOnLoad);
			
			//clearing previously displayed tracks if there were any
			eventEmitter.emit('resetPlaylist');
			eventEmitter.emit('resetGenre');

			const playlist = await display(tracks);
			await playTrack(playlist);
		});
	});
};


export const defaultPlay = async (parentElement) => {
	let random = helper.randomMood(json);
	const parent = Array.from(parentElement.children);
	await highlight(random, parent, yellow, isOnLoad);
	const tracks = await data(random);
	const playlist = await display(tracks);
	await playTrack(playlist);
};

