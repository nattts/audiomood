
export const resetPlaylist = () => {
	const playlist = document.querySelector('.playlist');
	if (playlist.hasChildNodes()){
		Array.from(playlist.childNodes).forEach((item) => item.parentNode.removeChild(item));
	} 
};

export const resetGenre = () => {
	const info = document.querySelector('.genre-info');
	info.innerHTML = '';
};
