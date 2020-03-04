
export const resetPlaylist = async () => {
	try {
		const playlist = document.querySelector('.playlist');
		if (playlist.hasChildNodes()){
			Array.from(playlist.childNodes).forEach((item) => item.parentNode.removeChild(item));
		} 
	}
	catch(e) { throw new Error ('error in resetPlaylist');}
};


export const resetGenre = async () => {
	try {
		const info = document.querySelector('.genre-info');
		info.innerHTML = '';
	}
	catch(e) { throw new Error ('error in resetting genre');}
};
