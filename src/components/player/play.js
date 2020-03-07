import { eventEmitter } from 'components/emitter';

let currentlyHightlighted = "";

//takes genre info stored on the track element and 
//displays currently played genre above the tracks

export const genre_info = e => {
	const genre_info = document.querySelector('.genre-info');
	const genre = e.target.getAttribute('data-genre');
	genre_info.innerHTML = genre;
};

//src is taken from the clicked element and passed to the audio element
const selectTrack = e => {
	const audio = document.querySelector('.audio');
	const src = e.target.getAttribute('data-src');
	audio.setAttribute('src',src);
};

const highlightTrack = (target, colour)  => {
	if (!target || ! colour) throw new Error();
	target.style.backgroundColor = colour;
};

/**
 current playlist div element is passed in.
 @param {playlistDiv}: HTML Element
*/

export const playTrack = playlistDiv => {
	try { 
		if (!playlistDiv || playlistDiv instanceof HTMLElement === false) {
			throw new Error('arg must be a DIV');	
		}
		const playlist = Array.from(playlistDiv.children);
		const lightblue = '#e6f8fe';
		
		//click event on every child (track)
		playlist.forEach((x) => {
			x.addEventListener('click',(e) => {
				selectTrack(e);
				if (currentlyHightlighted) {
					eventEmitter.emit('deHighlight', currentlyHightlighted);
					highlightTrack(e.target, lightblue);
					currentlyHightlighted = e.target;
				} else {
					highlightTrack(e.target, lightblue);
					genre_info(e);	
					currentlyHightlighted = e.target;
				}
			});
		});
	} catch(err) {
		console.log(err);
	}
};

