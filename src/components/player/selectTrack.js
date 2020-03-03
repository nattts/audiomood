
//src is taken from the clicked element and passed to the audio element
// to play the chosen track.

export const selectTrack = async e => {
	const audio = document.querySelector('.audio');
	let src = e.target.getAttribute('data-src');
	audio.setAttribute('src',src);
};
